/**
 * Story — the narrative spine of Dead Sector.
 *
 * The brief asked for a story-driven game that flows continuously instead of
 * stopping for phase/wave intermission screens. This module owns:
 *
 *   - A scripted sequence of story "beats", each triggered by a condition
 *     (elapsed time, total kills, wave reached, low health, first sighting of
 *     a new enemy type…). When a beat fires it queues a radio transmission
 *     from command + an objective update that plays out while the player keeps
 *     fighting. The action never pauses.
 *   - The live objective line shown in the HUD.
 *   - Automatic weapon unlocks at story milestones (no shop screen — the
 *     intermission is gone, the arsenal is delivered to you in the field by
 *     airdrop narrative).
 *   - Adaptive banter so the radio has something to say during quiet stretches
 *     and reacts to how the player is doing (low health, big streaks, etc).
 *
 * The beats are written as a single flowing arc — the outbreak, the holding
 * action, the failed extraction, the discovery of what the sector really is,
 * and the final last-stand — so the game reads as one continuous story whose
 * pacing tracks the player's survival, not a series of menu screens.
 */

const BEATS = [
  {
    id: 'intro',
    cond: (s) => s.time > 1.5,
    once: true,
    line: 'Command to Survivor. Comms just went dark across the sector. You are the last signal we have. Hold your ground.',
    obj: 'Survive the outbreak',
    unlock: null
  },
  {
    id: 'first_kills',
    cond: (s) => s.kills >= 3,
    once: true,
    line: 'Good shooting. Whatever this is, it spreads fast. We are working on extraction — stay alive until then.',
    obj: 'Hold the sector until extraction',
    unlock: null
  },
  {
    id: 'wave2',
    cond: (s) => s.wave >= 2 && s.kills >= 8,
    once: true,
    line: 'More of them pushing in from the east blocks. Airdropping you a BREAKER 12G — use it close, it kicks.',
    obj: 'Clear the eastern approach',
    unlock: 'shotgun'
  },
  {
    id: 'runner_sight',
    cond: (s) => s.seenTypes.has('runner'),
    once: true,
    line: 'Command — we have fast movers on the scope. Runners. They will close on you before you can blink. Keep moving.',
    obj: 'Watch for runners',
    unlock: null
  },
  {
    id: 'wave4',
    cond: (s) => s.wave >= 4,
    once: true,
    line: 'VECTOR-9 suppressed SMG coming down on the next drop. Quiet fire keeps the horde off you longer.',
    obj: 'Push toward the supply drop',
    unlock: 'smg'
  },
  {
    id: 'brute_sight',
    cond: (s) => s.seenTypes.has('brute'),
    once: true,
    line: 'Heavy contact — that is a Brute. It will soak a full magazine and still reach you. Aim for the head, do not let it close.',
    obj: 'Take down the Brute',
    unlock: null
  },
  {
    id: 'bloater_sight',
    cond: (s) => s.seenTypes.has('bloater'),
    once: true,
    line: 'Bloater in the open — gas-swollen, volatile. Kill it at range. If it pops next to you, you will not get up.',
    obj: 'Neutralise the Bloater at range',
    unlock: null
  },
  {
    id: 'extraction_failed',
    cond: (s) => s.wave >= 5 && s.time > 180,
    once: true,
    line: 'Negative on extraction. The bird got swarmed on approach. There is no ride coming. You are on your own now.',
    obj: 'No extraction — survive',
    unlock: null
  },
  {
    id: 'wave6',
    cond: (s) => s.wave >= 6,
    once: true,
    line: 'Last long gun we have — LONGSHOT .338. It will punch through four of them in a line. Make every round count.',
    obj: 'Reach the sniper drop',
    unlock: 'sniper'
  },
  {
    id: 'discovery',
    cond: (s) => s.wave >= 8 && s.kills >= 60,
    once: true,
    line: 'Command intercepts suggest the sector was not a quarantine. It was a test site. They left you there to see what would happen.',
    obj: 'Find the truth — keep fighting',
    unlock: null
  },
  {
    id: 'last_stand',
    cond: (s) => s.wave >= 10,
    once: true,
    line: 'Whatever you are doing, it is working. They are throwing everything they have left at you. This is the last stand, survivor. Make it count.',
    obj: 'Last stand — hold the line',
    unlock: null
  },
  {
    id: 'legend',
    cond: (s) => s.wave >= 14,
    once: true,
    line: 'Command to all remaining frequencies. There is a survivor in Sector 7 still holding. If anyone can hear this — they are not coming back for us. Godspeed.',
    obj: 'Become a legend',
    unlock: null
  }
];

/* Adaptive banter lines spoken between scripted beats so the radio stays alive
 * during long survival runs. Chosen by a simple state classifier. */
const BANTER = {
  quiet: [
    'Sector is quiet… too quiet. Stay sharp.',
    'Movement on the thermals, north of your position.',
    'They are regrouping. Use the lull to reload.',
    'Command is re-routing satellites to your sector. Sit tight.',
    'You are doing better than anyone we sent in before.'
  ],
  streak: [
    'Outstanding work. Keep that trigger discipline.',
    'That is the kind of shooting we need.',
    'You are making them hesitate. They do not usually hesitate.',
    'Streak like that, we might start calling you by name.'
  ],
  hurt: [
    'Survivor, your vitals are dropping. Find medkits — they are marked.',
    'You are hurt. Pull back, let the armor regenerate.',
    'Command — get behind something, you are bleeding out.'
  ],
  big: [
    'Heavy unit down. That was not easy.',
    'Bloater neutralised. Good call on the range.',
    'Brute is in the dirt. They will think twice now.'
  ]
};

export class Story {
  constructor(game) {
    this.game = game;
    this.fired = new Set();
    this.queue = [];          // pending radio lines: {text, t, life, kind}
    this.currentObj = 'Survive the outbreak';
    this.objT = 0;
    this.banterCd = 18;
    this.lastBanterKind = 'quiet';
    // accumulators pushed in from Game each frame
    this.seenTypes = new Set();
  }

  /** Reset for a new run. */
  reset() {
    this.fired.clear();
    this.queue.length = 0;
    this.currentObj = 'Survive the outbreak';
    this.objT = 0;
    this.banterCd = 18;
    this.seenTypes.clear();
    this.active = null;
  }

  /** Queue a radio transmission. kind controls the HUD styling. */
  say(text, kind = 'cmd') {
    this.queue.push({ text, t: 0, life: 6.5, kind });
    if (this.queue.length > 3) this.queue.shift();
    this.game.audio?.play('radio', null, 0.5);
  }

  setObjective(text) {
    if (text === this.currentObj) return;
    this.currentObj = text;
    this.objT = 4.5;          // flash the new objective briefly
    this.game.hud?.setObjective(text);
  }

  /** Called every playing frame with the live run state. */
  update(dt, stats) {
    // track enemy types the player has encountered this run
    for (const z of this.game.zombies) {
      if (!z.dead) this.seenTypes.add(z.type);
    }

    // fire any beats whose condition is met
    for (const b of BEATS) {
      if (this.fired.has(b.id)) continue;
      try {
        if (b.cond(stats)) {
          this.fired.add(b.id);
          if (b.line) this.say(b.line, b.unlock ? 'drop' : 'cmd');
          if (b.obj) this.setObjective(b.obj);
          if (b.unlock) {
            // grant the weapon immediately, in the field — no shop screen
            this.game.player.owned[b.unlock] = true;
            this.game.hud?.toast(this.game.player.weapons[b.unlock].stats.name + ' AIRDROPPED', 'good');
            this.game.audio?.play('weaponPickup', null, 0.85);
            this.game.player.giveAmmo(1.2);
            this.game.hud?.setWeapon(this.game.player.stats, this.game.player.ammoNow);
          }
        }
      } catch (e) { /* a beat condition error never stops the game */ }
    }

    // age queued radio lines
    for (let i = this.queue.length - 1; i >= 0; i--) {
      const q = this.queue[i];
      q.t += dt;
      if (q.t >= q.life) this.queue.splice(i, 1);
    }
    if (this.objT > 0) this.objT -= dt;

    // adaptive banter between beats
    this.banterCd -= dt;
    if (this.banterCd <= 0 && this.queue.length === 0) {
      this.banterCd = 22 + Math.random() * 14;
      const p = this.game.player;
      let kind = 'quiet';
      if (p && p.hp < 35) kind = 'hurt';
      else if (stats.streak >= 8) kind = 'streak';
      else if (this.seenTypes.has('brute') || this.seenTypes.has('bloater')) {
        // occasionally comment on heavies if one was recently killed
        if (Math.random() < 0.4) kind = 'big';
      }
      const lines = BANTER[kind] || BANTER.quiet;
      this.say(lines[(Math.random() * lines.length) | 0], kind === 'hurt' ? 'warn' : 'cmd');
      this.lastBanterKind = kind;
    }
  }

  /** The current radio queue, for the HUD to render as a subtitle strip. */
  radioLines() { return this.queue; }
}
