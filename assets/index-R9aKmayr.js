(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function CI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vy={exports:{}},Ac={},Ly={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=Symbol.for("react.element"),PI=Symbol.for("react.portal"),kI=Symbol.for("react.fragment"),RI=Symbol.for("react.strict_mode"),xI=Symbol.for("react.profiler"),NI=Symbol.for("react.provider"),DI=Symbol.for("react.context"),bI=Symbol.for("react.forward_ref"),OI=Symbol.for("react.suspense"),VI=Symbol.for("react.memo"),LI=Symbol.for("react.lazy"),Vm=Symbol.iterator;function MI(t){return t===null||typeof t!="object"?null:(t=Vm&&t[Vm]||t["@@iterator"],typeof t=="function"?t:null)}var My={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jy=Object.assign,Fy={};function Rs(t,e,n){this.props=t,this.context=e,this.refs=Fy,this.updater=n||My}Rs.prototype.isReactComponent={};Rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Uy(){}Uy.prototype=Rs.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=Fy,this.updater=n||My}var zd=Bd.prototype=new Uy;zd.constructor=Bd;jy(zd,Rs.prototype);zd.isPureReactComponent=!0;var Lm=Array.isArray,$y=Object.prototype.hasOwnProperty,Hd={current:null},By={key:!0,ref:!0,__self:!0,__source:!0};function zy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$y.call(e,r)&&!By.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ha,type:t,key:s,ref:o,props:i,_owner:Hd.current}}function jI(t,e){return{$$typeof:ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ha}function FI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mm=/\/+/g;function bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?FI(""+t.key):e.toString(36)}function ul(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ha:case PI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+bu(o,0):r,Lm(i)?(n="",t!=null&&(n=t.replace(Mm,"$&/")+"/"),ul(i,e,n,"",function(u){return u})):i!=null&&(Wd(i)&&(i=jI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Mm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Lm(t))for(var l=0;l<t.length;l++){s=t[l];var c=r+bu(s,l);o+=ul(s,e,n,c,i)}else if(c=MI(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=r+bu(s,l++),o+=ul(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $a(t,e,n){if(t==null)return t;var r=[],i=0;return ul(t,r,"","",function(s){return e.call(n,s,i++)}),r}function UI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var St={current:null},hl={transition:null},$I={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:hl,ReactCurrentOwner:Hd};function Hy(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:$a,forEach:function(t,e,n){$a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $a(t,function(){e++}),e},toArray:function(t){return $a(t,function(e){return e})||[]},only:function(t){if(!Wd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Rs;ne.Fragment=kI;ne.Profiler=xI;ne.PureComponent=Bd;ne.StrictMode=RI;ne.Suspense=OI;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$I;ne.act=Hy;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=jy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)$y.call(e,c)&&!By.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ha,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:DI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:NI,_context:t},t.Consumer=t};ne.createElement=zy;ne.createFactory=function(t){var e=zy.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:bI,render:t}};ne.isValidElement=Wd;ne.lazy=function(t){return{$$typeof:LI,_payload:{_status:-1,_result:t},_init:UI}};ne.memo=function(t,e){return{$$typeof:VI,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=hl.transition;hl.transition={};try{t()}finally{hl.transition=e}};ne.unstable_act=Hy;ne.useCallback=function(t,e){return St.current.useCallback(t,e)};ne.useContext=function(t){return St.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return St.current.useDeferredValue(t)};ne.useEffect=function(t,e){return St.current.useEffect(t,e)};ne.useId=function(){return St.current.useId()};ne.useImperativeHandle=function(t,e,n){return St.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return St.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return St.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return St.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return St.current.useReducer(t,e,n)};ne.useRef=function(t){return St.current.useRef(t)};ne.useState=function(t){return St.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return St.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return St.current.useTransition()};ne.version="18.3.1";Ly.exports=ne;var U=Ly.exports;const BI=CI(U);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zI=U,HI=Symbol.for("react.element"),WI=Symbol.for("react.fragment"),qI=Object.prototype.hasOwnProperty,GI=zI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,KI={key:!0,ref:!0,__self:!0,__source:!0};function Wy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)qI.call(e,r)&&!KI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:HI,type:t,key:s,ref:o,props:i,_owner:GI.current}}Ac.Fragment=WI;Ac.jsx=Wy;Ac.jsxs=Wy;Vy.exports=Ac;var d=Vy.exports,Eh={},qy={exports:{}},Bt={},Gy={exports:{}},Ky={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,G){var Z=$.length;$.push(G);e:for(;0<Z;){var fe=Z-1>>>1,be=$[fe];if(0<i(be,G))$[fe]=G,$[Z]=be,Z=fe;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var G=$[0],Z=$.pop();if(Z!==G){$[0]=Z;e:for(var fe=0,be=$.length,Yr=be>>>1;fe<Yr;){var Ht=2*(fe+1)-1,Xr=$[Ht],tn=Ht+1,tr=$[tn];if(0>i(Xr,Z))tn<be&&0>i(tr,Xr)?($[fe]=tr,$[tn]=Z,fe=tn):($[fe]=Xr,$[Ht]=Z,fe=Ht);else if(tn<be&&0>i(tr,Z))$[fe]=tr,$[tn]=Z,fe=tn;else break e}}return G}function i($,G){var Z=$.sortIndex-G.sortIndex;return Z!==0?Z:$.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],f=1,m=null,g=3,T=!1,k=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E($){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=$)r(u),G.sortIndex=G.expirationTime,e(c,G);else break;G=n(u)}}function R($){if(x=!1,E($),!k)if(n(c)!==null)k=!0,J(O);else{var G=n(u);G!==null&&de(R,G.startTime-$)}}function O($,G){k=!1,x&&(x=!1,w(v),v=-1),T=!0;var Z=g;try{for(E(G),m=n(c);m!==null&&(!(m.expirationTime>G)||$&&!P());){var fe=m.callback;if(typeof fe=="function"){m.callback=null,g=m.priorityLevel;var be=fe(m.expirationTime<=G);G=t.unstable_now(),typeof be=="function"?m.callback=be:m===n(c)&&r(c),E(G)}else r(c);m=n(c)}if(m!==null)var Yr=!0;else{var Ht=n(u);Ht!==null&&de(R,Ht.startTime-G),Yr=!1}return Yr}finally{m=null,g=Z,T=!1}}var M=!1,I=null,v=-1,S=5,C=-1;function P(){return!(t.unstable_now()-C<S)}function N(){if(I!==null){var $=t.unstable_now();C=$;var G=!0;try{G=I(!0,$)}finally{G?A():(M=!1,I=null)}}else M=!1}var A;if(typeof y=="function")A=function(){y(N)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,_t=me.port2;me.port1.onmessage=N,A=function(){_t.postMessage(null)}}else A=function(){b(N,0)};function J($){I=$,M||(M=!0,A())}function de($,G){v=b(function(){$(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){k||T||(k=!0,J(O))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var Z=g;g=G;try{return $()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,G){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=g;g=$;try{return G()}finally{g=Z}},t.unstable_scheduleCallback=function($,G,Z){var fe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?fe+Z:fe):Z=fe,$){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=Z+be,$={id:f++,callback:G,priorityLevel:$,startTime:Z,expirationTime:be,sortIndex:-1},Z>fe?($.sortIndex=Z,e(u,$),n(c)===null&&$===n(u)&&(x?(w(v),v=-1):x=!0,de(R,Z-fe))):($.sortIndex=be,e(c,$),k||T||(k=!0,J(O))),$},t.unstable_shouldYield=P,t.unstable_wrapCallback=function($){var G=g;return function(){var Z=g;g=G;try{return $.apply(this,arguments)}finally{g=Z}}}})(Ky);Gy.exports=Ky;var QI=Gy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YI=U,$t=QI;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qy=new Set,jo={};function Si(t,e){ps(t,e),ps(t+"Capture",e)}function ps(t,e){for(jo[t]=e,t=0;t<e.length;t++)Qy.add(e[t])}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ih=Object.prototype.hasOwnProperty,XI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jm={},Fm={};function JI(t){return Ih.call(Fm,t)?!0:Ih.call(jm,t)?!1:XI.test(t)?Fm[t]=!0:(jm[t]=!0,!1)}function ZI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function eT(t,e,n,r){if(e===null||typeof e>"u"||ZI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function At(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new At(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new At(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new At(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new At(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new At(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new At(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new At(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new At(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new At(t,5,!1,t.toLowerCase(),null,!1,!1)});var qd=/[\-:]([a-z])/g;function Gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qd,Gd);it[e]=new At(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qd,Gd);it[e]=new At(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qd,Gd);it[e]=new At(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new At(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new At(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kd(t,e,n,r){var i=it.hasOwnProperty(e)?it[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(eT(e,n,i,r)&&(n=null),r||i===null?JI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var er=YI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ba=Symbol.for("react.element"),Bi=Symbol.for("react.portal"),zi=Symbol.for("react.fragment"),Qd=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),Yy=Symbol.for("react.provider"),Xy=Symbol.for("react.context"),Yd=Symbol.for("react.forward_ref"),Sh=Symbol.for("react.suspense"),Ah=Symbol.for("react.suspense_list"),Xd=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),Jy=Symbol.for("react.offscreen"),Um=Symbol.iterator;function ro(t){return t===null||typeof t!="object"?null:(t=Um&&t[Um]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Ou;function fo(t){if(Ou===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ou=e&&e[1]||""}return`
`+Ou+t}var Vu=!1;function Lu(t,e){if(!t||Vu)return"";Vu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{Vu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fo(t):""}function tT(t){switch(t.tag){case 5:return fo(t.type);case 16:return fo("Lazy");case 13:return fo("Suspense");case 19:return fo("SuspenseList");case 0:case 2:case 15:return t=Lu(t.type,!1),t;case 11:return t=Lu(t.type.render,!1),t;case 1:return t=Lu(t.type,!0),t;default:return""}}function Ch(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zi:return"Fragment";case Bi:return"Portal";case Th:return"Profiler";case Qd:return"StrictMode";case Sh:return"Suspense";case Ah:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xy:return(t.displayName||"Context")+".Consumer";case Yy:return(t._context.displayName||"Context")+".Provider";case Yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xd:return e=t.displayName||null,e!==null?e:Ch(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return Ch(t(e))}catch{}}return null}function nT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ch(e);case 8:return e===Qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rT(t){var e=Zy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function za(t){t._valueTracker||(t._valueTracker=rT(t))}function ev(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Zy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ph(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $m(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tv(t,e){e=e.checked,e!=null&&Kd(t,"checked",e,!1)}function kh(t,e){tv(t,e);var n=Or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rh(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rh(t,e,n){(e!=="number"||Dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var po=Array.isArray;function ts(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Or(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(po(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Or(n)}}function nv(t,e){var n=Or(e.value),r=Or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ha,iv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ha.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var To={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iT=["Webkit","ms","Moz","O"];Object.keys(To).forEach(function(t){iT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),To[e]=To[t]})});function sv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||To.hasOwnProperty(t)&&To[t]?(""+e).trim():e+"px"}function ov(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var sT=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dh(t,e){if(e){if(sT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function bh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oh=null;function Jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vh=null,ns=null,rs=null;function Wm(t){if(t=pa(t)){if(typeof Vh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=xc(e),Vh(t.stateNode,t.type,e))}}function av(t){ns?rs?rs.push(t):rs=[t]:ns=t}function lv(){if(ns){var t=ns,e=rs;if(rs=ns=null,Wm(t),e)for(t=0;t<e.length;t++)Wm(e[t])}}function cv(t,e){return t(e)}function uv(){}var Mu=!1;function hv(t,e,n){if(Mu)return t(e,n);Mu=!0;try{return cv(t,e,n)}finally{Mu=!1,(ns!==null||rs!==null)&&(uv(),lv())}}function Uo(t,e){var n=t.stateNode;if(n===null)return null;var r=xc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Lh=!1;if(Wn)try{var io={};Object.defineProperty(io,"passive",{get:function(){Lh=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Lh=!1}function oT(t,e,n,r,i,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var So=!1,bl=null,Ol=!1,Mh=null,aT={onError:function(t){So=!0,bl=t}};function lT(t,e,n,r,i,s,o,l,c){So=!1,bl=null,oT.apply(aT,arguments)}function cT(t,e,n,r,i,s,o,l,c){if(lT.apply(this,arguments),So){if(So){var u=bl;So=!1,bl=null}else throw Error(F(198));Ol||(Ol=!0,Mh=u)}}function Ai(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qm(t){if(Ai(t)!==t)throw Error(F(188))}function uT(t){var e=t.alternate;if(!e){if(e=Ai(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qm(i),t;if(s===r)return qm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function fv(t){return t=uT(t),t!==null?pv(t):null}function pv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pv(t);if(e!==null)return e;t=t.sibling}return null}var mv=$t.unstable_scheduleCallback,Gm=$t.unstable_cancelCallback,hT=$t.unstable_shouldYield,dT=$t.unstable_requestPaint,Le=$t.unstable_now,fT=$t.unstable_getCurrentPriorityLevel,Zd=$t.unstable_ImmediatePriority,gv=$t.unstable_UserBlockingPriority,Vl=$t.unstable_NormalPriority,pT=$t.unstable_LowPriority,_v=$t.unstable_IdlePriority,Cc=null,Sn=null;function mT(t){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(Cc,t,void 0,(t.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:yT,gT=Math.log,_T=Math.LN2;function yT(t){return t>>>=0,t===0?32:31-(gT(t)/_T|0)|0}var Wa=64,qa=4194304;function mo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=mo(l):(s&=o,s!==0&&(r=mo(s)))}else o=n&~i,o!==0?r=mo(o):s!==0&&(r=mo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-cn(e),i=1<<n,r|=t[n],e&=~i;return r}function vT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-cn(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=vT(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function jh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yv(){var t=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),t}function ju(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-cn(e),t[e]=n}function ET(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-cn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function vv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wv,tf,Ev,Iv,Tv,Fh=!1,Ga=[],Er=null,Ir=null,Tr=null,$o=new Map,Bo=new Map,dr=[],IT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Km(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":$o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function so(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=pa(e),e!==null&&tf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function TT(t,e,n,r,i){switch(e){case"focusin":return Er=so(Er,t,e,n,r,i),!0;case"dragenter":return Ir=so(Ir,t,e,n,r,i),!0;case"mouseover":return Tr=so(Tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return $o.set(s,so($o.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Bo.set(s,so(Bo.get(s)||null,t,e,n,r,i)),!0}return!1}function Sv(t){var e=oi(t.target);if(e!==null){var n=Ai(e);if(n!==null){if(e=n.tag,e===13){if(e=dv(n),e!==null){t.blockedOn=e,Tv(t.priority,function(){Ev(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Oh=r,n.target.dispatchEvent(r),Oh=null}else return e=pa(n),e!==null&&tf(e),t.blockedOn=n,!1;e.shift()}return!0}function Qm(t,e,n){dl(t)&&n.delete(e)}function ST(){Fh=!1,Er!==null&&dl(Er)&&(Er=null),Ir!==null&&dl(Ir)&&(Ir=null),Tr!==null&&dl(Tr)&&(Tr=null),$o.forEach(Qm),Bo.forEach(Qm)}function oo(t,e){t.blockedOn===e&&(t.blockedOn=null,Fh||(Fh=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,ST)))}function zo(t){function e(i){return oo(i,t)}if(0<Ga.length){oo(Ga[0],t);for(var n=1;n<Ga.length;n++){var r=Ga[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Er!==null&&oo(Er,t),Ir!==null&&oo(Ir,t),Tr!==null&&oo(Tr,t),$o.forEach(e),Bo.forEach(e),n=0;n<dr.length;n++)r=dr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)Sv(n),n.blockedOn===null&&dr.shift()}var is=er.ReactCurrentBatchConfig,Ml=!0;function AT(t,e,n,r){var i=ue,s=is.transition;is.transition=null;try{ue=1,nf(t,e,n,r)}finally{ue=i,is.transition=s}}function CT(t,e,n,r){var i=ue,s=is.transition;is.transition=null;try{ue=4,nf(t,e,n,r)}finally{ue=i,is.transition=s}}function nf(t,e,n,r){if(Ml){var i=Uh(t,e,n,r);if(i===null)Ku(t,e,r,jl,n),Km(t,r);else if(TT(i,t,e,n,r))r.stopPropagation();else if(Km(t,r),e&4&&-1<IT.indexOf(t)){for(;i!==null;){var s=pa(i);if(s!==null&&wv(s),s=Uh(t,e,n,r),s===null&&Ku(t,e,r,jl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ku(t,e,r,null,n)}}var jl=null;function Uh(t,e,n,r){if(jl=null,t=Jd(r),t=oi(t),t!==null)if(e=Ai(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return jl=t,null}function Av(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fT()){case Zd:return 1;case gv:return 4;case Vl:case pT:return 16;case _v:return 536870912;default:return 16}default:return 16}}var yr=null,rf=null,fl=null;function Cv(){if(fl)return fl;var t,e=rf,n=e.length,r,i="value"in yr?yr.value:yr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return fl=i.slice(t,1<r?1-r:void 0)}function pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function Ym(){return!1}function zt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:Ym,this.isPropagationStopped=Ym,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=zt(xs),fa=Re({},xs,{view:0,detail:0}),PT=zt(fa),Fu,Uu,ao,Pc=Re({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ao&&(ao&&t.type==="mousemove"?(Fu=t.screenX-ao.screenX,Uu=t.screenY-ao.screenY):Uu=Fu=0,ao=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:Uu}}),Xm=zt(Pc),kT=Re({},Pc,{dataTransfer:0}),RT=zt(kT),xT=Re({},fa,{relatedTarget:0}),$u=zt(xT),NT=Re({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),DT=zt(NT),bT=Re({},xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),OT=zt(bT),VT=Re({},xs,{data:0}),Jm=zt(VT),LT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jT[t])?!!e[t]:!1}function of(){return FT}var UT=Re({},fa,{key:function(t){if(t.key){var e=LT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?MT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$T=zt(UT),BT=Re({},Pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zm=zt(BT),zT=Re({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),HT=zt(zT),WT=Re({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),qT=zt(WT),GT=Re({},Pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KT=zt(GT),QT=[9,13,27,32],af=Wn&&"CompositionEvent"in window,Ao=null;Wn&&"documentMode"in document&&(Ao=document.documentMode);var YT=Wn&&"TextEvent"in window&&!Ao,Pv=Wn&&(!af||Ao&&8<Ao&&11>=Ao),eg=" ",tg=!1;function kv(t,e){switch(t){case"keyup":return QT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hi=!1;function XT(t,e){switch(t){case"compositionend":return Rv(e);case"keypress":return e.which!==32?null:(tg=!0,eg);case"textInput":return t=e.data,t===eg&&tg?null:t;default:return null}}function JT(t,e){if(Hi)return t==="compositionend"||!af&&kv(t,e)?(t=Cv(),fl=rf=yr=null,Hi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pv&&e.locale!=="ko"?null:e.data;default:return null}}var ZT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ng(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ZT[t.type]:e==="textarea"}function xv(t,e,n,r){av(r),e=Fl(e,"onChange"),0<e.length&&(n=new sf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Co=null,Ho=null;function eS(t){$v(t,0)}function kc(t){var e=Gi(t);if(ev(e))return t}function tS(t,e){if(t==="change")return e}var Nv=!1;if(Wn){var Bu;if(Wn){var zu="oninput"in document;if(!zu){var rg=document.createElement("div");rg.setAttribute("oninput","return;"),zu=typeof rg.oninput=="function"}Bu=zu}else Bu=!1;Nv=Bu&&(!document.documentMode||9<document.documentMode)}function ig(){Co&&(Co.detachEvent("onpropertychange",Dv),Ho=Co=null)}function Dv(t){if(t.propertyName==="value"&&kc(Ho)){var e=[];xv(e,Ho,t,Jd(t)),hv(eS,e)}}function nS(t,e,n){t==="focusin"?(ig(),Co=e,Ho=n,Co.attachEvent("onpropertychange",Dv)):t==="focusout"&&ig()}function rS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kc(Ho)}function iS(t,e){if(t==="click")return kc(e)}function sS(t,e){if(t==="input"||t==="change")return kc(e)}function oS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hn=typeof Object.is=="function"?Object.is:oS;function Wo(t,e){if(hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ih.call(e,i)||!hn(t[i],e[i]))return!1}return!0}function sg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function og(t,e){var n=sg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sg(n)}}function bv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ov(){for(var t=window,e=Dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dl(t.document)}return e}function lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function aS(t){var e=Ov(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bv(n.ownerDocument.documentElement,n)){if(r!==null&&lf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=og(n,s);var o=og(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lS=Wn&&"documentMode"in document&&11>=document.documentMode,Wi=null,$h=null,Po=null,Bh=!1;function ag(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bh||Wi==null||Wi!==Dl(r)||(r=Wi,"selectionStart"in r&&lf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Po&&Wo(Po,r)||(Po=r,r=Fl($h,"onSelect"),0<r.length&&(e=new sf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Wi)))}function Qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qi={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},Hu={},Vv={};Wn&&(Vv=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function Rc(t){if(Hu[t])return Hu[t];if(!qi[t])return t;var e=qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vv)return Hu[t]=e[n];return t}var Lv=Rc("animationend"),Mv=Rc("animationiteration"),jv=Rc("animationstart"),Fv=Rc("transitionend"),Uv=new Map,lg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){Uv.set(t,e),Si(e,[t])}for(var Wu=0;Wu<lg.length;Wu++){var qu=lg[Wu],cS=qu.toLowerCase(),uS=qu[0].toUpperCase()+qu.slice(1);zr(cS,"on"+uS)}zr(Lv,"onAnimationEnd");zr(Mv,"onAnimationIteration");zr(jv,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(Fv,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);Si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Si("onBeforeInput",["compositionend","keypress","textInput","paste"]);Si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function cg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cT(r,e,void 0,t),t.currentTarget=null}function $v(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;cg(i,l,u),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;cg(i,l,u),s=c}}}if(Ol)throw t=Mh,Ol=!1,Mh=null,t}function we(t,e){var n=e[Gh];n===void 0&&(n=e[Gh]=new Set);var r=t+"__bubble";n.has(r)||(Bv(e,t,2,!1),n.add(r))}function Gu(t,e,n){var r=0;e&&(r|=4),Bv(n,t,r,e)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function qo(t){if(!t[Ya]){t[Ya]=!0,Qy.forEach(function(n){n!=="selectionchange"&&(hS.has(n)||Gu(n,!1,t),Gu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ya]||(e[Ya]=!0,Gu("selectionchange",!1,e))}}function Bv(t,e,n,r){switch(Av(e)){case 1:var i=AT;break;case 4:i=CT;break;default:i=nf}n=i.bind(null,e,n,t),i=void 0,!Lh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ku(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=oi(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}hv(function(){var u=s,f=Jd(n),m=[];e:{var g=Uv.get(t);if(g!==void 0){var T=sf,k=t;switch(t){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":T=$T;break;case"focusin":k="focus",T=$u;break;case"focusout":k="blur",T=$u;break;case"beforeblur":case"afterblur":T=$u;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=RT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=HT;break;case Lv:case Mv:case jv:T=DT;break;case Fv:T=qT;break;case"scroll":T=PT;break;case"wheel":T=KT;break;case"copy":case"cut":case"paste":T=OT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Zm}var x=(e&4)!==0,b=!x&&t==="scroll",w=x?g!==null?g+"Capture":null:g;x=[];for(var y=u,E;y!==null;){E=y;var R=E.stateNode;if(E.tag===5&&R!==null&&(E=R,w!==null&&(R=Uo(y,w),R!=null&&x.push(Go(y,R,E)))),b)break;y=y.return}0<x.length&&(g=new T(g,k,null,n,f),m.push({event:g,listeners:x}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",g&&n!==Oh&&(k=n.relatedTarget||n.fromElement)&&(oi(k)||k[qn]))break e;if((T||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,T?(k=n.relatedTarget||n.toElement,T=u,k=k?oi(k):null,k!==null&&(b=Ai(k),k!==b||k.tag!==5&&k.tag!==6)&&(k=null)):(T=null,k=u),T!==k)){if(x=Xm,R="onMouseLeave",w="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(x=Zm,R="onPointerLeave",w="onPointerEnter",y="pointer"),b=T==null?g:Gi(T),E=k==null?g:Gi(k),g=new x(R,y+"leave",T,n,f),g.target=b,g.relatedTarget=E,R=null,oi(f)===u&&(x=new x(w,y+"enter",k,n,f),x.target=E,x.relatedTarget=b,R=x),b=R,T&&k)t:{for(x=T,w=k,y=0,E=x;E;E=Mi(E))y++;for(E=0,R=w;R;R=Mi(R))E++;for(;0<y-E;)x=Mi(x),y--;for(;0<E-y;)w=Mi(w),E--;for(;y--;){if(x===w||w!==null&&x===w.alternate)break t;x=Mi(x),w=Mi(w)}x=null}else x=null;T!==null&&ug(m,g,T,x,!1),k!==null&&b!==null&&ug(m,b,k,x,!0)}}e:{if(g=u?Gi(u):window,T=g.nodeName&&g.nodeName.toLowerCase(),T==="select"||T==="input"&&g.type==="file")var O=tS;else if(ng(g))if(Nv)O=sS;else{O=rS;var M=nS}else(T=g.nodeName)&&T.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(O=iS);if(O&&(O=O(t,u))){xv(m,O,n,f);break e}M&&M(t,g,u),t==="focusout"&&(M=g._wrapperState)&&M.controlled&&g.type==="number"&&Rh(g,"number",g.value)}switch(M=u?Gi(u):window,t){case"focusin":(ng(M)||M.contentEditable==="true")&&(Wi=M,$h=u,Po=null);break;case"focusout":Po=$h=Wi=null;break;case"mousedown":Bh=!0;break;case"contextmenu":case"mouseup":case"dragend":Bh=!1,ag(m,n,f);break;case"selectionchange":if(lS)break;case"keydown":case"keyup":ag(m,n,f)}var I;if(af)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Hi?kv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Pv&&n.locale!=="ko"&&(Hi||v!=="onCompositionStart"?v==="onCompositionEnd"&&Hi&&(I=Cv()):(yr=f,rf="value"in yr?yr.value:yr.textContent,Hi=!0)),M=Fl(u,v),0<M.length&&(v=new Jm(v,t,null,n,f),m.push({event:v,listeners:M}),I?v.data=I:(I=Rv(n),I!==null&&(v.data=I)))),(I=YT?XT(t,n):JT(t,n))&&(u=Fl(u,"onBeforeInput"),0<u.length&&(f=new Jm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=I))}$v(m,e)})}function Go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Uo(t,n),s!=null&&r.unshift(Go(t,s,i)),s=Uo(t,e),s!=null&&r.push(Go(t,s,i))),t=t.return}return r}function Mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ug(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Uo(n,s),c!=null&&o.unshift(Go(n,c,l))):i||(c=Uo(n,s),c!=null&&o.push(Go(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var dS=/\r\n?/g,fS=/\u0000|\uFFFD/g;function hg(t){return(typeof t=="string"?t:""+t).replace(dS,`
`).replace(fS,"")}function Xa(t,e,n){if(e=hg(e),hg(t)!==e&&n)throw Error(F(425))}function Ul(){}var zh=null,Hh=null;function Wh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qh=typeof setTimeout=="function"?setTimeout:void 0,pS=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,mS=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(t){return dg.resolve(null).then(t).catch(gS)}:qh;function gS(t){setTimeout(function(){throw t})}function Qu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),zo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zo(e)}function Sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),Tn="__reactFiber$"+Ns,Ko="__reactProps$"+Ns,qn="__reactContainer$"+Ns,Gh="__reactEvents$"+Ns,_S="__reactListeners$"+Ns,yS="__reactHandles$"+Ns;function oi(t){var e=t[Tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qn]||n[Tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fg(t);t!==null;){if(n=t[Tn])return n;t=fg(t)}return e}t=n,n=t.parentNode}return null}function pa(t){return t=t[Tn]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function xc(t){return t[Ko]||null}var Kh=[],Ki=-1;function Hr(t){return{current:t}}function Ie(t){0>Ki||(t.current=Kh[Ki],Kh[Ki]=null,Ki--)}function _e(t,e){Ki++,Kh[Ki]=t.current,t.current=e}var Vr={},mt=Hr(Vr),xt=Hr(!1),pi=Vr;function ms(t,e){var n=t.type.contextTypes;if(!n)return Vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Nt(t){return t=t.childContextTypes,t!=null}function $l(){Ie(xt),Ie(mt)}function pg(t,e,n){if(mt.current!==Vr)throw Error(F(168));_e(mt,e),_e(xt,n)}function zv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,nT(t)||"Unknown",i));return Re({},n,r)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vr,pi=mt.current,_e(mt,t),_e(xt,xt.current),!0}function mg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=zv(t,e,pi),r.__reactInternalMemoizedMergedChildContext=t,Ie(xt),Ie(mt),_e(mt,t)):Ie(xt),_e(xt,n)}var Ln=null,Nc=!1,Yu=!1;function Hv(t){Ln===null?Ln=[t]:Ln.push(t)}function vS(t){Nc=!0,Hv(t)}function Wr(){if(!Yu&&Ln!==null){Yu=!0;var t=0,e=ue;try{var n=Ln;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ln=null,Nc=!1}catch(i){throw Ln!==null&&(Ln=Ln.slice(t+1)),mv(Zd,Wr),i}finally{ue=e,Yu=!1}}return null}var Qi=[],Yi=0,zl=null,Hl=0,qt=[],Gt=0,mi=null,Mn=1,jn="";function ri(t,e){Qi[Yi++]=Hl,Qi[Yi++]=zl,zl=t,Hl=e}function Wv(t,e,n){qt[Gt++]=Mn,qt[Gt++]=jn,qt[Gt++]=mi,mi=t;var r=Mn;t=jn;var i=32-cn(r)-1;r&=~(1<<i),n+=1;var s=32-cn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mn=1<<32-cn(e)+i|n<<i|r,jn=s+t}else Mn=1<<s|n<<i|r,jn=t}function cf(t){t.return!==null&&(ri(t,1),Wv(t,1,0))}function uf(t){for(;t===zl;)zl=Qi[--Yi],Qi[Yi]=null,Hl=Qi[--Yi],Qi[Yi]=null;for(;t===mi;)mi=qt[--Gt],qt[Gt]=null,jn=qt[--Gt],qt[Gt]=null,Mn=qt[--Gt],qt[Gt]=null}var Ft=null,Mt=null,Te=!1,on=null;function qv(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ft=t,Mt=Sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ft=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mi!==null?{id:Mn,overflow:jn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ft=t,Mt=null,!0):!1;default:return!1}}function Qh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yh(t){if(Te){var e=Mt;if(e){var n=e;if(!gg(t,e)){if(Qh(t))throw Error(F(418));e=Sr(n.nextSibling);var r=Ft;e&&gg(t,e)?qv(r,n):(t.flags=t.flags&-4097|2,Te=!1,Ft=t)}}else{if(Qh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Te=!1,Ft=t}}}function _g(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ft=t}function Ja(t){if(t!==Ft)return!1;if(!Te)return _g(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wh(t.type,t.memoizedProps)),e&&(e=Mt)){if(Qh(t))throw Gv(),Error(F(418));for(;e;)qv(t,e),e=Sr(e.nextSibling)}if(_g(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mt=Sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=Ft?Sr(t.stateNode.nextSibling):null;return!0}function Gv(){for(var t=Mt;t;)t=Sr(t.nextSibling)}function gs(){Mt=Ft=null,Te=!1}function hf(t){on===null?on=[t]:on.push(t)}var wS=er.ReactCurrentBatchConfig;function lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Za(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yg(t){var e=t._init;return e(t._payload)}function Kv(t){function e(w,y){if(t){var E=w.deletions;E===null?(w.deletions=[y],w.flags|=16):E.push(y)}}function n(w,y){if(!t)return null;for(;y!==null;)e(w,y),y=y.sibling;return null}function r(w,y){for(w=new Map;y!==null;)y.key!==null?w.set(y.key,y):w.set(y.index,y),y=y.sibling;return w}function i(w,y){return w=kr(w,y),w.index=0,w.sibling=null,w}function s(w,y,E){return w.index=E,t?(E=w.alternate,E!==null?(E=E.index,E<y?(w.flags|=2,y):E):(w.flags|=2,y)):(w.flags|=1048576,y)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,y,E,R){return y===null||y.tag!==6?(y=rh(E,w.mode,R),y.return=w,y):(y=i(y,E),y.return=w,y)}function c(w,y,E,R){var O=E.type;return O===zi?f(w,y,E.props.children,R,E.key):y!==null&&(y.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===ur&&yg(O)===y.type)?(R=i(y,E.props),R.ref=lo(w,y,E),R.return=w,R):(R=El(E.type,E.key,E.props,null,w.mode,R),R.ref=lo(w,y,E),R.return=w,R)}function u(w,y,E,R){return y===null||y.tag!==4||y.stateNode.containerInfo!==E.containerInfo||y.stateNode.implementation!==E.implementation?(y=ih(E,w.mode,R),y.return=w,y):(y=i(y,E.children||[]),y.return=w,y)}function f(w,y,E,R,O){return y===null||y.tag!==7?(y=di(E,w.mode,R,O),y.return=w,y):(y=i(y,E),y.return=w,y)}function m(w,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return y=rh(""+y,w.mode,E),y.return=w,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ba:return E=El(y.type,y.key,y.props,null,w.mode,E),E.ref=lo(w,null,y),E.return=w,E;case Bi:return y=ih(y,w.mode,E),y.return=w,y;case ur:var R=y._init;return m(w,R(y._payload),E)}if(po(y)||ro(y))return y=di(y,w.mode,E,null),y.return=w,y;Za(w,y)}return null}function g(w,y,E,R){var O=y!==null?y.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return O!==null?null:l(w,y,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ba:return E.key===O?c(w,y,E,R):null;case Bi:return E.key===O?u(w,y,E,R):null;case ur:return O=E._init,g(w,y,O(E._payload),R)}if(po(E)||ro(E))return O!==null?null:f(w,y,E,R,null);Za(w,E)}return null}function T(w,y,E,R,O){if(typeof R=="string"&&R!==""||typeof R=="number")return w=w.get(E)||null,l(y,w,""+R,O);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Ba:return w=w.get(R.key===null?E:R.key)||null,c(y,w,R,O);case Bi:return w=w.get(R.key===null?E:R.key)||null,u(y,w,R,O);case ur:var M=R._init;return T(w,y,E,M(R._payload),O)}if(po(R)||ro(R))return w=w.get(E)||null,f(y,w,R,O,null);Za(y,R)}return null}function k(w,y,E,R){for(var O=null,M=null,I=y,v=y=0,S=null;I!==null&&v<E.length;v++){I.index>v?(S=I,I=null):S=I.sibling;var C=g(w,I,E[v],R);if(C===null){I===null&&(I=S);break}t&&I&&C.alternate===null&&e(w,I),y=s(C,y,v),M===null?O=C:M.sibling=C,M=C,I=S}if(v===E.length)return n(w,I),Te&&ri(w,v),O;if(I===null){for(;v<E.length;v++)I=m(w,E[v],R),I!==null&&(y=s(I,y,v),M===null?O=I:M.sibling=I,M=I);return Te&&ri(w,v),O}for(I=r(w,I);v<E.length;v++)S=T(I,w,v,E[v],R),S!==null&&(t&&S.alternate!==null&&I.delete(S.key===null?v:S.key),y=s(S,y,v),M===null?O=S:M.sibling=S,M=S);return t&&I.forEach(function(P){return e(w,P)}),Te&&ri(w,v),O}function x(w,y,E,R){var O=ro(E);if(typeof O!="function")throw Error(F(150));if(E=O.call(E),E==null)throw Error(F(151));for(var M=O=null,I=y,v=y=0,S=null,C=E.next();I!==null&&!C.done;v++,C=E.next()){I.index>v?(S=I,I=null):S=I.sibling;var P=g(w,I,C.value,R);if(P===null){I===null&&(I=S);break}t&&I&&P.alternate===null&&e(w,I),y=s(P,y,v),M===null?O=P:M.sibling=P,M=P,I=S}if(C.done)return n(w,I),Te&&ri(w,v),O;if(I===null){for(;!C.done;v++,C=E.next())C=m(w,C.value,R),C!==null&&(y=s(C,y,v),M===null?O=C:M.sibling=C,M=C);return Te&&ri(w,v),O}for(I=r(w,I);!C.done;v++,C=E.next())C=T(I,w,v,C.value,R),C!==null&&(t&&C.alternate!==null&&I.delete(C.key===null?v:C.key),y=s(C,y,v),M===null?O=C:M.sibling=C,M=C);return t&&I.forEach(function(N){return e(w,N)}),Te&&ri(w,v),O}function b(w,y,E,R){if(typeof E=="object"&&E!==null&&E.type===zi&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Ba:e:{for(var O=E.key,M=y;M!==null;){if(M.key===O){if(O=E.type,O===zi){if(M.tag===7){n(w,M.sibling),y=i(M,E.props.children),y.return=w,w=y;break e}}else if(M.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===ur&&yg(O)===M.type){n(w,M.sibling),y=i(M,E.props),y.ref=lo(w,M,E),y.return=w,w=y;break e}n(w,M);break}else e(w,M);M=M.sibling}E.type===zi?(y=di(E.props.children,w.mode,R,E.key),y.return=w,w=y):(R=El(E.type,E.key,E.props,null,w.mode,R),R.ref=lo(w,y,E),R.return=w,w=R)}return o(w);case Bi:e:{for(M=E.key;y!==null;){if(y.key===M)if(y.tag===4&&y.stateNode.containerInfo===E.containerInfo&&y.stateNode.implementation===E.implementation){n(w,y.sibling),y=i(y,E.children||[]),y.return=w,w=y;break e}else{n(w,y);break}else e(w,y);y=y.sibling}y=ih(E,w.mode,R),y.return=w,w=y}return o(w);case ur:return M=E._init,b(w,y,M(E._payload),R)}if(po(E))return k(w,y,E,R);if(ro(E))return x(w,y,E,R);Za(w,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,y!==null&&y.tag===6?(n(w,y.sibling),y=i(y,E),y.return=w,w=y):(n(w,y),y=rh(E,w.mode,R),y.return=w,w=y),o(w)):n(w,y)}return b}var _s=Kv(!0),Qv=Kv(!1),Wl=Hr(null),ql=null,Xi=null,df=null;function ff(){df=Xi=ql=null}function pf(t){var e=Wl.current;Ie(Wl),t._currentValue=e}function Xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ss(t,e){ql=t,df=Xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function Zt(t){var e=t._currentValue;if(df!==t)if(t={context:t,memoizedValue:e,next:null},Xi===null){if(ql===null)throw Error(F(308));Xi=t,ql.dependencies={lanes:0,firstContext:t}}else Xi=Xi.next=t;return e}var ai=null;function mf(t){ai===null?ai=[t]:ai.push(t)}function Yv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,mf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Gn(t,r)}function Gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Gn(t,n)}return i=r.interleaved,i===null?(e.next=e,mf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Gn(t,n)}function ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ef(t,n)}}function vg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gl(t,e,n,r){var i=t.updateQueue;hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(s!==null){var m=i.baseState;o=0,f=u=c=null,l=s;do{var g=l.lane,T=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,x=l;switch(g=e,T=n,x.tag){case 1:if(k=x.payload,typeof k=="function"){m=k.call(T,m,g);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,g=typeof k=="function"?k.call(T,m,g):k,g==null)break e;m=Re({},m,g);break e;case 2:hr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else T={eventTime:T,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=T,c=m):f=f.next=T,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);_i|=o,t.lanes=o,t.memoizedState=m}}function wg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var ma={},An=Hr(ma),Qo=Hr(ma),Yo=Hr(ma);function li(t){if(t===ma)throw Error(F(174));return t}function _f(t,e){switch(_e(Yo,e),_e(Qo,t),_e(An,ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nh(e,t)}Ie(An),_e(An,e)}function ys(){Ie(An),Ie(Qo),Ie(Yo)}function Jv(t){li(Yo.current);var e=li(An.current),n=Nh(e,t.type);e!==n&&(_e(Qo,t),_e(An,n))}function yf(t){Qo.current===t&&(Ie(An),Ie(Qo))}var Ce=Hr(0);function Kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xu=[];function vf(){for(var t=0;t<Xu.length;t++)Xu[t]._workInProgressVersionPrimary=null;Xu.length=0}var gl=er.ReactCurrentDispatcher,Ju=er.ReactCurrentBatchConfig,gi=0,ke=null,qe=null,Xe=null,Ql=!1,ko=!1,Xo=0,ES=0;function at(){throw Error(F(321))}function wf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hn(t[n],e[n]))return!1;return!0}function Ef(t,e,n,r,i,s){if(gi=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gl.current=t===null||t.memoizedState===null?AS:CS,t=n(r,i),ko){s=0;do{if(ko=!1,Xo=0,25<=s)throw Error(F(301));s+=1,Xe=qe=null,e.updateQueue=null,gl.current=PS,t=n(r,i)}while(ko)}if(gl.current=Yl,e=qe!==null&&qe.next!==null,gi=0,Xe=qe=ke=null,Ql=!1,e)throw Error(F(300));return t}function If(){var t=Xo!==0;return Xo=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?ke.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function en(){if(qe===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var e=Xe===null?ke.memoizedState:Xe.next;if(e!==null)Xe=e,qe=t;else{if(t===null)throw Error(F(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Xe===null?ke.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function Jo(t,e){return typeof e=="function"?e(t):e}function Zu(t){var e=en(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,u=s;do{var f=u.lane;if((gi&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,o=r):c=c.next=m,ke.lanes|=f,_i|=f}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=l,hn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ke.lanes|=s,_i|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function eh(t){var e=en(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);hn(s,e.memoizedState)||(Rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Zv(){}function ew(t,e){var n=ke,r=en(),i=e(),s=!hn(r.memoizedState,i);if(s&&(r.memoizedState=i,Rt=!0),r=r.queue,Tf(rw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,Zo(9,nw.bind(null,n,r,i,e),void 0,null),Je===null)throw Error(F(349));gi&30||tw(n,e,i)}return i}function tw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nw(t,e,n,r){e.value=n,e.getSnapshot=r,iw(e)&&sw(t)}function rw(t,e,n){return n(function(){iw(e)&&sw(t)})}function iw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hn(t,n)}catch{return!0}}function sw(t){var e=Gn(t,1);e!==null&&un(e,t,1,-1)}function Eg(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:t},e.queue=t,t=t.dispatch=SS.bind(null,ke,t),[e.memoizedState,t]}function Zo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ow(){return en().memoizedState}function _l(t,e,n,r){var i=En();ke.flags|=t,i.memoizedState=Zo(1|e,n,void 0,r===void 0?null:r)}function Dc(t,e,n,r){var i=en();r=r===void 0?null:r;var s=void 0;if(qe!==null){var o=qe.memoizedState;if(s=o.destroy,r!==null&&wf(r,o.deps)){i.memoizedState=Zo(e,n,s,r);return}}ke.flags|=t,i.memoizedState=Zo(1|e,n,s,r)}function Ig(t,e){return _l(8390656,8,t,e)}function Tf(t,e){return Dc(2048,8,t,e)}function aw(t,e){return Dc(4,2,t,e)}function lw(t,e){return Dc(4,4,t,e)}function cw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function uw(t,e,n){return n=n!=null?n.concat([t]):null,Dc(4,4,cw.bind(null,e,t),n)}function Sf(){}function hw(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function dw(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function fw(t,e,n){return gi&21?(hn(n,e)||(n=yv(),ke.lanes|=n,_i|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function IS(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Ju.transition;Ju.transition={};try{t(!1),e()}finally{ue=n,Ju.transition=r}}function pw(){return en().memoizedState}function TS(t,e,n){var r=Pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mw(t))gw(e,n);else if(n=Yv(t,e,n,r),n!==null){var i=It();un(n,t,r,i),_w(n,e,r)}}function SS(t,e,n){var r=Pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mw(t))gw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,hn(l,o)){var c=e.interleaved;c===null?(i.next=i,mf(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=Yv(t,e,i,r),n!==null&&(i=It(),un(n,t,r,i),_w(n,e,r))}}function mw(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function gw(t,e){ko=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _w(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ef(t,n)}}var Yl={readContext:Zt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},AS={readContext:Zt,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:Zt,useEffect:Ig,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_l(4194308,4,cw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _l(4194308,4,t,e)},useInsertionEffect:function(t,e){return _l(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=TS.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:Eg,useDebugValue:Sf,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=Eg(!1),e=t[0];return t=IS.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,i=En();if(Te){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Je===null)throw Error(F(349));gi&30||tw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ig(rw.bind(null,r,s,t),[t]),r.flags|=2048,Zo(9,nw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=En(),e=Je.identifierPrefix;if(Te){var n=jn,r=Mn;n=(r&~(1<<32-cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ES++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},CS={readContext:Zt,useCallback:hw,useContext:Zt,useEffect:Tf,useImperativeHandle:uw,useInsertionEffect:aw,useLayoutEffect:lw,useMemo:dw,useReducer:Zu,useRef:ow,useState:function(){return Zu(Jo)},useDebugValue:Sf,useDeferredValue:function(t){var e=en();return fw(e,qe.memoizedState,t)},useTransition:function(){var t=Zu(Jo)[0],e=en().memoizedState;return[t,e]},useMutableSource:Zv,useSyncExternalStore:ew,useId:pw,unstable_isNewReconciler:!1},PS={readContext:Zt,useCallback:hw,useContext:Zt,useEffect:Tf,useImperativeHandle:uw,useInsertionEffect:aw,useLayoutEffect:lw,useMemo:dw,useReducer:eh,useRef:ow,useState:function(){return eh(Jo)},useDebugValue:Sf,useDeferredValue:function(t){var e=en();return qe===null?e.memoizedState=t:fw(e,qe.memoizedState,t)},useTransition:function(){var t=eh(Jo)[0],e=en().memoizedState;return[t,e]},useMutableSource:Zv,useSyncExternalStore:ew,useId:pw,unstable_isNewReconciler:!1};function rn(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bc={isMounted:function(t){return(t=t._reactInternals)?Ai(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),i=Pr(t),s=$n(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(un(e,t,i,r),ml(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),i=Pr(t),s=$n(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(un(e,t,i,r),ml(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=Pr(t),i=$n(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ar(t,i,r),e!==null&&(un(e,t,r,n),ml(e,t,r))}};function Tg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wo(n,r)||!Wo(i,s):!0}function yw(t,e,n){var r=!1,i=Vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Zt(s):(i=Nt(e)?pi:mt.current,r=e.contextTypes,s=(r=r!=null)?ms(t,i):Vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bc.enqueueReplaceState(e,e.state,null)}function Zh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},gf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Zt(s):(s=Nt(e)?pi:mt.current,i.context=ms(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&bc.enqueueReplaceState(i,i.state,null),Gl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,e){try{var n="",r=e;do n+=tT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function th(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kS=typeof WeakMap=="function"?WeakMap:Map;function vw(t,e,n){n=$n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Jl||(Jl=!0,ud=r),ed(t,e)},n}function ww(t,e,n){n=$n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ed(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ed(t,e),typeof r!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ag(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=BS.bind(null,t,e,n),e.then(t,t))}function Cg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$n(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var RS=er.ReactCurrentOwner,Rt=!1;function Et(t,e,n,r){e.child=t===null?Qv(e,null,n,r):_s(e,t.child,n,r)}function kg(t,e,n,r,i){n=n.render;var s=e.ref;return ss(e,i),r=Ef(t,e,n,r,s,i),n=If(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(Te&&n&&cf(e),e.flags|=1,Et(t,e,r,i),e.child)}function Rg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Df(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ew(t,e,s,r,i)):(t=El(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wo,n(o,r)&&t.ref===e.ref)return Kn(t,e,i)}return e.flags|=1,t=kr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ew(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Wo(s,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,Kn(t,e,i)}return td(t,e,n,r,i)}function Iw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Zi,Lt),Lt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Zi,Lt),Lt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(Zi,Lt),Lt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(Zi,Lt),Lt|=r;return Et(t,e,i,n),e.child}function Tw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function td(t,e,n,r,i){var s=Nt(n)?pi:mt.current;return s=ms(e,s),ss(e,i),n=Ef(t,e,n,r,s,i),r=If(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(Te&&r&&cf(e),e.flags|=1,Et(t,e,n,i),e.child)}function xg(t,e,n,r,i){if(Nt(n)){var s=!0;Bl(e)}else s=!1;if(ss(e,i),e.stateNode===null)yl(t,e),yw(e,n,r),Zh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Zt(u):(u=Nt(n)?pi:mt.current,u=ms(e,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Sg(e,o,r,u),hr=!1;var g=e.memoizedState;o.state=g,Gl(e,r,o,i),c=e.memoizedState,l!==r||g!==c||xt.current||hr?(typeof f=="function"&&(Jh(e,n,f,r),c=e.memoizedState),(l=hr||Tg(e,n,l,r,g,c,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Xv(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:rn(e.type,l),o.props=u,m=e.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Zt(c):(c=Nt(n)?pi:mt.current,c=ms(e,c));var T=n.getDerivedStateFromProps;(f=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==c)&&Sg(e,o,r,c),hr=!1,g=e.memoizedState,o.state=g,Gl(e,r,o,i);var k=e.memoizedState;l!==m||g!==k||xt.current||hr?(typeof T=="function"&&(Jh(e,n,T,r),k=e.memoizedState),(u=hr||Tg(e,n,u,r,g,k,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return nd(t,e,n,r,s,i)}function nd(t,e,n,r,i,s){Tw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&mg(e,n,!1),Kn(t,e,s);r=e.stateNode,RS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=_s(e,t.child,null,s),e.child=_s(e,null,l,s)):Et(t,e,l,s),e.memoizedState=r.state,i&&mg(e,n,!0),e.child}function Sw(t){var e=t.stateNode;e.pendingContext?pg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pg(t,e.context,!1),_f(t,e.containerInfo)}function Ng(t,e,n,r,i){return gs(),hf(i),e.flags|=256,Et(t,e,n,r),e.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function id(t){return{baseLanes:t,cachePool:null,transitions:null}}function Aw(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Ce,i&1),t===null)return Yh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Lc(o,r,0,null),t=di(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=id(n),e.memoizedState=rd,t):Af(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return xS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=kr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=kr(l,s):(s=di(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?id(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rd,r}return s=t.child,t=s.sibling,r=kr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Af(t,e){return e=Lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function el(t,e,n,r){return r!==null&&hf(r),_s(e,t.child,null,n),t=Af(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=th(Error(F(422))),el(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Lc({mode:"visible",children:r.children},i,0,null),s=di(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&_s(e,t.child,null,o),e.child.memoizedState=id(o),e.memoizedState=rd,s);if(!(e.mode&1))return el(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=th(s,r,void 0),el(t,e,o,r)}if(l=(o&t.childLanes)!==0,Rt||l){if(r=Je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gn(t,i),un(r,t,i,-1))}return Nf(),r=th(Error(F(421))),el(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=zS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Mt=Sr(i.nextSibling),Ft=e,Te=!0,on=null,t!==null&&(qt[Gt++]=Mn,qt[Gt++]=jn,qt[Gt++]=mi,Mn=t.id,jn=t.overflow,mi=e),e=Af(e,r.children),e.flags|=4096,e)}function Dg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xh(t.return,e,n)}function nh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Cw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Et(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dg(t,n,e);else if(t.tag===19)Dg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Kl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),nh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Kl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}nh(e,!0,n,null,s);break;case"together":nh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_i|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function NS(t,e,n){switch(e.tag){case 3:Sw(e),gs();break;case 5:Jv(e);break;case 1:Nt(e.type)&&Bl(e);break;case 4:_f(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Wl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?Aw(t,e,n):(_e(Ce,Ce.current&1),t=Kn(t,e,n),t!==null?t.sibling:null);_e(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Cw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,Iw(t,e,n)}return Kn(t,e,n)}var Pw,sd,kw,Rw;Pw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sd=function(){};kw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,li(An.current);var s=null;switch(n){case"input":i=Ph(t,i),r=Ph(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=xh(t,i),r=xh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ul)}Dh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&we("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Rw=function(t,e,n,r){n!==r&&(e.flags|=4)};function co(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function DS(t,e,n){var r=e.pendingProps;switch(uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(e),null;case 1:return Nt(e.type)&&$l(),lt(e),null;case 3:return r=e.stateNode,ys(),Ie(xt),Ie(mt),vf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,on!==null&&(fd(on),on=null))),sd(t,e),lt(e),null;case 5:yf(e);var i=li(Yo.current);if(n=e.type,t!==null&&e.stateNode!=null)kw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return lt(e),null}if(t=li(An.current),Ja(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tn]=e,r[Ko]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<go.length;i++)we(go[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":$m(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":zm(r,s),we("invalid",r)}Dh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Xa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Xa(r.textContent,l,t),i=["children",""+l]):jo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":za(r),Bm(r,s,!0);break;case"textarea":za(r),Hm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ul)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tn]=e,t[Ko]=r,Pw(t,e,!1,!1),e.stateNode=t;e:{switch(o=bh(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<go.length;i++)we(go[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":$m(t,r),i=Ph(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),we("invalid",t);break;case"textarea":zm(t,r),i=xh(t,r),we("invalid",t);break;default:i=r}Dh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?ov(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&iv(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Fo(t,c):typeof c=="number"&&Fo(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(jo.hasOwnProperty(s)?c!=null&&s==="onScroll"&&we("scroll",t):c!=null&&Kd(t,s,c,o))}switch(n){case"input":za(t),Bm(t,r,!1);break;case"textarea":za(t),Hm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Or(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ts(t,!!r.multiple,s,!1):r.defaultValue!=null&&ts(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ul)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return lt(e),null;case 6:if(t&&e.stateNode!=null)Rw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=li(Yo.current),li(An.current),Ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tn]=e,(s=r.nodeValue!==n)&&(t=Ft,t!==null))switch(t.tag){case 3:Xa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tn]=e,e.stateNode=r}return lt(e),null;case 13:if(Ie(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Mt!==null&&e.mode&1&&!(e.flags&128))Gv(),gs(),e.flags|=98560,s=!1;else if(s=Ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Tn]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;lt(e),s=!1}else on!==null&&(fd(on),on=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?Ge===0&&(Ge=3):Nf())),e.updateQueue!==null&&(e.flags|=4),lt(e),null);case 4:return ys(),sd(t,e),t===null&&qo(e.stateNode.containerInfo),lt(e),null;case 10:return pf(e.type._context),lt(e),null;case 17:return Nt(e.type)&&$l(),lt(e),null;case 19:if(Ie(Ce),s=e.memoizedState,s===null)return lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)co(s,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Kl(t),o!==null){for(e.flags|=128,co(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Le()>ws&&(e.flags|=128,r=!0,co(s,!1),e.lanes=4194304)}else{if(!r)if(t=Kl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return lt(e),null}else 2*Le()-s.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,r=!0,co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Le(),e.sibling=null,n=Ce.current,_e(Ce,r?n&1|2:n&1),e):(lt(e),null);case 22:case 23:return xf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Lt&1073741824&&(lt(e),e.subtreeFlags&6&&(e.flags|=8192)):lt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function bS(t,e){switch(uf(e),e.tag){case 1:return Nt(e.type)&&$l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),Ie(xt),Ie(mt),vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yf(e),null;case 13:if(Ie(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Ce),null;case 4:return ys(),null;case 10:return pf(e.type._context),null;case 22:case 23:return xf(),null;case 24:return null;default:return null}}var tl=!1,ft=!1,OS=typeof WeakSet=="function"?WeakSet:Set,W=null;function Ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function od(t,e,n){try{n()}catch(r){De(t,e,r)}}var bg=!1;function VS(t,e){if(zh=Ml,t=Ov(),lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,f=0,m=t,g=null;t:for(;;){for(var T;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(T=m.firstChild)!==null;)g=m,m=T;for(;;){if(m===t)break t;if(g===n&&++u===i&&(l=o),g===s&&++f===r&&(c=o),(T=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=T}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hh={focusedElem:t,selectionRange:n},Ml=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,b=k.memoizedState,w=e.stateNode,y=w.getSnapshotBeforeUpdate(e.elementType===e.type?x:rn(e.type,x),b);w.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(R){De(e,e.return,R)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return k=bg,bg=!1,k}function Ro(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&od(e,n,s)}i=i.next}while(i!==r)}}function Oc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ad(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xw(t){var e=t.alternate;e!==null&&(t.alternate=null,xw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tn],delete e[Ko],delete e[Gh],delete e[_S],delete e[yS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Nw(t){return t.tag===5||t.tag===3||t.tag===4}function Og(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ul));else if(r!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}function cd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(cd(t,e,n),t=t.sibling;t!==null;)cd(t,e,n),t=t.sibling}var et=null,sn=!1;function lr(t,e,n){for(n=n.child;n!==null;)Dw(t,e,n),n=n.sibling}function Dw(t,e,n){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(Cc,n)}catch{}switch(n.tag){case 5:ft||Ji(n,e);case 6:var r=et,i=sn;et=null,lr(t,e,n),et=r,sn=i,et!==null&&(sn?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(sn?(t=et,n=n.stateNode,t.nodeType===8?Qu(t.parentNode,n):t.nodeType===1&&Qu(t,n),zo(t)):Qu(et,n.stateNode));break;case 4:r=et,i=sn,et=n.stateNode.containerInfo,sn=!0,lr(t,e,n),et=r,sn=i;break;case 0:case 11:case 14:case 15:if(!ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&od(n,e,o),i=i.next}while(i!==r)}lr(t,e,n);break;case 1:if(!ft&&(Ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(ft=(r=ft)||n.memoizedState!==null,lr(t,e,n),ft=r):lr(t,e,n);break;default:lr(t,e,n)}}function Vg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new OS),e.forEach(function(r){var i=HS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:et=l.stateNode,sn=!1;break e;case 3:et=l.stateNode.containerInfo,sn=!0;break e;case 4:et=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(et===null)throw Error(F(160));Dw(s,o,i),et=null,sn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){De(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bw(e,t),e=e.sibling}function bw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nn(e,t),vn(t),r&4){try{Ro(3,t,t.return),Oc(3,t)}catch(x){De(t,t.return,x)}try{Ro(5,t,t.return)}catch(x){De(t,t.return,x)}}break;case 1:nn(e,t),vn(t),r&512&&n!==null&&Ji(n,n.return);break;case 5:if(nn(e,t),vn(t),r&512&&n!==null&&Ji(n,n.return),t.flags&32){var i=t.stateNode;try{Fo(i,"")}catch(x){De(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&tv(i,s),bh(l,o);var u=bh(l,s);for(o=0;o<c.length;o+=2){var f=c[o],m=c[o+1];f==="style"?ov(i,m):f==="dangerouslySetInnerHTML"?iv(i,m):f==="children"?Fo(i,m):Kd(i,f,m,u)}switch(l){case"input":kh(i,s);break;case"textarea":nv(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?ts(i,!!s.multiple,T,!1):g!==!!s.multiple&&(s.defaultValue!=null?ts(i,!!s.multiple,s.defaultValue,!0):ts(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ko]=s}catch(x){De(t,t.return,x)}}break;case 6:if(nn(e,t),vn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){De(t,t.return,x)}}break;case 3:if(nn(e,t),vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(x){De(t,t.return,x)}break;case 4:nn(e,t),vn(t);break;case 13:nn(e,t),vn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(kf=Le())),r&4&&Vg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ft=(u=ft)||f,nn(e,t),ft=u):nn(e,t),vn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(m=W=f;W!==null;){switch(g=W,T=g.child,g.tag){case 0:case 11:case 14:case 15:Ro(4,g,g.return);break;case 1:Ji(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(x){De(r,n,x)}}break;case 5:Ji(g,g.return);break;case 22:if(g.memoizedState!==null){Mg(m);continue}}T!==null?(T.return=g,W=T):Mg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=sv("display",o))}catch(x){De(t,t.return,x)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(x){De(t,t.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:nn(e,t),vn(t),r&4&&Vg(t);break;case 21:break;default:nn(e,t),vn(t)}}function vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Nw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fo(i,""),r.flags&=-33);var s=Og(t);cd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Og(t);ld(t,l,o);break;default:throw Error(F(161))}}catch(c){De(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LS(t,e,n){W=t,Ow(t)}function Ow(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||tl;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ft;l=tl;var u=ft;if(tl=o,(ft=c)&&!u)for(W=i;W!==null;)o=W,c=o.child,o.tag===22&&o.memoizedState!==null?jg(i):c!==null?(c.return=o,W=c):jg(i);for(;s!==null;)W=s,Ow(s),s=s.sibling;W=i,tl=l,ft=u}Lg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Lg(t)}}function Lg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ft||Oc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&zo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ft||e.flags&512&&ad(e)}catch(g){De(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Mg(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function jg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Oc(4,e)}catch(c){De(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){De(e,i,c)}}var s=e.return;try{ad(e)}catch(c){De(e,s,c)}break;case 5:var o=e.return;try{ad(e)}catch(c){De(e,o,c)}}}catch(c){De(e,e.return,c)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var MS=Math.ceil,Xl=er.ReactCurrentDispatcher,Cf=er.ReactCurrentOwner,Yt=er.ReactCurrentBatchConfig,ae=0,Je=null,$e=null,rt=0,Lt=0,Zi=Hr(0),Ge=0,ea=null,_i=0,Vc=0,Pf=0,xo=null,Pt=null,kf=0,ws=1/0,Vn=null,Jl=!1,ud=null,Cr=null,nl=!1,vr=null,Zl=0,No=0,hd=null,vl=-1,wl=0;function It(){return ae&6?Le():vl!==-1?vl:vl=Le()}function Pr(t){return t.mode&1?ae&2&&rt!==0?rt&-rt:wS.transition!==null?(wl===0&&(wl=yv()),wl):(t=ue,t!==0||(t=window.event,t=t===void 0?16:Av(t.type)),t):1}function un(t,e,n,r){if(50<No)throw No=0,hd=null,Error(F(185));da(t,n,r),(!(ae&2)||t!==Je)&&(t===Je&&(!(ae&2)&&(Vc|=n),Ge===4&&fr(t,rt)),Dt(t,r),n===1&&ae===0&&!(e.mode&1)&&(ws=Le()+500,Nc&&Wr()))}function Dt(t,e){var n=t.callbackNode;wT(t,e);var r=Ll(t,t===Je?rt:0);if(r===0)n!==null&&Gm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gm(n),e===1)t.tag===0?vS(Fg.bind(null,t)):Hv(Fg.bind(null,t)),mS(function(){!(ae&6)&&Wr()}),n=null;else{switch(vv(r)){case 1:n=Zd;break;case 4:n=gv;break;case 16:n=Vl;break;case 536870912:n=_v;break;default:n=Vl}n=Bw(n,Vw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Vw(t,e){if(vl=-1,wl=0,ae&6)throw Error(F(327));var n=t.callbackNode;if(os()&&t.callbackNode!==n)return null;var r=Ll(t,t===Je?rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ec(t,r);else{e=r;var i=ae;ae|=2;var s=Mw();(Je!==t||rt!==e)&&(Vn=null,ws=Le()+500,hi(t,e));do try{US();break}catch(l){Lw(t,l)}while(!0);ff(),Xl.current=s,ae=i,$e!==null?e=0:(Je=null,rt=0,e=Ge)}if(e!==0){if(e===2&&(i=jh(t),i!==0&&(r=i,e=dd(t,i))),e===1)throw n=ea,hi(t,0),fr(t,r),Dt(t,Le()),n;if(e===6)fr(t,r);else{if(i=t.current.alternate,!(r&30)&&!jS(i)&&(e=ec(t,r),e===2&&(s=jh(t),s!==0&&(r=s,e=dd(t,s))),e===1))throw n=ea,hi(t,0),fr(t,r),Dt(t,Le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:ii(t,Pt,Vn);break;case 3:if(fr(t,r),(r&130023424)===r&&(e=kf+500-Le(),10<e)){if(Ll(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qh(ii.bind(null,t,Pt,Vn),e);break}ii(t,Pt,Vn);break;case 4:if(fr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-cn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*MS(r/1960))-r,10<r){t.timeoutHandle=qh(ii.bind(null,t,Pt,Vn),r);break}ii(t,Pt,Vn);break;case 5:ii(t,Pt,Vn);break;default:throw Error(F(329))}}}return Dt(t,Le()),t.callbackNode===n?Vw.bind(null,t):null}function dd(t,e){var n=xo;return t.current.memoizedState.isDehydrated&&(hi(t,e).flags|=256),t=ec(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&fd(e)),t}function fd(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function jS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~Pf,e&=~Vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-cn(e),r=1<<n;t[n]=-1,e&=~r}}function Fg(t){if(ae&6)throw Error(F(327));os();var e=Ll(t,0);if(!(e&1))return Dt(t,Le()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var r=jh(t);r!==0&&(e=r,n=dd(t,r))}if(n===1)throw n=ea,hi(t,0),fr(t,e),Dt(t,Le()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ii(t,Pt,Vn),Dt(t,Le()),null}function Rf(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(ws=Le()+500,Nc&&Wr())}}function yi(t){vr!==null&&vr.tag===0&&!(ae&6)&&os();var e=ae;ae|=1;var n=Yt.transition,r=ue;try{if(Yt.transition=null,ue=1,t)return t()}finally{ue=r,Yt.transition=n,ae=e,!(ae&6)&&Wr()}}function xf(){Lt=Zi.current,Ie(Zi)}function hi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,pS(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(uf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$l();break;case 3:ys(),Ie(xt),Ie(mt),vf();break;case 5:yf(r);break;case 4:ys();break;case 13:Ie(Ce);break;case 19:Ie(Ce);break;case 10:pf(r.type._context);break;case 22:case 23:xf()}n=n.return}if(Je=t,$e=t=kr(t.current,null),rt=Lt=e,Ge=0,ea=null,Pf=Vc=_i=0,Pt=xo=null,ai!==null){for(e=0;e<ai.length;e++)if(n=ai[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ai=null}return t}function Lw(t,e){do{var n=$e;try{if(ff(),gl.current=Yl,Ql){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ql=!1}if(gi=0,Xe=qe=ke=null,ko=!1,Xo=0,Cf.current=null,n===null||n.return===null){Ge=1,ea=e,$e=null;break}e:{var s=t,o=n.return,l=n,c=e;if(e=rt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var T=Cg(o);if(T!==null){T.flags&=-257,Pg(T,o,l,s,e),T.mode&1&&Ag(s,u,e),e=T,c=u;var k=e.updateQueue;if(k===null){var x=new Set;x.add(c),e.updateQueue=x}else k.add(c);break e}else{if(!(e&1)){Ag(s,u,e),Nf();break e}c=Error(F(426))}}else if(Te&&l.mode&1){var b=Cg(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Pg(b,o,l,s,e),hf(vs(c,l));break e}}s=c=vs(c,l),Ge!==4&&(Ge=2),xo===null?xo=[s]:xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=vw(s,c,e);vg(s,w);break e;case 1:l=c;var y=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Cr===null||!Cr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var R=ww(s,l,e);vg(s,R);break e}}s=s.return}while(s!==null)}Fw(n)}catch(O){e=O,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function Mw(){var t=Xl.current;return Xl.current=Yl,t===null?Yl:t}function Nf(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Je===null||!(_i&268435455)&&!(Vc&268435455)||fr(Je,rt)}function ec(t,e){var n=ae;ae|=2;var r=Mw();(Je!==t||rt!==e)&&(Vn=null,hi(t,e));do try{FS();break}catch(i){Lw(t,i)}while(!0);if(ff(),ae=n,Xl.current=r,$e!==null)throw Error(F(261));return Je=null,rt=0,Ge}function FS(){for(;$e!==null;)jw($e)}function US(){for(;$e!==null&&!hT();)jw($e)}function jw(t){var e=$w(t.alternate,t,Lt);t.memoizedProps=t.pendingProps,e===null?Fw(t):$e=e,Cf.current=null}function Fw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bS(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,$e=null;return}}else if(n=DS(n,e,Lt),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);Ge===0&&(Ge=5)}function ii(t,e,n){var r=ue,i=Yt.transition;try{Yt.transition=null,ue=1,$S(t,e,n,r)}finally{Yt.transition=i,ue=r}return null}function $S(t,e,n,r){do os();while(vr!==null);if(ae&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ET(t,s),t===Je&&($e=Je=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nl||(nl=!0,Bw(Vl,function(){return os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yt.transition,Yt.transition=null;var o=ue;ue=1;var l=ae;ae|=4,Cf.current=null,VS(t,n),bw(n,t),aS(Hh),Ml=!!zh,Hh=zh=null,t.current=n,LS(n),dT(),ae=l,ue=o,Yt.transition=s}else t.current=n;if(nl&&(nl=!1,vr=t,Zl=i),s=t.pendingLanes,s===0&&(Cr=null),mT(n.stateNode),Dt(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jl)throw Jl=!1,t=ud,ud=null,t;return Zl&1&&t.tag!==0&&os(),s=t.pendingLanes,s&1?t===hd?No++:(No=0,hd=t):No=0,Wr(),null}function os(){if(vr!==null){var t=vv(Zl),e=Yt.transition,n=ue;try{if(Yt.transition=null,ue=16>t?16:t,vr===null)var r=!1;else{if(t=vr,vr=null,Zl=0,ae&6)throw Error(F(331));var i=ae;for(ae|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(W=u;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:Ro(8,f,s)}var m=f.child;if(m!==null)m.return=f,W=m;else for(;W!==null;){f=W;var g=f.sibling,T=f.return;if(xw(f),f===u){W=null;break}if(g!==null){g.return=T,W=g;break}W=T}}}var k=s.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ro(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,W=w;break e}W=s.return}}var y=t.current;for(W=y;W!==null;){o=W;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,W=E;else e:for(o=y;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Oc(9,l)}}catch(O){De(l,l.return,O)}if(l===o){W=null;break e}var R=l.sibling;if(R!==null){R.return=l.return,W=R;break e}W=l.return}}if(ae=i,Wr(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(Cc,t)}catch{}r=!0}return r}finally{ue=n,Yt.transition=e}}return!1}function Ug(t,e,n){e=vs(n,e),e=vw(t,e,1),t=Ar(t,e,1),e=It(),t!==null&&(da(t,1,e),Dt(t,e))}function De(t,e,n){if(t.tag===3)Ug(t,t,n);else for(;e!==null;){if(e.tag===3){Ug(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cr===null||!Cr.has(r))){t=vs(n,t),t=ww(e,t,1),e=Ar(e,t,1),t=It(),e!==null&&(da(e,1,t),Dt(e,t));break}}e=e.return}}function BS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(rt&n)===n&&(Ge===4||Ge===3&&(rt&130023424)===rt&&500>Le()-kf?hi(t,0):Pf|=n),Dt(t,e)}function Uw(t,e){e===0&&(t.mode&1?(e=qa,qa<<=1,!(qa&130023424)&&(qa=4194304)):e=1);var n=It();t=Gn(t,e),t!==null&&(da(t,e,n),Dt(t,n))}function zS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Uw(t,n)}function HS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Uw(t,n)}var $w;$w=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xt.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,NS(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,Te&&e.flags&1048576&&Wv(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;yl(t,e),t=e.pendingProps;var i=ms(e,mt.current);ss(e,n),i=Ef(null,e,r,t,i,n);var s=If();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(s=!0,Bl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gf(e),i.updater=bc,e.stateNode=i,i._reactInternals=e,Zh(e,r,t,n),e=nd(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&cf(e),Et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=qS(r),t=rn(r,t),i){case 0:e=td(null,e,r,t,n);break e;case 1:e=xg(null,e,r,t,n);break e;case 11:e=kg(null,e,r,t,n);break e;case 14:e=Rg(null,e,r,rn(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),td(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),xg(t,e,r,i,n);case 3:e:{if(Sw(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Xv(t,e),Gl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=vs(Error(F(423)),e),e=Ng(t,e,r,n,i);break e}else if(r!==i){i=vs(Error(F(424)),e),e=Ng(t,e,r,n,i);break e}else for(Mt=Sr(e.stateNode.containerInfo.firstChild),Ft=e,Te=!0,on=null,n=Qv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),r===i){e=Kn(t,e,n);break e}Et(t,e,r,n)}e=e.child}return e;case 5:return Jv(e),t===null&&Yh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Wh(r,i)?o=null:s!==null&&Wh(r,s)&&(e.flags|=32),Tw(t,e),Et(t,e,o,n),e.child;case 6:return t===null&&Yh(e),null;case 13:return Aw(t,e,n);case 4:return _f(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=_s(e,null,r,n):Et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),kg(t,e,r,i,n);case 7:return Et(t,e,e.pendingProps,n),e.child;case 8:return Et(t,e,e.pendingProps.children,n),e.child;case 12:return Et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(Wl,r._currentValue),r._currentValue=o,s!==null)if(hn(s.value,o)){if(s.children===i.children&&!xt.current){e=Kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=$n(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Xh(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ss(e,n),i=Zt(i),r=r(i),e.flags|=1,Et(t,e,r,n),e.child;case 14:return r=e.type,i=rn(r,e.pendingProps),i=rn(r.type,i),Rg(t,e,r,i,n);case 15:return Ew(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),yl(t,e),e.tag=1,Nt(r)?(t=!0,Bl(e)):t=!1,ss(e,n),yw(e,r,i),Zh(e,r,i,n),nd(null,e,r,!0,t,n);case 19:return Cw(t,e,n);case 22:return Iw(t,e,n)}throw Error(F(156,e.tag))};function Bw(t,e){return mv(t,e)}function WS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,r){return new WS(t,e,n,r)}function Df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qS(t){if(typeof t=="function")return Df(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yd)return 11;if(t===Xd)return 14}return 2}function kr(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function El(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Df(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zi:return di(n.children,i,s,e);case Qd:o=8,i|=8;break;case Th:return t=Qt(12,n,e,i|2),t.elementType=Th,t.lanes=s,t;case Sh:return t=Qt(13,n,e,i),t.elementType=Sh,t.lanes=s,t;case Ah:return t=Qt(19,n,e,i),t.elementType=Ah,t.lanes=s,t;case Jy:return Lc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yy:o=10;break e;case Xy:o=9;break e;case Yd:o=11;break e;case Xd:o=14;break e;case ur:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function di(t,e,n,r){return t=Qt(7,t,r,e),t.lanes=n,t}function Lc(t,e,n,r){return t=Qt(22,t,r,e),t.elementType=Jy,t.lanes=n,t.stateNode={isHidden:!1},t}function rh(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function ih(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ju(0),this.expirationTimes=ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ju(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bf(t,e,n,r,i,s,o,l,c){return t=new GS(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gf(s),t}function KS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function zw(t){if(!t)return Vr;t=t._reactInternals;e:{if(Ai(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Nt(n))return zv(t,n,e)}return e}function Hw(t,e,n,r,i,s,o,l,c){return t=bf(n,r,!0,t,i,s,o,l,c),t.context=zw(null),n=t.current,r=It(),i=Pr(n),s=$n(r,i),s.callback=e??null,Ar(n,s,i),t.current.lanes=i,da(t,i,r),Dt(t,r),t}function Mc(t,e,n,r){var i=e.current,s=It(),o=Pr(i);return n=zw(n),e.context===null?e.context=n:e.pendingContext=n,e=$n(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ar(i,e,o),t!==null&&(un(t,i,o,s),ml(t,i,o)),o}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $g(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Of(t,e){$g(t,e),(t=t.alternate)&&$g(t,e)}function QS(){return null}var Ww=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vf(t){this._internalRoot=t}jc.prototype.render=Vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Mc(t,e,null,null)};jc.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yi(function(){Mc(null,t,null,null)}),e[qn]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Iv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&Sv(t)}};function Lf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bg(){}function YS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=tc(o);s.call(u)}}var o=Hw(e,r,t,0,null,!1,!1,"",Bg);return t._reactRootContainer=o,t[qn]=o.current,qo(t.nodeType===8?t.parentNode:t),yi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=tc(c);l.call(u)}}var c=bf(t,0,!1,null,null,!1,!1,"",Bg);return t._reactRootContainer=c,t[qn]=c.current,qo(t.nodeType===8?t.parentNode:t),yi(function(){Mc(e,c,n,r)}),c}function Uc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=tc(o);l.call(c)}}Mc(e,o,t,i)}else o=YS(n,e,t,i,r);return tc(o)}wv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=mo(e.pendingLanes);n!==0&&(ef(e,n|1),Dt(e,Le()),!(ae&6)&&(ws=Le()+500,Wr()))}break;case 13:yi(function(){var r=Gn(t,1);if(r!==null){var i=It();un(r,t,1,i)}}),Of(t,1)}};tf=function(t){if(t.tag===13){var e=Gn(t,134217728);if(e!==null){var n=It();un(e,t,134217728,n)}Of(t,134217728)}};Ev=function(t){if(t.tag===13){var e=Pr(t),n=Gn(t,e);if(n!==null){var r=It();un(n,t,e,r)}Of(t,e)}};Iv=function(){return ue};Tv=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};Vh=function(t,e,n){switch(e){case"input":if(kh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=xc(r);if(!i)throw Error(F(90));ev(r),kh(r,i)}}}break;case"textarea":nv(t,n);break;case"select":e=n.value,e!=null&&ts(t,!!n.multiple,e,!1)}};cv=Rf;uv=yi;var XS={usingClientEntryPoint:!1,Events:[pa,Gi,xc,av,lv,Rf]},uo={findFiberByHostInstance:oi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JS={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fv(t),t===null?null:t.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||QS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{Cc=rl.inject(JS),Sn=rl}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XS;Bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lf(e))throw Error(F(200));return KS(t,e,null,n)};Bt.createRoot=function(t,e){if(!Lf(t))throw Error(F(299));var n=!1,r="",i=Ww;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bf(t,1,!1,null,null,n,!1,r,i),t[qn]=e.current,qo(t.nodeType===8?t.parentNode:t),new Vf(e)};Bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=fv(e),t=t===null?null:t.stateNode,t};Bt.flushSync=function(t){return yi(t)};Bt.hydrate=function(t,e,n){if(!Fc(e))throw Error(F(200));return Uc(null,t,e,!0,n)};Bt.hydrateRoot=function(t,e,n){if(!Lf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ww;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Hw(e,null,t,1,n??null,i,!1,s,o),t[qn]=e.current,qo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jc(e)};Bt.render=function(t,e,n){if(!Fc(e))throw Error(F(200));return Uc(null,t,e,!1,n)};Bt.unmountComponentAtNode=function(t){if(!Fc(t))throw Error(F(40));return t._reactRootContainer?(yi(function(){Uc(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1};Bt.unstable_batchedUpdates=Rf;Bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Fc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Uc(t,e,n,!1,r)};Bt.version="18.3.1-next-f1338f8080-20240426";function qw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qw)}catch(t){console.error(t)}}qw(),qy.exports=Bt;var Gw=qy.exports,zg=Gw;Eh.createRoot=zg.createRoot,Eh.hydrateRoot=zg.hydrateRoot;const ZS=()=>{};var Hg={};/**
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
 */const Kw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|u>>6,T=u&63;c||(T=64,o||(g=64)),r.push(n[f],n[m],n[g],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||m==null)throw new tA;const g=s<<2|l>>4;if(r.push(g),u!==64){const T=l<<4&240|u>>2;if(r.push(T),m!==64){const k=u<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nA=function(t){const e=Kw(t);return Qw.encodeByteArray(e,!0)},nc=function(t){return nA(t).replace(/\./g,"")},Yw=function(t){try{return Qw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iA=()=>rA().__FIREBASE_DEFAULTS__,sA=()=>{if(typeof process>"u"||typeof Hg>"u")return;const t=Hg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yw(t[1]);return e&&JSON.parse(e)},$c=()=>{try{return ZS()||iA()||sA()||oA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xw=t=>{var e,n;return(n=(e=$c())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},aA=t=>{const e=Xw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Jw=()=>{var t;return(t=$c())==null?void 0:t.config},Zw=t=>{var e;return(e=$c())==null?void 0:e[`_${t}`]};/**
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
 */class lA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ds(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function eE(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function cA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[nc(JSON.stringify(n)),nc(JSON.stringify(o)),""].join(".")}const Do={};function uA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Do))Do[e]?t.emulator.push(e):t.prod.push(e);return t}function hA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Wg=!1;function tE(t,e){if(typeof window>"u"||typeof document>"u"||!Ds(window.location.host)||Do[t]===e||Do[t]||Wg)return;Do[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=uA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,T){g.setAttribute("width","24"),g.setAttribute("id",T),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Wg=!0,o()},g}function f(g,T){g.setAttribute("id",T),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=hA(r),T=n("text"),k=document.getElementById(T)||document.createElement("span"),x=n("learnmore"),b=document.getElementById(x)||document.createElement("a"),w=n("preprendIcon"),y=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const E=g.element;l(E),f(b,x);const R=u();c(y,w),E.append(y,k,b,R),document.body.appendChild(E)}s?(k.innerText="Preview backend disconnected.",y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function fA(){var e;const t=(e=$c())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gA(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _A(){return!fA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rE(){try{return typeof indexedDB=="object"}catch{return!1}}function iE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function yA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const vA="FirebaseError";class gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vA,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new gn(i,l,r)}}function wA(t,e){return t.replace(EA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const EA=/\{\$([^}]+)}/g;function IA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(qg(s)&&qg(o)){if(!Lr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qg(t){return t!==null&&typeof t=="object"}/**
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
 */function ga(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _o(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function yo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function TA(t,e){const n=new SA(t,e);return n.subscribe.bind(n)}class SA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=sh),i.error===void 0&&(i.error=sh),i.complete===void 0&&(i.complete=sh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sh(){}/**
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
 */const CA=1e3,PA=2,kA=4*60*60*1e3,RA=.5;function Gg(t,e=CA,n=PA){const r=e*Math.pow(n,t),i=Math.round(RA*r*(Math.random()-.5)*2);return Math.min(kA,r+i)}/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const si="[DEFAULT]";/**
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
 */class xA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DA(e))try{this.getOrInitializeService({instanceIdentifier:si})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=si){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=si){return this.instances.has(e)}getOptions(e=si){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=si){return this.component?this.component.multipleInstances?e:si:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NA(t){return t===si?void 0:t}function DA(t){return t.instantiationMode==="EAGER"}/**
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
 */class bA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const OA={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},VA=re.INFO,LA={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},MA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=LA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bc{constructor(e){this.name=e,this._logLevel=VA,this._logHandler=MA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const jA=(t,e)=>e.some(n=>t instanceof n);let Kg,Qg;function FA(){return Kg||(Kg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UA(){return Qg||(Qg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sE=new WeakMap,pd=new WeakMap,oE=new WeakMap,oh=new WeakMap,Mf=new WeakMap;function $A(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sE.set(n,t)}).catch(()=>{}),Mf.set(e,t),e}function BA(t){if(pd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});pd.set(t,e)}let md={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||oE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zA(t){md=t(md)}function HA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ah(this),e,...n);return oE.set(r,e.sort?e.sort():[e]),Rr(r)}:UA().includes(t)?function(...e){return t.apply(ah(this),e),Rr(sE.get(this))}:function(...e){return Rr(t.apply(ah(this),e))}}function WA(t){return typeof t=="function"?HA(t):(t instanceof IDBTransaction&&BA(t),jA(t,FA())?new Proxy(t,md):t)}function Rr(t){if(t instanceof IDBRequest)return $A(t);if(oh.has(t))return oh.get(t);const e=WA(t);return e!==t&&(oh.set(t,e),Mf.set(e,t)),e}const ah=t=>Mf.get(t);function aE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Rr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Rr(o.result),c.oldVersion,c.newVersion,Rr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const qA=["get","getKey","getAll","getAllKeys","count"],GA=["put","add","delete","clear"],lh=new Map;function Yg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lh.get(e))return lh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=GA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qA.includes(n)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return lh.set(e,s),s}zA(t=>({...t,get:(e,n,r)=>Yg(e,n)||t.get(e,n,r),has:(e,n)=>!!Yg(e,n)||t.has(e,n)}));/**
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
 */class KA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gd="@firebase/app",Xg="0.14.6";/**
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
 */const Qn=new Bc("@firebase/app"),YA="@firebase/app-compat",XA="@firebase/analytics-compat",JA="@firebase/analytics",ZA="@firebase/app-check-compat",eC="@firebase/app-check",tC="@firebase/auth",nC="@firebase/auth-compat",rC="@firebase/database",iC="@firebase/data-connect",sC="@firebase/database-compat",oC="@firebase/functions",aC="@firebase/functions-compat",lC="@firebase/installations",cC="@firebase/installations-compat",uC="@firebase/messaging",hC="@firebase/messaging-compat",dC="@firebase/performance",fC="@firebase/performance-compat",pC="@firebase/remote-config",mC="@firebase/remote-config-compat",gC="@firebase/storage",_C="@firebase/storage-compat",yC="@firebase/firestore",vC="@firebase/ai",wC="@firebase/firestore-compat",EC="firebase",IC="12.6.0";/**
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
 */const _d="[DEFAULT]",TC={[gd]:"fire-core",[YA]:"fire-core-compat",[JA]:"fire-analytics",[XA]:"fire-analytics-compat",[eC]:"fire-app-check",[ZA]:"fire-app-check-compat",[tC]:"fire-auth",[nC]:"fire-auth-compat",[rC]:"fire-rtdb",[iC]:"fire-data-connect",[sC]:"fire-rtdb-compat",[oC]:"fire-fn",[aC]:"fire-fn-compat",[lC]:"fire-iid",[cC]:"fire-iid-compat",[uC]:"fire-fcm",[hC]:"fire-fcm-compat",[dC]:"fire-perf",[fC]:"fire-perf-compat",[pC]:"fire-rc",[mC]:"fire-rc-compat",[gC]:"fire-gcs",[_C]:"fire-gcs-compat",[yC]:"fire-fst",[wC]:"fire-fst-compat",[vC]:"fire-vertex","fire-js":"fire-js",[EC]:"fire-js-all"};/**
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
 */const rc=new Map,SC=new Map,yd=new Map;function Jg(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dn(t){const e=t.name;if(yd.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;yd.set(e,t);for(const n of rc.values())Jg(n,t);for(const n of SC.values())Jg(n,t);return!0}function Pi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function an(t){return t==null?!1:t.settings!==void 0}/**
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
 */const AC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new Ci("app","Firebase",AC);/**
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
 */class CC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
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
 */const bs=IC;function lE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:_d,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw xr.create("bad-app-name",{appName:String(i)});if(n||(n=Jw()),!n)throw xr.create("no-options");const s=rc.get(i);if(s){if(Lr(n,s.options)&&Lr(r,s.config))return s;throw xr.create("duplicate-app",{appName:i})}const o=new bA(i);for(const c of yd.values())o.addComponent(c);const l=new CC(n,r,o);return rc.set(i,l),l}function jf(t=_d){const e=rc.get(t);if(!e&&t===_d&&Jw())return lE();if(!e)throw xr.create("no-app",{appName:t});return e}function Xt(t,e,n){let r=TC[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(o.join(" "));return}Dn(new dn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const PC="firebase-heartbeat-database",kC=1,ta="firebase-heartbeat-store";let ch=null;function cE(){return ch||(ch=aE(PC,kC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ta)}catch(n){console.warn(n)}}}}).catch(t=>{throw xr.create("idb-open",{originalErrorMessage:t.message})})),ch}async function RC(t){try{const n=(await cE()).transaction(ta),r=await n.objectStore(ta).get(uE(t));return await n.done,r}catch(e){if(e instanceof gn)Qn.warn(e.message);else{const n=xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function Zg(t,e){try{const r=(await cE()).transaction(ta,"readwrite");await r.objectStore(ta).put(e,uE(t)),await r.done}catch(n){if(n instanceof gn)Qn.warn(n.message);else{const r=xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function uE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xC=1024,NC=30;class DC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=e_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>NC){const o=VC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=e_(),{heartbeatsToSend:r,unsentEntries:i}=bC(this._heartbeatsCache.heartbeats),s=nc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Qn.warn(n),""}}}function e_(){return new Date().toISOString().substring(0,10)}function bC(t,e=xC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),t_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),t_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class OC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rE()?iE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await RC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function t_(t){return nc(JSON.stringify({version:2,heartbeats:t})).length}function VC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function LC(t){Dn(new dn("platform-logger",e=>new KA(e),"PRIVATE")),Dn(new dn("heartbeat",e=>new DC(e),"PRIVATE")),Xt(gd,Xg,t),Xt(gd,Xg,"esm2020"),Xt("fire-js","")}LC("");function hE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MC=hE,dE=new Ci("auth","Firebase",hE());/**
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
 */const ic=new Bc("@firebase/auth");function jC(t,...e){ic.logLevel<=re.WARN&&ic.warn(`Auth (${bs}): ${t}`,...e)}function Il(t,...e){ic.logLevel<=re.ERROR&&ic.error(`Auth (${bs}): ${t}`,...e)}/**
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
 */function fn(t,...e){throw Ff(t,...e)}function Cn(t,...e){return Ff(t,...e)}function fE(t,e,n){const r={...MC(),[e]:n};return new Ci("auth","Firebase",r).create(e,{appName:t.name})}function Nr(t){return fE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ff(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dE.create(t,...e)}function K(t,e,...n){if(!t)throw Ff(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Il(e),new Error(e)}function Yn(t,e){t||Fn(e)}/**
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
 */function vd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function FC(){return n_()==="http:"||n_()==="https:"}function n_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function UC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FC()||nE()||"connection"in navigator)?navigator.onLine:!0}function $C(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _a{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=dA()||mA()}get(){return UC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Uf(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class pE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const BC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],HC=new _a(3e4,6e4);function ki(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function qr(t,e,n,r,i={}){return mE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ga({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...s};return pA()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ds(t.emulatorConfig.host)&&(u.credentials="include"),pE.fetch()(await gE(t,t.config.apiHost,n,l),u)})}async function mE(t,e,n){t._canInitEmulator=!1;const r={...BC,...e};try{const i=new qC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw il(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw il(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw il(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw il(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw fE(t,f,u);fn(t,f)}}catch(i){if(i instanceof gn)throw i;fn(t,"network-request-failed",{message:String(i)})}}async function zc(t,e,n,r,i={}){const s=await qr(t,e,n,r,i);return"mfaPendingCredential"in s&&fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function gE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Uf(t.config,i):`${t.config.apiScheme}://${i}`;return zC.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function WC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Cn(this.auth,"network-request-failed")),HC.get())})}}function il(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Cn(t,e,r);return i.customData._tokenResponse=n,i}function r_(t){return t!==void 0&&t.enterprise!==void 0}class GC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return WC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function KC(t,e){return qr(t,"GET","/v2/recaptchaConfig",ki(t,e))}/**
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
 */async function QC(t,e){return qr(t,"POST","/v1/accounts:delete",e)}async function sc(t,e){return qr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function bo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YC(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=$f(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bo(uh(i.auth_time)),issuedAtTime:bo(uh(i.iat)),expirationTime:bo(uh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function uh(t){return Number(t)*1e3}function $f(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Il("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yw(n);return i?JSON.parse(i):(Il("Failed to decode base64 JWT payload"),null)}catch(i){return Il("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function i_(t){const e=$f(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function na(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gn&&XC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function XC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class JC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bo(this.lastLoginAt),this.creationTime=bo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oc(t){var m;const e=t.auth,n=await t.getIdToken(),r=await na(t,sc(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?_E(i.providerUserInfo):[],o=eP(t.providerData,s),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new wd(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function ZC(t){const e=je(t);await oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _E(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function tP(t,e){const n=await mE(t,{},async()=>{const r=ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await gE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ds(t.emulatorConfig.host)&&(c.credentials="include"),pE.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nP(t,e){return qr(t,"POST","/v2/accounts:revokeToken",ki(t,e))}/**
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
 */class as{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):i_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=i_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await tP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new as;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new as,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
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
 */function cr(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new JC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await na(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YC(this,e)}reload(){return ZC(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(Nr(this.auth));const e=await this.getIdToken();return await na(this,QC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:T,providerData:k,stsTokenManager:x}=n;K(m&&x,e,"internal-error");const b=as.fromJSON(this.name,x);K(typeof m=="string",e,"internal-error"),cr(r,e.name),cr(i,e.name),K(typeof g=="boolean",e,"internal-error"),K(typeof T=="boolean",e,"internal-error"),cr(s,e.name),cr(o,e.name),cr(l,e.name),cr(c,e.name),cr(u,e.name),cr(f,e.name);const w=new ln({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:T,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:u,lastLoginAt:f});return k&&Array.isArray(k)&&(w.providerData=k.map(y=>({...y}))),c&&(w._redirectEventId=c),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new as;i.updateFromServerResponse(n);const s=new ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await oc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?_E(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new as;l.updateFromIdToken(r);const c=new ln({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new wd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
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
 */const s_=new Map;function Un(t){Yn(t instanceof Function,"Expected a class definition");let e=s_.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,s_.set(t,e),e)}/**
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
 */class yE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yE.type="NONE";const o_=yE;/**
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
 */function Tl(t,e,n){return`firebase:${t}:${e}:${n}`}class ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Tl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Tl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await sc(this.auth,{idToken:e}).catch(()=>{});return n?ln._fromGetAccountInfoResponse(this.auth,n,e):null}return ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ls(Un(o_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Un(o_);const o=Tl(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let m;if(typeof f=="string"){const g=await sc(e,{idToken:f}).catch(()=>{});if(!g)break;m=await ln._fromGetAccountInfoResponse(e,g,f)}else m=ln._fromJSON(e,f);u!==s&&(l=m),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ls(s,e,r):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ls(s,e,r))}}/**
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
 */function a_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(IE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(SE(e))return"Blackberry";if(AE(e))return"Webos";if(wE(e))return"Safari";if((e.includes("chrome/")||EE(e))&&!e.includes("edge/"))return"Chrome";if(TE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vE(t=gt()){return/firefox\//i.test(t)}function wE(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function EE(t=gt()){return/crios\//i.test(t)}function IE(t=gt()){return/iemobile/i.test(t)}function TE(t=gt()){return/android/i.test(t)}function SE(t=gt()){return/blackberry/i.test(t)}function AE(t=gt()){return/webos/i.test(t)}function Bf(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rP(t=gt()){var e;return Bf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function iP(){return gA()&&document.documentMode===10}function CE(t=gt()){return Bf(t)||TE(t)||AE(t)||SE(t)||/windows phone/i.test(t)||IE(t)}/**
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
 */function PE(t,e=[]){let n;switch(t){case"Browser":n=a_(gt());break;case"Worker":n=`${a_(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${r}`}/**
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
 */class sP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function oP(t,e={}){return qr(t,"GET","/v2/passwordPolicy",ki(t,e))}/**
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
 */const aP=6;class lP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??aP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class cP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new l_(this),this.idTokenSubscription=new l_(this),this.beforeStateQueue=new sP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ls.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sc(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(an(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$C()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(an(this.app))return Promise.reject(Nr(this));const n=e?je(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(Nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return an(this.app)?Promise.reject(Nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oP(this),n=new lP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ci("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Un(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await ls.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=PE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(an(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&jC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Os(t){return je(t)}class l_{constructor(e){this.auth=e,this.observer=null,this.addObserver=TA(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uP(t){Hc=t}function kE(t){return Hc.loadJS(t)}function hP(){return Hc.recaptchaEnterpriseScript}function dP(){return Hc.gapiScript}function fP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class pP{constructor(){this.enterprise=new mP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class mP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const gP="recaptcha-enterprise",RE="NO_RECAPTCHA";class _P{constructor(e){this.type=gP,this.auth=Os(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{KC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new GC(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function i(s,o,l){const c=window.grecaptcha;r_(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(RE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new pP().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&r_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=hP();c.length!==0&&(c+=l),kE(c).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function c_(t,e,n,r=!1,i=!1){const s=new _P(t);let o;if(i)o=RE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function u_(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await c_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await c_(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function yP(t,e){const n=Pi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Lr(s,e??{}))return i;fn(i,"already-initialized")}return n.initialize({options:e})}function vP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wP(t,e,n){const r=Os(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=xE(e),{host:o,port:l}=EP(e),c=l===null?"":`:${l}`,u={url:`${s}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(Lr(u,r.config.emulator)&&Lr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ds(o)?(eE(`${s}//${o}${c}`),tE("Auth",!0)):IP()}function xE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function EP(t){const e=xE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:h_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:h_(o)}}}function h_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function IP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class zf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}async function TP(t,e){return qr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function SP(t,e){return zc(t,"POST","/v1/accounts:signInWithPassword",ki(t,e))}/**
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
 */async function AP(t,e){return zc(t,"POST","/v1/accounts:signInWithEmailLink",ki(t,e))}async function CP(t,e){return zc(t,"POST","/v1/accounts:signInWithEmailLink",ki(t,e))}/**
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
 */class ra extends zf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ra(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ra(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return u_(e,n,"signInWithPassword",SP);case"emailLink":return AP(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return u_(e,r,"signUpPassword",TP);case"emailLink":return CP(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function cs(t,e){return zc(t,"POST","/v1/accounts:signInWithIdp",ki(t,e))}/**
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
 */const PP="http://localhost";class vi extends zf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new vi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cs(e,n)}buildRequest(){const e={requestUri:PP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ga(n)}return e}}/**
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
 */function kP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RP(t){const e=_o(yo(t)).link,n=e?_o(yo(e)).deep_link_id:null,r=_o(yo(t)).deep_link_id;return(r?_o(yo(r)).link:null)||r||n||e||t}class Hf{constructor(e){const n=_o(yo(e)),r=n.apiKey??null,i=n.oobCode??null,s=kP(n.mode??null);K(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=RP(e);try{return new Hf(n)}catch{return null}}}/**
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
 */class Vs{constructor(){this.providerId=Vs.PROVIDER_ID}static credential(e,n){return ra._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Hf.parseLink(n);return K(r,"argument-error"),ra._fromEmailAndCode(e,r.code,r.tenantId)}}Vs.PROVIDER_ID="password";Vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class NE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ya extends NE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pr extends ya{constructor(){super("facebook.com")}static credential(e){return vi._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";pr.PROVIDER_ID="facebook.com";/**
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
 */class mr extends ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vi._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.GOOGLE_SIGN_IN_METHOD="google.com";mr.PROVIDER_ID="google.com";/**
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
 */class gr extends ya{constructor(){super("github.com")}static credential(e){return vi._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
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
 */class _r extends ya{constructor(){super("twitter.com")}static credential(e,n){return vi._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.TWITTER_SIGN_IN_METHOD="twitter.com";_r.PROVIDER_ID="twitter.com";/**
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
 */class Es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ln._fromIdTokenResponse(e,r,i),o=d_(r);return new Es({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=d_(r);return new Es({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function d_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ac extends gn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ac.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ac(e,n,r,i)}}function DE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(t,s,e,r):s})}async function xP(t,e,n=!1){const r=await na(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Es._forOperation(t,"link",r)}/**
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
 */async function NP(t,e,n=!1){const{auth:r}=t;if(an(r.app))return Promise.reject(Nr(r));const i="reauthenticate";try{const s=await na(t,DE(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=$f(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Es._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),s}}/**
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
 */async function bE(t,e,n=!1){if(an(t.app))return Promise.reject(Nr(t));const r="signIn",i=await DE(t,r,e),s=await Es._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function DP(t,e){return bE(Os(t),e)}/**
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
 */async function bP(t){const e=Os(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function OP(t,e,n){return an(t.app)?Promise.reject(Nr(t)):DP(je(t),Vs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&bP(t),r})}function VP(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function LP(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function MP(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}function jP(t){return je(t).signOut()}const lc="__sak";/**
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
 */class OE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lc,"1"),this.storage.removeItem(lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const FP=1e3,UP=10;class VE extends OE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=CE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);iP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,UP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}VE.type="LOCAL";const $P=VE;/**
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
 */class LE extends OE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}LE.type="SESSION";const ME=LE;/**
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
 */function BP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Wc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),c=await BP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wc.receivers=[];/**
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
 */function Wf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const u=Wf("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Pn(){return window}function HP(t){Pn().location.href=t}/**
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
 */function jE(){return typeof Pn().WorkerGlobalScope<"u"&&typeof Pn().importScripts=="function"}async function WP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function GP(){return jE()?self:null}/**
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
 */const FE="firebaseLocalStorageDb",KP=1,cc="firebaseLocalStorage",UE="fbase_key";class va{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qc(t,e){return t.transaction([cc],e?"readwrite":"readonly").objectStore(cc)}function QP(){const t=indexedDB.deleteDatabase(FE);return new va(t).toPromise()}function Ed(){const t=indexedDB.open(FE,KP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cc,{keyPath:UE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cc)?e(r):(r.close(),await QP(),e(await Ed()))})})}async function f_(t,e,n){const r=qc(t,!0).put({[UE]:e,value:n});return new va(r).toPromise()}async function YP(t,e){const n=qc(t,!1).get(e),r=await new va(n).toPromise();return r===void 0?null:r.value}function p_(t,e){const n=qc(t,!0).delete(e);return new va(n).toPromise()}const XP=800,JP=3;class $E{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ed(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wc._getInstance(GP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await WP(),!this.activeServiceWorker)return;this.sender=new zP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ed();return await f_(e,lc,"1"),await p_(e,lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>f_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>p_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=qc(i,!1).getAll();return new va(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$E.type="LOCAL";const ZP=$E;new _a(3e4,6e4);/**
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
 */function ek(t,e){return e?Un(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qf extends zf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tk(t){return bE(t.auth,new qf(t),t.bypassAuthState)}function nk(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),NP(n,new qf(t),t.bypassAuthState)}async function rk(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),xP(n,new qf(t),t.bypassAuthState)}/**
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
 */class BE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tk;case"linkViaPopup":case"linkViaRedirect":return rk;case"reauthViaPopup":case"reauthViaRedirect":return nk;default:fn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ik=new _a(2e3,1e4);class es extends BE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,es.currentPopupAction&&es.currentPopupAction.cancel(),es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=Wf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ik.get())};e()}}es.currentPopupAction=null;/**
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
 */const sk="pendingRedirect",Sl=new Map;class ok extends BE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Sl.get(this.auth._key());if(!e){try{const r=await ak(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sl.set(this.auth._key(),e)}return this.bypassAuthState||Sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ak(t,e){const n=uk(e),r=ck(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function lk(t,e){Sl.set(t._key(),e)}function ck(t){return Un(t._redirectPersistence)}function uk(t){return Tl(sk,t.config.apiKey,t.name)}async function hk(t,e,n=!1){if(an(t.app))return Promise.reject(Nr(t));const r=Os(t),i=ek(r,e),o=await new ok(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const dk=10*60*1e3;class fk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zE(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dk&&this.cachedEventUids.clear(),this.cachedEventUids.has(m_(e))}saveEventToCache(e){this.cachedEventUids.add(m_(e)),this.lastProcessedEventTime=Date.now()}}function m_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zE(t);default:return!1}}/**
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
 */async function mk(t,e={}){return qr(t,"GET","/v1/projects",e)}/**
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
 */const gk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_k=/^https?/;async function yk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mk(t);for(const n of e)try{if(vk(n))return}catch{}fn(t,"unauthorized-domain")}function vk(t){const e=vd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_k.test(n))return!1;if(gk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const wk=new _a(3e4,6e4);function g_(){const t=Pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ek(t){return new Promise((e,n)=>{var i,s,o;function r(){g_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{g_(),n(Cn(t,"network-request-failed"))},timeout:wk.get()})}if((s=(i=Pn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Pn().gapi)!=null&&o.load)r();else{const l=fP("iframefcb");return Pn()[l]=()=>{gapi.load?r():n(Cn(t,"network-request-failed"))},kE(`${dP()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Al=null,e})}let Al=null;function Ik(t){return Al=Al||Ek(t),Al}/**
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
 */const Tk=new _a(5e3,15e3),Sk="__/auth/iframe",Ak="emulator/auth/iframe",Ck={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kk(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Uf(e,Ak):`https://${t.config.authDomain}/${Sk}`,r={apiKey:e.apiKey,appName:t.name,v:bs},i=Pk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ga(r).slice(1)}`}async function Rk(t){const e=await Ik(t),n=Pn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:kk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ck,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Cn(t,"network-request-failed"),l=Pn().setTimeout(()=>{s(o)},Tk.get());function c(){Pn().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const xk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nk=500,Dk=600,bk="_blank",Ok="http://localhost";class __{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vk(t,e,n,r=Nk,i=Dk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...xk,width:r.toString(),height:i.toString(),top:s,left:o},u=gt().toLowerCase();n&&(l=EE(u)?bk:n),vE(u)&&(e=e||Ok,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[T,k])=>`${g}${T}=${k},`,"");if(rP(u)&&l!=="_self")return Lk(e||"",l),new __(null);const m=window.open(e||"",l,f);K(m,t,"popup-blocked");try{m.focus()}catch{}return new __(m)}function Lk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Mk="__/auth/handler",jk="emulator/auth/handler",Fk=encodeURIComponent("fac");async function y_(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bs,eventId:i};if(e instanceof NE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",IA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof ya){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${Fk}=${encodeURIComponent(c)}`:"";return`${Uk(t)}?${ga(l).slice(1)}${u}`}function Uk({config:t}){return t.emulator?Uf(t,jk):`https://${t.authDomain}/${Mk}`}/**
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
 */const hh="webStorageSupport";class $k{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ME,this._completeRedirectFn=hk,this._overrideRedirectResult=lk}async _openPopup(e,n,r,i){var o;Yn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await y_(e,n,r,vd(),i);return Vk(e,s,Wf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await y_(e,n,r,vd(),i);return HP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Rk(e),r=new fk(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hh,{type:hh},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[hh];s!==void 0&&n(!!s),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return CE()||wE()||Bf()}}const Bk=$k;var v_="@firebase/auth",w_="1.12.0";/**
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
 */class zk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Hk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wk(t){Dn(new dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:PE(t)},u=new cP(r,i,s,c);return vP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dn(new dn("auth-internal",e=>{const n=Os(e.getProvider("auth").getImmediate());return(r=>new zk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(v_,w_,Hk(t)),Xt(v_,w_,"esm2020")}/**
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
 */const qk=5*60,Gk=Zw("authIdTokenMaxAge")||qk;let E_=null;const Kk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Gk)return;const i=n==null?void 0:n.token;E_!==i&&(E_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Qk(t=jf()){const e=Pi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yP(t,{popupRedirectResolver:Bk,persistence:[ZP,$P,ME]}),r=Zw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Kk(s.toString());LP(n,o,()=>o(n.currentUser)),VP(n,l=>o(l))}}const i=Xw("auth");return i&&wP(n,`http://${i}`),n}function Yk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}uP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Yk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Wk("Browser");var Xk="firebase",Jk="12.7.0";/**
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
 */Xt(Xk,Jk,"app");var I_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,HE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function S(){}S.prototype=v.prototype,I.F=v.prototype,I.prototype=new S,I.prototype.constructor=I,I.D=function(C,P,N){for(var A=Array(arguments.length-2),me=2;me<arguments.length;me++)A[me-2]=arguments[me];return v.prototype[P].apply(C,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,v,S){S||(S=0);const C=Array(16);if(typeof v=="string")for(var P=0;P<16;++P)C[P]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(P=0;P<16;++P)C[P]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=I.g[0],S=I.g[1],P=I.g[2];let N=I.g[3],A;A=v+(N^S&(P^N))+C[0]+3614090360&4294967295,v=S+(A<<7&4294967295|A>>>25),A=N+(P^v&(S^P))+C[1]+3905402710&4294967295,N=v+(A<<12&4294967295|A>>>20),A=P+(S^N&(v^S))+C[2]+606105819&4294967295,P=N+(A<<17&4294967295|A>>>15),A=S+(v^P&(N^v))+C[3]+3250441966&4294967295,S=P+(A<<22&4294967295|A>>>10),A=v+(N^S&(P^N))+C[4]+4118548399&4294967295,v=S+(A<<7&4294967295|A>>>25),A=N+(P^v&(S^P))+C[5]+1200080426&4294967295,N=v+(A<<12&4294967295|A>>>20),A=P+(S^N&(v^S))+C[6]+2821735955&4294967295,P=N+(A<<17&4294967295|A>>>15),A=S+(v^P&(N^v))+C[7]+4249261313&4294967295,S=P+(A<<22&4294967295|A>>>10),A=v+(N^S&(P^N))+C[8]+1770035416&4294967295,v=S+(A<<7&4294967295|A>>>25),A=N+(P^v&(S^P))+C[9]+2336552879&4294967295,N=v+(A<<12&4294967295|A>>>20),A=P+(S^N&(v^S))+C[10]+4294925233&4294967295,P=N+(A<<17&4294967295|A>>>15),A=S+(v^P&(N^v))+C[11]+2304563134&4294967295,S=P+(A<<22&4294967295|A>>>10),A=v+(N^S&(P^N))+C[12]+1804603682&4294967295,v=S+(A<<7&4294967295|A>>>25),A=N+(P^v&(S^P))+C[13]+4254626195&4294967295,N=v+(A<<12&4294967295|A>>>20),A=P+(S^N&(v^S))+C[14]+2792965006&4294967295,P=N+(A<<17&4294967295|A>>>15),A=S+(v^P&(N^v))+C[15]+1236535329&4294967295,S=P+(A<<22&4294967295|A>>>10),A=v+(P^N&(S^P))+C[1]+4129170786&4294967295,v=S+(A<<5&4294967295|A>>>27),A=N+(S^P&(v^S))+C[6]+3225465664&4294967295,N=v+(A<<9&4294967295|A>>>23),A=P+(v^S&(N^v))+C[11]+643717713&4294967295,P=N+(A<<14&4294967295|A>>>18),A=S+(N^v&(P^N))+C[0]+3921069994&4294967295,S=P+(A<<20&4294967295|A>>>12),A=v+(P^N&(S^P))+C[5]+3593408605&4294967295,v=S+(A<<5&4294967295|A>>>27),A=N+(S^P&(v^S))+C[10]+38016083&4294967295,N=v+(A<<9&4294967295|A>>>23),A=P+(v^S&(N^v))+C[15]+3634488961&4294967295,P=N+(A<<14&4294967295|A>>>18),A=S+(N^v&(P^N))+C[4]+3889429448&4294967295,S=P+(A<<20&4294967295|A>>>12),A=v+(P^N&(S^P))+C[9]+568446438&4294967295,v=S+(A<<5&4294967295|A>>>27),A=N+(S^P&(v^S))+C[14]+3275163606&4294967295,N=v+(A<<9&4294967295|A>>>23),A=P+(v^S&(N^v))+C[3]+4107603335&4294967295,P=N+(A<<14&4294967295|A>>>18),A=S+(N^v&(P^N))+C[8]+1163531501&4294967295,S=P+(A<<20&4294967295|A>>>12),A=v+(P^N&(S^P))+C[13]+2850285829&4294967295,v=S+(A<<5&4294967295|A>>>27),A=N+(S^P&(v^S))+C[2]+4243563512&4294967295,N=v+(A<<9&4294967295|A>>>23),A=P+(v^S&(N^v))+C[7]+1735328473&4294967295,P=N+(A<<14&4294967295|A>>>18),A=S+(N^v&(P^N))+C[12]+2368359562&4294967295,S=P+(A<<20&4294967295|A>>>12),A=v+(S^P^N)+C[5]+4294588738&4294967295,v=S+(A<<4&4294967295|A>>>28),A=N+(v^S^P)+C[8]+2272392833&4294967295,N=v+(A<<11&4294967295|A>>>21),A=P+(N^v^S)+C[11]+1839030562&4294967295,P=N+(A<<16&4294967295|A>>>16),A=S+(P^N^v)+C[14]+4259657740&4294967295,S=P+(A<<23&4294967295|A>>>9),A=v+(S^P^N)+C[1]+2763975236&4294967295,v=S+(A<<4&4294967295|A>>>28),A=N+(v^S^P)+C[4]+1272893353&4294967295,N=v+(A<<11&4294967295|A>>>21),A=P+(N^v^S)+C[7]+4139469664&4294967295,P=N+(A<<16&4294967295|A>>>16),A=S+(P^N^v)+C[10]+3200236656&4294967295,S=P+(A<<23&4294967295|A>>>9),A=v+(S^P^N)+C[13]+681279174&4294967295,v=S+(A<<4&4294967295|A>>>28),A=N+(v^S^P)+C[0]+3936430074&4294967295,N=v+(A<<11&4294967295|A>>>21),A=P+(N^v^S)+C[3]+3572445317&4294967295,P=N+(A<<16&4294967295|A>>>16),A=S+(P^N^v)+C[6]+76029189&4294967295,S=P+(A<<23&4294967295|A>>>9),A=v+(S^P^N)+C[9]+3654602809&4294967295,v=S+(A<<4&4294967295|A>>>28),A=N+(v^S^P)+C[12]+3873151461&4294967295,N=v+(A<<11&4294967295|A>>>21),A=P+(N^v^S)+C[15]+530742520&4294967295,P=N+(A<<16&4294967295|A>>>16),A=S+(P^N^v)+C[2]+3299628645&4294967295,S=P+(A<<23&4294967295|A>>>9),A=v+(P^(S|~N))+C[0]+4096336452&4294967295,v=S+(A<<6&4294967295|A>>>26),A=N+(S^(v|~P))+C[7]+1126891415&4294967295,N=v+(A<<10&4294967295|A>>>22),A=P+(v^(N|~S))+C[14]+2878612391&4294967295,P=N+(A<<15&4294967295|A>>>17),A=S+(N^(P|~v))+C[5]+4237533241&4294967295,S=P+(A<<21&4294967295|A>>>11),A=v+(P^(S|~N))+C[12]+1700485571&4294967295,v=S+(A<<6&4294967295|A>>>26),A=N+(S^(v|~P))+C[3]+2399980690&4294967295,N=v+(A<<10&4294967295|A>>>22),A=P+(v^(N|~S))+C[10]+4293915773&4294967295,P=N+(A<<15&4294967295|A>>>17),A=S+(N^(P|~v))+C[1]+2240044497&4294967295,S=P+(A<<21&4294967295|A>>>11),A=v+(P^(S|~N))+C[8]+1873313359&4294967295,v=S+(A<<6&4294967295|A>>>26),A=N+(S^(v|~P))+C[15]+4264355552&4294967295,N=v+(A<<10&4294967295|A>>>22),A=P+(v^(N|~S))+C[6]+2734768916&4294967295,P=N+(A<<15&4294967295|A>>>17),A=S+(N^(P|~v))+C[13]+1309151649&4294967295,S=P+(A<<21&4294967295|A>>>11),A=v+(P^(S|~N))+C[4]+4149444226&4294967295,v=S+(A<<6&4294967295|A>>>26),A=N+(S^(v|~P))+C[11]+3174756917&4294967295,N=v+(A<<10&4294967295|A>>>22),A=P+(v^(N|~S))+C[2]+718787259&4294967295,P=N+(A<<15&4294967295|A>>>17),A=S+(N^(P|~v))+C[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,I.g[2]=I.g[2]+P&4294967295,I.g[3]=I.g[3]+N&4294967295}r.prototype.v=function(I,v){v===void 0&&(v=I.length);const S=v-this.blockSize,C=this.C;let P=this.h,N=0;for(;N<v;){if(P==0)for(;N<=S;)i(this,I,N),N+=this.blockSize;if(typeof I=="string"){for(;N<v;)if(C[P++]=I.charCodeAt(N++),P==this.blockSize){i(this,C),P=0;break}}else for(;N<v;)if(C[P++]=I[N++],P==this.blockSize){i(this,C),P=0;break}}this.h=P,this.o+=v},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;v=this.o*8;for(var S=I.length-8;S<I.length;++S)I[S]=v&255,v/=256;for(this.v(I),I=Array(16),v=0,S=0;S<4;++S)for(let C=0;C<32;C+=8)I[v++]=this.g[S]>>>C&255;return I};function s(I,v){var S=l;return Object.prototype.hasOwnProperty.call(S,I)?S[I]:S[I]=v(I)}function o(I,v){this.h=v;const S=[];let C=!0;for(let P=I.length-1;P>=0;P--){const N=I[P]|0;C&&N==v||(S[P]=N,C=!1)}this.g=S}var l={};function c(I){return-128<=I&&I<128?s(I,function(v){return new o([v|0],v<0?-1:0)}):new o([I|0],I<0?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return m;if(I<0)return b(u(-I));const v=[];let S=1;for(let C=0;I>=S;C++)v[C]=I/S|0,S*=4294967296;return new o(v,0)}function f(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return b(f(I.substring(1),v));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=u(Math.pow(v,8));let C=m;for(let N=0;N<I.length;N+=8){var P=Math.min(8,I.length-N);const A=parseInt(I.substring(N,N+P),v);P<8?(P=u(Math.pow(v,P)),C=C.j(P).add(u(A))):(C=C.j(S),C=C.add(u(A)))}return C}var m=c(0),g=c(1),T=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-b(this).m();let I=0,v=1;for(let S=0;S<this.g.length;S++){const C=this.i(S);I+=(C>=0?C:4294967296+C)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if(x(this))return"-"+b(this).toString(I);const v=u(Math.pow(I,6));var S=this;let C="";for(;;){const P=R(S,v).g;S=w(S,P.j(v));let N=((S.g.length>0?S.g[0]:S.h)>>>0).toString(I);if(S=P,k(S))return N+C;for(;N.length<6;)N="0"+N;C=N+C}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(let v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function x(I){return I.h==-1}t.l=function(I){return I=w(this,I),x(I)?-1:k(I)?0:1};function b(I){const v=I.g.length,S=[];for(let C=0;C<v;C++)S[C]=~I.g[C];return new o(S,~I.h).add(g)}t.abs=function(){return x(this)?b(this):this},t.add=function(I){const v=Math.max(this.g.length,I.g.length),S=[];let C=0;for(let P=0;P<=v;P++){let N=C+(this.i(P)&65535)+(I.i(P)&65535),A=(N>>>16)+(this.i(P)>>>16)+(I.i(P)>>>16);C=A>>>16,N&=65535,A&=65535,S[P]=A<<16|N}return new o(S,S[S.length-1]&-2147483648?-1:0)};function w(I,v){return I.add(b(v))}t.j=function(I){if(k(this)||k(I))return m;if(x(this))return x(I)?b(this).j(b(I)):b(b(this).j(I));if(x(I))return b(this.j(b(I)));if(this.l(T)<0&&I.l(T)<0)return u(this.m()*I.m());const v=this.g.length+I.g.length,S=[];for(var C=0;C<2*v;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(let P=0;P<I.g.length;P++){const N=this.i(C)>>>16,A=this.i(C)&65535,me=I.i(P)>>>16,_t=I.i(P)&65535;S[2*C+2*P]+=A*_t,y(S,2*C+2*P),S[2*C+2*P+1]+=N*_t,y(S,2*C+2*P+1),S[2*C+2*P+1]+=A*me,y(S,2*C+2*P+1),S[2*C+2*P+2]+=N*me,y(S,2*C+2*P+2)}for(I=0;I<v;I++)S[I]=S[2*I+1]<<16|S[2*I];for(I=v;I<2*v;I++)S[I]=0;return new o(S,0)};function y(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function E(I,v){this.g=I,this.h=v}function R(I,v){if(k(v))throw Error("division by zero");if(k(I))return new E(m,m);if(x(I))return v=R(b(I),v),new E(b(v.g),b(v.h));if(x(v))return v=R(I,b(v)),new E(b(v.g),v.h);if(I.g.length>30){if(x(I)||x(v))throw Error("slowDivide_ only works with positive integers.");for(var S=g,C=v;C.l(I)<=0;)S=O(S),C=O(C);var P=M(S,1),N=M(C,1);for(C=M(C,2),S=M(S,2);!k(C);){var A=N.add(C);A.l(I)<=0&&(P=P.add(S),N=A),C=M(C,1),S=M(S,1)}return v=w(I,P.j(v)),new E(P,v)}for(P=m;I.l(v)>=0;){for(S=Math.max(1,Math.floor(I.m()/v.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),N=u(S),A=N.j(v);x(A)||A.l(I)>0;)S-=C,N=u(S),A=N.j(v);k(N)&&(N=g),P=P.add(N),I=w(I,A)}return new E(P,I)}t.B=function(I){return R(this,I).h},t.and=function(I){const v=Math.max(this.g.length,I.g.length),S=[];for(let C=0;C<v;C++)S[C]=this.i(C)&I.i(C);return new o(S,this.h&I.h)},t.or=function(I){const v=Math.max(this.g.length,I.g.length),S=[];for(let C=0;C<v;C++)S[C]=this.i(C)|I.i(C);return new o(S,this.h|I.h)},t.xor=function(I){const v=Math.max(this.g.length,I.g.length),S=[];for(let C=0;C<v;C++)S[C]=this.i(C)^I.i(C);return new o(S,this.h^I.h)};function O(I){const v=I.g.length+1,S=[];for(let C=0;C<v;C++)S[C]=I.i(C)<<1|I.i(C-1)>>>31;return new o(S,I.h)}function M(I,v){const S=v>>5;v%=32;const C=I.g.length-S,P=[];for(let N=0;N<C;N++)P[N]=v>0?I.i(N+S)>>>v|I.i(N+S+1)<<32-v:I.i(N+S);return new o(P,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,HE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Dr=o}).apply(typeof I_<"u"?I_:typeof self<"u"?self:typeof window<"u"?window:{});var sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var WE,vo,qE,Cl,Id,GE,KE,QE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof sl=="object"&&sl];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in p))break e;p=p[D]}a=a[a.length-1],_=p[a],h=h(_),h!=_&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var p=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&p.push([_,h[_]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,p){return a.call.apply(a.bind,arguments)}function u(a,h,p){return u=c,u.apply(null,arguments)}function f(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function m(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(_,D,V){for(var B=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)B[ee-2]=arguments[ee];return h.prototype[D].apply(_,B)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function T(a){const h=a.length;if(h>0){const p=Array(h);for(let _=0;_<h;_++)p[_]=a[_];return p}return[]}function k(a,h){for(let _=1;_<arguments.length;_++){const D=arguments[_];var p=typeof D;if(p=p!="object"?p:D?Array.isArray(D)?"array":p:"null",p=="array"||p=="object"&&typeof D.length=="number"){p=a.length||0;const V=D.length||0;a.length=p+V;for(let B=0;B<V;B++)a[p+B]=D[B]}else a.push(D)}}class x{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function w(){var a=I;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class y{constructor(){this.h=this.g=null}add(h,p){const _=E.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var E=new x(()=>new R,a=>a.reset());class R{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let O,M=!1,I=new y,v=()=>{const a=Promise.resolve(void 0);O=()=>{a.then(S)}};function S(){for(var a;a=w();){try{a.h.call(a.g)}catch(p){b(p)}var h=E;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}M=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function A(a){return/^[\s\xa0]*$/.test(a)}function me(a,h){P.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(me,P),me.prototype.init=function(a,h){const p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&me.Z.h.call(this)},me.prototype.h=function(){me.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var _t="closure_listenable_"+(Math.random()*1e6|0),J=0;function de(a,h,p,_,D){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=D,this.key=++J,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function G(a,h,p){for(const _ in a)h.call(p,a[_],_,a)}function Z(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function fe(a){const h={};for(const p in a)h[p]=a[p];return h}const be="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yr(a,h){let p,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(p in _)a[p]=_[p];for(let V=0;V<be.length;V++)p=be[V],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function Ht(a){this.src=a,this.g={},this.h=0}Ht.prototype.add=function(a,h,p,_,D){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const B=tn(a,h,_,D);return B>-1?(h=a[B],p||(h.fa=!1)):(h=new de(h,this.src,V,!!_,D),h.fa=p,a.push(h)),h};function Xr(a,h){const p=h.type;if(p in a.g){var _=a.g[p],D=Array.prototype.indexOf.call(_,h,void 0),V;(V=D>=0)&&Array.prototype.splice.call(_,D,1),V&&($(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function tn(a,h,p,_){for(let D=0;D<a.length;++D){const V=a[D];if(!V.da&&V.listener==h&&V.capture==!!p&&V.ha==_)return D}return-1}var tr="closure_lm_"+(Math.random()*1e6|0),du={};function Mp(a,h,p,_,D){if(Array.isArray(h)){for(let V=0;V<h.length;V++)Mp(a,h[V],p,_,D);return null}return p=Up(p),a&&a[_t]?a.J(h,p,l(_)?!!_.capture:!!_,D):X0(a,h,p,!1,_,D)}function X0(a,h,p,_,D,V){if(!h)throw Error("Invalid event type");const B=l(D)?!!D.capture:!!D;let ee=pu(a);if(ee||(a[tr]=ee=new Ht(a)),p=ee.add(h,p,_,B,V),p.proxy)return p;if(_=J0(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)N||(D=B),D===void 0&&(D=!1),a.addEventListener(h.toString(),_,D);else if(a.attachEvent)a.attachEvent(Fp(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function J0(){function a(p){return h.call(a.src,a.listener,p)}const h=Z0;return a}function jp(a,h,p,_,D){if(Array.isArray(h))for(var V=0;V<h.length;V++)jp(a,h[V],p,_,D);else _=l(_)?!!_.capture:!!_,p=Up(p),a&&a[_t]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],p=tn(h,p,_,D),p>-1&&($(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=pu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=tn(h,p,_,D)),(p=a>-1?h[a]:null)&&fu(p))}function fu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[_t])Xr(h.i,a);else{var p=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(p,_,a.capture):h.detachEvent?h.detachEvent(Fp(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=pu(h))?(Xr(p,a),p.h==0&&(p.src=null,h[tr]=null)):$(a)}}}function Fp(a){return a in du?du[a]:du[a]="on"+a}function Z0(a,h){if(a.da)a=!0;else{h=new me(h,this);const p=a.listener,_=a.ha||a.src;a.fa&&fu(a),a=p.call(_,h)}return a}function pu(a){return a=a[tr],a instanceof Ht?a:null}var mu="__closure_events_fn_"+(Math.random()*1e9>>>0);function Up(a){return typeof a=="function"?a:(a[mu]||(a[mu]=function(h){return a.handleEvent(h)}),a[mu])}function ot(){C.call(this),this.i=new Ht(this),this.M=this,this.G=null}m(ot,C),ot.prototype[_t]=!0,ot.prototype.removeEventListener=function(a,h,p,_){jp(this,a,h,p,_)};function yt(a,h){var p,_=a.G;if(_)for(p=[];_;_=_.G)p.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new P(h,a);else if(h instanceof P)h.target=h.target||a;else{var D=h;h=new P(_,a),Yr(h,D)}D=!0;let V,B;if(p)for(B=p.length-1;B>=0;B--)V=h.g=p[B],D=Ra(V,_,!0,h)&&D;if(V=h.g=a,D=Ra(V,_,!0,h)&&D,D=Ra(V,_,!1,h)&&D,p)for(B=0;B<p.length;B++)V=h.g=p[B],D=Ra(V,_,!1,h)&&D}ot.prototype.N=function(){if(ot.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let _=0;_<p.length;_++)$(p[_]);delete a.g[h],a.h--}}this.G=null},ot.prototype.J=function(a,h,p,_){return this.i.add(String(a),h,!1,p,_)},ot.prototype.K=function(a,h,p,_){return this.i.add(String(a),h,!0,p,_)};function Ra(a,h,p,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let D=!0;for(let V=0;V<h.length;++V){const B=h[V];if(B&&!B.da&&B.capture==p){const ee=B.listener,He=B.ha||B.src;B.fa&&Xr(a.i,B),D=ee.call(He,_)!==!1&&D}}return D&&!_.defaultPrevented}function eI(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function $p(a){a.g=eI(()=>{a.g=null,a.i&&(a.i=!1,$p(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class tI extends C{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:$p(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $s(a){C.call(this),this.h=a,this.g={}}m($s,C);var Bp=[];function zp(a){G(a.g,function(h,p){this.g.hasOwnProperty(p)&&fu(h)},a),a.g={}}$s.prototype.N=function(){$s.Z.N.call(this),zp(this)},$s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gu=o.JSON.stringify,nI=o.JSON.parse,rI=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Hp(){}function Wp(){}var Bs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function _u(){P.call(this,"d")}m(_u,P);function yu(){P.call(this,"c")}m(yu,P);var Jr={},qp=null;function xa(){return qp=qp||new ot}Jr.Ia="serverreachability";function Gp(a){P.call(this,Jr.Ia,a)}m(Gp,P);function zs(a){const h=xa();yt(h,new Gp(h))}Jr.STAT_EVENT="statevent";function Kp(a,h){P.call(this,Jr.STAT_EVENT,a),this.stat=h}m(Kp,P);function vt(a){const h=xa();yt(h,new Kp(h,a))}Jr.Ja="timingevent";function Qp(a,h){P.call(this,Jr.Ja,a),this.size=h}m(Qp,P);function Hs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ws(){this.g=!0}Ws.prototype.ua=function(){this.g=!1};function iI(a,h,p,_,D,V){a.info(function(){if(a.g)if(V){var B="",ee=V.split("&");for(let pe=0;pe<ee.length;pe++){var He=ee[pe].split("=");if(He.length>1){const Qe=He[0];He=He[1];const yn=Qe.split("_");B=yn.length>=2&&yn[1]=="type"?B+(Qe+"="+He+"&"):B+(Qe+"=redacted&")}}}else B=null;else B=V;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+h+`
`+p+`
`+B})}function sI(a,h,p,_,D,V,B){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+h+`
`+p+`
`+V+" "+B})}function Oi(a,h,p,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+aI(a,p)+(_?" "+_:"")})}function oI(a,h){a.info(function(){return"TIMEOUT: "+h})}Ws.prototype.info=function(){};function aI(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var p=V[a];if(!(p.length<2)){var _=p[1];if(Array.isArray(_)&&!(_.length<1)){var D=_[0];if(D!="noop"&&D!="stop"&&D!="close")for(let B=1;B<_.length;B++)_[B]=""}}}}return gu(V)}catch{return h}}var Na={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Yp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Xp;function vu(){}m(vu,Hp),vu.prototype.g=function(){return new XMLHttpRequest},Xp=new vu;function qs(a){return encodeURIComponent(String(a))}function lI(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function nr(a,h,p,_){this.j=a,this.i=h,this.l=p,this.S=_||1,this.V=new $s(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Jp}function Jp(){this.i=null,this.g="",this.h=!1}var Zp={},wu={};function Eu(a,h,p){a.M=1,a.A=ba(_n(h)),a.u=p,a.R=!0,em(a,null)}function em(a,h){a.F=Date.now(),Da(a),a.B=_n(a.A);var p=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),fm(p.i,"t",_),a.C=0,p=a.j.L,a.h=new Jp,a.g=Nm(a.j,p?h:null,!a.u),a.P>0&&(a.O=new tI(u(a.Y,a,a.g),a.P)),h=a.V,p=a.g,_=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(Bp[0]=D.toString()),D=Bp);for(let V=0;V<D.length;V++){const B=Mp(p,D[V],_||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?fe(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),zs(),iI(a.i,a.v,a.B,a.l,a.S,a.u)}nr.prototype.ba=function(a){a=a.target;const h=this.O;h&&sr(a)==3?h.j():this.Y(a)},nr.prototype.Y=function(a){try{if(a==this.g)e:{const ee=sr(this.g),He=this.g.ya(),pe=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||wm(this.g)))){this.K||ee!=4||He==7||(He==8||pe<=0?zs(3):zs(2)),Iu(this);var h=this.g.ca();this.X=h;var p=cI(this);if(this.o=h==200,sI(this.i,this.v,this.B,this.l,this.S,ee,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,D=this.g;if((_=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(_)){var V=_;break t}}V=null}if(a=V)Oi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Tu(this,a);else{this.o=!1,this.m=3,vt(12),Zr(this),Gs(this);break e}}if(this.R){a=!0;let Qe;for(;!this.K&&this.C<p.length;)if(Qe=uI(this,p),Qe==wu){ee==4&&(this.m=4,vt(14),a=!1),Oi(this.i,this.l,null,"[Incomplete Response]");break}else if(Qe==Zp){this.m=4,vt(15),Oi(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Oi(this.i,this.l,Qe,null),Tu(this,Qe);if(tm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||p.length!=0||this.h.h||(this.m=1,vt(16),a=!1),this.o=this.o&&a,!a)Oi(this.i,this.l,p,"[Invalid Chunked Response]"),Zr(this),Gs(this);else if(p.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Nu(B),B.P=!0,vt(11))}}else Oi(this.i,this.l,p,null),Tu(this,p);ee==4&&Zr(this),this.o&&!this.K&&(ee==4?Pm(this.j,this):(this.o=!1,Da(this)))}else SI(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,vt(12)):(this.m=0,vt(13)),Zr(this),Gs(this)}}}catch{}finally{}};function cI(a){if(!tm(a))return a.g.la();const h=wm(a.g);if(h==="")return"";let p="";const _=h.length,D=sr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Zr(a),Gs(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<_;V++)a.h.h=!0,p+=a.h.i.decode(h[V],{stream:!(D&&V==_-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function tm(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function uI(a,h){var p=a.C,_=h.indexOf(`
`,p);return _==-1?wu:(p=Number(h.substring(p,_)),isNaN(p)?Zp:(_+=1,_+p>h.length?wu:(h=h.slice(_,_+p),a.C=_+p,h)))}nr.prototype.cancel=function(){this.K=!0,Zr(this)};function Da(a){a.T=Date.now()+a.H,nm(a,a.H)}function nm(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Hs(u(a.aa,a),h)}function Iu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}nr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(oI(this.i,this.B),this.M!=2&&(zs(),vt(17)),Zr(this),this.m=2,Gs(this)):nm(this,this.T-a)};function Gs(a){a.j.I==0||a.K||Pm(a.j,a)}function Zr(a){Iu(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,zp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Tu(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||Su(p.h,a))){if(!a.L&&Su(p.h,a)&&p.I==3){try{var _=p.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)ja(p),La(p);else break e;xu(p),vt(18)}}else p.xa=D[1],0<p.xa-p.K&&D[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Hs(u(p.Va,p),6e3));sm(p.h)<=1&&p.ta&&(p.ta=void 0)}else ti(p,11)}else if((a.L||p.g==a)&&ja(p),!A(h))for(D=p.Ba.g.parse(h),h=0;h<D.length;h++){let pe=D[h];const Qe=pe[0];if(!(Qe<=p.K))if(p.K=Qe,pe=pe[1],p.I==2)if(pe[0]=="c"){p.M=pe[1],p.ba=pe[2];const yn=pe[3];yn!=null&&(p.ka=yn,p.j.info("VER="+p.ka));const ni=pe[4];ni!=null&&(p.za=ni,p.j.info("SVER="+p.za));const or=pe[5];or!=null&&typeof or=="number"&&or>0&&(_=1.5*or,p.O=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const ar=a.g;if(ar){const Ua=ar.g?ar.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ua){var V=_.h;V.g||Ua.indexOf("spdy")==-1&&Ua.indexOf("quic")==-1&&Ua.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Au(V,V.h),V.h=null))}if(_.G){const Du=ar.g?ar.g.getResponseHeader("X-HTTP-Session-Id"):null;Du&&(_.wa=Du,ye(_.J,_.G,Du))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),_=p;var B=a;if(_.na=xm(_,_.L?_.ba:null,_.W),B.L){om(_.h,B);var ee=B,He=_.O;He&&(ee.H=He),ee.D&&(Iu(ee),Da(ee)),_.g=B}else Am(_);p.i.length>0&&Ma(p)}else pe[0]!="stop"&&pe[0]!="close"||ti(p,7);else p.I==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?ti(p,7):Ru(p):pe[0]!="noop"&&p.l&&p.l.qa(pe),p.A=0)}}zs(4)}catch{}}var hI=class{constructor(a,h){this.g=a,this.map=h}};function rm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function im(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function sm(a){return a.h?1:a.g?a.g.size:0}function Su(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Au(a,h){a.g?a.g.add(h):a.h=h}function om(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}rm.prototype.cancel=function(){if(this.i=am(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function am(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return T(a.i)}var lm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dI(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const _=a[p].indexOf("=");let D,V=null;_>=0?(D=a[p].substring(0,_),V=a[p].substring(_+1)):D=a[p],h(D,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function rr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof rr?(this.l=a.l,Ks(this,a.j),this.o=a.o,this.g=a.g,Qs(this,a.u),this.h=a.h,Cu(this,pm(a.i)),this.m=a.m):a&&(h=String(a).match(lm))?(this.l=!1,Ks(this,h[1]||"",!0),this.o=Ys(h[2]||""),this.g=Ys(h[3]||"",!0),Qs(this,h[4]),this.h=Ys(h[5]||"",!0),Cu(this,h[6]||"",!0),this.m=Ys(h[7]||"")):(this.l=!1,this.i=new Js(null,this.l))}rr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Xs(h,cm,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Xs(h,cm,!0),"@"),a.push(qs(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Xs(p,p.charAt(0)=="/"?mI:pI,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Xs(p,_I)),a.join("")},rr.prototype.resolve=function(a){const h=_n(this);let p=!!a.j;p?Ks(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var _=a.h;if(p)Qs(h,a.u);else if(p=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var D=h.h.lastIndexOf("/");D!=-1&&(_=h.h.slice(0,D+1)+_)}if(D=_,D==".."||D==".")_="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){_=D.lastIndexOf("/",0)==0,D=D.split("/");const V=[];for(let B=0;B<D.length;){const ee=D[B++];ee=="."?_&&B==D.length&&V.push(""):ee==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),_&&B==D.length&&V.push("")):(V.push(ee),_=!0)}_=V.join("/")}else _=D}return p?h.h=_:p=a.i.toString()!=="",p?Cu(h,pm(a.i)):p=!!a.m,p&&(h.m=a.m),h};function _n(a){return new rr(a)}function Ks(a,h,p){a.j=p?Ys(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Qs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Cu(a,h,p){h instanceof Js?(a.i=h,yI(a.i,a.l)):(p||(h=Xs(h,gI)),a.i=new Js(h,a.l))}function ye(a,h,p){a.i.set(h,p)}function ba(a){return ye(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ys(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Xs(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,fI),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function fI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var cm=/[#\/\?@]/g,pI=/[#\?:]/g,mI=/[#\?]/g,gI=/[#\?@]/g,_I=/#/g;function Js(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function ei(a){a.g||(a.g=new Map,a.h=0,a.i&&dI(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Js.prototype,t.add=function(a,h){ei(this),this.i=null,a=Vi(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function um(a,h){ei(a),h=Vi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function hm(a,h){return ei(a),h=Vi(a,h),a.g.has(h)}t.forEach=function(a,h){ei(this),this.g.forEach(function(p,_){p.forEach(function(D){a.call(h,D,_,this)},this)},this)};function dm(a,h){ei(a);let p=[];if(typeof h=="string")hm(a,h)&&(p=p.concat(a.g.get(Vi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return ei(this),this.i=null,a=Vi(this,a),hm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=dm(this,a),a.length>0?String(a[0]):h):h};function fm(a,h,p){um(a,h),p.length>0&&(a.i=null,a.g.set(Vi(a,h),T(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var p=h[_];const D=qs(p);p=dm(this,p);for(let V=0;V<p.length;V++){let B=D;p[V]!==""&&(B+="="+qs(p[V])),a.push(B)}}return this.i=a.join("&")};function pm(a){const h=new Js;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Vi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function yI(a,h){h&&!a.j&&(ei(a),a.i=null,a.g.forEach(function(p,_){const D=_.toLowerCase();_!=D&&(um(this,_),fm(this,D,p))},a)),a.j=h}function vI(a,h){const p=new Ws;if(o.Image){const _=new Image;_.onload=f(ir,p,"TestLoadImage: loaded",!0,h,_),_.onerror=f(ir,p,"TestLoadImage: error",!1,h,_),_.onabort=f(ir,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=f(ir,p,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function wI(a,h){const p=new Ws,_=new AbortController,D=setTimeout(()=>{_.abort(),ir(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(V=>{clearTimeout(D),V.ok?ir(p,"TestPingServer: ok",!0,h):ir(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),ir(p,"TestPingServer: error",!1,h)})}function ir(a,h,p,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(p)}catch{}}function EI(){this.g=new rI}function Pu(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Pu,Hp),Pu.prototype.g=function(){return new Oa(this.i,this.h)};function Oa(a,h){ot.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Oa,ot),t=Oa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,eo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,eo(this)),this.g&&(this.readyState=3,eo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;mm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function mm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Zs(this):eo(this),this.readyState==3&&mm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Zs(this))},t.Na=function(a){this.g&&(this.response=a,Zs(this))},t.ga=function(){this.g&&Zs(this)};function Zs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,eo(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function eo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gm(a){let h="";return G(a,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function ku(a,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=gm(p),typeof a=="string"?p!=null&&qs(p):ye(a,h,p))}function Ne(a){ot.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Ne,ot);var II=/^https?$/i,TI=["POST","PUT"];t=Ne.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Xp.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){_m(this,V);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)p.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())p.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(TI,h,void 0)>=0)||_||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,B]of p)this.g.setRequestHeader(V,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){_m(this,V)}};function _m(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,ym(a),Va(a)}function ym(a){a.A||(a.A=!0,yt(a,"complete"),yt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,yt(this,"complete"),yt(this,"abort"),Va(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Va(this,!0)),Ne.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?vm(this):this.Xa())},t.Xa=function(){vm(this)};function vm(a){if(a.h&&typeof s<"u"){if(a.v&&sr(a)==4)setTimeout(a.Ca.bind(a),0);else if(yt(a,"readystatechange"),sr(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=V===0){let B=String(a.D).match(lm)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),_=!II.test(B?B.toLowerCase():"")}p=_}if(p)yt(a,"complete"),yt(a,"success");else{a.o=6;try{var D=sr(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",ym(a)}}finally{Va(a)}}}}function Va(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||yt(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function sr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return sr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),nI(h)}};function wm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function SI(a){const h={};a=(a.g&&sr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(A(a[_]))continue;var p=lI(a[_]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=h[D]||[];h[D]=V,V.push(p)}Z(h,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function to(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Em(a){this.za=0,this.i=[],this.j=new Ws,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=to("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=to("baseRetryDelayMs",5e3,a),this.Za=to("retryDelaySeedMs",1e4,a),this.Ta=to("forwardChannelMaxRetries",2,a),this.va=to("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new rm(a&&a.concurrentRequestLimit),this.Ba=new EI,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Em.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,_){vt(0),this.W=a,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.J=xm(this,null,this.W),Ma(this)};function Ru(a){if(Im(a),a.I==3){var h=a.V++,p=_n(a.J);if(ye(p,"SID",a.M),ye(p,"RID",h),ye(p,"TYPE","terminate"),no(a,p),h=new nr(a,a.j,h),h.M=2,h.A=ba(_n(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Nm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Da(h)}Rm(a)}function La(a){a.g&&(Nu(a),a.g.cancel(),a.g=null)}function Im(a){La(a),a.v&&(o.clearTimeout(a.v),a.v=null),ja(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ma(a){if(!im(a.h)&&!a.m){a.m=!0;var h=a.Ea;O||v(),M||(O(),M=!0),I.add(h,a),a.D=0}}function AI(a,h){return sm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Hs(u(a.Ea,a,h),km(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new nr(this,this.j,a);let V=this.o;if(this.U&&(V?(V=fe(V),Yr(V,this.U)):V=this.U),this.u!==null||this.R||(D.J=V,V=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Sm(this,D,h),p=_n(this.J),ye(p,"RID",a),ye(p,"CVER",22),this.G&&ye(p,"X-HTTP-Session-Id",this.G),no(this,p),V&&(this.R?h="headers="+qs(gm(V))+"&"+h:this.u&&ku(p,this.u,V)),Au(this.h,D),this.Ra&&ye(p,"TYPE","init"),this.S?(ye(p,"$req",h),ye(p,"SID","null"),D.U=!0,Eu(D,p,null)):Eu(D,p,h),this.I=2}}else this.I==3&&(a?Tm(this,a):this.i.length==0||im(this.h)||Tm(this))};function Tm(a,h){var p;h?p=h.l:p=a.V++;const _=_n(a.J);ye(_,"SID",a.M),ye(_,"RID",p),ye(_,"AID",a.K),no(a,_),a.u&&a.o&&ku(_,a.u,a.o),p=new nr(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Sm(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Au(a.h,p),Eu(p,_,h)}function no(a,h){a.H&&G(a.H,function(p,_){ye(h,_,p)}),a.l&&G({},function(p,_){ye(h,_,p)})}function Sm(a,h,p){p=Math.min(a.i.length,p);const _=a.l?u(a.l.Ka,a.l,a):null;e:{var D=a.i;let ee=-1;for(;;){const He=["count="+p];ee==-1?p>0?(ee=D[0].g,He.push("ofs="+ee)):ee=0:He.push("ofs="+ee);let pe=!0;for(let Qe=0;Qe<p;Qe++){var V=D[Qe].g;const yn=D[Qe].map;if(V-=ee,V<0)ee=Math.max(0,D[Qe].g-100),pe=!1;else try{V="req"+V+"_"||"";try{var B=yn instanceof Map?yn:Object.entries(yn);for(const[ni,or]of B){let ar=or;l(or)&&(ar=gu(or)),He.push(V+ni+"="+encodeURIComponent(ar))}}catch(ni){throw He.push(V+"type="+encodeURIComponent("_badmap")),ni}}catch{_&&_(yn)}}if(pe){B=He.join("&");break e}}B=void 0}return a=a.i.splice(0,p),h.G=a,B}function Am(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;O||v(),M||(O(),M=!0),I.add(h,a),a.A=0}}function xu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Hs(u(a.Da,a),km(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Cm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Hs(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,vt(10),La(this),Cm(this))};function Nu(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Cm(a){a.g=new nr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=_n(a.na);ye(h,"RID","rpc"),ye(h,"SID",a.M),ye(h,"AID",a.K),ye(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ye(h,"TO",a.ia),ye(h,"TYPE","xmlhttp"),no(a,h),a.u&&a.o&&ku(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=ba(_n(h)),p.u=null,p.R=!0,em(p,a)}t.Va=function(){this.C!=null&&(this.C=null,La(this),xu(this),vt(19))};function ja(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Pm(a,h){var p=null;if(a.g==h){ja(a),Nu(a),a.g=null;var _=2}else if(Su(a.h,h))p=h.G,om(a.h,h),_=1;else return;if(a.I!=0){if(h.o)if(_==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var D=a.D;_=xa(),yt(_,new Qp(_,p)),Ma(a)}else Am(a);else if(D=h.m,D==3||D==0&&h.X>0||!(_==1&&AI(a,h)||_==2&&xu(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),D){case 1:ti(a,5);break;case 4:ti(a,10);break;case 3:ti(a,6);break;default:ti(a,2)}}}function km(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function ti(a,h){if(a.j.info("Error code "+h),h==2){var p=u(a.bb,a),_=a.Ua;const D=!_;_=new rr(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ks(_,"https"),ba(_),D?vI(_.toString(),p):wI(_.toString(),p)}else vt(2);a.I=0,a.l&&a.l.pa(h),Rm(a),Im(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Rm(a){if(a.I=0,a.ja=[],a.l){const h=am(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ja,h),k(a.ja,a.i),a.h.i.length=0,T(a.i),a.i.length=0),a.l.oa()}}function xm(a,h,p){var _=p instanceof rr?_n(p):new rr(p);if(_.g!="")h&&(_.g=h+"."+_.g),Qs(_,_.u);else{var D=o.location;_=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;const V=new rr(null);_&&Ks(V,_),h&&(V.g=h),D&&Qs(V,D),p&&(V.h=p),_=V}return p=a.G,h=a.wa,p&&h&&ye(_,p,h),ye(_,"VER",a.ka),no(a,_),_}function Nm(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ne(new Pu({ab:p})):new Ne(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Dm(){}t=Dm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Fa(){}Fa.prototype.g=function(a,h){return new bt(a,h)};function bt(a,h){ot.call(this),this.g=new Em(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!A(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!A(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Li(this)}m(bt,ot),bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){Ru(this.g)},bt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=gu(a),a=p);h.i.push(new hI(h.Ya++,a)),h.I==3&&Ma(h)},bt.prototype.N=function(){this.g.l=null,delete this.j,Ru(this.g),delete this.g,bt.Z.N.call(this)};function bm(a){_u.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(bm,_u);function Om(){yu.call(this),this.status=1}m(Om,yu);function Li(a){this.g=a}m(Li,Dm),Li.prototype.ra=function(){yt(this.g,"a")},Li.prototype.qa=function(a){yt(this.g,new bm(a))},Li.prototype.pa=function(a){yt(this.g,new Om)},Li.prototype.oa=function(){yt(this.g,"b")},Fa.prototype.createWebChannel=Fa.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,QE=function(){return new Fa},KE=function(){return xa()},GE=Jr,Id={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Na.NO_ERROR=0,Na.TIMEOUT=8,Na.HTTP_ERROR=6,Cl=Na,Yp.COMPLETE="complete",qE=Yp,Wp.EventType=Bs,Bs.OPEN="a",Bs.CLOSE="b",Bs.ERROR="c",Bs.MESSAGE="d",ot.prototype.listen=ot.prototype.J,vo=Wp,Ne.prototype.listenOnce=Ne.prototype.K,Ne.prototype.getLastError=Ne.prototype.Ha,Ne.prototype.getLastErrorCode=Ne.prototype.ya,Ne.prototype.getStatus=Ne.prototype.ca,Ne.prototype.getResponseJson=Ne.prototype.La,Ne.prototype.getResponseText=Ne.prototype.la,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Fa,WE=Ne}).apply(typeof sl<"u"?sl:typeof self<"u"?self:typeof window<"u"?window:{});const T_="@firebase/firestore",S_="4.9.3";/**
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
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let Ls="12.7.0";/**
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
 */const wi=new Bc("@firebase/firestore");function ji(){return wi.logLevel}function H(t,...e){if(wi.logLevel<=re.DEBUG){const n=e.map(Gf);wi.debug(`Firestore (${Ls}): ${t}`,...n)}}function Xn(t,...e){if(wi.logLevel<=re.ERROR){const n=e.map(Gf);wi.error(`Firestore (${Ls}): ${t}`,...n)}}function Is(t,...e){if(wi.logLevel<=re.WARN){const n=e.map(Gf);wi.warn(`Firestore (${Ls}): ${t}`,...n)}}function Gf(t){if(typeof t=="string")return t;try{/**
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
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,YE(t,r,n)}function YE(t,e,n){let r=`FIRESTORE (${Ls}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Xn(r),new Error(r)}function ce(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||YE(e,i,r)}function X(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class XE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class eR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tR{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Bn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string",31837,{l:r}),new XE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class nR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new nR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class A_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,an(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ce(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new A_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new A_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function sR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Kf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=sR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function Td(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return dh(i)===dh(s)?ie(i,s):dh(i)?1:-1}return ie(t.length,e.length)}const oR=55296,aR=57343;function dh(t){const e=t.charCodeAt(0);return e>=oR&&e<=aR}function Ts(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const C_="__name__";class In{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return In.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof In?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=In.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ie(e.length,n.length)}static compareSegments(e,n){const r=In.isNumericId(e),i=In.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?In.extractNumericId(e).compare(In.extractNumericId(n)):Td(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dr.fromString(e.substring(4,e.length-2))}}class ge extends In{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const lR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends In{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return lR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===C_}static keyField(){return new nt([C_])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new z(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new z(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ge.fromString(e))}static fromName(e){return new q(ge.fromString(e).popFirst(5))}static empty(){return new q(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ge(e.slice()))}}/**
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
 */function JE(t,e,n){if(!n)throw new z(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cR(t,e,n,r){if(e===!0&&r===!0)throw new z(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function P_(t){if(!q.isDocumentKey(t))throw new z(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function k_(t){if(q.isDocumentKey(t))throw new z(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ZE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function pn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gc(t);throw new z(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ze(t,e){const n={typeString:t};return e&&(n.value=e),n}function wa(t,e){if(!ZE(t))throw new z(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new z(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const R_=-62135596800,x_=1e6;class he{static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*x_);return new he(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<R_)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/x_}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:he._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wa(e,he._jsonSchema))return new he(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-R_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}he._jsonSchemaVersion="firestore/timestamp/1.0",he._jsonSchema={type:ze("string",he._jsonSchemaVersion),seconds:ze("number"),nanoseconds:ze("number")};/**
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
 */const ia=-1;function uR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new he(n+1,0):new he(n,r));return new Mr(i,q.empty(),e)}function hR(t){return new Mr(t.readTime,t.key,ia)}class Mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mr(Y.min(),q.empty(),ia)}static max(){return new Mr(Y.max(),q.empty(),ia)}}function dR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const fR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ms(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==fR)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function mR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function js(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Kc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Kc.ce=-1;/**
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
 */const Qf=-1;function Qc(t){return t==null}function uc(t){return t===0&&1/t==-1/0}function gR(t){return typeof t=="number"&&Number.isInteger(t)&&!uc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const e1="";function _R(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=N_(e)),e=yR(t.get(n),e);return N_(e)}function yR(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case e1:n+="";break;default:n+=s}}return n}function N_(t){return t+e1+""}/**
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
 */function D_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function t1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xe{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ol(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ol(this.root,e,this.comparator,!1)}getReverseIterator(){return new ol(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ol(this.root,e,this.comparator,!0)}}class ol{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??tt.RED,this.left=i??tt.EMPTY,this.right=s??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ke{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new b_(this.data.getIterator())}getIteratorFrom(e){return new b_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class b_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class jt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new jt([])}unionWith(e){let n=new Ke(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class n1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new n1("Invalid base64 string: "+s):s}}(e);return new st(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const vR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(t){if(ce(!!t,39018),typeof t=="string"){let e=0;const n=vR.exec(t);if(ce(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
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
 */const r1="server_timestamp",i1="__type__",s1="__previous_value__",o1="__local_write_time__";function Yf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[i1])==null?void 0:r.stringValue)===r1}function Yc(t){const e=t.mapValue.fields[s1];return Yf(e)?Yc(e):e}function sa(t){const e=jr(t.mapValue.fields[o1].timestampValue);return new he(e.seconds,e.nanos)}/**
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
 */class wR{constructor(e,n,r,i,s,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const hc="(default)";class oa{constructor(e,n){this.projectId=e,this.database=n||hc}static empty(){return new oa("","")}get isDefaultDatabase(){return this.database===hc}isEqual(e){return e instanceof oa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const a1="__type__",l1="__max__",al={mapValue:{fields:{__type__:{stringValue:l1}}}},c1="__vector__",dc="value";function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yf(t)?4:IR(t)?9007199254740991:ER(t)?10:11:Q(28295,{value:t})}function bn(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sa(t).isEqual(sa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=jr(i.timestampValue),l=jr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fr(i.bytesValue).isEqual(Fr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ve(i.doubleValue),l=Ve(s.doubleValue);return o===l?uc(o)===uc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ts(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(D_(o)!==D_(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!bn(o[c],l[c])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function aa(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function Ss(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ve(s.integerValue||s.doubleValue),c=Ve(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return O_(t.timestampValue,e.timestampValue);case 4:return O_(sa(t),sa(e));case 5:return Td(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Fr(s),c=Fr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=ie(l[u],c[u]);if(f!==0)return f}return ie(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ie(Ve(s.latitude),Ve(o.latitude));return l!==0?l:ie(Ve(s.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return V_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,T,k,x;const l=s.fields||{},c=o.fields||{},u=(g=l[dc])==null?void 0:g.arrayValue,f=(T=c[dc])==null?void 0:T.arrayValue,m=ie(((k=u==null?void 0:u.values)==null?void 0:k.length)||0,((x=f==null?void 0:f.values)==null?void 0:x.length)||0);return m!==0?m:V_(u,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===al.mapValue&&o===al.mapValue)return 0;if(s===al.mapValue)return 1;if(o===al.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const g=Td(c[m],f[m]);if(g!==0)return g;const T=Ss(l[c[m]],u[f[m]]);if(T!==0)return T}return ie(c.length,f.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function O_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=jr(t),r=jr(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function V_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ss(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function As(t){return Sd(t)}function Sd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Sd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Sd(n.fields[o])}`;return i+"}"}(t.mapValue):Q(61005,{value:t})}function Pl(t){switch(Ur(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yc(t);return e?16+Pl(e):16;case 5:return 2*t.stringValue.length;case 6:return Fr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Pl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Gr(r.fields,(s,o)=>{i+=s.length+Pl(o)}),i}(t.mapValue);default:throw Q(13486,{value:t})}}function L_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ad(t){return!!t&&"integerValue"in t}function Xf(t){return!!t&&"arrayValue"in t}function M_(t){return!!t&&"nullValue"in t}function j_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function kl(t){return!!t&&"mapValue"in t}function ER(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[a1])==null?void 0:r.stringValue)===c1}function Oo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Gr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Oo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Oo(t.arrayValue.values[n]);return e}return{...t}}function IR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===l1}/**
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
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!kl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oo(n)}setAll(e){let n=nt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Oo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());kl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];kl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Gr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new kt(Oo(this.value))}}function u1(t){const e=[];return Gr(t.fields,(n,r)=>{const i=new nt([n]);if(kl(r)){const s=u1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new jt(e)}/**
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
 */class pt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,Y.min(),Y.min(),Y.min(),kt.empty(),0)}static newFoundDocument(e,n,r,i){return new pt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new pt(e,2,n,Y.min(),Y.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,Y.min(),Y.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fc{constructor(e,n){this.position=e,this.inclusive=n}}function F_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Ss(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function U_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class la{constructor(e,n="asc"){this.field=e,this.dir=n}}function TR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class h1{}class Be extends h1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new AR(e,n,r):n==="array-contains"?new kR(e,r):n==="in"?new RR(e,r):n==="not-in"?new xR(e,r):n==="array-contains-any"?new NR(e,r):new Be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CR(e,r):new PR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ss(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(Ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mn extends h1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new mn(e,n)}matches(e){return d1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function d1(t){return t.op==="and"}function f1(t){return SR(t)&&d1(t)}function SR(t){for(const e of t.filters)if(e instanceof mn)return!1;return!0}function Cd(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+As(t.value);if(f1(t))return t.filters.map(e=>Cd(e)).join(",");{const e=t.filters.map(n=>Cd(n)).join(",");return`${t.op}(${e})`}}function p1(t,e){return t instanceof Be?function(r,i){return i instanceof Be&&r.op===i.op&&r.field.isEqual(i.field)&&bn(r.value,i.value)}(t,e):t instanceof mn?function(r,i){return i instanceof mn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&p1(o,i.filters[l]),!0):!1}(t,e):void Q(19439)}function m1(t){return t instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${As(n.value)}`}(t):t instanceof mn?function(n){return n.op.toString()+" {"+n.getFilters().map(m1).join(" ,")+"}"}(t):"Filter"}class AR extends Be{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class CR extends Be{constructor(e,n){super(e,"in",n),this.keys=g1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class PR extends Be{constructor(e,n){super(e,"not-in",n),this.keys=g1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function g1(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class kR extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xf(n)&&aa(n.arrayValue,this.value)}}class RR extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&aa(this.value.arrayValue,n)}}class xR extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!aa(this.value.arrayValue,n)}}class NR extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>aa(this.value.arrayValue,r))}}/**
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
 */class DR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function $_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new DR(t,e,n,r,i,s,o)}function Jf(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Cd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Qc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>As(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>As(r)).join(",")),e.Te=n}return e.Te}function Zf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!TR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!p1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!U_(t.startAt,e.startAt)&&U_(t.endAt,e.endAt)}function Pd(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Fs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function bR(t,e,n,r,i,s,o,l){return new Fs(t,e,n,r,i,s,o,l)}function ep(t){return new Fs(t)}function B_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _1(t){return t.collectionGroup!==null}function Vo(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ke(nt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new la(s,r))}),n.has(nt.keyField().canonicalString())||e.Ie.push(new la(nt.keyField(),r))}return e.Ie}function kn(t){const e=X(t);return e.Ee||(e.Ee=OR(e,Vo(t))),e.Ee}function OR(t,e){if(t.limitType==="F")return $_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new la(i.field,s)});const n=t.endAt?new fc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fc(t.startAt.position,t.startAt.inclusive):null;return $_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kd(t,e){const n=t.filters.concat([e]);return new Fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Rd(t,e,n){return new Fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xc(t,e){return Zf(kn(t),kn(e))&&t.limitType===e.limitType}function y1(t){return`${Jf(kn(t))}|lt:${t.limitType}`}function Fi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>m1(i)).join(", ")}]`),Qc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>As(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>As(i)).join(",")),`Target(${r})`}(kn(t))}; limitType=${t.limitType})`}function Jc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Vo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,c){const u=F_(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Vo(r),i)||r.endAt&&!function(o,l,c){const u=F_(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Vo(r),i))}(t,e)}function VR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function v1(t){return(e,n)=>{let r=!1;for(const i of Vo(t)){const s=LR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function LR(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const c=o.data.field(s),u=l.data.field(s);return c!==null&&u!==null?Ss(c,u):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
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
 */class Ri{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Gr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return t1(this.inner)}size(){return this.innerSize}}/**
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
 */const MR=new xe(q.comparator);function Jn(){return MR}const w1=new xe(q.comparator);function wo(...t){let e=w1;for(const n of t)e=e.insert(n.key,n);return e}function E1(t){let e=w1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ci(){return Lo()}function I1(){return Lo()}function Lo(){return new Ri(t=>t.toString(),(t,e)=>t.isEqual(e))}const jR=new xe(q.comparator),FR=new Ke(q.comparator);function se(...t){let e=FR;for(const n of t)e=e.add(n);return e}const UR=new Ke(ie);function $R(){return UR}/**
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
 */function tp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uc(e)?"-0":e}}function T1(t){return{integerValue:""+t}}function BR(t,e){return gR(e)?T1(e):tp(t,e)}/**
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
 */class Zc{constructor(){this._=void 0}}function zR(t,e,n){return t instanceof pc?function(i,s){const o={fields:{[i1]:{stringValue:r1},[o1]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Yf(s)&&(s=Yc(s)),s&&(o.fields[s1]=s),{mapValue:o}}(n,e):t instanceof ca?A1(t,e):t instanceof ua?C1(t,e):function(i,s){const o=S1(i,s),l=z_(o)+z_(i.Ae);return Ad(o)&&Ad(i.Ae)?T1(l):tp(i.serializer,l)}(t,e)}function HR(t,e,n){return t instanceof ca?A1(t,e):t instanceof ua?C1(t,e):n}function S1(t,e){return t instanceof mc?function(r){return Ad(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class pc extends Zc{}class ca extends Zc{constructor(e){super(),this.elements=e}}function A1(t,e){const n=P1(e);for(const r of t.elements)n.some(i=>bn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ua extends Zc{constructor(e){super(),this.elements=e}}function C1(t,e){let n=P1(e);for(const r of t.elements)n=n.filter(i=>!bn(i,r));return{arrayValue:{values:n}}}class mc extends Zc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function z_(t){return Ve(t.integerValue||t.doubleValue)}function P1(t){return Xf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function WR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ca&&i instanceof ca||r instanceof ua&&i instanceof ua?Ts(r.elements,i.elements,bn):r instanceof mc&&i instanceof mc?bn(r.Ae,i.Ae):r instanceof pc&&i instanceof pc}(t.transform,e.transform)}class qR{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class eu{}function k1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new np(t.key,Jt.none()):new Ea(t.key,t.data,Jt.none());{const n=t.data,r=kt.empty();let i=new Ke(nt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Kr(t.key,r,new jt(i.toArray()),Jt.none())}}function GR(t,e,n){t instanceof Ea?function(i,s,o){const l=i.value.clone(),c=W_(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Kr?function(i,s,o){if(!Rl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=W_(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(R1(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Mo(t,e,n,r){return t instanceof Ea?function(s,o,l,c){if(!Rl(s.precondition,o))return l;const u=s.value.clone(),f=q_(s.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Kr?function(s,o,l,c){if(!Rl(s.precondition,o))return l;const u=q_(s.fieldTransforms,c,o),f=o.data;return f.setAll(R1(s)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Rl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function KR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=S1(r.transform,i||null);s!=null&&(n===null&&(n=kt.empty()),n.set(r.field,s))}return n||null}function H_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ts(r,i,(s,o)=>WR(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ea extends eu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kr extends eu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function R1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function W_(t,e,n){const r=new Map;ce(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,HR(o,l,n[i]))}return r}function q_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,zR(s,o,e))}return r}class np extends eu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class QR extends eu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class YR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&GR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Mo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Mo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=I1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const c=k1(o,l);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,(n,r)=>H_(n,r))&&Ts(this.baseMutations,e.baseMutations,(n,r)=>H_(n,r))}}class rp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return jR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new rp(e,n,r,i)}}/**
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
 */class XR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class JR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ue,oe;function ZR(t){switch(t){case L.OK:return Q(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function x1(t){if(t===void 0)return Xn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ue.OK:return L.OK;case Ue.CANCELLED:return L.CANCELLED;case Ue.UNKNOWN:return L.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return L.INTERNAL;case Ue.UNAVAILABLE:return L.UNAVAILABLE;case Ue.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ue.NOT_FOUND:return L.NOT_FOUND;case Ue.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ue.ABORTED:return L.ABORTED;case Ue.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ue.DATA_LOSS:return L.DATA_LOSS;default:return Q(39323,{code:t})}}(oe=Ue||(Ue={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ex(){return new TextEncoder}/**
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
 */const tx=new Dr([4294967295,4294967295],0);function G_(t){const e=ex().encode(t),n=new HE;return n.update(e),new Uint8Array(n.digest())}function K_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Dr([n,r],0),new Dr([i,s],0)]}class ip{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Eo(`Invalid padding: ${n}`);if(r<0)throw new Eo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Eo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Eo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Dr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Dr.fromNumber(r)));return i.compare(tx)===1&&(i=new Dr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=G_(e),[r,i]=K_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ip(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=G_(e),[r,i]=K_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Eo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new tu(Y.min(),i,new xe(ie),Jn(),se())}}class Ia{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ia(r,n,se(),se(),se())}}/**
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
 */class xl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class N1{constructor(e,n){this.targetId=e,this.Ce=n}}class D1{constructor(e,n,r=st.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Q_{constructor(){this.ve=0,this.Fe=Y_(),this.Me=st.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),n=se(),r=se();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q(38017,{changeType:s})}}),new Ia(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Y_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ce(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class nx{constructor(e){this.Ge=e,this.ze=new Map,this.je=Jn(),this.Je=ll(),this.He=ll(),this.Ye=new xe(ie)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Pd(s))if(r===0){const o=new q(s.path);this.et(n,o,pt.newNoDocument(o,Y.min()))}else ce(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Fr(r).toUint8Array()}catch(c){if(c instanceof n1)return Is("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new ip(o,i,s)}catch(c){return Is(c instanceof Eo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Pd(l.target)){const c=new q(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,pt.newNoDocument(c,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=se();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new tu(e,n,this.Ye,this.je,r);return this.je=Jn(),this.Je=ll(),this.He=ll(),this.Ye=new xe(ie),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Q_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ke(ie),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ke(ie),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Q_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ll(){return new xe(q.comparator)}function Y_(){return new xe(q.comparator)}const rx={asc:"ASCENDING",desc:"DESCENDING"},ix={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sx={and:"AND",or:"OR"};class ox{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xd(t,e){return t.useProto3Json||Qc(e)?e:{value:e}}function gc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function b1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ax(t,e){return gc(t,e.toTimestamp())}function Rn(t){return ce(!!t,49232),Y.fromTimestamp(function(n){const r=jr(n);return new he(r.seconds,r.nanos)}(t))}function sp(t,e){return Nd(t,e).canonicalString()}function Nd(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function O1(t){const e=ge.fromString(t);return ce(F1(e),10190,{key:e.toString()}),e}function Dd(t,e){return sp(t.databaseId,e.path)}function fh(t,e){const n=O1(e);if(n.get(1)!==t.databaseId.projectId)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(L1(n))}function V1(t,e){return sp(t.databaseId,e)}function lx(t){const e=O1(t);return e.length===4?ge.emptyPath():L1(e)}function bd(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function L1(t){return ce(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function X_(t,e,n){return{name:Dd(t,e),fields:n.value.mapValue.fields}}function cx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Q(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,f){return u.useProto3Json?(ce(f===void 0||typeof f=="string",58123),st.fromBase64String(f||"")):(ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),st.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?L.UNKNOWN:x1(u.code);return new z(f,u.message||"")}(o);n=new D1(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fh(t,r.document.name),s=Rn(r.document.updateTime),o=r.document.createTime?Rn(r.document.createTime):Y.min(),l=new kt({mapValue:{fields:r.document.fields}}),c=pt.newFoundDocument(i,s,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new xl(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fh(t,r.document),s=r.readTime?Rn(r.readTime):Y.min(),o=pt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new xl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fh(t,r.document),s=r.removedTargetIds||[];n=new xl([],s,i,null)}else{if(!("filter"in e))return Q(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new JR(i,s),l=r.targetId;n=new N1(l,o)}}return n}function ux(t,e){let n;if(e instanceof Ea)n={update:X_(t,e.key,e.value)};else if(e instanceof np)n={delete:Dd(t,e.key)};else if(e instanceof Kr)n={update:X_(t,e.key,e.data),updateMask:vx(e.fieldMask)};else{if(!(e instanceof QR))return Q(16599,{Vt:e.type});n={verify:Dd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof pc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ca)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ua)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof mc)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ax(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(t,e.precondition)),n}function hx(t,e){return t&&t.length>0?(ce(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Rn(i.updateTime):Rn(s);return o.isEqual(Y.min())&&(o=Rn(s)),new qR(o,i.transformResults||[])}(n,e))):[]}function dx(t,e){return{documents:[V1(t,e.path)]}}function fx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=V1(t,i);const s=function(u){if(u.length!==0)return j1(mn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:Ui(g.field),direction:gx(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=xd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:i}}function px(t){let e=lx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=M1(m);return g instanceof mn&&f1(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(k){return new la($i(k.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Qc(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(m){const g=!!m.before,T=m.values||[];return new fc(T,g)}(n.startAt));let u=null;return n.endAt&&(u=function(m){const g=!m.before,T=m.values||[];return new fc(T,g)}(n.endAt)),bR(e,i,o,s,l,"F",c,u)}function mx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function M1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$i(n.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=$i(n.unaryFilter.field);return Be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$i(n.unaryFilter.field);return Be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$i(n.unaryFilter.field);return Be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return Be.create($i(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return mn.create(n.compositeFilter.filters.map(r=>M1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function gx(t){return rx[t]}function _x(t){return ix[t]}function yx(t){return sx[t]}function Ui(t){return{fieldPath:t.canonicalString()}}function $i(t){return nt.fromServerFormat(t.fieldPath)}function j1(t){return t instanceof Be?function(n){if(n.op==="=="){if(j_(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NAN"}};if(M_(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(j_(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NOT_NAN"}};if(M_(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ui(n.field),op:_x(n.op),value:n.value}}}(t):t instanceof mn?function(n){const r=n.getFilters().map(i=>j1(i));return r.length===1?r[0]:{compositeFilter:{op:yx(n.op),filters:r}}}(t):Q(54877,{filter:t})}function vx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function F1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class wx{constructor(e){this.yt=e}}function Ex(t){const e=px({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rd(e,e.limit,"L"):e}/**
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
 */class Ix{constructor(){this.Cn=new Tx}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Mr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class Tx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(ge.comparator)).toArray()}}/**
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
 */const J_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},U1=41943040;class Ct{static withCacheSize(e){return new Ct(e,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(U1,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);/**
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
 */class Cs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Cs(0)}static cr(){return new Cs(-1)}}/**
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
 */const Z_="LruGarbageCollector",Sx=1048576;function ey([t,e],[n,r]){const i=ie(t,n);return i===0?ie(e,r):i}class Ax{constructor(e){this.Ir=e,this.buffer=new Ke(ey),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ey(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Cx{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){H(Z_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){js(n)?H(Z_,"Ignoring IndexedDB error during garbage collection: ",n):await Ms(n)}await this.Vr(3e5)})}}class Px{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Kc.ce);const r=new Ax(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(J_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),J_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(u=Date.now(),ji()<=re.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function kx(t,e){return new Px(t,e)}/**
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
 */class Rx{constructor(){this.changes=new Ri(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class xx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Nx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Mo(r.mutation,i,jt.empty(),he.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=ci();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=wo();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ci();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Jn();const o=Lo(),l=function(){return Lo()}();return n.forEach((c,u)=>{const f=r.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof Kr)?s=s.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Mo(f.mutation,u,f.mutation.getFieldMask(),he.now())):o.set(u.key,jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>l.set(u,new xx(f,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Lo();let i=new xe((o,l)=>o-l),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||jt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const m=(i.get(l.batchId)||se()).add(c);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,m=I1();f.forEach(g=>{if(!s.has(g)){const T=k1(n.get(g),r.get(g));T!==null&&m.set(g,T),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,m))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(ci());let l=ia,c=s;return o.next(u=>j.forEach(u,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,se())).next(f=>({batchId:l,changes:E1(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=wo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=wo();return this.indexManager.getCollectionParents(e,s).next(l=>j.forEach(l,c=>{const u=function(m,g){return new Fs(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,pt.newInvalidDocument(f)))});let l=wo();return o.forEach((c,u)=>{const f=s.get(c);f!==void 0&&Mo(f.mutation,u,jt.empty(),he.now()),Jc(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class Dx{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return j.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Rn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:Ex(i.bundledQuery),readTime:Rn(i.readTime)}}(n)),j.resolve()}}/**
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
 */class bx{constructor(){this.overlays=new xe(q.comparator),this.qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ci();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=ci(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new xe((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=s.get(u.largestBatchId);f===null&&(f=ci(),s=s.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=ci(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=i)););return j.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new XR(n,r));let s=this.qr.get(n);s===void 0&&(s=se(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class Ox{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class op{constructor(){this.Qr=new Ke(Ye.$r),this.Ur=new Ke(Ye.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Ye(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new q(new ge([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new q(new ge([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=se();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return q.comparator(e.key,n.key)||ie(e.Yr,n.Yr)}static Kr(e,n){return ie(e.Yr,n.Yr)||q.comparator(e.key,n.key)}}/**
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
 */class Vx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ke(Ye.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new YR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Ye(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?Qf:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(ie);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),j.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new q(s),0);let l=new Ke(ie);return this.Zr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.Yr)),!0)},o),j.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return j.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Ye(n,0),i=this.Zr.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Lx{constructor(e){this.ri=e,this.docs=function(){return new xe(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=Jn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pt.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Jn();const o=n.path,l=new q(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||dR(hR(f),r)<=0||(i.has(f.key)||Jc(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q(9500)}ii(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Mx(this)}getSize(e){return j.resolve(this.size)}}class Mx extends Rx{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class jx{constructor(e){this.persistence=e,this.si=new Ri(n=>Jf(n),Zf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.oi=0,this._i=new op,this.targetCount=0,this.ai=Cs.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),j.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Cs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Pr(n),j.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this._i.containsKey(n))}}/**
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
 */class $1{constructor(e,n){this.ui={},this.overlays={},this.ci=new Kc(0),this.li=!1,this.li=!0,this.hi=new Ox,this.referenceDelegate=e(this),this.Pi=new jx(this),this.indexManager=new Ix,this.remoteDocumentCache=function(i){return new Lx(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new wx(n),this.Ii=new Dx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new Vx(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new Fx(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return j.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class Fx extends pR{constructor(e){super(),this.currentSequenceNumber=e}}class ap{constructor(e){this.persistence=e,this.Ri=new op,this.Vi=null}static mi(e){return new ap(e)}get fi(){if(this.Vi)return this.Vi;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,r=>{const i=q.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class _c{constructor(e,n){this.persistence=e,this.pi=new Ri(r=>_R(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=kx(this,n)}static mi(e,n){return new _c(e,n)}Ei(){}di(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return j.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?j.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Pl(e.data.value)),n}br(e,n,r){return j.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return j.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class lp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new lp(e,n.fromCache,r,i)}}/**
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
 */class Ux{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $x{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return _A()?8:mR(gt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Ux;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(ji()<=re.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Fi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(ji()<=re.DEBUG&&H("QueryEngine","Query:",Fi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(ji()<=re.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Fi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kn(n))):j.resolve())}ys(e,n){if(B_(n))return j.resolve(null);let r=kn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Rd(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,Rd(n,null,"F")):this.vs(e,u,n,c)}))})))}ws(e,n,r,i){return B_(n)||i.isEqual(Y.min())?j.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?j.resolve(null):(ji()<=re.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Fi(n)),this.vs(e,o,n,uR(i,ia)).next(l=>l))})}Ds(e,n){let r=new Ke(v1(e));return n.forEach((i,s)=>{Jc(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return ji()<=re.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Fi(n)),this.ps.getDocumentsMatchingQuery(e,n,Mr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const cp="LocalStore",Bx=3e8;class zx{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new xe(ie),this.xs=new Ri(s=>Jf(s),Zf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Nx(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function Hx(t,e,n,r){return new zx(t,e,n,r)}async function B1(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let c=se();for(const u of i){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of s){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:l}))})})}function Wx(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const m=u.batch,g=m.keys();let T=j.resolve();return g.forEach(k=>{T=T.next(()=>f.getEntry(c,k)).next(x=>{const b=u.docVersions.get(k);ce(b!==null,48541),x.version.compareTo(b)<0&&(m.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),f.addEntry(x)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=se();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function z1(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function qx(t,e){const n=X(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.Pi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(s,f.addedDocuments,m)));let T=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?T=T.withResumeToken(st.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),i=i.insert(m,T),function(x,b,w){return x.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Bx?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,T,f)&&l.push(n.Pi.updateTargetData(s,T))});let c=Jn(),u=se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Gx(s,o,e.documentUpdates).next(f=>{c=f.ks,u=f.qs})),!r.isEqual(Y.min())){const f=n.Pi.getLastRemoteSnapshotVersion(s).next(m=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return j.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Ms=i,s))}function Gx(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Jn();return n.forEach((l,c)=>{const u=s.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):H(cp,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{ks:o,qs:i}})}function Kx(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Qf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Qx(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Od(t,e,n){const r=X(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!js(o))throw o;H(cp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function ty(t,e,n){const r=X(t);let i=Y.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const m=X(c),g=m.xs.get(f);return g!==void 0?j.resolve(m.Ms.get(g)):m.Pi.getTargetData(u,f)}(r,o,kn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:se())).next(l=>(Yx(r,VR(e),l),{documents:l,Qs:s})))}function Yx(t,e,n){let r=t.Os.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class ny{constructor(){this.activeTargetIds=$R()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xx{constructor(){this.Mo=new ny,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ny,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Jx{Oo(e){}shutdown(){}}/**
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
 */const ry="ConnectivityMonitor";class iy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){H(ry,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){H(ry,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const ph="RestConnection",Zx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class eN{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===hc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Vd(),l=this.zo(e,n.toUriEncodedString());H(ph,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,i,s);const{host:u}=new URL(l),f=Ds(u);return this.Jo(e,l,c,r,f).then(m=>(H(ph,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Is(ph,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ls}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=Zx[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class tN{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const ct="WebChannelConnection";class nN extends eN{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Vd();return new Promise((l,c)=>{const u=new WE;u.setWithCredentials(!0),u.listenOnce(qE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Cl.NO_ERROR:const m=u.getResponseJson();H(ct,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Cl.TIMEOUT:H(ct,`RPC '${e}' ${o} timed out`),c(new z(L.DEADLINE_EXCEEDED,"Request time out"));break;case Cl.HTTP_ERROR:const g=u.getStatus();if(H(ct,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let T=u.getResponseJson();Array.isArray(T)&&(T=T[0]);const k=T==null?void 0:T.error;if(k&&k.status&&k.message){const x=function(w){const y=w.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(y)>=0?y:L.UNKNOWN}(k.status);c(new z(x,k.message))}else c(new z(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new z(L.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{H(ct,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);H(ct,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",f,r,15)})}T_(e,n,r){const i=Vd(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=QE(),l=KE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=s.join("");H(ct,`Creating RPC '${e}' stream ${i}: ${f}`,c);const m=o.createWebChannel(f,c);this.I_(m);let g=!1,T=!1;const k=new tN({Yo:b=>{T?H(ct,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(g||(H(ct,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),H(ct,`RPC '${e}' stream ${i} sending:`,b),m.send(b))},Zo:()=>m.close()}),x=(b,w,y)=>{b.listen(w,E=>{try{y(E)}catch(R){setTimeout(()=>{throw R},0)}})};return x(m,vo.EventType.OPEN,()=>{T||(H(ct,`RPC '${e}' stream ${i} transport opened.`),k.o_())}),x(m,vo.EventType.CLOSE,()=>{T||(T=!0,H(ct,`RPC '${e}' stream ${i} transport closed`),k.a_(),this.E_(m))}),x(m,vo.EventType.ERROR,b=>{T||(T=!0,Is(ct,`RPC '${e}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),k.a_(new z(L.UNAVAILABLE,"The operation could not be completed")))}),x(m,vo.EventType.MESSAGE,b=>{var w;if(!T){const y=b.data[0];ce(!!y,16349);const E=y,R=(E==null?void 0:E.error)||((w=E[0])==null?void 0:w.error);if(R){H(ct,`RPC '${e}' stream ${i} received error:`,R);const O=R.status;let M=function(S){const C=Ue[S];if(C!==void 0)return x1(C)}(O),I=R.message;M===void 0&&(M=L.INTERNAL,I="Unknown error status: "+O+" with message "+R.message),T=!0,k.a_(new z(M,I)),m.close()}else H(ct,`RPC '${e}' stream ${i} received:`,y),k.u_(y)}}),x(l,GE.STAT_EVENT,b=>{b.stat===Id.PROXY?H(ct,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Id.NOPROXY&&H(ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function mh(){return typeof document<"u"?document:null}/**
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
 */function nu(t){return new ox(t,!0)}/**
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
 */class H1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const sy="PersistentStream";class W1{constructor(e,n,r,i,s,o,l,c){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new H1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new z(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(sy,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(H(sy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rN extends W1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=cx(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Rn(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=bd(this.serializer),n.addTarget=function(s,o){let l;const c=o.target;if(l=Pd(c)?{documents:dx(s,c)}:{query:fx(s,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=b1(s,o.resumeToken);const u=xd(s,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=gc(s,o.snapshotVersion.toTimestamp());const u=xd(s,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=mx(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=bd(this.serializer),n.removeTarget=e,this.q_(n)}}class iN extends W1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=hx(e.writeResults,e.commitTime),r=Rn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=bd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ux(this.serializer,r))};this.q_(n)}}/**
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
 */class sN{}class oN extends sN{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Nd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(L.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Nd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class aN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Xn(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ei="RemoteStore";class lN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{xi(this)&&(H(Ei,"Restarting streams for network reachability change."),await async function(c){const u=X(c);u.Ea.add(4),await Ta(u),u.Ra.set("Unknown"),u.Ea.delete(4),await ru(u)}(this))})}),this.Ra=new aN(r,i)}}async function ru(t){if(xi(t))for(const e of t.da)await e(!0)}async function Ta(t){for(const e of t.da)await e(!1)}function q1(t,e){const n=X(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),fp(n)?dp(n):Us(n).O_()&&hp(n,e))}function up(t,e){const n=X(t),r=Us(n);n.Ia.delete(e),r.O_()&&G1(n,e),n.Ia.size===0&&(r.O_()?r.L_():xi(n)&&n.Ra.set("Unknown"))}function hp(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Us(t).Y_(e)}function G1(t,e){t.Va.Ue(e),Us(t).Z_(e)}function dp(t){t.Va=new nx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Us(t).start(),t.Ra.ua()}function fp(t){return xi(t)&&!Us(t).x_()&&t.Ia.size>0}function xi(t){return X(t).Ea.size===0}function K1(t){t.Va=void 0}async function cN(t){t.Ra.set("Online")}async function uN(t){t.Ia.forEach((e,n)=>{hp(t,e)})}async function hN(t,e){K1(t),fp(t)?(t.Ra.ha(e),dp(t)):t.Ra.set("Unknown")}async function dN(t,e,n){if(t.Ra.set("Online"),e instanceof D1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){H(Ei,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yc(t,r)}else if(e instanceof xl?t.Va.Ze(e):e instanceof N1?t.Va.st(e):t.Va.tt(e),!n.isEqual(Y.min()))try{const r=await z1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.Ia.get(u);f&&s.Ia.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=s.Ia.get(c);if(!f)return;s.Ia.set(c,f.withResumeToken(st.EMPTY_BYTE_STRING,f.snapshotVersion)),G1(s,c);const m=new wr(f.target,c,u,f.sequenceNumber);hp(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(Ei,"Failed to raise snapshot:",r),await yc(t,r)}}async function yc(t,e,n){if(!js(e))throw e;t.Ea.add(1),await Ta(t),t.Ra.set("Offline"),n||(n=()=>z1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(Ei,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ru(t)})}function Q1(t,e){return e().catch(n=>yc(t,n,e))}async function iu(t){const e=X(t),n=$r(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Qf;for(;fN(e);)try{const i=await Kx(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,pN(e,i)}catch(i){await yc(e,i)}Y1(e)&&X1(e)}function fN(t){return xi(t)&&t.Ta.length<10}function pN(t,e){t.Ta.push(e);const n=$r(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Y1(t){return xi(t)&&!$r(t).x_()&&t.Ta.length>0}function X1(t){$r(t).start()}async function mN(t){$r(t).ra()}async function gN(t){const e=$r(t);for(const n of t.Ta)e.ea(n.mutations)}async function _N(t,e,n){const r=t.Ta.shift(),i=rp.from(r,e,n);await Q1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await iu(t)}async function yN(t,e){e&&$r(t).X_&&await async function(r,i){if(function(o){return ZR(o)&&o!==L.ABORTED}(i.code)){const s=r.Ta.shift();$r(r).B_(),await Q1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await iu(r)}}(t,e),Y1(t)&&X1(t)}async function oy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),H(Ei,"RemoteStore received new credentials");const r=xi(n);n.Ea.add(3),await Ta(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ru(n)}async function vN(t,e){const n=X(t);e?(n.Ea.delete(2),await ru(n)):e||(n.Ea.add(2),await Ta(n),n.Ra.set("Unknown"))}function Us(t){return t.ma||(t.ma=function(n,r,i){const s=X(n);return s.sa(),new rN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:cN.bind(null,t),t_:uN.bind(null,t),r_:hN.bind(null,t),H_:dN.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),fp(t)?dp(t):t.Ra.set("Unknown")):(await t.ma.stop(),K1(t))})),t.ma}function $r(t){return t.fa||(t.fa=function(n,r,i){const s=X(n);return s.sa(),new iN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:mN.bind(null,t),r_:yN.bind(null,t),ta:gN.bind(null,t),na:_N.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await iu(t)):(await t.fa.stop(),t.Ta.length>0&&(H(Ei,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class pp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new pp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mp(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),js(t))return new z(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class us{static emptySet(e){return new us(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=wo(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ay{constructor(){this.ga=new xe(q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Q(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ps{constructor(e,n,r,i,s,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ps(e,n,us.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class wN{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class EN{constructor(){this.queries=ly(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=ly(),s.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new z(L.ABORTED,"Firestore shutting down"))}}function ly(){return new Ri(t=>y1(t),Xc)}async function J1(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new wN,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=mp(o,`Initialization of query '${Fi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&gp(n)}async function Z1(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function IN(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&gp(n)}function TN(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function gp(t){t.Ca.forEach(e=>{e.next()})}var Ld,cy;(cy=Ld||(Ld={})).Ma="default",cy.Cache="cache";class e0{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ld.Cache}}/**
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
 */class t0{constructor(e){this.key=e}}class n0{constructor(e){this.key=e}}class SN{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=se(),this.mutatedKeys=se(),this.eu=v1(e),this.tu=new us(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new ay,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),T=Jc(this.query,m)?m:null,k=!!g&&this.mutatedKeys.has(g.key),x=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let b=!1;g&&T?g.data.isEqual(T.data)?k!==x&&(r.track({type:3,doc:T}),b=!0):this.su(g,T)||(r.track({type:2,doc:T}),b=!0,(c&&this.eu(T,c)>0||u&&this.eu(T,u)<0)&&(l=!0)):!g&&T?(r.track({type:0,doc:T}),b=!0):g&&!T&&(r.track({type:1,doc:g}),b=!0,(c||u)&&(l=!0)),b&&(T?(o=o.add(T),s=x?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(T,k){const x=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Rt:b})}};return x(T)-x(k)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],c=this.Xa.size===0&&this.current&&!i?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Ps(this.query,e.tu,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ay,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=se(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new n0(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new t0(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=se();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ps.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const _p="SyncEngine";class AN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CN{constructor(e){this.key=e,this.hu=!1}}class PN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ri(l=>y1(l),Xc),this.Iu=new Map,this.Eu=new Set,this.du=new xe(q.comparator),this.Au=new Map,this.Ru=new op,this.Vu={},this.mu=new Map,this.fu=Cs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function kN(t,e,n=!0){const r=l0(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await r0(r,e,n,!0),i}async function RN(t,e){const n=l0(t);await r0(n,e,!0,!1)}async function r0(t,e,n,r){const i=await Qx(t.localStore,kn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await xN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&q1(t.remoteStore,i),l}async function xN(t,e,n,r,i){t.pu=(m,g,T)=>async function(x,b,w,y){let E=b.view.ru(w);E.Cs&&(E=await ty(x.localStore,b.query,!1).then(({documents:I})=>b.view.ru(I,E)));const R=y&&y.targetChanges.get(b.targetId),O=y&&y.targetMismatches.get(b.targetId)!=null,M=b.view.applyChanges(E,x.isPrimaryClient,R,O);return hy(x,b.targetId,M.au),M.snapshot}(t,m,g,T);const s=await ty(t.localStore,e,!0),o=new SN(e,s.Qs),l=o.ru(s.documents),c=Ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);hy(t,n,u.au);const f=new AN(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function NN(t,e,n){const r=X(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Xc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Od(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&up(r.remoteStore,i.targetId),Md(r,i.targetId)}).catch(Ms)):(Md(r,i.targetId),await Od(r.localStore,i.targetId,!0))}async function DN(t,e){const n=X(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),up(n.remoteStore,r.targetId))}async function bN(t,e,n){const r=UN(t);try{const i=await function(o,l){const c=X(o),u=he.now(),f=l.reduce((T,k)=>T.add(k.key),se());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",T=>{let k=Jn(),x=se();return c.Ns.getEntries(T,f).next(b=>{k=b,k.forEach((w,y)=>{y.isValidDocument()||(x=x.add(w))})}).next(()=>c.localDocuments.getOverlayedDocuments(T,k)).next(b=>{m=b;const w=[];for(const y of l){const E=KR(y,m.get(y.key).overlayedDocument);E!=null&&w.push(new Kr(y.key,E,u1(E.value.mapValue),Jt.exists(!0)))}return c.mutationQueue.addMutationBatch(T,u,w,l)}).next(b=>{g=b;const w=b.applyToLocalDocumentSet(m,x);return c.documentOverlayCache.saveOverlays(T,b.batchId,w)})}).then(()=>({batchId:g.batchId,changes:E1(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new xe(ie)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u}(r,i.batchId,n),await Sa(r,i.changes),await iu(r.remoteStore)}catch(i){const s=mp(i,"Failed to persist write");n.reject(s)}}async function i0(t,e){const n=X(t);try{const r=await qx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ce(o.hu,14607):i.removedDocuments.size>0&&(ce(o.hu,42227),o.hu=!1))}),await Sa(n,r,e)}catch(r){await Ms(r)}}function uy(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=X(o);c.onlineState=l;let u=!1;c.queries.forEach((f,m)=>{for(const g of m.Sa)g.va(l)&&(u=!0)}),u&&gp(c)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ON(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new xe(q.comparator);o=o.insert(s,pt.newNoDocument(s,Y.min()));const l=se().add(s),c=new tu(Y.min(),new Map,new xe(ie),o,l);await i0(r,c),r.du=r.du.remove(s),r.Au.delete(e),yp(r)}else await Od(r.localStore,e,!1).then(()=>Md(r,e,n)).catch(Ms)}async function VN(t,e){const n=X(t),r=e.batch.batchId;try{const i=await Wx(n.localStore,e);o0(n,r,null),s0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Sa(n,i)}catch(i){await Ms(i)}}async function LN(t,e,n){const r=X(t);try{const i=await function(o,l){const c=X(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(m=>(ce(m!==null,37113),f=m.keys(),c.mutationQueue.removeMutationBatch(u,m))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);o0(r,e,n),s0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Sa(r,i)}catch(i){await Ms(i)}}function s0(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function o0(t,e,n){const r=X(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Md(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||a0(t,r)})}function a0(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(up(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),yp(t))}function hy(t,e,n){for(const r of n)r instanceof t0?(t.Ru.addReference(r.key,e),MN(t,r)):r instanceof n0?(H(_p,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||a0(t,r.key)):Q(19791,{wu:r})}function MN(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(H(_p,"New document in limbo: "+n),t.Eu.add(r),yp(t))}function yp(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new q(ge.fromString(e)),r=t.fu.next();t.Au.set(r,new CN(n)),t.du=t.du.insert(n,r),q1(t.remoteStore,new wr(kn(ep(n.path)),r,"TargetPurposeLimboResolution",Kc.ce))}}async function Sa(t,e,n){const r=X(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const m=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(u){i.push(u);const m=lp.As(c.targetId,u);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(c,u){const f=X(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>j.forEach(u,g=>j.forEach(g.Es,T=>f.persistence.referenceDelegate.addReference(m,g.targetId,T)).next(()=>j.forEach(g.ds,T=>f.persistence.referenceDelegate.removeReference(m,g.targetId,T)))))}catch(m){if(!js(m))throw m;H(cp,"Failed to update sequence numbers: "+m)}for(const m of u){const g=m.targetId;if(!m.fromCache){const T=f.Ms.get(g),k=T.snapshotVersion,x=T.withLastLimboFreeSnapshotVersion(k);f.Ms=f.Ms.insert(g,x)}}}(r.localStore,s))}async function jN(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){H(_p,"User change. New user:",e.toKey());const r=await B1(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(c=>{c.reject(new z(L.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Sa(n,r.Ls)}}function FN(t,e){const n=X(t),r=n.Au.get(e);if(r&&r.hu)return se().add(r.key);{let i=se();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function l0(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=i0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ON.bind(null,e),e.Pu.H_=IN.bind(null,e.eventManager),e.Pu.yu=TN.bind(null,e.eventManager),e}function UN(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LN.bind(null,e),e}class vc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return Hx(this.persistence,new $x,e.initialUser,this.serializer)}Cu(e){return new $1(ap.mi,this.serializer)}Du(e){return new Xx}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vc.provider={build:()=>new vc};class $N extends vc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ce(this.persistence.referenceDelegate instanceof _c,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Cx(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new $1(r=>_c.mi(r,n),this.serializer)}}class jd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>uy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jN.bind(null,this.syncEngine),await vN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new EN}()}createDatastore(e){const n=nu(e.databaseInfo.databaseId),r=function(s){return new nN(s)}(e.databaseInfo);return function(s,o,l,c){return new oN(s,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new lN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>uy(this.syncEngine,n,0),function(){return iy.v()?new iy:new Jx}())}createSyncEngine(e,n){return function(i,s,o,l,c,u,f){const m=new PN(i,s,o,l,c,u);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);H(Ei,"RemoteStore shutting down."),s.Ea.add(5),await Ta(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}jd.provider={build:()=>new jd};/**
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
 */class c0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Br="FirestoreClient";class BN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=Kf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(Br,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Br,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gh(t,e){t.asyncQueue.verifyOperationInProgress(),H(Br,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await B1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function dy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zN(t);H(Br,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>oy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>oy(e.remoteStore,i)),t._onlineComponents=e}async function zN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Br,"Using user provided OfflineComponentProvider");try{await gh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Is("Error using user provided cache. Falling back to memory cache: "+n),await gh(t,new vc)}}else H(Br,"Using default OfflineComponentProvider"),await gh(t,new $N(void 0));return t._offlineComponents}async function u0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Br,"Using user provided OnlineComponentProvider"),await dy(t,t._uninitializedComponentsProvider._online)):(H(Br,"Using default OnlineComponentProvider"),await dy(t,new jd))),t._onlineComponents}function HN(t){return u0(t).then(e=>e.syncEngine)}async function h0(t){const e=await u0(t),n=e.eventManager;return n.onListen=kN.bind(null,e.syncEngine),n.onUnlisten=NN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=RN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=DN.bind(null,e.syncEngine),n}function WN(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const f=new c0({next:g=>{f.Nu(),o.enqueueAndForget(()=>Z1(s,m));const T=g.docs.has(l);!T&&g.fromCache?u.reject(new z(L.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&g.fromCache&&c&&c.source==="server"?u.reject(new z(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),m=new e0(ep(l.path),f,{includeMetadataChanges:!0,qa:!0});return J1(s,m)}(await h0(t),t.asyncQueue,e,n,r)),r.promise}function qN(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const f=new c0({next:g=>{f.Nu(),o.enqueueAndForget(()=>Z1(s,m)),g.fromCache&&c.source==="server"?u.reject(new z(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),m=new e0(l,f,{includeMetadataChanges:!0,qa:!0});return J1(s,m)}(await h0(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function d0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const fy=new Map;/**
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
 */const f0="firestore.googleapis.com",py=!0;class my{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=f0,this.ssl=py}else this.host=e.host,this.ssl=e.ssl??py;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=U1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Sx)throw new z(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=d0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class su{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new my({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new my(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Zk;switch(r.type){case"firstParty":return new rR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=fy.get(n);r&&(H("ComponentProvider","Removing Datastore"),fy.delete(n),r.terminate())}(this),Promise.resolve()}}function GN(t,e,n,r={}){var u;t=pn(t,su);const i=Ds(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(eE(`https://${l}`),tE("Firestore",!0)),s.host!==f0&&s.host!==l&&Is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...s,host:l,ssl:i,emulatorOptions:r};if(!Lr(c,o)&&(t._setSettings(c),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=dt.MOCK_USER;else{f=cA(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new z(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new dt(g)}t._authCredentials=new eR(new XE(f,m))}}/**
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
 */class Ni{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ni(this.firestore,e,this._query)}}class Me{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new br(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}toJSON(){return{type:Me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(wa(n,Me._jsonSchema))return new Me(e,r||null,new q(ge.fromString(n.referencePath)))}}Me._jsonSchemaVersion="firestore/documentReference/1.0",Me._jsonSchema={type:ze("string",Me._jsonSchemaVersion),referencePath:ze("string")};class br extends Ni{constructor(e,n,r){super(e,n,ep(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new q(e))}withConverter(e){return new br(this.firestore,e,this._path)}}function On(t,e,...n){if(t=je(t),JE("collection","path",e),t instanceof su){const r=ge.fromString(e,...n);return k_(r),new br(t,null,r)}{if(!(t instanceof Me||t instanceof br))throw new z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return k_(r),new br(t.firestore,null,r)}}function Pe(t,e,...n){if(t=je(t),arguments.length===1&&(e=Kf.newId()),JE("doc","path",e),t instanceof su){const r=ge.fromString(e,...n);return P_(r),new Me(t,null,new q(r))}{if(!(t instanceof Me||t instanceof br))throw new z(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return P_(r),new Me(t.firestore,t instanceof br?t.converter:null,new q(r))}}/**
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
 */const gy="AsyncQueue";class _y{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new H1(this,"async_queue_retry"),this._c=()=>{const r=mh();r&&H(gy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=mh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=mh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Bn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!js(e))throw e;H(gy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Xn("INTERNAL UNHANDLED ERROR: ",yy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=pp.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Q(47125,{Pc:yy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function yy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Di extends su{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new _y,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _y(e),this._firestoreClient=void 0,await e}}}function KN(t,e){const n=typeof t=="object"?t:jf(),r=typeof t=="string"?t:hc,i=Pi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=aA("firestore");s&&GN(i,...s)}return i}function vp(t){if(t._terminated)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||QN(t),t._firestoreClient}function QN(t){var r,i,s;const e=t._freezeSettings(),n=function(l,c,u,f){return new wR(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,d0(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new BN(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kt(st.fromBase64String(e))}catch(n){throw new z(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kt(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wa(e,Kt._jsonSchema))return Kt.fromBase64String(e.bytes)}}Kt._jsonSchemaVersion="firestore/bytes/1.0",Kt._jsonSchema={type:ze("string",Kt._jsonSchemaVersion),bytes:ze("string")};/**
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
 */class ou{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class wp{constructor(e){this._methodName=e}}/**
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
 */class xn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xn._jsonSchemaVersion}}static fromJSON(e){if(wa(e,xn._jsonSchema))return new xn(e.latitude,e.longitude)}}xn._jsonSchemaVersion="firestore/geoPoint/1.0",xn._jsonSchema={type:ze("string",xn._jsonSchemaVersion),latitude:ze("number"),longitude:ze("number")};/**
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
 */class Nn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Nn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wa(e,Nn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Nn(e.vectorValues);throw new z(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nn._jsonSchemaVersion="firestore/vectorValue/1.0",Nn._jsonSchema={type:ze("string",Nn._jsonSchemaVersion),vectorValues:ze("object")};/**
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
 */const YN=/^__.*__$/;class XN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ea(e,this.data,n,this.fieldTransforms)}}class p0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function m0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{Ac:t})}}class Ep{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ep({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return wc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(m0(this.Ac)&&YN.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class JN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nu(e)}Cc(e,n,r,i=!1){return new Ep({Ac:e,methodName:n,Dc:r,path:nt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function au(t){const e=t._freezeSettings(),n=nu(t._databaseId);return new JN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function g0(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);Ip("Data must be an object, but it was:",o,r);const l=_0(r,o);let c,u;if(s.merge)c=new jt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=Fd(e,m,n);if(!o.contains(g))throw new z(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);v0(f,g)||f.push(g)}c=new jt(f),u=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,u=o.fieldTransforms;return new XN(new kt(l),c,u)}class lu extends wp{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lu}}function ZN(t,e,n,r){const i=t.Cc(1,e,n);Ip("Data must be an object, but it was:",i,r);const s=[],o=kt.empty();Gr(r,(c,u)=>{const f=Tp(e,c,n);u=je(u);const m=i.yc(f);if(u instanceof lu)s.push(f);else{const g=Aa(u,m);g!=null&&(s.push(f),o.set(f,g))}});const l=new jt(s);return new p0(o,l,i.fieldTransforms)}function e2(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[Fd(e,r,n)],c=[i];if(s.length%2!=0)throw new z(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Fd(e,s[g])),c.push(s[g+1]);const u=[],f=kt.empty();for(let g=l.length-1;g>=0;--g)if(!v0(u,l[g])){const T=l[g];let k=c[g];k=je(k);const x=o.yc(T);if(k instanceof lu)u.push(T);else{const b=Aa(k,x);b!=null&&(u.push(T),f.set(T,b))}}const m=new jt(u);return new p0(f,m,o.fieldTransforms)}function t2(t,e,n,r=!1){return Aa(n,t.Cc(r?4:3,e))}function Aa(t,e){if(y0(t=je(t)))return Ip("Unsupported field value:",e,t),_0(t,e);if(t instanceof wp)return function(r,i){if(!m0(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let c=Aa(l,i.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return BR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=he.fromDate(r);return{timestampValue:gc(i.serializer,s)}}if(r instanceof he){const s=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gc(i.serializer,s)}}if(r instanceof xn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Kt)return{bytesValue:b1(i.serializer,r._byteString)};if(r instanceof Me){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:sp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Nn)return function(o,l){return{mapValue:{fields:{[a1]:{stringValue:c1},[dc]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return tp(l.serializer,u)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Gc(r)}`)}(t,e)}function _0(t,e){const n={};return t1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gr(t,(r,i)=>{const s=Aa(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function y0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof he||t instanceof xn||t instanceof Kt||t instanceof Me||t instanceof wp||t instanceof Nn)}function Ip(t,e,n){if(!y0(n)||!ZE(n)){const r=Gc(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Fd(t,e,n){if((e=je(e))instanceof ou)return e._internalPath;if(typeof e=="string")return Tp(t,e);throw wc("Field path arguments must be of type string or ",t,!1,void 0,n)}const n2=new RegExp("[~\\*/\\[\\]]");function Tp(t,e,n){if(e.search(n2)>=0)throw wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ou(...e.split("."))._internalPath}catch{throw wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new z(L.INVALID_ARGUMENT,l+t+c)}function v0(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class w0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new r2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Sp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class r2 extends w0{data(){return super.data()}}function Sp(t,e){return typeof e=="string"?Tp(t,e):e instanceof ou?e._internalPath:e._delegate._internalPath}/**
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
 */function i2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ap{}class E0 extends Ap{}function s2(t,e,...n){let r=[];e instanceof Ap&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof Pp).length,l=s.filter(c=>c instanceof Cp).length;if(o>1||o>0&&l>0)throw new z(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Cp extends E0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Cp(e,n,r)}_apply(e){const n=this._parse(e);return I0(e._query,n),new Ni(e.firestore,e.converter,kd(e._query,n))}_parse(e){const n=au(e.firestore);return function(s,o,l,c,u,f,m){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new z(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){wy(m,f);const k=[];for(const x of m)k.push(vy(c,s,x));g={arrayValue:{values:k}}}else g=vy(c,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||wy(m,f),g=t2(l,o,m,f==="in"||f==="not-in");return Be.create(u,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Pp extends Ap{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:mn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const c of l)I0(o,c),o=kd(o,c)}(e._query,n),new Ni(e.firestore,e.converter,kd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class kp extends E0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new kp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new la(s,o)}(e._query,this._field,this._direction);return new Ni(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Fs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function o2(t,e="asc"){const n=e,r=Sp("orderBy",t);return kp._create(r,n)}function vy(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new z(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_1(e)&&n.indexOf("/")!==-1)throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!q.isDocumentKey(r))throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return L_(t,new q(r))}if(n instanceof Me)return L_(t,n._key);throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gc(n)}.`)}function wy(t,e){if(!Array.isArray(t)||t.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function I0(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class a2{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Gr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[dc].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ve(o.doubleValue));return new Nn(n)}convertGeoPoint(e){return new xn(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(sa(e));default:return null}}convertTimestamp(e){const n=jr(e);return new he(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);ce(F1(r),9688,{name:e});const i=new oa(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function T0(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Io{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fi extends w0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Nl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Sp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=fi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}fi._jsonSchemaVersion="firestore/documentSnapshot/1.0",fi._jsonSchema={type:ze("string",fi._jsonSchemaVersion),bundleSource:ze("string","DocumentSnapshot"),bundleName:ze("string"),bundle:ze("string")};class Nl extends fi{data(e={}){return super.data(e)}}class hs{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Io(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Nl(this._firestore,this._userDataWriter,r.key,r,new Io(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new Nl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Io(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new Nl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Io(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:l2(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=hs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Kf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function l2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
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
 */function ks(t){t=pn(t,Me);const e=pn(t.firestore,Di);return WN(vp(e),t._key).then(n=>c2(e,t,n))}hs._jsonSchemaVersion="firestore/querySnapshot/1.0",hs._jsonSchema={type:ze("string",hs._jsonSchemaVersion),bundleSource:ze("string","QuerySnapshot"),bundleName:ze("string"),bundle:ze("string")};class S0 extends a2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}function Ca(t){t=pn(t,Ni);const e=pn(t.firestore,Di),n=vp(e),r=new S0(e);return i2(t._query),qN(n,t._query).then(i=>new hs(e,r,t,i))}function A0(t,e,n){t=pn(t,Me);const r=pn(t.firestore,Di),i=T0(t.converter,e);return cu(r,[g0(au(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Jt.none())])}function zn(t,e,n,...r){t=pn(t,Me);const i=pn(t.firestore,Di),s=au(i);let o;return o=typeof(e=je(e))=="string"||e instanceof ou?e2(s,"updateDoc",t._key,e,n,r):ZN(s,"updateDoc",t._key,e),cu(i,[o.toMutation(t._key,Jt.exists(!0))])}function Pa(t){return cu(pn(t.firestore,Di),[new np(t._key,Jt.none())])}function ka(t,e){const n=pn(t.firestore,Di),r=Pe(t),i=T0(t.converter,e);return cu(n,[g0(au(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Jt.exists(!1))]).then(()=>r)}function cu(t,e){return function(r,i){const s=new Bn;return r.asyncQueue.enqueueAndForget(async()=>bN(await HN(r),i,s)),s.promise}(vp(t),e)}function c2(t,e,n){const r=n.docs.get(e._key),i=new S0(t);return new fi(t,i,e._key,r,new Io(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ls=i})(bs),Dn(new dn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Di(new tR(r.getProvider("auth-internal")),new iR(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new z(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oa(u.options.projectId,f)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Xt(T_,S_,e),Xt(T_,S_,"esm2020")})();const C0="@firebase/installations",Rp="0.6.19";/**
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
 */const P0=1e4,k0=`w:${Rp}`,R0="FIS_v2",u2="https://firebaseinstallations.googleapis.com/v1",h2=60*60*1e3,d2="installations",f2="Installations";/**
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
 */const p2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ii=new Ci(d2,f2,p2);function x0(t){return t instanceof gn&&t.code.includes("request-failed")}/**
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
 */function N0({projectId:t}){return`${u2}/projects/${t}/installations`}function D0(t){return{token:t.token,requestStatus:2,expiresIn:g2(t.expiresIn),creationTime:Date.now()}}async function b0(t,e){const r=(await e.json()).error;return Ii.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function O0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function m2(t,{refreshToken:e}){const n=O0(t);return n.append("Authorization",_2(e)),n}async function V0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function g2(t){return Number(t.replace("s","000"))}function _2(t){return`${R0} ${t}`}/**
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
 */async function y2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=N0(t),i=O0(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:R0,appId:t.appId,sdkVersion:k0},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await V0(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:D0(u.authToken)}}else throw await b0("Create Installation",c)}/**
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
 */function L0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function v2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const w2=/^[cdef][\w-]{21}$/,Ud="";function E2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=I2(t);return w2.test(n)?n:Ud}catch{return Ud}}function I2(t){return v2(t).substr(0,22)}/**
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
 */function uu(t){return`${t.appName}!${t.appId}`}/**
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
 */const M0=new Map;function j0(t,e){const n=uu(t);F0(n,e),T2(n,e)}function F0(t,e){const n=M0.get(t);if(n)for(const r of n)r(e)}function T2(t,e){const n=S2();n&&n.postMessage({key:t,fid:e}),A2()}let ui=null;function S2(){return!ui&&"BroadcastChannel"in self&&(ui=new BroadcastChannel("[Firebase] FID Change"),ui.onmessage=t=>{F0(t.data.key,t.data.fid)}),ui}function A2(){M0.size===0&&ui&&(ui.close(),ui=null)}/**
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
 */const C2="firebase-installations-database",P2=1,Ti="firebase-installations-store";let _h=null;function xp(){return _h||(_h=aE(C2,P2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ti)}}})),_h}async function Ec(t,e){const n=uu(t),i=(await xp()).transaction(Ti,"readwrite"),s=i.objectStore(Ti),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&j0(t,e.fid),e}async function U0(t){const e=uu(t),r=(await xp()).transaction(Ti,"readwrite");await r.objectStore(Ti).delete(e),await r.done}async function hu(t,e){const n=uu(t),i=(await xp()).transaction(Ti,"readwrite"),s=i.objectStore(Ti),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&j0(t,l.fid),l}/**
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
 */async function Np(t){let e;const n=await hu(t.appConfig,r=>{const i=k2(r),s=R2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Ud?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function k2(t){const e=t||{fid:E2(),registrationStatus:0};return $0(e)}function R2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ii.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=x2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:N2(t)}:{installationEntry:e}}async function x2(t,e){try{const n=await y2(t,e);return Ec(t.appConfig,n)}catch(n){throw x0(n)&&n.customData.serverCode===409?await U0(t.appConfig):await Ec(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function N2(t){let e=await Ey(t.appConfig);for(;e.registrationStatus===1;)await L0(100),e=await Ey(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Np(t);return r||n}return e}function Ey(t){return hu(t,e=>{if(!e)throw Ii.create("installation-not-found");return $0(e)})}function $0(t){return D2(t)?{fid:t.fid,registrationStatus:0}:t}function D2(t){return t.registrationStatus===1&&t.registrationTime+P0<Date.now()}/**
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
 */async function b2({appConfig:t,heartbeatServiceProvider:e},n){const r=O2(t,n),i=m2(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:k0,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await V0(()=>fetch(r,l));if(c.ok){const u=await c.json();return D0(u)}else throw await b0("Generate Auth Token",c)}function O2(t,{fid:e}){return`${N0(t)}/${e}/authTokens:generate`}/**
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
 */async function Dp(t,e=!1){let n;const r=await hu(t.appConfig,s=>{if(!B0(s))throw Ii.create("not-registered");const o=s.authToken;if(!e&&M2(o))return s;if(o.requestStatus===1)return n=V2(t,e),s;{if(!navigator.onLine)throw Ii.create("app-offline");const l=F2(s);return n=L2(t,l),l}});return n?await n:r.authToken}async function V2(t,e){let n=await Iy(t.appConfig);for(;n.authToken.requestStatus===1;)await L0(100),n=await Iy(t.appConfig);const r=n.authToken;return r.requestStatus===0?Dp(t,e):r}function Iy(t){return hu(t,e=>{if(!B0(e))throw Ii.create("not-registered");const n=e.authToken;return U2(n)?{...e,authToken:{requestStatus:0}}:e})}async function L2(t,e){try{const n=await b2(t,e),r={...e,authToken:n};return await Ec(t.appConfig,r),n}catch(n){if(x0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await U0(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ec(t.appConfig,r)}throw n}}function B0(t){return t!==void 0&&t.registrationStatus===2}function M2(t){return t.requestStatus===2&&!j2(t)}function j2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+h2}function F2(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function U2(t){return t.requestStatus===1&&t.requestTime+P0<Date.now()}/**
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
 */async function $2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Np(e);return r?r.catch(console.error):Dp(e).catch(console.error),n.fid}/**
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
 */async function B2(t,e=!1){const n=t;return await z2(n),(await Dp(n,e)).token}async function z2(t){const{registrationPromise:e}=await Np(t);e&&await e}/**
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
 */function H2(t){if(!t||!t.options)throw yh("App Configuration");if(!t.name)throw yh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw yh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function yh(t){return Ii.create("missing-app-config-values",{valueName:t})}/**
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
 */const z0="installations",W2="installations-internal",q2=t=>{const e=t.getProvider("app").getImmediate(),n=H2(e),r=Pi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},G2=t=>{const e=t.getProvider("app").getImmediate(),n=Pi(e,z0).getImmediate();return{getId:()=>$2(n),getToken:i=>B2(n,i)}};function K2(){Dn(new dn(z0,q2,"PUBLIC")),Dn(new dn(W2,G2,"PRIVATE"))}K2();Xt(C0,Rp);Xt(C0,Rp,"esm2020");/**
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
 */const Ic="analytics",Q2="firebase_id",Y2="origin",X2=60*1e3,J2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bp="https://www.googletagmanager.com/gtag/js";/**
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
 */const Z2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ut=new Ci("analytics","Analytics",Z2);/**
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
 */function eD(t){if(!t.startsWith(bp)){const e=Ut.create("invalid-gtag-resource",{gtagURL:t});return Tt.warn(e.message),""}return t}function H0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function tD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function nD(t,e){const n=tD("firebase-js-sdk-policy",{createScriptURL:eD}),r=document.createElement("script"),i=`${bp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function rD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function iD(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await H0(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(l){Tt.error(l)}t("config",i,s)}async function sD(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await H0(n);for(const c of o){const u=l.find(m=>m.measurementId===c),f=u&&e[u.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Tt.error(s)}}function oD(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,c]=o;await sD(t,e,n,l,c)}else if(s==="config"){const[l,c]=o;await iD(t,e,n,r,l,c)}else if(s==="consent"){const[l,c]=o;t("consent",l,c)}else if(s==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Tt.error(l)}}return i}function aD(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=oD(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function lD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(bp)&&n.src.includes(t))return n;return null}/**
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
 */const cD=30,uD=1e3;class hD{constructor(e={},n=uD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const W0=new hD;function dD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function fD(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:dD(n)},i=J2.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const c=await s.json();(o=c.error)!=null&&o.message&&(l=c.error.message)}catch{}throw Ut.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function pD(t,e=W0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ut.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ut.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new _D;return setTimeout(async()=>{l.abort()},X2),q0({appId:r,apiKey:i,measurementId:s},o,l,e)}async function q0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=W0){var l;const{appId:s,measurementId:o}=t;try{await mD(r,e)}catch(c){if(o)return Tt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw c}try{const c=await fD(t);return i.deleteThrottleMetadata(s),c}catch(c){const u=c;if(!gD(u)){if(i.deleteThrottleMetadata(s),o)return Tt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw c}const f=Number((l=u==null?void 0:u.customData)==null?void 0:l.httpStatus)===503?Gg(n,i.intervalMillis,cD):Gg(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,m),Tt.debug(`Calling attemptFetch again in ${f} millis`),q0(t,m,r,i)}}function mD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ut.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function gD(t){if(!(t instanceof gn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class _D{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function yD(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function vD(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
 */async function wD(){if(rE())try{await iE()}catch(t){return Tt.warn(Ut.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Tt.warn(Ut.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ED(t,e,n,r,i,s,o){const l=pD(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Tt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Tt.error(g)),e.push(l);const c=wD().then(g=>{if(g)return r.getId()}),[u,f]=await Promise.all([l,c]);lD(s)||nD(s,u.measurementId),i("js",new Date);const m=(o==null?void 0:o.config)??{};return m[Y2]="firebase",m.update=!0,f!=null&&(m[Q2]=f),i("config",u.measurementId,m),u.measurementId}/**
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
 */class ID{constructor(e){this.app=e}_delete(){return delete ds[this.app.options.appId],Promise.resolve()}}let ds={},Ty=[];const Sy={};let vh="dataLayer",TD="gtag",Ay,Op,Cy=!1;function SD(){const t=[];if(nE()&&t.push("This is a browser extension environment."),yA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ut.create("invalid-analytics-context",{errorInfo:e});Tt.warn(n.message)}}function AD(t,e,n){SD();const r=t.options.appId;if(!r)throw Ut.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Tt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ut.create("no-api-key");if(ds[r]!=null)throw Ut.create("already-exists",{id:r});if(!Cy){rD(vh);const{wrappedGtag:s,gtagCore:o}=aD(ds,Ty,Sy,vh,TD);Op=s,Ay=o,Cy=!0}return ds[r]=ED(t,Ty,Sy,e,Ay,vh,n),new ID(t)}function CD(t=jf()){t=je(t);const e=Pi(t,Ic);return e.isInitialized()?e.getImmediate():PD(t)}function PD(t,e={}){const n=Pi(t,Ic);if(n.isInitialized()){const i=n.getImmediate();if(Lr(e,n.getOptions()))return i;throw Ut.create("already-initialized")}return n.initialize({options:e})}function kD(t,e,n){t=je(t),vD(Op,ds[t.app.options.appId],e,n).catch(r=>Tt.error(r))}function RD(t,e,n,r){t=je(t),yD(Op,ds[t.app.options.appId],e,n,r).catch(i=>Tt.error(i))}const Py="@firebase/analytics",ky="0.10.19";function xD(){Dn(new dn(Ic,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return AD(r,i,n)},"PUBLIC")),Dn(new dn("analytics-internal",t,"PRIVATE")),Xt(Py,ky),Xt(Py,ky,"esm2020");function t(e){try{const n=e.getProvider(Ic).getImmediate();return{logEvent:(r,i,s)=>RD(n,r,i,s),setUserProperties:(r,i)=>kD(n,r,i)}}catch(n){throw Ut.create("interop-component-reg-failed",{reason:n})}}}xD();const ND={apiKey:"AIzaSyDIL-8yGpB1sjh1khHFZlbxKyNKXMJZTzg",authDomain:"u1-porfolio.firebaseapp.com",projectId:"u1-porfolio",storageBucket:"u1-porfolio.firebasestorage.app",messagingSenderId:"1070957784970",appId:"1:1070957784970:web:35faea8b55767e3911a273",measurementId:"G-4XQ4YK4RZY"},Vp=lE(ND);CD(Vp);const $d=Qk(Vp),le=KN(Vp),G0=U.createContext();function DD({children:t}){const[e,n]=U.useState(!1),[r,i]=U.useState(!0);return U.useEffect(()=>{const s=MP($d,o=>{n(!!o),i(!1)});return()=>s()},[]),d.jsx(G0.Provider,{value:{isAdmin:e,loading:r},children:t})}function Qr(){const t=U.useContext(G0);if(t===void 0)throw new Error("useAdmin must be used within an AdminProvider");return t}const bD="_adminToggle_r3lnh_1",OD="_loginOverlay_r3lnh_26",VD="_loginForm_r3lnh_40",LD="_panel_r3lnh_95",MD="_panelHeader_r3lnh_112",jD="_panelActions_r3lnh_127",FD="_saveBtn_r3lnh_150",UD="_seedBtn_r3lnh_159",$D="_panelContent_r3lnh_168",BD="_formSection_r3lnh_174",zD="_note_r3lnh_216",Ot={adminToggle:bD,loginOverlay:OD,loginForm:VD,panel:LD,panelHeader:MD,panelActions:jD,saveBtn:FD,seedBtn:UD,panelContent:$D,formSection:BD,note:zD};function HD(){var R,O,M,I,v,S,C,P,N,A,me,_t;const{isAdmin:t}=Qr(),[e,n]=U.useState(!1),[r,i]=U.useState(!1),[s,o]=U.useState(""),[l,c]=U.useState(""),[u,f]=U.useState(null),[m,g]=U.useState(!1),[T,k]=U.useState({});U.useEffect(()=>{t&&x()},[t]);const x=async()=>{try{const J=Pe(le,"portfolio","main"),de=await ks(J);de.exists()&&(f(de.data()),k(de.data()))}catch(J){console.error("Error loading portfolio data:",J)}},b=async J=>{J.preventDefault();try{await OP($d,s,l),i(!1),o(""),c("")}catch(de){alert("Login failed: "+de.message)}},w=async()=>{await jP($d),n(!1)},y=async()=>{try{await A0(Pe(le,"portfolio","main"),T),f(T),g(!1),alert("Portfolio updated successfully!"),window.location.reload()}catch(J){alert("Failed to save: "+J.message)}},E=(J,de)=>{k($=>({...$,[J]:de}))};return!t&&!r?d.jsx("button",{className:Ot.adminToggle,onClick:()=>i(!0),title:"Admin Login",children:"🔐"}):r?d.jsx("div",{className:Ot.loginOverlay,onClick:()=>i(!1),children:d.jsxs("div",{className:Ot.loginForm,onClick:J=>J.stopPropagation(),children:[d.jsx("h3",{children:"Admin Login"}),d.jsxs("form",{onSubmit:b,children:[d.jsx("input",{type:"email",placeholder:"Email",value:s,onChange:J=>o(J.target.value),required:!0}),d.jsx("input",{type:"password",placeholder:"Password",value:l,onChange:J=>c(J.target.value),required:!0}),d.jsx("button",{type:"submit",children:"Login"}),d.jsx("button",{type:"button",onClick:()=>i(!1),children:"Cancel"})]})]})}):d.jsxs(d.Fragment,{children:[d.jsx("button",{className:Ot.adminToggle,onClick:()=>n(!e),title:"Admin Panel",children:"⚙️"}),e&&d.jsxs("div",{className:Ot.panel,children:[d.jsxs("div",{className:Ot.panelHeader,children:[d.jsx("h3",{children:"Admin Panel"}),d.jsxs("div",{className:Ot.panelActions,children:[m?d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:y,className:Ot.saveBtn,children:"Save Changes"}),d.jsx("button",{onClick:()=>{k(u),g(!1)},children:"Cancel"})]}):d.jsx("button",{onClick:()=>g(!0),children:"Edit Portfolio"}),d.jsx("button",{onClick:w,children:"Logout"}),d.jsx("button",{onClick:()=>n(!1),children:"✕"})]})]}),m&&d.jsxs("div",{className:Ot.panelContent,children:[d.jsxs("div",{className:Ot.formSection,children:[d.jsx("h4",{children:"Hero Section"}),d.jsxs("label",{children:["Name:",d.jsx("input",{type:"text",value:((R=T.hero)==null?void 0:R.name)||"",onChange:J=>E("hero",{...T.hero,name:J.target.value})})]}),d.jsxs("label",{children:["Title:",d.jsx("input",{type:"text",value:((O=T.hero)==null?void 0:O.title)||"",onChange:J=>E("hero",{...T.hero,title:J.target.value})})]}),d.jsxs("label",{children:["Description:",d.jsx("textarea",{value:((M=T.hero)==null?void 0:M.description)||"",onChange:J=>E("hero",{...T.hero,description:J.target.value}),rows:4})]})]}),d.jsxs("div",{className:Ot.formSection,children:[d.jsx("h4",{children:"About Section"}),d.jsxs("label",{children:["Paragraph 1:",d.jsx("textarea",{value:((v=(I=T.about)==null?void 0:I.paragraphs)==null?void 0:v[0])||"",onChange:J=>{var $;const de=[...(($=T.about)==null?void 0:$.paragraphs)||["","",""]];de[0]=J.target.value,E("about",{...T.about,paragraphs:de})},rows:3})]}),d.jsxs("label",{children:["Paragraph 2:",d.jsx("textarea",{value:((C=(S=T.about)==null?void 0:S.paragraphs)==null?void 0:C[1])||"",onChange:J=>{var $;const de=[...(($=T.about)==null?void 0:$.paragraphs)||["","",""]];de[1]=J.target.value,E("about",{...T.about,paragraphs:de})},rows:3})]}),d.jsxs("label",{children:["Paragraph 3:",d.jsx("textarea",{value:((N=(P=T.about)==null?void 0:P.paragraphs)==null?void 0:N[2])||"",onChange:J=>{var $;const de=[...(($=T.about)==null?void 0:$.paragraphs)||["","",""]];de[2]=J.target.value,E("about",{...T.about,paragraphs:de})},rows:3})]}),d.jsxs("label",{children:["Location:",d.jsx("input",{type:"text",value:((A=T.about)==null?void 0:A.location)||"",onChange:J=>E("about",{...T.about,location:J.target.value}),placeholder:"Manila, Philippines"})]})]}),d.jsxs("div",{className:Ot.formSection,children:[d.jsx("h4",{children:"Social Links"}),d.jsxs("label",{children:["GitHub:",d.jsx("input",{type:"url",value:((me=T.social)==null?void 0:me.github)||"",onChange:J=>E("social",{...T.social,github:J.target.value})})]}),d.jsxs("label",{children:["LinkedIn:",d.jsx("input",{type:"url",value:((_t=T.social)==null?void 0:_t.linkedin)||"",onChange:J=>E("social",{...T.social,linkedin:J.target.value})})]})]}),d.jsxs("div",{className:Ot.note,children:[d.jsx("strong",{children:"Note:"})," Projects, Skills, Experience, and Achievements sections can be edited individually through their respective admin controls when logged in."]})]})]})]})}const K0=U.createContext(),Q0=()=>U.useContext(K0),WD=({children:t})=>{const[e,n]=U.useState(()=>localStorage.getItem("theme")||"dark");U.useEffect(()=>{document.body.setAttribute("data-theme",e),localStorage.setItem("theme",e)},[e]);const r=()=>{n(i=>i==="light"?"dark":"light")};return d.jsx(K0.Provider,{value:{theme:e,toggleTheme:r},children:t})};function Y0(t="(max-width: 860px)"){const[e,n]=U.useState(()=>typeof window<"u"&&window.matchMedia(t).matches);return U.useEffect(()=>{const r=window.matchMedia(t),i=()=>n(r.matches);return i(),r.addEventListener?r.addEventListener("change",i):r.addListener(i),()=>{r.removeEventListener?r.removeEventListener("change",i):r.removeListener(i)}},[t]),e}const qD="_skipLink_1md71_1",GD="_canvas_1md71_18",KD="_blob1_1md71_27",QD="_ypFloat_1md71_1",YD="_blob2_1md71_46",XD="_cursorDot_1md71_66",JD="_cursorRing_1md71_81",fs={skipLink:qD,canvas:GD,blob1:KD,ypFloat:QD,blob2:YD,cursorDot:XD,cursorRing:JD},Ry=" .:-=+*#%@";function ZD(){const t=U.useRef(null),{theme:e}=Q0(),n=U.useRef(e);return n.current=e,U.useEffect(()=>{const r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=t.current;if(!i)return;const s=i.getContext("2d"),o=18;let l=0,c=0,u=new Float32Array(0);const f={x:-9999,y:-9999},m=()=>{i.width=window.innerWidth,i.height=window.innerHeight,l=Math.ceil(i.width/o)+1,c=Math.ceil(i.height/o)+1,u=new Float32Array(l*c);for(let w=0;w<u.length;w++)u[w]=Math.random()*Math.PI*2};m(),window.addEventListener("resize",m);const g=w=>{f.x=w.clientX,f.y=w.clientY};window.addEventListener("mousemove",g),s.font=`${o-3}px "SF Mono", Menlo, monospace`,s.textBaseline="top";const T=1e3/24;let k=0,x;const b=w=>{if(x=requestAnimationFrame(b),w-k<T)return;k=w;const y=w*7e-4;s.clearRect(0,0,i.width,i.height);const E=n.current==="dark"?"245,241,232":"17,17,17",R=n.current==="dark"?"255,90,60":"226,61,31",O=Ry.length;for(let M=0;M<c;M++){const I=M*o;for(let v=0;v<l;v++){const S=M*l+v,C=v*o,P=u[S],A=((r?Math.sin(v*.25+P)+Math.sin(M*.22+P*.5):Math.sin(v*.25+y*1.3+P)+Math.sin(M*.22-y*1.1+P*.5))+2)/4,me=C-f.x,_t=I-f.y,J=Math.sqrt(me*me+_t*_t),de=J<110?1-J/110:0,$=.64;if(A<$&&de<.05)continue;const G=Math.max(0,A-$)/(1-$),Z=Math.min(O-1,Math.max(1,Math.floor((G+de*.85)*(O-1)))),fe=Math.min(.8,.04+G*.14+de*.55);s.fillStyle=de>.3?`rgba(${R},${fe})`:`rgba(${E},${fe})`,s.fillText(Ry[Z],C,I)}}};return x=requestAnimationFrame(b),()=>{window.removeEventListener("resize",m),window.removeEventListener("mousemove",g),x&&cancelAnimationFrame(x)}},[]),d.jsx("canvas",{ref:t,className:fs.canvas,"aria-hidden":"true"})}function eb(){const t=U.useRef(null),e=U.useRef(null);return U.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;document.body.style.cursor="none";const r=i=>{if(t.current&&(t.current.style.transform=`translate(${i.clientX}px, ${i.clientY}px) translate(-50%,-50%)`,t.current.style.opacity="1"),e.current){e.current.style.transform=`translate(${i.clientX}px, ${i.clientY}px) translate(-50%,-50%)`,e.current.style.opacity="1";const s=i.target.closest&&i.target.closest("[data-cursor-hover]");e.current.style.width=s?"54px":"34px",e.current.style.height=s?"54px":"34px"}};return window.addEventListener("mousemove",r),()=>{window.removeEventListener("mousemove",r),document.body.style.cursor=""}},[]),d.jsxs(d.Fragment,{children:[d.jsx("div",{ref:e,className:fs.cursorRing,"aria-hidden":"true"}),d.jsx("div",{ref:t,className:fs.cursorDot,"aria-hidden":"true"})]})}function tb({showParticles:t=!0,showCursorEffect:e=!0,showDecor:n=!0}){const r=Y0();return d.jsxs(d.Fragment,{children:[d.jsx("a",{href:"#main",className:fs.skipLink,children:"Skip to content"}),t&&d.jsx(ZD,{}),n&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:fs.blob1,"aria-hidden":"true"}),d.jsx("div",{className:fs.blob2,"aria-hidden":"true"})]}),!r&&e&&d.jsx(eb,{})]})}const nb="_header_tg23a_1",rb="_container_tg23a_19",ib="_logo_tg23a_28",sb="_crown_tg23a_33",ob="_navLinks_tg23a_38",ab="_navLink_tg23a_38",lb="_active_tg23a_53",cb="_themeBtn_tg23a_57",ub="_resumeBtn_tg23a_69",hb="_mobileControls_tg23a_78",db="_hamburger_tg23a_84",fb="_mobileNav_tg23a_95",pb="_mobileNavLink_tg23a_103",mb="_mobileResumeBtn_tg23a_110",wt={header:nb,container:rb,logo:ib,crown:sb,navLinks:ob,navLink:ab,active:lb,themeBtn:cb,resumeBtn:ub,mobileControls:hb,hamburger:db,mobileNav:fb,mobileNavLink:pb,mobileResumeBtn:mb};function Hn({size:t=24,color:e="currentColor",className:n,style:r}){return d.jsxs("svg",{viewBox:"0 0 120 90",width:t,height:t*.75,className:n,style:{display:"inline-block",verticalAlign:"middle",...r},"aria-hidden":"true",children:[d.jsx("path",{d:"M13,66 C11,50 12,34 16,21 C21,30 26,38 31,44 C39,32 47,20 58,8 C63,21 69,33 76,43 C83,36 90,28 103,23 C107,36 108,51 106,66",fill:"none",stroke:e,strokeWidth:"9",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M14,68 C36,72 82,72 105,68",fill:"none",stroke:e,strokeWidth:"9",strokeLinecap:"round",strokeLinejoin:"round"})]})}const Tc="/assets/cv-ByL4WuGn.pdf",wh=[{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"experience",label:"Experience"},{id:"commonplace",label:"Commonplace"},{id:"contact",label:"Contact"}];function gb(){const[t,e]=U.useState(!1),[n,r]=U.useState("hero"),{theme:i,toggleTheme:s}=Q0(),o=Y0();U.useEffect(()=>{const u=()=>{const f=["hero",...wh.map(g=>g.id)],m=window.scrollY+window.innerHeight/2;for(const g of f){const T=document.getElementById(g);if(T){const{offsetTop:k,offsetHeight:x}=T;if(m>=k&&m<k+x){r(g);break}}}};return window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),U.useEffect(()=>{o||e(!1)},[o]);const l=i==="light"?"☾":"☀",c=()=>e(!1);return d.jsxs("header",{className:wt.header,children:[d.jsxs("div",{className:wt.container,children:[d.jsxs("a",{href:"#main","data-cursor-hover":"true",className:wt.logo,children:["Yuan",d.jsx(Hn,{size:20,color:"var(--dc-yellow)",className:wt.crown})]}),!o&&d.jsxs("nav",{"aria-label":"Main",className:wt.navLinks,children:[wh.map(u=>d.jsx("a",{href:`#${u.id}`,"data-cursor-hover":"true",className:`${wt.navLink} ${n===u.id?wt.active:""}`,children:u.label},u.id)),d.jsx("button",{onClick:s,"aria-label":"Toggle dark mode",className:wt.themeBtn,children:l}),d.jsx("a",{href:Tc,download:"Yuan-Pangan-Resume.pdf","data-cursor-hover":"true",className:wt.resumeBtn,children:"Resume"})]}),o&&d.jsxs("div",{className:wt.mobileControls,children:[d.jsx("button",{onClick:s,"aria-label":"Toggle dark mode",className:wt.themeBtn,children:l}),d.jsx("button",{onClick:()=>e(u=>!u),"aria-label":"Toggle menu",className:wt.hamburger,children:"☰"})]})]}),o&&t&&d.jsxs("nav",{"aria-label":"Mobile",className:wt.mobileNav,children:[wh.map(u=>d.jsx("a",{href:`#${u.id}`,onClick:c,className:wt.mobileNavLink,children:u.label},u.id)),d.jsx("a",{href:Tc,download:"Yuan-Pangan-Resume.pdf",className:wt.mobileResumeBtn,children:"Download Resume"})]})]})}const _b="_container_15k7o_1",yb="_revealed_15k7o_11",vb="_inner_15k7o_16",wb="_eyebrow_15k7o_21",Eb="_headingWrap_15k7o_30",Ib="_headline_15k7o_36",Tb="_underline_15k7o_42",Sb="_sub_15k7o_52",Ab="_email_15k7o_58",Cb="_linkRow_15k7o_67",Pb="_ctaPrimary_15k7o_75",kb="_ctaSecondary_15k7o_76",Vt={container:_b,revealed:yb,inner:vb,eyebrow:wb,headingWrap:Eb,headline:Ib,underline:Tb,sub:Sb,email:Ab,linkRow:Cb,ctaPrimary:Pb,ctaSecondary:kb};function bi(){const t=U.useRef(null),[e,n]=U.useState(!1);return U.useEffect(()=>{const r=t.current;if(!r)return;const i=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&n(!0)})},{threshold:.15});return i.observe(r),()=>i.disconnect()},[]),[t,e]}const Rb={github:"https://github.com/yuanpngn",linkedin:"https://www.linkedin.com/in/yuan-pangan/"};function xb(){const[t,e]=U.useState(Rb),[n,r]=bi();return U.useEffect(()=>{(async()=>{try{const i=await ks(Pe(le,"portfolio","main"));if(i.exists()){const s=i.data();e(o=>{var l,c;return{github:((l=s.social)==null?void 0:l.github)||o.github,linkedin:((c=s.social)==null?void 0:c.linkedin)||o.linkedin}})}}catch(i){console.error("Error loading social links:",i)}})()},[]),d.jsx("section",{id:"contact","aria-label":"Contact",ref:n,className:`${Vt.container} ${r?Vt.revealed:""}`,children:d.jsxs("div",{className:Vt.inner,children:[d.jsx("div",{className:Vt.eyebrow,children:"CONTACT"}),d.jsxs("div",{className:Vt.headingWrap,children:[d.jsx("h2",{className:Vt.headline,children:"Let's build something worth remembering."}),d.jsx("div",{className:Vt.underline})]}),d.jsx("p",{className:Vt.sub,children:"Graduating this October and actively looking for full-time Software Engineer roles — open to backend, full-stack, or XR/mixed-reality work, or just a good conversation about building things."}),d.jsx("a",{href:"mailto:yumiannpangan@gmail.com","data-cursor-hover":"true",className:Vt.email,children:"yumiannpangan@gmail.com"}),d.jsxs("div",{className:Vt.linkRow,children:[d.jsx("a",{href:t.linkedin,target:"_blank",rel:"noopener noreferrer","data-cursor-hover":"true",className:Vt.ctaSecondary,children:"LinkedIn ↗"}),d.jsx("a",{href:t.github,target:"_blank",rel:"noopener noreferrer","data-cursor-hover":"true",className:Vt.ctaSecondary,children:"GitHub ↗"}),d.jsx("a",{href:Tc,download:"Yuan-Pangan-Resume.pdf","data-cursor-hover":"true",className:Vt.ctaPrimary,children:"Download Resume"})]})]})})}const Nb="_container_pfywo_1",Db="_text_pfywo_13",bb="_crown_pfywo_18",Ob="_devBtn_pfywo_22",Vb="_terminalOverlay_pfywo_32",Lb="_terminalCard_pfywo_43",Mb="_terminalLine_pfywo_55",jb="_cursor_pfywo_59",Fb="_ypBlink_pfywo_1",wn={container:Nb,text:Db,crown:bb,devBtn:Ob,terminalOverlay:Vb,terminalCard:Lb,terminalLine:Mb,cursor:jb,ypBlink:Fb};function Zn({children:t}){return Gw.createPortal(t,document.body)}function Ub(){const[t,e]=U.useState(!1),n=new Date().getFullYear();return d.jsxs("section",{id:"footer",className:wn.container,children:[d.jsxs("span",{className:wn.text,children:["© ",n," Yuan Pangan. Built with curiosity"," ",d.jsx(Hn,{size:16,color:"var(--dc-yellow)",className:wn.crown})]}),d.jsx("button",{onClick:()=>e(r=>!r),"aria-label":"Developer console",className:wn.devBtn,children:"</>"}),t&&d.jsx(Zn,{children:d.jsx("div",{className:wn.terminalOverlay,onClick:()=>e(!1),children:d.jsxs("div",{className:wn.terminalCard,onClick:r=>r.stopPropagation(),children:[d.jsx("div",{children:"$ whoami"}),d.jsx("div",{className:wn.terminalLine,children:"yuan — cs student, builder, curious human"}),d.jsx("div",{style:{marginTop:"10px"},children:"$ cat interests.txt"}),d.jsx("div",{className:wn.terminalLine,children:"software engineering, ai/ml, xr, accessibility"}),d.jsx("div",{style:{marginTop:"10px"},children:'$ echo "thanks for checking the console"'}),d.jsxs("div",{className:wn.terminalLine,children:["thanks for checking the console",d.jsx("span",{className:wn.cursor,children:"_"})]})]})})})]})}const $b="_container_oeyfm_1",Bb="_grid_oeyfm_10",zb="_eyebrow_oeyfm_20",Hb="_pulseDot_oeyfm_32",Wb="_ypPulse_oeyfm_1",qb="_name_oeyfm_40",Gb="_tagline_oeyfm_47",Kb="_sub_oeyfm_54",Qb="_ctaRow_oeyfm_61",Yb="_ctaPrimary_oeyfm_67",Xb="_ctaSecondary_oeyfm_68",Jb="_ctaGhost_oeyfm_69",Zb="_scrollCue_oeyfm_91",eO="_ypFloat_oeyfm_1",tO="_cardWrap_oeyfm_98",nO="_tiltCard_oeyfm_103",rO="_heroCrown_oeyfm_109",iO="_chip_oeyfm_116",sO="_chip0_oeyfm_129",oO="_chip1_oeyfm_138",aO="_chip2_oeyfm_147",lO="_chip3_oeyfm_156",cO="_chip4_oeyfm_165",Ze={container:$b,grid:Bb,eyebrow:zb,pulseDot:Hb,ypPulse:Wb,name:qb,tagline:Gb,sub:Kb,ctaRow:Qb,ctaPrimary:Yb,ctaSecondary:Xb,ctaGhost:Jb,scrollCue:Zb,ypFloat:eO,cardWrap:tO,tiltCard:nO,heroCrown:rO,chip:iO,chip0:sO,chip1:oO,chip2:aO,chip3:lO,chip4:cO},uO=["Software Engineering","Automation","Mixed Reality + Unity","Drones","Web Development"];function hO(){const[t,e]=U.useState({name:"Yuan Pangan",title:"Software Engineer — graduating October 2026, open to full-time roles.",description:"Looking for backend, full-stack, or XR/mixed-reality engineering roles — based in Manila, open to remote. Let's talk."}),[n,r]=U.useState({rx:0,ry:0});U.useEffect(()=>{i()},[]);const i=async()=>{try{const l=Pe(le,"portfolio","main"),c=await ks(l);if(c.exists()){const u=c.data();e(f=>{var m,g,T;return{name:((m=u.hero)==null?void 0:m.name)||f.name,title:((g=u.hero)==null?void 0:g.title)||f.title,description:((T=u.hero)==null?void 0:T.description)||f.description}})}}catch(l){console.error("Error loading hero data:",l)}},s=l=>{const c=l.currentTarget.getBoundingClientRect(),u=(l.clientX-c.left)/c.width-.5,f=(l.clientY-c.top)/c.height-.5;r({rx:f*-10,ry:u*14})},o=()=>r({rx:0,ry:0});return d.jsx("section",{id:"hero","aria-label":"Introduction",className:Ze.container,children:d.jsxs("div",{className:Ze.grid,children:[d.jsxs("div",{children:[d.jsxs("div",{className:Ze.eyebrow,children:[d.jsx("span",{className:Ze.pulseDot}),"Open to Work · Grad Oct 2026"]}),d.jsx("h1",{className:Ze.name,children:t.name}),d.jsx("p",{className:Ze.tagline,children:t.title}),d.jsx("p",{className:Ze.sub,children:t.description}),d.jsxs("div",{className:Ze.ctaRow,children:[d.jsx("a",{href:"#projects","data-cursor-hover":"true",className:Ze.ctaPrimary,children:"View Projects"}),d.jsx("a",{href:Tc,download:"Yuan-Pangan-Resume.pdf","data-cursor-hover":"true",className:Ze.ctaSecondary,children:"Download Resume"}),d.jsx("a",{href:"#contact","data-cursor-hover":"true",className:Ze.ctaGhost,children:"Contact Me →"})]}),d.jsx("div",{className:Ze.scrollCue,children:"↓ scroll"})]}),d.jsx("div",{className:Ze.cardWrap,onMouseMove:s,onMouseLeave:o,children:d.jsxs("div",{className:Ze.tiltCard,style:{transform:`perspective(1000px) rotateX(${n.rx}deg) rotateY(${n.ry}deg)`},children:[d.jsx(Hn,{size:56,color:"var(--dc-yellow)",className:Ze.heroCrown}),uO.map((l,c)=>d.jsx("div",{className:`${Ze.chip} ${Ze[`chip${c}`]}`,children:l},l))]})})]})})}const dO="_container_1s9ph_1",fO="_revealed_1s9ph_10",pO="_grid_1s9ph_15",mO="_eyebrow_1s9ph_24",gO="_headingWrap_1s9ph_31",_O="_h2_1s9ph_37",yO="_underline_1s9ph_47",vO="_points_1s9ph_57",wO="_point_1s9ph_57",EO="_number_1s9ph_69",IO="_body_1s9ph_74",TO="_photoWrap_1s9ph_80",SO="_tapeStrip_1s9ph_84",AO="_photoFrame_1s9ph_100",CO="_photo_1s9ph_80",PO="_pinNote_1s9ph_114",ut={container:dO,revealed:fO,grid:pO,eyebrow:mO,headingWrap:gO,h2:_O,underline:yO,points:vO,point:wO,number:EO,body:IO,photoWrap:TO,tapeStrip:SO,photoFrame:AO,photo:CO,pinNote:PO},kO="portfolio_uploads",RO="dxcmdqs3j";async function xO(t){const e=new FormData;e.append("file",t),e.append("upload_preset",kO);const n=await fetch(`https://api.cloudinary.com/v1_1/${RO}/image/upload`,{method:"POST",body:e});if(!n.ok)throw new Error("Cloudinary upload failed");return(await n.json()).secure_url}const NO="_wrap_16zy1_1",DO="_placeholder_16zy1_7",bO="_editButton_16zy1_17",OO="_editButtonCompact_16zy1_36",VO="_fileInput_16zy1_45",ho={wrap:NO,placeholder:DO,editButton:bO,editButtonCompact:OO,fileInput:VO};function Lp({src:t,alt:e,imgClassName:n,onUploaded:r,fallback:i,compact:s=!1}){const{isAdmin:o}=Qr(),[l,c]=U.useState(!1),u=U.useRef(null),f=async m=>{var T;const g=(T=m.target.files)==null?void 0:T[0];if(g){c(!0);try{const k=await xO(g);await r(k)}catch(k){console.error("Error uploading photo:",k),alert("Failed to upload photo. Please try again.")}finally{c(!1),m.target.value=""}}};return!t&&!o&&!i?null:d.jsxs("div",{className:ho.wrap,children:[t?d.jsx("img",{src:t,alt:e,className:n}):i?d.jsx("div",{className:n,children:i}):d.jsx("div",{className:`${n} ${ho.placeholder}`,children:"No photo yet"}),o&&d.jsxs(d.Fragment,{children:[d.jsx("button",{type:"button",className:`${ho.editButton} ${s?ho.editButtonCompact:""}`,onClick:m=>{var g;m.stopPropagation(),(g=u.current)==null||g.click()},disabled:l,title:"Change photo",children:l?"…":s?"📷":"📷 Edit"}),d.jsx("input",{ref:u,type:"file",accept:"image/*",onClick:m=>m.stopPropagation(),onChange:f,className:ho.fileInput})]})]})}const LO="/assets/yuan-CLoNjDCe.png",MO=["I started out chasing the moment code turns into something you can touch — a button that responds, a screen that reacts. That curiosity is why I studied Software Technology at De La Salle University (graduating this October), and why I still can't resist opening dev tools on a page I like.","Since then I've built across the stack — automation tooling at HSBC, production backend work at Manulife, a full-stack inventory system for a startup client — and outside it, into research: a mixed-reality drone system that treats hardware as a performance partner.","What ties it together is a bias for shipping things that hold up under real use — readable code, tested assumptions, and interfaces that work for the person who didn't design them. That's the standard I hold every project to."],jO="Manila, Philippines";function FO(){const[t,e]=U.useState(MO),[n,r]=U.useState(jO),[i,s]=U.useState(LO),[o,l]=bi();U.useEffect(()=>{(async()=>{var u,f,m,g;try{const T=await ks(Pe(le,"portfolio","main"));if(T.exists()){const k=T.data();(f=(u=k.about)==null?void 0:u.paragraphs)!=null&&f.length&&e(k.about.paragraphs),(m=k.about)!=null&&m.location&&r(k.about.location),(g=k.about)!=null&&g.photoUrl&&s(k.about.photoUrl)}}catch(T){console.error("Error loading about data:",T)}})()},[]);const c=async u=>{try{const f=await ks(Pe(le,"portfolio","main")),m=f.exists()?f.data():{};await A0(Pe(le,"portfolio","main"),{...m,about:{...m.about,photoUrl:u}}),s(u)}catch(f){console.error("Error saving photo:",f),alert("Failed to save photo. Please try again.")}};return d.jsx("section",{id:"about","aria-label":"About",ref:o,className:`${ut.container} ${l?ut.revealed:""}`,children:d.jsxs("div",{className:ut.grid,children:[d.jsxs("div",{children:[d.jsxs("div",{className:ut.eyebrow,children:["ABOUT ",d.jsx(Hn,{size:14,color:"var(--dc-red)"})]}),d.jsxs("div",{className:ut.headingWrap,children:[d.jsx("h2",{className:ut.h2,children:"I build things people actually want to use."}),d.jsx("div",{className:ut.underline})]}),d.jsx("div",{className:ut.points,children:t.map((u,f)=>d.jsxs("div",{className:ut.point,children:[d.jsx("div",{className:ut.number,children:String(f+1).padStart(2,"0")}),d.jsx("p",{className:ut.body,children:u})]},f))})]}),d.jsxs("div",{className:ut.photoWrap,children:[d.jsx("div",{className:ut.tapeStrip}),d.jsx("div",{className:ut.photoFrame,children:d.jsx(Lp,{src:i,alt:"Portrait of Yuan Pangan",imgClassName:ut.photo,onUploaded:c})}),d.jsxs("div",{className:ut.pinNote,children:["📍 ",n]})]})]})})}const UO="_container_lv9wa_1",$O="_revealed_lv9wa_10",BO="_inner_lv9wa_15",zO="_eyebrow_lv9wa_20",HO="_headingWrap_lv9wa_27",WO="_h2_lv9wa_33",qO="_underline_lv9wa_43",GO="_addButton_lv9wa_53",KO="_projectsGrid_lv9wa_65",QO="_projectWrapper_lv9wa_73",YO="_pinnedCrown_lv9wa_77",XO="_adminControls_lv9wa_86",JO="_pinnedButton_lv9wa_107",ZO="_editOverlay_lv9wa_112",eV="_editForm_lv9wa_128",tV="_formButtons_lv9wa_171",ht={container:UO,revealed:$O,inner:BO,eyebrow:zO,headingWrap:HO,h2:WO,underline:qO,addButton:GO,projectsGrid:KO,projectWrapper:QO,pinnedCrown:YO,adminControls:XO,pinnedButton:JO,editOverlay:ZO,editForm:eV,formButtons:tV},nV="_card_109km_1",rV="_accentRed_109km_12",iV="_accentBlue_109km_17",sV="_accentYellow_109km_22",oV="_bar_109km_27",aV="_imageArea_109km_31",lV="_image_109km_31",cV="_body_109km_57",uV="_tag_109km_65",hV="_title_109km_86",dV="_description_109km_93",fV="_techStack_109km_99",pV="_techBadge_109km_106",mV="_viewDetails_109km_114",Wt={card:nV,accentRed:rV,accentBlue:iV,accentYellow:sV,bar:oV,imageArea:aV,image:lV,body:cV,tag:uV,title:hV,description:dV,techStack:fV,techBadge:pV,viewDetails:mV},xy=["accentRed","accentBlue","accentYellow"];function gV({project:t,index:e=0,onClick:n,onPhotoUploaded:r}){var o;const{isAdmin:i}=Qr(),s=Wt[xy[e%xy.length]];return d.jsxs("div",{className:`${Wt.card} ${s}`,onClick:n,children:[d.jsx("div",{className:Wt.bar}),(t.imageUrl||i)&&d.jsx("div",{className:Wt.imageArea,onClick:l=>l.stopPropagation(),children:d.jsx(Lp,{src:t.imageUrl,alt:t.title,imgClassName:Wt.image,onUploaded:r})}),d.jsxs("div",{className:Wt.body,children:[t.category&&d.jsx("div",{className:Wt.tag,children:t.category}),d.jsx("h3",{className:Wt.title,children:t.title}),d.jsx("p",{className:Wt.description,children:t.shortDesc}),d.jsx("div",{className:Wt.techStack,children:(o=t.technologies)==null?void 0:o.slice(0,4).map((l,c)=>d.jsx("span",{className:Wt.techBadge,children:l},c))}),d.jsx("button",{className:Wt.viewDetails,"data-cursor-hover":"true",children:"View details →"})]})]})}const _V="_modalOverlay_1anjl_1",yV="_modalCard_1anjl_13",vV="_modalHeader_1anjl_24",wV="_modalTag_1anjl_32",EV="_modalTitle_1anjl_39",IV="_modalClose_1anjl_46",TV="_modalBlurb_1anjl_58",SV="_section_1anjl_64",AV="_modalLabel_1anjl_68",CV="_modalP_1anjl_75",PV="_highlightsList_1anjl_81",kV="_checkmark_1anjl_98",RV="_statusRow_1anjl_104",xV="_techPills_1anjl_111",NV="_techPill_1anjl_111",DV="_linkRow_1anjl_126",bV="_modalLink_1anjl_132",Oe={modalOverlay:_V,modalCard:yV,modalHeader:vV,modalTag:wV,modalTitle:EV,modalClose:IV,modalBlurb:TV,section:SV,modalLabel:AV,modalP:CV,highlightsList:PV,checkmark:kV,statusRow:RV,techPills:xV,techPill:NV,linkRow:DV,modalLink:bV};function OV({project:t,onClose:e}){var r,i;U.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}),[]);const n=s=>{s.target===s.currentTarget&&e()};return d.jsx(Zn,{children:d.jsx("div",{className:Oe.modalOverlay,onClick:n,children:d.jsxs("div",{className:Oe.modalCard,onClick:s=>s.stopPropagation(),children:[d.jsxs("div",{className:Oe.modalHeader,children:[d.jsxs("div",{children:[t.category&&d.jsx("div",{className:Oe.modalTag,children:t.category}),d.jsx("h3",{className:Oe.modalTitle,children:t.title})]}),d.jsx("button",{onClick:e,"aria-label":"Close",className:Oe.modalClose,children:"✕"})]}),d.jsx("p",{className:Oe.modalBlurb,children:t.fullDesc}),((r=t.highlights)==null?void 0:r.length)>0&&d.jsxs("div",{className:Oe.section,children:[d.jsx("div",{className:Oe.modalLabel,children:"KEY HIGHLIGHTS"}),d.jsx("ul",{className:Oe.highlightsList,children:t.highlights.map((s,o)=>d.jsxs("li",{children:[d.jsx("span",{className:Oe.checkmark,children:"✓"}),s]},o))})]}),(t.status||t.category)&&d.jsxs("div",{className:Oe.statusRow,children:[t.status&&d.jsxs("div",{children:[d.jsx("div",{className:Oe.modalLabel,children:"STATUS"}),d.jsx("p",{className:Oe.modalP,children:t.status})]}),t.category&&d.jsxs("div",{children:[d.jsx("div",{className:Oe.modalLabel,children:"CATEGORY"}),d.jsx("p",{className:Oe.modalP,children:t.category})]})]}),((i=t.technologies)==null?void 0:i.length)>0&&d.jsx("div",{className:Oe.techPills,children:t.technologies.map((s,o)=>d.jsx("span",{className:Oe.techPill,children:s},o))}),d.jsxs("div",{className:Oe.linkRow,children:[t.github&&d.jsx("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:Oe.modalLink,children:"GitHub ↗"}),t.conferencePaper&&d.jsx("a",{href:t.conferencePaper,target:"_blank",rel:"noopener noreferrer",className:Oe.modalLink,children:"Conference Paper ↗"})]})]})})})}const VV="_wrap_r3oss_1",LV="_eyebrow_r3oss_5",MV="_headingWrap_r3oss_12",jV="_h3_r3oss_18",FV="_underline_r3oss_28",UV="_card_r3oss_38",$V="_fallback_r3oss_45",BV="_scrollArea_r3oss_51",zV="_graph_r3oss_56",HV="_months_r3oss_63",WV="_monthLabel_r3oss_69",qV="_weeks_r3oss_75",GV="_week_r3oss_75",KV="_cell_r3oss_86",QV="_cellEmpty_r3oss_87",YV="_level0_r3oss_101",XV="_level1_r3oss_106",JV="_level2_r3oss_110",ZV="_level3_r3oss_114",eL="_level4_r3oss_118",tL="_footer_r3oss_122",nL="_total_r3oss_132",rL="_legend_r3oss_137",iL="_link_r3oss_151",Se={wrap:VV,eyebrow:LV,headingWrap:MV,h3:jV,underline:FV,card:UV,fallback:$V,scrollArea:BV,graph:zV,months:HV,monthLabel:WV,weeks:qV,week:GV,cell:KV,cellEmpty:QV,level0:YV,level1:XV,level2:JV,level3:ZV,level4:eL,footer:tL,total:nL,legend:rL,link:iL},Sc="yuanpngn",Ny=["level0","level1","level2","level3","level4"];function sL(t){if(!t)return Sc;const e=t.match(/github\.com\/([^/?#]+)/i);return e?e[1]:Sc}function oL(t){const e=[];let n=[];return t.forEach((r,i)=>{const s=new Date(`${r.date}T00:00:00`).getDay();if(i===0)for(let o=0;o<s;o++)n.push(null);n.push(r),(s===6||i===t.length-1)&&(e.push(n),n=[])}),e}const aL=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function lL(){const[t,e]=U.useState(Sc),[n,r]=U.useState(null),[i,s]=U.useState(null),[o,l]=U.useState(!1);U.useEffect(()=>{(async()=>{try{const u=await fetch(`https://github-contributions-api.jogruber.de/v4/${Sc}?y=last`);if(!u.ok)throw new Error("bad response");const f=await u.json();r(oL(f.contributions));const m=Object.values(f.total||{});s(m.length?m[m.length-1]:null)}catch(u){console.error("Error loading GitHub contributions:",u),l(!0)}})(),(async()=>{var u;try{const f=await ks(Pe(le,"portfolio","main"));f.exists()&&e(sL((u=f.data().social)==null?void 0:u.github))}catch(f){console.error("Error loading social links:",f)}})()},[]);const c=n?n.reduce((u,f,m)=>{const g=f.find(k=>k);if(!g)return u;const T=new Date(`${g.date}T00:00:00`).getMonth();return(u.length===0||u[u.length-1].month!==T)&&u.push({month:T,col:m}),u},[]):[];return d.jsxs("div",{className:Se.wrap,children:[d.jsx("div",{className:Se.eyebrow,children:"GITHUB ACTIVITY"}),d.jsxs("div",{className:Se.headingWrap,children:[d.jsx("h3",{className:Se.h3,children:"Code, most days."}),d.jsx("div",{className:Se.underline})]}),d.jsxs("div",{className:Se.card,children:[o?d.jsx("p",{className:Se.fallback,children:"Couldn't load the activity graph right now — check out the commits directly."}):n?d.jsx("div",{className:Se.scrollArea,children:d.jsxs("div",{className:Se.graph,children:[d.jsx("div",{className:Se.months,style:{gridTemplateColumns:`repeat(${n.length}, 14px)`},children:c.map(({month:u,col:f})=>d.jsx("span",{className:Se.monthLabel,style:{gridColumnStart:f+1},children:aL[u]},f))}),d.jsx("div",{className:Se.weeks,children:n.map((u,f)=>d.jsx("div",{className:Se.week,children:u.map((m,g)=>m?d.jsx("div",{className:`${Se.cell} ${Se[Ny[m.level]||"level0"]}`,title:`${m.count} contribution${m.count===1?"":"s"} on ${m.date}`},g):d.jsx("div",{className:Se.cellEmpty},g))},f))})]})}):d.jsx("p",{className:Se.fallback,children:"Loading activity…"}),d.jsxs("div",{className:Se.footer,children:[i!==null&&d.jsxs("span",{className:Se.total,children:[i," contributions in the last year"]}),!o&&n&&d.jsxs("div",{className:Se.legend,children:[d.jsx("span",{children:"Less"}),Ny.map(u=>d.jsx("div",{className:`${Se.cell} ${Se[u]}`},u)),d.jsx("span",{children:"More"})]}),d.jsx("a",{href:`https://github.com/${t}`,target:"_blank",rel:"noopener noreferrer","data-cursor-hover":"true",className:Se.link,children:"View GitHub →"})]})]})]})}function cL(){const{isAdmin:t}=Qr(),[e,n]=U.useState(null),[r,i]=U.useState([]),[s,o]=U.useState(!1),[l,c]=U.useState(null),[u,f]=bi();U.useEffect(()=>{m()},[]);const m=async()=>{try{const E=(await Ca(On(le,"projects"))).docs.map(R=>({...R.data(),firestoreId:R.id}));E.sort((R,O)=>R.isPinned&&!O.isPinned?-1:!R.isPinned&&O.isPinned?1:0),i(E)}catch(y){console.error("Error loading projects:",y),i([])}},g=async y=>{try{await zn(Pe(le,"projects",y.firestoreId),{isPinned:!y.isPinned}),await m()}catch(E){console.error("Error toggling pin:",E),alert("Failed to toggle pin")}},T=async(y,E)=>{try{await zn(Pe(le,"projects",y.firestoreId),{imageUrl:E}),await m()}catch(R){console.error("Error saving project photo:",R),alert("Failed to save photo. Please try again.")}},k=()=>{c({title:"",shortDesc:"",fullDesc:"",technologies:[],github:"",highlights:[],category:"",status:"",conferencePaper:"",isPinned:!1}),o(!0)},x=y=>{c(y),o(!0)},b=async y=>{try{y.firestoreId?await zn(Pe(le,"projects",y.firestoreId),y):await ka(On(le,"projects"),y),await m(),o(!1),c(null)}catch(E){console.error("Error saving project:",E),alert("Failed to save project")}},w=async y=>{if(window.confirm("Are you sure you want to delete this project?"))try{await Pa(Pe(le,"projects",y)),await m()}catch(E){console.error("Error deleting project:",E),alert("Failed to delete project")}};return d.jsxs("section",{id:"projects","aria-label":"Projects",ref:u,className:`${ht.container} ${f?ht.revealed:""}`,children:[d.jsxs("div",{className:ht.inner,children:[d.jsxs("div",{className:ht.eyebrow,children:["PROJECTS ",d.jsx(Hn,{size:14,color:"var(--dc-red)"})]}),d.jsxs("div",{className:ht.headingWrap,children:[d.jsx("h2",{className:ht.h2,children:"Selected work."}),d.jsx("div",{className:ht.underline})]}),t&&d.jsx("button",{className:ht.addButton,onClick:k,children:"+ Add Project"}),d.jsx("div",{className:ht.projectsGrid,children:r.map((y,E)=>d.jsxs("div",{className:ht.projectWrapper,"data-pinned":y.isPinned||!1,children:[y.isPinned&&d.jsx(Hn,{size:30,color:"var(--dc-yellow)",className:ht.pinnedCrown}),d.jsx(gV,{project:y,index:E,onClick:()=>n(y),onPhotoUploaded:R=>T(y,R)}),t&&d.jsxs("div",{className:ht.adminControls,children:[d.jsx("button",{onClick:()=>x(y),children:"✏️ Edit"}),y.firestoreId&&d.jsxs(d.Fragment,{children:[d.jsxs("button",{onClick:()=>g(y),className:y.isPinned?ht.pinnedButton:"",title:y.isPinned?"Unpin project":"Pin project",children:[d.jsx(Hn,{size:13,color:"currentColor"})," ",y.isPinned?"Pinned":"Pin"]}),d.jsx("button",{onClick:()=>w(y.firestoreId),children:"🗑️ Delete"})]})]})]},y.id||y.firestoreId))}),d.jsx(lL,{})]}),e&&d.jsx(OV,{project:e,onClose:()=>n(null)}),s&&d.jsx(uL,{project:l,onSave:b,onCancel:()=>{o(!1),c(null)}})]})}function uL({project:t,onSave:e,onCancel:n}){var c,u;const[r,i]=U.useState({...t,technologies:t.technologies||[],highlights:t.highlights||[]}),s=(f,m)=>{i(g=>({...g,[f]:m}))},o=(f,m)=>{const g=m.split(`
`).filter(T=>T.trim());i(T=>({...T,[f]:g}))},l=f=>{f.preventDefault(),e(r)};return d.jsx(Zn,{children:d.jsx("div",{className:ht.editOverlay,onClick:n,children:d.jsxs("div",{className:ht.editForm,onClick:f=>f.stopPropagation(),children:[d.jsx("h3",{children:t.firestoreId?"Edit Project":"Add New Project"}),d.jsxs("form",{onSubmit:l,children:[d.jsxs("label",{children:["Title:",d.jsx("input",{type:"text",value:r.title,onChange:f=>s("title",f.target.value),required:!0})]}),d.jsxs("label",{children:["Short Description:",d.jsx("input",{type:"text",value:r.shortDesc,onChange:f=>s("shortDesc",f.target.value),required:!0})]}),d.jsxs("label",{children:["Full Description:",d.jsx("textarea",{value:r.fullDesc,onChange:f=>s("fullDesc",f.target.value),rows:4,required:!0})]}),d.jsxs("label",{children:["Technologies (one per line):",d.jsx("textarea",{value:((c=r.technologies)==null?void 0:c.join(`
`))||"",onChange:f=>o("technologies",f.target.value),rows:3})]}),d.jsxs("label",{children:["GitHub URL:",d.jsx("input",{type:"url",value:r.github,onChange:f=>s("github",f.target.value)})]}),d.jsxs("label",{children:["Highlights (one per line):",d.jsx("textarea",{value:((u=r.highlights)==null?void 0:u.join(`
`))||"",onChange:f=>o("highlights",f.target.value),rows:4})]}),d.jsxs("label",{children:["Category:",d.jsx("input",{type:"text",value:r.category,onChange:f=>s("category",f.target.value)})]}),d.jsxs("label",{children:["Status:",d.jsx("input",{type:"text",value:r.status,onChange:f=>s("status",f.target.value)})]}),d.jsxs("label",{children:["Attachment URL (Conference Paper):",d.jsx("input",{type:"url",value:r.conferencePaper||"",onChange:f=>s("conferencePaper",f.target.value)})]}),d.jsxs("div",{className:ht.formButtons,children:[d.jsx("button",{type:"submit",children:"Save Project"}),d.jsx("button",{type:"button",onClick:n,children:"Cancel"})]})]})]})})})}const hL="_container_xlxze_1",dL="_revealed_xlxze_11",fL="_inner_xlxze_16",pL="_eyebrow_xlxze_21",mL="_headingWrap_xlxze_28",gL="_h2_xlxze_34",_L="_underline_xlxze_44",yL="_addButton_xlxze_54",vL="_categoriesList_xlxze_66",wL="_categoryGroup_xlxze_73",EL="_categoryHeader_xlxze_79",IL="_categoryLabel_xlxze_85",TL="_accentRed_xlxze_94",SL="_accentBlue_xlxze_98",AL="_accentYellow_xlxze_102",CL="_categoryAdmin_xlxze_107",PL="_chipRow_xlxze_125",kL="_chip_xlxze_125",RL="_chipLabel_xlxze_143",xL="_editOverlay_xlxze_148",NL="_editForm_xlxze_164",DL="_formButtons_xlxze_207",Fe={container:hL,revealed:dL,inner:fL,eyebrow:pL,headingWrap:mL,h2:gL,underline:_L,addButton:yL,categoriesList:vL,categoryGroup:wL,categoryHeader:EL,categoryLabel:IL,accentRed:TL,accentBlue:SL,accentYellow:AL,categoryAdmin:CL,chipRow:PL,chip:kL,chipLabel:RL,editOverlay:xL,editForm:NL,formButtons:DL},Dy=["accentRed","accentBlue","accentYellow"];function bL(){const{isAdmin:t}=Qr(),[e,n]=U.useState({}),[r,i]=U.useState(!1),[s,o]=U.useState(""),[l,c]=U.useState(""),[u,f]=bi();U.useEffect(()=>{m()},[]);const m=async()=>{try{const w=await Ca(On(le,"skills")),y={};w.docs.forEach(E=>{y[E.id]=E.data().skills||[]}),n(y)}catch(w){console.error("Error loading skills:",w)}},g=w=>{o(w),c(e[w].join(`
`)),i(!0)},T=()=>{o(""),c(""),i(!0)},k=async w=>{w.preventDefault();const y=l.split(`
`).filter(R=>R.trim()),E=s||w.target.categoryName.value;try{await zn(Pe(le,"skills",E),{skills:y}),await m(),i(!1)}catch{try{await ka(On(le,"skills"),{skills:y}),await m(),i(!1)}catch(O){console.error("Error saving category:",O)}}},x=async w=>{if(window.confirm(`Delete ${w} category?`))try{await Pa(Pe(le,"skills",w)),await m()}catch(y){console.error("Error deleting category:",y)}},b=Object.keys(e);return d.jsxs("section",{id:"skills","aria-label":"Skills",ref:u,className:`${Fe.container} ${f?Fe.revealed:""}`,children:[d.jsxs("div",{className:Fe.inner,children:[d.jsx("div",{className:Fe.eyebrow,children:"SKILLS"}),d.jsxs("div",{className:Fe.headingWrap,children:[d.jsx("h2",{className:Fe.h2,children:"What I work with."}),d.jsx("div",{className:Fe.underline})]}),t&&d.jsx("button",{className:Fe.addButton,onClick:T,children:"+ Add Category"}),d.jsx("div",{className:Fe.categoriesList,children:b.map((w,y)=>{const E=Fe[Dy[y%Dy.length]];return d.jsxs("div",{className:Fe.categoryGroup,children:[d.jsxs("div",{className:Fe.categoryHeader,children:[d.jsx("h3",{className:`${Fe.categoryLabel} ${E}`,children:w}),t&&d.jsxs("div",{className:Fe.categoryAdmin,children:[d.jsx("button",{onClick:()=>g(w),title:"Edit category",children:"✏️"}),d.jsx("button",{onClick:()=>x(w),title:"Delete category",children:"🗑️"})]})]}),d.jsx("div",{className:Fe.chipRow,children:e[w].map(R=>d.jsx("div",{className:Fe.chip,children:d.jsx("span",{className:Fe.chipLabel,children:R})},R))})]},w)})})]}),r&&d.jsx(Zn,{children:d.jsx("div",{className:Fe.editOverlay,onClick:()=>i(!1),children:d.jsxs("div",{className:Fe.editForm,onClick:w=>w.stopPropagation(),children:[d.jsx("h3",{children:s?"Edit Category":"Add New Category"}),d.jsxs("form",{onSubmit:k,children:[!s&&d.jsxs("label",{children:["Category Name:",d.jsx("input",{type:"text",name:"categoryName",required:!0})]}),d.jsxs("label",{children:["Skills (one per line):",d.jsx("textarea",{value:l,onChange:w=>c(w.target.value),rows:8,required:!0})]}),d.jsxs("div",{className:Fe.formButtons,children:[d.jsx("button",{type:"submit",children:"Save"}),d.jsx("button",{type:"button",onClick:()=>i(!1),children:"Cancel"})]})]})]})})})]})}const OL="_container_1tvur_1",VL="_revealed_1tvur_11",LL="_inner_1tvur_16",ML="_eyebrow_1tvur_21",jL="_headingWrap_1tvur_28",FL="_h2_1tvur_34",UL="_underline_1tvur_44",$L="_addButton_1tvur_54",BL="_timelineWrap_1tvur_66",zL="_timelineItem_1tvur_76",HL="_timelineDot_1tvur_84",WL="_itemBody_1tvur_95",qL="_period_1tvur_100",GL="_role_1tvur_106",KL="_org_1tvur_113",QL="_bulletList_1tvur_119",YL="_bullet_1tvur_119",XL="_thumb_1tvur_132",JL="_thumbImg_1tvur_146",ZL="_thumbTiltA_1tvur_156",eM="_thumbTiltB_1tvur_160",tM="_adminControls_1tvur_164",nM="_editOverlay_1tvur_180",rM="_editForm_1tvur_196",iM="_formButtons_1tvur_241",Ee={container:OL,revealed:VL,inner:LL,eyebrow:ML,headingWrap:jL,h2:FL,underline:UL,addButton:$L,timelineWrap:BL,timelineItem:zL,timelineDot:HL,itemBody:WL,period:qL,role:GL,org:KL,bulletList:QL,bullet:YL,thumb:XL,thumbImg:JL,thumbTiltA:ZL,thumbTiltB:eM,adminControls:tM,editOverlay:nM,editForm:rM,formButtons:iM};function sM(){const{isAdmin:t}=Qr(),[e,n]=U.useState([]),[r,i]=U.useState(!1),[s,o]=U.useState(null),[l,c]=bi();U.useEffect(()=>{f()},[]);const u=b=>{var M;const w=b.match(/(\w+\s+)?(\d{4})/);if(!w)return 0;const y=parseInt(w[2]),E=(M=w[1])==null?void 0:M.trim(),O=E&&{January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12,Jan:1,Feb:2,Mar:3,Apr:4,Jun:6,Jul:7,Aug:8,Sep:9,Sept:9,Oct:10,Nov:11,Dec:12}[E]||1;return y*100+O},f=async()=>{try{const w=(await Ca(On(le,"experiences"))).docs.map(y=>({...y.data(),firestoreId:y.id}));w.sort((y,E)=>u(E.period)-u(y.period)),n(w)}catch(b){console.error("Error loading experiences:",b),n([])}},m=()=>{o({title:"",company:"",period:"",location:"",description:[],icon:"💼",type:"work"}),i(!0)},g=b=>{o(b),i(!0)},T=async b=>{try{b.firestoreId?await zn(Pe(le,"experiences",b.firestoreId),b):await ka(On(le,"experiences"),b),await f(),i(!1),o(null)}catch(w){console.error("Error saving experience:",w),alert("Failed to save experience")}},k=async b=>{if(window.confirm("Delete this experience?"))try{await Pa(Pe(le,"experiences",b)),await f()}catch(w){console.error("Error deleting experience:",w)}},x=async(b,w)=>{try{await zn(Pe(le,"experiences",b.firestoreId),{photoUrl:w}),await f()}catch(y){console.error("Error saving experience photo:",y),alert("Failed to save photo. Please try again.")}};return d.jsxs("section",{id:"experience","aria-label":"Experience",ref:l,className:`${Ee.container} ${c?Ee.revealed:""}`,children:[d.jsxs("div",{className:Ee.inner,children:[d.jsx("div",{className:Ee.eyebrow,children:"EXPERIENCE"}),d.jsxs("div",{className:Ee.headingWrap,children:[d.jsx("h2",{className:Ee.h2,children:"Where I've worked."}),d.jsx("div",{className:Ee.underline})]}),t&&d.jsx("button",{className:Ee.addButton,onClick:m,children:"+ Add Experience"}),d.jsx("div",{className:Ee.timelineWrap,children:e.map((b,w)=>{var y;return d.jsxs("div",{className:Ee.timelineItem,children:[d.jsx("div",{className:Ee.timelineDot}),d.jsxs("div",{className:Ee.itemBody,children:[d.jsx("div",{className:Ee.period,children:b.period}),d.jsx("h3",{className:Ee.role,children:b.title}),d.jsxs("div",{className:Ee.org,children:[b.company,b.location?` · ${b.location}`:""]}),d.jsx("ul",{className:Ee.bulletList,children:(y=b.description)==null?void 0:y.map((E,R)=>d.jsx("li",{className:Ee.bullet,children:E},R))}),t&&d.jsxs("div",{className:Ee.adminControls,children:[d.jsx("button",{onClick:()=>g(b),children:"✏️ Edit"}),b.firestoreId&&d.jsx("button",{onClick:()=>k(b.firestoreId),children:"🗑️ Delete"})]})]}),d.jsx("div",{className:`${Ee.thumb} ${w%2===0?Ee.thumbTiltA:Ee.thumbTiltB}`,children:d.jsx(Lp,{src:b.photoUrl,alt:b.title,imgClassName:Ee.thumbImg,fallback:b.icon,compact:!0,onUploaded:E=>x(b,E)})})]},b.id||b.firestoreId)})})]}),r&&d.jsx(oM,{experience:s,onSave:T,onCancel:()=>{i(!1),o(null)}})]})}function oM({experience:t,onSave:e,onCancel:n}){var c;const[r,i]=U.useState({...t,description:t.description||[]}),s=(u,f)=>{i(m=>({...m,[u]:f}))},o=u=>{const f=u.split(`
`).filter(m=>m.trim());i(m=>({...m,description:f}))};Array.isArray(r.description)||(r.description=[]);const l=u=>{u.preventDefault(),e(r)};return d.jsx(Zn,{children:d.jsx("div",{className:Ee.editOverlay,onClick:n,children:d.jsxs("div",{className:Ee.editForm,onClick:u=>u.stopPropagation(),children:[d.jsx("h3",{children:t.firestoreId?"Edit Experience":"Add New Experience"}),d.jsxs("form",{onSubmit:l,children:[d.jsxs("label",{children:["Title:",d.jsx("input",{type:"text",value:r.title,onChange:u=>s("title",u.target.value),required:!0})]}),d.jsxs("label",{children:["Company/Organization:",d.jsx("input",{type:"text",value:r.company,onChange:u=>s("company",u.target.value),required:!0})]}),d.jsxs("label",{children:["Period:",d.jsx("input",{type:"text",value:r.period,onChange:u=>s("period",u.target.value),placeholder:"e.g., January 2024 – Present",required:!0})]}),d.jsxs("label",{children:["Location:",d.jsx("input",{type:"text",value:r.location,onChange:u=>s("location",u.target.value),required:!0})]}),d.jsxs("label",{children:["Icon (emoji):",d.jsx("input",{type:"text",value:r.icon,onChange:u=>s("icon",u.target.value),placeholder:"💼",required:!0})]}),d.jsxs("label",{children:["Type:",d.jsxs("select",{value:r.type,onChange:u=>s("type",u.target.value),children:[d.jsx("option",{value:"work",children:"Work"}),d.jsx("option",{value:"leadership",children:"Leadership"})]})]}),d.jsxs("label",{children:["Description (one point per line):",d.jsx("textarea",{value:((c=r.description)==null?void 0:c.join(`
`))||"",onChange:u=>o(u.target.value),rows:6,required:!0})]}),d.jsxs("div",{className:Ee.formButtons,children:[d.jsx("button",{type:"submit",children:"Save Experience"}),d.jsx("button",{type:"button",onClick:n,children:"Cancel"})]})]})]})})})}const aM="_container_1y7di_1",lM="_revealed_1y7di_11",cM="_inner_1y7di_16",uM="_eyebrow_1y7di_21",hM="_headingWrap_1y7di_28",dM="_h2_1y7di_34",fM="_underline_1y7di_44",pM="_addButton_1y7di_54",mM="_grid_1y7di_66",gM="_card_1y7di_74",_M="_dashed_1y7di_82",yM="_accentred_1y7di_86",vM="_accentblue_1y7di_91",wM="_accentyellow_1y7di_96",EM="_title_1y7di_101",IM="_org_1y7di_108",TM="_note_1y7di_114",SM="_adminControls_1y7di_120",AM="_editOverlay_1y7di_136",CM="_editForm_1y7di_152",PM="_formButtons_1y7di_195",We={container:aM,revealed:lM,inner:cM,eyebrow:uM,headingWrap:hM,h2:dM,underline:fM,addButton:pM,grid:mM,card:gM,dashed:_M,accentred:yM,accentblue:vM,accentyellow:wM,title:EM,org:IM,note:TM,adminControls:SM,editOverlay:AM,editForm:CM,formButtons:PM};function kM(){const{isAdmin:t}=Qr(),[e,n]=U.useState([]),[r,i]=U.useState(!1),[s,o]=U.useState(null),[l,c]=bi();U.useEffect(()=>{u()},[]);const u=async()=>{try{const b=(await Ca(On(le,"achievements"))).docs.map(w=>({...w.data(),firestoreId:w.id}));n(b)}catch(x){console.error("Error loading achievements:",x),n([])}},f=()=>{o({title:"",org:"",note:"",dashed:!1}),i(!0)},m=x=>{o(x),i(!0)},g=async x=>{try{x.firestoreId?await zn(Pe(le,"achievements",x.firestoreId),x):await ka(On(le,"achievements"),x),await u(),i(!1),o(null)}catch(b){console.error("Error saving achievement:",b),alert("Failed to save achievement")}},T=async x=>{if(window.confirm("Delete this achievement?"))try{await Pa(Pe(le,"achievements",x)),await u()}catch(b){console.error("Error deleting achievement:",b)}},k=["red","blue","yellow","red"];return d.jsxs("section",{id:"achievements","aria-label":"Achievements",ref:l,className:`${We.container} ${c?We.revealed:""}`,children:[d.jsxs("div",{className:We.inner,children:[d.jsxs("div",{className:We.eyebrow,children:["ACHIEVEMENTS ",d.jsx(Hn,{size:14,color:"var(--dc-red)"})]}),d.jsxs("div",{className:We.headingWrap,children:[d.jsx("h2",{className:We.h2,children:"Recognition along the way."}),d.jsx("div",{className:We.underline})]}),t&&d.jsx("button",{className:We.addButton,onClick:f,children:"+ Add Achievement"}),d.jsx("div",{className:We.grid,children:e.map((x,b)=>d.jsxs("div",{className:`${We.card} ${x.dashed?We.dashed:""} ${We["accent"+k[b%k.length]]}`,children:[d.jsx("h3",{className:We.title,children:x.title}),d.jsx("div",{className:We.org,children:x.org}),d.jsx("p",{className:We.note,children:x.note}),t&&d.jsxs("div",{className:We.adminControls,children:[d.jsx("button",{onClick:()=>m(x),children:"✏️ Edit"}),d.jsx("button",{onClick:()=>T(x.firestoreId),children:"🗑️ Delete"})]})]},x.id||x.firestoreId))})]}),r&&d.jsx(RM,{item:s,onSave:g,onCancel:()=>{i(!1),o(null)}})]})}function RM({item:t,onSave:e,onCancel:n}){const[r,i]=U.useState({...t}),s=(l,c)=>i(u=>({...u,[l]:c})),o=l=>{l.preventDefault(),e(r)};return d.jsx(Zn,{children:d.jsx("div",{className:We.editOverlay,onClick:n,children:d.jsxs("div",{className:We.editForm,onClick:l=>l.stopPropagation(),children:[d.jsx("h3",{children:t.firestoreId?"Edit Achievement":"Add Achievement"}),d.jsxs("form",{onSubmit:o,children:[d.jsxs("label",{children:["Title:",d.jsx("input",{type:"text",value:r.title,onChange:l=>s("title",l.target.value),required:!0})]}),d.jsxs("label",{children:["Organization:",d.jsx("input",{type:"text",value:r.org,onChange:l=>s("org",l.target.value),required:!0})]}),d.jsxs("label",{children:["Note:",d.jsx("textarea",{value:r.note,onChange:l=>s("note",l.target.value),rows:3,required:!0})]}),d.jsxs("label",{children:[d.jsx("input",{type:"checkbox",checked:!!r.dashed,onChange:l=>s("dashed",l.target.checked),style:{width:"auto",display:"inline-block",marginRight:"8px"}}),"Dashed border (mark as in-progress / TBD)"]}),d.jsxs("div",{className:We.formButtons,children:[d.jsx("button",{type:"submit",children:"Save"}),d.jsx("button",{type:"button",onClick:n,children:"Cancel"})]})]})]})})})}const xM="_container_1ujal_1",NM="_collapsed_1ujal_7",DM="_expanded_1ujal_11",bM="_toggleButton_1ujal_15",OM="_toggleIcon_1ujal_35",VM="_toggleText_1ujal_40",LM="_toggleEmoji_1ujal_45",MM="_content_1ujal_49",jM="_expandContent_1ujal_1",FM="_header_1ujal_67",UM="_eyebrow_1ujal_72",$M="_headingWrap_1ujal_83",BM="_h2_1ujal_89",zM="_underline_1ujal_99",HM="_subtitle_1ujal_109",WM="_addButton_1ujal_116",qM="_categoryFilter_1ujal_128",GM="_categoryButton_1ujal_136",KM="_active_1ujal_149",QM="_categoryIcon_1ujal_154",YM="_entriesGrid_1ujal_158",XM="_emptyState_1ujal_164",JM="_emptyIcon_1ujal_170",Ae={container:xM,collapsed:NM,expanded:DM,toggleButton:bM,toggleIcon:OM,toggleText:VM,toggleEmoji:LM,content:MM,expandContent:jM,header:FM,eyebrow:UM,headingWrap:$M,h2:BM,underline:zM,subtitle:HM,addButton:WM,categoryFilter:qM,categoryButton:GM,active:KM,categoryIcon:QM,entriesGrid:YM,emptyState:XM,emptyIcon:JM},ZM="_formOverlay_p2odx_1",e4="_formContainer_p2odx_14",t4="_formHeader_p2odx_25",n4="_closeButton_p2odx_39",r4="_form_p2odx_1",i4="_formGroup_p2odx_60",s4="_input_p2odx_73",o4="_textarea_p2odx_74",a4="_select_p2odx_75",l4="_buttonGroup_p2odx_112",c4="_submitButton_p2odx_118",u4="_cancelButton_p2odx_119",h4="_fileInput_p2odx_145",d4="_fileInputLabel_p2odx_149",f4="_fileInfo_p2odx_163",p4="_imagePreviewGrid_p2odx_169",m4="_imagePreview_p2odx_169",g4="_removeImageButton_p2odx_190",ve={formOverlay:ZM,formContainer:e4,formHeader:t4,closeButton:n4,form:r4,formGroup:i4,input:s4,textarea:o4,select:a4,buttonGroup:l4,submitButton:c4,cancelButton:u4,fileInput:h4,fileInputLabel:d4,fileInfo:f4,imagePreviewGrid:p4,imagePreview:m4,removeImageButton:g4};function _4({entry:t,categories:e,onSubmit:n,onCancel:r}){var y,E;const[i,s]=U.useState({title:(t==null?void 0:t.title)||"",content:(t==null?void 0:t.content)||"",category:(t==null?void 0:t.category)||((y=e[0])==null?void 0:y.id)||"",source:(t==null?void 0:t.source)||"",tags:((E=t==null?void 0:t.tags)==null?void 0:E.join(", "))||"",images:(t==null?void 0:t.images)||[]}),[o,l]=U.useState(!1),[c,u]=U.useState([]),f="portfolio_uploads",m="dxcmdqs3j",g=R=>{const O=Array.from(R.target.files);u(O)},T=async R=>{const O=new FormData;O.append("file",R),O.append("upload_preset",f);try{const I=await(await fetch(`https://api.cloudinary.com/v1_1/${m}/image/upload`,{method:"POST",body:O})).json();return{url:I.secure_url,publicId:I.public_id}}catch(M){throw console.error("Error uploading to Cloudinary:",M),M}},k=async()=>{if(c.length===0)return[];l(!0);const R=c.map(O=>T(O));try{const O=await Promise.all(R);return l(!1),O}catch(O){return console.error("Error uploading images:",O),l(!1),alert("Failed to upload images. Please try again."),[]}},x=R=>{s(O=>({...O,images:O.images.filter((M,I)=>I!==R)}))},b=async R=>{R.preventDefault();const O=await k(),M={...i,images:[...i.images,...O],tags:i.tags.split(",").map(I=>I.trim()).filter(I=>I.length>0)};n(t?{...t,...M}:M)},w=R=>{const{name:O,value:M}=R.target;s(I=>({...I,[O]:M}))};return d.jsx(Zn,{children:d.jsx("div",{className:ve.formOverlay,onClick:r,children:d.jsxs("div",{className:ve.formContainer,onClick:R=>R.stopPropagation(),children:[d.jsxs("div",{className:ve.formHeader,children:[d.jsx("h3",{children:t?"Edit Entry":"New Entry"}),d.jsx("button",{className:ve.closeButton,onClick:r,children:"✕"})]}),d.jsxs("form",{onSubmit:b,className:ve.form,children:[d.jsxs("div",{className:ve.formGroup,children:[d.jsx("label",{children:"Category"}),d.jsx("select",{name:"category",value:i.category,onChange:w,required:!0,className:ve.select,children:e.map(R=>d.jsxs("option",{value:R.id,children:[R.icon," ",R.name]},R.id))})]}),d.jsxs("div",{className:ve.formGroup,children:[d.jsx("label",{children:"Title"}),d.jsx("input",{type:"text",name:"title",value:i.title,onChange:w,placeholder:"Entry title...",required:!0,className:ve.input})]}),d.jsxs("div",{className:ve.formGroup,children:[d.jsx("label",{children:"Content"}),d.jsx("textarea",{name:"content",value:i.content,onChange:w,placeholder:"Write your entry here...",required:!0,rows:8,className:ve.textarea})]}),d.jsxs("div",{className:ve.formGroup,children:[d.jsx("label",{children:"Source (Optional)"}),d.jsx("input",{type:"text",name:"source",value:i.source,onChange:w,placeholder:"e.g., Book title, Article URL, Movie name...",className:ve.input})]}),d.jsxs("div",{className:ve.formGroup,children:[d.jsx("label",{children:"Tags (Optional)"}),d.jsx("input",{type:"text",name:"tags",value:i.tags,onChange:w,placeholder:"Comma separated tags...",className:ve.input})]}),d.jsxs("div",{className:ve.formGroup,children:[d.jsx("label",{children:"Images (Optional)"}),i.images.length>0&&d.jsx("div",{className:ve.imagePreviewGrid,children:i.images.map((R,O)=>d.jsxs("div",{className:ve.imagePreview,children:[d.jsx("img",{src:R.url,alt:`Preview ${O+1}`}),d.jsx("button",{type:"button",className:ve.removeImageButton,onClick:()=>x(O),children:"✕"})]},O))}),d.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:g,className:ve.fileInput,id:"imageUpload"}),d.jsxs("label",{htmlFor:"imageUpload",className:ve.fileInputLabel,children:["📷 ",c.length>0?`${c.length} file(s) selected`:"Choose images"]}),c.length>0&&d.jsx("p",{className:ve.fileInfo,children:c.map(R=>R.name).join(", ")})]}),d.jsxs("div",{className:ve.buttonGroup,children:[d.jsx("button",{type:"submit",className:ve.submitButton,disabled:o,children:o?"Uploading...":t?"Update Entry":"Create Entry"}),d.jsx("button",{type:"button",onClick:r,className:ve.cancelButton,disabled:o,children:"Cancel"})]})]})]})})})}const y4="_card_szcfs_1",v4="_accentRed_szcfs_14",w4="_accentBlue_szcfs_19",E4="_accentYellow_szcfs_24",I4="_cardHeader_szcfs_38",T4="_categoryBadge_szcfs_45",S4="_categoryIcon_szcfs_56",A4="_adminActions_szcfs_60",C4="_pinButton_szcfs_65",P4="_editButton_szcfs_66",k4="_deleteButton_szcfs_67",R4="_pinned_szcfs_81",x4="_title_szcfs_96",N4="_content_szcfs_104",D4="_source_szcfs_112",b4="_sourceLabel_szcfs_122",O4="_tags_szcfs_128",V4="_tag_szcfs_128",L4="_imagesPreview_szcfs_142",M4="_imageCount_szcfs_149",j4="_readMore_szcfs_154",F4="_footer_szcfs_160",U4="_date_szcfs_170",$4="_updated_szcfs_174",B4="_imagesGrid_szcfs_183",z4="_imageWrapper_szcfs_190",H4="_imageOverlay_szcfs_211",W4="_imageModal_szcfs_223",q4="_imageModalContent_szcfs_236",G4="_closeModal_szcfs_250",K4="_entryModal_szcfs_268",Q4="_entryModalContent_szcfs_281",Y4="_modalHeader_szcfs_300",X4="_modalTitle_szcfs_308",J4="_modalContent_szcfs_315",Z4="_modalSource_szcfs_322",te={card:y4,accentRed:v4,accentBlue:w4,accentYellow:E4,cardHeader:I4,categoryBadge:T4,categoryIcon:S4,adminActions:A4,pinButton:C4,editButton:P4,deleteButton:k4,pinned:R4,title:x4,content:N4,source:D4,sourceLabel:b4,tags:O4,tag:V4,imagesPreview:L4,imageCount:M4,readMore:j4,footer:F4,date:U4,updated:$4,imagesGrid:B4,imageWrapper:z4,imageOverlay:H4,imageModal:W4,imageModalContent:q4,closeModal:G4,entryModal:K4,entryModalContent:Q4,modalHeader:Y4,modalTitle:X4,modalContent:J4,modalSource:Z4},by=["accentRed","accentBlue","accentYellow"];function ej({entry:t,category:e,index:n=0,isAdmin:r,onEdit:i,onDelete:s,onTogglePin:o}){const[l,c]=U.useState(!1),[u,f]=U.useState(null),[m,g]=U.useState(!1),T=E=>new Date(E).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),k=(E,R)=>{R.stopPropagation(),f(E),c(!0)},x=()=>{c(!1),f(null)},b=(E,R=200)=>E.length<=R?E:E.slice(0,R)+"...",w=E=>{E.target.closest(`.${te.adminActions}`)||g(!0)},y=te[by[n%by.length]];return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:`${te.card} ${y}`,"data-pinned":t.isPinned||!1,onClick:w,children:[d.jsxs("div",{className:te.cardHeader,children:[d.jsxs("div",{className:te.categoryBadge,children:[d.jsx("span",{className:te.categoryIcon,children:e==null?void 0:e.icon}),d.jsx("span",{children:e==null?void 0:e.name})]}),r&&d.jsxs("div",{className:te.adminActions,children:[d.jsx("button",{className:`${te.pinButton} ${t.isPinned?te.pinned:""}`,onClick:E=>{E.stopPropagation(),o()},title:t.isPinned?"Unpin entry":"Pin entry",children:t.isPinned?"📌":"📍"}),d.jsx("button",{className:te.editButton,onClick:E=>{E.stopPropagation(),i()},title:"Edit entry",children:"✏️"}),d.jsx("button",{className:te.deleteButton,onClick:E=>{E.stopPropagation(),s()},title:"Delete entry",children:"🗑️"})]})]}),d.jsx("h3",{className:te.title,children:t.title}),d.jsx("div",{className:te.content,children:b(t.content)}),t.images&&t.images.length>0&&d.jsx("div",{className:te.imagesGrid,children:t.images.slice(0,2).map((E,R)=>d.jsxs("div",{className:te.imageWrapper,onClick:O=>{O.stopPropagation(),k(E.url,O)},children:[d.jsx("img",{src:E.url,alt:`${t.title} - ${R+1}`}),R===1&&t.images.length>2&&d.jsxs("div",{className:te.imageOverlay,children:["+",t.images.length-2," more"]})]},R))}),t.source&&d.jsxs("div",{className:te.source,children:[d.jsx("span",{className:te.sourceLabel,children:"Source:"})," ",t.source]}),d.jsxs("div",{className:te.footer,children:[d.jsx("span",{className:te.date,children:T(t.createdAt)}),t.updatedAt!==t.createdAt&&d.jsx("span",{className:te.updated,children:"Updated"}),d.jsx("span",{className:te.readMore,children:"Click to read more →"})]})]}),m&&d.jsx(Zn,{children:d.jsx("div",{className:te.entryModal,onClick:()=>g(!1),children:d.jsxs("div",{className:te.entryModalContent,onClick:E=>E.stopPropagation(),children:[d.jsx("button",{className:te.closeModal,onClick:()=>g(!1),children:"✕"}),d.jsxs("div",{className:te.modalHeader,children:[d.jsxs("div",{className:te.categoryBadge,children:[d.jsx("span",{className:te.categoryIcon,children:e==null?void 0:e.icon}),d.jsx("span",{children:e==null?void 0:e.name})]}),d.jsx("span",{className:te.date,children:T(t.createdAt)})]}),d.jsx("h2",{className:te.modalTitle,children:t.title}),d.jsx("div",{className:te.modalContent,children:t.content}),t.images&&t.images.length>0&&d.jsx("div",{className:te.imagesGrid,children:t.images.map((E,R)=>d.jsx("div",{className:te.imageWrapper,onClick:O=>k(E.url,O),children:d.jsx("img",{src:E.url,alt:`${t.title} - ${R+1}`})},R))}),t.source&&d.jsxs("div",{className:te.modalSource,children:[d.jsx("span",{className:te.sourceLabel,children:"Source:"})," ",t.source]}),t.tags&&t.tags.length>0&&d.jsx("div",{className:te.tags,children:t.tags.map((E,R)=>d.jsxs("span",{className:te.tag,children:["#",E]},R))})]})})}),l&&d.jsx(Zn,{children:d.jsx("div",{className:te.imageModal,onClick:x,children:d.jsxs("div",{className:te.imageModalContent,children:[d.jsx("button",{className:te.closeModal,onClick:x,children:"✕"}),d.jsx("img",{src:u,alt:"Full size"})]})})})]})}function tj(){const{isAdmin:t}=Qr(),[e,n]=U.useState([]),[r,i]=U.useState("all"),[s,o]=U.useState(!1),[l,c]=U.useState(null),[u,f]=U.useState(!1),[m,g]=bi(),T=[{id:"all",name:"All Entries",icon:"📚"},{id:"quotes",name:"Quotes & Dialogues",icon:"💬"},{id:"articles",name:"Article Notes",icon:"📝"},{id:"books",name:"Book Highlights",icon:"📖"},{id:"thoughts",name:"Personal Thoughts",icon:"💭"}];U.useEffect(()=>{k()},[]);const k=async()=>{try{const O=s2(On(le,"entries"),o2("createdAt","desc")),I=(await Ca(O)).docs.map(v=>{var S,C,P,N,A,me;return{id:v.id,...v.data(),createdAt:((P=(C=(S=v.data().createdAt)==null?void 0:S.toDate)==null?void 0:C.call(S))==null?void 0:P.toISOString())||new Date().toISOString(),updatedAt:((me=(A=(N=v.data().updatedAt)==null?void 0:N.toDate)==null?void 0:A.call(N))==null?void 0:me.toISOString())||new Date().toISOString()}});I.sort((v,S)=>v.isPinned&&!S.isPinned?-1:!v.isPinned&&S.isPinned?1:new Date(S.createdAt)-new Date(v.createdAt)),n(I)}catch(O){console.error("Error loading entries:",O)}},x=async O=>{try{await ka(On(le,"entries"),{...O,createdAt:he.now(),updatedAt:he.now()}),await k(),o(!1)}catch(M){console.error("Error adding entry:",M),alert("Failed to add entry. Please try again.")}},b=async O=>{try{const M=Pe(le,"entries",O.id);await zn(M,{...O,updatedAt:he.now()}),await k(),c(null),o(!1)}catch(M){console.error("Error updating entry:",M),alert("Failed to update entry. Please try again.")}},w=async O=>{if(window.confirm("Are you sure you want to delete this entry?"))try{await Pa(Pe(le,"entries",O)),await k()}catch(M){console.error("Error deleting entry:",M),alert("Failed to delete entry. Please try again.")}},y=async O=>{try{const M=Pe(le,"entries",O.id);await zn(M,{isPinned:!O.isPinned}),await k()}catch(M){console.error("Error toggling pin:",M),alert("Failed to toggle pin")}},E=O=>{c(O),o(!0)},R=r==="all"?e:e.filter(O=>O.category===r);return d.jsxs("section",{id:"commonplace",ref:m,className:`${Ae.container} ${u?Ae.expanded:Ae.collapsed} ${g?Ae.revealed:""}`,children:[d.jsxs("button",{className:Ae.toggleButton,onClick:()=>f(!u),"aria-label":u?"Hide Commonplace":"Show Commonplace","data-cursor-hover":"true",children:[d.jsx("span",{className:Ae.toggleIcon,children:u?"▼":"▶"}),d.jsxs("span",{className:Ae.toggleText,children:[u?"Hide":"Show"," Commonplace"]}),d.jsx("span",{className:Ae.toggleEmoji,children:"📚"})]}),u&&d.jsxs("div",{className:Ae.content,children:[d.jsxs("div",{className:Ae.header,children:[d.jsxs("div",{className:Ae.eyebrow,children:["COMMONPLACE ",d.jsx(Hn,{size:14,color:"var(--dc-red)"})]}),d.jsxs("div",{className:Ae.headingWrap,children:[d.jsx("h2",{className:Ae.h2,children:"Notes worth keeping."}),d.jsx("div",{className:Ae.underline})]}),d.jsx("p",{className:Ae.subtitle,children:"A collection of interesting quotes, notes, and thoughts."})]}),t&&d.jsx("button",{className:Ae.addButton,onClick:()=>{c(null),o(!0)},children:"+ Add New Entry"}),d.jsx("div",{className:Ae.categoryFilter,children:T.map(O=>d.jsxs("button",{className:`${Ae.categoryButton} ${r===O.id?Ae.active:""}`,onClick:()=>i(O.id),children:[d.jsx("span",{className:Ae.categoryIcon,children:O.icon}),O.name]},O.id))}),s&&d.jsx(_4,{entry:l,categories:T.filter(O=>O.id!=="all"),onSubmit:l?b:x,onCancel:()=>{o(!1),c(null)}}),d.jsx("div",{className:Ae.entriesGrid,children:R.length===0?d.jsxs("div",{className:Ae.emptyState,children:[d.jsx("span",{className:Ae.emptyIcon,children:"📭"}),d.jsxs("p",{children:["No entries yet. ",t&&"Start by adding your first entry!"]})]}):R.map((O,M)=>d.jsx(ej,{entry:O,index:M,category:T.find(I=>I.id===O.category),isAdmin:t,onEdit:()=>E(O),onDelete:()=>w(O.id),onTogglePin:()=>y(O)},O.id))})]})]})}const nj="_wrap_91tw5_1",rj="_fill_91tw5_11",Oy={wrap:nj,fill:rj};function ij(){const[t,e]=U.useState(0);return U.useEffect(()=>{const n=()=>{const r=window.innerHeight,i=document.documentElement.scrollHeight,s=window.scrollY,o=i-r,l=o>0?s/o*100:0;e(Math.min(l,100))};return window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]),d.jsx("div",{className:Oy.wrap,children:d.jsx("div",{className:Oy.fill,style:{width:`${t}%`}})})}function sj(){return d.jsxs(DD,{children:[d.jsx(tb,{}),d.jsx(ij,{}),d.jsx(gb,{}),d.jsxs("main",{id:"main",style:{position:"relative",zIndex:1},children:[d.jsx(hO,{}),d.jsx(FO,{}),d.jsx(bL,{}),d.jsx(cL,{}),d.jsx(sM,{}),d.jsx(kM,{}),d.jsx(tj,{}),d.jsx(xb,{})]}),d.jsx(Ub,{}),d.jsx(HD,{})]})}Eh.createRoot(document.getElementById("root")).render(d.jsx(BI.StrictMode,{children:d.jsx(WD,{children:d.jsx(sj,{})})}));
