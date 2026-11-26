(()=>{var Uu=0,Mc=1,Fu=2;var Yr=1,Ou=2,ir=3,ni=0,mn=1,tn=2,gs=0,sr=1,Sc=2,bc=3,Ec=4,Bu=5;var _s=100,zu=101,ku=102,Vu=103,Hu=104,Gu=200,Wu=201,Xu=202,qu=203,wc=204,Tc=205,Yu=206,$u=207,Zu=208,Ju=209,Ku=210,ju=211,Qu=212,ed=213,td=214,Ka=0,ja=1,Qa=2,Gs=3,eo=4,to=5,no=6,io=7,Po=0,nd=1,id=2,ii=0,Ac=1,Rc=2,Cc=3,$r=4,Pc=5,Ic=6,Lc=7;var Dc=300,xs=301,rr=302,Io=303,Lo=304,Fi=1e3,Jn=1001,so=1002,Yt=1003,sd=1004;var Zr=1005;var At=1006,Do=1007;var Hn=1008;var yn=1009,Nc=1010,Uc=1011,ar=1012,No=1013,Gn=1014,Wn=1015,Xn=1016,Uo=1017,Fo=1018,ys=1020,Fc=35902,Oc=35899,Bc=1021,zc=1022,qn=1023,_i=1026,Mi=1027,kc=1028,Oo=1029,Gi=1030,Bo=1031;var zo=1033,Jr=33776,Kr=33777,jr=33778,Qr=33779,ko=35840,Vo=35841,Ho=35842,Go=35843,Wo=36196,Xo=37492,qo=37496,Yo=37488,$o=37489,ea=37490,Zo=37491,Jo=37808,Ko=37809,jo=37810,Qo=37811,el=37812,tl=37813,nl=37814,il=37815,sl=37816,rl=37817,al=37818,ol=37819,ll=37820,cl=37821,hl=36492,ul=36494,dl=36495,fl=36283,pl=36284,ta=36285,ml=36286;var Rr=2300,ro=2301,Za=2302,uc=2303,dc=2400,fc=2401,pc=2402;var rd=3200;var na=0,ad=1,Si="",dt="srgb",Cr="srgb-linear",Pr="linear",ot="srgb";var Ja=7680;var od=519,ld=512,cd=513,hd=514,Vc=515,ud=516,dd=517,Hc=518,Gc=519,fd=35044,gl=35048;var Wc="300 es",Cn=2e3,Ws=2001;function _p(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pd(){let n=Xs("canvas");return n.style.display="block",n}var nu={},qs=null;function Xc(...n){let e="THREE."+n.shift();qs?qs("log",e,...n):console.log(e,...n)}function md(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Be(...n){n=md(n);let e="THREE."+n.shift();if(qs)qs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ve(...n){n=md(n);let e="THREE."+n.shift();if(qs)qs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function us(...n){let e=n.join(" ");e in nu||(nu[e]=!0,Be(...n))}function gd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var _d={[Ka]:Ka,[Qa]:no,[eo]:eo,[Gs]:to,[ja]:ja,[no]:Qa,[io]:io,[to]:Gs},Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],iu=1234567,Tr=Math.PI/180,Ys=180/Math.PI;function or(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function qc(n,e){return(n%e+e)%e}function yp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function vp(n,e,t){return n!==e?(t-n)/(e-n):0}function Ar(n,e,t){return(1-t)*n+t*e}function Mp(n,e,t,i){return Ar(n,e,1-Math.exp(-t*i))}function Sp(n,e=1){return e-Math.abs(qc(n,e*2)-e)}function bp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ep(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function wp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Tp(n,e){return n+Math.random()*(e-n)}function Ap(n){return n*(.5-Math.random())}function Rp(n){n!==void 0&&(iu=n);let e=iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cp(n){return n*Tr}function Pp(n){return n*Ys}function Ip(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Lp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Dp(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),d=r((e-i)/2),h=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $c(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function xd(n,e){if(e.constructor===Float32Array)return n;let t=$c(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function yd(n,e){if(e.constructor===Float32Array)return n;let t=$c(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var lr={DEG2RAD:Tr,RAD2DEG:Ys,generateUUID:or,clamp:je,euclideanModulo:qc,mapLinear:yp,inverseLerp:vp,lerp:Ar,damp:Mp,pingpong:Sp,smoothstep:bp,smootherstep:Ep,randInt:wp,randFloat:Tp,randFloatSpread:Ap,seededRandom:Rp,degToRad:Cp,radToDeg:Pp,isPowerOfTwo:Ip,ceilPowerOfTwo:Lp,floorPowerOfTwo:Yc,setQuaternionFromProperEuler:Dp,normalize:yd,denormalize:xd},Xe=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(d!==x||l!==h||c!==f||u!==g){let p=l*h+c*f+u*g+d*x;p<0&&(h=-h,f=-f,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),T=Math.sin(M);m=Math.sin(m*M)/T,o=Math.sin(o*M)/T,l=l*m+h*o,c=c*m+f*o,u=u*m+g*o,d=d*m+x*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+g*o,d=d*m+x*o;let M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(su.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wl.copy(this).projectOnVector(e),this.sub(Wl)}reflect(e){return this.sub(Wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wl=new F,su=new pn,ze=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],x=s[0],p=s[3],m=s[6],M=s[1],T=s[4],b=s[7],A=s[2],E=s[5],_=s[8];return r[0]=a*x+o*M+l*A,r[3]=a*p+o*T+l*E,r[6]=a*m+o*b+l*_,r[1]=c*x+u*M+d*A,r[4]=c*p+u*T+d*E,r[7]=c*m+u*b+d*_,r[2]=h*x+f*M+g*A,r[5]=h*p+f*T+g*E,r[8]=h*m+f*b+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(o*i-s*a)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xl.makeScale(e,t)),this}rotate(e){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xl.makeRotation(-e)),this}translate(e,t){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xl=new ze,ru=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),au=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Np(){let n={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(s.r=Vs(s.r),s.g=Vs(s.g),s.b=Vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?Pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Cr]:{primaries:e,whitePoint:i,transfer:Pr,toXYZ:ru,fromXYZ:au,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:ru,fromXYZ:au,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),n}var Ze=Np();function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var As,ao=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{As===void 0&&(As=Xs("canvas")),As.width=e.width,As.height=e.height;let s=As.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=As}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gi(t[i]/255)*255):t[i]=gi(t[i]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Up=0,$s=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ql(s[a].image)):r.push(ql(s[a]))}else r=ql(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ql(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ao.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var Fp=0,Yl=new F,$t=class n extends Kn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Jn,s=Jn,r=At,a=Hn,o=qn,l=yn,c=n.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=or(),this.name="",this.source=new $s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fi:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case so:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fi:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case so:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Dc;$t.DEFAULT_ANISOTROPY=1;var bt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,b=(f+1)/2,A=(m+1)/2,E=(u+h)/4,_=(d+x)/4,S=(g+p)/4;return T>b&&T>A?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=E/i,r=_/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=E/s,r=S/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=_/r,s=S/r),this.set(i,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-x)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oo=class extends Kn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new $t({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new $s(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends oo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ir=class extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var lo=class extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var at=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,l,c,u,d,h,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,d,h,f,g,x,p)}set(e,t,i,s,r,a,o,l,c,u,d,h,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),a=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,g=o*u,x=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,x=c*d;t[0]=h+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,x=c*d;t[0]=h-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,g=o*u,x=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-x*d}else if(e.order==="XZY"){let h=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Op,e,Bp)}lookAt(e,t,i){let s=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Pi.crossVectors(i,Mn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Pi.crossVectors(i,Mn)),Pi.normalize(),wa.crossVectors(Mn,Pi),s[0]=Pi.x,s[4]=wa.x,s[8]=Mn.x,s[1]=Pi.y,s[5]=wa.y,s[9]=Mn.y,s[2]=Pi.z,s[6]=wa.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],M=i[3],T=i[7],b=i[11],A=i[15],E=s[0],_=s[4],S=s[8],L=s[12],C=s[1],U=s[5],z=s[9],X=s[13],P=s[2],Y=s[6],$=s[10],G=s[14],ne=s[3],W=s[7],Q=s[11],k=s[15];return r[0]=a*E+o*C+l*P+c*ne,r[4]=a*_+o*U+l*Y+c*W,r[8]=a*S+o*z+l*$+c*Q,r[12]=a*L+o*X+l*G+c*k,r[1]=u*E+d*C+h*P+f*ne,r[5]=u*_+d*U+h*Y+f*W,r[9]=u*S+d*z+h*$+f*Q,r[13]=u*L+d*X+h*G+f*k,r[2]=g*E+x*C+p*P+m*ne,r[6]=g*_+x*U+p*Y+m*W,r[10]=g*S+x*z+p*$+m*Q,r[14]=g*L+x*X+p*G+m*k,r[3]=M*E+T*C+b*P+A*ne,r[7]=M*_+T*U+b*Y+A*W,r[11]=M*S+T*z+b*$+A*Q,r[15]=M*L+T*X+b*G+A*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15],M=l*f-c*h,T=o*f-c*d,b=o*h-l*d,A=a*f-c*u,E=a*h-l*u,_=a*d-o*u;return t*(x*M-p*T+m*b)-i*(g*M-p*A+m*E)+s*(g*T-x*A+m*_)-r*(g*b-x*E+p*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],M=t*o-i*a,T=t*l-s*a,b=t*c-r*a,A=i*l-s*o,E=i*c-r*o,_=s*c-r*l,S=u*x-d*g,L=u*p-h*g,C=u*m-f*g,U=d*p-h*x,z=d*m-f*x,X=h*m-f*p,P=M*X-T*z+b*U+A*C-E*L+_*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/P;return e[0]=(o*X-l*z+c*U)*Y,e[1]=(s*z-i*X-r*U)*Y,e[2]=(x*_-p*E+m*A)*Y,e[3]=(h*E-d*_-f*A)*Y,e[4]=(l*C-a*X-c*L)*Y,e[5]=(t*X-s*C+r*L)*Y,e[6]=(p*b-g*_-m*T)*Y,e[7]=(u*_-h*b+f*T)*Y,e[8]=(a*z-o*C+c*S)*Y,e[9]=(i*C-t*z-r*S)*Y,e[10]=(g*E-x*b+m*M)*Y,e[11]=(d*b-u*E-f*M)*Y,e[12]=(o*L-a*U-l*S)*Y,e[13]=(t*U-i*L+s*S)*Y,e[14]=(x*T-g*A-p*M)*Y,e[15]=(u*A-d*T+h*M)*Y,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,x=a*u,p=a*d,m=o*d,M=l*c,T=l*u,b=l*d,A=i.x,E=i.y,_=i.z;return s[0]=(1-(x+m))*A,s[1]=(f+b)*A,s[2]=(g-T)*A,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(h+m))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(g+T)*_,s[9]=(p-M)*_,s[10]=(1-(h+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Rs.set(s[0],s[1],s[2]).length(),o=Rs.set(s[4],s[5],s[6]).length(),l=Rs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),On.copy(this);let c=1/a,u=1/o,d=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,t.setFromRotationMatrix(On),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Cn,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===Cn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ws)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Cn,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===Cn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ws)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Rs=new F,On=new at,Op=new F(0,0,0),Bp=new F(1,1,1),Pi=new F,wa=new F,Mn=new F,ou=new at,lu=new pn,jn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ou,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lu.setFromEuler(this),this.setFromQuaternion(lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jn.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zp=0,cu=new F,Cs=new pn,hi=new at,Ta=new F,Mr=new F,kp=new F,Vp=new pn,hu=new F(1,0,0),uu=new F(0,1,0),du=new F(0,0,1),fu={type:"added"},Hp={type:"removed"},Ps={type:"childadded",child:null},$l={type:"childremoved",child:null},Zt=class n extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new F,t=new jn,i=new pn,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new ze}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(hu,e)}rotateY(e){return this.rotateOnAxis(uu,e)}rotateZ(e){return this.rotateOnAxis(du,e)}translateOnAxis(e,t){return cu.copy(e).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hu,e)}translateY(e){return this.translateOnAxis(uu,e)}translateZ(e){return this.translateOnAxis(du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ta.copy(e):Ta.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Mr,Ta,this.up):hi.lookAt(Ta,Mr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(hi),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fu),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hp),$l.child=e,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fu),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Vp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Zt.DEFAULT_UP=new F(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=class extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gp={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new bn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function Zl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=qc(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Zl(a,r,e+1/3),this.g=Zl(a,r,e),this.b=Zl(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=dt){function i(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let i=vd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return Ze.workingToColorSpace(cn.copy(this),e),Math.round(je(cn.r*255,0,255))*65536+Math.round(je(cn.g*255,0,255))*256+Math.round(je(cn.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(cn.copy(this),t);let i=cn.r,s=cn.g,r=cn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=dt){Ze.workingToColorSpace(cn.copy(this),e);let t=cn.r,i=cn.g,s=cn.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(Aa);let i=Ar(Ii.h,Aa.h,t),s=Ar(Ii.s,Aa.s,t),r=Ar(Ii.l,Aa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Pe;Pe.NAMES=vd;var Lr=class extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new F,ui=new F,Jl=new F,di=new F,Is=new F,Ls=new F,pu=new F,Kl=new F,jl=new F,Ql=new F,ec=new bt,tc=new bt,nc=new bt,Ui=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Bn.subVectors(e,t),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Bn.subVectors(s,t),ui.subVectors(i,t),Jl.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(ui),l=Bn.dot(Jl),c=ui.dot(ui),u=ui.dot(Jl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return ec.setScalar(0),tc.setScalar(0),nc.setScalar(0),ec.fromBufferAttribute(e,t),tc.fromBufferAttribute(e,i),nc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ec,r.x),a.addScaledVector(tc,r.y),a.addScaledVector(nc,r.z),a}static isFrontFacing(e,t,i,s){return Bn.subVectors(i,t),ui.subVectors(e,t),Bn.cross(ui).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Bn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Is.subVectors(s,i),Ls.subVectors(r,i),Kl.subVectors(e,i);let l=Is.dot(Kl),c=Ls.dot(Kl);if(l<=0&&c<=0)return t.copy(i);jl.subVectors(e,s);let u=Is.dot(jl),d=Ls.dot(jl);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(i).addScaledVector(Is,a);Ql.subVectors(e,r);let f=Is.dot(Ql),g=Ls.dot(Ql);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ls,o);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return pu.subVectors(r,s),o=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(pu,o);let m=1/(p+x+h);return a=x*m,o=h*m,t.copy(i).addScaledVector(Is,a).addScaledVector(Ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),Ca.subVectors(this.max,Sr),Ds.subVectors(e.a,Sr),Ns.subVectors(e.b,Sr),Us.subVectors(e.c,Sr),Li.subVectors(Ns,Ds),Di.subVectors(Us,Ns),os.subVectors(Ds,Us);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-os.z,os.y,Li.z,0,-Li.x,Di.z,0,-Di.x,os.z,0,-os.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-os.y,os.x,0];return!ic(t,Ds,Ns,Us,Ca)||(t=[1,0,0,0,1,0,0,0,1],!ic(t,Ds,Ns,Us,Ca))?!1:(Pa.crossVectors(Li,Di),t=[Pa.x,Pa.y,Pa.z],ic(t,Ds,Ns,Us,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fi=[new F,new F,new F,new F,new F,new F,new F,new F],zn=new F,Ra=new Pn,Ds=new F,Ns=new F,Us=new F,Li=new F,Di=new F,os=new F,Sr=new F,Ca=new F,Pa=new F,ls=new F;function ic(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ls.fromArray(n,r);let o=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),u=i.dot(ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ot=new F,Ia=new Xe,Wp=0,en=class extends Kn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fd,this.updateRanges=[],this.gpuType=Wn,this.version=0,this._normalizationScale=e!==void 0?$c(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):xd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):yd(e,this.array)}};var Dr=class extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Nr=class extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ht=class extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}},Xp=new Pn,br=new F,sc=new F,Oi=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Xp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(br,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(sc)),this.expandByPoint(br.copy(e.center).sub(sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},qp=0,Rn=new at,rc=new Zt,Fs=new F,Sn=new Pn,Er=new Pn,qt=new F,Rt=class n extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_p(e)?Nr:Dr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return rc.lookAt(e),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(Sn.min,Er.min),Sn.expandByPoint(qt),qt.addVectors(Sn.max,Er.max),Sn.expandByPoint(qt)):(Sn.expandByPoint(Er.min),Sn.expandByPoint(Er.max))}Sn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(qt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)qt.fromBufferAttribute(o,c),l&&(Fs.fromBufferAttribute(e,c),qt.add(Fs)),s=Math.max(s,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new en(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)o[L]=new F,l[L]=new F;let u=new F,d=new F,h=new F,f=new Xe,g=new Xe,x=new Xe,p=new F,m=new F;function M(L,C,U){c[L]=c[C]=c[U]=1,u.fromBufferAttribute(i,L),d.fromBufferAttribute(i,C),h.fromBufferAttribute(i,U),f.fromBufferAttribute(r,L),g.fromBufferAttribute(r,C),x.fromBufferAttribute(r,U),d.sub(u),h.sub(u),g.sub(f),x.sub(f);let z=1/(g.x*x.y-x.x*g.y);isFinite(z)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(h,-g.y).multiplyScalar(z),m.copy(h).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(z),o[L].add(p),o[C].add(p),o[U].add(p),l[L].add(m),l[C].add(m),l[U].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,C=T.length;L<C;++L){let U=T[L],z=U.start,X=U.count;for(let P=z,Y=z+X;P<Y;P+=3)M(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let b=new F,A=new F,E=new F,_=new F;function S(L){E.fromBufferAttribute(s,L),_.copy(E);let C=o[L];b.copy(C),b.sub(E.multiplyScalar(E.dot(C))).normalize(),A.crossVectors(_,C);let z=A.dot(l[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,z)}for(let L=0,C=i.count;L<C;++L)c[L]&&S(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,d=new F;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new en(h,u,d)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ac=new F,Yp=new F,$p=new ze,kn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ac.subVectors(i,t).cross(Yp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(ac),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||$p.getNormalMatrix(e),s=this.coplanarPoint(ac).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Zp=0,xn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=or(),this.name="",this.type="Material",this.blending=sr,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Tc,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ja,this.stencilZFail=Ja,this.stencilZPass=Ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new kn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var pi=new F,oc=new F,La=new F,Da=new F,ds=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){oc.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),Da.copy(this.origin).sub(oc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(La),o=Da.dot(this.direction),l=-Da.dot(La),c=Da.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let x=1/u;d*=x,h*=x,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(oc).addScaledVector(La,h),f}intersectSphere(e,t){if(e.radius<0)return null;pi.subVectors(e.center,this.origin);let i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,g=t.x-a.x,x=t.y-a.y,p=t.z-a.z,m=i.x-a.x,M=i.y-a.y,T=i.z-a.z,b=Math.abs(l),A=Math.abs(c),E=Math.abs(u),_,S,L,C,U,z,X,P,Y,$,G,ne;if(b>=A&&b>=E?(L=l,z=d,Y=g,ne=m,l>=0?(_=c,S=u,C=h,U=f,X=x,P=p,$=M,G=T):(_=u,S=c,C=f,U=h,X=p,P=x,$=T,G=M)):A>=E?(L=c,z=h,Y=x,ne=M,c>=0?(_=u,S=l,C=f,U=d,X=p,P=g,$=T,G=m):(_=l,S=u,C=d,U=f,X=g,P=p,$=m,G=T)):(L=u,z=f,Y=p,ne=T,u>=0?(_=l,S=c,C=d,U=h,X=g,P=x,$=m,G=M):(_=c,S=l,C=h,U=d,X=x,P=g,$=M,G=m)),L===0)return null;let W=_/L,Q=S/L,k=1/L,re=C-W*z,fe=U-Q*z,H=X-W*Y,ie=P-Q*Y,ce=$-W*ne,ae=G-Q*ne,te=ce*ie-ae*H,Se=re*ae-fe*ce,Ke=H*fe-ie*re;if(s){if(te<0||Se<0||Ke<0)return null}else if((te<0||Se<0||Ke<0)&&(te>0||Se>0||Ke>0))return null;let be=te+Se+Ke;if(be===0)return null;let He=k*(te*z+Se*Y+Ke*ne);return(be>0?He<0:He>0)?null:this.at(He/be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xi=class extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mu=new at,cs=new ds,Na=new Oi,gu=new F,Ua=new F,Fa=new F,Oa=new F,lc=new F,Ba=new F,_u=new F,za=new F,Ct=class extends Zt{constructor(e=new Rt,t=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(lc.fromBufferAttribute(d,e),a?Ba.addScaledVector(lc,u):Ba.addScaledVector(lc.sub(t),u))}t.add(Ba)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(Na.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Na,gu)===null||cs.origin.distanceToSquared(gu)>(e.far-e.near)**2))&&(mu.copy(r).invert(),cs.copy(e.ray).applyMatrix4(mu),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let p=h[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),T=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,A=T;b<A;b+=3){let E=o.getX(b),_=o.getX(b+1),S=o.getX(b+2);s=ka(this,m,e,i,c,u,d,E,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let M=o.getX(p),T=o.getX(p+1),b=o.getX(p+2);s=ka(this,a,e,i,c,u,d,M,T,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let p=h[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),T=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,A=T;b<A;b+=3){let E=b,_=b+1,S=b+2;s=ka(this,m,e,i,c,u,d,E,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let M=p,T=p+1,b=p+2;s=ka(this,a,e,i,c,u,d,M,T,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Jp(n,e,t,i,s,r,a,o){let l;if(e.side===mn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ni,o),l===null)return null;za.copy(o),za.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(za);return c<t.near||c>t.far?null:{distance:c,point:za.clone(),object:n}}function ka(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ua),n.getVertexPosition(l,Fa),n.getVertexPosition(c,Oa);let u=Jp(n,e,t,i,Ua,Fa,Oa,_u);if(u){let d=new F;Ui.getBarycoord(_u,Ua,Fa,Oa,d),s&&(u.uv=Ui.getInterpolatedAttribute(s,o,l,c,d,new Xe)),r&&(u.uv1=Ui.getInterpolatedAttribute(r,o,l,c,d,new Xe)),a&&(u.normal=Ui.getInterpolatedAttribute(a,o,l,c,d,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new F,materialIndex:0};Ui.getNormal(Ua,Fa,Oa,h.normal),u.face=h,u.barycoord=d}return u}var co=class extends $t{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Yt,u=Yt,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hs=new Oi,Kp=new Xe(.5,.5),Va=new F,Bi=class{constructor(e=new kn,t=new kn,i=new kn,s=new kn,r=new kn,a=new kn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Cn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],M=r[12],T=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-a,f-u,m-g,A-M).normalize(),s[1].setComponents(c+a,f+u,m+g,A+M).normalize(),s[2].setComponents(c+o,f+d,m+x,A+T).normalize(),s[3].setComponents(c-o,f-d,m-x,A-T).normalize(),i)s[4].setComponents(l,h,p,b).normalize(),s[5].setComponents(c-l,f-h,m-p,A-b).normalize();else if(s[4].setComponents(c-l,f-h,m-p,A-b).normalize(),t===Cn)s[5].setComponents(c+l,f+h,m+p,A+b).normalize();else if(t===Ws)s[5].setComponents(l,h,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);let t=Kp.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Va.x=s.normal.x>0?e.max.x:e.min.x,Va.y=s.normal.y>0?e.max.y:e.min.y,Va.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Va)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},xu=new at,ho=class n{constructor(){this.coordinateSystem=Cn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];xu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Bi),i[s].setFromProjectionMatrix(xu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Bi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Qn=class extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},uo=new F,fo=new F,yu=new at,wr=new ds,Ha=new Oi,cc=new F,vu=new F,Ks=class extends Zt{constructor(e=new Rt,t=new Qn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)uo.fromBufferAttribute(t,s-1),fo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=uo.distanceTo(fo);e.setAttribute("lineDistance",new ht(i,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,e.ray.intersectsSphere(Ha)===!1)return;yu.copy(s).invert(),wr.copy(e.ray).applyMatrix4(yu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=c){let m=u.getX(x),M=u.getX(x+1),T=Ga(this,e,wr,l,m,M,x);T&&t.push(T)}if(this.isLineLoop){let x=u.getX(g-1),p=u.getX(f),m=Ga(this,e,wr,l,x,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=c){let m=Ga(this,e,wr,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Ga(this,e,wr,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ga(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(uo.fromBufferAttribute(o,s),fo.fromBufferAttribute(o,r),t.distanceSqToSegment(uo,fo,cc,vu)>i)return;cc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(cc);if(!(c<e.near||c>e.far))return{distance:c,point:vu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Mu=new F,Su=new F,js=class extends Ks{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Mu.fromBufferAttribute(t,s),Su.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Mu.distanceTo(Su);e.setAttribute("lineDistance",new ht(i,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var yi=class extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bu=new at,mc=new ds,Wa=new Oi,Xa=new F,fs=class extends Zt{constructor(e=new Rt,t=new yi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(s),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;bu.copy(s).invert(),mc.copy(e.ray).applyMatrix4(bu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,x=f;g<x;g++){let p=c.getX(g);Xa.fromBufferAttribute(d,p),Eu(Xa,p,l,s,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,x=f;g<x;g++)Xa.fromBufferAttribute(d,g),Eu(Xa,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Eu(n,e,t,i,s,r,a){let o=mc.distanceSqToPoint(n);if(o<t){let l=new F;mc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ur=class extends $t{constructor(e=[],t=xs,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zi=class extends $t{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var vi=class extends $t{constructor(e,t,i=Gn,s,r,a,o=Yt,l=Yt,c,u=_i,d=1){if(u!==_i&&u!==Mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fr=class extends vi{constructor(e,t=Gn,i=xs,s,r,a=Yt,o=Yt,l,c=_i){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Or=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qs=class n extends Rt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(d,2));function g(x,p,m,M,T,b,A,E,_,S,L){let C=b/_,U=A/S,z=b/2,X=A/2,P=E/2,Y=_+1,$=S+1,G=0,ne=0,W=new F;for(let Q=0;Q<$;Q++){let k=Q*U-X;for(let re=0;re<Y;re++){let fe=re*C-z;W[x]=fe*M,W[p]=k*T,W[m]=P,c.push(W.x,W.y,W.z),W[x]=0,W[p]=0,W[m]=E>0?1:-1,u.push(W.x,W.y,W.z),d.push(re/_),d.push(1-Q/S),G+=1}}for(let Q=0;Q<S;Q++)for(let k=0;k<_;k++){let re=h+k+Y*Q,fe=h+k+Y*(Q+1),H=h+(k+1)+Y*(Q+1),ie=h+(k+1)+Y*Q;l.push(re,fe,ie),l.push(fe,H,ie),ne+=6}o.addGroup(f,ne,L),f+=ne,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Br=class n extends Rt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],x=[],p=[];for(let m=0;m<u;m++){let M=m*h-a;for(let T=0;T<c;T++){let b=T*d-r;g.push(b,-M,0),x.push(0,0,1),p.push(T/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let T=M+c*m,b=M+c*(m+1),A=M+1+c*(m+1),E=M+1+c*m;f.push(T,b,E),f.push(b,A,E)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var er=class n extends Rt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new F,h=new F,f=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let M=[],T=m/i,b=a+T*o,A=e*Math.cos(b),E=Math.sqrt(e*e-A*A),_=0;m===0&&a===0?_=.5/t:m===i&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let L=S/t,C=s+L*r;d.x=-E*Math.cos(C),d.y=A,d.z=E*Math.sin(C),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(L+_,1-T),M.push(c++)}u.push(M)}for(let m=0;m<i;m++)for(let M=0;M<t;M++){let T=u[m][M+1],b=u[m][M],A=u[m+1][M],E=u[m+1][M+1];(m!==0||a>0)&&f.push(T,b,E),(m!==i-1||l<Math.PI)&&f.push(b,A,E)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function vs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(wu(s))s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(wu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function hn(n){let e={};for(let t=0;t<n.length;t++){let i=vs(n[t]);for(let s in i)e[s]=i[s]}return e}function wu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function jp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var Md={clone:vs,merge:hn},Qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qp,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=jp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Pe().setHex(s.value);break;case"v2":this.uniforms[i].value=new Xe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new bt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ze().fromArray(s.value);break;case"m4":this.uniforms[i].value=new at().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},po=class extends ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},mo=class extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},tr=class extends mo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return us('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){us('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ti=class extends xn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pe(16777215),this.specular=new Pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Po,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var go=class extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_o=class extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Os(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function qa(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ki=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xo=class extends ki{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dc,endingEnd:dc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fc:r=e,o=2*t-i;break;case pc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case fc:a=e,l=2*i-t;break;case pc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,p=x*g,m=-h*p+2*h*x-h*g,M=(1+h)*p+(-1.5-2*h)*x+(-.5+h)*g+1,T=(-1-f)*p+(1.5+f)*x+.5*g,b=f*p-f*x;for(let A=0;A!==o;++A)r[A]=m*a[u+A]+M*a[c+A]+T*a[l+A]+b*a[d+A];return r}},yo=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},vo=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Mo=class extends ki{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-t)/(s-t),x=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*x+a[l+p]*g;return r}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let x=a[c+g],p=a[l+g],m=f*h+g*2,M=d[m],T=d[m+1],b=e*h+g*2,A=u[b],E=u[b+1],_=nm(i,t,M,A,s);r[g]=Sd(_,x,T,E,p)}return r}};function Sd(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function tm(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function nm(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Sd(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=tm(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var wn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Os(t,this.TimeBufferType),this.values=Os(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Os(e.times,Array),values:Os(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),qa(e.settings)&&(i.settings={inTangents:Os(e.settings.inTangents,Array),outTangents:Os(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Mo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Rr:t=this.InterpolantFactoryMethodDiscrete;break;case ro:t=this.InterpolantFactoryMethodLinear;break;case Za:t=this.InterpolantFactoryMethodSmooth;break;case uc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Be("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return ro;case this.InterpolantFactoryMethodSmooth:return Za;case this.InterpolantFactoryMethodBezier:return uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;qa(this.settings)&&(Tu(this.settings.inTangents,e),Tu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;qa(this.settings)&&(Au(this.settings.inTangents,e),Au(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&xp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Za,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let x=t[d+g];if(x!==t[h+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,h=a*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,qa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Tu(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Au(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=ro;var Vi=class extends wn{constructor(e,t,i){super(e,t,i)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Rr;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends wn{constructor(e,t,i,s){super(e,t,i,s)}};So.prototype.ValueTypeName="color";var bo=class extends wn{constructor(e,t,i,s){super(e,t,i,s)}};bo.prototype.ValueTypeName="number";var Eo=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)pn.slerpFlat(r,0,a,c-o,a,c,l);return r}},zr=class extends wn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Eo(this.times,this.values,this.getValueSize(),e)}};zr.prototype.ValueTypeName="quaternion";zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends wn{constructor(e,t,i){super(e,t,i)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Rr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends wn{constructor(e,t,i,s){super(e,t,i,s)}};wo.prototype.ValueTypeName="vector";var Hs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Ru(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Ru(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Ru(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var To=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_l=new To,Vn=class{constructor(e){this.manager=e!==void 0?e:_l,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Vn.DEFAULT_MATERIAL_NAME="__DEFAULT";var mi={},gc=class extends Error{constructor(e,t){super(e),this.response=t}},ps=class extends Vn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Hs.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:i,onError:s});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=mi[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0,x=0,p=new ReadableStream({start(m){M();function M(){d.read().then(({done:T,value:b})=>{if(T)m.close();else{x+=b.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let E=0,_=u.length;E<_;E++){let S=u[E];S.onProgress&&S.onProgress(A)}m.enqueue(b),M()}},T=>{m.error(T)})}}});return new Response(p)}else throw new gc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Hs.add(`file:${e}`,c);let u=mi[e];delete mi[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=mi[e];if(u===void 0)throw this.manager.itemError(e),c;delete mi[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Bs=new WeakMap,Ao=class extends Vn{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Hs.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Bs.get(a);d===void 0&&(d=[],Bs.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Xs("img");function l(){u(),t&&t(this);let d=Bs.get(this)||[];for(let h=0;h<d.length;h++){let f=d[h];f.onLoad&&f.onLoad(this)}Bs.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),Hs.remove(`image:${e}`);let h=Bs.get(this)||[];for(let f=0;f<h.length;f++){let g=h[f];g.onError&&g.onError(d)}Bs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Hs.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var kr=class extends Vn{constructor(e){super(e)}load(e,t,i,s){let r=new $t,a=new Ao(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Vr=class extends Zt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Hr=class extends Vr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},hc=new at,Cu=new F,Pu=new F,Ro=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bi,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cu),Pu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(hc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ws||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ya=new F,$a=new pn,Zn=new F,Gr=class extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ya,$a,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,$a,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ya,$a,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,$a,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ni=new F,Iu=new Xe,Lu=new Xe,fn=class extends Gr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,Iu,Lu),t.subVectors(Lu,Iu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Tr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Wr=class extends Gr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_c=class extends Ro{constructor(){super(new Wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ms=class extends Vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new _c}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Xr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var zs=-90,ks=1,nr=class extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(zs,ks,e,t);s.layers=this.layers,this.add(s);let r=new fn(zs,ks,e,t);r.layers=this.layers,this.add(r);let a=new fn(zs,ks,e,t);a.layers=this.layers,this.add(a);let o=new fn(zs,ks,e,t);o.layers=this.layers,this.add(o);let l=new fn(zs,ks,e,t);l.layers=this.layers,this.add(l);let c=new fn(zs,ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Co=class extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Jc="\\[\\]\\.:\\/",im=new RegExp("["+Jc+"]","g"),Kc="[^"+Jc+"]",sm="[^"+Jc.replace("\\.","")+"]",rm=/((?:WC+[\/:])*)/.source.replace("WC",Kc),am=/(WCOD+)?/.source.replace("WCOD",sm),om=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),lm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),cm=new RegExp("^"+rm+am+om+lm+"$"),hm=["material","materials","bones","map"],xc=class{constructor(e,t,i){let s=i||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Mt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(im,"")}static parseTrackName(e){let t=cm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);hm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=xc;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cv=new Float32Array(1);var Du=new at,qr=class{constructor(e,t,i=0,s=1/0){this.ray=new ds(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Du.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Du),this}intersectObject(e,t=!0,i=[]){return yc(e,this,i,t),i.sort(Nu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)yc(e[s],this,i,t);return i.sort(Nu),i}};function Nu(n,e){return n.distance-e.distance}function yc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)yc(r[a],e,t,!0)}}var vc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function jc(n,e,t,i){let s=um(i);switch(t){case Bc:return n*e;case kc:return n*e/s.components*s.byteLength;case Oo:return n*e/s.components*s.byteLength;case Gi:return n*e*2/s.components*s.byteLength;case Bo:return n*e*2/s.components*s.byteLength;case zc:return n*e*3/s.components*s.byteLength;case qn:return n*e*4/s.components*s.byteLength;case zo:return n*e*4/s.components*s.byteLength;case Jr:case Kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jr:case Qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vo:case Go:return Math.max(n,16)*Math.max(e,8)/4;case ko:case Ho:return Math.max(n,8)*Math.max(e,8)/2;case Wo:case Xo:case Yo:case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qo:case ea:case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case il:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case cl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case hl:case ul:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fl:case pl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ta:case ml:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function um(n){switch(n){case yn:case Nc:return{byteLength:1,components:1};case ar:case Uc:case Xn:return{byteLength:2,components:1};case Uo:case Fo:return{byteLength:2,components:4};case Gn:case No:case Wn:return{byteLength:4,components:1};case Fc:case Oc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Wd(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function fm(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
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
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ym=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vm=`#ifdef USE_AOMAP
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
#endif`,Mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sm=`#ifdef USE_BATCHING
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
#endif`,bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Am=`#ifdef USE_IRIDESCENCE
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
#endif`,Rm=`#ifdef USE_BUMPMAP
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
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Om=`#define PI 3.141592653589793
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
} // validated`,Bm=`vec3 transformedNormal = objectNormal;
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
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eg=`#ifdef USE_GRADIENTMAP
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
}`,tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rg=`#ifdef USE_ENVMAP
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
#endif`,ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
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
#endif`,ug=`uniform sampler2D dfgLUT;
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
}`,dg=`
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
#endif`,fg=`#if defined( RE_IndirectDiffuse )
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
#endif`,pg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bg=`#if defined( USE_POINTS_UV )
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
#endif`,Eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ag=`#if defined( USE_MORPHCOLORS )
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
#endif`,Rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`#ifdef USE_MORPHTARGETS
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
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fg=`#ifdef USE_NORMALMAP
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
#endif`,Og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jg=`float getShadowMask() {
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
}`,Qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e0=`#ifdef USE_SKINNING
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
#endif`,t0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,i0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o0=`#ifdef USE_TRANSMISSION
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
#endif`,l0=`#ifdef USE_TRANSMISSION
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,f0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p0=`uniform sampler2D t2D;
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`uniform float backgroundBlurriness;
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`#include <common>
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
}`,v0=`#if DEPTH_PACKING == 3200
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
}`,M0=`#define DISTANCE
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
}`,S0=`#define DISTANCE
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`uniform float scale;
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
}`,T0=`uniform vec3 diffuse;
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
}`,A0=`#include <common>
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#define LAMBERT
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
}`,P0=`#define LAMBERT
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
}`,I0=`#define MATCAP
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
}`,L0=`#define MATCAP
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
}`,D0=`#define NORMAL
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
}`,N0=`#define NORMAL
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
}`,U0=`#define PHONG
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
}`,F0=`#define PHONG
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
}`,O0=`#define STANDARD
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
}`,B0=`#define STANDARD
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
}`,z0=`#define TOON
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
}`,k0=`#define TOON
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
}`,V0=`uniform float size;
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
}`,H0=`uniform vec3 diffuse;
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
}`,G0=`#include <common>
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
}`,W0=`uniform vec3 color;
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
}`,X0=`uniform float rotation;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:pm,alphahash_pars_fragment:mm,alphamap_fragment:gm,alphamap_pars_fragment:_m,alphatest_fragment:xm,alphatest_pars_fragment:ym,aomap_fragment:vm,aomap_pars_fragment:Mm,batching_pars_vertex:Sm,batching_vertex:bm,begin_vertex:Em,beginnormal_vertex:wm,bsdfs:Tm,iridescence_fragment:Am,bumpmap_pars_fragment:Rm,clipping_planes_fragment:Cm,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Im,clipping_planes_vertex:Lm,color_fragment:Dm,color_pars_fragment:Nm,color_pars_vertex:Um,color_vertex:Fm,common:Om,defaultnormal_vertex:Bm,displacementmap_pars_vertex:zm,displacementmap_vertex:km,emissivemap_fragment:Vm,emissivemap_pars_fragment:Hm,colorspace_fragment:Gm,colorspace_pars_fragment:Wm,envmap_fragment:Xm,envmap_common_pars_fragment:qm,envmap_pars_fragment:Ym,envmap_pars_vertex:$m,envmap_physical_pars_fragment:rg,envmap_vertex:Zm,fog_vertex:Jm,fog_pars_vertex:Km,fog_fragment:jm,fog_pars_fragment:Qm,gradientmap_pars_fragment:eg,lightmap_pars_fragment:tg,lights_lambert_fragment:ng,lights_lambert_pars_fragment:ig,lights_pars_begin:sg,lights_toon_fragment:ag,lights_toon_pars_fragment:og,lights_phong_fragment:lg,lights_phong_pars_fragment:cg,lights_physical_fragment:hg,lights_physical_pars_fragment:ug,lights_fragment_begin:dg,lights_fragment_maps:fg,lights_fragment_end:pg,lightprobes_pars_fragment:mg,logdepthbuf_fragment:gg,logdepthbuf_pars_fragment:_g,logdepthbuf_pars_vertex:xg,logdepthbuf_vertex:yg,map_fragment:vg,map_pars_fragment:Mg,map_particle_fragment:Sg,map_particle_pars_fragment:bg,metalnessmap_fragment:Eg,metalnessmap_pars_fragment:wg,morphinstance_vertex:Tg,morphcolor_vertex:Ag,morphnormal_vertex:Rg,morphtarget_pars_vertex:Cg,morphtarget_vertex:Pg,normal_fragment_begin:Ig,normal_fragment_maps:Lg,normal_pars_fragment:Dg,normal_pars_vertex:Ng,normal_vertex:Ug,normalmap_pars_fragment:Fg,clearcoat_normal_fragment_begin:Og,clearcoat_normal_fragment_maps:Bg,clearcoat_pars_fragment:zg,iridescence_pars_fragment:kg,opaque_fragment:Vg,packing:Hg,premultiplied_alpha_fragment:Gg,project_vertex:Wg,dithering_fragment:Xg,dithering_pars_fragment:qg,roughnessmap_fragment:Yg,roughnessmap_pars_fragment:$g,shadowmap_pars_fragment:Zg,shadowmap_pars_vertex:Jg,shadowmap_vertex:Kg,shadowmask_pars_fragment:jg,skinbase_vertex:Qg,skinning_pars_vertex:e0,skinning_vertex:t0,skinnormal_vertex:n0,specularmap_fragment:i0,specularmap_pars_fragment:s0,tonemapping_fragment:r0,tonemapping_pars_fragment:a0,transmission_fragment:o0,transmission_pars_fragment:l0,uv_pars_fragment:c0,uv_pars_vertex:h0,uv_vertex:u0,worldpos_vertex:d0,background_vert:f0,background_frag:p0,backgroundCube_vert:m0,backgroundCube_frag:g0,cube_vert:_0,cube_frag:x0,depth_vert:y0,depth_frag:v0,distance_vert:M0,distance_frag:S0,equirect_vert:b0,equirect_frag:E0,linedashed_vert:w0,linedashed_frag:T0,meshbasic_vert:A0,meshbasic_frag:R0,meshlambert_vert:C0,meshlambert_frag:P0,meshmatcap_vert:I0,meshmatcap_frag:L0,meshnormal_vert:D0,meshnormal_frag:N0,meshphong_vert:U0,meshphong_frag:F0,meshphysical_vert:O0,meshphysical_frag:B0,meshtoon_vert:z0,meshtoon_frag:k0,points_vert:V0,points_frag:H0,shadow_vert:G0,shadow_frag:W0,sprite_vert:X0,sprite_frag:q0},ve={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},ri={basic:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:hn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:hn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:hn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:hn([ve.points,ve.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:hn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:hn([ve.common,ve.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:hn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:hn([ve.sprite,ve.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:hn([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:hn([ve.lights,ve.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ri.physical={uniforms:hn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var xl={r:0,b:0,g:0},Y0=new at,Xd=new ze;Xd.set(-1,0,0,0,1,0,0,0,1);function $0(n,e,t,i,s,r){let a=new Pe(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let b=M.backgroundBlurriness>0;T=e.get(T,b)}return T}function g(M){let T=!1,b=f(M);b===null?p(a,o):b&&b.isColor&&(p(b,1),T=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(M,T){let b=f(T);b&&b.isCubeTexture?(c===void 0&&(c=new Ct(new Qs(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:vs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Y0.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xd),c.material.toneMapped=Ze.getTransfer(b.colorSpace)!==ot,(u!==b||d!==b.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ct(new Br(2,2),new ei({name:"BackgroundMaterial",uniforms:vs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(b.colorSpace)!==ot,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,T){M.getRGB(xl,Zc(n)),t.buffers.color.setClear(xl.r,xl.g,xl.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:x,dispose:m}}function Z0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(U,z,X,P,Y){let $=!1,G=d(U,P,X,z);r!==G&&(r=G,c(r.object)),$=f(U,P,X,Y),$&&g(U,P,X,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,b(U,z,X,P),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function d(U,z,X,P){let Y=P.wireframe===!0,$=i[z.id];$===void 0&&($={},i[z.id]=$);let G=U.isInstancedMesh===!0?U.id:0,ne=$[G];ne===void 0&&(ne={},$[G]=ne);let W=ne[X.id];W===void 0&&(W={},ne[X.id]=W);let Q=W[Y];return Q===void 0&&(Q=h(l()),W[Y]=Q),Q}function h(U){let z=[],X=[],P=[];for(let Y=0;Y<t;Y++)z[Y]=0,X[Y]=0,P[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:P,object:U,attributes:{},index:null}}function f(U,z,X,P){let Y=r.attributes,$=z.attributes,G=0,ne=X.getAttributes();for(let W in ne)if(ne[W].location>=0){let k=Y[W],re=$[W];if(re===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(re=U.instanceColor)),k===void 0||k.attribute!==re||re&&k.data!==re.data)return!0;G++}return r.attributesNum!==G||r.index!==P}function g(U,z,X,P){let Y={},$=z.attributes,G=0,ne=X.getAttributes();for(let W in ne)if(ne[W].location>=0){let k=$[W];k===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(k=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(k=U.instanceColor));let re={};re.attribute=k,k&&k.data&&(re.data=k.data),Y[W]=re,G++}r.attributes=Y,r.attributesNum=G,r.index=P}function x(){let U=r.newAttributes;for(let z=0,X=U.length;z<X;z++)U[z]=0}function p(U){m(U,0)}function m(U,z){let X=r.newAttributes,P=r.enabledAttributes,Y=r.attributeDivisors;X[U]=1,P[U]===0&&(n.enableVertexAttribArray(U),P[U]=1),Y[U]!==z&&(n.vertexAttribDivisor(U,z),Y[U]=z)}function M(){let U=r.newAttributes,z=r.enabledAttributes;for(let X=0,P=z.length;X<P;X++)z[X]!==U[X]&&(n.disableVertexAttribArray(X),z[X]=0)}function T(U,z,X,P,Y,$,G){G===!0?n.vertexAttribIPointer(U,z,X,Y,$):n.vertexAttribPointer(U,z,X,P,Y,$)}function b(U,z,X,P){x();let Y=P.attributes,$=X.getAttributes(),G=z.defaultAttributeValues;for(let ne in $){let W=$[ne];if(W.location>=0){let Q=Y[ne];if(Q===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let k=Q.normalized,re=Q.itemSize,fe=e.get(Q);if(fe===void 0)continue;let H=fe.buffer,ie=fe.type,ce=fe.bytesPerElement,ae=ie===n.INT||ie===n.UNSIGNED_INT||Q.gpuType===No;if(Q.isInterleavedBufferAttribute){let te=Q.data,Se=te.isInterleavedBuffer===!0?te.stride:te.itemSize,Ke=Q.offset;if(te.isInstancedInterleavedBuffer||te.isInstancedBufferAttribute){for(let be=0;be<W.locationSize;be++)m(W.location+be,te.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let be=0;be<W.locationSize;be++)p(W.location+be);n.bindBuffer(n.ARRAY_BUFFER,H);for(let be=0;be<W.locationSize;be++)T(W.location+be,re/W.locationSize,ie,k,Se*ce,(Ke+re/W.locationSize*be)*ce,ae)}else{if(Q.isInstancedBufferAttribute){for(let te=0;te<W.locationSize;te++)m(W.location+te,Q.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let te=0;te<W.locationSize;te++)p(W.location+te);n.bindBuffer(n.ARRAY_BUFFER,H);for(let te=0;te<W.locationSize;te++)T(W.location+te,re/W.locationSize,ie,k,re*ce,re/W.locationSize*te*ce,ae)}}else if(G!==void 0){let k=G[ne];if(k!==void 0)switch(k.length){case 2:n.vertexAttrib2fv(W.location,k);break;case 3:n.vertexAttrib3fv(W.location,k);break;case 4:n.vertexAttrib4fv(W.location,k);break;default:n.vertexAttrib1fv(W.location,k)}}}}M()}function A(){L();for(let U in i){let z=i[U];for(let X in z){let P=z[X];for(let Y in P){let $=P[Y];for(let G in $)u($[G].object),delete $[G];delete P[Y]}}delete i[U]}}function E(U){if(i[U.id]===void 0)return;let z=i[U.id];for(let X in z){let P=z[X];for(let Y in P){let $=P[Y];for(let G in $)u($[G].object),delete $[G];delete P[Y]}}delete i[U.id]}function _(U){for(let z in i){let X=i[z];for(let P in X){let Y=X[P];if(Y[U.id]===void 0)continue;let $=Y[U.id];for(let G in $)u($[G].object),delete $[G];delete Y[U.id]}}}function S(U){for(let z in i){let X=i[z],P=U.isInstancedMesh===!0?U.id:0,Y=X[P];if(Y!==void 0){for(let $ in Y){let G=Y[$];for(let ne in G)u(G[ne].object),delete G[ne];delete Y[$]}delete X[P],Object.keys(X).length===0&&delete i[z]}}}function L(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function J0(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function K0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==qn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let S=_===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==yn&&_!==Wn&&!S&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Be("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:b,maxSamples:A,samples:E}}function j0(n){let e=this,t=null,i=0,s=!1,r=!1,a=new kn,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let M=r?0:i,T=M*4,b=m.clippingState||null;l.value=b,b=u(g,h,T,f);for(let A=0;A!==T;++A)b[A]=t[A];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,b=f;T!==x;++T,b+=4)a.copy(d[T]).applyMatrix4(M,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var ra=class extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ur(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qs(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:gs});r.uniforms.tEquirect.value=t;let a=new Ct(s,r),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=At),new nr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},bd=256,Q0=3,e_=20,qd=256,Yd=16,t_=3,n_=new F,i_=new Pe,vl=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new nr(1,10,null),this._boxMesh=new Ct(new Qs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=n_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(i_));let p=new nr(i,s,u);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=g,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(bd,Yc(e))}_fromTexture(e,t){e.mapping===xs||e.mapping===rr?this._setSize(e.image.length===0?bd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Ed(e,!1,!1),i=Math.log2(e)-Q0;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Ed(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===xs||e.mapping===rr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=wd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=s_(),this._integrationMaterial=r_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Yd);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-t_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(qd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=a_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Ed(n,e,t){return new ra(n,{minFilter:Hn,generateMipmaps:e,type:Xn,colorSpace:Cr,depthBuffer:t})}function aa(n,e,t){return new ei({name:n,uniforms:e,vertexShader:Je.cube_vert,fragmentShader:t,side:mn,blending:gs,depthTest:!1,depthWrite:!1})}function s_(){return aa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function r_(){return aa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Yd}},`

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
	`)}function a_(){return aa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${e_}
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
	`)}function wd(){return aa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Td(){return aa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function o_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Io||f===Lo)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new ra(g.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let f=h.mapping,g=f===Io||f===Lo,x=f===xs||f===rr;if(g||x){let p=t.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new vl(n)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let M=h.image;return g&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new vl(n)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===Io?h.mapping=xs:f===Lo&&(h.mapping=rr),h}function l(h){let f=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function l_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&us("WebGLRenderer: "+i+" extension not supported."),s}}}function c_(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function u(g){let x=g.attributes;for(let p in x)e.update(x[p],n.ARRAY_BUFFER)}function d(g){let x=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let M=x!==null?x.array.length:p.array.length/3-1,T=p.count>=65535?Nr:Dr,b=new T(Math.ceil(M/3)*6,1),A=b.array;if(x!==null){let _=x.array;m=x.version;for(let S=0,L=0;S<M;S+=3){let C=_[S+0],U=_[S+1],z=_[S+2];A[L++]=C,A[L++]=U,A[L++]=U,A[L++]=z,A[L++]=z,A[L++]=C}}else{m=p.version;for(let _=0,S=0;_<M;_+=3){let L=_+0,C=_+1,U=_+2;A[S++]=L,A[S++]=C,A[S++]=C,A[S++]=U,A[S++]=U,A[S++]=L}}b.version=m;let E=r.get(g);E&&e.remove(E),r.set(g,b)}function h(g){let x=r.get(g);if(x){let p=g.index;p!==null&&x.version<p.version&&d(g)}else d(g);return r.get(g)}function f(){for(let g in s){let x=s[g].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function h_(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*a),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*a,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=h[p];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function u_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function d_(n,e,t){let i=new WeakMap,s=new bt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let L=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",L)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let b=o.attributes.position.count*T,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*A*4*d),_=new Ir(E,b,A,d);_.type=Wn,_.needsUpdate=!0;let S=T*4;for(let C=0;C<d;C++){let U=p[C],z=m[C],X=M[C],P=b*A*4*C;for(let Y=0;Y<U.count;Y++){let $=Y*S;f===!0&&(s.fromBufferAttribute(U,Y),E[P+$+0]=s.x,E[P+$+1]=s.y,E[P+$+2]=s.z,E[P+$+3]=0),g===!0&&(s.fromBufferAttribute(z,Y),E[P+$+4]=s.x,E[P+$+5]=s.y,E[P+$+6]=s.z,E[P+$+7]=0),x===!0&&(s.fromBufferAttribute(X,Y),E[P+$+8]=s.x,E[P+$+9]=s.y,E[P+$+10]=s.z,E[P+$+11]=X.itemSize===4?s.w:1)}}h={count:d,texture:_,size:new Xe(b,A)},i.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function f_(n,e,t,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var p_={[Ac]:"LINEAR_TONE_MAPPING",[Rc]:"REINHARD_TONE_MAPPING",[Cc]:"CINEON_TONE_MAPPING",[$r]:"ACES_FILMIC_TONE_MAPPING",[Ic]:"AGX_TONE_MAPPING",[Lc]:"NEUTRAL_TONE_MAPPING",[Pc]:"CUSTOM_TONE_MAPPING"};function m_(n,e,t,i,s,r){let a=new En(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Rt;u.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ht([0,2,0,0,2,0],2));let d=new po({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ct(u,d),f=new Wr(-1,1,1,-1,0,1),g=null,x=null,p=!1,m,M=null,T=[],b=!1;this.setSize=function(A,E){a.setSize(A,E),o!==null&&o.setSize(A,E),l!==null&&l.setSize(A,E);for(let _=0;_<T.length;_++){let S=T[_];S.setSize&&S.setSize(A,E)}},this.setEffects=function(A){T=A,b=T.length>0&&T[0].isRenderPass===!0;let E=a.width,_=a.height;T.length>0&&o===null&&(o=new En(E,_,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),l=new En(E,_,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&T.some(L=>L.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new vi(E,_),r===!0&&(c.format=Mi,c.type=ys)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let L=0;L<T.length;L++){let C=T[L];C.setSize&&C.setSize(E,_),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,E){if(p||A.toneMapping===ii&&T.length===0)return!1;if(M=E,E!==null){let _=E.width,S=E.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return b===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=ii,!0},this.hasRenderPass=function(){return b},this.end=function(A,E){A.toneMapping=m,p=!0;let _=a,S=o;for(let L=0;L<T.length;L++){let C=T[L];C.enabled!==!1&&(C.render(A,S,_,E),C.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(g!==A.outputColorSpace||x!==A.toneMapping){g=A.outputColorSpace,x=A.toneMapping,d.defines={},Ze.getTransfer(g)===ot&&(d.defines.SRGB_TRANSFER="");let L=p_[x];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(M),A.render(h,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var $d=new $t,Zd=new vi(1,1),Jd=new Fr(1),Kd=new Ir,jd=new lo,Qd=new Ur,Ad=[],Rd=[],Cd=new Float32Array(16),Pd=new Float32Array(9),Id=new Float32Array(4);function hr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Ad[s];if(r===void 0&&(r=new Float32Array(s),Ad[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Sl(n,e){let t=Rd[e];t===void 0&&(t=new Int32Array(e),Rd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function g_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function __(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function x_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function y_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function v_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;Id.set(i),n.uniformMatrix2fv(this.addr,!1,Id),kt(t,i)}}function M_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;Pd.set(i),n.uniformMatrix3fv(this.addr,!1,Pd),kt(t,i)}}function S_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;Cd.set(i),n.uniformMatrix4fv(this.addr,!1,Cd),kt(t,i)}}function b_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function E_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function w_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function T_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function A_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function R_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function C_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function P_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function bl(n){return n.version===0&&(n.compareFunction=Gc,n.needsUpdate=!0),n}function I_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=bl(Zd):r=$d,t.setTexture2D(e||r,s)}function L_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jd,s)}function D_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=bl(Jd):r=Qd,t.setTextureCube(e||r,s)}function N_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Kd,s)}function U_(n){switch(n){case 5126:return g_;case 35664:return __;case 35665:return x_;case 35666:return y_;case 35674:return v_;case 35675:return M_;case 35676:return S_;case 5124:case 35670:return b_;case 35667:case 35671:return E_;case 35668:case 35672:return w_;case 35669:case 35673:return T_;case 5125:return A_;case 36294:return R_;case 36295:return C_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return N_}}function F_(n,e){n.uniform1fv(this.addr,e)}function O_(n,e){let t=hr(e,this.size,2);n.uniform2fv(this.addr,t)}function B_(n,e){let t=hr(e,this.size,3);n.uniform3fv(this.addr,t)}function z_(n,e){let t=hr(e,this.size,4);n.uniform4fv(this.addr,t)}function k_(n,e){let t=hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function V_(n,e){let t=hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function H_(n,e){let t=hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function G_(n,e){n.uniform1iv(this.addr,e)}function W_(n,e){n.uniform2iv(this.addr,e)}function X_(n,e){n.uniform3iv(this.addr,e)}function q_(n,e){n.uniform4iv(this.addr,e)}function Y_(n,e){n.uniform1uiv(this.addr,e)}function $_(n,e){n.uniform2uiv(this.addr,e)}function Z_(n,e){n.uniform3uiv(this.addr,e)}function J_(n,e){n.uniform4uiv(this.addr,e)}function K_(n,e,t){let i=this.cache,s=e.length,r=Sl(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=bl(Zd):a=$d;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function j_(n,e,t){let i=this.cache,s=e.length,r=Sl(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||jd,r[a])}function Q_(n,e,t){let i=this.cache,s=e.length,r=Sl(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=bl(Jd):a=Qd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function ex(n,e,t){let i=this.cache,s=e.length,r=Sl(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Kd,r[a])}function tx(n){switch(n){case 5126:return F_;case 35664:return O_;case 35665:return B_;case 35666:return z_;case 35674:return k_;case 35675:return V_;case 35676:return H_;case 5124:case 35670:return G_;case 35667:case 35671:return W_;case 35668:case 35672:return X_;case 35669:case 35673:return q_;case 5125:return Y_;case 36294:return $_;case 36295:return Z_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return ex}}var th=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=U_(t.type)}},nh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tx(t.type)}},ih=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Qc=/(\w+)(\])?(\[|\.)?/g;function Ld(n,e){n.seq.push(e),n.map[e.id]=e}function nx(n,e,t){let i=n.name,s=i.length;for(Qc.lastIndex=0;;){let r=Qc.exec(i),a=Qc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ld(t,c===void 0?new th(o,n,e):new nh(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new ih(o),Ld(t,d)),t=d}}}var cr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);nx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Dd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ix=37297,sx=0;function rx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Nd=new ze;function ax(n){Ze._getMatrix(Nd,Ze.workingColorSpace,n);let e=`mat3( ${Nd.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Pr:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ud(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+rx(n.getShaderSource(e),o)}else return r}function ox(n,e){let t=ax(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var lx={[Ac]:"Linear",[Rc]:"Reinhard",[Cc]:"Cineon",[$r]:"ACESFilmic",[Ic]:"AgX",[Lc]:"Neutral",[Pc]:"Custom"};function cx(n,e){let t=lx[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var yl=new F;function hx(){Ze.getLuminanceCoefficients(yl);let n=yl.x.toFixed(4),e=yl.y.toFixed(4),t=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ux(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function dx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function sa(n){return n!==""}function Fd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Od(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var px=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(n){return n.replace(px,mx)}function mx(n,e){let t=Je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return sh(t)}var gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bd(n){return n.replace(gx,_x)}function _x(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var xx={[Yr]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function yx(n){return xx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vx={[rr]:"ENVMAP_MODE_REFRACTION"};function Mx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":vx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Sx={[Po]:"ENVMAP_BLENDING_MULTIPLY",[nd]:"ENVMAP_BLENDING_MIX",[id]:"ENVMAP_BLENDING_ADD"};function bx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Sx[n.combine]||"ENVMAP_BLENDING_NONE"}function Ex(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=yx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Mx(t),d=bx(t),h=ux(t),f=dx(r),g=s.createProgram(),x,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(sa).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(sa).join(`
`),p.length>0&&(p+=`
`)):(x=[zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),p=[zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Je.tonemapping_pars_fragment:"",t.toneMapping!==ii?cx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,ox("linearToOutputTexel",t.outputColorSpace),hx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),a=sh(a),a=Fd(a,t),a=Od(a,t),o=sh(o),o=Fd(o,t),o=Od(o,t),a=Bd(a),o=Bd(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=m+x+a,T=m+p+o,b=Dd(s,s.VERTEX_SHADER,M),A=Dd(s,s.FRAGMENT_SHADER,T);s.attachShader(g,b),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(C){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(g)||"",z=s.getShaderInfoLog(b)||"",X=s.getShaderInfoLog(A)||"",P=U.trim(),Y=z.trim(),$=X.trim(),G=!0,ne=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,b,A);else{let W=Ud(s,b,"vertex"),Q=Ud(s,A,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+W+`
`+Q)}else P!==""?Be("WebGLProgram: Program Info Log:",P):(Y===""||$==="")&&(ne=!1);ne&&(C.diagnostics={runnable:G,programLog:P,vertexShader:{log:Y,prefix:x},fragmentShader:{log:$,prefix:p}})}s.deleteShader(b),s.deleteShader(A),_=new cr(s,g),S=fx(s,g)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(g,ix)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=A,this}var wx=0,rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ah(e),t.set(e,i)),i}},ah=class{constructor(e){this.id=wx++,this.code=e,this.usedTimes=0}};function Tx(n){return n===Gi||n===ea||n===ta}function Ax(n,e,t,i,s,r){let a=new Zs,o=new rh,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,S,L,C,U,z){let X=C.fog,P=U.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=e.get(_.envMap||Y,$),ne=h[_.type],W=i.precision;_.precision!==null&&(W=i.getMaxPrecision(_.precision),W!==_.precision&&Be("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,k=Q!==void 0?Q.length:0,re=0;P.morphAttributes.position!==void 0&&(re=1),P.morphAttributes.normal!==void 0&&(re=2),P.morphAttributes.color!==void 0&&(re=3);let fe,H,ie,ce;if(ne){let ye=ri[ne];fe=ye.vertexShader,H=ye.fragmentShader}else{fe=_.vertexShader,H=_.fragmentShader;let ye=o.getVertexShaderStage(_),ct=o.getFragmentShaderStage(_);o.update(_,ye,ct),ie=ye.id,ce=ct.id}let ae=n.getRenderTarget(),te=n.state.buffers.depth.getReversed(),Se=U.isInstancedMesh===!0,Ke=U.isBatchedMesh===!0,be=!!_.map,He=!!_.matcap,qe=!!G,Fe=qe&&G.isPMREMTexture===!0,_t=!!_.aoMap,St=!!_.lightMap,lt=!!_.bumpMap&&_.wireframe===!1,st=!!_.normalMap,Bt=!!_.displacementMap,vt=!!_.emissiveMap,It=!!_.metalnessMap,Lt=!!_.roughnessMap,Dt=_.anisotropy>0,N=_.clearcoat>0,jt=_.diffuseRoughness>0,pt=_.dispersion>0,mt=_.retroreflectivity>0,_e=_.iridescence>0,Tt=_.sheen>0,Ue=_.transmission>0,ke=Dt&&!!_.anisotropyMap,w=N&&!!_.clearcoatMap,y=N&&!!_.clearcoatNormalMap,O=N&&!!_.clearcoatRoughnessMap,se=jt&&!!_.diffuseRoughnessMap,j=_e&&!!_.iridescenceMap,oe=_e&&!!_.iridescenceThicknessMap,de=Tt&&!!_.sheenColorMap,J=Tt&&!!_.sheenRoughnessMap,K=!!_.specularMap,ue=!!_.specularColorMap,R=!!_.specularIntensityMap,ee=Ue&&!!_.transmissionMap,Z=Ue&&!!_.thicknessMap,me=!!_.gradientMap,he=!!_.alphaMap,pe=_.alphaTest>0,De=!!_.alphaHash,$e=!!_.extensions,le=ii;_.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(le=n.toneMapping);let Oe=Fe?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Ye={shaderID:ne,shaderType:_.type,shaderName:_.name,vertexShader:fe,fragmentShader:H,defines:_.defines,customVertexShaderID:ie,customFragmentShaderID:ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:Ke,batchingColor:Ke&&U._colorsTexture!==null,instancing:Se,instancingColor:Se&&U.instanceColor!==null,instancingMorph:Se&&U.morphTexture!==null,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:be,matcap:He,envMap:qe,envMapMode:qe&&G.mapping,envMapPMREM:Fe,envMapMaxLod:Fe?Oe.length-1:null,envMapSize:Fe?Oe[0].width:null,aoMap:_t,lightMap:St,bumpMap:lt,normalMap:st,displacementMap:Bt,emissiveMap:vt,normalMapObjectSpace:st&&_.normalMapType===ad,normalMapTangentSpace:st&&_.normalMapType===na,packedNormalMap:st&&_.normalMapType===na&&Tx(_.normalMap.format),metalnessMap:It,roughnessMap:Lt,anisotropy:Dt,anisotropyMap:ke,clearcoat:N,clearcoatMap:w,clearcoatNormalMap:y,clearcoatRoughnessMap:O,diffuseRoughness:jt,diffuseRoughnessMap:se,dispersion:pt,retroreflection:mt,iridescence:_e,iridescenceMap:j,iridescenceThicknessMap:oe,sheen:Tt,sheenColorMap:de,sheenRoughnessMap:J,specularMap:K,specularColorMap:ue,specularIntensityMap:R,transmission:Ue,transmissionMap:ee,thicknessMap:Z,gradientMap:me,opaque:_.transparent===!1&&_.blending===sr&&_.alphaToCoverage===!1,alphaMap:he,alphaTest:pe,alphaHash:De,combine:_.combine,mapUv:be&&f(_.map.channel),aoMapUv:_t&&f(_.aoMap.channel),lightMapUv:St&&f(_.lightMap.channel),bumpMapUv:lt&&f(_.bumpMap.channel),normalMapUv:st&&f(_.normalMap.channel),displacementMapUv:Bt&&f(_.displacementMap.channel),emissiveMapUv:vt&&f(_.emissiveMap.channel),metalnessMapUv:It&&f(_.metalnessMap.channel),roughnessMapUv:Lt&&f(_.roughnessMap.channel),anisotropyMapUv:ke&&f(_.anisotropyMap.channel),clearcoatMapUv:w&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:de&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&f(_.sheenRoughnessMap.channel),specularMapUv:K&&f(_.specularMap.channel),specularColorMapUv:ue&&f(_.specularColorMap.channel),specularIntensityMapUv:R&&f(_.specularIntensityMap.channel),transmissionMapUv:ee&&f(_.transmissionMap.channel),thicknessMapUv:Z&&f(_.thicknessMap.channel),alphaMapUv:he&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(st||Dt),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!P.attributes.uv&&(be||he),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&st===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:re,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:z.filter(ye=>ye.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:le,decodeVideoTexture:be&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===ot,decodeVideoTextureEmissive:vt&&_.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(_.emissiveMap.colorSpace)===ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===tn,flipSided:_.side===mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:$e&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&_.extensions.multiDraw===!0||Ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function x(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)S.push(L),S.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(p(S,_),m(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function m(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let S=h[_.type],L;if(S){let C=ri[S];L=Md.clone(C.uniforms)}else L=_.uniforms;return L}function T(_,S){let L=u.get(S);return L!==void 0?++L.usedTimes:(L=new Ex(n,S,_,s),c.push(L),u.set(S,L)),L}function b(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:M,acquireProgram:T,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:E}}function Rx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Cx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function kd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,x,p,m){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:p,group:m},n[e]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=g,M.materialVariant=a(h),M.groupOrder=x,M.renderOrder=h.renderOrder,M.z=p,M.group=m),e++,M}function l(h,f,g,x,p,m,M){M.reversedDepth===!0&&(p=-p);let T=o(h,f,g,x,p,m);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):t.push(T)}function c(h,f,g,x,p,m){let M=o(h,f,g,x,p,m);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,f){t.length>1&&t.sort(h||Cx),i.length>1&&i.sort(f||kd),s.length>1&&s.sort(f||kd)}function d(){for(let h=e,f=n.length;h<f;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Px(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Vd,n.set(i,[a])):s>=r.length?(a=new Vd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ix(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Pe};break;case"SpotLight":t={position:new F,direction:new F,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function Lx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Dx=0;function Nx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ux(n){let e=new Ix,t=Lx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new at,a=new at;function o(c){let u=0,d=0,h=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,M=0,T=0,b=0,A=0,E=0,_=0,S=0,L=0,C=0;c.sort(Nx);for(let z=0,X=c.length;z<X;z++){let P=c[z],Y=P.color,$=P.intensity,G=P.distance,ne=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Gi?ne=P.shadow.map.texture:ne=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=Y.r*$,d+=Y.g*$,h+=Y.b*$;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],$);C++}else if(P.isSunLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,k=t.get(P);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=k,i.sunShadowMap[g]=ne;let re=Q.getViewportCount();for(let fe=0;fe<re;fe++)i.sunShadowMatrix[x+fe]=Q.getMatrix(fe),i.sunShadowCascade[x+fe]=Q._cascadeData[fe];x+=re,g++}i.sun[f]=W,f++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,k=t.get(P);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=ne,i.directionalShadowMatrix[p]=P.shadow.matrix,A++}i.directional[p]=W,p++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(Y).multiplyScalar($),W.distance=G,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[M]=W;let Q=P.shadow;if(P.map&&(i.spotLightMap[S]=P.map,S++,Q.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[M]=Q.matrix,P.castShadow){let k=t.get(P);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,i.spotShadow[M]=k,i.spotShadowMap[M]=ne,_++}M++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(Y).multiplyScalar($),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[T]=W,T++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let Q=P.shadow,k=t.get(P);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,k.shadowCameraNear=Q.camera.near,k.shadowCameraFar=Q.camera.far,i.pointShadow[m]=k,i.pointShadowMap[m]=ne,i.pointShadowMatrix[m]=P.shadow.matrix,E++}i.point[m]=W,m++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar($),W.groundColor.copy(P.groundColor).multiplyScalar($),i.hemi[b]=W,b++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let U=i.hash;(U.sunLength!==f||U.directionalLength!==p||U.pointLength!==m||U.spotLength!==M||U.rectAreaLength!==T||U.hemiLength!==b||U.numSunShadows!==g||U.numDirectionalShadows!==A||U.numPointShadows!==E||U.numSpotShadows!==_||U.numSpotMaps!==S||U.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=p,i.spot.length=M,i.rectArea.length=T,i.point.length=m,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-L,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=C,U.sunLength=f,U.directionalLength=p,U.pointLength=m,U.spotLength=M,U.rectAreaLength=T,U.hemiLength=b,U.numSunShadows=g,U.numDirectionalShadows=A,U.numPointShadows=E,U.numSpotShadows=_,U.numSpotMaps=S,U.numLightProbes=C,i.version=Dx++)}function l(c,u){let d=0,h=0,f=0,g=0,x=0,p=0,m=u.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let b=c[M];if(b.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(m),d++}else if(b.isDirectionalLight){let A=i.directional[h];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),h++}else if(b.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(b.isRectAreaLight){let A=i.rectArea[x];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let A=i.hemi[p];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function Hd(n){let e=new Ux(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){i.push(d)}function l(){e.setup(t),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Fx(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Hd(n),e.set(s,[o])):r>=a.length?(o=new Hd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
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
}`,zx=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],kx=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Gd=new at,ia=new F,eh=new F;function Vx(n,e,t){let i=new Bi,s=new Xe,r=new Xe,a=new bt,o=new go,l=new _o,c={},u=t.maxTextureSize,d={[ni]:mn,[mn]:ni,[tn]:tn},h=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Ox,fragmentShader:Bx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ct(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yr;let m=this.type;this.render=function(E,_,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Ou&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Yr);let L=n.getRenderTarget(),C=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),z=n.state;z.setBlending(gs),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let X=m!==this.type;X&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(Y=>Y.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,Y=E.length;P<Y;P++){let $=E[P],G=$.shadow;if(G===void 0){Be("WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ne=G.getFrameExtents();s.multiply(ne),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,G.mapSize.y=r.y));let W=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||X===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ir){if($.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new En(s.x,s.y,{format:Gi,type:Xn,minFilter:At,magFilter:At,generateMipmaps:!1}),G.map.texture.name=$.name+".shadowMap",G.map.depthTexture=new vi(s.x,s.y,Wn),G.map.depthTexture.name=$.name+".shadowMapDepth",G.map.depthTexture.format=_i,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Yt,G.map.depthTexture.magFilter=Yt}else $.isPointLight?(G.map=new ra(s.x),G.map.depthTexture=new Fr(s.x,Gn)):(G.map=new En(s.x,s.y),G.map.depthTexture=new vi(s.x,s.y,Gn)),G.map.depthTexture.name=$.name+".shadowMap",G.map.depthTexture.format=_i,this.type===Yr?(G.map.depthTexture.compareFunction=W?Hc:Vc,G.map.depthTexture.minFilter=At,G.map.depthTexture.magFilter=At):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Yt,G.map.depthTexture.magFilter=Yt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let Q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();$.isPointLight!==!0&&G.updateMatrices($,S);let k=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:S.layers;for(let re=0;re<Q;re++){let fe=G.getCamera(re);if($.isPointLight){let H=G.camera,ie=G.matrix,ce=$.distance||H.far;ce!==H.far&&(H.far=ce,H.updateProjectionMatrix()),ia.setFromMatrixPosition($.matrixWorld),H.position.copy(ia),eh.copy(H.position),eh.add(zx[re]),H.up.copy(kx[re]),H.lookAt(eh),H.updateMatrixWorld(),ie.makeTranslation(-ia.x,-ia.y,-ia.z),Gd.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Gd,H.coordinateSystem,H.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,re),n.clear();else{re===0&&(n.setRenderTarget(G.map),n.clear());let H=G.getViewport(re);a.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),z.viewport(a)}i=G.getFrustum(re),b(_,S,fe,$,k,this.type)}G.isPointLightShadow!==!0&&this.type===ir&&M(G,S),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(L,C,U)};function M(E,_){let S=e.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new En(s.x,s.y,{format:Gi,type:Xn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(_,null,S,h,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(_,null,S,f,x,null)}function T(E,_,S,L){let C=null,U=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)C=U;else if(C=S.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let z=C.uuid,X=_.uuid,P=c[z];P===void 0&&(P={},c[z]=P);let Y=P[X];Y===void 0&&(Y=C.clone(),P[X]=Y,_.addEventListener("dispose",A)),C=Y}if(C.visible=_.visible,C.wireframe=_.wireframe,L===ir?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:d[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let z=n.properties.get(C);z.light=S}return C}function b(E,_,S,L,C,U){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&U===ir)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let P=e.update(E),Y=E.material;if(Array.isArray(Y)){let $=P.groups;for(let G=0,ne=$.length;G<ne;G++){let W=$[G],Q=Y[W.materialIndex];if(Q&&Q.visible){let k=T(E,Q,L,U);E.onBeforeShadow(n,E,_,S,P,k,W),n.renderBufferDirect(S,null,P,k,E,W),E.onAfterShadow(n,E,_,S,P,k,W)}}}else if(Y.visible){let $=T(E,Y,L,U);E.onBeforeShadow(n,E,_,S,P,$,null),n.renderBufferDirect(S,null,P,$,E,null),E.onAfterShadow(n,E,_,S,P,$,null)}}let X=E.children;for(let P=0,Y=X.length;P<Y;P++)b(X[P],_,S,L,C,U)}function A(E){E.target.removeEventListener("dispose",A);for(let S in c){let L=c[S],C=E.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function Hx(n,e){function t(){let R=!1,ee=new bt,Z=null,me=new bt(0,0,0,0);return{setMask:function(he){Z!==he&&!R&&(n.colorMask(he,he,he,he),Z=he)},setLocked:function(he){R=he},setClear:function(he,pe,De,$e,le){le===!0&&(he*=$e,pe*=$e,De*=$e),ee.set(he,pe,De,$e),me.equals(ee)===!1&&(n.clearColor(he,pe,De,$e),me.copy(ee))},reset:function(){R=!1,Z=null,me.set(-1,0,0,0)}}}function i(){let R=!1,ee=!1,Z=null,me=null,he=null;return{setReversed:function(pe){if(ee!==pe){let De=e.get("EXT_clip_control");pe?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),ee=pe;let $e=he;he=null,this.setClear($e)}},getReversed:function(){return ee},setTest:function(pe){pe?te(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(pe){Z!==pe&&!R&&(n.depthMask(pe),Z=pe)},setFunc:function(pe){if(ee&&(pe=_d[pe]),me!==pe){switch(pe){case Ka:n.depthFunc(n.NEVER);break;case ja:n.depthFunc(n.ALWAYS);break;case Qa:n.depthFunc(n.LESS);break;case Gs:n.depthFunc(n.LEQUAL);break;case eo:n.depthFunc(n.EQUAL);break;case to:n.depthFunc(n.GEQUAL);break;case no:n.depthFunc(n.GREATER);break;case io:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=pe}},setLocked:function(pe){R=pe},setClear:function(pe){he!==pe&&(he=pe,ee&&(pe=1-pe),n.clearDepth(pe))},reset:function(){R=!1,Z=null,me=null,he=null,ee=!1}}}function s(){let R=!1,ee=null,Z=null,me=null,he=null,pe=null,De=null,$e=null,le=null;return{setTest:function(Oe){R||(Oe?te(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(Oe){ee!==Oe&&!R&&(n.stencilMask(Oe),ee=Oe)},setFunc:function(Oe,Ye,ye){(Z!==Oe||me!==Ye||he!==ye)&&(n.stencilFunc(Oe,Ye,ye),Z=Oe,me=Ye,he=ye)},setOp:function(Oe,Ye,ye){(pe!==Oe||De!==Ye||$e!==ye)&&(n.stencilOp(Oe,Ye,ye),pe=Oe,De=Ye,$e=ye)},setLocked:function(Oe){R=Oe},setClear:function(Oe){le!==Oe&&(n.clearStencil(Oe),le=Oe)},reset:function(){R=!1,ee=null,Z=null,me=null,he=null,pe=null,De=null,$e=null,le=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],x=null,p=!1,m=null,M=null,T=null,b=null,A=null,E=null,_=null,S=new Pe(0,0,0),L=0,C=!1,U=null,z=null,X=null,P=null,Y=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ne=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=ne>=1):W.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=ne>=2);let Q=null,k={},re=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),H=new bt().fromArray(re),ie=new bt().fromArray(fe);function ce(R,ee,Z,me){let he=new Uint8Array(4),pe=n.createTexture();n.bindTexture(R,pe),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<Z;De++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(ee+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return pe}let ae={};ae[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(Gs),lt(!1),st(Mc),te(n.CULL_FACE),_t(gs);function te(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function Se(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function Ke(R,ee){return h[R]!==ee?(n.bindFramebuffer(R,ee),h[R]=ee,R===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ee),R===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ee),!0):!1}function be(R,ee){let Z=g,me=!1;if(R){Z=f.get(ee),Z===void 0&&(Z=[],f.set(ee,Z));let he=R.textures;if(Z.length!==he.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,De=he.length;pe<De;pe++)Z[pe]=n.COLOR_ATTACHMENT0+pe;Z.length=he.length,me=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,me=!0);me&&n.drawBuffers(Z)}function He(R){return x!==R?(n.useProgram(R),x=R,!0):!1}let qe={[_s]:n.FUNC_ADD,[zu]:n.FUNC_SUBTRACT,[ku]:n.FUNC_REVERSE_SUBTRACT};qe[Vu]=n.MIN,qe[Hu]=n.MAX;let Fe={[Gu]:n.ZERO,[Wu]:n.ONE,[Xu]:n.SRC_COLOR,[wc]:n.SRC_ALPHA,[Ku]:n.SRC_ALPHA_SATURATE,[Zu]:n.DST_COLOR,[Yu]:n.DST_ALPHA,[qu]:n.ONE_MINUS_SRC_COLOR,[Tc]:n.ONE_MINUS_SRC_ALPHA,[Ju]:n.ONE_MINUS_DST_COLOR,[$u]:n.ONE_MINUS_DST_ALPHA,[ju]:n.CONSTANT_COLOR,[Qu]:n.ONE_MINUS_CONSTANT_COLOR,[ed]:n.CONSTANT_ALPHA,[td]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(R,ee,Z,me,he,pe,De,$e,le,Oe){if(R===gs){p===!0&&(Se(n.BLEND),p=!1);return}if(p===!1&&(te(n.BLEND),p=!0),R!==Bu){if(R!==m||Oe!==C){if((M!==_s||A!==_s)&&(n.blendEquation(n.FUNC_ADD),M=_s,A=_s),Oe)switch(R){case sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sc:n.blendFunc(n.ONE,n.ONE);break;case bc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ec:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ve("WebGLState: Invalid blending: ",R);break}else switch(R){case sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bc:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ec:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",R);break}T=null,b=null,E=null,_=null,S.set(0,0,0),L=0,m=R,C=Oe}return}he=he||ee,pe=pe||Z,De=De||me,(ee!==M||he!==A)&&(n.blendEquationSeparate(qe[ee],qe[he]),M=ee,A=he),(Z!==T||me!==b||pe!==E||De!==_)&&(n.blendFuncSeparate(Fe[Z],Fe[me],Fe[pe],Fe[De]),T=Z,b=me,E=pe,_=De),($e.equals(S)===!1||le!==L)&&(n.blendColor($e.r,$e.g,$e.b,le),S.copy($e),L=le),m=R,C=!1}function St(R,ee){R.side===tn?Se(n.CULL_FACE):te(n.CULL_FACE);let Z=R.side===mn;ee&&(Z=!Z),lt(Z),R.blending===sr&&R.transparent===!1?_t(gs):_t(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let me=R.stencilWrite;o.setTest(me),me&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),vt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function lt(R){U!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),U=R)}function st(R){R!==Uu?(te(n.CULL_FACE),R!==z&&(R===Mc?n.cullFace(n.BACK):R===Fu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),z=R}function Bt(R){R!==X&&(G&&n.lineWidth(R),X=R)}function vt(R,ee,Z){R?(te(n.POLYGON_OFFSET_FILL),(P!==ee||Y!==Z)&&(P=ee,Y=Z,a.getReversed()&&(ee=-ee,Z=-Z),n.polygonOffset(ee,Z))):Se(n.POLYGON_OFFSET_FILL)}function It(R){R?te(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function Lt(R){R===void 0&&(R=n.TEXTURE0+$-1),Q!==R&&(n.activeTexture(R),Q=R)}function Dt(R,ee,Z){Z===void 0&&(Q===null?Z=n.TEXTURE0+$-1:Z=Q);let me=k[Z];me===void 0&&(me={type:void 0,texture:void 0},k[Z]=me),(me.type!==R||me.texture!==ee)&&(Q!==Z&&(n.activeTexture(Z),Q=Z),n.bindTexture(R,ee||ae[R]),me.type=R,me.texture=ee)}function N(){let R=k[Q];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function jt(){try{n.compressedTexImage2D(...arguments)}catch(R){Ve("WebGLState:",R)}}function pt(){try{n.compressedTexImage3D(...arguments)}catch(R){Ve("WebGLState:",R)}}function mt(){try{n.texSubImage2D(...arguments)}catch(R){Ve("WebGLState:",R)}}function _e(){try{n.texSubImage3D(...arguments)}catch(R){Ve("WebGLState:",R)}}function Tt(){try{n.compressedTexSubImage2D(...arguments)}catch(R){Ve("WebGLState:",R)}}function Ue(){try{n.compressedTexSubImage3D(...arguments)}catch(R){Ve("WebGLState:",R)}}function ke(){try{n.texStorage2D(...arguments)}catch(R){Ve("WebGLState:",R)}}function w(){try{n.texStorage3D(...arguments)}catch(R){Ve("WebGLState:",R)}}function y(){try{n.texImage2D(...arguments)}catch(R){Ve("WebGLState:",R)}}function O(){try{n.texImage3D(...arguments)}catch(R){Ve("WebGLState:",R)}}function se(R){return d[R]!==void 0?d[R]:n.getParameter(R)}function j(R,ee){d[R]!==ee&&(n.pixelStorei(R,ee),d[R]=ee)}function oe(R){H.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),H.copy(R))}function de(R){ie.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),ie.copy(R))}function J(R,ee){let Z=c.get(ee);Z===void 0&&(Z=new WeakMap,c.set(ee,Z));let me=Z.get(R);me===void 0&&(me=n.getUniformBlockIndex(ee,R.name),n.uniformBlockBinding(ee,me,me),Z.set(R,me))}function K(R,ee,Z){let he=c.get(ee).get(R);l[he]!==Z&&(n.bindBufferBase(n.UNIFORM_BUFFER,he,Z),l[he]=Z)}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},Q=null,k={},h={},l={},f=new WeakMap,g=[],x=null,p=!1,m=null,M=null,T=null,b=null,A=null,E=null,_=null,S=new Pe(0,0,0),L=0,C=!1,U=null,z=null,X=null,P=null,Y=null,H.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:Se,bindFramebuffer:Ke,drawBuffers:be,useProgram:He,setBlending:_t,setMaterial:St,setFlipSided:lt,setCullFace:st,setLineWidth:Bt,setPolygonOffset:vt,setScissorTest:It,activeTexture:Lt,bindTexture:Dt,unbindTexture:N,compressedTexImage2D:jt,compressedTexImage3D:pt,texImage2D:y,texImage3D:O,pixelStorei:j,getParameter:se,updateUBOMapping:J,uniformBlockBinding:K,texStorage2D:ke,texStorage3D:w,texSubImage2D:mt,texSubImage3D:_e,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Ue,scissor:oe,viewport:de,reset:ue}}function Gx(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap,d=new Set,h,f=new WeakMap,g=new Set,x=new FinalizationRegistry(w=>g.delete(w)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,y){return p?new OffscreenCanvas(w,y):Xs("canvas")}function M(w,y,O){let se=1,j=ke(w);if((j.width>O||j.height>O)&&(se=O/Math.max(j.width,j.height)),se<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let oe=Math.floor(se*j.width),de=Math.floor(se*j.height);h===void 0&&(h=m(oe,de));let J=y?m(oe,de):h;return J.width=oe,J.height=de,J.getContext("2d").drawImage(w,0,0,oe,de),Be("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+oe+"x"+de+")."),J}else return"data"in w&&Be("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function T(w){return w.generateMipmaps}function b(w){n.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(w,y,O,se,j,oe=!1){if(w!==null){if(n[w]!==void 0)return n[w];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let de;se&&(de=e.get("EXT_texture_norm16"),de||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===n.RED&&(O===n.FLOAT&&(J=n.R32F),O===n.HALF_FLOAT&&(J=n.R16F),O===n.UNSIGNED_BYTE&&(J=n.R8),O===n.UNSIGNED_SHORT&&de&&(J=de.R16_EXT),O===n.SHORT&&de&&(J=de.R16_SNORM_EXT)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(J=n.R8UI),O===n.UNSIGNED_SHORT&&(J=n.R16UI),O===n.UNSIGNED_INT&&(J=n.R32UI),O===n.BYTE&&(J=n.R8I),O===n.SHORT&&(J=n.R16I),O===n.INT&&(J=n.R32I)),y===n.RG&&(O===n.FLOAT&&(J=n.RG32F),O===n.HALF_FLOAT&&(J=n.RG16F),O===n.UNSIGNED_BYTE&&(J=n.RG8),O===n.UNSIGNED_SHORT&&de&&(J=de.RG16_EXT),O===n.SHORT&&de&&(J=de.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(J=n.RG8UI),O===n.UNSIGNED_SHORT&&(J=n.RG16UI),O===n.UNSIGNED_INT&&(J=n.RG32UI),O===n.BYTE&&(J=n.RG8I),O===n.SHORT&&(J=n.RG16I),O===n.INT&&(J=n.RG32I)),y===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(J=n.RGB8UI),O===n.UNSIGNED_SHORT&&(J=n.RGB16UI),O===n.UNSIGNED_INT&&(J=n.RGB32UI),O===n.BYTE&&(J=n.RGB8I),O===n.SHORT&&(J=n.RGB16I),O===n.INT&&(J=n.RGB32I)),y===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),O===n.UNSIGNED_INT&&(J=n.RGBA32UI),O===n.BYTE&&(J=n.RGBA8I),O===n.SHORT&&(J=n.RGBA16I),O===n.INT&&(J=n.RGBA32I)),y===n.RGB&&(O===n.UNSIGNED_SHORT&&de&&(J=de.RGB16_EXT),O===n.SHORT&&de&&(J=de.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),y===n.RGBA){let K=oe?Pr:Ze.getTransfer(j);O===n.FLOAT&&(J=n.RGBA32F),O===n.HALF_FLOAT&&(J=n.RGBA16F),O===n.UNSIGNED_BYTE&&(J=K===ot?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&de&&(J=de.RGBA16_EXT),O===n.SHORT&&de&&(J=de.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(w,y){let O;return w?y===null||y===Gn||y===ys?O=n.DEPTH24_STENCIL8:y===Wn?O=n.DEPTH32F_STENCIL8:y===ar&&(O=n.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gn||y===ys?O=n.DEPTH_COMPONENT24:y===Wn?O=n.DEPTH_COMPONENT32F:y===ar&&(O=n.DEPTH_COMPONENT16),O}function S(w,y){return T(w)===!0||w.isFramebufferTexture&&w.minFilter!==Yt&&w.minFilter!==At?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function L(w){let y=new WeakRef(w);i.get(w).__ref=y,g.add(y),x.register(w,y,y)}function C(w){let y=i.get(w).__ref;y!==void 0&&(g.delete(y),x.unregister(y))}function U(w){X(w.target)}function z(w){P(w.target)}function X(w){w.removeEventListener("dispose",U),C(w),$(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&d.delete(w)}function P(w){w.removeEventListener("dispose",z),C(w),ne(w)}function Y(){for(let w of g){let y=w.deref();y!==void 0&&(y.isRenderTarget===!0?P(y):X(y))}g.clear(),d.clear()}function $(w){let y=i.get(w);if(y.__webglInit===void 0)return;let O=w.source,se=f.get(O);if(se){let j=se[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&G(w),Object.keys(se).length===0&&f.delete(O)}i.remove(w)}function G(w){let y=i.get(w);n.deleteTexture(y.__webglTexture);let O=w.source,se=f.get(O);delete se[y.__cacheKey],a.memory.textures--}function ne(w){let y=i.get(w);y.__depthDisposeCallback&&y.__depthDisposeCallback();let O=w.depthTexture;if(O&&O.renderTarget===w&&X(O),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let oe=0;oe<y.__webglFramebuffer[j].length;oe++)n.deleteFramebuffer(y.__webglFramebuffer[j][oe]);else n.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)n.deleteFramebuffer(y.__webglFramebuffer[j]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let se=w.textures;for(let j=0,oe=se.length;j<oe;j++){let de=i.get(se[j]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),a.memory.textures--),i.remove(se[j])}i.remove(w)}let W=0;function Q(){W=0}function k(){return W}function re(w){W=w}function fe(){let w=W;return w>=s.maxTextures&&Be("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,w}function H(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.mipmapsAutoUpdate),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function ie(w,y){let O=i.get(w);if(w.isVideoTexture&&Tt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){let se=w.image;if(se===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{St(O,w,y);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function ce(w,y){let O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){St(O,w,y);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function ae(w,y){let O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){St(O,w,y);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function te(w,y){let O=i.get(w);if(w.version>0&&O.__version!==w.version){lt(O,w,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}let Se={[Fi]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[so]:n.MIRRORED_REPEAT},Ke={[Yt]:n.NEAREST,[sd]:n.NEAREST_MIPMAP_NEAREST,[Zr]:n.NEAREST_MIPMAP_LINEAR,[At]:n.LINEAR,[Do]:n.LINEAR_MIPMAP_NEAREST,[Hn]:n.LINEAR_MIPMAP_LINEAR},be={[ld]:n.NEVER,[Gc]:n.ALWAYS,[cd]:n.LESS,[Vc]:n.LEQUAL,[hd]:n.EQUAL,[Hc]:n.GEQUAL,[ud]:n.GREATER,[dd]:n.NOTEQUAL};function He(w,y){if(y.type===Wn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===At||y.magFilter===Do||y.magFilter===Zr||y.magFilter===Hn||y.minFilter===At||y.minFilter===Do||y.minFilter===Zr||y.minFilter===Hn)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Se[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Se[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Se[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Ke[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Ke[y.minFilter]),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,be[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Yt||y.minFilter!==Zr&&y.minFilter!==Hn||y.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function qe(w,y){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",U),L(y));let se=y.source,j=f.get(se);j===void 0&&(j={},f.set(se,j));let oe=H(y);if(oe!==w.__cacheKey){j[oe]===void 0&&(j[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[oe].usedTimes++;let de=j[w.__cacheKey];de!==void 0&&(j[w.__cacheKey].usedTimes--,de.usedTimes===0&&G(y)),w.__cacheKey=oe,w.__webglTexture=j[oe].texture}return O}function Fe(w,y,O){return Math.floor(Math.floor(w/O)/y)}function _t(w,y,O,se){let oe=w.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,O,se,y.data);else{oe.sort((R,ee)=>R.start-ee.start);let de=0;for(let R=1;R<oe.length;R++){let ee=oe[de],Z=oe[R],me=ee.start+ee.count,he=Fe(Z.start,y.width,4),pe=Fe(ee.start,y.width,4);Z.start<=me+1&&he===pe&&Fe(Z.start+Z.count-1,y.width,4)===he?ee.count=Math.max(ee.count,Z.start+Z.count-ee.start):(++de,oe[de]=Z)}oe.length=de+1;let J=t.getParameter(n.UNPACK_ROW_LENGTH),K=t.getParameter(n.UNPACK_SKIP_PIXELS),ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let R=0,ee=oe.length;R<ee;R++){let Z=oe[R],me=Math.floor(Z.start/4),he=Math.ceil(Z.count/4),pe=me%y.width,De=Math.floor(me/y.width),$e=he,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,De),t.texSubImage2D(n.TEXTURE_2D,0,pe,De,$e,le,O,se,y.data)}w.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,K),t.pixelStorei(n.UNPACK_SKIP_ROWS,ue)}}function St(w,y,O){let se=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(se=n.TEXTURE_3D);let j=qe(w,y),oe=y.source;t.bindTexture(se,w.__webglTexture,n.TEXTURE0+O);let de=i.get(oe);if(oe.version!==de.__version||j===!0){if(t.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let le=Ze.getPrimaries(Ze.workingColorSpace),Oe=y.colorSpace===Si?null:Ze.getPrimaries(y.colorSpace),Ye=y.colorSpace===Si||le===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let K=M(y.image,!1,s.maxTextureSize);K=Ue(y,K);let ue=r.convert(y.format,y.colorSpace),R=r.convert(y.type),ee=E(y.internalFormat,ue,R,y.normalized,y.colorSpace,y.isVideoTexture);He(se,y);let Z,me=y.mipmaps,he=y.isVideoTexture!==!0,pe=de.__version===void 0||j===!0,De=oe.dataReady,$e=S(y,K);if(y.isDepthTexture)ee=_(y.format===Mi,y.type),pe&&(he?t.texStorage2D(n.TEXTURE_2D,1,ee,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,ee,K.width,K.height,0,ue,R,null));else if(y.isDataTexture)if(me.length>0){he&&pe&&t.texStorage2D(n.TEXTURE_2D,$e,ee,me[0].width,me[0].height);for(let le=0,Oe=me.length;le<Oe;le++)Z=me[le],he?De&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Z.width,Z.height,ue,R,Z.data):t.texImage2D(n.TEXTURE_2D,le,ee,Z.width,Z.height,0,ue,R,Z.data);y.generateMipmaps=!1}else he?(pe&&t.texStorage2D(n.TEXTURE_2D,$e,ee,K.width,K.height),De&&_t(y,K,ue,R)):t.texImage2D(n.TEXTURE_2D,0,ee,K.width,K.height,0,ue,R,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){he&&pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,ee,me[0].width,me[0].height,K.depth);for(let le=0,Oe=me.length;le<Oe;le++)if(Z=me[le],y.format!==qn)if(ue!==null)if(he){if(De)if(y.layerUpdates.size>0){let Ye=jc(Z.width,Z.height,y.format,y.type);for(let ye of y.layerUpdates){let ct=Z.data.subarray(ye*Ye/Z.data.BYTES_PER_ELEMENT,(ye+1)*Ye/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,ye,Z.width,Z.height,1,ue,ct)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Z.width,Z.height,K.depth,ue,Z.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,ee,Z.width,Z.height,K.depth,0,Z.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?De&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Z.width,Z.height,K.depth,ue,R,Z.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,ee,Z.width,Z.height,K.depth,0,ue,R,Z.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{he&&pe&&t.texStorage2D(n.TEXTURE_2D,$e,ee,me[0].width,me[0].height);for(let le=0,Oe=me.length;le<Oe;le++)Z=me[le],y.format!==qn?ue!==null?he?De&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Z.width,Z.height,ue,Z.data):t.compressedTexImage2D(n.TEXTURE_2D,le,ee,Z.width,Z.height,0,Z.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?De&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Z.width,Z.height,ue,R,Z.data):t.texImage2D(n.TEXTURE_2D,le,ee,Z.width,Z.height,0,ue,R,Z.data)}else if(y.isDataArrayTexture)if(he){if(pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,ee,K.width,K.height,K.depth),De)if(y.layerUpdates.size>0){let le=jc(K.width,K.height,y.format,y.type);for(let Oe of y.layerUpdates){let Ye=K.data.subarray(Oe*le/K.data.BYTES_PER_ELEMENT,(Oe+1)*le/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Oe,K.width,K.height,1,ue,R,Ye)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ue,R,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ee,K.width,K.height,K.depth,0,ue,R,K.data);else if(y.isData3DTexture)he?(pe&&t.texStorage3D(n.TEXTURE_3D,$e,ee,K.width,K.height,K.depth),De&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ue,R,K.data)):t.texImage3D(n.TEXTURE_3D,0,ee,K.width,K.height,K.depth,0,ue,R,K.data);else if(y.isFramebufferTexture){if(pe)if(he)t.texStorage2D(n.TEXTURE_2D,$e,ee,K.width,K.height);else{let le=K.width,Oe=K.height;for(let Ye=0;Ye<$e;Ye++)t.texImage2D(n.TEXTURE_2D,Ye,ee,le,Oe,0,ue,R,null),le>>=1,Oe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),K.parentNode!==le){le.appendChild(K),d.add(y),le.onpaint=Oe=>{let Ye=Oe.changedElements;for(let ye of d)Ye.includes(ye.image)&&(ye.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{let Ye=n.RGBA,ye=n.RGBA,ct=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ye,ye,ct,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(me.length>0){if(he&&pe){let le=ke(me[0]);t.texStorage2D(n.TEXTURE_2D,$e,ee,le.width,le.height)}for(let le=0,Oe=me.length;le<Oe;le++)Z=me[le],he?De&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,ue,R,Z):t.texImage2D(n.TEXTURE_2D,le,ee,ue,R,Z);y.generateMipmaps=!1}else if(he){if(pe){let le=ke(K);t.texStorage2D(n.TEXTURE_2D,$e,ee,le.width,le.height)}De&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,R,K)}else t.texImage2D(n.TEXTURE_2D,0,ee,ue,R,K);T(y)&&y.mipmapsAutoUpdate===!0&&b(se),de.__version=oe.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function lt(w,y,O){if(y.image.length!==6)return;let se=qe(w,y),j=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);let oe=i.get(j);if(j.version!==oe.__version||se===!0){t.activeTexture(n.TEXTURE0+O);let de=Ze.getPrimaries(Ze.workingColorSpace),J=y.colorSpace===Si?null:Ze.getPrimaries(y.colorSpace),K=y.colorSpace===Si||de===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ue=y.isCompressedTexture||y.image[0].isCompressedTexture,R=y.image[0]&&y.image[0].isDataTexture,ee=[];for(let ye=0;ye<6;ye++)!ue&&!R?ee[ye]=M(y.image[ye],!0,s.maxCubemapSize):ee[ye]=R?y.image[ye].image:y.image[ye],ee[ye]=Ue(y,ee[ye]);let Z=ee[0],me=r.convert(y.format,y.colorSpace),he=r.convert(y.type),pe=E(y.internalFormat,me,he,y.normalized,y.colorSpace),De=y.isVideoTexture!==!0,$e=oe.__version===void 0||se===!0,le=j.dataReady,Oe=S(y,Z);He(n.TEXTURE_CUBE_MAP,y);let Ye;if(y.isDepthTexture){if(pe=_(y.format===Mi,y.type),$e)if(De)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,pe,Z.width,Z.height);else for(let ye=0;ye<6;ye++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pe,Z.width,Z.height,0,me,he,null)}else if(ue){De&&$e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,pe,Z.width,Z.height);for(let ye=0;ye<6;ye++){Ye=ee[ye].mipmaps;for(let ct=0;ct<Ye.length;ct++){let Wt=Ye[ct];y.format!==qn?me!==null?De?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct,0,0,Wt.width,Wt.height,me,Wt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct,pe,Wt.width,Wt.height,0,Wt.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct,0,0,Wt.width,Wt.height,me,he,Wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct,pe,Wt.width,Wt.height,0,me,he,Wt.data)}}}else{if(Ye=y.mipmaps,De&&$e){Ye.length>0&&Oe++;let ye=ke(ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,pe,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(R){De?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ee[ye].width,ee[ye].height,me,he,ee[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pe,ee[ye].width,ee[ye].height,0,me,he,ee[ye].data);for(let ct=0;ct<Ye.length;ct++){let Ri=Ye[ct].image[ye].image;De?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct+1,0,0,Ri.width,Ri.height,me,he,Ri.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct+1,pe,Ri.width,Ri.height,0,me,he,Ri.data)}}else{De?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,me,he,ee[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pe,me,he,ee[ye]);for(let ct=0;ct<Ye.length;ct++){let Wt=Ye[ct];De?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct+1,0,0,me,he,Wt.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ct+1,pe,me,he,Wt.image[ye])}}}T(y)&&y.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),oe.__version=j.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function st(w,y,O,se,j,oe){let de=r.convert(O.format,O.colorSpace),J=r.convert(O.type),K=E(O.internalFormat,de,J,O.normalized,O.colorSpace),ue=i.get(y),R=i.get(O);if(R.__renderTarget=y,!ue.__hasExternalTextures){let ee=Math.max(1,y.width>>oe),Z=Math.max(1,y.height>>oe);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,oe,K,ee,Z,y.depth,0,de,J,null):t.texImage2D(j,oe,K,ee,Z,0,de,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),_e(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,j,R.__webglTexture,0,mt(y)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,j,R.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(w,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer){let se=y.depthTexture,j=se&&se.isDepthTexture?se.type:null,oe=_(y.stencilBuffer,j),de=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_e(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt(y),oe,y.width,y.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt(y),oe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,oe,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,w)}else{let se=y.textures;for(let j=0;j<se.length;j++){let oe=se[j],de=r.convert(oe.format,oe.colorSpace),J=r.convert(oe.type),K=E(oe.internalFormat,de,J,oe.normalized,oe.colorSpace);_e(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt(y),K,y.width,y.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt(y),K,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,K,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function vt(w,y,O){let se=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(y.depthTexture);j.__renderTarget=y;let oe=se?y.depthTexture.image[0]:y.depthTexture.image;(!j.__webglTexture||oe.width!==y.width||oe.height!==y.height)&&(oe.width=y.width,oe.height=y.height,y.depthTexture.needsUpdate=!0),se?te(y.depthTexture,0):ie(y.depthTexture,0);let de=j.__webglTexture,J=mt(y),K=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,ue=y.depthTexture.format===Mi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===_i)_e(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,K,de,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,ue,K,de,0);else if(y.depthTexture.format===Mi)_e(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,K,de,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,ue,K,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function It(w){let y=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){let se=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),se){let j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,se.removeEventListener("dispose",j)};se.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=se}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(O)for(let se=0;se<6;se++)vt(y.__webglFramebuffer[se],w,se);else w.texture.mipmaps.length>0?vt(y.__webglFramebuffer[0],w,0):vt(y.__webglFramebuffer,w,0);else if(O){y.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[se]),y.__webglDepthbuffer[se]===void 0)y.__webglDepthbuffer[se]=n.createRenderbuffer(),Bt(y.__webglDepthbuffer[se],w,!1);else{let j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,oe)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Bt(y.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(w,y,O){let se=i.get(w);y!==void 0&&st(se.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&It(w)}function Dt(w){let y=w.texture,O=i.get(w),se=i.get(y);w.addEventListener("dispose",z),L(w);let j=w.textures,oe=w.isWebGLCubeRenderTarget===!0,de=j.length>1;if(de||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=y.version,a.memory.textures++),oe){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let K=0;K<y.mipmaps.length;K++)O.__webglFramebuffer[J][K]=n.createFramebuffer()}else O.__webglFramebuffer[J]=n.createFramebuffer()}else{if(y.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)O.__webglFramebuffer[J]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(de)for(let J=0,K=j.length;J<K;J++){let ue=i.get(j[J]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&_e(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<j.length;J++){let K=j[J];O.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[J]);let ue=r.convert(K.format,K.colorSpace),R=r.convert(K.type),ee=E(K.internalFormat,ue,R,K.normalized,K.colorSpace,w.isXRRenderTarget===!0),Z=mt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,ee,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,O.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Bt(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),He(n.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)st(O.__webglFramebuffer[J][K],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,K);else st(O.__webglFramebuffer[J],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);T(y)?b(n.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(de){for(let J=0,K=j.length;J<K;J++){let ue=j[J],R=i.get(ue),ee=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ee=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,R.__webglTexture),He(ee,ue),st(O.__webglFramebuffer,w,ue,n.COLOR_ATTACHMENT0+J,ee,0),T(ue)&&b(ee)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,se.__webglTexture),He(J,y),y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)st(O.__webglFramebuffer[K],w,y,n.COLOR_ATTACHMENT0,J,K);else st(O.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,J,0);T(y)?b(J):y.mipmaps.length>0&&n.texParameteri(J,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&It(w)}function N(w){let y=w.textures;for(let O=0,se=y.length;O<se;O++){let j=y[O];if(T(j)&&j.mipmapsAutoUpdate===!0){let oe=A(w),de=i.get(j).__webglTexture;t.bindTexture(oe,de),b(oe),t.unbindTexture()}}}let jt=[];function pt(w){if(w.samples>0){if(_e(w)===!1){let y=w.textures,O=w.width,se=w.height,j=n.COLOR_BUFFER_BIT,oe=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(w),J=y.length>1;if(J)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);let R=i.get(y[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,R,0)}n.blitFramebuffer(0,0,O,se,0,0,O,se,j,n.NEAREST),l===!0&&(jt.length=0,jt.push(n.COLOR_ATTACHMENT0+ue),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&jt.push(oe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,jt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);let R=i.get(y[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,R,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function mt(w){return Math.min(s.maxSamples,w.samples)}function _e(w){let y=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Tt(w){let y=a.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function Ue(w,y){let O=w.colorSpace,se=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Cr&&O!==Si&&(Ze.getTransfer(O)===ot?(se!==qn||j!==yn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",O)),y}function ke(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=fe,this.resetTextureUnits=Q,this.getTextureUnits=k,this.setTextureUnits=re,this.setTexture2D=ie,this.setTexture2DArray=ce,this.setTexture3D=ae,this.setTextureCube=te,this.rebindTextures=Lt,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=st,this.useMultisampledRTT=_e,this.dispose=Y}function Wx(n,e){function t(i,s=Si){let r,a=Ze.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===Uo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Oc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nc)return n.BYTE;if(i===Uc)return n.SHORT;if(i===ar)return n.UNSIGNED_SHORT;if(i===No)return n.INT;if(i===Gn)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===Xn)return n.HALF_FLOAT;if(i===Bc)return n.ALPHA;if(i===zc)return n.RGB;if(i===qn)return n.RGBA;if(i===_i)return n.DEPTH_COMPONENT;if(i===Mi)return n.DEPTH_STENCIL;if(i===kc)return n.RED;if(i===Oo)return n.RED_INTEGER;if(i===Gi)return n.RG;if(i===Bo)return n.RG_INTEGER;if(i===zo)return n.RGBA_INTEGER;if(i===Jr||i===Kr||i===jr||i===Qr)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ko||i===Vo||i===Ho||i===Go)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===ea||i===Zo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Wo||i===Xo)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===qo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yo)return r.COMPRESSED_R11_EAC;if(i===$o)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ea)return r.COMPRESSED_RG11_EAC;if(i===Zo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jo||i===Ko||i===jo||i===Qo||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===ll||i===cl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Jo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ko)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===el)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===il)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===al)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ol)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ll)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hl||i===ul||i===dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===hl)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fl||i===pl||i===ta||i===ml)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===fl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qx=`
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

}`,oh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Or(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ei({vertexShader:Xx,fragmentShader:qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new Br(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lh=class extends Kn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new oh,m={},M=t.getContextAttributes(),T=null,b=null,A=[],E=[],_=new Xe,S=null,L=null,C=new fn;C.viewport=new bt;let U=new fn;U.viewport=new bt;let z=[C,U],X=new Co,P=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ie=A[H];return ie===void 0&&(ie=new Js,A[H]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(H){let ie=A[H];return ie===void 0&&(ie=new Js,A[H]=ie),ie.getGripSpace()},this.getHand=function(H){let ie=A[H];return ie===void 0&&(ie=new Js,A[H]=ie),ie.getHandSpace()};function $(H){let ie=E.indexOf(H.inputSource);if(ie===-1)return;let ce=A[ie];ce!==void 0&&(ce.update(H.inputSource,H.frame,c||a),ce.dispatchEvent({type:H.type,data:H.inputSource}))}function G(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ne);for(let H=0;H<A.length;H++){let ie=E[H];ie!==null&&(E[H]=null,A[H].disconnect(ie))}P=null,Y=null,p.reset();for(let H in m)delete m[H];if(e.setRenderTarget(T),f=null,h=null,d=null,s=null,b=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),L!==null){let H=L.camera;H.fov=L.fov,H.zoom=L.zoom,H.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ne),M.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ae=null,te=null;M.depth&&(te=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=M.stencil?Mi:_i,ae=M.stencil?ys:Gn);let Se={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Se),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new En(h.textureWidth,h.textureHeight,{format:qn,type:yn,depthTexture:new vi(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ce={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new En(f.framebufferWidth,f.framebufferHeight,{format:qn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),fe.setContext(s),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ne(H){for(let ie=0;ie<H.removed.length;ie++){let ce=H.removed[ie],ae=E.indexOf(ce);ae>=0&&(E[ae]=null,A[ae].disconnect(ce))}for(let ie=0;ie<H.added.length;ie++){let ce=H.added[ie],ae=E.indexOf(ce);if(ae===-1){for(let Se=0;Se<A.length;Se++)if(Se>=E.length){E.push(ce),ae=Se;break}else if(E[Se]===null){E[Se]=ce,ae=Se;break}if(ae===-1)break}let te=A[ae];te&&te.connect(ce)}}function W(H,ie){ie===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ie.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let ie=H.near,ce=H.far;p.texture!==null&&(p.depthNear>0&&(ie=p.depthNear),p.depthFar>0&&(ce=p.depthFar)),X.near=U.near=C.near=ie,X.far=U.far=C.far=ce,(P!==X.near||Y!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),P=X.near,Y=X.far),X.layers.mask=H.layers.mask|6,C.layers.mask=X.layers.mask&-5,U.layers.mask=X.layers.mask&-3;let ae=H.parent,te=X.cameras;W(X,ae);for(let Se=0;Se<te.length;Se++)W(te[Se],ae);X.projectionMatrix.copy(C.projectionMatrix),X.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&H.isPerspectiveCamera&&(L={camera:H,fov:H.fov,zoom:H.zoom}),Q(H,X,ae)};function Q(H,ie,ce){ce===null?H.matrix.copy(ie.matrixWorld):(H.matrix.copy(ce.matrixWorld),H.matrix.invert(),H.matrix.multiply(ie.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ie.projectionMatrix),H.projectionMatrixInverse.copy(ie.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ys*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(X)},this.getCameraTexture=function(H){return m[H]};let k=null;function re(H,ie){if(u=ie.getViewerPose(c||a),g=ie,u!==null){let ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let ae=!1;ce.length!==X.cameras.length&&(X.cameras.length=0,ae=!0);for(let be=0;be<ce.length;be++){let He=ce[be],qe=null;if(f!==null)qe=f.getViewport(He);else{let _t=d.getViewSubImage(h,He);qe=_t.viewport,be===0&&(e.setRenderTargetTextures(b,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(b))}let Fe=z[be];Fe===void 0&&(Fe=new fn,Fe.layers.enable(be),Fe.viewport=new bt,z[be]=Fe),Fe.matrix.fromArray(He.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(He.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(qe.x,qe.y,qe.width,qe.height),be===0&&(X.matrix.copy(Fe.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ae===!0&&X.cameras.push(Fe)}let te=s.enabledFeatures;if(te&&te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let be=d.getDepthInformation(ce[0]);be&&be.isValid&&be.texture&&p.init(be,s.renderState)}if(te&&te.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let be=0;be<ce.length;be++){let He=ce[be].camera;if(He){let qe=m[He];qe||(qe=new Or,m[He]=qe);let Fe=d.getCameraImage(He);qe.sourceTexture=Fe}}}}for(let ce=0;ce<A.length;ce++){let ae=E[ce],te=A[ce];ae!==null&&te!==void 0&&te.update(ae,ie,c||a)}k&&k(H,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}let fe=new Wd;fe.setAnimationLoop(re),this.setAnimationLoop=function(H){k=H},this.dispose=function(){}}},Yx=new at,ef=new ze;ef.set(-1,0,0,0,1,0,0,0,1);function $x(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Zc(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,T,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===mn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===mn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=e.get(m),T=M.envMap,b=M.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ef),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=T*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Zx(n,e,t,i){let s={},r={};function a(M,T){let b=T.program;i.uniformBlockBinding(M,b,s[M.id])}function o(M,T){let b=s[M.id];b===void 0&&(g(M),b=l(M),s[M.id]=b,M.addEventListener("dispose",p));let A=T.program;i.updateUBOMapping(M,A);let E=e.render.frame;r[M.id]!==E&&(c(M),r[M.id]=E)}function l(M){let T=n.createBuffer(),b=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),T}function c(M){let T=s[M.id],b=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let E=0,_=b.length;E<_;E++){let S=b[E];if(Array.isArray(S))for(let L=0,C=S.length;L<C;L++)u(S[L],E,L,A);else u(S,E,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(M,T,b,A){if(h(M,T,b,A)===!0){let E=M.__offset,_=M.value;if(Array.isArray(_)){let S=0;for(let L=0;L<_.length;L++){let C=_[L],U=x(C,!0);d(C,M.__data,S),S+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,M.__data)}}function d(M,T,b){typeof M=="number"||typeof M=="boolean"?T[b]=M:M.isMatrix3?(T[b]=M.elements[0],T[b+1]=M.elements[1],T[b+2]=M.elements[2],T[b+3]=0,T[b+4]=M.elements[3],T[b+5]=M.elements[4],T[b+6]=M.elements[5],T[b+7]=0,T[b+8]=M.elements[6],T[b+9]=M.elements[7],T[b+10]=M.elements[8],T[b+11]=0):ArrayBuffer.isView(M)?T.set(M.subarray(0,T.length-b),b):M.toArray(T,b)}function h(M,T,b,A){let E=M.value,_=T+"_"+b;if(Array.isArray(E)){A[_]===void 0&&(A[_]=[]);let S=A[_],L=!1;for(let C=0;C<E.length;C++)f(E[C],S,C)===!0&&(L=!0);return L}return f(E,A,_)}function f(M,T,b){if(T[b]===void 0)return typeof M=="number"||typeof M=="boolean"?T[b]=M:ArrayBuffer.isView(M)?T[b]=M.slice():T[b]=M.clone(),!0;{let A=T[b];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return T[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function g(M){let T=M.uniforms,b=0,A=16;for(let _=0,S=T.length;_<S;_++){let L=Array.isArray(T[_])?T[_]:[T[_]];for(let C=0,U=L.length;C<U;C++){let z=L[C],X=Array.isArray(z.value)?z.value:[z.value],P=Array.isArray(T[_])||Array.isArray(z.value),Y=b;for(let G=0,ne=X.length;G<ne;G++){let W=X[G],Q=x(W,P),k=b%A,re=k%Q.boundary,fe=k+re;b+=re,fe!==0&&A-fe<Q.storage&&(b+=A-fe),G===0&&(Y=b),b+=Q.storage}let $=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new $((b-Y)/Float32Array.BYTES_PER_ELEMENT),z.__offset=Y}}let E=b%A;return E>0&&(b+=A-E),M.__size=b,M.__cache={},this}function x(M,T){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",M),T===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(M){let T=M.target;T.removeEventListener("dispose",p),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(let M in s)n.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:m}}var Jx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function Kx(){return si===null&&(si=new co(Jx,16,16,Gi,Xn),si.name="DFG_LUT",si.minFilter=At,si.magFilter=At,si.wrapS=Jn,si.wrapT=Jn,si.generateMipmaps=!1,si.needsUpdate=!0),si}var Ml=class{constructor(e={}){let{canvas:t=pd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=yn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let x=f,p=new Set([zo,Bo,Oo]),m=new Set([yn,Gn,ar,ys,Uo,Fo]),M=new Uint32Array(4),T=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},A=null,E=null,_=[],S=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,U=!1,z=null,X=null,P=null,Y=null;this._outputColorSpace=dt;let $=0,G=0,ne=null,W=-1,Q=null,k=new bt,re=new bt,fe=null,H=new Pe(0),ie=0,ce=t.width,ae=t.height,te=1,Se=null,Ke=null,be=new bt(0,0,ce,ae),He=new bt(0,0,ce,ae),qe=!1,Fe=new Bi,_t=new ho,St=!1,lt=!1,st=new at,Bt=new F,vt=new bt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function Dt(){return ne===null?te:1}let N=i;function jt(v,I){return t.getContext(v,I)}let pt,mt,_e,Tt,Ue,ke,w,y,O,se,j,oe,de,J,K,ue,R,ee,Z,me,he,pe,De;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",ye,!1),N===null){let I="webgl2";if(N=jt(I,v),N===null)throw jt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(v){throw t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Ve("WebGLRenderer: "+v.message),v}function $e(){pt=new l_(N),pt.init(),he=new Wx(N,pt),mt=new K0(N,pt,e,he),_e=new Hx(N,pt),mt.reversedDepthBuffer&&h&&_e.buffers.depth.setReversed(!0),X=N.createFramebuffer(),P=N.createFramebuffer(),Y=N.createFramebuffer(),Tt=new u_(N),Ue=new Rx,ke=new Gx(N,pt,_e,Ue,mt,he,Tt),w=new o_(C),y=new fm(N),pe=new Z0(N,y),O=new c_(N,y,Tt,pe),se=new f_(N,O,y,pe,Tt),ee=new d_(N,mt,ke),K=new j0(Ue),j=new Ax(C,w,pt,mt,pe,K),oe=new $x(C,Ue),de=new Px,J=new Fx(pt),R=new $0(C,w,_e,se,g,l),ue=new Vx(C,se,mt),De=new Zx(N,Tt,mt,_e),Z=new J0(N,pt,Tt),me=new h_(N,pt,Tt),Tt.programs=j.programs,C.capabilities=mt,C.extensions=pt,C.properties=Ue,C.renderLists=de,C.shadowMap=ue,C.state=_e,C.info=Tt}x!==yn&&(L=new m_(x,t.width,t.height,o,s,r));let le=new lh(C,N);this.xr=le,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=pt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=pt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(v){v!==void 0&&(te=v,this.setSize(ce,ae,!1))},this.getSize=function(v){return v.set(ce,ae)},this.setSize=function(v,I,q=!0){if(le.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=v,ae=I,t.width=Math.floor(v*te),t.height=Math.floor(I*te),q===!0&&(t.style.width=v+"px",t.style.height=I+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(ce*te,ae*te).floor()},this.setDrawingBufferSize=function(v,I,q){ce=v,ae=I,te=q,t.width=Math.floor(v*q),t.height=Math.floor(I*q),this.setViewport(0,0,v,I)},this.setEffects=function(v){if(x===yn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let I=0;I<v.length;I++)if(v[I].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(k)},this.getViewport=function(v){return v.copy(be)},this.setViewport=function(v,I,q,B){v.isVector4?be.set(v.x,v.y,v.z,v.w):be.set(v,I,q,B),_e.viewport(k.copy(be).multiplyScalar(Dt()).round())},this.getScissor=function(v){return v.copy(He)},this.setScissor=function(v,I,q,B){v.isVector4?He.set(v.x,v.y,v.z,v.w):He.set(v,I,q,B),_e.scissor(re.copy(He).multiplyScalar(Dt()).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(v){_e.setScissorTest(qe=v)},this.setOpaqueSort=function(v){Se=v},this.setTransparentSort=function(v){Ke=v},this.getClearColor=function(v){return v.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,q=!0){let B=0;if(v){let V=!1;if(ne!==null){let xe=ne.texture.format;V=p.has(xe)}if(V){let xe=ne.texture.type,Ee=m.has(xe),ge=R.getClearColor(),Me=R.getClearAlpha(),Ce=ge.r,We=ge.g,et=ge.b;Ee?(M[0]=Ce,M[1]=We,M[2]=et,M[3]=Me,N.clearBufferuiv(N.COLOR,0,M)):(T[0]=Ce,T[1]=We,T[2]=et,T[3]=Me,N.clearBufferiv(N.COLOR,0,T))}else B|=N.COLOR_BUFFER_BIT}I&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),z=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),R.dispose(),de.dispose(),J.dispose(),ke.dispose(),Ue.dispose(),w.dispose(),se.dispose(),O.dispose(),pe.dispose(),De.dispose(),j.dispose(),le.dispose(),le.removeEventListener("sessionstart",qh),le.removeEventListener("sessionend",Yh),ss.stop()};function Oe(v){v.preventDefault(),Xc("WebGLRenderer: Context Lost."),U=!0}function Ye(){Xc("WebGLRenderer: Context Restored."),U=!1;let v=Tt.autoReset,I=ue.enabled,q=ue.autoUpdate,B=ue.needsUpdate,V=ue.type;$e(),Tt.autoReset=v,ue.enabled=I,ue.autoUpdate=q,ue.needsUpdate=B,ue.type=V}function ye(v){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ct(v){let I=v.target;I.removeEventListener("dispose",ct),Wt(I)}function Wt(v){Ri(v),Ue.remove(v)}function Ri(v){let I=Ue.get(v).programs;I!==void 0&&(I.forEach(function(q){j.releaseProgram(q)}),v.isShaderMaterial&&j.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,q,B,V,xe){I===null&&(I=It);let Ee=V.isMesh&&V.matrixWorld.determinantAffine()<0,ge=pp(v,I,q,B,V);_e.setMaterial(B,Ee);let Me=q.index,Ce=1;if(B.wireframe===!0){if(Me=O.getWireframeAttribute(q),Me===void 0)return;Ce=2}let We=q.drawRange,et=q.attributes.position,Te=We.start*Ce,tt=(We.start+We.count)*Ce;xe!==null&&(Te=Math.max(Te,xe.start*Ce),tt=Math.min(tt,(xe.start+xe.count)*Ce)),Me!==null?(Te=Math.max(Te,0),tt=Math.min(tt,Me.count)):et!=null&&(Te=Math.max(Te,0),tt=Math.min(tt,et.count));let Ft=tt-Te;if(Ft<0||Ft===1/0)return;pe.setup(V,B,ge,q,Me);let xt,gt=Z;if(Me!==null&&(xt=y.get(Me),gt=me,gt.setIndex(xt)),V.isMesh)B.wireframe===!0?(_e.setLineWidth(B.wireframeLinewidth*Dt()),gt.setMode(N.LINES)):gt.setMode(N.TRIANGLES);else if(V.isLine){let an=B.linewidth;an===void 0&&(an=1),_e.setLineWidth(an*Dt()),V.isLineSegments?gt.setMode(N.LINES):V.isLineLoop?gt.setMode(N.LINE_LOOP):gt.setMode(N.LINE_STRIP)}else V.isPoints?gt.setMode(N.POINTS):V.isSprite&&gt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))gt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let an=V._multiDrawStarts,Ae=V._multiDrawCounts,dn=V._multiDrawCount,rt=Me?y.get(Me).bytesPerElement:1,rs=Ue.get(B).currentProgram.getUniforms();for(let on=0;on<dn;on++)rs.setValue(N,"_gl_DrawID",on),gt.render(an[on]/rt,Ae[on])}else if(V.isInstancedMesh)gt.renderInstances(Te,Ft,V.count);else if(q.isInstancedBufferGeometry){let an=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ae=Math.min(q.instanceCount,an);gt.renderInstances(Te,Ft,Ae)}else gt.render(Te,Ft)};function Xh(v,I,q,B){z!==null&&v.isNodeMaterial&&z.setObject(B,v),St===!0&&K.setState(v,q,!1),v.transparent===!0&&v.side===tn&&v.forceSinglePass===!1?(v.side=mn,v.needsUpdate=!0,vr(v,I,B),v.side=ni,v.needsUpdate=!0,vr(v,I,B),v.side=tn):vr(v,I,B)}this.compile=function(v,I,q=null){q===null&&(q=v),z!==null&&z.renderStart(v,I,q),E=J.get(q),E.init(I),S.push(E),q.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),v!==q&&v.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),lt=this.localClippingEnabled,St=K.init(this.clippingPlanes,lt),St===!0&&K.setGlobalState(this.clippingPlanes,I),z!==null&&ue.render(E.state.shadowsArray,q,I);let B=new Set;return v.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let xe=V.material;if(xe)if(Array.isArray(xe))for(let Ee=0;Ee<xe.length;Ee++){let ge=xe[Ee];Xh(ge,q,I,V),B.add(ge)}else Xh(xe,q,I,V),B.add(xe)}),E=S.pop(),z!==null&&z.renderEnd(),B},this.compileAsync=function(v,I,q=null){let B=this.compile(v,I,q);return new Promise(V=>{function xe(){if(B.forEach(function(Ee){let Me=Ue.get(Ee).currentProgram;(Me===void 0||Me.isReady())&&B.delete(Ee)}),B.size===0){V(v);return}setTimeout(xe,10)}pt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Hl=null;function dp(v){Hl&&Hl(v)}function qh(){ss.stop()}function Yh(){ss.start()}let ss=new Wd;ss.setAnimationLoop(dp),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(v){Hl=v,le.setAnimationLoop(v),v===null?ss.stop():ss.start()},le.addEventListener("sessionstart",qh),le.addEventListener("sessionend",Yh),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(v,I);let q=le.enabled===!0&&le.isPresenting===!0,B=L!==null&&(ne===null||q)&&L.begin(C,ne);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(I),I=le.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,I,ne),E=J.get(v,S.length),E.init(I),E.state.textureUnits=ke.getTextureUnits(),S.push(E),st.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?_t.setFromArrayCamera(I):Fe.setFromProjectionMatrix(st,Cn,I.reversedDepth),lt=this.localClippingEnabled,St=K.init(this.clippingPlanes,lt),A=de.get(v,_.length),A.init(),_.push(A),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Ee=C.xr.getDepthSensingMesh();Ee!==null&&Gl(Ee,I,-1/0,C.sortObjects)}Gl(v,I,0,C.sortObjects),A.finish(),z!==null&&z.updateLights(E.state.lightsArray),C.sortObjects===!0&&A.sort(Se,Ke),Lt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Lt&&R.addToRenderList(A,v),this.info.autoReset===!0&&this.info.reset(),St===!0&&K.beginShadows();let V=E.state.shadowsArray;if(ue.render(V,v,I),St===!0&&K.endShadows(),(B&&L.hasRenderPass())===!1){let Ee=A.opaque,ge=A.transmissive;if(E.setupLights(),I.isArrayCamera){let Me=I.cameras;if(ge.length>0)for(let Ce=0,We=Me.length;Ce<We;Ce++){let et=Me[Ce];Zh(Ee,ge,v,et)}Lt&&R.render(v);for(let Ce=0,We=Me.length;Ce<We;Ce++){let et=Me[Ce];$h(A,v,et,et.viewport)}}else ge.length>0&&Zh(Ee,ge,v,I),Lt&&R.render(v),$h(A,v,I)}ne!==null&&G===0&&(ke.updateMultisampleRenderTarget(ne),ke.updateRenderTargetMipmap(ne)),B&&L.end(C),v.isScene===!0&&v.onAfterRender(C,v,I),pe.resetDefaultState(),W=-1,Q=null,S.pop(),S.length>0?(E=S[S.length-1],ke.setTextureUnits(E.state.textureUnits),St===!0&&K.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,z!==null&&z.renderEnd()};function Gl(v,I,q,B){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){let Ee=I.isArrayCamera?_t:Fe;if(!v.frustumCulled||v.intersectsFrustum(Ee)){B&&vt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(st);let ge=se.update(v),Me=v.material;Me.visible&&A.push(v,ge,Me,q,vt.z,null,I)}}else if(v.isMesh||v.isLine||v.isPoints){let Ee=I.isArrayCamera?_t:Fe;if(!v.frustumCulled||v.intersectsFrustum(Ee)){let ge=se.update(v),Me=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),vt.copy(v.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),vt.copy(ge.boundingSphere.center)),vt.applyMatrix4(v.matrixWorld).applyMatrix4(st)),Array.isArray(Me)){let Ce=ge.groups;for(let We=0,et=Ce.length;We<et;We++){let Te=Ce[We],tt=Me[Te.materialIndex];tt&&tt.visible&&A.push(v,ge,tt,q,vt.z,Te,I)}}else Me.visible&&A.push(v,ge,Me,q,vt.z,null,I)}}}let xe=v.children;for(let Ee=0,ge=xe.length;Ee<ge;Ee++)Gl(xe[Ee],I,q,B)}function $h(v,I,q,B){let{opaque:V,transmissive:xe,transparent:Ee}=v;E.setupLightsView(q),St===!0&&K.setGlobalState(C.clippingPlanes,q),B&&_e.viewport(k.copy(B)),V.length>0&&ba(V,I,q),xe.length>0&&ba(xe,I,q),Ee.length>0&&ba(Ee,I,q),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Zh(v,I,q,B){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){let Te=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new En(1,1,{generateMipmaps:!0,type:Te?Xn:yn,minFilter:Hn,samples:Math.max(4,mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let xe=E.state.transmissionRenderTarget[B.id],Ee=B.viewport||k;xe.setSize(Ee.z*C.transmissionResolutionScale,Ee.w*C.transmissionResolutionScale);let ge=C.getRenderTarget(),Me=C.getActiveCubeFace(),Ce=C.getActiveMipmapLevel();C.setRenderTarget(xe),C.getClearColor(H),ie=C.getClearAlpha(),ie<1&&C.setClearColor(16777215,.5),C.clear(),Lt&&R.render(q);let We=C.toneMapping;C.toneMapping=ii;let et=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),St===!0&&K.setGlobalState(C.clippingPlanes,B),ba(v,q,B),ke.updateMultisampleRenderTarget(xe),ke.updateRenderTargetMipmap(xe),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let tt=0,Ft=I.length;tt<Ft;tt++){let xt=I[tt],{object:gt,geometry:an,material:Ae,group:dn}=xt;if(Ae.side===tn&&gt.layers.test(B.layers)){let rt=Ae.side;Ae.side=mn,Ae.needsUpdate=!0,Jh(gt,q,B,an,Ae,dn),Ae.side=rt,Ae.needsUpdate=!0,Te=!0}}Te===!0&&(ke.updateMultisampleRenderTarget(xe),ke.updateRenderTargetMipmap(xe))}C.setRenderTarget(ge,Me,Ce),C.setClearColor(H,ie),et!==void 0&&(B.viewport=et),C.toneMapping=We}function ba(v,I,q){let B=I.isScene===!0?I.overrideMaterial:null;for(let V=0,xe=v.length;V<xe;V++){let Ee=v[V],{object:ge,geometry:Me,group:Ce}=Ee,We=Ee.material;We.allowOverride===!0&&B!==null&&(We=B),ge.layers.test(q.layers)&&Jh(ge,I,q,Me,We,Ce)}}function Jh(v,I,q,B,V,xe){z!==null&&V.isNodeMaterial&&z.setObject(v,V),v.onBeforeRender(C,I,q,B,V,xe),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),V.onBeforeRender(C,I,q,B,v,xe),V.transparent===!0&&V.side===tn&&V.forceSinglePass===!1?(V.side=mn,V.needsUpdate=!0,C.renderBufferDirect(q,I,B,V,v,xe),V.side=ni,V.needsUpdate=!0,C.renderBufferDirect(q,I,B,V,v,xe),V.side=tn):C.renderBufferDirect(q,I,B,V,v,xe),v.onAfterRender(C,I,q,B,V,xe)}function Kh(v){let I=0;for(let q of v)q.texture!==null&&I++;return I}function vr(v,I,q){I.isScene!==!0&&(I=It);let B=Ue.get(v),V=E.state.lights,xe=E.state.shadowsArray,Ee=V.state.version,ge=j.getParameters(v,V.state,xe,I,q,E.state.lightProbeGridArray),Me=j.getProgramCacheKey(ge),Ce=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;let We=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=w.get(v.envMap||B.environment,We),B.envMapRotation=B.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Ce===void 0&&(v.addEventListener("dispose",ct),Ce=new Map,B.programs=Ce,B.programVariants=new Map);let et=Ce.get(Me);if(et!==void 0){if(B.currentProgram===et&&B.lightsStateVersion===Ee)return Qh(v,ge),et}else ge.uniforms=j.getUniforms(v),z!==null&&v.isNodeMaterial&&z.build(v,q,ge),v.onBeforeCompile(ge,C),et=j.acquireProgram(ge,Me),Ce.set(Me,et),B.uniforms=ge.uniforms;let Te=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Te.clippingPlanes=K.uniform),Qh(v,ge),B.needsLights=gp(v),B.lightsStateVersion=Ee,B.needsLights&&(Te.ambientLightColor.value=V.state.ambient,Te.lightProbe.value=V.state.probe,Te.sunLights.value=V.state.sun,Te.sunLightShadows.value=V.state.sunShadow,Te.directionalLights.value=V.state.directional,Te.directionalLightShadows.value=V.state.directionalShadow,Te.spotLights.value=V.state.spot,Te.spotLightShadows.value=V.state.spotShadow,Te.rectAreaLights.value=V.state.rectArea,Te.ltc_1.value=V.state.rectAreaLTC1,Te.ltc_2.value=V.state.rectAreaLTC2,Te.pointLights.value=V.state.point,Te.pointLightShadows.value=V.state.pointShadow,Te.hemisphereLights.value=V.state.hemi,Te.sunShadowMatrix.value=V.state.sunShadowMatrix,Te.sunShadowCascade.value=V.state.sunShadowCascade,Te.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Te.spotLightMatrix.value=V.state.spotLightMatrix,Te.spotLightMap.value=V.state.spotLightMap,Te.pointShadowMatrix.value=V.state.pointShadowMatrix),B.numLightProbeGrids=Kh(E.state.lightProbeGridArray),B.currentProgram=et,B.uniformsList=null,et}function fp(v,I,q,B,V){let xe=Ue.get(v),Ee=xe.currentProgram.id+","+B+","+V,ge=xe.programVariants.get(Ee);return ge===void 0?(ge=vr(v,I,q),xe.programVariants.set(Ee,ge)):(xe.currentProgram=ge,xe.uniformsList=null,xe.outputColorSpace=B,xe.toneMapping=V),ge}function jh(v){if(v.uniformsList===null){let I=v.currentProgram.getUniforms();v.uniformsList=cr.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Qh(v,I){let q=Ue.get(v);q.outputColorSpace=I.outputColorSpace,q.batching=I.batching,q.batchingColor=I.batchingColor,q.instancing=I.instancing,q.instancingColor=I.instancingColor,q.instancingMorph=I.instancingMorph,q.skinning=I.skinning,q.morphTargets=I.morphTargets,q.morphNormals=I.morphNormals,q.morphColors=I.morphColors,q.morphTargetsCount=I.morphTargetsCount,q.numClippingPlanes=I.numClippingPlanes,q.numIntersection=I.numClipIntersection,q.vertexAlphas=I.vertexAlphas,q.vertexTangents=I.vertexTangents,q.toneMapping=I.toneMapping}function pp(v,I,q,B,V){I.isScene!==!0&&(I=It),ke.resetTextureUnits();let xe=I.fog,Ee=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,ge=ne===null?C.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ze.workingColorSpace,Me=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ce=w.get(B.envMap||Ee,Me),We=B.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,et=!!q.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Te=!!q.morphAttributes.position,tt=!!q.morphAttributes.normal,Ft=!!q.morphAttributes.color,xt=ii;B.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(xt=C.toneMapping);let gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,an=gt!==void 0?gt.length:0,Ae=Ue.get(B),dn=E.state.lights;if(St===!0&&(lt===!0||v!==Q)){let Et=v===Q&&B.id===W;K.setState(B,v,Et)}let rt=!1,rs=!1;B.version===Ae.__version?Ae.needsLights&&Ae.lightsStateVersion!==dn.state.version||V.isBatchedMesh&&Ae.batching===!1||!V.isBatchedMesh&&Ae.batching===!0||V.isBatchedMesh&&Ae.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ae.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ae.instancing===!1||!V.isInstancedMesh&&Ae.instancing===!0||V.isSkinnedMesh&&Ae.skinning===!1||!V.isSkinnedMesh&&Ae.skinning===!0||V.isInstancedMesh&&Ae.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ae.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ae.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ae.instancingMorph===!1&&V.morphTexture!==null||Ae.envMap!==Ce||B.fog===!0&&Ae.fog!==xe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==K.numPlanes||Ae.numIntersection!==K.numIntersection)||Ae.vertexAlphas!==We||Ae.vertexTangents!==et||Ae.morphTargets!==Te||Ae.morphNormals!==tt||Ae.morphColors!==Ft||Ae.morphTargetsCount!==an||Ae.numLightProbeGrids!==Kh(E.state.lightProbeGridArray)?rt=!0:(Ae.outputColorSpace!==ge||Ae.toneMapping!==xt)&&(rs=!0):(rt=!0,Ae.__version=B.version);let on=Ae.currentProgram;(rt===!0||rs===!0)&&(on=rs===!0?fp(B,I,V,ge,xt):vr(B,I,V),z&&B.isNodeMaterial&&z.onUpdateProgram(B,on,Ae));let Ea=!1,Ci=!1,as=!1,it=on.getUniforms(),Qt=Ae.uniforms;if(_e.useProgram(on.program)&&(Ea=!0,Ci=!0,as=!0),B.id!==W&&(W=B.id,Ci=!0),Ea||Q!==v){_e.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),it.setValue(N,"projectionMatrix",v.projectionMatrix),it.setValue(N,"viewMatrix",v.matrixWorldInverse);let Xt=it.map.cameraPosition;Xt!==void 0&&Xt.setValue(N,Bt.setFromMatrixPosition(v.matrixWorld)),mt.logarithmicDepthBuffer&&it.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&it.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Ci=!0,as=!0)}if(Ae.needsLights&&(dn.state.sunShadowMap.length>0&&it.setValue(N,"sunShadowMap",dn.state.sunShadowMap,ke),dn.state.directionalShadowMap.length>0&&it.setValue(N,"directionalShadowMap",dn.state.directionalShadowMap,ke),dn.state.spotShadowMap.length>0&&it.setValue(N,"spotShadowMap",dn.state.spotShadowMap,ke),dn.state.pointShadowMap.length>0&&it.setValue(N,"pointShadowMap",dn.state.pointShadowMap,ke)),V.isSkinnedMesh){it.setOptional(N,V,"bindMatrix"),it.setOptional(N,V,"bindMatrixInverse");let Et=V.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),it.setValue(N,"boneTexture",Et.boneTexture,ke))}V.isBatchedMesh&&(it.setOptional(N,V,"batchingTexture"),it.setValue(N,"batchingTexture",V._matricesTexture,ke),it.setOptional(N,V,"batchingIdTexture"),it.setValue(N,"batchingIdTexture",V._indirectTexture,ke),it.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&it.setValue(N,"batchingColorTexture",V._colorsTexture,ke));let Fn=q.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&ee.update(V,q,on),(Ci||Ae.receiveShadow!==V.receiveShadow)&&(Ae.receiveShadow=V.receiveShadow,it.setValue(N,"receiveShadow",V.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(Qt.envMapIntensity.value=I.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=Kx()),Ci){if(it.setValue(N,"toneMappingExposure",C.toneMappingExposure),Ae.needsLights&&mp(Qt,as),xe&&B.fog===!0&&oe.refreshFogUniforms(Qt,xe),oe.refreshMaterialUniforms(Qt,B,te,ae,E.state.transmissionRenderTarget[v.id]),Ae.needsLights&&Ae.numLightProbeGrids>0){let Et=b,Xt=0;for(let ci of E.state.lightProbeGridArray)ci.texture!==null&&(Et.textures[Xt]=ci.texture,Et.min[Xt]=ci.boundingBox.min,Et.max[Xt]=ci.boundingBox.max,Et.resolution[Xt]=ci.resolution,Xt++);for(let ci in Et)Et[ci].length=Xt;Qt.probesSH.value=Et.textures,Qt.probesMin.value=Et.min,Qt.probesMax.value=Et.max,Qt.probesResolution.value=Et.resolution}cr.upload(N,jh(Ae),Qt,ke)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(cr.upload(N,jh(Ae),Qt,ke),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&it.setValue(N,"center",V.center),it.setValue(N,"modelViewMatrix",V.modelViewMatrix),it.setValue(N,"normalMatrix",V.normalMatrix),it.setValue(N,"modelMatrix",V.matrixWorld),B.uniformsGroups!==void 0){let Et=B.uniformsGroups;for(let Xt=0,ci=Et.length;Xt<ci;Xt++){let tu=Et[Xt];De.update(tu,on),De.bind(tu,on)}}return on}function mp(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.sunLights.needsUpdate=I,v.sunLightShadows.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function gp(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(v,I,q){let B=Ue.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ue.get(v.texture).__webglTexture=I,Ue.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:q,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){let q=Ue.get(v);q.__webglFramebuffer=I,q.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,q=0){ne=v,$=I,G=q;let B=null,V=!1,xe=!1;if(v){let ge=Ue.get(v);if(ge.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(N.FRAMEBUFFER,ge.__webglFramebuffer),k.copy(v.viewport),re.copy(v.scissor),fe=v.scissorTest,_e.viewport(k),_e.scissor(re),_e.setScissorTest(fe),W=-1;return}else if(ge.__webglFramebuffer===void 0)ke.setupRenderTarget(v);else if(ge.__hasExternalTextures)ke.rebindTextures(v,Ue.get(v.texture).__webglTexture,Ue.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let We=v.depthTexture;if(ge.__boundDepthTexture!==We){if(We!==null&&Ue.has(We)&&(v.width!==We.image.width||v.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(v)}}let Me=v.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(xe=!0);let Ce=Ue.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?B=Ce[I][q]:B=Ce[I],V=!0):v.samples>0&&ke.useMultisampledRTT(v)===!1?B=Ue.get(v).__webglMultisampledFramebuffer:Array.isArray(Ce)?B=Ce[q]:B=Ce,k.copy(v.viewport),re.copy(v.scissor),fe=v.scissorTest}else k.copy(be).multiplyScalar(te).floor(),re.copy(He).multiplyScalar(te).floor(),fe=qe;if(q!==0&&(B=X),_e.bindFramebuffer(N.FRAMEBUFFER,B)&&_e.drawBuffers(v,B),_e.viewport(k),_e.scissor(re),_e.setScissorTest(fe),V){let ge=Ue.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,ge.__webglTexture,q)}else if(xe){let ge=I;for(let Me=0;Me<v.textures.length;Me++){let Ce=Ue.get(v.textures[Me]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Me,Ce.__webglTexture,q,ge)}}else if(v!==null&&q!==0){let ge=Ue.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ge.__webglTexture,q)}W=-1};function eu(v){let I=Ue.get(v);return(I.__readFormat!==v.format||I.__readType!==v.type)&&(I.__readFormat=v.format,I.__readType=v.type,I.__formatReadable=mt.textureFormatReadable(v.format),I.__typeReadable=mt.textureTypeReadable(v.type)),I}this.readRenderTargetPixels=function(v,I,q,B,V,xe,Ee,ge=0){if(!(v&&v.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ue.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ee!==void 0&&(Me=Me[Ee],Array.isArray(Me)&&(Me=Me[0])),Me){_e.bindFramebuffer(N.FRAMEBUFFER,Me);try{let Ce=v.textures[ge],We=Ce.format,et=Ce.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge);let Te=eu(Ce);if(Te.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-B&&q>=0&&q<=v.height-V&&N.readPixels(I,q,B,V,he.convert(We),he.convert(et),xe)}finally{let Ce=ne!==null?Ue.get(ne).__webglFramebuffer:null;_e.bindFramebuffer(N.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(v,I,q,B,V,xe,Ee,ge=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ue.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ee!==void 0&&(Me=Me[Ee],Array.isArray(Me)&&(Me=Me[0])),Me)if(I>=0&&I<=v.width-B&&q>=0&&q<=v.height-V){_e.bindFramebuffer(N.FRAMEBUFFER,Me);let Ce=v.textures[ge],We=Ce.format,et=Ce.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge);let Te=eu(Ce);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,tt),N.bufferData(N.PIXEL_PACK_BUFFER,xe.byteLength,N.STREAM_READ),N.readPixels(I,q,B,V,he.convert(We),he.convert(et),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ft=ne!==null?Ue.get(ne).__webglFramebuffer:null;_e.bindFramebuffer(N.FRAMEBUFFER,Ft);let xt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await gd(N,xt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,tt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,xe),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(tt),N.deleteSync(xt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,q=0){let B=Math.pow(2,-q),V=Math.floor(v.image.width*B),xe=Math.floor(v.image.height*B),Ee=I!==null?I.x:0,ge=I!==null?I.y:0;ke.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Ee,ge,V,xe),_e.unbindTexture()},this.copyTextureToTexture=function(v,I,q=null,B=null,V=0,xe=0){let Ee,ge,Me,Ce,We,et,Te,tt,Ft,xt=v.isCompressedTexture?v.mipmaps[xe]:v.image;if(q!==null)Ee=q.max.x-q.min.x,ge=q.max.y-q.min.y,Me=q.isBox3?q.max.z-q.min.z:1,Ce=q.min.x,We=q.min.y,et=q.isBox3?q.min.z:0;else{let it=Math.pow(2,-V);Ee=Math.floor(xt.width*it),ge=Math.floor(xt.height*it),v.isDataArrayTexture?Me=xt.depth:v.isData3DTexture?Me=Math.floor(xt.depth*it):Me=1,Ce=0,We=0,et=0}B!==null?(Te=B.x,tt=B.y,Ft=B.z):(Te=0,tt=0,Ft=0);let gt=he.convert(I.format),an=he.convert(I.type),Ae;I.isData3DTexture?(ke.setTexture3D(I,0),Ae=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(ke.setTexture2DArray(I,0),Ae=N.TEXTURE_2D_ARRAY):(ke.setTexture2D(I,0),Ae=N.TEXTURE_2D),_e.activeTexture(N.TEXTURE0),_e.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),_e.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_e.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);let dn=_e.getParameter(N.UNPACK_ROW_LENGTH),rt=_e.getParameter(N.UNPACK_IMAGE_HEIGHT),rs=_e.getParameter(N.UNPACK_SKIP_PIXELS),on=_e.getParameter(N.UNPACK_SKIP_ROWS),Ea=_e.getParameter(N.UNPACK_SKIP_IMAGES);_e.pixelStorei(N.UNPACK_ROW_LENGTH,xt.width),_e.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xt.height),_e.pixelStorei(N.UNPACK_SKIP_PIXELS,Ce),_e.pixelStorei(N.UNPACK_SKIP_ROWS,We),_e.pixelStorei(N.UNPACK_SKIP_IMAGES,et);let Ci=v.isDataArrayTexture||v.isData3DTexture,as=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){let it=Ue.get(v),Qt=Ue.get(I),Fn=Ue.get(it.__renderTarget),Et=Ue.get(Qt.__renderTarget);_e.bindFramebuffer(N.READ_FRAMEBUFFER,Fn.__webglFramebuffer),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Xt=0;Xt<Me;Xt++)Ci&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ue.get(v).__webglTexture,V,et+Xt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ue.get(I).__webglTexture,xe,Ft+Xt)),N.blitFramebuffer(Ce,We,Ce+Ee,We+ge,Te,tt,Te+Ee,tt+ge,N.DEPTH_BUFFER_BIT,N.NEAREST);_e.bindFramebuffer(N.READ_FRAMEBUFFER,null),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||v.isRenderTargetTexture||Ue.has(v)){let it=Ue.get(v),Qt=Ue.get(I);_e.bindFramebuffer(N.READ_FRAMEBUFFER,P),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,Y);for(let Fn=0;Fn<Me;Fn++)Ci?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,it.__webglTexture,V,et+Fn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,it.__webglTexture,V),as?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Qt.__webglTexture,xe,Ft+Fn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Qt.__webglTexture,xe),V!==0?N.blitFramebuffer(Ce,We,Ce+Ee,We+ge,Te,tt,Te+Ee,tt+ge,N.COLOR_BUFFER_BIT,N.NEAREST):as?N.copyTexSubImage3D(Ae,xe,Te,tt,Ft+Fn,Ce,We,Ee,ge):N.copyTexSubImage2D(Ae,xe,Te,tt,Ce,We,Ee,ge);_e.bindFramebuffer(N.READ_FRAMEBUFFER,null),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else as?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(Ae,xe,Te,tt,Ft,Ee,ge,Me,gt,an,xt.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Ae,xe,Te,tt,Ft,Ee,ge,Me,gt,xt.data):N.texSubImage3D(Ae,xe,Te,tt,Ft,Ee,ge,Me,gt,an,xt):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,xe,Te,tt,Ee,ge,gt,an,xt.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,xe,Te,tt,xt.width,xt.height,gt,xt.data):N.texSubImage2D(N.TEXTURE_2D,xe,Te,tt,Ee,ge,gt,an,xt);_e.pixelStorei(N.UNPACK_ROW_LENGTH,dn),_e.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt),_e.pixelStorei(N.UNPACK_SKIP_PIXELS,rs),_e.pixelStorei(N.UNPACK_SKIP_ROWS,on),_e.pixelStorei(N.UNPACK_SKIP_IMAGES,Ea),xe===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&N.generateMipmap(Ae),_e.unbindTexture()},this.initRenderTarget=function(v){Ue.get(v).__webglFramebuffer===void 0&&ke.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?ke.setTextureCube(v,0):v.isData3DTexture?ke.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?ke.setTexture2DArray(v,0):ke.setTexture2D(v,0),_e.unbindTexture()},this.resetState=function(){$=0,G=0,ne=null,_e.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var jx=/^[og]\s*(.+)?/,Qx=/^mtllib /,ey=/^usemtl /,ty=/^usemap /,El=/\s+/,nf=new F,ch=new F,sf=new F,rf=new F,In=new F,wl=new Pe;function ny(){let n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){let a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);let o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){let s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){let s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){let s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){let s=this.vertices,r=this.object.geometry.normals;nf.fromArray(s,e),ch.fromArray(s,t),sf.fromArray(s,i),In.subVectors(sf,ch),rf.subVectors(nf,ch),In.cross(rf),In.normalize(),r.push(In.x,In.y,In.z),r.push(In.x,In.y,In.z),r.push(In.x,In.y,In.z)},addColor:function(e,t,i){let s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){let s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,r,a,o,l,c){let u=this.vertices.length,d=this.parseVertexIndex(e,u),h=this.parseVertexIndex(t,u),f=this.parseVertexIndex(i,u);if(this.addVertex(d,h,f),this.addColor(d,h,f),o!==void 0&&o!==""){let g=this.normals.length;d=this.parseNormalIndex(o,g),h=this.parseNormalIndex(l,g),f=this.parseNormalIndex(c,g),this.addNormal(d,h,f)}else this.addFaceNormal(d,h,f);if(s!==void 0&&s!==""){let g=this.uvs.length;d=this.parseUVIndex(s,g),h=this.parseUVIndex(r,g),f=this.parseUVIndex(a,g),this.addUV(d,h,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){let r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let i=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length-1;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],i)),this.addVertexLine(this.parseVertexIndex(e[r+1],i));for(let r=0,a=t.length-1;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s)),this.addUVLine(this.parseUVIndex(t[r+1],s))}};return n.startObject("",!1),n}var Tl=class extends Vn{constructor(e){super(e),this.materials=null}load(e,t,i,s){let r=this,a=new ps(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){let t=new ny;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let i=e.split(`
`),s=[];for(let o=0,l=i.length;o<l;o++){let c=i[o].trimStart();if(c.length===0)continue;let u=c.charAt(0);if(u!=="#")if(u==="v"){let d=c.split(El);switch(d[0]){case"v":t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(wl.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6]),dt),t.colors.push(wl.r,wl.g,wl.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":t.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(u==="f"){let h=c.slice(1).trim().split(El),f=[];for(let x=0,p=h.length;x<p;x++){let m=h[x];if(m.length>0){let M=m.split("/");f.push(M)}}let g=f[0];for(let x=1,p=f.length-1;x<p;x++){let m=f[x],M=f[x+1];t.addFace(g[0],m[0],M[0],g[1],m[1],M[1],g[2],m[2],M[2])}}else if(u==="l"){let d=c.substring(1).trim().split(El),h=[],f=[];if(c.indexOf("/")===-1)h=d;else for(let g=0,x=d.length;g<x;g++){let p=d[g].split("/");p[0]!==""&&h.push(p[0]),p[1]!==""&&f.push(p[1])}t.addLineGeometry(h,f)}else if(u==="p"){let h=c.slice(1).trim().split(El);t.addPointGeometry(h)}else if((s=jx.exec(c))!==null){let d=(" "+s[0].slice(1).trim()).slice(1);t.startObject(d)}else if(ey.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(Qx.test(c))t.materialLibraries.push(c.substring(7).trim());else if(ty.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){let h=s[1].trim().toLowerCase();t.object.smooth=h!=="0"&&h!=="off"}else t.object.smooth=!0;let d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();let r=new bn;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){let c=t.objects[o],u=c.geometry,d=c.materials,h=u.type==="Line",f=u.type==="Points",g=!1;if(u.vertices.length===0)continue;let x=new Rt;x.setAttribute("position",new ht(u.vertices,3)),u.normals.length>0&&x.setAttribute("normal",new ht(u.normals,3)),u.colors.length>0&&(g=!0,x.setAttribute("color",new ht(u.colors,3))),u.hasUVIndices===!0&&x.setAttribute("uv",new ht(u.uvs,2));let p=[];for(let M=0,T=d.length;M<T;M++){let b=d[M],A=b.name+"_"+b.smooth+"_"+g,E=t.materials[A];if(this.materials!==null){if(E=this.materials.create(b.name),h&&E&&!(E instanceof Qn)){let _=new Qn;xn.prototype.copy.call(_,E),_.color.copy(E.color),E=_}else if(f&&E&&!(E instanceof yi)){let _=new yi({size:10,sizeAttenuation:!1});xn.prototype.copy.call(_,E),_.color.copy(E.color),_.map=E.map,E=_}}E===void 0&&(h?E=new Qn:f?E=new yi({size:1,sizeAttenuation:!1}):E=new ti,E.name=b.name,E.flatShading=!b.smooth,E.vertexColors=g,t.materials[A]=E),p.push(E)}let m;if(p.length>1){for(let M=0,T=d.length;M<T;M++){let b=d[M];x.addGroup(b.groupStart,b.groupCount,M)}h?m=new js(x,p):f?m=new fs(x,p):m=new Ct(x,p)}else h?m=new js(x,p[0]):f?m=new fs(x,p[0]):m=new Ct(x,p[0]);m.name=c.name,r.add(m)}else if(t.vertices.length>0){let o=new yi({size:1,sizeAttenuation:!1}),l=new Rt;l.setAttribute("position",new ht(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new ht(t.colors,3)),o.vertexColors=!0);let c=new fs(l,o);r.add(c)}return r}};var Al=class extends Vn{constructor(e){super(e)}load(e,t,i,s){let r=this,a=this.path===""?Xr.extractUrlBase(e):this.path,o=new ps(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){let i=e.split(`
`),s={},r=/\s+/,a={};for(let l=0;l<i.length;l++){let c=i[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;let u=c.indexOf(" "),d=u>=0?c.substring(0,u):c;d=d.toLowerCase();let h=u>=0?c.substring(u+1):"";if(h=h.trim(),d==="newmtl")s={name:h},a[h]=s;else if(d==="ka"||d==="kd"||d==="ks"||d==="ke"){let f=h.split(r,3);s[d]=[parseFloat(f[0]),parseFloat(f[1]),parseFloat(f[2])]}else s[d]=h}let o=new hh(this.resourcePath||t,this.materialOptions);return o.setCrossOrigin(this.crossOrigin),o.setManager(this.manager),o.priority=this.priority,o.cache=this.cache,o.setMaterials(a),o}},hh=class{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.priority="auto",this.cache="default",this.side=this.options.side!==void 0?this.options.side:ni,this.wrap=this.options.wrap!==void 0?this.options.wrap:Fi}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;let t={};for(let i in e){let s=e[i],r={};t[i]=r;for(let a in s){let o=!0,l=s[a],c=a.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(o=!1);break;default:break}o&&(r[c]=l)}}return t}preload(){for(let e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(let t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){let t=this,i=this.materialsInfo[e],s={name:e,side:this.side};function r(o,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:o+l}function a(o,l){if(s[o])return;let c=t.getTextureParams(l,s),u=t.loadTexture(r(t.baseUrl,c.url));u.repeat.copy(c.scale),u.offset.copy(c.offset),u.wrapS=t.wrap,u.wrapT=t.wrap,(o==="map"||o==="emissiveMap")&&(u.colorSpace=dt),s[o]=u}for(let o in i){let l=i[o],c;if(l!=="")switch(o.toLowerCase()){case"kd":s.color=Ze.colorSpaceToWorking(new Pe().fromArray(l),dt);break;case"ks":s.specular=Ze.colorSpaceToWorking(new Pe().fromArray(l),dt);break;case"ke":s.emissive=Ze.colorSpaceToWorking(new Pe().fromArray(l),dt);break;case"map_kd":a("map",l);break;case"map_ks":a("specularMap",l);break;case"map_ke":a("emissiveMap",l);break;case"norm":a("normalMap",l);break;case"map_bump":case"bump":a("bumpMap",l);break;case"disp":a("displacementMap",l);break;case"map_d":a("alphaMap",l),s.transparent=!0;break;case"ns":s.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(s.opacity=c,s.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(s.opacity=1-c,s.transparent=!0);break;default:break}}return this.materials[e]=new ti(s),this.materials[e]}getTextureParams(e,t){let i={scale:new Xe(1,1),offset:new Xe(0,0)},s=e.split(/\s+/),r;return r=s.indexOf("-bm"),r>=0&&(t.bumpScale=parseFloat(s[r+1]),s.splice(r,2)),r=s.indexOf("-mm"),r>=0&&(t.displacementBias=parseFloat(s[r+1]),t.displacementScale=parseFloat(s[r+2]),s.splice(r,3)),r=s.indexOf("-s"),r>=0&&(i.scale.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),r=s.indexOf("-o"),r>=0&&(i.offset.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),i.url=s.join(" ").trim(),i}loadTexture(e,t,i,s,r){let a=this.manager!==void 0?this.manager:_l,o=a.getHandler(e);o===null&&(o=new kr(a),o.setPriority(this.priority),o.setCache(this.cache)),o.setCrossOrigin&&o.setCrossOrigin(this.crossOrigin);let l=o.load(e,i,s,r);return t!==void 0&&(l.mapping=t),l}};function iy(n){let i=document.createElement("canvas");i.width=256,i.height=256;let s=i.getContext("2d",{willReadFrequently:!0}),r=s.createImageData(256,256),a=n==="female"?[206,166,146]:[184,145,126];for(let l=0;l<256;l++)for(let c=0;c<256;c++){let u=(l*256+c)*4,d=Math.sin(c*.027)*1.2+Math.cos(l*.031)*1,h=((c*73+l*151+c*l*17)%31-15)*.22+d;r.data[u]=Math.max(0,Math.min(255,a[0]+h)),r.data[u+1]=Math.max(0,Math.min(255,a[1]+h)),r.data[u+2]=Math.max(0,Math.min(255,a[2]+h)),r.data[u+3]=255}s.putImageData(r,0,0);let o=new zi(i);return o.colorSpace=dt,o.wrapS=o.wrapT=Fi,o.generateMipmaps=!0,o.minFilter=Hn,o.magFilter=At,o.needsUpdate=!0,o.userData.grimstudioFallback=!0,o}function af({objText:n,mtlText:e,modelId:t}){if(typeof n!="string"||n.length<100)throw new Error("OBJ content is missing or too small");if(typeof e!="string"||!/^\s*newmtl\s+/m.test(e))throw new Error("MTL contains no material definitions");let i=[...e.matchAll(/^\s*map_Kd\s+(.+)\s*$/gim)].map(h=>h[1].trim()),s=e.split(/\r?\n/).filter(h=>!/^\s*map_Kd\s/i.test(h)).join(`
`),r=new Al().parse(s,"");r.preload();let a=new Tl().setMaterials(r).parse(n),o=0,l=0,c=0;if(a.traverse(h=>{if(!h.isMesh)return;o++;let f=h.geometry;if(!f.attributes.position?.count)throw new Error(`Mesh ${h.name||o} has no position data`);l+=f.attributes.position.count,f.attributes.uv?.count&&c++,f.attributes.normal||f.computeVertexNormals();let g=Array.isArray(h.material)?h.material:[h.material];for(let x of g)x&&(x.side=tn,x.roughness=.88,x.metalness=0,x.map||(x.map=iy(t),x.color?.set(16777215)),x.needsUpdate=!0)}),!o)throw new Error("OBJ parsed but contains no mesh geometry");if(!l)throw new Error("OBJ geometry has no vertices");let d=new Pn().setFromObject(a).getSize(new F);if(![d.x,d.y,d.z].every(Number.isFinite)||Math.max(d.x,d.y,d.z)<=0)throw new Error("Model has invalid bounding dimensions");return{root:a,stats:{meshes:o,vertices:l,uvMeshes:c,bounds:{x:d.x,y:d.y,z:d.z},missingTextureRefs:i}}}function of(n){if(!n)return;let e=new Set,t=new Set,i=new Set;n.traverse(s=>{if(!s.isMesh)return;s.geometry&&e.add(s.geometry);let r=Array.isArray(s.material)?s.material:[s.material];for(let a of r)if(a){t.add(a);for(let o of Object.values(a))o?.isTexture&&i.add(o)}}),i.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),e.forEach(s=>s.dispose())}function sy(n,e,t,i,s){let r=s*3,a=i[r]*3,o=i[r+1]*3,l=i[r+2]*3,c=t[a],u=t[a+1],d=t[a+2],h=t[o]-c,f=t[o+1]-u,g=t[o+2]-d,x=t[l]-c,p=t[l+1]-u,m=t[l+2]-d,M=e.y*m-e.z*p,T=e.z*x-e.x*m,b=e.x*p-e.y*x,A=h*M+f*T+g*b;if(Math.abs(A)<1e-10)return null;let E=1/A,_=n.x-c,S=n.y-u,L=n.z-d,C=(_*M+S*T+L*b)*E;if(C<-1e-8||C>1+1e-8)return null;let U=S*g-L*f,z=L*h-_*g,X=_*f-S*h,P=(e.x*U+e.y*z+e.z*X)*E;if(P<-1e-8||C+P>1+1e-8)return null;let Y=(x*U+p*z+m*X)*E;return Y>1e-7?{distance:Y,u:C,v:P,ia:a,ib:o,ic:l}:null}function lf(n,e,t,i=1/0){let s=n.cellSize,r=n.gridMin,a=n.gridMax,o=0,l=1/0,c=e.x,u=e.y,d=e.z,h=t.x,f=t.y,g=t.z;if(Math.abs(h)<1e-12){if(c<r[0]||c>a[0])return null}else{let ae=(r[0]-c)/h,te=(a[0]-c)/h;if(ae>te){let Se=ae;ae=te,te=Se}if(o=Math.max(o,ae),l=Math.min(l,te),o>l)return null}if(Math.abs(f)<1e-12){if(u<r[1]||u>a[1])return null}else{let ae=(r[1]-u)/f,te=(a[1]-u)/f;if(ae>te){let Se=ae;ae=te,te=Se}if(o=Math.max(o,ae),l=Math.min(l,te),o>l)return null}if(Math.abs(g)<1e-12){if(d<r[2]||d>a[2])return null}else{let ae=(r[2]-d)/g,te=(a[2]-d)/g;if(ae>te){let Se=ae;ae=te,te=Se}if(o=Math.max(o,ae),l=Math.min(l,te),o>l)return null}if(l<0)return null;let x=Math.max(0,o),p=Math.min(l,i);if(x>p)return null;let m=Math.max(1e-9,s*1e-8),M=e.x+t.x*(x+m),T=e.y+t.y*(x+m),b=e.z+t.z*(x+m),A=n.nx,E=n.ny,_=n.nz,S=Math.max(0,Math.min(A-1,Math.floor((M-r[0])/s))),L=Math.max(0,Math.min(E-1,Math.floor((T-r[1])/s))),C=Math.max(0,Math.min(_-1,Math.floor((b-r[2])/s))),U=t.x>1e-12?1:t.x<-1e-12?-1:0,z=t.y>1e-12?1:t.y<-1e-12?-1:0,X=t.z>1e-12?1:t.z<-1e-12?-1:0,P=U?s/Math.abs(t.x):1/0,Y=z?s/Math.abs(t.y):1/0,$=X?s/Math.abs(t.z):1/0,G=U?(r[0]+(U>0?S+1:S)*s-e.x)/t.x:1/0,ne=z?(r[1]+(z>0?L+1:L)*s-e.y)/t.y:1/0,W=X?(r[2]+(X>0?C+1:C)*s-e.z)/t.z:1/0;for(;G<x;)G+=P;for(;ne<x;)ne+=Y;for(;W<x;)W+=$;n.mark=n.mark+1>>>0,n.mark===0&&(n.faceMarks.fill(0),n.mark=1);let Q=n.mark,k=null,re=p,fe=n.offsets,H=n.faceIds,ie=n.faceMarks,ce=A+E+_+3;for(let ae=0;ae<ce&&!(S<0||S>=A||L<0||L>=E||C<0||C>=_);ae++){let te=S+A*(L+E*C);for(let be=fe[te],He=fe[te+1];be<He;be++){let qe=H[be];if(ie[qe]===Q)continue;ie[qe]=Q;let Fe=sy(e,t,n.points,n.triangles,qe);Fe&&Fe.distance<re&&(re=Fe.distance,k={faceIndex:qe,distance:Fe.distance,u:Fe.u,v:Fe.v,x:e.x+t.x*Fe.distance,y:e.y+t.y*Fe.distance,z:e.z+t.z*Fe.distance})}let Se=Math.min(G,ne,W);if(k&&re<=Se+m||Se>p)break;let Ke=Math.max(m,Math.abs(Se)*1e-12);G<=Se+Ke&&(S+=U,G+=P),ne<=Se+Ke&&(L+=z,ne+=Y),W<=Se+Ke&&(C+=X,W+=$)}return k}var D=n=>document.querySelector(n),Ne=(n,e,t)=>Math.min(t,Math.max(e,n)),bh=Object.freeze([{id:"male",name:"Male Head",objFile:"Male Average Head.obj",mtlFile:"Male Average Head.mtl"},{id:"female",name:"Female Head",objFile:"Female Average Head.obj",mtlFile:"Female Average Head.mtl"}]),Ei="male",Ss=new Map,ry="grimstudio-2.5.2-dual-heads-obj-mtl",ma=10,ay=100,Xi=1,ur=0,oa=0,oy=44,Zi={en:{performanceStats:"Performance diagnostics",brandTag:"PROFESSIONAL 3D MAKEUP STUDIO",new:"New",open:"Open",save:"Save",export:"Export PNG",language:"Language",theme:"Theme",tools:"MAKEUP TOOLS",all:"All",paint:"Paint",face:"Face",blend:"Blend",advanced:"Advanced",size:"Size",opacity:"Opacity",softness:"Edge softness",flow:"Flow",symmetry:"Mirror painting (X axis)",view:"VIEW",front:"Front",left:"Left",right:"Right",back:"Back",reset:"Reset",viewHint:"Left button paints \xB7 Hold right button to rotate \xB7 Wheel to zoom",headModel:"HEAD MODEL",settingsTitle:"Settings",skinTone:"Skin tone",retry:"Retry loading",viewportHint:"Paint: left button \xB7 Rotate: hold right button \xB7 Pan: middle button \xB7 Zoom: wheel",color:"COLOR",activePigment:"Active pigment",layers:"MAKEUP LAYERS",layerOpacity:"Layer opacity",rename:"Rename",delete:"Delete",workflow:"WORKFLOW",workflowText:"Makeup is stored as surface-attached decals in independent layers. Original head materials and textures are never edited.",undo:"Undo",redo:"Redo",brushSize:"Brush size",ready:"Ready",loading:"Loading head model\u2026",preparing:"Preparing isolated paint surface\u2026",loaded:"Head surface ready",graphicsError:"3D graphics could not be initialized",retryText:"Check hardware acceleration and graphics drivers, then retry.",modelError:"Could not load the head model",toolNames:["Brush","Airbrush","Powder","Sponge","Foundation","Concealer","Blush","Contour","Highlighter","Eyeshadow","Eyeliner","Pencil","Lipstick","Lip Gloss","Mascara","Eyebrow","Blur","Blender","Eraser","Stencil","Stamp","Symmetry","Eyedropper"],toolTips:["Build soft, controllable pigment with smooth surface stamps.","Spray a feathered pigment cloud with gradual buildup.","Apply fine, low-contrast powder grain.","Dab a porous, irregular pigment texture.","Lay down a broad, natural base layer.","Apply precise localized coverage.","Create a soft circular cheek color gradient.","Apply a soft directional contour wash.","Add a soft luminous cosmetic layer.","Create a softly blended eye-area color.","Draw narrow, crisp cosmetic lines.","Create precise hard-edged detail strokes.","Apply dense, creamy lip pigment.","Add a translucent glossy highlight layer.","Create fine directional lash-like marks.","Create fine hair-like brow strokes.","Repaint the area with the local averaged pigment, softly feathering hard edges.","Mix the local pigment tones with the active color using a translucent veil.","Erase paint along the brush path on the active layer.","Apply a star-shaped decorative stencil.","Place a decorative rosette stamp.","Toggle mirrored painting across the model X axis.","Sample the composited pigment where colors have mixed."],layerName:"Layer",baseLayer:"Base Makeup",layerAdded:"Layer added",layerDuplicated:"Layer duplicated",layerLimit:"Layer limit reached",noLayer:"No active layer",locked:"Unlock this layer first",clearConfirm:"Clear all paint on",newConfirm:"Create a new project? Current paint will be cleared. Save first if needed.",renamed:"Layer name:",deleted:"Layer deleted",toolStatus:"Tool",strokeSaved:"Stroke saved",autosaved:"Autosaved",autosaveFailed:"Autosave failed",projectSaved:"Project saved",projectOpened:"Project opened",invalidProject:"Invalid project file",exported:"PNG exported",exportFailed:"Export failed",modelReadyToast:"Head model ready",system:"System",dark:"Dark",light:"Light",symmetryOn:"Symmetry enabled",symmetryOff:"Symmetry disabled",colorSampled:"Pigment sampled",legacyWarning:"This project contains legacy UV paint. New strokes use isolated surface decals; legacy paint is preserved as a separate compatibility layer.",surfaceIndex:"Building surface index",surfaceReady:"Surface index ready",brushSettings:"TOOL SETTINGS",faceCategory:"Face makeup",paintCategory:"Paint",blendCategory:"Blend & correction",advancedCategory:"Advanced",interaction:"CAMERA & PERFORMANCE",cameraRotation:"Camera rotation",cameraPan:"Camera pan",rightMouse:"Right mouse button",middleMouse:"Middle mouse button",spaceLeft:"Space + left mouse",shiftRight:"Shift + right mouse",disabled:"Disabled",rotateSensitivity:"Rotation sensitivity",zoomSensitivity:"Zoom sensitivity",performance:"Painting performance",performanceFast:"Performance",performanceBalanced:"Balanced",performanceQuality:"Quality",cameraHint:"Paint: left button \xB7 Rotate: assigned button \xB7 Pan: assigned button \xB7 Zoom: wheel",resetControls:"Reset camera settings",preview:"BRUSH PREVIEW",brushShape:"BRUSH SHAPE",shapeDefault:"Tool default",shapeSoft:"Soft round",shapeHard:"Hard round",shapeFlat:"Flat",shapeAir:"Airbrush",shapeSpeckle:"Speckle",shapePorous:"Porous",shapeHair:"Fine hair",shapeStar:"Star",shapeRosette:"Rosette",lighting:"LIGHTING",lightingPreset:"Lighting preset",lightTemp:"Color temperature",lightAzimuth:"Light azimuth",lightElevation:"Light elevation",lightIntensity:"Key light intensity",lightHint:"Direction is measured from the front of the model.",lightFill:"Fill light",lightRim:"Rim light",lightAmbient:"Ambient light",lpStudio:"Studio portrait",lpVanity:"Vanity mirror",lpOvercast:"Overcast daylight",lpSun:"Direct sun",lpGolden:"Golden hour",lpSunset:"Sunset dusk",lpMoon:"Moonlight",lpBackstage:"Backstage lights",lpCandle:"Candlelight",lpRing:"Ring light",lpCustom:"Custom",appearance:"APPEARANCE",accentColor:"Accent color",accentReset:"Use default accent",accentBrass:"Brass",accentTeal:"Teal",accentSky:"Sky blue",accentViolet:"Violet",accentRose:"Rose",accentLime:"Lime",accentAmber:"Amber",accentCrimson:"Crimson"},ru:{performanceStats:"\u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",brandTag:"\u041F\u0420\u041E\u0424\u0415\u0421\u0421\u0418\u041E\u041D\u0410\u041B\u042C\u041D\u0410\u042F 3D-\u0421\u0422\u0423\u0414\u0418\u042F \u0413\u0420\u0418\u041C\u0410",new:"\u041D\u043E\u0432\u044B\u0439",open:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C",save:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",export:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442 PNG",language:"\u042F\u0437\u044B\u043A",theme:"\u0422\u0435\u043C\u0430",tools:"\u0418\u041D\u0421\u0422\u0420\u0423\u041C\u0415\u041D\u0422\u042B \u0413\u0420\u0418\u041C\u0410",all:"\u0412\u0441\u0435",paint:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435",face:"\u041B\u0438\u0446\u043E",blend:"\u0421\u043C\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435",advanced:"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E",size:"\u0420\u0430\u0437\u043C\u0435\u0440",opacity:"\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C",softness:"\u041C\u044F\u0433\u043A\u043E\u0441\u0442\u044C \u043A\u0440\u0430\u044F",flow:"\u041D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C",symmetry:"\u0417\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435 (\u043E\u0441\u044C X)",view:"\u0412\u0418\u0414",front:"\u0421\u043F\u0435\u0440\u0435\u0434\u0438",left:"\u0421\u043B\u0435\u0432\u0430",right:"\u0421\u043F\u0440\u0430\u0432\u0430",back:"\u0421\u0437\u0430\u0434\u0438",reset:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",viewHint:"\u041B\u041A\u041C \u2014 \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \xB7 \u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439 \u041F\u041A\u041C \u0434\u043B\u044F \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F \xB7 \u041A\u043E\u043B\u0435\u0441\u043E \u2014 \u043C\u0430\u0441\u0448\u0442\u0430\u0431",headModel:"3D-\u041C\u041E\u0414\u0415\u041B\u042C \u0413\u041E\u041B\u041E\u0412\u042B",settingsTitle:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",skinTone:"\u0422\u043E\u043D \u043A\u043E\u0436\u0438",retry:"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443",viewportHint:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435: \u041B\u041A\u041C \xB7 \u0412\u0440\u0430\u0449\u0435\u043D\u0438\u0435: \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439 \u041F\u041A\u041C \xB7 \u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435: \u0441\u0440\u0435\u0434\u043D\u044F\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \xB7 \u041C\u0430\u0441\u0448\u0442\u0430\u0431: \u043A\u043E\u043B\u0435\u0441\u043E",color:"\u0426\u0412\u0415\u0422",activePigment:"\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0446\u0432\u0435\u0442",layers:"\u0421\u041B\u041E\u0418 \u0413\u0420\u0418\u041C\u0410",layerOpacity:"\u041D\u0435\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u0441\u043B\u043E\u044F",rename:"\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C",delete:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",workflow:"\u0420\u0410\u0411\u041E\u0427\u0418\u0419 \u041F\u0420\u041E\u0426\u0415\u0421\u0421",workflowText:"\u0413\u0440\u0438\u043C \u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u043A\u0430\u043A \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0446\u0438\u0438 \u0432 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u0441\u043B\u043E\u044F\u0445. \u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0438 \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u044B \u0433\u043E\u043B\u043E\u0432\u044B \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F.",undo:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",redo:"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",brushSize:"\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u0438\u0441\u0442\u0438",ready:"\u0413\u043E\u0442\u043E\u0432\u043E",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043C\u043E\u0434\u0435\u043B\u0438 \u0433\u043E\u043B\u043E\u0432\u044B\u2026",preparing:"\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u044F\u2026",loaded:"\u041F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C \u0433\u043E\u043B\u043E\u0432\u044B \u0433\u043E\u0442\u043E\u0432\u0430",graphicsError:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C 3D-\u0433\u0440\u0430\u0444\u0438\u043A\u0443",retryText:"\u041F\u0440\u043E\u0432\u0435\u0440\u044C \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \u0438 \u0434\u0440\u0430\u0439\u0432\u0435\u0440 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u044B, \u0437\u0430\u0442\u0435\u043C \u043F\u043E\u0432\u0442\u043E\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0443.",modelError:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C \u0433\u043E\u043B\u043E\u0432\u044B",toolNames:["\u041A\u0438\u0441\u0442\u044C","\u0410\u044D\u0440\u043E\u0433\u0440\u0430\u0444","\u041F\u0443\u0434\u0440\u0430","\u0421\u043F\u043E\u043D\u0436","\u0422\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u043E\u0441\u043D\u043E\u0432\u0430","\u041A\u043E\u043D\u0441\u0438\u043B\u0435\u0440","\u0420\u0443\u043C\u044F\u043D\u0430","\u041A\u043E\u043D\u0442\u0443\u0440\u0438\u043D\u0433","\u0425\u0430\u0439\u043B\u0430\u0439\u0442\u0435\u0440","\u0422\u0435\u043D\u0438","\u041F\u043E\u0434\u0432\u043E\u0434\u043A\u0430","\u041A\u0430\u0440\u0430\u043D\u0434\u0430\u0448","\u041F\u043E\u043C\u0430\u0434\u0430","\u0411\u043B\u0435\u0441\u043A \u0434\u043B\u044F \u0433\u0443\u0431","\u0422\u0443\u0448\u044C","\u0411\u0440\u043E\u0432\u0438","\u0420\u0430\u0437\u043C\u044B\u0442\u0438\u0435","\u0421\u043C\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435","\u041B\u0430\u0441\u0442\u0438\u043A","\u0422\u0440\u0430\u0444\u0430\u0440\u0435\u0442","\u0428\u0442\u0430\u043C\u043F","\u0421\u0438\u043C\u043C\u0435\u0442\u0440\u0438\u044F","\u041F\u0438\u043F\u0435\u0442\u043A\u0430"],toolTips:["\u041C\u044F\u0433\u043A\u0438\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0435 \u043C\u0430\u0437\u043A\u0438 \u043F\u0438\u0433\u043C\u0435\u043D\u0442\u0430 \u043F\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438.","\u0412\u043E\u0437\u0434\u0443\u0448\u043D\u043E\u0435 \u043D\u0430\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u043F\u0438\u0433\u043C\u0435\u043D\u0442\u0430 \u0441 \u043F\u043B\u0430\u0432\u043D\u044B\u043C \u043D\u0430\u043A\u043E\u043F\u043B\u0435\u043D\u0438\u0435\u043C.","\u041C\u0435\u043B\u043A\u043E\u0434\u0438\u0441\u043F\u0435\u0440\u0441\u043D\u043E\u0435 \u043D\u0430\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u043F\u0443\u0434\u0440\u044B.","\u041D\u0430\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u043D\u043E\u0433\u043E \u043F\u0438\u0433\u043C\u0435\u043D\u0442\u0430 \u0442\u043E\u0447\u0435\u0447\u043D\u044B\u043C\u0438 \u043A\u0430\u0441\u0430\u043D\u0438\u044F\u043C\u0438.","\u0428\u0438\u0440\u043E\u043A\u043E\u0435 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043D\u0430\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0442\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u043E\u0441\u043D\u043E\u0432\u044B.","\u0422\u043E\u0447\u043D\u043E\u0435 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u0435 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u0443\u0447\u0430\u0441\u0442\u043A\u043E\u0432.","\u041C\u044F\u0433\u043A\u0438\u0439 \u043A\u0440\u0443\u0433\u043E\u0432\u043E\u0439 \u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442 \u0440\u0443\u043C\u044F\u043D.","\u041C\u044F\u0433\u043A\u043E\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0435 \u0437\u0430\u0442\u0435\u043C\u043D\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043A\u043E\u043D\u0442\u0443\u0440\u0438\u043D\u0433\u0430.","\u041C\u044F\u0433\u043A\u0438\u0439 \u0441\u0432\u0435\u0442\u044F\u0449\u0438\u0439\u0441\u044F \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u043B\u043E\u0439.","\u041C\u044F\u0433\u043A\u043E \u0440\u0430\u0441\u0442\u0443\u0448\u0451\u0432\u0430\u043D\u043D\u044B\u0439 \u0446\u0432\u0435\u0442 \u0434\u043B\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0433\u043B\u0430\u0437.","\u0422\u043E\u043D\u043A\u0438\u0435 \u0447\u0451\u0442\u043A\u0438\u0435 \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u043D\u0438\u0438.","\u0422\u043E\u0447\u043D\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u043B\u0438\u043D\u0438\u0438 \u0441 \u0436\u0451\u0441\u0442\u043A\u0438\u043C \u043A\u0440\u0430\u0435\u043C.","\u041F\u043B\u043E\u0442\u043D\u044B\u0439 \u043A\u0440\u0435\u043C\u043E\u0432\u044B\u0439 \u043F\u0438\u0433\u043C\u0435\u043D\u0442 \u0434\u043B\u044F \u0433\u0443\u0431.","\u041F\u043E\u043B\u0443\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439 \u0433\u043B\u044F\u043D\u0446\u0435\u0432\u044B\u0439 \u0441\u043B\u043E\u0439.","\u0422\u043E\u043D\u043A\u0438\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0448\u0442\u0440\u0438\u0445\u0438, \u0438\u043C\u0438\u0442\u0438\u0440\u0443\u044E\u0449\u0438\u0435 \u0440\u0435\u0441\u043D\u0438\u0446\u044B.","\u0422\u043E\u043D\u043A\u0438\u0435 \u0448\u0442\u0440\u0438\u0445\u0438, \u0438\u043C\u0438\u0442\u0438\u0440\u0443\u044E\u0449\u0438\u0435 \u0432\u043E\u043B\u043E\u0441\u043A\u0438 \u0431\u0440\u043E\u0432\u0435\u0439.","\u041F\u0435\u0440\u0435\u043A\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0443\u0447\u0430\u0441\u0442\u043E\u043A \u0443\u0441\u0440\u0435\u0434\u043D\u0451\u043D\u043D\u044B\u043C \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u043C \u043F\u0438\u0433\u043C\u0435\u043D\u0442\u043E\u043C, \u043C\u044F\u0433\u043A\u043E \u0441\u0433\u043B\u0430\u0436\u0438\u0432\u0430\u044F \u0436\u0451\u0441\u0442\u043A\u0438\u0435 \u043A\u0440\u0430\u044F.","\u0421\u043C\u0435\u0448\u0438\u0432\u0430\u0435\u0442 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043E\u0442\u0442\u0435\u043D\u043A\u0438 \u0441 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u043C \u0446\u0432\u0435\u0442\u043E\u043C \u043F\u043E\u043B\u0443\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u043C \u0441\u043B\u043E\u0435\u043C.","\u0421\u0442\u0438\u0440\u0430\u0435\u0442 \u043C\u0430\u0437\u043A\u0438 \u0432\u0434\u043E\u043B\u044C \u043F\u0443\u0442\u0438 \u043A\u0438\u0441\u0442\u0438 \u043D\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u043C \u0441\u043B\u043E\u0435.","\u041D\u0430\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0442\u0440\u0430\u0444\u0430\u0440\u0435\u0442\u0430 \u0432 \u0444\u043E\u0440\u043C\u0435 \u0437\u0432\u0435\u0437\u0434\u044B.","\u041D\u0430\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0443\u0437\u043E\u0440\u0430-\u0440\u043E\u0437\u0435\u0442\u043A\u0438.","\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0441\u0438 X \u043C\u043E\u0434\u0435\u043B\u0438.","\u0412\u044B\u0431\u043E\u0440 \u0441\u043C\u0435\u0448\u0430\u043D\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430 \u0432 \u043C\u0435\u0441\u0442\u0435 \u043D\u0430\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043C\u0430\u0437\u043A\u043E\u0432."],layerName:"\u0421\u043B\u043E\u0439",baseLayer:"\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0433\u0440\u0438\u043C",layerAdded:"\u0421\u043B\u043E\u0439 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D",layerDuplicated:"\u0421\u043B\u043E\u0439 \u0434\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u043D",layerLimit:"\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442 \u043B\u0438\u043C\u0438\u0442 \u0441\u043B\u043E\u0451\u0432",noLayer:"\u041D\u0435\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0441\u043B\u043E\u044F",locked:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0439 \u0441\u043B\u043E\u0439",clearConfirm:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0435\u0441\u044C \u0433\u0440\u0438\u043C \u043D\u0430 \u0441\u043B\u043E\u0435",newConfirm:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442? \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0433\u0440\u0438\u043C \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0451\u043D. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0438 \u0440\u0430\u0431\u043E\u0442\u0443.",renamed:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u043B\u043E\u044F:",deleted:"\u0421\u043B\u043E\u0439 \u0443\u0434\u0430\u043B\u0451\u043D",toolStatus:"\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442",strokeSaved:"\u041C\u0430\u0437\u043E\u043A \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D",autosaved:"\u0410\u0432\u0442\u043E\u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E",autosaveFailed:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u0432\u0442\u043E\u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F",projectSaved:"\u041F\u0440\u043E\u0435\u043A\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D",projectOpened:"\u041F\u0440\u043E\u0435\u043A\u0442 \u043E\u0442\u043A\u0440\u044B\u0442",invalidProject:"\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0444\u0430\u0439\u043B \u043F\u0440\u043E\u0435\u043A\u0442\u0430",exported:"PNG \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D",exportFailed:"\u041E\u0448\u0438\u0431\u043A\u0430 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0430",modelReadyToast:"\u041C\u043E\u0434\u0435\u043B\u044C \u0433\u043E\u043B\u043E\u0432\u044B \u0433\u043E\u0442\u043E\u0432\u0430",system:"\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u0430\u044F",dark:"\u0422\u0451\u043C\u043D\u0430\u044F",light:"\u0421\u0432\u0435\u0442\u043B\u0430\u044F",symmetryOn:"\u0421\u0438\u043C\u043C\u0435\u0442\u0440\u0438\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430",symmetryOff:"\u0421\u0438\u043C\u043C\u0435\u0442\u0440\u0438\u044F \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u0430",colorSampled:"\u0426\u0432\u0435\u0442 \u0432\u044B\u0431\u0440\u0430\u043D",legacyWarning:"\u041F\u0440\u043E\u0435\u043A\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0442\u0430\u0440\u044B\u0435 UV-\u0440\u0438\u0441\u0443\u043D\u043A\u0438. \u041D\u043E\u0432\u044B\u0435 \u043C\u0430\u0437\u043A\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0446\u0438\u0438; \u0441\u0442\u0430\u0440\u044B\u0439 \u0433\u0440\u0438\u043C \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u043C \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u043C \u0441\u043B\u043E\u0435.",surfaceIndex:"\u041F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435 \u0438\u043D\u0434\u0435\u043A\u0441\u0430 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438",surfaceReady:"\u0418\u043D\u0434\u0435\u043A\u0441 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u0433\u043E\u0442\u043E\u0432",brushSettings:"\u041D\u0410\u0421\u0422\u0420\u041E\u0419\u041A\u0418 \u0418\u041D\u0421\u0422\u0420\u0423\u041C\u0415\u041D\u0422\u0410",faceCategory:"\u041C\u0430\u043A\u0438\u044F\u0436 \u043B\u0438\u0446\u0430",paintCategory:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435",blendCategory:"\u0421\u043C\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435 \u0438 \u043A\u043E\u0440\u0440\u0435\u043A\u0446\u0438\u044F",advancedCategory:"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E",interaction:"\u041A\u0410\u041C\u0415\u0420\u0410 \u0418 \u041F\u0420\u041E\u0418\u0417\u0412\u041E\u0414\u0418\u0422\u0415\u041B\u042C\u041D\u041E\u0421\u0422\u042C",cameraRotation:"\u0412\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u043A\u0430\u043C\u0435\u0440\u044B",cameraPan:"\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043A\u0430\u043C\u0435\u0440\u044B",rightMouse:"\u041F\u0440\u0430\u0432\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \u043C\u044B\u0448\u0438",middleMouse:"\u0421\u0440\u0435\u0434\u043D\u044F\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \u043C\u044B\u0448\u0438",spaceLeft:"\u041F\u0440\u043E\u0431\u0435\u043B + \u043B\u0435\u0432\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430",shiftRight:"Shift + \u043F\u0440\u0430\u0432\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430",disabled:"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E",rotateSensitivity:"\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F",zoomSensitivity:"\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0430",performance:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u044F",performanceFast:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",performanceBalanced:"\u0411\u0430\u043B\u0430\u043D\u0441",performanceQuality:"\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",cameraHint:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435: \u041B\u041A\u041C \xB7 \u0412\u0440\u0430\u0449\u0435\u043D\u0438\u0435: \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \xB7 \u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435: \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \xB7 \u041C\u0430\u0441\u0448\u0442\u0430\u0431: \u043A\u043E\u043B\u0435\u0441\u043E",resetControls:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043A\u0430\u043C\u0435\u0440\u044B",preview:"\u041F\u0420\u0415\u0414\u041F\u0420\u041E\u0421\u041C\u041E\u0422\u0420 \u041A\u0418\u0421\u0422\u0418",brushShape:"\u0424\u041E\u0420\u041C\u0410 \u041A\u0418\u0421\u0422\u0418",shapeDefault:"\u041A\u0430\u043A \u0443 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430",shapeSoft:"\u041C\u044F\u0433\u043A\u0438\u0439 \u043A\u0440\u0443\u0433\u043B\u044B\u0439",shapeHard:"\u0416\u0451\u0441\u0442\u043A\u0438\u0439 \u043A\u0440\u0443\u0433\u043B\u044B\u0439",shapeFlat:"\u041F\u043B\u043E\u0441\u043A\u0438\u0439",shapeAir:"\u0410\u044D\u0440\u043E\u0433\u0440\u0430\u0444",shapeSpeckle:"\u041A\u0440\u0430\u043F\u0438\u043D\u043A\u0430",shapePorous:"\u041F\u043E\u0440\u0438\u0441\u0442\u044B\u0439",shapeHair:"\u0422\u043E\u043D\u043A\u0438\u0435 \u0448\u0442\u0440\u0438\u0445\u0438",shapeStar:"\u0417\u0432\u0435\u0437\u0434\u0430",shapeRosette:"\u0420\u043E\u0437\u0435\u0442\u043A\u0430",lighting:"\u041E\u0421\u0412\u0415\u0429\u0415\u041D\u0418\u0415",lightingPreset:"\u041F\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0441\u0432\u0435\u0442\u0430",lightTemp:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0441\u0432\u0435\u0442\u0430",lightAzimuth:"\u0410\u0437\u0438\u043C\u0443\u0442 \u0441\u0432\u0435\u0442\u0430",lightElevation:"\u0412\u044B\u0441\u043E\u0442\u0430 \u0441\u0432\u0435\u0442\u0430",lightIntensity:"\u042F\u0440\u043A\u043E\u0441\u0442\u044C \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0433\u043E \u0441\u0432\u0435\u0442\u0430",lightHint:"\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043E\u0442\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u0442 \u043B\u0438\u0446\u0430 \u043C\u043E\u0434\u0435\u043B\u0438.",lightFill:"\u0417\u0430\u043F\u043E\u043B\u043D\u044F\u044E\u0449\u0438\u0439 \u0441\u0432\u0435\u0442",lightRim:"\u041A\u043E\u043D\u0442\u0440\u043E\u0432\u043E\u0439 \u0441\u0432\u0435\u0442",lightAmbient:"\u0424\u043E\u043D\u043E\u0432\u044B\u0439 \u0441\u0432\u0435\u0442",lpStudio:"\u0421\u0442\u0443\u0434\u0438\u0439\u043D\u044B\u0439 \u043F\u043E\u0440\u0442\u0440\u0435\u0442",lpVanity:"\u0417\u0435\u0440\u043A\u0430\u043B\u043E \u0433\u0440\u0438\u043C\u0451\u0440\u043A\u0438",lpOvercast:"\u041F\u0430\u0441\u043C\u0443\u0440\u043D\u044B\u0439 \u0434\u0435\u043D\u044C",lpSun:"\u041F\u0440\u044F\u043C\u043E\u0435 \u0441\u043E\u043B\u043D\u0446\u0435",lpGolden:"\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u0447\u0430\u0441",lpSunset:"\u0417\u0430\u043A\u0430\u0442",lpMoon:"\u041B\u0443\u043D\u043D\u044B\u0439 \u0441\u0432\u0435\u0442",lpBackstage:"\u0417\u0430\u043A\u0443\u043B\u0438\u0441\u043D\u044B\u0435 \u0441\u043E\u0444\u0438\u0442\u044B",lpCandle:"\u0421\u0432\u0435\u0442 \u0441\u0432\u0435\u0447\u0438",lpRing:"\u041A\u043E\u043B\u044C\u0446\u0435\u0432\u0430\u044F \u043B\u0430\u043C\u043F\u0430",lpCustom:"\u0421\u0432\u043E\u0451",appearance:"\u041E\u0424\u041E\u0420\u041C\u041B\u0415\u041D\u0418\u0415",accentColor:"\u0410\u043A\u0446\u0435\u043D\u0442\u043D\u044B\u0439 \u0446\u0432\u0435\u0442",accentReset:"\u0410\u043A\u0446\u0435\u043D\u0442 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",accentBrass:"\u041B\u0430\u0442\u0443\u043D\u044C",accentTeal:"\u0411\u0438\u0440\u044E\u0437\u0430",accentSky:"\u041D\u0435\u0431\u0435\u0441\u043D\u044B\u0439",accentViolet:"\u0421\u0438\u0440\u0435\u043D\u0435\u0432\u044B\u0439",accentRose:"\u0420\u043E\u0437\u043E\u0432\u044B\u0439",accentLime:"\u041B\u0430\u0439\u043C\u043E\u0432\u044B\u0439",accentAmber:"\u042F\u043D\u0442\u0430\u0440\u043D\u044B\u0439",accentCrimson:"\u0411\u0430\u0433\u0440\u043E\u0432\u044B\u0439"}},Pt=[{key:"brush",category:"paint",icon:"brush",radius:1,aspect:1,mask:"soft",alpha:.85},{key:"airbrush",category:"paint",icon:"airbrush",radius:1.65,aspect:1,mask:"air",alpha:.22},{key:"powder",category:"paint",icon:"powder",radius:1.25,aspect:1,mask:"powder",alpha:.2},{key:"sponge",category:"paint",icon:"sponge",radius:1.35,aspect:1,mask:"sponge",alpha:.38},{key:"foundation",category:"face",icon:"foundation",radius:1.8,aspect:1.05,mask:"foundation",alpha:.5},{key:"concealer",category:"face",icon:"concealer",radius:.7,aspect:1,mask:"concealer",alpha:.78},{key:"blush",category:"face",icon:"blush",radius:1.5,aspect:1,mask:"blush",alpha:.32},{key:"contour",category:"face",icon:"contour",radius:1.55,aspect:1.25,mask:"contour",alpha:.3},{key:"highlighter",category:"face",icon:"highlighter",radius:1.25,aspect:1.05,mask:"highlight",alpha:.5,finish:"glow"},{key:"eyeshadow",category:"face",icon:"eyeshadow",radius:1.2,aspect:1.15,mask:"shadow",alpha:.42},{key:"eyeliner",category:"face",icon:"eyeliner",radius:.34,aspect:1.45,mask:"liner",alpha:1},{key:"pencil",category:"paint",icon:"pencil",radius:.24,aspect:1.15,mask:"hard",alpha:1},{key:"lipstick",category:"face",icon:"lipstick",radius:.72,aspect:1.15,mask:"lipstick",alpha:.88},{key:"lipgloss",category:"face",icon:"lipgloss",radius:.9,aspect:1.1,mask:"gloss",alpha:.5,finish:"gloss"},{key:"mascara",category:"face",icon:"mascara",radius:.26,aspect:1.45,mask:"hair",alpha:.82},{key:"eyebrow",category:"face",icon:"eyebrow",radius:.3,aspect:1.5,mask:"hair",alpha:.78},{key:"blur",category:"blend",icon:"blur",radius:1.5,aspect:1,mask:"blur",alpha:.14},{key:"blender",category:"blend",icon:"blender",radius:1.2,aspect:1.05,mask:"blend",alpha:.16},{key:"eraser",category:"blend",icon:"eraser",radius:1.1,aspect:1,mask:"soft",alpha:1,action:!0},{key:"stencil",category:"advanced",icon:"stencil",radius:1,aspect:1,mask:"star",alpha:.9},{key:"stamp",category:"advanced",icon:"stamp",radius:.9,aspect:1,mask:"rosette",alpha:.9},{key:"symmetry",category:"advanced",icon:"symmetry",radius:1,aspect:1,mask:"soft",alpha:1,action:!0},{key:"eyedropper",category:"advanced",icon:"eyedropper",radius:1,aspect:1,mask:"soft",alpha:1,action:!0}],ly={brush:'<path d="M20 4l-8.6 8.6"/><path d="M13.4 6.4l4.2 4.2"/><path d="M5.6 20.4c2.4.6 4.5-.4 5.2-2.5l1.2-3.5-3.4-3.4-3.5 1.2c-2.1.7-3.1 2.8-2.5 5.2.2 1.5 1.5 2.7 3 3z"/>',airbrush:'<rect x="9" y="9" width="6" height="12" rx="1.5"/><path d="M10.5 9V6.5h3V9"/><path d="M12 3v1.8"/><path d="M7.5 4.5l.9 1.1M16.5 4.5l-.9 1.1M6.5 8h1.6"/>',powder:'<circle cx="7.5" cy="9.5" r="1.3"/><circle cx="12.5" cy="7.5" r="1.1"/><circle cx="16.5" cy="10.5" r="1.4"/><circle cx="9.5" cy="14.5" r="1.5"/><circle cx="14.5" cy="15" r="1.2"/><circle cx="11.5" cy="18.5" r="1"/>',sponge:'<rect x="4.5" y="7" width="15" height="12" rx="2.5"/><circle cx="9" cy="11" r=".9"/><circle cx="13" cy="13.5" r=".8"/><circle cx="15" cy="10" r=".9"/>',foundation:'<rect x="8.5" y="10" width="7" height="10.5" rx="1.5"/><path d="M12 10V7"/><path d="M10 7h4l-.8-3h-2.4z"/>',concealer:'<circle cx="12" cy="13" r="6.5"/><circle cx="12" cy="13" r="2.2" fill="currentColor" stroke="none"/>',blush:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3.4"/>',contour:'<path d="M5.5 18.5c5 1 9.5-.8 12.4-5 1.4-2 1.9-4.4 1.6-7"/><path d="M8.5 16.5c3.8.4 7-1.4 8.9-4.6"/>',highlighter:'<path d="M12 3.5l1.9 5.6 5.6 1.9-5.6 1.9L12 18.5l-1.9-5.6-5.6-1.9 5.6-1.9z"/><path d="M18.5 17.5v3M17 19h3"/>',eyeshadow:'<path d="M2.8 12S6.2 6.8 12 6.8 21.2 12 21.2 12 18 17.2 12 17.2 2.8 12 2.8 12z"/><circle cx="12" cy="12" r="2.6"/>',eyeliner:'<path d="M3 14.5c3-5.5 6-5.5 9 0s6 5.5 9 0"/>',pencil:'<path d="M4.5 19.5l1-3.8L16.6 4.6a2 2 0 0 1 2.8 2.8L8.3 18.5z"/><path d="M14.6 6.6l2.8 2.8"/>',lipstick:'<path d="M10.5 10.5V6l3.2-2.2v6.7"/><rect x="9" y="10.5" width="6" height="3.5" rx="1"/><path d="M8 14h8v5.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"/>',lipgloss:'<path d="M12 4.5c2.2 2.6 4 4.9 4 7.2a4 4 0 1 1-8 0c0-2.3 1.8-4.6 4-7.2z"/><path d="M10 13.5c0 1 .8 1.9 1.8 2"/>',mascara:'<rect x="9.5" y="10" width="5" height="10.5" rx="1.5"/><path d="M12 10V7.5"/><path d="M10 4.8h4M12 3v4.5"/>',eyebrow:'<path d="M4 10.5c3-4.5 8.5-5.5 14-3.5"/><path d="M7 11.5l-1 2.2M11 9.8l-.5 2.4M15 9.2l.4 2.4M18 9.5l.8 2"/>',blur:'<circle cx="12" cy="12" r="7" stroke-dasharray="1.6 2.6"/><circle cx="12" cy="12" r="3"/>',blender:'<circle cx="9.4" cy="12" r="5.2"/><circle cx="14.6" cy="12" r="5.2"/>',eraser:'<path d="M15.6 4.6l4 4L11.2 17H7.4L5 14.6z"/><path d="M9.6 8.6l6 6"/><path d="M8 21h10"/>',stencil:'<path d="M12 3.5l2.5 5 5.5.8-4 3.9 1 5.5-5-2.7-5 2.7 1-5.5-4-3.9 5.5-.8z"/>',stamp:'<circle cx="12" cy="12" r="2.6"/><path d="M12 3.5v3.2M12 17.3v3.2M3.5 12h3.2M17.3 12h3.2M6 6l2.3 2.3M15.7 15.7L18 18M18 6l-2.3 2.3M8.3 15.7L6 18"/>',symmetry:'<path d="M12 3v18"/><path d="M8.5 7.5L4.5 12l4 4.5z" fill="currentColor" stroke="none"/><path d="M15.5 7.5l4 4.5-4 4.5z"/>',eyedropper:'<path d="M13.6 7.9l2.5 2.5L8 18.5l-3.7.7.7-3.7z"/><path d="M13.6 7.9l1.8-1.8a1.9 1.9 0 0 1 2.7 0l.4.4a1.9 1.9 0 0 1 0 2.7l-1.9 1.8"/>'};function Af(n,e=18){return`<svg viewBox="0 0 24 24" width="${e}" height="${e}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ly[n]||""}</svg>`}var cy=["#f7e0d0","#efc9b0","#e6b898","#d9a184","#c98f6d","#b87a5a","#a06246","#8a4f36","#6f3b28","#f2b6a0","#e8927c","#d96f63","#c25456","#f4c1ae","#e78f8a","#b46a6a","#a34e54","#c2185b","#8e2f47","#6d1f33","#d9556f","#e87c8f","#5c2e3c","#e8d5c0","#d4b48c","#b99770","#96714f","#6f4a30","#4c3326","#3b4a6b","#22333f","#2e5d4b","#543a6b","#7b3fa0","#ffffff","#19151c","#d32f2f","#e64a19","#fbc02d","#388e3c","#1976d2","#7b1fa2"],pr=Object.freeze([Object.freeze({key:"natural",name:"Natural",value:"#ffffff"}),Object.freeze({key:"porcelain",name:"Porcelain",value:"#ffe9db"}),Object.freeze({key:"fair",name:"Fair",value:"#f8d9c4"}),Object.freeze({key:"light",name:"Light",value:"#f0c8ab"}),Object.freeze({key:"medium",name:"Medium",value:"#dba882"}),Object.freeze({key:"tan",name:"Tan",value:"#c08b60"}),Object.freeze({key:"deep",name:"Deep",value:"#9c6a45"}),Object.freeze({key:"rich",name:"Rich",value:"#784a2c"})]),Ji="natural";function Lh(){if(!Dn)return;let n=pr.find(e=>e.key===Ji)||pr[0];Dn.traverse(e=>{if(!e.isMesh)return;let t=Array.isArray(e.material)?e.material:[e.material];for(let i of t)i?.color?.isColor&&i.color.set(n.value)})}var Dh=Object.freeze([Object.freeze({key:"studio",temp:5500,az:25,el:45,intensity:1,fill:.45,rim:.55,ambient:.5}),Object.freeze({key:"vanity",temp:4700,az:0,el:22,intensity:1.05,fill:.9,rim:.3,ambient:.8}),Object.freeze({key:"overcast",temp:6500,az:10,el:70,intensity:.9,fill:.95,rim:.4,ambient:1.1}),Object.freeze({key:"sun",temp:5300,az:40,el:55,intensity:1.15,fill:.25,rim:.5,ambient:.35}),Object.freeze({key:"golden",temp:3400,az:310,el:12,intensity:1,fill:.35,rim:.8,ambient:.35}),Object.freeze({key:"sunset",temp:2700,az:325,el:8,intensity:.95,fill:.3,rim:.95,ambient:.3}),Object.freeze({key:"moon",temp:8600,az:15,el:40,intensity:.5,fill:.2,rim:.45,ambient:.25}),Object.freeze({key:"backstage",temp:4e3,az:335,el:60,intensity:1.25,fill:1.1,rim:.8,ambient:.9}),Object.freeze({key:"candle",temp:1900,az:290,el:18,intensity:.8,fill:.12,rim:.2,ambient:.15}),Object.freeze({key:"ring",temp:5200,az:0,el:12,intensity:1.05,fill:1.05,rim:.35,ambient:.85})]),Re={preset:"studio",temp:5500,az:25,el:45,intensity:1,fill:.45,rim:.55,ambient:.5},Tn=null,Yi=!1;function Rf(){if(Tn||!An)return;Tn=new bn;let n=new Ct(new er(.11,20,14),new xi({color:16767392,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1,toneMapped:!1}));n.renderOrder=900;let e=new Ct(new er(.19,20,14),new xi({color:16763e3,transparent:!0,opacity:.28,depthTest:!1,depthWrite:!1,toneMapped:!1}));e.renderOrder=899;let t=new Ks(new Rt().setFromPoints([new F(0,0,0),new F(0,0,1)]),new Qn({color:16767392,transparent:!0,opacity:.4,depthTest:!1,depthWrite:!1,toneMapped:!1}));t.renderOrder=898,Tn.add(n),Tn.add(e),Tn.add(t),Tn.userData={line:t},Tn.visible=Yi,An.add(Tn),Cf()}function Cf(){if(!Tn)return;let n=Cl(Re.az,Re.el);Tn.position.set(0,0,0),Tn.quaternion.setFromUnitVectors(new F(0,0,1),n.clone().normalize()),Tn.userData.line.scale.set(1,1,n.length()*.93),nt()}function hy(){Yi=!Yi,Rf(),Tn.visible=Yi,D("#toggleLightGizmo")?.setAttribute("aria-pressed",String(Yi)),Gt(),nt()}function uh(n){let e=Ne(n,1e3,4e4)/100,t,i,s;return e<=66?(t=255,i=99.4708025861*Math.log(e)-161.1195681661):(t=329.698727446*Math.pow(e-60,-.1332047592),i=288.1221695283*Math.pow(e-60,-.0755148492)),e>=66?s=255:e<=19?s=0:s=138.5177312231*Math.log(e-10)-305.0447927307,new Pe().setRGB(Ne(t,0,255)/255,Ne(i,0,255)/255,Ne(s,0,255)/255).convertSRGBToLinear()}function Cl(n,e){let t=lr.degToRad(n),i=lr.degToRad(e);return new F(Math.sin(t)*Math.cos(i),Math.sin(i),Math.cos(t)*Math.cos(i)).multiplyScalar(6)}function Pf(){if(!fr)return;let n=uh(Re.temp);fr.color.copy(n),fr.intensity=3*Re.intensity,fr.position.copy(Cl(Re.az,Re.el)),fa.color.copy(uh(lr.lerp(Re.temp,6800,.55))),fa.intensity=1.15*Re.fill,fa.position.copy(Cl(Re.az+150,Math.max(14,Re.el*.5))),pa.color.copy(uh(Ne(Re.temp+900,1200,12e3))),pa.intensity=1.5*Re.rim,pa.position.copy(Cl(Re.az+180,Math.min(80,Re.el+18))),Yf.intensity=1.7*Re.ambient,Cf(),nt()}function bi(n,{fromPreset:e=!1}={}){Re.temp=Ne(Math.round(n.temp??Re.temp),1500,9500),Re.az=Ne(Math.round(n.az??Re.az),0,360)%360,Re.el=Ne(Math.round(n.el??Re.el),3,85),Re.intensity=Ne(Math.round((n.intensity??Re.intensity)*100)/100,.1,2),Re.fill=Ne(Math.round((n.fill??Re.fill)*100)/100,0,2),Re.rim=Ne(Math.round((n.rim??Re.rim)*100)/100,0,2),Re.ambient=Ne(Math.round((n.ambient??Re.ambient)*100)/100,0,1.5),Re.preset=e?n.preset:Dh.find(t=>t.key===Re.preset&&t.temp===Re.temp&&t.az===Re.az&&t.el===Re.el&&Math.abs(t.intensity-Re.intensity)<.011&&Math.abs(t.fill-Re.fill)<.011&&Math.abs(t.rim-Re.rim)<.011&&Math.abs(t.ambient-Re.ambient)<.011)?.key||"custom",Oh(),Pf(),Gt(),un()}function uy(n){let e=Dh.find(t=>t.key===n);e&&bi({preset:n,temp:e.temp,az:e.az,el:e.el,intensity:e.intensity,fill:e.fill,rim:e.rim,ambient:e.ambient},{fromPreset:!0})}var Nh=Object.freeze([Object.freeze({key:"default"}),Object.freeze({key:"soft",mask:"soft",aspect:1}),Object.freeze({key:"hard",mask:"hard",aspect:1}),Object.freeze({key:"flat",mask:"soft",aspect:1.3}),Object.freeze({key:"air",mask:"air",aspect:1}),Object.freeze({key:"speckle",mask:"powder",aspect:1}),Object.freeze({key:"porous",mask:"sponge",aspect:1}),Object.freeze({key:"hair",mask:"hair",aspect:1.35}),Object.freeze({key:"star",mask:"star",aspect:1}),Object.freeze({key:"rosette",mask:"rosette",aspect:1})]),Yn=null;function If(){return Yn&&Yn!=="default"&&Nh.find(n=>n.key===Yn)||null}function Lf(n){return If()?.aspect||n.aspect||1}var gn="en",Es="system",_n="right",vn="middle",Ai=.008,Ki=.004,ya="performance",$i="low",va=!0,Ma=!0,rn=0,Df=0,Ut=!1,wi="#c72f58",ai=24,Il=1,Ti=.72,Ll=.75,An,Nt,Ht,ua,ft,Un,ji,Dn=null,ga=[],$n=[],qi=null,Kt=!1,we=[],Qe=0,mr=1,Ie=null,nn=null,Qi=!1,Dl=!1,Nl=!1,Jt="idle",bs=null,Ln=null,Sa=!1,Vt=[],da=!1,wt=new F(0,0,0),Nn=4.4,Eh=null,dh=!1,cf=null,wh="all",Nf=1,fh=new Map,ut={raycastMs:0,raycasts:0,decalMs:0,decals:0,pointerMs:0,pointerSamples:0,renderFrames:0,lastFpsAt:performance.now(),lastFrameCount:0},Rl=null,Th=new F(0,0,1),la=new F,ph=new pn,hf=new pn,mh=new at,uf=new at,df=new ze,ff=new ze,dy=new Float64Array(96),fy=new Float64Array(96),py=new F,my=new F,pf=new pn,mf=new pn;function Le(n){return Zi[gn]?.[n]??Zi.en[n]??n}function es(n){return Zi[gn].toolNames[n]||Zi.en.toolNames[n]}function Uf(n){return Zi[gn].toolTips[n]||Zi.en.toolTips[n]}function Gt(){try{localStorage.setItem("grimstudio-settings",JSON.stringify({language:gn,themePreference:Es,symmetryEnabled:Ut,cameraRotateButton:_n,cameraPanButton:vn,rotationSensitivity:Ai,zoomSensitivity:Ki,performanceMode:ya,graphicsQuality:$i,adaptivePerformance:va,memoryOptimization:Ma,skinTone:Ji,lighting:Re,brushShape:Yn,accentColor:li,lightGizmoVisible:Yi}))}catch{}}function gy(){try{let n=JSON.parse(localStorage.getItem("grimstudio-settings")||"{}");(n.language==="ru"||n.language==="en")&&(gn=n.language),["system","dark","light"].includes(n.themePreference)&&(Es=n.themePreference),Ut=n.symmetryEnabled===!0,["right","middle","space-left"].includes(n.cameraRotateButton)&&(_n=n.cameraRotateButton),["middle","shift-right","disabled"].includes(n.cameraPanButton)&&(vn=n.cameraPanButton),Number.isFinite(n.rotationSensitivity)&&(Ai=Ne(n.rotationSensitivity,.002,.02)),Number.isFinite(n.zoomSensitivity)&&(Ki=Ne(n.zoomSensitivity,.001,.012)),["performance","balanced","quality"].includes(n.performanceMode)&&(ya=n.performanceMode),["low","balanced","high"].includes(n.graphicsQuality)&&($i=n.graphicsQuality),typeof n.adaptivePerformance=="boolean"&&(va=n.adaptivePerformance),typeof n.memoryOptimization=="boolean"&&(Ma=n.memoryOptimization),pr.some(e=>e.key===n.skinTone)&&(Ji=n.skinTone),n.lighting&&typeof n.lighting=="object"&&(Re.temp=Ne(Math.round(Number(n.lighting.temp)||5500),1500,9500),Re.az=Ne(Math.round(Number(n.lighting.az)||25),0,360)%360,Re.el=Ne(Math.round(Number(n.lighting.el)||45),3,85),Re.intensity=Ne(Number(n.lighting.intensity)||1,.1,2),Re.fill=Ne(Number(n.lighting.fill??1),0,2),Re.rim=Ne(Number(n.lighting.rim??1),0,2),Re.ambient=Ne(Number(n.lighting.ambient??1),0,1.5),Re.preset=n.lighting.preset||"custom"),typeof n.brushShape=="string"&&(Yn=n.brushShape),typeof n.accentColor=="string"&&/^#[0-9a-f]{6}$/i.test(n.accentColor)&&(li=n.accentColor.toLowerCase()),typeof n.lightGizmoVisible=="boolean"&&(Yi=n.lightGizmoVisible)}catch{}}function Ul(){let n=window.matchMedia?.("(prefers-color-scheme: dark)").matches??!0,e=Es==="system"?n?"dark":"light":Es;document.documentElement.dataset.theme=e,document.documentElement.style.colorScheme=e,An&&(An.background=new Pe(e==="dark"?"#1b1820":"#dedbe5"))}var _y=Object.freeze([Object.freeze({key:"brass",value:"#c9a86a"}),Object.freeze({key:"teal",value:"#5fb8a5"}),Object.freeze({key:"sky",value:"#6c8cff"}),Object.freeze({key:"violet",value:"#a58aff"}),Object.freeze({key:"rose",value:"#e08a9b"}),Object.freeze({key:"lime",value:"#8fbf6a"}),Object.freeze({key:"amber",value:"#e0a13f"}),Object.freeze({key:"crimson",value:"#e06a6a"})]),li="";function Ff(){let n=document.documentElement.style;if(!/^#[0-9a-f]{6}$/i.test(li||"")){for(let o of["--accent","--accent-strong","--accent-soft","--accent-line","--accent-contrast"])n.removeProperty(o);return}let e=li.toLowerCase(),t=parseInt(e.slice(1,3),16),i=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16),r=(.2126*t+.7152*i+.0722*s)/255,a=o=>r>.6?Math.round(o*.72):Math.round(o+(255-o)*.28);n.setProperty("--accent",e),n.setProperty("--accent-strong",`rgb(${a(t)},${a(i)},${a(s)})`),n.setProperty("--accent-soft",`rgba(${t},${i},${s},.13)`),n.setProperty("--accent-line",`rgba(${t},${i},${s},.45)`),n.setProperty("--accent-contrast",r>.62?"#181510":"#ffffff")}function Uh(n){li=/^#[0-9a-f]{6}$/i.test(n||"")?n.toLowerCase():"",Ff(),Fh(),Gt()}function Of(){let n=D("#accentPresets");if(n){n.replaceChildren();for(let e of _y){let t=Le(`accent${e.key[0].toUpperCase()}${e.key.slice(1)}`),i=document.createElement("button");i.type="button",i.className="accent-swatch",i.style.background=e.value,i.title=t,i.setAttribute("aria-label",`${Le("accentColor")}: ${t}`),i.dataset.accent=e.value,li&&li.toLowerCase()===e.value&&i.classList.add("active"),n.appendChild(i)}}}function Fh(){let n=D("#accentColor");n&&(n.value=li||"#c9a86a"),D("#accentPresets")?.querySelectorAll("button[data-accent]").forEach(e=>e.classList.toggle("active",!!li&&e.dataset.accent===li))}D("#accentPresets")?.addEventListener("click",n=>{let e=n.target.closest("button[data-accent]");e&&Uh(e.dataset.accent)});D("#accentColor")?.addEventListener("input",n=>Uh(n.target.value));D("#accentReset")?.addEventListener("click",()=>Uh(""));function Bf(){document.documentElement.lang=gn,document.querySelectorAll("[data-i18n]").forEach(n=>{let e=n.dataset.i18n;Zi[gn][e]&&(n.textContent=Zi[gn][e])});for(let n of D("#themeSelect").options)n.textContent=Le(n.value);gr(),sn(),D("#toolSettingsLabel").textContent=`${es(rn).toUpperCase()} ${Le("brushSettings")}`,zf(),Oh(),Bl(),Of(),Fh()}window.matchMedia?.("(prefers-color-scheme: dark)").addEventListener?.("change",()=>{Es==="system"&&Ul()});gy();_n==="middle"&&vn==="middle"&&(vn="disabled");D("#languageSelect").value=gn;D("#themeSelect").value=Es;D("#languageSelect").addEventListener("change",n=>{gn=n.target.value==="ru"?"ru":"en",Gt(),Bf()});D("#themeSelect").addEventListener("change",n=>{Es=["system","dark","light"].includes(n.target.value)?n.target.value:"system",Ul(),Gt()});D("#symmetryToggle").checked=Ut;D("#symmetryToggle").addEventListener("change",n=>{Ut=n.target.checked,Gt(),yt(Le(Ut?"symmetryOn":"symmetryOff"))});D("#cameraRotateSelect").value=_n;D("#cameraPanSelect").value=vn;D("#rotationSensitivity").value=String(Math.round(Ai*1e3));D("#zoomSensitivity").value=String(Math.round(Ki*1e3));D("#performanceMode").value=ya;D("#graphicsQuality").value=$i;D("#adaptivePerformance").checked=va;D("#memoryOptimization").checked=Ma;D("#cameraRotateSelect").addEventListener("change",n=>{_n=["right","middle","space-left"].includes(n.target.value)?n.target.value:"right",_n==="middle"&&vn==="middle"&&(vn="disabled"),D("#cameraPanSelect").value=vn,Gt(),is()});D("#cameraPanSelect").addEventListener("change",n=>{let e=["middle","shift-right","disabled"].includes(n.target.value)?n.target.value:"middle";_n==="middle"&&e==="middle"?(vn="disabled",D("#cameraPanSelect").value="disabled"):vn=e,Gt(),is()});D("#rotationSensitivity").addEventListener("input",n=>{Ai=Ne(Number(n.target.value)/1e3,.002,.02),D("#rotationSensitivityValue").textContent=`${Math.round(Ai*1e3)}\u2030`,Gt()});D("#zoomSensitivity").addEventListener("input",n=>{Ki=Ne(Number(n.target.value)/1e3,.001,.012),D("#zoomSensitivityValue").textContent=`${Math.round(Ki*1e3)}\u2030`,Gt()});D("#performanceMode").addEventListener("change",n=>{ya=["performance","balanced","quality"].includes(n.target.value)?n.target.value:"balanced",Gt()});function xy(n){$i=["low","balanced","high"].includes(n)?n:"low",Xi=1;let e={low:.72,balanced:.9,high:1.15}[$i];Ht?.setPixelRatio(Math.min((window.devicePixelRatio||1)*e,$i==="high"?1.5:1)),zl(),Gt()}function yy(n){!va||$i==="low"||!Ht||(n>42?(ur++,oa=0):n<24?(oa++,ur=0):(ur=Math.max(0,ur-1),oa=0),ur>=8&&Xi>.65?(Xi=Math.max(.65,Xi-.1),Ht.setPixelRatio(Math.max(.5,Ht.getPixelRatio()-.1)),ur=0):oa>=40&&Xi<1&&(Xi=Math.min(1,Xi+.05),Ht.setPixelRatio(Math.min((window.devicePixelRatio||1)*({balanced:.9,high:1.15}[$i]||.9)*Xi,1.5)),oa=0))}D("#resetCameraControls").addEventListener("click",()=>{_n="right",vn="middle",Ai=.008,Ki=.004,D("#cameraRotateSelect").value=_n,D("#cameraPanSelect").value=vn,D("#rotationSensitivity").value="8",D("#zoomSensitivity").value="4",D("#rotationSensitivityValue").textContent="8\u2030",D("#zoomSensitivityValue").textContent="4\u2030",Gt(),is()});D("#rotationSensitivityValue").textContent=`${Math.round(Ai*1e3)}\u2030`;D("#zoomSensitivityValue").textContent=`${Math.round(Ki*1e3)}\u2030`;D("#performanceDiagnosticsToggle")?.addEventListener("click",iv);function Fl(){let n=D("#settingsDialog");n&&(n.hidden=!n.hidden,D("#settingsToggle")?.setAttribute("aria-pressed",String(!n.hidden)))}D("#settingsToggle")?.addEventListener("click",Fl);D("#settingsClose")?.addEventListener("click",Fl);D("#settingsDialog")?.addEventListener("click",n=>{n.target===n.currentTarget&&Fl()});Ul();var Ah=D("#toolGrid");function gr(){Ah.replaceChildren(),Pt.forEach((n,e)=>{if(wh!=="all"&&n.category!==wh)return;let t=document.createElement("button");t.type="button",t.className=`tool-button${e===rn?" active":""}${n.key==="symmetry"&&Ut?" toggled":""}`,t.dataset.toolIndex=String(e),t.title=Uf(e),t.setAttribute("aria-label",es(e)),t.setAttribute("aria-pressed",String(e===rn||n.key==="symmetry"&&Ut)),t.innerHTML=`<span class="tool-icon">${Af(n.icon,18)}</span><span class="tool-name">${es(e)}</span>`,Ah.appendChild(t)}),D("#toolCount").textContent=String(Pt.length),vy()}function vy(){D("#toolTip").innerHTML=`<strong>${es(rn)}</strong><p>${Uf(rn)}</p>`}function _a(n){if(!Number.isInteger(n)||n<0||n>=Pt.length)return;let e=Pt[n];if(e.key==="symmetry"){Ut=!Ut,D("#symmetryToggle").checked=Ut,Gt(),gr(),yt(Le(Ut?"symmetryOn":"symmetryOff"));return}rn=n,e.action||(Df=n),gr(),D("#toolSettingsLabel").textContent=`${es(n).toUpperCase()} ${Le("brushSettings")}`,D("#status").textContent=`${Le("toolStatus")}: ${es(n)}`,D("#stage").dataset.activeTool=e.key,ns(),nt()}D("#toolGrid").addEventListener("click",n=>{let e=n.target.closest("button[data-tool-index]");e&&Ah.contains(e)&&_a(Number(e.dataset.toolIndex))});D("#toolFilters").addEventListener("click",n=>{let e=n.target.closest("button[data-category]");e&&(wh=e.dataset.category,D("#toolFilters").querySelectorAll("button").forEach(t=>t.classList.toggle("active",t===e)),gr())});function yt(n){let e=D("#toast");e.textContent=n,e.classList.add("show"),clearTimeout(cf),cf=setTimeout(()=>e.classList.remove("show"),2400)}function My(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Ol(n){/^#[0-9a-f]{6}$/i.test(n)&&(wi=n.toLowerCase(),D("#colorPicker").value=wi,D("#colorHex").textContent=wi.toUpperCase(),un())}D("#colorPicker").addEventListener("input",n=>Ol(n.target.value));cy.forEach(n=>{let e=document.createElement("button");e.type="button",e.className="swatch",e.style.backgroundColor=n,e.title=n,e.setAttribute("aria-label",`Select ${n}`),e.addEventListener("click",()=>Ol(n)),D("#swatches").appendChild(e)});D("#size").addEventListener("input",n=>{ai=Number(n.target.value),D("#sizeReadout").textContent=`${ai} px`});D("#opacity").addEventListener("input",n=>{Il=Number(n.target.value)/100,D("#opacityReadout").textContent=`${n.target.value}%`});D("#softness").addEventListener("input",n=>{Ti=Number(n.target.value)/100,D("#softReadout").textContent=`${n.target.value}%`});D("#flow").addEventListener("input",n=>{Ll=Number(n.target.value)/100,D("#flowReadout").textContent=`${n.target.value}%`});D("#addLayer").addEventListener("click",()=>Hf());D("#duplicateLayer").addEventListener("click",()=>Dy());D("#clearLayer").addEventListener("click",()=>Fy());D("#layerUp").addEventListener("click",()=>qf(1));D("#layerDown").addEventListener("click",()=>qf(-1));D("#renameLayer").addEventListener("click",()=>Ny());D("#deleteLayer").addEventListener("click",()=>Uy());D("#layerOpacity").addEventListener("input",n=>{let e=we[Qe];e&&(e.opacity=Number(n.target.value)/100,D("#layerOpacityReadout").textContent=`${n.target.value}%`,e.group.children.forEach(t=>{t.material&&(t.material.opacity=(t.userData.baseOpacity??1)*e.opacity)}),un(),nt())});D("#projectName").addEventListener("input",un);D("#newBtn").addEventListener("click",ov);D("#openBtn").addEventListener("click",cp);D("#saveBtn").addEventListener("click",op);D("#exportBtn").addEventListener("click",up);D("#undoBtn").addEventListener("click",Wf);D("#redoBtn").addEventListener("click",Xf);D("#frontBtn").addEventListener("click",()=>oi(0,Math.PI,4.4));D("#leftBtn").addEventListener("click",()=>oi(0,Math.PI/2,4.4));D("#rightBtn").addEventListener("click",()=>oi(0,Math.PI*1.5,4.4));D("#backBtn").addEventListener("click",()=>oi(0,0,4.4));D("#toggleGrid").addEventListener("click",()=>ji.classList.toggle("grid-on"));D("#fullscreenBtn").addEventListener("click",()=>ji.requestFullscreen?.());D("#retryModel").addEventListener("click",()=>kl(!0));D("#headModelSelect").addEventListener("change",n=>Wy(n.target.value));var gh=D("#skinTones");gh&&pr.forEach(n=>{let e=document.createElement("button");e.type="button",e.className=`skin-tone${n.key===Ji?" active":""}`,e.title=n.name,e.setAttribute("aria-label",`Skin tone: ${n.name}`),e.style.background=n.key==="natural"?"linear-gradient(135deg,#f3c9ad,#e5a883)":n.value,e.addEventListener("click",()=>{Ji=n.key,Lh(),Gt(),un(),nt(),gh.querySelectorAll("button").forEach(t=>t.classList.toggle("active",t===e))}),gh.appendChild(e)});D("#graphicsQuality").addEventListener("change",n=>xy(n.target.value));D("#adaptivePerformance").addEventListener("change",n=>{va=n.target.checked,Gt()});D("#memoryOptimization").addEventListener("change",n=>{Ma=n.target.checked,Gt()});function zf(){let n=D("#lightingPreset");if(!n)return;n.replaceChildren();for(let t of Dh){let i=document.createElement("option");i.value=t.key,i.textContent=Le(`lp${t.key[0].toUpperCase()}${t.key.slice(1)}`),n.appendChild(i)}let e=document.createElement("option");e.value="custom",e.textContent=Le("lpCustom"),n.appendChild(e)}function Oh(){D("#lightTemp").value=String(Re.temp),D("#lightTempReadout").textContent=`${Re.temp} K`,D("#lightAzimuth").value=String(Re.az),D("#lightAzimuthReadout").textContent=`${Re.az}\xB0`,D("#lightElevation").value=String(Re.el),D("#lightElevationReadout").textContent=`${Re.el}\xB0`,D("#lightIntensity").value=String(Math.round(Re.intensity*100)),D("#lightIntensityReadout").textContent=`${Math.round(Re.intensity*100)}%`,D("#lightFill").value=String(Math.round(Re.fill*100)),D("#lightFillReadout").textContent=`${Math.round(Re.fill*100)}%`,D("#lightRim").value=String(Math.round(Re.rim*100)),D("#lightRimReadout").textContent=`${Math.round(Re.rim*100)}%`,D("#lightAmbient").value=String(Math.round(Re.ambient*100)),D("#lightAmbientReadout").textContent=`${Math.round(Re.ambient*100)}%`,D("#lightingPreset").value=Re.preset,D("#toggleLightGizmo")?.setAttribute("aria-pressed",String(Yi))}function Sy(){zf(),D("#lightingPreset").addEventListener("change",n=>uy(n.target.value)),D("#lightTemp").addEventListener("input",n=>bi({temp:Number(n.target.value)})),D("#lightAzimuth").addEventListener("input",n=>bi({az:Number(n.target.value)})),D("#lightElevation").addEventListener("input",n=>bi({el:Number(n.target.value)})),D("#lightIntensity").addEventListener("input",n=>bi({intensity:Number(n.target.value)/100})),D("#lightFill").addEventListener("input",n=>bi({fill:Number(n.target.value)/100})),D("#lightRim").addEventListener("input",n=>bi({rim:Number(n.target.value)/100})),D("#lightAmbient").addEventListener("input",n=>bi({ambient:Number(n.target.value)/100}))}function Bl(){let n=D("#brushShapeGrid");if(n){n.replaceChildren();for(let e of Nh){let t=document.createElement("button");t.type="button",t.className=`shape-button${Yn===e.key||e.key==="default"&&!Yn?" active":""}`,t.dataset.shapeKey=e.key,t.textContent=Le(`shape${e.key[0].toUpperCase()}${e.key.slice(1)}`),t.title=Le(`shape${e.key[0].toUpperCase()}${e.key.slice(1)}`),n.appendChild(t)}}}D("#brushShapeGrid")?.addEventListener("click",n=>{let e=n.target.closest("button[data-shape-key]");e&&(Yn=e.dataset.shapeKey==="default"?null:e.dataset.shapeKey,Gt(),Bl(),ns(),yt(`${Le("brushShape")}: ${e.textContent}`))});function ns(){let n=D("#brushPreview"),e=D("#brushPreviewIcon");if(!n||!e)return;let t=Pt[rn];if(t.action&&t.key!=="eraser"){n.hidden=!0,e.hidden=!1,e.innerHTML=Af(t.icon,40);return}n.hidden=!1,e.hidden=!0;let i=n.width,s=n.getContext("2d");s.clearRect(0,0,i,i);let r=kh(t.key,t.key==="eraser"?.5:Ti).image;s.drawImage(r,0,0,i,i),s.globalCompositeOperation="source-in",s.fillStyle=t.key==="eraser"?"#e5725f":wi,s.fillRect(0,0,i,i),s.globalCompositeOperation="source-over",s.strokeStyle="rgba(128,128,128,.55)",s.setLineDash([3,3]),s.lineWidth=1,s.beginPath(),s.arc(i/2,i/2,i/2-1,0,Math.PI*2),s.stroke(),s.setLineDash([])}D("#size")?.addEventListener("input",ns);D("#softness")?.addEventListener("input",ns);D("#opacity")?.addEventListener("input",ns);D("#colorPicker")?.addEventListener("input",ns);var Ge={stamp:null,ring:null,mirror:null,stampMaterial:null,ringMaterial:null,last:null,lastRadius:-1,signature:""},Wi=null;function by(){if(Wi)return Wi;let n=128,e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.78,"rgba(255,255,255,0)"),i.addColorStop(.88,"rgba(255,255,255,1)"),i.addColorStop(.96,"rgba(255,255,255,.25)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,n,n),Wi=new zi(e),Wi.colorSpace=dt,Wi.generateMipmaps=!1,Wi.minFilter=At,Wi.magFilter=At,Wi}function Ey(){if(!Ge.stamp){Ge.ringMaterial=new xi({map:by(),color:1711136,transparent:!0,opacity:.85,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-3,side:tn,toneMapped:!1}),Ge.stampMaterial=new xi({transparent:!0,opacity:.55,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-4,side:tn,toneMapped:!1}),Ge.ring=new Ct(new Rt,Ge.ringMaterial),Ge.stamp=new Ct(new Rt,Ge.stampMaterial),Ge.mirror=new Ct(new Rt,Ge.ringMaterial);for(let n of[Ge.ring,Ge.stamp,Ge.mirror])n.frustumCulled=!1,n.visible=!1;Ge.ring.renderOrder=999997,Ge.stamp.renderOrder=999998,Ge.mirror.renderOrder=999999,ft.add(Ge.ring),ft.add(Ge.stamp),ft.add(Ge.mirror)}}function wy(){let n=Pt[rn];return`${rn}|${Yn}|${Math.round((n.key==="eraser"?.5:Ti)*100)}|${wi}`}function Ty(){let n=Pt[rn];Ge.stampMaterial.map=kh(n.key,n.key==="eraser"?.5:Ti),n.key==="eraser"?(Ge.stampMaterial.color.set("#e5725f"),Ge.stampMaterial.opacity=.3):(Ge.stampMaterial.color.set(wi),Ge.stampMaterial.opacity=.55),Ge.stampMaterial.needsUpdate=!0}function ca(){Ge.stamp&&(Ge.ring.visible=!1,Ge.stamp.visible=!1,Ge.mirror.visible=!1,Ge.last=null,nt())}function kf(n){if(!Kt||!n){ca();return}Ey();let e=Pt[rn];if(e.action&&e.key!=="eraser"){ca();return}let t=$n[n.meshIndex];if(!t){ca();return}let i=wy();i!==Ge.signature&&(Ge.signature=i,Ty());let s=ws(n,e),r=Ge.last;if(r&&Ge.lastRadius===s){let c=n.point[0]-r[0],u=n.point[1]-r[1],d=n.point[2]-r[2];if(c*c+u*u+d*d<s*s*.015)return}let a={meshIndex:n.meshIndex,p:[...n.point],n:[...n.normal],r:s,aspect:Lf(e),angle:0,c:[1,1,1]},o=xa(t,a);if(!o){ca();return}let l=Ge.ring.geometry;if(Ge.ring.geometry=o,Ge.stamp.geometry=o,l!==o&&l.dispose(),Ge.ring.visible=!0,Ge.stamp.visible=!0,Ge.last=[...n.point],Ge.lastRadius=s,Ut){let c={...a,p:[2*t.bounds.center[0]-a.p[0],a.p[1],a.p[2]],n:[-a.n[0],a.n[1],a.n[2]]},u=xa(t,c),d=Ge.mirror.geometry;u?(Ge.mirror.geometry=u,Ge.mirror.visible=!0):Ge.mirror.visible=!1,d!==u&&d.dispose()}else Ge.mirror.visible=!1;nt()}function ts(n,e=null){let t=new bn;t.name=`makeup-layer-${mr}`;let i={id:mr++,name:n,group:t,visible:!0,opacity:1,locked:!1,strokes:[],legacyPaint:e,legacyTexture:null,history:[],historyIndex:-1,geometryBuildToken:0};return Kt&&ft.add(t),yr(i),i}function _r(n){let e=new Set,t=new Set;for(let i of[...n.children])n.remove(i),!i.userData.sharedGeometry&&i.geometry&&e.add(i.geometry),Array.isArray(i.material)?i.material.forEach(s=>t.add(s)):i.material&&t.add(i.material);e.forEach(i=>i.dispose()),t.forEach(i=>i.dispose())}function Vf(n){if(!n.legacyPaint||!Kt||n.legacyTexture)return;let e=new Image;e.onload=()=>{let t=new $t(e);t.colorSpace=dt,t.flipY=!0,t.needsUpdate=!0,n.legacyTexture=t;for(let i of ga){let s=new ti({map:t,transparent:!0,opacity:n.opacity,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-2,side:tn,shininess:6,specular:new Pe(.05,.05,.05),toneMapped:!1}),r=new Ct(i.geometry,s);ft.matrixWorld.clone().invert().multiply(i.matrixWorld).decompose(r.position,r.quaternion,r.scale),r.userData.sharedGeometry=!0,r.frustumCulled=!1,r.renderOrder=10+we.indexOf(n)*100,r.userData.baseOpacity=1,r.name=`legacy-uv-${n.id}`,n.group.add(r)}nt()},e.onerror=()=>yt(gn==="ru"?"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u0430\u0440\u044B\u0439 \u0441\u043B\u043E\u0439 \u0433\u0440\u0438\u043C\u0430":"Could not load legacy paint layer"),e.src=n.legacyPaint}async function xr(n){if(!Kt)return;n.group.parent!==ft&&ft.add(n.group),_r(n.group),n.legacyTexture?.dispose(),n.legacyTexture=null,n.group.visible=n.visible;let e=++n.geometryBuildToken;for(let t of n.strokes){if(n.geometryBuildToken!==e||!we.includes(n))break;Vh(n,t),await Ms()}Vf(n),nt()}function Hf(n){if(we.length>=ma)return yt(`${Le("layerLimit")} (${ma})`);let e=ts(n||`${Le("layerName")} ${mr}`);we.push(e),Kt&&xr(e),Qe=we.length-1,sn(),un(),yt(Le("layerAdded"))}function Pl(n){return{id:n.id,tool:n.tool,color:n.color,opacity:n.opacity,softness:n.softness,flow:n.flow,dabs:n.dabs.map(e=>({...e,p:[...e.p],n:[...e.n],c:e.c?[...e.c]:void 0}))}}function Ay(n){return n.strokes.slice()}function yr(n){n.history=n.history.slice(0,n.historyIndex+1),n.history.push(Ay(n));let e=Ma?50:ay;n.history.length>e&&n.history.shift(),n.historyIndex=n.history.length-1,n===we[Qe]&&Bh()}function Ry(n,e){let t=n.getContext("2d"),i=n.width,s=n.height;if(t.clearRect(0,0,i,s),!$n.length)return;let r=$n[0].bounds,a=Math.max(r.max[0]-r.min[0],.001),o=Math.max(r.max[1]-r.min[1],.001),l=0,c=[];for(let d of e.strokes){l+=d.dabs.length;for(let h of d.dabs)c.push({stroke:d,dab:h})}let u=Math.max(1,Math.ceil(c.length/600));for(let d=0;d<c.length;d+=u){let{stroke:h,dab:f}=c[d],g=(1-(f.p[0]-r.min[0])/a)*i,x=(1-(f.p[1]-r.min[1])/o)*s,p=Math.max(1.5,Math.min(9,f.r/a*i*2.2));t.globalAlpha=Ne((h.opacity??.8)*.9,.15,1),t.fillStyle=f.css||h.color,t.beginPath(),t.arc(g,x,p,0,Math.PI*2),t.fill()}t.globalAlpha=1}var Cy='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.8 12S6.2 6.8 12 6.8 21.2 12 21.2 12 18 17.2 12 17.2 2.8 12 2.8 12z"/><circle cx="12" cy="12" r="2.6"/></svg>',Py='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.8 12S6.2 6.8 12 6.8c1.8 0 3.4.6 4.8 1.4M21.2 12S18 17.2 12 17.2c-1.8 0-3.4-.6-4.8-1.4"/><path d="M4 20L20 4"/></svg>',Iy='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="11" width="12" height="9" rx="2"/><path d="M8.5 11V8a3.5 3.5 0 0 1 7 0v3"/></svg>',Ly='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="11" width="12" height="9" rx="2"/><path d="M8.5 11V8a3.5 3.5 0 0 1 6.8-1.2"/></svg>';function sn(){let n=D("#layers");n.replaceChildren(),we.forEach((t,i)=>{let s=document.createElement("div");s.className=`layer-item${i===Qe?" active":""}`,s.dataset.layerIndex=String(i),s.setAttribute("aria-selected",String(i===Qe)),s.innerHTML=`<canvas class="layer-thumb" width="36" height="36" aria-label="Layer preview"></canvas><button class="visibility" type="button" title="Toggle visibility" aria-label="Toggle visibility">${t.visible?Cy:Py}</button><span class="layer-title">${My(t.name)}${t.legacyPaint?" \xB7 UV":""}</span><span class="layer-count">${t.strokes.length||""}</span><button class="lock" type="button" title="Toggle layer lock" aria-label="Toggle layer lock">${t.locked?Iy:Ly}</button><span class="layer-number">${i+1}</span>`,s.addEventListener("click",()=>{Qe=i,sn(),D("#status").textContent=t.name,nt()}),s.querySelector(".visibility").addEventListener("click",r=>{r.stopPropagation(),t.visible=!t.visible,t.group.visible=t.visible,sn(),un(),nt()}),s.querySelector(".lock").addEventListener("click",r=>{r.stopPropagation(),t.locked=!t.locked,sn(),un()}),n.appendChild(s),Ry(s.querySelector(".layer-thumb"),t),t.group.children.forEach((r,a)=>{r.renderOrder=20+i*1e4+a,r.material&&(r.material.opacity=(r.userData.baseOpacity??1)*t.opacity)})});let e=we[Qe];D("#layerOpacity").value=String(Math.round((e?.opacity??1)*100)),D("#layerOpacityReadout").textContent=`${D("#layerOpacity").value}%`,D("#deleteLayer").disabled=we.length<=1,D("#layerUp").disabled=Qe>=we.length-1,D("#layerDown").disabled=Qe<=0,Bh()}function Bh(){let n=we[Qe];D("#undoBtn").disabled=!n||n.historyIndex<=0,D("#redoBtn").disabled=!n||n.historyIndex>=n.history.length-1}function Gf(n,e){e<0||e>=n.history.length||(n.historyIndex=e,n.strokes=n.history[e].slice(),Kf(n),sn(),nt())}function Wf(){let n=we[Qe];n&&n.historyIndex>0&&Gf(n,n.historyIndex-1)}function Xf(){let n=we[Qe];n&&n.historyIndex<n.history.length-1&&Gf(n,n.historyIndex+1)}async function Dy(){let n=we[Qe];if(!n)return yt(Le("noLayer"));if(we.length>=ma)return yt(`${Le("layerLimit")} (${ma})`);let e=ts(`${n.name} Copy`);e.visible=n.visible,e.opacity=n.opacity,e.locked=n.locked,e.legacyPaint=n.legacyPaint,e.strokes=n.strokes.map(Pl),we.splice(Qe+1,0,e),Qe++,Kt&&xr(e),yr(e),sn(),un(),nt(),yt(Le("layerDuplicated"))}function qf(n){let e=Qe+n;e<0||e>=we.length||([we[Qe],we[e]]=[we[e],we[Qe]],Qe=e,sn(),un(),nt())}function Ny(){let n=we[Qe];if(!n)return;let e=prompt(Le("renamed"),n.name);e?.trim()&&(n.name=e.trim().slice(0,80),sn(),un())}function Uy(){if(we.length<=1)return;let[n]=we.splice(Qe,1);ft.remove(n.group),_r(n.group),n.legacyTexture?.dispose(),Qe=Ne(Qe-1,0,we.length-1),sn(),un(),nt(),yt(Le("deleted"))}function Fy(){let n=we[Qe];if(!n)return yt(Le("noLayer"));if(n.locked)return yt(Le("locked"));confirm(`${Le("clearConfirm")} '${n.name}'?`)&&(n.strokes=[],n.legacyPaint=null,Kf(n),yr(n),un(),sn(),nt())}ji=D("#viewport");Un=D("#stage");An=new Lr;An.background=new Pe("#1b1820");Nt=new fn(35,1,.1,100);Nt.position.set(0,0,Nn);try{Ht=new Ml({canvas:Un,antialias:!0,alpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"}),Ht.setPixelRatio(Math.min(window.devicePixelRatio||1,.85)),Ht.outputColorSpace=dt,Ht.toneMapping=$r,Ht.toneMappingExposure=1.05}catch(n){console.error("WebGL initialization failed:",n),D("#loadState").textContent=Le("graphicsError"),D("#loadingText").textContent=Le("graphicsError"),D("#loadingSubtext").textContent=Le("retryText"),D("#loading").classList.add("error")}var Yf=new Hr(14604287,4862e3,2);An.add(Yf);var fr=new ms(16771036,3);fr.position.set(2.5,3.5,4);An.add(fr);var fa=new ms(12106495,1.3);fa.position.set(-3,1,2);An.add(fa);var pa=new ms(16777215,1.6);pa.position.set(0,2,-3);An.add(pa);Pf();Rf();D("#toggleLightGizmo")?.addEventListener("click",hy);ft=new bn;ft.rotation.y=Math.PI;An.add(ft);ua=new qr;ua.params.Mesh.threshold=.005;function nt(){!Ht||dh||(dh=!0,requestAnimationFrame(()=>{if(dh=!1,Ht){let n=performance.now();Ht.render(An,Nt);let e=performance.now()-n;ut.renderFrames++,yy(e)}}))}function zl(){if(!Ht)return;let n=ji.clientWidth,e=ji.clientHeight;n<1||e<1||(Ht.setSize(n,e,!1),Nt.aspect=n/e,Nt.updateProjectionMatrix(),nt())}window.addEventListener("resize",zl,{passive:!0});"ResizeObserver"in window&&new ResizeObserver(zl).observe(ji);zl();function oi(n,e,t){ft.rotation.set(n,e,0),ft.position.set(0,0,0),wt.set(0,0,0),Nn=Ne(t,1.2,9),Nt.position.set(wt.x,wt.y,wt.z+Nn),Nt.lookAt(wt),Ts(),nt()}function Oy(n,e){let t=2*Nn*Math.tan(lr.degToRad(Nt.fov/2))/Math.max(1,ji.clientHeight),i=new F(1,0,0).applyQuaternion(Nt.quaternion),s=new F(0,1,0).applyQuaternion(Nt.quaternion),r=i.multiplyScalar(-n*t).add(s.multiplyScalar(e*t));wt.add(r),Nt.position.add(r),Nt.lookAt(wt),Ts(),nt()}function ha(n,e=""){D("#loadState").textContent=n,e&&(D("#loadingSubtext").textContent=e)}function By(n){n.updateMatrixWorld(!0);let e=new Pn().setFromObject(n),t=e.getCenter(new F),i=e.getSize(new F),s=Math.max(i.x,i.y,i.z);if(!Number.isFinite(s)||s<=0)throw new Error("Invalid model dimensions");let r=2.35/s;n.rotation.set(0,Math.PI,0);let a=t.clone().applyAxisAngle(new F(0,1,0),Math.PI);n.scale.setScalar(r),n.position.copy(a.multiplyScalar(-r)),n.updateMatrixWorld(!0)}function gf(n){of(n)}var Ms=()=>new Promise(n=>setTimeout(n,0));function zy(n,e,t,i){let s=1/(i[3]*n+i[7]*e+i[11]*t+i[15]||1);return[(i[0]*n+i[4]*e+i[8]*t+i[12])*s,(i[1]*n+i[5]*e+i[9]*t+i[13])*s,(i[2]*n+i[6]*e+i[10]*t+i[14])*s]}async function ky(n){let e=n.geometry,t=e.attributes.position,i=e.index;if(!t)throw new Error(`Mesh ${n.name||"unnamed"} has no positions`);let r=ft.matrixWorld.clone().invert().multiply(n.matrixWorld),a=r.elements,o=t.count,l=new Float32Array(o*3),c=1/0,u=1/0,d=1/0,h=-1/0,f=-1/0,g=-1/0;for(let k=0;k<o;k++){let re=zy(t.getX(k),t.getY(k),t.getZ(k),a),fe=k*3;l[fe]=re[0],l[fe+1]=re[1],l[fe+2]=re[2],c=Math.min(c,re[0]),u=Math.min(u,re[1]),d=Math.min(d,re[2]),h=Math.max(h,re[0]),f=Math.max(f,re[1]),g=Math.max(g,re[2]),k%32e3===0&&await Ms()}let x=Math.max(h-c,.001),p=Math.max(f-u,.001),m=Math.max(g-d,.001),M=Math.max(x,p,m)/oy,T=Math.ceil(x/M)+1,b=Math.ceil(p/M)+1,A=Math.ceil(m/M)+1,E=T*b*A,_=Math.floor(i?i.count/3:t.count/3),S=new Uint32Array(_*3),L=new Uint32Array(E),C=(k,re,fe)=>Ne(Math.floor((k-re)/M),0,fe-1),U=(k,re)=>{let fe=i?i.getX(k*3):k*3,H=i?i.getX(k*3+1):k*3+1,ie=i?i.getX(k*3+2):k*3+2;S[k*3]=fe,S[k*3+1]=H,S[k*3+2]=ie;let ce=fe*3,ae=H*3,te=ie*3,Se=Math.min(l[ce],l[ae],l[te]),Ke=Math.max(l[ce],l[ae],l[te]),be=Math.min(l[ce+1],l[ae+1],l[te+1]),He=Math.max(l[ce+1],l[ae+1],l[te+1]),qe=Math.min(l[ce+2],l[ae+2],l[te+2]),Fe=Math.max(l[ce+2],l[ae+2],l[te+2]),_t=C(Se,c,T),St=C(Ke,c,T),lt=C(be,u,b),st=C(He,u,b),Bt=C(qe,d,A),vt=C(Fe,d,A);for(let It=Bt;It<=vt;It++)for(let Lt=lt;Lt<=st;Lt++)for(let Dt=_t;Dt<=St;Dt++)re(Dt+T*(Lt+b*It))},z=0;for(let k=0;k<_;k++)U(k,re=>{L[re]++,z++}),k%16e3===0&&await Ms();let X=new Uint32Array(E+1);for(let k=0;k<E;k++)X[k+1]=X[k]+L[k];let P=X.slice(0,E),Y=new Uint32Array(z);for(let k=0;k<_;k++)U(k,re=>{Y[P[re]++]=k}),k%16e3===0&&await Ms();let $=new Float32Array(_*3);for(let k=0;k<_;k++){let re=S[k*3]*3,fe=S[k*3+1]*3,H=S[k*3+2]*3,ie=l[fe]-l[re],ce=l[fe+1]-l[re+1],ae=l[fe+2]-l[re+2],te=l[H]-l[re],Se=l[H+1]-l[re+1],Ke=l[H+2]-l[re+2],be=ce*Ke-ae*Se,He=ae*te-ie*Ke,qe=ie*Se-ce*te,Fe=Math.hypot(be,He,qe)||1,_t=k*3;$[_t]=be/Fe,$[_t+1]=He/Fe,$[_t+2]=qe/Fe,k%5e4===0&&await Ms()}let G=new ze().getNormalMatrix(r),ne=G.elements,W=new Float32Array(o*3),Q=e.attributes.normal;for(let k=0;k<o;k++){let re=Q?Q.getX(k):0,fe=Q?Q.getY(k):0,H=Q?Q.getZ(k):1,ie=ne[0]*re+ne[3]*fe+ne[6]*H,ce=ne[1]*re+ne[4]*fe+ne[7]*H,ae=ne[2]*re+ne[5]*fe+ne[8]*H,te=Math.hypot(ie,ce,ae)||1;W[k*3]=ie/te,W[k*3+1]=ce/te,W[k*3+2]=ae/te,k%32e3===0&&await Ms()}return{mesh:n,points:l,triangles:S,faceNormals:$,vertexNormals:W,faceCount:_,gridMin:[c,u,d],gridMax:[c+T*M,u+b*M,d+A*M],cellSize:M,nx:T,ny:b,nz:A,offsets:X,faceIds:Y,faceMarks:new Uint32Array(_),mark:0,candidateFaces:[],normalMatrix:G,bounds:{min:[c,u,d],max:[h,f,g],center:[(c+h)/2,(u+f)/2,(d+g)/2],size:[x,p,m]}}}function Vy(n,e){let t=[n[0],n[1],n[2]].map(a=>({x:a[0],y:a[1]})),i=(a,o,l)=>(o.x-a.x)*(l.y-a.y)-(o.y-a.y)*(l.x-a.x),s=Math.sign(i(e[0],e[1],e[2]))||1;for(let a=0;a<3;a++){let o=e[a],l=e[(a+1)%3],c=t,u=[];if(!c.length)break;let d=c[c.length-1],h=s*i(o,l,d),f=h>=-1e-10;for(let g of c){let x=s*i(o,l,g),p=x>=-1e-10;if(p!==f){let m=h-x,M=Math.abs(m)<1e-14?0:h/m;u.push({x:d.x+(g.x-d.x)*M,y:d.y+(g.y-d.y)*M})}p&&u.push(g),d=g,h=x,f=p}t=u}if(t.length<3)return 0;let r=0;for(let a=0;a<t.length;a++){let o=t[a],l=t[(a+1)%t.length];r+=o.x*l.y-l.x*o.y}return Math.abs(r)*.5}function Hy(n,e=2e6){let t=n.attributes.uv,i=n.attributes.position,s=n.index;if(!t)return{available:!1,reason:"UV attribute missing"};let r=Math.floor(s?s.count/3:i.count/3),a=new Array(r),o=new Map,l=0,c=0,u=0,d=0,h=0,f=!1,g=128,x=p=>Ne(Math.floor(p*g),0,g-1);for(let p=0;p<r;p++){let m=[0,1,2].map(L=>s?s.getX(p*3+L):p*3+L),M=m.map(L=>[t.getX(L),t.getY(L)]);if(a[p]={ids:m,tri:M},M.some(L=>!Number.isFinite(L[0])||!Number.isFinite(L[1]))){l++;continue}if(M.some(L=>L[0]<0||L[0]>1||L[1]<0||L[1]>1)&&c++,Math.abs((M[1][0]-M[0][0])*(M[2][1]-M[0][1])-(M[1][1]-M[0][1])*(M[2][0]-M[0][0]))*.5<1e-12){u++;continue}let b=x(Math.min(...M.map(L=>L[0]))),A=x(Math.max(...M.map(L=>L[0]))),E=x(Math.min(...M.map(L=>L[1]))),_=x(Math.max(...M.map(L=>L[1]))),S=new Set;for(let L=E;L<=_;L++)for(let C=b;C<=A;C++){let U=o.get(L*g+C);if(U)for(let z of U)S.add(z)}for(let L of S){if(++d>e){f=!0;break}let C=a[L];!C||m.some(U=>C.ids.includes(U))||Vy(M,C.tri)>1e-9&&h++}if(f)break;for(let L=E;L<=_;L++)for(let C=b;C<=A;C++){let U=L*g+C,z=o.get(U);z||o.set(U,z=[]),z.push(p)}}return{available:!0,triangleCount:r,invalidUVTriangles:l,outOfRangeTriangles:c,degenerateUVTriangles:u,overlappingTrianglePairs:h,pairChecks:Math.min(d,e),analysisTruncated:f,note:"Diagnostic of the original asset UVs only. New makeup strokes use independent surface-projected decal coordinates and do not depend on these UVs."}}window.grimStudioDiagnostics=Object.freeze({...window.grimStudioDiagnostics,inspectUV:()=>ga.map((n,e)=>({mesh:e,name:n.name||`mesh-${e}`,...Hy(n.geometry)})),getPerformanceSnapshot:()=>({...ut,overlayMeshes:we.reduce((n,e)=>n+e.group.children.length,0),storedDabs:we.reduce((n,e)=>n+e.strokes.reduce((t,i)=>t+i.dabs.length,0),0)})});async function kl(n=!1){if(Ht){if(qi)return qi;if(!Kt)return D("#retryModel").hidden=!0,D("#loading").classList.remove("hide","error"),D("#loadingText").textContent=Le("loading"),D("#loadingSubtext").textContent=Le("preparing"),ha("Loading",Le("preparing")),qi=(async()=>{let e=performance.now(),t=null;try{let i=bh.find(h=>h.id===Ei)||bh[0],[s,r]=await Promise.all([window.grim.readModelAsset(i.objFile),window.grim.readModelAsset(i.mtlFile)]);if(s?.error)throw new Error(s.error);if(r?.error)throw new Error(r.error);if(typeof s?.content!="string"||typeof r?.content!="string")throw new Error("Model asset response was invalid");let a=af({objText:s.content,mtlText:r.content,modelId:i.id}),o=a.root;t=o,o.traverse(h=>{h.isMesh&&(h.castShadow=!1,h.receiveShadow=!1,h.frustumCulled=!0)}),a.stats.missingTextureRefs.length&&console.warn(`[GrimStudio assets] ${i.name}: missing optional diffuse textures`,a.stats.missingTextureRefs),console.info(`[GrimStudio assets] ${i.name} validated`,a.stats),By(o),o.visible=!1,ft.add(o),ft.updateMatrixWorld(!0);let l=[];if(o.traverse(h=>{h.isMesh&&l.push(h)}),!l.length)throw new Error("No mesh objects found in OBJ model");let c=[];for(let h=0;h<l.length;h++)ha(Le("surfaceIndex"),`${h+1}/${l.length}`),c.push(await ky(l[h]));Dn&&(ft.remove(Dn),gf(Dn)),Dn=o,t=null,Dn.visible=!0,ga=l,$n=c,Kt=!0,Ts(),Lh(),we.forEach(h=>xr(h)),D("#loading").classList.add("hide");let u=((performance.now()-e)/1e3).toFixed(2),d=ga.reduce((h,f)=>h+f.geometry.attributes.position.count,0);return ha(`${Le("loaded")} \xB7 ${i.name} \xB7 ${u}s`,`${d.toLocaleString()} vertices \xB7 surface decal index ready`),D("#status").textContent=`${Le("ready")} \xB7 ${u}s`,D("#headModelSelect").value=i.id,nt(),!0}catch(i){return t&&t!==Dn&&(ft.remove(t),gf(t)),console.error("Model initialization failed:",i),Kt=!!Dn,qi=null,ha(Le("modelError"),i.message||"Unknown error"),D("#loadingText").textContent=Le("modelError"),D("#loadingSubtext").textContent=i.message||Le("retryText"),D("#loading").classList.remove("hide"),D("#loading").classList.add("error"),D("#retryModel").hidden=!1,!1}})(),qi}}function $f(){return{layers:we.map(n=>({name:n.name,visible:n.visible,opacity:n.opacity,locked:n.locked,strokes:n.strokes.slice(),legacyPaint:n.legacyPaint,history:n.history.map(e=>e.slice()),historyIndex:n.historyIndex})),activeLayer:Qe}}function Gy(){for(let n of we)ft.remove(n.group),_r(n.group),n.legacyTexture?.dispose();we=[],Qe=0}var _h=!1;function _f(n){if(Gy(),n){for(let e of n.layers){let t=ts(e.name,e.legacyPaint);t.visible=e.visible,t.opacity=e.opacity,t.locked=e.locked,t.strokes=e.strokes.map(Pl),Array.isArray(e.history)?(t.history=e.history.map(i=>i.map(Pl)),t.historyIndex=Number.isInteger(e.historyIndex)?e.historyIndex:t.history.length-1):(t.history=[],t.historyIndex=-1,yr(t)),we.push(t)}Qe=Ne(n.activeLayer||0,0,Math.max(0,we.length-1))}else we.push(ts(Le("baseLayer")));sn()}async function Wy(n){if(_h||!bh.some(s=>s.id===n)||n===Ei)return;_h=!0;let e=D("#headModelSelect");e.disabled=!0;let t=Ei,i=Kt?$f():Ss.get(t);i&&Ss.set(t,i),Jt!=="idle"&&is(),Ei=n,Kt=!1,qi=null,_f(Ss.get(n)),e.value=n;try{if(!await kl(!0)){Ei=t,qi=null,_f(Ss.get(t)),e.value=t,Kt=!!Dn,Dn&&(Dn.visible=!0,we.forEach(r=>xr(r)),D("#loading").classList.add("hide"),D("#retryModel").hidden=!0,yt(gn==="ru"?"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u043C\u043E\u0434\u0435\u043B\u044C. \u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430.":"Could not load selected model. Previous model remains active."),nt());return}un(),nt()}finally{e.disabled=!1,_h=!1}}var xf=new Xe,xh=new at,yf=new F,vf=new F;var yh=null,Mf=0,Rh=!0;function Ts(){Rh=!0}function zh(n,e){if(!Kt||!ga.length)return null;let t=performance.now(),i=t;(!yh||i-Mf>250)&&(yh=Un.getBoundingClientRect(),Mf=i);let s=yh;if(!s.width||!s.height)return null;xf.set((n-s.left)/s.width*2-1,-((e-s.top)/s.height)*2+1),Rh&&(ft.updateMatrixWorld(!0),Nt.updateMatrixWorld(!0),xh.copy(ft.matrixWorld).invert(),Rh=!1),ua.setFromCamera(xf,Nt),yf.copy(ua.ray.origin).applyMatrix4(xh),vf.copy(ua.ray.direction).transformDirection(xh);let r=null,a=-1;for(let u=0;u<$n.length;u++){let d=lf($n[u],yf,vf,r?.distance??1/0);d&&(!r||d.distance<r.distance)&&(r=d,a=u)}if(ut.raycastMs+=performance.now()-t,ut.raycasts++,!r)return null;let o=$n[a],l=r.faceIndex*3,c=[o.faceNormals[l],o.faceNormals[l+1],o.faceNormals[l+2]];return{point:[r.x,r.y,r.z],normal:c,meshIndex:a,faceIndex:r.faceIndex,distance:r.distance}}function Zf(n){return zh(n.clientX,n.clientY)}function Xy(n,e,t){n.mark=n.mark+1>>>0,n.mark===0&&(n.faceMarks.fill(0),n.mark=1);let i=n.mark,s=Ne(Math.floor((e[0]-t-n.gridMin[0])/n.cellSize),0,n.nx-1),r=Ne(Math.floor((e[0]+t-n.gridMin[0])/n.cellSize),0,n.nx-1),a=Ne(Math.floor((e[1]-t-n.gridMin[1])/n.cellSize),0,n.ny-1),o=Ne(Math.floor((e[1]+t-n.gridMin[1])/n.cellSize),0,n.ny-1),l=Ne(Math.floor((e[2]-t-n.gridMin[2])/n.cellSize),0,n.nz-1),c=Ne(Math.floor((e[2]+t-n.gridMin[2])/n.cellSize),0,n.nz-1),u=n.candidateFaces;u.length=0;for(let d=l;d<=c;d++)for(let h=a;h<=o;h++)for(let f=s;f<=r;f++){let g=f+n.nx*(h+n.ny*d);for(let x=n.offsets[g];x<n.offsets[g+1];x++){let p=n.faceIds[x];n.faceMarks[p]!==i&&(n.faceMarks[p]=i,u.push(p))}}return u}function dr(n,e,t,i,s,r){if(!e)return 0;let a=0,o=(e-1)*3,l=n[o+i]-s,c=r?l>=0:l<=0;for(let u=0;u<e;u++){let d=u*3,h=n[d+i]-s,f=r?h>=0:h<=0;if(f!==c){let g=n[d+i]-n[o+i],x=Math.abs(g)<1e-12?0:(s-n[o+i])/g;t[a++]=n[o]+(n[d]-n[o])*x,t[a++]=n[o+1]+(n[d+1]-n[o+1])*x,t[a++]=n[o+2]+(n[d+2]-n[o+2])*x}f&&(t[a++]=n[d],t[a++]=n[d+1],t[a++]=n[d+2]),o=d,c=f}return a/3}function xa(n,e){let t=performance.now(),i=e.p[0],s=e.p[1],r=e.p[2];la.set(e.n[0],e.n[1],e.n[2]).normalize(),ph.setFromUnitVectors(Th,la),e.angle&&(hf.setFromAxisAngle(Th,e.angle),ph.multiply(hf)),mh.makeRotationFromQuaternion(ph),uf.copy(mh).invert(),df.setFromMatrix4(mh),ff.setFromMatrix4(uf);let a=df.elements,o=ff.elements,l=e.r*2*e.aspect,c=e.r*2,u=Math.max(e.r*.9,.006),d=l/2,h=c/2,f=u/2,g=Xy(n,e.p,Math.max(l,c)*.8+u),x=[],p=[],m=[],M=[],T=n.points,b=n.triangles,A=n.faceNormals,E=n.vertexNormals,_=e.c||[1,1,1],S=dy,L=fy,C=la.x,U=la.y,z=la.z;for(let P=0;P<g.length;P++){let Y=g[P],$=Y*3,G=A[$],ne=A[$+1],W=A[$+2];if(G*C+ne*U+W*z<.1)continue;let Q=b[$]*3,k=b[$+1]*3,re=b[$+2]*3;for(let ae=0;ae<3;ae++){let te=ae===0?Q:ae===1?k:re,Se=T[te]-i,Ke=T[te+1]-s,be=T[te+2]-r,He=ae*3;S[He]=o[0]*Se+o[3]*Ke+o[6]*be,S[He+1]=o[1]*Se+o[4]*Ke+o[7]*be,S[He+2]=o[2]*Se+o[5]*Ke+o[8]*be}let fe=3,H=S,ie=L,ce;if(fe=dr(H,fe,ie,0,-d,!0),ce=H,H=ie,ie=ce,!(fe<3)&&(fe=dr(H,fe,ie,0,d,!1),ce=H,H=ie,ie=ce,!(fe<3)&&(fe=dr(H,fe,ie,1,-h,!0),ce=H,H=ie,ie=ce,!(fe<3)&&(fe=dr(H,fe,ie,1,h,!1),ce=H,H=ie,ie=ce,!(fe<3)&&(fe=dr(H,fe,ie,2,-f,!0),ce=H,H=ie,ie=ce,!(fe<3)&&(fe=dr(H,fe,ie,2,f,!1),ce=H,H=ie,ie=ce,!(fe<3)))))))for(let ae=1;ae<fe-1;ae++)for(let te=0;te<3;te++){let Se=te===0?0:te===1?ae:ae+1,Ke=Se*3,be=H[Ke],He=H[Ke+1],qe=H[Ke+2],Fe=a[0]*be+a[3]*He+a[6]*qe+i,_t=a[1]*be+a[4]*He+a[7]*qe+s,St=a[2]*be+a[5]*He+a[8]*qe+r;x.push(Fe,_t,St);let lt=Q*3,st=k*3,Bt=re*3,vt=T[st]-T[lt],It=T[st+1]-T[lt+1],Lt=T[st+2]-T[lt+2],Dt=T[Bt]-T[lt],N=T[Bt+1]-T[lt+1],jt=T[Bt+2]-T[lt+2],pt=Fe-T[lt],mt=_t-T[lt+1],_e=St-T[lt+2],Tt=vt*vt+It*It+Lt*Lt,Ue=vt*Dt+It*N+Lt*jt,ke=Dt*Dt+N*N+jt*jt,w=pt*vt+mt*It+_e*Lt,y=pt*Dt+mt*N+_e*jt,O=Tt*ke-Ue*Ue,se=G,j=ne,oe=W;if(Math.abs(O)>1e-14){let de=(ke*w-Ue*y)/O,J=(Tt*y-Ue*w)/O,K=1-de-J;se=E[lt]*K+E[st]*de+E[Bt]*J,j=E[lt+1]*K+E[st+1]*de+E[Bt+1]*J,oe=E[lt+2]*K+E[st+2]*de+E[Bt+2]*J;let ue=Math.hypot(se,j,oe)||1;se/=ue,j/=ue,oe/=ue,se*G+j*ne+oe*W<0&&(se=-se,j=-j,oe=-oe)}p.push(se,j,oe),m.push(Ne(be/l+.5,0,1),Ne(He/c+.5,0,1)),M.push(_[0],_[1],_[2])}}if(ut.decalMs+=performance.now()-t,ut.decals++,!x.length)return null;let X=new Rt;return X.setAttribute("position",new ht(x,3)),X.setAttribute("normal",new ht(p,3)),X.setAttribute("uv",new ht(m,2)),X.setAttribute("color",new ht(M,3)),X.computeBoundingSphere(),X}function kh(n,e){let t=If(),i=`${n}:${t?.key||"tool"}:${Math.round(e*100)}`;if(fh.has(i))return fh.get(i);let s=128,r=document.createElement("canvas");r.width=r.height=s;let a=r.getContext("2d",{alpha:!0}),o=Pt.find(h=>h.key===n)||Pt[0],l=t?.mask||o.mask;a.clearRect(0,0,s,s);let c=Math.max(.02,1-e),u=(h,f=62,g=[1,1],x=[64,64])=>{a.save(),a.translate(x[0],x[1]),a.scale(g[0],g[1]);let p=a.createRadialGradient(0,0,Math.max(0,h*f),0,0,f);p.addColorStop(0,"rgba(255,255,255,1)"),p.addColorStop(Math.min(.995,h),"rgba(255,255,255,1)"),p.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=p,a.fillRect(-f,-f,f*2,f*2),a.restore()};if(l==="star"){a.fillStyle="white",a.beginPath();for(let h=0;h<10;h++){let f=-Math.PI/2+h*Math.PI/5,g=h%2?s*.22:s*.47,x=s/2+Math.cos(f)*g,p=s/2+Math.sin(f)*g;h===0?a.moveTo(x,p):a.lineTo(x,p)}a.closePath(),a.fill()}else if(l==="rosette"){a.fillStyle="white";for(let h=0;h<10;h++){let f=h*Math.PI/5;a.beginPath(),a.arc(s/2+Math.cos(f)*s*.28,s/2+Math.sin(f)*s*.28,s*.105,0,Math.PI*2),a.fill()}a.beginPath(),a.arc(s/2,s/2,s*.14,0,Math.PI*2),a.fill()}else if(l==="hair"){u(Math.max(.06,c*.12),62,[1,.92]),a.globalAlpha=.55,a.lineCap="round";for(let h=0;h<13;h++){let f=18+h*7.7;a.strokeStyle=`rgba(255,255,255,${.3+h%4*.16})`,a.lineWidth=.9+h%3*.45,a.beginPath(),a.moveTo(f,99),a.bezierCurveTo(f-8,72,f+9,43,f+(h%2?7:-5),18),a.stroke()}a.globalAlpha=1}else if(l==="sponge"||l==="powder"){u(l==="sponge"?Math.max(.08,c*.12):Math.max(.02,c*.04),62,[1,1]);let h=l==="sponge"?12345:54321,f=()=>(h=h*1664525+1013904223>>>0,h/4294967296);for(let g=0;g<(l==="sponge"?125:210);g++){let x=9+f()*110,p=9+f()*110;if(Math.hypot(x-64,p-64)>61)continue;let M=l==="sponge"?.09:.055;a.fillStyle=`rgba(0,0,0,${M})`,a.beginPath(),a.arc(x,p,f()*(l==="sponge"?2.1:1.15)+.25,0,Math.PI*2),a.fill()}}else if(l==="foundation"){u(Math.max(.3,c*.42),62,[1,1]);let h=78231;for(let f=0;f<160;f++){h=h*1664525+1013904223>>>0;let g=12+h/4294967296*104;h=h*1664525+1013904223>>>0;let x=12+h/4294967296*104;Math.hypot(g-64,x-64)>58||(a.fillStyle="rgba(0,0,0,.018)",a.fillRect(g,x,.7,.7))}}else if(l==="concealer")u(Math.max(.5,c*.62),62,[1,1]);else if(l==="blush")u(Math.max(.02,c*.07),62,[1,1],[64,64]);else if(l==="contour")u(Math.max(.02,c*.07),62,[1.08,.86],[64,64]);else if(l==="highlight")u(Math.max(0,c*.02),62,[1,1]);else if(l==="shadow")u(Math.max(.12,c*.22),62,[1,1]);else if(l==="liner")u(Math.max(.55,c*.65),62,[1.08,.55]);else if(l==="lipstick")u(Math.max(.45,c*.55),62,[1,1]);else if(l==="gloss")u(Math.max(.1,c*.16),62,[1.05,.75]),a.globalCompositeOperation="destination-in",a.fillStyle="rgba(255,255,255,.88)",a.fillRect(0,0,s,s),a.globalCompositeOperation="source-over";else if(l==="blur"||l==="blend")u(Math.max(0,c*.02),62,[1,1]);else{let h=l==="hard"?Math.max(.88,1-e):l==="air"?.02:Math.max(.08,c);u(h,62)}let d=new zi(r);return d.colorSpace=dt,d.generateMipmaps=!1,d.minFilter=At,d.magFilter=At,d.needsUpdate=!0,fh.set(i,d),d}function Jf(n,e){let t=Pt.find(o=>o.key===n.tool)||Pt[0],i=kh(t.key,n.softness??Ti),s=Ne((n.opacity??Il)*(t.alpha??1),0,1),r={map:i,color:16777215,vertexColors:!0,transparent:!0,opacity:s*e.opacity,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1.5,side:tn,toneMapped:!1},a;return t.finish==="gloss"?a=new tr({...r,roughness:.13,metalness:0,clearcoat:.85,clearcoatRoughness:.12}):t.finish==="glow"?a=new tr({...r,roughness:.24,metalness:0,clearcoat:.5,clearcoatRoughness:.25,emissive:n.color,emissiveIntensity:.18}):a=new ti({...r,shininess:6,specular:new Pe(.05,.05,.05)}),a.userData.baseOpacity=s,a}function qy(n){let e=["position","normal","uv","color"],t={position:0,normal:0,uv:0,color:0};for(let a of n)for(let o of e)t[o]+=a.getAttribute(o)?.array.length||0;if(!t.position)return null;let i={position:new Float32Array(t.position),normal:new Float32Array(t.normal),uv:new Float32Array(t.uv),color:new Float32Array(t.color)},s={position:0,normal:0,uv:0,color:0};for(let a of n)for(let o of e){let l=a.getAttribute(o);l&&(i[o].set(l.array,s[o]),s[o]+=l.array.length)}let r=new Rt;return r.setAttribute("position",new en(i.position,3)),r.setAttribute("normal",new en(i.normal,3)),r.setAttribute("uv",new en(i.uv,2)),r.setAttribute("color",new en(i.color,3)),r.computeBoundingSphere(),r}function Vh(n,e){if(!Kt||!n.group||!e.dabs?.length)return;let t=Jf(e,n),i=[],s=96;for(let r=0;r<e.dabs.length;r+=s){let a=[];for(let c=r;c<Math.min(r+s,e.dabs.length);c++){let u=e.dabs[c],d=$n[u.meshIndex??0];if(!d)continue;u.c||(u.c=Vl(e.color));let h=xa(d,u);h&&a.push(h)}if(!a.length)continue;let o=qy(a);for(let c of a)c.dispose();if(!o)continue;let l=new Ct(o,t);l.frustumCulled=!1,l.renderOrder=20+we.indexOf(n)*1e4+n.group.children.length,l.userData.baseOpacity=t.userData.baseOpacity,l.name=`makeup-stroke-${e.id||Nf++}-${i.length}`,n.group.add(l),i.push(l)}if(!i.length){t.dispose();return}e.meshes=i,e.mesh=i[0]}async function Kf(n){_r(n.group),n.legacyTexture?.dispose(),n.legacyTexture=null;let e=++n.geometryBuildToken;for(let t of n.strokes){if(n.geometryBuildToken!==e||!we.includes(n))break;Vh(n,t),await Ms()}n.group.visible=n.visible,Vf(n),sn(),nt()}function Sf(){let n=we[Qe];n&&(yr(n),Bh(),un())}var Yy=.2;function ws(n,e){return Math.max(.004,Yy*(ai/140)*(e.radius||1))}var vh=!1;function jf(){vh||(vh=!0,requestAnimationFrame(()=>{vh=!1,Ie&&Qf()}))}function Qf(){if(!Ie?.touched?.size)return;let n=we[Qe];for(let e of Ie.touched.values())Jy(n,e),Vh(n,e);Ie.touched.clear(),nt()}function Ch(n){let e=Pt[rn],t=ws(n,e);if(e.key==="blur"){let i=Ph(n.point,t*1.5);Ie.dabColor=i?[...i]:null,Ie.skipDab=!i}else{let i=Ph(n.point,t*1.35),s=Vl(wi);Ie.dabColor=i?$y([...i],s,.4):s,Ie.skipDab=!1}}function Vl(n){let e=new Pe(n);return[e.r,e.g,e.b]}function ep(n){let e=new Pe;return e.setRGB(Ne(n[0],0,1),Ne(n[1],0,1),Ne(n[2],0,1)),`#${e.getHexString(dt)}`}function $y(n,e,t){return[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t]}function Ph(n,e){let t=0,i=0,s=0,r=0,a=Math.max(e,.01);for(let o of we)if(!(!o.visible||o.opacity<=0))for(let l of o.strokes){if(!l.dabs?.length)continue;let c=Ne((l.opacity??1)*(Pt.find(u=>u.key===l.tool)?.alpha??1),0,1)*o.opacity;if(!(c<=0))for(let u of l.dabs){let d=u.p[0]-n[0],h=u.p[1]-n[1],f=u.p[2]-n[2],g=Math.hypot(d,h,f);if(g>a+u.r)continue;let x=1-Ne((g-u.r*.35)/a,0,1),p=x*x*c;if(p<=0)continue;let m=u.c||Vl(l.color);i+=m[0]*p,s+=m[1]*p,r+=m[2]*p,t+=p}}return t>0?[i/t,s/t,r/t]:null}function Zy(n,e,t=0){let i=Pt.find(a=>a.key===e.tool)||Pt[0],s=ws(n,i),r=e.dabColor||Vl(e.color);return{meshIndex:n.meshIndex,p:[...n.point],n:[...n.normal],r:s,aspect:Lf(i),angle:t,c:r,css:ep(r)}}var bf={performance:{step:.98,maxInterpolatedHits:1,maxPointerSamples:10,previewBatchSize:24},balanced:{step:.78,maxInterpolatedHits:2,maxPointerSamples:12,previewBatchSize:32},quality:{step:.58,maxInterpolatedHits:3,maxPointerSamples:16,previewBatchSize:40}};function Hh(){return bf[ya]||bf.balanced}function Ef(n,e,t){let i=t.getAttribute("position")?.count||0;if(!i)return;if(n.previewMesh){if(n.vertexCount+i>n.vertexCapacity){n.vertexCapacity=Math.max(n.vertexCapacity*2,(n.vertexCount+i)*2);for(let[r,a]of[["position",3],["normal",3],["uv",2],["color",3]]){let o=new en(new Float32Array(n.vertexCapacity*a),a);o.setUsage(gl),o.array.set(n.previewMesh.geometry.getAttribute(r).array),n.previewMesh.geometry.setAttribute(r,o)}}}else{n.vertexCapacity=Math.max(Hh().previewBatchSize*24,i*2);let r=new Rt;for(let[o,l]of[["position",3],["normal",3],["uv",2],["color",3]]){let c=new en(new Float32Array(n.vertexCapacity*l),l);c.setUsage(gl),r.setAttribute(o,c)}r.setDrawRange(0,0);let a=new Ct(r,n.material);a.frustumCulled=!1,a.renderOrder=30+we.indexOf(e)*1e4+e.group.children.length,a.userData.baseOpacity=n.material.userData.baseOpacity,a.name=`makeup-preview-${n.id}`,e.group.add(a),n.previewMesh=a,n.previewMeshes.push(a)}let s=n.previewMesh.geometry.attributes;s.position.array.set(t.getAttribute("position").array,n.vertexCount*3),s.normal.array.set(t.getAttribute("normal").array,n.vertexCount*3),s.uv.array.set(t.getAttribute("uv").array,n.vertexCount*2),s.color.array.set(t.getAttribute("color").array,n.vertexCount*3),n.vertexCount+=i,n.dirty=!0}function tp(){if(!Ie||Ie.mode!=="paint"||!Ie.previewMesh||!Ie.dirty)return;let n=Ie.previewMesh.geometry;n.setDrawRange(0,Ie.vertexCount),n.attributes.position.needsUpdate=!0,n.attributes.normal.needsUpdate=!0,n.attributes.uv.needsUpdate=!0,n.attributes.color.needsUpdate=!0,Ie.dirty=!1,nt()}function Ih(n,e=0){let t=we[Qe];if(!t||t.locked||!Ie||Ie.skipDab)return!1;let i=$n[n.meshIndex];if(!i)return!1;let s=Zy(n,Ie,e),r=xa(i,s);if(!r)return!1;if(Ie.dabs.push(s),Ef(Ie,t,r),r.dispose(),Ut){let a={...s,p:[2*i.bounds.center[0]-s.p[0],s.p[1],s.p[2]],n:[-s.n[0],s.n[1],s.n[2]]},o=xa(i,a);o&&(Ie.dabs.push(a),Ef(Ie,t,o),o.dispose())}return!0}function Jy(n,e){let t=e.meshes||(e.mesh?[e.mesh]:[]),i=new Set,s=new Set;for(let r of t)n.group.remove(r),r.geometry&&i.add(r.geometry),Array.isArray(r.material)?r.material.forEach(a=>s.add(a)):r.material&&s.add(r.material);i.forEach(r=>r.dispose()),s.forEach(r=>r.dispose()),e.meshes=[],e.mesh=null}function np(n,e,t){if(!n||n.locked||!e.length)return!1;let i=[];for(let o=1;o<e.length;o++)i.push([e[o-1],e[o]]);if(i.length||i.push([e[0],e[0]]),Ut&&$n[0]){let o=$n[0].bounds.center[0];for(let[l,c]of i.slice())i.push([{p:[2*o-l.p[0],l.p[1],l.p[2]],n:l.n,r:l.r},{p:[2*o-c.p[0],c.p[1],c.p[2]],n:c.n,r:c.r}])}let s=(o,l)=>{let[c,u]=l,d=c.p[0],h=c.p[1],f=c.p[2],g=u.p[0]-d,x=u.p[1]-h,p=u.p[2]-f,m=o.p[0]-d,M=o.p[1]-h,T=o.p[2]-f,b=g*g+x*x+p*p,A=b>1e-14?(m*g+M*x+T*p)/b:0;A=Ne(A,0,1);let E=m-g*A,_=M-x*A,S=T-p*A;return Math.sqrt(E*E+_*_+S*S)},r=!1,a=[];for(let o of n.strokes){if(!o.dabs?.length){a.push(o);continue}let l=i.reduce((h,f)=>Math.max(h,f[0].r,f[1].r),.002),c=!1;for(let h of o.dabs){for(let f of i)if(s(h,f)<l+h.r*.75){c=!0;break}if(c)break}if(!c){a.push(o);continue}r=!0;let u=o.dabs.filter(h=>{for(let f of i)if(s(h,f)<l+h.r*.75)return!1;return!0}),d={...o,dabs:u,meshes:o.meshes||[],mesh:null};t&&t.set(o.id??d.id??a.length,d),u.length&&a.push(d)}return r&&(n.strokes=a),r}function Ky(n){let e=we[Qe];if(!e||!Kt)return!1;if(e.locked)return yt(Le("locked")),!1;let t=Pt[rn];if(t.key==="eyedropper"){let i=Ph(n.point,Math.max(ws(n,t)*1.5,.035));return i?(Ol(ep(i)),yt(Le("colorSampled"))):yt(gn==="ru"?"\u0417\u0434\u0435\u0441\u044C \u043D\u0435\u0442 \u043D\u0430\u043D\u0435\u0441\u0451\u043D\u043D\u043E\u0433\u043E \u043F\u0438\u0433\u043C\u0435\u043D\u0442\u0430":"No pigment sampled here"),_a(Df),!1}if(t.key==="eraser"){Ie={mode:"erase",touched:new Map,erasedSomething:!1,lastEraseHit:null};let i=ws(n,t);return Ie.lastEraseHit={p:[...n.point],n:[...n.normal],r:i},np(we[Qe],[Ie.lastEraseHit,Ie.lastEraseHit],Ie.touched)&&(Ie.erasedSomething=!0),Ie.touched.size&&jf(),Qi=!0,nn=n,!0}return Ie={mode:"paint",id:Nf++,tool:t.key,color:wi,opacity:Il,softness:Ti,flow:Ll,dabs:[],previewMeshes:[],previewMesh:null,vertexCount:0,vertexCapacity:0,dirty:!1,material:null,skipDab:!1},t.key==="blur"?(Ie.softness=Math.max(Ti,.88),Ch(n)):t.key==="blender"&&(Ie.softness=Math.max(Ti,.8),Ch(n)),Ie.material=Jf(Ie,e),Qi=!0,nn=n,Ih(n),Gh(),!0}function jy(n,e){if(!n)return 0;let t=py.set(e.point[0]-n.point[0],e.point[1]-n.point[1],e.point[2]-n.point[2]),i=my.set(e.normal[0],e.normal[1],e.normal[2]);return t.addScaledVector(i,-t.dot(i)),t.lengthSq()<1e-8?0:(t.normalize(),pf.setFromUnitVectors(Th,i),mf.copy(pf).invert(),t.applyQuaternion(mf),Math.atan2(t.y,t.x))}function Qy(n){if(!Qi||!Ie||!n)return;let e=Pt[rn];if(Ie.mode==="erase"){let d=ws(n,e),h={p:[...n.point],n:[...n.normal],r:d},f=Ie.lastEraseHit;Ie.lastEraseHit=h,np(we[Qe],f?[f,h]:[h,h],Ie.touched)&&(Ie.erasedSomething=!0),Ie.touched.size&&jf(),nn=n;return}if(!nn){Ih(n),nn=n;return}let t=n.point[0]-nn.point[0],i=n.point[1]-nn.point[1],s=n.point[2]-nn.point[2],r=Hh(),a=Math.hypot(t,i,s),o=ws(n,e),l=Math.max(.004,o*r.step*(1.35-(Ie.flow??Ll)*.85));if(a<l)return;let c=Ne(Math.ceil(a/l),1,r.maxInterpolatedHits),u=nn;for(let d=1;d<=c;d++){let h=n;if(d<c&&Number.isFinite(n.clientX)&&Number.isFinite(nn.clientX)){let g=d/c;if(h=zh(nn.clientX+(n.clientX-nn.clientX)*g,nn.clientY+(n.clientY-nn.clientY)*g),!h)continue}(e.key==="blur"||e.key==="blender")&&Ch(h);let f=jy(u,h);Ih(h,f),u=h}nn=n}function ip(){if(!Qi)return;let n=we[Qe];if(Ie?.mode==="paint")if(tp(),Ie.dabs.length){let e={id:Ie.id,tool:Ie.tool,color:Ie.color,opacity:Ie.opacity,softness:Ie.softness,flow:Ie.flow,dabs:Ie.dabs,meshes:Ie.previewMeshes};e.meshes.forEach((t,i)=>{t.name=`makeup-stroke-${e.id}-${i}`,t.renderOrder=20+we.indexOf(n)*1e4+n.group.children.indexOf(t)}),n.strokes.push(e),Sf(),D("#status").textContent=`${Le("strokeSaved")} \xB7 ${es(rn)}`}else{for(let e of Ie.previewMeshes)n.group.remove(e),e.geometry.dispose();Ie.previewMeshes.length=0,Ie.material.dispose()}else Ie?.mode==="erase"&&(Ie.touched?.size&&Qf(),Ie.erasedSomething&&(sn(),Sf()));Ie=null,Qi=!1,nn=null,nt()}Un.addEventListener("contextmenu",n=>n.preventDefault());function ev(n){return _n==="right"?n.button===2:_n==="middle"?n.button===1:_n==="space-left"?n.button===0&&Sa:!1}function tv(n){return vn==="middle"?n.button===1:vn==="shift-right"?n.button===2&&n.shiftKey:!1}function Mh(n){bs=n.pointerId;try{Un.setPointerCapture(n.pointerId)}catch(e){console.debug("Pointer capture unavailable:",e)}}function Gh(){da||(da=!0,requestAnimationFrame(()=>{da=!1,Wh(!1),tp()}))}function nv(n){let e=typeof n.getCoalescedEvents=="function"?n.getCoalescedEvents():[n];for(let t of e)Vt.push({clientX:t.clientX,clientY:t.clientY});if(Vt.length>64){let t=[],i=Math.ceil(Vt.length/64);for(let r=0;r<Vt.length;r+=i)t.push(Vt[r]);let s=Vt[Vt.length-1];t[t.length-1]!==s&&t.push(s),Vt=t}Gh()}function Wh(n=!1){if(da=!1,Jt!=="paint"||!Qi){Vt.length=0;return}if(n&&Vt.length>20){let s=Vt,r=[],a=(s.length-1)/19;for(let o=0;o<19;o++)r.push(s[Math.floor(o*a)]);r.push(s[s.length-1]),Vt=r}let e=Math.min(Vt.length,n?Vt.length:Hh().maxPointerSamples),t=performance.now(),i=null;for(let s=0;s<e;s++){let r=Vt[s],a=zh(r.clientX,r.clientY);a?(a.clientX=r.clientX,a.clientY=r.clientY,Qy(a),i=a):nn=null}ut.pointerMs+=performance.now()-t,ut.pointerSamples+=e,e&&Vt.splice(0,e),Vt.length&&Gh(),i&&kf(i)}function is(){Jt==="paint"&&(Wh(!0),ip()),Jt="idle",bs=null,Qi=!1,Dl=!1,Nl=!1,Ln=null,Vt.length=0,da=!1,nt()}function sp(n){n&&bs!==null&&n.pointerId!==bs||(Jt==="paint"&&(Wh(!0),ip()),Jt="idle",bs=null,Dl=!1,Nl=!1,Ln=null,Vt.length=0,nt())}Un.addEventListener("pointerdown",n=>{if(Jt!=="idle")return;if(tv(n)){n.preventDefault(),Jt="pan",Nl=!0,Ln={x:n.clientX,y:n.clientY},Mh(n);return}if(ev(n)){n.preventDefault(),Jt="rotate",Dl=!0,Ln={x:n.clientX,y:n.clientY},Mh(n);return}if(n.button!==0||_n==="space-left"&&Sa)return;let e=Zf(n);e&&(e.clientX=n.clientX,e.clientY=n.clientY,Ky(e)&&(n.preventDefault(),Jt="paint",Mh(n)))});Un.addEventListener("pointermove",n=>{if(!(bs!==null&&n.pointerId!==bs)){if(Jt==="paint")nv(n);else if(Jt==="rotate"&&Dl&&Ln)ft.rotation.y+=(n.clientX-Ln.x)*Ai,ft.rotation.x=Ne(ft.rotation.x+(n.clientY-Ln.y)*Ai,-.9,.9),Ln={x:n.clientX,y:n.clientY},Ts(),nt();else if(Jt==="pan"&&Nl&&Ln)Oy(n.clientX-Ln.x,n.clientY-Ln.y),Ln={x:n.clientX,y:n.clientY};else if(Jt==="idle"){let e=Zf(n);kf(e)}}});Un.addEventListener("pointerleave",()=>{Jt==="idle"&&ca()});Un.addEventListener("pointerup",sp);Un.addEventListener("pointercancel",sp);Un.addEventListener("lostpointercapture",()=>{Jt!=="idle"&&is()});Un.addEventListener("wheel",n=>{n.preventDefault(),Nn=Ne(Nn+n.deltaY*Ki,1.2,9),Nt.position.set(wt.x,wt.y,wt.z+Nn),Nt.lookAt(wt),Ts(),nt()},{passive:!1});window.addEventListener("blur",()=>{Sa=!1,is()});document.addEventListener("visibilitychange",()=>{document.hidden&&is()});document.addEventListener("keydown",n=>{if(n.code==="Space"&&!n.repeat){let e=n.target;e instanceof HTMLElement&&(["INPUT","TEXTAREA","SELECT"].includes(e.tagName)||e.isContentEditable)||(Sa=!0,_n==="space-left"&&n.preventDefault())}});document.addEventListener("keyup",n=>{n.code==="Space"&&(Sa=!1,Jt==="rotate"&&_n==="space-left"&&is())});function wf(){let n=D("#performanceDiagnostics");if(!n||n.hidden)return;let e=performance.now(),t=Math.max(1,e-ut.lastFpsAt),i=ut.renderFrames-ut.lastFrameCount;D("#perfFps").textContent=String(Math.round(i*1e3/t)),ut.lastFpsAt=e,ut.lastFrameCount=ut.renderFrames,D("#perfRaycast").textContent=`${ut.raycasts?(ut.raycastMs/ut.raycasts).toFixed(2):"0.00"} ms`,D("#perfDecal").textContent=`${ut.decals?(ut.decalMs/ut.decals).toFixed(2):"0.00"} ms`,D("#perfPointer").textContent=`${ut.pointerSamples?(ut.pointerMs/ut.pointerSamples).toFixed(2):"0.00"} ms`,D("#perfMeshes").textContent=String(we.reduce((r,a)=>r+a.group.children.length,0));let s=performance.memory?.usedJSHeapSize;D("#perfMemory").textContent=s?`${(s/1048576).toFixed(0)} MB`:"N/A",ut.raycastMs=0,ut.raycasts=0,ut.decalMs=0,ut.decals=0,ut.pointerMs=0,ut.pointerSamples=0}function iv(){let n=D("#performanceDiagnostics"),e=D("#performanceDiagnosticsToggle");!n||!e||(n.hidden=!n.hidden,n.hidden?(Rl&&clearInterval(Rl),Rl=null,e.setAttribute("aria-pressed","false")):(e.setAttribute("aria-pressed","true"),wf(),Rl=setInterval(wf,750)))}var sv=/^(mesh|meshes|history|historyIndex)$/;function rp(){return JSON.stringify(rv(),(n,e)=>sv.test(n)?void 0:e)}function rv(){return{format:"GrimStudioProject",version:5,name:D("#projectName").value||"Untitled Makeup",model:Ei,modelHash:ry,skinTone:Ji,lighting:{...Re},brushShape:Yn,modelSessions:Object.fromEntries([...Ss.entries(),[Ei,$f()]]),layers:we.map(n=>({name:n.name,visible:n.visible,locked:n.locked,opacity:n.opacity,strokes:n.strokes,legacyPaint:n.legacyPaint||null})),activeLayer:Qe,brush:{tool:rn,color:wi,size:ai,opacity:Il,softness:Ti,flow:Ll},symmetryEnabled:Ut,view:{rotationX:ft.rotation.x,rotationY:ft.rotation.y,zoom:Nn,target:[wt.x,wt.y,wt.z]},savedAt:new Date().toISOString()}}function un(){clearTimeout(Eh),Eh=setTimeout(ap,1800)}async function ap(){if(Qi||Jt==="paint"){Eh=setTimeout(ap,700);return}try{await window.grim.autosave(rp()),D("#status").textContent=Le("autosaved")}catch(n){console.warn("Autosave failed:",n),D("#status").textContent=Le("autosaveFailed")}}async function op(){try{let n=await window.grim.saveProject(rp());if(n?.error)throw new Error(n.error);n?.canceled||yt(Le("projectSaved"))}catch(n){yt(gn==="ru"?"\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430":"Project save failed"),console.error("Project save failed:",n)}}function lp(n){if(!n||n.format!=="GrimStudioProject"||!Array.isArray(n.layers)||n.layers.length>ma)throw new Error("Not a valid GrimStudio project");for(let e of n.layers){if(!e||typeof e!="object")throw new Error("Invalid layer");if(e.paint&&(!String(e.paint).startsWith("data:image/png;base64,")||String(e.paint).length>48e6))throw new Error("Invalid legacy paint image");if(e.strokes&&!Array.isArray(e.strokes))throw new Error("Invalid stroke collection")}return n}async function cp(){try{let n=await window.grim.openProject();if(n?.canceled)return;if(n?.error)throw new Error(n.error);let e=lp(JSON.parse(n.content));await hp(e),yt(Le("projectOpened"))}catch(n){yt(Le("invalidProject")),console.error(n)}}async function hp(n){if(D("#projectName").value=n.name||"Untitled Makeup",pr.some(i=>i.key===n.skinTone)&&(Ji=n.skinTone,D("#skinTones")?.querySelectorAll("button").forEach(s=>s.classList.toggle("active",s.title===pr.find(r=>r.key===Ji).name))),n.lighting&&typeof n.lighting=="object"&&bi({temp:n.lighting.temp,az:n.lighting.az,el:n.lighting.el,intensity:n.lighting.intensity,fill:n.lighting.fill??1,rim:n.lighting.rim??1,ambient:n.lighting.ambient??1,preset:n.lighting.preset},{fromPreset:n.lighting.preset&&n.lighting.preset!=="custom"}),typeof n.brushShape=="string"&&Nh.some(i=>i.key===n.brushShape)&&(Yn=n.brushShape==="default"?null:n.brushShape,Bl(),ns()),n.modelSessions&&typeof n.modelSessions=="object"){Ss.clear();for(let[i,s]of Object.entries(n.modelSessions))["male","female"].includes(i)&&Ss.set(i,s)}["male","female"].includes(n.model)&&n.model!==Ei&&(Ei=n.model,Kt=!1,qi=null,await kl(!0)),Lh(),we.forEach(i=>{ft.remove(i.group),_r(i.group),i.legacyTexture?.dispose()}),we=[],mr=1;for(let i of n.layers){let s=ts(String(i.name||`${Le("layerName")} ${mr}`).slice(0,80),i.legacyPaint||i.paint||null);s.visible=i.visible!==!1,s.locked=i.locked===!0,s.opacity=Ne(Number(i.opacity??1),0,1),s.strokes=Array.isArray(i.strokes)?i.strokes.map(Pl):[],we.push(s),yr(s)}we.length||we.push(ts(Le("baseLayer"))),Qe=Ne(Number(n.activeLayer)||0,0,we.length-1),Kt&&we.forEach(xr);let e=n.brush||{},t=Ne(Number(e.tool)||0,0,Pt.length-1);Pt[t]?.key==="symmetry"||Pt[t]?.key==="eyedropper"?_a(0):_a(t),Ol(/^#[0-9a-f]{6}$/i.test(e.color||"")?e.color:"#c72f58"),D("#size").value=String(Ne(Number(e.size)||24,2,140)),D("#size").dispatchEvent(new Event("input",{bubbles:!0})),D("#opacity").value=String(Math.round(Ne(Number(e.opacity??1),0,1)*100)),D("#opacity").dispatchEvent(new Event("input",{bubbles:!0})),D("#softness").value=String(Math.round(Ne(Number(e.softness??.72),0,1)*100)),D("#softness").dispatchEvent(new Event("input",{bubbles:!0})),D("#flow").value=String(Math.round(Ne(Number(e.flow??.75),0,1)*100)),D("#flow").dispatchEvent(new Event("input",{bubbles:!0})),Ut=n.symmetryEnabled===!0,D("#symmetryToggle").checked=Ut,n.view&&(oi(Number(n.view.rotationX)||0,Number(n.view.rotationY)||0,Number(n.view.zoom)||4.4),Array.isArray(n.view.target)&&n.view.target.length===3&&n.view.target.every(Number.isFinite)&&(wt.fromArray(n.view.target),Nt.position.set(wt.x,wt.y,wt.z+Nn),Nt.lookAt(wt),Ts())),sn(),we.some(i=>i.legacyPaint)&&yt(Le("legacyWarning")),nt()}async function up(){if(!Ht)return yt("Renderer unavailable");try{Ht.render(An,Nt);let n=Ht.domElement.toDataURL("image/png"),e=await window.grim.exportImage(n);if(e?.error)throw new Error(e.error);e?.canceled||yt(Le("exported"))}catch(n){yt(Le("exportFailed")),console.error(n)}}function av(){we.forEach(n=>{ft.remove(n.group),_r(n.group),n.legacyTexture?.dispose()}),we=[],mr=1,we.push(ts(Le("baseLayer"))),Qe=0,Kt&&xr(we[0]),sn()}function ov(){confirm(Le("newConfirm"))&&(av(),D("#projectName").value="Untitled Makeup",oi(0,Math.PI,4.4),un())}function Tf(n){Nn=Ne(Nn+n,1.2,9),Nt.position.set(wt.x,wt.y,wt.z+Nn),Nt.lookAt(wt),Ts(),nt()}function Sh(n){let e=Pt.findIndex(t=>t.key===n);e>=0&&_a(e)}function lv(){Ut=!Ut,D("#symmetryToggle").checked=Ut,Gt(),gr(),yt(Le(Ut?"symmetryOn":"symmetryOff"))}document.addEventListener("keydown",n=>{let e=n.target,t=e instanceof HTMLElement&&(["INPUT","TEXTAREA","SELECT"].includes(e.tagName)||e.isContentEditable);if(n.key==="Escape"&&D("#settingsDialog")&&!D("#settingsDialog").hidden){Fl();return}!t&&n.ctrlKey&&!n.shiftKey&&n.key.toLowerCase()==="s"?(n.preventDefault(),op()):!t&&n.ctrlKey&&n.key.toLowerCase()==="o"?(n.preventDefault(),cp()):!t&&n.ctrlKey&&!n.shiftKey&&n.key.toLowerCase()==="z"?(n.preventDefault(),Wf()):!t&&n.ctrlKey&&(n.key.toLowerCase()==="y"||n.key.toLowerCase()==="z"&&n.shiftKey)?(n.preventDefault(),Xf()):!t&&n.ctrlKey&&n.key.toLowerCase()==="e"?(n.preventDefault(),up()):!t&&n.key==="["?(ai=Ne(ai-2,2,140),D("#size").value=String(ai),D("#size").dispatchEvent(new Event("input",{bubbles:!0}))):!t&&n.key==="]"?(ai=Ne(ai+2,2,140),D("#size").value=String(ai),D("#size").dispatchEvent(new Event("input",{bubbles:!0}))):!t&&!n.ctrlKey&&(n.key==="+"||n.key==="=")?(n.preventDefault(),Tf(-.45)):!t&&!n.ctrlKey&&n.key==="-"?(n.preventDefault(),Tf(.45)):!t&&!n.ctrlKey&&n.key==="1"?(n.preventDefault(),oi(0,Math.PI,4.4)):!t&&!n.ctrlKey&&n.key==="2"?(n.preventDefault(),oi(0,Math.PI/2,4.4)):!t&&!n.ctrlKey&&n.key==="3"?(n.preventDefault(),oi(0,Math.PI*1.5,4.4)):!t&&!n.ctrlKey&&n.key==="4"?(n.preventDefault(),oi(0,0,4.4)):!t&&!n.ctrlKey&&n.key.toLowerCase()==="b"?Sh("brush"):!t&&!n.ctrlKey&&n.key.toLowerCase()==="e"?Sh("eraser"):!t&&!n.ctrlKey&&n.key.toLowerCase()==="i"?Sh("eyedropper"):!t&&!n.ctrlKey&&n.key.toLowerCase()==="m"?lv():!t&&!n.ctrlKey&&n.key.toLowerCase()==="g"?ji.classList.toggle("grid-on"):!t&&!n.ctrlKey&&n.key.toLowerCase()==="l"?Hf():!t&&n.key==="Tab"&&(n.preventDefault(),document.body.classList.toggle("zen"))});we.push(ts(Le("baseLayer")));Ul();Ff();Of();Fh();Bf();Sy();Oh();Bl();ns();sn();gr();D("#toolSettingsLabel").textContent=`${es(rn).toUpperCase()} ${Le("brushSettings")}`;ha("Starting",Le("preparing"));nt();window.grim.readAutosave().then(async n=>{if(n)try{let e=lp(JSON.parse(n));await hp(e),yt(gn==="ru"?"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u0430\u0432\u0442\u043E\u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435":"Autosave recovered")}catch(e){console.warn("Autosave recovery skipped:",e)}}).catch(n=>console.warn("Autosave read failed:",n));requestAnimationFrame(()=>kl());})();
