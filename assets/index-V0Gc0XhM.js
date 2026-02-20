(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function rE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var m_={exports:{}},cc={},g_={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zo=Symbol.for("react.element"),iE=Symbol.for("react.portal"),sE=Symbol.for("react.fragment"),oE=Symbol.for("react.strict_mode"),aE=Symbol.for("react.profiler"),lE=Symbol.for("react.provider"),cE=Symbol.for("react.context"),uE=Symbol.for("react.forward_ref"),hE=Symbol.for("react.suspense"),dE=Symbol.for("react.memo"),fE=Symbol.for("react.lazy"),Em=Symbol.iterator;function pE(t){return t===null||typeof t!="object"?null:(t=Em&&t[Em]||t["@@iterator"],typeof t=="function"?t:null)}var __={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y_=Object.assign,v_={};function gs(t,e,n){this.props=t,this.context=e,this.refs=v_,this.updater=n||__}gs.prototype.isReactComponent={};gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function w_(){}w_.prototype=gs.prototype;function Pd(t,e,n){this.props=t,this.context=e,this.refs=v_,this.updater=n||__}var Rd=Pd.prototype=new w_;Rd.constructor=Pd;y_(Rd,gs.prototype);Rd.isPureReactComponent=!0;var Im=Array.isArray,E_=Object.prototype.hasOwnProperty,xd={current:null},I_={key:!0,ref:!0,__self:!0,__source:!0};function T_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)E_.call(e,r)&&!I_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Zo,type:t,key:s,ref:o,props:i,_owner:xd.current}}function mE(t,e){return{$$typeof:Zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zo}function gE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Tm=/\/+/g;function wu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gE(""+t.key):e.toString(36)}function Ya(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zo:case iE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wu(o,0):r,Im(i)?(n="",t!=null&&(n=t.replace(Tm,"$&/")+"/"),Ya(i,e,n,"",function(u){return u})):i!=null&&(Nd(i)&&(i=mE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Tm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Im(t))for(var l=0;l<t.length;l++){s=t[l];var c=r+wu(s,l);o+=Ya(s,e,n,c,i)}else if(c=pE(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=r+wu(s,l++),o+=Ya(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ka(t,e,n){if(t==null)return t;var r=[],i=0;return Ya(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _E(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},Xa={transition:null},yE={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:Xa,ReactCurrentOwner:xd};function S_(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:ka,forEach:function(t,e,n){ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ka(t,function(){e++}),e},toArray:function(t){return ka(t,function(e){return e})||[]},only:function(t){if(!Nd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=gs;te.Fragment=sE;te.Profiler=aE;te.PureComponent=Pd;te.StrictMode=oE;te.Suspense=hE;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yE;te.act=S_;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=y_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)E_.call(e,c)&&!I_.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Zo,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:cE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lE,_context:t},t.Consumer=t};te.createElement=T_;te.createFactory=function(t){var e=T_.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:uE,render:t}};te.isValidElement=Nd;te.lazy=function(t){return{$$typeof:fE,_payload:{_status:-1,_result:t},_init:_E}};te.memo=function(t,e){return{$$typeof:dE,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Xa.transition;Xa.transition={};try{t()}finally{Xa.transition=e}};te.unstable_act=S_;te.useCallback=function(t,e){return pt.current.useCallback(t,e)};te.useContext=function(t){return pt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};te.useEffect=function(t,e){return pt.current.useEffect(t,e)};te.useId=function(){return pt.current.useId()};te.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return pt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};te.useRef=function(t){return pt.current.useRef(t)};te.useState=function(t){return pt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return pt.current.useTransition()};te.version="18.3.1";g_.exports=te;var q=g_.exports;const vE=rE(q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wE=q,EE=Symbol.for("react.element"),IE=Symbol.for("react.fragment"),TE=Object.prototype.hasOwnProperty,SE=wE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,AE={key:!0,ref:!0,__self:!0,__source:!0};function A_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)TE.call(e,r)&&!AE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:EE,type:t,key:s,ref:o,props:i,_owner:SE.current}}cc.Fragment=IE;cc.jsx=A_;cc.jsxs=A_;m_.exports=cc;var p=m_.exports,ah={},C_={exports:{}},Nt={},k_={exports:{}},P_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var J=z.length;z.push(Q);e:for(;0<J;){var ye=J-1>>>1,Ce=z[ye];if(0<i(Ce,Q))z[ye]=Q,z[J]=Ce,J=ye;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],J=z.pop();if(J!==Q){z[0]=J;e:for(var ye=0,Ce=z.length,jr=Ce>>>1;ye<jr;){var Vt=2*(ye+1)-1,Fr=z[Vt],qt=Vt+1,$n=z[qt];if(0>i(Fr,J))qt<Ce&&0>i($n,Fr)?(z[ye]=$n,z[qt]=J,ye=qt):(z[ye]=Fr,z[Vt]=J,ye=Vt);else if(qt<Ce&&0>i($n,J))z[ye]=$n,z[qt]=J,ye=qt;else break e}}return Q}function i(z,Q){var J=z.sortIndex-Q.sortIndex;return J!==0?J:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],f=1,m=null,g=3,I=!1,R=!1,P=!1,V=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var Q=n(u);Q!==null;){if(Q.callback===null)r(u);else if(Q.startTime<=z)r(u),Q.sortIndex=Q.expirationTime,e(c,Q);else break;Q=n(u)}}function D(z){if(P=!1,S(z),!R)if(n(c)!==null)R=!0,Ps(b);else{var Q=n(u);Q!==null&&Rs(D,Q.startTime-z)}}function b(z,Q){R=!1,P&&(P=!1,E(y),y=-1),I=!0;var J=g;try{for(S(Q),m=n(c);m!==null&&(!(m.expirationTime>Q)||z&&!k());){var ye=m.callback;if(typeof ye=="function"){m.callback=null,g=m.priorityLevel;var Ce=ye(m.expirationTime<=Q);Q=t.unstable_now(),typeof Ce=="function"?m.callback=Ce:m===n(c)&&r(c),S(Q)}else r(c);m=n(c)}if(m!==null)var jr=!0;else{var Vt=n(u);Vt!==null&&Rs(D,Vt.startTime-Q),jr=!1}return jr}finally{m=null,g=J,I=!1}}var j=!1,w=null,y=-1,A=5,T=-1;function k(){return!(t.unstable_now()-T<A)}function x(){if(w!==null){var z=t.unstable_now();T=z;var Q=!0;try{Q=w(!0,z)}finally{Q?C():(j=!1,w=null)}}else j=!1}var C;if(typeof v=="function")C=function(){v(x)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,An=Ge.port2;Ge.port1.onmessage=x,C=function(){An.postMessage(null)}}else C=function(){V(x,0)};function Ps(z){w=z,j||(j=!0,C())}function Rs(z,Q){y=V(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){R||I||(R=!0,Ps(b))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var J=g;g=Q;try{return z()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=g;g=z;try{return Q()}finally{g=J}},t.unstable_scheduleCallback=function(z,Q,J){var ye=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ye+J:ye):J=ye,z){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=J+Ce,z={id:f++,callback:Q,priorityLevel:z,startTime:J,expirationTime:Ce,sortIndex:-1},J>ye?(z.sortIndex=J,e(u,z),n(c)===null&&z===n(u)&&(P?(E(y),y=-1):P=!0,Rs(D,J-ye))):(z.sortIndex=Ce,e(c,z),R||I||(R=!0,Ps(b))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var Q=g;return function(){var J=g;g=Q;try{return z.apply(this,arguments)}finally{g=J}}}})(P_);k_.exports=P_;var CE=k_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE=q,xt=CE;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R_=new Set,Co={};function fi(t,e){ts(t,e),ts(t+"Capture",e)}function ts(t,e){for(Co[t]=e,t=0;t<e.length;t++)R_.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lh=Object.prototype.hasOwnProperty,PE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sm={},Am={};function RE(t){return lh.call(Am,t)?!0:lh.call(Sm,t)?!1:PE.test(t)?Am[t]=!0:(Sm[t]=!0,!1)}function xE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function NE(t,e,n,r){if(e===null||typeof e>"u"||xE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dd=/[\-:]([a-z])/g;function Vd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dd,Vd);Je[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dd,Vd);Je[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dd,Vd);Je[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Od(t,e,n,r){var i=Je.hasOwnProperty(e)?Je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(NE(e,n,i,r)&&(n=null),r||i===null?RE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zn=kE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pa=Symbol.for("react.element"),xi=Symbol.for("react.portal"),Ni=Symbol.for("react.fragment"),Ld=Symbol.for("react.strict_mode"),ch=Symbol.for("react.profiler"),x_=Symbol.for("react.provider"),N_=Symbol.for("react.context"),Md=Symbol.for("react.forward_ref"),uh=Symbol.for("react.suspense"),hh=Symbol.for("react.suspense_list"),bd=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),D_=Symbol.for("react.offscreen"),Cm=Symbol.iterator;function Ws(t){return t===null||typeof t!="object"?null:(t=Cm&&t[Cm]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,Eu;function eo(t){if(Eu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Eu=e&&e[1]||""}return`
`+Eu+t}var Iu=!1;function Tu(t,e){if(!t||Iu)return"";Iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{Iu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?eo(t):""}function DE(t){switch(t.tag){case 5:return eo(t.type);case 16:return eo("Lazy");case 13:return eo("Suspense");case 19:return eo("SuspenseList");case 0:case 2:case 15:return t=Tu(t.type,!1),t;case 11:return t=Tu(t.type.render,!1),t;case 1:return t=Tu(t.type,!0),t;default:return""}}function dh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ni:return"Fragment";case xi:return"Portal";case ch:return"Profiler";case Ld:return"StrictMode";case uh:return"Suspense";case hh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N_:return(t.displayName||"Context")+".Consumer";case x_:return(t._context.displayName||"Context")+".Provider";case Md:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bd:return e=t.displayName||null,e!==null?e:dh(t.type)||"Memo";case Jn:e=t._payload,t=t._init;try{return dh(t(e))}catch{}}return null}function VE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dh(e);case 8:return e===Ld?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function V_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function OE(t){var e=V_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=OE(t))}function O_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=V_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fh(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function km(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function L_(t,e){e=e.checked,e!=null&&Od(t,"checked",e,!1)}function ph(t,e){L_(t,e);var n=Ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mh(t,e.type,n):e.hasOwnProperty("defaultValue")&&mh(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mh(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var to=Array.isArray;function $i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function gh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(to(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function M_(t,e){var n=Ir(e.value),r=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function b_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _h(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?b_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,j_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ko(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},LE=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(t){LE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),uo[e]=uo[t]})});function F_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||uo.hasOwnProperty(t)&&uo[t]?(""+e).trim():e+"px"}function U_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=F_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ME=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yh(t,e){if(e){if(ME[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function vh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wh=null;function jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Eh=null,Hi=null,qi=null;function Nm(t){if(t=na(t)){if(typeof Eh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=pc(e),Eh(t.stateNode,t.type,e))}}function B_(t){Hi?qi?qi.push(t):qi=[t]:Hi=t}function z_(){if(Hi){var t=Hi,e=qi;if(qi=Hi=null,Nm(t),e)for(t=0;t<e.length;t++)Nm(e[t])}}function $_(t,e){return t(e)}function H_(){}var Su=!1;function q_(t,e,n){if(Su)return t(e,n);Su=!0;try{return $_(t,e,n)}finally{Su=!1,(Hi!==null||qi!==null)&&(H_(),z_())}}function Po(t,e){var n=t.stateNode;if(n===null)return null;var r=pc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Ih=!1;if(On)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Ih=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Ih=!1}function bE(t,e,n,r,i,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var ho=!1,vl=null,wl=!1,Th=null,jE={onError:function(t){ho=!0,vl=t}};function FE(t,e,n,r,i,s,o,l,c){ho=!1,vl=null,bE.apply(jE,arguments)}function UE(t,e,n,r,i,s,o,l,c){if(FE.apply(this,arguments),ho){if(ho){var u=vl;ho=!1,vl=null}else throw Error(F(198));wl||(wl=!0,Th=u)}}function pi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function W_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dm(t){if(pi(t)!==t)throw Error(F(188))}function BE(t){var e=t.alternate;if(!e){if(e=pi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Dm(i),t;if(s===r)return Dm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function G_(t){return t=BE(t),t!==null?K_(t):null}function K_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=K_(t);if(e!==null)return e;t=t.sibling}return null}var Q_=xt.unstable_scheduleCallback,Vm=xt.unstable_cancelCallback,zE=xt.unstable_shouldYield,$E=xt.unstable_requestPaint,Re=xt.unstable_now,HE=xt.unstable_getCurrentPriorityLevel,Fd=xt.unstable_ImmediatePriority,Y_=xt.unstable_UserBlockingPriority,El=xt.unstable_NormalPriority,qE=xt.unstable_LowPriority,X_=xt.unstable_IdlePriority,uc=null,mn=null;function WE(t){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(uc,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:QE,GE=Math.log,KE=Math.LN2;function QE(t){return t>>>=0,t===0?32:31-(GE(t)/KE|0)|0}var Na=64,Da=4194304;function no(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=no(l):(s&=o,s!==0&&(r=no(s)))}else o=n&~i,o!==0?r=no(o):s!==0&&(r=no(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function YE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function XE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=YE(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function Sh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function J_(){var t=Na;return Na<<=1,!(Na&4194240)&&(Na=64),t}function Au(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function JE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ud(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function Z_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ey,Bd,ty,ny,ry,Ah=!1,Va=[],cr=null,ur=null,hr=null,Ro=new Map,xo=new Map,er=[],ZE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Om(t,e){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(e.pointerId)}}function Ks(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=na(e),e!==null&&Bd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function eI(t,e,n,r,i){switch(e){case"focusin":return cr=Ks(cr,t,e,n,r,i),!0;case"dragenter":return ur=Ks(ur,t,e,n,r,i),!0;case"mouseover":return hr=Ks(hr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ro.set(s,Ks(Ro.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xo.set(s,Ks(xo.get(s)||null,t,e,n,r,i)),!0}return!1}function iy(t){var e=Qr(t.target);if(e!==null){var n=pi(e);if(n!==null){if(e=n.tag,e===13){if(e=W_(n),e!==null){t.blockedOn=e,ry(t.priority,function(){ty(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ja(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ch(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);wh=r,n.target.dispatchEvent(r),wh=null}else return e=na(n),e!==null&&Bd(e),t.blockedOn=n,!1;e.shift()}return!0}function Lm(t,e,n){Ja(t)&&n.delete(e)}function tI(){Ah=!1,cr!==null&&Ja(cr)&&(cr=null),ur!==null&&Ja(ur)&&(ur=null),hr!==null&&Ja(hr)&&(hr=null),Ro.forEach(Lm),xo.forEach(Lm)}function Qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Ah||(Ah=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,tI)))}function No(t){function e(i){return Qs(i,t)}if(0<Va.length){Qs(Va[0],t);for(var n=1;n<Va.length;n++){var r=Va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(cr!==null&&Qs(cr,t),ur!==null&&Qs(ur,t),hr!==null&&Qs(hr,t),Ro.forEach(e),xo.forEach(e),n=0;n<er.length;n++)r=er[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)iy(n),n.blockedOn===null&&er.shift()}var Wi=zn.ReactCurrentBatchConfig,Tl=!0;function nI(t,e,n,r){var i=le,s=Wi.transition;Wi.transition=null;try{le=1,zd(t,e,n,r)}finally{le=i,Wi.transition=s}}function rI(t,e,n,r){var i=le,s=Wi.transition;Wi.transition=null;try{le=4,zd(t,e,n,r)}finally{le=i,Wi.transition=s}}function zd(t,e,n,r){if(Tl){var i=Ch(t,e,n,r);if(i===null)Lu(t,e,r,Sl,n),Om(t,r);else if(eI(i,t,e,n,r))r.stopPropagation();else if(Om(t,r),e&4&&-1<ZE.indexOf(t)){for(;i!==null;){var s=na(i);if(s!==null&&ey(s),s=Ch(t,e,n,r),s===null&&Lu(t,e,r,Sl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Lu(t,e,r,null,n)}}var Sl=null;function Ch(t,e,n,r){if(Sl=null,t=jd(r),t=Qr(t),t!==null)if(e=pi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=W_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Sl=t,null}function sy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(HE()){case Fd:return 1;case Y_:return 4;case El:case qE:return 16;case X_:return 536870912;default:return 16}default:return 16}}var or=null,$d=null,Za=null;function oy(){if(Za)return Za;var t,e=$d,n=e.length,r,i="value"in or?or.value:or.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Za=i.slice(t,1<r?1-r:void 0)}function el(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oa(){return!0}function Mm(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oa:Mm,this.isPropagationStopped=Mm,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),e}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hd=Dt(_s),ta=Ie({},_s,{view:0,detail:0}),iI=Dt(ta),Cu,ku,Ys,hc=Ie({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ys&&(Ys&&t.type==="mousemove"?(Cu=t.screenX-Ys.screenX,ku=t.screenY-Ys.screenY):ku=Cu=0,Ys=t),Cu)},movementY:function(t){return"movementY"in t?t.movementY:ku}}),bm=Dt(hc),sI=Ie({},hc,{dataTransfer:0}),oI=Dt(sI),aI=Ie({},ta,{relatedTarget:0}),Pu=Dt(aI),lI=Ie({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),cI=Dt(lI),uI=Ie({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hI=Dt(uI),dI=Ie({},_s,{data:0}),jm=Dt(dI),fI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mI[t])?!!e[t]:!1}function qd(){return gI}var _I=Ie({},ta,{key:function(t){if(t.key){var e=fI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=el(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qd,charCode:function(t){return t.type==="keypress"?el(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?el(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yI=Dt(_I),vI=Ie({},hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fm=Dt(vI),wI=Ie({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qd}),EI=Dt(wI),II=Ie({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),TI=Dt(II),SI=Ie({},hc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),AI=Dt(SI),CI=[9,13,27,32],Wd=On&&"CompositionEvent"in window,fo=null;On&&"documentMode"in document&&(fo=document.documentMode);var kI=On&&"TextEvent"in window&&!fo,ay=On&&(!Wd||fo&&8<fo&&11>=fo),Um=" ",Bm=!1;function ly(t,e){switch(t){case"keyup":return CI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Di=!1;function PI(t,e){switch(t){case"compositionend":return cy(e);case"keypress":return e.which!==32?null:(Bm=!0,Um);case"textInput":return t=e.data,t===Um&&Bm?null:t;default:return null}}function RI(t,e){if(Di)return t==="compositionend"||!Wd&&ly(t,e)?(t=oy(),Za=$d=or=null,Di=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ay&&e.locale!=="ko"?null:e.data;default:return null}}var xI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xI[t.type]:e==="textarea"}function uy(t,e,n,r){B_(r),e=Al(e,"onChange"),0<e.length&&(n=new Hd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var po=null,Do=null;function NI(t){Ey(t,0)}function dc(t){var e=Li(t);if(O_(e))return t}function DI(t,e){if(t==="change")return e}var hy=!1;if(On){var Ru;if(On){var xu="oninput"in document;if(!xu){var $m=document.createElement("div");$m.setAttribute("oninput","return;"),xu=typeof $m.oninput=="function"}Ru=xu}else Ru=!1;hy=Ru&&(!document.documentMode||9<document.documentMode)}function Hm(){po&&(po.detachEvent("onpropertychange",dy),Do=po=null)}function dy(t){if(t.propertyName==="value"&&dc(Do)){var e=[];uy(e,Do,t,jd(t)),q_(NI,e)}}function VI(t,e,n){t==="focusin"?(Hm(),po=e,Do=n,po.attachEvent("onpropertychange",dy)):t==="focusout"&&Hm()}function OI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dc(Do)}function LI(t,e){if(t==="click")return dc(e)}function MI(t,e){if(t==="input"||t==="change")return dc(e)}function bI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:bI;function Vo(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lh.call(e,i)||!en(t[i],e[i]))return!1}return!0}function qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wm(t,e){var n=qm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qm(n)}}function fy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function py(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jI(t){var e=py(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fy(n.ownerDocument.documentElement,n)){if(r!==null&&Gd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Wm(n,s);var o=Wm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var FI=On&&"documentMode"in document&&11>=document.documentMode,Vi=null,kh=null,mo=null,Ph=!1;function Gm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ph||Vi==null||Vi!==yl(r)||(r=Vi,"selectionStart"in r&&Gd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&Vo(mo,r)||(mo=r,r=Al(kh,"onSelect"),0<r.length&&(e=new Hd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vi)))}function La(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Oi={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionend:La("Transition","TransitionEnd")},Nu={},my={};On&&(my=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function fc(t){if(Nu[t])return Nu[t];if(!Oi[t])return t;var e=Oi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in my)return Nu[t]=e[n];return t}var gy=fc("animationend"),_y=fc("animationiteration"),yy=fc("animationstart"),vy=fc("transitionend"),wy=new Map,Km="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){wy.set(t,e),fi(e,[t])}for(var Du=0;Du<Km.length;Du++){var Vu=Km[Du],UI=Vu.toLowerCase(),BI=Vu[0].toUpperCase()+Vu.slice(1);Dr(UI,"on"+BI)}Dr(gy,"onAnimationEnd");Dr(_y,"onAnimationIteration");Dr(yy,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(vy,"onTransitionEnd");ts("onMouseEnter",["mouseout","mouseover"]);ts("onMouseLeave",["mouseout","mouseover"]);ts("onPointerEnter",["pointerout","pointerover"]);ts("onPointerLeave",["pointerout","pointerover"]);fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zI=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function Qm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,UE(r,e,void 0,t),t.currentTarget=null}function Ey(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;Qm(i,l,u),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;Qm(i,l,u),s=c}}}if(wl)throw t=Th,wl=!1,Th=null,t}function ge(t,e){var n=e[Vh];n===void 0&&(n=e[Vh]=new Set);var r=t+"__bubble";n.has(r)||(Iy(e,t,2,!1),n.add(r))}function Ou(t,e,n){var r=0;e&&(r|=4),Iy(n,t,r,e)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function Oo(t){if(!t[Ma]){t[Ma]=!0,R_.forEach(function(n){n!=="selectionchange"&&(zI.has(n)||Ou(n,!1,t),Ou(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ma]||(e[Ma]=!0,Ou("selectionchange",!1,e))}}function Iy(t,e,n,r){switch(sy(e)){case 1:var i=nI;break;case 4:i=rI;break;default:i=zd}n=i.bind(null,e,n,t),i=void 0,!Ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Lu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Qr(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}q_(function(){var u=s,f=jd(n),m=[];e:{var g=wy.get(t);if(g!==void 0){var I=Hd,R=t;switch(t){case"keypress":if(el(n)===0)break e;case"keydown":case"keyup":I=yI;break;case"focusin":R="focus",I=Pu;break;case"focusout":R="blur",I=Pu;break;case"beforeblur":case"afterblur":I=Pu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=oI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=EI;break;case gy:case _y:case yy:I=cI;break;case vy:I=TI;break;case"scroll":I=iI;break;case"wheel":I=AI;break;case"copy":case"cut":case"paste":I=hI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Fm}var P=(e&4)!==0,V=!P&&t==="scroll",E=P?g!==null?g+"Capture":null:g;P=[];for(var v=u,S;v!==null;){S=v;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,E!==null&&(D=Po(v,E),D!=null&&P.push(Lo(v,D,S)))),V)break;v=v.return}0<P.length&&(g=new I(g,R,null,n,f),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",g&&n!==wh&&(R=n.relatedTarget||n.fromElement)&&(Qr(R)||R[Ln]))break e;if((I||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,I?(R=n.relatedTarget||n.toElement,I=u,R=R?Qr(R):null,R!==null&&(V=pi(R),R!==V||R.tag!==5&&R.tag!==6)&&(R=null)):(I=null,R=u),I!==R)){if(P=bm,D="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=Fm,D="onPointerLeave",E="onPointerEnter",v="pointer"),V=I==null?g:Li(I),S=R==null?g:Li(R),g=new P(D,v+"leave",I,n,f),g.target=V,g.relatedTarget=S,D=null,Qr(f)===u&&(P=new P(E,v+"enter",R,n,f),P.target=S,P.relatedTarget=V,D=P),V=D,I&&R)t:{for(P=I,E=R,v=0,S=P;S;S=Ai(S))v++;for(S=0,D=E;D;D=Ai(D))S++;for(;0<v-S;)P=Ai(P),v--;for(;0<S-v;)E=Ai(E),S--;for(;v--;){if(P===E||E!==null&&P===E.alternate)break t;P=Ai(P),E=Ai(E)}P=null}else P=null;I!==null&&Ym(m,g,I,P,!1),R!==null&&V!==null&&Ym(m,V,R,P,!0)}}e:{if(g=u?Li(u):window,I=g.nodeName&&g.nodeName.toLowerCase(),I==="select"||I==="input"&&g.type==="file")var b=DI;else if(zm(g))if(hy)b=MI;else{b=OI;var j=VI}else(I=g.nodeName)&&I.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=LI);if(b&&(b=b(t,u))){uy(m,b,n,f);break e}j&&j(t,g,u),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&mh(g,"number",g.value)}switch(j=u?Li(u):window,t){case"focusin":(zm(j)||j.contentEditable==="true")&&(Vi=j,kh=u,mo=null);break;case"focusout":mo=kh=Vi=null;break;case"mousedown":Ph=!0;break;case"contextmenu":case"mouseup":case"dragend":Ph=!1,Gm(m,n,f);break;case"selectionchange":if(FI)break;case"keydown":case"keyup":Gm(m,n,f)}var w;if(Wd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Di?ly(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(ay&&n.locale!=="ko"&&(Di||y!=="onCompositionStart"?y==="onCompositionEnd"&&Di&&(w=oy()):(or=f,$d="value"in or?or.value:or.textContent,Di=!0)),j=Al(u,y),0<j.length&&(y=new jm(y,t,null,n,f),m.push({event:y,listeners:j}),w?y.data=w:(w=cy(n),w!==null&&(y.data=w)))),(w=kI?PI(t,n):RI(t,n))&&(u=Al(u,"onBeforeInput"),0<u.length&&(f=new jm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=w))}Ey(m,e)})}function Lo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Al(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Po(t,n),s!=null&&r.unshift(Lo(t,s,i)),s=Po(t,e),s!=null&&r.push(Lo(t,s,i))),t=t.return}return r}function Ai(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ym(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Po(n,s),c!=null&&o.unshift(Lo(n,c,l))):i||(c=Po(n,s),c!=null&&o.push(Lo(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $I=/\r\n?/g,HI=/\u0000|\uFFFD/g;function Xm(t){return(typeof t=="string"?t:""+t).replace($I,`
`).replace(HI,"")}function ba(t,e,n){if(e=Xm(e),Xm(t)!==e&&n)throw Error(F(425))}function Cl(){}var Rh=null,xh=null;function Nh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dh=typeof setTimeout=="function"?setTimeout:void 0,qI=typeof clearTimeout=="function"?clearTimeout:void 0,Jm=typeof Promise=="function"?Promise:void 0,WI=typeof queueMicrotask=="function"?queueMicrotask:typeof Jm<"u"?function(t){return Jm.resolve(null).then(t).catch(GI)}:Dh;function GI(t){setTimeout(function(){throw t})}function Mu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),No(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);No(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ys=Math.random().toString(36).slice(2),pn="__reactFiber$"+ys,Mo="__reactProps$"+ys,Ln="__reactContainer$"+ys,Vh="__reactEvents$"+ys,KI="__reactListeners$"+ys,QI="__reactHandles$"+ys;function Qr(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zm(t);t!==null;){if(n=t[pn])return n;t=Zm(t)}return e}t=n,n=t.parentNode}return null}function na(t){return t=t[pn]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Li(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function pc(t){return t[Mo]||null}var Oh=[],Mi=-1;function Vr(t){return{current:t}}function _e(t){0>Mi||(t.current=Oh[Mi],Oh[Mi]=null,Mi--)}function fe(t,e){Mi++,Oh[Mi]=t.current,t.current=e}var Tr={},at=Vr(Tr),wt=Vr(!1),ri=Tr;function ns(t,e){var n=t.type.contextTypes;if(!n)return Tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Et(t){return t=t.childContextTypes,t!=null}function kl(){_e(wt),_e(at)}function eg(t,e,n){if(at.current!==Tr)throw Error(F(168));fe(at,e),fe(wt,n)}function Ty(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,VE(t)||"Unknown",i));return Ie({},n,r)}function Pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,ri=at.current,fe(at,t),fe(wt,wt.current),!0}function tg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Ty(t,e,ri),r.__reactInternalMemoizedMergedChildContext=t,_e(wt),_e(at),fe(at,t)):_e(wt),fe(wt,n)}var kn=null,mc=!1,bu=!1;function Sy(t){kn===null?kn=[t]:kn.push(t)}function YI(t){mc=!0,Sy(t)}function Or(){if(!bu&&kn!==null){bu=!0;var t=0,e=le;try{var n=kn;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,mc=!1}catch(i){throw kn!==null&&(kn=kn.slice(t+1)),Q_(Fd,Or),i}finally{le=e,bu=!1}}return null}var bi=[],ji=0,Rl=null,xl=0,Mt=[],bt=0,ii=null,Pn=1,Rn="";function Wr(t,e){bi[ji++]=xl,bi[ji++]=Rl,Rl=t,xl=e}function Ay(t,e,n){Mt[bt++]=Pn,Mt[bt++]=Rn,Mt[bt++]=ii,ii=t;var r=Pn;t=Rn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pn=1<<32-Jt(e)+i|n<<i|r,Rn=s+t}else Pn=1<<s|n<<i|r,Rn=t}function Kd(t){t.return!==null&&(Wr(t,1),Ay(t,1,0))}function Qd(t){for(;t===Rl;)Rl=bi[--ji],bi[ji]=null,xl=bi[--ji],bi[ji]=null;for(;t===ii;)ii=Mt[--bt],Mt[bt]=null,Rn=Mt[--bt],Mt[bt]=null,Pn=Mt[--bt],Mt[bt]=null}var Pt=null,Ct=null,ve=!1,Qt=null;function Cy(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ng(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Ct=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ii!==null?{id:Pn,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Ct=null,!0):!1;default:return!1}}function Lh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mh(t){if(ve){var e=Ct;if(e){var n=e;if(!ng(t,e)){if(Lh(t))throw Error(F(418));e=dr(n.nextSibling);var r=Pt;e&&ng(t,e)?Cy(r,n):(t.flags=t.flags&-4097|2,ve=!1,Pt=t)}}else{if(Lh(t))throw Error(F(418));t.flags=t.flags&-4097|2,ve=!1,Pt=t}}}function rg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function ja(t){if(t!==Pt)return!1;if(!ve)return rg(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nh(t.type,t.memoizedProps)),e&&(e=Ct)){if(Lh(t))throw ky(),Error(F(418));for(;e;)Cy(t,e),e=dr(e.nextSibling)}if(rg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=Pt?dr(t.stateNode.nextSibling):null;return!0}function ky(){for(var t=Ct;t;)t=dr(t.nextSibling)}function rs(){Ct=Pt=null,ve=!1}function Yd(t){Qt===null?Qt=[t]:Qt.push(t)}var XI=zn.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Fa(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ig(t){var e=t._init;return e(t._payload)}function Py(t){function e(E,v){if(t){var S=E.deletions;S===null?(E.deletions=[v],E.flags|=16):S.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function i(E,v){return E=gr(E,v),E.index=0,E.sibling=null,E}function s(E,v,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<v?(E.flags|=2,v):S):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,v,S,D){return v===null||v.tag!==6?(v=Hu(S,E.mode,D),v.return=E,v):(v=i(v,S),v.return=E,v)}function c(E,v,S,D){var b=S.type;return b===Ni?f(E,v,S.props.children,D,S.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Jn&&ig(b)===v.type)?(D=i(v,S.props),D.ref=Xs(E,v,S),D.return=E,D):(D=al(S.type,S.key,S.props,null,E.mode,D),D.ref=Xs(E,v,S),D.return=E,D)}function u(E,v,S,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=qu(S,E.mode,D),v.return=E,v):(v=i(v,S.children||[]),v.return=E,v)}function f(E,v,S,D,b){return v===null||v.tag!==7?(v=ti(S,E.mode,D,b),v.return=E,v):(v=i(v,S),v.return=E,v)}function m(E,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Hu(""+v,E.mode,S),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Pa:return S=al(v.type,v.key,v.props,null,E.mode,S),S.ref=Xs(E,null,v),S.return=E,S;case xi:return v=qu(v,E.mode,S),v.return=E,v;case Jn:var D=v._init;return m(E,D(v._payload),S)}if(to(v)||Ws(v))return v=ti(v,E.mode,S,null),v.return=E,v;Fa(E,v)}return null}function g(E,v,S,D){var b=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return b!==null?null:l(E,v,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Pa:return S.key===b?c(E,v,S,D):null;case xi:return S.key===b?u(E,v,S,D):null;case Jn:return b=S._init,g(E,v,b(S._payload),D)}if(to(S)||Ws(S))return b!==null?null:f(E,v,S,D,null);Fa(E,S)}return null}function I(E,v,S,D,b){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(S)||null,l(v,E,""+D,b);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Pa:return E=E.get(D.key===null?S:D.key)||null,c(v,E,D,b);case xi:return E=E.get(D.key===null?S:D.key)||null,u(v,E,D,b);case Jn:var j=D._init;return I(E,v,S,j(D._payload),b)}if(to(D)||Ws(D))return E=E.get(S)||null,f(v,E,D,b,null);Fa(v,D)}return null}function R(E,v,S,D){for(var b=null,j=null,w=v,y=v=0,A=null;w!==null&&y<S.length;y++){w.index>y?(A=w,w=null):A=w.sibling;var T=g(E,w,S[y],D);if(T===null){w===null&&(w=A);break}t&&w&&T.alternate===null&&e(E,w),v=s(T,v,y),j===null?b=T:j.sibling=T,j=T,w=A}if(y===S.length)return n(E,w),ve&&Wr(E,y),b;if(w===null){for(;y<S.length;y++)w=m(E,S[y],D),w!==null&&(v=s(w,v,y),j===null?b=w:j.sibling=w,j=w);return ve&&Wr(E,y),b}for(w=r(E,w);y<S.length;y++)A=I(w,E,y,S[y],D),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?y:A.key),v=s(A,v,y),j===null?b=A:j.sibling=A,j=A);return t&&w.forEach(function(k){return e(E,k)}),ve&&Wr(E,y),b}function P(E,v,S,D){var b=Ws(S);if(typeof b!="function")throw Error(F(150));if(S=b.call(S),S==null)throw Error(F(151));for(var j=b=null,w=v,y=v=0,A=null,T=S.next();w!==null&&!T.done;y++,T=S.next()){w.index>y?(A=w,w=null):A=w.sibling;var k=g(E,w,T.value,D);if(k===null){w===null&&(w=A);break}t&&w&&k.alternate===null&&e(E,w),v=s(k,v,y),j===null?b=k:j.sibling=k,j=k,w=A}if(T.done)return n(E,w),ve&&Wr(E,y),b;if(w===null){for(;!T.done;y++,T=S.next())T=m(E,T.value,D),T!==null&&(v=s(T,v,y),j===null?b=T:j.sibling=T,j=T);return ve&&Wr(E,y),b}for(w=r(E,w);!T.done;y++,T=S.next())T=I(w,E,y,T.value,D),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?y:T.key),v=s(T,v,y),j===null?b=T:j.sibling=T,j=T);return t&&w.forEach(function(x){return e(E,x)}),ve&&Wr(E,y),b}function V(E,v,S,D){if(typeof S=="object"&&S!==null&&S.type===Ni&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Pa:e:{for(var b=S.key,j=v;j!==null;){if(j.key===b){if(b=S.type,b===Ni){if(j.tag===7){n(E,j.sibling),v=i(j,S.props.children),v.return=E,E=v;break e}}else if(j.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Jn&&ig(b)===j.type){n(E,j.sibling),v=i(j,S.props),v.ref=Xs(E,j,S),v.return=E,E=v;break e}n(E,j);break}else e(E,j);j=j.sibling}S.type===Ni?(v=ti(S.props.children,E.mode,D,S.key),v.return=E,E=v):(D=al(S.type,S.key,S.props,null,E.mode,D),D.ref=Xs(E,v,S),D.return=E,E=D)}return o(E);case xi:e:{for(j=S.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(E,v.sibling),v=i(v,S.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=qu(S,E.mode,D),v.return=E,E=v}return o(E);case Jn:return j=S._init,V(E,v,j(S._payload),D)}if(to(S))return R(E,v,S,D);if(Ws(S))return P(E,v,S,D);Fa(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(E,v.sibling),v=i(v,S),v.return=E,E=v):(n(E,v),v=Hu(S,E.mode,D),v.return=E,E=v),o(E)):n(E,v)}return V}var is=Py(!0),Ry=Py(!1),Nl=Vr(null),Dl=null,Fi=null,Xd=null;function Jd(){Xd=Fi=Dl=null}function Zd(t){var e=Nl.current;_e(Nl),t._currentValue=e}function bh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gi(t,e){Dl=t,Xd=Fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(Xd!==t)if(t={context:t,memoizedValue:e,next:null},Fi===null){if(Dl===null)throw Error(F(308));Fi=t,Dl.dependencies={lanes:0,firstContext:t}}else Fi=Fi.next=t;return e}var Yr=null;function ef(t){Yr===null?Yr=[t]:Yr.push(t)}function xy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ef(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mn(t,r)}function Mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zn=!1;function tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ny(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mn(t,n)}return i=r.interleaved,i===null?(e.next=e,ef(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mn(t,n)}function tl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ud(t,n)}}function sg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vl(t,e,n,r){var i=t.updateQueue;Zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(s!==null){var m=i.baseState;o=0,f=u=c=null,l=s;do{var g=l.lane,I=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,P=l;switch(g=e,I=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){m=R.call(I,m,g);break e}m=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,g=typeof R=="function"?R.call(I,m,g):R,g==null)break e;m=Ie({},m,g);break e;case 2:Zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else I={eventTime:I,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=I,c=m):f=f.next=I,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);oi|=o,t.lanes=o,t.memoizedState=m}}function og(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var ra={},gn=Vr(ra),bo=Vr(ra),jo=Vr(ra);function Xr(t){if(t===ra)throw Error(F(174));return t}function nf(t,e){switch(fe(jo,e),fe(bo,t),fe(gn,ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_h(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_h(e,t)}_e(gn),fe(gn,e)}function ss(){_e(gn),_e(bo),_e(jo)}function Dy(t){Xr(jo.current);var e=Xr(gn.current),n=_h(e,t.type);e!==n&&(fe(bo,t),fe(gn,n))}function rf(t){bo.current===t&&(_e(gn),_e(bo))}var we=Vr(0);function Ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ju=[];function sf(){for(var t=0;t<ju.length;t++)ju[t]._workInProgressVersionPrimary=null;ju.length=0}var nl=zn.ReactCurrentDispatcher,Fu=zn.ReactCurrentBatchConfig,si=0,Ee=null,Ue=null,qe=null,Ll=!1,go=!1,Fo=0,JI=0;function tt(){throw Error(F(321))}function of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function af(t,e,n,r,i,s){if(si=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nl.current=t===null||t.memoizedState===null?nT:rT,t=n(r,i),go){s=0;do{if(go=!1,Fo=0,25<=s)throw Error(F(301));s+=1,qe=Ue=null,e.updateQueue=null,nl.current=iT,t=n(r,i)}while(go)}if(nl.current=Ml,e=Ue!==null&&Ue.next!==null,si=0,qe=Ue=Ee=null,Ll=!1,e)throw Error(F(300));return t}function lf(){var t=Fo!==0;return Fo=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Ee.memoizedState=qe=t:qe=qe.next=t,qe}function Ht(){if(Ue===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=qe===null?Ee.memoizedState:qe.next;if(e!==null)qe=e,Ue=t;else{if(t===null)throw Error(F(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},qe===null?Ee.memoizedState=qe=t:qe=qe.next=t}return qe}function Uo(t,e){return typeof e=="function"?e(t):e}function Uu(t){var e=Ht(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,u=s;do{var f=u.lane;if((si&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,o=r):c=c.next=m,Ee.lanes|=f,oi|=f}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=l,en(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,oi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bu(t){var e=Ht(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);en(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Vy(){}function Oy(t,e){var n=Ee,r=Ht(),i=e(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,cf(by.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Bo(9,My.bind(null,n,r,i,e),void 0,null),We===null)throw Error(F(349));si&30||Ly(n,e,i)}return i}function Ly(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function My(t,e,n,r){e.value=n,e.getSnapshot=r,jy(e)&&Fy(t)}function by(t,e,n){return n(function(){jy(e)&&Fy(t)})}function jy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function Fy(t){var e=Mn(t,1);e!==null&&Zt(e,t,1,-1)}function ag(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:t},e.queue=t,t=t.dispatch=tT.bind(null,Ee,t),[e.memoizedState,t]}function Bo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Uy(){return Ht().memoizedState}function rl(t,e,n,r){var i=hn();Ee.flags|=t,i.memoizedState=Bo(1|e,n,void 0,r===void 0?null:r)}function gc(t,e,n,r){var i=Ht();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&of(r,o.deps)){i.memoizedState=Bo(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=Bo(1|e,n,s,r)}function lg(t,e){return rl(8390656,8,t,e)}function cf(t,e){return gc(2048,8,t,e)}function By(t,e){return gc(4,2,t,e)}function zy(t,e){return gc(4,4,t,e)}function $y(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hy(t,e,n){return n=n!=null?n.concat([t]):null,gc(4,4,$y.bind(null,e,t),n)}function uf(){}function qy(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&of(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Wy(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&of(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Gy(t,e,n){return si&21?(en(n,e)||(n=J_(),Ee.lanes|=n,oi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function ZI(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=Fu.transition;Fu.transition={};try{t(!1),e()}finally{le=n,Fu.transition=r}}function Ky(){return Ht().memoizedState}function eT(t,e,n){var r=mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qy(t))Yy(e,n);else if(n=xy(t,e,n,r),n!==null){var i=dt();Zt(n,t,r,i),Xy(n,e,r)}}function tT(t,e,n){var r=mr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qy(t))Yy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,en(l,o)){var c=e.interleaved;c===null?(i.next=i,ef(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=xy(t,e,i,r),n!==null&&(i=dt(),Zt(n,t,r,i),Xy(n,e,r))}}function Qy(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function Yy(t,e){go=Ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ud(t,n)}}var Ml={readContext:$t,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},nT={readContext:$t,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:lg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rl(4194308,4,$y.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return rl(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=eT.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:ag,useDebugValue:uf,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=ag(!1),e=t[0];return t=ZI.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=hn();if(ve){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),We===null)throw Error(F(349));si&30||Ly(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,lg(by.bind(null,r,s,t),[t]),r.flags|=2048,Bo(9,My.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=hn(),e=We.identifierPrefix;if(ve){var n=Rn,r=Pn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=JI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rT={readContext:$t,useCallback:qy,useContext:$t,useEffect:cf,useImperativeHandle:Hy,useInsertionEffect:By,useLayoutEffect:zy,useMemo:Wy,useReducer:Uu,useRef:Uy,useState:function(){return Uu(Uo)},useDebugValue:uf,useDeferredValue:function(t){var e=Ht();return Gy(e,Ue.memoizedState,t)},useTransition:function(){var t=Uu(Uo)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:Vy,useSyncExternalStore:Oy,useId:Ky,unstable_isNewReconciler:!1},iT={readContext:$t,useCallback:qy,useContext:$t,useEffect:cf,useImperativeHandle:Hy,useInsertionEffect:By,useLayoutEffect:zy,useMemo:Wy,useReducer:Bu,useRef:Uy,useState:function(){return Bu(Uo)},useDebugValue:uf,useDeferredValue:function(t){var e=Ht();return Ue===null?e.memoizedState=t:Gy(e,Ue.memoizedState,t)},useTransition:function(){var t=Bu(Uo)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:Vy,useSyncExternalStore:Oy,useId:Ky,unstable_isNewReconciler:!1};function Gt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _c={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),i=mr(t),s=Dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,i),e!==null&&(Zt(e,t,i,r),tl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),i=mr(t),s=Dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,i),e!==null&&(Zt(e,t,i,r),tl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=mr(t),i=Dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=fr(t,i,r),e!==null&&(Zt(e,t,r,n),tl(e,t,r))}};function cg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vo(n,r)||!Vo(i,s):!0}function Jy(t,e,n){var r=!1,i=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=$t(s):(i=Et(e)?ri:at.current,r=e.contextTypes,s=(r=r!=null)?ns(t,i):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_c,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ug(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_c.enqueueReplaceState(e,e.state,null)}function Fh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},tf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$t(s):(s=Et(e)?ri:at.current,i.context=ns(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_c.enqueueReplaceState(i,i.state,null),Vl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function os(t,e){try{var n="",r=e;do n+=DE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sT=typeof WeakMap=="function"?WeakMap:Map;function Zy(t,e,n){n=Dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){jl||(jl=!0,Yh=r),Uh(t,e)},n}function e1(t,e,n){n=Dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Uh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uh(t,e),typeof r!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function hg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new sT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=vT.bind(null,t,e,n),e.then(t,t))}function dg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dn(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var oT=zn.ReactCurrentOwner,vt=!1;function ht(t,e,n,r){e.child=t===null?Ry(e,null,n,r):is(e,t.child,n,r)}function pg(t,e,n,r,i){n=n.render;var s=e.ref;return Gi(e,i),r=af(t,e,n,r,s,i),n=lf(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bn(t,e,i)):(ve&&n&&Kd(e),e.flags|=1,ht(t,e,r,i),e.child)}function mg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!yf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,t1(t,e,s,r,i)):(t=al(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(o,r)&&t.ref===e.ref)return bn(t,e,i)}return e.flags|=1,t=gr(s,r),t.ref=e.ref,t.return=e,e.child=t}function t1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Vo(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,bn(t,e,i)}return Bh(t,e,n,r,i)}function n1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Bi,At),At|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(Bi,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(Bi,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(Bi,At),At|=r;return ht(t,e,i,n),e.child}function r1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bh(t,e,n,r,i){var s=Et(n)?ri:at.current;return s=ns(e,s),Gi(e,i),n=af(t,e,n,r,s,i),r=lf(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bn(t,e,i)):(ve&&r&&Kd(e),e.flags|=1,ht(t,e,n,i),e.child)}function gg(t,e,n,r,i){if(Et(n)){var s=!0;Pl(e)}else s=!1;if(Gi(e,i),e.stateNode===null)il(t,e),Jy(e,n,r),Fh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=$t(u):(u=Et(n)?ri:at.current,u=ns(e,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&ug(e,o,r,u),Zn=!1;var g=e.memoizedState;o.state=g,Vl(e,r,o,i),c=e.memoizedState,l!==r||g!==c||wt.current||Zn?(typeof f=="function"&&(jh(e,n,f,r),c=e.memoizedState),(l=Zn||cg(e,n,l,r,g,c,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Ny(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Gt(e.type,l),o.props=u,m=e.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=$t(c):(c=Et(n)?ri:at.current,c=ns(e,c));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==c)&&ug(e,o,r,c),Zn=!1,g=e.memoizedState,o.state=g,Vl(e,r,o,i);var R=e.memoizedState;l!==m||g!==R||wt.current||Zn?(typeof I=="function"&&(jh(e,n,I,r),R=e.memoizedState),(u=Zn||cg(e,n,u,r,g,R,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return zh(t,e,n,r,s,i)}function zh(t,e,n,r,i,s){r1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&tg(e,n,!1),bn(t,e,s);r=e.stateNode,oT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=is(e,t.child,null,s),e.child=is(e,null,l,s)):ht(t,e,l,s),e.memoizedState=r.state,i&&tg(e,n,!0),e.child}function i1(t){var e=t.stateNode;e.pendingContext?eg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&eg(t,e.context,!1),nf(t,e.containerInfo)}function _g(t,e,n,r,i){return rs(),Yd(i),e.flags|=256,ht(t,e,n,r),e.child}var $h={dehydrated:null,treeContext:null,retryLane:0};function Hh(t){return{baseLanes:t,cachePool:null,transitions:null}}function s1(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(we,i&1),t===null)return Mh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wc(o,r,0,null),t=ti(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hh(n),e.memoizedState=$h,t):hf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return aT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=gr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=gr(l,s):(s=ti(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$h,r}return s=t.child,t=s.sibling,r=gr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hf(t,e){return e=wc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ua(t,e,n,r){return r!==null&&Yd(r),is(e,t.child,null,n),t=hf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=zu(Error(F(422))),Ua(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=wc({mode:"visible",children:r.children},i,0,null),s=ti(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&is(e,t.child,null,o),e.child.memoizedState=Hh(o),e.memoizedState=$h,s);if(!(e.mode&1))return Ua(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=zu(s,r,void 0),Ua(t,e,o,r)}if(l=(o&t.childLanes)!==0,vt||l){if(r=We,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mn(t,i),Zt(r,t,i,-1))}return _f(),r=zu(Error(F(421))),Ua(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=wT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=dr(i.nextSibling),Pt=e,ve=!0,Qt=null,t!==null&&(Mt[bt++]=Pn,Mt[bt++]=Rn,Mt[bt++]=ii,Pn=t.id,Rn=t.overflow,ii=e),e=hf(e,r.children),e.flags|=4096,e)}function yg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),bh(t.return,e,n)}function $u(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function o1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ht(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yg(t,n,e);else if(t.tag===19)yg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ol(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$u(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ol(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$u(e,!0,n,null,s);break;case"together":$u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),oi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lT(t,e,n){switch(e.tag){case 3:i1(e),rs();break;case 5:Dy(e);break;case 1:Et(e.type)&&Pl(e);break;case 4:nf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(Nl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?s1(t,e,n):(fe(we,we.current&1),t=bn(t,e,n),t!==null?t.sibling:null);fe(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return o1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,n1(t,e,n)}return bn(t,e,n)}var a1,qh,l1,c1;a1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qh=function(){};l1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xr(gn.current);var s=null;switch(n){case"input":i=fh(t,i),r=fh(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=gh(t,i),r=gh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cl)}yh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Co.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Co.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ge("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};c1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Js(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function cT(t,e,n){var r=e.pendingProps;switch(Qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return Et(e.type)&&kl(),nt(e),null;case 3:return r=e.stateNode,ss(),_e(wt),_e(at),sf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qt!==null&&(Zh(Qt),Qt=null))),qh(t,e),nt(e),null;case 5:rf(e);var i=Xr(jo.current);if(n=e.type,t!==null&&e.stateNode!=null)l1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return nt(e),null}if(t=Xr(gn.current),ja(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pn]=e,r[Mo]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<ro.length;i++)ge(ro[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":km(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":Rm(r,s),ge("invalid",r)}yh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ba(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ba(r.textContent,l,t),i=["children",""+l]):Co.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":Ra(r),Pm(r,s,!0);break;case"textarea":Ra(r),xm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=b_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pn]=e,t[Mo]=r,a1(t,e,!1,!1),e.stateNode=t;e:{switch(o=vh(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<ro.length;i++)ge(ro[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":km(t,r),i=fh(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),ge("invalid",t);break;case"textarea":Rm(t,r),i=gh(t,r),ge("invalid",t);break;default:i=r}yh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?U_(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&j_(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ko(t,c):typeof c=="number"&&ko(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Co.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ge("scroll",t):c!=null&&Od(t,s,c,o))}switch(n){case"input":Ra(t),Pm(t,r,!1);break;case"textarea":Ra(t),xm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ir(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$i(t,!!r.multiple,s,!1):r.defaultValue!=null&&$i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)c1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Xr(jo.current),Xr(gn.current),ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:ba(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return nt(e),null;case 13:if(_e(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&Ct!==null&&e.mode&1&&!(e.flags&128))ky(),rs(),e.flags|=98560,s=!1;else if(s=ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[pn]=e}else rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else Qt!==null&&(Zh(Qt),Qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Be===0&&(Be=3):_f())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return ss(),qh(t,e),t===null&&Oo(e.stateNode.containerInfo),nt(e),null;case 10:return Zd(e.type._context),nt(e),null;case 17:return Et(e.type)&&kl(),nt(e),null;case 19:if(_e(we),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Js(s,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ol(t),o!==null){for(e.flags|=128,Js(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>as&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ol(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return nt(e),null}else 2*Re()-s.renderingStartTime>as&&n!==1073741824&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=we.current,fe(we,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return gf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function uT(t,e){switch(Qd(e),e.tag){case 1:return Et(e.type)&&kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ss(),_e(wt),_e(at),sf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rf(e),null;case 13:if(_e(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(we),null;case 4:return ss(),null;case 10:return Zd(e.type._context),null;case 22:case 23:return gf(),null;case 24:return null;default:return null}}var Ba=!1,st=!1,hT=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function Wh(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var vg=!1;function dT(t,e){if(Rh=Tl,t=py(),Gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,f=0,m=t,g=null;t:for(;;){for(var I;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)g=m,m=I;for(;;){if(m===t)break t;if(g===n&&++u===i&&(l=o),g===s&&++f===r&&(c=o),(I=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=I}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(xh={focusedElem:t,selectionRange:n},Tl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,V=R.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?P:Gt(e.type,P),V);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){Ae(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return R=vg,vg=!1,R}function _o(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Wh(e,n,s)}i=i.next}while(i!==r)}}function yc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Gh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function u1(t){var e=t.alternate;e!==null&&(t.alternate=null,u1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[Mo],delete e[Vh],delete e[KI],delete e[QI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function h1(t){return t.tag===5||t.tag===3||t.tag===4}function wg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||h1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cl));else if(r!==4&&(t=t.child,t!==null))for(Kh(t,e,n),t=t.sibling;t!==null;)Kh(t,e,n),t=t.sibling}function Qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Qh(t,e,n),t=t.sibling;t!==null;)Qh(t,e,n),t=t.sibling}var Ke=null,Kt=!1;function Yn(t,e,n){for(n=n.child;n!==null;)d1(t,e,n),n=n.sibling}function d1(t,e,n){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(uc,n)}catch{}switch(n.tag){case 5:st||Ui(n,e);case 6:var r=Ke,i=Kt;Ke=null,Yn(t,e,n),Ke=r,Kt=i,Ke!==null&&(Kt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Kt?(t=Ke,n=n.stateNode,t.nodeType===8?Mu(t.parentNode,n):t.nodeType===1&&Mu(t,n),No(t)):Mu(Ke,n.stateNode));break;case 4:r=Ke,i=Kt,Ke=n.stateNode.containerInfo,Kt=!0,Yn(t,e,n),Ke=r,Kt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wh(n,e,o),i=i.next}while(i!==r)}Yn(t,e,n);break;case 1:if(!st&&(Ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}Yn(t,e,n);break;case 21:Yn(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Yn(t,e,n),st=r):Yn(t,e,n);break;default:Yn(t,e,n)}}function Eg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hT),e.forEach(function(r){var i=ET.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,Kt=!1;break e;case 3:Ke=l.stateNode.containerInfo,Kt=!0;break e;case 4:Ke=l.stateNode.containerInfo,Kt=!0;break e}l=l.return}if(Ke===null)throw Error(F(160));d1(s,o,i),Ke=null,Kt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ae(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)f1(e,t),e=e.sibling}function f1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(e,t),cn(t),r&4){try{_o(3,t,t.return),yc(3,t)}catch(P){Ae(t,t.return,P)}try{_o(5,t,t.return)}catch(P){Ae(t,t.return,P)}}break;case 1:Wt(e,t),cn(t),r&512&&n!==null&&Ui(n,n.return);break;case 5:if(Wt(e,t),cn(t),r&512&&n!==null&&Ui(n,n.return),t.flags&32){var i=t.stateNode;try{ko(i,"")}catch(P){Ae(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&L_(i,s),vh(l,o);var u=vh(l,s);for(o=0;o<c.length;o+=2){var f=c[o],m=c[o+1];f==="style"?U_(i,m):f==="dangerouslySetInnerHTML"?j_(i,m):f==="children"?ko(i,m):Od(i,f,m,u)}switch(l){case"input":ph(i,s);break;case"textarea":M_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?$i(i,!!s.multiple,I,!1):g!==!!s.multiple&&(s.defaultValue!=null?$i(i,!!s.multiple,s.defaultValue,!0):$i(i,!!s.multiple,s.multiple?[]:"",!1))}i[Mo]=s}catch(P){Ae(t,t.return,P)}}break;case 6:if(Wt(e,t),cn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Ae(t,t.return,P)}}break;case 3:if(Wt(e,t),cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{No(e.containerInfo)}catch(P){Ae(t,t.return,P)}break;case 4:Wt(e,t),cn(t);break;case 13:Wt(e,t),cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(pf=Re())),r&4&&Eg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(st=(u=st)||f,Wt(e,t),st=u):Wt(e,t),cn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(m=H=f;H!==null;){switch(g=H,I=g.child,g.tag){case 0:case 11:case 14:case 15:_o(4,g,g.return);break;case 1:Ui(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){Ae(r,n,P)}}break;case 5:Ui(g,g.return);break;case 22:if(g.memoizedState!==null){Tg(m);continue}}I!==null?(I.return=g,H=I):Tg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=F_("display",o))}catch(P){Ae(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(P){Ae(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Wt(e,t),cn(t),r&4&&Eg(t);break;case 21:break;default:Wt(e,t),cn(t)}}function cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(h1(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ko(i,""),r.flags&=-33);var s=wg(t);Qh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=wg(t);Kh(t,l,o);break;default:throw Error(F(161))}}catch(c){Ae(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fT(t,e,n){H=t,p1(t)}function p1(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ba;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||st;l=Ba;var u=st;if(Ba=o,(st=c)&&!u)for(H=i;H!==null;)o=H,c=o.child,o.tag===22&&o.memoizedState!==null?Sg(i):c!==null?(c.return=o,H=c):Sg(i);for(;s!==null;)H=s,p1(s),s=s.sibling;H=i,Ba=l,st=u}Ig(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Ig(t)}}function Ig(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||yc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&og(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}og(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&No(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}st||e.flags&512&&Gh(e)}catch(g){Ae(e,e.return,g)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Tg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Sg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yc(4,e)}catch(c){Ae(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){Ae(e,i,c)}}var s=e.return;try{Gh(e)}catch(c){Ae(e,s,c)}break;case 5:var o=e.return;try{Gh(e)}catch(c){Ae(e,o,c)}}}catch(c){Ae(e,e.return,c)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var pT=Math.ceil,bl=zn.ReactCurrentDispatcher,df=zn.ReactCurrentOwner,Ut=zn.ReactCurrentBatchConfig,oe=0,We=null,Oe=null,Xe=0,At=0,Bi=Vr(0),Be=0,zo=null,oi=0,vc=0,ff=0,yo=null,_t=null,pf=0,as=1/0,Cn=null,jl=!1,Yh=null,pr=null,za=!1,ar=null,Fl=0,vo=0,Xh=null,sl=-1,ol=0;function dt(){return oe&6?Re():sl!==-1?sl:sl=Re()}function mr(t){return t.mode&1?oe&2&&Xe!==0?Xe&-Xe:XI.transition!==null?(ol===0&&(ol=J_()),ol):(t=le,t!==0||(t=window.event,t=t===void 0?16:sy(t.type)),t):1}function Zt(t,e,n,r){if(50<vo)throw vo=0,Xh=null,Error(F(185));ea(t,n,r),(!(oe&2)||t!==We)&&(t===We&&(!(oe&2)&&(vc|=n),Be===4&&tr(t,Xe)),It(t,r),n===1&&oe===0&&!(e.mode&1)&&(as=Re()+500,mc&&Or()))}function It(t,e){var n=t.callbackNode;XE(t,e);var r=Il(t,t===We?Xe:0);if(r===0)n!==null&&Vm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Vm(n),e===1)t.tag===0?YI(Ag.bind(null,t)):Sy(Ag.bind(null,t)),WI(function(){!(oe&6)&&Or()}),n=null;else{switch(Z_(r)){case 1:n=Fd;break;case 4:n=Y_;break;case 16:n=El;break;case 536870912:n=X_;break;default:n=El}n=I1(n,m1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function m1(t,e){if(sl=-1,ol=0,oe&6)throw Error(F(327));var n=t.callbackNode;if(Ki()&&t.callbackNode!==n)return null;var r=Il(t,t===We?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ul(t,r);else{e=r;var i=oe;oe|=2;var s=_1();(We!==t||Xe!==e)&&(Cn=null,as=Re()+500,ei(t,e));do try{_T();break}catch(l){g1(t,l)}while(!0);Jd(),bl.current=s,oe=i,Oe!==null?e=0:(We=null,Xe=0,e=Be)}if(e!==0){if(e===2&&(i=Sh(t),i!==0&&(r=i,e=Jh(t,i))),e===1)throw n=zo,ei(t,0),tr(t,r),It(t,Re()),n;if(e===6)tr(t,r);else{if(i=t.current.alternate,!(r&30)&&!mT(i)&&(e=Ul(t,r),e===2&&(s=Sh(t),s!==0&&(r=s,e=Jh(t,s))),e===1))throw n=zo,ei(t,0),tr(t,r),It(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Gr(t,_t,Cn);break;case 3:if(tr(t,r),(r&130023424)===r&&(e=pf+500-Re(),10<e)){if(Il(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Dh(Gr.bind(null,t,_t,Cn),e);break}Gr(t,_t,Cn);break;case 4:if(tr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pT(r/1960))-r,10<r){t.timeoutHandle=Dh(Gr.bind(null,t,_t,Cn),r);break}Gr(t,_t,Cn);break;case 5:Gr(t,_t,Cn);break;default:throw Error(F(329))}}}return It(t,Re()),t.callbackNode===n?m1.bind(null,t):null}function Jh(t,e){var n=yo;return t.current.memoizedState.isDehydrated&&(ei(t,e).flags|=256),t=Ul(t,e),t!==2&&(e=_t,_t=n,e!==null&&Zh(e)),t}function Zh(t){_t===null?_t=t:_t.push.apply(_t,t)}function mT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~ff,e&=~vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function Ag(t){if(oe&6)throw Error(F(327));Ki();var e=Il(t,0);if(!(e&1))return It(t,Re()),null;var n=Ul(t,e);if(t.tag!==0&&n===2){var r=Sh(t);r!==0&&(e=r,n=Jh(t,r))}if(n===1)throw n=zo,ei(t,0),tr(t,e),It(t,Re()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,_t,Cn),It(t,Re()),null}function mf(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(as=Re()+500,mc&&Or())}}function ai(t){ar!==null&&ar.tag===0&&!(oe&6)&&Ki();var e=oe;oe|=1;var n=Ut.transition,r=le;try{if(Ut.transition=null,le=1,t)return t()}finally{le=r,Ut.transition=n,oe=e,!(oe&6)&&Or()}}function gf(){At=Bi.current,_e(Bi)}function ei(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,qI(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(Qd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&kl();break;case 3:ss(),_e(wt),_e(at),sf();break;case 5:rf(r);break;case 4:ss();break;case 13:_e(we);break;case 19:_e(we);break;case 10:Zd(r.type._context);break;case 22:case 23:gf()}n=n.return}if(We=t,Oe=t=gr(t.current,null),Xe=At=e,Be=0,zo=null,ff=vc=oi=0,_t=yo=null,Yr!==null){for(e=0;e<Yr.length;e++)if(n=Yr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Yr=null}return t}function g1(t,e){do{var n=Oe;try{if(Jd(),nl.current=Ml,Ll){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ll=!1}if(si=0,qe=Ue=Ee=null,go=!1,Fo=0,df.current=null,n===null||n.return===null){Be=1,zo=e,Oe=null;break}e:{var s=t,o=n.return,l=n,c=e;if(e=Xe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=dg(o);if(I!==null){I.flags&=-257,fg(I,o,l,s,e),I.mode&1&&hg(s,u,e),e=I,c=u;var R=e.updateQueue;if(R===null){var P=new Set;P.add(c),e.updateQueue=P}else R.add(c);break e}else{if(!(e&1)){hg(s,u,e),_f();break e}c=Error(F(426))}}else if(ve&&l.mode&1){var V=dg(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),fg(V,o,l,s,e),Yd(os(c,l));break e}}s=c=os(c,l),Be!==4&&(Be=2),yo===null?yo=[s]:yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=Zy(s,c,e);sg(s,E);break e;case 1:l=c;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(pr===null||!pr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=e1(s,l,e);sg(s,D);break e}}s=s.return}while(s!==null)}v1(n)}catch(b){e=b,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function _1(){var t=bl.current;return bl.current=Ml,t===null?Ml:t}function _f(){(Be===0||Be===3||Be===2)&&(Be=4),We===null||!(oi&268435455)&&!(vc&268435455)||tr(We,Xe)}function Ul(t,e){var n=oe;oe|=2;var r=_1();(We!==t||Xe!==e)&&(Cn=null,ei(t,e));do try{gT();break}catch(i){g1(t,i)}while(!0);if(Jd(),oe=n,bl.current=r,Oe!==null)throw Error(F(261));return We=null,Xe=0,Be}function gT(){for(;Oe!==null;)y1(Oe)}function _T(){for(;Oe!==null&&!zE();)y1(Oe)}function y1(t){var e=E1(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?v1(t):Oe=e,df.current=null}function v1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uT(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,Oe=null;return}}else if(n=cT(n,e,At),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);Be===0&&(Be=5)}function Gr(t,e,n){var r=le,i=Ut.transition;try{Ut.transition=null,le=1,yT(t,e,n,r)}finally{Ut.transition=i,le=r}return null}function yT(t,e,n,r){do Ki();while(ar!==null);if(oe&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(JE(t,s),t===We&&(Oe=We=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||za||(za=!0,I1(El,function(){return Ki(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ut.transition,Ut.transition=null;var o=le;le=1;var l=oe;oe|=4,df.current=null,dT(t,n),f1(n,t),jI(xh),Tl=!!Rh,xh=Rh=null,t.current=n,fT(n),$E(),oe=l,le=o,Ut.transition=s}else t.current=n;if(za&&(za=!1,ar=t,Fl=i),s=t.pendingLanes,s===0&&(pr=null),WE(n.stateNode),It(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(jl)throw jl=!1,t=Yh,Yh=null,t;return Fl&1&&t.tag!==0&&Ki(),s=t.pendingLanes,s&1?t===Xh?vo++:(vo=0,Xh=t):vo=0,Or(),null}function Ki(){if(ar!==null){var t=Z_(Fl),e=Ut.transition,n=le;try{if(Ut.transition=null,le=16>t?16:t,ar===null)var r=!1;else{if(t=ar,ar=null,Fl=0,oe&6)throw Error(F(331));var i=oe;for(oe|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(H=u;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:_o(8,f,s)}var m=f.child;if(m!==null)m.return=f,H=m;else for(;H!==null;){f=H;var g=f.sibling,I=f.return;if(u1(f),f===u){H=null;break}if(g!==null){g.return=I,H=g;break}H=I}}}var R=s.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var V=P.sibling;P.sibling=null,P=V}while(P!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_o(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,H=E;break e}H=s.return}}var v=t.current;for(H=v;H!==null;){o=H;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,H=S;else e:for(o=v;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yc(9,l)}}catch(b){Ae(l,l.return,b)}if(l===o){H=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,H=D;break e}H=l.return}}if(oe=i,Or(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(uc,t)}catch{}r=!0}return r}finally{le=n,Ut.transition=e}}return!1}function Cg(t,e,n){e=os(n,e),e=Zy(t,e,1),t=fr(t,e,1),e=dt(),t!==null&&(ea(t,1,e),It(t,e))}function Ae(t,e,n){if(t.tag===3)Cg(t,t,n);else for(;e!==null;){if(e.tag===3){Cg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pr===null||!pr.has(r))){t=os(n,t),t=e1(e,t,1),e=fr(e,t,1),t=dt(),e!==null&&(ea(e,1,t),It(e,t));break}}e=e.return}}function vT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Xe&n)===n&&(Be===4||Be===3&&(Xe&130023424)===Xe&&500>Re()-pf?ei(t,0):ff|=n),It(t,e)}function w1(t,e){e===0&&(t.mode&1?(e=Da,Da<<=1,!(Da&130023424)&&(Da=4194304)):e=1);var n=dt();t=Mn(t,e),t!==null&&(ea(t,e,n),It(t,n))}function wT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),w1(t,n)}function ET(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),w1(t,n)}var E1;E1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,lT(t,e,n);vt=!!(t.flags&131072)}else vt=!1,ve&&e.flags&1048576&&Ay(e,xl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;il(t,e),t=e.pendingProps;var i=ns(e,at.current);Gi(e,n),i=af(null,e,r,t,i,n);var s=lf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Et(r)?(s=!0,Pl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tf(e),i.updater=_c,e.stateNode=i,i._reactInternals=e,Fh(e,r,t,n),e=zh(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&Kd(e),ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(il(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TT(r),t=Gt(r,t),i){case 0:e=Bh(null,e,r,t,n);break e;case 1:e=gg(null,e,r,t,n);break e;case 11:e=pg(null,e,r,t,n);break e;case 14:e=mg(null,e,r,Gt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Bh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),gg(t,e,r,i,n);case 3:e:{if(i1(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Ny(t,e),Vl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=os(Error(F(423)),e),e=_g(t,e,r,n,i);break e}else if(r!==i){i=os(Error(F(424)),e),e=_g(t,e,r,n,i);break e}else for(Ct=dr(e.stateNode.containerInfo.firstChild),Pt=e,ve=!0,Qt=null,n=Ry(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rs(),r===i){e=bn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return Dy(e),t===null&&Mh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Nh(r,i)?o=null:s!==null&&Nh(r,s)&&(e.flags|=32),r1(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&Mh(e),null;case 13:return s1(t,e,n);case 4:return nf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=is(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),pg(t,e,r,i,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(Nl,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!wt.current){e=bn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Dn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),bh(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),bh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gi(e,n),i=$t(i),r=r(i),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,i=Gt(r,e.pendingProps),i=Gt(r.type,i),mg(t,e,r,i,n);case 15:return t1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),il(t,e),e.tag=1,Et(r)?(t=!0,Pl(e)):t=!1,Gi(e,n),Jy(e,r,i),Fh(e,r,i,n),zh(null,e,r,!0,t,n);case 19:return o1(t,e,n);case 22:return n1(t,e,n)}throw Error(F(156,e.tag))};function I1(t,e){return Q_(t,e)}function IT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new IT(t,e,n,r)}function yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TT(t){if(typeof t=="function")return yf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Md)return 11;if(t===bd)return 14}return 2}function gr(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function al(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ni:return ti(n.children,i,s,e);case Ld:o=8,i|=8;break;case ch:return t=Ft(12,n,e,i|2),t.elementType=ch,t.lanes=s,t;case uh:return t=Ft(13,n,e,i),t.elementType=uh,t.lanes=s,t;case hh:return t=Ft(19,n,e,i),t.elementType=hh,t.lanes=s,t;case D_:return wc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x_:o=10;break e;case N_:o=9;break e;case Md:o=11;break e;case bd:o=14;break e;case Jn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ti(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function wc(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=D_,t.lanes=n,t.stateNode={isHidden:!1},t}function Hu(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function qu(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ST(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Au(0),this.expirationTimes=Au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Au(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vf(t,e,n,r,i,s,o,l,c){return t=new ST(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tf(s),t}function AT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function T1(t){if(!t)return Tr;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Et(n))return Ty(t,n,e)}return e}function S1(t,e,n,r,i,s,o,l,c){return t=vf(n,r,!0,t,i,s,o,l,c),t.context=T1(null),n=t.current,r=dt(),i=mr(n),s=Dn(r,i),s.callback=e??null,fr(n,s,i),t.current.lanes=i,ea(t,i,r),It(t,r),t}function Ec(t,e,n,r){var i=e.current,s=dt(),o=mr(i);return n=T1(n),e.context===null?e.context=n:e.pendingContext=n,e=Dn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=fr(i,e,o),t!==null&&(Zt(t,i,o,s),tl(t,i,o)),o}function Bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wf(t,e){kg(t,e),(t=t.alternate)&&kg(t,e)}function CT(){return null}var A1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ef(t){this._internalRoot=t}Ic.prototype.render=Ef.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Ec(t,e,null,null)};Ic.prototype.unmount=Ef.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ai(function(){Ec(null,t,null,null)}),e[Ln]=null}};function Ic(t){this._internalRoot=t}Ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=ny();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&iy(t)}};function If(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pg(){}function kT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Bl(o);s.call(u)}}var o=S1(e,r,t,0,null,!1,!1,"",Pg);return t._reactRootContainer=o,t[Ln]=o.current,Oo(t.nodeType===8?t.parentNode:t),ai(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Bl(c);l.call(u)}}var c=vf(t,0,!1,null,null,!1,!1,"",Pg);return t._reactRootContainer=c,t[Ln]=c.current,Oo(t.nodeType===8?t.parentNode:t),ai(function(){Ec(e,c,n,r)}),c}function Sc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=Bl(o);l.call(c)}}Ec(e,o,t,i)}else o=kT(n,e,t,i,r);return Bl(o)}ey=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=no(e.pendingLanes);n!==0&&(Ud(e,n|1),It(e,Re()),!(oe&6)&&(as=Re()+500,Or()))}break;case 13:ai(function(){var r=Mn(t,1);if(r!==null){var i=dt();Zt(r,t,1,i)}}),wf(t,1)}};Bd=function(t){if(t.tag===13){var e=Mn(t,134217728);if(e!==null){var n=dt();Zt(e,t,134217728,n)}wf(t,134217728)}};ty=function(t){if(t.tag===13){var e=mr(t),n=Mn(t,e);if(n!==null){var r=dt();Zt(n,t,e,r)}wf(t,e)}};ny=function(){return le};ry=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};Eh=function(t,e,n){switch(e){case"input":if(ph(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=pc(r);if(!i)throw Error(F(90));O_(r),ph(r,i)}}}break;case"textarea":M_(t,n);break;case"select":e=n.value,e!=null&&$i(t,!!n.multiple,e,!1)}};$_=mf;H_=ai;var PT={usingClientEntryPoint:!1,Events:[na,Li,pc,B_,z_,mf]},Zs={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RT={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=G_(t),t===null?null:t.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||CT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{uc=$a.inject(RT),mn=$a}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PT;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!If(e))throw Error(F(200));return AT(t,e,null,n)};Nt.createRoot=function(t,e){if(!If(t))throw Error(F(299));var n=!1,r="",i=A1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vf(t,1,!1,null,null,n,!1,r,i),t[Ln]=e.current,Oo(t.nodeType===8?t.parentNode:t),new Ef(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=G_(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return ai(t)};Nt.hydrate=function(t,e,n){if(!Tc(e))throw Error(F(200));return Sc(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!If(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=A1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=S1(e,null,t,1,n??null,i,!1,s,o),t[Ln]=e.current,Oo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ic(e)};Nt.render=function(t,e,n){if(!Tc(e))throw Error(F(200));return Sc(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!Tc(t))throw Error(F(40));return t._reactRootContainer?(ai(function(){Sc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};Nt.unstable_batchedUpdates=mf;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Sc(t,e,n,!1,r)};Nt.version="18.3.1-next-f1338f8080-20240426";function C1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C1)}catch(t){console.error(t)}}C1(),C_.exports=Nt;var xT=C_.exports,Rg=xT;ah.createRoot=Rg.createRoot,ah.hydrateRoot=Rg.hydrateRoot;const NT=()=>{};var xg={};/**
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
 */const k1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},DT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},P1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|u>>6,I=u&63;c||(I=64,o||(g=64)),r.push(n[f],n[m],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(k1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):DT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||m==null)throw new VT;const g=s<<2|l>>4;if(r.push(g),u!==64){const I=l<<4&240|u>>2;if(r.push(I),m!==64){const R=u<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OT=function(t){const e=k1(t);return P1.encodeByteArray(e,!0)},zl=function(t){return OT(t).replace(/\./g,"")},R1=function(t){try{return P1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function LT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MT=()=>LT().__FIREBASE_DEFAULTS__,bT=()=>{if(typeof process>"u"||typeof xg>"u")return;const t=xg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&R1(t[1]);return e&&JSON.parse(e)},Ac=()=>{try{return NT()||MT()||bT()||jT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},x1=t=>{var e,n;return(n=(e=Ac())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},FT=t=>{const e=x1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},N1=()=>{var t;return(t=Ac())==null?void 0:t.config},D1=t=>{var e;return(e=Ac())==null?void 0:e[`_${t}`]};/**
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
 */class UT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function vs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function V1(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function BT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[zl(JSON.stringify(n)),zl(JSON.stringify(o)),""].join(".")}const wo={};function zT(){const t={prod:[],emulator:[]};for(const e of Object.keys(wo))wo[e]?t.emulator.push(e):t.prod.push(e);return t}function $T(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ng=!1;function O1(t,e){if(typeof window>"u"||typeof document>"u"||!vs(window.location.host)||wo[t]===e||wo[t]||Ng)return;wo[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=zT().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,I){g.setAttribute("width","24"),g.setAttribute("id",I),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Ng=!0,o()},g}function f(g,I){g.setAttribute("id",I),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=$T(r),I=n("text"),R=document.getElementById(I)||document.createElement("span"),P=n("learnmore"),V=document.getElementById(P)||document.createElement("a"),E=n("preprendIcon"),v=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const S=g.element;l(S),f(V,P);const D=u();c(v,E),S.append(v,R,V,D),document.body.appendChild(S)}s?(R.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function qT(){var e;const t=(e=Ac())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function L1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function GT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KT(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QT(){return!qT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function M1(){try{return typeof indexedDB=="object"}catch{return!1}}function b1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function YT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const XT="FirebaseError";class on extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=XT,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?JT(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new on(i,l,r)}}function JT(t,e){return t.replace(ZT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ZT=/\{\$([^}]+)}/g;function eS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Dg(s)&&Dg(o)){if(!Sr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Dg(t){return t!==null&&typeof t=="object"}/**
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
 */function ia(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function io(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function so(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tS(t,e){const n=new nS(t,e);return n.subscribe.bind(n)}class nS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wu),i.error===void 0&&(i.error=Wu),i.complete===void 0&&(i.complete=Wu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wu(){}/**
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
 */const iS=1e3,sS=2,oS=4*60*60*1e3,aS=.5;function Vg(t,e=iS,n=sS){const r=e*Math.pow(n,t),i=Math.round(aS*r*(Math.random()-.5)*2);return Math.min(oS,r+i)}/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}class tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kr="[DEFAULT]";/**
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
 */class lS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new UT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uS(e))try{this.getOrInitializeService({instanceIdentifier:Kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kr){return this.instances.has(e)}getOptions(e=Kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kr){return this.component?this.component.multipleInstances?e:Kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cS(t){return t===Kr?void 0:t}function uS(t){return t.instantiationMode==="EAGER"}/**
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
 */class hS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const dS={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},fS=ne.INFO,pS={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},mS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=pS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cc{constructor(e){this.name=e,this._logLevel=fS,this._logHandler=mS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const gS=(t,e)=>e.some(n=>t instanceof n);let Og,Lg;function _S(){return Og||(Og=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yS(){return Lg||(Lg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const j1=new WeakMap,ed=new WeakMap,F1=new WeakMap,Gu=new WeakMap,Tf=new WeakMap;function vS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_r(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&j1.set(n,t)}).catch(()=>{}),Tf.set(e,t),e}function wS(t){if(ed.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ed.set(t,e)}let td={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ed.get(t);if(e==="objectStoreNames")return t.objectStoreNames||F1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ES(t){td=t(td)}function IS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ku(this),e,...n);return F1.set(r,e.sort?e.sort():[e]),_r(r)}:yS().includes(t)?function(...e){return t.apply(Ku(this),e),_r(j1.get(this))}:function(...e){return _r(t.apply(Ku(this),e))}}function TS(t){return typeof t=="function"?IS(t):(t instanceof IDBTransaction&&wS(t),gS(t,_S())?new Proxy(t,td):t)}function _r(t){if(t instanceof IDBRequest)return vS(t);if(Gu.has(t))return Gu.get(t);const e=TS(t);return e!==t&&(Gu.set(t,e),Tf.set(e,t)),e}const Ku=t=>Tf.get(t);function U1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=_r(o);return r&&o.addEventListener("upgradeneeded",c=>{r(_r(o.result),c.oldVersion,c.newVersion,_r(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const SS=["get","getKey","getAll","getAllKeys","count"],AS=["put","add","delete","clear"],Qu=new Map;function Mg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qu.get(e))return Qu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=AS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||SS.includes(n)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return Qu.set(e,s),s}ES(t=>({...t,get:(e,n,r)=>Mg(e,n)||t.get(e,n,r),has:(e,n)=>!!Mg(e,n)||t.has(e,n)}));/**
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
 */class CS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nd="@firebase/app",bg="0.14.6";/**
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
 */const jn=new Cc("@firebase/app"),PS="@firebase/app-compat",RS="@firebase/analytics-compat",xS="@firebase/analytics",NS="@firebase/app-check-compat",DS="@firebase/app-check",VS="@firebase/auth",OS="@firebase/auth-compat",LS="@firebase/database",MS="@firebase/data-connect",bS="@firebase/database-compat",jS="@firebase/functions",FS="@firebase/functions-compat",US="@firebase/installations",BS="@firebase/installations-compat",zS="@firebase/messaging",$S="@firebase/messaging-compat",HS="@firebase/performance",qS="@firebase/performance-compat",WS="@firebase/remote-config",GS="@firebase/remote-config-compat",KS="@firebase/storage",QS="@firebase/storage-compat",YS="@firebase/firestore",XS="@firebase/ai",JS="@firebase/firestore-compat",ZS="firebase",eA="12.6.0";/**
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
 */const rd="[DEFAULT]",tA={[nd]:"fire-core",[PS]:"fire-core-compat",[xS]:"fire-analytics",[RS]:"fire-analytics-compat",[DS]:"fire-app-check",[NS]:"fire-app-check-compat",[VS]:"fire-auth",[OS]:"fire-auth-compat",[LS]:"fire-rtdb",[MS]:"fire-data-connect",[bS]:"fire-rtdb-compat",[jS]:"fire-fn",[FS]:"fire-fn-compat",[US]:"fire-iid",[BS]:"fire-iid-compat",[zS]:"fire-fcm",[$S]:"fire-fcm-compat",[HS]:"fire-perf",[qS]:"fire-perf-compat",[WS]:"fire-rc",[GS]:"fire-rc-compat",[KS]:"fire-gcs",[QS]:"fire-gcs-compat",[YS]:"fire-fst",[JS]:"fire-fst-compat",[XS]:"fire-vertex","fire-js":"fire-js",[ZS]:"fire-js-all"};/**
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
 */const $l=new Map,nA=new Map,id=new Map;function jg(t,e){try{t.container.addComponent(e)}catch(n){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tn(t){const e=t.name;if(id.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;id.set(e,t);for(const n of $l.values())jg(n,t);for(const n of nA.values())jg(n,t);return!0}function gi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Yt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const rA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new mi("app","Firebase",rA);/**
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
 */class iA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
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
 */const ws=eA;function B1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:rd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw yr.create("bad-app-name",{appName:String(i)});if(n||(n=N1()),!n)throw yr.create("no-options");const s=$l.get(i);if(s){if(Sr(n,s.options)&&Sr(r,s.config))return s;throw yr.create("duplicate-app",{appName:i})}const o=new hS(i);for(const c of id.values())o.addComponent(c);const l=new iA(n,r,o);return $l.set(i,l),l}function Sf(t=rd){const e=$l.get(t);if(!e&&t===rd&&N1())return B1();if(!e)throw yr.create("no-app",{appName:t});return e}function Bt(t,e,n){let r=tA[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(o.join(" "));return}Tn(new tn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const sA="firebase-heartbeat-database",oA=1,$o="firebase-heartbeat-store";let Yu=null;function z1(){return Yu||(Yu=U1(sA,oA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($o)}catch(n){console.warn(n)}}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),Yu}async function aA(t){try{const n=(await z1()).transaction($o),r=await n.objectStore($o).get($1(t));return await n.done,r}catch(e){if(e instanceof on)jn.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jn.warn(n.message)}}}async function Fg(t,e){try{const r=(await z1()).transaction($o,"readwrite");await r.objectStore($o).put(e,$1(t)),await r.done}catch(n){if(n instanceof on)jn.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jn.warn(r.message)}}}function $1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lA=1024,cA=30;class uA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ug();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>cA){const o=fA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){jn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ug(),{heartbeatsToSend:r,unsentEntries:i}=hA(this._heartbeatsCache.heartbeats),s=zl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return jn.warn(n),""}}}function Ug(){return new Date().toISOString().substring(0,10)}function hA(t,e=lA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return M1()?b1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await aA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Bg(t){return zl(JSON.stringify({version:2,heartbeats:t})).length}function fA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function pA(t){Tn(new tn("platform-logger",e=>new CS(e),"PRIVATE")),Tn(new tn("heartbeat",e=>new uA(e),"PRIVATE")),Bt(nd,bg,t),Bt(nd,bg,"esm2020"),Bt("fire-js","")}pA("");function H1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mA=H1,q1=new mi("auth","Firebase",H1());/**
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
 */const Hl=new Cc("@firebase/auth");function gA(t,...e){Hl.logLevel<=ne.WARN&&Hl.warn(`Auth (${ws}): ${t}`,...e)}function ll(t,...e){Hl.logLevel<=ne.ERROR&&Hl.error(`Auth (${ws}): ${t}`,...e)}/**
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
 */function nn(t,...e){throw Af(t,...e)}function _n(t,...e){return Af(t,...e)}function W1(t,e,n){const r={...mA(),[e]:n};return new mi("auth","Firebase",r).create(e,{appName:t.name})}function vr(t){return W1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Af(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return q1.create(t,...e)}function G(t,e,...n){if(!t)throw Af(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ll(e),new Error(e)}function Fn(t,e){t||xn(e)}/**
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
 */function sd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function _A(){return zg()==="http:"||zg()==="https:"}function zg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function yA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_A()||L1()||"connection"in navigator)?navigator.onLine:!0}function vA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class sa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=HT()||GT()}get(){return yA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cf(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class G1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const EA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],IA=new sa(3e4,6e4);function _i(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Lr(t,e,n,r,i={}){return K1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ia({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...s};return WT()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&vs(t.emulatorConfig.host)&&(u.credentials="include"),G1.fetch()(await Q1(t,t.config.apiHost,n,l),u)})}async function K1(t,e,n){t._canInitEmulator=!1;const r={...wA,...e};try{const i=new SA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ha(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ha(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ha(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ha(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw W1(t,f,u);nn(t,f)}}catch(i){if(i instanceof on)throw i;nn(t,"network-request-failed",{message:String(i)})}}async function kc(t,e,n,r,i={}){const s=await Lr(t,e,n,r,i);return"mfaPendingCredential"in s&&nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Q1(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Cf(t.config,i):`${t.config.apiScheme}://${i}`;return EA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function TA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class SA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),IA.get())})}}function Ha(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_n(t,e,r);return i.customData._tokenResponse=n,i}function $g(t){return t!==void 0&&t.enterprise!==void 0}class AA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return TA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function CA(t,e){return Lr(t,"GET","/v2/recaptchaConfig",_i(t,e))}/**
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
 */async function kA(t,e){return Lr(t,"POST","/v1/accounts:delete",e)}async function ql(t,e){return Lr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PA(t,e=!1){const n=De(t),r=await n.getIdToken(e),i=kf(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Eo(Xu(i.auth_time)),issuedAtTime:Eo(Xu(i.iat)),expirationTime:Eo(Xu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xu(t){return Number(t)*1e3}function kf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ll("JWT malformed, contained fewer than 3 sections"),null;try{const i=R1(n);return i?JSON.parse(i):(ll("Failed to decode base64 JWT payload"),null)}catch(i){return ll("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hg(t){const e=kf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ho(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof on&&RA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function RA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class xA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class od{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eo(this.lastLoginAt),this.creationTime=Eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wl(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Ho(t,ql(e,{idToken:n}));G(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?Y1(i.providerUserInfo):[],o=DA(t.providerData,s),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new od(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function NA(t){const e=De(t);await Wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Y1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function VA(t,e){const n=await K1(t,{},async()=>{const r=ia({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Q1(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&vs(t.emulatorConfig.host)&&(c.credentials="include"),G1.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function OA(t,e){return Lr(t,"POST","/v2/accounts:revokeToken",_i(t,e))}/**
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
 */class Qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Hg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await VA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Qi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qi,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
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
 */function Xn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new xA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new od(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ho(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return PA(this,e)}reload(){return NA(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(vr(this.auth));const e=await this.getIdToken();return await Ho(this,kA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:I,providerData:R,stsTokenManager:P}=n;G(m&&P,e,"internal-error");const V=Qi.fromJSON(this.name,P);G(typeof m=="string",e,"internal-error"),Xn(r,e.name),Xn(i,e.name),G(typeof g=="boolean",e,"internal-error"),G(typeof I=="boolean",e,"internal-error"),Xn(s,e.name),Xn(o,e.name),Xn(l,e.name),Xn(c,e.name),Xn(u,e.name),Xn(f,e.name);const E=new Xt({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:V,createdAt:u,lastLoginAt:f});return R&&Array.isArray(R)&&(E.providerData=R.map(v=>({...v}))),c&&(E._redirectEventId=c),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qi;i.updateFromServerResponse(n);const s=new Xt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Wl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Y1(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Qi;l.updateFromIdToken(r);const c=new Xt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new od(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
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
 */const qg=new Map;function Nn(t){Fn(t instanceof Function,"Expected a class definition");let e=qg.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qg.set(t,e),e)}/**
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
 */class X1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}X1.type="NONE";const Wg=X1;/**
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
 */function cl(t,e,n){return`firebase:${t}:${e}:${n}`}class Yi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=cl(this.userKey,i.apiKey,s),this.fullPersistenceKey=cl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ql(this.auth,{idToken:e}).catch(()=>{});return n?Xt._fromGetAccountInfoResponse(this.auth,n,e):null}return Xt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yi(Nn(Wg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Nn(Wg);const o=cl(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let m;if(typeof f=="string"){const g=await ql(e,{idToken:f}).catch(()=>{});if(!g)break;m=await Xt._fromGetAccountInfoResponse(e,g,f)}else m=Xt._fromJSON(e,f);u!==s&&(l=m),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Yi(s,e,r):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Yi(s,e,r))}}/**
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
 */function Gg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(J1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rv(e))return"Blackberry";if(iv(e))return"Webos";if(Z1(e))return"Safari";if((e.includes("chrome/")||ev(e))&&!e.includes("edge/"))return"Chrome";if(nv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function J1(t=lt()){return/firefox\//i.test(t)}function Z1(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ev(t=lt()){return/crios\//i.test(t)}function tv(t=lt()){return/iemobile/i.test(t)}function nv(t=lt()){return/android/i.test(t)}function rv(t=lt()){return/blackberry/i.test(t)}function iv(t=lt()){return/webos/i.test(t)}function Pf(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LA(t=lt()){var e;return Pf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function MA(){return KT()&&document.documentMode===10}function sv(t=lt()){return Pf(t)||nv(t)||iv(t)||rv(t)||/windows phone/i.test(t)||tv(t)}/**
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
 */function ov(t,e=[]){let n;switch(t){case"Browser":n=Gg(lt());break;case"Worker":n=`${Gg(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ws}/${r}`}/**
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
 */class bA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function jA(t,e={}){return Lr(t,"GET","/v2/passwordPolicy",_i(t,e))}/**
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
 */const FA=6;class UA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??FA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class BA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kg(this),this.idTokenSubscription=new Kg(this),this.beforeStateQueue=new bA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=q1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Yi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ql(this,{idToken:e}),r=await Xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yt(this.app))return Promise.reject(vr(this));const n=e?De(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject(vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yt(this.app)?Promise.reject(vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jA(this),n=new UA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await OA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Yi.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ov(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&gA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Es(t){return De(t)}class Kg{constructor(e){this.auth=e,this.observer=null,this.addObserver=tS(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Pc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zA(t){Pc=t}function av(t){return Pc.loadJS(t)}function $A(){return Pc.recaptchaEnterpriseScript}function HA(){return Pc.gapiScript}function qA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class WA{constructor(){this.enterprise=new GA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class GA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const KA="recaptcha-enterprise",lv="NO_RECAPTCHA";class QA{constructor(e){this.type=KA,this.auth=Es(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{CA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new AA(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function i(s,o,l){const c=window.grecaptcha;$g(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(lv)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new WA().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&$g(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=$A();c.length!==0&&(c+=l),av(c).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Qg(t,e,n,r=!1,i=!1){const s=new QA(t);let o;if(i)o=lv;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Yg(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Qg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Qg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function YA(t,e){const n=gi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Sr(s,e??{}))return i;nn(i,"already-initialized")}return n.initialize({options:e})}function XA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function JA(t,e,n){const r=Es(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=cv(e),{host:o,port:l}=ZA(e),c=l===null?"":`:${l}`,u={url:`${s}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(Sr(u,r.config.emulator)&&Sr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,vs(o)?(V1(`${s}//${o}${c}`),O1("Auth",!0)):eC()}function cv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZA(t){const e=cv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xg(o)}}}function Xg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Rf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}async function tC(t,e){return Lr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function nC(t,e){return kc(t,"POST","/v1/accounts:signInWithPassword",_i(t,e))}/**
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
 */async function rC(t,e){return kc(t,"POST","/v1/accounts:signInWithEmailLink",_i(t,e))}async function iC(t,e){return kc(t,"POST","/v1/accounts:signInWithEmailLink",_i(t,e))}/**
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
 */class qo extends Rf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new qo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new qo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yg(e,n,"signInWithPassword",nC);case"emailLink":return rC(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yg(e,r,"signUpPassword",tC);case"emailLink":return iC(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xi(t,e){return kc(t,"POST","/v1/accounts:signInWithIdp",_i(t,e))}/**
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
 */const sC="http://localhost";class li extends Rf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new li(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xi(e,n)}buildRequest(){const e={requestUri:sC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ia(n)}return e}}/**
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
 */function oC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aC(t){const e=io(so(t)).link,n=e?io(so(e)).deep_link_id:null,r=io(so(t)).deep_link_id;return(r?io(so(r)).link:null)||r||n||e||t}class xf{constructor(e){const n=io(so(e)),r=n.apiKey??null,i=n.oobCode??null,s=oC(n.mode??null);G(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=aC(e);try{return new xf(n)}catch{return null}}}/**
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
 */class Is{constructor(){this.providerId=Is.PROVIDER_ID}static credential(e,n){return qo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xf.parseLink(n);return G(r,"argument-error"),qo._fromEmailAndCode(e,r.code,r.tenantId)}}Is.PROVIDER_ID="password";Is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class uv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class oa extends uv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class nr extends oa{constructor(){super("facebook.com")}static credential(e){return li._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
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
 */class rr extends oa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return li._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
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
 */class ir extends oa{constructor(){super("github.com")}static credential(e){return li._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
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
 */class sr extends oa{constructor(){super("twitter.com")}static credential(e,n){return li._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
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
 */class ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Xt._fromIdTokenResponse(e,r,i),o=Jg(r);return new ls({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Jg(r);return new ls({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Jg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Gl extends on{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Gl(e,n,r,i)}}function hv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Gl._fromErrorAndOperation(t,s,e,r):s})}async function lC(t,e,n=!1){const r=await Ho(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ls._forOperation(t,"link",r)}/**
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
 */async function cC(t,e,n=!1){const{auth:r}=t;if(Yt(r.app))return Promise.reject(vr(r));const i="reauthenticate";try{const s=await Ho(t,hv(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=kf(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),ls._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),s}}/**
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
 */async function dv(t,e,n=!1){if(Yt(t.app))return Promise.reject(vr(t));const r="signIn",i=await hv(t,r,e),s=await ls._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function uC(t,e){return dv(Es(t),e)}/**
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
 */async function hC(t){const e=Es(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function dC(t,e,n){return Yt(t.app)?Promise.reject(vr(t)):uC(De(t),Is.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hC(t),r})}function fC(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function pC(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function mC(t,e,n,r){return De(t).onAuthStateChanged(e,n,r)}function gC(t){return De(t).signOut()}const Kl="__sak";/**
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
 */class fv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Kl,"1"),this.storage.removeItem(Kl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _C=1e3,yC=10;class pv extends fv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);MA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_C)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pv.type="LOCAL";const vC=pv;/**
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
 */class mv extends fv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mv.type="SESSION";const gv=mv;/**
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
 */function wC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Rc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),c=await wC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rc.receivers=[];/**
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
 */function Nf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class EC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const u=Nf("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yn(){return window}function IC(t){yn().location.href=t}/**
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
 */function _v(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function TC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function AC(){return _v()?self:null}/**
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
 */const yv="firebaseLocalStorageDb",CC=1,Ql="firebaseLocalStorage",vv="fbase_key";class aa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xc(t,e){return t.transaction([Ql],e?"readwrite":"readonly").objectStore(Ql)}function kC(){const t=indexedDB.deleteDatabase(yv);return new aa(t).toPromise()}function ad(){const t=indexedDB.open(yv,CC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ql,{keyPath:vv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ql)?e(r):(r.close(),await kC(),e(await ad()))})})}async function Zg(t,e,n){const r=xc(t,!0).put({[vv]:e,value:n});return new aa(r).toPromise()}async function PC(t,e){const n=xc(t,!1).get(e),r=await new aa(n).toPromise();return r===void 0?null:r.value}function e0(t,e){const n=xc(t,!0).delete(e);return new aa(n).toPromise()}const RC=800,xC=3;class wv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ad(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _v()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rc._getInstance(AC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await TC(),!this.activeServiceWorker)return;this.sender=new EC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ad();return await Zg(e,Kl,"1"),await e0(e,Kl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>PC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>e0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xc(i,!1).getAll();return new aa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wv.type="LOCAL";const NC=wv;new sa(3e4,6e4);/**
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
 */function DC(t,e){return e?Nn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Df extends Rf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VC(t){return dv(t.auth,new Df(t),t.bypassAuthState)}function OC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),cC(n,new Df(t),t.bypassAuthState)}async function LC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),lC(n,new Df(t),t.bypassAuthState)}/**
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
 */class Ev{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VC;case"linkViaPopup":case"linkViaRedirect":return LC;case"reauthViaPopup":case"reauthViaRedirect":return OC;default:nn(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const MC=new sa(2e3,1e4);class zi extends Ev{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=Nf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MC.get())};e()}}zi.currentPopupAction=null;/**
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
 */const bC="pendingRedirect",ul=new Map;class jC extends Ev{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const r=await FC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FC(t,e){const n=zC(e),r=BC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function UC(t,e){ul.set(t._key(),e)}function BC(t){return Nn(t._redirectPersistence)}function zC(t){return cl(bC,t.config.apiKey,t.name)}async function $C(t,e,n=!1){if(Yt(t.app))return Promise.reject(vr(t));const r=Es(t),i=DC(r,e),o=await new jC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const HC=10*60*1e3;class qC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Iv(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HC&&this.cachedEventUids.clear(),this.cachedEventUids.has(t0(e))}saveEventToCache(e){this.cachedEventUids.add(t0(e)),this.lastProcessedEventTime=Date.now()}}function t0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Iv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Iv(t);default:return!1}}/**
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
 */async function GC(t,e={}){return Lr(t,"GET","/v1/projects",e)}/**
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
 */const KC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QC=/^https?/;async function YC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GC(t);for(const n of e)try{if(XC(n))return}catch{}nn(t,"unauthorized-domain")}function XC(t){const e=sd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!QC.test(n))return!1;if(KC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const JC=new sa(3e4,6e4);function n0(){const t=yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZC(t){return new Promise((e,n)=>{var i,s,o;function r(){n0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{n0(),n(_n(t,"network-request-failed"))},timeout:JC.get()})}if((s=(i=yn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=yn().gapi)!=null&&o.load)r();else{const l=qA("iframefcb");return yn()[l]=()=>{gapi.load?r():n(_n(t,"network-request-failed"))},av(`${HA()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw hl=null,e})}let hl=null;function ek(t){return hl=hl||ZC(t),hl}/**
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
 */const tk=new sa(5e3,15e3),nk="__/auth/iframe",rk="emulator/auth/iframe",ik={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ok(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cf(e,rk):`https://${t.config.authDomain}/${nk}`,r={apiKey:e.apiKey,appName:t.name,v:ws},i=sk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ia(r).slice(1)}`}async function ak(t){const e=await ek(t),n=yn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:ok(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ik,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),l=yn().setTimeout(()=>{s(o)},tk.get());function c(){yn().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const lk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ck=500,uk=600,hk="_blank",dk="http://localhost";class r0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fk(t,e,n,r=ck,i=uk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...lk,width:r.toString(),height:i.toString(),top:s,left:o},u=lt().toLowerCase();n&&(l=ev(u)?hk:n),J1(u)&&(e=e||dk,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[I,R])=>`${g}${I}=${R},`,"");if(LA(u)&&l!=="_self")return pk(e||"",l),new r0(null);const m=window.open(e||"",l,f);G(m,t,"popup-blocked");try{m.focus()}catch{}return new r0(m)}function pk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const mk="__/auth/handler",gk="emulator/auth/handler",_k=encodeURIComponent("fac");async function i0(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ws,eventId:i};if(e instanceof uv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof oa){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${_k}=${encodeURIComponent(c)}`:"";return`${yk(t)}?${ia(l).slice(1)}${u}`}function yk({config:t}){return t.emulator?Cf(t,gk):`https://${t.authDomain}/${mk}`}/**
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
 */const Ju="webStorageSupport";class vk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gv,this._completeRedirectFn=$C,this._overrideRedirectResult=UC}async _openPopup(e,n,r,i){var o;Fn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await i0(e,n,r,sd(),i);return fk(e,s,Nf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await i0(e,n,r,sd(),i);return IC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ak(e),r=new qC(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ju,{type:Ju},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Ju];s!==void 0&&n(!!s),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sv()||Z1()||Pf()}}const wk=vk;var s0="@firebase/auth",o0="1.12.0";/**
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
 */class Ek{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ik(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Tk(t){Tn(new tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ov(t)},u=new BA(r,i,s,c);return XA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tn(new tn("auth-internal",e=>{const n=Es(e.getProvider("auth").getImmediate());return(r=>new Ek(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(s0,o0,Ik(t)),Bt(s0,o0,"esm2020")}/**
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
 */const Sk=5*60,Ak=D1("authIdTokenMaxAge")||Sk;let a0=null;const Ck=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ak)return;const i=n==null?void 0:n.token;a0!==i&&(a0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kk(t=Sf()){const e=gi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YA(t,{popupRedirectResolver:wk,persistence:[NC,vC,gv]}),r=D1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Ck(s.toString());pC(n,o,()=>o(n.currentUser)),fC(n,l=>o(l))}}const i=x1("auth");return i&&JA(n,`http://${i}`),n}function Pk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}zA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Pk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Tk("Browser");var Rk="firebase",xk="12.7.0";/**
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
 */Bt(Rk,xk,"app");var l0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wr,Tv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function A(){}A.prototype=y.prototype,w.F=y.prototype,w.prototype=new A,w.prototype.constructor=w,w.D=function(T,k,x){for(var C=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)C[Ge-2]=arguments[Ge];return y.prototype[k].apply(T,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,A){A||(A=0);const T=Array(16);if(typeof y=="string")for(var k=0;k<16;++k)T[k]=y.charCodeAt(A++)|y.charCodeAt(A++)<<8|y.charCodeAt(A++)<<16|y.charCodeAt(A++)<<24;else for(k=0;k<16;++k)T[k]=y[A++]|y[A++]<<8|y[A++]<<16|y[A++]<<24;y=w.g[0],A=w.g[1],k=w.g[2];let x=w.g[3],C;C=y+(x^A&(k^x))+T[0]+3614090360&4294967295,y=A+(C<<7&4294967295|C>>>25),C=x+(k^y&(A^k))+T[1]+3905402710&4294967295,x=y+(C<<12&4294967295|C>>>20),C=k+(A^x&(y^A))+T[2]+606105819&4294967295,k=x+(C<<17&4294967295|C>>>15),C=A+(y^k&(x^y))+T[3]+3250441966&4294967295,A=k+(C<<22&4294967295|C>>>10),C=y+(x^A&(k^x))+T[4]+4118548399&4294967295,y=A+(C<<7&4294967295|C>>>25),C=x+(k^y&(A^k))+T[5]+1200080426&4294967295,x=y+(C<<12&4294967295|C>>>20),C=k+(A^x&(y^A))+T[6]+2821735955&4294967295,k=x+(C<<17&4294967295|C>>>15),C=A+(y^k&(x^y))+T[7]+4249261313&4294967295,A=k+(C<<22&4294967295|C>>>10),C=y+(x^A&(k^x))+T[8]+1770035416&4294967295,y=A+(C<<7&4294967295|C>>>25),C=x+(k^y&(A^k))+T[9]+2336552879&4294967295,x=y+(C<<12&4294967295|C>>>20),C=k+(A^x&(y^A))+T[10]+4294925233&4294967295,k=x+(C<<17&4294967295|C>>>15),C=A+(y^k&(x^y))+T[11]+2304563134&4294967295,A=k+(C<<22&4294967295|C>>>10),C=y+(x^A&(k^x))+T[12]+1804603682&4294967295,y=A+(C<<7&4294967295|C>>>25),C=x+(k^y&(A^k))+T[13]+4254626195&4294967295,x=y+(C<<12&4294967295|C>>>20),C=k+(A^x&(y^A))+T[14]+2792965006&4294967295,k=x+(C<<17&4294967295|C>>>15),C=A+(y^k&(x^y))+T[15]+1236535329&4294967295,A=k+(C<<22&4294967295|C>>>10),C=y+(k^x&(A^k))+T[1]+4129170786&4294967295,y=A+(C<<5&4294967295|C>>>27),C=x+(A^k&(y^A))+T[6]+3225465664&4294967295,x=y+(C<<9&4294967295|C>>>23),C=k+(y^A&(x^y))+T[11]+643717713&4294967295,k=x+(C<<14&4294967295|C>>>18),C=A+(x^y&(k^x))+T[0]+3921069994&4294967295,A=k+(C<<20&4294967295|C>>>12),C=y+(k^x&(A^k))+T[5]+3593408605&4294967295,y=A+(C<<5&4294967295|C>>>27),C=x+(A^k&(y^A))+T[10]+38016083&4294967295,x=y+(C<<9&4294967295|C>>>23),C=k+(y^A&(x^y))+T[15]+3634488961&4294967295,k=x+(C<<14&4294967295|C>>>18),C=A+(x^y&(k^x))+T[4]+3889429448&4294967295,A=k+(C<<20&4294967295|C>>>12),C=y+(k^x&(A^k))+T[9]+568446438&4294967295,y=A+(C<<5&4294967295|C>>>27),C=x+(A^k&(y^A))+T[14]+3275163606&4294967295,x=y+(C<<9&4294967295|C>>>23),C=k+(y^A&(x^y))+T[3]+4107603335&4294967295,k=x+(C<<14&4294967295|C>>>18),C=A+(x^y&(k^x))+T[8]+1163531501&4294967295,A=k+(C<<20&4294967295|C>>>12),C=y+(k^x&(A^k))+T[13]+2850285829&4294967295,y=A+(C<<5&4294967295|C>>>27),C=x+(A^k&(y^A))+T[2]+4243563512&4294967295,x=y+(C<<9&4294967295|C>>>23),C=k+(y^A&(x^y))+T[7]+1735328473&4294967295,k=x+(C<<14&4294967295|C>>>18),C=A+(x^y&(k^x))+T[12]+2368359562&4294967295,A=k+(C<<20&4294967295|C>>>12),C=y+(A^k^x)+T[5]+4294588738&4294967295,y=A+(C<<4&4294967295|C>>>28),C=x+(y^A^k)+T[8]+2272392833&4294967295,x=y+(C<<11&4294967295|C>>>21),C=k+(x^y^A)+T[11]+1839030562&4294967295,k=x+(C<<16&4294967295|C>>>16),C=A+(k^x^y)+T[14]+4259657740&4294967295,A=k+(C<<23&4294967295|C>>>9),C=y+(A^k^x)+T[1]+2763975236&4294967295,y=A+(C<<4&4294967295|C>>>28),C=x+(y^A^k)+T[4]+1272893353&4294967295,x=y+(C<<11&4294967295|C>>>21),C=k+(x^y^A)+T[7]+4139469664&4294967295,k=x+(C<<16&4294967295|C>>>16),C=A+(k^x^y)+T[10]+3200236656&4294967295,A=k+(C<<23&4294967295|C>>>9),C=y+(A^k^x)+T[13]+681279174&4294967295,y=A+(C<<4&4294967295|C>>>28),C=x+(y^A^k)+T[0]+3936430074&4294967295,x=y+(C<<11&4294967295|C>>>21),C=k+(x^y^A)+T[3]+3572445317&4294967295,k=x+(C<<16&4294967295|C>>>16),C=A+(k^x^y)+T[6]+76029189&4294967295,A=k+(C<<23&4294967295|C>>>9),C=y+(A^k^x)+T[9]+3654602809&4294967295,y=A+(C<<4&4294967295|C>>>28),C=x+(y^A^k)+T[12]+3873151461&4294967295,x=y+(C<<11&4294967295|C>>>21),C=k+(x^y^A)+T[15]+530742520&4294967295,k=x+(C<<16&4294967295|C>>>16),C=A+(k^x^y)+T[2]+3299628645&4294967295,A=k+(C<<23&4294967295|C>>>9),C=y+(k^(A|~x))+T[0]+4096336452&4294967295,y=A+(C<<6&4294967295|C>>>26),C=x+(A^(y|~k))+T[7]+1126891415&4294967295,x=y+(C<<10&4294967295|C>>>22),C=k+(y^(x|~A))+T[14]+2878612391&4294967295,k=x+(C<<15&4294967295|C>>>17),C=A+(x^(k|~y))+T[5]+4237533241&4294967295,A=k+(C<<21&4294967295|C>>>11),C=y+(k^(A|~x))+T[12]+1700485571&4294967295,y=A+(C<<6&4294967295|C>>>26),C=x+(A^(y|~k))+T[3]+2399980690&4294967295,x=y+(C<<10&4294967295|C>>>22),C=k+(y^(x|~A))+T[10]+4293915773&4294967295,k=x+(C<<15&4294967295|C>>>17),C=A+(x^(k|~y))+T[1]+2240044497&4294967295,A=k+(C<<21&4294967295|C>>>11),C=y+(k^(A|~x))+T[8]+1873313359&4294967295,y=A+(C<<6&4294967295|C>>>26),C=x+(A^(y|~k))+T[15]+4264355552&4294967295,x=y+(C<<10&4294967295|C>>>22),C=k+(y^(x|~A))+T[6]+2734768916&4294967295,k=x+(C<<15&4294967295|C>>>17),C=A+(x^(k|~y))+T[13]+1309151649&4294967295,A=k+(C<<21&4294967295|C>>>11),C=y+(k^(A|~x))+T[4]+4149444226&4294967295,y=A+(C<<6&4294967295|C>>>26),C=x+(A^(y|~k))+T[11]+3174756917&4294967295,x=y+(C<<10&4294967295|C>>>22),C=k+(y^(x|~A))+T[2]+718787259&4294967295,k=x+(C<<15&4294967295|C>>>17),C=A+(x^(k|~y))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(k+(C<<21&4294967295|C>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+x&4294967295}r.prototype.v=function(w,y){y===void 0&&(y=w.length);const A=y-this.blockSize,T=this.C;let k=this.h,x=0;for(;x<y;){if(k==0)for(;x<=A;)i(this,w,x),x+=this.blockSize;if(typeof w=="string"){for(;x<y;)if(T[k++]=w.charCodeAt(x++),k==this.blockSize){i(this,T),k=0;break}}else for(;x<y;)if(T[k++]=w[x++],k==this.blockSize){i(this,T),k=0;break}}this.h=k,this.o+=y},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;y=this.o*8;for(var A=w.length-8;A<w.length;++A)w[A]=y&255,y/=256;for(this.v(w),w=Array(16),y=0,A=0;A<4;++A)for(let T=0;T<32;T+=8)w[y++]=this.g[A]>>>T&255;return w};function s(w,y){var A=l;return Object.prototype.hasOwnProperty.call(A,w)?A[w]:A[w]=y(w)}function o(w,y){this.h=y;const A=[];let T=!0;for(let k=w.length-1;k>=0;k--){const x=w[k]|0;T&&x==y||(A[k]=x,T=!1)}this.g=A}var l={};function c(w){return-128<=w&&w<128?s(w,function(y){return new o([y|0],y<0?-1:0)}):new o([w|0],w<0?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return m;if(w<0)return V(u(-w));const y=[];let A=1;for(let T=0;w>=A;T++)y[T]=w/A|0,A*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return V(f(w.substring(1),y));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const A=u(Math.pow(y,8));let T=m;for(let x=0;x<w.length;x+=8){var k=Math.min(8,w.length-x);const C=parseInt(w.substring(x,x+k),y);k<8?(k=u(Math.pow(y,k)),T=T.j(k).add(u(C))):(T=T.j(A),T=T.add(u(C)))}return T}var m=c(0),g=c(1),I=c(16777216);t=o.prototype,t.m=function(){if(P(this))return-V(this).m();let w=0,y=1;for(let A=0;A<this.g.length;A++){const T=this.i(A);w+=(T>=0?T:4294967296+T)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(P(this))return"-"+V(this).toString(w);const y=u(Math.pow(w,6));var A=this;let T="";for(;;){const k=D(A,y).g;A=E(A,k.j(y));let x=((A.g.length>0?A.g[0]:A.h)>>>0).toString(w);if(A=k,R(A))return x+T;for(;x.length<6;)x="0"+x;T=x+T}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(let y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=E(this,w),P(w)?-1:R(w)?0:1};function V(w){const y=w.g.length,A=[];for(let T=0;T<y;T++)A[T]=~w.g[T];return new o(A,~w.h).add(g)}t.abs=function(){return P(this)?V(this):this},t.add=function(w){const y=Math.max(this.g.length,w.g.length),A=[];let T=0;for(let k=0;k<=y;k++){let x=T+(this.i(k)&65535)+(w.i(k)&65535),C=(x>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);T=C>>>16,x&=65535,C&=65535,A[k]=C<<16|x}return new o(A,A[A.length-1]&-2147483648?-1:0)};function E(w,y){return w.add(V(y))}t.j=function(w){if(R(this)||R(w))return m;if(P(this))return P(w)?V(this).j(V(w)):V(V(this).j(w));if(P(w))return V(this.j(V(w)));if(this.l(I)<0&&w.l(I)<0)return u(this.m()*w.m());const y=this.g.length+w.g.length,A=[];for(var T=0;T<2*y;T++)A[T]=0;for(T=0;T<this.g.length;T++)for(let k=0;k<w.g.length;k++){const x=this.i(T)>>>16,C=this.i(T)&65535,Ge=w.i(k)>>>16,An=w.i(k)&65535;A[2*T+2*k]+=C*An,v(A,2*T+2*k),A[2*T+2*k+1]+=x*An,v(A,2*T+2*k+1),A[2*T+2*k+1]+=C*Ge,v(A,2*T+2*k+1),A[2*T+2*k+2]+=x*Ge,v(A,2*T+2*k+2)}for(w=0;w<y;w++)A[w]=A[2*w+1]<<16|A[2*w];for(w=y;w<2*y;w++)A[w]=0;return new o(A,0)};function v(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function S(w,y){this.g=w,this.h=y}function D(w,y){if(R(y))throw Error("division by zero");if(R(w))return new S(m,m);if(P(w))return y=D(V(w),y),new S(V(y.g),V(y.h));if(P(y))return y=D(w,V(y)),new S(V(y.g),y.h);if(w.g.length>30){if(P(w)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var A=g,T=y;T.l(w)<=0;)A=b(A),T=b(T);var k=j(A,1),x=j(T,1);for(T=j(T,2),A=j(A,2);!R(T);){var C=x.add(T);C.l(w)<=0&&(k=k.add(A),x=C),T=j(T,1),A=j(A,1)}return y=E(w,k.j(y)),new S(k,y)}for(k=m;w.l(y)>=0;){for(A=Math.max(1,Math.floor(w.m()/y.m())),T=Math.ceil(Math.log(A)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),x=u(A),C=x.j(y);P(C)||C.l(w)>0;)A-=T,x=u(A),C=x.j(y);R(x)&&(x=g),k=k.add(x),w=E(w,C)}return new S(k,w)}t.B=function(w){return D(this,w).h},t.and=function(w){const y=Math.max(this.g.length,w.g.length),A=[];for(let T=0;T<y;T++)A[T]=this.i(T)&w.i(T);return new o(A,this.h&w.h)},t.or=function(w){const y=Math.max(this.g.length,w.g.length),A=[];for(let T=0;T<y;T++)A[T]=this.i(T)|w.i(T);return new o(A,this.h|w.h)},t.xor=function(w){const y=Math.max(this.g.length,w.g.length),A=[];for(let T=0;T<y;T++)A[T]=this.i(T)^w.i(T);return new o(A,this.h^w.h)};function b(w){const y=w.g.length+1,A=[];for(let T=0;T<y;T++)A[T]=w.i(T)<<1|w.i(T-1)>>>31;return new o(A,w.h)}function j(w,y){const A=y>>5;y%=32;const T=w.g.length-A,k=[];for(let x=0;x<T;x++)k[x]=y>0?w.i(x+A)>>>y|w.i(x+A+1)<<32-y:w.i(x+A);return new o(k,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Tv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,wr=o}).apply(typeof l0<"u"?l0:typeof self<"u"?self:typeof window<"u"?window:{});var qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sv,oo,Av,dl,ld,Cv,kv,Pv;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof qa=="object"&&qa];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var N=a[_];if(!(N in d))break e;d=d[N]}a=a[a.length-1],_=d[a],h=h(_),h!=_&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var d=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&d.push([_,h[_]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=c,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function m(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(_,N,O){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return h.prototype[N].apply(_,U)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const h=a.length;if(h>0){const d=Array(h);for(let _=0;_<h;_++)d[_]=a[_];return d}return[]}function R(a,h){for(let _=1;_<arguments.length;_++){const N=arguments[_];var d=typeof N;if(d=d!="object"?d:N?Array.isArray(N)?"array":d:"null",d=="array"||d=="object"&&typeof N.length=="number"){d=a.length||0;const O=N.length||0;a.length=d+O;for(let U=0;U<O;U++)a[d+U]=N[U]}else a.push(N)}}class P{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){o.setTimeout(()=>{throw a},0)}function E(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,d){const _=S.get();_.set(h,d),this.h?this.h.next=_:this.g=_,this.h=_}}var S=new P(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let b,j=!1,w=new v,y=()=>{const a=Promise.resolve(void 0);b=()=>{a.then(A)}};function A(){for(var a;a=E();){try{a.h.call(a.g)}catch(d){V(d)}var h=S;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}j=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function C(a){return/^[\s\xa0]*$/.test(a)}function Ge(a,h){k.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(Ge,k),Ge.prototype.init=function(a,h){const d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ge.Z.h.call(this)},Ge.prototype.h=function(){Ge.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var An="closure_listenable_"+(Math.random()*1e6|0),Ps=0;function Rs(a,h,d,_,N){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!_,this.ha=N,this.key=++Ps,this.da=this.fa=!1}function z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,d){for(const _ in a)h.call(d,a[_],_,a)}function J(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function ye(a){const h={};for(const d in a)h[d]=a[d];return h}const Ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jr(a,h){let d,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(d in _)a[d]=_[d];for(let O=0;O<Ce.length;O++)d=Ce[O],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function Vt(a){this.src=a,this.g={},this.h=0}Vt.prototype.add=function(a,h,d,_,N){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const U=qt(a,h,_,N);return U>-1?(h=a[U],d||(h.fa=!1)):(h=new Rs(h,this.src,O,!!_,N),h.fa=d,a.push(h)),h};function Fr(a,h){const d=h.type;if(d in a.g){var _=a.g[d],N=Array.prototype.indexOf.call(_,h,void 0),O;(O=N>=0)&&Array.prototype.splice.call(_,N,1),O&&(z(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function qt(a,h,d,_){for(let N=0;N<a.length;++N){const O=a[N];if(!O.da&&O.listener==h&&O.capture==!!d&&O.ha==_)return N}return-1}var $n="closure_lm_"+(Math.random()*1e6|0),Zc={};function Tp(a,h,d,_,N){if(Array.isArray(h)){for(let O=0;O<h.length;O++)Tp(a,h[O],d,_,N);return null}return d=Cp(d),a&&a[An]?a.J(h,d,l(_)?!!_.capture:!!_,N):Pw(a,h,d,!1,_,N)}function Pw(a,h,d,_,N,O){if(!h)throw Error("Invalid event type");const U=l(N)?!!N.capture:!!N;let Z=tu(a);if(Z||(a[$n]=Z=new Vt(a)),d=Z.add(h,d,_,U,O),d.proxy)return d;if(_=Rw(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)x||(N=U),N===void 0&&(N=!1),a.addEventListener(h.toString(),_,N);else if(a.attachEvent)a.attachEvent(Ap(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Rw(){function a(d){return h.call(a.src,a.listener,d)}const h=xw;return a}function Sp(a,h,d,_,N){if(Array.isArray(h))for(var O=0;O<h.length;O++)Sp(a,h[O],d,_,N);else _=l(_)?!!_.capture:!!_,d=Cp(d),a&&a[An]?(a=a.i,O=String(h).toString(),O in a.g&&(h=a.g[O],d=qt(h,d,_,N),d>-1&&(z(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[O],a.h--)))):a&&(a=tu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=qt(h,d,_,N)),(d=a>-1?h[a]:null)&&eu(d))}function eu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[An])Fr(h.i,a);else{var d=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(d,_,a.capture):h.detachEvent?h.detachEvent(Ap(d),_):h.addListener&&h.removeListener&&h.removeListener(_),(d=tu(h))?(Fr(d,a),d.h==0&&(d.src=null,h[$n]=null)):z(a)}}}function Ap(a){return a in Zc?Zc[a]:Zc[a]="on"+a}function xw(a,h){if(a.da)a=!0;else{h=new Ge(h,this);const d=a.listener,_=a.ha||a.src;a.fa&&eu(a),a=d.call(_,h)}return a}function tu(a){return a=a[$n],a instanceof Vt?a:null}var nu="__closure_events_fn_"+(Math.random()*1e9>>>0);function Cp(a){return typeof a=="function"?a:(a[nu]||(a[nu]=function(h){return a.handleEvent(h)}),a[nu])}function et(){T.call(this),this.i=new Vt(this),this.M=this,this.G=null}m(et,T),et.prototype[An]=!0,et.prototype.removeEventListener=function(a,h,d,_){Sp(this,a,h,d,_)};function ct(a,h){var d,_=a.G;if(_)for(d=[];_;_=_.G)d.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new k(h,a);else if(h instanceof k)h.target=h.target||a;else{var N=h;h=new k(_,a),jr(h,N)}N=!0;let O,U;if(d)for(U=d.length-1;U>=0;U--)O=h.g=d[U],N=ma(O,_,!0,h)&&N;if(O=h.g=a,N=ma(O,_,!0,h)&&N,N=ma(O,_,!1,h)&&N,d)for(U=0;U<d.length;U++)O=h.g=d[U],N=ma(O,_,!1,h)&&N}et.prototype.N=function(){if(et.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let _=0;_<d.length;_++)z(d[_]);delete a.g[h],a.h--}}this.G=null},et.prototype.J=function(a,h,d,_){return this.i.add(String(a),h,!1,d,_)},et.prototype.K=function(a,h,d,_){return this.i.add(String(a),h,!0,d,_)};function ma(a,h,d,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let O=0;O<h.length;++O){const U=h[O];if(U&&!U.da&&U.capture==d){const Z=U.listener,be=U.ha||U.src;U.fa&&Fr(a.i,U),N=Z.call(be,_)!==!1&&N}}return N&&!_.defaultPrevented}function Nw(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function kp(a){a.g=Nw(()=>{a.g=null,a.i&&(a.i=!1,kp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Dw extends T{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:kp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xs(a){T.call(this),this.h=a,this.g={}}m(xs,T);var Pp=[];function Rp(a){Q(a.g,function(h,d){this.g.hasOwnProperty(d)&&eu(h)},a),a.g={}}xs.prototype.N=function(){xs.Z.N.call(this),Rp(this)},xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ru=o.JSON.stringify,Vw=o.JSON.parse,Ow=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function xp(){}function Np(){}var Ns={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function iu(){k.call(this,"d")}m(iu,k);function su(){k.call(this,"c")}m(su,k);var Ur={},Dp=null;function ga(){return Dp=Dp||new et}Ur.Ia="serverreachability";function Vp(a){k.call(this,Ur.Ia,a)}m(Vp,k);function Ds(a){const h=ga();ct(h,new Vp(h))}Ur.STAT_EVENT="statevent";function Op(a,h){k.call(this,Ur.STAT_EVENT,a),this.stat=h}m(Op,k);function ut(a){const h=ga();ct(h,new Op(h,a))}Ur.Ja="timingevent";function Lp(a,h){k.call(this,Ur.Ja,a),this.size=h}m(Lp,k);function Vs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Os(){this.g=!0}Os.prototype.ua=function(){this.g=!1};function Lw(a,h,d,_,N,O){a.info(function(){if(a.g)if(O){var U="",Z=O.split("&");for(let he=0;he<Z.length;he++){var be=Z[he].split("=");if(be.length>1){const $e=be[0];be=be[1];const ln=$e.split("_");U=ln.length>=2&&ln[1]=="type"?U+($e+"="+be+"&"):U+($e+"=redacted&")}}}else U=null;else U=O;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+h+`
`+d+`
`+U})}function Mw(a,h,d,_,N,O,U){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+h+`
`+d+`
`+O+" "+U})}function Ii(a,h,d,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+jw(a,d)+(_?" "+_:"")})}function bw(a,h){a.info(function(){return"TIMEOUT: "+h})}Os.prototype.info=function(){};function jw(a,h){if(!a.g)return h;if(!h)return null;try{const O=JSON.parse(h);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var d=O[a];if(!(d.length<2)){var _=d[1];if(Array.isArray(_)&&!(_.length<1)){var N=_[0];if(N!="noop"&&N!="stop"&&N!="close")for(let U=1;U<_.length;U++)_[U]=""}}}}return ru(O)}catch{return h}}var _a={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Mp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},bp;function ou(){}m(ou,xp),ou.prototype.g=function(){return new XMLHttpRequest},bp=new ou;function Ls(a){return encodeURIComponent(String(a))}function Fw(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Hn(a,h,d,_){this.j=a,this.i=h,this.l=d,this.S=_||1,this.V=new xs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new jp}function jp(){this.i=null,this.g="",this.h=!1}var Fp={},au={};function lu(a,h,d){a.M=1,a.A=va(an(h)),a.u=d,a.R=!0,Up(a,null)}function Up(a,h){a.F=Date.now(),ya(a),a.B=an(a.A);var d=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),Zp(d.i,"t",_),a.C=0,d=a.j.L,a.h=new jp,a.g=_m(a.j,d?h:null,!a.u),a.P>0&&(a.O=new Dw(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,_=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(Pp[0]=N.toString()),N=Pp);for(let O=0;O<N.length;O++){const U=Tp(d,N[O],_||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=a.J?ye(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ds(),Lw(a.i,a.v,a.B,a.l,a.S,a.u)}Hn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Gn(a)==3?h.j():this.Y(a)},Hn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=Gn(this.g),be=this.g.ya(),he=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||om(this.g)))){this.K||Z!=4||be==7||(be==8||he<=0?Ds(3):Ds(2)),cu(this);var h=this.g.ca();this.X=h;var d=Uw(this);if(this.o=h==200,Mw(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,N=this.g;if((_=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(_)){var O=_;break t}}O=null}if(a=O)Ii(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,uu(this,a);else{this.o=!1,this.m=3,ut(12),Br(this),Ms(this);break e}}if(this.R){a=!0;let $e;for(;!this.K&&this.C<d.length;)if($e=Bw(this,d),$e==au){Z==4&&(this.m=4,ut(14),a=!1),Ii(this.i,this.l,null,"[Incomplete Response]");break}else if($e==Fp){this.m=4,ut(15),Ii(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Ii(this.i,this.l,$e,null),uu(this,$e);if(Bp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||d.length!=0||this.h.h||(this.m=1,ut(16),a=!1),this.o=this.o&&a,!a)Ii(this.i,this.l,d,"[Invalid Chunked Response]"),Br(this),Ms(this);else if(d.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),yu(U),U.P=!0,ut(11))}}else Ii(this.i,this.l,d,null),uu(this,d);Z==4&&Br(this),this.o&&!this.K&&(Z==4?fm(this.j,this):(this.o=!1,ya(this)))}else tE(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,ut(12)):(this.m=0,ut(13)),Br(this),Ms(this)}}}catch{}finally{}};function Uw(a){if(!Bp(a))return a.g.la();const h=om(a.g);if(h==="")return"";let d="";const _=h.length,N=Gn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Br(a),Ms(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<_;O++)a.h.h=!0,d+=a.h.i.decode(h[O],{stream:!(N&&O==_-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Bp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Bw(a,h){var d=a.C,_=h.indexOf(`
`,d);return _==-1?au:(d=Number(h.substring(d,_)),isNaN(d)?Fp:(_+=1,_+d>h.length?au:(h=h.slice(_,_+d),a.C=_+d,h)))}Hn.prototype.cancel=function(){this.K=!0,Br(this)};function ya(a){a.T=Date.now()+a.H,zp(a,a.H)}function zp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Vs(u(a.aa,a),h)}function cu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Hn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(bw(this.i,this.B),this.M!=2&&(Ds(),ut(17)),Br(this),this.m=2,Ms(this)):zp(this,this.T-a)};function Ms(a){a.j.I==0||a.K||fm(a.j,a)}function Br(a){cu(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Rp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function uu(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||hu(d.h,a))){if(!a.L&&hu(d.h,a)&&d.I==3){try{var _=d.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Sa(d),Ia(d);else break e;_u(d),ut(18)}}else d.xa=N[1],0<d.xa-d.K&&N[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Vs(u(d.Va,d),6e3));qp(d.h)<=1&&d.ta&&(d.ta=void 0)}else $r(d,11)}else if((a.L||d.g==a)&&Sa(d),!C(h))for(N=d.Ba.g.parse(h),h=0;h<N.length;h++){let he=N[h];const $e=he[0];if(!($e<=d.K))if(d.K=$e,he=he[1],d.I==2)if(he[0]=="c"){d.M=he[1],d.ba=he[2];const ln=he[3];ln!=null&&(d.ka=ln,d.j.info("VER="+d.ka));const Hr=he[4];Hr!=null&&(d.za=Hr,d.j.info("SVER="+d.za));const Kn=he[5];Kn!=null&&typeof Kn=="number"&&Kn>0&&(_=1.5*Kn,d.O=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const Qn=a.g;if(Qn){const Ca=Qn.g?Qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ca){var O=_.h;O.g||Ca.indexOf("spdy")==-1&&Ca.indexOf("quic")==-1&&Ca.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(du(O,O.h),O.h=null))}if(_.G){const vu=Qn.g?Qn.g.getResponseHeader("X-HTTP-Session-Id"):null;vu&&(_.wa=vu,pe(_.J,_.G,vu))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),_=d;var U=a;if(_.na=gm(_,_.L?_.ba:null,_.W),U.L){Wp(_.h,U);var Z=U,be=_.O;be&&(Z.H=be),Z.D&&(cu(Z),ya(Z)),_.g=U}else hm(_);d.i.length>0&&Ta(d)}else he[0]!="stop"&&he[0]!="close"||$r(d,7);else d.I==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?$r(d,7):gu(d):he[0]!="noop"&&d.l&&d.l.qa(he),d.A=0)}}Ds(4)}catch{}}var zw=class{constructor(a,h){this.g=a,this.map=h}};function $p(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Hp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function qp(a){return a.h?1:a.g?a.g.size:0}function hu(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function du(a,h){a.g?a.g.add(h):a.h=h}function Wp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}$p.prototype.cancel=function(){if(this.i=Gp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Gp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return I(a.i)}var Kp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $w(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const _=a[d].indexOf("=");let N,O=null;_>=0?(N=a[d].substring(0,_),O=a[d].substring(_+1)):N=a[d],h(N,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function qn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof qn?(this.l=a.l,bs(this,a.j),this.o=a.o,this.g=a.g,js(this,a.u),this.h=a.h,fu(this,em(a.i)),this.m=a.m):a&&(h=String(a).match(Kp))?(this.l=!1,bs(this,h[1]||"",!0),this.o=Fs(h[2]||""),this.g=Fs(h[3]||"",!0),js(this,h[4]),this.h=Fs(h[5]||"",!0),fu(this,h[6]||"",!0),this.m=Fs(h[7]||"")):(this.l=!1,this.i=new Bs(null,this.l))}qn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Us(h,Qp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Us(h,Qp,!0),"@"),a.push(Ls(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Us(d,d.charAt(0)=="/"?Ww:qw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Us(d,Kw)),a.join("")},qn.prototype.resolve=function(a){const h=an(this);let d=!!a.j;d?bs(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var _=a.h;if(d)js(h,a.u);else if(d=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var N=h.h.lastIndexOf("/");N!=-1&&(_=h.h.slice(0,N+1)+_)}if(N=_,N==".."||N==".")_="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){_=N.lastIndexOf("/",0)==0,N=N.split("/");const O=[];for(let U=0;U<N.length;){const Z=N[U++];Z=="."?_&&U==N.length&&O.push(""):Z==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),_&&U==N.length&&O.push("")):(O.push(Z),_=!0)}_=O.join("/")}else _=N}return d?h.h=_:d=a.i.toString()!=="",d?fu(h,em(a.i)):d=!!a.m,d&&(h.m=a.m),h};function an(a){return new qn(a)}function bs(a,h,d){a.j=d?Fs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function js(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function fu(a,h,d){h instanceof Bs?(a.i=h,Qw(a.i,a.l)):(d||(h=Us(h,Gw)),a.i=new Bs(h,a.l))}function pe(a,h,d){a.i.set(h,d)}function va(a){return pe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Fs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Us(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,Hw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Hw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Qp=/[#\/\?@]/g,qw=/[#\?:]/g,Ww=/[#\?]/g,Gw=/[#\?@]/g,Kw=/#/g;function Bs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function zr(a){a.g||(a.g=new Map,a.h=0,a.i&&$w(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Bs.prototype,t.add=function(a,h){zr(this),this.i=null,a=Ti(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Yp(a,h){zr(a),h=Ti(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Xp(a,h){return zr(a),h=Ti(a,h),a.g.has(h)}t.forEach=function(a,h){zr(this),this.g.forEach(function(d,_){d.forEach(function(N){a.call(h,N,_,this)},this)},this)};function Jp(a,h){zr(a);let d=[];if(typeof h=="string")Xp(a,h)&&(d=d.concat(a.g.get(Ti(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return zr(this),this.i=null,a=Ti(this,a),Xp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Jp(this,a),a.length>0?String(a[0]):h):h};function Zp(a,h,d){Yp(a,h),d.length>0&&(a.i=null,a.g.set(Ti(a,h),I(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var d=h[_];const N=Ls(d);d=Jp(this,d);for(let O=0;O<d.length;O++){let U=N;d[O]!==""&&(U+="="+Ls(d[O])),a.push(U)}}return this.i=a.join("&")};function em(a){const h=new Bs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ti(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Qw(a,h){h&&!a.j&&(zr(a),a.i=null,a.g.forEach(function(d,_){const N=_.toLowerCase();_!=N&&(Yp(this,_),Zp(this,N,d))},a)),a.j=h}function Yw(a,h){const d=new Os;if(o.Image){const _=new Image;_.onload=f(Wn,d,"TestLoadImage: loaded",!0,h,_),_.onerror=f(Wn,d,"TestLoadImage: error",!1,h,_),_.onabort=f(Wn,d,"TestLoadImage: abort",!1,h,_),_.ontimeout=f(Wn,d,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function Xw(a,h){const d=new Os,_=new AbortController,N=setTimeout(()=>{_.abort(),Wn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(O=>{clearTimeout(N),O.ok?Wn(d,"TestPingServer: ok",!0,h):Wn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Wn(d,"TestPingServer: error",!1,h)})}function Wn(a,h,d,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(d)}catch{}}function Jw(){this.g=new Ow}function pu(a){this.i=a.Sb||null,this.h=a.ab||!1}m(pu,xp),pu.prototype.g=function(){return new wa(this.i,this.h)};function wa(a,h){et.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(wa,et),t=wa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,$s(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,zs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,$s(this)),this.g&&(this.readyState=3,$s(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;tm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function tm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?zs(this):$s(this),this.readyState==3&&tm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,zs(this))},t.Na=function(a){this.g&&(this.response=a,zs(this))},t.ga=function(){this.g&&zs(this)};function zs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,$s(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function $s(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function nm(a){let h="";return Q(a,function(d,_){h+=_,h+=":",h+=d,h+=`\r
`}),h}function mu(a,h,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=nm(d),typeof a=="string"?d!=null&&Ls(d):pe(a,h,d))}function Se(a){et.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Se,et);var Zw=/^https?$/i,eE=["POST","PUT"];t=Se.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():bp.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){rm(this,O);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)d.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())d.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(eE,h,void 0)>=0)||_||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,U]of d)this.g.setRequestHeader(O,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){rm(this,O)}};function rm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,im(a),Ea(a)}function im(a){a.A||(a.A=!0,ct(a,"complete"),ct(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ct(this,"complete"),ct(this,"abort"),Ea(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ea(this,!0)),Se.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?sm(this):this.Xa())},t.Xa=function(){sm(this)};function sm(a){if(a.h&&typeof s<"u"){if(a.v&&Gn(a)==4)setTimeout(a.Ca.bind(a),0);else if(ct(a,"readystatechange"),Gn(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var _;if(_=O===0){let U=String(a.D).match(Kp)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),_=!Zw.test(U?U.toLowerCase():"")}d=_}if(d)ct(a,"complete"),ct(a,"success");else{a.o=6;try{var N=Gn(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",im(a)}}finally{Ea(a)}}}}function Ea(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||ct(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Gn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Gn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Vw(h)}};function om(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function tE(a){const h={};a=(a.g&&Gn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(C(a[_]))continue;var d=Fw(a[_]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=h[N]||[];h[N]=O,O.push(d)}J(h,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function am(a){this.za=0,this.i=[],this.j=new Os,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Hs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Hs("baseRetryDelayMs",5e3,a),this.Za=Hs("retryDelaySeedMs",1e4,a),this.Ta=Hs("forwardChannelMaxRetries",2,a),this.va=Hs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new $p(a&&a.concurrentRequestLimit),this.Ba=new Jw,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=am.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,_){ut(0),this.W=a,this.H=h||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.J=gm(this,null,this.W),Ta(this)};function gu(a){if(lm(a),a.I==3){var h=a.V++,d=an(a.J);if(pe(d,"SID",a.M),pe(d,"RID",h),pe(d,"TYPE","terminate"),qs(a,d),h=new Hn(a,a.j,h),h.M=2,h.A=va(an(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=_m(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ya(h)}mm(a)}function Ia(a){a.g&&(yu(a),a.g.cancel(),a.g=null)}function lm(a){Ia(a),a.v&&(o.clearTimeout(a.v),a.v=null),Sa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ta(a){if(!Hp(a.h)&&!a.m){a.m=!0;var h=a.Ea;b||y(),j||(b(),j=!0),w.add(h,a),a.D=0}}function nE(a,h){return qp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Vs(u(a.Ea,a,h),pm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new Hn(this,this.j,a);let O=this.o;if(this.U&&(O?(O=ye(O),jr(O,this.U)):O=this.U),this.u!==null||this.R||(N.J=O,O=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=um(this,N,h),d=an(this.J),pe(d,"RID",a),pe(d,"CVER",22),this.G&&pe(d,"X-HTTP-Session-Id",this.G),qs(this,d),O&&(this.R?h="headers="+Ls(nm(O))+"&"+h:this.u&&mu(d,this.u,O)),du(this.h,N),this.Ra&&pe(d,"TYPE","init"),this.S?(pe(d,"$req",h),pe(d,"SID","null"),N.U=!0,lu(N,d,null)):lu(N,d,h),this.I=2}}else this.I==3&&(a?cm(this,a):this.i.length==0||Hp(this.h)||cm(this))};function cm(a,h){var d;h?d=h.l:d=a.V++;const _=an(a.J);pe(_,"SID",a.M),pe(_,"RID",d),pe(_,"AID",a.K),qs(a,_),a.u&&a.o&&mu(_,a.u,a.o),d=new Hn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=um(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),du(a.h,d),lu(d,_,h)}function qs(a,h){a.H&&Q(a.H,function(d,_){pe(h,_,d)}),a.l&&Q({},function(d,_){pe(h,_,d)})}function um(a,h,d){d=Math.min(a.i.length,d);const _=a.l?u(a.l.Ka,a.l,a):null;e:{var N=a.i;let Z=-1;for(;;){const be=["count="+d];Z==-1?d>0?(Z=N[0].g,be.push("ofs="+Z)):Z=0:be.push("ofs="+Z);let he=!0;for(let $e=0;$e<d;$e++){var O=N[$e].g;const ln=N[$e].map;if(O-=Z,O<0)Z=Math.max(0,N[$e].g-100),he=!1;else try{O="req"+O+"_"||"";try{var U=ln instanceof Map?ln:Object.entries(ln);for(const[Hr,Kn]of U){let Qn=Kn;l(Kn)&&(Qn=ru(Kn)),be.push(O+Hr+"="+encodeURIComponent(Qn))}}catch(Hr){throw be.push(O+"type="+encodeURIComponent("_badmap")),Hr}}catch{_&&_(ln)}}if(he){U=be.join("&");break e}}U=void 0}return a=a.i.splice(0,d),h.G=a,U}function hm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;b||y(),j||(b(),j=!0),w.add(h,a),a.A=0}}function _u(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Vs(u(a.Da,a),pm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,dm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Vs(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ut(10),Ia(this),dm(this))};function yu(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function dm(a){a.g=new Hn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=an(a.na);pe(h,"RID","rpc"),pe(h,"SID",a.M),pe(h,"AID",a.K),pe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&pe(h,"TO",a.ia),pe(h,"TYPE","xmlhttp"),qs(a,h),a.u&&a.o&&mu(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=va(an(h)),d.u=null,d.R=!0,Up(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Ia(this),_u(this),ut(19))};function Sa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function fm(a,h){var d=null;if(a.g==h){Sa(a),yu(a),a.g=null;var _=2}else if(hu(a.h,h))d=h.G,Wp(a.h,h),_=1;else return;if(a.I!=0){if(h.o)if(_==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;_=ga(),ct(_,new Lp(_,d)),Ta(a)}else hm(a);else if(N=h.m,N==3||N==0&&h.X>0||!(_==1&&nE(a,h)||_==2&&_u(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),N){case 1:$r(a,5);break;case 4:$r(a,10);break;case 3:$r(a,6);break;default:$r(a,2)}}}function pm(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function $r(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),_=a.Ua;const N=!_;_=new qn(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||bs(_,"https"),va(_),N?Yw(_.toString(),d):Xw(_.toString(),d)}else ut(2);a.I=0,a.l&&a.l.pa(h),mm(a),lm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function mm(a){if(a.I=0,a.ja=[],a.l){const h=Gp(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ja,h),R(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function gm(a,h,d){var _=d instanceof qn?an(d):new qn(d);if(_.g!="")h&&(_.g=h+"."+_.g),js(_,_.u);else{var N=o.location;_=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const O=new qn(null);_&&bs(O,_),h&&(O.g=h),N&&js(O,N),d&&(O.h=d),_=O}return d=a.G,h=a.wa,d&&h&&pe(_,d,h),pe(_,"VER",a.ka),qs(a,_),_}function _m(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Se(new pu({ab:d})):new Se(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ym(){}t=ym.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Aa(){}Aa.prototype.g=function(a,h){return new St(a,h)};function St(a,h){et.call(this),this.g=new am(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!C(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!C(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Si(this)}m(St,et),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){gu(this.g)},St.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=ru(a),a=d);h.i.push(new zw(h.Ya++,a)),h.I==3&&Ta(h)},St.prototype.N=function(){this.g.l=null,delete this.j,gu(this.g),delete this.g,St.Z.N.call(this)};function vm(a){iu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(vm,iu);function wm(){su.call(this),this.status=1}m(wm,su);function Si(a){this.g=a}m(Si,ym),Si.prototype.ra=function(){ct(this.g,"a")},Si.prototype.qa=function(a){ct(this.g,new vm(a))},Si.prototype.pa=function(a){ct(this.g,new wm)},Si.prototype.oa=function(){ct(this.g,"b")},Aa.prototype.createWebChannel=Aa.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,Pv=function(){return new Aa},kv=function(){return ga()},Cv=Ur,ld={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_a.NO_ERROR=0,_a.TIMEOUT=8,_a.HTTP_ERROR=6,dl=_a,Mp.COMPLETE="complete",Av=Mp,Np.EventType=Ns,Ns.OPEN="a",Ns.CLOSE="b",Ns.ERROR="c",Ns.MESSAGE="d",et.prototype.listen=et.prototype.J,oo=Np,Se.prototype.listenOnce=Se.prototype.K,Se.prototype.getLastError=Se.prototype.Ha,Se.prototype.getLastErrorCode=Se.prototype.ya,Se.prototype.getStatus=Se.prototype.ca,Se.prototype.getResponseJson=Se.prototype.La,Se.prototype.getResponseText=Se.prototype.la,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Fa,Sv=Se}).apply(typeof qa<"u"?qa:typeof self<"u"?self:typeof window<"u"?window:{});const c0="@firebase/firestore",u0="4.9.3";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let Ts="12.7.0";/**
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
 */const ci=new Cc("@firebase/firestore");function Ci(){return ci.logLevel}function $(t,...e){if(ci.logLevel<=ne.DEBUG){const n=e.map(Vf);ci.debug(`Firestore (${Ts}): ${t}`,...n)}}function Un(t,...e){if(ci.logLevel<=ne.ERROR){const n=e.map(Vf);ci.error(`Firestore (${Ts}): ${t}`,...n)}}function cs(t,...e){if(ci.logLevel<=ne.WARN){const n=e.map(Vf);ci.warn(`Firestore (${Ts}): ${t}`,...n)}}function Vf(t){if(typeof t=="string")return t;try{/**
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
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Rv(t,r,n)}function Rv(t,e,n){let r=`FIRESTORE (${Ts}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Un(r),new Error(r)}function ae(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Rv(e,i,r)}function X(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends on{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class xv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class Dk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Vk{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Vn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string",31837,{l:r}),new xv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string",2055,{h:e}),new it(e)}}class Ok{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Lk{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Ok(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class h0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Yt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ae(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new h0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new h0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function bk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Of{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=bk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function cd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Zu(i)===Zu(s)?re(i,s):Zu(i)?1:-1}return re(t.length,e.length)}const jk=55296,Fk=57343;function Zu(t){const e=t.charCodeAt(0);return e>=jk&&e<=Fk}function us(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const d0="__name__";class dn{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return dn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof dn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=dn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return re(e.length,n.length)}static compareSegments(e,n){const r=dn.isNumericId(e),i=dn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?dn.extractNumericId(e).compare(dn.extractNumericId(n)):cd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wr.fromString(e.substring(4,e.length-2))}}class de extends dn{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new de(n)}static emptyPath(){return new de([])}}const Uk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends dn{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return Uk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===d0}static keyField(){return new Ye([d0])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new B(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(de.fromString(e))}static fromName(e){return new W(de.fromString(e).popFirst(5))}static empty(){return new W(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new de(e.slice()))}}/**
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
 */function Nv(t,e,n){if(!n)throw new B(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Bk(t,e,n,r){if(e===!0&&r===!0)throw new B(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function f0(t){if(!W.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function p0(t){if(W.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Dv(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Nc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function rn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nc(t);throw new B(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Me(t,e){const n={typeString:t};return e&&(n.value=e),n}function la(t,e){if(!Dv(t))throw new B(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new B(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const m0=-62135596800,g0=1e6;class ue{static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*g0);return new ue(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<m0)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/g0}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(la(e,ue._jsonSchema))return new ue(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-m0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ue._jsonSchemaVersion="firestore/timestamp/1.0",ue._jsonSchema={type:Me("string",ue._jsonSchemaVersion),seconds:Me("number"),nanoseconds:Me("number")};/**
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
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new ue(0,0))}static max(){return new Y(new ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Wo=-1;function zk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new ue(n+1,0):new ue(n,r));return new Ar(i,W.empty(),e)}function $k(t){return new Ar(t.readTime,t.key,Wo)}class Ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ar(Y.min(),W.empty(),Wo)}static max(){return new Ar(Y.max(),W.empty(),Wo)}}function Hk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
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
 */const qk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ss(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==qk)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Gk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function As(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Dc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Dc.ce=-1;/**
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
 */const Lf=-1;function Vc(t){return t==null}function Yl(t){return t===0&&1/t==-1/0}function Kk(t){return typeof t=="number"&&Number.isInteger(t)&&!Yl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Vv="";function Qk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=_0(e)),e=Yk(t.get(n),e);return _0(e)}function Yk(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Vv:n+="";break;default:n+=s}}return n}function _0(t){return t+Vv+""}/**
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
 */function y0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ov(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Te{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wa(this.root,e,this.comparator,!0)}}class Wa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Qe.EMPTY,this.right=s??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ze{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new v0(this.data.getIterator())}getIteratorFrom(e){return new v0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class v0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new kt([])}unionWith(e){let n=new ze(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return us(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Lv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Lv("Invalid base64 string: "+s):s}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const Xk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(t){if(ae(!!t,39018),typeof t=="string"){let e=0;const n=Xk.exec(t);if(ae(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function kr(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
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
 */const Mv="server_timestamp",bv="__type__",jv="__previous_value__",Fv="__local_write_time__";function Mf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[bv])==null?void 0:r.stringValue)===Mv}function Oc(t){const e=t.mapValue.fields[jv];return Mf(e)?Oc(e):e}function Go(t){const e=Cr(t.mapValue.fields[Fv].timestampValue);return new ue(e.seconds,e.nanos)}/**
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
 */class Jk{constructor(e,n,r,i,s,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const Xl="(default)";class Ko{constructor(e,n){this.projectId=e,this.database=n||Xl}static empty(){return new Ko("","")}get isDefaultDatabase(){return this.database===Xl}isEqual(e){return e instanceof Ko&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Uv="__type__",Bv="__max__",Ga={mapValue:{fields:{__type__:{stringValue:Bv}}}},zv="__vector__",Jl="value";function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mf(t)?4:eP(t)?9007199254740991:Zk(t)?10:11:K(28295,{value:t})}function Sn(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Go(t).isEqual(Go(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Cr(i.timestampValue),l=Cr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return kr(i.bytesValue).isEqual(kr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Pe(i.geoPointValue.latitude)===Pe(s.geoPointValue.latitude)&&Pe(i.geoPointValue.longitude)===Pe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Pe(i.integerValue)===Pe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Pe(i.doubleValue),l=Pe(s.doubleValue);return o===l?Yl(o)===Yl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return us(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(y0(o)!==y0(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Sn(o[c],l[c])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function Qo(t,e){return(t.values||[]).find(n=>Sn(n,e))!==void 0}function hs(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Pe(s.integerValue||s.doubleValue),c=Pe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return w0(t.timestampValue,e.timestampValue);case 4:return w0(Go(t),Go(e));case 5:return cd(t.stringValue,e.stringValue);case 6:return function(s,o){const l=kr(s),c=kr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=re(l[u],c[u]);if(f!==0)return f}return re(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=re(Pe(s.latitude),Pe(o.latitude));return l!==0?l:re(Pe(s.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return E0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,I,R,P;const l=s.fields||{},c=o.fields||{},u=(g=l[Jl])==null?void 0:g.arrayValue,f=(I=c[Jl])==null?void 0:I.arrayValue,m=re(((R=u==null?void 0:u.values)==null?void 0:R.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return m!==0?m:E0(u,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ga.mapValue&&o===Ga.mapValue)return 0;if(s===Ga.mapValue)return 1;if(o===Ga.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const g=cd(c[m],f[m]);if(g!==0)return g;const I=hs(l[c[m]],u[f[m]]);if(I!==0)return I}return re(c.length,f.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function w0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=Cr(t),r=Cr(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function E0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=hs(n[i],r[i]);if(s)return s}return re(n.length,r.length)}function ds(t){return ud(t)}function ud(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return kr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ud(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ud(n.fields[o])}`;return i+"}"}(t.mapValue):K(61005,{value:t})}function fl(t){switch(Pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oc(t);return e?16+fl(e):16;case 5:return 2*t.stringValue.length;case 6:return kr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+fl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Mr(r.fields,(s,o)=>{i+=s.length+fl(o)}),i}(t.mapValue);default:throw K(13486,{value:t})}}function I0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function hd(t){return!!t&&"integerValue"in t}function bf(t){return!!t&&"arrayValue"in t}function T0(t){return!!t&&"nullValue"in t}function S0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pl(t){return!!t&&"mapValue"in t}function Zk(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Uv])==null?void 0:r.stringValue)===zv}function Io(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Mr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Io(t.arrayValue.values[n]);return e}return{...t}}function eP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Bv}/**
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
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!pl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Io(n)}setAll(e){let n=Ye.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Io(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());pl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];pl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Mr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new yt(Io(this.value))}}function $v(t){const e=[];return Mr(t.fields,(n,r)=>{const i=new Ye([n]);if(pl(r)){const s=$v(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new kt(e)}/**
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
 */class ot{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ot(e,0,Y.min(),Y.min(),Y.min(),yt.empty(),0)}static newFoundDocument(e,n,r,i){return new ot(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new ot(e,2,n,Y.min(),Y.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,Y.min(),Y.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zl{constructor(e,n){this.position=e,this.inclusive=n}}function A0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=hs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function C0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yo{constructor(e,n="asc"){this.field=e,this.dir=n}}function tP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Hv{}class Le extends Hv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new rP(e,n,r):n==="array-contains"?new oP(e,r):n==="in"?new aP(e,r):n==="not-in"?new lP(e,r):n==="array-contains-any"?new cP(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new iP(e,r):new sP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(hs(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(hs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sn extends Hv{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new sn(e,n)}matches(e){return qv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function qv(t){return t.op==="and"}function Wv(t){return nP(t)&&qv(t)}function nP(t){for(const e of t.filters)if(e instanceof sn)return!1;return!0}function dd(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+ds(t.value);if(Wv(t))return t.filters.map(e=>dd(e)).join(",");{const e=t.filters.map(n=>dd(n)).join(",");return`${t.op}(${e})`}}function Gv(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&Sn(r.value,i.value)}(t,e):t instanceof sn?function(r,i){return i instanceof sn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Gv(o,i.filters[l]),!0):!1}(t,e):void K(19439)}function Kv(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${ds(n.value)}`}(t):t instanceof sn?function(n){return n.op.toString()+" {"+n.getFilters().map(Kv).join(" ,")+"}"}(t):"Filter"}class rP extends Le{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class iP extends Le{constructor(e,n){super(e,"in",n),this.keys=Qv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sP extends Le{constructor(e,n){super(e,"not-in",n),this.keys=Qv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qv(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class oP extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bf(n)&&Qo(n.arrayValue,this.value)}}class aP extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qo(this.value.arrayValue,n)}}class lP extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Qo(this.value.arrayValue,n)}}class cP extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qo(this.value.arrayValue,r))}}/**
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
 */class uP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function k0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new uP(t,e,n,r,i,s,o)}function jf(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>dd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Vc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ds(r)).join(",")),e.Te=n}return e.Te}function Ff(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Gv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!C0(t.startAt,e.startAt)&&C0(t.endAt,e.endAt)}function fd(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Cs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function hP(t,e,n,r,i,s,o,l){return new Cs(t,e,n,r,i,s,o,l)}function Uf(t){return new Cs(t)}function P0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Yv(t){return t.collectionGroup!==null}function To(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ze(Ye.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Yo(s,r))}),n.has(Ye.keyField().canonicalString())||e.Ie.push(new Yo(Ye.keyField(),r))}return e.Ie}function vn(t){const e=X(t);return e.Ee||(e.Ee=dP(e,To(t))),e.Ee}function dP(t,e){if(t.limitType==="F")return k0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Yo(i.field,s)});const n=t.endAt?new Zl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Zl(t.startAt.position,t.startAt.inclusive):null;return k0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function pd(t,e){const n=t.filters.concat([e]);return new Cs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function md(t,e,n){return new Cs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lc(t,e){return Ff(vn(t),vn(e))&&t.limitType===e.limitType}function Xv(t){return`${jf(vn(t))}|lt:${t.limitType}`}function ki(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Kv(i)).join(", ")}]`),Vc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ds(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ds(i)).join(",")),`Target(${r})`}(vn(t))}; limitType=${t.limitType})`}function Mc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of To(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,c){const u=A0(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,To(r),i)||r.endAt&&!function(o,l,c){const u=A0(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,To(r),i))}(t,e)}function fP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Jv(t){return(e,n)=>{let r=!1;for(const i of To(t)){const s=pP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function pP(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const c=o.data.field(s),u=l.data.field(s);return c!==null&&u!==null?hs(c,u):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
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
 */class yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Mr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Ov(this.inner)}size(){return this.innerSize}}/**
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
 */const mP=new Te(W.comparator);function Bn(){return mP}const Zv=new Te(W.comparator);function ao(...t){let e=Zv;for(const n of t)e=e.insert(n.key,n);return e}function e2(t){let e=Zv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Jr(){return So()}function t2(){return So()}function So(){return new yi(t=>t.toString(),(t,e)=>t.isEqual(e))}const gP=new Te(W.comparator),_P=new ze(W.comparator);function ie(...t){let e=_P;for(const n of t)e=e.add(n);return e}const yP=new ze(re);function vP(){return yP}/**
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
 */function Bf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yl(e)?"-0":e}}function n2(t){return{integerValue:""+t}}function wP(t,e){return Kk(e)?n2(e):Bf(t,e)}/**
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
 */class bc{constructor(){this._=void 0}}function EP(t,e,n){return t instanceof ec?function(i,s){const o={fields:{[bv]:{stringValue:Mv},[Fv]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Mf(s)&&(s=Oc(s)),s&&(o.fields[jv]=s),{mapValue:o}}(n,e):t instanceof Xo?i2(t,e):t instanceof Jo?s2(t,e):function(i,s){const o=r2(i,s),l=R0(o)+R0(i.Ae);return hd(o)&&hd(i.Ae)?n2(l):Bf(i.serializer,l)}(t,e)}function IP(t,e,n){return t instanceof Xo?i2(t,e):t instanceof Jo?s2(t,e):n}function r2(t,e){return t instanceof tc?function(r){return hd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ec extends bc{}class Xo extends bc{constructor(e){super(),this.elements=e}}function i2(t,e){const n=o2(e);for(const r of t.elements)n.some(i=>Sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Jo extends bc{constructor(e){super(),this.elements=e}}function s2(t,e){let n=o2(e);for(const r of t.elements)n=n.filter(i=>!Sn(i,r));return{arrayValue:{values:n}}}class tc extends bc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function R0(t){return Pe(t.integerValue||t.doubleValue)}function o2(t){return bf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function TP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Xo&&i instanceof Xo||r instanceof Jo&&i instanceof Jo?us(r.elements,i.elements,Sn):r instanceof tc&&i instanceof tc?Sn(r.Ae,i.Ae):r instanceof ec&&i instanceof ec}(t.transform,e.transform)}class SP{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ml(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jc{}function a2(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zf(t.key,zt.none()):new ca(t.key,t.data,zt.none());{const n=t.data,r=yt.empty();let i=new ze(Ye.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new br(t.key,r,new kt(i.toArray()),zt.none())}}function AP(t,e,n){t instanceof ca?function(i,s,o){const l=i.value.clone(),c=N0(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof br?function(i,s,o){if(!ml(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=N0(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(l2(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ao(t,e,n,r){return t instanceof ca?function(s,o,l,c){if(!ml(s.precondition,o))return l;const u=s.value.clone(),f=D0(s.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof br?function(s,o,l,c){if(!ml(s.precondition,o))return l;const u=D0(s.fieldTransforms,c,o),f=o.data;return f.setAll(l2(s)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return ml(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function CP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=r2(r.transform,i||null);s!=null&&(n===null&&(n=yt.empty()),n.set(r.field,s))}return n||null}function x0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&us(r,i,(s,o)=>TP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ca extends jc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class br extends jc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function l2(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function N0(t,e,n){const r=new Map;ae(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,IP(o,l,n[i]))}return r}function D0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,EP(s,o,e))}return r}class zf extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kP extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class PP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&AP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=t2();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const c=a2(o,l);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&us(this.mutations,e.mutations,(n,r)=>x0(n,r))&&us(this.baseMutations,e.baseMutations,(n,r)=>x0(n,r))}}class $f{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return gP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new $f(e,n,r,i)}}/**
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
 */class RP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ve,se;function NP(t){switch(t){case L.OK:return K(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function c2(t){if(t===void 0)return Un("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ve.OK:return L.OK;case Ve.CANCELLED:return L.CANCELLED;case Ve.UNKNOWN:return L.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return L.INTERNAL;case Ve.UNAVAILABLE:return L.UNAVAILABLE;case Ve.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ve.NOT_FOUND:return L.NOT_FOUND;case Ve.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ve.ABORTED:return L.ABORTED;case Ve.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ve.DATA_LOSS:return L.DATA_LOSS;default:return K(39323,{code:t})}}(se=Ve||(Ve={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function DP(){return new TextEncoder}/**
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
 */const VP=new wr([4294967295,4294967295],0);function V0(t){const e=DP().encode(t),n=new Tv;return n.update(e),new Uint8Array(n.digest())}function O0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new wr([n,r],0),new wr([i,s],0)]}class Hf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new lo(`Invalid padding: ${n}`);if(r<0)throw new lo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new lo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new lo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=wr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(wr.fromNumber(r)));return i.compare(VP)===1&&(i=new wr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=V0(e),[r,i]=O0(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Hf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=V0(e),[r,i]=O0(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class lo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Fc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ua.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Fc(Y.min(),i,new Te(re),Bn(),ie())}}class ua{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ua(r,n,ie(),ie(),ie())}}/**
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
 */class gl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class u2{constructor(e,n){this.targetId=e,this.Ce=n}}class h2{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class L0{constructor(){this.ve=0,this.Fe=M0(),this.Me=Ze.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ie(),n=ie(),r=ie();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new ua(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=M0()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ae(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class OP{constructor(e){this.Ge=e,this.ze=new Map,this.je=Bn(),this.Je=Ka(),this.He=Ka(),this.Ye=new Te(re)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(fd(s))if(r===0){const o=new W(s.path);this.et(n,o,ot.newNoDocument(o,Y.min()))}else ae(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=kr(r).toUint8Array()}catch(c){if(c instanceof Lv)return cs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Hf(o,i,s)}catch(c){return cs(c instanceof lo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&fd(l.target)){const c=new W(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,ot.newNoDocument(c,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=ie();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Fc(e,n,this.Ye,this.je,r);return this.je=Bn(),this.Je=Ka(),this.He=Ka(),this.Ye=new Te(re),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new L0,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new ze(re),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ze(re),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new L0),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ka(){return new Te(W.comparator)}function M0(){return new Te(W.comparator)}const LP={asc:"ASCENDING",desc:"DESCENDING"},MP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bP={and:"AND",or:"OR"};class jP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function gd(t,e){return t.useProto3Json||Vc(e)?e:{value:e}}function nc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function d2(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function FP(t,e){return nc(t,e.toTimestamp())}function wn(t){return ae(!!t,49232),Y.fromTimestamp(function(n){const r=Cr(n);return new ue(r.seconds,r.nanos)}(t))}function qf(t,e){return _d(t,e).canonicalString()}function _d(t,e){const n=function(i){return new de(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function f2(t){const e=de.fromString(t);return ae(y2(e),10190,{key:e.toString()}),e}function yd(t,e){return qf(t.databaseId,e.path)}function eh(t,e){const n=f2(e);if(n.get(1)!==t.databaseId.projectId)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(m2(n))}function p2(t,e){return qf(t.databaseId,e)}function UP(t){const e=f2(t);return e.length===4?de.emptyPath():m2(e)}function vd(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function m2(t){return ae(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function b0(t,e,n){return{name:yd(t,e),fields:n.value.mapValue.fields}}function BP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:K(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,f){return u.useProto3Json?(ae(f===void 0||typeof f=="string",58123),Ze.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ze.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?L.UNKNOWN:c2(u.code);return new B(f,u.message||"")}(o);n=new h2(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=eh(t,r.document.name),s=wn(r.document.updateTime),o=r.document.createTime?wn(r.document.createTime):Y.min(),l=new yt({mapValue:{fields:r.document.fields}}),c=ot.newFoundDocument(i,s,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new gl(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=eh(t,r.document),s=r.readTime?wn(r.readTime):Y.min(),o=ot.newNoDocument(i,s),l=r.removedTargetIds||[];n=new gl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=eh(t,r.document),s=r.removedTargetIds||[];n=new gl([],s,i,null)}else{if(!("filter"in e))return K(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new xP(i,s),l=r.targetId;n=new u2(l,o)}}return n}function zP(t,e){let n;if(e instanceof ca)n={update:b0(t,e.key,e.value)};else if(e instanceof zf)n={delete:yd(t,e.key)};else if(e instanceof br)n={update:b0(t,e.key,e.data),updateMask:XP(e.fieldMask)};else{if(!(e instanceof kP))return K(16599,{Vt:e.type});n={verify:yd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ec)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Jo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof tc)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:FP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(t,e.precondition)),n}function $P(t,e){return t&&t.length>0?(ae(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?wn(i.updateTime):wn(s);return o.isEqual(Y.min())&&(o=wn(s)),new SP(o,i.transformResults||[])}(n,e))):[]}function HP(t,e){return{documents:[p2(t,e.path)]}}function qP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=p2(t,i);const s=function(u){if(u.length!==0)return _2(sn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:Pi(g.field),direction:KP(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=gd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:i}}function WP(t){let e=UP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=g2(m);return g instanceof sn&&Wv(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(R){return new Yo(Ri(R.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Vc(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(m){const g=!!m.before,I=m.values||[];return new Zl(I,g)}(n.startAt));let u=null;return n.endAt&&(u=function(m){const g=!m.before,I=m.values||[];return new Zl(I,g)}(n.endAt)),hP(e,i,o,s,l,"F",c,u)}function GP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function g2(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ri(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ri(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ri(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ri(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return Le.create(Ri(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return sn.create(n.compositeFilter.filters.map(r=>g2(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function KP(t){return LP[t]}function QP(t){return MP[t]}function YP(t){return bP[t]}function Pi(t){return{fieldPath:t.canonicalString()}}function Ri(t){return Ye.fromServerFormat(t.fieldPath)}function _2(t){return t instanceof Le?function(n){if(n.op==="=="){if(S0(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NAN"}};if(T0(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(S0(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NOT_NAN"}};if(T0(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pi(n.field),op:QP(n.op),value:n.value}}}(t):t instanceof sn?function(n){const r=n.getFilters().map(i=>_2(i));return r.length===1?r[0]:{compositeFilter:{op:YP(n.op),filters:r}}}(t):K(54877,{filter:t})}function XP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function y2(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class lr{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Ze.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class JP{constructor(e){this.yt=e}}function ZP(t){const e=WP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?md(e,e.limit,"L"):e}/**
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
 */class eR{constructor(){this.Cn=new tR}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Ar.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Ar.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class tR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ze(de.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ze(de.comparator)).toArray()}}/**
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
 */const j0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},v2=41943040;class gt{static withCacheSize(e){return new gt(e,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */gt.DEFAULT_COLLECTION_PERCENTILE=10,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gt.DEFAULT=new gt(v2,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gt.DISABLED=new gt(-1,0,0);/**
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
 */class fs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new fs(0)}static cr(){return new fs(-1)}}/**
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
 */const F0="LruGarbageCollector",nR=1048576;function U0([t,e],[n,r]){const i=re(t,n);return i===0?re(e,r):i}class rR{constructor(e){this.Ir=e,this.buffer=new ze(U0),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();U0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class iR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){$(F0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){As(n)?$(F0,"Ignoring IndexedDB error during garbage collection: ",n):await Ss(n)}await this.Vr(3e5)})}}class sR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Dc.ce);const r=new rR(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(j0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),j0):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(u=Date.now(),Ci()<=ne.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function oR(t,e){return new sR(t,e)}/**
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
 */class aR{constructor(){this.changes=new yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class lR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class cR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ao(r.mutation,i,kt.empty(),ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Jr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ao();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Bn();const o=So(),l=function(){return So()}();return n.forEach((c,u)=>{const f=r.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof br)?s=s.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ao(f.mutation,u,f.mutation.getFieldMask(),ue.now())):o.set(u.key,kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>l.set(u,new lR(f,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,n){const r=So();let i=new Te((o,l)=>o-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||kt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const m=(i.get(l.batchId)||ie()).add(c);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,m=t2();f.forEach(g=>{if(!s.has(g)){const I=a2(n.get(g),r.get(g));I!==null&&m.set(g,I),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Yv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Jr());let l=Wo,c=s;return o.next(u=>M.forEach(u,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,ie())).next(f=>({batchId:l,changes:e2(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=ao();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ao();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,c=>{const u=function(m,g){return new Cs(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,ot.newInvalidDocument(f)))});let l=ao();return o.forEach((c,u)=>{const f=s.get(c);f!==void 0&&Ao(f.mutation,u,kt.empty(),ue.now()),Mc(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class uR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return M.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:wn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:ZP(i.bundledQuery),readTime:wn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class hR{constructor(){this.overlays=new Te(W.comparator),this.qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Jr(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=s.get(u.largestBatchId);f===null&&(f=Jr(),s=s.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Jr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new RP(n,r));let s=this.qr.get(n);s===void 0&&(s=ie(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class dR{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Wf{constructor(){this.Qr=new ze(He.$r),this.Ur=new ze(He.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new He(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new He(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new W(new de([])),r=new He(n,e),i=new He(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new W(new de([])),r=new He(n,e),i=new He(n,e+1);let s=ie();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new He(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return W.comparator(e.key,n.key)||re(e.Yr,n.Yr)}static Kr(e,n){return re(e.Yr,n.Yr)||W.comparator(e.key,n.key)}}/**
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
 */class fR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new ze(He.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new PP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new He(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Lf:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),i=new He(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(re);return n.forEach(i=>{const s=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new He(new W(s),0);let l=new ze(re);return this.Zr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.Yr)),!0)},o),M.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(n.mutations,i=>{const s=new He(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new He(n,0),i=this.Zr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class pR{constructor(e){this.ri=e,this.docs=function(){return new Te(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Bn();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Hk($k(f),r)<=0||(i.has(f.key)||Mc(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K(9500)}ii(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new mR(this)}getSize(e){return M.resolve(this.size)}}class mR extends aR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class gR{constructor(e){this.persistence=e,this.si=new yi(n=>jf(n),Ff),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.oi=0,this._i=new Wf,this.targetCount=0,this.ai=fs.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),M.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new fs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Pr(n),M.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this._i.containsKey(n))}}/**
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
 */class w2{constructor(e,n){this.ui={},this.overlays={},this.ci=new Dc(0),this.li=!1,this.li=!0,this.hi=new dR,this.referenceDelegate=e(this),this.Pi=new gR(this),this.indexManager=new eR,this.remoteDocumentCache=function(i){return new pR(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new JP(n),this.Ii=new uR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new hR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new fR(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new _R(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return M.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class _R extends Wk{constructor(e){super(),this.currentSequenceNumber=e}}class Gf{constructor(e){this.persistence=e,this.Ri=new Wf,this.Vi=null}static mi(e){return new Gf(e)}get fi(){if(this.Vi)return this.Vi;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,r=>{const i=W.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class rc{constructor(e,n){this.persistence=e,this.pi=new yi(r=>Qk(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=oR(this,n)}static mi(e,n){return new rc(e,n)}Ei(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return M.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=fl(e.data.value)),n}br(e,n,r){return M.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Kf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Kf(e,n.fromCache,r,i)}}/**
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
 */class yR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class vR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return QT()?8:Gk(lt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new yR;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(Ci()<=ne.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",ki(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(Ci()<=ne.DEBUG&&$("QueryEngine","Query:",ki(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Ci()<=ne.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",ki(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vn(n))):M.resolve())}ys(e,n){if(P0(n))return M.resolve(null);let r=vn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=md(n,null,"F"),r=vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,md(n,null,"F")):this.vs(e,u,n,c)}))})))}ws(e,n,r,i){return P0(n)||i.isEqual(Y.min())?M.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?M.resolve(null):(Ci()<=ne.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ki(n)),this.vs(e,o,n,zk(i,Wo)).next(l=>l))})}Ds(e,n){let r=new ze(Jv(e));return n.forEach((i,s)=>{Mc(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return Ci()<=ne.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",ki(n)),this.ps.getDocumentsMatchingQuery(e,n,Ar.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const Qf="LocalStore",wR=3e8;class ER{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Te(re),this.xs=new yi(s=>jf(s),Ff),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function IR(t,e,n,r){return new ER(t,e,n,r)}async function E2(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let c=ie();for(const u of i){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of s){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:l}))})})}function TR(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const m=u.batch,g=m.keys();let I=M.resolve();return g.forEach(R=>{I=I.next(()=>f.getEntry(c,R)).next(P=>{const V=u.docVersions.get(R);ae(V!==null,48541),P.version.compareTo(V)<0&&(m.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),f.addEntry(P)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ie();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function I2(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function SR(t,e){const n=X(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.Pi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(s,f.addedDocuments,m)));let I=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(Ze.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(m,I),function(P,V,E){return P.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=wR?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,I,f)&&l.push(n.Pi.updateTargetData(s,I))});let c=Bn(),u=ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(AR(s,o,e.documentUpdates).next(f=>{c=f.ks,u=f.qs})),!r.isEqual(Y.min())){const f=n.Pi.getLastRemoteSnapshotVersion(s).next(m=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Ms=i,s))}function AR(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bn();return n.forEach((l,c)=>{const u=s.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):$(Qf,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{ks:o,qs:i}})}function CR(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Lf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function kR(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function wd(t,e,n){const r=X(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!As(o))throw o;$(Qf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function B0(t,e,n){const r=X(t);let i=Y.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const m=X(c),g=m.xs.get(f);return g!==void 0?M.resolve(m.Ms.get(g)):m.Pi.getTargetData(u,f)}(r,o,vn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ie())).next(l=>(PR(r,fP(e),l),{documents:l,Qs:s})))}function PR(t,e,n){let r=t.Os.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class z0{constructor(){this.activeTargetIds=vP()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RR{constructor(){this.Mo=new z0,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new z0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xR{Oo(e){}shutdown(){}}/**
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
 */const $0="ConnectivityMonitor";class H0{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){$($0,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){$($0,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qa=null;function Ed(){return Qa===null?Qa=function(){return 268435456+Math.round(2147483648*Math.random())}():Qa++,"0x"+Qa.toString(16)}/**
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
 */const th="RestConnection",NR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class DR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Xl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Ed(),l=this.zo(e,n.toUriEncodedString());$(th,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,i,s);const{host:u}=new URL(l),f=vs(u);return this.Jo(e,l,c,r,f).then(m=>($(th,`Received RPC '${e}' ${o}: `,m),m),m=>{throw cs(th,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ts}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=NR[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class VR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const rt="WebChannelConnection";class OR extends DR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Ed();return new Promise((l,c)=>{const u=new Sv;u.setWithCredentials(!0),u.listenOnce(Av.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case dl.NO_ERROR:const m=u.getResponseJson();$(rt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case dl.TIMEOUT:$(rt,`RPC '${e}' ${o} timed out`),c(new B(L.DEADLINE_EXCEEDED,"Request time out"));break;case dl.HTTP_ERROR:const g=u.getStatus();if($(rt,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let I=u.getResponseJson();Array.isArray(I)&&(I=I[0]);const R=I==null?void 0:I.error;if(R&&R.status&&R.message){const P=function(E){const v=E.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(v)>=0?v:L.UNKNOWN}(R.status);c(new B(P,R.message))}else c(new B(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new B(L.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{$(rt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);$(rt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",f,r,15)})}T_(e,n,r){const i=Ed(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Pv(),l=kv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=s.join("");$(rt,`Creating RPC '${e}' stream ${i}: ${f}`,c);const m=o.createWebChannel(f,c);this.I_(m);let g=!1,I=!1;const R=new VR({Yo:V=>{I?$(rt,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(g||($(rt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),$(rt,`RPC '${e}' stream ${i} sending:`,V),m.send(V))},Zo:()=>m.close()}),P=(V,E,v)=>{V.listen(E,S=>{try{v(S)}catch(D){setTimeout(()=>{throw D},0)}})};return P(m,oo.EventType.OPEN,()=>{I||($(rt,`RPC '${e}' stream ${i} transport opened.`),R.o_())}),P(m,oo.EventType.CLOSE,()=>{I||(I=!0,$(rt,`RPC '${e}' stream ${i} transport closed`),R.a_(),this.E_(m))}),P(m,oo.EventType.ERROR,V=>{I||(I=!0,cs(rt,`RPC '${e}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),R.a_(new B(L.UNAVAILABLE,"The operation could not be completed")))}),P(m,oo.EventType.MESSAGE,V=>{var E;if(!I){const v=V.data[0];ae(!!v,16349);const S=v,D=(S==null?void 0:S.error)||((E=S[0])==null?void 0:E.error);if(D){$(rt,`RPC '${e}' stream ${i} received error:`,D);const b=D.status;let j=function(A){const T=Ve[A];if(T!==void 0)return c2(T)}(b),w=D.message;j===void 0&&(j=L.INTERNAL,w="Unknown error status: "+b+" with message "+D.message),I=!0,R.a_(new B(j,w)),m.close()}else $(rt,`RPC '${e}' stream ${i} received:`,v),R.u_(v)}}),P(l,Cv.STAT_EVENT,V=>{V.stat===ld.PROXY?$(rt,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===ld.NOPROXY&&$(rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.__()},0),R}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function nh(){return typeof document<"u"?document:null}/**
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
 */function Uc(t){return new jP(t,!0)}/**
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
 */class T2{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const q0="PersistentStream";class S2{constructor(e,n,r,i,s,o,l,c){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new T2(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new B(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return $(q0,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():($(q0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LR extends S2{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=BP(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?wn(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=vd(this.serializer),n.addTarget=function(s,o){let l;const c=o.target;if(l=fd(c)?{documents:HP(s,c)}:{query:qP(s,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=d2(s,o.resumeToken);const u=gd(s,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=nc(s,o.snapshotVersion.toTimestamp());const u=gd(s,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=GP(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=vd(this.serializer),n.removeTarget=e,this.q_(n)}}class MR extends S2{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ae(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ae(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=$P(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=vd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zP(this.serializer,r))};this.q_(n)}}/**
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
 */class bR{}class jR extends bR{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,_d(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(L.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,_d(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class FR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Un(n),this.aa=!1):$("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ui="RemoteStore";class UR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{vi(this)&&($(ui,"Restarting streams for network reachability change."),await async function(c){const u=X(c);u.Ea.add(4),await ha(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Bc(u)}(this))})}),this.Ra=new FR(r,i)}}async function Bc(t){if(vi(t))for(const e of t.da)await e(!0)}async function ha(t){for(const e of t.da)await e(!1)}function A2(t,e){const n=X(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Zf(n)?Jf(n):ks(n).O_()&&Xf(n,e))}function Yf(t,e){const n=X(t),r=ks(n);n.Ia.delete(e),r.O_()&&C2(n,e),n.Ia.size===0&&(r.O_()?r.L_():vi(n)&&n.Ra.set("Unknown"))}function Xf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ks(t).Y_(e)}function C2(t,e){t.Va.Ue(e),ks(t).Z_(e)}function Jf(t){t.Va=new OP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ks(t).start(),t.Ra.ua()}function Zf(t){return vi(t)&&!ks(t).x_()&&t.Ia.size>0}function vi(t){return X(t).Ea.size===0}function k2(t){t.Va=void 0}async function BR(t){t.Ra.set("Online")}async function zR(t){t.Ia.forEach((e,n)=>{Xf(t,e)})}async function $R(t,e){k2(t),Zf(t)?(t.Ra.ha(e),Jf(t)):t.Ra.set("Unknown")}async function HR(t,e,n){if(t.Ra.set("Online"),e instanceof h2&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){$(ui,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ic(t,r)}else if(e instanceof gl?t.Va.Ze(e):e instanceof u2?t.Va.st(e):t.Va.tt(e),!n.isEqual(Y.min()))try{const r=await I2(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.Ia.get(u);f&&s.Ia.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=s.Ia.get(c);if(!f)return;s.Ia.set(c,f.withResumeToken(Ze.EMPTY_BYTE_STRING,f.snapshotVersion)),C2(s,c);const m=new lr(f.target,c,u,f.sequenceNumber);Xf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$(ui,"Failed to raise snapshot:",r),await ic(t,r)}}async function ic(t,e,n){if(!As(e))throw e;t.Ea.add(1),await ha(t),t.Ra.set("Offline"),n||(n=()=>I2(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(ui,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Bc(t)})}function P2(t,e){return e().catch(n=>ic(t,n,e))}async function zc(t){const e=X(t),n=Rr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Lf;for(;qR(e);)try{const i=await CR(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,WR(e,i)}catch(i){await ic(e,i)}R2(e)&&x2(e)}function qR(t){return vi(t)&&t.Ta.length<10}function WR(t,e){t.Ta.push(e);const n=Rr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function R2(t){return vi(t)&&!Rr(t).x_()&&t.Ta.length>0}function x2(t){Rr(t).start()}async function GR(t){Rr(t).ra()}async function KR(t){const e=Rr(t);for(const n of t.Ta)e.ea(n.mutations)}async function QR(t,e,n){const r=t.Ta.shift(),i=$f.from(r,e,n);await P2(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await zc(t)}async function YR(t,e){e&&Rr(t).X_&&await async function(r,i){if(function(o){return NP(o)&&o!==L.ABORTED}(i.code)){const s=r.Ta.shift();Rr(r).B_(),await P2(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await zc(r)}}(t,e),R2(t)&&x2(t)}async function W0(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),$(ui,"RemoteStore received new credentials");const r=vi(n);n.Ea.add(3),await ha(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Bc(n)}async function XR(t,e){const n=X(t);e?(n.Ea.delete(2),await Bc(n)):e||(n.Ea.add(2),await ha(n),n.Ra.set("Unknown"))}function ks(t){return t.ma||(t.ma=function(n,r,i){const s=X(n);return s.sa(),new LR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:BR.bind(null,t),t_:zR.bind(null,t),r_:$R.bind(null,t),H_:HR.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Zf(t)?Jf(t):t.Ra.set("Unknown")):(await t.ma.stop(),k2(t))})),t.ma}function Rr(t){return t.fa||(t.fa=function(n,r,i){const s=X(n);return s.sa(),new MR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:GR.bind(null,t),r_:YR.bind(null,t),ta:KR.bind(null,t),na:QR.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await zc(t)):(await t.fa.stop(),t.Ta.length>0&&($(ui,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class ep{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new ep(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tp(t,e){if(Un("AsyncQueue",`${e}: ${t}`),As(t))return new B(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ji{static emptySet(e){return new Ji(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=ao(),this.sortedSet=new Te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ji)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class G0{constructor(){this.ga=new Te(W.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):K(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class ps{constructor(e,n,r,i,s,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ps(e,n,Ji.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class JR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class ZR{constructor(){this.queries=K0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=K0(),s.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new B(L.ABORTED,"Firestore shutting down"))}}function K0(){return new yi(t=>Xv(t),Lc)}async function N2(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new JR,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=tp(o,`Initialization of query '${ki(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&np(n)}async function D2(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function e3(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&np(n)}function t3(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function np(t){t.Ca.forEach(e=>{e.next()})}var Id,Q0;(Q0=Id||(Id={})).Ma="default",Q0.Cache="cache";class V2{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Id.Cache}}/**
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
 */class O2{constructor(e){this.key=e}}class L2{constructor(e){this.key=e}}class n3{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ie(),this.mutatedKeys=ie(),this.eu=Jv(e),this.tu=new Ji(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new G0,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),I=Mc(this.query,m)?m:null,R=!!g&&this.mutatedKeys.has(g.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let V=!1;g&&I?g.data.isEqual(I.data)?R!==P&&(r.track({type:3,doc:I}),V=!0):this.su(g,I)||(r.track({type:2,doc:I}),V=!0,(c&&this.eu(I,c)>0||u&&this.eu(I,u)<0)&&(l=!0)):!g&&I?(r.track({type:0,doc:I}),V=!0):g&&!I&&(r.track({type:1,doc:g}),V=!0,(c||u)&&(l=!0)),V&&(I?(o=o.add(I),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(I,R){const P=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Rt:V})}};return P(I)-P(R)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],c=this.Xa.size===0&&this.current&&!i?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new ps(this.query,e.tu,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new G0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ie(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new L2(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new O2(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ps.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const rp="SyncEngine";class r3{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class i3{constructor(e){this.key=e,this.hu=!1}}class s3{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new yi(l=>Xv(l),Lc),this.Iu=new Map,this.Eu=new Set,this.du=new Te(W.comparator),this.Au=new Map,this.Ru=new Wf,this.Vu={},this.mu=new Map,this.fu=fs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function o3(t,e,n=!0){const r=B2(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await M2(r,e,n,!0),i}async function a3(t,e){const n=B2(t);await M2(n,e,!0,!1)}async function M2(t,e,n,r){const i=await kR(t.localStore,vn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await l3(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&A2(t.remoteStore,i),l}async function l3(t,e,n,r,i){t.pu=(m,g,I)=>async function(P,V,E,v){let S=V.view.ru(E);S.Cs&&(S=await B0(P.localStore,V.query,!1).then(({documents:w})=>V.view.ru(w,S)));const D=v&&v.targetChanges.get(V.targetId),b=v&&v.targetMismatches.get(V.targetId)!=null,j=V.view.applyChanges(S,P.isPrimaryClient,D,b);return X0(P,V.targetId,j.au),j.snapshot}(t,m,g,I);const s=await B0(t.localStore,e,!0),o=new n3(e,s.Qs),l=o.ru(s.documents),c=ua.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);X0(t,n,u.au);const f=new r3(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function c3(t,e,n){const r=X(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Lc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await wd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Yf(r.remoteStore,i.targetId),Td(r,i.targetId)}).catch(Ss)):(Td(r,i.targetId),await wd(r.localStore,i.targetId,!0))}async function u3(t,e){const n=X(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Yf(n.remoteStore,r.targetId))}async function h3(t,e,n){const r=y3(t);try{const i=await function(o,l){const c=X(o),u=ue.now(),f=l.reduce((I,R)=>I.add(R.key),ie());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",I=>{let R=Bn(),P=ie();return c.Ns.getEntries(I,f).next(V=>{R=V,R.forEach((E,v)=>{v.isValidDocument()||(P=P.add(E))})}).next(()=>c.localDocuments.getOverlayedDocuments(I,R)).next(V=>{m=V;const E=[];for(const v of l){const S=CP(v,m.get(v.key).overlayedDocument);S!=null&&E.push(new br(v.key,S,$v(S.value.mapValue),zt.exists(!0)))}return c.mutationQueue.addMutationBatch(I,u,E,l)}).next(V=>{g=V;const E=V.applyToLocalDocumentSet(m,P);return c.documentOverlayCache.saveOverlays(I,V.batchId,E)})}).then(()=>({batchId:g.batchId,changes:e2(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new Te(re)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u}(r,i.batchId,n),await da(r,i.changes),await zc(r.remoteStore)}catch(i){const s=tp(i,"Failed to persist write");n.reject(s)}}async function b2(t,e){const n=X(t);try{const r=await SR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ae(o.hu,14607):i.removedDocuments.size>0&&(ae(o.hu,42227),o.hu=!1))}),await da(n,r,e)}catch(r){await Ss(r)}}function Y0(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=X(o);c.onlineState=l;let u=!1;c.queries.forEach((f,m)=>{for(const g of m.Sa)g.va(l)&&(u=!0)}),u&&np(c)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function d3(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Te(W.comparator);o=o.insert(s,ot.newNoDocument(s,Y.min()));const l=ie().add(s),c=new Fc(Y.min(),new Map,new Te(re),o,l);await b2(r,c),r.du=r.du.remove(s),r.Au.delete(e),ip(r)}else await wd(r.localStore,e,!1).then(()=>Td(r,e,n)).catch(Ss)}async function f3(t,e){const n=X(t),r=e.batch.batchId;try{const i=await TR(n.localStore,e);F2(n,r,null),j2(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await da(n,i)}catch(i){await Ss(i)}}async function p3(t,e,n){const r=X(t);try{const i=await function(o,l){const c=X(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(m=>(ae(m!==null,37113),f=m.keys(),c.mutationQueue.removeMutationBatch(u,m))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);F2(r,e,n),j2(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await da(r,i)}catch(i){await Ss(i)}}function j2(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function F2(t,e,n){const r=X(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Td(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||U2(t,r)})}function U2(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Yf(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),ip(t))}function X0(t,e,n){for(const r of n)r instanceof O2?(t.Ru.addReference(r.key,e),m3(t,r)):r instanceof L2?($(rp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||U2(t,r.key)):K(19791,{wu:r})}function m3(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||($(rp,"New document in limbo: "+n),t.Eu.add(r),ip(t))}function ip(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new W(de.fromString(e)),r=t.fu.next();t.Au.set(r,new i3(n)),t.du=t.du.insert(n,r),A2(t.remoteStore,new lr(vn(Uf(n.path)),r,"TargetPurposeLimboResolution",Dc.ce))}}async function da(t,e,n){const r=X(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const m=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(u){i.push(u);const m=Kf.As(c.targetId,u);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(c,u){const f=X(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(u,g=>M.forEach(g.Es,I=>f.persistence.referenceDelegate.addReference(m,g.targetId,I)).next(()=>M.forEach(g.ds,I=>f.persistence.referenceDelegate.removeReference(m,g.targetId,I)))))}catch(m){if(!As(m))throw m;$(Qf,"Failed to update sequence numbers: "+m)}for(const m of u){const g=m.targetId;if(!m.fromCache){const I=f.Ms.get(g),R=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(R);f.Ms=f.Ms.insert(g,P)}}}(r.localStore,s))}async function g3(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){$(rp,"User change. New user:",e.toKey());const r=await E2(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(c=>{c.reject(new B(L.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await da(n,r.Ls)}}function _3(t,e){const n=X(t),r=n.Au.get(e);if(r&&r.hu)return ie().add(r.key);{let i=ie();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function B2(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=b2.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=d3.bind(null,e),e.Pu.H_=e3.bind(null,e.eventManager),e.Pu.yu=t3.bind(null,e.eventManager),e}function y3(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=f3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=p3.bind(null,e),e}class sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return IR(this.persistence,new vR,e.initialUser,this.serializer)}Cu(e){return new w2(Gf.mi,this.serializer)}Du(e){return new RR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sc.provider={build:()=>new sc};class v3 extends sc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ae(this.persistence.referenceDelegate instanceof rc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new iR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?gt.withCacheSize(this.cacheSizeBytes):gt.DEFAULT;return new w2(r=>rc.mi(r,n),this.serializer)}}class Sd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Y0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=g3.bind(null,this.syncEngine),await XR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ZR}()}createDatastore(e){const n=Uc(e.databaseInfo.databaseId),r=function(s){return new OR(s)}(e.databaseInfo);return function(s,o,l,c){return new jR(s,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new UR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Y0(this.syncEngine,n,0),function(){return H0.v()?new H0:new xR}())}createSyncEngine(e,n){return function(i,s,o,l,c,u,f){const m=new s3(i,s,o,l,c,u);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);$(ui,"RemoteStore shutting down."),s.Ea.add(5),await ha(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Sd.provider={build:()=>new Sd};/**
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
 */class z2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const xr="FirestoreClient";class w3{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=Of.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(xr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(xr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=tp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function rh(t,e){t.asyncQueue.verifyOperationInProgress(),$(xr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await E2(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function J0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await E3(t);$(xr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>W0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>W0(e.remoteStore,i)),t._onlineComponents=e}async function E3(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(xr,"Using user provided OfflineComponentProvider");try{await rh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;cs("Error using user provided cache. Falling back to memory cache: "+n),await rh(t,new sc)}}else $(xr,"Using default OfflineComponentProvider"),await rh(t,new v3(void 0));return t._offlineComponents}async function $2(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(xr,"Using user provided OnlineComponentProvider"),await J0(t,t._uninitializedComponentsProvider._online)):($(xr,"Using default OnlineComponentProvider"),await J0(t,new Sd))),t._onlineComponents}function I3(t){return $2(t).then(e=>e.syncEngine)}async function H2(t){const e=await $2(t),n=e.eventManager;return n.onListen=o3.bind(null,e.syncEngine),n.onUnlisten=c3.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=a3.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=u3.bind(null,e.syncEngine),n}function T3(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const f=new z2({next:g=>{f.Nu(),o.enqueueAndForget(()=>D2(s,m));const I=g.docs.has(l);!I&&g.fromCache?u.reject(new B(L.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&c&&c.source==="server"?u.reject(new B(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),m=new V2(Uf(l.path),f,{includeMetadataChanges:!0,qa:!0});return N2(s,m)}(await H2(t),t.asyncQueue,e,n,r)),r.promise}function S3(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const f=new z2({next:g=>{f.Nu(),o.enqueueAndForget(()=>D2(s,m)),g.fromCache&&c.source==="server"?u.reject(new B(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),m=new V2(l,f,{includeMetadataChanges:!0,qa:!0});return N2(s,m)}(await H2(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function q2(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Z0=new Map;/**
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
 */const W2="firestore.googleapis.com",e_=!0;class t_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=W2,this.ssl=e_}else this.host=e.host,this.ssl=e.ssl??e_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=v2;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<nR)throw new B(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Bk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=q2(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $c{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new t_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new t_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Nk;switch(r.type){case"firstParty":return new Lk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Z0.get(n);r&&($("ComponentProvider","Removing Datastore"),Z0.delete(n),r.terminate())}(this),Promise.resolve()}}function A3(t,e,n,r={}){var u;t=rn(t,$c);const i=vs(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(V1(`https://${l}`),O1("Firestore",!0)),s.host!==W2&&s.host!==l&&cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...s,host:l,ssl:i,emulatorOptions:r};if(!Sr(c,o)&&(t._setSettings(c),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=it.MOCK_USER;else{f=BT(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new B(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new it(g)}t._authCredentials=new Dk(new xv(f,m))}}/**
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
 */class wi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wi(this.firestore,e,this._query)}}class Ne{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}toJSON(){return{type:Ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(la(n,Ne._jsonSchema))return new Ne(e,r||null,new W(de.fromString(n.referencePath)))}}Ne._jsonSchemaVersion="firestore/documentReference/1.0",Ne._jsonSchema={type:Me("string",Ne._jsonSchemaVersion),referencePath:Me("string")};class Er extends wi{constructor(e,n,r){super(e,n,Uf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new W(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function Nr(t,e,...n){if(t=De(t),Nv("collection","path",e),t instanceof $c){const r=de.fromString(e,...n);return p0(r),new Er(t,null,r)}{if(!(t instanceof Ne||t instanceof Er))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return p0(r),new Er(t.firestore,null,r)}}function Tt(t,e,...n){if(t=De(t),arguments.length===1&&(e=Of.newId()),Nv("doc","path",e),t instanceof $c){const r=de.fromString(e,...n);return f0(r),new Ne(t,null,new W(r))}{if(!(t instanceof Ne||t instanceof Er))throw new B(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return f0(r),new Ne(t.firestore,t instanceof Er?t.converter:null,new W(r))}}/**
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
 */const n_="AsyncQueue";class r_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new T2(this,"async_queue_retry"),this._c=()=>{const r=nh();r&&$(n_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=nh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=nh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Vn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!As(e))throw e;$(n_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Un("INTERNAL UNHANDLED ERROR: ",i_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=ep.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&K(47125,{Pc:i_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function i_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ei extends $c{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new r_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new r_(e),this._firestoreClient=void 0,await e}}}function C3(t,e){const n=typeof t=="object"?t:Sf(),r=typeof t=="string"?t:Xl,i=gi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=FT("firestore");s&&A3(i,...s)}return i}function sp(t){if(t._terminated)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||k3(t),t._firestoreClient}function k3(t){var r,i,s;const e=t._freezeSettings(),n=function(l,c,u,f){return new Jk(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,q2(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new w3(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jt(Ze.fromBase64String(e))}catch(n){throw new B(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jt(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:jt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(la(e,jt._jsonSchema))return jt.fromBase64String(e.bytes)}}jt._jsonSchemaVersion="firestore/bytes/1.0",jt._jsonSchema={type:Me("string",jt._jsonSchemaVersion),bytes:Me("string")};/**
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
 */class Hc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class op{constructor(e){this._methodName=e}}/**
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
 */class En{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:En._jsonSchemaVersion}}static fromJSON(e){if(la(e,En._jsonSchema))return new En(e.latitude,e.longitude)}}En._jsonSchemaVersion="firestore/geoPoint/1.0",En._jsonSchema={type:Me("string",En._jsonSchemaVersion),latitude:Me("number"),longitude:Me("number")};/**
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
 */class In{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:In._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(la(e,In._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new In(e.vectorValues);throw new B(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}In._jsonSchemaVersion="firestore/vectorValue/1.0",In._jsonSchema={type:Me("string",In._jsonSchemaVersion),vectorValues:Me("object")};/**
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
 */const P3=/^__.*__$/;class R3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new br(e,this.data,this.fieldMask,n,this.fieldTransforms):new ca(e,this.data,n,this.fieldTransforms)}}class G2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new br(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function K2(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ac:t})}}class ap{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ap({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return oc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(K2(this.Ac)&&P3.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class x3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Uc(e)}Cc(e,n,r,i=!1){return new ap({Ac:e,methodName:n,Dc:r,path:Ye.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qc(t){const e=t._freezeSettings(),n=Uc(t._databaseId);return new x3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Q2(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);lp("Data must be an object, but it was:",o,r);const l=Y2(r,o);let c,u;if(s.merge)c=new kt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=Ad(e,m,n);if(!o.contains(g))throw new B(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);J2(f,g)||f.push(g)}c=new kt(f),u=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,u=o.fieldTransforms;return new R3(new yt(l),c,u)}class Wc extends op{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wc}}function N3(t,e,n,r){const i=t.Cc(1,e,n);lp("Data must be an object, but it was:",i,r);const s=[],o=yt.empty();Mr(r,(c,u)=>{const f=cp(e,c,n);u=De(u);const m=i.yc(f);if(u instanceof Wc)s.push(f);else{const g=fa(u,m);g!=null&&(s.push(f),o.set(f,g))}});const l=new kt(s);return new G2(o,l,i.fieldTransforms)}function D3(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[Ad(e,r,n)],c=[i];if(s.length%2!=0)throw new B(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Ad(e,s[g])),c.push(s[g+1]);const u=[],f=yt.empty();for(let g=l.length-1;g>=0;--g)if(!J2(u,l[g])){const I=l[g];let R=c[g];R=De(R);const P=o.yc(I);if(R instanceof Wc)u.push(I);else{const V=fa(R,P);V!=null&&(u.push(I),f.set(I,V))}}const m=new kt(u);return new G2(f,m,o.fieldTransforms)}function V3(t,e,n,r=!1){return fa(n,t.Cc(r?4:3,e))}function fa(t,e){if(X2(t=De(t)))return lp("Unsupported field value:",e,t),Y2(t,e);if(t instanceof op)return function(r,i){if(!K2(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let c=fa(l,i.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ue.fromDate(r);return{timestampValue:nc(i.serializer,s)}}if(r instanceof ue){const s=new ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:nc(i.serializer,s)}}if(r instanceof En)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof jt)return{bytesValue:d2(i.serializer,r._byteString)};if(r instanceof Ne){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:qf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof In)return function(o,l){return{mapValue:{fields:{[Uv]:{stringValue:zv},[Jl]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return Bf(l.serializer,u)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Nc(r)}`)}(t,e)}function Y2(t,e){const n={};return Ov(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mr(t,(r,i)=>{const s=fa(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function X2(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ue||t instanceof En||t instanceof jt||t instanceof Ne||t instanceof op||t instanceof In)}function lp(t,e,n){if(!X2(n)||!Dv(n)){const r=Nc(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Ad(t,e,n){if((e=De(e))instanceof Hc)return e._internalPath;if(typeof e=="string")return cp(t,e);throw oc("Field path arguments must be of type string or ",t,!1,void 0,n)}const O3=new RegExp("[~\\*/\\[\\]]");function cp(t,e,n){if(e.search(O3)>=0)throw oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hc(...e.split("."))._internalPath}catch{throw oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new B(L.INVALID_ARGUMENT,l+t+c)}function J2(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Z2{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new L3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(up("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class L3 extends Z2{data(){return super.data()}}function up(t,e){return typeof e=="string"?cp(t,e):e instanceof Hc?e._internalPath:e._delegate._internalPath}/**
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
 */function M3(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hp{}class ew extends hp{}function b3(t,e,...n){let r=[];e instanceof hp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof fp).length,l=s.filter(c=>c instanceof dp).length;if(o>1||o>0&&l>0)throw new B(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class dp extends ew{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new dp(e,n,r)}_apply(e){const n=this._parse(e);return tw(e._query,n),new wi(e.firestore,e.converter,pd(e._query,n))}_parse(e){const n=qc(e.firestore);return function(s,o,l,c,u,f,m){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){o_(m,f);const R=[];for(const P of m)R.push(s_(c,s,P));g={arrayValue:{values:R}}}else g=s_(c,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||o_(m,f),g=V3(l,o,m,f==="in"||f==="not-in");return Le.create(u,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class fp extends hp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new fp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const c of l)tw(o,c),o=pd(o,c)}(e._query,n),new wi(e.firestore,e.converter,pd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pp extends ew{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new pp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yo(s,o)}(e._query,this._field,this._direction);return new wi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Cs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function j3(t,e="asc"){const n=e,r=up("orderBy",t);return pp._create(r,n)}function s_(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new B(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yv(e)&&n.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(de.fromString(n));if(!W.isDocumentKey(r))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return I0(t,new W(r))}if(n instanceof Ne)return I0(t,n._key);throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nc(n)}.`)}function o_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tw(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class F3{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Mr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Jl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Pe(o.doubleValue));return new In(n)}convertGeoPoint(e){return new En(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Oc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Go(e));default:return null}}convertTimestamp(e){const n=Cr(e);return new ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);ae(y2(r),9688,{name:e});const i=new Ko(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||Un(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function nw(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class co{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ni extends Z2{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(up("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ni._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ni._jsonSchemaVersion="firestore/documentSnapshot/1.0",ni._jsonSchema={type:Me("string",ni._jsonSchemaVersion),bundleSource:Me("string","DocumentSnapshot"),bundleName:Me("string"),bundle:Me("string")};class _l extends ni{data(e={}){return super.data(e)}}class Zi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new co(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new _l(this._firestore,this._userDataWriter,r.key,r,new co(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new _l(i._firestore,i._userDataWriter,l.doc.key,l.doc,new co(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new _l(i._firestore,i._userDataWriter,l.doc.key,l.doc,new co(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:U3(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Zi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Of.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function U3(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
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
 */function rw(t){t=rn(t,Ne);const e=rn(t.firestore,Ei);return T3(sp(e),t._key).then(n=>z3(e,t,n))}Zi._jsonSchemaVersion="firestore/querySnapshot/1.0",Zi._jsonSchema={type:Me("string",Zi._jsonSchemaVersion),bundleSource:Me("string","QuerySnapshot"),bundleName:Me("string"),bundle:Me("string")};class iw extends F3{constructor(e){super(),this.firestore=e}convertBytes(e){return new jt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function Gc(t){t=rn(t,wi);const e=rn(t.firestore,Ei),n=sp(e),r=new iw(e);return M3(t._query),S3(n,t._query).then(i=>new Zi(e,r,t,i))}function B3(t,e,n){t=rn(t,Ne);const r=rn(t.firestore,Ei),i=nw(t.converter,e);return Yc(r,[Q2(qc(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,zt.none())])}function ms(t,e,n,...r){t=rn(t,Ne);const i=rn(t.firestore,Ei),s=qc(i);let o;return o=typeof(e=De(e))=="string"||e instanceof Hc?D3(s,"updateDoc",t._key,e,n,r):N3(s,"updateDoc",t._key,e),Yc(i,[o.toMutation(t._key,zt.exists(!0))])}function Kc(t){return Yc(rn(t.firestore,Ei),[new zf(t._key,zt.none())])}function Qc(t,e){const n=rn(t.firestore,Ei),r=Tt(t),i=nw(t.converter,e);return Yc(n,[Q2(qc(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function Yc(t,e){return function(r,i){const s=new Vn;return r.asyncQueue.enqueueAndForget(async()=>h3(await I3(r),i,s)),s.promise}(sp(t),e)}function z3(t,e,n){const r=n.docs.get(e._key),i=new iw(t);return new ni(t,i,e._key,r,new co(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ts=i})(ws),Tn(new tn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ei(new Vk(r.getProvider("auth-internal")),new Mk(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new B(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ko(u.options.projectId,f)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Bt(c0,u0,e),Bt(c0,u0,"esm2020")})();const sw="@firebase/installations",mp="0.6.19";/**
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
 */const ow=1e4,aw=`w:${mp}`,lw="FIS_v2",$3="https://firebaseinstallations.googleapis.com/v1",H3=60*60*1e3,q3="installations",W3="Installations";/**
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
 */const G3={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},hi=new mi(q3,W3,G3);function cw(t){return t instanceof on&&t.code.includes("request-failed")}/**
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
 */function uw({projectId:t}){return`${$3}/projects/${t}/installations`}function hw(t){return{token:t.token,requestStatus:2,expiresIn:Q3(t.expiresIn),creationTime:Date.now()}}async function dw(t,e){const r=(await e.json()).error;return hi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function fw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function K3(t,{refreshToken:e}){const n=fw(t);return n.append("Authorization",Y3(e)),n}async function pw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Q3(t){return Number(t.replace("s","000"))}function Y3(t){return`${lw} ${t}`}/**
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
 */async function X3({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=uw(t),i=fw(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:lw,appId:t.appId,sdkVersion:aw},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await pw(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:hw(u.authToken)}}else throw await dw("Create Installation",c)}/**
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
 */function mw(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function J3(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Z3=/^[cdef][\w-]{21}$/,Cd="";function ex(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=tx(t);return Z3.test(n)?n:Cd}catch{return Cd}}function tx(t){return J3(t).substr(0,22)}/**
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
 */function Xc(t){return`${t.appName}!${t.appId}`}/**
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
 */const gw=new Map;function _w(t,e){const n=Xc(t);yw(n,e),nx(n,e)}function yw(t,e){const n=gw.get(t);if(n)for(const r of n)r(e)}function nx(t,e){const n=rx();n&&n.postMessage({key:t,fid:e}),ix()}let Zr=null;function rx(){return!Zr&&"BroadcastChannel"in self&&(Zr=new BroadcastChannel("[Firebase] FID Change"),Zr.onmessage=t=>{yw(t.data.key,t.data.fid)}),Zr}function ix(){gw.size===0&&Zr&&(Zr.close(),Zr=null)}/**
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
 */const sx="firebase-installations-database",ox=1,di="firebase-installations-store";let ih=null;function gp(){return ih||(ih=U1(sx,ox,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(di)}}})),ih}async function ac(t,e){const n=Xc(t),i=(await gp()).transaction(di,"readwrite"),s=i.objectStore(di),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&_w(t,e.fid),e}async function vw(t){const e=Xc(t),r=(await gp()).transaction(di,"readwrite");await r.objectStore(di).delete(e),await r.done}async function Jc(t,e){const n=Xc(t),i=(await gp()).transaction(di,"readwrite"),s=i.objectStore(di),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&_w(t,l.fid),l}/**
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
 */async function _p(t){let e;const n=await Jc(t.appConfig,r=>{const i=ax(r),s=lx(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Cd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ax(t){const e=t||{fid:ex(),registrationStatus:0};return ww(e)}function lx(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(hi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=cx(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ux(t)}:{installationEntry:e}}async function cx(t,e){try{const n=await X3(t,e);return ac(t.appConfig,n)}catch(n){throw cw(n)&&n.customData.serverCode===409?await vw(t.appConfig):await ac(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function ux(t){let e=await a_(t.appConfig);for(;e.registrationStatus===1;)await mw(100),e=await a_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await _p(t);return r||n}return e}function a_(t){return Jc(t,e=>{if(!e)throw hi.create("installation-not-found");return ww(e)})}function ww(t){return hx(t)?{fid:t.fid,registrationStatus:0}:t}function hx(t){return t.registrationStatus===1&&t.registrationTime+ow<Date.now()}/**
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
 */async function dx({appConfig:t,heartbeatServiceProvider:e},n){const r=fx(t,n),i=K3(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:aw,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await pw(()=>fetch(r,l));if(c.ok){const u=await c.json();return hw(u)}else throw await dw("Generate Auth Token",c)}function fx(t,{fid:e}){return`${uw(t)}/${e}/authTokens:generate`}/**
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
 */async function yp(t,e=!1){let n;const r=await Jc(t.appConfig,s=>{if(!Ew(s))throw hi.create("not-registered");const o=s.authToken;if(!e&&gx(o))return s;if(o.requestStatus===1)return n=px(t,e),s;{if(!navigator.onLine)throw hi.create("app-offline");const l=yx(s);return n=mx(t,l),l}});return n?await n:r.authToken}async function px(t,e){let n=await l_(t.appConfig);for(;n.authToken.requestStatus===1;)await mw(100),n=await l_(t.appConfig);const r=n.authToken;return r.requestStatus===0?yp(t,e):r}function l_(t){return Jc(t,e=>{if(!Ew(e))throw hi.create("not-registered");const n=e.authToken;return vx(n)?{...e,authToken:{requestStatus:0}}:e})}async function mx(t,e){try{const n=await dx(t,e),r={...e,authToken:n};return await ac(t.appConfig,r),n}catch(n){if(cw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await vw(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await ac(t.appConfig,r)}throw n}}function Ew(t){return t!==void 0&&t.registrationStatus===2}function gx(t){return t.requestStatus===2&&!_x(t)}function _x(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+H3}function yx(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function vx(t){return t.requestStatus===1&&t.requestTime+ow<Date.now()}/**
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
 */async function wx(t){const e=t,{installationEntry:n,registrationPromise:r}=await _p(e);return r?r.catch(console.error):yp(e).catch(console.error),n.fid}/**
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
 */async function Ex(t,e=!1){const n=t;return await Ix(n),(await yp(n,e)).token}async function Ix(t){const{registrationPromise:e}=await _p(t);e&&await e}/**
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
 */function Tx(t){if(!t||!t.options)throw sh("App Configuration");if(!t.name)throw sh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw sh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function sh(t){return hi.create("missing-app-config-values",{valueName:t})}/**
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
 */const Iw="installations",Sx="installations-internal",Ax=t=>{const e=t.getProvider("app").getImmediate(),n=Tx(e),r=gi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Cx=t=>{const e=t.getProvider("app").getImmediate(),n=gi(e,Iw).getImmediate();return{getId:()=>wx(n),getToken:i=>Ex(n,i)}};function kx(){Tn(new tn(Iw,Ax,"PUBLIC")),Tn(new tn(Sx,Cx,"PRIVATE"))}kx();Bt(sw,mp);Bt(sw,mp,"esm2020");/**
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
 */const lc="analytics",Px="firebase_id",Rx="origin",xx=60*1e3,Nx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vp="https://www.googletagmanager.com/gtag/js";/**
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
 */const ft=new Cc("@firebase/analytics");/**
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
 */const Dx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new mi("analytics","Analytics",Dx);/**
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
 */function Vx(t){if(!t.startsWith(vp)){const e=Rt.create("invalid-gtag-resource",{gtagURL:t});return ft.warn(e.message),""}return t}function Tw(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Ox(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Lx(t,e){const n=Ox("firebase-js-sdk-policy",{createScriptURL:Vx}),r=document.createElement("script"),i=`${vp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Mx(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function bx(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await Tw(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(l){ft.error(l)}t("config",i,s)}async function jx(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await Tw(n);for(const c of o){const u=l.find(m=>m.measurementId===c),f=u&&e[u.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){ft.error(s)}}function Fx(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,c]=o;await jx(t,e,n,l,c)}else if(s==="config"){const[l,c]=o;await bx(t,e,n,r,l,c)}else if(s==="consent"){const[l,c]=o;t("consent",l,c)}else if(s==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){ft.error(l)}}return i}function Ux(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Fx(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Bx(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(vp)&&n.src.includes(t))return n;return null}/**
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
 */const zx=30,$x=1e3;class Hx{constructor(e={},n=$x){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Sw=new Hx;function qx(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Wx(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:qx(n)},i=Nx.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const c=await s.json();(o=c.error)!=null&&o.message&&(l=c.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function Gx(t,e=Sw,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Rt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Rt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Yx;return setTimeout(async()=>{l.abort()},xx),Aw({appId:r,apiKey:i,measurementId:s},o,l,e)}async function Aw(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Sw){var l;const{appId:s,measurementId:o}=t;try{await Kx(r,e)}catch(c){if(o)return ft.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw c}try{const c=await Wx(t);return i.deleteThrottleMetadata(s),c}catch(c){const u=c;if(!Qx(u)){if(i.deleteThrottleMetadata(s),o)return ft.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw c}const f=Number((l=u==null?void 0:u.customData)==null?void 0:l.httpStatus)===503?Vg(n,i.intervalMillis,zx):Vg(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,m),ft.debug(`Calling attemptFetch again in ${f} millis`),Aw(t,m,r,i)}}function Kx(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Qx(t){if(!(t instanceof on)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Yx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Xx(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function Jx(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
 */async function Zx(){if(M1())try{await b1()}catch(t){return ft.warn(Rt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ft.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function eN(t,e,n,r,i,s,o){const l=Gx(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&ft.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ft.error(g)),e.push(l);const c=Zx().then(g=>{if(g)return r.getId()}),[u,f]=await Promise.all([l,c]);Bx(s)||Lx(s,u.measurementId),i("js",new Date);const m=(o==null?void 0:o.config)??{};return m[Rx]="firebase",m.update=!0,f!=null&&(m[Px]=f),i("config",u.measurementId,m),u.measurementId}/**
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
 */class tN{constructor(e){this.app=e}_delete(){return delete es[this.app.options.appId],Promise.resolve()}}let es={},c_=[];const u_={};let oh="dataLayer",nN="gtag",h_,wp,d_=!1;function rN(){const t=[];if(L1()&&t.push("This is a browser extension environment."),YT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Rt.create("invalid-analytics-context",{errorInfo:e});ft.warn(n.message)}}function iN(t,e,n){rN();const r=t.options.appId;if(!r)throw Rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ft.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(es[r]!=null)throw Rt.create("already-exists",{id:r});if(!d_){Mx(oh);const{wrappedGtag:s,gtagCore:o}=Ux(es,c_,u_,oh,nN);wp=s,h_=o,d_=!0}return es[r]=eN(t,c_,u_,e,h_,oh,n),new tN(t)}function sN(t=Sf()){t=De(t);const e=gi(t,lc);return e.isInitialized()?e.getImmediate():oN(t)}function oN(t,e={}){const n=gi(t,lc);if(n.isInitialized()){const i=n.getImmediate();if(Sr(e,n.getOptions()))return i;throw Rt.create("already-initialized")}return n.initialize({options:e})}function aN(t,e,n){t=De(t),Jx(wp,es[t.app.options.appId],e,n).catch(r=>ft.error(r))}function lN(t,e,n,r){t=De(t),Xx(wp,es[t.app.options.appId],e,n,r).catch(i=>ft.error(i))}const f_="@firebase/analytics",p_="0.10.19";function cN(){Tn(new tn(lc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return iN(r,i,n)},"PUBLIC")),Tn(new tn("analytics-internal",t,"PRIVATE")),Bt(f_,p_),Bt(f_,p_,"esm2020");function t(e){try{const n=e.getProvider(lc).getImmediate();return{logEvent:(r,i,s)=>lN(n,r,i,s),setUserProperties:(r,i)=>aN(n,r,i)}}catch(n){throw Rt.create("interop-component-reg-failed",{reason:n})}}}cN();const uN={apiKey:"AIzaSyDIL-8yGpB1sjh1khHFZlbxKyNKXMJZTzg",authDomain:"u1-porfolio.firebaseapp.com",projectId:"u1-porfolio",storageBucket:"u1-porfolio.firebasestorage.app",messagingSenderId:"1070957784970",appId:"1:1070957784970:web:35faea8b55767e3911a273",measurementId:"G-4XQ4YK4RZY"},Ep=B1(uN);sN(Ep);const kd=kk(Ep),xe=C3(Ep),Cw=q.createContext();function hN({children:t}){const[e,n]=q.useState(!1),[r,i]=q.useState(!0);return q.useEffect(()=>{const s=mC(kd,o=>{n(!!o),i(!1)});return()=>s()},[]),p.jsx(Cw.Provider,{value:{isAdmin:e,loading:r},children:t})}function pa(){const t=q.useContext(Cw);if(t===void 0)throw new Error("useAdmin must be used within an AdminProvider");return t}const dN="_adminToggle_r3lnh_1",fN="_loginOverlay_r3lnh_26",pN="_loginForm_r3lnh_40",mN="_panel_r3lnh_95",gN="_panelHeader_r3lnh_112",_N="_panelActions_r3lnh_127",yN="_saveBtn_r3lnh_150",vN="_seedBtn_r3lnh_159",wN="_panelContent_r3lnh_168",EN="_formSection_r3lnh_174",IN="_note_r3lnh_216",Ot={adminToggle:dN,loginOverlay:fN,loginForm:pN,panel:mN,panelHeader:gN,panelActions:_N,saveBtn:yN,seedBtn:vN,panelContent:wN,formSection:EN,note:IN};function TN(){var D,b,j,w,y,A;const{isAdmin:t}=pa(),[e,n]=q.useState(!1),[r,i]=q.useState(!1),[s,o]=q.useState(""),[l,c]=q.useState(""),[u,f]=q.useState(null),[m,g]=q.useState(!1),[I,R]=q.useState({});q.useEffect(()=>{t&&P()},[t]);const P=async()=>{try{const T=Tt(xe,"portfolio","main"),k=await rw(T);k.exists()&&(f(k.data()),R(k.data()))}catch(T){console.error("Error loading portfolio data:",T)}},V=async T=>{T.preventDefault();try{await dC(kd,s,l),i(!1),o(""),c("")}catch(k){alert("Login failed: "+k.message)}},E=async()=>{await gC(kd),n(!1)},v=async()=>{try{await B3(Tt(xe,"portfolio","main"),I),f(I),g(!1),alert("Portfolio updated successfully!"),window.location.reload()}catch(T){alert("Failed to save: "+T.message)}},S=(T,k)=>{R(x=>({...x,[T]:k}))};return!t&&!r?p.jsx("button",{className:Ot.adminToggle,onClick:()=>i(!0),title:"Admin Login",children:"🔐"}):r?p.jsx("div",{className:Ot.loginOverlay,onClick:()=>i(!1),children:p.jsxs("div",{className:Ot.loginForm,onClick:T=>T.stopPropagation(),children:[p.jsx("h3",{children:"Admin Login"}),p.jsxs("form",{onSubmit:V,children:[p.jsx("input",{type:"email",placeholder:"Email",value:s,onChange:T=>o(T.target.value),required:!0}),p.jsx("input",{type:"password",placeholder:"Password",value:l,onChange:T=>c(T.target.value),required:!0}),p.jsx("button",{type:"submit",children:"Login"}),p.jsx("button",{type:"button",onClick:()=>i(!1),children:"Cancel"})]})]})}):p.jsxs(p.Fragment,{children:[p.jsx("button",{className:Ot.adminToggle,onClick:()=>n(!e),title:"Admin Panel",children:"⚙️"}),e&&p.jsxs("div",{className:Ot.panel,children:[p.jsxs("div",{className:Ot.panelHeader,children:[p.jsx("h3",{children:"Admin Panel"}),p.jsxs("div",{className:Ot.panelActions,children:[m?p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:v,className:Ot.saveBtn,children:"Save Changes"}),p.jsx("button",{onClick:()=>{R(u),g(!1)},children:"Cancel"})]}):p.jsx("button",{onClick:()=>g(!0),children:"Edit Portfolio"}),p.jsx("button",{onClick:E,children:"Logout"}),p.jsx("button",{onClick:()=>n(!1),children:"✕"})]})]}),m&&p.jsxs("div",{className:Ot.panelContent,children:[p.jsxs("div",{className:Ot.formSection,children:[p.jsx("h4",{children:"Hero Section"}),p.jsxs("label",{children:["Name:",p.jsx("input",{type:"text",value:((D=I.hero)==null?void 0:D.name)||"",onChange:T=>S("hero",{...I.hero,name:T.target.value})})]}),p.jsxs("label",{children:["Title:",p.jsx("input",{type:"text",value:((b=I.hero)==null?void 0:b.title)||"",onChange:T=>S("hero",{...I.hero,title:T.target.value})})]}),p.jsxs("label",{children:["Description:",p.jsx("textarea",{value:((j=I.hero)==null?void 0:j.description)||"",onChange:T=>S("hero",{...I.hero,description:T.target.value}),rows:4})]})]}),p.jsxs("div",{className:Ot.formSection,children:[p.jsx("h4",{children:"Social Links"}),p.jsxs("label",{children:["Instagram:",p.jsx("input",{type:"url",value:((w=I.social)==null?void 0:w.instagram)||"",onChange:T=>S("social",{...I.social,instagram:T.target.value})})]}),p.jsxs("label",{children:["GitHub:",p.jsx("input",{type:"url",value:((y=I.social)==null?void 0:y.github)||"",onChange:T=>S("social",{...I.social,github:T.target.value})})]}),p.jsxs("label",{children:["LinkedIn:",p.jsx("input",{type:"url",value:((A=I.social)==null?void 0:A.linkedin)||"",onChange:T=>S("social",{...I.social,linkedin:T.target.value})})]})]}),p.jsxs("div",{className:Ot.note,children:[p.jsx("strong",{children:"Note:"})," Projects, Skills, and Experience sections can be edited individually through their respective admin controls when logged in."]})]})]})]})}const SN="_navbar_1g12v_1",AN="_fadeInDown_1g12v_1",CN="_scrolled_1g12v_12",kN="_container_1g12v_27",PN="_logo_1g12v_36",RN="_dot_1g12v_46",xN="_navLinks_1g12v_52",NN="_navLink_1g12v_52",DN="_active_1g12v_77",VN="_themeToggle_1g12v_96",ON="_menuToggle_1g12v_131",LN="_open_1g12v_187",ke={navbar:SN,fadeInDown:AN,scrolled:CN,container:kN,logo:PN,dot:RN,navLinks:xN,navLink:NN,active:DN,themeToggle:VN,menuToggle:ON,open:LN},kw=q.createContext(),Ip=()=>q.useContext(kw),MN=({children:t})=>{const[e,n]=q.useState(()=>localStorage.getItem("theme")||"dark");q.useEffect(()=>{document.body.setAttribute("data-theme",e),localStorage.setItem("theme",e)},[e]);const r=()=>{n(i=>i==="light"?"dark":"light")};return p.jsx(kw.Provider,{value:{theme:e,toggleTheme:r},children:t})},bN="data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20width='48px'%20height='48px'%20fill='%23222'%3e%3cpath%20d='M%2012%200%20C%2011.4%200%2011%200.4%2011%201%20L%2011%202%20C%2011%202.6%2011.4%203%2012%203%20C%2012.6%203%2013%202.6%2013%202%20L%2013%201%20C%2013%200.4%2012.6%200%2012%200%20z%20M%204.1992188%203.1992188%20C%203.9492188%203.1992187%203.7%203.3%203.5%203.5%20C%203.1%203.9%203.1%204.5003906%203.5%204.9003906%20L%204.1992188%205.5996094%20C%204.5992187%205.9996094%205.1996094%205.9996094%205.5996094%205.5996094%20C%205.9996094%205.1996094%205.9996094%204.5992188%205.5996094%204.1992188%20L%204.9003906%203.5%20C%204.7003906%203.3%204.4492188%203.1992188%204.1992188%203.1992188%20z%20M%2019.800781%203.1992188%20C%2019.550781%203.1992188%2019.299609%203.3%2019.099609%203.5%20L%2018.400391%204.1992188%20C%2018.000391%204.5992187%2018.000391%205.1996094%2018.400391%205.5996094%20C%2018.800391%205.9996094%2019.400781%205.9996094%2019.800781%205.5996094%20L%2020.5%204.9003906%20C%2020.9%204.5003906%2020.9%203.9%2020.5%203.5%20C%2020.3%203.3%2020.050781%203.1992188%2019.800781%203.1992188%20z%20M%2012%205%20A%207%207%200%200%200%205%2012%20A%207%207%200%200%200%2012%2019%20A%207%207%200%200%200%2019%2012%20A%207%207%200%200%200%2012%205%20z%20M%201%2011%20C%200.4%2011%200%2011.4%200%2012%20C%200%2012.6%200.4%2013%201%2013%20L%202%2013%20C%202.6%2013%203%2012.6%203%2012%20C%203%2011.4%202.6%2011%202%2011%20L%201%2011%20z%20M%2022%2011%20C%2021.4%2011%2021%2011.4%2021%2012%20C%2021%2012.6%2021.4%2013%2022%2013%20L%2023%2013%20C%2023.6%2013%2024%2012.6%2024%2012%20C%2024%2011.4%2023.6%2011%2023%2011%20L%2022%2011%20z%20M%204.9003906%2018.099609%20C%204.6503906%2018.099609%204.3992188%2018.200391%204.1992188%2018.400391%20L%203.5%2019.099609%20C%203.1%2019.499609%203.1%2020.1%203.5%2020.5%20C%203.9%2020.9%204.5003906%2020.9%204.9003906%2020.5%20L%205.5996094%2019.800781%20C%205.9996094%2019.400781%205.9996094%2018.800391%205.5996094%2018.400391%20C%205.3996094%2018.200391%205.1503906%2018.099609%204.9003906%2018.099609%20z%20M%2019.099609%2018.099609%20C%2018.849609%2018.099609%2018.600391%2018.200391%2018.400391%2018.400391%20C%2018.000391%2018.800391%2018.000391%2019.400781%2018.400391%2019.800781%20L%2019.099609%2020.5%20C%2019.499609%2020.9%2020.1%2020.9%2020.5%2020.5%20C%2020.9%2020.1%2020.9%2019.499609%2020.5%2019.099609%20L%2019.800781%2018.400391%20C%2019.600781%2018.200391%2019.349609%2018.099609%2019.099609%2018.099609%20z%20M%2012%2021%20C%2011.4%2021%2011%2021.4%2011%2022%20L%2011%2023%20C%2011%2023.6%2011.4%2024%2012%2024%20C%2012.6%2024%2013%2023.6%2013%2023%20L%2013%2022%20C%2013%2021.4%2012.6%2021%2012%2021%20z'/%3e%3c/svg%3e",jN="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='30'%20height='30'%20fill='url(%23pattern0_22_1110)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_22_1110'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_22_1110'%20transform='scale(0.02)'/%3e%3c/pattern%3e%3cimage%20id='image0_22_1110'%20width='50'%20height='50'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClElEQVR4nO2av2pUQRSHTwIqiWijQasspMsD6BNIKnFNEU2jxDRikRdIEQnYCFrsEygqotgFFUEhWgjJA6hJk4giogbRQjDxzyeHnYVlnbvzJ7t7ZzQfpNtM7rd3Zs6c30Rkh/8Q4BHwDVgDngI14CxwSHICeIydX8AycB7YJ6kD9ANVYJFivgIXgf2SA8AYsN5G6AMwKTkA7AWu0Z57uUy3PmDeIfMSGJEcAOYcMu+AUcnkzdxxyLwHKpI6wCDw2iHzIosdDRjHzQ3JAeCZh8yEpA5w2kPkrW7fkjLAblMQXcxK6gC3PURUdkBSBriAH9OSMsART5EnkjJAxVPkJ3BAEi+OvpyUVAH2eGvAVUkVYChA5IH8A4tdWZVUAabwZ0NSBbgeILJZFNlo2tFfikH9GXYBHwNEvtsG0dxJqZZiUX+GKmF8sg2i4ZmyWIpF/RmeB4q8cvUCYyVInCCcBdtAGmM2WO/lmV9bWEfWVcRl22BnWj6kuVNfj8KHu8Rx3DbgYZPFNjPfA5FLkRJbhWEEsGT5hbluvBnzJmIllPvtBtdU3IbmToMdXhOx06lBcT6sWSvwBTuaO413aHeKWdjNvNH+3vWHNNpvh27Tp5wD/V2xqxF1oogZ39fuk2ToZ26ZHvsoMGyaIk1CDppT7JQ5O4UcO1ysaM/i+w1Okia/gWO+M6Eho/cTqVELkmha+Ho/kQpLIeuyVWbE3E+Uzaq2wFESTTKj5n6iTInKtiRasia9nyhjOg11RKJlW77Zw92pFr0mPIUmTGXtFivBW+w2ZLTwzXoWTl/0y5nxLnYdFhoAzmmgbLLYUH7oKdYU4O5NoxA0UDb3gFeAh2aKfNbIxvxsmLq0oJ2dNkVZ/EPADhLHH3gYEDVS3/wQAAAAAElFTkSuQmCC'/%3e%3c/defs%3e%3c/svg%3e";function FN(){const[t,e]=q.useState(!1),[n,r]=q.useState(!1),[i,s]=q.useState("hero"),{theme:o,toggleTheme:l}=Ip();q.useEffect(()=>{const f=()=>{e(window.scrollY>50);const m=["hero","projects","skills","experience","commonplace","contact"],g=window.scrollY+window.innerHeight/2;for(const I of m){const R=document.getElementById(I);if(R){const{offsetTop:P,offsetHeight:V}=R;if(g>=P&&g<P+V){s(I);break}}}};return window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]);const c=o==="light"?bN:jN,u=f=>{const m=document.getElementById(f);m&&(m.scrollIntoView({behavior:"smooth",block:"start"}),r(!1))};return p.jsx("nav",{className:`${ke.navbar} ${t?ke.scrolled:""}`,children:p.jsxs("div",{className:ke.container,children:[p.jsxs("div",{className:ke.logo,children:[p.jsx("span",{children:"Yuan"}),p.jsx("span",{className:ke.dot,children:"."})]}),p.jsxs("button",{className:ke.menuToggle,onClick:()=>r(!n),"aria-label":"Toggle menu",children:[p.jsx("span",{}),p.jsx("span",{}),p.jsx("span",{})]}),p.jsxs("div",{className:`${ke.navLinks} ${n?ke.open:""}`,children:[p.jsx("button",{onClick:()=>u("hero"),className:`${ke.navLink} ${i==="hero"?ke.active:""}`,children:"Home"}),p.jsx("button",{onClick:()=>u("projects"),className:`${ke.navLink} ${i==="projects"?ke.active:""}`,children:"Projects"}),p.jsx("button",{onClick:()=>u("skills"),className:`${ke.navLink} ${i==="skills"?ke.active:""}`,children:"Skills"}),p.jsx("button",{onClick:()=>u("experience"),className:`${ke.navLink} ${i==="experience"?ke.active:""}`,children:"Experience"}),p.jsx("button",{onClick:()=>u("commonplace"),className:`${ke.navLink} ${i==="commonplace"?ke.active:""}`,children:"Commonplace"}),p.jsx("button",{onClick:()=>u("contact"),className:`${ke.navLink} ${i==="contact"?ke.active:""}`,children:"Contact"}),p.jsx("button",{onClick:l,className:ke.themeToggle,"aria-label":"Toggle theme",children:p.jsx("img",{src:c,alt:"Theme toggle"})})]})]})})}const UN="_container_1u7ex_1",BN="_fadeInUp_1u7ex_1",zN={container:UN,fadeInUp:BN};function $N(){return p.jsxs("section",{id:"contact",className:zN.container,children:[p.jsx("h1",{className:"sectionTitle",children:"Contact"}),p.jsxs("form",{action:"https://formspree.io/f/mrbzbqqz",method:"post",children:[p.jsxs("div",{className:"formGroup",children:[p.jsx("label",{htmlFor:"name",hidden:!0,children:"Name"}),p.jsx("input",{type:"text",name:"name",id:"name",placeholder:"Name",required:!0})]}),p.jsxs("div",{className:"formGroup",children:[p.jsx("label",{htmlFor:"email",hidden:!0,children:"Email"}),p.jsx("input",{type:"email",name:"email",id:"email",placeholder:"Email",required:!0})]}),p.jsxs("div",{className:"formGroup",children:[p.jsx("label",{htmlFor:"message",hidden:!0,children:"Message"}),p.jsx("textarea",{name:"message",id:"message",placeholder:"Message",required:!0})]}),p.jsx("input",{className:"hover btn",type:"submit",value:"Submit"})]})]})}const HN="_container_bgt2n_1",qN="_fadeIn_bgt2n_1",WN={container:HN,fadeIn:qN};function GN(){return p.jsx("section",{id:"footer",className:WN.container,children:p.jsxs("p",{children:["© 2024 Yuan Pangan. ",p.jsx("br",{}),"All rights reserved."]})})}const KN="_container_wzy50_1",QN="_fadeInDown_wzy50_1",YN="_content_wzy50_11",XN="_colorModeContainer_wzy50_18",JN="_scaleIn_wzy50_1",ZN="_hero_wzy50_23",e4="_info_wzy50_47",t4="_fadeInUp_wzy50_1",n4="_descriptionSection_wzy50_54",r4="_description_wzy50_54",qr={container:KN,fadeInDown:QN,content:YN,colorModeContainer:XN,scaleIn:JN,hero:ZN,info:e4,fadeInUp:t4,descriptionSection:n4,description:r4},i4="/assets/yuan-CLoNjDCe.png",s4="data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2050'%20width='50px'%20height='50px'%3e%3cpath%20d='M%2016%203%20C%208.83%203%203%208.83%203%2016%20L%203%2034%20C%203%2041.17%208.83%2047%2016%2047%20L%2034%2047%20C%2041.17%2047%2047%2041.17%2047%2034%20L%2047%2016%20C%2047%208.83%2041.17%203%2034%203%20L%2016%203%20z%20M%2037%2011%20C%2038.1%2011%2039%2011.9%2039%2013%20C%2039%2014.1%2038.1%2015%2037%2015%20C%2035.9%2015%2035%2014.1%2035%2013%20C%2035%2011.9%2035.9%2011%2037%2011%20z%20M%2025%2014%20C%2031.07%2014%2036%2018.93%2036%2025%20C%2036%2031.07%2031.07%2036%2025%2036%20C%2018.93%2036%2014%2031.07%2014%2025%20C%2014%2018.93%2018.93%2014%2025%2014%20z%20M%2025%2016%20C%2020.04%2016%2016%2020.04%2016%2025%20C%2016%2029.96%2020.04%2034%2025%2034%20C%2029.96%2034%2034%2029.96%2034%2025%20C%2034%2020.04%2029.96%2016%2025%2016%20z'/%3e%3c/svg%3e",o4="data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20fill='%23FFFFFF'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2050'%20width='50px'%20height='50px'%3e%3cpath%20d='M%2016%203%20C%208.83%203%203%208.83%203%2016%20L%203%2034%20C%203%2041.17%208.83%2047%2016%2047%20L%2034%2047%20C%2041.17%2047%2047%2041.17%2047%2034%20L%2047%2016%20C%2047%208.83%2041.17%203%2034%203%20L%2016%203%20z%20M%2037%2011%20C%2038.1%2011%2039%2011.9%2039%2013%20C%2039%2014.1%2038.1%2015%2037%2015%20C%2035.9%2015%2035%2014.1%2035%2013%20C%2035%2011.9%2035.9%2011%2037%2011%20z%20M%2025%2014%20C%2031.07%2014%2036%2018.93%2036%2025%20C%2036%2031.07%2031.07%2036%2025%2036%20C%2018.93%2036%2014%2031.07%2014%2025%20C%2014%2018.93%2018.93%2014%2025%2014%20z%20M%2025%2016%20C%2020.04%2016%2016%2020.04%2016%2025%20C%2016%2029.96%2020.04%2034%2025%2034%20C%2029.96%2034%2034%2029.96%2034%2025%20C%2034%2020.04%2029.96%2016%2025%2016%20z'/%3e%3c/svg%3e",a4="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,256,256'%20width='64px'%20height='64px'%3e%3cg%20fill='%23222222'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(4,4)'%3e%3cpath%20d='M32,6c-14.359,0%20-26,11.641%20-26,26c0,12.277%208.512,22.56%2019.955,25.286c-0.592,-0.141%20-1.179,-0.299%20-1.755,-0.479v-5.957c0,0%20-0.975,0.325%20-2.275,0.325c-3.637,0%20-5.148,-3.245%20-5.525,-4.875c-0.229,-0.993%20-0.827,-1.934%20-1.469,-2.509c-0.767,-0.684%20-1.126,-0.686%20-1.131,-0.92c-0.01,-0.491%200.658,-0.471%200.975,-0.471c1.625,0%202.857,1.729%203.429,2.623c1.417,2.207%202.938,2.577%203.721,2.577c0.975,0%201.817,-0.146%202.397,-0.426c0.268,-1.888%201.108,-3.57%202.478,-4.774c-6.097,-1.219%20-10.4,-4.716%20-10.4,-10.4c0,-2.928%201.175,-5.619%203.133,-7.792c-0.2,-0.567%20-0.533,-1.714%20-0.533,-3.583c0,-1.235%200.086,-2.751%200.65,-4.225c0,0%203.708,0.026%207.205,3.338c1.614,-0.47%203.341,-0.738%205.145,-0.738c1.804,0%203.531,0.268%205.145,0.738c3.497,-3.312%207.205,-3.338%207.205,-3.338c0.567,1.474%200.65,2.99%200.65,4.225c0,2.015%20-0.268,3.19%20-0.432,3.697c1.898,2.153%203.032,4.802%203.032,7.678c0,5.684%20-4.303,9.181%20-10.4,10.4c1.628,1.43%202.6,3.513%202.6,5.85v8.557c-0.576,0.181%20-1.162,0.338%20-1.755,0.479c11.443,-2.726%2019.955,-13.009%2019.955,-25.286c0,-14.359%20-11.641,-26%20-26,-26zM33.813,57.93c-0.599,0.042%20-1.203,0.07%20-1.813,0.07c0.61,0%201.213,-0.029%201.813,-0.07zM37.786,57.346c-1.164,0.265%20-2.357,0.451%20-3.575,0.554c1.218,-0.103%202.411,-0.29%203.575,-0.554zM32,58c-0.61,0%20-1.214,-0.028%20-1.813,-0.07c0.6,0.041%201.203,0.07%201.813,0.07zM29.788,57.9c-1.217,-0.103%20-2.411,-0.289%20-3.574,-0.554c1.164,0.264%202.357,0.451%203.574,0.554z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",l4="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,256,256'%20width='64px'%20height='64px'%3e%3cg%20fill='%23ffffff'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(4,4)'%3e%3cpath%20d='M32,6c-14.359,0%20-26,11.641%20-26,26c0,12.277%208.512,22.56%2019.955,25.286c-0.592,-0.141%20-1.179,-0.299%20-1.755,-0.479v-5.957c0,0%20-0.975,0.325%20-2.275,0.325c-3.637,0%20-5.148,-3.245%20-5.525,-4.875c-0.229,-0.993%20-0.827,-1.934%20-1.469,-2.509c-0.767,-0.684%20-1.126,-0.686%20-1.131,-0.92c-0.01,-0.491%200.658,-0.471%200.975,-0.471c1.625,0%202.857,1.729%203.429,2.623c1.417,2.207%202.938,2.577%203.721,2.577c0.975,0%201.817,-0.146%202.397,-0.426c0.268,-1.888%201.108,-3.57%202.478,-4.774c-6.097,-1.219%20-10.4,-4.716%20-10.4,-10.4c0,-2.928%201.175,-5.619%203.133,-7.792c-0.2,-0.567%20-0.533,-1.714%20-0.533,-3.583c0,-1.235%200.086,-2.751%200.65,-4.225c0,0%203.708,0.026%207.205,3.338c1.614,-0.47%203.341,-0.738%205.145,-0.738c1.804,0%203.531,0.268%205.145,0.738c3.497,-3.312%207.205,-3.338%207.205,-3.338c0.567,1.474%200.65,2.99%200.65,4.225c0,2.015%20-0.268,3.19%20-0.432,3.697c1.898,2.153%203.032,4.802%203.032,7.678c0,5.684%20-4.303,9.181%20-10.4,10.4c1.628,1.43%202.6,3.513%202.6,5.85v8.557c-0.576,0.181%20-1.162,0.338%20-1.755,0.479c11.443,-2.726%2019.955,-13.009%2019.955,-25.286c0,-14.359%20-11.641,-26%20-26,-26zM33.813,57.93c-0.599,0.042%20-1.203,0.07%20-1.813,0.07c0.61,0%201.213,-0.029%201.813,-0.07zM37.786,57.346c-1.164,0.265%20-2.357,0.451%20-3.575,0.554c1.218,-0.103%202.411,-0.29%203.575,-0.554zM32,58c-0.61,0%20-1.214,-0.028%20-1.813,-0.07c0.6,0.041%201.203,0.07%201.813,0.07zM29.788,57.9c-1.217,-0.103%20-2.411,-0.289%20-3.574,-0.554c1.164,0.264%202.357,0.451%203.574,0.554z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",c4="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,256,256'%20width='50px'%20height='50px'%3e%3cg%20fill='%23222222'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.12,5.12)'%3e%3cpath%20d='M41,4h-32c-2.76,0%20-5,2.24%20-5,5v32c0,2.76%202.24,5%205,5h32c2.76,0%205,-2.24%205,-5v-32c0,-2.76%20-2.24,-5%20-5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4%201.2,-2.47%203,-2.47c1.8,0%202.93,1.07%203,2.47c0,1.4%20-1.12,2.53%20-3,2.53c-1.8,0%20-3,-1.13%20-3,-2.53zM39,39h-6c0,0%200,-9.26%200,-10c0,-2%20-1,-4%20-3.5,-4.04h-0.08c-2.42,0%20-3.42,2.06%20-3.42,4.04c0,0.91%200,10%200,10h-6v-19h6v2.56c0,0%201.93,-2.56%205.81,-2.56c3.97,0%207.19,2.73%207.19,8.26z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",u4="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,256,256'%20width='50px'%20height='50px'%3e%3cg%20fill='%23ffffff'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.12,5.12)'%3e%3cpath%20d='M41,4h-32c-2.76,0%20-5,2.24%20-5,5v32c0,2.76%202.24,5%205,5h32c2.76,0%205,-2.24%205,-5v-32c0,-2.76%20-2.24,-5%20-5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4%201.2,-2.47%203,-2.47c1.8,0%202.93,1.07%203,2.47c0,1.4%20-1.12,2.53%20-3,2.53c-1.8,0%20-3,-1.13%20-3,-2.53zM39,39h-6c0,0%200,-9.26%200,-10c0,-2%20-1,-4%20-3.5,-4.04h-0.08c-2.42,0%20-3.42,2.06%20-3.42,4.04c0,0.91%200,10%200,10h-6v-19h6v2.56c0,0%201.93,-2.56%205.81,-2.56c3.97,0%207.19,2.73%207.19,8.26z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",h4="/assets/cv-ByL4WuGn.pdf";function d4(){const{theme:t}=Ip(),[e,n]=q.useState({name:"Yuan Pangan",title:"Computer Science Student & Full-Stack Developer",description:"Passionate software engineer specializing in full-stack development, machine learning, and cloud technologies. Currently pursuing Computer Science at De La Salle University - Manila, building innovative solutions from VR experiences to telemedicine platforms.",social:{instagram:"https://www.instagram.com/yuanpngn?igsh=bXBxbXhqbTJ2Mms5&utm_source=qr",github:"https://github.com/yuanpngn",linkedin:"https://www.linkedin.com/in/yuan-pangan-043245235"}});q.useEffect(()=>{r()},[]);const r=async()=>{var l,c,u,f,m,g;try{const I=Tt(xe,"portfolio","main"),R=await rw(I);if(R.exists()){const P=R.data();n({name:((l=P.hero)==null?void 0:l.name)||e.name,title:((c=P.hero)==null?void 0:c.title)||e.title,description:((u=P.hero)==null?void 0:u.description)||e.description,social:{instagram:((f=P.social)==null?void 0:f.instagram)||e.social.instagram,github:((m=P.social)==null?void 0:m.github)||e.social.github,linkedin:((g=P.social)==null?void 0:g.linkedin)||e.social.linkedin}})}}catch(I){console.error("Error loading hero data:",I)}},i=t==="light"?s4:o4,s=t==="light"?a4:l4,o=t==="light"?c4:u4;return p.jsxs("section",{id:"hero",className:qr.container,children:[p.jsx("div",{className:qr.colorModeContainer,children:p.jsx("img",{src:i4,className:qr.hero,alt:"Profile picture of Yuan Pangan"})}),p.jsxs("div",{className:qr.content,children:[p.jsxs("div",{className:qr.info,children:[p.jsxs("h1",{children:[e.name.split(" ")[0],p.jsx("br",{}),e.name.split(" ")[1]||""]}),p.jsx("h2",{children:e.title}),p.jsxs("span",{children:[p.jsx("a",{href:e.social.instagram,target:"_blank",rel:"noopener noreferrer",children:p.jsx("img",{src:i,alt:"Instagram"})}),p.jsx("a",{href:e.social.github,target:"_blank",rel:"noopener noreferrer",children:p.jsx("img",{src:s,alt:"GitHub"})}),p.jsx("a",{href:e.social.linkedin,target:"_blank",rel:"noopener noreferrer",children:p.jsx("img",{src:o,alt:"LinkedIn"})})]})]}),p.jsxs("div",{className:qr.descriptionSection,children:[p.jsx("p",{className:qr.description,children:e.description}),p.jsx("a",{href:h4,download:!0,children:p.jsx("button",{className:"hover",children:"Download Resume"})})]})]})]})}const f4="_container_1a5ve_1",p4="_fadeInUp_1a5ve_1",m4="_header_1a5ve_9",g4="_addButton_1a5ve_18",_4="_projectWrapper_1a5ve_34",y4="_adminControls_1a5ve_48",v4="_pinnedButton_1a5ve_71",w4="_editOverlay_1a5ve_81",E4="_editForm_1a5ve_97",I4="_formButtons_1a5ve_140",T4="_projectsGrid_1a5ve_175",fn={container:f4,fadeInUp:p4,header:m4,addButton:g4,projectWrapper:_4,adminControls:y4,pinnedButton:v4,editOverlay:w4,editForm:E4,formButtons:I4,projectsGrid:T4},S4="_card_1wqoy_1",A4="_cardHeader_1wqoy_46",C4="_categoryIcon_1wqoy_52",k4="_category_1wqoy_52",P4="_title_1wqoy_65",R4="_description_1wqoy_74",x4="_techStack_1wqoy_82",N4="_techBadge_1wqoy_89",D4="_cardFooter_1wqoy_99",V4="_status_1wqoy_108",O4="_viewMore_1wqoy_114",Lt={card:S4,cardHeader:A4,categoryIcon:C4,category:k4,title:P4,description:R4,techStack:x4,techBadge:N4,cardFooter:D4,status:V4,viewMore:O4};function L4({project:t,onClick:e}){var r,i;const n=s=>({"VR Development":"🥽","Full-Stack Web":"🌐","Machine Learning":"🤖",Robotics:"🚁","Cloud Computing":"☁️","Mixed Reality":"🛸"})[s]||"💻";return p.jsxs("div",{className:Lt.card,onClick:e,children:[p.jsxs("div",{className:Lt.cardHeader,children:[p.jsx("span",{className:Lt.categoryIcon,children:n(t.category)}),p.jsx("span",{className:Lt.category,children:t.category})]}),p.jsx("h3",{className:Lt.title,children:t.title}),p.jsx("p",{className:Lt.description,children:t.shortDesc}),p.jsxs("div",{className:Lt.techStack,children:[(r=t.technologies)==null?void 0:r.slice(0,3).map((s,o)=>p.jsx("span",{className:Lt.techBadge,children:s},o)),((i=t.technologies)==null?void 0:i.length)>3&&p.jsxs("span",{className:Lt.techBadge,children:["+",t.technologies.length-3]})]}),p.jsxs("div",{className:Lt.cardFooter,children:[p.jsx("span",{className:Lt.status,children:t.status}),p.jsx("span",{className:Lt.viewMore,children:"View Details →"})]})]})}const M4="_modalBackdrop_11p8f_1",b4="_fadeIn_11p8f_1",j4="_modalContent_11p8f_19",F4="_slideUp_11p8f_1",U4="_closeButton_11p8f_35",B4="_modalHeader_11p8f_59",z4="_categoryIcon_11p8f_67",$4="_headerInfo_11p8f_72",H4="_category_11p8f_67",q4="_title_11p8f_87",W4="_modalBody_11p8f_96",G4="_section_11p8f_103",K4="_fullDescription_11p8f_111",Q4="_highlightsList_11p8f_118",Y4="_checkmark_11p8f_140",X4="_techGrid_11p8f_147",J4="_techBadge_11p8f_153",Z4="_statusRow_11p8f_170",eD="_statusItem_11p8f_176",tD="_label_11p8f_186",nD="_value_11p8f_194",rD="_modalFooter_11p8f_200",iD="_githubButton_11p8f_208",sD="_paperButton_11p8f_209",ce={modalBackdrop:M4,fadeIn:b4,modalContent:j4,slideUp:F4,closeButton:U4,modalHeader:B4,categoryIcon:z4,headerInfo:$4,category:H4,title:q4,modalBody:W4,section:G4,fullDescription:K4,highlightsList:Q4,checkmark:Y4,techGrid:X4,techBadge:J4,statusRow:Z4,statusItem:eD,label:tD,value:nD,modalFooter:rD,githubButton:iD,paperButton:sD};function oD({project:t,onClose:e}){q.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}),[]);const n=i=>{i.target===i.currentTarget&&e()},r=i=>({"VR Development":"🥽","Full-Stack Web":"🌐","Machine Learning":"🤖",Robotics:"🚁","Cloud Computing":"☁️","Mixed Reality":"🥽"})[i]||"💻";return p.jsx("div",{className:ce.modalBackdrop,onClick:n,children:p.jsxs("div",{className:ce.modalContent,children:[p.jsx("button",{className:ce.closeButton,onClick:e,children:"✕"}),p.jsxs("div",{className:ce.modalHeader,children:[p.jsx("span",{className:ce.categoryIcon,children:r(t.category)}),p.jsxs("div",{className:ce.headerInfo,children:[p.jsx("span",{className:ce.category,children:t.category}),p.jsx("h2",{className:ce.title,children:t.title})]})]}),p.jsxs("div",{className:ce.modalBody,children:[p.jsxs("div",{className:ce.section,children:[p.jsx("h3",{children:"Overview"}),p.jsx("p",{className:ce.fullDescription,children:t.fullDesc})]}),p.jsxs("div",{className:ce.section,children:[p.jsx("h3",{children:"Key Highlights"}),p.jsx("ul",{className:ce.highlightsList,children:t.highlights.map((i,s)=>p.jsxs("li",{children:[p.jsx("span",{className:ce.checkmark,children:"✓"}),i]},s))})]}),p.jsxs("div",{className:ce.section,children:[p.jsx("h3",{children:"Technologies Used"}),p.jsx("div",{className:ce.techGrid,children:t.technologies.map((i,s)=>p.jsx("span",{className:ce.techBadge,children:i},s))})]}),p.jsx("div",{className:ce.section,children:p.jsxs("div",{className:ce.statusRow,children:[p.jsxs("div",{className:ce.statusItem,children:[p.jsx("span",{className:ce.label,children:"Status"}),p.jsx("span",{className:ce.value,children:t.status})]}),p.jsxs("div",{className:ce.statusItem,children:[p.jsx("span",{className:ce.label,children:"Category"}),p.jsx("span",{className:ce.value,children:t.category})]})]})})]}),p.jsxs("div",{className:ce.modalFooter,children:[p.jsxs("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:ce.githubButton,children:[p.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:p.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"View on GitHub"]}),t.conferencePaper&&p.jsxs("a",{href:t.conferencePaper,target:"_blank",rel:"noopener noreferrer",className:ce.paperButton,children:[p.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[p.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),p.jsx("polyline",{points:"14 2 14 8 20 8"}),p.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),p.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),p.jsx("polyline",{points:"10 9 9 9 8 9"})]}),"Conference Paper"]})]})]})})}function aD(){const{isAdmin:t}=pa(),[e,n]=q.useState(null),[r,i]=q.useState([]),[s,o]=q.useState(!1),[l,c]=q.useState(null);q.useEffect(()=>{u()},[]);const u=async()=>{try{const V=(await Gc(Nr(xe,"projects"))).docs.map(E=>({...E.data(),firestoreId:E.id}));V.sort((E,v)=>E.isPinned&&!v.isPinned?-1:!E.isPinned&&v.isPinned?1:0),i(V)}catch(P){console.error("Error loading projects:",P),i([])}},f=async P=>{try{await ms(Tt(xe,"projects",P.firestoreId),{isPinned:!P.isPinned}),await u()}catch(V){console.error("Error toggling pin:",V),alert("Failed to toggle pin")}},m=()=>{c({title:"",shortDesc:"",fullDesc:"",technologies:[],github:"",highlights:[],category:"",status:"",conferencePaper:"",isPinned:!1}),o(!0)},g=P=>{c(P),o(!0)},I=async P=>{try{P.firestoreId?await ms(Tt(xe,"projects",P.firestoreId),P):await Qc(Nr(xe,"projects"),P),await u(),o(!1),c(null)}catch(V){console.error("Error saving project:",V),alert("Failed to save project")}},R=async P=>{if(window.confirm("Are you sure you want to delete this project?"))try{await Kc(Tt(xe,"projects",P)),await u()}catch(V){console.error("Error deleting project:",V),alert("Failed to delete project")}};return p.jsxs("section",{id:"projects",className:fn.container,children:[p.jsxs("div",{className:fn.header,children:[p.jsx("h1",{className:"sectionTitle",children:"Projects"}),t&&p.jsx("button",{className:fn.addButton,onClick:m,children:"+ Add Project"})]}),p.jsx("div",{className:fn.projectsGrid,children:r.map(P=>p.jsxs("div",{className:fn.projectWrapper,"data-pinned":P.isPinned||!1,children:[p.jsx(L4,{project:P,onClick:()=>n(P)}),t&&p.jsxs("div",{className:fn.adminControls,children:[p.jsx("button",{onClick:()=>g(P),children:"✏️ Edit"}),P.firestoreId&&p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:()=>f(P),className:P.isPinned?fn.pinnedButton:"",title:P.isPinned?"Unpin project":"Pin project",children:P.isPinned?"⭐ Pinned":"☆ Pin"}),p.jsx("button",{onClick:()=>R(P.firestoreId),children:"🗑️ Delete"})]})]})]},P.id||P.firestoreId))}),e&&p.jsx(oD,{project:e,onClose:()=>n(null)}),s&&p.jsx(lD,{project:l,onSave:I,onCancel:()=>{o(!1),c(null)}})]})}function lD({project:t,onSave:e,onCancel:n}){var c,u;const[r,i]=q.useState({...t,technologies:t.technologies||[],highlights:t.highlights||[]}),s=(f,m)=>{i(g=>({...g,[f]:m}))},o=(f,m)=>{const g=m.split(`
`).filter(I=>I.trim());i(I=>({...I,[f]:g}))},l=f=>{f.preventDefault(),e(r)};return p.jsx("div",{className:fn.editOverlay,onClick:n,children:p.jsxs("div",{className:fn.editForm,onClick:f=>f.stopPropagation(),children:[p.jsx("h3",{children:t.firestoreId?"Edit Project":"Add New Project"}),p.jsxs("form",{onSubmit:l,children:[p.jsxs("label",{children:["Title:",p.jsx("input",{type:"text",value:r.title,onChange:f=>s("title",f.target.value),required:!0})]}),p.jsxs("label",{children:["Short Description:",p.jsx("input",{type:"text",value:r.shortDesc,onChange:f=>s("shortDesc",f.target.value),required:!0})]}),p.jsxs("label",{children:["Full Description:",p.jsx("textarea",{value:r.fullDesc,onChange:f=>s("fullDesc",f.target.value),rows:4,required:!0})]}),p.jsxs("label",{children:["Technologies (one per line):",p.jsx("textarea",{value:((c=r.technologies)==null?void 0:c.join(`
`))||"",onChange:f=>o("technologies",f.target.value),rows:3})]}),p.jsxs("label",{children:["GitHub URL:",p.jsx("input",{type:"url",value:r.github,onChange:f=>s("github",f.target.value)})]}),p.jsxs("label",{children:["Highlights (one per line):",p.jsx("textarea",{value:((u=r.highlights)==null?void 0:u.join(`
`))||"",onChange:f=>o("highlights",f.target.value),rows:4})]}),p.jsxs("label",{children:["Category:",p.jsx("input",{type:"text",value:r.category,onChange:f=>s("category",f.target.value)})]}),p.jsxs("label",{children:["Status:",p.jsx("input",{type:"text",value:r.status,onChange:f=>s("status",f.target.value)})]}),p.jsxs("div",{className:fn.formButtons,children:[p.jsx("button",{type:"submit",children:"Save Project"}),p.jsx("button",{type:"button",onClick:n,children:"Cancel"})]})]})]})})}const cD="_container_1k16b_1",uD="_fadeInUp_1k16b_1",hD="_header_1k16b_9",dD="_addButton_1k16b_18",fD="_categoryHeader_1k16b_34",pD="_categoryTitle_1k16b_42",mD="_adminControls_1k16b_51",gD="_editOverlay_1k16b_71",_D="_editForm_1k16b_87",yD="_formButtons_1k16b_130",vD="_skillList_1k16b_165",un={container:cD,fadeInUp:uD,header:hD,addButton:dD,categoryHeader:fD,categoryTitle:pD,adminControls:mD,editOverlay:gD,editForm:_D,formButtons:yD,skillList:vD},wD="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='300'%20zoomAndPan='magnify'%20viewBox='0%200%20224.87999%20225'%20height='300'%20preserveAspectRatio='xMidYMid%20meet'%20version='1.0'%3e%3cdefs%3e%3cclipPath%20id='1908cb7580'%3e%3cpath%20d='M%209%2015%20L%20209%2015%20L%20209%20224.9375%20L%209%20224.9375%20Z%20M%209%2015%20'%20clip-rule='nonzero'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%231908cb7580)'%3e%3cpath%20fill='%23ffffff'%20d='M%2038.371094%20109.824219%20C%2057.113281%20128.5625%2070.5%20147.304688%2083.882812%20171.398438%20C%20146.351562%2053.601562%20222.203125%200.0585938%20206.140625%2018.800781%20C%20155.273438%2083.945312%20120.472656%20149.980469%2086.5625%20224.941406%20C%2066.929688%20189.246094%2041.941406%20141.949219%2011.601562%20132.132812%20C%202.675781%20123.207031%2024.09375%20101.792969%2038.371094%20109.824219%20Z%20M%2038.371094%20109.824219%20'%20fill-opacity='1'%20fill-rule='nonzero'/%3e%3c/g%3e%3c/svg%3e",ED="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='300'%20zoomAndPan='magnify'%20viewBox='0%200%20224.87999%20225'%20height='300'%20preserveAspectRatio='xMidYMid%20meet'%20version='1.0'%3e%3cdefs%3e%3cclipPath%20id='add514309a'%3e%3cpath%20d='M%209%2015%20L%20209%2015%20L%20209%20224.9375%20L%209%20224.9375%20Z%20M%209%2015%20'%20clip-rule='nonzero'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23add514309a)'%3e%3cpath%20fill='%23222222'%20d='M%2038.371094%20109.824219%20C%2057.113281%20128.5625%2070.5%20147.304688%2083.882812%20171.398438%20C%20146.351562%2053.601562%20222.203125%200.0585938%20206.140625%2018.800781%20C%20155.273438%2083.945312%20120.472656%20149.980469%2086.5625%20224.941406%20C%2066.929688%20189.246094%2041.941406%20141.949219%2011.601562%20132.132812%20C%202.675781%20123.207031%2024.09375%20101.792969%2038.371094%20109.824219%20Z%20M%2038.371094%20109.824219%20'%20fill-opacity='1'%20fill-rule='nonzero'/%3e%3c/g%3e%3c/svg%3e",ID="_skillItem_y8e45_1",TD={skillItem:ID};function SD({src:t,skill:e}){return p.jsxs("span",{className:TD.skillItem,children:[p.jsx("img",{src:t,alt:"Checkmark icon"}),p.jsx("p",{children:e})]})}function AD(){const{theme:t}=Ip(),{isAdmin:e}=pa(),n=t==="light"?ED:wD,[r,i]=q.useState({}),[s,o]=q.useState(!1),[l,c]=q.useState(""),[u,f]=q.useState("");q.useEffect(()=>{m()},[]);const m=async()=>{try{const V=await Gc(Nr(xe,"skills")),E={};V.docs.forEach(v=>{E[v.id]=v.data().skills||[]}),i(E)}catch(V){console.error("Error loading skills:",V)}},g=V=>{c(V),f(r[V].join(`
`)),o(!0)},I=()=>{c(""),f(""),o(!0)},R=async V=>{V.preventDefault();const E=u.split(`
`).filter(S=>S.trim()),v=l||V.target.categoryName.value;try{await ms(Tt(xe,"skills",v),{skills:E}),await m(),o(!1)}catch{try{await Qc(Nr(xe,"skills"),{skills:E}),await m(),o(!1)}catch(D){console.error("Error saving category:",D)}}},P=async V=>{if(window.confirm(`Delete ${V} category?`))try{await Kc(Tt(xe,"skills",V)),await m()}catch(E){console.error("Error deleting category:",E)}};return p.jsxs("section",{id:"skills",className:un.container,children:[p.jsxs("div",{className:un.header,children:[p.jsx("h1",{className:"sectionTitle",children:"Technical Skills"}),e&&p.jsx("button",{className:un.addButton,onClick:I,children:"+ Add Category"})]}),Object.entries(r).map(([V,E],v)=>p.jsxs("div",{children:[p.jsxs("div",{className:un.categoryHeader,children:[p.jsx("h3",{className:un.categoryTitle,children:V}),e&&p.jsxs("div",{className:un.adminControls,children:[p.jsx("button",{onClick:()=>g(V),children:"✏️"}),p.jsx("button",{onClick:()=>P(V),children:"🗑️"})]})]}),p.jsx("div",{className:un.skillList,children:E.map(S=>p.jsx(SD,{src:n,skill:S},S))}),v<Object.keys(r).length-1&&p.jsx("hr",{})]},V)),s&&p.jsx("div",{className:un.editOverlay,onClick:()=>o(!1),children:p.jsxs("div",{className:un.editForm,onClick:V=>V.stopPropagation(),children:[p.jsx("h3",{children:l?"Edit Category":"Add New Category"}),p.jsxs("form",{onSubmit:R,children:[!l&&p.jsxs("label",{children:["Category Name:",p.jsx("input",{type:"text",name:"categoryName",required:!0})]}),p.jsxs("label",{children:["Skills (one per line):",p.jsx("textarea",{value:u,onChange:V=>f(V.target.value),rows:8,required:!0})]}),p.jsxs("div",{className:un.formButtons,children:[p.jsx("button",{type:"submit",children:"Save"}),p.jsx("button",{type:"button",onClick:()=>o(!1),children:"Cancel"})]})]})]})})]})}const CD="_container_1xvj7_1",kD="_fadeInUp_1xvj7_1",PD="_header_1xvj7_9",RD="_addButton_1xvj7_18",xD="_adminControls_1xvj7_34",ND="_editOverlay_1xvj7_56",DD="_editForm_1xvj7_72",VD="_formButtons_1xvj7_117",OD="_timeline_1xvj7_152",LD="_timelineItem_1xvj7_173",MD="_slideInLeft_1xvj7_1",bD="_iconContainer_1xvj7_185",jD="_icon_1xvj7_185",FD="_content_1xvj7_209",UD="_title_1xvj7_239",BD="_company_1xvj7_247",zD="_meta_1xvj7_254",$D="_period_1xvj7_262",HD="_location_1xvj7_273",qD="_description_1xvj7_279",Fe={container:CD,fadeInUp:kD,header:PD,addButton:RD,adminControls:xD,editOverlay:ND,editForm:DD,formButtons:VD,timeline:OD,timelineItem:LD,slideInLeft:MD,iconContainer:bD,icon:jD,content:FD,title:UD,company:BD,meta:zD,period:$D,location:HD,description:qD};function WD(){const{isAdmin:t}=pa(),[e,n]=q.useState([]),[r,i]=q.useState(!1),[s,o]=q.useState(null);q.useEffect(()=>{c()},[]);const l=I=>{var S;const R=I.match(/(\w+\s+)?(\d{4})/);if(!R)return 0;const P=parseInt(R[2]),V=(S=R[1])==null?void 0:S.trim(),v=V&&{January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12}[V]||1;return P*100+v},c=async()=>{try{const R=(await Gc(Nr(xe,"experiences"))).docs.map(P=>({...P.data(),firestoreId:P.id}));R.sort((P,V)=>l(V.period)-l(P.period)),n(R)}catch(I){console.error("Error loading experiences:",I),n([])}},u=()=>{o({title:"",company:"",period:"",location:"",description:[],icon:"💼",type:"work"}),i(!0)},f=I=>{o(I),i(!0)},m=async I=>{try{I.firestoreId?await ms(Tt(xe,"experiences",I.firestoreId),I):await Qc(Nr(xe,"experiences"),I),await c(),i(!1),o(null)}catch(R){console.error("Error saving experience:",R),alert("Failed to save experience")}},g=async I=>{if(window.confirm("Delete this experience?"))try{await Kc(Tt(xe,"experiences",I)),await c()}catch(R){console.error("Error deleting experience:",R)}};return p.jsxs("section",{id:"experience",className:Fe.container,children:[p.jsxs("div",{className:Fe.header,children:[p.jsx("h1",{className:"sectionTitle",children:"Experience"}),t&&p.jsx("button",{className:Fe.addButton,onClick:u,children:"+ Add Experience"})]}),p.jsx("div",{className:Fe.timeline,children:e.map((I,R)=>{var P;return p.jsxs("div",{className:Fe.timelineItem,children:[p.jsx("div",{className:Fe.iconContainer,children:p.jsx("span",{className:Fe.icon,children:I.icon})}),p.jsxs("div",{className:Fe.content,children:[p.jsxs("div",{className:Fe.header,children:[p.jsxs("div",{children:[p.jsx("h3",{className:Fe.title,children:I.title}),p.jsx("p",{className:Fe.company,children:I.company})]}),p.jsxs("div",{className:Fe.meta,children:[p.jsx("span",{className:Fe.period,children:I.period}),p.jsx("span",{className:Fe.location,children:I.location})]})]}),p.jsx("ul",{className:Fe.description,children:(P=I.description)==null?void 0:P.map((V,E)=>p.jsx("li",{children:V},E))}),t&&p.jsxs("div",{className:Fe.adminControls,children:[p.jsx("button",{onClick:()=>f(I),children:"✏️ Edit"}),I.firestoreId&&p.jsx("button",{onClick:()=>g(I.firestoreId),children:"🗑️ Delete"})]})]})]},I.id||I.firestoreId)})}),r&&p.jsx(GD,{experience:s,onSave:m,onCancel:()=>{i(!1),o(null)}})]})}function GD({experience:t,onSave:e,onCancel:n}){var c;const[r,i]=q.useState({...t,description:t.description||[]}),s=(u,f)=>{i(m=>({...m,[u]:f}))},o=u=>{const f=u.split(`
`).filter(m=>m.trim());i(m=>({...m,description:f}))};Array.isArray(r.description)||(r.description=[]);const l=u=>{u.preventDefault(),e(r)};return p.jsx("div",{className:Fe.editOverlay,onClick:n,children:p.jsxs("div",{className:Fe.editForm,onClick:u=>u.stopPropagation(),children:[p.jsx("h3",{children:t.firestoreId?"Edit Experience":"Add New Experience"}),p.jsxs("form",{onSubmit:l,children:[p.jsxs("label",{children:["Title:",p.jsx("input",{type:"text",value:r.title,onChange:u=>s("title",u.target.value),required:!0})]}),p.jsxs("label",{children:["Company/Organization:",p.jsx("input",{type:"text",value:r.company,onChange:u=>s("company",u.target.value),required:!0})]}),p.jsxs("label",{children:["Period:",p.jsx("input",{type:"text",value:r.period,onChange:u=>s("period",u.target.value),placeholder:"e.g., January 2024 – Present",required:!0})]}),p.jsxs("label",{children:["Location:",p.jsx("input",{type:"text",value:r.location,onChange:u=>s("location",u.target.value),required:!0})]}),p.jsxs("label",{children:["Icon (emoji):",p.jsx("input",{type:"text",value:r.icon,onChange:u=>s("icon",u.target.value),placeholder:"💼",required:!0})]}),p.jsxs("label",{children:["Type:",p.jsxs("select",{value:r.type,onChange:u=>s("type",u.target.value),children:[p.jsx("option",{value:"work",children:"Work"}),p.jsx("option",{value:"leadership",children:"Leadership"})]})]}),p.jsxs("label",{children:["Description (one point per line):",p.jsx("textarea",{value:((c=r.description)==null?void 0:c.join(`
`))||"",onChange:u=>o(u.target.value),rows:6,required:!0})]}),p.jsxs("div",{className:Fe.formButtons,children:[p.jsx("button",{type:"submit",children:"Save Experience"}),p.jsx("button",{type:"button",onClick:n,children:"Cancel"})]})]})]})})}const KD="_container_5f5u5_1",QD="_fadeInUp_5f5u5_1",YD="_collapsed_5f5u5_9",XD="_expanded_5f5u5_14",JD="_toggleButton_5f5u5_18",ZD="_toggleIcon_5f5u5_46",e9="_toggleText_5f5u5_52",t9="_toggleEmoji_5f5u5_59",n9="_content_5f5u5_64",r9="_expandContent_5f5u5_1",i9="_header_5f5u5_79",s9="_subtitle_5f5u5_84",o9="_adminControls_5f5u5_90",a9="_addButton_5f5u5_98",l9="_logoutButton_5f5u5_99",c9="_categoryFilter_5f5u5_133",u9="_categoryButton_5f5u5_141",h9="_active_5f5u5_164",d9="_categoryIcon_5f5u5_170",f9="_entriesGrid_5f5u5_174",p9="_emptyState_5f5u5_181",m9="_emptyIcon_5f5u5_188",je={container:KD,fadeInUp:QD,collapsed:YD,expanded:XD,toggleButton:JD,toggleIcon:ZD,toggleText:e9,toggleEmoji:t9,content:n9,expandContent:r9,header:i9,subtitle:s9,adminControls:o9,addButton:a9,logoutButton:l9,categoryFilter:c9,categoryButton:u9,active:h9,categoryIcon:d9,entriesGrid:f9,emptyState:p9,emptyIcon:m9},g9="_formOverlay_1ovc7_1",_9="_fadeIn_1ovc7_1",y9="_formContainer_1ovc7_18",v9="_slideUp_1ovc7_1",w9="_formHeader_1ovc7_31",E9="_closeButton_1ovc7_45",I9="_form_1ovc7_1",T9="_formGroup_1ovc7_72",S9="_input_1ovc7_86",A9="_textarea_1ovc7_87",C9="_select_1ovc7_88",k9="_buttonGroup_1ovc7_129",P9="_submitButton_1ovc7_135",R9="_cancelButton_1ovc7_136",x9="_fileInput_1ovc7_254",N9="_fileInputLabel_1ovc7_258",D9="_fileInfo_1ovc7_277",V9="_imagePreviewGrid_1ovc7_283",O9="_imagePreview_1ovc7_283",L9="_removeImageButton_1ovc7_305",me={formOverlay:g9,fadeIn:_9,formContainer:y9,slideUp:v9,formHeader:w9,closeButton:E9,form:I9,formGroup:T9,input:S9,textarea:A9,select:C9,buttonGroup:k9,submitButton:P9,cancelButton:R9,fileInput:x9,fileInputLabel:N9,fileInfo:D9,imagePreviewGrid:V9,imagePreview:O9,removeImageButton:L9};function M9({entry:t,categories:e,onSubmit:n,onCancel:r}){var v,S;const[i,s]=q.useState({title:(t==null?void 0:t.title)||"",content:(t==null?void 0:t.content)||"",category:(t==null?void 0:t.category)||((v=e[0])==null?void 0:v.id)||"",source:(t==null?void 0:t.source)||"",tags:((S=t==null?void 0:t.tags)==null?void 0:S.join(", "))||"",images:(t==null?void 0:t.images)||[]}),[o,l]=q.useState(!1),[c,u]=q.useState([]),f="portfolio_uploads",m="dxcmdqs3j",g=D=>{const b=Array.from(D.target.files);u(b)},I=async D=>{const b=new FormData;b.append("file",D),b.append("upload_preset",f);try{const w=await(await fetch(`https://api.cloudinary.com/v1_1/${m}/image/upload`,{method:"POST",body:b})).json();return{url:w.secure_url,publicId:w.public_id}}catch(j){throw console.error("Error uploading to Cloudinary:",j),j}},R=async()=>{if(c.length===0)return[];l(!0);const D=c.map(b=>I(b));try{const b=await Promise.all(D);return l(!1),b}catch(b){return console.error("Error uploading images:",b),l(!1),alert("Failed to upload images. Please try again."),[]}},P=D=>{s(b=>({...b,images:b.images.filter((j,w)=>w!==D)}))},V=async D=>{D.preventDefault();const b=await R(),j={...i,images:[...i.images,...b],tags:i.tags.split(",").map(w=>w.trim()).filter(w=>w.length>0)};n(t?{...t,...j}:j)},E=D=>{const{name:b,value:j}=D.target;s(w=>({...w,[b]:j}))};return p.jsx("div",{className:me.formOverlay,onClick:r,children:p.jsxs("div",{className:me.formContainer,onClick:D=>D.stopPropagation(),children:[p.jsxs("div",{className:me.formHeader,children:[p.jsx("h3",{children:t?"Edit Entry":"New Entry"}),p.jsx("button",{className:me.closeButton,onClick:r,children:"✕"})]}),p.jsxs("form",{onSubmit:V,className:me.form,children:[p.jsxs("div",{className:me.formGroup,children:[p.jsx("label",{children:"Category"}),p.jsx("select",{name:"category",value:i.category,onChange:E,required:!0,className:me.select,children:e.map(D=>p.jsxs("option",{value:D.id,children:[D.icon," ",D.name]},D.id))})]}),p.jsxs("div",{className:me.formGroup,children:[p.jsx("label",{children:"Title"}),p.jsx("input",{type:"text",name:"title",value:i.title,onChange:E,placeholder:"Entry title...",required:!0,className:me.input})]}),p.jsxs("div",{className:me.formGroup,children:[p.jsx("label",{children:"Content"}),p.jsx("textarea",{name:"content",value:i.content,onChange:E,placeholder:"Write your entry here...",required:!0,rows:8,className:me.textarea})]}),p.jsxs("div",{className:me.formGroup,children:[p.jsx("label",{children:"Source (Optional)"}),p.jsx("input",{type:"text",name:"source",value:i.source,onChange:E,placeholder:"e.g., Book title, Article URL, Movie name...",className:me.input})]}),p.jsxs("div",{className:me.formGroup,children:[p.jsx("label",{children:"Tags (Optional)"}),p.jsx("input",{type:"text",name:"tags",value:i.tags,onChange:E,placeholder:"Comma separated tags...",className:me.input})]}),p.jsxs("div",{className:me.formGroup,children:[p.jsx("label",{children:"Images (Optional)"}),i.images.length>0&&p.jsx("div",{className:me.imagePreviewGrid,children:i.images.map((D,b)=>p.jsxs("div",{className:me.imagePreview,children:[p.jsx("img",{src:D.url,alt:`Preview ${b+1}`}),p.jsx("button",{type:"button",className:me.removeImageButton,onClick:()=>P(b),children:"✕"})]},b))}),p.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:g,className:me.fileInput,id:"imageUpload"}),p.jsxs("label",{htmlFor:"imageUpload",className:me.fileInputLabel,children:["📷 ",c.length>0?`${c.length} file(s) selected`:"Choose images"]}),c.length>0&&p.jsx("p",{className:me.fileInfo,children:c.map(D=>D.name).join(", ")})]}),p.jsxs("div",{className:me.buttonGroup,children:[p.jsx("button",{type:"submit",className:me.submitButton,disabled:o,children:o?"Uploading...":t?"Update Entry":"Create Entry"}),p.jsx("button",{type:"button",onClick:r,className:me.cancelButton,disabled:o,children:"Cancel"})]})]})]})})}const b9="_card_1wu4r_1",j9="_fadeInUp_1wu4r_1",F9="_cardHeader_1wu4r_34",U9="_categoryBadge_1wu4r_41",B9="_categoryIcon_1wu4r_54",z9="_adminActions_1wu4r_58",$9="_pinButton_1wu4r_63",H9="_editButton_1wu4r_64",q9="_deleteButton_1wu4r_65",W9="_pinned_1wu4r_85",G9="_title_1wu4r_102",K9="_content_1wu4r_111",Q9="_source_1wu4r_120",Y9="_sourceLabel_1wu4r_130",X9="_tags_1wu4r_135",J9="_tag_1wu4r_135",Z9="_imagesPreview_1wu4r_151",e5="_imageCount_1wu4r_159",t5="_readMore_1wu4r_165",n5="_footer_1wu4r_172",r5="_date_1wu4r_183",i5="_updated_1wu4r_187",s5="_imagesGrid_1wu4r_240",o5="_imageWrapper_1wu4r_247",a5="_imageOverlay_1wu4r_275",l5="_imageModal_1wu4r_293",c5="_fadeIn_1wu4r_1",u5="_imageModalContent_1wu4r_310",h5="_closeModal_1wu4r_324",d5="_entryModal_1wu4r_367",f5="_entryModalContent_1wu4r_384",p5="_modalHeader_1wu4r_423",m5="_modalTitle_1wu4r_431",g5="_modalContent_1wu4r_439",_5="_modalSource_1wu4r_447",ee={card:b9,fadeInUp:j9,cardHeader:F9,categoryBadge:U9,categoryIcon:B9,adminActions:z9,pinButton:$9,editButton:H9,deleteButton:q9,pinned:W9,title:G9,content:K9,source:Q9,sourceLabel:Y9,tags:X9,tag:J9,imagesPreview:Z9,imageCount:e5,readMore:t5,footer:n5,date:r5,updated:i5,imagesGrid:s5,imageWrapper:o5,imageOverlay:a5,imageModal:l5,fadeIn:c5,imageModalContent:u5,closeModal:h5,entryModal:d5,entryModalContent:f5,modalHeader:p5,modalTitle:m5,modalContent:g5,modalSource:_5};function y5({entry:t,category:e,isAdmin:n,onEdit:r,onDelete:i,onTogglePin:s}){const[o,l]=q.useState(!1),[c,u]=q.useState(null),[f,m]=q.useState(!1),g=E=>new Date(E).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),I=(E,v)=>{v.stopPropagation(),u(E),l(!0)},R=()=>{l(!1),u(null)},P=(E,v=200)=>E.length<=v?E:E.slice(0,v)+"...",V=E=>{E.target.closest(`.${ee.adminActions}`)||m(!0)};return p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:ee.card,"data-pinned":t.isPinned||!1,onClick:V,style:{cursor:"pointer"},children:[p.jsxs("div",{className:ee.cardHeader,children:[p.jsxs("div",{className:ee.categoryBadge,children:[p.jsx("span",{className:ee.categoryIcon,children:e==null?void 0:e.icon}),p.jsx("span",{children:e==null?void 0:e.name})]}),n&&p.jsxs("div",{className:ee.adminActions,children:[p.jsx("button",{className:`${ee.pinButton} ${t.isPinned?ee.pinned:""}`,onClick:E=>{E.stopPropagation(),s()},title:t.isPinned?"Unpin entry":"Pin entry",children:t.isPinned?"📌":"📍"}),p.jsx("button",{className:ee.editButton,onClick:E=>{E.stopPropagation(),r()},title:"Edit entry",children:"✏️"}),p.jsx("button",{className:ee.deleteButton,onClick:E=>{E.stopPropagation(),i()},title:"Delete entry",children:"🗑️"})]})]}),p.jsx("h3",{className:ee.title,children:t.title}),p.jsx("div",{className:ee.content,children:P(t.content)}),t.images&&t.images.length>0&&p.jsx("div",{className:ee.imagesGrid,children:t.images.slice(0,2).map((E,v)=>p.jsxs("div",{className:ee.imageWrapper,onClick:S=>{S.stopPropagation(),I(E.url,S)},children:[p.jsx("img",{src:E.url,alt:`${t.title} - ${v+1}`}),v===1&&t.images.length>2&&p.jsxs("div",{className:ee.imageOverlay,children:["+",t.images.length-2," more"]})]},v))}),t.source&&p.jsxs("div",{className:ee.source,children:[p.jsx("span",{className:ee.sourceLabel,children:"Source:"})," ",t.source]}),p.jsxs("div",{className:ee.footer,children:[p.jsx("span",{className:ee.date,children:g(t.createdAt)}),t.updatedAt!==t.createdAt&&p.jsx("span",{className:ee.updated,children:"Updated"}),p.jsx("span",{className:ee.readMore,children:"Click to read more →"})]})]}),f&&p.jsx("div",{className:ee.entryModal,onClick:()=>m(!1),children:p.jsxs("div",{className:ee.entryModalContent,onClick:E=>E.stopPropagation(),children:[p.jsx("button",{className:ee.closeModal,onClick:()=>m(!1),children:"✕"}),p.jsxs("div",{className:ee.modalHeader,children:[p.jsxs("div",{className:ee.categoryBadge,children:[p.jsx("span",{className:ee.categoryIcon,children:e==null?void 0:e.icon}),p.jsx("span",{children:e==null?void 0:e.name})]}),p.jsx("span",{className:ee.date,children:g(t.createdAt)})]}),p.jsx("h2",{className:ee.modalTitle,children:t.title}),p.jsx("div",{className:ee.modalContent,children:t.content}),t.images&&t.images.length>0&&p.jsx("div",{className:ee.imagesGrid,children:t.images.map((E,v)=>p.jsx("div",{className:ee.imageWrapper,onClick:S=>I(E.url,S),children:p.jsx("img",{src:E.url,alt:`${t.title} - ${v+1}`})},v))}),t.source&&p.jsxs("div",{className:ee.modalSource,children:[p.jsx("span",{className:ee.sourceLabel,children:"Source:"})," ",t.source]}),t.tags&&t.tags.length>0&&p.jsx("div",{className:ee.tags,children:t.tags.map((E,v)=>p.jsxs("span",{className:ee.tag,children:["#",E]},v))})]})}),o&&p.jsx("div",{className:ee.imageModal,onClick:R,children:p.jsxs("div",{className:ee.imageModalContent,children:[p.jsx("button",{className:ee.closeModal,onClick:R,children:"✕"}),p.jsx("img",{src:c,alt:"Full size"})]})})]})}function v5(){const{isAdmin:t}=pa(),[e,n]=q.useState([]),[r,i]=q.useState("all"),[s,o]=q.useState(!1),[l,c]=q.useState(null),[u,f]=q.useState(!1),m=[{id:"all",name:"All Entries",icon:"📚"},{id:"quotes",name:"Quotes & Dialogues",icon:"💬"},{id:"articles",name:"Article Notes",icon:"📝"},{id:"books",name:"Book Highlights",icon:"📖"},{id:"thoughts",name:"Personal Thoughts",icon:"💭"}];q.useEffect(()=>{g()},[]);const g=async()=>{try{const S=b3(Nr(xe,"entries"),j3("createdAt","desc")),b=(await Gc(S)).docs.map(j=>{var w,y,A,T,k,x;return{id:j.id,...j.data(),createdAt:((A=(y=(w=j.data().createdAt)==null?void 0:w.toDate)==null?void 0:y.call(w))==null?void 0:A.toISOString())||new Date().toISOString(),updatedAt:((x=(k=(T=j.data().updatedAt)==null?void 0:T.toDate)==null?void 0:k.call(T))==null?void 0:x.toISOString())||new Date().toISOString()}});b.sort((j,w)=>j.isPinned&&!w.isPinned?-1:!j.isPinned&&w.isPinned?1:new Date(w.createdAt)-new Date(j.createdAt)),n(b)}catch(S){console.error("Error loading entries:",S)}},I=async S=>{try{await Qc(Nr(xe,"entries"),{...S,createdAt:ue.now(),updatedAt:ue.now()}),await g(),o(!1)}catch(D){console.error("Error adding entry:",D),alert("Failed to add entry. Please try again.")}},R=async S=>{try{const D=Tt(xe,"entries",S.id);await ms(D,{...S,updatedAt:ue.now()}),await g(),c(null),o(!1)}catch(D){console.error("Error updating entry:",D),alert("Failed to update entry. Please try again.")}},P=async S=>{if(window.confirm("Are you sure you want to delete this entry?"))try{await Kc(Tt(xe,"entries",S)),await g()}catch(D){console.error("Error deleting entry:",D),alert("Failed to delete entry. Please try again.")}},V=async S=>{try{const D=Tt(xe,"entries",S.id);await ms(D,{isPinned:!S.isPinned}),await g()}catch(D){console.error("Error toggling pin:",D),alert("Failed to toggle pin")}},E=S=>{c(S),o(!0)},v=r==="all"?e:e.filter(S=>S.category===r);return p.jsxs("section",{id:"commonplace",className:`${je.container} ${u?je.expanded:je.collapsed}`,children:[p.jsxs("button",{className:je.toggleButton,onClick:()=>f(!u),"aria-label":u?"Hide Commonplace":"Show Commonplace",children:[p.jsx("span",{className:je.toggleIcon,children:u?"▼":"▶"}),p.jsxs("span",{className:je.toggleText,children:[u?"Hide":"Show"," Commonplace"]}),p.jsx("span",{className:je.toggleEmoji,children:"📚"})]}),u&&p.jsxs("div",{className:je.content,children:[p.jsxs("div",{className:je.header,children:[p.jsx("h1",{className:"sectionTitle",children:"Commonplace"}),p.jsx("p",{className:je.subtitle,children:"A collection of interesting quotes, notes, and thoughts"})]}),t&&p.jsx("div",{className:je.adminControls,children:p.jsx("button",{className:je.addButton,onClick:()=>{c(null),o(!0)},children:"+ Add New Entry"})}),p.jsx("div",{className:je.categoryFilter,children:m.map(S=>p.jsxs("button",{className:`${je.categoryButton} ${r===S.id?je.active:""}`,onClick:()=>i(S.id),children:[p.jsx("span",{className:je.categoryIcon,children:S.icon}),S.name]},S.id))}),s&&p.jsx(M9,{entry:l,categories:m.filter(S=>S.id!=="all"),onSubmit:l?R:I,onCancel:()=>{o(!1),c(null)}}),p.jsx("div",{className:je.entriesGrid,children:v.length===0?p.jsxs("div",{className:je.emptyState,children:[p.jsx("span",{className:je.emptyIcon,children:"📭"}),p.jsxs("p",{children:["No entries yet. ",t&&"Start by adding your first entry!"]})]}):v.map(S=>p.jsx(y5,{entry:S,category:m.find(D=>D.id===S.category),isAdmin:t,onEdit:()=>E(S),onDelete:()=>P(S.id),onTogglePin:()=>V(S)},S.id))})]})]})}function w5(){const[t,e]=q.useState(0);return q.useEffect(()=>{const n=()=>{const r=window.innerHeight,i=document.documentElement.scrollHeight,s=window.scrollY,o=i-r,l=s/o*100;e(Math.min(l,100))};return window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]),p.jsx("div",{className:"scrollProgress",style:{width:`${t}%`}})}function E5(){return p.jsxs(hN,{children:[p.jsx(w5,{}),p.jsx(FN,{}),p.jsx(d4,{}),p.jsx(aD,{}),p.jsx(AD,{}),p.jsx(WD,{}),p.jsx(v5,{}),p.jsx($N,{}),p.jsx(GN,{}),p.jsx(TN,{})]})}ah.createRoot(document.getElementById("root")).render(p.jsx(vE.StrictMode,{children:p.jsx(MN,{children:p.jsx(E5,{})})}));
