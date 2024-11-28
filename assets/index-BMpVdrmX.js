import{r as z,a as Ja,R as he,g as Qa}from"./vendor-C_gYsUBP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();var Rr={exports:{}},vt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Za=z,eo=Symbol.for("react.element"),to=Symbol.for("react.fragment"),no=Object.prototype.hasOwnProperty,ro=Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ao={key:!0,ref:!0,__self:!0,__source:!0};function zr(e,t,n){var r,a={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)no.call(t,r)&&!ao.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:eo,type:e,key:o,ref:i,props:a,_owner:ro.current}}vt.Fragment=to;vt.jsx=zr;vt.jsxs=zr;Rr.exports=vt;var l=Rr.exports,Lr,_n=Ja;Lr=_n.createRoot,_n.hydrateRoot;var L=function(){return L=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},L.apply(this,arguments)};function pt(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,o;r<a;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var I="-ms-",$e="-moz-",j="-webkit-",Fr="comm",wt="rule",hn="decl",oo="@import",Mr="@keyframes",io="@layer",Dr=Math.abs,gn=String.fromCharCode,Gt=Object.assign;function so(e,t){return R(e,0)^45?(((t<<2^R(e,0))<<2^R(e,1))<<2^R(e,2))<<2^R(e,3):0}function $r(e){return e.trim()}function K(e,t){return(e=t.exec(e))?e[0]:e}function v(e,t,n){return e.replace(t,n)}function it(e,t,n){return e.indexOf(t,n)}function R(e,t){return e.charCodeAt(t)|0}function Ce(e,t,n){return e.slice(t,n)}function W(e){return e.length}function Yr(e){return e.length}function Fe(e,t){return t.push(e),e}function co(e,t){return e.map(t).join("")}function Rn(e,t){return e.filter(function(n){return!K(n,t)})}var St=1,Pe=1,Hr=0,Y=0,_=0,Ne="";function kt(e,t,n,r,a,o,i,s){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:St,column:Pe,length:i,return:"",siblings:s}}function ne(e,t){return Gt(kt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ye(e){for(;e.root;)e=ne(e.root,{children:[e]});Fe(e,e.siblings)}function lo(){return _}function fo(){return _=Y>0?R(Ne,--Y):0,Pe--,_===10&&(Pe=1,St--),_}function H(){return _=Y<Hr?R(Ne,Y++):0,Pe++,_===10&&(Pe=1,St++),_}function ue(){return R(Ne,Y)}function st(){return Y}function At(e,t){return Ce(Ne,e,t)}function Ut(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function uo(e){return St=Pe=1,Hr=W(Ne=e),Y=0,[]}function po(e){return Ne="",e}function Rt(e){return $r(At(Y-1,Bt(e===91?e+2:e===40?e+1:e)))}function mo(e){for(;(_=ue())&&_<33;)H();return Ut(e)>2||Ut(_)>3?"":" "}function ho(e,t){for(;--t&&H()&&!(_<48||_>102||_>57&&_<65||_>70&&_<97););return At(e,st()+(t<6&&ue()==32&&H()==32))}function Bt(e){for(;H();)switch(_){case e:return Y;case 34:case 39:e!==34&&e!==39&&Bt(_);break;case 40:e===41&&Bt(e);break;case 92:H();break}return Y}function go(e,t){for(;H()&&e+_!==57;)if(e+_===84&&ue()===47)break;return"/*"+At(t,Y-1)+"*"+gn(e===47?e:H())}function bo(e){for(;!Ut(ue());)H();return At(e,Y)}function yo(e){return po(ct("",null,null,null,[""],e=uo(e),0,[0],e))}function ct(e,t,n,r,a,o,i,s,c){for(var f=0,u=0,m=i,d=0,g=0,S=0,C=1,A=1,w=1,b=0,y="",P=a,E=o,O=r,x=y;A;)switch(S=b,b=H()){case 40:if(S!=108&&R(x,m-1)==58){it(x+=v(Rt(b),"&","&\f"),"&\f",Dr(f?s[f-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:x+=Rt(b);break;case 9:case 10:case 13:case 32:x+=mo(S);break;case 92:x+=ho(st()-1,7);continue;case 47:switch(ue()){case 42:case 47:Fe(xo(go(H(),st()),t,n,c),c);break;default:x+="/"}break;case 123*C:s[f++]=W(x)*w;case 125*C:case 59:case 0:switch(b){case 0:case 125:A=0;case 59+u:w==-1&&(x=v(x,/\f/g,"")),g>0&&W(x)-m&&Fe(g>32?Ln(x+";",r,n,m-1,c):Ln(v(x," ","")+";",r,n,m-2,c),c);break;case 59:x+=";";default:if(Fe(O=zn(x,t,n,f,u,a,s,y,P=[],E=[],m,o),o),b===123)if(u===0)ct(x,t,O,O,P,o,m,s,E);else switch(d===99&&R(x,3)===110?100:d){case 100:case 108:case 109:case 115:ct(e,O,O,r&&Fe(zn(e,O,O,0,0,a,s,y,a,P=[],m,E),E),a,E,m,s,r?P:E);break;default:ct(x,O,O,O,[""],E,0,s,E)}}f=u=g=0,C=w=1,y=x="",m=i;break;case 58:m=1+W(x),g=S;default:if(C<1){if(b==123)--C;else if(b==125&&C++==0&&fo()==125)continue}switch(x+=gn(b),b*C){case 38:w=u>0?1:(x+="\f",-1);break;case 44:s[f++]=(W(x)-1)*w,w=1;break;case 64:ue()===45&&(x+=Rt(H())),d=ue(),u=m=W(y=x+=bo(st())),b++;break;case 45:S===45&&W(x)==2&&(C=0)}}return o}function zn(e,t,n,r,a,o,i,s,c,f,u,m){for(var d=a-1,g=a===0?o:[""],S=Yr(g),C=0,A=0,w=0;C<r;++C)for(var b=0,y=Ce(e,d+1,d=Dr(A=i[C])),P=e;b<S;++b)(P=$r(A>0?g[b]+" "+y:v(y,/&\f/g,g[b])))&&(c[w++]=P);return kt(e,t,n,a===0?wt:s,c,f,u,m)}function xo(e,t,n,r){return kt(e,t,n,Fr,gn(lo()),Ce(e,2,-2),0,r)}function Ln(e,t,n,r,a){return kt(e,t,n,hn,Ce(e,0,r),Ce(e,r+1,-1),r,a)}function Wr(e,t,n){switch(so(e,t)){case 5103:return j+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return j+e+e;case 4789:return $e+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return j+e+$e+e+I+e+e;case 5936:switch(R(e,t+11)){case 114:return j+e+I+v(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return j+e+I+v(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return j+e+I+v(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return j+e+I+e+e;case 6165:return j+e+I+"flex-"+e+e;case 5187:return j+e+v(e,/(\w+).+(:[^]+)/,j+"box-$1$2"+I+"flex-$1$2")+e;case 5443:return j+e+I+"flex-item-"+v(e,/flex-|-self/g,"")+(K(e,/flex-|baseline/)?"":I+"grid-row-"+v(e,/flex-|-self/g,""))+e;case 4675:return j+e+I+"flex-line-pack"+v(e,/align-content|flex-|-self/g,"")+e;case 5548:return j+e+I+v(e,"shrink","negative")+e;case 5292:return j+e+I+v(e,"basis","preferred-size")+e;case 6060:return j+"box-"+v(e,"-grow","")+j+e+I+v(e,"grow","positive")+e;case 4554:return j+v(e,/([^-])(transform)/g,"$1"+j+"$2")+e;case 6187:return v(v(v(e,/(zoom-|grab)/,j+"$1"),/(image-set)/,j+"$1"),e,"")+e;case 5495:case 3959:return v(e,/(image-set\([^]*)/,j+"$1$`$1");case 4968:return v(v(e,/(.+:)(flex-)?(.*)/,j+"box-pack:$3"+I+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+j+e+e;case 4200:if(!K(e,/flex-|baseline/))return I+"grid-column-align"+Ce(e,t)+e;break;case 2592:case 3360:return I+v(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,a){return t=a,K(r.props,/grid-\w+-end/)})?~it(e+(n=n[t].value),"span",0)?e:I+v(e,"-start","")+e+I+"grid-row-span:"+(~it(n,"span",0)?K(n,/\d+/):+K(n,/\d+/)-+K(e,/\d+/))+";":I+v(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return K(r.props,/grid-\w+-start/)})?e:I+v(v(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return v(e,/(.+)-inline(.+)/,j+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(W(e)-1-t>6)switch(R(e,t+1)){case 109:if(R(e,t+4)!==45)break;case 102:return v(e,/(.+:)(.+)-([^]+)/,"$1"+j+"$2-$3$1"+$e+(R(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~it(e,"stretch",0)?Wr(v(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return v(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,o,i,s,c,f){return I+a+":"+o+f+(i?I+a+"-span:"+(s?c:+c-+o)+f:"")+e});case 4949:if(R(e,t+6)===121)return v(e,":",":"+j)+e;break;case 6444:switch(R(e,R(e,14)===45?18:11)){case 120:return v(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+j+(R(e,14)===45?"inline-":"")+"box$3$1"+j+"$2$3$1"+I+"$2box$3")+e;case 100:return v(e,":",":"+I)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return v(e,"scroll-","scroll-snap-")+e}return e}function mt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function vo(e,t,n,r){switch(e.type){case io:if(e.children.length)break;case oo:case hn:return e.return=e.return||e.value;case Fr:return"";case Mr:return e.return=e.value+"{"+mt(e.children,r)+"}";case wt:if(!W(e.value=e.props.join(",")))return""}return W(n=mt(e.children,r))?e.return=e.value+"{"+n+"}":""}function wo(e){var t=Yr(e);return function(n,r,a,o){for(var i="",s=0;s<t;s++)i+=e[s](n,r,a,o)||"";return i}}function So(e){return function(t){t.root||(t=t.return)&&e(t)}}function ko(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case hn:e.return=Wr(e.value,e.length,n);return;case Mr:return mt([ne(e,{value:v(e.value,"@","@"+j)})],r);case wt:if(e.length)return co(n=e.props,function(a){switch(K(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ye(ne(e,{props:[v(a,/:(read-\w+)/,":"+$e+"$1")]})),ye(ne(e,{props:[a]})),Gt(e,{props:Rn(n,r)});break;case"::placeholder":ye(ne(e,{props:[v(a,/:(plac\w+)/,":"+j+"input-$1")]})),ye(ne(e,{props:[v(a,/:(plac\w+)/,":"+$e+"$1")]})),ye(ne(e,{props:[v(a,/:(plac\w+)/,I+"input-$1")]})),ye(ne(e,{props:[a]})),Gt(e,{props:Rn(n,r)});break}return""})}}var Ao={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},F={},Ee=typeof process<"u"&&F!==void 0&&(F.REACT_APP_SC_ATTR||F.SC_ATTR)||"data-styled",Gr="active",Ur="data-styled-version",Ct="6.1.13",bn=`/*!sc*/
`,ht=typeof window<"u"&&"HTMLElement"in window,Co=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&F!==void 0&&F.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&F.REACT_APP_SC_DISABLE_SPEEDY!==""?F.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&F.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&F!==void 0&&F.SC_DISABLE_SPEEDY!==void 0&&F.SC_DISABLE_SPEEDY!==""&&F.SC_DISABLE_SPEEDY!=="false"&&F.SC_DISABLE_SPEEDY),Pt=Object.freeze([]),je=Object.freeze({});function Po(e,t,n){return n===void 0&&(n=je),e.theme!==n.theme&&e.theme||t||n.theme}var Br=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Eo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jo=/(^-|-$)/g;function Fn(e){return e.replace(Eo,"-").replace(jo,"")}var Oo=/(a)(d)/gi,nt=52,Mn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Vt(e){var t,n="";for(t=Math.abs(e);t>nt;t=t/nt|0)n=Mn(t%nt)+n;return(Mn(t%nt)+n).replace(Oo,"$1-$2")}var zt,Vr=5381,ve=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Xr=function(e){return ve(Vr,e)};function Io(e){return Vt(Xr(e)>>>0)}function To(e){return e.displayName||e.name||"Component"}function Lt(e){return typeof e=="string"&&!0}var Kr=typeof Symbol=="function"&&Symbol.for,qr=Kr?Symbol.for("react.memo"):60115,No=Kr?Symbol.for("react.forward_ref"):60112,_o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ro={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zo=((zt={})[No]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zt[qr]=Jr,zt);function Dn(e){return("type"in(t=e)&&t.type.$$typeof)===qr?Jr:"$$typeof"in e?zo[e.$$typeof]:_o;var t}var Lo=Object.defineProperty,Fo=Object.getOwnPropertyNames,$n=Object.getOwnPropertySymbols,Mo=Object.getOwnPropertyDescriptor,Do=Object.getPrototypeOf,Yn=Object.prototype;function Qr(e,t,n){if(typeof t!="string"){if(Yn){var r=Do(t);r&&r!==Yn&&Qr(e,r,n)}var a=Fo(t);$n&&(a=a.concat($n(t)));for(var o=Dn(e),i=Dn(t),s=0;s<a.length;++s){var c=a[s];if(!(c in Ro||n&&n[c]||i&&c in i||o&&c in o)){var f=Mo(t,c);try{Lo(e,c,f)}catch{}}}}return e}function Oe(e){return typeof e=="function"}function yn(e){return typeof e=="object"&&"styledComponentId"in e}function fe(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Hn(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function We(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xt(e,t,n){if(n===void 0&&(n=!1),!n&&!We(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xt(e[r],t[r]);else if(We(t))for(var r in t)e[r]=Xt(e[r],t[r]);return e}function xn(e,t){Object.defineProperty(e,"toString",{value:t})}function Be(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var $o=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,o=a;t>=o;)if((o<<=1)<0)throw Be(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=a;i<o;i++)this.groupSizes[i]=0}for(var s=this.indexOfGroup(t+1),c=(i=0,n.length);i<c;i++)this.tag.insertRule(s,n[i])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),a=r+n;this.groupSizes[t]=0;for(var o=r;o<a;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],a=this.indexOfGroup(t),o=a+r,i=a;i<o;i++)n+="".concat(this.tag.getRule(i)).concat(bn);return n},e}(),lt=new Map,gt=new Map,ft=1,rt=function(e){if(lt.has(e))return lt.get(e);for(;gt.has(ft);)ft++;var t=ft++;return lt.set(e,t),gt.set(t,e),t},Yo=function(e,t){ft=t+1,lt.set(e,t),gt.set(t,e)},Ho="style[".concat(Ee,"][").concat(Ur,'="').concat(Ct,'"]'),Wo=new RegExp("^".concat(Ee,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Go=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},Uo=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(bn),a=[],o=0,i=r.length;o<i;o++){var s=r[o].trim();if(s){var c=s.match(Wo);if(c){var f=0|parseInt(c[1],10),u=c[2];f!==0&&(Yo(u,f),Go(e,u,c[3]),e.getTag().insertRules(f,a)),a.length=0}else a.push(s)}}},Wn=function(e){for(var t=document.querySelectorAll(Ho),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(Ee)!==Gr&&(Uo(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Bo(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Zr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(s){var c=Array.from(s.querySelectorAll("style[".concat(Ee,"]")));return c[c.length-1]}(n),o=a!==void 0?a.nextSibling:null;r.setAttribute(Ee,Gr),r.setAttribute(Ur,Ct);var i=Bo();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},Vo=function(){function e(t){this.element=Zr(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,a=0,o=r.length;a<o;a++){var i=r[a];if(i.ownerNode===n)return i}throw Be(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Xo=function(){function e(t){this.element=Zr(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ko=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Gn=ht,qo={isServer:!ht,useCSSOMInjection:!Co},ea=function(){function e(t,n,r){t===void 0&&(t=je),n===void 0&&(n={});var a=this;this.options=L(L({},qo),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ht&&Gn&&(Gn=!1,Wn(this)),xn(this,function(){return function(o){for(var i=o.getTag(),s=i.length,c="",f=function(m){var d=function(w){return gt.get(w)}(m);if(d===void 0)return"continue";var g=o.names.get(d),S=i.getGroup(m);if(g===void 0||!g.size||S.length===0)return"continue";var C="".concat(Ee,".g").concat(m,'[id="').concat(d,'"]'),A="";g!==void 0&&g.forEach(function(w){w.length>0&&(A+="".concat(w,","))}),c+="".concat(S).concat(C,'{content:"').concat(A,'"}').concat(bn)},u=0;u<s;u++)f(u);return c}(a)})}return e.registerId=function(t){return rt(t)},e.prototype.rehydrate=function(){!this.server&&ht&&Wn(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(L(L({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,a=n.target;return n.isServer?new Ko(a):r?new Vo(a):new Xo(a)}(this.options),new $o(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(rt(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(rt(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(rt(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Jo=/&/g,Qo=/^\s*\/\/.*$/gm;function ta(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ta(n.children,t)),n})}function Zo(e){var t,n,r,a=je,o=a.options,i=o===void 0?je:o,s=a.plugins,c=s===void 0?Pt:s,f=function(d,g,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):d},u=c.slice();u.push(function(d){d.type===wt&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(Jo,n).replace(r,f))}),i.prefix&&u.push(ko),u.push(vo);var m=function(d,g,S,C){g===void 0&&(g=""),S===void 0&&(S=""),C===void 0&&(C="&"),t=C,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var A=d.replace(Qo,""),w=yo(S||g?"".concat(S," ").concat(g," { ").concat(A," }"):A);i.namespace&&(w=ta(w,i.namespace));var b=[];return mt(w,wo(u.concat(So(function(y){return b.push(y)})))),b};return m.hash=c.length?c.reduce(function(d,g){return g.name||Be(15),ve(d,g.name)},Vr).toString():"",m}var ei=new ea,Kt=Zo(),na=he.createContext({shouldForwardProp:void 0,styleSheet:ei,stylis:Kt});na.Consumer;he.createContext(void 0);function Un(){return z.useContext(na)}var ti=function(){function e(t,n){var r=this;this.inject=function(a,o){o===void 0&&(o=Kt);var i=r.name+o.hash;a.hasNameForId(r.id,i)||a.insertRules(r.id,i,o(r.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,xn(this,function(){throw Be(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Kt),this.name+t.hash},e}(),ni=function(e){return e>="A"&&e<="Z"};function Bn(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;ni(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ra=function(e){return e==null||e===!1||e===""},aa=function(e){var t,n,r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!ra(o)&&(Array.isArray(o)&&o.isCss||Oe(o)?r.push("".concat(Bn(a),":"),o,";"):We(o)?r.push.apply(r,pt(pt(["".concat(a," {")],aa(o),!1),["}"],!1)):r.push("".concat(Bn(a),": ").concat((t=a,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Ao||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function de(e,t,n,r){if(ra(e))return[];if(yn(e))return[".".concat(e.styledComponentId)];if(Oe(e)){if(!Oe(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var a=e(t);return de(a,t,n,r)}var o;return e instanceof ti?n?(e.inject(n,r),[e.getName(r)]):[e]:We(e)?aa(e):Array.isArray(e)?Array.prototype.concat.apply(Pt,e.map(function(i){return de(i,t,n,r)})):[e.toString()]}function ri(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Oe(n)&&!yn(n))return!1}return!0}var ai=Xr(Ct),oi=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ri(t),this.componentId=n,this.baseHash=ve(ai,n),this.baseStyle=r,ea.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=fe(a,this.staticRulesId);else{var o=Hn(de(this.rules,t,n,r)),i=Vt(ve(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,i)){var s=r(o,".".concat(i),void 0,this.componentId);n.insertRules(this.componentId,i,s)}a=fe(a,i),this.staticRulesId=i}else{for(var c=ve(this.baseHash,r.hash),f="",u=0;u<this.rules.length;u++){var m=this.rules[u];if(typeof m=="string")f+=m;else if(m){var d=Hn(de(m,t,n,r));c=ve(c,d+u),f+=d}}if(f){var g=Vt(c>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(f,".".concat(g),void 0,this.componentId)),a=fe(a,g)}}return a},e}(),oa=he.createContext(void 0);oa.Consumer;var Ft={};function ii(e,t,n){var r=yn(e),a=e,o=!Lt(e),i=t.attrs,s=i===void 0?Pt:i,c=t.componentId,f=c===void 0?function(P,E){var O=typeof P!="string"?"sc":Fn(P);Ft[O]=(Ft[O]||0)+1;var x="".concat(O,"-").concat(Io(Ct+O+Ft[O]));return E?"".concat(E,"-").concat(x):x}(t.displayName,t.parentComponentId):c,u=t.displayName,m=u===void 0?function(P){return Lt(P)?"styled.".concat(P):"Styled(".concat(To(P),")")}(e):u,d=t.displayName&&t.componentId?"".concat(Fn(t.displayName),"-").concat(t.componentId):t.componentId||f,g=r&&a.attrs?a.attrs.concat(s).filter(Boolean):s,S=t.shouldForwardProp;if(r&&a.shouldForwardProp){var C=a.shouldForwardProp;if(t.shouldForwardProp){var A=t.shouldForwardProp;S=function(P,E){return C(P,E)&&A(P,E)}}else S=C}var w=new oi(n,d,r?a.componentStyle:void 0);function b(P,E){return function(O,x,se){var Je=O.attrs,Ga=O.componentStyle,Ua=O.defaultProps,Ba=O.foldedComponentIds,Va=O.styledComponentId,Xa=O.target,Ka=he.useContext(oa),qa=Un(),Tt=O.shouldForwardProp||qa.shouldForwardProp,Tn=Po(x,Ka,Ua)||je,X=function(Ze,ze,et){for(var Le,ce=L(L({},ze),{className:void 0,theme:et}),_t=0;_t<Ze.length;_t+=1){var tt=Oe(Le=Ze[_t])?Le(ce):Le;for(var ee in tt)ce[ee]=ee==="className"?fe(ce[ee],tt[ee]):ee==="style"?L(L({},ce[ee]),tt[ee]):tt[ee]}return ze.className&&(ce.className=fe(ce.className,ze.className)),ce}(Je,x,Tn),Qe=X.as||Xa,Re={};for(var Z in X)X[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&X.theme===Tn||(Z==="forwardedAs"?Re.as=X.forwardedAs:Tt&&!Tt(Z,Qe)||(Re[Z]=X[Z]));var Nn=function(Ze,ze){var et=Un(),Le=Ze.generateAndInjectStyles(ze,et.styleSheet,et.stylis);return Le}(Ga,X),Nt=fe(Ba,Va);return Nn&&(Nt+=" "+Nn),X.className&&(Nt+=" "+X.className),Re[Lt(Qe)&&!Br.has(Qe)?"class":"className"]=Nt,Re.ref=se,z.createElement(Qe,Re)}(y,P,E)}b.displayName=m;var y=he.forwardRef(b);return y.attrs=g,y.componentStyle=w,y.displayName=m,y.shouldForwardProp=S,y.foldedComponentIds=r?fe(a.foldedComponentIds,a.styledComponentId):"",y.styledComponentId=d,y.target=r?a.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=r?function(E){for(var O=[],x=1;x<arguments.length;x++)O[x-1]=arguments[x];for(var se=0,Je=O;se<Je.length;se++)Xt(E,Je[se],!0);return E}({},a.defaultProps,P):P}}),xn(y,function(){return".".concat(y.styledComponentId)}),o&&Qr(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function Vn(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var Xn=function(e){return Object.assign(e,{isCss:!0})};function si(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Oe(e)||We(e))return Xn(de(Vn(Pt,pt([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?de(r):Xn(de(Vn(r,t)))}function qt(e,t,n){if(n===void 0&&(n=je),!t)throw Be(1,t);var r=function(a){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,si.apply(void 0,pt([a],o,!1)))};return r.attrs=function(a){return qt(e,t,L(L({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return qt(e,t,L(L({},n),a))},r}var ia=function(e){return qt(ii,e)},h=ia;Br.forEach(function(e){h[e]=ia(e)});const ci=h.div`
  width: 80%;
  margin: 60px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`,li=h.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`,fi=h.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`,ui=h.h1`
  font-size: 2.5em;
  color: #f5f5f5;
  margin: 0;
`,di=h.h2`
  font-size: 1.5em;
  color: #888;
  margin: 0;
`,Ve=h.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Xe=h.h2`
  font-size: 2em;
  color: #f5f5f5;
  margin-bottom: 10px;
`,Kn=h.p`
  font-size: 1em;
  color: #ddd;
  line-height: 1.6;
`,pi=()=>l.jsxs(li,{children:[l.jsx(fi,{src:"files/images/profile.jpg",alt:"Tomas Gres"}),l.jsx(ui,{children:"Tomáš Greš"}),l.jsx(di,{children:"Software Engineer / Developer"})]}),qn=[{name:"React",stars:5},{name:"TypeScript",stars:4},{name:"Node.js",stars:4},{name:"PostgreSQL",stars:4},{name:"Python",stars:5},{name:"Express.js",stars:4},{name:"Ajax",stars:4},{name:"CI/CD",stars:4},{name:"Kubernetes",stars:3},{name:"C#",stars:2},{name:"C",stars:1}];h.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;const mi=h.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(150px, 1fr)
  ); /* Flexible columns */
  gap: 20px; /* Space between cards */
  width: 100%; /* Take full width of the container */
`,hi=h.div`
  background-color: #333;
  border-radius: 8px;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  padding: 20px; /* Add padding for better spacing */
`,gi=h.div`
  font-size: 1em;
  margin-bottom: 8px;
`,bi=h.div`
  color: #35bcbf; /* Star color */
  font-size: 1.2em;
`,yi=h.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  span {
    font-size: 1em;
    color: #f5f5f5;
  }
`,at=h.button`
  padding: 5px 10px;
  background-color: ${({active:e})=>e?"#35bcbf":"#444"};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`,xi=h.button`
  margin-top: 20px;
  box-sizing: border-box;
  padding: 10px 20px;
  background-color: #35bcbf;
  color: #ffffff;
  font-size: 1em;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s;

  &:hover {
    background-color: #2ba9a8;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`,vi=()=>{const[e,t]=z.useState(!1),[n,r]=z.useState("high-low"),o=[...e?qn:qn.filter(i=>i.stars>=4)].sort((i,s)=>n==="high-low"?s.stars-i.stars:n==="low-high"?i.stars-s.stars:n==="a-z"?i.name.localeCompare(s.name):n==="z-a"?s.name.localeCompare(i.name):0);return l.jsxs(Ve,{children:[l.jsx(Xe,{children:"Skills"}),l.jsxs(yi,{children:[l.jsx("span",{children:"Sort by:"}),l.jsx(at,{onClick:()=>r("high-low"),active:n==="high-low",children:"High to Low"}),l.jsx(at,{onClick:()=>r("low-high"),active:n==="low-high",children:"Low to High"}),l.jsx(at,{onClick:()=>r("a-z"),active:n==="a-z",children:"A-Z"}),l.jsx(at,{onClick:()=>r("z-a"),active:n==="z-a",children:"Z-A"})]}),l.jsx(mi,{children:o.map((i,s)=>l.jsxs(hi,{children:[l.jsx(gi,{children:i.name}),l.jsxs(bi,{children:["★".repeat(i.stars),"☆".repeat(5-i.stars)]})]},s))}),l.jsx(xi,{onClick:()=>t(!e),children:e?"Show Top Skills Only":"Show All Skills"})]})},Jn=h.div`
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`,Qn=h.h3`
  font-size: 1.5em;
  color: #f5f5f5;
  margin: 0 0 10px 0;
`,Zn=h.h4`
  font-size: 1.2em;
  color: #888;
  margin: 0 0 10px 0;
`;h.p`
  font-size: 1em;
  color: #ddd;
  line-height: 1.6;
  margin: 0;
`;const wi=()=>l.jsxs(Ve,{children:[l.jsx(Xe,{children:"Work Experience"}),l.jsxs(Jn,{children:[l.jsx(Qn,{children:"Full Stack Developer"}),l.jsx(Zn,{children:"Wise Home, 2023"}),l.jsx(Kn,{children:"Worked on developing scalable applications for building resource optimization. Built backend services using Node.js and PostgreSQL."})]}),l.jsxs(Jn,{children:[l.jsx(Qn,{children:"Intern - Full Stack Developer"}),l.jsx(Zn,{children:"Tech Startup, 2022"}),l.jsx(Kn,{children:"Developed features for React frontend and Node.js backend. Integrated Redux for state management and TypeORM for database operations."})]})]}),Si=h.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,er=h.div`
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  gap: 20px;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`,tr=h.a`
  display: block;
  width: 80px;
  height: 80px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`,nr=h.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,rr=h.h3`
  font-size: 1.2em;
  color: #f5f5f5;
  margin: 0;
`,ar=h.h4`
  font-size: 1em;
  color: #ccc;
  margin: 0;
`,or=h.p`
  font-size: 0.9em;
  color: #888;
  margin: 0;
`,ir=h.p`
  font-size: 0.9em;
  color: #777;
  margin: 0;
`,ki=()=>l.jsxs(Ve,{children:[l.jsx(Xe,{children:"Education"}),l.jsxs(Si,{children:[l.jsxs(er,{children:[l.jsx(tr,{href:"https://www.via.dk",target:"_blank",rel:"noopener noreferrer",children:l.jsx("img",{src:"files/images/via_logo.png",alt:"VIA University College Logo"})}),l.jsxs(nr,{children:[l.jsx(rr,{children:"VIA University College Horsens"}),l.jsx(ar,{children:"Software Technology Engineering"}),l.jsx(or,{children:"Horsens, Denmark"}),l.jsx(ir,{children:"Sep 2021 - Jan 2025"})]})]}),l.jsxs(er,{children:[l.jsx(tr,{href:"https://www.spse-po.sk",target:"_blank",rel:"noopener noreferrer",children:l.jsx("img",{src:"files/images/spse_logo.png",alt:"Secondary Vocational School Logo"})}),l.jsxs(nr,{children:[l.jsx(rr,{children:"Secondary Vocational School of Electrical Engineering"}),l.jsx(ar,{children:"Information and Networking Technologies"}),l.jsx(or,{children:"Prešov, Slovakia"}),l.jsx(ir,{children:"2017 - 2021"})]})]})]})]}),Ai=[{year:2024,title:"color-house.eu",description:"E-shop management and administration.",thumbnail:"files/images/colorhouse.png",technologies:["SEO","JavaScript","CSS","HTML"],githubLink:"https://github.com/username/project-b",fullDescription:"This project"},{year:2023,title:"HC Košice - Ticketing Portal",description:"A ticketing portal for a Košice's hockey club",thumbnail:"files/images/hckosice.png",technologies:["React","Node.js","TypeScript","Express.js","PostgreSQL","TypeORM"],githubLink:"",fullDescription:"I worked on this project during my internship, where I was in a team of around 7 developers, utilizing a modified SCRUM methodology. I was tasked with designing new features, implementing said features, finding and fixing bugs as well as documenting the system. The technologies we used during development were React & Redux on the front-end, Node.js & Express.js on the back-end, and PostgreSQL with TypeORM for the database."},{year:2022,title:"ChadList",description:"A Semester project during my studies at VIA, where we designed and developed a platform for people to sell/give away unused items.",thumbnail:"files/images/via_logo.png",technologies:["C#",".NET","Blazor","Java","gRPC","JPA/Hibernate","HTTP","RestAPI"],githubLink:"https://github.com/dragoselul/SEP3",fullDescription:"This project was developed by myself and my schoolmates as a Semester Project. The goal of the project wasto create a system with a 3-tier architecture. Our project consisted of a Presentation Tier (made with Blazor and C#), Business Tier (made with C#/.NET and HTTP with RestFul API) and Data Tier (made with Java, JPA/Hibernate and gRPC)."},{year:2022,title:"Winter Store",description:"One of my semester projects, which was a management system for an imaginary company renting winter-season equipment",thumbnail:"files/images/via_logo.png",technologies:["Java","JavaFX","RMI"],githubLink:"https://github.com/YoUnGi102/WinterRentalStore",fullDescription:"This project was developed by myself and my schoolmates as a Semester Project. The goal of the project wasto create a system with a 3-tier architecture. Our project consisted of a Presentation Tier (made with Blazor and C#), Business Tier (made with C#/.NET and HTTP with RestFul API) and Data Tier (made with Java, JPA/Hibernate and gRPC)."}],Ci=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
`,Pi=h.div`
  background-color: #333;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }
`,Ei=h.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`,ji=h.div`
  padding: 10px;
  text-align: center;
`,Oi=h.h3`
  font-size: 1.2em;
  color: #f5f5f5;
  margin: 0 0 5px;
`,Ii=h.p`
  font-size: 0.9em;
  color: #ccc;
  margin: 0;
`,Ti=h.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Ni=h.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;

  h2 {
    margin-top: 0;
    color: #333;
  }

  p {
    font-size: 1em;
    color: #555;
    margin: 10px 0 20px;
  }

  a {
    display: inline-block;
    margin-top: 20px;
    color: #35bcbf;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #2ba9a8;
    }
  }
`,_i=h.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #000;
  }
`;h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #444;
  padding-bottom: 10px;

  h2 {
    margin: 0;
    font-size: 1.8em;
    color: #35bcbf; /* Accent color for the title */
  }

  button {
    background: none;
    border: none;
    font-size: 1.5em;
    color: #f5f5f5;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }
`;h.div`
  p {
    font-size: 1em;
    color: #ccc;
    margin: 0;
    line-height: 1.6;
  }
`;h.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    color: #35bcbf;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #2ba9a8;
    }
  }
`;const Ri=h.div`
  margin-top: 20px;

  strong {
    display: block;
    margin-bottom: 10px;
    color: #35bcbf; /* Accent color for technologies section */
  }

  ul {
    list-style: disc;
    padding-left: 20px;

    li {
      font-size: 0.9em;
      color: #ccc;
    }
  }
`,zi=()=>{const[e,t]=z.useState(null),n=a=>{t(a)},r=()=>{t(null)};return l.jsxs(Ve,{children:[l.jsx(Xe,{children:"Projects"}),l.jsx(Ci,{children:Ai.map((a,o)=>l.jsxs(Pi,{onClick:()=>n(a),children:[l.jsx(Ei,{src:a.thumbnail,alt:a.title}),l.jsxs(ji,{children:[l.jsx(Oi,{children:a.title}),l.jsx(Ii,{children:a.description})]})]},o))}),e&&l.jsx(Ti,{onClick:r,children:l.jsxs(Ni,{onClick:a=>a.stopPropagation(),children:[l.jsx(_i,{onClick:r,children:"×"}),l.jsx("h2",{children:e.title}),l.jsx("p",{children:e.fullDescription}),l.jsxs(Ri,{children:[l.jsx("strong",{children:"Technologies Used:"}),l.jsx("ul",{children:e.technologies.map((a,o)=>l.jsx("li",{children:a},o))})]}),e.githubLink&&l.jsx("a",{href:e.githubLink,target:"_blank",rel:"noopener noreferrer",children:"View on GitHub"})]})})]})},Li=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
`,Fi=h.div`
  background-color: #333;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`,Mi=h.div`
  font-size: 3em;
  margin-bottom: 10px;
`,Di=h.h3`
  font-size: 1.5em;
  margin-bottom: 8px;
`,$i=h.p`
  font-size: 1em;
  color: #ccc;
`,Yi=[{name:"Chess",icon:"♟️",description:"Sharpening my mind through strategic gameplay."},{name:"Strength Training",icon:"🏋️",description:"Building strength and endurance in the gym."},{name:"3D Printing",icon:"🖨️",description:"Designing and creating objects using 3D printers."},{name:"Automobiles",icon:"🚗",description:"Exploring the engineering and design of cars."}],Hi=()=>l.jsxs(Ve,{children:[l.jsx(Xe,{children:"My Hobbies"}),l.jsx(Li,{children:Yi.map((e,t)=>l.jsxs(Fi,{children:[l.jsx(Mi,{children:e.icon}),l.jsx(Di,{children:e.name}),l.jsx($i,{children:e.description})]},t))})]}),Wi=h.div`
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  background-color: #333333;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 9999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  transform: ${({isVisible:e})=>e?"translateY(0)":"translateY(-100%)"};
`,Gi=h.div`
  font-size: 1.5em;
  font-weight: bold;
`,Ui=h.div`
  display: flex;
  gap: 15px;
`,xe=h.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1em;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #35bcbf;
  }
`,Bi=({onNavigate:e})=>{const[t,n]=z.useState(!0),[r,a]=z.useState(0);return z.useEffect(()=>{const o=()=>{const i=window.scrollY;i>r&&i>50?n(!1):n(!0),a(i)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[r]),l.jsxs(Wi,{isVisible:t,children:[l.jsx(Gi,{children:"My Portfolio"}),l.jsxs(Ui,{children:[l.jsx(xe,{onClick:()=>e("about"),children:"About Me"}),l.jsx(xe,{onClick:()=>e("skills"),children:"Skills"}),l.jsx(xe,{onClick:()=>e("experience"),children:"Work Experience"}),l.jsx(xe,{onClick:()=>e("education"),children:"Education"}),l.jsx(xe,{onClick:()=>e("projects"),children:"Projects"}),l.jsx(xe,{onClick:()=>e("hobbies"),children:"Hobbies"})]})]})},sr=()=>{};let vn={},sa={},ca=null,la={mark:sr,measure:sr};try{typeof window<"u"&&(vn=window),typeof document<"u"&&(sa=document),typeof MutationObserver<"u"&&(ca=MutationObserver),typeof performance<"u"&&(la=performance)}catch{}const{userAgent:cr=""}=vn.navigator||{},ae=vn,T=sa,lr=ca,ot=la;ae.document;const Q=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",fa=~cr.indexOf("MSIE")||~cr.indexOf("Trident/");var N="classic",ua="duotone",M="sharp",D="sharp-duotone",Vi=[N,ua,M,D],Xi={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},fr={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ki=["kit"],qi=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Ji=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Qi={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Zi={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},es={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},ts={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},ns={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},rs={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},da={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},as=["solid","regular","light","thin","duotone","brands"],pa=[1,2,3,4,5,6,7,8,9,10],os=pa.concat([11,12,13,14,15,16,17,18,19,20]),Me={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},is=[...Object.keys(ts),...as,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Me.GROUP,Me.SWAP_OPACITY,Me.PRIMARY,Me.SECONDARY].concat(pa.map(e=>"".concat(e,"x"))).concat(os.map(e=>"w-".concat(e))),ss={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},cs={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ls={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ur={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const q="___FONT_AWESOME___",Jt=16,ma="fa",ha="svg-inline--fa",ge="data-fa-i2svg",Qt="data-fa-pseudo-element",fs="data-fa-pseudo-element-pending",wn="data-prefix",Sn="data-icon",dr="fontawesome-i2svg",us="async",ds=["HTML","HEAD","STYLE","SCRIPT"],ga=(()=>{try{return!0}catch{return!1}})(),ba=[N,M,D];function Ke(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[N]}})}const ya={...da};ya[N]={...da[N],...fr.kit,...fr["kit-duotone"]};const pe=Ke(ya),Zt={...rs};Zt[N]={...Zt[N],...ur.kit,...ur["kit-duotone"]};const Ge=Ke(Zt),en={...ns};en[N]={...en[N],...ls.kit};const me=Ke(en),tn={...es};tn[N]={...tn[N],...cs.kit};const ps=Ke(tn),ms=qi,xa="fa-layers-text",hs=Ji,gs={...Xi};Ke(gs);const bs=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Mt=Me,Ie=new Set;Object.keys(Ge[N]).map(Ie.add.bind(Ie));Object.keys(Ge[M]).map(Ie.add.bind(Ie));Object.keys(Ge[D]).map(Ie.add.bind(Ie));const ys=[...Ki,...is],Ye=ae.FontAwesomeConfig||{};function xs(e){var t=T.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function vs(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}T&&typeof T.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=vs(xs(n));a!=null&&(Ye[r]=a)});const va={styleDefault:"solid",familyDefault:"classic",cssPrefix:ma,replacementClass:ha,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ye.familyPrefix&&(Ye.cssPrefix=Ye.familyPrefix);const Te={...va,...Ye};Te.autoReplaceSvg||(Te.observeMutations=!1);const p={};Object.keys(va).forEach(e=>{Object.defineProperty(p,e,{enumerable:!0,set:function(t){Te[e]=t,He.forEach(n=>n(p))},get:function(){return Te[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(e){Te.cssPrefix=e,He.forEach(t=>t(p))},get:function(){return Te.cssPrefix}});ae.FontAwesomeConfig=p;const He=[];function ws(e){return He.push(e),()=>{He.splice(He.indexOf(e),1)}}const te=Jt,U={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ss(e){if(!e||!Q)return;const t=T.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=T.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const o=n[a],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return T.head.insertBefore(t,r),e}const ks="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ue(){let e=12,t="";for(;e-- >0;)t+=ks[Math.random()*62|0];return t}function _e(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function kn(e){return e.classList?_e(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function wa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function As(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(wa(e[n]),'" '),"").trim()}function Et(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function An(e){return e.size!==U.size||e.x!==U.x||e.y!==U.y||e.rotate!==U.rotate||e.flipX||e.flipY}function Cs(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(o," ").concat(i," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:f}}function Ps(e){let{transform:t,width:n=Jt,height:r=Jt,startCentered:a=!1}=e,o="";return a&&fa?o+="translate(".concat(t.x/te-n/2,"em, ").concat(t.y/te-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(t.x/te,"em), calc(-50% + ").concat(t.y/te,"em)) "):o+="translate(".concat(t.x/te,"em, ").concat(t.y/te,"em) "),o+="scale(".concat(t.size/te*(t.flipX?-1:1),", ").concat(t.size/te*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var Es=`:root, :host {
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
}`;function Sa(){const e=ma,t=ha,n=p.cssPrefix,r=p.replacementClass;let a=Es;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(r))}return a}let pr=!1;function Dt(){p.autoAddCss&&!pr&&(Ss(Sa()),pr=!0)}var js={mixout(){return{dom:{css:Sa,insertCss:Dt}}},hooks(){return{beforeDOMElementCreation(){Dt()},beforeI2svg(){Dt()}}}};const J=ae||{};J[q]||(J[q]={});J[q].styles||(J[q].styles={});J[q].hooks||(J[q].hooks={});J[q].shims||(J[q].shims=[]);var B=J[q];const ka=[],Aa=function(){T.removeEventListener("DOMContentLoaded",Aa),bt=1,ka.map(e=>e())};let bt=!1;Q&&(bt=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),bt||T.addEventListener("DOMContentLoaded",Aa));function Os(e){Q&&(bt?setTimeout(e,0):ka.push(e))}function qe(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?wa(e):"<".concat(t," ").concat(As(n),">").concat(r.map(qe).join(""),"</").concat(t,">")}function mr(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var $t=function(t,n,r,a){var o=Object.keys(t),i=o.length,s=n,c,f,u;for(r===void 0?(c=1,u=t[o[0]]):(c=0,u=r);c<i;c++)f=o[c],u=s(u,t[f],f,t);return u};function Is(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((a&1023)<<10)+(o&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function nn(e){const t=Is(e);return t.length===1?t[0].toString(16):null}function Ts(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function hr(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function rn(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=hr(t);typeof B.hooks.addPack=="function"&&!r?B.hooks.addPack(e,hr(t)):B.styles[e]={...B.styles[e]||{},...a},e==="fas"&&rn("fa",t)}const{styles:le,shims:Ns}=B,_s={[N]:Object.values(me[N]),[M]:Object.values(me[M]),[D]:Object.values(me[D])};let Cn=null,Ca={},Pa={},Ea={},ja={},Oa={};const Rs={[N]:Object.keys(pe[N]),[M]:Object.keys(pe[M]),[D]:Object.keys(pe[D])};function zs(e){return~ys.indexOf(e)}function Ls(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!zs(a)?a:null}const Ia=()=>{const e=r=>$t(le,(a,o,i)=>(a[i]=$t(o,r,{}),a),{});Ca=e((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=o}),r)),Pa=e((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=o}),r)),Oa=e((r,a,o)=>{const i=a[2];return r[o]=o,i.forEach(s=>{r[s]=o}),r});const t="far"in le||p.autoFetchSvg,n=$t(Ns,(r,a)=>{const o=a[0];let i=a[1];const s=a[2];return i==="far"&&!t&&(i="fas"),typeof o=="string"&&(r.names[o]={prefix:i,iconName:s}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:i,iconName:s}),r},{names:{},unicodes:{}});Ea=n.names,ja=n.unicodes,Cn=jt(p.styleDefault,{family:p.familyDefault})};ws(e=>{Cn=jt(e.styleDefault,{family:p.familyDefault})});Ia();function Pn(e,t){return(Ca[e]||{})[t]}function Fs(e,t){return(Pa[e]||{})[t]}function re(e,t){return(Oa[e]||{})[t]}function Ta(e){return Ea[e]||{prefix:null,iconName:null}}function Ms(e){const t=ja[e],n=Pn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function oe(){return Cn}const En=()=>({prefix:null,iconName:null,rest:[]});function jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=N}=t,r=pe[n][e],a=Ge[n][e]||Ge[n][r],o=e in B.styles?e:null;return a||o||null}const Ds={[N]:Object.keys(me[N]),[M]:Object.keys(me[M]),[D]:Object.keys(me[D])};function Ot(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[N]:"".concat(p.cssPrefix,"-").concat(N),[M]:"".concat(p.cssPrefix,"-").concat(M),[D]:"".concat(p.cssPrefix,"-").concat(D)};let a=null,o=N;const i=Vi.filter(c=>c!==ua);i.forEach(c=>{(e.includes(r[c])||e.some(f=>Ds[c].includes(f)))&&(o=c)});const s=e.reduce((c,f)=>{const u=Ls(p.cssPrefix,f);if(le[f]?(f=_s[o].includes(f)?ps[o][f]:f,a=f,c.prefix=f):Rs[o].indexOf(f)>-1?(a=f,c.prefix=jt(f,{family:o})):u?c.iconName=u:f!==p.replacementClass&&!i.some(m=>f===r[m])&&c.rest.push(f),!n&&c.prefix&&c.iconName){const m=a==="fa"?Ta(c.iconName):{},d=re(c.prefix,c.iconName);m.prefix&&(a=null),c.iconName=m.iconName||d||c.iconName,c.prefix=m.prefix||c.prefix,c.prefix==="far"&&!le.far&&le.fas&&!p.autoFetchSvg&&(c.prefix="fas")}return c},En());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&o===M&&(le.fass||p.autoFetchSvg)&&(s.prefix="fass",s.iconName=re(s.prefix,s.iconName)||s.iconName),!s.prefix&&o===D&&(le.fasds||p.autoFetchSvg)&&(s.prefix="fasds",s.iconName=re(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=oe()||"fas"),s}class $s{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...a[o]},rn(o,a[o]);const i=me[N][o];i&&rn(i,a[o]),Ia()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:o,iconName:i,icon:s}=r[a],c=s[2];t[o]||(t[o]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(t[o][f]=s)}),t[o][i]=s}),t}}let gr=[],we={};const ke={},Ys=Object.keys(ke);function Hs(e,t){let{mixoutsTo:n}=t;return gr=e,we={},Object.keys(ke).forEach(r=>{Ys.indexOf(r)===-1&&delete ke[r]}),gr.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=a[o][i]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(i=>{we[i]||(we[i]=[]),we[i].push(o[i])})}r.provides&&r.provides(ke)}),n}function an(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(we[e]||[]).forEach(i=>{t=i.apply(null,[t,...r])}),t}function be(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(we[e]||[]).forEach(o=>{o.apply(null,n)})}function ie(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ke[e]?ke[e].apply(null,t):void 0}function on(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||oe();if(t)return t=re(n,t)||t,mr(Na.definitions,n,t)||mr(B.styles,n,t)}const Na=new $s,Ws=()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,be("noAuto")},Gs={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Q?(be("beforeI2svg",e),ie("pseudoElements2svg",e),ie("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Os(()=>{Bs({autoReplaceSvgRoot:t}),be("watch",e)})}},Us={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:re(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=jt(e[0]);return{prefix:n,iconName:re(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(p.cssPrefix,"-"))>-1||e.match(ms))){const t=Ot(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||oe(),iconName:re(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=oe();return{prefix:t,iconName:re(t,e)||e}}}},$={noAuto:Ws,config:p,dom:Gs,parse:Us,library:Na,findIconDefinition:on,toHtml:qe},Bs=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=T}=e;(Object.keys(B.styles).length>0||p.autoFetchSvg)&&Q&&p.autoReplaceSvg&&$.dom.i2svg({node:t})};function It(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>qe(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Q)return;const n=T.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Vs(e){let{children:t,main:n,mask:r,attributes:a,styles:o,transform:i}=e;if(An(i)&&n.found&&!r.found){const{width:s,height:c}=n,f={x:s/c/2,y:.5};a.style=Et({...o,"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")})}return[{tag:"svg",attributes:a,children:t}]}function Xs(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:o}=e;const i=o===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:i},children:r}]}]}function jn(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:o,symbol:i,title:s,maskId:c,titleId:f,extra:u,watchable:m=!1}=e,{width:d,height:g}=n.found?n:t,S=r==="fak",C=[p.replacementClass,a?"".concat(p.cssPrefix,"-").concat(a):""].filter(E=>u.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(u.classes).join(" ");let A={children:[],attributes:{...u.attributes,"data-prefix":r,"data-icon":a,class:C,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(g)}};const w=S&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/g*16*.0625,"em")}:{};m&&(A.attributes[ge]=""),s&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(f||Ue())},children:[s]}),delete A.attributes.title);const b={...A,prefix:r,iconName:a,main:t,mask:n,maskId:c,transform:o,symbol:i,styles:{...w,...u.styles}},{children:y,attributes:P}=n.found&&t.found?ie("generateAbstractMask",b)||{children:[],attributes:{}}:ie("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=y,b.attributes=P,i?Xs(b):Vs(b)}function br(e){const{content:t,width:n,height:r,transform:a,title:o,extra:i,watchable:s=!1}=e,c={...i.attributes,...o?{title:o}:{},class:i.classes.join(" ")};s&&(c[ge]="");const f={...i.styles};An(a)&&(f.transform=Ps({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);const u=Et(f);u.length>0&&(c.style=u);const m=[];return m.push({tag:"span",attributes:c,children:[t]}),o&&m.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),m}function Ks(e){const{content:t,title:n,extra:r}=e,a={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=Et(r.styles);o.length>0&&(a.style=o);const i=[];return i.push({tag:"span",attributes:a,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Yt}=B;function sn(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Mt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Mt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Mt.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const qs={found:!1,width:512,height:512};function Js(e,t){!ga&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function cn(e,t){let n=t;return t==="fa"&&p.styleDefault!==null&&(t=oe()),new Promise((r,a)=>{if(n==="fa"){const o=Ta(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Yt[t]&&Yt[t][e]){const o=Yt[t][e];return r(sn(o))}Js(e,t),r({...qs,icon:p.showMissingIcons&&e?ie("missingIconAbstract")||{}:{}})})}const yr=()=>{},ln=p.measurePerformance&&ot&&ot.mark&&ot.measure?ot:{mark:yr,measure:yr},De='FA "6.6.0"',Qs=e=>(ln.mark("".concat(De," ").concat(e," begins")),()=>_a(e)),_a=e=>{ln.mark("".concat(De," ").concat(e," ends")),ln.measure("".concat(De," ").concat(e),"".concat(De," ").concat(e," begins"),"".concat(De," ").concat(e," ends"))};var On={begin:Qs,end:_a};const ut=()=>{};function xr(e){return typeof(e.getAttribute?e.getAttribute(ge):null)=="string"}function Zs(e){const t=e.getAttribute?e.getAttribute(wn):null,n=e.getAttribute?e.getAttribute(Sn):null;return t&&n}function ec(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function tc(){return p.autoReplaceSvg===!0?dt.replace:dt[p.autoReplaceSvg]||dt.replace}function nc(e){return T.createElementNS("http://www.w3.org/2000/svg",e)}function rc(e){return T.createElement(e)}function Ra(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?nc:rc}=t;if(typeof e=="string")return T.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Ra(o,{ceFn:n}))}),r}function ac(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const dt={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Ra(n),t)}),t.getAttribute(ge)===null&&p.keepOriginalSource){let n=T.createComment(ac(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~kn(t).indexOf(p.replacementClass))return dt.replace(e);const r=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,s)=>(s===p.replacementClass||s.match(r)?i.toSvg.push(s):i.toNode.push(s),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const a=n.map(o=>qe(o)).join(`
`);t.setAttribute(ge,""),t.innerHTML=a}};function vr(e){e()}function za(e,t){const n=typeof t=="function"?t:ut;if(e.length===0)n();else{let r=vr;p.mutateApproach===us&&(r=ae.requestAnimationFrame||vr),r(()=>{const a=tc(),o=On.begin("mutate");e.map(a),o(),n()})}}let In=!1;function La(){In=!0}function fn(){In=!1}let yt=null;function wr(e){if(!lr||!p.observeMutations)return;const{treeCallback:t=ut,nodeCallback:n=ut,pseudoElementsCallback:r=ut,observeMutationsRoot:a=T}=e;yt=new lr(o=>{if(In)return;const i=oe();_e(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!xr(s.addedNodes[0])&&(p.searchPseudoElements&&r(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&p.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&xr(s.target)&&~bs.indexOf(s.attributeName))if(s.attributeName==="class"&&Zs(s.target)){const{prefix:c,iconName:f}=Ot(kn(s.target));s.target.setAttribute(wn,c||i),f&&s.target.setAttribute(Sn,f)}else ec(s.target)&&n(s.target)})}),Q&&yt.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function oc(){yt&&yt.disconnect()}function ic(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const o=a.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(r[i]=s.join(":").trim()),r},{})),n}function sc(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=Ot(kn(e));return a.prefix||(a.prefix=oe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Fs(a.prefix,e.innerText)||Pn(a.prefix,nn(e.innerText))),!a.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function cc(e){const t=_e(e.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return p.autoA11y&&(n?t["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(r||Ue()):(t["aria-hidden"]="true",t.focusable="false")),t}function lc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:U,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Sr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=sc(e),o=cc(e),i=an("parseNodeAttributes",{},e);let s=t.styleParser?ic(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:U,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o},...i}}const{styles:fc}=B;function Fa(e){const t=p.autoReplaceSvg==="nest"?Sr(e,{styleParser:!1}):Sr(e);return~t.extra.classes.indexOf(xa)?ie("generateLayersText",e,t):ie("generateSvgReplacementMutation",e,t)}let V=new Set;ba.map(e=>{V.add("fa-".concat(e))});Object.keys(pe[N]).map(V.add.bind(V));Object.keys(pe[M]).map(V.add.bind(V));Object.keys(pe[D]).map(V.add.bind(V));V=[...V];function kr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Q)return Promise.resolve();const n=T.documentElement.classList,r=u=>n.add("".concat(dr,"-").concat(u)),a=u=>n.remove("".concat(dr,"-").concat(u)),o=p.autoFetchSvg?V:ba.map(u=>"fa-".concat(u)).concat(Object.keys(fc));o.includes("fa")||o.push("fa");const i=[".".concat(xa,":not([").concat(ge,"])")].concat(o.map(u=>".".concat(u,":not([").concat(ge,"])"))).join(", ");if(i.length===0)return Promise.resolve();let s=[];try{s=_e(e.querySelectorAll(i))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();const c=On.begin("onTree"),f=s.reduce((u,m)=>{try{const d=Fa(m);d&&u.push(d)}catch(d){ga||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,m)=>{Promise.all(f).then(d=>{za(d,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),c(),u()})}).catch(d=>{c(),m(d)})})}function uc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Fa(e).then(n=>{n&&za([n],t)})}function dc(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:on(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:on(a||{})),e(r,{...n,mask:a})}}const pc=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=U,symbol:r=!1,mask:a=null,maskId:o=null,title:i=null,titleId:s=null,classes:c=[],attributes:f={},styles:u={}}=t;if(!e)return;const{prefix:m,iconName:d,icon:g}=e;return It({type:"icon",...e},()=>(be("beforeDOMElementCreation",{iconDefinition:e,params:t}),p.autoA11y&&(i?f["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(s||Ue()):(f["aria-hidden"]="true",f.focusable="false")),jn({icons:{main:sn(g),mask:a?sn(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:d,transform:{...U,...n},symbol:r,title:i,maskId:o,titleId:s,extra:{attributes:f,styles:u,classes:c}})))};var mc={mixout(){return{icon:dc(pc)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=kr,e.nodeCallback=uc,e}}},provides(e){e.i2svg=function(t){const{node:n=T,callback:r=()=>{}}=t;return kr(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:o,prefix:i,transform:s,symbol:c,mask:f,maskId:u,extra:m}=n;return new Promise((d,g)=>{Promise.all([cn(r,i),f.iconName?cn(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[C,A]=S;d([t,jn({icons:{main:C,mask:A},prefix:i,iconName:r,transform:s,symbol:c,maskId:u,title:a,titleId:o,extra:m,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:o,styles:i}=t;const s=Et(i);s.length>0&&(r.style=s);let c;return An(o)&&(c=ie("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(c||a.icon),{children:n,attributes:r}}}},hc={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return It({type:"layer"},()=>{be("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},gc={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=t;return It({type:"counter",content:e},()=>(be("beforeDOMElementCreation",{content:e,params:t}),Ks({content:e.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(p.cssPrefix,"-layers-counter"),...r]}})))}}}},bc={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=U,title:r=null,classes:a=[],attributes:o={},styles:i={}}=t;return It({type:"text",content:e},()=>(be("beforeDOMElementCreation",{content:e,params:t}),br({content:e,transform:{...U,...n},title:r,extra:{attributes:o,styles:i,classes:["".concat(p.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:o}=n;let i=null,s=null;if(fa){const c=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();i=f.width/c,s=f.height/c}return p.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,br({content:t.innerHTML,width:i,height:s,transform:a,title:r,extra:o,watchable:!0})])}}};const yc=new RegExp('"',"ug"),Ar=[1105920,1112319],Cr={FontAwesome:{normal:"fas",400:"fas"},...Zi,...Qi,...ss},un=Object.keys(Cr).reduce((e,t)=>(e[t.toLowerCase()]=Cr[t],e),{}),xc=Object.keys(un).reduce((e,t)=>{const n=un[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function vc(e){const t=e.replace(yc,""),n=Ts(t,0),r=n>=Ar[0]&&n<=Ar[1],a=t.length===2?t[0]===t[1]:!1;return{value:nn(a?t[0]:t),isSecondary:r||a}}function wc(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(un[n]||{})[a]||xc[n]}function Pr(e,t){const n="".concat(fs).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const i=_e(e.children).filter(d=>d.getAttribute(Qt)===t)[0],s=ae.getComputedStyle(e,t),c=s.getPropertyValue("font-family"),f=c.match(hs),u=s.getPropertyValue("font-weight"),m=s.getPropertyValue("content");if(i&&!f)return e.removeChild(i),r();if(f&&m!=="none"&&m!==""){const d=s.getPropertyValue("content");let g=wc(c,u);const{value:S,isSecondary:C}=vc(d),A=f[0].startsWith("FontAwesome");let w=Pn(g,S),b=w;if(A){const y=Ms(S);y.iconName&&y.prefix&&(w=y.iconName,g=y.prefix)}if(w&&!C&&(!i||i.getAttribute(wn)!==g||i.getAttribute(Sn)!==b)){e.setAttribute(n,b),i&&e.removeChild(i);const y=lc(),{extra:P}=y;P.attributes[Qt]=t,cn(w,g).then(E=>{const O=jn({...y,icons:{main:E,mask:En()},prefix:g,iconName:b,extra:P,watchable:!0}),x=T.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(x,e.firstChild):e.appendChild(x),x.outerHTML=O.map(se=>qe(se)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Sc(e){return Promise.all([Pr(e,"::before"),Pr(e,"::after")])}function kc(e){return e.parentNode!==document.head&&!~ds.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Qt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Er(e){if(Q)return new Promise((t,n)=>{const r=_e(e.querySelectorAll("*")).filter(kc).map(Sc),a=On.begin("searchPseudoElements");La(),Promise.all(r).then(()=>{a(),fn(),t()}).catch(()=>{a(),fn(),n()})})}var Ac={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Er,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=T}=t;p.searchPseudoElements&&Er(n)}}};let jr=!1;var Cc={mixout(){return{dom:{unwatch(){La(),jr=!0}}}},hooks(){return{bootstrap(){wr(an("mutationObserverCallbacks",{}))},noAuto(){oc()},watch(e){const{observeMutationsRoot:t}=e;jr?fn():wr(an("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Or=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let i=a.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)};var Pc={mixout(){return{parse:{transform:e=>Or(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Or(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:o}=t;const i={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(s," ").concat(c," ").concat(f)},m={transform:"translate(".concat(o/2*-1," -256)")},d={outer:i,inner:u,path:m};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const Ht={x:0,y:0,width:"100%",height:"100%"};function Ir(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ec(e){return e.tag==="g"?e.children:[e]}var jc={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Ot(n.split(" ").map(a=>a.trim())):En();return r.prefix||(r.prefix=oe()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:o,maskId:i,transform:s}=t;const{width:c,icon:f}=a,{width:u,icon:m}=o,d=Cs({transform:s,containerWidth:u,iconWidth:c}),g={tag:"rect",attributes:{...Ht,fill:"white"}},S=f.children?{children:f.children.map(Ir)}:{},C={tag:"g",attributes:{...d.inner},children:[Ir({tag:f.tag,attributes:{...f.attributes,...d.path},...S})]},A={tag:"g",attributes:{...d.outer},children:[C]},w="mask-".concat(i||Ue()),b="clip-".concat(i||Ue()),y={tag:"mask",attributes:{...Ht,id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,A]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:Ec(m)},y]};return n.push(P,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(w,")"),...Ht}}),{children:n,attributes:r}}}},Oc={provides(e){let t=!1;ae.matchMedia&&(t=ae.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...a,attributeName:"opacity"},i={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||i.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(i),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ic={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Tc=[js,mc,hc,gc,bc,Ac,Cc,Pc,jc,Oc,Ic];Hs(Tc,{mixoutsTo:$});$.noAuto;$.config;$.library;$.dom;const dn=$.parse;$.findIconDefinition;$.toHtml;const Nc=$.icon;$.layer;$.text;$.counter;var Ma={exports:{}},_c="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Rc=_c,zc=Rc;function Da(){}function $a(){}$a.resetWarningCache=Da;var Lc=function(){function e(r,a,o,i,s,c){if(c!==zc){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:$a,resetWarningCache:Da};return n.PropTypes=n,n};Ma.exports=Lc();var Fc=Ma.exports;const k=Qa(Fc);function Tr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tr(Object(n),!0).forEach(function(r){Se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xt(e){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xt(e)}function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mc(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Dc(e,t){if(e==null)return{};var n=Mc(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function pn(e){return $c(e)||Yc(e)||Hc(e)||Wc()}function $c(e){if(Array.isArray(e))return mn(e)}function Yc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Hc(e,t){if(e){if(typeof e=="string")return mn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mn(e,t)}}function mn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Wc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gc(e){var t,n=e.beat,r=e.fade,a=e.beatFade,o=e.bounce,i=e.shake,s=e.flash,c=e.spin,f=e.spinPulse,u=e.spinReverse,m=e.pulse,d=e.fixedWidth,g=e.inverse,S=e.border,C=e.listItem,A=e.flip,w=e.size,b=e.rotation,y=e.pull,P=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":m,"fa-fw":d,"fa-inverse":g,"fa-border":S,"fa-li":C,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both"},Se(t,"fa-".concat(w),typeof w<"u"&&w!==null),Se(t,"fa-rotate-".concat(b),typeof b<"u"&&b!==null&&b!==0),Se(t,"fa-pull-".concat(y),typeof y<"u"&&y!==null),Se(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(P).map(function(E){return P[E]?E:null}).filter(function(E){return E})}function Uc(e){return e=e-0,e===e}function Ya(e){return Uc(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Bc=["style"];function Vc(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Xc(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Ya(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?t[Vc(a)]=o:t[a]=o,t},{})}function Ha(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Ha(e,c)}),a=Object.keys(t.attributes||{}).reduce(function(c,f){var u=t.attributes[f];switch(f){case"class":c.attrs.className=u,delete t.attributes.class;break;case"style":c.attrs.style=Xc(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=u:c.attrs[Ya(f)]=u}return c},{attrs:{}}),o=n.style,i=o===void 0?{}:o,s=Dc(n,Bc);return a.attrs.style=G(G({},a.attrs.style),i),e.apply(void 0,[t.tag,G(G({},a.attrs),s)].concat(pn(r)))}var Wa=!1;try{Wa=!0}catch{}function Kc(){if(!Wa&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Nr(e){if(e&&xt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(dn.icon)return dn.icon(e);if(e===null)return null;if(e&&xt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Wt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Se({},e,t):{}}var _r={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ae=he.forwardRef(function(e,t){var n=G(G({},_r),e),r=n.icon,a=n.mask,o=n.symbol,i=n.className,s=n.title,c=n.titleId,f=n.maskId,u=Nr(r),m=Wt("classes",[].concat(pn(Gc(n)),pn((i||"").split(" ")))),d=Wt("transform",typeof n.transform=="string"?dn.transform(n.transform):n.transform),g=Wt("mask",Nr(a)),S=Nc(u,G(G(G(G({},m),d),g),{},{symbol:o,title:s,titleId:c,maskId:f}));if(!S)return Kc("Could not find icon",u),null;var C=S.abstract,A={ref:t};return Object.keys(n).forEach(function(w){_r.hasOwnProperty(w)||(A[w]=n[w])}),qc(C[0],A)});Ae.displayName="FontAwesomeIcon";Ae.propTypes={beat:k.bool,border:k.bool,beatFade:k.bool,bounce:k.bool,className:k.string,fade:k.bool,flash:k.bool,mask:k.oneOfType([k.object,k.array,k.string]),maskId:k.string,fixedWidth:k.bool,inverse:k.bool,flip:k.oneOf([!0,!1,"horizontal","vertical","both"]),icon:k.oneOfType([k.object,k.array,k.string]),listItem:k.bool,pull:k.oneOf(["right","left"]),pulse:k.bool,rotation:k.oneOf([0,90,180,270]),shake:k.bool,size:k.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:k.bool,spinPulse:k.bool,spinReverse:k.bool,symbol:k.oneOfType([k.bool,k.string]),title:k.string,titleId:k.string,transform:k.oneOfType([k.string,k.object]),swapOpacity:k.bool};var qc=Ha.bind(null,he.createElement);/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Jc={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Qc={prefix:"fas",iconName:"file-arrow-down",icon:[384,512,["file-download"],"f56d","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z"]},Zc=Qc,el=h.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #35bcbf;
  color: #fff;
  text-decoration: none;
  font-size: 1.5em;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition:
    transform 0.3s,
    background-color 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: #2ba9a8;

    .tooltip {
      opacity: 1;
      visibility: visible;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  .tooltip {
    position: absolute;
    bottom: 50px;
    right: 50%;
    transform: translateX(50%);
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.9em;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.3s,
      visibility 0.3s;
  }
`,tl=()=>l.jsxs(el,{href:"files/Tomas_Gres_CV.pdf",download:!0,children:[l.jsx(Ae,{icon:Zc}),l.jsx("span",{className:"tooltip",children:"Download CV"})]}),nl=()=>{const e=z.useRef(null),t=z.useRef(null),n=z.useRef(null),r=z.useRef(null),a=z.useRef(null),o=z.useRef(null),i=s=>{const f={about:e,skills:t,experience:n,education:r,projects:a,hobbies:o}[s];f!=null&&f.current&&f.current.scrollIntoView({behavior:"smooth"})};return l.jsxs(l.Fragment,{children:[l.jsx(Bi,{onNavigate:i}),l.jsxs(ci,{children:[l.jsx("div",{ref:e,children:l.jsx(pi,{})}),l.jsx("div",{ref:t,children:l.jsx(vi,{})}),l.jsx("div",{ref:n,children:l.jsx(wi,{})}),l.jsx("div",{ref:r,children:l.jsx(ki,{})}),l.jsx("div",{ref:a,children:l.jsx(zi,{})}),l.jsx("div",{ref:o,children:l.jsx(Hi,{})}),l.jsx(tl,{})]})]})},rl={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},al={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},ol=h.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`,il=h.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  a {
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
`,sl=()=>l.jsx(ol,{children:l.jsxs(il,{children:[l.jsxs("a",{href:"https://github.com/Youngi102",target:"_blank",rel:"noopener noreferrer",children:[l.jsx(Ae,{icon:al})," GitHub"]}),l.jsxs("a",{href:"https://linkedin.com/in/tomas-gres",target:"_blank",rel:"noopener noreferrer",children:[l.jsx(Ae,{icon:rl})," LinkedIn"]}),l.jsxs("a",{href:"mailto:tomasgres2001@gmail.com",target:"_blank",rel:"noopener noreferrer",children:[l.jsx(Ae,{icon:Jc})," Gmail"]})]})}),cl=()=>l.jsxs(l.Fragment,{children:[l.jsx(nl,{}),l.jsx(sl,{})]});Lr(document.getElementById("root")).render(l.jsx(z.StrictMode,{children:l.jsx(cl,{})}));
