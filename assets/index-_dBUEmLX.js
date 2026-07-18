(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function II(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var xy={exports:{}},Sc={},Dy={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pa=Symbol.for("react.element"),TI=Symbol.for("react.portal"),SI=Symbol.for("react.fragment"),AI=Symbol.for("react.strict_mode"),CI=Symbol.for("react.profiler"),PI=Symbol.for("react.provider"),RI=Symbol.for("react.context"),kI=Symbol.for("react.forward_ref"),NI=Symbol.for("react.suspense"),xI=Symbol.for("react.memo"),DI=Symbol.for("react.lazy"),Vm=Symbol.iterator;function bI(t){return t===null||typeof t!="object"?null:(t=Vm&&t[Vm]||t["@@iterator"],typeof t=="function"?t:null)}var by={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vy=Object.assign,Oy={};function Ps(t,e,n){this.props=t,this.context=e,this.refs=Oy,this.updater=n||by}Ps.prototype.isReactComponent={};Ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ly(){}Ly.prototype=Ps.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=Oy,this.updater=n||by}var $d=Bd.prototype=new Ly;$d.constructor=Bd;Vy($d,Ps.prototype);$d.isPureReactComponent=!0;var Om=Array.isArray,My=Object.prototype.hasOwnProperty,zd={current:null},jy={key:!0,ref:!0,__self:!0,__source:!0};function Fy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)My.call(e,r)&&!jy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:pa,type:t,key:s,ref:o,props:i,_owner:zd.current}}function VI(t,e){return{$$typeof:pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===pa}function OI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lm=/\/+/g;function Du(t,e){return typeof t=="object"&&t!==null&&t.key!=null?OI(""+t.key):e.toString(36)}function ul(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pa:case TI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Du(o,0):r,Om(i)?(n="",t!=null&&(n=t.replace(Lm,"$&/")+"/"),ul(i,e,n,"",function(u){return u})):i!=null&&(qd(i)&&(i=VI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Om(t))for(var l=0;l<t.length;l++){s=t[l];var c=r+Du(s,l);o+=ul(s,e,n,c,i)}else if(c=bI(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=r+Du(s,l++),o+=ul(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ba(t,e,n){if(t==null)return t;var r=[],i=0;return ul(t,r,"","",function(s){return e.call(n,s,i++)}),r}function LI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var St={current:null},hl={transition:null},MI={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:hl,ReactCurrentOwner:zd};function Uy(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Ba,forEach:function(t,e,n){Ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ba(t,function(){e++}),e},toArray:function(t){return Ba(t,function(e){return e})||[]},only:function(t){if(!qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Ps;ne.Fragment=SI;ne.Profiler=CI;ne.PureComponent=Bd;ne.StrictMode=AI;ne.Suspense=NI;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MI;ne.act=Uy;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Vy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)My.call(e,c)&&!jy.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:pa,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:RI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:PI,_context:t},t.Consumer=t};ne.createElement=Fy;ne.createFactory=function(t){var e=Fy.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:kI,render:t}};ne.isValidElement=qd;ne.lazy=function(t){return{$$typeof:DI,_payload:{_status:-1,_result:t},_init:LI}};ne.memo=function(t,e){return{$$typeof:xI,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=hl.transition;hl.transition={};try{t()}finally{hl.transition=e}};ne.unstable_act=Uy;ne.useCallback=function(t,e){return St.current.useCallback(t,e)};ne.useContext=function(t){return St.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return St.current.useDeferredValue(t)};ne.useEffect=function(t,e){return St.current.useEffect(t,e)};ne.useId=function(){return St.current.useId()};ne.useImperativeHandle=function(t,e,n){return St.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return St.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return St.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return St.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return St.current.useReducer(t,e,n)};ne.useRef=function(t){return St.current.useRef(t)};ne.useState=function(t){return St.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return St.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return St.current.useTransition()};ne.version="18.3.1";Dy.exports=ne;var U=Dy.exports;const jI=II(U);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FI=U,UI=Symbol.for("react.element"),BI=Symbol.for("react.fragment"),$I=Object.prototype.hasOwnProperty,zI=FI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qI={key:!0,ref:!0,__self:!0,__source:!0};function By(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$I.call(e,r)&&!qI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:UI,type:t,key:s,ref:o,props:i,_owner:zI.current}}Sc.Fragment=BI;Sc.jsx=By;Sc.jsxs=By;xy.exports=Sc;var d=xy.exports,wh={},$y={exports:{}},$t={},zy={exports:{}},qy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var Z=B.length;B.push(G);e:for(;0<Z;){var fe=Z-1>>>1,xe=B[fe];if(0<i(xe,G))B[fe]=G,B[Z]=xe,Z=fe;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],Z=B.pop();if(Z!==G){B[0]=Z;e:for(var fe=0,xe=B.length,Qr=xe>>>1;fe<Qr;){var qt=2*(fe+1)-1,Yr=B[qt],nn=qt+1,tr=B[nn];if(0>i(Yr,Z))nn<xe&&0>i(tr,Yr)?(B[fe]=tr,B[nn]=Z,fe=nn):(B[fe]=Yr,B[qt]=Z,fe=qt);else if(nn<xe&&0>i(tr,Z))B[fe]=tr,B[nn]=Z,fe=nn;else break e}}return G}function i(B,G){var Z=B.sortIndex-G.sortIndex;return Z!==0?Z:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],f=1,m=null,g=3,T=!1,R=!1,N=!1,b=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=B)r(u),G.sortIndex=G.expirationTime,e(c,G);else break;G=n(u)}}function k(B){if(N=!1,I(B),!R)if(n(c)!==null)R=!0,J(O);else{var G=n(u);G!==null&&de(k,G.startTime-B)}}function O(B,G){R=!1,N&&(N=!1,w(v),v=-1),T=!0;var Z=g;try{for(I(G),m=n(c);m!==null&&(!(m.expirationTime>G)||B&&!P());){var fe=m.callback;if(typeof fe=="function"){m.callback=null,g=m.priorityLevel;var xe=fe(m.expirationTime<=G);G=t.unstable_now(),typeof xe=="function"?m.callback=xe:m===n(c)&&r(c),I(G)}else r(c);m=n(c)}if(m!==null)var Qr=!0;else{var qt=n(u);qt!==null&&de(k,qt.startTime-G),Qr=!1}return Qr}finally{m=null,g=Z,T=!1}}var L=!1,E=null,v=-1,S=5,C=-1;function P(){return!(t.unstable_now()-C<S)}function x(){if(E!==null){var B=t.unstable_now();C=B;var G=!0;try{G=E(!0,B)}finally{G?A():(L=!1,E=null)}}else L=!1}var A;if(typeof y=="function")A=function(){y(x)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,gt=Se.port2;Se.port1.onmessage=x,A=function(){gt.postMessage(null)}}else A=function(){b(x,0)};function J(B){E=B,L||(L=!0,A())}function de(B,G){v=b(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){R||T||(R=!0,J(O))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var Z=g;g=G;try{return B()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=g;g=B;try{return G()}finally{g=Z}},t.unstable_scheduleCallback=function(B,G,Z){var fe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?fe+Z:fe):Z=fe,B){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=Z+xe,B={id:f++,callback:G,priorityLevel:B,startTime:Z,expirationTime:xe,sortIndex:-1},Z>fe?(B.sortIndex=Z,e(u,B),n(c)===null&&B===n(u)&&(N?(w(v),v=-1):N=!0,de(k,Z-fe))):(B.sortIndex=xe,e(c,B),R||T||(R=!0,J(O))),B},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(B){var G=g;return function(){var Z=g;g=G;try{return B.apply(this,arguments)}finally{g=Z}}}})(qy);zy.exports=qy;var HI=zy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WI=U,Bt=HI;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hy=new Set,Uo={};function Ti(t,e){fs(t,e),fs(t+"Capture",e)}function fs(t,e){for(Uo[t]=e,t=0;t<e.length;t++)Hy.add(e[t])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eh=Object.prototype.hasOwnProperty,GI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mm={},jm={};function KI(t){return Eh.call(jm,t)?!0:Eh.call(Mm,t)?!1:GI.test(t)?jm[t]=!0:(Mm[t]=!0,!1)}function QI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function YI(t,e,n,r){if(e===null||typeof e>"u"||QI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function At(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new At(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new At(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new At(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new At(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new At(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new At(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new At(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new At(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new At(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hd=/[\-:]([a-z])/g;function Wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hd,Wd);it[e]=new At(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hd,Wd);it[e]=new At(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hd,Wd);it[e]=new At(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new At(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new At(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gd(t,e,n,r){var i=it.hasOwnProperty(e)?it[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(YI(e,n,i,r)&&(n=null),r||i===null?KI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Zn=WI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),Bi=Symbol.for("react.portal"),$i=Symbol.for("react.fragment"),Kd=Symbol.for("react.strict_mode"),Ih=Symbol.for("react.profiler"),Wy=Symbol.for("react.provider"),Gy=Symbol.for("react.context"),Qd=Symbol.for("react.forward_ref"),Th=Symbol.for("react.suspense"),Sh=Symbol.for("react.suspense_list"),Yd=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),Ky=Symbol.for("react.offscreen"),Fm=Symbol.iterator;function so(t){return t===null||typeof t!="object"?null:(t=Fm&&t[Fm]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,bu;function mo(t){if(bu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bu=e&&e[1]||""}return`
`+bu+t}var Vu=!1;function Ou(t,e){if(!t||Vu)return"";Vu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{Vu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?mo(t):""}function XI(t){switch(t.tag){case 5:return mo(t.type);case 16:return mo("Lazy");case 13:return mo("Suspense");case 19:return mo("SuspenseList");case 0:case 2:case 15:return t=Ou(t.type,!1),t;case 11:return t=Ou(t.type.render,!1),t;case 1:return t=Ou(t.type,!0),t;default:return""}}function Ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $i:return"Fragment";case Bi:return"Portal";case Ih:return"Profiler";case Kd:return"StrictMode";case Th:return"Suspense";case Sh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gy:return(t.displayName||"Context")+".Consumer";case Wy:return(t._context.displayName||"Context")+".Provider";case Qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yd:return e=t.displayName||null,e!==null?e:Ah(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return Ah(t(e))}catch{}}return null}function JI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ah(e);case 8:return e===Kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZI(t){var e=Qy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function za(t){t._valueTracker||(t._valueTracker=ZI(t))}function Yy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Qy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ch(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Um(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xy(t,e){e=e.checked,e!=null&&Gd(t,"checked",e,!1)}function Ph(t,e){Xy(t,e);var n=Vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rh(t,e.type,Vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rh(t,e,n){(e!=="number"||Dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var go=Array.isArray;function es(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function kh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $m(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(go(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vr(n)}}function Jy(t,e){var n=Vr(e.value),r=Vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qa,ev=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qa=qa||document.createElement("div"),qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eT=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(t){eT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ao[e]=Ao[t]})});function tv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ao.hasOwnProperty(t)&&Ao[t]?(""+e).trim():e+"px"}function nv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var tT=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xh(t,e){if(e){if(tT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Dh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=null;function Xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vh=null,ts=null,ns=null;function qm(t){if(t=_a(t)){if(typeof Vh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=kc(e),Vh(t.stateNode,t.type,e))}}function rv(t){ts?ns?ns.push(t):ns=[t]:ts=t}function iv(){if(ts){var t=ts,e=ns;if(ns=ts=null,qm(t),e)for(t=0;t<e.length;t++)qm(e[t])}}function sv(t,e){return t(e)}function ov(){}var Lu=!1;function av(t,e,n){if(Lu)return t(e,n);Lu=!0;try{return sv(t,e,n)}finally{Lu=!1,(ts!==null||ns!==null)&&(ov(),iv())}}function $o(t,e){var n=t.stateNode;if(n===null)return null;var r=kc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Oh=!1;if(Hn)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Oh=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Oh=!1}function nT(t,e,n,r,i,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Co=!1,bl=null,Vl=!1,Lh=null,rT={onError:function(t){Co=!0,bl=t}};function iT(t,e,n,r,i,s,o,l,c){Co=!1,bl=null,nT.apply(rT,arguments)}function sT(t,e,n,r,i,s,o,l,c){if(iT.apply(this,arguments),Co){if(Co){var u=bl;Co=!1,bl=null}else throw Error(F(198));Vl||(Vl=!0,Lh=u)}}function Si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hm(t){if(Si(t)!==t)throw Error(F(188))}function oT(t){var e=t.alternate;if(!e){if(e=Si(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Hm(i),t;if(s===r)return Hm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function cv(t){return t=oT(t),t!==null?uv(t):null}function uv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=uv(t);if(e!==null)return e;t=t.sibling}return null}var hv=Bt.unstable_scheduleCallback,Wm=Bt.unstable_cancelCallback,aT=Bt.unstable_shouldYield,lT=Bt.unstable_requestPaint,Oe=Bt.unstable_now,cT=Bt.unstable_getCurrentPriorityLevel,Jd=Bt.unstable_ImmediatePriority,dv=Bt.unstable_UserBlockingPriority,Ol=Bt.unstable_NormalPriority,uT=Bt.unstable_LowPriority,fv=Bt.unstable_IdlePriority,Ac=null,An=null;function hT(t){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(Ac,t,void 0,(t.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:pT,dT=Math.log,fT=Math.LN2;function pT(t){return t>>>=0,t===0?32:31-(dT(t)/fT|0)|0}var Ha=64,Wa=4194304;function _o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=_o(l):(s&=o,s!==0&&(r=_o(s)))}else o=n&~i,o!==0?r=_o(o):s!==0&&(r=_o(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-un(e),i=1<<n,r|=t[n],e&=~i;return r}function mT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-un(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=mT(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function Mh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pv(){var t=Ha;return Ha<<=1,!(Ha&4194240)&&(Ha=64),t}function Mu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-un(e),t[e]=n}function _T(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-un(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-un(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function mv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gv,ef,_v,yv,vv,jh=!1,Ga=[],Er=null,Ir=null,Tr=null,zo=new Map,qo=new Map,dr=[],yT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gm(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(e.pointerId)}}function ao(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=_a(e),e!==null&&ef(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function vT(t,e,n,r,i){switch(e){case"focusin":return Er=ao(Er,t,e,n,r,i),!0;case"dragenter":return Ir=ao(Ir,t,e,n,r,i),!0;case"mouseover":return Tr=ao(Tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return zo.set(s,ao(zo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,qo.set(s,ao(qo.get(s)||null,t,e,n,r,i)),!0}return!1}function wv(t){var e=si(t.target);if(e!==null){var n=Si(e);if(n!==null){if(e=n.tag,e===13){if(e=lv(n),e!==null){t.blockedOn=e,vv(t.priority,function(){_v(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bh=r,n.target.dispatchEvent(r),bh=null}else return e=_a(n),e!==null&&ef(e),t.blockedOn=n,!1;e.shift()}return!0}function Km(t,e,n){dl(t)&&n.delete(e)}function wT(){jh=!1,Er!==null&&dl(Er)&&(Er=null),Ir!==null&&dl(Ir)&&(Ir=null),Tr!==null&&dl(Tr)&&(Tr=null),zo.forEach(Km),qo.forEach(Km)}function lo(t,e){t.blockedOn===e&&(t.blockedOn=null,jh||(jh=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,wT)))}function Ho(t){function e(i){return lo(i,t)}if(0<Ga.length){lo(Ga[0],t);for(var n=1;n<Ga.length;n++){var r=Ga[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Er!==null&&lo(Er,t),Ir!==null&&lo(Ir,t),Tr!==null&&lo(Tr,t),zo.forEach(e),qo.forEach(e),n=0;n<dr.length;n++)r=dr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)wv(n),n.blockedOn===null&&dr.shift()}var rs=Zn.ReactCurrentBatchConfig,Ml=!0;function ET(t,e,n,r){var i=ue,s=rs.transition;rs.transition=null;try{ue=1,tf(t,e,n,r)}finally{ue=i,rs.transition=s}}function IT(t,e,n,r){var i=ue,s=rs.transition;rs.transition=null;try{ue=4,tf(t,e,n,r)}finally{ue=i,rs.transition=s}}function tf(t,e,n,r){if(Ml){var i=Fh(t,e,n,r);if(i===null)Gu(t,e,r,jl,n),Gm(t,r);else if(vT(i,t,e,n,r))r.stopPropagation();else if(Gm(t,r),e&4&&-1<yT.indexOf(t)){for(;i!==null;){var s=_a(i);if(s!==null&&gv(s),s=Fh(t,e,n,r),s===null&&Gu(t,e,r,jl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gu(t,e,r,null,n)}}var jl=null;function Fh(t,e,n,r){if(jl=null,t=Xd(r),t=si(t),t!==null)if(e=Si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return jl=t,null}function Ev(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cT()){case Jd:return 1;case dv:return 4;case Ol:case uT:return 16;case fv:return 536870912;default:return 16}default:return 16}}var yr=null,nf=null,fl=null;function Iv(){if(fl)return fl;var t,e=nf,n=e.length,r,i="value"in yr?yr.value:yr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return fl=i.slice(t,1<r?1-r:void 0)}function pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function Qm(){return!1}function zt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:Qm,this.isPropagationStopped=Qm,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rf=zt(Rs),ga=Pe({},Rs,{view:0,detail:0}),TT=zt(ga),ju,Fu,co,Cc=Pe({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(ju=t.screenX-co.screenX,Fu=t.screenY-co.screenY):Fu=ju=0,co=t),ju)},movementY:function(t){return"movementY"in t?t.movementY:Fu}}),Ym=zt(Cc),ST=Pe({},Cc,{dataTransfer:0}),AT=zt(ST),CT=Pe({},ga,{relatedTarget:0}),Uu=zt(CT),PT=Pe({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),RT=zt(PT),kT=Pe({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NT=zt(kT),xT=Pe({},Rs,{data:0}),Xm=zt(xT),DT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=VT[t])?!!e[t]:!1}function sf(){return OT}var LT=Pe({},ga,{key:function(t){if(t.key){var e=DT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sf,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),MT=zt(LT),jT=Pe({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=zt(jT),FT=Pe({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sf}),UT=zt(FT),BT=Pe({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),$T=zt(BT),zT=Pe({},Cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qT=zt(zT),HT=[9,13,27,32],of=Hn&&"CompositionEvent"in window,Po=null;Hn&&"documentMode"in document&&(Po=document.documentMode);var WT=Hn&&"TextEvent"in window&&!Po,Tv=Hn&&(!of||Po&&8<Po&&11>=Po),Zm=" ",eg=!1;function Sv(t,e){switch(t){case"keyup":return HT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Av(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zi=!1;function GT(t,e){switch(t){case"compositionend":return Av(e);case"keypress":return e.which!==32?null:(eg=!0,Zm);case"textInput":return t=e.data,t===Zm&&eg?null:t;default:return null}}function KT(t,e){if(zi)return t==="compositionend"||!of&&Sv(t,e)?(t=Iv(),fl=nf=yr=null,zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tv&&e.locale!=="ko"?null:e.data;default:return null}}var QT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!QT[t.type]:e==="textarea"}function Cv(t,e,n,r){rv(r),e=Fl(e,"onChange"),0<e.length&&(n=new rf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ro=null,Wo=null;function YT(t){Mv(t,0)}function Pc(t){var e=Wi(t);if(Yy(e))return t}function XT(t,e){if(t==="change")return e}var Pv=!1;if(Hn){var Bu;if(Hn){var $u="oninput"in document;if(!$u){var ng=document.createElement("div");ng.setAttribute("oninput","return;"),$u=typeof ng.oninput=="function"}Bu=$u}else Bu=!1;Pv=Bu&&(!document.documentMode||9<document.documentMode)}function rg(){Ro&&(Ro.detachEvent("onpropertychange",Rv),Wo=Ro=null)}function Rv(t){if(t.propertyName==="value"&&Pc(Wo)){var e=[];Cv(e,Wo,t,Xd(t)),av(YT,e)}}function JT(t,e,n){t==="focusin"?(rg(),Ro=e,Wo=n,Ro.attachEvent("onpropertychange",Rv)):t==="focusout"&&rg()}function ZT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pc(Wo)}function eS(t,e){if(t==="click")return Pc(e)}function tS(t,e){if(t==="input"||t==="change")return Pc(e)}function nS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dn=typeof Object.is=="function"?Object.is:nS;function Go(t,e){if(dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Eh.call(e,i)||!dn(t[i],e[i]))return!1}return!0}function ig(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sg(t,e){var n=ig(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ig(n)}}function kv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?kv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Nv(){for(var t=window,e=Dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dl(t.document)}return e}function af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rS(t){var e=Nv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&kv(n.ownerDocument.documentElement,n)){if(r!==null&&af(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=sg(n,s);var o=sg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iS=Hn&&"documentMode"in document&&11>=document.documentMode,qi=null,Uh=null,ko=null,Bh=!1;function og(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bh||qi==null||qi!==Dl(r)||(r=qi,"selectionStart"in r&&af(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ko&&Go(ko,r)||(ko=r,r=Fl(Uh,"onSelect"),0<r.length&&(e=new rf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qi)))}function Qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hi={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},zu={},xv={};Hn&&(xv=document.createElement("div").style,"AnimationEvent"in window||(delete Hi.animationend.animation,delete Hi.animationiteration.animation,delete Hi.animationstart.animation),"TransitionEvent"in window||delete Hi.transitionend.transition);function Rc(t){if(zu[t])return zu[t];if(!Hi[t])return t;var e=Hi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in xv)return zu[t]=e[n];return t}var Dv=Rc("animationend"),bv=Rc("animationiteration"),Vv=Rc("animationstart"),Ov=Rc("transitionend"),Lv=new Map,ag="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){Lv.set(t,e),Ti(e,[t])}for(var qu=0;qu<ag.length;qu++){var Hu=ag[qu],sS=Hu.toLowerCase(),oS=Hu[0].toUpperCase()+Hu.slice(1);zr(sS,"on"+oS)}zr(Dv,"onAnimationEnd");zr(bv,"onAnimationIteration");zr(Vv,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(Ov,"onTransitionEnd");fs("onMouseEnter",["mouseout","mouseover"]);fs("onMouseLeave",["mouseout","mouseover"]);fs("onPointerEnter",["pointerout","pointerover"]);fs("onPointerLeave",["pointerout","pointerover"]);Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aS=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function lg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,sT(r,e,void 0,t),t.currentTarget=null}function Mv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;lg(i,l,u),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;lg(i,l,u),s=c}}}if(Vl)throw t=Lh,Vl=!1,Lh=null,t}function ve(t,e){var n=e[Wh];n===void 0&&(n=e[Wh]=new Set);var r=t+"__bubble";n.has(r)||(jv(e,t,2,!1),n.add(r))}function Wu(t,e,n){var r=0;e&&(r|=4),jv(n,t,r,e)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function Ko(t){if(!t[Ya]){t[Ya]=!0,Hy.forEach(function(n){n!=="selectionchange"&&(aS.has(n)||Wu(n,!1,t),Wu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ya]||(e[Ya]=!0,Wu("selectionchange",!1,e))}}function jv(t,e,n,r){switch(Ev(e)){case 1:var i=ET;break;case 4:i=IT;break;default:i=tf}n=i.bind(null,e,n,t),i=void 0,!Oh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=si(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}av(function(){var u=s,f=Xd(n),m=[];e:{var g=Lv.get(t);if(g!==void 0){var T=rf,R=t;switch(t){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":T=MT;break;case"focusin":R="focus",T=Uu;break;case"focusout":R="blur",T=Uu;break;case"beforeblur":case"afterblur":T=Uu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=AT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=UT;break;case Dv:case bv:case Vv:T=RT;break;case Ov:T=$T;break;case"scroll":T=TT;break;case"wheel":T=qT;break;case"copy":case"cut":case"paste":T=NT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Jm}var N=(e&4)!==0,b=!N&&t==="scroll",w=N?g!==null?g+"Capture":null:g;N=[];for(var y=u,I;y!==null;){I=y;var k=I.stateNode;if(I.tag===5&&k!==null&&(I=k,w!==null&&(k=$o(y,w),k!=null&&N.push(Qo(y,k,I)))),b)break;y=y.return}0<N.length&&(g=new T(g,R,null,n,f),m.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",g&&n!==bh&&(R=n.relatedTarget||n.fromElement)&&(si(R)||R[Wn]))break e;if((T||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,T?(R=n.relatedTarget||n.toElement,T=u,R=R?si(R):null,R!==null&&(b=Si(R),R!==b||R.tag!==5&&R.tag!==6)&&(R=null)):(T=null,R=u),T!==R)){if(N=Ym,k="onMouseLeave",w="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(N=Jm,k="onPointerLeave",w="onPointerEnter",y="pointer"),b=T==null?g:Wi(T),I=R==null?g:Wi(R),g=new N(k,y+"leave",T,n,f),g.target=b,g.relatedTarget=I,k=null,si(f)===u&&(N=new N(w,y+"enter",R,n,f),N.target=I,N.relatedTarget=b,k=N),b=k,T&&R)t:{for(N=T,w=R,y=0,I=N;I;I=Li(I))y++;for(I=0,k=w;k;k=Li(k))I++;for(;0<y-I;)N=Li(N),y--;for(;0<I-y;)w=Li(w),I--;for(;y--;){if(N===w||w!==null&&N===w.alternate)break t;N=Li(N),w=Li(w)}N=null}else N=null;T!==null&&cg(m,g,T,N,!1),R!==null&&b!==null&&cg(m,b,R,N,!0)}}e:{if(g=u?Wi(u):window,T=g.nodeName&&g.nodeName.toLowerCase(),T==="select"||T==="input"&&g.type==="file")var O=XT;else if(tg(g))if(Pv)O=tS;else{O=ZT;var L=JT}else(T=g.nodeName)&&T.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(O=eS);if(O&&(O=O(t,u))){Cv(m,O,n,f);break e}L&&L(t,g,u),t==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&Rh(g,"number",g.value)}switch(L=u?Wi(u):window,t){case"focusin":(tg(L)||L.contentEditable==="true")&&(qi=L,Uh=u,ko=null);break;case"focusout":ko=Uh=qi=null;break;case"mousedown":Bh=!0;break;case"contextmenu":case"mouseup":case"dragend":Bh=!1,og(m,n,f);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":og(m,n,f)}var E;if(of)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else zi?Sv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Tv&&n.locale!=="ko"&&(zi||v!=="onCompositionStart"?v==="onCompositionEnd"&&zi&&(E=Iv()):(yr=f,nf="value"in yr?yr.value:yr.textContent,zi=!0)),L=Fl(u,v),0<L.length&&(v=new Xm(v,t,null,n,f),m.push({event:v,listeners:L}),E?v.data=E:(E=Av(n),E!==null&&(v.data=E)))),(E=WT?GT(t,n):KT(t,n))&&(u=Fl(u,"onBeforeInput"),0<u.length&&(f=new Xm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=E))}Mv(m,e)})}function Qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$o(t,n),s!=null&&r.unshift(Qo(t,s,i)),s=$o(t,e),s!=null&&r.push(Qo(t,s,i))),t=t.return}return r}function Li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=$o(n,s),c!=null&&o.unshift(Qo(n,c,l))):i||(c=$o(n,s),c!=null&&o.push(Qo(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lS=/\r\n?/g,cS=/\u0000|\uFFFD/g;function ug(t){return(typeof t=="string"?t:""+t).replace(lS,`
`).replace(cS,"")}function Xa(t,e,n){if(e=ug(e),ug(t)!==e&&n)throw Error(F(425))}function Ul(){}var $h=null,zh=null;function qh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hh=typeof setTimeout=="function"?setTimeout:void 0,uS=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,hS=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(t){return hg.resolve(null).then(t).catch(dS)}:Hh;function dS(t){setTimeout(function(){throw t})}function Ku(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ho(e)}function Sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),Sn="__reactFiber$"+ks,Yo="__reactProps$"+ks,Wn="__reactContainer$"+ks,Wh="__reactEvents$"+ks,fS="__reactListeners$"+ks,pS="__reactHandles$"+ks;function si(t){var e=t[Sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wn]||n[Sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dg(t);t!==null;){if(n=t[Sn])return n;t=dg(t)}return e}t=n,n=t.parentNode}return null}function _a(t){return t=t[Sn]||t[Wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function kc(t){return t[Yo]||null}var Gh=[],Gi=-1;function qr(t){return{current:t}}function Ee(t){0>Gi||(t.current=Gh[Gi],Gh[Gi]=null,Gi--)}function ge(t,e){Gi++,Gh[Gi]=t.current,t.current=e}var Or={},pt=qr(Or),Nt=qr(!1),fi=Or;function ps(t,e){var n=t.type.contextTypes;if(!n)return Or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xt(t){return t=t.childContextTypes,t!=null}function Bl(){Ee(Nt),Ee(pt)}function fg(t,e,n){if(pt.current!==Or)throw Error(F(168));ge(pt,e),ge(Nt,n)}function Fv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,JI(t)||"Unknown",i));return Pe({},n,r)}function $l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Or,fi=pt.current,ge(pt,t),ge(Nt,Nt.current),!0}function pg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Fv(t,e,fi),r.__reactInternalMemoizedMergedChildContext=t,Ee(Nt),Ee(pt),ge(pt,t)):Ee(Nt),ge(Nt,n)}var jn=null,Nc=!1,Qu=!1;function Uv(t){jn===null?jn=[t]:jn.push(t)}function mS(t){Nc=!0,Uv(t)}function Hr(){if(!Qu&&jn!==null){Qu=!0;var t=0,e=ue;try{var n=jn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}jn=null,Nc=!1}catch(i){throw jn!==null&&(jn=jn.slice(t+1)),hv(Jd,Hr),i}finally{ue=e,Qu=!1}}return null}var Ki=[],Qi=0,zl=null,ql=0,Wt=[],Gt=0,pi=null,Fn=1,Un="";function ni(t,e){Ki[Qi++]=ql,Ki[Qi++]=zl,zl=t,ql=e}function Bv(t,e,n){Wt[Gt++]=Fn,Wt[Gt++]=Un,Wt[Gt++]=pi,pi=t;var r=Fn;t=Un;var i=32-un(r)-1;r&=~(1<<i),n+=1;var s=32-un(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fn=1<<32-un(e)+i|n<<i|r,Un=s+t}else Fn=1<<s|n<<i|r,Un=t}function lf(t){t.return!==null&&(ni(t,1),Bv(t,1,0))}function cf(t){for(;t===zl;)zl=Ki[--Qi],Ki[Qi]=null,ql=Ki[--Qi],Ki[Qi]=null;for(;t===pi;)pi=Wt[--Gt],Wt[Gt]=null,Un=Wt[--Gt],Wt[Gt]=null,Fn=Wt[--Gt],Wt[Gt]=null}var Ft=null,Mt=null,Ie=!1,an=null;function $v(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ft=t,Mt=Sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ft=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pi!==null?{id:Fn,overflow:Un}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ft=t,Mt=null,!0):!1;default:return!1}}function Kh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qh(t){if(Ie){var e=Mt;if(e){var n=e;if(!mg(t,e)){if(Kh(t))throw Error(F(418));e=Sr(n.nextSibling);var r=Ft;e&&mg(t,e)?$v(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Ft=t)}}else{if(Kh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ie=!1,Ft=t}}}function gg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ft=t}function Ja(t){if(t!==Ft)return!1;if(!Ie)return gg(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qh(t.type,t.memoizedProps)),e&&(e=Mt)){if(Kh(t))throw zv(),Error(F(418));for(;e;)$v(t,e),e=Sr(e.nextSibling)}if(gg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mt=Sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=Ft?Sr(t.stateNode.nextSibling):null;return!0}function zv(){for(var t=Mt;t;)t=Sr(t.nextSibling)}function ms(){Mt=Ft=null,Ie=!1}function uf(t){an===null?an=[t]:an.push(t)}var gS=Zn.ReactCurrentBatchConfig;function uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Za(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _g(t){var e=t._init;return e(t._payload)}function qv(t){function e(w,y){if(t){var I=w.deletions;I===null?(w.deletions=[y],w.flags|=16):I.push(y)}}function n(w,y){if(!t)return null;for(;y!==null;)e(w,y),y=y.sibling;return null}function r(w,y){for(w=new Map;y!==null;)y.key!==null?w.set(y.key,y):w.set(y.index,y),y=y.sibling;return w}function i(w,y){return w=Rr(w,y),w.index=0,w.sibling=null,w}function s(w,y,I){return w.index=I,t?(I=w.alternate,I!==null?(I=I.index,I<y?(w.flags|=2,y):I):(w.flags|=2,y)):(w.flags|=1048576,y)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,y,I,k){return y===null||y.tag!==6?(y=nh(I,w.mode,k),y.return=w,y):(y=i(y,I),y.return=w,y)}function c(w,y,I,k){var O=I.type;return O===$i?f(w,y,I.props.children,k,I.key):y!==null&&(y.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===ur&&_g(O)===y.type)?(k=i(y,I.props),k.ref=uo(w,y,I),k.return=w,k):(k=El(I.type,I.key,I.props,null,w.mode,k),k.ref=uo(w,y,I),k.return=w,k)}function u(w,y,I,k){return y===null||y.tag!==4||y.stateNode.containerInfo!==I.containerInfo||y.stateNode.implementation!==I.implementation?(y=rh(I,w.mode,k),y.return=w,y):(y=i(y,I.children||[]),y.return=w,y)}function f(w,y,I,k,O){return y===null||y.tag!==7?(y=hi(I,w.mode,k,O),y.return=w,y):(y=i(y,I),y.return=w,y)}function m(w,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return y=nh(""+y,w.mode,I),y.return=w,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $a:return I=El(y.type,y.key,y.props,null,w.mode,I),I.ref=uo(w,null,y),I.return=w,I;case Bi:return y=rh(y,w.mode,I),y.return=w,y;case ur:var k=y._init;return m(w,k(y._payload),I)}if(go(y)||so(y))return y=hi(y,w.mode,I,null),y.return=w,y;Za(w,y)}return null}function g(w,y,I,k){var O=y!==null?y.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return O!==null?null:l(w,y,""+I,k);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case $a:return I.key===O?c(w,y,I,k):null;case Bi:return I.key===O?u(w,y,I,k):null;case ur:return O=I._init,g(w,y,O(I._payload),k)}if(go(I)||so(I))return O!==null?null:f(w,y,I,k,null);Za(w,I)}return null}function T(w,y,I,k,O){if(typeof k=="string"&&k!==""||typeof k=="number")return w=w.get(I)||null,l(y,w,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case $a:return w=w.get(k.key===null?I:k.key)||null,c(y,w,k,O);case Bi:return w=w.get(k.key===null?I:k.key)||null,u(y,w,k,O);case ur:var L=k._init;return T(w,y,I,L(k._payload),O)}if(go(k)||so(k))return w=w.get(I)||null,f(y,w,k,O,null);Za(y,k)}return null}function R(w,y,I,k){for(var O=null,L=null,E=y,v=y=0,S=null;E!==null&&v<I.length;v++){E.index>v?(S=E,E=null):S=E.sibling;var C=g(w,E,I[v],k);if(C===null){E===null&&(E=S);break}t&&E&&C.alternate===null&&e(w,E),y=s(C,y,v),L===null?O=C:L.sibling=C,L=C,E=S}if(v===I.length)return n(w,E),Ie&&ni(w,v),O;if(E===null){for(;v<I.length;v++)E=m(w,I[v],k),E!==null&&(y=s(E,y,v),L===null?O=E:L.sibling=E,L=E);return Ie&&ni(w,v),O}for(E=r(w,E);v<I.length;v++)S=T(E,w,v,I[v],k),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?v:S.key),y=s(S,y,v),L===null?O=S:L.sibling=S,L=S);return t&&E.forEach(function(P){return e(w,P)}),Ie&&ni(w,v),O}function N(w,y,I,k){var O=so(I);if(typeof O!="function")throw Error(F(150));if(I=O.call(I),I==null)throw Error(F(151));for(var L=O=null,E=y,v=y=0,S=null,C=I.next();E!==null&&!C.done;v++,C=I.next()){E.index>v?(S=E,E=null):S=E.sibling;var P=g(w,E,C.value,k);if(P===null){E===null&&(E=S);break}t&&E&&P.alternate===null&&e(w,E),y=s(P,y,v),L===null?O=P:L.sibling=P,L=P,E=S}if(C.done)return n(w,E),Ie&&ni(w,v),O;if(E===null){for(;!C.done;v++,C=I.next())C=m(w,C.value,k),C!==null&&(y=s(C,y,v),L===null?O=C:L.sibling=C,L=C);return Ie&&ni(w,v),O}for(E=r(w,E);!C.done;v++,C=I.next())C=T(E,w,v,C.value,k),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?v:C.key),y=s(C,y,v),L===null?O=C:L.sibling=C,L=C);return t&&E.forEach(function(x){return e(w,x)}),Ie&&ni(w,v),O}function b(w,y,I,k){if(typeof I=="object"&&I!==null&&I.type===$i&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case $a:e:{for(var O=I.key,L=y;L!==null;){if(L.key===O){if(O=I.type,O===$i){if(L.tag===7){n(w,L.sibling),y=i(L,I.props.children),y.return=w,w=y;break e}}else if(L.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===ur&&_g(O)===L.type){n(w,L.sibling),y=i(L,I.props),y.ref=uo(w,L,I),y.return=w,w=y;break e}n(w,L);break}else e(w,L);L=L.sibling}I.type===$i?(y=hi(I.props.children,w.mode,k,I.key),y.return=w,w=y):(k=El(I.type,I.key,I.props,null,w.mode,k),k.ref=uo(w,y,I),k.return=w,w=k)}return o(w);case Bi:e:{for(L=I.key;y!==null;){if(y.key===L)if(y.tag===4&&y.stateNode.containerInfo===I.containerInfo&&y.stateNode.implementation===I.implementation){n(w,y.sibling),y=i(y,I.children||[]),y.return=w,w=y;break e}else{n(w,y);break}else e(w,y);y=y.sibling}y=rh(I,w.mode,k),y.return=w,w=y}return o(w);case ur:return L=I._init,b(w,y,L(I._payload),k)}if(go(I))return R(w,y,I,k);if(so(I))return N(w,y,I,k);Za(w,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,y!==null&&y.tag===6?(n(w,y.sibling),y=i(y,I),y.return=w,w=y):(n(w,y),y=nh(I,w.mode,k),y.return=w,w=y),o(w)):n(w,y)}return b}var gs=qv(!0),Hv=qv(!1),Hl=qr(null),Wl=null,Yi=null,hf=null;function df(){hf=Yi=Wl=null}function ff(t){var e=Hl.current;Ee(Hl),t._currentValue=e}function Yh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function is(t,e){Wl=t,hf=Yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kt=!0),t.firstContext=null)}function Zt(t){var e=t._currentValue;if(hf!==t)if(t={context:t,memoizedValue:e,next:null},Yi===null){if(Wl===null)throw Error(F(308));Yi=t,Wl.dependencies={lanes:0,firstContext:t}}else Yi=Yi.next=t;return e}var oi=null;function pf(t){oi===null?oi=[t]:oi.push(t)}function Wv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,pf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Gn(t,r)}function Gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Gn(t,n)}return i=r.interleaved,i===null?(e.next=e,pf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Gn(t,n)}function ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zd(t,n)}}function yg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gl(t,e,n,r){var i=t.updateQueue;hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(s!==null){var m=i.baseState;o=0,f=u=c=null,l=s;do{var g=l.lane,T=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,N=l;switch(g=e,T=n,N.tag){case 1:if(R=N.payload,typeof R=="function"){m=R.call(T,m,g);break e}m=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=N.payload,g=typeof R=="function"?R.call(T,m,g):R,g==null)break e;m=Pe({},m,g);break e;case 2:hr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else T={eventTime:T,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=T,c=m):f=f.next=T,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gi|=o,t.lanes=o,t.memoizedState=m}}function vg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var ya={},Cn=qr(ya),Xo=qr(ya),Jo=qr(ya);function ai(t){if(t===ya)throw Error(F(174));return t}function gf(t,e){switch(ge(Jo,e),ge(Xo,t),ge(Cn,ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nh(e,t)}Ee(Cn),ge(Cn,e)}function _s(){Ee(Cn),Ee(Xo),Ee(Jo)}function Kv(t){ai(Jo.current);var e=ai(Cn.current),n=Nh(e,t.type);e!==n&&(ge(Xo,t),ge(Cn,n))}function _f(t){Xo.current===t&&(Ee(Cn),Ee(Xo))}var Ae=qr(0);function Kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yu=[];function yf(){for(var t=0;t<Yu.length;t++)Yu[t]._workInProgressVersionPrimary=null;Yu.length=0}var gl=Zn.ReactCurrentDispatcher,Xu=Zn.ReactCurrentBatchConfig,mi=0,Ce=null,We=null,Xe=null,Ql=!1,No=!1,Zo=0,_S=0;function at(){throw Error(F(321))}function vf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dn(t[n],e[n]))return!1;return!0}function wf(t,e,n,r,i,s){if(mi=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gl.current=t===null||t.memoizedState===null?ES:IS,t=n(r,i),No){s=0;do{if(No=!1,Zo=0,25<=s)throw Error(F(301));s+=1,Xe=We=null,e.updateQueue=null,gl.current=TS,t=n(r,i)}while(No)}if(gl.current=Yl,e=We!==null&&We.next!==null,mi=0,Xe=We=Ce=null,Ql=!1,e)throw Error(F(300));return t}function Ef(){var t=Zo!==0;return Zo=0,t}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Ce.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function en(){if(We===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var e=Xe===null?Ce.memoizedState:Xe.next;if(e!==null)Xe=e,We=t;else{if(t===null)throw Error(F(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Xe===null?Ce.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function ea(t,e){return typeof e=="function"?e(t):e}function Ju(t){var e=en(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=We,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,u=s;do{var f=u.lane;if((mi&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,o=r):c=c.next=m,Ce.lanes|=f,gi|=f}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=l,dn(r,e.memoizedState)||(kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ce.lanes|=s,gi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zu(t){var e=en(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dn(s,e.memoizedState)||(kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Qv(){}function Yv(t,e){var n=Ce,r=en(),i=e(),s=!dn(r.memoizedState,i);if(s&&(r.memoizedState=i,kt=!0),r=r.queue,If(Zv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,ta(9,Jv.bind(null,n,r,i,e),void 0,null),Je===null)throw Error(F(349));mi&30||Xv(n,e,i)}return i}function Xv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Jv(t,e,n,r){e.value=n,e.getSnapshot=r,ew(e)&&tw(t)}function Zv(t,e,n){return n(function(){ew(e)&&tw(t)})}function ew(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dn(t,n)}catch{return!0}}function tw(t){var e=Gn(t,1);e!==null&&hn(e,t,1,-1)}function wg(t){var e=In();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=wS.bind(null,Ce,t),[e.memoizedState,t]}function ta(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function nw(){return en().memoizedState}function _l(t,e,n,r){var i=In();Ce.flags|=t,i.memoizedState=ta(1|e,n,void 0,r===void 0?null:r)}function xc(t,e,n,r){var i=en();r=r===void 0?null:r;var s=void 0;if(We!==null){var o=We.memoizedState;if(s=o.destroy,r!==null&&vf(r,o.deps)){i.memoizedState=ta(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=ta(1|e,n,s,r)}function Eg(t,e){return _l(8390656,8,t,e)}function If(t,e){return xc(2048,8,t,e)}function rw(t,e){return xc(4,2,t,e)}function iw(t,e){return xc(4,4,t,e)}function sw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ow(t,e,n){return n=n!=null?n.concat([t]):null,xc(4,4,sw.bind(null,e,t),n)}function Tf(){}function aw(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function lw(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cw(t,e,n){return mi&21?(dn(n,e)||(n=pv(),Ce.lanes|=n,gi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kt=!0),t.memoizedState=n)}function yS(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Xu.transition;Xu.transition={};try{t(!1),e()}finally{ue=n,Xu.transition=r}}function uw(){return en().memoizedState}function vS(t,e,n){var r=Pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hw(t))dw(e,n);else if(n=Wv(t,e,n,r),n!==null){var i=It();hn(n,t,r,i),fw(n,e,r)}}function wS(t,e,n){var r=Pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hw(t))dw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,dn(l,o)){var c=e.interleaved;c===null?(i.next=i,pf(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=Wv(t,e,i,r),n!==null&&(i=It(),hn(n,t,r,i),fw(n,e,r))}}function hw(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function dw(t,e){No=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zd(t,n)}}var Yl={readContext:Zt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},ES={readContext:Zt,useCallback:function(t,e){return In().memoizedState=[t,e===void 0?null:e],t},useContext:Zt,useEffect:Eg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_l(4194308,4,sw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _l(4194308,4,t,e)},useInsertionEffect:function(t,e){return _l(4,2,t,e)},useMemo:function(t,e){var n=In();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=In();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vS.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=In();return t={current:t},e.memoizedState=t},useState:wg,useDebugValue:Tf,useDeferredValue:function(t){return In().memoizedState=t},useTransition:function(){var t=wg(!1),e=t[0];return t=yS.bind(null,t[1]),In().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,i=In();if(Ie){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Je===null)throw Error(F(349));mi&30||Xv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Eg(Zv.bind(null,r,s,t),[t]),r.flags|=2048,ta(9,Jv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=In(),e=Je.identifierPrefix;if(Ie){var n=Un,r=Fn;n=(r&~(1<<32-un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_S++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},IS={readContext:Zt,useCallback:aw,useContext:Zt,useEffect:If,useImperativeHandle:ow,useInsertionEffect:rw,useLayoutEffect:iw,useMemo:lw,useReducer:Ju,useRef:nw,useState:function(){return Ju(ea)},useDebugValue:Tf,useDeferredValue:function(t){var e=en();return cw(e,We.memoizedState,t)},useTransition:function(){var t=Ju(ea)[0],e=en().memoizedState;return[t,e]},useMutableSource:Qv,useSyncExternalStore:Yv,useId:uw,unstable_isNewReconciler:!1},TS={readContext:Zt,useCallback:aw,useContext:Zt,useEffect:If,useImperativeHandle:ow,useInsertionEffect:rw,useLayoutEffect:iw,useMemo:lw,useReducer:Zu,useRef:nw,useState:function(){return Zu(ea)},useDebugValue:Tf,useDeferredValue:function(t){var e=en();return We===null?e.memoizedState=t:cw(e,We.memoizedState,t)},useTransition:function(){var t=Zu(ea)[0],e=en().memoizedState;return[t,e]},useMutableSource:Qv,useSyncExternalStore:Yv,useId:uw,unstable_isNewReconciler:!1};function sn(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dc={isMounted:function(t){return(t=t._reactInternals)?Si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),i=Pr(t),s=zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(hn(e,t,i,r),ml(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),i=Pr(t),s=zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(hn(e,t,i,r),ml(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=Pr(t),i=zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ar(t,i,r),e!==null&&(hn(e,t,r,n),ml(e,t,r))}};function Ig(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Go(n,r)||!Go(i,s):!0}function pw(t,e,n){var r=!1,i=Or,s=e.contextType;return typeof s=="object"&&s!==null?s=Zt(s):(i=xt(e)?fi:pt.current,r=e.contextTypes,s=(r=r!=null)?ps(t,i):Or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Dc.enqueueReplaceState(e,e.state,null)}function Jh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},mf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Zt(s):(s=xt(e)?fi:pt.current,i.context=ps(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Dc.enqueueReplaceState(i,i.state,null),Gl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,e){try{var n="",r=e;do n+=XI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function eh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var SS=typeof WeakMap=="function"?WeakMap:Map;function mw(t,e,n){n=zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Jl||(Jl=!0,cd=r),Zh(t,e)},n}function gw(t,e,n){n=zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Zh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zh(t,e),typeof r!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Sg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new SS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jS.bind(null,t,e,n),e.then(t,t))}function Ag(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zn(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var AS=Zn.ReactCurrentOwner,kt=!1;function Et(t,e,n,r){e.child=t===null?Hv(e,null,n,r):gs(e,t.child,n,r)}function Pg(t,e,n,r,i){n=n.render;var s=e.ref;return is(e,i),r=wf(t,e,n,r,s,i),n=Ef(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(Ie&&n&&lf(e),e.flags|=1,Et(t,e,r,i),e.child)}function Rg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!xf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_w(t,e,s,r,i)):(t=El(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(o,r)&&t.ref===e.ref)return Kn(t,e,i)}return e.flags|=1,t=Rr(s,r),t.ref=e.ref,t.return=e,e.child=t}function _w(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Go(s,r)&&t.ref===e.ref)if(kt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(kt=!0);else return e.lanes=t.lanes,Kn(t,e,i)}return ed(t,e,n,r,i)}function yw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ji,Lt),Lt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Ji,Lt),Lt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Ji,Lt),Lt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Ji,Lt),Lt|=r;return Et(t,e,i,n),e.child}function vw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ed(t,e,n,r,i){var s=xt(n)?fi:pt.current;return s=ps(e,s),is(e,i),n=wf(t,e,n,r,s,i),r=Ef(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(Ie&&r&&lf(e),e.flags|=1,Et(t,e,n,i),e.child)}function kg(t,e,n,r,i){if(xt(n)){var s=!0;$l(e)}else s=!1;if(is(e,i),e.stateNode===null)yl(t,e),pw(e,n,r),Jh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Zt(u):(u=xt(n)?fi:pt.current,u=ps(e,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Tg(e,o,r,u),hr=!1;var g=e.memoizedState;o.state=g,Gl(e,r,o,i),c=e.memoizedState,l!==r||g!==c||Nt.current||hr?(typeof f=="function"&&(Xh(e,n,f,r),c=e.memoizedState),(l=hr||Ig(e,n,l,r,g,c,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Gv(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:sn(e.type,l),o.props=u,m=e.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Zt(c):(c=xt(n)?fi:pt.current,c=ps(e,c));var T=n.getDerivedStateFromProps;(f=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==c)&&Tg(e,o,r,c),hr=!1,g=e.memoizedState,o.state=g,Gl(e,r,o,i);var R=e.memoizedState;l!==m||g!==R||Nt.current||hr?(typeof T=="function"&&(Xh(e,n,T,r),R=e.memoizedState),(u=hr||Ig(e,n,u,r,g,R,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return td(t,e,n,r,s,i)}function td(t,e,n,r,i,s){vw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&pg(e,n,!1),Kn(t,e,s);r=e.stateNode,AS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=gs(e,t.child,null,s),e.child=gs(e,null,l,s)):Et(t,e,l,s),e.memoizedState=r.state,i&&pg(e,n,!0),e.child}function ww(t){var e=t.stateNode;e.pendingContext?fg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fg(t,e.context,!1),gf(t,e.containerInfo)}function Ng(t,e,n,r,i){return ms(),uf(i),e.flags|=256,Et(t,e,n,r),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ew(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Ae,i&1),t===null)return Qh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Oc(o,r,0,null),t=hi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rd(n),e.memoizedState=nd,t):Sf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return CS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Rr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Rr(l,s):(s=hi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?rd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nd,r}return s=t.child,t=s.sibling,r=Rr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sf(t,e){return e=Oc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function el(t,e,n,r){return r!==null&&uf(r),gs(e,t.child,null,n),t=Sf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function CS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=eh(Error(F(422))),el(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Oc({mode:"visible",children:r.children},i,0,null),s=hi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&gs(e,t.child,null,o),e.child.memoizedState=rd(o),e.memoizedState=nd,s);if(!(e.mode&1))return el(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=eh(s,r,void 0),el(t,e,o,r)}if(l=(o&t.childLanes)!==0,kt||l){if(r=Je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gn(t,i),hn(r,t,i,-1))}return Nf(),r=eh(Error(F(421))),el(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=FS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Mt=Sr(i.nextSibling),Ft=e,Ie=!0,an=null,t!==null&&(Wt[Gt++]=Fn,Wt[Gt++]=Un,Wt[Gt++]=pi,Fn=t.id,Un=t.overflow,pi=e),e=Sf(e,r.children),e.flags|=4096,e)}function xg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Yh(t.return,e,n)}function th(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Iw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Et(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xg(t,n,e);else if(t.tag===19)xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Kl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),th(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Kl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}th(e,!0,n,null,s);break;case"together":th(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function PS(t,e,n){switch(e.tag){case 3:ww(e),ms();break;case 5:Kv(e);break;case 1:xt(e.type)&&$l(e);break;case 4:gf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(Hl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?Ew(t,e,n):(ge(Ae,Ae.current&1),t=Kn(t,e,n),t!==null?t.sibling:null);ge(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Iw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,yw(t,e,n)}return Kn(t,e,n)}var Tw,id,Sw,Aw;Tw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};id=function(){};Sw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ai(Cn.current);var s=null;switch(n){case"input":i=Ch(t,i),r=Ch(t,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=kh(t,i),r=kh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ul)}xh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Uo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ve("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Aw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ho(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function RS(t,e,n){var r=e.pendingProps;switch(cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(e),null;case 1:return xt(e.type)&&Bl(),lt(e),null;case 3:return r=e.stateNode,_s(),Ee(Nt),Ee(pt),yf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,an!==null&&(dd(an),an=null))),id(t,e),lt(e),null;case 5:_f(e);var i=ai(Jo.current);if(n=e.type,t!==null&&e.stateNode!=null)Sw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return lt(e),null}if(t=ai(Cn.current),Ja(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Sn]=e,r[Yo]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<yo.length;i++)ve(yo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Um(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":$m(r,s),ve("invalid",r)}xh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Xa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Xa(r.textContent,l,t),i=["children",""+l]):Uo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":za(r),Bm(r,s,!0);break;case"textarea":za(r),zm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ul)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Sn]=e,t[Yo]=r,Tw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dh(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<yo.length;i++)ve(yo[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":Um(t,r),i=Ch(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),ve("invalid",t);break;case"textarea":$m(t,r),i=kh(t,r),ve("invalid",t);break;default:i=r}xh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?nv(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ev(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Bo(t,c):typeof c=="number"&&Bo(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uo.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ve("scroll",t):c!=null&&Gd(t,s,c,o))}switch(n){case"input":za(t),Bm(t,r,!1);break;case"textarea":za(t),zm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?es(t,!!r.multiple,s,!1):r.defaultValue!=null&&es(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ul)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return lt(e),null;case 6:if(t&&e.stateNode!=null)Aw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ai(Jo.current),ai(Cn.current),Ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[Sn]=e,(s=r.nodeValue!==n)&&(t=Ft,t!==null))switch(t.tag){case 3:Xa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=e,e.stateNode=r}return lt(e),null;case 13:if(Ee(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Mt!==null&&e.mode&1&&!(e.flags&128))zv(),ms(),e.flags|=98560,s=!1;else if(s=Ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Sn]=e}else ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;lt(e),s=!1}else an!==null&&(dd(an),an=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?Ge===0&&(Ge=3):Nf())),e.updateQueue!==null&&(e.flags|=4),lt(e),null);case 4:return _s(),id(t,e),t===null&&Ko(e.stateNode.containerInfo),lt(e),null;case 10:return ff(e.type._context),lt(e),null;case 17:return xt(e.type)&&Bl(),lt(e),null;case 19:if(Ee(Ae),s=e.memoizedState,s===null)return lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ho(s,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Kl(t),o!==null){for(e.flags|=128,ho(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&Oe()>vs&&(e.flags|=128,r=!0,ho(s,!1),e.lanes=4194304)}else{if(!r)if(t=Kl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return lt(e),null}else 2*Oe()-s.renderingStartTime>vs&&n!==1073741824&&(e.flags|=128,r=!0,ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Oe(),e.sibling=null,n=Ae.current,ge(Ae,r?n&1|2:n&1),e):(lt(e),null);case 22:case 23:return kf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Lt&1073741824&&(lt(e),e.subtreeFlags&6&&(e.flags|=8192)):lt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function kS(t,e){switch(cf(e),e.tag){case 1:return xt(e.type)&&Bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),Ee(Nt),Ee(pt),yf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _f(e),null;case 13:if(Ee(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Ae),null;case 4:return _s(),null;case 10:return ff(e.type._context),null;case 22:case 23:return kf(),null;case 24:return null;default:return null}}var tl=!1,dt=!1,NS=typeof WeakSet=="function"?WeakSet:Set,H=null;function Xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function sd(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var Dg=!1;function xS(t,e){if($h=Ml,t=Nv(),af(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,f=0,m=t,g=null;t:for(;;){for(var T;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(T=m.firstChild)!==null;)g=m,m=T;for(;;){if(m===t)break t;if(g===n&&++u===i&&(l=o),g===s&&++f===r&&(c=o),(T=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=T}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(zh={focusedElem:t,selectionRange:n},Ml=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var N=R.memoizedProps,b=R.memoizedState,w=e.stateNode,y=w.getSnapshotBeforeUpdate(e.elementType===e.type?N:sn(e.type,N),b);w.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(k){Ne(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return R=Dg,Dg=!1,R}function xo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&sd(e,n,s)}i=i.next}while(i!==r)}}function bc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cw(t){var e=t.alternate;e!==null&&(t.alternate=null,Cw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sn],delete e[Yo],delete e[Wh],delete e[fS],delete e[pS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Pw(t){return t.tag===5||t.tag===3||t.tag===4}function bg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Pw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ul));else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}function ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}var et=null,on=!1;function lr(t,e,n){for(n=n.child;n!==null;)Rw(t,e,n),n=n.sibling}function Rw(t,e,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(Ac,n)}catch{}switch(n.tag){case 5:dt||Xi(n,e);case 6:var r=et,i=on;et=null,lr(t,e,n),et=r,on=i,et!==null&&(on?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(on?(t=et,n=n.stateNode,t.nodeType===8?Ku(t.parentNode,n):t.nodeType===1&&Ku(t,n),Ho(t)):Ku(et,n.stateNode));break;case 4:r=et,i=on,et=n.stateNode.containerInfo,on=!0,lr(t,e,n),et=r,on=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sd(n,e,o),i=i.next}while(i!==r)}lr(t,e,n);break;case 1:if(!dt&&(Xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,e,l)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,lr(t,e,n),dt=r):lr(t,e,n);break;default:lr(t,e,n)}}function Vg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new NS),e.forEach(function(r){var i=US.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:et=l.stateNode,on=!1;break e;case 3:et=l.stateNode.containerInfo,on=!0;break e;case 4:et=l.stateNode.containerInfo,on=!0;break e}l=l.return}if(et===null)throw Error(F(160));Rw(s,o,i),et=null,on=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kw(e,t),e=e.sibling}function kw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rn(e,t),wn(t),r&4){try{xo(3,t,t.return),bc(3,t)}catch(N){Ne(t,t.return,N)}try{xo(5,t,t.return)}catch(N){Ne(t,t.return,N)}}break;case 1:rn(e,t),wn(t),r&512&&n!==null&&Xi(n,n.return);break;case 5:if(rn(e,t),wn(t),r&512&&n!==null&&Xi(n,n.return),t.flags&32){var i=t.stateNode;try{Bo(i,"")}catch(N){Ne(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Xy(i,s),Dh(l,o);var u=Dh(l,s);for(o=0;o<c.length;o+=2){var f=c[o],m=c[o+1];f==="style"?nv(i,m):f==="dangerouslySetInnerHTML"?ev(i,m):f==="children"?Bo(i,m):Gd(i,f,m,u)}switch(l){case"input":Ph(i,s);break;case"textarea":Jy(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?es(i,!!s.multiple,T,!1):g!==!!s.multiple&&(s.defaultValue!=null?es(i,!!s.multiple,s.defaultValue,!0):es(i,!!s.multiple,s.multiple?[]:"",!1))}i[Yo]=s}catch(N){Ne(t,t.return,N)}}break;case 6:if(rn(e,t),wn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Ne(t,t.return,N)}}break;case 3:if(rn(e,t),wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ho(e.containerInfo)}catch(N){Ne(t,t.return,N)}break;case 4:rn(e,t),wn(t);break;case 13:rn(e,t),wn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Pf=Oe())),r&4&&Vg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(u=dt)||f,rn(e,t),dt=u):rn(e,t),wn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(m=H=f;H!==null;){switch(g=H,T=g.child,g.tag){case 0:case 11:case 14:case 15:xo(4,g,g.return);break;case 1:Xi(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(N){Ne(r,n,N)}}break;case 5:Xi(g,g.return);break;case 22:if(g.memoizedState!==null){Lg(m);continue}}T!==null?(T.return=g,H=T):Lg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=tv("display",o))}catch(N){Ne(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(N){Ne(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:rn(e,t),wn(t),r&4&&Vg(t);break;case 21:break;default:rn(e,t),wn(t)}}function wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Pw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bo(i,""),r.flags&=-33);var s=bg(t);ld(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=bg(t);ad(t,l,o);break;default:throw Error(F(161))}}catch(c){Ne(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DS(t,e,n){H=t,Nw(t)}function Nw(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||tl;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||dt;l=tl;var u=dt;if(tl=o,(dt=c)&&!u)for(H=i;H!==null;)o=H,c=o.child,o.tag===22&&o.memoizedState!==null?Mg(i):c!==null?(c.return=o,H=c):Mg(i);for(;s!==null;)H=s,Nw(s),s=s.sibling;H=i,tl=l,dt=u}Og(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Og(t)}}function Og(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||bc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:sn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Ho(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}dt||e.flags&512&&od(e)}catch(g){Ne(e,e.return,g)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Lg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Mg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bc(4,e)}catch(c){Ne(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){Ne(e,i,c)}}var s=e.return;try{od(e)}catch(c){Ne(e,s,c)}break;case 5:var o=e.return;try{od(e)}catch(c){Ne(e,o,c)}}}catch(c){Ne(e,e.return,c)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var bS=Math.ceil,Xl=Zn.ReactCurrentDispatcher,Af=Zn.ReactCurrentOwner,Yt=Zn.ReactCurrentBatchConfig,le=0,Je=null,Fe=null,rt=0,Lt=0,Ji=qr(0),Ge=0,na=null,gi=0,Vc=0,Cf=0,Do=null,Pt=null,Pf=0,vs=1/0,Mn=null,Jl=!1,cd=null,Cr=null,nl=!1,vr=null,Zl=0,bo=0,ud=null,vl=-1,wl=0;function It(){return le&6?Oe():vl!==-1?vl:vl=Oe()}function Pr(t){return t.mode&1?le&2&&rt!==0?rt&-rt:gS.transition!==null?(wl===0&&(wl=pv()),wl):(t=ue,t!==0||(t=window.event,t=t===void 0?16:Ev(t.type)),t):1}function hn(t,e,n,r){if(50<bo)throw bo=0,ud=null,Error(F(185));ma(t,n,r),(!(le&2)||t!==Je)&&(t===Je&&(!(le&2)&&(Vc|=n),Ge===4&&fr(t,rt)),Dt(t,r),n===1&&le===0&&!(e.mode&1)&&(vs=Oe()+500,Nc&&Hr()))}function Dt(t,e){var n=t.callbackNode;gT(t,e);var r=Ll(t,t===Je?rt:0);if(r===0)n!==null&&Wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wm(n),e===1)t.tag===0?mS(jg.bind(null,t)):Uv(jg.bind(null,t)),hS(function(){!(le&6)&&Hr()}),n=null;else{switch(mv(r)){case 1:n=Jd;break;case 4:n=dv;break;case 16:n=Ol;break;case 536870912:n=fv;break;default:n=Ol}n=jw(n,xw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xw(t,e){if(vl=-1,wl=0,le&6)throw Error(F(327));var n=t.callbackNode;if(ss()&&t.callbackNode!==n)return null;var r=Ll(t,t===Je?rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ec(t,r);else{e=r;var i=le;le|=2;var s=bw();(Je!==t||rt!==e)&&(Mn=null,vs=Oe()+500,ui(t,e));do try{LS();break}catch(l){Dw(t,l)}while(!0);df(),Xl.current=s,le=i,Fe!==null?e=0:(Je=null,rt=0,e=Ge)}if(e!==0){if(e===2&&(i=Mh(t),i!==0&&(r=i,e=hd(t,i))),e===1)throw n=na,ui(t,0),fr(t,r),Dt(t,Oe()),n;if(e===6)fr(t,r);else{if(i=t.current.alternate,!(r&30)&&!VS(i)&&(e=ec(t,r),e===2&&(s=Mh(t),s!==0&&(r=s,e=hd(t,s))),e===1))throw n=na,ui(t,0),fr(t,r),Dt(t,Oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:ri(t,Pt,Mn);break;case 3:if(fr(t,r),(r&130023424)===r&&(e=Pf+500-Oe(),10<e)){if(Ll(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Hh(ri.bind(null,t,Pt,Mn),e);break}ri(t,Pt,Mn);break;case 4:if(fr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-un(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bS(r/1960))-r,10<r){t.timeoutHandle=Hh(ri.bind(null,t,Pt,Mn),r);break}ri(t,Pt,Mn);break;case 5:ri(t,Pt,Mn);break;default:throw Error(F(329))}}}return Dt(t,Oe()),t.callbackNode===n?xw.bind(null,t):null}function hd(t,e){var n=Do;return t.current.memoizedState.isDehydrated&&(ui(t,e).flags|=256),t=ec(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&dd(e)),t}function dd(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function VS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~Cf,e&=~Vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-un(e),r=1<<n;t[n]=-1,e&=~r}}function jg(t){if(le&6)throw Error(F(327));ss();var e=Ll(t,0);if(!(e&1))return Dt(t,Oe()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var r=Mh(t);r!==0&&(e=r,n=hd(t,r))}if(n===1)throw n=na,ui(t,0),fr(t,e),Dt(t,Oe()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ri(t,Pt,Mn),Dt(t,Oe()),null}function Rf(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(vs=Oe()+500,Nc&&Hr())}}function _i(t){vr!==null&&vr.tag===0&&!(le&6)&&ss();var e=le;le|=1;var n=Yt.transition,r=ue;try{if(Yt.transition=null,ue=1,t)return t()}finally{ue=r,Yt.transition=n,le=e,!(le&6)&&Hr()}}function kf(){Lt=Ji.current,Ee(Ji)}function ui(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uS(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(cf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bl();break;case 3:_s(),Ee(Nt),Ee(pt),yf();break;case 5:_f(r);break;case 4:_s();break;case 13:Ee(Ae);break;case 19:Ee(Ae);break;case 10:ff(r.type._context);break;case 22:case 23:kf()}n=n.return}if(Je=t,Fe=t=Rr(t.current,null),rt=Lt=e,Ge=0,na=null,Cf=Vc=gi=0,Pt=Do=null,oi!==null){for(e=0;e<oi.length;e++)if(n=oi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}oi=null}return t}function Dw(t,e){do{var n=Fe;try{if(df(),gl.current=Yl,Ql){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ql=!1}if(mi=0,Xe=We=Ce=null,No=!1,Zo=0,Af.current=null,n===null||n.return===null){Ge=1,na=e,Fe=null;break}e:{var s=t,o=n.return,l=n,c=e;if(e=rt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var T=Ag(o);if(T!==null){T.flags&=-257,Cg(T,o,l,s,e),T.mode&1&&Sg(s,u,e),e=T,c=u;var R=e.updateQueue;if(R===null){var N=new Set;N.add(c),e.updateQueue=N}else R.add(c);break e}else{if(!(e&1)){Sg(s,u,e),Nf();break e}c=Error(F(426))}}else if(Ie&&l.mode&1){var b=Ag(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Cg(b,o,l,s,e),uf(ys(c,l));break e}}s=c=ys(c,l),Ge!==4&&(Ge=2),Do===null?Do=[s]:Do.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=mw(s,c,e);yg(s,w);break e;case 1:l=c;var y=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Cr===null||!Cr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var k=gw(s,l,e);yg(s,k);break e}}s=s.return}while(s!==null)}Ow(n)}catch(O){e=O,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function bw(){var t=Xl.current;return Xl.current=Yl,t===null?Yl:t}function Nf(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Je===null||!(gi&268435455)&&!(Vc&268435455)||fr(Je,rt)}function ec(t,e){var n=le;le|=2;var r=bw();(Je!==t||rt!==e)&&(Mn=null,ui(t,e));do try{OS();break}catch(i){Dw(t,i)}while(!0);if(df(),le=n,Xl.current=r,Fe!==null)throw Error(F(261));return Je=null,rt=0,Ge}function OS(){for(;Fe!==null;)Vw(Fe)}function LS(){for(;Fe!==null&&!aT();)Vw(Fe)}function Vw(t){var e=Mw(t.alternate,t,Lt);t.memoizedProps=t.pendingProps,e===null?Ow(t):Fe=e,Af.current=null}function Ow(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kS(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,Fe=null;return}}else if(n=RS(n,e,Lt),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);Ge===0&&(Ge=5)}function ri(t,e,n){var r=ue,i=Yt.transition;try{Yt.transition=null,ue=1,MS(t,e,n,r)}finally{Yt.transition=i,ue=r}return null}function MS(t,e,n,r){do ss();while(vr!==null);if(le&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_T(t,s),t===Je&&(Fe=Je=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nl||(nl=!0,jw(Ol,function(){return ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yt.transition,Yt.transition=null;var o=ue;ue=1;var l=le;le|=4,Af.current=null,xS(t,n),kw(n,t),rS(zh),Ml=!!$h,zh=$h=null,t.current=n,DS(n),lT(),le=l,ue=o,Yt.transition=s}else t.current=n;if(nl&&(nl=!1,vr=t,Zl=i),s=t.pendingLanes,s===0&&(Cr=null),hT(n.stateNode),Dt(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jl)throw Jl=!1,t=cd,cd=null,t;return Zl&1&&t.tag!==0&&ss(),s=t.pendingLanes,s&1?t===ud?bo++:(bo=0,ud=t):bo=0,Hr(),null}function ss(){if(vr!==null){var t=mv(Zl),e=Yt.transition,n=ue;try{if(Yt.transition=null,ue=16>t?16:t,vr===null)var r=!1;else{if(t=vr,vr=null,Zl=0,le&6)throw Error(F(331));var i=le;for(le|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(H=u;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:xo(8,f,s)}var m=f.child;if(m!==null)m.return=f,H=m;else for(;H!==null;){f=H;var g=f.sibling,T=f.return;if(Cw(f),f===u){H=null;break}if(g!==null){g.return=T,H=g;break}H=T}}}var R=s.alternate;if(R!==null){var N=R.child;if(N!==null){R.child=null;do{var b=N.sibling;N.sibling=null,N=b}while(N!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xo(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,H=w;break e}H=s.return}}var y=t.current;for(H=y;H!==null;){o=H;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,H=I;else e:for(o=y;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:bc(9,l)}}catch(O){Ne(l,l.return,O)}if(l===o){H=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,H=k;break e}H=l.return}}if(le=i,Hr(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(Ac,t)}catch{}r=!0}return r}finally{ue=n,Yt.transition=e}}return!1}function Fg(t,e,n){e=ys(n,e),e=mw(t,e,1),t=Ar(t,e,1),e=It(),t!==null&&(ma(t,1,e),Dt(t,e))}function Ne(t,e,n){if(t.tag===3)Fg(t,t,n);else for(;e!==null;){if(e.tag===3){Fg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cr===null||!Cr.has(r))){t=ys(n,t),t=gw(e,t,1),e=Ar(e,t,1),t=It(),e!==null&&(ma(e,1,t),Dt(e,t));break}}e=e.return}}function jS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(rt&n)===n&&(Ge===4||Ge===3&&(rt&130023424)===rt&&500>Oe()-Pf?ui(t,0):Cf|=n),Dt(t,e)}function Lw(t,e){e===0&&(t.mode&1?(e=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):e=1);var n=It();t=Gn(t,e),t!==null&&(ma(t,e,n),Dt(t,n))}function FS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Lw(t,n)}function US(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Lw(t,n)}var Mw;Mw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return kt=!1,PS(t,e,n);kt=!!(t.flags&131072)}else kt=!1,Ie&&e.flags&1048576&&Bv(e,ql,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;yl(t,e),t=e.pendingProps;var i=ps(e,pt.current);is(e,n),i=wf(null,e,r,t,i,n);var s=Ef();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(s=!0,$l(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mf(e),i.updater=Dc,e.stateNode=i,i._reactInternals=e,Jh(e,r,t,n),e=td(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&lf(e),Et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$S(r),t=sn(r,t),i){case 0:e=ed(null,e,r,t,n);break e;case 1:e=kg(null,e,r,t,n);break e;case 11:e=Pg(null,e,r,t,n);break e;case 14:e=Rg(null,e,r,sn(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),ed(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),kg(t,e,r,i,n);case 3:e:{if(ww(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Gv(t,e),Gl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ys(Error(F(423)),e),e=Ng(t,e,r,n,i);break e}else if(r!==i){i=ys(Error(F(424)),e),e=Ng(t,e,r,n,i);break e}else for(Mt=Sr(e.stateNode.containerInfo.firstChild),Ft=e,Ie=!0,an=null,n=Hv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ms(),r===i){e=Kn(t,e,n);break e}Et(t,e,r,n)}e=e.child}return e;case 5:return Kv(e),t===null&&Qh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,qh(r,i)?o=null:s!==null&&qh(r,s)&&(e.flags|=32),vw(t,e),Et(t,e,o,n),e.child;case 6:return t===null&&Qh(e),null;case 13:return Ew(t,e,n);case 4:return gf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=gs(e,null,r,n):Et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),Pg(t,e,r,i,n);case 7:return Et(t,e,e.pendingProps,n),e.child;case 8:return Et(t,e,e.pendingProps.children,n),e.child;case 12:return Et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(Hl,r._currentValue),r._currentValue=o,s!==null)if(dn(s.value,o)){if(s.children===i.children&&!Nt.current){e=Kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=zn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Yh(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Yh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,is(e,n),i=Zt(i),r=r(i),e.flags|=1,Et(t,e,r,n),e.child;case 14:return r=e.type,i=sn(r,e.pendingProps),i=sn(r.type,i),Rg(t,e,r,i,n);case 15:return _w(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),yl(t,e),e.tag=1,xt(r)?(t=!0,$l(e)):t=!1,is(e,n),pw(e,r,i),Jh(e,r,i,n),td(null,e,r,!0,t,n);case 19:return Iw(t,e,n);case 22:return yw(t,e,n)}throw Error(F(156,e.tag))};function jw(t,e){return hv(t,e)}function BS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,r){return new BS(t,e,n,r)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $S(t){if(typeof t=="function")return xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qd)return 11;if(t===Yd)return 14}return 2}function Rr(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function El(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")xf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $i:return hi(n.children,i,s,e);case Kd:o=8,i|=8;break;case Ih:return t=Qt(12,n,e,i|2),t.elementType=Ih,t.lanes=s,t;case Th:return t=Qt(13,n,e,i),t.elementType=Th,t.lanes=s,t;case Sh:return t=Qt(19,n,e,i),t.elementType=Sh,t.lanes=s,t;case Ky:return Oc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wy:o=10;break e;case Gy:o=9;break e;case Qd:o=11;break e;case Yd:o=14;break e;case ur:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function hi(t,e,n,r){return t=Qt(7,t,r,e),t.lanes=n,t}function Oc(t,e,n,r){return t=Qt(22,t,r,e),t.elementType=Ky,t.lanes=n,t.stateNode={isHidden:!1},t}function nh(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function rh(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mu(0),this.expirationTimes=Mu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Df(t,e,n,r,i,s,o,l,c){return t=new zS(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mf(s),t}function qS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Fw(t){if(!t)return Or;t=t._reactInternals;e:{if(Si(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(xt(n))return Fv(t,n,e)}return e}function Uw(t,e,n,r,i,s,o,l,c){return t=Df(n,r,!0,t,i,s,o,l,c),t.context=Fw(null),n=t.current,r=It(),i=Pr(n),s=zn(r,i),s.callback=e??null,Ar(n,s,i),t.current.lanes=i,ma(t,i,r),Dt(t,r),t}function Lc(t,e,n,r){var i=e.current,s=It(),o=Pr(i);return n=Fw(n),e.context===null?e.context=n:e.pendingContext=n,e=zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ar(i,e,o),t!==null&&(hn(t,i,o,s),ml(t,i,o)),o}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ug(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bf(t,e){Ug(t,e),(t=t.alternate)&&Ug(t,e)}function HS(){return null}var Bw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vf(t){this._internalRoot=t}Mc.prototype.render=Vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Lc(t,e,null,null)};Mc.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_i(function(){Lc(null,t,null,null)}),e[Wn]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=yv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&wv(t)}};function Of(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bg(){}function WS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=tc(o);s.call(u)}}var o=Uw(e,r,t,0,null,!1,!1,"",Bg);return t._reactRootContainer=o,t[Wn]=o.current,Ko(t.nodeType===8?t.parentNode:t),_i(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=tc(c);l.call(u)}}var c=Df(t,0,!1,null,null,!1,!1,"",Bg);return t._reactRootContainer=c,t[Wn]=c.current,Ko(t.nodeType===8?t.parentNode:t),_i(function(){Lc(e,c,n,r)}),c}function Fc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=tc(o);l.call(c)}}Lc(e,o,t,i)}else o=WS(n,e,t,i,r);return tc(o)}gv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_o(e.pendingLanes);n!==0&&(Zd(e,n|1),Dt(e,Oe()),!(le&6)&&(vs=Oe()+500,Hr()))}break;case 13:_i(function(){var r=Gn(t,1);if(r!==null){var i=It();hn(r,t,1,i)}}),bf(t,1)}};ef=function(t){if(t.tag===13){var e=Gn(t,134217728);if(e!==null){var n=It();hn(e,t,134217728,n)}bf(t,134217728)}};_v=function(t){if(t.tag===13){var e=Pr(t),n=Gn(t,e);if(n!==null){var r=It();hn(n,t,e,r)}bf(t,e)}};yv=function(){return ue};vv=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};Vh=function(t,e,n){switch(e){case"input":if(Ph(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=kc(r);if(!i)throw Error(F(90));Yy(r),Ph(r,i)}}}break;case"textarea":Jy(t,n);break;case"select":e=n.value,e!=null&&es(t,!!n.multiple,e,!1)}};sv=Rf;ov=_i;var GS={usingClientEntryPoint:!1,Events:[_a,Wi,kc,rv,iv,Rf]},fo={findFiberByHostInstance:si,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KS={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cv(t),t===null?null:t.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||HS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{Ac=rl.inject(KS),An=rl}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GS;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Of(e))throw Error(F(200));return qS(t,e,null,n)};$t.createRoot=function(t,e){if(!Of(t))throw Error(F(299));var n=!1,r="",i=Bw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Df(t,1,!1,null,null,n,!1,r,i),t[Wn]=e.current,Ko(t.nodeType===8?t.parentNode:t),new Vf(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=cv(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return _i(t)};$t.hydrate=function(t,e,n){if(!jc(e))throw Error(F(200));return Fc(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!Of(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Bw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Uw(e,null,t,1,n??null,i,!1,s,o),t[Wn]=e.current,Ko(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Mc(e)};$t.render=function(t,e,n){if(!jc(e))throw Error(F(200));return Fc(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!jc(t))throw Error(F(40));return t._reactRootContainer?(_i(function(){Fc(null,null,t,!1,function(){t._reactRootContainer=null,t[Wn]=null})}),!0):!1};$t.unstable_batchedUpdates=Rf;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!jc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Fc(t,e,n,!1,r)};$t.version="18.3.1-next-f1338f8080-20240426";function $w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($w)}catch(t){console.error(t)}}$w(),$y.exports=$t;var zw=$y.exports,$g=zw;wh.createRoot=$g.createRoot,wh.hydrateRoot=$g.hydrateRoot;const QS=()=>{};var zg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},YS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Hw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|u>>6,T=u&63;c||(T=64,o||(g=64)),r.push(n[f],n[m],n[g],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||m==null)throw new XS;const g=s<<2|l>>4;if(r.push(g),u!==64){const T=l<<4&240|u>>2;if(r.push(T),m!==64){const R=u<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const JS=function(t){const e=qw(t);return Hw.encodeByteArray(e,!0)},nc=function(t){return JS(t).replace(/\./g,"")},Ww=function(t){try{return Hw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=()=>ZS().__FIREBASE_DEFAULTS__,tA=()=>{if(typeof process>"u"||typeof zg>"u")return;const t=zg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ww(t[1]);return e&&JSON.parse(e)},Uc=()=>{try{return QS()||eA()||tA()||nA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gw=t=>{var e,n;return(n=(e=Uc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},rA=t=>{const e=Gw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kw=()=>{var t;return(t=Uc())==null?void 0:t.config},Qw=t=>{var e;return(e=Uc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Yw(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[nc(JSON.stringify(n)),nc(JSON.stringify(o)),""].join(".")}const Vo={};function oA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Vo))Vo[e]?t.emulator.push(e):t.prod.push(e);return t}function aA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let qg=!1;function Xw(t,e){if(typeof window>"u"||typeof document>"u"||!Ns(window.location.host)||Vo[t]===e||Vo[t]||qg)return;Vo[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=oA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,T){g.setAttribute("width","24"),g.setAttribute("id",T),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{qg=!0,o()},g}function f(g,T){g.setAttribute("id",T),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=aA(r),T=n("text"),R=document.getElementById(T)||document.createElement("span"),N=n("learnmore"),b=document.getElementById(N)||document.createElement("a"),w=n("preprendIcon"),y=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const I=g.element;l(I),f(b,N);const k=u();c(y,w),I.append(y,R,b,k),document.body.appendChild(I)}s?(R.innerText="Preview backend disconnected.",y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function cA(){var e;const t=(e=Uc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dA(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fA(){return!cA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zw(){try{return typeof indexedDB=="object"}catch{return!1}}function e1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function pA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mA,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new _n(i,l,r)}}function gA(t,e){return t.replace(_A,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _A=/\{\$([^}]+)}/g;function yA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Hg(s)&&Hg(o)){if(!Lr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function wo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vA(t,e){const n=new wA(t,e);return n.subscribe.bind(n)}class wA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");EA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ih),i.error===void 0&&(i.error=ih),i.complete===void 0&&(i.complete=ih);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ih(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=1e3,TA=2,SA=4*60*60*1e3,AA=.5;function Wg(t,e=IA,n=TA){const r=e*Math.pow(n,t),i=Math.round(AA*r*(Math.random()-.5)*2);return Math.min(SA,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t){return t&&t._delegate?t._delegate:t}class fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new iA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RA(e))try{this.getOrInitializeService({instanceIdentifier:ii})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ii){return this.instances.has(e)}getOptions(e=ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ii){return this.component?this.component.multipleInstances?e:ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PA(t){return t===ii?void 0:t}function RA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const NA={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},xA=re.INFO,DA={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},bA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=DA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bc{constructor(e){this.name=e,this._logLevel=xA,this._logHandler=bA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const VA=(t,e)=>e.some(n=>t instanceof n);let Gg,Kg;function OA(){return Gg||(Gg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LA(){return Kg||(Kg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t1=new WeakMap,fd=new WeakMap,n1=new WeakMap,sh=new WeakMap,Lf=new WeakMap;function MA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&t1.set(n,t)}).catch(()=>{}),Lf.set(e,t),e}function jA(t){if(fd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});fd.set(t,e)}let pd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||n1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FA(t){pd=t(pd)}function UA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oh(this),e,...n);return n1.set(r,e.sort?e.sort():[e]),kr(r)}:LA().includes(t)?function(...e){return t.apply(oh(this),e),kr(t1.get(this))}:function(...e){return kr(t.apply(oh(this),e))}}function BA(t){return typeof t=="function"?UA(t):(t instanceof IDBTransaction&&jA(t),VA(t,OA())?new Proxy(t,pd):t)}function kr(t){if(t instanceof IDBRequest)return MA(t);if(sh.has(t))return sh.get(t);const e=BA(t);return e!==t&&(sh.set(t,e),Lf.set(e,t)),e}const oh=t=>Lf.get(t);function r1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=kr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(kr(o.result),c.oldVersion,c.newVersion,kr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const $A=["get","getKey","getAll","getAllKeys","count"],zA=["put","add","delete","clear"],ah=new Map;function Qg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ah.get(e))return ah.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$A.includes(n)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return ah.set(e,s),s}FA(t=>({...t,get:(e,n,r)=>Qg(e,n)||t.get(e,n,r),has:(e,n)=>!!Qg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const md="@firebase/app",Yg="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new Bc("@firebase/app"),WA="@firebase/app-compat",GA="@firebase/analytics-compat",KA="@firebase/analytics",QA="@firebase/app-check-compat",YA="@firebase/app-check",XA="@firebase/auth",JA="@firebase/auth-compat",ZA="@firebase/database",eC="@firebase/data-connect",tC="@firebase/database-compat",nC="@firebase/functions",rC="@firebase/functions-compat",iC="@firebase/installations",sC="@firebase/installations-compat",oC="@firebase/messaging",aC="@firebase/messaging-compat",lC="@firebase/performance",cC="@firebase/performance-compat",uC="@firebase/remote-config",hC="@firebase/remote-config-compat",dC="@firebase/storage",fC="@firebase/storage-compat",pC="@firebase/firestore",mC="@firebase/ai",gC="@firebase/firestore-compat",_C="firebase",yC="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="[DEFAULT]",vC={[md]:"fire-core",[WA]:"fire-core-compat",[KA]:"fire-analytics",[GA]:"fire-analytics-compat",[YA]:"fire-app-check",[QA]:"fire-app-check-compat",[XA]:"fire-auth",[JA]:"fire-auth-compat",[ZA]:"fire-rtdb",[eC]:"fire-data-connect",[tC]:"fire-rtdb-compat",[nC]:"fire-fn",[rC]:"fire-fn-compat",[iC]:"fire-iid",[sC]:"fire-iid-compat",[oC]:"fire-fcm",[aC]:"fire-fcm-compat",[lC]:"fire-perf",[cC]:"fire-perf-compat",[uC]:"fire-rc",[hC]:"fire-rc-compat",[dC]:"fire-gcs",[fC]:"fire-gcs-compat",[pC]:"fire-fst",[gC]:"fire-fst-compat",[mC]:"fire-vertex","fire-js":"fire-js",[_C]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Map,wC=new Map,_d=new Map;function Xg(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vn(t){const e=t.name;if(_d.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;_d.set(e,t);for(const n of rc.values())Xg(n,t);for(const n of wC.values())Xg(n,t);return!0}function Ci(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ln(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new Ai("app","Firebase",EC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=yC;function i1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:gd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Nr.create("bad-app-name",{appName:String(i)});if(n||(n=Kw()),!n)throw Nr.create("no-options");const s=rc.get(i);if(s){if(Lr(n,s.options)&&Lr(r,s.config))return s;throw Nr.create("duplicate-app",{appName:i})}const o=new kA(i);for(const c of _d.values())o.addComponent(c);const l=new IC(n,r,o);return rc.set(i,l),l}function Mf(t=gd){const e=rc.get(t);if(!e&&t===gd&&Kw())return i1();if(!e)throw Nr.create("no-app",{appName:t});return e}function Xt(t,e,n){let r=vC[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(o.join(" "));return}Vn(new fn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC="firebase-heartbeat-database",SC=1,ra="firebase-heartbeat-store";let lh=null;function s1(){return lh||(lh=r1(TC,SC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ra)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),lh}async function AC(t){try{const n=(await s1()).transaction(ra),r=await n.objectStore(ra).get(o1(t));return await n.done,r}catch(e){if(e instanceof _n)Qn.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function Jg(t,e){try{const r=(await s1()).transaction(ra,"readwrite");await r.objectStore(ra).put(e,o1(t)),await r.done}catch(n){if(n instanceof _n)Qn.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function o1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=1024,PC=30;class RC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>PC){const o=xC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zg(),{heartbeatsToSend:r,unsentEntries:i}=kC(this._heartbeatsCache.heartbeats),s=nc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Qn.warn(n),""}}}function Zg(){return new Date().toISOString().substring(0,10)}function kC(t,e=CC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),e_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),e_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zw()?e1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await AC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Jg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Jg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function e_(t){return nc(JSON.stringify({version:2,heartbeats:t})).length}function xC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(t){Vn(new fn("platform-logger",e=>new qA(e),"PRIVATE")),Vn(new fn("heartbeat",e=>new RC(e),"PRIVATE")),Xt(md,Yg,t),Xt(md,Yg,"esm2020"),Xt("fire-js","")}DC("");function a1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bC=a1,l1=new Ai("auth","Firebase",a1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new Bc("@firebase/auth");function VC(t,...e){ic.logLevel<=re.WARN&&ic.warn(`Auth (${xs}): ${t}`,...e)}function Il(t,...e){ic.logLevel<=re.ERROR&&ic.error(`Auth (${xs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,...e){throw jf(t,...e)}function Pn(t,...e){return jf(t,...e)}function c1(t,e,n){const r={...bC(),[e]:n};return new Ai("auth","Firebase",r).create(e,{appName:t.name})}function xr(t){return c1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l1.create(t,...e)}function K(t,e,...n){if(!t)throw jf(e,...n)}function Bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Il(e),new Error(e)}function Yn(t,e){t||Bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function OC(){return t_()==="http:"||t_()==="https:"}function t_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OC()||Jw()||"connection"in navigator)?navigator.onLine:!0}function MC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=lA()||hA()}get(){return LC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],UC=new wa(3e4,6e4);function Pi(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Wr(t,e,n,r,i={}){return h1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=va({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...s};return uA()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ns(t.emulatorConfig.host)&&(u.credentials="include"),u1.fetch()(await d1(t,t.config.apiHost,n,l),u)})}async function h1(t,e,n){t._canInitEmulator=!1;const r={...jC,...e};try{const i=new $C(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw il(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw il(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw il(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw il(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw c1(t,f,u);pn(t,f)}}catch(i){if(i instanceof _n)throw i;pn(t,"network-request-failed",{message:String(i)})}}async function $c(t,e,n,r,i={}){const s=await Wr(t,e,n,r,i);return"mfaPendingCredential"in s&&pn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function d1(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Ff(t.config,i):`${t.config.apiScheme}://${i}`;return FC.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function BC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $C{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),UC.get())})}}function il(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pn(t,e,r);return i.customData._tokenResponse=n,i}function n_(t){return t!==void 0&&t.enterprise!==void 0}class zC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return BC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function qC(t,e){return Wr(t,"GET","/v2/recaptchaConfig",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(t,e){return Wr(t,"POST","/v1/accounts:delete",e)}async function sc(t,e){return Wr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WC(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=Uf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Oo(ch(i.auth_time)),issuedAtTime:Oo(ch(i.iat)),expirationTime:Oo(ch(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ch(t){return Number(t)*1e3}function Uf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Il("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ww(n);return i?JSON.parse(i):(Il("Failed to decode base64 JWT payload"),null)}catch(i){return Il("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function r_(t){const e=Uf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ia(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&GC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oo(this.lastLoginAt),this.creationTime=Oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oc(t){var m;const e=t.auth,n=await t.getIdToken(),r=await ia(t,sc(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?f1(i.providerUserInfo):[],o=YC(t.providerData,s),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new vd(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function QC(t){const e=Me(t);await oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function f1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(t,e){const n=await h1(t,{},async()=>{const r=va({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await d1(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ns(t.emulatorConfig.host)&&(c.credentials="include"),u1.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function JC(t,e){return Wr(t,"POST","/v2/accounts:revokeToken",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):r_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=r_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await XC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new os;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new KC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ia(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WC(this,e)}reload(){return QC(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new cn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(xr(this.auth));const e=await this.getIdToken();return await ia(this,HC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:T,providerData:R,stsTokenManager:N}=n;K(m&&N,e,"internal-error");const b=os.fromJSON(this.name,N);K(typeof m=="string",e,"internal-error"),cr(r,e.name),cr(i,e.name),K(typeof g=="boolean",e,"internal-error"),K(typeof T=="boolean",e,"internal-error"),cr(s,e.name),cr(o,e.name),cr(l,e.name),cr(c,e.name),cr(u,e.name),cr(f,e.name);const w=new cn({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:T,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:u,lastLoginAt:f});return R&&Array.isArray(R)&&(w.providerData=R.map(y=>({...y}))),c&&(w._redirectEventId=c),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new os;i.updateFromServerResponse(n);const s=new cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await oc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?f1(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new os;l.updateFromIdToken(r);const c=new cn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=new Map;function $n(t){Yn(t instanceof Function,"Expected a class definition");let e=i_.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,i_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}p1.type="NONE";const s_=p1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t,e,n){return`firebase:${t}:${e}:${n}`}class as{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Tl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Tl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await sc(this.auth,{idToken:e}).catch(()=>{});return n?cn._fromGetAccountInfoResponse(this.auth,n,e):null}return cn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new as($n(s_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||$n(s_);const o=Tl(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let m;if(typeof f=="string"){const g=await sc(e,{idToken:f}).catch(()=>{});if(!g)break;m=await cn._fromGetAccountInfoResponse(e,g,f)}else m=cn._fromJSON(e,f);u!==s&&(l=m),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new as(s,e,r):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new as(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(y1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(m1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(w1(e))return"Blackberry";if(E1(e))return"Webos";if(g1(e))return"Safari";if((e.includes("chrome/")||_1(e))&&!e.includes("edge/"))return"Chrome";if(v1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function m1(t=mt()){return/firefox\//i.test(t)}function g1(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _1(t=mt()){return/crios\//i.test(t)}function y1(t=mt()){return/iemobile/i.test(t)}function v1(t=mt()){return/android/i.test(t)}function w1(t=mt()){return/blackberry/i.test(t)}function E1(t=mt()){return/webos/i.test(t)}function Bf(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZC(t=mt()){var e;return Bf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function eP(){return dA()&&document.documentMode===10}function I1(t=mt()){return Bf(t)||v1(t)||E1(t)||w1(t)||/windows phone/i.test(t)||y1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t,e=[]){let n;switch(t){case"Browser":n=o_(mt());break;case"Worker":n=`${o_(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(t,e={}){return Wr(t,"GET","/v2/passwordPolicy",Pi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=6;class iP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??rP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new a_(this),this.idTokenSubscription=new a_(this),this.beforeStateQueue=new tP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$n(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sc(this,{idToken:e}),r=await cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(xr(this));const n=e?Me(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nP(this),n=new iP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await JC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$n(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[$n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=T1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&VC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ds(t){return Me(t)}class a_{constructor(e){this.auth=e,this.observer=null,this.addObserver=vA(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oP(t){zc=t}function S1(t){return zc.loadJS(t)}function aP(){return zc.recaptchaEnterpriseScript}function lP(){return zc.gapiScript}function cP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class uP{constructor(){this.enterprise=new hP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class hP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const dP="recaptcha-enterprise",A1="NO_RECAPTCHA";class fP{constructor(e){this.type=dP,this.auth=Ds(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{qC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new zC(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function i(s,o,l){const c=window.grecaptcha;n_(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(A1)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new uP().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&n_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=aP();c.length!==0&&(c+=l),S1(c).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function l_(t,e,n,r=!1,i=!1){const s=new fP(t);let o;if(i)o=A1;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function c_(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await l_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await l_(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t,e){const n=Ci(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Lr(s,e??{}))return i;pn(i,"already-initialized")}return n.initialize({options:e})}function mP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gP(t,e,n){const r=Ds(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=C1(e),{host:o,port:l}=_P(e),c=l===null?"":`:${l}`,u={url:`${s}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(Lr(u,r.config.emulator)&&Lr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ns(o)?(Yw(`${s}//${o}${c}`),Xw("Auth",!0)):yP()}function C1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _P(t){const e=C1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:u_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:u_(o)}}}function u_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bn("not implemented")}_getIdTokenResponse(e){return Bn("not implemented")}_linkToIdToken(e,n){return Bn("not implemented")}_getReauthenticationResolver(e){return Bn("not implemented")}}async function vP(t,e){return Wr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wP(t,e){return $c(t,"POST","/v1/accounts:signInWithPassword",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(t,e){return $c(t,"POST","/v1/accounts:signInWithEmailLink",Pi(t,e))}async function IP(t,e){return $c(t,"POST","/v1/accounts:signInWithEmailLink",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa extends $f{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new sa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new sa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return c_(e,n,"signInWithPassword",wP);case"emailLink":return EP(e,{email:this._email,oobCode:this._password});default:pn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return c_(e,r,"signUpPassword",vP);case"emailLink":return IP(e,{idToken:n,email:this._email,oobCode:this._password});default:pn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(t,e){return $c(t,"POST","/v1/accounts:signInWithIdp",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP="http://localhost";class yi extends $f{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new yi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ls(e,n)}buildRequest(){const e={requestUri:TP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=va(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AP(t){const e=vo(wo(t)).link,n=e?vo(wo(e)).deep_link_id:null,r=vo(wo(t)).deep_link_id;return(r?vo(wo(r)).link:null)||r||n||e||t}class zf{constructor(e){const n=vo(wo(e)),r=n.apiKey??null,i=n.oobCode??null,s=SP(n.mode??null);K(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=AP(e);try{return new zf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.providerId=bs.PROVIDER_ID}static credential(e,n){return sa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=zf.parseLink(n);return K(r,"argument-error"),sa._fromEmailAndCode(e,r.code,r.tenantId)}}bs.PROVIDER_ID="password";bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends P1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Ea{constructor(){super("facebook.com")}static credential(e){return yi._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";pr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yi._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.GOOGLE_SIGN_IN_METHOD="google.com";mr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Ea{constructor(){super("github.com")}static credential(e){return yi._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Ea{constructor(){super("twitter.com")}static credential(e,n){return yi._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.TWITTER_SIGN_IN_METHOD="twitter.com";_r.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await cn._fromIdTokenResponse(e,r,i),o=h_(r);return new ws({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=h_(r);return new ws({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function h_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends _n{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ac.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ac(e,n,r,i)}}function R1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(t,s,e,r):s})}async function CP(t,e,n=!1){const r=await ia(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ws._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PP(t,e,n=!1){const{auth:r}=t;if(ln(r.app))return Promise.reject(xr(r));const i="reauthenticate";try{const s=await ia(t,R1(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Uf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),ws._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k1(t,e,n=!1){if(ln(t.app))return Promise.reject(xr(t));const r="signIn",i=await R1(t,r,e),s=await ws._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function RP(t,e){return k1(Ds(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kP(t){const e=Ds(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function NP(t,e,n){return ln(t.app)?Promise.reject(xr(t)):RP(Me(t),bs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kP(t),r})}function xP(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function DP(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function bP(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function VP(t){return Me(t).signOut()}const lc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lc,"1"),this.storage.removeItem(lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=1e3,LP=10;class x1 extends N1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=I1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);eP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,LP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}x1.type="LOCAL";const MP=x1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1 extends N1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}D1.type="SESSION";const b1=D1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new qc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),c=await jP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const u=qf("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){return window}function UP(t){Rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function BP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $P(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function zP(){return V1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="firebaseLocalStorageDb",qP=1,cc="firebaseLocalStorage",L1="fbase_key";class Ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hc(t,e){return t.transaction([cc],e?"readwrite":"readonly").objectStore(cc)}function HP(){const t=indexedDB.deleteDatabase(O1);return new Ia(t).toPromise()}function wd(){const t=indexedDB.open(O1,qP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cc,{keyPath:L1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cc)?e(r):(r.close(),await HP(),e(await wd()))})})}async function d_(t,e,n){const r=Hc(t,!0).put({[L1]:e,value:n});return new Ia(r).toPromise()}async function WP(t,e){const n=Hc(t,!1).get(e),r=await new Ia(n).toPromise();return r===void 0?null:r.value}function f_(t,e){const n=Hc(t,!0).delete(e);return new Ia(n).toPromise()}const GP=800,KP=3;class M1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return V1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qc._getInstance(zP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await BP(),!this.activeServiceWorker)return;this.sender=new FP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$P()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wd();return await d_(e,lc,"1"),await f_(e,lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>d_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>f_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hc(i,!1).getAll();return new Ia(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}M1.type="LOCAL";const QP=M1;new wa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(t,e){return e?$n(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf extends $f{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function XP(t){return k1(t.auth,new Hf(t),t.bypassAuthState)}function JP(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),PP(n,new Hf(t),t.bypassAuthState)}async function ZP(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),CP(n,new Hf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XP;case"linkViaPopup":case"linkViaRedirect":return ZP;case"reauthViaPopup":case"reauthViaRedirect":return JP;default:pn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=new wa(2e3,1e4);class Zi extends j1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zi.currentPopupAction&&Zi.currentPopupAction.cancel(),Zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=qf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eR.get())};e()}}Zi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR="pendingRedirect",Sl=new Map;class nR extends j1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Sl.get(this.auth._key());if(!e){try{const r=await rR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sl.set(this.auth._key(),e)}return this.bypassAuthState||Sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rR(t,e){const n=oR(e),r=sR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function iR(t,e){Sl.set(t._key(),e)}function sR(t){return $n(t._redirectPersistence)}function oR(t){return Tl(tR,t.config.apiKey,t.name)}async function aR(t,e,n=!1){if(ln(t.app))return Promise.reject(xr(t));const r=Ds(t),i=YP(r,e),o=await new nR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=10*60*1e3;class cR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!F1(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lR&&this.cachedEventUids.clear(),this.cachedEventUids.has(p_(e))}saveEventToCache(e){this.cachedEventUids.add(p_(e)),this.lastProcessedEventTime=Date.now()}}function p_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function F1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return F1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(t,e={}){return Wr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fR=/^https?/;async function pR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hR(t);for(const n of e)try{if(mR(n))return}catch{}pn(t,"unauthorized-domain")}function mR(t){const e=yd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fR.test(n))return!1;if(dR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=new wa(3e4,6e4);function m_(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _R(t){return new Promise((e,n)=>{var i,s,o;function r(){m_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{m_(),n(Pn(t,"network-request-failed"))},timeout:gR.get()})}if((s=(i=Rn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Rn().gapi)!=null&&o.load)r();else{const l=cP("iframefcb");return Rn()[l]=()=>{gapi.load?r():n(Pn(t,"network-request-failed"))},S1(`${lP()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Al=null,e})}let Al=null;function yR(t){return Al=Al||_R(t),Al}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=new wa(5e3,15e3),wR="__/auth/iframe",ER="emulator/auth/iframe",IR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SR(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ff(e,ER):`https://${t.config.authDomain}/${wR}`,r={apiKey:e.apiKey,appName:t.name,v:xs},i=TR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${va(r).slice(1)}`}async function AR(t){const e=await yR(t),n=Rn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:SR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),l=Rn().setTimeout(()=>{s(o)},vR.get());function c(){Rn().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PR=500,RR=600,kR="_blank",NR="http://localhost";class g_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xR(t,e,n,r=PR,i=RR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...CR,width:r.toString(),height:i.toString(),top:s,left:o},u=mt().toLowerCase();n&&(l=_1(u)?kR:n),m1(u)&&(e=e||NR,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[T,R])=>`${g}${T}=${R},`,"");if(ZC(u)&&l!=="_self")return DR(e||"",l),new g_(null);const m=window.open(e||"",l,f);K(m,t,"popup-blocked");try{m.focus()}catch{}return new g_(m)}function DR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR="__/auth/handler",VR="emulator/auth/handler",OR=encodeURIComponent("fac");async function __(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xs,eventId:i};if(e instanceof P1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Ea){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${OR}=${encodeURIComponent(c)}`:"";return`${LR(t)}?${va(l).slice(1)}${u}`}function LR({config:t}){return t.emulator?Ff(t,VR):`https://${t.authDomain}/${bR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="webStorageSupport";class MR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=b1,this._completeRedirectFn=aR,this._overrideRedirectResult=iR}async _openPopup(e,n,r,i){var o;Yn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await __(e,n,r,yd(),i);return xR(e,s,qf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await __(e,n,r,yd(),i);return UP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await AR(e),r=new cR(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uh,{type:uh},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[uh];s!==void 0&&n(!!s),pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return I1()||g1()||Bf()}}const jR=MR;var y_="@firebase/auth",v_="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BR(t){Vn(new fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:T1(t)},u=new sP(r,i,s,c);return mP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vn(new fn("auth-internal",e=>{const n=Ds(e.getProvider("auth").getImmediate());return(r=>new FR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(y_,v_,UR(t)),Xt(y_,v_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=5*60,zR=Qw("authIdTokenMaxAge")||$R;let w_=null;const qR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zR)return;const i=n==null?void 0:n.token;w_!==i&&(w_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function HR(t=Mf()){const e=Ci(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pP(t,{popupRedirectResolver:jR,persistence:[QP,MP,b1]}),r=Qw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=qR(s.toString());DP(n,o,()=>o(n.currentUser)),xP(n,l=>o(l))}}const i=Gw("auth");return i&&gP(n,`http://${i}`),n}function WR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}oP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",WR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BR("Browser");var GR="firebase",KR="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(GR,KR,"app");var E_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,U1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function S(){}S.prototype=v.prototype,E.F=v.prototype,E.prototype=new S,E.prototype.constructor=E,E.D=function(C,P,x){for(var A=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)A[Se-2]=arguments[Se];return v.prototype[P].apply(C,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,S){S||(S=0);const C=Array(16);if(typeof v=="string")for(var P=0;P<16;++P)C[P]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(P=0;P<16;++P)C[P]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=E.g[0],S=E.g[1],P=E.g[2];let x=E.g[3],A;A=v+(x^S&(P^x))+C[0]+3614090360&4294967295,v=S+(A<<7&4294967295|A>>>25),A=x+(P^v&(S^P))+C[1]+3905402710&4294967295,x=v+(A<<12&4294967295|A>>>20),A=P+(S^x&(v^S))+C[2]+606105819&4294967295,P=x+(A<<17&4294967295|A>>>15),A=S+(v^P&(x^v))+C[3]+3250441966&4294967295,S=P+(A<<22&4294967295|A>>>10),A=v+(x^S&(P^x))+C[4]+4118548399&4294967295,v=S+(A<<7&4294967295|A>>>25),A=x+(P^v&(S^P))+C[5]+1200080426&4294967295,x=v+(A<<12&4294967295|A>>>20),A=P+(S^x&(v^S))+C[6]+2821735955&4294967295,P=x+(A<<17&4294967295|A>>>15),A=S+(v^P&(x^v))+C[7]+4249261313&4294967295,S=P+(A<<22&4294967295|A>>>10),A=v+(x^S&(P^x))+C[8]+1770035416&4294967295,v=S+(A<<7&4294967295|A>>>25),A=x+(P^v&(S^P))+C[9]+2336552879&4294967295,x=v+(A<<12&4294967295|A>>>20),A=P+(S^x&(v^S))+C[10]+4294925233&4294967295,P=x+(A<<17&4294967295|A>>>15),A=S+(v^P&(x^v))+C[11]+2304563134&4294967295,S=P+(A<<22&4294967295|A>>>10),A=v+(x^S&(P^x))+C[12]+1804603682&4294967295,v=S+(A<<7&4294967295|A>>>25),A=x+(P^v&(S^P))+C[13]+4254626195&4294967295,x=v+(A<<12&4294967295|A>>>20),A=P+(S^x&(v^S))+C[14]+2792965006&4294967295,P=x+(A<<17&4294967295|A>>>15),A=S+(v^P&(x^v))+C[15]+1236535329&4294967295,S=P+(A<<22&4294967295|A>>>10),A=v+(P^x&(S^P))+C[1]+4129170786&4294967295,v=S+(A<<5&4294967295|A>>>27),A=x+(S^P&(v^S))+C[6]+3225465664&4294967295,x=v+(A<<9&4294967295|A>>>23),A=P+(v^S&(x^v))+C[11]+643717713&4294967295,P=x+(A<<14&4294967295|A>>>18),A=S+(x^v&(P^x))+C[0]+3921069994&4294967295,S=P+(A<<20&4294967295|A>>>12),A=v+(P^x&(S^P))+C[5]+3593408605&4294967295,v=S+(A<<5&4294967295|A>>>27),A=x+(S^P&(v^S))+C[10]+38016083&4294967295,x=v+(A<<9&4294967295|A>>>23),A=P+(v^S&(x^v))+C[15]+3634488961&4294967295,P=x+(A<<14&4294967295|A>>>18),A=S+(x^v&(P^x))+C[4]+3889429448&4294967295,S=P+(A<<20&4294967295|A>>>12),A=v+(P^x&(S^P))+C[9]+568446438&4294967295,v=S+(A<<5&4294967295|A>>>27),A=x+(S^P&(v^S))+C[14]+3275163606&4294967295,x=v+(A<<9&4294967295|A>>>23),A=P+(v^S&(x^v))+C[3]+4107603335&4294967295,P=x+(A<<14&4294967295|A>>>18),A=S+(x^v&(P^x))+C[8]+1163531501&4294967295,S=P+(A<<20&4294967295|A>>>12),A=v+(P^x&(S^P))+C[13]+2850285829&4294967295,v=S+(A<<5&4294967295|A>>>27),A=x+(S^P&(v^S))+C[2]+4243563512&4294967295,x=v+(A<<9&4294967295|A>>>23),A=P+(v^S&(x^v))+C[7]+1735328473&4294967295,P=x+(A<<14&4294967295|A>>>18),A=S+(x^v&(P^x))+C[12]+2368359562&4294967295,S=P+(A<<20&4294967295|A>>>12),A=v+(S^P^x)+C[5]+4294588738&4294967295,v=S+(A<<4&4294967295|A>>>28),A=x+(v^S^P)+C[8]+2272392833&4294967295,x=v+(A<<11&4294967295|A>>>21),A=P+(x^v^S)+C[11]+1839030562&4294967295,P=x+(A<<16&4294967295|A>>>16),A=S+(P^x^v)+C[14]+4259657740&4294967295,S=P+(A<<23&4294967295|A>>>9),A=v+(S^P^x)+C[1]+2763975236&4294967295,v=S+(A<<4&4294967295|A>>>28),A=x+(v^S^P)+C[4]+1272893353&4294967295,x=v+(A<<11&4294967295|A>>>21),A=P+(x^v^S)+C[7]+4139469664&4294967295,P=x+(A<<16&4294967295|A>>>16),A=S+(P^x^v)+C[10]+3200236656&4294967295,S=P+(A<<23&4294967295|A>>>9),A=v+(S^P^x)+C[13]+681279174&4294967295,v=S+(A<<4&4294967295|A>>>28),A=x+(v^S^P)+C[0]+3936430074&4294967295,x=v+(A<<11&4294967295|A>>>21),A=P+(x^v^S)+C[3]+3572445317&4294967295,P=x+(A<<16&4294967295|A>>>16),A=S+(P^x^v)+C[6]+76029189&4294967295,S=P+(A<<23&4294967295|A>>>9),A=v+(S^P^x)+C[9]+3654602809&4294967295,v=S+(A<<4&4294967295|A>>>28),A=x+(v^S^P)+C[12]+3873151461&4294967295,x=v+(A<<11&4294967295|A>>>21),A=P+(x^v^S)+C[15]+530742520&4294967295,P=x+(A<<16&4294967295|A>>>16),A=S+(P^x^v)+C[2]+3299628645&4294967295,S=P+(A<<23&4294967295|A>>>9),A=v+(P^(S|~x))+C[0]+4096336452&4294967295,v=S+(A<<6&4294967295|A>>>26),A=x+(S^(v|~P))+C[7]+1126891415&4294967295,x=v+(A<<10&4294967295|A>>>22),A=P+(v^(x|~S))+C[14]+2878612391&4294967295,P=x+(A<<15&4294967295|A>>>17),A=S+(x^(P|~v))+C[5]+4237533241&4294967295,S=P+(A<<21&4294967295|A>>>11),A=v+(P^(S|~x))+C[12]+1700485571&4294967295,v=S+(A<<6&4294967295|A>>>26),A=x+(S^(v|~P))+C[3]+2399980690&4294967295,x=v+(A<<10&4294967295|A>>>22),A=P+(v^(x|~S))+C[10]+4293915773&4294967295,P=x+(A<<15&4294967295|A>>>17),A=S+(x^(P|~v))+C[1]+2240044497&4294967295,S=P+(A<<21&4294967295|A>>>11),A=v+(P^(S|~x))+C[8]+1873313359&4294967295,v=S+(A<<6&4294967295|A>>>26),A=x+(S^(v|~P))+C[15]+4264355552&4294967295,x=v+(A<<10&4294967295|A>>>22),A=P+(v^(x|~S))+C[6]+2734768916&4294967295,P=x+(A<<15&4294967295|A>>>17),A=S+(x^(P|~v))+C[13]+1309151649&4294967295,S=P+(A<<21&4294967295|A>>>11),A=v+(P^(S|~x))+C[4]+4149444226&4294967295,v=S+(A<<6&4294967295|A>>>26),A=x+(S^(v|~P))+C[11]+3174756917&4294967295,x=v+(A<<10&4294967295|A>>>22),A=P+(v^(x|~S))+C[2]+718787259&4294967295,P=x+(A<<15&4294967295|A>>>17),A=S+(x^(P|~v))+C[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,E.g[2]=E.g[2]+P&4294967295,E.g[3]=E.g[3]+x&4294967295}r.prototype.v=function(E,v){v===void 0&&(v=E.length);const S=v-this.blockSize,C=this.C;let P=this.h,x=0;for(;x<v;){if(P==0)for(;x<=S;)i(this,E,x),x+=this.blockSize;if(typeof E=="string"){for(;x<v;)if(C[P++]=E.charCodeAt(x++),P==this.blockSize){i(this,C),P=0;break}}else for(;x<v;)if(C[P++]=E[x++],P==this.blockSize){i(this,C),P=0;break}}this.h=P,this.o+=v},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;v=this.o*8;for(var S=E.length-8;S<E.length;++S)E[S]=v&255,v/=256;for(this.v(E),E=Array(16),v=0,S=0;S<4;++S)for(let C=0;C<32;C+=8)E[v++]=this.g[S]>>>C&255;return E};function s(E,v){var S=l;return Object.prototype.hasOwnProperty.call(S,E)?S[E]:S[E]=v(E)}function o(E,v){this.h=v;const S=[];let C=!0;for(let P=E.length-1;P>=0;P--){const x=E[P]|0;C&&x==v||(S[P]=x,C=!1)}this.g=S}var l={};function c(E){return-128<=E&&E<128?s(E,function(v){return new o([v|0],v<0?-1:0)}):new o([E|0],E<0?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return b(u(-E));const v=[];let S=1;for(let C=0;E>=S;C++)v[C]=E/S|0,S*=4294967296;return new o(v,0)}function f(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return b(f(E.substring(1),v));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=u(Math.pow(v,8));let C=m;for(let x=0;x<E.length;x+=8){var P=Math.min(8,E.length-x);const A=parseInt(E.substring(x,x+P),v);P<8?(P=u(Math.pow(v,P)),C=C.j(P).add(u(A))):(C=C.j(S),C=C.add(u(A)))}return C}var m=c(0),g=c(1),T=c(16777216);t=o.prototype,t.m=function(){if(N(this))return-b(this).m();let E=0,v=1;for(let S=0;S<this.g.length;S++){const C=this.i(S);E+=(C>=0?C:4294967296+C)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(N(this))return"-"+b(this).toString(E);const v=u(Math.pow(E,6));var S=this;let C="";for(;;){const P=k(S,v).g;S=w(S,P.j(v));let x=((S.g.length>0?S.g[0]:S.h)>>>0).toString(E);if(S=P,R(S))return x+C;for(;x.length<6;)x="0"+x;C=x+C}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(let v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=w(this,E),N(E)?-1:R(E)?0:1};function b(E){const v=E.g.length,S=[];for(let C=0;C<v;C++)S[C]=~E.g[C];return new o(S,~E.h).add(g)}t.abs=function(){return N(this)?b(this):this},t.add=function(E){const v=Math.max(this.g.length,E.g.length),S=[];let C=0;for(let P=0;P<=v;P++){let x=C+(this.i(P)&65535)+(E.i(P)&65535),A=(x>>>16)+(this.i(P)>>>16)+(E.i(P)>>>16);C=A>>>16,x&=65535,A&=65535,S[P]=A<<16|x}return new o(S,S[S.length-1]&-2147483648?-1:0)};function w(E,v){return E.add(b(v))}t.j=function(E){if(R(this)||R(E))return m;if(N(this))return N(E)?b(this).j(b(E)):b(b(this).j(E));if(N(E))return b(this.j(b(E)));if(this.l(T)<0&&E.l(T)<0)return u(this.m()*E.m());const v=this.g.length+E.g.length,S=[];for(var C=0;C<2*v;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(let P=0;P<E.g.length;P++){const x=this.i(C)>>>16,A=this.i(C)&65535,Se=E.i(P)>>>16,gt=E.i(P)&65535;S[2*C+2*P]+=A*gt,y(S,2*C+2*P),S[2*C+2*P+1]+=x*gt,y(S,2*C+2*P+1),S[2*C+2*P+1]+=A*Se,y(S,2*C+2*P+1),S[2*C+2*P+2]+=x*Se,y(S,2*C+2*P+2)}for(E=0;E<v;E++)S[E]=S[2*E+1]<<16|S[2*E];for(E=v;E<2*v;E++)S[E]=0;return new o(S,0)};function y(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function I(E,v){this.g=E,this.h=v}function k(E,v){if(R(v))throw Error("division by zero");if(R(E))return new I(m,m);if(N(E))return v=k(b(E),v),new I(b(v.g),b(v.h));if(N(v))return v=k(E,b(v)),new I(b(v.g),v.h);if(E.g.length>30){if(N(E)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var S=g,C=v;C.l(E)<=0;)S=O(S),C=O(C);var P=L(S,1),x=L(C,1);for(C=L(C,2),S=L(S,2);!R(C);){var A=x.add(C);A.l(E)<=0&&(P=P.add(S),x=A),C=L(C,1),S=L(S,1)}return v=w(E,P.j(v)),new I(P,v)}for(P=m;E.l(v)>=0;){for(S=Math.max(1,Math.floor(E.m()/v.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),x=u(S),A=x.j(v);N(A)||A.l(E)>0;)S-=C,x=u(S),A=x.j(v);R(x)&&(x=g),P=P.add(x),E=w(E,A)}return new I(P,E)}t.B=function(E){return k(this,E).h},t.and=function(E){const v=Math.max(this.g.length,E.g.length),S=[];for(let C=0;C<v;C++)S[C]=this.i(C)&E.i(C);return new o(S,this.h&E.h)},t.or=function(E){const v=Math.max(this.g.length,E.g.length),S=[];for(let C=0;C<v;C++)S[C]=this.i(C)|E.i(C);return new o(S,this.h|E.h)},t.xor=function(E){const v=Math.max(this.g.length,E.g.length),S=[];for(let C=0;C<v;C++)S[C]=this.i(C)^E.i(C);return new o(S,this.h^E.h)};function O(E){const v=E.g.length+1,S=[];for(let C=0;C<v;C++)S[C]=E.i(C)<<1|E.i(C-1)>>>31;return new o(S,E.h)}function L(E,v){const S=v>>5;v%=32;const C=E.g.length-S,P=[];for(let x=0;x<C;x++)P[x]=v>0?E.i(x+S)>>>v|E.i(x+S+1)<<32-v:E.i(x+S);return new o(P,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,U1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Dr=o}).apply(typeof E_<"u"?E_:typeof self<"u"?self:typeof window<"u"?window:{});var sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var B1,Eo,$1,Cl,Ed,z1,q1,H1;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof sl=="object"&&sl];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in p))break e;p=p[D]}a=a[a.length-1],_=p[a],h=h(_),h!=_&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var p=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&p.push([_,h[_]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,p){return a.call.apply(a.bind,arguments)}function u(a,h,p){return u=c,u.apply(null,arguments)}function f(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function m(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(_,D,V){for(var $=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)$[ee-2]=arguments[ee];return h.prototype[D].apply(_,$)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function T(a){const h=a.length;if(h>0){const p=Array(h);for(let _=0;_<h;_++)p[_]=a[_];return p}return[]}function R(a,h){for(let _=1;_<arguments.length;_++){const D=arguments[_];var p=typeof D;if(p=p!="object"?p:D?Array.isArray(D)?"array":p:"null",p=="array"||p=="object"&&typeof D.length=="number"){p=a.length||0;const V=D.length||0;a.length=p+V;for(let $=0;$<V;$++)a[p+$]=D[$]}else a.push(D)}}class N{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function w(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class y{constructor(){this.h=this.g=null}add(h,p){const _=I.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var I=new N(()=>new k,a=>a.reset());class k{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let O,L=!1,E=new y,v=()=>{const a=Promise.resolve(void 0);O=()=>{a.then(S)}};function S(){for(var a;a=w();){try{a.h.call(a.g)}catch(p){b(p)}var h=I;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}L=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function A(a){return/^[\s\xa0]*$/.test(a)}function Se(a,h){P.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(Se,P),Se.prototype.init=function(a,h){const p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Se.Z.h.call(this)},Se.prototype.h=function(){Se.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var gt="closure_listenable_"+(Math.random()*1e6|0),J=0;function de(a,h,p,_,D){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=D,this.key=++J,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function G(a,h,p){for(const _ in a)h.call(p,a[_],_,a)}function Z(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function fe(a){const h={};for(const p in a)h[p]=a[p];return h}const xe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qr(a,h){let p,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(p in _)a[p]=_[p];for(let V=0;V<xe.length;V++)p=xe[V],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function qt(a){this.src=a,this.g={},this.h=0}qt.prototype.add=function(a,h,p,_,D){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const $=nn(a,h,_,D);return $>-1?(h=a[$],p||(h.fa=!1)):(h=new de(h,this.src,V,!!_,D),h.fa=p,a.push(h)),h};function Yr(a,h){const p=h.type;if(p in a.g){var _=a.g[p],D=Array.prototype.indexOf.call(_,h,void 0),V;(V=D>=0)&&Array.prototype.splice.call(_,D,1),V&&(B(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function nn(a,h,p,_){for(let D=0;D<a.length;++D){const V=a[D];if(!V.da&&V.listener==h&&V.capture==!!p&&V.ha==_)return D}return-1}var tr="closure_lm_"+(Math.random()*1e6|0),hu={};function Lp(a,h,p,_,D){if(Array.isArray(h)){for(let V=0;V<h.length;V++)Lp(a,h[V],p,_,D);return null}return p=Fp(p),a&&a[gt]?a.J(h,p,l(_)?!!_.capture:!!_,D):G0(a,h,p,!1,_,D)}function G0(a,h,p,_,D,V){if(!h)throw Error("Invalid event type");const $=l(D)?!!D.capture:!!D;let ee=fu(a);if(ee||(a[tr]=ee=new qt(a)),p=ee.add(h,p,_,$,V),p.proxy)return p;if(_=K0(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)x||(D=$),D===void 0&&(D=!1),a.addEventListener(h.toString(),_,D);else if(a.attachEvent)a.attachEvent(jp(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function K0(){function a(p){return h.call(a.src,a.listener,p)}const h=Q0;return a}function Mp(a,h,p,_,D){if(Array.isArray(h))for(var V=0;V<h.length;V++)Mp(a,h[V],p,_,D);else _=l(_)?!!_.capture:!!_,p=Fp(p),a&&a[gt]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],p=nn(h,p,_,D),p>-1&&(B(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=fu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=nn(h,p,_,D)),(p=a>-1?h[a]:null)&&du(p))}function du(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[gt])Yr(h.i,a);else{var p=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(p,_,a.capture):h.detachEvent?h.detachEvent(jp(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=fu(h))?(Yr(p,a),p.h==0&&(p.src=null,h[tr]=null)):B(a)}}}function jp(a){return a in hu?hu[a]:hu[a]="on"+a}function Q0(a,h){if(a.da)a=!0;else{h=new Se(h,this);const p=a.listener,_=a.ha||a.src;a.fa&&du(a),a=p.call(_,h)}return a}function fu(a){return a=a[tr],a instanceof qt?a:null}var pu="__closure_events_fn_"+(Math.random()*1e9>>>0);function Fp(a){return typeof a=="function"?a:(a[pu]||(a[pu]=function(h){return a.handleEvent(h)}),a[pu])}function ot(){C.call(this),this.i=new qt(this),this.M=this,this.G=null}m(ot,C),ot.prototype[gt]=!0,ot.prototype.removeEventListener=function(a,h,p,_){Mp(this,a,h,p,_)};function _t(a,h){var p,_=a.G;if(_)for(p=[];_;_=_.G)p.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new P(h,a);else if(h instanceof P)h.target=h.target||a;else{var D=h;h=new P(_,a),Qr(h,D)}D=!0;let V,$;if(p)for($=p.length-1;$>=0;$--)V=h.g=p[$],D=ka(V,_,!0,h)&&D;if(V=h.g=a,D=ka(V,_,!0,h)&&D,D=ka(V,_,!1,h)&&D,p)for($=0;$<p.length;$++)V=h.g=p[$],D=ka(V,_,!1,h)&&D}ot.prototype.N=function(){if(ot.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let _=0;_<p.length;_++)B(p[_]);delete a.g[h],a.h--}}this.G=null},ot.prototype.J=function(a,h,p,_){return this.i.add(String(a),h,!1,p,_)},ot.prototype.K=function(a,h,p,_){return this.i.add(String(a),h,!0,p,_)};function ka(a,h,p,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let D=!0;for(let V=0;V<h.length;++V){const $=h[V];if($&&!$.da&&$.capture==p){const ee=$.listener,$e=$.ha||$.src;$.fa&&Yr(a.i,$),D=ee.call($e,_)!==!1&&D}}return D&&!_.defaultPrevented}function Y0(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Up(a){a.g=Y0(()=>{a.g=null,a.i&&(a.i=!1,Up(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class X0 extends C{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Up(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zs(a){C.call(this),this.h=a,this.g={}}m(zs,C);var Bp=[];function $p(a){G(a.g,function(h,p){this.g.hasOwnProperty(p)&&du(h)},a),a.g={}}zs.prototype.N=function(){zs.Z.N.call(this),$p(this)},zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mu=o.JSON.stringify,J0=o.JSON.parse,Z0=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function zp(){}function qp(){}var qs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function gu(){P.call(this,"d")}m(gu,P);function _u(){P.call(this,"c")}m(_u,P);var Xr={},Hp=null;function Na(){return Hp=Hp||new ot}Xr.Ia="serverreachability";function Wp(a){P.call(this,Xr.Ia,a)}m(Wp,P);function Hs(a){const h=Na();_t(h,new Wp(h))}Xr.STAT_EVENT="statevent";function Gp(a,h){P.call(this,Xr.STAT_EVENT,a),this.stat=h}m(Gp,P);function yt(a){const h=Na();_t(h,new Gp(h,a))}Xr.Ja="timingevent";function Kp(a,h){P.call(this,Xr.Ja,a),this.size=h}m(Kp,P);function Ws(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Gs(){this.g=!0}Gs.prototype.ua=function(){this.g=!1};function eI(a,h,p,_,D,V){a.info(function(){if(a.g)if(V){var $="",ee=V.split("&");for(let pe=0;pe<ee.length;pe++){var $e=ee[pe].split("=");if($e.length>1){const Qe=$e[0];$e=$e[1];const vn=Qe.split("_");$=vn.length>=2&&vn[1]=="type"?$+(Qe+"="+$e+"&"):$+(Qe+"=redacted&")}}}else $=null;else $=V;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+h+`
`+p+`
`+$})}function tI(a,h,p,_,D,V,$){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+h+`
`+p+`
`+V+" "+$})}function bi(a,h,p,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+rI(a,p)+(_?" "+_:"")})}function nI(a,h){a.info(function(){return"TIMEOUT: "+h})}Gs.prototype.info=function(){};function rI(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var p=V[a];if(!(p.length<2)){var _=p[1];if(Array.isArray(_)&&!(_.length<1)){var D=_[0];if(D!="noop"&&D!="stop"&&D!="close")for(let $=1;$<_.length;$++)_[$]=""}}}}return mu(V)}catch{return h}}var xa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Qp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Yp;function yu(){}m(yu,zp),yu.prototype.g=function(){return new XMLHttpRequest},Yp=new yu;function Ks(a){return encodeURIComponent(String(a))}function iI(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function nr(a,h,p,_){this.j=a,this.i=h,this.l=p,this.S=_||1,this.V=new zs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Xp}function Xp(){this.i=null,this.g="",this.h=!1}var Jp={},vu={};function wu(a,h,p){a.M=1,a.A=ba(yn(h)),a.u=p,a.R=!0,Zp(a,null)}function Zp(a,h){a.F=Date.now(),Da(a),a.B=yn(a.A);var p=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),dm(p.i,"t",_),a.C=0,p=a.j.L,a.h=new Xp,a.g=Nm(a.j,p?h:null,!a.u),a.P>0&&(a.O=new X0(u(a.Y,a,a.g),a.P)),h=a.V,p=a.g,_=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(Bp[0]=D.toString()),D=Bp);for(let V=0;V<D.length;V++){const $=Lp(p,D[V],_||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.J?fe(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Hs(),eI(a.i,a.v,a.B,a.l,a.S,a.u)}nr.prototype.ba=function(a){a=a.target;const h=this.O;h&&sr(a)==3?h.j():this.Y(a)},nr.prototype.Y=function(a){try{if(a==this.g)e:{const ee=sr(this.g),$e=this.g.ya(),pe=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||vm(this.g)))){this.K||ee!=4||$e==7||($e==8||pe<=0?Hs(3):Hs(2)),Eu(this);var h=this.g.ca();this.X=h;var p=sI(this);if(this.o=h==200,tI(this.i,this.v,this.B,this.l,this.S,ee,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,D=this.g;if((_=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(_)){var V=_;break t}}V=null}if(a=V)bi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Iu(this,a);else{this.o=!1,this.m=3,yt(12),Jr(this),Qs(this);break e}}if(this.R){a=!0;let Qe;for(;!this.K&&this.C<p.length;)if(Qe=oI(this,p),Qe==vu){ee==4&&(this.m=4,yt(14),a=!1),bi(this.i,this.l,null,"[Incomplete Response]");break}else if(Qe==Jp){this.m=4,yt(15),bi(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else bi(this.i,this.l,Qe,null),Iu(this,Qe);if(em(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||p.length!=0||this.h.h||(this.m=1,yt(16),a=!1),this.o=this.o&&a,!a)bi(this.i,this.l,p,"[Invalid Chunked Response]"),Jr(this),Qs(this);else if(p.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Nu($),$.P=!0,yt(11))}}else bi(this.i,this.l,p,null),Iu(this,p);ee==4&&Jr(this),this.o&&!this.K&&(ee==4?Cm(this.j,this):(this.o=!1,Da(this)))}else wI(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,yt(12)):(this.m=0,yt(13)),Jr(this),Qs(this)}}}catch{}finally{}};function sI(a){if(!em(a))return a.g.la();const h=vm(a.g);if(h==="")return"";let p="";const _=h.length,D=sr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Jr(a),Qs(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<_;V++)a.h.h=!0,p+=a.h.i.decode(h[V],{stream:!(D&&V==_-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function em(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function oI(a,h){var p=a.C,_=h.indexOf(`
`,p);return _==-1?vu:(p=Number(h.substring(p,_)),isNaN(p)?Jp:(_+=1,_+p>h.length?vu:(h=h.slice(_,_+p),a.C=_+p,h)))}nr.prototype.cancel=function(){this.K=!0,Jr(this)};function Da(a){a.T=Date.now()+a.H,tm(a,a.H)}function tm(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ws(u(a.aa,a),h)}function Eu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}nr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(nI(this.i,this.B),this.M!=2&&(Hs(),yt(17)),Jr(this),this.m=2,Qs(this)):tm(this,this.T-a)};function Qs(a){a.j.I==0||a.K||Cm(a.j,a)}function Jr(a){Eu(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,$p(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Iu(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||Tu(p.h,a))){if(!a.L&&Tu(p.h,a)&&p.I==3){try{var _=p.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)ja(p),La(p);else break e;ku(p),yt(18)}}else p.xa=D[1],0<p.xa-p.K&&D[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Ws(u(p.Va,p),6e3));im(p.h)<=1&&p.ta&&(p.ta=void 0)}else ei(p,11)}else if((a.L||p.g==a)&&ja(p),!A(h))for(D=p.Ba.g.parse(h),h=0;h<D.length;h++){let pe=D[h];const Qe=pe[0];if(!(Qe<=p.K))if(p.K=Qe,pe=pe[1],p.I==2)if(pe[0]=="c"){p.M=pe[1],p.ba=pe[2];const vn=pe[3];vn!=null&&(p.ka=vn,p.j.info("VER="+p.ka));const ti=pe[4];ti!=null&&(p.za=ti,p.j.info("SVER="+p.za));const or=pe[5];or!=null&&typeof or=="number"&&or>0&&(_=1.5*or,p.O=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const ar=a.g;if(ar){const Ua=ar.g?ar.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ua){var V=_.h;V.g||Ua.indexOf("spdy")==-1&&Ua.indexOf("quic")==-1&&Ua.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Su(V,V.h),V.h=null))}if(_.G){const xu=ar.g?ar.g.getResponseHeader("X-HTTP-Session-Id"):null;xu&&(_.wa=xu,_e(_.J,_.G,xu))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),_=p;var $=a;if(_.na=km(_,_.L?_.ba:null,_.W),$.L){sm(_.h,$);var ee=$,$e=_.O;$e&&(ee.H=$e),ee.D&&(Eu(ee),Da(ee)),_.g=$}else Sm(_);p.i.length>0&&Ma(p)}else pe[0]!="stop"&&pe[0]!="close"||ei(p,7);else p.I==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?ei(p,7):Ru(p):pe[0]!="noop"&&p.l&&p.l.qa(pe),p.A=0)}}Hs(4)}catch{}}var aI=class{constructor(a,h){this.g=a,this.map=h}};function nm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function rm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function im(a){return a.h?1:a.g?a.g.size:0}function Tu(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Su(a,h){a.g?a.g.add(h):a.h=h}function sm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}nm.prototype.cancel=function(){if(this.i=om(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function om(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return T(a.i)}var am=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lI(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const _=a[p].indexOf("=");let D,V=null;_>=0?(D=a[p].substring(0,_),V=a[p].substring(_+1)):D=a[p],h(D,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function rr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof rr?(this.l=a.l,Ys(this,a.j),this.o=a.o,this.g=a.g,Xs(this,a.u),this.h=a.h,Au(this,fm(a.i)),this.m=a.m):a&&(h=String(a).match(am))?(this.l=!1,Ys(this,h[1]||"",!0),this.o=Js(h[2]||""),this.g=Js(h[3]||"",!0),Xs(this,h[4]),this.h=Js(h[5]||"",!0),Au(this,h[6]||"",!0),this.m=Js(h[7]||"")):(this.l=!1,this.i=new eo(null,this.l))}rr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Zs(h,lm,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Zs(h,lm,!0),"@"),a.push(Ks(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Zs(p,p.charAt(0)=="/"?hI:uI,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Zs(p,fI)),a.join("")},rr.prototype.resolve=function(a){const h=yn(this);let p=!!a.j;p?Ys(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var _=a.h;if(p)Xs(h,a.u);else if(p=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var D=h.h.lastIndexOf("/");D!=-1&&(_=h.h.slice(0,D+1)+_)}if(D=_,D==".."||D==".")_="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){_=D.lastIndexOf("/",0)==0,D=D.split("/");const V=[];for(let $=0;$<D.length;){const ee=D[$++];ee=="."?_&&$==D.length&&V.push(""):ee==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),_&&$==D.length&&V.push("")):(V.push(ee),_=!0)}_=V.join("/")}else _=D}return p?h.h=_:p=a.i.toString()!=="",p?Au(h,fm(a.i)):p=!!a.m,p&&(h.m=a.m),h};function yn(a){return new rr(a)}function Ys(a,h,p){a.j=p?Js(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Xs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Au(a,h,p){h instanceof eo?(a.i=h,pI(a.i,a.l)):(p||(h=Zs(h,dI)),a.i=new eo(h,a.l))}function _e(a,h,p){a.i.set(h,p)}function ba(a){return _e(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Js(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zs(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,cI),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function cI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var lm=/[#\/\?@]/g,uI=/[#\?:]/g,hI=/[#\?]/g,dI=/[#\?@]/g,fI=/#/g;function eo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Zr(a){a.g||(a.g=new Map,a.h=0,a.i&&lI(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=eo.prototype,t.add=function(a,h){Zr(this),this.i=null,a=Vi(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function cm(a,h){Zr(a),h=Vi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function um(a,h){return Zr(a),h=Vi(a,h),a.g.has(h)}t.forEach=function(a,h){Zr(this),this.g.forEach(function(p,_){p.forEach(function(D){a.call(h,D,_,this)},this)},this)};function hm(a,h){Zr(a);let p=[];if(typeof h=="string")um(a,h)&&(p=p.concat(a.g.get(Vi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return Zr(this),this.i=null,a=Vi(this,a),um(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=hm(this,a),a.length>0?String(a[0]):h):h};function dm(a,h,p){cm(a,h),p.length>0&&(a.i=null,a.g.set(Vi(a,h),T(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var p=h[_];const D=Ks(p);p=hm(this,p);for(let V=0;V<p.length;V++){let $=D;p[V]!==""&&($+="="+Ks(p[V])),a.push($)}}return this.i=a.join("&")};function fm(a){const h=new eo;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Vi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function pI(a,h){h&&!a.j&&(Zr(a),a.i=null,a.g.forEach(function(p,_){const D=_.toLowerCase();_!=D&&(cm(this,_),dm(this,D,p))},a)),a.j=h}function mI(a,h){const p=new Gs;if(o.Image){const _=new Image;_.onload=f(ir,p,"TestLoadImage: loaded",!0,h,_),_.onerror=f(ir,p,"TestLoadImage: error",!1,h,_),_.onabort=f(ir,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=f(ir,p,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function gI(a,h){const p=new Gs,_=new AbortController,D=setTimeout(()=>{_.abort(),ir(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(V=>{clearTimeout(D),V.ok?ir(p,"TestPingServer: ok",!0,h):ir(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),ir(p,"TestPingServer: error",!1,h)})}function ir(a,h,p,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(p)}catch{}}function _I(){this.g=new Z0}function Cu(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Cu,zp),Cu.prototype.g=function(){return new Va(this.i,this.h)};function Va(a,h){ot.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Va,ot),t=Va.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,no(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,to(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,no(this)),this.g&&(this.readyState=3,no(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;pm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function pm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?to(this):no(this),this.readyState==3&&pm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,to(this))},t.Na=function(a){this.g&&(this.response=a,to(this))},t.ga=function(){this.g&&to(this)};function to(a){a.readyState=4,a.l=null,a.j=null,a.B=null,no(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function no(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Va.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function mm(a){let h="";return G(a,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function Pu(a,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=mm(p),typeof a=="string"?p!=null&&Ks(p):_e(a,h,p))}function ke(a){ot.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(ke,ot);var yI=/^https?$/i,vI=["POST","PUT"];t=ke.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Yp.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){gm(this,V);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)p.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())p.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(vI,h,void 0)>=0)||_||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,$]of p)this.g.setRequestHeader(V,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){gm(this,V)}};function gm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,_m(a),Oa(a)}function _m(a){a.A||(a.A=!0,_t(a,"complete"),_t(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,_t(this,"complete"),_t(this,"abort"),Oa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oa(this,!0)),ke.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ym(this):this.Xa())},t.Xa=function(){ym(this)};function ym(a){if(a.h&&typeof s<"u"){if(a.v&&sr(a)==4)setTimeout(a.Ca.bind(a),0);else if(_t(a,"readystatechange"),sr(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=V===0){let $=String(a.D).match(am)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),_=!yI.test($?$.toLowerCase():"")}p=_}if(p)_t(a,"complete"),_t(a,"success");else{a.o=6;try{var D=sr(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",_m(a)}}finally{Oa(a)}}}}function Oa(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||_t(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function sr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return sr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),J0(h)}};function vm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function wI(a){const h={};a=(a.g&&sr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(A(a[_]))continue;var p=iI(a[_]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=h[D]||[];h[D]=V,V.push(p)}Z(h,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ro(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function wm(a){this.za=0,this.i=[],this.j=new Gs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ro("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ro("baseRetryDelayMs",5e3,a),this.Za=ro("retryDelaySeedMs",1e4,a),this.Ta=ro("forwardChannelMaxRetries",2,a),this.va=ro("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new nm(a&&a.concurrentRequestLimit),this.Ba=new _I,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=wm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,_){yt(0),this.W=a,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.J=km(this,null,this.W),Ma(this)};function Ru(a){if(Em(a),a.I==3){var h=a.V++,p=yn(a.J);if(_e(p,"SID",a.M),_e(p,"RID",h),_e(p,"TYPE","terminate"),io(a,p),h=new nr(a,a.j,h),h.M=2,h.A=ba(yn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Nm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Da(h)}Rm(a)}function La(a){a.g&&(Nu(a),a.g.cancel(),a.g=null)}function Em(a){La(a),a.v&&(o.clearTimeout(a.v),a.v=null),ja(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ma(a){if(!rm(a.h)&&!a.m){a.m=!0;var h=a.Ea;O||v(),L||(O(),L=!0),E.add(h,a),a.D=0}}function EI(a,h){return im(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ws(u(a.Ea,a,h),Pm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new nr(this,this.j,a);let V=this.o;if(this.U&&(V?(V=fe(V),Qr(V,this.U)):V=this.U),this.u!==null||this.R||(D.J=V,V=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Tm(this,D,h),p=yn(this.J),_e(p,"RID",a),_e(p,"CVER",22),this.G&&_e(p,"X-HTTP-Session-Id",this.G),io(this,p),V&&(this.R?h="headers="+Ks(mm(V))+"&"+h:this.u&&Pu(p,this.u,V)),Su(this.h,D),this.Ra&&_e(p,"TYPE","init"),this.S?(_e(p,"$req",h),_e(p,"SID","null"),D.U=!0,wu(D,p,null)):wu(D,p,h),this.I=2}}else this.I==3&&(a?Im(this,a):this.i.length==0||rm(this.h)||Im(this))};function Im(a,h){var p;h?p=h.l:p=a.V++;const _=yn(a.J);_e(_,"SID",a.M),_e(_,"RID",p),_e(_,"AID",a.K),io(a,_),a.u&&a.o&&Pu(_,a.u,a.o),p=new nr(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Tm(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Su(a.h,p),wu(p,_,h)}function io(a,h){a.H&&G(a.H,function(p,_){_e(h,_,p)}),a.l&&G({},function(p,_){_e(h,_,p)})}function Tm(a,h,p){p=Math.min(a.i.length,p);const _=a.l?u(a.l.Ka,a.l,a):null;e:{var D=a.i;let ee=-1;for(;;){const $e=["count="+p];ee==-1?p>0?(ee=D[0].g,$e.push("ofs="+ee)):ee=0:$e.push("ofs="+ee);let pe=!0;for(let Qe=0;Qe<p;Qe++){var V=D[Qe].g;const vn=D[Qe].map;if(V-=ee,V<0)ee=Math.max(0,D[Qe].g-100),pe=!1;else try{V="req"+V+"_"||"";try{var $=vn instanceof Map?vn:Object.entries(vn);for(const[ti,or]of $){let ar=or;l(or)&&(ar=mu(or)),$e.push(V+ti+"="+encodeURIComponent(ar))}}catch(ti){throw $e.push(V+"type="+encodeURIComponent("_badmap")),ti}}catch{_&&_(vn)}}if(pe){$=$e.join("&");break e}}$=void 0}return a=a.i.splice(0,p),h.G=a,$}function Sm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;O||v(),L||(O(),L=!0),E.add(h,a),a.A=0}}function ku(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ws(u(a.Da,a),Pm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Am(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ws(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,yt(10),La(this),Am(this))};function Nu(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Am(a){a.g=new nr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=yn(a.na);_e(h,"RID","rpc"),_e(h,"SID",a.M),_e(h,"AID",a.K),_e(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&_e(h,"TO",a.ia),_e(h,"TYPE","xmlhttp"),io(a,h),a.u&&a.o&&Pu(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=ba(yn(h)),p.u=null,p.R=!0,Zp(p,a)}t.Va=function(){this.C!=null&&(this.C=null,La(this),ku(this),yt(19))};function ja(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Cm(a,h){var p=null;if(a.g==h){ja(a),Nu(a),a.g=null;var _=2}else if(Tu(a.h,h))p=h.G,sm(a.h,h),_=1;else return;if(a.I!=0){if(h.o)if(_==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var D=a.D;_=Na(),_t(_,new Kp(_,p)),Ma(a)}else Sm(a);else if(D=h.m,D==3||D==0&&h.X>0||!(_==1&&EI(a,h)||_==2&&ku(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),D){case 1:ei(a,5);break;case 4:ei(a,10);break;case 3:ei(a,6);break;default:ei(a,2)}}}function Pm(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function ei(a,h){if(a.j.info("Error code "+h),h==2){var p=u(a.bb,a),_=a.Ua;const D=!_;_=new rr(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ys(_,"https"),ba(_),D?mI(_.toString(),p):gI(_.toString(),p)}else yt(2);a.I=0,a.l&&a.l.pa(h),Rm(a),Em(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Rm(a){if(a.I=0,a.ja=[],a.l){const h=om(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ja,h),R(a.ja,a.i),a.h.i.length=0,T(a.i),a.i.length=0),a.l.oa()}}function km(a,h,p){var _=p instanceof rr?yn(p):new rr(p);if(_.g!="")h&&(_.g=h+"."+_.g),Xs(_,_.u);else{var D=o.location;_=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;const V=new rr(null);_&&Ys(V,_),h&&(V.g=h),D&&Xs(V,D),p&&(V.h=p),_=V}return p=a.G,h=a.wa,p&&h&&_e(_,p,h),_e(_,"VER",a.ka),io(a,_),_}function Nm(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new ke(new Cu({ab:p})):new ke(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xm(){}t=xm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Fa(){}Fa.prototype.g=function(a,h){return new bt(a,h)};function bt(a,h){ot.call(this),this.g=new wm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!A(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!A(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Oi(this)}m(bt,ot),bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){Ru(this.g)},bt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=mu(a),a=p);h.i.push(new aI(h.Ya++,a)),h.I==3&&Ma(h)},bt.prototype.N=function(){this.g.l=null,delete this.j,Ru(this.g),delete this.g,bt.Z.N.call(this)};function Dm(a){gu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(Dm,gu);function bm(){_u.call(this),this.status=1}m(bm,_u);function Oi(a){this.g=a}m(Oi,xm),Oi.prototype.ra=function(){_t(this.g,"a")},Oi.prototype.qa=function(a){_t(this.g,new Dm(a))},Oi.prototype.pa=function(a){_t(this.g,new bm)},Oi.prototype.oa=function(){_t(this.g,"b")},Fa.prototype.createWebChannel=Fa.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,H1=function(){return new Fa},q1=function(){return Na()},z1=Xr,Ed={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},xa.NO_ERROR=0,xa.TIMEOUT=8,xa.HTTP_ERROR=6,Cl=xa,Qp.COMPLETE="complete",$1=Qp,qp.EventType=qs,qs.OPEN="a",qs.CLOSE="b",qs.ERROR="c",qs.MESSAGE="d",ot.prototype.listen=ot.prototype.J,Eo=qp,ke.prototype.listenOnce=ke.prototype.K,ke.prototype.getLastError=ke.prototype.Ha,ke.prototype.getLastErrorCode=ke.prototype.ya,ke.prototype.getStatus=ke.prototype.ca,ke.prototype.getResponseJson=ke.prototype.La,ke.prototype.getResponseText=ke.prototype.la,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Fa,B1=ke}).apply(typeof sl<"u"?sl:typeof self<"u"?self:typeof window<"u"?window:{});const I_="@firebase/firestore",T_="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new Bc("@firebase/firestore");function Mi(){return vi.logLevel}function q(t,...e){if(vi.logLevel<=re.DEBUG){const n=e.map(Wf);vi.debug(`Firestore (${Vs}): ${t}`,...n)}}function Xn(t,...e){if(vi.logLevel<=re.ERROR){const n=e.map(Wf);vi.error(`Firestore (${Vs}): ${t}`,...n)}}function Es(t,...e){if(vi.logLevel<=re.WARN){const n=e.map(Wf);vi.warn(`Firestore (${Vs}): ${t}`,...n)}}function Wf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,W1(t,r,n)}function W1(t,e,n){let r=`FIRESTORE (${Vs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Xn(r),new Error(r)}function ce(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||W1(e,i,r)}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class YR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XR{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string",31837,{l:r}),new G1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string",2055,{h:e}),new ht(e)}}class JR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ZR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new JR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class S_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ek{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ln(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ce(this.o===void 0,3512);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new S_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new S_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=tk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function Id(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return hh(i)===hh(s)?ie(i,s):hh(i)?1:-1}return ie(t.length,e.length)}const nk=55296,rk=57343;function hh(t){const e=t.charCodeAt(0);return e>=nk&&e<=rk}function Is(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="__name__";class Tn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Tn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Tn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Tn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ie(e.length,n.length)}static compareSegments(e,n){const r=Tn.isNumericId(e),i=Tn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Tn.extractNumericId(e).compare(Tn.extractNumericId(n)):Id(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dr.fromString(e.substring(4,e.length-2))}}class me extends Tn{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const ik=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Tn{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return ik.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===A_}static keyField(){return new nt([A_])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new z(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new z(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(me.fromString(e))}static fromName(e){return new W(me.fromString(e).popFirst(5))}static empty(){return new W(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new me(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(t,e,n){if(!n)throw new z(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sk(t,e,n,r){if(e===!0&&r===!0)throw new z(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function C_(t){if(!W.isDocumentKey(t))throw new z(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function P_(t){if(W.isDocumentKey(t))throw new z(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Q1(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Wc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wc(t);throw new z(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ta(t,e){if(!Q1(t))throw new z(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new z(M.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=-62135596800,k_=1e6;class he{static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*k_);return new he(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<R_)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/k_}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:he._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ta(e,he._jsonSchema))return new he(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-R_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}he._jsonSchemaVersion="firestore/timestamp/1.0",he._jsonSchema={type:Be("string",he._jsonSchemaVersion),seconds:Be("number"),nanoseconds:Be("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new he(0,0))}static max(){return new Y(new he(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=-1;function ok(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new he(n+1,0):new he(n,r));return new Mr(i,W.empty(),e)}function ak(t){return new Mr(t.readTime,t.key,oa)}class Mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mr(Y.min(),W.empty(),oa)}static max(){return new Mr(Y.max(),W.empty(),oa)}}function lk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==ck)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function hk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ls(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Gc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=-1;function Kc(t){return t==null}function uc(t){return t===0&&1/t==-1/0}function dk(t){return typeof t=="number"&&Number.isInteger(t)&&!uc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1="";function fk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=N_(e)),e=pk(t.get(n),e);return N_(e)}function pk(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Y1:n+="";break;default:n+=s}}return n}function N_(t){return t+Y1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function X1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ol(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ol(this.root,e,this.comparator,!1)}getReverseIterator(){return new ol(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ol(this.root,e,this.comparator,!0)}}class ol{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??tt.RED,this.left=i??tt.EMPTY,this.right=s??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new D_(this.data.getIterator())}getIteratorFrom(e){return new D_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class D_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new jt([])}unionWith(e){let n=new Ke(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new J1("Invalid base64 string: "+s):s}}(e);return new st(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const mk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(t){if(ce(!!t,39018),typeof t=="string"){let e=0;const n=mk.exec(t);if(ce(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1="server_timestamp",eE="__type__",tE="__previous_value__",nE="__local_write_time__";function Qf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[eE])==null?void 0:r.stringValue)===Z1}function Qc(t){const e=t.mapValue.fields[tE];return Qf(e)?Qc(e):e}function aa(t){const e=jr(t.mapValue.fields[nE].timestampValue);return new he(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,n,r,i,s,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const hc="(default)";class la{constructor(e,n){this.projectId=e,this.database=n||hc}static empty(){return new la("","")}get isDefaultDatabase(){return this.database===hc}isEqual(e){return e instanceof la&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="__type__",iE="__max__",al={mapValue:{fields:{__type__:{stringValue:iE}}}},sE="__vector__",dc="value";function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qf(t)?4:yk(t)?9007199254740991:_k(t)?10:11:Q(28295,{value:t})}function On(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return aa(t).isEqual(aa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=jr(i.timestampValue),l=jr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fr(i.bytesValue).isEqual(Fr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ve(i.doubleValue),l=Ve(s.doubleValue);return o===l?uc(o)===uc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Is(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(x_(o)!==x_(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!On(o[c],l[c])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function ca(t,e){return(t.values||[]).find(n=>On(n,e))!==void 0}function Ts(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ve(s.integerValue||s.doubleValue),c=Ve(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return b_(t.timestampValue,e.timestampValue);case 4:return b_(aa(t),aa(e));case 5:return Id(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Fr(s),c=Fr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=ie(l[u],c[u]);if(f!==0)return f}return ie(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ie(Ve(s.latitude),Ve(o.latitude));return l!==0?l:ie(Ve(s.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return V_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,T,R,N;const l=s.fields||{},c=o.fields||{},u=(g=l[dc])==null?void 0:g.arrayValue,f=(T=c[dc])==null?void 0:T.arrayValue,m=ie(((R=u==null?void 0:u.values)==null?void 0:R.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return m!==0?m:V_(u,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===al.mapValue&&o===al.mapValue)return 0;if(s===al.mapValue)return 1;if(o===al.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const g=Id(c[m],f[m]);if(g!==0)return g;const T=Ts(l[c[m]],u[f[m]]);if(T!==0)return T}return ie(c.length,f.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function b_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=jr(t),r=jr(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function V_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ts(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function Ss(t){return Td(t)}function Td(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Td(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Td(n.fields[o])}`;return i+"}"}(t.mapValue):Q(61005,{value:t})}function Pl(t){switch(Ur(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qc(t);return e?16+Pl(e):16;case 5:return 2*t.stringValue.length;case 6:return Fr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Pl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Gr(r.fields,(s,o)=>{i+=s.length+Pl(o)}),i}(t.mapValue);default:throw Q(13486,{value:t})}}function O_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sd(t){return!!t&&"integerValue"in t}function Yf(t){return!!t&&"arrayValue"in t}function L_(t){return!!t&&"nullValue"in t}function M_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Rl(t){return!!t&&"mapValue"in t}function _k(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[rE])==null?void 0:r.stringValue)===sE}function Lo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Gr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Lo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Lo(t.arrayValue.values[n]);return e}return{...t}}function yk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===iE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Rl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Lo(n)}setAll(e){let n=nt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Lo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Rl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Rl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Gr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Rt(Lo(this.value))}}function oE(t){const e=[];return Gr(t.fields,(n,r)=>{const i=new nt([n]);if(Rl(r)){const s=oE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ft(e,0,Y.min(),Y.min(),Y.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,i){return new ft(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new ft(e,2,n,Y.min(),Y.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,Y.min(),Y.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n){this.position=e,this.inclusive=n}}function j_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Ts(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function F_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n="asc"){this.field=e,this.dir=n}}function vk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{}class Ue extends aE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ek(e,n,r):n==="array-contains"?new Sk(e,r):n==="in"?new Ak(e,r):n==="not-in"?new Ck(e,r):n==="array-contains-any"?new Pk(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ik(e,r):new Tk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ts(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(Ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gn extends aE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new gn(e,n)}matches(e){return lE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function lE(t){return t.op==="and"}function cE(t){return wk(t)&&lE(t)}function wk(t){for(const e of t.filters)if(e instanceof gn)return!1;return!0}function Ad(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+Ss(t.value);if(cE(t))return t.filters.map(e=>Ad(e)).join(",");{const e=t.filters.map(n=>Ad(n)).join(",");return`${t.op}(${e})`}}function uE(t,e){return t instanceof Ue?function(r,i){return i instanceof Ue&&r.op===i.op&&r.field.isEqual(i.field)&&On(r.value,i.value)}(t,e):t instanceof gn?function(r,i){return i instanceof gn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&uE(o,i.filters[l]),!0):!1}(t,e):void Q(19439)}function hE(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${Ss(n.value)}`}(t):t instanceof gn?function(n){return n.op.toString()+" {"+n.getFilters().map(hE).join(" ,")+"}"}(t):"Filter"}class Ek extends Ue{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ik extends Ue{constructor(e,n){super(e,"in",n),this.keys=dE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Tk extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=dE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class Sk extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yf(n)&&ca(n.arrayValue,this.value)}}class Ak extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ca(this.value.arrayValue,n)}}class Ck extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(ca(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ca(this.value.arrayValue,n)}}class Pk extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ca(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function U_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Rk(t,e,n,r,i,s,o)}function Xf(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ad(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Kc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ss(r)).join(",")),e.Te=n}return e.Te}function Jf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!vk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!uE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!F_(t.startAt,e.startAt)&&F_(t.endAt,e.endAt)}function Cd(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function kk(t,e,n,r,i,s,o,l){return new Ms(t,e,n,r,i,s,o,l)}function Zf(t){return new Ms(t)}function B_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fE(t){return t.collectionGroup!==null}function Mo(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ke(nt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new ua(s,r))}),n.has(nt.keyField().canonicalString())||e.Ie.push(new ua(nt.keyField(),r))}return e.Ie}function kn(t){const e=X(t);return e.Ee||(e.Ee=Nk(e,Mo(t))),e.Ee}function Nk(t,e){if(t.limitType==="F")return U_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ua(i.field,s)});const n=t.endAt?new fc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fc(t.startAt.position,t.startAt.inclusive):null;return U_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Pd(t,e){const n=t.filters.concat([e]);return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Rd(t,e,n){return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yc(t,e){return Jf(kn(t),kn(e))&&t.limitType===e.limitType}function pE(t){return`${Xf(kn(t))}|lt:${t.limitType}`}function ji(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>hE(i)).join(", ")}]`),Kc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ss(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ss(i)).join(",")),`Target(${r})`}(kn(t))}; limitType=${t.limitType})`}function Xc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Mo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,c){const u=j_(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Mo(r),i)||r.endAt&&!function(o,l,c){const u=j_(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Mo(r),i))}(t,e)}function xk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mE(t){return(e,n)=>{let r=!1;for(const i of Mo(t)){const s=Dk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Dk(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const c=o.data.field(s),u=l.data.field(s);return c!==null&&u!==null?Ts(c,u):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Gr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return X1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=new Re(W.comparator);function Jn(){return bk}const gE=new Re(W.comparator);function Io(...t){let e=gE;for(const n of t)e=e.insert(n.key,n);return e}function _E(t){let e=gE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function li(){return jo()}function yE(){return jo()}function jo(){return new Ri(t=>t.toString(),(t,e)=>t.isEqual(e))}const Vk=new Re(W.comparator),Ok=new Ke(W.comparator);function se(...t){let e=Ok;for(const n of t)e=e.add(n);return e}const Lk=new Ke(ie);function Mk(){return Lk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uc(e)?"-0":e}}function vE(t){return{integerValue:""+t}}function jk(t,e){return dk(e)?vE(e):ep(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this._=void 0}}function Fk(t,e,n){return t instanceof pc?function(i,s){const o={fields:{[eE]:{stringValue:Z1},[nE]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qf(s)&&(s=Qc(s)),s&&(o.fields[tE]=s),{mapValue:o}}(n,e):t instanceof ha?EE(t,e):t instanceof da?IE(t,e):function(i,s){const o=wE(i,s),l=$_(o)+$_(i.Ae);return Sd(o)&&Sd(i.Ae)?vE(l):ep(i.serializer,l)}(t,e)}function Uk(t,e,n){return t instanceof ha?EE(t,e):t instanceof da?IE(t,e):n}function wE(t,e){return t instanceof mc?function(r){return Sd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class pc extends Jc{}class ha extends Jc{constructor(e){super(),this.elements=e}}function EE(t,e){const n=TE(e);for(const r of t.elements)n.some(i=>On(i,r))||n.push(r);return{arrayValue:{values:n}}}class da extends Jc{constructor(e){super(),this.elements=e}}function IE(t,e){let n=TE(e);for(const r of t.elements)n=n.filter(i=>!On(i,r));return{arrayValue:{values:n}}}class mc extends Jc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function $_(t){return Ve(t.integerValue||t.doubleValue)}function TE(t){return Yf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Bk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ha&&i instanceof ha||r instanceof da&&i instanceof da?Is(r.elements,i.elements,On):r instanceof mc&&i instanceof mc?On(r.Ae,i.Ae):r instanceof pc&&i instanceof pc}(t.transform,e.transform)}class $k{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zc{}function SE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new tp(t.key,Jt.none()):new Sa(t.key,t.data,Jt.none());{const n=t.data,r=Rt.empty();let i=new Ke(nt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Kr(t.key,r,new jt(i.toArray()),Jt.none())}}function zk(t,e,n){t instanceof Sa?function(i,s,o){const l=i.value.clone(),c=q_(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Kr?function(i,s,o){if(!kl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=q_(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(AE(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Fo(t,e,n,r){return t instanceof Sa?function(s,o,l,c){if(!kl(s.precondition,o))return l;const u=s.value.clone(),f=H_(s.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Kr?function(s,o,l,c){if(!kl(s.precondition,o))return l;const u=H_(s.fieldTransforms,c,o),f=o.data;return f.setAll(AE(s)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return kl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function qk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=wE(r.transform,i||null);s!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,s))}return n||null}function z_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Is(r,i,(s,o)=>Bk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Sa extends Zc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kr extends Zc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function AE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function q_(t,e,n){const r=new Map;ce(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Uk(o,l,n[i]))}return r}function H_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Fk(s,o,e))}return r}class tp extends Zc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hk extends Zc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&zk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const c=SE(o,l);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Is(this.mutations,e.mutations,(n,r)=>z_(n,r))&&Is(this.baseMutations,e.baseMutations,(n,r)=>z_(n,r))}}class np{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Vk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new np(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,ae;function Qk(t){switch(t){case M.OK:return Q(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function CE(t){if(t===void 0)return Xn("GRPC error has no .code"),M.UNKNOWN;switch(t){case je.OK:return M.OK;case je.CANCELLED:return M.CANCELLED;case je.UNKNOWN:return M.UNKNOWN;case je.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case je.INTERNAL:return M.INTERNAL;case je.UNAVAILABLE:return M.UNAVAILABLE;case je.UNAUTHENTICATED:return M.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case je.NOT_FOUND:return M.NOT_FOUND;case je.ALREADY_EXISTS:return M.ALREADY_EXISTS;case je.PERMISSION_DENIED:return M.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case je.ABORTED:return M.ABORTED;case je.OUT_OF_RANGE:return M.OUT_OF_RANGE;case je.UNIMPLEMENTED:return M.UNIMPLEMENTED;case je.DATA_LOSS:return M.DATA_LOSS;default:return Q(39323,{code:t})}}(ae=je||(je={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=new Dr([4294967295,4294967295],0);function W_(t){const e=Yk().encode(t),n=new U1;return n.update(e),new Uint8Array(n.digest())}function G_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Dr([n,r],0),new Dr([i,s],0)]}class rp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new To(`Invalid padding: ${n}`);if(r<0)throw new To(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new To(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new To(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Dr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Dr.fromNumber(r)));return i.compare(Xk)===1&&(i=new Dr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=W_(e),[r,i]=G_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new rp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=W_(e),[r,i]=G_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class To extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Aa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new eu(Y.min(),i,new Re(ie),Jn(),se())}}class Aa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Aa(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class PE{constructor(e,n){this.targetId=e,this.Ce=n}}class RE{constructor(e,n,r=st.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class K_{constructor(){this.ve=0,this.Fe=Q_(),this.Me=st.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),n=se(),r=se();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q(38017,{changeType:s})}}),new Aa(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Q_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ce(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Jk{constructor(e){this.Ge=e,this.ze=new Map,this.je=Jn(),this.Je=ll(),this.He=ll(),this.Ye=new Re(ie)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Cd(s))if(r===0){const o=new W(s.path);this.et(n,o,ft.newNoDocument(o,Y.min()))}else ce(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Fr(r).toUint8Array()}catch(c){if(c instanceof J1)return Es("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new rp(o,i,s)}catch(c){return Es(c instanceof To?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Cd(l.target)){const c=new W(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,ft.newNoDocument(c,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=se();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new eu(e,n,this.Ye,this.je,r);return this.je=Jn(),this.Je=ll(),this.He=ll(),this.Ye=new Re(ie),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new K_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ke(ie),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ke(ie),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new K_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ll(){return new Re(W.comparator)}function Q_(){return new Re(W.comparator)}const Zk={asc:"ASCENDING",desc:"DESCENDING"},eN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tN={and:"AND",or:"OR"};class nN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kd(t,e){return t.useProto3Json||Kc(e)?e:{value:e}}function gc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function rN(t,e){return gc(t,e.toTimestamp())}function Nn(t){return ce(!!t,49232),Y.fromTimestamp(function(n){const r=jr(n);return new he(r.seconds,r.nanos)}(t))}function ip(t,e){return Nd(t,e).canonicalString()}function Nd(t,e){const n=function(i){return new me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function NE(t){const e=me.fromString(t);return ce(OE(e),10190,{key:e.toString()}),e}function xd(t,e){return ip(t.databaseId,e.path)}function dh(t,e){const n=NE(e);if(n.get(1)!==t.databaseId.projectId)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(DE(n))}function xE(t,e){return ip(t.databaseId,e)}function iN(t){const e=NE(t);return e.length===4?me.emptyPath():DE(e)}function Dd(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function DE(t){return ce(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Y_(t,e,n){return{name:xd(t,e),fields:n.value.mapValue.fields}}function sN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Q(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,f){return u.useProto3Json?(ce(f===void 0||typeof f=="string",58123),st.fromBase64String(f||"")):(ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),st.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?M.UNKNOWN:CE(u.code);return new z(f,u.message||"")}(o);n=new RE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=dh(t,r.document.name),s=Nn(r.document.updateTime),o=r.document.createTime?Nn(r.document.createTime):Y.min(),l=new Rt({mapValue:{fields:r.document.fields}}),c=ft.newFoundDocument(i,s,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Nl(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=dh(t,r.document),s=r.readTime?Nn(r.readTime):Y.min(),o=ft.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Nl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=dh(t,r.document),s=r.removedTargetIds||[];n=new Nl([],s,i,null)}else{if(!("filter"in e))return Q(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Kk(i,s),l=r.targetId;n=new PE(l,o)}}return n}function oN(t,e){let n;if(e instanceof Sa)n={update:Y_(t,e.key,e.value)};else if(e instanceof tp)n={delete:xd(t,e.key)};else if(e instanceof Kr)n={update:Y_(t,e.key,e.data),updateMask:mN(e.fieldMask)};else{if(!(e instanceof Hk))return Q(16599,{Vt:e.type});n={verify:xd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof pc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ha)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof da)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof mc)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:rN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(t,e.precondition)),n}function aN(t,e){return t&&t.length>0?(ce(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Nn(i.updateTime):Nn(s);return o.isEqual(Y.min())&&(o=Nn(s)),new $k(o,i.transformResults||[])}(n,e))):[]}function lN(t,e){return{documents:[xE(t,e.path)]}}function cN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xE(t,i);const s=function(u){if(u.length!==0)return VE(gn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:Fi(g.field),direction:dN(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=kd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:i}}function uN(t){let e=iN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=bE(m);return g instanceof gn&&cE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(R){return new ua(Ui(R.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Kc(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(m){const g=!!m.before,T=m.values||[];return new fc(T,g)}(n.startAt));let u=null;return n.endAt&&(u=function(m){const g=!m.before,T=m.values||[];return new fc(T,g)}(n.endAt)),kk(e,i,o,s,l,"F",c,u)}function hN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ui(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ui(n.unaryFilter.field);return Ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ui(n.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ui(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(Ui(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return gn.create(n.compositeFilter.filters.map(r=>bE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function dN(t){return Zk[t]}function fN(t){return eN[t]}function pN(t){return tN[t]}function Fi(t){return{fieldPath:t.canonicalString()}}function Ui(t){return nt.fromServerFormat(t.fieldPath)}function VE(t){return t instanceof Ue?function(n){if(n.op==="=="){if(M_(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NAN"}};if(L_(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(M_(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NAN"}};if(L_(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fi(n.field),op:fN(n.op),value:n.value}}}(t):t instanceof gn?function(n){const r=n.getFilters().map(i=>VE(i));return r.length===1?r[0]:{compositeFilter:{op:pN(n.op),filters:r}}}(t):Q(54877,{filter:t})}function mN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function OE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=st.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e){this.yt=e}}function _N(t){const e=uN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(){this.Cn=new vN}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Mr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class vN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},LE=41943040;class Ct{static withCacheSize(e){return new Ct(e,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(LE,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new As(0)}static cr(){return new As(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="LruGarbageCollector",wN=1048576;function Z_([t,e],[n,r]){const i=ie(t,n);return i===0?ie(e,r):i}class EN{constructor(e){this.Ir=e,this.buffer=new Ke(Z_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Z_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class IN{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){q(J_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ls(n)?q(J_,"Ignoring IndexedDB error during garbage collection: ",n):await Os(n)}await this.Vr(3e5)})}}class TN{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Gc.ce);const r=new EN(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(X_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),X_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(u=Date.now(),Mi()<=re.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function SN(t,e){return new TN(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(){this.changes=new Ri(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Fo(r.mutation,i,jt.empty(),he.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=li();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Io();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=li();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Jn();const o=jo(),l=function(){return jo()}();return n.forEach((c,u)=>{const f=r.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof Kr)?s=s.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Fo(f.mutation,u,f.mutation.getFieldMask(),he.now())):o.set(u.key,jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>l.set(u,new CN(f,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,n){const r=jo();let i=new Re((o,l)=>o-l),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||jt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const m=(i.get(l.batchId)||se()).add(c);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,m=yE();f.forEach(g=>{if(!s.has(g)){const T=SE(n.get(g),r.get(g));T!==null&&m.set(g,T),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,m))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):fE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(li());let l=oa,c=s;return o.next(u=>j.forEach(u,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,se())).next(f=>({batchId:l,changes:_E(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Io();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Io();return this.indexManager.getCollectionParents(e,s).next(l=>j.forEach(l,c=>{const u=function(m,g){return new Ms(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,ft.newInvalidDocument(f)))});let l=Io();return o.forEach((c,u)=>{const f=s.get(c);f!==void 0&&Fo(f.mutation,u,jt.empty(),he.now()),Xc(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return j.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Nn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:_N(i.bundledQuery),readTime:Nn(i.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(){this.overlays=new Re(W.comparator),this.qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=li();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=li(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Re((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=s.get(u.largestBatchId);f===null&&(f=li(),s=s.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=li(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=i)););return j.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Gk(n,r));let s=this.qr.get(n);s===void 0&&(s=se(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this.Qr=new Ke(Ye.$r),this.Ur=new Ke(Ye.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Ye(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new W(new me([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new W(new me([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=se();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return W.comparator(e.key,n.key)||ie(e.Yr,n.Yr)}static Kr(e,n){return ie(e.Yr,n.Yr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ke(Ye.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Wk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Ye(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?Kf:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(ie);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),j.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new W(s),0);let l=new Ke(ie);return this.Zr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.Yr)),!0)},o),j.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return j.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Ye(n,0),i=this.Zr.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e){this.ri=e,this.docs=function(){return new Re(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=Jn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ft.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Jn();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||lk(ak(f),r)<=0||(i.has(f.key)||Xc(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q(9500)}ii(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bN(this)}getSize(e){return j.resolve(this.size)}}class bN extends AN{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.persistence=e,this.si=new Ri(n=>Xf(n),Jf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.oi=0,this._i=new sp,this.targetCount=0,this.ai=As.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),j.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new As(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Pr(n),j.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n){this.ui={},this.overlays={},this.ci=new Gc(0),this.li=!1,this.li=!0,this.hi=new NN,this.referenceDelegate=e(this),this.Pi=new VN(this),this.indexManager=new yN,this.remoteDocumentCache=function(i){return new DN(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new gN(n),this.Ii=new RN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new xN(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new ON(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return j.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class ON extends uk{constructor(e){super(),this.currentSequenceNumber=e}}class op{constructor(e){this.persistence=e,this.Ri=new sp,this.Vi=null}static mi(e){return new op(e)}get fi(){if(this.Vi)return this.Vi;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,r=>{const i=W.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class _c{constructor(e,n){this.persistence=e,this.pi=new Ri(r=>fk(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=SN(this,n)}static mi(e,n){return new _c(e,n)}Ei(){}di(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return j.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?j.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Pl(e.data.value)),n}br(e,n,r){return j.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return j.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ap(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return fA()?8:hk(mt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new LN;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(Mi()<=re.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",ji(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(Mi()<=re.DEBUG&&q("QueryEngine","Query:",ji(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Mi()<=re.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",ji(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kn(n))):j.resolve())}ys(e,n){if(B_(n))return j.resolve(null);let r=kn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Rd(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,Rd(n,null,"F")):this.vs(e,u,n,c)}))})))}ws(e,n,r,i){return B_(n)||i.isEqual(Y.min())?j.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?j.resolve(null):(Mi()<=re.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ji(n)),this.vs(e,o,n,ok(i,oa)).next(l=>l))})}Ds(e,n){let r=new Ke(mE(e));return n.forEach((i,s)=>{Xc(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return Mi()<=re.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",ji(n)),this.ps.getDocumentsMatchingQuery(e,n,Mr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="LocalStore",jN=3e8;class FN{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Re(ie),this.xs=new Ri(s=>Xf(s),Jf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PN(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function UN(t,e,n,r){return new FN(t,e,n,r)}async function jE(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let c=se();for(const u of i){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of s){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:l}))})})}function BN(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const m=u.batch,g=m.keys();let T=j.resolve();return g.forEach(R=>{T=T.next(()=>f.getEntry(c,R)).next(N=>{const b=u.docVersions.get(R);ce(b!==null,48541),N.version.compareTo(b)<0&&(m.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),f.addEntry(N)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=se();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function FE(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function $N(t,e){const n=X(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.Pi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(s,f.addedDocuments,m)));let T=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?T=T.withResumeToken(st.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),i=i.insert(m,T),function(N,b,w){return N.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=jN?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,T,f)&&l.push(n.Pi.updateTargetData(s,T))});let c=Jn(),u=se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(zN(s,o,e.documentUpdates).next(f=>{c=f.ks,u=f.qs})),!r.isEqual(Y.min())){const f=n.Pi.getLastRemoteSnapshotVersion(s).next(m=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return j.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Ms=i,s))}function zN(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Jn();return n.forEach((l,c)=>{const u=s.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):q(lp,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{ks:o,qs:i}})}function qN(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Kf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function HN(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function bd(t,e,n){const r=X(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ls(o))throw o;q(lp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function ey(t,e,n){const r=X(t);let i=Y.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const m=X(c),g=m.xs.get(f);return g!==void 0?j.resolve(m.Ms.get(g)):m.Pi.getTargetData(u,f)}(r,o,kn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:se())).next(l=>(WN(r,xk(e),l),{documents:l,Qs:s})))}function WN(t,e,n){let r=t.Os.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class ty{constructor(){this.activeTargetIds=Mk()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GN{constructor(){this.Mo=new ty,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ty,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="ConnectivityMonitor";class ry{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){q(ny,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){q(ny,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl=null;function Vd(){return cl===null?cl=function(){return 268435456+Math.round(2147483648*Math.random())}():cl++,"0x"+cl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="RestConnection",QN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class YN{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===hc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Vd(),l=this.zo(e,n.toUriEncodedString());q(fh,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,i,s);const{host:u}=new URL(l),f=Ns(u);return this.Jo(e,l,c,r,f).then(m=>(q(fh,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Es(fh,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=QN[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection";class JN extends YN{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Vd();return new Promise((l,c)=>{const u=new B1;u.setWithCredentials(!0),u.listenOnce($1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Cl.NO_ERROR:const m=u.getResponseJson();q(ct,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Cl.TIMEOUT:q(ct,`RPC '${e}' ${o} timed out`),c(new z(M.DEADLINE_EXCEEDED,"Request time out"));break;case Cl.HTTP_ERROR:const g=u.getStatus();if(q(ct,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let T=u.getResponseJson();Array.isArray(T)&&(T=T[0]);const R=T==null?void 0:T.error;if(R&&R.status&&R.message){const N=function(w){const y=w.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(y)>=0?y:M.UNKNOWN}(R.status);c(new z(N,R.message))}else c(new z(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new z(M.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{q(ct,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);q(ct,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",f,r,15)})}T_(e,n,r){const i=Vd(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=H1(),l=q1(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=s.join("");q(ct,`Creating RPC '${e}' stream ${i}: ${f}`,c);const m=o.createWebChannel(f,c);this.I_(m);let g=!1,T=!1;const R=new XN({Yo:b=>{T?q(ct,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(g||(q(ct,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),q(ct,`RPC '${e}' stream ${i} sending:`,b),m.send(b))},Zo:()=>m.close()}),N=(b,w,y)=>{b.listen(w,I=>{try{y(I)}catch(k){setTimeout(()=>{throw k},0)}})};return N(m,Eo.EventType.OPEN,()=>{T||(q(ct,`RPC '${e}' stream ${i} transport opened.`),R.o_())}),N(m,Eo.EventType.CLOSE,()=>{T||(T=!0,q(ct,`RPC '${e}' stream ${i} transport closed`),R.a_(),this.E_(m))}),N(m,Eo.EventType.ERROR,b=>{T||(T=!0,Es(ct,`RPC '${e}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),R.a_(new z(M.UNAVAILABLE,"The operation could not be completed")))}),N(m,Eo.EventType.MESSAGE,b=>{var w;if(!T){const y=b.data[0];ce(!!y,16349);const I=y,k=(I==null?void 0:I.error)||((w=I[0])==null?void 0:w.error);if(k){q(ct,`RPC '${e}' stream ${i} received error:`,k);const O=k.status;let L=function(S){const C=je[S];if(C!==void 0)return CE(C)}(O),E=k.message;L===void 0&&(L=M.INTERNAL,E="Unknown error status: "+O+" with message "+k.message),T=!0,R.a_(new z(L,E)),m.close()}else q(ct,`RPC '${e}' stream ${i} received:`,y),R.u_(y)}}),N(l,z1.STAT_EVENT,b=>{b.stat===Ed.PROXY?q(ct,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Ed.NOPROXY&&q(ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.__()},0),R}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function ph(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t){return new nN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="PersistentStream";class BE{constructor(e,n,r,i,s,o,l,c){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new UE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new z(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(iy,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(q(iy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZN extends BE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=sN(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Nn(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Dd(this.serializer),n.addTarget=function(s,o){let l;const c=o.target;if(l=Cd(c)?{documents:lN(s,c)}:{query:cN(s,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=kE(s,o.resumeToken);const u=kd(s,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=gc(s,o.snapshotVersion.toTimestamp());const u=kd(s,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=hN(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Dd(this.serializer),n.removeTarget=e,this.q_(n)}}class ex extends BE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=aN(e.writeResults,e.commitTime),r=Nn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Dd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>oN(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{}class nx extends tx{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Nd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(M.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Nd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class rx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Xn(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="RemoteStore";class ix{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ki(this)&&(q(wi,"Restarting streams for network reachability change."),await async function(c){const u=X(c);u.Ea.add(4),await Ca(u),u.Ra.set("Unknown"),u.Ea.delete(4),await nu(u)}(this))})}),this.Ra=new rx(r,i)}}async function nu(t){if(ki(t))for(const e of t.da)await e(!0)}async function Ca(t){for(const e of t.da)await e(!1)}function $E(t,e){const n=X(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),dp(n)?hp(n):js(n).O_()&&up(n,e))}function cp(t,e){const n=X(t),r=js(n);n.Ia.delete(e),r.O_()&&zE(n,e),n.Ia.size===0&&(r.O_()?r.L_():ki(n)&&n.Ra.set("Unknown"))}function up(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}js(t).Y_(e)}function zE(t,e){t.Va.Ue(e),js(t).Z_(e)}function hp(t){t.Va=new Jk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),js(t).start(),t.Ra.ua()}function dp(t){return ki(t)&&!js(t).x_()&&t.Ia.size>0}function ki(t){return X(t).Ea.size===0}function qE(t){t.Va=void 0}async function sx(t){t.Ra.set("Online")}async function ox(t){t.Ia.forEach((e,n)=>{up(t,e)})}async function ax(t,e){qE(t),dp(t)?(t.Ra.ha(e),hp(t)):t.Ra.set("Unknown")}async function lx(t,e,n){if(t.Ra.set("Online"),e instanceof RE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){q(wi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yc(t,r)}else if(e instanceof Nl?t.Va.Ze(e):e instanceof PE?t.Va.st(e):t.Va.tt(e),!n.isEqual(Y.min()))try{const r=await FE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.Ia.get(u);f&&s.Ia.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=s.Ia.get(c);if(!f)return;s.Ia.set(c,f.withResumeToken(st.EMPTY_BYTE_STRING,f.snapshotVersion)),zE(s,c);const m=new wr(f.target,c,u,f.sequenceNumber);up(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q(wi,"Failed to raise snapshot:",r),await yc(t,r)}}async function yc(t,e,n){if(!Ls(e))throw e;t.Ea.add(1),await Ca(t),t.Ra.set("Offline"),n||(n=()=>FE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(wi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await nu(t)})}function HE(t,e){return e().catch(n=>yc(t,n,e))}async function ru(t){const e=X(t),n=Br(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Kf;for(;cx(e);)try{const i=await qN(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,ux(e,i)}catch(i){await yc(e,i)}WE(e)&&GE(e)}function cx(t){return ki(t)&&t.Ta.length<10}function ux(t,e){t.Ta.push(e);const n=Br(t);n.O_()&&n.X_&&n.ea(e.mutations)}function WE(t){return ki(t)&&!Br(t).x_()&&t.Ta.length>0}function GE(t){Br(t).start()}async function hx(t){Br(t).ra()}async function dx(t){const e=Br(t);for(const n of t.Ta)e.ea(n.mutations)}async function fx(t,e,n){const r=t.Ta.shift(),i=np.from(r,e,n);await HE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ru(t)}async function px(t,e){e&&Br(t).X_&&await async function(r,i){if(function(o){return Qk(o)&&o!==M.ABORTED}(i.code)){const s=r.Ta.shift();Br(r).B_(),await HE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ru(r)}}(t,e),WE(t)&&GE(t)}async function sy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),q(wi,"RemoteStore received new credentials");const r=ki(n);n.Ea.add(3),await Ca(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await nu(n)}async function mx(t,e){const n=X(t);e?(n.Ea.delete(2),await nu(n)):e||(n.Ea.add(2),await Ca(n),n.Ra.set("Unknown"))}function js(t){return t.ma||(t.ma=function(n,r,i){const s=X(n);return s.sa(),new ZN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:sx.bind(null,t),t_:ox.bind(null,t),r_:ax.bind(null,t),H_:lx.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),dp(t)?hp(t):t.Ra.set("Unknown")):(await t.ma.stop(),qE(t))})),t.ma}function Br(t){return t.fa||(t.fa=function(n,r,i){const s=X(n);return s.sa(),new ex(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:hx.bind(null,t),r_:px.bind(null,t),ta:dx.bind(null,t),na:fx.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await ru(t)):(await t.fa.stop(),t.Ta.length>0&&(q(wi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new fp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pp(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),Ls(t))return new z(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{static emptySet(e){return new cs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Io(),this.sortedSet=new Re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.ga=new Re(W.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Q(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Cs{constructor(e,n,r,i,s,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Cs(e,n,cs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class _x{constructor(){this.queries=ay(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=ay(),s.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new z(M.ABORTED,"Firestore shutting down"))}}function ay(){return new Ri(t=>pE(t),Yc)}async function KE(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new gx,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=pp(o,`Initialization of query '${ji(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&mp(n)}async function QE(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function yx(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&mp(n)}function vx(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function mp(t){t.Ca.forEach(e=>{e.next()})}var Od,ly;(ly=Od||(Od={})).Ma="default",ly.Cache="cache";class YE{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Od.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.key=e}}class JE{constructor(e){this.key=e}}class wx{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=se(),this.mutatedKeys=se(),this.eu=mE(e),this.tu=new cs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new oy,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),T=Xc(this.query,m)?m:null,R=!!g&&this.mutatedKeys.has(g.key),N=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let b=!1;g&&T?g.data.isEqual(T.data)?R!==N&&(r.track({type:3,doc:T}),b=!0):this.su(g,T)||(r.track({type:2,doc:T}),b=!0,(c&&this.eu(T,c)>0||u&&this.eu(T,u)<0)&&(l=!0)):!g&&T?(r.track({type:0,doc:T}),b=!0):g&&!T&&(r.track({type:1,doc:g}),b=!0,(c||u)&&(l=!0)),b&&(T?(o=o.add(T),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(T,R){const N=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Rt:b})}};return N(T)-N(R)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],c=this.Xa.size===0&&this.current&&!i?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Cs(this.query,e.tu,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new oy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=se(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new JE(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new XE(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=se();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Cs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const gp="SyncEngine";class Ex{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ix{constructor(e){this.key=e,this.hu=!1}}class Tx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ri(l=>pE(l),Yc),this.Iu=new Map,this.Eu=new Set,this.du=new Re(W.comparator),this.Au=new Map,this.Ru=new sp,this.Vu={},this.mu=new Map,this.fu=As.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Sx(t,e,n=!0){const r=i0(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await ZE(r,e,n,!0),i}async function Ax(t,e){const n=i0(t);await ZE(n,e,!0,!1)}async function ZE(t,e,n,r){const i=await HN(t.localStore,kn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Cx(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&$E(t.remoteStore,i),l}async function Cx(t,e,n,r,i){t.pu=(m,g,T)=>async function(N,b,w,y){let I=b.view.ru(w);I.Cs&&(I=await ey(N.localStore,b.query,!1).then(({documents:E})=>b.view.ru(E,I)));const k=y&&y.targetChanges.get(b.targetId),O=y&&y.targetMismatches.get(b.targetId)!=null,L=b.view.applyChanges(I,N.isPrimaryClient,k,O);return uy(N,b.targetId,L.au),L.snapshot}(t,m,g,T);const s=await ey(t.localStore,e,!0),o=new wx(e,s.Qs),l=o.ru(s.documents),c=Aa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);uy(t,n,u.au);const f=new Ex(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function Px(t,e,n){const r=X(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Yc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await bd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&cp(r.remoteStore,i.targetId),Ld(r,i.targetId)}).catch(Os)):(Ld(r,i.targetId),await bd(r.localStore,i.targetId,!0))}async function Rx(t,e){const n=X(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),cp(n.remoteStore,r.targetId))}async function kx(t,e,n){const r=Lx(t);try{const i=await function(o,l){const c=X(o),u=he.now(),f=l.reduce((T,R)=>T.add(R.key),se());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",T=>{let R=Jn(),N=se();return c.Ns.getEntries(T,f).next(b=>{R=b,R.forEach((w,y)=>{y.isValidDocument()||(N=N.add(w))})}).next(()=>c.localDocuments.getOverlayedDocuments(T,R)).next(b=>{m=b;const w=[];for(const y of l){const I=qk(y,m.get(y.key).overlayedDocument);I!=null&&w.push(new Kr(y.key,I,oE(I.value.mapValue),Jt.exists(!0)))}return c.mutationQueue.addMutationBatch(T,u,w,l)}).next(b=>{g=b;const w=b.applyToLocalDocumentSet(m,N);return c.documentOverlayCache.saveOverlays(T,b.batchId,w)})}).then(()=>({batchId:g.batchId,changes:_E(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new Re(ie)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u}(r,i.batchId,n),await Pa(r,i.changes),await ru(r.remoteStore)}catch(i){const s=pp(i,"Failed to persist write");n.reject(s)}}async function e0(t,e){const n=X(t);try{const r=await $N(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ce(o.hu,14607):i.removedDocuments.size>0&&(ce(o.hu,42227),o.hu=!1))}),await Pa(n,r,e)}catch(r){await Os(r)}}function cy(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=X(o);c.onlineState=l;let u=!1;c.queries.forEach((f,m)=>{for(const g of m.Sa)g.va(l)&&(u=!0)}),u&&mp(c)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Nx(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Re(W.comparator);o=o.insert(s,ft.newNoDocument(s,Y.min()));const l=se().add(s),c=new eu(Y.min(),new Map,new Re(ie),o,l);await e0(r,c),r.du=r.du.remove(s),r.Au.delete(e),_p(r)}else await bd(r.localStore,e,!1).then(()=>Ld(r,e,n)).catch(Os)}async function xx(t,e){const n=X(t),r=e.batch.batchId;try{const i=await BN(n.localStore,e);n0(n,r,null),t0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pa(n,i)}catch(i){await Os(i)}}async function Dx(t,e,n){const r=X(t);try{const i=await function(o,l){const c=X(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(m=>(ce(m!==null,37113),f=m.keys(),c.mutationQueue.removeMutationBatch(u,m))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);n0(r,e,n),t0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pa(r,i)}catch(i){await Os(i)}}function t0(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function n0(t,e,n){const r=X(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Ld(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||r0(t,r)})}function r0(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(cp(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),_p(t))}function uy(t,e,n){for(const r of n)r instanceof XE?(t.Ru.addReference(r.key,e),bx(t,r)):r instanceof JE?(q(gp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||r0(t,r.key)):Q(19791,{wu:r})}function bx(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(q(gp,"New document in limbo: "+n),t.Eu.add(r),_p(t))}function _p(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new W(me.fromString(e)),r=t.fu.next();t.Au.set(r,new Ix(n)),t.du=t.du.insert(n,r),$E(t.remoteStore,new wr(kn(Zf(n.path)),r,"TargetPurposeLimboResolution",Gc.ce))}}async function Pa(t,e,n){const r=X(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const m=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(u){i.push(u);const m=ap.As(c.targetId,u);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(c,u){const f=X(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>j.forEach(u,g=>j.forEach(g.Es,T=>f.persistence.referenceDelegate.addReference(m,g.targetId,T)).next(()=>j.forEach(g.ds,T=>f.persistence.referenceDelegate.removeReference(m,g.targetId,T)))))}catch(m){if(!Ls(m))throw m;q(lp,"Failed to update sequence numbers: "+m)}for(const m of u){const g=m.targetId;if(!m.fromCache){const T=f.Ms.get(g),R=T.snapshotVersion,N=T.withLastLimboFreeSnapshotVersion(R);f.Ms=f.Ms.insert(g,N)}}}(r.localStore,s))}async function Vx(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){q(gp,"User change. New user:",e.toKey());const r=await jE(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(c=>{c.reject(new z(M.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pa(n,r.Ls)}}function Ox(t,e){const n=X(t),r=n.Au.get(e);if(r&&r.hu)return se().add(r.key);{let i=se();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function i0(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=e0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ox.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Nx.bind(null,e),e.Pu.H_=yx.bind(null,e.eventManager),e.Pu.yu=vx.bind(null,e.eventManager),e}function Lx(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Dx.bind(null,e),e}class vc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return UN(this.persistence,new MN,e.initialUser,this.serializer)}Cu(e){return new ME(op.mi,this.serializer)}Du(e){return new GN}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vc.provider={build:()=>new vc};class Mx extends vc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ce(this.persistence.referenceDelegate instanceof _c,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new IN(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new ME(r=>_c.mi(r,n),this.serializer)}}class Md{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vx.bind(null,this.syncEngine),await mx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _x}()}createDatastore(e){const n=tu(e.databaseInfo.databaseId),r=function(s){return new JN(s)}(e.databaseInfo);return function(s,o,l,c){return new nx(s,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new ix(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>cy(this.syncEngine,n,0),function(){return ry.v()?new ry:new KN}())}createSyncEngine(e,n){return function(i,s,o,l,c,u,f){const m=new Tx(i,s,o,l,c,u);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);q(wi,"RemoteStore shutting down."),s.Ea.add(5),await Ca(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Md.provider={build:()=>new Md};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="FirestoreClient";class jx{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ht.UNAUTHENTICATED,this.clientId=Gf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q($r,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q($r,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mh(t,e){t.asyncQueue.verifyOperationInProgress(),q($r,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await jE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function hy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Fx(t);q($r,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>sy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>sy(e.remoteStore,i)),t._onlineComponents=e}async function Fx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q($r,"Using user provided OfflineComponentProvider");try{await mh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Es("Error using user provided cache. Falling back to memory cache: "+n),await mh(t,new vc)}}else q($r,"Using default OfflineComponentProvider"),await mh(t,new Mx(void 0));return t._offlineComponents}async function o0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q($r,"Using user provided OnlineComponentProvider"),await hy(t,t._uninitializedComponentsProvider._online)):(q($r,"Using default OnlineComponentProvider"),await hy(t,new Md))),t._onlineComponents}function Ux(t){return o0(t).then(e=>e.syncEngine)}async function a0(t){const e=await o0(t),n=e.eventManager;return n.onListen=Sx.bind(null,e.syncEngine),n.onUnlisten=Px.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Ax.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Rx.bind(null,e.syncEngine),n}function Bx(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const f=new s0({next:g=>{f.Nu(),o.enqueueAndForget(()=>QE(s,m));const T=g.docs.has(l);!T&&g.fromCache?u.reject(new z(M.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&g.fromCache&&c&&c.source==="server"?u.reject(new z(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),m=new YE(Zf(l.path),f,{includeMetadataChanges:!0,qa:!0});return KE(s,m)}(await a0(t),t.asyncQueue,e,n,r)),r.promise}function $x(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const f=new s0({next:g=>{f.Nu(),o.enqueueAndForget(()=>QE(s,m)),g.fromCache&&c.source==="server"?u.reject(new z(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),m=new YE(l,f,{includeMetadataChanges:!0,qa:!0});return KE(s,m)}(await a0(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0="firestore.googleapis.com",fy=!0;class py{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=c0,this.ssl=fy}else this.host=e.host,this.ssl=e.ssl??fy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=LE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wN)throw new z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=l0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class iu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new py({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new py(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new QR;switch(r.type){case"firstParty":return new ZR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=dy.get(n);r&&(q("ComponentProvider","Removing Datastore"),dy.delete(n),r.terminate())}(this),Promise.resolve()}}function zx(t,e,n,r={}){var u;t=mn(t,iu);const i=Ns(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Yw(`https://${l}`),Xw("Firestore",!0)),s.host!==c0&&s.host!==l&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...s,host:l,ssl:i,emulatorOptions:r};if(!Lr(c,o)&&(t._setSettings(c),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=ht.MOCK_USER;else{f=sA(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new z(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new ht(g)}t._authCredentials=new YR(new G1(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ni(this.firestore,e,this._query)}}class Le{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new br(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ta(n,Le._jsonSchema))return new Le(e,r||null,new W(me.fromString(n.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:Be("string",Le._jsonSchemaVersion),referencePath:Be("string")};class br extends Ni{constructor(e,n,r){super(e,n,Zf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new W(e))}withConverter(e){return new br(this.firestore,e,this._path)}}function tn(t,e,...n){if(t=Me(t),K1("collection","path",e),t instanceof iu){const r=me.fromString(e,...n);return P_(r),new br(t,null,r)}{if(!(t instanceof Le||t instanceof br))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return P_(r),new br(t.firestore,null,r)}}function Te(t,e,...n){if(t=Me(t),arguments.length===1&&(e=Gf.newId()),K1("doc","path",e),t instanceof iu){const r=me.fromString(e,...n);return C_(r),new Le(t,null,new W(r))}{if(!(t instanceof Le||t instanceof br))throw new z(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return C_(r),new Le(t.firestore,t instanceof br?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="AsyncQueue";class gy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new UE(this,"async_queue_retry"),this._c=()=>{const r=ph();r&&q(my,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=ph();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ph();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new qn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ls(e))throw e;q(my,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Xn("INTERNAL UNHANDLED ERROR: ",_y(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=fp.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Q(47125,{Pc:_y(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function _y(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class xi extends iu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new gy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gy(e),this._firestoreClient=void 0,await e}}}function qx(t,e){const n=typeof t=="object"?t:Mf(),r=typeof t=="string"?t:hc,i=Ci(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=rA("firestore");s&&zx(i,...s)}return i}function yp(t){if(t._terminated)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Hx(t),t._firestoreClient}function Hx(t){var r,i,s;const e=t._freezeSettings(),n=function(l,c,u,f){return new gk(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,l0(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new jx(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kt(st.fromBase64String(e))}catch(n){throw new z(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kt(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ta(e,Kt._jsonSchema))return Kt.fromBase64String(e.bytes)}}Kt._jsonSchemaVersion="firestore/bytes/1.0",Kt._jsonSchema={type:Be("string",Kt._jsonSchemaVersion),bytes:Be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xn._jsonSchemaVersion}}static fromJSON(e){if(Ta(e,xn._jsonSchema))return new xn(e.latitude,e.longitude)}}xn._jsonSchemaVersion="firestore/geoPoint/1.0",xn._jsonSchema={type:Be("string",xn._jsonSchemaVersion),latitude:Be("number"),longitude:Be("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ta(e,Dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Dn(e.vectorValues);throw new z(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Dn._jsonSchemaVersion="firestore/vectorValue/1.0",Dn._jsonSchema={type:Be("string",Dn._jsonSchemaVersion),vectorValues:Be("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=/^__.*__$/;class Gx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Sa(e,this.data,n,this.fieldTransforms)}}class u0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function h0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{Ac:t})}}class wp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new wp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return wc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(h0(this.Ac)&&Wx.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Kx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||tu(e)}Cc(e,n,r,i=!1){return new wp({Ac:e,methodName:n,Dc:r,path:nt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ou(t){const e=t._freezeSettings(),n=tu(t._databaseId);return new Kx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function d0(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);Ep("Data must be an object, but it was:",o,r);const l=f0(r,o);let c,u;if(s.merge)c=new jt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=jd(e,m,n);if(!o.contains(g))throw new z(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);m0(f,g)||f.push(g)}c=new jt(f),u=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,u=o.fieldTransforms;return new Gx(new Rt(l),c,u)}class au extends vp{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof au}}function Qx(t,e,n,r){const i=t.Cc(1,e,n);Ep("Data must be an object, but it was:",i,r);const s=[],o=Rt.empty();Gr(r,(c,u)=>{const f=Ip(e,c,n);u=Me(u);const m=i.yc(f);if(u instanceof au)s.push(f);else{const g=Ra(u,m);g!=null&&(s.push(f),o.set(f,g))}});const l=new jt(s);return new u0(o,l,i.fieldTransforms)}function Yx(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[jd(e,r,n)],c=[i];if(s.length%2!=0)throw new z(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(jd(e,s[g])),c.push(s[g+1]);const u=[],f=Rt.empty();for(let g=l.length-1;g>=0;--g)if(!m0(u,l[g])){const T=l[g];let R=c[g];R=Me(R);const N=o.yc(T);if(R instanceof au)u.push(T);else{const b=Ra(R,N);b!=null&&(u.push(T),f.set(T,b))}}const m=new jt(u);return new u0(f,m,o.fieldTransforms)}function Xx(t,e,n,r=!1){return Ra(n,t.Cc(r?4:3,e))}function Ra(t,e){if(p0(t=Me(t)))return Ep("Unsupported field value:",e,t),f0(t,e);if(t instanceof vp)return function(r,i){if(!h0(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let c=Ra(l,i.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=he.fromDate(r);return{timestampValue:gc(i.serializer,s)}}if(r instanceof he){const s=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gc(i.serializer,s)}}if(r instanceof xn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Kt)return{bytesValue:kE(i.serializer,r._byteString)};if(r instanceof Le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ip(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Dn)return function(o,l){return{mapValue:{fields:{[rE]:{stringValue:sE},[dc]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return ep(l.serializer,u)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Wc(r)}`)}(t,e)}function f0(t,e){const n={};return X1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gr(t,(r,i)=>{const s=Ra(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function p0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof he||t instanceof xn||t instanceof Kt||t instanceof Le||t instanceof vp||t instanceof Dn)}function Ep(t,e,n){if(!p0(n)||!Q1(n)){const r=Wc(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function jd(t,e,n){if((e=Me(e))instanceof su)return e._internalPath;if(typeof e=="string")return Ip(t,e);throw wc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Jx=new RegExp("[~\\*/\\[\\]]");function Ip(t,e,n){if(e.search(Jx)>=0)throw wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new su(...e.split("."))._internalPath}catch{throw wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new z(M.INVALID_ARGUMENT,l+t+c)}function m0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Zx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Zx extends g0{data(){return super.data()}}function Tp(t,e){return typeof e=="string"?Ip(t,e):e instanceof su?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sp{}class _0 extends Sp{}function t2(t,e,...n){let r=[];e instanceof Sp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof Cp).length,l=s.filter(c=>c instanceof Ap).length;if(o>1||o>0&&l>0)throw new z(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ap extends _0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ap(e,n,r)}_apply(e){const n=this._parse(e);return y0(e._query,n),new Ni(e.firestore,e.converter,Pd(e._query,n))}_parse(e){const n=ou(e.firestore);return function(s,o,l,c,u,f,m){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new z(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){vy(m,f);const R=[];for(const N of m)R.push(yy(c,s,N));g={arrayValue:{values:R}}}else g=yy(c,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||vy(m,f),g=Xx(l,o,m,f==="in"||f==="not-in");return Ue.create(u,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Cp extends Sp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:gn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const c of l)y0(o,c),o=Pd(o,c)}(e._query,n),new Ni(e.firestore,e.converter,Pd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Pp extends _0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Pp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ua(s,o)}(e._query,this._field,this._direction);return new Ni(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ms(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function n2(t,e="asc"){const n=e,r=Tp("orderBy",t);return Pp._create(r,n)}function yy(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new z(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fE(e)&&n.indexOf("/")!==-1)throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!W.isDocumentKey(r))throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return O_(t,new W(r))}if(n instanceof Le)return O_(t,n._key);throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wc(n)}.`)}function vy(t,e){if(!Array.isArray(t)||t.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function y0(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class r2{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Gr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[dc].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ve(o.doubleValue));return new Dn(n)}convertGeoPoint(e){return new xn(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Qc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(aa(e));default:return null}}convertTimestamp(e){const n=jr(e);return new he(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);ce(OE(r),9688,{name:e});const i=new la(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||Xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class So{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class di extends g0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Tp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=di._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}di._jsonSchemaVersion="firestore/documentSnapshot/1.0",di._jsonSchema={type:Be("string",di._jsonSchemaVersion),bundleSource:Be("string","DocumentSnapshot"),bundleName:Be("string"),bundle:Be("string")};class xl extends di{data(e={}){return super.data(e)}}class us{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new So(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xl(this._firestore,this._userDataWriter,r.key,r,new So(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new xl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new So(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new xl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new So(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:i2(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=us._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Gf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function i2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t){t=mn(t,Le);const e=mn(t.firestore,xi);return Bx(yp(e),t._key).then(n=>s2(e,t,n))}us._jsonSchemaVersion="firestore/querySnapshot/1.0",us._jsonSchema={type:Be("string",us._jsonSchemaVersion),bundleSource:Be("string","QuerySnapshot"),bundleName:Be("string"),bundle:Be("string")};class w0 extends r2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function Fs(t){t=mn(t,Ni);const e=mn(t.firestore,xi),n=yp(e),r=new w0(e);return e2(t._query),$x(n,t._query).then(i=>new us(e,r,t,i))}function E0(t,e,n){t=mn(t,Le);const r=mn(t.firestore,xi),i=v0(t.converter,e);return lu(r,[d0(ou(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Jt.none())])}function bn(t,e,n,...r){t=mn(t,Le);const i=mn(t.firestore,xi),s=ou(i);let o;return o=typeof(e=Me(e))=="string"||e instanceof su?Yx(s,"updateDoc",t._key,e,n,r):Qx(s,"updateDoc",t._key,e),lu(i,[o.toMutation(t._key,Jt.exists(!0))])}function Us(t){return lu(mn(t.firestore,xi),[new tp(t._key,Jt.none())])}function Bs(t,e){const n=mn(t.firestore,xi),r=Te(t),i=v0(t.converter,e);return lu(n,[d0(ou(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Jt.exists(!1))]).then(()=>r)}function lu(t,e){return function(r,i){const s=new qn;return r.asyncQueue.enqueueAndForget(async()=>kx(await Ux(r),i,s)),s.promise}(yp(t),e)}function s2(t,e,n){const r=n.docs.get(e._key),i=new w0(t);return new di(t,i,e._key,r,new So(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Vs=i})(xs),Vn(new fn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new xi(new XR(r.getProvider("auth-internal")),new ek(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new z(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new la(u.options.projectId,f)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Xt(I_,T_,e),Xt(I_,T_,"esm2020")})();const I0="@firebase/installations",Rp="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=1e4,S0=`w:${Rp}`,A0="FIS_v2",o2="https://firebaseinstallations.googleapis.com/v1",a2=60*60*1e3,l2="installations",c2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ei=new Ai(l2,c2,u2);function C0(t){return t instanceof _n&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0({projectId:t}){return`${o2}/projects/${t}/installations`}function R0(t){return{token:t.token,requestStatus:2,expiresIn:d2(t.expiresIn),creationTime:Date.now()}}async function k0(t,e){const r=(await e.json()).error;return Ei.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function N0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function h2(t,{refreshToken:e}){const n=N0(t);return n.append("Authorization",f2(e)),n}async function x0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function d2(t){return Number(t.replace("s","000"))}function f2(t){return`${A0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=P0(t),i=N0(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:A0,appId:t.appId,sdkVersion:S0},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await x0(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:R0(u.authToken)}}else throw await k0("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=/^[cdef][\w-]{21}$/,Fd="";function _2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=y2(t);return g2.test(n)?n:Fd}catch{return Fd}}function y2(t){return m2(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=new Map;function V0(t,e){const n=cu(t);O0(n,e),v2(n,e)}function O0(t,e){const n=b0.get(t);if(n)for(const r of n)r(e)}function v2(t,e){const n=w2();n&&n.postMessage({key:t,fid:e}),E2()}let ci=null;function w2(){return!ci&&"BroadcastChannel"in self&&(ci=new BroadcastChannel("[Firebase] FID Change"),ci.onmessage=t=>{O0(t.data.key,t.data.fid)}),ci}function E2(){b0.size===0&&ci&&(ci.close(),ci=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2="firebase-installations-database",T2=1,Ii="firebase-installations-store";let gh=null;function kp(){return gh||(gh=r1(I2,T2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ii)}}})),gh}async function Ec(t,e){const n=cu(t),i=(await kp()).transaction(Ii,"readwrite"),s=i.objectStore(Ii),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&V0(t,e.fid),e}async function L0(t){const e=cu(t),r=(await kp()).transaction(Ii,"readwrite");await r.objectStore(Ii).delete(e),await r.done}async function uu(t,e){const n=cu(t),i=(await kp()).transaction(Ii,"readwrite"),s=i.objectStore(Ii),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&V0(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np(t){let e;const n=await uu(t.appConfig,r=>{const i=S2(r),s=A2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Fd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function S2(t){const e=t||{fid:_2(),registrationStatus:0};return M0(e)}function A2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ei.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=C2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:P2(t)}:{installationEntry:e}}async function C2(t,e){try{const n=await p2(t,e);return Ec(t.appConfig,n)}catch(n){throw C0(n)&&n.customData.serverCode===409?await L0(t.appConfig):await Ec(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function P2(t){let e=await wy(t.appConfig);for(;e.registrationStatus===1;)await D0(100),e=await wy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Np(t);return r||n}return e}function wy(t){return uu(t,e=>{if(!e)throw Ei.create("installation-not-found");return M0(e)})}function M0(t){return R2(t)?{fid:t.fid,registrationStatus:0}:t}function R2(t){return t.registrationStatus===1&&t.registrationTime+T0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k2({appConfig:t,heartbeatServiceProvider:e},n){const r=N2(t,n),i=h2(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:S0,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await x0(()=>fetch(r,l));if(c.ok){const u=await c.json();return R0(u)}else throw await k0("Generate Auth Token",c)}function N2(t,{fid:e}){return`${P0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xp(t,e=!1){let n;const r=await uu(t.appConfig,s=>{if(!j0(s))throw Ei.create("not-registered");const o=s.authToken;if(!e&&b2(o))return s;if(o.requestStatus===1)return n=x2(t,e),s;{if(!navigator.onLine)throw Ei.create("app-offline");const l=O2(s);return n=D2(t,l),l}});return n?await n:r.authToken}async function x2(t,e){let n=await Ey(t.appConfig);for(;n.authToken.requestStatus===1;)await D0(100),n=await Ey(t.appConfig);const r=n.authToken;return r.requestStatus===0?xp(t,e):r}function Ey(t){return uu(t,e=>{if(!j0(e))throw Ei.create("not-registered");const n=e.authToken;return L2(n)?{...e,authToken:{requestStatus:0}}:e})}async function D2(t,e){try{const n=await k2(t,e),r={...e,authToken:n};return await Ec(t.appConfig,r),n}catch(n){if(C0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await L0(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ec(t.appConfig,r)}throw n}}function j0(t){return t!==void 0&&t.registrationStatus===2}function b2(t){return t.requestStatus===2&&!V2(t)}function V2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+a2}function O2(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function L2(t){return t.requestStatus===1&&t.requestTime+T0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Np(e);return r?r.catch(console.error):xp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(t,e=!1){const n=t;return await F2(n),(await xp(n,e)).token}async function F2(t){const{registrationPromise:e}=await Np(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(t){if(!t||!t.options)throw _h("App Configuration");if(!t.name)throw _h("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _h(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _h(t){return Ei.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0="installations",B2="installations-internal",$2=t=>{const e=t.getProvider("app").getImmediate(),n=U2(e),r=Ci(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},z2=t=>{const e=t.getProvider("app").getImmediate(),n=Ci(e,F0).getImmediate();return{getId:()=>M2(n),getToken:i=>j2(n,i)}};function q2(){Vn(new fn(F0,$2,"PUBLIC")),Vn(new fn(B2,z2,"PRIVATE"))}q2();Xt(I0,Rp);Xt(I0,Rp,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="analytics",H2="firebase_id",W2="origin",G2=60*1e3,K2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Dp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Bc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ut=new Ai("analytics","Analytics",Q2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(t){if(!t.startsWith(Dp)){const e=Ut.create("invalid-gtag-resource",{gtagURL:t});return Tt.warn(e.message),""}return t}function U0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function X2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function J2(t,e){const n=X2("firebase-js-sdk-policy",{createScriptURL:Y2}),r=document.createElement("script"),i=`${Dp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Z2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function eD(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await U0(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(l){Tt.error(l)}t("config",i,s)}async function tD(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await U0(n);for(const c of o){const u=l.find(m=>m.measurementId===c),f=u&&e[u.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Tt.error(s)}}function nD(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,c]=o;await tD(t,e,n,l,c)}else if(s==="config"){const[l,c]=o;await eD(t,e,n,r,l,c)}else if(s==="consent"){const[l,c]=o;t("consent",l,c)}else if(s==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Tt.error(l)}}return i}function rD(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=nD(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function iD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Dp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=30,oD=1e3;class aD{constructor(e={},n=oD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const B0=new aD;function lD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function cD(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:lD(n)},i=K2.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const c=await s.json();(o=c.error)!=null&&o.message&&(l=c.error.message)}catch{}throw Ut.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function uD(t,e=B0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ut.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ut.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new fD;return setTimeout(async()=>{l.abort()},G2),$0({appId:r,apiKey:i,measurementId:s},o,l,e)}async function $0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=B0){var l;const{appId:s,measurementId:o}=t;try{await hD(r,e)}catch(c){if(o)return Tt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw c}try{const c=await cD(t);return i.deleteThrottleMetadata(s),c}catch(c){const u=c;if(!dD(u)){if(i.deleteThrottleMetadata(s),o)return Tt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw c}const f=Number((l=u==null?void 0:u.customData)==null?void 0:l.httpStatus)===503?Wg(n,i.intervalMillis,sD):Wg(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,m),Tt.debug(`Calling attemptFetch again in ${f} millis`),$0(t,m,r,i)}}function hD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ut.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function dD(t){if(!(t instanceof _n)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class fD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function pD(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function mD(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD(){if(Zw())try{await e1()}catch(t){return Tt.warn(Ut.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Tt.warn(Ut.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _D(t,e,n,r,i,s,o){const l=uD(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Tt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Tt.error(g)),e.push(l);const c=gD().then(g=>{if(g)return r.getId()}),[u,f]=await Promise.all([l,c]);iD(s)||J2(s,u.measurementId),i("js",new Date);const m=(o==null?void 0:o.config)??{};return m[W2]="firebase",m.update=!0,f!=null&&(m[H2]=f),i("config",u.measurementId,m),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.app=e}_delete(){return delete hs[this.app.options.appId],Promise.resolve()}}let hs={},Iy=[];const Ty={};let yh="dataLayer",vD="gtag",Sy,bp,Ay=!1;function wD(){const t=[];if(Jw()&&t.push("This is a browser extension environment."),pA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ut.create("invalid-analytics-context",{errorInfo:e});Tt.warn(n.message)}}function ED(t,e,n){wD();const r=t.options.appId;if(!r)throw Ut.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Tt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ut.create("no-api-key");if(hs[r]!=null)throw Ut.create("already-exists",{id:r});if(!Ay){Z2(yh);const{wrappedGtag:s,gtagCore:o}=rD(hs,Iy,Ty,yh,vD);bp=s,Sy=o,Ay=!0}return hs[r]=_D(t,Iy,Ty,e,Sy,yh,n),new yD(t)}function ID(t=Mf()){t=Me(t);const e=Ci(t,Ic);return e.isInitialized()?e.getImmediate():TD(t)}function TD(t,e={}){const n=Ci(t,Ic);if(n.isInitialized()){const i=n.getImmediate();if(Lr(e,n.getOptions()))return i;throw Ut.create("already-initialized")}return n.initialize({options:e})}function SD(t,e,n){t=Me(t),mD(bp,hs[t.app.options.appId],e,n).catch(r=>Tt.error(r))}function AD(t,e,n,r){t=Me(t),pD(bp,hs[t.app.options.appId],e,n,r).catch(i=>Tt.error(i))}const Cy="@firebase/analytics",Py="0.10.19";function CD(){Vn(new fn(Ic,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return ED(r,i,n)},"PUBLIC")),Vn(new fn("analytics-internal",t,"PRIVATE")),Xt(Cy,Py),Xt(Cy,Py,"esm2020");function t(e){try{const n=e.getProvider(Ic).getImmediate();return{logEvent:(r,i,s)=>AD(n,r,i,s),setUserProperties:(r,i)=>SD(n,r,i)}}catch(n){throw Ut.create("interop-component-reg-failed",{reason:n})}}}CD();const PD={apiKey:"AIzaSyDIL-8yGpB1sjh1khHFZlbxKyNKXMJZTzg",authDomain:"u1-porfolio.firebaseapp.com",projectId:"u1-porfolio",storageBucket:"u1-porfolio.firebasestorage.app",messagingSenderId:"1070957784970",appId:"1:1070957784970:web:35faea8b55767e3911a273",measurementId:"G-4XQ4YK4RZY"},Vp=i1(PD);ID(Vp);const Ud=HR(Vp),oe=qx(Vp),z0=U.createContext();function RD({children:t}){const[e,n]=U.useState(!1),[r,i]=U.useState(!0);return U.useEffect(()=>{const s=bP(Ud,o=>{n(!!o),i(!1)});return()=>s()},[]),d.jsx(z0.Provider,{value:{isAdmin:e,loading:r},children:t})}function er(){const t=U.useContext(z0);if(t===void 0)throw new Error("useAdmin must be used within an AdminProvider");return t}const kD="_adminToggle_r3lnh_1",ND="_loginOverlay_r3lnh_26",xD="_loginForm_r3lnh_40",DD="_panel_r3lnh_95",bD="_panelHeader_r3lnh_112",VD="_panelActions_r3lnh_127",OD="_saveBtn_r3lnh_150",LD="_seedBtn_r3lnh_159",MD="_panelContent_r3lnh_168",jD="_formSection_r3lnh_174",FD="_note_r3lnh_216",Vt={adminToggle:kD,loginOverlay:ND,loginForm:xD,panel:DD,panelHeader:bD,panelActions:VD,saveBtn:OD,seedBtn:LD,panelContent:MD,formSection:jD,note:FD};function UD(){var k,O,L,E,v,S,C,P,x,A,Se,gt;const{isAdmin:t}=er(),[e,n]=U.useState(!1),[r,i]=U.useState(!1),[s,o]=U.useState(""),[l,c]=U.useState(""),[u,f]=U.useState(null),[m,g]=U.useState(!1),[T,R]=U.useState({});U.useEffect(()=>{t&&N()},[t]);const N=async()=>{try{const J=Te(oe,"portfolio","main"),de=await fa(J);de.exists()&&(f(de.data()),R(de.data()))}catch(J){console.error("Error loading portfolio data:",J)}},b=async J=>{J.preventDefault();try{await NP(Ud,s,l),i(!1),o(""),c("")}catch(de){alert("Login failed: "+de.message)}},w=async()=>{await VP(Ud),n(!1)},y=async()=>{try{await E0(Te(oe,"portfolio","main"),T),f(T),g(!1),alert("Portfolio updated successfully!"),window.location.reload()}catch(J){alert("Failed to save: "+J.message)}},I=(J,de)=>{R(B=>({...B,[J]:de}))};return!t&&!r?d.jsx("button",{className:Vt.adminToggle,onClick:()=>i(!0),title:"Admin Login",children:"🔐"}):r?d.jsx("div",{className:Vt.loginOverlay,onClick:()=>i(!1),children:d.jsxs("div",{className:Vt.loginForm,onClick:J=>J.stopPropagation(),children:[d.jsx("h3",{children:"Admin Login"}),d.jsxs("form",{onSubmit:b,children:[d.jsx("input",{type:"email",placeholder:"Email",value:s,onChange:J=>o(J.target.value),required:!0}),d.jsx("input",{type:"password",placeholder:"Password",value:l,onChange:J=>c(J.target.value),required:!0}),d.jsx("button",{type:"submit",children:"Login"}),d.jsx("button",{type:"button",onClick:()=>i(!1),children:"Cancel"})]})]})}):d.jsxs(d.Fragment,{children:[d.jsx("button",{className:Vt.adminToggle,onClick:()=>n(!e),title:"Admin Panel",children:"⚙️"}),e&&d.jsxs("div",{className:Vt.panel,children:[d.jsxs("div",{className:Vt.panelHeader,children:[d.jsx("h3",{children:"Admin Panel"}),d.jsxs("div",{className:Vt.panelActions,children:[m?d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:y,className:Vt.saveBtn,children:"Save Changes"}),d.jsx("button",{onClick:()=>{R(u),g(!1)},children:"Cancel"})]}):d.jsx("button",{onClick:()=>g(!0),children:"Edit Portfolio"}),d.jsx("button",{onClick:w,children:"Logout"}),d.jsx("button",{onClick:()=>n(!1),children:"✕"})]})]}),m&&d.jsxs("div",{className:Vt.panelContent,children:[d.jsxs("div",{className:Vt.formSection,children:[d.jsx("h4",{children:"Hero Section"}),d.jsxs("label",{children:["Name:",d.jsx("input",{type:"text",value:((k=T.hero)==null?void 0:k.name)||"",onChange:J=>I("hero",{...T.hero,name:J.target.value})})]}),d.jsxs("label",{children:["Title:",d.jsx("input",{type:"text",value:((O=T.hero)==null?void 0:O.title)||"",onChange:J=>I("hero",{...T.hero,title:J.target.value})})]}),d.jsxs("label",{children:["Description:",d.jsx("textarea",{value:((L=T.hero)==null?void 0:L.description)||"",onChange:J=>I("hero",{...T.hero,description:J.target.value}),rows:4})]})]}),d.jsxs("div",{className:Vt.formSection,children:[d.jsx("h4",{children:"About Section"}),d.jsxs("label",{children:["Paragraph 1:",d.jsx("textarea",{value:((v=(E=T.about)==null?void 0:E.paragraphs)==null?void 0:v[0])||"",onChange:J=>{var B;const de=[...((B=T.about)==null?void 0:B.paragraphs)||["","",""]];de[0]=J.target.value,I("about",{...T.about,paragraphs:de})},rows:3})]}),d.jsxs("label",{children:["Paragraph 2:",d.jsx("textarea",{value:((C=(S=T.about)==null?void 0:S.paragraphs)==null?void 0:C[1])||"",onChange:J=>{var B;const de=[...((B=T.about)==null?void 0:B.paragraphs)||["","",""]];de[1]=J.target.value,I("about",{...T.about,paragraphs:de})},rows:3})]}),d.jsxs("label",{children:["Paragraph 3:",d.jsx("textarea",{value:((x=(P=T.about)==null?void 0:P.paragraphs)==null?void 0:x[2])||"",onChange:J=>{var B;const de=[...((B=T.about)==null?void 0:B.paragraphs)||["","",""]];de[2]=J.target.value,I("about",{...T.about,paragraphs:de})},rows:3})]}),d.jsxs("label",{children:["Location:",d.jsx("input",{type:"text",value:((A=T.about)==null?void 0:A.location)||"",onChange:J=>I("about",{...T.about,location:J.target.value}),placeholder:"Manila, Philippines"})]})]}),d.jsxs("div",{className:Vt.formSection,children:[d.jsx("h4",{children:"Social Links"}),d.jsxs("label",{children:["GitHub:",d.jsx("input",{type:"url",value:((Se=T.social)==null?void 0:Se.github)||"",onChange:J=>I("social",{...T.social,github:J.target.value})})]}),d.jsxs("label",{children:["LinkedIn:",d.jsx("input",{type:"url",value:((gt=T.social)==null?void 0:gt.linkedin)||"",onChange:J=>I("social",{...T.social,linkedin:J.target.value})})]})]}),d.jsxs("div",{className:Vt.note,children:[d.jsx("strong",{children:"Note:"})," Projects, Skills, Experience, Research, and Achievements sections can be edited individually through their respective admin controls when logged in."]})]})]})]})}const q0=U.createContext(),H0=()=>U.useContext(q0),BD=({children:t})=>{const[e,n]=U.useState(()=>localStorage.getItem("theme")||"dark");U.useEffect(()=>{document.body.setAttribute("data-theme",e),localStorage.setItem("theme",e)},[e]);const r=()=>{n(i=>i==="light"?"dark":"light")};return d.jsx(q0.Provider,{value:{theme:e,toggleTheme:r},children:t})};function W0(t="(max-width: 860px)"){const[e,n]=U.useState(()=>typeof window<"u"&&window.matchMedia(t).matches);return U.useEffect(()=>{const r=window.matchMedia(t),i=()=>n(r.matches);return i(),r.addEventListener?r.addEventListener("change",i):r.addListener(i),()=>{r.removeEventListener?r.removeEventListener("change",i):r.removeListener(i)}},[t]),e}const $D="_skipLink_y9wlw_1",zD="_canvas_y9wlw_18",qD="_blob1_y9wlw_27",HD="_ypFloat_y9wlw_1",WD="_blob2_y9wlw_46",GD="_cursorDot_y9wlw_66",KD="_cursorRing_y9wlw_79",ds={skipLink:$D,canvas:zD,blob1:qD,ypFloat:HD,blob2:WD,cursorDot:GD,cursorRing:KD},Ry=" .:-=+*#%@";function QD(){const t=U.useRef(null),{theme:e}=H0(),n=U.useRef(e);return n.current=e,U.useEffect(()=>{const r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=t.current;if(!i)return;const s=i.getContext("2d"),o=18;let l=0,c=0,u=new Float32Array(0);const f={x:-9999,y:-9999},m=()=>{i.width=window.innerWidth,i.height=window.innerHeight,l=Math.ceil(i.width/o)+1,c=Math.ceil(i.height/o)+1,u=new Float32Array(l*c);for(let w=0;w<u.length;w++)u[w]=Math.random()*Math.PI*2};m(),window.addEventListener("resize",m);const g=w=>{f.x=w.clientX,f.y=w.clientY};window.addEventListener("mousemove",g),s.font=`${o-3}px "SF Mono", Menlo, monospace`,s.textBaseline="top";const T=1e3/24;let R=0,N;const b=w=>{if(N=requestAnimationFrame(b),w-R<T)return;R=w;const y=w*7e-4;s.clearRect(0,0,i.width,i.height);const I=n.current==="dark"?"245,241,232":"17,17,17",k=n.current==="dark"?"255,90,60":"226,61,31",O=Ry.length;for(let L=0;L<c;L++){const E=L*o;for(let v=0;v<l;v++){const S=L*l+v,C=v*o,P=u[S],A=((r?Math.sin(v*.25+P)+Math.sin(L*.22+P*.5):Math.sin(v*.25+y*1.3+P)+Math.sin(L*.22-y*1.1+P*.5))+2)/4,Se=C-f.x,gt=E-f.y,J=Math.sqrt(Se*Se+gt*gt),de=J<110?1-J/110:0,B=.64;if(A<B&&de<.05)continue;const G=Math.max(0,A-B)/(1-B),Z=Math.min(O-1,Math.max(1,Math.floor((G+de*.85)*(O-1)))),fe=Math.min(.8,.04+G*.14+de*.55);s.fillStyle=de>.3?`rgba(${k},${fe})`:`rgba(${I},${fe})`,s.fillText(Ry[Z],C,E)}}};return N=requestAnimationFrame(b),()=>{window.removeEventListener("resize",m),window.removeEventListener("mousemove",g),N&&cancelAnimationFrame(N)}},[]),d.jsx("canvas",{ref:t,className:ds.canvas,"aria-hidden":"true"})}function YD(){const t=U.useRef(null),e=U.useRef(null);return U.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;document.body.style.cursor="none";const r=i=>{if(t.current&&(t.current.style.transform=`translate(${i.clientX}px, ${i.clientY}px) translate(-50%,-50%)`),e.current){e.current.style.transform=`translate(${i.clientX}px, ${i.clientY}px) translate(-50%,-50%)`;const s=i.target.closest&&i.target.closest("[data-cursor-hover]");e.current.style.width=s?"54px":"34px",e.current.style.height=s?"54px":"34px"}};return window.addEventListener("mousemove",r),()=>{window.removeEventListener("mousemove",r),document.body.style.cursor=""}},[]),d.jsxs(d.Fragment,{children:[d.jsx("div",{ref:e,className:ds.cursorRing,"aria-hidden":"true"}),d.jsx("div",{ref:t,className:ds.cursorDot,"aria-hidden":"true"})]})}function XD({showParticles:t=!0,showCursorEffect:e=!0,showDecor:n=!0}){const r=W0();return d.jsxs(d.Fragment,{children:[d.jsx("a",{href:"#main",className:ds.skipLink,children:"Skip to content"}),t&&d.jsx(QD,{}),n&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:ds.blob1,"aria-hidden":"true"}),d.jsx("div",{className:ds.blob2,"aria-hidden":"true"})]}),!r&&e&&d.jsx(YD,{})]})}const JD="_header_tg23a_1",ZD="_container_tg23a_19",eb="_logo_tg23a_28",tb="_crown_tg23a_33",nb="_navLinks_tg23a_38",rb="_navLink_tg23a_38",ib="_active_tg23a_53",sb="_themeBtn_tg23a_57",ob="_resumeBtn_tg23a_69",ab="_mobileControls_tg23a_78",lb="_hamburger_tg23a_84",cb="_mobileNav_tg23a_95",ub="_mobileNavLink_tg23a_103",hb="_mobileResumeBtn_tg23a_110",vt={header:JD,container:ZD,logo:eb,crown:tb,navLinks:nb,navLink:rb,active:ib,themeBtn:sb,resumeBtn:ob,mobileControls:ab,hamburger:lb,mobileNav:cb,mobileNavLink:ub,mobileResumeBtn:hb};function $s({size:t=24,color:e="currentColor",className:n,style:r}){return d.jsxs("svg",{viewBox:"0 0 120 90",width:t,height:t*.75,className:n,style:{display:"inline-block",verticalAlign:"middle",...r},"aria-hidden":"true",children:[d.jsx("path",{d:"M13,66 C11,50 12,34 16,21 C21,30 26,38 31,44 C39,32 47,20 58,8 C63,21 69,33 76,43 C83,36 90,28 103,23 C107,36 108,51 106,66",fill:"none",stroke:e,strokeWidth:"9",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M14,68 C36,72 82,72 105,68",fill:"none",stroke:e,strokeWidth:"9",strokeLinecap:"round",strokeLinejoin:"round"})]})}const Tc="/assets/cv-ByL4WuGn.pdf",vh=[{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"experience",label:"Experience"},{id:"research",label:"Research"},{id:"commonplace",label:"Commonplace"},{id:"contact",label:"Contact"}];function db(){const[t,e]=U.useState(!1),[n,r]=U.useState("hero"),{theme:i,toggleTheme:s}=H0(),o=W0();U.useEffect(()=>{const u=()=>{const f=["hero",...vh.map(g=>g.id)],m=window.scrollY+window.innerHeight/2;for(const g of f){const T=document.getElementById(g);if(T){const{offsetTop:R,offsetHeight:N}=T;if(m>=R&&m<R+N){r(g);break}}}};return window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),U.useEffect(()=>{o||e(!1)},[o]);const l=i==="light"?"☾":"☀",c=()=>e(!1);return d.jsxs("header",{className:vt.header,children:[d.jsxs("div",{className:vt.container,children:[d.jsxs("a",{href:"#main","data-cursor-hover":"true",className:vt.logo,children:["Yuan",d.jsx($s,{size:20,color:"var(--dc-yellow)",className:vt.crown})]}),!o&&d.jsxs("nav",{"aria-label":"Main",className:vt.navLinks,children:[vh.map(u=>d.jsx("a",{href:`#${u.id}`,"data-cursor-hover":"true",className:`${vt.navLink} ${n===u.id?vt.active:""}`,children:u.label},u.id)),d.jsx("button",{onClick:s,"aria-label":"Toggle dark mode",className:vt.themeBtn,children:l}),d.jsx("a",{href:Tc,download:"Yuan-Pangan-Resume.pdf","data-cursor-hover":"true",className:vt.resumeBtn,children:"Resume"})]}),o&&d.jsxs("div",{className:vt.mobileControls,children:[d.jsx("button",{onClick:s,"aria-label":"Toggle dark mode",className:vt.themeBtn,children:l}),d.jsx("button",{onClick:()=>e(u=>!u),"aria-label":"Toggle menu",className:vt.hamburger,children:"☰"})]})]}),o&&t&&d.jsxs("nav",{"aria-label":"Mobile",className:vt.mobileNav,children:[vh.map(u=>d.jsx("a",{href:`#${u.id}`,onClick:c,className:vt.mobileNavLink,children:u.label},u.id)),d.jsx("a",{href:Tc,download:"Yuan-Pangan-Resume.pdf",className:vt.mobileResumeBtn,children:"Download Resume"})]})]})}const fb="_container_15k7o_1",pb="_revealed_15k7o_11",mb="_inner_15k7o_16",gb="_eyebrow_15k7o_21",_b="_headingWrap_15k7o_30",yb="_headline_15k7o_36",vb="_underline_15k7o_42",wb="_sub_15k7o_52",Eb="_email_15k7o_58",Ib="_linkRow_15k7o_67",Tb="_ctaPrimary_15k7o_75",Sb="_ctaSecondary_15k7o_76",Ot={container:fb,revealed:pb,inner:mb,eyebrow:gb,headingWrap:_b,headline:yb,underline:vb,sub:wb,email:Eb,linkRow:Ib,ctaPrimary:Tb,ctaSecondary:Sb};function Di(){const t=U.useRef(null),[e,n]=U.useState(!1);return U.useEffect(()=>{const r=t.current;if(!r)return;const i=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&n(!0)})},{threshold:.15});return i.observe(r),()=>i.disconnect()},[]),[t,e]}const Ab={github:"https://github.com/yuanpngn",linkedin:"https://www.linkedin.com/in/yuan-pangan/"};function Cb(){const[t,e]=U.useState(Ab),[n,r]=Di();return U.useEffect(()=>{(async()=>{try{const i=await fa(Te(oe,"portfolio","main"));if(i.exists()){const s=i.data();e(o=>{var l,c;return{github:((l=s.social)==null?void 0:l.github)||o.github,linkedin:((c=s.social)==null?void 0:c.linkedin)||o.linkedin}})}}catch(i){console.error("Error loading social links:",i)}})()},[]),d.jsx("section",{id:"contact","aria-label":"Contact",ref:n,className:`${Ot.container} ${r?Ot.revealed:""}`,children:d.jsxs("div",{className:Ot.inner,children:[d.jsx("div",{className:Ot.eyebrow,children:"CONTACT"}),d.jsxs("div",{className:Ot.headingWrap,children:[d.jsx("h2",{className:Ot.headline,children:"Let's build something worth remembering."}),d.jsx("div",{className:Ot.underline})]}),d.jsx("p",{className:Ot.sub,children:"Open to software engineering, AI, and XR opportunities — internships, research collaborations, or just a good conversation about building things."}),d.jsx("a",{href:"mailto:yumiannpangan@gmail.com","data-cursor-hover":"true",className:Ot.email,children:"yumiannpangan@gmail.com"}),d.jsxs("div",{className:Ot.linkRow,children:[d.jsx("a",{href:t.linkedin,target:"_blank",rel:"noopener noreferrer","data-cursor-hover":"true",className:Ot.ctaSecondary,children:"LinkedIn ↗"}),d.jsx("a",{href:t.github,target:"_blank",rel:"noopener noreferrer","data-cursor-hover":"true",className:Ot.ctaSecondary,children:"GitHub ↗"}),d.jsx("a",{href:Tc,download:"Yuan-Pangan-Resume.pdf","data-cursor-hover":"true",className:Ot.ctaPrimary,children:"Download Resume"})]})]})})}const Pb="_container_pfywo_1",Rb="_text_pfywo_13",kb="_crown_pfywo_18",Nb="_devBtn_pfywo_22",xb="_terminalOverlay_pfywo_32",Db="_terminalCard_pfywo_43",bb="_terminalLine_pfywo_55",Vb="_cursor_pfywo_59",Ob="_ypBlink_pfywo_1",En={container:Pb,text:Rb,crown:kb,devBtn:Nb,terminalOverlay:xb,terminalCard:Db,terminalLine:bb,cursor:Vb,ypBlink:Ob};function Ln({children:t}){return zw.createPortal(t,document.body)}function Lb(){const[t,e]=U.useState(!1),n=new Date().getFullYear();return d.jsxs("section",{id:"footer",className:En.container,children:[d.jsxs("span",{className:En.text,children:["© ",n," Yuan Pangan. Built with curiosity"," ",d.jsx($s,{size:16,color:"var(--dc-yellow)",className:En.crown})]}),d.jsx("button",{onClick:()=>e(r=>!r),"aria-label":"Developer console",className:En.devBtn,children:"</>"}),t&&d.jsx(Ln,{children:d.jsx("div",{className:En.terminalOverlay,onClick:()=>e(!1),children:d.jsxs("div",{className:En.terminalCard,onClick:r=>r.stopPropagation(),children:[d.jsx("div",{children:"$ whoami"}),d.jsx("div",{className:En.terminalLine,children:"yuan — cs student, builder, curious human"}),d.jsx("div",{style:{marginTop:"10px"},children:"$ cat interests.txt"}),d.jsx("div",{className:En.terminalLine,children:"software engineering, ai/ml, xr, accessibility"}),d.jsx("div",{style:{marginTop:"10px"},children:'$ echo "thanks for checking the console"'}),d.jsxs("div",{className:En.terminalLine,children:["thanks for checking the console",d.jsx("span",{className:En.cursor,children:"_"})]})]})})})]})}const Mb="_container_12udm_1",jb="_grid_12udm_10",Fb="_eyebrow_12udm_20",Ub="_pulseDot_12udm_32",Bb="_ypPulse_12udm_1",$b="_name_12udm_40",zb="_tagline_12udm_47",qb="_sub_12udm_54",Hb="_ctaRow_12udm_61",Wb="_ctaPrimary_12udm_67",Gb="_ctaSecondary_12udm_68",Kb="_ctaGhost_12udm_69",Qb="_scrollCue_12udm_91",Yb="_ypFloat_12udm_1",Xb="_cardWrap_12udm_98",Jb="_tiltCard_12udm_103",Zb="_heroCrown_12udm_109",eV="_chip_12udm_116",tV="_chip0_12udm_129",nV="_chip1_12udm_138",rV="_chip2_12udm_147",iV="_chip3_12udm_156",Ze={container:Mb,grid:jb,eyebrow:Fb,pulseDot:Ub,ypPulse:Bb,name:$b,tagline:zb,sub:qb,ctaRow:Hb,ctaPrimary:Wb,ctaSecondary:Gb,ctaGhost:Kb,scrollCue:Qb,ypFloat:Yb,cardWrap:Xb,tiltCard:Jb,heroCrown:Zb,chip:eV,chip0:tV,chip1:nV,chip2:rV,chip3:iV},sV=["Mixed Reality + Unity","VBA Automation","Node.js + MongoDB","Java + Spring Boot"];function oV(){const[t,e]=U.useState({name:"Yuan Pangan",title:"Software engineer building across mixed reality, automation, and full-stack systems.",description:"From automating BAU workflows at HSBC to building a mixed-reality drone performance system for my thesis — I like shipping things that hold up under real use."}),[n,r]=U.useState({rx:0,ry:0});U.useEffect(()=>{i()},[]);const i=async()=>{try{const l=Te(oe,"portfolio","main"),c=await fa(l);if(c.exists()){const u=c.data();e(f=>{var m,g,T;return{name:((m=u.hero)==null?void 0:m.name)||f.name,title:((g=u.hero)==null?void 0:g.title)||f.title,description:((T=u.hero)==null?void 0:T.description)||f.description}})}}catch(l){console.error("Error loading hero data:",l)}},s=l=>{const c=l.currentTarget.getBoundingClientRect(),u=(l.clientX-c.left)/c.width-.5,f=(l.clientY-c.top)/c.height-.5;r({rx:f*-10,ry:u*14})},o=()=>r({rx:0,ry:0});return d.jsx("section",{id:"hero","aria-label":"Introduction",className:Ze.container,children:d.jsxs("div",{className:Ze.grid,children:[d.jsxs("div",{children:[d.jsxs("div",{className:Ze.eyebrow,children:[d.jsx("span",{className:Ze.pulseDot}),"CS · Software Technology · DLSU"]}),d.jsx("h1",{className:Ze.name,children:t.name}),d.jsx("p",{className:Ze.tagline,children:t.title}),d.jsx("p",{className:Ze.sub,children:t.description}),d.jsxs("div",{className:Ze.ctaRow,children:[d.jsx("a",{href:"#projects","data-cursor-hover":"true",className:Ze.ctaPrimary,children:"View Projects"}),d.jsx("a",{href:Tc,download:"Yuan-Pangan-Resume.pdf","data-cursor-hover":"true",className:Ze.ctaSecondary,children:"Download Resume"}),d.jsx("a",{href:"#contact","data-cursor-hover":"true",className:Ze.ctaGhost,children:"Contact Me →"})]}),d.jsx("div",{className:Ze.scrollCue,children:"↓ scroll"})]}),d.jsx("div",{className:Ze.cardWrap,onMouseMove:s,onMouseLeave:o,children:d.jsxs("div",{className:Ze.tiltCard,style:{transform:`perspective(1000px) rotateX(${n.rx}deg) rotateY(${n.ry}deg)`},children:[d.jsx($s,{size:56,color:"var(--dc-yellow)",className:Ze.heroCrown}),sV.map((l,c)=>d.jsx("div",{className:`${Ze.chip} ${Ze[`chip${c}`]}`,children:l},l))]})})]})})}const aV="_container_1s9ph_1",lV="_revealed_1s9ph_10",cV="_grid_1s9ph_15",uV="_eyebrow_1s9ph_24",hV="_headingWrap_1s9ph_31",dV="_h2_1s9ph_37",fV="_underline_1s9ph_47",pV="_points_1s9ph_57",mV="_point_1s9ph_57",gV="_number_1s9ph_69",_V="_body_1s9ph_74",yV="_photoWrap_1s9ph_80",vV="_tapeStrip_1s9ph_84",wV="_photoFrame_1s9ph_100",EV="_photo_1s9ph_80",IV="_pinNote_1s9ph_114",ut={container:aV,revealed:lV,grid:cV,eyebrow:uV,headingWrap:hV,h2:dV,underline:fV,points:pV,point:mV,number:gV,body:_V,photoWrap:yV,tapeStrip:vV,photoFrame:wV,photo:EV,pinNote:IV},TV="portfolio_uploads",SV="dxcmdqs3j";async function AV(t){const e=new FormData;e.append("file",t),e.append("upload_preset",TV);const n=await fetch(`https://api.cloudinary.com/v1_1/${SV}/image/upload`,{method:"POST",body:e});if(!n.ok)throw new Error("Cloudinary upload failed");return(await n.json()).secure_url}const CV="_wrap_16zy1_1",PV="_placeholder_16zy1_7",RV="_editButton_16zy1_17",kV="_editButtonCompact_16zy1_36",NV="_fileInput_16zy1_45",po={wrap:CV,placeholder:PV,editButton:RV,editButtonCompact:kV,fileInput:NV};function Op({src:t,alt:e,imgClassName:n,onUploaded:r,fallback:i,compact:s=!1}){const{isAdmin:o}=er(),[l,c]=U.useState(!1),u=U.useRef(null),f=async m=>{var T;const g=(T=m.target.files)==null?void 0:T[0];if(g){c(!0);try{const R=await AV(g);await r(R)}catch(R){console.error("Error uploading photo:",R),alert("Failed to upload photo. Please try again.")}finally{c(!1),m.target.value=""}}};return!t&&!o&&!i?null:d.jsxs("div",{className:po.wrap,children:[t?d.jsx("img",{src:t,alt:e,className:n}):i?d.jsx("div",{className:n,children:i}):d.jsx("div",{className:`${n} ${po.placeholder}`,children:"No photo yet"}),o&&d.jsxs(d.Fragment,{children:[d.jsx("button",{type:"button",className:`${po.editButton} ${s?po.editButtonCompact:""}`,onClick:m=>{var g;m.stopPropagation(),(g=u.current)==null||g.click()},disabled:l,title:"Change photo",children:l?"…":s?"📷":"📷 Edit"}),d.jsx("input",{ref:u,type:"file",accept:"image/*",onClick:m=>m.stopPropagation(),onChange:f,className:po.fileInput})]})]})}const xV="/assets/yuan-CLoNjDCe.png",DV=["I started out chasing the moment code turns into something you can touch — a button that responds, a screen that reacts. That curiosity is why I'm studying Software Technology at De La Salle University, and why I still can't resist opening dev tools on a page I like.","Since then I've built across the stack — automation tooling at HSBC, production backend work at Manulife, a full-stack inventory system for a startup client — and outside it, into research: a mixed-reality drone system that treats hardware as a performance partner.","What ties it together is a bias for shipping things that hold up under real use — readable code, tested assumptions, and interfaces that work for the person who didn't design them. That's the standard I hold every project to."],bV="Manila, Philippines";function VV(){const[t,e]=U.useState(DV),[n,r]=U.useState(bV),[i,s]=U.useState(xV),[o,l]=Di();U.useEffect(()=>{(async()=>{var u,f,m,g;try{const T=await fa(Te(oe,"portfolio","main"));if(T.exists()){const R=T.data();(f=(u=R.about)==null?void 0:u.paragraphs)!=null&&f.length&&e(R.about.paragraphs),(m=R.about)!=null&&m.location&&r(R.about.location),(g=R.about)!=null&&g.photoUrl&&s(R.about.photoUrl)}}catch(T){console.error("Error loading about data:",T)}})()},[]);const c=async u=>{try{const f=await fa(Te(oe,"portfolio","main")),m=f.exists()?f.data():{};await E0(Te(oe,"portfolio","main"),{...m,about:{...m.about,photoUrl:u}}),s(u)}catch(f){console.error("Error saving photo:",f),alert("Failed to save photo. Please try again.")}};return d.jsx("section",{id:"about","aria-label":"About",ref:o,className:`${ut.container} ${l?ut.revealed:""}`,children:d.jsxs("div",{className:ut.grid,children:[d.jsxs("div",{children:[d.jsxs("div",{className:ut.eyebrow,children:["ABOUT ",d.jsx($s,{size:14,color:"var(--dc-red)"})]}),d.jsxs("div",{className:ut.headingWrap,children:[d.jsx("h2",{className:ut.h2,children:"I build things people actually want to use."}),d.jsx("div",{className:ut.underline})]}),d.jsx("div",{className:ut.points,children:t.map((u,f)=>d.jsxs("div",{className:ut.point,children:[d.jsx("div",{className:ut.number,children:String(f+1).padStart(2,"0")}),d.jsx("p",{className:ut.body,children:u})]},f))})]}),d.jsxs("div",{className:ut.photoWrap,children:[d.jsx("div",{className:ut.tapeStrip}),d.jsx("div",{className:ut.photoFrame,children:d.jsx(Op,{src:i,alt:"Portrait of Yuan Pangan",imgClassName:ut.photo,onUploaded:c})}),d.jsxs("div",{className:ut.pinNote,children:["📍 ",n]})]})]})})}const OV="_container_oi0wo_1",LV="_revealed_oi0wo_10",MV="_inner_oi0wo_15",jV="_eyebrow_oi0wo_20",FV="_headingWrap_oi0wo_27",UV="_h2_oi0wo_33",BV="_underline_oi0wo_43",$V="_addButton_oi0wo_53",zV="_projectsGrid_oi0wo_65",qV="_projectWrapper_oi0wo_73",HV="_adminControls_oi0wo_87",WV="_pinnedButton_oi0wo_105",GV="_editOverlay_oi0wo_110",KV="_editForm_oi0wo_126",QV="_formButtons_oi0wo_169",wt={container:OV,revealed:LV,inner:MV,eyebrow:jV,headingWrap:FV,h2:UV,underline:BV,addButton:$V,projectsGrid:zV,projectWrapper:qV,adminControls:HV,pinnedButton:WV,editOverlay:GV,editForm:KV,formButtons:QV},YV="_card_109km_1",XV="_accentRed_109km_12",JV="_accentBlue_109km_17",ZV="_accentYellow_109km_22",eO="_bar_109km_27",tO="_imageArea_109km_31",nO="_image_109km_31",rO="_body_109km_57",iO="_tag_109km_65",sO="_title_109km_86",oO="_description_109km_93",aO="_techStack_109km_99",lO="_techBadge_109km_106",cO="_viewDetails_109km_114",Ht={card:YV,accentRed:XV,accentBlue:JV,accentYellow:ZV,bar:eO,imageArea:tO,image:nO,body:rO,tag:iO,title:sO,description:oO,techStack:aO,techBadge:lO,viewDetails:cO},ky=["accentRed","accentBlue","accentYellow"];function uO({project:t,index:e=0,onClick:n,onPhotoUploaded:r}){var o;const{isAdmin:i}=er(),s=Ht[ky[e%ky.length]];return d.jsxs("div",{className:`${Ht.card} ${s}`,onClick:n,children:[d.jsx("div",{className:Ht.bar}),(t.imageUrl||i)&&d.jsx("div",{className:Ht.imageArea,onClick:l=>l.stopPropagation(),children:d.jsx(Op,{src:t.imageUrl,alt:t.title,imgClassName:Ht.image,onUploaded:r})}),d.jsxs("div",{className:Ht.body,children:[t.category&&d.jsx("div",{className:Ht.tag,children:t.category}),d.jsx("h3",{className:Ht.title,children:t.title}),d.jsx("p",{className:Ht.description,children:t.shortDesc}),d.jsx("div",{className:Ht.techStack,children:(o=t.technologies)==null?void 0:o.slice(0,4).map((l,c)=>d.jsx("span",{className:Ht.techBadge,children:l},c))}),d.jsx("button",{className:Ht.viewDetails,"data-cursor-hover":"true",children:"View details →"})]})]})}const hO="_modalOverlay_1anjl_1",dO="_modalCard_1anjl_13",fO="_modalHeader_1anjl_24",pO="_modalTag_1anjl_32",mO="_modalTitle_1anjl_39",gO="_modalClose_1anjl_46",_O="_modalBlurb_1anjl_58",yO="_section_1anjl_64",vO="_modalLabel_1anjl_68",wO="_modalP_1anjl_75",EO="_highlightsList_1anjl_81",IO="_checkmark_1anjl_98",TO="_statusRow_1anjl_104",SO="_techPills_1anjl_111",AO="_techPill_1anjl_111",CO="_linkRow_1anjl_126",PO="_modalLink_1anjl_132",De={modalOverlay:hO,modalCard:dO,modalHeader:fO,modalTag:pO,modalTitle:mO,modalClose:gO,modalBlurb:_O,section:yO,modalLabel:vO,modalP:wO,highlightsList:EO,checkmark:IO,statusRow:TO,techPills:SO,techPill:AO,linkRow:CO,modalLink:PO};function RO({project:t,onClose:e}){var r,i;U.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}),[]);const n=s=>{s.target===s.currentTarget&&e()};return d.jsx(Ln,{children:d.jsx("div",{className:De.modalOverlay,onClick:n,children:d.jsxs("div",{className:De.modalCard,onClick:s=>s.stopPropagation(),children:[d.jsxs("div",{className:De.modalHeader,children:[d.jsxs("div",{children:[t.category&&d.jsx("div",{className:De.modalTag,children:t.category}),d.jsx("h3",{className:De.modalTitle,children:t.title})]}),d.jsx("button",{onClick:e,"aria-label":"Close",className:De.modalClose,children:"✕"})]}),d.jsx("p",{className:De.modalBlurb,children:t.fullDesc}),((r=t.highlights)==null?void 0:r.length)>0&&d.jsxs("div",{className:De.section,children:[d.jsx("div",{className:De.modalLabel,children:"KEY HIGHLIGHTS"}),d.jsx("ul",{className:De.highlightsList,children:t.highlights.map((s,o)=>d.jsxs("li",{children:[d.jsx("span",{className:De.checkmark,children:"✓"}),s]},o))})]}),(t.status||t.category)&&d.jsxs("div",{className:De.statusRow,children:[t.status&&d.jsxs("div",{children:[d.jsx("div",{className:De.modalLabel,children:"STATUS"}),d.jsx("p",{className:De.modalP,children:t.status})]}),t.category&&d.jsxs("div",{children:[d.jsx("div",{className:De.modalLabel,children:"CATEGORY"}),d.jsx("p",{className:De.modalP,children:t.category})]})]}),((i=t.technologies)==null?void 0:i.length)>0&&d.jsx("div",{className:De.techPills,children:t.technologies.map((s,o)=>d.jsx("span",{className:De.techPill,children:s},o))}),d.jsxs("div",{className:De.linkRow,children:[t.github&&d.jsx("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:De.modalLink,children:"GitHub ↗"}),t.conferencePaper&&d.jsx("a",{href:t.conferencePaper,target:"_blank",rel:"noopener noreferrer",className:De.modalLink,children:"Conference Paper ↗"})]})]})})})}function kO(){const{isAdmin:t}=er(),[e,n]=U.useState(null),[r,i]=U.useState([]),[s,o]=U.useState(!1),[l,c]=U.useState(null),[u,f]=Di();U.useEffect(()=>{m()},[]);const m=async()=>{try{const I=(await Fs(tn(oe,"projects"))).docs.map(k=>({...k.data(),firestoreId:k.id}));I.sort((k,O)=>k.isPinned&&!O.isPinned?-1:!k.isPinned&&O.isPinned?1:0),i(I)}catch(y){console.error("Error loading projects:",y),i([])}},g=async y=>{try{await bn(Te(oe,"projects",y.firestoreId),{isPinned:!y.isPinned}),await m()}catch(I){console.error("Error toggling pin:",I),alert("Failed to toggle pin")}},T=async(y,I)=>{try{await bn(Te(oe,"projects",y.firestoreId),{imageUrl:I}),await m()}catch(k){console.error("Error saving project photo:",k),alert("Failed to save photo. Please try again.")}},R=()=>{c({title:"",shortDesc:"",fullDesc:"",technologies:[],github:"",highlights:[],category:"",status:"",conferencePaper:"",isPinned:!1}),o(!0)},N=y=>{c(y),o(!0)},b=async y=>{try{y.firestoreId?await bn(Te(oe,"projects",y.firestoreId),y):await Bs(tn(oe,"projects"),y),await m(),o(!1),c(null)}catch(I){console.error("Error saving project:",I),alert("Failed to save project")}},w=async y=>{if(window.confirm("Are you sure you want to delete this project?"))try{await Us(Te(oe,"projects",y)),await m()}catch(I){console.error("Error deleting project:",I),alert("Failed to delete project")}};return d.jsxs("section",{id:"projects","aria-label":"Projects",ref:u,className:`${wt.container} ${f?wt.revealed:""}`,children:[d.jsxs("div",{className:wt.inner,children:[d.jsxs("div",{className:wt.eyebrow,children:["PROJECTS ",d.jsx($s,{size:14,color:"var(--dc-red)"})]}),d.jsxs("div",{className:wt.headingWrap,children:[d.jsx("h2",{className:wt.h2,children:"Selected work."}),d.jsx("div",{className:wt.underline})]}),t&&d.jsx("button",{className:wt.addButton,onClick:R,children:"+ Add Project"}),d.jsx("div",{className:wt.projectsGrid,children:r.map((y,I)=>d.jsxs("div",{className:wt.projectWrapper,"data-pinned":y.isPinned||!1,children:[d.jsx(uO,{project:y,index:I,onClick:()=>n(y),onPhotoUploaded:k=>T(y,k)}),t&&d.jsxs("div",{className:wt.adminControls,children:[d.jsx("button",{onClick:()=>N(y),children:"✏️ Edit"}),y.firestoreId&&d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:()=>g(y),className:y.isPinned?wt.pinnedButton:"",title:y.isPinned?"Unpin project":"Pin project",children:y.isPinned?"⭐ Pinned":"☆ Pin"}),d.jsx("button",{onClick:()=>w(y.firestoreId),children:"🗑️ Delete"})]})]})]},y.id||y.firestoreId))})]}),e&&d.jsx(RO,{project:e,onClose:()=>n(null)}),s&&d.jsx(NO,{project:l,onSave:b,onCancel:()=>{o(!1),c(null)}})]})}function NO({project:t,onSave:e,onCancel:n}){var c,u;const[r,i]=U.useState({...t,technologies:t.technologies||[],highlights:t.highlights||[]}),s=(f,m)=>{i(g=>({...g,[f]:m}))},o=(f,m)=>{const g=m.split(`
`).filter(T=>T.trim());i(T=>({...T,[f]:g}))},l=f=>{f.preventDefault(),e(r)};return d.jsx(Ln,{children:d.jsx("div",{className:wt.editOverlay,onClick:n,children:d.jsxs("div",{className:wt.editForm,onClick:f=>f.stopPropagation(),children:[d.jsx("h3",{children:t.firestoreId?"Edit Project":"Add New Project"}),d.jsxs("form",{onSubmit:l,children:[d.jsxs("label",{children:["Title:",d.jsx("input",{type:"text",value:r.title,onChange:f=>s("title",f.target.value),required:!0})]}),d.jsxs("label",{children:["Short Description:",d.jsx("input",{type:"text",value:r.shortDesc,onChange:f=>s("shortDesc",f.target.value),required:!0})]}),d.jsxs("label",{children:["Full Description:",d.jsx("textarea",{value:r.fullDesc,onChange:f=>s("fullDesc",f.target.value),rows:4,required:!0})]}),d.jsxs("label",{children:["Technologies (one per line):",d.jsx("textarea",{value:((c=r.technologies)==null?void 0:c.join(`
`))||"",onChange:f=>o("technologies",f.target.value),rows:3})]}),d.jsxs("label",{children:["GitHub URL:",d.jsx("input",{type:"url",value:r.github,onChange:f=>s("github",f.target.value)})]}),d.jsxs("label",{children:["Highlights (one per line):",d.jsx("textarea",{value:((u=r.highlights)==null?void 0:u.join(`
`))||"",onChange:f=>o("highlights",f.target.value),rows:4})]}),d.jsxs("label",{children:["Category:",d.jsx("input",{type:"text",value:r.category,onChange:f=>s("category",f.target.value)})]}),d.jsxs("label",{children:["Status:",d.jsx("input",{type:"text",value:r.status,onChange:f=>s("status",f.target.value)})]}),d.jsxs("label",{children:["Attachment URL (Conference Paper):",d.jsx("input",{type:"url",value:r.conferencePaper||"",onChange:f=>s("conferencePaper",f.target.value)})]}),d.jsxs("div",{className:wt.formButtons,children:[d.jsx("button",{type:"submit",children:"Save Project"}),d.jsx("button",{type:"button",onClick:n,children:"Cancel"})]})]})]})})})}const xO="_container_1muzs_1",DO="_revealed_1muzs_11",bO="_inner_1muzs_16",VO="_eyebrow_1muzs_21",OO="_headingWrap_1muzs_28",LO="_h2_1muzs_34",MO="_underline_1muzs_44",jO="_addButton_1muzs_54",FO="_catRow_1muzs_66",UO="_catButton_1muzs_74",BO="_active_1muzs_84",$O="_adminControls_1muzs_89",zO="_chipGrid_1muzs_105",qO="_chip_1muzs_105",HO="_chipLabel_1muzs_127",WO="_chipDot_1muzs_132",GO="_editOverlay_1muzs_140",KO="_editForm_1muzs_156",QO="_formButtons_1muzs_199",ze={container:xO,revealed:DO,inner:bO,eyebrow:VO,headingWrap:OO,h2:LO,underline:MO,addButton:jO,catRow:FO,catButton:UO,active:BO,adminControls:$O,chipGrid:zO,chip:qO,chipLabel:HO,chipDot:WO,editOverlay:GO,editForm:KO,formButtons:QO};function YO(){const{isAdmin:t}=er(),[e,n]=U.useState({}),[r,i]=U.useState(""),[s,o]=U.useState(!1),[l,c]=U.useState(""),[u,f]=U.useState(""),[m,g]=Di();U.useEffect(()=>{T()},[]);const T=async()=>{try{const k=await Fs(tn(oe,"skills")),O={};k.docs.forEach(L=>{O[L.id]=L.data().skills||[]}),n(O),i(L=>L&&O[L]?L:Object.keys(O)[0]||"")}catch(k){console.error("Error loading skills:",k)}},R=k=>{c(k),f(e[k].join(`
`)),o(!0)},N=()=>{c(""),f(""),o(!0)},b=async k=>{k.preventDefault();const O=u.split(`
`).filter(E=>E.trim()),L=l||k.target.categoryName.value;try{await bn(Te(oe,"skills",L),{skills:O}),await T(),o(!1)}catch{try{await Bs(tn(oe,"skills"),{skills:O}),await T(),o(!1)}catch(v){console.error("Error saving category:",v)}}},w=async k=>{if(window.confirm(`Delete ${k} category?`))try{await Us(Te(oe,"skills",k)),await T()}catch(O){console.error("Error deleting category:",O)}},y=Object.keys(e),I=e[r]||[];return d.jsxs("section",{id:"skills","aria-label":"Skills",ref:m,className:`${ze.container} ${g?ze.revealed:""}`,children:[d.jsxs("div",{className:ze.inner,children:[d.jsx("div",{className:ze.eyebrow,children:"SKILLS"}),d.jsxs("div",{className:ze.headingWrap,children:[d.jsx("h2",{className:ze.h2,children:"What I work with."}),d.jsx("div",{className:ze.underline})]}),t&&d.jsx("button",{className:ze.addButton,onClick:N,children:"+ Add Category"}),d.jsx("div",{className:ze.catRow,children:y.map(k=>d.jsx("button",{onClick:()=>i(k),className:`${ze.catButton} ${r===k?ze.active:""}`,children:k},k))}),t&&r&&d.jsxs("div",{className:ze.adminControls,children:[d.jsx("button",{onClick:()=>R(r),children:"✏️ Edit"}),d.jsx("button",{onClick:()=>w(r),children:"🗑️ Delete"})]}),d.jsx("div",{className:ze.chipGrid,children:I.map(k=>d.jsxs("div",{className:ze.chip,children:[d.jsx("span",{className:ze.chipLabel,children:k}),d.jsx("span",{className:ze.chipDot})]},k))})]}),s&&d.jsx(Ln,{children:d.jsx("div",{className:ze.editOverlay,onClick:()=>o(!1),children:d.jsxs("div",{className:ze.editForm,onClick:k=>k.stopPropagation(),children:[d.jsx("h3",{children:l?"Edit Category":"Add New Category"}),d.jsxs("form",{onSubmit:b,children:[!l&&d.jsxs("label",{children:["Category Name:",d.jsx("input",{type:"text",name:"categoryName",required:!0})]}),d.jsxs("label",{children:["Skills (one per line):",d.jsx("textarea",{value:u,onChange:k=>f(k.target.value),rows:8,required:!0})]}),d.jsxs("div",{className:ze.formButtons,children:[d.jsx("button",{type:"submit",children:"Save"}),d.jsx("button",{type:"button",onClick:()=>o(!1),children:"Cancel"})]})]})]})})})]})}const XO="_container_1tvur_1",JO="_revealed_1tvur_11",ZO="_inner_1tvur_16",eL="_eyebrow_1tvur_21",tL="_headingWrap_1tvur_28",nL="_h2_1tvur_34",rL="_underline_1tvur_44",iL="_addButton_1tvur_54",sL="_timelineWrap_1tvur_66",oL="_timelineItem_1tvur_76",aL="_timelineDot_1tvur_84",lL="_itemBody_1tvur_95",cL="_period_1tvur_100",uL="_role_1tvur_106",hL="_org_1tvur_113",dL="_bulletList_1tvur_119",fL="_bullet_1tvur_119",pL="_thumb_1tvur_132",mL="_thumbImg_1tvur_146",gL="_thumbTiltA_1tvur_156",_L="_thumbTiltB_1tvur_160",yL="_adminControls_1tvur_164",vL="_editOverlay_1tvur_180",wL="_editForm_1tvur_196",EL="_formButtons_1tvur_241",we={container:XO,revealed:JO,inner:ZO,eyebrow:eL,headingWrap:tL,h2:nL,underline:rL,addButton:iL,timelineWrap:sL,timelineItem:oL,timelineDot:aL,itemBody:lL,period:cL,role:uL,org:hL,bulletList:dL,bullet:fL,thumb:pL,thumbImg:mL,thumbTiltA:gL,thumbTiltB:_L,adminControls:yL,editOverlay:vL,editForm:wL,formButtons:EL};function IL(){const{isAdmin:t}=er(),[e,n]=U.useState([]),[r,i]=U.useState(!1),[s,o]=U.useState(null),[l,c]=Di();U.useEffect(()=>{f()},[]);const u=b=>{var L;const w=b.match(/(\w+\s+)?(\d{4})/);if(!w)return 0;const y=parseInt(w[2]),I=(L=w[1])==null?void 0:L.trim(),O=I&&{January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12,Jan:1,Feb:2,Mar:3,Apr:4,Jun:6,Jul:7,Aug:8,Sep:9,Sept:9,Oct:10,Nov:11,Dec:12}[I]||1;return y*100+O},f=async()=>{try{const w=(await Fs(tn(oe,"experiences"))).docs.map(y=>({...y.data(),firestoreId:y.id}));w.sort((y,I)=>u(I.period)-u(y.period)),n(w)}catch(b){console.error("Error loading experiences:",b),n([])}},m=()=>{o({title:"",company:"",period:"",location:"",description:[],icon:"💼",type:"work"}),i(!0)},g=b=>{o(b),i(!0)},T=async b=>{try{b.firestoreId?await bn(Te(oe,"experiences",b.firestoreId),b):await Bs(tn(oe,"experiences"),b),await f(),i(!1),o(null)}catch(w){console.error("Error saving experience:",w),alert("Failed to save experience")}},R=async b=>{if(window.confirm("Delete this experience?"))try{await Us(Te(oe,"experiences",b)),await f()}catch(w){console.error("Error deleting experience:",w)}},N=async(b,w)=>{try{await bn(Te(oe,"experiences",b.firestoreId),{photoUrl:w}),await f()}catch(y){console.error("Error saving experience photo:",y),alert("Failed to save photo. Please try again.")}};return d.jsxs("section",{id:"experience","aria-label":"Experience",ref:l,className:`${we.container} ${c?we.revealed:""}`,children:[d.jsxs("div",{className:we.inner,children:[d.jsx("div",{className:we.eyebrow,children:"EXPERIENCE"}),d.jsxs("div",{className:we.headingWrap,children:[d.jsx("h2",{className:we.h2,children:"Where I've worked."}),d.jsx("div",{className:we.underline})]}),t&&d.jsx("button",{className:we.addButton,onClick:m,children:"+ Add Experience"}),d.jsx("div",{className:we.timelineWrap,children:e.map((b,w)=>{var y;return d.jsxs("div",{className:we.timelineItem,children:[d.jsx("div",{className:we.timelineDot}),d.jsxs("div",{className:we.itemBody,children:[d.jsx("div",{className:we.period,children:b.period}),d.jsx("h3",{className:we.role,children:b.title}),d.jsxs("div",{className:we.org,children:[b.company,b.location?` · ${b.location}`:""]}),d.jsx("ul",{className:we.bulletList,children:(y=b.description)==null?void 0:y.map((I,k)=>d.jsx("li",{className:we.bullet,children:I},k))}),t&&d.jsxs("div",{className:we.adminControls,children:[d.jsx("button",{onClick:()=>g(b),children:"✏️ Edit"}),b.firestoreId&&d.jsx("button",{onClick:()=>R(b.firestoreId),children:"🗑️ Delete"})]})]}),d.jsx("div",{className:`${we.thumb} ${w%2===0?we.thumbTiltA:we.thumbTiltB}`,children:d.jsx(Op,{src:b.photoUrl,alt:b.title,imgClassName:we.thumbImg,fallback:b.icon,compact:!0,onUploaded:I=>N(b,I)})})]},b.id||b.firestoreId)})})]}),r&&d.jsx(TL,{experience:s,onSave:T,onCancel:()=>{i(!1),o(null)}})]})}function TL({experience:t,onSave:e,onCancel:n}){var c;const[r,i]=U.useState({...t,description:t.description||[]}),s=(u,f)=>{i(m=>({...m,[u]:f}))},o=u=>{const f=u.split(`
`).filter(m=>m.trim());i(m=>({...m,description:f}))};Array.isArray(r.description)||(r.description=[]);const l=u=>{u.preventDefault(),e(r)};return d.jsx(Ln,{children:d.jsx("div",{className:we.editOverlay,onClick:n,children:d.jsxs("div",{className:we.editForm,onClick:u=>u.stopPropagation(),children:[d.jsx("h3",{children:t.firestoreId?"Edit Experience":"Add New Experience"}),d.jsxs("form",{onSubmit:l,children:[d.jsxs("label",{children:["Title:",d.jsx("input",{type:"text",value:r.title,onChange:u=>s("title",u.target.value),required:!0})]}),d.jsxs("label",{children:["Company/Organization:",d.jsx("input",{type:"text",value:r.company,onChange:u=>s("company",u.target.value),required:!0})]}),d.jsxs("label",{children:["Period:",d.jsx("input",{type:"text",value:r.period,onChange:u=>s("period",u.target.value),placeholder:"e.g., January 2024 – Present",required:!0})]}),d.jsxs("label",{children:["Location:",d.jsx("input",{type:"text",value:r.location,onChange:u=>s("location",u.target.value),required:!0})]}),d.jsxs("label",{children:["Icon (emoji):",d.jsx("input",{type:"text",value:r.icon,onChange:u=>s("icon",u.target.value),placeholder:"💼",required:!0})]}),d.jsxs("label",{children:["Type:",d.jsxs("select",{value:r.type,onChange:u=>s("type",u.target.value),children:[d.jsx("option",{value:"work",children:"Work"}),d.jsx("option",{value:"leadership",children:"Leadership"})]})]}),d.jsxs("label",{children:["Description (one point per line):",d.jsx("textarea",{value:((c=r.description)==null?void 0:c.join(`
`))||"",onChange:u=>o(u.target.value),rows:6,required:!0})]}),d.jsxs("div",{className:we.formButtons,children:[d.jsx("button",{type:"submit",children:"Save Experience"}),d.jsx("button",{type:"button",onClick:n,children:"Cancel"})]})]})]})})})}const SL="_container_e9alp_1",AL="_revealed_e9alp_10",CL="_inner_e9alp_15",PL="_eyebrow_e9alp_20",RL="_headingWrap_e9alp_27",kL="_h2_e9alp_33",NL="_underline_e9alp_43",xL="_addButton_e9alp_53",DL="_grid_e9alp_65",bL="_card_e9alp_73",VL="_tag_e9alp_80",OL="_title_e9alp_87",LL="_body_e9alp_94",ML="_pillRow_e9alp_100",jL="_pill_e9alp_100",FL="_label_e9alp_115",UL="_adminControls_e9alp_122",BL="_editOverlay_e9alp_138",$L="_editForm_e9alp_154",zL="_formButtons_e9alp_197",be={container:SL,revealed:AL,inner:CL,eyebrow:PL,headingWrap:RL,h2:kL,underline:NL,addButton:xL,grid:DL,card:bL,tag:VL,title:OL,body:LL,pillRow:ML,pill:jL,label:FL,adminControls:UL,editOverlay:BL,editForm:$L,formButtons:zL};function qL(){const{isAdmin:t}=er(),[e,n]=U.useState([]),[r,i]=U.useState(!1),[s,o]=U.useState(null),[l,c]=Di();U.useEffect(()=>{u()},[]);const u=async()=>{try{const N=(await Fs(tn(oe,"research"))).docs.map(b=>({...b.data(),firestoreId:b.id}));n(N)}catch(R){console.error("Error loading research:",R),n([])}},f=()=>{o({title:"",type:"",summary:"",methods:[],findings:""}),i(!0)},m=R=>{o(R),i(!0)},g=async R=>{try{R.firestoreId?await bn(Te(oe,"research",R.firestoreId),R):await Bs(tn(oe,"research"),R),await u(),i(!1),o(null)}catch(N){console.error("Error saving research item:",N),alert("Failed to save research item")}},T=async R=>{if(window.confirm("Delete this research item?"))try{await Us(Te(oe,"research",R)),await u()}catch(N){console.error("Error deleting research item:",N)}};return d.jsxs("section",{id:"research","aria-label":"Research",ref:l,className:`${be.container} ${c?be.revealed:""}`,children:[d.jsxs("div",{className:be.inner,children:[d.jsx("div",{className:be.eyebrow,children:"RESEARCH"}),d.jsxs("div",{className:be.headingWrap,children:[d.jsx("h2",{className:be.h2,children:"Academic & research work."}),d.jsx("div",{className:be.underline})]}),t&&d.jsx("button",{className:be.addButton,onClick:f,children:"+ Add Research Item"}),d.jsx("div",{className:be.grid,children:e.map(R=>{var N;return d.jsxs("div",{className:be.card,children:[R.type&&d.jsx("div",{className:be.tag,children:R.type}),d.jsx("h3",{className:be.title,children:R.title}),d.jsx("p",{className:be.body,children:R.summary}),((N=R.methods)==null?void 0:N.length)>0&&d.jsx("div",{className:be.pillRow,children:R.methods.map((b,w)=>d.jsx("span",{className:be.pill,children:b},w))}),R.findings&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:be.label,children:"KEY FINDING"}),d.jsx("p",{className:be.body,children:R.findings})]}),t&&d.jsxs("div",{className:be.adminControls,children:[d.jsx("button",{onClick:()=>m(R),children:"✏️ Edit"}),d.jsx("button",{onClick:()=>T(R.firestoreId),children:"🗑️ Delete"})]})]},R.id||R.firestoreId)})})]}),r&&d.jsx(HL,{item:s,onSave:g,onCancel:()=>{i(!1),o(null)}})]})}function HL({item:t,onSave:e,onCancel:n}){var c;const[r,i]=U.useState({...t,methods:t.methods||[]}),s=(u,f)=>i(m=>({...m,[u]:f})),o=(u,f)=>{const m=f.split(`
`).filter(g=>g.trim());i(g=>({...g,[u]:m}))},l=u=>{u.preventDefault(),e(r)};return d.jsx(Ln,{children:d.jsx("div",{className:be.editOverlay,onClick:n,children:d.jsxs("div",{className:be.editForm,onClick:u=>u.stopPropagation(),children:[d.jsx("h3",{children:t.firestoreId?"Edit Research Item":"Add Research Item"}),d.jsxs("form",{onSubmit:l,children:[d.jsxs("label",{children:["Title:",d.jsx("input",{type:"text",value:r.title,onChange:u=>s("title",u.target.value),required:!0})]}),d.jsxs("label",{children:["Type (e.g. Undergraduate Thesis):",d.jsx("input",{type:"text",value:r.type,onChange:u=>s("type",u.target.value),required:!0})]}),d.jsxs("label",{children:["Summary:",d.jsx("textarea",{value:r.summary,onChange:u=>s("summary",u.target.value),rows:3,required:!0})]}),d.jsxs("label",{children:["Methods (one per line):",d.jsx("textarea",{value:((c=r.methods)==null?void 0:c.join(`
`))||"",onChange:u=>o("methods",u.target.value),rows:3})]}),d.jsxs("label",{children:["Key Finding:",d.jsx("textarea",{value:r.findings,onChange:u=>s("findings",u.target.value),rows:3})]}),d.jsxs("div",{className:be.formButtons,children:[d.jsx("button",{type:"submit",children:"Save"}),d.jsx("button",{type:"button",onClick:n,children:"Cancel"})]})]})]})})})}const WL="_container_1y7di_1",GL="_revealed_1y7di_11",KL="_inner_1y7di_16",QL="_eyebrow_1y7di_21",YL="_headingWrap_1y7di_28",XL="_h2_1y7di_34",JL="_underline_1y7di_44",ZL="_addButton_1y7di_54",e4="_grid_1y7di_66",t4="_card_1y7di_74",n4="_dashed_1y7di_82",r4="_accentred_1y7di_86",i4="_accentblue_1y7di_91",s4="_accentyellow_1y7di_96",o4="_title_1y7di_101",a4="_org_1y7di_108",l4="_note_1y7di_114",c4="_adminControls_1y7di_120",u4="_editOverlay_1y7di_136",h4="_editForm_1y7di_152",d4="_formButtons_1y7di_195",He={container:WL,revealed:GL,inner:KL,eyebrow:QL,headingWrap:YL,h2:XL,underline:JL,addButton:ZL,grid:e4,card:t4,dashed:n4,accentred:r4,accentblue:i4,accentyellow:s4,title:o4,org:a4,note:l4,adminControls:c4,editOverlay:u4,editForm:h4,formButtons:d4};function f4(){const{isAdmin:t}=er(),[e,n]=U.useState([]),[r,i]=U.useState(!1),[s,o]=U.useState(null),[l,c]=Di();U.useEffect(()=>{u()},[]);const u=async()=>{try{const b=(await Fs(tn(oe,"achievements"))).docs.map(w=>({...w.data(),firestoreId:w.id}));n(b)}catch(N){console.error("Error loading achievements:",N),n([])}},f=()=>{o({title:"",org:"",note:"",dashed:!1}),i(!0)},m=N=>{o(N),i(!0)},g=async N=>{try{N.firestoreId?await bn(Te(oe,"achievements",N.firestoreId),N):await Bs(tn(oe,"achievements"),N),await u(),i(!1),o(null)}catch(b){console.error("Error saving achievement:",b),alert("Failed to save achievement")}},T=async N=>{if(window.confirm("Delete this achievement?"))try{await Us(Te(oe,"achievements",N)),await u()}catch(b){console.error("Error deleting achievement:",b)}},R=["red","blue","yellow","red"];return d.jsxs("section",{id:"achievements","aria-label":"Achievements",ref:l,className:`${He.container} ${c?He.revealed:""}`,children:[d.jsxs("div",{className:He.inner,children:[d.jsxs("div",{className:He.eyebrow,children:["ACHIEVEMENTS ",d.jsx($s,{size:14,color:"var(--dc-red)"})]}),d.jsxs("div",{className:He.headingWrap,children:[d.jsx("h2",{className:He.h2,children:"Recognition along the way."}),d.jsx("div",{className:He.underline})]}),t&&d.jsx("button",{className:He.addButton,onClick:f,children:"+ Add Achievement"}),d.jsx("div",{className:He.grid,children:e.map((N,b)=>d.jsxs("div",{className:`${He.card} ${N.dashed?He.dashed:""} ${He["accent"+R[b%R.length]]}`,children:[d.jsx("h3",{className:He.title,children:N.title}),d.jsx("div",{className:He.org,children:N.org}),d.jsx("p",{className:He.note,children:N.note}),t&&d.jsxs("div",{className:He.adminControls,children:[d.jsx("button",{onClick:()=>m(N),children:"✏️ Edit"}),d.jsx("button",{onClick:()=>T(N.firestoreId),children:"🗑️ Delete"})]})]},N.id||N.firestoreId))})]}),r&&d.jsx(p4,{item:s,onSave:g,onCancel:()=>{i(!1),o(null)}})]})}function p4({item:t,onSave:e,onCancel:n}){const[r,i]=U.useState({...t}),s=(l,c)=>i(u=>({...u,[l]:c})),o=l=>{l.preventDefault(),e(r)};return d.jsx(Ln,{children:d.jsx("div",{className:He.editOverlay,onClick:n,children:d.jsxs("div",{className:He.editForm,onClick:l=>l.stopPropagation(),children:[d.jsx("h3",{children:t.firestoreId?"Edit Achievement":"Add Achievement"}),d.jsxs("form",{onSubmit:o,children:[d.jsxs("label",{children:["Title:",d.jsx("input",{type:"text",value:r.title,onChange:l=>s("title",l.target.value),required:!0})]}),d.jsxs("label",{children:["Organization:",d.jsx("input",{type:"text",value:r.org,onChange:l=>s("org",l.target.value),required:!0})]}),d.jsxs("label",{children:["Note:",d.jsx("textarea",{value:r.note,onChange:l=>s("note",l.target.value),rows:3,required:!0})]}),d.jsxs("label",{children:[d.jsx("input",{type:"checkbox",checked:!!r.dashed,onChange:l=>s("dashed",l.target.checked),style:{width:"auto",display:"inline-block",marginRight:"8px"}}),"Dashed border (mark as in-progress / TBD)"]}),d.jsxs("div",{className:He.formButtons,children:[d.jsx("button",{type:"submit",children:"Save"}),d.jsx("button",{type:"button",onClick:n,children:"Cancel"})]})]})]})})})}const m4="_container_5f5u5_1",g4="_fadeInUp_5f5u5_1",_4="_collapsed_5f5u5_9",y4="_expanded_5f5u5_14",v4="_toggleButton_5f5u5_18",w4="_toggleIcon_5f5u5_46",E4="_toggleText_5f5u5_52",I4="_toggleEmoji_5f5u5_59",T4="_content_5f5u5_64",S4="_expandContent_5f5u5_1",A4="_header_5f5u5_79",C4="_subtitle_5f5u5_84",P4="_adminControls_5f5u5_90",R4="_addButton_5f5u5_98",k4="_logoutButton_5f5u5_99",N4="_categoryFilter_5f5u5_133",x4="_categoryButton_5f5u5_141",D4="_active_5f5u5_164",b4="_categoryIcon_5f5u5_170",V4="_entriesGrid_5f5u5_174",O4="_emptyState_5f5u5_181",L4="_emptyIcon_5f5u5_188",qe={container:m4,fadeInUp:g4,collapsed:_4,expanded:y4,toggleButton:v4,toggleIcon:w4,toggleText:E4,toggleEmoji:I4,content:T4,expandContent:S4,header:A4,subtitle:C4,adminControls:P4,addButton:R4,logoutButton:k4,categoryFilter:N4,categoryButton:x4,active:D4,categoryIcon:b4,entriesGrid:V4,emptyState:O4,emptyIcon:L4},M4="_formOverlay_1ovc7_1",j4="_fadeIn_1ovc7_1",F4="_formContainer_1ovc7_18",U4="_slideUp_1ovc7_1",B4="_formHeader_1ovc7_31",$4="_closeButton_1ovc7_45",z4="_form_1ovc7_1",q4="_formGroup_1ovc7_72",H4="_input_1ovc7_86",W4="_textarea_1ovc7_87",G4="_select_1ovc7_88",K4="_buttonGroup_1ovc7_129",Q4="_submitButton_1ovc7_135",Y4="_cancelButton_1ovc7_136",X4="_fileInput_1ovc7_254",J4="_fileInputLabel_1ovc7_258",Z4="_fileInfo_1ovc7_277",eM="_imagePreviewGrid_1ovc7_283",tM="_imagePreview_1ovc7_283",nM="_removeImageButton_1ovc7_305",ye={formOverlay:M4,fadeIn:j4,formContainer:F4,slideUp:U4,formHeader:B4,closeButton:$4,form:z4,formGroup:q4,input:H4,textarea:W4,select:G4,buttonGroup:K4,submitButton:Q4,cancelButton:Y4,fileInput:X4,fileInputLabel:J4,fileInfo:Z4,imagePreviewGrid:eM,imagePreview:tM,removeImageButton:nM};function rM({entry:t,categories:e,onSubmit:n,onCancel:r}){var y,I;const[i,s]=U.useState({title:(t==null?void 0:t.title)||"",content:(t==null?void 0:t.content)||"",category:(t==null?void 0:t.category)||((y=e[0])==null?void 0:y.id)||"",source:(t==null?void 0:t.source)||"",tags:((I=t==null?void 0:t.tags)==null?void 0:I.join(", "))||"",images:(t==null?void 0:t.images)||[]}),[o,l]=U.useState(!1),[c,u]=U.useState([]),f="portfolio_uploads",m="dxcmdqs3j",g=k=>{const O=Array.from(k.target.files);u(O)},T=async k=>{const O=new FormData;O.append("file",k),O.append("upload_preset",f);try{const E=await(await fetch(`https://api.cloudinary.com/v1_1/${m}/image/upload`,{method:"POST",body:O})).json();return{url:E.secure_url,publicId:E.public_id}}catch(L){throw console.error("Error uploading to Cloudinary:",L),L}},R=async()=>{if(c.length===0)return[];l(!0);const k=c.map(O=>T(O));try{const O=await Promise.all(k);return l(!1),O}catch(O){return console.error("Error uploading images:",O),l(!1),alert("Failed to upload images. Please try again."),[]}},N=k=>{s(O=>({...O,images:O.images.filter((L,E)=>E!==k)}))},b=async k=>{k.preventDefault();const O=await R(),L={...i,images:[...i.images,...O],tags:i.tags.split(",").map(E=>E.trim()).filter(E=>E.length>0)};n(t?{...t,...L}:L)},w=k=>{const{name:O,value:L}=k.target;s(E=>({...E,[O]:L}))};return d.jsx(Ln,{children:d.jsx("div",{className:ye.formOverlay,onClick:r,children:d.jsxs("div",{className:ye.formContainer,onClick:k=>k.stopPropagation(),children:[d.jsxs("div",{className:ye.formHeader,children:[d.jsx("h3",{children:t?"Edit Entry":"New Entry"}),d.jsx("button",{className:ye.closeButton,onClick:r,children:"✕"})]}),d.jsxs("form",{onSubmit:b,className:ye.form,children:[d.jsxs("div",{className:ye.formGroup,children:[d.jsx("label",{children:"Category"}),d.jsx("select",{name:"category",value:i.category,onChange:w,required:!0,className:ye.select,children:e.map(k=>d.jsxs("option",{value:k.id,children:[k.icon," ",k.name]},k.id))})]}),d.jsxs("div",{className:ye.formGroup,children:[d.jsx("label",{children:"Title"}),d.jsx("input",{type:"text",name:"title",value:i.title,onChange:w,placeholder:"Entry title...",required:!0,className:ye.input})]}),d.jsxs("div",{className:ye.formGroup,children:[d.jsx("label",{children:"Content"}),d.jsx("textarea",{name:"content",value:i.content,onChange:w,placeholder:"Write your entry here...",required:!0,rows:8,className:ye.textarea})]}),d.jsxs("div",{className:ye.formGroup,children:[d.jsx("label",{children:"Source (Optional)"}),d.jsx("input",{type:"text",name:"source",value:i.source,onChange:w,placeholder:"e.g., Book title, Article URL, Movie name...",className:ye.input})]}),d.jsxs("div",{className:ye.formGroup,children:[d.jsx("label",{children:"Tags (Optional)"}),d.jsx("input",{type:"text",name:"tags",value:i.tags,onChange:w,placeholder:"Comma separated tags...",className:ye.input})]}),d.jsxs("div",{className:ye.formGroup,children:[d.jsx("label",{children:"Images (Optional)"}),i.images.length>0&&d.jsx("div",{className:ye.imagePreviewGrid,children:i.images.map((k,O)=>d.jsxs("div",{className:ye.imagePreview,children:[d.jsx("img",{src:k.url,alt:`Preview ${O+1}`}),d.jsx("button",{type:"button",className:ye.removeImageButton,onClick:()=>N(O),children:"✕"})]},O))}),d.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:g,className:ye.fileInput,id:"imageUpload"}),d.jsxs("label",{htmlFor:"imageUpload",className:ye.fileInputLabel,children:["📷 ",c.length>0?`${c.length} file(s) selected`:"Choose images"]}),c.length>0&&d.jsx("p",{className:ye.fileInfo,children:c.map(k=>k.name).join(", ")})]}),d.jsxs("div",{className:ye.buttonGroup,children:[d.jsx("button",{type:"submit",className:ye.submitButton,disabled:o,children:o?"Uploading...":t?"Update Entry":"Create Entry"}),d.jsx("button",{type:"button",onClick:r,className:ye.cancelButton,disabled:o,children:"Cancel"})]})]})]})})})}const iM="_card_1wu4r_1",sM="_fadeInUp_1wu4r_1",oM="_cardHeader_1wu4r_34",aM="_categoryBadge_1wu4r_41",lM="_categoryIcon_1wu4r_54",cM="_adminActions_1wu4r_58",uM="_pinButton_1wu4r_63",hM="_editButton_1wu4r_64",dM="_deleteButton_1wu4r_65",fM="_pinned_1wu4r_85",pM="_title_1wu4r_102",mM="_content_1wu4r_111",gM="_source_1wu4r_120",_M="_sourceLabel_1wu4r_130",yM="_tags_1wu4r_135",vM="_tag_1wu4r_135",wM="_imagesPreview_1wu4r_151",EM="_imageCount_1wu4r_159",IM="_readMore_1wu4r_165",TM="_footer_1wu4r_172",SM="_date_1wu4r_183",AM="_updated_1wu4r_187",CM="_imagesGrid_1wu4r_240",PM="_imageWrapper_1wu4r_247",RM="_imageOverlay_1wu4r_275",kM="_imageModal_1wu4r_293",NM="_fadeIn_1wu4r_1",xM="_imageModalContent_1wu4r_310",DM="_closeModal_1wu4r_324",bM="_entryModal_1wu4r_367",VM="_entryModalContent_1wu4r_384",OM="_modalHeader_1wu4r_423",LM="_modalTitle_1wu4r_431",MM="_modalContent_1wu4r_439",jM="_modalSource_1wu4r_447",te={card:iM,fadeInUp:sM,cardHeader:oM,categoryBadge:aM,categoryIcon:lM,adminActions:cM,pinButton:uM,editButton:hM,deleteButton:dM,pinned:fM,title:pM,content:mM,source:gM,sourceLabel:_M,tags:yM,tag:vM,imagesPreview:wM,imageCount:EM,readMore:IM,footer:TM,date:SM,updated:AM,imagesGrid:CM,imageWrapper:PM,imageOverlay:RM,imageModal:kM,fadeIn:NM,imageModalContent:xM,closeModal:DM,entryModal:bM,entryModalContent:VM,modalHeader:OM,modalTitle:LM,modalContent:MM,modalSource:jM};function FM({entry:t,category:e,isAdmin:n,onEdit:r,onDelete:i,onTogglePin:s}){const[o,l]=U.useState(!1),[c,u]=U.useState(null),[f,m]=U.useState(!1),g=w=>new Date(w).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),T=(w,y)=>{y.stopPropagation(),u(w),l(!0)},R=()=>{l(!1),u(null)},N=(w,y=200)=>w.length<=y?w:w.slice(0,y)+"...",b=w=>{w.target.closest(`.${te.adminActions}`)||m(!0)};return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:te.card,"data-pinned":t.isPinned||!1,onClick:b,style:{cursor:"pointer"},children:[d.jsxs("div",{className:te.cardHeader,children:[d.jsxs("div",{className:te.categoryBadge,children:[d.jsx("span",{className:te.categoryIcon,children:e==null?void 0:e.icon}),d.jsx("span",{children:e==null?void 0:e.name})]}),n&&d.jsxs("div",{className:te.adminActions,children:[d.jsx("button",{className:`${te.pinButton} ${t.isPinned?te.pinned:""}`,onClick:w=>{w.stopPropagation(),s()},title:t.isPinned?"Unpin entry":"Pin entry",children:t.isPinned?"📌":"📍"}),d.jsx("button",{className:te.editButton,onClick:w=>{w.stopPropagation(),r()},title:"Edit entry",children:"✏️"}),d.jsx("button",{className:te.deleteButton,onClick:w=>{w.stopPropagation(),i()},title:"Delete entry",children:"🗑️"})]})]}),d.jsx("h3",{className:te.title,children:t.title}),d.jsx("div",{className:te.content,children:N(t.content)}),t.images&&t.images.length>0&&d.jsx("div",{className:te.imagesGrid,children:t.images.slice(0,2).map((w,y)=>d.jsxs("div",{className:te.imageWrapper,onClick:I=>{I.stopPropagation(),T(w.url,I)},children:[d.jsx("img",{src:w.url,alt:`${t.title} - ${y+1}`}),y===1&&t.images.length>2&&d.jsxs("div",{className:te.imageOverlay,children:["+",t.images.length-2," more"]})]},y))}),t.source&&d.jsxs("div",{className:te.source,children:[d.jsx("span",{className:te.sourceLabel,children:"Source:"})," ",t.source]}),d.jsxs("div",{className:te.footer,children:[d.jsx("span",{className:te.date,children:g(t.createdAt)}),t.updatedAt!==t.createdAt&&d.jsx("span",{className:te.updated,children:"Updated"}),d.jsx("span",{className:te.readMore,children:"Click to read more →"})]})]}),f&&d.jsx(Ln,{children:d.jsx("div",{className:te.entryModal,onClick:()=>m(!1),children:d.jsxs("div",{className:te.entryModalContent,onClick:w=>w.stopPropagation(),children:[d.jsx("button",{className:te.closeModal,onClick:()=>m(!1),children:"✕"}),d.jsxs("div",{className:te.modalHeader,children:[d.jsxs("div",{className:te.categoryBadge,children:[d.jsx("span",{className:te.categoryIcon,children:e==null?void 0:e.icon}),d.jsx("span",{children:e==null?void 0:e.name})]}),d.jsx("span",{className:te.date,children:g(t.createdAt)})]}),d.jsx("h2",{className:te.modalTitle,children:t.title}),d.jsx("div",{className:te.modalContent,children:t.content}),t.images&&t.images.length>0&&d.jsx("div",{className:te.imagesGrid,children:t.images.map((w,y)=>d.jsx("div",{className:te.imageWrapper,onClick:I=>T(w.url,I),children:d.jsx("img",{src:w.url,alt:`${t.title} - ${y+1}`})},y))}),t.source&&d.jsxs("div",{className:te.modalSource,children:[d.jsx("span",{className:te.sourceLabel,children:"Source:"})," ",t.source]}),t.tags&&t.tags.length>0&&d.jsx("div",{className:te.tags,children:t.tags.map((w,y)=>d.jsxs("span",{className:te.tag,children:["#",w]},y))})]})})}),o&&d.jsx(Ln,{children:d.jsx("div",{className:te.imageModal,onClick:R,children:d.jsxs("div",{className:te.imageModalContent,children:[d.jsx("button",{className:te.closeModal,onClick:R,children:"✕"}),d.jsx("img",{src:c,alt:"Full size"})]})})})]})}function UM(){const{isAdmin:t}=er(),[e,n]=U.useState([]),[r,i]=U.useState("all"),[s,o]=U.useState(!1),[l,c]=U.useState(null),[u,f]=U.useState(!1),m=[{id:"all",name:"All Entries",icon:"📚"},{id:"quotes",name:"Quotes & Dialogues",icon:"💬"},{id:"articles",name:"Article Notes",icon:"📝"},{id:"books",name:"Book Highlights",icon:"📖"},{id:"thoughts",name:"Personal Thoughts",icon:"💭"}];U.useEffect(()=>{g()},[]);const g=async()=>{try{const I=t2(tn(oe,"entries"),n2("createdAt","desc")),O=(await Fs(I)).docs.map(L=>{var E,v,S,C,P,x;return{id:L.id,...L.data(),createdAt:((S=(v=(E=L.data().createdAt)==null?void 0:E.toDate)==null?void 0:v.call(E))==null?void 0:S.toISOString())||new Date().toISOString(),updatedAt:((x=(P=(C=L.data().updatedAt)==null?void 0:C.toDate)==null?void 0:P.call(C))==null?void 0:x.toISOString())||new Date().toISOString()}});O.sort((L,E)=>L.isPinned&&!E.isPinned?-1:!L.isPinned&&E.isPinned?1:new Date(E.createdAt)-new Date(L.createdAt)),n(O)}catch(I){console.error("Error loading entries:",I)}},T=async I=>{try{await Bs(tn(oe,"entries"),{...I,createdAt:he.now(),updatedAt:he.now()}),await g(),o(!1)}catch(k){console.error("Error adding entry:",k),alert("Failed to add entry. Please try again.")}},R=async I=>{try{const k=Te(oe,"entries",I.id);await bn(k,{...I,updatedAt:he.now()}),await g(),c(null),o(!1)}catch(k){console.error("Error updating entry:",k),alert("Failed to update entry. Please try again.")}},N=async I=>{if(window.confirm("Are you sure you want to delete this entry?"))try{await Us(Te(oe,"entries",I)),await g()}catch(k){console.error("Error deleting entry:",k),alert("Failed to delete entry. Please try again.")}},b=async I=>{try{const k=Te(oe,"entries",I.id);await bn(k,{isPinned:!I.isPinned}),await g()}catch(k){console.error("Error toggling pin:",k),alert("Failed to toggle pin")}},w=I=>{c(I),o(!0)},y=r==="all"?e:e.filter(I=>I.category===r);return d.jsxs("section",{id:"commonplace",className:`${qe.container} ${u?qe.expanded:qe.collapsed}`,children:[d.jsxs("button",{className:qe.toggleButton,onClick:()=>f(!u),"aria-label":u?"Hide Commonplace":"Show Commonplace",children:[d.jsx("span",{className:qe.toggleIcon,children:u?"▼":"▶"}),d.jsxs("span",{className:qe.toggleText,children:[u?"Hide":"Show"," Commonplace"]}),d.jsx("span",{className:qe.toggleEmoji,children:"📚"})]}),u&&d.jsxs("div",{className:qe.content,children:[d.jsxs("div",{className:qe.header,children:[d.jsx("h1",{className:"sectionTitle",children:"Commonplace"}),d.jsx("p",{className:qe.subtitle,children:"A collection of interesting quotes, notes, and thoughts"})]}),t&&d.jsx("div",{className:qe.adminControls,children:d.jsx("button",{className:qe.addButton,onClick:()=>{c(null),o(!0)},children:"+ Add New Entry"})}),d.jsx("div",{className:qe.categoryFilter,children:m.map(I=>d.jsxs("button",{className:`${qe.categoryButton} ${r===I.id?qe.active:""}`,onClick:()=>i(I.id),children:[d.jsx("span",{className:qe.categoryIcon,children:I.icon}),I.name]},I.id))}),s&&d.jsx(rM,{entry:l,categories:m.filter(I=>I.id!=="all"),onSubmit:l?R:T,onCancel:()=>{o(!1),c(null)}}),d.jsx("div",{className:qe.entriesGrid,children:y.length===0?d.jsxs("div",{className:qe.emptyState,children:[d.jsx("span",{className:qe.emptyIcon,children:"📭"}),d.jsxs("p",{children:["No entries yet. ",t&&"Start by adding your first entry!"]})]}):y.map(I=>d.jsx(FM,{entry:I,category:m.find(k=>k.id===I.category),isAdmin:t,onEdit:()=>w(I),onDelete:()=>N(I.id),onTogglePin:()=>b(I)},I.id))})]})]})}const BM="_wrap_91tw5_1",$M="_fill_91tw5_11",Ny={wrap:BM,fill:$M};function zM(){const[t,e]=U.useState(0);return U.useEffect(()=>{const n=()=>{const r=window.innerHeight,i=document.documentElement.scrollHeight,s=window.scrollY,o=i-r,l=o>0?s/o*100:0;e(Math.min(l,100))};return window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]),d.jsx("div",{className:Ny.wrap,children:d.jsx("div",{className:Ny.fill,style:{width:`${t}%`}})})}function qM(){return d.jsxs(RD,{children:[d.jsx(XD,{}),d.jsx(zM,{}),d.jsx(db,{}),d.jsxs("main",{id:"main",style:{position:"relative",zIndex:1},children:[d.jsx(oV,{}),d.jsx(VV,{}),d.jsx(YO,{}),d.jsx(kO,{}),d.jsx(IL,{}),d.jsx(qL,{}),d.jsx(f4,{}),d.jsx(UM,{}),d.jsx(Cb,{})]}),d.jsx(Lb,{}),d.jsx(UD,{})]})}wh.createRoot(document.getElementById("root")).render(d.jsx(jI.StrictMode,{children:d.jsx(BD,{children:d.jsx(qM,{})})}));
