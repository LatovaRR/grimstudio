(()=>{var Uu=0,_c=1,Fu=2;var Gr=1,Ou=2,js=3,ei=0,mn=1,nn=2,ps=0,Qs=1,xc=2,yc=3,vc=4,Bu=5;var ms=100,ku=101,zu=102,Vu=103,Hu=104,Gu=200,Wu=201,Xu=202,qu=203,Mc=204,Sc=205,Yu=206,$u=207,Zu=208,Ju=209,Ku=210,ju=211,Qu=212,ed=213,td=214,Ya=0,$a=1,Za=2,zs=3,Ja=4,Ka=5,ja=6,Qa=7,Ao=0,nd=1,id=2,ti=0,bc=1,Ec=2,wc=3,Wr=4,Tc=5,Ac=6,Cc=7;var Rc=300,gs=301,er=302,Co=303,Ro=304,Ni=1e3,Zn=1001,eo=1002,Yt=1003,sd=1004;var Xr=1005;var Ct=1006,Po=1007;var zn=1008;var yn=1009,Pc=1010,Ic=1011,tr=1012,Io=1013,Vn=1014,Hn=1015,Gn=1016,Lo=1017,Do=1018,_s=1020,Lc=35902,Dc=35899,Nc=1021,Uc=1022,Wn=1023,mi=1026,xi=1027,Fc=1028,No=1029,Hi=1030,Uo=1031;var Fo=1033,qr=33776,Yr=33777,$r=33778,Zr=33779,Oo=35840,Bo=35841,ko=35842,zo=35843,Vo=36196,Ho=37492,Go=37496,Wo=37488,Xo=37489,Jr=37490,qo=37491,Yo=37808,$o=37809,Zo=37810,Jo=37811,Ko=37812,jo=37813,Qo=37814,el=37815,tl=37816,nl=37817,il=37818,sl=37819,rl=37820,al=37821,ol=36492,ll=36494,cl=36495,hl=36283,ul=36284,Kr=36285,dl=36286;var Er=2300,to=2301,Xa=2302,oc=2303,lc=2400,cc=2401,hc=2402;var rd=3200;var jr=0,ad=1,yi="",ut="srgb",wr="srgb-linear",Tr="linear",ot="srgb";var qa=7680;var od=519,ld=512,cd=513,hd=514,Oc=515,ud=516,dd=517,Bc=518,kc=519,fd=35044,fl=35048;var zc="300 es",Tn=2e3,Vs=2001;function fp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Hs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pd(){let n=Hs("canvas");return n.style.display="block",n}var nu={},Gs=null;function Vc(...n){let e="THREE."+n.shift();Gs?Gs("log",e,...n):console.log(e,...n)}function md(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Fe(...n){n=md(n);let e="THREE."+n.shift();if(Gs)Gs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ze(...n){n=md(n);let e="THREE."+n.shift();if(Gs)Gs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ls(...n){let e=n.join(" ");e in nu||(nu[e]=!0,Fe(...n))}function gd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var _d={[Ya]:Ya,[Za]:ja,[Ja]:Ja,[zs]:Ka,[$a]:$a,[ja]:Za,[Qa]:Qa,[Ka]:zs},Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],iu=1234567,Sr=Math.PI/180,Ws=180/Math.PI;function nr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function Hc(n,e){return(n%e+e)%e}function mp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function gp(n,e,t){return n!==e?(t-n)/(e-n):0}function br(n,e,t){return(1-t)*n+t*e}function _p(n,e,t,i){return br(n,e,1-Math.exp(-t*i))}function xp(n,e=1){return e-Math.abs(Hc(n,e*2)-e)}function yp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function vp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Mp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Sp(n,e){return n+Math.random()*(e-n)}function bp(n){return n*(.5-Math.random())}function Ep(n){n!==void 0&&(iu=n);let e=iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wp(n){return n*Sr}function Tp(n){return n*Ws}function Ap(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Cp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Gc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rp(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),d=r((e-i)/2),h=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function xd(n,e){if(e.constructor===Float32Array)return n;let t=Wc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function yd(n,e){if(e.constructor===Float32Array)return n;let t=Wc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var ir={DEG2RAD:Sr,RAD2DEG:Ws,generateUUID:nr,clamp:Qe,euclideanModulo:Hc,mapLinear:mp,inverseLerp:gp,lerp:br,damp:_p,pingpong:xp,smoothstep:yp,smootherstep:vp,randInt:Mp,randFloat:Sp,randFloatSpread:bp,seededRandom:Ep,degToRad:wp,radToDeg:Tp,isPowerOfTwo:Ap,ceilPowerOfTwo:Cp,floorPowerOfTwo:Gc,setQuaternionFromProperEuler:Rp,normalize:yd,denormalize:xd},We=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(d!==x||l!==h||c!==f||u!==g){let p=l*h+c*f+u*g+d*x;p<0&&(h=-h,f=-f,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),T=Math.sin(M);m=Math.sin(m*M)/T,o=Math.sin(o*M)/T,l=l*m+h*o,c=c*m+f*o,u=u*m+g*o,d=d*m+x*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+g*o,d=d*m+x*o;let M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(su.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zl.copy(this).projectOnVector(e),this.sub(zl)}reflect(e){return this.sub(zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zl=new F,su=new pn,Be=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],x=s[0],p=s[3],m=s[6],M=s[1],T=s[4],b=s[7],A=s[2],E=s[5],_=s[8];return r[0]=a*x+o*M+l*A,r[3]=a*p+o*T+l*E,r[6]=a*m+o*b+l*_,r[1]=c*x+u*M+d*A,r[4]=c*p+u*T+d*E,r[7]=c*m+u*b+d*_,r[2]=h*x+f*M+g*A,r[5]=h*p+f*T+g*E,r[8]=h*m+f*b+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(o*i-s*a)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vl.makeScale(e,t)),this}rotate(e){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vl.makeRotation(-e)),this}translate(e,t){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vl=new Be,ru=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),au=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pp(){let n={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?Tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wr]:{primaries:e,whitePoint:i,transfer:Tr,toXYZ:ru,fromXYZ:au,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:ru,fromXYZ:au,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}}),n}var $e=Pp();function pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Es,no=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Es===void 0&&(Es=Hs("canvas")),Es.width=e.width,Es.height=e.height;let s=Es.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Es}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pi(t[i]/255)*255):t[i]=pi(t[i]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ip=0,Xs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=nr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hl(s[a].image)):r.push(Hl(s[a]))}else r=Hl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Hl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?no.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}var Lp=0,Gl=new F,$t=class n extends Jn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Zn,s=Zn,r=Ct,a=zn,o=Wn,l=yn,c=n.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=nr(),this.name="",this.source=new Xs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Gl).x}get height(){return this.source.getSize(Gl).y}get depth(){return this.source.getSize(Gl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ni:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ni:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Rc;$t.DEFAULT_ANISOTROPY=1;var bt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,b=(f+1)/2,A=(m+1)/2,E=(u+h)/4,_=(d+x)/4,S=(g+p)/4;return T>b&&T>A?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=E/i,r=_/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=E/s,r=S/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=_/r,s=S/r),this.set(i,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-x)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},io=class extends Jn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new $t({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Xs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends io{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ar=class extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var so=class extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var at=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,l,c,u,d,h,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,d,h,f,g,x,p)}set(e,t,i,s,r,a,o,l,c,u,d,h,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/ws.setFromMatrixColumn(e,0).length(),r=1/ws.setFromMatrixColumn(e,1).length(),a=1/ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,g=o*u,x=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,x=c*d;t[0]=h+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,x=c*d;t[0]=h-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,g=o*u,x=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-x*d}else if(e.order==="XZY"){let h=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dp,e,Np)}lookAt(e,t,i){let s=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ci.crossVectors(i,Mn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ci.crossVectors(i,Mn)),Ci.normalize(),Ma.crossVectors(Mn,Ci),s[0]=Ci.x,s[4]=Ma.x,s[8]=Mn.x,s[1]=Ci.y,s[5]=Ma.y,s[9]=Mn.y,s[2]=Ci.z,s[6]=Ma.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],M=i[3],T=i[7],b=i[11],A=i[15],E=s[0],_=s[4],S=s[8],P=s[12],C=s[1],D=s[5],O=s[9],W=s[13],I=s[2],Y=s[6],$=s[10],G=s[14],ne=s[3],X=s[7],Q=s[11],z=s[15];return r[0]=a*E+o*C+l*I+c*ne,r[4]=a*_+o*D+l*Y+c*X,r[8]=a*S+o*O+l*$+c*Q,r[12]=a*P+o*W+l*G+c*z,r[1]=u*E+d*C+h*I+f*ne,r[5]=u*_+d*D+h*Y+f*X,r[9]=u*S+d*O+h*$+f*Q,r[13]=u*P+d*W+h*G+f*z,r[2]=g*E+x*C+p*I+m*ne,r[6]=g*_+x*D+p*Y+m*X,r[10]=g*S+x*O+p*$+m*Q,r[14]=g*P+x*W+p*G+m*z,r[3]=M*E+T*C+b*I+A*ne,r[7]=M*_+T*D+b*Y+A*X,r[11]=M*S+T*O+b*$+A*Q,r[15]=M*P+T*W+b*G+A*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15],M=l*f-c*h,T=o*f-c*d,b=o*h-l*d,A=a*f-c*u,E=a*h-l*u,_=a*d-o*u;return t*(x*M-p*T+m*b)-i*(g*M-p*A+m*E)+s*(g*T-x*A+m*_)-r*(g*b-x*E+p*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],M=t*o-i*a,T=t*l-s*a,b=t*c-r*a,A=i*l-s*o,E=i*c-r*o,_=s*c-r*l,S=u*x-d*g,P=u*p-h*g,C=u*m-f*g,D=d*p-h*x,O=d*m-f*x,W=h*m-f*p,I=M*W-T*O+b*D+A*C-E*P+_*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/I;return e[0]=(o*W-l*O+c*D)*Y,e[1]=(s*O-i*W-r*D)*Y,e[2]=(x*_-p*E+m*A)*Y,e[3]=(h*E-d*_-f*A)*Y,e[4]=(l*C-a*W-c*P)*Y,e[5]=(t*W-s*C+r*P)*Y,e[6]=(p*b-g*_-m*T)*Y,e[7]=(u*_-h*b+f*T)*Y,e[8]=(a*O-o*C+c*S)*Y,e[9]=(i*C-t*O-r*S)*Y,e[10]=(g*E-x*b+m*M)*Y,e[11]=(d*b-u*E-f*M)*Y,e[12]=(o*P-a*D-l*S)*Y,e[13]=(t*D-i*P+s*S)*Y,e[14]=(x*T-g*A-p*M)*Y,e[15]=(u*A-d*T+h*M)*Y,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,x=a*u,p=a*d,m=o*d,M=l*c,T=l*u,b=l*d,A=i.x,E=i.y,_=i.z;return s[0]=(1-(x+m))*A,s[1]=(f+b)*A,s[2]=(g-T)*A,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(h+m))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(g+T)*_,s[9]=(p-M)*_,s[10]=(1-(h+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ws.set(s[0],s[1],s[2]).length(),o=ws.set(s[4],s[5],s[6]).length(),l=ws.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Un.copy(this);let c=1/a,u=1/o,d=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,t.setFromRotationMatrix(Un),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Tn,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===Tn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Vs)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Tn,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===Tn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Vs)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ws=new F,Un=new at,Dp=new F(0,0,0),Np=new F(1,1,1),Ci=new F,Ma=new F,Mn=new F,ou=new at,lu=new pn,Kn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ou,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lu.setFromEuler(this),this.setFromQuaternion(lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Up=0,cu=new F,Ts=new pn,li=new at,Sa=new F,_r=new F,Fp=new F,Op=new pn,hu=new F(1,0,0),uu=new F(0,1,0),du=new F(0,0,1),fu={type:"added"},Bp={type:"removed"},As={type:"childadded",child:null},Wl={type:"childremoved",child:null},Zt=class n extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new F,t=new Kn,i=new pn,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Be}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(hu,e)}rotateY(e){return this.rotateOnAxis(uu,e)}rotateZ(e){return this.rotateOnAxis(du,e)}translateOnAxis(e,t){return cu.copy(e).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hu,e)}translateY(e){return this.translateOnAxis(uu,e)}translateZ(e){return this.translateOnAxis(du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sa.copy(e):Sa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(_r,Sa,this.up):li.lookAt(Sa,_r,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(li),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fu),As.child=e,this.dispatchEvent(As),As.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bp),Wl.child=e,this.dispatchEvent(Wl),Wl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fu),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,Fp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,Op,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Zt.DEFAULT_UP=new F(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=class extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},kp={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new An;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},ba={h:0,s:0,l:0};function Xl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=$e.workingColorSpace){if(e=Hc(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Xl(a,r,e+1/3),this.g=Xl(a,r,e),this.b=Xl(a,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=ut){function i(r){r!==void 0&&parseFloat(r)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){let i=vd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return $e.workingToColorSpace(cn.copy(this),e),Math.round(Qe(cn.r*255,0,255))*65536+Math.round(Qe(cn.g*255,0,255))*256+Math.round(Qe(cn.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(cn.copy(this),t);let i=cn.r,s=cn.g,r=cn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=ut){$e.workingToColorSpace(cn.copy(this),e);let t=cn.r,i=cn.g,s=cn.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(ba);let i=br(Ri.h,ba.h,t),s=br(Ri.s,ba.s,t),r=br(Ri.l,ba.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Pe;Pe.NAMES=vd;var Cr=class extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new F,ci=new F,ql=new F,hi=new F,Cs=new F,Rs=new F,pu=new F,Yl=new F,$l=new F,Zl=new F,Jl=new bt,Kl=new bt,jl=new bt,Di=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Fn.subVectors(e,t),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Fn.subVectors(s,t),ci.subVectors(i,t),ql.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(ci),l=Fn.dot(ql),c=ci.dot(ci),u=ci.dot(ql),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Jl.setScalar(0),Kl.setScalar(0),jl.setScalar(0),Jl.fromBufferAttribute(e,t),Kl.fromBufferAttribute(e,i),jl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Jl,r.x),a.addScaledVector(Kl,r.y),a.addScaledVector(jl,r.z),a}static isFrontFacing(e,t,i,s){return Fn.subVectors(i,t),ci.subVectors(e,t),Fn.cross(ci).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Fn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Cs.subVectors(s,i),Rs.subVectors(r,i),Yl.subVectors(e,i);let l=Cs.dot(Yl),c=Rs.dot(Yl);if(l<=0&&c<=0)return t.copy(i);$l.subVectors(e,s);let u=Cs.dot($l),d=Rs.dot($l);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(i).addScaledVector(Cs,a);Zl.subVectors(e,r);let f=Cs.dot(Zl),g=Rs.dot(Zl);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Rs,o);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return pu.subVectors(r,s),o=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(pu,o);let m=1/(p+x+h);return a=x*m,o=h*m,t.copy(i).addScaledVector(Cs,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ea.copy(i.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),wa.subVectors(this.max,xr),Ps.subVectors(e.a,xr),Is.subVectors(e.b,xr),Ls.subVectors(e.c,xr),Pi.subVectors(Is,Ps),Ii.subVectors(Ls,Is),ss.subVectors(Ps,Ls);let t=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-ss.z,ss.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,ss.z,0,-ss.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-ss.y,ss.x,0];return!Ql(t,Ps,Is,Ls,wa)||(t=[1,0,0,0,1,0,0,0,1],!Ql(t,Ps,Is,Ls,wa))?!1:(Ta.crossVectors(Pi,Ii),t=[Ta.x,Ta.y,Ta.z],Ql(t,Ps,Is,Ls,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ui=[new F,new F,new F,new F,new F,new F,new F,new F],On=new F,Ea=new Cn,Ps=new F,Is=new F,Ls=new F,Pi=new F,Ii=new F,ss=new F,xr=new F,wa=new F,Ta=new F,rs=new F;function Ql(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){rs.fromArray(n,r);let o=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),u=i.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ut=new F,Aa=new We,zp=0,tn=class extends Jn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fd,this.updateRanges=[],this.gpuType=Hn,this.version=0,this._normalizationScale=e!==void 0?Wc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Aa.fromBufferAttribute(this,t),Aa.applyMatrix3(e),this.setXY(t,Aa.x,Aa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):xd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):yd(e,this.array)}};var Rr=class extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Pr=class extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var xt=class extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Vp=new Cn,yr=new F,ec=new F,Ui=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Vp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);let t=yr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(yr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(ec)),this.expandByPoint(yr.copy(e.center).sub(ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Hp=0,wn=new at,tc=new Zt,Ds=new F,Sn=new Cn,vr=new Cn,qt=new F,Ft=class n extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fp(e)?Pr:Rr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Be().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return tc.lookAt(e),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(Sn.min,vr.min),Sn.expandByPoint(qt),qt.addVectors(Sn.max,vr.max),Sn.expandByPoint(qt)):(Sn.expandByPoint(vr.min),Sn.expandByPoint(vr.max))}Sn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(qt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)qt.fromBufferAttribute(o,c),l&&(Ds.fromBufferAttribute(e,c),qt.add(Ds)),s=Math.max(s,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new tn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new F,l[P]=new F;let u=new F,d=new F,h=new F,f=new We,g=new We,x=new We,p=new F,m=new F;function M(P,C,D){c[P]=c[C]=c[D]=1,u.fromBufferAttribute(i,P),d.fromBufferAttribute(i,C),h.fromBufferAttribute(i,D),f.fromBufferAttribute(r,P),g.fromBufferAttribute(r,C),x.fromBufferAttribute(r,D),d.sub(u),h.sub(u),g.sub(f),x.sub(f);let O=1/(g.x*x.y-x.x*g.y);isFinite(O)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(h,-g.y).multiplyScalar(O),m.copy(h).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(O),o[P].add(p),o[C].add(p),o[D].add(p),l[P].add(m),l[C].add(m),l[D].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,C=T.length;P<C;++P){let D=T[P],O=D.start,W=D.count;for(let I=O,Y=O+W;I<Y;I+=3)M(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let b=new F,A=new F,E=new F,_=new F;function S(P){E.fromBufferAttribute(s,P),_.copy(E);let C=o[P];b.copy(C),b.sub(E.multiplyScalar(E.dot(C))).normalize(),A.crossVectors(_,C);let O=A.dot(l[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,O)}for(let P=0,C=i.count;P<C;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,d=new F;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new tn(h,u,d)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var nc=new F,Gp=new F,Wp=new Be,Bn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=nc.subVectors(i,t).cross(Gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(nc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Wp.getNormalMatrix(e),s=this.coplanarPoint(nc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Xp=0,xn=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=Qs,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=Sc,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qa,this.stencilZFail=qa,this.stencilZPass=qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Bn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new We().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var di=new F,ic=new F,Ca=new F,Ra=new F,cs=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ic.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),Ra.copy(this.origin).sub(ic);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ca),o=Ra.dot(this.direction),l=-Ra.dot(Ca),c=Ra.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let x=1/u;d*=x,h*=x,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ic).addScaledVector(Ca,h),f}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);let i=di.dot(this.direction),s=di.dot(di)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,g=t.x-a.x,x=t.y-a.y,p=t.z-a.z,m=i.x-a.x,M=i.y-a.y,T=i.z-a.z,b=Math.abs(l),A=Math.abs(c),E=Math.abs(u),_,S,P,C,D,O,W,I,Y,$,G,ne;if(b>=A&&b>=E?(P=l,O=d,Y=g,ne=m,l>=0?(_=c,S=u,C=h,D=f,W=x,I=p,$=M,G=T):(_=u,S=c,C=f,D=h,W=p,I=x,$=T,G=M)):A>=E?(P=c,O=h,Y=x,ne=M,c>=0?(_=u,S=l,C=f,D=d,W=p,I=g,$=T,G=m):(_=l,S=u,C=d,D=f,W=g,I=p,$=m,G=T)):(P=u,O=f,Y=p,ne=T,u>=0?(_=l,S=c,C=d,D=h,W=g,I=x,$=m,G=M):(_=c,S=l,C=h,D=d,W=x,I=g,$=M,G=m)),P===0)return null;let X=_/P,Q=S/P,z=1/P,re=C-X*O,fe=D-Q*O,H=W-X*Y,ie=I-Q*Y,ce=$-X*ne,ae=G-Q*ne,te=ce*ie-ae*H,be=re*ae-fe*ce,je=H*fe-ie*re;if(s){if(te<0||be<0||je<0)return null}else if((te<0||be<0||je<0)&&(te>0||be>0||je>0))return null;let Ee=te+be+je;if(Ee===0)return null;let Ve=z*(te*O+be*Y+je*ne);return(Ee>0?Ve<0:Ve>0)?null:this.at(Ve/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hs=class extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mu=new at,as=new cs,Pa=new Ui,gu=new F,Ia=new F,La=new F,Da=new F,sc=new F,Na=new F,_u=new F,Ua=new F,Ot=class extends Zt{constructor(e=new Ft,t=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(sc.fromBufferAttribute(d,e),a?Na.addScaledVector(sc,u):Na.addScaledVector(sc.sub(t),u))}t.add(Na)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(Pa.containsPoint(as.origin)===!1&&(as.intersectSphere(Pa,gu)===null||as.origin.distanceToSquared(gu)>(e.far-e.near)**2))&&(mu.copy(r).invert(),as.copy(e.ray).applyMatrix4(mu),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let p=h[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),T=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,A=T;b<A;b+=3){let E=o.getX(b),_=o.getX(b+1),S=o.getX(b+2);s=Fa(this,m,e,i,c,u,d,E,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let M=o.getX(p),T=o.getX(p+1),b=o.getX(p+2);s=Fa(this,a,e,i,c,u,d,M,T,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let p=h[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),T=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,A=T;b<A;b+=3){let E=b,_=b+1,S=b+2;s=Fa(this,m,e,i,c,u,d,E,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let M=p,T=p+1,b=p+2;s=Fa(this,a,e,i,c,u,d,M,T,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function qp(n,e,t,i,s,r,a,o){let l;if(e.side===mn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ei,o),l===null)return null;Ua.copy(o),Ua.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ua);return c<t.near||c>t.far?null:{distance:c,point:Ua.clone(),object:n}}function Fa(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ia),n.getVertexPosition(l,La),n.getVertexPosition(c,Da);let u=qp(n,e,t,i,Ia,La,Da,_u);if(u){let d=new F;Di.getBarycoord(_u,Ia,La,Da,d),s&&(u.uv=Di.getInterpolatedAttribute(s,o,l,c,d,new We)),r&&(u.uv1=Di.getInterpolatedAttribute(r,o,l,c,d,new We)),a&&(u.normal=Di.getInterpolatedAttribute(a,o,l,c,d,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new F,materialIndex:0};Di.getNormal(Ia,La,Da,h.normal),u.face=h,u.barycoord=d}return u}var ro=class extends $t{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Yt,u=Yt,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var os=new Ui,Yp=new We(.5,.5),Oa=new F,Fi=class{constructor(e=new Bn,t=new Bn,i=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],M=r[12],T=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-a,f-u,m-g,A-M).normalize(),s[1].setComponents(c+a,f+u,m+g,A+M).normalize(),s[2].setComponents(c+o,f+d,m+x,A+T).normalize(),s[3].setComponents(c-o,f-d,m-x,A-T).normalize(),i)s[4].setComponents(l,h,p,b).normalize(),s[5].setComponents(c-l,f-h,m-p,A-b).normalize();else if(s[4].setComponents(c-l,f-h,m-p,A-b).normalize(),t===Tn)s[5].setComponents(c+l,f+h,m+p,A+b).normalize();else if(t===Vs)s[5].setComponents(l,h,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);let t=Yp.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Oa.x=s.normal.x>0?e.max.x:e.min.x,Oa.y=s.normal.y>0?e.max.y:e.min.y,Oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},xu=new at,ao=class n{constructor(){this.coordinateSystem=Tn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];xu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Fi),i[s].setFromProjectionMatrix(xu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Fi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Oi=class extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},oo=new F,lo=new F,yu=new at,Mr=new cs,Ba=new Ui,rc=new F,vu=new F,co=class extends Zt{constructor(e=new Ft,t=new Oi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)oo.fromBufferAttribute(t,s-1),lo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=oo.distanceTo(lo);e.setAttribute("lineDistance",new xt(i,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,e.ray.intersectsSphere(Ba)===!1)return;yu.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(yu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=c){let m=u.getX(x),M=u.getX(x+1),T=ka(this,e,Mr,l,m,M,x);T&&t.push(T)}if(this.isLineLoop){let x=u.getX(g-1),p=u.getX(f),m=ka(this,e,Mr,l,x,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=c){let m=ka(this,e,Mr,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=ka(this,e,Mr,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ka(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(oo.fromBufferAttribute(o,s),lo.fromBufferAttribute(o,r),t.distanceSqToSegment(oo,lo,rc,vu)>i)return;rc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(rc);if(!(c<e.near||c>e.far))return{distance:c,point:vu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Mu=new F,Su=new F,$s=class extends co{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Mu.fromBufferAttribute(t,s),Su.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Mu.distanceTo(Su);e.setAttribute("lineDistance",new xt(i,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var gi=class extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bu=new at,uc=new cs,za=new Ui,Va=new F,us=class extends Zt{constructor(e=new Ft,t=new gi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;bu.copy(s).invert(),uc.copy(e.ray).applyMatrix4(bu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,x=f;g<x;g++){let p=c.getX(g);Va.fromBufferAttribute(d,p),Eu(Va,p,l,s,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,x=f;g<x;g++)Va.fromBufferAttribute(d,g),Eu(Va,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Eu(n,e,t,i,s,r,a){let o=uc.distanceSqToPoint(n);if(o<t){let l=new F;uc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ir=class extends $t{constructor(e=[],t=gs,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bi=class extends $t{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends $t{constructor(e,t,i=Vn,s,r,a,o=Yt,l=Yt,c,u=mi,d=1){if(u!==mi&&u!==xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Lr=class extends _i{constructor(e,t=Vn,i=gs,s,r,a=Yt,o=Yt,l,c=mi){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Dr=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Zs=class n extends Ft{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(d,2));function g(x,p,m,M,T,b,A,E,_,S,P){let C=b/_,D=A/S,O=b/2,W=A/2,I=E/2,Y=_+1,$=S+1,G=0,ne=0,X=new F;for(let Q=0;Q<$;Q++){let z=Q*D-W;for(let re=0;re<Y;re++){let fe=re*C-O;X[x]=fe*M,X[p]=z*T,X[m]=I,c.push(X.x,X.y,X.z),X[x]=0,X[p]=0,X[m]=E>0?1:-1,u.push(X.x,X.y,X.z),d.push(re/_),d.push(1-Q/S),G+=1}}for(let Q=0;Q<S;Q++)for(let z=0;z<_;z++){let re=h+z+Y*Q,fe=h+z+Y*(Q+1),H=h+(z+1)+Y*(Q+1),ie=h+(z+1)+Y*Q;l.push(re,fe,ie),l.push(fe,H,ie),ne+=6}o.addGroup(f,ne,P),f+=ne,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Nr=class n extends Ft{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],x=[],p=[];for(let m=0;m<u;m++){let M=m*h-a;for(let T=0;T<c;T++){let b=T*d-r;g.push(b,-M,0),x.push(0,0,1),p.push(T/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let T=M+c*m,b=M+c*(m+1),A=M+1+c*(m+1),E=M+1+c*m;f.push(T,b,E),f.push(b,A,E)}this.setIndex(f),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function xs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(wu(s))s.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(wu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function hn(n){let e={};for(let t=0;t<n.length;t++){let i=xs(n[t]);for(let s in i)e[s]=i[s]}return e}function wu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function $p(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var Md={clone:xs,merge:hn},Zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zp,this.fragmentShader=Jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=$p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Pe().setHex(s.value);break;case"v2":this.uniforms[i].value=new We().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new bt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(s.value);break;case"m4":this.uniforms[i].value=new at().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ho=class extends jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},uo=class extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jr,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Js=class extends uo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ls('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ls('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Qn=class extends xn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pe(16777215),this.specular=new Pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jr,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Ao,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var fo=class extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},po=class extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ns(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ha(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ki=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},mo=class extends ki{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lc,endingEnd:lc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case cc:r=e,o=2*t-i;break;case hc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case cc:a=e,l=2*i-t;break;case hc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,p=x*g,m=-h*p+2*h*x-h*g,M=(1+h)*p+(-1.5-2*h)*x+(-.5+h)*g+1,T=(-1-f)*p+(1.5+f)*x+.5*g,b=f*p-f*x;for(let A=0;A!==o;++A)r[A]=m*a[u+A]+M*a[c+A]+T*a[l+A]+b*a[d+A];return r}},go=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},_o=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xo=class extends ki{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-t)/(s-t),x=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*x+a[l+p]*g;return r}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let x=a[c+g],p=a[l+g],m=f*h+g*2,M=d[m],T=d[m+1],b=e*h+g*2,A=u[b],E=u[b+1],_=jp(i,t,M,A,s);r[g]=Sd(_,x,T,E,p)}return r}};function Sd(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Kp(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function jp(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Sd(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Kp(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var En=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ns(t,this.TimeBufferType),this.values=Ns(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ns(e.times,Array),values:Ns(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Ha(e.settings)&&(i.settings={inTangents:Ns(e.settings.inTangents,Array),outTangents:Ns(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new _o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Er:t=this.InterpolantFactoryMethodDiscrete;break;case to:t=this.InterpolantFactoryMethodLinear;break;case Xa:t=this.InterpolantFactoryMethodSmooth;break;case oc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Fe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return to;case this.InterpolantFactoryMethodSmooth:return Xa;case this.InterpolantFactoryMethodBezier:return oc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Ha(this.settings)&&(Tu(this.settings.inTangents,e),Tu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Ha(this.settings)&&(Au(this.settings.inTangents,e),Au(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&pp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let x=t[d+g];if(x!==t[h+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,h=a*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ha(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Tu(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Au(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=to;var zi=class extends En{constructor(e,t,i){super(e,t,i)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Er;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends En{constructor(e,t,i,s){super(e,t,i,s)}};yo.prototype.ValueTypeName="color";var vo=class extends En{constructor(e,t,i,s){super(e,t,i,s)}};vo.prototype.ValueTypeName="number";var Mo=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)pn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ur=class extends En{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Mo(this.times,this.values,this.getValueSize(),e)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends En{constructor(e,t,i){super(e,t,i)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Er;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends En{constructor(e,t,i,s){super(e,t,i,s)}};So.prototype.ValueTypeName="vector";var ks={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Cu(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Cu(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Cu(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var bo=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pl=new bo,kn=class{constructor(e){this.manager=e!==void 0?e:pl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};kn.DEFAULT_MATERIAL_NAME="__DEFAULT";var fi={},dc=class extends Error{constructor(e,t){super(e),this.response=t}},ds=class extends kn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ks.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:i,onError:s});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=fi[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0,x=0,p=new ReadableStream({start(m){M();function M(){d.read().then(({done:T,value:b})=>{if(T)m.close();else{x+=b.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let E=0,_=u.length;E<_;E++){let S=u[E];S.onProgress&&S.onProgress(A)}m.enqueue(b),M()}},T=>{m.error(T)})}}});return new Response(p)}else throw new dc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ks.add(`file:${e}`,c);let u=fi[e];delete fi[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=fi[e];if(u===void 0)throw this.manager.itemError(e),c;delete fi[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Us=new WeakMap,Eo=class extends kn{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ks.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Us.get(a);d===void 0&&(d=[],Us.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Hs("img");function l(){u(),t&&t(this);let d=Us.get(this)||[];for(let h=0;h<d.length;h++){let f=d[h];f.onLoad&&f.onLoad(this)}Us.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),ks.remove(`image:${e}`);let h=Us.get(this)||[];for(let f=0;f<h.length;f++){let g=h[f];g.onError&&g.onError(d)}Us.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ks.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Fr=class extends kn{constructor(e){super(e)}load(e,t,i,s){let r=new $t,a=new Eo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Or=class extends Zt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Br=class extends Or{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ac=new at,Ru=new F,Pu=new F,wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fi,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ru),Pu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){ac.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ac,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Vs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ga=new F,Wa=new pn,$n=new F,kr=class extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ga,Wa,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Wa,$n.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ga,Wa,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Wa,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Li=new F,Iu=new We,Lu=new We,fn=class extends kr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Iu,Lu),t.subVectors(Lu,Iu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var zr=class extends kr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fc=class extends wo{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fs=class extends Or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new fc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Vr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Fs=-90,Os=1,Ks=class extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(Fs,Os,e,t);s.layers=this.layers,this.add(s);let r=new fn(Fs,Os,e,t);r.layers=this.layers,this.add(r);let a=new fn(Fs,Os,e,t);a.layers=this.layers,this.add(a);let o=new fn(Fs,Os,e,t);o.layers=this.layers,this.add(o);let l=new fn(Fs,Os,e,t);l.layers=this.layers,this.add(l);let c=new fn(Fs,Os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},To=class extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var qc="\\[\\]\\.:\\/",Qp=new RegExp("["+qc+"]","g"),Yc="[^"+qc+"]",em="[^"+qc.replace("\\.","")+"]",tm=/((?:WC+[\/:])*)/.source.replace("WC",Yc),nm=/(WCOD+)?/.source.replace("WCOD",em),im=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yc),sm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yc),rm=new RegExp("^"+tm+nm+im+sm+"$"),am=["material","materials","bones","map"],pc=class{constructor(e,t,i){let s=i||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Mt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qp,"")}static parseTrackName(e){let t=rm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);am.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=pc;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sv=new Float32Array(1);var Du=new at,Hr=class{constructor(e,t,i=0,s=1/0){this.ray=new cs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Du.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Du),this}intersectObject(e,t=!0,i=[]){return mc(e,this,i,t),i.sort(Nu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)mc(e[s],this,i,t);return i.sort(Nu),i}};function Nu(n,e){return n.distance-e.distance}function mc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)mc(r[a],e,t,!0)}}var gc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function $c(n,e,t,i){let s=om(i);switch(t){case Nc:return n*e;case Fc:return n*e/s.components*s.byteLength;case No:return n*e/s.components*s.byteLength;case Hi:return n*e*2/s.components*s.byteLength;case Uo:return n*e*2/s.components*s.byteLength;case Uc:return n*e*3/s.components*s.byteLength;case Wn:return n*e*4/s.components*s.byteLength;case Fo:return n*e*4/s.components*s.byteLength;case qr:case Yr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $r:case Zr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bo:case zo:return Math.max(n,16)*Math.max(e,8)/4;case Oo:case ko:return Math.max(n,8)*Math.max(e,8)/2;case Vo:case Ho:case Wo:case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Go:case Jr:case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case rl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case al:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ol:case ll:case cl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case hl:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Kr:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function om(n){switch(n){case yn:case Pc:return{byteLength:1,components:1};case tr:case Ic:case Gn:return{byteLength:2,components:1};case Lo:case Do:return{byteLength:2,components:4};case Vn:case Io:case Hn:return{byteLength:4,components:1};case Lc:case Dc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Wd(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function cm(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,um=`#ifdef USE_ALPHAHASH
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
#endif`,dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gm=`#ifdef USE_AOMAP
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
#endif`,_m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xm=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bm=`#ifdef USE_IRIDESCENCE
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
#endif`,Em=`#ifdef USE_BUMPMAP
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Dm=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Nm=`vec3 transformedNormal = objectNormal;
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
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,km="gl_FragColor = linearToOutputTexel( gl_FragColor );",zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$m=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
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
}`,Km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eg=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,tg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ag=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,og=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lg=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ug=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yg=`#if defined( USE_POINTS_UV )
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
#endif`,vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
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
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lg=`#ifdef USE_NORMALMAP
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
#endif`,Dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,$g=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,Kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jg=`#ifdef USE_SKINNING
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
#endif`,Qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i0=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s0=`#ifdef USE_TRANSMISSION
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,l0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h0=`uniform sampler2D t2D;
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`#include <common>
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
}`,g0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_0=`#define DISTANCE
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
}`,x0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`uniform float scale;
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
}`,S0=`uniform vec3 diffuse;
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
}`,b0=`#include <common>
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
}`,E0=`uniform vec3 diffuse;
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
}`,w0=`#define LAMBERT
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
}`,T0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,A0=`#define MATCAP
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
}`,C0=`#define MATCAP
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
}`,R0=`#define NORMAL
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
}`,P0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I0=`#define PHONG
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
}`,L0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,D0=`#define STANDARD
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
}`,N0=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,U0=`#define TOON
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
}`,F0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,O0=`uniform float size;
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
}`,B0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,z0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,V0=`uniform float rotation;
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
}`,H0=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:hm,alphahash_pars_fragment:um,alphamap_fragment:dm,alphamap_pars_fragment:fm,alphatest_fragment:pm,alphatest_pars_fragment:mm,aomap_fragment:gm,aomap_pars_fragment:_m,batching_pars_vertex:xm,batching_vertex:ym,begin_vertex:vm,beginnormal_vertex:Mm,bsdfs:Sm,iridescence_fragment:bm,bumpmap_pars_fragment:Em,clipping_planes_fragment:wm,clipping_planes_pars_fragment:Tm,clipping_planes_pars_vertex:Am,clipping_planes_vertex:Cm,color_fragment:Rm,color_pars_fragment:Pm,color_pars_vertex:Im,color_vertex:Lm,common:Dm,defaultnormal_vertex:Nm,displacementmap_pars_vertex:Um,displacementmap_vertex:Fm,emissivemap_fragment:Om,emissivemap_pars_fragment:Bm,colorspace_fragment:km,colorspace_pars_fragment:zm,envmap_fragment:Vm,envmap_common_pars_fragment:Hm,envmap_pars_fragment:Gm,envmap_pars_vertex:Wm,envmap_physical_pars_fragment:tg,envmap_vertex:Xm,fog_vertex:qm,fog_pars_vertex:Ym,fog_fragment:$m,fog_pars_fragment:Zm,gradientmap_pars_fragment:Jm,lightmap_pars_fragment:Km,lights_lambert_fragment:jm,lights_lambert_pars_fragment:Qm,lights_pars_begin:eg,lights_toon_fragment:ng,lights_toon_pars_fragment:ig,lights_phong_fragment:sg,lights_phong_pars_fragment:rg,lights_physical_fragment:ag,lights_physical_pars_fragment:og,lights_fragment_begin:lg,lights_fragment_maps:cg,lights_fragment_end:hg,lightprobes_pars_fragment:ug,logdepthbuf_fragment:dg,logdepthbuf_pars_fragment:fg,logdepthbuf_pars_vertex:pg,logdepthbuf_vertex:mg,map_fragment:gg,map_pars_fragment:_g,map_particle_fragment:xg,map_particle_pars_fragment:yg,metalnessmap_fragment:vg,metalnessmap_pars_fragment:Mg,morphinstance_vertex:Sg,morphcolor_vertex:bg,morphnormal_vertex:Eg,morphtarget_pars_vertex:wg,morphtarget_vertex:Tg,normal_fragment_begin:Ag,normal_fragment_maps:Cg,normal_pars_fragment:Rg,normal_pars_vertex:Pg,normal_vertex:Ig,normalmap_pars_fragment:Lg,clearcoat_normal_fragment_begin:Dg,clearcoat_normal_fragment_maps:Ng,clearcoat_pars_fragment:Ug,iridescence_pars_fragment:Fg,opaque_fragment:Og,packing:Bg,premultiplied_alpha_fragment:kg,project_vertex:zg,dithering_fragment:Vg,dithering_pars_fragment:Hg,roughnessmap_fragment:Gg,roughnessmap_pars_fragment:Wg,shadowmap_pars_fragment:Xg,shadowmap_pars_vertex:qg,shadowmap_vertex:Yg,shadowmask_pars_fragment:$g,skinbase_vertex:Zg,skinning_pars_vertex:Jg,skinning_vertex:Kg,skinnormal_vertex:jg,specularmap_fragment:Qg,specularmap_pars_fragment:e0,tonemapping_fragment:t0,tonemapping_pars_fragment:n0,transmission_fragment:i0,transmission_pars_fragment:s0,uv_pars_fragment:r0,uv_pars_vertex:a0,uv_vertex:o0,worldpos_vertex:l0,background_vert:c0,background_frag:h0,backgroundCube_vert:u0,backgroundCube_frag:d0,cube_vert:f0,cube_frag:p0,depth_vert:m0,depth_frag:g0,distance_vert:_0,distance_frag:x0,equirect_vert:y0,equirect_frag:v0,linedashed_vert:M0,linedashed_frag:S0,meshbasic_vert:b0,meshbasic_frag:E0,meshlambert_vert:w0,meshlambert_frag:T0,meshmatcap_vert:A0,meshmatcap_frag:C0,meshnormal_vert:R0,meshnormal_frag:P0,meshphong_vert:I0,meshphong_frag:L0,meshphysical_vert:D0,meshphysical_frag:N0,meshtoon_vert:U0,meshtoon_frag:F0,points_vert:O0,points_frag:B0,shadow_vert:k0,shadow_frag:z0,sprite_vert:V0,sprite_frag:H0},ve={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ii={basic:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:hn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:hn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:hn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:hn([ve.points,ve.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:hn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:hn([ve.common,ve.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:hn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:hn([ve.sprite,ve.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:hn([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:hn([ve.lights,ve.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ii.physical={uniforms:hn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var ml={r:0,b:0,g:0},G0=new at,Xd=new Be;Xd.set(-1,0,0,0,1,0,0,0,1);function W0(n,e,t,i,s,r){let a=new Pe(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let b=M.backgroundBlurriness>0;T=e.get(T,b)}return T}function g(M){let T=!1,b=f(M);b===null?p(a,o):b&&b.isColor&&(p(b,1),T=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(M,T){let b=f(T);b&&b.isCubeTexture?(c===void 0&&(c=new Ot(new Zs(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:xs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(G0.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xd),c.material.toneMapped=$e.getTransfer(b.colorSpace)!==ot,(u!==b||d!==b.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ot(new Nr(2,2),new jn({name:"BackgroundMaterial",uniforms:xs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=$e.getTransfer(b.colorSpace)!==ot,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,T){M.getRGB(ml,Xc(n)),t.buffers.color.setClear(ml.r,ml.g,ml.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:x,dispose:m}}function X0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(D,O,W,I,Y){let $=!1,G=d(D,I,W,O);r!==G&&(r=G,c(r.object)),$=f(D,I,W,Y),$&&g(D,I,W,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,b(D,O,W,I),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function d(D,O,W,I){let Y=I.wireframe===!0,$=i[O.id];$===void 0&&($={},i[O.id]=$);let G=D.isInstancedMesh===!0?D.id:0,ne=$[G];ne===void 0&&(ne={},$[G]=ne);let X=ne[W.id];X===void 0&&(X={},ne[W.id]=X);let Q=X[Y];return Q===void 0&&(Q=h(l()),X[Y]=Q),Q}function h(D){let O=[],W=[],I=[];for(let Y=0;Y<t;Y++)O[Y]=0,W[Y]=0,I[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,O,W,I){let Y=r.attributes,$=O.attributes,G=0,ne=W.getAttributes();for(let X in ne)if(ne[X].location>=0){let z=Y[X],re=$[X];if(re===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),z===void 0||z.attribute!==re||re&&z.data!==re.data)return!0;G++}return r.attributesNum!==G||r.index!==I}function g(D,O,W,I){let Y={},$=O.attributes,G=0,ne=W.getAttributes();for(let X in ne)if(ne[X].location>=0){let z=$[X];z===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(z=D.instanceColor));let re={};re.attribute=z,z&&z.data&&(re.data=z.data),Y[X]=re,G++}r.attributes=Y,r.attributesNum=G,r.index=I}function x(){let D=r.newAttributes;for(let O=0,W=D.length;O<W;O++)D[O]=0}function p(D){m(D,0)}function m(D,O){let W=r.newAttributes,I=r.enabledAttributes,Y=r.attributeDivisors;W[D]=1,I[D]===0&&(n.enableVertexAttribArray(D),I[D]=1),Y[D]!==O&&(n.vertexAttribDivisor(D,O),Y[D]=O)}function M(){let D=r.newAttributes,O=r.enabledAttributes;for(let W=0,I=O.length;W<I;W++)O[W]!==D[W]&&(n.disableVertexAttribArray(W),O[W]=0)}function T(D,O,W,I,Y,$,G){G===!0?n.vertexAttribIPointer(D,O,W,Y,$):n.vertexAttribPointer(D,O,W,I,Y,$)}function b(D,O,W,I){x();let Y=I.attributes,$=W.getAttributes(),G=O.defaultAttributeValues;for(let ne in $){let X=$[ne];if(X.location>=0){let Q=Y[ne];if(Q===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){let z=Q.normalized,re=Q.itemSize,fe=e.get(Q);if(fe===void 0)continue;let H=fe.buffer,ie=fe.type,ce=fe.bytesPerElement,ae=ie===n.INT||ie===n.UNSIGNED_INT||Q.gpuType===Io;if(Q.isInterleavedBufferAttribute){let te=Q.data,be=te.isInterleavedBuffer===!0?te.stride:te.itemSize,je=Q.offset;if(te.isInstancedInterleavedBuffer||te.isInstancedBufferAttribute){for(let Ee=0;Ee<X.locationSize;Ee++)m(X.location+Ee,te.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ee=0;Ee<X.locationSize;Ee++)p(X.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,H);for(let Ee=0;Ee<X.locationSize;Ee++)T(X.location+Ee,re/X.locationSize,ie,z,be*ce,(je+re/X.locationSize*Ee)*ce,ae)}else{if(Q.isInstancedBufferAttribute){for(let te=0;te<X.locationSize;te++)m(X.location+te,Q.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let te=0;te<X.locationSize;te++)p(X.location+te);n.bindBuffer(n.ARRAY_BUFFER,H);for(let te=0;te<X.locationSize;te++)T(X.location+te,re/X.locationSize,ie,z,re*ce,re/X.locationSize*te*ce,ae)}}else if(G!==void 0){let z=G[ne];if(z!==void 0)switch(z.length){case 2:n.vertexAttrib2fv(X.location,z);break;case 3:n.vertexAttrib3fv(X.location,z);break;case 4:n.vertexAttrib4fv(X.location,z);break;default:n.vertexAttrib1fv(X.location,z)}}}}M()}function A(){P();for(let D in i){let O=i[D];for(let W in O){let I=O[W];for(let Y in I){let $=I[Y];for(let G in $)u($[G].object),delete $[G];delete I[Y]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let O=i[D.id];for(let W in O){let I=O[W];for(let Y in I){let $=I[Y];for(let G in $)u($[G].object),delete $[G];delete I[Y]}}delete i[D.id]}function _(D){for(let O in i){let W=i[O];for(let I in W){let Y=W[I];if(Y[D.id]===void 0)continue;let $=Y[D.id];for(let G in $)u($[G].object),delete $[G];delete Y[D.id]}}}function S(D){for(let O in i){let W=i[O],I=D.isInstancedMesh===!0?D.id:0,Y=W[I];if(Y!==void 0){for(let $ in Y){let G=Y[$];for(let ne in G)u(G[ne].object),delete G[ne];delete Y[$]}delete W[I],Object.keys(W).length===0&&delete i[O]}}}function P(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function q0(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Y0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Wn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let S=_===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==yn&&_!==Hn&&!S&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Fe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Fe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:b,maxSamples:A,samples:E}}function $0(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Bn,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let M=r?0:i,T=M*4,b=m.clippingState||null;l.value=b,b=u(g,h,T,f);for(let A=0;A!==T;++A)b[A]=t[A];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,b=f;T!==x;++T,b+=4)a.copy(d[T]).applyMatrix4(M,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var ta=class extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ir(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zs(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:ps});r.uniforms.tEquirect.value=t;let a=new Ot(s,r),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=Ct),new Ks(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},bd=256,Z0=3,J0=20,qd=256,Yd=16,K0=3,j0=new F,Q0=new Pe,_l=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ks(1,10,null),this._boxMesh=new Ot(new Zs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=j0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Q0));let p=new Ks(i,s,u);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=g,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(bd,Gc(e))}_fromTexture(e,t){e.mapping===gs||e.mapping===er?this._setSize(e.image.length===0?bd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Ed(e,!1,!1),i=Math.log2(e)-Z0;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Ed(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===gs||e.mapping===er?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=wd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=e_(),this._integrationMaterial=t_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Yd);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-K0)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(qd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=n_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Ed(n,e,t){return new ta(n,{minFilter:zn,generateMipmaps:e,type:Gn,colorSpace:wr,depthBuffer:t})}function na(n,e,t){return new jn({name:n,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:t,side:mn,blending:ps,depthTest:!1,depthWrite:!1})}function e_(){return na("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function t_(){return na("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Yd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function n_(){return na("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${J0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function wd(){return na("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Td(){return na("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function i_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Co||f===Ro)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new ta(g.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let f=h.mapping,g=f===Co||f===Ro,x=f===gs||f===er;if(g||x){let p=t.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new _l(n)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let M=h.image;return g&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new _l(n)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===Co?h.mapping=gs:f===Ro&&(h.mapping=er),h}function l(h){let f=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function s_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ls("WebGLRenderer: "+i+" extension not supported."),s}}}function r_(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function u(g){let x=g.attributes;for(let p in x)e.update(x[p],n.ARRAY_BUFFER)}function d(g){let x=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let M=x!==null?x.array.length:p.array.length/3-1,T=p.count>=65535?Pr:Rr,b=new T(Math.ceil(M/3)*6,1),A=b.array;if(x!==null){let _=x.array;m=x.version;for(let S=0,P=0;S<M;S+=3){let C=_[S+0],D=_[S+1],O=_[S+2];A[P++]=C,A[P++]=D,A[P++]=D,A[P++]=O,A[P++]=O,A[P++]=C}}else{m=p.version;for(let _=0,S=0;_<M;_+=3){let P=_+0,C=_+1,D=_+2;A[S++]=P,A[S++]=C,A[S++]=C,A[S++]=D,A[S++]=D,A[S++]=P}}b.version=m;let E=r.get(g);E&&e.remove(E),r.set(g,b)}function h(g){let x=r.get(g);if(x){let p=g.index;p!==null&&x.version<p.version&&d(g)}else d(g);return r.get(g)}function f(){for(let g in s){let x=s[g].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function a_(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*a),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*a,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=h[p];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function o_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function l_(n,e,t){let i=new WeakMap,s=new bt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let P=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",P)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let b=o.attributes.position.count*T,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*A*4*d),_=new Ar(E,b,A,d);_.type=Hn,_.needsUpdate=!0;let S=T*4;for(let C=0;C<d;C++){let D=p[C],O=m[C],W=M[C],I=b*A*4*C;for(let Y=0;Y<D.count;Y++){let $=Y*S;f===!0&&(s.fromBufferAttribute(D,Y),E[I+$+0]=s.x,E[I+$+1]=s.y,E[I+$+2]=s.z,E[I+$+3]=0),g===!0&&(s.fromBufferAttribute(O,Y),E[I+$+4]=s.x,E[I+$+5]=s.y,E[I+$+6]=s.z,E[I+$+7]=0),x===!0&&(s.fromBufferAttribute(W,Y),E[I+$+8]=s.x,E[I+$+9]=s.y,E[I+$+10]=s.z,E[I+$+11]=W.itemSize===4?s.w:1)}}h={count:d,texture:_,size:new We(b,A)},i.set(o,h),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function c_(n,e,t,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var h_={[bc]:"LINEAR_TONE_MAPPING",[Ec]:"REINHARD_TONE_MAPPING",[wc]:"CINEON_TONE_MAPPING",[Wr]:"ACES_FILMIC_TONE_MAPPING",[Ac]:"AGX_TONE_MAPPING",[Cc]:"NEUTRAL_TONE_MAPPING",[Tc]:"CUSTOM_TONE_MAPPING"};function u_(n,e,t,i,s,r){let a=new bn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Ft;u.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new xt([0,2,0,0,2,0],2));let d=new ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ot(u,d),f=new zr(-1,1,1,-1,0,1),g=null,x=null,p=!1,m,M=null,T=[],b=!1;this.setSize=function(A,E){a.setSize(A,E),o!==null&&o.setSize(A,E),l!==null&&l.setSize(A,E);for(let _=0;_<T.length;_++){let S=T[_];S.setSize&&S.setSize(A,E)}},this.setEffects=function(A){T=A,b=T.length>0&&T[0].isRenderPass===!0;let E=a.width,_=a.height;T.length>0&&o===null&&(o=new bn(E,_,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new bn(E,_,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&T.some(P=>P.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new _i(E,_),r===!0&&(c.format=xi,c.type=_s)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let P=0;P<T.length;P++){let C=T[P];C.setSize&&C.setSize(E,_),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,E){if(p||A.toneMapping===ti&&T.length===0)return!1;if(M=E,E!==null){let _=E.width,S=E.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return b===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=ti,!0},this.hasRenderPass=function(){return b},this.end=function(A,E){A.toneMapping=m,p=!0;let _=a,S=o;for(let P=0;P<T.length;P++){let C=T[P];C.enabled!==!1&&(C.render(A,S,_,E),C.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(g!==A.outputColorSpace||x!==A.toneMapping){g=A.outputColorSpace,x=A.toneMapping,d.defines={},$e.getTransfer(g)===ot&&(d.defines.SRGB_TRANSFER="");let P=h_[x];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(M),A.render(h,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var $d=new $t,Zd=new _i(1,1),Jd=new Lr(1),Kd=new Ar,jd=new so,Qd=new Ir,Ad=[],Cd=[],Rd=new Float32Array(16),Pd=new Float32Array(9),Id=new Float32Array(4);function rr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Ad[s];if(r===void 0&&(r=new Float32Array(s),Ad[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function yl(n,e){let t=Cd[e];t===void 0&&(t=new Int32Array(e),Cd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function d_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function f_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function p_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function m_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function g_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Id.set(i),n.uniformMatrix2fv(this.addr,!1,Id),zt(t,i)}}function __(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Pd.set(i),n.uniformMatrix3fv(this.addr,!1,Pd),zt(t,i)}}function x_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Rd.set(i),n.uniformMatrix4fv(this.addr,!1,Rd),zt(t,i)}}function y_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function v_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function M_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function S_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function b_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function E_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function w_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function T_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function vl(n){return n.version===0&&(n.compareFunction=kc,n.needsUpdate=!0),n}function A_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=vl(Zd):r=$d,t.setTexture2D(e||r,s)}function C_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jd,s)}function R_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=vl(Jd):r=Qd,t.setTextureCube(e||r,s)}function P_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Kd,s)}function I_(n){switch(n){case 5126:return d_;case 35664:return f_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return __;case 35676:return x_;case 5124:case 35670:return y_;case 35667:case 35671:return v_;case 35668:case 35672:return M_;case 35669:case 35673:return S_;case 5125:return b_;case 36294:return E_;case 36295:return w_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return P_}}function L_(n,e){n.uniform1fv(this.addr,e)}function D_(n,e){let t=rr(e,this.size,2);n.uniform2fv(this.addr,t)}function N_(n,e){let t=rr(e,this.size,3);n.uniform3fv(this.addr,t)}function U_(n,e){let t=rr(e,this.size,4);n.uniform4fv(this.addr,t)}function F_(n,e){let t=rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function O_(n,e){let t=rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function B_(n,e){let t=rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function k_(n,e){n.uniform1iv(this.addr,e)}function z_(n,e){n.uniform2iv(this.addr,e)}function V_(n,e){n.uniform3iv(this.addr,e)}function H_(n,e){n.uniform4iv(this.addr,e)}function G_(n,e){n.uniform1uiv(this.addr,e)}function W_(n,e){n.uniform2uiv(this.addr,e)}function X_(n,e){n.uniform3uiv(this.addr,e)}function q_(n,e){n.uniform4uiv(this.addr,e)}function Y_(n,e,t){let i=this.cache,s=e.length,r=yl(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=vl(Zd):a=$d;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function $_(n,e,t){let i=this.cache,s=e.length,r=yl(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||jd,r[a])}function Z_(n,e,t){let i=this.cache,s=e.length,r=yl(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=vl(Jd):a=Qd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function J_(n,e,t){let i=this.cache,s=e.length,r=yl(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Kd,r[a])}function K_(n){switch(n){case 5126:return L_;case 35664:return D_;case 35665:return N_;case 35666:return U_;case 35674:return F_;case 35675:return O_;case 35676:return B_;case 5124:case 35670:return k_;case 35667:case 35671:return z_;case 35668:case 35672:return V_;case 35669:case 35673:return H_;case 5125:return G_;case 36294:return W_;case 36295:return X_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return J_}}var Kc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=I_(t.type)}},jc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K_(t.type)}},Qc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Zc=/(\w+)(\])?(\[|\.)?/g;function Ld(n,e){n.seq.push(e),n.map[e.id]=e}function j_(n,e,t){let i=n.name,s=i.length;for(Zc.lastIndex=0;;){let r=Zc.exec(i),a=Zc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ld(t,c===void 0?new Kc(o,n,e):new jc(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Qc(o),Ld(t,d)),t=d}}}var sr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);j_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Dd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Q_=37297,ex=0;function tx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Nd=new Be;function nx(n){$e._getMatrix(Nd,$e.workingColorSpace,n);let e=`mat3( ${Nd.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case Tr:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ud(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+tx(n.getShaderSource(e),o)}else return r}function ix(n,e){let t=nx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var sx={[bc]:"Linear",[Ec]:"Reinhard",[wc]:"Cineon",[Wr]:"ACESFilmic",[Ac]:"AgX",[Cc]:"Neutral",[Tc]:"Custom"};function rx(n,e){let t=sx[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gl=new F;function ax(){$e.getLuminanceCoefficients(gl);let n=gl.x.toFixed(4),e=gl.y.toFixed(4),t=gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ox(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function lx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ea(n){return n!==""}function Fd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Od(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(n){return n.replace(hx,ux)}function ux(n,e){let t=Ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return eh(t)}var dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bd(n){return n.replace(dx,fx)}function fx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var px={[Gr]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function mx(n){return px[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var gx={[er]:"ENVMAP_MODE_REFRACTION"};function _x(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":gx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xx={[Ao]:"ENVMAP_BLENDING_MULTIPLY",[nd]:"ENVMAP_BLENDING_MIX",[id]:"ENVMAP_BLENDING_ADD"};function yx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":xx[n.combine]||"ENVMAP_BLENDING_NONE"}function vx(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=mx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=_x(t),d=yx(t),h=ox(t),f=lx(r),g=s.createProgram(),x,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ea).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ea).join(`
`),p.length>0&&(p+=`
`)):(x=[kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),p=[kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Ze.tonemapping_pars_fragment:"",t.toneMapping!==ti?rx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,ix("linearToOutputTexel",t.outputColorSpace),ax(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),a=eh(a),a=Fd(a,t),a=Od(a,t),o=eh(o),o=Fd(o,t),o=Od(o,t),a=Bd(a),o=Bd(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=m+x+a,T=m+p+o,b=Dd(s,s.VERTEX_SHADER,M),A=Dd(s,s.FRAGMENT_SHADER,T);s.attachShader(g,b),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(C){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(b)||"",W=s.getShaderInfoLog(A)||"",I=D.trim(),Y=O.trim(),$=W.trim(),G=!0,ne=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,b,A);else{let X=Ud(s,b,"vertex"),Q=Ud(s,A,"fragment");ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+X+`
`+Q)}else I!==""?Fe("WebGLProgram: Program Info Log:",I):(Y===""||$==="")&&(ne=!1);ne&&(C.diagnostics={runnable:G,programLog:I,vertexShader:{log:Y,prefix:x},fragmentShader:{log:$,prefix:p}})}s.deleteShader(b),s.deleteShader(A),_=new sr(s,g),S=cx(s,g)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(g,Q_)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ex++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=A,this}var Mx=0,th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new nh(e),t.set(e,i)),i}},nh=class{constructor(e){this.id=Mx++,this.code=e,this.usedTimes=0}};function Sx(n){return n===Hi||n===Jr||n===Kr}function bx(n,e,t,i,s,r){let a=new qs,o=new th,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,S,P,C,D,O){let W=C.fog,I=D.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=e.get(_.envMap||Y,$),ne=h[_.type],X=i.precision;_.precision!==null&&(X=i.getMaxPrecision(_.precision),X!==_.precision&&Fe("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let Q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,z=Q!==void 0?Q.length:0,re=0;I.morphAttributes.position!==void 0&&(re=1),I.morphAttributes.normal!==void 0&&(re=2),I.morphAttributes.color!==void 0&&(re=3);let fe,H,ie,ce;if(ne){let ye=ii[ne];fe=ye.vertexShader,H=ye.fragmentShader}else{fe=_.vertexShader,H=_.fragmentShader;let ye=o.getVertexShaderStage(_),ct=o.getFragmentShaderStage(_);o.update(_,ye,ct),ie=ye.id,ce=ct.id}let ae=n.getRenderTarget(),te=n.state.buffers.depth.getReversed(),be=D.isInstancedMesh===!0,je=D.isBatchedMesh===!0,Ee=!!_.map,Ve=!!_.matcap,Xe=!!G,Ne=Xe&&G.isPMREMTexture===!0,gt=!!_.aoMap,St=!!_.lightMap,lt=!!_.bumpMap&&_.wireframe===!1,it=!!_.normalMap,Bt=!!_.displacementMap,vt=!!_.emissiveMap,Rt=!!_.metalnessMap,Pt=!!_.roughnessMap,It=_.anisotropy>0,N=_.clearcoat>0,Qt=_.diffuseRoughness>0,ft=_.dispersion>0,pt=_.retroreflectivity>0,_e=_.iridescence>0,At=_.sheen>0,De=_.transmission>0,ke=It&&!!_.anisotropyMap,w=N&&!!_.clearcoatMap,y=N&&!!_.clearcoatNormalMap,B=N&&!!_.clearcoatRoughnessMap,se=Qt&&!!_.diffuseRoughnessMap,j=_e&&!!_.iridescenceMap,oe=_e&&!!_.iridescenceThicknessMap,de=At&&!!_.sheenColorMap,J=At&&!!_.sheenRoughnessMap,K=!!_.specularMap,ue=!!_.specularColorMap,R=!!_.specularIntensityMap,ee=De&&!!_.transmissionMap,Z=De&&!!_.thicknessMap,me=!!_.gradientMap,he=!!_.alphaMap,pe=_.alphaTest>0,Le=!!_.alphaHash,Ye=!!_.extensions,le=ti;_.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(le=n.toneMapping);let Ue=Ne?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,qe={shaderID:ne,shaderType:_.type,shaderName:_.name,vertexShader:fe,fragmentShader:H,defines:_.defines,customVertexShaderID:ie,customFragmentShaderID:ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:je,batchingColor:je&&D._colorsTexture!==null,instancing:be,instancingColor:be&&D.instanceColor!==null,instancingMorph:be&&D.morphTexture!==null,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ee,matcap:Ve,envMap:Xe,envMapMode:Xe&&G.mapping,envMapPMREM:Ne,envMapMaxLod:Ne?Ue.length-1:null,envMapSize:Ne?Ue[0].width:null,aoMap:gt,lightMap:St,bumpMap:lt,normalMap:it,displacementMap:Bt,emissiveMap:vt,normalMapObjectSpace:it&&_.normalMapType===ad,normalMapTangentSpace:it&&_.normalMapType===jr,packedNormalMap:it&&_.normalMapType===jr&&Sx(_.normalMap.format),metalnessMap:Rt,roughnessMap:Pt,anisotropy:It,anisotropyMap:ke,clearcoat:N,clearcoatMap:w,clearcoatNormalMap:y,clearcoatRoughnessMap:B,diffuseRoughness:Qt,diffuseRoughnessMap:se,dispersion:ft,retroreflection:pt,iridescence:_e,iridescenceMap:j,iridescenceThicknessMap:oe,sheen:At,sheenColorMap:de,sheenRoughnessMap:J,specularMap:K,specularColorMap:ue,specularIntensityMap:R,transmission:De,transmissionMap:ee,thicknessMap:Z,gradientMap:me,opaque:_.transparent===!1&&_.blending===Qs&&_.alphaToCoverage===!1,alphaMap:he,alphaTest:pe,alphaHash:Le,combine:_.combine,mapUv:Ee&&f(_.map.channel),aoMapUv:gt&&f(_.aoMap.channel),lightMapUv:St&&f(_.lightMap.channel),bumpMapUv:lt&&f(_.bumpMap.channel),normalMapUv:it&&f(_.normalMap.channel),displacementMapUv:Bt&&f(_.displacementMap.channel),emissiveMapUv:vt&&f(_.emissiveMap.channel),metalnessMapUv:Rt&&f(_.metalnessMap.channel),roughnessMapUv:Pt&&f(_.roughnessMap.channel),anisotropyMapUv:ke&&f(_.anisotropyMap.channel),clearcoatMapUv:w&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:de&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&f(_.sheenRoughnessMap.channel),specularMapUv:K&&f(_.specularMap.channel),specularColorMapUv:ue&&f(_.specularColorMap.channel),specularIntensityMapUv:R&&f(_.specularIntensityMap.channel),transmissionMapUv:ee&&f(_.transmissionMap.channel),thicknessMapUv:Z&&f(_.thicknessMap.channel),alphaMapUv:he&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(it||It),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Ee||he),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&it===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:re,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.filter(ye=>ye.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:le,decodeVideoTexture:Ee&&_.map.isVideoTexture===!0&&$e.getTransfer(_.map.colorSpace)===ot,decodeVideoTextureEmissive:vt&&_.emissiveMap.isVideoTexture===!0&&$e.getTransfer(_.emissiveMap.colorSpace)===ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===nn,flipSided:_.side===mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ye&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&_.extensions.multiDraw===!0||je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function x(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)S.push(P),S.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(S,_),m(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function m(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let S=h[_.type],P;if(S){let C=ii[S];P=Md.clone(C.uniforms)}else P=_.uniforms;return P}function T(_,S){let P=u.get(S);return P!==void 0?++P.usedTimes:(P=new vx(n,S,_,s),c.push(P),u.set(S,P)),P}function b(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:M,acquireProgram:T,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:E}}function Ex(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function wx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function zd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,x,p,m){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:p,group:m},n[e]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=g,M.materialVariant=a(h),M.groupOrder=x,M.renderOrder=h.renderOrder,M.z=p,M.group=m),e++,M}function l(h,f,g,x,p,m,M){M.reversedDepth===!0&&(p=-p);let T=o(h,f,g,x,p,m);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):t.push(T)}function c(h,f,g,x,p,m){let M=o(h,f,g,x,p,m);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,f){t.length>1&&t.sort(h||wx),i.length>1&&i.sort(f||zd),s.length>1&&s.sort(f||zd)}function d(){for(let h=e,f=n.length;h<f;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Tx(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Vd,n.set(i,[a])):s>=r.length?(a=new Vd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ax(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Pe};break;case"SpotLight":t={position:new F,direction:new F,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function Cx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Rx=0;function Px(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ix(n){let e=new Ax,t=Cx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new at,a=new at;function o(c){let u=0,d=0,h=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,M=0,T=0,b=0,A=0,E=0,_=0,S=0,P=0,C=0;c.sort(Px);for(let O=0,W=c.length;O<W;O++){let I=c[O],Y=I.color,$=I.intensity,G=I.distance,ne=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Hi?ne=I.shadow.map.texture:ne=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=Y.r*$,d+=Y.g*$,h+=Y.b*$;else if(I.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(I.sh.coefficients[X],$);C++}else if(I.isSunLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,z=t.get(I);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=z,i.sunShadowMap[g]=ne;let re=Q.getViewportCount();for(let fe=0;fe<re;fe++)i.sunShadowMatrix[x+fe]=Q.getMatrix(fe),i.sunShadowCascade[x+fe]=Q._cascadeData[fe];x+=re,g++}i.sun[f]=X,f++}else if(I.isDirectionalLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,z=t.get(I);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=ne,i.directionalShadowMatrix[p]=I.shadow.matrix,A++}i.directional[p]=X,p++}else if(I.isSpotLight){let X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(Y).multiplyScalar($),X.distance=G,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,i.spot[M]=X;let Q=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,Q.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[M]=Q.matrix,I.castShadow){let z=t.get(I);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,i.spotShadow[M]=z,i.spotShadowMap[M]=ne,_++}M++}else if(I.isRectAreaLight){let X=e.get(I);X.color.copy(Y).multiplyScalar($),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),i.rectArea[T]=X,T++}else if(I.isPointLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let Q=I.shadow,z=t.get(I);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,z.shadowCameraNear=Q.camera.near,z.shadowCameraFar=Q.camera.far,i.pointShadow[m]=z,i.pointShadowMap[m]=ne,i.pointShadowMatrix[m]=I.shadow.matrix,E++}i.point[m]=X,m++}else if(I.isHemisphereLight){let X=e.get(I);X.skyColor.copy(I.color).multiplyScalar($),X.groundColor.copy(I.groundColor).multiplyScalar($),i.hemi[b]=X,b++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let D=i.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==M||D.rectAreaLength!==T||D.hemiLength!==b||D.numSunShadows!==g||D.numDirectionalShadows!==A||D.numPointShadows!==E||D.numSpotShadows!==_||D.numSpotMaps!==S||D.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=p,i.spot.length=M,i.rectArea.length=T,i.point.length=m,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-P,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,D.sunLength=f,D.directionalLength=p,D.pointLength=m,D.spotLength=M,D.rectAreaLength=T,D.hemiLength=b,D.numSunShadows=g,D.numDirectionalShadows=A,D.numPointShadows=E,D.numSpotShadows=_,D.numSpotMaps=S,D.numLightProbes=C,i.version=Rx++)}function l(c,u){let d=0,h=0,f=0,g=0,x=0,p=0,m=u.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let b=c[M];if(b.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(m),d++}else if(b.isDirectionalLight){let A=i.directional[h];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),h++}else if(b.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(b.isRectAreaLight){let A=i.rectArea[x];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let A=i.hemi[p];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function Hd(n){let e=new Ix(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){i.push(d)}function l(){e.setup(t),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Lx(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Hd(n),e.set(s,[o])):r>=a.length?(o=new Hd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ux=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Fx=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Gd=new at,Qr=new F,Jc=new F;function Ox(n,e,t){let i=new Fi,s=new We,r=new We,a=new bt,o=new fo,l=new po,c={},u=t.maxTextureSize,d={[ei]:mn,[mn]:ei,[nn]:nn},h=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Dx,fragmentShader:Nx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ft;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ot(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gr;let m=this.type;this.render=function(E,_,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Ou&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gr);let P=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),O=n.state;O.setBlending(ps),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let W=m!==this.type;W&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(Y=>Y.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,Y=E.length;I<Y;I++){let $=E[I],G=$.shadow;if(G===void 0){Fe("WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ne=G.getFrameExtents();s.multiply(ne),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,G.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||W===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===js){if($.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new bn(s.x,s.y,{format:Hi,type:Gn,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),G.map.texture.name=$.name+".shadowMap",G.map.depthTexture=new _i(s.x,s.y,Hn),G.map.depthTexture.name=$.name+".shadowMapDepth",G.map.depthTexture.format=mi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Yt,G.map.depthTexture.magFilter=Yt}else $.isPointLight?(G.map=new ta(s.x),G.map.depthTexture=new Lr(s.x,Vn)):(G.map=new bn(s.x,s.y),G.map.depthTexture=new _i(s.x,s.y,Vn)),G.map.depthTexture.name=$.name+".shadowMap",G.map.depthTexture.format=mi,this.type===Gr?(G.map.depthTexture.compareFunction=X?Bc:Oc,G.map.depthTexture.minFilter=Ct,G.map.depthTexture.magFilter=Ct):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Yt,G.map.depthTexture.magFilter=Yt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let Q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();$.isPointLight!==!0&&G.updateMatrices($,S);let z=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:S.layers;for(let re=0;re<Q;re++){let fe=G.getCamera(re);if($.isPointLight){let H=G.camera,ie=G.matrix,ce=$.distance||H.far;ce!==H.far&&(H.far=ce,H.updateProjectionMatrix()),Qr.setFromMatrixPosition($.matrixWorld),H.position.copy(Qr),Jc.copy(H.position),Jc.add(Ux[re]),H.up.copy(Fx[re]),H.lookAt(Jc),H.updateMatrixWorld(),ie.makeTranslation(-Qr.x,-Qr.y,-Qr.z),Gd.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Gd,H.coordinateSystem,H.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,re),n.clear();else{re===0&&(n.setRenderTarget(G.map),n.clear());let H=G.getViewport(re);a.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),O.viewport(a)}i=G.getFrustum(re),b(_,S,fe,$,z,this.type)}G.isPointLightShadow!==!0&&this.type===js&&M(G,S),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(P,C,D)};function M(E,_){let S=e.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new bn(s.x,s.y,{format:Hi,type:Gn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(_,null,S,h,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(_,null,S,f,x,null)}function T(E,_,S,P){let C=null,D=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)C=D;else if(C=S.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=C.uuid,W=_.uuid,I=c[O];I===void 0&&(I={},c[O]=I);let Y=I[W];Y===void 0&&(Y=C.clone(),I[W]=Y,_.addEventListener("dispose",A)),C=Y}if(C.visible=_.visible,C.wireframe=_.wireframe,P===js?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:d[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=n.properties.get(C);O.light=S}return C}function b(E,_,S,P,C,D){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===js)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let I=e.update(E),Y=E.material;if(Array.isArray(Y)){let $=I.groups;for(let G=0,ne=$.length;G<ne;G++){let X=$[G],Q=Y[X.materialIndex];if(Q&&Q.visible){let z=T(E,Q,P,D);E.onBeforeShadow(n,E,_,S,I,z,X),n.renderBufferDirect(S,null,I,z,E,X),E.onAfterShadow(n,E,_,S,I,z,X)}}}else if(Y.visible){let $=T(E,Y,P,D);E.onBeforeShadow(n,E,_,S,I,$,null),n.renderBufferDirect(S,null,I,$,E,null),E.onAfterShadow(n,E,_,S,I,$,null)}}let W=E.children;for(let I=0,Y=W.length;I<Y;I++)b(W[I],_,S,P,C,D)}function A(E){E.target.removeEventListener("dispose",A);for(let S in c){let P=c[S],C=E.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function Bx(n,e){function t(){let R=!1,ee=new bt,Z=null,me=new bt(0,0,0,0);return{setMask:function(he){Z!==he&&!R&&(n.colorMask(he,he,he,he),Z=he)},setLocked:function(he){R=he},setClear:function(he,pe,Le,Ye,le){le===!0&&(he*=Ye,pe*=Ye,Le*=Ye),ee.set(he,pe,Le,Ye),me.equals(ee)===!1&&(n.clearColor(he,pe,Le,Ye),me.copy(ee))},reset:function(){R=!1,Z=null,me.set(-1,0,0,0)}}}function i(){let R=!1,ee=!1,Z=null,me=null,he=null;return{setReversed:function(pe){if(ee!==pe){let Le=e.get("EXT_clip_control");pe?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ee=pe;let Ye=he;he=null,this.setClear(Ye)}},getReversed:function(){return ee},setTest:function(pe){pe?te(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(pe){Z!==pe&&!R&&(n.depthMask(pe),Z=pe)},setFunc:function(pe){if(ee&&(pe=_d[pe]),me!==pe){switch(pe){case Ya:n.depthFunc(n.NEVER);break;case $a:n.depthFunc(n.ALWAYS);break;case Za:n.depthFunc(n.LESS);break;case zs:n.depthFunc(n.LEQUAL);break;case Ja:n.depthFunc(n.EQUAL);break;case Ka:n.depthFunc(n.GEQUAL);break;case ja:n.depthFunc(n.GREATER);break;case Qa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=pe}},setLocked:function(pe){R=pe},setClear:function(pe){he!==pe&&(he=pe,ee&&(pe=1-pe),n.clearDepth(pe))},reset:function(){R=!1,Z=null,me=null,he=null,ee=!1}}}function s(){let R=!1,ee=null,Z=null,me=null,he=null,pe=null,Le=null,Ye=null,le=null;return{setTest:function(Ue){R||(Ue?te(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(Ue){ee!==Ue&&!R&&(n.stencilMask(Ue),ee=Ue)},setFunc:function(Ue,qe,ye){(Z!==Ue||me!==qe||he!==ye)&&(n.stencilFunc(Ue,qe,ye),Z=Ue,me=qe,he=ye)},setOp:function(Ue,qe,ye){(pe!==Ue||Le!==qe||Ye!==ye)&&(n.stencilOp(Ue,qe,ye),pe=Ue,Le=qe,Ye=ye)},setLocked:function(Ue){R=Ue},setClear:function(Ue){le!==Ue&&(n.clearStencil(Ue),le=Ue)},reset:function(){R=!1,ee=null,Z=null,me=null,he=null,pe=null,Le=null,Ye=null,le=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],x=null,p=!1,m=null,M=null,T=null,b=null,A=null,E=null,_=null,S=new Pe(0,0,0),P=0,C=!1,D=null,O=null,W=null,I=null,Y=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ne=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=ne>=2);let Q=null,z={},re=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),H=new bt().fromArray(re),ie=new bt().fromArray(fe);function ce(R,ee,Z,me){let he=new Uint8Array(4),pe=n.createTexture();n.bindTexture(R,pe),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<Z;Le++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(ee+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return pe}let ae={};ae[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(zs),lt(!1),it(_c),te(n.CULL_FACE),gt(ps);function te(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function be(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function je(R,ee){return h[R]!==ee?(n.bindFramebuffer(R,ee),h[R]=ee,R===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ee),R===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ee(R,ee){let Z=g,me=!1;if(R){Z=f.get(ee),Z===void 0&&(Z=[],f.set(ee,Z));let he=R.textures;if(Z.length!==he.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,Le=he.length;pe<Le;pe++)Z[pe]=n.COLOR_ATTACHMENT0+pe;Z.length=he.length,me=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,me=!0);me&&n.drawBuffers(Z)}function Ve(R){return x!==R?(n.useProgram(R),x=R,!0):!1}let Xe={[ms]:n.FUNC_ADD,[ku]:n.FUNC_SUBTRACT,[zu]:n.FUNC_REVERSE_SUBTRACT};Xe[Vu]=n.MIN,Xe[Hu]=n.MAX;let Ne={[Gu]:n.ZERO,[Wu]:n.ONE,[Xu]:n.SRC_COLOR,[Mc]:n.SRC_ALPHA,[Ku]:n.SRC_ALPHA_SATURATE,[Zu]:n.DST_COLOR,[Yu]:n.DST_ALPHA,[qu]:n.ONE_MINUS_SRC_COLOR,[Sc]:n.ONE_MINUS_SRC_ALPHA,[Ju]:n.ONE_MINUS_DST_COLOR,[$u]:n.ONE_MINUS_DST_ALPHA,[ju]:n.CONSTANT_COLOR,[Qu]:n.ONE_MINUS_CONSTANT_COLOR,[ed]:n.CONSTANT_ALPHA,[td]:n.ONE_MINUS_CONSTANT_ALPHA};function gt(R,ee,Z,me,he,pe,Le,Ye,le,Ue){if(R===ps){p===!0&&(be(n.BLEND),p=!1);return}if(p===!1&&(te(n.BLEND),p=!0),R!==Bu){if(R!==m||Ue!==C){if((M!==ms||A!==ms)&&(n.blendEquation(n.FUNC_ADD),M=ms,A=ms),Ue)switch(R){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xc:n.blendFunc(n.ONE,n.ONE);break;case yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ze("WebGLState: Invalid blending: ",R);break}else switch(R){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yc:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vc:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",R);break}T=null,b=null,E=null,_=null,S.set(0,0,0),P=0,m=R,C=Ue}return}he=he||ee,pe=pe||Z,Le=Le||me,(ee!==M||he!==A)&&(n.blendEquationSeparate(Xe[ee],Xe[he]),M=ee,A=he),(Z!==T||me!==b||pe!==E||Le!==_)&&(n.blendFuncSeparate(Ne[Z],Ne[me],Ne[pe],Ne[Le]),T=Z,b=me,E=pe,_=Le),(Ye.equals(S)===!1||le!==P)&&(n.blendColor(Ye.r,Ye.g,Ye.b,le),S.copy(Ye),P=le),m=R,C=!1}function St(R,ee){R.side===nn?be(n.CULL_FACE):te(n.CULL_FACE);let Z=R.side===mn;ee&&(Z=!Z),lt(Z),R.blending===Qs&&R.transparent===!1?gt(ps):gt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let me=R.stencilWrite;o.setTest(me),me&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),vt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function lt(R){D!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),D=R)}function it(R){R!==Uu?(te(n.CULL_FACE),R!==O&&(R===_c?n.cullFace(n.BACK):R===Fu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),O=R}function Bt(R){R!==W&&(G&&n.lineWidth(R),W=R)}function vt(R,ee,Z){R?(te(n.POLYGON_OFFSET_FILL),(I!==ee||Y!==Z)&&(I=ee,Y=Z,a.getReversed()&&(ee=-ee,Z=-Z),n.polygonOffset(ee,Z))):be(n.POLYGON_OFFSET_FILL)}function Rt(R){R?te(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function Pt(R){R===void 0&&(R=n.TEXTURE0+$-1),Q!==R&&(n.activeTexture(R),Q=R)}function It(R,ee,Z){Z===void 0&&(Q===null?Z=n.TEXTURE0+$-1:Z=Q);let me=z[Z];me===void 0&&(me={type:void 0,texture:void 0},z[Z]=me),(me.type!==R||me.texture!==ee)&&(Q!==Z&&(n.activeTexture(Z),Q=Z),n.bindTexture(R,ee||ae[R]),me.type=R,me.texture=ee)}function N(){let R=z[Q];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Qt(){try{n.compressedTexImage2D(...arguments)}catch(R){ze("WebGLState:",R)}}function ft(){try{n.compressedTexImage3D(...arguments)}catch(R){ze("WebGLState:",R)}}function pt(){try{n.texSubImage2D(...arguments)}catch(R){ze("WebGLState:",R)}}function _e(){try{n.texSubImage3D(...arguments)}catch(R){ze("WebGLState:",R)}}function At(){try{n.compressedTexSubImage2D(...arguments)}catch(R){ze("WebGLState:",R)}}function De(){try{n.compressedTexSubImage3D(...arguments)}catch(R){ze("WebGLState:",R)}}function ke(){try{n.texStorage2D(...arguments)}catch(R){ze("WebGLState:",R)}}function w(){try{n.texStorage3D(...arguments)}catch(R){ze("WebGLState:",R)}}function y(){try{n.texImage2D(...arguments)}catch(R){ze("WebGLState:",R)}}function B(){try{n.texImage3D(...arguments)}catch(R){ze("WebGLState:",R)}}function se(R){return d[R]!==void 0?d[R]:n.getParameter(R)}function j(R,ee){d[R]!==ee&&(n.pixelStorei(R,ee),d[R]=ee)}function oe(R){H.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),H.copy(R))}function de(R){ie.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),ie.copy(R))}function J(R,ee){let Z=c.get(ee);Z===void 0&&(Z=new WeakMap,c.set(ee,Z));let me=Z.get(R);me===void 0&&(me=n.getUniformBlockIndex(ee,R.name),n.uniformBlockBinding(ee,me,me),Z.set(R,me))}function K(R,ee,Z){let he=c.get(ee).get(R);l[he]!==Z&&(n.bindBufferBase(n.UNIFORM_BUFFER,he,Z),l[he]=Z)}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},Q=null,z={},h={},l={},f=new WeakMap,g=[],x=null,p=!1,m=null,M=null,T=null,b=null,A=null,E=null,_=null,S=new Pe(0,0,0),P=0,C=!1,D=null,O=null,W=null,I=null,Y=null,H.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:be,bindFramebuffer:je,drawBuffers:Ee,useProgram:Ve,setBlending:gt,setMaterial:St,setFlipSided:lt,setCullFace:it,setLineWidth:Bt,setPolygonOffset:vt,setScissorTest:Rt,activeTexture:Pt,bindTexture:It,unbindTexture:N,compressedTexImage2D:Qt,compressedTexImage3D:ft,texImage2D:y,texImage3D:B,pixelStorei:j,getParameter:se,updateUBOMapping:J,uniformBlockBinding:K,texStorage2D:ke,texStorage3D:w,texSubImage2D:pt,texSubImage3D:_e,compressedTexSubImage2D:At,compressedTexSubImage3D:De,scissor:oe,viewport:de,reset:ue}}function kx(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap,d=new Set,h,f=new WeakMap,g=new Set,x=new FinalizationRegistry(w=>g.delete(w)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,y){return p?new OffscreenCanvas(w,y):Hs("canvas")}function M(w,y,B){let se=1,j=ke(w);if((j.width>B||j.height>B)&&(se=B/Math.max(j.width,j.height)),se<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let oe=Math.floor(se*j.width),de=Math.floor(se*j.height);h===void 0&&(h=m(oe,de));let J=y?m(oe,de):h;return J.width=oe,J.height=de,J.getContext("2d").drawImage(w,0,0,oe,de),Fe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+oe+"x"+de+")."),J}else return"data"in w&&Fe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function T(w){return w.generateMipmaps}function b(w){n.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(w,y,B,se,j,oe=!1){if(w!==null){if(n[w]!==void 0)return n[w];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let de;se&&(de=e.get("EXT_texture_norm16"),de||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===n.RED&&(B===n.FLOAT&&(J=n.R32F),B===n.HALF_FLOAT&&(J=n.R16F),B===n.UNSIGNED_BYTE&&(J=n.R8),B===n.UNSIGNED_SHORT&&de&&(J=de.R16_EXT),B===n.SHORT&&de&&(J=de.R16_SNORM_EXT)),y===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.R8UI),B===n.UNSIGNED_SHORT&&(J=n.R16UI),B===n.UNSIGNED_INT&&(J=n.R32UI),B===n.BYTE&&(J=n.R8I),B===n.SHORT&&(J=n.R16I),B===n.INT&&(J=n.R32I)),y===n.RG&&(B===n.FLOAT&&(J=n.RG32F),B===n.HALF_FLOAT&&(J=n.RG16F),B===n.UNSIGNED_BYTE&&(J=n.RG8),B===n.UNSIGNED_SHORT&&de&&(J=de.RG16_EXT),B===n.SHORT&&de&&(J=de.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RG8UI),B===n.UNSIGNED_SHORT&&(J=n.RG16UI),B===n.UNSIGNED_INT&&(J=n.RG32UI),B===n.BYTE&&(J=n.RG8I),B===n.SHORT&&(J=n.RG16I),B===n.INT&&(J=n.RG32I)),y===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGB8UI),B===n.UNSIGNED_SHORT&&(J=n.RGB16UI),B===n.UNSIGNED_INT&&(J=n.RGB32UI),B===n.BYTE&&(J=n.RGB8I),B===n.SHORT&&(J=n.RGB16I),B===n.INT&&(J=n.RGB32I)),y===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),B===n.UNSIGNED_INT&&(J=n.RGBA32UI),B===n.BYTE&&(J=n.RGBA8I),B===n.SHORT&&(J=n.RGBA16I),B===n.INT&&(J=n.RGBA32I)),y===n.RGB&&(B===n.UNSIGNED_SHORT&&de&&(J=de.RGB16_EXT),B===n.SHORT&&de&&(J=de.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),y===n.RGBA){let K=oe?Tr:$e.getTransfer(j);B===n.FLOAT&&(J=n.RGBA32F),B===n.HALF_FLOAT&&(J=n.RGBA16F),B===n.UNSIGNED_BYTE&&(J=K===ot?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&de&&(J=de.RGBA16_EXT),B===n.SHORT&&de&&(J=de.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(w,y){let B;return w?y===null||y===Vn||y===_s?B=n.DEPTH24_STENCIL8:y===Hn?B=n.DEPTH32F_STENCIL8:y===tr&&(B=n.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Vn||y===_s?B=n.DEPTH_COMPONENT24:y===Hn?B=n.DEPTH_COMPONENT32F:y===tr&&(B=n.DEPTH_COMPONENT16),B}function S(w,y){return T(w)===!0||w.isFramebufferTexture&&w.minFilter!==Yt&&w.minFilter!==Ct?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function P(w){let y=new WeakRef(w);i.get(w).__ref=y,g.add(y),x.register(w,y,y)}function C(w){let y=i.get(w).__ref;y!==void 0&&(g.delete(y),x.unregister(y))}function D(w){W(w.target)}function O(w){I(w.target)}function W(w){w.removeEventListener("dispose",D),C(w),$(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&d.delete(w)}function I(w){w.removeEventListener("dispose",O),C(w),ne(w)}function Y(){for(let w of g){let y=w.deref();y!==void 0&&(y.isRenderTarget===!0?I(y):W(y))}g.clear(),d.clear()}function $(w){let y=i.get(w);if(y.__webglInit===void 0)return;let B=w.source,se=f.get(B);if(se){let j=se[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&G(w),Object.keys(se).length===0&&f.delete(B)}i.remove(w)}function G(w){let y=i.get(w);n.deleteTexture(y.__webglTexture);let B=w.source,se=f.get(B);delete se[y.__cacheKey],a.memory.textures--}function ne(w){let y=i.get(w);y.__depthDisposeCallback&&y.__depthDisposeCallback();let B=w.depthTexture;if(B&&B.renderTarget===w&&W(B),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let oe=0;oe<y.__webglFramebuffer[j].length;oe++)n.deleteFramebuffer(y.__webglFramebuffer[j][oe]);else n.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)n.deleteFramebuffer(y.__webglFramebuffer[j]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let se=w.textures;for(let j=0,oe=se.length;j<oe;j++){let de=i.get(se[j]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),a.memory.textures--),i.remove(se[j])}i.remove(w)}let X=0;function Q(){X=0}function z(){return X}function re(w){X=w}function fe(){let w=X;return w>=s.maxTextures&&Fe("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,w}function H(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.mipmapsAutoUpdate),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function ie(w,y){let B=i.get(w);if(w.isVideoTexture&&At(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){let se=w.image;if(se===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{St(B,w,y);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+y)}function ce(w,y){let B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){St(B,w,y);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+y)}function ae(w,y){let B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){St(B,w,y);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+y)}function te(w,y){let B=i.get(w);if(w.version>0&&B.__version!==w.version){lt(B,w,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+y)}let be={[Ni]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[eo]:n.MIRRORED_REPEAT},je={[Yt]:n.NEAREST,[sd]:n.NEAREST_MIPMAP_NEAREST,[Xr]:n.NEAREST_MIPMAP_LINEAR,[Ct]:n.LINEAR,[Po]:n.LINEAR_MIPMAP_NEAREST,[zn]:n.LINEAR_MIPMAP_LINEAR},Ee={[ld]:n.NEVER,[kc]:n.ALWAYS,[cd]:n.LESS,[Oc]:n.LEQUAL,[hd]:n.EQUAL,[Bc]:n.GEQUAL,[ud]:n.GREATER,[dd]:n.NOTEQUAL};function Ve(w,y){if(y.type===Hn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ct||y.magFilter===Po||y.magFilter===Xr||y.magFilter===zn||y.minFilter===Ct||y.minFilter===Po||y.minFilter===Xr||y.minFilter===zn)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,be[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,be[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,be[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,je[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,je[y.minFilter]),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Ee[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Yt||y.minFilter!==Xr&&y.minFilter!==zn||y.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Xe(w,y){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",D),P(y));let se=y.source,j=f.get(se);j===void 0&&(j={},f.set(se,j));let oe=H(y);if(oe!==w.__cacheKey){j[oe]===void 0&&(j[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[oe].usedTimes++;let de=j[w.__cacheKey];de!==void 0&&(j[w.__cacheKey].usedTimes--,de.usedTimes===0&&G(y)),w.__cacheKey=oe,w.__webglTexture=j[oe].texture}return B}function Ne(w,y,B){return Math.floor(Math.floor(w/B)/y)}function gt(w,y,B,se){let oe=w.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,B,se,y.data);else{oe.sort((R,ee)=>R.start-ee.start);let de=0;for(let R=1;R<oe.length;R++){let ee=oe[de],Z=oe[R],me=ee.start+ee.count,he=Ne(Z.start,y.width,4),pe=Ne(ee.start,y.width,4);Z.start<=me+1&&he===pe&&Ne(Z.start+Z.count-1,y.width,4)===he?ee.count=Math.max(ee.count,Z.start+Z.count-ee.start):(++de,oe[de]=Z)}oe.length=de+1;let J=t.getParameter(n.UNPACK_ROW_LENGTH),K=t.getParameter(n.UNPACK_SKIP_PIXELS),ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let R=0,ee=oe.length;R<ee;R++){let Z=oe[R],me=Math.floor(Z.start/4),he=Math.ceil(Z.count/4),pe=me%y.width,Le=Math.floor(me/y.width),Ye=he,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Le),t.texSubImage2D(n.TEXTURE_2D,0,pe,Le,Ye,le,B,se,y.data)}w.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,K),t.pixelStorei(n.UNPACK_SKIP_ROWS,ue)}}function St(w,y,B){let se=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(se=n.TEXTURE_3D);let j=Xe(w,y),oe=y.source;t.bindTexture(se,w.__webglTexture,n.TEXTURE0+B);let de=i.get(oe);if(oe.version!==de.__version||j===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let le=$e.getPrimaries($e.workingColorSpace),Ue=y.colorSpace===yi?null:$e.getPrimaries(y.colorSpace),qe=y.colorSpace===yi||le===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let K=M(y.image,!1,s.maxTextureSize);K=De(y,K);let ue=r.convert(y.format,y.colorSpace),R=r.convert(y.type),ee=E(y.internalFormat,ue,R,y.normalized,y.colorSpace,y.isVideoTexture);Ve(se,y);let Z,me=y.mipmaps,he=y.isVideoTexture!==!0,pe=de.__version===void 0||j===!0,Le=oe.dataReady,Ye=S(y,K);if(y.isDepthTexture)ee=_(y.format===xi,y.type),pe&&(he?t.texStorage2D(n.TEXTURE_2D,1,ee,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,ee,K.width,K.height,0,ue,R,null));else if(y.isDataTexture)if(me.length>0){he&&pe&&t.texStorage2D(n.TEXTURE_2D,Ye,ee,me[0].width,me[0].height);for(let le=0,Ue=me.length;le<Ue;le++)Z=me[le],he?Le&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Z.width,Z.height,ue,R,Z.data):t.texImage2D(n.TEXTURE_2D,le,ee,Z.width,Z.height,0,ue,R,Z.data);y.generateMipmaps=!1}else he?(pe&&t.texStorage2D(n.TEXTURE_2D,Ye,ee,K.width,K.height),Le&&gt(y,K,ue,R)):t.texImage2D(n.TEXTURE_2D,0,ee,K.width,K.height,0,ue,R,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){he&&pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,ee,me[0].width,me[0].height,K.depth);for(let le=0,Ue=me.length;le<Ue;le++)if(Z=me[le],y.format!==Wn)if(ue!==null)if(he){if(Le)if(y.layerUpdates.size>0){let qe=$c(Z.width,Z.height,y.format,y.type);for(let ye of y.layerUpdates){let ct=Z.data.subarray(ye*qe/Z.data.BYTES_PER_ELEMENT,(ye+1)*qe/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,ye,Z.width,Z.height,1,ue,ct)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Z.width,Z.height,K.depth,ue,Z.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,ee,Z.width,Z.height,K.depth,0,Z.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Z.width,Z.height,K.depth,ue,R,Z.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,ee,Z.width,Z.height,K.depth,0,ue,R,Z.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{he&&pe&&t.texStorage2D(n.TEXTURE_2D,Ye,ee,me[0].width,me[0].height);for(let le=0,Ue=me.length;le<Ue;le++)Z=me[le],y.format!==Wn?ue!==null?he?Le&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Z.width,Z.height,ue,Z.data):t.compressedTexImage2D(n.TEXTURE_2D,le,ee,Z.width,Z.height,0,Z.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Le&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Z.width,Z.height,ue,R,Z.data):t.texImage2D(n.TEXTURE_2D,le,ee,Z.width,Z.height,0,ue,R,Z.data)}else if(y.isDataArrayTexture)if(he){if(pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,ee,K.width,K.height,K.depth),Le)if(y.layerUpdates.size>0){let le=$c(K.width,K.height,y.format,y.type);for(let Ue of y.layerUpdates){let qe=K.data.subarray(Ue*le/K.data.BYTES_PER_ELEMENT,(Ue+1)*le/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ue,K.width,K.height,1,ue,R,qe)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ue,R,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ee,K.width,K.height,K.depth,0,ue,R,K.data);else if(y.isData3DTexture)he?(pe&&t.texStorage3D(n.TEXTURE_3D,Ye,ee,K.width,K.height,K.depth),Le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ue,R,K.data)):t.texImage3D(n.TEXTURE_3D,0,ee,K.width,K.height,K.depth,0,ue,R,K.data);else if(y.isFramebufferTexture){if(pe)if(he)t.texStorage2D(n.TEXTURE_2D,Ye,ee,K.width,K.height);else{let le=K.width,Ue=K.height;for(let qe=0;qe<Ye;qe++)t.texImage2D(n.TEXTURE_2D,qe,ee,le,Ue,0,ue,R,null),le>>=1,Ue>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),K.parentNode!==le){le.appendChild(K),d.add(y),le.onpaint=Ue=>{let qe=Ue.changedElements;for(let ye of d)qe.includes(ye.image)&&(ye.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{let qe=n.RGBA,ye=n.RGBA,ct=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,qe,ye,ct,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(me.length>0){if(he&&pe){let le=ke(me[0]);t.texStorage2D(n.TEXTURE_2D,Ye,ee,le.width,le.height)}for(let le=0,Ue=me.length;le<Ue;le++)Z=me[le],he?Le&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,ue,R,Z):t.texImage2D(n.TEXTURE_2D,le,ee,ue,R,Z);y.generateMipmaps=!1}else if(he){if(pe){let le=ke(K);t.texStorage2D(n.TEXTURE_2D,Ye,ee,le.width,le.height)}Le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,R,K)}else t.texImage2D(n.TEXTURE_2D,0,ee,ue,R,K);T(y)&&y.mipmapsAutoUpdate===!0&&b(se),de.__version=oe.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function lt(w,y,B){if(y.image.length!==6)return;let se=Xe(w,y),j=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+B);let oe=i.get(j);if(j.version!==oe.__version||se===!0){t.activeTexture(n.TEXTURE0+B);let de=$e.getPrimaries($e.workingColorSpace),J=y.colorSpace===yi?null:$e.getPrimaries(y.colorSpace),K=y.colorSpace===yi||de===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ue=y.isCompressedTexture||y.image[0].isCompressedTexture,R=y.image[0]&&y.image[0].isDataTexture,ee=[];for(let ye=0;ye<6;ye++)!ue&&!R?ee[ye]=M(y.image[ye],!0,s.maxCubemapSize):ee[ye]=R?y.image[ye].image:y.image[ye],ee[ye]=De(y,ee[ye]);let Z=ee[0],me=r.convert(y.format,y.colorSpace),he=r.convert(y.type),pe=E(y.internalFormat,me,he,y.normalized,y.colorSpace),Le=y.isVideoTexture!==!0,Ye=oe.__version===void 0||se===!0,le=j.dataReady,Ue=S(y,Z);Ve(n.TEXTURE_CUBE_MAP,y);let qe;if(y.isDepthTexture){if(pe=_(y.format===xi,y.type),Ye)if(Le)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,pe,Z.width,Z.height);else for(let ye=0;ye<6;ye++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pe,Z.width,Z.height,0,me,he,null)}else if(ue){Le&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,pe,Z.width,Z.height);for(let ye=0;ye<6;ye++){qe=ee[ye].mipmaps;for(let ct=0;ct<qe.length;ct++){let Wt=qe[ct];y.format!==Wn?me!==null?Le?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct,0,0,Wt.width,Wt.height,me,Wt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct,pe,Wt.width,Wt.height,0,Wt.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct,0,0,Wt.width,Wt.height,me,he,Wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct,pe,Wt.width,Wt.height,0,me,he,Wt.data)}}}else{if(qe=y.mipmaps,Le&&Ye){qe.length>0&&Ue++;let ye=ke(ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,pe,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(R){Le?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ee[ye].width,ee[ye].height,me,he,ee[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pe,ee[ye].width,ee[ye].height,0,me,he,ee[ye].data);for(let ct=0;ct<qe.length;ct++){let Ti=qe[ct].image[ye].image;Le?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct+1,0,0,Ti.width,Ti.height,me,he,Ti.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct+1,pe,Ti.width,Ti.height,0,me,he,Ti.data)}}else{Le?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,me,he,ee[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pe,me,he,ee[ye]);for(let ct=0;ct<qe.length;ct++){let Wt=qe[ct];Le?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct+1,0,0,me,he,Wt.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct+1,pe,me,he,Wt.image[ye])}}}T(y)&&y.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),oe.__version=j.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function it(w,y,B,se,j,oe){let de=r.convert(B.format,B.colorSpace),J=r.convert(B.type),K=E(B.internalFormat,de,J,B.normalized,B.colorSpace),ue=i.get(y),R=i.get(B);if(R.__renderTarget=y,!ue.__hasExternalTextures){let ee=Math.max(1,y.width>>oe),Z=Math.max(1,y.height>>oe);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,oe,K,ee,Z,y.depth,0,de,J,null):t.texImage2D(j,oe,K,ee,Z,0,de,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),_e(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,j,R.__webglTexture,0,pt(y)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,j,R.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(w,y,B){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer){let se=y.depthTexture,j=se&&se.isDepthTexture?se.type:null,oe=_(y.stencilBuffer,j),de=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_e(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt(y),oe,y.width,y.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt(y),oe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,oe,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,w)}else{let se=y.textures;for(let j=0;j<se.length;j++){let oe=se[j],de=r.convert(oe.format,oe.colorSpace),J=r.convert(oe.type),K=E(oe.internalFormat,de,J,oe.normalized,oe.colorSpace);_e(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt(y),K,y.width,y.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt(y),K,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,K,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function vt(w,y,B){let se=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(y.depthTexture);j.__renderTarget=y;let oe=se?y.depthTexture.image[0]:y.depthTexture.image;(!j.__webglTexture||oe.width!==y.width||oe.height!==y.height)&&(oe.width=y.width,oe.height=y.height,y.depthTexture.needsUpdate=!0),se?te(y.depthTexture,0):ie(y.depthTexture,0);let de=j.__webglTexture,J=pt(y),K=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,ue=y.depthTexture.format===xi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===mi)_e(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,K,de,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,ue,K,de,0);else if(y.depthTexture.format===xi)_e(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,K,de,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,ue,K,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(w){let y=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){let se=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),se){let j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,se.removeEventListener("dispose",j)};se.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=se}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let se=0;se<6;se++)vt(y.__webglFramebuffer[se],w,se);else w.texture.mipmaps.length>0?vt(y.__webglFramebuffer[0],w,0):vt(y.__webglFramebuffer,w,0);else if(B){y.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[se]),y.__webglDepthbuffer[se]===void 0)y.__webglDepthbuffer[se]=n.createRenderbuffer(),Bt(y.__webglDepthbuffer[se],w,!1);else{let j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,oe)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Bt(y.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pt(w,y,B){let se=i.get(w);y!==void 0&&it(se.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Rt(w)}function It(w){let y=w.texture,B=i.get(w),se=i.get(y);w.addEventListener("dispose",O),P(w);let j=w.textures,oe=w.isWebGLCubeRenderTarget===!0,de=j.length>1;if(de||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=y.version,a.memory.textures++),oe){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let K=0;K<y.mipmaps.length;K++)B.__webglFramebuffer[J][K]=n.createFramebuffer()}else B.__webglFramebuffer[J]=n.createFramebuffer()}else{if(y.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)B.__webglFramebuffer[J]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(de)for(let J=0,K=j.length;J<K;J++){let ue=i.get(j[J]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&_e(w)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<j.length;J++){let K=j[J];B.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let ue=r.convert(K.format,K.colorSpace),R=r.convert(K.type),ee=E(K.internalFormat,ue,R,K.normalized,K.colorSpace,w.isXRRenderTarget===!0),Z=pt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,ee,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,B.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Bt(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)it(B.__webglFramebuffer[J][K],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,K);else it(B.__webglFramebuffer[J],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);T(y)?b(n.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(de){for(let J=0,K=j.length;J<K;J++){let ue=j[J],R=i.get(ue),ee=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ee=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,R.__webglTexture),Ve(ee,ue),it(B.__webglFramebuffer,w,ue,n.COLOR_ATTACHMENT0+J,ee,0),T(ue)&&b(ee)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,se.__webglTexture),Ve(J,y),y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)it(B.__webglFramebuffer[K],w,y,n.COLOR_ATTACHMENT0,J,K);else it(B.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,J,0);T(y)?b(J):y.mipmaps.length>0&&n.texParameteri(J,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&Rt(w)}function N(w){let y=w.textures;for(let B=0,se=y.length;B<se;B++){let j=y[B];if(T(j)&&j.mipmapsAutoUpdate===!0){let oe=A(w),de=i.get(j).__webglTexture;t.bindTexture(oe,de),b(oe),t.unbindTexture()}}}let Qt=[];function ft(w){if(w.samples>0){if(_e(w)===!1){let y=w.textures,B=w.width,se=w.height,j=n.COLOR_BUFFER_BIT,oe=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(w),J=y.length>1;if(J)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);let R=i.get(y[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,R,0)}n.blitFramebuffer(0,0,B,se,0,0,B,se,j,n.NEAREST),l===!0&&(Qt.length=0,Qt.push(n.COLOR_ATTACHMENT0+ue),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Qt.push(oe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);let R=i.get(y[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,R,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function pt(w){return Math.min(s.maxSamples,w.samples)}function _e(w){let y=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function At(w){let y=a.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function De(w,y){let B=w.colorSpace,se=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==wr&&B!==yi&&($e.getTransfer(B)===ot?(se!==Wn||j!==yn)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",B)),y}function ke(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=fe,this.resetTextureUnits=Q,this.getTextureUnits=z,this.setTextureUnits=re,this.setTexture2D=ie,this.setTexture2DArray=ce,this.setTexture3D=ae,this.setTextureCube=te,this.rebindTextures=Pt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=_e,this.dispose=Y}function zx(n,e){function t(i,s=yi){let r,a=$e.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===Lo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Do)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Lc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Pc)return n.BYTE;if(i===Ic)return n.SHORT;if(i===tr)return n.UNSIGNED_SHORT;if(i===Io)return n.INT;if(i===Vn)return n.UNSIGNED_INT;if(i===Hn)return n.FLOAT;if(i===Gn)return n.HALF_FLOAT;if(i===Nc)return n.ALPHA;if(i===Uc)return n.RGB;if(i===Wn)return n.RGBA;if(i===mi)return n.DEPTH_COMPONENT;if(i===xi)return n.DEPTH_STENCIL;if(i===Fc)return n.RED;if(i===No)return n.RED_INTEGER;if(i===Hi)return n.RG;if(i===Uo)return n.RG_INTEGER;if(i===Fo)return n.RGBA_INTEGER;if(i===qr||i===Yr||i===$r||i===Zr)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oo||i===Bo||i===ko||i===zo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vo||i===Ho||i===Go||i===Wo||i===Xo||i===Jr||i===qo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vo||i===Ho)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Go)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wo)return r.COMPRESSED_R11_EAC;if(i===Xo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Jr)return r.COMPRESSED_RG11_EAC;if(i===qo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yo||i===$o||i===Zo||i===Jo||i===Ko||i===jo||i===Qo||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===al)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$o)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ko)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===el)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===il)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===al)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ol||i===ll||i===cl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ol)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hl||i===ul||i===Kr||i===dl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===hl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hx=`
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

}`,ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Dr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new jn({vertexShader:Vx,fragmentShader:Hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new Nr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sh=class extends Jn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new ih,m={},M=t.getContextAttributes(),T=null,b=null,A=[],E=[],_=new We,S=null,P=null,C=new fn;C.viewport=new bt;let D=new fn;D.viewport=new bt;let O=[C,D],W=new To,I=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ie=A[H];return ie===void 0&&(ie=new Ys,A[H]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(H){let ie=A[H];return ie===void 0&&(ie=new Ys,A[H]=ie),ie.getGripSpace()},this.getHand=function(H){let ie=A[H];return ie===void 0&&(ie=new Ys,A[H]=ie),ie.getHandSpace()};function $(H){let ie=E.indexOf(H.inputSource);if(ie===-1)return;let ce=A[ie];ce!==void 0&&(ce.update(H.inputSource,H.frame,c||a),ce.dispatchEvent({type:H.type,data:H.inputSource}))}function G(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ne);for(let H=0;H<A.length;H++){let ie=E[H];ie!==null&&(E[H]=null,A[H].disconnect(ie))}I=null,Y=null,p.reset();for(let H in m)delete m[H];if(e.setRenderTarget(T),f=null,h=null,d=null,s=null,b=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),P!==null){let H=P.camera;H.fov=P.fov,H.zoom=P.zoom,H.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ne),M.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ae=null,te=null;M.depth&&(te=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=M.stencil?xi:mi,ae=M.stencil?_s:Vn);let be={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(be),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new bn(h.textureWidth,h.textureHeight,{format:Wn,type:yn,depthTexture:new _i(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ce={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new bn(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),fe.setContext(s),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ne(H){for(let ie=0;ie<H.removed.length;ie++){let ce=H.removed[ie],ae=E.indexOf(ce);ae>=0&&(E[ae]=null,A[ae].disconnect(ce))}for(let ie=0;ie<H.added.length;ie++){let ce=H.added[ie],ae=E.indexOf(ce);if(ae===-1){for(let be=0;be<A.length;be++)if(be>=E.length){E.push(ce),ae=be;break}else if(E[be]===null){E[be]=ce,ae=be;break}if(ae===-1)break}let te=A[ae];te&&te.connect(ce)}}function X(H,ie){ie===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ie.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let ie=H.near,ce=H.far;p.texture!==null&&(p.depthNear>0&&(ie=p.depthNear),p.depthFar>0&&(ce=p.depthFar)),W.near=D.near=C.near=ie,W.far=D.far=C.far=ce,(I!==W.near||Y!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),I=W.near,Y=W.far),W.layers.mask=H.layers.mask|6,C.layers.mask=W.layers.mask&-5,D.layers.mask=W.layers.mask&-3;let ae=H.parent,te=W.cameras;X(W,ae);for(let be=0;be<te.length;be++)X(te[be],ae);W.projectionMatrix.copy(C.projectionMatrix),W.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&H.isPerspectiveCamera&&(P={camera:H,fov:H.fov,zoom:H.zoom}),Q(H,W,ae)};function Q(H,ie,ce){ce===null?H.matrix.copy(ie.matrixWorld):(H.matrix.copy(ce.matrixWorld),H.matrix.invert(),H.matrix.multiply(ie.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ie.projectionMatrix),H.projectionMatrixInverse.copy(ie.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ws*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(W)},this.getCameraTexture=function(H){return m[H]};let z=null;function re(H,ie){if(u=ie.getViewerPose(c||a),g=ie,u!==null){let ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let ae=!1;ce.length!==W.cameras.length&&(W.cameras.length=0,ae=!0);for(let Ee=0;Ee<ce.length;Ee++){let Ve=ce[Ee],Xe=null;if(f!==null)Xe=f.getViewport(Ve);else{let gt=d.getViewSubImage(h,Ve);Xe=gt.viewport,Ee===0&&(e.setRenderTargetTextures(b,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(b))}let Ne=O[Ee];Ne===void 0&&(Ne=new fn,Ne.layers.enable(Ee),Ne.viewport=new bt,O[Ee]=Ne),Ne.matrix.fromArray(Ve.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Ve.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ee===0&&(W.matrix.copy(Ne.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),ae===!0&&W.cameras.push(Ne)}let te=s.enabledFeatures;if(te&&te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Ee=d.getDepthInformation(ce[0]);Ee&&Ee.isValid&&Ee.texture&&p.init(Ee,s.renderState)}if(te&&te.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let Ee=0;Ee<ce.length;Ee++){let Ve=ce[Ee].camera;if(Ve){let Xe=m[Ve];Xe||(Xe=new Dr,m[Ve]=Xe);let Ne=d.getCameraImage(Ve);Xe.sourceTexture=Ne}}}}for(let ce=0;ce<A.length;ce++){let ae=E[ce],te=A[ce];ae!==null&&te!==void 0&&te.update(ae,ie,c||a)}z&&z(H,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}let fe=new Wd;fe.setAnimationLoop(re),this.setAnimationLoop=function(H){z=H},this.dispose=function(){}}},Gx=new at,ef=new Be;ef.set(-1,0,0,0,1,0,0,0,1);function Wx(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Xc(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,T,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===mn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===mn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=e.get(m),T=M.envMap,b=M.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ef),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=T*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Xx(n,e,t,i){let s={},r={};function a(M,T){let b=T.program;i.uniformBlockBinding(M,b,s[M.id])}function o(M,T){let b=s[M.id];b===void 0&&(g(M),b=l(M),s[M.id]=b,M.addEventListener("dispose",p));let A=T.program;i.updateUBOMapping(M,A);let E=e.render.frame;r[M.id]!==E&&(c(M),r[M.id]=E)}function l(M){let T=n.createBuffer(),b=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),T}function c(M){let T=s[M.id],b=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let E=0,_=b.length;E<_;E++){let S=b[E];if(Array.isArray(S))for(let P=0,C=S.length;P<C;P++)u(S[P],E,P,A);else u(S,E,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(M,T,b,A){if(h(M,T,b,A)===!0){let E=M.__offset,_=M.value;if(Array.isArray(_)){let S=0;for(let P=0;P<_.length;P++){let C=_[P],D=x(C,!0);d(C,M.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,M.__data)}}function d(M,T,b){typeof M=="number"||typeof M=="boolean"?T[b]=M:M.isMatrix3?(T[b]=M.elements[0],T[b+1]=M.elements[1],T[b+2]=M.elements[2],T[b+3]=0,T[b+4]=M.elements[3],T[b+5]=M.elements[4],T[b+6]=M.elements[5],T[b+7]=0,T[b+8]=M.elements[6],T[b+9]=M.elements[7],T[b+10]=M.elements[8],T[b+11]=0):ArrayBuffer.isView(M)?T.set(M.subarray(0,T.length-b),b):M.toArray(T,b)}function h(M,T,b,A){let E=M.value,_=T+"_"+b;if(Array.isArray(E)){A[_]===void 0&&(A[_]=[]);let S=A[_],P=!1;for(let C=0;C<E.length;C++)f(E[C],S,C)===!0&&(P=!0);return P}return f(E,A,_)}function f(M,T,b){if(T[b]===void 0)return typeof M=="number"||typeof M=="boolean"?T[b]=M:ArrayBuffer.isView(M)?T[b]=M.slice():T[b]=M.clone(),!0;{let A=T[b];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return T[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function g(M){let T=M.uniforms,b=0,A=16;for(let _=0,S=T.length;_<S;_++){let P=Array.isArray(T[_])?T[_]:[T[_]];for(let C=0,D=P.length;C<D;C++){let O=P[C],W=Array.isArray(O.value)?O.value:[O.value],I=Array.isArray(T[_])||Array.isArray(O.value),Y=b;for(let G=0,ne=W.length;G<ne;G++){let X=W[G],Q=x(X,I),z=b%A,re=z%Q.boundary,fe=z+re;b+=re,fe!==0&&A-fe<Q.storage&&(b+=A-fe),G===0&&(Y=b),b+=Q.storage}let $=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new $((b-Y)/Float32Array.BYTES_PER_ELEMENT),O.__offset=Y}}let E=b%A;return E>0&&(b+=A-E),M.__size=b,M.__cache={},this}function x(M,T){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",M),T===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(M){let T=M.target;T.removeEventListener("dispose",p),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(let M in s)n.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:m}}var qx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function Yx(){return ni===null&&(ni=new ro(qx,16,16,Hi,Gn),ni.name="DFG_LUT",ni.minFilter=Ct,ni.magFilter=Ct,ni.wrapS=Zn,ni.wrapT=Zn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var xl=class{constructor(e={}){let{canvas:t=pd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=yn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let x=f,p=new Set([Fo,Uo,No]),m=new Set([yn,Vn,tr,_s,Lo,Do]),M=new Uint32Array(4),T=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},A=null,E=null,_=[],S=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,O=null,W=null,I=null,Y=null;this._outputColorSpace=ut;let $=0,G=0,ne=null,X=-1,Q=null,z=new bt,re=new bt,fe=null,H=new Pe(0),ie=0,ce=t.width,ae=t.height,te=1,be=null,je=null,Ee=new bt(0,0,ce,ae),Ve=new bt(0,0,ce,ae),Xe=!1,Ne=new Fi,gt=new ao,St=!1,lt=!1,it=new at,Bt=new F,vt=new bt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pt=!1;function It(){return ne===null?te:1}let N=i;function Qt(v,L){return t.getContext(v,L)}let ft,pt,_e,At,De,ke,w,y,B,se,j,oe,de,J,K,ue,R,ee,Z,me,he,pe,Le;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",ye,!1),N===null){let L="webgl2";if(N=Qt(L,v),N===null)throw Qt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(v){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),ze("WebGLRenderer: "+v.message),v}function Ye(){ft=new s_(N),ft.init(),he=new zx(N,ft),pt=new Y0(N,ft,e,he),_e=new Bx(N,ft),pt.reversedDepthBuffer&&h&&_e.buffers.depth.setReversed(!0),W=N.createFramebuffer(),I=N.createFramebuffer(),Y=N.createFramebuffer(),At=new o_(N),De=new Ex,ke=new kx(N,ft,_e,De,pt,he,At),w=new i_(C),y=new cm(N),pe=new X0(N,y),B=new r_(N,y,At,pe),se=new c_(N,B,y,pe,At),ee=new l_(N,pt,ke),K=new $0(De),j=new bx(C,w,ft,pt,pe,K),oe=new Wx(C,De),de=new Tx,J=new Lx(ft),R=new W0(C,w,_e,se,g,l),ue=new Ox(C,se,pt),Le=new Xx(N,At,pt,_e),Z=new q0(N,ft,At),me=new a_(N,ft,At),At.programs=j.programs,C.capabilities=pt,C.extensions=ft,C.properties=De,C.renderLists=de,C.shadowMap=ue,C.state=_e,C.info=At}x!==yn&&(P=new u_(x,t.width,t.height,o,s,r));let le=new sh(C,N);this.xr=le,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=ft.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ft.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(v){v!==void 0&&(te=v,this.setSize(ce,ae,!1))},this.getSize=function(v){return v.set(ce,ae)},this.setSize=function(v,L,q=!0){if(le.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=v,ae=L,t.width=Math.floor(v*te),t.height=Math.floor(L*te),q===!0&&(t.style.width=v+"px",t.style.height=L+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(ce*te,ae*te).floor()},this.setDrawingBufferSize=function(v,L,q){ce=v,ae=L,te=q,t.width=Math.floor(v*q),t.height=Math.floor(L*q),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(x===yn){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(z)},this.getViewport=function(v){return v.copy(Ee)},this.setViewport=function(v,L,q,k){v.isVector4?Ee.set(v.x,v.y,v.z,v.w):Ee.set(v,L,q,k),_e.viewport(z.copy(Ee).multiplyScalar(It()).round())},this.getScissor=function(v){return v.copy(Ve)},this.setScissor=function(v,L,q,k){v.isVector4?Ve.set(v.x,v.y,v.z,v.w):Ve.set(v,L,q,k),_e.scissor(re.copy(Ve).multiplyScalar(It()).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(v){_e.setScissorTest(Xe=v)},this.setOpaqueSort=function(v){be=v},this.setTransparentSort=function(v){je=v},this.getClearColor=function(v){return v.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,q=!0){let k=0;if(v){let V=!1;if(ne!==null){let xe=ne.texture.format;V=p.has(xe)}if(V){let xe=ne.texture.type,Te=m.has(xe),ge=R.getClearColor(),Se=R.getClearAlpha(),Re=ge.r,Ge=ge.g,et=ge.b;Te?(M[0]=Re,M[1]=Ge,M[2]=et,M[3]=Se,N.clearBufferuiv(N.COLOR,0,M)):(T[0]=Re,T[1]=Ge,T[2]=et,T[3]=Se,N.clearBufferiv(N.COLOR,0,T))}else k|=N.COLOR_BUFFER_BIT}L&&(k|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),O=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),R.dispose(),de.dispose(),J.dispose(),ke.dispose(),De.dispose(),w.dispose(),se.dispose(),B.dispose(),pe.dispose(),Le.dispose(),j.dispose(),le.dispose(),le.removeEventListener("sessionstart",qh),le.removeEventListener("sessionend",Yh),ts.stop()};function Ue(v){v.preventDefault(),Vc("WebGLRenderer: Context Lost."),D=!0}function qe(){Vc("WebGLRenderer: Context Restored."),D=!1;let v=At.autoReset,L=ue.enabled,q=ue.autoUpdate,k=ue.needsUpdate,V=ue.type;Ye(),At.autoReset=v,ue.enabled=L,ue.autoUpdate=q,ue.needsUpdate=k,ue.type=V}function ye(v){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ct(v){let L=v.target;L.removeEventListener("dispose",ct),Wt(L)}function Wt(v){Ti(v),De.remove(v)}function Ti(v){let L=De.get(v).programs;L!==void 0&&(L.forEach(function(q){j.releaseProgram(q)}),v.isShaderMaterial&&j.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,q,k,V,xe){L===null&&(L=Rt);let Te=V.isMesh&&V.matrixWorld.determinantAffine()<0,ge=hp(v,L,q,k,V);_e.setMaterial(k,Te);let Se=q.index,Re=1;if(k.wireframe===!0){if(Se=B.getWireframeAttribute(q),Se===void 0)return;Re=2}let Ge=q.drawRange,et=q.attributes.position,Ae=Ge.start*Re,tt=(Ge.start+Ge.count)*Re;xe!==null&&(Ae=Math.max(Ae,xe.start*Re),tt=Math.min(tt,(xe.start+xe.count)*Re)),Se!==null?(Ae=Math.max(Ae,0),tt=Math.min(tt,Se.count)):et!=null&&(Ae=Math.max(Ae,0),tt=Math.min(tt,et.count));let Nt=tt-Ae;if(Nt<0||Nt===1/0)return;pe.setup(V,k,ge,q,Se);let _t,mt=Z;if(Se!==null&&(_t=y.get(Se),mt=me,mt.setIndex(_t)),V.isMesh)k.wireframe===!0?(_e.setLineWidth(k.wireframeLinewidth*It()),mt.setMode(N.LINES)):mt.setMode(N.TRIANGLES);else if(V.isLine){let an=k.linewidth;an===void 0&&(an=1),_e.setLineWidth(an*It()),V.isLineSegments?mt.setMode(N.LINES):V.isLineLoop?mt.setMode(N.LINE_LOOP):mt.setMode(N.LINE_STRIP)}else V.isPoints?mt.setMode(N.POINTS):V.isSprite&&mt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let an=V._multiDrawStarts,Ce=V._multiDrawCounts,dn=V._multiDrawCount,rt=Se?y.get(Se).bytesPerElement:1,ns=De.get(k).currentProgram.getUniforms();for(let on=0;on<dn;on++)ns.setValue(N,"_gl_DrawID",on),mt.render(an[on]/rt,Ce[on])}else if(V.isInstancedMesh)mt.renderInstances(Ae,Nt,V.count);else if(q.isInstancedBufferGeometry){let an=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ce=Math.min(q.instanceCount,an);mt.renderInstances(Ae,Nt,Ce)}else mt.render(Ae,Nt)};function Xh(v,L,q,k){O!==null&&v.isNodeMaterial&&O.setObject(k,v),St===!0&&K.setState(v,q,!1),v.transparent===!0&&v.side===nn&&v.forceSinglePass===!1?(v.side=mn,v.needsUpdate=!0,gr(v,L,k),v.side=ei,v.needsUpdate=!0,gr(v,L,k),v.side=nn):gr(v,L,k)}this.compile=function(v,L,q=null){q===null&&(q=v),O!==null&&O.renderStart(v,L,q),E=J.get(q),E.init(L),S.push(E),q.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),v!==q&&v.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),lt=this.localClippingEnabled,St=K.init(this.clippingPlanes,lt),St===!0&&K.setGlobalState(this.clippingPlanes,L),O!==null&&ue.render(E.state.shadowsArray,q,L);let k=new Set;return v.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let xe=V.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){let ge=xe[Te];Xh(ge,q,L,V),k.add(ge)}else Xh(xe,q,L,V),k.add(xe)}),E=S.pop(),O!==null&&O.renderEnd(),k},this.compileAsync=function(v,L,q=null){let k=this.compile(v,L,q);return new Promise(V=>{function xe(){if(k.forEach(function(Te){let Se=De.get(Te).currentProgram;(Se===void 0||Se.isReady())&&k.delete(Te)}),k.size===0){V(v);return}setTimeout(xe,10)}ft.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Bl=null;function lp(v){Bl&&Bl(v)}function qh(){ts.stop()}function Yh(){ts.start()}let ts=new Wd;ts.setAnimationLoop(lp),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(v){Bl=v,le.setAnimationLoop(v),v===null?ts.stop():ts.start()},le.addEventListener("sessionstart",qh),le.addEventListener("sessionend",Yh),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(v,L);let q=le.enabled===!0&&le.isPresenting===!0,k=P!==null&&(ne===null||q)&&P.begin(C,ne);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(L),L=le.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,L,ne),E=J.get(v,S.length),E.init(L),E.state.textureUnits=ke.getTextureUnits(),S.push(E),it.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?gt.setFromArrayCamera(L):Ne.setFromProjectionMatrix(it,Tn,L.reversedDepth),lt=this.localClippingEnabled,St=K.init(this.clippingPlanes,lt),A=de.get(v,_.length),A.init(),_.push(A),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Te=C.xr.getDepthSensingMesh();Te!==null&&kl(Te,L,-1/0,C.sortObjects)}kl(v,L,0,C.sortObjects),A.finish(),O!==null&&O.updateLights(E.state.lightsArray),C.sortObjects===!0&&A.sort(be,je),Pt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Pt&&R.addToRenderList(A,v),this.info.autoReset===!0&&this.info.reset(),St===!0&&K.beginShadows();let V=E.state.shadowsArray;if(ue.render(V,v,L),St===!0&&K.endShadows(),(k&&P.hasRenderPass())===!1){let Te=A.opaque,ge=A.transmissive;if(E.setupLights(),L.isArrayCamera){let Se=L.cameras;if(ge.length>0)for(let Re=0,Ge=Se.length;Re<Ge;Re++){let et=Se[Re];Zh(Te,ge,v,et)}Pt&&R.render(v);for(let Re=0,Ge=Se.length;Re<Ge;Re++){let et=Se[Re];$h(A,v,et,et.viewport)}}else ge.length>0&&Zh(Te,ge,v,L),Pt&&R.render(v),$h(A,v,L)}ne!==null&&G===0&&(ke.updateMultisampleRenderTarget(ne),ke.updateRenderTargetMipmap(ne)),k&&P.end(C),v.isScene===!0&&v.onAfterRender(C,v,L),pe.resetDefaultState(),X=-1,Q=null,S.pop(),S.length>0?(E=S[S.length-1],ke.setTextureUnits(E.state.textureUnits),St===!0&&K.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,O!==null&&O.renderEnd()};function kl(v,L,q,k){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){let Te=L.isArrayCamera?gt:Ne;if(!v.frustumCulled||v.intersectsFrustum(Te)){k&&vt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(it);let ge=se.update(v),Se=v.material;Se.visible&&A.push(v,ge,Se,q,vt.z,null,L)}}else if(v.isMesh||v.isLine||v.isPoints){let Te=L.isArrayCamera?gt:Ne;if(!v.frustumCulled||v.intersectsFrustum(Te)){let ge=se.update(v),Se=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),vt.copy(v.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),vt.copy(ge.boundingSphere.center)),vt.applyMatrix4(v.matrixWorld).applyMatrix4(it)),Array.isArray(Se)){let Re=ge.groups;for(let Ge=0,et=Re.length;Ge<et;Ge++){let Ae=Re[Ge],tt=Se[Ae.materialIndex];tt&&tt.visible&&A.push(v,ge,tt,q,vt.z,Ae,L)}}else Se.visible&&A.push(v,ge,Se,q,vt.z,null,L)}}}let xe=v.children;for(let Te=0,ge=xe.length;Te<ge;Te++)kl(xe[Te],L,q,k)}function $h(v,L,q,k){let{opaque:V,transmissive:xe,transparent:Te}=v;E.setupLightsView(q),St===!0&&K.setGlobalState(C.clippingPlanes,q),k&&_e.viewport(z.copy(k)),V.length>0&&ya(V,L,q),xe.length>0&&ya(xe,L,q),Te.length>0&&ya(Te,L,q),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Zh(v,L,q,k){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let Ae=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new bn(1,1,{generateMipmaps:!0,type:Ae?Gn:yn,minFilter:zn,samples:Math.max(4,pt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}let xe=E.state.transmissionRenderTarget[k.id],Te=k.viewport||z;xe.setSize(Te.z*C.transmissionResolutionScale,Te.w*C.transmissionResolutionScale);let ge=C.getRenderTarget(),Se=C.getActiveCubeFace(),Re=C.getActiveMipmapLevel();C.setRenderTarget(xe),C.getClearColor(H),ie=C.getClearAlpha(),ie<1&&C.setClearColor(16777215,.5),C.clear(),Pt&&R.render(q);let Ge=C.toneMapping;C.toneMapping=ti;let et=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),St===!0&&K.setGlobalState(C.clippingPlanes,k),ya(v,q,k),ke.updateMultisampleRenderTarget(xe),ke.updateRenderTargetMipmap(xe),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let tt=0,Nt=L.length;tt<Nt;tt++){let _t=L[tt],{object:mt,geometry:an,material:Ce,group:dn}=_t;if(Ce.side===nn&&mt.layers.test(k.layers)){let rt=Ce.side;Ce.side=mn,Ce.needsUpdate=!0,Jh(mt,q,k,an,Ce,dn),Ce.side=rt,Ce.needsUpdate=!0,Ae=!0}}Ae===!0&&(ke.updateMultisampleRenderTarget(xe),ke.updateRenderTargetMipmap(xe))}C.setRenderTarget(ge,Se,Re),C.setClearColor(H,ie),et!==void 0&&(k.viewport=et),C.toneMapping=Ge}function ya(v,L,q){let k=L.isScene===!0?L.overrideMaterial:null;for(let V=0,xe=v.length;V<xe;V++){let Te=v[V],{object:ge,geometry:Se,group:Re}=Te,Ge=Te.material;Ge.allowOverride===!0&&k!==null&&(Ge=k),ge.layers.test(q.layers)&&Jh(ge,L,q,Se,Ge,Re)}}function Jh(v,L,q,k,V,xe){O!==null&&V.isNodeMaterial&&O.setObject(v,V),v.onBeforeRender(C,L,q,k,V,xe),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),V.onBeforeRender(C,L,q,k,v,xe),V.transparent===!0&&V.side===nn&&V.forceSinglePass===!1?(V.side=mn,V.needsUpdate=!0,C.renderBufferDirect(q,L,k,V,v,xe),V.side=ei,V.needsUpdate=!0,C.renderBufferDirect(q,L,k,V,v,xe),V.side=nn):C.renderBufferDirect(q,L,k,V,v,xe),v.onAfterRender(C,L,q,k,V,xe)}function Kh(v){let L=0;for(let q of v)q.texture!==null&&L++;return L}function gr(v,L,q){L.isScene!==!0&&(L=Rt);let k=De.get(v),V=E.state.lights,xe=E.state.shadowsArray,Te=V.state.version,ge=j.getParameters(v,V.state,xe,L,q,E.state.lightProbeGridArray),Se=j.getProgramCacheKey(ge),Re=k.programs;k.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,k.fog=L.fog;let Ge=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;k.envMap=w.get(v.envMap||k.environment,Ge),k.envMapRotation=k.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Re===void 0&&(v.addEventListener("dispose",ct),Re=new Map,k.programs=Re,k.programVariants=new Map);let et=Re.get(Se);if(et!==void 0){if(k.currentProgram===et&&k.lightsStateVersion===Te)return Qh(v,ge),et}else ge.uniforms=j.getUniforms(v),O!==null&&v.isNodeMaterial&&O.build(v,q,ge),v.onBeforeCompile(ge,C),et=j.acquireProgram(ge,Se),Re.set(Se,et),k.uniforms=ge.uniforms;let Ae=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ae.clippingPlanes=K.uniform),Qh(v,ge),k.needsLights=dp(v),k.lightsStateVersion=Te,k.needsLights&&(Ae.ambientLightColor.value=V.state.ambient,Ae.lightProbe.value=V.state.probe,Ae.sunLights.value=V.state.sun,Ae.sunLightShadows.value=V.state.sunShadow,Ae.directionalLights.value=V.state.directional,Ae.directionalLightShadows.value=V.state.directionalShadow,Ae.spotLights.value=V.state.spot,Ae.spotLightShadows.value=V.state.spotShadow,Ae.rectAreaLights.value=V.state.rectArea,Ae.ltc_1.value=V.state.rectAreaLTC1,Ae.ltc_2.value=V.state.rectAreaLTC2,Ae.pointLights.value=V.state.point,Ae.pointLightShadows.value=V.state.pointShadow,Ae.hemisphereLights.value=V.state.hemi,Ae.sunShadowMatrix.value=V.state.sunShadowMatrix,Ae.sunShadowCascade.value=V.state.sunShadowCascade,Ae.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ae.spotLightMatrix.value=V.state.spotLightMatrix,Ae.spotLightMap.value=V.state.spotLightMap,Ae.pointShadowMatrix.value=V.state.pointShadowMatrix),k.numLightProbeGrids=Kh(E.state.lightProbeGridArray),k.currentProgram=et,k.uniformsList=null,et}function cp(v,L,q,k,V){let xe=De.get(v),Te=xe.currentProgram.id+","+k+","+V,ge=xe.programVariants.get(Te);return ge===void 0?(ge=gr(v,L,q),xe.programVariants.set(Te,ge)):(xe.currentProgram=ge,xe.uniformsList=null,xe.outputColorSpace=k,xe.toneMapping=V),ge}function jh(v){if(v.uniformsList===null){let L=v.currentProgram.getUniforms();v.uniformsList=sr.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Qh(v,L){let q=De.get(v);q.outputColorSpace=L.outputColorSpace,q.batching=L.batching,q.batchingColor=L.batchingColor,q.instancing=L.instancing,q.instancingColor=L.instancingColor,q.instancingMorph=L.instancingMorph,q.skinning=L.skinning,q.morphTargets=L.morphTargets,q.morphNormals=L.morphNormals,q.morphColors=L.morphColors,q.morphTargetsCount=L.morphTargetsCount,q.numClippingPlanes=L.numClippingPlanes,q.numIntersection=L.numClipIntersection,q.vertexAlphas=L.vertexAlphas,q.vertexTangents=L.vertexTangents,q.toneMapping=L.toneMapping}function hp(v,L,q,k,V){L.isScene!==!0&&(L=Rt),ke.resetTextureUnits();let xe=L.fog,Te=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?L.environment:null,ge=ne===null?C.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:$e.workingColorSpace,Se=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Re=w.get(k.envMap||Te,Se),Ge=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,et=!!q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ae=!!q.morphAttributes.position,tt=!!q.morphAttributes.normal,Nt=!!q.morphAttributes.color,_t=ti;k.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(_t=C.toneMapping);let mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,an=mt!==void 0?mt.length:0,Ce=De.get(k),dn=E.state.lights;if(St===!0&&(lt===!0||v!==Q)){let Et=v===Q&&k.id===X;K.setState(k,v,Et)}let rt=!1,ns=!1;k.version===Ce.__version?Ce.needsLights&&Ce.lightsStateVersion!==dn.state.version||V.isBatchedMesh&&Ce.batching===!1||!V.isBatchedMesh&&Ce.batching===!0||V.isBatchedMesh&&Ce.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ce.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ce.instancing===!1||!V.isInstancedMesh&&Ce.instancing===!0||V.isSkinnedMesh&&Ce.skinning===!1||!V.isSkinnedMesh&&Ce.skinning===!0||V.isInstancedMesh&&Ce.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ce.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ce.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ce.instancingMorph===!1&&V.morphTexture!==null||Ce.envMap!==Re||k.fog===!0&&Ce.fog!==xe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==K.numPlanes||Ce.numIntersection!==K.numIntersection)||Ce.vertexAlphas!==Ge||Ce.vertexTangents!==et||Ce.morphTargets!==Ae||Ce.morphNormals!==tt||Ce.morphColors!==Nt||Ce.morphTargetsCount!==an||Ce.numLightProbeGrids!==Kh(E.state.lightProbeGridArray)?rt=!0:(Ce.outputColorSpace!==ge||Ce.toneMapping!==_t)&&(ns=!0):(rt=!0,Ce.__version=k.version);let on=Ce.currentProgram;(rt===!0||ns===!0)&&(on=ns===!0?cp(k,L,V,ge,_t):gr(k,L,V),O&&k.isNodeMaterial&&O.onUpdateProgram(k,on,Ce));let va=!1,Ai=!1,is=!1,nt=on.getUniforms(),en=Ce.uniforms;if(_e.useProgram(on.program)&&(va=!0,Ai=!0,is=!0),k.id!==X&&(X=k.id,Ai=!0),va||Q!==v){_e.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),nt.setValue(N,"projectionMatrix",v.projectionMatrix),nt.setValue(N,"viewMatrix",v.matrixWorldInverse);let Xt=nt.map.cameraPosition;Xt!==void 0&&Xt.setValue(N,Bt.setFromMatrixPosition(v.matrixWorld)),pt.logarithmicDepthBuffer&&nt.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&nt.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Ai=!0,is=!0)}if(Ce.needsLights&&(dn.state.sunShadowMap.length>0&&nt.setValue(N,"sunShadowMap",dn.state.sunShadowMap,ke),dn.state.directionalShadowMap.length>0&&nt.setValue(N,"directionalShadowMap",dn.state.directionalShadowMap,ke),dn.state.spotShadowMap.length>0&&nt.setValue(N,"spotShadowMap",dn.state.spotShadowMap,ke),dn.state.pointShadowMap.length>0&&nt.setValue(N,"pointShadowMap",dn.state.pointShadowMap,ke)),V.isSkinnedMesh){nt.setOptional(N,V,"bindMatrix"),nt.setOptional(N,V,"bindMatrixInverse");let Et=V.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),nt.setValue(N,"boneTexture",Et.boneTexture,ke))}V.isBatchedMesh&&(nt.setOptional(N,V,"batchingTexture"),nt.setValue(N,"batchingTexture",V._matricesTexture,ke),nt.setOptional(N,V,"batchingIdTexture"),nt.setValue(N,"batchingIdTexture",V._indirectTexture,ke),nt.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&nt.setValue(N,"batchingColorTexture",V._colorsTexture,ke));let Nn=q.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&ee.update(V,q,on),(Ai||Ce.receiveShadow!==V.receiveShadow)&&(Ce.receiveShadow=V.receiveShadow,nt.setValue(N,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&L.environment!==null&&(en.envMapIntensity.value=L.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=Yx()),Ai){if(nt.setValue(N,"toneMappingExposure",C.toneMappingExposure),Ce.needsLights&&up(en,is),xe&&k.fog===!0&&oe.refreshFogUniforms(en,xe),oe.refreshMaterialUniforms(en,k,te,ae,E.state.transmissionRenderTarget[v.id]),Ce.needsLights&&Ce.numLightProbeGrids>0){let Et=b,Xt=0;for(let oi of E.state.lightProbeGridArray)oi.texture!==null&&(Et.textures[Xt]=oi.texture,Et.min[Xt]=oi.boundingBox.min,Et.max[Xt]=oi.boundingBox.max,Et.resolution[Xt]=oi.resolution,Xt++);for(let oi in Et)Et[oi].length=Xt;en.probesSH.value=Et.textures,en.probesMin.value=Et.min,en.probesMax.value=Et.max,en.probesResolution.value=Et.resolution}sr.upload(N,jh(Ce),en,ke)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(sr.upload(N,jh(Ce),en,ke),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&nt.setValue(N,"center",V.center),nt.setValue(N,"modelViewMatrix",V.modelViewMatrix),nt.setValue(N,"normalMatrix",V.normalMatrix),nt.setValue(N,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let Et=k.uniformsGroups;for(let Xt=0,oi=Et.length;Xt<oi;Xt++){let tu=Et[Xt];Le.update(tu,on),Le.bind(tu,on)}}return on}function up(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function dp(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(v,L,q){let k=De.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),De.get(v.texture).__webglTexture=L,De.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){let q=De.get(v);q.__webglFramebuffer=L,q.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,q=0){ne=v,$=L,G=q;let k=null,V=!1,xe=!1;if(v){let ge=De.get(v);if(ge.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(N.FRAMEBUFFER,ge.__webglFramebuffer),z.copy(v.viewport),re.copy(v.scissor),fe=v.scissorTest,_e.viewport(z),_e.scissor(re),_e.setScissorTest(fe),X=-1;return}else if(ge.__webglFramebuffer===void 0)ke.setupRenderTarget(v);else if(ge.__hasExternalTextures)ke.rebindTextures(v,De.get(v.texture).__webglTexture,De.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ge=v.depthTexture;if(ge.__boundDepthTexture!==Ge){if(Ge!==null&&De.has(Ge)&&(v.width!==Ge.image.width||v.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(v)}}let Se=v.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(xe=!0);let Re=De.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Re[L])?k=Re[L][q]:k=Re[L],V=!0):v.samples>0&&ke.useMultisampledRTT(v)===!1?k=De.get(v).__webglMultisampledFramebuffer:Array.isArray(Re)?k=Re[q]:k=Re,z.copy(v.viewport),re.copy(v.scissor),fe=v.scissorTest}else z.copy(Ee).multiplyScalar(te).floor(),re.copy(Ve).multiplyScalar(te).floor(),fe=Xe;if(q!==0&&(k=W),_e.bindFramebuffer(N.FRAMEBUFFER,k)&&_e.drawBuffers(v,k),_e.viewport(z),_e.scissor(re),_e.setScissorTest(fe),V){let ge=De.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,ge.__webglTexture,q)}else if(xe){let ge=L;for(let Se=0;Se<v.textures.length;Se++){let Re=De.get(v.textures[Se]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Se,Re.__webglTexture,q,ge)}}else if(v!==null&&q!==0){let ge=De.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ge.__webglTexture,q)}X=-1};function eu(v){let L=De.get(v);return(L.__readFormat!==v.format||L.__readType!==v.type)&&(L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=pt.textureFormatReadable(v.format),L.__typeReadable=pt.textureTypeReadable(v.type)),L}this.readRenderTargetPixels=function(v,L,q,k,V,xe,Te,ge=0){if(!(v&&v.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=De.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Te!==void 0&&(Se=Se[Te],Array.isArray(Se)&&(Se=Se[0])),Se){_e.bindFramebuffer(N.FRAMEBUFFER,Se);try{let Re=v.textures[ge],Ge=Re.format,et=Re.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge);let Ae=eu(Re);if(Ae.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-k&&q>=0&&q<=v.height-V&&N.readPixels(L,q,k,V,he.convert(Ge),he.convert(et),xe)}finally{let Re=ne!==null?De.get(ne).__webglFramebuffer:null;_e.bindFramebuffer(N.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(v,L,q,k,V,xe,Te,ge=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=De.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Te!==void 0&&(Se=Se[Te],Array.isArray(Se)&&(Se=Se[0])),Se)if(L>=0&&L<=v.width-k&&q>=0&&q<=v.height-V){_e.bindFramebuffer(N.FRAMEBUFFER,Se);let Re=v.textures[ge],Ge=Re.format,et=Re.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge);let Ae=eu(Re);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,tt),N.bufferData(N.PIXEL_PACK_BUFFER,xe.byteLength,N.STREAM_READ),N.readPixels(L,q,k,V,he.convert(Ge),he.convert(et),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Nt=ne!==null?De.get(ne).__webglFramebuffer:null;_e.bindFramebuffer(N.FRAMEBUFFER,Nt);let _t=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await gd(N,_t,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,tt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,xe),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(tt),N.deleteSync(_t),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,q=0){let k=Math.pow(2,-q),V=Math.floor(v.image.width*k),xe=Math.floor(v.image.height*k),Te=L!==null?L.x:0,ge=L!==null?L.y:0;ke.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Te,ge,V,xe),_e.unbindTexture()},this.copyTextureToTexture=function(v,L,q=null,k=null,V=0,xe=0){let Te,ge,Se,Re,Ge,et,Ae,tt,Nt,_t=v.isCompressedTexture?v.mipmaps[xe]:v.image;if(q!==null)Te=q.max.x-q.min.x,ge=q.max.y-q.min.y,Se=q.isBox3?q.max.z-q.min.z:1,Re=q.min.x,Ge=q.min.y,et=q.isBox3?q.min.z:0;else{let nt=Math.pow(2,-V);Te=Math.floor(_t.width*nt),ge=Math.floor(_t.height*nt),v.isDataArrayTexture?Se=_t.depth:v.isData3DTexture?Se=Math.floor(_t.depth*nt):Se=1,Re=0,Ge=0,et=0}k!==null?(Ae=k.x,tt=k.y,Nt=k.z):(Ae=0,tt=0,Nt=0);let mt=he.convert(L.format),an=he.convert(L.type),Ce;L.isData3DTexture?(ke.setTexture3D(L,0),Ce=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(ke.setTexture2DArray(L,0),Ce=N.TEXTURE_2D_ARRAY):(ke.setTexture2D(L,0),Ce=N.TEXTURE_2D),_e.activeTexture(N.TEXTURE0),_e.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),_e.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),_e.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);let dn=_e.getParameter(N.UNPACK_ROW_LENGTH),rt=_e.getParameter(N.UNPACK_IMAGE_HEIGHT),ns=_e.getParameter(N.UNPACK_SKIP_PIXELS),on=_e.getParameter(N.UNPACK_SKIP_ROWS),va=_e.getParameter(N.UNPACK_SKIP_IMAGES);_e.pixelStorei(N.UNPACK_ROW_LENGTH,_t.width),_e.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_t.height),_e.pixelStorei(N.UNPACK_SKIP_PIXELS,Re),_e.pixelStorei(N.UNPACK_SKIP_ROWS,Ge),_e.pixelStorei(N.UNPACK_SKIP_IMAGES,et);let Ai=v.isDataArrayTexture||v.isData3DTexture,is=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){let nt=De.get(v),en=De.get(L),Nn=De.get(nt.__renderTarget),Et=De.get(en.__renderTarget);_e.bindFramebuffer(N.READ_FRAMEBUFFER,Nn.__webglFramebuffer),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Xt=0;Xt<Se;Xt++)Ai&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.get(v).__webglTexture,V,et+Xt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.get(L).__webglTexture,xe,Nt+Xt)),N.blitFramebuffer(Re,Ge,Re+Te,Ge+ge,Ae,tt,Ae+Te,tt+ge,N.DEPTH_BUFFER_BIT,N.NEAREST);_e.bindFramebuffer(N.READ_FRAMEBUFFER,null),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||v.isRenderTargetTexture||De.has(v)){let nt=De.get(v),en=De.get(L);_e.bindFramebuffer(N.READ_FRAMEBUFFER,I),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,Y);for(let Nn=0;Nn<Se;Nn++)Ai?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,nt.__webglTexture,V,et+Nn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,nt.__webglTexture,V),is?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,en.__webglTexture,xe,Nt+Nn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,en.__webglTexture,xe),V!==0?N.blitFramebuffer(Re,Ge,Re+Te,Ge+ge,Ae,tt,Ae+Te,tt+ge,N.COLOR_BUFFER_BIT,N.NEAREST):is?N.copyTexSubImage3D(Ce,xe,Ae,tt,Nt+Nn,Re,Ge,Te,ge):N.copyTexSubImage2D(Ce,xe,Ae,tt,Re,Ge,Te,ge);_e.bindFramebuffer(N.READ_FRAMEBUFFER,null),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else is?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(Ce,xe,Ae,tt,Nt,Te,ge,Se,mt,an,_t.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(Ce,xe,Ae,tt,Nt,Te,ge,Se,mt,_t.data):N.texSubImage3D(Ce,xe,Ae,tt,Nt,Te,ge,Se,mt,an,_t):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,xe,Ae,tt,Te,ge,mt,an,_t.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,xe,Ae,tt,_t.width,_t.height,mt,_t.data):N.texSubImage2D(N.TEXTURE_2D,xe,Ae,tt,Te,ge,mt,an,_t);_e.pixelStorei(N.UNPACK_ROW_LENGTH,dn),_e.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt),_e.pixelStorei(N.UNPACK_SKIP_PIXELS,ns),_e.pixelStorei(N.UNPACK_SKIP_ROWS,on),_e.pixelStorei(N.UNPACK_SKIP_IMAGES,va),xe===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&N.generateMipmap(Ce),_e.unbindTexture()},this.initRenderTarget=function(v){De.get(v).__webglFramebuffer===void 0&&ke.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?ke.setTextureCube(v,0):v.isData3DTexture?ke.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?ke.setTexture2DArray(v,0):ke.setTexture2D(v,0),_e.unbindTexture()},this.resetState=function(){$=0,G=0,ne=null,_e.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var $x=/^[og]\s*(.+)?/,Zx=/^mtllib /,Jx=/^usemtl /,Kx=/^usemap /,Ml=/\s+/,nf=new F,rh=new F,sf=new F,rf=new F,Rn=new F,Sl=new Pe;function jx(){let n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){let a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);let o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){let s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){let s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){let s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){let s=this.vertices,r=this.object.geometry.normals;nf.fromArray(s,e),rh.fromArray(s,t),sf.fromArray(s,i),Rn.subVectors(sf,rh),rf.subVectors(nf,rh),Rn.cross(rf),Rn.normalize(),r.push(Rn.x,Rn.y,Rn.z),r.push(Rn.x,Rn.y,Rn.z),r.push(Rn.x,Rn.y,Rn.z)},addColor:function(e,t,i){let s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){let s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,r,a,o,l,c){let u=this.vertices.length,d=this.parseVertexIndex(e,u),h=this.parseVertexIndex(t,u),f=this.parseVertexIndex(i,u);if(this.addVertex(d,h,f),this.addColor(d,h,f),o!==void 0&&o!==""){let g=this.normals.length;d=this.parseNormalIndex(o,g),h=this.parseNormalIndex(l,g),f=this.parseNormalIndex(c,g),this.addNormal(d,h,f)}else this.addFaceNormal(d,h,f);if(s!==void 0&&s!==""){let g=this.uvs.length;d=this.parseUVIndex(s,g),h=this.parseUVIndex(r,g),f=this.parseUVIndex(a,g),this.addUV(d,h,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){let r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let i=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length-1;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],i)),this.addVertexLine(this.parseVertexIndex(e[r+1],i));for(let r=0,a=t.length-1;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s)),this.addUVLine(this.parseUVIndex(t[r+1],s))}};return n.startObject("",!1),n}var bl=class extends kn{constructor(e){super(e),this.materials=null}load(e,t,i,s){let r=this,a=new ds(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){let t=new jx;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let i=e.split(`
`),s=[];for(let o=0,l=i.length;o<l;o++){let c=i[o].trimStart();if(c.length===0)continue;let u=c.charAt(0);if(u!=="#")if(u==="v"){let d=c.split(Ml);switch(d[0]){case"v":t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(Sl.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6]),ut),t.colors.push(Sl.r,Sl.g,Sl.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":t.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(u==="f"){let h=c.slice(1).trim().split(Ml),f=[];for(let x=0,p=h.length;x<p;x++){let m=h[x];if(m.length>0){let M=m.split("/");f.push(M)}}let g=f[0];for(let x=1,p=f.length-1;x<p;x++){let m=f[x],M=f[x+1];t.addFace(g[0],m[0],M[0],g[1],m[1],M[1],g[2],m[2],M[2])}}else if(u==="l"){let d=c.substring(1).trim().split(Ml),h=[],f=[];if(c.indexOf("/")===-1)h=d;else for(let g=0,x=d.length;g<x;g++){let p=d[g].split("/");p[0]!==""&&h.push(p[0]),p[1]!==""&&f.push(p[1])}t.addLineGeometry(h,f)}else if(u==="p"){let h=c.slice(1).trim().split(Ml);t.addPointGeometry(h)}else if((s=$x.exec(c))!==null){let d=(" "+s[0].slice(1).trim()).slice(1);t.startObject(d)}else if(Jx.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(Zx.test(c))t.materialLibraries.push(c.substring(7).trim());else if(Kx.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){let h=s[1].trim().toLowerCase();t.object.smooth=h!=="0"&&h!=="off"}else t.object.smooth=!0;let d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();let r=new An;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){let c=t.objects[o],u=c.geometry,d=c.materials,h=u.type==="Line",f=u.type==="Points",g=!1;if(u.vertices.length===0)continue;let x=new Ft;x.setAttribute("position",new xt(u.vertices,3)),u.normals.length>0&&x.setAttribute("normal",new xt(u.normals,3)),u.colors.length>0&&(g=!0,x.setAttribute("color",new xt(u.colors,3))),u.hasUVIndices===!0&&x.setAttribute("uv",new xt(u.uvs,2));let p=[];for(let M=0,T=d.length;M<T;M++){let b=d[M],A=b.name+"_"+b.smooth+"_"+g,E=t.materials[A];if(this.materials!==null){if(E=this.materials.create(b.name),h&&E&&!(E instanceof Oi)){let _=new Oi;xn.prototype.copy.call(_,E),_.color.copy(E.color),E=_}else if(f&&E&&!(E instanceof gi)){let _=new gi({size:10,sizeAttenuation:!1});xn.prototype.copy.call(_,E),_.color.copy(E.color),_.map=E.map,E=_}}E===void 0&&(h?E=new Oi:f?E=new gi({size:1,sizeAttenuation:!1}):E=new Qn,E.name=b.name,E.flatShading=!b.smooth,E.vertexColors=g,t.materials[A]=E),p.push(E)}let m;if(p.length>1){for(let M=0,T=d.length;M<T;M++){let b=d[M];x.addGroup(b.groupStart,b.groupCount,M)}h?m=new $s(x,p):f?m=new us(x,p):m=new Ot(x,p)}else h?m=new $s(x,p[0]):f?m=new us(x,p[0]):m=new Ot(x,p[0]);m.name=c.name,r.add(m)}else if(t.vertices.length>0){let o=new gi({size:1,sizeAttenuation:!1}),l=new Ft;l.setAttribute("position",new xt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new xt(t.colors,3)),o.vertexColors=!0);let c=new us(l,o);r.add(c)}return r}};var El=class extends kn{constructor(e){super(e)}load(e,t,i,s){let r=this,a=this.path===""?Vr.extractUrlBase(e):this.path,o=new ds(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){let i=e.split(`
`),s={},r=/\s+/,a={};for(let l=0;l<i.length;l++){let c=i[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;let u=c.indexOf(" "),d=u>=0?c.substring(0,u):c;d=d.toLowerCase();let h=u>=0?c.substring(u+1):"";if(h=h.trim(),d==="newmtl")s={name:h},a[h]=s;else if(d==="ka"||d==="kd"||d==="ks"||d==="ke"){let f=h.split(r,3);s[d]=[parseFloat(f[0]),parseFloat(f[1]),parseFloat(f[2])]}else s[d]=h}let o=new ah(this.resourcePath||t,this.materialOptions);return o.setCrossOrigin(this.crossOrigin),o.setManager(this.manager),o.priority=this.priority,o.cache=this.cache,o.setMaterials(a),o}},ah=class{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.priority="auto",this.cache="default",this.side=this.options.side!==void 0?this.options.side:ei,this.wrap=this.options.wrap!==void 0?this.options.wrap:Ni}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;let t={};for(let i in e){let s=e[i],r={};t[i]=r;for(let a in s){let o=!0,l=s[a],c=a.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(o=!1);break;default:break}o&&(r[c]=l)}}return t}preload(){for(let e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(let t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){let t=this,i=this.materialsInfo[e],s={name:e,side:this.side};function r(o,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:o+l}function a(o,l){if(s[o])return;let c=t.getTextureParams(l,s),u=t.loadTexture(r(t.baseUrl,c.url));u.repeat.copy(c.scale),u.offset.copy(c.offset),u.wrapS=t.wrap,u.wrapT=t.wrap,(o==="map"||o==="emissiveMap")&&(u.colorSpace=ut),s[o]=u}for(let o in i){let l=i[o],c;if(l!=="")switch(o.toLowerCase()){case"kd":s.color=$e.colorSpaceToWorking(new Pe().fromArray(l),ut);break;case"ks":s.specular=$e.colorSpaceToWorking(new Pe().fromArray(l),ut);break;case"ke":s.emissive=$e.colorSpaceToWorking(new Pe().fromArray(l),ut);break;case"map_kd":a("map",l);break;case"map_ks":a("specularMap",l);break;case"map_ke":a("emissiveMap",l);break;case"norm":a("normalMap",l);break;case"map_bump":case"bump":a("bumpMap",l);break;case"disp":a("displacementMap",l);break;case"map_d":a("alphaMap",l),s.transparent=!0;break;case"ns":s.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(s.opacity=c,s.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(s.opacity=1-c,s.transparent=!0);break;default:break}}return this.materials[e]=new Qn(s),this.materials[e]}getTextureParams(e,t){let i={scale:new We(1,1),offset:new We(0,0)},s=e.split(/\s+/),r;return r=s.indexOf("-bm"),r>=0&&(t.bumpScale=parseFloat(s[r+1]),s.splice(r,2)),r=s.indexOf("-mm"),r>=0&&(t.displacementBias=parseFloat(s[r+1]),t.displacementScale=parseFloat(s[r+2]),s.splice(r,3)),r=s.indexOf("-s"),r>=0&&(i.scale.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),r=s.indexOf("-o"),r>=0&&(i.offset.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),i.url=s.join(" ").trim(),i}loadTexture(e,t,i,s,r){let a=this.manager!==void 0?this.manager:pl,o=a.getHandler(e);o===null&&(o=new Fr(a),o.setPriority(this.priority),o.setCache(this.cache)),o.setCrossOrigin&&o.setCrossOrigin(this.crossOrigin);let l=o.load(e,i,s,r);return t!==void 0&&(l.mapping=t),l}};function Qx(n){let i=document.createElement("canvas");i.width=256,i.height=256;let s=i.getContext("2d",{willReadFrequently:!0}),r=s.createImageData(256,256),a=n==="female"?[206,166,146]:[184,145,126];for(let l=0;l<256;l++)for(let c=0;c<256;c++){let u=(l*256+c)*4,d=Math.sin(c*.027)*1.2+Math.cos(l*.031)*1,h=((c*73+l*151+c*l*17)%31-15)*.22+d;r.data[u]=Math.max(0,Math.min(255,a[0]+h)),r.data[u+1]=Math.max(0,Math.min(255,a[1]+h)),r.data[u+2]=Math.max(0,Math.min(255,a[2]+h)),r.data[u+3]=255}s.putImageData(r,0,0);let o=new Bi(i);return o.colorSpace=ut,o.wrapS=o.wrapT=Ni,o.generateMipmaps=!0,o.minFilter=zn,o.magFilter=Ct,o.needsUpdate=!0,o.userData.grimstudioFallback=!0,o}function af({objText:n,mtlText:e,modelId:t}){if(typeof n!="string"||n.length<100)throw new Error("OBJ content is missing or too small");if(typeof e!="string"||!/^\s*newmtl\s+/m.test(e))throw new Error("MTL contains no material definitions");let i=[...e.matchAll(/^\s*map_Kd\s+(.+)\s*$/gim)].map(h=>h[1].trim()),s=e.split(/\r?\n/).filter(h=>!/^\s*map_Kd\s/i.test(h)).join(`
`),r=new El().parse(s,"");r.preload();let a=new bl().setMaterials(r).parse(n),o=0,l=0,c=0;if(a.traverse(h=>{if(!h.isMesh)return;o++;let f=h.geometry;if(!f.attributes.position?.count)throw new Error(`Mesh ${h.name||o} has no position data`);l+=f.attributes.position.count,f.attributes.uv?.count&&c++,f.attributes.normal||f.computeVertexNormals();let g=Array.isArray(h.material)?h.material:[h.material];for(let x of g)x&&(x.side=nn,x.roughness=.88,x.metalness=0,x.map||(x.map=Qx(t),x.color?.set(16777215)),x.needsUpdate=!0)}),!o)throw new Error("OBJ parsed but contains no mesh geometry");if(!l)throw new Error("OBJ geometry has no vertices");let d=new Cn().setFromObject(a).getSize(new F);if(![d.x,d.y,d.z].every(Number.isFinite)||Math.max(d.x,d.y,d.z)<=0)throw new Error("Model has invalid bounding dimensions");return{root:a,stats:{meshes:o,vertices:l,uvMeshes:c,bounds:{x:d.x,y:d.y,z:d.z},missingTextureRefs:i}}}function of(n){if(!n)return;let e=new Set,t=new Set,i=new Set;n.traverse(s=>{if(!s.isMesh)return;s.geometry&&e.add(s.geometry);let r=Array.isArray(s.material)?s.material:[s.material];for(let a of r)if(a){t.add(a);for(let o of Object.values(a))o?.isTexture&&i.add(o)}}),i.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),e.forEach(s=>s.dispose())}function ey(n,e,t,i,s){let r=s*3,a=i[r]*3,o=i[r+1]*3,l=i[r+2]*3,c=t[a],u=t[a+1],d=t[a+2],h=t[o]-c,f=t[o+1]-u,g=t[o+2]-d,x=t[l]-c,p=t[l+1]-u,m=t[l+2]-d,M=e.y*m-e.z*p,T=e.z*x-e.x*m,b=e.x*p-e.y*x,A=h*M+f*T+g*b;if(Math.abs(A)<1e-10)return null;let E=1/A,_=n.x-c,S=n.y-u,P=n.z-d,C=(_*M+S*T+P*b)*E;if(C<-1e-8||C>1+1e-8)return null;let D=S*g-P*f,O=P*h-_*g,W=_*f-S*h,I=(e.x*D+e.y*O+e.z*W)*E;if(I<-1e-8||C+I>1+1e-8)return null;let Y=(x*D+p*O+m*W)*E;return Y>1e-7?{distance:Y,u:C,v:I,ia:a,ib:o,ic:l}:null}function lf(n,e,t,i=1/0){let s=n.cellSize,r=n.gridMin,a=n.gridMax,o=0,l=1/0,c=e.x,u=e.y,d=e.z,h=t.x,f=t.y,g=t.z;if(Math.abs(h)<1e-12){if(c<r[0]||c>a[0])return null}else{let ae=(r[0]-c)/h,te=(a[0]-c)/h;if(ae>te){let be=ae;ae=te,te=be}if(o=Math.max(o,ae),l=Math.min(l,te),o>l)return null}if(Math.abs(f)<1e-12){if(u<r[1]||u>a[1])return null}else{let ae=(r[1]-u)/f,te=(a[1]-u)/f;if(ae>te){let be=ae;ae=te,te=be}if(o=Math.max(o,ae),l=Math.min(l,te),o>l)return null}if(Math.abs(g)<1e-12){if(d<r[2]||d>a[2])return null}else{let ae=(r[2]-d)/g,te=(a[2]-d)/g;if(ae>te){let be=ae;ae=te,te=be}if(o=Math.max(o,ae),l=Math.min(l,te),o>l)return null}if(l<0)return null;let x=Math.max(0,o),p=Math.min(l,i);if(x>p)return null;let m=Math.max(1e-9,s*1e-8),M=e.x+t.x*(x+m),T=e.y+t.y*(x+m),b=e.z+t.z*(x+m),A=n.nx,E=n.ny,_=n.nz,S=Math.max(0,Math.min(A-1,Math.floor((M-r[0])/s))),P=Math.max(0,Math.min(E-1,Math.floor((T-r[1])/s))),C=Math.max(0,Math.min(_-1,Math.floor((b-r[2])/s))),D=t.x>1e-12?1:t.x<-1e-12?-1:0,O=t.y>1e-12?1:t.y<-1e-12?-1:0,W=t.z>1e-12?1:t.z<-1e-12?-1:0,I=D?s/Math.abs(t.x):1/0,Y=O?s/Math.abs(t.y):1/0,$=W?s/Math.abs(t.z):1/0,G=D?(r[0]+(D>0?S+1:S)*s-e.x)/t.x:1/0,ne=O?(r[1]+(O>0?P+1:P)*s-e.y)/t.y:1/0,X=W?(r[2]+(W>0?C+1:C)*s-e.z)/t.z:1/0;for(;G<x;)G+=I;for(;ne<x;)ne+=Y;for(;X<x;)X+=$;n.mark=n.mark+1>>>0,n.mark===0&&(n.faceMarks.fill(0),n.mark=1);let Q=n.mark,z=null,re=p,fe=n.offsets,H=n.faceIds,ie=n.faceMarks,ce=A+E+_+3;for(let ae=0;ae<ce&&!(S<0||S>=A||P<0||P>=E||C<0||C>=_);ae++){let te=S+A*(P+E*C);for(let Ee=fe[te],Ve=fe[te+1];Ee<Ve;Ee++){let Xe=H[Ee];if(ie[Xe]===Q)continue;ie[Xe]=Q;let Ne=ey(e,t,n.points,n.triangles,Xe);Ne&&Ne.distance<re&&(re=Ne.distance,z={faceIndex:Xe,distance:Ne.distance,u:Ne.u,v:Ne.v,x:e.x+t.x*Ne.distance,y:e.y+t.y*Ne.distance,z:e.z+t.z*Ne.distance})}let be=Math.min(G,ne,X);if(z&&re<=be+m||be>p)break;let je=Math.max(m,Math.abs(be)*1e-12);G<=be+je&&(S+=D,G+=I),ne<=be+je&&(P+=O,ne+=Y),X<=be+je&&(C+=W,X+=$)}return z}var U=n=>document.querySelector(n),Oe=(n,e,t)=>Math.min(t,Math.max(e,n)),Mh=Object.freeze([{id:"male",name:"Male Head",objFile:"Male Average Head.obj",mtlFile:"Male Average Head.mtl"},{id:"female",name:"Female Head",objFile:"Female Average Head.obj",mtlFile:"Female Average Head.mtl"}]),vi="male",vs=new Map,ty="grimstudio-2.5.1-dual-heads-obj-mtl",ua=10,ny=100,Wi=1,ar=0,ia=0,iy=44,Yi={en:{performanceStats:"Performance diagnostics",brandTag:"PROFESSIONAL 3D MAKEUP STUDIO",new:"New",open:"Open",save:"Save",export:"Export PNG",language:"Language",theme:"Theme",tools:"MAKEUP TOOLS",all:"All",paint:"Paint",face:"Face",blend:"Blend",advanced:"Advanced",size:"Size",opacity:"Opacity",softness:"Edge softness",flow:"Flow",symmetry:"Mirror painting (X axis)",view:"VIEW",front:"Front",left:"Left",right:"Right",back:"Back",reset:"Reset",viewHint:"Left button paints \xB7 Hold right button to rotate \xB7 Wheel to zoom",headModel:"HEAD MODEL",settingsTitle:"Settings",skinTone:"Skin tone",retry:"Retry loading",viewportHint:"Paint: left button \xB7 Rotate: hold right button \xB7 Pan: middle button \xB7 Zoom: wheel",color:"COLOR",activePigment:"Active pigment",layers:"MAKEUP LAYERS",layerOpacity:"Layer opacity",rename:"Rename",delete:"Delete",workflow:"WORKFLOW",workflowText:"Makeup is stored as surface-attached decals in independent layers. Original head materials and textures are never edited.",undo:"Undo",redo:"Redo",brushSize:"Brush size",ready:"Ready",loading:"Loading head model\u2026",preparing:"Preparing isolated paint surface\u2026",loaded:"Head surface ready",graphicsError:"3D graphics could not be initialized",retryText:"Check hardware acceleration and graphics drivers, then retry.",modelError:"Could not load the head model",toolNames:["Brush","Airbrush","Powder","Sponge","Foundation","Concealer","Blush","Contour","Highlighter","Eyeshadow","Eyeliner","Pencil","Lipstick","Lip Gloss","Mascara","Eyebrow","Blur","Smudge","Blender","Eraser","Stencil","Stamp","Symmetry","Eyedropper"],toolTips:["Build soft, controllable pigment with smooth surface stamps.","Spray a feathered pigment cloud with gradual buildup.","Apply fine, low-contrast powder grain.","Dab a porous, irregular pigment texture.","Lay down a broad, natural base layer.","Apply precise localized coverage.","Create a soft circular cheek color gradient.","Apply a soft directional contour wash.","Add a soft luminous cosmetic layer.","Create a softly blended eye-area color.","Draw narrow, crisp cosmetic lines.","Create precise hard-edged detail strokes.","Apply dense, creamy lip pigment.","Add a translucent glossy highlight layer.","Create fine directional lash-like marks.","Create fine hair-like brow strokes.","Repaint the area with the local averaged pigment, softly feathering hard edges.","Drag nearby pigment of the active layer across the surface along the stroke for a real directional smear.","Mix the local pigment tones with the active color using a translucent veil.","Erase paint along the brush path on the active layer.","Apply a star-shaped decorative stencil.","Place a decorative rosette stamp.","Toggle mirrored painting across the model X axis.","Sample the composited pigment where colors have mixed."],layerName:"Layer",baseLayer:"Base Makeup",layerAdded:"Layer added",layerDuplicated:"Layer duplicated",layerLimit:"Layer limit reached",noLayer:"No active layer",locked:"Unlock this layer first",clearConfirm:"Clear all paint on",newConfirm:"Create a new project? Current paint will be cleared. Save first if needed.",renamed:"Layer name:",deleted:"Layer deleted",toolStatus:"Tool",strokeSaved:"Stroke saved",autosaved:"Autosaved",autosaveFailed:"Autosave failed",projectSaved:"Project saved",projectOpened:"Project opened",invalidProject:"Invalid project file",exported:"PNG exported",exportFailed:"Export failed",modelReadyToast:"Head model ready",system:"System",dark:"Dark",light:"Light",symmetryOn:"Symmetry enabled",symmetryOff:"Symmetry disabled",colorSampled:"Pigment sampled",legacyWarning:"This project contains legacy UV paint. New strokes use isolated surface decals; legacy paint is preserved as a separate compatibility layer.",surfaceIndex:"Building surface index",surfaceReady:"Surface index ready",brushSettings:"TOOL SETTINGS",faceCategory:"Face makeup",paintCategory:"Paint",blendCategory:"Blend & correction",advancedCategory:"Advanced",interaction:"CAMERA & PERFORMANCE",cameraRotation:"Camera rotation",cameraPan:"Camera pan",rightMouse:"Right mouse button",middleMouse:"Middle mouse button",spaceLeft:"Space + left mouse",shiftRight:"Shift + right mouse",disabled:"Disabled",rotateSensitivity:"Rotation sensitivity",zoomSensitivity:"Zoom sensitivity",performance:"Painting performance",performanceFast:"Performance",performanceBalanced:"Balanced",performanceQuality:"Quality",cameraHint:"Paint: left button \xB7 Rotate: assigned button \xB7 Pan: assigned button \xB7 Zoom: wheel",resetControls:"Reset camera settings",preview:"BRUSH PREVIEW",brushShape:"BRUSH SHAPE",shapeDefault:"Tool default",shapeSoft:"Soft round",shapeHard:"Hard round",shapeFlat:"Flat",shapeAir:"Airbrush",shapeSpeckle:"Speckle",shapePorous:"Porous",shapeHair:"Fine hair",shapeStar:"Star",shapeRosette:"Rosette",lighting:"LIGHTING",lightingPreset:"Lighting preset",lightTemp:"Color temperature",lightAzimuth:"Light azimuth",lightElevation:"Light elevation",lightIntensity:"Key light intensity",lightHint:"Direction is measured from the front of the model.",lpStudio:"Studio portrait",lpVanity:"Vanity mirror",lpOvercast:"Overcast daylight",lpSun:"Direct sun",lpGolden:"Golden hour",lpSunset:"Sunset dusk",lpMoon:"Moonlight",lpBackstage:"Backstage lights",lpCandle:"Candlelight",lpRing:"Ring light",lpCustom:"Custom",appearance:"APPEARANCE",accentColor:"Accent color",accentReset:"Use default accent",accentBrass:"Brass",accentTeal:"Teal",accentSky:"Sky blue",accentViolet:"Violet",accentRose:"Rose",accentLime:"Lime",accentAmber:"Amber",accentCrimson:"Crimson"},ru:{performanceStats:"\u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",brandTag:"\u041F\u0420\u041E\u0424\u0415\u0421\u0421\u0418\u041E\u041D\u0410\u041B\u042C\u041D\u0410\u042F 3D-\u0421\u0422\u0423\u0414\u0418\u042F \u0413\u0420\u0418\u041C\u0410",new:"\u041D\u043E\u0432\u044B\u0439",open:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C",save:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",export:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442 PNG",language:"\u042F\u0437\u044B\u043A",theme:"\u0422\u0435\u043C\u0430",tools:"\u0418\u041D\u0421\u0422\u0420\u0423\u041C\u0415\u041D\u0422\u042B \u0413\u0420\u0418\u041C\u0410",all:"\u0412\u0441\u0435",paint:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435",face:"\u041B\u0438\u0446\u043E",blend:"\u0421\u043C\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435",advanced:"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E",size:"\u0420\u0430\u0437\u043C\u0435\u0440",opacity:"\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C",softness:"\u041C\u044F\u0433\u043A\u043E\u0441\u0442\u044C \u043A\u0440\u0430\u044F",flow:"\u041D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C",symmetry:"\u0417\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435 (\u043E\u0441\u044C X)",view:"\u0412\u0418\u0414",front:"\u0421\u043F\u0435\u0440\u0435\u0434\u0438",left:"\u0421\u043B\u0435\u0432\u0430",right:"\u0421\u043F\u0440\u0430\u0432\u0430",back:"\u0421\u0437\u0430\u0434\u0438",reset:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",viewHint:"\u041B\u041A\u041C \u2014 \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \xB7 \u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439 \u041F\u041A\u041C \u0434\u043B\u044F \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F \xB7 \u041A\u043E\u043B\u0435\u0441\u043E \u2014 \u043C\u0430\u0441\u0448\u0442\u0430\u0431",headModel:"3D-\u041C\u041E\u0414\u0415\u041B\u042C \u0413\u041E\u041B\u041E\u0412\u042B",settingsTitle:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",skinTone:"\u0422\u043E\u043D \u043A\u043E\u0436\u0438",retry:"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443",viewportHint:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435: \u041B\u041A\u041C \xB7 \u0412\u0440\u0430\u0449\u0435\u043D\u0438\u0435: \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439 \u041F\u041A\u041C \xB7 \u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435: \u0441\u0440\u0435\u0434\u043D\u044F\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \xB7 \u041C\u0430\u0441\u0448\u0442\u0430\u0431: \u043A\u043E\u043B\u0435\u0441\u043E",color:"\u0426\u0412\u0415\u0422",activePigment:"\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0446\u0432\u0435\u0442",layers:"\u0421\u041B\u041E\u0418 \u0413\u0420\u0418\u041C\u0410",layerOpacity:"\u041D\u0435\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u0441\u043B\u043E\u044F",rename:"\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C",delete:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",workflow:"\u0420\u0410\u0411\u041E\u0427\u0418\u0419 \u041F\u0420\u041E\u0426\u0415\u0421\u0421",workflowText:"\u0413\u0440\u0438\u043C \u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u043A\u0430\u043A \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0446\u0438\u0438 \u0432 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u0441\u043B\u043E\u044F\u0445. \u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0438 \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u044B \u0433\u043E\u043B\u043E\u0432\u044B \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F.",undo:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",redo:"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",brushSize:"\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u0438\u0441\u0442\u0438",ready:"\u0413\u043E\u0442\u043E\u0432\u043E",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043C\u043E\u0434\u0435\u043B\u0438 \u0433\u043E\u043B\u043E\u0432\u044B\u2026",preparing:"\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u044F\u2026",loaded:"\u041F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C \u0433\u043E\u043B\u043E\u0432\u044B \u0433\u043E\u0442\u043E\u0432\u0430",graphicsError:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C 3D-\u0433\u0440\u0430\u0444\u0438\u043A\u0443",retryText:"\u041F\u0440\u043E\u0432\u0435\u0440\u044C \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \u0438 \u0434\u0440\u0430\u0439\u0432\u0435\u0440 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u044B, \u0437\u0430\u0442\u0435\u043C \u043F\u043E\u0432\u0442\u043E\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0443.",modelError:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C \u0433\u043E\u043B\u043E\u0432\u044B",toolNames:["\u041A\u0438\u0441\u0442\u044C","\u0410\u044D\u0440\u043E\u0433\u0440\u0430\u0444","\u041F\u0443\u0434\u0440\u0430","\u0421\u043F\u043E\u043D\u0436","\u0422\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u043E\u0441\u043D\u043E\u0432\u0430","\u041A\u043E\u043D\u0441\u0438\u043B\u0435\u0440","\u0420\u0443\u043C\u044F\u043D\u0430","\u041A\u043E\u043D\u0442\u0443\u0440\u0438\u043D\u0433","\u0425\u0430\u0439\u043B\u0430\u0439\u0442\u0435\u0440","\u0422\u0435\u043D\u0438","\u041F\u043E\u0434\u0432\u043E\u0434\u043A\u0430","\u041A\u0430\u0440\u0430\u043D\u0434\u0430\u0448","\u041F\u043E\u043C\u0430\u0434\u0430","\u0411\u043B\u0435\u0441\u043A \u0434\u043B\u044F \u0433\u0443\u0431","\u0422\u0443\u0448\u044C","\u0411\u0440\u043E\u0432\u0438","\u0420\u0430\u0437\u043C\u044B\u0442\u0438\u0435","\u0420\u0430\u0437\u043C\u0430\u0437\u044B\u0432\u0430\u043D\u0438\u0435","\u0421\u043C\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435","\u041B\u0430\u0441\u0442\u0438\u043A","\u0422\u0440\u0430\u0444\u0430\u0440\u0435\u0442","\u0428\u0442\u0430\u043C\u043F","\u0421\u0438\u043C\u043C\u0435\u0442\u0440\u0438\u044F","\u041F\u0438\u043F\u0435\u0442\u043A\u0430"],toolTips:["\u041C\u044F\u0433\u043A\u0438\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0435 \u043C\u0430\u0437\u043A\u0438 \u043F\u0438\u0433\u043C\u0435\u043D\u0442\u0430 \u043F\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438.","\u0412\u043E\u0437\u0434\u0443\u0448\u043D\u043E\u0435 \u043D\u0430\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u043F\u0438\u0433\u043C\u0435\u043D\u0442\u0430 \u0441 \u043F\u043B\u0430\u0432\u043D\u044B\u043C \u043D\u0430\u043A\u043E\u043F\u043B\u0435\u043D\u0438\u0435\u043C.","\u041C\u0435\u043B\u043A\u043E\u0434\u0438\u0441\u043F\u0435\u0440\u0441\u043D\u043E\u0435 \u043D\u0430\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u043F\u0443\u0434\u0440\u044B.","\u041D\u0430\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u043D\u043E\u0433\u043E \u043F\u0438\u0433\u043C\u0435\u043D\u0442\u0430 \u0442\u043E\u0447\u0435\u0447\u043D\u044B\u043C\u0438 \u043A\u0430\u0441\u0430\u043D\u0438\u044F\u043C\u0438.","\u0428\u0438\u0440\u043E\u043A\u043E\u0435 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043D\u0430\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0442\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u043E\u0441\u043D\u043E\u0432\u044B.","\u0422\u043E\u0447\u043D\u043E\u0435 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u0435 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u0443\u0447\u0430\u0441\u0442\u043A\u043E\u0432.","\u041C\u044F\u0433\u043A\u0438\u0439 \u043A\u0440\u0443\u0433\u043E\u0432\u043E\u0439 \u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442 \u0440\u0443\u043C\u044F\u043D.","\u041C\u044F\u0433\u043A\u043E\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0435 \u0437\u0430\u0442\u0435\u043C\u043D\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043A\u043E\u043D\u0442\u0443\u0440\u0438\u043D\u0433\u0430.","\u041C\u044F\u0433\u043A\u0438\u0439 \u0441\u0432\u0435\u0442\u044F\u0449\u0438\u0439\u0441\u044F \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u043B\u043E\u0439.","\u041C\u044F\u0433\u043A\u043E \u0440\u0430\u0441\u0442\u0443\u0448\u0451\u0432\u0430\u043D\u043D\u044B\u0439 \u0446\u0432\u0435\u0442 \u0434\u043B\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0433\u043B\u0430\u0437.","\u0422\u043E\u043D\u043A\u0438\u0435 \u0447\u0451\u0442\u043A\u0438\u0435 \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u043D\u0438\u0438.","\u0422\u043E\u0447\u043D\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u043B\u0438\u043D\u0438\u0438 \u0441 \u0436\u0451\u0441\u0442\u043A\u0438\u043C \u043A\u0440\u0430\u0435\u043C.","\u041F\u043B\u043E\u0442\u043D\u044B\u0439 \u043A\u0440\u0435\u043C\u043E\u0432\u044B\u0439 \u043F\u0438\u0433\u043C\u0435\u043D\u0442 \u0434\u043B\u044F \u0433\u0443\u0431.","\u041F\u043E\u043B\u0443\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439 \u0433\u043B\u044F\u043D\u0446\u0435\u0432\u044B\u0439 \u0441\u043B\u043E\u0439.","\u0422\u043E\u043D\u043A\u0438\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0448\u0442\u0440\u0438\u0445\u0438, \u0438\u043C\u0438\u0442\u0438\u0440\u0443\u044E\u0449\u0438\u0435 \u0440\u0435\u0441\u043D\u0438\u0446\u044B.","\u0422\u043E\u043D\u043A\u0438\u0435 \u0448\u0442\u0440\u0438\u0445\u0438, \u0438\u043C\u0438\u0442\u0438\u0440\u0443\u044E\u0449\u0438\u0435 \u0432\u043E\u043B\u043E\u0441\u043A\u0438 \u0431\u0440\u043E\u0432\u0435\u0439.","\u041F\u0435\u0440\u0435\u043A\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0443\u0447\u0430\u0441\u0442\u043E\u043A \u0443\u0441\u0440\u0435\u0434\u043D\u0451\u043D\u043D\u044B\u043C \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u043C \u043F\u0438\u0433\u043C\u0435\u043D\u0442\u043E\u043C, \u043C\u044F\u0433\u043A\u043E \u0441\u0433\u043B\u0430\u0436\u0438\u0432\u0430\u044F \u0436\u0451\u0441\u0442\u043A\u0438\u0435 \u043A\u0440\u0430\u044F.","\u041F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442 \u043F\u0438\u0433\u043C\u0435\u043D\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0441\u043B\u043E\u044F \u043F\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u043A\u0438\u0441\u0442\u0438 \u2014 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0440\u0430\u0437\u043C\u0430\u0437\u044B\u0432\u0430\u043D\u0438\u0435.","\u0421\u043C\u0435\u0448\u0438\u0432\u0430\u0435\u0442 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043E\u0442\u0442\u0435\u043D\u043A\u0438 \u0441 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u043C \u0446\u0432\u0435\u0442\u043E\u043C \u043F\u043E\u043B\u0443\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u043C \u0441\u043B\u043E\u0435\u043C.","\u0421\u0442\u0438\u0440\u0430\u0435\u0442 \u043C\u0430\u0437\u043A\u0438 \u0432\u0434\u043E\u043B\u044C \u043F\u0443\u0442\u0438 \u043A\u0438\u0441\u0442\u0438 \u043D\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u043C \u0441\u043B\u043E\u0435.","\u041D\u0430\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0442\u0440\u0430\u0444\u0430\u0440\u0435\u0442\u0430 \u0432 \u0444\u043E\u0440\u043C\u0435 \u0437\u0432\u0435\u0437\u0434\u044B.","\u041D\u0430\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0443\u0437\u043E\u0440\u0430-\u0440\u043E\u0437\u0435\u0442\u043A\u0438.","\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0441\u0438 X \u043C\u043E\u0434\u0435\u043B\u0438.","\u0412\u044B\u0431\u043E\u0440 \u0441\u043C\u0435\u0448\u0430\u043D\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430 \u0432 \u043C\u0435\u0441\u0442\u0435 \u043D\u0430\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043C\u0430\u0437\u043A\u043E\u0432."],layerName:"\u0421\u043B\u043E\u0439",baseLayer:"\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0433\u0440\u0438\u043C",layerAdded:"\u0421\u043B\u043E\u0439 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D",layerDuplicated:"\u0421\u043B\u043E\u0439 \u0434\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u043D",layerLimit:"\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442 \u043B\u0438\u043C\u0438\u0442 \u0441\u043B\u043E\u0451\u0432",noLayer:"\u041D\u0435\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0441\u043B\u043E\u044F",locked:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0439 \u0441\u043B\u043E\u0439",clearConfirm:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0435\u0441\u044C \u0433\u0440\u0438\u043C \u043D\u0430 \u0441\u043B\u043E\u0435",newConfirm:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442? \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0433\u0440\u0438\u043C \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0451\u043D. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0438 \u0440\u0430\u0431\u043E\u0442\u0443.",renamed:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u043B\u043E\u044F:",deleted:"\u0421\u043B\u043E\u0439 \u0443\u0434\u0430\u043B\u0451\u043D",toolStatus:"\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442",strokeSaved:"\u041C\u0430\u0437\u043E\u043A \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D",autosaved:"\u0410\u0432\u0442\u043E\u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E",autosaveFailed:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u0432\u0442\u043E\u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F",projectSaved:"\u041F\u0440\u043E\u0435\u043A\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D",projectOpened:"\u041F\u0440\u043E\u0435\u043A\u0442 \u043E\u0442\u043A\u0440\u044B\u0442",invalidProject:"\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0444\u0430\u0439\u043B \u043F\u0440\u043E\u0435\u043A\u0442\u0430",exported:"PNG \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D",exportFailed:"\u041E\u0448\u0438\u0431\u043A\u0430 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0430",modelReadyToast:"\u041C\u043E\u0434\u0435\u043B\u044C \u0433\u043E\u043B\u043E\u0432\u044B \u0433\u043E\u0442\u043E\u0432\u0430",system:"\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u0430\u044F",dark:"\u0422\u0451\u043C\u043D\u0430\u044F",light:"\u0421\u0432\u0435\u0442\u043B\u0430\u044F",symmetryOn:"\u0421\u0438\u043C\u043C\u0435\u0442\u0440\u0438\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430",symmetryOff:"\u0421\u0438\u043C\u043C\u0435\u0442\u0440\u0438\u044F \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u0430",colorSampled:"\u0426\u0432\u0435\u0442 \u0432\u044B\u0431\u0440\u0430\u043D",legacyWarning:"\u041F\u0440\u043E\u0435\u043A\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0442\u0430\u0440\u044B\u0435 UV-\u0440\u0438\u0441\u0443\u043D\u043A\u0438. \u041D\u043E\u0432\u044B\u0435 \u043C\u0430\u0437\u043A\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0446\u0438\u0438; \u0441\u0442\u0430\u0440\u044B\u0439 \u0433\u0440\u0438\u043C \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u043C \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u043C \u0441\u043B\u043E\u0435.",surfaceIndex:"\u041F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435 \u0438\u043D\u0434\u0435\u043A\u0441\u0430 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438",surfaceReady:"\u0418\u043D\u0434\u0435\u043A\u0441 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u0433\u043E\u0442\u043E\u0432",brushSettings:"\u041D\u0410\u0421\u0422\u0420\u041E\u0419\u041A\u0418 \u0418\u041D\u0421\u0422\u0420\u0423\u041C\u0415\u041D\u0422\u0410",faceCategory:"\u041C\u0430\u043A\u0438\u044F\u0436 \u043B\u0438\u0446\u0430",paintCategory:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435",blendCategory:"\u0421\u043C\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435 \u0438 \u043A\u043E\u0440\u0440\u0435\u043A\u0446\u0438\u044F",advancedCategory:"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E",interaction:"\u041A\u0410\u041C\u0415\u0420\u0410 \u0418 \u041F\u0420\u041E\u0418\u0417\u0412\u041E\u0414\u0418\u0422\u0415\u041B\u042C\u041D\u041E\u0421\u0422\u042C",cameraRotation:"\u0412\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u043A\u0430\u043C\u0435\u0440\u044B",cameraPan:"\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043A\u0430\u043C\u0435\u0440\u044B",rightMouse:"\u041F\u0440\u0430\u0432\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \u043C\u044B\u0448\u0438",middleMouse:"\u0421\u0440\u0435\u0434\u043D\u044F\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \u043C\u044B\u0448\u0438",spaceLeft:"\u041F\u0440\u043E\u0431\u0435\u043B + \u043B\u0435\u0432\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430",shiftRight:"Shift + \u043F\u0440\u0430\u0432\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430",disabled:"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E",rotateSensitivity:"\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F",zoomSensitivity:"\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0430",performance:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u044F",performanceFast:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",performanceBalanced:"\u0411\u0430\u043B\u0430\u043D\u0441",performanceQuality:"\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",cameraHint:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435: \u041B\u041A\u041C \xB7 \u0412\u0440\u0430\u0449\u0435\u043D\u0438\u0435: \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \xB7 \u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435: \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \xB7 \u041C\u0430\u0441\u0448\u0442\u0430\u0431: \u043A\u043E\u043B\u0435\u0441\u043E",resetControls:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043A\u0430\u043C\u0435\u0440\u044B",preview:"\u041F\u0420\u0415\u0414\u041F\u0420\u041E\u0421\u041C\u041E\u0422\u0420 \u041A\u0418\u0421\u0422\u0418",brushShape:"\u0424\u041E\u0420\u041C\u0410 \u041A\u0418\u0421\u0422\u0418",shapeDefault:"\u041A\u0430\u043A \u0443 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430",shapeSoft:"\u041C\u044F\u0433\u043A\u0438\u0439 \u043A\u0440\u0443\u0433\u043B\u044B\u0439",shapeHard:"\u0416\u0451\u0441\u0442\u043A\u0438\u0439 \u043A\u0440\u0443\u0433\u043B\u044B\u0439",shapeFlat:"\u041F\u043B\u043E\u0441\u043A\u0438\u0439",shapeAir:"\u0410\u044D\u0440\u043E\u0433\u0440\u0430\u0444",shapeSpeckle:"\u041A\u0440\u0430\u043F\u0438\u043D\u043A\u0430",shapePorous:"\u041F\u043E\u0440\u0438\u0441\u0442\u044B\u0439",shapeHair:"\u0422\u043E\u043D\u043A\u0438\u0435 \u0448\u0442\u0440\u0438\u0445\u0438",shapeStar:"\u0417\u0432\u0435\u0437\u0434\u0430",shapeRosette:"\u0420\u043E\u0437\u0435\u0442\u043A\u0430",lighting:"\u041E\u0421\u0412\u0415\u0429\u0415\u041D\u0418\u0415",lightingPreset:"\u041F\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0441\u0432\u0435\u0442\u0430",lightTemp:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0441\u0432\u0435\u0442\u0430",lightAzimuth:"\u0410\u0437\u0438\u043C\u0443\u0442 \u0441\u0432\u0435\u0442\u0430",lightElevation:"\u0412\u044B\u0441\u043E\u0442\u0430 \u0441\u0432\u0435\u0442\u0430",lightIntensity:"\u042F\u0440\u043A\u043E\u0441\u0442\u044C \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0433\u043E \u0441\u0432\u0435\u0442\u0430",lightHint:"\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043E\u0442\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u0442 \u043B\u0438\u0446\u0430 \u043C\u043E\u0434\u0435\u043B\u0438.",lpStudio:"\u0421\u0442\u0443\u0434\u0438\u0439\u043D\u044B\u0439 \u043F\u043E\u0440\u0442\u0440\u0435\u0442",lpVanity:"\u0417\u0435\u0440\u043A\u0430\u043B\u043E \u0433\u0440\u0438\u043C\u0451\u0440\u043A\u0438",lpOvercast:"\u041F\u0430\u0441\u043C\u0443\u0440\u043D\u044B\u0439 \u0434\u0435\u043D\u044C",lpSun:"\u041F\u0440\u044F\u043C\u043E\u0435 \u0441\u043E\u043B\u043D\u0446\u0435",lpGolden:"\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u0447\u0430\u0441",lpSunset:"\u0417\u0430\u043A\u0430\u0442",lpMoon:"\u041B\u0443\u043D\u043D\u044B\u0439 \u0441\u0432\u0435\u0442",lpBackstage:"\u0417\u0430\u043A\u0443\u043B\u0438\u0441\u043D\u044B\u0435 \u0441\u043E\u0444\u0438\u0442\u044B",lpCandle:"\u0421\u0432\u0435\u0442 \u0441\u0432\u0435\u0447\u0438",lpRing:"\u041A\u043E\u043B\u044C\u0446\u0435\u0432\u0430\u044F \u043B\u0430\u043C\u043F\u0430",lpCustom:"\u0421\u0432\u043E\u0451",appearance:"\u041E\u0424\u041E\u0420\u041C\u041B\u0415\u041D\u0418\u0415",accentColor:"\u0410\u043A\u0446\u0435\u043D\u0442\u043D\u044B\u0439 \u0446\u0432\u0435\u0442",accentReset:"\u0410\u043A\u0446\u0435\u043D\u0442 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",accentBrass:"\u041B\u0430\u0442\u0443\u043D\u044C",accentTeal:"\u0411\u0438\u0440\u044E\u0437\u0430",accentSky:"\u041D\u0435\u0431\u0435\u0441\u043D\u044B\u0439",accentViolet:"\u0421\u0438\u0440\u0435\u043D\u0435\u0432\u044B\u0439",accentRose:"\u0420\u043E\u0437\u043E\u0432\u044B\u0439",accentLime:"\u041B\u0430\u0439\u043C\u043E\u0432\u044B\u0439",accentAmber:"\u042F\u043D\u0442\u0430\u0440\u043D\u044B\u0439",accentCrimson:"\u0411\u0430\u0433\u0440\u043E\u0432\u044B\u0439"}},Tt=[{key:"brush",category:"paint",icon:"brush",radius:1,aspect:1,mask:"soft",alpha:.85},{key:"airbrush",category:"paint",icon:"airbrush",radius:1.65,aspect:1,mask:"air",alpha:.22},{key:"powder",category:"paint",icon:"powder",radius:1.25,aspect:1,mask:"powder",alpha:.2},{key:"sponge",category:"paint",icon:"sponge",radius:1.35,aspect:1,mask:"sponge",alpha:.38},{key:"foundation",category:"face",icon:"foundation",radius:1.8,aspect:1.05,mask:"foundation",alpha:.5},{key:"concealer",category:"face",icon:"concealer",radius:.7,aspect:1,mask:"concealer",alpha:.78},{key:"blush",category:"face",icon:"blush",radius:1.5,aspect:1,mask:"blush",alpha:.32},{key:"contour",category:"face",icon:"contour",radius:1.55,aspect:1.25,mask:"contour",alpha:.3},{key:"highlighter",category:"face",icon:"highlighter",radius:1.25,aspect:1.05,mask:"highlight",alpha:.5,finish:"glow"},{key:"eyeshadow",category:"face",icon:"eyeshadow",radius:1.2,aspect:1.15,mask:"shadow",alpha:.42},{key:"eyeliner",category:"face",icon:"eyeliner",radius:.34,aspect:1.45,mask:"liner",alpha:1},{key:"pencil",category:"paint",icon:"pencil",radius:.24,aspect:1.15,mask:"hard",alpha:1},{key:"lipstick",category:"face",icon:"lipstick",radius:.72,aspect:1.15,mask:"lipstick",alpha:.88},{key:"lipgloss",category:"face",icon:"lipgloss",radius:.9,aspect:1.1,mask:"gloss",alpha:.5,finish:"gloss"},{key:"mascara",category:"face",icon:"mascara",radius:.26,aspect:1.45,mask:"hair",alpha:.82},{key:"eyebrow",category:"face",icon:"eyebrow",radius:.3,aspect:1.5,mask:"hair",alpha:.78},{key:"blur",category:"blend",icon:"blur",radius:1.5,aspect:1,mask:"blur",alpha:.14},{key:"smudge",category:"blend",icon:"smudge",radius:.72,aspect:1,mask:"smear",alpha:.45},{key:"blender",category:"blend",icon:"blender",radius:1.2,aspect:1.05,mask:"blend",alpha:.16},{key:"eraser",category:"blend",icon:"eraser",radius:1.1,aspect:1,mask:"soft",alpha:1,action:!0},{key:"stencil",category:"advanced",icon:"stencil",radius:1,aspect:1,mask:"star",alpha:.9},{key:"stamp",category:"advanced",icon:"stamp",radius:.9,aspect:1,mask:"rosette",alpha:.9},{key:"symmetry",category:"advanced",icon:"symmetry",radius:1,aspect:1,mask:"soft",alpha:1,action:!0},{key:"eyedropper",category:"advanced",icon:"eyedropper",radius:1,aspect:1,mask:"soft",alpha:1,action:!0}],sy={brush:'<path d="M20 4l-8.6 8.6"/><path d="M13.4 6.4l4.2 4.2"/><path d="M5.6 20.4c2.4.6 4.5-.4 5.2-2.5l1.2-3.5-3.4-3.4-3.5 1.2c-2.1.7-3.1 2.8-2.5 5.2.2 1.5 1.5 2.7 3 3z"/>',airbrush:'<rect x="9" y="9" width="6" height="12" rx="1.5"/><path d="M10.5 9V6.5h3V9"/><path d="M12 3v1.8"/><path d="M7.5 4.5l.9 1.1M16.5 4.5l-.9 1.1M6.5 8h1.6"/>',powder:'<circle cx="7.5" cy="9.5" r="1.3"/><circle cx="12.5" cy="7.5" r="1.1"/><circle cx="16.5" cy="10.5" r="1.4"/><circle cx="9.5" cy="14.5" r="1.5"/><circle cx="14.5" cy="15" r="1.2"/><circle cx="11.5" cy="18.5" r="1"/>',sponge:'<rect x="4.5" y="7" width="15" height="12" rx="2.5"/><circle cx="9" cy="11" r=".9"/><circle cx="13" cy="13.5" r=".8"/><circle cx="15" cy="10" r=".9"/>',foundation:'<rect x="8.5" y="10" width="7" height="10.5" rx="1.5"/><path d="M12 10V7"/><path d="M10 7h4l-.8-3h-2.4z"/>',concealer:'<circle cx="12" cy="13" r="6.5"/><circle cx="12" cy="13" r="2.2" fill="currentColor" stroke="none"/>',blush:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3.4"/>',contour:'<path d="M5.5 18.5c5 1 9.5-.8 12.4-5 1.4-2 1.9-4.4 1.6-7"/><path d="M8.5 16.5c3.8.4 7-1.4 8.9-4.6"/>',highlighter:'<path d="M12 3.5l1.9 5.6 5.6 1.9-5.6 1.9L12 18.5l-1.9-5.6-5.6-1.9 5.6-1.9z"/><path d="M18.5 17.5v3M17 19h3"/>',eyeshadow:'<path d="M2.8 12S6.2 6.8 12 6.8 21.2 12 21.2 12 18 17.2 12 17.2 2.8 12 2.8 12z"/><circle cx="12" cy="12" r="2.6"/>',eyeliner:'<path d="M3 14.5c3-5.5 6-5.5 9 0s6 5.5 9 0"/>',pencil:'<path d="M4.5 19.5l1-3.8L16.6 4.6a2 2 0 0 1 2.8 2.8L8.3 18.5z"/><path d="M14.6 6.6l2.8 2.8"/>',lipstick:'<path d="M10.5 10.5V6l3.2-2.2v6.7"/><rect x="9" y="10.5" width="6" height="3.5" rx="1"/><path d="M8 14h8v5.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"/>',lipgloss:'<path d="M12 4.5c2.2 2.6 4 4.9 4 7.2a4 4 0 1 1-8 0c0-2.3 1.8-4.6 4-7.2z"/><path d="M10 13.5c0 1 .8 1.9 1.8 2"/>',mascara:'<rect x="9.5" y="10" width="5" height="10.5" rx="1.5"/><path d="M12 10V7.5"/><path d="M10 4.8h4M12 3v4.5"/>',eyebrow:'<path d="M4 10.5c3-4.5 8.5-5.5 14-3.5"/><path d="M7 11.5l-1 2.2M11 9.8l-.5 2.4M15 9.2l.4 2.4M18 9.5l.8 2"/>',blur:'<circle cx="12" cy="12" r="7" stroke-dasharray="1.6 2.6"/><circle cx="12" cy="12" r="3"/>',smudge:'<path d="M4 19c5 .6 10-1.4 13-5.4 1.7-2.3 2.3-4.8 1.9-7.9"/><path d="M15.7 6.9l3.2-1 .3 3.3"/>',blender:'<circle cx="9.4" cy="12" r="5.2"/><circle cx="14.6" cy="12" r="5.2"/>',eraser:'<path d="M15.6 4.6l4 4L11.2 17H7.4L5 14.6z"/><path d="M9.6 8.6l6 6"/><path d="M8 21h10"/>',stencil:'<path d="M12 3.5l2.5 5 5.5.8-4 3.9 1 5.5-5-2.7-5 2.7 1-5.5-4-3.9 5.5-.8z"/>',stamp:'<circle cx="12" cy="12" r="2.6"/><path d="M12 3.5v3.2M12 17.3v3.2M3.5 12h3.2M17.3 12h3.2M6 6l2.3 2.3M15.7 15.7L18 18M18 6l-2.3 2.3M8.3 15.7L6 18"/>',symmetry:'<path d="M12 3v18"/><path d="M8.5 7.5L4.5 12l4 4.5z" fill="currentColor" stroke="none"/><path d="M15.5 7.5l4 4.5-4 4.5z"/>',eyedropper:'<path d="M13.6 7.9l2.5 2.5L8 18.5l-3.7.7.7-3.7z"/><path d="M13.6 7.9l1.8-1.8a1.9 1.9 0 0 1 2.7 0l.4.4a1.9 1.9 0 0 1 0 2.7l-1.9 1.8"/>'};function Tf(n,e=18){return`<svg viewBox="0 0 24 24" width="${e}" height="${e}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${sy[n]||""}</svg>`}var ry=["#f7e0d0","#efc9b0","#e6b898","#d9a184","#c98f6d","#b87a5a","#a06246","#8a4f36","#6f3b28","#f2b6a0","#e8927c","#d96f63","#c25456","#f4c1ae","#e78f8a","#b46a6a","#a34e54","#c2185b","#8e2f47","#6d1f33","#d9556f","#e87c8f","#5c2e3c","#e8d5c0","#d4b48c","#b99770","#96714f","#6f4a30","#4c3326","#3b4a6b","#22333f","#2e5d4b","#543a6b","#7b3fa0","#ffffff","#19151c","#d32f2f","#e64a19","#fbc02d","#388e3c","#1976d2","#7b1fa2"],hr=Object.freeze([Object.freeze({key:"natural",name:"Natural",value:"#ffffff"}),Object.freeze({key:"porcelain",name:"Porcelain",value:"#ffe9db"}),Object.freeze({key:"fair",name:"Fair",value:"#f8d9c4"}),Object.freeze({key:"light",name:"Light",value:"#f0c8ab"}),Object.freeze({key:"medium",name:"Medium",value:"#dba882"}),Object.freeze({key:"tan",name:"Tan",value:"#c08b60"}),Object.freeze({key:"deep",name:"Deep",value:"#9c6a45"}),Object.freeze({key:"rich",name:"Rich",value:"#784a2c"})]),$i="natural";function Ih(){if(!In)return;let n=hr.find(e=>e.key===$i)||hr[0];In.traverse(e=>{if(!e.isMesh)return;let t=Array.isArray(e.material)?e.material:[e.material];for(let i of t)i?.color?.isColor&&i.color.set(n.value)})}var Lh=Object.freeze([Object.freeze({key:"studio",temp:5500,az:25,el:45,intensity:1}),Object.freeze({key:"vanity",temp:4700,az:0,el:22,intensity:1.05}),Object.freeze({key:"overcast",temp:6500,az:10,el:70,intensity:.9}),Object.freeze({key:"sun",temp:5300,az:40,el:55,intensity:1.15}),Object.freeze({key:"golden",temp:3400,az:310,el:12,intensity:1}),Object.freeze({key:"sunset",temp:2700,az:325,el:8,intensity:.95}),Object.freeze({key:"moon",temp:8600,az:15,el:40,intensity:.5}),Object.freeze({key:"backstage",temp:4e3,az:335,el:60,intensity:1.25}),Object.freeze({key:"candle",temp:1900,az:290,el:18,intensity:.8}),Object.freeze({key:"ring",temp:5200,az:0,el:12,intensity:1.05})]),Je={preset:"studio",temp:5500,az:25,el:45,intensity:1};function oh(n){let e=Oe(n,1e3,4e4)/100,t,i,s;return e<=66?(t=255,i=99.4708025861*Math.log(e)-161.1195681661):(t=329.698727446*Math.pow(e-60,-.1332047592),i=288.1221695283*Math.pow(e-60,-.0755148492)),e>=66?s=255:e<=19?s=0:s=138.5177312231*Math.log(e-10)-305.0447927307,new Pe().setRGB(Oe(t,0,255)/255,Oe(i,0,255)/255,Oe(s,0,255)/255).convertSRGBToLinear()}function lh(n,e){let t=ir.degToRad(n),i=ir.degToRad(e);return new F(Math.sin(t)*Math.cos(i),Math.sin(i),Math.cos(t)*Math.cos(i)).multiplyScalar(6)}function Af(){if(!cr)return;let n=oh(Je.temp),e=.9+.55*Oe(Je.intensity,0,2);cr.color.copy(n),cr.intensity=3*e,cr.position.copy(lh(Je.az,Je.el)),ca.color.copy(oh(ir.lerp(Je.temp,6800,.55))),ca.intensity=1.15*e,ca.position.copy(lh(Je.az+150,Math.max(14,Je.el*.5))),ha.color.copy(oh(Oe(Je.temp+900,1200,12e3))),ha.intensity=1.5*e,ha.position.copy(lh(Je.az+180,Math.min(80,Je.el+18))),Wf.intensity=1.7*e,st()}function lr(n,{fromPreset:e=!1}={}){Je.temp=Oe(Math.round(n.temp??Je.temp),1500,9500),Je.az=Oe(Math.round(n.az??Je.az),0,360)%360,Je.el=Oe(Math.round(n.el??Je.el),3,85),Je.intensity=Oe(Math.round((n.intensity??Je.intensity)*100)/100,.1,2),Je.preset=e?n.preset:Lh.find(t=>t.key===Je.preset&&t.temp===Je.temp&&t.az===Je.az&&t.el===Je.el&&Math.abs(t.intensity-Je.intensity)<.011)?.key||"custom",Fh(),Af(),jt(),un()}function ay(n){let e=Lh.find(t=>t.key===n);e&&lr({preset:n,temp:e.temp,az:e.az,el:e.el,intensity:e.intensity},{fromPreset:!0})}var Dh=Object.freeze([Object.freeze({key:"default"}),Object.freeze({key:"soft",mask:"soft",aspect:1}),Object.freeze({key:"hard",mask:"hard",aspect:1}),Object.freeze({key:"flat",mask:"soft",aspect:1.3}),Object.freeze({key:"air",mask:"air",aspect:1}),Object.freeze({key:"speckle",mask:"powder",aspect:1}),Object.freeze({key:"porous",mask:"sponge",aspect:1}),Object.freeze({key:"hair",mask:"hair",aspect:1.35}),Object.freeze({key:"star",mask:"star",aspect:1}),Object.freeze({key:"rosette",mask:"rosette",aspect:1})]),Xn=null;function Cf(){return Xn&&Xn!=="default"&&Dh.find(n=>n.key===Xn)||null}function Rf(n){return Cf()?.aspect||n.aspect||1}var gn="en",Ss="system",_n="right",vn="middle",wi=.008,Zi=.004,ma="performance",qi="low",ga=!0,_a=!0,rn=0,Pf=0,Dt=!1,Mi="#c72f58",si=24,Al=1,Si=.72,Cl=.75,Yn,Lt,Gt,oa,dt,Dn,Ji,In=null,da=[],qn=[],Xi=null,Kt=!1,we=[],Ke=0,ur=1,Me=null,Vt=null,bi=!1,Rl=!1,Pl=!1,Jt="idle",Ms=null,Pn=null,xa=!1,Ht=[],la=!1,wt=new F(0,0,0),Ln=4.4,Sh=null,ch=!1,cf=null,bh="all",If=1,hh=new Map,ht={raycastMs:0,raycasts:0,decalMs:0,decals:0,pointerMs:0,pointerSamples:0,renderFrames:0,lastFpsAt:performance.now(),lastFrameCount:0},wl=null,Eh=new F(0,0,1),sa=new F,uh=new pn,hf=new pn,dh=new at,uf=new at,df=new Be,ff=new Be,oy=new Float64Array(96),ly=new Float64Array(96),cy=new F,hy=new F,pf=new pn,mf=new pn;function Ie(n){return Yi[gn]?.[n]??Yi.en[n]??n}function Ki(n){return Yi[gn].toolNames[n]||Yi.en.toolNames[n]}function Lf(n){return Yi[gn].toolTips[n]||Yi.en.toolTips[n]}function jt(){try{localStorage.setItem("grimstudio-settings",JSON.stringify({language:gn,themePreference:Ss,symmetryEnabled:Dt,cameraRotateButton:_n,cameraPanButton:vn,rotationSensitivity:wi,zoomSensitivity:Zi,performanceMode:ma,graphicsQuality:qi,adaptivePerformance:ga,memoryOptimization:_a,skinTone:$i,lighting:Je,brushShape:Xn,accentColor:ai}))}catch{}}function uy(){try{let n=JSON.parse(localStorage.getItem("grimstudio-settings")||"{}");(n.language==="ru"||n.language==="en")&&(gn=n.language),["system","dark","light"].includes(n.themePreference)&&(Ss=n.themePreference),Dt=n.symmetryEnabled===!0,["right","middle","space-left"].includes(n.cameraRotateButton)&&(_n=n.cameraRotateButton),["middle","shift-right","disabled"].includes(n.cameraPanButton)&&(vn=n.cameraPanButton),Number.isFinite(n.rotationSensitivity)&&(wi=Oe(n.rotationSensitivity,.002,.02)),Number.isFinite(n.zoomSensitivity)&&(Zi=Oe(n.zoomSensitivity,.001,.012)),["performance","balanced","quality"].includes(n.performanceMode)&&(ma=n.performanceMode),["low","balanced","high"].includes(n.graphicsQuality)&&(qi=n.graphicsQuality),typeof n.adaptivePerformance=="boolean"&&(ga=n.adaptivePerformance),typeof n.memoryOptimization=="boolean"&&(_a=n.memoryOptimization),hr.some(e=>e.key===n.skinTone)&&($i=n.skinTone),n.lighting&&typeof n.lighting=="object"&&(Je.temp=Oe(Math.round(Number(n.lighting.temp)||5500),1500,9500),Je.az=Oe(Math.round(Number(n.lighting.az)||25),0,360)%360,Je.el=Oe(Math.round(Number(n.lighting.el)||45),3,85),Je.intensity=Oe(Number(n.lighting.intensity)||1,.1,2),Je.preset=n.lighting.preset||"custom"),typeof n.brushShape=="string"&&(Xn=n.brushShape),typeof n.accentColor=="string"&&/^#[0-9a-f]{6}$/i.test(n.accentColor)&&(ai=n.accentColor.toLowerCase())}catch{}}function Il(){let n=window.matchMedia?.("(prefers-color-scheme: dark)").matches??!0,e=Ss==="system"?n?"dark":"light":Ss;document.documentElement.dataset.theme=e,document.documentElement.style.colorScheme=e,Yn&&(Yn.background=new Pe(e==="dark"?"#1b1820":"#dedbe5"))}var dy=Object.freeze([Object.freeze({key:"brass",value:"#c9a86a"}),Object.freeze({key:"teal",value:"#5fb8a5"}),Object.freeze({key:"sky",value:"#6c8cff"}),Object.freeze({key:"violet",value:"#a58aff"}),Object.freeze({key:"rose",value:"#e08a9b"}),Object.freeze({key:"lime",value:"#8fbf6a"}),Object.freeze({key:"amber",value:"#e0a13f"}),Object.freeze({key:"crimson",value:"#e06a6a"})]),ai="";function Df(){let n=document.documentElement.style;if(!/^#[0-9a-f]{6}$/i.test(ai||"")){for(let o of["--accent","--accent-strong","--accent-soft","--accent-line","--accent-contrast"])n.removeProperty(o);return}let e=ai.toLowerCase(),t=parseInt(e.slice(1,3),16),i=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16),r=(.2126*t+.7152*i+.0722*s)/255,a=o=>r>.6?Math.round(o*.72):Math.round(o+(255-o)*.28);n.setProperty("--accent",e),n.setProperty("--accent-strong",`rgb(${a(t)},${a(i)},${a(s)})`),n.setProperty("--accent-soft",`rgba(${t},${i},${s},.13)`),n.setProperty("--accent-line",`rgba(${t},${i},${s},.45)`),n.setProperty("--accent-contrast",r>.62?"#181510":"#ffffff")}function Nh(n){ai=/^#[0-9a-f]{6}$/i.test(n||"")?n.toLowerCase():"",Df(),Uh(),jt()}function Nf(){let n=U("#accentPresets");if(n){n.replaceChildren();for(let e of dy){let t=Ie(`accent${e.key[0].toUpperCase()}${e.key.slice(1)}`),i=document.createElement("button");i.type="button",i.className="accent-swatch",i.style.background=e.value,i.title=t,i.setAttribute("aria-label",`${Ie("accentColor")}: ${t}`),i.dataset.accent=e.value,ai&&ai.toLowerCase()===e.value&&i.classList.add("active"),n.appendChild(i)}}}function Uh(){let n=U("#accentColor");n&&(n.value=ai||"#c9a86a"),U("#accentPresets")?.querySelectorAll("button[data-accent]").forEach(e=>e.classList.toggle("active",!!ai&&e.dataset.accent===ai))}U("#accentPresets")?.addEventListener("click",n=>{let e=n.target.closest("button[data-accent]");e&&Nh(e.dataset.accent)});U("#accentColor")?.addEventListener("input",n=>Nh(n.target.value));U("#accentReset")?.addEventListener("click",()=>Nh(""));function Uf(){document.documentElement.lang=gn,document.querySelectorAll("[data-i18n]").forEach(n=>{let e=n.dataset.i18n;Yi[gn][e]&&(n.textContent=Yi[gn][e])});for(let n of U("#themeSelect").options)n.textContent=Ie(n.value);dr(),sn(),U("#toolSettingsLabel").textContent=`${Ki(rn).toUpperCase()} ${Ie("brushSettings")}`,Ff(),Fh(),Nl(),Nf(),Uh()}window.matchMedia?.("(prefers-color-scheme: dark)").addEventListener?.("change",()=>{Ss==="system"&&Il()});uy();_n==="middle"&&vn==="middle"&&(vn="disabled");U("#languageSelect").value=gn;U("#themeSelect").value=Ss;U("#languageSelect").addEventListener("change",n=>{gn=n.target.value==="ru"?"ru":"en",jt(),Uf()});U("#themeSelect").addEventListener("change",n=>{Ss=["system","dark","light"].includes(n.target.value)?n.target.value:"system",Il(),jt()});U("#symmetryToggle").checked=Dt;U("#symmetryToggle").addEventListener("change",n=>{Dt=n.target.checked,jt(),yt(Ie(Dt?"symmetryOn":"symmetryOff"))});U("#cameraRotateSelect").value=_n;U("#cameraPanSelect").value=vn;U("#rotationSensitivity").value=String(Math.round(wi*1e3));U("#zoomSensitivity").value=String(Math.round(Zi*1e3));U("#performanceMode").value=ma;U("#graphicsQuality").value=qi;U("#adaptivePerformance").checked=ga;U("#memoryOptimization").checked=_a;U("#cameraRotateSelect").addEventListener("change",n=>{_n=["right","middle","space-left"].includes(n.target.value)?n.target.value:"right",_n==="middle"&&vn==="middle"&&(vn="disabled"),U("#cameraPanSelect").value=vn,jt(),es()});U("#cameraPanSelect").addEventListener("change",n=>{let e=["middle","shift-right","disabled"].includes(n.target.value)?n.target.value:"middle";_n==="middle"&&e==="middle"?(vn="disabled",U("#cameraPanSelect").value="disabled"):vn=e,jt(),es()});U("#rotationSensitivity").addEventListener("input",n=>{wi=Oe(Number(n.target.value)/1e3,.002,.02),U("#rotationSensitivityValue").textContent=`${Math.round(wi*1e3)}\u2030`,jt()});U("#zoomSensitivity").addEventListener("input",n=>{Zi=Oe(Number(n.target.value)/1e3,.001,.012),U("#zoomSensitivityValue").textContent=`${Math.round(Zi*1e3)}\u2030`,jt()});U("#performanceMode").addEventListener("change",n=>{ma=["performance","balanced","quality"].includes(n.target.value)?n.target.value:"balanced",jt()});function fy(n){qi=["low","balanced","high"].includes(n)?n:"low",Wi=1;let e={low:.72,balanced:.9,high:1.15}[qi];Gt?.setPixelRatio(Math.min((window.devicePixelRatio||1)*e,qi==="high"?1.5:1)),Ul(),jt()}function py(n){!ga||qi==="low"||!Gt||(n>42?(ar++,ia=0):n<24?(ia++,ar=0):(ar=Math.max(0,ar-1),ia=0),ar>=8&&Wi>.65?(Wi=Math.max(.65,Wi-.1),Gt.setPixelRatio(Math.max(.5,Gt.getPixelRatio()-.1)),ar=0):ia>=40&&Wi<1&&(Wi=Math.min(1,Wi+.05),Gt.setPixelRatio(Math.min((window.devicePixelRatio||1)*({balanced:.9,high:1.15}[qi]||.9)*Wi,1.5)),ia=0))}U("#resetCameraControls").addEventListener("click",()=>{_n="right",vn="middle",wi=.008,Zi=.004,U("#cameraRotateSelect").value=_n,U("#cameraPanSelect").value=vn,U("#rotationSensitivity").value="8",U("#zoomSensitivity").value="4",U("#rotationSensitivityValue").textContent="8\u2030",U("#zoomSensitivityValue").textContent="4\u2030",jt(),es()});U("#rotationSensitivityValue").textContent=`${Math.round(wi*1e3)}\u2030`;U("#zoomSensitivityValue").textContent=`${Math.round(Zi*1e3)}\u2030`;U("#performanceDiagnosticsToggle")?.addEventListener("click",jy);function Ll(){let n=U("#settingsDialog");n&&(n.hidden=!n.hidden,U("#settingsToggle")?.setAttribute("aria-pressed",String(!n.hidden)))}U("#settingsToggle")?.addEventListener("click",Ll);U("#settingsClose")?.addEventListener("click",Ll);U("#settingsDialog")?.addEventListener("click",n=>{n.target===n.currentTarget&&Ll()});Il();var wh=U("#toolGrid");function dr(){wh.replaceChildren(),Tt.forEach((n,e)=>{if(bh!=="all"&&n.category!==bh)return;let t=document.createElement("button");t.type="button",t.className=`tool-button${e===rn?" active":""}${n.key==="symmetry"&&Dt?" toggled":""}`,t.dataset.toolIndex=String(e),t.title=Lf(e),t.setAttribute("aria-label",Ki(e)),t.setAttribute("aria-pressed",String(e===rn||n.key==="symmetry"&&Dt)),t.innerHTML=`<span class="tool-icon">${Tf(n.icon,18)}</span><span class="tool-name">${Ki(e)}</span>`,wh.appendChild(t)}),U("#toolCount").textContent=String(Tt.length),my()}function my(){U("#toolTip").innerHTML=`<strong>${Ki(rn)}</strong><p>${Lf(rn)}</p>`}function fa(n){if(!Number.isInteger(n)||n<0||n>=Tt.length)return;let e=Tt[n];if(e.key==="symmetry"){Dt=!Dt,U("#symmetryToggle").checked=Dt,jt(),dr(),yt(Ie(Dt?"symmetryOn":"symmetryOff"));return}rn=n,e.action||(Pf=n),dr(),U("#toolSettingsLabel").textContent=`${Ki(n).toUpperCase()} ${Ie("brushSettings")}`,U("#status").textContent=`${Ie("toolStatus")}: ${Ki(n)}`,U("#stage").dataset.activeTool=e.key,Qi(),st()}U("#toolGrid").addEventListener("click",n=>{let e=n.target.closest("button[data-tool-index]");e&&wh.contains(e)&&fa(Number(e.dataset.toolIndex))});U("#toolFilters").addEventListener("click",n=>{let e=n.target.closest("button[data-category]");e&&(bh=e.dataset.category,U("#toolFilters").querySelectorAll("button").forEach(t=>t.classList.toggle("active",t===e)),dr())});function yt(n){let e=U("#toast");e.textContent=n,e.classList.add("show"),clearTimeout(cf),cf=setTimeout(()=>e.classList.remove("show"),2400)}function gy(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Dl(n){/^#[0-9a-f]{6}$/i.test(n)&&(Mi=n.toLowerCase(),U("#colorPicker").value=Mi,U("#colorHex").textContent=Mi.toUpperCase(),un())}U("#colorPicker").addEventListener("input",n=>Dl(n.target.value));ry.forEach(n=>{let e=document.createElement("button");e.type="button",e.className="swatch",e.style.backgroundColor=n,e.title=n,e.setAttribute("aria-label",`Select ${n}`),e.addEventListener("click",()=>Dl(n)),U("#swatches").appendChild(e)});U("#size").addEventListener("input",n=>{si=Number(n.target.value),U("#sizeReadout").textContent=`${si} px`});U("#opacity").addEventListener("input",n=>{Al=Number(n.target.value)/100,U("#opacityReadout").textContent=`${n.target.value}%`});U("#softness").addEventListener("input",n=>{Si=Number(n.target.value)/100,U("#softReadout").textContent=`${n.target.value}%`});U("#flow").addEventListener("input",n=>{Cl=Number(n.target.value)/100,U("#flowReadout").textContent=`${n.target.value}%`});U("#addLayer").addEventListener("click",()=>kf());U("#duplicateLayer").addEventListener("click",()=>Cy());U("#clearLayer").addEventListener("click",()=>Iy());U("#layerUp").addEventListener("click",()=>Gf(1));U("#layerDown").addEventListener("click",()=>Gf(-1));U("#renameLayer").addEventListener("click",()=>Ry());U("#deleteLayer").addEventListener("click",()=>Py());U("#layerOpacity").addEventListener("input",n=>{let e=we[Ke];e&&(e.opacity=Number(n.target.value)/100,U("#layerOpacityReadout").textContent=`${n.target.value}%`,e.group.children.forEach(t=>{t.material&&(t.material.opacity=(t.userData.baseOpacity??1)*e.opacity)}),un(),st())});U("#projectName").addEventListener("input",un);U("#newBtn").addEventListener("click",nv);U("#openBtn").addEventListener("click",rp);U("#saveBtn").addEventListener("click",ip);U("#exportBtn").addEventListener("click",op);U("#undoBtn").addEventListener("click",Vf);U("#redoBtn").addEventListener("click",Hf);U("#frontBtn").addEventListener("click",()=>ri(0,Math.PI,4.4));U("#leftBtn").addEventListener("click",()=>ri(0,Math.PI/2,4.4));U("#rightBtn").addEventListener("click",()=>ri(0,Math.PI*1.5,4.4));U("#backBtn").addEventListener("click",()=>ri(0,0,4.4));U("#toggleGrid").addEventListener("click",()=>Ji.classList.toggle("grid-on"));U("#fullscreenBtn").addEventListener("click",()=>Ji.requestFullscreen?.());U("#retryModel").addEventListener("click",()=>Fl(!0));U("#headModelSelect").addEventListener("change",n=>ky(n.target.value));var fh=U("#skinTones");fh&&hr.forEach(n=>{let e=document.createElement("button");e.type="button",e.className=`skin-tone${n.key===$i?" active":""}`,e.title=n.name,e.setAttribute("aria-label",`Skin tone: ${n.name}`),e.style.background=n.key==="natural"?"linear-gradient(135deg,#f3c9ad,#e5a883)":n.value,e.addEventListener("click",()=>{$i=n.key,Ih(),jt(),un(),st(),fh.querySelectorAll("button").forEach(t=>t.classList.toggle("active",t===e))}),fh.appendChild(e)});U("#graphicsQuality").addEventListener("change",n=>fy(n.target.value));U("#adaptivePerformance").addEventListener("change",n=>{ga=n.target.checked,jt()});U("#memoryOptimization").addEventListener("change",n=>{_a=n.target.checked,jt()});function Ff(){let n=U("#lightingPreset");if(!n)return;n.replaceChildren();for(let t of Lh){let i=document.createElement("option");i.value=t.key,i.textContent=Ie(`lp${t.key[0].toUpperCase()}${t.key.slice(1)}`),n.appendChild(i)}let e=document.createElement("option");e.value="custom",e.textContent=Ie("lpCustom"),n.appendChild(e)}function Fh(){U("#lightTemp").value=String(Je.temp),U("#lightTempReadout").textContent=`${Je.temp} K`,U("#lightAzimuth").value=String(Je.az),U("#lightAzimuthReadout").textContent=`${Je.az}\xB0`,U("#lightElevation").value=String(Je.el),U("#lightElevationReadout").textContent=`${Je.el}\xB0`,U("#lightIntensity").value=String(Math.round(Je.intensity*100)),U("#lightIntensityReadout").textContent=`${Math.round(Je.intensity*100)}%`,U("#lightingPreset").value=Je.preset}function _y(){Ff(),U("#lightingPreset").addEventListener("change",n=>ay(n.target.value)),U("#lightTemp").addEventListener("input",n=>lr({temp:Number(n.target.value)})),U("#lightAzimuth").addEventListener("input",n=>lr({az:Number(n.target.value)})),U("#lightElevation").addEventListener("input",n=>lr({el:Number(n.target.value)})),U("#lightIntensity").addEventListener("input",n=>lr({intensity:Number(n.target.value)/100}))}function Nl(){let n=U("#brushShapeGrid");if(n){n.replaceChildren();for(let e of Dh){let t=document.createElement("button");t.type="button",t.className=`shape-button${Xn===e.key||e.key==="default"&&!Xn?" active":""}`,t.dataset.shapeKey=e.key,t.textContent=Ie(`shape${e.key[0].toUpperCase()}${e.key.slice(1)}`),t.title=Ie(`shape${e.key[0].toUpperCase()}${e.key.slice(1)}`),n.appendChild(t)}}}U("#brushShapeGrid")?.addEventListener("click",n=>{let e=n.target.closest("button[data-shape-key]");e&&(Xn=e.dataset.shapeKey==="default"?null:e.dataset.shapeKey,jt(),Nl(),Qi(),yt(`${Ie("brushShape")}: ${e.textContent}`))});function Qi(){let n=U("#brushPreview"),e=U("#brushPreviewIcon");if(!n||!e)return;let t=Tt[rn];if(t.action&&t.key!=="eraser"){n.hidden=!0,e.hidden=!1,e.innerHTML=Tf(t.icon,40);return}n.hidden=!1,e.hidden=!0;let i=n.width,s=n.getContext("2d");s.clearRect(0,0,i,i);let r=kh(t.key,t.key==="eraser"?.5:Si).image;s.drawImage(r,0,0,i,i),s.globalCompositeOperation="source-in",s.fillStyle=t.key==="eraser"?"#e5725f":Mi,s.fillRect(0,0,i,i),s.globalCompositeOperation="source-over",s.strokeStyle="rgba(128,128,128,.55)",s.setLineDash([3,3]),s.lineWidth=1,s.beginPath(),s.arc(i/2,i/2,i/2-1,0,Math.PI*2),s.stroke(),s.setLineDash([])}U("#size")?.addEventListener("input",Qi);U("#softness")?.addEventListener("input",Qi);U("#opacity")?.addEventListener("input",Qi);U("#colorPicker")?.addEventListener("input",Qi);var He={stamp:null,ring:null,mirror:null,stampMaterial:null,ringMaterial:null,last:null,lastRadius:-1,signature:""},Gi=null;function xy(){if(Gi)return Gi;let n=128,e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.78,"rgba(255,255,255,0)"),i.addColorStop(.88,"rgba(255,255,255,1)"),i.addColorStop(.96,"rgba(255,255,255,.25)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,n,n),Gi=new Bi(e),Gi.colorSpace=ut,Gi.generateMipmaps=!1,Gi.minFilter=Ct,Gi.magFilter=Ct,Gi}function yy(){if(!He.stamp){He.ringMaterial=new hs({map:xy(),color:1711136,transparent:!0,opacity:.85,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-3,side:nn,toneMapped:!1}),He.stampMaterial=new hs({transparent:!0,opacity:.55,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-4,side:nn,toneMapped:!1}),He.ring=new Ot(new Ft,He.ringMaterial),He.stamp=new Ot(new Ft,He.stampMaterial),He.mirror=new Ot(new Ft,He.ringMaterial);for(let n of[He.ring,He.stamp,He.mirror])n.frustumCulled=!1,n.visible=!1;He.ring.renderOrder=999997,He.stamp.renderOrder=999998,He.mirror.renderOrder=999999,dt.add(He.ring),dt.add(He.stamp),dt.add(He.mirror)}}function vy(){let n=Tt[rn];return`${rn}|${Xn}|${Math.round((n.key==="eraser"?.5:Si)*100)}|${Mi}`}function My(){let n=Tt[rn];He.stampMaterial.map=kh(n.key,n.key==="eraser"?.5:Si),n.key==="eraser"?(He.stampMaterial.color.set("#e5725f"),He.stampMaterial.opacity=.3):(He.stampMaterial.color.set(Mi),He.stampMaterial.opacity=.55),He.stampMaterial.needsUpdate=!0}function ra(){He.stamp&&(He.ring.visible=!1,He.stamp.visible=!1,He.mirror.visible=!1,He.last=null,st())}function Of(n){if(!Kt||!n){ra();return}yy();let e=Tt[rn];if(e.action&&e.key!=="eraser"){ra();return}let t=qn[n.meshIndex];if(!t){ra();return}let i=vy();i!==He.signature&&(He.signature=i,My());let s=Ei(n,e),r=He.last;if(r&&He.lastRadius===s){let c=n.point[0]-r[0],u=n.point[1]-r[1],d=n.point[2]-r[2];if(c*c+u*u+d*d<s*s*.015)return}let a={meshIndex:n.meshIndex,p:[...n.point],n:[...n.normal],r:s,aspect:Rf(e),angle:0,c:[1,1,1]},o=pa(t,a);if(!o){ra();return}let l=He.ring.geometry;if(He.ring.geometry=o,He.stamp.geometry=o,l!==o&&l.dispose(),He.ring.visible=!0,He.stamp.visible=!0,He.last=[...n.point],He.lastRadius=s,Dt){let c={...a,p:[2*t.bounds.center[0]-a.p[0],a.p[1],a.p[2]],n:[-a.n[0],a.n[1],a.n[2]]},u=pa(t,c),d=He.mirror.geometry;u?(He.mirror.geometry=u,He.mirror.visible=!0):He.mirror.visible=!1,d!==u&&d.dispose()}else He.mirror.visible=!1;st()}function ji(n,e=null){let t=new An;t.name=`makeup-layer-${ur}`;let i={id:ur++,name:n,group:t,visible:!0,opacity:1,locked:!1,strokes:[],legacyPaint:e,legacyTexture:null,history:[],historyIndex:-1,geometryBuildToken:0};return Kt&&dt.add(t),mr(i),i}function fr(n){let e=new Set,t=new Set;for(let i of[...n.children])n.remove(i),!i.userData.sharedGeometry&&i.geometry&&e.add(i.geometry),Array.isArray(i.material)?i.material.forEach(s=>t.add(s)):i.material&&t.add(i.material);e.forEach(i=>i.dispose()),t.forEach(i=>i.dispose())}function Bf(n){if(!n.legacyPaint||!Kt||n.legacyTexture)return;let e=new Image;e.onload=()=>{let t=new $t(e);t.colorSpace=ut,t.flipY=!0,t.needsUpdate=!0,n.legacyTexture=t;for(let i of da){let s=new Qn({map:t,transparent:!0,opacity:n.opacity,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-2,side:nn,shininess:6,specular:new Pe(.05,.05,.05),toneMapped:!1}),r=new Ot(i.geometry,s);dt.matrixWorld.clone().invert().multiply(i.matrixWorld).decompose(r.position,r.quaternion,r.scale),r.userData.sharedGeometry=!0,r.frustumCulled=!1,r.renderOrder=10+we.indexOf(n)*100,r.userData.baseOpacity=1,r.name=`legacy-uv-${n.id}`,n.group.add(r)}st()},e.onerror=()=>yt(gn==="ru"?"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u0430\u0440\u044B\u0439 \u0441\u043B\u043E\u0439 \u0433\u0440\u0438\u043C\u0430":"Could not load legacy paint layer"),e.src=n.legacyPaint}async function pr(n){if(!Kt)return;n.group.parent!==dt&&dt.add(n.group),fr(n.group),n.legacyTexture?.dispose(),n.legacyTexture=null,n.group.visible=n.visible;let e=++n.geometryBuildToken;for(let t of n.strokes){if(n.geometryBuildToken!==e||!we.includes(n))break;zh(n,t),await ys()}Bf(n),st()}function kf(n){if(we.length>=ua)return yt(`${Ie("layerLimit")} (${ua})`);let e=ji(n||`${Ie("layerName")} ${ur}`);we.push(e),Kt&&pr(e),Ke=we.length-1,sn(),un(),yt(Ie("layerAdded"))}function Tl(n){return{id:n.id,tool:n.tool,color:n.color,opacity:n.opacity,softness:n.softness,flow:n.flow,dabs:n.dabs.map(e=>({...e,p:[...e.p],n:[...e.n],c:e.c?[...e.c]:void 0}))}}function Sy(n){return n.strokes.slice()}function mr(n){n.history=n.history.slice(0,n.historyIndex+1),n.history.push(Sy(n));let e=_a?50:ny;n.history.length>e&&n.history.shift(),n.historyIndex=n.history.length-1,n===we[Ke]&&Oh()}function by(n,e){let t=n.getContext("2d"),i=n.width,s=n.height;if(t.clearRect(0,0,i,s),!qn.length)return;let r=qn[0].bounds,a=Math.max(r.max[0]-r.min[0],.001),o=Math.max(r.max[1]-r.min[1],.001),l=0,c=[];for(let d of e.strokes){l+=d.dabs.length;for(let h of d.dabs)c.push({stroke:d,dab:h})}let u=Math.max(1,Math.ceil(c.length/600));for(let d=0;d<c.length;d+=u){let{stroke:h,dab:f}=c[d],g=(1-(f.p[0]-r.min[0])/a)*i,x=(1-(f.p[1]-r.min[1])/o)*s,p=Math.max(1.5,Math.min(9,f.r/a*i*2.2));t.globalAlpha=Oe((h.opacity??.8)*.9,.15,1),t.fillStyle=f.css||h.color,t.beginPath(),t.arc(g,x,p,0,Math.PI*2),t.fill()}t.globalAlpha=1}var Ey='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.8 12S6.2 6.8 12 6.8 21.2 12 21.2 12 18 17.2 12 17.2 2.8 12 2.8 12z"/><circle cx="12" cy="12" r="2.6"/></svg>',wy='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.8 12S6.2 6.8 12 6.8c1.8 0 3.4.6 4.8 1.4M21.2 12S18 17.2 12 17.2c-1.8 0-3.4-.6-4.8-1.4"/><path d="M4 20L20 4"/></svg>',Ty='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="11" width="12" height="9" rx="2"/><path d="M8.5 11V8a3.5 3.5 0 0 1 7 0v3"/></svg>',Ay='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="11" width="12" height="9" rx="2"/><path d="M8.5 11V8a3.5 3.5 0 0 1 6.8-1.2"/></svg>';function sn(){let n=U("#layers");n.replaceChildren(),we.forEach((t,i)=>{let s=document.createElement("div");s.className=`layer-item${i===Ke?" active":""}`,s.dataset.layerIndex=String(i),s.setAttribute("aria-selected",String(i===Ke)),s.innerHTML=`<canvas class="layer-thumb" width="36" height="36" aria-label="Layer preview"></canvas><button class="visibility" type="button" title="Toggle visibility" aria-label="Toggle visibility">${t.visible?Ey:wy}</button><span class="layer-title">${gy(t.name)}${t.legacyPaint?" \xB7 UV":""}</span><span class="layer-count">${t.strokes.length||""}</span><button class="lock" type="button" title="Toggle layer lock" aria-label="Toggle layer lock">${t.locked?Ty:Ay}</button><span class="layer-number">${i+1}</span>`,s.addEventListener("click",()=>{Ke=i,sn(),U("#status").textContent=t.name,st()}),s.querySelector(".visibility").addEventListener("click",r=>{r.stopPropagation(),t.visible=!t.visible,t.group.visible=t.visible,sn(),un(),st()}),s.querySelector(".lock").addEventListener("click",r=>{r.stopPropagation(),t.locked=!t.locked,sn(),un()}),n.appendChild(s),by(s.querySelector(".layer-thumb"),t),t.group.children.forEach((r,a)=>{r.renderOrder=20+i*1e4+a,r.material&&(r.material.opacity=(r.userData.baseOpacity??1)*t.opacity)})});let e=we[Ke];U("#layerOpacity").value=String(Math.round((e?.opacity??1)*100)),U("#layerOpacityReadout").textContent=`${U("#layerOpacity").value}%`,U("#deleteLayer").disabled=we.length<=1,U("#layerUp").disabled=Ke>=we.length-1,U("#layerDown").disabled=Ke<=0,Oh()}function Oh(){let n=we[Ke];U("#undoBtn").disabled=!n||n.historyIndex<=0,U("#redoBtn").disabled=!n||n.historyIndex>=n.history.length-1}function zf(n,e){e<0||e>=n.history.length||(n.historyIndex=e,n.strokes=n.history[e].slice(),$f(n),sn(),st())}function Vf(){let n=we[Ke];n&&n.historyIndex>0&&zf(n,n.historyIndex-1)}function Hf(){let n=we[Ke];n&&n.historyIndex<n.history.length-1&&zf(n,n.historyIndex+1)}async function Cy(){let n=we[Ke];if(!n)return yt(Ie("noLayer"));if(we.length>=ua)return yt(`${Ie("layerLimit")} (${ua})`);let e=ji(`${n.name} Copy`);e.visible=n.visible,e.opacity=n.opacity,e.locked=n.locked,e.legacyPaint=n.legacyPaint,e.strokes=n.strokes.map(Tl),we.splice(Ke+1,0,e),Ke++,Kt&&pr(e),mr(e),sn(),un(),st(),yt(Ie("layerDuplicated"))}function Gf(n){let e=Ke+n;e<0||e>=we.length||([we[Ke],we[e]]=[we[e],we[Ke]],Ke=e,sn(),un(),st())}function Ry(){let n=we[Ke];if(!n)return;let e=prompt(Ie("renamed"),n.name);e?.trim()&&(n.name=e.trim().slice(0,80),sn(),un())}function Py(){if(we.length<=1)return;let[n]=we.splice(Ke,1);dt.remove(n.group),fr(n.group),n.legacyTexture?.dispose(),Ke=Oe(Ke-1,0,we.length-1),sn(),un(),st(),yt(Ie("deleted"))}function Iy(){let n=we[Ke];if(!n)return yt(Ie("noLayer"));if(n.locked)return yt(Ie("locked"));confirm(`${Ie("clearConfirm")} '${n.name}'?`)&&(n.strokes=[],n.legacyPaint=null,$f(n),mr(n),un(),sn(),st())}Ji=U("#viewport");Dn=U("#stage");Yn=new Cr;Yn.background=new Pe("#1b1820");Lt=new fn(35,1,.1,100);Lt.position.set(0,0,Ln);try{Gt=new xl({canvas:Dn,antialias:!0,alpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"}),Gt.setPixelRatio(Math.min(window.devicePixelRatio||1,.85)),Gt.outputColorSpace=ut,Gt.toneMapping=Wr,Gt.toneMappingExposure=1.05}catch(n){console.error("WebGL initialization failed:",n),U("#loadState").textContent=Ie("graphicsError"),U("#loadingText").textContent=Ie("graphicsError"),U("#loadingSubtext").textContent=Ie("retryText"),U("#loading").classList.add("error")}var Wf=new Br(14604287,4862e3,2);Yn.add(Wf);var cr=new fs(16771036,3);cr.position.set(2.5,3.5,4);Yn.add(cr);var ca=new fs(12106495,1.3);ca.position.set(-3,1,2);Yn.add(ca);var ha=new fs(16777215,1.6);ha.position.set(0,2,-3);Yn.add(ha);Af();dt=new An;dt.rotation.y=Math.PI;Yn.add(dt);oa=new Hr;oa.params.Mesh.threshold=.005;function st(){!Gt||ch||(ch=!0,requestAnimationFrame(()=>{if(ch=!1,Gt){let n=performance.now();Gt.render(Yn,Lt);let e=performance.now()-n;ht.renderFrames++,py(e)}}))}function Ul(){if(!Gt)return;let n=Ji.clientWidth,e=Ji.clientHeight;n<1||e<1||(Gt.setSize(n,e,!1),Lt.aspect=n/e,Lt.updateProjectionMatrix(),st())}window.addEventListener("resize",Ul,{passive:!0});"ResizeObserver"in window&&new ResizeObserver(Ul).observe(Ji);Ul();function ri(n,e,t){dt.rotation.set(n,e,0),dt.position.set(0,0,0),wt.set(0,0,0),Ln=Oe(t,1.2,9),Lt.position.set(wt.x,wt.y,wt.z+Ln),Lt.lookAt(wt),bs(),st()}function Ly(n,e){let t=2*Ln*Math.tan(ir.degToRad(Lt.fov/2))/Math.max(1,Ji.clientHeight),i=new F(1,0,0).applyQuaternion(Lt.quaternion),s=new F(0,1,0).applyQuaternion(Lt.quaternion),r=i.multiplyScalar(-n*t).add(s.multiplyScalar(e*t));wt.add(r),Lt.position.add(r),Lt.lookAt(wt),bs(),st()}function aa(n,e=""){U("#loadState").textContent=n,e&&(U("#loadingSubtext").textContent=e)}function Dy(n){n.updateMatrixWorld(!0);let e=new Cn().setFromObject(n),t=e.getCenter(new F),i=e.getSize(new F),s=Math.max(i.x,i.y,i.z);if(!Number.isFinite(s)||s<=0)throw new Error("Invalid model dimensions");let r=2.35/s;n.rotation.set(0,Math.PI,0);let a=t.clone().applyAxisAngle(new F(0,1,0),Math.PI);n.scale.setScalar(r),n.position.copy(a.multiplyScalar(-r)),n.updateMatrixWorld(!0)}function gf(n){of(n)}var ys=()=>new Promise(n=>setTimeout(n,0));function Ny(n,e,t,i){let s=1/(i[3]*n+i[7]*e+i[11]*t+i[15]||1);return[(i[0]*n+i[4]*e+i[8]*t+i[12])*s,(i[1]*n+i[5]*e+i[9]*t+i[13])*s,(i[2]*n+i[6]*e+i[10]*t+i[14])*s]}async function Uy(n){let e=n.geometry,t=e.attributes.position,i=e.index;if(!t)throw new Error(`Mesh ${n.name||"unnamed"} has no positions`);let r=dt.matrixWorld.clone().invert().multiply(n.matrixWorld),a=r.elements,o=t.count,l=new Float32Array(o*3),c=1/0,u=1/0,d=1/0,h=-1/0,f=-1/0,g=-1/0;for(let z=0;z<o;z++){let re=Ny(t.getX(z),t.getY(z),t.getZ(z),a),fe=z*3;l[fe]=re[0],l[fe+1]=re[1],l[fe+2]=re[2],c=Math.min(c,re[0]),u=Math.min(u,re[1]),d=Math.min(d,re[2]),h=Math.max(h,re[0]),f=Math.max(f,re[1]),g=Math.max(g,re[2]),z%32e3===0&&await ys()}let x=Math.max(h-c,.001),p=Math.max(f-u,.001),m=Math.max(g-d,.001),M=Math.max(x,p,m)/iy,T=Math.ceil(x/M)+1,b=Math.ceil(p/M)+1,A=Math.ceil(m/M)+1,E=T*b*A,_=Math.floor(i?i.count/3:t.count/3),S=new Uint32Array(_*3),P=new Uint32Array(E),C=(z,re,fe)=>Oe(Math.floor((z-re)/M),0,fe-1),D=(z,re)=>{let fe=i?i.getX(z*3):z*3,H=i?i.getX(z*3+1):z*3+1,ie=i?i.getX(z*3+2):z*3+2;S[z*3]=fe,S[z*3+1]=H,S[z*3+2]=ie;let ce=fe*3,ae=H*3,te=ie*3,be=Math.min(l[ce],l[ae],l[te]),je=Math.max(l[ce],l[ae],l[te]),Ee=Math.min(l[ce+1],l[ae+1],l[te+1]),Ve=Math.max(l[ce+1],l[ae+1],l[te+1]),Xe=Math.min(l[ce+2],l[ae+2],l[te+2]),Ne=Math.max(l[ce+2],l[ae+2],l[te+2]),gt=C(be,c,T),St=C(je,c,T),lt=C(Ee,u,b),it=C(Ve,u,b),Bt=C(Xe,d,A),vt=C(Ne,d,A);for(let Rt=Bt;Rt<=vt;Rt++)for(let Pt=lt;Pt<=it;Pt++)for(let It=gt;It<=St;It++)re(It+T*(Pt+b*Rt))},O=0;for(let z=0;z<_;z++)D(z,re=>{P[re]++,O++}),z%16e3===0&&await ys();let W=new Uint32Array(E+1);for(let z=0;z<E;z++)W[z+1]=W[z]+P[z];let I=W.slice(0,E),Y=new Uint32Array(O);for(let z=0;z<_;z++)D(z,re=>{Y[I[re]++]=z}),z%16e3===0&&await ys();let $=new Float32Array(_*3);for(let z=0;z<_;z++){let re=S[z*3]*3,fe=S[z*3+1]*3,H=S[z*3+2]*3,ie=l[fe]-l[re],ce=l[fe+1]-l[re+1],ae=l[fe+2]-l[re+2],te=l[H]-l[re],be=l[H+1]-l[re+1],je=l[H+2]-l[re+2],Ee=ce*je-ae*be,Ve=ae*te-ie*je,Xe=ie*be-ce*te,Ne=Math.hypot(Ee,Ve,Xe)||1,gt=z*3;$[gt]=Ee/Ne,$[gt+1]=Ve/Ne,$[gt+2]=Xe/Ne,z%5e4===0&&await ys()}let G=new Be().getNormalMatrix(r),ne=G.elements,X=new Float32Array(o*3),Q=e.attributes.normal;for(let z=0;z<o;z++){let re=Q?Q.getX(z):0,fe=Q?Q.getY(z):0,H=Q?Q.getZ(z):1,ie=ne[0]*re+ne[3]*fe+ne[6]*H,ce=ne[1]*re+ne[4]*fe+ne[7]*H,ae=ne[2]*re+ne[5]*fe+ne[8]*H,te=Math.hypot(ie,ce,ae)||1;X[z*3]=ie/te,X[z*3+1]=ce/te,X[z*3+2]=ae/te,z%32e3===0&&await ys()}return{mesh:n,points:l,triangles:S,faceNormals:$,vertexNormals:X,faceCount:_,gridMin:[c,u,d],gridMax:[c+T*M,u+b*M,d+A*M],cellSize:M,nx:T,ny:b,nz:A,offsets:W,faceIds:Y,faceMarks:new Uint32Array(_),mark:0,candidateFaces:[],normalMatrix:G,bounds:{min:[c,u,d],max:[h,f,g],center:[(c+h)/2,(u+f)/2,(d+g)/2],size:[x,p,m]}}}function Fy(n,e){let t=[n[0],n[1],n[2]].map(a=>({x:a[0],y:a[1]})),i=(a,o,l)=>(o.x-a.x)*(l.y-a.y)-(o.y-a.y)*(l.x-a.x),s=Math.sign(i(e[0],e[1],e[2]))||1;for(let a=0;a<3;a++){let o=e[a],l=e[(a+1)%3],c=t,u=[];if(!c.length)break;let d=c[c.length-1],h=s*i(o,l,d),f=h>=-1e-10;for(let g of c){let x=s*i(o,l,g),p=x>=-1e-10;if(p!==f){let m=h-x,M=Math.abs(m)<1e-14?0:h/m;u.push({x:d.x+(g.x-d.x)*M,y:d.y+(g.y-d.y)*M})}p&&u.push(g),d=g,h=x,f=p}t=u}if(t.length<3)return 0;let r=0;for(let a=0;a<t.length;a++){let o=t[a],l=t[(a+1)%t.length];r+=o.x*l.y-l.x*o.y}return Math.abs(r)*.5}function Oy(n,e=2e6){let t=n.attributes.uv,i=n.attributes.position,s=n.index;if(!t)return{available:!1,reason:"UV attribute missing"};let r=Math.floor(s?s.count/3:i.count/3),a=new Array(r),o=new Map,l=0,c=0,u=0,d=0,h=0,f=!1,g=128,x=p=>Oe(Math.floor(p*g),0,g-1);for(let p=0;p<r;p++){let m=[0,1,2].map(P=>s?s.getX(p*3+P):p*3+P),M=m.map(P=>[t.getX(P),t.getY(P)]);if(a[p]={ids:m,tri:M},M.some(P=>!Number.isFinite(P[0])||!Number.isFinite(P[1]))){l++;continue}if(M.some(P=>P[0]<0||P[0]>1||P[1]<0||P[1]>1)&&c++,Math.abs((M[1][0]-M[0][0])*(M[2][1]-M[0][1])-(M[1][1]-M[0][1])*(M[2][0]-M[0][0]))*.5<1e-12){u++;continue}let b=x(Math.min(...M.map(P=>P[0]))),A=x(Math.max(...M.map(P=>P[0]))),E=x(Math.min(...M.map(P=>P[1]))),_=x(Math.max(...M.map(P=>P[1]))),S=new Set;for(let P=E;P<=_;P++)for(let C=b;C<=A;C++){let D=o.get(P*g+C);if(D)for(let O of D)S.add(O)}for(let P of S){if(++d>e){f=!0;break}let C=a[P];!C||m.some(D=>C.ids.includes(D))||Fy(M,C.tri)>1e-9&&h++}if(f)break;for(let P=E;P<=_;P++)for(let C=b;C<=A;C++){let D=P*g+C,O=o.get(D);O||o.set(D,O=[]),O.push(p)}}return{available:!0,triangleCount:r,invalidUVTriangles:l,outOfRangeTriangles:c,degenerateUVTriangles:u,overlappingTrianglePairs:h,pairChecks:Math.min(d,e),analysisTruncated:f,note:"Diagnostic of the original asset UVs only. New makeup strokes use independent surface-projected decal coordinates and do not depend on these UVs."}}window.grimStudioDiagnostics=Object.freeze({...window.grimStudioDiagnostics,inspectUV:()=>da.map((n,e)=>({mesh:e,name:n.name||`mesh-${e}`,...Oy(n.geometry)})),getPerformanceSnapshot:()=>({...ht,overlayMeshes:we.reduce((n,e)=>n+e.group.children.length,0),storedDabs:we.reduce((n,e)=>n+e.strokes.reduce((t,i)=>t+i.dabs.length,0),0)})});async function Fl(n=!1){if(Gt){if(Xi)return Xi;if(!Kt)return U("#retryModel").hidden=!0,U("#loading").classList.remove("hide","error"),U("#loadingText").textContent=Ie("loading"),U("#loadingSubtext").textContent=Ie("preparing"),aa("Loading",Ie("preparing")),Xi=(async()=>{let e=performance.now(),t=null;try{let i=Mh.find(h=>h.id===vi)||Mh[0],[s,r]=await Promise.all([window.grim.readModelAsset(i.objFile),window.grim.readModelAsset(i.mtlFile)]);if(s?.error)throw new Error(s.error);if(r?.error)throw new Error(r.error);if(typeof s?.content!="string"||typeof r?.content!="string")throw new Error("Model asset response was invalid");let a=af({objText:s.content,mtlText:r.content,modelId:i.id}),o=a.root;t=o,o.traverse(h=>{h.isMesh&&(h.castShadow=!1,h.receiveShadow=!1,h.frustumCulled=!0)}),a.stats.missingTextureRefs.length&&console.warn(`[GrimStudio assets] ${i.name}: missing optional diffuse textures`,a.stats.missingTextureRefs),console.info(`[GrimStudio assets] ${i.name} validated`,a.stats),Dy(o),o.visible=!1,dt.add(o),dt.updateMatrixWorld(!0);let l=[];if(o.traverse(h=>{h.isMesh&&l.push(h)}),!l.length)throw new Error("No mesh objects found in OBJ model");let c=[];for(let h=0;h<l.length;h++)aa(Ie("surfaceIndex"),`${h+1}/${l.length}`),c.push(await Uy(l[h]));In&&(dt.remove(In),gf(In)),In=o,t=null,In.visible=!0,da=l,qn=c,Kt=!0,bs(),Ih(),we.forEach(h=>pr(h)),U("#loading").classList.add("hide");let u=((performance.now()-e)/1e3).toFixed(2),d=da.reduce((h,f)=>h+f.geometry.attributes.position.count,0);return aa(`${Ie("loaded")} \xB7 ${i.name} \xB7 ${u}s`,`${d.toLocaleString()} vertices \xB7 surface decal index ready`),U("#status").textContent=`${Ie("ready")} \xB7 ${u}s`,U("#headModelSelect").value=i.id,st(),!0}catch(i){return t&&t!==In&&(dt.remove(t),gf(t)),console.error("Model initialization failed:",i),Kt=!!In,Xi=null,aa(Ie("modelError"),i.message||"Unknown error"),U("#loadingText").textContent=Ie("modelError"),U("#loadingSubtext").textContent=i.message||Ie("retryText"),U("#loading").classList.remove("hide"),U("#loading").classList.add("error"),U("#retryModel").hidden=!1,!1}})(),Xi}}function Xf(){return{layers:we.map(n=>({name:n.name,visible:n.visible,opacity:n.opacity,locked:n.locked,strokes:n.strokes.slice(),legacyPaint:n.legacyPaint,history:n.history.map(e=>e.slice()),historyIndex:n.historyIndex})),activeLayer:Ke}}function By(){for(let n of we)dt.remove(n.group),fr(n.group),n.legacyTexture?.dispose();we=[],Ke=0}var ph=!1;function _f(n){if(By(),n){for(let e of n.layers){let t=ji(e.name,e.legacyPaint);t.visible=e.visible,t.opacity=e.opacity,t.locked=e.locked,t.strokes=e.strokes.map(Tl),Array.isArray(e.history)?(t.history=e.history.map(i=>i.map(Tl)),t.historyIndex=Number.isInteger(e.historyIndex)?e.historyIndex:t.history.length-1):(t.history=[],t.historyIndex=-1,mr(t)),we.push(t)}Ke=Oe(n.activeLayer||0,0,Math.max(0,we.length-1))}else we.push(ji(Ie("baseLayer")));sn()}async function ky(n){if(ph||!Mh.some(s=>s.id===n)||n===vi)return;ph=!0;let e=U("#headModelSelect");e.disabled=!0;let t=vi,i=Kt?Xf():vs.get(t);i&&vs.set(t,i),Jt!=="idle"&&es(),vi=n,Kt=!1,Xi=null,_f(vs.get(n)),e.value=n;try{if(!await Fl(!0)){vi=t,Xi=null,_f(vs.get(t)),e.value=t,Kt=!!In,In&&(In.visible=!0,we.forEach(r=>pr(r)),U("#loading").classList.add("hide"),U("#retryModel").hidden=!0,yt(gn==="ru"?"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u043C\u043E\u0434\u0435\u043B\u044C. \u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430.":"Could not load selected model. Previous model remains active."),st());return}un(),st()}finally{e.disabled=!1,ph=!1}}var xf=new We,mh=new at,yf=new F,vf=new F;var gh=null,Mf=0,Th=!0;function bs(){Th=!0}function Bh(n,e){if(!Kt||!da.length)return null;let t=performance.now(),i=t;(!gh||i-Mf>250)&&(gh=Dn.getBoundingClientRect(),Mf=i);let s=gh;if(!s.width||!s.height)return null;xf.set((n-s.left)/s.width*2-1,-((e-s.top)/s.height)*2+1),Th&&(dt.updateMatrixWorld(!0),Lt.updateMatrixWorld(!0),mh.copy(dt.matrixWorld).invert(),Th=!1),oa.setFromCamera(xf,Lt),yf.copy(oa.ray.origin).applyMatrix4(mh),vf.copy(oa.ray.direction).transformDirection(mh);let r=null,a=-1;for(let u=0;u<qn.length;u++){let d=lf(qn[u],yf,vf,r?.distance??1/0);d&&(!r||d.distance<r.distance)&&(r=d,a=u)}if(ht.raycastMs+=performance.now()-t,ht.raycasts++,!r)return null;let o=qn[a],l=r.faceIndex*3,c=[o.faceNormals[l],o.faceNormals[l+1],o.faceNormals[l+2]];return{point:[r.x,r.y,r.z],normal:c,meshIndex:a,faceIndex:r.faceIndex,distance:r.distance}}function qf(n){return Bh(n.clientX,n.clientY)}function zy(n,e,t){n.mark=n.mark+1>>>0,n.mark===0&&(n.faceMarks.fill(0),n.mark=1);let i=n.mark,s=Oe(Math.floor((e[0]-t-n.gridMin[0])/n.cellSize),0,n.nx-1),r=Oe(Math.floor((e[0]+t-n.gridMin[0])/n.cellSize),0,n.nx-1),a=Oe(Math.floor((e[1]-t-n.gridMin[1])/n.cellSize),0,n.ny-1),o=Oe(Math.floor((e[1]+t-n.gridMin[1])/n.cellSize),0,n.ny-1),l=Oe(Math.floor((e[2]-t-n.gridMin[2])/n.cellSize),0,n.nz-1),c=Oe(Math.floor((e[2]+t-n.gridMin[2])/n.cellSize),0,n.nz-1),u=n.candidateFaces;u.length=0;for(let d=l;d<=c;d++)for(let h=a;h<=o;h++)for(let f=s;f<=r;f++){let g=f+n.nx*(h+n.ny*d);for(let x=n.offsets[g];x<n.offsets[g+1];x++){let p=n.faceIds[x];n.faceMarks[p]!==i&&(n.faceMarks[p]=i,u.push(p))}}return u}function or(n,e,t,i,s,r){if(!e)return 0;let a=0,o=(e-1)*3,l=n[o+i]-s,c=r?l>=0:l<=0;for(let u=0;u<e;u++){let d=u*3,h=n[d+i]-s,f=r?h>=0:h<=0;if(f!==c){let g=n[d+i]-n[o+i],x=Math.abs(g)<1e-12?0:(s-n[o+i])/g;t[a++]=n[o]+(n[d]-n[o])*x,t[a++]=n[o+1]+(n[d+1]-n[o+1])*x,t[a++]=n[o+2]+(n[d+2]-n[o+2])*x}f&&(t[a++]=n[d],t[a++]=n[d+1],t[a++]=n[d+2]),o=d,c=f}return a/3}function pa(n,e){let t=performance.now(),i=e.p[0],s=e.p[1],r=e.p[2];sa.set(e.n[0],e.n[1],e.n[2]).normalize(),uh.setFromUnitVectors(Eh,sa),e.angle&&(hf.setFromAxisAngle(Eh,e.angle),uh.multiply(hf)),dh.makeRotationFromQuaternion(uh),uf.copy(dh).invert(),df.setFromMatrix4(dh),ff.setFromMatrix4(uf);let a=df.elements,o=ff.elements,l=e.r*2*e.aspect,c=e.r*2,u=Math.max(e.r*.9,.006),d=l/2,h=c/2,f=u/2,g=zy(n,e.p,Math.max(l,c)*.8+u),x=[],p=[],m=[],M=[],T=n.points,b=n.triangles,A=n.faceNormals,E=n.vertexNormals,_=e.c||[1,1,1],S=oy,P=ly,C=sa.x,D=sa.y,O=sa.z;for(let I=0;I<g.length;I++){let Y=g[I],$=Y*3,G=A[$],ne=A[$+1],X=A[$+2];if(G*C+ne*D+X*O<.1)continue;let Q=b[$]*3,z=b[$+1]*3,re=b[$+2]*3;for(let ae=0;ae<3;ae++){let te=ae===0?Q:ae===1?z:re,be=T[te]-i,je=T[te+1]-s,Ee=T[te+2]-r,Ve=ae*3;S[Ve]=o[0]*be+o[3]*je+o[6]*Ee,S[Ve+1]=o[1]*be+o[4]*je+o[7]*Ee,S[Ve+2]=o[2]*be+o[5]*je+o[8]*Ee}let fe=3,H=S,ie=P,ce;if(fe=or(H,fe,ie,0,-d,!0),ce=H,H=ie,ie=ce,!(fe<3)&&(fe=or(H,fe,ie,0,d,!1),ce=H,H=ie,ie=ce,!(fe<3)&&(fe=or(H,fe,ie,1,-h,!0),ce=H,H=ie,ie=ce,!(fe<3)&&(fe=or(H,fe,ie,1,h,!1),ce=H,H=ie,ie=ce,!(fe<3)&&(fe=or(H,fe,ie,2,-f,!0),ce=H,H=ie,ie=ce,!(fe<3)&&(fe=or(H,fe,ie,2,f,!1),ce=H,H=ie,ie=ce,!(fe<3)))))))for(let ae=1;ae<fe-1;ae++)for(let te=0;te<3;te++){let be=te===0?0:te===1?ae:ae+1,je=be*3,Ee=H[je],Ve=H[je+1],Xe=H[je+2],Ne=a[0]*Ee+a[3]*Ve+a[6]*Xe+i,gt=a[1]*Ee+a[4]*Ve+a[7]*Xe+s,St=a[2]*Ee+a[5]*Ve+a[8]*Xe+r;x.push(Ne,gt,St);let lt=Q*3,it=z*3,Bt=re*3,vt=T[it]-T[lt],Rt=T[it+1]-T[lt+1],Pt=T[it+2]-T[lt+2],It=T[Bt]-T[lt],N=T[Bt+1]-T[lt+1],Qt=T[Bt+2]-T[lt+2],ft=Ne-T[lt],pt=gt-T[lt+1],_e=St-T[lt+2],At=vt*vt+Rt*Rt+Pt*Pt,De=vt*It+Rt*N+Pt*Qt,ke=It*It+N*N+Qt*Qt,w=ft*vt+pt*Rt+_e*Pt,y=ft*It+pt*N+_e*Qt,B=At*ke-De*De,se=G,j=ne,oe=X;if(Math.abs(B)>1e-14){let de=(ke*w-De*y)/B,J=(At*y-De*w)/B,K=1-de-J;se=E[lt]*K+E[it]*de+E[Bt]*J,j=E[lt+1]*K+E[it+1]*de+E[Bt+1]*J,oe=E[lt+2]*K+E[it+2]*de+E[Bt+2]*J;let ue=Math.hypot(se,j,oe)||1;se/=ue,j/=ue,oe/=ue,se*G+j*ne+oe*X<0&&(se=-se,j=-j,oe=-oe)}p.push(se,j,oe),m.push(Oe(Ee/l+.5,0,1),Oe(Ve/c+.5,0,1)),M.push(_[0],_[1],_[2])}}if(ht.decalMs+=performance.now()-t,ht.decals++,!x.length)return null;let W=new Ft;return W.setAttribute("position",new xt(x,3)),W.setAttribute("normal",new xt(p,3)),W.setAttribute("uv",new xt(m,2)),W.setAttribute("color",new xt(M,3)),W.computeBoundingSphere(),W}function kh(n,e){let t=Cf(),i=`${n}:${t?.key||"tool"}:${Math.round(e*100)}`;if(hh.has(i))return hh.get(i);let s=128,r=document.createElement("canvas");r.width=r.height=s;let a=r.getContext("2d",{alpha:!0}),o=Tt.find(h=>h.key===n)||Tt[0],l=t?.mask||o.mask;a.clearRect(0,0,s,s);let c=Math.max(.02,1-e),u=(h,f=62,g=[1,1],x=[64,64])=>{a.save(),a.translate(x[0],x[1]),a.scale(g[0],g[1]);let p=a.createRadialGradient(0,0,Math.max(0,h*f),0,0,f);p.addColorStop(0,"rgba(255,255,255,1)"),p.addColorStop(Math.min(.995,h),"rgba(255,255,255,1)"),p.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=p,a.fillRect(-f,-f,f*2,f*2),a.restore()};if(l==="star"){a.fillStyle="white",a.beginPath();for(let h=0;h<10;h++){let f=-Math.PI/2+h*Math.PI/5,g=h%2?s*.22:s*.47,x=s/2+Math.cos(f)*g,p=s/2+Math.sin(f)*g;h===0?a.moveTo(x,p):a.lineTo(x,p)}a.closePath(),a.fill()}else if(l==="rosette"){a.fillStyle="white";for(let h=0;h<10;h++){let f=h*Math.PI/5;a.beginPath(),a.arc(s/2+Math.cos(f)*s*.28,s/2+Math.sin(f)*s*.28,s*.105,0,Math.PI*2),a.fill()}a.beginPath(),a.arc(s/2,s/2,s*.14,0,Math.PI*2),a.fill()}else if(l==="hair"){u(Math.max(.06,c*.12),62,[1,.92]),a.globalAlpha=.55,a.lineCap="round";for(let h=0;h<13;h++){let f=18+h*7.7;a.strokeStyle=`rgba(255,255,255,${.3+h%4*.16})`,a.lineWidth=.9+h%3*.45,a.beginPath(),a.moveTo(f,99),a.bezierCurveTo(f-8,72,f+9,43,f+(h%2?7:-5),18),a.stroke()}a.globalAlpha=1}else if(l==="sponge"||l==="powder"){u(l==="sponge"?Math.max(.08,c*.12):Math.max(.02,c*.04),62,[1,1]);let h=l==="sponge"?12345:54321,f=()=>(h=h*1664525+1013904223>>>0,h/4294967296);for(let g=0;g<(l==="sponge"?125:210);g++){let x=9+f()*110,p=9+f()*110;if(Math.hypot(x-64,p-64)>61)continue;let M=l==="sponge"?.09:.055;a.fillStyle=`rgba(0,0,0,${M})`,a.beginPath(),a.arc(x,p,f()*(l==="sponge"?2.1:1.15)+.25,0,Math.PI*2),a.fill()}}else if(l==="foundation"){u(Math.max(.3,c*.42),62,[1,1]);let h=78231;for(let f=0;f<160;f++){h=h*1664525+1013904223>>>0;let g=12+h/4294967296*104;h=h*1664525+1013904223>>>0;let x=12+h/4294967296*104;Math.hypot(g-64,x-64)>58||(a.fillStyle="rgba(0,0,0,.018)",a.fillRect(g,x,.7,.7))}}else if(l==="concealer")u(Math.max(.5,c*.62),62,[1,1]);else if(l==="blush")u(Math.max(.02,c*.07),62,[1,1],[64,64]);else if(l==="contour")u(Math.max(.02,c*.07),62,[1.08,.86],[64,64]);else if(l==="highlight")u(Math.max(0,c*.02),62,[1,1]);else if(l==="shadow")u(Math.max(.12,c*.22),62,[1,1]);else if(l==="liner")u(Math.max(.55,c*.65),62,[1.08,.55]);else if(l==="lipstick")u(Math.max(.45,c*.55),62,[1,1]);else if(l==="gloss")u(Math.max(.1,c*.16),62,[1.05,.75]),a.globalCompositeOperation="destination-in",a.fillStyle="rgba(255,255,255,.88)",a.fillRect(0,0,s,s),a.globalCompositeOperation="source-over";else if(l==="blur"||l==="blend")u(Math.max(0,c*.02),62,[1,1]);else if(l==="smear")u(Math.max(0,c*.03),62,[1,1]);else{let h=l==="hard"?Math.max(.88,1-e):l==="air"?.02:Math.max(.08,c);u(h,62)}let d=new Bi(r);return d.colorSpace=ut,d.generateMipmaps=!1,d.minFilter=Ct,d.magFilter=Ct,d.needsUpdate=!0,hh.set(i,d),d}function Yf(n,e){let t=Tt.find(o=>o.key===n.tool)||Tt[0],i=kh(t.key,n.softness??Si),s=Oe((n.opacity??Al)*(t.alpha??1),0,1),r={map:i,color:16777215,vertexColors:!0,transparent:!0,opacity:s*e.opacity,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1.5,side:nn,toneMapped:!1},a;return t.finish==="gloss"?a=new Js({...r,roughness:.13,metalness:0,clearcoat:.85,clearcoatRoughness:.12}):t.finish==="glow"?a=new Js({...r,roughness:.24,metalness:0,clearcoat:.5,clearcoatRoughness:.25,emissive:n.color,emissiveIntensity:.18}):a=new Qn({...r,shininess:6,specular:new Pe(.05,.05,.05)}),a.userData.baseOpacity=s,a}function Vy(n){let e=["position","normal","uv","color"],t={position:0,normal:0,uv:0,color:0};for(let a of n)for(let o of e)t[o]+=a.getAttribute(o)?.array.length||0;if(!t.position)return null;let i={position:new Float32Array(t.position),normal:new Float32Array(t.normal),uv:new Float32Array(t.uv),color:new Float32Array(t.color)},s={position:0,normal:0,uv:0,color:0};for(let a of n)for(let o of e){let l=a.getAttribute(o);l&&(i[o].set(l.array,s[o]),s[o]+=l.array.length)}let r=new Ft;return r.setAttribute("position",new tn(i.position,3)),r.setAttribute("normal",new tn(i.normal,3)),r.setAttribute("uv",new tn(i.uv,2)),r.setAttribute("color",new tn(i.color,3)),r.computeBoundingSphere(),r}function zh(n,e){if(!Kt||!n.group||!e.dabs?.length)return;let t=Yf(e,n),i=[],s=96;for(let r=0;r<e.dabs.length;r+=s){let a=[];for(let c=r;c<Math.min(r+s,e.dabs.length);c++){let u=e.dabs[c],d=qn[u.meshIndex??0];if(!d)continue;u.c||(u.c=Ol(e.color));let h=pa(d,u);h&&a.push(h)}if(!a.length)continue;let o=Vy(a);for(let c of a)c.dispose();if(!o)continue;let l=new Ot(o,t);l.frustumCulled=!1,l.renderOrder=20+we.indexOf(n)*1e4+n.group.children.length,l.userData.baseOpacity=t.userData.baseOpacity,l.name=`makeup-stroke-${e.id||If++}-${i.length}`,n.group.add(l),i.push(l)}if(!i.length){t.dispose();return}e.meshes=i,e.mesh=i[0]}async function $f(n){fr(n.group),n.legacyTexture?.dispose(),n.legacyTexture=null;let e=++n.geometryBuildToken;for(let t of n.strokes){if(n.geometryBuildToken!==e||!we.includes(n))break;zh(n,t),await ys()}n.group.visible=n.visible,Bf(n),sn(),st()}function _h(){let n=we[Ke];n&&(mr(n),Oh(),un())}var Hy=.2;function Ei(n,e){return Math.max(.004,Hy*(si/140)*(e.radius||1))}function Gy(n){let e=we[Ke];if(!e||e.locked)return;let t=Ei(n,Tt.find(b=>b.key==="smudge")),i={p:[...n.point],n:[...n.normal],r:t},s=Me.lastSmudgeHit;if(Me.lastSmudgeHit=i,!s)return;let r=i.p[0]-s.p[0],a=i.p[1]-s.p[1],o=i.p[2]-s.p[2],l=i.n[0],c=i.n[1],u=i.n[2],d=r*l+a*c+o*u;r-=d*l,a-=d*c,o-=d*u;let h=Math.hypot(r,a,o);if(h<1e-5)return;let f=.55;Me.dir&&(r=r*f+Me.dir[0]*(1-f),a=a*f+Me.dir[1]*(1-f),o=o*f+Me.dir[2]*(1-f));let g=Math.hypot(r,a,o)||1;Me.dir=[r/g,a/g,o/g];let x=t*1.6,p=.75*Math.min(h,x*1.5),m=Me.dir[0],M=Me.dir[1],T=Me.dir[2];for(let b=0;b<e.strokes.length;b++){let A=e.strokes[b];if(!A.dabs?.length)continue;let E=!1;for(let P of A.dabs)if(Math.hypot(P.p[0]-i.p[0],P.p[1]-i.p[1],P.p[2]-i.p[2])<=x+P.r){E=!0;break}if(!E)continue;let _=!1,S=A.dabs.map(P=>{let C=Math.hypot(P.p[0]-i.p[0],P.p[1]-i.p[1],P.p[2]-i.p[2]);if(C>x+P.r)return P;let D=Math.pow(1-Oe(C/(x+P.r),0,1),1.2),O=p*D;return O<1e-6?P:(_=!0,{...P,p:[P.p[0]+m*O,P.p[1]+M*O,P.p[2]+T*O]})});if(_){let P={...A,dabs:S,meshes:[],mesh:null};e.strokes[b]=P,Me.touched.set(A.id??b,P)}}Me.touched.size&&Vh()}var xh=!1;function Vh(){xh||(xh=!0,requestAnimationFrame(()=>{xh=!1,Me&&Ah()}))}function Ah(){if(!Me?.touched?.size)return;let n=we[Ke];for(let e of Me.touched.values())Kf(n,e),zh(n,e);Me.touched.clear(),st()}function Ch(n){let e=Tt[rn],t=Ei(n,e);if(e.key==="blur"){let i=Rh(n.point,t*1.5);Me.dabColor=i?[...i]:null,Me.skipDab=!i}else{let i=Rh(n.point,t*1.35),s=Ol(Mi);Me.dabColor=i?Wy([...i],s,.4):s,Me.skipDab=!1}}function Ol(n){let e=new Pe(n);return[e.r,e.g,e.b]}function Zf(n){let e=new Pe;return e.setRGB(Oe(n[0],0,1),Oe(n[1],0,1),Oe(n[2],0,1)),`#${e.getHexString(ut)}`}function Wy(n,e,t){return[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t]}function Rh(n,e){let t=0,i=0,s=0,r=0,a=Math.max(e,.01);for(let o of we)if(!(!o.visible||o.opacity<=0))for(let l of o.strokes){if(!l.dabs?.length)continue;let c=Oe((l.opacity??1)*(Tt.find(u=>u.key===l.tool)?.alpha??1),0,1)*o.opacity;if(!(c<=0))for(let u of l.dabs){let d=u.p[0]-n[0],h=u.p[1]-n[1],f=u.p[2]-n[2],g=Math.hypot(d,h,f);if(g>a+u.r)continue;let x=1-Oe((g-u.r*.35)/a,0,1),p=x*x*c;if(p<=0)continue;let m=u.c||Ol(l.color);i+=m[0]*p,s+=m[1]*p,r+=m[2]*p,t+=p}}return t>0?[i/t,s/t,r/t]:null}function Xy(n,e,t=0){let i=Tt.find(a=>a.key===e.tool)||Tt[0],s=Ei(n,i),r=e.dabColor||Ol(e.color);return{meshIndex:n.meshIndex,p:[...n.point],n:[...n.normal],r:s,aspect:Rf(i),angle:t,c:r,css:Zf(r)}}var Sf={performance:{step:.98,maxInterpolatedHits:1,maxPointerSamples:10,previewBatchSize:24},balanced:{step:.78,maxInterpolatedHits:2,maxPointerSamples:12,previewBatchSize:32},quality:{step:.58,maxInterpolatedHits:3,maxPointerSamples:16,previewBatchSize:40}};function Hh(){return Sf[ma]||Sf.balanced}function bf(n,e,t){let i=t.getAttribute("position")?.count||0;if(!i)return;if(n.previewMesh){if(n.vertexCount+i>n.vertexCapacity){n.vertexCapacity=Math.max(n.vertexCapacity*2,(n.vertexCount+i)*2);for(let[r,a]of[["position",3],["normal",3],["uv",2],["color",3]]){let o=new tn(new Float32Array(n.vertexCapacity*a),a);o.setUsage(fl),o.array.set(n.previewMesh.geometry.getAttribute(r).array),n.previewMesh.geometry.setAttribute(r,o)}}}else{n.vertexCapacity=Math.max(Hh().previewBatchSize*24,i*2);let r=new Ft;for(let[o,l]of[["position",3],["normal",3],["uv",2],["color",3]]){let c=new tn(new Float32Array(n.vertexCapacity*l),l);c.setUsage(fl),r.setAttribute(o,c)}r.setDrawRange(0,0);let a=new Ot(r,n.material);a.frustumCulled=!1,a.renderOrder=30+we.indexOf(e)*1e4+e.group.children.length,a.userData.baseOpacity=n.material.userData.baseOpacity,a.name=`makeup-preview-${n.id}`,e.group.add(a),n.previewMesh=a,n.previewMeshes.push(a)}let s=n.previewMesh.geometry.attributes;s.position.array.set(t.getAttribute("position").array,n.vertexCount*3),s.normal.array.set(t.getAttribute("normal").array,n.vertexCount*3),s.uv.array.set(t.getAttribute("uv").array,n.vertexCount*2),s.color.array.set(t.getAttribute("color").array,n.vertexCount*3),n.vertexCount+=i,n.dirty=!0}function Jf(){if(!Me||Me.mode!=="paint"||!Me.previewMesh||!Me.dirty)return;let n=Me.previewMesh.geometry;n.setDrawRange(0,Me.vertexCount),n.attributes.position.needsUpdate=!0,n.attributes.normal.needsUpdate=!0,n.attributes.uv.needsUpdate=!0,n.attributes.color.needsUpdate=!0,Me.dirty=!1,st()}function Ph(n,e=0){let t=we[Ke];if(!t||t.locked||!Me||Me.skipDab)return!1;let i=qn[n.meshIndex];if(!i)return!1;let s=Xy(n,Me,e),r=pa(i,s);if(!r)return!1;if(Me.dabs.push(s),bf(Me,t,r),r.dispose(),Dt){let a={...s,p:[2*i.bounds.center[0]-s.p[0],s.p[1],s.p[2]],n:[-s.n[0],s.n[1],s.n[2]]},o=pa(i,a);o&&(Me.dabs.push(a),bf(Me,t,o),o.dispose())}return!0}function Kf(n,e){let t=e.meshes||(e.mesh?[e.mesh]:[]),i=new Set,s=new Set;for(let r of t)n.group.remove(r),r.geometry&&i.add(r.geometry),Array.isArray(r.material)?r.material.forEach(a=>s.add(a)):r.material&&s.add(r.material);i.forEach(r=>r.dispose()),s.forEach(r=>r.dispose()),e.meshes=[],e.mesh=null}function jf(n,e,t){if(!n||n.locked||!e.length)return!1;let i=[];for(let h=1;h<e.length;h++)i.push([e[h-1],e[h]]);if(i.length||i.push([e[0],e[0]]),Dt&&qn[0]){let h=qn[0].bounds.center[0];for(let[f,g]of i.slice())i.push([{p:[2*h-f.p[0],f.p[1],f.p[2]],n:f.n,r:f.r},{p:[2*h-g.p[0],g.p[1],g.p[2]],n:g.n,r:g.r}])}let s=i.reduce((h,f)=>Math.max(h,f[0].r,f[1].r),.002),r=Math.max(s*2.5,.004),a=new Map,o=(h,f,g)=>`${h},${f},${g}`;i.forEach(h=>{let f=[Math.min(h[0].p[0],h[1].p[0]),Math.min(h[0].p[1],h[1].p[1]),Math.min(h[0].p[2],h[1].p[2])],g=[Math.max(h[0].p[0],h[1].p[0]),Math.max(h[0].p[1],h[1].p[1]),Math.max(h[0].p[2],h[1].p[2])];for(let x=Math.floor(f[2]/r);x<=Math.floor(g[2]/r);x++)for(let p=Math.floor(f[1]/r);p<=Math.floor(g[1]/r);p++)for(let m=Math.floor(f[0]/r);m<=Math.floor(g[0]/r);m++){let M=o(m,p,x),T=a.get(M);T||a.set(M,T=[]),T.push(h)}});let l=(h,f)=>{let[g,x]=f,p=g.p[0],m=g.p[1],M=g.p[2],T=x.p[0]-p,b=x.p[1]-m,A=x.p[2]-M,E=h.p[0]-p,_=h.p[1]-m,S=h.p[2]-M,P=T*T+b*b+A*A,C=P>1e-14?(E*T+_*b+S*A)/P:0;C=Oe(C,0,1);let D=E-T*C,O=_-b*C,W=S-A*C;return Math.sqrt(D*D+O*O+W*W)},c=h=>{let f=Math.floor(h.p[0]/r),g=Math.floor(h.p[1]/r),x=Math.floor(h.p[2]/r);for(let p=-1;p<=1;p++)for(let m=-1;m<=1;m++)for(let M=-1;M<=1;M++){let T=a.get(o(f+M,g+m,x+p));if(T)for(let b of T){let A=b[0].r+h.r*.75;if(l(h,b)<A)return!0}}return!1},u=!1,d=[];for(let h of n.strokes){let f=!1;for(let x of h.dabs)if(c(x)){f=!0;break}if(!f){d.push(h);continue}u=!0,Kf(n,h);let g=h.dabs.filter(x=>!c(x));if(g.length){let x={...h,dabs:g,meshes:[],mesh:null};d.push(x),t&&t.set(h.id??x.id??g.length,x)}}return u&&(n.strokes=d),u}function qy(n){let e=we[Ke];if(!e||!Kt)return!1;if(e.locked)return yt(Ie("locked")),!1;let t=Tt[rn];if(t.key==="eyedropper"){let i=Rh(n.point,Math.max(Ei(n,t)*1.5,.035));return i?(Dl(Zf(i)),yt(Ie("colorSampled"))):yt(gn==="ru"?"\u0417\u0434\u0435\u0441\u044C \u043D\u0435\u0442 \u043D\u0430\u043D\u0435\u0441\u0451\u043D\u043D\u043E\u0433\u043E \u043F\u0438\u0433\u043C\u0435\u043D\u0442\u0430":"No pigment sampled here"),fa(Pf),!1}if(t.key==="eraser"){Me={mode:"erase",touched:new Map,erasedSomething:!1,lastEraseHit:null};let i=Ei(n,t);return Me.lastEraseHit={p:[...n.point],n:[...n.normal],r:i},jf(we[Ke],[Me.lastEraseHit,Me.lastEraseHit],Me.touched)&&(Me.erasedSomething=!0),Me.touched.size&&Vh(),bi=!0,Vt=n,!0}return t.key==="smudge"?(Me={mode:"smudge",touched:new Map,dir:null,lastSmudgeHit:{p:[...n.point],n:[...n.normal],r:Ei(n,t)}},bi=!0,Vt=n,!0):(Me={mode:"paint",id:If++,tool:t.key,color:Mi,opacity:Al,softness:Si,flow:Cl,dabs:[],previewMeshes:[],previewMesh:null,vertexCount:0,vertexCapacity:0,dirty:!1,material:null,skipDab:!1},t.key==="blur"?(Me.softness=Math.max(Si,.88),Ch(n)):t.key==="blender"&&(Me.softness=Math.max(Si,.8),Ch(n)),Me.material=Yf(Me,e),bi=!0,Vt=n,Ph(n),Gh(),!0)}function Yy(n,e){if(!n)return 0;let t=cy.set(e.point[0]-n.point[0],e.point[1]-n.point[1],e.point[2]-n.point[2]),i=hy.set(e.normal[0],e.normal[1],e.normal[2]);return t.addScaledVector(i,-t.dot(i)),t.lengthSq()<1e-8?0:(t.normalize(),pf.setFromUnitVectors(Eh,i),mf.copy(pf).invert(),t.applyQuaternion(mf),Math.atan2(t.y,t.x))}function $y(n){if(!bi||!Me||!n)return;let e=Tt[rn];if(Me.mode==="erase"){let d=Ei(n,e),h={p:[...n.point],n:[...n.normal],r:d},f=Me.lastEraseHit;Me.lastEraseHit=h,jf(we[Ke],f?[f,h]:[h,h],Me.touched)&&(Me.erasedSomething=!0),Me.touched.size&&Vh(),Vt=n;return}if(Me.mode==="smudge"){Gy(n),Vt=n;return}if(!Vt){Ph(n),Vt=n;return}let t=n.point[0]-Vt.point[0],i=n.point[1]-Vt.point[1],s=n.point[2]-Vt.point[2],r=Hh(),a=Math.hypot(t,i,s),o=Ei(n,e),l=Math.max(.004,o*r.step*(1.35-(Me.flow??Cl)*.85));if(a<l)return;let c=Oe(Math.ceil(a/l),1,r.maxInterpolatedHits),u=Vt;for(let d=1;d<=c;d++){let h=n;if(d<c&&Number.isFinite(n.clientX)&&Number.isFinite(Vt.clientX)){let g=d/c;if(h=Bh(Vt.clientX+(n.clientX-Vt.clientX)*g,Vt.clientY+(n.clientY-Vt.clientY)*g),!h)continue}(e.key==="blur"||e.key==="blender")&&Ch(h);let f=Yy(u,h);Ph(h,f),u=h}Vt=n}function Qf(){if(!bi)return;let n=we[Ke];if(Me?.mode==="paint")if(Jf(),Me.dabs.length){let e={id:Me.id,tool:Me.tool,color:Me.color,opacity:Me.opacity,softness:Me.softness,flow:Me.flow,dabs:Me.dabs,meshes:Me.previewMeshes};e.meshes.forEach((t,i)=>{t.name=`makeup-stroke-${e.id}-${i}`,t.renderOrder=20+we.indexOf(n)*1e4+n.group.children.indexOf(t)}),n.strokes.push(e),_h(),U("#status").textContent=`${Ie("strokeSaved")} \xB7 ${Ki(rn)}`}else{for(let e of Me.previewMeshes)n.group.remove(e),e.geometry.dispose();Me.previewMeshes.length=0,Me.material.dispose()}else Me?.mode==="erase"?(Me.touched?.size&&Ah(),Me.erasedSomething&&(sn(),_h())):Me?.mode==="smudge"&&Me.touched?.size&&(Ah(),_h());Me=null,bi=!1,Vt=null,st()}Dn.addEventListener("contextmenu",n=>n.preventDefault());function Zy(n){return _n==="right"?n.button===2:_n==="middle"?n.button===1:_n==="space-left"?n.button===0&&xa:!1}function Jy(n){return vn==="middle"?n.button===1:vn==="shift-right"?n.button===2&&n.shiftKey:!1}function yh(n){Ms=n.pointerId;try{Dn.setPointerCapture(n.pointerId)}catch(e){console.debug("Pointer capture unavailable:",e)}}function Gh(){la||(la=!0,requestAnimationFrame(()=>{la=!1,Wh(!1),Jf()}))}function Ky(n){let e=typeof n.getCoalescedEvents=="function"?n.getCoalescedEvents():[n];for(let t of e)Ht.push({clientX:t.clientX,clientY:t.clientY});if(Ht.length>64){let t=[],i=Math.ceil(Ht.length/64);for(let r=0;r<Ht.length;r+=i)t.push(Ht[r]);let s=Ht[Ht.length-1];t[t.length-1]!==s&&t.push(s),Ht=t}Gh()}function Wh(n=!1){if(la=!1,Jt!=="paint"||!bi){Ht.length=0;return}if(n&&Ht.length>20){let s=Ht,r=[],a=(s.length-1)/19;for(let o=0;o<19;o++)r.push(s[Math.floor(o*a)]);r.push(s[s.length-1]),Ht=r}let e=Math.min(Ht.length,n?Ht.length:Hh().maxPointerSamples),t=performance.now(),i=null;for(let s=0;s<e;s++){let r=Ht[s],a=Bh(r.clientX,r.clientY);a?(a.clientX=r.clientX,a.clientY=r.clientY,$y(a),i=a):Vt=null}ht.pointerMs+=performance.now()-t,ht.pointerSamples+=e,e&&Ht.splice(0,e),Ht.length&&Gh(),i&&Of(i)}function es(){Jt==="paint"&&(Wh(!0),Qf()),Jt="idle",Ms=null,bi=!1,Rl=!1,Pl=!1,Pn=null,Ht.length=0,la=!1,st()}function ep(n){n&&Ms!==null&&n.pointerId!==Ms||(Jt==="paint"&&(Wh(!0),Qf()),Jt="idle",Ms=null,Rl=!1,Pl=!1,Pn=null,Ht.length=0,st())}Dn.addEventListener("pointerdown",n=>{if(Jt!=="idle")return;if(Jy(n)){n.preventDefault(),Jt="pan",Pl=!0,Pn={x:n.clientX,y:n.clientY},yh(n);return}if(Zy(n)){n.preventDefault(),Jt="rotate",Rl=!0,Pn={x:n.clientX,y:n.clientY},yh(n);return}if(n.button!==0||_n==="space-left"&&xa)return;let e=qf(n);e&&(e.clientX=n.clientX,e.clientY=n.clientY,qy(e)&&(n.preventDefault(),Jt="paint",yh(n)))});Dn.addEventListener("pointermove",n=>{if(!(Ms!==null&&n.pointerId!==Ms)){if(Jt==="paint")Ky(n);else if(Jt==="rotate"&&Rl&&Pn)dt.rotation.y+=(n.clientX-Pn.x)*wi,dt.rotation.x=Oe(dt.rotation.x+(n.clientY-Pn.y)*wi,-.9,.9),Pn={x:n.clientX,y:n.clientY},bs(),st();else if(Jt==="pan"&&Pl&&Pn)Ly(n.clientX-Pn.x,n.clientY-Pn.y),Pn={x:n.clientX,y:n.clientY};else if(Jt==="idle"){let e=qf(n);Of(e)}}});Dn.addEventListener("pointerleave",()=>{Jt==="idle"&&ra()});Dn.addEventListener("pointerup",ep);Dn.addEventListener("pointercancel",ep);Dn.addEventListener("lostpointercapture",()=>{Jt!=="idle"&&es()});Dn.addEventListener("wheel",n=>{n.preventDefault(),Ln=Oe(Ln+n.deltaY*Zi,1.2,9),Lt.position.set(wt.x,wt.y,wt.z+Ln),Lt.lookAt(wt),bs(),st()},{passive:!1});window.addEventListener("blur",()=>{xa=!1,es()});document.addEventListener("visibilitychange",()=>{document.hidden&&es()});document.addEventListener("keydown",n=>{if(n.code==="Space"&&!n.repeat){let e=n.target;e instanceof HTMLElement&&(["INPUT","TEXTAREA","SELECT"].includes(e.tagName)||e.isContentEditable)||(xa=!0,_n==="space-left"&&n.preventDefault())}});document.addEventListener("keyup",n=>{n.code==="Space"&&(xa=!1,Jt==="rotate"&&_n==="space-left"&&es())});function Ef(){let n=U("#performanceDiagnostics");if(!n||n.hidden)return;let e=performance.now(),t=Math.max(1,e-ht.lastFpsAt),i=ht.renderFrames-ht.lastFrameCount;U("#perfFps").textContent=String(Math.round(i*1e3/t)),ht.lastFpsAt=e,ht.lastFrameCount=ht.renderFrames,U("#perfRaycast").textContent=`${ht.raycasts?(ht.raycastMs/ht.raycasts).toFixed(2):"0.00"} ms`,U("#perfDecal").textContent=`${ht.decals?(ht.decalMs/ht.decals).toFixed(2):"0.00"} ms`,U("#perfPointer").textContent=`${ht.pointerSamples?(ht.pointerMs/ht.pointerSamples).toFixed(2):"0.00"} ms`,U("#perfMeshes").textContent=String(we.reduce((r,a)=>r+a.group.children.length,0));let s=performance.memory?.usedJSHeapSize;U("#perfMemory").textContent=s?`${(s/1048576).toFixed(0)} MB`:"N/A",ht.raycastMs=0,ht.raycasts=0,ht.decalMs=0,ht.decals=0,ht.pointerMs=0,ht.pointerSamples=0}function jy(){let n=U("#performanceDiagnostics"),e=U("#performanceDiagnosticsToggle");!n||!e||(n.hidden=!n.hidden,n.hidden?(wl&&clearInterval(wl),wl=null,e.setAttribute("aria-pressed","false")):(e.setAttribute("aria-pressed","true"),Ef(),wl=setInterval(Ef,750)))}var Qy=/^(mesh|meshes|history|historyIndex)$/;function tp(){return JSON.stringify(ev(),(n,e)=>Qy.test(n)?void 0:e)}function ev(){return{format:"GrimStudioProject",version:5,name:U("#projectName").value||"Untitled Makeup",model:vi,modelHash:ty,skinTone:$i,lighting:{...Je},brushShape:Xn,modelSessions:Object.fromEntries([...vs.entries(),[vi,Xf()]]),layers:we.map(n=>({name:n.name,visible:n.visible,locked:n.locked,opacity:n.opacity,strokes:n.strokes,legacyPaint:n.legacyPaint||null})),activeLayer:Ke,brush:{tool:rn,color:Mi,size:si,opacity:Al,softness:Si,flow:Cl},symmetryEnabled:Dt,view:{rotationX:dt.rotation.x,rotationY:dt.rotation.y,zoom:Ln,target:[wt.x,wt.y,wt.z]},savedAt:new Date().toISOString()}}function un(){clearTimeout(Sh),Sh=setTimeout(np,1800)}async function np(){if(bi||Jt==="paint"){Sh=setTimeout(np,700);return}try{await window.grim.autosave(tp()),U("#status").textContent=Ie("autosaved")}catch(n){console.warn("Autosave failed:",n),U("#status").textContent=Ie("autosaveFailed")}}async function ip(){try{let n=await window.grim.saveProject(tp());if(n?.error)throw new Error(n.error);n?.canceled||yt(Ie("projectSaved"))}catch(n){yt(gn==="ru"?"\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430":"Project save failed"),console.error("Project save failed:",n)}}function sp(n){if(!n||n.format!=="GrimStudioProject"||!Array.isArray(n.layers)||n.layers.length>ua)throw new Error("Not a valid GrimStudio project");for(let e of n.layers){if(!e||typeof e!="object")throw new Error("Invalid layer");if(e.paint&&(!String(e.paint).startsWith("data:image/png;base64,")||String(e.paint).length>48e6))throw new Error("Invalid legacy paint image");if(e.strokes&&!Array.isArray(e.strokes))throw new Error("Invalid stroke collection")}return n}async function rp(){try{let n=await window.grim.openProject();if(n?.canceled)return;if(n?.error)throw new Error(n.error);let e=sp(JSON.parse(n.content));await ap(e),yt(Ie("projectOpened"))}catch(n){yt(Ie("invalidProject")),console.error(n)}}async function ap(n){if(U("#projectName").value=n.name||"Untitled Makeup",hr.some(i=>i.key===n.skinTone)&&($i=n.skinTone,U("#skinTones")?.querySelectorAll("button").forEach(s=>s.classList.toggle("active",s.title===hr.find(r=>r.key===$i).name))),n.lighting&&typeof n.lighting=="object"&&lr({temp:n.lighting.temp,az:n.lighting.az,el:n.lighting.el,intensity:n.lighting.intensity,preset:n.lighting.preset},{fromPreset:n.lighting.preset&&n.lighting.preset!=="custom"}),typeof n.brushShape=="string"&&Dh.some(i=>i.key===n.brushShape)&&(Xn=n.brushShape==="default"?null:n.brushShape,Nl(),Qi()),n.modelSessions&&typeof n.modelSessions=="object"){vs.clear();for(let[i,s]of Object.entries(n.modelSessions))["male","female"].includes(i)&&vs.set(i,s)}["male","female"].includes(n.model)&&n.model!==vi&&(vi=n.model,Kt=!1,Xi=null,await Fl(!0)),Ih(),we.forEach(i=>{dt.remove(i.group),fr(i.group),i.legacyTexture?.dispose()}),we=[],ur=1;for(let i of n.layers){let s=ji(String(i.name||`${Ie("layerName")} ${ur}`).slice(0,80),i.legacyPaint||i.paint||null);s.visible=i.visible!==!1,s.locked=i.locked===!0,s.opacity=Oe(Number(i.opacity??1),0,1),s.strokes=Array.isArray(i.strokes)?i.strokes.map(Tl):[],we.push(s),mr(s)}we.length||we.push(ji(Ie("baseLayer"))),Ke=Oe(Number(n.activeLayer)||0,0,we.length-1),Kt&&we.forEach(pr);let e=n.brush||{},t=Oe(Number(e.tool)||0,0,Tt.length-1);Tt[t]?.key==="symmetry"||Tt[t]?.key==="eyedropper"?fa(0):fa(t),Dl(/^#[0-9a-f]{6}$/i.test(e.color||"")?e.color:"#c72f58"),U("#size").value=String(Oe(Number(e.size)||24,2,140)),U("#size").dispatchEvent(new Event("input",{bubbles:!0})),U("#opacity").value=String(Math.round(Oe(Number(e.opacity??1),0,1)*100)),U("#opacity").dispatchEvent(new Event("input",{bubbles:!0})),U("#softness").value=String(Math.round(Oe(Number(e.softness??.72),0,1)*100)),U("#softness").dispatchEvent(new Event("input",{bubbles:!0})),U("#flow").value=String(Math.round(Oe(Number(e.flow??.75),0,1)*100)),U("#flow").dispatchEvent(new Event("input",{bubbles:!0})),Dt=n.symmetryEnabled===!0,U("#symmetryToggle").checked=Dt,n.view&&(ri(Number(n.view.rotationX)||0,Number(n.view.rotationY)||0,Number(n.view.zoom)||4.4),Array.isArray(n.view.target)&&n.view.target.length===3&&n.view.target.every(Number.isFinite)&&(wt.fromArray(n.view.target),Lt.position.set(wt.x,wt.y,wt.z+Ln),Lt.lookAt(wt),bs())),sn(),we.some(i=>i.legacyPaint)&&yt(Ie("legacyWarning")),st()}async function op(){if(!Gt)return yt("Renderer unavailable");try{Gt.render(Yn,Lt);let n=Gt.domElement.toDataURL("image/png"),e=await window.grim.exportImage(n);if(e?.error)throw new Error(e.error);e?.canceled||yt(Ie("exported"))}catch(n){yt(Ie("exportFailed")),console.error(n)}}function tv(){we.forEach(n=>{dt.remove(n.group),fr(n.group),n.legacyTexture?.dispose()}),we=[],ur=1,we.push(ji(Ie("baseLayer"))),Ke=0,Kt&&pr(we[0]),sn()}function nv(){confirm(Ie("newConfirm"))&&(tv(),U("#projectName").value="Untitled Makeup",ri(0,Math.PI,4.4),un())}function wf(n){Ln=Oe(Ln+n,1.2,9),Lt.position.set(wt.x,wt.y,wt.z+Ln),Lt.lookAt(wt),bs(),st()}function vh(n){let e=Tt.findIndex(t=>t.key===n);e>=0&&fa(e)}function iv(){Dt=!Dt,U("#symmetryToggle").checked=Dt,jt(),dr(),yt(Ie(Dt?"symmetryOn":"symmetryOff"))}document.addEventListener("keydown",n=>{let e=n.target,t=e instanceof HTMLElement&&(["INPUT","TEXTAREA","SELECT"].includes(e.tagName)||e.isContentEditable);if(n.key==="Escape"&&U("#settingsDialog")&&!U("#settingsDialog").hidden){Ll();return}!t&&n.ctrlKey&&!n.shiftKey&&n.key.toLowerCase()==="s"?(n.preventDefault(),ip()):!t&&n.ctrlKey&&n.key.toLowerCase()==="o"?(n.preventDefault(),rp()):!t&&n.ctrlKey&&!n.shiftKey&&n.key.toLowerCase()==="z"?(n.preventDefault(),Vf()):!t&&n.ctrlKey&&(n.key.toLowerCase()==="y"||n.key.toLowerCase()==="z"&&n.shiftKey)?(n.preventDefault(),Hf()):!t&&n.ctrlKey&&n.key.toLowerCase()==="e"?(n.preventDefault(),op()):!t&&n.key==="["?(si=Oe(si-2,2,140),U("#size").value=String(si),U("#size").dispatchEvent(new Event("input",{bubbles:!0}))):!t&&n.key==="]"?(si=Oe(si+2,2,140),U("#size").value=String(si),U("#size").dispatchEvent(new Event("input",{bubbles:!0}))):!t&&!n.ctrlKey&&(n.key==="+"||n.key==="=")?(n.preventDefault(),wf(-.45)):!t&&!n.ctrlKey&&n.key==="-"?(n.preventDefault(),wf(.45)):!t&&!n.ctrlKey&&n.key==="1"?(n.preventDefault(),ri(0,Math.PI,4.4)):!t&&!n.ctrlKey&&n.key==="2"?(n.preventDefault(),ri(0,Math.PI/2,4.4)):!t&&!n.ctrlKey&&n.key==="3"?(n.preventDefault(),ri(0,Math.PI*1.5,4.4)):!t&&!n.ctrlKey&&n.key==="4"?(n.preventDefault(),ri(0,0,4.4)):!t&&!n.ctrlKey&&n.key.toLowerCase()==="b"?vh("brush"):!t&&!n.ctrlKey&&n.key.toLowerCase()==="e"?vh("eraser"):!t&&!n.ctrlKey&&n.key.toLowerCase()==="i"?vh("eyedropper"):!t&&!n.ctrlKey&&n.key.toLowerCase()==="m"?iv():!t&&!n.ctrlKey&&n.key.toLowerCase()==="g"?Ji.classList.toggle("grid-on"):!t&&!n.ctrlKey&&n.key.toLowerCase()==="l"?kf():!t&&n.key==="Tab"&&(n.preventDefault(),document.body.classList.toggle("zen"))});we.push(ji(Ie("baseLayer")));Il();Df();Nf();Uh();Uf();_y();Fh();Nl();Qi();sn();dr();U("#toolSettingsLabel").textContent=`${Ki(rn).toUpperCase()} ${Ie("brushSettings")}`;aa("Starting",Ie("preparing"));st();window.grim.readAutosave().then(async n=>{if(n)try{let e=sp(JSON.parse(n));await ap(e),yt(gn==="ru"?"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u0430\u0432\u0442\u043E\u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435":"Autosave recovered")}catch(e){console.warn("Autosave recovery skipped:",e)}}).catch(n=>console.warn("Autosave read failed:",n));requestAnimationFrame(()=>Fl());})();
