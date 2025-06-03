import{r as ra,g as aa,a as ia}from"./vendor-BtP0CW_r.js";function Ai(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var Gt={exports:{}},Be={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var er;function ji(){if(er)return Be;er=1;var e=ra(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(s,c,l){var u,d={},p=null,h=null;l!==void 0&&(p=""+l),c.key!==void 0&&(p=""+c.key),c.ref!==void 0&&(h=c.ref);for(u in c)r.call(c,u)&&!i.hasOwnProperty(u)&&(d[u]=c[u]);if(s&&s.defaultProps)for(u in c=s.defaultProps,c)d[u]===void 0&&(d[u]=c[u]);return{$$typeof:t,type:s,key:p,ref:h,props:d,_owner:a.current}}return Be.Fragment=n,Be.jsx=o,Be.jsxs=o,Be}var tr;function Ni(){return tr||(tr=1,Gt.exports=ji()),Gt.exports}var f=Ni(),m=ra();const oe=aa(m),Oi=Ai({__proto__:null,default:oe},[m]);var ut={},nr;function Ti(){if(nr)return ut;nr=1;var e=ia();return ut.createRoot=e.createRoot,ut.hydrateRoot=e.hydrateRoot,ut}var Ri=Ti(),L=function(){return L=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},L.apply(this,arguments)};function St(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var N="-ms-",He="-moz-",A="-webkit-",oa="comm",jt="rule",_n="decl",_i="@import",sa="@keyframes",Mi="@layer",ca=Math.abs,Mn=String.fromCharCode,cn=Object.assign;function Li(e,t){return M(e,0)^45?(((t<<2^M(e,0))<<2^M(e,1))<<2^M(e,2))<<2^M(e,3):0}function la(e){return e.trim()}function J(e,t){return(e=t.exec(e))?e[0]:e}function C(e,t,n){return e.replace(t,n)}function mt(e,t,n){return e.indexOf(t,n)}function M(e,t){return e.charCodeAt(t)|0}function je(e,t,n){return e.slice(t,n)}function W(e){return e.length}function ua(e){return e.length}function We(e,t){return t.push(e),e}function Fi(e,t){return e.map(t).join("")}function rr(e,t){return e.filter(function(n){return!J(n,t)})}var Nt=1,Ne=1,fa=0,U=0,R=0,Le="";function Ot(e,t,n,r,a,i,o,s){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:Nt,column:Ne,length:o,return:"",siblings:s}}function re(e,t){return cn(Ot("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ke(e){for(;e.root;)e=re(e.root,{children:[e]});We(e,e.siblings)}function Di(){return R}function zi(){return R=U>0?M(Le,--U):0,Ne--,R===10&&(Ne=1,Nt--),R}function B(){return R=U<fa?M(Le,U++):0,Ne++,R===10&&(Ne=1,Nt++),R}function he(){return M(Le,U)}function ht(){return U}function Tt(e,t){return je(Le,e,t)}function ln(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $i(e){return Nt=Ne=1,fa=W(Le=e),U=0,[]}function Ui(e){return Le="",e}function Ht(e){return la(Tt(U-1,un(e===91?e+2:e===40?e+1:e)))}function Bi(e){for(;(R=he())&&R<33;)B();return ln(e)>2||ln(R)>3?"":" "}function Wi(e,t){for(;--t&&B()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return Tt(e,ht()+(t<6&&he()==32&&B()==32))}function un(e){for(;B();)switch(R){case e:return U;case 34:case 39:e!==34&&e!==39&&un(R);break;case 40:e===41&&un(e);break;case 92:B();break}return U}function Yi(e,t){for(;B()&&e+R!==57;)if(e+R===84&&he()===47)break;return"/*"+Tt(t,U-1)+"*"+Mn(e===47?e:B())}function Gi(e){for(;!ln(he());)B();return Tt(e,U)}function Hi(e){return Ui(gt("",null,null,null,[""],e=$i(e),0,[0],e))}function gt(e,t,n,r,a,i,o,s,c){for(var l=0,u=0,d=o,p=0,h=0,x=0,w=1,g=1,y=1,b=0,S="",E=a,P=i,j=r,k=S;g;)switch(x=b,b=B()){case 40:if(x!=108&&M(k,d-1)==58){mt(k+=C(Ht(b),"&","&\f"),"&\f",ca(l?s[l-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:k+=Ht(b);break;case 9:case 10:case 13:case 32:k+=Bi(x);break;case 92:k+=Wi(ht()-1,7);continue;case 47:switch(he()){case 42:case 47:We(Vi(Yi(B(),ht()),t,n,c),c);break;default:k+="/"}break;case 123*w:s[l++]=W(k)*y;case 125*w:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+u:y==-1&&(k=C(k,/\f/g,"")),h>0&&W(k)-d&&We(h>32?ir(k+";",r,n,d-1,c):ir(C(k," ","")+";",r,n,d-2,c),c);break;case 59:k+=";";default:if(We(j=ar(k,t,n,l,u,a,s,S,E=[],P=[],d,i),i),b===123)if(u===0)gt(k,t,j,j,E,i,d,s,P);else switch(p===99&&M(k,3)===110?100:p){case 100:case 108:case 109:case 115:gt(e,j,j,r&&We(ar(e,j,j,0,0,a,s,S,a,E=[],d,P),P),a,P,d,s,r?E:P);break;default:gt(k,j,j,j,[""],P,0,s,P)}}l=u=h=0,w=y=1,S=k="",d=o;break;case 58:d=1+W(k),h=x;default:if(w<1){if(b==123)--w;else if(b==125&&w++==0&&zi()==125)continue}switch(k+=Mn(b),b*w){case 38:y=u>0?1:(k+="\f",-1);break;case 44:s[l++]=(W(k)-1)*y,y=1;break;case 64:he()===45&&(k+=Ht(B())),p=he(),u=d=W(S=k+=Gi(ht())),b++;break;case 45:x===45&&W(k)==2&&(w=0)}}return i}function ar(e,t,n,r,a,i,o,s,c,l,u,d){for(var p=a-1,h=a===0?i:[""],x=ua(h),w=0,g=0,y=0;w<r;++w)for(var b=0,S=je(e,p+1,p=ca(g=o[w])),E=e;b<x;++b)(E=la(g>0?h[b]+" "+S:C(S,/&\f/g,h[b])))&&(c[y++]=E);return Ot(e,t,n,a===0?jt:s,c,l,u,d)}function Vi(e,t,n,r){return Ot(e,t,n,oa,Mn(Di()),je(e,2,-2),0,r)}function ir(e,t,n,r,a){return Ot(e,t,n,_n,je(e,0,r),je(e,r+1,-1),r,a)}function da(e,t,n){switch(Li(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+e+e;case 4789:return He+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+He+e+N+e+e;case 5936:switch(M(e,t+11)){case 114:return A+e+N+C(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+N+C(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+N+C(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return A+e+N+e+e;case 6165:return A+e+N+"flex-"+e+e;case 5187:return A+e+C(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return A+e+N+"flex-item-"+C(e,/flex-|-self/g,"")+(J(e,/flex-|baseline/)?"":N+"grid-row-"+C(e,/flex-|-self/g,""))+e;case 4675:return A+e+N+"flex-line-pack"+C(e,/align-content|flex-|-self/g,"")+e;case 5548:return A+e+N+C(e,"shrink","negative")+e;case 5292:return A+e+N+C(e,"basis","preferred-size")+e;case 6060:return A+"box-"+C(e,"-grow","")+A+e+N+C(e,"grow","positive")+e;case 4554:return A+C(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return C(C(C(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return C(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return C(C(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+e+e;case 4200:if(!J(e,/flex-|baseline/))return N+"grid-column-align"+je(e,t)+e;break;case 2592:case 3360:return N+C(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,a){return t=a,J(r.props,/grid-\w+-end/)})?~mt(e+(n=n[t].value),"span",0)?e:N+C(e,"-start","")+e+N+"grid-row-span:"+(~mt(n,"span",0)?J(n,/\d+/):+J(n,/\d+/)-+J(e,/\d+/))+";":N+C(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return J(r.props,/grid-\w+-start/)})?e:N+C(C(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return C(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(W(e)-1-t>6)switch(M(e,t+1)){case 109:if(M(e,t+4)!==45)break;case 102:return C(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+He+(M(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~mt(e,"stretch",0)?da(C(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return C(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,i,o,s,c,l){return N+a+":"+i+l+(o?N+a+"-span:"+(s?c:+c-+i)+l:"")+e});case 4949:if(M(e,t+6)===121)return C(e,":",":"+A)+e;break;case 6444:switch(M(e,M(e,14)===45?18:11)){case 120:return C(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+A+(M(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+N+"$2box$3")+e;case 100:return C(e,":",":"+N)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return C(e,"scroll-","scroll-snap-")+e}return e}function kt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function qi(e,t,n,r){switch(e.type){case Mi:if(e.children.length)break;case _i:case _n:return e.return=e.return||e.value;case oa:return"";case sa:return e.return=e.value+"{"+kt(e.children,r)+"}";case jt:if(!W(e.value=e.props.join(",")))return""}return W(n=kt(e.children,r))?e.return=e.value+"{"+n+"}":""}function Xi(e){var t=ua(e);return function(n,r,a,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,a,i)||"";return o}}function Ji(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ki(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case _n:e.return=da(e.value,e.length,n);return;case sa:return kt([re(e,{value:C(e.value,"@","@"+A)})],r);case jt:if(e.length)return Fi(n=e.props,function(a){switch(J(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ke(re(e,{props:[C(a,/:(read-\w+)/,":"+He+"$1")]})),ke(re(e,{props:[a]})),cn(e,{props:rr(n,r)});break;case"::placeholder":ke(re(e,{props:[C(a,/:(plac\w+)/,":"+A+"input-$1")]})),ke(re(e,{props:[C(a,/:(plac\w+)/,":"+He+"$1")]})),ke(re(e,{props:[C(a,/:(plac\w+)/,N+"input-$1")]})),ke(re(e,{props:[a]})),cn(e,{props:rr(n,r)});break}return""})}}var Qi={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},F={},Oe=typeof process<"u"&&F!==void 0&&(F.REACT_APP_SC_ATTR||F.SC_ATTR)||"data-styled",pa="active",ma="data-styled-version",Rt="6.1.13",Ln=`/*!sc*/
`,Ct=typeof window<"u"&&"HTMLElement"in window,Zi=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&F!==void 0&&F.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&F.REACT_APP_SC_DISABLE_SPEEDY!==""?F.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&F.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&F!==void 0&&F.SC_DISABLE_SPEEDY!==void 0&&F.SC_DISABLE_SPEEDY!==""&&F.SC_DISABLE_SPEEDY!=="false"&&F.SC_DISABLE_SPEEDY),_t=Object.freeze([]),Te=Object.freeze({});function eo(e,t,n){return n===void 0&&(n=Te),e.theme!==n.theme&&e.theme||t||n.theme}var ha=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),to=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,no=/(^-|-$)/g;function or(e){return e.replace(to,"-").replace(no,"")}var ro=/(a)(d)/gi,ft=52,sr=function(e){return String.fromCharCode(e+(e>25?39:97))};function fn(e){var t,n="";for(t=Math.abs(e);t>ft;t=t/ft|0)n=sr(t%ft)+n;return(sr(t%ft)+n).replace(ro,"$1-$2")}var Vt,ga=5381,Ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ya=function(e){return Ee(ga,e)};function ao(e){return fn(ya(e)>>>0)}function io(e){return e.displayName||e.name||"Component"}function qt(e){return typeof e=="string"&&!0}var va=typeof Symbol=="function"&&Symbol.for,ba=va?Symbol.for("react.memo"):60115,oo=va?Symbol.for("react.forward_ref"):60112,so={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},co={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xa={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lo=((Vt={})[oo]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vt[ba]=xa,Vt);function cr(e){return("type"in(t=e)&&t.type.$$typeof)===ba?xa:"$$typeof"in e?lo[e.$$typeof]:so;var t}var uo=Object.defineProperty,fo=Object.getOwnPropertyNames,lr=Object.getOwnPropertySymbols,po=Object.getOwnPropertyDescriptor,mo=Object.getPrototypeOf,ur=Object.prototype;function wa(e,t,n){if(typeof t!="string"){if(ur){var r=mo(t);r&&r!==ur&&wa(e,r,n)}var a=fo(t);lr&&(a=a.concat(lr(t)));for(var i=cr(e),o=cr(t),s=0;s<a.length;++s){var c=a[s];if(!(c in co||n&&n[c]||o&&c in o||i&&c in i)){var l=po(t,c);try{uo(e,c,l)}catch{}}}}return e}function Re(e){return typeof e=="function"}function Fn(e){return typeof e=="object"&&"styledComponentId"in e}function me(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function fr(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Xe(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function dn(e,t,n){if(n===void 0&&(n=!1),!n&&!Xe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=dn(e[r],t[r]);else if(Xe(t))for(var r in t)e[r]=dn(e[r],t[r]);return e}function Dn(e,t){Object.defineProperty(e,"toString",{value:t})}function tt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ho=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,i=a;t>=i;)if((i<<=1)<0)throw tt(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=a;o<i;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),c=(o=0,n.length);o<c;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),a=r+n;this.groupSizes[t]=0;for(var i=r;i<a;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],a=this.indexOfGroup(t),i=a+r,o=a;o<i;o++)n+="".concat(this.tag.getRule(o)).concat(Ln);return n},e}(),yt=new Map,Et=new Map,vt=1,dt=function(e){if(yt.has(e))return yt.get(e);for(;Et.has(vt);)vt++;var t=vt++;return yt.set(e,t),Et.set(t,e),t},go=function(e,t){vt=t+1,yt.set(e,t),Et.set(t,e)},yo="style[".concat(Oe,"][").concat(ma,'="').concat(Rt,'"]'),vo=new RegExp("^".concat(Oe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),bo=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},xo=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ln),a=[],i=0,o=r.length;i<o;i++){var s=r[i].trim();if(s){var c=s.match(vo);if(c){var l=0|parseInt(c[1],10),u=c[2];l!==0&&(go(u,l),bo(e,u,c[3]),e.getTag().insertRules(l,a)),a.length=0}else a.push(s)}}},dr=function(e){for(var t=document.querySelectorAll(yo),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(Oe)!==pa&&(xo(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function wo(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Sa=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(s){var c=Array.from(s.querySelectorAll("style[".concat(Oe,"]")));return c[c.length-1]}(n),i=a!==void 0?a.nextSibling:null;r.setAttribute(Oe,pa),r.setAttribute(ma,Rt);var o=wo();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},So=function(){function e(t){this.element=Sa(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,a=0,i=r.length;a<i;a++){var o=r[a];if(o.ownerNode===n)return o}throw tt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ko=function(){function e(t){this.element=Sa(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Co=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),pr=Ct,Eo={isServer:!Ct,useCSSOMInjection:!Zi},ka=function(){function e(t,n,r){t===void 0&&(t=Te),n===void 0&&(n={});var a=this;this.options=L(L({},Eo),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ct&&pr&&(pr=!1,dr(this)),Dn(this,function(){return function(i){for(var o=i.getTag(),s=o.length,c="",l=function(d){var p=function(y){return Et.get(y)}(d);if(p===void 0)return"continue";var h=i.names.get(p),x=o.getGroup(d);if(h===void 0||!h.size||x.length===0)return"continue";var w="".concat(Oe,".g").concat(d,'[id="').concat(p,'"]'),g="";h!==void 0&&h.forEach(function(y){y.length>0&&(g+="".concat(y,","))}),c+="".concat(x).concat(w,'{content:"').concat(g,'"}').concat(Ln)},u=0;u<s;u++)l(u);return c}(a)})}return e.registerId=function(t){return dt(t)},e.prototype.rehydrate=function(){!this.server&&Ct&&dr(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(L(L({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,a=n.target;return n.isServer?new Co(a):r?new So(a):new ko(a)}(this.options),new ho(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(dt(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(dt(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(dt(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Io=/&/g,Po=/^\s*\/\/.*$/gm;function Ca(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ca(n.children,t)),n})}function Ao(e){var t,n,r,a=Te,i=a.options,o=i===void 0?Te:i,s=a.plugins,c=s===void 0?_t:s,l=function(p,h,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):p},u=c.slice();u.push(function(p){p.type===jt&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(Io,n).replace(r,l))}),o.prefix&&u.push(Ki),u.push(qi);var d=function(p,h,x,w){h===void 0&&(h=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var g=p.replace(Po,""),y=Hi(x||h?"".concat(x," ").concat(h," { ").concat(g," }"):g);o.namespace&&(y=Ca(y,o.namespace));var b=[];return kt(y,Xi(u.concat(Ji(function(S){return b.push(S)})))),b};return d.hash=c.length?c.reduce(function(p,h){return h.name||tt(15),Ee(p,h.name)},ga).toString():"",d}var jo=new ka,pn=Ao(),Ea=oe.createContext({shouldForwardProp:void 0,styleSheet:jo,stylis:pn});Ea.Consumer;oe.createContext(void 0);function mr(){return m.useContext(Ea)}var No=function(){function e(t,n){var r=this;this.inject=function(a,i){i===void 0&&(i=pn);var o=r.name+i.hash;a.hasNameForId(r.id,o)||a.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Dn(this,function(){throw tt(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=pn),this.name+t.hash},e}(),Oo=function(e){return e>="A"&&e<="Z"};function hr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Oo(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ia=function(e){return e==null||e===!1||e===""},Pa=function(e){var t,n,r=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!Ia(i)&&(Array.isArray(i)&&i.isCss||Re(i)?r.push("".concat(hr(a),":"),i,";"):Xe(i)?r.push.apply(r,St(St(["".concat(a," {")],Pa(i),!1),["}"],!1)):r.push("".concat(hr(a),": ").concat((t=a,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Qi||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ge(e,t,n,r){if(Ia(e))return[];if(Fn(e))return[".".concat(e.styledComponentId)];if(Re(e)){if(!Re(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var a=e(t);return ge(a,t,n,r)}var i;return e instanceof No?n?(e.inject(n,r),[e.getName(r)]):[e]:Xe(e)?Pa(e):Array.isArray(e)?Array.prototype.concat.apply(_t,e.map(function(o){return ge(o,t,n,r)})):[e.toString()]}function To(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Re(n)&&!Fn(n))return!1}return!0}var Ro=ya(Rt),_o=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&To(t),this.componentId=n,this.baseHash=Ee(Ro,n),this.baseStyle=r,ka.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=me(a,this.staticRulesId);else{var i=fr(ge(this.rules,t,n,r)),o=fn(Ee(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=r(i,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}a=me(a,o),this.staticRulesId=o}else{for(var c=Ee(this.baseHash,r.hash),l="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")l+=d;else if(d){var p=fr(ge(d,t,n,r));c=Ee(c,p+u),l+=p}}if(l){var h=fn(c>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(l,".".concat(h),void 0,this.componentId)),a=me(a,h)}}return a},e}(),Aa=oe.createContext(void 0);Aa.Consumer;var Xt={};function Mo(e,t,n){var r=Fn(e),a=e,i=!qt(e),o=t.attrs,s=o===void 0?_t:o,c=t.componentId,l=c===void 0?function(E,P){var j=typeof E!="string"?"sc":or(E);Xt[j]=(Xt[j]||0)+1;var k="".concat(j,"-").concat(ao(Rt+j+Xt[j]));return P?"".concat(P,"-").concat(k):k}(t.displayName,t.parentComponentId):c,u=t.displayName,d=u===void 0?function(E){return qt(E)?"styled.".concat(E):"Styled(".concat(io(E),")")}(e):u,p=t.displayName&&t.componentId?"".concat(or(t.displayName),"-").concat(t.componentId):t.componentId||l,h=r&&a.attrs?a.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&a.shouldForwardProp){var w=a.shouldForwardProp;if(t.shouldForwardProp){var g=t.shouldForwardProp;x=function(E,P){return w(E,P)&&g(E,P)}}else x=w}var y=new _o(n,p,r?a.componentStyle:void 0);function b(E,P){return function(j,k,ue){var it=j.attrs,wi=j.componentStyle,Si=j.defaultProps,ki=j.foldedComponentIds,Ci=j.styledComponentId,Ei=j.target,Ii=oe.useContext(Aa),Pi=mr(),Bt=j.shouldForwardProp||Pi.shouldForwardProp,Qn=eo(k,Ii,Si)||Te,X=function(st,$e,ct){for(var Ue,fe=L(L({},$e),{className:void 0,theme:ct}),Yt=0;Yt<st.length;Yt+=1){var lt=Re(Ue=st[Yt])?Ue(fe):Ue;for(var te in lt)fe[te]=te==="className"?me(fe[te],lt[te]):te==="style"?L(L({},fe[te]),lt[te]):lt[te]}return $e.className&&(fe.className=me(fe.className,$e.className)),fe}(it,k,Qn),ot=X.as||Ei,ze={};for(var ee in X)X[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&X.theme===Qn||(ee==="forwardedAs"?ze.as=X.forwardedAs:Bt&&!Bt(ee,ot)||(ze[ee]=X[ee]));var Zn=function(st,$e){var ct=mr(),Ue=st.generateAndInjectStyles($e,ct.styleSheet,ct.stylis);return Ue}(wi,X),Wt=me(ki,Ci);return Zn&&(Wt+=" "+Zn),X.className&&(Wt+=" "+X.className),ze[qt(ot)&&!ha.has(ot)?"class":"className"]=Wt,ze.ref=ue,m.createElement(ot,ze)}(S,E,P)}b.displayName=d;var S=oe.forwardRef(b);return S.attrs=h,S.componentStyle=y,S.displayName=d,S.shouldForwardProp=x,S.foldedComponentIds=r?me(a.foldedComponentIds,a.styledComponentId):"",S.styledComponentId=p,S.target=r?a.target:e,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(P){for(var j=[],k=1;k<arguments.length;k++)j[k-1]=arguments[k];for(var ue=0,it=j;ue<it.length;ue++)dn(P,it[ue],!0);return P}({},a.defaultProps,E):E}}),Dn(S,function(){return".".concat(S.styledComponentId)}),i&&wa(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function gr(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var yr=function(e){return Object.assign(e,{isCss:!0})};function Lo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Re(e)||Xe(e))return yr(ge(gr(_t,St([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?ge(r):yr(ge(gr(r,t)))}function mn(e,t,n){if(n===void 0&&(n=Te),!t)throw tt(1,t);var r=function(a){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,Lo.apply(void 0,St([a],i,!1)))};return r.attrs=function(a){return mn(e,t,L(L({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return mn(e,t,L(L({},n),a))},r}var ja=function(e){return mn(Mo,e)},q=ja;ha.forEach(function(e){q[e]=ja(e)});const Fo=q.div`
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
`,Do=q.h1`
  font-size: 1.5em;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`,zo=q.div`
  display: flex;
  gap: 15px;

  @media (max-width: 966px) {
    display: none;
  }
`,Ce=q.button`
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
`,$o=q.button`
  display: none;
  font-size: 1.5em;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;

  @media (max-width: 966px) {
    display: block;
  }
`,Uo=q.div`
  display: ${({isOpen:e})=>e?"flex":"none"};
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
`;ia();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Je(){return Je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Je.apply(this,arguments)}var ae;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ae||(ae={}));const vr="popstate";function Bo(e){e===void 0&&(e={});function t(a,i){let{pathname:o="/",search:s="",hash:c=""}=Se(a.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),hn("",{pathname:o,search:s,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(a,i){let o=a.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let c=a.location.href,l=c.indexOf("#");s=l===-1?c:c.slice(0,l)}return s+"#"+(typeof i=="string"?i:Na(i))}function r(a,i){zn(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Yo(t,n,r,e)}function _(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Wo(){return Math.random().toString(36).substr(2,8)}function br(e,t){return{usr:e.state,key:e.key,idx:t}}function hn(e,t,n,r){return n===void 0&&(n=null),Je({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Se(t):t,{state:n,key:t&&t.key||r||Wo()})}function Na(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Se(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Yo(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,s=ae.Pop,c=null,l=u();l==null&&(l=0,o.replaceState(Je({},o.state,{idx:l}),""));function u(){return(o.state||{idx:null}).idx}function d(){s=ae.Pop;let g=u(),y=g==null?null:g-l;l=g,c&&c({action:s,location:w.location,delta:y})}function p(g,y){s=ae.Push;let b=hn(w.location,g,y);n&&n(b,g),l=u()+1;let S=br(b,l),E=w.createHref(b);try{o.pushState(S,"",E)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;a.location.assign(E)}i&&c&&c({action:s,location:w.location,delta:1})}function h(g,y){s=ae.Replace;let b=hn(w.location,g,y);n&&n(b,g),l=u();let S=br(b,l),E=w.createHref(b);o.replaceState(S,"",E),i&&c&&c({action:s,location:w.location,delta:0})}function x(g){let y=a.location.origin!=="null"?a.location.origin:a.location.href,b=typeof g=="string"?g:Na(g);return b=b.replace(/ $/,"%20"),_(y,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,y)}let w={get action(){return s},get location(){return e(a,o)},listen(g){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(vr,d),c=g,()=>{a.removeEventListener(vr,d),c=null}},createHref(g){return t(a,g)},createURL:x,encodeLocation(g){let y=x(g);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:p,replace:h,go(g){return o.go(g)}};return w}var xr;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xr||(xr={}));function Go(e,t,n){return n===void 0&&(n="/"),Ho(e,t,n)}function Ho(e,t,n,r){let a=typeof t=="string"?Se(t):t,i=Ra(a.pathname||"/",n);if(i==null)return null;let o=Oa(e);Vo(o);let s=null;for(let c=0;s==null&&c<o.length;++c){let l=is(i);s=ns(o[c],l)}return s}function Oa(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,s)=>{let c={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(_(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let l=ye([r,c.relativePath]),u=n.concat(c);i.children&&i.children.length>0&&(_(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),Oa(i.children,t,u,l)),!(i.path==null&&!i.index)&&t.push({path:l,score:es(l,i.index),routesMeta:u})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))a(i,o);else for(let c of Ta(i.path))a(i,o,c)}),t}function Ta(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=Ta(r.join("/")),s=[];return s.push(...o.map(c=>c===""?i:[i,c].join("/"))),a&&s.push(...o),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function Vo(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ts(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qo=/^:[\w-]+$/,Xo=3,Jo=2,Ko=1,Qo=10,Zo=-2,wr=e=>e==="*";function es(e,t){let n=e.split("/"),r=n.length;return n.some(wr)&&(r+=Zo),t&&(r+=Jo),n.filter(a=>!wr(a)).reduce((a,i)=>a+(qo.test(i)?Xo:i===""?Ko:Qo),r)}function ts(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function ns(e,t,n){let{routesMeta:r}=e,a={},i="/",o=[];for(let s=0;s<r.length;++s){let c=r[s],l=s===r.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=rs({path:c.relativePath,caseSensitive:c.caseSensitive,end:l},u),p=c.route;if(!d)return null;Object.assign(a,d.params),o.push({params:a,pathname:ye([i,d.pathname]),pathnameBase:fs(ye([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=ye([i,d.pathnameBase]))}return o}function rs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=as(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((l,u,d)=>{let{paramName:p,isOptional:h}=u;if(p==="*"){let w=s[d]||"";o=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const x=s[d];return h&&!x?l[p]=void 0:l[p]=(x||"").replace(/%2F/g,"/"),l},{}),pathname:i,pathnameBase:o,pattern:e}}function as(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),zn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function is(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return zn(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ra(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function os(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?Se(e):e;return{pathname:n?n.startsWith("/")?n:ss(n,t):t,search:ds(r),hash:ps(a)}}function ss(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Jt(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cs(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ls(e,t){let n=cs(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function us(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=Se(e):(a=Je({},e),_(!a.pathname||!a.pathname.includes("?"),Jt("?","pathname","search",a)),_(!a.pathname||!a.pathname.includes("#"),Jt("#","pathname","hash",a)),_(!a.search||!a.search.includes("#"),Jt("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,s;if(o==null)s=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;a.pathname=p.join("/")}s=d>=0?t[d]:"/"}let c=os(a,s),l=o&&o!=="/"&&o.endsWith("/"),u=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(l||u)&&(c.pathname+="/"),c}const ye=e=>e.join("/").replace(/\/\/+/g,"/"),fs=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ds=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ps=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ms(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const _a=["post","put","patch","delete"];new Set(_a);const hs=["get",..._a];new Set(hs);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ke(){return Ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ke.apply(this,arguments)}const $n=m.createContext(null),gs=m.createContext(null),Mt=m.createContext(null),Lt=m.createContext(null),Fe=m.createContext({outlet:null,matches:[],isDataRoute:!1}),Ma=m.createContext(null);function Ft(){return m.useContext(Lt)!=null}function La(){return Ft()||_(!1),m.useContext(Lt).location}function Fa(e){m.useContext(Mt).static||m.useLayoutEffect(e)}function ys(){let{isDataRoute:e}=m.useContext(Fe);return e?Ns():vs()}function vs(){Ft()||_(!1);let e=m.useContext($n),{basename:t,future:n,navigator:r}=m.useContext(Mt),{matches:a}=m.useContext(Fe),{pathname:i}=La(),o=JSON.stringify(ls(a,n.v7_relativeSplatPath)),s=m.useRef(!1);return Fa(()=>{s.current=!0}),m.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){r.go(l);return}let d=us(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:ye([t,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[t,r,o,i,e])}function bs(e,t){return xs(e,t)}function xs(e,t,n,r){Ft()||_(!1);let{navigator:a,static:i}=m.useContext(Mt),{matches:o}=m.useContext(Fe),s=o[o.length-1],c=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=La(),d;if(t){var p;let y=typeof t=="string"?Se(t):t;l==="/"||(p=y.pathname)!=null&&p.startsWith(l)||_(!1),d=y}else d=u;let h=d.pathname||"/",x=h;if(l!=="/"){let y=l.replace(/^\//,"").split("/");x="/"+h.replace(/^\//,"").split("/").slice(y.length).join("/")}let w=Go(e,{pathname:x}),g=Es(w&&w.map(y=>Object.assign({},y,{params:Object.assign({},c,y.params),pathname:ye([l,a.encodeLocation?a.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:ye([l,a.encodeLocation?a.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,n,r);return t&&g?m.createElement(Lt.Provider,{value:{location:Ke({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:ae.Pop}},g):g}function ws(){let e=js(),t=ms(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.createElement("pre",{style:a},n):null,null)}const Ss=m.createElement(ws,null);class ks extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?m.createElement(Fe.Provider,{value:this.props.routeContext},m.createElement(Ma.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Cs(e){let{routeContext:t,match:n,children:r}=e,a=m.useContext($n);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(Fe.Provider,{value:t},r)}function Es(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(a=n)==null?void 0:a.errors;if(s!=null){let u=o.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);u>=0||_(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,l=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(l=u),d.route.id){let{loaderData:p,errors:h}=n,x=d.route.loader&&p[d.route.id]===void 0&&(!h||h[d.route.id]===void 0);if(d.route.lazy||x){c=!0,l>=0?o=o.slice(0,l+1):o=[o[0]];break}}}return o.reduceRight((u,d,p)=>{let h,x=!1,w=null,g=null;n&&(h=s&&d.route.id?s[d.route.id]:void 0,w=d.route.errorElement||Ss,c&&(l<0&&p===0?(Os("route-fallback"),x=!0,g=null):l===p&&(x=!0,g=d.route.hydrateFallbackElement||null)));let y=t.concat(o.slice(0,p+1)),b=()=>{let S;return h?S=w:x?S=g:d.route.Component?S=m.createElement(d.route.Component,null):d.route.element?S=d.route.element:S=u,m.createElement(Cs,{match:d,routeContext:{outlet:u,matches:y,isDataRoute:n!=null},children:S})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?m.createElement(ks,{location:n.location,revalidation:n.revalidation,component:w,error:h,children:b(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):b()},null)}var Da=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Da||{}),za=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(za||{});function Is(e){let t=m.useContext($n);return t||_(!1),t}function Ps(e){let t=m.useContext(gs);return t||_(!1),t}function As(e){let t=m.useContext(Fe);return t||_(!1),t}function $a(e){let t=As(),n=t.matches[t.matches.length-1];return n.route.id||_(!1),n.route.id}function js(){var e;let t=m.useContext(Ma),n=Ps(),r=$a();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ns(){let{router:e}=Is(Da.UseNavigateStable),t=$a(za.UseNavigateStable),n=m.useRef(!1);return Fa(()=>{n.current=!0}),m.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Ke({fromRouteId:t},i)))},[e,t])}const Sr={};function Os(e,t,n){Sr[e]||(Sr[e]=!0)}function Ts(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function bt(e){_(!1)}function Rs(e){let{basename:t="/",children:n=null,location:r,navigationType:a=ae.Pop,navigator:i,static:o=!1,future:s}=e;Ft()&&_(!1);let c=t.replace(/^\/*/,"/"),l=m.useMemo(()=>({basename:c,navigator:i,static:o,future:Ke({v7_relativeSplatPath:!1},s)}),[c,s,i,o]);typeof r=="string"&&(r=Se(r));let{pathname:u="/",search:d="",hash:p="",state:h=null,key:x="default"}=r,w=m.useMemo(()=>{let g=Ra(u,c);return g==null?null:{location:{pathname:g,search:d,hash:p,state:h,key:x},navigationType:a}},[c,u,d,p,h,x,a]);return w==null?null:m.createElement(Mt.Provider,{value:l},m.createElement(Lt.Provider,{children:n,value:w}))}function _s(e){let{children:t,location:n}=e;return bs(gn(t),n)}new Promise(()=>{});function gn(e,t){t===void 0&&(t=[]);let n=[];return m.Children.forEach(e,(r,a)=>{if(!m.isValidElement(r))return;let i=[...t,a];if(r.type===m.Fragment){n.push.apply(n,gn(r.props.children,i));return}r.type!==bt&&_(!1),!r.props.index||!r.props.children||_(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=gn(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Ms="6";try{window.__reactRouterVersion=Ms}catch{}const Ls="startTransition",kr=Oi[Ls];function Fs(e){let{basename:t,children:n,future:r,window:a}=e,i=m.useRef();i.current==null&&(i.current=Bo({window:a,v5Compat:!0}));let o=i.current,[s,c]=m.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},u=m.useCallback(d=>{l&&kr?kr(()=>c(d)):c(d)},[c,l]);return m.useLayoutEffect(()=>o.listen(u),[o,u]),m.useEffect(()=>Ts(r),[r]),m.createElement(Rs,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}var Cr;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Cr||(Cr={}));var Er;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Er||(Er={}));const Ds=({onMenuToggle:e})=>{const t=ys(),[n,r]=m.useState(!0),[a,i]=m.useState(0),[o,s]=m.useState(!1),c=m.useRef(null);m.useEffect(()=>{const d=()=>{const p=window.scrollY;p>a&&p>50?r(!1):r(!0),i(p)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[a]),m.useEffect(()=>{const d=()=>{if(e&&c.current){const h=c.current.offsetHeight;e(h)}};d();const p=()=>{d()};return window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}},[o,e]);const l=()=>{s(d=>!d)},u=d=>{t(d),s(!1)};return f.jsxs(Fo,{ref:c,isVisible:n,children:[f.jsx(Do,{children:"Tomáš Greš"}),f.jsx($o,{onClick:l,children:o?"✖":"☰"}),f.jsxs(zo,{children:[f.jsx(Ce,{onClick:()=>u(""),children:"About Me"}),f.jsx(Ce,{onClick:()=>u("education"),children:"Education"}),f.jsx(Ce,{onClick:()=>u("experience"),children:"Experience"})]}),f.jsxs(Uo,{isOpen:o,children:[f.jsx(Ce,{onClick:()=>u(""),children:"About Me"}),f.jsx(Ce,{onClick:()=>u("education"),children:"Education"}),f.jsx(Ce,{onClick:()=>u("experience"),children:"Experience"})]})]})},Ir=()=>{};let Un={},Ua={},Ba=null,Wa={mark:Ir,measure:Ir};try{typeof window<"u"&&(Un=window),typeof document<"u"&&(Ua=document),typeof MutationObserver<"u"&&(Ba=MutationObserver),typeof performance<"u"&&(Wa=performance)}catch{}const{userAgent:Pr=""}=Un.navigator||{},se=Un,O=Ua,Ar=Ba,pt=Wa;se.document;const Z=!!O.documentElement&&!!O.head&&typeof O.addEventListener=="function"&&typeof O.createElement=="function",Ya=~Pr.indexOf("MSIE")||~Pr.indexOf("Trident/");var T="classic",Ga="duotone",D="sharp",z="sharp-duotone",zs=[T,Ga,D,z],$s={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},jr={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Us=["kit"],Bs=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Ws=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ys={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Gs={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Hs={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Vs={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},qs={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Xs={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Ha={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Js=["solid","regular","light","thin","duotone","brands"],Va=[1,2,3,4,5,6,7,8,9,10],Ks=Va.concat([11,12,13,14,15,16,17,18,19,20]),Ye={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qs=[...Object.keys(Vs),...Js,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ye.GROUP,Ye.SWAP_OPACITY,Ye.PRIMARY,Ye.SECONDARY].concat(Va.map(e=>"".concat(e,"x"))).concat(Ks.map(e=>"w-".concat(e))),Zs={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ec={kit:{"fa-kit":"fak"}},tc={kit:{fak:"fa-kit"}},Nr={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const K="___FONT_AWESOME___",yn=16,qa="fa",Xa="svg-inline--fa",xe="data-fa-i2svg",vn="data-fa-pseudo-element",nc="data-fa-pseudo-element-pending",Bn="data-prefix",Wn="data-icon",Or="fontawesome-i2svg",rc="async",ac=["HTML","HEAD","STYLE","SCRIPT"],Ja=(()=>{try{return!0}catch{return!1}})(),Ka=[T,D,z];function nt(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[T]}})}const Qa={...Ha};Qa[T]={...Ha[T],...jr.kit,...jr["kit-duotone"]};const ve=nt(Qa),bn={...Xs};bn[T]={...bn[T],...Nr.kit,...Nr["kit-duotone"]};const Qe=nt(bn),xn={...qs};xn[T]={...xn[T],...tc.kit};const be=nt(xn),wn={...Hs};wn[T]={...wn[T],...ec.kit};const ic=nt(wn),oc=Bs,Za="fa-layers-text",sc=Ws,cc={...$s};nt(cc);const lc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Kt=Ye,_e=new Set;Object.keys(Qe[T]).map(_e.add.bind(_e));Object.keys(Qe[D]).map(_e.add.bind(_e));Object.keys(Qe[z]).map(_e.add.bind(_e));const uc=[...Us,...Qs],Ve=se.FontAwesomeConfig||{};function fc(e){var t=O.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function dc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}O&&typeof O.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=dc(fc(n));a!=null&&(Ve[r]=a)});const ei={styleDefault:"solid",familyDefault:"classic",cssPrefix:qa,replacementClass:Xa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ve.familyPrefix&&(Ve.cssPrefix=Ve.familyPrefix);const Me={...ei,...Ve};Me.autoReplaceSvg||(Me.observeMutations=!1);const v={};Object.keys(ei).forEach(e=>{Object.defineProperty(v,e,{enumerable:!0,set:function(t){Me[e]=t,qe.forEach(n=>n(v))},get:function(){return Me[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(e){Me.cssPrefix=e,qe.forEach(t=>t(v))},get:function(){return Me.cssPrefix}});se.FontAwesomeConfig=v;const qe=[];function pc(e){return qe.push(e),()=>{qe.splice(qe.indexOf(e),1)}}const ne=yn,G={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mc(e){if(!e||!Z)return;const t=O.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=O.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return O.head.insertBefore(t,r),e}const hc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ze(){let e=12,t="";for(;e-- >0;)t+=hc[Math.random()*62|0];return t}function De(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Yn(e){return e.classList?De(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function ti(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gc(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(ti(e[n]),'" '),"").trim()}function Dt(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Gn(e){return e.size!==G.size||e.x!==G.x||e.y!==G.y||e.rotate!==G.rotate||e.flipX||e.flipY}function yc(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:l}}function vc(e){let{transform:t,width:n=yn,height:r=yn,startCentered:a=!1}=e,i="";return a&&Ya?i+="translate(".concat(t.x/ne-n/2,"em, ").concat(t.y/ne-r/2,"em) "):a?i+="translate(calc(-50% + ".concat(t.x/ne,"em), calc(-50% + ").concat(t.y/ne,"em)) "):i+="translate(".concat(t.x/ne,"em, ").concat(t.y/ne,"em) "),i+="scale(".concat(t.size/ne*(t.flipX?-1:1),", ").concat(t.size/ne*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var bc=`:root, :host {
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
}`;function ni(){const e=qa,t=Xa,n=v.cssPrefix,r=v.replacementClass;let a=bc;if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}let Tr=!1;function Qt(){v.autoAddCss&&!Tr&&(mc(ni()),Tr=!0)}var xc={mixout(){return{dom:{css:ni,insertCss:Qt}}},hooks(){return{beforeDOMElementCreation(){Qt()},beforeI2svg(){Qt()}}}};const Q=se||{};Q[K]||(Q[K]={});Q[K].styles||(Q[K].styles={});Q[K].hooks||(Q[K].hooks={});Q[K].shims||(Q[K].shims=[]);var H=Q[K];const ri=[],ai=function(){O.removeEventListener("DOMContentLoaded",ai),It=1,ri.map(e=>e())};let It=!1;Z&&(It=(O.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O.readyState),It||O.addEventListener("DOMContentLoaded",ai));function wc(e){Z&&(It?setTimeout(e,0):ri.push(e))}function rt(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?ti(e):"<".concat(t," ").concat(gc(n),">").concat(r.map(rt).join(""),"</").concat(t,">")}function Rr(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Zt=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=n,c,l,u;for(r===void 0?(c=1,u=t[i[0]]):(c=0,u=r);c<o;c++)l=i[c],u=s(u,t[l],l,t);return u};function Sc(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Sn(e){const t=Sc(e);return t.length===1?t[0].toString(16):null}function kc(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function _r(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function kn(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=_r(t);typeof H.hooks.addPack=="function"&&!r?H.hooks.addPack(e,_r(t)):H.styles[e]={...H.styles[e]||{},...a},e==="fas"&&kn("fa",t)}const{styles:pe,shims:Cc}=H,Ec={[T]:Object.values(be[T]),[D]:Object.values(be[D]),[z]:Object.values(be[z])};let Hn=null,ii={},oi={},si={},ci={},li={};const Ic={[T]:Object.keys(ve[T]),[D]:Object.keys(ve[D]),[z]:Object.keys(ve[z])};function Pc(e){return~uc.indexOf(e)}function Ac(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Pc(a)?a:null}const ui=()=>{const e=r=>Zt(pe,(a,i,o)=>(a[o]=Zt(i,r,{}),a),{});ii=e((r,a,i)=>(a[3]&&(r[a[3]]=i),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=i}),r)),oi=e((r,a,i)=>(r[i]=i,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=i}),r)),li=e((r,a,i)=>{const o=a[2];return r[i]=i,o.forEach(s=>{r[s]=i}),r});const t="far"in pe||v.autoFetchSvg,n=Zt(Cc,(r,a)=>{const i=a[0];let o=a[1];const s=a[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:s}),r},{names:{},unicodes:{}});si=n.names,ci=n.unicodes,Hn=zt(v.styleDefault,{family:v.familyDefault})};pc(e=>{Hn=zt(e.styleDefault,{family:v.familyDefault})});ui();function Vn(e,t){return(ii[e]||{})[t]}function jc(e,t){return(oi[e]||{})[t]}function ie(e,t){return(li[e]||{})[t]}function fi(e){return si[e]||{prefix:null,iconName:null}}function Nc(e){const t=ci[e],n=Vn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ce(){return Hn}const qn=()=>({prefix:null,iconName:null,rest:[]});function zt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=T}=t,r=ve[n][e],a=Qe[n][e]||Qe[n][r],i=e in H.styles?e:null;return a||i||null}const Oc={[T]:Object.keys(be[T]),[D]:Object.keys(be[D]),[z]:Object.keys(be[z])};function $t(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[T]:"".concat(v.cssPrefix,"-").concat(T),[D]:"".concat(v.cssPrefix,"-").concat(D),[z]:"".concat(v.cssPrefix,"-").concat(z)};let a=null,i=T;const o=zs.filter(c=>c!==Ga);o.forEach(c=>{(e.includes(r[c])||e.some(l=>Oc[c].includes(l)))&&(i=c)});const s=e.reduce((c,l)=>{const u=Ac(v.cssPrefix,l);if(pe[l]?(l=Ec[i].includes(l)?ic[i][l]:l,a=l,c.prefix=l):Ic[i].indexOf(l)>-1?(a=l,c.prefix=zt(l,{family:i})):u?c.iconName=u:l!==v.replacementClass&&!o.some(d=>l===r[d])&&c.rest.push(l),!n&&c.prefix&&c.iconName){const d=a==="fa"?fi(c.iconName):{},p=ie(c.prefix,c.iconName);d.prefix&&(a=null),c.iconName=d.iconName||p||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!pe.far&&pe.fas&&!v.autoFetchSvg&&(c.prefix="fas")}return c},qn());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&i===D&&(pe.fass||v.autoFetchSvg)&&(s.prefix="fass",s.iconName=ie(s.prefix,s.iconName)||s.iconName),!s.prefix&&i===z&&(pe.fasds||v.autoFetchSvg)&&(s.prefix="fasds",s.iconName=ie(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=ce()||"fas"),s}class Tc{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...a[i]},kn(i,a[i]);const o=be[T][i];o&&kn(o,a[i]),ui()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:i,iconName:o,icon:s}=r[a],c=s[2];t[i]||(t[i]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(t[i][l]=s)}),t[i][o]=s}),t}}let Mr=[],Ie={};const Ae={},Rc=Object.keys(Ae);function _c(e,t){let{mixoutsTo:n}=t;return Mr=e,Ie={},Object.keys(Ae).forEach(r=>{Rc.indexOf(r)===-1&&delete Ae[r]}),Mr.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(n[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=a[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Ie[o]||(Ie[o]=[]),Ie[o].push(i[o])})}r.provides&&r.provides(Ae)}),n}function Cn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(Ie[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function we(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(Ie[e]||[]).forEach(i=>{i.apply(null,n)})}function le(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ae[e]?Ae[e].apply(null,t):void 0}function En(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||ce();if(t)return t=ie(n,t)||t,Rr(di.definitions,n,t)||Rr(H.styles,n,t)}const di=new Tc,Mc=()=>{v.autoReplaceSvg=!1,v.observeMutations=!1,we("noAuto")},Lc={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z?(we("beforeI2svg",e),le("pseudoElements2svg",e),le("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,wc(()=>{Dc({autoReplaceSvgRoot:t}),we("watch",e)})}},Fc={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ie(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=zt(e[0]);return{prefix:n,iconName:ie(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(v.cssPrefix,"-"))>-1||e.match(oc))){const t=$t(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||ce(),iconName:ie(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=ce();return{prefix:t,iconName:ie(t,e)||e}}}},$={noAuto:Mc,config:v,dom:Lc,parse:Fc,library:di,findIconDefinition:En,toHtml:rt},Dc=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=O}=e;(Object.keys(H.styles).length>0||v.autoFetchSvg)&&Z&&v.autoReplaceSvg&&$.dom.i2svg({node:t})};function Ut(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>rt(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Z)return;const n=O.createElement("div");return n.innerHTML=e.html,n.children}}),e}function zc(e){let{children:t,main:n,mask:r,attributes:a,styles:i,transform:o}=e;if(Gn(o)&&n.found&&!r.found){const{width:s,height:c}=n,l={x:s/c/2,y:.5};a.style=Dt({...i,"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")})}return[{tag:"svg",attributes:a,children:t}]}function $c(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:o},children:r}]}]}function Xn(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:i,symbol:o,title:s,maskId:c,titleId:l,extra:u,watchable:d=!1}=e,{width:p,height:h}=n.found?n:t,x=r==="fak",w=[v.replacementClass,a?"".concat(v.cssPrefix,"-").concat(a):""].filter(P=>u.classes.indexOf(P)===-1).filter(P=>P!==""||!!P).concat(u.classes).join(" ");let g={children:[],attributes:{...u.attributes,"data-prefix":r,"data-icon":a,class:w,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(h)}};const y=x&&!~u.classes.indexOf("fa-fw")?{width:"".concat(p/h*16*.0625,"em")}:{};d&&(g.attributes[xe]=""),s&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(l||Ze())},children:[s]}),delete g.attributes.title);const b={...g,prefix:r,iconName:a,main:t,mask:n,maskId:c,transform:i,symbol:o,styles:{...y,...u.styles}},{children:S,attributes:E}=n.found&&t.found?le("generateAbstractMask",b)||{children:[],attributes:{}}:le("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=S,b.attributes=E,o?$c(b):zc(b)}function Lr(e){const{content:t,width:n,height:r,transform:a,title:i,extra:o,watchable:s=!1}=e,c={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};s&&(c[xe]="");const l={...o.styles};Gn(a)&&(l.transform=vc({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const u=Dt(l);u.length>0&&(c.style=u);const d=[];return d.push({tag:"span",attributes:c,children:[t]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function Uc(e){const{content:t,title:n,extra:r}=e,a={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=Dt(r.styles);i.length>0&&(a.style=i);const o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:en}=H;function In(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(Kt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Kt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Kt.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const Bc={found:!1,width:512,height:512};function Wc(e,t){!Ja&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Pn(e,t){let n=t;return t==="fa"&&v.styleDefault!==null&&(t=ce()),new Promise((r,a)=>{if(n==="fa"){const i=fi(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&en[t]&&en[t][e]){const i=en[t][e];return r(In(i))}Wc(e,t),r({...Bc,icon:v.showMissingIcons&&e?le("missingIconAbstract")||{}:{}})})}const Fr=()=>{},An=v.measurePerformance&&pt&&pt.mark&&pt.measure?pt:{mark:Fr,measure:Fr},Ge='FA "6.6.0"',Yc=e=>(An.mark("".concat(Ge," ").concat(e," begins")),()=>pi(e)),pi=e=>{An.mark("".concat(Ge," ").concat(e," ends")),An.measure("".concat(Ge," ").concat(e),"".concat(Ge," ").concat(e," begins"),"".concat(Ge," ").concat(e," ends"))};var Jn={begin:Yc,end:pi};const xt=()=>{};function Dr(e){return typeof(e.getAttribute?e.getAttribute(xe):null)=="string"}function Gc(e){const t=e.getAttribute?e.getAttribute(Bn):null,n=e.getAttribute?e.getAttribute(Wn):null;return t&&n}function Hc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function Vc(){return v.autoReplaceSvg===!0?wt.replace:wt[v.autoReplaceSvg]||wt.replace}function qc(e){return O.createElementNS("http://www.w3.org/2000/svg",e)}function Xc(e){return O.createElement(e)}function mi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?qc:Xc}=t;if(typeof e=="string")return O.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){r.appendChild(mi(i,{ceFn:n}))}),r}function Jc(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const wt={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(mi(n),t)}),t.getAttribute(xe)===null&&v.keepOriginalSource){let n=O.createComment(Jc(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Yn(t).indexOf(v.replacementClass))return wt.replace(e);const r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===v.replacementClass||s.match(r)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const a=n.map(i=>rt(i)).join(`
`);t.setAttribute(xe,""),t.innerHTML=a}};function zr(e){e()}function hi(e,t){const n=typeof t=="function"?t:xt;if(e.length===0)n();else{let r=zr;v.mutateApproach===rc&&(r=se.requestAnimationFrame||zr),r(()=>{const a=Vc(),i=Jn.begin("mutate");e.map(a),i(),n()})}}let Kn=!1;function gi(){Kn=!0}function jn(){Kn=!1}let Pt=null;function $r(e){if(!Ar||!v.observeMutations)return;const{treeCallback:t=xt,nodeCallback:n=xt,pseudoElementsCallback:r=xt,observeMutationsRoot:a=O}=e;Pt=new Ar(i=>{if(Kn)return;const o=ce();De(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Dr(s.addedNodes[0])&&(v.searchPseudoElements&&r(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&v.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&Dr(s.target)&&~lc.indexOf(s.attributeName))if(s.attributeName==="class"&&Gc(s.target)){const{prefix:c,iconName:l}=$t(Yn(s.target));s.target.setAttribute(Bn,c||o),l&&s.target.setAttribute(Wn,l)}else Hc(s.target)&&n(s.target)})}),Z&&Pt.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Kc(){Pt&&Pt.disconnect()}function Qc(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Zc(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=$t(Yn(e));return a.prefix||(a.prefix=ce()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=jc(a.prefix,e.innerText)||Vn(a.prefix,Sn(e.innerText))),!a.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function el(e){const t=De(e.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return v.autoA11y&&(n?t["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(r||Ze()):(t["aria-hidden"]="true",t.focusable="false")),t}function tl(){return{iconName:null,title:null,titleId:null,prefix:null,transform:G,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ur(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=Zc(e),i=el(e),o=Cn("parseNodeAttributes",{},e);let s=t.styleParser?Qc(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:G,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:i},...o}}const{styles:nl}=H;function yi(e){const t=v.autoReplaceSvg==="nest"?Ur(e,{styleParser:!1}):Ur(e);return~t.extra.classes.indexOf(Za)?le("generateLayersText",e,t):le("generateSvgReplacementMutation",e,t)}let V=new Set;Ka.map(e=>{V.add("fa-".concat(e))});Object.keys(ve[T]).map(V.add.bind(V));Object.keys(ve[D]).map(V.add.bind(V));Object.keys(ve[z]).map(V.add.bind(V));V=[...V];function Br(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z)return Promise.resolve();const n=O.documentElement.classList,r=u=>n.add("".concat(Or,"-").concat(u)),a=u=>n.remove("".concat(Or,"-").concat(u)),i=v.autoFetchSvg?V:Ka.map(u=>"fa-".concat(u)).concat(Object.keys(nl));i.includes("fa")||i.push("fa");const o=[".".concat(Za,":not([").concat(xe,"])")].concat(i.map(u=>".".concat(u,":not([").concat(xe,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=De(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();const c=Jn.begin("onTree"),l=s.reduce((u,d)=>{try{const p=yi(d);p&&u.push(p)}catch(p){Ja||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise((u,d)=>{Promise.all(l).then(p=>{hi(p,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),c(),u()})}).catch(p=>{c(),d(p)})})}function rl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;yi(e).then(n=>{n&&hi([n],t)})}function al(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:En(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:En(a||{})),e(r,{...n,mask:a})}}const il=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=G,symbol:r=!1,mask:a=null,maskId:i=null,title:o=null,titleId:s=null,classes:c=[],attributes:l={},styles:u={}}=t;if(!e)return;const{prefix:d,iconName:p,icon:h}=e;return Ut({type:"icon",...e},()=>(we("beforeDOMElementCreation",{iconDefinition:e,params:t}),v.autoA11y&&(o?l["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(s||Ze()):(l["aria-hidden"]="true",l.focusable="false")),Xn({icons:{main:In(h),mask:a?In(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:{...G,...n},symbol:r,title:o,maskId:i,titleId:s,extra:{attributes:l,styles:u,classes:c}})))};var ol={mixout(){return{icon:al(il)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Br,e.nodeCallback=rl,e}}},provides(e){e.i2svg=function(t){const{node:n=O,callback:r=()=>{}}=t;return Br(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:i,prefix:o,transform:s,symbol:c,mask:l,maskId:u,extra:d}=n;return new Promise((p,h)=>{Promise.all([Pn(r,o),l.iconName?Pn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(x=>{let[w,g]=x;p([t,Xn({icons:{main:w,mask:g},prefix:o,iconName:r,transform:s,symbol:c,maskId:u,title:a,titleId:i,extra:d,watchable:!0})])}).catch(h)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:i,styles:o}=t;const s=Dt(o);s.length>0&&(r.style=s);let c;return Gn(i)&&(c=le("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(c||a.icon),{children:n,attributes:r}}}},sl={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Ut({type:"layer"},()=>{we("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(i=>{r=r.concat(i.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},cl={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=t;return Ut({type:"counter",content:e},()=>(we("beforeDOMElementCreation",{content:e,params:t}),Uc({content:e.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(v.cssPrefix,"-layers-counter"),...r]}})))}}}},ll={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=G,title:r=null,classes:a=[],attributes:i={},styles:o={}}=t;return Ut({type:"text",content:e},()=>(we("beforeDOMElementCreation",{content:e,params:t}),Lr({content:e,transform:{...G,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(v.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:i}=n;let o=null,s=null;if(Ya){const c=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();o=l.width/c,s=l.height/c}return v.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,Lr({content:t.innerHTML,width:o,height:s,transform:a,title:r,extra:i,watchable:!0})])}}};const ul=new RegExp('"',"ug"),Wr=[1105920,1112319],Yr={FontAwesome:{normal:"fas",400:"fas"},...Gs,...Ys,...Zs},Nn=Object.keys(Yr).reduce((e,t)=>(e[t.toLowerCase()]=Yr[t],e),{}),fl=Object.keys(Nn).reduce((e,t)=>{const n=Nn[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function dl(e){const t=e.replace(ul,""),n=kc(t,0),r=n>=Wr[0]&&n<=Wr[1],a=t.length===2?t[0]===t[1]:!1;return{value:Sn(a?t[0]:t),isSecondary:r||a}}function pl(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(Nn[n]||{})[a]||fl[n]}function Gr(e,t){const n="".concat(nc).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const o=De(e.children).filter(p=>p.getAttribute(vn)===t)[0],s=se.getComputedStyle(e,t),c=s.getPropertyValue("font-family"),l=c.match(sc),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){const p=s.getPropertyValue("content");let h=pl(c,u);const{value:x,isSecondary:w}=dl(p),g=l[0].startsWith("FontAwesome");let y=Vn(h,x),b=y;if(g){const S=Nc(x);S.iconName&&S.prefix&&(y=S.iconName,h=S.prefix)}if(y&&!w&&(!o||o.getAttribute(Bn)!==h||o.getAttribute(Wn)!==b)){e.setAttribute(n,b),o&&e.removeChild(o);const S=tl(),{extra:E}=S;E.attributes[vn]=t,Pn(y,h).then(P=>{const j=Xn({...S,icons:{main:P,mask:qn()},prefix:h,iconName:b,extra:E,watchable:!0}),k=O.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(k,e.firstChild):e.appendChild(k),k.outerHTML=j.map(ue=>rt(ue)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ml(e){return Promise.all([Gr(e,"::before"),Gr(e,"::after")])}function hl(e){return e.parentNode!==document.head&&!~ac.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(vn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Hr(e){if(Z)return new Promise((t,n)=>{const r=De(e.querySelectorAll("*")).filter(hl).map(ml),a=Jn.begin("searchPseudoElements");gi(),Promise.all(r).then(()=>{a(),jn(),t()}).catch(()=>{a(),jn(),n()})})}var gl={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Hr,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=O}=t;v.searchPseudoElements&&Hr(n)}}};let Vr=!1;var yl={mixout(){return{dom:{unwatch(){gi(),Vr=!0}}}},hooks(){return{bootstrap(){$r(Cn("mutationObserverCallbacks",{}))},noAuto(){Kc()},watch(e){const{observeMutationsRoot:t}=e;Vr?jn():$r(Cn("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const qr=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),i=a[0];let o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var vl={mixout(){return{parse:{transform:e=>qr(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=qr(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:i}=t;const o={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(s," ").concat(c," ").concat(l)},d={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:u,path:d};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const tn={x:0,y:0,width:"100%",height:"100%"};function Xr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function bl(e){return e.tag==="g"?e.children:[e]}var xl={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?$t(n.split(" ").map(a=>a.trim())):qn();return r.prefix||(r.prefix=ce()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:i,maskId:o,transform:s}=t;const{width:c,icon:l}=a,{width:u,icon:d}=i,p=yc({transform:s,containerWidth:u,iconWidth:c}),h={tag:"rect",attributes:{...tn,fill:"white"}},x=l.children?{children:l.children.map(Xr)}:{},w={tag:"g",attributes:{...p.inner},children:[Xr({tag:l.tag,attributes:{...l.attributes,...p.path},...x})]},g={tag:"g",attributes:{...p.outer},children:[w]},y="mask-".concat(o||Ze()),b="clip-".concat(o||Ze()),S={tag:"mask",attributes:{...tn,id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[h,g]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:bl(d)},S]};return n.push(E,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(y,")"),...tn}}),{children:n,attributes:r}}}},wl={provides(e){let t=!1;se.matchMedia&&(t=se.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...a,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||o.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Sl={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},kl=[xc,ol,sl,cl,ll,gl,yl,vl,xl,wl,Sl];_c(kl,{mixoutsTo:$});$.noAuto;$.config;$.library;$.dom;const On=$.parse;$.findIconDefinition;$.toHtml;const Cl=$.icon;$.layer;$.text;$.counter;var nn={exports:{}},rn,Jr;function El(){if(Jr)return rn;Jr=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return rn=e,rn}var an,Kr;function Il(){if(Kr)return an;Kr=1;var e=El();function t(){}function n(){}return n.resetWarningCache=t,an=function(){function r(o,s,c,l,u,d){if(d!==e){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}r.isRequired=r;function a(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},an}var Qr;function Pl(){return Qr||(Qr=1,nn.exports=Il()()),nn.exports}var Al=Pl();const I=aa(Al);function Zr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zr(Object(n),!0).forEach(function(r){Pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function At(e){"@babel/helpers - typeof";return At=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},At(e)}function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jl(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Nl(e,t){if(e==null)return{};var n=jl(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Tn(e){return Ol(e)||Tl(e)||Rl(e)||_l()}function Ol(e){if(Array.isArray(e))return Rn(e)}function Tl(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Rl(e,t){if(e){if(typeof e=="string")return Rn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rn(e,t)}}function Rn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _l(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ml(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,c=e.spin,l=e.spinPulse,u=e.spinReverse,d=e.pulse,p=e.fixedWidth,h=e.inverse,x=e.border,w=e.listItem,g=e.flip,y=e.size,b=e.rotation,S=e.pull,E=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":d,"fa-fw":p,"fa-inverse":h,"fa-border":x,"fa-li":w,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},Pe(t,"fa-".concat(y),typeof y<"u"&&y!==null),Pe(t,"fa-rotate-".concat(b),typeof b<"u"&&b!==null&&b!==0),Pe(t,"fa-pull-".concat(S),typeof S<"u"&&S!==null),Pe(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(E).map(function(P){return E[P]?P:null}).filter(function(P){return P})}function Ll(e){return e=e-0,e===e}function vi(e){return Ll(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Fl=["style"];function Dl(e){return e.charAt(0).toUpperCase()+e.slice(1)}function zl(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=vi(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Dl(a)]=i:t[a]=i,t},{})}function bi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return bi(e,c)}),a=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.attrs.className=u,delete t.attributes.class;break;case"style":c.attrs.style=zl(u);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?c.attrs[l.toLowerCase()]=u:c.attrs[vi(l)]=u}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Nl(n,Fl);return a.attrs.style=Y(Y({},a.attrs.style),o),e.apply(void 0,[t.tag,Y(Y({},a.attrs),s)].concat(Tn(r)))}var xi=!1;try{xi=!0}catch{}function $l(){if(!xi&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function ea(e){if(e&&At(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(On.icon)return On.icon(e);if(e===null)return null;if(e&&At(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function on(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Pe({},e,t):{}}var ta={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},at=oe.forwardRef(function(e,t){var n=Y(Y({},ta),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,c=n.titleId,l=n.maskId,u=ea(r),d=on("classes",[].concat(Tn(Ml(n)),Tn((o||"").split(" ")))),p=on("transform",typeof n.transform=="string"?On.transform(n.transform):n.transform),h=on("mask",ea(a)),x=Cl(u,Y(Y(Y(Y({},d),p),h),{},{symbol:i,title:s,titleId:c,maskId:l}));if(!x)return $l("Could not find icon",u),null;var w=x.abstract,g={ref:t};return Object.keys(n).forEach(function(y){ta.hasOwnProperty(y)||(g[y]=n[y])}),Ul(w[0],g)});at.displayName="FontAwesomeIcon";at.propTypes={beat:I.bool,border:I.bool,beatFade:I.bool,bounce:I.bool,className:I.string,fade:I.bool,flash:I.bool,mask:I.oneOfType([I.object,I.array,I.string]),maskId:I.string,fixedWidth:I.bool,inverse:I.bool,flip:I.oneOf([!0,!1,"horizontal","vertical","both"]),icon:I.oneOfType([I.object,I.array,I.string]),listItem:I.bool,pull:I.oneOf(["right","left"]),pulse:I.bool,rotation:I.oneOf([0,90,180,270]),shake:I.bool,size:I.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:I.bool,spinPulse:I.bool,spinReverse:I.bool,symbol:I.oneOfType([I.bool,I.string]),title:I.string,titleId:I.string,transform:I.oneOfType([I.string,I.object]),swapOpacity:I.bool};var Ul=bi.bind(null,oe.createElement);const Bl=q.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`,Wl=q.div`
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
`,Yl={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},de={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const na={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"]},Gl={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Hl={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},et={workExperience:[{logo:"files/images/ness-ke.svg",position:"Full Stack Developer",company:"Ness KE s.r.o.",website:"https://www.ness.com/ness-slovakia/",description:"Developed features for React frontend and Node.js backend. Integrated Redux for state management and TypeORM for database operations.",start:"August 2023",end:"January 2024"}],education:[{logo:"files/images/via-logo.svg",institution:"VIA University College",major:"Software Technology Engineering",type:"Bachelor Degree",location:"Horsens, Denmark",start:"September 2021",end:"January 2025"},{logo:"files/images/spse-logo.svg",institution:"Secondary Vocational School of Electrical Engineering",major:"Information and Networking technologies",type:"High School Degree",location:"Prešov, Slovakia",start:"September 2017",end:"May 2021"}],courses:[{institution:"Coursera",logo:"files/images/coursera-logo.svg",title:"IBM - Application Development using Microservices and Serverless",file:"files/certificates/img/Coursera - Application Development using Microservices and Serverless.jpg",verify:"https://coursera.org/verify/7JXTB9S73TO8",achieved:"2025"},{institution:"Coursera",logo:"files/images/coursera-logo.svg",title:"IBM - Introduction to Agile Development and Scrum",file:"files/certificates/img/Coursera - Introduction to Agile Development and Scrum.jpg",verify:"https://coursera.org/verify/T06DBX0D6YN8",achieved:"2025"},{institution:"Coursera",logo:"files/images/coursera-logo.svg",title:"IBM - Continuous Integration and Continuous Delivery (CI-CD)",file:"files/certificates/img/Coursera - Continuous Integration and Continuous Delivery (CI-CD).jpg",verify:"https://coursera.org/verify/204XW3ECNUXN",achieved:"2025"},{institution:"Coursera",logo:"files/images/coursera-logo.svg",title:"IBM - Introduction to Containers w Docker, Kubernetes",file:"files/certificates/img/Coursera - Introduction to Containers w Docker, Kubernetes.jpg",verify:"https://coursera.org/verify/4S5I2UQUUX6E",achieved:"2025"},{institution:"Coursera",logo:"files/images/coursera-logo.svg",title:"IBM - Introduction to DevOps",file:"files/certificates/img/Coursera - Introduction to DevOps.jpg",verify:"https://coursera.org/verify/8H8Q6LSB7NJB",achieved:"2025"},{institution:"Coursera",logo:"files/images/coursera-logo.svg",title:"IBM - Introduction to Test and Behavior Driven Development",file:"files/certificates/img/Coursera - Introduction to Test and Behavior Driven Development.jpg",verify:"https://coursera.org/verify/YUWOJ2IWIDNX",achieved:"2025"}],projects:[{logo:"files/images/hckosice.png",title:"HcKošice",description:"I worked on this project during my internship at Ness KE, where I was in a team of around 7 developers, utilizing a modified SCRUM methodology. I was tasked with designing new features, implementing said features, finding and fixing bugs as well as documenting the system. The technologies we used during development were React & Redux on the front-end, Node.js & Express.js on the back-end, and PostgreSQL with TypeORM for the database.",techStack:["ReactJs","Redux","Node.js","TypeScript","Express.js","PostgreSQL","TypeORM","WebSockets"],projectLinks:[{icon:na,title:"Live Website",url:"https://vstupenky.hckosice.sk/"}]},{logo:"files/images/nodejs-logo.svg",title:"NodeJS/Express Template",description:"A production-ready Node.js/Express backend template built with TypeScript and designed for scalability, testability, and clean architecture. It includes robust authentication with refresh tokens, full test coverage (unit & integration), Docker support, CI/CD pipeline, and a decoupled TypeORM setup for easy persistence swapping. Created to demonstrate backend engineering best practices and real-world application structure.",techStack:["Node.js","RESTApi","TypeScript","Express.js","Jest","Supertest","PostgreSQL","TypeORM","Docker","CI/CD"],projectLinks:[{icon:de,title:"Repository",url:"https://github.com/YoUnGi102/NodeJS-Express-Template"}]},{logo:"files/images/mealprep-tracker-logo.svg",title:"MealPrepTracker",description:"I have a great passion for working-out and eating healthy and so I decided to build a project that would help me. MealPrepTracker is my project, which I will help me (and possibly others) easily save recipes and track associated macro-nutrients.The project is still in the early stages of development, but it is already live and can be used. I am develpoing this project with scalability and maintainability in mind (as if it was a product to be used my many people). The main technologies I chose to use were React (with Redux for state management) on the Front-end and Node.js/Express with PostgreSQL for the RESTFul API.",techStack:["ReactJS","Redux","Node.js","RESTApi","TypeScript","Express.js","Jest","PostgreSQL","TypeORM","Docker","CI/CD"],projectLinks:[{icon:na,title:"Live Website",url:"https://mealpreptrackerfrontend.onrender.com/"},{icon:de,title:"Front-end",url:"https://github.com/YoUnGi102/MealPrepTrackerFrontend"},{icon:de,title:"Back-end",url:"https://github.com/YoUnGi102/MealPrepTrackerBusiness"}]},{logo:"files/images/via-logo.svg",title:"ChadList",description:"A project I developed in my 3rd semester at VIA, with 3 of my classmates. This was my first experience with a N-tier architecture. It was designed with UN Goals in mind (specifically #12 - Sustainable consumption and production) and it's purpose for people to post their unused belongings (whether its kitchen appliances, furniture, tools etc.) for other people who might find use for them rather than throwing it out. It was developed using Blazor on the Presentation layer, .NET for the Bussiness / Logic layer and JAVA with a gRPC API for Database layer.",techStack:["Java","JPA/Hibernate","gRPC","RESTApi","C#/.NET","Blazor","JUnit"],projectLinks:[{icon:de,title:"Presentation Layer",url:"https://github.com/dragoselul/SEP3/tree/main/SEP3/SEP3%20Project/PresentationTier"},{icon:de,title:"Business Layer",url:"https://github.com/dragoselul/SEP3/tree/main/SEP3/SEP3%20Project/BusinessLogicTier"},{icon:de,title:"Database Layer",url:"https://github.com/dragoselul/SEP3/tree/main/SEP3/SEP3%20Project/DataAccessTier"}]}],socialLinks:[{icon:Yl,title:"LinkedIn",url:"https://linkedin.com/in/tomas-gres"},{icon:de,title:"GitHub",url:"https://github.com/Youngi102"},{icon:Gl,title:"G-mail",url:"mailto:tomasgres2001@gmail.com"}]},Vl=()=>f.jsx(Bl,{children:f.jsx(Wl,{children:et.socialLinks.map(e=>f.jsxs("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[f.jsx(at,{icon:e.icon})," ",e.title]},e.title))})}),ql=({lines:e,speed:t=50,pauseBetweenLines:n=500})=>{const[r,a]=m.useState(""),[i,o]=m.useState(0),[s,c]=m.useState(0);return m.useEffect(()=>{if(!(i>=e.length))if(s<e[i].length){const l=setTimeout(()=>{a(u=>u+e[i][s]),c(u=>u+1)},t);return()=>clearTimeout(l)}else{const l=setTimeout(()=>{a(u=>u+`
`),o(u=>u+1),c(0)},n);return()=>clearTimeout(l)}},[s,i,e,t,n]),f.jsxs("pre",{style:{whiteSpace:"pre-wrap"},children:[r,f.jsx("span",{className:"cursor",children:"|"})]})},Xl=`Hi, I´m Tomáš.
I'm a software engineer who loves building apps, learning tech, and staying active.`,Jl=()=>f.jsxs("section",{className:"description-container",children:[f.jsx("img",{className:"profile-image",src:"files/images/profile.jpg",alt:"Tomas Gres"}),f.jsx("div",{className:"description-text",children:f.jsx(ql,{lines:[Xl]})})]}),Kl=q.img`
  width: 100%;
  aspect-ratio: 1;
  display: inline-block;
  background: red;

  /* Normal Mask */
  mask: url(${e=>e.mask}) center/contain no-repeat;

  /* Inverted Mask using mask-composite: exclude */
  ${e=>e.invertMask&&`
    mask: url(${e.mask}) center/contain no-repeat,
    linear-gradient(#000 0 0); /* Extra layer for mask-composite */
    mask-composite: exclude;
  `}
`,sn=({src:e,alt:t,mask:n,invertMask:r=!1,className:a})=>f.jsx(Kl,{src:e,alt:t,mask:n,invertMask:r,className:a}),Ql=()=>f.jsx("div",{className:"MyJourney section-container",children:f.jsxs("div",{className:"section-content",children:[f.jsx("h2",{children:"👨‍💻 My Journey"}),f.jsx("section",{children:f.jsx("p",{children:"From a very young age, I was passionate about science, especially mathematics and physics. Around the age of 14, I discovered programming and began learning to code using C#. I explored both functional and object-oriented programming and created a few simple projects that deepened my understanding. A year later, I decided to apply to a specialized high school focused on Information and Networking Technologies."})}),f.jsxs("section",{children:[f.jsx(sn,{src:"files/images/spse-campus.jpg",alt:"High School",mask:"files/images/masks/spse-logo-mask.svg",className:"section-image"}),f.jsxs("div",{children:[f.jsx("p",{children:"After passing the admission tests, I was accepted and spent the next four years studying programming, networking, electrotechnics, electronics, computer hardware, and robotics."}),f.jsx("p",{children:"I participated in several programming competitions, which sharpened my analytical and problem-solving skills. I also made many friends who shared my passion for learning, and met great teachers who challenged and supported me along the way."}),f.jsx("p",{children:"In my final year, I received an opportunity to apply to universities in Denmark. While the idea of moving abroad was exciting, it was also intimidating — I didn’t know anyone there, and it was far from home. But I’ve always welcomed challenges, so I applied and was accepted to VIA University College."})]})]}),f.jsxs("section",{children:[f.jsx(sn,{src:"files/images/via-campus.jpg",alt:"Studying Abroad",mask:"files/images/masks/via-logo-mask.svg",className:"section-image"}),f.jsxs("div",{children:[f.jsx("p",{children:"Moving to Denmark was a major step. I quickly made friends and settled in with a few classmates. During my time at VIA, I deepened my knowledge of software design principles, explored modern technologies, and learned about areas such as DevOps, Network Security, Computer Architecture, and Machine Learning."}),f.jsx("p",{children:"Machine Learning became a particular interest. For my Bachelor’s thesis, I teamed up with two classmates to work on Agricultural Land Detection for a company called Aeon. We experimented with various ML algorithms and neural networks, ultimately choosing Convolutional Autoencoders for their superior performance. With strong guidance from our supervisor and valuable support from the company, we delivered a successful project."}),f.jsx("p",{children:"In January 2025, I graduated with a Bachelor’s degree and began preparing for my next challenge — joining the tech industry."})]})]}),f.jsxs("section",{children:[f.jsx(sn,{src:"files/images/ness-ke.jpg",alt:"Internship",mask:"files/images/masks/ness-ke-mask.svg",invertMask:!1,className:"section-image"}),f.jsxs("div",{children:[f.jsx("p",{children:"As part of my studies, I completed a five-month internship at Ness KE in Košice, Slovakia, near my hometown. I joined a team working on a ticketing portal for HC Košice, one of the country’s most popular hockey teams."}),f.jsx("p",{children:"There, I gained firsthand experience working on a real-world product using technologies like React, Node.js, and TypeScript. Initially, I was intimidated by the fast-paced environment and the experience level of my teammates, but I quickly adapted. My supervisor and colleagues were supportive, helping me onboard and start contributing to feature development early on."}),f.jsx("p",{children:"At times, I had to take responsibility for key tasks independently, which helped build both my technical and communication skills. It was a transformative experience that gave me confidence in my ability to work as part of a professional engineering team."})]})]}),f.jsxs("section",{children:[f.jsx("p",{children:"Looking back, each step of my journey — from writing my first lines of C# code to completing my Bachelor’s thesis and contributing to a live project — has shaped me into a curious and motivated software engineer. I thrive in environments where I can keep learning, solve real-world problems, and collaborate with others who are passionate about technology."}),f.jsxs("p",{children:["Even after earning my degree, I’ve continued growing my skillset — completing professional development courses from IBM on Coursera and beginning work on a personal project called"," ",f.jsx("strong",{children:"MealPrepTracker"}),". It’s an app designed to store recipes and track meal calories, inspired by my passion for fitness and healthy living."]}),f.jsx("p",{children:"As I step into the next chapter of my career, I’m excited to continue building meaningful software, learning from experienced teams, and contributing to impactful projects."})]})]})}),Zl=()=>f.jsxs(f.Fragment,{children:[f.jsx(Jl,{}),f.jsx(Ql,{})]}),eu=({item:e})=>f.jsxs("div",{className:"education-card",children:[f.jsx("img",{src:e.logo,alt:`${e.institution} logo`,className:"logo"}),f.jsx("strong",{className:"institution",children:e.institution}),f.jsx("p",{className:"major",children:e.major}),f.jsx("p",{className:"type",children:e.type}),f.jsx("p",{className:"location",children:e.location}),f.jsxs("p",{className:"duration",children:[e.start," – ",e.end]})]},e.institution),tu=({src:e,alt:t="Preview image"})=>{const[n,r]=m.useState(!1);return f.jsxs(f.Fragment,{children:[f.jsx("img",{src:e,alt:t,className:"thumbnail",onClick:()=>r(!0)}),n&&f.jsx("div",{className:"image-modal-backdrop",onClick:()=>r(!1),children:f.jsxs("div",{className:"image-modal-content",onClick:a=>a.stopPropagation(),children:[f.jsx("button",{className:"image-modal-close",onClick:()=>r(!1),children:"× Close"}),f.jsx("img",{src:e,alt:t,className:"image-modal-img"})]})})]})},nu=({item:e})=>f.jsxs("div",{className:"course-card",children:[f.jsx("img",{src:e.logo,alt:`${e.institution} logo`,className:"logo"}),f.jsx("strong",{className:"title",children:e.title}),f.jsx(tu,{src:e.file,alt:e.title}),f.jsxs("p",{className:"achieved",children:["Achieved: ",e.achieved]}),f.jsx("a",{className:"verify",href:e.verify,children:"Verify"})]},e.title),ru=()=>f.jsxs("section",{className:"section",children:[f.jsx("h2",{className:"section-title",children:"Education"}),f.jsx("div",{className:"education-grid",children:et.education.map(e=>f.jsx(eu,{item:e}))}),f.jsx("h2",{className:"section-title",style:{marginTop:"4rem"},children:"Courses"}),f.jsx("div",{className:"course-grid",children:et.courses.map(e=>f.jsx(nu,{item:e}))})]}),au=({item:e,onDetail:t})=>f.jsxs("div",{className:"project-card",children:[f.jsx("div",{className:"logo",children:f.jsx("img",{src:e.logo,alt:`${e.title} logo`})}),f.jsx("div",{className:"title",children:f.jsx("h3",{children:e.title})}),f.jsx("div",{className:"description",children:f.jsx("p",{children:e.description.length>200?`${e.description.slice(0,200)}...`:e.description})}),f.jsx("div",{className:"tech-stack",children:e.techStack.map((n,r)=>f.jsx("span",{className:"tech-skill",children:n},r))}),f.jsx("button",{className:"links",onClick:t,children:"View Details"})]},e.title),iu=({onClose:e,project:t})=>{var n;return t?f.jsx("div",{className:"modal-overlay",onClick:e,children:f.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[f.jsx("button",{className:"close-button",onClick:e,children:"✕"}),f.jsx("h2",{children:t.title}),f.jsx("p",{children:t.description}),f.jsx("h4",{children:"Tech Stack"}),f.jsx("ul",{children:t.techStack.map((r,a)=>f.jsx("li",{children:r},a))}),f.jsx("div",{className:"project-link-container",children:((n=t.projectLinks)==null?void 0:n.length)&&t.projectLinks.map(r=>f.jsxs("a",{href:r.url,className:"project-link",target:"_blank",children:[r.icon&&f.jsx(at,{icon:r.icon}),` ${r.title}`]}))})]})}):null},ou=({item:e})=>f.jsxs("div",{className:"work-card",children:[f.jsx("div",{className:"logo",children:f.jsx("img",{src:e.logo,alt:`${e.company} logo`})}),f.jsx("div",{className:"position",children:f.jsx("h3",{children:e.position})}),f.jsx("div",{className:"company",children:f.jsx("p",{children:e.company})}),f.jsx("div",{className:"duration",children:f.jsxs("p",{children:[e.start," - ",e.end||"Present"]})}),f.jsx("div",{className:"description",children:f.jsx("p",{children:e.description.length>200?`${e.description.slice(0,200)}...`:e.description})}),f.jsx("div",{className:"links",children:f.jsx("a",{href:e.website,target:"_blank",rel:"noopener noreferrer",className:"view-website-link",children:"Visit Company Website"})})]},e.company),su=()=>{const[e,t]=m.useState(null),n=()=>{t(null)};return f.jsxs(f.Fragment,{children:[f.jsxs("section",{children:[f.jsx("h2",{children:"Work Experience"}),f.jsx("div",{className:"work-list",children:et.workExperience.map(r=>f.jsx(ou,{item:r}))})]}),f.jsxs("section",{children:[f.jsx("h2",{children:"Projects"}),f.jsxs("div",{className:"projects-list",children:[et.projects.map(r=>f.jsx(au,{item:r,onDetail:()=>t(r)})),f.jsx(iu,{project:e,onClose:n})]})]})]})},cu=()=>{const[e,t]=m.useState(!1);m.useEffect(()=>{const r=()=>{t(window.scrollY>200)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e?f.jsx("button",{className:"scroll-to-top-button",onClick:n,children:f.jsx(at,{className:"up-arrow",icon:Hl})}):null},lu=()=>{const[e,t]=m.useState(100);return f.jsxs(Fs,{children:[f.jsx(Ds,{onMenuToggle:n=>t(n)}),f.jsx("div",{className:"container",style:{marginTop:`${e+100}px`,marginBottom:20},children:f.jsxs(_s,{children:[f.jsx(bt,{path:"/",element:f.jsx(Zl,{})}),f.jsx(bt,{path:"/education",element:f.jsx(ru,{})}),f.jsx(bt,{path:"/experience",element:f.jsx(su,{})})]})}),f.jsx(Vl,{}),f.jsx(cu,{})]})};Ri.createRoot(document.getElementById("root")).render(f.jsx(m.StrictMode,{children:f.jsx(lu,{})}));
