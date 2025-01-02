function dx(s,t){for(var i=0;i<t.length;i++){const r=t[i];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in s)){const u=Object.getOwnPropertyDescriptor(r,l);u&&Object.defineProperty(s,l,u.get?u:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function px(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Yf={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function mx(){if(K_)return Oo;K_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Oo.Fragment=t,Oo.jsx=i,Oo.jsxs=i,Oo}var Q_;function _x(){return Q_||(Q_=1,Yf.exports=mx()),Yf.exports}var Mt=_x(),qf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function gx(){if(J_)return oe;J_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=g&&L[g]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function y(L,it,Tt){this.props=L,this.context=it,this.refs=w,this.updater=Tt||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,it){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,it,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function v(){}v.prototype=y.prototype;function P(L,it,Tt){this.props=L,this.context=it,this.refs=w,this.updater=Tt||M}var O=P.prototype=new v;O.constructor=P,T(O,y.prototype),O.isPureReactComponent=!0;var D=Array.isArray,I={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function F(L,it,Tt,At,q,ut){return Tt=ut.ref,{$$typeof:s,type:L,key:it,ref:Tt!==void 0?Tt:null,props:ut}}function K(L,it){return F(L.type,it,void 0,void 0,void 0,L.props)}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function R(L){var it={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Tt){return it[Tt]})}var B=/\/+/g;function ct(L,it){return typeof L=="object"&&L!==null&&L.key!=null?R(""+L.key):it.toString(36)}function at(){}function mt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(at,at):(L.status="pending",L.then(function(it){L.status==="pending"&&(L.status="fulfilled",L.value=it)},function(it){L.status==="pending"&&(L.status="rejected",L.reason=it)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function dt(L,it,Tt,At,q){var ut=typeof L;(ut==="undefined"||ut==="boolean")&&(L=null);var xt=!1;if(L===null)xt=!0;else switch(ut){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(L.$$typeof){case s:case t:xt=!0;break;case _:return xt=L._init,dt(xt(L._payload),it,Tt,At,q)}}if(xt)return q=q(L),xt=At===""?"."+ct(L,0):At,D(q)?(Tt="",xt!=null&&(Tt=xt.replace(B,"$&/")+"/"),dt(q,it,Tt,"",function(Vt){return Vt})):q!=null&&(C(q)&&(q=K(q,Tt+(q.key==null||L&&L.key===q.key?"":(""+q.key).replace(B,"$&/")+"/")+xt)),it.push(q)),1;xt=0;var bt=At===""?".":At+":";if(D(L))for(var Rt=0;Rt<L.length;Rt++)At=L[Rt],ut=bt+ct(At,Rt),xt+=dt(At,it,Tt,ut,q);else if(Rt=S(L),typeof Rt=="function")for(L=Rt.call(L),Rt=0;!(At=L.next()).done;)At=At.value,ut=bt+ct(At,Rt++),xt+=dt(At,it,Tt,ut,q);else if(ut==="object"){if(typeof L.then=="function")return dt(mt(L),it,Tt,At,q);throw it=String(L),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return xt}function Y(L,it,Tt){if(L==null)return L;var At=[],q=0;return dt(L,At,"","",function(ut){return it.call(Tt,ut,q++)}),At}function rt(L){if(L._status===-1){var it=L._result;it=it(),it.then(function(Tt){(L._status===0||L._status===-1)&&(L._status=1,L._result=Tt)},function(Tt){(L._status===0||L._status===-1)&&(L._status=2,L._result=Tt)}),L._status===-1&&(L._status=0,L._result=it)}if(L._status===1)return L._result.default;throw L._result}var j=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function St(){}return oe.Children={map:Y,forEach:function(L,it,Tt){Y(L,function(){it.apply(this,arguments)},Tt)},count:function(L){var it=0;return Y(L,function(){it++}),it},toArray:function(L){return Y(L,function(it){return it})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},oe.Component=y,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=P,oe.StrictMode=r,oe.Suspense=p,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,oe.act=function(){throw Error("act(...) is not supported in production builds of React.")},oe.cache=function(L){return function(){return L.apply(null,arguments)}},oe.cloneElement=function(L,it,Tt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var At=T({},L.props),q=L.key,ut=void 0;if(it!=null)for(xt in it.ref!==void 0&&(ut=void 0),it.key!==void 0&&(q=""+it.key),it)!G.call(it,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&it.ref===void 0||(At[xt]=it[xt]);var xt=arguments.length-2;if(xt===1)At.children=Tt;else if(1<xt){for(var bt=Array(xt),Rt=0;Rt<xt;Rt++)bt[Rt]=arguments[Rt+2];At.children=bt}return F(L.type,q,void 0,void 0,ut,At)},oe.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},oe.createElement=function(L,it,Tt){var At,q={},ut=null;if(it!=null)for(At in it.key!==void 0&&(ut=""+it.key),it)G.call(it,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(q[At]=it[At]);var xt=arguments.length-2;if(xt===1)q.children=Tt;else if(1<xt){for(var bt=Array(xt),Rt=0;Rt<xt;Rt++)bt[Rt]=arguments[Rt+2];q.children=bt}if(L&&L.defaultProps)for(At in xt=L.defaultProps,xt)q[At]===void 0&&(q[At]=xt[At]);return F(L,ut,void 0,void 0,null,q)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(L){return{$$typeof:d,render:L}},oe.isValidElement=C,oe.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:rt}},oe.memo=function(L,it){return{$$typeof:m,type:L,compare:it===void 0?null:it}},oe.startTransition=function(L){var it=I.T,Tt={};I.T=Tt;try{var At=L(),q=I.S;q!==null&&q(Tt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(St,j)}catch(ut){j(ut)}finally{I.T=it}},oe.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},oe.use=function(L){return I.H.use(L)},oe.useActionState=function(L,it,Tt){return I.H.useActionState(L,it,Tt)},oe.useCallback=function(L,it){return I.H.useCallback(L,it)},oe.useContext=function(L){return I.H.useContext(L)},oe.useDebugValue=function(){},oe.useDeferredValue=function(L,it){return I.H.useDeferredValue(L,it)},oe.useEffect=function(L,it){return I.H.useEffect(L,it)},oe.useId=function(){return I.H.useId()},oe.useImperativeHandle=function(L,it,Tt){return I.H.useImperativeHandle(L,it,Tt)},oe.useInsertionEffect=function(L,it){return I.H.useInsertionEffect(L,it)},oe.useLayoutEffect=function(L,it){return I.H.useLayoutEffect(L,it)},oe.useMemo=function(L,it){return I.H.useMemo(L,it)},oe.useOptimistic=function(L,it){return I.H.useOptimistic(L,it)},oe.useReducer=function(L,it,Tt){return I.H.useReducer(L,it,Tt)},oe.useRef=function(L){return I.H.useRef(L)},oe.useState=function(L){return I.H.useState(L)},oe.useSyncExternalStore=function(L,it,Tt){return I.H.useSyncExternalStore(L,it,Tt)},oe.useTransition=function(){return I.H.useTransition()},oe.version="19.0.0",oe}var $_;function vd(){return $_||($_=1,qf.exports=gx()),qf.exports}var Pt=vd();const vx=px(Pt),Sx=dx({__proto__:null,default:vx},[Pt]);var jf={exports:{}},Po={},Zf={exports:{}},Kf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function xx(){return tg||(tg=1,function(s){function t(Y,rt){var j=Y.length;Y.push(rt);t:for(;0<j;){var St=j-1>>>1,L=Y[St];if(0<l(L,rt))Y[St]=rt,Y[j]=L,j=St;else break t}}function i(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var rt=Y[0],j=Y.pop();if(j!==rt){Y[0]=j;t:for(var St=0,L=Y.length,it=L>>>1;St<it;){var Tt=2*(St+1)-1,At=Y[Tt],q=Tt+1,ut=Y[q];if(0>l(At,j))q<L&&0>l(ut,At)?(Y[St]=ut,Y[q]=j,St=q):(Y[St]=At,Y[Tt]=j,St=Tt);else if(q<L&&0>l(ut,j))Y[St]=ut,Y[q]=j,St=q;else break t}}return rt}function l(Y,rt){var j=Y.sortIndex-rt.sortIndex;return j!==0?j:Y.id-rt.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var p=[],m=[],_=1,g=null,S=3,M=!1,T=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function O(Y){for(var rt=i(m);rt!==null;){if(rt.callback===null)r(m);else if(rt.startTime<=Y)r(m),rt.sortIndex=rt.expirationTime,t(p,rt);else break;rt=i(m)}}function D(Y){if(w=!1,O(Y),!T)if(i(p)!==null)T=!0,mt();else{var rt=i(m);rt!==null&&dt(D,rt.startTime-Y)}}var I=!1,G=-1,F=5,K=-1;function C(){return!(s.unstable_now()-K<F)}function R(){if(I){var Y=s.unstable_now();K=Y;var rt=!0;try{t:{T=!1,w&&(w=!1,v(G),G=-1),M=!0;var j=S;try{e:{for(O(Y),g=i(p);g!==null&&!(g.expirationTime>Y&&C());){var St=g.callback;if(typeof St=="function"){g.callback=null,S=g.priorityLevel;var L=St(g.expirationTime<=Y);if(Y=s.unstable_now(),typeof L=="function"){g.callback=L,O(Y),rt=!0;break e}g===i(p)&&r(p),O(Y)}else r(p);g=i(p)}if(g!==null)rt=!0;else{var it=i(m);it!==null&&dt(D,it.startTime-Y),rt=!1}}break t}finally{g=null,S=j,M=!1}rt=void 0}}finally{rt?B():I=!1}}}var B;if(typeof P=="function")B=function(){P(R)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,at=ct.port2;ct.port1.onmessage=R,B=function(){at.postMessage(null)}}else B=function(){y(R,0)};function mt(){I||(I=!0,B())}function dt(Y,rt){G=y(function(){Y(s.unstable_now())},rt)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,mt())},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return i(p)},s.unstable_next=function(Y){switch(S){case 1:case 2:case 3:var rt=3;break;default:rt=S}var j=S;S=rt;try{return Y()}finally{S=j}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,rt){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var j=S;S=Y;try{return rt()}finally{S=j}},s.unstable_scheduleCallback=function(Y,rt,j){var St=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?St+j:St):j=St,Y){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=j+L,Y={id:_++,callback:rt,priorityLevel:Y,startTime:j,expirationTime:L,sortIndex:-1},j>St?(Y.sortIndex=j,t(m,Y),i(p)===null&&Y===i(m)&&(w?(v(G),G=-1):w=!0,dt(D,j-St))):(Y.sortIndex=L,t(p,Y),T||M||(T=!0,mt())),Y},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(Y){var rt=S;return function(){var j=S;S=rt;try{return Y.apply(this,arguments)}finally{S=j}}}}(Kf)),Kf}var eg;function yx(){return eg||(eg=1,Zf.exports=xx()),Zf.exports}var Qf={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function Mx(){if(ng)return An;ng=1;var s=vd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:p,containerInfo:m,implementation:_}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(p,m,null,_)},An.flushSync=function(p){var m=h.T,_=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=_,r.d.f()}},An.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},An.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},An.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,g=d(_,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:M}):_==="script"&&r.d.X(p,{crossOrigin:g,integrity:S,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},An.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},An.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,g=d(_,m.crossOrigin);r.d.L(p,_,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},An.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},An.requestFormReset=function(p){r.d.r(p)},An.unstable_batchedUpdates=function(p,m){return p(m)},An.useFormState=function(p,m,_){return h.H.useFormState(p,m,_)},An.useFormStatus=function(){return h.H.useHostTransitionStatus()},An.version="19.0.0",An}var ig;function _0(){if(ig)return Qf.exports;ig=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Qf.exports=Mx(),Qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function Ex(){if(ag)return Po;ag=1;var s=yx(),t=vd(),i=_0();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),S=Symbol.for("react.consumer"),M=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var F=Symbol.for("react.client.reference");function K(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===F?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case d:return"Portal";case _:return"Profiler";case m:return"StrictMode";case w:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M:return(e.displayName||"Context")+".Provider";case S:return(e._context.displayName||"Context")+".Consumer";case T:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case v:return n=e.displayName||null,n!==null?n:K(e.type)||"Memo";case P:n=e._payload,e=e._init;try{return K(e(n))}catch{}}return null}var C=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=Object.assign,B,ct;function at(e){if(B===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);B=n&&n[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+B+e+ct}var mt=!1;function dt(e,n){if(!e||mt)return"";mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ot){var $=ot}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(ot){$=ot}e.call(gt.prototype)}}else{try{throw Error()}catch(ot){$=ot}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ot){if(ot&&$&&typeof ot.stack=="string")return[ot.stack,$.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],b=f[1];if(x&&b){var N=x.split(`
`),k=b.split(`
`);for(c=o=0;o<N.length&&!N[o].includes("DetermineComponentFrameRoot");)o++;for(;c<k.length&&!k[c].includes("DetermineComponentFrameRoot");)c++;if(o===N.length||c===k.length)for(o=N.length-1,c=k.length-1;1<=o&&0<=c&&N[o]!==k[c];)c--;for(;1<=o&&0<=c;o--,c--)if(N[o]!==k[c]){if(o!==1||c!==1)do if(o--,c--,0>c||N[o]!==k[c]){var lt=`
`+N[o].replace(" at new "," at ");return e.displayName&&lt.includes("<anonymous>")&&(lt=lt.replace("<anonymous>",e.displayName)),lt}while(1<=o&&0<=c);break}}}finally{mt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?at(a):""}function Y(e){switch(e.tag){case 26:case 27:case 5:return at(e.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return e=dt(e.type,!1),e;case 11:return e=dt(e.type.render,!1),e;case 1:return e=dt(e.type,!0),e;default:return""}}function rt(e){try{var n="";do n+=Y(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function j(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function St(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function L(e){if(j(e)!==e)throw Error(r(188))}function it(e){var n=e.alternate;if(!n){if(n=j(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return L(c),e;if(f===o)return L(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var x=!1,b=c.child;b;){if(b===a){x=!0,a=c,o=f;break}if(b===o){x=!0,o=c,a=f;break}b=b.sibling}if(!x){for(b=f.child;b;){if(b===a){x=!0,a=f,o=c;break}if(b===o){x=!0,o=f,a=c;break}b=b.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function Tt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=Tt(e),n!==null)return n;e=e.sibling}return null}var At=Array.isArray,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut={pending:!1,data:null,method:null,action:null},xt=[],bt=-1;function Rt(e){return{current:e}}function Vt(e){0>bt||(e.current=xt[bt],xt[bt]=null,bt--)}function kt(e,n){bt++,xt[bt]=e.current,e.current=n}var ye=Rt(null),fe=Rt(null),De=Rt(null),z=Rt(null);function Sn(e,n){switch(kt(De,n),kt(fe,e),kt(ye,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?b_(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=b_(e),n=A_(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Vt(ye),kt(ye,n)}function se(){Vt(ye),Vt(fe),Vt(De)}function de(e){e.memoizedState!==null&&kt(z,e);var n=ye.current,a=A_(n,e.type);n!==a&&(kt(fe,e),kt(ye,a))}function qt(e){fe.current===e&&(Vt(ye),Vt(fe)),z.current===e&&(Vt(z),wo._currentValue=ut)}var Ue=Object.prototype.hasOwnProperty,jt=s.unstable_scheduleCallback,U=s.unstable_cancelCallback,E=s.unstable_shouldYield,J=s.unstable_requestPaint,ft=s.unstable_now,vt=s.unstable_getCurrentPriorityLevel,ht=s.unstable_ImmediatePriority,Xt=s.unstable_UserBlockingPriority,wt=s.unstable_NormalPriority,Bt=s.unstable_LowPriority,ve=s.unstable_IdlePriority,Et=s.log,Ft=s.unstable_setDisableYieldValue,Kt=null,Wt=null;function It(e){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Kt,e,void 0,(e.current.flags&128)===128)}catch{}}function ae(e){if(typeof Et=="function"&&Ft(e),Wt&&typeof Wt.setStrictMode=="function")try{Wt.setStrictMode(Kt,e)}catch{}}var $t=Math.clz32?Math.clz32:Nt,Le=Math.log,X=Math.LN2;function Nt(e){return e>>>=0,e===0?32:31-(Le(e)/X|0)|0}var st=128,_t=4194304;function Ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dt(e,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,c=e.suspendedLanes,f=e.pingedLanes,x=e.warmLanes;e=e.finishedLanes!==0;var b=a&134217727;return b!==0?(a=b&~c,a!==0?o=Ct(a):(f&=b,f!==0?o=Ct(f):e||(x=b&~x,x!==0&&(o=Ct(x))))):(b=a&~c,b!==0?o=Ct(b):f!==0?o=Ct(f):e||(x=a&~x,x!==0&&(o=Ct(x)))),o===0?0:n!==0&&n!==o&&!(n&c)&&(c=o&-o,x=n&-n,c>=x||c===32&&(x&4194176)!==0)?n:o}function ee(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ve(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rn(){var e=st;return st<<=1,!(st&4194176)&&(st=128),e}function Ee(){var e=_t;return _t<<=1,!(_t&62914560)&&(_t=4194304),e}function Dn(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Un(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $o(e,n,a,o,c,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,N=e.expirationTimes,k=e.hiddenUpdates;for(a=x&~a;0<a;){var lt=31-$t(a),gt=1<<lt;b[lt]=0,N[lt]=-1;var $=k[lt];if($!==null)for(k[lt]=null,lt=0;lt<$.length;lt++){var ot=$[lt];ot!==null&&(ot.lane&=-536870913)}a&=~gt}o!==0&&Is(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function Is(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-$t(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194218}function xi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-$t(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Rr(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Hs(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:X_(e.type))}function tl(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var Vn=Math.random().toString(36).slice(2),sn="__reactFiber$"+Vn,on="__reactProps$"+Vn,Ui="__reactContainer$"+Vn,Cr="__reactEvents$"+Vn,kc="__reactListeners$"+Vn,Xc="__reactHandles$"+Vn,el="__reactResources$"+Vn,Ga="__reactMarker$"+Vn;function Gs(e){delete e[sn],delete e[on],delete e[Cr],delete e[kc],delete e[Xc]}function A(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ui]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=w_(e);e!==null;){if(a=e[sn])return a;e=w_(e)}return n}e=a,a=e.parentNode}return null}function W(e){if(e=e[sn]||e[Ui]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function et(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function nt(e){var n=e[el];return n||(n=e[el]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function V(e){e[Ga]=!0}var yt=new Set,Ut={};function Ot(e,n){zt(e,n),zt(e+"Capture",n)}function zt(e,n){for(Ut[e]=n,e=0;e<n.length;e++)yt.add(n[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},Se={};function Te(e){return Ue.call(Se,e)?!0:Ue.call(Jt,e)?!1:ne.test(e)?Se[e]=!0:(Jt[e]=!0,!1)}function Ge(e,n,a){if(Te(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Be(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function re(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Je(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function be(e){var n=Je(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){o=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(x){o=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function En(e){e._valueTracker||(e._valueTracker=be(e))}function Li(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Je(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function pn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Va=/[\n"\\]/g;function _e(e){return e.replace(Va,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(e,n,a,o,c,f,x,b){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ht(n)):e.value!==""+Ht(n)&&(e.value=""+Ht(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?ln(e,x,Ht(n)):a!=null?ln(e,x,Ht(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Ht(b):e.removeAttribute("name")}function Ln(e,n,a,o,c,f,x,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Ht(a):"",n=n!=null?""+Ht(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x)}function ln(e,n,a){n==="number"&&pn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ke(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ht(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function wr(e,n,a){if(n!=null&&(n=""+Ht(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ht(a):""}function yi(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(At(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ht(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Dr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var uv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||uv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Od(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Nd(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Nd(e,f,n[f])}function Wc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(e){return hv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Yc=null;function qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ur=null,Lr=null;function Pd(e){var n=W(e);if(n&&(e=n.stateNode)){var a=e[on]||null;t:switch(e=n.stateNode,n.type){case"input":if(Tn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_e(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[on]||null;if(!c)throw Error(r(90));Tn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Li(o)}break t;case"textarea":wr(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ke(e,!!a.multiple,n,!1)}}}var jc=!1;function zd(e,n,a){if(jc)return e(n,a);jc=!0;try{var o=e(n);return o}finally{if(jc=!1,(Ur!==null||Lr!==null)&&(Il(),Ur&&(n=Ur,e=Lr,Lr=Ur=null,Pd(n),e)))for(n=0;n<e.length;n++)Pd(e[n])}}function Vs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[on]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Zc=!1;if(Qt)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{Zc=!1}var sa=null,Kc=null,il=null;function Bd(){if(il)return il;var e,n=Kc,a=n.length,o,c="value"in sa?sa.value:sa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===c[f-o];o++);return il=c.slice(e,1<o?1-o:void 0)}function al(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function Fd(){return!1}function Bn(e){function n(a,o,c,f,x){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:Fd,this.isPropagationStopped=Fd,this}return R(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Bn(ka),Xs=R({},ka,{view:0,detail:0}),dv=Bn(Xs),Qc,Jc,Ws,ol=R({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ws&&(Ws&&e.type==="mousemove"?(Qc=e.screenX-Ws.screenX,Jc=e.screenY-Ws.screenY):Jc=Qc=0,Ws=e),Qc)},movementY:function(e){return"movementY"in e?e.movementY:Jc}}),Id=Bn(ol),pv=R({},ol,{dataTransfer:0}),mv=Bn(pv),_v=R({},Xs,{relatedTarget:0}),$c=Bn(_v),gv=R({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),vv=Bn(gv),Sv=R({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xv=Bn(Sv),yv=R({},ka,{data:0}),Hd=Bn(yv),Mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Tv[e])?!!n[e]:!1}function tu(){return bv}var Av=R({},Xs,{key:function(e){if(e.key){var n=Mv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ev[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(e){return e.type==="keypress"?al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rv=Bn(Av),Cv=R({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gd=Bn(Cv),wv=R({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),Dv=Bn(wv),Uv=R({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=Bn(Uv),Nv=R({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ov=Bn(Nv),Pv=R({},ka,{newState:0,oldState:0}),zv=Bn(Pv),Bv=[9,13,27,32],eu=Qt&&"CompositionEvent"in window,Ys=null;Qt&&"documentMode"in document&&(Ys=document.documentMode);var Fv=Qt&&"TextEvent"in window&&!Ys,Vd=Qt&&(!eu||Ys&&8<Ys&&11>=Ys),kd=" ",Xd=!1;function Wd(e,n){switch(e){case"keyup":return Bv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function Iv(e,n){switch(e){case"compositionend":return Yd(n);case"keypress":return n.which!==32?null:(Xd=!0,kd);case"textInput":return e=n.data,e===kd&&Xd?null:e;default:return null}}function Hv(e,n){if(Nr)return e==="compositionend"||!eu&&Wd(e,n)?(e=Bd(),il=Kc=sa=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Vd&&n.locale!=="ko"?null:n.data;default:return null}}var Gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Gv[e.type]:n==="textarea"}function jd(e,n,a,o){Ur?Lr?Lr.push(o):Lr=[o]:Ur=o,n=Xl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var qs=null,js=null;function Vv(e){x_(e,0)}function ll(e){var n=et(e);if(Li(n))return e}function Zd(e,n){if(e==="change")return n}var Kd=!1;if(Qt){var nu;if(Qt){var iu="oninput"in document;if(!iu){var Qd=document.createElement("div");Qd.setAttribute("oninput","return;"),iu=typeof Qd.oninput=="function"}nu=iu}else nu=!1;Kd=nu&&(!document.documentMode||9<document.documentMode)}function Jd(){qs&&(qs.detachEvent("onpropertychange",$d),js=qs=null)}function $d(e){if(e.propertyName==="value"&&ll(js)){var n=[];jd(n,js,e,qc(e)),zd(Vv,n)}}function kv(e,n,a){e==="focusin"?(Jd(),qs=n,js=a,qs.attachEvent("onpropertychange",$d)):e==="focusout"&&Jd()}function Xv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(js)}function Wv(e,n){if(e==="click")return ll(n)}function Yv(e,n){if(e==="input"||e==="change")return ll(n)}function qv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:qv;function Zs(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ue.call(n,c)||!kn(e[c],n[c]))return!1}return!0}function tp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ep(e,n){var a=tp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=tp(a)}}function np(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?np(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ip(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pn(e.document)}return n}function au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function jv(e,n){var a=ip(n);n=e.focusedElem;var o=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&np(n.ownerDocument.documentElement,n)){if(o!==null&&au(n)){if(e=o.start,a=o.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(o.start,c);o=o.end===void 0?f:Math.min(o.end,c),!a.extend&&f>o&&(c=o,o=f,f=c),c=ep(n,f);var x=ep(n,o);c&&x&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==x.node||a.focusOffset!==x.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),a.removeAllRanges(),f>o?(a.addRange(e),a.extend(x.node,x.offset)):(e.setEnd(x.node,x.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var Zv=Qt&&"documentMode"in document&&11>=document.documentMode,Or=null,ru=null,Ks=null,su=!1;function ap(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||Or==null||Or!==pn(o)||(o=Or,"selectionStart"in o&&au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ks&&Zs(Ks,o)||(Ks=o,o=Xl(ru,"onSelect"),0<o.length&&(n=new sl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Or)))}function Xa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Pr={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},ou={},rp={};Qt&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function Wa(e){if(ou[e])return ou[e];if(!Pr[e])return e;var n=Pr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in rp)return ou[e]=n[a];return e}var sp=Wa("animationend"),op=Wa("animationiteration"),lp=Wa("animationstart"),Kv=Wa("transitionrun"),Qv=Wa("transitionstart"),Jv=Wa("transitioncancel"),cp=Wa("transitionend"),up=new Map,fp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ci(e,n){up.set(e,n),Ot(n,[e])}var Kn=[],zr=0,lu=0;function cl(){for(var e=zr,n=lu=zr=0;n<e;){var a=Kn[n];Kn[n++]=null;var o=Kn[n];Kn[n++]=null;var c=Kn[n];Kn[n++]=null;var f=Kn[n];if(Kn[n++]=null,o!==null&&c!==null){var x=o.pending;x===null?c.next=c:(c.next=x.next,x.next=c),o.pending=c}f!==0&&hp(a,c,f)}}function ul(e,n,a,o){Kn[zr++]=e,Kn[zr++]=n,Kn[zr++]=a,Kn[zr++]=o,lu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function cu(e,n,a,o){return ul(e,n,a,o),fl(e)}function oa(e,n){return ul(e,null,null,n),fl(e)}function hp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;c&&n!==null&&e.tag===3&&(f=e.stateNode,c=31-$t(a),f=f.hiddenUpdates,e=f[c],e===null?f[c]=[n]:e.push(n),n.lane=a|536870912)}function fl(e){if(50<Mo)throw Mo=0,_f=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Br={},dp=new WeakMap;function Qn(e,n){if(typeof e=="object"&&e!==null){var a=dp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:rt(n)},dp.set(e,n),n)}return{value:e,source:n,stack:rt(n)}}var Fr=[],Ir=0,hl=null,dl=0,Jn=[],$n=0,Ya=null,Ni=1,Oi="";function qa(e,n){Fr[Ir++]=dl,Fr[Ir++]=hl,hl=e,dl=n}function pp(e,n,a){Jn[$n++]=Ni,Jn[$n++]=Oi,Jn[$n++]=Ya,Ya=e;var o=Ni;e=Oi;var c=32-$t(o)-1;o&=~(1<<c),a+=1;var f=32-$t(n)+c;if(30<f){var x=c-c%5;f=(o&(1<<x)-1).toString(32),o>>=x,c-=x,Ni=1<<32-$t(n)+c|a<<c|o,Oi=f+e}else Ni=1<<f|a<<c|o,Oi=e}function uu(e){e.return!==null&&(qa(e,1),pp(e,1,0))}function fu(e){for(;e===hl;)hl=Fr[--Ir],Fr[Ir]=null,dl=Fr[--Ir],Fr[Ir]=null;for(;e===Ya;)Ya=Jn[--$n],Jn[$n]=null,Oi=Jn[--$n],Jn[$n]=null,Ni=Jn[--$n],Jn[$n]=null}var Nn=null,xn=null,Ae=!1,ui=null,Mi=!1,hu=Error(r(519));function ja(e){var n=Error(r(418,""));throw $s(Qn(n,e)),hu}function mp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[sn]=e,n[on]=o,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)xe(To[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),En(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),yi(n,o.value,o.defaultValue,o.children),En(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||T_(n.textContent,a)?(o.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),o.onScroll!=null&&xe("scroll",n),o.onScrollEnd!=null&&xe("scrollend",n),o.onClick!=null&&(n.onclick=Wl),n=!0):n=!1,n||ja(e)}function _p(e){for(Nn=e.return;Nn;)switch(Nn.tag){case 3:case 27:Mi=!0;return;case 5:case 13:Mi=!1;return;default:Nn=Nn.return}}function Qs(e){if(e!==Nn)return!1;if(!Ae)return _p(e),Ae=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Nf(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&xn&&ja(e),_p(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){xn=hi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}xn=null}}else xn=Nn?hi(e.stateNode.nextSibling):null;return!0}function Js(){xn=Nn=null,Ae=!1}function $s(e){ui===null?ui=[e]:ui.push(e)}var to=Error(r(460)),gp=Error(r(474)),du={then:function(){}};function vp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pl(){}function Sp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(pl,pl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===to?Error(r(483)):e;default:if(typeof n.status=="string")n.then(pl,pl);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===to?Error(r(483)):e}throw eo=n,to}}var eo=null;function xp(){if(eo===null)throw Error(r(459));var e=eo;return eo=null,e}var Hr=null,no=0;function ml(e){var n=no;return no+=1,Hr===null&&(Hr=[]),Sp(Hr,e,n)}function io(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _l(e,n){throw n.$$typeof===u?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function yp(e){var n=e._init;return n(e._payload)}function Mp(e){function n(Z,H){if(e){var Q=Z.deletions;Q===null?(Z.deletions=[H],Z.flags|=16):Q.push(H)}}function a(Z,H){if(!e)return null;for(;H!==null;)n(Z,H),H=H.sibling;return null}function o(Z){for(var H=new Map;Z!==null;)Z.key!==null?H.set(Z.key,Z):H.set(Z.index,Z),Z=Z.sibling;return H}function c(Z,H){return Z=Sa(Z,H),Z.index=0,Z.sibling=null,Z}function f(Z,H,Q){return Z.index=Q,e?(Q=Z.alternate,Q!==null?(Q=Q.index,Q<H?(Z.flags|=33554434,H):Q):(Z.flags|=33554434,H)):(Z.flags|=1048576,H)}function x(Z){return e&&Z.alternate===null&&(Z.flags|=33554434),Z}function b(Z,H,Q,pt){return H===null||H.tag!==6?(H=lf(Q,Z.mode,pt),H.return=Z,H):(H=c(H,Q),H.return=Z,H)}function N(Z,H,Q,pt){var Gt=Q.type;return Gt===p?lt(Z,H,Q.props.children,pt,Q.key):H!==null&&(H.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===P&&yp(Gt)===H.type)?(H=c(H,Q.props),io(H,Q),H.return=Z,H):(H=Ol(Q.type,Q.key,Q.props,null,Z.mode,pt),io(H,Q),H.return=Z,H)}function k(Z,H,Q,pt){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=cf(Q,Z.mode,pt),H.return=Z,H):(H=c(H,Q.children||[]),H.return=Z,H)}function lt(Z,H,Q,pt,Gt){return H===null||H.tag!==7?(H=ar(Q,Z.mode,pt,Gt),H.return=Z,H):(H=c(H,Q),H.return=Z,H)}function gt(Z,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=lf(""+H,Z.mode,Q),H.return=Z,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case h:return Q=Ol(H.type,H.key,H.props,null,Z.mode,Q),io(Q,H),Q.return=Z,Q;case d:return H=cf(H,Z.mode,Q),H.return=Z,H;case P:var pt=H._init;return H=pt(H._payload),gt(Z,H,Q)}if(At(H)||G(H))return H=ar(H,Z.mode,Q,null),H.return=Z,H;if(typeof H.then=="function")return gt(Z,ml(H),Q);if(H.$$typeof===M)return gt(Z,Ul(Z,H),Q);_l(Z,H)}return null}function $(Z,H,Q,pt){var Gt=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Gt!==null?null:b(Z,H,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case h:return Q.key===Gt?N(Z,H,Q,pt):null;case d:return Q.key===Gt?k(Z,H,Q,pt):null;case P:return Gt=Q._init,Q=Gt(Q._payload),$(Z,H,Q,pt)}if(At(Q)||G(Q))return Gt!==null?null:lt(Z,H,Q,pt,null);if(typeof Q.then=="function")return $(Z,H,ml(Q),pt);if(Q.$$typeof===M)return $(Z,H,Ul(Z,Q),pt);_l(Z,Q)}return null}function ot(Z,H,Q,pt,Gt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Z=Z.get(Q)||null,b(H,Z,""+pt,Gt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case h:return Z=Z.get(pt.key===null?Q:pt.key)||null,N(H,Z,pt,Gt);case d:return Z=Z.get(pt.key===null?Q:pt.key)||null,k(H,Z,pt,Gt);case P:var pe=pt._init;return pt=pe(pt._payload),ot(Z,H,Q,pt,Gt)}if(At(pt)||G(pt))return Z=Z.get(Q)||null,lt(H,Z,pt,Gt,null);if(typeof pt.then=="function")return ot(Z,H,Q,ml(pt),Gt);if(pt.$$typeof===M)return ot(Z,H,Q,Ul(H,pt),Gt);_l(H,pt)}return null}function Yt(Z,H,Q,pt){for(var Gt=null,pe=null,Zt=H,te=H=0,gn=null;Zt!==null&&te<Q.length;te++){Zt.index>te?(gn=Zt,Zt=null):gn=Zt.sibling;var Re=$(Z,Zt,Q[te],pt);if(Re===null){Zt===null&&(Zt=gn);break}e&&Zt&&Re.alternate===null&&n(Z,Zt),H=f(Re,H,te),pe===null?Gt=Re:pe.sibling=Re,pe=Re,Zt=gn}if(te===Q.length)return a(Z,Zt),Ae&&qa(Z,te),Gt;if(Zt===null){for(;te<Q.length;te++)Zt=gt(Z,Q[te],pt),Zt!==null&&(H=f(Zt,H,te),pe===null?Gt=Zt:pe.sibling=Zt,pe=Zt);return Ae&&qa(Z,te),Gt}for(Zt=o(Zt);te<Q.length;te++)gn=ot(Zt,Z,te,Q[te],pt),gn!==null&&(e&&gn.alternate!==null&&Zt.delete(gn.key===null?te:gn.key),H=f(gn,H,te),pe===null?Gt=gn:pe.sibling=gn,pe=gn);return e&&Zt.forEach(function(Aa){return n(Z,Aa)}),Ae&&qa(Z,te),Gt}function ie(Z,H,Q,pt){if(Q==null)throw Error(r(151));for(var Gt=null,pe=null,Zt=H,te=H=0,gn=null,Re=Q.next();Zt!==null&&!Re.done;te++,Re=Q.next()){Zt.index>te?(gn=Zt,Zt=null):gn=Zt.sibling;var Aa=$(Z,Zt,Re.value,pt);if(Aa===null){Zt===null&&(Zt=gn);break}e&&Zt&&Aa.alternate===null&&n(Z,Zt),H=f(Aa,H,te),pe===null?Gt=Aa:pe.sibling=Aa,pe=Aa,Zt=gn}if(Re.done)return a(Z,Zt),Ae&&qa(Z,te),Gt;if(Zt===null){for(;!Re.done;te++,Re=Q.next())Re=gt(Z,Re.value,pt),Re!==null&&(H=f(Re,H,te),pe===null?Gt=Re:pe.sibling=Re,pe=Re);return Ae&&qa(Z,te),Gt}for(Zt=o(Zt);!Re.done;te++,Re=Q.next())Re=ot(Zt,Z,te,Re.value,pt),Re!==null&&(e&&Re.alternate!==null&&Zt.delete(Re.key===null?te:Re.key),H=f(Re,H,te),pe===null?Gt=Re:pe.sibling=Re,pe=Re);return e&&Zt.forEach(function(hx){return n(Z,hx)}),Ae&&qa(Z,te),Gt}function qe(Z,H,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===p&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case h:t:{for(var Gt=Q.key;H!==null;){if(H.key===Gt){if(Gt=Q.type,Gt===p){if(H.tag===7){a(Z,H.sibling),pt=c(H,Q.props.children),pt.return=Z,Z=pt;break t}}else if(H.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===P&&yp(Gt)===H.type){a(Z,H.sibling),pt=c(H,Q.props),io(pt,Q),pt.return=Z,Z=pt;break t}a(Z,H);break}else n(Z,H);H=H.sibling}Q.type===p?(pt=ar(Q.props.children,Z.mode,pt,Q.key),pt.return=Z,Z=pt):(pt=Ol(Q.type,Q.key,Q.props,null,Z.mode,pt),io(pt,Q),pt.return=Z,Z=pt)}return x(Z);case d:t:{for(Gt=Q.key;H!==null;){if(H.key===Gt)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a(Z,H.sibling),pt=c(H,Q.children||[]),pt.return=Z,Z=pt;break t}else{a(Z,H);break}else n(Z,H);H=H.sibling}pt=cf(Q,Z.mode,pt),pt.return=Z,Z=pt}return x(Z);case P:return Gt=Q._init,Q=Gt(Q._payload),qe(Z,H,Q,pt)}if(At(Q))return Yt(Z,H,Q,pt);if(G(Q)){if(Gt=G(Q),typeof Gt!="function")throw Error(r(150));return Q=Gt.call(Q),ie(Z,H,Q,pt)}if(typeof Q.then=="function")return qe(Z,H,ml(Q),pt);if(Q.$$typeof===M)return qe(Z,H,Ul(Z,Q),pt);_l(Z,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,H!==null&&H.tag===6?(a(Z,H.sibling),pt=c(H,Q),pt.return=Z,Z=pt):(a(Z,H),pt=lf(Q,Z.mode,pt),pt.return=Z,Z=pt),x(Z)):a(Z,H)}return function(Z,H,Q,pt){try{no=0;var Gt=qe(Z,H,Q,pt);return Hr=null,Gt}catch(Zt){if(Zt===to)throw Zt;var pe=ii(29,Zt,null,Z.mode);return pe.lanes=pt,pe.return=Z,pe}finally{}}}var Za=Mp(!0),Ep=Mp(!1),Gr=Rt(null),gl=Rt(0);function Tp(e,n){e=Wi,kt(gl,e),kt(Gr,n),Wi=e|n.baseLanes}function pu(){kt(gl,Wi),kt(Gr,Gr.current)}function mu(){Wi=gl.current,Vt(Gr),Vt(gl)}var ti=Rt(null),Ei=null;function la(e){var n=e.alternate;kt(cn,cn.current&1),kt(ti,e),Ei===null&&(n===null||Gr.current!==null||n.memoizedState!==null)&&(Ei=e)}function bp(e){if(e.tag===22){if(kt(cn,cn.current),kt(ti,e),Ei===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ei=e)}}else ca()}function ca(){kt(cn,cn.current),kt(ti,ti.current)}function Pi(e){Vt(ti),Ei===e&&(Ei=null),Vt(cn)}var cn=Rt(0);function vl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $v=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},tS=s.unstable_scheduleCallback,eS=s.unstable_NormalPriority,un={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new $v,data:new Map,refCount:0}}function ao(e){e.refCount--,e.refCount===0&&tS(eS,function(){e.controller.abort()})}var ro=null,gu=0,Vr=0,kr=null;function nS(e,n){if(ro===null){var a=ro=[];gu=0,Vr=Tf(),kr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return gu++,n.then(Ap,Ap),n}function Ap(){if(--gu===0&&ro!==null){kr!==null&&(kr.status="fulfilled");var e=ro;ro=null,Vr=0,kr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function iS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Rp=C.S;C.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&nS(e,n),Rp!==null&&Rp(e,n)};var Ka=Rt(null);function vu(){var e=Ka.current;return e!==null?e:Ie.pooledCache}function Sl(e,n){n===null?kt(Ka,Ka.current):kt(Ka,n.pool)}function Cp(){var e=vu();return e===null?null:{parent:un._currentValue,pool:e}}var ua=0,he=null,Ne=null,$e=null,xl=!1,Xr=!1,Qa=!1,yl=0,so=0,Wr=null,aS=0;function Qe(){throw Error(r(321))}function Su(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function xu(e,n,a,o,c,f){return ua=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=e===null||e.memoizedState===null?Ja:fa,Qa=!1,f=a(o,c),Qa=!1,Xr&&(f=Dp(n,a,o,c)),wp(e),f}function wp(e){C.H=Ti;var n=Ne!==null&&Ne.next!==null;if(ua=0,$e=Ne=he=null,xl=!1,so=0,Wr=null,n)throw Error(r(300));e===null||mn||(e=e.dependencies,e!==null&&Dl(e)&&(mn=!0))}function Dp(e,n,a,o){he=e;var c=0;do{if(Xr&&(Wr=null),so=0,Xr=!1,25<=c)throw Error(r(301));if(c+=1,$e=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}C.H=$a,f=n(a,o)}while(Xr);return f}function rS(){var e=C.H,n=e.useState()[0];return n=typeof n.then=="function"?oo(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(he.flags|=1024),n}function yu(){var e=yl!==0;return yl=0,e}function Mu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Eu(e){if(xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}xl=!1}ua=0,$e=Ne=he=null,Xr=!1,so=yl=0,Wr=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?he.memoizedState=$e=e:$e=$e.next=e,$e}function tn(){if(Ne===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=$e===null?he.memoizedState:$e.next;if(n!==null)$e=n,Ne=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},$e===null?he.memoizedState=$e=e:$e=$e.next=e}return $e}var Ml;Ml=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function oo(e){var n=so;return so+=1,Wr===null&&(Wr=[]),e=Sp(Wr,e,n),n=he,($e===null?n.memoizedState:$e.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?Ja:fa),e}function El(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===M)return bn(e)}throw Error(r(438,String(e)))}function Tu(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ml(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function zi(e,n){return typeof n=="function"?n(e):n}function Tl(e){var n=tn();return bu(n,Ne,e)}function bu(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var b=x=null,N=null,k=n,lt=!1;do{var gt=k.lane&-536870913;if(gt!==k.lane?(Me&gt)===gt:(ua&gt)===gt){var $=k.revertLane;if($===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),gt===Vr&&(lt=!0);else if((ua&$)===$){k=k.next,$===Vr&&(lt=!0);continue}else gt={lane:0,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},N===null?(b=N=gt,x=f):N=N.next=gt,he.lanes|=$,xa|=$;gt=k.action,Qa&&a(f,gt),f=k.hasEagerState?k.eagerState:a(f,gt)}else $={lane:gt,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},N===null?(b=N=$,x=f):N=N.next=$,he.lanes|=gt,xa|=gt;k=k.next}while(k!==null&&k!==n);if(N===null?x=f:N.next=b,!kn(f,e.memoizedState)&&(mn=!0,lt&&(a=kr,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=N,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Au(e){var n=tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);kn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Up(e,n,a){var o=he,c=tn(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!kn((Ne||c).memoizedState,a);if(x&&(c.memoizedState=a,mn=!0),c=c.queue,wu(Op.bind(null,o,c,e),[e]),c.getSnapshot!==n||x||$e!==null&&$e.memoizedState.tag&1){if(o.flags|=2048,Yr(9,Np.bind(null,o,c,a,n),{destroy:void 0},null),Ie===null)throw Error(r(349));f||ua&60||Lp(o,n,a)}return a}function Lp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Ml(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Np(e,n,a,o){n.value=a,n.getSnapshot=o,Pp(n)&&zp(e)}function Op(e,n,a){return a(function(){Pp(n)&&zp(e)})}function Pp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function zp(e){var n=oa(e,2);n!==null&&On(n,e,2)}function Ru(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),Qa){ae(!0);try{a()}finally{ae(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:e},n}function Bp(e,n,a,o){return e.baseState=a,bu(e,Ne,typeof o=="function"?o:zi)}function sS(e,n,a,o,c){if(Rl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};C.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Fp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Fp(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=C.T,x={};C.T=x;try{var b=a(c,o),N=C.S;N!==null&&N(x,b),Ip(e,n,b)}catch(k){Cu(e,n,k)}finally{C.T=f}}else try{f=a(c,o),Ip(e,n,f)}catch(k){Cu(e,n,k)}}function Ip(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Hp(e,n,o)},function(o){return Cu(e,n,o)}):Hp(e,n,a)}function Hp(e,n,a){n.status="fulfilled",n.value=a,Gp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Fp(e,a)))}function Cu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Gp(n),n=n.next;while(n!==o)}e.action=null}function Gp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Vp(e,n){return n}function kp(e,n){if(Ae){var a=Ie.formState;if(a!==null){t:{var o=he;if(Ae){if(xn){e:{for(var c=xn,f=Mi;c.nodeType!==8;){if(!f){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){xn=hi(c.nextSibling),o=c.data==="F!";break t}}ja(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vp,lastRenderedState:n},a.queue=o,a=om.bind(null,he,o),o.dispatch=a,o=Ru(!1),f=Ou.bind(null,he,!1,o.queue),o=Fn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=sS.bind(null,he,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Xp(e){var n=tn();return Wp(n,Ne,e)}function Wp(e,n,a){n=bu(e,n,Vp)[0],e=Tl(zi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?oo(n):n;var o=tn(),c=o.queue,f=c.dispatch;return a!==o.memoizedState&&(he.flags|=2048,Yr(9,oS.bind(null,c,a),{destroy:void 0},null)),[n,f,e]}function oS(e,n){e.action=n}function Yp(e){var n=tn(),a=Ne;if(a!==null)return Wp(n,a,e);tn(),n=n.memoizedState,a=tn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Yr(e,n,a,o){return e={tag:e,create:n,inst:a,deps:o,next:null},n=he.updateQueue,n===null&&(n=Ml(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function qp(){return tn().memoizedState}function bl(e,n,a,o){var c=Fn();he.flags|=e,c.memoizedState=Yr(1|n,a,{destroy:void 0},o===void 0?null:o)}function Al(e,n,a,o){var c=tn();o=o===void 0?null:o;var f=c.memoizedState.inst;Ne!==null&&o!==null&&Su(o,Ne.memoizedState.deps)?c.memoizedState=Yr(n,a,f,o):(he.flags|=e,c.memoizedState=Yr(1|n,a,f,o))}function jp(e,n){bl(8390656,8,e,n)}function wu(e,n){Al(2048,8,e,n)}function Zp(e,n){return Al(4,2,e,n)}function Kp(e,n){return Al(4,4,e,n)}function Qp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Jp(e,n,a){a=a!=null?a.concat([e]):null,Al(4,4,Qp.bind(null,n,e),a)}function Du(){}function $p(e,n){var a=tn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Su(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function tm(e,n){var a=tn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Su(n,o[1]))return o[0];if(o=e(),Qa){ae(!0);try{e()}finally{ae(!1)}}return a.memoizedState=[o,n],o}function Uu(e,n,a){return a===void 0||ua&1073741824?e.memoizedState=n:(e.memoizedState=a,e=n_(),he.lanes|=e,xa|=e,a)}function em(e,n,a,o){return kn(a,n)?a:Gr.current!==null?(e=Uu(e,a,o),kn(e,n)||(mn=!0),e):ua&42?(e=n_(),he.lanes|=e,xa|=e,n):(mn=!0,e.memoizedState=a)}function nm(e,n,a,o,c){var f=q.p;q.p=f!==0&&8>f?f:8;var x=C.T,b={};C.T=b,Ou(e,!1,n,a);try{var N=c(),k=C.S;if(k!==null&&k(b,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var lt=iS(N,o);lo(e,n,lt,qn(e))}else lo(e,n,o,qn(e))}catch(gt){lo(e,n,{then:function(){},status:"rejected",reason:gt},qn())}finally{q.p=f,C.T=x}}function lS(){}function Lu(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=im(e).queue;nm(e,c,n,ut,a===null?lS:function(){return am(e),a(o)})}function im(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ut,baseState:ut,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:ut},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function am(e){var n=im(e).next.queue;lo(e,n,{},qn())}function Nu(){return bn(wo)}function rm(){return tn().memoizedState}function sm(){return tn().memoizedState}function cS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();e=pa(a);var o=ma(n,e,a);o!==null&&(On(o,n,a),fo(o,n,a)),n={cache:_u()},e.payload=n;return}n=n.return}}function uS(e,n,a){var o=qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Rl(e)?lm(n,a):(a=cu(e,n,a,o),a!==null&&(On(a,e,o),cm(a,n,o)))}function om(e,n,a){var o=qn();lo(e,n,a,o)}function lo(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rl(e))lm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,b=f(x,a);if(c.hasEagerState=!0,c.eagerState=b,kn(b,x))return ul(e,n,c,0),Ie===null&&cl(),!1}catch{}finally{}if(a=cu(e,n,c,o),a!==null)return On(a,e,o),cm(a,n,o),!0}return!1}function Ou(e,n,a,o){if(o={lane:2,revertLane:Tf(),action:o,hasEagerState:!1,eagerState:null,next:null},Rl(e)){if(n)throw Error(r(479))}else n=cu(e,a,o,2),n!==null&&On(n,e,2)}function Rl(e){var n=e.alternate;return e===he||n!==null&&n===he}function lm(e,n){Xr=xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function cm(e,n,a){if(a&4194176){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,xi(e,a)}}var Ti={readContext:bn,use:El,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe};Ti.useCacheRefresh=Qe,Ti.useMemoCache=Qe,Ti.useHostTransitionStatus=Qe,Ti.useFormState=Qe,Ti.useActionState=Qe,Ti.useOptimistic=Qe;var Ja={readContext:bn,use:El,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:bn,useEffect:jp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,bl(4194308,4,Qp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return bl(4194308,4,e,n)},useInsertionEffect:function(e,n){bl(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var o=e();if(Qa){ae(!0);try{e()}finally{ae(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Fn();if(a!==void 0){var c=a(n);if(Qa){ae(!0);try{a(n)}finally{ae(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=uS.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ru(e);var n=e.queue,a=om.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Du,useDeferredValue:function(e,n){var a=Fn();return Uu(a,e,n)},useTransition:function(){var e=Ru(!1);return e=nm.bind(null,he,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=he,c=Fn();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ie===null)throw Error(r(349));Me&60||Lp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,jp(Op.bind(null,o,f,e),[e]),o.flags|=2048,Yr(9,Np.bind(null,o,f,a,n),{destroy:void 0},null),a},useId:function(){var e=Fn(),n=Ie.identifierPrefix;if(Ae){var a=Oi,o=Ni;a=(o&~(1<<32-$t(o)-1)).toString(32)+a,n=":"+n+"R"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=aS++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Fn().memoizedState=cS.bind(null,he)}};Ja.useMemoCache=Tu,Ja.useHostTransitionStatus=Nu,Ja.useFormState=kp,Ja.useActionState=kp,Ja.useOptimistic=function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ou.bind(null,he,!0,a),a.dispatch=n,[e,n]};var fa={readContext:bn,use:El,useCallback:$p,useContext:bn,useEffect:wu,useImperativeHandle:Jp,useInsertionEffect:Zp,useLayoutEffect:Kp,useMemo:tm,useReducer:Tl,useRef:qp,useState:function(){return Tl(zi)},useDebugValue:Du,useDeferredValue:function(e,n){var a=tn();return em(a,Ne.memoizedState,e,n)},useTransition:function(){var e=Tl(zi)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Up,useId:rm};fa.useCacheRefresh=sm,fa.useMemoCache=Tu,fa.useHostTransitionStatus=Nu,fa.useFormState=Xp,fa.useActionState=Xp,fa.useOptimistic=function(e,n){var a=tn();return Bp(a,Ne,e,n)};var $a={readContext:bn,use:El,useCallback:$p,useContext:bn,useEffect:wu,useImperativeHandle:Jp,useInsertionEffect:Zp,useLayoutEffect:Kp,useMemo:tm,useReducer:Au,useRef:qp,useState:function(){return Au(zi)},useDebugValue:Du,useDeferredValue:function(e,n){var a=tn();return Ne===null?Uu(a,e,n):em(a,Ne.memoizedState,e,n)},useTransition:function(){var e=Au(zi)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Up,useId:rm};$a.useCacheRefresh=sm,$a.useMemoCache=Tu,$a.useHostTransitionStatus=Nu,$a.useFormState=Yp,$a.useActionState=Yp,$a.useOptimistic=function(e,n){var a=tn();return Ne!==null?Bp(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])};function Pu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:R({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var zu={isMounted:function(e){return(e=e._reactInternals)?j(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var o=qn(),c=pa(o);c.payload=n,a!=null&&(c.callback=a),n=ma(e,c,o),n!==null&&(On(n,e,o),fo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=qn(),c=pa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ma(e,c,o),n!==null&&(On(n,e,o),fo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=qn(),o=pa(a);o.tag=2,n!=null&&(o.callback=n),n=ma(e,o,a),n!==null&&(On(n,e,a),fo(n,e,a))}};function um(e,n,a,o,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!Zs(a,o)||!Zs(c,f):!0}function fm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&zu.enqueueReplaceState(n,n.state,null)}function tr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=R({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function hm(e){Cl(e)}function dm(e){console.error(e)}function pm(e){Cl(e)}function wl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function mm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Bu(e,n,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(e,n)},a}function _m(e){return e=pa(e),e.tag=3,e}function gm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){mm(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){mm(n,a,o),typeof c!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function fS(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&uo(n,a,c,!0),a=ti.current,a!==null){switch(a.tag){case 13:return Ei===null?Sf():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===du?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),yf(e,o,c)),!1;case 22:return a.flags|=65536,o===du?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),yf(e,o,c)),!1}throw Error(r(435,a.tag))}return yf(e,o,c),Sf(),!1}if(Ae)return n=ti.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==hu&&(e=Error(r(422),{cause:o}),$s(Qn(e,a)))):(o!==hu&&(n=Error(r(423),{cause:o}),$s(Qn(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Qn(o,a),c=Bu(e.stateNode,o,c),Ju(e,c),Ye!==4&&(Ye=2)),!1;var f=Error(r(520),{cause:o});if(f=Qn(f,a),xo===null?xo=[f]:xo.push(f),Ye!==4&&(Ye=2),n===null)return!0;o=Qn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Bu(a.stateNode,o,e),Ju(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ya===null||!ya.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=_m(c),gm(c,e,a,o),Ju(a,c),!1}a=a.return}while(a!==null);return!1}var vm=Error(r(461)),mn=!1;function yn(e,n,a,o){n.child=e===null?Ep(n,null,a,o):Za(n,e.child,a,o)}function Sm(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var b in o)b!=="ref"&&(x[b]=o[b])}else x=o;return nr(n),o=xu(e,n,a,x,f,c),b=yu(),e!==null&&!mn?(Mu(e,n,c),Bi(e,n,c)):(Ae&&b&&uu(n),n.flags|=1,yn(e,n,o,c),n.child)}function xm(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!of(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,ym(e,n,f,o,c)):(e=Ol(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Yu(e,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zs,a(x,o)&&e.ref===n.ref)return Bi(e,n,c)}return n.flags|=1,e=Sa(f,o),e.ref=n.ref,e.return=n,n.child=e}function ym(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(Zs(f,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=f,Yu(e,c))e.flags&131072&&(mn=!0);else return n.lanes=e.lanes,Bi(e,n,c)}return Fu(e,n,a,o,c)}function Mm(e,n,a){var o=n.pendingProps,c=o.children,f=(n.stateNode._pendingVisibility&2)!==0,x=e!==null?e.memoizedState:null;if(co(e,n),o.mode==="hidden"||f){if(n.flags&128){if(o=x!==null?x.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Em(e,n,o,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sl(n,x!==null?x.cachePool:null),x!==null?Tp(n,x):pu(),bp(n);else return n.lanes=n.childLanes=536870912,Em(e,n,x!==null?x.baseLanes|a:a,a)}else x!==null?(Sl(n,x.cachePool),Tp(n,x),ca(),n.memoizedState=null):(e!==null&&Sl(n,null),pu(),ca());return yn(e,n,c,a),n.child}function Em(e,n,a,o){var c=vu();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Sl(n,null),pu(),bp(n),e!==null&&uo(e,n,o,!0),null}function co(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function Fu(e,n,a,o,c){return nr(n),a=xu(e,n,a,o,void 0,c),o=yu(),e!==null&&!mn?(Mu(e,n,c),Bi(e,n,c)):(Ae&&o&&uu(n),n.flags|=1,yn(e,n,a,c),n.child)}function Tm(e,n,a,o,c,f){return nr(n),n.updateQueue=null,a=Dp(n,o,a,c),wp(e),o=yu(),e!==null&&!mn?(Mu(e,n,f),Bi(e,n,f)):(Ae&&o&&uu(n),n.flags|=1,yn(e,n,a,f),n.child)}function bm(e,n,a,o,c){if(nr(n),n.stateNode===null){var f=Br,x=a.contextType;typeof x=="object"&&x!==null&&(f=bn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ku(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?bn(x):Br,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Pu(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&zu.enqueueReplaceState(f,f.state,null),po(n,o,f,c),ho(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,N=tr(a,b);f.props=N;var k=f.context,lt=a.contextType;x=Br,typeof lt=="object"&&lt!==null&&(x=bn(lt));var gt=a.getDerivedStateFromProps;lt=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,lt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||k!==x)&&fm(n,f,o,x),da=!1;var $=n.memoizedState;f.state=$,po(n,o,f,c),ho(),k=n.memoizedState,b||$!==k||da?(typeof gt=="function"&&(Pu(n,a,gt,o),k=n.memoizedState),(N=da||um(n,a,N,o,$,k,x))?(lt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=k),f.props=o,f.state=k,f.context=x,o=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Qu(e,n),x=n.memoizedProps,lt=tr(a,x),f.props=lt,gt=n.pendingProps,$=f.context,k=a.contextType,N=Br,typeof k=="object"&&k!==null&&(N=bn(k)),b=a.getDerivedStateFromProps,(k=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==gt||$!==N)&&fm(n,f,o,N),da=!1,$=n.memoizedState,f.state=$,po(n,o,f,c),ho();var ot=n.memoizedState;x!==gt||$!==ot||da||e!==null&&e.dependencies!==null&&Dl(e.dependencies)?(typeof b=="function"&&(Pu(n,a,b,o),ot=n.memoizedState),(lt=da||um(n,a,lt,o,$,ot,N)||e!==null&&e.dependencies!==null&&Dl(e.dependencies))?(k||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ot,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ot,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),f.props=o,f.state=ot,f.context=N,o=lt):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,co(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Za(n,e.child,null,c),n.child=Za(n,null,a,c)):yn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Bi(e,n,c),e}function Am(e,n,a,o){return Js(),n.flags|=256,yn(e,n,a,o),n.child}var Iu={dehydrated:null,treeContext:null,retryLane:0};function Hu(e){return{baseLanes:e,cachePool:Cp()}}function Gu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function Rm(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(c?la(n):ca(),Ae){var b=xn,N;if(N=b){t:{for(N=b,b=Mi;N.nodeType!==8;){if(!b){b=null;break t}if(N=hi(N.nextSibling),N===null){b=null;break t}}b=N}b!==null?(n.memoizedState={dehydrated:b,treeContext:Ya!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912},N=ii(18,null,null,0),N.stateNode=b,N.return=n,n.child=N,Nn=n,xn=null,N=!0):N=!1}N||ja(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return b.data==="$!"?n.lanes=16:n.lanes=536870912,null;Pi(n)}return b=o.children,o=o.fallback,c?(ca(),c=n.mode,b=ku({mode:"hidden",children:b},c),o=ar(o,c,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,c=n.child,c.memoizedState=Hu(a),c.childLanes=Gu(e,x,a),n.memoizedState=Iu,o):(la(n),Vu(n,b))}if(N=e.memoizedState,N!==null&&(b=N.dehydrated,b!==null)){if(f)n.flags&256?(la(n),n.flags&=-257,n=Xu(e,n,a)):n.memoizedState!==null?(ca(),n.child=e.child,n.flags|=128,n=null):(ca(),c=o.fallback,b=n.mode,o=ku({mode:"visible",children:o.children},b),c=ar(c,b,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Za(n,e.child,null,a),o=n.child,o.memoizedState=Hu(a),o.childLanes=Gu(e,x,a),n.memoizedState=Iu,n=c);else if(la(n),b.data==="$!"){if(x=b.nextSibling&&b.nextSibling.dataset,x)var k=x.dgst;x=k,o=Error(r(419)),o.stack="",o.digest=x,$s({value:o,source:null,stack:null}),n=Xu(e,n,a)}else if(mn||uo(e,n,a,!1),x=(a&e.childLanes)!==0,mn||x){if(x=Ie,x!==null){if(o=a&-a,o&42)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=o&(x.suspendedLanes|a)?0:o,o!==0&&o!==N.retryLane)throw N.retryLane=o,oa(e,o),On(x,e,o),vm}b.data==="$?"||Sf(),n=Xu(e,n,a)}else b.data==="$?"?(n.flags|=128,n.child=e.child,n=AS.bind(null,e),b._reactRetry=n,n=null):(e=N.treeContext,xn=hi(b.nextSibling),Nn=n,Ae=!0,ui=null,Mi=!1,e!==null&&(Jn[$n++]=Ni,Jn[$n++]=Oi,Jn[$n++]=Ya,Ni=e.id,Oi=e.overflow,Ya=n),n=Vu(n,o.children),n.flags|=4096);return n}return c?(ca(),c=o.fallback,b=n.mode,N=e.child,k=N.sibling,o=Sa(N,{mode:"hidden",children:o.children}),o.subtreeFlags=N.subtreeFlags&31457280,k!==null?c=Sa(k,c):(c=ar(c,b,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,b=e.child.memoizedState,b===null?b=Hu(a):(N=b.cachePool,N!==null?(k=un._currentValue,N=N.parent!==k?{parent:k,pool:k}:N):N=Cp(),b={baseLanes:b.baseLanes|a,cachePool:N}),c.memoizedState=b,c.childLanes=Gu(e,x,a),n.memoizedState=Iu,o):(la(n),a=e.child,e=a.sibling,a=Sa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Vu(e,n){return n=ku({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ku(e,n){return $m(e,n,0,null)}function Xu(e,n,a){return Za(n,e.child,null,a),e=Vu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Cm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ju(e.return,n,a)}function Wu(e,n,a,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function wm(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(yn(e,n,o.children,a),o=cn.current,o&2)o=o&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cm(e,a,n);else if(e.tag===19)Cm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(kt(cn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&vl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Wu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&vl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Wu(n,!0,a,null,f);break;case"together":Wu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Bi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),xa|=n.lanes,!(a&n.childLanes))if(e!==null){if(uo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Sa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Sa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Yu(e,n){return e.lanes&n?!0:(e=e.dependencies,!!(e!==null&&Dl(e)))}function hS(e,n,a){switch(n.tag){case 3:Sn(n,n.stateNode.containerInfo),ha(n,un,e.memoizedState.cache),Js();break;case 27:case 5:de(n);break;case 4:Sn(n,n.stateNode.containerInfo);break;case 10:ha(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(la(n),n.flags|=128,null):a&n.child.childLanes?Rm(e,n,a):(la(n),e=Bi(e,n,a),e!==null?e.sibling:null);la(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(uo(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return wm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),kt(cn,cn.current),o)break;return null;case 22:case 23:return n.lanes=0,Mm(e,n,a);case 24:ha(n,un,e.memoizedState.cache)}return Bi(e,n,a)}function Dm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!Yu(e,a)&&!(n.flags&128))return mn=!1,hS(e,n,a);mn=!!(e.flags&131072)}else mn=!1,Ae&&n.flags&1048576&&pp(n,dl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")of(o)?(e=tr(o,e),n.tag=1,n=bm(null,n,o,e,a)):(n.tag=0,n=Fu(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===T){n.tag=11,n=Sm(null,n,o,e,a);break t}else if(c===v){n.tag=14,n=xm(null,n,o,e,a);break t}}throw n=K(o)||o,Error(r(306,n,""))}}return n;case 0:return Fu(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=tr(o,n.pendingProps),bm(e,n,o,c,a);case 3:t:{if(Sn(n,n.stateNode.containerInfo),e===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,o=c.element,Qu(e,n),po(n,f,null,a);var x=n.memoizedState;if(f=x.cache,ha(n,un,f),f!==c.cache&&Zu(n,[un],a,!0),ho(),f=x.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Am(e,n,f,a);break t}else if(f!==o){o=Qn(Error(r(424)),n),$s(o),n=Am(e,n,f,a);break t}else for(xn=hi(n.stateNode.containerInfo.firstChild),Nn=n,Ae=!0,ui=null,Mi=!0,a=Ep(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Js(),f===o){n=Bi(e,n,a);break t}yn(e,n,f,a)}n=n.child}return n;case 26:return co(e,n),e===null?(a=N_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=Yl(De.current).createElement(a),o[sn]=n,o[on]=e,Mn(o,a,e),V(o),n.stateNode=o):n.memoizedState=N_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return de(n),e===null&&Ae&&(o=n.stateNode=D_(n.type,n.pendingProps,De.current),Nn=n,Mi=!0,xn=hi(o.firstChild)),o=n.pendingProps.children,e!==null||Ae?yn(e,n,o,a):n.child=Za(n,null,o,a),co(e,n),n.child;case 5:return e===null&&Ae&&((c=o=xn)&&(o=VS(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Nn=n,xn=hi(o.firstChild),Mi=!1,c=!0):c=!1),c||ja(n)),de(n),c=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,o=f.children,Nf(c,f)?o=null:x!==null&&Nf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=xu(e,n,rS,null,null,a),wo._currentValue=c),co(e,n),yn(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=xn)&&(a=kS(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Nn=n,xn=null,e=!0):e=!1),e||ja(n)),null;case 13:return Rm(e,n,a);case 4:return Sn(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Za(n,null,o,a):yn(e,n,o,a),n.child;case 11:return Sm(e,n,n.type,n.pendingProps,a);case 7:return yn(e,n,n.pendingProps,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ha(n,n.type,o.value),yn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,nr(n),c=bn(c),o=o(c),n.flags|=1,yn(e,n,o,a),n.child;case 14:return xm(e,n,n.type,n.pendingProps,a);case 15:return ym(e,n,n.type,n.pendingProps,a);case 19:return wm(e,n,a);case 22:return Mm(e,n,a);case 24:return nr(n),o=bn(un),e===null?(c=vu(),c===null&&(c=Ie,f=_u(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Ku(n),ha(n,un,c)):(e.lanes&a&&(Qu(e,n),po(n,null,null,a),ho()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ha(n,un,o)):(o=f.cache,ha(n,un,o),o!==c.cache&&Zu(n,[un],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var qu=Rt(null),er=null,Fi=null;function ha(e,n,a){kt(qu,n._currentValue),n._currentValue=a}function Ii(e){e._currentValue=qu.current,Vt(qu)}function ju(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Zu(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var N=0;N<n.length;N++)if(b.context===n[N]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),ju(f.return,a,e),o||(x=null);break t}f=b.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),ju(x,a,e),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function uo(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if(c.flags&524288)f=!0;else if(c.flags&262144)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var b=c.type;kn(c.pendingProps.value,x.value)||(e!==null?e.push(b):e=[b])}}else if(c===z.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}c=c.return}e!==null&&Zu(n,e,a,o),n.flags|=262144}function Dl(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nr(e){er=e,Fi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return Um(er,e)}function Ul(e,n){return er===null&&nr(e),Um(e,n)}function Um(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(e===null)throw Error(r(308));Fi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Fi=Fi.next=n;return a}var da=!1;function Ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ma(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,Xe&2){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=fl(e),hp(e,null,a),n}return ul(e,o,n,a),fl(e)}function fo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,xi(e,a)}}function Ju(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var $u=!1;function ho(){if($u){var e=kr;if(e!==null)throw e}}function po(e,n,a,o){$u=!1;var c=e.updateQueue;da=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var N=b,k=N.next;N.next=null,x===null?f=k:x.next=k,x=N;var lt=e.alternate;lt!==null&&(lt=lt.updateQueue,b=lt.lastBaseUpdate,b!==x&&(b===null?lt.firstBaseUpdate=k:b.next=k,lt.lastBaseUpdate=N))}if(f!==null){var gt=c.baseState;x=0,lt=k=N=null,b=f;do{var $=b.lane&-536870913,ot=$!==b.lane;if(ot?(Me&$)===$:(o&$)===$){$!==0&&$===Vr&&($u=!0),lt!==null&&(lt=lt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Yt=e,ie=b;$=n;var qe=a;switch(ie.tag){case 1:if(Yt=ie.payload,typeof Yt=="function"){gt=Yt.call(qe,gt,$);break t}gt=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=ie.payload,$=typeof Yt=="function"?Yt.call(qe,gt,$):Yt,$==null)break t;gt=R({},gt,$);break t;case 2:da=!0}}$=b.callback,$!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[$]:ot.push($))}else ot={lane:$,tag:b.tag,payload:b.payload,callback:b.callback,next:null},lt===null?(k=lt=ot,N=gt):lt=lt.next=ot,x|=$;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ot=b,b=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);lt===null&&(N=gt),c.baseState=N,c.firstBaseUpdate=k,c.lastBaseUpdate=lt,f===null&&(c.shared.lanes=0),xa|=x,e.lanes=x,e.memoizedState=gt}}function Lm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Nm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Lm(a[e],n)}function mo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==c)}}catch(b){Fe(n,n.return,b)}}function _a(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var x=o.inst,b=x.destroy;if(b!==void 0){x.destroy=void 0,c=n;var N=a;try{b()}catch(k){Fe(c,N,k)}}}o=o.next}while(o!==f)}}catch(k){Fe(n,n.return,k)}}function Om(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Nm(n,a)}catch(o){Fe(e,e.return,o)}}}function Pm(e,n,a){a.props=tr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function ir(e,n){try{var a=e.ref;if(a!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=o;break;default:c=o}typeof a=="function"?e.refCleanup=a(c):a.current=c}}catch(f){Fe(e,n,f)}}function Xn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Fe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Fe(e,n,c)}else a.current=null}function zm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Fe(e,e.return,c)}}function Bm(e,n,a){try{var o=e.stateNode;BS(o,e.type,a,n),o[on]=n}catch(c){Fe(e,e.return,c)}}function Fm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function tf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Fm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ef(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wl));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(ef(e,n,a),e=e.sibling;e!==null;)ef(e,n,a),e=e.sibling}function Ll(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Ll(e,n,a),e=e.sibling;e!==null;)Ll(e,n,a),e=e.sibling}var Hi=!1,We=!1,nf=!1,Im=typeof WeakSet=="function"?WeakSet:Set,_n=null,Hm=!1;function dS(e,n){if(e=e.containerInfo,Uf=Jl,e=ip(e),au(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,b=-1,N=-1,k=0,lt=0,gt=e,$=null;e:for(;;){for(var ot;gt!==a||c!==0&&gt.nodeType!==3||(b=x+c),gt!==f||o!==0&&gt.nodeType!==3||(N=x+o),gt.nodeType===3&&(x+=gt.nodeValue.length),(ot=gt.firstChild)!==null;)$=gt,gt=ot;for(;;){if(gt===e)break e;if($===a&&++k===c&&(b=x),$===f&&++lt===o&&(N=x),(ot=gt.nextSibling)!==null)break;gt=$,$=gt.parentNode}gt=ot}a=b===-1||N===-1?null:{start:b,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lf={focusedElem:e,selectionRange:a},Jl=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Yt=tr(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(Yt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Fe(a,a.return,ie)}}break;case 3:if(e&1024){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)zf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}return Yt=Hm,Hm=!1,Yt}function Gm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Vi(e,a),o&4&&mo(5,a);break;case 1:if(Vi(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(b){Fe(a,a.return,b)}else{var c=tr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Fe(a,a.return,b)}}o&64&&Om(a),o&512&&ir(a,a.return);break;case 3:if(Vi(e,a),o&64&&(o=a.updateQueue,o!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Nm(o,e)}catch(b){Fe(a,a.return,b)}}break;case 26:Vi(e,a),o&512&&ir(a,a.return);break;case 27:case 5:Vi(e,a),n===null&&o&4&&zm(a),o&512&&ir(a,a.return);break;case 12:Vi(e,a);break;case 13:Vi(e,a),o&4&&Xm(e,a);break;case 22:if(c=a.memoizedState!==null||Hi,!c){n=n!==null&&n.memoizedState!==null||We;var f=Hi,x=We;Hi=c,(We=n)&&!x?ga(e,a,(a.subtreeFlags&8772)!==0):Vi(e,a),Hi=f,We=x}o&512&&(a.memoizedProps.mode==="manual"?ir(a,a.return):Xn(a,a.return));break;default:Vi(e,a)}}function Vm(e){var n=e.alternate;n!==null&&(e.alternate=null,Vm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Gs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,Wn=!1;function Gi(e,n,a){for(a=a.child;a!==null;)km(e,n,a),a=a.sibling}function km(e,n,a){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Kt,a)}catch{}switch(a.tag){case 26:We||Xn(a,n),Gi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:We||Xn(a,n);var o=en,c=Wn;for(en=a.stateNode,Gi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Gs(a),en=o,Wn=c;break;case 5:We||Xn(a,n);case 6:c=en;var f=Wn;if(en=null,Gi(e,n,a),en=c,Wn=f,en!==null)if(Wn)try{e=en,o=a.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(x){Fe(a,n,x)}else try{en.removeChild(a.stateNode)}catch(x){Fe(a,n,x)}break;case 18:en!==null&&(Wn?(n=en,a=a.stateNode,n.nodeType===8?Pf(n.parentNode,a):n.nodeType===1&&Pf(n,a),No(n)):Pf(en,a.stateNode));break;case 4:o=en,c=Wn,en=a.stateNode.containerInfo,Wn=!0,Gi(e,n,a),en=o,Wn=c;break;case 0:case 11:case 14:case 15:We||_a(2,a,n),We||_a(4,a,n),Gi(e,n,a);break;case 1:We||(Xn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Pm(a,n,o)),Gi(e,n,a);break;case 21:Gi(e,n,a);break;case 22:We||Xn(a,n),We=(o=We)||a.memoizedState!==null,Gi(e,n,a),We=o;break;default:Gi(e,n,a)}}function Xm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{No(e)}catch(a){Fe(n,n.return,a)}}function pS(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Im),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Im),n;default:throw Error(r(435,e.tag))}}function af(e,n){var a=pS(e);n.forEach(function(o){var c=RS.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function ei(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,x=n,b=x;t:for(;b!==null;){switch(b.tag){case 27:case 5:en=b.stateNode,Wn=!1;break t;case 3:en=b.stateNode.containerInfo,Wn=!0;break t;case 4:en=b.stateNode.containerInfo,Wn=!0;break t}b=b.return}if(en===null)throw Error(r(160));km(f,x,c),en=null,Wn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Wm(n,e),n=n.sibling}var fi=null;function Wm(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ei(n,e),ni(e),o&4&&(_a(3,e,e.return),mo(3,e),_a(5,e,e.return));break;case 1:ei(n,e),ni(e),o&512&&(We||a===null||Xn(a,a.return)),o&64&&Hi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=fi;if(ei(n,e),ni(e),o&512&&(We||a===null||Xn(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ga]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,o,a),f[sn]=e,V(f),o=f;break t;case"link":var x=z_("link","href",c).get(o+(a.href||""));if(x){for(var b=0;b<x.length;b++)if(f=x[b],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(b,1);break e}}f=c.createElement(o),Mn(f,o,a),c.head.appendChild(f);break;case"meta":if(x=z_("meta","content",c).get(o+(a.content||""))){for(b=0;b<x.length;b++)if(f=x[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(b,1);break e}}f=c.createElement(o),Mn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[sn]=e,V(f),o=f}e.stateNode=o}else B_(c,e.type,e.stateNode);else e.stateNode=P_(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?B_(c,e.type,e.stateNode):P_(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Bm(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){c=e.stateNode,f=e.memoizedProps;try{for(var N=c.firstChild;N;){var k=N.nextSibling,lt=N.nodeName;N[Ga]||lt==="HEAD"||lt==="BODY"||lt==="SCRIPT"||lt==="STYLE"||lt==="LINK"&&N.rel.toLowerCase()==="stylesheet"||c.removeChild(N),N=k}for(var gt=e.type,$=c.attributes;$.length;)c.removeAttributeNode($[0]);Mn(c,gt,f),c[sn]=e,c[on]=f}catch(Yt){Fe(e,e.return,Yt)}}case 5:if(ei(n,e),ni(e),o&512&&(We||a===null||Xn(a,a.return)),e.flags&32){c=e.stateNode;try{Dr(c,"")}catch(Yt){Fe(e,e.return,Yt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Bm(e,c,a!==null?a.memoizedProps:c)),o&1024&&(nf=!0);break;case 6:if(ei(n,e),ni(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Yt){Fe(e,e.return,Yt)}}break;case 3:if(Zl=null,c=fi,fi=ql(n.containerInfo),ei(n,e),fi=c,ni(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{No(n.containerInfo)}catch(Yt){Fe(e,e.return,Yt)}nf&&(nf=!1,Ym(e));break;case 4:o=fi,fi=ql(e.stateNode.containerInfo),ei(n,e),ni(e),fi=o;break;case 12:ei(n,e),ni(e);break;case 13:ei(n,e),ni(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(df=ft()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,af(e,o)));break;case 22:if(o&512&&(We||a===null||Xn(a,a.return)),N=e.memoizedState!==null,k=a!==null&&a.memoizedState!==null,lt=Hi,gt=We,Hi=lt||N,We=gt||k,ei(n,e),We=gt,Hi=lt,ni(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=N?n._visibility&-2:n._visibility|1,N&&(n=Hi||We,a===null||k||n||qr(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){k=a=n;try{if(c=k.stateNode,N)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{x=k.stateNode,b=k.memoizedProps.style;var ot=b!=null&&b.hasOwnProperty("display")?b.display:null;x.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Yt){Fe(k,k.return,Yt)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=N?"":k.memoizedProps}catch(Yt){Fe(k,k.return,Yt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,af(e,a))));break;case 19:ei(n,e),ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,af(e,o)));break;case 21:break;default:ei(n,e),ni(e)}}function ni(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(Fm(a)){var o=a;break t}a=a.return}throw Error(r(160))}switch(o.tag){case 27:var c=o.stateNode,f=tf(e);Ll(e,f,c);break;case 5:var x=o.stateNode;o.flags&32&&(Dr(x,""),o.flags&=-33);var b=tf(e);Ll(e,b,x);break;case 3:case 4:var N=o.stateNode.containerInfo,k=tf(e);ef(e,k,N);break;default:throw Error(r(161))}}}catch(lt){Fe(e,e.return,lt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ym(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ym(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Vi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Gm(e,n.alternate,n),n=n.sibling}function qr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),qr(n);break;case 1:Xn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Pm(n,n.return,a),qr(n);break;case 26:case 27:case 5:Xn(n,n.return),qr(n);break;case 22:Xn(n,n.return),n.memoizedState===null&&qr(n);break;default:qr(n)}e=e.sibling}}function ga(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ga(c,f,a),mo(4,f);break;case 1:if(ga(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(k){Fe(o,o.return,k)}if(o=f,c=o.updateQueue,c!==null){var b=o.stateNode;try{var N=c.shared.hiddenCallbacks;if(N!==null)for(c.shared.hiddenCallbacks=null,c=0;c<N.length;c++)Lm(N[c],b)}catch(k){Fe(o,o.return,k)}}a&&x&64&&Om(f),ir(f,f.return);break;case 26:case 27:case 5:ga(c,f,a),a&&o===null&&x&4&&zm(f),ir(f,f.return);break;case 12:ga(c,f,a);break;case 13:ga(c,f,a),a&&x&4&&Xm(c,f);break;case 22:f.memoizedState===null&&ga(c,f,a),ir(f,f.return);break;default:ga(c,f,a)}n=n.sibling}}function rf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ao(a))}function sf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e))}function va(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qm(e,n,a,o),n=n.sibling}function qm(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:va(e,n,a,o),c&2048&&mo(9,n);break;case 3:va(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e)));break;case 12:if(c&2048){va(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,b=f.onPostCommit;typeof b=="function"&&b(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){Fe(n,n.return,N)}}else va(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?va(e,n,a,o):_o(e,n):f._visibility&4?va(e,n,a,o):(f._visibility|=4,jr(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&rf(n.alternate,n);break;case 24:va(e,n,a,o),c&2048&&sf(n.alternate,n);break;default:va(e,n,a,o)}}function jr(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,x=n,b=a,N=o,k=x.flags;switch(x.tag){case 0:case 11:case 15:jr(f,x,b,N,c),mo(8,x);break;case 23:break;case 22:var lt=x.stateNode;x.memoizedState!==null?lt._visibility&4?jr(f,x,b,N,c):_o(f,x):(lt._visibility|=4,jr(f,x,b,N,c)),c&&k&2048&&rf(x.alternate,x);break;case 24:jr(f,x,b,N,c),c&&k&2048&&sf(x.alternate,x);break;default:jr(f,x,b,N,c)}n=n.sibling}}function _o(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:_o(a,o),c&2048&&rf(o.alternate,o);break;case 24:_o(a,o),c&2048&&sf(o.alternate,o);break;default:_o(a,o)}n=n.sibling}}var go=8192;function Zr(e){if(e.subtreeFlags&go)for(e=e.child;e!==null;)jm(e),e=e.sibling}function jm(e){switch(e.tag){case 26:Zr(e),e.flags&go&&e.memoizedState!==null&&nx(fi,e.memoizedState,e.memoizedProps);break;case 5:Zr(e);break;case 3:case 4:var n=fi;fi=ql(e.stateNode.containerInfo),Zr(e),fi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=go,go=16777216,Zr(e),go=n):Zr(e));break;default:Zr(e)}}function Zm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vo(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Qm(o,e)}Zm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Km(e),e=e.sibling}function Km(e){switch(e.tag){case 0:case 11:case 15:vo(e),e.flags&2048&&_a(9,e,e.return);break;case 3:vo(e);break;case 12:vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Nl(e)):vo(e);break;default:vo(e)}}function Nl(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Qm(o,e)}Zm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:_a(8,n,n.return),Nl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,Nl(n));break;default:Nl(n)}e=e.sibling}}function Qm(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ao(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else t:for(a=e;_n!==null;){o=_n;var c=o.sibling,f=o.return;if(Vm(o),o===a){_n=null;break t}if(c!==null){c.return=f,_n=c;break t}_n=f}}}function mS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,n,a,o){return new mS(e,n,a,o)}function of(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sa(e,n){var a=e.alternate;return a===null?(a=ii(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Jm(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ol(e,n,a,o,c,f){var x=0;if(o=e,typeof e=="function")of(e)&&(x=1);else if(typeof e=="string")x=tx(e,a,ye.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return ar(a.children,c,f,n);case m:x=8,c|=24;break;case _:return e=ii(12,a,n,c|2),e.elementType=_,e.lanes=f,e;case w:return e=ii(13,a,n,c),e.elementType=w,e.lanes=f,e;case y:return e=ii(19,a,n,c),e.elementType=y,e.lanes=f,e;case O:return $m(a,c,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case M:x=10;break t;case S:x=9;break t;case T:x=11;break t;case v:x=14;break t;case P:x=16,o=null;break t}x=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=ii(x,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function ar(e,n,a,o){return e=ii(7,e,o,n),e.lanes=a,e}function $m(e,n,a,o){e=ii(22,e,o,n),e.elementType=O,e.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if(!(c._pendingVisibility&2)){var x=oa(f,2);x!==null&&(c._pendingVisibility|=2,On(x,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if(c._pendingVisibility&2){var x=oa(f,2);x!==null&&(c._pendingVisibility&=-3,On(x,f,2))}}};return e.stateNode=c,e}function lf(e,n,a){return e=ii(6,e,null,n),e.lanes=a,e}function cf(e,n,a){return n=ii(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ki(e){e.flags|=4}function t_(e,n){if(n.type!=="stylesheet"||n.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!F_(n)){if(n=ti.current,n!==null&&((Me&4194176)===Me?Ei!==null:(Me&62914560)!==Me&&!(Me&536870912)||n!==Ei))throw eo=du,gp;e.flags|=8192}}function Pl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ee():536870912,e.lanes|=n,Qr|=n)}function So(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&31457280,o|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function _S(e,n,a){var o=n.pendingProps;switch(fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ii(un),se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Qs(n)?ki(n):e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,ui!==null&&(gf(ui),ui=null))),ke(n),null;case 26:return a=n.memoizedState,e===null?(ki(n),a!==null?(ke(n),t_(n,a)):(ke(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ki(n),ke(n),t_(n,a)):(ke(n),n.flags&=-16777217):(e.memoizedProps!==o&&ki(n),ke(n),n.flags&=-16777217),null;case 27:qt(n),a=De.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return ke(n),null}e=ye.current,Qs(n)?mp(n):(e=D_(c,o,a),n.stateNode=e,ki(n))}return ke(n),null;case 5:if(qt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return ke(n),null}if(e=ye.current,Qs(n))mp(n);else{switch(c=Yl(De.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[sn]=n,e[on]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Mn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ki(n)}}return ke(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=De.current,Qs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Nn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||T_(e.nodeValue,a)),e||ja(n)}else e=Yl(e).createTextNode(o),e[sn]=n,n.stateNode=e}return ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Qs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else Js(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ke(n),c=!1}else ui!==null&&(gf(ui),ui=null),c=!0;if(!c)return n.flags&256?(Pi(n),n):(Pi(n),null)}if(Pi(n),n.flags&128)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),ke(n),null;case 4:return se(),e===null&&Cf(n.stateNode.containerInfo),ke(n),null;case 10:return Ii(n.type),ke(n),null;case 19:if(Vt(cn),c=n.memoizedState,c===null)return ke(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)So(c,!1);else{if(Ye!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(f=vl(e),f!==null){for(n.flags|=128,So(c,!1),e=f.updateQueue,n.updateQueue=e,Pl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Jm(a,e),a=a.sibling;return kt(cn,cn.current&1|2),n.child}e=e.sibling}c.tail!==null&&ft()>zl&&(n.flags|=128,o=!0,So(c,!1),n.lanes=4194304)}else{if(!o)if(e=vl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Pl(n,e),So(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ae)return ke(n),null}else 2*ft()-c.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,o=!0,So(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ft(),n.sibling=null,e=cn.current,kt(cn,o?e&1|2:e&1),n):(ke(n),null);case 22:case 23:return Pi(n),mu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?a&536870912&&!(n.flags&128)&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Vt(Ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ii(un),ke(n),null;case 25:return null}throw Error(r(156,n.tag))}function gS(e,n){switch(fu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ii(un),se(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return qt(n),null;case 13:if(Pi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Js()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Vt(cn),null;case 4:return se(),null;case 10:return Ii(n.type),null;case 22:case 23:return Pi(n),mu(),e!==null&&Vt(Ka),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ii(un),null;case 25:return null;default:return null}}function e_(e,n){switch(fu(n),n.tag){case 3:Ii(un),se();break;case 26:case 27:case 5:qt(n);break;case 4:se();break;case 13:Pi(n);break;case 19:Vt(cn);break;case 10:Ii(n.type);break;case 22:case 23:Pi(n),mu(),e!==null&&Vt(Ka);break;case 24:Ii(un)}}var vS={getCacheForType:function(e){var n=bn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},SS=typeof WeakMap=="function"?WeakMap:Map,Xe=0,Ie=null,ge=null,Me=0,He=0,Yn=null,Xi=!1,Kr=!1,uf=!1,Wi=0,Ye=0,xa=0,rr=0,ff=0,ai=0,Qr=0,xo=null,bi=null,hf=!1,df=0,zl=1/0,Bl=null,ya=null,Fl=!1,sr=null,yo=0,pf=0,mf=null,Mo=0,_f=null;function qn(){if(Xe&2&&Me!==0)return Me&-Me;if(C.T!==null){var e=Vr;return e!==0?e:Tf()}return Hs()}function n_(){ai===0&&(ai=!(Me&536870912)||Ae?rn():536870912);var e=ti.current;return e!==null&&(e.flags|=32),ai}function On(e,n,a){(e===Ie&&He===2||e.cancelPendingCommit!==null)&&(Jr(e,0),Yi(e,Me,ai,!1)),Un(e,a),(!(Xe&2)||e!==Ie)&&(e===Ie&&(!(Xe&2)&&(rr|=a),Ye===4&&Yi(e,Me,ai,!1)),Ai(e))}function i_(e,n,a){if(Xe&6)throw Error(r(327));var o=!a&&(n&60)===0&&(n&e.expiredLanes)===0||ee(e,n),c=o?MS(e,n):xf(e,n,!0),f=o;do{if(c===0){Kr&&!o&&Yi(e,n,0,!1);break}else if(c===6)Yi(e,n,0,!Xi);else{if(a=e.current.alternate,f&&!xS(a)){c=xf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var b=e;c=xo;var N=b.current.memoizedState.isDehydrated;if(N&&(Jr(b,x).flags|=256),x=xf(b,x,!1),x!==2){if(uf&&!N){b.errorRecoveryDisabledLanes|=f,rr|=f,c=4;break t}f=bi,bi=c,f!==null&&gf(f)}c=x}if(f=!1,c!==2)continue}}if(c===1){Jr(e,0),Yi(e,n,0,!0);break}t:{switch(o=e,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Yi(o,n,ai,!Xi);break t}break;case 2:bi=null;break;case 3:case 5:break;default:throw Error(r(329))}if(o.finishedWork=a,o.finishedLanes=n,(n&62914560)===n&&(f=df+300-ft(),10<f)){if(Yi(o,n,ai,!Xi),Dt(o,0)!==0)break t;o.timeoutHandle=R_(a_.bind(null,o,a,bi,Bl,hf,n,ai,rr,Qr,Xi,2,-0,0),f);break t}a_(o,a,bi,Bl,hf,n,ai,rr,Qr,Xi,0,-0,0)}}break}while(!0);Ai(e)}function gf(e){bi===null?bi=e:bi.push.apply(bi,e)}function a_(e,n,a,o,c,f,x,b,N,k,lt,gt,$){var ot=n.subtreeFlags;if((ot&8192||(ot&16785408)===16785408)&&(Co={stylesheets:null,count:0,unsuspend:ex},jm(n),n=ix(),n!==null)){e.cancelPendingCommit=n(f_.bind(null,e,a,o,c,x,b,N,1,gt,$)),Yi(e,f,x,!k);return}f_(e,a,o,c,x,b,N,lt,gt,$)}function xS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Yi(e,n,a,o){n&=~ff,n&=~rr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-$t(c),x=1<<f;o[f]=-1,c&=~x}a!==0&&Is(e,a,n)}function Il(){return Xe&6?!0:(Eo(0),!1)}function vf(){if(ge!==null){if(He===0)var e=ge.return;else e=ge,Fi=er=null,Eu(e),Hr=null,no=0,e=ge;for(;e!==null;)e_(e.alternate,e),e=e.return;ge=null}}function Jr(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,IS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),vf(),Ie=e,ge=a=Sa(e.current,null),Me=n,He=0,Yn=null,Xi=!1,Kr=ee(e,n),uf=!1,Qr=ai=ff=rr=xa=Ye=0,bi=xo=null,hf=!1,n&8&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-$t(o),f=1<<c;n|=e[c],o&=~f}return Wi=n,cl(),a}function r_(e,n){he=null,C.H=Ti,n===to?(n=xp(),He=3):n===gp?(n=xp(),He=4):He=n===vm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,ge===null&&(Ye=1,wl(e,Qn(n,e.current)))}function s_(){var e=C.H;return C.H=Ti,e===null?Ti:e}function o_(){var e=C.A;return C.A=vS,e}function Sf(){Ye=4,Xi||(Me&4194176)!==Me&&ti.current!==null||(Kr=!0),!(xa&134217727)&&!(rr&134217727)||Ie===null||Yi(Ie,Me,ai,!1)}function xf(e,n,a){var o=Xe;Xe|=2;var c=s_(),f=o_();(Ie!==e||Me!==n)&&(Bl=null,Jr(e,n)),n=!1;var x=Ye;t:do try{if(He!==0&&ge!==null){var b=ge,N=Yn;switch(He){case 8:vf(),x=6;break t;case 3:case 2:case 6:ti.current===null&&(n=!0);var k=He;if(He=0,Yn=null,$r(e,b,N,k),a&&Kr){x=0;break t}break;default:k=He,He=0,Yn=null,$r(e,b,N,k)}}yS(),x=Ye;break}catch(lt){r_(e,lt)}while(!0);return n&&e.shellSuspendCounter++,Fi=er=null,Xe=o,C.H=c,C.A=f,ge===null&&(Ie=null,Me=0,cl()),x}function yS(){for(;ge!==null;)l_(ge)}function MS(e,n){var a=Xe;Xe|=2;var o=s_(),c=o_();Ie!==e||Me!==n?(Bl=null,zl=ft()+500,Jr(e,n)):Kr=ee(e,n);t:do try{if(He!==0&&ge!==null){n=ge;var f=Yn;e:switch(He){case 1:He=0,Yn=null,$r(e,n,f,1);break;case 2:if(vp(f)){He=0,Yn=null,c_(n);break}n=function(){He===2&&Ie===e&&(He=7),Ai(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:vp(f)?(He=0,Yn=null,c_(n)):(He=0,Yn=null,$r(e,n,f,7));break;case 5:var x=null;switch(ge.tag){case 26:x=ge.memoizedState;case 5:case 27:var b=ge;if(!x||F_(x)){He=0,Yn=null;var N=b.sibling;if(N!==null)ge=N;else{var k=b.return;k!==null?(ge=k,Hl(k)):ge=null}break e}}He=0,Yn=null,$r(e,n,f,5);break;case 6:He=0,Yn=null,$r(e,n,f,6);break;case 8:vf(),Ye=6;break t;default:throw Error(r(462))}}ES();break}catch(lt){r_(e,lt)}while(!0);return Fi=er=null,C.H=o,C.A=c,Xe=a,ge!==null?0:(Ie=null,Me=0,cl(),Ye)}function ES(){for(;ge!==null&&!E();)l_(ge)}function l_(e){var n=Dm(e.alternate,e,Wi);e.memoizedProps=e.pendingProps,n===null?Hl(e):ge=n}function c_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Tm(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Tm(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Eu(n);default:e_(a,n),n=ge=Jm(n,Wi),n=Dm(a,n,Wi)}e.memoizedProps=e.pendingProps,n===null?Hl(e):ge=n}function $r(e,n,a,o){Fi=er=null,Eu(n),Hr=null,no=0;var c=n.return;try{if(fS(e,c,n,a,Me)){Ye=1,wl(e,Qn(a,e.current)),ge=null;return}}catch(f){if(c!==null)throw ge=c,f;Ye=1,wl(e,Qn(a,e.current)),ge=null;return}n.flags&32768?(Ae||o===1?e=!0:Kr||Me&536870912?e=!1:(Xi=e=!0,(o===2||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),u_(n,e)):Hl(n)}function Hl(e){var n=e;do{if(n.flags&32768){u_(n,Xi);return}e=n.return;var a=_S(n.alternate,n,Wi);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);Ye===0&&(Ye=5)}function u_(e,n){do{var a=gS(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);Ye=6,ge=null}function f_(e,n,a,o,c,f,x,b,N,k){var lt=C.T,gt=q.p;try{q.p=2,C.T=null,TS(e,n,a,o,gt,c,f,x,b,N,k)}finally{C.T=lt,q.p=gt}}function TS(e,n,a,o,c,f,x,b){do ts();while(sr!==null);if(Xe&6)throw Error(r(327));var N=e.finishedWork;if(o=e.finishedLanes,N===null)return null;if(e.finishedWork=null,e.finishedLanes=0,N===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var k=N.lanes|N.childLanes;if(k|=lu,$o(e,o,k,f,x,b),e===Ie&&(ge=Ie=null,Me=0),!(N.subtreeFlags&10256)&&!(N.flags&10256)||Fl||(Fl=!0,pf=k,mf=a,CS(wt,function(){return ts(),null})),a=(N.flags&15990)!==0,N.subtreeFlags&15990||a?(a=C.T,C.T=null,f=q.p,q.p=2,x=Xe,Xe|=4,dS(e,N),Wm(N,e),jv(Lf,e.containerInfo),Jl=!!Uf,Lf=Uf=null,e.current=N,Gm(e,N.alternate,N),J(),Xe=x,q.p=f,C.T=a):e.current=N,Fl?(Fl=!1,sr=e,yo=o):h_(e,k),k=e.pendingLanes,k===0&&(ya=null),It(N.stateNode),Ai(e),n!==null)for(c=e.onRecoverableError,N=0;N<n.length;N++)k=n[N],c(k.value,{componentStack:k.stack});return yo&3&&ts(),k=e.pendingLanes,o&4194218&&k&42?e===_f?Mo++:(Mo=0,_f=e):Mo=0,Eo(0),null}function h_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ao(n)))}function ts(){if(sr!==null){var e=sr,n=pf;pf=0;var a=Rr(yo),o=C.T,c=q.p;try{if(q.p=32>a?32:a,C.T=null,sr===null)var f=!1;else{a=mf,mf=null;var x=sr,b=yo;if(sr=null,yo=0,Xe&6)throw Error(r(331));var N=Xe;if(Xe|=4,Km(x.current),qm(x,x.current,b,a),Xe=N,Eo(0,!1),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Kt,x)}catch{}f=!0}return f}finally{q.p=c,C.T=o,h_(e,n)}}return!1}function d_(e,n,a){n=Qn(a,n),n=Bu(e.stateNode,n,2),e=ma(e,n,2),e!==null&&(Un(e,2),Ai(e))}function Fe(e,n,a){if(e.tag===3)d_(e,e,a);else for(;n!==null;){if(n.tag===3){d_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ya===null||!ya.has(o))){e=Qn(a,e),a=_m(2),o=ma(n,a,2),o!==null&&(gm(a,o,n,e),Un(o,2),Ai(o));break}}n=n.return}}function yf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new SS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(uf=!0,c.add(a),e=bS.bind(null,e,n,a),n.then(e,e))}function bS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ie===e&&(Me&a)===a&&(Ye===4||Ye===3&&(Me&62914560)===Me&&300>ft()-df?!(Xe&2)&&Jr(e,0):ff|=a,Qr===Me&&(Qr=0)),Ai(e)}function p_(e,n){n===0&&(n=Ee()),e=oa(e,n),e!==null&&(Un(e,n),Ai(e))}function AS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),p_(e,a)}function RS(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),p_(e,a)}function CS(e,n){return jt(e,n)}var Gl=null,es=null,Mf=!1,Vl=!1,Ef=!1,or=0;function Ai(e){e!==es&&e.next===null&&(es===null?Gl=es=e:es=es.next=e),Vl=!0,Mf||(Mf=!0,DS(wS))}function Eo(e,n){if(!Ef&&Vl){Ef=!0;do for(var a=!1,o=Gl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var x=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-$t(42|e)+1)-1,f&=c&~(x&~b),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,g_(o,f))}else f=Me,f=Dt(o,o===Ie?f:0),!(f&3)||ee(o,f)||(a=!0,g_(o,f));o=o.next}while(a);Ef=!1}}function wS(){Vl=Mf=!1;var e=0;or!==0&&(FS()&&(e=or),or=0);for(var n=ft(),a=null,o=Gl;o!==null;){var c=o.next,f=m_(o,n);f===0?(o.next=null,a===null?Gl=c:a.next=c,c===null&&(es=a)):(a=o,(e!==0||f&3)&&(Vl=!0)),o=c}Eo(e)}function m_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-$t(f),b=1<<x,N=c[x];N===-1?(!(b&a)||b&o)&&(c[x]=Ve(b,n)):N<=n&&(e.expiredLanes|=b),f&=~b}if(n=Ie,a=Me,a=Dt(e,e===n?a:0),o=e.callbackNode,a===0||e===n&&He===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&U(o),e.callbackNode=null,e.callbackPriority=0;if(!(a&3)||ee(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&U(o),Rr(a)){case 2:case 8:a=Xt;break;case 32:a=wt;break;case 268435456:a=ve;break;default:a=wt}return o=__.bind(null,e),a=jt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&U(o),e.callbackPriority=2,e.callbackNode=null,2}function __(e,n){var a=e.callbackNode;if(ts()&&e.callbackNode!==a)return null;var o=Me;return o=Dt(e,e===Ie?o:0),o===0?null:(i_(e,o,n),m_(e,ft()),e.callbackNode!=null&&e.callbackNode===a?__.bind(null,e):null)}function g_(e,n){if(ts())return null;i_(e,n,!0)}function DS(e){HS(function(){Xe&6?jt(ht,e):e()})}function Tf(){return or===0&&(or=rn()),or}function v_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:nl(""+e)}function S_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function US(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=v_((c[on]||null).action),x=o.submitter;x&&(n=(n=x[on]||null)?v_(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var b=new sl("action","action",null,o,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(or!==0){var N=x?S_(c,x):new FormData(c);Lu(a,{pending:!0,data:N,method:c.method,action:f},null,N)}}else typeof f=="function"&&(b.preventDefault(),N=x?S_(c,x):new FormData(c),Lu(a,{pending:!0,data:N,method:c.method,action:f},f,N))},currentTarget:c}]})}}for(var bf=0;bf<fp.length;bf++){var Af=fp[bf],LS=Af.toLowerCase(),NS=Af[0].toUpperCase()+Af.slice(1);ci(LS,"on"+NS)}ci(sp,"onAnimationEnd"),ci(op,"onAnimationIteration"),ci(lp,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(Kv,"onTransitionRun"),ci(Qv,"onTransitionStart"),ci(Jv,"onTransitionCancel"),ci(cp,"onTransitionEnd"),zt("onMouseEnter",["mouseout","mouseover"]),zt("onMouseLeave",["mouseout","mouseover"]),zt("onPointerEnter",["pointerout","pointerover"]),zt("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function x_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var b=o[x],N=b.instance,k=b.currentTarget;if(b=b.listener,N!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=k;try{f(c)}catch(lt){Cl(lt)}c.currentTarget=null,f=N}else for(x=0;x<o.length;x++){if(b=o[x],N=b.instance,k=b.currentTarget,b=b.listener,N!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=k;try{f(c)}catch(lt){Cl(lt)}c.currentTarget=null,f=N}}}}function xe(e,n){var a=n[Cr];a===void 0&&(a=n[Cr]=new Set);var o=e+"__bubble";a.has(o)||(y_(n,e,2,!1),a.add(o))}function Rf(e,n,a){var o=0;n&&(o|=4),y_(a,e,o,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Cf(e){if(!e[kl]){e[kl]=!0,yt.forEach(function(a){a!=="selectionchange"&&(OS.has(a)||Rf(a,!1,e),Rf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kl]||(n[kl]=!0,Rf("selectionchange",!1,n))}}function y_(e,n,a,o){switch(X_(n)){case 2:var c=sx;break;case 8:c=ox;break;default:c=Gf}a=c.bind(null,n,a,e),c=void 0,!Zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function wf(e,n,a,o,c){var f=o;if(!(n&1)&&!(n&2)&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var b=o.stateNode.containerInfo;if(b===c||b.nodeType===8&&b.parentNode===c)break;if(x===4)for(x=o.return;x!==null;){var N=x.tag;if((N===3||N===4)&&(N=x.stateNode.containerInfo,N===c||N.nodeType===8&&N.parentNode===c))return;x=x.return}for(;b!==null;){if(x=A(b),x===null)return;if(N=x.tag,N===5||N===6||N===26||N===27){o=f=x;continue t}b=b.parentNode}}o=o.return}zd(function(){var k=f,lt=qc(a),gt=[];t:{var $=up.get(e);if($!==void 0){var ot=sl,Yt=e;switch(e){case"keypress":if(al(a)===0)break t;case"keydown":case"keyup":ot=Rv;break;case"focusin":Yt="focus",ot=$c;break;case"focusout":Yt="blur",ot=$c;break;case"beforeblur":case"afterblur":ot=$c;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Dv;break;case sp:case op:case lp:ot=vv;break;case cp:ot=Lv;break;case"scroll":case"scrollend":ot=dv;break;case"wheel":ot=Ov;break;case"copy":case"cut":case"paste":ot=xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Gd;break;case"toggle":case"beforetoggle":ot=zv}var ie=(n&4)!==0,qe=!ie&&(e==="scroll"||e==="scrollend"),Z=ie?$!==null?$+"Capture":null:$;ie=[];for(var H=k,Q;H!==null;){var pt=H;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||Z===null||(pt=Vs(H,Z),pt!=null&&ie.push(bo(H,pt,Q))),qe)break;H=H.return}0<ie.length&&($=new ot($,Yt,null,a,lt),gt.push({event:$,listeners:ie}))}}if(!(n&7)){t:{if($=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",$&&a!==Yc&&(Yt=a.relatedTarget||a.fromElement)&&(A(Yt)||Yt[Ui]))break t;if((ot||$)&&($=lt.window===lt?lt:($=lt.ownerDocument)?$.defaultView||$.parentWindow:window,ot?(Yt=a.relatedTarget||a.toElement,ot=k,Yt=Yt?A(Yt):null,Yt!==null&&(qe=j(Yt),ie=Yt.tag,Yt!==qe||ie!==5&&ie!==27&&ie!==6)&&(Yt=null)):(ot=null,Yt=k),ot!==Yt)){if(ie=Id,pt="onMouseLeave",Z="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Gd,pt="onPointerLeave",Z="onPointerEnter",H="pointer"),qe=ot==null?$:et(ot),Q=Yt==null?$:et(Yt),$=new ie(pt,H+"leave",ot,a,lt),$.target=qe,$.relatedTarget=Q,pt=null,A(lt)===k&&(ie=new ie(Z,H+"enter",Yt,a,lt),ie.target=Q,ie.relatedTarget=qe,pt=ie),qe=pt,ot&&Yt)e:{for(ie=ot,Z=Yt,H=0,Q=ie;Q;Q=ns(Q))H++;for(Q=0,pt=Z;pt;pt=ns(pt))Q++;for(;0<H-Q;)ie=ns(ie),H--;for(;0<Q-H;)Z=ns(Z),Q--;for(;H--;){if(ie===Z||Z!==null&&ie===Z.alternate)break e;ie=ns(ie),Z=ns(Z)}ie=null}else ie=null;ot!==null&&M_(gt,$,ot,ie,!1),Yt!==null&&qe!==null&&M_(gt,qe,Yt,ie,!0)}}t:{if($=k?et(k):window,ot=$.nodeName&&$.nodeName.toLowerCase(),ot==="select"||ot==="input"&&$.type==="file")var Gt=Zd;else if(qd($))if(Kd)Gt=Yv;else{Gt=Xv;var pe=kv}else ot=$.nodeName,!ot||ot.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?k&&Wc(k.elementType)&&(Gt=Zd):Gt=Wv;if(Gt&&(Gt=Gt(e,k))){jd(gt,Gt,a,lt);break t}pe&&pe(e,$,k),e==="focusout"&&k&&$.type==="number"&&k.memoizedProps.value!=null&&ln($,"number",$.value)}switch(pe=k?et(k):window,e){case"focusin":(qd(pe)||pe.contentEditable==="true")&&(Or=pe,ru=k,Ks=null);break;case"focusout":Ks=ru=Or=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,ap(gt,a,lt);break;case"selectionchange":if(Zv)break;case"keydown":case"keyup":ap(gt,a,lt)}var Zt;if(eu)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Nr?Wd(e,a)&&(te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(Vd&&a.locale!=="ko"&&(Nr||te!=="onCompositionStart"?te==="onCompositionEnd"&&Nr&&(Zt=Bd()):(sa=lt,Kc="value"in sa?sa.value:sa.textContent,Nr=!0)),pe=Xl(k,te),0<pe.length&&(te=new Hd(te,e,null,a,lt),gt.push({event:te,listeners:pe}),Zt?te.data=Zt:(Zt=Yd(a),Zt!==null&&(te.data=Zt)))),(Zt=Fv?Iv(e,a):Hv(e,a))&&(te=Xl(k,"onBeforeInput"),0<te.length&&(pe=new Hd("onBeforeInput","beforeinput",null,a,lt),gt.push({event:pe,listeners:te}),pe.data=Zt)),US(gt,e,k,a,lt)}x_(gt,n)})}function bo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Xl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Vs(e,a),c!=null&&o.unshift(bo(e,c,f)),c=Vs(e,n),c!=null&&o.push(bo(e,c,f))),e=e.return}return o}function ns(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function M_(e,n,a,o,c){for(var f=n._reactName,x=[];a!==null&&a!==o;){var b=a,N=b.alternate,k=b.stateNode;if(b=b.tag,N!==null&&N===o)break;b!==5&&b!==26&&b!==27||k===null||(N=k,c?(k=Vs(a,f),k!=null&&x.unshift(bo(a,k,N))):c||(k=Vs(a,f),k!=null&&x.push(bo(a,k,N)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var PS=/\r\n?/g,zS=/\u0000|\uFFFD/g;function E_(e){return(typeof e=="string"?e:""+e).replace(PS,`
`).replace(zS,"")}function T_(e,n){return n=E_(n),E_(e)===n}function Wl(){}function Oe(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Dr(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Dr(e,""+o);break;case"className":Be(e,"class",o);break;case"tabIndex":Be(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Be(e,a,o);break;case"style":Od(e,o,f);break;case"data":if(n!=="object"){Be(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=nl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",c.name,c,null),Oe(e,n,"formEncType",c.formEncType,c,null),Oe(e,n,"formMethod",c.formMethod,c,null),Oe(e,n,"formTarget",c.formTarget,c,null)):(Oe(e,n,"encType",c.encType,c,null),Oe(e,n,"method",c.method,c,null),Oe(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=nl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Wl);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=nl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Ge(e,"popover",o);break;case"xlinkActuate":re(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":re(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":re(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":re(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":re(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":re(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":re(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":re(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":re(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ge(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=fv.get(a)||a,Ge(e,a,o))}}function Df(e,n,a,o,c,f){switch(a){case"style":Od(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Dr(e,o):(typeof o=="number"||typeof o=="bigint")&&Dr(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Wl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ut.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[on]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ge(e,a,o)}}}function Mn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,f,x,a,null)}}c&&Oe(e,n,"srcSet",a.srcSet,a,null),o&&Oe(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var b=f=x=c=null,N=null,k=null;for(o in a)if(a.hasOwnProperty(o)){var lt=a[o];if(lt!=null)switch(o){case"name":c=lt;break;case"type":x=lt;break;case"checked":N=lt;break;case"defaultChecked":k=lt;break;case"value":f=lt;break;case"defaultValue":b=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:Oe(e,n,o,lt,a,null)}}Ln(e,f,b,N,k,x,c,!1),En(e);return;case"select":xe("invalid",e),o=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":x=b;break;case"multiple":o=b;default:Oe(e,n,c,b,a,null)}n=f,a=x,e.multiple=!!o,n!=null?Ke(e,!!o,n,!1):a!=null&&Ke(e,!!o,a,!0);return;case"textarea":xe("invalid",e),f=c=o=null;for(x in a)if(a.hasOwnProperty(x)&&(b=a[x],b!=null))switch(x){case"value":o=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Oe(e,n,x,b,a,null)}yi(e,o,c,f),En(e);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(o=a[N],o!=null))switch(N){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(e,n,N,o,a,null)}return;case"dialog":xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<To.length;o++)xe(To[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,k,o,a,null)}return;default:if(Wc(n)){for(lt in a)a.hasOwnProperty(lt)&&(o=a[lt],o!==void 0&&Df(e,n,lt,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Oe(e,n,b,o,a,null))}function BS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,b=null,N=null,k=null,lt=null;for(ot in a){var gt=a[ot];if(a.hasOwnProperty(ot)&&gt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":N=gt;default:o.hasOwnProperty(ot)||Oe(e,n,ot,null,o,gt)}}for(var $ in o){var ot=o[$];if(gt=a[$],o.hasOwnProperty($)&&(ot!=null||gt!=null))switch($){case"type":f=ot;break;case"name":c=ot;break;case"checked":k=ot;break;case"defaultChecked":lt=ot;break;case"value":x=ot;break;case"defaultValue":b=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==gt&&Oe(e,n,$,ot,o,gt)}}Tn(e,x,b,N,k,lt,f,c);return;case"select":ot=x=b=$=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":ot=N;default:o.hasOwnProperty(f)||Oe(e,n,f,null,o,N)}for(c in o)if(f=o[c],N=a[c],o.hasOwnProperty(c)&&(f!=null||N!=null))switch(c){case"value":$=f;break;case"defaultValue":b=f;break;case"multiple":x=f;default:f!==N&&Oe(e,n,c,f,o,N)}n=b,a=x,o=ot,$!=null?Ke(e,!!a,$,!1):!!o!=!!a&&(n!=null?Ke(e,!!a,n,!0):Ke(e,!!a,a?[]:"",!1));return;case"textarea":ot=$=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Oe(e,n,b,null,o,c)}for(x in o)if(c=o[x],f=a[x],o.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":$=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Oe(e,n,x,c,o,f)}wr(e,$,ot);return;case"option":for(var Yt in a)if($=a[Yt],a.hasOwnProperty(Yt)&&$!=null&&!o.hasOwnProperty(Yt))switch(Yt){case"selected":e.selected=!1;break;default:Oe(e,n,Yt,null,o,$)}for(N in o)if($=o[N],ot=a[N],o.hasOwnProperty(N)&&$!==ot&&($!=null||ot!=null))switch(N){case"selected":e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Oe(e,n,N,$,o,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)$=a[ie],a.hasOwnProperty(ie)&&$!=null&&!o.hasOwnProperty(ie)&&Oe(e,n,ie,null,o,$);for(k in o)if($=o[k],ot=a[k],o.hasOwnProperty(k)&&$!==ot&&($!=null||ot!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:Oe(e,n,k,$,o,ot)}return;default:if(Wc(n)){for(var qe in a)$=a[qe],a.hasOwnProperty(qe)&&$!==void 0&&!o.hasOwnProperty(qe)&&Df(e,n,qe,void 0,o,$);for(lt in o)$=o[lt],ot=a[lt],!o.hasOwnProperty(lt)||$===ot||$===void 0&&ot===void 0||Df(e,n,lt,$,o,ot);return}}for(var Z in a)$=a[Z],a.hasOwnProperty(Z)&&$!=null&&!o.hasOwnProperty(Z)&&Oe(e,n,Z,null,o,$);for(gt in o)$=o[gt],ot=a[gt],!o.hasOwnProperty(gt)||$===ot||$==null&&ot==null||Oe(e,n,gt,$,o,ot)}var Uf=null,Lf=null;function Yl(e){return e.nodeType===9?e:e.ownerDocument}function b_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Nf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Of=null;function FS(){var e=window.event;return e&&e.type==="popstate"?e===Of?!1:(Of=e,!0):(Of=null,!1)}var R_=typeof setTimeout=="function"?setTimeout:void 0,IS=typeof clearTimeout=="function"?clearTimeout:void 0,C_=typeof Promise=="function"?Promise:void 0,HS=typeof queueMicrotask=="function"?queueMicrotask:typeof C_<"u"?function(e){return C_.resolve(null).then(e).catch(GS)}:R_;function GS(e){setTimeout(function(){throw e})}function Pf(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(o===0){e.removeChild(c),No(n);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=c}while(a);No(n)}function zf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zf(a),Gs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function VS(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ga])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function kS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function w_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function D_(e,n,a){switch(n=Yl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var ri=new Map,U_=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var qi=q.d;q.d={f:XS,r:WS,D:YS,C:qS,L:jS,m:ZS,X:QS,S:KS,M:JS};function XS(){var e=qi.f(),n=Il();return e||n}function WS(e){var n=W(e);n!==null&&n.tag===5&&n.type==="form"?am(n):qi.r(e)}var is=typeof document>"u"?null:document;function L_(e,n,a){var o=is;if(o&&typeof n=="string"&&n){var c=_e(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),U_.has(c)||(U_.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Mn(n,"link",e),V(n),o.head.appendChild(n)))}}function YS(e){qi.D(e),L_("dns-prefetch",e,null)}function qS(e,n){qi.C(e,n),L_("preconnect",e,n)}function jS(e,n,a){qi.L(e,n,a);var o=is;if(o&&e&&n){var c='link[rel="preload"][as="'+_e(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+_e(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+_e(a.imageSizes)+'"]')):c+='[href="'+_e(e)+'"]';var f=c;switch(n){case"style":f=as(e);break;case"script":f=rs(e)}ri.has(f)||(e=R({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ri.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Ao(f))||n==="script"&&o.querySelector(Ro(f))||(n=o.createElement("link"),Mn(n,"link",e),V(n),o.head.appendChild(n)))}}function ZS(e,n){qi.m(e,n);var a=is;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+_e(o)+'"][href="'+_e(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=rs(e)}if(!ri.has(f)&&(e=R({rel:"modulepreload",href:e},n),ri.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(f)))return}o=a.createElement("link"),Mn(o,"link",e),V(o),a.head.appendChild(o)}}}function KS(e,n,a){qi.S(e,n,a);var o=is;if(o&&e){var c=nt(o).hoistableStyles,f=as(e);n=n||"default";var x=c.get(f);if(!x){var b={loading:0,preload:null};if(x=o.querySelector(Ao(f)))b.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ri.get(f))&&Bf(e,a);var N=x=o.createElement("link");V(N),Mn(N,"link",e),N._p=new Promise(function(k,lt){N.onload=k,N.onerror=lt}),N.addEventListener("load",function(){b.loading|=1}),N.addEventListener("error",function(){b.loading|=2}),b.loading|=4,jl(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:b},c.set(f,x)}}}function QS(e,n){qi.X(e,n);var a=is;if(a&&e){var o=nt(a).hoistableScripts,c=rs(e),f=o.get(c);f||(f=a.querySelector(Ro(c)),f||(e=R({src:e,async:!0},n),(n=ri.get(c))&&Ff(e,n),f=a.createElement("script"),V(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function JS(e,n){qi.M(e,n);var a=is;if(a&&e){var o=nt(a).hoistableScripts,c=rs(e),f=o.get(c);f||(f=a.querySelector(Ro(c)),f||(e=R({src:e,async:!0,type:"module"},n),(n=ri.get(c))&&Ff(e,n),f=a.createElement("script"),V(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function N_(e,n,a,o){var c=(c=De.current)?ql(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=as(a.href),a=nt(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=as(a.href);var f=nt(c).hoistableStyles,x=f.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=c.querySelector(Ao(e)))&&!f._p&&(x.instance=f,x.state.loading=5),ri.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(e,a),f||$S(c,e,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rs(a),a=nt(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function as(e){return'href="'+_e(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function O_(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function $S(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mn(n,"link",a),V(n),e.head.appendChild(n))}function rs(e){return'[src="'+_e(e)+'"]'}function Ro(e){return"script[async]"+e}function P_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+_e(a.href)+'"]');if(o)return n.instance=o,V(o),o;var c=R({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),V(o),Mn(o,"style",c),jl(o,a.precedence,e),n.instance=o;case"stylesheet":c=as(a.href);var f=e.querySelector(Ao(c));if(f)return n.state.loading|=4,n.instance=f,V(f),f;o=O_(a),(c=ri.get(c))&&Bf(o,c),f=(e.ownerDocument||e).createElement("link"),V(f);var x=f;return x._p=new Promise(function(b,N){x.onload=b,x.onerror=N}),Mn(f,"link",o),n.state.loading|=4,jl(f,a.precedence,e),n.instance=f;case"script":return f=rs(a.src),(c=e.querySelector(Ro(f)))?(n.instance=c,V(c),c):(o=a,(c=ri.get(f))&&(o=R({},a),Ff(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),V(c),Mn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(o=n.instance,n.state.loading|=4,jl(o,a.precedence,e));return n.instance}function jl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,x=0;x<o.length;x++){var b=o[x];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Bf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ff(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zl=null;function z_(e,n,a){if(Zl===null){var o=new Map,c=Zl=new Map;c.set(a,o)}else c=Zl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ga]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var b=o.get(x);b?b.push(f):o.set(x,[f])}}return o}function B_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function tx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function F_(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var Co=null;function ex(){}function nx(e,n,a){if(Co===null)throw Error(r(475));var o=Co;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var c=as(a.href),f=e.querySelector(Ao(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Kl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,V(f);return}f=e.ownerDocument||e,a=O_(a),(c=ri.get(c))&&Bf(a,c),f=f.createElement("link"),V(f);var x=f;x._p=new Promise(function(b,N){x.onload=b,x.onerror=N}),Mn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(o.count++,n=Kl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function ix(){if(Co===null)throw Error(r(475));var e=Co;return e.stylesheets&&e.count===0&&If(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&If(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Kl(){if(this.count--,this.count===0){if(this.stylesheets)If(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ql=null;function If(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ql=new Map,n.forEach(ax,e),Ql=null,Kl.call(e))}function ax(e,n){if(!(n.state.loading&4)){var a=Ql.get(e);if(a)var o=a.get(null);else{a=new Map,Ql.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,c),a.set(x,c),this.count++,o=Kl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var wo={$$typeof:M,Provider:null,Consumer:null,_currentValue:ut,_currentValue2:ut,_threadCount:0};function rx(e,n,a,o,c,f,x,b){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dn(0),this.hiddenUpdates=Dn(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function I_(e,n,a,o,c,f,x,b,N,k,lt,gt){return e=new rx(e,n,a,x,b,N,k,gt),n=1,f===!0&&(n|=24),f=ii(3,null,null,n),e.current=f,f.stateNode=e,n=_u(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ku(f),e}function H_(e){return e?(e=Br,e):Br}function G_(e,n,a,o,c,f){c=H_(c),o.context===null?o.context=c:o.pendingContext=c,o=pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ma(e,o,n),a!==null&&(On(a,e,n),fo(a,e,n))}function V_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Hf(e,n){V_(e,n),(e=e.alternate)&&V_(e,n)}function k_(e){if(e.tag===13){var n=oa(e,67108864);n!==null&&On(n,e,67108864),Hf(e,67108864)}}var Jl=!0;function sx(e,n,a,o){var c=C.T;C.T=null;var f=q.p;try{q.p=2,Gf(e,n,a,o)}finally{q.p=f,C.T=c}}function ox(e,n,a,o){var c=C.T;C.T=null;var f=q.p;try{q.p=8,Gf(e,n,a,o)}finally{q.p=f,C.T=c}}function Gf(e,n,a,o){if(Jl){var c=Vf(o);if(c===null)wf(e,n,o,$l,a),W_(e,o);else if(cx(c,e,n,a,o))o.stopPropagation();else if(W_(e,o),n&4&&-1<lx.indexOf(e)){for(;c!==null;){var f=W(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Ct(f.pendingLanes);if(x!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;x;){var N=1<<31-$t(x);b.entanglements[1]|=N,x&=~N}Ai(f),!(Xe&6)&&(zl=ft()+500,Eo(0))}}break;case 13:b=oa(f,2),b!==null&&On(b,f,2),Il(),Hf(f,2)}if(f=Vf(o),f===null&&wf(e,n,o,$l,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else wf(e,n,o,null,a)}}function Vf(e){return e=qc(e),kf(e)}var $l=null;function kf(e){if($l=null,e=A(e),e!==null){var n=j(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=St(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return $l=e,null}function X_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case ht:return 2;case Xt:return 8;case wt:case Bt:return 32;case ve:return 268435456;default:return 32}default:return 32}}var Xf=!1,Ma=null,Ea=null,Ta=null,Do=new Map,Uo=new Map,ba=[],lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function W_(e,n){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":Ea=null;break;case"mouseover":case"mouseout":Ta=null;break;case"pointerover":case"pointerout":Do.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(n.pointerId)}}function Lo(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=W(n),n!==null&&k_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function cx(e,n,a,o,c){switch(n){case"focusin":return Ma=Lo(Ma,e,n,a,o,c),!0;case"dragenter":return Ea=Lo(Ea,e,n,a,o,c),!0;case"mouseover":return Ta=Lo(Ta,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Do.set(f,Lo(Do.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Uo.set(f,Lo(Uo.get(f)||null,e,n,a,o,c)),!0}return!1}function Y_(e){var n=A(e.target);if(n!==null){var a=j(n);if(a!==null){if(n=a.tag,n===13){if(n=St(a),n!==null){e.blockedOn=n,tl(e.priority,function(){if(a.tag===13){var o=qn(),c=oa(a,o);c!==null&&On(c,a,o),Hf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Vf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Yc=o,a.target.dispatchEvent(o),Yc=null}else return n=W(a),n!==null&&k_(n),e.blockedOn=a,!1;n.shift()}return!0}function q_(e,n,a){tc(e)&&a.delete(n)}function ux(){Xf=!1,Ma!==null&&tc(Ma)&&(Ma=null),Ea!==null&&tc(Ea)&&(Ea=null),Ta!==null&&tc(Ta)&&(Ta=null),Do.forEach(q_),Uo.forEach(q_)}function ec(e,n){e.blockedOn===n&&(e.blockedOn=null,Xf||(Xf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ux)))}var nc=null;function j_(e){nc!==e&&(nc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){nc===e&&(nc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(kf(o||a)===null)continue;break}var f=W(a);f!==null&&(e.splice(n,3),n-=3,Lu(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function No(e){function n(N){return ec(N,e)}Ma!==null&&ec(Ma,e),Ea!==null&&ec(Ea,e),Ta!==null&&ec(Ta,e),Do.forEach(n),Uo.forEach(n);for(var a=0;a<ba.length;a++){var o=ba[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ba.length&&(a=ba[0],a.blockedOn===null);)Y_(a),a.blockedOn===null&&ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],x=c[on]||null;if(typeof f=="function")x||j_(a);else if(x){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[on]||null)b=x.formAction;else if(kf(c)!==null)continue}else b=x.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),j_(a)}}}function Wf(e){this._internalRoot=e}ic.prototype.render=Wf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=qn();G_(a,o,e,n,null,null)},ic.prototype.unmount=Wf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&ts(),G_(e.current,2,null,e,null,null),Il(),n[Ui]=null}};function ic(e){this._internalRoot=e}ic.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ba.length&&n!==0&&n<ba[a].priority;a++);ba.splice(a,0,e),a===0&&Y_(e)}};var Z_=t.version;if(Z_!=="19.0.0")throw Error(r(527,Z_,"19.0.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=it(n),e=e!==null?Tt(e):null,e=e===null?null:e.stateNode,e};var fx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:C,findFiberByHostInstance:A,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{Kt=ac.inject(fx),Wt=ac}catch{}}return Po.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=hm,f=dm,x=pm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=I_(e,1,!1,null,null,a,o,c,f,x,b,null),e[Ui]=n.current,Cf(e.nodeType===8?e.parentNode:e),new Wf(n)},Po.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",f=hm,x=dm,b=pm,N=null,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(k=a.formState)),n=I_(e,1,!0,n,a??null,o,c,f,x,b,N,k),n.context=H_(null),a=n.current,o=qn(),c=pa(o),c.callback=null,ma(a,c,o),n.current.lanes=o,Un(n,o),Ai(n),e[Ui]=n.current,Cf(e),new ic(n)},Po.version="19.0.0",Po}var rg;function Tx(){if(rg)return jf.exports;rg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),jf.exports=Ex(),jf.exports}var bx=Tx();_0();/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},ko.apply(this,arguments)}var Pa;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Pa||(Pa={}));const sg="popstate";function Ax(s){s===void 0&&(s={});function t(r,l){let{pathname:u,search:h,hash:d}=r.location;return wh("",{pathname:u,search:h,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Pc(l)}return Cx(t,i,null,s)}function an(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function g0(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Rx(){return Math.random().toString(36).substr(2,8)}function og(s,t){return{usr:s.state,key:s.key,idx:t}}function wh(s,t,i,r){return i===void 0&&(i=null),ko({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof t=="string"?Ps(t):t,{state:i,key:t&&t.key||r||Rx()})}function Pc(s){let{pathname:t="/",search:i="",hash:r=""}=s;return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ps(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substr(i),s=s.substr(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substr(r),s=s.substr(0,r)),s&&(t.pathname=s)}return t}function Cx(s,t,i,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:u=!1}=r,h=l.history,d=Pa.Pop,p=null,m=_();m==null&&(m=0,h.replaceState(ko({},h.state,{idx:m}),""));function _(){return(h.state||{idx:null}).idx}function g(){d=Pa.Pop;let y=_(),v=y==null?null:y-m;m=y,p&&p({action:d,location:w.location,delta:v})}function S(y,v){d=Pa.Push;let P=wh(w.location,y,v);m=_()+1;let O=og(P,m),D=w.createHref(P);try{h.pushState(O,"",D)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(D)}u&&p&&p({action:d,location:w.location,delta:1})}function M(y,v){d=Pa.Replace;let P=wh(w.location,y,v);m=_();let O=og(P,m),D=w.createHref(P);h.replaceState(O,"",D),u&&p&&p({action:d,location:w.location,delta:0})}function T(y){let v=l.location.origin!=="null"?l.location.origin:l.location.href,P=typeof y=="string"?y:Pc(y);return P=P.replace(/ $/,"%20"),an(v,"No window.location.(origin|href) available to create URL for href: "+P),new URL(P,v)}let w={get action(){return d},get location(){return s(l,h)},listen(y){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(sg,g),p=y,()=>{l.removeEventListener(sg,g),p=null}},createHref(y){return t(l,y)},createURL:T,encodeLocation(y){let v=T(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:S,replace:M,go(y){return h.go(y)}};return w}var lg;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(lg||(lg={}));function wx(s,t,i){return i===void 0&&(i="/"),Dx(s,t,i,!1)}function Dx(s,t,i,r){let l=typeof t=="string"?Ps(t):t,u=Sd(l.pathname||"/",i);if(u==null)return null;let h=v0(s);Ux(h);let d=null;for(let p=0;d==null&&p<h.length;++p){let m=Vx(u);d=Hx(h[p],m,r)}return d}function v0(s,t,i,r){t===void 0&&(t=[]),i===void 0&&(i=[]),r===void 0&&(r="");let l=(u,h,d)=>{let p={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};p.relativePath.startsWith("/")&&(an(p.relativePath.startsWith(r),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(r.length));let m=za([r,p.relativePath]),_=i.concat(p);u.children&&u.children.length>0&&(an(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),v0(u.children,t,_,m)),!(u.path==null&&!u.index)&&t.push({path:m,score:Fx(m,u.index),routesMeta:_})};return s.forEach((u,h)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))l(u,h);else for(let p of S0(u.path))l(u,h,p)}),t}function S0(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let h=S0(r.join("/")),d=[];return d.push(...h.map(p=>p===""?u:[u,p].join("/"))),l&&d.push(...h),d.map(p=>s.startsWith("/")&&p===""?"/":p)}function Ux(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:Ix(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}const Lx=/^:[\w-]+$/,Nx=3,Ox=2,Px=1,zx=10,Bx=-2,cg=s=>s==="*";function Fx(s,t){let i=s.split("/"),r=i.length;return i.some(cg)&&(r+=Bx),t&&(r+=Ox),i.filter(l=>!cg(l)).reduce((l,u)=>l+(Lx.test(u)?Nx:u===""?Px:zx),r)}function Ix(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function Hx(s,t,i){let{routesMeta:r}=s,l={},u="/",h=[];for(let d=0;d<r.length;++d){let p=r[d],m=d===r.length-1,_=u==="/"?t:t.slice(u.length)||"/",g=ug({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},_),S=p.route;if(!g&&m&&i&&!r[r.length-1].route.index&&(g=ug({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!g)return null;Object.assign(l,g.params),h.push({params:l,pathname:za([u,g.pathname]),pathnameBase:Yx(za([u,g.pathnameBase])),route:S}),g.pathnameBase!=="/"&&(u=za([u,g.pathnameBase]))}return h}function ug(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=Gx(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let u=l[0],h=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((m,_,g)=>{let{paramName:S,isOptional:M}=_;if(S==="*"){let w=d[g]||"";h=u.slice(0,u.length-w.length).replace(/(.)\/+$/,"$1")}const T=d[g];return M&&!T?m[S]=void 0:m[S]=(T||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:h,pattern:s}}function Gx(s,t,i){t===void 0&&(t=!1),i===void 0&&(i=!0),g0(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Vx(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return g0(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),s}}function Sd(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function kx(s,t){t===void 0&&(t="/");let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Ps(s):s;return{pathname:i?i.startsWith("/")?i:Xx(i,t):t,search:qx(r),hash:jx(l)}}function Xx(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Jf(s,t,i,r){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wx(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function x0(s,t){let i=Wx(s);return t?i.map((r,l)=>l===i.length-1?r.pathname:r.pathnameBase):i.map(r=>r.pathnameBase)}function y0(s,t,i,r){r===void 0&&(r=!1);let l;typeof s=="string"?l=Ps(s):(l=ko({},s),an(!l.pathname||!l.pathname.includes("?"),Jf("?","pathname","search",l)),an(!l.pathname||!l.pathname.includes("#"),Jf("#","pathname","hash",l)),an(!l.search||!l.search.includes("#"),Jf("#","search","hash",l)));let u=s===""||l.pathname==="",h=u?"/":l.pathname,d;if(h==null)d=i;else{let g=t.length-1;if(!r&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),g-=1;l.pathname=S.join("/")}d=g>=0?t[g]:"/"}let p=kx(l,d),m=h&&h!=="/"&&h.endsWith("/"),_=(u||h===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||_)&&(p.pathname+="/"),p}const za=s=>s.join("/").replace(/\/\/+/g,"/"),Yx=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),qx=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,jx=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Zx(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const M0=["post","put","patch","delete"];new Set(M0);const Kx=["get",...M0];new Set(Kx);/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},Xo.apply(this,arguments)}const xd=Pt.createContext(null),Qx=Pt.createContext(null),Er=Pt.createContext(null),Hc=Pt.createContext(null),Tr=Pt.createContext({outlet:null,matches:[],isDataRoute:!1}),E0=Pt.createContext(null);function Jx(s,t){let{relative:i}=t===void 0?{}:t;qo()||an(!1);let{basename:r,navigator:l}=Pt.useContext(Er),{hash:u,pathname:h,search:d}=b0(s,{relative:i}),p=h;return r!=="/"&&(p=h==="/"?r:za([r,h])),l.createHref({pathname:p,search:d,hash:u})}function qo(){return Pt.useContext(Hc)!=null}function jo(){return qo()||an(!1),Pt.useContext(Hc).location}function T0(s){Pt.useContext(Er).static||Pt.useLayoutEffect(s)}function $x(){let{isDataRoute:s}=Pt.useContext(Tr);return s?hy():ty()}function ty(){qo()||an(!1);let s=Pt.useContext(xd),{basename:t,future:i,navigator:r}=Pt.useContext(Er),{matches:l}=Pt.useContext(Tr),{pathname:u}=jo(),h=JSON.stringify(x0(l,i.v7_relativeSplatPath)),d=Pt.useRef(!1);return T0(()=>{d.current=!0}),Pt.useCallback(function(m,_){if(_===void 0&&(_={}),!d.current)return;if(typeof m=="number"){r.go(m);return}let g=y0(m,JSON.parse(h),u,_.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:za([t,g.pathname])),(_.replace?r.replace:r.push)(g,_.state,_)},[t,r,h,u,s])}function b0(s,t){let{relative:i}=t===void 0?{}:t,{future:r}=Pt.useContext(Er),{matches:l}=Pt.useContext(Tr),{pathname:u}=jo(),h=JSON.stringify(x0(l,r.v7_relativeSplatPath));return Pt.useMemo(()=>y0(s,JSON.parse(h),u,i==="path"),[s,h,u,i])}function ey(s,t){return ny(s,t)}function ny(s,t,i,r){qo()||an(!1);let{navigator:l}=Pt.useContext(Er),{matches:u}=Pt.useContext(Tr),h=u[u.length-1],d=h?h.params:{};h&&h.pathname;let p=h?h.pathnameBase:"/";h&&h.route;let m=jo(),_;if(t){var g;let y=typeof t=="string"?Ps(t):t;p==="/"||(g=y.pathname)!=null&&g.startsWith(p)||an(!1),_=y}else _=m;let S=_.pathname||"/",M=S;if(p!=="/"){let y=p.replace(/^\//,"").split("/");M="/"+S.replace(/^\//,"").split("/").slice(y.length).join("/")}let T=wx(s,{pathname:M}),w=oy(T&&T.map(y=>Object.assign({},y,{params:Object.assign({},d,y.params),pathname:za([p,l.encodeLocation?l.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?p:za([p,l.encodeLocation?l.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),u,i,r);return t&&w?Pt.createElement(Hc.Provider,{value:{location:Xo({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:Pa.Pop}},w):w}function iy(){let s=fy(),t=Zx(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Pt.createElement(Pt.Fragment,null,Pt.createElement("h2",null,"Unexpected Application Error!"),Pt.createElement("h3",{style:{fontStyle:"italic"}},t),i?Pt.createElement("pre",{style:l},i):null,null)}const ay=Pt.createElement(iy,null);class ry extends Pt.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,i){return i.location!==t.location||i.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:i.error,location:i.location,revalidation:t.revalidation||i.revalidation}}componentDidCatch(t,i){console.error("React Router caught the following error during render",t,i)}render(){return this.state.error!==void 0?Pt.createElement(Tr.Provider,{value:this.props.routeContext},Pt.createElement(E0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sy(s){let{routeContext:t,match:i,children:r}=s,l=Pt.useContext(xd);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),Pt.createElement(Tr.Provider,{value:t},r)}function oy(s,t,i,r){var l;if(t===void 0&&(t=[]),i===void 0&&(i=null),r===void 0&&(r=null),s==null){var u;if(!i)return null;if(i.errors)s=i.matches;else if((u=r)!=null&&u.v7_partialHydration&&t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let h=s,d=(l=i)==null?void 0:l.errors;if(d!=null){let _=h.findIndex(g=>g.route.id&&(d==null?void 0:d[g.route.id])!==void 0);_>=0||an(!1),h=h.slice(0,Math.min(h.length,_+1))}let p=!1,m=-1;if(i&&r&&r.v7_partialHydration)for(let _=0;_<h.length;_++){let g=h[_];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=_),g.route.id){let{loaderData:S,errors:M}=i,T=g.route.loader&&S[g.route.id]===void 0&&(!M||M[g.route.id]===void 0);if(g.route.lazy||T){p=!0,m>=0?h=h.slice(0,m+1):h=[h[0]];break}}}return h.reduceRight((_,g,S)=>{let M,T=!1,w=null,y=null;i&&(M=d&&g.route.id?d[g.route.id]:void 0,w=g.route.errorElement||ay,p&&(m<0&&S===0?(T=!0,y=null):m===S&&(T=!0,y=g.route.hydrateFallbackElement||null)));let v=t.concat(h.slice(0,S+1)),P=()=>{let O;return M?O=w:T?O=y:g.route.Component?O=Pt.createElement(g.route.Component,null):g.route.element?O=g.route.element:O=_,Pt.createElement(sy,{match:g,routeContext:{outlet:_,matches:v,isDataRoute:i!=null},children:O})};return i&&(g.route.ErrorBoundary||g.route.errorElement||S===0)?Pt.createElement(ry,{location:i.location,revalidation:i.revalidation,component:w,error:M,children:P(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):P()},null)}var A0=function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s}(A0||{}),zc=function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s}(zc||{});function ly(s){let t=Pt.useContext(xd);return t||an(!1),t}function cy(s){let t=Pt.useContext(Qx);return t||an(!1),t}function uy(s){let t=Pt.useContext(Tr);return t||an(!1),t}function R0(s){let t=uy(),i=t.matches[t.matches.length-1];return i.route.id||an(!1),i.route.id}function fy(){var s;let t=Pt.useContext(E0),i=cy(zc.UseRouteError),r=R0(zc.UseRouteError);return t!==void 0?t:(s=i.errors)==null?void 0:s[r]}function hy(){let{router:s}=ly(A0.UseNavigateStable),t=R0(zc.UseNavigateStable),i=Pt.useRef(!1);return T0(()=>{i.current=!0}),Pt.useCallback(function(l,u){u===void 0&&(u={}),i.current&&(typeof l=="number"?s.navigate(l):s.navigate(l,Xo({fromRouteId:t},u)))},[s,t])}function $i(s){an(!1)}function dy(s){let{basename:t="/",children:i=null,location:r,navigationType:l=Pa.Pop,navigator:u,static:h=!1,future:d}=s;qo()&&an(!1);let p=t.replace(/^\/*/,"/"),m=Pt.useMemo(()=>({basename:p,navigator:u,static:h,future:Xo({v7_relativeSplatPath:!1},d)}),[p,d,u,h]);typeof r=="string"&&(r=Ps(r));let{pathname:_="/",search:g="",hash:S="",state:M=null,key:T="default"}=r,w=Pt.useMemo(()=>{let y=Sd(_,p);return y==null?null:{location:{pathname:y,search:g,hash:S,state:M,key:T},navigationType:l}},[p,_,g,S,M,T,l]);return w==null?null:Pt.createElement(Er.Provider,{value:m},Pt.createElement(Hc.Provider,{children:i,value:w}))}function py(s){let{children:t,location:i}=s;return ey(Dh(t),i)}new Promise(()=>{});function Dh(s,t){t===void 0&&(t=[]);let i=[];return Pt.Children.forEach(s,(r,l)=>{if(!Pt.isValidElement(r))return;let u=[...t,l];if(r.type===Pt.Fragment){i.push.apply(i,Dh(r.props.children,u));return}r.type!==$i&&an(!1),!r.props.index||!r.props.children||an(!1);let h={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(h.children=Dh(r.props.children,u)),i.push(h)}),i}/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uh(){return Uh=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},Uh.apply(this,arguments)}function my(s,t){if(s==null)return{};var i={},r=Object.keys(s),l,u;for(u=0;u<r.length;u++)l=r[u],!(t.indexOf(l)>=0)&&(i[l]=s[l]);return i}function _y(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function gy(s,t){return s.button===0&&(!t||t==="_self")&&!_y(s)}const vy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Sy="6";try{window.__reactRouterVersion=Sy}catch{}const xy="startTransition",fg=Sx[xy];function yy(s){let{basename:t,children:i,future:r,window:l}=s,u=Pt.useRef();u.current==null&&(u.current=Ax({window:l,v5Compat:!0}));let h=u.current,[d,p]=Pt.useState({action:h.action,location:h.location}),{v7_startTransition:m}=r||{},_=Pt.useCallback(g=>{m&&fg?fg(()=>p(g)):p(g)},[p,m]);return Pt.useLayoutEffect(()=>h.listen(_),[h,_]),Pt.createElement(dy,{basename:t,children:i,location:d.location,navigationType:d.action,navigator:h,future:r})}const My=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ey=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rc=Pt.forwardRef(function(t,i){let{onClick:r,relative:l,reloadDocument:u,replace:h,state:d,target:p,to:m,preventScrollReset:_,unstable_viewTransition:g}=t,S=my(t,vy),{basename:M}=Pt.useContext(Er),T,w=!1;if(typeof m=="string"&&Ey.test(m)&&(T=m,My))try{let O=new URL(window.location.href),D=m.startsWith("//")?new URL(O.protocol+m):new URL(m),I=Sd(D.pathname,M);D.origin===O.origin&&I!=null?m=I+D.search+D.hash:w=!0}catch{}let y=Jx(m,{relative:l}),v=Ty(m,{replace:h,state:d,target:p,preventScrollReset:_,relative:l,unstable_viewTransition:g});function P(O){r&&r(O),O.defaultPrevented||v(O)}return Pt.createElement("a",Uh({},S,{href:T||y,onClick:w||u?r:P,ref:i,target:p}))});var hg;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(hg||(hg={}));var dg;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(dg||(dg={}));function Ty(s,t){let{target:i,replace:r,state:l,preventScrollReset:u,relative:h,unstable_viewTransition:d}=t===void 0?{}:t,p=$x(),m=jo(),_=b0(s,{relative:h});return Pt.useCallback(g=>{if(gy(g,i)){g.preventDefault();let S=r!==void 0?r:Pc(m)===Pc(_);p(s,{replace:S,state:l,preventScrollReset:u,relative:h,unstable_viewTransition:d})}},[m,p,_,r,l,i,s,u,h,d])}function by(){return Mt.jsx("div",{className:"home",children:Mt.jsx("h1",{children:"Hi, I'm Jachen"})})}function Ay(){return Mt.jsxs("div",{className:"about",children:[Mt.jsx("h1",{children:"Hi, I'm Jachen"}),Mt.jsx("p",{children:" Enjoy"})]})}function Ry(){return Mt.jsxs("div",{className:"projects",children:[Mt.jsx("h1",{children:"My Projects"}),Mt.jsxs("div",{className:"project-item",children:[Mt.jsx("h3",{children:"Details on the trees in Boston, made in Python using public city data, geopandas, and folium"}),Mt.jsx("a",{href:"/trees_density.html",target:"_blank",children:"Read more"})]}),Mt.jsxs("div",{className:"project-item",children:[Mt.jsx("h3",{children:"Simple card webapp to shuffle and draw cards"}),Mt.jsx("a",{href:"/cards",target:"_blank",children:"Read more"})]}),Mt.jsxs("div",{className:"project-item",children:[Mt.jsx("h3",{children:"Sandbox with a box"}),Mt.jsx("a",{href:"/sandbox",target:"_blank",children:"Read more"})]})]})}function Cy(){return Mt.jsxs("div",{className:"contact",children:[Mt.jsx("h2",{children:"Contact Me"}),Mt.jsx("p",{children:"If you’d like to get in touch, please fill out the form below or reach out to me via email at jachenliu2017@gmail.com."}),Mt.jsxs("form",{children:[Mt.jsx("label",{htmlFor:"name",children:"Name:"}),Mt.jsx("input",{type:"text",id:"name",name:"name",required:!0}),Mt.jsx("label",{htmlFor:"email",children:"Email:"}),Mt.jsx("input",{type:"email",id:"email",name:"email",required:!0}),Mt.jsx("label",{htmlFor:"message",children:"Message:"}),Mt.jsx("textarea",{id:"message",name:"message",rows:"4",required:!0}),Mt.jsx("button",{type:"submit",children:"Send"})]})]})}const wy="/assets/wpst-DjzdHmnV.png";function Dy(){const s=localStorage.getItem("theme")||"light",[t,i]=Pt.useState(s);Pt.useEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme",t)},[t]);const r=()=>{i(t==="dark"?"light":"dark")};return Mt.jsxs("nav",{className:"navbar",children:[Mt.jsx("div",{className:"navbar-left",children:Mt.jsx("div",{className:"navbar-brand",children:Mt.jsx(rc,{to:"/",children:Mt.jsx("img",{src:wy,alt:"Home",className:"navbar-icon"})})})}),Mt.jsxs("ul",{className:"navbar-links",children:[Mt.jsx("li",{children:Mt.jsx(rc,{to:"/about",className:"navbar-link",children:"About"})}),Mt.jsx("li",{children:Mt.jsx(rc,{to:"/projects",className:"navbar-link",children:"Projects"})}),Mt.jsx("li",{children:Mt.jsx(rc,{to:"/resume",className:"navbar-link",children:"Resume"})}),Mt.jsx("button",{onClick:r,className:"theme-toggle",children:t==="light"?"Dark Mode":"Light Mode"})]})]})}function Uy(){return Mt.jsx("footer",{className:"footer",children:Mt.jsxs("div",{className:"footer-content",children:[Mt.jsxs("p",{children:["© ",new Date().getFullYear()," Jachen Liu. All rights reserved."]}),Mt.jsxs("div",{className:"social-links",children:[Mt.jsx("a",{href:"https://linkedin.com/in/jachenliu",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),Mt.jsx("a",{href:"https://github.com/jachenliu",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]}),Mt.jsxs("p",{children:["Contact: ",Mt.jsx("a",{href:"mailto:jachen.liu@gmail.com",children:"jachen.liu@gmail.com"})]})]})})}function Ly({children:s}){return Mt.jsxs("div",{className:"layout-container",children:[Mt.jsx("header",{children:Mt.jsx(Dy,{})}),Mt.jsx("main",{className:"main-content",children:s}),Mt.jsx("footer",{className:"footer",children:Mt.jsx(Uy,{})})]})}function Ny(){return Mt.jsxs("div",{className:"resume-container",children:[Mt.jsx("h2",{className:"resume-title",children:"My Resume"}),Mt.jsx("div",{className:"resume-viewer",children:Mt.jsx("iframe",{src:"/Jachen Liu Resume 2024.pdf",title:"Jachen Liu's Resume",width:"100%",height:"500px"})}),Mt.jsx("div",{className:"resume-download",children:Mt.jsx("a",{href:"/Jachen_Liu_Resume.pdf",download:"Jachen Liu Resume 2024.pdf",className:"download-button",children:"Download Resume"})})]})}const Oy=()=>Mt.jsxs("div",{children:[Mt.jsx("h1",{children:"404 - Page Not Found"}),Mt.jsx("p",{children:"Sorry, the page you’re looking for doesn’t exist."})]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yd="171",Ts={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Py=0,pg=1,zy=2,C0=1,By=2,ta=3,Ia=0,Hn=1,ea=2,Ba=0,bs=1,mg=2,_g=3,gg=4,Fy=5,mr=100,Iy=101,Hy=102,Gy=103,Vy=104,ky=200,Xy=201,Wy=202,Yy=203,Lh=204,Nh=205,qy=206,jy=207,Zy=208,Ky=209,Qy=210,Jy=211,$y=212,tM=213,eM=214,Oh=0,Ph=1,zh=2,Cs=3,Bh=4,Fh=5,Ih=6,Hh=7,w0=0,nM=1,iM=2,Fa=0,aM=1,rM=2,sM=3,oM=4,lM=5,cM=6,uM=7,D0=300,ws=301,Ds=302,Gh=303,Vh=304,Gc=306,kh=1e3,gr=1001,Xh=1002,Si=1003,fM=1004,sc=1005,Ci=1006,$f=1007,vr=1008,ra=1009,U0=1010,L0=1011,Wo=1012,Md=1013,xr=1014,na=1015,Zo=1016,Ed=1017,Td=1018,Us=1020,N0=35902,O0=1021,P0=1022,gi=1023,z0=1024,B0=1025,As=1026,Ls=1027,F0=1028,bd=1029,I0=1030,Ad=1031,Rd=1033,wc=33776,Dc=33777,Uc=33778,Lc=33779,Wh=35840,Yh=35841,qh=35842,jh=35843,Zh=36196,Kh=37492,Qh=37496,Jh=37808,$h=37809,td=37810,ed=37811,nd=37812,id=37813,ad=37814,rd=37815,sd=37816,od=37817,ld=37818,cd=37819,ud=37820,fd=37821,Nc=36492,hd=36494,dd=36495,H0=36283,pd=36284,md=36285,_d=36286,hM=3200,dM=3201,G0=0,pM=1,Oa="",oi="srgb",Ns="srgb-linear",Bc="linear",Pe="srgb",ss=7680,vg=519,mM=512,_M=513,gM=514,V0=515,vM=516,SM=517,xM=518,yM=519,Sg=35044,xg="300 es",ia=2e3,Fc=2001;class br{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yg=1234567;const Go=Math.PI/180,Yo=180/Math.PI;function zs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function me(s,t,i){return Math.max(t,Math.min(i,s))}function Cd(s,t){return(s%t+t)%t}function MM(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function EM(s,t,i){return s!==t?(i-s)/(t-s):0}function Vo(s,t,i){return(1-i)*s+i*t}function TM(s,t,i,r){return Vo(s,t,1-Math.exp(-i*r))}function bM(s,t=1){return t-Math.abs(Cd(s,t*2)-t)}function AM(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function RM(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function CM(s,t){return s+Math.floor(Math.random()*(t-s+1))}function wM(s,t){return s+Math.random()*(t-s)}function DM(s){return s*(.5-Math.random())}function UM(s){s!==void 0&&(yg=s);let t=yg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function LM(s){return s*Go}function NM(s){return s*Yo}function OM(s){return(s&s-1)===0&&s!==0}function PM(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function zM(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function BM(s,t,i,r,l){const u=Math.cos,h=Math.sin,d=u(i/2),p=h(i/2),m=u((t+r)/2),_=h((t+r)/2),g=u((t-r)/2),S=h((t-r)/2),M=u((r-t)/2),T=h((r-t)/2);switch(l){case"XYX":s.set(d*_,p*g,p*S,d*m);break;case"YZY":s.set(p*S,d*_,p*g,d*m);break;case"ZXZ":s.set(p*g,p*S,d*_,d*m);break;case"XZX":s.set(d*_,p*T,p*M,d*m);break;case"YXY":s.set(p*M,d*_,p*T,d*m);break;case"ZYZ":s.set(p*T,p*M,d*_,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function xs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const FM={DEG2RAD:Go,RAD2DEG:Yo,generateUUID:zs,clamp:me,euclideanModulo:Cd,mapLinear:MM,inverseLerp:EM,lerp:Vo,damp:TM,pingpong:bM,smoothstep:AM,smootherstep:RM,randInt:CM,randFloat:wM,randFloatSpread:DM,seededRandom:UM,degToRad:LM,radToDeg:NM,isPowerOfTwo:OM,ceilPowerOfTwo:PM,floorPowerOfTwo:zM,setQuaternionFromProperEuler:BM,normalize:Pn,denormalize:xs};class ce{constructor(t=0,i=0){ce.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,i,r,l,u,h,d,p,m){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,p,m)}set(t,i,r,l,u,h,d,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=p,_[6]=r,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],_=r[4],g=r[7],S=r[2],M=r[5],T=r[8],w=l[0],y=l[3],v=l[6],P=l[1],O=l[4],D=l[7],I=l[2],G=l[5],F=l[8];return u[0]=h*w+d*P+p*I,u[3]=h*y+d*O+p*G,u[6]=h*v+d*D+p*F,u[1]=m*w+_*P+g*I,u[4]=m*y+_*O+g*G,u[7]=m*v+_*D+g*F,u[2]=S*w+M*P+T*I,u[5]=S*y+M*O+T*G,u[8]=S*v+M*D+T*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8];return i*h*_-i*d*m-r*u*_+r*d*p+l*u*m-l*h*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],g=_*h-d*m,S=d*p-_*u,M=m*u-h*p,T=i*g+r*S+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=g*w,t[1]=(l*m-_*r)*w,t[2]=(d*r-l*h)*w,t[3]=S*w,t[4]=(_*i-l*p)*w,t[5]=(l*u-d*i)*w,t[6]=M*w,t[7]=(r*p-m*i)*w,t[8]=(h*i-r*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(th.makeScale(t,i)),this}rotate(t){return this.premultiply(th.makeRotation(-t)),this}translate(t,i){return this.premultiply(th.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const th=new le;function k0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ic(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function IM(){const s=Ic("canvas");return s.style.display="block",s}const Mg={};function ys(s){s in Mg||(Mg[s]=!0,console.warn(s))}function HM(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function GM(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function VM(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Eg=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tg=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kM(){const s={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Pe&&(l.r=aa(l.r),l.g=aa(l.g),l.b=aa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=Rs(l.r),l.g=Rs(l.g),l.b=Rs(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Oa?Bc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ns]:{primaries:t,whitePoint:r,transfer:Bc,toXYZ:Eg,fromXYZ:Tg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:r,transfer:Pe,toXYZ:Eg,fromXYZ:Tg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),s}const Ce=kM();function aa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let os;class XM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{os===void 0&&(os=Ic("canvas")),os.width=t.width,os.height=t.height;const r=os.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=os}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ic("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=aa(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(aa(i[r]/255)*255):i[r]=aa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let WM=0;class X0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=zs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(eh(l[h].image)):u.push(eh(l[h]))}else u=eh(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function eh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?XM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YM=0;class Gn extends br{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=gr,l=gr,u=Ci,h=vr,d=gi,p=ra,m=Gn.DEFAULT_ANISOTROPY,_=Oa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=zs(),this.name="",this.source=new X0(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==D0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kh:t.x=t.x-Math.floor(t.x);break;case gr:t.x=t.x<0?0:1;break;case Xh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kh:t.y=t.y-Math.floor(t.y);break;case gr:t.y=t.y<0?0:1;break;case Xh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=D0;Gn.DEFAULT_ANISOTROPY=1;class je{constructor(t=0,i=0,r=0,l=1){je.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const p=t.elements,m=p[0],_=p[4],g=p[8],S=p[1],M=p[5],T=p[9],w=p[2],y=p[6],v=p[10];if(Math.abs(_-S)<.01&&Math.abs(g-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(g+w)<.1&&Math.abs(T+y)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,D=(M+1)/2,I=(v+1)/2,G=(_+S)/4,F=(g+w)/4,K=(T+y)/4;return O>D&&O>I?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=G/r,u=F/r):D>I?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=G/l,u=K/l):I<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),r=F/u,l=K/u),this.set(r,l,u,i),this}let P=Math.sqrt((y-T)*(y-T)+(g-w)*(g-w)+(S-_)*(S-_));return Math.abs(P)<.001&&(P=1),this.x=(y-T)/P,this.y=(g-w)/P,this.z=(S-_)/P,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qM extends br{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new je(0,0,t,i),this.scissorTest=!1,this.viewport=new je(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Gn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,l=t.textures.length;r<l;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new X0(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends qM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class W0 extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jM extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],_=r[l+2],g=r[l+3];const S=u[h+0],M=u[h+1],T=u[h+2],w=u[h+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=_,t[i+3]=g;return}if(d===1){t[i+0]=S,t[i+1]=M,t[i+2]=T,t[i+3]=w;return}if(g!==w||p!==S||m!==M||_!==T){let y=1-d;const v=p*S+m*M+_*T+g*w,P=v>=0?1:-1,O=1-v*v;if(O>Number.EPSILON){const I=Math.sqrt(O),G=Math.atan2(I,v*P);y=Math.sin(y*G)/I,d=Math.sin(d*G)/I}const D=d*P;if(p=p*y+S*D,m=m*y+M*D,_=_*y+T*D,g=g*y+w*D,y===1-d){const I=1/Math.sqrt(p*p+m*m+_*_+g*g);p*=I,m*=I,_*=I,g*=I}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],_=r[l+3],g=u[h],S=u[h+1],M=u[h+2],T=u[h+3];return t[i]=d*T+_*g+p*M-m*S,t[i+1]=p*T+_*S+m*g-d*M,t[i+2]=m*T+_*M+d*S-p*g,t[i+3]=_*T-d*g-p*S-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(l/2),g=d(u/2),S=p(r/2),M=p(l/2),T=p(u/2);switch(h){case"XYZ":this._x=S*_*g+m*M*T,this._y=m*M*g-S*_*T,this._z=m*_*T+S*M*g,this._w=m*_*g-S*M*T;break;case"YXZ":this._x=S*_*g+m*M*T,this._y=m*M*g-S*_*T,this._z=m*_*T-S*M*g,this._w=m*_*g+S*M*T;break;case"ZXY":this._x=S*_*g-m*M*T,this._y=m*M*g+S*_*T,this._z=m*_*T+S*M*g,this._w=m*_*g-S*M*T;break;case"ZYX":this._x=S*_*g-m*M*T,this._y=m*M*g+S*_*T,this._z=m*_*T-S*M*g,this._w=m*_*g+S*M*T;break;case"YZX":this._x=S*_*g+m*M*T,this._y=m*M*g+S*_*T,this._z=m*_*T-S*M*g,this._w=m*_*g-S*M*T;break;case"XZY":this._x=S*_*g-m*M*T,this._y=m*M*g-S*_*T,this._z=m*_*T+S*M*g,this._w=m*_*g+S*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],_=i[6],g=i[10],S=r+d+g;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-p)*M,this._y=(u-m)*M,this._z=(h-l)*M}else if(r>d&&r>g){const M=2*Math.sqrt(1+r-d-g);this._w=(_-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+m)/M}else if(d>g){const M=2*Math.sqrt(1+d-r-g);this._w=(u-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+g-r-d);this._w=(h-l)/M,this._x=(u+m)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=r*_+h*d+l*m-u*p,this._y=l*_+h*p+u*d-r*m,this._z=u*_+h*m+r*p-l*d,this._w=h*_-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),g=Math.sin((1-i)*_)/m,S=Math.sin(i*_)/m;return this._w=h*g+this._w*S,this._x=r*g+this._x*S,this._y=l*g+this._y*S,this._z=u*g+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,i=0,r=0){tt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(bg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(bg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*r),_=2*(d*i-u*l),g=2*(u*r-h*i);return this.x=i+p*m+h*g-d*_,this.y=r+p*_+d*m-u*g,this.z=l+p*g+u*_-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return nh.copy(this).projectOnVector(t),this.sub(nh)}reflect(t){return this.sub(nh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nh=new tt,bg=new Mr;class Ko{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,di):di.fromBufferAttribute(u,h),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),oc.copy(r.boundingBox)),oc.applyMatrix4(t.matrixWorld),this.union(oc)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),lc.subVectors(this.max,zo),ls.subVectors(t.a,zo),cs.subVectors(t.b,zo),us.subVectors(t.c,zo),Ra.subVectors(cs,ls),Ca.subVectors(us,cs),lr.subVectors(ls,us);let i=[0,-Ra.z,Ra.y,0,-Ca.z,Ca.y,0,-lr.z,lr.y,Ra.z,0,-Ra.x,Ca.z,0,-Ca.x,lr.z,0,-lr.x,-Ra.y,Ra.x,0,-Ca.y,Ca.x,0,-lr.y,lr.x,0];return!ih(i,ls,cs,us,lc)||(i=[1,0,0,0,1,0,0,0,1],!ih(i,ls,cs,us,lc))?!1:(cc.crossVectors(Ra,Ca),i=[cc.x,cc.y,cc.z],ih(i,ls,cs,us,lc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ji=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],di=new tt,oc=new Ko,ls=new tt,cs=new tt,us=new tt,Ra=new tt,Ca=new tt,lr=new tt,zo=new tt,lc=new tt,cc=new tt,cr=new tt;function ih(s,t,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){cr.fromArray(s,u);const d=l.x*Math.abs(cr.x)+l.y*Math.abs(cr.y)+l.z*Math.abs(cr.z),p=t.dot(cr),m=i.dot(cr),_=r.dot(cr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const ZM=new Ko,Bo=new tt,ah=new tt;class wd{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):ZM.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Bo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ah.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(ah)),this.expandByPoint(Bo.copy(t.center).sub(ah))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new tt,rh=new tt,uc=new tt,wa=new tt,sh=new tt,fc=new tt,oh=new tt;class Y0{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Zi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){rh.copy(t).add(i).multiplyScalar(.5),uc.copy(i).sub(t).normalize(),wa.copy(this.origin).sub(rh);const u=t.distanceTo(i)*.5,h=-this.direction.dot(uc),d=wa.dot(this.direction),p=-wa.dot(uc),m=wa.lengthSq(),_=Math.abs(1-h*h);let g,S,M,T;if(_>0)if(g=h*p-d,S=h*d-p,T=u*_,g>=0)if(S>=-T)if(S<=T){const w=1/_;g*=w,S*=w,M=g*(g+h*S+2*d)+S*(h*g+S+2*p)+m}else S=u,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*p)+m;else S=-u,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*p)+m;else S<=-T?(g=Math.max(0,-(-h*u+d)),S=g>0?-u:Math.min(Math.max(-u,-p),u),M=-g*g+S*(S+2*p)+m):S<=T?(g=0,S=Math.min(Math.max(-u,-p),u),M=S*(S+2*p)+m):(g=Math.max(0,-(h*u+d)),S=g>0?u:Math.min(Math.max(-u,-p),u),M=-g*g+S*(S+2*p)+m);else S=h>0?-u:u,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(rh).addScaledVector(uc,S),M}intersectSphere(t,i){Zi.subVectors(t.center,this.origin);const r=Zi.dot(this.direction),l=Zi.dot(Zi)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,p;const m=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,S=this.origin;return m>=0?(r=(t.min.x-S.x)*m,l=(t.max.x-S.x)*m):(r=(t.max.x-S.x)*m,l=(t.min.x-S.x)*m),_>=0?(u=(t.min.y-S.y)*_,h=(t.max.y-S.y)*_):(u=(t.max.y-S.y)*_,h=(t.min.y-S.y)*_),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-S.z)*g,p=(t.max.z-S.z)*g):(d=(t.max.z-S.z)*g,p=(t.min.z-S.z)*g),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,i,r,l,u){sh.subVectors(i,t),fc.subVectors(r,t),oh.crossVectors(sh,fc);let h=this.direction.dot(oh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;wa.subVectors(this.origin,t);const p=d*this.direction.dot(fc.crossVectors(wa,fc));if(p<0)return null;const m=d*this.direction.dot(sh.cross(wa));if(m<0||p+m>h)return null;const _=-d*wa.dot(oh);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(t,i,r,l,u,h,d,p,m,_,g,S,M,T,w,y){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,p,m,_,g,S,M,T,w,y)}set(t,i,r,l,u,h,d,p,m,_,g,S,M,T,w,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=p,v[2]=m,v[6]=_,v[10]=g,v[14]=S,v[3]=M,v[7]=T,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/fs.setFromMatrixColumn(t,0).length(),u=1/fs.setFromMatrixColumn(t,1).length(),h=1/fs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const S=h*_,M=h*g,T=d*_,w=d*g;i[0]=p*_,i[4]=-p*g,i[8]=m,i[1]=M+T*m,i[5]=S-w*m,i[9]=-d*p,i[2]=w-S*m,i[6]=T+M*m,i[10]=h*p}else if(t.order==="YXZ"){const S=p*_,M=p*g,T=m*_,w=m*g;i[0]=S+w*d,i[4]=T*d-M,i[8]=h*m,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=M*d-T,i[6]=w+S*d,i[10]=h*p}else if(t.order==="ZXY"){const S=p*_,M=p*g,T=m*_,w=m*g;i[0]=S-w*d,i[4]=-h*g,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*_,i[9]=w-S*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const S=h*_,M=h*g,T=d*_,w=d*g;i[0]=p*_,i[4]=T*m-M,i[8]=S*m+w,i[1]=p*g,i[5]=w*m+S,i[9]=M*m-T,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const S=h*p,M=h*m,T=d*p,w=d*m;i[0]=p*_,i[4]=w-S*g,i[8]=T*g+M,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-m*_,i[6]=M*g+T,i[10]=S-w*g}else if(t.order==="XZY"){const S=h*p,M=h*m,T=d*p,w=d*m;i[0]=p*_,i[4]=-g,i[8]=m*_,i[1]=S*g+w,i[5]=h*_,i[9]=M*g-T,i[2]=T*g-M,i[6]=d*_,i[10]=w*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(KM,t,QM)}lookAt(t,i,r){const l=this.elements;return jn.subVectors(t,i),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Da.crossVectors(r,jn),Da.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Da.crossVectors(r,jn)),Da.normalize(),hc.crossVectors(jn,Da),l[0]=Da.x,l[4]=hc.x,l[8]=jn.x,l[1]=Da.y,l[5]=hc.y,l[9]=jn.y,l[2]=Da.z,l[6]=hc.z,l[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],_=r[1],g=r[5],S=r[9],M=r[13],T=r[2],w=r[6],y=r[10],v=r[14],P=r[3],O=r[7],D=r[11],I=r[15],G=l[0],F=l[4],K=l[8],C=l[12],R=l[1],B=l[5],ct=l[9],at=l[13],mt=l[2],dt=l[6],Y=l[10],rt=l[14],j=l[3],St=l[7],L=l[11],it=l[15];return u[0]=h*G+d*R+p*mt+m*j,u[4]=h*F+d*B+p*dt+m*St,u[8]=h*K+d*ct+p*Y+m*L,u[12]=h*C+d*at+p*rt+m*it,u[1]=_*G+g*R+S*mt+M*j,u[5]=_*F+g*B+S*dt+M*St,u[9]=_*K+g*ct+S*Y+M*L,u[13]=_*C+g*at+S*rt+M*it,u[2]=T*G+w*R+y*mt+v*j,u[6]=T*F+w*B+y*dt+v*St,u[10]=T*K+w*ct+y*Y+v*L,u[14]=T*C+w*at+y*rt+v*it,u[3]=P*G+O*R+D*mt+I*j,u[7]=P*F+O*B+D*dt+I*St,u[11]=P*K+O*ct+D*Y+I*L,u[15]=P*C+O*at+D*rt+I*it,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],p=t[9],m=t[13],_=t[2],g=t[6],S=t[10],M=t[14],T=t[3],w=t[7],y=t[11],v=t[15];return T*(+u*p*g-l*m*g-u*d*S+r*m*S+l*d*M-r*p*M)+w*(+i*p*M-i*m*S+u*h*S-l*h*M+l*m*_-u*p*_)+y*(+i*m*g-i*d*M-u*h*g+r*h*M+u*d*_-r*m*_)+v*(-l*d*_-i*p*g+i*d*S+l*h*g-r*h*S+r*p*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],g=t[9],S=t[10],M=t[11],T=t[12],w=t[13],y=t[14],v=t[15],P=g*y*m-w*S*m+w*p*M-d*y*M-g*p*v+d*S*v,O=T*S*m-_*y*m-T*p*M+h*y*M+_*p*v-h*S*v,D=_*w*m-T*g*m+T*d*M-h*w*M-_*d*v+h*g*v,I=T*g*p-_*w*p-T*d*S+h*w*S+_*d*y-h*g*y,G=i*P+r*O+l*D+u*I;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/G;return t[0]=P*F,t[1]=(w*S*u-g*y*u-w*l*M+r*y*M+g*l*v-r*S*v)*F,t[2]=(d*y*u-w*p*u+w*l*m-r*y*m-d*l*v+r*p*v)*F,t[3]=(g*p*u-d*S*u-g*l*m+r*S*m+d*l*M-r*p*M)*F,t[4]=O*F,t[5]=(_*y*u-T*S*u+T*l*M-i*y*M-_*l*v+i*S*v)*F,t[6]=(T*p*u-h*y*u-T*l*m+i*y*m+h*l*v-i*p*v)*F,t[7]=(h*S*u-_*p*u+_*l*m-i*S*m-h*l*M+i*p*M)*F,t[8]=D*F,t[9]=(T*g*u-_*w*u-T*r*M+i*w*M+_*r*v-i*g*v)*F,t[10]=(h*w*u-T*d*u+T*r*m-i*w*m-h*r*v+i*d*v)*F,t[11]=(_*d*u-h*g*u-_*r*m+i*g*m+h*r*M-i*d*M)*F,t[12]=I*F,t[13]=(_*w*l-T*g*l+T*r*S-i*w*S-_*r*y+i*g*y)*F,t[14]=(T*d*l-h*w*l-T*r*p+i*w*p+h*r*y-i*d*y)*F,t[15]=(h*g*l-_*d*l+_*r*p-i*g*p-h*r*S+i*d*S)*F,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,p=t.z,m=u*h,_=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+r,_*p-l*h,0,m*p-l*d,_*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,_=h+h,g=d+d,S=u*m,M=u*_,T=u*g,w=h*_,y=h*g,v=d*g,P=p*m,O=p*_,D=p*g,I=r.x,G=r.y,F=r.z;return l[0]=(1-(w+v))*I,l[1]=(M+D)*I,l[2]=(T-O)*I,l[3]=0,l[4]=(M-D)*G,l[5]=(1-(S+v))*G,l[6]=(y+P)*G,l[7]=0,l[8]=(T+O)*F,l[9]=(y-P)*F,l[10]=(1-(S+w))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=fs.set(l[0],l[1],l[2]).length();const h=fs.set(l[4],l[5],l[6]).length(),d=fs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],pi.copy(this);const m=1/u,_=1/h,g=1/d;return pi.elements[0]*=m,pi.elements[1]*=m,pi.elements[2]*=m,pi.elements[4]*=_,pi.elements[5]*=_,pi.elements[6]*=_,pi.elements[8]*=g,pi.elements[9]*=g,pi.elements[10]*=g,i.setFromRotationMatrix(pi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=ia){const p=this.elements,m=2*u/(i-t),_=2*u/(r-l),g=(i+t)/(i-t),S=(r+l)/(r-l);let M,T;if(d===ia)M=-(h+u)/(h-u),T=-2*h*u/(h-u);else if(d===Fc)M=-h/(h-u),T=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=ia){const p=this.elements,m=1/(i-t),_=1/(r-l),g=1/(h-u),S=(i+t)*m,M=(r+l)*_;let T,w;if(d===ia)T=(h+u)*g,w=-2*g;else if(d===Fc)T=u*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=w,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const fs=new tt,pi=new Ze,KM=new tt(0,0,0),QM=new tt(1,1,1),Da=new tt,hc=new tt,jn=new tt,Ag=new Ze,Rg=new Mr;class Di{constructor(t=0,i=0,r=0,l=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],_=l[9],g=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(me(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Ag.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ag,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Rg.setFromEuler(this),this.setFromQuaternion(Rg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class q0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let JM=0;const Cg=new tt,hs=new Mr,Ki=new Ze,dc=new tt,Fo=new tt,$M=new tt,tE=new Mr,wg=new tt(1,0,0),Dg=new tt(0,1,0),Ug=new tt(0,0,1),Lg={type:"added"},eE={type:"removed"},ds={type:"childadded",child:null},lh={type:"childremoved",child:null};class wn extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new tt,i=new Di,r=new Mr,l=new tt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new le}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(wg,t)}rotateY(t){return this.rotateOnAxis(Dg,t)}rotateZ(t){return this.rotateOnAxis(Ug,t)}translateOnAxis(t,i){return Cg.copy(t).applyQuaternion(this.quaternion),this.position.add(Cg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(wg,t)}translateY(t){return this.translateOnAxis(Dg,t)}translateZ(t){return this.translateOnAxis(Ug,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?dc.copy(t):dc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Fo,dc,this.up):Ki.lookAt(dc,Fo,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),hs.setFromRotationMatrix(Ki),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lg),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(eE),lh.child=t,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lg),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,$M),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,tE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const g=p[m];u(t.shapes,g)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),_=h(t.images),g=h(t.shapes),S=h(t.skeletons),M=h(t.animations),T=h(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new tt(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new tt,Qi=new tt,ch=new tt,Ji=new tt,ps=new tt,ms=new tt,Ng=new tt,uh=new tt,fh=new tt,hh=new tt,dh=new je,ph=new je,mh=new je;class _i{constructor(t=new tt,i=new tt,r=new tt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),mi.subVectors(t,i),l.cross(mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){mi.subVectors(l,i),Qi.subVectors(r,i),ch.subVectors(t,i);const h=mi.dot(mi),d=mi.dot(Qi),p=mi.dot(ch),m=Qi.dot(Qi),_=Qi.dot(ch),g=h*m-d*d;if(g===0)return u.set(0,0,0),null;const S=1/g,M=(m*p-d*_)*S,T=(h*_-d*p)*S;return u.set(1-M-T,T,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,i,r,l,u,h,d,p){return this.getBarycoord(t,i,r,l,Ji)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ji.x),p.addScaledVector(h,Ji.y),p.addScaledVector(d,Ji.z),p)}static getInterpolatedAttribute(t,i,r,l,u,h){return dh.setScalar(0),ph.setScalar(0),mh.setScalar(0),dh.fromBufferAttribute(t,i),ph.fromBufferAttribute(t,r),mh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(dh,u.x),h.addScaledVector(ph,u.y),h.addScaledVector(mh,u.z),h}static isFrontFacing(t,i,r,l){return mi.subVectors(r,i),Qi.subVectors(t,i),mi.cross(Qi).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),mi.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return _i.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;ps.subVectors(l,r),ms.subVectors(u,r),uh.subVectors(t,r);const p=ps.dot(uh),m=ms.dot(uh);if(p<=0&&m<=0)return i.copy(r);fh.subVectors(t,l);const _=ps.dot(fh),g=ms.dot(fh);if(_>=0&&g<=_)return i.copy(l);const S=p*g-_*m;if(S<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(r).addScaledVector(ps,h);hh.subVectors(t,u);const M=ps.dot(hh),T=ms.dot(hh);if(T>=0&&M<=T)return i.copy(u);const w=M*m-p*T;if(w<=0&&m>=0&&T<=0)return d=m/(m-T),i.copy(r).addScaledVector(ms,d);const y=_*T-M*g;if(y<=0&&g-_>=0&&M-T>=0)return Ng.subVectors(u,l),d=(g-_)/(g-_+(M-T)),i.copy(l).addScaledVector(Ng,d);const v=1/(y+w+S);return h=w*v,d=S*v,i.copy(r).addScaledVector(ps,h).addScaledVector(ms,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const j0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ua={h:0,s:0,l:0},pc={h:0,s:0,l:0};function _h(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class we{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ce.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ce.workingColorSpace){if(t=Cd(t,1),i=me(i,0,1),r=me(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=_h(h,u,t+1/3),this.g=_h(h,u,t),this.b=_h(h,u,t-1/3)}return Ce.toWorkingColorSpace(this,l),this}setStyle(t,i=oi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=oi){const r=j0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=aa(t.r),this.g=aa(t.g),this.b=aa(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return Ce.fromWorkingColorSpace(Cn.copy(this),t),Math.round(me(Cn.r*255,0,255))*65536+Math.round(me(Cn.g*255,0,255))*256+Math.round(me(Cn.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const _=(d+h)/2;if(d===h)p=0,m=0;else{const g=h-d;switch(m=_<=.5?g/(h+d):g/(2-h-d),h){case r:p=(l-u)/g+(l<u?6:0);break;case l:p=(u-r)/g+2;break;case u:p=(r-l)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=oi){Ce.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,l=Cn.b;return t!==oi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ua),this.setHSL(Ua.h+t,Ua.s+i,Ua.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ua),t.getHSL(pc);const r=Vo(Ua.h,pc.h,i),l=Vo(Ua.s,pc.s,i),u=Vo(Ua.l,pc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new we;we.NAMES=j0;let nE=0;class Qo extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=bs,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Nh,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(r.blending=this.blending),this.side!==Ia&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Lh&&(r.blendSrc=this.blendSrc),this.blendDst!==Nh&&(r.blendDst=this.blendDst),this.blendEquation!==mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Z0 extends Qo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=w0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nn=new tt,mc=new ce;class wi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Sg,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)mc.fromBufferAttribute(this,i),mc.applyMatrix3(t),this.setXY(i,mc.x,mc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix3(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix4(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyNormalMatrix(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.transformDirection(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=xs(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Pn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=xs(i,this.array)),i}setX(t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=xs(i,this.array)),i}setY(t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=xs(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=xs(i,this.array)),i}setW(t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array),l=Pn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array),l=Pn(l,this.array),u=Pn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sg&&(t.usage=this.usage),t}}class K0 extends wi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Q0 extends wi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Sr extends wi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let iE=0;const si=new Ze,gh=new wn,_s=new tt,Zn=new Ko,Io=new Ko,vn=new tt;class Ar extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(k0(t)?Q0:K0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new le().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,i,r){return si.makeTranslation(t,i,r),this.applyMatrix4(si),this}scale(t,i,r){return si.makeScale(t,i,r),this.applyMatrix4(si),this}lookAt(t){return gh.lookAt(t),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Sr(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Zn.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const r=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Io.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(Zn.min,Io.min),Zn.expandByPoint(vn),vn.addVectors(Zn.max,Io.max),Zn.expandByPoint(vn)):(Zn.expandByPoint(Io.min),Zn.expandByPoint(Io.max))}Zn.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)vn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)vn.fromBufferAttribute(d,m),p&&(_s.fromBufferAttribute(t,m),vn.add(_s)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let K=0;K<r.count;K++)d[K]=new tt,p[K]=new tt;const m=new tt,_=new tt,g=new tt,S=new ce,M=new ce,T=new ce,w=new tt,y=new tt;function v(K,C,R){m.fromBufferAttribute(r,K),_.fromBufferAttribute(r,C),g.fromBufferAttribute(r,R),S.fromBufferAttribute(u,K),M.fromBufferAttribute(u,C),T.fromBufferAttribute(u,R),_.sub(m),g.sub(m),M.sub(S),T.sub(S);const B=1/(M.x*T.y-T.x*M.y);isFinite(B)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(g,-M.y).multiplyScalar(B),y.copy(g).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(B),d[K].add(w),d[C].add(w),d[R].add(w),p[K].add(y),p[C].add(y),p[R].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let K=0,C=P.length;K<C;++K){const R=P[K],B=R.start,ct=R.count;for(let at=B,mt=B+ct;at<mt;at+=3)v(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const O=new tt,D=new tt,I=new tt,G=new tt;function F(K){I.fromBufferAttribute(l,K),G.copy(I);const C=d[K];O.copy(C),O.sub(I.multiplyScalar(I.dot(C))).normalize(),D.crossVectors(G,C);const B=D.dot(p[K])<0?-1:1;h.setXYZW(K,O.x,O.y,O.z,B)}for(let K=0,C=P.length;K<C;++K){const R=P[K],B=R.start,ct=R.count;for(let at=B,mt=B+ct;at<mt;at+=3)F(t.getX(at+0)),F(t.getX(at+1)),F(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new tt,u=new tt,h=new tt,d=new tt,p=new tt,m=new tt,_=new tt,g=new tt;if(t)for(let S=0,M=t.count;S<M;S+=3){const T=t.getX(S+0),w=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),_.subVectors(h,u),g.subVectors(l,u),_.cross(g),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,y),d.add(_),p.add(_),m.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,u),g.subVectors(l,u),_.cross(g),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(d,p){const m=d.array,_=d.itemSize,g=d.normalized,S=new m.constructor(p.length*_);let M=0,T=0;for(let w=0,y=p.length;w<y;w++){d.isInterleavedBufferAttribute?M=p[w]*d.data.stride+d.offset:M=p[w]*_;for(let v=0;v<_;v++)S[T++]=m[M++]}return new wi(S,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ar,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,g=m.length;_<g;_++){const S=m[_],M=t(S,r);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let g=0,S=m.length;g<S;g++){const M=m[g];_.push(M.toJSON(t.data))}_.length>0&&(l[p]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const u=t.morphAttributes;for(const m in u){const _=[],g=u[m];for(let S=0,M=g.length;S<M;S++)_.push(g[S].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,_=h.length;m<_;m++){const g=h[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Og=new Ze,ur=new Y0,_c=new wd,Pg=new tt,gc=new tt,vc=new tt,Sc=new tt,vh=new tt,xc=new tt,zg=new tt,yc=new tt;class vi extends wn{constructor(t=new Ar,i=new Z0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){xc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],g=u[p];_!==0&&(vh.fromBufferAttribute(g,t),h?xc.addScaledVector(vh,_):xc.addScaledVector(vh.sub(i),_))}i.add(xc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_c.copy(r.boundingSphere),_c.applyMatrix4(u),ur.copy(t.ray).recast(t.near),!(_c.containsPoint(ur.origin)===!1&&(ur.intersectSphere(_c,Pg)===null||ur.origin.distanceToSquared(Pg)>(t.far-t.near)**2))&&(Og.copy(u).invert(),ur.copy(t.ray).applyMatrix4(Og),!(r.boundingBox!==null&&ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ur)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,w=S.length;T<w;T++){const y=S[T],v=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,I=O;D<I;D+=3){const G=d.getX(D),F=d.getX(D+1),K=d.getX(D+2);l=Mc(this,v,t,r,m,_,g,G,F,K),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let y=T,v=w;y<v;y+=3){const P=d.getX(y),O=d.getX(y+1),D=d.getX(y+2);l=Mc(this,h,t,r,m,_,g,P,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,w=S.length;T<w;T++){const y=S[T],v=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,I=O;D<I;D+=3){const G=D,F=D+1,K=D+2;l=Mc(this,v,t,r,m,_,g,G,F,K),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let y=T,v=w;y<v;y+=3){const P=y,O=y+1,D=y+2;l=Mc(this,h,t,r,m,_,g,P,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function aE(s,t,i,r,l,u,h,d){let p;if(t.side===Hn?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,t.side===Ia,d),p===null)return null;yc.copy(d),yc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(yc);return m<i.near||m>i.far?null:{distance:m,point:yc.clone(),object:s}}function Mc(s,t,i,r,l,u,h,d,p,m){s.getVertexPosition(d,gc),s.getVertexPosition(p,vc),s.getVertexPosition(m,Sc);const _=aE(s,t,i,r,gc,vc,Sc,zg);if(_){const g=new tt;_i.getBarycoord(zg,gc,vc,Sc,g),l&&(_.uv=_i.getInterpolatedAttribute(l,d,p,m,g,new ce)),u&&(_.uv1=_i.getInterpolatedAttribute(u,d,p,m,g,new ce)),h&&(_.normal=_i.getInterpolatedAttribute(h,d,p,m,g,new tt),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:p,c:m,normal:new tt,materialIndex:0};_i.getNormal(gc,vc,Sc,S.normal),_.face=S,_.barycoord=g}return _}class Bs extends Ar{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],_=[],g=[];let S=0,M=0;T("z","y","x",-1,-1,r,i,t,h,u,0),T("z","y","x",1,-1,r,i,-t,h,u,1),T("x","z","y",1,1,t,r,i,l,h,2),T("x","z","y",1,-1,t,r,-i,l,h,3),T("x","y","z",1,-1,t,i,r,l,u,4),T("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Sr(m,3)),this.setAttribute("normal",new Sr(_,3)),this.setAttribute("uv",new Sr(g,2));function T(w,y,v,P,O,D,I,G,F,K,C){const R=D/F,B=I/K,ct=D/2,at=I/2,mt=G/2,dt=F+1,Y=K+1;let rt=0,j=0;const St=new tt;for(let L=0;L<Y;L++){const it=L*B-at;for(let Tt=0;Tt<dt;Tt++){const At=Tt*R-ct;St[w]=At*P,St[y]=it*O,St[v]=mt,m.push(St.x,St.y,St.z),St[w]=0,St[y]=0,St[v]=G>0?1:-1,_.push(St.x,St.y,St.z),g.push(Tt/F),g.push(1-L/K),rt+=1}}for(let L=0;L<K;L++)for(let it=0;it<F;it++){const Tt=S+it+dt*L,At=S+it+dt*(L+1),q=S+(it+1)+dt*(L+1),ut=S+(it+1)+dt*L;p.push(Tt,At,ut),p.push(At,q,ut),j+=6}d.addGroup(M,j,C),M+=j,S+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Os(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function zn(s){const t={};for(let i=0;i<s.length;i++){const r=Os(s[i]);for(const l in r)t[l]=r[l]}return t}function rE(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function J0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const sE={clone:Os,merge:zn};var oE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ha extends Qo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oE,this.fragmentShader=lE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=rE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class $0 extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=ia}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const La=new tt,Bg=new ce,Fg=new ce;class li extends $0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Yo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){La.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(La.x,La.y).multiplyScalar(-t/La.z),La.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(La.x,La.y).multiplyScalar(-t/La.z)}getViewSize(t,i){return this.getViewBounds(t,Bg,Fg),i.subVectors(Fg,Bg)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Go*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,vs=1;class cE extends wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(gs,vs,t,i);l.layers=this.layers,this.add(l);const u=new li(gs,vs,t,i);u.layers=this.layers,this.add(u);const h=new li(gs,vs,t,i);h.layers=this.layers,this.add(h);const d=new li(gs,vs,t,i);d.layers=this.layers,this.add(d);const p=new li(gs,vs,t,i);p.layers=this.layers,this.add(p);const m=new li(gs,vs,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(t===ia)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Fc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,_]=this.children,g=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=w,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(g,S,M),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class tv extends Gn{constructor(t,i,r,l,u,h,d,p,m,_){t=t!==void 0?t:[],i=i!==void 0?i:ws,super(t,i,r,l,u,h,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uE extends yr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new tv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ci}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Bs(5,5,5),u=new Ha({name:"CubemapFromEquirect",uniforms:Os(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Ba});u.uniforms.tEquirect.value=i;const h=new vi(l,u),d=i.minFilter;return i.minFilter===vr&&(i.minFilter=Ci),new cE(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,r,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class fE extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Sh=new tt,hE=new tt,dE=new le;class Na{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Sh.subVectors(r,i).cross(hE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Sh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||dE.getNormalMatrix(t),l=this.coplanarPoint(Sh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new wd,Ec=new tt;class Dd{constructor(t=new Na,i=new Na,r=new Na,l=new Na,u=new Na,h=new Na){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ia){const r=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],_=l[5],g=l[6],S=l[7],M=l[8],T=l[9],w=l[10],y=l[11],v=l[12],P=l[13],O=l[14],D=l[15];if(r[0].setComponents(p-u,S-m,y-M,D-v).normalize(),r[1].setComponents(p+u,S+m,y+M,D+v).normalize(),r[2].setComponents(p+h,S+_,y+T,D+P).normalize(),r[3].setComponents(p-h,S-_,y-T,D-P).normalize(),r[4].setComponents(p-d,S-g,y-w,D-O).normalize(),i===ia)r[5].setComponents(p+d,S+g,y+w,D+O).normalize();else if(i===Fc)r[5].setComponents(d,g,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(t){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ec.x=l.normal.x>0?t.max.x:t.min.x,Ec.y=l.normal.y>0?t.max.y:t.min.y,Ec.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tc extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ev extends Gn{constructor(t,i,r,l,u,h,d,p,m,_=As){if(_!==As&&_!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===As&&(r=xr),r===void 0&&_===Ls&&(r=Us),super(null,l,u,h,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Si,this.minFilter=p!==void 0?p:Si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Jo extends Ar{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,_=p+1,g=t/d,S=i/p,M=[],T=[],w=[],y=[];for(let v=0;v<_;v++){const P=v*S-h;for(let O=0;O<m;O++){const D=O*g-u;T.push(D,-P,0),w.push(0,0,1),y.push(O/d),y.push(1-v/p)}}for(let v=0;v<p;v++)for(let P=0;P<d;P++){const O=P+m*v,D=P+m*(v+1),I=P+1+m*(v+1),G=P+1+m*v;M.push(O,D,G),M.push(D,I,G)}this.setIndex(M),this.setAttribute("position",new Sr(T,3)),this.setAttribute("normal",new Sr(w,3)),this.setAttribute("uv",new Sr(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ig extends Qo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=G0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pE extends Qo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mE extends Qo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class nv extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const xh=new Ze,Hg=new tt,Gg=new tt;class _E{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dd,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Hg.setFromMatrixPosition(t.matrixWorld),i.position.copy(Hg),Gg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Gg),i.updateMatrixWorld(),xh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(xh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class iv extends $0{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class gE extends _E{constructor(){super(new iv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vE extends nv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new gE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class SE extends nv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class xE extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Vg{constructor(t=1,i=0,r=0){return this.radius=t,this.phi=i,this.theta=r,this}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class yE extends br{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function kg(s,t,i,r){const l=ME(r);switch(i){case O0:return s*t;case z0:return s*t;case B0:return s*t*2;case F0:return s*t/l.components*l.byteLength;case bd:return s*t/l.components*l.byteLength;case I0:return s*t*2/l.components*l.byteLength;case Ad:return s*t*2/l.components*l.byteLength;case P0:return s*t*3/l.components*l.byteLength;case gi:return s*t*4/l.components*l.byteLength;case Rd:return s*t*4/l.components*l.byteLength;case wc:case Dc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Uc:case Lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yh:case jh:return Math.max(s,16)*Math.max(t,8)/4;case Wh:case qh:return Math.max(s,8)*Math.max(t,8)/2;case Zh:case Kh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Qh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Jh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $h:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case td:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ed:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case nd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case id:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ad:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case rd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case sd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case od:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ld:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case cd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ud:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case fd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Nc:case hd:case dd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case H0:case pd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case md:case _d:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ME(s){switch(s){case ra:case U0:return{byteLength:1,components:1};case Wo:case L0:case Zo:return{byteLength:2,components:1};case Ed:case Td:return{byteLength:2,components:4};case xr:case Md:case na:return{byteLength:4,components:1};case N0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function av(){let s=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function EE(s){const t=new WeakMap;function i(d,p){const m=d.array,_=d.usage,g=m.byteLength,S=s.createBuffer();s.bindBuffer(p,S),s.bufferData(p,m,_),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,p,m){const _=p.array,g=p.updateRanges;if(s.bindBuffer(m,d),g.length===0)s.bufferSubData(m,0,_);else{g.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<g.length;M++){const T=g[S],w=g[M];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++S,g[S]=w)}g.length=S+1;for(let M=0,T=g.length;M<T;M++){const w=g[M];s.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(s.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}var TE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bE=`#ifdef USE_ALPHAHASH
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
#endif`,AE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DE=`#ifdef USE_AOMAP
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
#endif`,UE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LE=`#ifdef USE_BATCHING
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
#endif`,NE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BE=`#ifdef USE_IRIDESCENCE
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
#endif`,FE=`#ifdef USE_BUMPMAP
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
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qE=`#define PI 3.141592653589793
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
} // validated`,jE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZE=`vec3 transformedNormal = objectNormal;
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
#endif`,KE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tT="gl_FragColor = linearToOutputTexel( gl_FragColor );",eT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nT=`#ifdef USE_ENVMAP
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
#endif`,iT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aT=`#ifdef USE_ENVMAP
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
#endif`,rT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sT=`#ifdef USE_ENVMAP
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
#endif`,oT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fT=`#ifdef USE_GRADIENTMAP
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
}`,hT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mT=`uniform bool receiveShadow;
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
#endif`,_T=`#ifdef USE_ENVMAP
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
#endif`,gT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ST=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yT=`PhysicalMaterial material;
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
#endif`,MT=`struct PhysicalMaterial {
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
}`,ET=`
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
#endif`,TT=`#if defined( RE_IndirectDiffuse )
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
#endif`,bT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,NT=`#if defined( USE_POINTS_UV )
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
#endif`,OT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IT=`#ifdef USE_MORPHTARGETS
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
#endif`,HT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YT=`#ifdef USE_NORMALMAP
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
#endif`,qT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$T=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ib=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lb=`float getShadowMask() {
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
}`,cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ub=`#ifdef USE_SKINNING
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
#endif`,fb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hb=`#ifdef USE_SKINNING
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
#endif`,db=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_b=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gb=`#ifdef USE_TRANSMISSION
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
#endif`,vb=`#ifdef USE_TRANSMISSION
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
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tb=`uniform sampler2D t2D;
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
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`#include <common>
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
}`,Db=`#if DEPTH_PACKING == 3200
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
}`,Ub=`#define DISTANCE
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
}`,Lb=`#define DISTANCE
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
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ob=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`uniform float scale;
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
}`,zb=`uniform vec3 diffuse;
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
}`,Bb=`#include <common>
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Ib=`#define LAMBERT
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
}`,Hb=`#define LAMBERT
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
}`,Gb=`#define MATCAP
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
}`,Vb=`#define MATCAP
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
}`,kb=`#define NORMAL
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
}`,Xb=`#define NORMAL
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
}`,Wb=`#define PHONG
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
}`,Yb=`#define PHONG
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
}`,qb=`#define STANDARD
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
}`,jb=`#define STANDARD
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
}`,Zb=`#define TOON
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
}`,Kb=`#define TOON
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
}`,Qb=`uniform float size;
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
}`,Jb=`uniform vec3 diffuse;
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
}`,$b=`#include <common>
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
}`,t1=`uniform vec3 color;
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
}`,e1=`uniform float rotation;
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
}`,n1=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:TE,alphahash_pars_fragment:bE,alphamap_fragment:AE,alphamap_pars_fragment:RE,alphatest_fragment:CE,alphatest_pars_fragment:wE,aomap_fragment:DE,aomap_pars_fragment:UE,batching_pars_vertex:LE,batching_vertex:NE,begin_vertex:OE,beginnormal_vertex:PE,bsdfs:zE,iridescence_fragment:BE,bumpmap_pars_fragment:FE,clipping_planes_fragment:IE,clipping_planes_pars_fragment:HE,clipping_planes_pars_vertex:GE,clipping_planes_vertex:VE,color_fragment:kE,color_pars_fragment:XE,color_pars_vertex:WE,color_vertex:YE,common:qE,cube_uv_reflection_fragment:jE,defaultnormal_vertex:ZE,displacementmap_pars_vertex:KE,displacementmap_vertex:QE,emissivemap_fragment:JE,emissivemap_pars_fragment:$E,colorspace_fragment:tT,colorspace_pars_fragment:eT,envmap_fragment:nT,envmap_common_pars_fragment:iT,envmap_pars_fragment:aT,envmap_pars_vertex:rT,envmap_physical_pars_fragment:_T,envmap_vertex:sT,fog_vertex:oT,fog_pars_vertex:lT,fog_fragment:cT,fog_pars_fragment:uT,gradientmap_pars_fragment:fT,lightmap_pars_fragment:hT,lights_lambert_fragment:dT,lights_lambert_pars_fragment:pT,lights_pars_begin:mT,lights_toon_fragment:gT,lights_toon_pars_fragment:vT,lights_phong_fragment:ST,lights_phong_pars_fragment:xT,lights_physical_fragment:yT,lights_physical_pars_fragment:MT,lights_fragment_begin:ET,lights_fragment_maps:TT,lights_fragment_end:bT,logdepthbuf_fragment:AT,logdepthbuf_pars_fragment:RT,logdepthbuf_pars_vertex:CT,logdepthbuf_vertex:wT,map_fragment:DT,map_pars_fragment:UT,map_particle_fragment:LT,map_particle_pars_fragment:NT,metalnessmap_fragment:OT,metalnessmap_pars_fragment:PT,morphinstance_vertex:zT,morphcolor_vertex:BT,morphnormal_vertex:FT,morphtarget_pars_vertex:IT,morphtarget_vertex:HT,normal_fragment_begin:GT,normal_fragment_maps:VT,normal_pars_fragment:kT,normal_pars_vertex:XT,normal_vertex:WT,normalmap_pars_fragment:YT,clearcoat_normal_fragment_begin:qT,clearcoat_normal_fragment_maps:jT,clearcoat_pars_fragment:ZT,iridescence_pars_fragment:KT,opaque_fragment:QT,packing:JT,premultiplied_alpha_fragment:$T,project_vertex:tb,dithering_fragment:eb,dithering_pars_fragment:nb,roughnessmap_fragment:ib,roughnessmap_pars_fragment:ab,shadowmap_pars_fragment:rb,shadowmap_pars_vertex:sb,shadowmap_vertex:ob,shadowmask_pars_fragment:lb,skinbase_vertex:cb,skinning_pars_vertex:ub,skinning_vertex:fb,skinnormal_vertex:hb,specularmap_fragment:db,specularmap_pars_fragment:pb,tonemapping_fragment:mb,tonemapping_pars_fragment:_b,transmission_fragment:gb,transmission_pars_fragment:vb,uv_pars_fragment:Sb,uv_pars_vertex:xb,uv_vertex:yb,worldpos_vertex:Mb,background_vert:Eb,background_frag:Tb,backgroundCube_vert:bb,backgroundCube_frag:Ab,cube_vert:Rb,cube_frag:Cb,depth_vert:wb,depth_frag:Db,distanceRGBA_vert:Ub,distanceRGBA_frag:Lb,equirect_vert:Nb,equirect_frag:Ob,linedashed_vert:Pb,linedashed_frag:zb,meshbasic_vert:Bb,meshbasic_frag:Fb,meshlambert_vert:Ib,meshlambert_frag:Hb,meshmatcap_vert:Gb,meshmatcap_frag:Vb,meshnormal_vert:kb,meshnormal_frag:Xb,meshphong_vert:Wb,meshphong_frag:Yb,meshphysical_vert:qb,meshphysical_frag:jb,meshtoon_vert:Zb,meshtoon_frag:Kb,points_vert:Qb,points_frag:Jb,shadow_vert:$b,shadow_frag:t1,sprite_vert:e1,sprite_frag:n1},Lt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ri={basic:{uniforms:zn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:zn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:zn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:zn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:zn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:zn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:zn([Lt.points,Lt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:zn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:zn([Lt.common,Lt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:zn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:zn([Lt.sprite,Lt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:zn([Lt.common,Lt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:zn([Lt.lights,Lt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ri.physical={uniforms:zn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const bc={r:0,b:0,g:0},hr=new Di,i1=new Ze;function a1(s,t,i,r,l,u,h){const d=new we(0);let p=u===!0?0:1,m,_,g=null,S=0,M=null;function T(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function w(O){let D=!1;const I=T(O);I===null?v(d,p):I&&I.isColor&&(v(I,1),D=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(O,D){const I=T(D);I&&(I.isCubeTexture||I.mapping===Gc)?(_===void 0&&(_=new vi(new Bs(1,1,1),new Ha({name:"BackgroundCubeMaterial",uniforms:Os(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,F,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),hr.copy(D.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),_.material.uniforms.envMap.value=I,_.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(i1.makeRotationFromEuler(hr)),_.material.toneMapped=Ce.getTransfer(I.colorSpace)!==Pe,(g!==I||S!==I.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,g=I,S=I.version,M=s.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new vi(new Jo(2,2),new Ha({name:"BackgroundMaterial",uniforms:Os(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Ce.getTransfer(I.colorSpace)!==Pe,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||S!==I.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,g=I,S=I.version,M=s.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function v(O,D){O.getRGB(bc,J0(s)),r.buffers.color.setClear(bc.r,bc.g,bc.b,D,h)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),p=D,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,v(d,p)},render:w,addToRenderList:y,dispose:P}}function r1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,h=!1;function d(R,B,ct,at,mt){let dt=!1;const Y=g(at,ct,B);u!==Y&&(u=Y,m(u.object)),dt=M(R,at,ct,mt),dt&&T(R,at,ct,mt),mt!==null&&t.update(mt,s.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,D(R,B,ct,at),mt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(mt).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function _(R){return s.deleteVertexArray(R)}function g(R,B,ct){const at=ct.wireframe===!0;let mt=r[R.id];mt===void 0&&(mt={},r[R.id]=mt);let dt=mt[B.id];dt===void 0&&(dt={},mt[B.id]=dt);let Y=dt[at];return Y===void 0&&(Y=S(p()),dt[at]=Y),Y}function S(R){const B=[],ct=[],at=[];for(let mt=0;mt<i;mt++)B[mt]=0,ct[mt]=0,at[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ct,attributeDivisors:at,object:R,attributes:{},index:null}}function M(R,B,ct,at){const mt=u.attributes,dt=B.attributes;let Y=0;const rt=ct.getAttributes();for(const j in rt)if(rt[j].location>=0){const L=mt[j];let it=dt[j];if(it===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(it=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(it=R.instanceColor)),L===void 0||L.attribute!==it||it&&L.data!==it.data)return!0;Y++}return u.attributesNum!==Y||u.index!==at}function T(R,B,ct,at){const mt={},dt=B.attributes;let Y=0;const rt=ct.getAttributes();for(const j in rt)if(rt[j].location>=0){let L=dt[j];L===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(L=R.instanceColor));const it={};it.attribute=L,L&&L.data&&(it.data=L.data),mt[j]=it,Y++}u.attributes=mt,u.attributesNum=Y,u.index=at}function w(){const R=u.newAttributes;for(let B=0,ct=R.length;B<ct;B++)R[B]=0}function y(R){v(R,0)}function v(R,B){const ct=u.newAttributes,at=u.enabledAttributes,mt=u.attributeDivisors;ct[R]=1,at[R]===0&&(s.enableVertexAttribArray(R),at[R]=1),mt[R]!==B&&(s.vertexAttribDivisor(R,B),mt[R]=B)}function P(){const R=u.newAttributes,B=u.enabledAttributes;for(let ct=0,at=B.length;ct<at;ct++)B[ct]!==R[ct]&&(s.disableVertexAttribArray(ct),B[ct]=0)}function O(R,B,ct,at,mt,dt,Y){Y===!0?s.vertexAttribIPointer(R,B,ct,mt,dt):s.vertexAttribPointer(R,B,ct,at,mt,dt)}function D(R,B,ct,at){w();const mt=at.attributes,dt=ct.getAttributes(),Y=B.defaultAttributeValues;for(const rt in dt){const j=dt[rt];if(j.location>=0){let St=mt[rt];if(St===void 0&&(rt==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),rt==="instanceColor"&&R.instanceColor&&(St=R.instanceColor)),St!==void 0){const L=St.normalized,it=St.itemSize,Tt=t.get(St);if(Tt===void 0)continue;const At=Tt.buffer,q=Tt.type,ut=Tt.bytesPerElement,xt=q===s.INT||q===s.UNSIGNED_INT||St.gpuType===Md;if(St.isInterleavedBufferAttribute){const bt=St.data,Rt=bt.stride,Vt=St.offset;if(bt.isInstancedInterleavedBuffer){for(let kt=0;kt<j.locationSize;kt++)v(j.location+kt,bt.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let kt=0;kt<j.locationSize;kt++)y(j.location+kt);s.bindBuffer(s.ARRAY_BUFFER,At);for(let kt=0;kt<j.locationSize;kt++)O(j.location+kt,it/j.locationSize,q,L,Rt*ut,(Vt+it/j.locationSize*kt)*ut,xt)}else{if(St.isInstancedBufferAttribute){for(let bt=0;bt<j.locationSize;bt++)v(j.location+bt,St.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let bt=0;bt<j.locationSize;bt++)y(j.location+bt);s.bindBuffer(s.ARRAY_BUFFER,At);for(let bt=0;bt<j.locationSize;bt++)O(j.location+bt,it/j.locationSize,q,L,it*ut,it/j.locationSize*bt*ut,xt)}}else if(Y!==void 0){const L=Y[rt];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(j.location,L);break;case 3:s.vertexAttrib3fv(j.location,L);break;case 4:s.vertexAttrib4fv(j.location,L);break;default:s.vertexAttrib1fv(j.location,L)}}}}P()}function I(){K();for(const R in r){const B=r[R];for(const ct in B){const at=B[ct];for(const mt in at)_(at[mt].object),delete at[mt];delete B[ct]}delete r[R]}}function G(R){if(r[R.id]===void 0)return;const B=r[R.id];for(const ct in B){const at=B[ct];for(const mt in at)_(at[mt].object),delete at[mt];delete B[ct]}delete r[R.id]}function F(R){for(const B in r){const ct=r[B];if(ct[R.id]===void 0)continue;const at=ct[R.id];for(const mt in at)_(at[mt].object),delete at[mt];delete ct[R.id]}}function K(){C(),h=!0,u!==l&&(u=l,m(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:G,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:y,disableUnusedAttributes:P}}function s1(s,t,i){let r;function l(m){r=m}function u(m,_){s.drawArrays(r,m,_),i.update(_,r,1)}function h(m,_,g){g!==0&&(s.drawArraysInstanced(r,m,_,g),i.update(_,r,g))}function d(m,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,g);let M=0;for(let T=0;T<g;T++)M+=_[T];i.update(M,r,1)}function p(m,_,g,S){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)h(m[T],_[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,_,0,S,0,g);let T=0;for(let w=0;w<g;w++)T+=_[w]*S[w];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function o1(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==gi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const K=F===Zo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==ra&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==na&&!K)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const g=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=T>0,G=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:I,maxSamples:G}}function l1(s){const t=this;let i=null,r=0,l=!1,u=!1;const h=new Na,d=new le,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const M=g.length!==0||S||r!==0||l;return l=S,r=g.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=_(g,S,0)},this.setState=function(g,S,M){const T=g.clippingPlanes,w=g.clipIntersection,y=g.clipShadows,v=s.get(g);if(!l||T===null||T.length===0||u&&!y)u?_(null):m();else{const P=u?0:r,O=P*4;let D=v.clippingState||null;p.value=D,D=_(T,S,O,M);for(let I=0;I!==O;++I)D[I]=i[I];v.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(g,S,M,T){const w=g!==null?g.length:0;let y=null;if(w!==0){if(y=p.value,T!==!0||y===null){const v=M+w*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<v)&&(y=new Float32Array(v));for(let O=0,D=M;O!==w;++O,D+=4)h.copy(g[O]).applyMatrix4(P,d),h.normal.toArray(y,D),y[D+3]=h.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}function c1(s){let t=new WeakMap;function i(h,d){return d===Gh?h.mapping=ws:d===Vh&&(h.mapping=Ds),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Gh||d===Vh)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new uE(p.height);return m.fromEquirectangularTexture(s,h),t.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Es=4,Xg=[.125,.215,.35,.446,.526,.582],_r=20,yh=new iv,Wg=new we;let Mh=null,Eh=0,Th=0,bh=!1;const pr=(1+Math.sqrt(5))/2,Ss=1/pr,Yg=[new tt(-pr,Ss,0),new tt(pr,Ss,0),new tt(-Ss,0,pr),new tt(Ss,0,pr),new tt(0,pr,-Ss),new tt(0,pr,Ss),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)];class qg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){Mh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mh,Eh,Th),this._renderer.xr.enabled=bh,t.scissorTest=!1,Ac(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ws||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Zo,format:gi,colorSpace:Ns,depthBuffer:!1},l=jg(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jg(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u1(u)),this._blurMaterial=f1(u,t,i)}return l}_compileMaterial(t){const i=new vi(this._lodPlanes[0],t);this._renderer.compile(i,yh)}_sceneToCubeUV(t,i,r,l){const d=new li(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,S=_.toneMapping;_.getClearColor(Wg),_.toneMapping=Fa,_.autoClear=!1;const M=new Z0({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),T=new vi(new Bs,M);let w=!1;const y=t.background;y?y.isColor&&(M.color.copy(y),t.background=null,w=!0):(M.color.copy(Wg),w=!0);for(let v=0;v<6;v++){const P=v%3;P===0?(d.up.set(0,p[v],0),d.lookAt(m[v],0,0)):P===1?(d.up.set(0,0,p[v]),d.lookAt(0,m[v],0)):(d.up.set(0,p[v],0),d.lookAt(0,0,m[v]));const O=this._cubeSize;Ac(l,P*O,v>2?O:0,O,O),_.setRenderTarget(l),w&&_.render(T,d),_.render(t,d)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=S,_.autoClear=g,t.background=y}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===ws||t.mapping===Ds;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zg());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new vi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;Ac(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,yh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Yg[(l-u-1)%Yg.length];this._blur(t,u-1,u,h,d)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new vi(this._lodPlanes[l],m),S=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*_r-1),w=u/T,y=isFinite(u)?1+Math.floor(_*w):_r;y>_r&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${_r}`);const v=[];let P=0;for(let F=0;F<_r;++F){const K=F/w,C=Math.exp(-K*K/2);v.push(C),F===0?P+=C:F<y&&(P+=2*C)}for(let F=0;F<v.length;F++)v[F]=v[F]/P;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=T,S.mipInt.value=O-r;const D=this._sizeLods[l],I=3*D*(l>O-Es?l-O+Es:0),G=4*(this._cubeSize-D);Ac(i,I,G,3*D,2*D),p.setRenderTarget(i),p.render(g,yh)}}function u1(s){const t=[],i=[],r=[];let l=s;const u=s-Es+1+Xg.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>s-Es?p=Xg[h-s+Es-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,g=1+m,S=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,T=6,w=3,y=2,v=1,P=new Float32Array(w*T*M),O=new Float32Array(y*T*M),D=new Float32Array(v*T*M);for(let G=0;G<M;G++){const F=G%3*2/3-1,K=G>2?0:-1,C=[F,K,0,F+2/3,K,0,F+2/3,K+1,0,F,K,0,F+2/3,K+1,0,F,K+1,0];P.set(C,w*T*G),O.set(S,y*T*G);const R=[G,G,G,G,G,G];D.set(R,v*T*G)}const I=new Ar;I.setAttribute("position",new wi(P,w)),I.setAttribute("uv",new wi(O,y)),I.setAttribute("faceIndex",new wi(D,v)),t.push(I),l>Es&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function jg(s,t,i){const r=new yr(s,t,i);return r.texture.mapping=Gc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ac(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function f1(s,t,i){const r=new Float32Array(_r),l=new tt(0,1,0);return new Ha({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ud(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Zg(){return new Ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ud(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Kg(){return new Ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Ud(){return`

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
	`}function h1(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Gh||p===Vh,_=p===ws||p===Ds;if(m||_){let g=t.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new qg(s)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return m&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new qg(s)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function d1(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ys("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function p1(s,t,i,r){const l={},u=new WeakMap;function h(g){const S=g.target;S.index!==null&&t.remove(S.index);for(const T in S.attributes)t.remove(S.attributes[T]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(t.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(g,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function p(g){const S=g.attributes;for(const M in S)t.update(S[M],s.ARRAY_BUFFER)}function m(g){const S=[],M=g.index,T=g.attributes.position;let w=0;if(M!==null){const P=M.array;w=M.version;for(let O=0,D=P.length;O<D;O+=3){const I=P[O+0],G=P[O+1],F=P[O+2];S.push(I,G,G,F,F,I)}}else if(T!==void 0){const P=T.array;w=T.version;for(let O=0,D=P.length/3-1;O<D;O+=3){const I=O+0,G=O+1,F=O+2;S.push(I,G,G,F,F,I)}}else return;const y=new(k0(S)?Q0:K0)(S,1);y.version=w;const v=u.get(g);v&&t.remove(v),u.set(g,y)}function _(g){const S=u.get(g);if(S){const M=g.index;M!==null&&S.version<M.version&&m(g)}else m(g);return u.get(g)}return{get:d,update:p,getWireframeAttribute:_}}function m1(s,t,i){let r;function l(S){r=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function p(S,M){s.drawElements(r,M,u,S*h),i.update(M,r,1)}function m(S,M,T){T!==0&&(s.drawElementsInstanced(r,M,u,S*h,T),i.update(M,r,T))}function _(S,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,T);let y=0;for(let v=0;v<T;v++)y+=M[v];i.update(y,r,1)}function g(S,M,T,w){if(T===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)m(S[v]/h,M[v],w[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,w,0,T);let v=0;for(let P=0;P<T;P++)v+=M[P]*w[P];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function _1(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function g1(s,t,i){const r=new WeakMap,l=new je;function u(h,d,p){const m=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let S=r.get(d);if(S===void 0||S.count!==g){let R=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;T===!0&&(D=1),w===!0&&(D=2),y===!0&&(D=3);let I=d.attributes.position.count*D,G=1;I>t.maxTextureSize&&(G=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const F=new Float32Array(I*G*4*g),K=new W0(F,I,G,g);K.type=na,K.needsUpdate=!0;const C=D*4;for(let B=0;B<g;B++){const ct=v[B],at=P[B],mt=O[B],dt=I*G*4*B;for(let Y=0;Y<ct.count;Y++){const rt=Y*C;T===!0&&(l.fromBufferAttribute(ct,Y),F[dt+rt+0]=l.x,F[dt+rt+1]=l.y,F[dt+rt+2]=l.z,F[dt+rt+3]=0),w===!0&&(l.fromBufferAttribute(at,Y),F[dt+rt+4]=l.x,F[dt+rt+5]=l.y,F[dt+rt+6]=l.z,F[dt+rt+7]=0),y===!0&&(l.fromBufferAttribute(mt,Y),F[dt+rt+8]=l.x,F[dt+rt+9]=l.y,F[dt+rt+10]=l.z,F[dt+rt+11]=mt.itemSize===4?l.w:1)}}S={count:g,texture:K,size:new ce(I,G)},r.set(d,S),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const w=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",w),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",S.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:u}}function v1(s,t,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,g=t.get(p,_);if(l.get(g)!==m&&(t.update(g),l.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return g}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}const rv=new Gn,Qg=new ev(1,1),sv=new W0,ov=new jM,lv=new tv,Jg=[],$g=[],t0=new Float32Array(16),e0=new Float32Array(9),n0=new Float32Array(4);function Fs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=Jg[l];if(u===void 0&&(u=new Float32Array(l),Jg[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(u,d)}return u}function hn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function dn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Vc(s,t){let i=$g[t];i===void 0&&(i=new Int32Array(t),$g[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function S1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function x1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2fv(this.addr,t),dn(i,t)}}function y1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;s.uniform3fv(this.addr,t),dn(i,t)}}function M1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4fv(this.addr,t),dn(i,t)}}function E1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;n0.set(r),s.uniformMatrix2fv(this.addr,!1,n0),dn(i,r)}}function T1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;e0.set(r),s.uniformMatrix3fv(this.addr,!1,e0),dn(i,r)}}function b1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;t0.set(r),s.uniformMatrix4fv(this.addr,!1,t0),dn(i,r)}}function A1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function R1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2iv(this.addr,t),dn(i,t)}}function C1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;s.uniform3iv(this.addr,t),dn(i,t)}}function w1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4iv(this.addr,t),dn(i,t)}}function D1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function U1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2uiv(this.addr,t),dn(i,t)}}function L1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;s.uniform3uiv(this.addr,t),dn(i,t)}}function N1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4uiv(this.addr,t),dn(i,t)}}function O1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(Qg.compareFunction=V0,u=Qg):u=rv,i.setTexture2D(t||u,l)}function P1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||ov,l)}function z1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||lv,l)}function B1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||sv,l)}function F1(s){switch(s){case 5126:return S1;case 35664:return x1;case 35665:return y1;case 35666:return M1;case 35674:return E1;case 35675:return T1;case 35676:return b1;case 5124:case 35670:return A1;case 35667:case 35671:return R1;case 35668:case 35672:return C1;case 35669:case 35673:return w1;case 5125:return D1;case 36294:return U1;case 36295:return L1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return O1;case 35679:case 36299:case 36307:return P1;case 35680:case 36300:case 36308:case 36293:return z1;case 36289:case 36303:case 36311:case 36292:return B1}}function I1(s,t){s.uniform1fv(this.addr,t)}function H1(s,t){const i=Fs(t,this.size,2);s.uniform2fv(this.addr,i)}function G1(s,t){const i=Fs(t,this.size,3);s.uniform3fv(this.addr,i)}function V1(s,t){const i=Fs(t,this.size,4);s.uniform4fv(this.addr,i)}function k1(s,t){const i=Fs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function X1(s,t){const i=Fs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function W1(s,t){const i=Fs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function Y1(s,t){s.uniform1iv(this.addr,t)}function q1(s,t){s.uniform2iv(this.addr,t)}function j1(s,t){s.uniform3iv(this.addr,t)}function Z1(s,t){s.uniform4iv(this.addr,t)}function K1(s,t){s.uniform1uiv(this.addr,t)}function Q1(s,t){s.uniform2uiv(this.addr,t)}function J1(s,t){s.uniform3uiv(this.addr,t)}function $1(s,t){s.uniform4uiv(this.addr,t)}function tA(s,t,i){const r=this.cache,l=t.length,u=Vc(i,l);hn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||rv,u[h])}function eA(s,t,i){const r=this.cache,l=t.length,u=Vc(i,l);hn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||ov,u[h])}function nA(s,t,i){const r=this.cache,l=t.length,u=Vc(i,l);hn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||lv,u[h])}function iA(s,t,i){const r=this.cache,l=t.length,u=Vc(i,l);hn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||sv,u[h])}function aA(s){switch(s){case 5126:return I1;case 35664:return H1;case 35665:return G1;case 35666:return V1;case 35674:return k1;case 35675:return X1;case 35676:return W1;case 5124:case 35670:return Y1;case 35667:case 35671:return q1;case 35668:case 35672:return j1;case 35669:case 35673:return Z1;case 5125:return K1;case 36294:return Q1;case 36295:return J1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return eA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}class rA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=F1(i.type)}}class sA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=aA(i.type)}}class oA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Ah=/(\w+)(\])?(\[|\.)?/g;function i0(s,t){s.seq.push(t),s.map[t.id]=t}function lA(s,t,i){const r=s.name,l=r.length;for(Ah.lastIndex=0;;){const u=Ah.exec(r),h=Ah.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){i0(i,m===void 0?new rA(d,s,t):new sA(d,s,t));break}else{let g=i.map[d];g===void 0&&(g=new oA(d),i0(i,g)),i=g}}}class Oc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);lA(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function a0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const cA=37297;let uA=0;function fA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const r0=new le;function hA(s){Ce._getMatrix(r0,Ce.workingColorSpace,s);const t=`mat3( ${r0.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(s)){case Bc:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function s0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+fA(s.getShaderSource(t),h)}else return l}function dA(s,t){const i=hA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function pA(s,t){let i;switch(t){case aM:i="Linear";break;case rM:i="Reinhard";break;case sM:i="Cineon";break;case oM:i="ACESFilmic";break;case cM:i="AgX";break;case uM:i="Neutral";break;case lM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Rc=new tt;function mA(){Ce.getLuminanceCoefficients(Rc);const s=Rc.x.toFixed(4),t=Rc.y.toFixed(4),i=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _A(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function gA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function vA(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Ho(s){return s!==""}function o0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function l0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const SA=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(s){return s.replace(SA,yA)}const xA=new Map;function yA(s,t){let i=ue[t];if(i===void 0){const r=xA.get(t);if(r!==void 0)i=ue[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return gd(i)}const MA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c0(s){return s.replace(MA,EA)}function EA(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function u0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function TA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===C0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===By?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ta&&(t="SHADOWMAP_TYPE_VSM"),t}function bA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ws:case Ds:t="ENVMAP_TYPE_CUBE";break;case Gc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function AA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ds:t="ENVMAP_MODE_REFRACTION";break}return t}function RA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case w0:t="ENVMAP_BLENDING_MULTIPLY";break;case nM:t="ENVMAP_BLENDING_MIX";break;case iM:t="ENVMAP_BLENDING_ADD";break}return t}function CA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function wA(s,t,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=TA(i),m=bA(i),_=AA(i),g=RA(i),S=CA(i),M=_A(i),T=gA(u),w=l.createProgram();let y,v,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ho).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ho).join(`
`),v.length>0&&(v+=`
`)):(y=[u0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),v=[u0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?ue.tonemapping_pars_fragment:"",i.toneMapping!==Fa?pA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,dA("linearToOutputTexel",i.outputColorSpace),mA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),h=gd(h),h=o0(h,i),h=l0(h,i),d=gd(d),d=o0(d,i),d=l0(d,i),h=c0(h),d=c0(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const O=P+y+h,D=P+v+d,I=a0(l,l.VERTEX_SHADER,O),G=a0(l,l.FRAGMENT_SHADER,D);l.attachShader(w,I),l.attachShader(w,G),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function F(B){if(s.debug.checkShaderErrors){const ct=l.getProgramInfoLog(w).trim(),at=l.getShaderInfoLog(I).trim(),mt=l.getShaderInfoLog(G).trim();let dt=!0,Y=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(dt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,I,G);else{const rt=s0(l,I,"vertex"),j=s0(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ct+`
`+rt+`
`+j)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(at===""||mt==="")&&(Y=!1);Y&&(B.diagnostics={runnable:dt,programLog:ct,vertexShader:{log:at,prefix:y},fragmentShader:{log:mt,prefix:v}})}l.deleteShader(I),l.deleteShader(G),K=new Oc(l,w),C=vA(l,w)}let K;this.getUniforms=function(){return K===void 0&&F(this),K};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(w,cA)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=uA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=G,this}let DA=0;class UA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new LA(t),i.set(t,r)),r}}class LA{constructor(t){this.id=DA++,this.code=t,this.usedTimes=0}}function NA(s,t,i,r,l,u,h){const d=new q0,p=new UA,m=new Set,_=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return m.add(C),C===0?"uv":`uv${C}`}function y(C,R,B,ct,at){const mt=ct.fog,dt=at.geometry,Y=C.isMeshStandardMaterial?ct.environment:null,rt=(C.isMeshStandardMaterial?i:t).get(C.envMap||Y),j=rt&&rt.mapping===Gc?rt.image.height:null,St=T[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const L=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,it=L!==void 0?L.length:0;let Tt=0;dt.morphAttributes.position!==void 0&&(Tt=1),dt.morphAttributes.normal!==void 0&&(Tt=2),dt.morphAttributes.color!==void 0&&(Tt=3);let At,q,ut,xt;if(St){const Ee=Ri[St];At=Ee.vertexShader,q=Ee.fragmentShader}else At=C.vertexShader,q=C.fragmentShader,p.update(C),ut=p.getVertexShaderID(C),xt=p.getFragmentShaderID(C);const bt=s.getRenderTarget(),Rt=s.state.buffers.depth.getReversed(),Vt=at.isInstancedMesh===!0,kt=at.isBatchedMesh===!0,ye=!!C.map,fe=!!C.matcap,De=!!rt,z=!!C.aoMap,Sn=!!C.lightMap,se=!!C.bumpMap,de=!!C.normalMap,qt=!!C.displacementMap,Ue=!!C.emissiveMap,jt=!!C.metalnessMap,U=!!C.roughnessMap,E=C.anisotropy>0,J=C.clearcoat>0,ft=C.dispersion>0,vt=C.iridescence>0,ht=C.sheen>0,Xt=C.transmission>0,wt=E&&!!C.anisotropyMap,Bt=J&&!!C.clearcoatMap,ve=J&&!!C.clearcoatNormalMap,Et=J&&!!C.clearcoatRoughnessMap,Ft=vt&&!!C.iridescenceMap,Kt=vt&&!!C.iridescenceThicknessMap,Wt=ht&&!!C.sheenColorMap,It=ht&&!!C.sheenRoughnessMap,ae=!!C.specularMap,$t=!!C.specularColorMap,Le=!!C.specularIntensityMap,X=Xt&&!!C.transmissionMap,Nt=Xt&&!!C.thicknessMap,st=!!C.gradientMap,_t=!!C.alphaMap,Ct=C.alphaTest>0,Dt=!!C.alphaHash,ee=!!C.extensions;let Ve=Fa;C.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Ve=s.toneMapping);const rn={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:At,fragmentShader:q,defines:C.defines,customVertexShaderID:ut,customFragmentShaderID:xt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:kt,batchingColor:kt&&at._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&at.instanceColor!==null,instancingMorph:Vt&&at.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:bt===null?s.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Ns,alphaToCoverage:!!C.alphaToCoverage,map:ye,matcap:fe,envMap:De,envMapMode:De&&rt.mapping,envMapCubeUVHeight:j,aoMap:z,lightMap:Sn,bumpMap:se,normalMap:de,displacementMap:S&&qt,emissiveMap:Ue,normalMapObjectSpace:de&&C.normalMapType===pM,normalMapTangentSpace:de&&C.normalMapType===G0,metalnessMap:jt,roughnessMap:U,anisotropy:E,anisotropyMap:wt,clearcoat:J,clearcoatMap:Bt,clearcoatNormalMap:ve,clearcoatRoughnessMap:Et,dispersion:ft,iridescence:vt,iridescenceMap:Ft,iridescenceThicknessMap:Kt,sheen:ht,sheenColorMap:Wt,sheenRoughnessMap:It,specularMap:ae,specularColorMap:$t,specularIntensityMap:Le,transmission:Xt,transmissionMap:X,thicknessMap:Nt,gradientMap:st,opaque:C.transparent===!1&&C.blending===bs&&C.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ct,alphaHash:Dt,combine:C.combine,mapUv:ye&&w(C.map.channel),aoMapUv:z&&w(C.aoMap.channel),lightMapUv:Sn&&w(C.lightMap.channel),bumpMapUv:se&&w(C.bumpMap.channel),normalMapUv:de&&w(C.normalMap.channel),displacementMapUv:qt&&w(C.displacementMap.channel),emissiveMapUv:Ue&&w(C.emissiveMap.channel),metalnessMapUv:jt&&w(C.metalnessMap.channel),roughnessMapUv:U&&w(C.roughnessMap.channel),anisotropyMapUv:wt&&w(C.anisotropyMap.channel),clearcoatMapUv:Bt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:ve&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:It&&w(C.sheenRoughnessMap.channel),specularMapUv:ae&&w(C.specularMap.channel),specularColorMapUv:$t&&w(C.specularColorMap.channel),specularIntensityMapUv:Le&&w(C.specularIntensityMap.channel),transmissionMapUv:X&&w(C.transmissionMap.channel),thicknessMapUv:Nt&&w(C.thicknessMap.channel),alphaMapUv:_t&&w(C.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(de||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!dt.attributes.uv&&(ye||_t),fog:!!mt,useFog:C.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Rt,skinning:at.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Tt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ve,decodeVideoTexture:ye&&C.map.isVideoTexture===!0&&Ce.getTransfer(C.map.colorSpace)===Pe,decodeVideoTextureEmissive:Ue&&C.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(C.emissiveMap.colorSpace)===Pe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ea,flipSided:C.side===Hn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ee&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&C.extensions.multiDraw===!0||kt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return rn.vertexUv1s=m.has(1),rn.vertexUv2s=m.has(2),rn.vertexUv3s=m.has(3),m.clear(),rn}function v(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)R.push(B),R.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(P(R,C),O(R,C),R.push(s.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function P(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function O(C,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const R=T[C.type];let B;if(R){const ct=Ri[R];B=sE.clone(ct.uniforms)}else B=C.uniforms;return B}function I(C,R){let B;for(let ct=0,at=_.length;ct<at;ct++){const mt=_[ct];if(mt.cacheKey===R){B=mt,++B.usedTimes;break}}return B===void 0&&(B=new wA(s,R,C,u),_.push(B)),B}function G(C){if(--C.usedTimes===0){const R=_.indexOf(C);_[R]=_[_.length-1],_.pop(),C.destroy()}}function F(C){p.remove(C)}function K(){p.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:D,acquireProgram:I,releaseProgram:G,releaseShaderCache:F,programs:_,dispose:K}}function OA(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,p){s.get(h)[d]=p}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function PA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function f0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function h0(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(g,S,M,T,w,y){let v=s[t];return v===void 0?(v={id:g.id,object:g,geometry:S,material:M,groupOrder:T,renderOrder:g.renderOrder,z:w,group:y},s[t]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=M,v.groupOrder=T,v.renderOrder=g.renderOrder,v.z=w,v.group=y),t++,v}function d(g,S,M,T,w,y){const v=h(g,S,M,T,w,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function p(g,S,M,T,w,y){const v=h(g,S,M,T,w,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function m(g,S){i.length>1&&i.sort(g||PA),r.length>1&&r.sort(S||f0),l.length>1&&l.sort(S||f0)}function _(){for(let g=t,S=s.length;g<S;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:p,finish:_,sort:m}}function zA(){let s=new WeakMap;function t(r,l){const u=s.get(r);let h;return u===void 0?(h=new h0,s.set(r,[h])):l>=u.length?(h=new h0,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function BA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new we};break;case"SpotLight":i={position:new tt,direction:new tt,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return s[t.id]=i,i}}}function FA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let IA=0;function HA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function GA(s){const t=new BA,i=FA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new tt);const l=new tt,u=new Ze,h=new Ze;function d(m){let _=0,g=0,S=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,T=0,w=0,y=0,v=0,P=0,O=0,D=0,I=0,G=0,F=0;m.sort(HA);for(let C=0,R=m.length;C<R;C++){const B=m[C],ct=B.color,at=B.intensity,mt=B.distance,dt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=ct.r*at,g+=ct.g*at,S+=ct.b*at;else if(B.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(B.sh.coefficients[Y],at);F++}else if(B.isDirectionalLight){const Y=t.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const rt=B.shadow,j=i.get(B);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize=rt.mapSize,r.directionalShadow[M]=j,r.directionalShadowMap[M]=dt,r.directionalShadowMatrix[M]=B.shadow.matrix,P++}r.directional[M]=Y,M++}else if(B.isSpotLight){const Y=t.get(B);Y.position.setFromMatrixPosition(B.matrixWorld),Y.color.copy(ct).multiplyScalar(at),Y.distance=mt,Y.coneCos=Math.cos(B.angle),Y.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Y.decay=B.decay,r.spot[w]=Y;const rt=B.shadow;if(B.map&&(r.spotLightMap[I]=B.map,I++,rt.updateMatrices(B),B.castShadow&&G++),r.spotLightMatrix[w]=rt.matrix,B.castShadow){const j=i.get(B);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize=rt.mapSize,r.spotShadow[w]=j,r.spotShadowMap[w]=dt,D++}w++}else if(B.isRectAreaLight){const Y=t.get(B);Y.color.copy(ct).multiplyScalar(at),Y.halfWidth.set(B.width*.5,0,0),Y.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=Y,y++}else if(B.isPointLight){const Y=t.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),Y.distance=B.distance,Y.decay=B.decay,B.castShadow){const rt=B.shadow,j=i.get(B);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize=rt.mapSize,j.shadowCameraNear=rt.camera.near,j.shadowCameraFar=rt.camera.far,r.pointShadow[T]=j,r.pointShadowMap[T]=dt,r.pointShadowMatrix[T]=B.shadow.matrix,O++}r.point[T]=Y,T++}else if(B.isHemisphereLight){const Y=t.get(B);Y.skyColor.copy(B.color).multiplyScalar(at),Y.groundColor.copy(B.groundColor).multiplyScalar(at),r.hemi[v]=Y,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=S;const K=r.hash;(K.directionalLength!==M||K.pointLength!==T||K.spotLength!==w||K.rectAreaLength!==y||K.hemiLength!==v||K.numDirectionalShadows!==P||K.numPointShadows!==O||K.numSpotShadows!==D||K.numSpotMaps!==I||K.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=y,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=D+I-G,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=F,K.directionalLength=M,K.pointLength=T,K.spotLength=w,K.rectAreaLength=y,K.hemiLength=v,K.numDirectionalShadows=P,K.numPointShadows=O,K.numSpotShadows=D,K.numSpotMaps=I,K.numLightProbes=F,r.version=IA++)}function p(m,_){let g=0,S=0,M=0,T=0,w=0;const y=_.matrixWorldInverse;for(let v=0,P=m.length;v<P;v++){const O=m[v];if(O.isDirectionalLight){const D=r.directional[g];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),g++}else if(O.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const D=r.rectArea[T];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),h.identity(),u.copy(O.matrixWorld),u.premultiply(y),h.extractRotation(u),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),T++}else if(O.isPointLight){const D=r.point[S];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),S++}else if(O.isHemisphereLight){const D=r.hemi[w];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(y),w++}}}return{setup:d,setupView:p,state:r}}function d0(s){const t=new GA(s),i=[],r=[];function l(_){m.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function h(_){r.push(_)}function d(){t.setup(i)}function p(_){t.setupView(i,_)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function VA(s){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new d0(s),t.set(l,[d])):u>=h.length?(d=new d0(s),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const kA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XA=`uniform sampler2D shadow_pass;
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
}`;function WA(s,t,i){let r=new Dd;const l=new ce,u=new ce,h=new je,d=new pE({depthPacking:dM}),p=new mE,m={},_=i.maxTextureSize,g={[Ia]:Hn,[Hn]:Ia,[ea]:ea},S=new Ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:kA,fragmentShader:XA}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new Ar;T.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new vi(T,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C0;let v=this.type;this.render=function(G,F,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const C=s.getRenderTarget(),R=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ct=s.state;ct.setBlending(Ba),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const at=v!==ta&&this.type===ta,mt=v===ta&&this.type!==ta;for(let dt=0,Y=G.length;dt<Y;dt++){const rt=G[dt],j=rt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const St=j.getFrameExtents();if(l.multiply(St),u.copy(j.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/St.x),l.x=u.x*St.x,j.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/St.y),l.y=u.y*St.y,j.mapSize.y=u.y)),j.map===null||at===!0||mt===!0){const it=this.type!==ta?{minFilter:Si,magFilter:Si}:{};j.map!==null&&j.map.dispose(),j.map=new yr(l.x,l.y,it),j.map.texture.name=rt.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const L=j.getViewportCount();for(let it=0;it<L;it++){const Tt=j.getViewport(it);h.set(u.x*Tt.x,u.y*Tt.y,u.x*Tt.z,u.y*Tt.w),ct.viewport(h),j.updateMatrices(rt,it),r=j.getFrustum(),D(F,K,j.camera,rt,this.type)}j.isPointLightShadow!==!0&&this.type===ta&&P(j,K),j.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(C,R,B)};function P(G,F){const K=t.update(w);S.defines.VSM_SAMPLES!==G.blurSamples&&(S.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new yr(l.x,l.y)),S.uniforms.shadow_pass.value=G.map.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,s.setRenderTarget(G.mapPass),s.clear(),s.renderBufferDirect(F,null,K,S,w,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,s.setRenderTarget(G.map),s.clear(),s.renderBufferDirect(F,null,K,M,w,null)}function O(G,F,K,C){let R=null;const B=K.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(B!==void 0)R=B;else if(R=K.isPointLight===!0?p:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ct=R.uuid,at=F.uuid;let mt=m[ct];mt===void 0&&(mt={},m[ct]=mt);let dt=mt[at];dt===void 0&&(dt=R.clone(),mt[at]=dt,F.addEventListener("dispose",I)),R=dt}if(R.visible=F.visible,R.wireframe=F.wireframe,C===ta?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:g[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,K.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ct=s.properties.get(R);ct.light=K}return R}function D(G,F,K,C,R){if(G.visible===!1)return;if(G.layers.test(F.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&R===ta)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,G.matrixWorld);const at=t.update(G),mt=G.material;if(Array.isArray(mt)){const dt=at.groups;for(let Y=0,rt=dt.length;Y<rt;Y++){const j=dt[Y],St=mt[j.materialIndex];if(St&&St.visible){const L=O(G,St,C,R);G.onBeforeShadow(s,G,F,K,at,L,j),s.renderBufferDirect(K,null,at,L,G,j),G.onAfterShadow(s,G,F,K,at,L,j)}}}else if(mt.visible){const dt=O(G,mt,C,R);G.onBeforeShadow(s,G,F,K,at,dt,null),s.renderBufferDirect(K,null,at,dt,G,null),G.onAfterShadow(s,G,F,K,at,dt,null)}}const ct=G.children;for(let at=0,mt=ct.length;at<mt;at++)D(ct[at],F,K,C,R)}function I(G){G.target.removeEventListener("dispose",I);for(const K in m){const C=m[K],R=G.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const YA={[Oh]:Ph,[zh]:Ih,[Bh]:Hh,[Cs]:Fh,[Ph]:Oh,[Ih]:zh,[Hh]:Bh,[Fh]:Cs};function qA(s,t){function i(){let X=!1;const Nt=new je;let st=null;const _t=new je(0,0,0,0);return{setMask:function(Ct){st!==Ct&&!X&&(s.colorMask(Ct,Ct,Ct,Ct),st=Ct)},setLocked:function(Ct){X=Ct},setClear:function(Ct,Dt,ee,Ve,rn){rn===!0&&(Ct*=Ve,Dt*=Ve,ee*=Ve),Nt.set(Ct,Dt,ee,Ve),_t.equals(Nt)===!1&&(s.clearColor(Ct,Dt,ee,Ve),_t.copy(Nt))},reset:function(){X=!1,st=null,_t.set(-1,0,0,0)}}}function r(){let X=!1,Nt=!1,st=null,_t=null,Ct=null;return{setReversed:function(Dt){if(Nt!==Dt){const ee=t.get("EXT_clip_control");Nt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);const Ve=Ct;Ct=null,this.setClear(Ve)}Nt=Dt},getReversed:function(){return Nt},setTest:function(Dt){Dt?bt(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(Dt){st!==Dt&&!X&&(s.depthMask(Dt),st=Dt)},setFunc:function(Dt){if(Nt&&(Dt=YA[Dt]),_t!==Dt){switch(Dt){case Oh:s.depthFunc(s.NEVER);break;case Ph:s.depthFunc(s.ALWAYS);break;case zh:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case Bh:s.depthFunc(s.EQUAL);break;case Fh:s.depthFunc(s.GEQUAL);break;case Ih:s.depthFunc(s.GREATER);break;case Hh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=Dt}},setLocked:function(Dt){X=Dt},setClear:function(Dt){Ct!==Dt&&(Nt&&(Dt=1-Dt),s.clearDepth(Dt),Ct=Dt)},reset:function(){X=!1,st=null,_t=null,Ct=null,Nt=!1}}}function l(){let X=!1,Nt=null,st=null,_t=null,Ct=null,Dt=null,ee=null,Ve=null,rn=null;return{setTest:function(Ee){X||(Ee?bt(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(Ee){Nt!==Ee&&!X&&(s.stencilMask(Ee),Nt=Ee)},setFunc:function(Ee,Dn,Un){(st!==Ee||_t!==Dn||Ct!==Un)&&(s.stencilFunc(Ee,Dn,Un),st=Ee,_t=Dn,Ct=Un)},setOp:function(Ee,Dn,Un){(Dt!==Ee||ee!==Dn||Ve!==Un)&&(s.stencilOp(Ee,Dn,Un),Dt=Ee,ee=Dn,Ve=Un)},setLocked:function(Ee){X=Ee},setClear:function(Ee){rn!==Ee&&(s.clearStencil(Ee),rn=Ee)},reset:function(){X=!1,Nt=null,st=null,_t=null,Ct=null,Dt=null,ee=null,Ve=null,rn=null}}}const u=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let _={},g={},S=new WeakMap,M=[],T=null,w=!1,y=null,v=null,P=null,O=null,D=null,I=null,G=null,F=new we(0,0,0),K=0,C=!1,R=null,B=null,ct=null,at=null,mt=null;const dt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,rt=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=rt>=1):j.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=rt>=2);let St=null,L={};const it=s.getParameter(s.SCISSOR_BOX),Tt=s.getParameter(s.VIEWPORT),At=new je().fromArray(it),q=new je().fromArray(Tt);function ut(X,Nt,st,_t){const Ct=new Uint8Array(4),Dt=s.createTexture();s.bindTexture(X,Dt),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ee=0;ee<st;ee++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Nt,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,Ct):s.texImage2D(Nt+ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ct);return Dt}const xt={};xt[s.TEXTURE_2D]=ut(s.TEXTURE_2D,s.TEXTURE_2D,1),xt[s.TEXTURE_CUBE_MAP]=ut(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[s.TEXTURE_2D_ARRAY]=ut(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xt[s.TEXTURE_3D]=ut(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),bt(s.DEPTH_TEST),h.setFunc(Cs),se(!1),de(pg),bt(s.CULL_FACE),z(Ba);function bt(X){_[X]!==!0&&(s.enable(X),_[X]=!0)}function Rt(X){_[X]!==!1&&(s.disable(X),_[X]=!1)}function Vt(X,Nt){return g[X]!==Nt?(s.bindFramebuffer(X,Nt),g[X]=Nt,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Nt),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Nt),!0):!1}function kt(X,Nt){let st=M,_t=!1;if(X){st=S.get(Nt),st===void 0&&(st=[],S.set(Nt,st));const Ct=X.textures;if(st.length!==Ct.length||st[0]!==s.COLOR_ATTACHMENT0){for(let Dt=0,ee=Ct.length;Dt<ee;Dt++)st[Dt]=s.COLOR_ATTACHMENT0+Dt;st.length=Ct.length,_t=!0}}else st[0]!==s.BACK&&(st[0]=s.BACK,_t=!0);_t&&s.drawBuffers(st)}function ye(X){return T!==X?(s.useProgram(X),T=X,!0):!1}const fe={[mr]:s.FUNC_ADD,[Iy]:s.FUNC_SUBTRACT,[Hy]:s.FUNC_REVERSE_SUBTRACT};fe[Gy]=s.MIN,fe[Vy]=s.MAX;const De={[ky]:s.ZERO,[Xy]:s.ONE,[Wy]:s.SRC_COLOR,[Lh]:s.SRC_ALPHA,[Qy]:s.SRC_ALPHA_SATURATE,[Zy]:s.DST_COLOR,[qy]:s.DST_ALPHA,[Yy]:s.ONE_MINUS_SRC_COLOR,[Nh]:s.ONE_MINUS_SRC_ALPHA,[Ky]:s.ONE_MINUS_DST_COLOR,[jy]:s.ONE_MINUS_DST_ALPHA,[Jy]:s.CONSTANT_COLOR,[$y]:s.ONE_MINUS_CONSTANT_COLOR,[tM]:s.CONSTANT_ALPHA,[eM]:s.ONE_MINUS_CONSTANT_ALPHA};function z(X,Nt,st,_t,Ct,Dt,ee,Ve,rn,Ee){if(X===Ba){w===!0&&(Rt(s.BLEND),w=!1);return}if(w===!1&&(bt(s.BLEND),w=!0),X!==Fy){if(X!==y||Ee!==C){if((v!==mr||D!==mr)&&(s.blendEquation(s.FUNC_ADD),v=mr,D=mr),Ee)switch(X){case bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mg:s.blendFunc(s.ONE,s.ONE);break;case _g:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gg:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mg:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case _g:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gg:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}P=null,O=null,I=null,G=null,F.set(0,0,0),K=0,y=X,C=Ee}return}Ct=Ct||Nt,Dt=Dt||st,ee=ee||_t,(Nt!==v||Ct!==D)&&(s.blendEquationSeparate(fe[Nt],fe[Ct]),v=Nt,D=Ct),(st!==P||_t!==O||Dt!==I||ee!==G)&&(s.blendFuncSeparate(De[st],De[_t],De[Dt],De[ee]),P=st,O=_t,I=Dt,G=ee),(Ve.equals(F)===!1||rn!==K)&&(s.blendColor(Ve.r,Ve.g,Ve.b,rn),F.copy(Ve),K=rn),y=X,C=!1}function Sn(X,Nt){X.side===ea?Rt(s.CULL_FACE):bt(s.CULL_FACE);let st=X.side===Hn;Nt&&(st=!st),se(st),X.blending===bs&&X.transparent===!1?z(Ba):z(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const _t=X.stencilWrite;d.setTest(_t),_t&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ue(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?bt(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function se(X){R!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),R=X)}function de(X){X!==Py?(bt(s.CULL_FACE),X!==B&&(X===pg?s.cullFace(s.BACK):X===zy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),B=X}function qt(X){X!==ct&&(Y&&s.lineWidth(X),ct=X)}function Ue(X,Nt,st){X?(bt(s.POLYGON_OFFSET_FILL),(at!==Nt||mt!==st)&&(s.polygonOffset(Nt,st),at=Nt,mt=st)):Rt(s.POLYGON_OFFSET_FILL)}function jt(X){X?bt(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function U(X){X===void 0&&(X=s.TEXTURE0+dt-1),St!==X&&(s.activeTexture(X),St=X)}function E(X,Nt,st){st===void 0&&(St===null?st=s.TEXTURE0+dt-1:st=St);let _t=L[st];_t===void 0&&(_t={type:void 0,texture:void 0},L[st]=_t),(_t.type!==X||_t.texture!==Nt)&&(St!==st&&(s.activeTexture(st),St=st),s.bindTexture(X,Nt||xt[X]),_t.type=X,_t.texture=Nt)}function J(){const X=L[St];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ft(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ft(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(X){At.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),At.copy(X))}function It(X){q.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),q.copy(X))}function ae(X,Nt){let st=m.get(Nt);st===void 0&&(st=new WeakMap,m.set(Nt,st));let _t=st.get(X);_t===void 0&&(_t=s.getUniformBlockIndex(Nt,X.name),st.set(X,_t))}function $t(X,Nt){const _t=m.get(Nt).get(X);p.get(Nt)!==_t&&(s.uniformBlockBinding(Nt,_t,X.__bindingPointIndex),p.set(Nt,_t))}function Le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},St=null,L={},g={},S=new WeakMap,M=[],T=null,w=!1,y=null,v=null,P=null,O=null,D=null,I=null,G=null,F=new we(0,0,0),K=0,C=!1,R=null,B=null,ct=null,at=null,mt=null,At.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:bt,disable:Rt,bindFramebuffer:Vt,drawBuffers:kt,useProgram:ye,setBlending:z,setMaterial:Sn,setFlipSided:se,setCullFace:de,setLineWidth:qt,setPolygonOffset:Ue,setScissorTest:jt,activeTexture:U,bindTexture:E,unbindTexture:J,compressedTexImage2D:ft,compressedTexImage3D:vt,texImage2D:Ft,texImage3D:Kt,updateUBOMapping:ae,uniformBlockBinding:$t,texStorage2D:ve,texStorage3D:Et,texSubImage2D:ht,texSubImage3D:Xt,compressedTexSubImage2D:wt,compressedTexSubImage3D:Bt,scissor:Wt,viewport:It,reset:Le}}function jA(s,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ce,_=new WeakMap;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,E){return M?new OffscreenCanvas(U,E):Ic("canvas")}function w(U,E,J){let ft=1;const vt=jt(U);if((vt.width>J||vt.height>J)&&(ft=J/Math.max(vt.width,vt.height)),ft<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ht=Math.floor(ft*vt.width),Xt=Math.floor(ft*vt.height);g===void 0&&(g=T(ht,Xt));const wt=E?T(ht,Xt):g;return wt.width=ht,wt.height=Xt,wt.getContext("2d").drawImage(U,0,0,ht,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ht+"x"+Xt+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),U;return U}function y(U){return U.generateMipmaps}function v(U){s.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(U,E,J,ft,vt=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ht=E;if(E===s.RED&&(J===s.FLOAT&&(ht=s.R32F),J===s.HALF_FLOAT&&(ht=s.R16F),J===s.UNSIGNED_BYTE&&(ht=s.R8)),E===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ht=s.R8UI),J===s.UNSIGNED_SHORT&&(ht=s.R16UI),J===s.UNSIGNED_INT&&(ht=s.R32UI),J===s.BYTE&&(ht=s.R8I),J===s.SHORT&&(ht=s.R16I),J===s.INT&&(ht=s.R32I)),E===s.RG&&(J===s.FLOAT&&(ht=s.RG32F),J===s.HALF_FLOAT&&(ht=s.RG16F),J===s.UNSIGNED_BYTE&&(ht=s.RG8)),E===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(ht=s.RG8UI),J===s.UNSIGNED_SHORT&&(ht=s.RG16UI),J===s.UNSIGNED_INT&&(ht=s.RG32UI),J===s.BYTE&&(ht=s.RG8I),J===s.SHORT&&(ht=s.RG16I),J===s.INT&&(ht=s.RG32I)),E===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),J===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),J===s.UNSIGNED_INT&&(ht=s.RGB32UI),J===s.BYTE&&(ht=s.RGB8I),J===s.SHORT&&(ht=s.RGB16I),J===s.INT&&(ht=s.RGB32I)),E===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),J===s.UNSIGNED_INT&&(ht=s.RGBA32UI),J===s.BYTE&&(ht=s.RGBA8I),J===s.SHORT&&(ht=s.RGBA16I),J===s.INT&&(ht=s.RGBA32I)),E===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),E===s.RGBA){const Xt=vt?Bc:Ce.getTransfer(ft);J===s.FLOAT&&(ht=s.RGBA32F),J===s.HALF_FLOAT&&(ht=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ht=Xt===Pe?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function D(U,E){let J;return U?E===null||E===xr||E===Us?J=s.DEPTH24_STENCIL8:E===na?J=s.DEPTH32F_STENCIL8:E===Wo&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===xr||E===Us?J=s.DEPTH_COMPONENT24:E===na?J=s.DEPTH_COMPONENT32F:E===Wo&&(J=s.DEPTH_COMPONENT16),J}function I(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Si&&U.minFilter!==Ci?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function G(U){const E=U.target;E.removeEventListener("dispose",G),K(E),E.isVideoTexture&&_.delete(E)}function F(U){const E=U.target;E.removeEventListener("dispose",F),R(E)}function K(U){const E=r.get(U);if(E.__webglInit===void 0)return;const J=U.source,ft=S.get(J);if(ft){const vt=ft[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&C(U),Object.keys(ft).length===0&&S.delete(J)}r.remove(U)}function C(U){const E=r.get(U);s.deleteTexture(E.__webglTexture);const J=U.source,ft=S.get(J);delete ft[E.__cacheKey],h.memory.textures--}function R(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let vt=0;vt<E.__webglFramebuffer[ft].length;vt++)s.deleteFramebuffer(E.__webglFramebuffer[ft][vt]);else s.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)s.deleteFramebuffer(E.__webglFramebuffer[ft]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=U.textures;for(let ft=0,vt=J.length;ft<vt;ft++){const ht=r.get(J[ft]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),h.memory.textures--),r.remove(J[ft])}r.remove(U)}let B=0;function ct(){B=0}function at(){const U=B;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),B+=1,U}function mt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function dt(U,E){const J=r.get(U);if(U.isVideoTexture&&qt(U),U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){const ft=U.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(J,U,E);return}}i.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+E)}function Y(U,E){const J=r.get(U);if(U.version>0&&J.__version!==U.version){q(J,U,E);return}i.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+E)}function rt(U,E){const J=r.get(U);if(U.version>0&&J.__version!==U.version){q(J,U,E);return}i.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+E)}function j(U,E){const J=r.get(U);if(U.version>0&&J.__version!==U.version){ut(J,U,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+E)}const St={[kh]:s.REPEAT,[gr]:s.CLAMP_TO_EDGE,[Xh]:s.MIRRORED_REPEAT},L={[Si]:s.NEAREST,[fM]:s.NEAREST_MIPMAP_NEAREST,[sc]:s.NEAREST_MIPMAP_LINEAR,[Ci]:s.LINEAR,[$f]:s.LINEAR_MIPMAP_NEAREST,[vr]:s.LINEAR_MIPMAP_LINEAR},it={[mM]:s.NEVER,[yM]:s.ALWAYS,[_M]:s.LESS,[V0]:s.LEQUAL,[gM]:s.EQUAL,[xM]:s.GEQUAL,[vM]:s.GREATER,[SM]:s.NOTEQUAL};function Tt(U,E){if(E.type===na&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ci||E.magFilter===$f||E.magFilter===sc||E.magFilter===vr||E.minFilter===Ci||E.minFilter===$f||E.minFilter===sc||E.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,St[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,St[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,St[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,L[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,it[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Si||E.minFilter!==sc&&E.minFilter!==vr||E.type===na&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");s.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function At(U,E){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",G));const ft=E.source;let vt=S.get(ft);vt===void 0&&(vt={},S.set(ft,vt));const ht=mt(E);if(ht!==U.__cacheKey){vt[ht]===void 0&&(vt[ht]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,J=!0),vt[ht].usedTimes++;const Xt=vt[U.__cacheKey];Xt!==void 0&&(vt[U.__cacheKey].usedTimes--,Xt.usedTimes===0&&C(E)),U.__cacheKey=ht,U.__webglTexture=vt[ht].texture}return J}function q(U,E,J){let ft=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=s.TEXTURE_3D);const vt=At(U,E),ht=E.source;i.bindTexture(ft,U.__webglTexture,s.TEXTURE0+J);const Xt=r.get(ht);if(ht.version!==Xt.__version||vt===!0){i.activeTexture(s.TEXTURE0+J);const wt=Ce.getPrimaries(Ce.workingColorSpace),Bt=E.colorSpace===Oa?null:Ce.getPrimaries(E.colorSpace),ve=E.colorSpace===Oa||wt===Bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Et=w(E.image,!1,l.maxTextureSize);Et=Ue(E,Et);const Ft=u.convert(E.format,E.colorSpace),Kt=u.convert(E.type);let Wt=O(E.internalFormat,Ft,Kt,E.colorSpace,E.isVideoTexture);Tt(ft,E);let It;const ae=E.mipmaps,$t=E.isVideoTexture!==!0,Le=Xt.__version===void 0||vt===!0,X=ht.dataReady,Nt=I(E,Et);if(E.isDepthTexture)Wt=D(E.format===Ls,E.type),Le&&($t?i.texStorage2D(s.TEXTURE_2D,1,Wt,Et.width,Et.height):i.texImage2D(s.TEXTURE_2D,0,Wt,Et.width,Et.height,0,Ft,Kt,null));else if(E.isDataTexture)if(ae.length>0){$t&&Le&&i.texStorage2D(s.TEXTURE_2D,Nt,Wt,ae[0].width,ae[0].height);for(let st=0,_t=ae.length;st<_t;st++)It=ae[st],$t?X&&i.texSubImage2D(s.TEXTURE_2D,st,0,0,It.width,It.height,Ft,Kt,It.data):i.texImage2D(s.TEXTURE_2D,st,Wt,It.width,It.height,0,Ft,Kt,It.data);E.generateMipmaps=!1}else $t?(Le&&i.texStorage2D(s.TEXTURE_2D,Nt,Wt,Et.width,Et.height),X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Et.width,Et.height,Ft,Kt,Et.data)):i.texImage2D(s.TEXTURE_2D,0,Wt,Et.width,Et.height,0,Ft,Kt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){$t&&Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Nt,Wt,ae[0].width,ae[0].height,Et.depth);for(let st=0,_t=ae.length;st<_t;st++)if(It=ae[st],E.format!==gi)if(Ft!==null)if($t){if(X)if(E.layerUpdates.size>0){const Ct=kg(It.width,It.height,E.format,E.type);for(const Dt of E.layerUpdates){const ee=It.data.subarray(Dt*Ct/It.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,Dt,It.width,It.height,1,Ft,ee)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,It.width,It.height,Et.depth,Ft,It.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,Wt,It.width,It.height,Et.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?X&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,It.width,It.height,Et.depth,Ft,Kt,It.data):i.texImage3D(s.TEXTURE_2D_ARRAY,st,Wt,It.width,It.height,Et.depth,0,Ft,Kt,It.data)}else{$t&&Le&&i.texStorage2D(s.TEXTURE_2D,Nt,Wt,ae[0].width,ae[0].height);for(let st=0,_t=ae.length;st<_t;st++)It=ae[st],E.format!==gi?Ft!==null?$t?X&&i.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,It.width,It.height,Ft,It.data):i.compressedTexImage2D(s.TEXTURE_2D,st,Wt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?X&&i.texSubImage2D(s.TEXTURE_2D,st,0,0,It.width,It.height,Ft,Kt,It.data):i.texImage2D(s.TEXTURE_2D,st,Wt,It.width,It.height,0,Ft,Kt,It.data)}else if(E.isDataArrayTexture)if($t){if(Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Nt,Wt,Et.width,Et.height,Et.depth),X)if(E.layerUpdates.size>0){const st=kg(Et.width,Et.height,E.format,E.type);for(const _t of E.layerUpdates){const Ct=Et.data.subarray(_t*st/Et.data.BYTES_PER_ELEMENT,(_t+1)*st/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,Et.width,Et.height,1,Ft,Kt,Ct)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Ft,Kt,Et.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Wt,Et.width,Et.height,Et.depth,0,Ft,Kt,Et.data);else if(E.isData3DTexture)$t?(Le&&i.texStorage3D(s.TEXTURE_3D,Nt,Wt,Et.width,Et.height,Et.depth),X&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Ft,Kt,Et.data)):i.texImage3D(s.TEXTURE_3D,0,Wt,Et.width,Et.height,Et.depth,0,Ft,Kt,Et.data);else if(E.isFramebufferTexture){if(Le)if($t)i.texStorage2D(s.TEXTURE_2D,Nt,Wt,Et.width,Et.height);else{let st=Et.width,_t=Et.height;for(let Ct=0;Ct<Nt;Ct++)i.texImage2D(s.TEXTURE_2D,Ct,Wt,st,_t,0,Ft,Kt,null),st>>=1,_t>>=1}}else if(ae.length>0){if($t&&Le){const st=jt(ae[0]);i.texStorage2D(s.TEXTURE_2D,Nt,Wt,st.width,st.height)}for(let st=0,_t=ae.length;st<_t;st++)It=ae[st],$t?X&&i.texSubImage2D(s.TEXTURE_2D,st,0,0,Ft,Kt,It):i.texImage2D(s.TEXTURE_2D,st,Wt,Ft,Kt,It);E.generateMipmaps=!1}else if($t){if(Le){const st=jt(Et);i.texStorage2D(s.TEXTURE_2D,Nt,Wt,st.width,st.height)}X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ft,Kt,Et)}else i.texImage2D(s.TEXTURE_2D,0,Wt,Ft,Kt,Et);y(E)&&v(ft),Xt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ut(U,E,J){if(E.image.length!==6)return;const ft=At(U,E),vt=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+J);const ht=r.get(vt);if(vt.version!==ht.__version||ft===!0){i.activeTexture(s.TEXTURE0+J);const Xt=Ce.getPrimaries(Ce.workingColorSpace),wt=E.colorSpace===Oa?null:Ce.getPrimaries(E.colorSpace),Bt=E.colorSpace===Oa||Xt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const ve=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,Ft=[];for(let _t=0;_t<6;_t++)!ve&&!Et?Ft[_t]=w(E.image[_t],!0,l.maxCubemapSize):Ft[_t]=Et?E.image[_t].image:E.image[_t],Ft[_t]=Ue(E,Ft[_t]);const Kt=Ft[0],Wt=u.convert(E.format,E.colorSpace),It=u.convert(E.type),ae=O(E.internalFormat,Wt,It,E.colorSpace),$t=E.isVideoTexture!==!0,Le=ht.__version===void 0||ft===!0,X=vt.dataReady;let Nt=I(E,Kt);Tt(s.TEXTURE_CUBE_MAP,E);let st;if(ve){$t&&Le&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Nt,ae,Kt.width,Kt.height);for(let _t=0;_t<6;_t++){st=Ft[_t].mipmaps;for(let Ct=0;Ct<st.length;Ct++){const Dt=st[Ct];E.format!==gi?Wt!==null?$t?X&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,Wt,Dt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,ae,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,Wt,It,Dt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,ae,Dt.width,Dt.height,0,Wt,It,Dt.data)}}}else{if(st=E.mipmaps,$t&&Le){st.length>0&&Nt++;const _t=jt(Ft[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Nt,ae,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Et){$t?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ft[_t].width,Ft[_t].height,Wt,It,Ft[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,Ft[_t].width,Ft[_t].height,0,Wt,It,Ft[_t].data);for(let Ct=0;Ct<st.length;Ct++){const ee=st[Ct].image[_t].image;$t?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,ee.width,ee.height,Wt,It,ee.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,ae,ee.width,ee.height,0,Wt,It,ee.data)}}else{$t?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Wt,It,Ft[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,Wt,It,Ft[_t]);for(let Ct=0;Ct<st.length;Ct++){const Dt=st[Ct];$t?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,Wt,It,Dt.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,ae,Wt,It,Dt.image[_t])}}}y(E)&&v(s.TEXTURE_CUBE_MAP),ht.__version=vt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function xt(U,E,J,ft,vt,ht){const Xt=u.convert(J.format,J.colorSpace),wt=u.convert(J.type),Bt=O(J.internalFormat,Xt,wt,J.colorSpace),ve=r.get(E),Et=r.get(J);if(Et.__renderTarget=E,!ve.__hasExternalTextures){const Ft=Math.max(1,E.width>>ht),Kt=Math.max(1,E.height>>ht);vt===s.TEXTURE_3D||vt===s.TEXTURE_2D_ARRAY?i.texImage3D(vt,ht,Bt,Ft,Kt,E.depth,0,Xt,wt,null):i.texImage2D(vt,ht,Bt,Ft,Kt,0,Xt,wt,null)}i.bindFramebuffer(s.FRAMEBUFFER,U),de(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,vt,Et.__webglTexture,0,se(E)):(vt===s.TEXTURE_2D||vt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ft,vt,Et.__webglTexture,ht),i.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(U,E,J){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){const ft=E.depthTexture,vt=ft&&ft.isDepthTexture?ft.type:null,ht=D(E.stencilBuffer,vt),Xt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=se(E);de(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,ht,E.width,E.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,ht,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ht,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xt,s.RENDERBUFFER,U)}else{const ft=E.textures;for(let vt=0;vt<ft.length;vt++){const ht=ft[vt],Xt=u.convert(ht.format,ht.colorSpace),wt=u.convert(ht.type),Bt=O(ht.internalFormat,Xt,wt,ht.colorSpace),ve=se(E);J&&de(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,Bt,E.width,E.height):de(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,Bt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Bt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(E.depthTexture);ft.__renderTarget=E,(!ft.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),dt(E.depthTexture,0);const vt=ft.__webglTexture,ht=se(E);if(E.depthTexture.format===As)de(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,vt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,vt,0);else if(E.depthTexture.format===Ls)de(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,vt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Vt(U){const E=r.get(U),J=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ft=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",vt)};ft.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=ft}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Rt(E.__webglFramebuffer,U)}else if(J){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=s.createRenderbuffer(),bt(E.__webglDepthbuffer[ft],U,!1);else{const vt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer[ft];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,ht)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),bt(E.__webglDepthbuffer,U,!1);else{const ft=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,vt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ft,s.RENDERBUFFER,vt)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(U,E,J){const ft=r.get(U);E!==void 0&&xt(ft.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Vt(U)}function ye(U){const E=U.texture,J=r.get(U),ft=r.get(E);U.addEventListener("dispose",F);const vt=U.textures,ht=U.isWebGLCubeRenderTarget===!0,Xt=vt.length>1;if(Xt||(ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture()),ft.__version=E.version,h.memory.textures++),ht){J.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[wt]=[];for(let Bt=0;Bt<E.mipmaps.length;Bt++)J.__webglFramebuffer[wt][Bt]=s.createFramebuffer()}else J.__webglFramebuffer[wt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)J.__webglFramebuffer[wt]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Xt)for(let wt=0,Bt=vt.length;wt<Bt;wt++){const ve=r.get(vt[wt]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),h.memory.textures++)}if(U.samples>0&&de(U)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let wt=0;wt<vt.length;wt++){const Bt=vt[wt];J.__webglColorRenderbuffer[wt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[wt]);const ve=u.convert(Bt.format,Bt.colorSpace),Et=u.convert(Bt.type),Ft=O(Bt.internalFormat,ve,Et,Bt.colorSpace,U.isXRRenderTarget===!0),Kt=se(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,Ft,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,J.__webglColorRenderbuffer[wt])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),bt(J.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){i.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Bt=0;Bt<E.mipmaps.length;Bt++)xt(J.__webglFramebuffer[wt][Bt],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Bt);else xt(J.__webglFramebuffer[wt],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(E)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let wt=0,Bt=vt.length;wt<Bt;wt++){const ve=vt[wt],Et=r.get(ve);i.bindTexture(s.TEXTURE_2D,Et.__webglTexture),Tt(s.TEXTURE_2D,ve),xt(J.__webglFramebuffer,U,ve,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,0),y(ve)&&v(s.TEXTURE_2D)}i.unbindTexture()}else{let wt=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(wt,ft.__webglTexture),Tt(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let Bt=0;Bt<E.mipmaps.length;Bt++)xt(J.__webglFramebuffer[Bt],U,E,s.COLOR_ATTACHMENT0,wt,Bt);else xt(J.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,wt,0);y(E)&&v(wt),i.unbindTexture()}U.depthBuffer&&Vt(U)}function fe(U){const E=U.textures;for(let J=0,ft=E.length;J<ft;J++){const vt=E[J];if(y(vt)){const ht=P(U),Xt=r.get(vt).__webglTexture;i.bindTexture(ht,Xt),v(ht),i.unbindTexture()}}}const De=[],z=[];function Sn(U){if(U.samples>0){if(de(U)===!1){const E=U.textures,J=U.width,ft=U.height;let vt=s.COLOR_BUFFER_BIT;const ht=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xt=r.get(U),wt=E.length>1;if(wt)for(let Bt=0;Bt<E.length;Bt++)i.bindFramebuffer(s.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Bt=0;Bt<E.length;Bt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(vt|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(vt|=s.STENCIL_BUFFER_BIT)),wt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xt.__webglColorRenderbuffer[Bt]);const ve=r.get(E[Bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ve,0)}s.blitFramebuffer(0,0,J,ft,0,0,J,ft,vt,s.NEAREST),p===!0&&(De.length=0,z.length=0,De.push(s.COLOR_ATTACHMENT0+Bt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(De.push(ht),z.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,De))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),wt)for(let Bt=0;Bt<E.length;Bt++){i.bindFramebuffer(s.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,Xt.__webglColorRenderbuffer[Bt]);const ve=r.get(E[Bt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,ve,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function se(U){return Math.min(l.maxSamples,U.samples)}function de(U){const E=r.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function qt(U){const E=h.render.frame;_.get(U)!==E&&(_.set(U,E),U.update())}function Ue(U,E){const J=U.colorSpace,ft=U.format,vt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==Ns&&J!==Oa&&(Ce.getTransfer(J)===Pe?(ft!==gi||vt!==ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),E}function jt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=at,this.resetTextureUnits=ct,this.setTexture2D=dt,this.setTexture2DArray=Y,this.setTexture3D=rt,this.setTextureCube=j,this.rebindTextures=kt,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=de}function ZA(s,t){function i(r,l=Oa){let u;const h=Ce.getTransfer(l);if(r===ra)return s.UNSIGNED_BYTE;if(r===Ed)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Td)return s.UNSIGNED_SHORT_5_5_5_1;if(r===N0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===U0)return s.BYTE;if(r===L0)return s.SHORT;if(r===Wo)return s.UNSIGNED_SHORT;if(r===Md)return s.INT;if(r===xr)return s.UNSIGNED_INT;if(r===na)return s.FLOAT;if(r===Zo)return s.HALF_FLOAT;if(r===O0)return s.ALPHA;if(r===P0)return s.RGB;if(r===gi)return s.RGBA;if(r===z0)return s.LUMINANCE;if(r===B0)return s.LUMINANCE_ALPHA;if(r===As)return s.DEPTH_COMPONENT;if(r===Ls)return s.DEPTH_STENCIL;if(r===F0)return s.RED;if(r===bd)return s.RED_INTEGER;if(r===I0)return s.RG;if(r===Ad)return s.RG_INTEGER;if(r===Rd)return s.RGBA_INTEGER;if(r===wc||r===Dc||r===Uc||r===Lc)if(h===Pe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===wc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===wc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wh||r===Yh||r===qh||r===jh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Wh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zh||r===Kh||r===Qh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Zh||r===Kh)return h===Pe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Qh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Jh||r===$h||r===td||r===ed||r===nd||r===id||r===ad||r===rd||r===sd||r===od||r===ld||r===cd||r===ud||r===fd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Jh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$h)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===td)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ed)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===nd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===id)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ad)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===od)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ld)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ud)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nc||r===hd||r===dd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Nc)return h===Pe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===H0||r===pd||r===md||r===_d)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Nc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===pd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===md)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_d)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Us?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const KA={type:"move"};class Rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,r),v=this._getHandJoint(m,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],S=_.position.distanceTo(g.position),M=.02,T=.005;m.inputState.pinching&&S>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&S<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(KA)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Tc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const QA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JA=`
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

}`;class $A{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Gn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ha({vertexShader:QA,fragmentShader:JA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new vi(new Jo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tR extends br{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,_=null,g=null,S=null,M=null,T=null;const w=new $A,y=i.getContextAttributes();let v=null,P=null;const O=[],D=[],I=new ce;let G=null;const F=new li;F.viewport=new je;const K=new li;K.viewport=new je;const C=[F,K],R=new xE;let B=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ut=O[q];return ut===void 0&&(ut=new Rh,O[q]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(q){let ut=O[q];return ut===void 0&&(ut=new Rh,O[q]=ut),ut.getGripSpace()},this.getHand=function(q){let ut=O[q];return ut===void 0&&(ut=new Rh,O[q]=ut),ut.getHandSpace()};function at(q){const ut=D.indexOf(q.inputSource);if(ut===-1)return;const xt=O[ut];xt!==void 0&&(xt.update(q.inputSource,q.frame,m||h),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function mt(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",mt),l.removeEventListener("inputsourceschange",dt);for(let q=0;q<O.length;q++){const ut=D[q];ut!==null&&(D[q]=null,O[q].disconnect(ut))}B=null,ct=null,w.reset(),t.setRenderTarget(v),M=null,S=null,g=null,l=null,P=null,At.stop(),r.isPresenting=!1,t.setPixelRatio(G),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",mt),l.addEventListener("inputsourceschange",dt),y.xrCompatible!==!0&&await i.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(I),l.renderState.layers===void 0){const ut={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ut),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new yr(M.framebufferWidth,M.framebufferHeight,{format:gi,type:ra,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let ut=null,xt=null,bt=null;y.depth&&(bt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ut=y.stencil?Ls:As,xt=y.stencil?Us:xr);const Rt={colorFormat:i.RGBA8,depthFormat:bt,scaleFactor:u};g=new XRWebGLBinding(l,i),S=g.createProjectionLayer(Rt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),P=new yr(S.textureWidth,S.textureHeight,{format:gi,type:ra,depthTexture:new ev(S.textureWidth,S.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),At.setContext(l),At.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function dt(q){for(let ut=0;ut<q.removed.length;ut++){const xt=q.removed[ut],bt=D.indexOf(xt);bt>=0&&(D[bt]=null,O[bt].disconnect(xt))}for(let ut=0;ut<q.added.length;ut++){const xt=q.added[ut];let bt=D.indexOf(xt);if(bt===-1){for(let Vt=0;Vt<O.length;Vt++)if(Vt>=D.length){D.push(xt),bt=Vt;break}else if(D[Vt]===null){D[Vt]=xt,bt=Vt;break}if(bt===-1)break}const Rt=O[bt];Rt&&Rt.connect(xt)}}const Y=new tt,rt=new tt;function j(q,ut,xt){Y.setFromMatrixPosition(ut.matrixWorld),rt.setFromMatrixPosition(xt.matrixWorld);const bt=Y.distanceTo(rt),Rt=ut.projectionMatrix.elements,Vt=xt.projectionMatrix.elements,kt=Rt[14]/(Rt[10]-1),ye=Rt[14]/(Rt[10]+1),fe=(Rt[9]+1)/Rt[5],De=(Rt[9]-1)/Rt[5],z=(Rt[8]-1)/Rt[0],Sn=(Vt[8]+1)/Vt[0],se=kt*z,de=kt*Sn,qt=bt/(-z+Sn),Ue=qt*-z;if(ut.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ue),q.translateZ(qt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(ut.projectionMatrix),q.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const jt=kt+qt,U=ye+qt,E=se-Ue,J=de+(bt-Ue),ft=fe*ye/U*jt,vt=De*ye/U*jt;q.projectionMatrix.makePerspective(E,J,ft,vt,jt,U),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function St(q,ut){ut===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ut.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let ut=q.near,xt=q.far;w.texture!==null&&(w.depthNear>0&&(ut=w.depthNear),w.depthFar>0&&(xt=w.depthFar)),R.near=K.near=F.near=ut,R.far=K.far=F.far=xt,(B!==R.near||ct!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,ct=R.far),F.layers.mask=q.layers.mask|2,K.layers.mask=q.layers.mask|4,R.layers.mask=F.layers.mask|K.layers.mask;const bt=q.parent,Rt=R.cameras;St(R,bt);for(let Vt=0;Vt<Rt.length;Vt++)St(Rt[Vt],bt);Rt.length===2?j(R,F,K):R.projectionMatrix.copy(F.projectionMatrix),L(q,R,bt)};function L(q,ut,xt){xt===null?q.matrix.copy(ut.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(ut.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ut.projectionMatrix),q.projectionMatrixInverse.copy(ut.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Yo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(q){p=q,S!==null&&(S.fixedFoveation=q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let it=null;function Tt(q,ut){if(_=ut.getViewerPose(m||h),T=ut,_!==null){const xt=_.views;M!==null&&(t.setRenderTargetFramebuffer(P,M.framebuffer),t.setRenderTarget(P));let bt=!1;xt.length!==R.cameras.length&&(R.cameras.length=0,bt=!0);for(let Vt=0;Vt<xt.length;Vt++){const kt=xt[Vt];let ye=null;if(M!==null)ye=M.getViewport(kt);else{const De=g.getViewSubImage(S,kt);ye=De.viewport,Vt===0&&(t.setRenderTargetTextures(P,De.colorTexture,S.ignoreDepthValues?void 0:De.depthStencilTexture),t.setRenderTarget(P))}let fe=C[Vt];fe===void 0&&(fe=new li,fe.layers.enable(Vt),fe.viewport=new je,C[Vt]=fe),fe.matrix.fromArray(kt.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(kt.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(ye.x,ye.y,ye.width,ye.height),Vt===0&&(R.matrix.copy(fe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),bt===!0&&R.cameras.push(fe)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Vt=g.getDepthInformation(xt[0]);Vt&&Vt.isValid&&Vt.texture&&w.init(t,Vt,l.renderState)}}for(let xt=0;xt<O.length;xt++){const bt=D[xt],Rt=O[xt];bt!==null&&Rt!==void 0&&Rt.update(bt,ut,m||h)}it&&it(q,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),T=null}const At=new av;At.setAnimationLoop(Tt),this.setAnimationLoop=function(q){it=q},this.dispose=function(){}}}const dr=new Di,eR=new Ze;function nR(s,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,J0(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,P,O,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),g(y,v)):v.isMeshPhongMaterial?(u(y,v),_(y,v)):v.isMeshStandardMaterial?(u(y,v),S(y,v),v.isMeshPhysicalMaterial&&M(y,v,D)):v.isMeshMatcapMaterial?(u(y,v),T(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),w(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?p(y,v,P,O):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Hn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Hn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const P=t.get(v),O=P.envMap,D=P.envMapRotation;O&&(y.envMap.value=O,dr.copy(D),dr.x*=-1,dr.y*=-1,dr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),y.envMapRotation.value.setFromMatrix4(eR.makeRotationFromEuler(dr)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function p(y,v,P,O){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*P,y.scale.value=O*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,P){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Hn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){const P=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function iR(s,t,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,O){const D=O.program;r.uniformBlockBinding(P,D)}function m(P,O){let D=l[P.id];D===void 0&&(T(P),D=_(P),l[P.id]=D,P.addEventListener("dispose",y));const I=O.program;r.updateUBOMapping(P,I);const G=t.render.frame;u[P.id]!==G&&(S(P),u[P.id]=G)}function _(P){const O=g();P.__bindingPointIndex=O;const D=s.createBuffer(),I=P.__size,G=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,I,G),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,D),D}function g(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const O=l[P.id],D=P.uniforms,I=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let G=0,F=D.length;G<F;G++){const K=Array.isArray(D[G])?D[G]:[D[G]];for(let C=0,R=K.length;C<R;C++){const B=K[C];if(M(B,G,C,I)===!0){const ct=B.__offset,at=Array.isArray(B.value)?B.value:[B.value];let mt=0;for(let dt=0;dt<at.length;dt++){const Y=at[dt],rt=w(Y);typeof Y=="number"||typeof Y=="boolean"?(B.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,ct+mt,B.__data)):Y.isMatrix3?(B.__data[0]=Y.elements[0],B.__data[1]=Y.elements[1],B.__data[2]=Y.elements[2],B.__data[3]=0,B.__data[4]=Y.elements[3],B.__data[5]=Y.elements[4],B.__data[6]=Y.elements[5],B.__data[7]=0,B.__data[8]=Y.elements[6],B.__data[9]=Y.elements[7],B.__data[10]=Y.elements[8],B.__data[11]=0):(Y.toArray(B.__data,mt),mt+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ct,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(P,O,D,I){const G=P.value,F=O+"_"+D;if(I[F]===void 0)return typeof G=="number"||typeof G=="boolean"?I[F]=G:I[F]=G.clone(),!0;{const K=I[F];if(typeof G=="number"||typeof G=="boolean"){if(K!==G)return I[F]=G,!0}else if(K.equals(G)===!1)return K.copy(G),!0}return!1}function T(P){const O=P.uniforms;let D=0;const I=16;for(let F=0,K=O.length;F<K;F++){const C=Array.isArray(O[F])?O[F]:[O[F]];for(let R=0,B=C.length;R<B;R++){const ct=C[R],at=Array.isArray(ct.value)?ct.value:[ct.value];for(let mt=0,dt=at.length;mt<dt;mt++){const Y=at[mt],rt=w(Y),j=D%I,St=j%rt.boundary,L=j+St;D+=St,L!==0&&I-L<rt.storage&&(D+=I-L),ct.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=D,D+=rt.storage}}}const G=D%I;return G>0&&(D+=I-G),P.__size=D,P.__cache={},this}function w(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function y(P){const O=P.target;O.removeEventListener("dispose",y);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),s.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function v(){for(const P in l)s.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:p,update:m,dispose:v}}class aR{constructor(t={}){const{canvas:i=IM(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const T=new Uint32Array(4),w=new Int32Array(4);let y=null,v=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this.toneMapping=Fa,this.toneMappingExposure=1;const D=this;let I=!1,G=0,F=0,K=null,C=-1,R=null;const B=new je,ct=new je;let at=null;const mt=new we(0);let dt=0,Y=i.width,rt=i.height,j=1,St=null,L=null;const it=new je(0,0,Y,rt),Tt=new je(0,0,Y,rt);let At=!1;const q=new Dd;let ut=!1,xt=!1;const bt=new Ze,Rt=new Ze,Vt=new tt,kt=new je,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function De(){return K===null?j:1}let z=r;function Sn(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${yd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),z===null){const W="webgl2";if(z=Sn(W,A),z===null)throw Sn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let se,de,qt,Ue,jt,U,E,J,ft,vt,ht,Xt,wt,Bt,ve,Et,Ft,Kt,Wt,It,ae,$t,Le,X;function Nt(){se=new d1(z),se.init(),$t=new ZA(z,se),de=new o1(z,se,t,$t),qt=new qA(z,se),de.reverseDepthBuffer&&S&&qt.buffers.depth.setReversed(!0),Ue=new _1(z),jt=new OA,U=new jA(z,se,qt,jt,de,$t,Ue),E=new c1(D),J=new h1(D),ft=new EE(z),Le=new r1(z,ft),vt=new p1(z,ft,Ue,Le),ht=new v1(z,vt,ft,Ue),Wt=new g1(z,de,U),Et=new l1(jt),Xt=new NA(D,E,J,se,de,Le,Et),wt=new nR(D,jt),Bt=new zA,ve=new VA(se),Kt=new a1(D,E,J,qt,ht,M,p),Ft=new WA(D,ht,de),X=new iR(z,Ue,de,qt),It=new s1(z,se,Ue),ae=new m1(z,se,Ue),Ue.programs=Xt.programs,D.capabilities=de,D.extensions=se,D.properties=jt,D.renderLists=Bt,D.shadowMap=Ft,D.state=qt,D.info=Ue}Nt();const st=new tR(D,z);this.xr=st,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(Y,rt,!1))},this.getSize=function(A){return A.set(Y,rt)},this.setSize=function(A,W,et=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,rt=W,i.width=Math.floor(A*j),i.height=Math.floor(W*j),et===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(Y*j,rt*j).floor()},this.setDrawingBufferSize=function(A,W,et){Y=A,rt=W,j=et,i.width=Math.floor(A*et),i.height=Math.floor(W*et),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(it)},this.setViewport=function(A,W,et,nt){A.isVector4?it.set(A.x,A.y,A.z,A.w):it.set(A,W,et,nt),qt.viewport(B.copy(it).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(Tt)},this.setScissor=function(A,W,et,nt){A.isVector4?Tt.set(A.x,A.y,A.z,A.w):Tt.set(A,W,et,nt),qt.scissor(ct.copy(Tt).multiplyScalar(j).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(A){qt.setScissorTest(At=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){L=A},this.getClearColor=function(A){return A.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(A=!0,W=!0,et=!0){let nt=0;if(A){let V=!1;if(K!==null){const yt=K.texture.format;V=yt===Rd||yt===Ad||yt===bd}if(V){const yt=K.texture.type,Ut=yt===ra||yt===xr||yt===Wo||yt===Us||yt===Ed||yt===Td,Ot=Kt.getClearColor(),zt=Kt.getClearAlpha(),Qt=Ot.r,ne=Ot.g,Jt=Ot.b;Ut?(T[0]=Qt,T[1]=ne,T[2]=Jt,T[3]=zt,z.clearBufferuiv(z.COLOR,0,T)):(w[0]=Qt,w[1]=ne,w[2]=Jt,w[3]=zt,z.clearBufferiv(z.COLOR,0,w))}else nt|=z.COLOR_BUFFER_BIT}W&&(nt|=z.DEPTH_BUFFER_BIT),et&&(nt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),Kt.dispose(),Bt.dispose(),ve.dispose(),jt.dispose(),E.dispose(),J.dispose(),ht.dispose(),Le.dispose(),X.dispose(),Xt.dispose(),st.dispose(),st.removeEventListener("sessionstart",$o),st.removeEventListener("sessionend",Is),xi.stop()};function _t(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=Ue.autoReset,W=Ft.enabled,et=Ft.autoUpdate,nt=Ft.needsUpdate,V=Ft.type;Nt(),Ue.autoReset=A,Ft.enabled=W,Ft.autoUpdate=et,Ft.needsUpdate=nt,Ft.type=V}function Dt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ee(A){const W=A.target;W.removeEventListener("dispose",ee),Ve(W)}function Ve(A){rn(A),jt.remove(A)}function rn(A){const W=jt.get(A).programs;W!==void 0&&(W.forEach(function(et){Xt.releaseProgram(et)}),A.isShaderMaterial&&Xt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,et,nt,V,yt){W===null&&(W=ye);const Ut=V.isMesh&&V.matrixWorld.determinant()<0,Ot=kc(A,W,et,nt,V);qt.setMaterial(nt,Ut);let zt=et.index,Qt=1;if(nt.wireframe===!0){if(zt=vt.getWireframeAttribute(et),zt===void 0)return;Qt=2}const ne=et.drawRange,Jt=et.attributes.position;let Se=ne.start*Qt,Te=(ne.start+ne.count)*Qt;yt!==null&&(Se=Math.max(Se,yt.start*Qt),Te=Math.min(Te,(yt.start+yt.count)*Qt)),zt!==null?(Se=Math.max(Se,0),Te=Math.min(Te,zt.count)):Jt!=null&&(Se=Math.max(Se,0),Te=Math.min(Te,Jt.count));const Ge=Te-Se;if(Ge<0||Ge===1/0)return;Le.setup(V,nt,Ot,et,zt);let Be,re=It;if(zt!==null&&(Be=ft.get(zt),re=ae,re.setIndex(Be)),V.isMesh)nt.wireframe===!0?(qt.setLineWidth(nt.wireframeLinewidth*De()),re.setMode(z.LINES)):re.setMode(z.TRIANGLES);else if(V.isLine){let Ht=nt.linewidth;Ht===void 0&&(Ht=1),qt.setLineWidth(Ht*De()),V.isLineSegments?re.setMode(z.LINES):V.isLineLoop?re.setMode(z.LINE_LOOP):re.setMode(z.LINE_STRIP)}else V.isPoints?re.setMode(z.POINTS):V.isSprite&&re.setMode(z.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)re.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))re.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ht=V._multiDrawStarts,Je=V._multiDrawCounts,be=V._multiDrawCount,En=zt?ft.get(zt).bytesPerElement:1,Li=jt.get(nt).currentProgram.getUniforms();for(let pn=0;pn<be;pn++)Li.setValue(z,"_gl_DrawID",pn),re.render(Ht[pn]/En,Je[pn])}else if(V.isInstancedMesh)re.renderInstances(Se,Ge,V.count);else if(et.isInstancedBufferGeometry){const Ht=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Je=Math.min(et.instanceCount,Ht);re.renderInstances(Se,Ge,Je)}else re.render(Se,Ge)};function Ee(A,W,et){A.transparent===!0&&A.side===ea&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,on(A,W,et),A.side=Ia,A.needsUpdate=!0,on(A,W,et),A.side=ea):on(A,W,et)}this.compile=function(A,W,et=null){et===null&&(et=A),v=ve.get(et),v.init(W),O.push(v),et.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(v.pushLight(V),V.castShadow&&v.pushShadow(V))}),A!==et&&A.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(v.pushLight(V),V.castShadow&&v.pushShadow(V))}),v.setupLights();const nt=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const yt=V.material;if(yt)if(Array.isArray(yt))for(let Ut=0;Ut<yt.length;Ut++){const Ot=yt[Ut];Ee(Ot,et,V),nt.add(Ot)}else Ee(yt,et,V),nt.add(yt)}),O.pop(),v=null,nt},this.compileAsync=function(A,W,et=null){const nt=this.compile(A,W,et);return new Promise(V=>{function yt(){if(nt.forEach(function(Ut){jt.get(Ut).currentProgram.isReady()&&nt.delete(Ut)}),nt.size===0){V(A);return}setTimeout(yt,10)}se.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Dn=null;function Un(A){Dn&&Dn(A)}function $o(){xi.stop()}function Is(){xi.start()}const xi=new av;xi.setAnimationLoop(Un),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(A){Dn=A,st.setAnimationLoop(A),A===null?xi.stop():xi.start()},st.addEventListener("sessionstart",$o),st.addEventListener("sessionend",Is),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(W),W=st.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,W,K),v=ve.get(A,O.length),v.init(W),O.push(v),Rt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(Rt),xt=this.localClippingEnabled,ut=Et.init(this.clippingPlanes,xt),y=Bt.get(A,P.length),y.init(),P.push(y),st.enabled===!0&&st.isPresenting===!0){const yt=D.xr.getDepthSensingMesh();yt!==null&&Rr(yt,W,-1/0,D.sortObjects)}Rr(A,W,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(St,L),fe=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,fe&&Kt.addToRenderList(y,A),this.info.render.frame++,ut===!0&&Et.beginShadows();const et=v.state.shadowsArray;Ft.render(et,A,W),ut===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=y.opaque,V=y.transmissive;if(v.setupLights(),W.isArrayCamera){const yt=W.cameras;if(V.length>0)for(let Ut=0,Ot=yt.length;Ut<Ot;Ut++){const zt=yt[Ut];tl(nt,V,A,zt)}fe&&Kt.render(A);for(let Ut=0,Ot=yt.length;Ut<Ot;Ut++){const zt=yt[Ut];Hs(y,A,zt,zt.viewport)}}else V.length>0&&tl(nt,V,A,W),fe&&Kt.render(A),Hs(y,A,W);K!==null&&(U.updateMultisampleRenderTarget(K),U.updateRenderTargetMipmap(K)),A.isScene===!0&&A.onAfterRender(D,A,W),Le.resetDefaultState(),C=-1,R=null,O.pop(),O.length>0?(v=O[O.length-1],ut===!0&&Et.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function Rr(A,W,et,nt){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)et=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){nt&&kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Rt);const Ut=ht.update(A),Ot=A.material;Ot.visible&&y.push(A,Ut,Ot,et,kt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const Ut=ht.update(A),Ot=A.material;if(nt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),kt.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),kt.copy(Ut.boundingSphere.center)),kt.applyMatrix4(A.matrixWorld).applyMatrix4(Rt)),Array.isArray(Ot)){const zt=Ut.groups;for(let Qt=0,ne=zt.length;Qt<ne;Qt++){const Jt=zt[Qt],Se=Ot[Jt.materialIndex];Se&&Se.visible&&y.push(A,Ut,Se,et,kt.z,Jt)}}else Ot.visible&&y.push(A,Ut,Ot,et,kt.z,null)}}const yt=A.children;for(let Ut=0,Ot=yt.length;Ut<Ot;Ut++)Rr(yt[Ut],W,et,nt)}function Hs(A,W,et,nt){const V=A.opaque,yt=A.transmissive,Ut=A.transparent;v.setupLightsView(et),ut===!0&&Et.setGlobalState(D.clippingPlanes,et),nt&&qt.viewport(B.copy(nt)),V.length>0&&Vn(V,W,et),yt.length>0&&Vn(yt,W,et),Ut.length>0&&Vn(Ut,W,et),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function tl(A,W,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[nt.id]===void 0&&(v.state.transmissionRenderTarget[nt.id]=new yr(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Zo:ra,minFilter:vr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const yt=v.state.transmissionRenderTarget[nt.id],Ut=nt.viewport||B;yt.setSize(Ut.z,Ut.w);const Ot=D.getRenderTarget();D.setRenderTarget(yt),D.getClearColor(mt),dt=D.getClearAlpha(),dt<1&&D.setClearColor(16777215,.5),D.clear(),fe&&Kt.render(et);const zt=D.toneMapping;D.toneMapping=Fa;const Qt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),v.setupLightsView(nt),ut===!0&&Et.setGlobalState(D.clippingPlanes,nt),Vn(A,et,nt),U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt),se.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Jt=0,Se=W.length;Jt<Se;Jt++){const Te=W[Jt],Ge=Te.object,Be=Te.geometry,re=Te.material,Ht=Te.group;if(re.side===ea&&Ge.layers.test(nt.layers)){const Je=re.side;re.side=Hn,re.needsUpdate=!0,sn(Ge,et,nt,Be,re,Ht),re.side=Je,re.needsUpdate=!0,ne=!0}}ne===!0&&(U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt))}D.setRenderTarget(Ot),D.setClearColor(mt,dt),Qt!==void 0&&(nt.viewport=Qt),D.toneMapping=zt}function Vn(A,W,et){const nt=W.isScene===!0?W.overrideMaterial:null;for(let V=0,yt=A.length;V<yt;V++){const Ut=A[V],Ot=Ut.object,zt=Ut.geometry,Qt=nt===null?Ut.material:nt,ne=Ut.group;Ot.layers.test(et.layers)&&sn(Ot,W,et,zt,Qt,ne)}}function sn(A,W,et,nt,V,yt){A.onBeforeRender(D,W,et,nt,V,yt),A.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(D,W,et,nt,A,yt),V.transparent===!0&&V.side===ea&&V.forceSinglePass===!1?(V.side=Hn,V.needsUpdate=!0,D.renderBufferDirect(et,W,nt,V,A,yt),V.side=Ia,V.needsUpdate=!0,D.renderBufferDirect(et,W,nt,V,A,yt),V.side=ea):D.renderBufferDirect(et,W,nt,V,A,yt),A.onAfterRender(D,W,et,nt,V,yt)}function on(A,W,et){W.isScene!==!0&&(W=ye);const nt=jt.get(A),V=v.state.lights,yt=v.state.shadowsArray,Ut=V.state.version,Ot=Xt.getParameters(A,V.state,yt,W,et),zt=Xt.getProgramCacheKey(Ot);let Qt=nt.programs;nt.environment=A.isMeshStandardMaterial?W.environment:null,nt.fog=W.fog,nt.envMap=(A.isMeshStandardMaterial?J:E).get(A.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",ee),Qt=new Map,nt.programs=Qt);let ne=Qt.get(zt);if(ne!==void 0){if(nt.currentProgram===ne&&nt.lightsStateVersion===Ut)return Cr(A,Ot),ne}else Ot.uniforms=Xt.getUniforms(A),A.onBeforeCompile(Ot,D),ne=Xt.acquireProgram(Ot,zt),Qt.set(zt,ne),nt.uniforms=Ot.uniforms;const Jt=nt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Jt.clippingPlanes=Et.uniform),Cr(A,Ot),nt.needsLights=el(A),nt.lightsStateVersion=Ut,nt.needsLights&&(Jt.ambientLightColor.value=V.state.ambient,Jt.lightProbe.value=V.state.probe,Jt.directionalLights.value=V.state.directional,Jt.directionalLightShadows.value=V.state.directionalShadow,Jt.spotLights.value=V.state.spot,Jt.spotLightShadows.value=V.state.spotShadow,Jt.rectAreaLights.value=V.state.rectArea,Jt.ltc_1.value=V.state.rectAreaLTC1,Jt.ltc_2.value=V.state.rectAreaLTC2,Jt.pointLights.value=V.state.point,Jt.pointLightShadows.value=V.state.pointShadow,Jt.hemisphereLights.value=V.state.hemi,Jt.directionalShadowMap.value=V.state.directionalShadowMap,Jt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Jt.spotShadowMap.value=V.state.spotShadowMap,Jt.spotLightMatrix.value=V.state.spotLightMatrix,Jt.spotLightMap.value=V.state.spotLightMap,Jt.pointShadowMap.value=V.state.pointShadowMap,Jt.pointShadowMatrix.value=V.state.pointShadowMatrix),nt.currentProgram=ne,nt.uniformsList=null,ne}function Ui(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Oc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Cr(A,W){const et=jt.get(A);et.outputColorSpace=W.outputColorSpace,et.batching=W.batching,et.batchingColor=W.batchingColor,et.instancing=W.instancing,et.instancingColor=W.instancingColor,et.instancingMorph=W.instancingMorph,et.skinning=W.skinning,et.morphTargets=W.morphTargets,et.morphNormals=W.morphNormals,et.morphColors=W.morphColors,et.morphTargetsCount=W.morphTargetsCount,et.numClippingPlanes=W.numClippingPlanes,et.numIntersection=W.numClipIntersection,et.vertexAlphas=W.vertexAlphas,et.vertexTangents=W.vertexTangents,et.toneMapping=W.toneMapping}function kc(A,W,et,nt,V){W.isScene!==!0&&(W=ye),U.resetTextureUnits();const yt=W.fog,Ut=nt.isMeshStandardMaterial?W.environment:null,Ot=K===null?D.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ns,zt=(nt.isMeshStandardMaterial?J:E).get(nt.envMap||Ut),Qt=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ne=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Jt=!!et.morphAttributes.position,Se=!!et.morphAttributes.normal,Te=!!et.morphAttributes.color;let Ge=Fa;nt.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ge=D.toneMapping);const Be=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,re=Be!==void 0?Be.length:0,Ht=jt.get(nt),Je=v.state.lights;if(ut===!0&&(xt===!0||A!==R)){const ln=A===R&&nt.id===C;Et.setState(nt,A,ln)}let be=!1;nt.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Je.state.version||Ht.outputColorSpace!==Ot||V.isBatchedMesh&&Ht.batching===!1||!V.isBatchedMesh&&Ht.batching===!0||V.isBatchedMesh&&Ht.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ht.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ht.instancing===!1||!V.isInstancedMesh&&Ht.instancing===!0||V.isSkinnedMesh&&Ht.skinning===!1||!V.isSkinnedMesh&&Ht.skinning===!0||V.isInstancedMesh&&Ht.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ht.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ht.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ht.instancingMorph===!1&&V.morphTexture!==null||Ht.envMap!==zt||nt.fog===!0&&Ht.fog!==yt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Et.numPlanes||Ht.numIntersection!==Et.numIntersection)||Ht.vertexAlphas!==Qt||Ht.vertexTangents!==ne||Ht.morphTargets!==Jt||Ht.morphNormals!==Se||Ht.morphColors!==Te||Ht.toneMapping!==Ge||Ht.morphTargetsCount!==re)&&(be=!0):(be=!0,Ht.__version=nt.version);let En=Ht.currentProgram;be===!0&&(En=on(nt,W,V));let Li=!1,pn=!1,Va=!1;const _e=En.getUniforms(),Tn=Ht.uniforms;if(qt.useProgram(En.program)&&(Li=!0,pn=!0,Va=!0),nt.id!==C&&(C=nt.id,pn=!0),Li||R!==A){qt.buffers.depth.getReversed()?(bt.copy(A.projectionMatrix),GM(bt),VM(bt),_e.setValue(z,"projectionMatrix",bt)):_e.setValue(z,"projectionMatrix",A.projectionMatrix),_e.setValue(z,"viewMatrix",A.matrixWorldInverse);const Ke=_e.map.cameraPosition;Ke!==void 0&&Ke.setValue(z,Vt.setFromMatrixPosition(A.matrixWorld)),de.logarithmicDepthBuffer&&_e.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&_e.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,pn=!0,Va=!0)}if(V.isSkinnedMesh){_e.setOptional(z,V,"bindMatrix"),_e.setOptional(z,V,"bindMatrixInverse");const ln=V.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),_e.setValue(z,"boneTexture",ln.boneTexture,U))}V.isBatchedMesh&&(_e.setOptional(z,V,"batchingTexture"),_e.setValue(z,"batchingTexture",V._matricesTexture,U),_e.setOptional(z,V,"batchingIdTexture"),_e.setValue(z,"batchingIdTexture",V._indirectTexture,U),_e.setOptional(z,V,"batchingColorTexture"),V._colorsTexture!==null&&_e.setValue(z,"batchingColorTexture",V._colorsTexture,U));const Ln=et.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Wt.update(V,et,En),(pn||Ht.receiveShadow!==V.receiveShadow)&&(Ht.receiveShadow=V.receiveShadow,_e.setValue(z,"receiveShadow",V.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Tn.envMap.value=zt,Tn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&W.environment!==null&&(Tn.envMapIntensity.value=W.environmentIntensity),pn&&(_e.setValue(z,"toneMappingExposure",D.toneMappingExposure),Ht.needsLights&&Xc(Tn,Va),yt&&nt.fog===!0&&wt.refreshFogUniforms(Tn,yt),wt.refreshMaterialUniforms(Tn,nt,j,rt,v.state.transmissionRenderTarget[A.id]),Oc.upload(z,Ui(Ht),Tn,U)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Oc.upload(z,Ui(Ht),Tn,U),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&_e.setValue(z,"center",V.center),_e.setValue(z,"modelViewMatrix",V.modelViewMatrix),_e.setValue(z,"normalMatrix",V.normalMatrix),_e.setValue(z,"modelMatrix",V.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const ln=nt.uniformsGroups;for(let Ke=0,wr=ln.length;Ke<wr;Ke++){const yi=ln[Ke];X.update(yi,En),X.bind(yi,En)}}return En}function Xc(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function el(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,W,et){jt.get(A.texture).__webglTexture=W,jt.get(A.depthTexture).__webglTexture=et;const nt=jt.get(A);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const et=jt.get(A);et.__webglFramebuffer=W,et.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,et=0){K=A,G=W,F=et;let nt=!0,V=null,yt=!1,Ut=!1;if(A){const zt=jt.get(A);if(zt.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(z.FRAMEBUFFER,null),nt=!1;else if(zt.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(zt.__hasExternalTextures)U.rebindTextures(A,jt.get(A.texture).__webglTexture,jt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Jt=A.depthTexture;if(zt.__boundDepthTexture!==Jt){if(Jt!==null&&jt.has(Jt)&&(A.width!==Jt.image.width||A.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}const Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ut=!0);const ne=jt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ne[W])?V=ne[W][et]:V=ne[W],yt=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?V=jt.get(A).__webglMultisampledFramebuffer:Array.isArray(ne)?V=ne[et]:V=ne,B.copy(A.viewport),ct.copy(A.scissor),at=A.scissorTest}else B.copy(it).multiplyScalar(j).floor(),ct.copy(Tt).multiplyScalar(j).floor(),at=At;if(qt.bindFramebuffer(z.FRAMEBUFFER,V)&&nt&&qt.drawBuffers(A,V),qt.viewport(B),qt.scissor(ct),qt.setScissorTest(at),yt){const zt=jt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,zt.__webglTexture,et)}else if(Ut){const zt=jt.get(A.texture),Qt=W||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,zt.__webglTexture,et||0,Qt)}C=-1},this.readRenderTargetPixels=function(A,W,et,nt,V,yt,Ut){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=jt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot){qt.bindFramebuffer(z.FRAMEBUFFER,Ot);try{const zt=A.texture,Qt=zt.format,ne=zt.type;if(!de.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-nt&&et>=0&&et<=A.height-V&&z.readPixels(W,et,nt,V,$t.convert(Qt),$t.convert(ne),yt)}finally{const zt=K!==null?jt.get(K).__webglFramebuffer:null;qt.bindFramebuffer(z.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,W,et,nt,V,yt,Ut){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=jt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot){const zt=A.texture,Qt=zt.format,ne=zt.type;if(!de.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-nt&&et>=0&&et<=A.height-V){qt.bindFramebuffer(z.FRAMEBUFFER,Ot);const Jt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Jt),z.bufferData(z.PIXEL_PACK_BUFFER,yt.byteLength,z.STREAM_READ),z.readPixels(W,et,nt,V,$t.convert(Qt),$t.convert(ne),0);const Se=K!==null?jt.get(K).__webglFramebuffer:null;qt.bindFramebuffer(z.FRAMEBUFFER,Se);const Te=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await HM(z,Te,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Jt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,yt),z.deleteBuffer(Jt),z.deleteSync(Te),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,et=0){A.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const nt=Math.pow(2,-et),V=Math.floor(A.image.width*nt),yt=Math.floor(A.image.height*nt),Ut=W!==null?W.x:0,Ot=W!==null?W.y:0;U.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,et,0,0,Ut,Ot,V,yt),qt.unbindTexture()};const Ga=z.createFramebuffer(),Gs=z.createFramebuffer();this.copyTextureToTexture=function(A,W,et=null,nt=null,V=0,yt=null){A.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,A=arguments[1],W=arguments[2],yt=arguments[3]||0,et=null),yt===null&&(V!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=V,V=0):yt=0);let Ut,Ot,zt,Qt,ne,Jt,Se,Te,Ge;const Be=A.isCompressedTexture?A.mipmaps[yt]:A.image;if(et!==null)Ut=et.max.x-et.min.x,Ot=et.max.y-et.min.y,zt=et.isBox3?et.max.z-et.min.z:1,Qt=et.min.x,ne=et.min.y,Jt=et.isBox3?et.min.z:0;else{const Ln=Math.pow(2,-V);Ut=Math.floor(Be.width*Ln),Ot=Math.floor(Be.height*Ln),A.isDataArrayTexture?zt=Be.depth:A.isData3DTexture?zt=Math.floor(Be.depth*Ln):zt=1,Qt=0,ne=0,Jt=0}nt!==null?(Se=nt.x,Te=nt.y,Ge=nt.z):(Se=0,Te=0,Ge=0);const re=$t.convert(W.format),Ht=$t.convert(W.type);let Je;W.isData3DTexture?(U.setTexture3D(W,0),Je=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),Je=z.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),Je=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const be=z.getParameter(z.UNPACK_ROW_LENGTH),En=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Li=z.getParameter(z.UNPACK_SKIP_PIXELS),pn=z.getParameter(z.UNPACK_SKIP_ROWS),Va=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Be.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Be.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ne),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Jt);const _e=A.isDataArrayTexture||A.isData3DTexture,Tn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Ln=jt.get(A),ln=jt.get(W),Ke=jt.get(Ln.__renderTarget),wr=jt.get(ln.__renderTarget);qt.bindFramebuffer(z.READ_FRAMEBUFFER,Ke.__webglFramebuffer),qt.bindFramebuffer(z.DRAW_FRAMEBUFFER,wr.__webglFramebuffer);for(let yi=0;yi<zt;yi++)_e&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,jt.get(A).__webglTexture,V,Jt+yi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,jt.get(W).__webglTexture,yt,Ge+yi)),z.blitFramebuffer(Qt,ne,Ut,Ot,Se,Te,Ut,Ot,z.DEPTH_BUFFER_BIT,z.NEAREST);qt.bindFramebuffer(z.READ_FRAMEBUFFER,null),qt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||jt.has(A)){const Ln=jt.get(A),ln=jt.get(W);qt.bindFramebuffer(z.READ_FRAMEBUFFER,Ga),qt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Gs);for(let Ke=0;Ke<zt;Ke++)_e?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ln.__webglTexture,V,Jt+Ke):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ln.__webglTexture,V),Tn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ln.__webglTexture,yt,Ge+Ke):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ln.__webglTexture,yt),V!==0?z.blitFramebuffer(Qt,ne,Ut,Ot,Se,Te,Ut,Ot,z.COLOR_BUFFER_BIT,z.NEAREST):Tn?z.copyTexSubImage3D(Je,yt,Se,Te,Ge+Ke,Qt,ne,Ut,Ot):z.copyTexSubImage2D(Je,yt,Se,Te,Qt,ne,Ut,Ot);qt.bindFramebuffer(z.READ_FRAMEBUFFER,null),qt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Tn?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Je,yt,Se,Te,Ge,Ut,Ot,zt,re,Ht,Be.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(Je,yt,Se,Te,Ge,Ut,Ot,zt,re,Be.data):z.texSubImage3D(Je,yt,Se,Te,Ge,Ut,Ot,zt,re,Ht,Be):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,yt,Se,Te,Ut,Ot,re,Ht,Be.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,yt,Se,Te,Be.width,Be.height,re,Be.data):z.texSubImage2D(z.TEXTURE_2D,yt,Se,Te,Ut,Ot,re,Ht,Be);z.pixelStorei(z.UNPACK_ROW_LENGTH,be),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,En),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Li),z.pixelStorei(z.UNPACK_SKIP_ROWS,pn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Va),yt===0&&W.generateMipmaps&&z.generateMipmap(Je),qt.unbindTexture()},this.copyTextureToTexture3D=function(A,W,et=null,nt=null,V=0){return A.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,nt=arguments[1]||null,A=arguments[2],W=arguments[3],V=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,et,nt,V)},this.initRenderTarget=function(A){jt.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),qt.unbindTexture()},this.resetState=function(){G=0,F=0,K=null,qt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const p0={type:"change"},Ld={type:"start"},cv={type:"end"},Cc=new Y0,m0=new Na,rR=Math.cos(70*FM.DEG2RAD),fn=new tt,In=2*Math.PI,ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ch=1e-6;class sR extends yE{constructor(t,i=null){super(t,i),this.state=ze.NONE,this.enabled=!0,this.target=new tt,this.cursor=new tt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN},this.touches={ONE:Ms.ROTATE,TWO:Ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new tt,this._lastQuaternion=new Mr,this._lastTargetPosition=new tt,this._quat=new Mr().setFromUnitVectors(t.up,new tt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vg,this._sphericalDelta=new Vg,this._scale=1,this._panOffset=new tt,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new tt,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lR.bind(this),this._onPointerDown=oR.bind(this),this._onPointerUp=cR.bind(this),this._onContextMenu=_R.bind(this),this._onMouseWheel=hR.bind(this),this._onKeyDown=dR.bind(this),this._onTouchStart=pR.bind(this),this._onTouchMove=mR.bind(this),this._onMouseDown=uR.bind(this),this._onMouseMove=fR.bind(this),this._interceptControlDown=gR.bind(this),this._interceptControlUp=vR.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(p0),this.update(),this.state=ze.NONE}update(t=null){const i=this.object.position;fn.copy(i).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=In:r>Math.PI&&(r-=In),l<-Math.PI?l+=In:l>Math.PI&&(l-=In),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),i.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=fn.length();h=this._clampDistance(d*this._scale);const p=d-h;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),u=!!p}else if(this.object.isOrthographicCamera){const d=new tt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=p!==this.object.zoom;const m=new tt(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),h=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Cc.origin.copy(this.object.position),Cc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cc.direction))<rR?this.object.lookAt(this.target):(m0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cc.intersectPlane(m0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Ch||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ch||this._lastTargetPosition.distanceToSquared(this.target)>Ch?(this.dispatchEvent(p0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?In/60*this.autoRotateSpeed*t:In/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){fn.setFromMatrixColumn(i,0),fn.multiplyScalar(-t),this._panOffset.add(fn)}_panUp(t,i){this.screenSpacePanning===!0?fn.setFromMatrixColumn(i,1):(fn.setFromMatrixColumn(i,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(t),this._panOffset.add(fn)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;fn.copy(l).sub(this.target);let u=fn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/r.clientHeight,this.object.matrix),this._panUp(2*i*u/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,u=i-r.top,h=r.width,d=r.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(In*this._rotateDelta.x/i.clientHeight),this._rotateUp(In*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(r*r+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),u=.5*(t.pageY+r.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(In*this._rotateDelta.x/i.clientHeight),this._rotateUp(In*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ce,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function oR(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function lR(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function cR(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cv),this.state=ze.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function uR(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ze.DOLLY;break;case Ts.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ze.ROTATE}break;case Ts.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ze.PAN}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Ld)}function fR(s){switch(this.state){case ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function hR(s){this.enabled===!1||this.enableZoom===!1||this.state!==ze.NONE||(s.preventDefault(),this.dispatchEvent(Ld),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(cv))}function dR(s){this.enabled!==!1&&this._handleKeyDown(s)}function pR(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ms.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ze.TOUCH_ROTATE;break;case Ms.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ze.TOUCH_PAN;break;default:this.state=ze.NONE}break;case 2:switch(this.touches.TWO){case Ms.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ze.TOUCH_DOLLY_PAN;break;case Ms.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ze.TOUCH_DOLLY_ROTATE;break;default:this.state=ze.NONE}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Ld)}function mR(s){switch(this._trackPointer(s),this.state){case ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ze.NONE}}function _R(s){this.enabled!==!1&&s.preventDefault()}function gR(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vR(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const SR=()=>{const s=Pt.useRef(null);return Pt.useEffect(()=>{const t=new fE,i=new li(75,window.innerWidth/window.innerHeight,.1,1e3),r=new aR({canvas:s.current});r.setSize(window.innerWidth,window.innerHeight);const l=new Jo(500,500),u=new Ig({color:8900331}),h=new vi(l,u);h.rotation.x=-Math.PI/2,t.add(h);const d=new Bs(1,1,2),p=new Ig({color:16711680}),m=new vi(d,p);m.position.set(0,.5,0),t.add(m);const _=new SE(16777215,.5);t.add(_);const g=new vE(16777215,1);g.position.set(5,10,7.5),t.add(g);const S=new sR(i,r.domElement);S.enableDamping=!0,i.position.set(0,10,20),i.lookAt(0,0,0);const M=()=>{requestAnimationFrame(M),S.update(),r.render(t,i)};M();const T=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T),r.dispose()}},[]),Mt.jsx("canvas",{ref:s})},xR=["hearts","diamonds","clubs","spades"],yR=["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];function MR(){const s=[];for(let t of xR)for(let i of yR)s.push({value:i,suit:t});return s}function ER(){const[s,t]=Pt.useState(MR()),[i,r]=Pt.useState(null),l=()=>{t(h=>[...h].sort(()=>Math.random()-.5))},u=()=>{if(s.length>0){const h=[...s],d=h.pop();t(h),r(d)}else alert("No more cards in the deck!")};return Mt.jsxs("div",{className:"cards-container",children:[Mt.jsxs("div",{className:"buttons",children:[Mt.jsx("button",{onClick:l,children:"Shuffle Deck"}),Mt.jsx("button",{onClick:u,children:"Draw Card"})]}),Mt.jsx("div",{id:"card-deck",children:s.map((h,d)=>Mt.jsx("div",{className:"card",style:{backgroundImage:`url('/cards/${h.value}_of_${h.suit}.png')`}},d))}),i&&Mt.jsxs("div",{id:"drawn-card",children:["You drew the ",i.value," of ",i.suit]})]})}function TR(){const s=jo();return Pt.useEffect(()=>{const t={"/":"Home - Jachen","/about":"About - Jachen","/projects":"Projects - Jachen","/contact":"Contact - Jachen","/resume":"Resume - Jachen","/trees":"Trees - Jachen","/sandbox":"Sandbox - Jachen","/cards":"Cards - Jachen"};document.title=t[s.pathname]||"Jachen"},[s]),Mt.jsx("div",{className:"app-container",children:Mt.jsx(Ly,{children:Mt.jsxs(py,{children:[Mt.jsx($i,{path:"/",element:Mt.jsx(by,{})}),Mt.jsx($i,{path:"/about",element:Mt.jsx(Ay,{})}),Mt.jsx($i,{path:"/projects",element:Mt.jsx(Ry,{})}),Mt.jsx($i,{path:"/contact",element:Mt.jsx(Cy,{})}),Mt.jsx($i,{path:"/resume",element:Mt.jsx(Ny,{})}),Mt.jsx($i,{path:"/sandbox",element:Mt.jsx(SR,{})}),Mt.jsx($i,{path:"/cards",element:Mt.jsx(ER,{})}),Mt.jsx($i,{path:"*",element:Mt.jsx(Oy,{})})]})})})}bx.createRoot(document.getElementById("root")).render(Mt.jsx(Pt.StrictMode,{children:Mt.jsx(yy,{children:Mt.jsx(TR,{})})}));
