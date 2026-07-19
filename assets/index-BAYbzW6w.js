(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function TI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dy={exports:{}},Tc={},by={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),SI=Symbol.for("react.portal"),AI=Symbol.for("react.fragment"),CI=Symbol.for("react.strict_mode"),PI=Symbol.for("react.profiler"),kI=Symbol.for("react.provider"),RI=Symbol.for("react.context"),xI=Symbol.for("react.forward_ref"),NI=Symbol.for("react.suspense"),DI=Symbol.for("react.memo"),bI=Symbol.for("react.lazy"),bm=Symbol.iterator;function OI(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var Oy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vy=Object.assign,Ly={};function Ps(t,e,n){this.props=t,this.context=e,this.refs=Ly,this.updater=n||Oy}Ps.prototype.isReactComponent={};Ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function My(){}My.prototype=Ps.prototype;function Ud(t,e,n){this.props=t,this.context=e,this.refs=Ly,this.updater=n||Oy}var Bd=Ud.prototype=new My;Bd.constructor=Ud;Vy(Bd,Ps.prototype);Bd.isPureReactComponent=!0;var Om=Array.isArray,jy=Object.prototype.hasOwnProperty,$d={current:null},Fy={key:!0,ref:!0,__self:!0,__source:!0};function Uy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jy.call(e,r)&&!Fy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ua,type:t,key:s,ref:o,props:i,_owner:$d.current}}function VI(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function LI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vm=/\/+/g;function Nu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?LI(""+t.key):e.toString(36)}function cl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ua:case SI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Nu(o,0):r,Om(i)?(n="",t!=null&&(n=t.replace(Vm,"$&/")+"/"),cl(i,e,n,"",function(u){return u})):i!=null&&(zd(i)&&(i=VI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Om(t))for(var l=0;l<t.length;l++){s=t[l];var c=r+Nu(s,l);o+=cl(s,e,n,c,i)}else if(c=OI(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=r+Nu(s,l++),o+=cl(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ua(t,e,n){if(t==null)return t;var r=[],i=0;return cl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function MI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},ul={transition:null},jI={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:ul,ReactCurrentOwner:$d};function By(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Ua,forEach:function(t,e,n){Ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ua(t,function(){e++}),e},toArray:function(t){return Ua(t,function(e){return e})||[]},only:function(t){if(!zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Ps;ne.Fragment=AI;ne.Profiler=PI;ne.PureComponent=Ud;ne.StrictMode=CI;ne.Suspense=NI;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jI;ne.act=By;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Vy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$d.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)jy.call(e,c)&&!Fy.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ua,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:RI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kI,_context:t},t.Consumer=t};ne.createElement=Uy;ne.createFactory=function(t){var e=Uy.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:xI,render:t}};ne.isValidElement=zd;ne.lazy=function(t){return{$$typeof:bI,_payload:{_status:-1,_result:t},_init:MI}};ne.memo=function(t,e){return{$$typeof:DI,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=ul.transition;ul.transition={};try{t()}finally{ul.transition=e}};ne.unstable_act=By;ne.useCallback=function(t,e){return Tt.current.useCallback(t,e)};ne.useContext=function(t){return Tt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return Tt.current.useEffect(t,e)};ne.useId=function(){return Tt.current.useId()};ne.useImperativeHandle=function(t,e,n){return Tt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return Tt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return Tt.current.useReducer(t,e,n)};ne.useRef=function(t){return Tt.current.useRef(t)};ne.useState=function(t){return Tt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return Tt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return Tt.current.useTransition()};ne.version="18.3.1";by.exports=ne;var B=by.exports;const FI=TI(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UI=B,BI=Symbol.for("react.element"),$I=Symbol.for("react.fragment"),zI=Object.prototype.hasOwnProperty,HI=UI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qI={key:!0,ref:!0,__self:!0,__source:!0};function $y(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)zI.call(e,r)&&!qI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:BI,type:t,key:s,ref:o,props:i,_owner:HI.current}}Tc.Fragment=$I;Tc.jsx=$y;Tc.jsxs=$y;Dy.exports=Tc;var d=Dy.exports,vh={},zy={exports:{}},Bt={},Hy={exports:{}},qy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,G){var Z=U.length;U.push(G);e:for(;0<Z;){var fe=Z-1>>>1,De=U[fe];if(0<i(De,G))U[fe]=G,U[Z]=De,Z=fe;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var G=U[0],Z=U.pop();if(Z!==G){U[0]=Z;e:for(var fe=0,De=U.length,Qr=De>>>1;fe<Qr;){var zt=2*(fe+1)-1,Yr=U[zt],en=zt+1,er=U[en];if(0>i(Yr,Z))en<De&&0>i(er,Yr)?(U[fe]=er,U[en]=Z,fe=en):(U[fe]=Yr,U[zt]=Z,fe=zt);else if(en<De&&0>i(er,Z))U[fe]=er,U[en]=Z,fe=en;else break e}}return G}function i(U,G){var Z=U.sortIndex-G.sortIndex;return Z!==0?Z:U.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],p=1,m=null,g=3,S=!1,k=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(U){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=U)r(u),G.sortIndex=G.expirationTime,e(c,G);else break;G=n(u)}}function R(U){if(x=!1,E(U),!k)if(n(c)!==null)k=!0,J(O);else{var G=n(u);G!==null&&de(R,G.startTime-U)}}function O(U,G){k=!1,x&&(x=!1,w(v),v=-1),S=!0;var Z=g;try{for(E(G),m=n(c);m!==null&&(!(m.expirationTime>G)||U&&!P());){var fe=m.callback;if(typeof fe=="function"){m.callback=null,g=m.priorityLevel;var De=fe(m.expirationTime<=G);G=t.unstable_now(),typeof De=="function"?m.callback=De:m===n(c)&&r(c),E(G)}else r(c);m=n(c)}if(m!==null)var Qr=!0;else{var zt=n(u);zt!==null&&de(R,zt.startTime-G),Qr=!1}return Qr}finally{m=null,g=Z,S=!1}}var M=!1,I=null,v=-1,T=5,C=-1;function P(){return!(t.unstable_now()-C<T)}function N(){if(I!==null){var U=t.unstable_now();C=U;var G=!0;try{G=I(!0,U)}finally{G?A():(M=!1,I=null)}}else M=!1}var A;if(typeof y=="function")A=function(){y(N)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,gt=me.port2;me.port1.onmessage=N,A=function(){gt.postMessage(null)}}else A=function(){b(N,0)};function J(U){I=U,M||(M=!0,A())}function de(U,G){v=b(function(){U(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){k||S||(k=!0,J(O))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(U){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var Z=g;g=G;try{return U()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,G){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Z=g;g=U;try{return G()}finally{g=Z}},t.unstable_scheduleCallback=function(U,G,Z){var fe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?fe+Z:fe):Z=fe,U){case 1:var De=-1;break;case 2:De=250;break;case 5:De=1073741823;break;case 4:De=1e4;break;default:De=5e3}return De=Z+De,U={id:p++,callback:G,priorityLevel:U,startTime:Z,expirationTime:De,sortIndex:-1},Z>fe?(U.sortIndex=Z,e(u,U),n(c)===null&&U===n(u)&&(x?(w(v),v=-1):x=!0,de(R,Z-fe))):(U.sortIndex=De,e(c,U),k||S||(k=!0,J(O))),U},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(U){var G=g;return function(){var Z=g;g=G;try{return U.apply(this,arguments)}finally{g=Z}}}})(qy);Hy.exports=qy;var WI=Hy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GI=B,Ut=WI;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wy=new Set,Lo={};function Ti(t,e){fs(t,e),fs(t+"Capture",e)}function fs(t,e){for(Lo[t]=e,t=0;t<e.length;t++)Wy.add(e[t])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wh=Object.prototype.hasOwnProperty,KI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lm={},Mm={};function QI(t){return wh.call(Mm,t)?!0:wh.call(Lm,t)?!1:KI.test(t)?Mm[t]=!0:(Lm[t]=!0,!1)}function YI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function XI(t,e,n,r){if(e===null||typeof e>"u"||YI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hd=/[\-:]([a-z])/g;function qd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hd,qd);rt[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hd,qd);rt[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hd,qd);rt[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wd(t,e,n,r){var i=rt.hasOwnProperty(e)?rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(XI(e,n,i,r)&&(n=null),r||i===null?QI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Zn=GI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ba=Symbol.for("react.element"),Bi=Symbol.for("react.portal"),$i=Symbol.for("react.fragment"),Gd=Symbol.for("react.strict_mode"),Eh=Symbol.for("react.profiler"),Gy=Symbol.for("react.provider"),Ky=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),Ih=Symbol.for("react.suspense"),Th=Symbol.for("react.suspense_list"),Qd=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),Qy=Symbol.for("react.offscreen"),jm=Symbol.iterator;function to(t){return t===null||typeof t!="object"?null:(t=jm&&t[jm]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,Du;function uo(t){if(Du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Du=e&&e[1]||""}return`
`+Du+t}var bu=!1;function Ou(t,e){if(!t||bu)return"";bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{bu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?uo(t):""}function JI(t){switch(t.tag){case 5:return uo(t.type);case 16:return uo("Lazy");case 13:return uo("Suspense");case 19:return uo("SuspenseList");case 0:case 2:case 15:return t=Ou(t.type,!1),t;case 11:return t=Ou(t.type.render,!1),t;case 1:return t=Ou(t.type,!0),t;default:return""}}function Sh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $i:return"Fragment";case Bi:return"Portal";case Eh:return"Profiler";case Gd:return"StrictMode";case Ih:return"Suspense";case Th:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ky:return(t.displayName||"Context")+".Consumer";case Gy:return(t._context.displayName||"Context")+".Provider";case Kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qd:return e=t.displayName||null,e!==null?e:Sh(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return Sh(t(e))}catch{}}return null}function ZI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sh(e);case 8:return e===Gd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Yy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function eT(t){var e=Yy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $a(t){t._valueTracker||(t._valueTracker=eT(t))}function Xy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Yy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ah(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jy(t,e){e=e.checked,e!=null&&Wd(t,"checked",e,!1)}function Ch(t,e){Jy(t,e);var n=br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ph(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ph(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Um(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ph(t,e,n){(e!=="number"||Nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ho=Array.isArray;function es(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function kh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(ho(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function Zy(t,e){var n=br(e.value),r=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $m(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ev(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ev(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var za,tv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(za=za||document.createElement("div"),za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tT=["Webkit","ms","Moz","O"];Object.keys(Eo).forEach(function(t){tT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Eo[e]=Eo[t]})});function nv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Eo.hasOwnProperty(t)&&Eo[t]?(""+e).trim():e+"px"}function rv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var nT=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xh(t,e){if(e){if(nT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Nh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dh=null;function Yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bh=null,ts=null,ns=null;function zm(t){if(t=fa(t)){if(typeof bh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=kc(e),bh(t.stateNode,t.type,e))}}function iv(t){ts?ns?ns.push(t):ns=[t]:ts=t}function sv(){if(ts){var t=ts,e=ns;if(ns=ts=null,zm(t),e)for(t=0;t<e.length;t++)zm(e[t])}}function ov(t,e){return t(e)}function av(){}var Vu=!1;function lv(t,e,n){if(Vu)return t(e,n);Vu=!0;try{return ov(t,e,n)}finally{Vu=!1,(ts!==null||ns!==null)&&(av(),sv())}}function jo(t,e){var n=t.stateNode;if(n===null)return null;var r=kc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Oh=!1;if(Hn)try{var no={};Object.defineProperty(no,"passive",{get:function(){Oh=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{Oh=!1}function rT(t,e,n,r,i,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(p){this.onError(p)}}var Io=!1,Dl=null,bl=!1,Vh=null,iT={onError:function(t){Io=!0,Dl=t}};function sT(t,e,n,r,i,s,o,l,c){Io=!1,Dl=null,rT.apply(iT,arguments)}function oT(t,e,n,r,i,s,o,l,c){if(sT.apply(this,arguments),Io){if(Io){var u=Dl;Io=!1,Dl=null}else throw Error(F(198));bl||(bl=!0,Vh=u)}}function Si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hm(t){if(Si(t)!==t)throw Error(F(188))}function aT(t){var e=t.alternate;if(!e){if(e=Si(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Hm(i),t;if(s===r)return Hm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function uv(t){return t=aT(t),t!==null?hv(t):null}function hv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hv(t);if(e!==null)return e;t=t.sibling}return null}var dv=Ut.unstable_scheduleCallback,qm=Ut.unstable_cancelCallback,lT=Ut.unstable_shouldYield,cT=Ut.unstable_requestPaint,Ve=Ut.unstable_now,uT=Ut.unstable_getCurrentPriorityLevel,Xd=Ut.unstable_ImmediatePriority,fv=Ut.unstable_UserBlockingPriority,Ol=Ut.unstable_NormalPriority,hT=Ut.unstable_LowPriority,pv=Ut.unstable_IdlePriority,Sc=null,Tn=null;function dT(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(Sc,t,void 0,(t.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:mT,fT=Math.log,pT=Math.LN2;function mT(t){return t>>>=0,t===0?32:31-(fT(t)/pT|0)|0}var Ha=64,qa=4194304;function fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=fo(l):(s&=o,s!==0&&(r=fo(s)))}else o=n&~i,o!==0?r=fo(o):s!==0&&(r=fo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ln(e),i=1<<n,r|=t[n],e&=~i;return r}function gT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _T(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ln(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=gT(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function Lh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mv(){var t=Ha;return Ha<<=1,!(Ha&4194240)&&(Ha=64),t}function Lu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ln(e),t[e]=n}function yT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ln(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Jd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ln(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function gv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _v,Zd,yv,vv,wv,Mh=!1,Wa=[],wr=null,Er=null,Ir=null,Fo=new Map,Uo=new Map,hr=[],vT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wm(t,e){switch(t){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(e.pointerId)}}function ro(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=fa(e),e!==null&&Zd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function wT(t,e,n,r,i){switch(e){case"focusin":return wr=ro(wr,t,e,n,r,i),!0;case"dragenter":return Er=ro(Er,t,e,n,r,i),!0;case"mouseover":return Ir=ro(Ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fo.set(s,ro(Fo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Uo.set(s,ro(Uo.get(s)||null,t,e,n,r,i)),!0}return!1}function Ev(t){var e=si(t.target);if(e!==null){var n=Si(e);if(n!==null){if(e=n.tag,e===13){if(e=cv(n),e!==null){t.blockedOn=e,wv(t.priority,function(){yv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Dh=r,n.target.dispatchEvent(r),Dh=null}else return e=fa(n),e!==null&&Zd(e),t.blockedOn=n,!1;e.shift()}return!0}function Gm(t,e,n){hl(t)&&n.delete(e)}function ET(){Mh=!1,wr!==null&&hl(wr)&&(wr=null),Er!==null&&hl(Er)&&(Er=null),Ir!==null&&hl(Ir)&&(Ir=null),Fo.forEach(Gm),Uo.forEach(Gm)}function io(t,e){t.blockedOn===e&&(t.blockedOn=null,Mh||(Mh=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,ET)))}function Bo(t){function e(i){return io(i,t)}if(0<Wa.length){io(Wa[0],t);for(var n=1;n<Wa.length;n++){var r=Wa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(wr!==null&&io(wr,t),Er!==null&&io(Er,t),Ir!==null&&io(Ir,t),Fo.forEach(e),Uo.forEach(e),n=0;n<hr.length;n++)r=hr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)Ev(n),n.blockedOn===null&&hr.shift()}var rs=Zn.ReactCurrentBatchConfig,Ll=!0;function IT(t,e,n,r){var i=ue,s=rs.transition;rs.transition=null;try{ue=1,ef(t,e,n,r)}finally{ue=i,rs.transition=s}}function TT(t,e,n,r){var i=ue,s=rs.transition;rs.transition=null;try{ue=4,ef(t,e,n,r)}finally{ue=i,rs.transition=s}}function ef(t,e,n,r){if(Ll){var i=jh(t,e,n,r);if(i===null)Wu(t,e,r,Ml,n),Wm(t,r);else if(wT(i,t,e,n,r))r.stopPropagation();else if(Wm(t,r),e&4&&-1<vT.indexOf(t)){for(;i!==null;){var s=fa(i);if(s!==null&&_v(s),s=jh(t,e,n,r),s===null&&Wu(t,e,r,Ml,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Wu(t,e,r,null,n)}}var Ml=null;function jh(t,e,n,r){if(Ml=null,t=Yd(r),t=si(t),t!==null)if(e=Si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ml=t,null}function Iv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uT()){case Xd:return 1;case fv:return 4;case Ol:case hT:return 16;case pv:return 536870912;default:return 16}default:return 16}}var _r=null,tf=null,dl=null;function Tv(){if(dl)return dl;var t,e=tf,n=e.length,r,i="value"in _r?_r.value:_r.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return dl=i.slice(t,1<r?1-r:void 0)}function fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ga(){return!0}function Km(){return!1}function $t(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ga:Km,this.isPropagationStopped=Km,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ga)},persist:function(){},isPersistent:Ga}),e}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nf=$t(ks),da=Pe({},ks,{view:0,detail:0}),ST=$t(da),Mu,ju,so,Ac=Pe({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(Mu=t.screenX-so.screenX,ju=t.screenY-so.screenY):ju=Mu=0,so=t),Mu)},movementY:function(t){return"movementY"in t?t.movementY:ju}}),Qm=$t(Ac),AT=Pe({},Ac,{dataTransfer:0}),CT=$t(AT),PT=Pe({},da,{relatedTarget:0}),Fu=$t(PT),kT=Pe({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),RT=$t(kT),xT=Pe({},ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NT=$t(xT),DT=Pe({},ks,{data:0}),Ym=$t(DT),bT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function LT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=VT[t])?!!e[t]:!1}function rf(){return LT}var MT=Pe({},da,{key:function(t){if(t.key){var e=bT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?OT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rf,charCode:function(t){return t.type==="keypress"?fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jT=$t(MT),FT=Pe({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xm=$t(FT),UT=Pe({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rf}),BT=$t(UT),$T=Pe({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),zT=$t($T),HT=Pe({},Ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qT=$t(HT),WT=[9,13,27,32],sf=Hn&&"CompositionEvent"in window,To=null;Hn&&"documentMode"in document&&(To=document.documentMode);var GT=Hn&&"TextEvent"in window&&!To,Sv=Hn&&(!sf||To&&8<To&&11>=To),Jm=" ",Zm=!1;function Av(t,e){switch(t){case"keyup":return WT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zi=!1;function KT(t,e){switch(t){case"compositionend":return Cv(e);case"keypress":return e.which!==32?null:(Zm=!0,Jm);case"textInput":return t=e.data,t===Jm&&Zm?null:t;default:return null}}function QT(t,e){if(zi)return t==="compositionend"||!sf&&Av(t,e)?(t=Tv(),dl=tf=_r=null,zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sv&&e.locale!=="ko"?null:e.data;default:return null}}var YT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YT[t.type]:e==="textarea"}function Pv(t,e,n,r){iv(r),e=jl(e,"onChange"),0<e.length&&(n=new nf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var So=null,$o=null;function XT(t){jv(t,0)}function Cc(t){var e=Wi(t);if(Xy(e))return t}function JT(t,e){if(t==="change")return e}var kv=!1;if(Hn){var Uu;if(Hn){var Bu="oninput"in document;if(!Bu){var tg=document.createElement("div");tg.setAttribute("oninput","return;"),Bu=typeof tg.oninput=="function"}Uu=Bu}else Uu=!1;kv=Uu&&(!document.documentMode||9<document.documentMode)}function ng(){So&&(So.detachEvent("onpropertychange",Rv),$o=So=null)}function Rv(t){if(t.propertyName==="value"&&Cc($o)){var e=[];Pv(e,$o,t,Yd(t)),lv(XT,e)}}function ZT(t,e,n){t==="focusin"?(ng(),So=e,$o=n,So.attachEvent("onpropertychange",Rv)):t==="focusout"&&ng()}function eS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cc($o)}function tS(t,e){if(t==="click")return Cc(e)}function nS(t,e){if(t==="input"||t==="change")return Cc(e)}function rS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:rS;function zo(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wh.call(e,i)||!un(t[i],e[i]))return!1}return!0}function rg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ig(t,e){var n=rg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rg(n)}}function xv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Nv(){for(var t=window,e=Nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nl(t.document)}return e}function of(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iS(t){var e=Nv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xv(n.ownerDocument.documentElement,n)){if(r!==null&&of(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ig(n,s);var o=ig(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sS=Hn&&"documentMode"in document&&11>=document.documentMode,Hi=null,Fh=null,Ao=null,Uh=!1;function sg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uh||Hi==null||Hi!==Nl(r)||(r=Hi,"selectionStart"in r&&of(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ao&&zo(Ao,r)||(Ao=r,r=jl(Fh,"onSelect"),0<r.length&&(e=new nf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hi)))}function Ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qi={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},$u={},Dv={};Hn&&(Dv=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function Pc(t){if($u[t])return $u[t];if(!qi[t])return t;var e=qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dv)return $u[t]=e[n];return t}var bv=Pc("animationend"),Ov=Pc("animationiteration"),Vv=Pc("animationstart"),Lv=Pc("transitionend"),Mv=new Map,og="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(t,e){Mv.set(t,e),Ti(e,[t])}for(var zu=0;zu<og.length;zu++){var Hu=og[zu],oS=Hu.toLowerCase(),aS=Hu[0].toUpperCase()+Hu.slice(1);$r(oS,"on"+aS)}$r(bv,"onAnimationEnd");$r(Ov,"onAnimationIteration");$r(Vv,"onAnimationStart");$r("dblclick","onDoubleClick");$r("focusin","onFocus");$r("focusout","onBlur");$r(Lv,"onTransitionEnd");fs("onMouseEnter",["mouseout","mouseover"]);fs("onMouseLeave",["mouseout","mouseover"]);fs("onPointerEnter",["pointerout","pointerover"]);fs("onPointerLeave",["pointerout","pointerover"]);Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lS=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function ag(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,oT(r,e,void 0,t),t.currentTarget=null}function jv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;ag(i,l,u),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;ag(i,l,u),s=c}}}if(bl)throw t=Vh,bl=!1,Vh=null,t}function we(t,e){var n=e[qh];n===void 0&&(n=e[qh]=new Set);var r=t+"__bubble";n.has(r)||(Fv(e,t,2,!1),n.add(r))}function qu(t,e,n){var r=0;e&&(r|=4),Fv(n,t,r,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function Ho(t){if(!t[Qa]){t[Qa]=!0,Wy.forEach(function(n){n!=="selectionchange"&&(lS.has(n)||qu(n,!1,t),qu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,qu("selectionchange",!1,e))}}function Fv(t,e,n,r){switch(Iv(e)){case 1:var i=IT;break;case 4:i=TT;break;default:i=ef}n=i.bind(null,e,n,t),i=void 0,!Oh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Wu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=si(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}lv(function(){var u=s,p=Yd(n),m=[];e:{var g=Mv.get(t);if(g!==void 0){var S=nf,k=t;switch(t){case"keypress":if(fl(n)===0)break e;case"keydown":case"keyup":S=jT;break;case"focusin":k="focus",S=Fu;break;case"focusout":k="blur",S=Fu;break;case"beforeblur":case"afterblur":S=Fu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=CT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=BT;break;case bv:case Ov:case Vv:S=RT;break;case Lv:S=zT;break;case"scroll":S=ST;break;case"wheel":S=qT;break;case"copy":case"cut":case"paste":S=NT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Xm}var x=(e&4)!==0,b=!x&&t==="scroll",w=x?g!==null?g+"Capture":null:g;x=[];for(var y=u,E;y!==null;){E=y;var R=E.stateNode;if(E.tag===5&&R!==null&&(E=R,w!==null&&(R=jo(y,w),R!=null&&x.push(qo(y,R,E)))),b)break;y=y.return}0<x.length&&(g=new S(g,k,null,n,p),m.push({event:g,listeners:x}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",g&&n!==Dh&&(k=n.relatedTarget||n.fromElement)&&(si(k)||k[qn]))break e;if((S||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,S?(k=n.relatedTarget||n.toElement,S=u,k=k?si(k):null,k!==null&&(b=Si(k),k!==b||k.tag!==5&&k.tag!==6)&&(k=null)):(S=null,k=u),S!==k)){if(x=Qm,R="onMouseLeave",w="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(x=Xm,R="onPointerLeave",w="onPointerEnter",y="pointer"),b=S==null?g:Wi(S),E=k==null?g:Wi(k),g=new x(R,y+"leave",S,n,p),g.target=b,g.relatedTarget=E,R=null,si(p)===u&&(x=new x(w,y+"enter",k,n,p),x.target=E,x.relatedTarget=b,R=x),b=R,S&&k)t:{for(x=S,w=k,y=0,E=x;E;E=Li(E))y++;for(E=0,R=w;R;R=Li(R))E++;for(;0<y-E;)x=Li(x),y--;for(;0<E-y;)w=Li(w),E--;for(;y--;){if(x===w||w!==null&&x===w.alternate)break t;x=Li(x),w=Li(w)}x=null}else x=null;S!==null&&lg(m,g,S,x,!1),k!==null&&b!==null&&lg(m,b,k,x,!0)}}e:{if(g=u?Wi(u):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var O=JT;else if(eg(g))if(kv)O=nS;else{O=eS;var M=ZT}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(O=tS);if(O&&(O=O(t,u))){Pv(m,O,n,p);break e}M&&M(t,g,u),t==="focusout"&&(M=g._wrapperState)&&M.controlled&&g.type==="number"&&Ph(g,"number",g.value)}switch(M=u?Wi(u):window,t){case"focusin":(eg(M)||M.contentEditable==="true")&&(Hi=M,Fh=u,Ao=null);break;case"focusout":Ao=Fh=Hi=null;break;case"mousedown":Uh=!0;break;case"contextmenu":case"mouseup":case"dragend":Uh=!1,sg(m,n,p);break;case"selectionchange":if(sS)break;case"keydown":case"keyup":sg(m,n,p)}var I;if(sf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else zi?Av(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Sv&&n.locale!=="ko"&&(zi||v!=="onCompositionStart"?v==="onCompositionEnd"&&zi&&(I=Tv()):(_r=p,tf="value"in _r?_r.value:_r.textContent,zi=!0)),M=jl(u,v),0<M.length&&(v=new Ym(v,t,null,n,p),m.push({event:v,listeners:M}),I?v.data=I:(I=Cv(n),I!==null&&(v.data=I)))),(I=GT?KT(t,n):QT(t,n))&&(u=jl(u,"onBeforeInput"),0<u.length&&(p=new Ym("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:u}),p.data=I))}jv(m,e)})}function qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function jl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=jo(t,n),s!=null&&r.unshift(qo(t,s,i)),s=jo(t,e),s!=null&&r.push(qo(t,s,i))),t=t.return}return r}function Li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=jo(n,s),c!=null&&o.unshift(qo(n,c,l))):i||(c=jo(n,s),c!=null&&o.push(qo(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cS=/\r\n?/g,uS=/\u0000|\uFFFD/g;function cg(t){return(typeof t=="string"?t:""+t).replace(cS,`
`).replace(uS,"")}function Ya(t,e,n){if(e=cg(e),cg(t)!==e&&n)throw Error(F(425))}function Fl(){}var Bh=null,$h=null;function zh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hh=typeof setTimeout=="function"?setTimeout:void 0,hS=typeof clearTimeout=="function"?clearTimeout:void 0,ug=typeof Promise=="function"?Promise:void 0,dS=typeof queueMicrotask=="function"?queueMicrotask:typeof ug<"u"?function(t){return ug.resolve(null).then(t).catch(fS)}:Hh;function fS(t){setTimeout(function(){throw t})}function Gu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Bo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bo(e)}function Tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),In="__reactFiber$"+Rs,Wo="__reactProps$"+Rs,qn="__reactContainer$"+Rs,qh="__reactEvents$"+Rs,pS="__reactListeners$"+Rs,mS="__reactHandles$"+Rs;function si(t){var e=t[In];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qn]||n[In]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hg(t);t!==null;){if(n=t[In])return n;t=hg(t)}return e}t=n,n=t.parentNode}return null}function fa(t){return t=t[In]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function kc(t){return t[Wo]||null}var Wh=[],Gi=-1;function zr(t){return{current:t}}function Ie(t){0>Gi||(t.current=Wh[Gi],Wh[Gi]=null,Gi--)}function _e(t,e){Gi++,Wh[Gi]=t.current,t.current=e}var Or={},pt=zr(Or),Rt=zr(!1),fi=Or;function ps(t,e){var n=t.type.contextTypes;if(!n)return Or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xt(t){return t=t.childContextTypes,t!=null}function Ul(){Ie(Rt),Ie(pt)}function dg(t,e,n){if(pt.current!==Or)throw Error(F(168));_e(pt,e),_e(Rt,n)}function Uv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,ZI(t)||"Unknown",i));return Pe({},n,r)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Or,fi=pt.current,_e(pt,t),_e(Rt,Rt.current),!0}function fg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Uv(t,e,fi),r.__reactInternalMemoizedMergedChildContext=t,Ie(Rt),Ie(pt),_e(pt,t)):Ie(Rt),_e(Rt,n)}var Vn=null,Rc=!1,Ku=!1;function Bv(t){Vn===null?Vn=[t]:Vn.push(t)}function gS(t){Rc=!0,Bv(t)}function Hr(){if(!Ku&&Vn!==null){Ku=!0;var t=0,e=ue;try{var n=Vn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vn=null,Rc=!1}catch(i){throw Vn!==null&&(Vn=Vn.slice(t+1)),dv(Xd,Hr),i}finally{ue=e,Ku=!1}}return null}var Ki=[],Qi=0,$l=null,zl=0,qt=[],Wt=0,pi=null,Ln=1,Mn="";function ni(t,e){Ki[Qi++]=zl,Ki[Qi++]=$l,$l=t,zl=e}function $v(t,e,n){qt[Wt++]=Ln,qt[Wt++]=Mn,qt[Wt++]=pi,pi=t;var r=Ln;t=Mn;var i=32-ln(r)-1;r&=~(1<<i),n+=1;var s=32-ln(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ln=1<<32-ln(e)+i|n<<i|r,Mn=s+t}else Ln=1<<s|n<<i|r,Mn=t}function af(t){t.return!==null&&(ni(t,1),$v(t,1,0))}function lf(t){for(;t===$l;)$l=Ki[--Qi],Ki[Qi]=null,zl=Ki[--Qi],Ki[Qi]=null;for(;t===pi;)pi=qt[--Wt],qt[Wt]=null,Mn=qt[--Wt],qt[Wt]=null,Ln=qt[--Wt],qt[Wt]=null}var jt=null,Lt=null,Te=!1,sn=null;function zv(t,e){var n=Kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,jt=t,Lt=Tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,jt=t,Lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pi!==null?{id:Ln,overflow:Mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,jt=t,Lt=null,!0):!1;default:return!1}}function Gh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kh(t){if(Te){var e=Lt;if(e){var n=e;if(!pg(t,e)){if(Gh(t))throw Error(F(418));e=Tr(n.nextSibling);var r=jt;e&&pg(t,e)?zv(r,n):(t.flags=t.flags&-4097|2,Te=!1,jt=t)}}else{if(Gh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Te=!1,jt=t}}}function mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jt=t}function Xa(t){if(t!==jt)return!1;if(!Te)return mg(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zh(t.type,t.memoizedProps)),e&&(e=Lt)){if(Gh(t))throw Hv(),Error(F(418));for(;e;)zv(t,e),e=Tr(e.nextSibling)}if(mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Lt=Tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Lt=null}}else Lt=jt?Tr(t.stateNode.nextSibling):null;return!0}function Hv(){for(var t=Lt;t;)t=Tr(t.nextSibling)}function ms(){Lt=jt=null,Te=!1}function cf(t){sn===null?sn=[t]:sn.push(t)}var _S=Zn.ReactCurrentBatchConfig;function oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Ja(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gg(t){var e=t._init;return e(t._payload)}function qv(t){function e(w,y){if(t){var E=w.deletions;E===null?(w.deletions=[y],w.flags|=16):E.push(y)}}function n(w,y){if(!t)return null;for(;y!==null;)e(w,y),y=y.sibling;return null}function r(w,y){for(w=new Map;y!==null;)y.key!==null?w.set(y.key,y):w.set(y.index,y),y=y.sibling;return w}function i(w,y){return w=Pr(w,y),w.index=0,w.sibling=null,w}function s(w,y,E){return w.index=E,t?(E=w.alternate,E!==null?(E=E.index,E<y?(w.flags|=2,y):E):(w.flags|=2,y)):(w.flags|=1048576,y)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,y,E,R){return y===null||y.tag!==6?(y=th(E,w.mode,R),y.return=w,y):(y=i(y,E),y.return=w,y)}function c(w,y,E,R){var O=E.type;return O===$i?p(w,y,E.props.children,R,E.key):y!==null&&(y.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===cr&&gg(O)===y.type)?(R=i(y,E.props),R.ref=oo(w,y,E),R.return=w,R):(R=wl(E.type,E.key,E.props,null,w.mode,R),R.ref=oo(w,y,E),R.return=w,R)}function u(w,y,E,R){return y===null||y.tag!==4||y.stateNode.containerInfo!==E.containerInfo||y.stateNode.implementation!==E.implementation?(y=nh(E,w.mode,R),y.return=w,y):(y=i(y,E.children||[]),y.return=w,y)}function p(w,y,E,R,O){return y===null||y.tag!==7?(y=hi(E,w.mode,R,O),y.return=w,y):(y=i(y,E),y.return=w,y)}function m(w,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return y=th(""+y,w.mode,E),y.return=w,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ba:return E=wl(y.type,y.key,y.props,null,w.mode,E),E.ref=oo(w,null,y),E.return=w,E;case Bi:return y=nh(y,w.mode,E),y.return=w,y;case cr:var R=y._init;return m(w,R(y._payload),E)}if(ho(y)||to(y))return y=hi(y,w.mode,E,null),y.return=w,y;Ja(w,y)}return null}function g(w,y,E,R){var O=y!==null?y.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return O!==null?null:l(w,y,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ba:return E.key===O?c(w,y,E,R):null;case Bi:return E.key===O?u(w,y,E,R):null;case cr:return O=E._init,g(w,y,O(E._payload),R)}if(ho(E)||to(E))return O!==null?null:p(w,y,E,R,null);Ja(w,E)}return null}function S(w,y,E,R,O){if(typeof R=="string"&&R!==""||typeof R=="number")return w=w.get(E)||null,l(y,w,""+R,O);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Ba:return w=w.get(R.key===null?E:R.key)||null,c(y,w,R,O);case Bi:return w=w.get(R.key===null?E:R.key)||null,u(y,w,R,O);case cr:var M=R._init;return S(w,y,E,M(R._payload),O)}if(ho(R)||to(R))return w=w.get(E)||null,p(y,w,R,O,null);Ja(y,R)}return null}function k(w,y,E,R){for(var O=null,M=null,I=y,v=y=0,T=null;I!==null&&v<E.length;v++){I.index>v?(T=I,I=null):T=I.sibling;var C=g(w,I,E[v],R);if(C===null){I===null&&(I=T);break}t&&I&&C.alternate===null&&e(w,I),y=s(C,y,v),M===null?O=C:M.sibling=C,M=C,I=T}if(v===E.length)return n(w,I),Te&&ni(w,v),O;if(I===null){for(;v<E.length;v++)I=m(w,E[v],R),I!==null&&(y=s(I,y,v),M===null?O=I:M.sibling=I,M=I);return Te&&ni(w,v),O}for(I=r(w,I);v<E.length;v++)T=S(I,w,v,E[v],R),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?v:T.key),y=s(T,y,v),M===null?O=T:M.sibling=T,M=T);return t&&I.forEach(function(P){return e(w,P)}),Te&&ni(w,v),O}function x(w,y,E,R){var O=to(E);if(typeof O!="function")throw Error(F(150));if(E=O.call(E),E==null)throw Error(F(151));for(var M=O=null,I=y,v=y=0,T=null,C=E.next();I!==null&&!C.done;v++,C=E.next()){I.index>v?(T=I,I=null):T=I.sibling;var P=g(w,I,C.value,R);if(P===null){I===null&&(I=T);break}t&&I&&P.alternate===null&&e(w,I),y=s(P,y,v),M===null?O=P:M.sibling=P,M=P,I=T}if(C.done)return n(w,I),Te&&ni(w,v),O;if(I===null){for(;!C.done;v++,C=E.next())C=m(w,C.value,R),C!==null&&(y=s(C,y,v),M===null?O=C:M.sibling=C,M=C);return Te&&ni(w,v),O}for(I=r(w,I);!C.done;v++,C=E.next())C=S(I,w,v,C.value,R),C!==null&&(t&&C.alternate!==null&&I.delete(C.key===null?v:C.key),y=s(C,y,v),M===null?O=C:M.sibling=C,M=C);return t&&I.forEach(function(N){return e(w,N)}),Te&&ni(w,v),O}function b(w,y,E,R){if(typeof E=="object"&&E!==null&&E.type===$i&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Ba:e:{for(var O=E.key,M=y;M!==null;){if(M.key===O){if(O=E.type,O===$i){if(M.tag===7){n(w,M.sibling),y=i(M,E.props.children),y.return=w,w=y;break e}}else if(M.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===cr&&gg(O)===M.type){n(w,M.sibling),y=i(M,E.props),y.ref=oo(w,M,E),y.return=w,w=y;break e}n(w,M);break}else e(w,M);M=M.sibling}E.type===$i?(y=hi(E.props.children,w.mode,R,E.key),y.return=w,w=y):(R=wl(E.type,E.key,E.props,null,w.mode,R),R.ref=oo(w,y,E),R.return=w,w=R)}return o(w);case Bi:e:{for(M=E.key;y!==null;){if(y.key===M)if(y.tag===4&&y.stateNode.containerInfo===E.containerInfo&&y.stateNode.implementation===E.implementation){n(w,y.sibling),y=i(y,E.children||[]),y.return=w,w=y;break e}else{n(w,y);break}else e(w,y);y=y.sibling}y=nh(E,w.mode,R),y.return=w,w=y}return o(w);case cr:return M=E._init,b(w,y,M(E._payload),R)}if(ho(E))return k(w,y,E,R);if(to(E))return x(w,y,E,R);Ja(w,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,y!==null&&y.tag===6?(n(w,y.sibling),y=i(y,E),y.return=w,w=y):(n(w,y),y=th(E,w.mode,R),y.return=w,w=y),o(w)):n(w,y)}return b}var gs=qv(!0),Wv=qv(!1),Hl=zr(null),ql=null,Yi=null,uf=null;function hf(){uf=Yi=ql=null}function df(t){var e=Hl.current;Ie(Hl),t._currentValue=e}function Qh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function is(t,e){ql=t,uf=Yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kt=!0),t.firstContext=null)}function Jt(t){var e=t._currentValue;if(uf!==t)if(t={context:t,memoizedValue:e,next:null},Yi===null){if(ql===null)throw Error(F(308));Yi=t,ql.dependencies={lanes:0,firstContext:t}}else Yi=Yi.next=t;return e}var oi=null;function ff(t){oi===null?oi=[t]:oi.push(t)}function Gv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ff(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wn(t,r)}function Wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ur=!1;function pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wn(t,n)}return i=r.interleaved,i===null?(e.next=e,ff(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wn(t,n)}function pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jd(t,n)}}function _g(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wl(t,e,n,r){var i=t.updateQueue;ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=c))}if(s!==null){var m=i.baseState;o=0,p=u=c=null,l=s;do{var g=l.lane,S=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,x=l;switch(g=e,S=n,x.tag){case 1:if(k=x.payload,typeof k=="function"){m=k.call(S,m,g);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,g=typeof k=="function"?k.call(S,m,g):k,g==null)break e;m=Pe({},m,g);break e;case 2:ur=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=S,c=m):p=p.next=S,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(p===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gi|=o,t.lanes=o,t.memoizedState=m}}function yg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var pa={},Sn=zr(pa),Go=zr(pa),Ko=zr(pa);function ai(t){if(t===pa)throw Error(F(174));return t}function mf(t,e){switch(_e(Ko,e),_e(Go,t),_e(Sn,pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rh(e,t)}Ie(Sn),_e(Sn,e)}function _s(){Ie(Sn),Ie(Go),Ie(Ko)}function Qv(t){ai(Ko.current);var e=ai(Sn.current),n=Rh(e,t.type);e!==n&&(_e(Go,t),_e(Sn,n))}function gf(t){Go.current===t&&(Ie(Sn),Ie(Go))}var Ae=zr(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qu=[];function _f(){for(var t=0;t<Qu.length;t++)Qu[t]._workInProgressVersionPrimary=null;Qu.length=0}var ml=Zn.ReactCurrentDispatcher,Yu=Zn.ReactCurrentBatchConfig,mi=0,Ce=null,qe=null,Ye=null,Kl=!1,Co=!1,Qo=0,yS=0;function ot(){throw Error(F(321))}function yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function vf(t,e,n,r,i,s){if(mi=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ml.current=t===null||t.memoizedState===null?IS:TS,t=n(r,i),Co){s=0;do{if(Co=!1,Qo=0,25<=s)throw Error(F(301));s+=1,Ye=qe=null,e.updateQueue=null,ml.current=SS,t=n(r,i)}while(Co)}if(ml.current=Ql,e=qe!==null&&qe.next!==null,mi=0,Ye=qe=Ce=null,Kl=!1,e)throw Error(F(300));return t}function wf(){var t=Qo!==0;return Qo=0,t}function wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Ce.memoizedState=Ye=t:Ye=Ye.next=t,Ye}function Zt(){if(qe===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var e=Ye===null?Ce.memoizedState:Ye.next;if(e!==null)Ye=e,qe=t;else{if(t===null)throw Error(F(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Ye===null?Ce.memoizedState=Ye=t:Ye=Ye.next=t}return Ye}function Yo(t,e){return typeof e=="function"?e(t):e}function Xu(t){var e=Zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,u=s;do{var p=u.lane;if((mi&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,o=r):c=c.next=m,Ce.lanes|=p,gi|=p}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=l,un(r,e.memoizedState)||(kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ce.lanes|=s,gi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ju(t){var e=Zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);un(s,e.memoizedState)||(kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Yv(){}function Xv(t,e){var n=Ce,r=Zt(),i=e(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,kt=!0),r=r.queue,Ef(ew.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Xo(9,Zv.bind(null,n,r,i,e),void 0,null),Xe===null)throw Error(F(349));mi&30||Jv(n,e,i)}return i}function Jv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zv(t,e,n,r){e.value=n,e.getSnapshot=r,tw(e)&&nw(t)}function ew(t,e,n){return n(function(){tw(e)&&nw(t)})}function tw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function nw(t){var e=Wn(t,1);e!==null&&cn(e,t,1,-1)}function vg(t){var e=wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:t},e.queue=t,t=t.dispatch=ES.bind(null,Ce,t),[e.memoizedState,t]}function Xo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rw(){return Zt().memoizedState}function gl(t,e,n,r){var i=wn();Ce.flags|=t,i.memoizedState=Xo(1|e,n,void 0,r===void 0?null:r)}function xc(t,e,n,r){var i=Zt();r=r===void 0?null:r;var s=void 0;if(qe!==null){var o=qe.memoizedState;if(s=o.destroy,r!==null&&yf(r,o.deps)){i.memoizedState=Xo(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=Xo(1|e,n,s,r)}function wg(t,e){return gl(8390656,8,t,e)}function Ef(t,e){return xc(2048,8,t,e)}function iw(t,e){return xc(4,2,t,e)}function sw(t,e){return xc(4,4,t,e)}function ow(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function aw(t,e,n){return n=n!=null?n.concat([t]):null,xc(4,4,ow.bind(null,e,t),n)}function If(){}function lw(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function cw(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function uw(t,e,n){return mi&21?(un(n,e)||(n=mv(),Ce.lanes|=n,gi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kt=!0),t.memoizedState=n)}function vS(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Yu.transition;Yu.transition={};try{t(!1),e()}finally{ue=n,Yu.transition=r}}function hw(){return Zt().memoizedState}function wS(t,e,n){var r=Cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dw(t))fw(e,n);else if(n=Gv(t,e,n,r),n!==null){var i=Et();cn(n,t,r,i),pw(n,e,r)}}function ES(t,e,n){var r=Cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dw(t))fw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,un(l,o)){var c=e.interleaved;c===null?(i.next=i,ff(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=Gv(t,e,i,r),n!==null&&(i=Et(),cn(n,t,r,i),pw(n,e,r))}}function dw(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function fw(t,e){Co=Kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jd(t,n)}}var Ql={readContext:Jt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},IS={readContext:Jt,useCallback:function(t,e){return wn().memoizedState=[t,e===void 0?null:e],t},useContext:Jt,useEffect:wg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gl(4194308,4,ow.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return gl(4,2,t,e)},useMemo:function(t,e){var n=wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=wS.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=wn();return t={current:t},e.memoizedState=t},useState:vg,useDebugValue:If,useDeferredValue:function(t){return wn().memoizedState=t},useTransition:function(){var t=vg(!1),e=t[0];return t=vS.bind(null,t[1]),wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,i=wn();if(Te){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Xe===null)throw Error(F(349));mi&30||Jv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,wg(ew.bind(null,r,s,t),[t]),r.flags|=2048,Xo(9,Zv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=wn(),e=Xe.identifierPrefix;if(Te){var n=Mn,r=Ln;n=(r&~(1<<32-ln(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TS={readContext:Jt,useCallback:lw,useContext:Jt,useEffect:Ef,useImperativeHandle:aw,useInsertionEffect:iw,useLayoutEffect:sw,useMemo:cw,useReducer:Xu,useRef:rw,useState:function(){return Xu(Yo)},useDebugValue:If,useDeferredValue:function(t){var e=Zt();return uw(e,qe.memoizedState,t)},useTransition:function(){var t=Xu(Yo)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:Yv,useSyncExternalStore:Xv,useId:hw,unstable_isNewReconciler:!1},SS={readContext:Jt,useCallback:lw,useContext:Jt,useEffect:Ef,useImperativeHandle:aw,useInsertionEffect:iw,useLayoutEffect:sw,useMemo:cw,useReducer:Ju,useRef:rw,useState:function(){return Ju(Yo)},useDebugValue:If,useDeferredValue:function(t){var e=Zt();return qe===null?e.memoizedState=t:uw(e,qe.memoizedState,t)},useTransition:function(){var t=Ju(Yo)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:Yv,useSyncExternalStore:Xv,useId:hw,unstable_isNewReconciler:!1};function nn(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nc={isMounted:function(t){return(t=t._reactInternals)?Si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Cr(t),s=Un(r,i);s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,i),e!==null&&(cn(e,t,i,r),pl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Cr(t),s=Un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,i),e!==null&&(cn(e,t,i,r),pl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=Cr(t),i=Un(n,r);i.tag=2,e!=null&&(i.callback=e),e=Sr(t,i,r),e!==null&&(cn(e,t,r,n),pl(e,t,r))}};function Eg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!zo(n,r)||!zo(i,s):!0}function mw(t,e,n){var r=!1,i=Or,s=e.contextType;return typeof s=="object"&&s!==null?s=Jt(s):(i=xt(e)?fi:pt.current,r=e.contextTypes,s=(r=r!=null)?ps(t,i):Or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ig(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Nc.enqueueReplaceState(e,e.state,null)}function Xh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},pf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Jt(s):(s=xt(e)?fi:pt.current,i.context=ps(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Nc.enqueueReplaceState(i,i.state,null),Wl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,e){try{var n="",r=e;do n+=JI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AS=typeof WeakMap=="function"?WeakMap:Map;function gw(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Xl||(Xl=!0,ld=r),Jh(t,e)},n}function _w(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Jh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jh(t,e),typeof r!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new AS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=FS.bind(null,t,e,n),e.then(t,t))}function Sg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ag(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var CS=Zn.ReactCurrentOwner,kt=!1;function wt(t,e,n,r){e.child=t===null?Wv(e,null,n,r):gs(e,t.child,n,r)}function Cg(t,e,n,r,i){n=n.render;var s=e.ref;return is(e,i),r=vf(t,e,n,r,s,i),n=wf(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(Te&&n&&af(e),e.flags|=1,wt(t,e,r,i),e.child)}function Pg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!xf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,yw(t,e,s,r,i)):(t=wl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(o,r)&&t.ref===e.ref)return Gn(t,e,i)}return e.flags|=1,t=Pr(s,r),t.ref=e.ref,t.return=e,e.child=t}function yw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(zo(s,r)&&t.ref===e.ref)if(kt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(kt=!0);else return e.lanes=t.lanes,Gn(t,e,i)}return Zh(t,e,n,r,i)}function vw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Ji,Vt),Vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Ji,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(Ji,Vt),Vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(Ji,Vt),Vt|=r;return wt(t,e,i,n),e.child}function ww(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zh(t,e,n,r,i){var s=xt(n)?fi:pt.current;return s=ps(e,s),is(e,i),n=vf(t,e,n,r,s,i),r=wf(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(Te&&r&&af(e),e.flags|=1,wt(t,e,n,i),e.child)}function kg(t,e,n,r,i){if(xt(n)){var s=!0;Bl(e)}else s=!1;if(is(e,i),e.stateNode===null)_l(t,e),mw(e,n,r),Xh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Jt(u):(u=xt(n)?fi:pt.current,u=ps(e,u));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Ig(e,o,r,u),ur=!1;var g=e.memoizedState;o.state=g,Wl(e,r,o,i),c=e.memoizedState,l!==r||g!==c||Rt.current||ur?(typeof p=="function"&&(Yh(e,n,p,r),c=e.memoizedState),(l=ur||Eg(e,n,l,r,g,c,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Kv(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:nn(e.type,l),o.props=u,m=e.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Jt(c):(c=xt(n)?fi:pt.current,c=ps(e,c));var S=n.getDerivedStateFromProps;(p=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==c)&&Ig(e,o,r,c),ur=!1,g=e.memoizedState,o.state=g,Wl(e,r,o,i);var k=e.memoizedState;l!==m||g!==k||Rt.current||ur?(typeof S=="function"&&(Yh(e,n,S,r),k=e.memoizedState),(u=ur||Eg(e,n,u,r,g,k,c)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return ed(t,e,n,r,s,i)}function ed(t,e,n,r,i,s){ww(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fg(e,n,!1),Gn(t,e,s);r=e.stateNode,CS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=gs(e,t.child,null,s),e.child=gs(e,null,l,s)):wt(t,e,l,s),e.memoizedState=r.state,i&&fg(e,n,!0),e.child}function Ew(t){var e=t.stateNode;e.pendingContext?dg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dg(t,e.context,!1),mf(t,e.containerInfo)}function Rg(t,e,n,r,i){return ms(),cf(i),e.flags|=256,wt(t,e,n,r),e.child}var td={dehydrated:null,treeContext:null,retryLane:0};function nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Iw(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Ae,i&1),t===null)return Kh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Oc(o,r,0,null),t=hi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nd(n),e.memoizedState=td,t):Tf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return PS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Pr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Pr(l,s):(s=hi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=td,r}return s=t.child,t=s.sibling,r=Pr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Tf(t,e){return e=Oc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Za(t,e,n,r){return r!==null&&cf(r),gs(e,t.child,null,n),t=Tf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function PS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Zu(Error(F(422))),Za(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Oc({mode:"visible",children:r.children},i,0,null),s=hi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&gs(e,t.child,null,o),e.child.memoizedState=nd(o),e.memoizedState=td,s);if(!(e.mode&1))return Za(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Zu(s,r,void 0),Za(t,e,o,r)}if(l=(o&t.childLanes)!==0,kt||l){if(r=Xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wn(t,i),cn(r,t,i,-1))}return Rf(),r=Zu(Error(F(421))),Za(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=US.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Lt=Tr(i.nextSibling),jt=e,Te=!0,sn=null,t!==null&&(qt[Wt++]=Ln,qt[Wt++]=Mn,qt[Wt++]=pi,Ln=t.id,Mn=t.overflow,pi=e),e=Tf(e,r.children),e.flags|=4096,e)}function xg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qh(t.return,e,n)}function eh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Tw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xg(t,n,e);else if(t.tag===19)xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Gl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),eh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Gl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}eh(e,!0,n,null,s);break;case"together":eh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _l(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kS(t,e,n){switch(e.tag){case 3:Ew(e),ms();break;case 5:Qv(e);break;case 1:xt(e.type)&&Bl(e);break;case 4:mf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Hl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?Iw(t,e,n):(_e(Ae,Ae.current&1),t=Gn(t,e,n),t!==null?t.sibling:null);_e(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Tw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,vw(t,e,n)}return Gn(t,e,n)}var Sw,rd,Aw,Cw;Sw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rd=function(){};Aw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ai(Sn.current);var s=null;switch(n){case"input":i=Ah(t,i),r=Ah(t,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=kh(t,i),r=kh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Fl)}xh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Lo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Lo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&we("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Cw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ao(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function RS(t,e,n){var r=e.pendingProps;switch(lf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return xt(e.type)&&Ul(),at(e),null;case 3:return r=e.stateNode,_s(),Ie(Rt),Ie(pt),_f(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sn!==null&&(hd(sn),sn=null))),rd(t,e),at(e),null;case 5:gf(e);var i=ai(Ko.current);if(n=e.type,t!==null&&e.stateNode!=null)Aw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return at(e),null}if(t=ai(Sn.current),Xa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[In]=e,r[Wo]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<po.length;i++)we(po[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Fm(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":Bm(r,s),we("invalid",r)}xh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ya(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ya(r.textContent,l,t),i=["children",""+l]):Lo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":$a(r),Um(r,s,!0);break;case"textarea":$a(r),$m(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Fl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ev(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[In]=e,t[Wo]=r,Sw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nh(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<po.length;i++)we(po[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Fm(t,r),i=Ah(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),we("invalid",t);break;case"textarea":Bm(t,r),i=kh(t,r),we("invalid",t);break;default:i=r}xh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?rv(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&tv(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Mo(t,c):typeof c=="number"&&Mo(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Lo.hasOwnProperty(s)?c!=null&&s==="onScroll"&&we("scroll",t):c!=null&&Wd(t,s,c,o))}switch(n){case"input":$a(t),Um(t,r,!1);break;case"textarea":$a(t),$m(t);break;case"option":r.value!=null&&t.setAttribute("value",""+br(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?es(t,!!r.multiple,s,!1):r.defaultValue!=null&&es(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)Cw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ai(Ko.current),ai(Sn.current),Xa(e)){if(r=e.stateNode,n=e.memoizedProps,r[In]=e,(s=r.nodeValue!==n)&&(t=jt,t!==null))switch(t.tag){case 3:Ya(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ya(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[In]=e,e.stateNode=r}return at(e),null;case 13:if(Ie(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Lt!==null&&e.mode&1&&!(e.flags&128))Hv(),ms(),e.flags|=98560,s=!1;else if(s=Xa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[In]=e}else ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),s=!1}else sn!==null&&(hd(sn),sn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?We===0&&(We=3):Rf())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return _s(),rd(t,e),t===null&&Ho(e.stateNode.containerInfo),at(e),null;case 10:return df(e.type._context),at(e),null;case 17:return xt(e.type)&&Ul(),at(e),null;case 19:if(Ie(Ae),s=e.memoizedState,s===null)return at(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ao(s,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gl(t),o!==null){for(e.flags|=128,ao(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ve()>vs&&(e.flags|=128,r=!0,ao(s,!1),e.lanes=4194304)}else{if(!r)if(t=Gl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return at(e),null}else 2*Ve()-s.renderingStartTime>vs&&n!==1073741824&&(e.flags|=128,r=!0,ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ve(),e.sibling=null,n=Ae.current,_e(Ae,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return kf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function xS(t,e){switch(lf(e),e.tag){case 1:return xt(e.type)&&Ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),Ie(Rt),Ie(pt),_f(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gf(e),null;case 13:if(Ie(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Ae),null;case 4:return _s(),null;case 10:return df(e.type._context),null;case 22:case 23:return kf(),null;case 24:return null;default:return null}}var el=!1,dt=!1,NS=typeof WeakSet=="function"?WeakSet:Set,q=null;function Xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function id(t,e,n){try{n()}catch(r){xe(t,e,r)}}var Ng=!1;function DS(t,e){if(Bh=Ll,t=Nv(),of(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,p=0,m=t,g=null;t:for(;;){for(var S;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(S=m.firstChild)!==null;)g=m,m=S;for(;;){if(m===t)break t;if(g===n&&++u===i&&(l=o),g===s&&++p===r&&(c=o),(S=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=S}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for($h={focusedElem:t,selectionRange:n},Ll=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,b=k.memoizedState,w=e.stateNode,y=w.getSnapshotBeforeUpdate(e.elementType===e.type?x:nn(e.type,x),b);w.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(R){xe(e,e.return,R)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return k=Ng,Ng=!1,k}function Po(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&id(e,n,s)}i=i.next}while(i!==r)}}function Dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Pw(t){var e=t.alternate;e!==null&&(t.alternate=null,Pw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[In],delete e[Wo],delete e[qh],delete e[pS],delete e[mS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kw(t){return t.tag===5||t.tag===3||t.tag===4}function Dg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function od(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fl));else if(r!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}var Ze=null,rn=!1;function ar(t,e,n){for(n=n.child;n!==null;)Rw(t,e,n),n=n.sibling}function Rw(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(Sc,n)}catch{}switch(n.tag){case 5:dt||Xi(n,e);case 6:var r=Ze,i=rn;Ze=null,ar(t,e,n),Ze=r,rn=i,Ze!==null&&(rn?(t=Ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(rn?(t=Ze,n=n.stateNode,t.nodeType===8?Gu(t.parentNode,n):t.nodeType===1&&Gu(t,n),Bo(t)):Gu(Ze,n.stateNode));break;case 4:r=Ze,i=rn,Ze=n.stateNode.containerInfo,rn=!0,ar(t,e,n),Ze=r,rn=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&id(n,e,o),i=i.next}while(i!==r)}ar(t,e,n);break;case 1:if(!dt&&(Xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,ar(t,e,n),dt=r):ar(t,e,n);break;default:ar(t,e,n)}}function bg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new NS),e.forEach(function(r){var i=BS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ze=l.stateNode,rn=!1;break e;case 3:Ze=l.stateNode.containerInfo,rn=!0;break e;case 4:Ze=l.stateNode.containerInfo,rn=!0;break e}l=l.return}if(Ze===null)throw Error(F(160));Rw(s,o,i),Ze=null,rn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){xe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xw(e,t),e=e.sibling}function xw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tn(e,t),yn(t),r&4){try{Po(3,t,t.return),Dc(3,t)}catch(x){xe(t,t.return,x)}try{Po(5,t,t.return)}catch(x){xe(t,t.return,x)}}break;case 1:tn(e,t),yn(t),r&512&&n!==null&&Xi(n,n.return);break;case 5:if(tn(e,t),yn(t),r&512&&n!==null&&Xi(n,n.return),t.flags&32){var i=t.stateNode;try{Mo(i,"")}catch(x){xe(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Jy(i,s),Nh(l,o);var u=Nh(l,s);for(o=0;o<c.length;o+=2){var p=c[o],m=c[o+1];p==="style"?rv(i,m):p==="dangerouslySetInnerHTML"?tv(i,m):p==="children"?Mo(i,m):Wd(i,p,m,u)}switch(l){case"input":Ch(i,s);break;case"textarea":Zy(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?es(i,!!s.multiple,S,!1):g!==!!s.multiple&&(s.defaultValue!=null?es(i,!!s.multiple,s.defaultValue,!0):es(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wo]=s}catch(x){xe(t,t.return,x)}}break;case 6:if(tn(e,t),yn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){xe(t,t.return,x)}}break;case 3:if(tn(e,t),yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bo(e.containerInfo)}catch(x){xe(t,t.return,x)}break;case 4:tn(e,t),yn(t);break;case 13:tn(e,t),yn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cf=Ve())),r&4&&bg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(u=dt)||p,tn(e,t),dt=u):tn(e,t),yn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!p&&t.mode&1)for(q=t,p=t.child;p!==null;){for(m=q=p;q!==null;){switch(g=q,S=g.child,g.tag){case 0:case 11:case 14:case 15:Po(4,g,g.return);break;case 1:Xi(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(x){xe(r,n,x)}}break;case 5:Xi(g,g.return);break;case 22:if(g.memoizedState!==null){Vg(m);continue}}S!==null?(S.return=g,q=S):Vg(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=nv("display",o))}catch(x){xe(t,t.return,x)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(x){xe(t,t.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:tn(e,t),yn(t),r&4&&bg(t);break;case 21:break;default:tn(e,t),yn(t)}}function yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mo(i,""),r.flags&=-33);var s=Dg(t);ad(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Dg(t);od(t,l,o);break;default:throw Error(F(161))}}catch(c){xe(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bS(t,e,n){q=t,Nw(t)}function Nw(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||el;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||dt;l=el;var u=dt;if(el=o,(dt=c)&&!u)for(q=i;q!==null;)o=q,c=o.child,o.tag===22&&o.memoizedState!==null?Lg(i):c!==null?(c.return=o,q=c):Lg(i);for(;s!==null;)q=s,Nw(s),s=s.sibling;q=i,el=l,dt=u}Og(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Og(t)}}function Og(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||Dc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Bo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}dt||e.flags&512&&sd(e)}catch(g){xe(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Vg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Lg(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dc(4,e)}catch(c){xe(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){xe(e,i,c)}}var s=e.return;try{sd(e)}catch(c){xe(e,s,c)}break;case 5:var o=e.return;try{sd(e)}catch(c){xe(e,o,c)}}}catch(c){xe(e,e.return,c)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var OS=Math.ceil,Yl=Zn.ReactCurrentDispatcher,Sf=Zn.ReactCurrentOwner,Qt=Zn.ReactCurrentBatchConfig,ae=0,Xe=null,Ue=null,nt=0,Vt=0,Ji=zr(0),We=0,Jo=null,gi=0,bc=0,Af=0,ko=null,Ct=null,Cf=0,vs=1/0,On=null,Xl=!1,ld=null,Ar=null,tl=!1,yr=null,Jl=0,Ro=0,cd=null,yl=-1,vl=0;function Et(){return ae&6?Ve():yl!==-1?yl:yl=Ve()}function Cr(t){return t.mode&1?ae&2&&nt!==0?nt&-nt:_S.transition!==null?(vl===0&&(vl=mv()),vl):(t=ue,t!==0||(t=window.event,t=t===void 0?16:Iv(t.type)),t):1}function cn(t,e,n,r){if(50<Ro)throw Ro=0,cd=null,Error(F(185));ha(t,n,r),(!(ae&2)||t!==Xe)&&(t===Xe&&(!(ae&2)&&(bc|=n),We===4&&dr(t,nt)),Nt(t,r),n===1&&ae===0&&!(e.mode&1)&&(vs=Ve()+500,Rc&&Hr()))}function Nt(t,e){var n=t.callbackNode;_T(t,e);var r=Vl(t,t===Xe?nt:0);if(r===0)n!==null&&qm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&qm(n),e===1)t.tag===0?gS(Mg.bind(null,t)):Bv(Mg.bind(null,t)),dS(function(){!(ae&6)&&Hr()}),n=null;else{switch(gv(r)){case 1:n=Xd;break;case 4:n=fv;break;case 16:n=Ol;break;case 536870912:n=pv;break;default:n=Ol}n=Fw(n,Dw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dw(t,e){if(yl=-1,vl=0,ae&6)throw Error(F(327));var n=t.callbackNode;if(ss()&&t.callbackNode!==n)return null;var r=Vl(t,t===Xe?nt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Zl(t,r);else{e=r;var i=ae;ae|=2;var s=Ow();(Xe!==t||nt!==e)&&(On=null,vs=Ve()+500,ui(t,e));do try{MS();break}catch(l){bw(t,l)}while(!0);hf(),Yl.current=s,ae=i,Ue!==null?e=0:(Xe=null,nt=0,e=We)}if(e!==0){if(e===2&&(i=Lh(t),i!==0&&(r=i,e=ud(t,i))),e===1)throw n=Jo,ui(t,0),dr(t,r),Nt(t,Ve()),n;if(e===6)dr(t,r);else{if(i=t.current.alternate,!(r&30)&&!VS(i)&&(e=Zl(t,r),e===2&&(s=Lh(t),s!==0&&(r=s,e=ud(t,s))),e===1))throw n=Jo,ui(t,0),dr(t,r),Nt(t,Ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:ri(t,Ct,On);break;case 3:if(dr(t,r),(r&130023424)===r&&(e=Cf+500-Ve(),10<e)){if(Vl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Hh(ri.bind(null,t,Ct,On),e);break}ri(t,Ct,On);break;case 4:if(dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ln(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*OS(r/1960))-r,10<r){t.timeoutHandle=Hh(ri.bind(null,t,Ct,On),r);break}ri(t,Ct,On);break;case 5:ri(t,Ct,On);break;default:throw Error(F(329))}}}return Nt(t,Ve()),t.callbackNode===n?Dw.bind(null,t):null}function ud(t,e){var n=ko;return t.current.memoizedState.isDehydrated&&(ui(t,e).flags|=256),t=Zl(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&hd(e)),t}function hd(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function VS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~Af,e&=~bc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ln(e),r=1<<n;t[n]=-1,e&=~r}}function Mg(t){if(ae&6)throw Error(F(327));ss();var e=Vl(t,0);if(!(e&1))return Nt(t,Ve()),null;var n=Zl(t,e);if(t.tag!==0&&n===2){var r=Lh(t);r!==0&&(e=r,n=ud(t,r))}if(n===1)throw n=Jo,ui(t,0),dr(t,e),Nt(t,Ve()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ri(t,Ct,On),Nt(t,Ve()),null}function Pf(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(vs=Ve()+500,Rc&&Hr())}}function _i(t){yr!==null&&yr.tag===0&&!(ae&6)&&ss();var e=ae;ae|=1;var n=Qt.transition,r=ue;try{if(Qt.transition=null,ue=1,t)return t()}finally{ue=r,Qt.transition=n,ae=e,!(ae&6)&&Hr()}}function kf(){Vt=Ji.current,Ie(Ji)}function ui(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hS(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(lf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ul();break;case 3:_s(),Ie(Rt),Ie(pt),_f();break;case 5:gf(r);break;case 4:_s();break;case 13:Ie(Ae);break;case 19:Ie(Ae);break;case 10:df(r.type._context);break;case 22:case 23:kf()}n=n.return}if(Xe=t,Ue=t=Pr(t.current,null),nt=Vt=e,We=0,Jo=null,Af=bc=gi=0,Ct=ko=null,oi!==null){for(e=0;e<oi.length;e++)if(n=oi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}oi=null}return t}function bw(t,e){do{var n=Ue;try{if(hf(),ml.current=Ql,Kl){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Kl=!1}if(mi=0,Ye=qe=Ce=null,Co=!1,Qo=0,Sf.current=null,n===null||n.return===null){We=1,Jo=e,Ue=null;break}e:{var s=t,o=n.return,l=n,c=e;if(e=nt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=Sg(o);if(S!==null){S.flags&=-257,Ag(S,o,l,s,e),S.mode&1&&Tg(s,u,e),e=S,c=u;var k=e.updateQueue;if(k===null){var x=new Set;x.add(c),e.updateQueue=x}else k.add(c);break e}else{if(!(e&1)){Tg(s,u,e),Rf();break e}c=Error(F(426))}}else if(Te&&l.mode&1){var b=Sg(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Ag(b,o,l,s,e),cf(ys(c,l));break e}}s=c=ys(c,l),We!==4&&(We=2),ko===null?ko=[s]:ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=gw(s,c,e);_g(s,w);break e;case 1:l=c;var y=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Ar===null||!Ar.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var R=_w(s,l,e);_g(s,R);break e}}s=s.return}while(s!==null)}Lw(n)}catch(O){e=O,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function Ow(){var t=Yl.current;return Yl.current=Ql,t===null?Ql:t}function Rf(){(We===0||We===3||We===2)&&(We=4),Xe===null||!(gi&268435455)&&!(bc&268435455)||dr(Xe,nt)}function Zl(t,e){var n=ae;ae|=2;var r=Ow();(Xe!==t||nt!==e)&&(On=null,ui(t,e));do try{LS();break}catch(i){bw(t,i)}while(!0);if(hf(),ae=n,Yl.current=r,Ue!==null)throw Error(F(261));return Xe=null,nt=0,We}function LS(){for(;Ue!==null;)Vw(Ue)}function MS(){for(;Ue!==null&&!lT();)Vw(Ue)}function Vw(t){var e=jw(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?Lw(t):Ue=e,Sf.current=null}function Lw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xS(n,e),n!==null){n.flags&=32767,Ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,Ue=null;return}}else if(n=RS(n,e,Vt),n!==null){Ue=n;return}if(e=e.sibling,e!==null){Ue=e;return}Ue=e=t}while(e!==null);We===0&&(We=5)}function ri(t,e,n){var r=ue,i=Qt.transition;try{Qt.transition=null,ue=1,jS(t,e,n,r)}finally{Qt.transition=i,ue=r}return null}function jS(t,e,n,r){do ss();while(yr!==null);if(ae&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yT(t,s),t===Xe&&(Ue=Xe=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,Fw(Ol,function(){return ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qt.transition,Qt.transition=null;var o=ue;ue=1;var l=ae;ae|=4,Sf.current=null,DS(t,n),xw(n,t),iS($h),Ll=!!Bh,$h=Bh=null,t.current=n,bS(n),cT(),ae=l,ue=o,Qt.transition=s}else t.current=n;if(tl&&(tl=!1,yr=t,Jl=i),s=t.pendingLanes,s===0&&(Ar=null),dT(n.stateNode),Nt(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xl)throw Xl=!1,t=ld,ld=null,t;return Jl&1&&t.tag!==0&&ss(),s=t.pendingLanes,s&1?t===cd?Ro++:(Ro=0,cd=t):Ro=0,Hr(),null}function ss(){if(yr!==null){var t=gv(Jl),e=Qt.transition,n=ue;try{if(Qt.transition=null,ue=16>t?16:t,yr===null)var r=!1;else{if(t=yr,yr=null,Jl=0,ae&6)throw Error(F(331));var i=ae;for(ae|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(q=u;q!==null;){var p=q;switch(p.tag){case 0:case 11:case 15:Po(8,p,s)}var m=p.child;if(m!==null)m.return=p,q=m;else for(;q!==null;){p=q;var g=p.sibling,S=p.return;if(Pw(p),p===u){q=null;break}if(g!==null){g.return=S,q=g;break}q=S}}}var k=s.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Po(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,q=w;break e}q=s.return}}var y=t.current;for(q=y;q!==null;){o=q;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,q=E;else e:for(o=y;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Dc(9,l)}}catch(O){xe(l,l.return,O)}if(l===o){q=null;break e}var R=l.sibling;if(R!==null){R.return=l.return,q=R;break e}q=l.return}}if(ae=i,Hr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(Sc,t)}catch{}r=!0}return r}finally{ue=n,Qt.transition=e}}return!1}function jg(t,e,n){e=ys(n,e),e=gw(t,e,1),t=Sr(t,e,1),e=Et(),t!==null&&(ha(t,1,e),Nt(t,e))}function xe(t,e,n){if(t.tag===3)jg(t,t,n);else for(;e!==null;){if(e.tag===3){jg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ar===null||!Ar.has(r))){t=ys(n,t),t=_w(e,t,1),e=Sr(e,t,1),t=Et(),e!==null&&(ha(e,1,t),Nt(e,t));break}}e=e.return}}function FS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(nt&n)===n&&(We===4||We===3&&(nt&130023424)===nt&&500>Ve()-Cf?ui(t,0):Af|=n),Nt(t,e)}function Mw(t,e){e===0&&(t.mode&1?(e=qa,qa<<=1,!(qa&130023424)&&(qa=4194304)):e=1);var n=Et();t=Wn(t,e),t!==null&&(ha(t,e,n),Nt(t,n))}function US(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Mw(t,n)}function BS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Mw(t,n)}var jw;jw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rt.current)kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return kt=!1,kS(t,e,n);kt=!!(t.flags&131072)}else kt=!1,Te&&e.flags&1048576&&$v(e,zl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;_l(t,e),t=e.pendingProps;var i=ps(e,pt.current);is(e,n),i=vf(null,e,r,t,i,n);var s=wf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(s=!0,Bl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pf(e),i.updater=Nc,e.stateNode=i,i._reactInternals=e,Xh(e,r,t,n),e=ed(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&af(e),wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(_l(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zS(r),t=nn(r,t),i){case 0:e=Zh(null,e,r,t,n);break e;case 1:e=kg(null,e,r,t,n);break e;case 11:e=Cg(null,e,r,t,n);break e;case 14:e=Pg(null,e,r,nn(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Zh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),kg(t,e,r,i,n);case 3:e:{if(Ew(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Kv(t,e),Wl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ys(Error(F(423)),e),e=Rg(t,e,r,n,i);break e}else if(r!==i){i=ys(Error(F(424)),e),e=Rg(t,e,r,n,i);break e}else for(Lt=Tr(e.stateNode.containerInfo.firstChild),jt=e,Te=!0,sn=null,n=Wv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ms(),r===i){e=Gn(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return Qv(e),t===null&&Kh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zh(r,i)?o=null:s!==null&&zh(r,s)&&(e.flags|=32),ww(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&Kh(e),null;case 13:return Iw(t,e,n);case 4:return mf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=gs(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Cg(t,e,r,i,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(Hl,r._currentValue),r._currentValue=o,s!==null)if(un(s.value,o)){if(s.children===i.children&&!Rt.current){e=Gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Un(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Qh(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Qh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,is(e,n),i=Jt(i),r=r(i),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,i=nn(r,e.pendingProps),i=nn(r.type,i),Pg(t,e,r,i,n);case 15:return yw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),_l(t,e),e.tag=1,xt(r)?(t=!0,Bl(e)):t=!1,is(e,n),mw(e,r,i),Xh(e,r,i,n),ed(null,e,r,!0,t,n);case 19:return Tw(t,e,n);case 22:return vw(t,e,n)}throw Error(F(156,e.tag))};function Fw(t,e){return dv(t,e)}function $S(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(t,e,n,r){return new $S(t,e,n,r)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zS(t){if(typeof t=="function")return xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kd)return 11;if(t===Qd)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")xf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $i:return hi(n.children,i,s,e);case Gd:o=8,i|=8;break;case Eh:return t=Kt(12,n,e,i|2),t.elementType=Eh,t.lanes=s,t;case Ih:return t=Kt(13,n,e,i),t.elementType=Ih,t.lanes=s,t;case Th:return t=Kt(19,n,e,i),t.elementType=Th,t.lanes=s,t;case Qy:return Oc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gy:o=10;break e;case Ky:o=9;break e;case Kd:o=11;break e;case Qd:o=14;break e;case cr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function hi(t,e,n,r){return t=Kt(7,t,r,e),t.lanes=n,t}function Oc(t,e,n,r){return t=Kt(22,t,r,e),t.elementType=Qy,t.lanes=n,t.stateNode={isHidden:!1},t}function th(t,e,n){return t=Kt(6,t,null,e),t.lanes=n,t}function nh(t,e,n){return e=Kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lu(0),this.expirationTimes=Lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nf(t,e,n,r,i,s,o,l,c){return t=new HS(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pf(s),t}function qS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Uw(t){if(!t)return Or;t=t._reactInternals;e:{if(Si(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(xt(n))return Uv(t,n,e)}return e}function Bw(t,e,n,r,i,s,o,l,c){return t=Nf(n,r,!0,t,i,s,o,l,c),t.context=Uw(null),n=t.current,r=Et(),i=Cr(n),s=Un(r,i),s.callback=e??null,Sr(n,s,i),t.current.lanes=i,ha(t,i,r),Nt(t,r),t}function Vc(t,e,n,r){var i=e.current,s=Et(),o=Cr(i);return n=Uw(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Sr(i,e,o),t!==null&&(cn(t,i,o,s),pl(t,i,o)),o}function ec(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Df(t,e){Fg(t,e),(t=t.alternate)&&Fg(t,e)}function WS(){return null}var $w=typeof reportError=="function"?reportError:function(t){console.error(t)};function bf(t){this._internalRoot=t}Lc.prototype.render=bf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Vc(t,e,null,null)};Lc.prototype.unmount=bf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_i(function(){Vc(null,t,null,null)}),e[qn]=null}};function Lc(t){this._internalRoot=t}Lc.prototype.unstable_scheduleHydration=function(t){if(t){var e=vv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&Ev(t)}};function Of(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ug(){}function GS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ec(o);s.call(u)}}var o=Bw(e,r,t,0,null,!1,!1,"",Ug);return t._reactRootContainer=o,t[qn]=o.current,Ho(t.nodeType===8?t.parentNode:t),_i(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=ec(c);l.call(u)}}var c=Nf(t,0,!1,null,null,!1,!1,"",Ug);return t._reactRootContainer=c,t[qn]=c.current,Ho(t.nodeType===8?t.parentNode:t),_i(function(){Vc(e,c,n,r)}),c}function jc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=ec(o);l.call(c)}}Vc(e,o,t,i)}else o=GS(n,e,t,i,r);return ec(o)}_v=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fo(e.pendingLanes);n!==0&&(Jd(e,n|1),Nt(e,Ve()),!(ae&6)&&(vs=Ve()+500,Hr()))}break;case 13:_i(function(){var r=Wn(t,1);if(r!==null){var i=Et();cn(r,t,1,i)}}),Df(t,1)}};Zd=function(t){if(t.tag===13){var e=Wn(t,134217728);if(e!==null){var n=Et();cn(e,t,134217728,n)}Df(t,134217728)}};yv=function(t){if(t.tag===13){var e=Cr(t),n=Wn(t,e);if(n!==null){var r=Et();cn(n,t,e,r)}Df(t,e)}};vv=function(){return ue};wv=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};bh=function(t,e,n){switch(e){case"input":if(Ch(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=kc(r);if(!i)throw Error(F(90));Xy(r),Ch(r,i)}}}break;case"textarea":Zy(t,n);break;case"select":e=n.value,e!=null&&es(t,!!n.multiple,e,!1)}};ov=Pf;av=_i;var KS={usingClientEntryPoint:!1,Events:[fa,Wi,kc,iv,sv,Pf]},lo={findFiberByHostInstance:si,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QS={bundleType:lo.bundleType,version:lo.version,rendererPackageName:lo.rendererPackageName,rendererConfig:lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=uv(t),t===null?null:t.stateNode},findFiberByHostInstance:lo.findFiberByHostInstance||WS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Sc=nl.inject(QS),Tn=nl}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KS;Bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Of(e))throw Error(F(200));return qS(t,e,null,n)};Bt.createRoot=function(t,e){if(!Of(t))throw Error(F(299));var n=!1,r="",i=$w;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Nf(t,1,!1,null,null,n,!1,r,i),t[qn]=e.current,Ho(t.nodeType===8?t.parentNode:t),new bf(e)};Bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=uv(e),t=t===null?null:t.stateNode,t};Bt.flushSync=function(t){return _i(t)};Bt.hydrate=function(t,e,n){if(!Mc(e))throw Error(F(200));return jc(null,t,e,!0,n)};Bt.hydrateRoot=function(t,e,n){if(!Of(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$w;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bw(e,null,t,1,n??null,i,!1,s,o),t[qn]=e.current,Ho(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Lc(e)};Bt.render=function(t,e,n){if(!Mc(e))throw Error(F(200));return jc(null,t,e,!1,n)};Bt.unmountComponentAtNode=function(t){if(!Mc(t))throw Error(F(40));return t._reactRootContainer?(_i(function(){jc(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1};Bt.unstable_batchedUpdates=Pf;Bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Mc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return jc(t,e,n,!1,r)};Bt.version="18.3.1-next-f1338f8080-20240426";function zw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zw)}catch(t){console.error(t)}}zw(),zy.exports=Bt;var Hw=zy.exports,Bg=Hw;vh.createRoot=Bg.createRoot,vh.hydrateRoot=Bg.hydrateRoot;const YS=()=>{};var $g={};/**
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
 */const qw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},XS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ww={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|u>>6,S=u&63;c||(S=64,o||(g=64)),r.push(n[p],n[m],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||m==null)throw new JS;const g=s<<2|l>>4;if(r.push(g),u!==64){const S=l<<4&240|u>>2;if(r.push(S),m!==64){const k=u<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class JS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZS=function(t){const e=qw(t);return Ww.encodeByteArray(e,!0)},tc=function(t){return ZS(t).replace(/\./g,"")},Gw=function(t){try{return Ww.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function eA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tA=()=>eA().__FIREBASE_DEFAULTS__,nA=()=>{if(typeof process>"u"||typeof $g>"u")return;const t=$g.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gw(t[1]);return e&&JSON.parse(e)},Fc=()=>{try{return YS()||tA()||nA()||rA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kw=t=>{var e,n;return(n=(e=Fc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},iA=t=>{const e=Kw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Qw=()=>{var t;return(t=Fc())==null?void 0:t.config},Yw=t=>{var e;return(e=Fc())==null?void 0:e[`_${t}`]};/**
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
 */class sA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Xw(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function oA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[tc(JSON.stringify(n)),tc(JSON.stringify(o)),""].join(".")}const xo={};function aA(){const t={prod:[],emulator:[]};for(const e of Object.keys(xo))xo[e]?t.emulator.push(e):t.prod.push(e);return t}function lA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let zg=!1;function Jw(t,e){if(typeof window>"u"||typeof document>"u"||!xs(window.location.host)||xo[t]===e||xo[t]||zg)return;xo[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=aA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,S){g.setAttribute("width","24"),g.setAttribute("id",S),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{zg=!0,o()},g}function p(g,S){g.setAttribute("id",S),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=lA(r),S=n("text"),k=document.getElementById(S)||document.createElement("span"),x=n("learnmore"),b=document.getElementById(x)||document.createElement("a"),w=n("preprendIcon"),y=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const E=g.element;l(E),p(b,x);const R=u();c(y,w),E.append(y,k,b,R),document.body.appendChild(E)}s?(k.innerText="Preview backend disconnected.",y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function uA(){var e;const t=(e=Fc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fA(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pA(){return!uA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eE(){try{return typeof indexedDB=="object"}catch{return!1}}function tE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function mA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const gA="FirebaseError";class mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gA,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_A(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new mn(i,l,r)}}function _A(t,e){return t.replace(yA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const yA=/\{\$([^}]+)}/g;function vA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Hg(s)&&Hg(o)){if(!Vr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hg(t){return t!==null&&typeof t=="object"}/**
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
 */function ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function go(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wA(t,e){const n=new EA(t,e);return n.subscribe.bind(n)}class EA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=rh),i.error===void 0&&(i.error=rh),i.complete===void 0&&(i.complete=rh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rh(){}/**
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
 */const TA=1e3,SA=2,AA=4*60*60*1e3,CA=.5;function qg(t,e=TA,n=SA){const r=e*Math.pow(n,t),i=Math.round(CA*r*(Math.random()-.5)*2);return Math.min(AA,r+i)}/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class PA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RA(e))try{this.getOrInitializeService({instanceIdentifier:ii})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ii){return this.instances.has(e)}getOptions(e=ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ii){return this.component?this.component.multipleInstances?e:ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kA(t){return t===ii?void 0:t}function RA(t){return t.instantiationMode==="EAGER"}/**
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
 */class xA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const NA={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},DA=re.INFO,bA={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},OA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uc{constructor(e){this.name=e,this._logLevel=DA,this._logHandler=OA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const VA=(t,e)=>e.some(n=>t instanceof n);let Wg,Gg;function LA(){return Wg||(Wg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MA(){return Gg||(Gg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nE=new WeakMap,dd=new WeakMap,rE=new WeakMap,ih=new WeakMap,Vf=new WeakMap;function jA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nE.set(n,t)}).catch(()=>{}),Vf.set(e,t),e}function FA(t){if(dd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});dd.set(t,e)}let fd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UA(t){fd=t(fd)}function BA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sh(this),e,...n);return rE.set(r,e.sort?e.sort():[e]),kr(r)}:MA().includes(t)?function(...e){return t.apply(sh(this),e),kr(nE.get(this))}:function(...e){return kr(t.apply(sh(this),e))}}function $A(t){return typeof t=="function"?BA(t):(t instanceof IDBTransaction&&FA(t),VA(t,LA())?new Proxy(t,fd):t)}function kr(t){if(t instanceof IDBRequest)return jA(t);if(ih.has(t))return ih.get(t);const e=$A(t);return e!==t&&(ih.set(t,e),Vf.set(e,t)),e}const sh=t=>Vf.get(t);function iE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=kr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(kr(o.result),c.oldVersion,c.newVersion,kr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const zA=["get","getKey","getAll","getAllKeys","count"],HA=["put","add","delete","clear"],oh=new Map;function Kg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oh.get(e))return oh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=HA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zA.includes(n)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return oh.set(e,s),s}UA(t=>({...t,get:(e,n,r)=>Kg(e,n)||t.get(e,n,r),has:(e,n)=>!!Kg(e,n)||t.has(e,n)}));/**
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
 */class qA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pd="@firebase/app",Qg="0.14.6";/**
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
 */const Kn=new Uc("@firebase/app"),GA="@firebase/app-compat",KA="@firebase/analytics-compat",QA="@firebase/analytics",YA="@firebase/app-check-compat",XA="@firebase/app-check",JA="@firebase/auth",ZA="@firebase/auth-compat",eC="@firebase/database",tC="@firebase/data-connect",nC="@firebase/database-compat",rC="@firebase/functions",iC="@firebase/functions-compat",sC="@firebase/installations",oC="@firebase/installations-compat",aC="@firebase/messaging",lC="@firebase/messaging-compat",cC="@firebase/performance",uC="@firebase/performance-compat",hC="@firebase/remote-config",dC="@firebase/remote-config-compat",fC="@firebase/storage",pC="@firebase/storage-compat",mC="@firebase/firestore",gC="@firebase/ai",_C="@firebase/firestore-compat",yC="firebase",vC="12.6.0";/**
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
 */const md="[DEFAULT]",wC={[pd]:"fire-core",[GA]:"fire-core-compat",[QA]:"fire-analytics",[KA]:"fire-analytics-compat",[XA]:"fire-app-check",[YA]:"fire-app-check-compat",[JA]:"fire-auth",[ZA]:"fire-auth-compat",[eC]:"fire-rtdb",[tC]:"fire-data-connect",[nC]:"fire-rtdb-compat",[rC]:"fire-fn",[iC]:"fire-fn-compat",[sC]:"fire-iid",[oC]:"fire-iid-compat",[aC]:"fire-fcm",[lC]:"fire-fcm-compat",[cC]:"fire-perf",[uC]:"fire-perf-compat",[hC]:"fire-rc",[dC]:"fire-rc-compat",[fC]:"fire-gcs",[pC]:"fire-gcs-compat",[mC]:"fire-fst",[_C]:"fire-fst-compat",[gC]:"fire-vertex","fire-js":"fire-js",[yC]:"fire-js-all"};/**
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
 */const nc=new Map,EC=new Map,gd=new Map;function Yg(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nn(t){const e=t.name;if(gd.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;gd.set(e,t);for(const n of nc.values())Yg(n,t);for(const n of EC.values())Yg(n,t);return!0}function Ci(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function on(t){return t==null?!1:t.settings!==void 0}/**
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
 */const IC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rr=new Ai("app","Firebase",IC);/**
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
 */class TC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ns=vC;function sE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:md,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Rr.create("bad-app-name",{appName:String(i)});if(n||(n=Qw()),!n)throw Rr.create("no-options");const s=nc.get(i);if(s){if(Vr(n,s.options)&&Vr(r,s.config))return s;throw Rr.create("duplicate-app",{appName:i})}const o=new xA(i);for(const c of gd.values())o.addComponent(c);const l=new TC(n,r,o);return nc.set(i,l),l}function Lf(t=md){const e=nc.get(t);if(!e&&t===md&&Qw())return sE();if(!e)throw Rr.create("no-app",{appName:t});return e}function Yt(t,e,n){let r=wC[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(o.join(" "));return}Nn(new hn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const SC="firebase-heartbeat-database",AC=1,Zo="firebase-heartbeat-store";let ah=null;function oE(){return ah||(ah=iE(SC,AC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rr.create("idb-open",{originalErrorMessage:t.message})})),ah}async function CC(t){try{const n=(await oE()).transaction(Zo),r=await n.objectStore(Zo).get(aE(t));return await n.done,r}catch(e){if(e instanceof mn)Kn.warn(e.message);else{const n=Rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function Xg(t,e){try{const r=(await oE()).transaction(Zo,"readwrite");await r.objectStore(Zo).put(e,aE(t)),await r.done}catch(n){if(n instanceof mn)Kn.warn(n.message);else{const r=Rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(r.message)}}}function aE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const PC=1024,kC=30;class RC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Jg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>kC){const o=DC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Jg(),{heartbeatsToSend:r,unsentEntries:i}=xC(this._heartbeatsCache.heartbeats),s=tc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Kn.warn(n),""}}}function Jg(){return new Date().toISOString().substring(0,10)}function xC(t,e=PC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Zg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Zg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eE()?tE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Zg(t){return tc(JSON.stringify({version:2,heartbeats:t})).length}function DC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function bC(t){Nn(new hn("platform-logger",e=>new qA(e),"PRIVATE")),Nn(new hn("heartbeat",e=>new RC(e),"PRIVATE")),Yt(pd,Qg,t),Yt(pd,Qg,"esm2020"),Yt("fire-js","")}bC("");function lE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OC=lE,cE=new Ai("auth","Firebase",lE());/**
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
 */const rc=new Uc("@firebase/auth");function VC(t,...e){rc.logLevel<=re.WARN&&rc.warn(`Auth (${Ns}): ${t}`,...e)}function El(t,...e){rc.logLevel<=re.ERROR&&rc.error(`Auth (${Ns}): ${t}`,...e)}/**
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
 */function dn(t,...e){throw Mf(t,...e)}function An(t,...e){return Mf(t,...e)}function uE(t,e,n){const r={...OC(),[e]:n};return new Ai("auth","Firebase",r).create(e,{appName:t.name})}function xr(t){return uE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cE.create(t,...e)}function K(t,e,...n){if(!t)throw Mf(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw El(e),new Error(e)}function Qn(t,e){t||jn(e)}/**
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
 */function _d(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function LC(){return e_()==="http:"||e_()==="https:"}function e_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function MC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LC()||Zw()||"connection"in navigator)?navigator.onLine:!0}function jC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ga{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=cA()||dA()}get(){return MC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jf(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class hE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const FC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const UC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],BC=new ga(3e4,6e4);function Pi(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function qr(t,e,n,r,i={}){return dE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ma({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...s};return hA()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&xs(t.emulatorConfig.host)&&(u.credentials="include"),hE.fetch()(await fE(t,t.config.apiHost,n,l),u)})}async function dE(t,e,n){t._canInitEmulator=!1;const r={...FC,...e};try{const i=new zC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw rl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw rl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw rl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw rl(t,"user-disabled",o);const p=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw uE(t,p,u);dn(t,p)}}catch(i){if(i instanceof mn)throw i;dn(t,"network-request-failed",{message:String(i)})}}async function Bc(t,e,n,r,i={}){const s=await qr(t,e,n,r,i);return"mfaPendingCredential"in s&&dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function fE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?jf(t.config,i):`${t.config.apiScheme}://${i}`;return UC.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function $C(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(An(this.auth,"network-request-failed")),BC.get())})}}function rl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=An(t,e,r);return i.customData._tokenResponse=n,i}function t_(t){return t!==void 0&&t.enterprise!==void 0}class HC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $C(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function qC(t,e){return qr(t,"GET","/v2/recaptchaConfig",Pi(t,e))}/**
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
 */async function WC(t,e){return qr(t,"POST","/v1/accounts:delete",e)}async function ic(t,e){return qr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function No(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GC(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=Ff(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:No(lh(i.auth_time)),issuedAtTime:No(lh(i.iat)),expirationTime:No(lh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function lh(t){return Number(t)*1e3}function Ff(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return El("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gw(n);return i?JSON.parse(i):(El("Failed to decode base64 JWT payload"),null)}catch(i){return El("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function n_(t){const e=Ff(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ea(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mn&&KC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class QC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=No(this.lastLoginAt),this.creationTime=No(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sc(t){var m;const e=t.auth,n=await t.getIdToken(),r=await ea(t,ic(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?pE(i.providerUserInfo):[],o=XC(t.providerData,s),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new yd(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,p)}async function YC(t){const e=Me(t);await sc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function pE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function JC(t,e){const n=await dE(t,{},async()=>{const r=ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await fE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&xs(t.emulatorConfig.host)&&(c.credentials="include"),hE.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZC(t,e){return qr(t,"POST","/v2/accounts:revokeToken",Pi(t,e))}/**
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
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):n_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=n_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await JC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new os;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
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
 */function lr(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new QC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ea(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GC(this,e)}reload(){return YC(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new an({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(on(this.auth.app))return Promise.reject(xr(this.auth));const e=await this.getIdToken();return await ea(this,WC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:S,providerData:k,stsTokenManager:x}=n;K(m&&x,e,"internal-error");const b=os.fromJSON(this.name,x);K(typeof m=="string",e,"internal-error"),lr(r,e.name),lr(i,e.name),K(typeof g=="boolean",e,"internal-error"),K(typeof S=="boolean",e,"internal-error"),lr(s,e.name),lr(o,e.name),lr(l,e.name),lr(c,e.name),lr(u,e.name),lr(p,e.name);const w=new an({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:S,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:u,lastLoginAt:p});return k&&Array.isArray(k)&&(w.providerData=k.map(y=>({...y}))),c&&(w._redirectEventId=c),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new os;i.updateFromServerResponse(n);const s=new an({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await sc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?pE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new os;l.updateFromIdToken(r);const c=new an({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new yd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
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
 */const r_=new Map;function Fn(t){Qn(t instanceof Function,"Expected a class definition");let e=r_.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,r_.set(t,e),e)}/**
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
 */class mE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mE.type="NONE";const i_=mE;/**
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
 */function Il(t,e,n){return`firebase:${t}:${e}:${n}`}class as{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Il(this.userKey,i.apiKey,s),this.fullPersistenceKey=Il("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ic(this.auth,{idToken:e}).catch(()=>{});return n?an._fromGetAccountInfoResponse(this.auth,n,e):null}return an._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new as(Fn(i_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Fn(i_);const o=Il(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const p=await u._get(o);if(p){let m;if(typeof p=="string"){const g=await ic(e,{idToken:p}).catch(()=>{});if(!g)break;m=await an._fromGetAccountInfoResponse(e,g,p)}else m=an._fromJSON(e,p);u!==s&&(l=m),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new as(s,e,r):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new as(s,e,r))}}/**
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
 */function s_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(EE(e))return"Blackberry";if(IE(e))return"Webos";if(_E(e))return"Safari";if((e.includes("chrome/")||yE(e))&&!e.includes("edge/"))return"Chrome";if(wE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gE(t=mt()){return/firefox\//i.test(t)}function _E(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yE(t=mt()){return/crios\//i.test(t)}function vE(t=mt()){return/iemobile/i.test(t)}function wE(t=mt()){return/android/i.test(t)}function EE(t=mt()){return/blackberry/i.test(t)}function IE(t=mt()){return/webos/i.test(t)}function Uf(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eP(t=mt()){var e;return Uf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function tP(){return fA()&&document.documentMode===10}function TE(t=mt()){return Uf(t)||wE(t)||IE(t)||EE(t)||/windows phone/i.test(t)||vE(t)}/**
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
 */function SE(t,e=[]){let n;switch(t){case"Browser":n=s_(mt());break;case"Worker":n=`${s_(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ns}/${r}`}/**
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
 */class nP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function rP(t,e={}){return qr(t,"GET","/v2/passwordPolicy",Pi(t,e))}/**
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
 */const iP=6;class sP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??iP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class oP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new o_(this),this.idTokenSubscription=new o_(this),this.beforeStateQueue=new nP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ic(this,{idToken:e}),r=await an._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(on(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(on(this.app))return Promise.reject(xr(this));const n=e?Me(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return on(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return on(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rP(this),n=new sP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=SE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(on(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&VC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ds(t){return Me(t)}class o_{constructor(e){this.auth=e,this.observer=null,this.addObserver=wA(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $c={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aP(t){$c=t}function AE(t){return $c.loadJS(t)}function lP(){return $c.recaptchaEnterpriseScript}function cP(){return $c.gapiScript}function uP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class hP{constructor(){this.enterprise=new dP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class dP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const fP="recaptcha-enterprise",CE="NO_RECAPTCHA";class pP{constructor(e){this.type=fP,this.auth=Ds(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{qC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new HC(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function i(s,o,l){const c=window.grecaptcha;t_(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(CE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hP().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&t_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=lP();c.length!==0&&(c+=l),AE(c).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function a_(t,e,n,r=!1,i=!1){const s=new pP(t);let o;if(i)o=CE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function l_(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await a_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await a_(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function mP(t,e){const n=Ci(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vr(s,e??{}))return i;dn(i,"already-initialized")}return n.initialize({options:e})}function gP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _P(t,e,n){const r=Ds(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=PE(e),{host:o,port:l}=yP(e),c=l===null?"":`:${l}`,u={url:`${s}//${o}${c}/`},p=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(Vr(u,r.config.emulator)&&Vr(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,xs(o)?(Xw(`${s}//${o}${c}`),Jw("Auth",!0)):vP()}function PE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yP(t){const e=PE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:c_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:c_(o)}}}function c_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Bf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}async function wP(t,e){return qr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function EP(t,e){return Bc(t,"POST","/v1/accounts:signInWithPassword",Pi(t,e))}/**
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
 */async function IP(t,e){return Bc(t,"POST","/v1/accounts:signInWithEmailLink",Pi(t,e))}async function TP(t,e){return Bc(t,"POST","/v1/accounts:signInWithEmailLink",Pi(t,e))}/**
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
 */class ta extends Bf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ta(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ta(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return l_(e,n,"signInWithPassword",EP);case"emailLink":return IP(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return l_(e,r,"signUpPassword",wP);case"emailLink":return TP(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ls(t,e){return Bc(t,"POST","/v1/accounts:signInWithIdp",Pi(t,e))}/**
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
 */const SP="http://localhost";class yi extends Bf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new yi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ls(e,n)}buildRequest(){const e={requestUri:SP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ma(n)}return e}}/**
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
 */function AP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CP(t){const e=mo(go(t)).link,n=e?mo(go(e)).deep_link_id:null,r=mo(go(t)).deep_link_id;return(r?mo(go(r)).link:null)||r||n||e||t}class $f{constructor(e){const n=mo(go(e)),r=n.apiKey??null,i=n.oobCode??null,s=AP(n.mode??null);K(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=CP(e);try{return new $f(n)}catch{return null}}}/**
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
 */class bs{constructor(){this.providerId=bs.PROVIDER_ID}static credential(e,n){return ta._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$f.parseLink(n);return K(r,"argument-error"),ta._fromEmailAndCode(e,r.code,r.tenantId)}}bs.PROVIDER_ID="password";bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class kE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _a extends kE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fr extends _a{constructor(){super("facebook.com")}static credential(e){return yi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";fr.PROVIDER_ID="facebook.com";/**
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
 */class pr extends _a{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yi._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.GOOGLE_SIGN_IN_METHOD="google.com";pr.PROVIDER_ID="google.com";/**
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
 */class mr extends _a{constructor(){super("github.com")}static credential(e){return yi._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.GITHUB_SIGN_IN_METHOD="github.com";mr.PROVIDER_ID="github.com";/**
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
 */class gr extends _a{constructor(){super("twitter.com")}static credential(e,n){return yi._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.TWITTER_SIGN_IN_METHOD="twitter.com";gr.PROVIDER_ID="twitter.com";/**
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
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await an._fromIdTokenResponse(e,r,i),o=u_(r);return new ws({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=u_(r);return new ws({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function u_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class oc extends mn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,oc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new oc(e,n,r,i)}}function RE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?oc._fromErrorAndOperation(t,s,e,r):s})}async function PP(t,e,n=!1){const r=await ea(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ws._forOperation(t,"link",r)}/**
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
 */async function kP(t,e,n=!1){const{auth:r}=t;if(on(r.app))return Promise.reject(xr(r));const i="reauthenticate";try{const s=await ea(t,RE(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Ff(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),ws._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),s}}/**
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
 */async function xE(t,e,n=!1){if(on(t.app))return Promise.reject(xr(t));const r="signIn",i=await RE(t,r,e),s=await ws._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function RP(t,e){return xE(Ds(t),e)}/**
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
 */async function xP(t){const e=Ds(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function NP(t,e,n){return on(t.app)?Promise.reject(xr(t)):RP(Me(t),bs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xP(t),r})}function DP(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function bP(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function OP(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function VP(t){return Me(t).signOut()}const ac="__sak";/**
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
 */class NE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ac,"1"),this.storage.removeItem(ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const LP=1e3,MP=10;class DE extends NE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=TE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,MP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},LP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}DE.type="LOCAL";const jP=DE;/**
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
 */class bE extends NE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bE.type="SESSION";const OE=bE;/**
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
 */function FP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),c=await FP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zc.receivers=[];/**
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
 */function zf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class UP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const u=zf("",20);i.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(p),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Cn(){return window}function BP(t){Cn().location.href=t}/**
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
 */function VE(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function $P(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function HP(){return VE()?self:null}/**
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
 */const LE="firebaseLocalStorageDb",qP=1,lc="firebaseLocalStorage",ME="fbase_key";class ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hc(t,e){return t.transaction([lc],e?"readwrite":"readonly").objectStore(lc)}function WP(){const t=indexedDB.deleteDatabase(LE);return new ya(t).toPromise()}function vd(){const t=indexedDB.open(LE,qP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(lc,{keyPath:ME})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(lc)?e(r):(r.close(),await WP(),e(await vd()))})})}async function h_(t,e,n){const r=Hc(t,!0).put({[ME]:e,value:n});return new ya(r).toPromise()}async function GP(t,e){const n=Hc(t,!1).get(e),r=await new ya(n).toPromise();return r===void 0?null:r.value}function d_(t,e){const n=Hc(t,!0).delete(e);return new ya(n).toPromise()}const KP=800,QP=3;class jE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>QP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return VE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zc._getInstance(HP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await $P(),!this.activeServiceWorker)return;this.sender=new UP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vd();return await h_(e,ac,"1"),await d_(e,ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>h_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>GP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>d_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hc(i,!1).getAll();return new ya(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jE.type="LOCAL";const YP=jE;new ga(3e4,6e4);/**
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
 */function XP(t,e){return e?Fn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hf extends Bf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JP(t){return xE(t.auth,new Hf(t),t.bypassAuthState)}function ZP(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),kP(n,new Hf(t),t.bypassAuthState)}async function ek(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),PP(n,new Hf(t),t.bypassAuthState)}/**
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
 */class FE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JP;case"linkViaPopup":case"linkViaRedirect":return ek;case"reauthViaPopup":case"reauthViaRedirect":return ZP;default:dn(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tk=new ga(2e3,1e4);class Zi extends FE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zi.currentPopupAction&&Zi.currentPopupAction.cancel(),Zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=zf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tk.get())};e()}}Zi.currentPopupAction=null;/**
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
 */const nk="pendingRedirect",Tl=new Map;class rk extends FE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tl.get(this.auth._key());if(!e){try{const r=await ik(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tl.set(this.auth._key(),e)}return this.bypassAuthState||Tl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ik(t,e){const n=ak(e),r=ok(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function sk(t,e){Tl.set(t._key(),e)}function ok(t){return Fn(t._redirectPersistence)}function ak(t){return Il(nk,t.config.apiKey,t.name)}async function lk(t,e,n=!1){if(on(t.app))return Promise.reject(xr(t));const r=Ds(t),i=XP(r,e),o=await new rk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ck=10*60*1e3;class uk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!UE(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(An(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ck&&this.cachedEventUids.clear(),this.cachedEventUids.has(f_(e))}saveEventToCache(e){this.cachedEventUids.add(f_(e)),this.lastProcessedEventTime=Date.now()}}function f_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function UE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return UE(t);default:return!1}}/**
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
 */async function dk(t,e={}){return qr(t,"GET","/v1/projects",e)}/**
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
 */const fk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pk=/^https?/;async function mk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dk(t);for(const n of e)try{if(gk(n))return}catch{}dn(t,"unauthorized-domain")}function gk(t){const e=_d(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pk.test(n))return!1;if(fk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const _k=new ga(3e4,6e4);function p_(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yk(t){return new Promise((e,n)=>{var i,s,o;function r(){p_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{p_(),n(An(t,"network-request-failed"))},timeout:_k.get()})}if((s=(i=Cn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Cn().gapi)!=null&&o.load)r();else{const l=uP("iframefcb");return Cn()[l]=()=>{gapi.load?r():n(An(t,"network-request-failed"))},AE(`${cP()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Sl=null,e})}let Sl=null;function vk(t){return Sl=Sl||yk(t),Sl}/**
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
 */const wk=new ga(5e3,15e3),Ek="__/auth/iframe",Ik="emulator/auth/iframe",Tk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ak(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jf(e,Ik):`https://${t.config.authDomain}/${Ek}`,r={apiKey:e.apiKey,appName:t.name,v:Ns},i=Sk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ma(r).slice(1)}`}async function Ck(t){const e=await vk(t),n=Cn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:Ak(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),l=Cn().setTimeout(()=>{s(o)},wk.get());function c(){Cn().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Pk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kk=500,Rk=600,xk="_blank",Nk="http://localhost";class m_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dk(t,e,n,r=kk,i=Rk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...Pk,width:r.toString(),height:i.toString(),top:s,left:o},u=mt().toLowerCase();n&&(l=yE(u)?xk:n),gE(u)&&(e=e||Nk,c.scrollbars="yes");const p=Object.entries(c).reduce((g,[S,k])=>`${g}${S}=${k},`,"");if(eP(u)&&l!=="_self")return bk(e||"",l),new m_(null);const m=window.open(e||"",l,p);K(m,t,"popup-blocked");try{m.focus()}catch{}return new m_(m)}function bk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ok="__/auth/handler",Vk="emulator/auth/handler",Lk=encodeURIComponent("fac");async function g_(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ns,eventId:i};if(e instanceof kE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof _a){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const c=await t._getAppCheckToken(),u=c?`#${Lk}=${encodeURIComponent(c)}`:"";return`${Mk(t)}?${ma(l).slice(1)}${u}`}function Mk({config:t}){return t.emulator?jf(t,Vk):`https://${t.authDomain}/${Ok}`}/**
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
 */const ch="webStorageSupport";class jk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=OE,this._completeRedirectFn=lk,this._overrideRedirectResult=sk}async _openPopup(e,n,r,i){var o;Qn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await g_(e,n,r,_d(),i);return Dk(e,s,zf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await g_(e,n,r,_d(),i);return BP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ck(e),r=new uk(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ch,{type:ch},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ch];s!==void 0&&n(!!s),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return TE()||_E()||Uf()}}const Fk=jk;var __="@firebase/auth",y_="1.12.0";/**
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
 */class Uk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Bk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $k(t){Nn(new hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:SE(t)},u=new oP(r,i,s,c);return gP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nn(new hn("auth-internal",e=>{const n=Ds(e.getProvider("auth").getImmediate());return(r=>new Uk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(__,y_,Bk(t)),Yt(__,y_,"esm2020")}/**
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
 */const zk=5*60,Hk=Yw("authIdTokenMaxAge")||zk;let v_=null;const qk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hk)return;const i=n==null?void 0:n.token;v_!==i&&(v_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Wk(t=Lf()){const e=Ci(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mP(t,{popupRedirectResolver:Fk,persistence:[YP,jP,OE]}),r=Yw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=qk(s.toString());bP(n,o,()=>o(n.currentUser)),DP(n,l=>o(l))}}const i=Kw("auth");return i&&_P(n,`http://${i}`),n}function Gk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}aP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=An("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Gk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$k("Browser");var Kk="firebase",Qk="12.7.0";/**
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
 */Yt(Kk,Qk,"app");var w_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nr,BE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function T(){}T.prototype=v.prototype,I.F=v.prototype,I.prototype=new T,I.prototype.constructor=I,I.D=function(C,P,N){for(var A=Array(arguments.length-2),me=2;me<arguments.length;me++)A[me-2]=arguments[me];return v.prototype[P].apply(C,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,v,T){T||(T=0);const C=Array(16);if(typeof v=="string")for(var P=0;P<16;++P)C[P]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(P=0;P<16;++P)C[P]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=I.g[0],T=I.g[1],P=I.g[2];let N=I.g[3],A;A=v+(N^T&(P^N))+C[0]+3614090360&4294967295,v=T+(A<<7&4294967295|A>>>25),A=N+(P^v&(T^P))+C[1]+3905402710&4294967295,N=v+(A<<12&4294967295|A>>>20),A=P+(T^N&(v^T))+C[2]+606105819&4294967295,P=N+(A<<17&4294967295|A>>>15),A=T+(v^P&(N^v))+C[3]+3250441966&4294967295,T=P+(A<<22&4294967295|A>>>10),A=v+(N^T&(P^N))+C[4]+4118548399&4294967295,v=T+(A<<7&4294967295|A>>>25),A=N+(P^v&(T^P))+C[5]+1200080426&4294967295,N=v+(A<<12&4294967295|A>>>20),A=P+(T^N&(v^T))+C[6]+2821735955&4294967295,P=N+(A<<17&4294967295|A>>>15),A=T+(v^P&(N^v))+C[7]+4249261313&4294967295,T=P+(A<<22&4294967295|A>>>10),A=v+(N^T&(P^N))+C[8]+1770035416&4294967295,v=T+(A<<7&4294967295|A>>>25),A=N+(P^v&(T^P))+C[9]+2336552879&4294967295,N=v+(A<<12&4294967295|A>>>20),A=P+(T^N&(v^T))+C[10]+4294925233&4294967295,P=N+(A<<17&4294967295|A>>>15),A=T+(v^P&(N^v))+C[11]+2304563134&4294967295,T=P+(A<<22&4294967295|A>>>10),A=v+(N^T&(P^N))+C[12]+1804603682&4294967295,v=T+(A<<7&4294967295|A>>>25),A=N+(P^v&(T^P))+C[13]+4254626195&4294967295,N=v+(A<<12&4294967295|A>>>20),A=P+(T^N&(v^T))+C[14]+2792965006&4294967295,P=N+(A<<17&4294967295|A>>>15),A=T+(v^P&(N^v))+C[15]+1236535329&4294967295,T=P+(A<<22&4294967295|A>>>10),A=v+(P^N&(T^P))+C[1]+4129170786&4294967295,v=T+(A<<5&4294967295|A>>>27),A=N+(T^P&(v^T))+C[6]+3225465664&4294967295,N=v+(A<<9&4294967295|A>>>23),A=P+(v^T&(N^v))+C[11]+643717713&4294967295,P=N+(A<<14&4294967295|A>>>18),A=T+(N^v&(P^N))+C[0]+3921069994&4294967295,T=P+(A<<20&4294967295|A>>>12),A=v+(P^N&(T^P))+C[5]+3593408605&4294967295,v=T+(A<<5&4294967295|A>>>27),A=N+(T^P&(v^T))+C[10]+38016083&4294967295,N=v+(A<<9&4294967295|A>>>23),A=P+(v^T&(N^v))+C[15]+3634488961&4294967295,P=N+(A<<14&4294967295|A>>>18),A=T+(N^v&(P^N))+C[4]+3889429448&4294967295,T=P+(A<<20&4294967295|A>>>12),A=v+(P^N&(T^P))+C[9]+568446438&4294967295,v=T+(A<<5&4294967295|A>>>27),A=N+(T^P&(v^T))+C[14]+3275163606&4294967295,N=v+(A<<9&4294967295|A>>>23),A=P+(v^T&(N^v))+C[3]+4107603335&4294967295,P=N+(A<<14&4294967295|A>>>18),A=T+(N^v&(P^N))+C[8]+1163531501&4294967295,T=P+(A<<20&4294967295|A>>>12),A=v+(P^N&(T^P))+C[13]+2850285829&4294967295,v=T+(A<<5&4294967295|A>>>27),A=N+(T^P&(v^T))+C[2]+4243563512&4294967295,N=v+(A<<9&4294967295|A>>>23),A=P+(v^T&(N^v))+C[7]+1735328473&4294967295,P=N+(A<<14&4294967295|A>>>18),A=T+(N^v&(P^N))+C[12]+2368359562&4294967295,T=P+(A<<20&4294967295|A>>>12),A=v+(T^P^N)+C[5]+4294588738&4294967295,v=T+(A<<4&4294967295|A>>>28),A=N+(v^T^P)+C[8]+2272392833&4294967295,N=v+(A<<11&4294967295|A>>>21),A=P+(N^v^T)+C[11]+1839030562&4294967295,P=N+(A<<16&4294967295|A>>>16),A=T+(P^N^v)+C[14]+4259657740&4294967295,T=P+(A<<23&4294967295|A>>>9),A=v+(T^P^N)+C[1]+2763975236&4294967295,v=T+(A<<4&4294967295|A>>>28),A=N+(v^T^P)+C[4]+1272893353&4294967295,N=v+(A<<11&4294967295|A>>>21),A=P+(N^v^T)+C[7]+4139469664&4294967295,P=N+(A<<16&4294967295|A>>>16),A=T+(P^N^v)+C[10]+3200236656&4294967295,T=P+(A<<23&4294967295|A>>>9),A=v+(T^P^N)+C[13]+681279174&4294967295,v=T+(A<<4&4294967295|A>>>28),A=N+(v^T^P)+C[0]+3936430074&4294967295,N=v+(A<<11&4294967295|A>>>21),A=P+(N^v^T)+C[3]+3572445317&4294967295,P=N+(A<<16&4294967295|A>>>16),A=T+(P^N^v)+C[6]+76029189&4294967295,T=P+(A<<23&4294967295|A>>>9),A=v+(T^P^N)+C[9]+3654602809&4294967295,v=T+(A<<4&4294967295|A>>>28),A=N+(v^T^P)+C[12]+3873151461&4294967295,N=v+(A<<11&4294967295|A>>>21),A=P+(N^v^T)+C[15]+530742520&4294967295,P=N+(A<<16&4294967295|A>>>16),A=T+(P^N^v)+C[2]+3299628645&4294967295,T=P+(A<<23&4294967295|A>>>9),A=v+(P^(T|~N))+C[0]+4096336452&4294967295,v=T+(A<<6&4294967295|A>>>26),A=N+(T^(v|~P))+C[7]+1126891415&4294967295,N=v+(A<<10&4294967295|A>>>22),A=P+(v^(N|~T))+C[14]+2878612391&4294967295,P=N+(A<<15&4294967295|A>>>17),A=T+(N^(P|~v))+C[5]+4237533241&4294967295,T=P+(A<<21&4294967295|A>>>11),A=v+(P^(T|~N))+C[12]+1700485571&4294967295,v=T+(A<<6&4294967295|A>>>26),A=N+(T^(v|~P))+C[3]+2399980690&4294967295,N=v+(A<<10&4294967295|A>>>22),A=P+(v^(N|~T))+C[10]+4293915773&4294967295,P=N+(A<<15&4294967295|A>>>17),A=T+(N^(P|~v))+C[1]+2240044497&4294967295,T=P+(A<<21&4294967295|A>>>11),A=v+(P^(T|~N))+C[8]+1873313359&4294967295,v=T+(A<<6&4294967295|A>>>26),A=N+(T^(v|~P))+C[15]+4264355552&4294967295,N=v+(A<<10&4294967295|A>>>22),A=P+(v^(N|~T))+C[6]+2734768916&4294967295,P=N+(A<<15&4294967295|A>>>17),A=T+(N^(P|~v))+C[13]+1309151649&4294967295,T=P+(A<<21&4294967295|A>>>11),A=v+(P^(T|~N))+C[4]+4149444226&4294967295,v=T+(A<<6&4294967295|A>>>26),A=N+(T^(v|~P))+C[11]+3174756917&4294967295,N=v+(A<<10&4294967295|A>>>22),A=P+(v^(N|~T))+C[2]+718787259&4294967295,P=N+(A<<15&4294967295|A>>>17),A=T+(N^(P|~v))+C[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,I.g[2]=I.g[2]+P&4294967295,I.g[3]=I.g[3]+N&4294967295}r.prototype.v=function(I,v){v===void 0&&(v=I.length);const T=v-this.blockSize,C=this.C;let P=this.h,N=0;for(;N<v;){if(P==0)for(;N<=T;)i(this,I,N),N+=this.blockSize;if(typeof I=="string"){for(;N<v;)if(C[P++]=I.charCodeAt(N++),P==this.blockSize){i(this,C),P=0;break}}else for(;N<v;)if(C[P++]=I[N++],P==this.blockSize){i(this,C),P=0;break}}this.h=P,this.o+=v},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;v=this.o*8;for(var T=I.length-8;T<I.length;++T)I[T]=v&255,v/=256;for(this.v(I),I=Array(16),v=0,T=0;T<4;++T)for(let C=0;C<32;C+=8)I[v++]=this.g[T]>>>C&255;return I};function s(I,v){var T=l;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=v(I)}function o(I,v){this.h=v;const T=[];let C=!0;for(let P=I.length-1;P>=0;P--){const N=I[P]|0;C&&N==v||(T[P]=N,C=!1)}this.g=T}var l={};function c(I){return-128<=I&&I<128?s(I,function(v){return new o([v|0],v<0?-1:0)}):new o([I|0],I<0?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return m;if(I<0)return b(u(-I));const v=[];let T=1;for(let C=0;I>=T;C++)v[C]=I/T|0,T*=4294967296;return new o(v,0)}function p(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return b(p(I.substring(1),v));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=u(Math.pow(v,8));let C=m;for(let N=0;N<I.length;N+=8){var P=Math.min(8,I.length-N);const A=parseInt(I.substring(N,N+P),v);P<8?(P=u(Math.pow(v,P)),C=C.j(P).add(u(A))):(C=C.j(T),C=C.add(u(A)))}return C}var m=c(0),g=c(1),S=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-b(this).m();let I=0,v=1;for(let T=0;T<this.g.length;T++){const C=this.i(T);I+=(C>=0?C:4294967296+C)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if(x(this))return"-"+b(this).toString(I);const v=u(Math.pow(I,6));var T=this;let C="";for(;;){const P=R(T,v).g;T=w(T,P.j(v));let N=((T.g.length>0?T.g[0]:T.h)>>>0).toString(I);if(T=P,k(T))return N+C;for(;N.length<6;)N="0"+N;C=N+C}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(let v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function x(I){return I.h==-1}t.l=function(I){return I=w(this,I),x(I)?-1:k(I)?0:1};function b(I){const v=I.g.length,T=[];for(let C=0;C<v;C++)T[C]=~I.g[C];return new o(T,~I.h).add(g)}t.abs=function(){return x(this)?b(this):this},t.add=function(I){const v=Math.max(this.g.length,I.g.length),T=[];let C=0;for(let P=0;P<=v;P++){let N=C+(this.i(P)&65535)+(I.i(P)&65535),A=(N>>>16)+(this.i(P)>>>16)+(I.i(P)>>>16);C=A>>>16,N&=65535,A&=65535,T[P]=A<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(I,v){return I.add(b(v))}t.j=function(I){if(k(this)||k(I))return m;if(x(this))return x(I)?b(this).j(b(I)):b(b(this).j(I));if(x(I))return b(this.j(b(I)));if(this.l(S)<0&&I.l(S)<0)return u(this.m()*I.m());const v=this.g.length+I.g.length,T=[];for(var C=0;C<2*v;C++)T[C]=0;for(C=0;C<this.g.length;C++)for(let P=0;P<I.g.length;P++){const N=this.i(C)>>>16,A=this.i(C)&65535,me=I.i(P)>>>16,gt=I.i(P)&65535;T[2*C+2*P]+=A*gt,y(T,2*C+2*P),T[2*C+2*P+1]+=N*gt,y(T,2*C+2*P+1),T[2*C+2*P+1]+=A*me,y(T,2*C+2*P+1),T[2*C+2*P+2]+=N*me,y(T,2*C+2*P+2)}for(I=0;I<v;I++)T[I]=T[2*I+1]<<16|T[2*I];for(I=v;I<2*v;I++)T[I]=0;return new o(T,0)};function y(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function E(I,v){this.g=I,this.h=v}function R(I,v){if(k(v))throw Error("division by zero");if(k(I))return new E(m,m);if(x(I))return v=R(b(I),v),new E(b(v.g),b(v.h));if(x(v))return v=R(I,b(v)),new E(b(v.g),v.h);if(I.g.length>30){if(x(I)||x(v))throw Error("slowDivide_ only works with positive integers.");for(var T=g,C=v;C.l(I)<=0;)T=O(T),C=O(C);var P=M(T,1),N=M(C,1);for(C=M(C,2),T=M(T,2);!k(C);){var A=N.add(C);A.l(I)<=0&&(P=P.add(T),N=A),C=M(C,1),T=M(T,1)}return v=w(I,P.j(v)),new E(P,v)}for(P=m;I.l(v)>=0;){for(T=Math.max(1,Math.floor(I.m()/v.m())),C=Math.ceil(Math.log(T)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),N=u(T),A=N.j(v);x(A)||A.l(I)>0;)T-=C,N=u(T),A=N.j(v);k(N)&&(N=g),P=P.add(N),I=w(I,A)}return new E(P,I)}t.B=function(I){return R(this,I).h},t.and=function(I){const v=Math.max(this.g.length,I.g.length),T=[];for(let C=0;C<v;C++)T[C]=this.i(C)&I.i(C);return new o(T,this.h&I.h)},t.or=function(I){const v=Math.max(this.g.length,I.g.length),T=[];for(let C=0;C<v;C++)T[C]=this.i(C)|I.i(C);return new o(T,this.h|I.h)},t.xor=function(I){const v=Math.max(this.g.length,I.g.length),T=[];for(let C=0;C<v;C++)T[C]=this.i(C)^I.i(C);return new o(T,this.h^I.h)};function O(I){const v=I.g.length+1,T=[];for(let C=0;C<v;C++)T[C]=I.i(C)<<1|I.i(C-1)>>>31;return new o(T,I.h)}function M(I,v){const T=v>>5;v%=32;const C=I.g.length-T,P=[];for(let N=0;N<C;N++)P[N]=v>0?I.i(N+T)>>>v|I.i(N+T+1)<<32-v:I.i(N+T);return new o(P,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,BE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=p,Nr=o}).apply(typeof w_<"u"?w_:typeof self<"u"?self:typeof window<"u"?window:{});var il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $E,_o,zE,Al,wd,HE,qE,WE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof il=="object"&&il];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in f))break e;f=f[D]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&f.push([_,h[_]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,f){return a.call.apply(a.bind,arguments)}function u(a,h,f){return u=c,u.apply(null,arguments)}function p(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function m(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(_,D,V){for(var $=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)$[ee-2]=arguments[ee];return h.prototype[D].apply(_,$)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function S(a){const h=a.length;if(h>0){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function k(a,h){for(let _=1;_<arguments.length;_++){const D=arguments[_];var f=typeof D;if(f=f!="object"?f:D?Array.isArray(D)?"array":f:"null",f=="array"||f=="object"&&typeof D.length=="number"){f=a.length||0;const V=D.length||0;a.length=f+V;for(let $=0;$<V;$++)a[f+$]=D[$]}else a.push(D)}}class x{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function w(){var a=I;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class y{constructor(){this.h=this.g=null}add(h,f){const _=E.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var E=new x(()=>new R,a=>a.reset());class R{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let O,M=!1,I=new y,v=()=>{const a=Promise.resolve(void 0);O=()=>{a.then(T)}};function T(){for(var a;a=w();){try{a.h.call(a.g)}catch(f){b(f)}var h=E;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}M=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function A(a){return/^[\s\xa0]*$/.test(a)}function me(a,h){P.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(me,P),me.prototype.init=function(a,h){const f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&me.Z.h.call(this)},me.prototype.h=function(){me.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var gt="closure_listenable_"+(Math.random()*1e6|0),J=0;function de(a,h,f,_,D){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=D,this.key=++J,this.da=this.fa=!1}function U(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function G(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function Z(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function fe(a){const h={};for(const f in a)h[f]=a[f];return h}const De="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qr(a,h){let f,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(f in _)a[f]=_[f];for(let V=0;V<De.length;V++)f=De[V],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function zt(a){this.src=a,this.g={},this.h=0}zt.prototype.add=function(a,h,f,_,D){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const $=en(a,h,_,D);return $>-1?(h=a[$],f||(h.fa=!1)):(h=new de(h,this.src,V,!!_,D),h.fa=f,a.push(h)),h};function Yr(a,h){const f=h.type;if(f in a.g){var _=a.g[f],D=Array.prototype.indexOf.call(_,h,void 0),V;(V=D>=0)&&Array.prototype.splice.call(_,D,1),V&&(U(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function en(a,h,f,_){for(let D=0;D<a.length;++D){const V=a[D];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==_)return D}return-1}var er="closure_lm_"+(Math.random()*1e6|0),uu={};function Vp(a,h,f,_,D){if(Array.isArray(h)){for(let V=0;V<h.length;V++)Vp(a,h[V],f,_,D);return null}return f=jp(f),a&&a[gt]?a.J(h,f,l(_)?!!_.capture:!!_,D):K0(a,h,f,!1,_,D)}function K0(a,h,f,_,D,V){if(!h)throw Error("Invalid event type");const $=l(D)?!!D.capture:!!D;let ee=du(a);if(ee||(a[er]=ee=new zt(a)),f=ee.add(h,f,_,$,V),f.proxy)return f;if(_=Q0(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)N||(D=$),D===void 0&&(D=!1),a.addEventListener(h.toString(),_,D);else if(a.attachEvent)a.attachEvent(Mp(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Q0(){function a(f){return h.call(a.src,a.listener,f)}const h=Y0;return a}function Lp(a,h,f,_,D){if(Array.isArray(h))for(var V=0;V<h.length;V++)Lp(a,h[V],f,_,D);else _=l(_)?!!_.capture:!!_,f=jp(f),a&&a[gt]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],f=en(h,f,_,D),f>-1&&(U(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=du(a))&&(h=a.g[h.toString()],a=-1,h&&(a=en(h,f,_,D)),(f=a>-1?h[a]:null)&&hu(f))}function hu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[gt])Yr(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(Mp(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=du(h))?(Yr(f,a),f.h==0&&(f.src=null,h[er]=null)):U(a)}}}function Mp(a){return a in uu?uu[a]:uu[a]="on"+a}function Y0(a,h){if(a.da)a=!0;else{h=new me(h,this);const f=a.listener,_=a.ha||a.src;a.fa&&hu(a),a=f.call(_,h)}return a}function du(a){return a=a[er],a instanceof zt?a:null}var fu="__closure_events_fn_"+(Math.random()*1e9>>>0);function jp(a){return typeof a=="function"?a:(a[fu]||(a[fu]=function(h){return a.handleEvent(h)}),a[fu])}function st(){C.call(this),this.i=new zt(this),this.M=this,this.G=null}m(st,C),st.prototype[gt]=!0,st.prototype.removeEventListener=function(a,h,f,_){Lp(this,a,h,f,_)};function _t(a,h){var f,_=a.G;if(_)for(f=[];_;_=_.G)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new P(h,a);else if(h instanceof P)h.target=h.target||a;else{var D=h;h=new P(_,a),Qr(h,D)}D=!0;let V,$;if(f)for($=f.length-1;$>=0;$--)V=h.g=f[$],D=ka(V,_,!0,h)&&D;if(V=h.g=a,D=ka(V,_,!0,h)&&D,D=ka(V,_,!1,h)&&D,f)for($=0;$<f.length;$++)V=h.g=f[$],D=ka(V,_,!1,h)&&D}st.prototype.N=function(){if(st.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let _=0;_<f.length;_++)U(f[_]);delete a.g[h],a.h--}}this.G=null},st.prototype.J=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},st.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function ka(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let D=!0;for(let V=0;V<h.length;++V){const $=h[V];if($&&!$.da&&$.capture==f){const ee=$.listener,ze=$.ha||$.src;$.fa&&Yr(a.i,$),D=ee.call(ze,_)!==!1&&D}}return D&&!_.defaultPrevented}function X0(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Fp(a){a.g=X0(()=>{a.g=null,a.i&&(a.i=!1,Fp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class J0 extends C{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Fp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fs(a){C.call(this),this.h=a,this.g={}}m(Fs,C);var Up=[];function Bp(a){G(a.g,function(h,f){this.g.hasOwnProperty(f)&&hu(h)},a),a.g={}}Fs.prototype.N=function(){Fs.Z.N.call(this),Bp(this)},Fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pu=o.JSON.stringify,Z0=o.JSON.parse,eI=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function $p(){}function zp(){}var Us={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function mu(){P.call(this,"d")}m(mu,P);function gu(){P.call(this,"c")}m(gu,P);var Xr={},Hp=null;function Ra(){return Hp=Hp||new st}Xr.Ia="serverreachability";function qp(a){P.call(this,Xr.Ia,a)}m(qp,P);function Bs(a){const h=Ra();_t(h,new qp(h))}Xr.STAT_EVENT="statevent";function Wp(a,h){P.call(this,Xr.STAT_EVENT,a),this.stat=h}m(Wp,P);function yt(a){const h=Ra();_t(h,new Wp(h,a))}Xr.Ja="timingevent";function Gp(a,h){P.call(this,Xr.Ja,a),this.size=h}m(Gp,P);function $s(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function zs(){this.g=!0}zs.prototype.ua=function(){this.g=!1};function tI(a,h,f,_,D,V){a.info(function(){if(a.g)if(V){var $="",ee=V.split("&");for(let pe=0;pe<ee.length;pe++){var ze=ee[pe].split("=");if(ze.length>1){const Ke=ze[0];ze=ze[1];const _n=Ke.split("_");$=_n.length>=2&&_n[1]=="type"?$+(Ke+"="+ze+"&"):$+(Ke+"=redacted&")}}}else $=null;else $=V;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+h+`
`+f+`
`+$})}function nI(a,h,f,_,D,V,$){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+h+`
`+f+`
`+V+" "+$})}function bi(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+iI(a,f)+(_?" "+_:"")})}function rI(a,h){a.info(function(){return"TIMEOUT: "+h})}zs.prototype.info=function(){};function iI(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var f=V[a];if(!(f.length<2)){var _=f[1];if(Array.isArray(_)&&!(_.length<1)){var D=_[0];if(D!="noop"&&D!="stop"&&D!="close")for(let $=1;$<_.length;$++)_[$]=""}}}}return pu(V)}catch{return h}}var xa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Kp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Qp;function _u(){}m(_u,$p),_u.prototype.g=function(){return new XMLHttpRequest},Qp=new _u;function Hs(a){return encodeURIComponent(String(a))}function sI(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function tr(a,h,f,_){this.j=a,this.i=h,this.l=f,this.S=_||1,this.V=new Fs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Yp}function Yp(){this.i=null,this.g="",this.h=!1}var Xp={},yu={};function vu(a,h,f){a.M=1,a.A=Da(gn(h)),a.u=f,a.R=!0,Jp(a,null)}function Jp(a,h){a.F=Date.now(),Na(a),a.B=gn(a.A);var f=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),hm(f.i,"t",_),a.C=0,f=a.j.L,a.h=new Yp,a.g=Rm(a.j,f?h:null,!a.u),a.P>0&&(a.O=new J0(u(a.Y,a,a.g),a.P)),h=a.V,f=a.g,_=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(Up[0]=D.toString()),D=Up);for(let V=0;V<D.length;V++){const $=Vp(f,D[V],_||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.J?fe(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Bs(),tI(a.i,a.v,a.B,a.l,a.S,a.u)}tr.prototype.ba=function(a){a=a.target;const h=this.O;h&&ir(a)==3?h.j():this.Y(a)},tr.prototype.Y=function(a){try{if(a==this.g)e:{const ee=ir(this.g),ze=this.g.ya(),pe=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||ym(this.g)))){this.K||ee!=4||ze==7||(ze==8||pe<=0?Bs(3):Bs(2)),wu(this);var h=this.g.ca();this.X=h;var f=oI(this);if(this.o=h==200,nI(this.i,this.v,this.B,this.l,this.S,ee,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,D=this.g;if((_=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(_)){var V=_;break t}}V=null}if(a=V)bi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Eu(this,a);else{this.o=!1,this.m=3,yt(12),Jr(this),qs(this);break e}}if(this.R){a=!0;let Ke;for(;!this.K&&this.C<f.length;)if(Ke=aI(this,f),Ke==yu){ee==4&&(this.m=4,yt(14),a=!1),bi(this.i,this.l,null,"[Incomplete Response]");break}else if(Ke==Xp){this.m=4,yt(15),bi(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else bi(this.i,this.l,Ke,null),Eu(this,Ke);if(Zp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||f.length!=0||this.h.h||(this.m=1,yt(16),a=!1),this.o=this.o&&a,!a)bi(this.i,this.l,f,"[Invalid Chunked Response]"),Jr(this),qs(this);else if(f.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Ru($),$.P=!0,yt(11))}}else bi(this.i,this.l,f,null),Eu(this,f);ee==4&&Jr(this),this.o&&!this.K&&(ee==4?Am(this.j,this):(this.o=!1,Na(this)))}else EI(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,yt(12)):(this.m=0,yt(13)),Jr(this),qs(this)}}}catch{}finally{}};function oI(a){if(!Zp(a))return a.g.la();const h=ym(a.g);if(h==="")return"";let f="";const _=h.length,D=ir(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Jr(a),qs(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<_;V++)a.h.h=!0,f+=a.h.i.decode(h[V],{stream:!(D&&V==_-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Zp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function aI(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?yu:(f=Number(h.substring(f,_)),isNaN(f)?Xp:(_+=1,_+f>h.length?yu:(h=h.slice(_,_+f),a.C=_+f,h)))}tr.prototype.cancel=function(){this.K=!0,Jr(this)};function Na(a){a.T=Date.now()+a.H,em(a,a.H)}function em(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=$s(u(a.aa,a),h)}function wu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}tr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(rI(this.i,this.B),this.M!=2&&(Bs(),yt(17)),Jr(this),this.m=2,qs(this)):em(this,this.T-a)};function qs(a){a.j.I==0||a.K||Am(a.j,a)}function Jr(a){wu(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Bp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Eu(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||Iu(f.h,a))){if(!a.L&&Iu(f.h,a)&&f.I==3){try{var _=f.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Ma(f),Va(f);else break e;ku(f),yt(18)}}else f.xa=D[1],0<f.xa-f.K&&D[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=$s(u(f.Va,f),6e3));rm(f.h)<=1&&f.ta&&(f.ta=void 0)}else ei(f,11)}else if((a.L||f.g==a)&&Ma(f),!A(h))for(D=f.Ba.g.parse(h),h=0;h<D.length;h++){let pe=D[h];const Ke=pe[0];if(!(Ke<=f.K))if(f.K=Ke,pe=pe[1],f.I==2)if(pe[0]=="c"){f.M=pe[1],f.ba=pe[2];const _n=pe[3];_n!=null&&(f.ka=_n,f.j.info("VER="+f.ka));const ti=pe[4];ti!=null&&(f.za=ti,f.j.info("SVER="+f.za));const sr=pe[5];sr!=null&&typeof sr=="number"&&sr>0&&(_=1.5*sr,f.O=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const or=a.g;if(or){const Fa=or.g?or.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fa){var V=_.h;V.g||Fa.indexOf("spdy")==-1&&Fa.indexOf("quic")==-1&&Fa.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Tu(V,V.h),V.h=null))}if(_.G){const xu=or.g?or.g.getResponseHeader("X-HTTP-Session-Id"):null;xu&&(_.wa=xu,ye(_.J,_.G,xu))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),_=f;var $=a;if(_.na=km(_,_.L?_.ba:null,_.W),$.L){im(_.h,$);var ee=$,ze=_.O;ze&&(ee.H=ze),ee.D&&(wu(ee),Na(ee)),_.g=$}else Tm(_);f.i.length>0&&La(f)}else pe[0]!="stop"&&pe[0]!="close"||ei(f,7);else f.I==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?ei(f,7):Pu(f):pe[0]!="noop"&&f.l&&f.l.qa(pe),f.A=0)}}Bs(4)}catch{}}var lI=class{constructor(a,h){this.g=a,this.map=h}};function tm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function nm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function rm(a){return a.h?1:a.g?a.g.size:0}function Iu(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Tu(a,h){a.g?a.g.add(h):a.h=h}function im(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}tm.prototype.cancel=function(){if(this.i=sm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function sm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return S(a.i)}var om=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cI(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const _=a[f].indexOf("=");let D,V=null;_>=0?(D=a[f].substring(0,_),V=a[f].substring(_+1)):D=a[f],h(D,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function nr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof nr?(this.l=a.l,Ws(this,a.j),this.o=a.o,this.g=a.g,Gs(this,a.u),this.h=a.h,Su(this,dm(a.i)),this.m=a.m):a&&(h=String(a).match(om))?(this.l=!1,Ws(this,h[1]||"",!0),this.o=Ks(h[2]||""),this.g=Ks(h[3]||"",!0),Gs(this,h[4]),this.h=Ks(h[5]||"",!0),Su(this,h[6]||"",!0),this.m=Ks(h[7]||"")):(this.l=!1,this.i=new Ys(null,this.l))}nr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Qs(h,am,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Qs(h,am,!0),"@"),a.push(Hs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Qs(f,f.charAt(0)=="/"?dI:hI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Qs(f,pI)),a.join("")},nr.prototype.resolve=function(a){const h=gn(this);let f=!!a.j;f?Ws(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var _=a.h;if(f)Gs(h,a.u);else if(f=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var D=h.h.lastIndexOf("/");D!=-1&&(_=h.h.slice(0,D+1)+_)}if(D=_,D==".."||D==".")_="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){_=D.lastIndexOf("/",0)==0,D=D.split("/");const V=[];for(let $=0;$<D.length;){const ee=D[$++];ee=="."?_&&$==D.length&&V.push(""):ee==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),_&&$==D.length&&V.push("")):(V.push(ee),_=!0)}_=V.join("/")}else _=D}return f?h.h=_:f=a.i.toString()!=="",f?Su(h,dm(a.i)):f=!!a.m,f&&(h.m=a.m),h};function gn(a){return new nr(a)}function Ws(a,h,f){a.j=f?Ks(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Gs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Su(a,h,f){h instanceof Ys?(a.i=h,mI(a.i,a.l)):(f||(h=Qs(h,fI)),a.i=new Ys(h,a.l))}function ye(a,h,f){a.i.set(h,f)}function Da(a){return ye(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ks(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,uI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function uI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var am=/[#\/\?@]/g,hI=/[#\?:]/g,dI=/[#\?]/g,fI=/[#\?@]/g,pI=/#/g;function Ys(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Zr(a){a.g||(a.g=new Map,a.h=0,a.i&&cI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ys.prototype,t.add=function(a,h){Zr(this),this.i=null,a=Oi(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function lm(a,h){Zr(a),h=Oi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function cm(a,h){return Zr(a),h=Oi(a,h),a.g.has(h)}t.forEach=function(a,h){Zr(this),this.g.forEach(function(f,_){f.forEach(function(D){a.call(h,D,_,this)},this)},this)};function um(a,h){Zr(a);let f=[];if(typeof h=="string")cm(a,h)&&(f=f.concat(a.g.get(Oi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return Zr(this),this.i=null,a=Oi(this,a),cm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=um(this,a),a.length>0?String(a[0]):h):h};function hm(a,h,f){lm(a,h),f.length>0&&(a.i=null,a.g.set(Oi(a,h),S(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var f=h[_];const D=Hs(f);f=um(this,f);for(let V=0;V<f.length;V++){let $=D;f[V]!==""&&($+="="+Hs(f[V])),a.push($)}}return this.i=a.join("&")};function dm(a){const h=new Ys;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Oi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function mI(a,h){h&&!a.j&&(Zr(a),a.i=null,a.g.forEach(function(f,_){const D=_.toLowerCase();_!=D&&(lm(this,_),hm(this,D,f))},a)),a.j=h}function gI(a,h){const f=new zs;if(o.Image){const _=new Image;_.onload=p(rr,f,"TestLoadImage: loaded",!0,h,_),_.onerror=p(rr,f,"TestLoadImage: error",!1,h,_),_.onabort=p(rr,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=p(rr,f,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function _I(a,h){const f=new zs,_=new AbortController,D=setTimeout(()=>{_.abort(),rr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(V=>{clearTimeout(D),V.ok?rr(f,"TestPingServer: ok",!0,h):rr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),rr(f,"TestPingServer: error",!1,h)})}function rr(a,h,f,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(f)}catch{}}function yI(){this.g=new eI}function Au(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Au,$p),Au.prototype.g=function(){return new ba(this.i,this.h)};function ba(a,h){st.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ba,st),t=ba.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Js(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Xs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Js(this)),this.g&&(this.readyState=3,Js(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;fm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function fm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Xs(this):Js(this),this.readyState==3&&fm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Xs(this))},t.Na=function(a){this.g&&(this.response=a,Xs(this))},t.ga=function(){this.g&&Xs(this)};function Xs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Js(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Js(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function pm(a){let h="";return G(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function Cu(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=pm(f),typeof a=="string"?f!=null&&Hs(f):ye(a,h,f))}function Re(a){st.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Re,st);var vI=/^https?$/i,wI=["POST","PUT"];t=Re.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Qp.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){mm(this,V);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)f.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())f.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(wI,h,void 0)>=0)||_||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,$]of f)this.g.setRequestHeader(V,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){mm(this,V)}};function mm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,gm(a),Oa(a)}function gm(a){a.A||(a.A=!0,_t(a,"complete"),_t(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,_t(this,"complete"),_t(this,"abort"),Oa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oa(this,!0)),Re.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?_m(this):this.Xa())},t.Xa=function(){_m(this)};function _m(a){if(a.h&&typeof s<"u"){if(a.v&&ir(a)==4)setTimeout(a.Ca.bind(a),0);else if(_t(a,"readystatechange"),ir(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=V===0){let $=String(a.D).match(om)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),_=!vI.test($?$.toLowerCase():"")}f=_}if(f)_t(a,"complete"),_t(a,"success");else{a.o=6;try{var D=ir(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",gm(a)}}finally{Oa(a)}}}}function Oa(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||_t(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function ir(a){return a.g?a.g.readyState:0}t.ca=function(){try{return ir(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Z0(h)}};function ym(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function EI(a){const h={};a=(a.g&&ir(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(A(a[_]))continue;var f=sI(a[_]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[D]||[];h[D]=V,V.push(f)}Z(h,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function vm(a){this.za=0,this.i=[],this.j=new zs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Zs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Zs("baseRetryDelayMs",5e3,a),this.Za=Zs("retryDelaySeedMs",1e4,a),this.Ta=Zs("forwardChannelMaxRetries",2,a),this.va=Zs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new tm(a&&a.concurrentRequestLimit),this.Ba=new yI,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=vm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,_){yt(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.J=km(this,null,this.W),La(this)};function Pu(a){if(wm(a),a.I==3){var h=a.V++,f=gn(a.J);if(ye(f,"SID",a.M),ye(f,"RID",h),ye(f,"TYPE","terminate"),eo(a,f),h=new tr(a,a.j,h),h.M=2,h.A=Da(gn(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Rm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Na(h)}Pm(a)}function Va(a){a.g&&(Ru(a),a.g.cancel(),a.g=null)}function wm(a){Va(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ma(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function La(a){if(!nm(a.h)&&!a.m){a.m=!0;var h=a.Ea;O||v(),M||(O(),M=!0),I.add(h,a),a.D=0}}function II(a,h){return rm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=$s(u(a.Ea,a,h),Cm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new tr(this,this.j,a);let V=this.o;if(this.U&&(V?(V=fe(V),Qr(V,this.U)):V=this.U),this.u!==null||this.R||(D.J=V,V=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Im(this,D,h),f=gn(this.J),ye(f,"RID",a),ye(f,"CVER",22),this.G&&ye(f,"X-HTTP-Session-Id",this.G),eo(this,f),V&&(this.R?h="headers="+Hs(pm(V))+"&"+h:this.u&&Cu(f,this.u,V)),Tu(this.h,D),this.Ra&&ye(f,"TYPE","init"),this.S?(ye(f,"$req",h),ye(f,"SID","null"),D.U=!0,vu(D,f,null)):vu(D,f,h),this.I=2}}else this.I==3&&(a?Em(this,a):this.i.length==0||nm(this.h)||Em(this))};function Em(a,h){var f;h?f=h.l:f=a.V++;const _=gn(a.J);ye(_,"SID",a.M),ye(_,"RID",f),ye(_,"AID",a.K),eo(a,_),a.u&&a.o&&Cu(_,a.u,a.o),f=new tr(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Im(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Tu(a.h,f),vu(f,_,h)}function eo(a,h){a.H&&G(a.H,function(f,_){ye(h,_,f)}),a.l&&G({},function(f,_){ye(h,_,f)})}function Im(a,h,f){f=Math.min(a.i.length,f);const _=a.l?u(a.l.Ka,a.l,a):null;e:{var D=a.i;let ee=-1;for(;;){const ze=["count="+f];ee==-1?f>0?(ee=D[0].g,ze.push("ofs="+ee)):ee=0:ze.push("ofs="+ee);let pe=!0;for(let Ke=0;Ke<f;Ke++){var V=D[Ke].g;const _n=D[Ke].map;if(V-=ee,V<0)ee=Math.max(0,D[Ke].g-100),pe=!1;else try{V="req"+V+"_"||"";try{var $=_n instanceof Map?_n:Object.entries(_n);for(const[ti,sr]of $){let or=sr;l(sr)&&(or=pu(sr)),ze.push(V+ti+"="+encodeURIComponent(or))}}catch(ti){throw ze.push(V+"type="+encodeURIComponent("_badmap")),ti}}catch{_&&_(_n)}}if(pe){$=ze.join("&");break e}}$=void 0}return a=a.i.splice(0,f),h.G=a,$}function Tm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;O||v(),M||(O(),M=!0),I.add(h,a),a.A=0}}function ku(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=$s(u(a.Da,a),Cm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Sm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=$s(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,yt(10),Va(this),Sm(this))};function Ru(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Sm(a){a.g=new tr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=gn(a.na);ye(h,"RID","rpc"),ye(h,"SID",a.M),ye(h,"AID",a.K),ye(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ye(h,"TO",a.ia),ye(h,"TYPE","xmlhttp"),eo(a,h),a.u&&a.o&&Cu(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Da(gn(h)),f.u=null,f.R=!0,Jp(f,a)}t.Va=function(){this.C!=null&&(this.C=null,Va(this),ku(this),yt(19))};function Ma(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Am(a,h){var f=null;if(a.g==h){Ma(a),Ru(a),a.g=null;var _=2}else if(Iu(a.h,h))f=h.G,im(a.h,h),_=1;else return;if(a.I!=0){if(h.o)if(_==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var D=a.D;_=Ra(),_t(_,new Gp(_,f)),La(a)}else Tm(a);else if(D=h.m,D==3||D==0&&h.X>0||!(_==1&&II(a,h)||_==2&&ku(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),D){case 1:ei(a,5);break;case 4:ei(a,10);break;case 3:ei(a,6);break;default:ei(a,2)}}}function Cm(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function ei(a,h){if(a.j.info("Error code "+h),h==2){var f=u(a.bb,a),_=a.Ua;const D=!_;_=new nr(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ws(_,"https"),Da(_),D?gI(_.toString(),f):_I(_.toString(),f)}else yt(2);a.I=0,a.l&&a.l.pa(h),Pm(a),wm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Pm(a){if(a.I=0,a.ja=[],a.l){const h=sm(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ja,h),k(a.ja,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.oa()}}function km(a,h,f){var _=f instanceof nr?gn(f):new nr(f);if(_.g!="")h&&(_.g=h+"."+_.g),Gs(_,_.u);else{var D=o.location;_=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;const V=new nr(null);_&&Ws(V,_),h&&(V.g=h),D&&Gs(V,D),f&&(V.h=f),_=V}return f=a.G,h=a.wa,f&&h&&ye(_,f,h),ye(_,"VER",a.ka),eo(a,_),_}function Rm(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Re(new Au({ab:f})):new Re(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xm(){}t=xm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ja(){}ja.prototype.g=function(a,h){return new Dt(a,h)};function Dt(a,h){st.call(this),this.g=new vm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!A(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!A(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Vi(this)}m(Dt,st),Dt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Pu(this.g)},Dt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=pu(a),a=f);h.i.push(new lI(h.Ya++,a)),h.I==3&&La(h)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Pu(this.g),delete this.g,Dt.Z.N.call(this)};function Nm(a){mu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(Nm,mu);function Dm(){gu.call(this),this.status=1}m(Dm,gu);function Vi(a){this.g=a}m(Vi,xm),Vi.prototype.ra=function(){_t(this.g,"a")},Vi.prototype.qa=function(a){_t(this.g,new Nm(a))},Vi.prototype.pa=function(a){_t(this.g,new Dm)},Vi.prototype.oa=function(){_t(this.g,"b")},ja.prototype.createWebChannel=ja.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,WE=function(){return new ja},qE=function(){return Ra()},HE=Xr,wd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},xa.NO_ERROR=0,xa.TIMEOUT=8,xa.HTTP_ERROR=6,Al=xa,Kp.COMPLETE="complete",zE=Kp,zp.EventType=Us,Us.OPEN="a",Us.CLOSE="b",Us.ERROR="c",Us.MESSAGE="d",st.prototype.listen=st.prototype.J,_o=zp,Re.prototype.listenOnce=Re.prototype.K,Re.prototype.getLastError=Re.prototype.Ha,Re.prototype.getLastErrorCode=Re.prototype.ya,Re.prototype.getStatus=Re.prototype.ca,Re.prototype.getResponseJson=Re.prototype.La,Re.prototype.getResponseText=Re.prototype.la,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Fa,$E=Re}).apply(typeof il<"u"?il:typeof self<"u"?self:typeof window<"u"?window:{});const E_="@firebase/firestore",I_="4.9.3";/**
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
 */let Os="12.7.0";/**
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
 */const vi=new Uc("@firebase/firestore");function Mi(){return vi.logLevel}function H(t,...e){if(vi.logLevel<=re.DEBUG){const n=e.map(qf);vi.debug(`Firestore (${Os}): ${t}`,...n)}}function Yn(t,...e){if(vi.logLevel<=re.ERROR){const n=e.map(qf);vi.error(`Firestore (${Os}): ${t}`,...n)}}function Es(t,...e){if(vi.logLevel<=re.WARN){const n=e.map(qf);vi.warn(`Firestore (${Os}): ${t}`,...n)}}function qf(t){if(typeof t=="string")return t;try{/**
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
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,GE(t,r,n)}function GE(t,e,n){let r=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Yn(r),new Error(r)}function ce(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||GE(e,i,r)}function X(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class KE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class Xk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Jk{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Bn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string",31837,{l:r}),new KE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string",2055,{h:e}),new ht(e)}}class Zk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class eR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Zk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class T_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,on(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ce(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new T_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new T_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Wf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=nR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function Ed(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return uh(i)===uh(s)?ie(i,s):uh(i)?1:-1}return ie(t.length,e.length)}const rR=55296,iR=57343;function uh(t){const e=t.charCodeAt(0);return e>=rR&&e<=iR}function Is(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const S_="__name__";class En{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return En.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof En?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=En.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ie(e.length,n.length)}static compareSegments(e,n){const r=En.isNumericId(e),i=En.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?En.extractNumericId(e).compare(En.extractNumericId(n)):Ed(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Nr.fromString(e.substring(4,e.length-2))}}class ge extends En{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const sR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends En{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return sR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===S_}static keyField(){return new tt([S_])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new z(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new z(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(ge.fromString(e))}static fromName(e){return new W(ge.fromString(e).popFirst(5))}static empty(){return new W(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new ge(e.slice()))}}/**
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
 */function QE(t,e,n){if(!n)throw new z(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oR(t,e,n,r){if(e===!0&&r===!0)throw new z(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function A_(t){if(!W.isDocumentKey(t))throw new z(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function C_(t){if(W.isDocumentKey(t))throw new z(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function YE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function qc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function fn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qc(t);throw new z(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function $e(t,e){const n={typeString:t};return e&&(n.value=e),n}function va(t,e){if(!YE(t))throw new z(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new z(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const P_=-62135596800,k_=1e6;class he{static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*k_);return new he(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<P_)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/k_}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:he._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(va(e,he._jsonSchema))return new he(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-P_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}he._jsonSchemaVersion="firestore/timestamp/1.0",he._jsonSchema={type:$e("string",he._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
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
 */const na=-1;function aR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new he(n+1,0):new he(n,r));return new Lr(i,W.empty(),e)}function lR(t){return new Lr(t.readTime,t.key,na)}class Lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Lr(Y.min(),W.empty(),na)}static max(){return new Lr(Y.max(),W.empty(),na)}}function cR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const uR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Vs(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==uR)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(p=>{o[u]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function dR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ls(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Wc.ce=-1;/**
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
 */const Gf=-1;function Gc(t){return t==null}function cc(t){return t===0&&1/t==-1/0}function fR(t){return typeof t=="number"&&Number.isInteger(t)&&!cc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const XE="";function pR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=R_(e)),e=mR(t.get(n),e);return R_(e)}function mR(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case XE:n+="";break;default:n+=s}}return n}function R_(t){return t+XE+""}/**
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
 */function x_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function JE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ke{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sl(this.root,e,this.comparator,!0)}}class sl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??et.RED,this.left=i??et.EMPTY,this.right=s??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ge{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new N_(this.data.getIterator())}getIteratorFrom(e){return new N_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class N_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new Ge(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ZE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ZE("Invalid base64 string: "+s):s}}(e);return new it(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const gR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mr(t){if(ce(!!t,39018),typeof t=="string"){let e=0;const n=gR.exec(t);if(ce(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
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
 */const e1="server_timestamp",t1="__type__",n1="__previous_value__",r1="__local_write_time__";function Kf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[t1])==null?void 0:r.stringValue)===e1}function Kc(t){const e=t.mapValue.fields[n1];return Kf(e)?Kc(e):e}function ra(t){const e=Mr(t.mapValue.fields[r1].timestampValue);return new he(e.seconds,e.nanos)}/**
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
 */class _R{constructor(e,n,r,i,s,o,l,c,u,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=p}}const uc="(default)";class ia{constructor(e,n){this.projectId=e,this.database=n||uc}static empty(){return new ia("","")}get isDefaultDatabase(){return this.database===uc}isEqual(e){return e instanceof ia&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const i1="__type__",s1="__max__",ol={mapValue:{fields:{__type__:{stringValue:s1}}}},o1="__vector__",hc="value";function Fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kf(t)?4:vR(t)?9007199254740991:yR(t)?10:11:Q(28295,{value:t})}function Dn(t,e){if(t===e)return!0;const n=Fr(t);if(n!==Fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ra(t).isEqual(ra(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Mr(i.timestampValue),l=Mr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return jr(i.bytesValue).isEqual(jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Oe(i.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Oe(i.integerValue)===Oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Oe(i.doubleValue),l=Oe(s.doubleValue);return o===l?cc(o)===cc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Is(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(x_(o)!==x_(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Dn(o[c],l[c])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function sa(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function Ts(t,e){if(t===e)return 0;const n=Fr(t),r=Fr(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Oe(s.integerValue||s.doubleValue),c=Oe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return D_(t.timestampValue,e.timestampValue);case 4:return D_(ra(t),ra(e));case 5:return Ed(t.stringValue,e.stringValue);case 6:return function(s,o){const l=jr(s),c=jr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const p=ie(l[u],c[u]);if(p!==0)return p}return ie(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ie(Oe(s.latitude),Oe(o.latitude));return l!==0?l:ie(Oe(s.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return b_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,S,k,x;const l=s.fields||{},c=o.fields||{},u=(g=l[hc])==null?void 0:g.arrayValue,p=(S=c[hc])==null?void 0:S.arrayValue,m=ie(((k=u==null?void 0:u.values)==null?void 0:k.length)||0,((x=p==null?void 0:p.values)==null?void 0:x.length)||0);return m!==0?m:b_(u,p)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ol.mapValue&&o===ol.mapValue)return 0;if(s===ol.mapValue)return 1;if(o===ol.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),u=o.fields||{},p=Object.keys(u);c.sort(),p.sort();for(let m=0;m<c.length&&m<p.length;++m){const g=Ed(c[m],p[m]);if(g!==0)return g;const S=Ts(l[c[m]],u[p[m]]);if(S!==0)return S}return ie(c.length,p.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function D_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=Mr(t),r=Mr(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function b_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ts(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function Ss(t){return Id(t)}function Id(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Id(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Id(n.fields[o])}`;return i+"}"}(t.mapValue):Q(61005,{value:t})}function Cl(t){switch(Fr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Kc(t);return e?16+Cl(e):16;case 5:return 2*t.stringValue.length;case 6:return jr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Cl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Wr(r.fields,(s,o)=>{i+=s.length+Cl(o)}),i}(t.mapValue);default:throw Q(13486,{value:t})}}function O_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Td(t){return!!t&&"integerValue"in t}function Qf(t){return!!t&&"arrayValue"in t}function V_(t){return!!t&&"nullValue"in t}function L_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pl(t){return!!t&&"mapValue"in t}function yR(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[i1])==null?void 0:r.stringValue)===o1}function Do(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Wr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Do(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Do(t.arrayValue.values[n]);return e}return{...t}}function vR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===s1}/**
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Do(n)}setAll(e){let n=tt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Do(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Pl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Pl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Wr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Pt(Do(this.value))}}function a1(t){const e=[];return Wr(t.fields,(n,r)=>{const i=new tt([n]);if(Pl(r)){const s=a1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Mt(e)}/**
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
 */class ft{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ft(e,0,Y.min(),Y.min(),Y.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,i){return new ft(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new ft(e,2,n,Y.min(),Y.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,Y.min(),Y.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dc{constructor(e,n){this.position=e,this.inclusive=n}}function M_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Ts(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function j_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class oa{constructor(e,n="asc"){this.field=e,this.dir=n}}function wR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class l1{}class Be extends l1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new IR(e,n,r):n==="array-contains"?new AR(e,r):n==="in"?new CR(e,r):n==="not-in"?new PR(e,r):n==="array-contains-any"?new kR(e,r):new Be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new TR(e,r):new SR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ts(n,this.value)):n!==null&&Fr(this.value)===Fr(n)&&this.matchesComparison(Ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends l1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new pn(e,n)}matches(e){return c1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function c1(t){return t.op==="and"}function u1(t){return ER(t)&&c1(t)}function ER(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function Sd(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+Ss(t.value);if(u1(t))return t.filters.map(e=>Sd(e)).join(",");{const e=t.filters.map(n=>Sd(n)).join(",");return`${t.op}(${e})`}}function h1(t,e){return t instanceof Be?function(r,i){return i instanceof Be&&r.op===i.op&&r.field.isEqual(i.field)&&Dn(r.value,i.value)}(t,e):t instanceof pn?function(r,i){return i instanceof pn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&h1(o,i.filters[l]),!0):!1}(t,e):void Q(19439)}function d1(t){return t instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${Ss(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(d1).join(" ,")+"}"}(t):"Filter"}class IR extends Be{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class TR extends Be{constructor(e,n){super(e,"in",n),this.keys=f1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class SR extends Be{constructor(e,n){super(e,"not-in",n),this.keys=f1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function f1(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class AR extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qf(n)&&sa(n.arrayValue,this.value)}}class CR extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&sa(this.value.arrayValue,n)}}class PR extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(sa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!sa(this.value.arrayValue,n)}}class kR extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>sa(this.value.arrayValue,r))}}/**
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
 */class RR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function F_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new RR(t,e,n,r,i,s,o)}function Yf(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Gc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ss(r)).join(",")),e.Te=n}return e.Te}function Xf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!h1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!j_(t.startAt,e.startAt)&&j_(t.endAt,e.endAt)}function Ad(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ms{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function xR(t,e,n,r,i,s,o,l){return new Ms(t,e,n,r,i,s,o,l)}function Jf(t){return new Ms(t)}function U_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function p1(t){return t.collectionGroup!==null}function bo(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ge(tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new oa(s,r))}),n.has(tt.keyField().canonicalString())||e.Ie.push(new oa(tt.keyField(),r))}return e.Ie}function Pn(t){const e=X(t);return e.Ee||(e.Ee=NR(e,bo(t))),e.Ee}function NR(t,e){if(t.limitType==="F")return F_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new oa(i.field,s)});const n=t.endAt?new dc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new dc(t.startAt.position,t.startAt.inclusive):null;return F_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cd(t,e){const n=t.filters.concat([e]);return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Pd(t,e,n){return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qc(t,e){return Xf(Pn(t),Pn(e))&&t.limitType===e.limitType}function m1(t){return`${Yf(Pn(t))}|lt:${t.limitType}`}function ji(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>d1(i)).join(", ")}]`),Gc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ss(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ss(i)).join(",")),`Target(${r})`}(Pn(t))}; limitType=${t.limitType})`}function Yc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of bo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,c){const u=M_(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,bo(r),i)||r.endAt&&!function(o,l,c){const u=M_(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,bo(r),i))}(t,e)}function DR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function g1(t){return(e,n)=>{let r=!1;for(const i of bo(t)){const s=bR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function bR(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const c=o.data.field(s),u=l.data.field(s);return c!==null&&u!==null?Ts(c,u):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
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
 */class ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return JE(this.inner)}size(){return this.innerSize}}/**
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
 */const OR=new ke(W.comparator);function Xn(){return OR}const _1=new ke(W.comparator);function yo(...t){let e=_1;for(const n of t)e=e.insert(n.key,n);return e}function y1(t){let e=_1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function li(){return Oo()}function v1(){return Oo()}function Oo(){return new ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const VR=new ke(W.comparator),LR=new Ge(W.comparator);function se(...t){let e=LR;for(const n of t)e=e.add(n);return e}const MR=new Ge(ie);function jR(){return MR}/**
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
 */function Zf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cc(e)?"-0":e}}function w1(t){return{integerValue:""+t}}function FR(t,e){return fR(e)?w1(e):Zf(t,e)}/**
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
 */class Xc{constructor(){this._=void 0}}function UR(t,e,n){return t instanceof fc?function(i,s){const o={fields:{[t1]:{stringValue:e1},[r1]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Kf(s)&&(s=Kc(s)),s&&(o.fields[n1]=s),{mapValue:o}}(n,e):t instanceof aa?I1(t,e):t instanceof la?T1(t,e):function(i,s){const o=E1(i,s),l=B_(o)+B_(i.Ae);return Td(o)&&Td(i.Ae)?w1(l):Zf(i.serializer,l)}(t,e)}function BR(t,e,n){return t instanceof aa?I1(t,e):t instanceof la?T1(t,e):n}function E1(t,e){return t instanceof pc?function(r){return Td(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class fc extends Xc{}class aa extends Xc{constructor(e){super(),this.elements=e}}function I1(t,e){const n=S1(e);for(const r of t.elements)n.some(i=>Dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class la extends Xc{constructor(e){super(),this.elements=e}}function T1(t,e){let n=S1(e);for(const r of t.elements)n=n.filter(i=>!Dn(i,r));return{arrayValue:{values:n}}}class pc extends Xc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function B_(t){return Oe(t.integerValue||t.doubleValue)}function S1(t){return Qf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $R(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof aa&&i instanceof aa||r instanceof la&&i instanceof la?Is(r.elements,i.elements,Dn):r instanceof pc&&i instanceof pc?Dn(r.Ae,i.Ae):r instanceof fc&&i instanceof fc}(t.transform,e.transform)}class zR{constructor(e,n){this.version=e,this.transformResults=n}}class Xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jc{}function A1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ep(t.key,Xt.none()):new wa(t.key,t.data,Xt.none());{const n=t.data,r=Pt.empty();let i=new Ge(tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Gr(t.key,r,new Mt(i.toArray()),Xt.none())}}function HR(t,e,n){t instanceof wa?function(i,s,o){const l=i.value.clone(),c=z_(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Gr?function(i,s,o){if(!kl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=z_(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(C1(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Vo(t,e,n,r){return t instanceof wa?function(s,o,l,c){if(!kl(s.precondition,o))return l;const u=s.value.clone(),p=H_(s.fieldTransforms,c,o);return u.setAll(p),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Gr?function(s,o,l,c){if(!kl(s.precondition,o))return l;const u=H_(s.fieldTransforms,c,o),p=o.data;return p.setAll(C1(s)),p.setAll(u),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return kl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function qR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=E1(r.transform,i||null);s!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,s))}return n||null}function $_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Is(r,i,(s,o)=>$R(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wa extends Jc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Gr extends Jc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function C1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function z_(t,e,n){const r=new Map;ce(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,BR(o,l,n[i]))}return r}function H_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,UR(s,o,e))}return r}class ep extends Jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class WR extends Jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class GR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&HR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Vo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Vo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=v1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const c=A1(o,l);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Is(this.mutations,e.mutations,(n,r)=>$_(n,r))&&Is(this.baseMutations,e.baseMutations,(n,r)=>$_(n,r))}}class tp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return VR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new tp(e,n,r,i)}}/**
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
 */class KR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class QR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Fe,oe;function YR(t){switch(t){case L.OK:return Q(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function P1(t){if(t===void 0)return Yn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Fe.OK:return L.OK;case Fe.CANCELLED:return L.CANCELLED;case Fe.UNKNOWN:return L.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return L.INTERNAL;case Fe.UNAVAILABLE:return L.UNAVAILABLE;case Fe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Fe.NOT_FOUND:return L.NOT_FOUND;case Fe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Fe.ABORTED:return L.ABORTED;case Fe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Fe.DATA_LOSS:return L.DATA_LOSS;default:return Q(39323,{code:t})}}(oe=Fe||(Fe={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function XR(){return new TextEncoder}/**
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
 */const JR=new Nr([4294967295,4294967295],0);function q_(t){const e=XR().encode(t),n=new BE;return n.update(e),new Uint8Array(n.digest())}function W_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Nr([n,r],0),new Nr([i,s],0)]}class np{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vo(`Invalid padding: ${n}`);if(r<0)throw new vo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new vo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Nr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Nr.fromNumber(r)));return i.compare(JR)===1&&(i=new Nr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=q_(e),[r,i]=W_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new np(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=q_(e),[r,i]=W_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class vo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Zc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ea.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zc(Y.min(),i,new ke(ie),Xn(),se())}}class Ea{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ea(r,n,se(),se(),se())}}/**
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
 */class Rl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class k1{constructor(e,n){this.targetId=e,this.Ce=n}}class R1{constructor(e,n,r=it.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class G_{constructor(){this.ve=0,this.Fe=K_(),this.Me=it.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),n=se(),r=se();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q(38017,{changeType:s})}}),new Ea(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=K_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ce(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class ZR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Xn(),this.Je=al(),this.He=al(),this.Ye=new ke(ie)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Ad(s))if(r===0){const o=new W(s.path);this.et(n,o,ft.newNoDocument(o,Y.min()))}else ce(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=jr(r).toUint8Array()}catch(c){if(c instanceof ZE)return Es("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new np(o,i,s)}catch(c){return Es(c instanceof vo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Ad(l.target)){const c=new W(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,ft.newNoDocument(c,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=se();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Zc(e,n,this.Ye,this.je,r);return this.je=Xn(),this.Je=al(),this.He=al(),this.Ye=new ke(ie),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new G_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ge(ie),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ge(ie),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new G_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function al(){return new ke(W.comparator)}function K_(){return new ke(W.comparator)}const ex={asc:"ASCENDING",desc:"DESCENDING"},tx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nx={and:"AND",or:"OR"};class rx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kd(t,e){return t.useProto3Json||Gc(e)?e:{value:e}}function mc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function x1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ix(t,e){return mc(t,e.toTimestamp())}function kn(t){return ce(!!t,49232),Y.fromTimestamp(function(n){const r=Mr(n);return new he(r.seconds,r.nanos)}(t))}function rp(t,e){return Rd(t,e).canonicalString()}function Rd(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function N1(t){const e=ge.fromString(t);return ce(L1(e),10190,{key:e.toString()}),e}function xd(t,e){return rp(t.databaseId,e.path)}function hh(t,e){const n=N1(e);if(n.get(1)!==t.databaseId.projectId)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(b1(n))}function D1(t,e){return rp(t.databaseId,e)}function sx(t){const e=N1(t);return e.length===4?ge.emptyPath():b1(e)}function Nd(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function b1(t){return ce(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Q_(t,e,n){return{name:xd(t,e),fields:n.value.mapValue.fields}}function ox(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Q(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,p){return u.useProto3Json?(ce(p===void 0||typeof p=="string",58123),it.fromBase64String(p||"")):(ce(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),it.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const p=u.code===void 0?L.UNKNOWN:P1(u.code);return new z(p,u.message||"")}(o);n=new R1(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=hh(t,r.document.name),s=kn(r.document.updateTime),o=r.document.createTime?kn(r.document.createTime):Y.min(),l=new Pt({mapValue:{fields:r.document.fields}}),c=ft.newFoundDocument(i,s,o,l),u=r.targetIds||[],p=r.removedTargetIds||[];n=new Rl(u,p,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=hh(t,r.document),s=r.readTime?kn(r.readTime):Y.min(),o=ft.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Rl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=hh(t,r.document),s=r.removedTargetIds||[];n=new Rl([],s,i,null)}else{if(!("filter"in e))return Q(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new QR(i,s),l=r.targetId;n=new k1(l,o)}}return n}function ax(t,e){let n;if(e instanceof wa)n={update:Q_(t,e.key,e.value)};else if(e instanceof ep)n={delete:xd(t,e.key)};else if(e instanceof Gr)n={update:Q_(t,e.key,e.data),updateMask:gx(e.fieldMask)};else{if(!(e instanceof WR))return Q(16599,{Vt:e.type});n={verify:xd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof fc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof aa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof la)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof pc)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ix(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(t,e.precondition)),n}function lx(t,e){return t&&t.length>0?(ce(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?kn(i.updateTime):kn(s);return o.isEqual(Y.min())&&(o=kn(s)),new zR(o,i.transformResults||[])}(n,e))):[]}function cx(t,e){return{documents:[D1(t,e.path)]}}function ux(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=D1(t,i);const s=function(u){if(u.length!==0)return V1(pn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(p=>function(g){return{field:Fi(g.field),direction:fx(g.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=kd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:i}}function hx(t){let e=sx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1,65062);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(m){const g=O1(m);return g instanceof pn&&u1(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(k){return new oa(Ui(k.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Gc(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(m){const g=!!m.before,S=m.values||[];return new dc(S,g)}(n.startAt));let u=null;return n.endAt&&(u=function(m){const g=!m.before,S=m.values||[];return new dc(S,g)}(n.endAt)),xR(e,i,o,s,l,"F",c,u)}function dx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function O1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ui(n.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ui(n.unaryFilter.field);return Be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ui(n.unaryFilter.field);return Be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ui(n.unaryFilter.field);return Be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return Be.create(Ui(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>O1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function fx(t){return ex[t]}function px(t){return tx[t]}function mx(t){return nx[t]}function Fi(t){return{fieldPath:t.canonicalString()}}function Ui(t){return tt.fromServerFormat(t.fieldPath)}function V1(t){return t instanceof Be?function(n){if(n.op==="=="){if(L_(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NAN"}};if(V_(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(L_(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NAN"}};if(V_(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fi(n.field),op:px(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(i=>V1(i));return r.length===1?r[0]:{compositeFilter:{op:mx(n.op),filters:r}}}(t):Q(54877,{filter:t})}function gx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function L1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class vr{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=it.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class _x{constructor(e){this.yt=e}}function yx(t){const e=hx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pd(e,e.limit,"L"):e}/**
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
 */class vx{constructor(){this.Cn=new wx}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Lr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Lr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class wx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ge(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ge(ge.comparator)).toArray()}}/**
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
 */const Y_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},M1=41943040;class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(M1,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
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
 */const X_="LruGarbageCollector",Ex=1048576;function J_([t,e],[n,r]){const i=ie(t,n);return i===0?ie(e,r):i}class Ix{constructor(e){this.Ir=e,this.buffer=new Ge(J_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();J_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Tx{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){H(X_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ls(n)?H(X_,"Ignoring IndexedDB error during garbage collection: ",n):await Vs(n)}await this.Vr(3e5)})}}class Sx{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Wc.ce);const r=new Ix(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Y_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Y_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,c,u;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(u=Date.now(),Mi()<=re.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(u-c)+`ms
Total Duration: ${u-p}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function Ax(t,e){return new Sx(t,e)}/**
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
 */class Cx{constructor(){this.changes=new ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Px{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class kx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Vo(r.mutation,i,Mt.empty(),he.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=li();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=yo();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=li();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Xn();const o=Oo(),l=function(){return Oo()}();return n.forEach((c,u)=>{const p=r.get(u.key);i.has(u.key)&&(p===void 0||p.mutation instanceof Gr)?s=s.insert(u.key,u):p!==void 0?(o.set(u.key,p.mutation.getFieldMask()),Vo(p.mutation,u,p.mutation.getFieldMask(),he.now())):o.set(u.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,p)=>o.set(u,p)),n.forEach((u,p)=>l.set(u,new Px(p,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Oo();let i=new ke((o,l)=>o-l),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let p=r.get(c)||Mt.empty();p=l.applyToLocalView(u,p),r.set(c,p);const m=(i.get(l.batchId)||se()).add(c);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,p=c.value,m=v1();p.forEach(g=>{if(!s.has(g)){const S=A1(n.get(g),r.get(g));S!==null&&m.set(g,S),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,m))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):p1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(li());let l=na,c=s;return o.next(u=>j.forEach(u,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?j.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{c=c.insert(p,g)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,se())).next(p=>({batchId:l,changes:y1(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=yo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=yo();return this.indexManager.getCollectionParents(e,s).next(l=>j.forEach(l,c=>{const u=function(m,g){return new Ms(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const p=u.getKey();o.get(p)===null&&(o=o.insert(p,ft.newInvalidDocument(p)))});let l=yo();return o.forEach((c,u)=>{const p=s.get(c);p!==void 0&&Vo(p.mutation,u,Mt.empty(),he.now()),Yc(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class Rx{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return j.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:kn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:yx(i.bundledQuery),readTime:kn(i.readTime)}}(n)),j.resolve()}}/**
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
 */class xx{constructor(){this.overlays=new ke(W.comparator),this.qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=li();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=li(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((u,p)=>u-p);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let p=s.get(u.largestBatchId);p===null&&(p=li(),s=s.insert(u.largestBatchId,p)),p.set(u.getKey(),u)}}const l=li(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,p)=>l.set(u,p)),!(l.size()>=i)););return j.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new KR(n,r));let s=this.qr.get(n);s===void 0&&(s=se(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class Nx{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class ip{constructor(){this.Qr=new Ge(Qe.$r),this.Ur=new Ge(Qe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Qe(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new W(new ge([])),r=new Qe(n,e),i=new Qe(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new W(new ge([])),r=new Qe(n,e),i=new Qe(n,e+1);let s=se();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Qe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return W.comparator(e.key,n.key)||ie(e.Yr,n.Yr)}static Kr(e,n){return ie(e.Yr,n.Yr)||W.comparator(e.key,n.key)}}/**
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
 */class Dx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ge(Qe.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new GR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Qe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?Gf:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),i=new Qe(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(ie);return n.forEach(i=>{const s=new Qe(i,0),o=new Qe(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),j.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Qe(new W(s),0);let l=new Ge(ie);return this.Zr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.Yr)),!0)},o),j.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return j.forEach(n.mutations,i=>{const s=new Qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Qe(n,0),i=this.Zr.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class bx{constructor(e){this.ri=e,this.docs=function(){return new ke(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ft.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Xn();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:p}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||cR(lR(p),r)<=0||(i.has(p.key)||Yc(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q(9500)}ii(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ox(this)}getSize(e){return j.resolve(this.size)}}class Ox extends Cx{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class Vx{constructor(e){this.persistence=e,this.si=new ki(n=>Yf(n),Xf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.oi=0,this._i=new ip,this.targetCount=0,this.ai=As.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),j.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new As(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Pr(n),j.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this._i.containsKey(n))}}/**
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
 */class j1{constructor(e,n){this.ui={},this.overlays={},this.ci=new Wc(0),this.li=!1,this.li=!0,this.hi=new Nx,this.referenceDelegate=e(this),this.Pi=new Vx(this),this.indexManager=new vx,this.remoteDocumentCache=function(i){return new bx(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new _x(n),this.Ii=new Rx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new Dx(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new Lx(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return j.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class Lx extends hR{constructor(e){super(),this.currentSequenceNumber=e}}class sp{constructor(e){this.persistence=e,this.Ri=new ip,this.Vi=null}static mi(e){return new sp(e)}get fi(){if(this.Vi)return this.Vi;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,r=>{const i=W.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class gc{constructor(e,n){this.persistence=e,this.pi=new ki(r=>pR(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Ax(this,n)}static mi(e,n){return new gc(e,n)}Ei(){}di(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return j.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?j.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Cl(e.data.value)),n}br(e,n,r){return j.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return j.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class op{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new op(e,n.fromCache,r,i)}}/**
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
 */class Mx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class jx{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return pA()?8:dR(mt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Mx;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(Mi()<=re.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",ji(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(Mi()<=re.DEBUG&&H("QueryEngine","Query:",ji(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Mi()<=re.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",ji(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(n))):j.resolve())}ys(e,n){if(U_(n))return j.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Pd(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,Pd(n,null,"F")):this.vs(e,u,n,c)}))})))}ws(e,n,r,i){return U_(n)||i.isEqual(Y.min())?j.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?j.resolve(null):(Mi()<=re.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ji(n)),this.vs(e,o,n,aR(i,na)).next(l=>l))})}Ds(e,n){let r=new Ge(g1(e));return n.forEach((i,s)=>{Yc(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return Mi()<=re.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",ji(n)),this.ps.getDocumentsMatchingQuery(e,n,Lr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const ap="LocalStore",Fx=3e8;class Ux{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new ke(ie),this.xs=new ki(s=>Yf(s),Xf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kx(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function Bx(t,e,n,r){return new Ux(t,e,n,r)}async function F1(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let c=se();for(const u of i){o.push(u.batchId);for(const p of u.mutations)c=c.add(p.key)}for(const u of s){l.push(u.batchId);for(const p of u.mutations)c=c.add(p.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:l}))})})}function $x(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,c,u,p){const m=u.batch,g=m.keys();let S=j.resolve();return g.forEach(k=>{S=S.next(()=>p.getEntry(c,k)).next(x=>{const b=u.docVersions.get(k);ce(b!==null,48541),x.version.compareTo(b)<0&&(m.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),p.addEntry(x)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=se();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function U1(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function zx(t,e){const n=X(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((p,m)=>{const g=i.get(m);if(!g)return;l.push(n.Pi.removeMatchingKeys(s,p.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(s,p.addedDocuments,m)));let S=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(it.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),i=i.insert(m,S),function(x,b,w){return x.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Fx?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,S,p)&&l.push(n.Pi.updateTargetData(s,S))});let c=Xn(),u=se();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(Hx(s,o,e.documentUpdates).next(p=>{c=p.ks,u=p.qs})),!r.isEqual(Y.min())){const p=n.Pi.getLastRemoteSnapshotVersion(s).next(m=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return j.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Ms=i,s))}function Hx(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Xn();return n.forEach((l,c)=>{const u=s.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):H(ap,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{ks:o,qs:i}})}function qx(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Gf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Wx(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Dd(t,e,n){const r=X(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ls(o))throw o;H(ap,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Z_(t,e,n){const r=X(t);let i=Y.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,p){const m=X(c),g=m.xs.get(p);return g!==void 0?j.resolve(m.Ms.get(g)):m.Pi.getTargetData(u,p)}(r,o,Pn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:se())).next(l=>(Gx(r,DR(e),l),{documents:l,Qs:s})))}function Gx(t,e,n){let r=t.Os.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class ey{constructor(){this.activeTargetIds=jR()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kx{constructor(){this.Mo=new ey,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ey,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Qx{Oo(e){}shutdown(){}}/**
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
 */const ty="ConnectivityMonitor";class ny{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){H(ty,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){H(ty,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ll=null;function bd(){return ll===null?ll=function(){return 268435456+Math.round(2147483648*Math.random())}():ll++,"0x"+ll.toString(16)}/**
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
 */const dh="RestConnection",Yx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Xx{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===uc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=bd(),l=this.zo(e,n.toUriEncodedString());H(dh,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,i,s);const{host:u}=new URL(l),p=xs(u);return this.Jo(e,l,c,r,p).then(m=>(H(dh,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Es(dh,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Os}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=Yx[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class Jx{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const lt="WebChannelConnection";class Zx extends Xx{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=bd();return new Promise((l,c)=>{const u=new $E;u.setWithCredentials(!0),u.listenOnce(zE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Al.NO_ERROR:const m=u.getResponseJson();H(lt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Al.TIMEOUT:H(lt,`RPC '${e}' ${o} timed out`),c(new z(L.DEADLINE_EXCEEDED,"Request time out"));break;case Al.HTTP_ERROR:const g=u.getStatus();if(H(lt,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let S=u.getResponseJson();Array.isArray(S)&&(S=S[0]);const k=S==null?void 0:S.error;if(k&&k.status&&k.message){const x=function(w){const y=w.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(y)>=0?y:L.UNKNOWN}(k.status);c(new z(x,k.message))}else c(new z(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new z(L.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{H(lt,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(i);H(lt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",p,r,15)})}T_(e,n,r){const i=bd(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=WE(),l=qE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const p=s.join("");H(lt,`Creating RPC '${e}' stream ${i}: ${p}`,c);const m=o.createWebChannel(p,c);this.I_(m);let g=!1,S=!1;const k=new Jx({Yo:b=>{S?H(lt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(g||(H(lt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),H(lt,`RPC '${e}' stream ${i} sending:`,b),m.send(b))},Zo:()=>m.close()}),x=(b,w,y)=>{b.listen(w,E=>{try{y(E)}catch(R){setTimeout(()=>{throw R},0)}})};return x(m,_o.EventType.OPEN,()=>{S||(H(lt,`RPC '${e}' stream ${i} transport opened.`),k.o_())}),x(m,_o.EventType.CLOSE,()=>{S||(S=!0,H(lt,`RPC '${e}' stream ${i} transport closed`),k.a_(),this.E_(m))}),x(m,_o.EventType.ERROR,b=>{S||(S=!0,Es(lt,`RPC '${e}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),k.a_(new z(L.UNAVAILABLE,"The operation could not be completed")))}),x(m,_o.EventType.MESSAGE,b=>{var w;if(!S){const y=b.data[0];ce(!!y,16349);const E=y,R=(E==null?void 0:E.error)||((w=E[0])==null?void 0:w.error);if(R){H(lt,`RPC '${e}' stream ${i} received error:`,R);const O=R.status;let M=function(T){const C=Fe[T];if(C!==void 0)return P1(C)}(O),I=R.message;M===void 0&&(M=L.INTERNAL,I="Unknown error status: "+O+" with message "+R.message),S=!0,k.a_(new z(M,I)),m.close()}else H(lt,`RPC '${e}' stream ${i} received:`,y),k.u_(y)}}),x(l,HE.STAT_EVENT,b=>{b.stat===wd.PROXY?H(lt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===wd.NOPROXY&&H(lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function fh(){return typeof document<"u"?document:null}/**
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
 */function eu(t){return new rx(t,!0)}/**
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
 */class B1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const ry="PersistentStream";class $1{constructor(e,n,r,i,s,o,l,c){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new B1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new z(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(ry,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(H(ry,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eN extends $1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=ox(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?kn(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Nd(this.serializer),n.addTarget=function(s,o){let l;const c=o.target;if(l=Ad(c)?{documents:cx(s,c)}:{query:ux(s,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=x1(s,o.resumeToken);const u=kd(s,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=mc(s,o.snapshotVersion.toTimestamp());const u=kd(s,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=dx(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Nd(this.serializer),n.removeTarget=e,this.q_(n)}}class tN extends $1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=lx(e.writeResults,e.commitTime),r=kn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Nd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ax(this.serializer,r))};this.q_(n)}}/**
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
 */class nN{}class rN extends nN{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Rd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(L.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Rd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class iN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Yn(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const wi="RemoteStore";class sN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ri(this)&&(H(wi,"Restarting streams for network reachability change."),await async function(c){const u=X(c);u.Ea.add(4),await Ia(u),u.Ra.set("Unknown"),u.Ea.delete(4),await tu(u)}(this))})}),this.Ra=new iN(r,i)}}async function tu(t){if(Ri(t))for(const e of t.da)await e(!0)}async function Ia(t){for(const e of t.da)await e(!1)}function z1(t,e){const n=X(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),hp(n)?up(n):js(n).O_()&&cp(n,e))}function lp(t,e){const n=X(t),r=js(n);n.Ia.delete(e),r.O_()&&H1(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ri(n)&&n.Ra.set("Unknown"))}function cp(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}js(t).Y_(e)}function H1(t,e){t.Va.Ue(e),js(t).Z_(e)}function up(t){t.Va=new ZR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),js(t).start(),t.Ra.ua()}function hp(t){return Ri(t)&&!js(t).x_()&&t.Ia.size>0}function Ri(t){return X(t).Ea.size===0}function q1(t){t.Va=void 0}async function oN(t){t.Ra.set("Online")}async function aN(t){t.Ia.forEach((e,n)=>{cp(t,e)})}async function lN(t,e){q1(t),hp(t)?(t.Ra.ha(e),up(t)):t.Ra.set("Unknown")}async function cN(t,e,n){if(t.Ra.set("Online"),e instanceof R1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){H(wi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _c(t,r)}else if(e instanceof Rl?t.Va.Ze(e):e instanceof k1?t.Va.st(e):t.Va.tt(e),!n.isEqual(Y.min()))try{const r=await U1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const p=s.Ia.get(u);p&&s.Ia.set(u,p.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const p=s.Ia.get(c);if(!p)return;s.Ia.set(c,p.withResumeToken(it.EMPTY_BYTE_STRING,p.snapshotVersion)),H1(s,c);const m=new vr(p.target,c,u,p.sequenceNumber);cp(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(wi,"Failed to raise snapshot:",r),await _c(t,r)}}async function _c(t,e,n){if(!Ls(e))throw e;t.Ea.add(1),await Ia(t),t.Ra.set("Offline"),n||(n=()=>U1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(wi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await tu(t)})}function W1(t,e){return e().catch(n=>_c(t,n,e))}async function nu(t){const e=X(t),n=Ur(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Gf;for(;uN(e);)try{const i=await qx(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,hN(e,i)}catch(i){await _c(e,i)}G1(e)&&K1(e)}function uN(t){return Ri(t)&&t.Ta.length<10}function hN(t,e){t.Ta.push(e);const n=Ur(t);n.O_()&&n.X_&&n.ea(e.mutations)}function G1(t){return Ri(t)&&!Ur(t).x_()&&t.Ta.length>0}function K1(t){Ur(t).start()}async function dN(t){Ur(t).ra()}async function fN(t){const e=Ur(t);for(const n of t.Ta)e.ea(n.mutations)}async function pN(t,e,n){const r=t.Ta.shift(),i=tp.from(r,e,n);await W1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await nu(t)}async function mN(t,e){e&&Ur(t).X_&&await async function(r,i){if(function(o){return YR(o)&&o!==L.ABORTED}(i.code)){const s=r.Ta.shift();Ur(r).B_(),await W1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await nu(r)}}(t,e),G1(t)&&K1(t)}async function iy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),H(wi,"RemoteStore received new credentials");const r=Ri(n);n.Ea.add(3),await Ia(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await tu(n)}async function gN(t,e){const n=X(t);e?(n.Ea.delete(2),await tu(n)):e||(n.Ea.add(2),await Ia(n),n.Ra.set("Unknown"))}function js(t){return t.ma||(t.ma=function(n,r,i){const s=X(n);return s.sa(),new eN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:oN.bind(null,t),t_:aN.bind(null,t),r_:lN.bind(null,t),H_:cN.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),hp(t)?up(t):t.Ra.set("Unknown")):(await t.ma.stop(),q1(t))})),t.ma}function Ur(t){return t.fa||(t.fa=function(n,r,i){const s=X(n);return s.sa(),new tN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:dN.bind(null,t),r_:mN.bind(null,t),ta:fN.bind(null,t),na:pN.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await nu(t)):(await t.fa.stop(),t.Ta.length>0&&(H(wi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class dp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new dp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fp(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),Ls(t))return new z(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class cs{static emptySet(e){return new cs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=yo(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class sy{constructor(){this.ga=new ke(W.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Q(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Cs{constructor(e,n,r,i,s,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Cs(e,n,cs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class _N{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class yN{constructor(){this.queries=oy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=oy(),s.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new z(L.ABORTED,"Firestore shutting down"))}}function oy(){return new ki(t=>m1(t),Qc)}async function Q1(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new _N,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=fp(o,`Initialization of query '${ji(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&pp(n)}async function Y1(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function vN(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&pp(n)}function wN(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function pp(t){t.Ca.forEach(e=>{e.next()})}var Od,ay;(ay=Od||(Od={})).Ma="default",ay.Cache="cache";class X1{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Od.Cache}}/**
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
 */class J1{constructor(e){this.key=e}}class Z1{constructor(e){this.key=e}}class EN{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=se(),this.mutatedKeys=se(),this.eu=g1(e),this.tu=new cs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new sy,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,m)=>{const g=i.get(p),S=Yc(this.query,m)?m:null,k=!!g&&this.mutatedKeys.has(g.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let b=!1;g&&S?g.data.isEqual(S.data)?k!==x&&(r.track({type:3,doc:S}),b=!0):this.su(g,S)||(r.track({type:2,doc:S}),b=!0,(c&&this.eu(S,c)>0||u&&this.eu(S,u)<0)&&(l=!0)):!g&&S?(r.track({type:0,doc:S}),b=!0):g&&!S&&(r.track({type:1,doc:g}),b=!0,(c||u)&&(l=!0)),b&&(S?(o=o.add(S),s=x?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((p,m)=>function(S,k){const x=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Rt:b})}};return x(S)-x(k)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],c=this.Xa.size===0&&this.current&&!i?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Cs(this.query,e.tu,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new sy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=se(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new Z1(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new J1(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=se();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Cs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const mp="SyncEngine";class IN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class TN{constructor(e){this.key=e,this.hu=!1}}class SN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ki(l=>m1(l),Qc),this.Iu=new Map,this.Eu=new Set,this.du=new ke(W.comparator),this.Au=new Map,this.Ru=new ip,this.Vu={},this.mu=new Map,this.fu=As.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function AN(t,e,n=!0){const r=s0(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await e0(r,e,n,!0),i}async function CN(t,e){const n=s0(t);await e0(n,e,!0,!1)}async function e0(t,e,n,r){const i=await Wx(t.localStore,Pn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await PN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&z1(t.remoteStore,i),l}async function PN(t,e,n,r,i){t.pu=(m,g,S)=>async function(x,b,w,y){let E=b.view.ru(w);E.Cs&&(E=await Z_(x.localStore,b.query,!1).then(({documents:I})=>b.view.ru(I,E)));const R=y&&y.targetChanges.get(b.targetId),O=y&&y.targetMismatches.get(b.targetId)!=null,M=b.view.applyChanges(E,x.isPrimaryClient,R,O);return cy(x,b.targetId,M.au),M.snapshot}(t,m,g,S);const s=await Z_(t.localStore,e,!0),o=new EN(e,s.Qs),l=o.ru(s.documents),c=Ea.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);cy(t,n,u.au);const p=new IN(e,n,o);return t.Tu.set(e,p),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function kN(t,e,n){const r=X(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Qc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Dd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&lp(r.remoteStore,i.targetId),Vd(r,i.targetId)}).catch(Vs)):(Vd(r,i.targetId),await Dd(r.localStore,i.targetId,!0))}async function RN(t,e){const n=X(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),lp(n.remoteStore,r.targetId))}async function xN(t,e,n){const r=MN(t);try{const i=await function(o,l){const c=X(o),u=he.now(),p=l.reduce((S,k)=>S.add(k.key),se());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",S=>{let k=Xn(),x=se();return c.Ns.getEntries(S,p).next(b=>{k=b,k.forEach((w,y)=>{y.isValidDocument()||(x=x.add(w))})}).next(()=>c.localDocuments.getOverlayedDocuments(S,k)).next(b=>{m=b;const w=[];for(const y of l){const E=qR(y,m.get(y.key).overlayedDocument);E!=null&&w.push(new Gr(y.key,E,a1(E.value.mapValue),Xt.exists(!0)))}return c.mutationQueue.addMutationBatch(S,u,w,l)}).next(b=>{g=b;const w=b.applyToLocalDocumentSet(m,x);return c.documentOverlayCache.saveOverlays(S,b.batchId,w)})}).then(()=>({batchId:g.batchId,changes:y1(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new ke(ie)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u}(r,i.batchId,n),await Ta(r,i.changes),await nu(r.remoteStore)}catch(i){const s=fp(i,"Failed to persist write");n.reject(s)}}async function t0(t,e){const n=X(t);try{const r=await zx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ce(o.hu,14607):i.removedDocuments.size>0&&(ce(o.hu,42227),o.hu=!1))}),await Ta(n,r,e)}catch(r){await Vs(r)}}function ly(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=X(o);c.onlineState=l;let u=!1;c.queries.forEach((p,m)=>{for(const g of m.Sa)g.va(l)&&(u=!0)}),u&&pp(c)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NN(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new ke(W.comparator);o=o.insert(s,ft.newNoDocument(s,Y.min()));const l=se().add(s),c=new Zc(Y.min(),new Map,new ke(ie),o,l);await t0(r,c),r.du=r.du.remove(s),r.Au.delete(e),gp(r)}else await Dd(r.localStore,e,!1).then(()=>Vd(r,e,n)).catch(Vs)}async function DN(t,e){const n=X(t),r=e.batch.batchId;try{const i=await $x(n.localStore,e);r0(n,r,null),n0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ta(n,i)}catch(i){await Vs(i)}}async function bN(t,e,n){const r=X(t);try{const i=await function(o,l){const c=X(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let p;return c.mutationQueue.lookupMutationBatch(u,l).next(m=>(ce(m!==null,37113),p=m.keys(),c.mutationQueue.removeMutationBatch(u,m))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,p,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,p)).next(()=>c.localDocuments.getDocuments(u,p))})}(r.localStore,e);r0(r,e,n),n0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ta(r,i)}catch(i){await Vs(i)}}function n0(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function r0(t,e,n){const r=X(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Vd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||i0(t,r)})}function i0(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(lp(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),gp(t))}function cy(t,e,n){for(const r of n)r instanceof J1?(t.Ru.addReference(r.key,e),ON(t,r)):r instanceof Z1?(H(mp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||i0(t,r.key)):Q(19791,{wu:r})}function ON(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(H(mp,"New document in limbo: "+n),t.Eu.add(r),gp(t))}function gp(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new W(ge.fromString(e)),r=t.fu.next();t.Au.set(r,new TN(n)),t.du=t.du.insert(n,r),z1(t.remoteStore,new vr(Pn(Jf(n.path)),r,"TargetPurposeLimboResolution",Wc.ce))}}async function Ta(t,e,n){const r=X(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,n).then(u=>{var p;if((u||n)&&r.isPrimaryClient){const m=u?!u.fromCache:(p=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(u){i.push(u);const m=op.As(c.targetId,u);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(c,u){const p=X(c);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>j.forEach(u,g=>j.forEach(g.Es,S=>p.persistence.referenceDelegate.addReference(m,g.targetId,S)).next(()=>j.forEach(g.ds,S=>p.persistence.referenceDelegate.removeReference(m,g.targetId,S)))))}catch(m){if(!Ls(m))throw m;H(ap,"Failed to update sequence numbers: "+m)}for(const m of u){const g=m.targetId;if(!m.fromCache){const S=p.Ms.get(g),k=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(k);p.Ms=p.Ms.insert(g,x)}}}(r.localStore,s))}async function VN(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){H(mp,"User change. New user:",e.toKey());const r=await F1(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(c=>{c.reject(new z(L.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ta(n,r.Ls)}}function LN(t,e){const n=X(t),r=n.Au.get(e);if(r&&r.hu)return se().add(r.key);{let i=se();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function s0(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=t0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NN.bind(null,e),e.Pu.H_=vN.bind(null,e.eventManager),e.Pu.yu=wN.bind(null,e.eventManager),e}function MN(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bN.bind(null,e),e}class yc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=eu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return Bx(this.persistence,new jx,e.initialUser,this.serializer)}Cu(e){return new j1(sp.mi,this.serializer)}Du(e){return new Kx}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yc.provider={build:()=>new yc};class jN extends yc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ce(this.persistence.referenceDelegate instanceof gc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Tx(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new j1(r=>gc.mi(r,n),this.serializer)}}class Ld{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ly(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VN.bind(null,this.syncEngine),await gN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yN}()}createDatastore(e){const n=eu(e.databaseInfo.databaseId),r=function(s){return new Zx(s)}(e.databaseInfo);return function(s,o,l,c){return new rN(s,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new sN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ly(this.syncEngine,n,0),function(){return ny.v()?new ny:new Qx}())}createSyncEngine(e,n){return function(i,s,o,l,c,u,p){const m=new SN(i,s,o,l,c,u);return p&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);H(wi,"RemoteStore shutting down."),s.Ea.add(5),await Ia(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Ld.provider={build:()=>new Ld};/**
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
 */class o0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Br="FirestoreClient";class FN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ht.UNAUTHENTICATED,this.clientId=Wf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(Br,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Br,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=fp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ph(t,e){t.asyncQueue.verifyOperationInProgress(),H(Br,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await F1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function uy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await UN(t);H(Br,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>iy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>iy(e.remoteStore,i)),t._onlineComponents=e}async function UN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Br,"Using user provided OfflineComponentProvider");try{await ph(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Es("Error using user provided cache. Falling back to memory cache: "+n),await ph(t,new yc)}}else H(Br,"Using default OfflineComponentProvider"),await ph(t,new jN(void 0));return t._offlineComponents}async function a0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Br,"Using user provided OnlineComponentProvider"),await uy(t,t._uninitializedComponentsProvider._online)):(H(Br,"Using default OnlineComponentProvider"),await uy(t,new Ld))),t._onlineComponents}function BN(t){return a0(t).then(e=>e.syncEngine)}async function l0(t){const e=await a0(t),n=e.eventManager;return n.onListen=AN.bind(null,e.syncEngine),n.onUnlisten=kN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=CN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=RN.bind(null,e.syncEngine),n}function $N(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const p=new o0({next:g=>{p.Nu(),o.enqueueAndForget(()=>Y1(s,m));const S=g.docs.has(l);!S&&g.fromCache?u.reject(new z(L.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&g.fromCache&&c&&c.source==="server"?u.reject(new z(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),m=new X1(Jf(l.path),p,{includeMetadataChanges:!0,qa:!0});return Q1(s,m)}(await l0(t),t.asyncQueue,e,n,r)),r.promise}function zN(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const p=new o0({next:g=>{p.Nu(),o.enqueueAndForget(()=>Y1(s,m)),g.fromCache&&c.source==="server"?u.reject(new z(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),m=new X1(l,p,{includeMetadataChanges:!0,qa:!0});return Q1(s,m)}(await l0(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function c0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const hy=new Map;/**
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
 */const u0="firestore.googleapis.com",dy=!0;class fy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=u0,this.ssl=dy}else this.host=e.host,this.ssl=e.ssl??dy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=M1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ex)throw new z(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=c0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ru{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Yk;switch(r.type){case"firstParty":return new eR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hy.get(n);r&&(H("ComponentProvider","Removing Datastore"),hy.delete(n),r.terminate())}(this),Promise.resolve()}}function HN(t,e,n,r={}){var u;t=fn(t,ru);const i=xs(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Xw(`https://${l}`),Jw("Firestore",!0)),s.host!==u0&&s.host!==l&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...s,host:l,ssl:i,emulatorOptions:r};if(!Vr(c,o)&&(t._setSettings(c),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=ht.MOCK_USER;else{p=oA(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new z(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new ht(g)}t._authCredentials=new Xk(new KE(p,m))}}/**
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
 */class xi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xi(this.firestore,e,this._query)}}class Le{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(va(n,Le._jsonSchema))return new Le(e,r||null,new W(ge.fromString(n.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:$e("string",Le._jsonSchemaVersion),referencePath:$e("string")};class Dr extends xi{constructor(e,n,r){super(e,n,Jf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new W(e))}withConverter(e){return new Dr(this.firestore,e,this._path)}}function bn(t,e,...n){if(t=Me(t),QE("collection","path",e),t instanceof ru){const r=ge.fromString(e,...n);return C_(r),new Dr(t,null,r)}{if(!(t instanceof Le||t instanceof Dr))throw new z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return C_(r),new Dr(t.firestore,null,r)}}function Ne(t,e,...n){if(t=Me(t),arguments.length===1&&(e=Wf.newId()),QE("doc","path",e),t instanceof ru){const r=ge.fromString(e,...n);return A_(r),new Le(t,null,new W(r))}{if(!(t instanceof Le||t instanceof Dr))throw new z(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return A_(r),new Le(t.firestore,t instanceof Dr?t.converter:null,new W(r))}}/**
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
 */const py="AsyncQueue";class my{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new B1(this,"async_queue_retry"),this._c=()=>{const r=fh();r&&H(py,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=fh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=fh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Bn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ls(e))throw e;H(py,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Yn("INTERNAL UNHANDLED ERROR: ",gy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=dp.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Q(47125,{Pc:gy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function gy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ni extends ru{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new my,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new my(e),this._firestoreClient=void 0,await e}}}function qN(t,e){const n=typeof t=="object"?t:Lf(),r=typeof t=="string"?t:uc,i=Ci(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=iA("firestore");s&&HN(i,...s)}return i}function _p(t){if(t._terminated)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||WN(t),t._firestoreClient}function WN(t){var r,i,s;const e=t._freezeSettings(),n=function(l,c,u,p){return new _R(l,c,u,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,c0(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new FN(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Gt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gt(it.fromBase64String(e))}catch(n){throw new z(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gt(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Gt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(va(e,Gt._jsonSchema))return Gt.fromBase64String(e.bytes)}}Gt._jsonSchemaVersion="firestore/bytes/1.0",Gt._jsonSchema={type:$e("string",Gt._jsonSchemaVersion),bytes:$e("string")};/**
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
 */class iu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yp{constructor(e){this._methodName=e}}/**
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
 */class Rn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Rn._jsonSchemaVersion}}static fromJSON(e){if(va(e,Rn._jsonSchema))return new Rn(e.latitude,e.longitude)}}Rn._jsonSchemaVersion="firestore/geoPoint/1.0",Rn._jsonSchema={type:$e("string",Rn._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
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
 */class xn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:xn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(va(e,xn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new xn(e.vectorValues);throw new z(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xn._jsonSchemaVersion="firestore/vectorValue/1.0",xn._jsonSchema={type:$e("string",xn._jsonSchemaVersion),vectorValues:$e("object")};/**
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
 */const GN=/^__.*__$/;class KN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new wa(e,this.data,n,this.fieldTransforms)}}class h0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function d0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{Ac:t})}}class vp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new vp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return vc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(d0(this.Ac)&&GN.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class QN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||eu(e)}Cc(e,n,r,i=!1){return new vp({Ac:e,methodName:n,Dc:r,path:tt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function su(t){const e=t._freezeSettings(),n=eu(t._databaseId);return new QN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function f0(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);wp("Data must be an object, but it was:",o,r);const l=p0(r,o);let c,u;if(s.merge)c=new Mt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const g=Md(e,m,n);if(!o.contains(g))throw new z(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);g0(p,g)||p.push(g)}c=new Mt(p),u=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,u=o.fieldTransforms;return new KN(new Pt(l),c,u)}class ou extends yp{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ou}}function YN(t,e,n,r){const i=t.Cc(1,e,n);wp("Data must be an object, but it was:",i,r);const s=[],o=Pt.empty();Wr(r,(c,u)=>{const p=Ep(e,c,n);u=Me(u);const m=i.yc(p);if(u instanceof ou)s.push(p);else{const g=Sa(u,m);g!=null&&(s.push(p),o.set(p,g))}});const l=new Mt(s);return new h0(o,l,i.fieldTransforms)}function XN(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[Md(e,r,n)],c=[i];if(s.length%2!=0)throw new z(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Md(e,s[g])),c.push(s[g+1]);const u=[],p=Pt.empty();for(let g=l.length-1;g>=0;--g)if(!g0(u,l[g])){const S=l[g];let k=c[g];k=Me(k);const x=o.yc(S);if(k instanceof ou)u.push(S);else{const b=Sa(k,x);b!=null&&(u.push(S),p.set(S,b))}}const m=new Mt(u);return new h0(p,m,o.fieldTransforms)}function JN(t,e,n,r=!1){return Sa(n,t.Cc(r?4:3,e))}function Sa(t,e){if(m0(t=Me(t)))return wp("Unsupported field value:",e,t),p0(t,e);if(t instanceof yp)return function(r,i){if(!d0(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let c=Sa(l,i.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return FR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=he.fromDate(r);return{timestampValue:mc(i.serializer,s)}}if(r instanceof he){const s=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mc(i.serializer,s)}}if(r instanceof Rn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gt)return{bytesValue:x1(i.serializer,r._byteString)};if(r instanceof Le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:rp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof xn)return function(o,l){return{mapValue:{fields:{[i1]:{stringValue:o1},[hc]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return Zf(l.serializer,u)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${qc(r)}`)}(t,e)}function p0(t,e){const n={};return JE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wr(t,(r,i)=>{const s=Sa(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function m0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof he||t instanceof Rn||t instanceof Gt||t instanceof Le||t instanceof yp||t instanceof xn)}function wp(t,e,n){if(!m0(n)||!YE(n)){const r=qc(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Md(t,e,n){if((e=Me(e))instanceof iu)return e._internalPath;if(typeof e=="string")return Ep(t,e);throw vc("Field path arguments must be of type string or ",t,!1,void 0,n)}const ZN=new RegExp("[~\\*/\\[\\]]");function Ep(t,e,n){if(e.search(ZN)>=0)throw vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new iu(...e.split("."))._internalPath}catch{throw vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new z(L.INVALID_ARGUMENT,l+t+c)}function g0(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class _0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new e2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ip("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class e2 extends _0{data(){return super.data()}}function Ip(t,e){return typeof e=="string"?Ep(t,e):e instanceof iu?e._internalPath:e._delegate._internalPath}/**
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
 */function t2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tp{}class y0 extends Tp{}function n2(t,e,...n){let r=[];e instanceof Tp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof Ap).length,l=s.filter(c=>c instanceof Sp).length;if(o>1||o>0&&l>0)throw new z(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Sp extends y0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Sp(e,n,r)}_apply(e){const n=this._parse(e);return v0(e._query,n),new xi(e.firestore,e.converter,Cd(e._query,n))}_parse(e){const n=su(e.firestore);return function(s,o,l,c,u,p,m){let g;if(u.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new z(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){yy(m,p);const k=[];for(const x of m)k.push(_y(c,s,x));g={arrayValue:{values:k}}}else g=_y(c,s,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||yy(m,p),g=JN(l,o,m,p==="in"||p==="not-in");return Be.create(u,p,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Ap extends Tp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ap(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const c of l)v0(o,c),o=Cd(o,c)}(e._query,n),new xi(e.firestore,e.converter,Cd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cp extends y0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Cp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new oa(s,o)}(e._query,this._field,this._direction);return new xi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ms(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function r2(t,e="asc"){const n=e,r=Ip("orderBy",t);return Cp._create(r,n)}function _y(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new z(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!p1(e)&&n.indexOf("/")!==-1)throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!W.isDocumentKey(r))throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return O_(t,new W(r))}if(n instanceof Le)return O_(t,n._key);throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qc(n)}.`)}function yy(t,e){if(!Array.isArray(t)||t.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function v0(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class i2{convertValue(e,n="none"){switch(Fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Wr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[hc].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Oe(o.doubleValue));return new xn(n)}convertGeoPoint(e){return new Rn(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Kc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ra(e));default:return null}}convertTimestamp(e){const n=Mr(e);return new he(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);ce(L1(r),9688,{name:e});const i=new ia(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||Yn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function w0(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class wo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class di extends _0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ip("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=di._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}di._jsonSchemaVersion="firestore/documentSnapshot/1.0",di._jsonSchema={type:$e("string",di._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class xl extends di{data(e={}){return super.data(e)}}class us{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new wo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xl(this._firestore,this._userDataWriter,r.key,r,new wo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new xl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new wo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new xl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new wo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,p=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:s2(l.type),doc:c,oldIndex:u,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=us._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Wf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function s2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
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
 */function ca(t){t=fn(t,Le);const e=fn(t.firestore,Ni);return $N(_p(e),t._key).then(n=>o2(e,t,n))}us._jsonSchemaVersion="firestore/querySnapshot/1.0",us._jsonSchema={type:$e("string",us._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};class E0 extends i2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function Aa(t){t=fn(t,xi);const e=fn(t.firestore,Ni),n=_p(e),r=new E0(e);return t2(t._query),zN(n,t._query).then(i=>new us(e,r,t,i))}function I0(t,e,n){t=fn(t,Le);const r=fn(t.firestore,Ni),i=w0(t.converter,e);return au(r,[f0(su(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Xt.none())])}function $n(t,e,n,...r){t=fn(t,Le);const i=fn(t.firestore,Ni),s=su(i);let o;return o=typeof(e=Me(e))=="string"||e instanceof iu?XN(s,"updateDoc",t._key,e,n,r):YN(s,"updateDoc",t._key,e),au(i,[o.toMutation(t._key,Xt.exists(!0))])}function Ca(t){return au(fn(t.firestore,Ni),[new ep(t._key,Xt.none())])}function Pa(t,e){const n=fn(t.firestore,Ni),r=Ne(t),i=w0(t.converter,e);return au(n,[f0(su(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Xt.exists(!1))]).then(()=>r)}function au(t,e){return function(r,i){const s=new Bn;return r.asyncQueue.enqueueAndForget(async()=>xN(await BN(r),i,s)),s.promise}(_p(t),e)}function o2(t,e,n){const r=n.docs.get(e._key),i=new E0(t);return new di(t,i,e._key,r,new wo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Os=i})(Ns),Nn(new hn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ni(new Jk(r.getProvider("auth-internal")),new tR(o,r.getProvider("app-check-internal")),function(u,p){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new z(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ia(u.options.projectId,p)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Yt(E_,I_,e),Yt(E_,I_,"esm2020")})();const T0="@firebase/installations",Pp="0.6.19";/**
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
 */const S0=1e4,A0=`w:${Pp}`,C0="FIS_v2",a2="https://firebaseinstallations.googleapis.com/v1",l2=60*60*1e3,c2="installations",u2="Installations";/**
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
 */const h2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ei=new Ai(c2,u2,h2);function P0(t){return t instanceof mn&&t.code.includes("request-failed")}/**
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
 */function k0({projectId:t}){return`${a2}/projects/${t}/installations`}function R0(t){return{token:t.token,requestStatus:2,expiresIn:f2(t.expiresIn),creationTime:Date.now()}}async function x0(t,e){const r=(await e.json()).error;return Ei.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function N0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function d2(t,{refreshToken:e}){const n=N0(t);return n.append("Authorization",p2(e)),n}async function D0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function f2(t){return Number(t.replace("s","000"))}function p2(t){return`${C0} ${t}`}/**
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
 */async function m2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=k0(t),i=N0(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:C0,appId:t.appId,sdkVersion:A0},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await D0(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:R0(u.authToken)}}else throw await x0("Create Installation",c)}/**
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
 */function b0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function g2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const _2=/^[cdef][\w-]{21}$/,jd="";function y2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=v2(t);return _2.test(n)?n:jd}catch{return jd}}function v2(t){return g2(t).substr(0,22)}/**
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
 */function lu(t){return`${t.appName}!${t.appId}`}/**
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
 */const O0=new Map;function V0(t,e){const n=lu(t);L0(n,e),w2(n,e)}function L0(t,e){const n=O0.get(t);if(n)for(const r of n)r(e)}function w2(t,e){const n=E2();n&&n.postMessage({key:t,fid:e}),I2()}let ci=null;function E2(){return!ci&&"BroadcastChannel"in self&&(ci=new BroadcastChannel("[Firebase] FID Change"),ci.onmessage=t=>{L0(t.data.key,t.data.fid)}),ci}function I2(){O0.size===0&&ci&&(ci.close(),ci=null)}/**
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
 */const T2="firebase-installations-database",S2=1,Ii="firebase-installations-store";let mh=null;function kp(){return mh||(mh=iE(T2,S2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ii)}}})),mh}async function wc(t,e){const n=lu(t),i=(await kp()).transaction(Ii,"readwrite"),s=i.objectStore(Ii),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&V0(t,e.fid),e}async function M0(t){const e=lu(t),r=(await kp()).transaction(Ii,"readwrite");await r.objectStore(Ii).delete(e),await r.done}async function cu(t,e){const n=lu(t),i=(await kp()).transaction(Ii,"readwrite"),s=i.objectStore(Ii),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&V0(t,l.fid),l}/**
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
 */async function Rp(t){let e;const n=await cu(t.appConfig,r=>{const i=A2(r),s=C2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===jd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function A2(t){const e=t||{fid:y2(),registrationStatus:0};return j0(e)}function C2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ei.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=P2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:k2(t)}:{installationEntry:e}}async function P2(t,e){try{const n=await m2(t,e);return wc(t.appConfig,n)}catch(n){throw P0(n)&&n.customData.serverCode===409?await M0(t.appConfig):await wc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function k2(t){let e=await vy(t.appConfig);for(;e.registrationStatus===1;)await b0(100),e=await vy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Rp(t);return r||n}return e}function vy(t){return cu(t,e=>{if(!e)throw Ei.create("installation-not-found");return j0(e)})}function j0(t){return R2(t)?{fid:t.fid,registrationStatus:0}:t}function R2(t){return t.registrationStatus===1&&t.registrationTime+S0<Date.now()}/**
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
 */async function x2({appConfig:t,heartbeatServiceProvider:e},n){const r=N2(t,n),i=d2(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:A0,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await D0(()=>fetch(r,l));if(c.ok){const u=await c.json();return R0(u)}else throw await x0("Generate Auth Token",c)}function N2(t,{fid:e}){return`${k0(t)}/${e}/authTokens:generate`}/**
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
 */async function xp(t,e=!1){let n;const r=await cu(t.appConfig,s=>{if(!F0(s))throw Ei.create("not-registered");const o=s.authToken;if(!e&&O2(o))return s;if(o.requestStatus===1)return n=D2(t,e),s;{if(!navigator.onLine)throw Ei.create("app-offline");const l=L2(s);return n=b2(t,l),l}});return n?await n:r.authToken}async function D2(t,e){let n=await wy(t.appConfig);for(;n.authToken.requestStatus===1;)await b0(100),n=await wy(t.appConfig);const r=n.authToken;return r.requestStatus===0?xp(t,e):r}function wy(t){return cu(t,e=>{if(!F0(e))throw Ei.create("not-registered");const n=e.authToken;return M2(n)?{...e,authToken:{requestStatus:0}}:e})}async function b2(t,e){try{const n=await x2(t,e),r={...e,authToken:n};return await wc(t.appConfig,r),n}catch(n){if(P0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await M0(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await wc(t.appConfig,r)}throw n}}function F0(t){return t!==void 0&&t.registrationStatus===2}function O2(t){return t.requestStatus===2&&!V2(t)}function V2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+l2}function L2(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function M2(t){return t.requestStatus===1&&t.requestTime+S0<Date.now()}/**
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
 */async function j2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Rp(e);return r?r.catch(console.error):xp(e).catch(console.error),n.fid}/**
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
 */async function F2(t,e=!1){const n=t;return await U2(n),(await xp(n,e)).token}async function U2(t){const{registrationPromise:e}=await Rp(t);e&&await e}/**
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
 */function B2(t){if(!t||!t.options)throw gh("App Configuration");if(!t.name)throw gh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw gh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function gh(t){return Ei.create("missing-app-config-values",{valueName:t})}/**
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
 */const U0="installations",$2="installations-internal",z2=t=>{const e=t.getProvider("app").getImmediate(),n=B2(e),r=Ci(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},H2=t=>{const e=t.getProvider("app").getImmediate(),n=Ci(e,U0).getImmediate();return{getId:()=>j2(n),getToken:i=>F2(n,i)}};function q2(){Nn(new hn(U0,z2,"PUBLIC")),Nn(new hn($2,H2,"PRIVATE"))}q2();Yt(T0,Pp);Yt(T0,Pp,"esm2020");/**
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
 */const Ec="analytics",W2="firebase_id",G2="origin",K2=60*1e3,Q2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Np="https://www.googletagmanager.com/gtag/js";/**
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
 */const It=new Uc("@firebase/analytics");/**
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
 */const Y2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ft=new Ai("analytics","Analytics",Y2);/**
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
 */function X2(t){if(!t.startsWith(Np)){const e=Ft.create("invalid-gtag-resource",{gtagURL:t});return It.warn(e.message),""}return t}function B0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function J2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Z2(t,e){const n=J2("firebase-js-sdk-policy",{createScriptURL:X2}),r=document.createElement("script"),i=`${Np}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function eD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function tD(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await B0(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(l){It.error(l)}t("config",i,s)}async function nD(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await B0(n);for(const c of o){const u=l.find(m=>m.measurementId===c),p=u&&e[u.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){It.error(s)}}function rD(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,c]=o;await nD(t,e,n,l,c)}else if(s==="config"){const[l,c]=o;await tD(t,e,n,r,l,c)}else if(s==="consent"){const[l,c]=o;t("consent",l,c)}else if(s==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){It.error(l)}}return i}function iD(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=rD(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function sD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Np)&&n.src.includes(t))return n;return null}/**
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
 */const oD=30,aD=1e3;class lD{constructor(e={},n=aD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $0=new lD;function cD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function uD(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:cD(n)},i=Q2.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const c=await s.json();(o=c.error)!=null&&o.message&&(l=c.error.message)}catch{}throw Ft.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function hD(t,e=$0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ft.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ft.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new pD;return setTimeout(async()=>{l.abort()},K2),z0({appId:r,apiKey:i,measurementId:s},o,l,e)}async function z0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=$0){var l;const{appId:s,measurementId:o}=t;try{await dD(r,e)}catch(c){if(o)return It.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw c}try{const c=await uD(t);return i.deleteThrottleMetadata(s),c}catch(c){const u=c;if(!fD(u)){if(i.deleteThrottleMetadata(s),o)return It.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw c}const p=Number((l=u==null?void 0:u.customData)==null?void 0:l.httpStatus)===503?qg(n,i.intervalMillis,oD):qg(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return i.setThrottleMetadata(s,m),It.debug(`Calling attemptFetch again in ${p} millis`),z0(t,m,r,i)}}function dD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ft.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function fD(t){if(!(t instanceof mn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class pD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function mD(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function gD(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
 */async function _D(){if(eE())try{await tE()}catch(t){return It.warn(Ft.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return It.warn(Ft.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function yD(t,e,n,r,i,s,o){const l=hD(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&It.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>It.error(g)),e.push(l);const c=_D().then(g=>{if(g)return r.getId()}),[u,p]=await Promise.all([l,c]);sD(s)||Z2(s,u.measurementId),i("js",new Date);const m=(o==null?void 0:o.config)??{};return m[G2]="firebase",m.update=!0,p!=null&&(m[W2]=p),i("config",u.measurementId,m),u.measurementId}/**
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
 */class vD{constructor(e){this.app=e}_delete(){return delete hs[this.app.options.appId],Promise.resolve()}}let hs={},Ey=[];const Iy={};let _h="dataLayer",wD="gtag",Ty,Dp,Sy=!1;function ED(){const t=[];if(Zw()&&t.push("This is a browser extension environment."),mA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ft.create("invalid-analytics-context",{errorInfo:e});It.warn(n.message)}}function ID(t,e,n){ED();const r=t.options.appId;if(!r)throw Ft.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)It.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ft.create("no-api-key");if(hs[r]!=null)throw Ft.create("already-exists",{id:r});if(!Sy){eD(_h);const{wrappedGtag:s,gtagCore:o}=iD(hs,Ey,Iy,_h,wD);Dp=s,Ty=o,Sy=!0}return hs[r]=yD(t,Ey,Iy,e,Ty,_h,n),new vD(t)}function TD(t=Lf()){t=Me(t);const e=Ci(t,Ec);return e.isInitialized()?e.getImmediate():SD(t)}function SD(t,e={}){const n=Ci(t,Ec);if(n.isInitialized()){const i=n.getImmediate();if(Vr(e,n.getOptions()))return i;throw Ft.create("already-initialized")}return n.initialize({options:e})}function AD(t,e,n){t=Me(t),gD(Dp,hs[t.app.options.appId],e,n).catch(r=>It.error(r))}function CD(t,e,n,r){t=Me(t),mD(Dp,hs[t.app.options.appId],e,n,r).catch(i=>It.error(i))}const Ay="@firebase/analytics",Cy="0.10.19";function PD(){Nn(new hn(Ec,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return ID(r,i,n)},"PUBLIC")),Nn(new hn("analytics-internal",t,"PRIVATE")),Yt(Ay,Cy),Yt(Ay,Cy,"esm2020");function t(e){try{const n=e.getProvider(Ec).getImmediate();return{logEvent:(r,i,s)=>CD(n,r,i,s),setUserProperties:(r,i)=>AD(n,r,i)}}catch(n){throw Ft.create("interop-component-reg-failed",{reason:n})}}}PD();const kD={apiKey:"AIzaSyDIL-8yGpB1sjh1khHFZlbxKyNKXMJZTzg",authDomain:"u1-porfolio.firebaseapp.com",projectId:"u1-porfolio",storageBucket:"u1-porfolio.firebasestorage.app",messagingSenderId:"1070957784970",appId:"1:1070957784970:web:35faea8b55767e3911a273",measurementId:"G-4XQ4YK4RZY"},bp=sE(kD);TD(bp);const Fd=Wk(bp),le=qN(bp),H0=B.createContext();function RD({children:t}){const[e,n]=B.useState(!1),[r,i]=B.useState(!0);return B.useEffect(()=>{const s=OP(Fd,o=>{n(!!o),i(!1)});return()=>s()},[]),d.jsx(H0.Provider,{value:{isAdmin:e,loading:r},children:t})}function Kr(){const t=B.useContext(H0);if(t===void 0)throw new Error("useAdmin must be used within an AdminProvider");return t}const xD="_adminToggle_r3lnh_1",ND="_loginOverlay_r3lnh_26",DD="_loginForm_r3lnh_40",bD="_panel_r3lnh_95",OD="_panelHeader_r3lnh_112",VD="_panelActions_r3lnh_127",LD="_saveBtn_r3lnh_150",MD="_seedBtn_r3lnh_159",jD="_panelContent_r3lnh_168",FD="_formSection_r3lnh_174",UD="_note_r3lnh_216",bt={adminToggle:xD,loginOverlay:ND,loginForm:DD,panel:bD,panelHeader:OD,panelActions:VD,saveBtn:LD,seedBtn:MD,panelContent:jD,formSection:FD,note:UD};function BD(){var R,O,M,I,v,T,C,P,N,A,me,gt;const{isAdmin:t}=Kr(),[e,n]=B.useState(!1),[r,i]=B.useState(!1),[s,o]=B.useState(""),[l,c]=B.useState(""),[u,p]=B.useState(null),[m,g]=B.useState(!1),[S,k]=B.useState({});B.useEffect(()=>{t&&x()},[t]);const x=async()=>{try{const J=Ne(le,"portfolio","main"),de=await ca(J);de.exists()&&(p(de.data()),k(de.data()))}catch(J){console.error("Error loading portfolio data:",J)}},b=async J=>{J.preventDefault();try{await NP(Fd,s,l),i(!1),o(""),c("")}catch(de){alert("Login failed: "+de.message)}},w=async()=>{await VP(Fd),n(!1)},y=async()=>{try{await I0(Ne(le,"portfolio","main"),S),p(S),g(!1),alert("Portfolio updated successfully!"),window.location.reload()}catch(J){alert("Failed to save: "+J.message)}},E=(J,de)=>{k(U=>({...U,[J]:de}))};return!t&&!r?d.jsx("button",{className:bt.adminToggle,onClick:()=>i(!0),title:"Admin Login",children:"🔐"}):r?d.jsx("div",{className:bt.loginOverlay,onClick:()=>i(!1),children:d.jsxs("div",{className:bt.loginForm,onClick:J=>J.stopPropagation(),children:[d.jsx("h3",{children:"Admin Login"}),d.jsxs("form",{onSubmit:b,children:[d.jsx("input",{type:"email",placeholder:"Email",value:s,onChange:J=>o(J.target.value),required:!0}),d.jsx("input",{type:"password",placeholder:"Password",value:l,onChange:J=>c(J.target.value),required:!0}),d.jsx("button",{type:"submit",children:"Login"}),d.jsx("button",{type:"button",onClick:()=>i(!1),children:"Cancel"})]})]})}):d.jsxs(d.Fragment,{children:[d.jsx("button",{className:bt.adminToggle,onClick:()=>n(!e),title:"Admin Panel",children:"⚙️"}),e&&d.jsxs("div",{className:bt.panel,children:[d.jsxs("div",{className:bt.panelHeader,children:[d.jsx("h3",{children:"Admin Panel"}),d.jsxs("div",{className:bt.panelActions,children:[m?d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:y,className:bt.saveBtn,children:"Save Changes"}),d.jsx("button",{onClick:()=>{k(u),g(!1)},children:"Cancel"})]}):d.jsx("button",{onClick:()=>g(!0),children:"Edit Portfolio"}),d.jsx("button",{onClick:w,children:"Logout"}),d.jsx("button",{onClick:()=>n(!1),children:"✕"})]})]}),m&&d.jsxs("div",{className:bt.panelContent,children:[d.jsxs("div",{className:bt.formSection,children:[d.jsx("h4",{children:"Hero Section"}),d.jsxs("label",{children:["Name:",d.jsx("input",{type:"text",value:((R=S.hero)==null?void 0:R.name)||"",onChange:J=>E("hero",{...S.hero,name:J.target.value})})]}),d.jsxs("label",{children:["Title:",d.jsx("input",{type:"text",value:((O=S.hero)==null?void 0:O.title)||"",onChange:J=>E("hero",{...S.hero,title:J.target.value})})]}),d.jsxs("label",{children:["Description:",d.jsx("textarea",{value:((M=S.hero)==null?void 0:M.description)||"",onChange:J=>E("hero",{...S.hero,description:J.target.value}),rows:4})]})]}),d.jsxs("div",{className:bt.formSection,children:[d.jsx("h4",{children:"About Section"}),d.jsxs("label",{children:["Paragraph 1:",d.jsx("textarea",{value:((v=(I=S.about)==null?void 0:I.paragraphs)==null?void 0:v[0])||"",onChange:J=>{var U;const de=[...((U=S.about)==null?void 0:U.paragraphs)||["","",""]];de[0]=J.target.value,E("about",{...S.about,paragraphs:de})},rows:3})]}),d.jsxs("label",{children:["Paragraph 2:",d.jsx("textarea",{value:((C=(T=S.about)==null?void 0:T.paragraphs)==null?void 0:C[1])||"",onChange:J=>{var U;const de=[...((U=S.about)==null?void 0:U.paragraphs)||["","",""]];de[1]=J.target.value,E("about",{...S.about,paragraphs:de})},rows:3})]}),d.jsxs("label",{children:["Paragraph 3:",d.jsx("textarea",{value:((N=(P=S.about)==null?void 0:P.paragraphs)==null?void 0:N[2])||"",onChange:J=>{var U;const de=[...((U=S.about)==null?void 0:U.paragraphs)||["","",""]];de[2]=J.target.value,E("about",{...S.about,paragraphs:de})},rows:3})]}),d.jsxs("label",{children:["Location:",d.jsx("input",{type:"text",value:((A=S.about)==null?void 0:A.location)||"",onChange:J=>E("about",{...S.about,location:J.target.value}),placeholder:"Manila, Philippines"})]})]}),d.jsxs("div",{className:bt.formSection,children:[d.jsx("h4",{children:"Social Links"}),d.jsxs("label",{children:["GitHub:",d.jsx("input",{type:"url",value:((me=S.social)==null?void 0:me.github)||"",onChange:J=>E("social",{...S.social,github:J.target.value})})]}),d.jsxs("label",{children:["LinkedIn:",d.jsx("input",{type:"url",value:((gt=S.social)==null?void 0:gt.linkedin)||"",onChange:J=>E("social",{...S.social,linkedin:J.target.value})})]})]}),d.jsxs("div",{className:bt.note,children:[d.jsx("strong",{children:"Note:"})," Projects, Skills, Experience, and Achievements sections can be edited individually through their respective admin controls when logged in."]})]})]})]})}const q0=B.createContext(),W0=()=>B.useContext(q0),$D=({children:t})=>{const[e,n]=B.useState(()=>localStorage.getItem("theme")||"dark");B.useEffect(()=>{document.body.setAttribute("data-theme",e),localStorage.setItem("theme",e)},[e]);const r=()=>{n(i=>i==="light"?"dark":"light")};return d.jsx(q0.Provider,{value:{theme:e,toggleTheme:r},children:t})};function G0(t="(max-width: 860px)"){const[e,n]=B.useState(()=>typeof window<"u"&&window.matchMedia(t).matches);return B.useEffect(()=>{const r=window.matchMedia(t),i=()=>n(r.matches);return i(),r.addEventListener?r.addEventListener("change",i):r.addListener(i),()=>{r.removeEventListener?r.removeEventListener("change",i):r.removeListener(i)}},[t]),e}const zD="_skipLink_1md71_1",HD="_canvas_1md71_18",qD="_blob1_1md71_27",WD="_ypFloat_1md71_1",GD="_blob2_1md71_46",KD="_cursorDot_1md71_66",QD="_cursorRing_1md71_81",ds={skipLink:zD,canvas:HD,blob1:qD,ypFloat:WD,blob2:GD,cursorDot:KD,cursorRing:QD},Py=" .:-=+*#%@";function YD(){const t=B.useRef(null),{theme:e}=W0(),n=B.useRef(e);return n.current=e,B.useEffect(()=>{const r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=t.current;if(!i)return;const s=i.getContext("2d"),o=18;let l=0,c=0,u=new Float32Array(0);const p={x:-9999,y:-9999},m=()=>{i.width=window.innerWidth,i.height=window.innerHeight,l=Math.ceil(i.width/o)+1,c=Math.ceil(i.height/o)+1,u=new Float32Array(l*c);for(let w=0;w<u.length;w++)u[w]=Math.random()*Math.PI*2};m(),window.addEventListener("resize",m);const g=w=>{p.x=w.clientX,p.y=w.clientY};window.addEventListener("mousemove",g),s.font=`${o-3}px "SF Mono", Menlo, monospace`,s.textBaseline="top";const S=1e3/24;let k=0,x;const b=w=>{if(x=requestAnimationFrame(b),w-k<S)return;k=w;const y=w*7e-4;s.clearRect(0,0,i.width,i.height);const E=n.current==="dark"?"245,241,232":"17,17,17",R=n.current==="dark"?"255,90,60":"226,61,31",O=Py.length;for(let M=0;M<c;M++){const I=M*o;for(let v=0;v<l;v++){const T=M*l+v,C=v*o,P=u[T],A=((r?Math.sin(v*.25+P)+Math.sin(M*.22+P*.5):Math.sin(v*.25+y*1.3+P)+Math.sin(M*.22-y*1.1+P*.5))+2)/4,me=C-p.x,gt=I-p.y,J=Math.sqrt(me*me+gt*gt),de=J<110?1-J/110:0,U=.64;if(A<U&&de<.05)continue;const G=Math.max(0,A-U)/(1-U),Z=Math.min(O-1,Math.max(1,Math.floor((G+de*.85)*(O-1)))),fe=Math.min(.8,.04+G*.14+de*.55);s.fillStyle=de>.3?`rgba(${R},${fe})`:`rgba(${E},${fe})`,s.fillText(Py[Z],C,I)}}};return x=requestAnimationFrame(b),()=>{window.removeEventListener("resize",m),window.removeEventListener("mousemove",g),x&&cancelAnimationFrame(x)}},[]),d.jsx("canvas",{ref:t,className:ds.canvas,"aria-hidden":"true"})}function XD(){const t=B.useRef(null),e=B.useRef(null);return B.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;document.body.style.cursor="none";const r=i=>{if(t.current&&(t.current.style.transform=`translate(${i.clientX}px, ${i.clientY}px) translate(-50%,-50%)`,t.current.style.opacity="1"),e.current){e.current.style.transform=`translate(${i.clientX}px, ${i.clientY}px) translate(-50%,-50%)`,e.current.style.opacity="1";const s=i.target.closest&&i.target.closest("[data-cursor-hover]");e.current.style.width=s?"54px":"34px",e.current.style.height=s?"54px":"34px"}};return window.addEventListener("mousemove",r),()=>{window.removeEventListener("mousemove",r),document.body.style.cursor=""}},[]),d.jsxs(d.Fragment,{children:[d.jsx("div",{ref:e,className:ds.cursorRing,"aria-hidden":"true"}),d.jsx("div",{ref:t,className:ds.cursorDot,"aria-hidden":"true"})]})}function JD({showParticles:t=!0,showCursorEffect:e=!0,showDecor:n=!0}){const r=G0();return d.jsxs(d.Fragment,{children:[d.jsx("a",{href:"#main",className:ds.skipLink,children:"Skip to content"}),t&&d.jsx(YD,{}),n&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:ds.blob1,"aria-hidden":"true"}),d.jsx("div",{className:ds.blob2,"aria-hidden":"true"})]}),!r&&e&&d.jsx(XD,{})]})}const ZD="_header_tg23a_1",eb="_container_tg23a_19",tb="_logo_tg23a_28",nb="_crown_tg23a_33",rb="_navLinks_tg23a_38",ib="_navLink_tg23a_38",sb="_active_tg23a_53",ob="_themeBtn_tg23a_57",ab="_resumeBtn_tg23a_69",lb="_mobileControls_tg23a_78",cb="_hamburger_tg23a_84",ub="_mobileNav_tg23a_95",hb="_mobileNavLink_tg23a_103",db="_mobileResumeBtn_tg23a_110",vt={header:ZD,container:eb,logo:tb,crown:nb,navLinks:rb,navLink:ib,active:sb,themeBtn:ob,resumeBtn:ab,mobileControls:lb,hamburger:cb,mobileNav:ub,mobileNavLink:hb,mobileResumeBtn:db};function zn({size:t=24,color:e="currentColor",className:n,style:r}){return d.jsxs("svg",{viewBox:"0 0 120 90",width:t,height:t*.75,className:n,style:{display:"inline-block",verticalAlign:"middle",...r},"aria-hidden":"true",children:[d.jsx("path",{d:"M13,66 C11,50 12,34 16,21 C21,30 26,38 31,44 C39,32 47,20 58,8 C63,21 69,33 76,43 C83,36 90,28 103,23 C107,36 108,51 106,66",fill:"none",stroke:e,strokeWidth:"9",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M14,68 C36,72 82,72 105,68",fill:"none",stroke:e,strokeWidth:"9",strokeLinecap:"round",strokeLinejoin:"round"})]})}const Ic="/assets/cv-ByL4WuGn.pdf",yh=[{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"experience",label:"Experience"},{id:"commonplace",label:"Commonplace"},{id:"contact",label:"Contact"}];function fb(){const[t,e]=B.useState(!1),[n,r]=B.useState("hero"),{theme:i,toggleTheme:s}=W0(),o=G0();B.useEffect(()=>{const u=()=>{const p=["hero",...yh.map(g=>g.id)],m=window.scrollY+window.innerHeight/2;for(const g of p){const S=document.getElementById(g);if(S){const{offsetTop:k,offsetHeight:x}=S;if(m>=k&&m<k+x){r(g);break}}}};return window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),B.useEffect(()=>{o||e(!1)},[o]);const l=i==="light"?"☾":"☀",c=()=>e(!1);return d.jsxs("header",{className:vt.header,children:[d.jsxs("div",{className:vt.container,children:[d.jsxs("a",{href:"#main","data-cursor-hover":"true",className:vt.logo,children:["Yuan",d.jsx(zn,{size:20,color:"var(--dc-yellow)",className:vt.crown})]}),!o&&d.jsxs("nav",{"aria-label":"Main",className:vt.navLinks,children:[yh.map(u=>d.jsx("a",{href:`#${u.id}`,"data-cursor-hover":"true",className:`${vt.navLink} ${n===u.id?vt.active:""}`,children:u.label},u.id)),d.jsx("button",{onClick:s,"aria-label":"Toggle dark mode",className:vt.themeBtn,children:l}),d.jsx("a",{href:Ic,download:"Yuan-Pangan-Resume.pdf","data-cursor-hover":"true",className:vt.resumeBtn,children:"Resume"})]}),o&&d.jsxs("div",{className:vt.mobileControls,children:[d.jsx("button",{onClick:s,"aria-label":"Toggle dark mode",className:vt.themeBtn,children:l}),d.jsx("button",{onClick:()=>e(u=>!u),"aria-label":"Toggle menu",className:vt.hamburger,children:"☰"})]})]}),o&&t&&d.jsxs("nav",{"aria-label":"Mobile",className:vt.mobileNav,children:[yh.map(u=>d.jsx("a",{href:`#${u.id}`,onClick:c,className:vt.mobileNavLink,children:u.label},u.id)),d.jsx("a",{href:Ic,download:"Yuan-Pangan-Resume.pdf",className:vt.mobileResumeBtn,children:"Download Resume"})]})]})}const pb="_container_15k7o_1",mb="_revealed_15k7o_11",gb="_inner_15k7o_16",_b="_eyebrow_15k7o_21",yb="_headingWrap_15k7o_30",vb="_headline_15k7o_36",wb="_underline_15k7o_42",Eb="_sub_15k7o_52",Ib="_email_15k7o_58",Tb="_linkRow_15k7o_67",Sb="_ctaPrimary_15k7o_75",Ab="_ctaSecondary_15k7o_76",Ot={container:pb,revealed:mb,inner:gb,eyebrow:_b,headingWrap:yb,headline:vb,underline:wb,sub:Eb,email:Ib,linkRow:Tb,ctaPrimary:Sb,ctaSecondary:Ab};function Di(){const t=B.useRef(null),[e,n]=B.useState(!1);return B.useEffect(()=>{const r=t.current;if(!r)return;const i=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&n(!0)})},{threshold:.15});return i.observe(r),()=>i.disconnect()},[]),[t,e]}const Cb={github:"https://github.com/yuanpngn",linkedin:"https://www.linkedin.com/in/yuan-pangan/"};function Pb(){const[t,e]=B.useState(Cb),[n,r]=Di();return B.useEffect(()=>{(async()=>{try{const i=await ca(Ne(le,"portfolio","main"));if(i.exists()){const s=i.data();e(o=>{var l,c;return{github:((l=s.social)==null?void 0:l.github)||o.github,linkedin:((c=s.social)==null?void 0:c.linkedin)||o.linkedin}})}}catch(i){console.error("Error loading social links:",i)}})()},[]),d.jsx("section",{id:"contact","aria-label":"Contact",ref:n,className:`${Ot.container} ${r?Ot.revealed:""}`,children:d.jsxs("div",{className:Ot.inner,children:[d.jsx("div",{className:Ot.eyebrow,children:"CONTACT"}),d.jsxs("div",{className:Ot.headingWrap,children:[d.jsx("h2",{className:Ot.headline,children:"Let's build something worth remembering."}),d.jsx("div",{className:Ot.underline})]}),d.jsx("p",{className:Ot.sub,children:"Graduating this October and actively looking for full-time Software Engineer roles — open to backend, full-stack, or XR/mixed-reality work, or just a good conversation about building things."}),d.jsx("a",{href:"mailto:yumiannpangan@gmail.com","data-cursor-hover":"true",className:Ot.email,children:"yumiannpangan@gmail.com"}),d.jsxs("div",{className:Ot.linkRow,children:[d.jsx("a",{href:t.linkedin,target:"_blank",rel:"noopener noreferrer","data-cursor-hover":"true",className:Ot.ctaSecondary,children:"LinkedIn ↗"}),d.jsx("a",{href:t.github,target:"_blank",rel:"noopener noreferrer","data-cursor-hover":"true",className:Ot.ctaSecondary,children:"GitHub ↗"}),d.jsx("a",{href:Ic,download:"Yuan-Pangan-Resume.pdf","data-cursor-hover":"true",className:Ot.ctaPrimary,children:"Download Resume"})]})]})})}const kb="_container_pfywo_1",Rb="_text_pfywo_13",xb="_crown_pfywo_18",Nb="_devBtn_pfywo_22",Db="_terminalOverlay_pfywo_32",bb="_terminalCard_pfywo_43",Ob="_terminalLine_pfywo_55",Vb="_cursor_pfywo_59",Lb="_ypBlink_pfywo_1",vn={container:kb,text:Rb,crown:xb,devBtn:Nb,terminalOverlay:Db,terminalCard:bb,terminalLine:Ob,cursor:Vb,ypBlink:Lb};function Jn({children:t}){return Hw.createPortal(t,document.body)}function Mb(){const[t,e]=B.useState(!1),n=new Date().getFullYear();return d.jsxs("section",{id:"footer",className:vn.container,children:[d.jsxs("span",{className:vn.text,children:["© ",n," Yuan Pangan. Built with curiosity"," ",d.jsx(zn,{size:16,color:"var(--dc-yellow)",className:vn.crown})]}),d.jsx("button",{onClick:()=>e(r=>!r),"aria-label":"Developer console",className:vn.devBtn,children:"</>"}),t&&d.jsx(Jn,{children:d.jsx("div",{className:vn.terminalOverlay,onClick:()=>e(!1),children:d.jsxs("div",{className:vn.terminalCard,onClick:r=>r.stopPropagation(),children:[d.jsx("div",{children:"$ whoami"}),d.jsx("div",{className:vn.terminalLine,children:"yuan — cs student, builder, curious human"}),d.jsx("div",{style:{marginTop:"10px"},children:"$ cat interests.txt"}),d.jsx("div",{className:vn.terminalLine,children:"software engineering, ai/ml, xr, accessibility"}),d.jsx("div",{style:{marginTop:"10px"},children:'$ echo "thanks for checking the console"'}),d.jsxs("div",{className:vn.terminalLine,children:["thanks for checking the console",d.jsx("span",{className:vn.cursor,children:"_"})]})]})})})]})}const jb="_container_oeyfm_1",Fb="_grid_oeyfm_10",Ub="_eyebrow_oeyfm_20",Bb="_pulseDot_oeyfm_32",$b="_ypPulse_oeyfm_1",zb="_name_oeyfm_40",Hb="_tagline_oeyfm_47",qb="_sub_oeyfm_54",Wb="_ctaRow_oeyfm_61",Gb="_ctaPrimary_oeyfm_67",Kb="_ctaSecondary_oeyfm_68",Qb="_ctaGhost_oeyfm_69",Yb="_scrollCue_oeyfm_91",Xb="_ypFloat_oeyfm_1",Jb="_cardWrap_oeyfm_98",Zb="_tiltCard_oeyfm_103",eO="_heroCrown_oeyfm_109",tO="_chip_oeyfm_116",nO="_chip0_oeyfm_129",rO="_chip1_oeyfm_138",iO="_chip2_oeyfm_147",sO="_chip3_oeyfm_156",oO="_chip4_oeyfm_165",Je={container:jb,grid:Fb,eyebrow:Ub,pulseDot:Bb,ypPulse:$b,name:zb,tagline:Hb,sub:qb,ctaRow:Wb,ctaPrimary:Gb,ctaSecondary:Kb,ctaGhost:Qb,scrollCue:Yb,ypFloat:Xb,cardWrap:Jb,tiltCard:Zb,heroCrown:eO,chip:tO,chip0:nO,chip1:rO,chip2:iO,chip3:sO,chip4:oO},aO=["Software Engineering","Automation","Mixed Reality + Unity","Drones","Web Development"];function lO(){const[t,e]=B.useState({name:"Yuan Pangan",title:"Software Engineer — graduating October 2026, open to full-time roles.",description:"Looking for backend, full-stack, or XR/mixed-reality engineering roles — based in Manila, open to remote. Let's talk."}),[n,r]=B.useState({rx:0,ry:0});B.useEffect(()=>{i()},[]);const i=async()=>{try{const l=Ne(le,"portfolio","main"),c=await ca(l);if(c.exists()){const u=c.data();e(p=>{var m,g,S;return{name:((m=u.hero)==null?void 0:m.name)||p.name,title:((g=u.hero)==null?void 0:g.title)||p.title,description:((S=u.hero)==null?void 0:S.description)||p.description}})}}catch(l){console.error("Error loading hero data:",l)}},s=l=>{const c=l.currentTarget.getBoundingClientRect(),u=(l.clientX-c.left)/c.width-.5,p=(l.clientY-c.top)/c.height-.5;r({rx:p*-10,ry:u*14})},o=()=>r({rx:0,ry:0});return d.jsx("section",{id:"hero","aria-label":"Introduction",className:Je.container,children:d.jsxs("div",{className:Je.grid,children:[d.jsxs("div",{children:[d.jsxs("div",{className:Je.eyebrow,children:[d.jsx("span",{className:Je.pulseDot}),"Open to Work · Grad Oct 2026"]}),d.jsx("h1",{className:Je.name,children:t.name}),d.jsx("p",{className:Je.tagline,children:t.title}),d.jsx("p",{className:Je.sub,children:t.description}),d.jsxs("div",{className:Je.ctaRow,children:[d.jsx("a",{href:"#projects","data-cursor-hover":"true",className:Je.ctaPrimary,children:"View Projects"}),d.jsx("a",{href:Ic,download:"Yuan-Pangan-Resume.pdf","data-cursor-hover":"true",className:Je.ctaSecondary,children:"Download Resume"}),d.jsx("a",{href:"#contact","data-cursor-hover":"true",className:Je.ctaGhost,children:"Contact Me →"})]}),d.jsx("div",{className:Je.scrollCue,children:"↓ scroll"})]}),d.jsx("div",{className:Je.cardWrap,onMouseMove:s,onMouseLeave:o,children:d.jsxs("div",{className:Je.tiltCard,style:{transform:`perspective(1000px) rotateX(${n.rx}deg) rotateY(${n.ry}deg)`},children:[d.jsx(zn,{size:56,color:"var(--dc-yellow)",className:Je.heroCrown}),aO.map((l,c)=>d.jsx("div",{className:`${Je.chip} ${Je[`chip${c}`]}`,children:l},l))]})})]})})}const cO="_container_1s9ph_1",uO="_revealed_1s9ph_10",hO="_grid_1s9ph_15",dO="_eyebrow_1s9ph_24",fO="_headingWrap_1s9ph_31",pO="_h2_1s9ph_37",mO="_underline_1s9ph_47",gO="_points_1s9ph_57",_O="_point_1s9ph_57",yO="_number_1s9ph_69",vO="_body_1s9ph_74",wO="_photoWrap_1s9ph_80",EO="_tapeStrip_1s9ph_84",IO="_photoFrame_1s9ph_100",TO="_photo_1s9ph_80",SO="_pinNote_1s9ph_114",ct={container:cO,revealed:uO,grid:hO,eyebrow:dO,headingWrap:fO,h2:pO,underline:mO,points:gO,point:_O,number:yO,body:vO,photoWrap:wO,tapeStrip:EO,photoFrame:IO,photo:TO,pinNote:SO},AO="portfolio_uploads",CO="dxcmdqs3j";async function PO(t){const e=new FormData;e.append("file",t),e.append("upload_preset",AO);const n=await fetch(`https://api.cloudinary.com/v1_1/${CO}/image/upload`,{method:"POST",body:e});if(!n.ok)throw new Error("Cloudinary upload failed");return(await n.json()).secure_url}const kO="_wrap_16zy1_1",RO="_placeholder_16zy1_7",xO="_editButton_16zy1_17",NO="_editButtonCompact_16zy1_36",DO="_fileInput_16zy1_45",co={wrap:kO,placeholder:RO,editButton:xO,editButtonCompact:NO,fileInput:DO};function Op({src:t,alt:e,imgClassName:n,onUploaded:r,fallback:i,compact:s=!1}){const{isAdmin:o}=Kr(),[l,c]=B.useState(!1),u=B.useRef(null),p=async m=>{var S;const g=(S=m.target.files)==null?void 0:S[0];if(g){c(!0);try{const k=await PO(g);await r(k)}catch(k){console.error("Error uploading photo:",k),alert("Failed to upload photo. Please try again.")}finally{c(!1),m.target.value=""}}};return!t&&!o&&!i?null:d.jsxs("div",{className:co.wrap,children:[t?d.jsx("img",{src:t,alt:e,className:n}):i?d.jsx("div",{className:n,children:i}):d.jsx("div",{className:`${n} ${co.placeholder}`,children:"No photo yet"}),o&&d.jsxs(d.Fragment,{children:[d.jsx("button",{type:"button",className:`${co.editButton} ${s?co.editButtonCompact:""}`,onClick:m=>{var g;m.stopPropagation(),(g=u.current)==null||g.click()},disabled:l,title:"Change photo",children:l?"…":s?"📷":"📷 Edit"}),d.jsx("input",{ref:u,type:"file",accept:"image/*",onClick:m=>m.stopPropagation(),onChange:p,className:co.fileInput})]})]})}const bO="/assets/yuan-CLoNjDCe.png",OO=["I started out chasing the moment code turns into something you can touch — a button that responds, a screen that reacts. That curiosity is why I studied Software Technology at De La Salle University (graduating this October), and why I still can't resist opening dev tools on a page I like.","Since then I've built across the stack — automation tooling at HSBC, production backend work at Manulife, a full-stack inventory system for a startup client — and outside it, into research: a mixed-reality drone system that treats hardware as a performance partner.","What ties it together is a bias for shipping things that hold up under real use — readable code, tested assumptions, and interfaces that work for the person who didn't design them. That's the standard I hold every project to."],VO="Manila, Philippines";function LO(){const[t,e]=B.useState(OO),[n,r]=B.useState(VO),[i,s]=B.useState(bO),[o,l]=Di();B.useEffect(()=>{(async()=>{var u,p,m,g;try{const S=await ca(Ne(le,"portfolio","main"));if(S.exists()){const k=S.data();(p=(u=k.about)==null?void 0:u.paragraphs)!=null&&p.length&&e(k.about.paragraphs),(m=k.about)!=null&&m.location&&r(k.about.location),(g=k.about)!=null&&g.photoUrl&&s(k.about.photoUrl)}}catch(S){console.error("Error loading about data:",S)}})()},[]);const c=async u=>{try{const p=await ca(Ne(le,"portfolio","main")),m=p.exists()?p.data():{};await I0(Ne(le,"portfolio","main"),{...m,about:{...m.about,photoUrl:u}}),s(u)}catch(p){console.error("Error saving photo:",p),alert("Failed to save photo. Please try again.")}};return d.jsx("section",{id:"about","aria-label":"About",ref:o,className:`${ct.container} ${l?ct.revealed:""}`,children:d.jsxs("div",{className:ct.grid,children:[d.jsxs("div",{children:[d.jsxs("div",{className:ct.eyebrow,children:["ABOUT ",d.jsx(zn,{size:14,color:"var(--dc-red)"})]}),d.jsxs("div",{className:ct.headingWrap,children:[d.jsx("h2",{className:ct.h2,children:"I build things people actually want to use."}),d.jsx("div",{className:ct.underline})]}),d.jsx("div",{className:ct.points,children:t.map((u,p)=>d.jsxs("div",{className:ct.point,children:[d.jsx("div",{className:ct.number,children:String(p+1).padStart(2,"0")}),d.jsx("p",{className:ct.body,children:u})]},p))})]}),d.jsxs("div",{className:ct.photoWrap,children:[d.jsx("div",{className:ct.tapeStrip}),d.jsx("div",{className:ct.photoFrame,children:d.jsx(Op,{src:i,alt:"Portrait of Yuan Pangan",imgClassName:ct.photo,onUploaded:c})}),d.jsxs("div",{className:ct.pinNote,children:["📍 ",n]})]})]})})}const MO="_container_lv9wa_1",jO="_revealed_lv9wa_10",FO="_inner_lv9wa_15",UO="_eyebrow_lv9wa_20",BO="_headingWrap_lv9wa_27",$O="_h2_lv9wa_33",zO="_underline_lv9wa_43",HO="_addButton_lv9wa_53",qO="_projectsGrid_lv9wa_65",WO="_projectWrapper_lv9wa_73",GO="_pinnedCrown_lv9wa_77",KO="_adminControls_lv9wa_86",QO="_pinnedButton_lv9wa_107",YO="_editOverlay_lv9wa_112",XO="_editForm_lv9wa_128",JO="_formButtons_lv9wa_171",ut={container:MO,revealed:jO,inner:FO,eyebrow:UO,headingWrap:BO,h2:$O,underline:zO,addButton:HO,projectsGrid:qO,projectWrapper:WO,pinnedCrown:GO,adminControls:KO,pinnedButton:QO,editOverlay:YO,editForm:XO,formButtons:JO},ZO="_card_109km_1",eV="_accentRed_109km_12",tV="_accentBlue_109km_17",nV="_accentYellow_109km_22",rV="_bar_109km_27",iV="_imageArea_109km_31",sV="_image_109km_31",oV="_body_109km_57",aV="_tag_109km_65",lV="_title_109km_86",cV="_description_109km_93",uV="_techStack_109km_99",hV="_techBadge_109km_106",dV="_viewDetails_109km_114",Ht={card:ZO,accentRed:eV,accentBlue:tV,accentYellow:nV,bar:rV,imageArea:iV,image:sV,body:oV,tag:aV,title:lV,description:cV,techStack:uV,techBadge:hV,viewDetails:dV},ky=["accentRed","accentBlue","accentYellow"];function fV({project:t,index:e=0,onClick:n,onPhotoUploaded:r}){var o;const{isAdmin:i}=Kr(),s=Ht[ky[e%ky.length]];return d.jsxs("div",{className:`${Ht.card} ${s}`,onClick:n,children:[d.jsx("div",{className:Ht.bar}),(t.imageUrl||i)&&d.jsx("div",{className:Ht.imageArea,onClick:l=>l.stopPropagation(),children:d.jsx(Op,{src:t.imageUrl,alt:t.title,imgClassName:Ht.image,onUploaded:r})}),d.jsxs("div",{className:Ht.body,children:[t.category&&d.jsx("div",{className:Ht.tag,children:t.category}),d.jsx("h3",{className:Ht.title,children:t.title}),d.jsx("p",{className:Ht.description,children:t.shortDesc}),d.jsx("div",{className:Ht.techStack,children:(o=t.technologies)==null?void 0:o.slice(0,4).map((l,c)=>d.jsx("span",{className:Ht.techBadge,children:l},c))}),d.jsx("button",{className:Ht.viewDetails,"data-cursor-hover":"true",children:"View details →"})]})]})}const pV="_modalOverlay_1anjl_1",mV="_modalCard_1anjl_13",gV="_modalHeader_1anjl_24",_V="_modalTag_1anjl_32",yV="_modalTitle_1anjl_39",vV="_modalClose_1anjl_46",wV="_modalBlurb_1anjl_58",EV="_section_1anjl_64",IV="_modalLabel_1anjl_68",TV="_modalP_1anjl_75",SV="_highlightsList_1anjl_81",AV="_checkmark_1anjl_98",CV="_statusRow_1anjl_104",PV="_techPills_1anjl_111",kV="_techPill_1anjl_111",RV="_linkRow_1anjl_126",xV="_modalLink_1anjl_132",be={modalOverlay:pV,modalCard:mV,modalHeader:gV,modalTag:_V,modalTitle:yV,modalClose:vV,modalBlurb:wV,section:EV,modalLabel:IV,modalP:TV,highlightsList:SV,checkmark:AV,statusRow:CV,techPills:PV,techPill:kV,linkRow:RV,modalLink:xV};function NV({project:t,onClose:e}){var r,i;B.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}),[]);const n=s=>{s.target===s.currentTarget&&e()};return d.jsx(Jn,{children:d.jsx("div",{className:be.modalOverlay,onClick:n,children:d.jsxs("div",{className:be.modalCard,onClick:s=>s.stopPropagation(),children:[d.jsxs("div",{className:be.modalHeader,children:[d.jsxs("div",{children:[t.category&&d.jsx("div",{className:be.modalTag,children:t.category}),d.jsx("h3",{className:be.modalTitle,children:t.title})]}),d.jsx("button",{onClick:e,"aria-label":"Close",className:be.modalClose,children:"✕"})]}),d.jsx("p",{className:be.modalBlurb,children:t.fullDesc}),((r=t.highlights)==null?void 0:r.length)>0&&d.jsxs("div",{className:be.section,children:[d.jsx("div",{className:be.modalLabel,children:"KEY HIGHLIGHTS"}),d.jsx("ul",{className:be.highlightsList,children:t.highlights.map((s,o)=>d.jsxs("li",{children:[d.jsx("span",{className:be.checkmark,children:"✓"}),s]},o))})]}),(t.status||t.category)&&d.jsxs("div",{className:be.statusRow,children:[t.status&&d.jsxs("div",{children:[d.jsx("div",{className:be.modalLabel,children:"STATUS"}),d.jsx("p",{className:be.modalP,children:t.status})]}),t.category&&d.jsxs("div",{children:[d.jsx("div",{className:be.modalLabel,children:"CATEGORY"}),d.jsx("p",{className:be.modalP,children:t.category})]})]}),((i=t.technologies)==null?void 0:i.length)>0&&d.jsx("div",{className:be.techPills,children:t.technologies.map((s,o)=>d.jsx("span",{className:be.techPill,children:s},o))}),d.jsxs("div",{className:be.linkRow,children:[t.github&&d.jsx("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:be.modalLink,children:"GitHub ↗"}),t.conferencePaper&&d.jsx("a",{href:t.conferencePaper,target:"_blank",rel:"noopener noreferrer",className:be.modalLink,children:"Conference Paper ↗"})]})]})})})}function DV(){const{isAdmin:t}=Kr(),[e,n]=B.useState(null),[r,i]=B.useState([]),[s,o]=B.useState(!1),[l,c]=B.useState(null),[u,p]=Di();B.useEffect(()=>{m()},[]);const m=async()=>{try{const E=(await Aa(bn(le,"projects"))).docs.map(R=>({...R.data(),firestoreId:R.id}));E.sort((R,O)=>R.isPinned&&!O.isPinned?-1:!R.isPinned&&O.isPinned?1:0),i(E)}catch(y){console.error("Error loading projects:",y),i([])}},g=async y=>{try{await $n(Ne(le,"projects",y.firestoreId),{isPinned:!y.isPinned}),await m()}catch(E){console.error("Error toggling pin:",E),alert("Failed to toggle pin")}},S=async(y,E)=>{try{await $n(Ne(le,"projects",y.firestoreId),{imageUrl:E}),await m()}catch(R){console.error("Error saving project photo:",R),alert("Failed to save photo. Please try again.")}},k=()=>{c({title:"",shortDesc:"",fullDesc:"",technologies:[],github:"",highlights:[],category:"",status:"",conferencePaper:"",isPinned:!1}),o(!0)},x=y=>{c(y),o(!0)},b=async y=>{try{y.firestoreId?await $n(Ne(le,"projects",y.firestoreId),y):await Pa(bn(le,"projects"),y),await m(),o(!1),c(null)}catch(E){console.error("Error saving project:",E),alert("Failed to save project")}},w=async y=>{if(window.confirm("Are you sure you want to delete this project?"))try{await Ca(Ne(le,"projects",y)),await m()}catch(E){console.error("Error deleting project:",E),alert("Failed to delete project")}};return d.jsxs("section",{id:"projects","aria-label":"Projects",ref:u,className:`${ut.container} ${p?ut.revealed:""}`,children:[d.jsxs("div",{className:ut.inner,children:[d.jsxs("div",{className:ut.eyebrow,children:["PROJECTS ",d.jsx(zn,{size:14,color:"var(--dc-red)"})]}),d.jsxs("div",{className:ut.headingWrap,children:[d.jsx("h2",{className:ut.h2,children:"Selected work."}),d.jsx("div",{className:ut.underline})]}),t&&d.jsx("button",{className:ut.addButton,onClick:k,children:"+ Add Project"}),d.jsx("div",{className:ut.projectsGrid,children:r.map((y,E)=>d.jsxs("div",{className:ut.projectWrapper,"data-pinned":y.isPinned||!1,children:[y.isPinned&&d.jsx(zn,{size:30,color:"var(--dc-yellow)",className:ut.pinnedCrown}),d.jsx(fV,{project:y,index:E,onClick:()=>n(y),onPhotoUploaded:R=>S(y,R)}),t&&d.jsxs("div",{className:ut.adminControls,children:[d.jsx("button",{onClick:()=>x(y),children:"✏️ Edit"}),y.firestoreId&&d.jsxs(d.Fragment,{children:[d.jsxs("button",{onClick:()=>g(y),className:y.isPinned?ut.pinnedButton:"",title:y.isPinned?"Unpin project":"Pin project",children:[d.jsx(zn,{size:13,color:"currentColor"})," ",y.isPinned?"Pinned":"Pin"]}),d.jsx("button",{onClick:()=>w(y.firestoreId),children:"🗑️ Delete"})]})]})]},y.id||y.firestoreId))})]}),e&&d.jsx(NV,{project:e,onClose:()=>n(null)}),s&&d.jsx(bV,{project:l,onSave:b,onCancel:()=>{o(!1),c(null)}})]})}function bV({project:t,onSave:e,onCancel:n}){var c,u;const[r,i]=B.useState({...t,technologies:t.technologies||[],highlights:t.highlights||[]}),s=(p,m)=>{i(g=>({...g,[p]:m}))},o=(p,m)=>{const g=m.split(`
`).filter(S=>S.trim());i(S=>({...S,[p]:g}))},l=p=>{p.preventDefault(),e(r)};return d.jsx(Jn,{children:d.jsx("div",{className:ut.editOverlay,onClick:n,children:d.jsxs("div",{className:ut.editForm,onClick:p=>p.stopPropagation(),children:[d.jsx("h3",{children:t.firestoreId?"Edit Project":"Add New Project"}),d.jsxs("form",{onSubmit:l,children:[d.jsxs("label",{children:["Title:",d.jsx("input",{type:"text",value:r.title,onChange:p=>s("title",p.target.value),required:!0})]}),d.jsxs("label",{children:["Short Description:",d.jsx("input",{type:"text",value:r.shortDesc,onChange:p=>s("shortDesc",p.target.value),required:!0})]}),d.jsxs("label",{children:["Full Description:",d.jsx("textarea",{value:r.fullDesc,onChange:p=>s("fullDesc",p.target.value),rows:4,required:!0})]}),d.jsxs("label",{children:["Technologies (one per line):",d.jsx("textarea",{value:((c=r.technologies)==null?void 0:c.join(`
`))||"",onChange:p=>o("technologies",p.target.value),rows:3})]}),d.jsxs("label",{children:["GitHub URL:",d.jsx("input",{type:"url",value:r.github,onChange:p=>s("github",p.target.value)})]}),d.jsxs("label",{children:["Highlights (one per line):",d.jsx("textarea",{value:((u=r.highlights)==null?void 0:u.join(`
`))||"",onChange:p=>o("highlights",p.target.value),rows:4})]}),d.jsxs("label",{children:["Category:",d.jsx("input",{type:"text",value:r.category,onChange:p=>s("category",p.target.value)})]}),d.jsxs("label",{children:["Status:",d.jsx("input",{type:"text",value:r.status,onChange:p=>s("status",p.target.value)})]}),d.jsxs("label",{children:["Attachment URL (Conference Paper):",d.jsx("input",{type:"url",value:r.conferencePaper||"",onChange:p=>s("conferencePaper",p.target.value)})]}),d.jsxs("div",{className:ut.formButtons,children:[d.jsx("button",{type:"submit",children:"Save Project"}),d.jsx("button",{type:"button",onClick:n,children:"Cancel"})]})]})]})})})}const OV="_container_xlxze_1",VV="_revealed_xlxze_11",LV="_inner_xlxze_16",MV="_eyebrow_xlxze_21",jV="_headingWrap_xlxze_28",FV="_h2_xlxze_34",UV="_underline_xlxze_44",BV="_addButton_xlxze_54",$V="_categoriesList_xlxze_66",zV="_categoryGroup_xlxze_73",HV="_categoryHeader_xlxze_79",qV="_categoryLabel_xlxze_85",WV="_accentRed_xlxze_94",GV="_accentBlue_xlxze_98",KV="_accentYellow_xlxze_102",QV="_categoryAdmin_xlxze_107",YV="_chipRow_xlxze_125",XV="_chip_xlxze_125",JV="_chipLabel_xlxze_143",ZV="_editOverlay_xlxze_148",eL="_editForm_xlxze_164",tL="_formButtons_xlxze_207",je={container:OV,revealed:VV,inner:LV,eyebrow:MV,headingWrap:jV,h2:FV,underline:UV,addButton:BV,categoriesList:$V,categoryGroup:zV,categoryHeader:HV,categoryLabel:qV,accentRed:WV,accentBlue:GV,accentYellow:KV,categoryAdmin:QV,chipRow:YV,chip:XV,chipLabel:JV,editOverlay:ZV,editForm:eL,formButtons:tL},Ry=["accentRed","accentBlue","accentYellow"];function nL(){const{isAdmin:t}=Kr(),[e,n]=B.useState({}),[r,i]=B.useState(!1),[s,o]=B.useState(""),[l,c]=B.useState(""),[u,p]=Di();B.useEffect(()=>{m()},[]);const m=async()=>{try{const w=await Aa(bn(le,"skills")),y={};w.docs.forEach(E=>{y[E.id]=E.data().skills||[]}),n(y)}catch(w){console.error("Error loading skills:",w)}},g=w=>{o(w),c(e[w].join(`
`)),i(!0)},S=()=>{o(""),c(""),i(!0)},k=async w=>{w.preventDefault();const y=l.split(`
`).filter(R=>R.trim()),E=s||w.target.categoryName.value;try{await $n(Ne(le,"skills",E),{skills:y}),await m(),i(!1)}catch{try{await Pa(bn(le,"skills"),{skills:y}),await m(),i(!1)}catch(O){console.error("Error saving category:",O)}}},x=async w=>{if(window.confirm(`Delete ${w} category?`))try{await Ca(Ne(le,"skills",w)),await m()}catch(y){console.error("Error deleting category:",y)}},b=Object.keys(e);return d.jsxs("section",{id:"skills","aria-label":"Skills",ref:u,className:`${je.container} ${p?je.revealed:""}`,children:[d.jsxs("div",{className:je.inner,children:[d.jsx("div",{className:je.eyebrow,children:"SKILLS"}),d.jsxs("div",{className:je.headingWrap,children:[d.jsx("h2",{className:je.h2,children:"What I work with."}),d.jsx("div",{className:je.underline})]}),t&&d.jsx("button",{className:je.addButton,onClick:S,children:"+ Add Category"}),d.jsx("div",{className:je.categoriesList,children:b.map((w,y)=>{const E=je[Ry[y%Ry.length]];return d.jsxs("div",{className:je.categoryGroup,children:[d.jsxs("div",{className:je.categoryHeader,children:[d.jsx("h3",{className:`${je.categoryLabel} ${E}`,children:w}),t&&d.jsxs("div",{className:je.categoryAdmin,children:[d.jsx("button",{onClick:()=>g(w),title:"Edit category",children:"✏️"}),d.jsx("button",{onClick:()=>x(w),title:"Delete category",children:"🗑️"})]})]}),d.jsx("div",{className:je.chipRow,children:e[w].map(R=>d.jsx("div",{className:je.chip,children:d.jsx("span",{className:je.chipLabel,children:R})},R))})]},w)})})]}),r&&d.jsx(Jn,{children:d.jsx("div",{className:je.editOverlay,onClick:()=>i(!1),children:d.jsxs("div",{className:je.editForm,onClick:w=>w.stopPropagation(),children:[d.jsx("h3",{children:s?"Edit Category":"Add New Category"}),d.jsxs("form",{onSubmit:k,children:[!s&&d.jsxs("label",{children:["Category Name:",d.jsx("input",{type:"text",name:"categoryName",required:!0})]}),d.jsxs("label",{children:["Skills (one per line):",d.jsx("textarea",{value:l,onChange:w=>c(w.target.value),rows:8,required:!0})]}),d.jsxs("div",{className:je.formButtons,children:[d.jsx("button",{type:"submit",children:"Save"}),d.jsx("button",{type:"button",onClick:()=>i(!1),children:"Cancel"})]})]})]})})})]})}const rL="_container_1tvur_1",iL="_revealed_1tvur_11",sL="_inner_1tvur_16",oL="_eyebrow_1tvur_21",aL="_headingWrap_1tvur_28",lL="_h2_1tvur_34",cL="_underline_1tvur_44",uL="_addButton_1tvur_54",hL="_timelineWrap_1tvur_66",dL="_timelineItem_1tvur_76",fL="_timelineDot_1tvur_84",pL="_itemBody_1tvur_95",mL="_period_1tvur_100",gL="_role_1tvur_106",_L="_org_1tvur_113",yL="_bulletList_1tvur_119",vL="_bullet_1tvur_119",wL="_thumb_1tvur_132",EL="_thumbImg_1tvur_146",IL="_thumbTiltA_1tvur_156",TL="_thumbTiltB_1tvur_160",SL="_adminControls_1tvur_164",AL="_editOverlay_1tvur_180",CL="_editForm_1tvur_196",PL="_formButtons_1tvur_241",Ee={container:rL,revealed:iL,inner:sL,eyebrow:oL,headingWrap:aL,h2:lL,underline:cL,addButton:uL,timelineWrap:hL,timelineItem:dL,timelineDot:fL,itemBody:pL,period:mL,role:gL,org:_L,bulletList:yL,bullet:vL,thumb:wL,thumbImg:EL,thumbTiltA:IL,thumbTiltB:TL,adminControls:SL,editOverlay:AL,editForm:CL,formButtons:PL};function kL(){const{isAdmin:t}=Kr(),[e,n]=B.useState([]),[r,i]=B.useState(!1),[s,o]=B.useState(null),[l,c]=Di();B.useEffect(()=>{p()},[]);const u=b=>{var M;const w=b.match(/(\w+\s+)?(\d{4})/);if(!w)return 0;const y=parseInt(w[2]),E=(M=w[1])==null?void 0:M.trim(),O=E&&{January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12,Jan:1,Feb:2,Mar:3,Apr:4,Jun:6,Jul:7,Aug:8,Sep:9,Sept:9,Oct:10,Nov:11,Dec:12}[E]||1;return y*100+O},p=async()=>{try{const w=(await Aa(bn(le,"experiences"))).docs.map(y=>({...y.data(),firestoreId:y.id}));w.sort((y,E)=>u(E.period)-u(y.period)),n(w)}catch(b){console.error("Error loading experiences:",b),n([])}},m=()=>{o({title:"",company:"",period:"",location:"",description:[],icon:"💼",type:"work"}),i(!0)},g=b=>{o(b),i(!0)},S=async b=>{try{b.firestoreId?await $n(Ne(le,"experiences",b.firestoreId),b):await Pa(bn(le,"experiences"),b),await p(),i(!1),o(null)}catch(w){console.error("Error saving experience:",w),alert("Failed to save experience")}},k=async b=>{if(window.confirm("Delete this experience?"))try{await Ca(Ne(le,"experiences",b)),await p()}catch(w){console.error("Error deleting experience:",w)}},x=async(b,w)=>{try{await $n(Ne(le,"experiences",b.firestoreId),{photoUrl:w}),await p()}catch(y){console.error("Error saving experience photo:",y),alert("Failed to save photo. Please try again.")}};return d.jsxs("section",{id:"experience","aria-label":"Experience",ref:l,className:`${Ee.container} ${c?Ee.revealed:""}`,children:[d.jsxs("div",{className:Ee.inner,children:[d.jsx("div",{className:Ee.eyebrow,children:"EXPERIENCE"}),d.jsxs("div",{className:Ee.headingWrap,children:[d.jsx("h2",{className:Ee.h2,children:"Where I've worked."}),d.jsx("div",{className:Ee.underline})]}),t&&d.jsx("button",{className:Ee.addButton,onClick:m,children:"+ Add Experience"}),d.jsx("div",{className:Ee.timelineWrap,children:e.map((b,w)=>{var y;return d.jsxs("div",{className:Ee.timelineItem,children:[d.jsx("div",{className:Ee.timelineDot}),d.jsxs("div",{className:Ee.itemBody,children:[d.jsx("div",{className:Ee.period,children:b.period}),d.jsx("h3",{className:Ee.role,children:b.title}),d.jsxs("div",{className:Ee.org,children:[b.company,b.location?` · ${b.location}`:""]}),d.jsx("ul",{className:Ee.bulletList,children:(y=b.description)==null?void 0:y.map((E,R)=>d.jsx("li",{className:Ee.bullet,children:E},R))}),t&&d.jsxs("div",{className:Ee.adminControls,children:[d.jsx("button",{onClick:()=>g(b),children:"✏️ Edit"}),b.firestoreId&&d.jsx("button",{onClick:()=>k(b.firestoreId),children:"🗑️ Delete"})]})]}),d.jsx("div",{className:`${Ee.thumb} ${w%2===0?Ee.thumbTiltA:Ee.thumbTiltB}`,children:d.jsx(Op,{src:b.photoUrl,alt:b.title,imgClassName:Ee.thumbImg,fallback:b.icon,compact:!0,onUploaded:E=>x(b,E)})})]},b.id||b.firestoreId)})})]}),r&&d.jsx(RL,{experience:s,onSave:S,onCancel:()=>{i(!1),o(null)}})]})}function RL({experience:t,onSave:e,onCancel:n}){var c;const[r,i]=B.useState({...t,description:t.description||[]}),s=(u,p)=>{i(m=>({...m,[u]:p}))},o=u=>{const p=u.split(`
`).filter(m=>m.trim());i(m=>({...m,description:p}))};Array.isArray(r.description)||(r.description=[]);const l=u=>{u.preventDefault(),e(r)};return d.jsx(Jn,{children:d.jsx("div",{className:Ee.editOverlay,onClick:n,children:d.jsxs("div",{className:Ee.editForm,onClick:u=>u.stopPropagation(),children:[d.jsx("h3",{children:t.firestoreId?"Edit Experience":"Add New Experience"}),d.jsxs("form",{onSubmit:l,children:[d.jsxs("label",{children:["Title:",d.jsx("input",{type:"text",value:r.title,onChange:u=>s("title",u.target.value),required:!0})]}),d.jsxs("label",{children:["Company/Organization:",d.jsx("input",{type:"text",value:r.company,onChange:u=>s("company",u.target.value),required:!0})]}),d.jsxs("label",{children:["Period:",d.jsx("input",{type:"text",value:r.period,onChange:u=>s("period",u.target.value),placeholder:"e.g., January 2024 – Present",required:!0})]}),d.jsxs("label",{children:["Location:",d.jsx("input",{type:"text",value:r.location,onChange:u=>s("location",u.target.value),required:!0})]}),d.jsxs("label",{children:["Icon (emoji):",d.jsx("input",{type:"text",value:r.icon,onChange:u=>s("icon",u.target.value),placeholder:"💼",required:!0})]}),d.jsxs("label",{children:["Type:",d.jsxs("select",{value:r.type,onChange:u=>s("type",u.target.value),children:[d.jsx("option",{value:"work",children:"Work"}),d.jsx("option",{value:"leadership",children:"Leadership"})]})]}),d.jsxs("label",{children:["Description (one point per line):",d.jsx("textarea",{value:((c=r.description)==null?void 0:c.join(`
`))||"",onChange:u=>o(u.target.value),rows:6,required:!0})]}),d.jsxs("div",{className:Ee.formButtons,children:[d.jsx("button",{type:"submit",children:"Save Experience"}),d.jsx("button",{type:"button",onClick:n,children:"Cancel"})]})]})]})})})}const xL="_container_1y7di_1",NL="_revealed_1y7di_11",DL="_inner_1y7di_16",bL="_eyebrow_1y7di_21",OL="_headingWrap_1y7di_28",VL="_h2_1y7di_34",LL="_underline_1y7di_44",ML="_addButton_1y7di_54",jL="_grid_1y7di_66",FL="_card_1y7di_74",UL="_dashed_1y7di_82",BL="_accentred_1y7di_86",$L="_accentblue_1y7di_91",zL="_accentyellow_1y7di_96",HL="_title_1y7di_101",qL="_org_1y7di_108",WL="_note_1y7di_114",GL="_adminControls_1y7di_120",KL="_editOverlay_1y7di_136",QL="_editForm_1y7di_152",YL="_formButtons_1y7di_195",He={container:xL,revealed:NL,inner:DL,eyebrow:bL,headingWrap:OL,h2:VL,underline:LL,addButton:ML,grid:jL,card:FL,dashed:UL,accentred:BL,accentblue:$L,accentyellow:zL,title:HL,org:qL,note:WL,adminControls:GL,editOverlay:KL,editForm:QL,formButtons:YL};function XL(){const{isAdmin:t}=Kr(),[e,n]=B.useState([]),[r,i]=B.useState(!1),[s,o]=B.useState(null),[l,c]=Di();B.useEffect(()=>{u()},[]);const u=async()=>{try{const b=(await Aa(bn(le,"achievements"))).docs.map(w=>({...w.data(),firestoreId:w.id}));n(b)}catch(x){console.error("Error loading achievements:",x),n([])}},p=()=>{o({title:"",org:"",note:"",dashed:!1}),i(!0)},m=x=>{o(x),i(!0)},g=async x=>{try{x.firestoreId?await $n(Ne(le,"achievements",x.firestoreId),x):await Pa(bn(le,"achievements"),x),await u(),i(!1),o(null)}catch(b){console.error("Error saving achievement:",b),alert("Failed to save achievement")}},S=async x=>{if(window.confirm("Delete this achievement?"))try{await Ca(Ne(le,"achievements",x)),await u()}catch(b){console.error("Error deleting achievement:",b)}},k=["red","blue","yellow","red"];return d.jsxs("section",{id:"achievements","aria-label":"Achievements",ref:l,className:`${He.container} ${c?He.revealed:""}`,children:[d.jsxs("div",{className:He.inner,children:[d.jsxs("div",{className:He.eyebrow,children:["ACHIEVEMENTS ",d.jsx(zn,{size:14,color:"var(--dc-red)"})]}),d.jsxs("div",{className:He.headingWrap,children:[d.jsx("h2",{className:He.h2,children:"Recognition along the way."}),d.jsx("div",{className:He.underline})]}),t&&d.jsx("button",{className:He.addButton,onClick:p,children:"+ Add Achievement"}),d.jsx("div",{className:He.grid,children:e.map((x,b)=>d.jsxs("div",{className:`${He.card} ${x.dashed?He.dashed:""} ${He["accent"+k[b%k.length]]}`,children:[d.jsx("h3",{className:He.title,children:x.title}),d.jsx("div",{className:He.org,children:x.org}),d.jsx("p",{className:He.note,children:x.note}),t&&d.jsxs("div",{className:He.adminControls,children:[d.jsx("button",{onClick:()=>m(x),children:"✏️ Edit"}),d.jsx("button",{onClick:()=>S(x.firestoreId),children:"🗑️ Delete"})]})]},x.id||x.firestoreId))})]}),r&&d.jsx(JL,{item:s,onSave:g,onCancel:()=>{i(!1),o(null)}})]})}function JL({item:t,onSave:e,onCancel:n}){const[r,i]=B.useState({...t}),s=(l,c)=>i(u=>({...u,[l]:c})),o=l=>{l.preventDefault(),e(r)};return d.jsx(Jn,{children:d.jsx("div",{className:He.editOverlay,onClick:n,children:d.jsxs("div",{className:He.editForm,onClick:l=>l.stopPropagation(),children:[d.jsx("h3",{children:t.firestoreId?"Edit Achievement":"Add Achievement"}),d.jsxs("form",{onSubmit:o,children:[d.jsxs("label",{children:["Title:",d.jsx("input",{type:"text",value:r.title,onChange:l=>s("title",l.target.value),required:!0})]}),d.jsxs("label",{children:["Organization:",d.jsx("input",{type:"text",value:r.org,onChange:l=>s("org",l.target.value),required:!0})]}),d.jsxs("label",{children:["Note:",d.jsx("textarea",{value:r.note,onChange:l=>s("note",l.target.value),rows:3,required:!0})]}),d.jsxs("label",{children:[d.jsx("input",{type:"checkbox",checked:!!r.dashed,onChange:l=>s("dashed",l.target.checked),style:{width:"auto",display:"inline-block",marginRight:"8px"}}),"Dashed border (mark as in-progress / TBD)"]}),d.jsxs("div",{className:He.formButtons,children:[d.jsx("button",{type:"submit",children:"Save"}),d.jsx("button",{type:"button",onClick:n,children:"Cancel"})]})]})]})})})}const ZL="_container_1ujal_1",eM="_collapsed_1ujal_7",tM="_expanded_1ujal_11",nM="_toggleButton_1ujal_15",rM="_toggleIcon_1ujal_35",iM="_toggleText_1ujal_40",sM="_toggleEmoji_1ujal_45",oM="_content_1ujal_49",aM="_expandContent_1ujal_1",lM="_header_1ujal_67",cM="_eyebrow_1ujal_72",uM="_headingWrap_1ujal_83",hM="_h2_1ujal_89",dM="_underline_1ujal_99",fM="_subtitle_1ujal_109",pM="_addButton_1ujal_116",mM="_categoryFilter_1ujal_128",gM="_categoryButton_1ujal_136",_M="_active_1ujal_149",yM="_categoryIcon_1ujal_154",vM="_entriesGrid_1ujal_158",wM="_emptyState_1ujal_164",EM="_emptyIcon_1ujal_170",Se={container:ZL,collapsed:eM,expanded:tM,toggleButton:nM,toggleIcon:rM,toggleText:iM,toggleEmoji:sM,content:oM,expandContent:aM,header:lM,eyebrow:cM,headingWrap:uM,h2:hM,underline:dM,subtitle:fM,addButton:pM,categoryFilter:mM,categoryButton:gM,active:_M,categoryIcon:yM,entriesGrid:vM,emptyState:wM,emptyIcon:EM},IM="_formOverlay_p2odx_1",TM="_formContainer_p2odx_14",SM="_formHeader_p2odx_25",AM="_closeButton_p2odx_39",CM="_form_p2odx_1",PM="_formGroup_p2odx_60",kM="_input_p2odx_73",RM="_textarea_p2odx_74",xM="_select_p2odx_75",NM="_buttonGroup_p2odx_112",DM="_submitButton_p2odx_118",bM="_cancelButton_p2odx_119",OM="_fileInput_p2odx_145",VM="_fileInputLabel_p2odx_149",LM="_fileInfo_p2odx_163",MM="_imagePreviewGrid_p2odx_169",jM="_imagePreview_p2odx_169",FM="_removeImageButton_p2odx_190",ve={formOverlay:IM,formContainer:TM,formHeader:SM,closeButton:AM,form:CM,formGroup:PM,input:kM,textarea:RM,select:xM,buttonGroup:NM,submitButton:DM,cancelButton:bM,fileInput:OM,fileInputLabel:VM,fileInfo:LM,imagePreviewGrid:MM,imagePreview:jM,removeImageButton:FM};function UM({entry:t,categories:e,onSubmit:n,onCancel:r}){var y,E;const[i,s]=B.useState({title:(t==null?void 0:t.title)||"",content:(t==null?void 0:t.content)||"",category:(t==null?void 0:t.category)||((y=e[0])==null?void 0:y.id)||"",source:(t==null?void 0:t.source)||"",tags:((E=t==null?void 0:t.tags)==null?void 0:E.join(", "))||"",images:(t==null?void 0:t.images)||[]}),[o,l]=B.useState(!1),[c,u]=B.useState([]),p="portfolio_uploads",m="dxcmdqs3j",g=R=>{const O=Array.from(R.target.files);u(O)},S=async R=>{const O=new FormData;O.append("file",R),O.append("upload_preset",p);try{const I=await(await fetch(`https://api.cloudinary.com/v1_1/${m}/image/upload`,{method:"POST",body:O})).json();return{url:I.secure_url,publicId:I.public_id}}catch(M){throw console.error("Error uploading to Cloudinary:",M),M}},k=async()=>{if(c.length===0)return[];l(!0);const R=c.map(O=>S(O));try{const O=await Promise.all(R);return l(!1),O}catch(O){return console.error("Error uploading images:",O),l(!1),alert("Failed to upload images. Please try again."),[]}},x=R=>{s(O=>({...O,images:O.images.filter((M,I)=>I!==R)}))},b=async R=>{R.preventDefault();const O=await k(),M={...i,images:[...i.images,...O],tags:i.tags.split(",").map(I=>I.trim()).filter(I=>I.length>0)};n(t?{...t,...M}:M)},w=R=>{const{name:O,value:M}=R.target;s(I=>({...I,[O]:M}))};return d.jsx(Jn,{children:d.jsx("div",{className:ve.formOverlay,onClick:r,children:d.jsxs("div",{className:ve.formContainer,onClick:R=>R.stopPropagation(),children:[d.jsxs("div",{className:ve.formHeader,children:[d.jsx("h3",{children:t?"Edit Entry":"New Entry"}),d.jsx("button",{className:ve.closeButton,onClick:r,children:"✕"})]}),d.jsxs("form",{onSubmit:b,className:ve.form,children:[d.jsxs("div",{className:ve.formGroup,children:[d.jsx("label",{children:"Category"}),d.jsx("select",{name:"category",value:i.category,onChange:w,required:!0,className:ve.select,children:e.map(R=>d.jsxs("option",{value:R.id,children:[R.icon," ",R.name]},R.id))})]}),d.jsxs("div",{className:ve.formGroup,children:[d.jsx("label",{children:"Title"}),d.jsx("input",{type:"text",name:"title",value:i.title,onChange:w,placeholder:"Entry title...",required:!0,className:ve.input})]}),d.jsxs("div",{className:ve.formGroup,children:[d.jsx("label",{children:"Content"}),d.jsx("textarea",{name:"content",value:i.content,onChange:w,placeholder:"Write your entry here...",required:!0,rows:8,className:ve.textarea})]}),d.jsxs("div",{className:ve.formGroup,children:[d.jsx("label",{children:"Source (Optional)"}),d.jsx("input",{type:"text",name:"source",value:i.source,onChange:w,placeholder:"e.g., Book title, Article URL, Movie name...",className:ve.input})]}),d.jsxs("div",{className:ve.formGroup,children:[d.jsx("label",{children:"Tags (Optional)"}),d.jsx("input",{type:"text",name:"tags",value:i.tags,onChange:w,placeholder:"Comma separated tags...",className:ve.input})]}),d.jsxs("div",{className:ve.formGroup,children:[d.jsx("label",{children:"Images (Optional)"}),i.images.length>0&&d.jsx("div",{className:ve.imagePreviewGrid,children:i.images.map((R,O)=>d.jsxs("div",{className:ve.imagePreview,children:[d.jsx("img",{src:R.url,alt:`Preview ${O+1}`}),d.jsx("button",{type:"button",className:ve.removeImageButton,onClick:()=>x(O),children:"✕"})]},O))}),d.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:g,className:ve.fileInput,id:"imageUpload"}),d.jsxs("label",{htmlFor:"imageUpload",className:ve.fileInputLabel,children:["📷 ",c.length>0?`${c.length} file(s) selected`:"Choose images"]}),c.length>0&&d.jsx("p",{className:ve.fileInfo,children:c.map(R=>R.name).join(", ")})]}),d.jsxs("div",{className:ve.buttonGroup,children:[d.jsx("button",{type:"submit",className:ve.submitButton,disabled:o,children:o?"Uploading...":t?"Update Entry":"Create Entry"}),d.jsx("button",{type:"button",onClick:r,className:ve.cancelButton,disabled:o,children:"Cancel"})]})]})]})})})}const BM="_card_szcfs_1",$M="_accentRed_szcfs_14",zM="_accentBlue_szcfs_19",HM="_accentYellow_szcfs_24",qM="_cardHeader_szcfs_38",WM="_categoryBadge_szcfs_45",GM="_categoryIcon_szcfs_56",KM="_adminActions_szcfs_60",QM="_pinButton_szcfs_65",YM="_editButton_szcfs_66",XM="_deleteButton_szcfs_67",JM="_pinned_szcfs_81",ZM="_title_szcfs_96",e4="_content_szcfs_104",t4="_source_szcfs_112",n4="_sourceLabel_szcfs_122",r4="_tags_szcfs_128",i4="_tag_szcfs_128",s4="_imagesPreview_szcfs_142",o4="_imageCount_szcfs_149",a4="_readMore_szcfs_154",l4="_footer_szcfs_160",c4="_date_szcfs_170",u4="_updated_szcfs_174",h4="_imagesGrid_szcfs_183",d4="_imageWrapper_szcfs_190",f4="_imageOverlay_szcfs_211",p4="_imageModal_szcfs_223",m4="_imageModalContent_szcfs_236",g4="_closeModal_szcfs_250",_4="_entryModal_szcfs_268",y4="_entryModalContent_szcfs_281",v4="_modalHeader_szcfs_300",w4="_modalTitle_szcfs_308",E4="_modalContent_szcfs_315",I4="_modalSource_szcfs_322",te={card:BM,accentRed:$M,accentBlue:zM,accentYellow:HM,cardHeader:qM,categoryBadge:WM,categoryIcon:GM,adminActions:KM,pinButton:QM,editButton:YM,deleteButton:XM,pinned:JM,title:ZM,content:e4,source:t4,sourceLabel:n4,tags:r4,tag:i4,imagesPreview:s4,imageCount:o4,readMore:a4,footer:l4,date:c4,updated:u4,imagesGrid:h4,imageWrapper:d4,imageOverlay:f4,imageModal:p4,imageModalContent:m4,closeModal:g4,entryModal:_4,entryModalContent:y4,modalHeader:v4,modalTitle:w4,modalContent:E4,modalSource:I4},xy=["accentRed","accentBlue","accentYellow"];function T4({entry:t,category:e,index:n=0,isAdmin:r,onEdit:i,onDelete:s,onTogglePin:o}){const[l,c]=B.useState(!1),[u,p]=B.useState(null),[m,g]=B.useState(!1),S=E=>new Date(E).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),k=(E,R)=>{R.stopPropagation(),p(E),c(!0)},x=()=>{c(!1),p(null)},b=(E,R=200)=>E.length<=R?E:E.slice(0,R)+"...",w=E=>{E.target.closest(`.${te.adminActions}`)||g(!0)},y=te[xy[n%xy.length]];return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:`${te.card} ${y}`,"data-pinned":t.isPinned||!1,onClick:w,children:[d.jsxs("div",{className:te.cardHeader,children:[d.jsxs("div",{className:te.categoryBadge,children:[d.jsx("span",{className:te.categoryIcon,children:e==null?void 0:e.icon}),d.jsx("span",{children:e==null?void 0:e.name})]}),r&&d.jsxs("div",{className:te.adminActions,children:[d.jsx("button",{className:`${te.pinButton} ${t.isPinned?te.pinned:""}`,onClick:E=>{E.stopPropagation(),o()},title:t.isPinned?"Unpin entry":"Pin entry",children:t.isPinned?"📌":"📍"}),d.jsx("button",{className:te.editButton,onClick:E=>{E.stopPropagation(),i()},title:"Edit entry",children:"✏️"}),d.jsx("button",{className:te.deleteButton,onClick:E=>{E.stopPropagation(),s()},title:"Delete entry",children:"🗑️"})]})]}),d.jsx("h3",{className:te.title,children:t.title}),d.jsx("div",{className:te.content,children:b(t.content)}),t.images&&t.images.length>0&&d.jsx("div",{className:te.imagesGrid,children:t.images.slice(0,2).map((E,R)=>d.jsxs("div",{className:te.imageWrapper,onClick:O=>{O.stopPropagation(),k(E.url,O)},children:[d.jsx("img",{src:E.url,alt:`${t.title} - ${R+1}`}),R===1&&t.images.length>2&&d.jsxs("div",{className:te.imageOverlay,children:["+",t.images.length-2," more"]})]},R))}),t.source&&d.jsxs("div",{className:te.source,children:[d.jsx("span",{className:te.sourceLabel,children:"Source:"})," ",t.source]}),d.jsxs("div",{className:te.footer,children:[d.jsx("span",{className:te.date,children:S(t.createdAt)}),t.updatedAt!==t.createdAt&&d.jsx("span",{className:te.updated,children:"Updated"}),d.jsx("span",{className:te.readMore,children:"Click to read more →"})]})]}),m&&d.jsx(Jn,{children:d.jsx("div",{className:te.entryModal,onClick:()=>g(!1),children:d.jsxs("div",{className:te.entryModalContent,onClick:E=>E.stopPropagation(),children:[d.jsx("button",{className:te.closeModal,onClick:()=>g(!1),children:"✕"}),d.jsxs("div",{className:te.modalHeader,children:[d.jsxs("div",{className:te.categoryBadge,children:[d.jsx("span",{className:te.categoryIcon,children:e==null?void 0:e.icon}),d.jsx("span",{children:e==null?void 0:e.name})]}),d.jsx("span",{className:te.date,children:S(t.createdAt)})]}),d.jsx("h2",{className:te.modalTitle,children:t.title}),d.jsx("div",{className:te.modalContent,children:t.content}),t.images&&t.images.length>0&&d.jsx("div",{className:te.imagesGrid,children:t.images.map((E,R)=>d.jsx("div",{className:te.imageWrapper,onClick:O=>k(E.url,O),children:d.jsx("img",{src:E.url,alt:`${t.title} - ${R+1}`})},R))}),t.source&&d.jsxs("div",{className:te.modalSource,children:[d.jsx("span",{className:te.sourceLabel,children:"Source:"})," ",t.source]}),t.tags&&t.tags.length>0&&d.jsx("div",{className:te.tags,children:t.tags.map((E,R)=>d.jsxs("span",{className:te.tag,children:["#",E]},R))})]})})}),l&&d.jsx(Jn,{children:d.jsx("div",{className:te.imageModal,onClick:x,children:d.jsxs("div",{className:te.imageModalContent,children:[d.jsx("button",{className:te.closeModal,onClick:x,children:"✕"}),d.jsx("img",{src:u,alt:"Full size"})]})})})]})}function S4(){const{isAdmin:t}=Kr(),[e,n]=B.useState([]),[r,i]=B.useState("all"),[s,o]=B.useState(!1),[l,c]=B.useState(null),[u,p]=B.useState(!1),[m,g]=Di(),S=[{id:"all",name:"All Entries",icon:"📚"},{id:"quotes",name:"Quotes & Dialogues",icon:"💬"},{id:"articles",name:"Article Notes",icon:"📝"},{id:"books",name:"Book Highlights",icon:"📖"},{id:"thoughts",name:"Personal Thoughts",icon:"💭"}];B.useEffect(()=>{k()},[]);const k=async()=>{try{const O=n2(bn(le,"entries"),r2("createdAt","desc")),I=(await Aa(O)).docs.map(v=>{var T,C,P,N,A,me;return{id:v.id,...v.data(),createdAt:((P=(C=(T=v.data().createdAt)==null?void 0:T.toDate)==null?void 0:C.call(T))==null?void 0:P.toISOString())||new Date().toISOString(),updatedAt:((me=(A=(N=v.data().updatedAt)==null?void 0:N.toDate)==null?void 0:A.call(N))==null?void 0:me.toISOString())||new Date().toISOString()}});I.sort((v,T)=>v.isPinned&&!T.isPinned?-1:!v.isPinned&&T.isPinned?1:new Date(T.createdAt)-new Date(v.createdAt)),n(I)}catch(O){console.error("Error loading entries:",O)}},x=async O=>{try{await Pa(bn(le,"entries"),{...O,createdAt:he.now(),updatedAt:he.now()}),await k(),o(!1)}catch(M){console.error("Error adding entry:",M),alert("Failed to add entry. Please try again.")}},b=async O=>{try{const M=Ne(le,"entries",O.id);await $n(M,{...O,updatedAt:he.now()}),await k(),c(null),o(!1)}catch(M){console.error("Error updating entry:",M),alert("Failed to update entry. Please try again.")}},w=async O=>{if(window.confirm("Are you sure you want to delete this entry?"))try{await Ca(Ne(le,"entries",O)),await k()}catch(M){console.error("Error deleting entry:",M),alert("Failed to delete entry. Please try again.")}},y=async O=>{try{const M=Ne(le,"entries",O.id);await $n(M,{isPinned:!O.isPinned}),await k()}catch(M){console.error("Error toggling pin:",M),alert("Failed to toggle pin")}},E=O=>{c(O),o(!0)},R=r==="all"?e:e.filter(O=>O.category===r);return d.jsxs("section",{id:"commonplace",ref:m,className:`${Se.container} ${u?Se.expanded:Se.collapsed} ${g?Se.revealed:""}`,children:[d.jsxs("button",{className:Se.toggleButton,onClick:()=>p(!u),"aria-label":u?"Hide Commonplace":"Show Commonplace","data-cursor-hover":"true",children:[d.jsx("span",{className:Se.toggleIcon,children:u?"▼":"▶"}),d.jsxs("span",{className:Se.toggleText,children:[u?"Hide":"Show"," Commonplace"]}),d.jsx("span",{className:Se.toggleEmoji,children:"📚"})]}),u&&d.jsxs("div",{className:Se.content,children:[d.jsxs("div",{className:Se.header,children:[d.jsxs("div",{className:Se.eyebrow,children:["COMMONPLACE ",d.jsx(zn,{size:14,color:"var(--dc-red)"})]}),d.jsxs("div",{className:Se.headingWrap,children:[d.jsx("h2",{className:Se.h2,children:"Notes worth keeping."}),d.jsx("div",{className:Se.underline})]}),d.jsx("p",{className:Se.subtitle,children:"A collection of interesting quotes, notes, and thoughts."})]}),t&&d.jsx("button",{className:Se.addButton,onClick:()=>{c(null),o(!0)},children:"+ Add New Entry"}),d.jsx("div",{className:Se.categoryFilter,children:S.map(O=>d.jsxs("button",{className:`${Se.categoryButton} ${r===O.id?Se.active:""}`,onClick:()=>i(O.id),children:[d.jsx("span",{className:Se.categoryIcon,children:O.icon}),O.name]},O.id))}),s&&d.jsx(UM,{entry:l,categories:S.filter(O=>O.id!=="all"),onSubmit:l?b:x,onCancel:()=>{o(!1),c(null)}}),d.jsx("div",{className:Se.entriesGrid,children:R.length===0?d.jsxs("div",{className:Se.emptyState,children:[d.jsx("span",{className:Se.emptyIcon,children:"📭"}),d.jsxs("p",{children:["No entries yet. ",t&&"Start by adding your first entry!"]})]}):R.map((O,M)=>d.jsx(T4,{entry:O,index:M,category:S.find(I=>I.id===O.category),isAdmin:t,onEdit:()=>E(O),onDelete:()=>w(O.id),onTogglePin:()=>y(O)},O.id))})]})]})}const A4="_wrap_91tw5_1",C4="_fill_91tw5_11",Ny={wrap:A4,fill:C4};function P4(){const[t,e]=B.useState(0);return B.useEffect(()=>{const n=()=>{const r=window.innerHeight,i=document.documentElement.scrollHeight,s=window.scrollY,o=i-r,l=o>0?s/o*100:0;e(Math.min(l,100))};return window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]),d.jsx("div",{className:Ny.wrap,children:d.jsx("div",{className:Ny.fill,style:{width:`${t}%`}})})}function k4(){return d.jsxs(RD,{children:[d.jsx(JD,{}),d.jsx(P4,{}),d.jsx(fb,{}),d.jsxs("main",{id:"main",style:{position:"relative",zIndex:1},children:[d.jsx(lO,{}),d.jsx(LO,{}),d.jsx(nL,{}),d.jsx(DV,{}),d.jsx(kL,{}),d.jsx(XL,{}),d.jsx(S4,{}),d.jsx(Pb,{})]}),d.jsx(Mb,{}),d.jsx(BD,{})]})}vh.createRoot(document.getElementById("root")).render(d.jsx(FI.StrictMode,{children:d.jsx($D,{children:d.jsx(k4,{})})}));
