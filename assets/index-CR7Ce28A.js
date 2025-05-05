import{r as ea,g as ta,a as na}from"./vendor-BtP0CW_r.js";function Ei(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var Bt={exports:{}},Ue={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qn;function Ai(){if(Qn)return Ue;Qn=1;var e=ea(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(s,c,l){var f,u={},p=null,m=null;l!==void 0&&(p=""+l),c.key!==void 0&&(p=""+c.key),c.ref!==void 0&&(m=c.ref);for(f in c)r.call(c,f)&&!i.hasOwnProperty(f)&&(u[f]=c[f]);if(s&&s.defaultProps)for(f in c=s.defaultProps,c)u[f]===void 0&&(u[f]=c[f]);return{$$typeof:t,type:s,key:p,ref:m,props:u,_owner:a.current}}return Ue.Fragment=n,Ue.jsx=o,Ue.jsxs=o,Ue}var Zn;function Ii(){return Zn||(Zn=1,Bt.exports=Ai()),Bt.exports}var d=Ii(),y=ea();const oe=ta(y),Pi=Ei({__proto__:null,default:oe},[y]);var ct={},er;function ji(){if(er)return ct;er=1;var e=na();return ct.createRoot=e.createRoot,ct.hydrateRoot=e.hydrateRoot,ct}var Oi=ji(),L=function(){return L=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},L.apply(this,arguments)};function xt(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var O="-ms-",He="-moz-",P="-webkit-",ra="comm",It="rule",Nn="decl",Ni="@import",aa="@keyframes",Ri="@layer",ia=Math.abs,Rn=String.fromCharCode,an=Object.assign;function _i(e,t){return M(e,0)^45?(((t<<2^M(e,0))<<2^M(e,1))<<2^M(e,2))<<2^M(e,3):0}function oa(e){return e.trim()}function J(e,t){return(e=t.exec(e))?e[0]:e}function C(e,t,n){return e.replace(t,n)}function dt(e,t,n){return e.indexOf(t,n)}function M(e,t){return e.charCodeAt(t)|0}function Pe(e,t,n){return e.slice(t,n)}function Y(e){return e.length}function sa(e){return e.length}function We(e,t){return t.push(e),e}function Ti(e,t){return e.map(t).join("")}function tr(e,t){return e.filter(function(n){return!J(n,t)})}var Pt=1,je=1,ca=0,U=0,_=0,Me="";function jt(e,t,n,r,a,i,o,s){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:Pt,column:je,length:o,return:"",siblings:s}}function re(e,t){return an(jt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Se(e){for(;e.root;)e=re(e.root,{children:[e]});We(e,e.siblings)}function Mi(){return _}function Li(){return _=U>0?M(Me,--U):0,je--,_===10&&(je=1,Pt--),_}function B(){return _=U<ca?M(Me,U++):0,je++,_===10&&(je=1,Pt++),_}function me(){return M(Me,U)}function pt(){return U}function Ot(e,t){return Pe(Me,e,t)}function on(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fi(e){return Pt=je=1,ca=Y(Me=e),U=0,[]}function Di(e){return Me="",e}function Yt(e){return oa(Ot(U-1,sn(e===91?e+2:e===40?e+1:e)))}function zi(e){for(;(_=me())&&_<33;)B();return on(e)>2||on(_)>3?"":" "}function $i(e,t){for(;--t&&B()&&!(_<48||_>102||_>57&&_<65||_>70&&_<97););return Ot(e,pt()+(t<6&&me()==32&&B()==32))}function sn(e){for(;B();)switch(_){case e:return U;case 34:case 39:e!==34&&e!==39&&sn(_);break;case 40:e===41&&sn(e);break;case 92:B();break}return U}function Ui(e,t){for(;B()&&e+_!==57;)if(e+_===84&&me()===47)break;return"/*"+Ot(t,U-1)+"*"+Rn(e===47?e:B())}function Wi(e){for(;!on(me());)B();return Ot(e,U)}function Bi(e){return Di(mt("",null,null,null,[""],e=Fi(e),0,[0],e))}function mt(e,t,n,r,a,i,o,s,c){for(var l=0,f=0,u=o,p=0,m=0,x=0,w=1,h=1,g=1,b=0,S="",E=a,I=i,j=r,k=S;h;)switch(x=b,b=B()){case 40:if(x!=108&&M(k,u-1)==58){dt(k+=C(Yt(b),"&","&\f"),"&\f",ia(l?s[l-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:k+=Yt(b);break;case 9:case 10:case 13:case 32:k+=zi(x);break;case 92:k+=$i(pt()-1,7);continue;case 47:switch(me()){case 42:case 47:We(Yi(Ui(B(),pt()),t,n,c),c);break;default:k+="/"}break;case 123*w:s[l++]=Y(k)*g;case 125*w:case 59:case 0:switch(b){case 0:case 125:h=0;case 59+f:g==-1&&(k=C(k,/\f/g,"")),m>0&&Y(k)-u&&We(m>32?rr(k+";",r,n,u-1,c):rr(C(k," ","")+";",r,n,u-2,c),c);break;case 59:k+=";";default:if(We(j=nr(k,t,n,l,f,a,s,S,E=[],I=[],u,i),i),b===123)if(f===0)mt(k,t,j,j,E,i,u,s,I);else switch(p===99&&M(k,3)===110?100:p){case 100:case 108:case 109:case 115:mt(e,j,j,r&&We(nr(e,j,j,0,0,a,s,S,a,E=[],u,I),I),a,I,u,s,r?E:I);break;default:mt(k,j,j,j,[""],I,0,s,I)}}l=f=m=0,w=g=1,S=k="",u=o;break;case 58:u=1+Y(k),m=x;default:if(w<1){if(b==123)--w;else if(b==125&&w++==0&&Li()==125)continue}switch(k+=Rn(b),b*w){case 38:g=f>0?1:(k+="\f",-1);break;case 44:s[l++]=(Y(k)-1)*g,g=1;break;case 64:me()===45&&(k+=Yt(B())),p=me(),f=u=Y(S=k+=Wi(pt())),b++;break;case 45:x===45&&Y(k)==2&&(w=0)}}return i}function nr(e,t,n,r,a,i,o,s,c,l,f,u){for(var p=a-1,m=a===0?i:[""],x=sa(m),w=0,h=0,g=0;w<r;++w)for(var b=0,S=Pe(e,p+1,p=ia(h=o[w])),E=e;b<x;++b)(E=oa(h>0?m[b]+" "+S:C(S,/&\f/g,m[b])))&&(c[g++]=E);return jt(e,t,n,a===0?It:s,c,l,f,u)}function Yi(e,t,n,r){return jt(e,t,n,ra,Rn(Mi()),Pe(e,2,-2),0,r)}function rr(e,t,n,r,a){return jt(e,t,n,Nn,Pe(e,0,r),Pe(e,r+1,-1),r,a)}function la(e,t,n){switch(_i(e,t)){case 5103:return P+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return P+e+e;case 4789:return He+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return P+e+He+e+O+e+e;case 5936:switch(M(e,t+11)){case 114:return P+e+O+C(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return P+e+O+C(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return P+e+O+C(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return P+e+O+e+e;case 6165:return P+e+O+"flex-"+e+e;case 5187:return P+e+C(e,/(\w+).+(:[^]+)/,P+"box-$1$2"+O+"flex-$1$2")+e;case 5443:return P+e+O+"flex-item-"+C(e,/flex-|-self/g,"")+(J(e,/flex-|baseline/)?"":O+"grid-row-"+C(e,/flex-|-self/g,""))+e;case 4675:return P+e+O+"flex-line-pack"+C(e,/align-content|flex-|-self/g,"")+e;case 5548:return P+e+O+C(e,"shrink","negative")+e;case 5292:return P+e+O+C(e,"basis","preferred-size")+e;case 6060:return P+"box-"+C(e,"-grow","")+P+e+O+C(e,"grow","positive")+e;case 4554:return P+C(e,/([^-])(transform)/g,"$1"+P+"$2")+e;case 6187:return C(C(C(e,/(zoom-|grab)/,P+"$1"),/(image-set)/,P+"$1"),e,"")+e;case 5495:case 3959:return C(e,/(image-set\([^]*)/,P+"$1$`$1");case 4968:return C(C(e,/(.+:)(flex-)?(.*)/,P+"box-pack:$3"+O+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+P+e+e;case 4200:if(!J(e,/flex-|baseline/))return O+"grid-column-align"+Pe(e,t)+e;break;case 2592:case 3360:return O+C(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,a){return t=a,J(r.props,/grid-\w+-end/)})?~dt(e+(n=n[t].value),"span",0)?e:O+C(e,"-start","")+e+O+"grid-row-span:"+(~dt(n,"span",0)?J(n,/\d+/):+J(n,/\d+/)-+J(e,/\d+/))+";":O+C(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return J(r.props,/grid-\w+-start/)})?e:O+C(C(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return C(e,/(.+)-inline(.+)/,P+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Y(e)-1-t>6)switch(M(e,t+1)){case 109:if(M(e,t+4)!==45)break;case 102:return C(e,/(.+:)(.+)-([^]+)/,"$1"+P+"$2-$3$1"+He+(M(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~dt(e,"stretch",0)?la(C(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return C(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,i,o,s,c,l){return O+a+":"+i+l+(o?O+a+"-span:"+(s?c:+c-+i)+l:"")+e});case 4949:if(M(e,t+6)===121)return C(e,":",":"+P)+e;break;case 6444:switch(M(e,M(e,14)===45?18:11)){case 120:return C(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+P+(M(e,14)===45?"inline-":"")+"box$3$1"+P+"$2$3$1"+O+"$2box$3")+e;case 100:return C(e,":",":"+O)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return C(e,"scroll-","scroll-snap-")+e}return e}function wt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Hi(e,t,n,r){switch(e.type){case Ri:if(e.children.length)break;case Ni:case Nn:return e.return=e.return||e.value;case ra:return"";case aa:return e.return=e.value+"{"+wt(e.children,r)+"}";case It:if(!Y(e.value=e.props.join(",")))return""}return Y(n=wt(e.children,r))?e.return=e.value+"{"+n+"}":""}function Gi(e){var t=sa(e);return function(n,r,a,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,a,i)||"";return o}}function Vi(e){return function(t){t.root||(t=t.return)&&e(t)}}function qi(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Nn:e.return=la(e.value,e.length,n);return;case aa:return wt([re(e,{value:C(e.value,"@","@"+P)})],r);case It:if(e.length)return Ti(n=e.props,function(a){switch(J(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Se(re(e,{props:[C(a,/:(read-\w+)/,":"+He+"$1")]})),Se(re(e,{props:[a]})),an(e,{props:tr(n,r)});break;case"::placeholder":Se(re(e,{props:[C(a,/:(plac\w+)/,":"+P+"input-$1")]})),Se(re(e,{props:[C(a,/:(plac\w+)/,":"+He+"$1")]})),Se(re(e,{props:[C(a,/:(plac\w+)/,O+"input-$1")]})),Se(re(e,{props:[a]})),an(e,{props:tr(n,r)});break}return""})}}var Xi={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},F={},Oe=typeof process<"u"&&F!==void 0&&(F.REACT_APP_SC_ATTR||F.SC_ATTR)||"data-styled",fa="active",ua="data-styled-version",Nt="6.1.13",_n=`/*!sc*/
`,St=typeof window<"u"&&"HTMLElement"in window,Ji=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&F!==void 0&&F.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&F.REACT_APP_SC_DISABLE_SPEEDY!==""?F.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&F.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&F!==void 0&&F.SC_DISABLE_SPEEDY!==void 0&&F.SC_DISABLE_SPEEDY!==""&&F.SC_DISABLE_SPEEDY!=="false"&&F.SC_DISABLE_SPEEDY),Rt=Object.freeze([]),Ne=Object.freeze({});function Ki(e,t,n){return n===void 0&&(n=Ne),e.theme!==n.theme&&e.theme||t||n.theme}var da=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Qi=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zi=/(^-|-$)/g;function ar(e){return e.replace(Qi,"-").replace(Zi,"")}var eo=/(a)(d)/gi,lt=52,ir=function(e){return String.fromCharCode(e+(e>25?39:97))};function cn(e){var t,n="";for(t=Math.abs(e);t>lt;t=t/lt|0)n=ir(t%lt)+n;return(ir(t%lt)+n).replace(eo,"$1-$2")}var Ht,pa=5381,Ce=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ma=function(e){return Ce(pa,e)};function to(e){return cn(ma(e)>>>0)}function no(e){return e.displayName||e.name||"Component"}function Gt(e){return typeof e=="string"&&!0}var ha=typeof Symbol=="function"&&Symbol.for,ga=ha?Symbol.for("react.memo"):60115,ro=ha?Symbol.for("react.forward_ref"):60112,ao={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},io={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ya={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},oo=((Ht={})[ro]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ht[ga]=ya,Ht);function or(e){return("type"in(t=e)&&t.type.$$typeof)===ga?ya:"$$typeof"in e?oo[e.$$typeof]:ao;var t}var so=Object.defineProperty,co=Object.getOwnPropertyNames,sr=Object.getOwnPropertySymbols,lo=Object.getOwnPropertyDescriptor,fo=Object.getPrototypeOf,cr=Object.prototype;function va(e,t,n){if(typeof t!="string"){if(cr){var r=fo(t);r&&r!==cr&&va(e,r,n)}var a=co(t);sr&&(a=a.concat(sr(t)));for(var i=or(e),o=or(t),s=0;s<a.length;++s){var c=a[s];if(!(c in io||n&&n[c]||o&&c in o||i&&c in i)){var l=lo(t,c);try{so(e,c,l)}catch{}}}}return e}function Re(e){return typeof e=="function"}function Tn(e){return typeof e=="object"&&"styledComponentId"in e}function pe(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function lr(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function qe(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ln(e,t,n){if(n===void 0&&(n=!1),!n&&!qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ln(e[r],t[r]);else if(qe(t))for(var r in t)e[r]=ln(e[r],t[r]);return e}function Mn(e,t){Object.defineProperty(e,"toString",{value:t})}function et(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var uo=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,i=a;t>=i;)if((i<<=1)<0)throw et(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=a;o<i;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),c=(o=0,n.length);o<c;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),a=r+n;this.groupSizes[t]=0;for(var i=r;i<a;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],a=this.indexOfGroup(t),i=a+r,o=a;o<i;o++)n+="".concat(this.tag.getRule(o)).concat(_n);return n},e}(),ht=new Map,kt=new Map,gt=1,ft=function(e){if(ht.has(e))return ht.get(e);for(;kt.has(gt);)gt++;var t=gt++;return ht.set(e,t),kt.set(t,e),t},po=function(e,t){gt=t+1,ht.set(e,t),kt.set(t,e)},mo="style[".concat(Oe,"][").concat(ua,'="').concat(Nt,'"]'),ho=new RegExp("^".concat(Oe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),go=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},yo=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(_n),a=[],i=0,o=r.length;i<o;i++){var s=r[i].trim();if(s){var c=s.match(ho);if(c){var l=0|parseInt(c[1],10),f=c[2];l!==0&&(po(f,l),go(e,f,c[3]),e.getTag().insertRules(l,a)),a.length=0}else a.push(s)}}},fr=function(e){for(var t=document.querySelectorAll(mo),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(Oe)!==fa&&(yo(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function vo(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ba=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(s){var c=Array.from(s.querySelectorAll("style[".concat(Oe,"]")));return c[c.length-1]}(n),i=a!==void 0?a.nextSibling:null;r.setAttribute(Oe,fa),r.setAttribute(ua,Nt);var o=vo();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},bo=function(){function e(t){this.element=ba(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,a=0,i=r.length;a<i;a++){var o=r[a];if(o.ownerNode===n)return o}throw et(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),xo=function(){function e(t){this.element=ba(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),wo=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ur=St,So={isServer:!St,useCSSOMInjection:!Ji},xa=function(){function e(t,n,r){t===void 0&&(t=Ne),n===void 0&&(n={});var a=this;this.options=L(L({},So),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&St&&ur&&(ur=!1,fr(this)),Mn(this,function(){return function(i){for(var o=i.getTag(),s=o.length,c="",l=function(u){var p=function(g){return kt.get(g)}(u);if(p===void 0)return"continue";var m=i.names.get(p),x=o.getGroup(u);if(m===void 0||!m.size||x.length===0)return"continue";var w="".concat(Oe,".g").concat(u,'[id="').concat(p,'"]'),h="";m!==void 0&&m.forEach(function(g){g.length>0&&(h+="".concat(g,","))}),c+="".concat(x).concat(w,'{content:"').concat(h,'"}').concat(_n)},f=0;f<s;f++)l(f);return c}(a)})}return e.registerId=function(t){return ft(t)},e.prototype.rehydrate=function(){!this.server&&St&&fr(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(L(L({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,a=n.target;return n.isServer?new wo(a):r?new bo(a):new xo(a)}(this.options),new uo(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ft(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ft(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ft(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ko=/&/g,Co=/^\s*\/\/.*$/gm;function wa(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=wa(n.children,t)),n})}function Eo(e){var t,n,r,a=Ne,i=a.options,o=i===void 0?Ne:i,s=a.plugins,c=s===void 0?Rt:s,l=function(p,m,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):p},f=c.slice();f.push(function(p){p.type===It&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(ko,n).replace(r,l))}),o.prefix&&f.push(qi),f.push(Hi);var u=function(p,m,x,w){m===void 0&&(m=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var h=p.replace(Co,""),g=Bi(x||m?"".concat(x," ").concat(m," { ").concat(h," }"):h);o.namespace&&(g=wa(g,o.namespace));var b=[];return wt(g,Gi(f.concat(Vi(function(S){return b.push(S)})))),b};return u.hash=c.length?c.reduce(function(p,m){return m.name||et(15),Ce(p,m.name)},pa).toString():"",u}var Ao=new xa,fn=Eo(),Sa=oe.createContext({shouldForwardProp:void 0,styleSheet:Ao,stylis:fn});Sa.Consumer;oe.createContext(void 0);function dr(){return y.useContext(Sa)}var Io=function(){function e(t,n){var r=this;this.inject=function(a,i){i===void 0&&(i=fn);var o=r.name+i.hash;a.hasNameForId(r.id,o)||a.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Mn(this,function(){throw et(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=fn),this.name+t.hash},e}(),Po=function(e){return e>="A"&&e<="Z"};function pr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Po(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ka=function(e){return e==null||e===!1||e===""},Ca=function(e){var t,n,r=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!ka(i)&&(Array.isArray(i)&&i.isCss||Re(i)?r.push("".concat(pr(a),":"),i,";"):qe(i)?r.push.apply(r,xt(xt(["".concat(a," {")],Ca(i),!1),["}"],!1)):r.push("".concat(pr(a),": ").concat((t=a,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Xi||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function he(e,t,n,r){if(ka(e))return[];if(Tn(e))return[".".concat(e.styledComponentId)];if(Re(e)){if(!Re(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var a=e(t);return he(a,t,n,r)}var i;return e instanceof Io?n?(e.inject(n,r),[e.getName(r)]):[e]:qe(e)?Ca(e):Array.isArray(e)?Array.prototype.concat.apply(Rt,e.map(function(o){return he(o,t,n,r)})):[e.toString()]}function jo(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Re(n)&&!Tn(n))return!1}return!0}var Oo=ma(Nt),No=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&jo(t),this.componentId=n,this.baseHash=Ce(Oo,n),this.baseStyle=r,xa.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=pe(a,this.staticRulesId);else{var i=lr(he(this.rules,t,n,r)),o=cn(Ce(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=r(i,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}a=pe(a,o),this.staticRulesId=o}else{for(var c=Ce(this.baseHash,r.hash),l="",f=0;f<this.rules.length;f++){var u=this.rules[f];if(typeof u=="string")l+=u;else if(u){var p=lr(he(u,t,n,r));c=Ce(c,p+f),l+=p}}if(l){var m=cn(c>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(l,".".concat(m),void 0,this.componentId)),a=pe(a,m)}}return a},e}(),Ea=oe.createContext(void 0);Ea.Consumer;var Vt={};function Ro(e,t,n){var r=Tn(e),a=e,i=!Gt(e),o=t.attrs,s=o===void 0?Rt:o,c=t.componentId,l=c===void 0?function(E,I){var j=typeof E!="string"?"sc":ar(E);Vt[j]=(Vt[j]||0)+1;var k="".concat(j,"-").concat(to(Nt+j+Vt[j]));return I?"".concat(I,"-").concat(k):k}(t.displayName,t.parentComponentId):c,f=t.displayName,u=f===void 0?function(E){return Gt(E)?"styled.".concat(E):"Styled(".concat(no(E),")")}(e):f,p=t.displayName&&t.componentId?"".concat(ar(t.displayName),"-").concat(t.componentId):t.componentId||l,m=r&&a.attrs?a.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&a.shouldForwardProp){var w=a.shouldForwardProp;if(t.shouldForwardProp){var h=t.shouldForwardProp;x=function(E,I){return w(E,I)&&h(E,I)}}else x=w}var g=new No(n,p,r?a.componentStyle:void 0);function b(E,I){return function(j,k,fe){var rt=j.attrs,vi=j.componentStyle,bi=j.defaultProps,xi=j.foldedComponentIds,wi=j.styledComponentId,Si=j.target,ki=oe.useContext(Ea),Ci=dr(),$t=j.shouldForwardProp||Ci.shouldForwardProp,Jn=Ki(k,ki,bi)||Ne,X=function(it,ze,ot){for(var $e,ue=L(L({},ze),{className:void 0,theme:ot}),Wt=0;Wt<it.length;Wt+=1){var st=Re($e=it[Wt])?$e(ue):$e;for(var te in st)ue[te]=te==="className"?pe(ue[te],st[te]):te==="style"?L(L({},ue[te]),st[te]):st[te]}return ze.className&&(ue.className=pe(ue.className,ze.className)),ue}(rt,k,Jn),at=X.as||Si,De={};for(var ee in X)X[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&X.theme===Jn||(ee==="forwardedAs"?De.as=X.forwardedAs:$t&&!$t(ee,at)||(De[ee]=X[ee]));var Kn=function(it,ze){var ot=dr(),$e=it.generateAndInjectStyles(ze,ot.styleSheet,ot.stylis);return $e}(vi,X),Ut=pe(xi,wi);return Kn&&(Ut+=" "+Kn),X.className&&(Ut+=" "+X.className),De[Gt(at)&&!da.has(at)?"class":"className"]=Ut,De.ref=fe,y.createElement(at,De)}(S,E,I)}b.displayName=u;var S=oe.forwardRef(b);return S.attrs=m,S.componentStyle=g,S.displayName=u,S.shouldForwardProp=x,S.foldedComponentIds=r?pe(a.foldedComponentIds,a.styledComponentId):"",S.styledComponentId=p,S.target=r?a.target:e,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(I){for(var j=[],k=1;k<arguments.length;k++)j[k-1]=arguments[k];for(var fe=0,rt=j;fe<rt.length;fe++)ln(I,rt[fe],!0);return I}({},a.defaultProps,E):E}}),Mn(S,function(){return".".concat(S.styledComponentId)}),i&&va(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function mr(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var hr=function(e){return Object.assign(e,{isCss:!0})};function _o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Re(e)||qe(e))return hr(he(mr(Rt,xt([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?he(r):hr(he(mr(r,t)))}function un(e,t,n){if(n===void 0&&(n=Ne),!t)throw et(1,t);var r=function(a){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,_o.apply(void 0,xt([a],i,!1)))};return r.attrs=function(a){return un(e,t,L(L({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return un(e,t,L(L({},n),a))},r}var Aa=function(e){return un(Ro,e)},W=Aa;da.forEach(function(e){W[e]=Aa(e)});const To=W.div`
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: ${({isVisible:e})=>e?"translateY(0)":"translateY(-100%)"};
  z-index: 1000;

  @media (max-width: 966px) {
    padding: 10px;
  }
`,Mo=W.h1`
  font-size: 1.5em;
  margin: 0;
`,Lo=W.div`
  display: flex;
  gap: 15px;

  @media (max-width: 966px) {
    display: none;
  }
`,ke=W.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  text-decoration: none;
  margin: 0 30px;

  &:hover {
    color: #35bcbf;
  }
`,Fo=W.button`
  display: none;
  font-size: 1.5em;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;

  @media (max-width: 966px) {
    display: block;
  }
`,Do=W.div`
  display: ${({isOpen:e})=>e?"flex":"none"};
  margin-top: 31px;
  padding: 30px 0;
  flex-direction: column;
  gap: 30px;
  position: absolute;
  box-sizing: border-box;
  top: 50px;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 20px;
  z-index: 999;

  @media (min-width: 967px) {
    display: none;
  }
`;na();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xe(){return Xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xe.apply(this,arguments)}var ae;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ae||(ae={}));const gr="popstate";function zo(e){e===void 0&&(e={});function t(a,i){let{pathname:o="/",search:s="",hash:c=""}=we(a.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),dn("",{pathname:o,search:s,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(a,i){let o=a.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let c=a.location.href,l=c.indexOf("#");s=l===-1?c:c.slice(0,l)}return s+"#"+(typeof i=="string"?i:Ia(i))}function r(a,i){Ln(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Uo(t,n,r,e)}function T(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ln(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $o(){return Math.random().toString(36).substr(2,8)}function yr(e,t){return{usr:e.state,key:e.key,idx:t}}function dn(e,t,n,r){return n===void 0&&(n=null),Xe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?we(t):t,{state:n,key:t&&t.key||r||$o()})}function Ia(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function we(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Uo(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,s=ae.Pop,c=null,l=f();l==null&&(l=0,o.replaceState(Xe({},o.state,{idx:l}),""));function f(){return(o.state||{idx:null}).idx}function u(){s=ae.Pop;let h=f(),g=h==null?null:h-l;l=h,c&&c({action:s,location:w.location,delta:g})}function p(h,g){s=ae.Push;let b=dn(w.location,h,g);n&&n(b,h),l=f()+1;let S=yr(b,l),E=w.createHref(b);try{o.pushState(S,"",E)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;a.location.assign(E)}i&&c&&c({action:s,location:w.location,delta:1})}function m(h,g){s=ae.Replace;let b=dn(w.location,h,g);n&&n(b,h),l=f();let S=yr(b,l),E=w.createHref(b);o.replaceState(S,"",E),i&&c&&c({action:s,location:w.location,delta:0})}function x(h){let g=a.location.origin!=="null"?a.location.origin:a.location.href,b=typeof h=="string"?h:Ia(h);return b=b.replace(/ $/,"%20"),T(g,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,g)}let w={get action(){return s},get location(){return e(a,o)},listen(h){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(gr,u),c=h,()=>{a.removeEventListener(gr,u),c=null}},createHref(h){return t(a,h)},createURL:x,encodeLocation(h){let g=x(h);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:m,go(h){return o.go(h)}};return w}var vr;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vr||(vr={}));function Wo(e,t,n){return n===void 0&&(n="/"),Bo(e,t,n)}function Bo(e,t,n,r){let a=typeof t=="string"?we(t):t,i=Oa(a.pathname||"/",n);if(i==null)return null;let o=Pa(e);Yo(o);let s=null;for(let c=0;s==null&&c<o.length;++c){let l=ns(i);s=Zo(o[c],l)}return s}function Pa(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,s)=>{let c={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(T(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let l=ge([r,c.relativePath]),f=n.concat(c);i.children&&i.children.length>0&&(T(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),Pa(i.children,t,f,l)),!(i.path==null&&!i.index)&&t.push({path:l,score:Ko(l,i.index),routesMeta:f})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))a(i,o);else for(let c of ja(i.path))a(i,o,c)}),t}function ja(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=ja(r.join("/")),s=[];return s.push(...o.map(c=>c===""?i:[i,c].join("/"))),a&&s.push(...o),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function Yo(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Qo(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ho=/^:[\w-]+$/,Go=3,Vo=2,qo=1,Xo=10,Jo=-2,br=e=>e==="*";function Ko(e,t){let n=e.split("/"),r=n.length;return n.some(br)&&(r+=Jo),t&&(r+=Vo),n.filter(a=>!br(a)).reduce((a,i)=>a+(Ho.test(i)?Go:i===""?qo:Xo),r)}function Qo(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function Zo(e,t,n){let{routesMeta:r}=e,a={},i="/",o=[];for(let s=0;s<r.length;++s){let c=r[s],l=s===r.length-1,f=i==="/"?t:t.slice(i.length)||"/",u=es({path:c.relativePath,caseSensitive:c.caseSensitive,end:l},f),p=c.route;if(!u)return null;Object.assign(a,u.params),o.push({params:a,pathname:ge([i,u.pathname]),pathnameBase:cs(ge([i,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(i=ge([i,u.pathnameBase]))}return o}function es(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ts(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((l,f,u)=>{let{paramName:p,isOptional:m}=f;if(p==="*"){let w=s[u]||"";o=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const x=s[u];return m&&!x?l[p]=void 0:l[p]=(x||"").replace(/%2F/g,"/"),l},{}),pathname:i,pathnameBase:o,pattern:e}}function ts(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ln(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function ns(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ln(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Oa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function rs(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?we(e):e;return{pathname:n?n.startsWith("/")?n:as(n,t):t,search:ls(r),hash:fs(a)}}function as(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function qt(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function is(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function os(e,t){let n=is(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ss(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=we(e):(a=Xe({},e),T(!a.pathname||!a.pathname.includes("?"),qt("?","pathname","search",a)),T(!a.pathname||!a.pathname.includes("#"),qt("#","pathname","hash",a)),T(!a.search||!a.search.includes("#"),qt("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,s;if(o==null)s=n;else{let u=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),u-=1;a.pathname=p.join("/")}s=u>=0?t[u]:"/"}let c=rs(a,s),l=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(l||f)&&(c.pathname+="/"),c}const ge=e=>e.join("/").replace(/\/\/+/g,"/"),cs=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ls=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,fs=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function us(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Na=["post","put","patch","delete"];new Set(Na);const ds=["get",...Na];new Set(ds);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Je(){return Je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Je.apply(this,arguments)}const Fn=y.createContext(null),ps=y.createContext(null),_t=y.createContext(null),Tt=y.createContext(null),Le=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Ra=y.createContext(null);function Mt(){return y.useContext(Tt)!=null}function _a(){return Mt()||T(!1),y.useContext(Tt).location}function Ta(e){y.useContext(_t).static||y.useLayoutEffect(e)}function ms(){let{isDataRoute:e}=y.useContext(Le);return e?Is():hs()}function hs(){Mt()||T(!1);let e=y.useContext(Fn),{basename:t,future:n,navigator:r}=y.useContext(_t),{matches:a}=y.useContext(Le),{pathname:i}=_a(),o=JSON.stringify(os(a,n.v7_relativeSplatPath)),s=y.useRef(!1);return Ta(()=>{s.current=!0}),y.useCallback(function(l,f){if(f===void 0&&(f={}),!s.current)return;if(typeof l=="number"){r.go(l);return}let u=ss(l,JSON.parse(o),i,f.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:ge([t,u.pathname])),(f.replace?r.replace:r.push)(u,f.state,f)},[t,r,o,i,e])}function gs(e,t){return ys(e,t)}function ys(e,t,n,r){Mt()||T(!1);let{navigator:a,static:i}=y.useContext(_t),{matches:o}=y.useContext(Le),s=o[o.length-1],c=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let f=_a(),u;if(t){var p;let g=typeof t=="string"?we(t):t;l==="/"||(p=g.pathname)!=null&&p.startsWith(l)||T(!1),u=g}else u=f;let m=u.pathname||"/",x=m;if(l!=="/"){let g=l.replace(/^\//,"").split("/");x="/"+m.replace(/^\//,"").split("/").slice(g.length).join("/")}let w=Wo(e,{pathname:x}),h=Ss(w&&w.map(g=>Object.assign({},g,{params:Object.assign({},c,g.params),pathname:ge([l,a.encodeLocation?a.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:ge([l,a.encodeLocation?a.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),o,n,r);return t&&h?y.createElement(Tt.Provider,{value:{location:Je({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ae.Pop}},h):h}function vs(){let e=As(),t=us(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:a},n):null,null)}const bs=y.createElement(vs,null);class xs extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(Le.Provider,{value:this.props.routeContext},y.createElement(Ra.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ws(e){let{routeContext:t,match:n,children:r}=e,a=y.useContext(Fn);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Le.Provider,{value:t},r)}function Ss(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(a=n)==null?void 0:a.errors;if(s!=null){let f=o.findIndex(u=>u.route.id&&(s==null?void 0:s[u.route.id])!==void 0);f>=0||T(!1),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,l=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let u=o[f];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=f),u.route.id){let{loaderData:p,errors:m}=n,x=u.route.loader&&p[u.route.id]===void 0&&(!m||m[u.route.id]===void 0);if(u.route.lazy||x){c=!0,l>=0?o=o.slice(0,l+1):o=[o[0]];break}}}return o.reduceRight((f,u,p)=>{let m,x=!1,w=null,h=null;n&&(m=s&&u.route.id?s[u.route.id]:void 0,w=u.route.errorElement||bs,c&&(l<0&&p===0?(Ps("route-fallback"),x=!0,h=null):l===p&&(x=!0,h=u.route.hydrateFallbackElement||null)));let g=t.concat(o.slice(0,p+1)),b=()=>{let S;return m?S=w:x?S=h:u.route.Component?S=y.createElement(u.route.Component,null):u.route.element?S=u.route.element:S=f,y.createElement(ws,{match:u,routeContext:{outlet:f,matches:g,isDataRoute:n!=null},children:S})};return n&&(u.route.ErrorBoundary||u.route.errorElement||p===0)?y.createElement(xs,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:b(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):b()},null)}var Ma=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ma||{}),La=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(La||{});function ks(e){let t=y.useContext(Fn);return t||T(!1),t}function Cs(e){let t=y.useContext(ps);return t||T(!1),t}function Es(e){let t=y.useContext(Le);return t||T(!1),t}function Fa(e){let t=Es(),n=t.matches[t.matches.length-1];return n.route.id||T(!1),n.route.id}function As(){var e;let t=y.useContext(Ra),n=Cs(),r=Fa();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Is(){let{router:e}=ks(Ma.UseNavigateStable),t=Fa(La.UseNavigateStable),n=y.useRef(!1);return Ta(()=>{n.current=!0}),y.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Je({fromRouteId:t},i)))},[e,t])}const xr={};function Ps(e,t,n){xr[e]||(xr[e]=!0)}function js(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function yt(e){T(!1)}function Os(e){let{basename:t="/",children:n=null,location:r,navigationType:a=ae.Pop,navigator:i,static:o=!1,future:s}=e;Mt()&&T(!1);let c=t.replace(/^\/*/,"/"),l=y.useMemo(()=>({basename:c,navigator:i,static:o,future:Je({v7_relativeSplatPath:!1},s)}),[c,s,i,o]);typeof r=="string"&&(r=we(r));let{pathname:f="/",search:u="",hash:p="",state:m=null,key:x="default"}=r,w=y.useMemo(()=>{let h=Oa(f,c);return h==null?null:{location:{pathname:h,search:u,hash:p,state:m,key:x},navigationType:a}},[c,f,u,p,m,x,a]);return w==null?null:y.createElement(_t.Provider,{value:l},y.createElement(Tt.Provider,{children:n,value:w}))}function Ns(e){let{children:t,location:n}=e;return gs(pn(t),n)}new Promise(()=>{});function pn(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,a)=>{if(!y.isValidElement(r))return;let i=[...t,a];if(r.type===y.Fragment){n.push.apply(n,pn(r.props.children,i));return}r.type!==yt&&T(!1),!r.props.index||!r.props.children||T(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=pn(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Rs="6";try{window.__reactRouterVersion=Rs}catch{}const _s="startTransition",wr=Pi[_s];function Ts(e){let{basename:t,children:n,future:r,window:a}=e,i=y.useRef();i.current==null&&(i.current=zo({window:a,v5Compat:!0}));let o=i.current,[s,c]=y.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},f=y.useCallback(u=>{l&&wr?wr(()=>c(u)):c(u)},[c,l]);return y.useLayoutEffect(()=>o.listen(f),[o,f]),y.useEffect(()=>js(r),[r]),y.createElement(Os,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}var Sr;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sr||(Sr={}));var kr;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(kr||(kr={}));const Ms=({onMenuToggle:e})=>{const t=ms(),[n,r]=y.useState(!0),[a,i]=y.useState(0),[o,s]=y.useState(!1),c=y.useRef(null);y.useEffect(()=>{const u=()=>{const p=window.scrollY;p>a&&p>50?r(!1):r(!0),i(p)};return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[a]),y.useEffect(()=>{const u=()=>{if(e&&c.current){const m=c.current.offsetHeight;e(m)}};u();const p=()=>{u()};return window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}},[o,e]);const l=()=>{s(u=>!u)},f=u=>{t(u),s(!1)};return d.jsxs(To,{ref:c,isVisible:n,children:[d.jsx(Mo,{children:"My Portfolio"}),d.jsx(Fo,{onClick:l,children:o?"✖":"☰"}),d.jsxs(Lo,{children:[d.jsx(ke,{onClick:()=>f("about-me"),children:"About Me"}),d.jsx(ke,{onClick:()=>f("education"),children:"Education"}),d.jsx(ke,{onClick:()=>f("experience"),children:"Experience"})]}),d.jsxs(Do,{isOpen:o,children:[d.jsx(ke,{onClick:()=>f("about-me"),children:"About Me"}),d.jsx(ke,{onClick:()=>f("education"),children:"Education"}),d.jsx(ke,{onClick:()=>f("experience"),children:"Experience"})]})]})},Cr=()=>{};let Dn={},Da={},za=null,$a={mark:Cr,measure:Cr};try{typeof window<"u"&&(Dn=window),typeof document<"u"&&(Da=document),typeof MutationObserver<"u"&&(za=MutationObserver),typeof performance<"u"&&($a=performance)}catch{}const{userAgent:Er=""}=Dn.navigator||{},se=Dn,N=Da,Ar=za,ut=$a;se.document;const Z=!!N.documentElement&&!!N.head&&typeof N.addEventListener=="function"&&typeof N.createElement=="function",Ua=~Er.indexOf("MSIE")||~Er.indexOf("Trident/");var R="classic",Wa="duotone",D="sharp",z="sharp-duotone",Ls=[R,Wa,D,z],Fs={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Ir={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ds=["kit"],zs=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,$s=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Us={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Ws={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Bs={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Ys={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Hs={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Gs={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Ba={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Vs=["solid","regular","light","thin","duotone","brands"],Ya=[1,2,3,4,5,6,7,8,9,10],qs=Ya.concat([11,12,13,14,15,16,17,18,19,20]),Be={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xs=[...Object.keys(Ys),...Vs,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Be.GROUP,Be.SWAP_OPACITY,Be.PRIMARY,Be.SECONDARY].concat(Ya.map(e=>"".concat(e,"x"))).concat(qs.map(e=>"w-".concat(e))),Js={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ks={kit:{"fa-kit":"fak"}},Qs={kit:{fak:"fa-kit"}},Pr={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const K="___FONT_AWESOME___",mn=16,Ha="fa",Ga="svg-inline--fa",be="data-fa-i2svg",hn="data-fa-pseudo-element",Zs="data-fa-pseudo-element-pending",zn="data-prefix",$n="data-icon",jr="fontawesome-i2svg",ec="async",tc=["HTML","HEAD","STYLE","SCRIPT"],Va=(()=>{try{return!0}catch{return!1}})(),qa=[R,D,z];function tt(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[R]}})}const Xa={...Ba};Xa[R]={...Ba[R],...Ir.kit,...Ir["kit-duotone"]};const ye=tt(Xa),gn={...Gs};gn[R]={...gn[R],...Pr.kit,...Pr["kit-duotone"]};const Ke=tt(gn),yn={...Hs};yn[R]={...yn[R],...Qs.kit};const ve=tt(yn),vn={...Bs};vn[R]={...vn[R],...Ks.kit};const nc=tt(vn),rc=zs,Ja="fa-layers-text",ac=$s,ic={...Fs};tt(ic);const oc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xt=Be,_e=new Set;Object.keys(Ke[R]).map(_e.add.bind(_e));Object.keys(Ke[D]).map(_e.add.bind(_e));Object.keys(Ke[z]).map(_e.add.bind(_e));const sc=[...Ds,...Xs],Ge=se.FontAwesomeConfig||{};function cc(e){var t=N.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function lc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}N&&typeof N.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=lc(cc(n));a!=null&&(Ge[r]=a)});const Ka={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ha,replacementClass:Ga,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ge.familyPrefix&&(Ge.cssPrefix=Ge.familyPrefix);const Te={...Ka,...Ge};Te.autoReplaceSvg||(Te.observeMutations=!1);const v={};Object.keys(Ka).forEach(e=>{Object.defineProperty(v,e,{enumerable:!0,set:function(t){Te[e]=t,Ve.forEach(n=>n(v))},get:function(){return Te[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(e){Te.cssPrefix=e,Ve.forEach(t=>t(v))},get:function(){return Te.cssPrefix}});se.FontAwesomeConfig=v;const Ve=[];function fc(e){return Ve.push(e),()=>{Ve.splice(Ve.indexOf(e),1)}}const ne=mn,G={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function uc(e){if(!e||!Z)return;const t=N.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=N.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return N.head.insertBefore(t,r),e}const dc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Qe(){let e=12,t="";for(;e-- >0;)t+=dc[Math.random()*62|0];return t}function Fe(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Un(e){return e.classList?Fe(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Qa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pc(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Qa(e[n]),'" '),"").trim()}function Lt(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Wn(e){return e.size!==G.size||e.x!==G.x||e.y!==G.y||e.rotate!==G.rotate||e.flipX||e.flipY}function mc(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:l}}function hc(e){let{transform:t,width:n=mn,height:r=mn,startCentered:a=!1}=e,i="";return a&&Ua?i+="translate(".concat(t.x/ne-n/2,"em, ").concat(t.y/ne-r/2,"em) "):a?i+="translate(calc(-50% + ".concat(t.x/ne,"em), calc(-50% + ").concat(t.y/ne,"em)) "):i+="translate(".concat(t.x/ne,"em, ").concat(t.y/ne,"em) "),i+="scale(".concat(t.size/ne*(t.flipX?-1:1),", ").concat(t.size/ne*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var gc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Za(){const e=Ha,t=Ga,n=v.cssPrefix,r=v.replacementClass;let a=gc;if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}let Or=!1;function Jt(){v.autoAddCss&&!Or&&(uc(Za()),Or=!0)}var yc={mixout(){return{dom:{css:Za,insertCss:Jt}}},hooks(){return{beforeDOMElementCreation(){Jt()},beforeI2svg(){Jt()}}}};const Q=se||{};Q[K]||(Q[K]={});Q[K].styles||(Q[K].styles={});Q[K].hooks||(Q[K].hooks={});Q[K].shims||(Q[K].shims=[]);var V=Q[K];const ei=[],ti=function(){N.removeEventListener("DOMContentLoaded",ti),Ct=1,ei.map(e=>e())};let Ct=!1;Z&&(Ct=(N.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N.readyState),Ct||N.addEventListener("DOMContentLoaded",ti));function vc(e){Z&&(Ct?setTimeout(e,0):ei.push(e))}function nt(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Qa(e):"<".concat(t," ").concat(pc(n),">").concat(r.map(nt).join(""),"</").concat(t,">")}function Nr(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Kt=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=n,c,l,f;for(r===void 0?(c=1,f=t[i[0]]):(c=0,f=r);c<o;c++)l=i[c],f=s(f,t[l],l,t);return f};function bc(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function bn(e){const t=bc(e);return t.length===1?t[0].toString(16):null}function xc(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Rr(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function xn(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=Rr(t);typeof V.hooks.addPack=="function"&&!r?V.hooks.addPack(e,Rr(t)):V.styles[e]={...V.styles[e]||{},...a},e==="fas"&&xn("fa",t)}const{styles:de,shims:wc}=V,Sc={[R]:Object.values(ve[R]),[D]:Object.values(ve[D]),[z]:Object.values(ve[z])};let Bn=null,ni={},ri={},ai={},ii={},oi={};const kc={[R]:Object.keys(ye[R]),[D]:Object.keys(ye[D]),[z]:Object.keys(ye[z])};function Cc(e){return~sc.indexOf(e)}function Ec(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Cc(a)?a:null}const si=()=>{const e=r=>Kt(de,(a,i,o)=>(a[o]=Kt(i,r,{}),a),{});ni=e((r,a,i)=>(a[3]&&(r[a[3]]=i),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=i}),r)),ri=e((r,a,i)=>(r[i]=i,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=i}),r)),oi=e((r,a,i)=>{const o=a[2];return r[i]=i,o.forEach(s=>{r[s]=i}),r});const t="far"in de||v.autoFetchSvg,n=Kt(wc,(r,a)=>{const i=a[0];let o=a[1];const s=a[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:s}),r},{names:{},unicodes:{}});ai=n.names,ii=n.unicodes,Bn=Ft(v.styleDefault,{family:v.familyDefault})};fc(e=>{Bn=Ft(e.styleDefault,{family:v.familyDefault})});si();function Yn(e,t){return(ni[e]||{})[t]}function Ac(e,t){return(ri[e]||{})[t]}function ie(e,t){return(oi[e]||{})[t]}function ci(e){return ai[e]||{prefix:null,iconName:null}}function Ic(e){const t=ii[e],n=Yn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ce(){return Bn}const Hn=()=>({prefix:null,iconName:null,rest:[]});function Ft(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=R}=t,r=ye[n][e],a=Ke[n][e]||Ke[n][r],i=e in V.styles?e:null;return a||i||null}const Pc={[R]:Object.keys(ve[R]),[D]:Object.keys(ve[D]),[z]:Object.keys(ve[z])};function Dt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[R]:"".concat(v.cssPrefix,"-").concat(R),[D]:"".concat(v.cssPrefix,"-").concat(D),[z]:"".concat(v.cssPrefix,"-").concat(z)};let a=null,i=R;const o=Ls.filter(c=>c!==Wa);o.forEach(c=>{(e.includes(r[c])||e.some(l=>Pc[c].includes(l)))&&(i=c)});const s=e.reduce((c,l)=>{const f=Ec(v.cssPrefix,l);if(de[l]?(l=Sc[i].includes(l)?nc[i][l]:l,a=l,c.prefix=l):kc[i].indexOf(l)>-1?(a=l,c.prefix=Ft(l,{family:i})):f?c.iconName=f:l!==v.replacementClass&&!o.some(u=>l===r[u])&&c.rest.push(l),!n&&c.prefix&&c.iconName){const u=a==="fa"?ci(c.iconName):{},p=ie(c.prefix,c.iconName);u.prefix&&(a=null),c.iconName=u.iconName||p||c.iconName,c.prefix=u.prefix||c.prefix,c.prefix==="far"&&!de.far&&de.fas&&!v.autoFetchSvg&&(c.prefix="fas")}return c},Hn());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&i===D&&(de.fass||v.autoFetchSvg)&&(s.prefix="fass",s.iconName=ie(s.prefix,s.iconName)||s.iconName),!s.prefix&&i===z&&(de.fasds||v.autoFetchSvg)&&(s.prefix="fasds",s.iconName=ie(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=ce()||"fas"),s}class jc{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...a[i]},xn(i,a[i]);const o=ve[R][i];o&&xn(o,a[i]),si()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:i,iconName:o,icon:s}=r[a],c=s[2];t[i]||(t[i]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(t[i][l]=s)}),t[i][o]=s}),t}}let _r=[],Ee={};const Ie={},Oc=Object.keys(Ie);function Nc(e,t){let{mixoutsTo:n}=t;return _r=e,Ee={},Object.keys(Ie).forEach(r=>{Oc.indexOf(r)===-1&&delete Ie[r]}),_r.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(n[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=a[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Ee[o]||(Ee[o]=[]),Ee[o].push(i[o])})}r.provides&&r.provides(Ie)}),n}function wn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(Ee[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function xe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(Ee[e]||[]).forEach(i=>{i.apply(null,n)})}function le(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ie[e]?Ie[e].apply(null,t):void 0}function Sn(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||ce();if(t)return t=ie(n,t)||t,Nr(li.definitions,n,t)||Nr(V.styles,n,t)}const li=new jc,Rc=()=>{v.autoReplaceSvg=!1,v.observeMutations=!1,xe("noAuto")},_c={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z?(xe("beforeI2svg",e),le("pseudoElements2svg",e),le("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,vc(()=>{Mc({autoReplaceSvgRoot:t}),xe("watch",e)})}},Tc={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ie(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Ft(e[0]);return{prefix:n,iconName:ie(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(v.cssPrefix,"-"))>-1||e.match(rc))){const t=Dt(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||ce(),iconName:ie(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=ce();return{prefix:t,iconName:ie(t,e)||e}}}},$={noAuto:Rc,config:v,dom:_c,parse:Tc,library:li,findIconDefinition:Sn,toHtml:nt},Mc=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=N}=e;(Object.keys(V.styles).length>0||v.autoFetchSvg)&&Z&&v.autoReplaceSvg&&$.dom.i2svg({node:t})};function zt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>nt(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Z)return;const n=N.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Lc(e){let{children:t,main:n,mask:r,attributes:a,styles:i,transform:o}=e;if(Wn(o)&&n.found&&!r.found){const{width:s,height:c}=n,l={x:s/c/2,y:.5};a.style=Lt({...i,"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")})}return[{tag:"svg",attributes:a,children:t}]}function Fc(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:o},children:r}]}]}function Gn(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:i,symbol:o,title:s,maskId:c,titleId:l,extra:f,watchable:u=!1}=e,{width:p,height:m}=n.found?n:t,x=r==="fak",w=[v.replacementClass,a?"".concat(v.cssPrefix,"-").concat(a):""].filter(I=>f.classes.indexOf(I)===-1).filter(I=>I!==""||!!I).concat(f.classes).join(" ");let h={children:[],attributes:{...f.attributes,"data-prefix":r,"data-icon":a,class:w,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(m)}};const g=x&&!~f.classes.indexOf("fa-fw")?{width:"".concat(p/m*16*.0625,"em")}:{};u&&(h.attributes[be]=""),s&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(l||Qe())},children:[s]}),delete h.attributes.title);const b={...h,prefix:r,iconName:a,main:t,mask:n,maskId:c,transform:i,symbol:o,styles:{...g,...f.styles}},{children:S,attributes:E}=n.found&&t.found?le("generateAbstractMask",b)||{children:[],attributes:{}}:le("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=S,b.attributes=E,o?Fc(b):Lc(b)}function Tr(e){const{content:t,width:n,height:r,transform:a,title:i,extra:o,watchable:s=!1}=e,c={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};s&&(c[be]="");const l={...o.styles};Wn(a)&&(l.transform=hc({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const f=Lt(l);f.length>0&&(c.style=f);const u=[];return u.push({tag:"span",attributes:c,children:[t]}),i&&u.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),u}function Dc(e){const{content:t,title:n,extra:r}=e,a={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=Lt(r.styles);i.length>0&&(a.style=i);const o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Qt}=V;function kn(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(Xt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Xt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Xt.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const zc={found:!1,width:512,height:512};function $c(e,t){!Va&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Cn(e,t){let n=t;return t==="fa"&&v.styleDefault!==null&&(t=ce()),new Promise((r,a)=>{if(n==="fa"){const i=ci(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Qt[t]&&Qt[t][e]){const i=Qt[t][e];return r(kn(i))}$c(e,t),r({...zc,icon:v.showMissingIcons&&e?le("missingIconAbstract")||{}:{}})})}const Mr=()=>{},En=v.measurePerformance&&ut&&ut.mark&&ut.measure?ut:{mark:Mr,measure:Mr},Ye='FA "6.6.0"',Uc=e=>(En.mark("".concat(Ye," ").concat(e," begins")),()=>fi(e)),fi=e=>{En.mark("".concat(Ye," ").concat(e," ends")),En.measure("".concat(Ye," ").concat(e),"".concat(Ye," ").concat(e," begins"),"".concat(Ye," ").concat(e," ends"))};var Vn={begin:Uc,end:fi};const vt=()=>{};function Lr(e){return typeof(e.getAttribute?e.getAttribute(be):null)=="string"}function Wc(e){const t=e.getAttribute?e.getAttribute(zn):null,n=e.getAttribute?e.getAttribute($n):null;return t&&n}function Bc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function Yc(){return v.autoReplaceSvg===!0?bt.replace:bt[v.autoReplaceSvg]||bt.replace}function Hc(e){return N.createElementNS("http://www.w3.org/2000/svg",e)}function Gc(e){return N.createElement(e)}function ui(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Hc:Gc}=t;if(typeof e=="string")return N.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){r.appendChild(ui(i,{ceFn:n}))}),r}function Vc(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const bt={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(ui(n),t)}),t.getAttribute(be)===null&&v.keepOriginalSource){let n=N.createComment(Vc(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Un(t).indexOf(v.replacementClass))return bt.replace(e);const r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===v.replacementClass||s.match(r)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const a=n.map(i=>nt(i)).join(`
`);t.setAttribute(be,""),t.innerHTML=a}};function Fr(e){e()}function di(e,t){const n=typeof t=="function"?t:vt;if(e.length===0)n();else{let r=Fr;v.mutateApproach===ec&&(r=se.requestAnimationFrame||Fr),r(()=>{const a=Yc(),i=Vn.begin("mutate");e.map(a),i(),n()})}}let qn=!1;function pi(){qn=!0}function An(){qn=!1}let Et=null;function Dr(e){if(!Ar||!v.observeMutations)return;const{treeCallback:t=vt,nodeCallback:n=vt,pseudoElementsCallback:r=vt,observeMutationsRoot:a=N}=e;Et=new Ar(i=>{if(qn)return;const o=ce();Fe(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Lr(s.addedNodes[0])&&(v.searchPseudoElements&&r(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&v.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&Lr(s.target)&&~oc.indexOf(s.attributeName))if(s.attributeName==="class"&&Wc(s.target)){const{prefix:c,iconName:l}=Dt(Un(s.target));s.target.setAttribute(zn,c||o),l&&s.target.setAttribute($n,l)}else Bc(s.target)&&n(s.target)})}),Z&&Et.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function qc(){Et&&Et.disconnect()}function Xc(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Jc(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=Dt(Un(e));return a.prefix||(a.prefix=ce()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ac(a.prefix,e.innerText)||Yn(a.prefix,bn(e.innerText))),!a.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Kc(e){const t=Fe(e.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return v.autoA11y&&(n?t["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(r||Qe()):(t["aria-hidden"]="true",t.focusable="false")),t}function Qc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:G,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=Jc(e),i=Kc(e),o=wn("parseNodeAttributes",{},e);let s=t.styleParser?Xc(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:G,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:i},...o}}const{styles:Zc}=V;function mi(e){const t=v.autoReplaceSvg==="nest"?zr(e,{styleParser:!1}):zr(e);return~t.extra.classes.indexOf(Ja)?le("generateLayersText",e,t):le("generateSvgReplacementMutation",e,t)}let q=new Set;qa.map(e=>{q.add("fa-".concat(e))});Object.keys(ye[R]).map(q.add.bind(q));Object.keys(ye[D]).map(q.add.bind(q));Object.keys(ye[z]).map(q.add.bind(q));q=[...q];function $r(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z)return Promise.resolve();const n=N.documentElement.classList,r=f=>n.add("".concat(jr,"-").concat(f)),a=f=>n.remove("".concat(jr,"-").concat(f)),i=v.autoFetchSvg?q:qa.map(f=>"fa-".concat(f)).concat(Object.keys(Zc));i.includes("fa")||i.push("fa");const o=[".".concat(Ja,":not([").concat(be,"])")].concat(i.map(f=>".".concat(f,":not([").concat(be,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=Fe(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();const c=Vn.begin("onTree"),l=s.reduce((f,u)=>{try{const p=mi(u);p&&f.push(p)}catch(p){Va||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise((f,u)=>{Promise.all(l).then(p=>{di(p,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),c(),f()})}).catch(p=>{c(),u(p)})})}function el(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;mi(e).then(n=>{n&&di([n],t)})}function tl(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Sn(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:Sn(a||{})),e(r,{...n,mask:a})}}const nl=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=G,symbol:r=!1,mask:a=null,maskId:i=null,title:o=null,titleId:s=null,classes:c=[],attributes:l={},styles:f={}}=t;if(!e)return;const{prefix:u,iconName:p,icon:m}=e;return zt({type:"icon",...e},()=>(xe("beforeDOMElementCreation",{iconDefinition:e,params:t}),v.autoA11y&&(o?l["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(s||Qe()):(l["aria-hidden"]="true",l.focusable="false")),Gn({icons:{main:kn(m),mask:a?kn(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:p,transform:{...G,...n},symbol:r,title:o,maskId:i,titleId:s,extra:{attributes:l,styles:f,classes:c}})))};var rl={mixout(){return{icon:tl(nl)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=$r,e.nodeCallback=el,e}}},provides(e){e.i2svg=function(t){const{node:n=N,callback:r=()=>{}}=t;return $r(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:i,prefix:o,transform:s,symbol:c,mask:l,maskId:f,extra:u}=n;return new Promise((p,m)=>{Promise.all([Cn(r,o),l.iconName?Cn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(x=>{let[w,h]=x;p([t,Gn({icons:{main:w,mask:h},prefix:o,iconName:r,transform:s,symbol:c,maskId:f,title:a,titleId:i,extra:u,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:i,styles:o}=t;const s=Lt(o);s.length>0&&(r.style=s);let c;return Wn(i)&&(c=le("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(c||a.icon),{children:n,attributes:r}}}},al={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return zt({type:"layer"},()=>{xe("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(i=>{r=r.concat(i.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},il={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=t;return zt({type:"counter",content:e},()=>(xe("beforeDOMElementCreation",{content:e,params:t}),Dc({content:e.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(v.cssPrefix,"-layers-counter"),...r]}})))}}}},ol={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=G,title:r=null,classes:a=[],attributes:i={},styles:o={}}=t;return zt({type:"text",content:e},()=>(xe("beforeDOMElementCreation",{content:e,params:t}),Tr({content:e,transform:{...G,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(v.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:i}=n;let o=null,s=null;if(Ua){const c=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();o=l.width/c,s=l.height/c}return v.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,Tr({content:t.innerHTML,width:o,height:s,transform:a,title:r,extra:i,watchable:!0})])}}};const sl=new RegExp('"',"ug"),Ur=[1105920,1112319],Wr={FontAwesome:{normal:"fas",400:"fas"},...Ws,...Us,...Js},In=Object.keys(Wr).reduce((e,t)=>(e[t.toLowerCase()]=Wr[t],e),{}),cl=Object.keys(In).reduce((e,t)=>{const n=In[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function ll(e){const t=e.replace(sl,""),n=xc(t,0),r=n>=Ur[0]&&n<=Ur[1],a=t.length===2?t[0]===t[1]:!1;return{value:bn(a?t[0]:t),isSecondary:r||a}}function fl(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(In[n]||{})[a]||cl[n]}function Br(e,t){const n="".concat(Zs).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const o=Fe(e.children).filter(p=>p.getAttribute(hn)===t)[0],s=se.getComputedStyle(e,t),c=s.getPropertyValue("font-family"),l=c.match(ac),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){const p=s.getPropertyValue("content");let m=fl(c,f);const{value:x,isSecondary:w}=ll(p),h=l[0].startsWith("FontAwesome");let g=Yn(m,x),b=g;if(h){const S=Ic(x);S.iconName&&S.prefix&&(g=S.iconName,m=S.prefix)}if(g&&!w&&(!o||o.getAttribute(zn)!==m||o.getAttribute($n)!==b)){e.setAttribute(n,b),o&&e.removeChild(o);const S=Qc(),{extra:E}=S;E.attributes[hn]=t,Cn(g,m).then(I=>{const j=Gn({...S,icons:{main:I,mask:Hn()},prefix:m,iconName:b,extra:E,watchable:!0}),k=N.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(k,e.firstChild):e.appendChild(k),k.outerHTML=j.map(fe=>nt(fe)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ul(e){return Promise.all([Br(e,"::before"),Br(e,"::after")])}function dl(e){return e.parentNode!==document.head&&!~tc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(hn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Yr(e){if(Z)return new Promise((t,n)=>{const r=Fe(e.querySelectorAll("*")).filter(dl).map(ul),a=Vn.begin("searchPseudoElements");pi(),Promise.all(r).then(()=>{a(),An(),t()}).catch(()=>{a(),An(),n()})})}var pl={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Yr,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=N}=t;v.searchPseudoElements&&Yr(n)}}};let Hr=!1;var ml={mixout(){return{dom:{unwatch(){pi(),Hr=!0}}}},hooks(){return{bootstrap(){Dr(wn("mutationObserverCallbacks",{}))},noAuto(){qc()},watch(e){const{observeMutationsRoot:t}=e;Hr?An():Dr(wn("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Gr=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),i=a[0];let o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var hl={mixout(){return{parse:{transform:e=>Gr(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Gr(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:i}=t;const o={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(s," ").concat(c," ").concat(l)},u={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:f,path:u};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const Zt={x:0,y:0,width:"100%",height:"100%"};function Vr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function gl(e){return e.tag==="g"?e.children:[e]}var yl={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Dt(n.split(" ").map(a=>a.trim())):Hn();return r.prefix||(r.prefix=ce()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:i,maskId:o,transform:s}=t;const{width:c,icon:l}=a,{width:f,icon:u}=i,p=mc({transform:s,containerWidth:f,iconWidth:c}),m={tag:"rect",attributes:{...Zt,fill:"white"}},x=l.children?{children:l.children.map(Vr)}:{},w={tag:"g",attributes:{...p.inner},children:[Vr({tag:l.tag,attributes:{...l.attributes,...p.path},...x})]},h={tag:"g",attributes:{...p.outer},children:[w]},g="mask-".concat(o||Qe()),b="clip-".concat(o||Qe()),S={tag:"mask",attributes:{...Zt,id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[m,h]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:gl(u)},S]};return n.push(E,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(g,")"),...Zt}}),{children:n,attributes:r}}}},vl={provides(e){let t=!1;se.matchMedia&&(t=se.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...a,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||o.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},bl={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},xl=[yc,rl,al,il,ol,pl,ml,hl,yl,vl,bl];Nc(xl,{mixoutsTo:$});$.noAuto;$.config;$.library;$.dom;const Pn=$.parse;$.findIconDefinition;$.toHtml;const wl=$.icon;$.layer;$.text;$.counter;var en={exports:{}},tn,qr;function Sl(){if(qr)return tn;qr=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return tn=e,tn}var nn,Xr;function kl(){if(Xr)return nn;Xr=1;var e=Sl();function t(){}function n(){}return n.resetWarningCache=t,nn=function(){function r(o,s,c,l,f,u){if(u!==e){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}r.isRequired=r;function a(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},nn}var Jr;function Cl(){return Jr||(Jr=1,en.exports=kl()()),en.exports}var El=Cl();const A=ta(El);function Kr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kr(Object(n),!0).forEach(function(r){Ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function At(e){"@babel/helpers - typeof";return At=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},At(e)}function Ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Al(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Il(e,t){if(e==null)return{};var n=Al(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function jn(e){return Pl(e)||jl(e)||Ol(e)||Nl()}function Pl(e){if(Array.isArray(e))return On(e)}function jl(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ol(e,t){if(e){if(typeof e=="string")return On(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return On(e,t)}}function On(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Nl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rl(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,c=e.spin,l=e.spinPulse,f=e.spinReverse,u=e.pulse,p=e.fixedWidth,m=e.inverse,x=e.border,w=e.listItem,h=e.flip,g=e.size,b=e.rotation,S=e.pull,E=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":f,"fa-spin-pulse":l,"fa-pulse":u,"fa-fw":p,"fa-inverse":m,"fa-border":x,"fa-li":w,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},Ae(t,"fa-".concat(g),typeof g<"u"&&g!==null),Ae(t,"fa-rotate-".concat(b),typeof b<"u"&&b!==null&&b!==0),Ae(t,"fa-pull-".concat(S),typeof S<"u"&&S!==null),Ae(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(E).map(function(I){return E[I]?I:null}).filter(function(I){return I})}function _l(e){return e=e-0,e===e}function hi(e){return _l(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Tl=["style"];function Ml(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ll(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=hi(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Ml(a)]=i:t[a]=i,t},{})}function gi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return gi(e,c)}),a=Object.keys(t.attributes||{}).reduce(function(c,l){var f=t.attributes[l];switch(l){case"class":c.attrs.className=f,delete t.attributes.class;break;case"style":c.attrs.style=Ll(f);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?c.attrs[l.toLowerCase()]=f:c.attrs[hi(l)]=f}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Il(n,Tl);return a.attrs.style=H(H({},a.attrs.style),o),e.apply(void 0,[t.tag,H(H({},a.attrs),s)].concat(jn(r)))}var yi=!1;try{yi=!0}catch{}function Fl(){if(!yi&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Qr(e){if(e&&At(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Pn.icon)return Pn.icon(e);if(e===null)return null;if(e&&At(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function rn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ae({},e,t):{}}var Zr={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Xn=oe.forwardRef(function(e,t){var n=H(H({},Zr),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,c=n.titleId,l=n.maskId,f=Qr(r),u=rn("classes",[].concat(jn(Rl(n)),jn((o||"").split(" ")))),p=rn("transform",typeof n.transform=="string"?Pn.transform(n.transform):n.transform),m=rn("mask",Qr(a)),x=wl(f,H(H(H(H({},u),p),m),{},{symbol:i,title:s,titleId:c,maskId:l}));if(!x)return Fl("Could not find icon",f),null;var w=x.abstract,h={ref:t};return Object.keys(n).forEach(function(g){Zr.hasOwnProperty(g)||(h[g]=n[g])}),Dl(w[0],h)});Xn.displayName="FontAwesomeIcon";Xn.propTypes={beat:A.bool,border:A.bool,beatFade:A.bool,bounce:A.bool,className:A.string,fade:A.bool,flash:A.bool,mask:A.oneOfType([A.object,A.array,A.string]),maskId:A.string,fixedWidth:A.bool,inverse:A.bool,flip:A.oneOf([!0,!1,"horizontal","vertical","both"]),icon:A.oneOfType([A.object,A.array,A.string]),listItem:A.bool,pull:A.oneOf(["right","left"]),pulse:A.bool,rotation:A.oneOf([0,90,180,270]),shake:A.bool,size:A.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:A.bool,spinPulse:A.bool,spinReverse:A.bool,symbol:A.oneOfType([A.bool,A.string]),title:A.string,titleId:A.string,transform:A.oneOfType([A.string,A.object]),swapOpacity:A.bool};var Dl=gi.bind(null,oe.createElement);const zl=W.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`,$l=W.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-direction: row;

  a {
    margin: 0 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.2em;
    color: #fff;
    transition: color 0.3s ease;

    &:hover {
      color: #aaa;
    }
  }

  a > * {
    margin: 0 5px;
  }

  @media (max-width: 766px) {
    flex-direction: column;

    a {
      justify-content: center;
    }
  }
`,Ul={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Wl={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Bl={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Ze={workExperience:[{logo:"files/images/ness-ke.svg",position:"Full Stack Developer",company:"Ness KE s.r.o.",website:"https://www.ness.com/ness-slovakia/",description:"Developed features for React frontend and Node.js backend. Integrated Redux for state management and TypeORM for database operations.",start:"August 2023",end:"January 2024"}],education:[{logo:"files/images/via-logo.svg",institution:"VIA University College",major:"Software Technology Engineering",type:"Bachelor Degree",location:"Horsens, Denmark",start:"September 2021",end:"January 2025"},{logo:"files/images/spse-logo.svg",institution:"Secondary Vocational School of Electrical Engineering",major:"Information and Networking technologies",type:"High School Degree",location:"Prešov, Slovakia",start:"September 2017",end:"May 2021"}],courses:[{institution:"Coursera",logo:"files/images/coursera-logo.svg",title:"IBM - Application Development using Microservices and Serverless",file:"files/certificates/img/Coursera - Application Development using Microservices and Serverless.jpg",achieved:"2025"},{institution:"Coursera",logo:"files/images/coursera-logo.svg",title:"IBM - Introduction to Agile Development and Scrum",file:"files/certificates/img/Coursera - Introduction to Agile Development and Scrum.jpg",achieved:"2025"},{institution:"Coursera",logo:"files/images/coursera-logo.svg",title:"IBM - Continuous Integration and Continuous Delivery (CI-CD)",file:"files/certificates/img/Coursera - Introduction to Agile Development and Scrum.jpg",achieved:"2025"},{institution:"Coursera",logo:"files/images/coursera-logo.svg",title:"IBM - Introduction to Containers w Docker, Kubernetes",file:"files/certificates/img/Coursera - Introduction to Containers w Docker, Kubernetes.jpg",achieved:"2025"},{institution:"Coursera",logo:"files/images/coursera-logo.svg",title:"IBM - Introduction to DevOps",file:"files/certificates/img/Coursera - Introduction to DevOps.jpg",achieved:"2025"},{institution:"Coursera",logo:"files/images/coursera-logo.svg",title:"IBM - Introduction to Test and Behavior Driven Development",file:"files/certificates/img/Coursera - Introduction to Test and Behavior Driven Development.jpg",achieved:"2025"}],projects:[{logo:"files/images/hckosice.png",title:"HcKošice",url:"https://vstupenky.hckosice.sk/",description:"I worked on this project during my internship, where I was in a team of around 7 developers, utilizing a modified SCRUM methodology. I was tasked with designing new features, implementing said features, finding and fixing bugs as well as documenting the system. The technologies we used during development were React & Redux on the front-end, Node.js & Express.js on the back-end, and PostgreSQL with TypeORM for the database.",techStack:["ReactJs","Redux","Node.js","TypeScript","Express.js","PostgreSQL","TypeORM"]},{logo:"",title:"MealPrepTracker",url:"https://mealpreptrackerfrontend.onrender.com/",githubLink:"",description:"",techStack:["ReactJS","Redux","Node.js","RESTApi","TypeScript","Express.js","Jest","PostgreSQL","TypeORM","Docker","CI/CD"]},{logo:"",title:"ChadList",url:"",githubLink:"",description:"",techStack:["Java","JPA/Hibernate","gRPC","RESTApi","C#/.NET","Blazor","JUnit"]}],socialLinks:[{icon:Ul,title:"LinkedIn",url:"https://linkedin.com/in/tomas-gres"},{icon:Wl,title:"GitHub",url:"https://github.com/Youngi102"},{icon:Bl,title:"G-mail",url:"mailto:tomasgres2001@gmail.com"}]},Yl=()=>d.jsx(zl,{children:d.jsx($l,{children:Ze.socialLinks.map(e=>d.jsxs("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[d.jsx(Xn,{icon:e.icon})," ",e.title]},e.title))})}),Hl=W.section`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto auto;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  *:nth-child(1) {
    grid-column: 1 span;
  }

  *:nth-child(2) {
    grid-column: 3 span;
    width: 100%;
  }

  @media (max-width: 966px) {
    *:nth-child(1) {
      grid-column: 4 span;
    }

    *:nth-child(2) {
      grid-column: 4 span;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,Gl=W.img`
  width: clamp(300px, 20vw, 450px);
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  justify-self: center;
`,Vl=W.div`
  margin: auto;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
`,ql=()=>d.jsxs(Hl,{children:[d.jsx(Gl,{src:"files/images/profile.jpg",alt:"Your Name"}),d.jsx(Vl,{children:d.jsx("p",{children:"Hi, I'm a passionate software engineer with a strong background in mathematics, physics, and computer science. I enjoy building impactful applications, learning new technologies, and sharing knowledge with others. Outside of coding, I have a deep interest in fitness, healthy living, and personal development."})})]}),Xl=()=>d.jsx("div",{className:"MyJourney section-container",children:d.jsxs("div",{className:"section-content",children:[d.jsx("h2",{children:"👨‍💻 My Journey"}),d.jsx("section",{children:d.jsx("p",{children:"From a very young age, I was passionate about science, especially mathematics and physics. Around the age of 14, I discovered programming and began learning to code using C#. I explored both functional and object-oriented programming and created a few simple projects that deepened my understanding. A year later, I decided to apply to a specialized high school focused on Information and Networking Technologies."})}),d.jsxs("section",{children:[d.jsx("img",{src:"files/images/spse-campus.jpg",alt:"High School",className:"section-image"}),d.jsxs("div",{children:[d.jsx("p",{children:"After passing the admission tests, I was accepted and spent the next four years studying programming, networking, electrotechnics, electronics, computer hardware, and robotics."}),d.jsx("p",{children:"I participated in several programming competitions, which sharpened my analytical and problem-solving skills. I also made many friends who shared my passion for learning, and met great teachers who challenged and supported me along the way."}),d.jsx("p",{children:"In my final year, I received an opportunity to apply to universities in Denmark. While the idea of moving abroad was exciting, it was also intimidating — I didn’t know anyone there, and it was far from home. But I’ve always welcomed challenges, so I applied and was accepted to VIA University College."})]})]}),d.jsxs("section",{children:[d.jsx("img",{src:"files/images/via-campus.jpg",alt:"Studying Abroad",className:"section-image"}),d.jsxs("div",{children:[d.jsx("p",{children:"Moving to Denmark was a major step. I quickly made friends and settled in with a few classmates. During my time at VIA, I deepened my knowledge of software design principles, explored modern technologies, and learned about areas such as DevOps, Network Security, Computer Architecture, and Machine Learning."}),d.jsx("p",{children:"Machine Learning became a particular interest. For my Bachelor’s thesis, I teamed up with two classmates to work on Agricultural Land Detection for a company called Aeon. We experimented with various ML algorithms and neural networks, ultimately choosing Convolutional Autoencoders for their superior performance. With strong guidance from our supervisor and valuable support from the company, we delivered a successful project."}),d.jsx("p",{children:"In January 2025, I graduated with a Bachelor’s degree and began preparing for my next challenge — joining the tech industry."})]})]}),d.jsxs("section",{children:[d.jsx("img",{src:"files/images/ness-ke.jpg",alt:"Internship",className:"section-image"}),d.jsxs("div",{children:[d.jsx("p",{children:"As part of my studies, I completed a five-month internship at Ness KE in Košice, Slovakia, near my hometown. I joined a team working on a ticketing portal for HC Košice, one of the country’s most popular hockey teams."}),d.jsx("p",{children:"There, I gained firsthand experience working on a real-world product using technologies like React, Node.js, and TypeScript. Initially, I was intimidated by the fast-paced environment and the experience level of my teammates, but I quickly adapted. My supervisor and colleagues were supportive, helping me onboard and start contributing to feature development early on."}),d.jsx("p",{children:"At times, I had to take responsibility for key tasks independently, which helped build both my technical and communication skills. It was a transformative experience that gave me confidence in my ability to work as part of a professional engineering team."})]})]}),d.jsxs("section",{children:[d.jsx("p",{children:"Looking back, each step of my journey — from writing my first lines of C# code to completing my Bachelor’s thesis and contributing to a live project — has shaped me into a curious and motivated software engineer. I thrive in environments where I can keep learning, solve real-world problems, and collaborate with others who are passionate about technology."}),d.jsxs("p",{children:["Even after earning my degree, I’ve continued growing my skillset — completing professional development courses from IBM on Coursera and beginning work on a personal project called"," ",d.jsx("strong",{children:"MealPrepTracker"}),". It’s an app designed to store recipes and track meal calories, inspired by my passion for fitness and healthy living."]}),d.jsx("p",{children:"As I step into the next chapter of my career, I’m excited to continue building meaningful software, learning from experienced teams, and contributing to impactful projects."})]})]})}),Jl=()=>d.jsxs(d.Fragment,{children:[d.jsx(ql,{}),d.jsx(Xl,{})]}),Kl=({src:e,alt:t="Preview image"})=>{const[n,r]=y.useState(!1);return d.jsxs(d.Fragment,{children:[d.jsx("img",{src:e,alt:t,className:"image-thumbnail",onClick:()=>r(!0)}),n&&d.jsx("div",{className:"image-modal-backdrop",onClick:()=>r(!1),children:d.jsxs("div",{className:"image-modal-content",onClick:a=>a.stopPropagation(),children:[d.jsx("button",{className:"image-modal-close",onClick:()=>r(!1),children:"× Close"}),d.jsx("img",{src:e,alt:t,className:"image-modal-img"})]})})]})},Ql=()=>d.jsxs("section",{className:"section",children:[d.jsx("h2",{className:"section-title",children:"Education"}),d.jsx("div",{className:"grid",children:Ze.education.map((e,t)=>d.jsxs("div",{className:"education-card",children:[d.jsx("img",{src:e.logo,alt:`${e.institution} logo`,className:"logo"}),d.jsxs("div",{className:"info",children:[d.jsx("strong",{children:e.institution}),d.jsx("br",{}),e.major,d.jsx("br",{}),e.type," — ",e.location,d.jsx("br",{}),e.start," – ",e.end]})]},t))}),d.jsx("h2",{className:"section-title",style:{marginTop:"4rem"},children:"Courses"}),d.jsx("div",{className:"grid",children:Ze.courses.map((e,t)=>d.jsxs("div",{className:"course-card",children:[d.jsx("img",{src:e.logo,alt:`${e.institution} logo`,className:"logo"}),d.jsx("strong",{children:e.title}),d.jsx(Kl,{src:e.file,alt:e.title}),d.jsxs("div",{className:"verify",children:[d.jsxs("i",{children:["Achieved: ",e.achieved]}),d.jsx("a",{href:"",children:"Verify"})]})]},t))})]}),Zl=({item:e})=>d.jsxs("div",{className:"project-card",children:[d.jsx("div",{className:"logo",children:d.jsx("img",{src:e.logo,alt:`${e.title} logo`})}),d.jsx("div",{className:"title",children:d.jsx("h3",{children:e.title})}),d.jsx("div",{className:"description",children:d.jsx("p",{children:e.description.length>200?`${e.description.slice(0,200)}...`:e.description})}),d.jsxs("div",{className:"tech-stack",children:[d.jsx("strong",{children:"Tech Stack:"}),d.jsx("ul",{children:e.techStack.map((t,n)=>d.jsx("li",{children:t},n))})]}),d.jsx("div",{className:"links",children:d.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"view-project-link",children:"View Live"})})]}),ef=({item:e})=>d.jsxs("div",{className:"work-card",children:[d.jsx("div",{className:"logo",children:d.jsx("img",{src:e.logo,alt:`${e.company} logo`})}),d.jsx("div",{className:"position",children:d.jsx("h3",{children:e.position})}),d.jsx("div",{className:"company",children:d.jsx("p",{children:e.company})}),d.jsx("div",{className:"duration",children:d.jsxs("p",{children:[e.start," - ",e.end||"Present"]})}),d.jsx("div",{className:"description",children:d.jsx("p",{children:e.description.length>200?`${e.description.slice(0,200)}...`:e.description})}),d.jsx("div",{className:"links",children:d.jsx("a",{href:e.website,target:"_blank",rel:"noopener noreferrer",className:"view-website-link",children:"Visit Company Website"})})]}),tf=()=>d.jsxs(d.Fragment,{children:[d.jsxs("section",{children:[d.jsx("h2",{children:"Work Experience"}),d.jsx("div",{className:"work-list",children:Ze.workExperience.map(e=>d.jsx(ef,{item:e}))})]}),d.jsxs("section",{children:[d.jsx("h2",{children:"Projects"}),d.jsx("div",{className:"projects-list",children:Ze.projects.map(e=>d.jsx(Zl,{item:e}))})]})]}),nf=()=>{const[e,t]=y.useState(100);return d.jsxs(Ts,{children:[d.jsx(Ms,{onMenuToggle:n=>t(n)}),d.jsx("div",{className:"container",style:{marginTop:`${e+100}px`},children:d.jsxs(Ns,{children:[d.jsx(yt,{path:"/about-me",element:d.jsx(Jl,{})}),d.jsx(yt,{path:"/education",element:d.jsx(Ql,{})}),d.jsx(yt,{path:"/experience",element:d.jsx(tf,{})})]})}),d.jsx(Yl,{})]})};Oi.createRoot(document.getElementById("root")).render(d.jsx(y.StrictMode,{children:d.jsx(nf,{})}));
