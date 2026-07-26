(()=>{var Cc="169";var p0=0,kh=1,m0=2;var Xu=1,Pc=2,Kn=3,zn=0,tn=1,Ee=2,ke=0,hi=1,qe=2,Hh=3,Vh=4,Ca=5,Nn=100,g0=101,v0=102,x0=103,y0=104,Pa=200,M0=201,b0=202,_0=203,ol=204,ll=205,Ic=206,S0=207,Lc=208,w0=209,E0=210,T0=211,A0=212,R0=213,C0=214,cl=0,hl=1,ul=2,vs=3,dl=4,fl=5,pl=6,ml=7,qu=0,P0=1,I0=2,ui=0,Dc=1,Uc=2,Nc=3,nr=4,L0=5,Oc=6,Bc=7;var Yu=300,xs=301,ys=302,gl=303,vl=304,Ia=306,Bi=1e3,Oi=1001,xl=1002,Pe=1003,D0=1004;var vr=1005;var nn=1006,Eo=1007;var On=1008;var Pn=1009,Zu=1010,ju=1011,Xs=1012,zc=1013,zi=1014,Bn=1015,Ae=1016,Fc=1017,kc=1018,fi=1020,Ku=35902,Ju=1021,Qu=1022,sn=1023,$u=1024,td=1025,ps=1026,pi=1027,Hc=1028,Vc=1029,ed=1030,Gc=1031;var Wc=1033,Gr=33776,Wr=33777,Xr=33778,qr=33779,yl=35840,Ml=35841,bl=35842,_l=35843,Sl=36196,wl=37492,El=37496,Tl=37808,Al=37809,Rl=37810,Cl=37811,Pl=37812,Il=37813,Ll=37814,Dl=37815,Ul=37816,Nl=37817,Ol=37818,Bl=37819,zl=37820,Fl=37821,Yr=36492,kl=36494,Hl=36495,nd=36283,Vl=36284,Gl=36285,Wl=36286;var jr=2300,Xl=2301,To=2302,Gh=2400,Wh=2401,Xh=2402;var U0=3200,N0=3201;var Xc=0,O0=1,gn="",Xe="srgb",Mi="srgb-linear",qc="display-p3",La="display-p3-linear",Kr="linear",me="srgb",Jr="rec709",Qr="p3";var Ji=7680;var qh=519,B0=512,z0=513,F0=514,id=515,k0=516,H0=517,V0=518,G0=519,Yh=35044,bi=35048;var Zh="300 es",Qn=2e3,$r=2001,mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ao=Math.PI/180,ta=180/Math.PI;function As(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[r&255]+Qe[r>>8&255]+Qe[r>>16&255]+Qe[r>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function Fe(r,t,e){return Math.max(t,Math.min(e,r))}function W0(r,t){return(r%t+t)%t}function Ro(r,t,e){return(1-e)*r+e*t}function Ls(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var X=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},te=class r{constructor(t,e,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],p=i[3],m=i[6],y=i[1],M=i[4],x=i[7],T=i[2],_=i[5],w=i[8];return s[0]=a*v+o*y+l*T,s[3]=a*p+o*M+l*_,s[6]=a*m+o*x+l*w,s[1]=c*v+h*y+u*T,s[4]=c*p+h*M+u*_,s[7]=c*m+h*x+u*w,s[2]=d*v+f*y+g*T,s[5]=d*p+f*M+g*_,s[8]=d*m+f*x+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=d*v,t[4]=(h*e-i*l)*v,t[5]=(i*s-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Co.makeScale(t,e)),this}rotate(t){return this.premultiply(Co.makeRotation(-t)),this}translate(t,e){return this.premultiply(Co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Co=new te;function sd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ea(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function X0(){let r=ea("canvas");return r.style.display="block",r}var jh={};function Zr(r){r in jh||(jh[r]=!0,console.warn(r))}function q0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Y0(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Z0(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Kh=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jh=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ds={[Mi]:{transfer:Kr,primaries:Jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Xe]:{transfer:me,primaries:Jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[La]:{transfer:Kr,primaries:Qr,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Jh),fromReference:r=>r.applyMatrix3(Kh)},[qc]:{transfer:me,primaries:Qr,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Jh),fromReference:r=>r.applyMatrix3(Kh).convertLinearToSRGB()}},j0=new Set([Mi,La]),oe={enabled:!0,_workingColorSpace:Mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!j0.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let n=Ds[t].toReference,i=Ds[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Ds[r].primaries},getTransfer:function(r){return r===gn?Kr:Ds[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(Ds[t].luminanceCoefficients)}};function ms(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Po(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Qi,ql=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qi===void 0&&(Qi=ea("canvas")),Qi.width=t.width,Qi.height=t.height;let n=Qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ea("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ms(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ms(e[n]/255)*255):e[n]=ms(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},K0=0,na=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=As(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Io(i[a].image)):s.push(Io(i[a]))}else s=Io(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Io(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ql.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var J0=0,Ye=class r extends mi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Oi,i=Oi,s=nn,a=On,o=sn,l=Pn,c=r.DEFAULT_ANISOTROPY,h=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=As(),this.name="",this.source=new na(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new X(0,0),this.repeat=new X(1,1),this.center=new X(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bi:t.x=t.x-Math.floor(t.x);break;case Oi:t.x=t.x<0?0:1;break;case xl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bi:t.y=t.y-Math.floor(t.y);break;case Oi:t.y=t.y<0?0:1;break;case xl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Yu;Ye.DEFAULT_ANISOTROPY=1;var fe=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,x=(f+1)/2,T=(m+1)/2,_=(h+d)/4,w=(u+v)/4,C=(g+p)/4;return M>x&&M>T?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=_/n,s=w/n):x>T?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=_/i,s=C/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=w/s,i=C/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yl=class extends mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Ye(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new na(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ye=class extends Yl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ia=class extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zl=class extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let p=1-o,m=l*d+c*f+h*g+u*v,y=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let T=Math.sqrt(M),_=Math.atan2(T,m*y);p=Math.sin(p*_)/T,o=Math.sin(o*_)/T}let x=o*y;if(l=l*p+d*x,c=c*p+f*x,h=h*p+g*x,u=u*p+v*x,p===1-o){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lo.copy(this).projectOnVector(t),this.sub(Lo)}reflect(t){return this.sub(Lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lo=new A,Qh=new pe,$n=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,An):An.fromBufferAttribute(s,a),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(t.matrixWorld),this.union(xr)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),yr.subVectors(this.max,Us),$i.subVectors(t.a,Us),ts.subVectors(t.b,Us),es.subVectors(t.c,Us),si.subVectors(ts,$i),ri.subVectors(es,ts),Ai.subVectors($i,es);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ai.z,Ai.y,si.z,0,-si.x,ri.z,0,-ri.x,Ai.z,0,-Ai.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ai.y,Ai.x,0];return!Do(e,$i,ts,es,yr)||(e=[1,0,0,0,1,0,0,0,1],!Do(e,$i,ts,es,yr))?!1:(Mr.crossVectors(si,ri),e=[Mr.x,Mr.y,Mr.z],Do(e,$i,ts,es,yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Xn=[new A,new A,new A,new A,new A,new A,new A,new A],An=new A,xr=new $n,$i=new A,ts=new A,es=new A,si=new A,ri=new A,Ai=new A,Us=new A,yr=new A,Mr=new A,Ri=new A;function Do(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ri.fromArray(r,s);let o=i.x*Math.abs(Ri.x)+i.y*Math.abs(Ri.y)+i.z*Math.abs(Ri.z),l=t.dot(Ri),c=e.dot(Ri),h=n.dot(Ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Q0=new $n,Ns=new A,Uo=new A,In=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Q0.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);let e=Ns.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ns,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(Uo)),this.expandByPoint(Ns.copy(t.center).sub(Uo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},qn=new A,No=new A,br=new A,ai=new A,Oo=new A,_r=new A,Bo=new A,jl=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){No.copy(t).add(e).multiplyScalar(.5),br.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(No);let s=t.distanceTo(e)*.5,a=-this.direction.dot(br),o=ai.dot(this.direction),l=-ai.dot(br),c=ai.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(No).addScaledVector(br,d),f}intersectSphere(t,e){qn.subVectors(t.center,this.origin);let n=qn.dot(this.direction),i=qn.dot(qn)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,i,s){Oo.subVectors(e,t),_r.subVectors(n,t),Bo.crossVectors(Oo,_r);let a=this.direction.dot(Bo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,t);let l=o*this.direction.dot(_r.crossVectors(ai,_r));if(l<0)return null;let c=o*this.direction.dot(Oo.cross(ai));if(c<0||l+c>a)return null;let h=-o*ai.dot(Bo);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class r{constructor(t,e,n,i,s,a,o,l,c,h,u,d,f,g,v,p){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,d,f,g,v,p)}set(t,e,n,i,s,a,o,l,c,h,u,d,f,g,v,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ns.setFromMatrixColumn(t,0).length(),s=1/ns.setFromMatrixColumn(t,1).length(),a=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($0,t,tf)}lookAt(t,e,n){let i=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),oi.crossVectors(n,pn),oi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),oi.crossVectors(n,pn)),oi.normalize(),Sr.crossVectors(pn,oi),i[0]=oi.x,i[4]=Sr.x,i[8]=pn.x,i[1]=oi.y,i[5]=Sr.y,i[9]=pn.y,i[2]=oi.z,i[6]=Sr.z,i[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],y=n[3],M=n[7],x=n[11],T=n[15],_=i[0],w=i[4],C=i[8],D=i[12],b=i[1],S=i[5],U=i[9],z=i[13],k=i[2],j=i[6],F=i[10],tt=i[14],G=i[3],dt=i[7],lt=i[11],it=i[15];return s[0]=a*_+o*b+l*k+c*G,s[4]=a*w+o*S+l*j+c*dt,s[8]=a*C+o*U+l*F+c*lt,s[12]=a*D+o*z+l*tt+c*it,s[1]=h*_+u*b+d*k+f*G,s[5]=h*w+u*S+d*j+f*dt,s[9]=h*C+u*U+d*F+f*lt,s[13]=h*D+u*z+d*tt+f*it,s[2]=g*_+v*b+p*k+m*G,s[6]=g*w+v*S+p*j+m*dt,s[10]=g*C+v*U+p*F+m*lt,s[14]=g*D+v*z+p*tt+m*it,s[3]=y*_+M*b+x*k+T*G,s[7]=y*w+M*S+x*j+T*dt,s[11]=y*C+M*U+x*F+T*lt,s[15]=y*D+M*z+x*tt+T*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*f-n*l*f)+v*(+e*l*f-e*c*d+s*a*d-i*a*f+i*c*h-s*l*h)+p*(+e*c*u-e*o*f-s*a*u+n*a*f+s*o*h-n*c*h)+m*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],y=u*p*c-v*d*c+v*l*f-o*p*f-u*l*m+o*d*m,M=g*d*c-h*p*c-g*l*f+a*p*f+h*l*m-a*d*m,x=h*v*c-g*u*c+g*o*f-a*v*f-h*o*m+a*u*m,T=g*u*l-h*v*l-g*o*d+a*v*d+h*o*p-a*u*p,_=e*y+n*M+i*x+s*T;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/_;return t[0]=y*w,t[1]=(v*d*s-u*p*s-v*i*f+n*p*f+u*i*m-n*d*m)*w,t[2]=(o*p*s-v*l*s+v*i*c-n*p*c-o*i*m+n*l*m)*w,t[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*w,t[4]=M*w,t[5]=(h*p*s-g*d*s+g*i*f-e*p*f-h*i*m+e*d*m)*w,t[6]=(g*l*s-a*p*s-g*i*c+e*p*c+a*i*m-e*l*m)*w,t[7]=(a*d*s-h*l*s+h*i*c-e*d*c-a*i*f+e*l*f)*w,t[8]=x*w,t[9]=(g*u*s-h*v*s-g*n*f+e*v*f+h*n*m-e*u*m)*w,t[10]=(a*v*s-g*o*s+g*n*c-e*v*c-a*n*m+e*o*m)*w,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*f-e*o*f)*w,t[12]=T*w,t[13]=(h*v*i-g*u*i+g*n*d-e*v*d-h*n*p+e*u*p)*w,t[14]=(g*o*i-a*v*i-g*n*l+e*v*l+a*n*p-e*o*p)*w,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,g=s*u,v=a*h,p=a*u,m=o*u,y=l*c,M=l*h,x=l*u,T=n.x,_=n.y,w=n.z;return i[0]=(1-(v+m))*T,i[1]=(f+x)*T,i[2]=(g-M)*T,i[3]=0,i[4]=(f-x)*_,i[5]=(1-(d+m))*_,i[6]=(p+y)*_,i[7]=0,i[8]=(g+M)*w,i[9]=(p-y)*w,i[10]=(1-(d+v))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=ns.set(i[0],i[1],i[2]).length(),a=ns.set(i[4],i[5],i[6]).length(),o=ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Rn.copy(this);let c=1/s,h=1/a,u=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,e.setFromRotationMatrix(Rn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Qn){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(o===Qn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===$r)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Qn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),d=(e+t)*c,f=(n+i)*h,g,v;if(o===Qn)g=(a+s)*u,v=-2*u;else if(o===$r)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ns=new A,Rn=new jt,$0=new A(0,0,0),tf=new A(1,1,1),oi=new A,Sr=new A,pn=new A,$h=new jt,tu=new pe,Ie=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $h.makeRotationFromQuaternion(t),this.setFromRotationMatrix($h,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tu.setFromEuler(this),this.setFromQuaternion(tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ie.DEFAULT_ORDER="XYZ";var sa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ef=0,eu=new A,is=new pe,Yn=new jt,wr=new A,Os=new A,nf=new A,sf=new pe,nu=new A(1,0,0),iu=new A(0,1,0),su=new A(0,0,1),ru={type:"added"},rf={type:"removed"},ss={type:"childadded",child:null},zo={type:"childremoved",child:null},Ze=class r extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new A,e=new Ie,n=new pe,i=new A(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jt},normalMatrix:{value:new te}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(nu,t)}rotateY(t){return this.rotateOnAxis(iu,t)}rotateZ(t){return this.rotateOnAxis(su,t)}translateOnAxis(t,e){return eu.copy(t).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nu,t)}translateY(t){return this.translateOnAxis(iu,t)}translateZ(t){return this.translateOnAxis(su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wr.copy(t):wr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Os,wr,this.up):Yn.lookAt(wr,Os,this.up),this.quaternion.setFromRotationMatrix(Yn),i&&(Yn.extractRotation(i.matrixWorld),is.setFromRotationMatrix(Yn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ru),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rf),zo.child=t,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ru),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,nf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,sf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ze.DEFAULT_UP=new A(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cn=new A,Zn=new A,Fo=new A,jn=new A,rs=new A,as=new A,au=new A,ko=new A,Ho=new A,Vo=new A,Go=new fe,Wo=new fe,Xo=new fe,Ui=class r{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Cn.subVectors(t,e),i.cross(Cn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Cn.subVectors(i,e),Zn.subVectors(n,e),Fo.subVectors(t,e);let a=Cn.dot(Cn),o=Cn.dot(Zn),l=Cn.dot(Fo),c=Zn.dot(Zn),h=Zn.dot(Fo),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return Go.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Go.fromBufferAttribute(t,e),Wo.fromBufferAttribute(t,n),Xo.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Go,s.x),a.addScaledVector(Wo,s.y),a.addScaledVector(Xo,s.z),a}static isFrontFacing(t,e,n,i){return Cn.subVectors(n,e),Zn.subVectors(t,e),Cn.cross(Zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Cn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;rs.subVectors(i,n),as.subVectors(s,n),ko.subVectors(t,n);let l=rs.dot(ko),c=as.dot(ko);if(l<=0&&c<=0)return e.copy(n);Ho.subVectors(t,i);let h=rs.dot(Ho),u=as.dot(Ho);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(rs,a);Vo.subVectors(t,s);let f=rs.dot(Vo),g=as.dot(Vo);if(g>=0&&f<=g)return e.copy(s);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(as,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return au.subVectors(s,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(au,o);let m=1/(p+v+d);return a=v*m,o=d*m,e.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Er={h:0,s:0,l:0};function qo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=W0(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=qo(a,s,t+1/3),this.g=qo(a,s,t),this.b=qo(a,s,t-1/3)}return oe.toWorkingColorSpace(this,i),this}setStyle(t,e=Xe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let n=rd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}copyLinearToSRGB(t){return this.r=Po(t.r),this.g=Po(t.g),this.b=Po(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return oe.fromWorkingColorSpace($e.copy(this),t),Math.round(Fe($e.r*255,0,255))*65536+Math.round(Fe($e.g*255,0,255))*256+Math.round(Fe($e.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace($e.copy(this),e);let n=$e.r,i=$e.g,s=$e.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Xe){oe.fromWorkingColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,i=$e.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(Er);let n=Ro(li.h,Er.h,e),i=Ro(li.s,Er.s,e),s=Ro(li.l,Er.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new It;It.NAMES=rd;var af=0,gi=class extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=As(),this.name="",this.type="Material",this.blending=hi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=ll,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ol&&(n.blendSrc=this.blendSrc),this.blendDst!==ll&&(n.blendDst=this.blendDst),this.blendEquation!==Nn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Le=class extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ie,this.combine=qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new A,Tr=new X,He=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yh,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix3(t),this.setXY(e,Tr.x,Tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),i=hn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yh&&(t.usage=this.usage),t}};var ra=class extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var aa=class extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ee=class extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}},of=0,Sn=new jt,Yo=new Ze,os=new A,mn=new $n,Bs=new $n,ze=new A,Te=class r extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sd(t)?aa:ra)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return Yo.lookAt(t),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(mn.min,Bs.min),mn.expandByPoint(ze),ze.addVectors(mn.max,Bs.max),mn.expandByPoint(ze)):(mn.expandByPoint(Bs.min),mn.expandByPoint(Bs.max))}mn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)ze.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ze.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(t,c),ze.add(os)),i=Math.max(i,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new A,l[C]=new A;let c=new A,h=new A,u=new A,d=new X,f=new X,g=new X,v=new A,p=new A;function m(C,D,b){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,b),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,D),g.fromBufferAttribute(s,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),o[C].add(v),o[D].add(v),o[b].add(v),l[C].add(p),l[D].add(p),l[b].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,D=y.length;C<D;++C){let b=y[C],S=b.start,U=b.count;for(let z=S,k=S+U;z<k;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let M=new A,x=new A,T=new A,_=new A;function w(C){T.fromBufferAttribute(i,C),_.copy(T);let D=o[C];M.copy(D),M.sub(T.multiplyScalar(T.dot(D))).normalize(),x.crossVectors(_,D);let S=x.dot(l[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,S)}for(let C=0,D=y.length;C<D;++C){let b=y[C],S=b.start,U=b.count;for(let z=S,k=S+U;z<k;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new A,s=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new He(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ou=new jt,Ci=new jl,Ar=new In,lu=new A,Rr=new A,Cr=new A,Pr=new A,Zo=new A,Ir=new A,cu=new A,Lr=new A,Ct=class extends Ze{constructor(t=new Te,e=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){Ir.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Zo.fromBufferAttribute(u,t),a?Ir.addScaledVector(Zo,h):Ir.addScaledVector(Zo.sub(e),h))}e.add(Ir)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),Ci.copy(t.ray).recast(t.near),!(Ar.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Ar,lu)===null||Ci.origin.distanceToSquared(lu)>(t.far-t.near)**2))&&(ou.copy(s).invert(),Ci.copy(t.ray).applyMatrix4(ou),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),M=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let x=y,T=M;x<T;x+=3){let _=o.getX(x),w=o.getX(x+1),C=o.getX(x+2);i=Dr(this,m,t,n,c,h,u,_,w,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let y=o.getX(p),M=o.getX(p+1),x=o.getX(p+2);i=Dr(this,a,t,n,c,h,u,y,M,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=y,T=M;x<T;x+=3){let _=x,w=x+1,C=x+2;i=Dr(this,m,t,n,c,h,u,_,w,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let y=p,M=p+1,x=p+2;i=Dr(this,a,t,n,c,h,u,y,M,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function lf(r,t,e,n,i,s,a,o){let l;if(t.side===tn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===zn,o),l===null)return null;Lr.copy(o),Lr.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Lr);return c<e.near||c>e.far?null:{distance:c,point:Lr.clone(),object:r}}function Dr(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Rr),r.getVertexPosition(l,Cr),r.getVertexPosition(c,Pr);let h=lf(r,t,e,n,Rr,Cr,Pr,cu);if(h){let u=new A;Ui.getBarycoord(cu,Rr,Cr,Pr,u),i&&(h.uv=Ui.getInterpolatedAttribute(i,o,l,c,u,new X)),s&&(h.uv1=Ui.getInterpolatedAttribute(s,o,l,c,u,new X)),a&&(h.normal=Ui.getInterpolatedAttribute(a,o,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new A,materialIndex:0};Ui.getNormal(Rr,Cr,Pr,d.normal),h.face=d,h.barycoord=u}return h}var rn=class r extends Te{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function g(v,p,m,y,M,x,T,_,w,C,D){let b=x/w,S=T/C,U=x/2,z=T/2,k=_/2,j=w+1,F=C+1,tt=0,G=0,dt=new A;for(let lt=0;lt<F;lt++){let it=lt*S-z;for(let Nt=0;Nt<j;Nt++){let Zt=Nt*b-U;dt[v]=Zt*y,dt[p]=it*M,dt[m]=k,c.push(dt.x,dt.y,dt.z),dt[v]=0,dt[p]=0,dt[m]=_>0?1:-1,h.push(dt.x,dt.y,dt.z),u.push(Nt/w),u.push(1-lt/C),tt+=1}}for(let lt=0;lt<C;lt++)for(let it=0;it<w;it++){let Nt=d+it+j*lt,Zt=d+it+j*(lt+1),K=d+(it+1)+j*(lt+1),st=d+(it+1)+j*lt;l.push(Nt,Zt,st),l.push(Zt,K,st),G+=6}o.addGroup(f,G,D),f+=G,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ms(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function en(r){let t={};for(let e=0;e<r.length;e++){let n=Ms(r[e]);for(let i in n)t[i]=n[i]}return t}function cf(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ad(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Ke={clone:Ms,merge:en},hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,re=class extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},oa=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ci=new A,hu=new X,uu=new X,Ne=class extends oa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,hu,uu),e.subVectors(uu,hu)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ao*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ls=-90,cs=1,qs=class extends Ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ne(ls,cs,t,e);i.layers=this.layers,this.add(i);let s=new Ne(ls,cs,t,e);s.layers=this.layers,this.add(s);let a=new Ne(ls,cs,t,e);a.layers=this.layers,this.add(a);let o=new Ne(ls,cs,t,e);o.layers=this.layers,this.add(o);let l=new Ne(ls,cs,t,e);l.layers=this.layers,this.add(l);let c=new Ne(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$r)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},la=class extends Ye{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:xs,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ys=class extends ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new la(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new rn(5,5,5),s=new re({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:ke});s.uniforms.tEquirect.value=e;let a=new Ct(i,s),o=e.minFilter;return e.minFilter===On&&(e.minFilter=nn),new qs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}},jo=new A,df=new A,ff=new te,Jn=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=jo.subVectors(n,e).cross(df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(jo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ff.getNormalMatrix(t),i=this.coplanarPoint(jo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pi=new In,Ur=new A,Zs=class{constructor(t=new Jn,e=new Jn,n=new Jn,i=new Jn,s=new Jn,a=new Jn){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){let n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],v=i[10],p=i[11],m=i[12],y=i[13],M=i[14],x=i[15];if(n[0].setComponents(l-s,d-c,p-f,x-m).normalize(),n[1].setComponents(l+s,d+c,p+f,x+m).normalize(),n[2].setComponents(l+a,d+h,p+g,x+y).normalize(),n[3].setComponents(l-a,d-h,p-g,x-y).normalize(),n[4].setComponents(l-o,d-u,p-v,x-M).normalize(),e===Qn)n[5].setComponents(l+o,d+u,p+v,x+M).normalize();else if(e===$r)n[5].setComponents(o,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ur.x=i.normal.x>0?t.max.x:t.min.x,Ur.y=i.normal.y>0?t.max.y:t.min.y,Ur.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function od(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function pf(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Ve=class r extends Te{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){let y=m*d-a;for(let M=0;M<c;M++){let x=M*u-s;g.push(x,-y,0),v.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let M=y+c*m,x=y+c*(m+1),T=y+1+c*(m+1),_=y+1+c*m;f.push(M,x,_),f.push(x,T,_)}this.setIndex(f),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(v,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",qf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ap=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,op=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$p=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,em=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,im=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_m=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Om=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:vf,alphamap_pars_fragment:xf,alphatest_fragment:yf,alphatest_pars_fragment:Mf,aomap_fragment:bf,aomap_pars_fragment:_f,batching_pars_vertex:Sf,batching_vertex:wf,begin_vertex:Ef,beginnormal_vertex:Tf,bsdfs:Af,iridescence_fragment:Rf,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:If,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:Df,color_fragment:Uf,color_pars_fragment:Nf,color_pars_vertex:Of,color_vertex:Bf,common:zf,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:kf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Vf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Wf,colorspace_fragment:Xf,colorspace_pars_fragment:qf,envmap_fragment:Yf,envmap_common_pars_fragment:Zf,envmap_pars_fragment:jf,envmap_pars_vertex:Kf,envmap_physical_pars_fragment:op,envmap_vertex:Jf,fog_vertex:Qf,fog_pars_vertex:$f,fog_fragment:tp,fog_pars_fragment:ep,gradientmap_pars_fragment:np,lightmap_pars_fragment:ip,lights_lambert_fragment:sp,lights_lambert_pars_fragment:rp,lights_pars_begin:ap,lights_toon_fragment:lp,lights_toon_pars_fragment:cp,lights_phong_fragment:hp,lights_phong_pars_fragment:up,lights_physical_fragment:dp,lights_physical_pars_fragment:fp,lights_fragment_begin:pp,lights_fragment_maps:mp,lights_fragment_end:gp,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:xp,logdepthbuf_pars_vertex:yp,logdepthbuf_vertex:Mp,map_fragment:bp,map_pars_fragment:_p,map_particle_fragment:Sp,map_particle_pars_fragment:wp,metalnessmap_fragment:Ep,metalnessmap_pars_fragment:Tp,morphinstance_vertex:Ap,morphcolor_vertex:Rp,morphnormal_vertex:Cp,morphtarget_pars_vertex:Pp,morphtarget_vertex:Ip,normal_fragment_begin:Lp,normal_fragment_maps:Dp,normal_pars_fragment:Up,normal_pars_vertex:Np,normal_vertex:Op,normalmap_pars_fragment:Bp,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:kp,iridescence_pars_fragment:Hp,opaque_fragment:Vp,packing:Gp,premultiplied_alpha_fragment:Wp,project_vertex:Xp,dithering_fragment:qp,dithering_pars_fragment:Yp,roughnessmap_fragment:Zp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:Kp,shadowmap_pars_vertex:Jp,shadowmap_vertex:Qp,shadowmask_pars_fragment:$p,skinbase_vertex:tm,skinning_pars_vertex:em,skinning_vertex:nm,skinnormal_vertex:im,specularmap_fragment:sm,specularmap_pars_fragment:rm,tonemapping_fragment:am,tonemapping_pars_fragment:om,transmission_fragment:lm,transmission_pars_fragment:cm,uv_pars_fragment:hm,uv_pars_vertex:um,uv_vertex:dm,worldpos_vertex:fm,background_vert:pm,background_frag:mm,backgroundCube_vert:gm,backgroundCube_frag:vm,cube_vert:xm,cube_frag:ym,depth_vert:Mm,depth_frag:bm,distanceRGBA_vert:_m,distanceRGBA_frag:Sm,equirect_vert:wm,equirect_frag:Em,linedashed_vert:Tm,linedashed_frag:Am,meshbasic_vert:Rm,meshbasic_frag:Cm,meshlambert_vert:Pm,meshlambert_frag:Im,meshmatcap_vert:Lm,meshmatcap_frag:Dm,meshnormal_vert:Um,meshnormal_frag:Nm,meshphong_vert:Om,meshphong_frag:Bm,meshphysical_vert:zm,meshphysical_frag:Fm,meshtoon_vert:km,meshtoon_frag:Hm,points_vert:Vm,points_frag:Gm,shadow_vert:Wm,shadow_frag:Xm,sprite_vert:qm,sprite_frag:Ym},yt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new X(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new X(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Un={basic:{uniforms:en([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:en([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new It(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:en([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:en([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:en([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new It(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:en([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:en([yt.points,yt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:en([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:en([yt.common,yt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:en([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:en([yt.sprite,yt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:en([yt.common,yt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:en([yt.lights,yt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Un.physical={uniforms:en([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new X(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new X},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new X},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Nr={r:0,b:0,g:0},Ii=new Ie,Zm=new jt;function jm(r,t,e,n,i,s,a){let o=new It(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function v(y){let M=!1,x=g(y);x===null?m(o,l):x&&x.isColor&&(m(x,1),M=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(y,M){let x=g(M);x&&(x.isCubeTexture||x.mapping===Ia)?(h===void 0&&(h=new Ct(new rn(1,1,1),new re({name:"BackgroundCubeMaterial",uniforms:Ms(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,_,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ii.copy(M.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(Ii)),h.material.toneMapped=oe.getTransfer(x.colorSpace)!==me,(u!==x||d!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ct(new Ve(2,2),new re({name:"BackgroundMaterial",uniforms:Ms(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=oe.getTransfer(x.colorSpace)!==me,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,M){y.getRGB(Nr,ad(r)),n.buffers.color.setClear(Nr.r,Nr.g,Nr.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),l=M,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:v,addToRenderList:p}}function Km(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,a=!1;function o(b,S,U,z,k){let j=!1,F=u(z,U,S);s!==F&&(s=F,c(s.object)),j=f(b,z,U,k),j&&g(b,z,U,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,x(b,S,U,z),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function u(b,S,U){let z=U.wireframe===!0,k=n[b.id];k===void 0&&(k={},n[b.id]=k);let j=k[S.id];j===void 0&&(j={},k[S.id]=j);let F=j[z];return F===void 0&&(F=d(l()),j[z]=F),F}function d(b){let S=[],U=[],z=[];for(let k=0;k<e;k++)S[k]=0,U[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:U,attributeDivisors:z,object:b,attributes:{},index:null}}function f(b,S,U,z){let k=s.attributes,j=S.attributes,F=0,tt=U.getAttributes();for(let G in tt)if(tt[G].location>=0){let lt=k[G],it=j[G];if(it===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(it=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(it=b.instanceColor)),lt===void 0||lt.attribute!==it||it&&lt.data!==it.data)return!0;F++}return s.attributesNum!==F||s.index!==z}function g(b,S,U,z){let k={},j=S.attributes,F=0,tt=U.getAttributes();for(let G in tt)if(tt[G].location>=0){let lt=j[G];lt===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor));let it={};it.attribute=lt,lt&&lt.data&&(it.data=lt.data),k[G]=it,F++}s.attributes=k,s.attributesNum=F,s.index=z}function v(){let b=s.newAttributes;for(let S=0,U=b.length;S<U;S++)b[S]=0}function p(b){m(b,0)}function m(b,S){let U=s.newAttributes,z=s.enabledAttributes,k=s.attributeDivisors;U[b]=1,z[b]===0&&(r.enableVertexAttribArray(b),z[b]=1),k[b]!==S&&(r.vertexAttribDivisor(b,S),k[b]=S)}function y(){let b=s.newAttributes,S=s.enabledAttributes;for(let U=0,z=S.length;U<z;U++)S[U]!==b[U]&&(r.disableVertexAttribArray(U),S[U]=0)}function M(b,S,U,z,k,j,F){F===!0?r.vertexAttribIPointer(b,S,U,k,j):r.vertexAttribPointer(b,S,U,z,k,j)}function x(b,S,U,z){v();let k=z.attributes,j=U.getAttributes(),F=S.defaultAttributeValues;for(let tt in j){let G=j[tt];if(G.location>=0){let dt=k[tt];if(dt===void 0&&(tt==="instanceMatrix"&&b.instanceMatrix&&(dt=b.instanceMatrix),tt==="instanceColor"&&b.instanceColor&&(dt=b.instanceColor)),dt!==void 0){let lt=dt.normalized,it=dt.itemSize,Nt=t.get(dt);if(Nt===void 0)continue;let Zt=Nt.buffer,K=Nt.type,st=Nt.bytesPerElement,St=K===r.INT||K===r.UNSIGNED_INT||dt.gpuType===zc;if(dt.isInterleavedBufferAttribute){let pt=dt.data,Vt=pt.stride,Ht=dt.offset;if(pt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<G.locationSize;Xt++)m(G.location+Xt,pt.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Xt=0;Xt<G.locationSize;Xt++)p(G.location+Xt);r.bindBuffer(r.ARRAY_BUFFER,Zt);for(let Xt=0;Xt<G.locationSize;Xt++)M(G.location+Xt,it/G.locationSize,K,lt,Vt*st,(Ht+it/G.locationSize*Xt)*st,St)}else{if(dt.isInstancedBufferAttribute){for(let pt=0;pt<G.locationSize;pt++)m(G.location+pt,dt.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let pt=0;pt<G.locationSize;pt++)p(G.location+pt);r.bindBuffer(r.ARRAY_BUFFER,Zt);for(let pt=0;pt<G.locationSize;pt++)M(G.location+pt,it/G.locationSize,K,lt,it*st,it/G.locationSize*pt*st,St)}}else if(F!==void 0){let lt=F[tt];if(lt!==void 0)switch(lt.length){case 2:r.vertexAttrib2fv(G.location,lt);break;case 3:r.vertexAttrib3fv(G.location,lt);break;case 4:r.vertexAttrib4fv(G.location,lt);break;default:r.vertexAttrib1fv(G.location,lt)}}}}y()}function T(){C();for(let b in n){let S=n[b];for(let U in S){let z=S[U];for(let k in z)h(z[k].object),delete z[k];delete S[U]}delete n[b]}}function _(b){if(n[b.id]===void 0)return;let S=n[b.id];for(let U in S){let z=S[U];for(let k in z)h(z[k].object),delete z[k];delete S[U]}delete n[b.id]}function w(b){for(let S in n){let U=n[S];if(U[b.id]===void 0)continue;let z=U[b.id];for(let k in z)h(z[k].object),delete z[k];delete U[b.id]}}function C(){D(),a=!0,s!==i&&(s=i,c(s.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:D,dispose:T,releaseStatesOfGeometry:_,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function Jm(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Qm(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==sn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let C=w===Ae&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Pn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Bn&&!C)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,_=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:T,maxSamples:_}}function $m(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Jn,o=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{let y=s?0:n,M=y*4,x=m.clippingState||null;l.value=x,x=h(g,d,M,f);for(let T=0;T!==M;++T)x[T]=e[T];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let m=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,x=f;M!==v;++M,x+=4)a.copy(u[M]).applyMatrix4(y,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function tg(r){let t=new WeakMap;function e(a,o){return o===gl?a.mapping=xs:o===vl&&(a.mapping=ys),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===gl||o===vl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ys(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var vi=class extends oa{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ds=4,du=[.125,.215,.35,.446,.526,.582],Ni=20,Ko=new vi,fu=new It,Jo=null,Qo=0,$o=0,tl=!1,Di=(1+Math.sqrt(5))/2,hs=1/Di,pu=[new A(-Di,hs,0),new A(Di,hs,0),new A(-hs,0,Di),new A(hs,0,Di),new A(0,Di,-hs),new A(0,Di,hs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],bs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jo,Qo,$o),this._renderer.xr.enabled=tl,t.scissorTest=!1,Or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Ae,format:sn,colorSpace:Mi,depthBuffer:!1},i=mu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mu(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eg(s)),this._blurMaterial=ng(s,t,e)}return i}_compileMaterial(t){let e=new Ct(this._lodPlanes[0],t);this._renderer.compile(e,Ko)}_sceneToCubeUV(t,e,n,i){let o=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(fu),h.toneMapping=ui,h.autoClear=!1;let f=new Le({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new Ct(new rn,f),v=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,v=!0):(f.color.copy(fu),v=!0);for(let m=0;m<6;m++){let y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let M=this._cubeSize;Or(i,y*M,m>2?M:0,M,M),h.setRenderTarget(i),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===xs||t.mapping===ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gu());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ct(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;Or(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ko)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=pu[(i-s-1)%pu.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ct(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ni-1),v=s/g,p=isFinite(s)?1+Math.floor(h*v):Ni;p>Ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ni}`);let m=[],y=0;for(let w=0;w<Ni;++w){let C=w/v,D=Math.exp(-C*C/2);m.push(D),w===0?y+=D:w<p&&(y+=2*D)}for(let w=0;w<m.length;w++)m[w]=m[w]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;let x=this._sizeLods[i],T=3*x*(i>M-ds?i-M+ds:0),_=4*(this._cubeSize-x);Or(e,T,_,3*x,2*x),l.setRenderTarget(e),l.render(u,Ko)}};function eg(r){let t=[],e=[],n=[],i=r,s=r-ds+1+du.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>r-ds?l=du[a-r+ds-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,p=2,m=1,y=new Float32Array(v*g*f),M=new Float32Array(p*g*f),x=new Float32Array(m*g*f);for(let _=0;_<f;_++){let w=_%3*2/3-1,C=_>2?0:-1,D=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(D,v*g*_),M.set(d,p*g*_);let b=[_,_,_,_,_,_];x.set(b,m*g*_)}let T=new Te;T.setAttribute("position",new He(y,v)),T.setAttribute("uv",new He(M,p)),T.setAttribute("faceIndex",new He(x,m)),t.push(T),i>ds&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function mu(r,t,e){let n=new ye(r,t,e);return n.texture.mapping=Ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function ng(r,t,e){let n=new Float32Array(Ni),i=new A(0,1,0);return new re({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ke,depthTest:!1,depthWrite:!1})}function gu(){return new re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ke,depthTest:!1,depthWrite:!1})}function vu(){return new re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ke,depthTest:!1,depthWrite:!1})}function Yc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ig(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===gl||l===vl,h=l===xs||l===ys;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new bs(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new bs(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function sg(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Zr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rg(r,t,e,n){let i={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}d.removeEventListener("dispose",a),delete i[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let v=f[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],r.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let y=f.array;v=f.version;for(let M=0,x=y.length;M<x;M+=3){let T=y[M+0],_=y[M+1],w=y[M+2];d.push(T,_,_,w,w,T)}}else if(g!==void 0){let y=g.array;v=g.version;for(let M=0,x=y.length/3-1;M<x;M+=3){let T=M+0,_=M+1,w=M+2;d.push(T,_,_,w,w,T)}}else return;let p=new(sd(d)?aa:ra)(d,1);p.version=v;let m=s.get(u);m&&t.remove(m),s.set(u,p)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ag(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function u(d,f,g,v){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,v,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y];for(let y=0;y<v.length;y++)e.update(m,n,v[y])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function og(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function lg(r,t,e){let n=new WeakMap,i=new fe;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let D=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let x=o.attributes.position.count*M,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let _=new Float32Array(x*T*4*u),w=new ia(_,x,T,u);w.type=Bn,w.needsUpdate=!0;let C=M*4;for(let b=0;b<u;b++){let S=p[b],U=m[b],z=y[b],k=x*T*4*b;for(let j=0;j<S.count;j++){let F=j*C;f===!0&&(i.fromBufferAttribute(S,j),_[k+F+0]=i.x,_[k+F+1]=i.y,_[k+F+2]=i.z,_[k+F+3]=0),g===!0&&(i.fromBufferAttribute(U,j),_[k+F+4]=i.x,_[k+F+5]=i.y,_[k+F+6]=i.z,_[k+F+7]=0),v===!0&&(i.fromBufferAttribute(z,j),_[k+F+8]=i.x,_[k+F+9]=i.y,_[k+F+10]=i.z,_[k+F+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new X(x,T)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function cg(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var _s=class extends Ye{constructor(t,e,n,i,s,a,o,l,c,h=ps){if(h!==ps&&h!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ps&&(n=zi),n===void 0&&h===pi&&(n=fi),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Pe,this.minFilter=l!==void 0?l:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ld=new Ye,xu=new _s(1,1),cd=new ia,hd=new Zl,ud=new la,yu=[],Mu=[],bu=new Float32Array(16),_u=new Float32Array(9),Su=new Float32Array(4);function Rs(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=yu[i];if(s===void 0&&(s=new Float32Array(i),yu[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Oe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Be(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Da(r,t){let e=Mu[t];e===void 0&&(e=new Int32Array(t),Mu[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function hg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function ug(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;r.uniform2fv(this.addr,t),Be(e,t)}}function dg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;r.uniform3fv(this.addr,t),Be(e,t)}}function fg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;r.uniform4fv(this.addr,t),Be(e,t)}}function pg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Su.set(n),r.uniformMatrix2fv(this.addr,!1,Su),Be(e,n)}}function mg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;_u.set(n),r.uniformMatrix3fv(this.addr,!1,_u),Be(e,n)}}function gg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;bu.set(n),r.uniformMatrix4fv(this.addr,!1,bu),Be(e,n)}}function vg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function xg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;r.uniform2iv(this.addr,t),Be(e,t)}}function yg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;r.uniform3iv(this.addr,t),Be(e,t)}}function Mg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;r.uniform4iv(this.addr,t),Be(e,t)}}function bg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function _g(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;r.uniform2uiv(this.addr,t),Be(e,t)}}function Sg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;r.uniform3uiv(this.addr,t),Be(e,t)}}function wg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;r.uniform4uiv(this.addr,t),Be(e,t)}}function Eg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(xu.compareFunction=id,s=xu):s=ld,e.setTexture2D(t||s,i)}function Tg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||hd,i)}function Ag(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ud,i)}function Rg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||cd,i)}function Cg(r){switch(r){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return vg;case 35667:case 35671:return xg;case 35668:case 35672:return yg;case 35669:case 35673:return Mg;case 5125:return bg;case 36294:return _g;case 36295:return Sg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}function Pg(r,t){r.uniform1fv(this.addr,t)}function Ig(r,t){let e=Rs(t,this.size,2);r.uniform2fv(this.addr,e)}function Lg(r,t){let e=Rs(t,this.size,3);r.uniform3fv(this.addr,e)}function Dg(r,t){let e=Rs(t,this.size,4);r.uniform4fv(this.addr,e)}function Ug(r,t){let e=Rs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Ng(r,t){let e=Rs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Og(r,t){let e=Rs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Bg(r,t){r.uniform1iv(this.addr,t)}function zg(r,t){r.uniform2iv(this.addr,t)}function Fg(r,t){r.uniform3iv(this.addr,t)}function kg(r,t){r.uniform4iv(this.addr,t)}function Hg(r,t){r.uniform1uiv(this.addr,t)}function Vg(r,t){r.uniform2uiv(this.addr,t)}function Gg(r,t){r.uniform3uiv(this.addr,t)}function Wg(r,t){r.uniform4uiv(this.addr,t)}function Xg(r,t,e){let n=this.cache,i=t.length,s=Da(e,i);Oe(n,s)||(r.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||ld,s[a])}function qg(r,t,e){let n=this.cache,i=t.length,s=Da(e,i);Oe(n,s)||(r.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||hd,s[a])}function Yg(r,t,e){let n=this.cache,i=t.length,s=Da(e,i);Oe(n,s)||(r.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||ud,s[a])}function Zg(r,t,e){let n=this.cache,i=t.length,s=Da(e,i);Oe(n,s)||(r.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||cd,s[a])}function jg(r){switch(r){case 5126:return Pg;case 35664:return Ig;case 35665:return Lg;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return Og;case 5124:case 35670:return Bg;case 35667:case 35671:return zg;case 35668:case 35672:return Fg;case 35669:case 35673:return kg;case 5125:return Hg;case 36294:return Vg;case 36295:return Gg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Zg}}var Kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cg(e.type)}},Jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jg(e.type)}},Ql=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},el=/(\w+)(\])?(\[|\.)?/g;function wu(r,t){r.seq.push(t),r.map[t.id]=t}function Kg(r,t,e){let n=r.name,i=n.length;for(el.lastIndex=0;;){let s=el.exec(n),a=el.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){wu(e,c===void 0?new Kl(o,r,t):new Jl(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Ql(o),wu(e,u)),e=u}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Kg(s,a,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Eu(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Jg=37297,Qg=0;function $g(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function tv(r){let t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(r),n;switch(t===e?n="":t===Qr&&e===Jr?n="LinearDisplayP3ToLinearSRGB":t===Jr&&e===Qr&&(n="LinearSRGBToLinearDisplayP3"),r){case Mi:case La:return[n,"LinearTransferOETF"];case Xe:case qc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Tu(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+$g(r.getShaderSource(t),a)}else return i}function ev(r,t){let e=tv(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function nv(r,t){let e;switch(t){case Dc:e="Linear";break;case Uc:e="Reinhard";break;case Nc:e="Cineon";break;case nr:e="ACESFilmic";break;case Oc:e="AgX";break;case Bc:e="Neutral";break;case L0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Br=new A;function iv(){oe.getLuminanceCoefficients(Br);let r=Br.x.toFixed(4),t=Br.y.toFixed(4),e=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function rv(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function av(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Hs(r){return r!==""}function Au(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ru(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(r){return r.replace(ov,cv)}var lv=new Map;function cv(r,t){let e=$t[t];if(e===void 0){let n=lv.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $l(e)}var hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cu(r){return r.replace(hv,uv)}function uv(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pu(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dv(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Pc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function fv(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case xs:case ys:t="ENVMAP_TYPE_CUBE";break;case Ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pv(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function mv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case qu:t="ENVMAP_BLENDING_MULTIPLY";break;case P0:t="ENVMAP_BLENDING_MIX";break;case I0:t="ENVMAP_BLENDING_ADD";break}return t}function gv(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function vv(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=dv(e),c=fv(e),h=pv(e),u=mv(e),d=gv(e),f=sv(e),g=rv(s),v=i.createProgram(),p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),m.length>0&&(m+=`
`)):(p=[Pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),m=[Pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?$t.tonemapping_pars_fragment:"",e.toneMapping!==ui?nv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,ev("linearToOutputTexel",e.outputColorSpace),iv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),a=$l(a),a=Au(a,e),a=Ru(a,e),o=$l(o),o=Au(o,e),o=Ru(o,e),a=Cu(a),o=Cu(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=y+p+a,x=y+m+o,T=Eu(i,i.VERTEX_SHADER,M),_=Eu(i,i.FRAGMENT_SHADER,x);i.attachShader(v,T),i.attachShader(v,_),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function w(S){if(r.debug.checkShaderErrors){let U=i.getProgramInfoLog(v).trim(),z=i.getShaderInfoLog(T).trim(),k=i.getShaderInfoLog(_).trim(),j=!0,F=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,T,_);else{let tt=Tu(i,T,"vertex"),G=Tu(i,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+U+`
`+tt+`
`+G)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(z===""||k==="")&&(F=!1);F&&(S.diagnostics={runnable:j,programLog:U,vertexShader:{log:z,prefix:p},fragmentShader:{log:k,prefix:m}})}i.deleteShader(T),i.deleteShader(_),C=new gs(i,v),D=av(i,v)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let D;this.getAttributes=function(){return D===void 0&&w(this),D};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(v,Jg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=_,this}var xv=0,tc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ec(t),e.set(t,n)),n}},ec=class{constructor(t){this.id=xv++,this.code=t,this.usedTimes=0}};function yv(r,t,e,n,i,s,a){let o=new sa,l=new tc,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures,g=i.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,U,z,k){let j=z.fog,F=k.geometry,tt=b.isMeshStandardMaterial?z.environment:null,G=(b.isMeshStandardMaterial?e:t).get(b.envMap||tt),dt=G&&G.mapping===Ia?G.image.height:null,lt=v[b.type];b.precision!==null&&(g=i.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));let it=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Nt=it!==void 0?it.length:0,Zt=0;F.morphAttributes.position!==void 0&&(Zt=1),F.morphAttributes.normal!==void 0&&(Zt=2),F.morphAttributes.color!==void 0&&(Zt=3);let K,st,St,pt;if(lt){let cn=Un[lt];K=cn.vertexShader,st=cn.fragmentShader}else K=b.vertexShader,st=b.fragmentShader,l.update(b),St=l.getVertexShaderID(b),pt=l.getFragmentShaderID(b);let Vt=r.getRenderTarget(),Ht=k.isInstancedMesh===!0,Xt=k.isBatchedMesh===!0,kt=!!b.map,$=!!b.matcap,I=!!G,mt=!!b.aoMap,ft=!!b.lightMap,rt=!!b.bumpMap,gt=!!b.normalMap,Bt=!!b.displacementMap,wt=!!b.emissiveMap,P=!!b.metalnessMap,E=!!b.roughnessMap,H=b.anisotropy>0,J=b.clearcoat>0,et=b.dispersion>0,Q=b.iridescence>0,Dt=b.sheen>0,xt=b.transmission>0,At=H&&!!b.anisotropyMap,ie=J&&!!b.clearcoatMap,ot=J&&!!b.clearcoatNormalMap,Rt=J&&!!b.clearcoatRoughnessMap,qt=Q&&!!b.iridescenceMap,Yt=Q&&!!b.iridescenceThicknessMap,Pt=Dt&&!!b.sheenColorMap,se=Dt&&!!b.sheenRoughnessMap,Kt=!!b.specularMap,ve=!!b.specularColorMap,N=!!b.specularIntensityMap,Et=xt&&!!b.transmissionMap,Z=xt&&!!b.thicknessMap,nt=!!b.gradientMap,bt=!!b.alphaMap,Tt=b.alphaTest>0,ae=!!b.alphaHash,Re=!!b.extensions,ln=ui;b.toneMapped&&(Vt===null||Vt.isXRRenderTarget===!0)&&(ln=r.toneMapping);let le={shaderID:lt,shaderType:b.type,shaderName:b.name,vertexShader:K,fragmentShader:st,defines:b.defines,customVertexShaderID:St,customFragmentShaderID:pt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Xt,batchingColor:Xt&&k._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&k.instanceColor!==null,instancingMorph:Ht&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Vt===null?r.outputColorSpace:Vt.isXRRenderTarget===!0?Vt.texture.colorSpace:Mi,alphaToCoverage:!!b.alphaToCoverage,map:kt,matcap:$,envMap:I,envMapMode:I&&G.mapping,envMapCubeUVHeight:dt,aoMap:mt,lightMap:ft,bumpMap:rt,normalMap:gt,displacementMap:f&&Bt,emissiveMap:wt,normalMapObjectSpace:gt&&b.normalMapType===O0,normalMapTangentSpace:gt&&b.normalMapType===Xc,metalnessMap:P,roughnessMap:E,anisotropy:H,anisotropyMap:At,clearcoat:J,clearcoatMap:ie,clearcoatNormalMap:ot,clearcoatRoughnessMap:Rt,dispersion:et,iridescence:Q,iridescenceMap:qt,iridescenceThicknessMap:Yt,sheen:Dt,sheenColorMap:Pt,sheenRoughnessMap:se,specularMap:Kt,specularColorMap:ve,specularIntensityMap:N,transmission:xt,transmissionMap:Et,thicknessMap:Z,gradientMap:nt,opaque:b.transparent===!1&&b.blending===hi&&b.alphaToCoverage===!1,alphaMap:bt,alphaTest:Tt,alphaHash:ae,combine:b.combine,mapUv:kt&&p(b.map.channel),aoMapUv:mt&&p(b.aoMap.channel),lightMapUv:ft&&p(b.lightMap.channel),bumpMapUv:rt&&p(b.bumpMap.channel),normalMapUv:gt&&p(b.normalMap.channel),displacementMapUv:Bt&&p(b.displacementMap.channel),emissiveMapUv:wt&&p(b.emissiveMap.channel),metalnessMapUv:P&&p(b.metalnessMap.channel),roughnessMapUv:E&&p(b.roughnessMap.channel),anisotropyMapUv:At&&p(b.anisotropyMap.channel),clearcoatMapUv:ie&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:ot&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:se&&p(b.sheenRoughnessMap.channel),specularMapUv:Kt&&p(b.specularMap.channel),specularColorMapUv:ve&&p(b.specularColorMap.channel),specularIntensityMapUv:N&&p(b.specularIntensityMap.channel),transmissionMapUv:Et&&p(b.transmissionMap.channel),thicknessMapUv:Z&&p(b.thicknessMap.channel),alphaMapUv:bt&&p(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(gt||H),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!F.attributes.uv&&(kt||bt),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:Zt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:ln,decodeVideoTexture:kt&&b.map.isVideoTexture===!0&&oe.getTransfer(b.map.colorSpace)===me,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ee,flipSided:b.side===tn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Re&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&b.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function y(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let U in b.defines)S.push(U),S.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(M(S,b),x(S,b),S.push(r.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function M(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),b.push(o.mask)}function T(b){let S=v[b.type],U;if(S){let z=Un[S];U=Ke.clone(z.uniforms)}else U=b.uniforms;return U}function _(b,S){let U;for(let z=0,k=h.length;z<k;z++){let j=h[z];if(j.cacheKey===S){U=j,++U.usedTimes;break}}return U===void 0&&(U=new vv(r,S,b,s),h.push(U)),U}function w(b){if(--b.usedTimes===0){let S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:T,acquireProgram:_,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:D}}function Mv(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function bv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Iu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Lu(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,v,p){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},r[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=p),t++,m}function o(u,d,f,g,v,p){let m=a(u,d,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(u,d,f,g,v,p){let m=a(u,d,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||bv),n.length>1&&n.sort(d||Iu),i.length>1&&i.sort(d||Iu)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function _v(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new Lu,r.set(n,[a])):i>=s.length?(a=new Lu,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Sv(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new It};break;case"SpotLight":e={position:new A,direction:new A,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new A,halfWidth:new A,halfHeight:new A};break}return r[t.id]=e,e}}}function wv(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Ev=0;function Tv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Av(r){let t=new Sv,e=wv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let i=new A,s=new jt,a=new jt;function o(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,y=0,M=0,x=0,T=0,_=0,w=0;c.sort(Tv);for(let D=0,b=c.length;D<b;D++){let S=c[D],U=S.color,z=S.intensity,k=S.distance,j=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=U.r*z,u+=U.g*z,d+=U.b*z;else if(S.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(S.sh.coefficients[F],z);w++}else if(S.isDirectionalLight){let F=t.get(S);if(F.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let tt=S.shadow,G=e.get(S);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=S.shadow.matrix,y++}n.directional[f]=F,f++}else if(S.isSpotLight){let F=t.get(S);F.position.setFromMatrixPosition(S.matrixWorld),F.color.copy(U).multiplyScalar(z),F.distance=k,F.coneCos=Math.cos(S.angle),F.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),F.decay=S.decay,n.spot[v]=F;let tt=S.shadow;if(S.map&&(n.spotLightMap[T]=S.map,T++,tt.updateMatrices(S),S.castShadow&&_++),n.spotLightMatrix[v]=tt.matrix,S.castShadow){let G=e.get(S);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=j,x++}v++}else if(S.isRectAreaLight){let F=t.get(S);F.color.copy(U).multiplyScalar(z),F.halfWidth.set(S.width*.5,0,0),F.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=F,p++}else if(S.isPointLight){let F=t.get(S);if(F.color.copy(S.color).multiplyScalar(S.intensity),F.distance=S.distance,F.decay=S.decay,S.castShadow){let tt=S.shadow,G=e.get(S);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,G.shadowCameraNear=tt.camera.near,G.shadowCameraFar=tt.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=S.shadow.matrix,M++}n.point[g]=F,g++}else if(S.isHemisphereLight){let F=t.get(S);F.skyColor.copy(S.color).multiplyScalar(z),F.groundColor.copy(S.groundColor).multiplyScalar(z),n.hemi[m]=F,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==y||C.numPointShadows!==M||C.numSpotShadows!==x||C.numSpotMaps!==T||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+T-_,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=w,C.directionalLength=f,C.pointLength=g,C.spotLength=v,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=y,C.numPointShadows=M,C.numSpotShadows=x,C.numSpotMaps=T,C.numLightProbes=w,n.version=Ev++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let M=c[m];if(M.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),u++}else if(M.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),f++}else if(M.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function Du(r){let t=new Av(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Rv(r){let t=new WeakMap;function e(i,s=0){let a=t.get(i),o;return a===void 0?(o=new Du(r),t.set(i,[o])):s>=a.length?(o=new Du(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var nc=class extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ic=class extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Iv(r,t,e){let n=new Zs,i=new X,s=new X,a=new fe,o=new nc({depthPacking:N0}),l=new ic,c={},h=e.maxTextureSize,u={[zn]:tn,[tn]:zn,[Ee]:Ee},d=new re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new X},radius:{value:4}},vertexShader:Cv,fragmentShader:Pv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Te;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ct(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xu;let m=this.type;this.render=function(_,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||_.length===0)return;let D=r.getRenderTarget(),b=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),U=r.state;U.setBlending(ke),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let z=m!==Kn&&this.type===Kn,k=m===Kn&&this.type!==Kn;for(let j=0,F=_.length;j<F;j++){let tt=_[j],G=tt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let dt=G.getFrameExtents();if(i.multiply(dt),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/dt.x),i.x=s.x*dt.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/dt.y),i.y=s.y*dt.y,G.mapSize.y=s.y)),G.map===null||z===!0||k===!0){let it=this.type!==Kn?{minFilter:Pe,magFilter:Pe}:{};G.map!==null&&G.map.dispose(),G.map=new ye(i.x,i.y,it),G.map.texture.name=tt.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();let lt=G.getViewportCount();for(let it=0;it<lt;it++){let Nt=G.getViewport(it);a.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),U.viewport(a),G.updateMatrices(tt,it),n=G.getFrustum(),x(w,C,G.camera,tt,this.type)}G.isPointLightShadow!==!0&&this.type===Kn&&y(G,C),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(D,b,S)};function y(_,w){let C=t.update(v);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,f.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new ye(i.x,i.y)),d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,r.setRenderTarget(_.mapPass),r.clear(),r.renderBufferDirect(w,null,C,d,v,null),f.uniforms.shadow_pass.value=_.mapPass.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,r.setRenderTarget(_.map),r.clear(),r.renderBufferDirect(w,null,C,f,v,null)}function M(_,w,C,D){let b=null,S=C.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(S!==void 0)b=S;else if(b=C.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let U=b.uuid,z=w.uuid,k=c[U];k===void 0&&(k={},c[U]=k);let j=k[z];j===void 0&&(j=b.clone(),k[z]=j,w.addEventListener("dispose",T)),b=j}if(b.visible=w.visible,b.wireframe=w.wireframe,D===Kn?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:u[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let U=r.properties.get(b);U.light=C}return b}function x(_,w,C,D,b){if(_.visible===!1)return;if(_.layers.test(w.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&b===Kn)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,_.matrixWorld);let z=t.update(_),k=_.material;if(Array.isArray(k)){let j=z.groups;for(let F=0,tt=j.length;F<tt;F++){let G=j[F],dt=k[G.materialIndex];if(dt&&dt.visible){let lt=M(_,dt,D,b);_.onBeforeShadow(r,_,w,C,z,lt,G),r.renderBufferDirect(C,null,z,lt,_,G),_.onAfterShadow(r,_,w,C,z,lt,G)}}}else if(k.visible){let j=M(_,k,D,b);_.onBeforeShadow(r,_,w,C,z,j,null),r.renderBufferDirect(C,null,z,j,_,null),_.onAfterShadow(r,_,w,C,z,j,null)}}let U=_.children;for(let z=0,k=U.length;z<k;z++)x(U[z],w,C,D,b)}function T(_){_.target.removeEventListener("dispose",T);for(let C in c){let D=c[C],b=_.target.uuid;b in D&&(D[b].dispose(),delete D[b])}}}var Lv={[cl]:hl,[ul]:pl,[dl]:ml,[vs]:fl,[hl]:cl,[pl]:ul,[ml]:dl,[fl]:vs};function Dv(r){function t(){let N=!1,Et=new fe,Z=null,nt=new fe(0,0,0,0);return{setMask:function(bt){Z!==bt&&!N&&(r.colorMask(bt,bt,bt,bt),Z=bt)},setLocked:function(bt){N=bt},setClear:function(bt,Tt,ae,Re,ln){ln===!0&&(bt*=Re,Tt*=Re,ae*=Re),Et.set(bt,Tt,ae,Re),nt.equals(Et)===!1&&(r.clearColor(bt,Tt,ae,Re),nt.copy(Et))},reset:function(){N=!1,Z=null,nt.set(-1,0,0,0)}}}function e(){let N=!1,Et=!1,Z=null,nt=null,bt=null;return{setReversed:function(Tt){Et=Tt},setTest:function(Tt){Tt?St(r.DEPTH_TEST):pt(r.DEPTH_TEST)},setMask:function(Tt){Z!==Tt&&!N&&(r.depthMask(Tt),Z=Tt)},setFunc:function(Tt){if(Et&&(Tt=Lv[Tt]),nt!==Tt){switch(Tt){case cl:r.depthFunc(r.NEVER);break;case hl:r.depthFunc(r.ALWAYS);break;case ul:r.depthFunc(r.LESS);break;case vs:r.depthFunc(r.LEQUAL);break;case dl:r.depthFunc(r.EQUAL);break;case fl:r.depthFunc(r.GEQUAL);break;case pl:r.depthFunc(r.GREATER);break;case ml:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}nt=Tt}},setLocked:function(Tt){N=Tt},setClear:function(Tt){bt!==Tt&&(r.clearDepth(Tt),bt=Tt)},reset:function(){N=!1,Z=null,nt=null,bt=null}}}function n(){let N=!1,Et=null,Z=null,nt=null,bt=null,Tt=null,ae=null,Re=null,ln=null;return{setTest:function(le){N||(le?St(r.STENCIL_TEST):pt(r.STENCIL_TEST))},setMask:function(le){Et!==le&&!N&&(r.stencilMask(le),Et=le)},setFunc:function(le,cn,Wn){(Z!==le||nt!==cn||bt!==Wn)&&(r.stencilFunc(le,cn,Wn),Z=le,nt=cn,bt=Wn)},setOp:function(le,cn,Wn){(Tt!==le||ae!==cn||Re!==Wn)&&(r.stencilOp(le,cn,Wn),Tt=le,ae=cn,Re=Wn)},setLocked:function(le){N=le},setClear:function(le){ln!==le&&(r.clearStencil(le),ln=le)},reset:function(){N=!1,Et=null,Z=null,nt=null,bt=null,Tt=null,ae=null,Re=null,ln=null}}}let i=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,p=null,m=null,y=null,M=null,x=null,T=null,_=new It(0,0,0),w=0,C=!1,D=null,b=null,S=null,U=null,z=null,k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,F=0,tt=r.getParameter(r.VERSION);tt.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(tt)[1]),j=F>=1):tt.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),j=F>=2);let G=null,dt={},lt=r.getParameter(r.SCISSOR_BOX),it=r.getParameter(r.VIEWPORT),Nt=new fe().fromArray(lt),Zt=new fe().fromArray(it);function K(N,Et,Z,nt){let bt=new Uint8Array(4),Tt=r.createTexture();r.bindTexture(N,Tt),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ae=0;ae<Z;ae++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(Et,0,r.RGBA,1,1,nt,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(Et+ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return Tt}let st={};st[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),st[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),st[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),St(r.DEPTH_TEST),s.setFunc(vs),ft(!1),rt(kh),St(r.CULL_FACE),I(ke);function St(N){c[N]!==!0&&(r.enable(N),c[N]=!0)}function pt(N){c[N]!==!1&&(r.disable(N),c[N]=!1)}function Vt(N,Et){return h[N]!==Et?(r.bindFramebuffer(N,Et),h[N]=Et,N===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Et),N===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Et),!0):!1}function Ht(N,Et){let Z=d,nt=!1;if(N){Z=u.get(Et),Z===void 0&&(Z=[],u.set(Et,Z));let bt=N.textures;if(Z.length!==bt.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let Tt=0,ae=bt.length;Tt<ae;Tt++)Z[Tt]=r.COLOR_ATTACHMENT0+Tt;Z.length=bt.length,nt=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,nt=!0);nt&&r.drawBuffers(Z)}function Xt(N){return f!==N?(r.useProgram(N),f=N,!0):!1}let kt={[Nn]:r.FUNC_ADD,[g0]:r.FUNC_SUBTRACT,[v0]:r.FUNC_REVERSE_SUBTRACT};kt[x0]=r.MIN,kt[y0]=r.MAX;let $={[Pa]:r.ZERO,[M0]:r.ONE,[b0]:r.SRC_COLOR,[ol]:r.SRC_ALPHA,[E0]:r.SRC_ALPHA_SATURATE,[Lc]:r.DST_COLOR,[Ic]:r.DST_ALPHA,[_0]:r.ONE_MINUS_SRC_COLOR,[ll]:r.ONE_MINUS_SRC_ALPHA,[w0]:r.ONE_MINUS_DST_COLOR,[S0]:r.ONE_MINUS_DST_ALPHA,[T0]:r.CONSTANT_COLOR,[A0]:r.ONE_MINUS_CONSTANT_COLOR,[R0]:r.CONSTANT_ALPHA,[C0]:r.ONE_MINUS_CONSTANT_ALPHA};function I(N,Et,Z,nt,bt,Tt,ae,Re,ln,le){if(N===ke){g===!0&&(pt(r.BLEND),g=!1);return}if(g===!1&&(St(r.BLEND),g=!0),N!==Ca){if(N!==v||le!==C){if((p!==Nn||M!==Nn)&&(r.blendEquation(r.FUNC_ADD),p=Nn,M=Nn),le)switch(N){case hi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qe:r.blendFunc(r.ONE,r.ONE);break;case Hh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case hi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qe:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Hh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,y=null,x=null,T=null,_.set(0,0,0),w=0,v=N,C=le}return}bt=bt||Et,Tt=Tt||Z,ae=ae||nt,(Et!==p||bt!==M)&&(r.blendEquationSeparate(kt[Et],kt[bt]),p=Et,M=bt),(Z!==m||nt!==y||Tt!==x||ae!==T)&&(r.blendFuncSeparate($[Z],$[nt],$[Tt],$[ae]),m=Z,y=nt,x=Tt,T=ae),(Re.equals(_)===!1||ln!==w)&&(r.blendColor(Re.r,Re.g,Re.b,ln),_.copy(Re),w=ln),v=N,C=!1}function mt(N,Et){N.side===Ee?pt(r.CULL_FACE):St(r.CULL_FACE);let Z=N.side===tn;Et&&(Z=!Z),ft(Z),N.blending===hi&&N.transparent===!1?I(ke):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),i.setMask(N.colorWrite);let nt=N.stencilWrite;a.setTest(nt),nt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Bt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?St(r.SAMPLE_ALPHA_TO_COVERAGE):pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ft(N){D!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),D=N)}function rt(N){N!==p0?(St(r.CULL_FACE),N!==b&&(N===kh?r.cullFace(r.BACK):N===m0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pt(r.CULL_FACE),b=N}function gt(N){N!==S&&(j&&r.lineWidth(N),S=N)}function Bt(N,Et,Z){N?(St(r.POLYGON_OFFSET_FILL),(U!==Et||z!==Z)&&(r.polygonOffset(Et,Z),U=Et,z=Z)):pt(r.POLYGON_OFFSET_FILL)}function wt(N){N?St(r.SCISSOR_TEST):pt(r.SCISSOR_TEST)}function P(N){N===void 0&&(N=r.TEXTURE0+k-1),G!==N&&(r.activeTexture(N),G=N)}function E(N,Et,Z){Z===void 0&&(G===null?Z=r.TEXTURE0+k-1:Z=G);let nt=dt[Z];nt===void 0&&(nt={type:void 0,texture:void 0},dt[Z]=nt),(nt.type!==N||nt.texture!==Et)&&(G!==Z&&(r.activeTexture(Z),G=Z),r.bindTexture(N,Et||st[N]),nt.type=N,nt.texture=Et)}function H(){let N=dt[G];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qt(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Yt(N){Nt.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Nt.copy(N))}function Pt(N){Zt.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Zt.copy(N))}function se(N,Et){let Z=l.get(Et);Z===void 0&&(Z=new WeakMap,l.set(Et,Z));let nt=Z.get(N);nt===void 0&&(nt=r.getUniformBlockIndex(Et,N.name),Z.set(N,nt))}function Kt(N,Et){let nt=l.get(Et).get(N);o.get(Et)!==nt&&(r.uniformBlockBinding(Et,nt,N.__bindingPointIndex),o.set(Et,nt))}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},G=null,dt={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,p=null,m=null,y=null,M=null,x=null,T=null,_=new It(0,0,0),w=0,C=!1,D=null,b=null,S=null,U=null,z=null,Nt.set(0,0,r.canvas.width,r.canvas.height),Zt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:St,disable:pt,bindFramebuffer:Vt,drawBuffers:Ht,useProgram:Xt,setBlending:I,setMaterial:mt,setFlipSided:ft,setCullFace:rt,setLineWidth:gt,setPolygonOffset:Bt,setScissorTest:wt,activeTexture:P,bindTexture:E,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:Rt,texImage3D:qt,updateUBOMapping:se,uniformBlockBinding:Kt,texStorage2D:ie,texStorage3D:ot,texSubImage2D:Q,texSubImage3D:Dt,compressedTexSubImage2D:xt,compressedTexSubImage3D:At,scissor:Yt,viewport:Pt,reset:ve}}function Uu(r,t,e,n){let i=Uv(n);switch(e){case Ju:return r*t;case $u:return r*t;case td:return r*t*2;case Hc:return r*t/i.components*i.byteLength;case Vc:return r*t/i.components*i.byteLength;case ed:return r*t*2/i.components*i.byteLength;case Gc:return r*t*2/i.components*i.byteLength;case Qu:return r*t*3/i.components*i.byteLength;case sn:return r*t*4/i.components*i.byteLength;case Wc:return r*t*4/i.components*i.byteLength;case Gr:case Wr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ml:case _l:return Math.max(r,16)*Math.max(t,8)/4;case yl:case bl:return Math.max(r,8)*Math.max(t,8)/2;case Sl:case wl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case El:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Il:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case zl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Yr:case kl:case Hl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case nd:case Vl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Gl:case Wl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Uv(r){switch(r){case Pn:case Zu:return{byteLength:1,components:1};case Xs:case ju:case Ae:return{byteLength:2,components:1};case Fc:case kc:return{byteLength:2,components:4};case zi:case zc:case Bn:return{byteLength:4,components:1};case Ku:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Nv(r,t,e,n,i,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new X,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return f?new OffscreenCanvas(P,E):ea("canvas")}function v(P,E,H){let J=1,et=wt(P);if((et.width>H||et.height>H)&&(J=H/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Q=Math.floor(J*et.width),Dt=Math.floor(J*et.height);u===void 0&&(u=g(Q,Dt));let xt=E?g(Q,Dt):u;return xt.width=Q,xt.height=Dt,xt.getContext("2d").drawImage(P,0,0,Q,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Q+"x"+Dt+")."),xt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==Pe&&P.minFilter!==nn}function m(P){r.generateMipmap(P)}function y(P,E,H,J,et=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=E;if(E===r.RED&&(H===r.FLOAT&&(Q=r.R32F),H===r.HALF_FLOAT&&(Q=r.R16F),H===r.UNSIGNED_BYTE&&(Q=r.R8)),E===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(Q=r.R8UI),H===r.UNSIGNED_SHORT&&(Q=r.R16UI),H===r.UNSIGNED_INT&&(Q=r.R32UI),H===r.BYTE&&(Q=r.R8I),H===r.SHORT&&(Q=r.R16I),H===r.INT&&(Q=r.R32I)),E===r.RG&&(H===r.FLOAT&&(Q=r.RG32F),H===r.HALF_FLOAT&&(Q=r.RG16F),H===r.UNSIGNED_BYTE&&(Q=r.RG8)),E===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(Q=r.RG8UI),H===r.UNSIGNED_SHORT&&(Q=r.RG16UI),H===r.UNSIGNED_INT&&(Q=r.RG32UI),H===r.BYTE&&(Q=r.RG8I),H===r.SHORT&&(Q=r.RG16I),H===r.INT&&(Q=r.RG32I)),E===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),H===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),H===r.UNSIGNED_INT&&(Q=r.RGB32UI),H===r.BYTE&&(Q=r.RGB8I),H===r.SHORT&&(Q=r.RGB16I),H===r.INT&&(Q=r.RGB32I)),E===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),H===r.UNSIGNED_INT&&(Q=r.RGBA32UI),H===r.BYTE&&(Q=r.RGBA8I),H===r.SHORT&&(Q=r.RGBA16I),H===r.INT&&(Q=r.RGBA32I)),E===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),E===r.RGBA){let Dt=et?Kr:oe.getTransfer(J);H===r.FLOAT&&(Q=r.RGBA32F),H===r.HALF_FLOAT&&(Q=r.RGBA16F),H===r.UNSIGNED_BYTE&&(Q=Dt===me?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function M(P,E){let H;return P?E===null||E===zi||E===fi?H=r.DEPTH24_STENCIL8:E===Bn?H=r.DEPTH32F_STENCIL8:E===Xs&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===zi||E===fi?H=r.DEPTH_COMPONENT24:E===Bn?H=r.DEPTH_COMPONENT32F:E===Xs&&(H=r.DEPTH_COMPONENT16),H}function x(P,E){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Pe&&P.minFilter!==nn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function T(P){let E=P.target;E.removeEventListener("dispose",T),w(E),E.isVideoTexture&&h.delete(E)}function _(P){let E=P.target;E.removeEventListener("dispose",_),D(E)}function w(P){let E=n.get(P);if(E.__webglInit===void 0)return;let H=P.source,J=d.get(H);if(J){let et=J[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&C(P),Object.keys(J).length===0&&d.delete(H)}n.remove(P)}function C(P){let E=n.get(P);r.deleteTexture(E.__webglTexture);let H=P.source,J=d.get(H);delete J[E.__cacheKey],a.memory.textures--}function D(P){let E=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let et=0;et<E.__webglFramebuffer[J].length;et++)r.deleteFramebuffer(E.__webglFramebuffer[J][et]);else r.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)r.deleteFramebuffer(E.__webglFramebuffer[J]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let H=P.textures;for(let J=0,et=H.length;J<et;J++){let Q=n.get(H[J]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(H[J])}n.remove(P)}let b=0;function S(){b=0}function U(){let P=b;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),b+=1,P}function z(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function k(P,E){let H=n.get(P);if(P.isVideoTexture&&gt(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){let J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Zt(H,P,E);return}}e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+E)}function j(P,E){let H=n.get(P);if(P.version>0&&H.__version!==P.version){Zt(H,P,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+E)}function F(P,E){let H=n.get(P);if(P.version>0&&H.__version!==P.version){Zt(H,P,E);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+E)}function tt(P,E){let H=n.get(P);if(P.version>0&&H.__version!==P.version){K(H,P,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+E)}let G={[Bi]:r.REPEAT,[Oi]:r.CLAMP_TO_EDGE,[xl]:r.MIRRORED_REPEAT},dt={[Pe]:r.NEAREST,[D0]:r.NEAREST_MIPMAP_NEAREST,[vr]:r.NEAREST_MIPMAP_LINEAR,[nn]:r.LINEAR,[Eo]:r.LINEAR_MIPMAP_NEAREST,[On]:r.LINEAR_MIPMAP_LINEAR},lt={[B0]:r.NEVER,[G0]:r.ALWAYS,[z0]:r.LESS,[id]:r.LEQUAL,[F0]:r.EQUAL,[V0]:r.GEQUAL,[k0]:r.GREATER,[H0]:r.NOTEQUAL};function it(P,E){if(E.type===Bn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===nn||E.magFilter===Eo||E.magFilter===vr||E.magFilter===On||E.minFilter===nn||E.minFilter===Eo||E.minFilter===vr||E.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,G[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,G[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,G[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,dt[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,dt[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,lt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Pe||E.minFilter!==vr&&E.minFilter!==On||E.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Nt(P,E){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",T));let J=E.source,et=d.get(J);et===void 0&&(et={},d.set(J,et));let Q=z(E);if(Q!==P.__cacheKey){et[Q]===void 0&&(et[Q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),et[Q].usedTimes++;let Dt=et[P.__cacheKey];Dt!==void 0&&(et[P.__cacheKey].usedTimes--,Dt.usedTimes===0&&C(E)),P.__cacheKey=Q,P.__webglTexture=et[Q].texture}return H}function Zt(P,E,H){let J=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=r.TEXTURE_3D);let et=Nt(P,E),Q=E.source;e.bindTexture(J,P.__webglTexture,r.TEXTURE0+H);let Dt=n.get(Q);if(Q.version!==Dt.__version||et===!0){e.activeTexture(r.TEXTURE0+H);let xt=oe.getPrimaries(oe.workingColorSpace),At=E.colorSpace===gn?null:oe.getPrimaries(E.colorSpace),ie=E.colorSpace===gn||xt===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ot=v(E.image,!1,i.maxTextureSize);ot=Bt(E,ot);let Rt=s.convert(E.format,E.colorSpace),qt=s.convert(E.type),Yt=y(E.internalFormat,Rt,qt,E.colorSpace,E.isVideoTexture);it(J,E);let Pt,se=E.mipmaps,Kt=E.isVideoTexture!==!0,ve=Dt.__version===void 0||et===!0,N=Q.dataReady,Et=x(E,ot);if(E.isDepthTexture)Yt=M(E.format===pi,E.type),ve&&(Kt?e.texStorage2D(r.TEXTURE_2D,1,Yt,ot.width,ot.height):e.texImage2D(r.TEXTURE_2D,0,Yt,ot.width,ot.height,0,Rt,qt,null));else if(E.isDataTexture)if(se.length>0){Kt&&ve&&e.texStorage2D(r.TEXTURE_2D,Et,Yt,se[0].width,se[0].height);for(let Z=0,nt=se.length;Z<nt;Z++)Pt=se[Z],Kt?N&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,Pt.width,Pt.height,Rt,qt,Pt.data):e.texImage2D(r.TEXTURE_2D,Z,Yt,Pt.width,Pt.height,0,Rt,qt,Pt.data);E.generateMipmaps=!1}else Kt?(ve&&e.texStorage2D(r.TEXTURE_2D,Et,Yt,ot.width,ot.height),N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot.width,ot.height,Rt,qt,ot.data)):e.texImage2D(r.TEXTURE_2D,0,Yt,ot.width,ot.height,0,Rt,qt,ot.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Kt&&ve&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Et,Yt,se[0].width,se[0].height,ot.depth);for(let Z=0,nt=se.length;Z<nt;Z++)if(Pt=se[Z],E.format!==sn)if(Rt!==null)if(Kt){if(N)if(E.layerUpdates.size>0){let bt=Uu(Pt.width,Pt.height,E.format,E.type);for(let Tt of E.layerUpdates){let ae=Pt.data.subarray(Tt*bt/Pt.data.BYTES_PER_ELEMENT,(Tt+1)*bt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,Tt,Pt.width,Pt.height,1,Rt,ae,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Pt.width,Pt.height,ot.depth,Rt,Pt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,Yt,Pt.width,Pt.height,ot.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Pt.width,Pt.height,ot.depth,Rt,qt,Pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Z,Yt,Pt.width,Pt.height,ot.depth,0,Rt,qt,Pt.data)}else{Kt&&ve&&e.texStorage2D(r.TEXTURE_2D,Et,Yt,se[0].width,se[0].height);for(let Z=0,nt=se.length;Z<nt;Z++)Pt=se[Z],E.format!==sn?Rt!==null?Kt?N&&e.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,Pt.width,Pt.height,Rt,Pt.data):e.compressedTexImage2D(r.TEXTURE_2D,Z,Yt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?N&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,Pt.width,Pt.height,Rt,qt,Pt.data):e.texImage2D(r.TEXTURE_2D,Z,Yt,Pt.width,Pt.height,0,Rt,qt,Pt.data)}else if(E.isDataArrayTexture)if(Kt){if(ve&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Et,Yt,ot.width,ot.height,ot.depth),N)if(E.layerUpdates.size>0){let Z=Uu(ot.width,ot.height,E.format,E.type);for(let nt of E.layerUpdates){let bt=ot.data.subarray(nt*Z/ot.data.BYTES_PER_ELEMENT,(nt+1)*Z/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,nt,ot.width,ot.height,1,Rt,qt,bt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Rt,qt,ot.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Yt,ot.width,ot.height,ot.depth,0,Rt,qt,ot.data);else if(E.isData3DTexture)Kt?(ve&&e.texStorage3D(r.TEXTURE_3D,Et,Yt,ot.width,ot.height,ot.depth),N&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Rt,qt,ot.data)):e.texImage3D(r.TEXTURE_3D,0,Yt,ot.width,ot.height,ot.depth,0,Rt,qt,ot.data);else if(E.isFramebufferTexture){if(ve)if(Kt)e.texStorage2D(r.TEXTURE_2D,Et,Yt,ot.width,ot.height);else{let Z=ot.width,nt=ot.height;for(let bt=0;bt<Et;bt++)e.texImage2D(r.TEXTURE_2D,bt,Yt,Z,nt,0,Rt,qt,null),Z>>=1,nt>>=1}}else if(se.length>0){if(Kt&&ve){let Z=wt(se[0]);e.texStorage2D(r.TEXTURE_2D,Et,Yt,Z.width,Z.height)}for(let Z=0,nt=se.length;Z<nt;Z++)Pt=se[Z],Kt?N&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,Rt,qt,Pt):e.texImage2D(r.TEXTURE_2D,Z,Yt,Rt,qt,Pt);E.generateMipmaps=!1}else if(Kt){if(ve){let Z=wt(ot);e.texStorage2D(r.TEXTURE_2D,Et,Yt,Z.width,Z.height)}N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt,qt,ot)}else e.texImage2D(r.TEXTURE_2D,0,Yt,Rt,qt,ot);p(E)&&m(J),Dt.__version=Q.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function K(P,E,H){if(E.image.length!==6)return;let J=Nt(P,E),et=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+H);let Q=n.get(et);if(et.version!==Q.__version||J===!0){e.activeTexture(r.TEXTURE0+H);let Dt=oe.getPrimaries(oe.workingColorSpace),xt=E.colorSpace===gn?null:oe.getPrimaries(E.colorSpace),At=E.colorSpace===gn||Dt===xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let ie=E.isCompressedTexture||E.image[0].isCompressedTexture,ot=E.image[0]&&E.image[0].isDataTexture,Rt=[];for(let nt=0;nt<6;nt++)!ie&&!ot?Rt[nt]=v(E.image[nt],!0,i.maxCubemapSize):Rt[nt]=ot?E.image[nt].image:E.image[nt],Rt[nt]=Bt(E,Rt[nt]);let qt=Rt[0],Yt=s.convert(E.format,E.colorSpace),Pt=s.convert(E.type),se=y(E.internalFormat,Yt,Pt,E.colorSpace),Kt=E.isVideoTexture!==!0,ve=Q.__version===void 0||J===!0,N=et.dataReady,Et=x(E,qt);it(r.TEXTURE_CUBE_MAP,E);let Z;if(ie){Kt&&ve&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Et,se,qt.width,qt.height);for(let nt=0;nt<6;nt++){Z=Rt[nt].mipmaps;for(let bt=0;bt<Z.length;bt++){let Tt=Z[bt];E.format!==sn?Yt!==null?Kt?N&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,0,0,Tt.width,Tt.height,Yt,Tt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,se,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,0,0,Tt.width,Tt.height,Yt,Pt,Tt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,se,Tt.width,Tt.height,0,Yt,Pt,Tt.data)}}}else{if(Z=E.mipmaps,Kt&&ve){Z.length>0&&Et++;let nt=wt(Rt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Et,se,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ot){Kt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Rt[nt].width,Rt[nt].height,Yt,Pt,Rt[nt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,se,Rt[nt].width,Rt[nt].height,0,Yt,Pt,Rt[nt].data);for(let bt=0;bt<Z.length;bt++){let ae=Z[bt].image[nt].image;Kt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,0,0,ae.width,ae.height,Yt,Pt,ae.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,se,ae.width,ae.height,0,Yt,Pt,ae.data)}}else{Kt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Yt,Pt,Rt[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,se,Yt,Pt,Rt[nt]);for(let bt=0;bt<Z.length;bt++){let Tt=Z[bt];Kt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,0,0,Yt,Pt,Tt.image[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,se,Yt,Pt,Tt.image[nt])}}}p(E)&&m(r.TEXTURE_CUBE_MAP),Q.__version=et.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function st(P,E,H,J,et,Q){let Dt=s.convert(H.format,H.colorSpace),xt=s.convert(H.type),At=y(H.internalFormat,Dt,xt,H.colorSpace);if(!n.get(E).__hasExternalTextures){let ot=Math.max(1,E.width>>Q),Rt=Math.max(1,E.height>>Q);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,Q,At,ot,Rt,E.depth,0,Dt,xt,null):e.texImage2D(et,Q,At,ot,Rt,0,Dt,xt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),rt(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,et,n.get(H).__webglTexture,0,ft(E)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,et,n.get(H).__webglTexture,Q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function St(P,E,H){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){let J=E.depthTexture,et=J&&J.isDepthTexture?J.type:null,Q=M(E.stencilBuffer,et),Dt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=ft(E);rt(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xt,Q,E.width,E.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,Q,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Q,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Dt,r.RENDERBUFFER,P)}else{let J=E.textures;for(let et=0;et<J.length;et++){let Q=J[et],Dt=s.convert(Q.format,Q.colorSpace),xt=s.convert(Q.type),At=y(Q.internalFormat,Dt,xt,Q.colorSpace),ie=ft(E);H&&rt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,At,E.width,E.height):rt(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,At,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,At,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);let J=n.get(E.depthTexture).__webglTexture,et=ft(E);if(E.depthTexture.format===ps)rt(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(E.depthTexture.format===pi)rt(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Vt(P){let E=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let J=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){let et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),E.__depthDisposeCallback=et}E.__boundDepthTexture=J}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");pt(E.__webglFramebuffer,P)}else if(H){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=r.createRenderbuffer(),St(E.__webglDepthbuffer[J],P,!1);else{let et=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),St(E.__webglDepthbuffer,P,!1);else{let J=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,et)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(P,E,H){let J=n.get(P);E!==void 0&&st(J.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Vt(P)}function Xt(P){let E=P.texture,H=n.get(P),J=n.get(E);P.addEventListener("dispose",_);let et=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Dt=et.length>1;if(Dt||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=E.version,a.memory.textures++),Q){H.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[xt]=[];for(let At=0;At<E.mipmaps.length;At++)H.__webglFramebuffer[xt][At]=r.createFramebuffer()}else H.__webglFramebuffer[xt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let xt=0;xt<E.mipmaps.length;xt++)H.__webglFramebuffer[xt]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Dt)for(let xt=0,At=et.length;xt<At;xt++){let ie=n.get(et[xt]);ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&rt(P)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let xt=0;xt<et.length;xt++){let At=et[xt];H.__webglColorRenderbuffer[xt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[xt]);let ie=s.convert(At.format,At.colorSpace),ot=s.convert(At.type),Rt=y(At.internalFormat,ie,ot,At.colorSpace,P.isXRRenderTarget===!0),qt=ft(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,Rt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,H.__webglColorRenderbuffer[xt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),St(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),it(r.TEXTURE_CUBE_MAP,E);for(let xt=0;xt<6;xt++)if(E.mipmaps&&E.mipmaps.length>0)for(let At=0;At<E.mipmaps.length;At++)st(H.__webglFramebuffer[xt][At],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,At);else st(H.__webglFramebuffer[xt],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);p(E)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let xt=0,At=et.length;xt<At;xt++){let ie=et[xt],ot=n.get(ie);e.bindTexture(r.TEXTURE_2D,ot.__webglTexture),it(r.TEXTURE_2D,ie),st(H.__webglFramebuffer,P,ie,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,0),p(ie)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let xt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(xt,J.__webglTexture),it(xt,E),E.mipmaps&&E.mipmaps.length>0)for(let At=0;At<E.mipmaps.length;At++)st(H.__webglFramebuffer[At],P,E,r.COLOR_ATTACHMENT0,xt,At);else st(H.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,xt,0);p(E)&&m(xt),e.unbindTexture()}P.depthBuffer&&Vt(P)}function kt(P){let E=P.textures;for(let H=0,J=E.length;H<J;H++){let et=E[H];if(p(et)){let Q=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Dt=n.get(et).__webglTexture;e.bindTexture(Q,Dt),m(Q),e.unbindTexture()}}}let $=[],I=[];function mt(P){if(P.samples>0){if(rt(P)===!1){let E=P.textures,H=P.width,J=P.height,et=r.COLOR_BUFFER_BIT,Q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Dt=n.get(P),xt=E.length>1;if(xt)for(let At=0;At<E.length;At++)e.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let At=0;At<E.length;At++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),xt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Dt.__webglColorRenderbuffer[At]);let ie=n.get(E[At]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,H,J,0,0,H,J,et,r.NEAREST),l===!0&&($.length=0,I.length=0,$.push(r.COLOR_ATTACHMENT0+At),P.depthBuffer&&P.resolveDepthBuffer===!1&&($.push(Q),I.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xt)for(let At=0;At<E.length;At++){e.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,Dt.__webglColorRenderbuffer[At]);let ie=n.get(E[At]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,ie,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function ft(P){return Math.min(i.maxSamples,P.samples)}function rt(P){let E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function gt(P){let E=a.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Bt(P,E){let H=P.colorSpace,J=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Mi&&H!==gn&&(oe.getTransfer(H)===me?(J!==sn||et!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=S,this.setTexture2D=k,this.setTexture2DArray=j,this.setTexture3D=F,this.setTextureCube=tt,this.rebindTextures=Ht,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=rt}function Ov(r,t){function e(n,i=gn){let s,a=oe.getTransfer(i);if(n===Pn)return r.UNSIGNED_BYTE;if(n===Fc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===kc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ku)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Zu)return r.BYTE;if(n===ju)return r.SHORT;if(n===Xs)return r.UNSIGNED_SHORT;if(n===zc)return r.INT;if(n===zi)return r.UNSIGNED_INT;if(n===Bn)return r.FLOAT;if(n===Ae)return r.HALF_FLOAT;if(n===Ju)return r.ALPHA;if(n===Qu)return r.RGB;if(n===sn)return r.RGBA;if(n===$u)return r.LUMINANCE;if(n===td)return r.LUMINANCE_ALPHA;if(n===ps)return r.DEPTH_COMPONENT;if(n===pi)return r.DEPTH_STENCIL;if(n===Hc)return r.RED;if(n===Vc)return r.RED_INTEGER;if(n===ed)return r.RG;if(n===Gc)return r.RG_INTEGER;if(n===Wc)return r.RGBA_INTEGER;if(n===Gr||n===Wr||n===Xr||n===qr)if(a===me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Gr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Gr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yl||n===Ml||n===bl||n===_l)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===yl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_l)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sl||n===wl||n===El)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Sl||n===wl)return a===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===El)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Ul||n===Nl||n===Ol||n===Bl||n===zl||n===Fl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Tl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Al)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Il)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ll)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ol)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yr||n===kl||n===Hl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Yr)return a===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nd||n===Vl||n===Gl||n===Wl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Yr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var sc=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ht=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bv={type:"move"},Vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Ye,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new re({vertexShader:zv,fragmentShader:Fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ct(new Ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ac=class extends mi{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,v=new rc,p=e.getContextAttributes(),m=null,y=null,M=[],x=[],T=new X,_=null,w=new Ne;w.layers.enable(1),w.viewport=new fe;let C=new Ne;C.layers.enable(2),C.viewport=new fe;let D=[w,C],b=new sc;b.layers.enable(1),b.layers.enable(2);let S=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let st=M[K];return st===void 0&&(st=new Vs,M[K]=st),st.getTargetRaySpace()},this.getControllerGrip=function(K){let st=M[K];return st===void 0&&(st=new Vs,M[K]=st),st.getGripSpace()},this.getHand=function(K){let st=M[K];return st===void 0&&(st=new Vs,M[K]=st),st.getHandSpace()};function z(K){let st=x.indexOf(K.inputSource);if(st===-1)return;let St=M[st];St!==void 0&&(St.update(K.inputSource,K.frame,c||a),St.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",j);for(let K=0;K<M.length;K++){let st=x[K];st!==null&&(x[K]=null,M[K].disconnect(st))}S=null,U=null,v.reset(),t.setRenderTarget(m),f=null,d=null,u=null,i=null,y=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",k),i.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0){let st={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ye(f.framebufferWidth,f.framebufferHeight,{format:sn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let st=null,St=null,pt=null;p.depth&&(pt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=p.stencil?pi:ps,St=p.stencil?fi:zi);let Vt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Vt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new ye(d.textureWidth,d.textureHeight,{format:sn,type:Pn,depthTexture:new _s(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Zt.setContext(i),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(K){for(let st=0;st<K.removed.length;st++){let St=K.removed[st],pt=x.indexOf(St);pt>=0&&(x[pt]=null,M[pt].disconnect(St))}for(let st=0;st<K.added.length;st++){let St=K.added[st],pt=x.indexOf(St);if(pt===-1){for(let Ht=0;Ht<M.length;Ht++)if(Ht>=x.length){x.push(St),pt=Ht;break}else if(x[Ht]===null){x[Ht]=St,pt=Ht;break}if(pt===-1)break}let Vt=M[pt];Vt&&Vt.connect(St)}}let F=new A,tt=new A;function G(K,st,St){F.setFromMatrixPosition(st.matrixWorld),tt.setFromMatrixPosition(St.matrixWorld);let pt=F.distanceTo(tt),Vt=st.projectionMatrix.elements,Ht=St.projectionMatrix.elements,Xt=Vt[14]/(Vt[10]-1),kt=Vt[14]/(Vt[10]+1),$=(Vt[9]+1)/Vt[5],I=(Vt[9]-1)/Vt[5],mt=(Vt[8]-1)/Vt[0],ft=(Ht[8]+1)/Ht[0],rt=Xt*mt,gt=Xt*ft,Bt=pt/(-mt+ft),wt=Bt*-mt;if(st.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(wt),K.translateZ(Bt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Vt[10]===-1)K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let P=Xt+Bt,E=kt+Bt,H=rt-wt,J=gt+(pt-wt),et=$*kt/E*P,Q=I*kt/E*P;K.projectionMatrix.makePerspective(H,J,et,Q,P,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function dt(K,st){st===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(st.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let st=K.near,St=K.far;v.texture!==null&&(v.depthNear>0&&(st=v.depthNear),v.depthFar>0&&(St=v.depthFar)),b.near=C.near=w.near=st,b.far=C.far=w.far=St,(S!==b.near||U!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,U=b.far);let pt=K.parent,Vt=b.cameras;dt(b,pt);for(let Ht=0;Ht<Vt.length;Ht++)dt(Vt[Ht],pt);Vt.length===2?G(b,w,C):b.projectionMatrix.copy(w.projectionMatrix),lt(K,b,pt)};function lt(K,st,St){St===null?K.matrix.copy(st.matrixWorld):(K.matrix.copy(St.matrixWorld),K.matrix.invert(),K.matrix.multiply(st.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ta*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let it=null;function Nt(K,st){if(h=st.getViewerPose(c||a),g=st,h!==null){let St=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let pt=!1;St.length!==b.cameras.length&&(b.cameras.length=0,pt=!0);for(let Ht=0;Ht<St.length;Ht++){let Xt=St[Ht],kt=null;if(f!==null)kt=f.getViewport(Xt);else{let I=u.getViewSubImage(d,Xt);kt=I.viewport,Ht===0&&(t.setRenderTargetTextures(y,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(y))}let $=D[Ht];$===void 0&&($=new Ne,$.layers.enable(Ht),$.viewport=new fe,D[Ht]=$),$.matrix.fromArray(Xt.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Xt.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(kt.x,kt.y,kt.width,kt.height),Ht===0&&(b.matrix.copy($.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),pt===!0&&b.cameras.push($)}let Vt=i.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")){let Ht=u.getDepthInformation(St[0]);Ht&&Ht.isValid&&Ht.texture&&v.init(t,Ht,i.renderState)}}for(let St=0;St<M.length;St++){let pt=x[St],Vt=M[St];pt!==null&&Vt!==void 0&&Vt.update(pt,st,c||a)}it&&it(K,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let Zt=new od;Zt.setAnimationLoop(Nt),this.setAnimationLoop=function(K){it=K},this.dispose=function(){}}},Li=new Ie,kv=new jt;function Hv(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ad(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,M,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),v(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===tn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===tn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=t.get(m),M=y.envMap,x=y.envMapRotation;M&&(p.envMap.value=M,Li.copy(x),Li.x*=-1,Li.y*=-1,Li.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),p.envMapRotation.value.setFromMatrix4(kv.makeRotationFromEuler(Li)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===tn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Vv(r,t,e,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let x=M.program;n.uniformBlockBinding(y,x)}function c(y,M){let x=i[y.id];x===void 0&&(g(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",p));let T=M.program;n.updateUBOMapping(y,T);let _=t.render.frame;s[y.id]!==_&&(d(y),s[y.id]=_)}function h(y){let M=u();y.__bindingPointIndex=M;let x=r.createBuffer(),T=y.__size,_=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,T,_),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let M=i[y.id],x=y.uniforms,T=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let _=0,w=x.length;_<w;_++){let C=Array.isArray(x[_])?x[_]:[x[_]];for(let D=0,b=C.length;D<b;D++){let S=C[D];if(f(S,_,D,T)===!0){let U=S.__offset,z=Array.isArray(S.value)?S.value:[S.value],k=0;for(let j=0;j<z.length;j++){let F=z[j],tt=v(F);typeof F=="number"||typeof F=="boolean"?(S.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,U+k,S.__data)):F.isMatrix3?(S.__data[0]=F.elements[0],S.__data[1]=F.elements[1],S.__data[2]=F.elements[2],S.__data[3]=0,S.__data[4]=F.elements[3],S.__data[5]=F.elements[4],S.__data[6]=F.elements[5],S.__data[7]=0,S.__data[8]=F.elements[6],S.__data[9]=F.elements[7],S.__data[10]=F.elements[8],S.__data[11]=0):(F.toArray(S.__data,k),k+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,S.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,M,x,T){let _=y.value,w=M+"_"+x;if(T[w]===void 0)return typeof _=="number"||typeof _=="boolean"?T[w]=_:T[w]=_.clone(),!0;{let C=T[w];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return T[w]=_,!0}else if(C.equals(_)===!1)return C.copy(_),!0}return!1}function g(y){let M=y.uniforms,x=0,T=16;for(let w=0,C=M.length;w<C;w++){let D=Array.isArray(M[w])?M[w]:[M[w]];for(let b=0,S=D.length;b<S;b++){let U=D[b],z=Array.isArray(U.value)?U.value:[U.value];for(let k=0,j=z.length;k<j;k++){let F=z[k],tt=v(F),G=x%T,dt=G%tt.boundary,lt=G+dt;x+=dt,lt!==0&&T-lt<tt.storage&&(x+=T-lt),U.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=tt.storage}}}let _=x%T;return _>0&&(x+=T-_),y.__size=x,y.__cache={},this}function v(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function p(y){let M=y.target;M.removeEventListener("dispose",p);let x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function m(){for(let y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}var ca=class{constructor(t={}){let{canvas:e=X0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=ui,this.toneMappingExposure=1;let M=this,x=!1,T=0,_=0,w=null,C=-1,D=null,b=new fe,S=new fe,U=null,z=new It(0),k=0,j=e.width,F=e.height,tt=1,G=null,dt=null,lt=new fe(0,0,j,F),it=new fe(0,0,j,F),Nt=!1,Zt=new Zs,K=!1,st=!1,St=new jt,pt=new jt,Vt=new A,Ht=new fe,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function $(){return w===null?tt:1}let I=n;function mt(R,O){return e.getContext(R,O)}try{let R={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cc}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),I===null){let O="webgl2";if(I=mt(O,R),I===null)throw mt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ft,rt,gt,Bt,wt,P,E,H,J,et,Q,Dt,xt,At,ie,ot,Rt,qt,Yt,Pt,se,Kt,ve,N;function Et(){ft=new sg(I),ft.init(),Kt=new Ov(I,ft),rt=new Qm(I,ft,t,Kt),gt=new Dv(I),rt.reverseDepthBuffer&&gt.buffers.depth.setReversed(!0),Bt=new og(I),wt=new Mv,P=new Nv(I,ft,gt,wt,rt,Kt,Bt),E=new tg(M),H=new ig(M),J=new pf(I),ve=new Km(I,J),et=new rg(I,J,Bt,ve),Q=new cg(I,et,J,Bt),Yt=new lg(I,rt,P),ot=new $m(wt),Dt=new yv(M,E,H,ft,rt,ve,ot),xt=new Hv(M,wt),At=new _v,ie=new Rv(ft),qt=new jm(M,E,H,gt,Q,d,l),Rt=new Iv(M,Q,rt),N=new Vv(I,Bt,rt,gt),Pt=new Jm(I,ft,Bt),se=new ag(I,ft,Bt),Bt.programs=Dt.programs,M.capabilities=rt,M.extensions=ft,M.properties=wt,M.renderLists=At,M.shadowMap=Rt,M.state=gt,M.info=Bt}Et();let Z=new ac(M,I);this.xr=Z,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let R=ft.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ft.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(R){R!==void 0&&(tt=R,this.setSize(j,F,!1))},this.getSize=function(R){return R.set(j,F)},this.setSize=function(R,O,V=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=R,F=O,e.width=Math.floor(R*tt),e.height=Math.floor(O*tt),V===!0&&(e.style.width=R+"px",e.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(j*tt,F*tt).floor()},this.setDrawingBufferSize=function(R,O,V){j=R,F=O,tt=V,e.width=Math.floor(R*V),e.height=Math.floor(O*V),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(lt)},this.setViewport=function(R,O,V,W){R.isVector4?lt.set(R.x,R.y,R.z,R.w):lt.set(R,O,V,W),gt.viewport(b.copy(lt).multiplyScalar(tt).round())},this.getScissor=function(R){return R.copy(it)},this.setScissor=function(R,O,V,W){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,O,V,W),gt.scissor(S.copy(it).multiplyScalar(tt).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(R){gt.setScissorTest(Nt=R)},this.setOpaqueSort=function(R){G=R},this.setTransparentSort=function(R){dt=R},this.getClearColor=function(R){return R.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(R=!0,O=!0,V=!0){let W=0;if(R){let B=!1;if(w!==null){let ct=w.texture.format;B=ct===Wc||ct===Gc||ct===Vc}if(B){let ct=w.texture.type,_t=ct===Pn||ct===zi||ct===Xs||ct===fi||ct===Fc||ct===kc,Lt=qt.getClearColor(),Ut=qt.getClearAlpha(),Gt=Lt.r,Wt=Lt.g,Ot=Lt.b;_t?(f[0]=Gt,f[1]=Wt,f[2]=Ot,f[3]=Ut,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=Gt,g[1]=Wt,g[2]=Ot,g[3]=Ut,I.clearBufferiv(I.COLOR,0,g))}else W|=I.COLOR_BUFFER_BIT}O&&(W|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),At.dispose(),ie.dispose(),wt.dispose(),E.dispose(),H.dispose(),Q.dispose(),ve.dispose(),N.dispose(),Dt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Lh),Z.removeEventListener("sessionend",Dh),Ti.stop()};function nt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let R=Bt.autoReset,O=Rt.enabled,V=Rt.autoUpdate,W=Rt.needsUpdate,B=Rt.type;Et(),Bt.autoReset=R,Rt.enabled=O,Rt.autoUpdate=V,Rt.needsUpdate=W,Rt.type=B}function Tt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){let O=R.target;O.removeEventListener("dispose",ae),Re(O)}function Re(R){ln(R),wt.remove(R)}function ln(R){let O=wt.get(R).programs;O!==void 0&&(O.forEach(function(V){Dt.releaseProgram(V)}),R.isShaderMaterial&&Dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,V,W,B,ct){O===null&&(O=Xt);let _t=B.isMesh&&B.matrixWorld.determinant()<0,Lt=h0(R,O,V,W,B);gt.setMaterial(W,_t);let Ut=V.index,Gt=1;if(W.wireframe===!0){if(Ut=et.getWireframeAttribute(V),Ut===void 0)return;Gt=2}let Wt=V.drawRange,Ot=V.attributes.position,de=Wt.start*Gt,xe=(Wt.start+Wt.count)*Gt;ct!==null&&(de=Math.max(de,ct.start*Gt),xe=Math.min(xe,(ct.start+ct.count)*Gt)),Ut!==null?(de=Math.max(de,0),xe=Math.min(xe,Ut.count)):Ot!=null&&(de=Math.max(de,0),xe=Math.min(xe,Ot.count));let Se=xe-de;if(Se<0||Se===1/0)return;ve.setup(B,W,Lt,V,Ut);let dn,he=Pt;if(Ut!==null&&(dn=J.get(Ut),he=se,he.setIndex(dn)),B.isMesh)W.wireframe===!0?(gt.setLineWidth(W.wireframeLinewidth*$()),he.setMode(I.LINES)):he.setMode(I.TRIANGLES);else if(B.isLine){let zt=W.linewidth;zt===void 0&&(zt=1),gt.setLineWidth(zt*$()),B.isLineSegments?he.setMode(I.LINES):B.isLineLoop?he.setMode(I.LINE_LOOP):he.setMode(I.LINE_STRIP)}else B.isPoints?he.setMode(I.POINTS):B.isSprite&&he.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)he.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))he.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let zt=B._multiDrawStarts,We=B._multiDrawCounts,ue=B._multiDrawCount,Tn=Ut?J.get(Ut).bytesPerElement:1,Ki=wt.get(W).currentProgram.getUniforms();for(let fn=0;fn<ue;fn++)Ki.setValue(I,"_gl_DrawID",fn),he.render(zt[fn]/Tn,We[fn])}else if(B.isInstancedMesh)he.renderInstances(de,Se,B.count);else if(V.isInstancedBufferGeometry){let zt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,We=Math.min(V.instanceCount,zt);he.renderInstances(de,Se,We)}else he.render(de,Se)};function le(R,O,V){R.transparent===!0&&R.side===Ee&&R.forceSinglePass===!1?(R.side=tn,R.needsUpdate=!0,gr(R,O,V),R.side=zn,R.needsUpdate=!0,gr(R,O,V),R.side=Ee):gr(R,O,V)}this.compile=function(R,O,V=null){V===null&&(V=R),p=ie.get(V),p.init(O),y.push(p),V.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),R!==V&&R.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let W=new Set;return R.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ct=B.material;if(ct)if(Array.isArray(ct))for(let _t=0;_t<ct.length;_t++){let Lt=ct[_t];le(Lt,V,B),W.add(Lt)}else le(ct,V,B),W.add(ct)}),y.pop(),p=null,W},this.compileAsync=function(R,O,V=null){let W=this.compile(R,O,V);return new Promise(B=>{function ct(){if(W.forEach(function(_t){wt.get(_t).currentProgram.isReady()&&W.delete(_t)}),W.size===0){B(R);return}setTimeout(ct,10)}ft.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let cn=null;function Wn(R){cn&&cn(R)}function Lh(){Ti.stop()}function Dh(){Ti.start()}let Ti=new od;Ti.setAnimationLoop(Wn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(R){cn=R,Z.setAnimationLoop(R),R===null?Ti.stop():Ti.start()},Z.addEventListener("sessionstart",Lh),Z.addEventListener("sessionend",Dh),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,O,w),p=ie.get(R,y.length),p.init(O),y.push(p),pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Zt.setFromProjectionMatrix(pt),st=this.localClippingEnabled,K=ot.init(this.clippingPlanes,st),v=At.get(R,m.length),v.init(),m.push(v),Z.enabled===!0&&Z.isPresenting===!0){let ct=M.xr.getDepthSensingMesh();ct!==null&&bo(ct,O,-1/0,M.sortObjects)}bo(R,O,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(G,dt),kt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,kt&&qt.addToRenderList(v,R),this.info.render.frame++,K===!0&&ot.beginShadows();let V=p.state.shadowsArray;Rt.render(V,R,O),K===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=v.opaque,B=v.transmissive;if(p.setupLights(),O.isArrayCamera){let ct=O.cameras;if(B.length>0)for(let _t=0,Lt=ct.length;_t<Lt;_t++){let Ut=ct[_t];Nh(W,B,R,Ut)}kt&&qt.render(R);for(let _t=0,Lt=ct.length;_t<Lt;_t++){let Ut=ct[_t];Uh(v,R,Ut,Ut.viewport)}}else B.length>0&&Nh(W,B,R,O),kt&&qt.render(R),Uh(v,R,O);w!==null&&(P.updateMultisampleRenderTarget(w),P.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(M,R,O),ve.resetDefaultState(),C=-1,D=null,y.pop(),y.length>0?(p=y[y.length-1],K===!0&&ot.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function bo(R,O,V,W){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)V=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Zt.intersectsSprite(R)){W&&Ht.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pt);let _t=Q.update(R),Lt=R.material;Lt.visible&&v.push(R,_t,Lt,V,Ht.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Zt.intersectsObject(R))){let _t=Q.update(R),Lt=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ht.copy(R.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ht.copy(_t.boundingSphere.center)),Ht.applyMatrix4(R.matrixWorld).applyMatrix4(pt)),Array.isArray(Lt)){let Ut=_t.groups;for(let Gt=0,Wt=Ut.length;Gt<Wt;Gt++){let Ot=Ut[Gt],de=Lt[Ot.materialIndex];de&&de.visible&&v.push(R,_t,de,V,Ht.z,Ot)}}else Lt.visible&&v.push(R,_t,Lt,V,Ht.z,null)}}let ct=R.children;for(let _t=0,Lt=ct.length;_t<Lt;_t++)bo(ct[_t],O,V,W)}function Uh(R,O,V,W){let B=R.opaque,ct=R.transmissive,_t=R.transparent;p.setupLightsView(V),K===!0&&ot.setGlobalState(M.clippingPlanes,V),W&&gt.viewport(b.copy(W)),B.length>0&&mr(B,O,V),ct.length>0&&mr(ct,O,V),_t.length>0&&mr(_t,O,V),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Nh(R,O,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new ye(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Ae:Pn,minFilter:On,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let ct=p.state.transmissionRenderTarget[W.id],_t=W.viewport||b;ct.setSize(_t.z,_t.w);let Lt=M.getRenderTarget();M.setRenderTarget(ct),M.getClearColor(z),k=M.getClearAlpha(),k<1&&M.setClearColor(16777215,.5),M.clear(),kt&&qt.render(V);let Ut=M.toneMapping;M.toneMapping=ui;let Gt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),K===!0&&ot.setGlobalState(M.clippingPlanes,W),mr(R,V,W),P.updateMultisampleRenderTarget(ct),P.updateRenderTargetMipmap(ct),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ot=0,de=O.length;Ot<de;Ot++){let xe=O[Ot],Se=xe.object,dn=xe.geometry,he=xe.material,zt=xe.group;if(he.side===Ee&&Se.layers.test(W.layers)){let We=he.side;he.side=tn,he.needsUpdate=!0,Oh(Se,V,W,dn,he,zt),he.side=We,he.needsUpdate=!0,Wt=!0}}Wt===!0&&(P.updateMultisampleRenderTarget(ct),P.updateRenderTargetMipmap(ct))}M.setRenderTarget(Lt),M.setClearColor(z,k),Gt!==void 0&&(W.viewport=Gt),M.toneMapping=Ut}function mr(R,O,V){let W=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ct=R.length;B<ct;B++){let _t=R[B],Lt=_t.object,Ut=_t.geometry,Gt=W===null?_t.material:W,Wt=_t.group;Lt.layers.test(V.layers)&&Oh(Lt,O,V,Ut,Gt,Wt)}}function Oh(R,O,V,W,B,ct){R.onBeforeRender(M,O,V,W,B,ct),R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),B.onBeforeRender(M,O,V,W,R,ct),B.transparent===!0&&B.side===Ee&&B.forceSinglePass===!1?(B.side=tn,B.needsUpdate=!0,M.renderBufferDirect(V,O,W,B,R,ct),B.side=zn,B.needsUpdate=!0,M.renderBufferDirect(V,O,W,B,R,ct),B.side=Ee):M.renderBufferDirect(V,O,W,B,R,ct),R.onAfterRender(M,O,V,W,B,ct)}function gr(R,O,V){O.isScene!==!0&&(O=Xt);let W=wt.get(R),B=p.state.lights,ct=p.state.shadowsArray,_t=B.state.version,Lt=Dt.getParameters(R,B.state,ct,O,V),Ut=Dt.getProgramCacheKey(Lt),Gt=W.programs;W.environment=R.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(R.isMeshStandardMaterial?H:E).get(R.envMap||W.environment),W.envMapRotation=W.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,Gt===void 0&&(R.addEventListener("dispose",ae),Gt=new Map,W.programs=Gt);let Wt=Gt.get(Ut);if(Wt!==void 0){if(W.currentProgram===Wt&&W.lightsStateVersion===_t)return zh(R,Lt),Wt}else Lt.uniforms=Dt.getUniforms(R),R.onBeforeCompile(Lt,M),Wt=Dt.acquireProgram(Lt,Ut),Gt.set(Ut,Wt),W.uniforms=Lt.uniforms;let Ot=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ot.clippingPlanes=ot.uniform),zh(R,Lt),W.needsLights=d0(R),W.lightsStateVersion=_t,W.needsLights&&(Ot.ambientLightColor.value=B.state.ambient,Ot.lightProbe.value=B.state.probe,Ot.directionalLights.value=B.state.directional,Ot.directionalLightShadows.value=B.state.directionalShadow,Ot.spotLights.value=B.state.spot,Ot.spotLightShadows.value=B.state.spotShadow,Ot.rectAreaLights.value=B.state.rectArea,Ot.ltc_1.value=B.state.rectAreaLTC1,Ot.ltc_2.value=B.state.rectAreaLTC2,Ot.pointLights.value=B.state.point,Ot.pointLightShadows.value=B.state.pointShadow,Ot.hemisphereLights.value=B.state.hemi,Ot.directionalShadowMap.value=B.state.directionalShadowMap,Ot.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ot.spotShadowMap.value=B.state.spotShadowMap,Ot.spotLightMatrix.value=B.state.spotLightMatrix,Ot.spotLightMap.value=B.state.spotLightMap,Ot.pointShadowMap.value=B.state.pointShadowMap,Ot.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Wt,W.uniformsList=null,Wt}function Bh(R){if(R.uniformsList===null){let O=R.currentProgram.getUniforms();R.uniformsList=gs.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function zh(R,O){let V=wt.get(R);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function h0(R,O,V,W,B){O.isScene!==!0&&(O=Xt),P.resetTextureUnits();let ct=O.fog,_t=W.isMeshStandardMaterial?O.environment:null,Lt=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Mi,Ut=(W.isMeshStandardMaterial?H:E).get(W.envMap||_t),Gt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Wt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ot=!!V.morphAttributes.position,de=!!V.morphAttributes.normal,xe=!!V.morphAttributes.color,Se=ui;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Se=M.toneMapping);let dn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,he=dn!==void 0?dn.length:0,zt=wt.get(W),We=p.state.lights;if(K===!0&&(st===!0||R!==D)){let _n=R===D&&W.id===C;ot.setState(W,R,_n)}let ue=!1;W.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==We.state.version||zt.outputColorSpace!==Lt||B.isBatchedMesh&&zt.batching===!1||!B.isBatchedMesh&&zt.batching===!0||B.isBatchedMesh&&zt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&zt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&zt.instancing===!1||!B.isInstancedMesh&&zt.instancing===!0||B.isSkinnedMesh&&zt.skinning===!1||!B.isSkinnedMesh&&zt.skinning===!0||B.isInstancedMesh&&zt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&zt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&zt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&zt.instancingMorph===!1&&B.morphTexture!==null||zt.envMap!==Ut||W.fog===!0&&zt.fog!==ct||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==ot.numPlanes||zt.numIntersection!==ot.numIntersection)||zt.vertexAlphas!==Gt||zt.vertexTangents!==Wt||zt.morphTargets!==Ot||zt.morphNormals!==de||zt.morphColors!==xe||zt.toneMapping!==Se||zt.morphTargetsCount!==he)&&(ue=!0):(ue=!0,zt.__version=W.version);let Tn=zt.currentProgram;ue===!0&&(Tn=gr(W,O,B));let Ki=!1,fn=!1,_o=!1,we=Tn.getUniforms(),ii=zt.uniforms;if(gt.useProgram(Tn.program)&&(Ki=!0,fn=!0,_o=!0),W.id!==C&&(C=W.id,fn=!0),Ki||D!==R){rt.reverseDepthBuffer?(St.copy(R.projectionMatrix),Y0(St),Z0(St),we.setValue(I,"projectionMatrix",St)):we.setValue(I,"projectionMatrix",R.projectionMatrix),we.setValue(I,"viewMatrix",R.matrixWorldInverse);let _n=we.map.cameraPosition;_n!==void 0&&_n.setValue(I,Vt.setFromMatrixPosition(R.matrixWorld)),rt.logarithmicDepthBuffer&&we.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&we.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,fn=!0,_o=!0)}if(B.isSkinnedMesh){we.setOptional(I,B,"bindMatrix"),we.setOptional(I,B,"bindMatrixInverse");let _n=B.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),we.setValue(I,"boneTexture",_n.boneTexture,P))}B.isBatchedMesh&&(we.setOptional(I,B,"batchingTexture"),we.setValue(I,"batchingTexture",B._matricesTexture,P),we.setOptional(I,B,"batchingIdTexture"),we.setValue(I,"batchingIdTexture",B._indirectTexture,P),we.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&we.setValue(I,"batchingColorTexture",B._colorsTexture,P));let So=V.morphAttributes;if((So.position!==void 0||So.normal!==void 0||So.color!==void 0)&&Yt.update(B,V,Tn),(fn||zt.receiveShadow!==B.receiveShadow)&&(zt.receiveShadow=B.receiveShadow,we.setValue(I,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ii.envMap.value=Ut,ii.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(ii.envMapIntensity.value=O.environmentIntensity),fn&&(we.setValue(I,"toneMappingExposure",M.toneMappingExposure),zt.needsLights&&u0(ii,_o),ct&&W.fog===!0&&xt.refreshFogUniforms(ii,ct),xt.refreshMaterialUniforms(ii,W,tt,F,p.state.transmissionRenderTarget[R.id]),gs.upload(I,Bh(zt),ii,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(gs.upload(I,Bh(zt),ii,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&we.setValue(I,"center",B.center),we.setValue(I,"modelViewMatrix",B.modelViewMatrix),we.setValue(I,"normalMatrix",B.normalMatrix),we.setValue(I,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let _n=W.uniformsGroups;for(let wo=0,f0=_n.length;wo<f0;wo++){let Fh=_n[wo];N.update(Fh,Tn),N.bind(Fh,Tn)}}return Tn}function u0(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function d0(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,O,V){wt.get(R.texture).__webglTexture=O,wt.get(R.depthTexture).__webglTexture=V;let W=wt.get(R);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,O){let V=wt.get(R);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,V=0){w=R,T=O,_=V;let W=!0,B=null,ct=!1,_t=!1;if(R){let Ut=wt.get(R);if(Ut.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(Ut.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(Ut.__hasExternalTextures)P.rebindTextures(R,wt.get(R.texture).__webglTexture,wt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Ot=R.depthTexture;if(Ut.__boundDepthTexture!==Ot){if(Ot!==null&&wt.has(Ot)&&(R.width!==Ot.image.width||R.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}let Gt=R.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(_t=!0);let Wt=wt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Wt[O])?B=Wt[O][V]:B=Wt[O],ct=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?B=wt.get(R).__webglMultisampledFramebuffer:Array.isArray(Wt)?B=Wt[V]:B=Wt,b.copy(R.viewport),S.copy(R.scissor),U=R.scissorTest}else b.copy(lt).multiplyScalar(tt).floor(),S.copy(it).multiplyScalar(tt).floor(),U=Nt;if(gt.bindFramebuffer(I.FRAMEBUFFER,B)&&W&&gt.drawBuffers(R,B),gt.viewport(b),gt.scissor(S),gt.setScissorTest(U),ct){let Ut=wt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ut.__webglTexture,V)}else if(_t){let Ut=wt.get(R.texture),Gt=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ut.__webglTexture,V||0,Gt)}C=-1},this.readRenderTargetPixels=function(R,O,V,W,B,ct,_t){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=wt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_t!==void 0&&(Lt=Lt[_t]),Lt){gt.bindFramebuffer(I.FRAMEBUFFER,Lt);try{let Ut=R.texture,Gt=Ut.format,Wt=Ut.type;if(!rt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-W&&V>=0&&V<=R.height-B&&I.readPixels(O,V,W,B,Kt.convert(Gt),Kt.convert(Wt),ct)}finally{let Ut=w!==null?wt.get(w).__webglFramebuffer:null;gt.bindFramebuffer(I.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(R,O,V,W,B,ct,_t){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=wt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_t!==void 0&&(Lt=Lt[_t]),Lt){let Ut=R.texture,Gt=Ut.format,Wt=Ut.type;if(!rt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=R.width-W&&V>=0&&V<=R.height-B){gt.bindFramebuffer(I.FRAMEBUFFER,Lt);let Ot=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ot),I.bufferData(I.PIXEL_PACK_BUFFER,ct.byteLength,I.STREAM_READ),I.readPixels(O,V,W,B,Kt.convert(Gt),Kt.convert(Wt),0);let de=w!==null?wt.get(w).__webglFramebuffer:null;gt.bindFramebuffer(I.FRAMEBUFFER,de);let xe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await q0(I,xe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ot),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ct),I.deleteBuffer(Ot),I.deleteSync(xe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,O=null,V=0){R.isTexture!==!0&&(Zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,R=arguments[1]);let W=Math.pow(2,-V),B=Math.floor(R.image.width*W),ct=Math.floor(R.image.height*W),_t=O!==null?O.x:0,Lt=O!==null?O.y:0;P.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,_t,Lt,B,ct),gt.unbindTexture()},this.copyTextureToTexture=function(R,O,V=null,W=null,B=0){R.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1],O=arguments[2],B=arguments[3]||0,V=null);let ct,_t,Lt,Ut,Gt,Wt;V!==null?(ct=V.max.x-V.min.x,_t=V.max.y-V.min.y,Lt=V.min.x,Ut=V.min.y):(ct=R.image.width,_t=R.image.height,Lt=0,Ut=0),W!==null?(Gt=W.x,Wt=W.y):(Gt=0,Wt=0);let Ot=Kt.convert(O.format),de=Kt.convert(O.type);P.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);let xe=I.getParameter(I.UNPACK_ROW_LENGTH),Se=I.getParameter(I.UNPACK_IMAGE_HEIGHT),dn=I.getParameter(I.UNPACK_SKIP_PIXELS),he=I.getParameter(I.UNPACK_SKIP_ROWS),zt=I.getParameter(I.UNPACK_SKIP_IMAGES),We=R.isCompressedTexture?R.mipmaps[B]:R.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,We.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,We.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Lt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ut),R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,Gt,Wt,ct,_t,Ot,de,We.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,Gt,Wt,We.width,We.height,Ot,We.data):I.texSubImage2D(I.TEXTURE_2D,B,Gt,Wt,ct,_t,Ot,de,We),I.pixelStorei(I.UNPACK_ROW_LENGTH,xe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Se),I.pixelStorei(I.UNPACK_SKIP_PIXELS,dn),I.pixelStorei(I.UNPACK_SKIP_ROWS,he),I.pixelStorei(I.UNPACK_SKIP_IMAGES,zt),B===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(R,O,V=null,W=null,B=0){R.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,R=arguments[2],O=arguments[3],B=arguments[4]||0);let ct,_t,Lt,Ut,Gt,Wt,Ot,de,xe,Se=R.isCompressedTexture?R.mipmaps[B]:R.image;V!==null?(ct=V.max.x-V.min.x,_t=V.max.y-V.min.y,Lt=V.max.z-V.min.z,Ut=V.min.x,Gt=V.min.y,Wt=V.min.z):(ct=Se.width,_t=Se.height,Lt=Se.depth,Ut=0,Gt=0,Wt=0),W!==null?(Ot=W.x,de=W.y,xe=W.z):(Ot=0,de=0,xe=0);let dn=Kt.convert(O.format),he=Kt.convert(O.type),zt;if(O.isData3DTexture)P.setTexture3D(O,0),zt=I.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)P.setTexture2DArray(O,0),zt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);let We=I.getParameter(I.UNPACK_ROW_LENGTH),ue=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Tn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ki=I.getParameter(I.UNPACK_SKIP_ROWS),fn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Se.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Se.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ut),I.pixelStorei(I.UNPACK_SKIP_ROWS,Gt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wt),R.isDataTexture||R.isData3DTexture?I.texSubImage3D(zt,B,Ot,de,xe,ct,_t,Lt,dn,he,Se.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(zt,B,Ot,de,xe,ct,_t,Lt,dn,Se.data):I.texSubImage3D(zt,B,Ot,de,xe,ct,_t,Lt,dn,he,Se),I.pixelStorei(I.UNPACK_ROW_LENGTH,We),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ue),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Tn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ki),I.pixelStorei(I.UNPACK_SKIP_IMAGES,fn),B===0&&O.generateMipmaps&&I.generateMipmap(zt),gt.unbindTexture()},this.initRenderTarget=function(R){wt.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),gt.unbindTexture()},this.resetState=function(){T=0,_=0,w=null,gt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===qc?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===La?"display-p3":"srgb"}},ha=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ti=class extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ie,this.environmentIntensity=1,this.environmentRotation=new Ie,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var oc=class extends Ye{constructor(t=null,e=1,n=1,i,s,a,o,l,c=Pe,h=Pe,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fn=class extends He{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},us=new jt,Nu=new jt,zr=[],Ou=new $n,Gv=new jt,zs=new Ct,Fs=new In,Fi=class extends Ct{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Gv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),Ou.copy(t.boundingBox).applyMatrix4(us),this.boundingBox.union(Ou)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),Fs.copy(t.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),t.ray.intersectsSphere(Fs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,us),Nu.multiplyMatrices(n,us),zs.matrixWorld=Nu,zs.raycast(t,zr);for(let a=0,o=zr.length;a<o;a++){let l=zr[a];l.instanceId=s,l.object=this,e.push(l)}zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new oc(new Float32Array(i*this.count),i,this.count,Hc,Bn));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ua=class extends Ye{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new X:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new A,i=[],s=[],a=[],o=new A,l=new jt;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new A)}s[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Fe(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Fe(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},js=class extends wn{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new X){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},lc=class extends js{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Zc(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+n*o}}}var Fr=new A,nl=new Zc,il=new Zc,sl=new Zc,Ks=class extends wn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){let n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Fr.subVectors(i[0],i[1]).add(i[0]),c=Fr);let u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Fr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),nl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,p),il.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,p),sl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),il.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),sl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(nl.calc(l),il.calc(l),sl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Bu(r,t,e,n,i){let s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function Wv(r,t){let e=1-r;return e*e*t}function Xv(r,t){return 2*(1-r)*r*t}function qv(r,t){return r*r*t}function Gs(r,t,e,n){return Wv(r,t)+Xv(r,e)+qv(r,n)}function Yv(r,t){let e=1-r;return e*e*e*t}function Zv(r,t){let e=1-r;return 3*e*e*r*t}function jv(r,t){return 3*(1-r)*r*r*t}function Kv(r,t){return r*r*r*t}function Ws(r,t,e,n,i){return Yv(r,t)+Zv(r,e)+jv(r,n)+Kv(r,i)}var da=class extends wn{constructor(t=new X,e=new X,n=new X,i=new X){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new X){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ws(t,i.x,s.x,a.x,o.x),Ws(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},cc=class extends wn{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ws(t,i.x,s.x,a.x,o.x),Ws(t,i.y,s.y,a.y,o.y),Ws(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fa=class extends wn{constructor(t=new X,e=new X){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new X){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new X){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hc=class extends wn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends wn{constructor(t=new X,e=new X,n=new X){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new X){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Gs(t,i.x,s.x,a.x),Gs(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends wn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Gs(t,i.x,s.x,a.x),Gs(t,i.y,s.y,a.y),Gs(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ga=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new X){let n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Bu(o,l.x,c.x,h.x,u.x),Bu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new X().fromArray(i))}return this}},va=Object.freeze({__proto__:null,ArcCurve:lc,CatmullRomCurve3:Ks,CubicBezierCurve:da,CubicBezierCurve3:cc,EllipseCurve:js,LineCurve:fa,LineCurve3:hc,QuadraticBezierCurve:pa,QuadraticBezierCurve3:ma,SplineCurve:ga}),uc=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new va[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new va[i.type]().fromJSON(i))}return this}},Ss=class extends uc{constructor(t){super(),this.type="Path",this.currentPoint=new X,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new fa(this.currentPoint.clone(),new X(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new pa(this.currentPoint.clone(),new X(t,e),new X(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){let o=new da(this.currentPoint.clone(),new X(t,e),new X(n,i),new X(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ga(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,a,o,l),this}absellipse(t,e,n,i,s,a,o,l){let c=new js(t,e,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Js=class r extends Te{constructor(t=[new X(0,-.5),new X(.5,0),new X(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Fe(i,0,Math.PI*2);let s=[],a=[],o=[],l=[],c=[],h=1/e,u=new A,d=new X,f=new A,g=new A,v=new A,p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=e;y++){let M=n+y*h*i,x=Math.sin(M),T=Math.cos(M);for(let _=0;_<=t.length-1;_++){u.x=t[_].x*x,u.y=t[_].y,u.z=t[_].x*T,a.push(u.x,u.y,u.z),d.x=y/e,d.y=_/(t.length-1),o.push(d.x,d.y);let w=l[3*_+0]*x,C=l[3*_+1],D=l[3*_+0]*T;c.push(w,C,D)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){let x=M+y*t.length,T=x,_=x+t.length,w=x+t.length+1,C=x+1;s.push(T,_,C),s.push(w,C,_)}this.setIndex(s),this.setAttribute("position",new ee(a,3)),this.setAttribute("uv",new ee(o,2)),this.setAttribute("normal",new ee(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var dc=class r extends Te{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],g=0,v=[],p=n/2,m=0;y(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(f,2));function y(){let x=new A,T=new A,_=0,w=(e-t)/n;for(let C=0;C<=s;C++){let D=[],b=C/s,S=b*(e-t)+t;for(let U=0;U<=i;U++){let z=U/i,k=z*l+o,j=Math.sin(k),F=Math.cos(k);T.x=S*j,T.y=-b*n+p,T.z=S*F,u.push(T.x,T.y,T.z),x.set(j,w,F).normalize(),d.push(x.x,x.y,x.z),f.push(z,1-b),D.push(g++)}v.push(D)}for(let C=0;C<i;C++)for(let D=0;D<s;D++){let b=v[D][C],S=v[D+1][C],U=v[D+1][C+1],z=v[D][C+1];t>0&&(h.push(b,S,z),_+=3),e>0&&(h.push(S,U,z),_+=3)}c.addGroup(m,_,0),m+=_}function M(x){let T=g,_=new X,w=new A,C=0,D=x===!0?t:e,b=x===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,p*b,0),d.push(0,b,0),f.push(.5,.5),g++;let S=g;for(let U=0;U<=i;U++){let k=U/i*l+o,j=Math.cos(k),F=Math.sin(k);w.x=D*F,w.y=p*b,w.z=D*j,u.push(w.x,w.y,w.z),d.push(0,b,0),_.x=j*.5+.5,_.y=F*.5*b+.5,f.push(_.x,_.y),g++}for(let U=0;U<i;U++){let z=T+U,k=S+U;x===!0?h.push(k,k+1,z):h.push(k+1,k,z),C+=3}c.addGroup(m,C,x===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xa=class r extends dc{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fc=class r extends Te{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(s.slice(),3)),this.setAttribute("uv",new ee(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let M=new A,x=new A,T=new A;for(let _=0;_<e.length;_+=3)f(e[_+0],M),f(e[_+1],x),f(e[_+2],T),l(M,x,T,y)}function l(y,M,x,T){let _=T+1,w=[];for(let C=0;C<=_;C++){w[C]=[];let D=y.clone().lerp(x,C/_),b=M.clone().lerp(x,C/_),S=_-C;for(let U=0;U<=S;U++)U===0&&C===_?w[C][U]=D:w[C][U]=D.clone().lerp(b,U/S)}for(let C=0;C<_;C++)for(let D=0;D<2*(_-C)-1;D++){let b=Math.floor(D/2);D%2===0?(d(w[C][b+1]),d(w[C+1][b]),d(w[C][b])):(d(w[C][b+1]),d(w[C+1][b+1]),d(w[C+1][b]))}}function c(y){let M=new A;for(let x=0;x<s.length;x+=3)M.x=s[x+0],M.y=s[x+1],M.z=s[x+2],M.normalize().multiplyScalar(y),s[x+0]=M.x,s[x+1]=M.y,s[x+2]=M.z}function h(){let y=new A;for(let M=0;M<s.length;M+=3){y.x=s[M+0],y.y=s[M+1],y.z=s[M+2];let x=p(y)/2/Math.PI+.5,T=m(y)/Math.PI+.5;a.push(x,1-T)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let M=a[y+0],x=a[y+2],T=a[y+4],_=Math.max(M,x,T),w=Math.min(M,x,T);_>.9&&w<.1&&(M<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),T<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,M){let x=y*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function g(){let y=new A,M=new A,x=new A,T=new A,_=new X,w=new X,C=new X;for(let D=0,b=0;D<s.length;D+=9,b+=6){y.set(s[D+0],s[D+1],s[D+2]),M.set(s[D+3],s[D+4],s[D+5]),x.set(s[D+6],s[D+7],s[D+8]),_.set(a[b+0],a[b+1]),w.set(a[b+2],a[b+3]),C.set(a[b+4],a[b+5]),T.copy(y).add(M).add(x).divideScalar(3);let S=p(T);v(_,b+0,y,S),v(w,b+2,M,S),v(C,b+4,x,S)}}function v(y,M,x,T){T<0&&y.x===1&&(a[M]=y.x-1),x.x===0&&x.z===0&&(a[M]=T/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var xi=class extends Ss{constructor(t){super(t),this.uuid=As(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ss().fromJSON(i))}return this}},Jv={triangulate:function(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=dd(r,0,i,e,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,f;if(n&&(s=nx(r,t,s,e)),r.length>80*e){o=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)u=r[g],d=r[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Qs(s,a,e,o,l,f,0),a}};function dd(r,t,e,n,i){let s,a;if(i===fx(r,t,e,n)>0)for(s=t;s<e;s+=n)a=zu(s,r[s],r[s+1],a);else for(s=e-n;s>=t;s-=n)a=zu(s,r[s],r[s+1],a);return a&&Ua(a,a.next)&&(tr(a),a=a.next),a}function ki(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Ua(e,e.next)||be(e.prev,e,e.next)===0)){if(tr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qs(r,t,e,n,i,s,a){if(!r)return;!a&&s&&ox(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?$v(r,n,i,s):Qv(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),tr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=tx(ki(r),t,e),Qs(r,t,e,n,i,s,2)):a===2&&ex(r,t,e,n,i,s):Qs(ki(r),t,e,n,i,s,1);break}}}function Qv(r){let t=r.prev,e=r,n=r.next;if(be(t,e,n)>=0)return!1;let i=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=i>s?i>a?i:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&fs(i,o,s,l,a,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $v(r,t,e,n){let i=r.prev,s=r,a=r.next;if(be(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,m=pc(f,g,t,e,n),y=pc(v,p,t,e,n),M=r.prevZ,x=r.nextZ;for(;M&&M.z>=m&&x&&x.z<=y;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=p&&M!==i&&M!==a&&fs(o,h,l,u,c,d,M.x,M.y)&&be(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=p&&x!==i&&x!==a&&fs(o,h,l,u,c,d,x.x,x.y)&&be(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=p&&M!==i&&M!==a&&fs(o,h,l,u,c,d,M.x,M.y)&&be(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=p&&x!==i&&x!==a&&fs(o,h,l,u,c,d,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function tx(r,t,e){let n=r;do{let i=n.prev,s=n.next.next;!Ua(i,s)&&fd(i,n,n.next,s)&&$s(i,s)&&$s(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),tr(n),tr(n.next),n=r=s),n=n.next}while(n!==r);return ki(n)}function ex(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&hx(a,o)){let l=pd(a,o);a=ki(a,a.next),l=ki(l,l.next),Qs(a,t,e,n,i,s,0),Qs(l,t,e,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function nx(r,t,e,n){let i=[],s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*n,l=s<a-1?t[s+1]*n:r.length,c=dd(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(cx(c));for(i.sort(ix),s=0;s<i.length;s++)e=sx(i[s],e);return e}function ix(r,t){return r.x-t.x}function sx(r,t){let e=rx(r,t);if(!e)return t;let n=pd(e,r);return ki(n,n.next),ki(e,e.next)}function rx(r,t){let e=t,n=-1/0,i,s=r.x,a=r.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;let o=i,l=i.x,c=i.y,h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&fs(a<c?s:n,a,l,c,a<c?n:s,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(s-e.x),$s(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&ax(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function ax(r,t){return be(r.prev,r,t.prev)<0&&be(t.next,r,r.next)<0}function ox(r,t,e,n){let i=r;do i.z===0&&(i.z=pc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,lx(i)}function lx(r){let t,e,n,i,s,a,o,l,c=1;do{for(e=r,r=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(a>1);return r}function pc(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function cx(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function fs(r,t,e,n,i,s,a,o){return(i-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(i-a)*(n-o)}function hx(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!ux(r,t)&&($s(r,t)&&$s(t,r)&&dx(r,t)&&(be(r.prev,r,t.prev)||be(r,t.prev,t))||Ua(r,t)&&be(r.prev,r,r.next)>0&&be(t.prev,t,t.next)>0)}function be(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Ua(r,t){return r.x===t.x&&r.y===t.y}function fd(r,t,e,n){let i=Hr(be(r,t,e)),s=Hr(be(r,t,n)),a=Hr(be(e,n,r)),o=Hr(be(e,n,t));return!!(i!==s&&a!==o||i===0&&kr(r,e,t)||s===0&&kr(r,n,t)||a===0&&kr(e,r,n)||o===0&&kr(e,t,n))}function kr(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Hr(r){return r>0?1:r<0?-1:0}function ux(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&fd(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function $s(r,t){return be(r.prev,r,r.next)<0?be(r,t,r.next)>=0&&be(r,r.prev,t)>=0:be(r,t,r.prev)<0||be(r,r.next,t)<0}function dx(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function pd(r,t){let e=new mc(r.i,r.x,r.y),n=new mc(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function zu(r,t,e,n){let i=new mc(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function tr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function mc(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fx(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}var di=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Fu(t),ku(n,t);let a=t.length;e.forEach(Fu);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,ku(n,e[l]);let o=Jv.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Fu(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function ku(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var ya=class r extends Te{constructor(t=new xi([new X(.5,.5),new X(-.5,.5),new X(-.5,-.5),new X(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ee(i,3)),this.setAttribute("uv",new ee(s,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:px,M,x=!1,T,_,w,C;m&&(M=m.getSpacedPoints(h),x=!0,d=!1,T=m.computeFrenetFrames(h,!1),_=new A,w=new A,C=new A),d||(p=0,f=0,g=0,v=0);let D=o.extractPoints(c),b=D.shape,S=D.holes;if(!di.isClockWise(b)){b=b.reverse();for(let $=0,I=S.length;$<I;$++){let mt=S[$];di.isClockWise(mt)&&(S[$]=mt.reverse())}}let z=di.triangulateShape(b,S),k=b;for(let $=0,I=S.length;$<I;$++){let mt=S[$];b=b.concat(mt)}function j($,I,mt){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(I,mt)}let F=b.length,tt=z.length;function G($,I,mt){let ft,rt,gt,Bt=$.x-I.x,wt=$.y-I.y,P=mt.x-$.x,E=mt.y-$.y,H=Bt*Bt+wt*wt,J=Bt*E-wt*P;if(Math.abs(J)>Number.EPSILON){let et=Math.sqrt(H),Q=Math.sqrt(P*P+E*E),Dt=I.x-wt/et,xt=I.y+Bt/et,At=mt.x-E/Q,ie=mt.y+P/Q,ot=((At-Dt)*E-(ie-xt)*P)/(Bt*E-wt*P);ft=Dt+Bt*ot-$.x,rt=xt+wt*ot-$.y;let Rt=ft*ft+rt*rt;if(Rt<=2)return new X(ft,rt);gt=Math.sqrt(Rt/2)}else{let et=!1;Bt>Number.EPSILON?P>Number.EPSILON&&(et=!0):Bt<-Number.EPSILON?P<-Number.EPSILON&&(et=!0):Math.sign(wt)===Math.sign(E)&&(et=!0),et?(ft=-wt,rt=Bt,gt=Math.sqrt(H)):(ft=Bt,rt=wt,gt=Math.sqrt(H/2))}return new X(ft/gt,rt/gt)}let dt=[];for(let $=0,I=k.length,mt=I-1,ft=$+1;$<I;$++,mt++,ft++)mt===I&&(mt=0),ft===I&&(ft=0),dt[$]=G(k[$],k[mt],k[ft]);let lt=[],it,Nt=dt.concat();for(let $=0,I=S.length;$<I;$++){let mt=S[$];it=[];for(let ft=0,rt=mt.length,gt=rt-1,Bt=ft+1;ft<rt;ft++,gt++,Bt++)gt===rt&&(gt=0),Bt===rt&&(Bt=0),it[ft]=G(mt[ft],mt[gt],mt[Bt]);lt.push(it),Nt=Nt.concat(it)}for(let $=0;$<p;$++){let I=$/p,mt=f*Math.cos(I*Math.PI/2),ft=g*Math.sin(I*Math.PI/2)+v;for(let rt=0,gt=k.length;rt<gt;rt++){let Bt=j(k[rt],dt[rt],ft);pt(Bt.x,Bt.y,-mt)}for(let rt=0,gt=S.length;rt<gt;rt++){let Bt=S[rt];it=lt[rt];for(let wt=0,P=Bt.length;wt<P;wt++){let E=j(Bt[wt],it[wt],ft);pt(E.x,E.y,-mt)}}}let Zt=g+v;for(let $=0;$<F;$++){let I=d?j(b[$],Nt[$],Zt):b[$];x?(w.copy(T.normals[0]).multiplyScalar(I.x),_.copy(T.binormals[0]).multiplyScalar(I.y),C.copy(M[0]).add(w).add(_),pt(C.x,C.y,C.z)):pt(I.x,I.y,0)}for(let $=1;$<=h;$++)for(let I=0;I<F;I++){let mt=d?j(b[I],Nt[I],Zt):b[I];x?(w.copy(T.normals[$]).multiplyScalar(mt.x),_.copy(T.binormals[$]).multiplyScalar(mt.y),C.copy(M[$]).add(w).add(_),pt(C.x,C.y,C.z)):pt(mt.x,mt.y,u/h*$)}for(let $=p-1;$>=0;$--){let I=$/p,mt=f*Math.cos(I*Math.PI/2),ft=g*Math.sin(I*Math.PI/2)+v;for(let rt=0,gt=k.length;rt<gt;rt++){let Bt=j(k[rt],dt[rt],ft);pt(Bt.x,Bt.y,u+mt)}for(let rt=0,gt=S.length;rt<gt;rt++){let Bt=S[rt];it=lt[rt];for(let wt=0,P=Bt.length;wt<P;wt++){let E=j(Bt[wt],it[wt],ft);x?pt(E.x,E.y+M[h-1].y,M[h-1].x+mt):pt(E.x,E.y,u+mt)}}}K(),st();function K(){let $=i.length/3;if(d){let I=0,mt=F*I;for(let ft=0;ft<tt;ft++){let rt=z[ft];Vt(rt[2]+mt,rt[1]+mt,rt[0]+mt)}I=h+p*2,mt=F*I;for(let ft=0;ft<tt;ft++){let rt=z[ft];Vt(rt[0]+mt,rt[1]+mt,rt[2]+mt)}}else{for(let I=0;I<tt;I++){let mt=z[I];Vt(mt[2],mt[1],mt[0])}for(let I=0;I<tt;I++){let mt=z[I];Vt(mt[0]+F*h,mt[1]+F*h,mt[2]+F*h)}}n.addGroup($,i.length/3-$,0)}function st(){let $=i.length/3,I=0;St(k,I),I+=k.length;for(let mt=0,ft=S.length;mt<ft;mt++){let rt=S[mt];St(rt,I),I+=rt.length}n.addGroup($,i.length/3-$,1)}function St($,I){let mt=$.length;for(;--mt>=0;){let ft=mt,rt=mt-1;rt<0&&(rt=$.length-1);for(let gt=0,Bt=h+p*2;gt<Bt;gt++){let wt=F*gt,P=F*(gt+1),E=I+ft+wt,H=I+rt+wt,J=I+rt+P,et=I+ft+P;Ht(E,H,J,et)}}}function pt($,I,mt){l.push($),l.push(I),l.push(mt)}function Vt($,I,mt){Xt($),Xt(I),Xt(mt);let ft=i.length/3,rt=y.generateTopUV(n,i,ft-3,ft-2,ft-1);kt(rt[0]),kt(rt[1]),kt(rt[2])}function Ht($,I,mt,ft){Xt($),Xt(I),Xt(ft),Xt(I),Xt(mt),Xt(ft);let rt=i.length/3,gt=y.generateSideWallUV(n,i,rt-6,rt-3,rt-2,rt-1);kt(gt[0]),kt(gt[1]),kt(gt[3]),kt(gt[1]),kt(gt[2]),kt(gt[3])}function Xt($){i.push(l[$*3+0]),i.push(l[$*3+1]),i.push(l[$*3+2])}function kt($){s.push($.x),s.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return mx(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,a=t.shapes.length;s<a;s++){let o=e[t.shapes[s]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new va[i.type]().fromJSON(i)),new r(n,t.options)}},px={generateTopUV:function(r,t,e,n,i){let s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new X(s,a),new X(o,l),new X(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],v=t[s*3],p=t[s*3+1],m=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new X(a,1-l),new X(c,1-u),new X(d,1-g),new X(v,1-m)]:[new X(o,1-l),new X(h,1-u),new X(f,1-g),new X(p,1-m)]}};function mx(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ws=class r extends fc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Ma=class r extends Te{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/i,f=new A,g=new X;for(let v=0;v<=i;v++){for(let p=0;p<=n;p++){let m=s+p/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<i;v++){let p=v*(n+1);for(let m=0;m<n;m++){let y=m+p,M=y,x=y+n+1,T=y+n+2,_=y+1;o.push(M,x,_),o.push(x,T,_)}}this.setIndex(o),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ba=class r extends Te{constructor(t=new xi([new X(0,.5),new X(-.5,-.5),new X(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ee(i,3)),this.setAttribute("normal",new ee(s,3)),this.setAttribute("uv",new ee(a,2));function c(h){let u=i.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;di.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let y=g[p];di.isClockWise(y)===!0&&(g[p]=y.reverse())}let v=di.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let y=g[p];f=f.concat(y)}for(let p=0,m=f.length;p<m;p++){let y=f[p];i.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let p=0,m=v.length;p<m;p++){let y=v[p],M=y[0]+u,x=y[1]+u,T=y[2]+u;n.push(M,x,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return gx(e,t)}static fromJSON(t,e){let n=[];for(let i=0,s=t.shapes.length;i<s;i++){let a=e[t.shapes[i]];n.push(a)}return new r(n,t.curveSegments)}};function gx(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){let i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}var je=class r extends Te{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new A,d=new A,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){let y=[],M=m/n,x=0;m===0&&a===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){let _=T/e;u.x=-t*Math.cos(i+_*s)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(i+_*s)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(_+x,1-M),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){let M=h[m][y+1],x=h[m][y],T=h[m+1][y],_=h[m+1][y+1];(m!==0||a>0)&&f.push(M,x,_),(m!==n-1||l<Math.PI)&&f.push(x,T,_)}this.setIndex(f),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(v,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Hi=class r extends Te{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let v=g/i*s,p=f/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(v),u.y=(t+e*Math.cos(p))*Math.sin(v),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let v=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,y=(i+1)*f+g;a.push(v,p,y),a.push(p,m,y)}this.setIndex(a),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var _a=class r extends Te{constructor(t=new ma(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,l=new A,c=new X,h=new A,u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(f,2));function v(){for(let M=0;M<e;M++)p(M);p(s===!1?e:0),y(),m()}function p(M){h=t.getPointAt(M/e,h);let x=a.normals[M],T=a.binormals[M];for(let _=0;_<=i;_++){let w=_/i*Math.PI*2,C=Math.sin(w),D=-Math.cos(w);l.x=D*x.x+C*T.x,l.y=D*x.y+C*T.y,l.z=D*x.z+C*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let M=1;M<=e;M++)for(let x=1;x<=i;x++){let T=(i+1)*(M-1)+(x-1),_=(i+1)*M+(x-1),w=(i+1)*M+x,C=(i+1)*(M-1)+x;g.push(T,_,C),g.push(_,w,C)}}function y(){for(let M=0;M<=e;M++)for(let x=0;x<=i;x++)c.x=M/e,c.y=x/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new va[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Sa=class extends re{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ge=class extends gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ie,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},vn=class extends Ge{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new X(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var wa=class extends gi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function Vr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function vx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Es=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},gc=class extends Es{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gh,endingEnd:Gh}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wh:s=t,o=2*e-n;break;case Xh:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wh:a=t,l=2*n-e;break;case Xh:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,y=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,M=(-1-f)*p+(1.5+f)*v+.5*g,x=f*p-f*v;for(let T=0;T!==o;++T)s[T]=m*a[h+T]+y*a[c+T]+M*a[l+T]+x*a[u+T];return s}},vc=class extends Es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},xc=class extends Es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ln=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case jr:e=this.InterpolantFactoryMethodDiscrete;break;case Xl:e=this.InterpolantFactoryMethodLinear;break;case To:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jr;case this.InterpolantFactoryMethodLinear:return Xl;case this.InterpolantFactoryMethodSmooth:return To}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&vx(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===To,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=e[u+g];if(v!==e[d+g]||v!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Xl;var Vi=class extends Ln{constructor(t,e,n){super(t,e,n)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=jr;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var yc=class extends Ln{};yc.prototype.ValueTypeName="color";var Mc=class extends Ln{};Mc.prototype.ValueTypeName="number";var bc=class extends Es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)pe.slerpFlat(s,0,a,c-o,a,c,l);return s}},Ea=class extends Ln{InterpolantFactoryMethodLinear(t){return new bc(this.times,this.values,this.getValueSize(),t)}};Ea.prototype.ValueTypeName="quaternion";Ea.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends Ln{constructor(t,e,n){super(t,e,n)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=jr;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var _c=class extends Ln{};_c.prototype.ValueTypeName="vector";var Sc=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},xx=new Sc,wc=class{constructor(t){this.manager=t!==void 0?t:xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};wc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wi=class extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ta=class extends Wi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},rl=new jt,Hu=new A,Vu=new A,er=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new X(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new X(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hu),Vu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vu),e.updateMatrixWorld(),rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ec=class extends er{constructor(){super(new Ne(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=ta*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Aa=class extends Wi{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Ec}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Gu=new jt,ks=new A,al=new A,Tc=class extends er{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new X(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ks.setFromMatrixPosition(t.matrixWorld),n.position.copy(ks),al.copy(n.position),al.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(al),n.updateMatrixWorld(),i.makeTranslation(-ks.x,-ks.y,-ks.z),Gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu)}},xn=class extends Wi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Tc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ac=class extends er{constructor(){super(new vi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xi=class extends Wi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new Ac}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ts=class extends Wi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ra=class extends Te{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var yi=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Wu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Wu(){return performance.now()}var jc="\\[\\]\\.:\\/",yx=new RegExp("["+jc+"]","g"),Kc="[^"+jc+"]",Mx="[^"+jc.replace("\\.","")+"]",bx=/((?:WC+[\/:])*)/.source.replace("WC",Kc),_x=/(WCOD+)?/.source.replace("WCOD",Mx),Sx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),Ex=new RegExp("^"+bx+_x+Sx+wx+"$"),Tx=["material","materials","bones","map"],Rc=class{constructor(t,e,n){let i=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yx,"")}static parseTrackName(t){let e=Ex.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Tx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Rc;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var M1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cc);var _i={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Je=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ax=new vi(-1,1,1,-1,0,1),Jc=class extends Te{constructor(){super(),this.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ee([0,2,0,0,2,0],2))}},Rx=new Jc,En=class{constructor(t){this._mesh=new Ct(Rx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ax)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Cs=class extends Je{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof re?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ke.clone(t.uniforms),this.material=new re({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new En(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ir=class extends Je{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},Na=class extends Je{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Oa=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new X);this._width=n.width,this._height=n.height,e=new ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ae}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cs(_i),this.copyPass.material.blending=ke,this.clock=new yi}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ir!==void 0&&(a instanceof ir?n=!0:a instanceof Na&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new X);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ba=class extends Je{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new It}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}};var md={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new It(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ps=class r extends Je{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new X(t.x,t.y):new X(256,256),this.clearColor=new It(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ye(s,a,{type:Ae}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new ye(s,a,{type:Ae});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new ye(s,a,{type:Ae});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let o=md;this.highPassUniforms=Ke.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new re({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new X(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=_i;this.copyUniforms=Ke.clone(h.uniforms),this.blendMaterial=new re({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:qe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new It,this.oldClearAlpha=1,this.basic=new Le,this.fsQuad=new En(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new X(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new re({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new X(.5,.5)},direction:{value:new X(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new re({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Ps.BlurDirectionX=new X(1,0);Ps.BlurDirectionY=new X(0,1);var sr={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new X(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},rr={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new X(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},za={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new X(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};var Fa=class extends Je{constructor(t,e){super(),this.edgesRT=new ye(t,e,{depthBuffer:!1,type:Ae}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new ye(t,e,{depthBuffer:!1,type:Ae}),this.weightsRT.texture.name="SMAAPass.weights";let n=this,i=new Image;i.src=this.getAreaTexture(),i.onload=function(){n.areaTexture.needsUpdate=!0},this.areaTexture=new Ye,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=i,this.areaTexture.minFilter=nn,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;let s=new Image;s.src=this.getSearchTexture(),s.onload=function(){n.searchTexture.needsUpdate=!0},this.searchTexture=new Ye,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=s,this.searchTexture.magFilter=Pe,this.searchTexture.minFilter=Pe,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=Ke.clone(sr.uniforms),this.uniformsEdges.resolution.value.set(1/t,1/e),this.materialEdges=new re({defines:Object.assign({},sr.defines),uniforms:this.uniformsEdges,vertexShader:sr.vertexShader,fragmentShader:sr.fragmentShader}),this.uniformsWeights=Ke.clone(rr.uniforms),this.uniformsWeights.resolution.value.set(1/t,1/e),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new re({defines:Object.assign({},rr.defines),uniforms:this.uniformsWeights,vertexShader:rr.vertexShader,fragmentShader:rr.fragmentShader}),this.uniformsBlend=Ke.clone(za.uniforms),this.uniformsBlend.resolution.value.set(1/t,1/e),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new re({uniforms:this.uniformsBlend,vertexShader:za.vertexShader,fragmentShader:za.fragmentShader}),this.fsQuad=new En(null)}render(t,e,n){this.uniformsEdges.tDiffuse.value=n.texture,this.fsQuad.material=this.materialEdges,t.setRenderTarget(this.edgesRT),this.clear&&t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.materialWeights,t.setRenderTarget(this.weightsRT),this.clear&&t.clear(),this.fsQuad.render(t),this.uniformsBlend.tColor.value=n.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(),this.fsQuad.render(t))}setSize(t,e){this.edgesRT.setSize(t,e),this.weightsRT.setSize(t,e),this.materialEdges.uniforms.resolution.value.set(1/t,1/e),this.materialWeights.uniforms.resolution.value.set(1/t,1/e),this.materialBlend.uniforms.resolution.value.set(1/t,1/e)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}};var ar={name:"SAOShader",defines:{NUM_SAMPLES:7,NUM_RINGS:4,DIFFUSE_TEXTURE:0,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new X(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new jt},cameraInverseProjectionMatrix:{value:new jt},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		#include <common>

		varying vec2 vUv;

		#if DIFFUSE_TEXTURE == 1
		uniform sampler2D tDiffuse;
		#endif

		uniform highp sampler2D tDepth;
		uniform highp sampler2D tNormal;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float scale;
		uniform float intensity;
		uniform float bias;
		uniform float kernelRadius;
		uniform float minResolution;
		uniform vec2 size;
		uniform float randomSeed;

		// RGBA depth

		#include <packing>

		vec4 getDefaultColor( const in vec2 screenPosition ) {
			#if DIFFUSE_TEXTURE == 1
			return texture2D( tDiffuse, vUv );
			#else
			return vec4( 1.0 );
			#endif
		}

		float getDepth( const in vec2 screenPosition ) {
			return texture2D( tDepth, screenPosition ).x;
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {
			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];
			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );
			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;
		}

		vec3 getViewNormal( const in vec3 viewPosition, const in vec2 screenPosition ) {
			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );
		}

		float scaleDividedByCameraFar;
		float minResolutionMultipliedByCameraFar;

		float getOcclusion( const in vec3 centerViewPosition, const in vec3 centerViewNormal, const in vec3 sampleViewPosition ) {
			vec3 viewDelta = sampleViewPosition - centerViewPosition;
			float viewDistance = length( viewDelta );
			float scaledScreenDistance = scaleDividedByCameraFar * viewDistance;

			return max(0.0, (dot(centerViewNormal, viewDelta) - minResolutionMultipliedByCameraFar) / scaledScreenDistance - bias) / (1.0 + pow2( scaledScreenDistance ) );
		}

		// moving costly divides into consts
		const float ANGLE_STEP = PI2 * float( NUM_RINGS ) / float( NUM_SAMPLES );
		const float INV_NUM_SAMPLES = 1.0 / float( NUM_SAMPLES );

		float getAmbientOcclusion( const in vec3 centerViewPosition ) {
			// precompute some variables require in getOcclusion.
			scaleDividedByCameraFar = scale / cameraFar;
			minResolutionMultipliedByCameraFar = minResolution * cameraFar;
			vec3 centerViewNormal = getViewNormal( centerViewPosition, vUv );

			// jsfiddle that shows sample pattern: https://jsfiddle.net/a16ff1p7/
			float angle = rand( vUv + randomSeed ) * PI2;
			vec2 radius = vec2( kernelRadius * INV_NUM_SAMPLES ) / size;
			vec2 radiusStep = radius;

			float occlusionSum = 0.0;
			float weightSum = 0.0;

			for( int i = 0; i < NUM_SAMPLES; i ++ ) {
				vec2 sampleUv = vUv + vec2( cos( angle ), sin( angle ) ) * radius;
				radius += radiusStep;
				angle += ANGLE_STEP;

				float sampleDepth = getDepth( sampleUv );
				if( sampleDepth >= ( 1.0 - EPSILON ) ) {
					continue;
				}

				float sampleViewZ = getViewZ( sampleDepth );
				vec3 sampleViewPosition = getViewPosition( sampleUv, sampleDepth, sampleViewZ );
				occlusionSum += getOcclusion( centerViewPosition, centerViewNormal, sampleViewPosition );
				weightSum += 1.0;
			}

			if( weightSum == 0.0 ) discard;

			return occlusionSum * ( intensity / weightSum );
		}

		void main() {
			float centerDepth = getDepth( vUv );
			if( centerDepth >= ( 1.0 - EPSILON ) ) {
				discard;
			}

			float centerViewZ = getViewZ( centerDepth );
			vec3 viewPosition = getViewPosition( vUv, centerDepth, centerViewZ );

			float ambientOcclusion = getAmbientOcclusion( viewPosition );

			gl_FragColor = getDefaultColor( vUv );
			gl_FragColor.xyz *=  1.0 - ambientOcclusion;
		}`};var ei={name:"DepthLimitedBlurShader",defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new X(512,512)},sampleUvOffsets:{value:[new X(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

		#include <common>

		uniform vec2 size;

		varying vec2 vUv;
		varying vec2 vInvSize;

		void main() {
			vUv = uv;
			vInvSize = 1.0 / size;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		#include <common>
		#include <packing>

		uniform sampler2D tDiffuse;
		uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform float depthCutoff;

		uniform vec2 sampleUvOffsets[ KERNEL_RADIUS + 1 ];
		uniform float sampleWeights[ KERNEL_RADIUS + 1 ];

		varying vec2 vUv;
		varying vec2 vInvSize;

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}

		void main() {
			float depth = getDepth( vUv );
			if( depth >= ( 1.0 - EPSILON ) ) {
				discard;
			}

			float centerViewZ = -getViewZ( depth );
			bool rBreak = false, lBreak = false;

			float weightSum = sampleWeights[0];
			vec4 diffuseSum = texture2D( tDiffuse, vUv ) * weightSum;

			for( int i = 1; i <= KERNEL_RADIUS; i ++ ) {

				float sampleWeight = sampleWeights[i];
				vec2 sampleUvOffset = sampleUvOffsets[i] * vInvSize;

				vec2 sampleUv = vUv + sampleUvOffset;
				float viewZ = -getViewZ( getDepth( sampleUv ) );

				if( abs( viewZ - centerViewZ ) > depthCutoff ) rBreak = true;

				if( ! rBreak ) {
					diffuseSum += texture2D( tDiffuse, sampleUv ) * sampleWeight;
					weightSum += sampleWeight;
				}

				sampleUv = vUv - sampleUvOffset;
				viewZ = -getViewZ( getDepth( sampleUv ) );

				if( abs( viewZ - centerViewZ ) > depthCutoff ) lBreak = true;

				if( ! lBreak ) {
					diffuseSum += texture2D( tDiffuse, sampleUv ) * sampleWeight;
					weightSum += sampleWeight;
				}

			}

			gl_FragColor = diffuseSum / weightSum;
		}`},or={createSampleWeights:function(r,t){let e=[];for(let n=0;n<=r;n++)e.push(Cx(n,t));return e},createSampleOffsets:function(r,t){let e=[];for(let n=0;n<=r;n++)e.push(t.clone().multiplyScalar(n));return e},configure:function(r,t,e,n){r.defines.KERNEL_RADIUS=t,r.uniforms.sampleUvOffsets.value=or.createSampleOffsets(t,n),r.uniforms.sampleWeights.value=or.createSampleWeights(t,e),r.needsUpdate=!0}};function Cx(r,t){return Math.exp(-(r*r)/(2*(t*t)))/(Math.sqrt(2*Math.PI)*t)}var lr=class r extends Je{constructor(t,e,n=new X(256,256)){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.originalClearColor=new It,this._oldClearColor=new It,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new X(n.x,n.y),this.saoRenderTarget=new ye(this.resolution.x,this.resolution.y,{type:Ae}),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone();let i=new _s;i.format=pi,i.type=fi,this.normalRenderTarget=new ye(this.resolution.x,this.resolution.y,{minFilter:Pe,magFilter:Pe,type:Ae,depthTexture:i}),this.normalMaterial=new wa,this.normalMaterial.blending=ke,this.saoMaterial=new re({defines:Object.assign({},ar.defines),fragmentShader:ar.fragmentShader,vertexShader:ar.vertexShader,uniforms:Ke.clone(ar.uniforms)}),this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=i,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=ke,this.vBlurMaterial=new re({uniforms:Ke.clone(ei.uniforms),defines:Object.assign({},ei.defines),vertexShader:ei.vertexShader,fragmentShader:ei.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=0,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=i,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=ke,this.hBlurMaterial=new re({uniforms:Ke.clone(ei.uniforms),defines:Object.assign({},ei.defines),vertexShader:ei.vertexShader,fragmentShader:ei.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=0,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=i,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=ke,this.materialCopy=new re({uniforms:Ke.clone(_i.uniforms),vertexShader:_i.vertexShader,fragmentShader:_i.fragmentShader,blending:ke}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=Ca,this.materialCopy.blendSrc=Lc,this.materialCopy.blendDst=Pa,this.materialCopy.blendEquation=Nn,this.materialCopy.blendSrcAlpha=Ic,this.materialCopy.blendDstAlpha=Pa,this.materialCopy.blendEquationAlpha=Nn,this.fsQuad=new En(null)}render(t,e,n){this.renderToScreen&&(this.materialCopy.blending=ke,this.materialCopy.uniforms.tDiffuse.value=n.texture,this.materialCopy.needsUpdate=!0,this.renderPass(t,this.materialCopy,null)),t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let i=t.autoClear;t.autoClear=!1,this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;let s=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=s,this.hBlurMaterial.uniforms.depthCutoff.value=s,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(or.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new X(0,1)),or.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new X(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(t,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(t,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(t,this.hBlurMaterial,this.saoRenderTarget,16777215,1));let a=this.materialCopy;this.params.output===r.OUTPUT.Normal?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===r.OUTPUT.Default?a.blending=Ca:a.blending=ke,this.renderPass(t,a,this.renderToScreen?null:n),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=i}renderPass(t,e,n,i,s){t.getClearColor(this.originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(s||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,i,s){t.getClearColor(this.originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,s=e.clearAlpha||s,i!=null&&(t.setClearColor(i),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.saoRenderTarget.setSize(t,e),this.blurIntermediateRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.saoMaterial.uniforms.size.value.set(t,e),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(t,e),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(t,e),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}};lr.OUTPUT={Default:0,SAO:1,Normal:2};var gd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ka=class extends Je{constructor(){super();let t=gd;this.uniforms=Ke.clone(t.uniforms),this.material=new Sa({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new En(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Dc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Uc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===nr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Oc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Bc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Px={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:1.05},uGrain:{value:.055},uAberration:{value:.0016},uExposure:{value:1},uSat:{value:1.06},uContrast:{value:1.07},uLift:{value:new A(.012,.014,.024)},uGain:{value:new A(1.02,.99,.95)},uDamage:{value:0},uFlash:{value:0},uResolution:{value:new X(1,1)}},vertexShader:`
    varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
  `,fragmentShader:`
    precision highp float;
    uniform sampler2D tDiffuse;
    uniform float uTime, uVignette, uGrain, uAberration, uExposure, uSat, uContrast, uDamage, uFlash;
    uniform vec3 uLift, uGain;
    uniform vec2 uResolution;
    varying vec2 vUv;

    float hash(vec2 p){ p = fract(p*vec2(443.897,441.423)); p += dot(p,p+19.19); return fract(p.x*p.y); }

    void main(){
      vec2 uv = vUv;
      vec2 c = uv - 0.5;
      float r2 = dot(c,c);

      // barrel-ish chromatic aberration, stronger toward the edges
      float ab = uAberration * (1.0 + r2*3.0) * (1.0 + uDamage*2.5);
      vec3 col;
      col.r = texture2D(tDiffuse, uv + c*ab).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - c*ab).b;

      col *= uExposure;

      // lift / gain / contrast / saturation grade
      col = col*uGain + uLift;
      col = (col - 0.5)*uContrast + 0.5;
      float l = dot(col, vec3(0.2126,0.7152,0.0722));
      col = mix(vec3(l), col, uSat);

      // damage: desaturate + red pulse at the edges
      if(uDamage > 0.001){
        float edge = smoothstep(0.05, 0.42, r2);
        col = mix(col, vec3(dot(col,vec3(0.33)))*vec3(1.25,0.55,0.5), uDamage*0.55);
        col += vec3(0.45,0.02,0.02)*uDamage*edge*(0.65+0.35*sin(uTime*7.0));
      }
      col += vec3(1.0,0.92,0.8)*uFlash;

      // film grain (animated, luminance weighted)
      float g = hash(uv*uResolution + fract(uTime)*vec2(37.0,17.0));
      col += (g-0.5)*uGrain*(1.2-l*0.6);

      // vignette
      float vig = 1.0 - uVignette*r2*(0.85 + 0.35*r2);
      col *= clamp(vig, 0.0, 1.0);

      // subtle scanline-free bloom-safe clamp
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }
  `};function vd(){return new re({side:tn,depthWrite:!1,uniforms:{uSunDir:{value:new A(.4,.28,-.85).normalize()},uTime:{value:0},uHorizon:{value:new It(4864560)},uZenith:{value:new It(1318958)},uSunCol:{value:new It(16756848)},uCloud:{value:.62}},vertexShader:`
      varying vec3 vDir;
      void main(){
        vDir = normalize((modelMatrix*vec4(position,1.0)).xyz - cameraPosition);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,fragmentShader:`
      precision highp float;
      varying vec3 vDir;
      uniform vec3 uSunDir, uHorizon, uZenith, uSunCol;
      uniform float uTime, uCloud;

      float h13(vec3 p){ p = fract(p*0.1031); p += dot(p,p.yzx+33.33); return fract((p.x+p.y)*p.z); }
      float n3(vec3 p){
        vec3 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
        float a=h13(i), b=h13(i+vec3(1,0,0)), c=h13(i+vec3(0,1,0)), d=h13(i+vec3(1,1,0));
        float e=h13(i+vec3(0,0,1)), g=h13(i+vec3(1,0,1)), h=h13(i+vec3(0,1,1)), k=h13(i+vec3(1,1,1));
        return mix(mix(mix(a,b,f.x),mix(c,d,f.x),f.y), mix(mix(e,g,f.x),mix(h,k,f.x),f.y), f.z);
      }
      float fb(vec3 p){ float s=0.0,a=0.5; for(int i=0;i<6;i++){ s+=a*n3(p); a*=0.5; p*=2.02; } return s; }

      void main(){
        vec3 d = normalize(vDir);
        float up = clamp(d.y*0.5+0.5, 0.0, 1.0);
        float t = pow(max(d.y, 0.0), 0.45);
        vec3 sky = mix(uHorizon, uZenith, t);

        // heavy overcast cloud layer projected on the dome
        vec3 cp = d/max(abs(d.y)+0.12, 0.12);
        float cl = fb(cp*0.55 + vec3(uTime*0.006, 0.0, uTime*0.004));
        float cl2 = fb(cp*1.7 + vec3(uTime*0.012, 3.0, 0.0));
        float cover = smoothstep(0.42, 0.86, cl*0.75+cl2*0.35) * smoothstep(-0.05, 0.30, d.y) * uCloud;
        vec3 cloudLit = mix(vec3(0.16,0.16,0.19), vec3(0.62,0.55,0.50), pow(cl,1.6));
        sky = mix(sky, cloudLit, cover);

        // sun disc + broad glow through the murk
        float sd = max(dot(d, normalize(uSunDir)), 0.0);
        sky += uSunCol * pow(sd, 320.0) * 6.0 * (1.0-cover*0.85);
        sky += uSunCol * pow(sd, 6.0) * 0.30 * (1.0-cover*0.5);
        sky += uSunCol * pow(sd, 1.6) * 0.06;

        // ground haze band below the horizon
        sky = mix(sky, uHorizon*0.32, smoothstep(0.0, -0.28, d.y));

        // faint stars where the cloud breaks
        float st = step(0.9975, h13(floor(d*420.0)));
        sky += vec3(st)*0.5*smoothstep(0.25,0.7,d.y)*(1.0-cover);

        gl_FragColor = vec4(sky, 1.0);
      }
    `})}var Ha=class{constructor(t){this.renderer=new ca({canvas:t,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!0,alpha:!1,preserveDrawingBuffer:!1});let e=this.renderer;e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=Pc,e.shadowMap.autoUpdate=!0,e.toneMapping=nr,e.toneMappingExposure=1,e.outputColorSpace=Xe,e.info.autoReset=!0,this.clock=new yi,this.quality="high",this.composerEnabled=!0,this.renderScale=1,this.fpsRoll=60,this.scaleHold=0}setup(t,e){this.scene=t,this.camera=e;let n=window.innerWidth,i=window.innerHeight,s=new ye(n,i,{type:Ae,format:sn,colorSpace:gn,samples:0});this.composer=new Oa(this.renderer,s),this.composer.setSize(n,i),this.renderPass=new Ba(t,e),this.composer.addPass(this.renderPass),this.sao=new lr(t,e),this.sao.params.saoBias=.35,this.sao.params.saoIntensity=.028,this.sao.params.saoScale=1.1,this.sao.params.saoKernelRadius=18,this.sao.params.saoMinResolution=0,this.sao.params.saoBlur=!0,this.sao.params.saoBlurRadius=6,this.sao.params.saoBlurStdDev=3,this.sao.params.saoBlurDepthCutoff=.012,this.composer.addPass(this.sao),this.bloom=new Ps(new X(n,i),.55,.55,.82),this.composer.addPass(this.bloom),this.grade=new Cs(Px),this.grade.uniforms.uResolution.value.set(n,i),this.composer.addPass(this.grade),this.output=new ka,this.composer.addPass(this.output),this.smaa=new Fa(n,i),this.composer.addPass(this.smaa),this.applyShadowSettings(),window.addEventListener("resize",()=>this.resize())}applyShadowSettings(){let t=this.quality,e=this.renderer;if(!e.shadowMap.enabled)return;let n=t==="low"?1024:t==="medium"?1536:2048;e.shadowMap.needsUpdate=!0;let i=this.scene;i&&i.traverse(s=>{if(s.isDirectionalLight&&s.shadow){s.shadow.mapSize.set(n,n),s.shadow.map&&(s.shadow.map.dispose(),s.shadow.map=null);let a=t==="low"?42:t==="medium"?52:60;s.shadow.camera.left=-a,s.shadow.camera.right=a,s.shadow.camera.top=a,s.shadow.camera.bottom=-a,s.shadow.camera.updateProjectionMatrix()}})}resize(){let t=window.innerWidth,e=window.innerHeight,n=this.renderScale||1,i=Math.max(640,Math.round(t*n)),s=Math.max(360,Math.round(e*n));this.renderer.setPixelRatio(1),this.renderer.setSize(i,s,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px",this.camera&&(this.camera.aspect=t/e,this.camera.updateProjectionMatrix()),this.composer?.setSize(i,s),this.grade&&this.grade.uniforms.uResolution.value.set(i,s),this.smaa?.setSize(i,s),this.bloom&&this.bloom.setSize(i,s)}setQuality(t){this.quality=t;let e=this.renderer;t==="low"?(this.renderScale=Math.min(this.renderScale,.75),e.shadowMap.enabled=!0,this.sao&&(this.sao.enabled=!1),this.smaa&&(this.smaa.enabled=!1),this.bloom&&(this.bloom.enabled=!0,this.bloom.strength=.35)):t==="medium"?(this.renderScale=Math.min(this.renderScale||1,.9),e.shadowMap.enabled=!0,this.sao&&(this.sao.enabled=!1),this.smaa&&(this.smaa.enabled=!0),this.bloom&&(this.bloom.enabled=!0,this.bloom.strength=.5)):(this.renderScale=Math.min(this.renderScale||1,1),e.shadowMap.enabled=!0,this.sao&&(this.sao.enabled=!0),this.smaa&&(this.smaa.enabled=!0),this.bloom&&(this.bloom.enabled=!0,this.bloom.strength=.55)),this.applyShadowSettings(),this.resize()}updateAdaptiveScale(t){if(t<=0||!isFinite(t))return;let e=1/Math.max(.001,t);if(this.fpsRoll=this.fpsRoll*.92+e*.08,this.scaleHold>0){this.scaleHold-=t;return}let n=this.quality;if(n==="low")return;let i=n==="medium"?.9:1,s=.6;this.fpsRoll<48&&this.renderScale>s?(this.renderScale=Math.max(s,this.renderScale-.05),this.scaleHold=1.2,this.resize()):this.fpsRoll>62&&this.renderScale<i&&(this.renderScale=Math.min(i,this.renderScale+.04),this.scaleHold=2,this.resize())}render(t,e){this.grade&&(this.grade.uniforms.uTime.value=e),this.updateAdaptiveScale(t),this.composerEnabled&&this.composer?this.composer.render(t):this.renderer.render(this.scene,this.camera)}};var Xa=-22,Qc=class{constructor(t,e,n=0,i="wall"){this.c=t.clone(),this.h=e.clone(),this.yaw=n,this.tag=i,this.cos=Math.cos(-n),this.sin=Math.sin(-n);let s=Math.abs(this.h.x*Math.cos(n))+Math.abs(this.h.z*Math.sin(n)),a=Math.abs(this.h.x*Math.sin(n))+Math.abs(this.h.z*Math.cos(n));this.aabbMin=new A(this.c.x-s,this.c.y-this.h.y,this.c.z-a),this.aabbMax=new A(this.c.x+s,this.c.y+this.h.y,this.c.z+a)}toLocal(t,e){let n=t.x-this.c.x,i=t.z-this.c.z;return e.set(n*this.cos-i*this.sin,t.y-this.c.y,n*this.sin+i*this.cos),e}toWorldDir(t,e){let n=Math.cos(this.yaw),i=Math.sin(this.yaw);return e.set(t.x*n-t.z*i,t.y,t.x*i+t.z*n),e}closest(t,e){let n=this.toLocal(t,yn);De.set(Math.max(-this.h.x,Math.min(this.h.x,n.x)),Math.max(-this.h.y,Math.min(this.h.y,n.y)),Math.max(-this.h.z,Math.min(this.h.z,n.z)));let i=Math.cos(this.yaw),s=Math.sin(this.yaw);return e.set(this.c.x+De.x*i-De.z*s,this.c.y+De.y,this.c.z+De.x*s+De.z*i),e}},yn=new A,De=new A,cr=new A,Va=new A,Ga=new A,Wa=class{constructor(){this.colliders=[],this.grid=new Map,this.cell=8}add(t){this.colliders.push(t);let e=this.cell,n=Math.floor(t.aabbMin.x/e),i=Math.floor(t.aabbMax.x/e),s=Math.floor(t.aabbMin.z/e),a=Math.floor(t.aabbMax.z/e);for(let o=n;o<=i;o++)for(let l=s;l<=a;l++){let c=o+","+l,h=this.grid.get(c);h||(h=[],this.grid.set(c,h)),h.push(t)}return t}addBox(t,e,n,i,s,a,o=0,l="wall"){return this.add(new Qc(new A(t,e,n),new A(i,s,a),o,l))}query(t,e,n){n.length=0;let i=this.cell,s=Math.floor(t.x/i),a=Math.floor(e.x/i),o=Math.floor(t.z/i),l=Math.floor(e.z/i),c=Lx;c.clear();for(let h=s;h<=a;h++)for(let u=o;u<=l;u++){let d=this.grid.get(h+","+u);if(d)for(let f=0;f<d.length;f++){let g=d[f];c.has(g)||(c.add(g),!(g.aabbMax.x<t.x||g.aabbMin.x>e.x)&&(g.aabbMax.y<t.y||g.aabbMin.y>e.y||g.aabbMax.z<t.z||g.aabbMin.z>e.z||n.push(g)))}}return n}resolveCapsule(t,e,n,i=3){let s={grounded:!1,groundY:-1e9,normal:new A(0,1,0),hit:!1,ceiling:!1},a=Va.set(t.x-e-.1,t.y-.1,t.z-e-.1),o=Ga.set(t.x+e+.1,t.y+n+.1,t.z+e+.1),l=this.query(a,o,$c);if(!l.length)return s;let c=Dx.set(t.x,t.y+e,t.z),h=Ux.set(t.x,t.y+n-e,t.z);for(let u=0;u<i;u++){let d=!1;for(let f=0;f<l.length;f++){let g=l[f];for(let v=0;v<=2;v++){let p=v*.5;cr.lerpVectors(c,h,p);let m=g.closest(cr,yn),y=De.subVectors(cr,m),M=y.length();if(M>=e)continue;if(M<1e-6){let T=g.toLocal(cr,yn),_=g.h.x-Math.abs(T.x),w=g.h.y-Math.abs(T.y),C=g.h.z-Math.abs(T.z);_<w&&_<C?De.set(Math.sign(T.x)||1,0,0):w<C?De.set(0,Math.sign(T.y)||1,0):De.set(0,0,Math.sign(T.z)||1),g.toWorldDir(De.clone(),De),M=1e-4}y.copy(De).multiplyScalar(1/Math.max(M,1e-6));let x=e-M;s.hit=!0,y.y>.5?(s.grounded=!0,s.groundY=Math.max(s.groundY,g.aabbMax.y),s.normal.copy(y),t.y+=x):y.y<-.6?(s.ceiling=!0,t.y-=x):(t.x+=y.x*x,t.z+=y.z*x),c.set(t.x,t.y+e,t.z),h.set(t.x,t.y+n-e,t.z),d=!0}}if(!d)break}return s}groundAt(t,e,n,i=3,s=.2){let a=Va.set(t-s,e-i,n-s),o=Ga.set(t+s,e+.4,n+s),l=this.query(a,o,$c),c=-1/0;for(let h of l){if(h.tag==="nowalk")continue;let u=h.toLocal(yn.set(t,e,n),De);if(Math.abs(u.x)>h.h.x+s||Math.abs(u.z)>h.h.z+s)continue;let d=h.aabbMax.y;d<=e+.4&&d>c&&(c=d)}return c}raycast(t,e,n=200){let i=t.x+e.x*n,s=t.y+e.y*n,a=t.z+e.z*n,o=Va.set((t.x<i?t.x:i)-.5,(t.y<s?t.y:s)-.5,(t.z<a?t.z:a)-.5),l=Ga.set((t.x>i?t.x:i)+.5,(t.y>s?t.y:s)+.5,(t.z>a?t.z:a)+.5),c=this.query(o,l,Ix),h=n,u=null,d=null;for(let f=0;f<c.length;f++){let g=c[f],v=g.cos,p=g.sin,m=t.x-g.c.x,y=t.z-g.c.z,M=m*v-y*p,x=m*p+y*v,T=t.y-g.c.y,_=e.x*v-e.z*p,w=e.x*p+e.z*v,C=e.y,D=0,b=h,S=-1,U=1,z=!0,k=Math.abs(_),j=Math.abs(C),F=Math.abs(w),tt=g.h.x,G=g.h.y,dt=g.h.z;if(k<1e-8)Math.abs(M)>tt&&(z=!1);else{let lt=1/_,it=(-tt-M)*lt,Nt=(tt-M)*lt,Zt=-1;if(it>Nt){let K=it;it=Nt,Nt=K,Zt=1}it>D&&(D=it,S=0,U=Zt),Nt<b&&(b=Nt),D>b&&(z=!1)}if(z)if(j<1e-8)Math.abs(T)>G&&(z=!1);else{let lt=1/C,it=(-G-T)*lt,Nt=(G-T)*lt,Zt=-1;if(it>Nt){let K=it;it=Nt,Nt=K,Zt=1}it>D&&(D=it,S=1,U=Zt),Nt<b&&(b=Nt),D>b&&(z=!1)}if(z)if(F<1e-8)Math.abs(x)>dt&&(z=!1);else{let lt=1/w,it=(-dt-x)*lt,Nt=(dt-x)*lt,Zt=-1;if(it>Nt){let K=it;it=Nt,Nt=K,Zt=1}it>D&&(D=it,S=2,U=Zt),Nt<b&&(b=Nt),D>b&&(z=!1)}!z||D<0||D>=h||S<0||(h=D,u=g,S===0?yn.set(U,0,0):S===1?yn.set(0,U,0):yn.set(0,0,U),d=yn.clone(),g.toWorldDir(d,d))}return u?{t:h,point:t.clone().addScaledVector(e,h),normal:d.normalize(),collider:u}:null}visible(t,e){let n=yn.subVectors(e,t),i=n.length();return i<.01?!0:(n.multiplyScalar(1/i),!this.raycast(t,n,i-.15))}},$c=[],Ix=[],Lx=new Set,Dx=new A,Ux=new A,th=class{constructor(t,e,n,i=.09,s=1){this.p=new A(t,e,n),this.prev=this.p.clone(),this.acc=new A,this.r=i,this.invMass=s>0?1/s:0,this.pinned=!1,this.grounded=!1}addForce(t){this.acc.addScaledVector(t,this.invMass)}addImpulse(t){this.prev.addScaledVector(t,-1)}get vel(){return this.p.clone().sub(this.prev)}},eh=class{constructor(t,e,n=null,i=1){this.a=t,this.b=e,this.len=n??t.p.distanceTo(e.p),this.stiff=i}solve(){let t=this.a,e=this.b,n=yn.subVectors(e.p,t.p),i=n.length();if(i<1e-8)return;let s=(i-this.len)/i,a=t.invMass+e.invMass;if(a<=0)return;let o=this.stiff*s/a;t.p.addScaledVector(n,o*t.invMass),e.p.addScaledVector(n,-o*e.invMass)}},nh=class{constructor(t,e,n,i,s=.8){this.a=t,this.b=e,this.min=n,this.max=i,this.stiff=s}solve(){let t=this.a,e=this.b,n=yn.subVectors(e.p,t.p),i=n.length();if(i<1e-8)return;let s=null;if(i<this.min?s=this.min:i>this.max&&(s=this.max),s===null)return;let a=(i-s)/i,o=t.invMass+e.invMass;if(o<=0)return;let l=this.stiff*a/o;t.p.addScaledVector(n,l*t.invMass),e.p.addScaledVector(n,-l*e.invMass)}},kn=class{constructor(t){this.world=t,this.parts=[],this.cons=[],this.damping=.986,this.friction=.72,this.restitution=.24,this.sleeping=!1,this.energy=1}particle(t,e,n,i,s){let a=new th(t,e,n,i,s);return this.parts.push(a),a}link(t,e,n,i){let s=new eh(t,e,n,i);return this.cons.push(s),s}range(t,e,n,i,s){let a=new nh(t,e,n,i,s);return this.cons.push(a),a}step(t,e=4){if(this.sleeping)return;let n=cr.set(0,Xa,0),i=0,s=this.parts;for(let a=0;a<s.length;a++){let o=s[a];if(o.pinned){o.prev.copy(o.p),o.acc.set(0,0,0);continue}o.acc.add(n);let l=(o.p.x-o.prev.x)*this.damping,c=(o.p.y-o.prev.y)*this.damping,h=(o.p.z-o.prev.z)*this.damping;o.prev.copy(o.p),o.p.x+=l+o.acc.x*t*t,o.p.y+=c+o.acc.y*t*t,o.p.z+=h+o.acc.z*t*t,o.acc.set(0,0,0),i=Math.max(i,Math.abs(l)+Math.abs(c)+Math.abs(h))}for(let a=0;a<e;a++){let o=this.cons;for(let l=0;l<o.length;l++)o[l].solve();a===e-1&&i>.02&&this.selfCollide(),this.collideWorld()}this.energy=this.energy*.9+i*.1,this.energy<.0012&&(this.sleeping=!0)}selfCollide(){let t=this.parts.length;if(!(t<4))for(let e=0;e<t;e++){let n=this.parts[e];for(let i=e+2;i<t;i++){let s=this.parts[i],a=s.p.x-n.p.x,o=s.p.y-n.p.y,l=s.p.z-n.p.z,c=a*a+o*o+l*l,h=(n.r+s.r)*.82;if(c>h*h||c<1e-12)continue;let u=Math.sqrt(c),d=1/u,f=(h-u)*.5*d;n.p.x-=a*f*.5,n.p.y-=o*f*.5,n.p.z-=l*f*.5,s.p.x+=a*f*.5,s.p.y+=o*f*.5,s.p.z+=l*f*.5}}}collideWorld(){let t=this.world;if(!t)return;let e=this.parts;for(let n=0;n<e.length;n++){let i=e[n];if(i.pinned)continue;let s=Va.set(i.p.x-i.r,i.p.y-i.r,i.p.z-i.r),a=Ga.set(i.p.x+i.r,i.p.y+i.r,i.p.z+i.r),o=t.query(s,a,$c);i.grounded=!1;for(let l=0;l<o.length;l++){let c=o[l],h=c.closest(i.p,yn),u=i.p.x-h.x,d=i.p.y-h.y,f=i.p.z-h.z,g=u*u+d*d+f*f;if(g>=i.r*i.r)continue;let v=Math.sqrt(g),p,m,y;if(v<1e-6){let j=c.toLocal(i.p,yn),F=c.h.x-Math.abs(j.x),tt=c.h.y-Math.abs(j.y),G=c.h.z-Math.abs(j.z);tt<=F&&tt<=G?(p=0,m=Math.sign(j.y)||1,y=0):F<G?(p=Math.sign(j.x)||1,m=0,y=0):(p=0,m=0,y=Math.sign(j.z)||1),De.set(p,m,y),c.toWorldDir(De.clone(),De),p=De.x,m=De.y,y=De.z,v=1e-4}else{let j=1/v;p=u*j,m=d*j,y=f*j}let M=i.r-v;i.p.x+=p*M,i.p.y+=m*M,i.p.z+=y*M;let x=i.p.x-i.prev.x,T=i.p.y-i.prev.y,_=i.p.z-i.prev.z,w=x*p+T*m+_*y,C=x-w*p,D=T-w*m,b=_-w*y,S=this.friction,U=C*S-w*p*this.restitution,z=D*S-w*m*this.restitution,k=b*S-w*y*this.restitution;i.prev.set(i.p.x-U,i.p.y-z,i.p.z-k),m>.5&&(i.grounded=!0)}}}wake(){this.sleeping=!1,this.energy=1}center(t=new A){t.set(0,0,0);for(let e of this.parts)t.add(e.p);return t.multiplyScalar(1/this.parts.length)}};var Nx={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],jump:["Space"],sprint:["ShiftLeft","ShiftRight"],crouch:["ControlLeft","KeyC"],reload:["KeyR"],use:["KeyE"],melee:["KeyV"],flashlight:["KeyF"],grenade:["KeyG"],weapon1:["Digit1"],weapon2:["Digit2"],weapon3:["Digit3"],weapon4:["Digit4"],weapon5:["Digit5"],pause:["Escape"],scoreboard:["Tab"]},qa=class{constructor(t){this.canvas=t,this.keys=new Set,this.pressedKeys=new Set,this.releasedKeys=new Set,this.mouse=[!1,!1,!1],this.mousePressed=[!1,!1,!1],this.mouseReleased=[!1,!1,!1],this.dx=0,this.dy=0,this.wheel=0,this.locked=!1,this.sensitivity=.0022,this.invertY=!1,this.binds=JSON.parse(JSON.stringify(Nx)),this.enabled=!0,this._onLockChange=null,this._bind()}_bind(){let t=s=>{s.code==="Tab"&&s.preventDefault(),s.code==="Space"&&s.preventDefault(),!s.repeat&&(this.keys.add(s.code),this.pressedKeys.add(s.code))},e=s=>{this.keys.delete(s.code),this.releasedKeys.add(s.code)};window.addEventListener("keydown",t),window.addEventListener("keyup",e),window.addEventListener("blur",()=>{this.keys.clear(),this.mouse=[!1,!1,!1]});let n=s=>{if(!this.locked)return;let a=s.button;a>2||(this.mouse[a]||(this.mousePressed[a]=!0),this.mouse[a]=!0,s.preventDefault())},i=s=>{let a=s.button;a>2||(this.mouse[a]=!1,this.mouseReleased[a]=!0)};window.addEventListener("mousedown",n),window.addEventListener("mouseup",i),window.addEventListener("contextmenu",s=>s.preventDefault()),window.addEventListener("wheel",s=>{this.locked&&(this.wheel+=Math.sign(s.deltaY),s.preventDefault())},{passive:!1}),document.addEventListener("mousemove",s=>{this.locked&&(this.dx+=s.movementX||0,this.dy+=s.movementY||0)}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.locked||(this.mouse=[!1,!1,!1],this.keys.clear()),this._onLockChange?.(this.locked)}),document.addEventListener("pointerlockerror",()=>{this.locked=!1})}onLockChange(t){this._onLockChange=t}requestLock(){if(this.locked)return;let t=this.canvas.requestPointerLock?.({unadjustedMovement:!0});t&&t.catch&&t.catch(()=>{try{this.canvas.requestPointerLock()}catch{}})}releaseLock(){document.pointerLockElement&&document.exitPointerLock()}isDown(t){let e=this.binds[t];if(!e)return!1;for(let n of e)if(this.keys.has(n))return!0;return!1}pressed(t){let e=this.binds[t];if(!e)return!1;for(let n of e)if(this.pressedKeys.has(n))return!0;return!1}keyPressed(t){return this.pressedKeys.has(t)}keyDown(t){return this.keys.has(t)}lookDelta(t){let e=this.sensitivity;return t.x=-this.dx*e,t.y=(this.invertY?this.dy:-this.dy)*e,this.dx=0,this.dy=0,t}get fire(){return this.mouse[0]}get firePressed(){return this.mousePressed[0]}get ads(){return this.mouse[2]}get adsPressed(){return this.mousePressed[2]}get meleeMouse(){return this.mousePressed[1]}endFrame(){this.pressedKeys.clear(),this.releasedKeys.clear(),this.mousePressed[0]=this.mousePressed[1]=this.mousePressed[2]=!1,this.mouseReleased[0]=this.mouseReleased[1]=this.mouseReleased[2]=!1,this.wheel=0}clear(){this.keys.clear(),this.mouse=[!1,!1,!1],this.dx=this.dy=0,this.endFrame()}};var Ya=class{constructor(){this.ready=!1,this.ctx=null,this.buffers={},this.masterVol=.85,this.sfxVol=1,this.musicVol=.55,this.listenerPos=null,this.listenerFwd=null,this.voices=0,this.maxVoices=34,this._lastPlay={}}init(){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t({latencyHint:"interactive",sampleRate:44100});let e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.masterVol,this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-12,this.comp.knee.value=12,this.comp.ratio.value=6,this.comp.attack.value=.004,this.comp.release.value=.16,this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.sfxVol,this.musicBus=e.createGain(),this.musicBus.gain.value=this.musicVol,this.conv=e.createConvolver(),this.conv.buffer=this._makeIR(1.9,.32),this.revSend=e.createGain(),this.revSend.gain.value=.3,this.revWet=e.createGain(),this.revWet.gain.value=.55,this.sfxBus.connect(this.comp),this.musicBus.connect(this.comp),this.revSend.connect(this.conv),this.conv.connect(this.revWet),this.revWet.connect(this.comp),this.comp.connect(this.master),this.master.connect(e.destination),this._bake(),this.ready=!0}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}setVolumes({master:t,sfx:e,music:n}){t!==void 0&&(this.masterVol=t,this.master&&(this.master.gain.value=t)),e!==void 0&&(this.sfxVol=e,this.sfxBus&&(this.sfxBus.gain.value=e)),n!==void 0&&(this.musicVol=n,this.musicBus&&(this.musicBus.gain.value=n))}_buf(t,e=1){return this.ctx.createBuffer(e,Math.max(1,Math.ceil(this.ctx.sampleRate*t)),this.ctx.sampleRate)}_makeIR(t,e){let n=this._buf(t,2),i=this.ctx.sampleRate;for(let s=0;s<2;s++){let a=n.getChannelData(s),o=0;for(let l=0;l<a.length;l++){let c=l/i,h=Math.pow(1-c/t,2.6),u=Math.random()*2-1;c<.09&&Math.random()>.15&&(u*=.25),o+=(u-o)*(1-e),a[l]=o*h*.9}}return n}_env(t,e,n,i,s=0,a=.2,o=2){let l=t/e;if(l<n)return Math.pow(l/n,.7);if(l<n+i){let h=(l-n)/i;return 1-(1-s)*Math.pow(h,1/o)}let c=Math.min(1,(l-n-i)/Math.max(a,1e-5));return s*Math.pow(1-c,o)}_lp(t,e){let n=0,i=Math.min(.999,e);for(let s=0;s<t.length;s++)n+=(t[s]-n)*i,t[s]=n}_hp(t,e){let n=0,i=0,s=Math.min(.999,e);for(let a=0;a<t.length;a++)n=s*(n+t[a]-i),i=t[a],t[a]=n}_norm(t,e=.95){let n=0;for(let s=0;s<t.length;s++)n=Math.max(n,Math.abs(t[s]));if(n<1e-6)return;let i=e/n;for(let s=0;s<t.length;s++)t[s]*=i}_gunshot(t,e,n,i,s,a){let o=this._buf(t),l=o.getChannelData(0),c=this.ctx.sampleRate,h=l.length,u=new Float32Array(h);for(let v=0;v<h;v++){let p=v/c,m=Math.exp(-p*260/i);u[v]=(Math.random()*2-1)*m}this._hp(u,a);let d=new Float32Array(h),f=0;for(let v=0;v<h;v++){let p=v/c,m=e*Math.exp(-p*26)+42;f+=2*Math.PI*m/c;let y=Math.exp(-p*30/n);d[v]=(Math.sin(f)*.75+(Math.random()*2-1)*.35)*y}this._lp(d,.3);let g=new Float32Array(h);for(let v=0;v<h;v++){let p=v/c;g[v]=(Math.random()*2-1)*Math.exp(-p*(7/s))*.55}this._lp(g,.09),this._hp(g,.006);for(let v=0;v<h;v++)l[v]=u[v]*1+d[v]*1.15+g[v]*.85;return this._norm(l,.98),o}_noiseBurst(t,{lp:e=.3,hp:n=0,decay:i=20,tone:s=0,toneAmt:a=0,wobble:o=0}={}){let l=this._buf(t),c=l.getChannelData(0),h=this.ctx.sampleRate,u=0;for(let d=0;d<c.length;d++){let f=d/h,g=Math.exp(-f*i),v=(Math.random()*2-1)*g;if(a>0){let p=s*(1+Math.sin(f*o*6.283)*.25);u+=2*Math.PI*p/h,v+=Math.sin(u)*g*a}c[d]=v}return e>0&&this._lp(c,e),n>0&&this._hp(c,n),this._norm(c,.92),l}_growl(t,e,n,i,s="moan"){let a=this._buf(t),o=a.getChannelData(0),l=this.ctx.sampleRate,c=o.length,h=0,u=0,d=n.map(f=>({f,y1:0,y2:0}));for(let f=0;f<c;f++){let g=f/l,v=g/t,p;s==="moan"?p=Math.sin(Math.PI*Math.pow(v,.8))*(.7+.3*Math.sin(g*5.2)):s==="roar"?p=Math.pow(1-v,.6)*Math.min(1,v*26):s==="die"?p=Math.pow(1-v,1.9)*Math.min(1,v*40):p=Math.exp(-v*4)*Math.min(1,v*60),u+=(Math.random()*2-1)*.06,u*=.94;let m=e*(1+u*i)*(s==="die"?1-v*.45:1+Math.sin(g*2.1)*.05);h+=2*Math.PI*m/l,h>Math.PI*2&&(h-=Math.PI*2);let y=h/Math.PI-1;y=y*y*y*1.6,y+=(Math.random()*2-1)*i*.55;let M=0;for(let x of d){let T=2*Math.PI*x.f/l,_=.965,w=y*(1-_)+2*_*Math.cos(T)*x.y1-_*_*x.y2;x.y2=x.y1,x.y1=w,M+=w}o[f]=M*p}return this._lp(o,.55),this._hp(o,.01),this._norm(o,.92),a}_impact(t,{decay:e,lp:n,hp:i,ring:s=0,ringF:a=900,noise:o=1}){let l=this._buf(t),c=l.getChannelData(0),h=this.ctx.sampleRate,u=0;for(let d=0;d<c.length;d++){let f=d/h,g=Math.exp(-f*e),v=(Math.random()*2-1)*g*o;s>0&&(u+=2*Math.PI*a*(1-f*.4)/h,v+=Math.sin(u)*Math.exp(-f*e*.28)*s),c[d]=v}return n&&this._lp(c,n),i&&this._hp(c,i),this._norm(c,.9),l}_squish(t,e){let n=this._buf(t),i=n.getChannelData(0),s=this.ctx.sampleRate,a=0;for(let o=0;o<i.length;o++){let l=o/s,c=Math.exp(-l*16)*(1+Math.sin(l*90)*.35),h=Math.random()*2-1;a+=(h-a)*(.09+.16*Math.abs(Math.sin(l*42))),i[o]=(a*1.5+h*.25)*c*e}return this._lp(i,.45),this._hp(i,.012),this._norm(i,.94),n}_tone(t,e,{decay:n=6,type:i="sine",vib:s=0,sweep:a=1}={}){let o=this._buf(t),l=o.getChannelData(0),c=this.ctx.sampleRate,h=e.map(()=>0);for(let u=0;u<l.length;u++){let d=u/c,f=Math.exp(-d*n),g=0;for(let v=0;v<e.length;v++){let p=e[v]*Math.pow(a,d)*(1+(s?Math.sin(d*s*6.283)*.012:0));h[v]+=2*Math.PI*p/c;let m;i==="square"?m=Math.sign(Math.sin(h[v]))*.6:i==="saw"?m=(h[v]/Math.PI%2-1)*.6:m=Math.sin(h[v]),g+=m/e.length}l[u]=g*f}return this._norm(l,.85),o}_mechanical(t,e){let n=this._buf(t),i=n.getChannelData(0),s=this.ctx.sampleRate;for(let a of e){let o=Math.floor(a.t*s),l=Math.floor((a.d||.05)*s),c=0;for(let h=0;h<l&&o+h<i.length;h++){let u=h/s,d=Math.exp(-u*(a.decay||120));c+=2*Math.PI*(a.f||1800)*(1-u*2)/s;let f=(Math.sin(c)*(a.tone??.5)+(Math.random()*2-1)*(a.noise??.8))*d*(a.g??1);i[o+h]+=f}}return this._hp(i,.05),this._lp(i,.75),this._norm(i,.9),n}_bake(){let t=this.buffers;t.rifle=this._gunshot(.72,190,1,1,1,.14),t.shotgun=this._gunshot(.95,130,1.55,1.5,1.35,.09),t.pistol=this._gunshot(.5,230,.8,.85,.75,.19),t.smg=this._gunshot(.34,240,.55,.55,.42,.24),t.sniper=this._gunshot(1.25,105,1.9,1.85,1.9,.07),t.dryfire=this._mechanical(.14,[{t:0,f:2600,decay:190,noise:.9,tone:.3,g:.7}]),t.reloadOut=this._mechanical(.42,[{t:0,f:1500,decay:90,g:.9},{t:.09,f:900,decay:60,g:.7,d:.09},{t:.24,f:620,decay:44,g:.55,d:.11}]),t.reloadIn=this._mechanical(.46,[{t:0,f:800,decay:70,g:.7,d:.08},{t:.16,f:1300,decay:100,g:.95},{t:.26,f:2100,decay:150,g:.8}]),t.reloadCharge=this._mechanical(.34,[{t:0,f:1100,decay:46,g:.75,d:.13},{t:.15,f:2400,decay:160,g:1}]),t.bolt=this._mechanical(.4,[{t:0,f:1250,decay:44,g:.8,d:.14},{t:.17,f:700,decay:40,g:.65,d:.12},{t:.29,f:2e3,decay:150,g:.85}]),t.switch=this._mechanical(.3,[{t:0,f:700,decay:60,g:.6,d:.1},{t:.14,f:1600,decay:110,g:.8}]),t.shellDrop=this._mechanical(.24,[{t:0,f:3200,decay:200,g:.5,tone:.75,noise:.4},{t:.07,f:2600,decay:210,g:.32,tone:.7,noise:.35},{t:.13,f:3e3,decay:230,g:.2,tone:.7,noise:.3}]),t.casing=t.shellDrop,t.zombieMoan=this._growl(1.55,96,[420,980,2350],.42,"moan"),t.zombieAttack=this._growl(.68,132,[560,1250,2600],.62,"roar"),t.zombieDie=this._growl(1.35,88,[380,900,2100],.55,"die"),t.zombieHit=this._growl(.34,150,[640,1500,2800],.7,"grunt"),t.flesh=this._squish(.34,1),t.headshot=(()=>{let n=this._buf(.55),i=n.getChannelData(0),s=this._squish(.55,1.2).getChannelData(0),a=this._impact(.55,{decay:90,hp:.16,ring:.35,ringF:1600}).getChannelData(0);for(let o=0;o<i.length;o++)i[o]=s[o]*.9+a[o]*.75;return this._norm(i,.97),n})(),t.gib=(()=>{let n=this._buf(.7),i=n.getChannelData(0),s=this._squish(.7,1.35).getChannelData(0),a=this._impact(.7,{decay:22,lp:.16}).getChannelData(0);for(let o=0;o<i.length;o++)i[o]=s[o]*1+a[o]*.6;return this._norm(i,.98),n})(),t.burst=(()=>{let n=this._buf(1.5),i=n.getChannelData(0),s=this.ctx.sampleRate,a=0;for(let l=0;l<i.length;l++){let c=l/s,h=Math.exp(-c*4.2);a+=2*Math.PI*(70*Math.exp(-c*6)+28)/s,i[l]=(Math.sin(a)*.8+(Math.random()*2-1)*.9)*h}this._lp(i,.22);let o=this._squish(Math.min(1.5,.6),1.4).getChannelData(0);for(let l=0;l<o.length;l++)i[l]+=o[l]*.7;return this._norm(i,.99),n})(),t.hitmark=this._tone(.07,[1650,2480],{decay:60,type:"sine"}),t.hitmarkHead=this._tone(.11,[2300,3450,4600],{decay:42,type:"sine"}),t.playerHurt=this._growl(.42,118,[520,1150,2400],.4,"grunt"),t.playerDie=this._growl(1.8,100,[430,980,2200],.45,"die"),t.heartbeat=(()=>{let e=this._buf(.85),n=e.getChannelData(0),i=this.ctx.sampleRate,s=(a,o)=>{let l=0;for(let c=0;c<.18*i;c++){let h=c/i;l+=2*Math.PI*(58*Math.exp(-h*12)+26)/i;let u=Math.floor(a*i)+c;u<n.length&&(n[u]+=Math.sin(l)*Math.exp(-h*16)*o)}};return s(0,1),s(.26,.62),this._norm(n,.9),e})(),t.heal=this._tone(.55,[520,780,1040],{decay:5.5,type:"sine",sweep:1.6}),t.pickup=this._tone(.3,[880,1320],{decay:11,type:"sine",sweep:1.9}),t.weaponPickup=this._mechanical(.45,[{t:0,f:900,decay:60,g:.75,d:.1},{t:.13,f:1500,decay:90,g:.85},{t:.24,f:2400,decay:130,g:.7}]),t.footDirt=this._noiseBurst(.2,{lp:.2,hp:.02,decay:34}),t.footConcrete=this._noiseBurst(.16,{lp:.45,hp:.1,decay:52}),t.footMetal=this._impact(.28,{decay:40,hp:.14,ring:.5,ringF:1400}),t.jump=this._noiseBurst(.16,{lp:.3,hp:.04,decay:40}),t.land=(()=>{let e=this._buf(.34),n=e.getChannelData(0),i=this.ctx.sampleRate,s=0;for(let a=0;a<n.length;a++){let o=a/i;s+=2*Math.PI*(95*Math.exp(-o*22)+40)/i,n[a]=(Math.sin(s)*.7+(Math.random()*2-1)*.6)*Math.exp(-o*17)}return this._lp(n,.28),this._norm(n,.9),e})(),t.uiClick=this._tone(.08,[1400,2100],{decay:50,type:"square"}),t.uiHover=this._tone(.05,[900],{decay:70,type:"sine"}),t.uiBack=this._tone(.12,[700,480],{decay:26,type:"square",sweep:.5}),t.waveStart=this._tone(1.35,[110,165,220],{decay:1.6,type:"saw",vib:4}),t.waveEnd=this._tone(1.5,[147,220,294,370],{decay:1.3,type:"sine"}),t.lastStand=this._tone(2.4,[82,98,123],{decay:.9,type:"saw",vib:6}),t.radio=(()=>{let n=this.ctx.sampleRate,i=this.ctx.createBuffer(1,Math.ceil(n*.22),n),s=i.getChannelData(0);for(let a=0;a<s.length;a++){let o=a/s.length,l=Math.sin(o*Math.PI*2*1800)*Math.exp(-o*22)*.5,c=(Math.random()*2-1)*(.18+.12*(1-o))*Math.exp(-o*9);s[a]=(l+c)*.5}return i})(),t.impactConcrete=this._impact(.24,{decay:66,lp:.55,hp:.06}),t.impactMetal=this._impact(.42,{decay:42,hp:.16,ring:.72,ringF:2400}),t.impactWood=this._impact(.24,{decay:58,lp:.34,hp:.05,ring:.22,ringF:480}),t.impactDirt=this._noiseBurst(.22,{lp:.16,decay:40}),t.impactGlass=(()=>{let n=this._buf(.6),i=n.getChannelData(0),s=this.ctx.sampleRate;for(let a=0;a<22;a++){let o=Math.floor(Math.random()*.35*s),l=2200+Math.random()*5200,c=0;for(let h=0;h<.13*s&&o+h<i.length;h++){let u=h/s;c+=2*Math.PI*l/s,i[o+h]+=Math.sin(c)*Math.exp(-u*46)*.28}}return this._hp(i,.28),this._norm(i,.9),n})(),t.grenade=(()=>{let n=this._buf(2.2),i=n.getChannelData(0),s=this.ctx.sampleRate,a=0;for(let o=0;o<i.length;o++){let l=o/s,c=Math.exp(-l*3);a+=2*Math.PI*(58*Math.exp(-l*8)+22)/s,i[o]=(Math.sin(a)*.9+(Math.random()*2-1)*1)*c}return this._lp(i,.3),this._norm(i,.99),n})(),t.grenadePin=this._mechanical(.18,[{t:0,f:3400,decay:210,tone:.7,noise:.4}]),t.wind=(()=>{let n=this._buf(8,2),i=this.ctx.sampleRate;for(let s=0;s<2;s++){let a=n.getChannelData(s),o=0,l=0;for(let h=0;h<a.length;h++){let u=h/i,d=Math.random()*2-1;o+=(d-o)*.02,l+=(o-l)*.035;let f=.45+.55*(.5+.5*Math.sin(u*.31+s)*Math.sin(u*.13));a[h]=l*9*f}let c=Math.floor(i*.5);for(let h=0;h<c;h++){let u=a.length-c+h,d=h/c;a[u]=a[u]*(1-d)+a[h]*d}this._norm(a,.55)}return n})(),t.ambience=(()=>{let n=this._buf(12,2),i=this.ctx.sampleRate;for(let s=0;s<2;s++){let a=n.getChannelData(s),o=0,l=0,c=0;for(let u=0;u<a.length;u++){let d=u/i;o+=2*Math.PI*(41.2+Math.sin(d*.07)*.6)/i,l+=2*Math.PI*(61.7+Math.sin(d*.05+1)*.9)/i,c+=2*Math.PI*27.5/i,a[u]=(Math.sin(o)*.35+Math.sin(l)*.22+Math.sin(c)*.3)*.5}for(let u=0;u<9;u++){let d=Math.floor(Math.random()*(a.length-i*2)),f=60+Math.random()*50,g=0;for(let v=0;v<i*1.8;v++){let p=v/i,m=Math.sin(Math.PI*(p/1.8))*.22;g+=2*Math.PI*f*(1+Math.sin(p*1.3)*.06)/i,a[d+v]+=Math.sin(g)*m}}let h=Math.floor(i*.8);for(let u=0;u<h;u++){let d=a.length-h+u,f=u/h;a[d]=a[d]*(1-f)+a[u]*f}this._norm(a,.42)}return n})()}setListener(t,e,n){if(!this.ctx)return;let i=this.ctx.listener,s=this.ctx.currentTime;i.positionX?(i.positionX.setTargetAtTime(t.x,s,.02),i.positionY.setTargetAtTime(t.y,s,.02),i.positionZ.setTargetAtTime(t.z,s,.02),i.forwardX.setTargetAtTime(e.x,s,.02),i.forwardY.setTargetAtTime(e.y,s,.02),i.forwardZ.setTargetAtTime(e.z,s,.02),i.upX.setTargetAtTime(n.x,s,.02),i.upY.setTargetAtTime(n.y,s,.02),i.upZ.setTargetAtTime(n.z,s,.02)):(i.setPosition(t.x,t.y,t.z),i.setOrientation(e.x,e.y,e.z,n.x,n.y,n.z))}play(t,e=null,n=1,i=1){if(!this.ready)return null;let s=this.buffers[t];if(!s||this.voices>this.maxVoices)return null;let a=this.ctx,o=a.currentTime,l=this._lastPlay[t]||0;if(o-l<.012)return null;this._lastPlay[t]=o;let c=a.createBufferSource();c.buffer=s,c.playbackRate.value=i*(.97+Math.random()*.06);let h=a.createGain();h.gain.value=Math.max(0,n);let u=h;if(e){let d=a.createPanner();d.panningModel="HRTF",d.distanceModel="inverse",d.refDistance=3.2,d.maxDistance=190,d.rolloffFactor=1.25,d.positionX?(d.positionX.value=e.x,d.positionY.value=e.y,d.positionZ.value=e.z):d.setPosition(e.x,e.y,e.z),h.connect(d),u=d;let f=a.createBiquadFilter();f.type="lowpass";let g=this.listenerPos?this.listenerPos.distanceTo(e):10;f.frequency.value=Math.max(700,19e3-g*190),d.connect(f),u=f}return c.connect(h),u.connect(this.sfxBus),u.connect(this.revSend),this.voices++,c.onended=()=>{this.voices--},c.start(),c}startAmbience(){if(!this.ready||this._ambStarted)return;this._ambStarted=!0;let t=this.ctx,e=(n,i)=>{let s=t.createBufferSource();s.buffer=this.buffers[n],s.loop=!0;let a=t.createGain();return a.gain.value=0,a.gain.setTargetAtTime(i,t.currentTime,2),s.connect(a),a.connect(this.musicBus),s.start(),{s,g:a}};this.ambWind=e("wind",.3),this.ambDrone=e("ambience",.42)}stopAmbience(){if(this._ambStarted){for(let t of[this.ambWind,this.ambDrone])if(t){t.g.gain.setTargetAtTime(0,this.ctx.currentTime,.4);try{t.s.stop(this.ctx.currentTime+1.2)}catch{}}this.ambWind=this.ambDrone=null,this._ambStarted=!1}}setTension(t){this.ambDrone&&this.ambDrone.g.gain.setTargetAtTime(.42+t*.55,this.ctx.currentTime,.6)}};var xd=`
#define PI 3.14159265359

float hash11(float p){ p = fract(p*0.1031); p *= p+33.33; p *= p+p; return fract(p); }
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx)*0.1031); p3 += dot(p3, p3.yzx+33.33); return fract((p3.x+p3.y)*p3.z); }
vec2  hash22(vec2 p){ vec3 p3 = fract(vec3(p.xyx)*vec3(0.1031,0.1030,0.0973)); p3 += dot(p3,p3.yzx+33.33); return fract((p3.xx+p3.yz)*p3.zy); }
vec3  hash33(vec3 p){ p = fract(p*vec3(0.1031,0.1030,0.0973)); p += dot(p,p.yxz+33.33); return fract((p.xxy+p.yxx)*p.zyx); }

// ---- value noise (tileable over 'per') ----
float vnoise(vec2 p, float per){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  vec2 w = vec2(per);
  vec2 a = mod(i, w), b = mod(i+vec2(1,0), w), c = mod(i+vec2(0,1), w), d = mod(i+vec2(1,1), w);
  float n00 = hash12(a), n10 = hash12(b), n01 = hash12(c), n11 = hash12(d);
  return mix(mix(n00,n10,u.x), mix(n01,n11,u.x), u.y);
}
float vnoise3(vec3 p){
  vec3 i = floor(p), f = fract(p);
  vec3 u = f*f*(3.0-2.0*f);
  float n000=hash33(i).x, n100=hash33(i+vec3(1,0,0)).x, n010=hash33(i+vec3(0,1,0)).x, n110=hash33(i+vec3(1,1,0)).x;
  float n001=hash33(i+vec3(0,0,1)).x, n101=hash33(i+vec3(1,0,1)).x, n011=hash33(i+vec3(0,1,1)).x, n111=hash33(i+vec3(1,1,1)).x;
  return mix(mix(mix(n000,n100,u.x),mix(n010,n110,u.x),u.y),
             mix(mix(n001,n101,u.x),mix(n011,n111,u.x),u.y), u.z);
}

float fbm(vec2 p, float per, int oct){
  float s=0.0, a=0.5, n=0.0, f=1.0;
  for(int i=0;i<8;i++){
    if(i>=oct) break;
    s += a*vnoise(p*f, per*f); n += a; a*=0.5; f*=2.0;
  }
  return s/n;
}
float fbm3(vec3 p, int oct){
  float s=0.0,a=0.5,n=0.0,f=1.0;
  for(int i=0;i<8;i++){ if(i>=oct) break; s += a*vnoise3(p*f); n+=a; a*=0.5; f*=2.0; }
  return s/n;
}
float ridged(vec2 p, float per, int oct){
  float s=0.0,a=0.5,n=0.0,f=1.0;
  for(int i=0;i<8;i++){
    if(i>=oct) break;
    float v = 1.0-abs(vnoise(p*f, per*f)*2.0-1.0);
    s += a*v*v; n+=a; a*=0.5; f*=2.0;
  }
  return s/n;
}
float turb(vec2 p, float per, int oct){
  float s=0.0,a=0.5,n=0.0,f=1.0;
  for(int i=0;i<8;i++){ if(i>=oct) break; s += a*abs(vnoise(p*f,per*f)*2.0-1.0); n+=a; a*=0.5; f*=2.0; }
  return s/n;
}

// worley \u2014 tileable on integer cell grid, uv in [0,1]
vec3 worley(vec2 uv, float cells){
  vec2 p = uv*cells;
  vec2 ip = floor(p), fp = fract(p);
  float f1=8.0, f2=8.0; vec2 idc=vec2(0);
  for(int y=-1;y<=1;y++) for(int x=-1;x<=1;x++){
    vec2 o = vec2(float(x), float(y));
    vec2 cid = mod(ip+o, vec2(cells));
    vec2 r = o + hash22(cid) - fp;
    float d = length(r);
    if(d<f1){ f2=f1; f1=d; idc=cid; } else if(d<f2) f2=d;
  }
  return vec3(f1, f2, hash12(idc));
}

vec2 warp(vec2 uv, float per, float amt){
  return uv + amt*vec2(fbm(uv*2.0+11.3, per, 4), fbm(uv*2.0+31.7, per, 4));
}

float box2(vec2 p, vec2 b){ vec2 d = abs(p)-b; return length(max(d,0.0)) + min(max(d.x,d.y),0.0); }
float sstep(float a, float b, float x){ return smoothstep(a,b,x); }
float lum(vec3 c){ return dot(c, vec3(0.2126,0.7152,0.0722)); }
vec3 srgb2lin(vec3 c){ return pow(c, vec3(2.2)); }

// stain / grime overlay driven by large scale noise & vertical gradient
float grime(vec2 uv, float per, float streak){
  float g = fbm(uv*3.0, per, 5);
  float s = fbm(vec2(uv.x*14.0, uv.y*1.2), per, 4);
  return clamp(g*0.7 + s*streak, 0.0, 1.0);
}
`;var Ox=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Bx=`
precision highp float;
varying vec2 vUv;
uniform float uTexel;
uniform int   uOut;      // 0 albedo+ao, 1 normal+height, 2 rough/metal/emis
uniform float uSeed;
uniform vec3  uTint;
uniform float uVar;
${xd}
`,zx=`
void main(){
  vec2 uv = vUv;
  if(uOut == 1){
    float e = uTexel;
    float hL = height(uv - vec2(e,0.0));
    float hR = height(uv + vec2(e,0.0));
    float hD = height(uv - vec2(0.0,e));
    float hU = height(uv + vec2(0.0,e));
    float h  = height(uv);
    // scale controls apparent depth
    float s = NORMAL_STRENGTH;
    vec3 n = normalize(vec3((hL-hR)*s, (hD-hU)*s, 2.0*e*8.0));
    gl_FragColor = vec4(n*0.5+0.5, h);
  } else if(uOut == 0){
    Surface s = surf(uv);
    gl_FragColor = vec4(s.albedo, s.ao);
  } else {
    Surface s = surf(uv);
    gl_FragColor = vec4(s.rough, s.metal, s.emis, s.alpha);
  }
}
`,Fx=`
struct Surface { vec3 albedo; float rough; float metal; float emis; float ao; float alpha; };
Surface mkSurf(){ Surface s; s.albedo=vec3(0.5); s.rough=0.8; s.metal=0.0; s.emis=0.0; s.ao=1.0; s.alpha=1.0; return s; }
`,Za=class{constructor(t){this.renderer=t,this.scene=new ti,this.camera=new vi(-1,1,1,-1,0,1),this.quad=new Ct(new Ve(2,2)),this.scene.add(this.quad),this.cache=new Map}bake(t,e,n={}){if(this.cache.has(t))return this.cache.get(t);let i=n.size||512,s=n.normalStrength??1,a=new re({vertexShader:Ox,fragmentShader:Bx+Fx+`#define NORMAL_STRENGTH ${s.toFixed(3)}
`+e+zx,uniforms:{uTexel:{value:1/i},uOut:{value:0},uSeed:{value:n.seed??0},uTint:{value:new A(...n.tint||[1,1,1])},uVar:{value:n.variance??1}},depthTest:!1,depthWrite:!1});this.quad.material=a;let o=g=>new ye(i,i,{format:sn,type:Pn,colorSpace:g?Xe:gn,minFilter:On,magFilter:nn,generateMipmaps:!0,wrapS:Bi,wrapT:Bi,depthBuffer:!1,stencilBuffer:!1}),l=this.renderer.getRenderTarget(),c=[o(!0),o(!1),o(!1)];for(let g=0;g<3;g++)a.uniforms.uOut.value=g,this.renderer.setRenderTarget(c[g]),this.renderer.clear(),this.renderer.render(this.scene,this.camera);this.renderer.setRenderTarget(l);let h=this.renderer.capabilities.getMaxAnisotropy(),u=n.repeat||[1,1],d=(g,v)=>{let p=g.texture;return p.wrapS=p.wrapT=Bi,p.repeat.set(u[0],u[1]),p.anisotropy=Math.min(n.aniso??8,h),p.colorSpace=v?Xe:gn,p.generateMipmaps=!0,p.minFilter=On,p.needsUpdate=!0,this.renderer.initRenderTarget?.(g),this.renderer.properties?.get(p),p},f={map:d(c[0],!0),normalMap:d(c[1],!1),ormMap:d(c[2],!1),_rts:c,size:i};for(let g of c)this.renderer.setRenderTarget(g),this.renderer.setRenderTarget(l);return this.cache.set(t,f),a.dispose(),f}material(t,e={}){let n=e.physical?vn:Ge,i=new n({map:t.map,normalMap:t.normalMap,roughnessMap:t.ormMap,metalnessMap:t.ormMap,aoMap:t.map,roughness:1,metalness:1,normalScale:new X(e.normalScale??1,e.normalScale??1),envMapIntensity:e.envMapIntensity??1,...e.extra});return i.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("float roughnessFactor = roughness;",`
          float roughnessFactor = roughness;
          #ifdef USE_ROUGHNESSMAP
            vec4 ormTex = texture2D( roughnessMap, vRoughnessMapUv );
            roughnessFactor *= ormTex.r;
          #endif
        `).replace("roughnessFactor *= texelRoughness.g;","").replace("float metalnessFactor = metalness;",`
          float metalnessFactor = metalness;
          #ifdef USE_METALNESSMAP
            vec4 ormTex2 = texture2D( metalnessMap, vMetalnessMapUv );
            metalnessFactor *= ormTex2.g;
          #endif
        `).replace("metalnessFactor *= texelMetalness.b;","").replace("#include <aomap_fragment>",`
          #ifdef USE_MAP
            float bakedAO = texture2D( map, vMapUv ).a;
            reflectedLight.indirectDiffuse *= bakedAO;
            reflectedLight.indirectSpecular *= mix(1.0, bakedAO, 0.6);
          #endif
        `),e.onBeforeCompile&&e.onBeforeCompile(s)},i.customProgramCacheKey=()=>"orm-"+(e.key||"0"),i.aoMap=null,i}};var ih=`
const float ROWS = 12.0;
const float COLS = 6.0;
const float MORTAR = 0.045;

vec4 brickCell(vec2 uv){
  float row = floor(uv.y*ROWS);
  float off = mod(row, 2.0)*0.5;
  vec2 p = vec2(uv.x*COLS + off, uv.y*ROWS);
  vec2 ip = vec2(floor(p.x), row);
  vec2 fp = fract(p);
  return vec4(fp, ip);
}

float brickMask(vec2 fp, float wobble){
  vec2 d = abs(fp-0.5);
  float mx = sstep(0.5-MORTAR-wobble, 0.5-MORTAR*0.35, d.x);
  float my = sstep(0.5-MORTAR*1.9-wobble, 0.5-MORTAR*0.7, d.y);
  return 1.0-max(mx,my);
}

float height(vec2 uv){
  vec4 c = brickCell(uv);
  vec2 fp = c.xy; vec2 ip = c.zw;
  float r = hash12(ip+uSeed);
  // brick face is slightly domed + eroded; chipped corners
  float wob = 0.006*(vnoise(uv*180.0, 180.0)-0.5);
  float m = brickMask(fp, wob);
  float face = 0.72 + 0.10*r;
  // erosion pits on the face
  float pit = fbm(uv*90.0 + ip*7.0, 90.0, 4);
  face -= 0.10*pow(pit, 2.0);
  // chipped edges
  float edge = 1.0 - smoothstep(0.0, 0.14, min(min(fp.x,1.0-fp.x), min(fp.y,1.0-fp.y)));
  face -= 0.14*edge*step(0.55, hash12(ip*3.1+uSeed+5.0));
  // mortar: rough, recessed, with sand grain
  float mortar = 0.34 + 0.10*fbm(uv*140.0, 140.0, 4) + 0.05*hash12(uv*512.0);
  float h = mix(mortar, face, m);
  // broad wall settling / bulge
  h += 0.05*fbm(uv*3.0, 3.0, 3);
  return clamp(h, 0.0, 1.0);
}

Surface surf(vec2 uv){
  Surface s = mkSurf();
  vec4 c = brickCell(uv);
  vec2 fp = c.xy, ip = c.zw;
  float r = hash12(ip+uSeed), r2 = hash12(ip*2.7+uSeed);
  float wob = 0.006*(vnoise(uv*180.0,180.0)-0.5);
  float m = brickMask(fp, wob);

  // per-brick clay colour variation (red / brown / burnt / pale)
  vec3 c1 = vec3(0.42,0.16,0.11);
  vec3 c2 = vec3(0.55,0.26,0.17);
  vec3 c3 = vec3(0.30,0.13,0.10);
  vec3 c4 = vec3(0.47,0.33,0.25);
  vec3 brick = mix(mix(c1,c2,r), mix(c3,c4,r2), sstep(0.45,0.85,r2));
  // fine clay speckle + fire-flash mottling
  float sp = fbm(uv*260.0+ip*13.0, 260.0, 4);
  brick *= 0.80 + 0.40*sp;
  brick *= 0.86 + 0.28*fbm(uv*24.0+ip, 24.0, 3);

  vec3 mortar = vec3(0.52,0.51,0.48)*(0.72+0.42*fbm(uv*150.0,150.0,4));
  mortar *= 0.9 + 0.2*hash12(uv*700.0);

  vec3 alb = mix(mortar, brick, m);

  // efflorescence (white salt bloom) low on the wall
  float eff = sstep(0.5,1.0, fbm(uv*8.0+3.3, 8.0, 4)) * (1.0-sstep(0.0,0.55,uv.y));
  alb = mix(alb, vec3(0.78,0.77,0.74), eff*0.5);
  // soot & water streaks
  float g = grime(uv, 1.0, 0.35);
  float streak = sstep(0.45,1.0, fbm(vec2(uv.x*26.0, uv.y*1.4)+7.7, 26.0, 4));
  alb *= mix(1.0, 0.42, g*0.65);
  alb = mix(alb, vec3(0.11,0.10,0.09), streak*0.35*(1.0-uv.y*0.4));
  // moss in the mortar near the bottom
  float moss = (1.0-m) * sstep(0.55,1.0, fbm(uv*18.0+21.0,18.0,4)) * (1.0-sstep(0.05,0.5,uv.y));
  alb = mix(alb, vec3(0.13,0.19,0.09), moss*0.7);

  s.albedo = srgb2lin(alb*uTint);
  s.rough = clamp(mix(0.94, 0.72, m) - 0.12*sp + 0.10*g, 0.35, 1.0);
  s.metal = 0.0;
  float ao = mix(0.42, 1.0, m);
  ao *= 1.0 - 0.35*(1.0-sstep(0.0,0.10, min(min(fp.x,1.0-fp.x),min(fp.y,1.0-fp.y))));
  s.ao = clamp(ao*(0.85+0.20*height(uv)), 0.25, 1.0);
  return s;
}
`,sh=`
float height(vec2 uv){
  float base = 0.55 + 0.16*fbm(uv*4.0, 4.0, 5);
  // aggregate stones showing through
  vec3 w = worley(uv, 26.0);
  float agg = 1.0-sstep(0.0,0.30,w.x);
  base += 0.10*agg*step(0.62, w.z);
  // pitting / air bubbles
  vec3 w2 = worley(uv*1.0+vec2(3.1,7.7), 60.0);
  base -= 0.14*(1.0-sstep(0.0,0.13,w2.x))*step(0.72,w2.z);
  // form-work board lines (horizontal seams every 1/4)
  float seam = abs(fract(uv.y*4.0)-0.5);
  base -= 0.10*(1.0-sstep(0.0,0.035,seam));
  // hairline cracks
  float cr = ridged(uv*6.0+uSeed, 6.0, 5);
  float crack = sstep(0.86, 0.995, cr);
  base -= 0.20*crack;
  // spall (broken chunks) at large scale
  float sp = sstep(0.72,0.95, fbm(uv*3.0+13.0,3.0,4));
  base -= 0.16*sp;
  base += 0.02*hash12(uv*900.0);
  return clamp(base,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float n = fbm(uv*5.0, 5.0, 5);
  vec3 col = mix(vec3(0.40,0.40,0.395), vec3(0.60,0.595,0.575), n);
  vec3 w = worley(uv, 26.0);
  float agg = (1.0-sstep(0.0,0.30,w.x))*step(0.62,w.z);
  col = mix(col, mix(vec3(0.34,0.32,0.30), vec3(0.55,0.50,0.44), w.z), agg*0.7);
  // rust bleed from rebar, dark water staining
  float rust = sstep(0.80,1.0, fbm(uv*7.0+41.0,7.0,4)) * sstep(0.25,0.9,fbm(vec2(uv.x*20.0,uv.y*1.1),20.0,3));
  col = mix(col, vec3(0.36,0.16,0.07), rust*0.75);
  float g = grime(uv,1.0,0.4);
  col *= mix(1.0, 0.5, g*0.7);
  float cr = sstep(0.86,0.995, ridged(uv*6.0+uSeed,6.0,5));
  col = mix(col, vec3(0.07,0.07,0.07), cr*0.8);
  float sp = sstep(0.72,0.95, fbm(uv*3.0+13.0,3.0,4));
  col = mix(col, vec3(0.30,0.28,0.26), sp*0.5);
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(0.90 - 0.20*agg + 0.08*g - 0.05*n, 0.45, 1.0);
  s.metal = 0.0;
  s.ao = clamp(0.55+0.55*height(uv) - 0.35*cr, 0.2, 1.0);
  return s;
}
`,yd=`
float height(vec2 uv){
  vec3 w = worley(uv, 46.0);
  float gravel = 1.0-sstep(0.0,0.42,w.x);
  float h = 0.5 + 0.16*gravel*(0.4+0.6*w.z);
  h += 0.06*fbm(uv*30.0, 30.0, 4);
  // potholes
  float ph = sstep(0.78,1.0, fbm(uv*2.5+9.0, 2.5, 4));
  h -= 0.26*ph;
  // tar repair seams
  float sm = ridged(uv*3.0+55.0, 3.0, 4);
  h += 0.06*sstep(0.88,1.0,sm);
  h += 0.02*hash12(uv*1200.0);
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  vec3 w = worley(uv, 46.0);
  float gravel = 1.0-sstep(0.0,0.42,w.x);
  vec3 col = vec3(0.055,0.055,0.058);
  col = mix(col, mix(vec3(0.16,0.15,0.14), vec3(0.34,0.32,0.30), w.z), gravel*0.85);
  col *= 0.75+0.5*fbm(uv*12.0,12.0,4);
  float ph = sstep(0.78,1.0, fbm(uv*2.5+9.0,2.5,4));
  col = mix(col, vec3(0.10,0.09,0.08), ph*0.7);
  // oil slick with iridescence
  float oil = sstep(0.80,1.0, fbm(uv*4.0+77.0,4.0,4));
  col = mix(col, vec3(0.02,0.02,0.03), oil*0.8);
  float sm = sstep(0.88,1.0, ridged(uv*3.0+55.0,3.0,4));
  col = mix(col, vec3(0.03,0.03,0.03), sm*0.8);
  // faded paint line
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(0.86 - 0.45*oil - 0.10*gravel, 0.15, 1.0);
  s.metal = 0.0;
  s.ao = clamp(0.5+0.55*height(uv), 0.2, 1.0);
  return s;
}
`,Md=`
float height(vec2 uv){
  float h = 0.5+0.22*fbm(uv*5.0,5.0,6);
  vec3 w = worley(uv, 34.0);
  h += 0.10*(1.0-sstep(0.0,0.35,w.x))*step(0.55,w.z);   // pebbles
  // dried mud cracks
  vec3 wc = worley(warp(uv,1.0,0.05), 14.0);
  float crack = 1.0-sstep(0.0,0.05, wc.y-wc.x);
  h -= 0.16*crack;
  h += 0.03*hash12(uv*1400.0);
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float n = fbm(uv*6.0,6.0,6);
  vec3 col = mix(vec3(0.19,0.13,0.085), vec3(0.36,0.27,0.17), n);
  vec3 w = worley(uv,34.0);
  float peb = (1.0-sstep(0.0,0.35,w.x))*step(0.55,w.z);
  col = mix(col, mix(vec3(0.28,0.26,0.24),vec3(0.45,0.42,0.38),w.z), peb*0.8);
  // sparse dead grass tufts
  float gr = sstep(0.62,1.0, fbm(uv*11.0+31.0,11.0,5));
  col = mix(col, vec3(0.24,0.22,0.10), gr*0.55);
  vec3 wc = worley(warp(uv,1.0,0.05),14.0);
  float crack = 1.0-sstep(0.0,0.05, wc.y-wc.x);
  col = mix(col, vec3(0.09,0.06,0.04), crack*0.75);
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(0.95-0.12*peb, 0.6, 1.0);
  s.ao = clamp(0.5+0.5*height(uv)-0.3*crack, 0.2, 1.0);
  return s;
}
`,rh=`
const float PLANKS = 5.0;
float height(vec2 uv){
  float py = uv.y*PLANKS;
  float pid = floor(py);
  float pf = fract(py);
  float xoff = hash11(pid+uSeed)*0.37;
  // grain rings, warped along the plank
  vec2 g = vec2(uv.x*3.0+xoff, pf*0.35);
  float rings = fract(fbm(vec2(g.x*2.0, g.y*26.0),26.0,5)*7.0 + turb(vec2(g.x*7.0,g.y*10.0),10.0,4)*3.0);
  float h = 0.62 + 0.09*rings;
  // deep grain gouges
  h -= 0.10*sstep(0.75,1.0, turb(vec2(uv.x*40.0, pf*4.0), 40.0, 4));
  // plank gap + bevel
  float gap = 1.0-sstep(0.0,0.05, min(pf,1.0-pf));
  h -= 0.30*gap;
  // knots
  vec3 kn = worley(vec2(uv.x*2.0, pf*0.5+pid), 5.0);
  float knot = 1.0-sstep(0.0,0.22,kn.x);
  h += 0.07*knot*step(0.7,kn.z);
  // nail heads near plank ends
  vec2 np = vec2(fract(uv.x*4.0)-0.5, pf-0.5);
  float nail = 1.0-sstep(0.02,0.035, length(np*vec2(1.0,1.0/PLANKS*PLANKS)));
  h += 0.05*nail;
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float py = uv.y*PLANKS, pid = floor(py), pf = fract(py);
  float xoff = hash11(pid+uSeed)*0.37;
  float tone = hash11(pid*3.7+uSeed);
  vec2 g = vec2(uv.x*3.0+xoff, pf*0.35);
  float rings = fract(fbm(vec2(g.x*2.0,g.y*26.0),26.0,5)*7.0 + turb(vec2(g.x*7.0,g.y*10.0),10.0,4)*3.0);
  vec3 light = mix(vec3(0.46,0.31,0.17), vec3(0.55,0.40,0.24), tone);
  vec3 dark  = mix(vec3(0.22,0.13,0.07), vec3(0.30,0.19,0.10), tone);
  vec3 col = mix(dark, light, rings);
  col *= 0.85+0.3*fbm(vec2(uv.x*60.0, pf*6.0), 60.0, 4);
  vec3 kn = worley(vec2(uv.x*2.0, pf*0.5+pid), 5.0);
  float knot = (1.0-sstep(0.0,0.22,kn.x))*step(0.7,kn.z);
  col = mix(col, vec3(0.12,0.07,0.03), knot*0.85);
  float gap = 1.0-sstep(0.0,0.05, min(pf,1.0-pf));
  col = mix(col, vec3(0.03,0.025,0.02), gap*0.9);
  // weathering: grey silvering + green mildew
  float weather = fbm(uv*4.0+17.0,4.0,4);
  col = mix(col, vec3(0.38,0.36,0.33), sstep(0.5,1.0,weather)*0.45);
  col = mix(col, vec3(0.14,0.17,0.09), sstep(0.72,1.0, fbm(uv*13.0+51.0,13.0,4))*0.35);
  // nails: dark metal
  vec2 np = vec2(fract(uv.x*4.0)-0.5, pf-0.5);
  float nail = 1.0-sstep(0.02,0.035, length(np));
  col = mix(col, vec3(0.22,0.20,0.19), nail);
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(0.88-0.18*rings+0.06*weather, 0.42, 1.0);
  s.metal = nail*0.85;
  s.ao = clamp(0.55+0.5*height(uv)-0.4*gap, 0.15, 1.0);
  return s;
}
`,ah=`
float height(vec2 uv){
  // corrugated sheet + rivet grid + rust scabs
  float corr = 0.5+0.42*sin(uv.x*PI*2.0*8.0);
  float h = 0.45+0.14*corr;
  vec2 rp = fract(uv*vec2(8.0,6.0))-0.5;
  float rivet = 1.0-sstep(0.10,0.17,length(rp));
  h += 0.10*rivet;
  float rust = sstep(0.55,1.0, fbm(uv*9.0+uSeed,9.0,5));
  h += 0.09*rust*fbm(uv*70.0,70.0,4);
  h -= 0.20*sstep(0.90,1.0, fbm(uv*5.0+81.0,5.0,4));   // holes
  h += 0.02*hash12(uv*1000.0);
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float rust = sstep(0.50,1.0, fbm(uv*9.0+uSeed,9.0,5));
  float rust2 = fbm(uv*40.0,40.0,4);
  vec3 steel = vec3(0.35,0.36,0.38)*(0.8+0.35*fbm(uv*55.0,55.0,3));
  vec3 rustc = mix(vec3(0.34,0.14,0.05), vec3(0.55,0.28,0.10), rust2);
  rustc = mix(rustc, vec3(0.22,0.09,0.03), sstep(0.6,1.0,rust2));
  // flaked paint patches (industrial green / blue)
  float paint = sstep(0.42,0.62, fbm(uv*3.0+123.0,3.0,4))*(1.0-rust);
  vec3 paintc = mix(vec3(0.10,0.22,0.18), vec3(0.13,0.20,0.30), hash11(uSeed));
  vec3 col = mix(steel, rustc, rust);
  col = mix(col, paintc*(0.7+0.5*fbm(uv*30.0,30.0,3)), paint*0.85);
  vec2 rp = fract(uv*vec2(8.0,6.0))-0.5;
  float rivet = 1.0-sstep(0.10,0.17,length(rp));
  col = mix(col, vec3(0.30,0.29,0.28), rivet*0.5);
  float hole = sstep(0.90,1.0, fbm(uv*5.0+81.0,5.0,4));
  col = mix(col, vec3(0.02,0.02,0.02), hole);
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(mix(0.30, 0.95, rust)*(0.9+0.2*rust2) - 0.12*paint, 0.15, 1.0);
  s.metal = clamp((1.0-rust*0.85)*(1.0-paint*0.7), 0.02, 1.0);
  s.ao = clamp(0.55+0.5*height(uv)-0.5*hole, 0.15, 1.0);
  return s;
}
`,hr=`
float height(vec2 uv){
  float h = 0.55 + 0.03*fbm(uv*40.0,40.0,4);
  vec2 rp = fract(uv*vec2(6.0,6.0))-0.5;
  h += 0.08*(1.0-sstep(0.09,0.15,length(rp)));
  float scr = sstep(0.85,1.0, turb(vec2(uv.x*90.0,uv.y*4.0),90.0,3));
  h -= 0.05*scr;
  float chip = sstep(0.86,1.0, fbm(uv*14.0+uSeed,14.0,4));
  h -= 0.06*chip;
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float chip = sstep(0.86,1.0, fbm(uv*14.0+uSeed,14.0,4));
  vec3 col = uTint*(0.85+0.20*fbm(uv*20.0,20.0,4));
  col = mix(col, vec3(0.30,0.20,0.10), chip*0.8);
  float scr = sstep(0.85,1.0, turb(vec2(uv.x*90.0,uv.y*4.0),90.0,3));
  col = mix(col, vec3(0.45,0.44,0.42), scr*0.4);
  float g = grime(uv,1.0,0.25);
  col *= mix(1.0,0.65,g*0.5);
  s.albedo = srgb2lin(col);
  s.rough = clamp(0.42+0.35*chip+0.15*g-0.1*scr, 0.12, 1.0);
  s.metal = clamp(0.15+0.7*chip, 0.05, 0.95);
  s.ao = clamp(0.6+0.45*height(uv), 0.3, 1.0);
  return s;
}
`,oh=`
float height(vec2 uv){
  float h = 0.5 + 0.10*fbm(uv*24.0,24.0,5);
  // veins
  float v = ridged(uv*9.0+uSeed, 9.0, 5);
  h += 0.07*sstep(0.80,1.0,v);
  // pores / boils
  vec3 w = worley(uv, 40.0);
  h += 0.06*(1.0-sstep(0.0,0.25,w.x))*step(0.72,w.z);
  // torn wounds
  float wound = sstep(0.80,0.95, fbm(uv*5.0+43.0,5.0,4));
  h -= 0.22*wound;
  // skin wrinkle micro detail
  h += 0.04*turb(uv*70.0, 70.0, 4);
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float n = fbm(uv*10.0,10.0,5);
  // sickly grey-green necrotic base with mottled bruising
  vec3 base = mix(vec3(0.30,0.34,0.26), vec3(0.46,0.47,0.38), n);
  base = mix(base, vec3(0.24,0.22,0.26), sstep(0.55,1.0, fbm(uv*4.0+7.0,4.0,4))*0.6);
  // purple/blue bruises
  float br = sstep(0.62,1.0, fbm(uv*6.0+19.0,6.0,5));
  base = mix(base, vec3(0.20,0.12,0.22), br*0.65);
  // veins darker
  float v = sstep(0.78,1.0, ridged(uv*9.0+uSeed,9.0,5));
  base = mix(base, vec3(0.16,0.14,0.20), v*0.5);
  // exposed flesh wounds \u2014 wet crimson
  float wound = sstep(0.80,0.95, fbm(uv*5.0+43.0,5.0,4));
  vec3 raw = mix(vec3(0.38,0.05,0.04), vec3(0.20,0.02,0.02), fbm(uv*30.0,30.0,4));
  base = mix(base, raw, wound);
  // dried blood smears
  float dry = sstep(0.70,1.0, fbm(vec2(uv.x*8.0, uv.y*3.0)+61.0, 8.0, 4));
  base = mix(base, vec3(0.16,0.03,0.02), dry*0.5);
  // dirt
  base *= 0.85+0.25*fbm(uv*40.0,40.0,4);
  s.albedo = srgb2lin(base*uTint);
  s.rough = clamp(0.72 - 0.45*wound + 0.15*n, 0.16, 1.0);
  s.metal = 0.0;
  s.ao = clamp(0.6+0.45*height(uv)-0.3*wound, 0.2, 1.0);
  return s;
}
`,lh=`
float height(vec2 uv){
  // woven weft/warp
  float w1 = 0.5+0.5*sin(uv.x*PI*2.0*90.0);
  float w2 = 0.5+0.5*sin(uv.y*PI*2.0*90.0);
  float weave = max(w1,w2)*0.5 + 0.25;
  float h = 0.42 + 0.10*weave;
  h += 0.10*fbm(uv*6.0,6.0,5);          // folds
  h -= 0.18*sstep(0.86,1.0, fbm(uv*4.0+uSeed,4.0,4)); // rips
  h += 0.03*hash12(uv*1500.0);
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float n = fbm(uv*7.0,7.0,5);
  vec3 col = mix(uTint*0.55, uTint*1.05, n);
  float w1 = 0.5+0.5*sin(uv.x*PI*2.0*90.0);
  float w2 = 0.5+0.5*sin(uv.y*PI*2.0*90.0);
  col *= 0.85+0.25*max(w1,w2);
  // grime + blood soak
  float g = grime(uv,1.0,0.5);
  col *= mix(1.0,0.45,g*0.8);
  float blood = sstep(0.62,1.0, fbm(vec2(uv.x*5.0,uv.y*2.2)+29.0,5.0,4));
  col = mix(col, vec3(0.13,0.02,0.015), blood*0.7);
  float rip = sstep(0.86,1.0, fbm(uv*4.0+uSeed,4.0,4));
  col = mix(col, vec3(0.02,0.02,0.02), rip*0.8);
  s.albedo = srgb2lin(col);
  s.rough = clamp(0.94-0.08*n+0.05*g, 0.6, 1.0);
  s.metal = 0.0;
  s.ao = clamp(0.55+0.5*height(uv), 0.2, 1.0);
  s.alpha = 1.0;
  return s;
}
`,bd=`
float splat(vec2 uv){
  vec2 p = (uv-0.5)*2.0;
  float r = length(p);
  float a = atan(p.y,p.x);
  // lobed core
  float lobes = 0.52 + 0.16*fbm(vec2(cos(a),sin(a))*2.4+uSeed, 8.0, 5);
  float core = sstep(lobes, lobes-0.16, r);
  // tendrils / spatter arms
  float arms = fbm(vec2(a*3.4+uSeed, r*2.4), 8.0, 5);
  core = max(core, sstep(0.62,0.86, arms)*sstep(1.0,0.42,r));
  // satellite droplets
  float d = 0.0;
  for(int i=0;i<10;i++){
    float fi = float(i);
    vec2 o = (hash22(vec2(fi, uSeed))*2.0-1.0)*0.78;
    float rr = 0.035+0.055*hash11(fi*3.1+uSeed);
    d = max(d, sstep(rr, rr*0.45, length(p-o)));
  }
  core = max(core, d*0.9);
  return clamp(core, 0.0, 1.0);
}
float height(vec2 uv){
  float m = splat(uv);
  return 0.5+0.3*m*(0.7+0.3*fbm(uv*22.0,22.0,4));
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float m = splat(uv);
  float thick = m*(0.65+0.35*fbm(uv*14.0,14.0,4));
  vec3 wet = vec3(0.26,0.012,0.010);
  vec3 dark = vec3(0.075,0.006,0.006);
  vec3 col = mix(dark, wet, sstep(0.25,0.95,thick));
  s.albedo = srgb2lin(col);
  s.rough = mix(0.55, 0.13, sstep(0.2,0.9,thick));
  s.metal = 0.0;
  s.ao = 1.0-0.35*m;
  s.alpha = smoothstep(0.06, 0.34, m);
  return s;
}
`,_d=`
const float T = 8.0;
float height(vec2 uv){
  vec2 p = uv*T;
  vec2 fp = fract(p); vec2 ip = floor(p);
  float grout = 1.0-sstep(0.0,0.045, min(min(fp.x,1.0-fp.x),min(fp.y,1.0-fp.y)));
  float h = 0.68 - 0.24*grout;
  h += 0.03*fbm(uv*60.0,60.0,4);
  // cracked / missing tiles
  float br = hash12(ip+uSeed);
  if(br>0.88) h -= 0.16*(0.5+0.5*fbm(uv*40.0,40.0,4));
  float cr = sstep(0.90,1.0, ridged(uv*10.0+7.0,10.0,4));
  h -= 0.10*cr;
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  vec2 p = uv*T; vec2 fp = fract(p), ip = floor(p);
  float grout = 1.0-sstep(0.0,0.045, min(min(fp.x,1.0-fp.x),min(fp.y,1.0-fp.y)));
  float tv = hash12(ip*1.7+uSeed);
  vec3 tile = mix(vec3(0.62,0.61,0.57), vec3(0.42,0.43,0.42), tv*0.7);
  tile *= 0.9+0.18*fbm(uv*45.0+ip,45.0,4);
  vec3 groutc = vec3(0.28,0.27,0.25)*(0.7+0.5*fbm(uv*90.0,90.0,4));
  vec3 col = mix(tile, groutc, grout);
  float br = hash12(ip+uSeed);
  if(br>0.88) col = mix(col, vec3(0.18,0.17,0.16), 0.7);
  float g = grime(uv,1.0,0.3);
  col *= mix(1.0,0.5,g*0.7);
  float cr = sstep(0.90,1.0, ridged(uv*10.0+7.0,10.0,4));
  col = mix(col, vec3(0.06,0.06,0.06), cr*0.8);
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(mix(0.28,0.92,grout)+0.25*g, 0.12, 1.0);
  s.metal = 0.0;
  s.ao = clamp(0.5+0.55*height(uv), 0.2, 1.0);
  return s;
}
`,Sd=`
float height(vec2 uv){
  // machined micro-grooves + bead blasted finish + wear
  float groove = 0.5+0.5*sin(uv.y*PI*2.0*140.0);
  float h = 0.55+0.02*groove;
  h += 0.03*fbm(uv*120.0,120.0,4);
  h -= 0.05*sstep(0.88,1.0, turb(vec2(uv.x*60.0,uv.y*30.0),60.0,3));
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float n = fbm(uv*80.0,80.0,4);
  float wear = sstep(0.70,1.0, fbm(uv*7.0+uSeed,7.0,4));
  vec3 col = mix(vec3(0.055,0.056,0.060), vec3(0.10,0.10,0.11), n);
  col = mix(col, vec3(0.42,0.43,0.45), wear*0.6);  // rubbed to bare steel
  float scratch = sstep(0.86,1.0, turb(vec2(uv.x*70.0,uv.y*20.0),70.0,3));
  col = mix(col, vec3(0.55,0.55,0.56), scratch*0.5);
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(0.44-0.22*wear-0.15*scratch+0.10*n, 0.10, 0.9);
  s.metal = clamp(0.85+0.15*wear, 0.7, 1.0);
  s.ao = clamp(0.75+0.3*height(uv), 0.5, 1.0);
  return s;
}
`,ch=`
float height(vec2 uv){
  // stippled grip texture
  vec3 w = worley(uv, 70.0);
  float stip = 1.0-sstep(0.0,0.40,w.x);
  float h = 0.5+0.10*stip;
  h += 0.02*fbm(uv*150.0,150.0,3);
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  vec3 w = worley(uv,70.0);
  float stip = 1.0-sstep(0.0,0.40,w.x);
  vec3 col = uTint*(0.82+0.25*fbm(uv*40.0,40.0,4));
  col *= 0.9+0.2*stip;
  float g = grime(uv,1.0,0.2);
  col *= mix(1.0,0.7,g*0.4);
  s.albedo = srgb2lin(col);
  s.rough = clamp(0.62-0.15*stip+0.12*g, 0.25, 0.95);
  s.metal = 0.03;
  s.ao = clamp(0.7+0.35*height(uv), 0.5, 1.0);
  return s;
}
`,wd=`
float height(vec2 uv){
  vec3 w = worley(uv, 9.0);
  float crack = 1.0-sstep(0.0,0.045, w.y-w.x);
  float h = 0.62-0.22*crack;
  h += 0.02*fbm(uv*90.0,90.0,3);
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  vec3 w = worley(uv,9.0);
  float crack = 1.0-sstep(0.0,0.05,w.y-w.x);
  vec3 col = mix(vec3(0.06,0.09,0.10), vec3(0.14,0.19,0.20), fbm(uv*5.0,5.0,4));
  col = mix(col, vec3(0.70,0.78,0.82), crack*0.8);
  float dust = grime(uv,1.0,0.4);
  col = mix(col, vec3(0.35,0.34,0.32), dust*0.35);
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(0.10+0.6*crack+0.35*dust, 0.05, 1.0);
  s.metal = 0.0;
  s.ao = 1.0;
  s.alpha = clamp(0.28+0.6*crack+0.35*dust, 0.15, 1.0);
  return s;
}
`,Ed=`
float height(vec2 uv){
  float h = 0.55+0.03*fbm(uv*70.0,70.0,4);
  h -= 0.07*sstep(0.85,1.0, fbm(uv*10.0+uSeed,10.0,4));
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float st = step(0.5, fract((uv.x+uv.y)*5.0));
  vec3 col = mix(vec3(0.68,0.52,0.03), vec3(0.05,0.05,0.05), st);
  float chip = sstep(0.85,1.0, fbm(uv*10.0+uSeed,10.0,4));
  col = mix(col, vec3(0.28,0.14,0.06), chip*0.8);
  float g = grime(uv,1.0,0.4);
  col *= mix(1.0,0.55,g*0.7);
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(0.5+0.4*chip+0.2*g, 0.2, 1.0);
  s.metal = 0.25;
  s.ao = clamp(0.7+0.3*height(uv), 0.4, 1.0);
  return s;
}
`,Td=`
float height(vec2 uv){
  float w1 = 0.5+0.5*sin(uv.x*PI*2.0*60.0);
  float w2 = 0.5+0.5*sin(uv.y*PI*2.0*60.0);
  float h = 0.45+0.12*max(w1,w2)+0.14*fbm(uv*8.0,8.0,5);
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float n = fbm(uv*9.0,9.0,5);
  vec3 col = mix(vec3(0.28,0.25,0.17), vec3(0.44,0.40,0.28), n);
  float w1 = 0.5+0.5*sin(uv.x*PI*2.0*60.0);
  float w2 = 0.5+0.5*sin(uv.y*PI*2.0*60.0);
  col *= 0.85+0.25*max(w1,w2);
  float g = grime(uv,1.0,0.4);
  col *= mix(1.0,0.55,g*0.7);
  s.albedo = srgb2lin(col*uTint);
  s.rough = 0.96;
  s.ao = clamp(0.5+0.5*height(uv),0.2,1.0);
  return s;
}
`,Ad=`
float height(vec2 uv){
  vec3 w = worley(warp(uv,1.0,0.03), 22.0);
  float cell = sstep(0.0,0.10, w.y-w.x);
  float h = 0.45+0.16*cell;
  h += 0.06*fbm(uv*90.0,90.0,4);
  h -= 0.10*sstep(0.88,1.0, fbm(uv*6.0+uSeed,6.0,4));
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  vec3 w = worley(warp(uv,1.0,0.03), 22.0);
  float cell = sstep(0.0,0.10, w.y-w.x);
  vec3 col = uTint*(0.55+0.55*cell)*(0.85+0.25*fbm(uv*40.0,40.0,4));
  float scuff = sstep(0.80,1.0, fbm(uv*9.0+uSeed,9.0,4));
  col = mix(col, uTint*1.6, scuff*0.4);
  s.albedo = srgb2lin(col);
  s.rough = clamp(0.62-0.2*cell+0.2*scuff, 0.25, 1.0);
  s.metal = 0.0;
  s.ao = clamp(0.55+0.5*height(uv), 0.25, 1.0);
  return s;
}
`,Rd=`
float height(vec2 uv){
  float h = 0.6+0.08*fbm(uv*30.0,30.0,5);
  h -= 0.10*sstep(0.85,1.0, ridged(uv*12.0+uSeed,12.0,4));
  vec3 w = worley(uv, 50.0);
  h -= 0.05*(1.0-sstep(0.0,0.2,w.x))*step(0.75,w.z);
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float n = fbm(uv*20.0,20.0,5);
  vec3 col = mix(vec3(0.62,0.59,0.50), vec3(0.80,0.77,0.68), n);
  float stain = sstep(0.60,1.0, fbm(uv*7.0+13.0,7.0,4));
  col = mix(col, vec3(0.32,0.24,0.14), stain*0.6);
  float blood = sstep(0.80,1.0, fbm(uv*5.0+91.0,5.0,4));
  col = mix(col, vec3(0.20,0.03,0.02), blood*0.7);
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(0.55+0.25*stain, 0.3, 0.95);
  s.metal = 0.0;
  s.ao = clamp(0.6+0.45*height(uv), 0.3, 1.0);
  return s;
}
`,Cd=`
float height(vec2 uv){
  float h = 0.5+0.2*fbm(uv*12.0,12.0,5);
  float vein = 1.0-sstep(0.0,0.02, abs(uv.x-0.5));
  h += 0.1*vein;
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float n = fbm(uv*10.0,10.0,5);
  vec3 col = mix(vec3(0.10,0.16,0.06), vec3(0.22,0.30,0.10), n);
  col = mix(col, vec3(0.26,0.22,0.08), sstep(0.6,1.0,fbm(uv*6.0+3.0,6.0,4))*0.6);
  float vein = 1.0-sstep(0.0,0.025, abs(uv.x-0.5));
  col = mix(col, vec3(0.30,0.34,0.16), vein*0.5);
  s.albedo = srgb2lin(col*uTint);
  s.rough = 0.85;
  s.metal = 0.0;
  s.ao = clamp(0.6+0.4*uv.y, 0.35, 1.0);
  // blade silhouette: taper to a point
  float w = 0.5*(1.0-uv.y*0.85);
  s.alpha = step(abs(uv.x-0.5), w);
  return s;
}
`;var ja=class{constructor(t,e){this.baker=new Za(t),this.env=e,this.m={},this.sets={}}_bake(t,e,n){let i=this.baker.bake(t,e,n);return this.sets[t]=i,i}_mat(t,e,n={}){let i=this.baker.material(e,{...n,key:t});return i.envMap=this.env||null,i.envMapIntensity=n.envMapIntensity??.85,i.name=t,this.m[t]=i,i}buildAll(t=()=>{}){let e=[],n=i=>e.push(i);return n(()=>{let i=this._bake("brick",ih,{size:1024,normalStrength:2.2,seed:3.1,repeat:[1,1]});this._mat("brick",i,{normalScale:1.5,envMapIntensity:.55});let s=this._bake("brickDark",ih,{size:512,normalStrength:2.2,seed:8.7,tint:[.62,.6,.62]});this._mat("brickDark",s,{normalScale:1.5,envMapIntensity:.5})}),n(()=>{let i=this._bake("concrete",sh,{size:1024,normalStrength:1.7,seed:5.5});this._mat("concrete",i,{normalScale:1.25,envMapIntensity:.55});let s=this._bake("concreteDark",sh,{size:512,normalStrength:1.7,seed:12.2,tint:[.55,.56,.58]});this._mat("concreteDark",s,{normalScale:1.25,envMapIntensity:.5})}),n(()=>{let i=this._bake("asphalt",yd,{size:1024,normalStrength:1.5,seed:2.2});this._mat("asphalt",i,{normalScale:1.1,envMapIntensity:.7})}),n(()=>{let i=this._bake("dirt",Md,{size:1024,normalStrength:1.8,seed:7.7});this._mat("dirt",i,{normalScale:1.3,envMapIntensity:.45})}),n(()=>{let i=this._bake("wood",rh,{size:1024,normalStrength:1.9,seed:4.4});this._mat("wood",i,{normalScale:1.2,envMapIntensity:.5});let s=this._bake("woodDark",rh,{size:512,normalStrength:1.9,seed:15.1,tint:[.6,.58,.55]});this._mat("woodDark",s,{normalScale:1.2,envMapIntensity:.45})}),n(()=>{let i=this._bake("tile",_d,{size:1024,normalStrength:1.6,seed:6.1});this._mat("tile",i,{normalScale:1.15,envMapIntensity:.9})}),n(()=>{let i=this._bake("rust",ah,{size:1024,normalStrength:1.6,seed:9.9});this._mat("rust",i,{normalScale:1.2,envMapIntensity:1});let s=this._bake("rustHeavy",ah,{size:512,normalStrength:1.6,seed:21.3,tint:[.85,.8,.78]});this._mat("rustHeavy",s,{normalScale:1.2,envMapIntensity:.9})}),n(()=>{let i=this._bake("gunmetal",Sd,{size:1024,normalStrength:1.1,seed:3.7,aniso:16});this._mat("gunmetal",i,{normalScale:.8,envMapIntensity:1.35})}),n(()=>{let i=this._bake("polymer",ch,{size:512,normalStrength:1.3,seed:1.9,tint:[.1,.105,.11]});this._mat("polymer",i,{normalScale:1,envMapIntensity:.7});let s=this._bake("polymerTan",ch,{size:512,normalStrength:1.3,seed:11.4,tint:[.34,.29,.2]});this._mat("polymerTan",s,{normalScale:1,envMapIntensity:.6})}),n(()=>{let i=this._bake("paintRed",hr,{size:512,normalStrength:1.2,seed:14.2,tint:[.34,.055,.045]});this._mat("paintRed",i,{normalScale:1,envMapIntensity:1.1});let s=this._bake("paintGreen",hr,{size:512,normalStrength:1.2,seed:18.5,tint:[.09,.16,.11]});this._mat("paintGreen",s,{normalScale:1,envMapIntensity:1});let a=this._bake("paintBlue",hr,{size:512,normalStrength:1.2,seed:23.8,tint:[.07,.12,.22]});this._mat("paintBlue",a,{normalScale:1,envMapIntensity:1});let o=this._bake("paintYellow",hr,{size:512,normalStrength:1.2,seed:27.1,tint:[.42,.32,.045]});this._mat("paintYellow",o,{normalScale:1,envMapIntensity:1})}),n(()=>{let i=this._bake("hazard",Ed,{size:512,normalStrength:1,seed:31.4});this._mat("hazard",i,{normalScale:.9,envMapIntensity:.9})}),n(()=>{let i=this._bake("skin",oh,{size:1024,normalStrength:1.5,seed:8.2});this.m.skin=this.baker.material(i,{key:"skin",physical:!0,normalScale:1.15,extra:{sheen:.35,sheenRoughness:.6,sheenColor:new It(2765600),clearcoat:.18,clearcoatRoughness:.55}}),this.m.skin.envMap=this.env,this.m.skin.envMapIntensity=.55;for(let[s,a,o]of[["skinPale",[1.18,1.12,1.05],13.6],["skinRot",[.72,.82,.62],19.4],["skinBurn",[.62,.52,.48],25.2]]){let l=this._bake(s,oh,{size:512,normalStrength:1.5,seed:o,tint:a});this._mat(s,l,{normalScale:1.1,envMapIntensity:.5})}}),n(()=>{let i=this._bake("rags",lh,{size:512,normalStrength:1.4,seed:5.9,tint:[.2,.21,.19]});this._mat("rags",i,{normalScale:1.1,envMapIntensity:.35});for(let[s,a,o]of[["ragsBlue",[.13,.16,.26],16.3],["ragsRed",[.24,.1,.09],22.7],["ragsGreen",[.14,.19,.12],29.1],["ragsWhite",[.42,.41,.38],33.3]]){let l=this._bake(s,lh,{size:512,normalStrength:1.4,seed:o,tint:a});this._mat(s,l,{normalScale:1.1,envMapIntensity:.3})}}),n(()=>{let i=this._bake("bone",Rd,{size:512,normalStrength:1.5,seed:7.3});this._mat("bone",i,{normalScale:1.1,envMapIntensity:.6});let s=this._bake("leather",Ad,{size:512,normalStrength:1.5,seed:9.1,tint:[.13,.09,.06]});this._mat("leather",s,{normalScale:1.15,envMapIntensity:.75});let a=this._bake("sandbag",Td,{size:512,normalStrength:1.7,seed:11.9});this._mat("sandbag",a,{normalScale:1.35,envMapIntensity:.35})}),n(()=>{this.bloodMats=[];for(let i=0;i<6;i++){let s=this._bake("blood"+i,bd,{size:256,normalStrength:1,seed:3.3*(i+1)+.7}),a=new vn({map:s.map,normalMap:s.normalMap,roughnessMap:s.ormMap,alphaMap:s.ormMap,transparent:!0,alphaTest:.02,roughness:1,metalness:0,clearcoat:.65,clearcoatRoughness:.22,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6,side:zn,envMap:this.env,envMapIntensity:.9,normalScale:new X(.8,.8)});a.onBeforeCompile=o=>{o.fragmentShader=o.fragmentShader.replace("float roughnessFactor = roughness;",`
              float roughnessFactor = roughness;
              #ifdef USE_ROUGHNESSMAP
                roughnessFactor *= texture2D(roughnessMap, vRoughnessMapUv).r;
              #endif`).replace("roughnessFactor *= texelRoughness.g;","").replace("diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;","diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).a;")},a.customProgramCacheKey=()=>"blood",this.bloodMats.push(a)}this.m.blood=this.bloodMats[0],this.m.gore=new vn({color:new It(4851718),roughness:.28,metalness:0,clearcoat:.85,clearcoatRoughness:.18,sheen:.5,sheenColor:new It(9445408),envMap:this.env,envMapIntensity:1.1})}),n(()=>{let i=this._bake("glass",wd,{size:512,normalStrength:1.2,seed:2.9});this.m.glass=new vn({map:i.map,normalMap:i.normalMap,roughnessMap:i.ormMap,alphaMap:i.ormMap,transparent:!0,roughness:1,metalness:.05,transmission:.55,thickness:.04,ior:1.48,envMap:this.env,envMapIntensity:1.3,side:Ee,depthWrite:!1}),this.m.glass.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;","diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).a;")},this.m.glass.customProgramCacheKey=()=>"glass";let s=this._bake("foliage",Cd,{size:256,normalStrength:1,seed:4.1});this.m.foliage=new Ge({map:s.map,normalMap:s.normalMap,roughnessMap:s.ormMap,alphaMap:s.ormMap,transparent:!0,alphaTest:.35,side:Ee,roughness:1,metalness:0,envMap:this.env,envMapIntensity:.4}),this.m.foliage.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;","diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).a;")},this.m.foliage.customProgramCacheKey=()=>"foliage"}),n(()=>{this.m.lampGlass=new vn({color:2761752,emissive:new It(16763274),emissiveIntensity:6.5,roughness:.25,metalness:0,transmission:.35,thickness:.03,ior:1.45,envMap:this.env,envMapIntensity:1}),this.m.lampGlassOff=new vn({color:1381650,emissive:new It(0),roughness:.35,metalness:.1,transmission:.3,thickness:.03,envMap:this.env}),this.m.neonRed=new Ge({color:2228738,emissive:new It(16720920),emissiveIntensity:5,roughness:.3,metalness:0}),this.m.neonGreen=new Ge({color:137734,emissive:new It(3538794),emissiveIntensity:3.5,roughness:.3,metalness:0}),this.m.eyeGlow=new Le({color:16766042}),this.m.muzzle=new Le({color:16773312,transparent:!0,blending:qe,depthWrite:!1,side:Ee}),this.m.tracer=new Le({color:16765040,transparent:!0,blending:qe,depthWrite:!1}),this.m.brass=new Ge({color:11570482,roughness:.24,metalness:1,envMap:this.env,envMapIntensity:1.4}),this.m.rubber=new Ge({color:855310,roughness:.85,metalness:.02,envMap:this.env,envMapIntensity:.35}),this.m.chrome=new Ge({color:14211806,roughness:.12,metalness:1,envMap:this.env,envMapIntensity:1.6})}),e}};function Id(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new Te,c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Pd(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);let g=Pd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Pd(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let a=new t(s),o=new He(a,e,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let v=h.getComponent(d,g);o.setComponent(d+u,g,v)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}function hh(r){let t=r>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,1|e),e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var ce=class{constructor(t=1337){this.r=hh(t)}next(){return this.r()}range(t,e){return t+(e-t)*this.r()}int(t,e){return Math.floor(this.range(t,e+1))}sign(){return this.r()<.5?-1:1}pick(t){return t[Math.floor(this.r()*t.length)%t.length]}chance(t){return this.r()<t}gauss(t=0,e=1){let n=0,i=0;for(;n===0;)n=this.r();for(;i===0;)i=this.r();return t+e*Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*i)}},_e=new Uint8Array(512);(function(){let t=hh(9871),e=new Uint8Array(256);for(let n=0;n<256;n++)e[n]=n;for(let n=255;n>0;n--){let i=Math.floor(t()*(n+1)),s=e[n];e[n]=e[i],e[i]=s}for(let n=0;n<512;n++)_e[n]=e[n&255]})();var ur=r=>r*r*r*(r*(r*6-15)+10),Hn=(r,t,e)=>r+(t-r)*e;function Ka(r,t,e){switch(r&7){case 0:return t+e;case 1:return t-e;case 2:return-t+e;case 3:return-t-e;case 4:return t;case 5:return-t;case 6:return e;default:return-e}}function Ja(r,t){let e=Math.floor(r)&255,n=Math.floor(t)&255,i=r-Math.floor(r),s=t-Math.floor(t),a=ur(i),o=ur(s),l=_e[_e[e]+n],c=_e[_e[e]+n+1],h=_e[_e[e+1]+n],u=_e[_e[e+1]+n+1],d=Hn(Ka(l,i,s),Ka(h,i-1,s),a),f=Hn(Ka(c,i,s-1),Ka(u,i-1,s-1),a);return Hn(d,f,o)}function Si(r,t,e,n){let i=r<8?t:e,s=r<4?e:r===12||r===14?t:n;return(r&1?-i:i)+(r&2?-s:s)}function Qa(r,t,e){let n=Math.floor(r)&255,i=Math.floor(t)&255,s=Math.floor(e)&255,a=r-Math.floor(r),o=t-Math.floor(t),l=e-Math.floor(e),c=ur(a),h=ur(o),u=ur(l),d=_e[n]+i,f=_e[d]+s,g=_e[d+1]+s,v=_e[n+1]+i,p=_e[v]+s,m=_e[v+1]+s;return Hn(Hn(Hn(Si(_e[f],a,o,l),Si(_e[p],a-1,o,l),c),Hn(Si(_e[g],a,o-1,l),Si(_e[m],a-1,o-1,l),c),h),Hn(Hn(Si(_e[f+1],a,o,l-1),Si(_e[p+1],a-1,o,l-1),c),Hn(Si(_e[g+1],a,o-1,l-1),Si(_e[m+1],a-1,o-1,l-1),c),h),u)}function qi(r,t,e=5,n=2,i=.5){let s=0,a=.5,o=1,l=0;for(let c=0;c<e;c++)s+=a*Ja(r*o,t*o),l+=a,a*=i,o*=n;return s/l}function uh(r,t,e,n=4,i=.5){let s=0,a=.5,o=1,l=0;for(let c=0;c<n;c++)s+=a*Qa(r*o,t*o,e*o),l+=a,a*=i,o*=2;return s/l}var Vx=[];(function(){let t=hh(4242);for(let e=0;e<1024;e++)Vx.push([t(),t()])})();var $a=(r,t,e)=>r<t?t:r>e?e:r;var Ld=(r,t,e)=>new A(r,t,e);function at(r,t=!1){let e=r.filter(Boolean);if(e.length===1&&!t)return e[0];let n=Id(e,t);if(!n)throw new Error("merge failed");return n}function L(r,{pos:t,rot:e,scale:n,quat:i}={}){let s=new jt,a=i||new pe;return e&&!i&&a.setFromEuler(new Ie(e[0]||0,e[1]||0,e[2]||0)),s.compose(t?new A(...t):new A,a,n?Array.isArray(n)?new A(...n):new A(n,n,n):new A(1,1,1)),r.applyMatrix4(s),r}function q(r,t,e,n=.05,i=3){n=Math.min(n,r/2-1e-4,t/2-1e-4,e/2-1e-4);let s=new rn(1,1,1,i+1,i+1,i+1),a=s.attributes.position,o=s.attributes.normal,l=new A(r/2-n,t/2-n,e/2-n),c=new A,h=new A,u=new A;for(let d=0;d<a.count;d++){c.fromBufferAttribute(a,d),c.multiply(new A(r,t,e)),h.set($a(c.x,-l.x,l.x),$a(c.y,-l.y,l.y),$a(c.z,-l.z,l.z)),u.copy(c).sub(h);let f=u.length();f>1e-6?u.multiplyScalar(1/f):u.set(0,1,0),c.copy(h).addScaledVector(u,n),a.setXYZ(d,c.x,c.y,c.z),o.setXYZ(d,u.x,u.y,u.z)}return a.needsUpdate=!0,o.needsUpdate=!0,s.computeBoundingBox(),s}function Vn(r,t,e,n=24,i=.02,s=!0,a=!0){let o=[];return a&&o.push(new X(0,-e/2)),o.push(new X(Math.max(t-i,.001),-e/2)),o.push(new X(t,-e/2+i)),o.push(new X(r,e/2-i)),o.push(new X(Math.max(r-i,.001),e/2)),s&&o.push(new X(0,e/2)),new Js(o,n)}function Ft(r,t=24,e=0,n=Math.PI*2){return new Js(r.map(i=>new X(i[0],i[1])),t,e,n)}function Jt(r,t,e=40,n=10,i=!1){let s=new Ks(r.map(a=>Array.isArray(a)?Ld(...a):a),i,"catmullrom",.5);return new _a(s,e,t,n,i)}function Gn(r,t,{bevel:e=.02,bevelSeg:n=2,steps:i=1,holes:s=[]}={}){let a=new xi(r.map(l=>new X(l[0],l[1])));for(let l of s)a.holes.push(new Ss(l.map(c=>new X(c[0],c[1]))));let o=new ya(a,{depth:t,steps:i,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelOffset:0,bevelSegments:n,curveSegments:12});return o.center(),o}function ne(r,t,e=32,n=10,i=Math.PI*2){return new Hi(r,t,n,e,i)}function Mn(r,{amp:t=.05,freq:e=1,oct:n=4,seed:i=0,mask:s=null,along:a=null}={}){let o=r.attributes.position;r.attributes.normal||r.computeVertexNormals();let l=r.attributes.normal,c=new A,h=new A;for(let u=0;u<o.count;u++){c.fromBufferAttribute(o,u),h.fromBufferAttribute(l,u);let d=uh(c.x*e+i,c.y*e+i*1.7,c.z*e+i*3.1,n);s&&(d*=s(c,u)),a&&h.copy(a),c.addScaledVector(h,d*t),o.setXYZ(u,c.x,c.y,c.z)}return o.needsUpdate=!0,r.computeVertexNormals(),r}function Y(r,t=1,e=[0,0]){r.computeVertexNormals();let n=r.attributes.position,i=r.attributes.normal,s=new Float32Array(n.count*2),a=new A,o=new A;for(let l=0;l<n.count;l++){a.fromBufferAttribute(n,l),o.fromBufferAttribute(i,l);let c=Math.abs(o.x),h=Math.abs(o.y),u=Math.abs(o.z),d,f;h>=c&&h>=u?(d=a.x,f=a.z):c>=u?(d=a.z,f=a.y):(d=a.x,f=a.y),s[l*2]=d/t+e[0],s[l*2+1]=f/t+e[1]}return r.setAttribute("uv",new He(s,2)),r}function ut(r,t=1){let e=r.attributes.position,n=new Float32Array(e.count*2),i=new A;for(let s=0;s<e.count;s++){i.fromBufferAttribute(e,s);let a=Math.atan2(i.z,i.x),o=Math.hypot(i.x,i.z);n[s*2]=a/(Math.PI*2)*(Math.PI*2*Math.max(o,.05))/t,n[s*2+1]=i.y/t}return r.setAttribute("uv",new He(n,2)),r}function dr(r,{seg:t=16,amp:e=.012,freq:n=6,seed:i=3}={}){let s=Ft(r,t);return Mn(s,{amp:e,freq:n,oct:3,seed:i}),s}function ge(r,t,{seg:e=24,seed:n=1,noiseAmp:i=.04}={}){let s=new je(r,e,Math.max(8,e>>1)),a=s.attributes.position,o=new A;for(let l=0;l<a.count;l++){o.fromBufferAttribute(a,l);let c=o.clone().normalize(),h=0;for(let d of t){let f=Ld(d[0],d[1],d[2]),g=Math.max(0,c.dot(f.clone().normalize()));h+=d[3]*Math.pow(g,d[4]??3)}let u=uh(c.x*3+n,c.y*3+n,c.z*3+n,3)*i;o.copy(c).multiplyScalar(r+h+u),a.setXYZ(l,o.x,o.y,o.z)}return a.needsUpdate=!0,s.computeVertexNormals(),s}function Gx(r){let t=r.index?r.toNonIndexed():r;return t.computeVertexNormals(),t}function Dd(r,t,e){let n=new Ve(r,r,t,t);n.rotateX(-Math.PI/2);let i=n.attributes.position;for(let s=0;s<i.count;s++){let a=i.getX(s),o=i.getZ(s);i.setY(s,e(a,o))}return i.needsUpdate=!0,n.computeVertexNormals(),n}function Yi(r,t=1,e=1){let n=new ws(r,e),i=n.attributes.position,s=new ce(t*977),a=new A,o=[];for(let l=0;l<40;l++)o.push([s.range(-1,1),s.range(-1,1),s.range(-1,1)]);for(let l=0;l<i.count;l++){a.fromBufferAttribute(i,l);let c=a.clone().normalize(),h=Qa(c.x*2.4+t,c.y*2.4+t,c.z*2.4+t),u=Qa(c.x*6+t,c.y*6+t,c.z*6+t);a.copy(c).multiplyScalar(r*(1+h*.35+u*.12)),a.y<-r*.55&&(a.y=-r*.55),i.setXYZ(l,a.x,a.y,a.z)}return i.needsUpdate=!0,Gx(n)}var Mt=(r,t,e=!0,n=!0)=>{let i=new Ct(r,t);return i.castShadow=e,i.receiveShadow=n,i};function dh(r,t,e,n,i={}){let s=new ce(i.seed||1),a=new ht,o=[],l=new rn(t,e,n,Math.max(2,Math.round(t*2)),Math.max(2,Math.round(e*2)),2);Mn(l,{amp:.02,freq:.55,oct:3,seed:s.int(1,999)}),o.push(l);let c=q(t+.1,.34,n+.09,.03,1);L(c,{pos:[0,-e/2+.17,0]});let h=q(t+.12,.16,n+.11,.025,1);L(h,{pos:[0,e/2-.22,0]});let u=at(o);Y(u,1.6),a.add(Mt(u,r.m[i.mat||"brick"]));let d=at([c,h]);if(Y(d,1.4),a.add(Mt(d,r.m.concrete)),i.coping!==!1){let f=[],g=Math.max(2,Math.round(t/.55));for(let p=0;p<g;p++){let m=t/g*.96,y=q(m,.11,n+.14,.02,1);L(y,{pos:[-t/2+(p+.5)*(t/g),e/2+.05,0],rot:[s.range(-.02,.02),s.range(-.02,.02),0]}),f.push(y)}let v=at(f);Y(v,.9),a.add(Mt(v,r.m.concreteDark))}if(i.rubble!==!1){let f=[],g=s.int(3,7);for(let p=0;p<g;p++){let m=s.range(.06,.2),y=Yi(m,s.int(1,9999),1);L(y,{pos:[s.range(-t/2,t/2),-e/2+m*.45,(s.chance(.5)?1:-1)*(n/2+s.range(.05,.45))],rot:[s.range(0,6),s.range(0,6),s.range(0,6)]}),f.push(y)}let v=at(f);Y(v,.5),a.add(Mt(v,r.m.concrete))}return a}function fh(r,t,e,n,i={}){let s=new ce(i.seed||5),a=new ht,o=new rn(t,e,n,Math.max(2,Math.round(t*1.6)),Math.max(2,Math.round(e*1.6)),2);Mn(o,{amp:.016,freq:.7,oct:3,seed:s.int(1,999)}),Y(o,1.8),a.add(Mt(o,r.m[i.mat||"concrete"]));let l=[],c=Math.max(1,Math.round(e/1.4));for(let d=1;d<c;d++){let f=q(t+.02,.045,n*.24,.008,0);L(f,{pos:[0,-e/2+d*(e/c),n/2]}),l.push(f);let g=f.clone();L(g,{pos:[0,0,-n]}),l.push(g)}let h=Math.max(1,Math.round(t/1.2));for(let d=0;d<h;d++)for(let f=0;f<c;f++){let g=Vn(.03,.034,n*.1,10,.006);L(g,{pos:[-t/2+(d+.5)*(t/h),-e/2+(f+.5)*(e/c),n/2],rot:[Math.PI/2,0,0]}),l.push(g)}let u=at(l);if(Y(u,.7),a.add(Mt(u,r.m.concreteDark)),i.damaged){let d=[],f=s.int(3,6);for(let g=0;g<f;g++){let v=s.range(-t/2+.4,t/2-.4),p=s.range(-e/2+.4,e/2-.6),m=s.range(-.4,.4);d.push(Jt([[v,p,-n/2],[v+m*.3,p+.1,0],[v+m,p+s.range(.1,.5),n/2+s.range(.1,.5)]],.014,14,6))}a.add(Mt(at(d),r.m.rustHeavy))}return a}function Ud(r,t,e,n,i={}){let s=new ce(i.seed||11),a=new ht,o=3.2,l=n*o,c=.42,h=i.mat||(s.chance(.5)?"brick":"concrete"),u=r.m[h],d=r.m.concreteDark,f=[],g=[],v=[],p=(w,C,D)=>{let b=Math.max(2,Math.round(w/2.6)),S=.62,U=(w-b*S-S)/b;for(let z=0;z<n;z++){let k=z*o,j=q(w,1.05,c,.03,1);m(j,0,k+.52,C,D),f.push(j);let F=q(w,o-1.05-1.55,c,.03,1);m(F,0,k+1.05+1.55+(o-1.05-1.55)/2,C,D),f.push(F);for(let tt=0;tt<=b;tt++){let G=-w/2+tt*(U+S)+S/2,dt=q(S,1.55,c,.03,1);m(dt,G,k+1.05+.775,C,D),f.push(dt)}for(let tt=0;tt<b;tt++){let G=-w/2+S+tt*(U+S)+U/2,dt=q(U+.2,.11,c+.16,.02,1);m(dt,G,k+1.05,C,D),g.push(dt);let lt=q(U+.24,.14,c+.12,.02,1);if(m(lt,G,k+1.05+1.55,C,D),g.push(lt),s.chance(.78)){let it=Wx(r,U*.94,1.42,s),Nt=w/2*0+0;C==="x"?(it.position.set(G,k+1.05+.71,D*(e/2-c*.35)),it.rotation.y=D>0?0:Math.PI):(it.position.set(D*(t/2-c*.35),k+1.05+.71,G),it.rotation.y=D>0?Math.PI/2:-Math.PI/2),a.add(it)}}}};function m(w,C,D,b,S){b==="x"?L(w,{pos:[C,D,S*(e/2-c/2)]}):L(w,{pos:[S*(t/2-c/2),D,C],rot:[0,Math.PI/2,0]})}p(t,"x",1),p(t,"x",-1),p(e,"z",1),p(e,"z",-1);for(let w of[-1,1])for(let C of[-1,1]){let D=Math.round(l/.62);for(let b=0;b<D;b++){let S=b%2===0?.72:.52,U=q(S,.58,.66,.03,1);L(U,{pos:[w*(t/2-S/2+.03),.29+b*.62,C*(e/2-.3)]}),g.push(U)}}for(let[w,C,D]of[[t,"x",1],[t,"x",-1],[e,"z",1],[e,"z",-1]]){let b=q(w+.2,1.05,.4,.04,1);m(b,0,l+.52,C,D),f.push(b);let S=q(w+.42,.24,.62,.03,1);m(S,0,l+.05,C,D),g.push(S);let U=q(w+.3,.13,.52,.025,1);m(U,0,l+1.1,C,D),g.push(U)}let y=q(t-.1,.32,e-.1,.03,1);L(y,{pos:[0,l-.16,0]}),f.push(y);let M=at(f);Y(M,1.7),a.add(Mt(M,u));let x=at(g);Y(x,1.2),a.add(Mt(x,d));let T=l+.16,_=s.int(1,3);for(let w=0;w<_;w++){let C=Yx(r,s);C.position.set(s.range(-t/2+1.6,t/2-1.6),T,s.range(-e/2+1.6,e/2-1.6)),C.rotation.y=s.range(0,Math.PI*2),a.add(C)}if(s.chance(.55)){let w=Zx(r,s);w.position.set(s.range(-t/4,t/4),T,s.range(-e/4,e/4)),a.add(w)}for(let w=0;w<s.int(2,5);w++){let C=s.range(.5,1.5),D=at([Ft([[0,0],[.13,0],[.14,.04],[.14,C],[.13,C+.03],[0,C+.03]],14),L(Ft([[0,0],[.2,0],[.21,.03],[.19,.1],[0,.11]],14),{pos:[0,C+.02,0]})]),b=Mt(ut(D,.35),r.m.rust);b.position.set(s.range(-t/2+1,t/2-1),T,s.range(-e/2+1,e/2-1)),a.add(b)}if(s.chance(.4)){let w=new ht,C=Jt([[0,0,0],[0,3.5,0]],.045,10,8);w.add(Mt(ut(C,.4),r.m.rust));for(let D=0;D<4;D++){let b=Jt([[0,3.2-D*0,0],[Math.cos(D*1.57)*1.4,.2,Math.sin(D*1.57)*1.4]],.01,8,5);w.add(Mt(b,r.m.rust))}for(let D=0;D<3;D++){let b=Jt([[-.5,2.2+D*.5,0],[.5,2.2+D*.5,0]],.018,6,6);w.add(Mt(b,r.m.rust))}w.position.set(s.range(-t/3,t/3),T,s.range(-e/3,e/3)),a.add(w)}if(i.fireEscape!==!1&&n>=2&&s.chance(.72)){let w=qx(r,n,o,s),C=s.int(0,3);C===0?w.position.set(0,0,e/2+.05):C===1?(w.position.set(0,0,-e/2-.05),w.rotation.y=Math.PI):C===2?(w.position.set(t/2+.05,0,0),w.rotation.y=-Math.PI/2):(w.position.set(-t/2-.05,0,0),w.rotation.y=Math.PI/2),a.add(w)}for(let w of[-1,1]){if(!s.chance(.6))continue;let C=s.chance(.5)?1:-1,D=[[w*(t/2-.22),.1,C*(e/2-.22)]];for(let S=1;S<=n;S++)D.push([w*(t/2-.22),S*o,C*(e/2-.22)]);let b=Jt(D,.062,n*4,10);a.add(Mt(ut(b,.5),r.m.rust));for(let S=0;S<=n;S++){let U=ne(.075,.014,12,6);L(U,{pos:[w*(t/2-.22),.4+S*o,C*(e/2-.22)],rot:[Math.PI/2,0,0]}),a.add(Mt(ut(U,.2),r.m.rustHeavy))}}if(i.door!==!1){let w=Xx(r,s);w.position.set(s.range(-t/4,t/4),0,e/2-.05),a.add(w)}return a.userData.footprint={w:t,d:e,h:l+1.2},a}function Wx(r,t,e,n){let i=new ht,s=.055,a=[];a.push(L(q(t,s,.1,.012,1),{pos:[0,e/2,0]})),a.push(L(q(t,s,.1,.012,1),{pos:[0,-e/2,0]})),a.push(L(q(s,e,.1,.012,1),{pos:[-t/2,0,0]})),a.push(L(q(s,e,.1,.012,1),{pos:[t/2,0,0]})),a.push(L(q(t,s*.72,.08,.01,1),{pos:[0,0,0]})),a.push(L(q(s*.72,e,.08,.01,1),{pos:[0,0,0]}));let o=at(a);if(Y(o,.4),i.add(Mt(o,r.m.woodDark,!0,!0)),n.chance(.7)){let l=[];for(let[c,h]of[[-1,1],[1,1],[-1,-1],[1,-1]]){if(!n.chance(.65))continue;let u=t/2*n.range(.35,.92),d=e/2*n.range(.35,.92),f=Gn([[0,0],[u,0],[u*n.range(.5,.95),d*n.range(.6,1)],[u*n.range(.15,.5),d],[0,d*n.range(.7,1)]],.01,{bevel:.002});L(f,{pos:[c*(u/2+.02),h*(d/2+.02),0],scale:[c,h,1]}),l.push(f)}if(l.length){let c=at(l);Y(c,.5);let h=Mt(c,r.m.glass,!1,!1);i.add(h)}}if(n.chance(.35)){let l=[];for(let h=0;h<n.int(2,4);h++){let u=q(t*n.range(1,1.25),n.range(.16,.26),.045,.008,1);L(u,{pos:[n.range(-.1,.1),n.range(-e/2,e/2)*.8,.07],rot:[0,0,n.range(-.22,.22)]}),l.push(u)}let c=at(l);Y(c,.6),i.add(Mt(c,r.m.wood))}return i}function Xx(r,t){let e=new ht,n=1.35,i=2.35,s=[];s.push(L(q(.22,i+.3,.42,.03,1),{pos:[-n/2-.08,(i+.3)/2,0]})),s.push(L(q(.22,i+.3,.42,.03,1),{pos:[n/2+.08,(i+.3)/2,0]})),s.push(L(q(n+.6,.28,.46,.03,1),{pos:[0,i+.34,0]})),s.push(L(q(n+.7,.16,.9,.02,1),{pos:[0,.08,.3]}));let a=at(s);Y(a,.9),e.add(Mt(a,r.m.concreteDark));let o=[];o.push(q(n*.94,i,.07,.012,1));for(let u=0;u<3;u++)o.push(L(q(n*.72,.55,.02,.006,1),{pos:[0,-i/2+.5+u*.72,.045]}));o.push(L(ne(.055,.014,14,6),{pos:[n*.36,0,.06],rot:[Math.PI/2,0,0]}));let l=at(o);Y(l,.7);let c=Mt(l,r.m.rust),h=new ht;return h.position.set(-n/2,i/2,.1),c.position.x=n*.47,h.add(c),h.rotation.y=t.range(.7,2.2),e.add(h),e}function qx(r,t,e,n){let i=new ht,s=r.m.rust,a=2.4,o=1.25,l=[];for(let u=1;u<=t;u++){let d=u*e-.25;for(let f=0;f<14;f++){let g=q(a,.035,o/16,.006,0);L(g,{pos:[0,d,-o/2+(f+1)*(o/16)]}),l.push(g)}l.push(L(q(a+.08,.1,.07,.012,1),{pos:[0,d-.05,-o/2]})),l.push(L(q(a+.08,.1,.07,.012,1),{pos:[0,d-.05,o/2]})),l.push(L(q(.07,.1,o,.012,1),{pos:[-a/2,d-.05,0]})),l.push(L(q(.07,.1,o,.012,1),{pos:[a/2,d-.05,0]}));for(let[f,g,v,p]of[[0,o/2,a,0],[-a/2,0,o,Math.PI/2],[a/2,0,o,Math.PI/2]]){l.push(L(Jt([[-v/2,0,0],[v/2,0,0]],.024,6,7),{pos:[f,d+1.05,g],rot:[0,p,0]})),l.push(L(Jt([[-v/2,0,0],[v/2,0,0]],.018,6,6),{pos:[f,d+.55,g],rot:[0,p,0]}));let m=Math.max(2,Math.round(v/.3));for(let y=0;y<=m;y++){let M=-v/2+y*(v/m),x=Jt([[0,0,0],[0,1.05,0]],.012,4,5),T=p===0?f+M:f,_=p===0?g:g+M;L(x,{pos:[T,d,_]}),l.push(x)}}if(u>1){for(let g=0;g<9;g++){let v=q(.85,.045,.26,.008,0);L(v,{pos:[a/2-.5,d-(g+1)*(e/10),-o/2-(g+1)*.26]}),l.push(v)}for(let g of[-1,1]){let v=Jt([[a/2-.5+g*.44,d-.1,-o/2],[a/2-.5+g*.44,d-e+.2,-o/2-2.34]],.03,6,6);l.push(v);let p=Jt([[a/2-.5+g*.44,d+.95,-o/2],[a/2-.5+g*.44,d-e+1.15,-o/2-9*.26]],.02,6,6);l.push(p)}}for(let f of[-1,1])l.push(L(Jt([[f*(a/2-.1),d-.05,o/2],[f*(a/2-.1),d-.7,o/2+0]],.022,5,6),{})),l.push(L(Jt([[f*(a/2-.1),d-.05,-o/2+.05],[f*(a/2-.1),d-.75,o/2]],.02,5,6),{}))}let c=[];for(let u of[-1,1])c.push(Jt([[u*.28,e-.4,-o/2-.2],[u*.28,.6,-o/2-.5]],.024,8,7));for(let u=0;u<8;u++){let d=u/7;c.push(Jt([[-.28,e-.4-d*(e-1),-o/2-.2-d*.3],[.28,e-.4-d*(e-1),-o/2-.2-d*.3]],.016,4,6))}l.push(...c);let h=at(l);return ut(h,.55),i.add(Mt(h,s)),i}function Yx(r,t){let e=new ht,n=t.range(1.4,2.4),i=t.range(.9,1.5),s=t.range(1.2,1.9),a=[];a.push(L(q(n,i,s,.05,2),{pos:[0,i/2,0]}));for(let f=0;f<8;f++)a.push(L(q(.03,i*.8,s*.94,.006,0),{pos:[-n/2+(f+.5)*(n/8),i/2,0]}));a.push(L(q(n+.16,.1,s+.16,.02,1),{pos:[0,.05,0]}));let o=at(a);Y(o,.9),e.add(Mt(o,r.m.rust));let l=[];for(let f=0;f<5;f++)l.push(L(ne(.16+f*.075,.014,22,6),{rot:[Math.PI/2,0,0]}));for(let f=0;f<8;f++)l.push(L(Jt([[0,0,0],[Math.cos(f*.785)*.5,0,Math.sin(f*.785)*.5]],.01,4,5),{}));let c=at(l);L(c,{pos:[0,i+.02,0]}),e.add(Mt(ut(c,.3),r.m.chrome));let h=[];for(let f=0;f<5;f++){let g=q(.42,.012,.16,.004,1);L(g,{pos:[Math.cos(f*1.256)*.22,0,Math.sin(f*1.256)*.22],rot:[.35,-f*1.256,0]}),h.push(g)}let u=at(h);L(u,{pos:[0,i-.08,0]}),e.add(Mt(Y(u,.3),r.m.rustHeavy));let d=Jt([[n/2-.1,i*.6,0],[n/2+.6,i*.6,0],[n/2+.9,i*.25,.4]],.2,16,12);e.add(Mt(ut(d,.5),r.m.rustHeavy));for(let f=0;f<4;f++){let g=ne(.215,.02,16,6);L(g,{pos:[n/2+f*.22,i*.6,0],rot:[0,0,Math.PI/2]}),e.add(Mt(ut(g,.2),r.m.rust))}return e}function Zx(r,t){let e=new ht,n=t.range(1,1.6),i=t.range(1.8,2.8),s=Ft([[0,0],[n*.94,0],[n,.12],[n*1.02,i/2],[n,i-.12],[n*.9,i],[0,i+.1]],24);e.add(Mt(ut(s,.7),r.m.wood));let a=[];for(let u=0;u<26;u++){let d=u/26*Math.PI*2,f=q(.1,i,.05,.008,0);L(f,{pos:[Math.cos(d)*n*1.01,i/2,Math.sin(d)*n*1.01],rot:[0,-d,0]}),a.push(f)}e.add(Mt(Y(at(a),.5),r.m.woodDark));let o=[];for(let u=0;u<4;u++)o.push(L(ne(n*1.04,.035,26,7),{pos:[0,.3+u*(i-.6)/3,0],rot:[Math.PI/2,0,0]}));e.add(Mt(ut(at(o),.3),r.m.rust));let l=Ft([[0,i+.05],[n*1.05,i+.02],[n*.4,i+.45],[0,i+.52]],22);e.add(Mt(ut(l,.5),r.m.rustHeavy));let c=[];for(let u=0;u<4;u++){let d=u*Math.PI/2+Math.PI/4;c.push(Jt([[Math.cos(d)*n*.8,.05,Math.sin(d)*n*.8],[Math.cos(d)*n*1.1,-1.2,Math.sin(d)*n*1.1]],.045,6,7))}for(let u=0;u<4;u++){let d=u*Math.PI/2+Math.PI/4,f=(u+1)%4*Math.PI/2+Math.PI/4;c.push(Jt([[Math.cos(d)*n*1,-.55,Math.sin(d)*n*1],[Math.cos(f)*n*1,-.55,Math.sin(f)*n*1]],.024,5,6))}let h=at(c);return L(h,{pos:[0,1.2,0]}),e.add(Mt(ut(h,.4),r.m.rust)),e.position.y=0,e.children.forEach(u=>{u.position.y+=1.2}),e}function ph(r,t){let e=new ht,n=t.pick([r.m.paintRed,r.m.paintBlue,r.m.paintGreen,r.m.paintYellow,r.m.rustHeavy]),i=4.3,s=1.85,a=.72,o=[],l=q(s,a,i,.22,3);o.push(L(l,{pos:[0,.62,0]})),o.push(L(q(s*.94,.36,1.25,.14,2),{pos:[0,.92,i/2-.72]})),o.push(L(q(s*.94,.34,1.05,.14,2),{pos:[0,.9,-i/2+.62]}));let c=at(o);Mn(c,{amp:.02,freq:2.2,oct:3,seed:t.int(1,999)}),Y(c,1.1),e.add(Mt(c,n));let h=[];h.push(L(q(s*.9,.62,2,.16,2),{pos:[0,1.32,-.1]}));for(let m of[-1,1])h.push(L(q(.1,.7,.12,.02,1),{pos:[m*s*.42,1.28,.92],rot:[.45,0,0]})),h.push(L(q(.1,.7,.12,.02,1),{pos:[m*s*.42,1.28,-.05]})),h.push(L(q(.1,.7,.12,.02,1),{pos:[m*s*.42,1.28,-1.05],rot:[-.4,0,0]}));let u=at(h);if(Mn(u,{amp:.016,freq:3,oct:3,seed:t.int(1,999)}),Y(u,.9),e.add(Mt(u,n)),t.chance(.5)){let m=ge(.55,[],{seg:14,seed:t.int(1,999),noiseAmp:.05});m.scale(1.3,.35,1),L(m,{pos:[t.range(-.3,.3),1.55,t.range(-.6,.4)]}),e.add(Mt(Y(m,.6),n))}let d=[];for(let m of[-1,1])for(let y of[1,-1]){let M=ne(.48,.1,18,8,Math.PI);L(M,{pos:[m*(s/2-.02),.62,y*1.35],rot:[0,Math.PI/2,0]}),d.push(M)}e.add(Mt(ut(at(d),.4),n));for(let m of[1,-1]){let y=at([q(s*1.02,.26,.24,.06,2),L(q(s*.7,.1,.12,.02,1),{pos:[0,-.1,.1]})]);L(y,{pos:[0,.56,m*(i/2+.05)]}),e.add(Mt(Y(y,.5),r.m.chrome))}for(let m of[-1,1])for(let y of[1,-1]){if(t.chance(.18))continue;let M=new ht,x=t.chance(.5),T=new Hi(.3,.135,12,22);x&&T.scale(1,.62,1),M.add(Mt(ut(T,.35),r.m.rubber));let _=Ft([[0,-.09],[.16,-.09],[.2,-.05],[.2,.05],[.16,.09],[0,.09]],16);L(_,{rot:[Math.PI/2,0,0]}),M.add(Mt(ut(_,.2),r.m.chrome));let w=[];for(let D=0;D<5;D++){let b=D*Math.PI*2/5;w.push(L(q(.05,.34,.04,.008,1),{rot:[0,0,b]}))}let C=at(w);L(C,{rot:[Math.PI/2,0,0]}),M.add(Mt(Y(C,.2),r.m.chrome)),M.position.set(m*(s/2+.04),x?.22:.32,y*1.35),M.rotation.y=Math.PI/2,M.rotation.z=t.range(-.1,.1),e.add(M)}let f=[];t.chance(.4)&&f.push(L(q(s*.8,.55,.02,.01,1),{pos:[0,1.34,.95],rot:[.42,0,0]}));for(let m of[-1,1])t.chance(.45)&&f.push(L(q(.02,.48,.85,.01,1),{pos:[m*s*.43,1.34,.42]})),t.chance(.45)&&f.push(L(q(.02,.48,.8,.01,1),{pos:[m*s*.43,1.34,-.55]}));f.length&&e.add(Mt(Y(at(f),.5),r.m.glass,!1,!1));let g=[];for(let m of[-1,1])g.push(L(Ft([[0,0],[.16,0],[.17,.05],[.13,.1],[0,.11]],14),{pos:[m*.55,.84,i/2-.1],rot:[Math.PI/2,0,0]}));e.add(Mt(ut(at(g),.2),r.m.glass,!1,!1));let v=[];for(let m=0;m<7;m++)v.push(L(q(1.15,.03,.06,.008,0),{pos:[0,.72+m*.045,i/2+.02]}));e.add(Mt(Y(at(v),.3),r.m.chrome)),e.add(Mt(ut(Jt([[.4,.3,-i/2-.1],[.3,.32,0],[.2,.34,i/2-.6]],.045,16,8),.4),r.m.rust));let p=q(s*.92,.1,i*.88,.03,1);return L(p,{pos:[0,.3,0]}),e.add(Mt(Y(p,.7),r.m.rustHeavy)),e.rotation.z=t.range(-.08,.08),e.rotation.x=t.range(-.04,.04),e.userData.footprint={w:s+.3,d:i+.3,h:1.7},e}function to(r,t){let e=new ht,n=.32,i=.92,s=Ft([[0,0],[n*.9,0],[n*.94,.04],[n,.16],[n*1.02,i/2],[n,i-.16],[n*.94,i-.04],[n*.9,i],[0,i]],22),a=t.pick([r.m.paintRed,r.m.paintBlue,r.m.rust,r.m.hazard,r.m.paintYellow]);e.add(Mt(ut(s,.55),a));let o=[];for(let l of[.24,i/2,i-.24])o.push(L(ne(n*1.03,.026,22,7),{pos:[0,l,0],rot:[Math.PI/2,0,0]}));o.push(L(ne(n*.92,.022,20,6),{pos:[0,i-.01,0],rot:[Math.PI/2,0,0]})),o.push(L(ne(n*.92,.022,20,6),{pos:[0,.01,0],rot:[Math.PI/2,0,0]})),e.add(Mt(ut(at(o),.25),r.m.rustHeavy));for(let l of[-.14,.13]){let c=Vn(.048,.052,.026,12,.006);L(c,{pos:[l,i+.01,.06]}),e.add(Mt(ut(c,.1),r.m.chrome))}return e.userData.footprint={w:n*2.1,d:n*2.1,h:i},e}function eo(r,t){let e=new ht,n=t.range(.65,1.05),i=[],s=5;for(let[o,l]of[["z",1],["z",-1],["x",1],["x",-1]])for(let c=0;c<s;c++){let h=q(n*.98,n/s*.92,.045,.008,1),u=-n/2+(c+.5)*(n/s);o==="z"?L(h,{pos:[0,u,l*n/2]}):L(h,{pos:[l*n/2,u,0],rot:[0,Math.PI/2,0]}),i.push(h)}for(let o=0;o<s;o++){let l=q(n*.98,.045,n/s*.92,.008,1);L(l,{pos:[0,n/2,-n/2+(o+.5)*(n/s)]}),i.push(l);let c=l.clone();L(c,{pos:[0,-n,0]}),i.push(c)}for(let o of[-1,1])for(let l of[-1,1])i.push(L(q(.075,n*1.02,.075,.012,1),{pos:[o*(n/2-.03),0,l*(n/2-.03)]}));for(let o of[1,-1]){let l=q(n*1.3,.075,.035,.008,1);L(l,{pos:[0,0,o*(n/2+.02)],rot:[0,0,o*.72]}),i.push(l)}let a=at(i);return Y(a,.55),e.add(Mt(a,t.chance(.5)?r.m.wood:r.m.woodDark)),e.position.y=n/2,e.rotation.y=t.range(0,Math.PI*2),e.userData.footprint={w:n*1.15,d:n*1.15,h:n},e}function mh(r,t,e=3){let n=new ht,i=[],s=4;for(let o=0;o<s;o++){let l=Math.max(1,Math.round(e/.52)-Math.floor(o/2)),c=o%2*.26;for(let h=0;h<l;h++){let u=ge(.27,[[1,0,0,.06,2],[-1,0,0,.06,2]],{seg:12,seed:t.int(1,9999),noiseAmp:.014});u.scale(1.05,.52,.72),L(u,{pos:[-e/2+c+h*.52+t.range(-.02,.02),.14+o*.24,t.range(-.04,.04)-o*.05],rot:[t.range(-.08,.08),t.range(-.12,.12),t.range(-.08,.08)]}),i.push(u)}}let a=at(i);return Y(a,.45),n.add(Mt(a,r.m.sandbag)),n.userData.footprint={w:e,d:.75,h:s*.24},n}function gh(r,t){let e=new ht,n=1.85,i=1.25,s=1.25,a=[],o=6;for(let c=0;c<o;c++){let h=c/(o-1),u=.82+h*.18;a.push(L(q(n*u,i/o*1.25,s*u,.035,1),{pos:[0,.12+h*(i-.2),0]}))}for(let c=0;c<6;c++)a.push(L(q(.05,i*.85,s*1.01,.01,0),{pos:[-n/2+(c+.5)*(n/6),i/2+.1,0]}));let l=at(a);Mn(l,{amp:.012,freq:3,oct:3,seed:t.int(1,999)}),Y(l,.9),e.add(Mt(l,t.pick([r.m.paintGreen,r.m.paintBlue,r.m.rustHeavy])));for(let c of[-1,1]){let h=at([q(n*.98,.07,s*.5,.02,1),L(q(n*.3,.1,.07,.015,1),{pos:[0,.06,-s*.22]})]),u=new ht;u.position.set(0,i+.06,0);let d=Mt(Y(h,.6),r.m.rust);d.position.z=c*s*.26,u.add(d),u.rotation.x=c>0?t.range(-2.2,-.2):t.range(-.15,.05),e.add(u)}for(let c of[-1,1])for(let h of[-1,1]){let u=new Hi(.1,.045,8,14);L(u,{pos:[c*(n/2-.2),.1,h*(s/2-.2)],rot:[0,Math.PI/2,0]}),e.add(Mt(ut(u,.15),r.m.rubber))}for(let c=0;c<t.int(2,5);c++){let h=ge(t.range(.16,.26),[[0,1,0,.05,2]],{seg:12,seed:t.int(1,9999),noiseAmp:.02});L(h,{pos:[t.range(-n/2+.3,n/2-.3),i+t.range(0,.25),t.range(-s/3,s/3)]}),e.add(Mt(Y(h,.3),r.m.rubber))}return e.userData.footprint={w:n+.2,d:s+.2,h:i},e}function Nd(r,t,e=!0){let n=new ht,i=t.range(5.2,6.8),s=Ft([[0,0],[.24,0],[.26,.06],[.22,.3],[.16,.42],[.13,.6],[.115,i*.55],[.095,i],[0,i]],16);n.add(Mt(ut(s,.8),r.m.rust));let a=[];for(let u of[.42,.72,i*.5])a.push(L(ne(.135,.022,16,6),{pos:[0,u,0],rot:[Math.PI/2,0,0]}));n.add(Mt(ut(at(a),.2),r.m.rustHeavy));let o=Jt([[0,i,0],[0,i+.45,.25],[.35,i+.62,.85],[.95,i+.55,1.45],[1.35,i+.35,1.75]],.07,22,10);n.add(Mt(ut(o,.5),r.m.rust));let l=Ft([[0,0],[.3,-.02],[.34,-.1],[.3,-.28],[.2,-.34],[0,-.35]],18);L(l,{pos:[1.35,i+.35,1.75]}),n.add(Mt(ut(l,.4),r.m.rustHeavy));let c=Ft([[0,-.3],[.22,-.32],[.26,-.4],[.12,-.46],[0,-.47]],16);L(c,{pos:[1.35,i+.35,1.75]});let h=Mt(ut(c,.3),e?r.m.lampGlass:r.m.lampGlassOff,!1,!1);if(n.add(h),e){let u=new xn(16756832,9,20,2);u.position.set(1.35,i-.1,1.75),u.castShadow=!1,n.add(u),n.userData.light=u,n.userData.lamp=h}return n.userData.footprint={w:.55,d:.55,h:i},n}function Od(r,t,e=3.2,n=2.3){let i=new ht,s=[];for(let f of[-1,1])s.push(L(Ft([[0,0],[.065,0],[.07,.05],[.07,n],[.055,n+.05],[0,n+.06]],12),{pos:[f*e/2,0,0]}));for(let f of[.1,n])s.push(L(Jt([[-e/2,f,0],[e/2,f,0]],.03,6,8),{}));let a=at(s);i.add(Mt(ut(a,.4),r.m.rust));let o=[],l=.24,c=Math.floor(e/l);for(let f=-c;f<=c;f++){let g=f*l;o.push(Jt([[g-n*.5,.1,.01],[g+n*.5,n,-.01]],.009,4,4)),o.push(Jt([[g-n*.5,n,-.01],[g+n*.5,.1,.01]],.009,4,4))}let h=at(o),u=h.attributes.position;for(let f=0;f<u.count;f++){let g=u.getX(f),v=u.getY(f);Math.abs(g)>e/2&&u.setX(f,Math.sign(g)*e/2),v<.1&&u.setY(f,.1),v>n&&u.setY(f,n)}u.needsUpdate=!0,h.computeVertexNormals();let d=Mt(ut(h,.3),r.m.chrome,!1,!1);if(i.add(d),t.chance(.5)){let f=[];for(let g=0;g<=90;g++){let v=g/90,p=v*Math.PI*14;f.push([-e/2+v*e,n+.22+Math.sin(p)*.16,Math.cos(p)*.16])}i.add(Mt(ut(Jt(f,.01,120,5),.2),r.m.chrome,!1,!1))}return i.userData.footprint={w:e,d:.2,h:n},i}function no(r,t){let e=new ht,i=Gn([[-.3,0],[.3,0],[.3,.08],[.16,.3],[.11,.85],[.13,.92],[-.13,.92],[-.11,.85],[-.16,.3],[-.3,.08]],2.2,{bevel:.02});i.rotateY(Math.PI/2),Mn(i,{amp:.01,freq:3,oct:3,seed:t.int(1,999)}),Y(i,.9);let s=Mt(i,t.chance(.4)?r.m.hazard:r.m.concrete);s.position.y=.46,e.add(s);for(let a of[-1,1]){let o=ne(.055,.014,12,6,Math.PI);L(o,{pos:[a*.6,.94,0],rot:[0,0,0]}),e.add(Mt(ut(o,.15),r.m.rust))}return e.userData.footprint={w:2.2,d:.62,h:.92},e}function io(r,t){let e=new ht,n=[],i=t.range(4.5,7.5),s=[[0,0,0]],a=0,o=0;for(let h=1;h<=6;h++)a+=t.range(-.14,.14),o+=t.range(-.14,.14),s.push([a,h/6*i,o]);n.push(Jt(s,.24,24,10));for(let h=0;h<6;h++){let u=h/6*Math.PI*2+t.range(-.2,.2);n.push(Jt([[0,.5,0],[Math.cos(u)*.4,.15,Math.sin(u)*.4],[Math.cos(u)*.9,-.05,Math.sin(u)*.9]],.09,10,7))}let l=(h,u,d,f,g,v,p,m)=>{if(m<=0||p<.02)return;let y=t.range(.8,1.8)*(m/3),M=h+f*y,x=u+g*y,T=d+v*y;n.push(Jt([[h,u,d],[h+f*y*.5+t.range(-.15,.15),u+g*y*.5,d+v*y*.5+t.range(-.15,.15)],[M,x,T]],p,10,7));let _=t.int(2,3);for(let w=0;w<_;w++){let C=t.range(0,Math.PI*2),D=t.range(.35,.85);l(M,x,T,f+Math.cos(C)*D,Math.max(.15,g-t.range(.05,.3)),v+Math.sin(C)*D,p*t.range(.52,.72),m-1)}};for(let h=0;h<t.int(3,5);h++){let u=t.range(0,Math.PI*2);l(a,i*t.range(.55,.95),o,Math.cos(u)*.7,.7,Math.sin(u)*.7,.13,3)}let c=at(n);return ut(c,.9),e.add(Mt(c,r.m.woodDark)),e.userData.footprint={w:.9,d:.9,h:i},e}function so(r,t,e=1.6){let n=new ht,i=[],s=t.int(14,30);for(let l=0;l<s;l++){let c=t.range(0,Math.PI*2),h=Math.pow(t.next(),.6)*e,u=t.range(.07,.34)*(1-h/e*.5),d=Yi(u,t.int(1,9999),1);L(d,{pos:[Math.cos(c)*h,u*t.range(.3,.9),Math.sin(c)*h],rot:[t.range(0,6),t.range(0,6),t.range(0,6)]}),i.push(d)}let a=at(i);Y(a,.5),n.add(Mt(a,t.chance(.5)?r.m.concrete:r.m.brickDark));let o=[];for(let l=0;l<t.int(2,6);l++){let c=t.range(0,Math.PI*2),h=t.range(0,e*.7);o.push(Jt([[Math.cos(c)*h,.05,Math.sin(c)*h],[Math.cos(c)*h+t.range(-.2,.2),t.range(.4,1),Math.sin(c)*h+t.range(-.2,.2)],[Math.cos(c)*h+t.range(-.5,.5),t.range(.6,1.4),Math.sin(c)*h+t.range(-.5,.5)]],.014,12,6))}return o.length&&n.add(Mt(at(o),r.m.rustHeavy)),n.userData.footprint={w:e*1.6,d:e*1.6,h:.7},n}function vh(r,t){let e=[],n=t.int(6,14);for(let s=0;s<n;s++){let a=t.range(0,Math.PI*2),o=t.range(.25,.65),l=new Ve(.09,o,1,3);l.translate(0,o/2,0);let c=l.attributes.position;for(let h=0;h<c.count;h++){let u=c.getY(h)/o;c.setZ(h,c.getZ(h)+u*u*t.range(.05,.18))}c.needsUpdate=!0,L(l,{pos:[Math.cos(a)*t.range(0,.12),0,Math.sin(a)*t.range(0,.12)],rot:[0,a,t.range(-.2,.2)]}),e.push(l)}return Mt(at(e),r.m.foliage,!1,!1)}function xh(r,t){let e=new ht,n=.72,i=.32,s=.42,a=[];a.push(L(q(n,i,s,.025,2),{pos:[0,i/2,0]})),a.push(L(q(n*1.02,.07,s*1.02,.015,1),{pos:[0,i+.03,0]}));for(let l of[-1,1])for(let c of[-1,1])a.push(L(q(.1,i*1.05,.1,.015,1),{pos:[l*(n/2-.04),i/2,c*(s/2-.04)]}));for(let l of[-1,1])a.push(L(ne(.055,.014,12,6,Math.PI),{pos:[l*(n/2+.01),i*.62,0],rot:[Math.PI/2,0,Math.PI/2]}));a.push(L(q(.09,.1,.03,.008,1),{pos:[0,i-.02,s/2+.01]}));let o=at(a);return Y(o,.4),e.add(Mt(o,r.m.paintGreen)),e.userData.footprint={w:n,d:s,h:i+.1},e}function Bd(r){let t=new ht,e=xh(r,new ce(3));e.scale.setScalar(.75),t.add(e);let n=new Ct(ne(.42,.02,32,8),new Le({color:16760896,transparent:!0,opacity:.85,blending:qe,depthWrite:!1}));n.rotation.x=Math.PI/2,n.position.y=.02,t.add(n);let i=new xn(16756800,2.2,4.5,2);return i.position.y=.4,t.add(i),t.userData.ring=n,t}function zd(r){let t=new ht,e=[];e.push(L(q(.46,.26,.32,.035,2),{pos:[0,.13,0]})),e.push(L(q(.48,.04,.34,.012,1),{pos:[0,.26,0]})),e.push(L(ne(.055,.012,12,6,Math.PI),{pos:[0,.3,0],rot:[Math.PI/2,0,0]}));let n=at(e);Y(n,.35),t.add(Mt(n,r.m.polymerTan));let i=at([L(q(.2,.055,.02,.008,1),{pos:[0,.14,.165]}),L(q(.055,.2,.02,.008,1),{pos:[0,.14,.165]})]);t.add(Mt(Y(i,.2),r.m.neonRed));let s=new Ct(ne(.38,.018,32,8),new Le({color:4259696,transparent:!0,opacity:.85,blending:qe,depthWrite:!1}));s.rotation.x=Math.PI/2,s.position.y=.02,t.add(s);let a=new xn(4259712,2.2,4.5,2);return a.position.y=.4,t.add(a),t.userData.ring=s,t}function Fd(r){let t=new ht,e=Ft([[0,0],[.32,0],[.34,.05],[.2,.1],[.1,.6],[.14,.66],[0,.68]],18);t.add(Mt(ut(e,.4),r.m.gunmetal));let n=new Ct(ne(.42,.02,32,8),new Le({color:5284095,transparent:!0,opacity:.9,blending:qe,depthWrite:!1}));n.rotation.x=Math.PI/2,n.position.y=.03,t.add(n);let i=new xn(4231423,2.6,5,2);return i.position.y=.9,t.add(i),t.userData.ring=n,t}var Gd=new A,Wd=new A,yh=new pe,Hd=new jt,Vd=new A(0,0,1);function wi(r,t){let e=qi(r*.018,t*.018,4)*.34,n=qi(r*.085,t*.085,3)*.085,i=Ja(r*.42,t*.42)*.022;return e+n+i-.3}function jx(r=128){let t=document.createElement("canvas");t.width=t.height=r;let e=t.getContext("2d"),n=e.createImageData(r,r),i=n.data,s=r/2,a=r/2;for(let l=0;l<r;l++)for(let c=0;c<r;c++){let h=(c-s)/s,u=(l-a)/a,d=Math.hypot(h,u),f=Math.atan2(u,h),g=.1*Math.sin(f*5+c*.03)+.07*Math.sin(f*9-l*.05),v=d*(1+g*.55),p=0;v<.3?p=1:v<.92&&(p=Math.pow(1-(v-.3)/.62,1.7));let m=Math.sin(c*12.9898+l*78.233)*43758.5453%1;v>.35&&v<1&&(p*=.55+.45*Math.abs(m));let y=v<.3?0:Math.min(1,(v-.3)/.45),M=Math.round(12+y*120),x=(l*r+c)*4;i[x]=M,i[x+1]=M,i[x+2]=M,i[x+3]=Math.round(Math.max(0,Math.min(1,p))*255)}e.putImageData(n,0,0);let o=new ua(t);return o.colorSpace=Xe,o.anisotropy=4,o}var Mh=class{constructor(t,e=420){let n=jx(128),i=new Ge({map:n,alphaMap:n,transparent:!0,alphaTest:.03,roughness:.92,metalness:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-5}),s=new Ve(1,1,1,1);this.mesh=new Fi(s,i,e),this.mesh.instanceMatrix.setUsage(bi),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.renderOrder=3,t.add(this.mesh),this.cap=e,this.next=0}add(t,e,n){let i=this.next%this.cap;this.next++,this.mesh.count<this.cap&&(this.mesh.count=Math.min(this.cap,this.next)),yh.setFromUnitVectors(Vd,e),yh.multiply(new pe().setFromAxisAngle(Vd,Math.random()*Math.PI*2)),Hd.compose(Gd.copy(t).addScaledVector(e,.008+Math.random()*.004),yh,Wd.set(n,n,1)),this.mesh.setMatrixAt(i,Hd),this.mesh.instanceMatrix.needsUpdate=!0}clear(){this.mesh.count=0,this.next=0}},ro=class{constructor(t){this.game=t,this.scene=t.scene,this.mats=t.mats,this.physics=t.physics,this.rng=new ce(20260726),this.root=new ht,this.root.name="level",this.scene.add(this.root),this.spawnPoints=[],this.pickupNodes=[],this.playerSpawn=new A(0,.1,26),this.lamps=[],this.flickerLights=[],this.animated=[],this.bounds={min:-74,max:74},this.holes=null,this._surfaceByCollider=new WeakMap}addCollider(t,e,n,i,s,a,o=0,l="wall",c="concrete"){let h=this.physics.addBox(t,e,n,i,s,a,o,l);return h.surface=c,h}addPropCollider(t,e="concrete",n="prop"){let i=t.userData.footprint;if(!i)return null;let s=t.position;return this.addCollider(s.x,s.y+i.h/2,s.z,i.w/2,i.h/2,i.d/2,t.rotation.y,n,e)}surfaceOf(t){return t&&t.surface||"concrete"}build(){let t=[],e=(n,i)=>t.push({label:n,fn:i});return e("Surveying terrain",()=>this.buildTerrain()),e("Laying road network",()=>this.buildRoads()),e("Pouring kerbs and pavements",()=>this.buildPavements()),e("Raising city blocks",()=>this.buildBlocks()),e("Erecting perimeter",()=>this.buildPerimeter()),e("Dressing the streets",()=>this.buildStreetProps()),e("Scattering debris",()=>this.buildDebris()),e("Installing lighting",()=>this.buildLighting()),e("Marking spawn zones",()=>this.buildSpawns()),e("Priming decal systems",()=>{this.holes=new Mh(this.scene,460)}),t}buildTerrain(){let e=Dd(190,190,(u,d)=>wi(u,d));Y(e,2.6);let n=new Ct(e,this.mats.m.dirt);n.receiveShadow=!0,n.castShadow=!1,n.name="terrain",this.root.add(n),this.terrain=n,this.addCollider(0,-2,0,110,2,110,0,"ground","dirt");let i=new Ma(190*.49,320,96,8);i.rotateX(-Math.PI/2);let s=i.attributes.position;for(let u=0;u<s.count;u++){let d=s.getX(u),f=s.getZ(u),g=Math.hypot(d,f),v=Math.min(1,(g-190*.49)/60);s.setY(u,wi(d,f)-.1+qi(d*.01,f*.01,4)*9*v*v)}s.needsUpdate=!0,i.computeVertexNormals(),Y(i,6);let a=new Ct(i,this.mats.m.dirt);a.receiveShadow=!1,this.root.add(a);let o=[],l=new ce(99);for(let u=0;u<46;u++){let d=u/46*Math.PI*2+l.range(-.05,.05),f=l.range(150,260),g=l.range(12,34),v=l.range(12,34),p=l.range(14,62),m=q(g,p,v,.4,1),y=m.attributes.position;for(let M=0;M<y.count;M++)y.getY(M)>p/2-.6&&y.setY(M,y.getY(M)-Math.abs(qi(y.getX(M)*.2+u,y.getZ(M)*.2,3))*p*.28);y.needsUpdate=!0,m.computeVertexNormals(),L(m,{pos:[Math.cos(d)*f,p/2-2,Math.sin(d)*f],rot:[0,l.range(0,3.14),0]}),o.push(m)}let c=at(o);Y(c,6);let h=new Ct(c,this.mats.m.concreteDark);h.castShadow=!1,h.receiveShadow=!1,this.root.add(h)}buildRoads(){let t=this.mats,e=[],n=[],i=(y,M,x,T,_)=>{let w=Math.max(4,Math.round(x/2)),C=Math.max(4,Math.round(T/1.2)),D=new rn(_?x:T,.22,_?T:x,_?w:C,1,_?C:w),b=D.attributes.position;for(let S=0;S<b.count;S++){let U=b.getY(S);if(U>0){let z=b.getX(S)+y,k=b.getZ(S)+M,j=_?b.getZ(S)/(T/2):b.getX(S)/(T/2),F=(1-j*j)*.045,tt=qi(z*.35,k*.35,4)*.03+Ja(z*1.4,k*1.4)*.01;b.setY(S,U+F+tt)}}return b.needsUpdate=!0,D.computeVertexNormals(),L(D,{pos:[y,-.08,M]}),D},s=[[0,0,168,11,!0],[0,-46,168,9.5,!0],[0,46,168,9.5,!0],[0,0,168,11,!1],[-46,0,168,9.5,!1],[46,0,168,9.5,!1]];for(let[y,M,x,T,_]of s)e.push(i(y,M,x,T,_));let a=at(e);Y(a,3.2);let o=new Ct(a,t.m.asphalt);o.receiveShadow=!0,this.root.add(o),this.addCollider(0,-.15,0,110,.15,110,0,"ground","concrete");let l=(y,M,x,T,_)=>{let w=q(_?x:T,.012,_?T:x,.004,1);return L(w,{pos:[y,.055+wi(y,M)*0,M]}),w},c=new ce(7);for(let[y,M,x,T,_]of s){let w=Math.floor(x/6);for(let C=0;C<w;C++){if(c.chance(.22))continue;let D=-x/2+3+C*6;n.push(_?l(y+D,M,3,.16,!0):l(y,M+D,3,.16,!1))}for(let C of[-1,1]){let D=T/2-.55;n.push(_?l(y,M+C*D,x-2,.13,!0):l(y+C*D,M,x-2,.13,!1))}}let h=at(n);Y(h,1.4);let u=new Ct(h,t.m.paintYellow);u.receiveShadow=!0,u.castShadow=!1,this.root.add(u);let d=[],f=[];for(let y=0;y<14;y++){let M=c.chance(.5),x=c.pick([-46,0,46]),T=c.range(-70,70),_=M?T:x,w=M?x:T,C=Ft([[0,0],[.44,0],[.46,.03],[.44,.055],[.4,.055],[.4,.012],[0,.012]],26);L(C,{pos:[_,.055,w]}),d.push(ut(C,.5));for(let D=0;D<10;D++){let b=D/10*Math.PI*2,S=q(.3,.014,.055,.005,1);L(S,{pos:[_+Math.cos(b)*.21,.07,w+Math.sin(b)*.21],rot:[0,-b,0]}),d.push(Y(S,.3))}}for(let y=0;y<10;y++){let M=c.chance(.5),x=c.pick([-46,0,46]),T=c.sign(),_=x===0?11:9.5,w=c.range(-66,66),C=M?w:x+T*(_/2-.25),D=M?x+T*(_/2-.25):w,b=q(.86,.1,.5,.02,1);L(b,{pos:[C,.02,D],rot:[0,M?0:Math.PI/2,0]}),f.push(Y(b,.3));for(let S=0;S<6;S++){let U=q(.72,.03,.038,.008,1),z=-.19+S*.076;L(U,{pos:[C+(M?0:z),.078,D+(M?z:0)],rot:[0,M?0:Math.PI/2,0]}),f.push(Y(U,.2))}}let g=at(d),v=new Ct(g,t.m.rustHeavy);v.receiveShadow=!0,v.castShadow=!0,this.root.add(v);let p=at(f),m=new Ct(p,t.m.rust);m.receiveShadow=!0,m.castShadow=!0,this.root.add(m)}buildPavements(){let t=this.mats,e=[],n=[],i=new ce(31),s=(f,g,v,p)=>{let m=v-f,y=p-g,M=Math.hypot(m,y),x=Math.atan2(m,y),T=Math.max(1,Math.round(M/1.05));for(let _=0;_<T;_++){let w=(_+.5)/T,C=f+m*w,D=g+y*w,S=Gn([[-.155,0],[.155,0],[.155,.155],[.115,.195],[-.155,.195]],1,{bevel:.01,bevelSeg:1});S.rotateY(Math.PI/2),L(S,{pos:[C,0,D],rot:[0,x,0]}),S.translate(0,i.range(-.012,.012),0),n.push(Y(S,.6))}},a=(f,g,v,p)=>{let m=Math.max(1,Math.round(v/1.25)),y=Math.max(1,Math.round(p/1.25)),M=v/m,x=p/y;for(let T=0;T<m;T++)for(let _=0;_<y;_++){if(i.chance(.04))continue;let w=f-v/2+M*(T+.5),C=g-p/2+x*(_+.5),D=q(M-.05,.17,x-.05,.018,1);L(D,{pos:[w,.098+i.range(-.018,.014),C],rot:[i.range(-.012,.012),i.range(-.03,.03),i.range(-.012,.012)]}),e.push(Y(D,1.1))}},o=[[0,0,168,11,!0],[0,-46,168,9.5,!0],[0,46,168,9.5,!0],[0,0,168,11,!1],[-46,0,168,9.5,!1],[46,0,168,9.5,!1]],l=2.6;for(let[f,g,v,p,m]of o)for(let y of[-1,1])m?(a(f,g+y*(p/2+l/2),v,l),s(f-v/2,g+y*(p/2),f+v/2,g+y*(p/2))):(a(f+y*(p/2+l/2),g,l,v),s(f+y*(p/2),g-v/2,f+y*(p/2),g+v/2));let c=at(e),h=new Ct(c,t.m.tile);h.receiveShadow=!0,h.castShadow=!0,this.root.add(h);let u=at(n),d=new Ct(u,t.m.concreteDark);d.receiveShadow=!0,d.castShadow=!0,this.root.add(d);for(let[f,g,v,p,m]of o)for(let y of[-1,1])m?this.addCollider(f,.095,g+y*(p/2+l/2),v/2,.095,l/2,0,"ground","concrete"):this.addCollider(f+y*(p/2+l/2),.095,g,l/2,.095,v/2,0,"ground","concrete")}buildBlocks(){let t=new ce(1801),e=[-69,-23,23,69],n=16,i=0;this.buildings=[];for(let s of e)for(let a of e){if(i++,s===23&&a===23){this.buildYard(s,a,n,t);continue}let o=t.next();o<.62?this.buildBuildingLot(s,a,n,t,i):o<.82?this.buildParkingLot(s,a,n,t):this.buildRuinLot(s,a,n,t)}}buildBuildingLot(t,e,n,i,s){let a=i.int(1,2),o=[];for(let l=0;l<a;l++){let c=i.range(11,19),h=i.range(11,18),u=i.int(2,5),d=t,f=e,g=0,v=!1;for(;g++<24;){d=t+i.range(-n+c/2,n-c/2),f=e+i.range(-n+h/2,n-h/2),v=!0;for(let T of o)if(Math.abs(d-T.x)<(c+T.w)/2+3.2&&Math.abs(f-T.z)<(h+T.d)/2+3.2){v=!1;break}if(v)break}if(!v)continue;o.push({x:d,z:f,w:c,d:h});let p=Ud(this.mats,c,h,u,{seed:s*97+l*13,mat:i.chance(.55)?"brick":"concrete",fireEscape:!0});p.position.set(d,0,f),p.rotation.y=i.chance(.5)?0:Math.PI/2,this.root.add(p),this.buildings.push(p);let m=p.rotation.y,y=(Math.abs(Math.cos(m))*c+Math.abs(Math.sin(m))*h)/2,M=(Math.abs(Math.sin(m))*c+Math.abs(Math.cos(m))*h)/2,x=u*3.2+1.2;this.addCollider(d,x/2,f,y,x/2,M,0,"wall","concrete"),this.spawnPoints.push({pos:new A(d,u*3.2+.2,f),roof:!0,weight:.25})}this.scatterLotProps(t,e,n,i,o,8)}buildParkingLot(t,e,n,i){let s=new rn(n*2,.2,n*2,26,1,26),a=s.attributes.position;for(let h=0;h<a.count;h++)if(a.getY(h)>0){let u=a.getX(h)+t,d=a.getZ(h)+e;a.setY(h,a.getY(h)+qi(u*.3,d*.3,4)*.035)}a.needsUpdate=!0,s.computeVertexNormals(),L(s,{pos:[t,-.02,e]}),Y(s,2.4);let o=new Ct(s,this.mats.m.concrete);o.receiveShadow=!0,this.root.add(o),this.addCollider(t,.05,e,n,.06,n,0,"ground","concrete");let l=[];for(let h=0;h<=10;h++){let u=e-n+1.6+h*((n*2-3.2)/10);for(let d of[-1,1]){let f=q(4.6,.012,.13,.004,1);L(f,{pos:[t+d*(n*.5),.115,u]}),l.push(Y(f,1.2))}}let c=new Ct(at(l),this.mats.m.paintYellow);c.receiveShadow=!0,c.castShadow=!1,this.root.add(c);for(let h=0;h<i.int(4,8);h++){let u=ph(this.mats,i);u.position.set(t+i.range(-n+3,n-3),0,e+i.range(-n+3,n-3)),u.rotation.y=i.chance(.75)?(i.chance(.5)?0:Math.PI)+i.range(-.12,.12):i.range(0,6.28),this.root.add(u),this.addPropCollider(u,"metal")}this.scatterLotProps(t,e,n,i,[],10),this.spawnPoints.push({pos:new A(t,.1,e),weight:1})}buildRuinLot(t,e,n,i){for(let s=0;s<i.int(3,6);s++){let a=i.range(4,11),o=i.range(1.6,5.5),l=i.chance(.5)?dh(this.mats,a,o,.55,{seed:i.int(1,9999),rubble:!0}):fh(this.mats,a,o,.5,{seed:i.int(1,9999),damaged:!0}),c=t+i.range(-n+3,n-3),h=e+i.range(-n+3,n-3);l.position.set(c,0,h),l.rotation.y=i.range(0,Math.PI*2),this.root.add(l),this.addCollider(c,o/2,h,a/2,o/2,.32,l.rotation.y,"wall","concrete")}for(let s=0;s<i.int(6,12);s++){let a=so(this.mats,i,i.range(1.1,2.6));a.position.set(t+i.range(-n+2,n-2),0,e+i.range(-n+2,n-2)),a.rotation.y=i.range(0,6.28),this.root.add(a),this.addPropCollider(a,"concrete")}for(let s=0;s<i.int(2,5);s++){let a=io(this.mats,i);a.position.set(t+i.range(-n+2,n-2),0,e+i.range(-n+2,n-2)),a.rotation.y=i.range(0,6.28),this.root.add(a),this.addPropCollider(a,"wood")}this.scatterLotProps(t,e,n,i,[],12),this.spawnPoints.push({pos:new A(t,.1,e),weight:1.3})}buildYard(t,e,n,i){this.playerSpawn.set(t,.35,e);for(let a=0;a<8;a++){let o=a/8*Math.PI*2,l=mh(this.mats,i,i.range(2.4,4));l.position.set(t+Math.cos(o)*8.5,0,e+Math.sin(o)*8.5),l.rotation.y=-o+Math.PI/2,this.root.add(l),this.addPropCollider(l,"dirt")}for(let a=0;a<6;a++){let o=no(this.mats,i);o.position.set(t+i.range(-n+3,n-3),0,e+i.range(-n+3,n-3)),o.rotation.y=i.range(0,6.28),this.root.add(o),this.addPropCollider(o,"concrete")}for(let a=0;a<6;a++){let o=i.chance(.5)?eo(this.mats,i):xh(this.mats,i);o.position.set(t+i.range(-7,7),0,e+i.range(-7,7)),o.rotation.y=i.range(0,6.28),this.root.add(o),this.addPropCollider(o,"wood")}let s=[[t-3.4,e-2.4,"shotgun"],[t+3.4,e-2.4,"smg"],[t-3.4,e+2.4,"sniper"],[t+3.4,e+2.4,"pistol"]];this.weaponStands=[];for(let[a,o,l]of s){let c=Fd(this.mats);c.position.set(a,.1,o),this.root.add(c),this.weaponStands.push({obj:c,weapon:l,pos:new A(a,.1,o)}),this.animated.push(c)}for(let a=0;a<6;a++){let o=a/6*Math.PI*2+.4;this.pickupNodes.push({pos:new A(t+Math.cos(o)*11,.1,e+Math.sin(o)*11),kind:a%2===0?"ammo":"health"})}this.scatterLotProps(t,e,n,i,[{x:t,z:e,w:12,d:12}],6)}scatterLotProps(t,e,n,i,s,a){let o=(l,c,h=1.6)=>{for(let u of s)if(Math.abs(l-u.x)<u.w/2+h&&Math.abs(c-u.z)<u.d/2+h)return!1;return!0};for(let l=0;l<a;l++){let c=0,h=0,u=!1;for(let v=0;v<14;v++)if(c=t+i.range(-n+1.5,n-1.5),h=e+i.range(-n+1.5,n-1.5),o(c,h)){u=!0;break}if(!u)continue;let d=i.next(),f=null,g="metal";d<.18?(f=to(this.mats,i),g="metal"):d<.32?(f=eo(this.mats,i),g="wood"):d<.44?(f=gh(this.mats,i),g="metal"):d<.58?(f=Od(this.mats,i,i.range(2.8,4.2)),g="metal"):d<.68?(f=io(this.mats,i),g="wood"):d<.8?(f=so(this.mats,i,i.range(.9,1.9)),g="concrete"):d<.92?(f=vh(this.mats,i),g="dirt"):(f=no(this.mats,i),g="concrete"),f.position.set(c,0,h),f.rotation.y=i.range(0,Math.PI*2),this.root.add(f),this.addPropCollider(f,g)}}buildPerimeter(){let t=new ce(5150),e=88,n=6.2,i=11;for(let s of["x","z"])for(let a of[-1,1]){let o=Math.ceil(e*2/i);for(let l=0;l<o;l++){let c=-e+i*(l+.5);if(c<-e||c>e)continue;let h=s==="x"?c:a*e,u=s==="x"?a*e:c,d=s==="x"?0:Math.PI/2,f=t.chance(.55)?dh(this.mats,i+.4,n,.85,{seed:t.int(1,9999),coping:!0}):fh(this.mats,i+.4,n,.75,{seed:t.int(1,9999),damaged:t.chance(.35)});f.position.set(h,0,u),f.rotation.y=d,this.root.add(f);let g=s==="x"?(i+.4)/2:.5,v=s==="x"?.5:(i+.4)/2;if(this.addCollider(h,n/2,u,g,n/2,v,0,"wall","concrete"),l%2===0){let p=q(.9,n*.85,.9,.05,1);L(p,{pos:[0,n*.425,0]}),Y(p,1.4);let m=new Ct(p,this.mats.m.concreteDark);m.castShadow=m.receiveShadow=!0,m.position.set(h+(s==="x"?i/2:a*.8),0,u+(s==="x"?a*.8:i/2)),this.root.add(m)}}}for(let[s,a,o,l]of[[0,-e-3,e+6,3],[0,e+3,e+6,3],[-e-3,0,3,e+6],[e+3,0,3,e+6]])this.addCollider(s,30,a,o,30,l,0,"wall","concrete")}buildStreetProps(){let t=new ce(881),e=[[0,0,168,11,!0],[0,-46,168,9.5,!0],[0,46,168,9.5,!0],[0,0,168,11,!1],[-46,0,168,9.5,!1],[46,0,168,9.5,!1]];for(let[i,s,a,o,l]of e){let c=Math.round(a/16);for(let h=0;h<c;h++){if(t.chance(.35))continue;let u=-a/2+8+h*16+t.range(-3,3),d=t.sign()*t.range(1.4,o/2-1.3),f=l?i+u:i+d,g=l?s+d:s+u;if(Math.abs(f)>82||Math.abs(g)>82||Math.hypot(f-23,g-23)<15)continue;let v=ph(this.mats,t);v.position.set(f,0,g),v.rotation.y=(l?0:Math.PI/2)+(t.chance(.72)?t.range(-.2,.2):t.range(-1.4,1.4)),this.root.add(v),this.addPropCollider(v,"metal")}}let n=[[0,0],[0,-46],[0,46],[-46,0],[46,0],[-46,-46],[46,46],[-46,46],[46,-46]];for(let[i,s]of n)if(!t.chance(.4))for(let a=0,o=t.int(2,4);a<o;a++){let l=t.range(0,Math.PI*2),c=t.range(3.5,6.5),h=t.next(),u,d;h<.45?(u=no(this.mats,t),d="concrete"):h<.75?(u=mh(this.mats,t,t.range(2.2,3.6)),d="dirt"):(u=to(this.mats,t),d="metal"),u.position.set(i+Math.cos(l)*c,0,s+Math.sin(l)*c),u.rotation.y=-l,this.root.add(u),this.addPropCollider(u,d)}for(let i=0;i<90;i++){let s=t.chance(.5),a=t.pick([-46,0,46]),o=a===0?11:9.5,l=t.sign(),c=t.range(-80,80),h=l*(o/2+t.range(.8,2.4)),u=s?c:a+h,d=s?a+h:c;if(Math.abs(u)>84||Math.abs(d)>84||Math.hypot(u-23,d-23)<13)continue;let f=t.next(),g,v;f<.22?(g=to(this.mats,t),v="metal"):f<.38?(g=eo(this.mats,t),v="wood"):f<.5?(g=gh(this.mats,t),v="metal"):f<.62?(g=so(this.mats,t,t.range(.7,1.5)),v="concrete"):f<.82?(g=vh(this.mats,t),v="dirt"):(g=io(this.mats,t),v="wood"),g.position.set(u,0,d),g.rotation.y=t.range(0,Math.PI*2),this.root.add(g),this.addPropCollider(g,v)}for(let i=0;i<14;i++){let s=t.range(0,Math.PI*2),a=t.range(18,72);this.pickupNodes.push({pos:new A(Math.cos(s)*a,.1,Math.sin(s)*a),kind:t.chance(.55)?"ammo":"health"})}}buildDebris(){let t=new ce(2277),e={concrete:[],wood:[],rust:[]};for(let s=0;s<320;s++){let a=t.range(-82,82),o=t.range(-82,82),l=t.range(.06,.26),c=Yi(l,t.int(1,99999),0);L(c,{pos:[a,wi(a,o)+l*.45,o],rot:[t.range(0,6.28),t.range(0,6.28),t.range(0,6.28)]}),Y(c,.5);let h=t.next()<.6?"concrete":t.next()<.5?"wood":"rust";e[h].push(c)}for(let s of Object.keys(e)){if(!e[s].length)continue;let a=new Ct(at(e[s]),this.mats.m[s]);a.castShadow=!0,a.receiveShadow=!0,this.root.add(a)}let n=[];for(let s=0;s<180;s++){let a=t.range(-80,80),o=t.range(-80,80),l=t.range(.1,.34),c=t.range(.12,.42),h=Gn([[0,0],[l,t.range(-.03,.03)],[l*t.range(.8,1.05),c],[t.range(-.03,.03),c*t.range(.85,1)]],.008,{bevel:.001,bevelSeg:1});L(h,{pos:[a,wi(a,o)+.012,o],rot:[-Math.PI/2+t.range(-.08,.08),t.range(0,6.28),0]}),Y(h,.3),n.push(h)}let i=new Ct(at(n),this.mats.m.ragsWhite);i.castShadow=!1,i.receiveShadow=!0,this.root.add(i)}buildLighting(){let t=this.scene,e=new ce(4711),n=new Xi(16762778,2.15);n.position.set(.42*90,.3*90,-.86*90),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.camera.near=1,n.shadow.camera.far=260;let i=60;if(n.shadow.camera.left=-i,n.shadow.camera.right=i,n.shadow.camera.top=i,n.shadow.camera.bottom=-i,n.shadow.bias=-35e-5,n.shadow.normalBias=.028,t.add(n),t.add(n.target),this.sun=n,t.add(new Ta(9413565,3812642,.55)),t.add(new Ts(4213336,.3)),t.fog=new ha(4865332,.0104),this.game.skyMat){let o=new Ct(new ws(460,3),this.game.skyMat);o.frustumCulled=!1,o.renderOrder=-1,t.add(o),this.sky=o}let s=[];for(let o of[-46,0,46]){let l=o===0?11:9.5;for(let c=-72;c<=72;c+=24)s.push([c,o+(l/2+1.5),0]),s.push([c,o-(l/2+1.5),Math.PI]),s.push([o+(l/2+1.5),c,-Math.PI/2]),s.push([o-(l/2+1.5),c,Math.PI/2])}let a=0;for(let[o,l,c]of s){if(Math.abs(o)>82||Math.abs(l)>82||!e.chance(.4))continue;let h=a<24&&e.chance(.62);h&&a++;let u=Nd(this.mats,e,h);u.position.set(o,0,l),u.rotation.y=c+Math.PI,this.root.add(u),this.addPropCollider(u,"metal"),h&&u.userData.light&&(this.lamps.push(u),e.chance(.3)&&this.flickerLights.push({light:u.userData.light,lamp:u.userData.lamp,base:u.userData.light.intensity,seed:e.range(0,100),rate:e.range(5,18)}))}}buildSpawns(){let t=new ce(6060);for(let e=0;e<34;e++){let n=e/34*Math.PI*2+t.range(-.06,.06),i=t.range(38,78),s=new A(Math.cos(n)*i,.1,Math.sin(n)*i);Math.abs(s.x)>82||Math.abs(s.z)>82||this.spawnPoints.push({pos:s,weight:1})}for(let e of[-69,-23,23,69])for(let n of[-69,-23,23,69])e===23&&n===23||this.spawnPoints.push({pos:new A(e,.1,n),weight:.8})}bulletHole(t,e,n){if(!this.holes)return;let i=n==="metal"?.055+Math.random()*.04:n==="glass"?.1+Math.random()*.08:.075+Math.random()*.07;this.holes.add(t,e,i)}pickSpawn(t,e=22,n=72,i=!1){let s=null,a=-1e9;for(let c=0;c<26;c++){let h=this.spawnPoints[Math.random()*this.spawnPoints.length|0];if(!h||h.roof&&!i)continue;let u=h.pos.distanceTo(t);if(u<e||u>n)continue;let f=(!this.physics.visible(Gd.set(h.pos.x,h.pos.y+1.5,h.pos.z),Wd.set(t.x,t.y+1.6,t.z))?30:0)+(h.weight||1)*8-Math.abs(u-38)*.4+Math.random()*6;f>a&&(a=f,s=h)}if(!s){let c=null,h=-1;for(let u of this.spawnPoints){if(u.roof&&!i)continue;let d=u.pos.distanceTo(t);d>h&&(h=d,c=u)}s=c||this.spawnPoints[0]}let o=s.pos.clone();o.x+=(Math.random()-.5)*3.2,o.z+=(Math.random()-.5)*3.2;let l=this.physics.groundAt(o.x,o.y+2.5,o.z,6,.4);return o.y=l>-1e8?l+.05:Math.max(0,wi(o.x,o.z))+.05,o}update(t,e){for(let n of this.flickerLights){let i=Math.sin(e*n.rate+n.seed)*Math.sin(e*n.rate*2.7+n.seed*3.1),s=i>-.55;n.light.intensity=s?n.base*(.72+.28*Math.abs(i)):n.base*.06,n.lamp&&(n.lamp.material.emissiveIntensity=s?6.5:.4)}for(let n of this.animated)n.userData.ring&&(n.userData.ring.rotation.z=e*1.4,n.userData.ring.position.y=.03+Math.sin(e*2.2)*.05);if(this.sky&&this.game.camera&&this.sky.position.copy(this.game.camera.position),this.sun&&this.game.player){let n=this.game.player.pos;this.sun.position.set(n.x+.42*90,.3*90,n.z-.86*90),this.sun.target.position.set(n.x,0,n.z),this.sun.target.updateMatrixWorld()}}reset(){this.holes?.clear()}};var Ue=new A,Dn=new A,Xd=new A,Zi=new pe,fr=new jt,qd=new Ie,bh=new A(0,1,0),Kx=`
precision highp float;
attribute vec3 iPos;
attribute vec3 iVel;
attribute vec4 iData;   // x: life, y: maxLife, z: size, w: type
attribute vec4 iColor;
varying vec4 vColor;
varying vec2 vUv;
varying float vType;
varying float vAge;
uniform float uTime;

void main(){
  float life = iData.x;
  float maxLife = max(iData.y, 0.0001);
  float age = clamp(1.0 - life/maxLife, 0.0, 1.0);
  vAge = age;
  vType = iData.w;

  vec3 p = iPos;
  float size = iData.z;

  if(vType < 0.5)       size *= (1.0 - age*0.45);
  else if(vType < 1.5)  size *= (1.0 - age*0.85);
  else if(vType < 2.5)  size *= (1.0 + age*2.4);
  else if(vType < 3.5)  size *= (1.0 + age*3.2);
  else if(vType < 4.5)  size *= (1.0 - age*0.6)*(0.7+0.3*sin(uTime*40.0+iPos.x*10.0));
  else                  size *= (1.0 + age*1.6);

  vec4 mv = viewMatrix * vec4(p, 1.0);
  vec2 corner = position.xy;
  vUv = uv;

  if(vType < 1.5){
    vec3 vv = (viewMatrix * vec4(iVel, 0.0)).xyz;
    float sp = length(vv.xy);
    if(sp > 0.001){
      vec2 dir = normalize(vv.xy);
      vec2 perp = vec2(-dir.y, dir.x);
      float stretch = 1.0 + min(sp*0.22, 4.5);
      corner = dir * corner.y * stretch + perp * corner.x;
    }
  }
  mv.xy += corner * size;
  gl_Position = projectionMatrix * mv;
  vColor = iColor;
}
`,Jx=`
precision highp float;
varying vec4 vColor;
varying vec2 vUv;
varying float vType;
varying float vAge;

float h(vec2 p){ p=fract(p*vec2(443.9,441.4)); p+=dot(p,p+19.19); return fract(p.x*p.y); }

void main(){
  vec2 c = vUv*2.0-1.0;
  float r = length(c);
  if(r > 1.0) discard;

  float a = vColor.a;
  vec3 col = vColor.rgb;

  if(vType < 0.5){
    float core = smoothstep(1.0, 0.25, r);
    float rim = smoothstep(0.55, 1.0, r);
    col *= 1.0 - rim*0.55;
    col += vec3(0.35,0.10,0.08) * pow(max(0.0, 1.0 - length(c - vec2(-0.28,0.30))), 6.0);
    a *= core * (1.0 - vAge*0.35);
  } else if(vType < 1.5){
    float core = smoothstep(1.0, 0.0, r);
    col = mix(vec3(1.0,0.55,0.12), vec3(1.0,0.98,0.85), pow(core,3.0));
    col *= 1.0 + (1.0-vAge)*3.5;
    a *= core*(1.0-vAge*0.9);
  } else if(vType < 2.5){
    float n = h(floor(vUv*11.0)+vAge);
    a *= smoothstep(1.0, 0.05, r) * (0.6+0.4*n) * (1.0-vAge) * 0.75;
  } else if(vType < 3.5){
    float n = h(floor(vUv*22.0));
    a *= smoothstep(1.0, 0.1, r) * (1.0-vAge) * (0.35+0.65*n) * 0.8;
  } else if(vType < 4.5){
    float core = smoothstep(1.0, 0.0, r);
    col = mix(vec3(1.0,0.30,0.05), vec3(1.0,0.85,0.45), pow(core,2.0)) * 2.2;
    a *= core*(1.0-vAge*0.7);
  } else {
    float n = h(floor(vUv*8.0)+vAge*2.0);
    a *= smoothstep(1.0,0.05,r)*(1.0-vAge)*0.45*(0.6+0.4*n);
  }

  if(a < 0.004) discard;
  gl_FragColor = vec4(col, a);
}
`,_h=class{constructor(t,e=5200){this.max=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.data=new Float32Array(e*4),this.color=new Float32Array(e*4),this.drag=new Float32Array(e),this.grav=new Float32Array(e),this.free=[];for(let s=e-1;s>=0;s--)this.free.push(s);this.active=new Set;let n=new Ve(1,1),i=new Ra;i.index=n.index,i.attributes.position=n.attributes.position,i.attributes.uv=n.attributes.uv,i.setAttribute("iPos",new Fn(this.pos,3).setUsage(bi)),i.setAttribute("iVel",new Fn(this.vel,3).setUsage(bi)),i.setAttribute("iData",new Fn(this.data,4).setUsage(bi)),i.setAttribute("iColor",new Fn(this.color,4).setUsage(bi)),i.instanceCount=0,i.boundingSphere=new In(new A,1e6),this.mat=new re({vertexShader:Kx,fragmentShader:Jx,uniforms:{uTime:{value:0}},transparent:!0,depthWrite:!1,depthTest:!0,blending:hi,side:Ee}),this.mesh=new Ct(i,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=8,t.add(this.mesh),this.geo=i,this.highWater=0}spawn(t,e,n){let i=this.free.pop();if(i===void 0)return-1;this.active.add(i),this.pos[i*3]=t.x,this.pos[i*3+1]=t.y,this.pos[i*3+2]=t.z,this.vel[i*3]=e.x,this.vel[i*3+1]=e.y,this.vel[i*3+2]=e.z;let s=n.life??1;this.data[i*4]=s,this.data[i*4+1]=s,this.data[i*4+2]=n.size??.05,this.data[i*4+3]=n.type??0;let a=n.color||[.5,.02,.02];return this.color[i*4]=a[0],this.color[i*4+1]=a[1],this.color[i*4+2]=a[2],this.color[i*4+3]=n.alpha??1,this.drag[i]=n.drag??.6,this.grav[i]=n.gravity??-18,i+1>this.highWater&&(this.highWater=i+1),i}update(t,e,n,i){this.mat.uniforms.uTime.value=e;let s=[],a=Array.from(this.active);for(let o=0;o<a.length;o++){let l=a[o],c=this.data[l*4]-t;if(c<=0){s.push(l);continue}this.data[l*4]=c;let h=l*3,u=this.vel[h],d=this.vel[h+1],f=this.vel[h+2];d+=this.grav[l]*t;let g=Math.pow(1-this.drag[l],t*3);u*=g,d*=g,f*=g;let v=this.pos[h]+u*t,p=this.pos[h+1]+d*t,m=this.pos[h+2]+f*t;if(this.data[l*4+3]<.5&&n&&d<0&&p<1.6){let M=n.groundAt(v,this.pos[h+1]+.1,m,Math.max(.4,Math.abs(d)*t+.25),.05);if(M>-1e8&&p<=M+.02){Math.random()<.5&&i?.bloodPool(Ue.set(v,M,m),.1+Math.random()*.22,1,!0),s.push(l);continue}}this.pos[h]=v,this.pos[h+1]=p,this.pos[h+2]=m,this.vel[h]=u,this.vel[h+1]=d,this.vel[h+2]=f}for(let o=0;o<s.length;o++){let l=s[o];this.active.delete(l),this.free.push(l),this.data[l*4+2]=0,this.color[l*4+3]=0}if(s.length>64){let o=0;for(let l of this.active)l>o&&(o=l);this.highWater=o+1}this.geo.instanceCount=this.highWater,this.geo.attributes.iPos.needsUpdate=!0,this.geo.attributes.iVel.needsUpdate=!0,this.geo.attributes.iData.needsUpdate=!0,this.geo.attributes.iColor.needsUpdate=!0}clear(){for(let t of[...this.active])this.active.delete(t),this.free.push(t),this.data[t*4+2]=0,this.color[t*4+3]=0}},ao=class{constructor(t,e,n=420){this.groups=e.map(i=>{let s=new Ve(1,1,1,1),a=new Fi(s,i,n);return a.instanceMatrix.setUsage(bi),a.count=0,a.frustumCulled=!1,a.receiveShadow=!1,a.castShadow=!1,a.renderOrder=2,t.add(a),{mesh:a,next:0,cap:n}}),this.total=0}add(t,e,n,i=!0){let s=this.groups[Math.random()*this.groups.length|0],a=s.next%s.cap;s.next++,s.mesh.count<s.cap&&(s.mesh.count=Math.min(s.cap,s.next)),Zi.setFromUnitVectors(new A(0,0,1),e),i&&Zi.multiply(new pe().setFromAxisAngle(new A(0,0,1),Math.random()*Math.PI*2));let o=new A(n*(.85+Math.random()*.3),n*(.85+Math.random()*.3),1);fr.compose(Ue.copy(t).addScaledVector(e,.012+Math.random()*.01),Zi,o),s.mesh.setMatrixAt(a,fr),s.mesh.instanceMatrix.needsUpdate=!0,this.total++}clear(){for(let t of this.groups)t.mesh.count=0,t.next=0;this.total=0}},oo=class{constructor(t){this.game=t,this.scene=t.scene,this.mats=t.mats,this.rng=new ce(4242),this.particles=new _h(this.scene,5200),this.decals=new ao(this.scene,this.mats.bloodMats,340),this.pools=new ao(this.scene,this.mats.bloodMats,300),this.flashGroup=new ht,this.flashGroup.visible=!1,this.flashStar=new Ct(this.makeFlashStar(),this.mats.m.muzzle.clone()),this.flashGroup.add(this.flashStar);let e=new xa(.055,.32,14,3,!0);e.rotateX(Math.PI/2),e.translate(0,0,.16),this.flashCone=new Ct(e,new Le({color:16767120,transparent:!0,opacity:.85,blending:qe,depthWrite:!1,side:Ee})),this.flashGroup.add(this.flashCone),this.flashLight=new xn(16760944,0,14,2),this.flashGroup.add(this.flashLight),this.scene.add(this.flashGroup),this.flashT=0,this.flashScale=1;let n=new Ve(1,1);n.translate(0,.5,0),this.tracerMat=new Le({color:16765040,transparent:!0,opacity:.9,blending:qe,depthWrite:!1,side:Ee}),this.tracerMesh=new Fi(n,this.tracerMat,96),this.tracerMesh.count=96,this.tracerMesh.frustumCulled=!1,this.tracerMesh.renderOrder=7,this.scene.add(this.tracerMesh);let i=new jt().makeScale(0,0,0);for(let s=0;s<96;s++)this.tracerMesh.setMatrixAt(s,i);this.tracerMesh.instanceMatrix.needsUpdate=!0,this.tracerPool=[];for(let s=0;s<96;s++)this.tracerPool.push({idx:s,active:!1,t:0,life:0});this.debris=[],this.gibGeos=this.makeGibGeometries(),this.casingGeo=this.makeCasing(),this.geysers=[],this.impactLight=new xn(16752720,0,6,2),this.impactLight.visible=!1,this.scene.add(this.impactLight),this.impactT=0,this.explosionLights=[];for(let s=0;s<3;s++){let a=new xn(16736288,0,20,2);a.visible=!1,this.scene.add(a),this.explosionLights.push({light:a,t:0})}}makeFlashStar(){let t=[];for(let n=0;n<7*2;n++){let i=n/14*Math.PI*2,s=n%2===0?.16:.055+Math.random()*.02;t.push(new X(Math.cos(i)*s,Math.sin(i)*s))}return new ba(new xi(t),3)}makeGibGeometries(){let t={head:[],arm:[],leg:[],chunk:[],bone:[]},e=new ce(917);for(let n=0;n<4;n++){let i=ge(.075,[[0,.5,1,.014,2],[e.range(-1,1),0,0,.01,2]],{seg:14,seed:e.int(1,999),noiseAmp:.006});i.scale(1,.9,.95),t.head.push(Y(i,.09)),t.arm.push(ut(Ft([[0,0],[.036,.01],[.03,.11],[.02,.19],[0,.2]],12),.1)),t.leg.push(ut(Ft([[0,0],[.05,.014],[.042,.15],[.026,.28],[0,.29]],14),.12));let s=ge(e.range(.03,.062),[[e.range(-1,1),e.range(-1,1),e.range(-1,1),.016,2]],{seg:12,seed:e.int(1,999),noiseAmp:.01});t.chunk.push(Y(s,.06)),t.bone.push(ut(Ft([[0,0],[.012,.006],[.009,.07],[.014,.09],[0,.098]],8),.05))}return t}makeCasing(){return ut(Ft([[0,0],[.0043,6e-4],[.0045,.004],[.0043,.026],[.004,.03],[.0032,.0315],[0,.032]],12),.02)}muzzleFlash(t,e,n=1,i=!1){this.flashGroup.position.copy(t),this.flashGroup.lookAt(Ue.copy(t).add(e)),this.flashGroup.visible=!0,this.flashT=i?.028:.055,this.flashMax=this.flashT,this.flashScale=n*(i?.45:1),this.flashStar.rotation.z=Math.random()*Math.PI*2,this.flashLight.intensity=i?5:22*n,this.flashLight.distance=i?6:14;let s=i?3:7;for(let a=0;a<s;a++)this.particles.spawn(t,Ue.copy(e).multiplyScalar(this.rng.range(1.2,4.5)).add(Dn.set(this.rng.gauss(0,.5),this.rng.gauss(0,.5),this.rng.gauss(0,.5))),{life:this.rng.range(.35,.85),size:this.rng.range(.045,.11),type:2,color:[.3,.28,.26],alpha:.45,drag:.85,gravity:1});if(!i)for(let a=0;a<6;a++)this.particles.spawn(t,Ue.copy(e).multiplyScalar(this.rng.range(2,8)).add(Dn.set(this.rng.gauss(0,1.5),this.rng.gauss(0,1.5),this.rng.gauss(0,1.5))),{life:this.rng.range(.1,.3),size:this.rng.range(.012,.03),type:1,color:[1,.6,.2],alpha:1,drag:.5,gravity:-12})}tracer(t,e,n=.014,i=.055){let s=this.tracerPool.find(l=>!l.active);if(!s)return;let a=Ue.subVectors(e,t),o=a.length();o<.01||(s.active=!0,s.t=0,s.life=i,Zi.setFromUnitVectors(bh,a.normalize()),fr.compose(t,Zi,Dn.set(n,o,n)),this.tracerMesh.setMatrixAt(s.idx,fr),this.tracerMesh.instanceMatrix.needsUpdate=!0)}ejectCasing(t,e,n){this.debris.length>200&&this.removeOldestDebris();let i=new kn(this.game.physics);i.friction=.55,i.restitution=.42,i.damping=.985;let s=i.particle(t.x,t.y,t.z,.012,.6),a=Ue.copy(e).multiplyScalar(this.rng.range(1.6,3)).addScaledVector(n,this.rng.range(1.2,2.4)).add(Dn.set(this.rng.gauss(0,.4),0,this.rng.gauss(0,.4)));s.prev.copy(s.p).addScaledVector(a,-1/60);let o=new Ct(this.casingGeo,this.mats.m.brass);this.scene.add(o),this.debris.push({body:i,mesh:o,spin:new A(this.rng.range(-18,18),this.rng.range(-18,18),this.rng.range(-18,18)),quat:new pe().random(),life:14,kind:"casing"})}bloodSpray(t,e,n=14,i=1){let s=this.game.settings.goreAmount;if(s<=0)return;let a=Math.round(n*s);for(let o=0;o<a;o++){let l=Ue.copy(e).multiplyScalar(this.rng.range(1.5,8.5)*i).add(Dn.set(this.rng.gauss(0,1.95),this.rng.gauss(0,1.65)+1.2,this.rng.gauss(0,1.95))),c=this.rng.range(.55,1);this.particles.spawn(t,l,{life:this.rng.range(.7,2),size:this.rng.range(.014,.055)*i,type:0,color:[.34*c,.02*c,.016*c],alpha:1,drag:.22,gravity:-20})}if(i>1.1)for(let o=0;o<Math.round(3*s);o++)this.gibChunk(t,Ue.copy(e).add(Dn.set(this.rng.gauss(0,.6),this.rng.range(.2,1),this.rng.gauss(0,.6))),"chunk",1)}bloodMist(t,e){let n=this.game.settings.goreAmount;if(n<=0)return;let i=Math.round(9*n);for(let s=0;s<i;s++)this.particles.spawn(t,Ue.copy(e).multiplyScalar(this.rng.range(.6,3.2)).add(Dn.set(this.rng.gauss(0,1.1),this.rng.gauss(0,.9)+.4,this.rng.gauss(0,1.1))),{life:this.rng.range(.25,.65),size:this.rng.range(.05,.16),type:3,color:[.42,.045,.035],alpha:.55,drag:.9,gravity:-3})}bloodDecal(t,e,n){this.game.settings.goreAmount<=0||this.decals.add(t,e,n*this.rng.range(.8,1.35))}bloodPool(t,e,n=1,i=!1){this.game.settings.goreAmount<=0||this.pools.add(t,bh,e*n*(i?1:this.rng.range(.9,1.3)))}attachGeyser(t,e){this.geysers.push({joint:t,power:e,t:0,life:4.5+Math.random()*3})}gibChunk(t,e,n="chunk",i=1){if(this.game.settings.goreAmount<=0)return;this.debris.length>190&&this.removeOldestDebris();let s=this.gibGeos[n]||this.gibGeos.chunk,a=s[Math.random()*s.length|0],o=n==="bone"?this.mats.m.bone:this.mats.m.gore,l=new Ct(a,o);l.scale.setScalar(i),l.castShadow=!0,this.scene.add(l);let c=new kn(this.game.physics);c.friction=.72,c.restitution=.14,c.damping=.982;let h=(n==="head"?.085:n==="chunk"?.045:.07)*i,u=c.particle(t.x,t.y,t.z,h,1.2),d=Ue.copy(e).normalize().multiplyScalar(this.rng.range(2.2,7)).add(Dn.set(this.rng.gauss(0,1.2),this.rng.range(1,3.5),this.rng.gauss(0,1.2)));u.prev.copy(u.p).addScaledVector(d,-1/60),this.debris.push({body:c,mesh:l,spin:new A(this.rng.range(-14,14),this.rng.range(-14,14),this.rng.range(-14,14)),quat:new pe().random(),life:30,trail:n!=="casing",kind:n})}goreExplosion(t,e=1){let n=this.game.settings.goreAmount;for(let o=0;o<Math.round(16*n);o++){let l=Ue.set(this.rng.gauss(0,1),this.rng.range(.1,1.4),this.rng.gauss(0,1)).normalize();this.gibChunk(t,l,this.rng.chance(.25)?"bone":"chunk",e*this.rng.range(.7,1.3))}this.bloodSpray(t,bh,80,1.9);for(let o=0;o<8;o++){let l=Math.random()*Math.PI*2;this.bloodSpray(t,Ue.set(Math.cos(l),this.rng.range(-.2,.5),Math.sin(l)).normalize(),20,1.5)}let i=this.game.physics.groundAt(t.x,t.y,t.z,4,.3),s=i>-1e8?i:0;for(let o=0;o<14;o++){let l=Math.random()*Math.PI*2,c=Math.random()*3.4*e;this.bloodPool(new A(t.x+Math.cos(l)*c,s,t.z+Math.sin(l)*c),.6+Math.random()*1.5,e)}let a=this.explosionLights.find(o=>!o.light.visible)||this.explosionLights[0];a.light.position.copy(t),a.light.color.setHex(16724e3),a.light.intensity=26,a.light.visible=!0,a.t=.22,this.game.shake(.75,.35)}impact(t,e,n="concrete"){let i={concrete:{sparks:2,dust:12,color:[.55,.53,.5],chips:3},metal:{sparks:16,dust:4,color:[.45,.45,.47],chips:1},wood:{sparks:1,dust:9,color:[.34,.22,.12],chips:4},dirt:{sparks:0,dust:18,color:[.3,.22,.14],chips:2},glass:{sparks:8,dust:6,color:[.6,.68,.7],chips:5},flesh:{sparks:0,dust:0,color:[.35,.03,.02],chips:0}}[n]||{sparks:3,dust:10,color:[.5,.5,.5],chips:2};for(let s=0;s<i.sparks;s++)this.particles.spawn(t,Ue.copy(e).multiplyScalar(this.rng.range(2,7)).add(Dn.set(this.rng.gauss(0,2.6),this.rng.gauss(0,2.6),this.rng.gauss(0,2.6))),{life:this.rng.range(.15,.55),size:this.rng.range(.01,.028),type:1,color:[1,.65,.2],alpha:1,drag:.35,gravity:-22});for(let s=0;s<i.dust;s++)this.particles.spawn(t,Ue.copy(e).multiplyScalar(this.rng.range(.5,2.6)).add(Dn.set(this.rng.gauss(0,.9),this.rng.gauss(0,.9)+.3,this.rng.gauss(0,.9))),{life:this.rng.range(.4,1.3),size:this.rng.range(.04,.16),type:5,color:i.color,alpha:.5,drag:.88,gravity:-1.5});for(let s=0;s<i.chips&&!(this.debris.length>210);s++){let a=new kn(this.game.physics);a.friction=.7,a.restitution=.3;let o=this.rng.range(.012,.032),l=a.particle(t.x,t.y,t.z,o,.5),c=Ue.copy(e).multiplyScalar(this.rng.range(1.5,5)).add(Dn.set(this.rng.gauss(0,1.4),this.rng.range(.5,2.5),this.rng.gauss(0,1.4)));l.prev.copy(l.p).addScaledVector(c,-1/60);let h=n==="wood"?this.mats.m.wood:n==="metal"?this.mats.m.rust:this.mats.m.concrete,u=new Ct(Yi(o*1.4,this.rng.int(1,999),0),h);this.scene.add(u),this.debris.push({body:a,mesh:u,spin:new A(this.rng.range(-20,20),this.rng.range(-20,20),this.rng.range(-20,20)),quat:new pe().random(),life:12,kind:"chip",ownGeo:!0})}i.sparks>6&&(this.impactLight.position.copy(t),this.impactLight.intensity=6,this.impactLight.visible=!0,this.impactT=.08),n!=="flesh"&&Math.random()<.9&&this.game.world?.bulletHole?.(t,e,n)}removeOldestDebris(){let t=this.debris.shift();t&&(this.scene.remove(t.mesh),t.ownGeo&&t.mesh.geometry.dispose())}update(t,e){if(this.particles.update(t,e,this.game.physics,this),this.flashT>0){this.flashT-=t;let s=Math.max(0,this.flashT/(this.flashMax||.055)),a=this.flashScale*(.6+s*.9);this.flashStar.scale.setScalar(a*(.8+Math.random()*.5)),this.flashCone.scale.set(a,a,a*(.7+Math.random()*.6)),this.flashStar.material.opacity=s,this.flashCone.material.opacity=s*.8,this.flashLight.intensity*=.72,this.flashT<=0&&(this.flashGroup.visible=!1,this.flashLight.intensity=0)}this.impactT>0&&(this.impactT-=t,this.impactLight.intensity*=.62,this.impactT<=0&&(this.impactLight.visible=!1,this.impactLight.intensity=0));for(let s of this.explosionLights)s.light.visible&&(s.t-=t,s.light.intensity*=.8,s.t<=0&&(s.light.visible=!1,s.light.intensity=0));let n=fr.makeScale(0,0,0),i=!1;for(let s of this.tracerPool)s.active&&(s.t+=t,s.t>=s.life&&(s.active=!1,this.tracerMesh.setMatrixAt(s.idx,n),i=!0));i&&(this.tracerMesh.instanceMatrix.needsUpdate=!0);for(let s=this.debris.length-1;s>=0;s--){let a=this.debris[s];if(a.life-=t,a.body.sleeping){if(a.trail&&!a.pooled){a.pooled=!0;let o=a.body.parts[0],l=this.game.physics.groundAt(o.p.x,o.p.y+.3,o.p.z,1,.1);l>-1e8&&this.bloodPool(Ue.set(o.p.x,l,o.p.z),.3+Math.random()*.5)}}else{let o=t>.024?2:1,l=t/o;for(let d=0;d<o;d++)a.body.step(l,3);let c=a.body.parts[0];a.mesh.position.copy(c.p);let h=c.vel.length(),u=Math.min(1,h*22);if(qd.set(a.spin.x*t*u,a.spin.y*t*u,a.spin.z*t*u),Zi.setFromEuler(qd),a.quat.multiply(Zi),a.mesh.quaternion.copy(a.quat),a.trail&&h>.02&&Math.random()<.5&&this.particles.spawn(c.p,Ue.set(this.rng.gauss(0,.4),this.rng.gauss(0,.3),this.rng.gauss(0,.4)),{life:this.rng.range(.3,.9),size:this.rng.range(.012,.03),type:0,color:[.3,.018,.014],alpha:1,drag:.3,gravity:-19}),a.body.sleeping&&a.trail&&!a.pooled){a.pooled=!0;let d=this.game.physics.groundAt(c.p.x,c.p.y+.3,c.p.z,1,.1);d>-1e8&&this.bloodPool(Ue.set(c.p.x,d,c.p.z),.3+Math.random()*.5)}}a.life<=0&&(this.scene.remove(a.mesh),a.ownGeo&&a.mesh.geometry.dispose(),this.debris.splice(s,1))}for(let s=this.geysers.length-1;s>=0;s--){let a=this.geysers[s];if(a.t+=t,a.life-=t,a.life<=0||!a.joint.parent){this.geysers.splice(s,1);continue}a.joint.getWorldPosition(Xd);let o=.55+.45*Math.sin(a.t*9.5),l=Math.round(3*o*this.game.settings.goreAmount);for(let c=0;c<l;c++)this.particles.spawn(Xd,Ue.set(this.rng.gauss(0,1.2),this.rng.range(1.5,4.5)*a.power*o,this.rng.gauss(0,1.2)),{life:this.rng.range(.5,1.3),size:this.rng.range(.014,.04),type:0,color:[.36,.022,.018],alpha:1,drag:.25,gravity:-20})}}clear(){for(let t of this.debris)this.scene.remove(t.mesh),t.ownGeo&&t.mesh.geometry.dispose();this.debris.length=0,this.geysers.length=0,this.decals.clear(),this.pools.clear(),this.particles.clear()}};var vt=(r,t)=>{let e=new Ct(t,r);return e.castShadow=!1,e.receiveShadow=!1,e};function Sh(r,t,e=8,n=.0025,i=28){let s=Vn(r,r,t,i,r*.15),a=s.attributes.position,o=new A;for(let l=0;l<a.count;l++){if(o.fromBufferAttribute(a,l),Math.hypot(o.x,o.z)<r*.6)continue;let h=Math.atan2(o.z,o.x),u=Math.cos(h*e),d=1-Math.max(0,u)*n/r;o.x*=d,o.z*=d,a.setXYZ(l,o.x,o.y,o.z)}return a.needsUpdate=!0,s.computeVertexNormals(),s.rotateX(Math.PI/2),s}function Yd(r,t){let e=[],n=Ft([[0,-t/2],[r*1.05,-t/2],[r*1.15,-t/2+.004],[r*1.15,t/2-.01],[r*1.28,t/2-.008],[r*1.28,t/2-.002],[r*.62,t/2],[0,t/2]],24);e.push(n);for(let s=0;s<3;s++)for(let a of[-1,1]){let o=ne(r*1.2,.0035,16,6,Math.PI*.5);L(o,{pos:[0,-t*.2+s*t*.22,0],rot:[Math.PI/2,0,a*Math.PI/2]}),e.push(o)}let i=at(e);return i.rotateX(Math.PI/2),i}function wh(r,t=.021,e=10){let n=[],i=q(t,.007,r,.0015,1);n.push(i);for(let s=0;s<e;s++){let a=-r/2+(s+.5)*(r/e),o=q(t*.92,.0055,r/e*.52,.0012,1),l=o.attributes.position;for(let c=0;c<l.count;c++)l.getY(c)>0&&l.setX(c,l.getX(c)*.78);l.needsUpdate=!0,o.computeVertexNormals(),L(o,{pos:[0,.006,a]}),n.push(o)}return at(n)}function Eh(r,t,e,n=.16,i){let s=[];for(let l=0;l<8;l++){let c=l/7,h=-t/2+c*t,u=Math.pow(c,1.5)*n,d=1-c*.06,f=q(r*d,t/8*1.35,e*d,.0035,1);L(f,{pos:[0,h,u*e],rot:[-u*1.2,0,0]}),s.push(f)}let o=q(r*1.06,.008,e*1.05,.002,1);L(o,{pos:[0,-t/2-.004,0]}),s.push(o);for(let l=0;l<4;l++){let c=ne(.0055,.0012,12,6);L(c,{pos:[r/2*.99,-t*.3+l*t*.17,.004],rot:[0,Math.PI/2,0]}),s.push(c)}return at(s)}function lo(r,t){let e=[];for(let i=0;i<10;i++){let s=i/9,a=-r*s,o=.03-s*.004+Math.sin(s*Math.PI)*.003,l=.038-s*.01,c=q(o,r/10*1.4,l,.005,1);L(c,{pos:[0,a,s*.02],rot:[.3,0,0]}),e.push(c)}for(let i=0;i<3;i++){let s=ne(.017,.0035,14,6,Math.PI);L(s,{pos:[0,-r*(.22+i*.22),.006+i*.006],rot:[Math.PI/2+.3,0,Math.PI/2]}),e.push(s)}return at(e)}function Zd(r,t,e){let n=new ht,i=Ft([[0,-.052],[.0175,-.052],[.0185,-.048],[.0155,-.03],[.0155,.024],[.0195,.03],[.0205,.046],[.0195,.052],[0,.052]],28);i.rotateX(Math.PI/2),n.add(vt(r,ut(i,.06)));for(let[u,d]of[[[0,0,0],[0,.02,0]],[[0,0,Math.PI/2],[.02,0,0]]]){let f=Ft([[0,0],[.008,0],[.0095,.003],[.0095,.014],[.007,.017],[0,.017]],16);L(f,{pos:d,rot:u}),n.add(vt(e,ut(f,.03)))}let s=q(.024,.026,.052,.003,1);L(s,{pos:[0,-.022,.004]}),n.add(vt(r,Y(s,.08)));let a=q(.03,.008,.02,.002,1);L(a,{pos:[0,-.034,.004]}),n.add(vt(e,Y(a,.06)));for(let[u,d,f]of[[.05,.0155,1717584],[-.049,.0135,1056816]]){let g=new je(d,20,10,0,Math.PI*2,0,Math.PI*.32),v=new vn({color:f,roughness:.04,metalness:.15,transmission:.35,thickness:.01,ior:1.52,iridescence:.85,iridescenceIOR:1.9,iridescenceThicknessRange:[180,520],clearcoat:1,clearcoatRoughness:.02,envMapIntensity:2}),p=new Ct(g,v);p.position.z=u,p.rotation.x=u>0?-Math.PI/2:Math.PI/2,n.add(p)}let o=new Le({color:16722456,transparent:!0,opacity:.95,blending:qe,depthWrite:!1}),l=new Ct(new je(.0011,8,6),o);l.position.z=-.03,n.add(l);let c=at([L(q(9e-4,.01,4e-4,2e-4,0),{pos:[0,0,0]}),L(q(.01,9e-4,4e-4,2e-4,0),{pos:[0,0,0]})]),h=new Ct(c,o);return h.position.z=-.031,n.add(h),n}function Qx(r){let t=new ht,e=Ft([[.01,0],[.013,0],[.013,.026],[.01,.026]],16,0,Math.PI*1.35);L(e,{rot:[0,-Math.PI*.17,0]}),t.add(vt(r,ut(e,.04)));let n=q(.0028,.02,.0028,6e-4,0);return L(n,{pos:[0,.01,0]}),t.add(vt(r,Y(n,.03))),t}function $x(r){let t=new ht;t.name="rifle";let e=r.m.gunmetal,n=r.m.polymer,i=r.m.polymerTan,s=r.m.chrome,a=r.m.rubber,o=[],l=q(.038,.048,.235,.005,2);o.push(l);let c=Vn(.007,.008,.02,12,.002);L(c,{pos:[.018,.008,-.098],rot:[Math.PI/2,0,0]}),o.push(c);let h=ge(.014,[[1,.4,0,.006,2]],{seg:14,seed:3,noiseAmp:5e-4});L(h,{pos:[.019,.002,-.082],scale:[.7,.9,1.3]}),o.push(h);let u=at(o);Y(u,.09);let d=vt(e,u);t.add(d);let f=q(.004,.02,.044,.0012,1);L(f,{pos:[.02,.004,-.055]}),t.add(vt(e,Y(f,.05)));let g=wh(.215,.022,12);L(g,{pos:[0,.027,-.012]}),t.add(vt(e,Y(g,.06)));let v=[],p=q(.034,.04,.15,.005,2);L(p,{pos:[0,-.04,-.036]}),v.push(p);let m=q(.036,.048,.052,.004,2);L(m,{pos:[0,-.056,-.02]}),v.push(m);let y=ne(.019,.0042,18,8,Math.PI*1.15);L(y,{pos:[0,-.062,-.072],rot:[0,Math.PI/2,Math.PI*.42]}),v.push(y);let M=at(v);Y(M,.09),t.add(vt(n,M));let x=Eh(.028,.135,.044,.22);L(x,{pos:[0,-.13,-.014],rot:[.06,0,0]});let T=vt(i,Y(x,.08));T.name="magazine",t.add(T);let _=lo(.098);L(_,{pos:[0,-.062,-.1],rot:[-.22,0,0]}),t.add(vt(n,Y(_,.07)));let w=Gn([[0,0],[.01,-.002],[.012,-.016],[.008,-.024],[.002,-.022],[.001,-.01]],.0055,{bevel:8e-4});L(w,{pos:[0,-.056,-.076],rot:[0,Math.PI/2,0]}),t.add(vt(s,Y(w,.03)));let C=[],D=Ft([[.0225,-.13],[.025,-.126],[.025,.116],[.0225,.122],[.018,.122]],20);D.rotateX(Math.PI/2),C.push(D);for(let kt=0;kt<9;kt++){let $=ne(.0255,.0022,20,6);L($,{pos:[0,0,-.115+kt*.028]}),C.push($)}for(let kt of[0,Math.PI/2,Math.PI,-Math.PI/2])for(let $=0;$<4;$++){let I=q(.01,.0035,.026,8e-4,1);L(I,{pos:[Math.cos(kt)*.0245,Math.sin(kt)*.0245,-.095+$*.056],rot:[0,0,kt]}),C.push(I)}let b=at(C);L(b,{pos:[0,.002,.128]}),t.add(vt(e,ut(b,.1)));let S=Sh(.0085,.3,10,.002);L(S,{pos:[0,.002,.255]}),t.add(vt(e,ut(S,.06)));let U=q(.02,.024,.03,.003,1);L(U,{pos:[0,.006,.252]}),t.add(vt(e,Y(U,.05)));let z=Vn(.0028,.0028,.24,10,.001);L(z,{pos:[0,.016,.135],rot:[Math.PI/2,0,0]}),t.add(vt(s,ut(z,.04)));let k=Yd(.0105,.055);L(k,{pos:[0,.002,.41]});let j=vt(e,ut(k,.05));j.name="muzzleDevice",t.add(j);let F=[];F.push(L(q(.03,.01,.014,.002,1),{pos:[0,0,0]})),F.push(L(q(.01,.008,.055,.0018,1),{pos:[.014,0,.03]}));let tt=at(F);L(tt,{pos:[0,.02,-.128]});let G=vt(e,Y(tt,.05));G.name="chargingHandle",t.add(G);let dt=Ft([[0,0],[.0155,0],[.0165,.006],[.0165,.15],[.0155,.156],[0,.156]],18);L(dt,{pos:[0,-.01,-.15],rot:[Math.PI/2,0,0]}),t.add(vt(e,ut(dt,.06)));let lt=[];lt.push(L(q(.042,.052,.09,.008,2),{pos:[0,0,0]})),lt.push(L(q(.036,.03,.05,.006,1),{pos:[0,.028,-.02]}));let it=ne(.008,.0022,14,6);L(it,{pos:[.02,-.014,.03],rot:[0,Math.PI/2,0]}),lt.push(it);let Nt=at(lt);L(Nt,{pos:[0,-.014,-.23]}),t.add(vt(n,Y(Nt,.1)));let Zt=q(.04,.056,.02,.006,2);L(Zt,{pos:[0,-.014,-.282]}),t.add(vt(a,Y(Zt,.05)));let K=Zd(n,null,e);K.position.set(0,.052,-.01),t.add(K);let st=Qx(e);st.position.set(0,.03,.23),t.add(st);let St=[];St.push(L(Ft([[0,0],[.0125,0],[.0135,-.006],[.0125,-.055],[.0105,-.062],[0,-.062]],16),{pos:[0,0,0]}));for(let kt=0;kt<4;kt++)St.push(L(ne(.0132,.0018,16,6),{pos:[0,-.012-kt*.013,0]}));let pt=at(St);L(pt,{pos:[0,-.024,.185]}),t.add(vt(n,ut(pt,.05)));let Vt=q(.02,.018,.056,.003,1);L(Vt,{pos:[-.026,.006,.18]}),t.add(vt(e,Y(Vt,.05)));let Ht=Vn(.0065,.0065,.004,14,.001);L(Ht,{pos:[-.026,.006,.209],rot:[Math.PI/2,0,0]}),t.add(new Ct(ut(Ht,.02),r.m.neonRed));let Xt=Jt([[.02,-.026,-.2],[.035,-.1,-.12],[.03,-.16,.02],[.012,-.07,.16]],.006,26,8);return t.add(vt(r.m.rags,ut(Xt,.08))),t.traverse(kt=>{kt.isMesh&&(kt.frustumCulled=!1,kt.renderOrder=3)}),{group:t,muzzleLocal:new A(0,.004,.442),ejectLocal:new A(.024,.006,-.055),magMesh:T,chgMesh:G,stats:{name:"MK-7 CARBINE",dmg:27,headMul:3.1,rpm:720,mag:30,reserve:240,spread:.0075,adsSpread:.0022,recoil:.0105,kick:.03,auto:!0,reloadTime:2.05,adsFov:47,pellets:1,range:140,penetration:1}}}function t1(r){let t=new ht;t.name="shotgun";let e=r.m.gunmetal,n=r.m.woodDark,i=r.m.rubber,s=r.m.chrome,a=[];a.push(q(.042,.052,.185,.006,2)),a.push(L(q(.046,.026,.07,.004,1),{pos:[0,-.02,-.03]}));let o=at(a);t.add(vt(e,Y(o,.1)));let l=Ft([[0,-.19],[.0155,-.19],[.0165,-.184],[.015,.15],[.0165,.176],[.0155,.19],[0,.19]],24);l.rotateX(Math.PI/2),L(l,{pos:[0,.006,.29]}),t.add(vt(e,ut(l,.07)));let c=q(.012,.01,.36,.002,1);L(c,{pos:[0,.024,.28]}),t.add(vt(e,Y(c,.06)));for(let _=0;_<8;_++){let w=q(.014,.005,.016,.001,0);L(w,{pos:[0,.026,.15+_*.036]}),t.add(vt(e,Y(w,.04)))}let h=Ft([[0,-.16],[.0115,-.16],[.0125,-.154],[.0125,.154],[.0115,.16],[0,.16]],18);h.rotateX(Math.PI/2),L(h,{pos:[0,-.02,.26]}),t.add(vt(e,ut(h,.06)));let u=Ft([[0,0],[.014,0],[.015,.004],[.013,.016],[0,.018]],16);L(u,{pos:[0,-.02,.42],rot:[Math.PI/2,0,0]}),t.add(vt(s,ut(u,.03)));let d=[];d.push(L(Ft([[.02,-.07],[.024,-.064],[.024,.064],[.02,.07]],20),{rot:[Math.PI/2,0,0]}));for(let _=0;_<7;_++)d.push(L(ne(.0248,.0026,20,6),{pos:[0,0,-.054+_*.018]}));let f=at(d);L(f,{pos:[0,-.02,.215]});let g=vt(n,ut(f,.08));g.name="pump",t.add(g);let v=ne(.02,.0045,18,8,Math.PI*1.2);L(v,{pos:[0,-.048,-.048],rot:[0,Math.PI/2,Math.PI*.44]}),t.add(vt(e,Y(v,.04)));let p=Gn([[0,0],[.01,-.003],[.011,-.018],[.005,-.024],[.001,-.014]],.006,{bevel:8e-4});L(p,{pos:[0,-.042,-.05],rot:[0,Math.PI/2,0]}),t.add(vt(s,Y(p,.03)));let m=[],y=12;for(let _=0;_<y;_++){let w=_/(y-1),C=-.1-w*.23,D=.04-w*.004,b=.052+Math.sin(w*Math.PI*.9)*.03-w*.008,S=-.02-w*.03,U=q(D,b,.235/y*1.5,.008,1);L(U,{pos:[0,S,C],rot:[.1,0,0]}),m.push(U)}let M=at(m);t.add(vt(n,Y(M,.12)));let x=q(.042,.086,.022,.008,2);L(x,{pos:[0,-.058,-.338],rot:[.12,0,0]}),t.add(vt(i,Y(x,.05)));let T=new Ct(new je(.0032,12,8),r.m.neonGreen);T.position.set(0,.032,.452),t.add(T);for(let _=0;_<4;_++){let w=Ft([[0,0],[.0092,0],[.0095,.004],[.0095,.04],[.0085,.046],[0,.048]],14);L(w,{pos:[-.028,-.006,-.07+_*.024],rot:[Math.PI/2,0,0]}),t.add(vt(r.m.paintRed,ut(w,.04)));let C=Vn(.0098,.0098,.014,14,.002);L(C,{pos:[-.028+.021,-.006,-.07+_*.024],rot:[0,0,Math.PI/2]}),t.add(vt(r.m.brass,ut(C,.03)))}return t.traverse(_=>{_.isMesh&&(_.frustumCulled=!1,_.renderOrder=3)}),{group:t,muzzleLocal:new A(0,.006,.48),ejectLocal:new A(.026,.004,-.02),magMesh:g,pumpMesh:g,stats:{name:"BREAKER 12G",dmg:17,headMul:2,rpm:78,mag:8,reserve:64,spread:.048,adsSpread:.03,recoil:.04,kick:.115,auto:!1,reloadTime:3,adsFov:55,pellets:10,range:45,penetration:1,perShell:!0}}}function e1(r){let t=new ht;t.name="pistol";let e=r.m.gunmetal,n=r.m.polymer,i=r.m.chrome,s=[];s.push(q(.028,.03,.175,.005,2));for(let x=0;x<7;x++){let T=q(.03,.02,.0035,8e-4,0);L(T,{pos:[0,.002,-.07+x*.009]}),s.push(T)}for(let x=0;x<5;x++){let T=q(.03,.018,.0035,8e-4,0);L(T,{pos:[0,.002,.048+x*.009]}),s.push(T)}s.push(L(q(.006,.014,.038,.001,1),{pos:[.014,.006,.006]}));let a=at(s);L(a,{pos:[0,.014,.028]});let o=vt(e,Y(a,.07));o.name="slide",t.add(o);let l=[];l.push(L(q(.026,.024,.15,.004,2),{pos:[0,-.008,.02]})),l.push(L(q(.02,.008,.04,.002,1),{pos:[0,-.022,.07]}));let c=ne(.018,.004,18,8,Math.PI*1.2);L(c,{pos:[0,-.034,-.01],rot:[0,Math.PI/2,Math.PI*.45]}),l.push(c);let h=at(l);t.add(vt(n,Y(h,.08)));let u=lo(.105);L(u,{pos:[0,-.03,-.048],rot:[-.3,0,0],scale:[.92,1,.95]}),t.add(vt(n,Y(u,.06)));let d=q(.02,.012,.036,.003,1);L(d,{pos:[0,-.132,-.014]});let f=vt(e,Y(d,.04));f.name="magazine",t.add(f);let g=Ft([[.005,0],[.01,0],[.011,.003],[.011,.012],[.005,.012]],16);L(g,{pos:[0,.014,.112],rot:[Math.PI/2,0,0]}),t.add(vt(i,ut(g,.02)));let v=Gn([[0,0],[.008,-.002],[.009,-.016],[.004,-.021],[.001,-.012]],.005,{bevel:6e-4});L(v,{pos:[0,-.028,-.012],rot:[0,Math.PI/2,0]}),t.add(vt(i,Y(v,.03)));let p=q(.02,.008,.008,.0015,1);L(p,{pos:[0,.032,-.052]}),t.add(vt(e,Y(p,.03)));for(let x of[-.006,.006]){let T=new Ct(new je(.0016,8,6),r.m.neonGreen);T.position.set(x,.034,-.049),t.add(T)}let m=q(.006,.01,.006,.0012,1);L(m,{pos:[0,.033,.1]}),t.add(vt(e,Y(m,.02)));let y=new Ct(new je(.0017,8,6),r.m.neonGreen);y.position.set(0,.036,.1),t.add(y);let M=q(.018,.016,.044,.003,1);return L(M,{pos:[0,-.028,.078]}),t.add(vt(e,Y(M,.04))),t.traverse(x=>{x.isMesh&&(x.frustumCulled=!1,x.renderOrder=3)}),{group:t,muzzleLocal:new A(0,.014,.126),ejectLocal:new A(.018,.02,.006),magMesh:f,slideMesh:o,stats:{name:"P-9 SIDEARM",dmg:22,headMul:3.4,rpm:420,mag:17,reserve:170,spread:.01,adsSpread:.003,recoil:.013,kick:.032,auto:!1,reloadTime:1.55,adsFov:55,pellets:1,range:90,penetration:1}}}function n1(r){let t=new ht;t.name="smg";let e=r.m.gunmetal,n=r.m.polymer,i=r.m.polymerTan,s=at([q(.036,.052,.19,.006,2),L(q(.04,.026,.06,.004,1),{pos:[0,.024,-.02]})]);t.add(vt(e,Y(s,.09)));let a=[];a.push(L(Ft([[.019,-.075],[.022,-.07],[.022,.07],[.019,.075]],20),{rot:[Math.PI/2,0,0]}));for(let x=0;x<6;x++)for(let T=0;T<6;T++){let _=T/6*Math.PI*2,w=ne(.006,.0018,10,5);L(w,{pos:[Math.cos(_)*.021,Math.sin(_)*.021,-.058+x*.023],rot:[0,Math.PI/2-_,0]}),a.push(w)}let o=at(a);L(o,{pos:[0,.006,.19]}),t.add(vt(e,ut(o,.08)));let l=Sh(.0068,.19,8,.0015,20);L(l,{pos:[0,.006,.2]}),t.add(vt(e,ut(l,.05)));let c=Ft([[0,-.075],[.0135,-.075],[.0145,-.07],[.0145,.07],[.0135,.075],[.006,.075],[0,.07]],22);c.rotateX(Math.PI/2),L(c,{pos:[0,.006,.352]}),t.add(vt(e,ut(c,.06)));for(let x=0;x<5;x++){let T=ne(.0148,.0018,20,6);L(T,{pos:[0,.006,.3+x*.026]}),t.add(vt(e,ut(T,.03)))}let h=wh(.15,.02,8);L(h,{pos:[0,.04,-.01]}),t.add(vt(e,Y(h,.05)));let u=Eh(.024,.15,.036,.1);L(u,{pos:[0,-.12,.008],rot:[.04,0,0]});let d=vt(i,Y(u,.07));d.name="magazine",t.add(d);let f=lo(.092);L(f,{pos:[0,-.042,-.088],rot:[-.26,0,0],scale:.95}),t.add(vt(n,Y(f,.06)));let g=ne(.018,.004,18,8,Math.PI*1.15);L(g,{pos:[0,-.042,-.06],rot:[0,Math.PI/2,Math.PI*.44]}),t.add(vt(e,Y(g,.04)));let v=at([L(Jt([[0,0,0],[0,-.006,-.09],[0,-.01,-.15]],.0062,18,8),{}),L(q(.03,.044,.014,.005,1),{pos:[0,-.012,-.156]})]);L(v,{pos:[0,.004,-.098]}),t.add(vt(e,ut(v,.07)));let p=new ht,m=at([L(q(.03,.026,.04,.004,1),{pos:[0,0,0]}),L(q(.024,.01,.026,.002,1),{pos:[0,-.017,0]})]);p.add(vt(n,Y(m,.06)));let y=new Ct(new Ve(.021,.019,4,4),new vn({color:663600,roughness:.05,metalness:.1,transmission:.6,thickness:.005,iridescence:1,iridescenceIOR:1.8,iridescenceThicknessRange:[200,600],transparent:!0,opacity:.5}));y.rotation.y=Math.PI,p.add(y);let M=new Ct(new je(.0013,8,6),new Le({color:16724e3,blending:qe,transparent:!0,depthWrite:!1}));return M.position.z=.001,p.add(M),p.position.set(0,.058,-.005),t.add(p),t.traverse(x=>{x.isMesh&&(x.frustumCulled=!1,x.renderOrder=3)}),{group:t,muzzleLocal:new A(0,.006,.43),ejectLocal:new A(.022,.01,-.01),magMesh:d,stats:{name:"VECTOR-9",dmg:18,headMul:2.6,rpm:1050,mag:40,reserve:320,spread:.011,adsSpread:.004,recoil:.008,kick:.021,auto:!0,reloadTime:1.85,adsFov:52,pellets:1,range:70,penetration:1,suppressed:!0}}}function i1(r){let t=new ht;t.name="sniper";let e=r.m.gunmetal,n=r.m.polymer,i=r.m.rubber,s=at([q(.04,.05,.25,.006,2),L(q(.044,.02,.08,.004,1),{pos:[0,.024,-.04]})]);t.add(vt(e,Y(s,.1)));let a=Sh(.0115,.48,12,.003,26);L(a,{pos:[0,.004,.375]}),t.add(vt(e,ut(a,.08)));let o=Yd(.014,.07);L(o,{pos:[0,.004,.64]}),t.add(vt(e,ut(o,.06)));let l=[];l.push(L(q(.048,.03,.24,.006,2),{pos:[0,-.038,.06]}));for(let T=0;T<8;T++)l.push(L(ne(.013,.0035,12,6),{pos:[.022,-.038,-.02+T*.03],rot:[0,Math.PI/2,0]})),l.push(L(ne(.013,.0035,12,6),{pos:[-.022,-.038,-.02+T*.03],rot:[0,Math.PI/2,0]}));let c=at(l);t.add(vt(n,Y(c,.1)));let h=at([L(Vn(.0062,.0062,.055,12,.002),{pos:[0,0,0],rot:[0,0,Math.PI/2]}),L(new je(.011,14,10),{pos:[.032,0,0]})]);L(h,{pos:[.02,.01,-.08],rot:[0,0,-.35]});let u=vt(e,ut(h,.05));u.name="bolt",t.add(u);let d=Eh(.026,.09,.052,0);L(d,{pos:[0,-.086,-.02]});let f=vt(e,Y(d,.07));f.name="magazine",t.add(f);let g=lo(.105);L(g,{pos:[0,-.052,-.12],rot:[-.18,0,0]}),t.add(vt(n,Y(g,.07)));let v=ne(.019,.0042,18,8,Math.PI*1.15);L(v,{pos:[0,-.052,-.09],rot:[0,Math.PI/2,Math.PI*.44]}),t.add(vt(e,Y(v,.04)));let p=[];p.push(L(q(.036,.048,.16,.008,2),{pos:[0,-.016,-.22]})),p.push(L(q(.03,.024,.07,.006,1),{pos:[0,.018,-.19]})),p.push(L(ne(.026,.008,20,8),{pos:[0,-.016,-.24],rot:[0,Math.PI/2,0]}));let m=at(p);t.add(vt(n,Y(m,.1)));let y=q(.036,.07,.02,.007,2);L(y,{pos:[0,-.02,-.308]}),t.add(vt(i,Y(y,.05)));for(let T of[-1,1]){let _=Jt([[0,0,0],[T*.03,-.07,.01],[T*.05,-.135,.02]],.0048,14,8);L(_,{pos:[0,-.05,.23]}),t.add(vt(e,ut(_,.05)));let w=new Ct(new je(.008,10,8),i);w.position.set(T*.05,-.185,.25),t.add(w)}let M=wh(.23,.022,14);L(M,{pos:[0,.036,-.03]}),t.add(vt(e,Y(M,.06)));let x=Zd(n,null,e);return x.scale.set(1.35,1.35,1.7),x.position.set(0,.078,-.02),t.add(x),t.traverse(T=>{T.isMesh&&(T.frustumCulled=!1,T.renderOrder=3)}),{group:t,muzzleLocal:new A(0,.004,.68),ejectLocal:new A(.024,.012,-.07),magMesh:f,boltMesh:u,stats:{name:"LONGSHOT .338",dmg:165,headMul:2.4,rpm:48,mag:5,reserve:40,spread:.016,adsSpread:2e-4,recoil:.055,kick:.15,auto:!1,reloadTime:3.1,adsFov:22,pellets:1,range:400,penetration:4,scoped:!0}}}function jd(r){let t=[],e=ge(.032,[],{seg:22,seed:5,noiseAmp:.0015}),n=e.attributes.position,i=new A;for(let c=0;c<n.count;c++){i.fromBufferAttribute(n,c);let h=i.clone().normalize(),u=Math.sin(h.y*14)*Math.sin(Math.atan2(h.z,h.x)*8);i.multiplyScalar(1+u*.03),n.setXYZ(c,i.x,i.y,i.z)}n.needsUpdate=!0,e.computeVertexNormals(),t.push(e),t.push(L(Ft([[0,0],[.01,0],[.011,.004],[.01,.02],[.008,.024],[0,.024]],16),{pos:[0,.028,0]})),t.push(L(q(.007,.04,.01,.002,1),{pos:[.012,.03,0],rot:[0,0,.1]}));let s=at(t),a=new Ct(Y(s,.06),r.m.paintGreen),o=new Ct(ut(ne(.011,.0022,16,6),.03),r.m.chrome);o.position.set(.016,.05,0),o.rotation.y=Math.PI/2;let l=new ht;return l.add(a),l.add(o),l.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),l}function Kd(r){let t=new ht,e=r.m.leather,n=r.m.ragsGreen||r.m.rags,i=o=>{let l=new ht,c=ge(.04,[[0,1,0,.01,2],[o,.2,0,.008,2]],{seg:18,seed:o>0?7:11,noiseAmp:.0015});c.scale(.8,.55,1.05),l.add(vt(e,Y(c,.08)));for(let v=0;v<4;v++){let p=new ht,m=(v-1.5)*.02;p.position.set(o*.006,.006-Math.abs(v-1.5)*.003,.032+m*0),p.position.x+=m*o*0,p.position.x=o*(.004+v*0),p.position.set(o*.01,.01,.03);let y=p,M=.55;for(let x=0;x<3;x++){let T=.026-x*.005,_=.0085-x*.0012,w=new ht;w.position.set(0,0,x===0?0:.026-(x-1)*.005),w.rotation.x=-M*(x===0?1:.85);let C=Ft([[0,-T/2],[_,-T/2+.002],[_*1.05,0],[_*.92,T/2-.002],[0,T/2]],12);C.rotateX(Math.PI/2),L(C,{pos:[0,0,T/2]}),w.add(vt(e,ut(C,.04))),y.add(w),y=w}p.position.x=o*.012,p.position.y=.012-v*0,p.position.z=.028,p.position.x=o*.014,p.translateX(-o*0),p.position.y+=(v-1.5)*0,p.position.x=o*.013,p.position.y=.01,p.position.z=.026,p.position.x+=o*0,p.position.y+=(1.5-v)*.0115,l.add(p)}let h=new ht;h.position.set(-o*.02,-.004,.014),h.rotation.set(-.5,o*.9,0);let u=h;for(let v=0;v<2;v++){let p=.026-v*.004,m=.01-v*.0015,y=new ht;y.position.set(0,0,v===0?0:.026),y.rotation.x=-.45;let M=Ft([[0,-p/2],[m,-p/2+.002],[m*1.05,0],[m*.9,p/2-.002],[0,p/2]],12);M.rotateX(Math.PI/2),L(M,{pos:[0,0,p/2]}),y.add(vt(e,ut(M,.04))),u.add(y),u=y}l.add(h);let d=Ft([[0,0],[.033,.005],[.04,.03],[.048,.12],[.052,.23],[.045,.245],[0,.25]],18);L(d,{rot:[Math.PI/2,0,0],pos:[0,-.004,-.04]});let f=vt(n,ut(d,.12));l.add(f);let g=Ft([[.036,0],[.044,0],[.044,.022],[.036,.022]],18);L(g,{rot:[Math.PI/2,0,0],pos:[0,-.004,-.048]}),l.add(vt(e,ut(g,.06)));for(let v=0;v<4;v++){let p=q(.013,.006,.015,.002,1);L(p,{pos:[o*.013,.017,.024],rot:[.3,0,0]}),p.translate(0,(1.5-v)*0,0),l.add(vt(r.m.polymer,Y(p,.04)))}return l.traverse(v=>{v.isMesh&&(v.frustumCulled=!1,v.renderOrder=3)}),l},s=i(1),a=i(-1);return t.add(s),t.add(a),{group:t,right:s,left:a}}var Jd={rifle:$x,shotgun:t1,smg:n1,pistol:e1,sniper:i1};var bn=new A,Ei=new A,co=new A,bM=new pe,ho=new Ie,pr=new A(0,1,0),Th=1.68,s1=1.06,uo=.34,Ah=1.8,r1=1.18,fo=class{constructor(t){this.game=t,this.rng=new ce(90210),this.pos=t.level.playerSpawn.clone(),this.vel=new A,this.yaw=Math.PI*.75,this.pitch=-.04,this.maxHp=100,this.hp=this.maxHp,this.armor=0,this.maxArmor=100,this.alive=!0,this.regenT=0,this.height=Ah,this.eye=Th,this.crouching=!1,this.wantCrouch=!1,this.sprinting=!1,this.grounded=!0,this.wasGrounded=!0,this.coyote=0,this.jumpBuffer=0,this.stamina=1,this.airTime=0,this.fallSpeed=0,this.bobT=0,this.stepDist=0,this.breath=0,this.camera=t.camera,this.baseFov=74,this.fov=this.baseFov,this.camera.fov=this.fov,this.camera.near=.05,this.camera.far=620,this.camera.updateProjectionMatrix(),this.vmScene=new ti,this.vmCamera=new Ne(62,window.innerWidth/window.innerHeight,.008,6),this.vmRoot=new ht,this.vmScene.add(this.vmRoot);let e=new Xi(16766894,2.35);e.position.set(-.6,1.1,.9),this.vmScene.add(e);let n=new Xi(9676996,.95);n.position.set(.9,-.3,-.7),this.vmScene.add(n),this.vmScene.add(new Ts(5595246,.55)),this.vmMuzzleLight=new xn(16760944,0,2.2,2),this.vmScene.add(this.vmMuzzleLight);let i=Kd(t.mats);this.arms=i.group,this.vmRoot.add(this.arms),this.weapons={},this.order=["pistol","rifle","shotgun","smg","sniper"],this.owned={pistol:!0,rifle:!0,shotgun:!1,smg:!1,sniper:!1},this.ammo={},this.slot=1,this.current=null,this.buildWeapons(),this.fireCd=0,this.reloading=0,this.reloadStage=0,this.ads=0,this.adsTarget=0,this.recoilPos=new A,this.recoilVel=new A,this.recoilRot=new A,this.recoilRotVel=new A,this.viewKick=new X,this.viewKickVel=new X,this.swayPos=new X,this.swayRot=new X,this.lastMouse=new X,this.switching=0,this.switchTo=-1,this.meleeT=0,this.grenades=3,this.grenadeT=0,this.shotsFired=0,this.spreadHeat=0,this.flashlight=null,this.flashOn=!1,this.buildFlashlight(),this.damageDir=new X,this.damageT=0,this.lastDamageT=0,this.killStreak=0,this.noise=0,this.footSurface="dirt"}buildWeapons(){for(let t of this.order){let e=Jd[t](this.game.mats);e.group.visible=!1,e.key=t,this.vmRoot.add(e.group),this.weapons[t]=e,this.ammo[t]={mag:e.stats.mag,reserve:e.stats.reserve},e.restPos=new A(.175,-.155,-.34),e.adsPos=new A(0,-.075,-.235),e.restRot=new Ie(.03,-.055,.02),e.adsRot=new Ie(0,0,0),e.group.position.copy(e.restPos),e.group.rotation.copy(e.restRot)}this.selectSlot(this.slot,!0)}buildFlashlight(){let t=new Aa(16773328,0,34,.42,.45,1.4);t.castShadow=!1,t.visible=!1,this.game.scene.add(t),this.game.scene.add(t.target),this.flashlight=t}selectSlot(t,e=!1){let n=this.order.length;t=(t%n+n)%n;let i=this.order[t];return!this.owned[i]||!e&&(this.switching>0||this.reloading>0)||!e&&t===this.slot?!1:e?(this.slot=t,this.applySlot(),!0):(this.switchTo=t,this.switching=.42,this.game.audio.play("switch",null,.55),!0)}applySlot(){for(let e of this.order)this.weapons[e].group.visible=!1;let t=this.order[this.slot];this.current=this.weapons[t],this.current.group.visible=!0,this.stats=this.current.stats,this.fireCd=Math.max(this.fireCd,.12),this.game.hud?.setWeapon(this.stats,this.ammo[t])}giveWeapon(t){if(!this.weapons[t])return!1;let e=this.owned[t];this.owned[t]=!0;let n=this.ammo[t];e&&(n.reserve=Math.min(this.weapons[t].stats.reserve*2,n.reserve+this.weapons[t].stats.mag*3));let i=this.order.indexOf(t);return this.selectSlot(i,!0),this.game.audio.play("weaponPickup",null,.8),this.game.hud?.toast(this.weapons[t].stats.name+" ACQUIRED"),!0}get ammoNow(){return this.ammo[this.order[this.slot]]}damage(t,e){if(!this.alive||this.game.godMode)return;let n=t;if(this.armor>0){let i=Math.min(this.armor,n*.62);this.armor-=i,n-=i}if(this.hp-=n,this.regenT=0,this.lastDamageT=0,this.damageT=.85,this.game.shake(Math.min(.85,.14+n*.016),.28),this.game.audio.play("playerHurt",null,Math.min(1,.5+n*.02)),e){bn.subVectors(e,this.pos).setY(0).normalize();let i=Ei.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),s=co.set(Math.cos(this.yaw),0,-Math.sin(this.yaw));this.damageDir.set(bn.dot(s),bn.dot(i)),this.game.hud?.showDamage(this.damageDir.x,this.damageDir.y)}this.hp<=0&&(this.hp=0,this.die())}heal(t){return!this.alive||this.hp>=this.maxHp?!1:(this.hp=Math.min(this.maxHp,this.hp+t),this.game.audio.play("heal",null,.8),!0)}giveAmmo(t=1){let e=!1;for(let n of this.order){if(!this.owned[n])continue;let i=this.weapons[n].stats,s=this.ammo[n],a=i.reserve*2;s.reserve<a&&(s.reserve=Math.min(a,s.reserve+Math.ceil(i.mag*2.2*t)),e=!0)}return e&&this.game.audio.play("pickup",null,.75),e}die(){this.alive=!1,this.adsTarget=0,this.game.audio.play("playerDie",null,1),this.game.onPlayerDied()}respawn(){this.pos.copy(this.game.level.playerSpawn),this.vel.set(0,0,0),this.hp=this.maxHp,this.armor=0,this.alive=!0,this.reloading=0,this.pitch=-.04;for(let t of this.order)this.ammo[t].mag=this.weapons[t].stats.mag,this.ammo[t].reserve=this.weapons[t].stats.reserve;this.owned={pistol:!0,rifle:!0,shotgun:!1,smg:!1,sniper:!1},this.grenades=3,this.selectSlot(1,!0)}update(t,e){let n=this.game.input;if(this.alive&&n.locked){let _=n.lookDelta(bn),w=1-this.ads*(this.stats.scoped?.62:.34);this.yaw+=_.x*w,this.pitch+=_.y*w,this.pitch=Math.max(-1.52,Math.min(1.52,this.pitch)),this.lastMouse.set(_.x,_.y)}else this.lastMouse.set(0,0);if(!this.alive){this.updateDeath(t,e);return}if(this.wantCrouch=n.isDown("crouch"),this.wantCrouch&&!this.crouching)this.crouching=!0;else if(!this.wantCrouch&&this.crouching){let _=bn.copy(this.pos);this.game.physics.resolveCapsule(_,uo*.9,Ah,1).ceiling||(this.crouching=!1)}let i=this.crouching?r1:Ah,s=this.crouching?s1:Th;this.height+=(i-this.height)*Math.min(1,t*13),this.eye+=(s-this.eye)*Math.min(1,t*13);let a=0,o=0;n.isDown("forward")&&(o-=1),n.isDown("back")&&(o+=1),n.isDown("left")&&(a-=1),n.isDown("right")&&(a+=1);let l=Math.hypot(a,o);l>0&&(a/=l,o/=l);let c=n.isDown("sprint")&&o<-.1&&!this.crouching&&this.ads<.4&&this.stamina>.06;this.sprinting=c&&l>.1,this.sprinting?this.stamina=Math.max(0,this.stamina-t*.24):this.stamina=Math.min(1,this.stamina+t*(this.grounded&&l<.1?.42:.22));let h=this.crouching?2.05:this.sprinting?6.35:4.05;h*=1-this.ads*.42,this.reloading>0&&(h*=.9);let u=Math.sin(this.yaw),d=Math.cos(this.yaw),f=a*d-o*u,g=-a*u-o*d,v=this.grounded?52:13,p=f*h,m=g*h;this.vel.x+=(p-this.vel.x)*Math.min(1,v*t*(l>0?1:1.35)),this.vel.z+=(m-this.vel.z)*Math.min(1,v*t*(l>0?1:1.35)),n.pressed("jump")&&(this.jumpBuffer=.14),this.jumpBuffer=Math.max(0,this.jumpBuffer-t),this.coyote=this.grounded?.12:Math.max(0,this.coyote-t),this.jumpBuffer>0&&this.coyote>0&&!this.crouching&&(this.vel.y=7.25,this.grounded=!1,this.coyote=0,this.jumpBuffer=0,this.game.audio.play("jump",null,.35),this.noise=Math.max(this.noise,.45)),this.vel.y+=Xa*t,this.vel.y<-55&&(this.vel.y=-55),this.fallSpeed=this.vel.y,this.pos.x+=this.vel.x*t,this.pos.y+=this.vel.y*t,this.pos.z+=this.vel.z*t,this.wasGrounded=this.grounded;let y=this.game.physics.resolveCapsule(this.pos,uo,this.height,4);if(y.grounded)this.grounded=!0,this.vel.y<0&&(this.vel.y=0);else{let _=this.game.physics.groundAt(this.pos.x,this.pos.y+.35,this.pos.z,.55,uo*.8);_>-1e8&&this.pos.y-_<.3&&this.vel.y<=.01?(this.pos.y=_,this.grounded=!0,this.vel.y=0):this.grounded=!1}if(y.ceiling&&this.vel.y>0&&(this.vel.y=0),this.pos.y<-6&&(this.pos.set(this.game.level.playerSpawn.x,1,this.game.level.playerSpawn.z),this.vel.set(0,0,0)),this.grounded&&!this.wasGrounded){let _=Math.min(1,Math.abs(this.fallSpeed)/20);_>.14&&(this.game.audio.play("land",null,.25+_*.7),this.game.shake(_*.35,.2),this.landBob=_*.14,this.noise=Math.max(this.noise,_*.8),Math.abs(this.fallSpeed)>24&&this.damage((Math.abs(this.fallSpeed)-24)*3.4,null)),this.airTime=0}this.grounded||(this.airTime+=t);let M=84;this.pos.x=Math.max(-M,Math.min(M,this.pos.x)),this.pos.z=Math.max(-M,Math.min(M,this.pos.z));let x=Math.hypot(this.vel.x,this.vel.z);if(this.grounded&&x>.6){this.stepDist+=x*t;let _=this.crouching?1.35:this.sprinting?2.05:1.62;this.stepDist>_&&(this.stepDist=0,this.footstep(x))}let T=0;x>.4&&(T=this.crouching?.1:this.sprinting?.62:.3),this.noise=Math.max(this.noise*Math.pow(.14,t),T),this.game.noiseLevel=this.noise,this.lastDamageT+=t,this.lastDamageT>5.5&&this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+t*7.5)),this.updateWeapon(t,e,n),n.pressed("flashlight")&&(this.flashOn=!this.flashOn,this.game.audio.play("uiClick",null,.35)),this.flashlight.visible=this.flashOn,this.flashlight.intensity=this.flashOn?22:0,this.updateCamera(t,e,x),this.camera.getWorldDirection(bn),this.game.audio.listenerPos=this.camera.position,this.game.audio.setListener(this.camera.position,bn,pr),this.flashOn&&(this.flashlight.position.copy(this.camera.position),this.flashlight.target.position.copy(this.camera.position).addScaledVector(bn,12),this.flashlight.target.updateMatrixWorld())}footstep(t){let n=this.game.physics.raycast(bn.set(this.pos.x,this.pos.y+.4,this.pos.z),Ei.set(0,-1,0),1.2)?.collider?.surface||"dirt";this.footSurface=n;let i=n==="metal"?"footMetal":n==="concrete"?"footConcrete":"footDirt",s=(this.crouching?.14:this.sprinting?.42:.28)*(.85+Math.random()*.3);this.game.audio.play(i,null,s,.9+Math.random()*.22)}updateWeapon(t,e,n){let i=this.current,s=this.ammoNow,a=this.stats;if(this.switching>0)this.switching-=t,this.switching<=.21&&this.switchTo>=0&&(this.slot=this.switchTo,this.switchTo=-1,this.applySlot()),this.switching<0&&(this.switching=0);else{for(let u=1;u<=5;u++)n.pressed("weapon"+u)&&this.selectSlot(u-1);if(n.wheel!==0){let u=this.slot;for(let d=0;d<5&&(u=(u+(n.wheel>0?1:-1)+5)%5,!this.owned[this.order[u]]);d++);this.selectSlot(u)}}this.adsTarget=n.ads&&this.reloading<=0&&this.switching<=0&&!this.sprinting&&this.meleeT<=0?1:0;let o=a.scoped?7.5:11.5;this.ads+=(this.adsTarget-this.ads)*Math.min(1,t*o),this.ads<.001&&(this.ads=0);let l=this.baseFov-this.ads*(a.adsFov!==void 0?this.baseFov-a.adsFov:22)+(this.sprinting?3.5:0);if(this.fov+=(l-this.fov)*Math.min(1,t*10),Math.abs(this.camera.fov-this.fov)>.01&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix()),this.game.hud?.setScope(a.scoped?this.ads:0),this.reloading>0){this.reloading-=t;let u=a.reloadTime,d=1-this.reloading/u;if(this.reloadStage===0&&d>.1?(this.reloadStage=1,this.game.audio.play("reloadOut",null,.6),i.magMesh&&(i.magMesh.visible=!1)):this.reloadStage===1&&d>.55?(this.reloadStage=2,this.game.audio.play("reloadIn",null,.6),i.magMesh&&(i.magMesh.visible=!0)):this.reloadStage===2&&d>.88&&(this.reloadStage=3,this.game.audio.play(a.scoped?"bolt":"reloadCharge",null,.55)),this.reloading<=0){this.reloading=0;let f=a.mag-s.mag,g=Math.min(f,s.reserve);s.mag+=g,s.reserve-=g,this.reloadStage=0,this.game.hud?.setWeapon(a,s)}}else n.pressed("reload")&&s.mag<a.mag&&s.reserve>0&&this.switching<=0&&this.startReload();this.meleeT>0?(this.meleeT-=t,this.meleeT<=0&&(this.meleeT=0)):(n.pressed("melee")||n.meleeMouse)&&this.switching<=0&&this.melee(),this.grenadeT>0?(this.grenadeT-=t,this.grenadeT<=0&&(this.grenadeT=0)):n.pressed("grenade")&&this.grenades>0&&this.switching<=0&&this.throwGrenade(),this.fireCd-=t,this.spreadHeat=Math.max(0,this.spreadHeat-t*2.6);let c=this.fireCd<=0&&this.reloading<=0&&this.switching<=0&&this.meleeT<=0&&this.alive;(a.auto?n.fire:n.firePressed)&&c&&(s.mag>0?this.fire():(this.game.audio.play("dryfire",null,.5),this.fireCd=.28,s.reserve>0&&this.startReload())),n.fire||(this.shotsFired=0),this.animateViewmodel(t,e)}startReload(){let t=this.stats,e=this.ammoNow;e.mag>=t.mag||e.reserve<=0||this.reloading>0||(this.reloading=t.reloadTime,this.reloadStage=0,this.adsTarget=0,this.noise=Math.max(this.noise,.2))}currentSpread(){let t=this.stats,e=t.spread*(1-this.ads)+t.adsSpread*this.ads,n=Math.min(1,Math.hypot(this.vel.x,this.vel.z)/6.4),i=this.grounded?0:1,s=this.crouching?-.35:0,a=1+n*1.55+i*1.9+s+this.spreadHeat*.95;return e*Math.max(.25,a)}fire(){let t=this.stats,e=this.ammoNow,n=this.current;e.mag--,this.fireCd=60/t.rpm,this.shotsFired++,this.spreadHeat=Math.min(2.6,this.spreadHeat+(t.auto?.3:.55)),this.noise=Math.max(this.noise,t.suppressed?.35:1),this.game.hud?.setWeapon(t,e);let i=co.copy(n.muzzleLocal);n.group.updateMatrixWorld(),n.group.localToWorld(i);let s=this.camera.getWorldDirection(bn),a=Ei.crossVectors(s,pr).normalize(),o=this.camera.position.clone().addScaledVector(s,.62+(1-this.ads)*.1).addScaledVector(a,(1-this.ads)*.16).addScaledVector(pr,-.075-(1-this.ads)*.05);if(this.game.fx.muzzleFlash(o,s,t.scoped?1.6:t.pellets?1.45:1,!!t.suppressed),this.vmMuzzleLight.position.copy(n.muzzleLocal),n.group.localToWorld(this.vmMuzzleLight.position),this.vmMuzzleLight.intensity=t.suppressed?1.2:4.2,n.ejectLocal){let f=this.camera.position.clone().addScaledVector(s,.32).addScaledVector(a,.2).addScaledVector(pr,-.06);this.game.fx.ejectCasing(f,a,pr)}let l=t.name.includes("SHOTGUN")||t.pellets?"shotgun":this.order[this.slot]==="sniper"?"sniper":this.order[this.slot]==="smg"?"smg":this.order[this.slot]==="pistol"?"pistol":"rifle";this.game.audio.play(l,null,t.suppressed?.42:.95,.97+Math.random()*.06);let c=t.pellets||1,h=this.currentSpread();for(let f=0;f<c;f++){let g=s.clone();if(h>0){let v=Math.random()*Math.PI*2,p=h*Math.sqrt(Math.random())*(c>1,1),m=bn.set(0,1,0),y=Ei.crossVectors(g,m).normalize(),M=co.crossVectors(y,g).normalize();g.addScaledVector(y,Math.cos(v)*p).addScaledVector(M,Math.sin(v)*p).normalize()}this.trace(o,g,t,c>1)}let u=t.recoil;this.recoilVel.z+=u*5.2,this.recoilVel.y+=u*1.15,this.recoilRotVel.x-=u*12.5,this.recoilRotVel.y+=(Math.random()-.5)*u*9,this.recoilRotVel.z+=(Math.random()-.5)*u*7;let d=(1-this.ads*.45)*(this.crouching?.82:1);this.viewKickVel.y+=t.kick*22*d,this.viewKickVel.x+=(Math.random()-.5)*t.kick*15*d,this.game.shake(t.kick*.55,.1),this.game.renderer.grade&&(this.game.renderer.grade.uniforms.uFlash.value=Math.min(1,t.suppressed?.05:.14*(t.pellets?1.6:1)))}trace(t,e,n,i){let s=n.penetration||1,a=t.clone(),o=n.range||140,l=new Set;for(let c=0;c<5&&s>0;c++){let h=this.game.physics.raycast(a,e,o),u=h?h.t:o,d=null,f=null,g=this.game.zombieGrid?this.game.zombieGrid.queryNear(a.x,a.z):this.game.zombies;for(let v=0;v<g.length;v++){let p=g[v];if(p.dead||l.has(p)||p.root.position.distanceToSquared(a)>(o+3)*(o+3))continue;let m=p.raycastZones(a,e,Math.min(u,o));m&&(!d||m.dist<d.dist)&&(d=m,f=p)}if(!d){let v=this.game.zombies;for(let p=0;p<v.length;p++){let m=v[p];if(m.dead||l.has(m)||m.root.position.distanceToSquared(a)>(o+3)*(o+3))continue;let y=m.raycastZones(a,e,Math.min(u,o));y&&(!d||y.dist<d.dist)&&(d=y,f=m)}}if(d&&f){l.add(f);let v=n.dmg*1*(d.zone?.name==="head"&&n.headMul||1);if(f.hit(v,d.zone,d.point,e,n),s-=1,s<=0||(a=d.point.clone().addScaledVector(e,.12),o-=d.dist+.12,o<=.2))return;continue}if(h){let v=h.collider?.surface||"concrete";if(this.game.fx.impact(h.point,h.normal,v),this.game.fx.tracer(t,h.point,i?.008:.014,i?.035:.055),(v==="glass"||v==="wood")&&s>1){if(s-=1,a=h.point.clone().addScaledVector(e,.25),o-=h.t+.25,o<=.2)return;continue}return}this.game.fx.tracer(t,a.clone().addScaledVector(e,o),i?.008:.014,.06);return}}melee(){this.meleeT=.45,this.adsTarget=0,this.game.audio.play("switch",null,.4);let t=this.camera.getWorldDirection(bn).clone(),e=this.camera.position.clone(),n=!1;for(let i of this.game.zombies){if(i.dead||i.root.position.distanceTo(this.pos)>2.6||(Ei.subVectors(i.root.position,this.pos).setY(0).normalize(),Ei.dot(co.set(t.x,0,t.z).normalize())<.45))continue;let a=i.raycastZones(e,t,2.8),o=a?a.point:i.root.position.clone().setY(this.pos.y+1.1);i.hit(72,a?.zone||null,o,t,{name:"MELEE",headMul:1.8}),i.vel.addScaledVector(Ei,6.5),n=!0}n&&(this.game.audio.play("flesh",null,.85),this.game.shake(.22,.14)),this.noise=Math.max(this.noise,.3)}throwGrenade(){this.grenades--,this.grenadeT=.6,this.game.audio.play("grenadePin",null,.7);let t=this.camera.getWorldDirection(bn).clone(),e=this.camera.position.clone().addScaledVector(t,.6);this.game.spawnGrenade(e,t.multiplyScalar(19).add(Ei.set(0,3.4,0))),this.game.hud?.setGrenades(this.grenades)}animateViewmodel(t,e){let n=this.current;if(!n)return;let i=210;this.recoilVel.multiplyScalar(1-Math.min(1,21*t)),this.recoilVel.addScaledVector(this.recoilPos,-i*t),this.recoilPos.addScaledVector(this.recoilVel,t),this.recoilRotVel.multiplyScalar(1-Math.min(1,19*t)),this.recoilRotVel.addScaledVector(this.recoilRot,-170*t),this.recoilRot.addScaledVector(this.recoilRotVel,t),this.viewKickVel.multiplyScalar(1-Math.min(1,12*t)),this.viewKick.x+=this.viewKickVel.x*t,this.viewKick.y+=this.viewKickVel.y*t,this.viewKick.multiplyScalar(1-Math.min(1,6.5*t));let a=1-this.ads*.72,o=Math.max(-1,Math.min(1,-this.lastMouse.x*26))*.03*a,l=Math.max(-1,Math.min(1,-this.lastMouse.y*26))*.026*a;this.swayPos.x+=(o-this.swayPos.x)*Math.min(1,t*8),this.swayPos.y+=(l-this.swayPos.y)*Math.min(1,t*8),this.swayRot.x+=(l*2.6-this.swayRot.x)*Math.min(1,t*7),this.swayRot.y+=(-o*3.2-this.swayRot.y)*Math.min(1,t*7);let c=Math.hypot(this.vel.x,this.vel.z),h=Math.min(1,c/6.2);this.bobT+=t*(6.2+h*6.5)*(this.grounded?1:.2);let u=h*(1-this.ads*.8)*(this.grounded?1:.25),d=Math.sin(this.bobT)*.021*u,f=-Math.abs(Math.cos(this.bobT))*.017*u,g=Math.sin(this.bobT*.5)*.02*u;this.breath+=t*1.15;let v=Math.sin(this.breath)*.0038*(1-h)*(1-this.ads*.6),p=Math.cos(this.breath*.83)*.0046*(1-h)*(1-this.ads*.6),m=this.sprinting?Math.min(1,this.sprinting?1:0):0,y=this.reloading>0?1:0,M=this.switching>0?Math.sin(Math.min(1,(.42-this.switching)/.42)*Math.PI):0,x=this.meleeT>0?Math.sin((1-this.meleeT/.45)*Math.PI):0,T=n.restPos,_=n.adsPos,w=T.x+(_.x-T.x)*this.ads,C=T.y+(_.y-T.y)*this.ads,D=T.z+(_.z-T.z)*this.ads;n.group.position.set(w+d+this.swayPos.x+v+m*.055+x*.1,C+f+this.swayPos.y+p-m*.055-y*.075-M*.34+(this.landBob||0)*-1,D+this.recoilPos.z*.03+m*.045+x*-.16);let b=n.restRot,S=n.adsRot;if(n.group.rotation.set(b.x+(S.x-b.x)*this.ads+this.recoilRot.x*.016+this.swayRot.x+g*.4+m*.14+x*-.55,b.y+(S.y-b.y)*this.ads+this.recoilRot.y*.014+this.swayRot.y+m*.3+M*.35,b.z+(S.z-b.z)*this.ads+this.recoilRot.z*.014+g+m*-.22+y*.24+x*.4),this.reloading>0){let U=1-this.reloading/this.stats.reloadTime;n.group.rotation.z+=Math.sin(U*Math.PI)*.42,n.group.rotation.x+=Math.sin(U*Math.PI*2)*.1,n.group.position.y-=Math.sin(U*Math.PI)*.055}this.arms.position.copy(n.group.position).multiplyScalar(.92),this.arms.rotation.set(n.group.rotation.x*.85,n.group.rotation.y*.85,n.group.rotation.z*.85),this.arms.visible=this.ads<.94||!this.stats.scoped,this.stats.scoped&&(n.group.visible=this.ads<.97),this.landBob=(this.landBob||0)*Math.pow(.02,t),this.vmMuzzleLight.intensity*=Math.pow(4e-4,t)}updateCamera(t,e,n){let i=this.camera,s=Math.min(1,n/6.2),a=Math.sin(this.bobT)*.016*s*(this.grounded?1:.2)*(1-this.ads*.7),o=-Math.abs(Math.cos(this.bobT))*.022*s*(this.grounded?1:.2)*(1-this.ads*.7),l=this.game.shakeOffset;i.position.set(this.pos.x+a+l.x,this.pos.y+this.eye+o-(this.landBob||0)*.9+l.y,this.pos.z+l.z);let c=(this.vel.x*Math.cos(this.yaw)-this.vel.z*Math.sin(this.yaw))/6.2;this.lean=(this.lean||0)+(-c*.03*(1-this.ads*.8)-(this.lean||0))*Math.min(1,t*6);let h=Math.max(-1.54,Math.min(1.54,this.pitch+this.viewKick.y*.01)),u=this.yaw+this.viewKick.x*.01;ho.set(h,u,this.lean+this.game.shakeRoll,"YXZ"),i.quaternion.setFromEuler(ho),this.vmCamera.fov=62-this.ads*(this.stats?.scoped?26:12),this.vmCamera.updateProjectionMatrix()}updateDeath(t,e){this.deathT=(this.deathT||0)+t;let n=Math.min(1,this.deathT/1.5),i=1-Math.pow(1-n,3);this.vel.y+=Xa*t,this.pos.y+=this.vel.y*t,this.game.physics.resolveCapsule(this.pos,uo,.6,3);let s=this.camera;s.position.set(this.pos.x,this.pos.y+.32+(1-i)*(Th-.32),this.pos.z),ho.set(this.pitch*(1-i)-i*1.25,this.yaw,i*1.42,"YXZ"),s.quaternion.setFromEuler(ho),this.flashlight.visible=!1}renderViewmodel(t){this.alive&&(t.autoClear=!1,t.clearDepth(),t.render(this.vmScene,this.vmCamera),t.autoClear=!0)}resize(){this.vmCamera.aspect=window.innerWidth/window.innerHeight,this.vmCamera.updateProjectionMatrix()}};var Qt=(r,t,e=!0)=>{let n=new Ct(r,t);return n.castShadow=e,n.receiveShadow=!0,n};function a1(r,t,e){let n=new ht,i=r.m[e.skin]||r.m.skin,s=r.m.bone,a=ge(.098,[[0,.3,1,.014,2],[0,-.2,-1,.016,2],[0,1,0,.01,3]],{seg:26,seed:t.int(1,999),noiseAmp:.004});a.scale(.86,1.02,.98);let o=Qt(Y(a,.12),i);n.add(o);let l=ge(.072,[[0,-.3,1,.02,2],[.7,-.1,.7,.012,3],[-.7,-.1,.7,.012,3]],{seg:22,seed:t.int(1,999),noiseAmp:.003});l.scale(.92,.84,.8),L(l,{pos:[0,-.026,.04]}),n.add(Qt(Y(l,.1),i));let c=ge(.02,[[0,-.5,1,.014,2]],{seg:14,seed:3,noiseAmp:.001});c.scale(.7,1.2,1.3),L(c,{pos:[0,-.02,.088]}),n.add(Qt(Y(c,.05),i));for(let g of[-1,1]){let v=new Ct(new je(.019,14,10),new Ge({color:657414,roughness:.35,metalness:0}));v.position.set(g*.032,.004,.07),n.add(v);let p=new Ct(new je(.0095,12,8),new Ge({color:2759174,emissive:new It(e.eyeColor),emissiveIntensity:e.eyeGlow,roughness:.15,metalness:0}));p.position.set(g*.032,.004,.083),p.name="eye",n.add(p)}let h=new ht;h.name="jaw",h.position.set(0,-.048,.01);let u=ge(.058,[[0,-.6,.6,.018,2],[0,-1,0,.01,3]],{seg:20,seed:t.int(1,999),noiseAmp:.003});u.scale(.86,.52,.92),L(u,{pos:[0,-.014,.034]}),h.add(Qt(Y(u,.09),i));let d=[];for(let g=0;g<11;g++){let v=(g/10-.5)*Math.PI*.92,p=.046,m=.011+(Math.abs(g-5)<2?.006:0)+t.range(-.001,.002),y=Ft([[0,0],[.0044,.001],[.0032,m*.6],[0,m]],7);L(y,{pos:[Math.sin(v)*p,.004,Math.cos(v)*p+.01],rot:[Math.PI+t.range(-.2,.2),v,t.range(-.15,.15)]}),d.push(y)}h.add(Qt(Y(at(d),.04),r.m.bone)),n.add(h);let f=[];for(let g=0;g<11;g++){let v=(g/10-.5)*Math.PI*.92,p=.045,m=.01+(Math.abs(g-5)<2?.005:0),y=Ft([[0,0],[.0042,.001],[.003,m*.6],[0,m]],7);L(y,{pos:[Math.sin(v)*p,-.044,Math.cos(v)*p+.018],rot:[0,v,0]}),f.push(y)}if(n.add(Qt(Y(at(f),.04),s)),e.exposedSkull){let g=new je(.1,20,12,t.range(0,6),1.5,0,.9);n.add(Qt(Y(g,.1),s))}if(e.hair){let g=[];for(let p=0;p<26;p++){let m=t.range(0,Math.PI*2),y=t.range(.15,.95),M=.096,x=[Math.cos(m)*M*Math.sin(Math.acos(y)),y*M,Math.sin(m)*M*Math.sin(Math.acos(y))],T=t.range(.05,.16),_=Jt([x,[x[0]*1.15,x[1]-T*.4,x[2]*1.15],[x[0]*1.25+t.range(-.02,.02),x[1]-T,x[2]*1.25+t.range(-.02,.02)]],t.range(.0018,.0034),8,5);g.push(_)}let v=new Ge({color:e.hairColor,roughness:.92,metalness:0});n.add(Qt(at(g),v))}return n.name="skull",n}function o1(r,t,e){let n=new ht,i=r.m[e.skin]||r.m.skin,s=r.m[e.cloth]||r.m.rags,a=r.m.bone,o=r.m.gore,l=ge(.15,[[0,.6,.5,.03,2],[0,.2,-.8,.022,2],[1,.3,0,.018,3],[-1,.3,0,.016,3]],{seg:26,seed:t.int(1,999),noiseAmp:.006});l.scale(1,.9,.66),n.add(Qt(Y(l,.16),i));for(let m of[-1,1]){let y=ge(.058,[[0,.2,1,.012,2]],{seg:16,seed:t.int(1,999),noiseAmp:.002});y.scale(1.1,.75,.65),L(y,{pos:[m*.062,.048,.052]}),n.add(Qt(Y(y,.09),i))}if(e.exposedRibs){let m=[];for(let M=0;M<6;M++){let x=.07-M*.03,T=.115-Math.abs(M-2)*.008;for(let _ of[-1,1]){let w=Jt([[_*.012,x+.012,-.052],[_*T*.75,x+.004,.01],[_*T*.55,x-.01,.062],[_*.02,x-.014,.078]],.0072,16,7);m.push(w)}}m.push(L(q(.026,.13,.014,.005,1),{pos:[0,.01,.074]})),n.add(Qt(at(m),a));let y=ge(.088,[],{seg:16,seed:t.int(1,999),noiseAmp:.01});y.scale(1,1.05,.5),L(y,{pos:[0,.005,.02]}),n.add(Qt(Y(y,.08),o))}let c=ge(.115,[[0,-.4,.8,.016,2]],{seg:22,seed:t.int(1,999),noiseAmp:.005});if(c.scale(.95,.8,.7),L(c,{pos:[0,-.13,.006]}),n.add(Qt(Y(c,.13),i)),e.entrails){let m=[];for(let x=0;x<4;x++){let T=t.range(-.05,.05),_=[[T,-.16,.055]],w=-.16;for(let C=0;C<4;C++)w-=t.range(.045,.08),_.push([T+t.range(-.045,.045),w,.055+t.range(-.03,.035)]);m.push(Jt(_,t.range(.012,.02),22,8))}let y=at(m),M=Qt(y,o);M.name="entrails",n.add(M)}let h=[],u=16;for(let m=0;m<=u;m++){let y=m/u,M=.115-y*.29,x=.15*(1-Math.pow(Math.abs(y-.45)*2,2)*.22);y>.8&&(x*=1-(y-.8)*2.2),x*=1+t.range(-.02,.02),h.push([Math.max(x*1.03,.01),M])}let d=Ft(h,22),f=d.attributes.position,g=new A;for(let m=0;m<f.count;m++){g.fromBufferAttribute(f,m);let y=Math.atan2(g.x,g.z);Math.abs(y)<.55&&g.y>-.1&&(g.z*=.55,g.x*=1.3),f.setXYZ(m,g.x,g.y,g.z)}f.needsUpdate=!0,d.computeVertexNormals(),Mn(d,{amp:.014,freq:8,oct:3,seed:t.int(1,99)});let v=Qt(Y(d,.14),s);v.material.side=Ee,n.add(v);let p=Ft([[.062,0],[.078,.012],[.076,.03],[.06,.032]],18);if(L(p,{pos:[0,.112,.004]}),n.add(Qt(Y(p,.06),s)),e.harness){for(let y of[-1,1]){let M=Jt([[y*.07,.1,.01],[y*.04,.02,.07],[y*-.01,-.09,.055]],.014,18,7);n.add(Qt(ut(M,.1),r.m.leather))}let m=q(.07,.06,.036,.008,2);L(m,{pos:[.055,-.1,.052]}),n.add(Qt(Y(m,.08),r.m.leather))}return n.name="torso",n}function l1(r,t,e,n){let i=new ht,s=r.m[e.skin]||r.m.skin,a=.255,o=[[0,.01],[.052,0],[.056,-.045],[.048,-.12],[.04,-.2],[.037,-a],[0,-a-.006]],l=dr(o,{seg:16,amp:.005,freq:12,seed:t.int(1,999)});if(i.add(Qt(ut(l,.12),s)),e.sleeves){let c=Ft([[.056,.01],[.066,-.01],[.062,-.09],[.05,-.105]],18);Mn(c,{amp:.006,freq:14,oct:3,seed:t.int(1,99)});let h=Qt(Y(c,.08),r.m[e.cloth]||r.m.rags);h.material.side=Ee,i.add(h)}return i}function c1(r,t,e,n){let i=new ht,s=r.m[e.skin]||r.m.skin,a=r.m.bone,o=.235,l=[[0,.008],[.041,0],[.043,-.05],[.034,-.14],[.026,-o],[0,-o-.004]],c=dr(l,{seg:14,amp:.004,freq:14,seed:t.int(1,999)});if(i.add(Qt(ut(c,.1),s)),e.boneArm&&n<0){let h=Jt([[.01,-.1,0],[.012,-.18,.004],[.01,-o,0]],.01,12,7),u=Jt([[-.01,-.1,0],[-.012,-.18,-.004],[-.008,-o,0]],.009,12,7);i.add(Qt(at([h,u]),a))}return i}function h1(r,t,e){let n=new ht,i=r.m[e.skin]||r.m.skin,s=ge(.038,[[0,-1,0,.008,2]],{seg:14,seed:t.int(1,999),noiseAmp:.002});s.scale(.85,.95,.5),n.add(Qt(Y(s,.07),i));for(let l=0;l<4;l++){let c=new ht;c.position.set((l-1.5)*.019,-.03,.002),c.rotation.set(t.range(-.15,.15),(l-1.5)*.12,0);let h=c;for(let d=0;d<3;d++){let f=.03-d*.006,g=.0085-d*.0016,v=new ht;v.position.y=d===0?0:-(.03-(d-1)*.006),v.rotation.x=t.range(.15,.55);let p=Ft([[0,0],[g,-.002],[g*1.06,-f*.5],[g*.82,-f]],10);v.add(Qt(ut(p,.035),i)),h.add(v),h=v}let u=Ft([[0,0],[.0042,-.002],[.0022,-.014],[0,-.02]],8);L(u,{pos:[0,-.017,.002],rot:[.5,0,0]}),h.add(Qt(ut(u,.02),r.m.bone)),n.add(c)}let a=new ht;a.position.set(-.03,-.01,.004),a.rotation.set(0,0,1);let o=a;for(let l=0;l<2;l++){let c=.026-l*.005,h=.0095-l*.0018,u=new ht;u.position.y=l===0?0:-.026,u.rotation.x=.3;let d=Ft([[0,0],[h,-.002],[h*1.05,-c*.5],[h*.8,-c]],10);u.add(Qt(ut(d,.03),i)),o.add(u),o=u}return n.add(a),n}function u1(r,t,e){let n=new ht,i=r.m[e.skin]||r.m.skin,s=.365,a=[[0,.012],[.075,0],[.08,-.07],[.07,-.18],[.058,-.3],[.052,-s],[0,-s-.008]],o=dr(a,{seg:18,amp:.006,freq:9,seed:t.int(1,999)});n.add(Qt(ut(o,.16),i));let l=Ft([[.082,.02],[.092,-.01],[.086,-.15],[.076,-.28],[.068,-s-.03],[.06,-s-.05]],20);Mn(l,{amp:.008,freq:10,oct:3,seed:t.int(1,99)});let c=Qt(Y(l,.14),r.m[e.pants]||r.m.rags);return c.material.side=Ee,n.add(c),n}function d1(r,t,e){let n=new ht,i=r.m[e.skin]||r.m.skin,s=.36,a=[[0,.01],[.055,0],[.058,-.055],[.046,-.17],[.032,-.29],[.026,-s],[0,-s-.004]],o=dr(a,{seg:16,amp:.005,freq:11,seed:t.int(1,999)});if(n.add(Qt(ut(o,.14),i)),e.boneLeg){let l=Jt([[0,-.15,.01],[0,-.25,.014],[0,-s,.008]],.013,12,8);n.add(Qt(l,r.m.bone))}return n}function f1(r,t,e){let n=new ht,i=r.m[e.skin]||r.m.skin;if(e.boots){let s=q(.098,.028,.25,.012,2);L(s,{pos:[0,-.022,.048]}),n.add(Qt(Y(s,.1),r.m.rubber));for(let l=0;l<7;l++){let c=q(.092,.008,.018,.003,1);L(c,{pos:[0,-.036,-.048+l*.032]}),n.add(Qt(Y(c,.05),r.m.rubber))}let a=ge(.07,[[0,.2,1,.03,2],[0,1,0,.01,3]],{seg:18,seed:t.int(1,999),noiseAmp:.003});a.scale(.68,.72,1.55),L(a,{pos:[0,.01,.045]}),n.add(Qt(Y(a,.1),r.m.leather));let o=Ft([[.046,0],[.056,.01],[.054,.07],[.044,.076]],16);L(o,{pos:[0,.02,-.015]}),n.add(Qt(Y(o,.07),r.m.leather));for(let l=0;l<4;l++){let c=Jt([[-.03,.036+l*.016,.03-l*.008],[.03,.04+l*.016,.026-l*.008]],.0032,8,5);n.add(Qt(c,r.m.rags))}}else{let s=ge(.062,[[0,-.2,1,.026,2]],{seg:16,seed:t.int(1,999),noiseAmp:.004});s.scale(.72,.52,1.55),L(s,{pos:[0,-.02,.045]}),n.add(Qt(Y(s,.09),i));for(let a=0;a<5;a++){let o=Ft([[0,0],[.0095-a*9e-4,.002],[.008-a*8e-4,.02],[0,.026]],8);L(o,{pos:[(a-2)*.017,-.028,.118],rot:[Math.PI/2,0,0]}),n.add(Qt(ut(o,.03),i))}}return n}var Rh={walker:{hp:100,speed:1.55,dmg:11,scale:1,mass:78,skin:"skin",cloth:"rags",pants:"ragsBlue",eyeColor:16766042,eyeGlow:2.2,hair:!0,hairColor:1709072,exposedRibs:!1,exposedSkull:!1,entrails:!1,boots:!0,sleeves:!0,harness:!1,boneArm:!1,boneLeg:!1,label:"WALKER",tint:16777215,atkRange:1.55,atkRate:1.25},runner:{hp:62,speed:4.55,dmg:9,scale:.94,mass:62,skin:"skinPale",cloth:"ragsRed",pants:"rags",eyeColor:16734752,eyeGlow:4.2,hair:!1,hairColor:1313800,exposedRibs:!0,exposedSkull:!0,entrails:!1,boots:!1,sleeves:!1,harness:!1,boneArm:!0,boneLeg:!1,label:"RUNNER",tint:16777215,atkRange:1.5,atkRate:.75},brute:{hp:420,speed:1.28,dmg:34,scale:1.42,mass:190,skin:"skinRot",cloth:"ragsGreen",pants:"ragsGreen",eyeColor:4259696,eyeGlow:3.2,hair:!1,hairColor:657414,exposedRibs:!0,exposedSkull:!1,entrails:!0,boots:!0,sleeves:!1,harness:!0,boneArm:!1,boneLeg:!1,label:"BRUTE",tint:16777215,atkRange:2.15,atkRate:1.7},crawler:{hp:55,speed:2.15,dmg:13,scale:.88,mass:48,skin:"skinBurn",cloth:"ragsWhite",pants:"rags",eyeColor:16722448,eyeGlow:3.6,hair:!0,hairColor:920070,exposedRibs:!0,exposedSkull:!0,entrails:!0,boots:!1,sleeves:!1,harness:!1,boneArm:!0,boneLeg:!0,label:"CRAWLER",tint:16777215,crawler:!0,atkRange:1.4,atkRate:.95},bloater:{hp:240,speed:1.05,dmg:20,scale:1.22,mass:150,skin:"skinRot",cloth:"ragsWhite",pants:"ragsBlue",eyeColor:11206464,eyeGlow:2.8,hair:!1,hairColor:1051656,exposedRibs:!1,exposedSkull:!1,entrails:!0,boots:!0,sleeves:!0,harness:!1,boneArm:!1,boneLeg:!1,label:"BLOATER",tint:16777215,bloated:!0,explodes:!0,atkRange:1.8,atkRate:1.5}};function Qd(r,t="walker",e=1){let n={...Rh[t],type:t},i=new ce(e*7919+13),s=new ht;s.name="zombie-"+t;let a=new ht;a.name="hips",a.position.y=.92*n.scale,s.add(a);let o=ge(.115,[[0,-.4,0,.014,2]],{seg:18,seed:i.int(1,999),noiseAmp:.004});o.scale(1.05,.72,.8),a.add(Qt(Y(o,.12),r.m[n.skin]||r.m.skin));let l=new ht;l.name="spine",l.position.y=.105,a.add(l);let c=new ht;c.name="chest",c.position.y=.175,l.add(c),c.add(o1(r,i,n));let h=new ht;h.name="neck",h.position.y=.15,c.add(h);let u=Ft([[.04,0],[.046,.02],[.044,.058],[.05,.072]],14);Mn(u,{amp:.004,freq:16,oct:3,seed:i.int(1,99)}),h.add(Qt(ut(u,.06),r.m[n.skin]||r.m.skin));let d=new ht;d.name="head",d.position.y=.098,h.add(d);let f=a1(r,i,n);d.add(f);let g={root:s,hips:a,spine:l,chest:c,neck:h,head:d,skull:f};for(let p of[-1,1]){let m=p<0?"L":"R",y=new ht;y.name="shoulder"+m,y.position.set(p*.148*n.scale,.108,.004),c.add(y);let M=ge(.056,[],{seg:14,seed:i.int(1,999),noiseAmp:.003});M.scale(1,.85,.95),y.add(Qt(Y(M,.08),r.m[n.skin]||r.m.skin));let x=new ht;x.name="upperArm"+m,y.add(x),x.add(l1(r,i,n,p));let T=new ht;T.name="foreArm"+m,T.position.y=-.255,x.add(T),T.add(c1(r,i,n,p));let _=ge(.04,[],{seg:12,seed:i.int(1,999),noiseAmp:.002});T.add(Qt(Y(_,.06),r.m[n.skin]||r.m.skin));let w=new ht;w.name="hand"+m,w.position.y=-.235,T.add(w),w.add(h1(r,i,n)),g["shoulder"+m]=y,g["upperArm"+m]=x,g["foreArm"+m]=T,g["hand"+m]=w}for(let p of[-1,1]){let m=p<0?"L":"R",y=new ht;y.name="thigh"+m,y.position.set(p*.088*n.scale,-.055,0),a.add(y),y.add(u1(r,i,n));let M=new ht;M.name="shin"+m,M.position.y=-.365,y.add(M),M.add(d1(r,i,n));let x=ge(.05,[[0,0,1,.01,2]],{seg:12,seed:i.int(1,999),noiseAmp:.003});M.add(Qt(Y(x,.07),r.m[n.skin]||r.m.skin));let T=new ht;T.name="foot"+m,T.position.y=-.36,M.add(T),T.add(f1(r,i,n)),g["thigh"+m]=y,g["shin"+m]=M,g["foot"+m]=T}n.bloated&&(c.scale.set(1.3,1.1,1.35),a.scale.set(1.2,1,1.25)),n.type==="brute"&&(c.scale.set(1.28,1.14,1.2),g.shoulderL.scale.setScalar(1.3),g.shoulderR.scale.setScalar(1.3),d.scale.setScalar(.88)),n.type==="runner"&&c.scale.set(.88,1.02,.86),s.scale.setScalar(n.scale),s.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!0)});let v=[];return s.traverse(p=>{p.isMesh&&v.push(p)}),{root:s,joints:g,meshes:v,variant:n,rng:i}}var an=new A,ji=new A,po=new A,$d=new pe,mo=new jt,t0=new A(0,1,0),Ch=new A,e0=new A,n0=new jt,i0=new jt,s0=new jt,p1=new A(1,1,1),m1=new A,on={IDLE:0,WALK:1,CHASE:2,ATTACK:3,STAGGER:4,DEAD:5,SPAWN:6},r0=[{name:"head",joint:"head",r:.155,mul:3,y:.06,gib:!0},{name:"chest",joint:"chest",r:.215,mul:1,y:.02},{name:"spine",joint:"spine",r:.19,mul:1.15,y:0},{name:"hips",joint:"hips",r:.175,mul:.9,y:0},{name:"armL",joint:"foreArmL",r:.115,mul:.62,y:-.11,gib:!0,limb:"armL"},{name:"armR",joint:"foreArmR",r:.115,mul:.62,y:-.11,gib:!0,limb:"armR"},{name:"upArmL",joint:"upperArmL",r:.12,mul:.7,y:-.12},{name:"upArmR",joint:"upperArmR",r:.12,mul:.7,y:-.12},{name:"legL",joint:"shinL",r:.12,mul:.55,y:-.17,gib:!0,limb:"legL"},{name:"legR",joint:"shinR",r:.12,mul:.55,y:-.17,gib:!0,limb:"legR"},{name:"thighL",joint:"thighL",r:.145,mul:.68,y:-.17},{name:"thighR",joint:"thighR",r:.145,mul:.68,y:-.17}],go=class{constructor(t,e,n,i){this.game=t,this.type=e,this.def=Rh[e],this.rng=new ce((i||1)*3571+7);let s=Qd(t.mats,e,i);this.root=s.root,this.joints=s.joints,this.meshes=s.meshes,this.variant=s.variant,this.root.position.copy(n),this.root.rotation.y=this.rng.range(0,Math.PI*2),t.scene.add(this.root);let a=1+(t.wave-1)*.075;this.maxHp=this.def.hp*a,this.hp=this.maxHp,this.state=on.SPAWN,this.stateT=0,this.phase=this.rng.range(0,Math.PI*2),this.speedMul=this.rng.range(.88,1.14),this.speed=this.def.speed*this.speedMul*(1+(t.wave-1)*.018),this.vel=new A,this.yaw=this.root.rotation.y,this.targetYaw=this.yaw,this.grounded=!0,this.radius=.36*this.def.scale,this.height=1.78*this.def.scale,this.dead=!1,this.ragdoll=null,this.attackCd=0,this.staggerT=0,this.hitFlash=0,this.limbsLost={},this.crawling=!!this.def.crawler,this.wanderTarget=null,this.repathT=0,this.moan=0,this.moanCd=this.rng.range(1,6),this.spawnT=0,this.bloodBudget=4,this.gibbed=!1,this.headGibbed=!1,this.lastBloodT=0,this.exploded=!1,this.flashMats=new Set;for(let o of this.meshes)this.flashMats.add(o.material);this.root.position.y-=1.4,this.spawnFrom=this.root.position.y,this.spawnTo=n.y,this.gaitScale=this.rng.range(.82,1.22),this.leanBase=this.rng.range(.06,.24),this.armDroop=this.rng.range(.15,.95),this.headTilt=this.rng.range(-.22,.22),this.limpSide=this.rng.chance(.4)?this.rng.chance(.5)?1:-1:0,this.limpAmt=this.limpSide?this.rng.range(.15,.45):0,this.crawling&&(this.root.position.y=n.y,this.spawnFrom=this.root.position.y-.8,this.spawnTo=n.y),this.boundSphere=new In(new A,this.height*.7)}dispose(){if(this.game.scene.remove(this.root),this.root.traverse(t=>{t.isMesh&&t.geometry?.dispose?.()}),this.ragdollMeshes)for(let t of this.ragdollMeshes)t.geometry?.dispose?.()}poseIdle(t){let e=this.joints,n=Math.sin(t*1.1+this.phase),i=Math.sin(t*.7+this.phase*1.7);e.spine.rotation.set(this.leanBase*.5+n*.03,i*.06,n*.02),e.chest.rotation.set(.06+i*.03,-i*.04,0),e.head.rotation.set(-.1+n*.05,i*.22,this.headTilt+n*.04);for(let s of["L","R"]){let a=s==="L"?-1:1;e["upperArm"+s].rotation.set(.1+n*.05,0,a*(.14+i*.03)),e["foreArm"+s].rotation.set(-.35-this.armDroop*.3+n*.06,0,0),e["thigh"+s].rotation.set(n*.02,0,a*.02),e["shin"+s].rotation.set(.06,0,0),e["foot"+s].rotation.set(0,0,0)}}poseWalk(t,e){let n=this.joints,i=2.35*this.gaitScale*(.55+e*.85),s=t*i+this.phase,a=Math.sin(s),o=Math.sin(s*2),l=Math.cos(s);n.hips.position.y=this.hipY0+Math.abs(o)*.03*e-.02*e,n.hips.rotation.set(0,a*.16*e,l*.05*e),n.spine.rotation.set(this.leanBase+.1*e,-a*.13*e,o*.03),n.chest.rotation.set(.1*e,-a*.1*e,-l*.05*e),n.head.rotation.set(-.18*e+o*.04,a*.08,this.headTilt-l*.06);for(let c of["L","R"]){let h=c==="L"?-1:1,u=h>0?s:s+Math.PI,d=Math.sin(u),f=Math.cos(u),g=this.limpSide===h?this.limpAmt:0;n["thigh"+c].rotation.set(d*(.62*e)-.1-g*.3,0,h*.03),n["shin"+c].rotation.set(Math.max(.05,(.55+g)*(.5-f*.5)*e+.08),0,0),n["foot"+c].rotation.set(-d*.28*e+.05,0,0);let v=this.state===on.CHASE?.9:.25,p=-u;n["upperArm"+c].rotation.set(Math.sin(p)*.3*e-v*1.05,0,h*(.16+v*.2+Math.cos(p)*.06)),n["foreArm"+c].rotation.set(-.45-this.armDroop*.45-v*.55+Math.sin(p+1)*.16,0,0),n["hand"+c].rotation.set(.25+Math.sin(s*1.7+h)*.12,0,0)}}poseCrawl(t,e){let n=this.joints,i=t*3*this.gaitScale+this.phase,s=Math.sin(i),a=Math.cos(i);n.hips.position.y=this.hipY0-.62+Math.abs(s)*.02,n.hips.rotation.set(-1.32,s*.16,a*.1),n.spine.rotation.set(.42+s*.1,-s*.14,0),n.chest.rotation.set(.3,s*.1,0),n.head.rotation.set(.85+s*.1,s*.16,this.headTilt);for(let o of["L","R"]){let l=o==="L"?-1:1,c=l>0?i:i+Math.PI;n["upperArm"+o].rotation.set(-2+Math.sin(c)*.75,0,l*.35),n["foreArm"+o].rotation.set(-.55+Math.max(0,Math.cos(c))*.55,0,0),n["thigh"+o].rotation.set(.85+Math.sin(c+Math.PI)*.35,0,l*.28),n["shin"+o].rotation.set(.95+Math.max(0,-Math.cos(c))*.5,0,0),n["foot"+o].rotation.set(-.35,0,0)}}poseAttack(t,e){let n=this.joints,i=Math.sin(Math.min(1,e*1.25)*Math.PI),s=Math.max(0,1-e*3);if(n.spine.rotation.set(this.leanBase+.28*i-.16*s,0,0),n.chest.rotation.set(.22*i,0,0),n.head.rotation.set(-.42*i+.2*s,0,this.headTilt),this.joints.skull){let a=this.joints.skull.getObjectByName("jaw");a&&(a.rotation.x=.1+.62*i)}for(let a of["L","R"]){let o=a==="L"?-1:1,c=Math.max(0,Math.min(1,(e-(a==="L"?0:.14))*1.3)),h=Math.sin(Math.min(1,c*1.25)*Math.PI);n["upperArm"+a].rotation.set(-1.85*h-.55+s*.5,0,o*(.3+.35*h)),n["foreArm"+a].rotation.set(-.3-.45*(1-h),0,0),n["hand"+a].rotation.set(.5+.4*h,0,0)}}poseStagger(t,e){let n=this.joints,i=Math.sin(e*Math.PI*2.6)*(1-e);n.spine.rotation.set(this.leanBase-.3*(1-e),i*.3,i*.16),n.chest.rotation.set(-.2*(1-e),-i*.2,0),n.head.rotation.set(-.3*(1-e),i*.35,this.headTilt+i*.2);for(let s of["L","R"]){let a=s==="L"?-1:1;n["upperArm"+s].rotation.set(-.35-.55*(1-e),0,a*(.5+.4*(1-e))),n["foreArm"+s].rotation.set(-.8+i*.3,0,0),n["thigh"+s].rotation.set(-.2+i*a*.3,0,a*.12),n["shin"+s].rotation.set(.3+Math.abs(i)*.3,0,0)}}update(t,e){if(this.dead){this.updateRagdoll(t);return}this.hipY0===void 0&&(this.hipY0=this.joints.hips.position.y);let n=this.game,i=n.player,s=an.subVectors(i.pos,this.root.position);s.y=0;let a=s.length();if(this.distToPlayer=a,this.stateT+=t,this.hitFlash>0&&(this.hitFlash=Math.max(0,this.hitFlash-t*4)),this.attackCd>0&&(this.attackCd-=t),this.state===on.SPAWN){this.spawnT+=t;let p=Math.min(1,this.spawnT/1.5),m=1-Math.pow(1-p,3);this.root.position.y=this.spawnFrom+(this.spawnTo-this.spawnFrom)*m,this.poseIdle(e*.5),this.joints.spine.rotation.x+=(1-m)*.9;for(let y of["L","R"])this.joints["upperArm"+y].rotation.x-=(1-m)*1.6;p>=1&&(this.state=on.WALK,this.stateT=0),this.applyFlash();return}if(this.state===on.STAGGER){let p=Math.min(1,this.stateT/this.staggerDur);this.poseStagger(e,p),this.vel.multiplyScalar(.86),this.moveBy(this.vel.x*t,this.vel.z*t),p>=1&&(this.state=on.CHASE,this.stateT=0),this.applyFlash(),this.syncCollider();return}if(this.state===on.ATTACK){let p=this.def.atkRate,m=Math.min(1,this.stateT/p);if(this.poseAttack(e,m),this.targetYaw=Math.atan2(s.x,s.z),this.yaw=a0(this.yaw,this.targetYaw,1-Math.pow(.001,t)),this.root.rotation.y=this.yaw,!this.hitLanded&&m>.38&&(this.hitLanded=!0,a<this.def.atkRange*this.def.scale*1.25&&n.player.alive)){let y=this.def.dmg*(1+(n.wave-1)*.05);n.player.damage(y,this.root.position),n.audio.play("zombieHit",this.root.position,.9),n.fx.bloodSpray(i.pos.clone().add(new A(0,-.2,0)),s.clone().normalize().negate(),8,.7)}m>=1&&(this.hitLanded=!1,this.state=on.CHASE,this.stateT=0,this.attackCd=this.def.atkRate*.55),this.applyFlash(),this.syncCollider();return}let o;if(this._alerted)o=!0;else if(a<6)o=!0;else if(a<46){let p=a<18?2:4;this._seeFrame=(this._seeFrame||0)+1,this._seeFrame%p===0&&(this._cachedSee=n.physics.visible(ji.copy(this.root.position).setY(this.root.position.y+1.45*this.def.scale),po.copy(i.pos).setY(i.pos.y+1))),o=!!this._cachedSee}else o=!1;let l=o||a<12||n.noiseLevel>.4||this.stateT>4;l&&(this._alerted=!0),l&&this.state!==on.CHASE&&(this.state=on.CHASE,this.stateT=0);let c=ji.set(0,0,0),h=0;if(this.state===on.CHASE){if(a<this.def.atkRange*this.def.scale&&this.attackCd<=0){this.state=on.ATTACK,this.stateT=0,this.hitLanded=!1,this.game.audio.play("zombieAttack",this.root.position,.8);return}c.copy(s).normalize(),this.avoid(c,t),h=1,this.type==="runner"&&a<14&&(h=1.25)}else{if(this.repathT-=t,!this.wanderTarget||this.repathT<=0){this.repathT=this.rng.range(3,7);let m=this.rng.range(0,Math.PI*2),y=this.rng.range(4,14);this.wanderTarget=new A(this.root.position.x+Math.cos(m)*y,this.root.position.y,this.root.position.z+Math.sin(m)*y)}let p=po.subVectors(this.wanderTarget,this.root.position);p.y=0,p.length()<1.2?(this.wanderTarget=null,h=0):(c.copy(p).normalize(),this.avoid(c,t),h=.45)}let u=(this.limbsLost.legL?1:0)+(this.limbsLost.legR?1:0);u===1&&(h*=.55),u===2&&!this.crawling&&(this.crawling=!0),this.crawling&&(h*=.72);let d=this.speed*h;if(d>.01?(this.vel.x=c.x*d,this.vel.z=c.z*d,this.targetYaw=Math.atan2(c.x,c.z)):(this.vel.x*=.85,this.vel.z*=.85),this.yaw=a0(this.yaw,this.targetYaw,1-Math.pow(8e-4,t)),this.root.rotation.y=this.yaw,this.moveBy(this.vel.x*t,this.vel.z*t),a<30||!(this.frameCounter&3)){let p=n.physics.groundAt(this.root.position.x,this.root.position.y+.6,this.root.position.z,4,this.radius*.7);this._cachedGround=p>-1e8?p:0}this.frameCounter=(this.frameCounter||0)+1;let f=this._cachedGround??0;this.root.position.y+=(f-this.root.position.y)*Math.min(1,t*12);let g=Math.hypot(this.vel.x,this.vel.z)/Math.max(.2,this.def.speed);this.crawling?this.poseCrawl(e,Math.max(.35,g)):g>.08?this.poseWalk(e,Math.min(1.4,Math.max(.35,g))):this.poseIdle(e);let v=this.joints.skull?.getObjectByName("jaw");v&&(v.rotation.x=.08+Math.max(0,Math.sin(e*2.4+this.phase))*.22),this.moanCd-=t,this.moanCd<=0&&(this.moanCd=this.rng.range(4,11),a<34&&this.game.audio.play("zombieMoan",this.root.position,.55*(1-a/40))),this.applyFlash(),this.syncCollider()}avoid(t,e){let n=this.game,i=po.set(0,0,0),s=0,a=n.zombieGrid?.queryNear(this.root.position.x,this.root.position.z)||n.zombies;for(let d=0;d<a.length;d++){let f=a[d];if(f===this||f.dead)continue;let g=this.root.position.x-f.root.position.x,v=this.root.position.z-f.root.position.z,p=g*g+v*v,m=(this.radius+f.radius)*1.9;if(p<m*m&&p>1e-5){let y=Math.sqrt(p);i.x+=g/y*(1-y/m),i.z+=v/y*(1-y/m),s++}}if(s&&(t.x+=i.x*1.5,t.z+=i.z*1.5),this._avoidFrame=(this._avoidFrame||0)+1,!(this._avoidFrame&1)){let d=Math.hypot(t.x,t.z);d>1e-5&&(t.x/=d,t.z/=d);return}let o=an.copy(this.root.position).setY(this.root.position.y+.9),l=1.5,c=ji.set(t.x,0,t.z).normalize(),h=n.physics.raycast(o,c,l);if(h){let d=h.normal,f=c.dot(d);t.x-=d.x*f*1.6,t.z-=d.z*f*1.6,t.x+=-d.z*.5*(this.rng.next()<.5?1:-1),t.z+=d.x*.5}let u=Math.hypot(t.x,t.z);u>1e-5&&(t.x/=u,t.z/=u)}moveBy(t,e){let n=this.root.position;n.x+=t,n.z+=e;let i=an.set(n.x,n.y,n.z);this.game.physics.resolveCapsule(i,this.radius,this.height,3),n.x=i.x,n.z=i.z,i.y>n.y&&(n.y=i.y)}syncCollider(){this.boundSphere.center.set(this.root.position.x,this.root.position.y+this.height*.5,this.root.position.z)}applyFlash(){if(this.flashScaleTarget){let t=this.flashScaleTarget,e=this.hitFlash;t.scale.setScalar(1+e*.11),e<=0&&(this.flashScaleTarget=null)}}raycastZones(t,e,n){if(this.dead)return null;let i=an.subVectors(t,this.boundSphere.center),s=i.dot(e),a=i.lengthSq()-this.boundSphere.radius*this.boundSphere.radius;if(a>0&&s>0||s*s-a<0)return null;let l=null;for(let c of r0){if(c.limb&&this.limbsLost[c.limb]||c.name==="head"&&this.headGibbed)continue;let h=this.joints[c.joint];if(!h)continue;h.getWorldPosition(ji),c.y&&(ji.y+=c.y*this.def.scale);let u=c.r*this.def.scale,d=po.subVectors(ji,t),f=d.dot(e);if(f<0)continue;let g=d.lengthSq()-f*f,v=u*u;if(g>v)continue;let p=Math.sqrt(v-g),m=f-p;m<0&&(m=f+p),!(m<0||m>n)&&(!l||m<l.dist)&&(l={dist:m,zone:c,joint:h,point:t.clone().addScaledVector(e,m)})}return l}hit(t,e,n,i,s){if(this.dead)return!1;let a=e?e.mul:1,o=t*a;this.hp-=o,this.hitFlash=1,e&&(this.flashScaleTarget=this.joints[e.joint]);let l=this.game;l.fx.bloodSpray(n,i,e?.name==="head"?26:15,a>2?1.35:.95),l.fx.bloodMist(n,i),l.hud.showHitmarker(e?.name==="head"),l.audio.play(e?.name==="head"?"headshot":"flesh",n,.85),l.stats.hits++,e?.name==="head"&&l.stats.headshots++;let c=l.physics.raycast(n,i,6);if(c&&l.fx.bloodDecal(c.point,c.normal,.5+Math.random()*.9),e?.gib&&!this.dead){let u=o>this.maxHp*.3||(s?.penetration||1)>2;e.name==="head"&&(u||this.hp<=0)?this.gibHead(i):e.limb&&(u||this.hp<=0&&Math.random()<.55)&&this.gibLimb(e.limb,i)}if(this.hp<=0)return this.die(i,o,n),!0;let h=o/this.maxHp;return h>.14&&this.state!==on.STAGGER&&Math.random()<h*1.7&&(this.state=on.STAGGER,this.stateT=0,this.staggerDur=.42+Math.min(.5,h),this.vel.set(i.x,0,i.z).multiplyScalar(2.6*Math.min(1.6,h*3)/(this.def.mass/80))),!1}gibHead(t){if(this.headGibbed)return;this.headGibbed=!0;let e=this.joints.skull;e&&(e.getWorldPosition(an),this.joints.head.visible=!1,this.game.fx.gibChunk(an,t,"head",this.def.scale),this.game.fx.bloodSpray(an,new A(0,1,0),40,1.7),this.game.fx.bloodSpray(an,t,30,1.5),this.game.fx.attachGeyser(this.joints.neck,1.9),this.game.audio.play("gib",an,1))}gibLimb(t,e){if(this.limbsLost[t])return;this.limbsLost[t]=!0;let n={armL:"foreArmL",armR:"foreArmR",legL:"shinL",legR:"shinR"},i=this.joints[n[t]];if(!i)return;i.getWorldPosition(an),i.visible=!1,this.game.fx.gibChunk(an,e,t.startsWith("arm")?"arm":"leg",this.def.scale),this.game.fx.bloodSpray(an,e,24,1.3);let s=t==="armL"?this.joints.upperArmL:t==="armR"?this.joints.upperArmR:t==="legL"?this.joints.thighL:this.joints.thighR;this.game.fx.attachGeyser(s,1.2),this.game.audio.play("gib",an,.9)}die(t,e,n){if(this.dead)return;this.dead=!0,this.state=on.DEAD,this.deathT=0;let i=this.game;if(i.stats.kills++,i.onZombieKilled(this),i.audio.play("zombieDie",this.root.position,.95),this.def.explodes&&!this.exploded){this.exploded=!0;let s=this.root.position.clone().setY(this.root.position.y+1*this.def.scale);i.fx.goreExplosion(s,this.def.scale),i.audio.play("burst",s,1);let a=i.player.pos.distanceTo(s);a<4.5&&i.player.damage(38*(1-a/4.5),s);for(let o of i.zombies){if(o===this||o.dead)continue;let l=o.root.position.distanceTo(s);l<5&&o.hit(70*(1-l/5),r0[1],o.root.position.clone().setY(s.y),an.copy(o.root.position).sub(s).normalize(),null)}}this.buildRagdoll(t,Math.min(3.4,.9+e/55))}buildRagdoll(t,e){let n=this.game,i=new kn(n.physics),s=this.def.scale,a=this.joints,o=x=>{let T=a[x],_=new A;return T.getWorldPosition(_),_},l={},c=(x,T,_,w)=>(l[x]=i.particle(T.x,T.y,T.z,_*s,w),l[x]),h=o("hips"),u=o("spine"),d=o("chest"),f=o("neck"),g=o("head");c("hips",h,.16,5),c("spine",u,.15,4),c("chest",d,.17,5.5),c("neck",f,.1,1.6),c("head",g.clone().setY(g.y+.09*s),.13,2.4);for(let x of["L","R"]){let T=o("shoulder"+x),_=o("foreArm"+x),w=o("hand"+x);c("sh"+x,T,.1,1.8),c("el"+x,_,.085,1.4),c("ha"+x,w,.07,.9);let C=o("thigh"+x),D=o("shin"+x),b=o("foot"+x);c("th"+x,C,.13,3),c("kn"+x,D,.1,2.4),c("ft"+x,b,.09,1.4)}let v=(x,T,_=1)=>i.link(l[x],l[T],void 0,_);v("hips","spine"),v("spine","chest"),v("chest","neck"),v("neck","head");for(let x of["L","R"])v("chest","sh"+x),v("sh"+x,"el"+x),v("el"+x,"ha"+x),v("hips","th"+x),v("th"+x,"kn"+x),v("kn"+x,"ft"+x),v("spine","sh"+x,.55),v("spine","th"+x,.65),i.range(l["sh"+x],l["ha"+x],.22*s,.48*s,.55),i.range(l["th"+x],l["ft"+x],.3*s,.72*s,.6),i.range(l.head,l["sh"+x],.16*s,.42*s,.35);v("shL","shR",.75),v("thL","thR",.7),v("chest","hips",.55),i.range(l.head,l.hips,.42*s,.8*s,.4);let p=t.clone().normalize().multiplyScalar(e*.032),m=(Math.random()-.5)*e*.02;for(let x in l){let T=l[x];T.prev.sub(p),T.prev.x-=m*(T.p.y-h.y),T.prev.z+=m*(T.p.x-h.x),T.prev.x-=(Math.random()-.5)*.012,T.prev.y-=(Math.random()-.5)*.01,T.prev.z-=(Math.random()-.5)*.012}l.chest.prev.sub(p.clone().multiplyScalar(.7)),l.head.prev.sub(p.clone().multiplyScalar(.55)),this.ragdollSegs=[];let y=(x,T,_,w)=>{if(!x||!x.parent)return;let C=new ht;n.scene.add(C),x.updateWorldMatrix(!0,!1);let D=x.matrixWorld.clone(),b=[...x.children].filter(U=>!U.isGroup||U.children.length),S=new jt;for(let U of[...x.children]){U.updateWorldMatrix(!0,!1);let z=U.matrixWorld.clone();C.add(U),S.copy(C.matrixWorld).invert(),U.matrix.copy(S.multiply(z)),U.matrix.decompose(U.position,U.quaternion,U.scale)}this.ragdollSegs.push({holder:C,a:l[T],b:l[_],upRef:w||null,off:new A})},M=(x,T,_)=>y(this.joints[x],T,_);M("head","head","neck"),M("neck","neck","chest"),M("chest","chest","spine"),M("spine","spine","hips"),M("hips","hips","spine");for(let x of["L","R"])M("shoulder"+x,"sh"+x,"el"+x),M("upperArm"+x,"sh"+x,"el"+x),M("foreArm"+x,"el"+x,"ha"+x),M("hand"+x,"ha"+x,"el"+x),M("thigh"+x,"th"+x,"kn"+x),M("shin"+x,"kn"+x,"ft"+x),M("foot"+x,"ft"+x,"kn"+x);for(let x of this.ragdollSegs){x.restLen=Math.max(.02,x.a.p.distanceTo(x.b.p)),x.holder.updateMatrixWorld(),x.q0=new pe,mo.lookAt(x.a.p,x.b.p,t0),x.q0.setFromRotationMatrix(mo),x.qInv=x.q0.clone().invert(),x.p0=x.a.p.clone(),x.children=x.holder.children.map(_=>({obj:_,pos:_.position.clone(),quat:_.quaternion.clone(),scale:_.scale.clone()}));let T=new jt().compose(x.p0,x.q0,new A(1,1,1)).invert();for(let _ of x.children){let w=new jt().compose(_.pos,_.quat,_.scale),C=T.clone().multiply(w);_.lp=new A,_.lq=new pe,_.ls=new A,C.decompose(_.lp,_.lq,_.ls)}x.holder.position.set(0,0,0),x.holder.quaternion.identity(),x.holder.scale.set(1,1,1)}this.root.visible=!1,this.ragdoll=i,this.ragdollT=0,this.poolSpawned=!1,this.poolTimer=.35}updateRagdoll(t){if(!this.ragdoll)return;if(this.ragdollT+=t,this.lastDt=t,this.ragdoll.sleeping){this.poolSpawned||this.trySpawnPool(),this.ragdollT>26&&this.stepFadeout(t);return}this.ragdoll.step(t,4);let e=this.ragdollSegs;for(let n=0;n<e.length;n++){let i=e[n];Ch.copy(i.a.p),e0.copy(i.b.p),mo.lookAt(Ch,e0,t0),$d.setFromRotationMatrix(mo),n0.compose(Ch,$d,p1);for(let s=0;s<i.children.length;s++){let a=i.children[s];i0.compose(a.lp,a.lq,a.ls),s0.copy(n0).multiply(i0),s0.decompose(a.obj.position,a.obj.quaternion,a.obj.scale)}}this.trySpawnPool(),this.ragdollT>26&&this.stepFadeout(t)}trySpawnPool(){if(this.poolSpawned||(this.poolTimer=(this.poolTimer??.35)-this.lastDt,this.poolTimer>0&&!this.ragdoll.sleeping))return;this.poolSpawned=!0;let t=this.ragdoll.center(m1),e=this.game.physics.groundAt(t.x,t.y+.5,t.z,3,.3),n=e>-1e8?e:0;this.game.fx.bloodPool(an.set(t.x,n,t.z),1.4+Math.random()*1.1,this.def.scale);for(let i=0;i<3;i++){let s=Math.random()*Math.PI*2,a=Math.random()*1.4*this.def.scale;this.game.fx.bloodPool(ji.set(t.x+Math.cos(s)*a,n,t.z+Math.sin(s)*a),.5+Math.random()*.8,this.def.scale)}}stepFadeout(t){this.lastDt=t;let e=Math.min(1,(this.ragdollT-26)/4),n=this.ragdollSegs;for(let i=0;i<n.length;i++){let s=n[i].children;for(let a=0;a<s.length;a++)s[a].obj.traverse?.(l=>{l.isMesh&&l.material&&(l.material.transparent||(l.material=l.material.clone(),l.material.transparent=!0),l.material.opacity=1-e)})}e>=1&&(this.markForRemoval=!0)}disposeRagdoll(){if(this.ragdollSegs){for(let t of this.ragdollSegs)t.holder.traverse(e=>{e.isMesh&&e.geometry?.dispose?.()}),this.game.scene.remove(t.holder);this.ragdollSegs=null}}};function a0(r,t,e){let n=t-r;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return r+n*e}var vo=class{constructor(t){this.game=t,this.root=document.getElementById("hud"),this.root.innerHTML="",this.visible=!1,this.canvas=document.createElement("canvas"),this.canvas.className="hud-canvas",this.root.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.resize(),this.root.insertAdjacentHTML("beforeend",`
      <div class="hud-vitals">
        <div class="vital-block">
          <div class="vital-label">VITALS</div>
          <div class="bar-outer hp"><div class="bar-fill" id="hp-fill"></div><div class="bar-ghost" id="hp-ghost"></div></div>
          <div class="vital-row">
            <span class="vital-num" id="hp-num">100</span>
            <span class="vital-unit">HP</span>
            <span class="vital-sep"></span>
            <span class="vital-num sm" id="armor-num">0</span>
            <span class="vital-unit">ARM</span>
          </div>
          <div class="bar-outer stam"><div class="bar-fill" id="stam-fill"></div></div>
        </div>
      </div>

      <div class="hud-weapon">
        <div class="wpn-name" id="wpn-name">MK-7 CARBINE</div>
        <div class="wpn-ammo">
          <span class="ammo-mag" id="ammo-mag">30</span>
          <span class="ammo-slash">/</span>
          <span class="ammo-res" id="ammo-res">180</span>
        </div>
        <div class="wpn-mag-dots" id="mag-dots"></div>
        <div class="wpn-extra">
          <span class="chip" id="gren-chip">\u2726 3</span>
          <span class="chip" id="fire-chip">AUTO</span>
        </div>
      </div>

      <div class="hud-wave">
        <div class="wave-label">WAVE</div>
        <div class="wave-num" id="wave-num">1</div>
        <div class="wave-sub" id="wave-sub">0 / 8 REMAINING</div>
        <div class="wave-bar"><div class="wave-bar-fill" id="wave-bar"></div></div>
      </div>

      <div class="hud-score">
        <div class="score-row"><span class="k">SCORE</span><span class="v" id="score-v">0</span></div>
        <div class="score-row"><span class="k">KILLS</span><span class="v" id="kills-v">0</span></div>
        <div class="score-row"><span class="k">HEADSHOTS</span><span class="v" id="hs-v">0</span></div>
        <div class="score-row"><span class="k">ACCURACY</span><span class="v" id="acc-v">\u2014</span></div>
      </div>

      <div class="hud-toasts" id="toasts"></div>
      <div class="hud-center-msg" id="center-msg"></div>
      <div class="hud-prompt" id="use-prompt"></div>
      <div class="hud-objective" id="hud-objective">
        <span class="obj-label">OBJECTIVE</span>
        <span class="obj-text" id="obj-text">Survive the outbreak</span>
      </div>
      <div class="hud-radio" id="hud-radio"></div>
      <div class="hud-hint" id="hud-hint">
        <b>WASD</b> move \xB7 <b>MOUSE</b> aim \xB7 <b>LMB</b> fire \xB7 <b>RMB</b> aim \xB7 <b>R</b> reload
        \xB7 <b>1-5</b> weapons \xB7 <b>SHIFT</b> sprint \xB7 <b>CTRL</b> crouch \xB7 <b>SPACE</b> jump
        \xB7 <b>V</b> melee \xB7 <b>G</b> grenade \xB7 <b>F</b> light \xB7 <b>ESC</b> menu
      </div>
      <div class="hud-lowhp" id="lowhp"></div>
      <div class="hud-killfeed" id="killfeed"></div>
    `);let e=n=>document.getElementById(n);this.el={hpFill:e("hp-fill"),hpGhost:e("hp-ghost"),hpNum:e("hp-num"),armorNum:e("armor-num"),stamFill:e("stam-fill"),wpnName:e("wpn-name"),ammoMag:e("ammo-mag"),ammoRes:e("ammo-res"),magDots:e("mag-dots"),grenChip:e("gren-chip"),fireChip:e("fire-chip"),waveNum:e("wave-num"),waveSub:e("wave-sub"),waveBar:e("wave-bar"),scoreV:e("score-v"),killsV:e("kills-v"),hsV:e("hs-v"),accV:e("acc-v"),toasts:e("toasts"),centerMsg:e("center-msg"),usePrompt:e("use-prompt"),objective:e("hud-objective"),objText:e("obj-text"),radio:e("hud-radio"),hint:e("hud-hint"),lowhp:e("lowhp"),killfeed:e("killfeed")},this.hitmarkers=[],this.damageMarks=[],this.crossSpread=0,this.crossTargetSpread=0,this.hpDisplay=100,this.scope=0,this.t=0,this.hintT=22,this.killfeedItems=[],this.lowHpPulse=0,window.addEventListener("resize",()=>this.resize())}resize(){let t=Math.min(window.devicePixelRatio||1,2);this.canvas.width=Math.floor(window.innerWidth*t),this.canvas.height=Math.floor(window.innerHeight*t),this.canvas.style.width=window.innerWidth+"px",this.canvas.style.height=window.innerHeight+"px",this.dpr=t}show(t){this.visible=t,this.root.style.display=t?"block":"none"}setWeapon(t,e){this.el.wpnName.textContent=t.name,this.el.ammoMag.textContent=e.mag,this.el.ammoRes.textContent=e.reserve,this.el.ammoMag.classList.toggle("low",e.mag<=Math.max(1,Math.ceil(t.mag*.25))),this.el.ammoMag.classList.toggle("empty",e.mag===0),this.el.fireChip.textContent=t.auto?"AUTO":t.pellets?"PUMP":t.scoped?"BOLT":"SEMI";let n=Math.min(t.mag,40),i="";for(let s=0;s<n;s++){let a=s<Math.round(e.mag/t.mag*n);i+=`<i class="${a?"on":""}"></i>`}this.el.magDots.innerHTML=i}setGrenades(t){this.el.grenChip.textContent="\u2726 "+t}setWave(t,e,n){this.el.waveNum.textContent=t,this.el.waveSub.textContent=`${e} / ${n} REMAINING`;let i=n>0?1-e/n:1;this.el.waveBar.style.width=(i*100).toFixed(1)+"%"}setStats(t){this.el.scoreV.textContent=t.score.toLocaleString(),this.el.killsV.textContent=t.kills,this.el.hsV.textContent=t.headshots,this.el.accV.textContent=t.shots>0?Math.round(t.hits/t.shots*100)+"%":"\u2014"}setScope(t){this.scope=t}setRadio(t){if(!this.el.radio)return;if(!t||!t.length){this.el.radio.innerHTML="";return}let e=t.map((n,i)=>{let s=i===t.length-1,a=n.t>n.life-1.2?Math.max(0,(n.life-n.t)/1.2):1;return`<div class="radio-line ${n.kind==="warn"?"radio-warn":n.kind==="drop"?"radio-drop":"radio-cmd"} ${s?"radio-active":"radio-queued"}" style="opacity:${s?a.toFixed(2):(a*.4).toFixed(2)}">
        <span class="radio-src">${n.kind==="warn"?"\u26A0 COMMAND":n.kind==="drop"?"\u25C8 SUPPLY":"\u25C8 COMMAND"}</span>
        <span class="radio-text">${n.text}</span>
      </div>`}).join("");this.el.radio.innerHTML=e}setObjective(t,e=!1){this.el.objText&&(this._objText===t&&!e||(this._objText=t,this.el.objText.textContent=t,e&&(this.el.objective.classList.remove("flash"),this.el.objective.offsetWidth,this.el.objective.classList.add("flash"))))}showHitmarker(t){this.hitmarkers.push({t:0,life:t?.34:.22,head:!!t}),this.game.audio?.play(t?"hitmarkHead":"hitmark",null,t?.5:.32)}showDamage(t,e){this.damageMarks.push({x:t,y:e,t:0,life:1.1})}toast(t,e=""){let n=document.createElement("div");n.className="toast "+e,n.textContent=t,this.el.toasts.appendChild(n),setTimeout(()=>{n.classList.add("out")},2200),setTimeout(()=>{n.remove()},2900)}killfeed(t,e=""){let n=document.createElement("div");for(n.className="kf "+e,n.innerHTML=t,this.el.killfeed.appendChild(n);this.el.killfeed.children.length>5;)this.el.killfeed.removeChild(this.el.killfeed.firstChild);setTimeout(()=>{n.classList.add("out")},2600),setTimeout(()=>{n.remove()},3200)}centerMessage(t,e="",n=2.6){this.el.centerMsg.innerHTML=t?`<div class="cm-main">${t}</div>${e?`<div class="cm-sub">${e}</div>`:""}`:"",this.el.centerMsg.classList.toggle("on",!!t),t&&(clearTimeout(this._cmT),this._cmT=setTimeout(()=>{this.el.centerMsg.classList.remove("on")},n*1e3))}setPrompt(t){this._prompt!==t&&(this._prompt=t,this.el.usePrompt.innerHTML=t?`<span class="key">E</span> ${t}`:"",this.el.usePrompt.classList.toggle("on",!!t))}update(t){if(!this.visible)return;this.t+=t;let e=this.game.player;if(!e)return;this.hpDisplay+=(e.hp-this.hpDisplay)*Math.min(1,t*9);let n=Math.max(0,this.hpDisplay/e.maxHp);this.el.hpFill.style.width=(n*100).toFixed(1)+"%",this.el.hpGhost.style.width=(Math.max(0,e.hp/e.maxHp)*100).toFixed(1)+"%",this.el.hpNum.textContent=Math.max(0,Math.ceil(e.hp)),this.el.hpNum.classList.toggle("low",e.hp<35),this.el.armorNum.textContent=Math.ceil(e.armor),this.el.stamFill.style.width=(e.stamina*100).toFixed(1)+"%",this.el.stamFill.classList.toggle("low",e.stamina<.2);let i=e.hp<40?1-e.hp/40:0;this.lowHpPulse+=t*(2.2+i*3.4),this.el.lowhp.style.opacity=(i*(.55+.45*Math.abs(Math.sin(this.lowHpPulse)))).toFixed(3),this.hintT>0&&(this.hintT-=t,this.el.hint.style.opacity=Math.min(1,this.hintT/3).toFixed(2),this.hintT<=0&&(this.el.hint.style.display="none"));let s=e.currentSpread(),a=e.camera.fov*Math.PI/180,o=s/(a*.5)*(window.innerHeight*.5);this.crossTargetSpread=Math.max(3,Math.min(140,o)),this.crossSpread+=(this.crossTargetSpread-this.crossSpread)*Math.min(1,t*16),this.drawCanvas(t)}drawCanvas(t){let e=this.ctx,n=this.canvas.width,i=this.canvas.height,s=this.dpr;e.clearRect(0,0,n,i);let a=n/2,o=i/2,l=this.game.player,c=this.scope>.02;if(c){let h=Math.pow(this.scope,1.6),u=Math.min(n,i)*.42;e.save(),e.globalAlpha=h,e.fillStyle="#000",e.beginPath(),e.rect(0,0,n,i),e.arc(a,o,u,0,Math.PI*2,!0),e.fill();let d=e.createRadialGradient(a,o,u*.45,a,o,u);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(1,"rgba(0,0,0,0.82)"),e.fillStyle=d,e.beginPath(),e.arc(a,o,u,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(12,14,12,0.92)",e.lineWidth=1.6*s,e.beginPath(),e.moveTo(a-u,o),e.lineTo(a-u*.06,o),e.moveTo(a+u*.06,o),e.lineTo(a+u,o),e.moveTo(a,o-u),e.lineTo(a,o-u*.06),e.moveTo(a,o+u*.06),e.lineTo(a,o+u),e.stroke(),e.lineWidth=3.2*s,e.beginPath(),e.moveTo(a-u*.55,o),e.lineTo(a-u*.1,o),e.moveTo(a+u*.1,o),e.lineTo(a+u*.55,o),e.moveTo(a,o+u*.1),e.lineTo(a,o+u*.55),e.stroke(),e.fillStyle="rgba(12,14,12,0.9)";for(let f=1;f<=5;f++){let g=u*.1+f*(u*.085);for(let[v,p]of[[g,0],[-g,0],[0,g]])e.beginPath(),e.arc(a+v,o+p,2*s,0,Math.PI*2),e.fill()}e.fillStyle="rgba(20,24,20,0.75)",e.font=`${11*s}px "Rajdhani", monospace`,e.textAlign="left";for(let f=1;f<=4;f++)e.fillText(String(f*2),a+6*s,o+u*.1+f*(u*.085)+4*s);e.strokeStyle="rgba(0,0,0,0.95)",e.lineWidth=8*s,e.beginPath(),e.arc(a,o,u+3*s,0,Math.PI*2),e.stroke(),e.restore()}if(!c||this.scope<.9){let h=1-this.scope,u=this.crossSpread*s*.5,d=9*s,f=2*s,g=0,p=(this.game.aimTarget?1:0)?"rgba(255,72,58,":"rgba(232,240,236,";e.save(),e.globalAlpha=h,e.lineCap="round",e.strokeStyle="rgba(0,0,0,0.55)",e.lineWidth=f+2.2*s,this._crossPath(e,a,o,u+g,d),e.stroke(),e.strokeStyle=p+"0.92)",e.lineWidth=f,this._crossPath(e,a,o,u+g,d),e.stroke(),e.fillStyle=p+"0.95)",e.beginPath(),e.arc(a,o,1.5*s,0,Math.PI*2),e.fill(),e.restore()}for(let h=this.hitmarkers.length-1;h>=0;h--){let u=this.hitmarkers[h];if(u.t+=t,u.t>=u.life){this.hitmarkers.splice(h,1);continue}let d=u.t/u.life,f=1-d,g=(u.head?15:11)*s*(1+d*.7),v=(u.head?5:4)*s;e.save(),e.globalAlpha=f,e.lineCap="round",e.strokeStyle="rgba(0,0,0,0.6)",e.lineWidth=4.2*s,this._xPath(e,a,o,v,g),e.stroke(),e.strokeStyle=u.head?"rgba(255,214,92,0.98)":"rgba(255,255,255,0.95)",e.lineWidth=2.4*s,this._xPath(e,a,o,v,g),e.stroke(),e.restore()}for(let h=this.damageMarks.length-1;h>=0;h--){let u=this.damageMarks[h];if(u.t+=t,u.t>=u.life){this.damageMarks.splice(h,1);continue}let d=Math.pow(1-u.t/u.life,1.5),f=Math.atan2(u.x,u.y),g=Math.min(n,i)*.2;e.save(),e.translate(a,o),e.rotate(f),e.globalAlpha=d*.92;let v=e.createLinearGradient(0,-g-34*s,0,-g);v.addColorStop(0,"rgba(255,40,30,0)"),v.addColorStop(1,"rgba(255,52,38,0.95)"),e.fillStyle=v,e.beginPath(),e.moveTo(-24*s,-g),e.lineTo(0,-g-30*s),e.lineTo(24*s,-g),e.closePath(),e.fill(),e.restore()}if(l&&l.alive){let h=l.camera;e.save();for(let u of this.game.zombies){if(u.dead)continue;let d=u.root.position.distanceTo(l.pos);if(d>16)continue;let f=u.root.position.clone();if(f.y+=1,f.project(h),f.z<1&&Math.abs(f.x)<1&&Math.abs(f.y)<1)continue;let v=u.root.position.clone().sub(l.pos).setY(0).normalize(),p=new A(-Math.sin(l.yaw),0,-Math.cos(l.yaw)),m=new A(Math.cos(l.yaw),0,-Math.sin(l.yaw)),y=Math.atan2(v.dot(m),v.dot(p)),M=Math.min(n,i)*.3;e.save(),e.translate(a,o),e.rotate(y),e.globalAlpha=.55*(1-d/16),e.fillStyle="rgba(255,120,60,0.9)",e.beginPath(),e.moveTo(-8*s,-M),e.lineTo(0,-M-12*s),e.lineTo(8*s,-M),e.closePath(),e.fill(),e.restore()}e.restore()}}_crossPath(t,e,n,i,s){t.beginPath(),t.moveTo(e-i-s,n),t.lineTo(e-i,n),t.moveTo(e+i,n),t.lineTo(e+i+s,n),t.moveTo(e,n-i-s),t.lineTo(e,n-i),t.moveTo(e,n+i),t.lineTo(e,n+i+s)}_xPath(t,e,n,i,s){t.beginPath(),t.moveTo(e-i-s,n-i-s),t.lineTo(e-i,n-i),t.moveTo(e+i,n+i),t.lineTo(e+i+s,n+i+s),t.moveTo(e+i+s,n-i-s),t.lineTo(e+i,n-i),t.moveTo(e-i,n+i),t.lineTo(e-i-s,n+i+s)}};var xo=class{constructor(t){this.game=t,this.root=document.getElementById("menu"),this.screen="loading",this.build(),this.bind()}build(){this.root.innerHTML=`
      <div class="mn-bg"></div>
      <div class="mn-scan"></div>

      <!-- ============================ LOADING ============================ -->
      <section class="mn-screen" data-screen="loading">
        <div class="ld-wrap">
          <div class="ld-title">DEAD<span>SECTOR</span></div>
          <div class="ld-sub">PROCEDURAL ASSET FORGE</div>
          <div class="ld-bar"><div class="ld-fill" id="ld-fill"></div></div>
          <div class="ld-status" id="ld-status">Initialising\u2026</div>
          <div class="ld-pct" id="ld-pct">0%</div>
          <div class="ld-note">Every texture, model, sound and animation in this game is
          generated at runtime from code \u2014 no external art assets.</div>
        </div>
      </section>

      <!-- ============================== MAIN ============================= -->
      <section class="mn-screen" data-screen="main">
        <div class="mn-logo">
          <div class="mn-logo-main">DEAD<span>SECTOR</span></div>
          <div class="mn-logo-sub">// SURVIVE THE QUARANTINE ZONE</div>
        </div>
        <nav class="mn-nav">
          <button class="mn-btn primary" data-act="play">
            <span class="bi">\u25B6</span><span class="bt">DEPLOY</span><span class="bs">Begin the outbreak</span>
          </button>
          <button class="mn-btn" data-act="loadout">
            <span class="bi">\u2731</span><span class="bt">ARSENAL</span><span class="bs">Weapons &amp; enemy intel</span>
          </button>
          <button class="mn-btn" data-act="settings">
            <span class="bi">\u2699</span><span class="bt">SETTINGS</span><span class="bs">Graphics, audio, controls</span>
          </button>
          <button class="mn-btn" data-act="credits">
            <span class="bi">i</span><span class="bt">ABOUT</span><span class="bs">How this was built</span>
          </button>
          <button class="mn-btn danger" data-act="quit">
            <span class="bi">\u23FB</span><span class="bt">EXIT</span><span class="bs">Close the application</span>
          </button>
        </nav>
        <div class="mn-foot">
          <span>v1.0.0</span><span class="dot">\u2022</span><span>WebGL2 / Three.js</span>
          <span class="dot">\u2022</span><span id="mn-best">BEST: WAVE 0</span>
        </div>
      </section>

      <!-- ============================= PAUSE ============================= -->
      <section class="mn-screen" data-screen="pause">
        <div class="mn-panel">
          <h2 class="pn-title">PAUSED</h2>
          <div class="pn-stats" id="pause-stats"></div>
          <nav class="mn-nav compact">
            <button class="mn-btn primary" data-act="resume"><span class="bt">RESUME</span></button>
            <button class="mn-btn" data-act="settings"><span class="bt">SETTINGS</span></button>
            <button class="mn-btn" data-act="restart"><span class="bt">RESTART</span></button>
            <button class="mn-btn danger" data-act="tomain"><span class="bt">ABANDON</span></button>
          </nav>
        </div>
      </section>

      <!-- =========================== SETTINGS ============================ -->
      <section class="mn-screen" data-screen="settings">
        <div class="mn-panel wide">
          <h2 class="pn-title">SETTINGS</h2>
          <div class="set-tabs">
            <button class="set-tab active" data-tab="video">VIDEO</button>
            <button class="set-tab" data-tab="audio">AUDIO</button>
            <button class="set-tab" data-tab="controls">CONTROLS</button>
            <button class="set-tab" data-tab="game">GAMEPLAY</button>
          </div>

          <div class="set-body" data-tab-body="video">
            <div class="set-row">
              <label>Quality preset</label>
              <div class="seg" data-seg="quality">
                <button data-v="low">LOW</button><button data-v="medium">MEDIUM</button><button data-v="high">HIGH</button>
              </div>
            </div>
            <div class="set-row"><label>Field of view</label>
              <input type="range" id="s-fov" min="65" max="110" step="1"><span class="val" id="v-fov">74</span></div>
            <div class="set-row"><label>Exposure</label>
              <input type="range" id="s-exp" min="0.6" max="1.6" step="0.02"><span class="val" id="v-exp">1.00</span></div>
            <div class="set-row"><label>Film grain</label>
              <input type="range" id="s-grain" min="0" max="0.16" step="0.005"><span class="val" id="v-grain">0.055</span></div>
            <div class="set-row"><label>Vignette</label>
              <input type="range" id="s-vig" min="0" max="2" step="0.05"><span class="val" id="v-vig">1.05</span></div>
            <div class="set-row"><label>Bloom</label>
              <input type="range" id="s-bloom" min="0" max="1.4" step="0.05"><span class="val" id="v-bloom">0.55</span></div>
            <div class="set-row"><label>Ambient occlusion</label>
              <div class="toggle" data-tg="sao"><i></i></div></div>
            <div class="set-row"><label>Motion / view bob</label>
              <div class="toggle" data-tg="bob"><i></i></div></div>
          </div>

          <div class="set-body hidden" data-tab-body="audio">
            <div class="set-row"><label>Master volume</label>
              <input type="range" id="s-vmaster" min="0" max="1" step="0.02"><span class="val" id="v-vmaster">85%</span></div>
            <div class="set-row"><label>Effects</label>
              <input type="range" id="s-vsfx" min="0" max="1" step="0.02"><span class="val" id="v-vsfx">100%</span></div>
            <div class="set-row"><label>Ambience</label>
              <input type="range" id="s-vmusic" min="0" max="1" step="0.02"><span class="val" id="v-vmusic">55%</span></div>
          </div>

          <div class="set-body hidden" data-tab-body="controls">
            <div class="set-row"><label>Mouse sensitivity</label>
              <input type="range" id="s-sens" min="0.4" max="4" step="0.05"><span class="val" id="v-sens">1.00</span></div>
            <div class="set-row"><label>Invert vertical</label>
              <div class="toggle" data-tg="invert"><i></i></div></div>
            <div class="set-row"><label>Hold to aim</label>
              <div class="toggle on" data-tg="holdads"><i></i></div></div>
            <div class="keymap" id="keymap"></div>
          </div>

          <div class="set-body hidden" data-tab-body="game">
            <div class="set-row"><label>Gore amount</label>
              <input type="range" id="s-gore" min="0" max="2" step="0.05"><span class="val" id="v-gore">1.00</span></div>
            <div class="set-row"><label>Blood decals persist</label>
              <div class="toggle on" data-tg="persist"><i></i></div></div>
            <div class="set-row"><label>Difficulty</label>
              <div class="seg" data-seg="difficulty">
                <button data-v="easy">SURVIVOR</button><button data-v="normal">SOLDIER</button><button data-v="hard">NIGHTMARE</button>
              </div>
            </div>
            <div class="set-row"><label>Show damage numbers</label>
              <div class="toggle" data-tg="dmgnum"><i></i></div></div>
          </div>

          <div class="pn-actions">
            <button class="mn-btn small" data-act="defaults"><span class="bt">RESET DEFAULTS</span></button>
            <button class="mn-btn small primary" data-act="back"><span class="bt">BACK</span></button>
          </div>
        </div>
      </section>

      <!-- ============================ LOADOUT ============================ -->
      <section class="mn-screen" data-screen="loadout">
        <div class="mn-panel wide">
          <h2 class="pn-title">ARSENAL &amp; INTEL</h2>
          <div class="lo-cols">
            <div class="lo-col">
              <h3>WEAPONS</h3>
              <div id="lo-weapons" class="lo-list"></div>
            </div>
            <div class="lo-col">
              <h3>HOSTILES</h3>
              <div id="lo-enemies" class="lo-list"></div>
            </div>
          </div>
          <div class="pn-actions"><button class="mn-btn small primary" data-act="back"><span class="bt">BACK</span></button></div>
        </div>
      </section>

      <!-- ============================ CREDITS ============================ -->
      <section class="mn-screen" data-screen="credits">
        <div class="mn-panel">
          <h2 class="pn-title">ABOUT DEAD SECTOR</h2>
          <div class="cr-body">
            <p><b>Everything is generated from code.</b> There are no image files, model
            files, or audio files anywhere in this project.</p>
            <ul>
              <li><b>Textures</b> \u2014 PBR albedo / normal / roughness / metal / AO sets are baked on the
              GPU at load time from hand-written GLSL noise recipes (brick, concrete, asphalt,
              rust, skin, cloth, blood, glass\u2026).</li>
              <li><b>Models</b> \u2014 every mesh is built procedurally: bevelled solids, lathed profiles,
              extruded outlines, swept tubes and noise-displaced organics. No primitive is ever
              left as a bare cube or plane.</li>
              <li><b>Animation</b> \u2014 zombie locomotion, attacks and staggers are procedural
              sinusoidal joint blends; deaths hand over to a Verlet ragdoll solver.</li>
              <li><b>Audio</b> \u2014 gunshots, growls, gore and ambience are synthesised into
              buffers with layered noise, formant resonators and a procedural reverb impulse.</li>
              <li><b>Blood</b> \u2014 instanced decals conform to surface normals and persist for the
              entire match; pools grow under corpses.</li>
            </ul>
            <p class="cr-tech">Three.js \xB7 WebGL2 \xB7 Electron \xB7 esbuild \xB7 custom physics, ragdoll,
            particle and texture-baking systems.</p>
          </div>
          <div class="pn-actions"><button class="mn-btn small primary" data-act="back"><span class="bt">BACK</span></button></div>
        </div>
      </section>

      <!-- ========================== INTERMISSION ========================= -->
      <section class="mn-screen" data-screen="intermission">
        <div class="mn-panel">
          <h2 class="pn-title" id="im-title">WAVE CLEARED</h2>
          <div class="im-stats" id="im-stats"></div>
          <div class="im-shop" id="im-shop"></div>
          <div class="im-timer">Next wave in <b id="im-count">10</b>s
            <button class="mn-btn small primary inline" data-act="ready"><span class="bt">READY UP</span></button>
          </div>
        </div>
      </section>

      <!-- =========================== GAME OVER =========================== -->
      <section class="mn-screen" data-screen="gameover">
        <div class="mn-panel">
          <h2 class="pn-title danger">YOU DIED</h2>
          <div class="go-wave" id="go-wave">SURVIVED 0 WAVES</div>
          <div class="go-stats" id="go-stats"></div>
          <nav class="mn-nav compact">
            <button class="mn-btn primary" data-act="restart"><span class="bt">TRY AGAIN</span></button>
            <button class="mn-btn" data-act="tomain"><span class="bt">MAIN MENU</span></button>
          </nav>
        </div>
      </section>
    `,this.screens={};for(let t of this.root.querySelectorAll("[data-screen]"))this.screens[t.dataset.screen]=t;this.el={ldFill:document.getElementById("ld-fill"),ldStatus:document.getElementById("ld-status"),ldPct:document.getElementById("ld-pct")}}bind(){let t=this.game;this.root.addEventListener("click",n=>{let i=n.target.closest("[data-act]");if(i){t.audio?.play("uiClick",null,.5),this.act(i.dataset.act);return}let s=n.target.closest(".set-tab");if(s){t.audio?.play("uiHover",null,.3);for(let l of this.root.querySelectorAll(".set-tab"))l.classList.toggle("active",l===s);for(let l of this.root.querySelectorAll("[data-tab-body]"))l.classList.toggle("hidden",l.dataset.tabBody!==s.dataset.tab);return}let a=n.target.closest(".seg button");if(a){t.audio?.play("uiClick",null,.4);let l=a.parentElement.dataset.seg;this.setSetting(l,a.dataset.v);return}let o=n.target.closest(".toggle");if(o){t.audio?.play("uiClick",null,.4);let l=!o.classList.contains("on");o.classList.toggle("on",l),this.setSetting(o.dataset.tg,l)}}),this.root.addEventListener("mouseover",n=>{n.target.closest(".mn-btn")&&this.game.audio?.play("uiHover",null,.22)});let e=(n,i,s)=>{let a=document.getElementById(n);a&&a.addEventListener("input",()=>{let o=parseFloat(a.value);this.setSetting(i,o);let l=document.getElementById(n.replace("s-","v-"));l&&(l.textContent=s?s(o):o.toFixed(2))})};e("s-fov","fov",n=>String(Math.round(n))),e("s-exp","exposure"),e("s-grain","grain",n=>n.toFixed(3)),e("s-vig","vignette"),e("s-bloom","bloom"),e("s-vmaster","volMaster",n=>Math.round(n*100)+"%"),e("s-vsfx","volSfx",n=>Math.round(n*100)+"%"),e("s-vmusic","volMusic",n=>Math.round(n*100)+"%"),e("s-sens","sensitivity"),e("s-gore","goreAmount")}act(t){let e=this.game;switch(t){case"play":e.startRun();break;case"resume":e.resume();break;case"restart":e.startRun(!0);break;case"tomain":e.toMainMenu();break;case"settings":this._settingsFrom=this.screen,this.show("settings"),this.syncSettings();break;case"loadout":this.buildLoadout(),this.show("loadout");break;case"credits":this.show("credits");break;case"back":e.audio?.play("uiBack",null,.5),this.show(this._settingsFrom==="pause"?"pause":"main"),this._settingsFrom=null;break;case"defaults":e.resetSettings(),this.syncSettings();break;case"ready":e.skipIntermission();break;case"quit":e.quit();break}}show(t){this.screen=t,this.root.style.display=t?"flex":"none";for(let e of Object.keys(this.screens))this.screens[e].classList.toggle("active",e===t);this.root.classList.toggle("is-loading",t==="loading"),this.root.classList.toggle("is-ingame",t==="pause"||t==="intermission"||t==="gameover")}hide(){this.screen=null,this.root.style.display="none"}setLoading(t,e){this.el.ldFill.style.width=(t*100).toFixed(1)+"%",this.el.ldPct.textContent=Math.round(t*100)+"%",e&&(this.el.ldStatus.textContent=e)}setSetting(t,e){this.game.applySetting(t,e)}syncSettings(){let t=this.game.settings,e=(s,a)=>{let o=document.getElementById(s);o&&(o.value=a)},n=(s,a)=>{let o=document.getElementById(s);o&&(o.textContent=a)};e("s-fov",t.fov),n("v-fov",Math.round(t.fov)),e("s-exp",t.exposure),n("v-exp",t.exposure.toFixed(2)),e("s-grain",t.grain),n("v-grain",t.grain.toFixed(3)),e("s-vig",t.vignette),n("v-vig",t.vignette.toFixed(2)),e("s-bloom",t.bloom),n("v-bloom",t.bloom.toFixed(2)),e("s-vmaster",t.volMaster),n("v-vmaster",Math.round(t.volMaster*100)+"%"),e("s-vsfx",t.volSfx),n("v-vsfx",Math.round(t.volSfx*100)+"%"),e("s-vmusic",t.volMusic),n("v-vmusic",Math.round(t.volMusic*100)+"%"),e("s-sens",t.sensitivity),n("v-sens",t.sensitivity.toFixed(2)),e("s-gore",t.goreAmount),n("v-gore",t.goreAmount.toFixed(2));for(let s of this.root.querySelectorAll(".seg")){let a=s.dataset.seg;for(let o of s.children)o.classList.toggle("active",String(t[a])===o.dataset.v)}for(let s of this.root.querySelectorAll(".toggle"))s.classList.toggle("on",!!t[s.dataset.tg]);let i=document.getElementById("keymap");if(i){let s={forward:"Move forward",back:"Move back",left:"Strafe left",right:"Strafe right",jump:"Jump",sprint:"Sprint",crouch:"Crouch",reload:"Reload",use:"Interact",melee:"Melee",flashlight:"Flashlight",grenade:"Grenade",pause:"Menu"},a=this.game.input?.binds||{};i.innerHTML=Object.keys(s).map(o=>{let l=(a[o]||[]).map(c=>c.replace("Key","").replace("Digit","").replace("Left"," L").replace("Arrow","")).join(" / ");return`<div class="km-row"><span>${s[o]}</span><b>${l}</b></div>`}).join("")+`<div class="km-row"><span>Fire</span><b>MOUSE 1</b></div>
        <div class="km-row"><span>Aim down sights</span><b>MOUSE 2</b></div>
        <div class="km-row"><span>Weapon switch</span><b>1-5 / WHEEL</b></div>`}}buildLoadout(){let t=this.game.player,e=document.getElementById("lo-weapons"),n=document.getElementById("lo-enemies");if(!e||!n)return;let i=[["MK-7 CARBINE","Assault rifle","Fully automatic 5.56. The all-rounder \u2014 controllable recoil, 30-round magazine.",27,720,30],["BREAKER 12G","Pump shotgun","10-pellet buckshot. Devastating inside 8 m, useless beyond 20 m.",17,78,8],["P-9 SIDEARM","Pistol","Semi-automatic backup. Fast draw, surprising accuracy, infinite dignity.",22,420,17],["VECTOR-9","Suppressed SMG","Very high rate of fire and low noise \u2014 zombies notice you much later.",18,1050,40],["LONGSHOT .338","Bolt-action rifle","Penetrates up to four bodies. One shot removes almost any head.",165,48,5]];e.innerHTML=i.map(([a,o,l,c,h,u])=>`
      <div class="lo-item">
        <div class="lo-head"><b>${a}</b><span>${o}</span></div>
        <div class="lo-desc">${l}</div>
        <div class="lo-bars">
          <div class="lo-bar"><span>DMG</span><i style="width:${Math.min(100,c/1.8)}%"></i><em>${c}</em></div>
          <div class="lo-bar"><span>RPM</span><i style="width:${Math.min(100,h/11)}%"></i><em>${h}</em></div>
          <div class="lo-bar"><span>MAG</span><i style="width:${Math.min(100,u*2.5)}%"></i><em>${u}</em></div>
        </div>
      </div>`).join("");let s=[["WALKER","The baseline infected. Slow, relentless, always in numbers.",100,1.55],["RUNNER","Fresh infection \u2014 sprints, lunges, and closes distance fast.",62,4.55],["CRAWLER","Legless. Drags itself along the ground below your crosshair.",55,2.15],["BRUTE","Hypertrophied mass. Absorbs a magazine and hits like a truck.",420,1.28],["BLOATER","Gas-swollen. Detonates on death \u2014 do not kill it up close.",240,1.05]];n.innerHTML=s.map(([a,o,l,c])=>`
      <div class="lo-item">
        <div class="lo-head"><b>${a}</b><span>${l} HP</span></div>
        <div class="lo-desc">${o}</div>
        <div class="lo-bars">
          <div class="lo-bar"><span>HP</span><i style="width:${Math.min(100,l/4.4)}%"></i><em>${l}</em></div>
          <div class="lo-bar"><span>SPD</span><i style="width:${Math.min(100,c*20)}%"></i><em>${c.toFixed(2)}</em></div>
        </div>
      </div>`).join("")}setPauseStats(t){let e=document.getElementById("pause-stats");e&&(e.innerHTML=this.statBlock(t))}statBlock(t){let e=t.shots>0?Math.round(t.hits/t.shots*100)+"%":"\u2014",n=t.kills>0?Math.round(t.headshots/Math.max(1,t.hits)*100)+"%":"\u2014";return`
      <div class="sb"><span>WAVE</span><b>${t.wave}</b></div>
      <div class="sb"><span>SCORE</span><b>${t.score.toLocaleString()}</b></div>
      <div class="sb"><span>KILLS</span><b>${t.kills}</b></div>
      <div class="sb"><span>HEADSHOTS</span><b>${t.headshots}</b></div>
      <div class="sb"><span>ACCURACY</span><b>${e}</b></div>
      <div class="sb"><span>HS RATIO</span><b>${n}</b></div>
      <div class="sb"><span>TIME</span><b>${Math.floor(t.time/60)}:${String(Math.floor(t.time%60)).padStart(2,"0")}</b></div>
      <div class="sb"><span>BEST STREAK</span><b>${t.bestStreak||0}</b></div>`}setIntermission(t,e,n,i){document.getElementById("im-title").textContent=`WAVE ${t} CLEARED`,document.getElementById("im-stats").innerHTML=this.statBlock(e),document.getElementById("im-count").textContent=Math.ceil(n);let s=document.getElementById("im-shop");s&&(s.innerHTML=i&&i.length?`<div class="im-unlock">${i.map(a=>`<span>\u271A ${a}</span>`).join("")}</div>`:'<div class="im-unlock dim"><span>Ammunition and medkits restocked across the sector</span></div>')}setIntermissionCount(t){let e=document.getElementById("im-count");e&&(e.textContent=Math.ceil(t))}setGameOver(t){document.getElementById("go-wave").textContent=`SURVIVED ${Math.max(0,t.wave-1)} WAVE${t.wave-1===1?"":"S"}`,document.getElementById("go-stats").innerHTML=this.statBlock(t)}setBest(t){let e=document.getElementById("mn-best");e&&(e.textContent="BEST: WAVE "+t)}};var g1=[{id:"intro",cond:r=>r.time>1.5,once:!0,line:"Command to Survivor. Comms just went dark across the sector. You are the last signal we have. Hold your ground.",obj:"Survive the outbreak",unlock:null},{id:"first_kills",cond:r=>r.kills>=3,once:!0,line:"Good shooting. Whatever this is, it spreads fast. We are working on extraction \u2014 stay alive until then.",obj:"Hold the sector until extraction",unlock:null},{id:"wave2",cond:r=>r.wave>=2&&r.kills>=8,once:!0,line:"More of them pushing in from the east blocks. Airdropping you a BREAKER 12G \u2014 use it close, it kicks.",obj:"Clear the eastern approach",unlock:"shotgun"},{id:"runner_sight",cond:r=>r.seenTypes.has("runner"),once:!0,line:"Command \u2014 we have fast movers on the scope. Runners. They will close on you before you can blink. Keep moving.",obj:"Watch for runners",unlock:null},{id:"wave4",cond:r=>r.wave>=4,once:!0,line:"VECTOR-9 suppressed SMG coming down on the next drop. Quiet fire keeps the horde off you longer.",obj:"Push toward the supply drop",unlock:"smg"},{id:"brute_sight",cond:r=>r.seenTypes.has("brute"),once:!0,line:"Heavy contact \u2014 that is a Brute. It will soak a full magazine and still reach you. Aim for the head, do not let it close.",obj:"Take down the Brute",unlock:null},{id:"bloater_sight",cond:r=>r.seenTypes.has("bloater"),once:!0,line:"Bloater in the open \u2014 gas-swollen, volatile. Kill it at range. If it pops next to you, you will not get up.",obj:"Neutralise the Bloater at range",unlock:null},{id:"extraction_failed",cond:r=>r.wave>=5&&r.time>180,once:!0,line:"Negative on extraction. The bird got swarmed on approach. There is no ride coming. You are on your own now.",obj:"No extraction \u2014 survive",unlock:null},{id:"wave6",cond:r=>r.wave>=6,once:!0,line:"Last long gun we have \u2014 LONGSHOT .338. It will punch through four of them in a line. Make every round count.",obj:"Reach the sniper drop",unlock:"sniper"},{id:"discovery",cond:r=>r.wave>=8&&r.kills>=60,once:!0,line:"Command intercepts suggest the sector was not a quarantine. It was a test site. They left you there to see what would happen.",obj:"Find the truth \u2014 keep fighting",unlock:null},{id:"last_stand",cond:r=>r.wave>=10,once:!0,line:"Whatever you are doing, it is working. They are throwing everything they have left at you. This is the last stand, survivor. Make it count.",obj:"Last stand \u2014 hold the line",unlock:null},{id:"legend",cond:r=>r.wave>=14,once:!0,line:"Command to all remaining frequencies. There is a survivor in Sector 7 still holding. If anyone can hear this \u2014 they are not coming back for us. Godspeed.",obj:"Become a legend",unlock:null}],o0={quiet:["Sector is quiet\u2026 too quiet. Stay sharp.","Movement on the thermals, north of your position.","They are regrouping. Use the lull to reload.","Command is re-routing satellites to your sector. Sit tight.","You are doing better than anyone we sent in before."],streak:["Outstanding work. Keep that trigger discipline.","That is the kind of shooting we need.","You are making them hesitate. They do not usually hesitate.","Streak like that, we might start calling you by name."],hurt:["Survivor, your vitals are dropping. Find medkits \u2014 they are marked.","You are hurt. Pull back, let the armor regenerate.","Command \u2014 get behind something, you are bleeding out."],big:["Heavy unit down. That was not easy.","Bloater neutralised. Good call on the range.","Brute is in the dirt. They will think twice now."]},yo=class{constructor(t){this.game=t,this.fired=new Set,this.queue=[],this.currentObj="Survive the outbreak",this.objT=0,this.banterCd=18,this.lastBanterKind="quiet",this.seenTypes=new Set}reset(){this.fired.clear(),this.queue.length=0,this.currentObj="Survive the outbreak",this.objT=0,this.banterCd=18,this.seenTypes.clear(),this.active=null}say(t,e="cmd"){this.queue.push({text:t,t:0,life:6.5,kind:e}),this.queue.length>3&&this.queue.shift(),this.game.audio?.play("radio",null,.5)}setObjective(t){t!==this.currentObj&&(this.currentObj=t,this.objT=4.5,this.game.hud?.setObjective(t))}update(t,e){for(let n of this.game.zombies)n.dead||this.seenTypes.add(n.type);for(let n of g1)if(!this.fired.has(n.id))try{n.cond(e)&&(this.fired.add(n.id),n.line&&this.say(n.line,n.unlock?"drop":"cmd"),n.obj&&this.setObjective(n.obj),n.unlock&&(this.game.player.owned[n.unlock]=!0,this.game.hud?.toast(this.game.player.weapons[n.unlock].stats.name+" AIRDROPPED","good"),this.game.audio?.play("weaponPickup",null,.85),this.game.player.giveAmmo(1.2),this.game.hud?.setWeapon(this.game.player.stats,this.game.player.ammoNow)))}catch{}for(let n=this.queue.length-1;n>=0;n--){let i=this.queue[n];i.t+=t,i.t>=i.life&&this.queue.splice(n,1)}if(this.objT>0&&(this.objT-=t),this.banterCd-=t,this.banterCd<=0&&this.queue.length===0){this.banterCd=22+Math.random()*14;let n=this.game.player,i="quiet";n&&n.hp<35?i="hurt":e.streak>=8?i="streak":(this.seenTypes.has("brute")||this.seenTypes.has("bloater"))&&Math.random()<.4&&(i="big");let s=o0[i]||o0.quiet;this.say(s[Math.random()*s.length|0],i==="hurt"?"warn":"cmd"),this.lastBanterKind=i}}radioLines(){return this.queue}};var ni=new A,v1=new A,x1=new A,Ph=class{constructor(t=4){this.cell=t,this.map=new Map,this._nearBuf=[]}clear(){this.map.clear()}_key(t,e){let n=this.cell;return(Math.floor(t/n)|0)+","+(Math.floor(e/n)|0)}insert(t){let e=this._key(t.root.position.x,t.root.position.z),n=this.map.get(e);n||(n=[],this.map.set(e,n)),n.push(t)}queryNear(t,e){let n=this.cell,i=Math.floor(t/n),s=Math.floor(e/n),a=this._nearBuf;a.length=0;for(let o=-1;o<=1;o++)for(let l=-1;l<=1;l++){let c=this.map.get(i+o+","+(s+l));if(c)for(let h=0;h<c.length;h++)a.push(c[h])}return a}},l0={quality:"high",fov:74,exposure:1,grain:.055,vignette:1.05,bloom:.55,sao:!0,bob:!0,volMaster:.85,volSfx:1,volMusic:.55,sensitivity:1,invert:!1,holdads:!0,goreAmount:1,persist:!0,difficulty:"normal",dmgnum:!1},Is={easy:{hp:1.35,dmg:.68,count:.8,speed:.92,score:.8},normal:{hp:1,dmg:1,count:1,speed:1,score:1},hard:{hp:1.3,dmg:1.45,count:1.28,speed:1.1,score:1.5}},Mo=class{constructor(t){this.canvas=t,this.state="loading",this.rng=new ce(Date.now()&65535),this.settings={...l0},this.loadSettings(),this.renderer=new Ha(t),this.scene=new ti,this.camera=new Ne(this.settings.fov,window.innerWidth/window.innerHeight,.05,620),this.scene.add(this.camera),this.skyMat=vd(),this.physics=new Wa,this.input=new qa(t),this.audio=new Ya,this.zombies=[],this.grenades=[],this.pickups=[],this.wave=1,this.noiseLevel=0,this.godMode=!1,this.aimTarget=null,this.zombieGrid=new Ph(4),this.stats={score:0,kills:0,headshots:0,hits:0,shots:0,wave:1,time:0,streak:0,bestStreak:0},this.best=parseInt(localStorage.getItem("ds_best")||"0",10)||0,this.shakeAmount=0,this.shakeTime=0,this.shakeDuration=0,this.shakeOffset=new A,this.shakeRoll=0,this.waveDef=null,this.spawnQueue=[],this.spawnTimer=0,this.aliveTarget=0,this.waveBreak=0,this.clock=new yi,this.time=0,this.frame=0,this.fpsAcc=0,this.fpsCount=0,this.fps=60,this.menu=new xo(this),this.hud=null,this.story=new yo(this),window.addEventListener("resize",()=>this.onResize()),this.input.onLockChange(e=>{!e&&this.state==="playing"&&this.pause()})}async boot(){this.menu.show("loading");let t=()=>new Promise(l=>requestAnimationFrame(()=>setTimeout(l,0)));this.menu.setLoading(.01,"Starting WebGL context\u2026"),await t(),this.menu.setLoading(.04,"Capturing sky irradiance\u2026"),await t();let e=this.captureEnv();this.scene.environment=e,this.mats=new ja(this.renderer.renderer,e);let n=this.mats.buildAll(),i=n.length+12,s=0,a=async l=>{s++,this.menu.setLoading(.05+.9*(s/i),l),await t()};for(let l=0;l<n.length;l++)n[l](),await a("Baking procedural materials\u2026 "+(l+1)+"/"+n.length);this.audio.init(),this.audio.setVolumes({master:this.settings.volMaster,sfx:this.settings.volSfx,music:this.settings.volMusic}),await a("Synthesising audio buffers\u2026"),this.level=new ro(this),this.world=this.level;let o=this.level.build();for(let l of o)l.fn(),await a(l.label+"\u2026");this.fx=new oo(this),await a("Arming effects systems\u2026"),this.player=new fo(this),await a("Equipping operator\u2026"),this.hud=new vo(this),this.hud.show(!1),await a("Booting HUD\u2026"),this.renderer.setup(this.scene,this.camera),this.applyAllSettings(),await a("Compiling shaders\u2026"),this.renderer.renderer.compile(this.scene,this.camera),this.renderer.render(.016,0),await a("Priming render pipeline\u2026"),this.menu.setLoading(1,"Ready"),await t(),this.menu.setBest(this.best),this.toMainMenu(),this.startLoop()}captureEnv(){let t=this.renderer.renderer,e=new ti,n=new Ct(new rn(2,2,2),this.skyMat);n.geometry.scale(-1,1,1),e.add(n);let i=new Ys(256,{type:Ae});new qs(.1,10,i).update(t,e);let a=new bs(t);a.compileCubemapShader();let o=a.fromCubemap(i.texture).texture;return a.dispose(),i.dispose(),n.geometry.dispose(),o}toMainMenu(){this.state="menu",this.input.releaseLock(),this.hud?.show(!1),this.menu.show("main"),this.menu.setBest(this.best),this.audio.stopAmbience(),this.clearRun(),this.menuAngle=.6,this.camera.fov=58,this.camera.updateProjectionMatrix()}clearRun(){for(let t of this.zombies)t.dispose();this.zombies.length=0;for(let t of this.grenades)this.scene.remove(t.mesh);this.grenades.length=0;for(let t of this.pickups)this.scene.remove(t.obj);this.pickups.length=0,this.fx?.clear(),this.level?.reset()}startRun(t=!1){this.clearRun(),this.wave=1,this.stats={score:0,kills:0,headshots:0,hits:0,shots:0,wave:1,time:0,streak:0,bestStreak:0},this.player.respawn(),this.camera.fov=this.settings.fov,this.player.baseFov=this.settings.fov,this.player.fov=this.settings.fov,this.camera.updateProjectionMatrix(),this.story.reset(),this.hud?.setObjective(this.story.currentObj),this.spawnPickups(),this.menu.hide(),this.hud.show(!0),this.hud.hintT=22,this.hud.el.hint.style.display="",this.hud.setWeapon(this.player.stats,this.player.ammoNow),this.hud.setGrenades(this.player.grenades),this.hud.setStats(this.stats),this.state="playing",this.audio.resume(),this.audio.startAmbience(),this.input.clear(),this.input.requestLock(),this.beginWave(1)}pause(){this.state==="playing"&&(this.state="paused",this.input.releaseLock(),this.menu.setPauseStats(this.stats),this.menu.show("pause"),this.audio.suspend())}resume(){this.state==="paused"&&(this.state="playing",this.menu.hide(),this.audio.resume(),this.input.clear(),this.input.requestLock())}onPlayerDied(){this.state="dead",this.deadT=0,this.input.releaseLock(),this.wave-1>this.best&&(this.best=this.wave-1,localStorage.setItem("ds_best",String(this.best))),setTimeout(()=>{this.state==="dead"&&(this.menu.setGameOver(this.stats),this.menu.show("gameover"),this.hud.show(!1))},2600)}quit(){window.deadsector?.quit?window.deadsector.quit():window.close()}waveComposition(t){let e=Is[this.settings.difficulty]||Is.normal,n=Math.round((7+t*2.6+Math.pow(t,1.42)*.55)*e.count),i=[],s=(f,g)=>{for(let v=0;v<g;v++)i.push(f)},a=n,o=Math.min(.42,Math.max(0,(t-2)*.055)),l=Math.min(.24,Math.max(0,(t-3)*.035)),c=t>=5?Math.floor((t-3)/3):0,h=t>=4?Math.floor((t-2)/3):0;s("brute",c),a-=c,s("bloater",h),a-=h;let u=Math.floor(a*o);s("runner",u),a-=u;let d=Math.floor(a*l);s("crawler",d),a-=d,s("walker",Math.max(1,a));for(let f=i.length-1;f>0;f--){let g=Math.floor(Math.random()*(f+1)),v=i[f];i[f]=i[g],i[g]=v}return i}beginWave(t){this.wave=t,this.stats.wave=t,this.spawnQueue=this.waveComposition(t),this.waveTotal=this.spawnQueue.length,this.spawnTimer=1.4,this.aliveTarget=Math.min(38,8+Math.floor(t*1.7)),this.hud.setWave(t,this.spawnQueue.length,this.waveTotal),this.hud.centerMessage(`WAVE ${t}`,this.waveTagline(t),2.8),this.audio.play("waveStart",null,.75),this.audio.setTension(Math.min(1,t/14))}waveTagline(t){let e=["They know you are here","More are coming","The horde thickens","Something bigger is moving","Hold the sector","Do not stop firing","The streets are filling","No extraction is coming"];return t===1?"Contact imminent":t%5===0?"HEAVY UNITS DETECTED":e[t%e.length]}endWave(){this.audio.play("waveEnd",null,.7),this.audio.setTension(.1),this.spawnPickups(),this.player.grenades=Math.min(6,this.player.grenades+2),this.player.giveAmmo(1.3),this.player.armor=Math.min(this.player.maxArmor,this.player.armor+30),this.hud.setGrenades(this.player.grenades),this.hud.setWeapon(this.player.stats,this.player.ammoNow),this.hud.centerMessage(`WAVE ${this.wave} CLEARED`,"Reinforcements inbound",2.4),this.wave>this.best&&(this.best=this.wave,localStorage.setItem("ds_best",String(this.best)),this.menu.setBest(this.best)),this.waveBreak=3}skipIntermission(){this.waveBreak>.5&&(this.waveBreak=.5)}continueAfterIntermission(){}updateWaves(t){if(this.state!=="playing")return;let e=this.zombies.reduce((s,a)=>s+(a.dead?0:1),0);if(this.waveBreak>0){this.waveBreak-=t,this.waveBreak<=0&&(this.waveBreak=0,this.beginWave(this.wave+1)),this.hud.setWave(this.wave,e,this.waveTotal);return}if(this.spawnQueue.length>0){this.spawnTimer-=t;let s=e<this.aliveTarget;if(this.spawnTimer<=0&&s){let a=Math.min(this.spawnQueue.length,1+Math.floor(Math.random()*3));for(let o=0;o<a;o++){let l=this.spawnQueue.pop();if(!l)break;this.spawnZombie(l)}this.spawnTimer=Math.max(.32,1.55-this.wave*.055)*(.65+Math.random()*.8)}this.hud.setWave(this.wave,this.spawnQueue.length+e,this.waveTotal)}else this.hud.setWave(this.wave,e,this.waveTotal),e===0&&this.endWave();let n=1e9;for(let s of this.zombies){if(s.dead)continue;let a=s.root.position.distanceTo(this.player.pos);a<n&&(n=a)}let i=Math.min(1,Math.max(0,1-n/26))*.7+Math.min(1,this.wave/16)*.3;this.audio.setTension(i)}spawnZombie(t){let e=this.level.pickSpawn(this.player.pos,24,74,this.wave>3&&Math.random()<.12),n=new go(this,t,e,Math.floor(Math.random()*1e5)),i=Is[this.settings.difficulty]||Is.normal;return n.maxHp*=i.hp,n.hp=n.maxHp,n.speed*=i.speed,n.dmgMul=i.dmg,this.zombies.push(n),n}onZombieKilled(t){let e=Is[this.settings.difficulty]||Is.normal,n={walker:100,runner:150,crawler:120,brute:500,bloater:300}[t.type]||100;this.stats.streak++,this.stats.bestStreak=Math.max(this.stats.bestStreak,this.stats.streak);let i=1+Math.min(1.5,this.stats.streak*.02),s=Math.round(n*i*e.score);this.stats.score+=s,this.hud.setStats(this.stats),this.hud.killfeed(`<b>${t.def.label}</b> eliminated <em>+${s}</em>`,t.type==="brute"||t.type==="bloater"?"big":""),Math.random()<.14&&this.dropPickup(t.root.position,Math.random()<.5?"ammo":"health"),this.stats.streak>0&&this.stats.streak%15===0&&this.hud.toast(`${this.stats.streak} KILL STREAK`,"good")}spawnPickups(){let t=new Set(this.pickups.map(e=>e.node));for(let e of this.level.pickupNodes)t.has(e)||Math.random()<.55&&this.makePickup(e.pos,e.kind,e)}makePickup(t,e,n=null){let i=e==="health"?zd(this.mats):Bd(this.mats),s=this.physics.groundAt(t.x,t.y+2,t.z,5,.4);i.position.set(t.x,(s>-1e8?s:wi(t.x,t.z))+.05,t.z),this.scene.add(i);let a={obj:i,kind:e,node:n,t:Math.random()*6.28,life:n?1/0:42};return this.pickups.push(a),a}dropPickup(t,e){this.pickups.length>26||this.makePickup(ni.copy(t),e,null)}updatePickups(t,e){let n=this.player.pos,i="";for(let s=this.pickups.length-1;s>=0;s--){let a=this.pickups[s];if(a.t+=t,a.obj.position.y+=Math.sin(a.t*2.1)*8e-4,a.obj.rotation.y=a.t*.7,a.obj.userData.ring&&(a.obj.userData.ring.rotation.z=a.t*1.6),a.life!==1/0&&(a.life-=t,a.obj.visible=a.life>6||Math.sin(a.life*12)>-.3,a.life<=0)){this.scene.remove(a.obj),this.pickups.splice(s,1);continue}if(a.obj.position.distanceTo(n)<1.6&&this.player.alive){let l=!1;if(a.kind==="health"?l=this.player.heal(45):l=this.player.giveAmmo(1),l){this.hud.toast(a.kind==="health"?"+45 HEALTH":"AMMUNITION RESTOCKED","good"),this.hud.setWeapon(this.player.stats,this.player.ammoNow),this.scene.remove(a.obj),this.pickups.splice(s,1);continue}}}for(let s of this.level.weaponStands||[])if(s.pos.distanceTo(n)<2.2){let o=this.player.weapons[s.weapon].stats;this.player.owned[s.weapon]?(i=`TAKE ${o.name}`,this.input.pressed("use")&&this.player.giveWeapon(s.weapon)):i=`LOCKED \u2014 ${o.name} (wave ${{shotgun:2,smg:4,sniper:6,pistol:1,rifle:1}[s.weapon]})`}this.hud.setPrompt(i)}spawnGrenade(t,e){let n=jd(this.mats);n.position.copy(t),this.scene.add(n);let i=new kn(this.physics);i.friction=.55,i.restitution=.42;let s=i.particle(t.x,t.y,t.z,.055,1);s.prev.copy(s.p).addScaledVector(e,-1/60),this.grenades.push({mesh:n,body:i,particle:s,fuse:2.4,spin:new A(Math.random()*18-9,Math.random()*18-9,Math.random()*18-9),quat:new pe().random()})}updateGrenades(t){for(let e=this.grenades.length-1;e>=0;e--){let n=this.grenades[e];n.body.step(t,2),n.body.collideWorld(),n.mesh.position.copy(n.particle.p),ni.copy(n.spin).multiplyScalar(t);let i=new pe().setFromEuler(new Ie(ni.x,ni.y,ni.z));n.quat.multiply(i),n.mesh.quaternion.copy(n.quat),n.fuse-=t,n.fuse<=0&&(this.explode(n.particle.p.clone(),6.2,130),this.scene.remove(n.mesh),this.grenades.splice(e,1))}}explode(t,e,n){this.audio.play("grenade",t,1),this.fx.goreExplosion(t,1.5);for(let s=0;s<3;s++)this.fx.impact(t.clone().add(ni.set((Math.random()-.5)*2,Math.random()*.6,(Math.random()-.5)*2)),v1.set(0,1,0),"concrete");this.shake(1,.55),this.renderer.grade&&(this.renderer.grade.uniforms.uFlash.value=.85);for(let s of this.zombies){if(s.dead)continue;let a=s.root.position.distanceTo(t);if(a>e)continue;let o=1-a/e;ni.subVectors(s.root.position,t).normalize(),s.hit(n*o,null,s.root.position.clone().setY(s.root.position.y+1),ni,{name:"GRENADE",headMul:1}),s.dead||s.vel.addScaledVector(ni,8*o)}let i=this.player.pos.distanceTo(t);i<e&&this.player.damage(n*.45*(1-i/e),t)}shake(t,e=.25){t<=this.shakeAmount&&this.shakeTime<this.shakeDuration?this.shakeAmount=Math.max(this.shakeAmount,t):(this.shakeAmount=Math.max(this.shakeAmount*.5,t),this.shakeTime=0,this.shakeDuration=Math.max(e,this.shakeDuration-this.shakeTime))}updateShake(t,e){if(this.shakeTime<this.shakeDuration){this.shakeTime+=t;let n=1-this.shakeTime/this.shakeDuration,i=this.shakeAmount*n*n*.16;this.shakeOffset.set(Math.sin(e*92.3)*i+Math.sin(e*41.7)*i*.6,Math.sin(e*77.1+1.7)*i+Math.sin(e*33.3)*i*.5,Math.sin(e*61.9+3.1)*i*.5),this.shakeRoll=Math.sin(e*55.1)*this.shakeAmount*n*n*.035}else this.shakeOffset.multiplyScalar(Math.pow(.001,t)),this.shakeRoll*=Math.pow(.001,t),this.shakeAmount=0}loadSettings(){try{let t=localStorage.getItem("ds_settings");t&&Object.assign(this.settings,JSON.parse(t))}catch{}}saveSettings(){try{localStorage.setItem("ds_settings",JSON.stringify(this.settings))}catch{}}resetSettings(){this.settings={...l0},this.applyAllSettings(),this.saveSettings()}applySetting(t,e){this.settings[t]=e,this.applyOne(t),this.saveSettings()}applyAllSettings(){for(let t of Object.keys(this.settings))this.applyOne(t)}applyOne(t){let e=this.settings,n=this.renderer;switch(t){case"quality":n.setQuality(e.quality);break;case"fov":this.player?this.player.baseFov=e.fov:(this.camera.fov=e.fov,this.camera.updateProjectionMatrix());break;case"exposure":n.grade&&(n.grade.uniforms.uExposure.value=e.exposure);break;case"grain":n.grade&&(n.grade.uniforms.uGrain.value=e.grain);break;case"vignette":n.grade&&(n.grade.uniforms.uVignette.value=e.vignette);break;case"bloom":n.bloom&&(n.bloom.strength=e.bloom);break;case"sao":n.sao&&(n.sao.enabled=e.sao&&e.quality==="high");break;case"volMaster":case"volSfx":case"volMusic":this.audio.setVolumes({master:e.volMaster,sfx:e.volSfx,music:e.volMusic});break;case"sensitivity":this.input.sensitivity=.0022*e.sensitivity;break;case"invert":this.input.invertY=e.invert;break;default:break}}onResize(){this.renderer.resize(),this.player?.resize(),this.hud?.resize()}startLoop(){let t=()=>{requestAnimationFrame(t);let e=this.clock.getDelta();e>.1&&(e=.1),this.time+=e,this.frame++,this.step(e,this.time)};requestAnimationFrame(t)}step(t,e){if(this.skyMat.uniforms.uTime.value=e,this.state==="menu"){this.updateMenuCamera(t,e),this.level?.update(t*.35,e),this.renderer.render(t,e),this.input.endFrame();return}if(this.state==="paused"){this.renderer.render(t,e),this.input.pressed("pause")&&this.resume(),this.input.endFrame();return}if(this.state==="dead"){this.player.update(t,e),this.updateZombies(t,e),this.fx.update(t,e),this.level.update(t,e),this.updateShake(t,e),this.renderer.grade&&(this.renderer.grade.uniforms.uDamage.value=Math.min(1,(this.renderer.grade.uniforms.uDamage.value||0)+t*.4),this.renderer.grade.uniforms.uSat.value=Math.max(.08,this.renderer.grade.uniforms.uSat.value-t*.55)),this.renderer.render(t,e),this.input.endFrame();return}if(this.input.pressed("pause")){this.pause(),this.input.endFrame();return}this.input.keyPressed("F3")&&(this.godMode=!this.godMode),this.stats.time+=t;let n=this.player.ammoNow.mag;if(this.player.update(t,e),this.player.ammoNow.mag<n&&(this.stats.shots+=this.player.stats.pellets||1),this.updateZombies(t,e),this.updateGrenades(t),this.updatePickups(t,e),this.updateWaves(t),this.updateAimTarget(),this.fx.update(t,e),this.level.update(t,e),this.updateShake(t,e),this.story.update(t,this.stats),this.renderer.grade){let i=this.renderer.grade.uniforms,s=this.player.hp<45?1-this.player.hp/45:0,a=Math.max(0,this.player.damageT);this.player.damageT=Math.max(0,this.player.damageT-t*1.6),i.uDamage.value=Math.min(1,s*.55+a*.75),i.uFlash.value*=Math.pow(2e-4,t),i.uSat.value=1.06-s*.45}this.player.hp<34&&this.player.alive&&(this.hbT=(this.hbT||0)-t,this.hbT<=0&&(this.audio.play("heartbeat",null,.3+(1-this.player.hp/34)*.35),this.hbT=.95-(1-this.player.hp/34)*.3)),this.hud.update(t),this.hud.setStats(this.stats),this.hud.setRadio(this.story.radioLines()),this.hud.setObjective(this.story.currentObj,this.story.objT>0),this.renderer.render(t,e),this.player.renderViewmodel(this.renderer.renderer),this.input.endFrame()}updateZombies(t,e){this.zombieGrid.clear();for(let n=0;n<this.zombies.length;n++){let i=this.zombies[n];i.dead||this.zombieGrid.insert(i)}for(let n=this.zombies.length-1;n>=0;n--){let i=this.zombies[n];i.update(t,e),i.markForRemoval&&(i.dispose(),this.zombies.splice(n,1))}}updateAimTarget(){if(!this.player.alive){this.aimTarget=null;return}if(this.frame%3!==0)return;let t=this.camera.position,e=this.camera.getWorldDirection(x1).clone(),n=this.physics.raycast(t,e,90),i=n?n.t:90,s=null;for(let a of this.zombies){if(a.dead||a.root.position.distanceToSquared(t)>i*i+9)continue;if(a.raycastZones(t,e,i)){s=a;break}}this.aimTarget=s}updateMenuCamera(t,e){this.menuAngle=(this.menuAngle||0)+t*.055;let n=34,i=23,s=23,a=i+Math.cos(this.menuAngle)*n,o=s+Math.sin(this.menuAngle)*n,l=9.5+Math.sin(this.menuAngle*.7)*2.6;this.camera.position.set(a,l,o),this.camera.lookAt(i,2.6,s),this.level?.sky&&this.level.sky.position.copy(this.camera.position)}};function Ih(r){console.error("[DeadSector] fatal:",r);let t=document.getElementById("menu")||document.body;t.style.display="flex",t.innerHTML=`
    <div class="fatal">
      <h1>UNABLE TO START</h1>
      <p>Dead Sector needs a WebGL2 capable GPU with hardware acceleration enabled.</p>
      <pre>${String(r&&r.stack?r.stack:r).replace(/[<>&]/g,e=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[e])}</pre>
      <button onclick="location.reload()">RETRY</button>
    </div>`}function y1(){try{let r=document.createElement("canvas");return!!(r.getContext("webgl2")||r.getContext("webgl2",{failIfMajorPerformanceCaveat:!1}))}catch{return!1}}async function c0(){if(!y1())throw new Error("WebGL2 is not available in this browser / GPU driver.");let r=document.getElementById("game-canvas");if(!r)throw new Error("#game-canvas element missing.");let t=new Mo(r);window.__game=t;let e=()=>{t.audio?.resume?.(),window.removeEventListener("pointerdown",e),window.removeEventListener("keydown",e)};window.addEventListener("pointerdown",e),window.addEventListener("keydown",e),window.addEventListener("contextmenu",i=>i.preventDefault()),window.addEventListener("keydown",i=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(i.code)&&i.preventDefault()},{passive:!1});let n=document.getElementById("boot");n&&n.remove(),await t.boot()}window.addEventListener("error",r=>{window.__game||Ih(r.error||r.message)});document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{c0().catch(Ih)}):c0().catch(Ih);})();
