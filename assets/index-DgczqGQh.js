(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Jf={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function ES(){if(o_)return zo;o_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:u}}return zo.Fragment=t,zo.jsx=i,zo.jsxs=i,zo}var l_;function TS(){return l_||(l_=1,Jf.exports=ES()),Jf.exports}var xt=TS(),$f={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function bS(){if(u_)return le;u_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function S(N,it,bt){this.props=N,this.context=it,this.refs=C,this.updater=bt||y}S.prototype.isReactComponent={},S.prototype.setState=function(N,it){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,it,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function g(){}g.prototype=S.prototype;function O(N,it,bt){this.props=N,this.context=it,this.refs=C,this.updater=bt||y}var U=O.prototype=new g;U.constructor=O,E(U,S.prototype),U.isPureReactComponent=!0;var D=Array.isArray,F={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function B(N,it,bt,Ct,q,pt){return bt=pt.ref,{$$typeof:s,type:N,key:it,ref:bt!==void 0?bt:null,props:pt}}function Z(N,it){return B(N.type,it,void 0,void 0,void 0,N.props)}function w(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function b(N){var it={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(bt){return it[bt]})}var I=/\/+/g;function ut(N,it){return typeof N=="object"&&N!==null&&N.key!=null?b(""+N.key):it.toString(36)}function at(){}function gt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(at,at):(N.status="pending",N.then(function(it){N.status==="pending"&&(N.status="fulfilled",N.value=it)},function(it){N.status==="pending"&&(N.status="rejected",N.reason=it)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function dt(N,it,bt,Ct,q){var pt=typeof N;(pt==="undefined"||pt==="boolean")&&(N=null);var yt=!1;if(N===null)yt=!0;else switch(pt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(N.$$typeof){case s:case t:yt=!0;break;case _:return yt=N._init,dt(yt(N._payload),it,bt,Ct,q)}}if(yt)return q=q(N),yt=Ct===""?"."+ut(N,0):Ct,D(q)?(bt="",yt!=null&&(bt=yt.replace(I,"$&/")+"/"),dt(q,it,bt,"",function(Jt){return Jt})):q!=null&&(w(q)&&(q=Z(q,bt+(q.key==null||N&&N.key===q.key?"":(""+q.key).replace(I,"$&/")+"/")+yt)),it.push(q)),1;yt=0;var At=Ct===""?".":Ct+":";if(D(N))for(var wt=0;wt<N.length;wt++)Ct=N[wt],pt=At+ut(Ct,wt),yt+=dt(Ct,it,bt,pt,q);else if(wt=v(N),typeof wt=="function")for(N=wt.call(N),wt=0;!(Ct=N.next()).done;)Ct=Ct.value,pt=At+ut(Ct,wt++),yt+=dt(Ct,it,bt,pt,q);else if(pt==="object"){if(typeof N.then=="function")return dt(gt(N),it,bt,Ct,q);throw it=String(N),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return yt}function W(N,it,bt){if(N==null)return N;var Ct=[],q=0;return dt(N,Ct,"","",function(pt){return it.call(bt,pt,q++)}),Ct}function rt(N){if(N._status===-1){var it=N._result;it=it(),it.then(function(bt){(N._status===0||N._status===-1)&&(N._status=1,N._result=bt)},function(bt){(N._status===0||N._status===-1)&&(N._status=2,N._result=bt)}),N._status===-1&&(N._status=0,N._result=it)}if(N._status===1)return N._result.default;throw N._result}var j=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Mt(){}return le.Children={map:W,forEach:function(N,it,bt){W(N,function(){it.apply(this,arguments)},bt)},count:function(N){var it=0;return W(N,function(){it++}),it},toArray:function(N){return W(N,function(it){return it})||[]},only:function(N){if(!w(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},le.Component=S,le.Fragment=i,le.Profiler=l,le.PureComponent=O,le.StrictMode=r,le.Suspense=p,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,le.act=function(){throw Error("act(...) is not supported in production builds of React.")},le.cache=function(N){return function(){return N.apply(null,arguments)}},le.cloneElement=function(N,it,bt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ct=E({},N.props),q=N.key,pt=void 0;if(it!=null)for(yt in it.ref!==void 0&&(pt=void 0),it.key!==void 0&&(q=""+it.key),it)!H.call(it,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&it.ref===void 0||(Ct[yt]=it[yt]);var yt=arguments.length-2;if(yt===1)Ct.children=bt;else if(1<yt){for(var At=Array(yt),wt=0;wt<yt;wt++)At[wt]=arguments[wt+2];Ct.children=At}return B(N.type,q,void 0,void 0,pt,Ct)},le.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},le.createElement=function(N,it,bt){var Ct,q={},pt=null;if(it!=null)for(Ct in it.key!==void 0&&(pt=""+it.key),it)H.call(it,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(q[Ct]=it[Ct]);var yt=arguments.length-2;if(yt===1)q.children=bt;else if(1<yt){for(var At=Array(yt),wt=0;wt<yt;wt++)At[wt]=arguments[wt+2];q.children=At}if(N&&N.defaultProps)for(Ct in yt=N.defaultProps,yt)q[Ct]===void 0&&(q[Ct]=yt[Ct]);return B(N,pt,void 0,void 0,null,q)},le.createRef=function(){return{current:null}},le.forwardRef=function(N){return{$$typeof:d,render:N}},le.isValidElement=w,le.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:rt}},le.memo=function(N,it){return{$$typeof:m,type:N,compare:it===void 0?null:it}},le.startTransition=function(N){var it=F.T,bt={};F.T=bt;try{var Ct=N(),q=F.S;q!==null&&q(bt,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(Mt,j)}catch(pt){j(pt)}finally{F.T=it}},le.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},le.use=function(N){return F.H.use(N)},le.useActionState=function(N,it,bt){return F.H.useActionState(N,it,bt)},le.useCallback=function(N,it){return F.H.useCallback(N,it)},le.useContext=function(N){return F.H.useContext(N)},le.useDebugValue=function(){},le.useDeferredValue=function(N,it){return F.H.useDeferredValue(N,it)},le.useEffect=function(N,it){return F.H.useEffect(N,it)},le.useId=function(){return F.H.useId()},le.useImperativeHandle=function(N,it,bt){return F.H.useImperativeHandle(N,it,bt)},le.useInsertionEffect=function(N,it){return F.H.useInsertionEffect(N,it)},le.useLayoutEffect=function(N,it){return F.H.useLayoutEffect(N,it)},le.useMemo=function(N,it){return F.H.useMemo(N,it)},le.useOptimistic=function(N,it){return F.H.useOptimistic(N,it)},le.useReducer=function(N,it,bt){return F.H.useReducer(N,it,bt)},le.useRef=function(N){return F.H.useRef(N)},le.useState=function(N){return F.H.useState(N)},le.useSyncExternalStore=function(N,it,bt){return F.H.useSyncExternalStore(N,it,bt)},le.useTransition=function(){return F.H.useTransition()},le.version="19.0.0",le}var c_;function Ad(){return c_||(c_=1,$f.exports=bS()),$f.exports}var ft=Ad(),th={exports:{}},Bo={},eh={exports:{}},nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function AS(){return f_||(f_=1,function(s){function t(W,rt){var j=W.length;W.push(rt);t:for(;0<j;){var Mt=j-1>>>1,N=W[Mt];if(0<l(N,rt))W[Mt]=rt,W[j]=N,j=Mt;else break t}}function i(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var rt=W[0],j=W.pop();if(j!==rt){W[0]=j;t:for(var Mt=0,N=W.length,it=N>>>1;Mt<it;){var bt=2*(Mt+1)-1,Ct=W[bt],q=bt+1,pt=W[q];if(0>l(Ct,j))q<N&&0>l(pt,Ct)?(W[Mt]=pt,W[q]=j,Mt=q):(W[Mt]=Ct,W[bt]=j,Mt=bt);else if(q<N&&0>l(pt,j))W[Mt]=pt,W[q]=j,Mt=q;else break t}}return rt}function l(W,rt){var j=W.sortIndex-rt.sortIndex;return j!==0?j:W.id-rt.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,x=null,v=3,y=!1,E=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(W){for(var rt=i(m);rt!==null;){if(rt.callback===null)r(m);else if(rt.startTime<=W)r(m),rt.sortIndex=rt.expirationTime,t(p,rt);else break;rt=i(m)}}function D(W){if(C=!1,U(W),!E)if(i(p)!==null)E=!0,gt();else{var rt=i(m);rt!==null&&dt(D,rt.startTime-W)}}var F=!1,H=-1,B=5,Z=-1;function w(){return!(s.unstable_now()-Z<B)}function b(){if(F){var W=s.unstable_now();Z=W;var rt=!0;try{t:{E=!1,C&&(C=!1,g(H),H=-1),y=!0;var j=v;try{e:{for(U(W),x=i(p);x!==null&&!(x.expirationTime>W&&w());){var Mt=x.callback;if(typeof Mt=="function"){x.callback=null,v=x.priorityLevel;var N=Mt(x.expirationTime<=W);if(W=s.unstable_now(),typeof N=="function"){x.callback=N,U(W),rt=!0;break e}x===i(p)&&r(p),U(W)}else r(p);x=i(p)}if(x!==null)rt=!0;else{var it=i(m);it!==null&&dt(D,it.startTime-W),rt=!1}}break t}finally{x=null,v=j,y=!1}rt=void 0}}finally{rt?I():F=!1}}}var I;if(typeof O=="function")I=function(){O(b)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,at=ut.port2;ut.port1.onmessage=b,I=function(){at.postMessage(null)}}else I=function(){S(b,0)};function gt(){F||(F=!0,I())}function dt(W,rt){H=S(function(){W(s.unstable_now())},rt)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(W){W.callback=null},s.unstable_continueExecution=function(){E||y||(E=!0,gt())},s.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<W?Math.floor(1e3/W):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return i(p)},s.unstable_next=function(W){switch(v){case 1:case 2:case 3:var rt=3;break;default:rt=v}var j=v;v=rt;try{return W()}finally{v=j}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(W,rt){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var j=v;v=W;try{return rt()}finally{v=j}},s.unstable_scheduleCallback=function(W,rt,j){var Mt=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Mt+j:Mt):j=Mt,W){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=j+N,W={id:_++,callback:rt,priorityLevel:W,startTime:j,expirationTime:N,sortIndex:-1},j>Mt?(W.sortIndex=j,t(m,W),i(p)===null&&W===i(m)&&(C?(g(H),H=-1):C=!0,dt(D,j-Mt))):(W.sortIndex=N,t(p,W),E||y||(E=!0,gt())),W},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(W){var rt=v;return function(){var j=v;v=rt;try{return W.apply(this,arguments)}finally{v=j}}}}(nh)),nh}var h_;function RS(){return h_||(h_=1,eh.exports=AS()),eh.exports}var ih={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function CS(){if(d_)return bn;d_=1;var s=Ad();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:m,implementation:_}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(p,m,null,_)},bn.flushSync=function(p){var m=f.T,_=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=_,r.d.f()}},bn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},bn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},bn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,x=d(_,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:y}):_==="script"&&r.d.X(p,{crossOrigin:x,integrity:v,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},bn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},bn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,x=d(_,m.crossOrigin);r.d.L(p,_,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},bn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},bn.requestFormReset=function(p){r.d.r(p)},bn.unstable_batchedUpdates=function(p,m){return p(m)},bn.useFormState=function(p,m,_){return f.H.useFormState(p,m,_)},bn.useFormStatus=function(){return f.H.useHostTransitionStatus()},bn.version="19.0.0",bn}var p_;function wS(){if(p_)return ih.exports;p_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ih.exports=CS(),ih.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function DS(){if(m_)return Bo;m_=1;var s=RS(),t=Ad(),i=wS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),v=Symbol.for("react.consumer"),y=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var B=Symbol.for("react.client.reference");function Z(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===B?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case d:return"Portal";case _:return"Profiler";case m:return"StrictMode";case C:return"Suspense";case S:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:return(e.displayName||"Context")+".Provider";case v:return(e._context.displayName||"Context")+".Consumer";case E:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case g:return n=e.displayName||null,n!==null?n:Z(e.type)||"Memo";case O:n=e._payload,e=e._init;try{return Z(e(n))}catch{}}return null}var w=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,b=Object.assign,I,ut;function at(e){if(I===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);I=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+I+e+ut}var gt=!1;function dt(e,n){if(!e||gt)return"";gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ot){var nt=ot}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ot){nt=ot}e.call(vt.prototype)}}else{try{throw Error()}catch(ot){nt=ot}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ot){if(ot&&nt&&typeof ot.stack=="string")return[ot.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],A=h[1];if(M&&A){var P=M.split(`
`),V=A.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<V.length&&!V[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===V.length)for(o=P.length-1,c=V.length-1;1<=o&&0<=c&&P[o]!==V[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==V[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==V[c]){var lt=`
`+P[o].replace(" at new "," at ");return e.displayName&&lt.includes("<anonymous>")&&(lt=lt.replace("<anonymous>",e.displayName)),lt}while(1<=o&&0<=c);break}}}finally{gt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?at(a):""}function W(e){switch(e.tag){case 26:case 27:case 5:return at(e.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return e=dt(e.type,!1),e;case 11:return e=dt(e.type.render,!1),e;case 1:return e=dt(e.type,!0),e;default:return""}}function rt(e){try{var n="";do n+=W(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function j(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function Mt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function N(e){if(j(e)!==e)throw Error(r(188))}function it(e){var n=e.alternate;if(!n){if(n=j(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return N(c),e;if(h===o)return N(c),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=h;else{for(var M=!1,A=c.child;A;){if(A===a){M=!0,a=c,o=h;break}if(A===o){M=!0,o=c,a=h;break}A=A.sibling}if(!M){for(A=h.child;A;){if(A===a){M=!0,a=h,o=c;break}if(A===o){M=!0,o=h,a=c;break}A=A.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function bt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=bt(e),n!==null)return n;e=e.sibling}return null}var Ct=Array.isArray,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt={pending:!1,data:null,method:null,action:null},yt=[],At=-1;function wt(e){return{current:e}}function Jt(e){0>At||(e.current=yt[At],yt[At]=null,At--)}function Bt(e,n){At++,yt[At]=e.current,e.current=n}var Ee=wt(null),De=wt(null),re=wt(null),z=wt(null);function vn(e,n){switch(Bt(re,n),Bt(De,e),Bt(Ee,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?zg(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=zg(e),n=Bg(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Jt(Ee),Bt(Ee,n)}function oe(){Jt(Ee),Jt(De),Jt(re)}function de(e){e.memoizedState!==null&&Bt(z,e);var n=Ee.current,a=Bg(n,e.type);n!==a&&(Bt(De,e),Bt(Ee,a))}function Wt(e){De.current===e&&(Jt(Ee),Jt(De)),z.current===e&&(Jt(z),Uo._currentValue=pt)}var Ue=Object.prototype.hasOwnProperty,qt=s.unstable_scheduleCallback,L=s.unstable_cancelCallback,T=s.unstable_shouldYield,tt=s.unstable_requestPaint,ct=s.unstable_now,St=s.unstable_getCurrentPriorityLevel,ht=s.unstable_ImmediatePriority,Vt=s.unstable_UserBlockingPriority,Ut=s.unstable_NormalPriority,Ft=s.unstable_LowPriority,_e=s.unstable_IdlePriority,Tt=s.log,It=s.unstable_setDisableYieldValue,Qt=null,kt=null;function Ht(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Qt,e,void 0,(e.current.flags&128)===128)}catch{}}function se(e){if(typeof Tt=="function"&&It(e),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(Qt,e)}catch{}}var Zt=Math.clz32?Math.clz32:Ot,Le=Math.log,k=Math.LN2;function Ot(e){return e>>>=0,e===0?32:31-(Le(e)/k|0)|0}var st=128,_t=4194304;function Dt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Lt(e,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,c=e.suspendedLanes,h=e.pingedLanes,M=e.warmLanes;e=e.finishedLanes!==0;var A=a&134217727;return A!==0?(a=A&~c,a!==0?o=Dt(a):(h&=A,h!==0?o=Dt(h):e||(M=A&~M,M!==0&&(o=Dt(M))))):(A=a&~c,A!==0?o=Dt(A):h!==0?o=Dt(h):e||(M=a&~M,M!==0&&(o=Dt(M)))),o===0?0:n!==0&&n!==o&&(n&c)===0&&(c=o&-o,M=n&-n,c>=M||c===32&&(M&4194176)!==0)?n:o}function te(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ve(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function an(){var e=st;return st<<=1,(st&4194176)===0&&(st=128),e}function Te(){var e=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),e}function wn(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Dn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nl(e,n,a,o,c,h){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,P=e.expirationTimes,V=e.hiddenUpdates;for(a=M&~a;0<a;){var lt=31-Zt(a),vt=1<<lt;A[lt]=0,P[lt]=-1;var nt=V[lt];if(nt!==null)for(V[lt]=null,lt=0;lt<nt.length;lt++){var ot=nt[lt];ot!==null&&(ot.lane&=-536870913)}a&=~vt}o!==0&&Gs(e,o,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(M&~n))}function Gs(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194218}function Ei(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Zt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Lr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vs(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:e_(e.type))}function il(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var Xn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Xn,sn="__reactProps$"+Xn,zi="__reactContainer$"+Xn,Nr="__reactEvents$"+Xn,Zu="__reactListeners$"+Xn,Ku="__reactHandles$"+Xn,al="__reactResources$"+Xn,ja="__reactMarker$"+Xn;function ks(e){delete e[rn],delete e[sn],delete e[Nr],delete e[Zu],delete e[Ku]}function Bi(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[zi]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Hg(e);e!==null;){if(a=e[rn])return a;e=Hg(e)}return n}e=a,a=e.parentNode}return null}function R(e){if(e=e[rn]||e[zi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function X(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function $(e){var n=e[al];return n||(n=e[al]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(e){e[ja]=!0}var Y=new Set,Et={};function Rt(e,n){zt(e,n),zt(e+"Capture",n)}function zt(e,n){for(Et[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},jt={};function ve(e){return Ue.call(jt,e)?!0:Ue.call(ne,e)?!1:ee.test(e)?jt[e]=!0:(ne[e]=!0,!1)}function xe(e,n,a){if(ve(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ge(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function be(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ie(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function on(e){var n=Kt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(M){o=""+M,h.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Se(e){e._valueTracker||(e._valueTracker=on(e))}function zn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Kt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Un=/[\n"\\]/g;function dn(e){return e.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ne(e,n,a,o,c,h,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ie(n)):e.value!==""+ie(n)&&(e.value=""+ie(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?En(e,M,ie(n)):a!=null?En(e,M,ie(a)):o!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ie(A):e.removeAttribute("name")}function Ln(e,n,a,o,c,h,M,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+ie(a):"",n=n!=null?""+ie(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function En(e,n,a){n==="number"&&fi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function qe(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ie(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function xn(e,n,a){if(n!=null&&(n=""+ie(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ie(a):""}function Or(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Ct(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ie(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Bn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var S0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||S0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Wd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Xd(e,c,o)}else for(var h in n)n.hasOwnProperty(h)&&Xd(e,h,n[h])}function Qu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var y0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),M0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rl(e){return M0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ju=null;function $u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,zr=null;function qd(e){var n=R(e);if(n&&(e=n.stateNode)){var a=e[sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ne(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[sn]||null;if(!c)throw Error(r(90));Ne(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&zn(o)}break t;case"textarea":xn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&qe(e,!!a.multiple,n,!1)}}}var tc=!1;function Yd(e,n,a){if(tc)return e(n,a);tc=!0;try{var o=e(n);return o}finally{if(tc=!1,(Pr!==null||zr!==null)&&(Vl(),Pr&&(n=Pr,e=zr,zr=Pr=null,qd(n),e)))for(n=0;n<e.length;n++)qd(e[n])}}function Xs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[sn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ec=!1;if(Pt)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){ec=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{ec=!1}var da=null,nc=null,sl=null;function jd(){if(sl)return sl;var e,n=nc,a=n.length,o,c="value"in da?da.value:da.textContent,h=c.length;for(e=0;e<a&&n[e]===c[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===c[h-o];o++);return sl=c.slice(e,1<o?1-o:void 0)}function ol(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function Zd(){return!1}function Fn(e){function n(a,o,c,h,M){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ll:Zd,this.isPropagationStopped=Zd,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Fn(Za),qs=b({},Za,{view:0,detail:0}),E0=Fn(qs),ic,ac,Ys,cl=b({},qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ys&&(Ys&&e.type==="mousemove"?(ic=e.screenX-Ys.screenX,ac=e.screenY-Ys.screenY):ac=ic=0,Ys=e),ic)},movementY:function(e){return"movementY"in e?e.movementY:ac}}),Kd=Fn(cl),T0=b({},cl,{dataTransfer:0}),b0=Fn(T0),A0=b({},qs,{relatedTarget:0}),rc=Fn(A0),R0=b({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),C0=Fn(R0),w0=b({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),D0=Fn(w0),U0=b({},Za,{data:0}),Qd=Fn(U0),L0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=O0[e])?!!n[e]:!1}function sc(){return P0}var z0=b({},qs,{key:function(e){if(e.key){var n=L0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?N0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sc,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),B0=Fn(z0),F0=b({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=Fn(F0),I0=b({},qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sc}),H0=Fn(I0),G0=b({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),V0=Fn(G0),k0=b({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),X0=Fn(k0),W0=b({},Za,{newState:0,oldState:0}),q0=Fn(W0),Y0=[9,13,27,32],oc=Pt&&"CompositionEvent"in window,js=null;Pt&&"documentMode"in document&&(js=document.documentMode);var j0=Pt&&"TextEvent"in window&&!js,$d=Pt&&(!oc||js&&8<js&&11>=js),tp=" ",ep=!1;function np(e,n){switch(e){case"keyup":return Y0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function Z0(e,n){switch(e){case"compositionend":return ip(n);case"keypress":return n.which!==32?null:(ep=!0,tp);case"textInput":return e=n.data,e===tp&&ep?null:e;default:return null}}function K0(e,n){if(Br)return e==="compositionend"||!oc&&np(e,n)?(e=jd(),sl=nc=da=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return $d&&n.locale!=="ko"?null:n.data;default:return null}}var Q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Q0[e.type]:n==="textarea"}function rp(e,n,a,o){Pr?zr?zr.push(o):zr=[o]:Pr=o,n=Yl(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Zs=null,Ks=null;function J0(e){Ug(e,0)}function fl(e){var n=X(e);if(zn(n))return e}function sp(e,n){if(e==="change")return n}var op=!1;if(Pt){var lc;if(Pt){var uc="oninput"in document;if(!uc){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),uc=typeof lp.oninput=="function"}lc=uc}else lc=!1;op=lc&&(!document.documentMode||9<document.documentMode)}function up(){Zs&&(Zs.detachEvent("onpropertychange",cp),Ks=Zs=null)}function cp(e){if(e.propertyName==="value"&&fl(Ks)){var n=[];rp(n,Ks,e,$u(e)),Yd(J0,n)}}function $0(e,n,a){e==="focusin"?(up(),Zs=n,Ks=a,Zs.attachEvent("onpropertychange",cp)):e==="focusout"&&up()}function tx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(Ks)}function ex(e,n){if(e==="click")return fl(n)}function nx(e,n){if(e==="input"||e==="change")return fl(n)}function ix(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:ix;function Qs(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ue.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function fp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hp(e,n){var a=fp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=fp(a)}}function dp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?dp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function pp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=fi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=fi(e.document)}return n}function cc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ax(e,n){var a=pp(n);n=e.focusedElem;var o=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&dp(n.ownerDocument.documentElement,n)){if(o!==null&&cc(n)){if(e=o.start,a=o.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,h=Math.min(o.start,c);o=o.end===void 0?h:Math.min(o.end,c),!a.extend&&h>o&&(c=o,o=h,h=c),c=hp(n,h);var M=hp(n,o);c&&M&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==M.node||a.focusOffset!==M.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),a.removeAllRanges(),h>o?(a.addRange(e),a.extend(M.node,M.offset)):(e.setEnd(M.node,M.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var rx=Pt&&"documentMode"in document&&11>=document.documentMode,Fr=null,fc=null,Js=null,hc=!1;function mp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hc||Fr==null||Fr!==fi(o)||(o=Fr,"selectionStart"in o&&cc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Js&&Qs(Js,o)||(Js=o,o=Yl(fc,"onSelect"),0<o.length&&(n=new ul("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Fr)))}function Ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ir={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},dc={},gp={};Pt&&(gp=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function Qa(e){if(dc[e])return dc[e];if(!Ir[e])return e;var n=Ir[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in gp)return dc[e]=n[a];return e}var _p=Qa("animationend"),vp=Qa("animationiteration"),xp=Qa("animationstart"),sx=Qa("transitionrun"),ox=Qa("transitionstart"),lx=Qa("transitioncancel"),Sp=Qa("transitionend"),yp=new Map,Mp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function hi(e,n){yp.set(e,n),Rt(n,[e])}var Jn=[],Hr=0,pc=0;function hl(){for(var e=Hr,n=pc=Hr=0;n<e;){var a=Jn[n];Jn[n++]=null;var o=Jn[n];Jn[n++]=null;var c=Jn[n];Jn[n++]=null;var h=Jn[n];if(Jn[n++]=null,o!==null&&c!==null){var M=o.pending;M===null?c.next=c:(c.next=M.next,M.next=c),o.pending=c}h!==0&&Ep(a,c,h)}}function dl(e,n,a,o){Jn[Hr++]=e,Jn[Hr++]=n,Jn[Hr++]=a,Jn[Hr++]=o,pc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function mc(e,n,a,o){return dl(e,n,a,o),pl(e)}function pa(e,n){return dl(e,null,null,n),pl(e)}function Ep(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;c&&n!==null&&e.tag===3&&(h=e.stateNode,c=31-Zt(a),h=h.hiddenUpdates,e=h[c],e===null?h[c]=[n]:e.push(n),n.lane=a|536870912)}function pl(e){if(50<To)throw To=0,Mf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Gr={},Tp=new WeakMap;function $n(e,n){if(typeof e=="object"&&e!==null){var a=Tp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:rt(n)},Tp.set(e,n),n)}return{value:e,source:n,stack:rt(n)}}var Vr=[],kr=0,ml=null,gl=0,ti=[],ei=0,Ja=null,Fi=1,Ii="";function $a(e,n){Vr[kr++]=gl,Vr[kr++]=ml,ml=e,gl=n}function bp(e,n,a){ti[ei++]=Fi,ti[ei++]=Ii,ti[ei++]=Ja,Ja=e;var o=Fi;e=Ii;var c=32-Zt(o)-1;o&=~(1<<c),a+=1;var h=32-Zt(n)+c;if(30<h){var M=c-c%5;h=(o&(1<<M)-1).toString(32),o>>=M,c-=M,Fi=1<<32-Zt(n)+c|a<<c|o,Ii=h+e}else Fi=1<<h|a<<c|o,Ii=e}function gc(e){e.return!==null&&($a(e,1),bp(e,1,0))}function _c(e){for(;e===ml;)ml=Vr[--kr],Vr[kr]=null,gl=Vr[--kr],Vr[kr]=null;for(;e===Ja;)Ja=ti[--ei],ti[ei]=null,Ii=ti[--ei],ti[ei]=null,Fi=ti[--ei],ti[ei]=null}var Nn=null,Sn=null,Ae=!1,di=null,Ti=!1,vc=Error(r(519));function tr(e){var n=Error(r(418,""));throw eo($n(n,e)),vc}function Ap(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[rn]=e,n[sn]=o,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)ye(Ao[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Se(n);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Or(n,o.value,o.defaultValue,o.children),Se(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Pg(n.textContent,a)?(o.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),o.onScroll!=null&&ye("scroll",n),o.onScrollEnd!=null&&ye("scrollend",n),o.onClick!=null&&(n.onclick=jl),n=!0):n=!1,n||tr(e)}function Rp(e){for(Nn=e.return;Nn;)switch(Nn.tag){case 3:case 27:Ti=!0;return;case 5:case 13:Ti=!1;return;default:Nn=Nn.return}}function $s(e){if(e!==Nn)return!1;if(!Ae)return Rp(e),Ae=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||If(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&Sn&&tr(e),Rp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Sn=mi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Sn=null}}else Sn=Nn?mi(e.stateNode.nextSibling):null;return!0}function to(){Sn=Nn=null,Ae=!1}function eo(e){di===null?di=[e]:di.push(e)}var no=Error(r(460)),Cp=Error(r(474)),xc={then:function(){}};function wp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _l(){}function Dp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(_l,_l),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===no?Error(r(483)):e;default:if(typeof n.status=="string")n.then(_l,_l);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===no?Error(r(483)):e}throw io=n,no}}var io=null;function Up(){if(io===null)throw Error(r(459));var e=io;return io=null,e}var Xr=null,ao=0;function vl(e){var n=ao;return ao+=1,Xr===null&&(Xr=[]),Dp(Xr,e,n)}function ro(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function xl(e,n){throw n.$$typeof===u?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Lp(e){var n=e._init;return n(e._payload)}function Np(e){function n(K,G){if(e){var J=K.deletions;J===null?(K.deletions=[G],K.flags|=16):J.push(G)}}function a(K,G){if(!e)return null;for(;G!==null;)n(K,G),G=G.sibling;return null}function o(K){for(var G=new Map;K!==null;)K.key!==null?G.set(K.key,K):G.set(K.index,K),K=K.sibling;return G}function c(K,G){return K=Aa(K,G),K.index=0,K.sibling=null,K}function h(K,G,J){return K.index=J,e?(J=K.alternate,J!==null?(J=J.index,J<G?(K.flags|=33554434,G):J):(K.flags|=33554434,G)):(K.flags|=1048576,G)}function M(K){return e&&K.alternate===null&&(K.flags|=33554434),K}function A(K,G,J,mt){return G===null||G.tag!==6?(G=pf(J,K.mode,mt),G.return=K,G):(G=c(G,J),G.return=K,G)}function P(K,G,J,mt){var Gt=J.type;return Gt===p?lt(K,G,J.props.children,mt,J.key):G!==null&&(G.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===O&&Lp(Gt)===G.type)?(G=c(G,J.props),ro(G,J),G.return=K,G):(G=Bl(J.type,J.key,J.props,null,K.mode,mt),ro(G,J),G.return=K,G)}function V(K,G,J,mt){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=mf(J,K.mode,mt),G.return=K,G):(G=c(G,J.children||[]),G.return=K,G)}function lt(K,G,J,mt,Gt){return G===null||G.tag!==7?(G=cr(J,K.mode,mt,Gt),G.return=K,G):(G=c(G,J),G.return=K,G)}function vt(K,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=pf(""+G,K.mode,J),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case f:return J=Bl(G.type,G.key,G.props,null,K.mode,J),ro(J,G),J.return=K,J;case d:return G=mf(G,K.mode,J),G.return=K,G;case O:var mt=G._init;return G=mt(G._payload),vt(K,G,J)}if(Ct(G)||H(G))return G=cr(G,K.mode,J,null),G.return=K,G;if(typeof G.then=="function")return vt(K,vl(G),J);if(G.$$typeof===y)return vt(K,Ol(K,G),J);xl(K,G)}return null}function nt(K,G,J,mt){var Gt=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Gt!==null?null:A(K,G,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case f:return J.key===Gt?P(K,G,J,mt):null;case d:return J.key===Gt?V(K,G,J,mt):null;case O:return Gt=J._init,J=Gt(J._payload),nt(K,G,J,mt)}if(Ct(J)||H(J))return Gt!==null?null:lt(K,G,J,mt,null);if(typeof J.then=="function")return nt(K,G,vl(J),mt);if(J.$$typeof===y)return nt(K,G,Ol(K,J),mt);xl(K,J)}return null}function ot(K,G,J,mt,Gt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get(J)||null,A(G,K,""+mt,Gt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case f:return K=K.get(mt.key===null?J:mt.key)||null,P(G,K,mt,Gt);case d:return K=K.get(mt.key===null?J:mt.key)||null,V(G,K,mt,Gt);case O:var pe=mt._init;return mt=pe(mt._payload),ot(K,G,J,mt,Gt)}if(Ct(mt)||H(mt))return K=K.get(J)||null,lt(G,K,mt,Gt,null);if(typeof mt.then=="function")return ot(K,G,J,vl(mt),Gt);if(mt.$$typeof===y)return ot(K,G,J,Ol(G,mt),Gt);xl(G,mt)}return null}function Xt(K,G,J,mt){for(var Gt=null,pe=null,Yt=G,$t=G=0,gn=null;Yt!==null&&$t<J.length;$t++){Yt.index>$t?(gn=Yt,Yt=null):gn=Yt.sibling;var Re=nt(K,Yt,J[$t],mt);if(Re===null){Yt===null&&(Yt=gn);break}e&&Yt&&Re.alternate===null&&n(K,Yt),G=h(Re,G,$t),pe===null?Gt=Re:pe.sibling=Re,pe=Re,Yt=gn}if($t===J.length)return a(K,Yt),Ae&&$a(K,$t),Gt;if(Yt===null){for(;$t<J.length;$t++)Yt=vt(K,J[$t],mt),Yt!==null&&(G=h(Yt,G,$t),pe===null?Gt=Yt:pe.sibling=Yt,pe=Yt);return Ae&&$a(K,$t),Gt}for(Yt=o(Yt);$t<J.length;$t++)gn=ot(Yt,K,$t,J[$t],mt),gn!==null&&(e&&gn.alternate!==null&&Yt.delete(gn.key===null?$t:gn.key),G=h(gn,G,$t),pe===null?Gt=gn:pe.sibling=gn,pe=gn);return e&&Yt.forEach(function(Na){return n(K,Na)}),Ae&&$a(K,$t),Gt}function ae(K,G,J,mt){if(J==null)throw Error(r(151));for(var Gt=null,pe=null,Yt=G,$t=G=0,gn=null,Re=J.next();Yt!==null&&!Re.done;$t++,Re=J.next()){Yt.index>$t?(gn=Yt,Yt=null):gn=Yt.sibling;var Na=nt(K,Yt,Re.value,mt);if(Na===null){Yt===null&&(Yt=gn);break}e&&Yt&&Na.alternate===null&&n(K,Yt),G=h(Na,G,$t),pe===null?Gt=Na:pe.sibling=Na,pe=Na,Yt=gn}if(Re.done)return a(K,Yt),Ae&&$a(K,$t),Gt;if(Yt===null){for(;!Re.done;$t++,Re=J.next())Re=vt(K,Re.value,mt),Re!==null&&(G=h(Re,G,$t),pe===null?Gt=Re:pe.sibling=Re,pe=Re);return Ae&&$a(K,$t),Gt}for(Yt=o(Yt);!Re.done;$t++,Re=J.next())Re=ot(Yt,K,$t,Re.value,mt),Re!==null&&(e&&Re.alternate!==null&&Yt.delete(Re.key===null?$t:Re.key),G=h(Re,G,$t),pe===null?Gt=Re:pe.sibling=Re,pe=Re);return e&&Yt.forEach(function(MS){return n(K,MS)}),Ae&&$a(K,$t),Gt}function Ze(K,G,J,mt){if(typeof J=="object"&&J!==null&&J.type===p&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case f:t:{for(var Gt=J.key;G!==null;){if(G.key===Gt){if(Gt=J.type,Gt===p){if(G.tag===7){a(K,G.sibling),mt=c(G,J.props.children),mt.return=K,K=mt;break t}}else if(G.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===O&&Lp(Gt)===G.type){a(K,G.sibling),mt=c(G,J.props),ro(mt,J),mt.return=K,K=mt;break t}a(K,G);break}else n(K,G);G=G.sibling}J.type===p?(mt=cr(J.props.children,K.mode,mt,J.key),mt.return=K,K=mt):(mt=Bl(J.type,J.key,J.props,null,K.mode,mt),ro(mt,J),mt.return=K,K=mt)}return M(K);case d:t:{for(Gt=J.key;G!==null;){if(G.key===Gt)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){a(K,G.sibling),mt=c(G,J.children||[]),mt.return=K,K=mt;break t}else{a(K,G);break}else n(K,G);G=G.sibling}mt=mf(J,K.mode,mt),mt.return=K,K=mt}return M(K);case O:return Gt=J._init,J=Gt(J._payload),Ze(K,G,J,mt)}if(Ct(J))return Xt(K,G,J,mt);if(H(J)){if(Gt=H(J),typeof Gt!="function")throw Error(r(150));return J=Gt.call(J),ae(K,G,J,mt)}if(typeof J.then=="function")return Ze(K,G,vl(J),mt);if(J.$$typeof===y)return Ze(K,G,Ol(K,J),mt);xl(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(a(K,G.sibling),mt=c(G,J),mt.return=K,K=mt):(a(K,G),mt=pf(J,K.mode,mt),mt.return=K,K=mt),M(K)):a(K,G)}return function(K,G,J,mt){try{ao=0;var Gt=Ze(K,G,J,mt);return Xr=null,Gt}catch(Yt){if(Yt===no)throw Yt;var pe=ri(29,Yt,null,K.mode);return pe.lanes=mt,pe.return=K,pe}finally{}}}var er=Np(!0),Op=Np(!1),Wr=wt(null),Sl=wt(0);function Pp(e,n){e=Ki,Bt(Sl,e),Bt(Wr,n),Ki=e|n.baseLanes}function Sc(){Bt(Sl,Ki),Bt(Wr,Wr.current)}function yc(){Ki=Sl.current,Jt(Wr),Jt(Sl)}var ni=wt(null),bi=null;function ma(e){var n=e.alternate;Bt(ln,ln.current&1),Bt(ni,e),bi===null&&(n===null||Wr.current!==null||n.memoizedState!==null)&&(bi=e)}function zp(e){if(e.tag===22){if(Bt(ln,ln.current),Bt(ni,e),bi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(bi=e)}}else ga()}function ga(){Bt(ln,ln.current),Bt(ni,ni.current)}function Hi(e){Jt(ni),bi===e&&(bi=null),Jt(ln)}var ln=wt(0);function yl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ux=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},cx=s.unstable_scheduleCallback,fx=s.unstable_NormalPriority,un={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mc(){return{controller:new ux,data:new Map,refCount:0}}function so(e){e.refCount--,e.refCount===0&&cx(fx,function(){e.controller.abort()})}var oo=null,Ec=0,qr=0,Yr=null;function hx(e,n){if(oo===null){var a=oo=[];Ec=0,qr=Df(),Yr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ec++,n.then(Bp,Bp),n}function Bp(){if(--Ec===0&&oo!==null){Yr!==null&&(Yr.status="fulfilled");var e=oo;oo=null,qr=0,Yr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function dx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Fp=w.S;w.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&hx(e,n),Fp!==null&&Fp(e,n)};var nr=wt(null);function Tc(){var e=nr.current;return e!==null?e:Ie.pooledCache}function Ml(e,n){n===null?Bt(nr,nr.current):Bt(nr,n.pool)}function Ip(){var e=Tc();return e===null?null:{parent:un._currentValue,pool:e}}var _a=0,he=null,Oe=null,$e=null,El=!1,jr=!1,ir=!1,Tl=0,lo=0,Zr=null,px=0;function Je(){throw Error(r(321))}function bc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Ac(e,n,a,o,c,h){return _a=h,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,w.H=e===null||e.memoizedState===null?ar:va,ir=!1,h=a(o,c),ir=!1,jr&&(h=Gp(n,a,o,c)),Hp(e),h}function Hp(e){w.H=Ai;var n=Oe!==null&&Oe.next!==null;if(_a=0,$e=Oe=he=null,El=!1,lo=0,Zr=null,n)throw Error(r(300));e===null||pn||(e=e.dependencies,e!==null&&Nl(e)&&(pn=!0))}function Gp(e,n,a,o){he=e;var c=0;do{if(jr&&(Zr=null),lo=0,jr=!1,25<=c)throw Error(r(301));if(c+=1,$e=Oe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}w.H=rr,h=n(a,o)}while(jr);return h}function mx(){var e=w.H,n=e.useState()[0];return n=typeof n.then=="function"?uo(n):n,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(he.flags|=1024),n}function Rc(){var e=Tl!==0;return Tl=0,e}function Cc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function wc(e){if(El){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}El=!1}_a=0,$e=Oe=he=null,jr=!1,lo=Tl=0,Zr=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?he.memoizedState=$e=e:$e=$e.next=e,$e}function tn(){if(Oe===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=$e===null?he.memoizedState:$e.next;if(n!==null)$e=n,Oe=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},$e===null?he.memoizedState=$e=e:$e=$e.next=e}return $e}var bl;bl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function uo(e){var n=lo;return lo+=1,Zr===null&&(Zr=[]),e=Dp(Zr,e,n),n=he,($e===null?n.memoizedState:$e.next)===null&&(n=n.alternate,w.H=n===null||n.memoizedState===null?ar:va),e}function Al(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return uo(e);if(e.$$typeof===y)return Tn(e)}throw Error(r(438,String(e)))}function Dc(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bl(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function Gi(e,n){return typeof n=="function"?n(e):n}function Rl(e){var n=tn();return Uc(n,Oe,e)}function Uc(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}n.baseQueue=c=h,o.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{n=c.next;var A=M=null,P=null,V=n,lt=!1;do{var vt=V.lane&-536870913;if(vt!==V.lane?(Me&vt)===vt:(_a&vt)===vt){var nt=V.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),vt===qr&&(lt=!0);else if((_a&nt)===nt){V=V.next,nt===qr&&(lt=!0);continue}else vt={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},P===null?(A=P=vt,M=h):P=P.next=vt,he.lanes|=nt,Ra|=nt;vt=V.action,ir&&a(h,vt),h=V.hasEagerState?V.eagerState:a(h,vt)}else nt={lane:vt,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},P===null?(A=P=nt,M=h):P=P.next=nt,he.lanes|=vt,Ra|=vt;V=V.next}while(V!==null&&V!==n);if(P===null?M=h:P.next=A,!Wn(h,e.memoizedState)&&(pn=!0,lt&&(a=Yr,a!==null)))throw a;e.memoizedState=h,e.baseState=M,e.baseQueue=P,o.lastRenderedState=h}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Lc(e){var n=tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var M=c=c.next;do h=e(h,M.action),M=M.next;while(M!==c);Wn(h,n.memoizedState)||(pn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Vp(e,n,a){var o=he,c=tn(),h=Ae;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Wn((Oe||c).memoizedState,a);if(M&&(c.memoizedState=a,pn=!0),c=c.queue,Pc(Wp.bind(null,o,c,e),[e]),c.getSnapshot!==n||M||$e!==null&&$e.memoizedState.tag&1){if(o.flags|=2048,Kr(9,Xp.bind(null,o,c,a,n),{destroy:void 0},null),Ie===null)throw Error(r(349));h||(_a&60)!==0||kp(o,n,a)}return a}function kp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=bl(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Xp(e,n,a,o){n.value=a,n.getSnapshot=o,qp(n)&&Yp(e)}function Wp(e,n,a){return a(function(){qp(n)&&Yp(e)})}function qp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Yp(e){var n=pa(e,2);n!==null&&On(n,e,2)}function Nc(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),ir){se(!0);try{a()}finally{se(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},n}function jp(e,n,a,o){return e.baseState=a,Uc(e,Oe,typeof o=="function"?o:Gi)}function gx(e,n,a,o,c){if(Dl(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};w.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Zp(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Zp(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var h=w.T,M={};w.T=M;try{var A=a(c,o),P=w.S;P!==null&&P(M,A),Kp(e,n,A)}catch(V){Oc(e,n,V)}finally{w.T=h}}else try{h=a(c,o),Kp(e,n,h)}catch(V){Oc(e,n,V)}}function Kp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Qp(e,n,o)},function(o){return Oc(e,n,o)}):Qp(e,n,a)}function Qp(e,n,a){n.status="fulfilled",n.value=a,Jp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Zp(e,a)))}function Oc(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Jp(n),n=n.next;while(n!==o)}e.action=null}function Jp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function $p(e,n){return n}function tm(e,n){if(Ae){var a=Ie.formState;if(a!==null){t:{var o=he;if(Ae){if(Sn){e:{for(var c=Sn,h=Ti;c.nodeType!==8;){if(!h){c=null;break e}if(c=mi(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){Sn=mi(c.nextSibling),o=c.data==="F!";break t}}tr(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$p,lastRenderedState:n},a.queue=o,a=vm.bind(null,he,o),o.dispatch=a,o=Nc(!1),h=Hc.bind(null,he,!1,o.queue),o=In(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=gx.bind(null,he,c,h,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function em(e){var n=tn();return nm(n,Oe,e)}function nm(e,n,a){n=Uc(e,n,$p)[0],e=Rl(Gi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?uo(n):n;var o=tn(),c=o.queue,h=c.dispatch;return a!==o.memoizedState&&(he.flags|=2048,Kr(9,_x.bind(null,c,a),{destroy:void 0},null)),[n,h,e]}function _x(e,n){e.action=n}function im(e){var n=tn(),a=Oe;if(a!==null)return nm(n,a,e);tn(),n=n.memoizedState,a=tn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Kr(e,n,a,o){return e={tag:e,create:n,inst:a,deps:o,next:null},n=he.updateQueue,n===null&&(n=bl(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function am(){return tn().memoizedState}function Cl(e,n,a,o){var c=In();he.flags|=e,c.memoizedState=Kr(1|n,a,{destroy:void 0},o===void 0?null:o)}function wl(e,n,a,o){var c=tn();o=o===void 0?null:o;var h=c.memoizedState.inst;Oe!==null&&o!==null&&bc(o,Oe.memoizedState.deps)?c.memoizedState=Kr(n,a,h,o):(he.flags|=e,c.memoizedState=Kr(1|n,a,h,o))}function rm(e,n){Cl(8390656,8,e,n)}function Pc(e,n){wl(2048,8,e,n)}function sm(e,n){return wl(4,2,e,n)}function om(e,n){return wl(4,4,e,n)}function lm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function um(e,n,a){a=a!=null?a.concat([e]):null,wl(4,4,lm.bind(null,n,e),a)}function zc(){}function cm(e,n){var a=tn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&bc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function fm(e,n){var a=tn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&bc(n,o[1]))return o[0];if(o=e(),ir){se(!0);try{e()}finally{se(!1)}}return a.memoizedState=[o,n],o}function Bc(e,n,a){return a===void 0||(_a&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=dg(),he.lanes|=e,Ra|=e,a)}function hm(e,n,a,o){return Wn(a,n)?a:Wr.current!==null?(e=Bc(e,a,o),Wn(e,n)||(pn=!0),e):(_a&42)===0?(pn=!0,e.memoizedState=a):(e=dg(),he.lanes|=e,Ra|=e,n)}function dm(e,n,a,o,c){var h=q.p;q.p=h!==0&&8>h?h:8;var M=w.T,A={};w.T=A,Hc(e,!1,n,a);try{var P=c(),V=w.S;if(V!==null&&V(A,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var lt=dx(P,o);co(e,n,lt,Zn(e))}else co(e,n,o,Zn(e))}catch(vt){co(e,n,{then:function(){},status:"rejected",reason:vt},Zn())}finally{q.p=h,w.T=M}}function vx(){}function Fc(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=pm(e).queue;dm(e,c,n,pt,a===null?vx:function(){return mm(e),a(o)})}function pm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:pt,baseState:pt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:pt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function mm(e){var n=pm(e).next.queue;co(e,n,{},Zn())}function Ic(){return Tn(Uo)}function gm(){return tn().memoizedState}function _m(){return tn().memoizedState}function xx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();e=ya(a);var o=Ma(n,e,a);o!==null&&(On(o,n,a),po(o,n,a)),n={cache:Mc()},e.payload=n;return}n=n.return}}function Sx(e,n,a){var o=Zn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(e)?xm(n,a):(a=mc(e,n,a,o),a!==null&&(On(a,e,o),Sm(a,n,o)))}function vm(e,n,a){var o=Zn();co(e,n,a,o)}function co(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(e))xm(n,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,A=h(M,a);if(c.hasEagerState=!0,c.eagerState=A,Wn(A,M))return dl(e,n,c,0),Ie===null&&hl(),!1}catch{}finally{}if(a=mc(e,n,c,o),a!==null)return On(a,e,o),Sm(a,n,o),!0}return!1}function Hc(e,n,a,o){if(o={lane:2,revertLane:Df(),action:o,hasEagerState:!1,eagerState:null,next:null},Dl(e)){if(n)throw Error(r(479))}else n=mc(e,a,o,2),n!==null&&On(n,e,2)}function Dl(e){var n=e.alternate;return e===he||n!==null&&n===he}function xm(e,n){jr=El=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Sm(e,n,a){if((a&4194176)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ei(e,a)}}var Ai={readContext:Tn,use:Al,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je};Ai.useCacheRefresh=Je,Ai.useMemoCache=Je,Ai.useHostTransitionStatus=Je,Ai.useFormState=Je,Ai.useActionState=Je,Ai.useOptimistic=Je;var ar={readContext:Tn,use:Al,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:rm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Cl(4194308,4,lm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Cl(4194308,4,e,n)},useInsertionEffect:function(e,n){Cl(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var o=e();if(ir){se(!0);try{e()}finally{se(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=In();if(a!==void 0){var c=a(n);if(ir){se(!0);try{a(n)}finally{se(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Sx.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=Nc(e);var n=e.queue,a=vm.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:zc,useDeferredValue:function(e,n){var a=In();return Bc(a,e,n)},useTransition:function(){var e=Nc(!1);return e=dm.bind(null,he,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=he,c=In();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ie===null)throw Error(r(349));(Me&60)!==0||kp(o,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,rm(Wp.bind(null,o,h,e),[e]),o.flags|=2048,Kr(9,Xp.bind(null,o,h,a,n),{destroy:void 0},null),a},useId:function(){var e=In(),n=Ie.identifierPrefix;if(Ae){var a=Ii,o=Fi;a=(o&~(1<<32-Zt(o)-1)).toString(32)+a,n=":"+n+"R"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=px++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return In().memoizedState=xx.bind(null,he)}};ar.useMemoCache=Dc,ar.useHostTransitionStatus=Ic,ar.useFormState=tm,ar.useActionState=tm,ar.useOptimistic=function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Hc.bind(null,he,!0,a),a.dispatch=n,[e,n]};var va={readContext:Tn,use:Al,useCallback:cm,useContext:Tn,useEffect:Pc,useImperativeHandle:um,useInsertionEffect:sm,useLayoutEffect:om,useMemo:fm,useReducer:Rl,useRef:am,useState:function(){return Rl(Gi)},useDebugValue:zc,useDeferredValue:function(e,n){var a=tn();return hm(a,Oe.memoizedState,e,n)},useTransition:function(){var e=Rl(Gi)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:Vp,useId:gm};va.useCacheRefresh=_m,va.useMemoCache=Dc,va.useHostTransitionStatus=Ic,va.useFormState=em,va.useActionState=em,va.useOptimistic=function(e,n){var a=tn();return jp(a,Oe,e,n)};var rr={readContext:Tn,use:Al,useCallback:cm,useContext:Tn,useEffect:Pc,useImperativeHandle:um,useInsertionEffect:sm,useLayoutEffect:om,useMemo:fm,useReducer:Lc,useRef:am,useState:function(){return Lc(Gi)},useDebugValue:zc,useDeferredValue:function(e,n){var a=tn();return Oe===null?Bc(a,e,n):hm(a,Oe.memoizedState,e,n)},useTransition:function(){var e=Lc(Gi)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:Vp,useId:gm};rr.useCacheRefresh=_m,rr.useMemoCache=Dc,rr.useHostTransitionStatus=Ic,rr.useFormState=im,rr.useActionState=im,rr.useOptimistic=function(e,n){var a=tn();return Oe!==null?jp(a,Oe,e,n):(a.baseState=e,[e,a.queue.dispatch])};function Gc(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:b({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vc={isMounted:function(e){return(e=e._reactInternals)?j(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Zn(),c=ya(o);c.payload=n,a!=null&&(c.callback=a),n=Ma(e,c,o),n!==null&&(On(n,e,o),po(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Zn(),c=ya(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ma(e,c,o),n!==null&&(On(n,e,o),po(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Zn(),o=ya(a);o.tag=2,n!=null&&(o.callback=n),n=Ma(e,o,a),n!==null&&(On(n,e,a),po(n,e,a))}};function ym(e,n,a,o,c,h,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!Qs(a,o)||!Qs(c,h):!0}function Mm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Vc.enqueueReplaceState(n,n.state,null)}function sr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=b({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Ul=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Em(e){Ul(e)}function Tm(e){console.error(e)}function bm(e){Ul(e)}function Ll(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Am(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function kc(e,n,a){return a=ya(a),a.tag=3,a.payload={element:null},a.callback=function(){Ll(e,n)},a}function Rm(e){return e=ya(e),e.tag=3,e}function Cm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;e.payload=function(){return c(h)},e.callback=function(){Am(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Am(n,a,o),typeof c!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function yx(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ho(n,a,c,!0),a=ni.current,a!==null){switch(a.tag){case 13:return bi===null?bf():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===xc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Rf(e,o,c)),!1;case 22:return a.flags|=65536,o===xc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Rf(e,o,c)),!1}throw Error(r(435,a.tag))}return Rf(e,o,c),bf(),!1}if(Ae)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==vc&&(e=Error(r(422),{cause:o}),eo($n(e,a)))):(o!==vc&&(n=Error(r(423),{cause:o}),eo($n(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=$n(o,a),c=kc(e.stateNode,o,c),rf(e,c),je!==4&&(je=2)),!1;var h=Error(r(520),{cause:o});if(h=$n(h,a),Mo===null?Mo=[h]:Mo.push(h),je!==4&&(je=2),n===null)return!0;o=$n(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=kc(a.stateNode,o,e),rf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ca===null||!Ca.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Rm(c),Cm(c,e,a,o),rf(a,c),!1}a=a.return}while(a!==null);return!1}var wm=Error(r(461)),pn=!1;function yn(e,n,a,o){n.child=e===null?Op(n,null,a,o):er(n,e.child,a,o)}function Dm(e,n,a,o,c){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var A in o)A!=="ref"&&(M[A]=o[A])}else M=o;return lr(n),o=Ac(e,n,a,M,h,c),A=Rc(),e!==null&&!pn?(Cc(e,n,c),Vi(e,n,c)):(Ae&&A&&gc(n),n.flags|=1,yn(e,n,o,c),n.child)}function Um(e,n,a,o,c){if(e===null){var h=a.type;return typeof h=="function"&&!df(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Lm(e,n,h,o,c)):(e=Bl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Jc(e,c)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:Qs,a(M,o)&&e.ref===n.ref)return Vi(e,n,c)}return n.flags|=1,e=Aa(h,o),e.ref=n.ref,e.return=n,n.child=e}function Lm(e,n,a,o,c){if(e!==null){var h=e.memoizedProps;if(Qs(h,o)&&e.ref===n.ref)if(pn=!1,n.pendingProps=o=h,Jc(e,c))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,Vi(e,n,c)}return Xc(e,n,a,o,c)}function Nm(e,n,a){var o=n.pendingProps,c=o.children,h=(n.stateNode._pendingVisibility&2)!==0,M=e!==null?e.memoizedState:null;if(fo(e,n),o.mode==="hidden"||h){if((n.flags&128)!==0){if(o=M!==null?M.baseLanes|a:a,e!==null){for(c=n.child=e.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return Om(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ml(n,M!==null?M.cachePool:null),M!==null?Pp(n,M):Sc(),zp(n);else return n.lanes=n.childLanes=536870912,Om(e,n,M!==null?M.baseLanes|a:a,a)}else M!==null?(Ml(n,M.cachePool),Pp(n,M),ga(),n.memoizedState=null):(e!==null&&Ml(n,null),Sc(),ga());return yn(e,n,c,a),n.child}function Om(e,n,a,o){var c=Tc();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Ml(n,null),Sc(),zp(n),e!==null&&ho(e,n,o,!0),null}function fo(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function Xc(e,n,a,o,c){return lr(n),a=Ac(e,n,a,o,void 0,c),o=Rc(),e!==null&&!pn?(Cc(e,n,c),Vi(e,n,c)):(Ae&&o&&gc(n),n.flags|=1,yn(e,n,a,c),n.child)}function Pm(e,n,a,o,c,h){return lr(n),n.updateQueue=null,a=Gp(n,o,a,c),Hp(e),o=Rc(),e!==null&&!pn?(Cc(e,n,h),Vi(e,n,h)):(Ae&&o&&gc(n),n.flags|=1,yn(e,n,a,h),n.child)}function zm(e,n,a,o,c){if(lr(n),n.stateNode===null){var h=Gr,M=a.contextType;typeof M=="object"&&M!==null&&(h=Tn(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Vc,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},nf(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?Tn(M):Gr,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Gc(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&Vc.enqueueReplaceState(h,h.state,null),go(n,o,h,c),mo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,P=sr(a,A);h.props=P;var V=h.context,lt=a.contextType;M=Gr,typeof lt=="object"&&lt!==null&&(M=Tn(lt));var vt=a.getDerivedStateFromProps;lt=typeof vt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,lt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||V!==M)&&Mm(n,h,o,M),Sa=!1;var nt=n.memoizedState;h.state=nt,go(n,o,h,c),mo(),V=n.memoizedState,A||nt!==V||Sa?(typeof vt=="function"&&(Gc(n,a,vt,o),V=n.memoizedState),(P=Sa||ym(n,a,P,o,nt,V,M))?(lt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=V),h.props=o,h.state=V,h.context=M,o=P):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,af(e,n),M=n.memoizedProps,lt=sr(a,M),h.props=lt,vt=n.pendingProps,nt=h.context,V=a.contextType,P=Gr,typeof V=="object"&&V!==null&&(P=Tn(V)),A=a.getDerivedStateFromProps,(V=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==vt||nt!==P)&&Mm(n,h,o,P),Sa=!1,nt=n.memoizedState,h.state=nt,go(n,o,h,c),mo();var ot=n.memoizedState;M!==vt||nt!==ot||Sa||e!==null&&e.dependencies!==null&&Nl(e.dependencies)?(typeof A=="function"&&(Gc(n,a,A,o),ot=n.memoizedState),(lt=Sa||ym(n,a,lt,o,nt,ot,P)||e!==null&&e.dependencies!==null&&Nl(e.dependencies))?(V||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ot,P),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ot,P)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),h.props=o,h.state=ot,h.context=P,o=lt):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,fo(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=er(n,e.child,null,c),n.child=er(n,null,a,c)):yn(e,n,a,c),n.memoizedState=h.state,e=n.child):e=Vi(e,n,c),e}function Bm(e,n,a,o){return to(),n.flags|=256,yn(e,n,a,o),n.child}var Wc={dehydrated:null,treeContext:null,retryLane:0};function qc(e){return{baseLanes:e,cachePool:Ip()}}function Yc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function Fm(e,n,a){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),M&&(c=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(c?ma(n):ga(),Ae){var A=Sn,P;if(P=A){t:{for(P=A,A=Ti;P.nodeType!==8;){if(!A){A=null;break t}if(P=mi(P.nextSibling),P===null){A=null;break t}}A=P}A!==null?(n.memoizedState={dehydrated:A,treeContext:Ja!==null?{id:Fi,overflow:Ii}:null,retryLane:536870912},P=ri(18,null,null,0),P.stateNode=A,P.return=n,n.child=P,Nn=n,Sn=null,P=!0):P=!1}P||tr(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return A.data==="$!"?n.lanes=16:n.lanes=536870912,null;Hi(n)}return A=o.children,o=o.fallback,c?(ga(),c=n.mode,A=Zc({mode:"hidden",children:A},c),o=cr(o,c,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,c=n.child,c.memoizedState=qc(a),c.childLanes=Yc(e,M,a),n.memoizedState=Wc,o):(ma(n),jc(n,A))}if(P=e.memoizedState,P!==null&&(A=P.dehydrated,A!==null)){if(h)n.flags&256?(ma(n),n.flags&=-257,n=Kc(e,n,a)):n.memoizedState!==null?(ga(),n.child=e.child,n.flags|=128,n=null):(ga(),c=o.fallback,A=n.mode,o=Zc({mode:"visible",children:o.children},A),c=cr(c,A,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,er(n,e.child,null,a),o=n.child,o.memoizedState=qc(a),o.childLanes=Yc(e,M,a),n.memoizedState=Wc,n=c);else if(ma(n),A.data==="$!"){if(M=A.nextSibling&&A.nextSibling.dataset,M)var V=M.dgst;M=V,o=Error(r(419)),o.stack="",o.digest=M,eo({value:o,source:null,stack:null}),n=Kc(e,n,a)}else if(pn||ho(e,n,a,!1),M=(a&e.childLanes)!==0,pn||M){if(M=Ie,M!==null){if(o=a&-a,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane)throw P.retryLane=o,pa(e,o),On(M,e,o),wm}A.data==="$?"||bf(),n=Kc(e,n,a)}else A.data==="$?"?(n.flags|=128,n.child=e.child,n=zx.bind(null,e),A._reactRetry=n,n=null):(e=P.treeContext,Sn=mi(A.nextSibling),Nn=n,Ae=!0,di=null,Ti=!1,e!==null&&(ti[ei++]=Fi,ti[ei++]=Ii,ti[ei++]=Ja,Fi=e.id,Ii=e.overflow,Ja=n),n=jc(n,o.children),n.flags|=4096);return n}return c?(ga(),c=o.fallback,A=n.mode,P=e.child,V=P.sibling,o=Aa(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&31457280,V!==null?c=Aa(V,c):(c=cr(c,A,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,A=e.child.memoizedState,A===null?A=qc(a):(P=A.cachePool,P!==null?(V=un._currentValue,P=P.parent!==V?{parent:V,pool:V}:P):P=Ip(),A={baseLanes:A.baseLanes|a,cachePool:P}),c.memoizedState=A,c.childLanes=Yc(e,M,a),n.memoizedState=Wc,o):(ma(n),a=e.child,e=a.sibling,a=Aa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function jc(e,n){return n=Zc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Zc(e,n){return cg(e,n,0,null)}function Kc(e,n,a){return er(n,e.child,null,a),e=jc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Im(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),tf(e.return,n,a)}function Qc(e,n,a,o,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=c)}function Hm(e,n,a){var o=n.pendingProps,c=o.revealOrder,h=o.tail;if(yn(e,n,o.children,a),o=ln.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Im(e,a,n);else if(e.tag===19)Im(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Bt(ln,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&yl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Qc(n,!1,c,a,h);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&yl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Qc(n,!0,a,null,h);break;case"together":Qc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ho(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Aa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Aa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Jc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Nl(e)))}function Mx(e,n,a){switch(n.tag){case 3:vn(n,n.stateNode.containerInfo),xa(n,un,e.memoizedState.cache),to();break;case 27:case 5:de(n);break;case 4:vn(n,n.stateNode.containerInfo);break;case 10:xa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Fm(e,n,a):(ma(n),e=Vi(e,n,a),e!==null?e.sibling:null);ma(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ho(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Hm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Bt(ln,ln.current),o)break;return null;case 22:case 23:return n.lanes=0,Nm(e,n,a);case 24:xa(n,un,e.memoizedState.cache)}return Vi(e,n,a)}function Gm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!Jc(e,a)&&(n.flags&128)===0)return pn=!1,Mx(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,Ae&&(n.flags&1048576)!==0&&bp(n,gl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")df(o)?(e=sr(o,e),n.tag=1,n=zm(null,n,o,e,a)):(n.tag=0,n=Xc(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===E){n.tag=11,n=Dm(null,n,o,e,a);break t}else if(c===g){n.tag=14,n=Um(null,n,o,e,a);break t}}throw n=Z(o)||o,Error(r(306,n,""))}}return n;case 0:return Xc(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=sr(o,n.pendingProps),zm(e,n,o,c,a);case 3:t:{if(vn(n,n.stateNode.containerInfo),e===null)throw Error(r(387));var h=n.pendingProps;c=n.memoizedState,o=c.element,af(e,n),go(n,h,null,a);var M=n.memoizedState;if(h=M.cache,xa(n,un,h),h!==c.cache&&ef(n,[un],a,!0),mo(),h=M.element,c.isDehydrated)if(c={element:h,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Bm(e,n,h,a);break t}else if(h!==o){o=$n(Error(r(424)),n),eo(o),n=Bm(e,n,h,a);break t}else for(Sn=mi(n.stateNode.containerInfo.firstChild),Nn=n,Ae=!0,di=null,Ti=!0,a=Op(n,null,h,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(to(),h===o){n=Vi(e,n,a);break t}yn(e,n,h,a)}n=n.child}return n;case 26:return fo(e,n),e===null?(a=Xg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=Zl(re.current).createElement(a),o[rn]=n,o[sn]=e,Mn(o,a,e),Q(o),n.stateNode=o):n.memoizedState=Xg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return de(n),e===null&&Ae&&(o=n.stateNode=Gg(n.type,n.pendingProps,re.current),Nn=n,Ti=!0,Sn=mi(o.firstChild)),o=n.pendingProps.children,e!==null||Ae?yn(e,n,o,a):n.child=er(n,null,o,a),fo(e,n),n.child;case 5:return e===null&&Ae&&((c=o=Sn)&&(o=Jx(o,n.type,n.pendingProps,Ti),o!==null?(n.stateNode=o,Nn=n,Sn=mi(o.firstChild),Ti=!1,c=!0):c=!1),c||tr(n)),de(n),c=n.type,h=n.pendingProps,M=e!==null?e.memoizedProps:null,o=h.children,If(c,h)?o=null:M!==null&&If(c,M)&&(n.flags|=32),n.memoizedState!==null&&(c=Ac(e,n,mx,null,null,a),Uo._currentValue=c),fo(e,n),yn(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=Sn)&&(a=$x(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,Nn=n,Sn=null,e=!0):e=!1),e||tr(n)),null;case 13:return Fm(e,n,a);case 4:return vn(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=er(n,null,o,a):yn(e,n,o,a),n.child;case 11:return Dm(e,n,n.type,n.pendingProps,a);case 7:return yn(e,n,n.pendingProps,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,xa(n,n.type,o.value),yn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,lr(n),c=Tn(c),o=o(c),n.flags|=1,yn(e,n,o,a),n.child;case 14:return Um(e,n,n.type,n.pendingProps,a);case 15:return Lm(e,n,n.type,n.pendingProps,a);case 19:return Hm(e,n,a);case 22:return Nm(e,n,a);case 24:return lr(n),o=Tn(un),e===null?(c=Tc(),c===null&&(c=Ie,h=Mc(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:o,cache:c},nf(n),xa(n,un,c)):((e.lanes&a)!==0&&(af(e,n),go(n,null,null,a),mo()),c=e.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),xa(n,un,o)):(o=h.cache,xa(n,un,o),o!==c.cache&&ef(n,[un],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var $c=wt(null),or=null,ki=null;function xa(e,n,a){Bt($c,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=$c.current,Jt($c)}function tf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function ef(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var M=c.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=c;for(var P=0;P<n.length;P++)if(A.context===n[P]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),tf(h.return,a,e),o||(M=null);break t}h=A.next}}else if(c.tag===18){if(M=c.return,M===null)throw Error(r(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),tf(M,a,e),M=null}else M=c.child;if(M!==null)M.return=c;else for(M=c;M!==null;){if(M===e){M=null;break}if(c=M.sibling,c!==null){c.return=M.return,M=c;break}M=M.return}c=M}}function ho(e,n,a,o){e=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var M=c.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var A=c.type;Wn(c.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(c===z.current){if(M=c.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Uo):e=[Uo])}c=c.return}e!==null&&ef(n,e,a,o),n.flags|=262144}function Nl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lr(e){or=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return Vm(or,e)}function Ol(e,n){return or===null&&lr(e),Vm(e,n)}function Vm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(r(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var Sa=!1;function nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Xe&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=pl(e),Ep(e,null,a),n}return dl(e,o,n,a),pl(e)}function po(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ei(e,a)}}function rf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var sf=!1;function mo(){if(sf){var e=Yr;if(e!==null)throw e}}function go(e,n,a,o){sf=!1;var c=e.updateQueue;Sa=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var P=A,V=P.next;P.next=null,M===null?h=V:M.next=V,M=P;var lt=e.alternate;lt!==null&&(lt=lt.updateQueue,A=lt.lastBaseUpdate,A!==M&&(A===null?lt.firstBaseUpdate=V:A.next=V,lt.lastBaseUpdate=P))}if(h!==null){var vt=c.baseState;M=0,lt=V=P=null,A=h;do{var nt=A.lane&-536870913,ot=nt!==A.lane;if(ot?(Me&nt)===nt:(o&nt)===nt){nt!==0&&nt===qr&&(sf=!0),lt!==null&&(lt=lt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Xt=e,ae=A;nt=n;var Ze=a;switch(ae.tag){case 1:if(Xt=ae.payload,typeof Xt=="function"){vt=Xt.call(Ze,vt,nt);break t}vt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ae.payload,nt=typeof Xt=="function"?Xt.call(Ze,vt,nt):Xt,nt==null)break t;vt=b({},vt,nt);break t;case 2:Sa=!0}}nt=A.callback,nt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[nt]:ot.push(nt))}else ot={lane:nt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},lt===null?(V=lt=ot,P=vt):lt=lt.next=ot,M|=nt;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);lt===null&&(P=vt),c.baseState=P,c.firstBaseUpdate=V,c.lastBaseUpdate=lt,h===null&&(c.shared.lanes=0),Ra|=M,e.lanes=M,e.memoizedState=vt}}function km(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Xm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)km(a[e],n)}function _o(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==c)}}catch(A){Fe(n,n.return,A)}}function Ea(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&e)===e){var M=o.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,c=n;var P=a;try{A()}catch(V){Fe(c,P,V)}}}o=o.next}while(o!==h)}}catch(V){Fe(n,n.return,V)}}function Wm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Xm(n,a)}catch(o){Fe(e,e.return,o)}}}function qm(e,n,a){a.props=sr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function ur(e,n){try{var a=e.ref;if(a!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=o;break;default:c=o}typeof a=="function"?e.refCleanup=a(c):a.current=c}}catch(h){Fe(e,n,h)}}function qn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Fe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Fe(e,n,c)}else a.current=null}function Ym(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Fe(e,e.return,c)}}function jm(e,n,a){try{var o=e.stateNode;Yx(o,e.type,a,n),o[sn]=n}catch(c){Fe(e,e.return,c)}}function Zm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function of(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=jl));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(lf(e,n,a),e=e.sibling;e!==null;)lf(e,n,a),e=e.sibling}function Pl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Pl(e,n,a),e=e.sibling;e!==null;)Pl(e,n,a),e=e.sibling}var Wi=!1,Ye=!1,uf=!1,Km=typeof WeakSet=="function"?WeakSet:Set,mn=null,Qm=!1;function Ex(e,n){if(e=e.containerInfo,Bf=eu,e=pp(e),cc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var M=0,A=-1,P=-1,V=0,lt=0,vt=e,nt=null;e:for(;;){for(var ot;vt!==a||c!==0&&vt.nodeType!==3||(A=M+c),vt!==h||o!==0&&vt.nodeType!==3||(P=M+o),vt.nodeType===3&&(M+=vt.nodeValue.length),(ot=vt.firstChild)!==null;)nt=vt,vt=ot;for(;;){if(vt===e)break e;if(nt===a&&++V===c&&(A=M),nt===h&&++lt===o&&(P=M),(ot=vt.nextSibling)!==null)break;vt=nt,nt=vt.parentNode}vt=ot}a=A===-1||P===-1?null:{start:A,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ff={focusedElem:e,selectionRange:a},eu=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,c=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Xt=sr(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(Xt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Fe(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Vf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}return Xt=Qm,Qm=!1,Xt}function Jm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(e,a),o&4&&_o(5,a);break;case 1:if(Yi(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(A){Fe(a,a.return,A)}else{var c=sr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(A){Fe(a,a.return,A)}}o&64&&Wm(a),o&512&&ur(a,a.return);break;case 3:if(Yi(e,a),o&64&&(o=a.updateQueue,o!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Xm(o,e)}catch(A){Fe(a,a.return,A)}}break;case 26:Yi(e,a),o&512&&ur(a,a.return);break;case 27:case 5:Yi(e,a),n===null&&o&4&&Ym(a),o&512&&ur(a,a.return);break;case 12:Yi(e,a);break;case 13:Yi(e,a),o&4&&eg(e,a);break;case 22:if(c=a.memoizedState!==null||Wi,!c){n=n!==null&&n.memoizedState!==null||Ye;var h=Wi,M=Ye;Wi=c,(Ye=n)&&!M?Ta(e,a,(a.subtreeFlags&8772)!==0):Yi(e,a),Wi=h,Ye=M}o&512&&(a.memoizedProps.mode==="manual"?ur(a,a.return):qn(a,a.return));break;default:Yi(e,a)}}function $m(e){var n=e.alternate;n!==null&&(e.alternate=null,$m(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ks(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,Yn=!1;function qi(e,n,a){for(a=a.child;a!==null;)tg(e,n,a),a=a.sibling}function tg(e,n,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Qt,a)}catch{}switch(a.tag){case 26:Ye||qn(a,n),qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ye||qn(a,n);var o=en,c=Yn;for(en=a.stateNode,qi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);ks(a),en=o,Yn=c;break;case 5:Ye||qn(a,n);case 6:c=en;var h=Yn;if(en=null,qi(e,n,a),en=c,Yn=h,en!==null)if(Yn)try{e=en,o=a.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(M){Fe(a,n,M)}else try{en.removeChild(a.stateNode)}catch(M){Fe(a,n,M)}break;case 18:en!==null&&(Yn?(n=en,a=a.stateNode,n.nodeType===8?Gf(n.parentNode,a):n.nodeType===1&&Gf(n,a),Po(n)):Gf(en,a.stateNode));break;case 4:o=en,c=Yn,en=a.stateNode.containerInfo,Yn=!0,qi(e,n,a),en=o,Yn=c;break;case 0:case 11:case 14:case 15:Ye||Ea(2,a,n),Ye||Ea(4,a,n),qi(e,n,a);break;case 1:Ye||(qn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&qm(a,n,o)),qi(e,n,a);break;case 21:qi(e,n,a);break;case 22:Ye||qn(a,n),Ye=(o=Ye)||a.memoizedState!==null,qi(e,n,a),Ye=o;break;default:qi(e,n,a)}}function eg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Po(e)}catch(a){Fe(n,n.return,a)}}function Tx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Km),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Km),n;default:throw Error(r(435,e.tag))}}function cf(e,n){var a=Tx(e);n.forEach(function(o){var c=Bx.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function ii(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],h=e,M=n,A=M;t:for(;A!==null;){switch(A.tag){case 27:case 5:en=A.stateNode,Yn=!1;break t;case 3:en=A.stateNode.containerInfo,Yn=!0;break t;case 4:en=A.stateNode.containerInfo,Yn=!0;break t}A=A.return}if(en===null)throw Error(r(160));tg(h,M,c),en=null,Yn=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)ng(n,e),n=n.sibling}var pi=null;function ng(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ii(n,e),ai(e),o&4&&(Ea(3,e,e.return),_o(3,e),Ea(5,e,e.return));break;case 1:ii(n,e),ai(e),o&512&&(Ye||a===null||qn(a,a.return)),o&64&&Wi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=pi;if(ii(n,e),ai(e),o&512&&(Ye||a===null||qn(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[ja]||h[rn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),Mn(h,o,a),h[rn]=e,Q(h),o=h;break t;case"link":var M=Yg("link","href",c).get(o+(a.href||""));if(M){for(var A=0;A<M.length;A++)if(h=M[A],h.getAttribute("href")===(a.href==null?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(A,1);break e}}h=c.createElement(o),Mn(h,o,a),c.head.appendChild(h);break;case"meta":if(M=Yg("meta","content",c).get(o+(a.content||""))){for(A=0;A<M.length;A++)if(h=M[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(A,1);break e}}h=c.createElement(o),Mn(h,o,a),c.head.appendChild(h);break;default:throw Error(r(468,o))}h[rn]=e,Q(h),o=h}e.stateNode=o}else jg(c,e.type,e.stateNode);else e.stateNode=qg(c,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?jg(c,e.type,e.stateNode):qg(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&jm(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){c=e.stateNode,h=e.memoizedProps;try{for(var P=c.firstChild;P;){var V=P.nextSibling,lt=P.nodeName;P[ja]||lt==="HEAD"||lt==="BODY"||lt==="SCRIPT"||lt==="STYLE"||lt==="LINK"&&P.rel.toLowerCase()==="stylesheet"||c.removeChild(P),P=V}for(var vt=e.type,nt=c.attributes;nt.length;)c.removeAttributeNode(nt[0]);Mn(c,vt,h),c[rn]=e,c[sn]=h}catch(Xt){Fe(e,e.return,Xt)}}case 5:if(ii(n,e),ai(e),o&512&&(Ye||a===null||qn(a,a.return)),e.flags&32){c=e.stateNode;try{Bn(c,"")}catch(Xt){Fe(e,e.return,Xt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,jm(e,c,a!==null?a.memoizedProps:c)),o&1024&&(uf=!0);break;case 6:if(ii(n,e),ai(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Xt){Fe(e,e.return,Xt)}}break;case 3:if(Jl=null,c=pi,pi=Kl(n.containerInfo),ii(n,e),pi=c,ai(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Po(n.containerInfo)}catch(Xt){Fe(e,e.return,Xt)}uf&&(uf=!1,ig(e));break;case 4:o=pi,pi=Kl(e.stateNode.containerInfo),ii(n,e),ai(e),pi=o;break;case 12:ii(n,e),ai(e);break;case 13:ii(n,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xf=ct()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,cf(e,o)));break;case 22:if(o&512&&(Ye||a===null||qn(a,a.return)),P=e.memoizedState!==null,V=a!==null&&a.memoizedState!==null,lt=Wi,vt=Ye,Wi=lt||P,Ye=vt||V,ii(n,e),Ye=vt,Wi=lt,ai(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=P?n._visibility&-2:n._visibility|1,P&&(n=Wi||Ye,a===null||V||n||Qr(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){V=a=n;try{if(c=V.stateNode,P)h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{M=V.stateNode,A=V.memoizedProps.style;var ot=A!=null&&A.hasOwnProperty("display")?A.display:null;M.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Xt){Fe(V,V.return,Xt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=P?"":V.memoizedProps}catch(Xt){Fe(V,V.return,Xt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,cf(e,a))));break;case 19:ii(n,e),ai(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,cf(e,o)));break;case 21:break;default:ii(n,e),ai(e)}}function ai(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(Zm(a)){var o=a;break t}a=a.return}throw Error(r(160))}switch(o.tag){case 27:var c=o.stateNode,h=of(e);Pl(e,h,c);break;case 5:var M=o.stateNode;o.flags&32&&(Bn(M,""),o.flags&=-33);var A=of(e);Pl(e,A,M);break;case 3:case 4:var P=o.stateNode.containerInfo,V=of(e);lf(e,V,P);break;default:throw Error(r(161))}}}catch(lt){Fe(e,e.return,lt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ig(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ig(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Yi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Jm(e,n.alternate,n),n=n.sibling}function Qr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),Qr(n);break;case 1:qn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&qm(n,n.return,a),Qr(n);break;case 26:case 27:case 5:qn(n,n.return),Qr(n);break;case 22:qn(n,n.return),n.memoizedState===null&&Qr(n);break;default:Qr(n)}e=e.sibling}}function Ta(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:Ta(c,h,a),_o(4,h);break;case 1:if(Ta(c,h,a),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(V){Fe(o,o.return,V)}if(o=h,c=o.updateQueue,c!==null){var A=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)km(P[c],A)}catch(V){Fe(o,o.return,V)}}a&&M&64&&Wm(h),ur(h,h.return);break;case 26:case 27:case 5:Ta(c,h,a),a&&o===null&&M&4&&Ym(h),ur(h,h.return);break;case 12:Ta(c,h,a);break;case 13:Ta(c,h,a),a&&M&4&&eg(c,h);break;case 22:h.memoizedState===null&&Ta(c,h,a),ur(h,h.return);break;default:Ta(c,h,a)}n=n.sibling}}function ff(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&so(a))}function hf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e))}function ba(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ag(e,n,a,o),n=n.sibling}function ag(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:ba(e,n,a,o),c&2048&&_o(9,n);break;case 3:ba(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e)));break;case 12:if(c&2048){ba(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,M=h.id,A=h.onPostCommit;typeof A=="function"&&A(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Fe(n,n.return,P)}}else ba(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,n.memoizedState!==null?h._visibility&4?ba(e,n,a,o):vo(e,n):h._visibility&4?ba(e,n,a,o):(h._visibility|=4,Jr(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&ff(n.alternate,n);break;case 24:ba(e,n,a,o),c&2048&&hf(n.alternate,n);break;default:ba(e,n,a,o)}}function Jr(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,M=n,A=a,P=o,V=M.flags;switch(M.tag){case 0:case 11:case 15:Jr(h,M,A,P,c),_o(8,M);break;case 23:break;case 22:var lt=M.stateNode;M.memoizedState!==null?lt._visibility&4?Jr(h,M,A,P,c):vo(h,M):(lt._visibility|=4,Jr(h,M,A,P,c)),c&&V&2048&&ff(M.alternate,M);break;case 24:Jr(h,M,A,P,c),c&&V&2048&&hf(M.alternate,M);break;default:Jr(h,M,A,P,c)}n=n.sibling}}function vo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:vo(a,o),c&2048&&ff(o.alternate,o);break;case 24:vo(a,o),c&2048&&hf(o.alternate,o);break;default:vo(a,o)}n=n.sibling}}var xo=8192;function $r(e){if(e.subtreeFlags&xo)for(e=e.child;e!==null;)rg(e),e=e.sibling}function rg(e){switch(e.tag){case 26:$r(e),e.flags&xo&&e.memoizedState!==null&&hS(pi,e.memoizedState,e.memoizedProps);break;case 5:$r(e);break;case 3:case 4:var n=pi;pi=Kl(e.stateNode.containerInfo),$r(e),pi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=xo,xo=16777216,$r(e),xo=n):$r(e));break;default:$r(e)}}function sg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function So(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,lg(o,e)}sg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)og(e),e=e.sibling}function og(e){switch(e.tag){case 0:case 11:case 15:So(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:So(e);break;case 12:So(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,zl(e)):So(e);break;default:So(e)}}function zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,lg(o,e)}sg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,zl(n));break;default:zl(n)}e=e.sibling}}function lg(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,mn=o;else t:for(a=e;mn!==null;){o=mn;var c=o.sibling,h=o.return;if($m(o),o===a){mn=null;break t}if(c!==null){c.return=h,mn=c;break t}mn=h}}}function bx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(e,n,a,o){return new bx(e,n,a,o)}function df(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Aa(e,n){var a=e.alternate;return a===null?(a=ri(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ug(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Bl(e,n,a,o,c,h){var M=0;if(o=e,typeof e=="function")df(e)&&(M=1);else if(typeof e=="string")M=cS(e,a,Ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return cr(a.children,c,h,n);case m:M=8,c|=24;break;case _:return e=ri(12,a,n,c|2),e.elementType=_,e.lanes=h,e;case C:return e=ri(13,a,n,c),e.elementType=C,e.lanes=h,e;case S:return e=ri(19,a,n,c),e.elementType=S,e.lanes=h,e;case U:return cg(a,c,h,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case y:M=10;break t;case v:M=9;break t;case E:M=11;break t;case g:M=14;break t;case O:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=ri(M,a,n,c),n.elementType=e,n.type=o,n.lanes=h,n}function cr(e,n,a,o){return e=ri(7,e,o,n),e.lanes=a,e}function cg(e,n,a,o){e=ri(22,e,o,n),e.elementType=U,e.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var h=c._current;if(h===null)throw Error(r(456));if((c._pendingVisibility&2)===0){var M=pa(h,2);M!==null&&(c._pendingVisibility|=2,On(M,h,2))}},attach:function(){var h=c._current;if(h===null)throw Error(r(456));if((c._pendingVisibility&2)!==0){var M=pa(h,2);M!==null&&(c._pendingVisibility&=-3,On(M,h,2))}}};return e.stateNode=c,e}function pf(e,n,a){return e=ri(6,e,null,n),e.lanes=a,e}function mf(e,n,a){return n=ri(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ji(e){e.flags|=4}function fg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zg(n)){if(n=ni.current,n!==null&&((Me&4194176)===Me?bi!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==bi))throw io=xc,Cp;e.flags|=8192}}function Fl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Te():536870912,e.lanes|=n,es|=n)}function yo(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&31457280,o|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Ax(e,n,a){var o=n.pendingProps;switch(_c(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Xi(un),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&($s(n)?ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,di!==null&&(Ef(di),di=null))),ke(n),null;case 26:return a=n.memoizedState,e===null?(ji(n),a!==null?(ke(n),fg(n,a)):(ke(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ji(n),ke(n),fg(n,a)):(ke(n),n.flags&=-16777217):(e.memoizedProps!==o&&ji(n),ke(n),n.flags&=-16777217),null;case 27:Wt(n),a=re.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return ke(n),null}e=Ee.current,$s(n)?Ap(n):(e=Gg(c,o,a),n.stateNode=e,ji(n))}return ke(n),null;case 5:if(Wt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return ke(n),null}if(e=Ee.current,$s(n))Ap(n);else{switch(c=Zl(re.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[rn]=n,e[sn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Mn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ji(n)}}return ke(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=re.current,$s(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Nn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Pg(e.nodeValue,a)),e||tr(n)}else e=Zl(e).createTextNode(o),e[rn]=n,n.stateNode=e}return ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=$s(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else to(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),c=!1}else di!==null&&(Ef(di),di=null),c=!0;if(!c)return n.flags&256?(Hi(n),n):(Hi(n),null)}if(Hi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),ke(n),null;case 4:return oe(),e===null&&Of(n.stateNode.containerInfo),ke(n),null;case 10:return Xi(n.type),ke(n),null;case 19:if(Jt(ln),c=n.memoizedState,c===null)return ke(n),null;if(o=(n.flags&128)!==0,h=c.rendering,h===null)if(o)yo(c,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=yl(e),h!==null){for(n.flags|=128,yo(c,!1),e=h.updateQueue,n.updateQueue=e,Fl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)ug(a,e),a=a.sibling;return Bt(ln,ln.current&1|2),n.child}e=e.sibling}c.tail!==null&&ct()>Il&&(n.flags|=128,o=!0,yo(c,!1),n.lanes=4194304)}else{if(!o)if(e=yl(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Fl(n,e),yo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!Ae)return ke(n),null}else 2*ct()-c.renderingStartTime>Il&&a!==536870912&&(n.flags|=128,o=!0,yo(c,!1),n.lanes=4194304);c.isBackwards?(h.sibling=n.child,n.child=h):(e=c.last,e!==null?e.sibling=h:n.child=h,c.last=h)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ct(),n.sibling=null,e=ln.current,Bt(ln,o?e&1|2:e&1),n):(ke(n),null);case 22:case 23:return Hi(n),yc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Jt(nr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(un),ke(n),null;case 25:return null}throw Error(r(156,n.tag))}function Rx(e,n){switch(_c(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(un),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Wt(n),null;case 13:if(Hi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));to()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Jt(ln),null;case 4:return oe(),null;case 10:return Xi(n.type),null;case 22:case 23:return Hi(n),yc(),e!==null&&Jt(nr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(un),null;case 25:return null;default:return null}}function hg(e,n){switch(_c(n),n.tag){case 3:Xi(un),oe();break;case 26:case 27:case 5:Wt(n);break;case 4:oe();break;case 13:Hi(n);break;case 19:Jt(ln);break;case 10:Xi(n.type);break;case 22:case 23:Hi(n),yc(),e!==null&&Jt(nr);break;case 24:Xi(un)}}var Cx={getCacheForType:function(e){var n=Tn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},wx=typeof WeakMap=="function"?WeakMap:Map,Xe=0,Ie=null,me=null,Me=0,He=0,jn=null,Zi=!1,ts=!1,gf=!1,Ki=0,je=0,Ra=0,fr=0,_f=0,si=0,es=0,Mo=null,Ri=null,vf=!1,xf=0,Il=1/0,Hl=null,Ca=null,Gl=!1,hr=null,Eo=0,Sf=0,yf=null,To=0,Mf=null;function Zn(){if((Xe&2)!==0&&Me!==0)return Me&-Me;if(w.T!==null){var e=qr;return e!==0?e:Df()}return Vs()}function dg(){si===0&&(si=(Me&536870912)===0||Ae?an():536870912);var e=ni.current;return e!==null&&(e.flags|=32),si}function On(e,n,a){(e===Ie&&He===2||e.cancelPendingCommit!==null)&&(ns(e,0),Qi(e,Me,si,!1)),Dn(e,a),((Xe&2)===0||e!==Ie)&&(e===Ie&&((Xe&2)===0&&(fr|=a),je===4&&Qi(e,Me,si,!1)),Ci(e))}function pg(e,n,a){if((Xe&6)!==0)throw Error(r(327));var o=!a&&(n&60)===0&&(n&e.expiredLanes)===0||te(e,n),c=o?Lx(e,n):Af(e,n,!0),h=o;do{if(c===0){ts&&!o&&Qi(e,n,0,!1);break}else if(c===6)Qi(e,n,0,!Zi);else{if(a=e.current.alternate,h&&!Dx(a)){c=Af(e,n,!1),h=!1;continue}if(c===2){if(h=n,e.errorRecoveryDisabledLanes&h)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var A=e;c=Mo;var P=A.current.memoizedState.isDehydrated;if(P&&(ns(A,M).flags|=256),M=Af(A,M,!1),M!==2){if(gf&&!P){A.errorRecoveryDisabledLanes|=h,fr|=h,c=4;break t}h=Ri,Ri=c,h!==null&&Ef(h)}c=M}if(h=!1,c!==2)continue}}if(c===1){ns(e,0),Qi(e,n,0,!0);break}t:{switch(o=e,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Qi(o,n,si,!Zi);break t}break;case 2:Ri=null;break;case 3:case 5:break;default:throw Error(r(329))}if(o.finishedWork=a,o.finishedLanes=n,(n&62914560)===n&&(h=xf+300-ct(),10<h)){if(Qi(o,n,si,!Zi),Lt(o,0)!==0)break t;o.timeoutHandle=Fg(mg.bind(null,o,a,Ri,Hl,vf,n,si,fr,es,Zi,2,-0,0),h);break t}mg(o,a,Ri,Hl,vf,n,si,fr,es,Zi,0,-0,0)}}break}while(!0);Ci(e)}function Ef(e){Ri===null?Ri=e:Ri.push.apply(Ri,e)}function mg(e,n,a,o,c,h,M,A,P,V,lt,vt,nt){var ot=n.subtreeFlags;if((ot&8192||(ot&16785408)===16785408)&&(Do={stylesheets:null,count:0,unsuspend:fS},rg(n),n=dS(),n!==null)){e.cancelPendingCommit=n(Mg.bind(null,e,a,o,c,M,A,P,1,vt,nt)),Qi(e,h,M,!V);return}Mg(e,a,o,c,M,A,P,lt,vt,nt)}function Dx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],h=c.getSnapshot;c=c.value;try{if(!Wn(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qi(e,n,a,o){n&=~_f,n&=~fr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var h=31-Zt(c),M=1<<h;o[h]=-1,c&=~M}a!==0&&Gs(e,a,n)}function Vl(){return(Xe&6)===0?(bo(0),!1):!0}function Tf(){if(me!==null){if(He===0)var e=me.return;else e=me,ki=or=null,wc(e),Xr=null,ao=0,e=me;for(;e!==null;)hg(e.alternate,e),e=e.return;me=null}}function ns(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Zx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Tf(),Ie=e,me=a=Aa(e.current,null),Me=n,He=0,jn=null,Zi=!1,ts=te(e,n),gf=!1,es=si=_f=fr=Ra=je=0,Ri=Mo=null,vf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Zt(o),h=1<<c;n|=e[c],o&=~h}return Ki=n,hl(),a}function gg(e,n){he=null,w.H=Ai,n===no?(n=Up(),He=3):n===Cp?(n=Up(),He=4):He=n===wm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,me===null&&(je=1,Ll(e,$n(n,e.current)))}function _g(){var e=w.H;return w.H=Ai,e===null?Ai:e}function vg(){var e=w.A;return w.A=Cx,e}function bf(){je=4,Zi||(Me&4194176)!==Me&&ni.current!==null||(ts=!0),(Ra&134217727)===0&&(fr&134217727)===0||Ie===null||Qi(Ie,Me,si,!1)}function Af(e,n,a){var o=Xe;Xe|=2;var c=_g(),h=vg();(Ie!==e||Me!==n)&&(Hl=null,ns(e,n)),n=!1;var M=je;t:do try{if(He!==0&&me!==null){var A=me,P=jn;switch(He){case 8:Tf(),M=6;break t;case 3:case 2:case 6:ni.current===null&&(n=!0);var V=He;if(He=0,jn=null,is(e,A,P,V),a&&ts){M=0;break t}break;default:V=He,He=0,jn=null,is(e,A,P,V)}}Ux(),M=je;break}catch(lt){gg(e,lt)}while(!0);return n&&e.shellSuspendCounter++,ki=or=null,Xe=o,w.H=c,w.A=h,me===null&&(Ie=null,Me=0,hl()),M}function Ux(){for(;me!==null;)xg(me)}function Lx(e,n){var a=Xe;Xe|=2;var o=_g(),c=vg();Ie!==e||Me!==n?(Hl=null,Il=ct()+500,ns(e,n)):ts=te(e,n);t:do try{if(He!==0&&me!==null){n=me;var h=jn;e:switch(He){case 1:He=0,jn=null,is(e,n,h,1);break;case 2:if(wp(h)){He=0,jn=null,Sg(n);break}n=function(){He===2&&Ie===e&&(He=7),Ci(e)},h.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:wp(h)?(He=0,jn=null,Sg(n)):(He=0,jn=null,is(e,n,h,7));break;case 5:var M=null;switch(me.tag){case 26:M=me.memoizedState;case 5:case 27:var A=me;if(!M||Zg(M)){He=0,jn=null;var P=A.sibling;if(P!==null)me=P;else{var V=A.return;V!==null?(me=V,kl(V)):me=null}break e}}He=0,jn=null,is(e,n,h,5);break;case 6:He=0,jn=null,is(e,n,h,6);break;case 8:Tf(),je=6;break t;default:throw Error(r(462))}}Nx();break}catch(lt){gg(e,lt)}while(!0);return ki=or=null,w.H=o,w.A=c,Xe=a,me!==null?0:(Ie=null,Me=0,hl(),je)}function Nx(){for(;me!==null&&!T();)xg(me)}function xg(e){var n=Gm(e.alternate,e,Ki);e.memoizedProps=e.pendingProps,n===null?kl(e):me=n}function Sg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Pm(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Pm(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:wc(n);default:hg(a,n),n=me=ug(n,Ki),n=Gm(a,n,Ki)}e.memoizedProps=e.pendingProps,n===null?kl(e):me=n}function is(e,n,a,o){ki=or=null,wc(n),Xr=null,ao=0;var c=n.return;try{if(yx(e,c,n,a,Me)){je=1,Ll(e,$n(a,e.current)),me=null;return}}catch(h){if(c!==null)throw me=c,h;je=1,Ll(e,$n(a,e.current)),me=null;return}n.flags&32768?(Ae||o===1?e=!0:ts||(Me&536870912)!==0?e=!1:(Zi=e=!0,(o===2||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),yg(n,e)):kl(n)}function kl(e){var n=e;do{if((n.flags&32768)!==0){yg(n,Zi);return}e=n.return;var a=Ax(n.alternate,n,Ki);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);je===0&&(je=5)}function yg(e,n){do{var a=Rx(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);je=6,me=null}function Mg(e,n,a,o,c,h,M,A,P,V){var lt=w.T,vt=q.p;try{q.p=2,w.T=null,Ox(e,n,a,o,vt,c,h,M,A,P,V)}finally{w.T=lt,q.p=vt}}function Ox(e,n,a,o,c,h,M,A){do as();while(hr!==null);if((Xe&6)!==0)throw Error(r(327));var P=e.finishedWork;if(o=e.finishedLanes,P===null)return null;if(e.finishedWork=null,e.finishedLanes=0,P===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var V=P.lanes|P.childLanes;if(V|=pc,nl(e,o,V,h,M,A),e===Ie&&(me=Ie=null,Me=0),(P.subtreeFlags&10256)===0&&(P.flags&10256)===0||Gl||(Gl=!0,Sf=V,yf=a,Fx(Ut,function(){return as(),null})),a=(P.flags&15990)!==0,(P.subtreeFlags&15990)!==0||a?(a=w.T,w.T=null,h=q.p,q.p=2,M=Xe,Xe|=4,Ex(e,P),ng(P,e),ax(Ff,e.containerInfo),eu=!!Bf,Ff=Bf=null,e.current=P,Jm(e,P.alternate,P),tt(),Xe=M,q.p=h,w.T=a):e.current=P,Gl?(Gl=!1,hr=e,Eo=o):Eg(e,V),V=e.pendingLanes,V===0&&(Ca=null),Ht(P.stateNode),Ci(e),n!==null)for(c=e.onRecoverableError,P=0;P<n.length;P++)V=n[P],c(V.value,{componentStack:V.stack});return(Eo&3)!==0&&as(),V=e.pendingLanes,(o&4194218)!==0&&(V&42)!==0?e===Mf?To++:(To=0,Mf=e):To=0,bo(0),null}function Eg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,so(n)))}function as(){if(hr!==null){var e=hr,n=Sf;Sf=0;var a=Lr(Eo),o=w.T,c=q.p;try{if(q.p=32>a?32:a,w.T=null,hr===null)var h=!1;else{a=yf,yf=null;var M=hr,A=Eo;if(hr=null,Eo=0,(Xe&6)!==0)throw Error(r(331));var P=Xe;if(Xe|=4,og(M.current),ag(M,M.current,A,a),Xe=P,bo(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Qt,M)}catch{}h=!0}return h}finally{q.p=c,w.T=o,Eg(e,n)}}return!1}function Tg(e,n,a){n=$n(a,n),n=kc(e.stateNode,n,2),e=Ma(e,n,2),e!==null&&(Dn(e,2),Ci(e))}function Fe(e,n,a){if(e.tag===3)Tg(e,e,a);else for(;n!==null;){if(n.tag===3){Tg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ca===null||!Ca.has(o))){e=$n(a,e),a=Rm(2),o=Ma(n,a,2),o!==null&&(Cm(a,o,n,e),Dn(o,2),Ci(o));break}}n=n.return}}function Rf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new wx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(gf=!0,c.add(a),e=Px.bind(null,e,n,a),n.then(e,e))}function Px(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ie===e&&(Me&a)===a&&(je===4||je===3&&(Me&62914560)===Me&&300>ct()-xf?(Xe&2)===0&&ns(e,0):_f|=a,es===Me&&(es=0)),Ci(e)}function bg(e,n){n===0&&(n=Te()),e=pa(e,n),e!==null&&(Dn(e,n),Ci(e))}function zx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),bg(e,a)}function Bx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),bg(e,a)}function Fx(e,n){return qt(e,n)}var Xl=null,rs=null,Cf=!1,Wl=!1,wf=!1,dr=0;function Ci(e){e!==rs&&e.next===null&&(rs===null?Xl=rs=e:rs=rs.next=e),Wl=!0,Cf||(Cf=!0,Hx(Ix))}function bo(e,n){if(!wf&&Wl){wf=!0;do for(var a=!1,o=Xl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var M=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Zt(42|e)+1)-1,h&=c&~(M&~A),h=h&201326677?h&201326677|1:h?h|2:0}h!==0&&(a=!0,Cg(o,h))}else h=Me,h=Lt(o,o===Ie?h:0),(h&3)===0||te(o,h)||(a=!0,Cg(o,h));o=o.next}while(a);wf=!1}}function Ix(){Wl=Cf=!1;var e=0;dr!==0&&(jx()&&(e=dr),dr=0);for(var n=ct(),a=null,o=Xl;o!==null;){var c=o.next,h=Ag(o,n);h===0?(o.next=null,a===null?Xl=c:a.next=c,c===null&&(rs=a)):(a=o,(e!==0||(h&3)!==0)&&(Wl=!0)),o=c}bo(e)}function Ag(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var M=31-Zt(h),A=1<<M,P=c[M];P===-1?((A&a)===0||(A&o)!==0)&&(c[M]=Ve(A,n)):P<=n&&(e.expiredLanes|=A),h&=~A}if(n=Ie,a=Me,a=Lt(e,e===n?a:0),o=e.callbackNode,a===0||e===n&&He===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&L(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||te(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&L(o),Lr(a)){case 2:case 8:a=Vt;break;case 32:a=Ut;break;case 268435456:a=_e;break;default:a=Ut}return o=Rg.bind(null,e),a=qt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&L(o),e.callbackPriority=2,e.callbackNode=null,2}function Rg(e,n){var a=e.callbackNode;if(as()&&e.callbackNode!==a)return null;var o=Me;return o=Lt(e,e===Ie?o:0),o===0?null:(pg(e,o,n),Ag(e,ct()),e.callbackNode!=null&&e.callbackNode===a?Rg.bind(null,e):null)}function Cg(e,n){if(as())return null;pg(e,n,!0)}function Hx(e){Kx(function(){(Xe&6)!==0?qt(ht,e):e()})}function Df(){return dr===0&&(dr=an()),dr}function wg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rl(""+e)}function Dg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Gx(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var h=wg((c[sn]||null).action),M=o.submitter;M&&(n=(n=M[sn]||null)?wg(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var A=new ul("action","action",null,o,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(dr!==0){var P=M?Dg(c,M):new FormData(c);Fc(a,{pending:!0,data:P,method:c.method,action:h},null,P)}}else typeof h=="function"&&(A.preventDefault(),P=M?Dg(c,M):new FormData(c),Fc(a,{pending:!0,data:P,method:c.method,action:h},h,P))},currentTarget:c}]})}}for(var Uf=0;Uf<Mp.length;Uf++){var Lf=Mp[Uf],Vx=Lf.toLowerCase(),kx=Lf[0].toUpperCase()+Lf.slice(1);hi(Vx,"on"+kx)}hi(_p,"onAnimationEnd"),hi(vp,"onAnimationIteration"),hi(xp,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(sx,"onTransitionRun"),hi(ox,"onTransitionStart"),hi(lx,"onTransitionCancel"),hi(Sp,"onTransitionEnd"),zt("onMouseEnter",["mouseout","mouseover"]),zt("onMouseLeave",["mouseout","mouseover"]),zt("onPointerEnter",["pointerout","pointerover"]),zt("onPointerLeave",["pointerout","pointerover"]),Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function Ug(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var A=o[M],P=A.instance,V=A.currentTarget;if(A=A.listener,P!==h&&c.isPropagationStopped())break t;h=A,c.currentTarget=V;try{h(c)}catch(lt){Ul(lt)}c.currentTarget=null,h=P}else for(M=0;M<o.length;M++){if(A=o[M],P=A.instance,V=A.currentTarget,A=A.listener,P!==h&&c.isPropagationStopped())break t;h=A,c.currentTarget=V;try{h(c)}catch(lt){Ul(lt)}c.currentTarget=null,h=P}}}}function ye(e,n){var a=n[Nr];a===void 0&&(a=n[Nr]=new Set);var o=e+"__bubble";a.has(o)||(Lg(n,e,2,!1),a.add(o))}function Nf(e,n,a){var o=0;n&&(o|=4),Lg(a,e,o,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Of(e){if(!e[ql]){e[ql]=!0,Y.forEach(function(a){a!=="selectionchange"&&(Xx.has(a)||Nf(a,!1,e),Nf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ql]||(n[ql]=!0,Nf("selectionchange",!1,n))}}function Lg(e,n,a,o){switch(e_(n)){case 2:var c=gS;break;case 8:c=_S;break;default:c=Yf}a=c.bind(null,n,a,e),c=void 0,!ec||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Pf(e,n,a,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var A=o.stateNode.containerInfo;if(A===c||A.nodeType===8&&A.parentNode===c)break;if(M===4)for(M=o.return;M!==null;){var P=M.tag;if((P===3||P===4)&&(P=M.stateNode.containerInfo,P===c||P.nodeType===8&&P.parentNode===c))return;M=M.return}for(;A!==null;){if(M=Bi(A),M===null)return;if(P=M.tag,P===5||P===6||P===26||P===27){o=h=M;continue t}A=A.parentNode}}o=o.return}Yd(function(){var V=h,lt=$u(a),vt=[];t:{var nt=yp.get(e);if(nt!==void 0){var ot=ul,Xt=e;switch(e){case"keypress":if(ol(a)===0)break t;case"keydown":case"keyup":ot=B0;break;case"focusin":Xt="focus",ot=rc;break;case"focusout":Xt="blur",ot=rc;break;case"beforeblur":case"afterblur":ot=rc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=b0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=H0;break;case _p:case vp:case xp:ot=C0;break;case Sp:ot=V0;break;case"scroll":case"scrollend":ot=E0;break;case"wheel":ot=X0;break;case"copy":case"cut":case"paste":ot=D0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Jd;break;case"toggle":case"beforetoggle":ot=q0}var ae=(n&4)!==0,Ze=!ae&&(e==="scroll"||e==="scrollend"),K=ae?nt!==null?nt+"Capture":null:nt;ae=[];for(var G=V,J;G!==null;){var mt=G;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||K===null||(mt=Xs(G,K),mt!=null&&ae.push(Ro(G,mt,J))),Ze)break;G=G.return}0<ae.length&&(nt=new ot(nt,Xt,null,a,lt),vt.push({event:nt,listeners:ae}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",nt&&a!==Ju&&(Xt=a.relatedTarget||a.fromElement)&&(Bi(Xt)||Xt[zi]))break t;if((ot||nt)&&(nt=lt.window===lt?lt:(nt=lt.ownerDocument)?nt.defaultView||nt.parentWindow:window,ot?(Xt=a.relatedTarget||a.toElement,ot=V,Xt=Xt?Bi(Xt):null,Xt!==null&&(Ze=j(Xt),ae=Xt.tag,Xt!==Ze||ae!==5&&ae!==27&&ae!==6)&&(Xt=null)):(ot=null,Xt=V),ot!==Xt)){if(ae=Kd,mt="onMouseLeave",K="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Jd,mt="onPointerLeave",K="onPointerEnter",G="pointer"),Ze=ot==null?nt:X(ot),J=Xt==null?nt:X(Xt),nt=new ae(mt,G+"leave",ot,a,lt),nt.target=Ze,nt.relatedTarget=J,mt=null,Bi(lt)===V&&(ae=new ae(K,G+"enter",Xt,a,lt),ae.target=J,ae.relatedTarget=Ze,mt=ae),Ze=mt,ot&&Xt)e:{for(ae=ot,K=Xt,G=0,J=ae;J;J=ss(J))G++;for(J=0,mt=K;mt;mt=ss(mt))J++;for(;0<G-J;)ae=ss(ae),G--;for(;0<J-G;)K=ss(K),J--;for(;G--;){if(ae===K||K!==null&&ae===K.alternate)break e;ae=ss(ae),K=ss(K)}ae=null}else ae=null;ot!==null&&Ng(vt,nt,ot,ae,!1),Xt!==null&&Ze!==null&&Ng(vt,Ze,Xt,ae,!0)}}t:{if(nt=V?X(V):window,ot=nt.nodeName&&nt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&nt.type==="file")var Gt=sp;else if(ap(nt))if(op)Gt=nx;else{Gt=tx;var pe=$0}else ot=nt.nodeName,!ot||ot.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?V&&Qu(V.elementType)&&(Gt=sp):Gt=ex;if(Gt&&(Gt=Gt(e,V))){rp(vt,Gt,a,lt);break t}pe&&pe(e,nt,V),e==="focusout"&&V&&nt.type==="number"&&V.memoizedProps.value!=null&&En(nt,"number",nt.value)}switch(pe=V?X(V):window,e){case"focusin":(ap(pe)||pe.contentEditable==="true")&&(Fr=pe,fc=V,Js=null);break;case"focusout":Js=fc=Fr=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,mp(vt,a,lt);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":mp(vt,a,lt)}var Yt;if(oc)t:{switch(e){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else Br?np(e,a)&&($t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&($t="onCompositionStart");$t&&($d&&a.locale!=="ko"&&(Br||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&Br&&(Yt=jd()):(da=lt,nc="value"in da?da.value:da.textContent,Br=!0)),pe=Yl(V,$t),0<pe.length&&($t=new Qd($t,e,null,a,lt),vt.push({event:$t,listeners:pe}),Yt?$t.data=Yt:(Yt=ip(a),Yt!==null&&($t.data=Yt)))),(Yt=j0?Z0(e,a):K0(e,a))&&($t=Yl(V,"onBeforeInput"),0<$t.length&&(pe=new Qd("onBeforeInput","beforeinput",null,a,lt),vt.push({event:pe,listeners:$t}),pe.data=Yt)),Gx(vt,e,V,a,lt)}Ug(vt,n)})}function Ro(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Yl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,h=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=Xs(e,a),c!=null&&o.unshift(Ro(e,c,h)),c=Xs(e,n),c!=null&&o.push(Ro(e,c,h))),e=e.return}return o}function ss(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ng(e,n,a,o,c){for(var h=n._reactName,M=[];a!==null&&a!==o;){var A=a,P=A.alternate,V=A.stateNode;if(A=A.tag,P!==null&&P===o)break;A!==5&&A!==26&&A!==27||V===null||(P=V,c?(V=Xs(a,h),V!=null&&M.unshift(Ro(a,V,P))):c||(V=Xs(a,h),V!=null&&M.push(Ro(a,V,P)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var Wx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function Og(e){return(typeof e=="string"?e:""+e).replace(Wx,`
`).replace(qx,"")}function Pg(e,n){return n=Og(n),Og(e)===n}function jl(){}function Pe(e,n,a,o,c,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Bn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Bn(e,""+o);break;case"className":Ge(e,"class",o);break;case"tabIndex":Ge(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ge(e,a,o);break;case"style":Wd(e,o,h);break;case"data":if(n!=="object"){Ge(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=rl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Pe(e,n,"name",c.name,c,null),Pe(e,n,"formEncType",c.formEncType,c,null),Pe(e,n,"formMethod",c.formMethod,c,null),Pe(e,n,"formTarget",c.formTarget,c,null)):(Pe(e,n,"encType",c.encType,c,null),Pe(e,n,"method",c.method,c,null),Pe(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=rl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=jl);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=rl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),xe(e,"popover",o);break;case"xlinkActuate":be(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":be(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":be(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":be(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":be(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":be(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":be(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":be(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":be(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":xe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=y0.get(a)||a,xe(e,a,o))}}function zf(e,n,a,o,c,h){switch(a){case"style":Wd(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Bn(e,o):(typeof o=="number"||typeof o=="bigint")&&Bn(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Et.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),h=e[sn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):xe(e,a,o)}}}function Mn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,h,M,a,null)}}c&&Pe(e,n,"srcSet",a.srcSet,a,null),o&&Pe(e,n,"src",a.src,a,null);return;case"input":ye("invalid",e);var A=h=M=c=null,P=null,V=null;for(o in a)if(a.hasOwnProperty(o)){var lt=a[o];if(lt!=null)switch(o){case"name":c=lt;break;case"type":M=lt;break;case"checked":P=lt;break;case"defaultChecked":V=lt;break;case"value":h=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:Pe(e,n,o,lt,a,null)}}Ln(e,h,A,P,V,M,c,!1),Se(e);return;case"select":ye("invalid",e),o=M=h=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":h=A;break;case"defaultValue":M=A;break;case"multiple":o=A;default:Pe(e,n,c,A,a,null)}n=h,a=M,e.multiple=!!o,n!=null?qe(e,!!o,n,!1):a!=null&&qe(e,!!o,a,!0);return;case"textarea":ye("invalid",e),h=c=o=null;for(M in a)if(a.hasOwnProperty(M)&&(A=a[M],A!=null))switch(M){case"value":o=A;break;case"defaultValue":c=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Pe(e,n,M,A,a,null)}Or(e,o,c,h),Se(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Pe(e,n,P,o,a,null)}return;case"dialog":ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<Ao.length;o++)ye(Ao[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,V,o,a,null)}return;default:if(Qu(n)){for(lt in a)a.hasOwnProperty(lt)&&(o=a[lt],o!==void 0&&zf(e,n,lt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Pe(e,n,A,o,a,null))}function Yx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,M=null,A=null,P=null,V=null,lt=null;for(ot in a){var vt=a[ot];if(a.hasOwnProperty(ot)&&vt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":P=vt;default:o.hasOwnProperty(ot)||Pe(e,n,ot,null,o,vt)}}for(var nt in o){var ot=o[nt];if(vt=a[nt],o.hasOwnProperty(nt)&&(ot!=null||vt!=null))switch(nt){case"type":h=ot;break;case"name":c=ot;break;case"checked":V=ot;break;case"defaultChecked":lt=ot;break;case"value":M=ot;break;case"defaultValue":A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==vt&&Pe(e,n,nt,ot,o,vt)}}Ne(e,M,A,P,V,lt,h,c);return;case"select":ot=M=A=nt=null;for(h in a)if(P=a[h],a.hasOwnProperty(h)&&P!=null)switch(h){case"value":break;case"multiple":ot=P;default:o.hasOwnProperty(h)||Pe(e,n,h,null,o,P)}for(c in o)if(h=o[c],P=a[c],o.hasOwnProperty(c)&&(h!=null||P!=null))switch(c){case"value":nt=h;break;case"defaultValue":A=h;break;case"multiple":M=h;default:h!==P&&Pe(e,n,c,h,o,P)}n=A,a=M,o=ot,nt!=null?qe(e,!!a,nt,!1):!!o!=!!a&&(n!=null?qe(e,!!a,n,!0):qe(e,!!a,a?[]:"",!1));return;case"textarea":ot=nt=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Pe(e,n,A,null,o,c)}for(M in o)if(c=o[M],h=a[M],o.hasOwnProperty(M)&&(c!=null||h!=null))switch(M){case"value":nt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==h&&Pe(e,n,M,c,o,h)}xn(e,nt,ot);return;case"option":for(var Xt in a)if(nt=a[Xt],a.hasOwnProperty(Xt)&&nt!=null&&!o.hasOwnProperty(Xt))switch(Xt){case"selected":e.selected=!1;break;default:Pe(e,n,Xt,null,o,nt)}for(P in o)if(nt=o[P],ot=a[P],o.hasOwnProperty(P)&&nt!==ot&&(nt!=null||ot!=null))switch(P){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Pe(e,n,P,nt,o,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)nt=a[ae],a.hasOwnProperty(ae)&&nt!=null&&!o.hasOwnProperty(ae)&&Pe(e,n,ae,null,o,nt);for(V in o)if(nt=o[V],ot=a[V],o.hasOwnProperty(V)&&nt!==ot&&(nt!=null||ot!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Pe(e,n,V,nt,o,ot)}return;default:if(Qu(n)){for(var Ze in a)nt=a[Ze],a.hasOwnProperty(Ze)&&nt!==void 0&&!o.hasOwnProperty(Ze)&&zf(e,n,Ze,void 0,o,nt);for(lt in o)nt=o[lt],ot=a[lt],!o.hasOwnProperty(lt)||nt===ot||nt===void 0&&ot===void 0||zf(e,n,lt,nt,o,ot);return}}for(var K in a)nt=a[K],a.hasOwnProperty(K)&&nt!=null&&!o.hasOwnProperty(K)&&Pe(e,n,K,null,o,nt);for(vt in o)nt=o[vt],ot=a[vt],!o.hasOwnProperty(vt)||nt===ot||nt==null&&ot==null||Pe(e,n,vt,nt,o,ot)}var Bf=null,Ff=null;function Zl(e){return e.nodeType===9?e:e.ownerDocument}function zg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function If(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hf=null;function jx(){var e=window.event;return e&&e.type==="popstate"?e===Hf?!1:(Hf=e,!0):(Hf=null,!1)}var Fg=typeof setTimeout=="function"?setTimeout:void 0,Zx=typeof clearTimeout=="function"?clearTimeout:void 0,Ig=typeof Promise=="function"?Promise:void 0,Kx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ig<"u"?function(e){return Ig.resolve(null).then(e).catch(Qx)}:Fg;function Qx(e){setTimeout(function(){throw e})}function Gf(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(o===0){e.removeChild(c),Po(n);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=c}while(a);Po(n)}function Vf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),ks(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Jx(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ja])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function $x(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function Hg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Gg(e,n,a){switch(n=Zl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var oi=new Map,Vg=new Set;function Kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Ji=q.d;q.d={f:tS,r:eS,D:nS,C:iS,L:aS,m:rS,X:oS,S:sS,M:lS};function tS(){var e=Ji.f(),n=Vl();return e||n}function eS(e){var n=R(e);n!==null&&n.tag===5&&n.type==="form"?mm(n):Ji.r(e)}var os=typeof document>"u"?null:document;function kg(e,n,a){var o=os;if(o&&typeof n=="string"&&n){var c=dn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Vg.has(c)||(Vg.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Mn(n,"link",e),Q(n),o.head.appendChild(n)))}}function nS(e){Ji.D(e),kg("dns-prefetch",e,null)}function iS(e,n){Ji.C(e,n),kg("preconnect",e,n)}function aS(e,n,a){Ji.L(e,n,a);var o=os;if(o&&e&&n){var c='link[rel="preload"][as="'+dn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+dn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+dn(a.imageSizes)+'"]')):c+='[href="'+dn(e)+'"]';var h=c;switch(n){case"style":h=ls(e);break;case"script":h=us(e)}oi.has(h)||(e=b({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(h,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Co(h))||n==="script"&&o.querySelector(wo(h))||(n=o.createElement("link"),Mn(n,"link",e),Q(n),o.head.appendChild(n)))}}function rS(e,n){Ji.m(e,n);var a=os;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+dn(o)+'"][href="'+dn(e)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=us(e)}if(!oi.has(h)&&(e=b({rel:"modulepreload",href:e},n),oi.set(h,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(h)))return}o=a.createElement("link"),Mn(o,"link",e),Q(o),a.head.appendChild(o)}}}function sS(e,n,a){Ji.S(e,n,a);var o=os;if(o&&e){var c=$(o).hoistableStyles,h=ls(e);n=n||"default";var M=c.get(h);if(!M){var A={loading:0,preload:null};if(M=o.querySelector(Co(h)))A.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(h))&&kf(e,a);var P=M=o.createElement("link");Q(P),Mn(P,"link",e),P._p=new Promise(function(V,lt){P.onload=V,P.onerror=lt}),P.addEventListener("load",function(){A.loading|=1}),P.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Ql(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:A},c.set(h,M)}}}function oS(e,n){Ji.X(e,n);var a=os;if(a&&e){var o=$(a).hoistableScripts,c=us(e),h=o.get(c);h||(h=a.querySelector(wo(c)),h||(e=b({src:e,async:!0},n),(n=oi.get(c))&&Xf(e,n),h=a.createElement("script"),Q(h),Mn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function lS(e,n){Ji.M(e,n);var a=os;if(a&&e){var o=$(a).hoistableScripts,c=us(e),h=o.get(c);h||(h=a.querySelector(wo(c)),h||(e=b({src:e,async:!0,type:"module"},n),(n=oi.get(c))&&Xf(e,n),h=a.createElement("script"),Q(h),Mn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function Xg(e,n,a,o){var c=(c=re.current)?Kl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ls(a.href),a=$(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ls(a.href);var h=$(c).hoistableStyles,M=h.get(e);if(M||(c=c.ownerDocument||c,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,M),(h=c.querySelector(Co(e)))&&!h._p&&(M.instance=h,M.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),h||uS(c,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=us(a),a=$(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ls(e){return'href="'+dn(e)+'"'}function Co(e){return'link[rel="stylesheet"]['+e+"]"}function Wg(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function uS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mn(n,"link",a),Q(n),e.head.appendChild(n))}function us(e){return'[src="'+dn(e)+'"]'}function wo(e){return"script[async]"+e}function qg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+dn(a.href)+'"]');if(o)return n.instance=o,Q(o),o;var c=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Q(o),Mn(o,"style",c),Ql(o,a.precedence,e),n.instance=o;case"stylesheet":c=ls(a.href);var h=e.querySelector(Co(c));if(h)return n.state.loading|=4,n.instance=h,Q(h),h;o=Wg(a),(c=oi.get(c))&&kf(o,c),h=(e.ownerDocument||e).createElement("link"),Q(h);var M=h;return M._p=new Promise(function(A,P){M.onload=A,M.onerror=P}),Mn(h,"link",o),n.state.loading|=4,Ql(h,a.precedence,e),n.instance=h;case"script":return h=us(a.src),(c=e.querySelector(wo(h)))?(n.instance=c,Q(c),c):(o=a,(c=oi.get(h))&&(o=b({},a),Xf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),Q(c),Mn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Ql(o,a.precedence,e));return n.instance}function Ql(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,M=0;M<o.length;M++){var A=o[M];if(A.dataset.precedence===n)h=A;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Jl=null;function Yg(e,n,a){if(Jl===null){var o=new Map,c=Jl=new Map;c.set(a,o)}else c=Jl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var h=a[c];if(!(h[ja]||h[rn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=e+M;var A=o.get(M);A?A.push(h):o.set(M,[h])}}return o}function jg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function cS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Zg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Do=null;function fS(){}function hS(e,n,a){if(Do===null)throw Error(r(475));var o=Do;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ls(a.href),h=e.querySelector(Co(c));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=$l.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,Q(h);return}h=e.ownerDocument||e,a=Wg(a),(c=oi.get(c))&&kf(a,c),h=h.createElement("link"),Q(h);var M=h;M._p=new Promise(function(A,P){M.onload=A,M.onerror=P}),Mn(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=$l.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function dS(){if(Do===null)throw Error(r(475));var e=Do;return e.stylesheets&&e.count===0&&Wf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Wf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function $l(){if(this.count--,this.count===0){if(this.stylesheets)Wf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var tu=null;function Wf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,tu=new Map,n.forEach(pS,e),tu=null,$l.call(e))}function pS(e,n){if(!(n.state.loading&4)){var a=tu.get(e);if(a)var o=a.get(null);else{a=new Map,tu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var M=c[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}c=n.instance,M=c.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,c),a.set(M,c),this.count++,o=$l.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Uo={$$typeof:y,Provider:null,Consumer:null,_currentValue:pt,_currentValue2:pt,_threadCount:0};function mS(e,n,a,o,c,h,M,A){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wn(0),this.hiddenUpdates=wn(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Kg(e,n,a,o,c,h,M,A,P,V,lt,vt){return e=new mS(e,n,a,M,A,P,V,vt),n=1,h===!0&&(n|=24),h=ri(3,null,null,n),e.current=h,h.stateNode=e,n=Mc(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},nf(h),e}function Qg(e){return e?(e=Gr,e):Gr}function Jg(e,n,a,o,c,h){c=Qg(c),o.context===null?o.context=c:o.pendingContext=c,o=ya(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ma(e,o,n),a!==null&&(On(a,e,n),po(a,e,n))}function $g(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function qf(e,n){$g(e,n),(e=e.alternate)&&$g(e,n)}function t_(e){if(e.tag===13){var n=pa(e,67108864);n!==null&&On(n,e,67108864),qf(e,67108864)}}var eu=!0;function gS(e,n,a,o){var c=w.T;w.T=null;var h=q.p;try{q.p=2,Yf(e,n,a,o)}finally{q.p=h,w.T=c}}function _S(e,n,a,o){var c=w.T;w.T=null;var h=q.p;try{q.p=8,Yf(e,n,a,o)}finally{q.p=h,w.T=c}}function Yf(e,n,a,o){if(eu){var c=jf(o);if(c===null)Pf(e,n,o,nu,a),n_(e,o);else if(xS(c,e,n,a,o))o.stopPropagation();else if(n_(e,o),n&4&&-1<vS.indexOf(e)){for(;c!==null;){var h=R(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=Dt(h.pendingLanes);if(M!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var P=1<<31-Zt(M);A.entanglements[1]|=P,M&=~P}Ci(h),(Xe&6)===0&&(Il=ct()+500,bo(0))}}break;case 13:A=pa(h,2),A!==null&&On(A,h,2),Vl(),qf(h,2)}if(h=jf(o),h===null&&Pf(e,n,o,nu,a),h===c)break;c=h}c!==null&&o.stopPropagation()}else Pf(e,n,o,null,a)}}function jf(e){return e=$u(e),Zf(e)}var nu=null;function Zf(e){if(nu=null,e=Bi(e),e!==null){var n=j(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=Mt(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return nu=e,null}function e_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(St()){case ht:return 2;case Vt:return 8;case Ut:case Ft:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Kf=!1,wa=null,Da=null,Ua=null,Lo=new Map,No=new Map,La=[],vS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function n_(e,n){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Oo(e,n,a,o,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=R(n),n!==null&&t_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function xS(e,n,a,o,c){switch(n){case"focusin":return wa=Oo(wa,e,n,a,o,c),!0;case"dragenter":return Da=Oo(Da,e,n,a,o,c),!0;case"mouseover":return Ua=Oo(Ua,e,n,a,o,c),!0;case"pointerover":var h=c.pointerId;return Lo.set(h,Oo(Lo.get(h)||null,e,n,a,o,c)),!0;case"gotpointercapture":return h=c.pointerId,No.set(h,Oo(No.get(h)||null,e,n,a,o,c)),!0}return!1}function i_(e){var n=Bi(e.target);if(n!==null){var a=j(n);if(a!==null){if(n=a.tag,n===13){if(n=Mt(a),n!==null){e.blockedOn=n,il(e.priority,function(){if(a.tag===13){var o=Zn(),c=pa(a,o);c!==null&&On(c,a,o),qf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function iu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=jf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Ju=o,a.target.dispatchEvent(o),Ju=null}else return n=R(a),n!==null&&t_(n),e.blockedOn=a,!1;n.shift()}return!0}function a_(e,n,a){iu(e)&&a.delete(n)}function SS(){Kf=!1,wa!==null&&iu(wa)&&(wa=null),Da!==null&&iu(Da)&&(Da=null),Ua!==null&&iu(Ua)&&(Ua=null),Lo.forEach(a_),No.forEach(a_)}function au(e,n){e.blockedOn===n&&(e.blockedOn=null,Kf||(Kf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,SS)))}var ru=null;function r_(e){ru!==e&&(ru=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ru===e&&(ru=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Zf(o||a)===null)continue;break}var h=R(a);h!==null&&(e.splice(n,3),n-=3,Fc(h,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Po(e){function n(P){return au(P,e)}wa!==null&&au(wa,e),Da!==null&&au(Da,e),Ua!==null&&au(Ua,e),Lo.forEach(n),No.forEach(n);for(var a=0;a<La.length;a++){var o=La[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)i_(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],h=a[o+1],M=c[sn]||null;if(typeof h=="function")M||r_(a);else if(M){var A=null;if(h&&h.hasAttribute("formAction")){if(c=h,M=h[sn]||null)A=M.formAction;else if(Zf(c)!==null)continue}else A=M.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),r_(a)}}}function Qf(e){this._internalRoot=e}su.prototype.render=Qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Zn();Jg(a,o,e,n,null,null)},su.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&as(),Jg(e.current,2,null,e,null,null),Vl(),n[zi]=null}};function su(e){this._internalRoot=e}su.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<La.length&&n!==0&&n<La[a].priority;a++);La.splice(a,0,e),a===0&&i_(e)}};var s_=t.version;if(s_!=="19.0.0")throw Error(r(527,s_,"19.0.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=it(n),e=e!==null?bt(e):null,e=e===null?null:e.stateNode,e};var yS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:w,findFiberByHostInstance:Bi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{Qt=ou.inject(yS),kt=ou}catch{}}return Bo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=Em,h=Tm,M=bm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=Kg(e,1,!1,null,null,a,o,c,h,M,A,null),e[zi]=n.current,Of(e.nodeType===8?e.parentNode:e),new Qf(n)},Bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",h=Em,M=Tm,A=bm,P=null,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(V=a.formState)),n=Kg(e,1,!0,n,a??null,o,c,h,M,A,P,V),n.context=Qg(null),a=n.current,o=Zn(),c=ya(o),c.callback=null,Ma(a,c,o),n.current.lanes=o,Dn(n,o),Ci(n),e[zi]=n.current,Of(e),new su(n)},Bo.version="19.0.0",Bo}var g_;function US(){if(g_)return th.exports;g_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),th.exports=DS(),th.exports}var LS=US(),Fo={},__;function NS(){if(__)return Fo;__=1,Object.defineProperty(Fo,"__esModule",{value:!0}),Fo.parse=f,Fo.serialize=m;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function f(v,y){const E=new u,C=v.length;if(C<2)return E;const S=(y==null?void 0:y.decode)||_;let g=0;do{const O=v.indexOf("=",g);if(O===-1)break;const U=v.indexOf(";",g),D=U===-1?C:U;if(O>D){g=v.lastIndexOf(";",O-1)+1;continue}const F=d(v,g,O),H=p(v,O,F),B=v.slice(F,H);if(E[B]===void 0){let Z=d(v,O+1,D),w=p(v,D,Z);const b=S(v.slice(Z,w));E[B]=b}g=D+1}while(g<C);return E}function d(v,y,E){do{const C=v.charCodeAt(y);if(C!==32&&C!==9)return y}while(++y<E);return E}function p(v,y,E){for(;y>E;){const C=v.charCodeAt(--y);if(C!==32&&C!==9)return y+1}return E}function m(v,y,E){const C=(E==null?void 0:E.encode)||encodeURIComponent;if(!s.test(v))throw new TypeError(`argument name is invalid: ${v}`);const S=C(y);if(!t.test(S))throw new TypeError(`argument val is invalid: ${y}`);let g=v+"="+S;if(!E)return g;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);g+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);g+="; Domain="+E.domain}if(E.path){if(!r.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);g+="; Path="+E.path}if(E.expires){if(!x(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);g+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(g+="; HttpOnly"),E.secure&&(g+="; Secure"),E.partitioned&&(g+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":g+="; Priority=Low";break;case"medium":g+="; Priority=Medium";break;case"high":g+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":g+="; SameSite=Strict";break;case"lax":g+="; SameSite=Lax";break;case"none":g+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return g}function _(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function x(v){return l.call(v)==="[object Date]"}return Fo}NS();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var v_="popstate";function OS(s={}){function t(r,l){let{pathname:u,search:f,hash:d}=r.location;return Bh("",{pathname:u,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:qo(l)}return zS(t,i,null,s)}function We(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Ni(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function PS(){return Math.random().toString(36).substring(2,10)}function x_(s,t){return{usr:s.state,key:s.key,idx:t}}function Bh(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Bs(t):t,state:i,key:t&&t.key||r||PS()}}function qo({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Bs(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function zS(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,d="POP",p=null,m=_();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function _(){return(f.state||{idx:null}).idx}function x(){d="POP";let S=_(),g=S==null?null:S-m;m=S,p&&p({action:d,location:C.location,delta:g})}function v(S,g){d="PUSH";let O=Bh(C.location,S,g);m=_()+1;let U=x_(O,m),D=C.createHref(O);try{f.pushState(U,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(D)}u&&p&&p({action:d,location:C.location,delta:1})}function y(S,g){d="REPLACE";let O=Bh(C.location,S,g);m=_();let U=x_(O,m),D=C.createHref(O);f.replaceState(U,"",D),u&&p&&p({action:d,location:C.location,delta:0})}function E(S){let g=l.location.origin!=="null"?l.location.origin:l.location.href,O=typeof S=="string"?S:qo(S);return O=O.replace(/ $/,"%20"),We(g,`No window.location.(origin|href) available to create URL for href: ${O}`),new URL(O,g)}let C={get action(){return d},get location(){return s(l,f)},listen(S){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(v_,x),p=S,()=>{l.removeEventListener(v_,x),p=null}},createHref(S){return t(l,S)},createURL:E,encodeLocation(S){let g=E(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:v,replace:y,go(S){return f.go(S)}};return C}function Tv(s,t,i="/"){return BS(s,t,i,!1)}function BS(s,t,i,r){let l=typeof t=="string"?Bs(t):t,u=Xa(l.pathname||"/",i);if(u==null)return null;let f=bv(s);FS(f);let d=null;for(let p=0;d==null&&p<f.length;++p){let m=ZS(u);d=YS(f[p],m,r)}return d}function bv(s,t=[],i=[],r=""){let l=(u,f,d)=>{let p={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};p.relativePath.startsWith("/")&&(We(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let m=ua([r,p.relativePath]),_=i.concat(p);u.children&&u.children.length>0&&(We(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),bv(u.children,t,_,m)),!(u.path==null&&!u.index)&&t.push({path:m,score:WS(m,u.index),routesMeta:_})};return s.forEach((u,f)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))l(u,f);else for(let p of Av(u.path))l(u,f,p)}),t}function Av(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=Av(r.join("/")),d=[];return d.push(...f.map(p=>p===""?u:[u,p].join("/"))),l&&d.push(...f),d.map(p=>s.startsWith("/")&&p===""?"/":p)}function FS(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:qS(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var IS=/^:[\w-]+$/,HS=3,GS=2,VS=1,kS=10,XS=-2,S_=s=>s==="*";function WS(s,t){let i=s.split("/"),r=i.length;return i.some(S_)&&(r+=XS),t&&(r+=GS),i.filter(l=>!S_(l)).reduce((l,u)=>l+(IS.test(u)?HS:u===""?VS:kS),r)}function qS(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function YS(s,t,i=!1){let{routesMeta:r}=s,l={},u="/",f=[];for(let d=0;d<r.length;++d){let p=r[d],m=d===r.length-1,_=u==="/"?t:t.slice(u.length)||"/",x=Gu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},_),v=p.route;if(!x&&m&&i&&!r[r.length-1].route.index&&(x=Gu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!x)return null;Object.assign(l,x.params),f.push({params:l,pathname:ua([u,x.pathname]),pathnameBase:$S(ua([u,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(u=ua([u,x.pathnameBase]))}return f}function Gu(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=jS(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((m,{paramName:_,isOptional:x},v)=>{if(_==="*"){let E=d[v]||"";f=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const y=d[v];return x&&!y?m[_]=void 0:m[_]=(y||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:f,pattern:s}}function jS(s,t=!1,i=!0){Ni(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function ZS(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ni(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function Xa(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function KS(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Bs(s):s;return{pathname:i?i.startsWith("/")?i:QS(i,t):t,search:ty(r),hash:ey(l)}}function QS(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ah(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function JS(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Rv(s){let t=JS(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function Cv(s,t,i,r=!1){let l;typeof s=="string"?l=Bs(s):(l={...s},We(!l.pathname||!l.pathname.includes("?"),ah("?","pathname","search",l)),We(!l.pathname||!l.pathname.includes("#"),ah("#","pathname","hash",l)),We(!l.search||!l.search.includes("#"),ah("#","search","hash",l)));let u=s===""||l.pathname==="",f=u?"/":l.pathname,d;if(f==null)d=i;else{let x=t.length-1;if(!r&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),x-=1;l.pathname=v.join("/")}d=x>=0?t[x]:"/"}let p=KS(l,d),m=f&&f!=="/"&&f.endsWith("/"),_=(u||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||_)&&(p.pathname+="/"),p}var ua=s=>s.join("/").replace(/\/\/+/g,"/"),$S=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),ty=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,ey=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function ny(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var wv=["POST","PUT","PATCH","DELETE"];new Set(wv);var iy=["GET",...wv];new Set(iy);var Fs=ft.createContext(null);Fs.displayName="DataRouter";var Wu=ft.createContext(null);Wu.displayName="DataRouterState";var Dv=ft.createContext({isTransitioning:!1});Dv.displayName="ViewTransition";var ay=ft.createContext(new Map);ay.displayName="Fetchers";var ry=ft.createContext(null);ry.displayName="Await";var Pi=ft.createContext(null);Pi.displayName="Navigation";var jo=ft.createContext(null);jo.displayName="Location";var ha=ft.createContext({outlet:null,matches:[],isDataRoute:!1});ha.displayName="Route";var Rd=ft.createContext(null);Rd.displayName="RouteError";function sy(s,{relative:t}={}){We(Zo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=ft.useContext(Pi),{hash:l,pathname:u,search:f}=Ko(s,{relative:t}),d=u;return i!=="/"&&(d=u==="/"?i:ua([i,u])),r.createHref({pathname:d,search:f,hash:l})}function Zo(){return ft.useContext(jo)!=null}function Ya(){return We(Zo(),"useLocation() may be used only in the context of a <Router> component."),ft.useContext(jo).location}var Uv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Lv(s){ft.useContext(Pi).static||ft.useLayoutEffect(s)}function oy(){let{isDataRoute:s}=ft.useContext(ha);return s?Sy():ly()}function ly(){We(Zo(),"useNavigate() may be used only in the context of a <Router> component.");let s=ft.useContext(Fs),{basename:t,navigator:i}=ft.useContext(Pi),{matches:r}=ft.useContext(ha),{pathname:l}=Ya(),u=JSON.stringify(Rv(r)),f=ft.useRef(!1);return Lv(()=>{f.current=!0}),ft.useCallback((p,m={})=>{if(Ni(f.current,Uv),!f.current)return;if(typeof p=="number"){i.go(p);return}let _=Cv(p,JSON.parse(u),l,m.relative==="path");s==null&&t!=="/"&&(_.pathname=_.pathname==="/"?t:ua([t,_.pathname])),(m.replace?i.replace:i.push)(_,m.state,m)},[t,i,u,l,s])}ft.createContext(null);function Ko(s,{relative:t}={}){let{matches:i}=ft.useContext(ha),{pathname:r}=Ya(),l=JSON.stringify(Rv(i));return ft.useMemo(()=>Cv(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function uy(s,t){return Nv(s,t)}function Nv(s,t,i,r){var O;We(Zo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:u}=ft.useContext(Pi),{matches:f}=ft.useContext(ha),d=f[f.length-1],p=d?d.params:{},m=d?d.pathname:"/",_=d?d.pathnameBase:"/",x=d&&d.route;{let U=x&&x.path||"";Ov(m,!x||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let v=Ya(),y;if(t){let U=typeof t=="string"?Bs(t):t;We(_==="/"||((O=U.pathname)==null?void 0:O.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${U.pathname}" was given in the \`location\` prop.`),y=U}else y=v;let E=y.pathname||"/",C=E;if(_!=="/"){let U=_.replace(/^\//,"").split("/");C="/"+E.replace(/^\//,"").split("/").slice(U.length).join("/")}let S=!u&&i&&i.matches&&i.matches.length>0?i.matches:Tv(s,{pathname:C});Ni(x||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Ni(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=py(S&&S.map(U=>Object.assign({},U,{params:Object.assign({},p,U.params),pathname:ua([_,l.encodeLocation?l.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?_:ua([_,l.encodeLocation?l.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),f,i,r);return t&&g?ft.createElement(jo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},g):g}function cy(){let s=xy(),t=ny(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=ft.createElement(ft.Fragment,null,ft.createElement("p",null,"💿 Hey developer 👋"),ft.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ft.createElement("code",{style:u},"ErrorBoundary")," or"," ",ft.createElement("code",{style:u},"errorElement")," prop on your route.")),ft.createElement(ft.Fragment,null,ft.createElement("h2",null,"Unexpected Application Error!"),ft.createElement("h3",{style:{fontStyle:"italic"}},t),i?ft.createElement("pre",{style:l},i):null,f)}var fy=ft.createElement(cy,null),hy=class extends ft.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){console.error("React Router caught the following error during render",s,t)}render(){return this.state.error!==void 0?ft.createElement(ha.Provider,{value:this.props.routeContext},ft.createElement(Rd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function dy({routeContext:s,match:t,children:i}){let r=ft.useContext(Fs);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),ft.createElement(ha.Provider,{value:s},i)}function py(s,t=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,u=i==null?void 0:i.errors;if(u!=null){let p=l.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);We(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,d=-1;if(i)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:_,errors:x}=i,v=m.route.loader&&!_.hasOwnProperty(m.route.id)&&(!x||x[m.route.id]===void 0);if(m.route.lazy||v){f=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((p,m,_)=>{let x,v=!1,y=null,E=null;i&&(x=u&&m.route.id?u[m.route.id]:void 0,y=m.route.errorElement||fy,f&&(d<0&&_===0?(Ov("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):d===_&&(v=!0,E=m.route.hydrateFallbackElement||null)));let C=t.concat(l.slice(0,_+1)),S=()=>{let g;return x?g=y:v?g=E:m.route.Component?g=ft.createElement(m.route.Component,null):m.route.element?g=m.route.element:g=p,ft.createElement(dy,{match:m,routeContext:{outlet:p,matches:C,isDataRoute:i!=null},children:g})};return i&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?ft.createElement(hy,{location:i.location,revalidation:i.revalidation,component:y,error:x,children:S(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):S()},null)}function Cd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function my(s){let t=ft.useContext(Fs);return We(t,Cd(s)),t}function gy(s){let t=ft.useContext(Wu);return We(t,Cd(s)),t}function _y(s){let t=ft.useContext(ha);return We(t,Cd(s)),t}function wd(s){let t=_y(s),i=t.matches[t.matches.length-1];return We(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function vy(){return wd("useRouteId")}function xy(){var r;let s=ft.useContext(Rd),t=gy("useRouteError"),i=wd("useRouteError");return s!==void 0?s:(r=t.errors)==null?void 0:r[i]}function Sy(){let{router:s}=my("useNavigate"),t=wd("useNavigate"),i=ft.useRef(!1);return Lv(()=>{i.current=!0}),ft.useCallback(async(l,u={})=>{Ni(i.current,Uv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...u}))},[s,t])}var y_={};function Ov(s,t,i){!t&&!y_[s]&&(y_[s]=!0,Ni(!1,i))}ft.memo(yy);function yy({routes:s,future:t,state:i}){return Nv(s,void 0,i,t)}function wi(s){We(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function My({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){We(!Zo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),d=ft.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof i=="string"&&(i=Bs(i));let{pathname:p="/",search:m="",hash:_="",state:x=null,key:v="default"}=i,y=ft.useMemo(()=>{let E=Xa(p,f);return E==null?null:{location:{pathname:E,search:m,hash:_,state:x,key:v},navigationType:r}},[f,p,m,_,x,v,r]);return Ni(y!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${_}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:ft.createElement(Pi.Provider,{value:d},ft.createElement(jo.Provider,{children:t,value:y}))}function Ey({children:s,location:t}){return uy(Fh(s),t)}function Fh(s,t=[]){let i=[];return ft.Children.forEach(s,(r,l)=>{if(!ft.isValidElement(r))return;let u=[...t,l];if(r.type===ft.Fragment){i.push.apply(i,Fh(r.props.children,u));return}We(r.type===wi,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),We(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Fh(r.props.children,u)),i.push(f)}),i}var Lu="get",Nu="application/x-www-form-urlencoded";function qu(s){return s!=null&&typeof s.tagName=="string"}function Ty(s){return qu(s)&&s.tagName.toLowerCase()==="button"}function by(s){return qu(s)&&s.tagName.toLowerCase()==="form"}function Ay(s){return qu(s)&&s.tagName.toLowerCase()==="input"}function Ry(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Cy(s,t){return s.button===0&&(!t||t==="_self")&&!Ry(s)}var lu=null;function wy(){if(lu===null)try{new FormData(document.createElement("form"),0),lu=!1}catch{lu=!0}return lu}var Dy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function rh(s){return s!=null&&!Dy.has(s)?(Ni(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Nu}"`),null):s}function Uy(s,t){let i,r,l,u,f;if(by(s)){let d=s.getAttribute("action");r=d?Xa(d,t):null,i=s.getAttribute("method")||Lu,l=rh(s.getAttribute("enctype"))||Nu,u=new FormData(s)}else if(Ty(s)||Ay(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=s.getAttribute("formaction")||d.getAttribute("action");if(r=p?Xa(p,t):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Lu,l=rh(s.getAttribute("formenctype"))||rh(d.getAttribute("enctype"))||Nu,u=new FormData(d,s),!wy()){let{name:m,type:_,value:x}=s;if(_==="image"){let v=m?`${m}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else m&&u.append(m,x)}}else{if(qu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Lu,r=null,l=Nu,f=s}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:f}}function Dd(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}async function Ly(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ny(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Oy(s,t,i){let r=await Promise.all(s.map(async l=>{let u=t.routes[l.route.id];if(u){let f=await Ly(u,i);return f.links?f.links():[]}return[]}));return Fy(r.flat(1).filter(Ny).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function M_(s,t,i,r,l,u){let f=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,d=(p,m)=>{var _;return i[m].pathname!==p.pathname||((_=i[m].route.path)==null?void 0:_.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return u==="assets"?t.filter((p,m)=>f(p,m)||d(p,m)):u==="data"?t.filter((p,m)=>{var x;let _=r.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(f(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(s,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Py(s,t,{includeHydrateFallback:i}={}){return zy(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function zy(s){return[...new Set(s)]}function By(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function Fy(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let u=JSON.stringify(By(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function Iy(s){let t=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return t.pathname==="/"?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function Hy(){let s=ft.useContext(Fs);return Dd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Gy(){let s=ft.useContext(Wu);return Dd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Ud=ft.createContext(void 0);Ud.displayName="FrameworkContext";function Pv(){let s=ft.useContext(Ud);return Dd(s,"You must render this element inside a <HydratedRouter> element"),s}function Vy(s,t){let i=ft.useContext(Ud),[r,l]=ft.useState(!1),[u,f]=ft.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:_,onTouchStart:x}=t,v=ft.useRef(null);ft.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let C=g=>{g.forEach(O=>{f(O.isIntersecting)})},S=new IntersectionObserver(C,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[s]),ft.useEffect(()=>{if(r){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[r]);let y=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[u,v,{}]:[u,v,{onFocus:Io(d,y),onBlur:Io(p,E),onMouseEnter:Io(m,y),onMouseLeave:Io(_,E),onTouchStart:Io(x,y)}]:[!1,v,{}]}function Io(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function ky({page:s,...t}){let{router:i}=Hy(),r=ft.useMemo(()=>Tv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?ft.createElement(Wy,{page:s,matches:r,...t}):null}function Xy(s){let{manifest:t,routeModules:i}=Pv(),[r,l]=ft.useState([]);return ft.useEffect(()=>{let u=!1;return Oy(s,t,i).then(f=>{u||l(f)}),()=>{u=!0}},[s,t,i]),r}function Wy({page:s,matches:t,...i}){let r=Ya(),{manifest:l,routeModules:u}=Pv(),{loaderData:f,matches:d}=Gy(),p=ft.useMemo(()=>M_(s,t,d,l,r,"data"),[s,t,d,l,r]),m=ft.useMemo(()=>M_(s,t,d,l,r,"assets"),[s,t,d,l,r]),_=ft.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let y=new Set,E=!1;if(t.forEach(S=>{var O;let g=l.routes[S.route.id];!g||!g.hasLoader||(!p.some(U=>U.route.id===S.route.id)&&S.route.id in f&&((O=u[S.route.id])!=null&&O.shouldRevalidate)||g.hasClientLoader?E=!0:y.add(S.route.id))}),y.size===0)return[];let C=Iy(s);return E&&y.size>0&&C.searchParams.set("_routes",t.filter(S=>y.has(S.route.id)).map(S=>S.route.id).join(",")),[C.pathname+C.search]},[f,r,l,p,t,s,u]),x=ft.useMemo(()=>Py(m,l),[m,l]),v=Xy(m);return ft.createElement(ft.Fragment,null,_.map(y=>ft.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...i})),x.map(y=>ft.createElement("link",{key:y,rel:"modulepreload",href:y,...i})),v.map(({key:y,link:E})=>ft.createElement("link",{key:y,...E})))}function qy(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var zv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zv&&(window.__reactRouterVersion="7.2.0")}catch{}function Yy({basename:s,children:t,window:i}){let r=ft.useRef();r.current==null&&(r.current=OS({window:i,v5Compat:!0}));let l=r.current,[u,f]=ft.useState({action:l.action,location:l.location}),d=ft.useCallback(p=>{ft.startTransition(()=>f(p))},[f]);return ft.useLayoutEffect(()=>l.listen(d),[l,d]),ft.createElement(My,{basename:s,children:t,location:u.location,navigationType:u.action,navigator:l})}var Bv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ra=ft.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,state:d,target:p,to:m,preventScrollReset:_,viewTransition:x,...v},y){let{basename:E}=ft.useContext(Pi),C=typeof m=="string"&&Bv.test(m),S,g=!1;if(typeof m=="string"&&C&&(S=m,zv))try{let w=new URL(window.location.href),b=m.startsWith("//")?new URL(w.protocol+m):new URL(m),I=Xa(b.pathname,E);b.origin===w.origin&&I!=null?m=I+b.search+b.hash:g=!0}catch{Ni(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=sy(m,{relative:l}),[U,D,F]=Vy(r,v),H=Qy(m,{replace:f,state:d,target:p,preventScrollReset:_,relative:l,viewTransition:x});function B(w){t&&t(w),w.defaultPrevented||H(w)}let Z=ft.createElement("a",{...v,...F,href:S||O,onClick:g||u?t:B,ref:qy(y,D),target:p,"data-discover":!C&&i==="render"?"true":void 0});return U&&!C?ft.createElement(ft.Fragment,null,Z,ft.createElement(ky,{page:O})):Z});ra.displayName="Link";var jy=ft.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:d,children:p,...m},_){let x=Ko(f,{relative:m.relative}),v=Ya(),y=ft.useContext(Wu),{navigator:E,basename:C}=ft.useContext(Pi),S=y!=null&&nM(x)&&d===!0,g=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,O=v.pathname,U=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(O=O.toLowerCase(),U=U?U.toLowerCase():null,g=g.toLowerCase()),U&&C&&(U=Xa(U,C)||U);const D=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let F=O===g||!l&&O.startsWith(g)&&O.charAt(D)==="/",H=U!=null&&(U===g||!l&&U.startsWith(g)&&U.charAt(g.length)==="/"),B={isActive:F,isPending:H,isTransitioning:S},Z=F?t:void 0,w;typeof r=="function"?w=r(B):w=[r,F?"active":null,H?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let b=typeof u=="function"?u(B):u;return ft.createElement(ra,{...m,"aria-current":Z,className:w,ref:_,style:b,to:f,viewTransition:d},typeof p=="function"?p(B):p)});jy.displayName="NavLink";var Zy=ft.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:u,method:f=Lu,action:d,onSubmit:p,relative:m,preventScrollReset:_,viewTransition:x,...v},y)=>{let E=tM(),C=eM(d,{relative:m}),S=f.toLowerCase()==="get"?"get":"post",g=typeof d=="string"&&Bv.test(d),O=U=>{if(p&&p(U),U.defaultPrevented)return;U.preventDefault();let D=U.nativeEvent.submitter,F=(D==null?void 0:D.getAttribute("formmethod"))||f;E(D||U.currentTarget,{fetcherKey:t,method:F,navigate:i,replace:l,state:u,relative:m,preventScrollReset:_,viewTransition:x})};return ft.createElement("form",{ref:y,method:S,action:C,onSubmit:r?p:O,...v,"data-discover":!g&&s==="render"?"true":void 0})});Zy.displayName="Form";function Ky(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fv(s){let t=ft.useContext(Fs);return We(t,Ky(s)),t}function Qy(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:f}={}){let d=oy(),p=Ya(),m=Ko(s,{relative:u});return ft.useCallback(_=>{if(Cy(_,t)){_.preventDefault();let x=i!==void 0?i:qo(p)===qo(m);d(s,{replace:x,state:r,preventScrollReset:l,relative:u,viewTransition:f})}},[p,d,m,i,r,t,s,l,u,f])}var Jy=0,$y=()=>`__${String(++Jy)}__`;function tM(){let{router:s}=Fv("useSubmit"),{basename:t}=ft.useContext(Pi),i=vy();return ft.useCallback(async(r,l={})=>{let{action:u,method:f,encType:d,formData:p,body:m}=Uy(r,t);if(l.navigate===!1){let _=l.fetcherKey||$y();await s.fetch(_,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function eM(s,{relative:t}={}){let{basename:i}=ft.useContext(Pi),r=ft.useContext(ha);We(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Ko(s||".",{relative:t})},f=Ya();if(s==null){u.search=f.search;let d=new URLSearchParams(u.search),p=d.getAll("index");if(p.some(_=>_==="")){d.delete("index"),p.filter(x=>x).forEach(x=>d.append("index",x));let _=d.toString();u.search=_?`?${_}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:ua([i,u.pathname])),qo(u)}function nM(s,t={}){let i=ft.useContext(Dv);We(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fv("useViewTransitionState"),l=Ko(s,{relative:t.relative});if(!i.isTransitioning)return!1;let u=Xa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=Xa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Gu(l.pathname,f)!=null||Gu(l.pathname,u)!=null}new TextEncoder;function iM(){return xt.jsx("div",{className:"home",children:xt.jsx("h1",{children:"Hi, I'm Jachen"})})}function aM(){return xt.jsxs("div",{className:"about",children:[xt.jsx("h1",{children:"About Me"}),xt.jsx("p",{children:" First thing I wanted to do was make a light and dark mode."}),xt.jsx("p",{children:" Enjoy"})]})}function rM(){return xt.jsxs("div",{className:"projects",children:[xt.jsx("h1",{children:"My Projects"}),xt.jsxs("div",{className:"project-item",children:[xt.jsx("h3",{children:"Project One"}),xt.jsxs("p",{children:["Details",xt.jsx(ra,{to:"/trees",children:" Trees"})]})]}),xt.jsxs("div",{className:"project-item",children:[xt.jsx("h3",{children:"Project Two"}),xt.jsx("p",{children:"Details."}),xt.jsx("a",{href:"https://example.com/project-two",target:"_blank",rel:"noopener noreferrer",children:"View Project"})]})]})}function sM(){return xt.jsxs("div",{className:"contact",children:[xt.jsx("h2",{children:"Contact Me"}),xt.jsx("p",{children:"If you’d like to get in touch, please fill out the form below or reach out to me via email at jachenliu2017@gmail.com."}),xt.jsxs("form",{children:[xt.jsx("label",{htmlFor:"name",children:"Name:"}),xt.jsx("input",{type:"text",id:"name",name:"name",required:!0}),xt.jsx("label",{htmlFor:"email",children:"Email:"}),xt.jsx("input",{type:"email",id:"email",name:"email",required:!0}),xt.jsx("label",{htmlFor:"message",children:"Message:"}),xt.jsx("textarea",{id:"message",name:"message",rows:"4",required:!0}),xt.jsx("button",{type:"submit",children:"Send"})]})]})}const oM="/assets/wpst-DjzdHmnV.png";function lM(){const s=localStorage.getItem("theme")||"light",[t,i]=ft.useState(s);ft.useEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme",t)},[t]);const r=()=>{i(t==="dark"?"light":"dark")};return xt.jsxs("nav",{className:"navbar",children:[xt.jsx("div",{className:"navbar-left",children:xt.jsx("div",{className:"navbar-brand",children:xt.jsx(ra,{to:"/",children:xt.jsx("img",{src:oM,alt:"Home",className:"navbar-icon"})})})}),xt.jsxs("ul",{className:"navbar-links",children:[xt.jsx("li",{children:xt.jsx(ra,{to:"/about",className:"navbar-link",children:"About"})}),xt.jsx("li",{children:xt.jsx(ra,{to:"/projects",className:"navbar-link",children:"Projects"})}),xt.jsx("li",{children:xt.jsx(ra,{to:"/resume",className:"navbar-link",children:"Resume"})}),xt.jsx("li",{children:xt.jsx(ra,{to:"/sandbox",className:"navbar-link",children:"Sandbox"})}),xt.jsx("li",{children:xt.jsx(ra,{to:"/cards",className:"navbar-link",children:"Cards"})}),xt.jsx("button",{onClick:r,className:"theme-toggle",children:t==="light"?"Dark Mode":"Light Mode"})]})]})}function uM(){return xt.jsx("footer",{className:"footer",children:xt.jsxs("div",{className:"footer-content",children:[xt.jsxs("p",{children:["© ",new Date().getFullYear()," Jachen Liu. All rights reserved."]}),xt.jsxs("div",{className:"social-links",children:[xt.jsx("a",{href:"https://linkedin.com/in/jachenliu",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),xt.jsx("a",{href:"https://github.com/jachenliu",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]}),xt.jsxs("p",{children:["Contact: ",xt.jsx("a",{href:"mailto:jachen.liu@gmail.com",children:"jachen.liu@gmail.com"})]})]})})}function cM({children:s}){return xt.jsxs("div",{className:"layout-container",children:[xt.jsx("header",{children:xt.jsx(lM,{})}),xt.jsx("main",{className:"main-content",children:s}),xt.jsx("footer",{className:"footer",children:xt.jsx(uM,{})})]})}function fM(){return xt.jsxs("div",{className:"resume-container",children:[xt.jsx("h2",{className:"resume-title",children:"My Resume"}),xt.jsx("div",{className:"resume-viewer",children:xt.jsx("iframe",{src:"/Jachen Liu Resume 2024.pdf",title:"Jachen Liu's Resume",width:"100%",height:"500px"})}),xt.jsx("div",{className:"resume-download",children:xt.jsx("a",{href:"/Jachen_Liu_Resume.pdf",download:"Jachen Liu Resume 2024.pdf",className:"download-button",children:"Download Resume"})})]})}const hM=()=>xt.jsxs("div",{children:[xt.jsx("h1",{children:"404 - Page Not Found"}),xt.jsx("p",{children:"Sorry, the page you’re looking for doesn’t exist."})]});function dM(){return xt.jsx("div",{className:"trees",children:xt.jsx("a",{href:"/trees_density.html",children:"Trees"})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ld="174",As={ROTATE:0,DOLLY:1,PAN:2},Ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pM=0,E_=1,mM=2,Iv=1,gM=2,aa=3,Wa=0,Vn=1,sa=2,Va=0,Rs=1,T_=2,b_=3,A_=4,_M=5,Mr=100,vM=101,xM=102,SM=103,yM=104,MM=200,EM=201,TM=202,bM=203,Ih=204,Hh=205,AM=206,RM=207,CM=208,wM=209,DM=210,UM=211,LM=212,NM=213,OM=214,Gh=0,Vh=1,kh=2,Ds=3,Xh=4,Wh=5,qh=6,Yh=7,Hv=0,PM=1,zM=2,ka=0,BM=1,FM=2,IM=3,HM=4,GM=5,VM=6,kM=7,Gv=300,Us=301,Ls=302,jh=303,Zh=304,Yu=306,Kh=1e3,Tr=1001,Qh=1002,Mi=1003,XM=1004,uu=1005,Ui=1006,sh=1007,br=1008,fa=1009,Vv=1010,kv=1011,Yo=1012,Nd=1013,Rr=1014,oa=1015,Qo=1016,Od=1017,Pd=1018,Ns=1020,Xv=35902,Wv=1021,qv=1022,Si=1023,Yv=1024,jv=1025,Cs=1026,Os=1027,Zv=1028,zd=1029,Kv=1030,Bd=1031,Fd=1033,Ou=33776,Pu=33777,zu=33778,Bu=33779,Jh=35840,$h=35841,td=35842,ed=35843,nd=36196,id=37492,ad=37496,rd=37808,sd=37809,od=37810,ld=37811,ud=37812,cd=37813,fd=37814,hd=37815,dd=37816,pd=37817,md=37818,gd=37819,_d=37820,vd=37821,Fu=36492,xd=36494,Sd=36495,Qv=36283,yd=36284,Md=36285,Ed=36286,WM=3200,qM=3201,Jv=0,YM=1,Ga="",ui="srgb",Ps="srgb-linear",Vu="linear",ze="srgb",cs=7680,R_=519,jM=512,ZM=513,KM=514,$v=515,QM=516,JM=517,$M=518,tE=519,C_=35044,w_="300 es",la=2e3,ku=2001;class Dr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Iu=Math.PI/180,Td=180/Math.PI;function Jo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function ge(s,t,i){return Math.max(t,Math.min(i,s))}function eE(s,t){return(s%t+t)%t}function oh(s,t,i){return(1-i)*s+i*t}function Ho(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Hn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const nE={DEG2RAD:Iu};class ce{constructor(t=0,i=0){ce.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ge(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ge(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*r-f*l+t.x,this.y=u*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,i,r,l,u,f,d,p,m){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,d,p,m)}set(t,i,r,l,u,f,d,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],x=r[7],v=r[2],y=r[5],E=r[8],C=l[0],S=l[3],g=l[6],O=l[1],U=l[4],D=l[7],F=l[2],H=l[5],B=l[8];return u[0]=f*C+d*O+p*F,u[3]=f*S+d*U+p*H,u[6]=f*g+d*D+p*B,u[1]=m*C+_*O+x*F,u[4]=m*S+_*U+x*H,u[7]=m*g+_*D+x*B,u[2]=v*C+y*O+E*F,u[5]=v*S+y*U+E*H,u[8]=v*g+y*D+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],_=t[8];return i*f*_-i*d*m-r*u*_+r*d*p+l*u*m-l*f*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],_=t[8],x=_*f-d*m,v=d*p-_*u,y=m*u-f*p,E=i*x+r*v+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=x*C,t[1]=(l*m-_*r)*C,t[2]=(d*r-l*f)*C,t[3]=v*C,t[4]=(_*i-l*p)*C,t[5]=(l*u-d*i)*C,t[6]=y*C,t[7]=(r*p-m*i)*C,t[8]=(f*i-r*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(lh.makeScale(t,i)),this}rotate(t){return this.premultiply(lh.makeRotation(-t)),this}translate(t,i){return this.premultiply(lh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lh=new ue;function t0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Xu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function iE(){const s=Xu("canvas");return s.style.display="block",s}const D_={};function Sr(s){s in D_||(D_[s]=!0,console.warn(s))}function aE(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function rE(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sE(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const U_=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L_=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oE(){const s={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===ze&&(l.r=ca(l.r),l.g=ca(l.g),l.b=ca(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ze&&(l.r=ws(l.r),l.g=ws(l.g),l.b=ws(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?Vu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ps]:{primaries:t,whitePoint:r,transfer:Vu,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const Ce=oE();function ca(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let fs;class lE{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{fs===void 0&&(fs=Xu("canvas")),fs.width=t.width,fs.height=t.height;const r=fs.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=fs}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Xu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=ca(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ca(i[r]/255)*255):i[r]=ca(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uE=0;class Id{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=Jo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(uh(l[f].image)):u.push(uh(l[f]))}else u=uh(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function uh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cE=0;class kn extends Dr{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,r=Tr,l=Tr,u=Ui,f=br,d=Si,p=fa,m=kn.DEFAULT_ANISOTROPY,_=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=Jo(),this.name="",this.source=new Id(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kh:t.x=t.x-Math.floor(t.x);break;case Tr:t.x=t.x<0?0:1;break;case Qh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kh:t.y=t.y-Math.floor(t.y);break;case Tr:t.y=t.y<0?0:1;break;case Qh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Gv;kn.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,i=0,r=0,l=1){Ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const p=t.elements,m=p[0],_=p[4],x=p[8],v=p[1],y=p[5],E=p[9],C=p[2],S=p[6],g=p[10];if(Math.abs(_-v)<.01&&Math.abs(x-C)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+v)<.1&&Math.abs(x+C)<.1&&Math.abs(E+S)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(m+1)/2,D=(y+1)/2,F=(g+1)/2,H=(_+v)/4,B=(x+C)/4,Z=(E+S)/4;return U>D&&U>F?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=H/r,u=B/r):D>F?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=H/l,u=Z/l):F<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),r=B/u,l=Z/u),this.set(r,l,u,i),this}let O=Math.sqrt((S-E)*(S-E)+(x-C)*(x-C)+(v-_)*(v-_));return Math.abs(O)<.001&&(O=1),this.x=(S-E)/O,this.y=(x-C)/O,this.z=(v-_)/O,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this.z=ge(this.z,t.z,i.z),this.w=ge(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this.z=ge(this.z,t,i),this.w=ge(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ge(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fE extends Dr{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Ke(0,0,t,i),this.scissorTest=!1,this.viewport=new Ke(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new kn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Id(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends fE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class e0 extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hE extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wr{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,f,d){let p=r[l+0],m=r[l+1],_=r[l+2],x=r[l+3];const v=u[f+0],y=u[f+1],E=u[f+2],C=u[f+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=_,t[i+3]=x;return}if(d===1){t[i+0]=v,t[i+1]=y,t[i+2]=E,t[i+3]=C;return}if(x!==C||p!==v||m!==y||_!==E){let S=1-d;const g=p*v+m*y+_*E+x*C,O=g>=0?1:-1,U=1-g*g;if(U>Number.EPSILON){const F=Math.sqrt(U),H=Math.atan2(F,g*O);S=Math.sin(S*H)/F,d=Math.sin(d*H)/F}const D=d*O;if(p=p*S+v*D,m=m*S+y*D,_=_*S+E*D,x=x*S+C*D,S===1-d){const F=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=F,m*=F,_*=F,x*=F}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,f){const d=r[l],p=r[l+1],m=r[l+2],_=r[l+3],x=u[f],v=u[f+1],y=u[f+2],E=u[f+3];return t[i]=d*E+_*x+p*y-m*v,t[i+1]=p*E+_*v+m*x-d*y,t[i+2]=m*E+_*y+d*v-p*x,t[i+3]=_*E-d*x-p*v-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(l/2),x=d(u/2),v=p(r/2),y=p(l/2),E=p(u/2);switch(f){case"XYZ":this._x=v*_*x+m*y*E,this._y=m*y*x-v*_*E,this._z=m*_*E+v*y*x,this._w=m*_*x-v*y*E;break;case"YXZ":this._x=v*_*x+m*y*E,this._y=m*y*x-v*_*E,this._z=m*_*E-v*y*x,this._w=m*_*x+v*y*E;break;case"ZXY":this._x=v*_*x-m*y*E,this._y=m*y*x+v*_*E,this._z=m*_*E+v*y*x,this._w=m*_*x-v*y*E;break;case"ZYX":this._x=v*_*x-m*y*E,this._y=m*y*x+v*_*E,this._z=m*_*E-v*y*x,this._w=m*_*x+v*y*E;break;case"YZX":this._x=v*_*x+m*y*E,this._y=m*y*x+v*_*E,this._z=m*_*E-v*y*x,this._w=m*_*x-v*y*E;break;case"XZY":this._x=v*_*x-m*y*E,this._y=m*y*x-v*_*E,this._z=m*_*E+v*y*x,this._w=m*_*x+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],f=i[1],d=i[5],p=i[9],m=i[2],_=i[6],x=i[10],v=r+d+x;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-p)*y,this._y=(u-m)*y,this._z=(f-l)*y}else if(r>d&&r>x){const y=2*Math.sqrt(1+r-d-x);this._w=(_-p)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(u+m)/y}else if(d>x){const y=2*Math.sqrt(1+d-r-x);this._w=(u-m)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+x-r-d);this._w=(f-l)/y,this._x=(u+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,f=t._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=r*_+f*d+l*m-u*p,this._y=l*_+f*p+u*d-r*m,this._z=u*_+f*m+r*p-l*d,this._w=f*_-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,f=this._w;let d=f*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=r,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-i;return this._w=y*f+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),x=Math.sin((1-i)*_)/m,v=Math.sin(i*_)/m;return this._w=f*x+this._w*v,this._x=r*x+this._x*v,this._y=l*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,i=0,r=0){et.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(N_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(N_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*r),_=2*(d*i-u*l),x=2*(u*r-f*i);return this.x=i+p*m+f*x-d*_,this.y=r+p*_+d*m-u*x,this.z=l+p*x+u*_-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this.z=ge(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this.z=ge(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ge(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*f-r*p,this.z=r*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ch.copy(this).projectOnVector(t),this.sub(ch)}reflect(t){return this.sub(ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ge(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ch=new et,N_=new wr;class $o{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,gi):gi.fromBufferAttribute(u,f),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cu.copy(r.boundingBox)),cu.applyMatrix4(t.matrixWorld),this.union(cu)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Go),fu.subVectors(this.max,Go),hs.subVectors(t.a,Go),ds.subVectors(t.b,Go),ps.subVectors(t.c,Go),Oa.subVectors(ds,hs),Pa.subVectors(ps,ds),pr.subVectors(hs,ps);let i=[0,-Oa.z,Oa.y,0,-Pa.z,Pa.y,0,-pr.z,pr.y,Oa.z,0,-Oa.x,Pa.z,0,-Pa.x,pr.z,0,-pr.x,-Oa.y,Oa.x,0,-Pa.y,Pa.x,0,-pr.y,pr.x,0];return!fh(i,hs,ds,ps,fu)||(i=[1,0,0,0,1,0,0,0,1],!fh(i,hs,ds,ps,fu))?!1:(hu.crossVectors(Oa,Pa),i=[hu.x,hu.y,hu.z],fh(i,hs,ds,ps,fu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $i=[new et,new et,new et,new et,new et,new et,new et,new et],gi=new et,cu=new $o,hs=new et,ds=new et,ps=new et,Oa=new et,Pa=new et,pr=new et,Go=new et,fu=new et,hu=new et,mr=new et;function fh(s,t,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){mr.fromArray(s,u);const d=l.x*Math.abs(mr.x)+l.y*Math.abs(mr.y)+l.z*Math.abs(mr.z),p=t.dot(mr),m=i.dot(mr),_=r.dot(mr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const dE=new $o,Vo=new et,hh=new et;class Hd{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):dE.setFromPoints(t).getCenter(r);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Vo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(hh)),this.expandByPoint(Vo.copy(t.center).sub(hh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ta=new et,dh=new et,du=new et,za=new et,ph=new et,pu=new et,mh=new et;class n0{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){dh.copy(t).add(i).multiplyScalar(.5),du.copy(i).sub(t).normalize(),za.copy(this.origin).sub(dh);const u=t.distanceTo(i)*.5,f=-this.direction.dot(du),d=za.dot(this.direction),p=-za.dot(du),m=za.lengthSq(),_=Math.abs(1-f*f);let x,v,y,E;if(_>0)if(x=f*p-d,v=f*d-p,E=u*_,x>=0)if(v>=-E)if(v<=E){const C=1/_;x*=C,v*=C,y=x*(x+f*v+2*d)+v*(f*x+v+2*p)+m}else v=u,x=Math.max(0,-(f*v+d)),y=-x*x+v*(v+2*p)+m;else v=-u,x=Math.max(0,-(f*v+d)),y=-x*x+v*(v+2*p)+m;else v<=-E?(x=Math.max(0,-(-f*u+d)),v=x>0?-u:Math.min(Math.max(-u,-p),u),y=-x*x+v*(v+2*p)+m):v<=E?(x=0,v=Math.min(Math.max(-u,-p),u),y=v*(v+2*p)+m):(x=Math.max(0,-(f*u+d)),v=x>0?u:Math.min(Math.max(-u,-p),u),y=-x*x+v*(v+2*p)+m);else v=f>0?-u:u,x=Math.max(0,-(f*v+d)),y=-x*x+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(dh).addScaledVector(du,v),y}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(r=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(r=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),_>=0?(u=(t.min.y-v.y)*_,f=(t.max.y-v.y)*_):(u=(t.max.y-v.y)*_,f=(t.min.y-v.y)*_),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),x>=0?(d=(t.min.z-v.z)*x,p=(t.max.z-v.z)*x):(d=(t.max.z-v.z)*x,p=(t.min.z-v.z)*x),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,r,l,u){ph.subVectors(i,t),pu.subVectors(r,t),mh.crossVectors(ph,pu);let f=this.direction.dot(mh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;za.subVectors(this.origin,t);const p=d*this.direction.dot(pu.crossVectors(za,pu));if(p<0)return null;const m=d*this.direction.dot(ph.cross(za));if(m<0||p+m>f)return null;const _=-d*za.dot(mh);return _<0?null:this.at(_/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,i,r,l,u,f,d,p,m,_,x,v,y,E,C,S){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,d,p,m,_,x,v,y,E,C,S)}set(t,i,r,l,u,f,d,p,m,_,x,v,y,E,C,S){const g=this.elements;return g[0]=t,g[4]=i,g[8]=r,g[12]=l,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=x,g[14]=v,g[3]=y,g[7]=E,g[11]=C,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/ms.setFromMatrixColumn(t,0).length(),u=1/ms.setFromMatrixColumn(t,1).length(),f=1/ms.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),_=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const v=f*_,y=f*x,E=d*_,C=d*x;i[0]=p*_,i[4]=-p*x,i[8]=m,i[1]=y+E*m,i[5]=v-C*m,i[9]=-d*p,i[2]=C-v*m,i[6]=E+y*m,i[10]=f*p}else if(t.order==="YXZ"){const v=p*_,y=p*x,E=m*_,C=m*x;i[0]=v+C*d,i[4]=E*d-y,i[8]=f*m,i[1]=f*x,i[5]=f*_,i[9]=-d,i[2]=y*d-E,i[6]=C+v*d,i[10]=f*p}else if(t.order==="ZXY"){const v=p*_,y=p*x,E=m*_,C=m*x;i[0]=v-C*d,i[4]=-f*x,i[8]=E+y*d,i[1]=y+E*d,i[5]=f*_,i[9]=C-v*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const v=f*_,y=f*x,E=d*_,C=d*x;i[0]=p*_,i[4]=E*m-y,i[8]=v*m+C,i[1]=p*x,i[5]=C*m+v,i[9]=y*m-E,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const v=f*p,y=f*m,E=d*p,C=d*m;i[0]=p*_,i[4]=C-v*x,i[8]=E*x+y,i[1]=x,i[5]=f*_,i[9]=-d*_,i[2]=-m*_,i[6]=y*x+E,i[10]=v-C*x}else if(t.order==="XZY"){const v=f*p,y=f*m,E=d*p,C=d*m;i[0]=p*_,i[4]=-x,i[8]=m*_,i[1]=v*x+C,i[5]=f*_,i[9]=y*x-E,i[2]=E*x-y,i[6]=d*_,i[10]=C*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pE,t,mE)}lookAt(t,i,r){const l=this.elements;return Kn.subVectors(t,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Ba.crossVectors(r,Kn),Ba.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Ba.crossVectors(r,Kn)),Ba.normalize(),mu.crossVectors(Kn,Ba),l[0]=Ba.x,l[4]=mu.x,l[8]=Kn.x,l[1]=Ba.y,l[5]=mu.y,l[9]=Kn.y,l[2]=Ba.z,l[6]=mu.z,l[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],x=r[5],v=r[9],y=r[13],E=r[2],C=r[6],S=r[10],g=r[14],O=r[3],U=r[7],D=r[11],F=r[15],H=l[0],B=l[4],Z=l[8],w=l[12],b=l[1],I=l[5],ut=l[9],at=l[13],gt=l[2],dt=l[6],W=l[10],rt=l[14],j=l[3],Mt=l[7],N=l[11],it=l[15];return u[0]=f*H+d*b+p*gt+m*j,u[4]=f*B+d*I+p*dt+m*Mt,u[8]=f*Z+d*ut+p*W+m*N,u[12]=f*w+d*at+p*rt+m*it,u[1]=_*H+x*b+v*gt+y*j,u[5]=_*B+x*I+v*dt+y*Mt,u[9]=_*Z+x*ut+v*W+y*N,u[13]=_*w+x*at+v*rt+y*it,u[2]=E*H+C*b+S*gt+g*j,u[6]=E*B+C*I+S*dt+g*Mt,u[10]=E*Z+C*ut+S*W+g*N,u[14]=E*w+C*at+S*rt+g*it,u[3]=O*H+U*b+D*gt+F*j,u[7]=O*B+U*I+D*dt+F*Mt,u[11]=O*Z+U*ut+D*W+F*N,u[15]=O*w+U*at+D*rt+F*it,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],f=t[1],d=t[5],p=t[9],m=t[13],_=t[2],x=t[6],v=t[10],y=t[14],E=t[3],C=t[7],S=t[11],g=t[15];return E*(+u*p*x-l*m*x-u*d*v+r*m*v+l*d*y-r*p*y)+C*(+i*p*y-i*m*v+u*f*v-l*f*y+l*m*_-u*p*_)+S*(+i*m*x-i*d*y-u*f*x+r*f*y+u*d*_-r*m*_)+g*(-l*d*_-i*p*x+i*d*v+l*f*x-r*f*v+r*p*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],_=t[8],x=t[9],v=t[10],y=t[11],E=t[12],C=t[13],S=t[14],g=t[15],O=x*S*m-C*v*m+C*p*y-d*S*y-x*p*g+d*v*g,U=E*v*m-_*S*m-E*p*y+f*S*y+_*p*g-f*v*g,D=_*C*m-E*x*m+E*d*y-f*C*y-_*d*g+f*x*g,F=E*x*p-_*C*p-E*d*v+f*C*v+_*d*S-f*x*S,H=i*O+r*U+l*D+u*F;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return t[0]=O*B,t[1]=(C*v*u-x*S*u-C*l*y+r*S*y+x*l*g-r*v*g)*B,t[2]=(d*S*u-C*p*u+C*l*m-r*S*m-d*l*g+r*p*g)*B,t[3]=(x*p*u-d*v*u-x*l*m+r*v*m+d*l*y-r*p*y)*B,t[4]=U*B,t[5]=(_*S*u-E*v*u+E*l*y-i*S*y-_*l*g+i*v*g)*B,t[6]=(E*p*u-f*S*u-E*l*m+i*S*m+f*l*g-i*p*g)*B,t[7]=(f*v*u-_*p*u+_*l*m-i*v*m-f*l*y+i*p*y)*B,t[8]=D*B,t[9]=(E*x*u-_*C*u-E*r*y+i*C*y+_*r*g-i*x*g)*B,t[10]=(f*C*u-E*d*u+E*r*m-i*C*m-f*r*g+i*d*g)*B,t[11]=(_*d*u-f*x*u-_*r*m+i*x*m+f*r*y-i*d*y)*B,t[12]=F*B,t[13]=(_*C*l-E*x*l+E*r*v-i*C*v-_*r*S+i*x*S)*B,t[14]=(E*d*l-f*C*l-E*r*p+i*C*p+f*r*S-i*d*S)*B,t[15]=(f*x*l-_*d*l+_*r*p-i*x*p-f*r*v+i*d*v)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=t.x,d=t.y,p=t.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+r,_*p-l*f,0,m*p-l*d,_*p+l*f,u*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,f){return this.set(1,r,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,f=i._y,d=i._z,p=i._w,m=u+u,_=f+f,x=d+d,v=u*m,y=u*_,E=u*x,C=f*_,S=f*x,g=d*x,O=p*m,U=p*_,D=p*x,F=r.x,H=r.y,B=r.z;return l[0]=(1-(C+g))*F,l[1]=(y+D)*F,l[2]=(E-U)*F,l[3]=0,l[4]=(y-D)*H,l[5]=(1-(v+g))*H,l[6]=(S+O)*H,l[7]=0,l[8]=(E+U)*B,l[9]=(S-O)*B,l[10]=(1-(v+C))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=ms.set(l[0],l[1],l[2]).length();const f=ms.set(l[4],l[5],l[6]).length(),d=ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const m=1/u,_=1/f,x=1/d;return _i.elements[0]*=m,_i.elements[1]*=m,_i.elements[2]*=m,_i.elements[4]*=_,_i.elements[5]*=_,_i.elements[6]*=_,_i.elements[8]*=x,_i.elements[9]*=x,_i.elements[10]*=x,i.setFromRotationMatrix(_i),r.x=u,r.y=f,r.z=d,this}makePerspective(t,i,r,l,u,f,d=la){const p=this.elements,m=2*u/(i-t),_=2*u/(r-l),x=(i+t)/(i-t),v=(r+l)/(r-l);let y,E;if(d===la)y=-(f+u)/(f-u),E=-2*f*u/(f-u);else if(d===ku)y=-f/(f-u),E=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,f,d=la){const p=this.elements,m=1/(i-t),_=1/(r-l),x=1/(f-u),v=(i+t)*m,y=(r+l)*_;let E,C;if(d===la)E=(f+u)*x,C=-2*x;else if(d===ku)E=u*x,C=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=C,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const ms=new et,_i=new Qe,pE=new et(0,0,0),mE=new et(1,1,1),Ba=new et,mu=new et,Kn=new et,O_=new Qe,P_=new wr;class Oi{constructor(t=0,i=0,r=0,l=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],f=l[4],d=l[8],p=l[1],m=l[5],_=l[9],x=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(ge(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-ge(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(ge(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return O_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(O_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return P_.setFromEuler(this),this.setFromQuaternion(P_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class i0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gE=0;const z_=new et,gs=new wr,ea=new Qe,gu=new et,ko=new et,_E=new et,vE=new wr,B_=new et(1,0,0),F_=new et(0,1,0),I_=new et(0,0,1),H_={type:"added"},xE={type:"removed"},_s={type:"childadded",child:null},gh={type:"childremoved",child:null};class Cn extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const t=new et,i=new Oi,r=new wr,l=new et(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new ue}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new i0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return gs.setFromAxisAngle(t,i),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,i){return gs.setFromAxisAngle(t,i),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(B_,t)}rotateY(t){return this.rotateOnAxis(F_,t)}rotateZ(t){return this.rotateOnAxis(I_,t)}translateOnAxis(t,i){return z_.copy(t).applyQuaternion(this.quaternion),this.position.add(z_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(B_,t)}translateY(t){return this.translateOnAxis(F_,t)}translateZ(t){return this.translateOnAxis(I_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?gu.copy(t):gu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(ko,gu,this.up):ea.lookAt(gu,ko,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),gs.setFromRotationMatrix(ea),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(H_),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(xE),gh.child=t,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(H_),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,t,_E),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,vE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];u(t.shapes,x)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),_=f(t.images),x=f(t.shapes),v=f(t.skeletons),y=f(t.animations),E=f(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new et(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new et,na=new et,_h=new et,ia=new et,vs=new et,xs=new et,G_=new et,vh=new et,xh=new et,Sh=new et,yh=new Ke,Mh=new Ke,Eh=new Ke;class xi{constructor(t=new et,i=new et,r=new et){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),vi.subVectors(t,i),l.cross(vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){vi.subVectors(l,i),na.subVectors(r,i),_h.subVectors(t,i);const f=vi.dot(vi),d=vi.dot(na),p=vi.dot(_h),m=na.dot(na),_=na.dot(_h),x=f*m-d*d;if(x===0)return u.set(0,0,0),null;const v=1/x,y=(m*p-d*_)*v,E=(f*_-d*p)*v;return u.set(1-y-E,E,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,r,l,u,f,d,p){return this.getBarycoord(t,i,r,l,ia)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ia.x),p.addScaledVector(f,ia.y),p.addScaledVector(d,ia.z),p)}static getInterpolatedAttribute(t,i,r,l,u,f){return yh.setScalar(0),Mh.setScalar(0),Eh.setScalar(0),yh.fromBufferAttribute(t,i),Mh.fromBufferAttribute(t,r),Eh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(yh,u.x),f.addScaledVector(Mh,u.y),f.addScaledVector(Eh,u.z),f}static isFrontFacing(t,i,r,l){return vi.subVectors(r,i),na.subVectors(t,i),vi.cross(na).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),vi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return xi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return xi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let f,d;vs.subVectors(l,r),xs.subVectors(u,r),vh.subVectors(t,r);const p=vs.dot(vh),m=xs.dot(vh);if(p<=0&&m<=0)return i.copy(r);xh.subVectors(t,l);const _=vs.dot(xh),x=xs.dot(xh);if(_>=0&&x<=_)return i.copy(l);const v=p*x-_*m;if(v<=0&&p>=0&&_<=0)return f=p/(p-_),i.copy(r).addScaledVector(vs,f);Sh.subVectors(t,u);const y=vs.dot(Sh),E=xs.dot(Sh);if(E>=0&&y<=E)return i.copy(u);const C=y*m-p*E;if(C<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(r).addScaledVector(xs,d);const S=_*E-y*x;if(S<=0&&x-_>=0&&y-E>=0)return G_.subVectors(u,l),d=(x-_)/(x-_+(y-E)),i.copy(l).addScaledVector(G_,d);const g=1/(S+C+v);return f=C*g,d=v*g,i.copy(r).addScaledVector(vs,f).addScaledVector(xs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const a0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},_u={h:0,s:0,l:0};function Th(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class we{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ce.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ce.workingColorSpace){if(t=eE(t,1),i=ge(i,0,1),r=ge(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=Th(f,u,t+1/3),this.g=Th(f,u,t),this.b=Th(f,u,t-1/3)}return Ce.toWorkingColorSpace(this,l),this}setStyle(t,i=ui){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ui){const r=a0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ca(t.r),this.g=ca(t.g),this.b=ca(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return Ce.fromWorkingColorSpace(Rn.copy(this),t),Math.round(ge(Rn.r*255,0,255))*65536+Math.round(ge(Rn.g*255,0,255))*256+Math.round(ge(Rn.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Rn.copy(this),i);const r=Rn.r,l=Rn.g,u=Rn.b,f=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const x=f-d;switch(m=_<=.5?x/(f+d):x/(2-f-d),f){case r:p=(l-u)/x+(l<u?6:0);break;case l:p=(u-r)/x+2;break;case u:p=(r-l)/x+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Rn.copy(this),i),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=ui){Ce.fromWorkingColorSpace(Rn.copy(this),t);const i=Rn.r,r=Rn.g,l=Rn.b;return t!==ui?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+i,Fa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Fa),t.getHSL(_u);const r=oh(Fa.h,_u.h,i),l=oh(Fa.s,_u.s,i),u=oh(Fa.l,_u.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new we;we.NAMES=a0;let SE=0;class tl extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=Rs,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Hh,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(r.blending=this.blending),this.side!==Wa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ih&&(r.blendSrc=this.blendSrc),this.blendDst!==Hh&&(r.blendDst=this.blendDst),this.blendEquation!==Mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==R_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class r0 extends tl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Hv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nn=new et,vu=new ce;let yE=0;class Li{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=C_,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)vu.fromBufferAttribute(this,i),vu.applyMatrix3(t),this.setXY(i,vu.x,vu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix3(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix4(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyNormalMatrix(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.transformDirection(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ho(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ho(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ho(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ho(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ho(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==C_&&(t.usage=this.usage),t}}class s0 extends Li{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class o0 extends Li{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Ar extends Li{constructor(t,i,r){super(new Float32Array(t),i,r)}}let ME=0;const li=new Qe,bh=new Cn,Ss=new et,Qn=new $o,Xo=new $o,_n=new et;class Ur extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(t0(t)?o0:s0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ue().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,r){return li.makeTranslation(t,i,r),this.applyMatrix4(li),this}scale(t,i,r){return li.makeScale(t,i,r),this.applyMatrix4(li),this}lookAt(t){return bh.lookAt(t),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ar(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];Xo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Qn.min,Xo.min),Qn.expandByPoint(_n),_n.addVectors(Qn.max,Xo.max),Qn.expandByPoint(_n)):(Qn.expandByPoint(Xo.min),Qn.expandByPoint(Xo.max))}Qn.getCenter(r);let l=0;for(let u=0,f=t.count;u<f;u++)_n.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)_n.fromBufferAttribute(d,m),p&&(Ss.fromBufferAttribute(t,m),_n.add(Ss)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let Z=0;Z<r.count;Z++)d[Z]=new et,p[Z]=new et;const m=new et,_=new et,x=new et,v=new ce,y=new ce,E=new ce,C=new et,S=new et;function g(Z,w,b){m.fromBufferAttribute(r,Z),_.fromBufferAttribute(r,w),x.fromBufferAttribute(r,b),v.fromBufferAttribute(u,Z),y.fromBufferAttribute(u,w),E.fromBufferAttribute(u,b),_.sub(m),x.sub(m),y.sub(v),E.sub(v);const I=1/(y.x*E.y-E.x*y.y);isFinite(I)&&(C.copy(_).multiplyScalar(E.y).addScaledVector(x,-y.y).multiplyScalar(I),S.copy(x).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(I),d[Z].add(C),d[w].add(C),d[b].add(C),p[Z].add(S),p[w].add(S),p[b].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let Z=0,w=O.length;Z<w;++Z){const b=O[Z],I=b.start,ut=b.count;for(let at=I,gt=I+ut;at<gt;at+=3)g(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const U=new et,D=new et,F=new et,H=new et;function B(Z){F.fromBufferAttribute(l,Z),H.copy(F);const w=d[Z];U.copy(w),U.sub(F.multiplyScalar(F.dot(w))).normalize(),D.crossVectors(H,w);const I=D.dot(p[Z])<0?-1:1;f.setXYZW(Z,U.x,U.y,U.z,I)}for(let Z=0,w=O.length;Z<w;++Z){const b=O[Z],I=b.start,ut=b.count;for(let at=I,gt=I+ut;at<gt;at+=3)B(t.getX(at+0)),B(t.getX(at+1)),B(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const l=new et,u=new et,f=new et,d=new et,p=new et,m=new et,_=new et,x=new et;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),C=t.getX(v+1),S=t.getX(v+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,S),_.subVectors(f,u),x.subVectors(l,u),_.cross(x),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,S),d.add(_),p.add(_),m.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),_.subVectors(f,u),x.subVectors(l,u),_.cross(x),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,p){const m=d.array,_=d.itemSize,x=d.normalized,v=new m.constructor(p.length*_);let y=0,E=0;for(let C=0,S=p.length;C<S;C++){d.isInterleavedBufferAttribute?y=p[C]*d.data.stride+d.offset:y=p[C]*_;for(let g=0;g<_;g++)v[E++]=m[y++]}return new Li(v,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ur,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,x=m.length;_<x;_++){const v=m[_],y=t(v,r);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,v=m.length;x<v;x++){const y=m[x];_.push(y.toJSON(t.data))}_.length>0&&(l[p]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const u=t.morphAttributes;for(const m in u){const _=[],x=u[m];for(let v=0,y=x.length;v<y;v++)_.push(x[v].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,_=f.length;m<_;m++){const x=f[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const V_=new Qe,gr=new n0,xu=new Hd,k_=new et,Su=new et,yu=new et,Mu=new et,Ah=new et,Eu=new et,X_=new et,Tu=new et;class yi extends Cn{constructor(t=new Ur,i=new r0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Eu.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],x=u[p];_!==0&&(Ah.fromBufferAttribute(x,t),f?Eu.addScaledVector(Ah,_):Eu.addScaledVector(Ah.sub(i),_))}i.add(Eu)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xu.copy(r.boundingSphere),xu.applyMatrix4(u),gr.copy(t.ray).recast(t.near),!(xu.containsPoint(gr.origin)===!1&&(gr.intersectSphere(xu,k_)===null||gr.origin.distanceToSquared(k_)>(t.far-t.near)**2))&&(V_.copy(u).invert(),gr.copy(t.ray).applyMatrix4(V_),!(r.boundingBox!==null&&gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,gr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,v=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,C=v.length;E<C;E++){const S=v[E],g=f[S.materialIndex],O=Math.max(S.start,y.start),U=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let D=O,F=U;D<F;D+=3){const H=d.getX(D),B=d.getX(D+1),Z=d.getX(D+2);l=bu(this,g,t,r,m,_,x,H,B,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let S=E,g=C;S<g;S+=3){const O=d.getX(S),U=d.getX(S+1),D=d.getX(S+2);l=bu(this,f,t,r,m,_,x,O,U,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,C=v.length;E<C;E++){const S=v[E],g=f[S.materialIndex],O=Math.max(S.start,y.start),U=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let D=O,F=U;D<F;D+=3){const H=D,B=D+1,Z=D+2;l=bu(this,g,t,r,m,_,x,H,B,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),C=Math.min(p.count,y.start+y.count);for(let S=E,g=C;S<g;S+=3){const O=S,U=S+1,D=S+2;l=bu(this,f,t,r,m,_,x,O,U,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function EE(s,t,i,r,l,u,f,d){let p;if(t.side===Vn?p=r.intersectTriangle(f,u,l,!0,d):p=r.intersectTriangle(l,u,f,t.side===Wa,d),p===null)return null;Tu.copy(d),Tu.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Tu);return m<i.near||m>i.far?null:{distance:m,point:Tu.clone(),object:s}}function bu(s,t,i,r,l,u,f,d,p,m){s.getVertexPosition(d,Su),s.getVertexPosition(p,yu),s.getVertexPosition(m,Mu);const _=EE(s,t,i,r,Su,yu,Mu,X_);if(_){const x=new et;xi.getBarycoord(X_,Su,yu,Mu,x),l&&(_.uv=xi.getInterpolatedAttribute(l,d,p,m,x,new ce)),u&&(_.uv1=xi.getInterpolatedAttribute(u,d,p,m,x,new ce)),f&&(_.normal=xi.getInterpolatedAttribute(f,d,p,m,x,new et),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new et,materialIndex:0};xi.getNormal(Su,yu,Mu,v.normal),_.face=v,_.barycoord=x}return _}class Is extends Ur{constructor(t=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],x=[];let v=0,y=0;E("z","y","x",-1,-1,r,i,t,f,u,0),E("z","y","x",1,-1,r,i,-t,f,u,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,u,4),E("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Ar(m,3)),this.setAttribute("normal",new Ar(_,3)),this.setAttribute("uv",new Ar(x,2));function E(C,S,g,O,U,D,F,H,B,Z,w){const b=D/B,I=F/Z,ut=D/2,at=F/2,gt=H/2,dt=B+1,W=Z+1;let rt=0,j=0;const Mt=new et;for(let N=0;N<W;N++){const it=N*I-at;for(let bt=0;bt<dt;bt++){const Ct=bt*b-ut;Mt[C]=Ct*O,Mt[S]=it*U,Mt[g]=gt,m.push(Mt.x,Mt.y,Mt.z),Mt[C]=0,Mt[S]=0,Mt[g]=H>0?1:-1,_.push(Mt.x,Mt.y,Mt.z),x.push(bt/B),x.push(1-N/Z),rt+=1}}for(let N=0;N<Z;N++)for(let it=0;it<B;it++){const bt=v+it+dt*N,Ct=v+it+dt*(N+1),q=v+(it+1)+dt*(N+1),pt=v+(it+1)+dt*N;p.push(bt,Ct,pt),p.push(Ct,q,pt),j+=6}d.addGroup(y,j,w),y+=j,v+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Pn(s){const t={};for(let i=0;i<s.length;i++){const r=zs(s[i]);for(const l in r)t[l]=r[l]}return t}function TE(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function l0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const bE={clone:zs,merge:Pn};var AE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends tl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AE,this.fragmentShader=RE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=TE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class u0 extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=la}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ia=new et,W_=new ce,q_=new ce;class ci extends u0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Td*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Iu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Td*2*Math.atan(Math.tan(Iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ia.x,Ia.y).multiplyScalar(-t/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ia.x,Ia.y).multiplyScalar(-t/Ia.z)}getViewSize(t,i){return this.getViewBounds(t,W_,q_),i.subVectors(q_,W_)}setViewOffset(t,i,r,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Iu*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*l/p,i-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ys=-90,Ms=1;class CE extends Cn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(ys,Ms,t,i);l.layers=this.layers,this.add(l);const u=new ci(ys,Ms,t,i);u.layers=this.layers,this.add(u);const f=new ci(ys,Ms,t,i);f.layers=this.layers,this.add(f);const d=new ci(ys,Ms,t,i);d.layers=this.layers,this.add(d);const p=new ci(ys,Ms,t,i);p.layers=this.layers,this.add(p);const m=new ci(ys,Ms,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,d,p]=i;for(const m of i)this.remove(m);if(t===la)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===ku)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,_]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(x,v,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class c0 extends kn{constructor(t,i,r,l,u,f,d,p,m,_){t=t!==void 0?t:[],i=i!==void 0?i:Us,super(t,i,r,l,u,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wE extends Cr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new c0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ui}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Is(5,5,5),u=new qa({name:"CubemapFromEquirect",uniforms:zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:Va});u.uniforms.tEquirect.value=i;const f=new yi(l,u),d=i.minFilter;return i.minFilter===br&&(i.minFilter=Ui),new CE(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i,r,l){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(u)}}class Au extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DE={type:"move"};class Rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Au,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Au,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Au,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const C of t.hand.values()){const S=i.getJointPose(C,r),g=this._getHandJoint(m,C);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=_.position.distanceTo(x.position),y=.02,E=.005;m.inputState.pinching&&v>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(DE)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Au;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class UE extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ch=new et,LE=new et,NE=new ue;class Ha{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Ch.subVectors(r,i).cross(LE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Ch),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||NE.getNormalMatrix(t),l=this.coplanarPoint(Ch).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Hd,Ru=new et;class Gd{constructor(t=new Ha,i=new Ha,r=new Ha,l=new Ha,u=new Ha,f=new Ha){this.planes=[t,i,r,l,u,f]}set(t,i,r,l,u,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=la){const r=this.planes,l=t.elements,u=l[0],f=l[1],d=l[2],p=l[3],m=l[4],_=l[5],x=l[6],v=l[7],y=l[8],E=l[9],C=l[10],S=l[11],g=l[12],O=l[13],U=l[14],D=l[15];if(r[0].setComponents(p-u,v-m,S-y,D-g).normalize(),r[1].setComponents(p+u,v+m,S+y,D+g).normalize(),r[2].setComponents(p+f,v+_,S+E,D+O).normalize(),r[3].setComponents(p-f,v-_,S-E,D-O).normalize(),r[4].setComponents(p-d,v-x,S-C,D-U).normalize(),i===la)r[5].setComponents(p+d,v+x,S+C,D+U).normalize();else if(i===ku)r[5].setComponents(d,x,C,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ru.x=l.normal.x>0?t.max.x:t.min.x,Ru.y=l.normal.y>0?t.max.y:t.min.y,Ru.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ru)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class f0 extends kn{constructor(t,i,r,l,u,f,d,p,m,_=Cs){if(_!==Cs&&_!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Cs&&(r=Rr),r===void 0&&_===Os&&(r=Ns),super(null,l,u,f,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Mi,this.minFilter=p!==void 0?p:Mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Id(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class el extends Ur{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,f=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,_=p+1,x=t/d,v=i/p,y=[],E=[],C=[],S=[];for(let g=0;g<_;g++){const O=g*v-f;for(let U=0;U<m;U++){const D=U*x-u;E.push(D,-O,0),C.push(0,0,1),S.push(U/d),S.push(1-g/p)}}for(let g=0;g<p;g++)for(let O=0;O<d;O++){const U=O+m*g,D=O+m*(g+1),F=O+1+m*(g+1),H=O+1+m*g;y.push(U,D,H),y.push(D,F,H)}this.setIndex(y),this.setAttribute("position",new Ar(E,3)),this.setAttribute("normal",new Ar(C,3)),this.setAttribute("uv",new Ar(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.width,t.height,t.widthSegments,t.heightSegments)}}class Y_ extends tl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jv,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class OE extends tl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class PE extends tl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class h0 extends Cn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const wh=new Qe,j_=new et,Z_=new et;class zE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gd,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;j_.setFromMatrixPosition(t.matrixWorld),i.position.copy(j_),Z_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Z_),i.updateMatrixWorld(),wh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(wh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class d0 extends u0{constructor(t=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,f=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class BE extends zE{constructor(){super(new d0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class FE extends h0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new BE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class IE extends h0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class HE extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class K_{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(ge(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class GE extends Dr{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Q_(s,t,i,r){const l=VE(r);switch(i){case Wv:return s*t;case Yv:return s*t;case jv:return s*t*2;case Zv:return s*t/l.components*l.byteLength;case zd:return s*t/l.components*l.byteLength;case Kv:return s*t*2/l.components*l.byteLength;case Bd:return s*t*2/l.components*l.byteLength;case qv:return s*t*3/l.components*l.byteLength;case Si:return s*t*4/l.components*l.byteLength;case Fd:return s*t*4/l.components*l.byteLength;case Ou:case Pu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zu:case Bu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $h:case ed:return Math.max(s,16)*Math.max(t,8)/4;case Jh:case td:return Math.max(s,8)*Math.max(t,8)/2;case nd:case id:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ad:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case rd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case od:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ld:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ud:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case cd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case fd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case hd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case dd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case pd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case md:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case gd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case _d:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case vd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Fu:case xd:case Sd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Qv:case yd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Md:case Ed:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function VE(s){switch(s){case fa:case Vv:return{byteLength:1,components:1};case Yo:case kv:case Qo:return{byteLength:2,components:1};case Od:case Pd:return{byteLength:2,components:4};case Rr:case Nd:case oa:return{byteLength:4,components:1};case Xv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ld);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function p0(){let s=null,t=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function kE(s){const t=new WeakMap;function i(d,p){const m=d.array,_=d.usage,x=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,_),d.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,p,m){const _=p.array,x=p.updateRanges;if(s.bindBuffer(m,d),x.length===0)s.bufferSubData(m,0,_);else{x.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<x.length;y++){const E=x[v],C=x[y];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++v,x[v]=C)}x.length=v+1;for(let y=0,E=x.length;y<E;y++){const C=x[y];s.bufferSubData(m,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(s.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:f}}var XE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WE=`#ifdef USE_ALPHAHASH
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
#endif`,qE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KE=`#ifdef USE_AOMAP
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
#endif`,QE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JE=`#ifdef USE_BATCHING
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
#endif`,$E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iT=`#ifdef USE_IRIDESCENCE
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
#endif`,aT=`#ifdef USE_BUMPMAP
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
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dT=`#define PI 3.141592653589793
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
} // validated`,pT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mT=`vec3 transformedNormal = objectNormal;
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
#endif`,gT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_T=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ST="gl_FragColor = linearToOutputTexel( gl_FragColor );",yT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MT=`#ifdef USE_ENVMAP
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
#endif`,ET=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TT=`#ifdef USE_ENVMAP
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
#endif`,bT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
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
#endif`,RT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UT=`#ifdef USE_GRADIENTMAP
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
}`,LT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PT=`uniform bool receiveShadow;
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
#endif`,zT=`#ifdef USE_ENVMAP
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
#endif`,BT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GT=`PhysicalMaterial material;
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
#endif`,VT=`struct PhysicalMaterial {
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
}`,kT=`
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
#endif`,XT=`#if defined( RE_IndirectDiffuse )
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
#endif`,WT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$T=`#if defined( USE_POINTS_UV )
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
#endif`,tb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ab=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rb=`#ifdef USE_MORPHTARGETS
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
#endif`,sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hb=`#ifdef USE_NORMALMAP
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
#endif`,db=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cb=`float getShadowMask() {
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
}`,wb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Db=`#ifdef USE_SKINNING
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
#endif`,Ub=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lb=`#ifdef USE_SKINNING
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
#endif`,Nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bb=`#ifdef USE_TRANSMISSION
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
#endif`,Fb=`#ifdef USE_TRANSMISSION
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
#endif`,Ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xb=`uniform sampler2D t2D;
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
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`#include <common>
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
}`,Kb=`#if DEPTH_PACKING == 3200
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
}`,Qb=`#define DISTANCE
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
}`,Jb=`#define DISTANCE
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
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eA=`uniform float scale;
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
}`,nA=`uniform vec3 diffuse;
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
}`,iA=`#include <common>
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
}`,aA=`uniform vec3 diffuse;
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
}`,rA=`#define LAMBERT
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
}`,sA=`#define LAMBERT
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
}`,oA=`#define MATCAP
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
}`,lA=`#define MATCAP
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
}`,uA=`#define NORMAL
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
}`,cA=`#define NORMAL
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
}`,fA=`#define PHONG
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
}`,hA=`#define PHONG
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
}`,dA=`#define STANDARD
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
}`,pA=`#define STANDARD
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
}`,mA=`#define TOON
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
}`,gA=`#define TOON
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
}`,_A=`uniform float size;
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
}`,vA=`uniform vec3 diffuse;
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
}`,xA=`#include <common>
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
}`,SA=`uniform vec3 color;
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
}`,yA=`uniform float rotation;
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
}`,MA=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:XE,alphahash_pars_fragment:WE,alphamap_fragment:qE,alphamap_pars_fragment:YE,alphatest_fragment:jE,alphatest_pars_fragment:ZE,aomap_fragment:KE,aomap_pars_fragment:QE,batching_pars_vertex:JE,batching_vertex:$E,begin_vertex:tT,beginnormal_vertex:eT,bsdfs:nT,iridescence_fragment:iT,bumpmap_pars_fragment:aT,clipping_planes_fragment:rT,clipping_planes_pars_fragment:sT,clipping_planes_pars_vertex:oT,clipping_planes_vertex:lT,color_fragment:uT,color_pars_fragment:cT,color_pars_vertex:fT,color_vertex:hT,common:dT,cube_uv_reflection_fragment:pT,defaultnormal_vertex:mT,displacementmap_pars_vertex:gT,displacementmap_vertex:_T,emissivemap_fragment:vT,emissivemap_pars_fragment:xT,colorspace_fragment:ST,colorspace_pars_fragment:yT,envmap_fragment:MT,envmap_common_pars_fragment:ET,envmap_pars_fragment:TT,envmap_pars_vertex:bT,envmap_physical_pars_fragment:zT,envmap_vertex:AT,fog_vertex:RT,fog_pars_vertex:CT,fog_fragment:wT,fog_pars_fragment:DT,gradientmap_pars_fragment:UT,lightmap_pars_fragment:LT,lights_lambert_fragment:NT,lights_lambert_pars_fragment:OT,lights_pars_begin:PT,lights_toon_fragment:BT,lights_toon_pars_fragment:FT,lights_phong_fragment:IT,lights_phong_pars_fragment:HT,lights_physical_fragment:GT,lights_physical_pars_fragment:VT,lights_fragment_begin:kT,lights_fragment_maps:XT,lights_fragment_end:WT,logdepthbuf_fragment:qT,logdepthbuf_pars_fragment:YT,logdepthbuf_pars_vertex:jT,logdepthbuf_vertex:ZT,map_fragment:KT,map_pars_fragment:QT,map_particle_fragment:JT,map_particle_pars_fragment:$T,metalnessmap_fragment:tb,metalnessmap_pars_fragment:eb,morphinstance_vertex:nb,morphcolor_vertex:ib,morphnormal_vertex:ab,morphtarget_pars_vertex:rb,morphtarget_vertex:sb,normal_fragment_begin:ob,normal_fragment_maps:lb,normal_pars_fragment:ub,normal_pars_vertex:cb,normal_vertex:fb,normalmap_pars_fragment:hb,clearcoat_normal_fragment_begin:db,clearcoat_normal_fragment_maps:pb,clearcoat_pars_fragment:mb,iridescence_pars_fragment:gb,opaque_fragment:_b,packing:vb,premultiplied_alpha_fragment:xb,project_vertex:Sb,dithering_fragment:yb,dithering_pars_fragment:Mb,roughnessmap_fragment:Eb,roughnessmap_pars_fragment:Tb,shadowmap_pars_fragment:bb,shadowmap_pars_vertex:Ab,shadowmap_vertex:Rb,shadowmask_pars_fragment:Cb,skinbase_vertex:wb,skinning_pars_vertex:Db,skinning_vertex:Ub,skinnormal_vertex:Lb,specularmap_fragment:Nb,specularmap_pars_fragment:Ob,tonemapping_fragment:Pb,tonemapping_pars_fragment:zb,transmission_fragment:Bb,transmission_pars_fragment:Fb,uv_pars_fragment:Ib,uv_pars_vertex:Hb,uv_vertex:Gb,worldpos_vertex:Vb,background_vert:kb,background_frag:Xb,backgroundCube_vert:Wb,backgroundCube_frag:qb,cube_vert:Yb,cube_frag:jb,depth_vert:Zb,depth_frag:Kb,distanceRGBA_vert:Qb,distanceRGBA_frag:Jb,equirect_vert:$b,equirect_frag:tA,linedashed_vert:eA,linedashed_frag:nA,meshbasic_vert:iA,meshbasic_frag:aA,meshlambert_vert:rA,meshlambert_frag:sA,meshmatcap_vert:oA,meshmatcap_frag:lA,meshnormal_vert:uA,meshnormal_frag:cA,meshphong_vert:fA,meshphong_frag:hA,meshphysical_vert:dA,meshphysical_frag:pA,meshtoon_vert:mA,meshtoon_frag:gA,points_vert:_A,points_frag:vA,shadow_vert:xA,shadow_frag:SA,sprite_vert:yA,sprite_frag:MA},Nt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Di={basic:{uniforms:Pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Pn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Pn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Pn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Pn([Nt.points,Nt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Pn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Pn([Nt.common,Nt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Pn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Pn([Nt.sprite,Nt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Pn([Nt.common,Nt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Pn([Nt.lights,Nt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Di.physical={uniforms:Pn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Cu={r:0,b:0,g:0},vr=new Oi,EA=new Qe;function TA(s,t,i,r,l,u,f){const d=new we(0);let p=u===!0?0:1,m,_,x=null,v=0,y=null;function E(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:t).get(D)),D}function C(U){let D=!1;const F=E(U);F===null?g(d,p):F&&F.isColor&&(g(F,1),D=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(U,D){const F=E(D);F&&(F.isCubeTexture||F.mapping===Yu)?(_===void 0&&(_=new yi(new Is(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:zs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(H,B,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),vr.copy(D.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),_.material.uniforms.envMap.value=F,_.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(EA.makeRotationFromEuler(vr)),_.material.toneMapped=Ce.getTransfer(F.colorSpace)!==ze,(x!==F||v!==F.version||y!==s.toneMapping)&&(_.material.needsUpdate=!0,x=F,v=F.version,y=s.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):F&&F.isTexture&&(m===void 0&&(m=new yi(new el(2,2),new qa({name:"BackgroundMaterial",uniforms:zs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=F,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Ce.getTransfer(F.colorSpace)!==ze,F.matrixAutoUpdate===!0&&F.updateMatrix(),m.material.uniforms.uvTransform.value.copy(F.matrix),(x!==F||v!==F.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,x=F,v=F.version,y=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function g(U,D){U.getRGB(Cu,l0(s)),r.buffers.color.setClear(Cu.r,Cu.g,Cu.b,D,f)}function O(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,D=1){d.set(U),p=D,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,g(d,p)},render:C,addToRenderList:S,dispose:O}}function bA(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,f=!1;function d(b,I,ut,at,gt){let dt=!1;const W=x(at,ut,I);u!==W&&(u=W,m(u.object)),dt=y(b,at,ut,gt),dt&&E(b,at,ut,gt),gt!==null&&t.update(gt,s.ELEMENT_ARRAY_BUFFER),(dt||f)&&(f=!1,D(b,I,ut,at),gt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function p(){return s.createVertexArray()}function m(b){return s.bindVertexArray(b)}function _(b){return s.deleteVertexArray(b)}function x(b,I,ut){const at=ut.wireframe===!0;let gt=r[b.id];gt===void 0&&(gt={},r[b.id]=gt);let dt=gt[I.id];dt===void 0&&(dt={},gt[I.id]=dt);let W=dt[at];return W===void 0&&(W=v(p()),dt[at]=W),W}function v(b){const I=[],ut=[],at=[];for(let gt=0;gt<i;gt++)I[gt]=0,ut[gt]=0,at[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:ut,attributeDivisors:at,object:b,attributes:{},index:null}}function y(b,I,ut,at){const gt=u.attributes,dt=I.attributes;let W=0;const rt=ut.getAttributes();for(const j in rt)if(rt[j].location>=0){const N=gt[j];let it=dt[j];if(it===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(it=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(it=b.instanceColor)),N===void 0||N.attribute!==it||it&&N.data!==it.data)return!0;W++}return u.attributesNum!==W||u.index!==at}function E(b,I,ut,at){const gt={},dt=I.attributes;let W=0;const rt=ut.getAttributes();for(const j in rt)if(rt[j].location>=0){let N=dt[j];N===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(N=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(N=b.instanceColor));const it={};it.attribute=N,N&&N.data&&(it.data=N.data),gt[j]=it,W++}u.attributes=gt,u.attributesNum=W,u.index=at}function C(){const b=u.newAttributes;for(let I=0,ut=b.length;I<ut;I++)b[I]=0}function S(b){g(b,0)}function g(b,I){const ut=u.newAttributes,at=u.enabledAttributes,gt=u.attributeDivisors;ut[b]=1,at[b]===0&&(s.enableVertexAttribArray(b),at[b]=1),gt[b]!==I&&(s.vertexAttribDivisor(b,I),gt[b]=I)}function O(){const b=u.newAttributes,I=u.enabledAttributes;for(let ut=0,at=I.length;ut<at;ut++)I[ut]!==b[ut]&&(s.disableVertexAttribArray(ut),I[ut]=0)}function U(b,I,ut,at,gt,dt,W){W===!0?s.vertexAttribIPointer(b,I,ut,gt,dt):s.vertexAttribPointer(b,I,ut,at,gt,dt)}function D(b,I,ut,at){C();const gt=at.attributes,dt=ut.getAttributes(),W=I.defaultAttributeValues;for(const rt in dt){const j=dt[rt];if(j.location>=0){let Mt=gt[rt];if(Mt===void 0&&(rt==="instanceMatrix"&&b.instanceMatrix&&(Mt=b.instanceMatrix),rt==="instanceColor"&&b.instanceColor&&(Mt=b.instanceColor)),Mt!==void 0){const N=Mt.normalized,it=Mt.itemSize,bt=t.get(Mt);if(bt===void 0)continue;const Ct=bt.buffer,q=bt.type,pt=bt.bytesPerElement,yt=q===s.INT||q===s.UNSIGNED_INT||Mt.gpuType===Nd;if(Mt.isInterleavedBufferAttribute){const At=Mt.data,wt=At.stride,Jt=Mt.offset;if(At.isInstancedInterleavedBuffer){for(let Bt=0;Bt<j.locationSize;Bt++)g(j.location+Bt,At.meshPerAttribute);b.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Bt=0;Bt<j.locationSize;Bt++)S(j.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,Ct);for(let Bt=0;Bt<j.locationSize;Bt++)U(j.location+Bt,it/j.locationSize,q,N,wt*pt,(Jt+it/j.locationSize*Bt)*pt,yt)}else{if(Mt.isInstancedBufferAttribute){for(let At=0;At<j.locationSize;At++)g(j.location+At,Mt.meshPerAttribute);b.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let At=0;At<j.locationSize;At++)S(j.location+At);s.bindBuffer(s.ARRAY_BUFFER,Ct);for(let At=0;At<j.locationSize;At++)U(j.location+At,it/j.locationSize,q,N,it*pt,it/j.locationSize*At*pt,yt)}}else if(W!==void 0){const N=W[rt];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(j.location,N);break;case 3:s.vertexAttrib3fv(j.location,N);break;case 4:s.vertexAttrib4fv(j.location,N);break;default:s.vertexAttrib1fv(j.location,N)}}}}O()}function F(){Z();for(const b in r){const I=r[b];for(const ut in I){const at=I[ut];for(const gt in at)_(at[gt].object),delete at[gt];delete I[ut]}delete r[b]}}function H(b){if(r[b.id]===void 0)return;const I=r[b.id];for(const ut in I){const at=I[ut];for(const gt in at)_(at[gt].object),delete at[gt];delete I[ut]}delete r[b.id]}function B(b){for(const I in r){const ut=r[I];if(ut[b.id]===void 0)continue;const at=ut[b.id];for(const gt in at)_(at[gt].object),delete at[gt];delete ut[b.id]}}function Z(){w(),f=!0,u!==l&&(u=l,m(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:w,dispose:F,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:S,disableUnusedAttributes:O}}function AA(s,t,i){let r;function l(m){r=m}function u(m,_){s.drawArrays(r,m,_),i.update(_,r,1)}function f(m,_,x){x!==0&&(s.drawArraysInstanced(r,m,_,x),i.update(_,r,x))}function d(m,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,x);let y=0;for(let E=0;E<x;E++)y+=_[E];i.update(y,r,1)}function p(m,_,x,v){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)f(m[E],_[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,_,0,v,0,x);let E=0;for(let C=0;C<x;C++)E+=_[C]*v[C];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function RA(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Si&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const Z=B===Qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==fa&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==oa&&!Z)}function p(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:F,maxSamples:H}}function CA(s){const t=this;let i=null,r=0,l=!1,u=!1;const f=new Ha,d=new ue,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const y=x.length!==0||v||r!==0||l;return l=v,r=x.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){i=_(x,v,0)},this.setState=function(x,v,y){const E=x.clippingPlanes,C=x.clipIntersection,S=x.clipShadows,g=s.get(x);if(!l||E===null||E.length===0||u&&!S)u?_(null):m();else{const O=u?0:r,U=O*4;let D=g.clippingState||null;p.value=D,D=_(E,v,U,y);for(let F=0;F!==U;++F)D[F]=i[F];g.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(x,v,y,E){const C=x!==null?x.length:0;let S=null;if(C!==0){if(S=p.value,E!==!0||S===null){const g=y+C*4,O=v.matrixWorldInverse;d.getNormalMatrix(O),(S===null||S.length<g)&&(S=new Float32Array(g));for(let U=0,D=y;U!==C;++U,D+=4)f.copy(x[U]).applyMatrix4(O,d),f.normal.toArray(S,D),S[D+3]=f.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,S}}function wA(s){let t=new WeakMap;function i(f,d){return d===jh?f.mapping=Us:d===Zh&&(f.mapping=Ls),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===jh||d===Zh)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new wE(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const bs=4,J_=[.125,.215,.35,.446,.526,.582],Er=20,Dh=new d0,$_=new we;let Uh=null,Lh=0,Nh=0,Oh=!1;const yr=(1+Math.sqrt(5))/2,Es=1/yr,tv=[new et(-yr,Es,0),new et(yr,Es,0),new et(-Es,0,yr),new et(Es,0,yr),new et(0,yr,-Es),new et(0,yr,Es),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)],DA=new et;class ev{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:f=256,position:d=DA}=u;Uh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uh,Lh,Nh),this._renderer.xr.enabled=Oh,t.scissorTest=!1,wu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Us||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:Qo,format:Si,colorSpace:Ps,depthBuffer:!1},l=nv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UA(u)),this._blurMaterial=LA(u,t,i)}return l}_compileMaterial(t){const i=new yi(this._lodPlanes[0],t);this._renderer.compile(i,Dh)}_sceneToCubeUV(t,i,r,l,u){const p=new ci(90,1,i,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,y=x.toneMapping;x.getClearColor($_),x.toneMapping=ka,x.autoClear=!1;const E=new r0({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),C=new yi(new Is,E);let S=!1;const g=t.background;g?g.isColor&&(E.color.copy(g),t.background=null,S=!0):(E.color.copy($_),S=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(p.up.set(0,m[O],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+_[O],u.y,u.z)):U===1?(p.up.set(0,0,m[O]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+_[O],u.z)):(p.up.set(0,m[O],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+_[O]));const D=this._cubeSize;wu(l,U*D,O>2?D:0,D,D),x.setRenderTarget(l),S&&x.render(C,p),x.render(t,p)}C.geometry.dispose(),C.material.dispose(),x.toneMapping=y,x.autoClear=v,t.background=g}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Us||t.mapping===Ls;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=av()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iv());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new yi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;wu(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(f,Dh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=tv[(l-u-1)%tv.length];this._blur(t,u-1,u,f,d)}i.autoClear=r}_blur(t,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",u),this._halfBlur(f,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new yi(this._lodPlanes[l],m),v=m.uniforms,y=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Er-1),C=u/E,S=isFinite(u)?1+Math.floor(_*C):Er;S>Er&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Er}`);const g=[];let O=0;for(let B=0;B<Er;++B){const Z=B/C,w=Math.exp(-Z*Z/2);g.push(w),B===0?O+=w:B<S&&(O+=2*w)}for(let B=0;B<g.length;B++)g[B]=g[B]/O;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=g,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-r;const D=this._sizeLods[l],F=3*D*(l>U-bs?l-U+bs:0),H=4*(this._cubeSize-D);wu(i,F,H,3*D,2*D),p.setRenderTarget(i),p.render(x,Dh)}}function UA(s){const t=[],i=[],r=[];let l=s;const u=s-bs+1+J_.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>s-bs?p=J_[f-s+bs-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,x=1+m,v=[_,_,x,_,x,x,_,_,x,x,_,x],y=6,E=6,C=3,S=2,g=1,O=new Float32Array(C*E*y),U=new Float32Array(S*E*y),D=new Float32Array(g*E*y);for(let H=0;H<y;H++){const B=H%3*2/3-1,Z=H>2?0:-1,w=[B,Z,0,B+2/3,Z,0,B+2/3,Z+1,0,B,Z,0,B+2/3,Z+1,0,B,Z+1,0];O.set(w,C*E*H),U.set(v,S*E*H);const b=[H,H,H,H,H,H];D.set(b,g*E*H)}const F=new Ur;F.setAttribute("position",new Li(O,C)),F.setAttribute("uv",new Li(U,S)),F.setAttribute("faceIndex",new Li(D,g)),t.push(F),l>bs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function nv(s,t,i){const r=new Cr(s,t,i);return r.texture.mapping=Yu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wu(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function LA(s,t,i){const r=new Float32Array(Er),l=new et(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Vd(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function iv(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vd(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function av(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Vd(){return`

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
	`}function NA(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===jh||p===Zh,_=p===Us||p===Ls;if(m||_){let x=t.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new ev(s)),x=m?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const y=d.image;return m&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new ev(s)),x=m?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function OA(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Sr("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function PA(s,t,i,r){const l={},u=new WeakMap;function f(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const y=u.get(v);y&&(t.remove(y),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(x,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function p(x){const v=x.attributes;for(const y in v)t.update(v[y],s.ARRAY_BUFFER)}function m(x){const v=[],y=x.index,E=x.attributes.position;let C=0;if(y!==null){const O=y.array;C=y.version;for(let U=0,D=O.length;U<D;U+=3){const F=O[U+0],H=O[U+1],B=O[U+2];v.push(F,H,H,B,B,F)}}else if(E!==void 0){const O=E.array;C=E.version;for(let U=0,D=O.length/3-1;U<D;U+=3){const F=U+0,H=U+1,B=U+2;v.push(F,H,H,B,B,F)}}else return;const S=new(t0(v)?o0:s0)(v,1);S.version=C;const g=u.get(x);g&&t.remove(g),u.set(x,S)}function _(x){const v=u.get(x);if(v){const y=x.index;y!==null&&v.version<y.version&&m(x)}else m(x);return u.get(x)}return{get:d,update:p,getWireframeAttribute:_}}function zA(s,t,i){let r;function l(v){r=v}let u,f;function d(v){u=v.type,f=v.bytesPerElement}function p(v,y){s.drawElements(r,y,u,v*f),i.update(y,r,1)}function m(v,y,E){E!==0&&(s.drawElementsInstanced(r,y,u,v*f,E),i.update(y,r,E))}function _(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,v,0,E);let S=0;for(let g=0;g<E;g++)S+=y[g];i.update(S,r,1)}function x(v,y,E,C){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<v.length;g++)m(v[g]/f,y[g],C[g]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,u,v,0,C,0,E);let g=0;for(let O=0;O<E;O++)g+=y[O]*C[O];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function BA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function FA(s,t,i){const r=new WeakMap,l=new Ke;function u(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let b=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",b)};var y=b;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),C===!0&&(D=2),S===!0&&(D=3);let F=d.attributes.position.count*D,H=1;F>t.maxTextureSize&&(H=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const B=new Float32Array(F*H*4*x),Z=new e0(B,F,H,x);Z.type=oa,Z.needsUpdate=!0;const w=D*4;for(let I=0;I<x;I++){const ut=g[I],at=O[I],gt=U[I],dt=F*H*4*I;for(let W=0;W<ut.count;W++){const rt=W*w;E===!0&&(l.fromBufferAttribute(ut,W),B[dt+rt+0]=l.x,B[dt+rt+1]=l.y,B[dt+rt+2]=l.z,B[dt+rt+3]=0),C===!0&&(l.fromBufferAttribute(at,W),B[dt+rt+4]=l.x,B[dt+rt+5]=l.y,B[dt+rt+6]=l.z,B[dt+rt+7]=0),S===!0&&(l.fromBufferAttribute(gt,W),B[dt+rt+8]=l.x,B[dt+rt+9]=l.y,B[dt+rt+10]=l.z,B[dt+rt+11]=gt.itemSize===4?l.w:1)}}v={count:x,texture:Z,size:new ce(F,H)},r.set(d,v),d.addEventListener("dispose",b)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const C=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function IA(s,t,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,x=t.get(p,_);if(l.get(x)!==m&&(t.update(x),l.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return x}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:f}}const m0=new kn,rv=new f0(1,1),g0=new e0,_0=new hE,v0=new c0,sv=[],ov=[],lv=new Float32Array(16),uv=new Float32Array(9),cv=new Float32Array(4);function Hs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=sv[l];if(u===void 0&&(u=new Float32Array(l),sv[l]=u),t!==0){r.toArray(u,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(u,d)}return u}function fn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function hn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function ju(s,t){let i=ov[t];i===void 0&&(i=new Int32Array(t),ov[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function HA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function GA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2fv(this.addr,t),hn(i,t)}}function VA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;s.uniform3fv(this.addr,t),hn(i,t)}}function kA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4fv(this.addr,t),hn(i,t)}}function XA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;cv.set(r),s.uniformMatrix2fv(this.addr,!1,cv),hn(i,r)}}function WA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;uv.set(r),s.uniformMatrix3fv(this.addr,!1,uv),hn(i,r)}}function qA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;lv.set(r),s.uniformMatrix4fv(this.addr,!1,lv),hn(i,r)}}function YA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function jA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2iv(this.addr,t),hn(i,t)}}function ZA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3iv(this.addr,t),hn(i,t)}}function KA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4iv(this.addr,t),hn(i,t)}}function QA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function JA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2uiv(this.addr,t),hn(i,t)}}function $A(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3uiv(this.addr,t),hn(i,t)}}function t1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4uiv(this.addr,t),hn(i,t)}}function e1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(rv.compareFunction=$v,u=rv):u=m0,i.setTexture2D(t||u,l)}function n1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||_0,l)}function i1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||v0,l)}function a1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||g0,l)}function r1(s){switch(s){case 5126:return HA;case 35664:return GA;case 35665:return VA;case 35666:return kA;case 35674:return XA;case 35675:return WA;case 35676:return qA;case 5124:case 35670:return YA;case 35667:case 35671:return jA;case 35668:case 35672:return ZA;case 35669:case 35673:return KA;case 5125:return QA;case 36294:return JA;case 36295:return $A;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return a1}}function s1(s,t){s.uniform1fv(this.addr,t)}function o1(s,t){const i=Hs(t,this.size,2);s.uniform2fv(this.addr,i)}function l1(s,t){const i=Hs(t,this.size,3);s.uniform3fv(this.addr,i)}function u1(s,t){const i=Hs(t,this.size,4);s.uniform4fv(this.addr,i)}function c1(s,t){const i=Hs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function f1(s,t){const i=Hs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function h1(s,t){const i=Hs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function d1(s,t){s.uniform1iv(this.addr,t)}function p1(s,t){s.uniform2iv(this.addr,t)}function m1(s,t){s.uniform3iv(this.addr,t)}function g1(s,t){s.uniform4iv(this.addr,t)}function _1(s,t){s.uniform1uiv(this.addr,t)}function v1(s,t){s.uniform2uiv(this.addr,t)}function x1(s,t){s.uniform3uiv(this.addr,t)}function S1(s,t){s.uniform4uiv(this.addr,t)}function y1(s,t,i){const r=this.cache,l=t.length,u=ju(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||m0,u[f])}function M1(s,t,i){const r=this.cache,l=t.length,u=ju(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||_0,u[f])}function E1(s,t,i){const r=this.cache,l=t.length,u=ju(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||v0,u[f])}function T1(s,t,i){const r=this.cache,l=t.length,u=ju(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||g0,u[f])}function b1(s){switch(s){case 5126:return s1;case 35664:return o1;case 35665:return l1;case 35666:return u1;case 35674:return c1;case 35675:return f1;case 35676:return h1;case 5124:case 35670:return d1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return _1;case 36294:return v1;case 36295:return x1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return T1}}class A1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=r1(i.type)}}class R1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=b1(i.type)}}class C1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Ph=/(\w+)(\])?(\[|\.)?/g;function fv(s,t){s.seq.push(t),s.map[t.id]=t}function w1(s,t,i){const r=s.name,l=r.length;for(Ph.lastIndex=0;;){const u=Ph.exec(r),f=Ph.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){fv(i,m===void 0?new A1(d,s,t):new R1(d,s,t));break}else{let x=i.map[d];x===void 0&&(x=new C1(d),fv(i,x)),i=x}}}class Hu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),f=t.getUniformLocation(i,u.name);w1(u,f,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function hv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const D1=37297;let U1=0;function L1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const d=f+1;r.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const dv=new ue;function N1(s){Ce._getMatrix(dv,Ce.workingColorSpace,s);const t=`mat3( ${dv.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(s)){case Vu:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function pv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+L1(s.getShaderSource(t),f)}else return l}function O1(s,t){const i=N1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function P1(s,t){let i;switch(t){case BM:i="Linear";break;case FM:i="Reinhard";break;case IM:i="Cineon";break;case HM:i="ACESFilmic";break;case VM:i="AgX";break;case kM:i="Neutral";break;case GM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Du=new et;function z1(){Ce.getLuminanceCoefficients(Du);const s=Du.x.toFixed(4),t=Du.y.toFixed(4),i=Du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function F1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function I1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function Wo(s){return s!==""}function mv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H1=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(s){return s.replace(H1,V1)}const G1=new Map;function V1(s,t){let i=fe[t];if(i===void 0){const r=G1.get(t);if(r!==void 0)i=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return bd(i)}const k1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _v(s){return s.replace(k1,X1)}function X1(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function vv(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function W1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Iv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===gM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function q1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Us:case Ls:t="ENVMAP_TYPE_CUBE";break;case Yu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ls:t="ENVMAP_MODE_REFRACTION";break}return t}function j1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hv:t="ENVMAP_BLENDING_MULTIPLY";break;case PM:t="ENVMAP_BLENDING_MIX";break;case zM:t="ENVMAP_BLENDING_ADD";break}return t}function Z1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function K1(s,t,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=W1(i),m=q1(i),_=Y1(i),x=j1(i),v=Z1(i),y=B1(i),E=F1(u),C=l.createProgram();let S,g,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Wo).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Wo).join(`
`),g.length>0&&(g+=`
`)):(S=[vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),g=[vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?fe.tonemapping_pars_fragment:"",i.toneMapping!==ka?P1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,O1("linearToOutputTexel",i.outputColorSpace),z1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),f=bd(f),f=mv(f,i),f=gv(f,i),d=bd(d),d=mv(d,i),d=gv(d,i),f=_v(f),d=_v(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",i.glslVersion===w_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===w_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const U=O+S+f,D=O+g+d,F=hv(l,l.VERTEX_SHADER,U),H=hv(l,l.FRAGMENT_SHADER,D);l.attachShader(C,F),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(I){if(s.debug.checkShaderErrors){const ut=l.getProgramInfoLog(C).trim(),at=l.getShaderInfoLog(F).trim(),gt=l.getShaderInfoLog(H).trim();let dt=!0,W=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(dt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,F,H);else{const rt=pv(l,F,"vertex"),j=pv(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ut+`
`+rt+`
`+j)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(at===""||gt==="")&&(W=!1);W&&(I.diagnostics={runnable:dt,programLog:ut,vertexShader:{log:at,prefix:S},fragmentShader:{log:gt,prefix:g}})}l.deleteShader(F),l.deleteShader(H),Z=new Hu(l,C),w=I1(l,C)}let Z;this.getUniforms=function(){return Z===void 0&&B(this),Z};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=l.getProgramParameter(C,D1)),b},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=U1++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=H,this}let Q1=0;class J1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new $1(t),i.set(t,r)),r}}class $1{constructor(t){this.id=Q1++,this.code=t,this.usedTimes=0}}function tR(s,t,i,r,l,u,f){const d=new i0,p=new J1,m=new Set,_=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return m.add(w),w===0?"uv":`uv${w}`}function S(w,b,I,ut,at){const gt=ut.fog,dt=at.geometry,W=w.isMeshStandardMaterial?ut.environment:null,rt=(w.isMeshStandardMaterial?i:t).get(w.envMap||W),j=rt&&rt.mapping===Yu?rt.image.height:null,Mt=E[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const N=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,it=N!==void 0?N.length:0;let bt=0;dt.morphAttributes.position!==void 0&&(bt=1),dt.morphAttributes.normal!==void 0&&(bt=2),dt.morphAttributes.color!==void 0&&(bt=3);let Ct,q,pt,yt;if(Mt){const Te=Di[Mt];Ct=Te.vertexShader,q=Te.fragmentShader}else Ct=w.vertexShader,q=w.fragmentShader,p.update(w),pt=p.getVertexShaderID(w),yt=p.getFragmentShaderID(w);const At=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),Jt=at.isInstancedMesh===!0,Bt=at.isBatchedMesh===!0,Ee=!!w.map,De=!!w.matcap,re=!!rt,z=!!w.aoMap,vn=!!w.lightMap,oe=!!w.bumpMap,de=!!w.normalMap,Wt=!!w.displacementMap,Ue=!!w.emissiveMap,qt=!!w.metalnessMap,L=!!w.roughnessMap,T=w.anisotropy>0,tt=w.clearcoat>0,ct=w.dispersion>0,St=w.iridescence>0,ht=w.sheen>0,Vt=w.transmission>0,Ut=T&&!!w.anisotropyMap,Ft=tt&&!!w.clearcoatMap,_e=tt&&!!w.clearcoatNormalMap,Tt=tt&&!!w.clearcoatRoughnessMap,It=St&&!!w.iridescenceMap,Qt=St&&!!w.iridescenceThicknessMap,kt=ht&&!!w.sheenColorMap,Ht=ht&&!!w.sheenRoughnessMap,se=!!w.specularMap,Zt=!!w.specularColorMap,Le=!!w.specularIntensityMap,k=Vt&&!!w.transmissionMap,Ot=Vt&&!!w.thicknessMap,st=!!w.gradientMap,_t=!!w.alphaMap,Dt=w.alphaTest>0,Lt=!!w.alphaHash,te=!!w.extensions;let Ve=ka;w.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(Ve=s.toneMapping);const an={shaderID:Mt,shaderType:w.type,shaderName:w.name,vertexShader:Ct,fragmentShader:q,defines:w.defines,customVertexShaderID:pt,customFragmentShaderID:yt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Bt,batchingColor:Bt&&at._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&at.instanceColor!==null,instancingMorph:Jt&&at.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:At===null?s.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Ps,alphaToCoverage:!!w.alphaToCoverage,map:Ee,matcap:De,envMap:re,envMapMode:re&&rt.mapping,envMapCubeUVHeight:j,aoMap:z,lightMap:vn,bumpMap:oe,normalMap:de,displacementMap:v&&Wt,emissiveMap:Ue,normalMapObjectSpace:de&&w.normalMapType===YM,normalMapTangentSpace:de&&w.normalMapType===Jv,metalnessMap:qt,roughnessMap:L,anisotropy:T,anisotropyMap:Ut,clearcoat:tt,clearcoatMap:Ft,clearcoatNormalMap:_e,clearcoatRoughnessMap:Tt,dispersion:ct,iridescence:St,iridescenceMap:It,iridescenceThicknessMap:Qt,sheen:ht,sheenColorMap:kt,sheenRoughnessMap:Ht,specularMap:se,specularColorMap:Zt,specularIntensityMap:Le,transmission:Vt,transmissionMap:k,thicknessMap:Ot,gradientMap:st,opaque:w.transparent===!1&&w.blending===Rs&&w.alphaToCoverage===!1,alphaMap:_t,alphaTest:Dt,alphaHash:Lt,combine:w.combine,mapUv:Ee&&C(w.map.channel),aoMapUv:z&&C(w.aoMap.channel),lightMapUv:vn&&C(w.lightMap.channel),bumpMapUv:oe&&C(w.bumpMap.channel),normalMapUv:de&&C(w.normalMap.channel),displacementMapUv:Wt&&C(w.displacementMap.channel),emissiveMapUv:Ue&&C(w.emissiveMap.channel),metalnessMapUv:qt&&C(w.metalnessMap.channel),roughnessMapUv:L&&C(w.roughnessMap.channel),anisotropyMapUv:Ut&&C(w.anisotropyMap.channel),clearcoatMapUv:Ft&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:_e&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&C(w.sheenRoughnessMap.channel),specularMapUv:se&&C(w.specularMap.channel),specularColorMapUv:Zt&&C(w.specularColorMap.channel),specularIntensityMapUv:Le&&C(w.specularIntensityMap.channel),transmissionMapUv:k&&C(w.transmissionMap.channel),thicknessMapUv:Ot&&C(w.thicknessMap.channel),alphaMapUv:_t&&C(w.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(de||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!dt.attributes.uv&&(Ee||_t),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:wt,skinning:at.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:bt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ee&&w.map.isVideoTexture===!0&&Ce.getTransfer(w.map.colorSpace)===ze,decodeVideoTextureEmissive:Ue&&w.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(w.emissiveMap.colorSpace)===ze,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===sa,flipSided:w.side===Vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:te&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&w.extensions.multiDraw===!0||Bt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return an.vertexUv1s=m.has(1),an.vertexUv2s=m.has(2),an.vertexUv3s=m.has(3),m.clear(),an}function g(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)b.push(I),b.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(O(b,w),U(b,w),b.push(s.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function O(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function U(w,b){d.disableAll(),b.supportsVertexTextures&&d.enable(0),b.instancing&&d.enable(1),b.instancingColor&&d.enable(2),b.instancingMorph&&d.enable(3),b.matcap&&d.enable(4),b.envMap&&d.enable(5),b.normalMapObjectSpace&&d.enable(6),b.normalMapTangentSpace&&d.enable(7),b.clearcoat&&d.enable(8),b.iridescence&&d.enable(9),b.alphaTest&&d.enable(10),b.vertexColors&&d.enable(11),b.vertexAlphas&&d.enable(12),b.vertexUv1s&&d.enable(13),b.vertexUv2s&&d.enable(14),b.vertexUv3s&&d.enable(15),b.vertexTangents&&d.enable(16),b.anisotropy&&d.enable(17),b.alphaHash&&d.enable(18),b.batching&&d.enable(19),b.dispersion&&d.enable(20),b.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),b.fog&&d.enable(0),b.useFog&&d.enable(1),b.flatShading&&d.enable(2),b.logarithmicDepthBuffer&&d.enable(3),b.reverseDepthBuffer&&d.enable(4),b.skinning&&d.enable(5),b.morphTargets&&d.enable(6),b.morphNormals&&d.enable(7),b.morphColors&&d.enable(8),b.premultipliedAlpha&&d.enable(9),b.shadowMapEnabled&&d.enable(10),b.doubleSided&&d.enable(11),b.flipSided&&d.enable(12),b.useDepthPacking&&d.enable(13),b.dithering&&d.enable(14),b.transmission&&d.enable(15),b.sheen&&d.enable(16),b.opaque&&d.enable(17),b.pointsUvs&&d.enable(18),b.decodeVideoTexture&&d.enable(19),b.decodeVideoTextureEmissive&&d.enable(20),b.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const b=E[w.type];let I;if(b){const ut=Di[b];I=bE.clone(ut.uniforms)}else I=w.uniforms;return I}function F(w,b){let I;for(let ut=0,at=_.length;ut<at;ut++){const gt=_[ut];if(gt.cacheKey===b){I=gt,++I.usedTimes;break}}return I===void 0&&(I=new K1(s,b,w,u),_.push(I)),I}function H(w){if(--w.usedTimes===0){const b=_.indexOf(w);_[b]=_[_.length-1],_.pop(),w.destroy()}}function B(w){p.remove(w)}function Z(){p.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:D,acquireProgram:F,releaseProgram:H,releaseShaderCache:B,programs:_,dispose:Z}}function eR(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,p){s.get(f)[d]=p}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function nR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function xv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Sv(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function f(x,v,y,E,C,S){let g=s[t];return g===void 0?(g={id:x.id,object:x,geometry:v,material:y,groupOrder:E,renderOrder:x.renderOrder,z:C,group:S},s[t]=g):(g.id=x.id,g.object=x,g.geometry=v,g.material=y,g.groupOrder=E,g.renderOrder=x.renderOrder,g.z=C,g.group=S),t++,g}function d(x,v,y,E,C,S){const g=f(x,v,y,E,C,S);y.transmission>0?r.push(g):y.transparent===!0?l.push(g):i.push(g)}function p(x,v,y,E,C,S){const g=f(x,v,y,E,C,S);y.transmission>0?r.unshift(g):y.transparent===!0?l.unshift(g):i.unshift(g)}function m(x,v){i.length>1&&i.sort(x||nR),r.length>1&&r.sort(v||xv),l.length>1&&l.sort(v||xv)}function _(){for(let x=t,v=s.length;x<v;x++){const y=s[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:p,finish:_,sort:m}}function iR(){let s=new WeakMap;function t(r,l){const u=s.get(r);let f;return u===void 0?(f=new Sv,s.set(r,[f])):l>=u.length?(f=new Sv,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function aR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new et,color:new we};break;case"SpotLight":i={position:new et,direction:new et,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new et,halfWidth:new et,halfHeight:new et};break}return s[t.id]=i,i}}}function rR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let sR=0;function oR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function lR(s){const t=new aR,i=rR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new et);const l=new et,u=new Qe,f=new Qe;function d(m){let _=0,x=0,v=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,E=0,C=0,S=0,g=0,O=0,U=0,D=0,F=0,H=0,B=0;m.sort(oR);for(let w=0,b=m.length;w<b;w++){const I=m[w],ut=I.color,at=I.intensity,gt=I.distance,dt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)_+=ut.r*at,x+=ut.g*at,v+=ut.b*at;else if(I.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(I.sh.coefficients[W],at);B++}else if(I.isDirectionalLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const rt=I.shadow,j=i.get(I);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize=rt.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=dt,r.directionalShadowMatrix[y]=I.shadow.matrix,O++}r.directional[y]=W,y++}else if(I.isSpotLight){const W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(ut).multiplyScalar(at),W.distance=gt,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,r.spot[C]=W;const rt=I.shadow;if(I.map&&(r.spotLightMap[F]=I.map,F++,rt.updateMatrices(I),I.castShadow&&H++),r.spotLightMatrix[C]=rt.matrix,I.castShadow){const j=i.get(I);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize=rt.mapSize,r.spotShadow[C]=j,r.spotShadowMap[C]=dt,D++}C++}else if(I.isRectAreaLight){const W=t.get(I);W.color.copy(ut).multiplyScalar(at),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),r.rectArea[S]=W,S++}else if(I.isPointLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const rt=I.shadow,j=i.get(I);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize=rt.mapSize,j.shadowCameraNear=rt.camera.near,j.shadowCameraFar=rt.camera.far,r.pointShadow[E]=j,r.pointShadowMap[E]=dt,r.pointShadowMatrix[E]=I.shadow.matrix,U++}r.point[E]=W,E++}else if(I.isHemisphereLight){const W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(at),W.groundColor.copy(I.groundColor).multiplyScalar(at),r.hemi[g]=W,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=v;const Z=r.hash;(Z.directionalLength!==y||Z.pointLength!==E||Z.spotLength!==C||Z.rectAreaLength!==S||Z.hemiLength!==g||Z.numDirectionalShadows!==O||Z.numPointShadows!==U||Z.numSpotShadows!==D||Z.numSpotMaps!==F||Z.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=S,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=D+F-H,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=B,Z.directionalLength=y,Z.pointLength=E,Z.spotLength=C,Z.rectAreaLength=S,Z.hemiLength=g,Z.numDirectionalShadows=O,Z.numPointShadows=U,Z.numSpotShadows=D,Z.numSpotMaps=F,Z.numLightProbes=B,r.version=sR++)}function p(m,_){let x=0,v=0,y=0,E=0,C=0;const S=_.matrixWorldInverse;for(let g=0,O=m.length;g<O;g++){const U=m[g];if(U.isDirectionalLight){const D=r.directional[x];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),x++}else if(U.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),y++}else if(U.isRectAreaLight){const D=r.rectArea[E];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),f.identity(),u.copy(U.matrixWorld),u.premultiply(S),f.extractRotation(u),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const D=r.point[v];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),v++}else if(U.isHemisphereLight){const D=r.hemi[C];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(S),C++}}}return{setup:d,setupView:p,state:r}}function yv(s){const t=new lR(s),i=[],r=[];function l(_){m.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function f(_){r.push(_)}function d(){t.setup(i)}function p(_){t.setupView(i,_)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function uR(s){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let d;return f===void 0?(d=new yv(s),t.set(l,[d])):u>=f.length?(d=new yv(s),f.push(d)):d=f[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const cR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fR=`uniform sampler2D shadow_pass;
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
}`;function hR(s,t,i){let r=new Gd;const l=new ce,u=new ce,f=new Ke,d=new OE({depthPacking:qM}),p=new PE,m={},_=i.maxTextureSize,x={[Wa]:Vn,[Vn]:Wa,[sa]:sa},v=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:cR,fragmentShader:fR}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Ur;E.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new yi(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iv;let g=this.type;this.render=function(H,B,Z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const w=s.getRenderTarget(),b=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),ut=s.state;ut.setBlending(Va),ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const at=g!==aa&&this.type===aa,gt=g===aa&&this.type!==aa;for(let dt=0,W=H.length;dt<W;dt++){const rt=H[dt],j=rt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const Mt=j.getFrameExtents();if(l.multiply(Mt),u.copy(j.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/Mt.x),l.x=u.x*Mt.x,j.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/Mt.y),l.y=u.y*Mt.y,j.mapSize.y=u.y)),j.map===null||at===!0||gt===!0){const it=this.type!==aa?{minFilter:Mi,magFilter:Mi}:{};j.map!==null&&j.map.dispose(),j.map=new Cr(l.x,l.y,it),j.map.texture.name=rt.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const N=j.getViewportCount();for(let it=0;it<N;it++){const bt=j.getViewport(it);f.set(u.x*bt.x,u.y*bt.y,u.x*bt.z,u.y*bt.w),ut.viewport(f),j.updateMatrices(rt,it),r=j.getFrustum(),D(B,Z,j.camera,rt,this.type)}j.isPointLightShadow!==!0&&this.type===aa&&O(j,Z),j.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(w,b,I)};function O(H,B){const Z=t.update(C);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Cr(l.x,l.y)),v.uniforms.shadow_pass.value=H.map.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(B,null,Z,v,C,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(B,null,Z,y,C,null)}function U(H,B,Z,w){let b=null;const I=Z.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(I!==void 0)b=I;else if(b=Z.isPointLight===!0?p:d,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const ut=b.uuid,at=B.uuid;let gt=m[ut];gt===void 0&&(gt={},m[ut]=gt);let dt=gt[at];dt===void 0&&(dt=b.clone(),gt[at]=dt,B.addEventListener("dispose",F)),b=dt}if(b.visible=B.visible,b.wireframe=B.wireframe,w===aa?b.side=B.shadowSide!==null?B.shadowSide:B.side:b.side=B.shadowSide!==null?B.shadowSide:x[B.side],b.alphaMap=B.alphaMap,b.alphaTest=B.alphaTest,b.map=B.map,b.clipShadows=B.clipShadows,b.clippingPlanes=B.clippingPlanes,b.clipIntersection=B.clipIntersection,b.displacementMap=B.displacementMap,b.displacementScale=B.displacementScale,b.displacementBias=B.displacementBias,b.wireframeLinewidth=B.wireframeLinewidth,b.linewidth=B.linewidth,Z.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ut=s.properties.get(b);ut.light=Z}return b}function D(H,B,Z,w,b){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&b===aa)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,H.matrixWorld);const at=t.update(H),gt=H.material;if(Array.isArray(gt)){const dt=at.groups;for(let W=0,rt=dt.length;W<rt;W++){const j=dt[W],Mt=gt[j.materialIndex];if(Mt&&Mt.visible){const N=U(H,Mt,w,b);H.onBeforeShadow(s,H,B,Z,at,N,j),s.renderBufferDirect(Z,null,at,N,H,j),H.onAfterShadow(s,H,B,Z,at,N,j)}}}else if(gt.visible){const dt=U(H,gt,w,b);H.onBeforeShadow(s,H,B,Z,at,dt,null),s.renderBufferDirect(Z,null,at,dt,H,null),H.onAfterShadow(s,H,B,Z,at,dt,null)}}const ut=H.children;for(let at=0,gt=ut.length;at<gt;at++)D(ut[at],B,Z,w,b)}function F(H){H.target.removeEventListener("dispose",F);for(const Z in m){const w=m[Z],b=H.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const dR={[Gh]:Vh,[kh]:qh,[Xh]:Yh,[Ds]:Wh,[Vh]:Gh,[qh]:kh,[Yh]:Xh,[Wh]:Ds};function pR(s,t){function i(){let k=!1;const Ot=new Ke;let st=null;const _t=new Ke(0,0,0,0);return{setMask:function(Dt){st!==Dt&&!k&&(s.colorMask(Dt,Dt,Dt,Dt),st=Dt)},setLocked:function(Dt){k=Dt},setClear:function(Dt,Lt,te,Ve,an){an===!0&&(Dt*=Ve,Lt*=Ve,te*=Ve),Ot.set(Dt,Lt,te,Ve),_t.equals(Ot)===!1&&(s.clearColor(Dt,Lt,te,Ve),_t.copy(Ot))},reset:function(){k=!1,st=null,_t.set(-1,0,0,0)}}}function r(){let k=!1,Ot=!1,st=null,_t=null,Dt=null;return{setReversed:function(Lt){if(Ot!==Lt){const te=t.get("EXT_clip_control");Ot?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);const Ve=Dt;Dt=null,this.setClear(Ve)}Ot=Lt},getReversed:function(){return Ot},setTest:function(Lt){Lt?At(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(Lt){st!==Lt&&!k&&(s.depthMask(Lt),st=Lt)},setFunc:function(Lt){if(Ot&&(Lt=dR[Lt]),_t!==Lt){switch(Lt){case Gh:s.depthFunc(s.NEVER);break;case Vh:s.depthFunc(s.ALWAYS);break;case kh:s.depthFunc(s.LESS);break;case Ds:s.depthFunc(s.LEQUAL);break;case Xh:s.depthFunc(s.EQUAL);break;case Wh:s.depthFunc(s.GEQUAL);break;case qh:s.depthFunc(s.GREATER);break;case Yh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=Lt}},setLocked:function(Lt){k=Lt},setClear:function(Lt){Dt!==Lt&&(Ot&&(Lt=1-Lt),s.clearDepth(Lt),Dt=Lt)},reset:function(){k=!1,st=null,_t=null,Dt=null,Ot=!1}}}function l(){let k=!1,Ot=null,st=null,_t=null,Dt=null,Lt=null,te=null,Ve=null,an=null;return{setTest:function(Te){k||(Te?At(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(Te){Ot!==Te&&!k&&(s.stencilMask(Te),Ot=Te)},setFunc:function(Te,wn,Dn){(st!==Te||_t!==wn||Dt!==Dn)&&(s.stencilFunc(Te,wn,Dn),st=Te,_t=wn,Dt=Dn)},setOp:function(Te,wn,Dn){(Lt!==Te||te!==wn||Ve!==Dn)&&(s.stencilOp(Te,wn,Dn),Lt=Te,te=wn,Ve=Dn)},setLocked:function(Te){k=Te},setClear:function(Te){an!==Te&&(s.clearStencil(Te),an=Te)},reset:function(){k=!1,Ot=null,st=null,_t=null,Dt=null,Lt=null,te=null,Ve=null,an=null}}}const u=new i,f=new r,d=new l,p=new WeakMap,m=new WeakMap;let _={},x={},v=new WeakMap,y=[],E=null,C=!1,S=null,g=null,O=null,U=null,D=null,F=null,H=null,B=new we(0,0,0),Z=0,w=!1,b=null,I=null,ut=null,at=null,gt=null;const dt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,rt=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=rt>=1):j.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=rt>=2);let Mt=null,N={};const it=s.getParameter(s.SCISSOR_BOX),bt=s.getParameter(s.VIEWPORT),Ct=new Ke().fromArray(it),q=new Ke().fromArray(bt);function pt(k,Ot,st,_t){const Dt=new Uint8Array(4),Lt=s.createTexture();s.bindTexture(k,Lt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let te=0;te<st;te++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ot,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,Dt):s.texImage2D(Ot+te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Dt);return Lt}const yt={};yt[s.TEXTURE_2D]=pt(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),At(s.DEPTH_TEST),f.setFunc(Ds),oe(!1),de(E_),At(s.CULL_FACE),z(Va);function At(k){_[k]!==!0&&(s.enable(k),_[k]=!0)}function wt(k){_[k]!==!1&&(s.disable(k),_[k]=!1)}function Jt(k,Ot){return x[k]!==Ot?(s.bindFramebuffer(k,Ot),x[k]=Ot,k===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ot),k===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Bt(k,Ot){let st=y,_t=!1;if(k){st=v.get(Ot),st===void 0&&(st=[],v.set(Ot,st));const Dt=k.textures;if(st.length!==Dt.length||st[0]!==s.COLOR_ATTACHMENT0){for(let Lt=0,te=Dt.length;Lt<te;Lt++)st[Lt]=s.COLOR_ATTACHMENT0+Lt;st.length=Dt.length,_t=!0}}else st[0]!==s.BACK&&(st[0]=s.BACK,_t=!0);_t&&s.drawBuffers(st)}function Ee(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const De={[Mr]:s.FUNC_ADD,[vM]:s.FUNC_SUBTRACT,[xM]:s.FUNC_REVERSE_SUBTRACT};De[SM]=s.MIN,De[yM]=s.MAX;const re={[MM]:s.ZERO,[EM]:s.ONE,[TM]:s.SRC_COLOR,[Ih]:s.SRC_ALPHA,[DM]:s.SRC_ALPHA_SATURATE,[CM]:s.DST_COLOR,[AM]:s.DST_ALPHA,[bM]:s.ONE_MINUS_SRC_COLOR,[Hh]:s.ONE_MINUS_SRC_ALPHA,[wM]:s.ONE_MINUS_DST_COLOR,[RM]:s.ONE_MINUS_DST_ALPHA,[UM]:s.CONSTANT_COLOR,[LM]:s.ONE_MINUS_CONSTANT_COLOR,[NM]:s.CONSTANT_ALPHA,[OM]:s.ONE_MINUS_CONSTANT_ALPHA};function z(k,Ot,st,_t,Dt,Lt,te,Ve,an,Te){if(k===Va){C===!0&&(wt(s.BLEND),C=!1);return}if(C===!1&&(At(s.BLEND),C=!0),k!==_M){if(k!==S||Te!==w){if((g!==Mr||D!==Mr)&&(s.blendEquation(s.FUNC_ADD),g=Mr,D=Mr),Te)switch(k){case Rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case T_:s.blendFunc(s.ONE,s.ONE);break;case b_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case A_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case T_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case b_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case A_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,U=null,F=null,H=null,B.set(0,0,0),Z=0,S=k,w=Te}return}Dt=Dt||Ot,Lt=Lt||st,te=te||_t,(Ot!==g||Dt!==D)&&(s.blendEquationSeparate(De[Ot],De[Dt]),g=Ot,D=Dt),(st!==O||_t!==U||Lt!==F||te!==H)&&(s.blendFuncSeparate(re[st],re[_t],re[Lt],re[te]),O=st,U=_t,F=Lt,H=te),(Ve.equals(B)===!1||an!==Z)&&(s.blendColor(Ve.r,Ve.g,Ve.b,an),B.copy(Ve),Z=an),S=k,w=!1}function vn(k,Ot){k.side===sa?wt(s.CULL_FACE):At(s.CULL_FACE);let st=k.side===Vn;Ot&&(st=!st),oe(st),k.blending===Rs&&k.transparent===!1?z(Va):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),u.setMask(k.colorWrite);const _t=k.stencilWrite;d.setTest(_t),_t&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ue(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?At(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function oe(k){b!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),b=k)}function de(k){k!==pM?(At(s.CULL_FACE),k!==I&&(k===E_?s.cullFace(s.BACK):k===mM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),I=k}function Wt(k){k!==ut&&(W&&s.lineWidth(k),ut=k)}function Ue(k,Ot,st){k?(At(s.POLYGON_OFFSET_FILL),(at!==Ot||gt!==st)&&(s.polygonOffset(Ot,st),at=Ot,gt=st)):wt(s.POLYGON_OFFSET_FILL)}function qt(k){k?At(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function L(k){k===void 0&&(k=s.TEXTURE0+dt-1),Mt!==k&&(s.activeTexture(k),Mt=k)}function T(k,Ot,st){st===void 0&&(Mt===null?st=s.TEXTURE0+dt-1:st=Mt);let _t=N[st];_t===void 0&&(_t={type:void 0,texture:void 0},N[st]=_t),(_t.type!==k||_t.texture!==Ot)&&(Mt!==st&&(s.activeTexture(st),Mt=st),s.bindTexture(k,Ot||yt[k]),_t.type=k,_t.texture=Ot)}function tt(){const k=N[Mt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ct(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qt(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(k){Ct.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Ct.copy(k))}function Ht(k){q.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function se(k,Ot){let st=m.get(Ot);st===void 0&&(st=new WeakMap,m.set(Ot,st));let _t=st.get(k);_t===void 0&&(_t=s.getUniformBlockIndex(Ot,k.name),st.set(k,_t))}function Zt(k,Ot){const _t=m.get(Ot).get(k);p.get(Ot)!==_t&&(s.uniformBlockBinding(Ot,_t,k.__bindingPointIndex),p.set(Ot,_t))}function Le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},Mt=null,N={},x={},v=new WeakMap,y=[],E=null,C=!1,S=null,g=null,O=null,U=null,D=null,F=null,H=null,B=new we(0,0,0),Z=0,w=!1,b=null,I=null,ut=null,at=null,gt=null,Ct.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:At,disable:wt,bindFramebuffer:Jt,drawBuffers:Bt,useProgram:Ee,setBlending:z,setMaterial:vn,setFlipSided:oe,setCullFace:de,setLineWidth:Wt,setPolygonOffset:Ue,setScissorTest:qt,activeTexture:L,bindTexture:T,unbindTexture:tt,compressedTexImage2D:ct,compressedTexImage3D:St,texImage2D:It,texImage3D:Qt,updateUBOMapping:se,uniformBlockBinding:Zt,texStorage2D:_e,texStorage3D:Tt,texSubImage2D:ht,texSubImage3D:Vt,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Ft,scissor:kt,viewport:Ht,reset:Le}}function mR(s,t,i,r,l,u,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ce,_=new WeakMap;let x;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return y?new OffscreenCanvas(L,T):Xu("canvas")}function C(L,T,tt){let ct=1;const St=qt(L);if((St.width>tt||St.height>tt)&&(ct=tt/Math.max(St.width,St.height)),ct<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ht=Math.floor(ct*St.width),Vt=Math.floor(ct*St.height);x===void 0&&(x=E(ht,Vt));const Ut=T?E(ht,Vt):x;return Ut.width=ht,Ut.height=Vt,Ut.getContext("2d").drawImage(L,0,0,ht,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ht+"x"+Vt+")."),Ut}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),L;return L}function S(L){return L.generateMipmaps}function g(L){s.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(L,T,tt,ct,St=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ht=T;if(T===s.RED&&(tt===s.FLOAT&&(ht=s.R32F),tt===s.HALF_FLOAT&&(ht=s.R16F),tt===s.UNSIGNED_BYTE&&(ht=s.R8)),T===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ht=s.R8UI),tt===s.UNSIGNED_SHORT&&(ht=s.R16UI),tt===s.UNSIGNED_INT&&(ht=s.R32UI),tt===s.BYTE&&(ht=s.R8I),tt===s.SHORT&&(ht=s.R16I),tt===s.INT&&(ht=s.R32I)),T===s.RG&&(tt===s.FLOAT&&(ht=s.RG32F),tt===s.HALF_FLOAT&&(ht=s.RG16F),tt===s.UNSIGNED_BYTE&&(ht=s.RG8)),T===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ht=s.RG8UI),tt===s.UNSIGNED_SHORT&&(ht=s.RG16UI),tt===s.UNSIGNED_INT&&(ht=s.RG32UI),tt===s.BYTE&&(ht=s.RG8I),tt===s.SHORT&&(ht=s.RG16I),tt===s.INT&&(ht=s.RG32I)),T===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),tt===s.UNSIGNED_INT&&(ht=s.RGB32UI),tt===s.BYTE&&(ht=s.RGB8I),tt===s.SHORT&&(ht=s.RGB16I),tt===s.INT&&(ht=s.RGB32I)),T===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),tt===s.UNSIGNED_INT&&(ht=s.RGBA32UI),tt===s.BYTE&&(ht=s.RGBA8I),tt===s.SHORT&&(ht=s.RGBA16I),tt===s.INT&&(ht=s.RGBA32I)),T===s.RGB&&tt===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),T===s.RGBA){const Vt=St?Vu:Ce.getTransfer(ct);tt===s.FLOAT&&(ht=s.RGBA32F),tt===s.HALF_FLOAT&&(ht=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(ht=Vt===ze?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function D(L,T){let tt;return L?T===null||T===Rr||T===Ns?tt=s.DEPTH24_STENCIL8:T===oa?tt=s.DEPTH32F_STENCIL8:T===Yo&&(tt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Rr||T===Ns?tt=s.DEPTH_COMPONENT24:T===oa?tt=s.DEPTH_COMPONENT32F:T===Yo&&(tt=s.DEPTH_COMPONENT16),tt}function F(L,T){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Mi&&L.minFilter!==Ui?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function H(L){const T=L.target;T.removeEventListener("dispose",H),Z(T),T.isVideoTexture&&_.delete(T)}function B(L){const T=L.target;T.removeEventListener("dispose",B),b(T)}function Z(L){const T=r.get(L);if(T.__webglInit===void 0)return;const tt=L.source,ct=v.get(tt);if(ct){const St=ct[T.__cacheKey];St.usedTimes--,St.usedTimes===0&&w(L),Object.keys(ct).length===0&&v.delete(tt)}r.remove(L)}function w(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const tt=L.source,ct=v.get(tt);delete ct[T.__cacheKey],f.memory.textures--}function b(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(T.__webglFramebuffer[ct]))for(let St=0;St<T.__webglFramebuffer[ct].length;St++)s.deleteFramebuffer(T.__webglFramebuffer[ct][St]);else s.deleteFramebuffer(T.__webglFramebuffer[ct]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ct])}else{if(Array.isArray(T.__webglFramebuffer))for(let ct=0;ct<T.__webglFramebuffer.length;ct++)s.deleteFramebuffer(T.__webglFramebuffer[ct]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ct=0;ct<T.__webglColorRenderbuffer.length;ct++)T.__webglColorRenderbuffer[ct]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ct]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=L.textures;for(let ct=0,St=tt.length;ct<St;ct++){const ht=r.get(tt[ct]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),f.memory.textures--),r.remove(tt[ct])}r.remove(L)}let I=0;function ut(){I=0}function at(){const L=I;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),I+=1,L}function gt(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function dt(L,T){const tt=r.get(L);if(L.isVideoTexture&&Wt(L),L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){const ct=L.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(tt,L,T);return}}i.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+T)}function W(L,T){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){q(tt,L,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+T)}function rt(L,T){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){q(tt,L,T);return}i.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+T)}function j(L,T){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){pt(tt,L,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+T)}const Mt={[Kh]:s.REPEAT,[Tr]:s.CLAMP_TO_EDGE,[Qh]:s.MIRRORED_REPEAT},N={[Mi]:s.NEAREST,[XM]:s.NEAREST_MIPMAP_NEAREST,[uu]:s.NEAREST_MIPMAP_LINEAR,[Ui]:s.LINEAR,[sh]:s.LINEAR_MIPMAP_NEAREST,[br]:s.LINEAR_MIPMAP_LINEAR},it={[jM]:s.NEVER,[tE]:s.ALWAYS,[ZM]:s.LESS,[$v]:s.LEQUAL,[KM]:s.EQUAL,[$M]:s.GEQUAL,[QM]:s.GREATER,[JM]:s.NOTEQUAL};function bt(L,T){if(T.type===oa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ui||T.magFilter===sh||T.magFilter===uu||T.magFilter===br||T.minFilter===Ui||T.minFilter===sh||T.minFilter===uu||T.minFilter===br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Mt[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Mt[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Mt[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,N[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,N[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,it[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Mi||T.minFilter!==uu&&T.minFilter!==br||T.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ct(L,T){let tt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",H));const ct=T.source;let St=v.get(ct);St===void 0&&(St={},v.set(ct,St));const ht=gt(T);if(ht!==L.__cacheKey){St[ht]===void 0&&(St[ht]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,tt=!0),St[ht].usedTimes++;const Vt=St[L.__cacheKey];Vt!==void 0&&(St[L.__cacheKey].usedTimes--,Vt.usedTimes===0&&w(T)),L.__cacheKey=ht,L.__webglTexture=St[ht].texture}return tt}function q(L,T,tt){let ct=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ct=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ct=s.TEXTURE_3D);const St=Ct(L,T),ht=T.source;i.bindTexture(ct,L.__webglTexture,s.TEXTURE0+tt);const Vt=r.get(ht);if(ht.version!==Vt.__version||St===!0){i.activeTexture(s.TEXTURE0+tt);const Ut=Ce.getPrimaries(Ce.workingColorSpace),Ft=T.colorSpace===Ga?null:Ce.getPrimaries(T.colorSpace),_e=T.colorSpace===Ga||Ut===Ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Tt=C(T.image,!1,l.maxTextureSize);Tt=Ue(T,Tt);const It=u.convert(T.format,T.colorSpace),Qt=u.convert(T.type);let kt=U(T.internalFormat,It,Qt,T.colorSpace,T.isVideoTexture);bt(ct,T);let Ht;const se=T.mipmaps,Zt=T.isVideoTexture!==!0,Le=Vt.__version===void 0||St===!0,k=ht.dataReady,Ot=F(T,Tt);if(T.isDepthTexture)kt=D(T.format===Os,T.type),Le&&(Zt?i.texStorage2D(s.TEXTURE_2D,1,kt,Tt.width,Tt.height):i.texImage2D(s.TEXTURE_2D,0,kt,Tt.width,Tt.height,0,It,Qt,null));else if(T.isDataTexture)if(se.length>0){Zt&&Le&&i.texStorage2D(s.TEXTURE_2D,Ot,kt,se[0].width,se[0].height);for(let st=0,_t=se.length;st<_t;st++)Ht=se[st],Zt?k&&i.texSubImage2D(s.TEXTURE_2D,st,0,0,Ht.width,Ht.height,It,Qt,Ht.data):i.texImage2D(s.TEXTURE_2D,st,kt,Ht.width,Ht.height,0,It,Qt,Ht.data);T.generateMipmaps=!1}else Zt?(Le&&i.texStorage2D(s.TEXTURE_2D,Ot,kt,Tt.width,Tt.height),k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt.width,Tt.height,It,Qt,Tt.data)):i.texImage2D(s.TEXTURE_2D,0,kt,Tt.width,Tt.height,0,It,Qt,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Zt&&Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ot,kt,se[0].width,se[0].height,Tt.depth);for(let st=0,_t=se.length;st<_t;st++)if(Ht=se[st],T.format!==Si)if(It!==null)if(Zt){if(k)if(T.layerUpdates.size>0){const Dt=Q_(Ht.width,Ht.height,T.format,T.type);for(const Lt of T.layerUpdates){const te=Ht.data.subarray(Lt*Dt/Ht.data.BYTES_PER_ELEMENT,(Lt+1)*Dt/Ht.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,Lt,Ht.width,Ht.height,1,It,te)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,Ht.width,Ht.height,Tt.depth,It,Ht.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,kt,Ht.width,Ht.height,Tt.depth,0,Ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?k&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,Ht.width,Ht.height,Tt.depth,It,Qt,Ht.data):i.texImage3D(s.TEXTURE_2D_ARRAY,st,kt,Ht.width,Ht.height,Tt.depth,0,It,Qt,Ht.data)}else{Zt&&Le&&i.texStorage2D(s.TEXTURE_2D,Ot,kt,se[0].width,se[0].height);for(let st=0,_t=se.length;st<_t;st++)Ht=se[st],T.format!==Si?It!==null?Zt?k&&i.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,Ht.width,Ht.height,It,Ht.data):i.compressedTexImage2D(s.TEXTURE_2D,st,kt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?k&&i.texSubImage2D(s.TEXTURE_2D,st,0,0,Ht.width,Ht.height,It,Qt,Ht.data):i.texImage2D(s.TEXTURE_2D,st,kt,Ht.width,Ht.height,0,It,Qt,Ht.data)}else if(T.isDataArrayTexture)if(Zt){if(Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ot,kt,Tt.width,Tt.height,Tt.depth),k)if(T.layerUpdates.size>0){const st=Q_(Tt.width,Tt.height,T.format,T.type);for(const _t of T.layerUpdates){const Dt=Tt.data.subarray(_t*st/Tt.data.BYTES_PER_ELEMENT,(_t+1)*st/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,Tt.width,Tt.height,1,It,Qt,Dt)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,Qt,Tt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,kt,Tt.width,Tt.height,Tt.depth,0,It,Qt,Tt.data);else if(T.isData3DTexture)Zt?(Le&&i.texStorage3D(s.TEXTURE_3D,Ot,kt,Tt.width,Tt.height,Tt.depth),k&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,Qt,Tt.data)):i.texImage3D(s.TEXTURE_3D,0,kt,Tt.width,Tt.height,Tt.depth,0,It,Qt,Tt.data);else if(T.isFramebufferTexture){if(Le)if(Zt)i.texStorage2D(s.TEXTURE_2D,Ot,kt,Tt.width,Tt.height);else{let st=Tt.width,_t=Tt.height;for(let Dt=0;Dt<Ot;Dt++)i.texImage2D(s.TEXTURE_2D,Dt,kt,st,_t,0,It,Qt,null),st>>=1,_t>>=1}}else if(se.length>0){if(Zt&&Le){const st=qt(se[0]);i.texStorage2D(s.TEXTURE_2D,Ot,kt,st.width,st.height)}for(let st=0,_t=se.length;st<_t;st++)Ht=se[st],Zt?k&&i.texSubImage2D(s.TEXTURE_2D,st,0,0,It,Qt,Ht):i.texImage2D(s.TEXTURE_2D,st,kt,It,Qt,Ht);T.generateMipmaps=!1}else if(Zt){if(Le){const st=qt(Tt);i.texStorage2D(s.TEXTURE_2D,Ot,kt,st.width,st.height)}k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,It,Qt,Tt)}else i.texImage2D(s.TEXTURE_2D,0,kt,It,Qt,Tt);S(T)&&g(ct),Vt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function pt(L,T,tt){if(T.image.length!==6)return;const ct=Ct(L,T),St=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+tt);const ht=r.get(St);if(St.version!==ht.__version||ct===!0){i.activeTexture(s.TEXTURE0+tt);const Vt=Ce.getPrimaries(Ce.workingColorSpace),Ut=T.colorSpace===Ga?null:Ce.getPrimaries(T.colorSpace),Ft=T.colorSpace===Ga||Vt===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const _e=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,It=[];for(let _t=0;_t<6;_t++)!_e&&!Tt?It[_t]=C(T.image[_t],!0,l.maxCubemapSize):It[_t]=Tt?T.image[_t].image:T.image[_t],It[_t]=Ue(T,It[_t]);const Qt=It[0],kt=u.convert(T.format,T.colorSpace),Ht=u.convert(T.type),se=U(T.internalFormat,kt,Ht,T.colorSpace),Zt=T.isVideoTexture!==!0,Le=ht.__version===void 0||ct===!0,k=St.dataReady;let Ot=F(T,Qt);bt(s.TEXTURE_CUBE_MAP,T);let st;if(_e){Zt&&Le&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ot,se,Qt.width,Qt.height);for(let _t=0;_t<6;_t++){st=It[_t].mipmaps;for(let Dt=0;Dt<st.length;Dt++){const Lt=st[Dt];T.format!==Si?kt!==null?Zt?k&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,0,0,Lt.width,Lt.height,kt,Lt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,se,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,0,0,Lt.width,Lt.height,kt,Ht,Lt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,se,Lt.width,Lt.height,0,kt,Ht,Lt.data)}}}else{if(st=T.mipmaps,Zt&&Le){st.length>0&&Ot++;const _t=qt(It[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ot,se,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Tt){Zt?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,It[_t].width,It[_t].height,kt,Ht,It[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,It[_t].width,It[_t].height,0,kt,Ht,It[_t].data);for(let Dt=0;Dt<st.length;Dt++){const te=st[Dt].image[_t].image;Zt?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,0,0,te.width,te.height,kt,Ht,te.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,se,te.width,te.height,0,kt,Ht,te.data)}}else{Zt?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,kt,Ht,It[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,kt,Ht,It[_t]);for(let Dt=0;Dt<st.length;Dt++){const Lt=st[Dt];Zt?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,0,0,kt,Ht,Lt.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,se,kt,Ht,Lt.image[_t])}}}S(T)&&g(s.TEXTURE_CUBE_MAP),ht.__version=St.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function yt(L,T,tt,ct,St,ht){const Vt=u.convert(tt.format,tt.colorSpace),Ut=u.convert(tt.type),Ft=U(tt.internalFormat,Vt,Ut,tt.colorSpace),_e=r.get(T),Tt=r.get(tt);if(Tt.__renderTarget=T,!_e.__hasExternalTextures){const It=Math.max(1,T.width>>ht),Qt=Math.max(1,T.height>>ht);St===s.TEXTURE_3D||St===s.TEXTURE_2D_ARRAY?i.texImage3D(St,ht,Ft,It,Qt,T.depth,0,Vt,Ut,null):i.texImage2D(St,ht,Ft,It,Qt,0,Vt,Ut,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),de(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,St,Tt.__webglTexture,0,oe(T)):(St===s.TEXTURE_2D||St>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ct,St,Tt.__webglTexture,ht),i.bindFramebuffer(s.FRAMEBUFFER,null)}function At(L,T,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const ct=T.depthTexture,St=ct&&ct.isDepthTexture?ct.type:null,ht=D(T.stencilBuffer,St),Vt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ut=oe(T);de(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut,ht,T.width,T.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,ht,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ht,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Vt,s.RENDERBUFFER,L)}else{const ct=T.textures;for(let St=0;St<ct.length;St++){const ht=ct[St],Vt=u.convert(ht.format,ht.colorSpace),Ut=u.convert(ht.type),Ft=U(ht.internalFormat,Vt,Ut,ht.colorSpace),_e=oe(T);tt&&de(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,Ft,T.width,T.height):de(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,Ft,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ft,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function wt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=r.get(T.depthTexture);ct.__renderTarget=T,(!ct.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),dt(T.depthTexture,0);const St=ct.__webglTexture,ht=oe(T);if(T.depthTexture.format===Cs)de(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0);else if(T.depthTexture.format===Os)de(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Jt(L){const T=r.get(L),tt=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ct=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ct){const St=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ct.removeEventListener("dispose",St)};ct.addEventListener("dispose",St),T.__depthDisposeCallback=St}T.__boundDepthTexture=ct}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");wt(T.__webglFramebuffer,L)}else if(tt){T.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ct]),T.__webglDepthbuffer[ct]===void 0)T.__webglDepthbuffer[ct]=s.createRenderbuffer(),At(T.__webglDepthbuffer[ct],L,!1);else{const St=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer[ct];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,ht)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),At(T.__webglDepthbuffer,L,!1);else{const ct=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,St)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(L,T,tt){const ct=r.get(L);T!==void 0&&yt(ct.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&Jt(L)}function Ee(L){const T=L.texture,tt=r.get(L),ct=r.get(T);L.addEventListener("dispose",B);const St=L.textures,ht=L.isWebGLCubeRenderTarget===!0,Vt=St.length>1;if(Vt||(ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture()),ct.__version=T.version,f.memory.textures++),ht){tt.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Ut]=[];for(let Ft=0;Ft<T.mipmaps.length;Ft++)tt.__webglFramebuffer[Ut][Ft]=s.createFramebuffer()}else tt.__webglFramebuffer[Ut]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)tt.__webglFramebuffer[Ut]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(Vt)for(let Ut=0,Ft=St.length;Ut<Ft;Ut++){const _e=r.get(St[Ut]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&de(L)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Ut=0;Ut<St.length;Ut++){const Ft=St[Ut];tt.__webglColorRenderbuffer[Ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[Ut]);const _e=u.convert(Ft.format,Ft.colorSpace),Tt=u.convert(Ft.type),It=U(Ft.internalFormat,_e,Tt,Ft.colorSpace,L.isXRRenderTarget===!0),Qt=oe(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt,It,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,tt.__webglColorRenderbuffer[Ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),At(tt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){i.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),bt(s.TEXTURE_CUBE_MAP,T);for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ft=0;Ft<T.mipmaps.length;Ft++)yt(tt.__webglFramebuffer[Ut][Ft],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Ft);else yt(tt.__webglFramebuffer[Ut],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(T)&&g(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let Ut=0,Ft=St.length;Ut<Ft;Ut++){const _e=St[Ut],Tt=r.get(_e);i.bindTexture(s.TEXTURE_2D,Tt.__webglTexture),bt(s.TEXTURE_2D,_e),yt(tt.__webglFramebuffer,L,_e,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,0),S(_e)&&g(s.TEXTURE_2D)}i.unbindTexture()}else{let Ut=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ut=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ut,ct.__webglTexture),bt(Ut,T),T.mipmaps&&T.mipmaps.length>0)for(let Ft=0;Ft<T.mipmaps.length;Ft++)yt(tt.__webglFramebuffer[Ft],L,T,s.COLOR_ATTACHMENT0,Ut,Ft);else yt(tt.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Ut,0);S(T)&&g(Ut),i.unbindTexture()}L.depthBuffer&&Jt(L)}function De(L){const T=L.textures;for(let tt=0,ct=T.length;tt<ct;tt++){const St=T[tt];if(S(St)){const ht=O(L),Vt=r.get(St).__webglTexture;i.bindTexture(ht,Vt),g(ht),i.unbindTexture()}}}const re=[],z=[];function vn(L){if(L.samples>0){if(de(L)===!1){const T=L.textures,tt=L.width,ct=L.height;let St=s.COLOR_BUFFER_BIT;const ht=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Vt=r.get(L),Ut=T.length>1;if(Ut)for(let Ft=0;Ft<T.length;Ft++)i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Ft=0;Ft<T.length;Ft++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(St|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(St|=s.STENCIL_BUFFER_BIT)),Ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[Ft]);const _e=r.get(T[Ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,tt,ct,0,0,tt,ct,St,s.NEAREST),p===!0&&(re.length=0,z.length=0,re.push(s.COLOR_ATTACHMENT0+Ft),L.depthBuffer&&L.resolveDepthBuffer===!1&&(re.push(ht),z.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ut)for(let Ft=0;Ft<T.length;Ft++){i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[Ft]);const _e=r.get(T[Ft]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.TEXTURE_2D,_e,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function oe(L){return Math.min(l.maxSamples,L.samples)}function de(L){const T=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Wt(L){const T=f.render.frame;_.get(L)!==T&&(_.set(L,T),L.update())}function Ue(L,T){const tt=L.colorSpace,ct=L.format,St=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||tt!==Ps&&tt!==Ga&&(Ce.getTransfer(tt)===ze?(ct!==Si||St!==fa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function qt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=at,this.resetTextureUnits=ut,this.setTexture2D=dt,this.setTexture2DArray=W,this.setTexture3D=rt,this.setTextureCube=j,this.rebindTextures=Bt,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=de}function gR(s,t){function i(r,l=Ga){let u;const f=Ce.getTransfer(l);if(r===fa)return s.UNSIGNED_BYTE;if(r===Od)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Pd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Xv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Vv)return s.BYTE;if(r===kv)return s.SHORT;if(r===Yo)return s.UNSIGNED_SHORT;if(r===Nd)return s.INT;if(r===Rr)return s.UNSIGNED_INT;if(r===oa)return s.FLOAT;if(r===Qo)return s.HALF_FLOAT;if(r===Wv)return s.ALPHA;if(r===qv)return s.RGB;if(r===Si)return s.RGBA;if(r===Yv)return s.LUMINANCE;if(r===jv)return s.LUMINANCE_ALPHA;if(r===Cs)return s.DEPTH_COMPONENT;if(r===Os)return s.DEPTH_STENCIL;if(r===Zv)return s.RED;if(r===zd)return s.RED_INTEGER;if(r===Kv)return s.RG;if(r===Bd)return s.RG_INTEGER;if(r===Fd)return s.RGBA_INTEGER;if(r===Ou||r===Pu||r===zu||r===Bu)if(f===ze)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ou)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ou)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jh||r===$h||r===td||r===ed)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Jh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$h)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===td)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ed)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===nd||r===id||r===ad)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===nd||r===id)return f===ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===ad)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rd||r===sd||r===od||r===ld||r===ud||r===cd||r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===rd)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sd)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===od)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ld)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ud)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cd)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fd)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hd)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dd)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pd)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===md)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gd)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_d)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vd)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fu||r===xd||r===Sd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Fu)return f===ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qv||r===yd||r===Md||r===Ed)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Fu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===yd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Md)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ed)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ns?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const _R=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vR=`
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

}`;class xR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new kn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new qa({vertexShader:_R,fragmentShader:vR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new yi(new el(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SR extends Dr{constructor(t,i){super();const r=this;let l=null,u=1,f=null,d="local-floor",p=1,m=null,_=null,x=null,v=null,y=null,E=null;const C=new xR,S=i.getContextAttributes();let g=null,O=null;const U=[],D=[],F=new ce;let H=null;const B=new ci;B.viewport=new Ke;const Z=new ci;Z.viewport=new Ke;const w=[B,Z],b=new HE;let I=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let pt=U[q];return pt===void 0&&(pt=new Rh,U[q]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(q){let pt=U[q];return pt===void 0&&(pt=new Rh,U[q]=pt),pt.getGripSpace()},this.getHand=function(q){let pt=U[q];return pt===void 0&&(pt=new Rh,U[q]=pt),pt.getHandSpace()};function at(q){const pt=D.indexOf(q.inputSource);if(pt===-1)return;const yt=U[pt];yt!==void 0&&(yt.update(q.inputSource,q.frame,m||f),yt.dispatchEvent({type:q.type,data:q.inputSource}))}function gt(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",dt);for(let q=0;q<U.length;q++){const pt=D[q];pt!==null&&(D[q]=null,U[q].disconnect(pt))}I=null,ut=null,C.reset(),t.setRenderTarget(g),y=null,v=null,x=null,l=null,O=null,Ct.stop(),r.isPresenting=!1,t.setPixelRatio(H),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",dt),S.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,At=null,wt=null;S.depth&&(wt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=S.stencil?Os:Cs,At=S.stencil?Ns:Rr);const Jt={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:u};x=new XRWebGLBinding(l,i),v=x.createProjectionLayer(Jt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),O=new Cr(v.textureWidth,v.textureHeight,{format:Si,type:fa,depthTexture:new f0(v.textureWidth,v.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const yt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new Cr(y.framebufferWidth,y.framebufferHeight,{format:Si,type:fa,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),Ct.setContext(l),Ct.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function dt(q){for(let pt=0;pt<q.removed.length;pt++){const yt=q.removed[pt],At=D.indexOf(yt);At>=0&&(D[At]=null,U[At].disconnect(yt))}for(let pt=0;pt<q.added.length;pt++){const yt=q.added[pt];let At=D.indexOf(yt);if(At===-1){for(let Jt=0;Jt<U.length;Jt++)if(Jt>=D.length){D.push(yt),At=Jt;break}else if(D[Jt]===null){D[Jt]=yt,At=Jt;break}if(At===-1)break}const wt=U[At];wt&&wt.connect(yt)}}const W=new et,rt=new et;function j(q,pt,yt){W.setFromMatrixPosition(pt.matrixWorld),rt.setFromMatrixPosition(yt.matrixWorld);const At=W.distanceTo(rt),wt=pt.projectionMatrix.elements,Jt=yt.projectionMatrix.elements,Bt=wt[14]/(wt[10]-1),Ee=wt[14]/(wt[10]+1),De=(wt[9]+1)/wt[5],re=(wt[9]-1)/wt[5],z=(wt[8]-1)/wt[0],vn=(Jt[8]+1)/Jt[0],oe=Bt*z,de=Bt*vn,Wt=At/(-z+vn),Ue=Wt*-z;if(pt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ue),q.translateZ(Wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),wt[10]===-1)q.projectionMatrix.copy(pt.projectionMatrix),q.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const qt=Bt+Wt,L=Ee+Wt,T=oe-Ue,tt=de+(At-Ue),ct=De*Ee/L*qt,St=re*Ee/L*qt;q.projectionMatrix.makePerspective(T,tt,ct,St,qt,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Mt(q,pt){pt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(pt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let pt=q.near,yt=q.far;C.texture!==null&&(C.depthNear>0&&(pt=C.depthNear),C.depthFar>0&&(yt=C.depthFar)),b.near=Z.near=B.near=pt,b.far=Z.far=B.far=yt,(I!==b.near||ut!==b.far)&&(l.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,ut=b.far),B.layers.mask=q.layers.mask|2,Z.layers.mask=q.layers.mask|4,b.layers.mask=B.layers.mask|Z.layers.mask;const At=q.parent,wt=b.cameras;Mt(b,At);for(let Jt=0;Jt<wt.length;Jt++)Mt(wt[Jt],At);wt.length===2?j(b,B,Z):b.projectionMatrix.copy(B.projectionMatrix),N(q,b,At)};function N(q,pt,yt){yt===null?q.matrix.copy(pt.matrixWorld):(q.matrix.copy(yt.matrixWorld),q.matrix.invert(),q.matrix.multiply(pt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(pt.projectionMatrix),q.projectionMatrixInverse.copy(pt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Td*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(q){p=q,v!==null&&(v.fixedFoveation=q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(b)};let it=null;function bt(q,pt){if(_=pt.getViewerPose(m||f),E=pt,_!==null){const yt=_.views;y!==null&&(t.setRenderTargetFramebuffer(O,y.framebuffer),t.setRenderTarget(O));let At=!1;yt.length!==b.cameras.length&&(b.cameras.length=0,At=!0);for(let Bt=0;Bt<yt.length;Bt++){const Ee=yt[Bt];let De=null;if(y!==null)De=y.getViewport(Ee);else{const z=x.getViewSubImage(v,Ee);De=z.viewport,Bt===0&&(t.setRenderTargetTextures(O,z.colorTexture,v.ignoreDepthValues?void 0:z.depthStencilTexture),t.setRenderTarget(O))}let re=w[Bt];re===void 0&&(re=new ci,re.layers.enable(Bt),re.viewport=new Ke,w[Bt]=re),re.matrix.fromArray(Ee.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Ee.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(De.x,De.y,De.width,De.height),Bt===0&&(b.matrix.copy(re.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),At===!0&&b.cameras.push(re)}const wt=l.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Bt=x.getDepthInformation(yt[0]);Bt&&Bt.isValid&&Bt.texture&&C.init(t,Bt,l.renderState)}}for(let yt=0;yt<U.length;yt++){const At=D[yt],wt=U[yt];At!==null&&wt!==void 0&&wt.update(At,pt,m||f)}it&&it(q,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),E=null}const Ct=new p0;Ct.setAnimationLoop(bt),this.setAnimationLoop=function(q){it=q},this.dispose=function(){}}}const xr=new Oi,yR=new Qe;function MR(s,t){function i(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,l0(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function l(S,g,O,U,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(S,g):g.isMeshToonMaterial?(u(S,g),x(S,g)):g.isMeshPhongMaterial?(u(S,g),_(S,g)):g.isMeshStandardMaterial?(u(S,g),v(S,g),g.isMeshPhysicalMaterial&&y(S,g,D)):g.isMeshMatcapMaterial?(u(S,g),E(S,g)):g.isMeshDepthMaterial?u(S,g):g.isMeshDistanceMaterial?(u(S,g),C(S,g)):g.isMeshNormalMaterial?u(S,g):g.isLineBasicMaterial?(f(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?p(S,g,O,U):g.isSpriteMaterial?m(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,i(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Vn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,i(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Vn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,i(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,i(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const O=t.get(g),U=O.envMap,D=O.envMapRotation;U&&(S.envMap.value=U,xr.copy(D),xr.x*=-1,xr.y*=-1,xr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),S.envMapRotation.value.setFromMatrix4(yR.makeRotationFromEuler(xr)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,S.aoMapTransform))}function f(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function p(S,g,O,U){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*O,S.scale.value=U*.5,g.map&&(S.map.value=g.map,i(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function _(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function x(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function v(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function y(S,g,O){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Vn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,g){g.matcap&&(S.matcap.value=g.matcap)}function C(S,g){const O=t.get(g).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function ER(s,t,i,r){let l={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,U){const D=U.program;r.uniformBlockBinding(O,D)}function m(O,U){let D=l[O.id];D===void 0&&(E(O),D=_(O),l[O.id]=D,O.addEventListener("dispose",S));const F=U.program;r.updateUBOMapping(O,F);const H=t.render.frame;u[O.id]!==H&&(v(O),u[O.id]=H)}function _(O){const U=x();O.__bindingPointIndex=U;const D=s.createBuffer(),F=O.__size,H=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,F,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,D),D}function x(){for(let O=0;O<d;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const U=l[O.id],D=O.uniforms,F=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let H=0,B=D.length;H<B;H++){const Z=Array.isArray(D[H])?D[H]:[D[H]];for(let w=0,b=Z.length;w<b;w++){const I=Z[w];if(y(I,H,w,F)===!0){const ut=I.__offset,at=Array.isArray(I.value)?I.value:[I.value];let gt=0;for(let dt=0;dt<at.length;dt++){const W=at[dt],rt=C(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,ut+gt,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,gt),gt+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ut,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(O,U,D,F){const H=O.value,B=U+"_"+D;if(F[B]===void 0)return typeof H=="number"||typeof H=="boolean"?F[B]=H:F[B]=H.clone(),!0;{const Z=F[B];if(typeof H=="number"||typeof H=="boolean"){if(Z!==H)return F[B]=H,!0}else if(Z.equals(H)===!1)return Z.copy(H),!0}return!1}function E(O){const U=O.uniforms;let D=0;const F=16;for(let B=0,Z=U.length;B<Z;B++){const w=Array.isArray(U[B])?U[B]:[U[B]];for(let b=0,I=w.length;b<I;b++){const ut=w[b],at=Array.isArray(ut.value)?ut.value:[ut.value];for(let gt=0,dt=at.length;gt<dt;gt++){const W=at[gt],rt=C(W),j=D%F,Mt=j%rt.boundary,N=j+Mt;D+=Mt,N!==0&&F-N<rt.storage&&(D+=F-N),ut.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=D,D+=rt.storage}}}const H=D%F;return H>0&&(D+=F-H),O.__size=D,O.__cache={},this}function C(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function S(O){const U=O.target;U.removeEventListener("dispose",S);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function g(){for(const O in l)s.deleteBuffer(l[O]);f=[],l={},u={}}return{bind:p,update:m,dispose:g}}class TR{constructor(t={}){const{canvas:i=iE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const E=new Uint32Array(4),C=new Int32Array(4);let S=null,g=null;const O=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=ka,this.toneMappingExposure=1;const D=this;let F=!1,H=0,B=0,Z=null,w=-1,b=null;const I=new Ke,ut=new Ke;let at=null;const gt=new we(0);let dt=0,W=i.width,rt=i.height,j=1,Mt=null,N=null;const it=new Ke(0,0,W,rt),bt=new Ke(0,0,W,rt);let Ct=!1;const q=new Gd;let pt=!1,yt=!1;this.transmissionResolutionScale=1;const At=new Qe,wt=new Qe,Jt=new et,Bt=new Ke,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function re(){return Z===null?j:1}let z=r;function vn(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ld}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Dt,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),z===null){const X="webgl2";if(z=vn(X,R),z===null)throw vn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let oe,de,Wt,Ue,qt,L,T,tt,ct,St,ht,Vt,Ut,Ft,_e,Tt,It,Qt,kt,Ht,se,Zt,Le,k;function Ot(){oe=new OA(z),oe.init(),Zt=new gR(z,oe),de=new RA(z,oe,t,Zt),Wt=new pR(z,oe),de.reverseDepthBuffer&&v&&Wt.buffers.depth.setReversed(!0),Ue=new BA(z),qt=new eR,L=new mR(z,oe,Wt,qt,de,Zt,Ue),T=new wA(D),tt=new NA(D),ct=new kE(z),Le=new bA(z,ct),St=new PA(z,ct,Ue,Le),ht=new IA(z,St,ct,Ue),kt=new FA(z,de,L),Tt=new CA(qt),Vt=new tR(D,T,tt,oe,de,Le,Tt),Ut=new MR(D,qt),Ft=new iR,_e=new uR(oe),Qt=new TA(D,T,tt,Wt,ht,y,p),It=new hR(D,ht,de),k=new ER(z,Ue,de,Wt),Ht=new AA(z,oe,Ue),se=new zA(z,oe,Ue),Ue.programs=Vt.programs,D.capabilities=de,D.extensions=oe,D.properties=qt,D.renderLists=Ft,D.shadowMap=It,D.state=Wt,D.info=Ue}Ot();const st=new SR(D,z);this.xr=st,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(W,rt,!1))},this.getSize=function(R){return R.set(W,rt)},this.setSize=function(R,X,$=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,rt=X,i.width=Math.floor(R*j),i.height=Math.floor(X*j),$===!0&&(i.style.width=R+"px",i.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(W*j,rt*j).floor()},this.setDrawingBufferSize=function(R,X,$){W=R,rt=X,j=$,i.width=Math.floor(R*$),i.height=Math.floor(X*$),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(it)},this.setViewport=function(R,X,$,Q){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,X,$,Q),Wt.viewport(I.copy(it).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(bt)},this.setScissor=function(R,X,$,Q){R.isVector4?bt.set(R.x,R.y,R.z,R.w):bt.set(R,X,$,Q),Wt.scissor(ut.copy(bt).multiplyScalar(j).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(R){Wt.setScissorTest(Ct=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,$=!0){let Q=0;if(R){let Y=!1;if(Z!==null){const Et=Z.texture.format;Y=Et===Fd||Et===Bd||Et===zd}if(Y){const Et=Z.texture.type,Rt=Et===fa||Et===Rr||Et===Yo||Et===Ns||Et===Od||Et===Pd,zt=Qt.getClearColor(),Pt=Qt.getClearAlpha(),ee=zt.r,ne=zt.g,jt=zt.b;Rt?(E[0]=ee,E[1]=ne,E[2]=jt,E[3]=Pt,z.clearBufferuiv(z.COLOR,0,E)):(C[0]=ee,C[1]=ne,C[2]=jt,C[3]=Pt,z.clearBufferiv(z.COLOR,0,C))}else Q|=z.COLOR_BUFFER_BIT}X&&(Q|=z.DEPTH_BUFFER_BIT),$&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Dt,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),Qt.dispose(),Ft.dispose(),_e.dispose(),qt.dispose(),T.dispose(),tt.dispose(),ht.dispose(),Le.dispose(),k.dispose(),Vt.dispose(),st.dispose(),st.removeEventListener("sessionstart",nl),st.removeEventListener("sessionend",Gs),Ei.stop()};function _t(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=Ue.autoReset,X=It.enabled,$=It.autoUpdate,Q=It.needsUpdate,Y=It.type;Ot(),Ue.autoReset=R,It.enabled=X,It.autoUpdate=$,It.needsUpdate=Q,It.type=Y}function Lt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function te(R){const X=R.target;X.removeEventListener("dispose",te),Ve(X)}function Ve(R){an(R),qt.remove(R)}function an(R){const X=qt.get(R).programs;X!==void 0&&(X.forEach(function($){Vt.releaseProgram($)}),R.isShaderMaterial&&Vt.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,$,Q,Y,Et){X===null&&(X=Ee);const Rt=Y.isMesh&&Y.matrixWorld.determinant()<0,zt=Zu(R,X,$,Q,Y);Wt.setMaterial(Q,Rt);let Pt=$.index,ee=1;if(Q.wireframe===!0){if(Pt=St.getWireframeAttribute($),Pt===void 0)return;ee=2}const ne=$.drawRange,jt=$.attributes.position;let ve=ne.start*ee,xe=(ne.start+ne.count)*ee;Et!==null&&(ve=Math.max(ve,Et.start*ee),xe=Math.min(xe,(Et.start+Et.count)*ee)),Pt!==null?(ve=Math.max(ve,0),xe=Math.min(xe,Pt.count)):jt!=null&&(ve=Math.max(ve,0),xe=Math.min(xe,jt.count));const Ge=xe-ve;if(Ge<0||Ge===1/0)return;Le.setup(Y,Q,zt,$,Pt);let be,ie=Ht;if(Pt!==null&&(be=ct.get(Pt),ie=se,ie.setIndex(be)),Y.isMesh)Q.wireframe===!0?(Wt.setLineWidth(Q.wireframeLinewidth*re()),ie.setMode(z.LINES)):ie.setMode(z.TRIANGLES);else if(Y.isLine){let Kt=Q.linewidth;Kt===void 0&&(Kt=1),Wt.setLineWidth(Kt*re()),Y.isLineSegments?ie.setMode(z.LINES):Y.isLineLoop?ie.setMode(z.LINE_LOOP):ie.setMode(z.LINE_STRIP)}else Y.isPoints?ie.setMode(z.POINTS):Y.isSprite&&ie.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Sr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))ie.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Kt=Y._multiDrawStarts,on=Y._multiDrawCounts,Se=Y._multiDrawCount,zn=Pt?ct.get(Pt).bytesPerElement:1,fi=qt.get(Q).currentProgram.getUniforms();for(let Un=0;Un<Se;Un++)fi.setValue(z,"_gl_DrawID",Un),ie.render(Kt[Un]/zn,on[Un])}else if(Y.isInstancedMesh)ie.renderInstances(ve,Ge,Y.count);else if($.isInstancedBufferGeometry){const Kt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,on=Math.min($.instanceCount,Kt);ie.renderInstances(ve,Ge,on)}else ie.render(ve,Ge)};function Te(R,X,$){R.transparent===!0&&R.side===sa&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,sn(R,X,$),R.side=Wa,R.needsUpdate=!0,sn(R,X,$),R.side=sa):sn(R,X,$)}this.compile=function(R,X,$=null){$===null&&($=R),g=_e.get($),g.init(X),U.push(g),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),R!==$&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const Q=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Et=Y.material;if(Et)if(Array.isArray(Et))for(let Rt=0;Rt<Et.length;Rt++){const zt=Et[Rt];Te(zt,$,Y),Q.add(zt)}else Te(Et,$,Y),Q.add(Et)}),g=U.pop(),Q},this.compileAsync=function(R,X,$=null){const Q=this.compile(R,X,$);return new Promise(Y=>{function Et(){if(Q.forEach(function(Rt){qt.get(Rt).currentProgram.isReady()&&Q.delete(Rt)}),Q.size===0){Y(R);return}setTimeout(Et,10)}oe.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let wn=null;function Dn(R){wn&&wn(R)}function nl(){Ei.stop()}function Gs(){Ei.start()}const Ei=new p0;Ei.setAnimationLoop(Dn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(R){wn=R,st.setAnimationLoop(R),R===null?Ei.stop():Ei.start()},st.addEventListener("sessionstart",nl),st.addEventListener("sessionend",Gs),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(X),X=st.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,X,Z),g=_e.get(R,U.length),g.init(X),U.push(g),wt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),q.setFromProjectionMatrix(wt),yt=this.localClippingEnabled,pt=Tt.init(this.clippingPlanes,yt),S=Ft.get(R,O.length),S.init(),O.push(S),st.enabled===!0&&st.isPresenting===!0){const Et=D.xr.getDepthSensingMesh();Et!==null&&Lr(Et,X,-1/0,D.sortObjects)}Lr(R,X,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(Mt,N),De=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,De&&Qt.addToRenderList(S,R),this.info.render.frame++,pt===!0&&Tt.beginShadows();const $=g.state.shadowsArray;It.render($,R,X),pt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=S.opaque,Y=S.transmissive;if(g.setupLights(),X.isArrayCamera){const Et=X.cameras;if(Y.length>0)for(let Rt=0,zt=Et.length;Rt<zt;Rt++){const Pt=Et[Rt];il(Q,Y,R,Pt)}De&&Qt.render(R);for(let Rt=0,zt=Et.length;Rt<zt;Rt++){const Pt=Et[Rt];Vs(S,R,Pt,Pt.viewport)}}else Y.length>0&&il(Q,Y,R,X),De&&Qt.render(R),Vs(S,R,X);Z!==null&&B===0&&(L.updateMultisampleRenderTarget(Z),L.updateRenderTargetMipmap(Z)),R.isScene===!0&&R.onAfterRender(D,R,X),Le.resetDefaultState(),w=-1,b=null,U.pop(),U.length>0?(g=U[U.length-1],pt===!0&&Tt.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,O.pop(),O.length>0?S=O[O.length-1]:S=null};function Lr(R,X,$,Q){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||q.intersectsSprite(R)){Q&&Bt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(wt);const Rt=ht.update(R),zt=R.material;zt.visible&&S.push(R,Rt,zt,$,Bt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||q.intersectsObject(R))){const Rt=ht.update(R),zt=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Bt.copy(R.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Bt.copy(Rt.boundingSphere.center)),Bt.applyMatrix4(R.matrixWorld).applyMatrix4(wt)),Array.isArray(zt)){const Pt=Rt.groups;for(let ee=0,ne=Pt.length;ee<ne;ee++){const jt=Pt[ee],ve=zt[jt.materialIndex];ve&&ve.visible&&S.push(R,Rt,ve,$,Bt.z,jt)}}else zt.visible&&S.push(R,Rt,zt,$,Bt.z,null)}}const Et=R.children;for(let Rt=0,zt=Et.length;Rt<zt;Rt++)Lr(Et[Rt],X,$,Q)}function Vs(R,X,$,Q){const Y=R.opaque,Et=R.transmissive,Rt=R.transparent;g.setupLightsView($),pt===!0&&Tt.setGlobalState(D.clippingPlanes,$),Q&&Wt.viewport(I.copy(Q)),Y.length>0&&Xn(Y,X,$),Et.length>0&&Xn(Et,X,$),Rt.length>0&&Xn(Rt,X,$),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function il(R,X,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new Cr(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?Qo:fa,minFilter:br,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Et=g.state.transmissionRenderTarget[Q.id],Rt=Q.viewport||I;Et.setSize(Rt.z*D.transmissionResolutionScale,Rt.w*D.transmissionResolutionScale);const zt=D.getRenderTarget();D.setRenderTarget(Et),D.getClearColor(gt),dt=D.getClearAlpha(),dt<1&&D.setClearColor(16777215,.5),D.clear(),De&&Qt.render($);const Pt=D.toneMapping;D.toneMapping=ka;const ee=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),pt===!0&&Tt.setGlobalState(D.clippingPlanes,Q),Xn(R,$,Q),L.updateMultisampleRenderTarget(Et),L.updateRenderTargetMipmap(Et),oe.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let jt=0,ve=X.length;jt<ve;jt++){const xe=X[jt],Ge=xe.object,be=xe.geometry,ie=xe.material,Kt=xe.group;if(ie.side===sa&&Ge.layers.test(Q.layers)){const on=ie.side;ie.side=Vn,ie.needsUpdate=!0,rn(Ge,$,Q,be,ie,Kt),ie.side=on,ie.needsUpdate=!0,ne=!0}}ne===!0&&(L.updateMultisampleRenderTarget(Et),L.updateRenderTargetMipmap(Et))}D.setRenderTarget(zt),D.setClearColor(gt,dt),ee!==void 0&&(Q.viewport=ee),D.toneMapping=Pt}function Xn(R,X,$){const Q=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Et=R.length;Y<Et;Y++){const Rt=R[Y],zt=Rt.object,Pt=Rt.geometry,ee=Q===null?Rt.material:Q,ne=Rt.group;zt.layers.test($.layers)&&rn(zt,X,$,Pt,ee,ne)}}function rn(R,X,$,Q,Y,Et){R.onBeforeRender(D,X,$,Q,Y,Et),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(D,X,$,Q,R,Et),Y.transparent===!0&&Y.side===sa&&Y.forceSinglePass===!1?(Y.side=Vn,Y.needsUpdate=!0,D.renderBufferDirect($,X,Q,Y,R,Et),Y.side=Wa,Y.needsUpdate=!0,D.renderBufferDirect($,X,Q,Y,R,Et),Y.side=sa):D.renderBufferDirect($,X,Q,Y,R,Et),R.onAfterRender(D,X,$,Q,Y,Et)}function sn(R,X,$){X.isScene!==!0&&(X=Ee);const Q=qt.get(R),Y=g.state.lights,Et=g.state.shadowsArray,Rt=Y.state.version,zt=Vt.getParameters(R,Y.state,Et,X,$),Pt=Vt.getProgramCacheKey(zt);let ee=Q.programs;Q.environment=R.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(R.isMeshStandardMaterial?tt:T).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,ee===void 0&&(R.addEventListener("dispose",te),ee=new Map,Q.programs=ee);let ne=ee.get(Pt);if(ne!==void 0){if(Q.currentProgram===ne&&Q.lightsStateVersion===Rt)return Nr(R,zt),ne}else zt.uniforms=Vt.getUniforms(R),R.onBeforeCompile(zt,D),ne=Vt.acquireProgram(zt,Pt),ee.set(Pt,ne),Q.uniforms=zt.uniforms;const jt=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(jt.clippingPlanes=Tt.uniform),Nr(R,zt),Q.needsLights=al(R),Q.lightsStateVersion=Rt,Q.needsLights&&(jt.ambientLightColor.value=Y.state.ambient,jt.lightProbe.value=Y.state.probe,jt.directionalLights.value=Y.state.directional,jt.directionalLightShadows.value=Y.state.directionalShadow,jt.spotLights.value=Y.state.spot,jt.spotLightShadows.value=Y.state.spotShadow,jt.rectAreaLights.value=Y.state.rectArea,jt.ltc_1.value=Y.state.rectAreaLTC1,jt.ltc_2.value=Y.state.rectAreaLTC2,jt.pointLights.value=Y.state.point,jt.pointLightShadows.value=Y.state.pointShadow,jt.hemisphereLights.value=Y.state.hemi,jt.directionalShadowMap.value=Y.state.directionalShadowMap,jt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,jt.spotShadowMap.value=Y.state.spotShadowMap,jt.spotLightMatrix.value=Y.state.spotLightMatrix,jt.spotLightMap.value=Y.state.spotLightMap,jt.pointShadowMap.value=Y.state.pointShadowMap,jt.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=ne,Q.uniformsList=null,ne}function zi(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Hu.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Nr(R,X){const $=qt.get(R);$.outputColorSpace=X.outputColorSpace,$.batching=X.batching,$.batchingColor=X.batchingColor,$.instancing=X.instancing,$.instancingColor=X.instancingColor,$.instancingMorph=X.instancingMorph,$.skinning=X.skinning,$.morphTargets=X.morphTargets,$.morphNormals=X.morphNormals,$.morphColors=X.morphColors,$.morphTargetsCount=X.morphTargetsCount,$.numClippingPlanes=X.numClippingPlanes,$.numIntersection=X.numClipIntersection,$.vertexAlphas=X.vertexAlphas,$.vertexTangents=X.vertexTangents,$.toneMapping=X.toneMapping}function Zu(R,X,$,Q,Y){X.isScene!==!0&&(X=Ee),L.resetTextureUnits();const Et=X.fog,Rt=Q.isMeshStandardMaterial?X.environment:null,zt=Z===null?D.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ps,Pt=(Q.isMeshStandardMaterial?tt:T).get(Q.envMap||Rt),ee=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ne=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),jt=!!$.morphAttributes.position,ve=!!$.morphAttributes.normal,xe=!!$.morphAttributes.color;let Ge=ka;Q.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ge=D.toneMapping);const be=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ie=be!==void 0?be.length:0,Kt=qt.get(Q),on=g.state.lights;if(pt===!0&&(yt===!0||R!==b)){const qe=R===b&&Q.id===w;Tt.setState(Q,R,qe)}let Se=!1;Q.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==on.state.version||Kt.outputColorSpace!==zt||Y.isBatchedMesh&&Kt.batching===!1||!Y.isBatchedMesh&&Kt.batching===!0||Y.isBatchedMesh&&Kt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Kt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Kt.instancing===!1||!Y.isInstancedMesh&&Kt.instancing===!0||Y.isSkinnedMesh&&Kt.skinning===!1||!Y.isSkinnedMesh&&Kt.skinning===!0||Y.isInstancedMesh&&Kt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Kt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Kt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Kt.instancingMorph===!1&&Y.morphTexture!==null||Kt.envMap!==Pt||Q.fog===!0&&Kt.fog!==Et||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Tt.numPlanes||Kt.numIntersection!==Tt.numIntersection)||Kt.vertexAlphas!==ee||Kt.vertexTangents!==ne||Kt.morphTargets!==jt||Kt.morphNormals!==ve||Kt.morphColors!==xe||Kt.toneMapping!==Ge||Kt.morphTargetsCount!==ie)&&(Se=!0):(Se=!0,Kt.__version=Q.version);let zn=Kt.currentProgram;Se===!0&&(zn=sn(Q,X,Y));let fi=!1,Un=!1,dn=!1;const Ne=zn.getUniforms(),Ln=Kt.uniforms;if(Wt.useProgram(zn.program)&&(fi=!0,Un=!0,dn=!0),Q.id!==w&&(w=Q.id,Un=!0),fi||b!==R){Wt.buffers.depth.getReversed()?(At.copy(R.projectionMatrix),rE(At),sE(At),Ne.setValue(z,"projectionMatrix",At)):Ne.setValue(z,"projectionMatrix",R.projectionMatrix),Ne.setValue(z,"viewMatrix",R.matrixWorldInverse);const xn=Ne.map.cameraPosition;xn!==void 0&&xn.setValue(z,Jt.setFromMatrixPosition(R.matrixWorld)),de.logarithmicDepthBuffer&&Ne.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ne.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Un=!0,dn=!0)}if(Y.isSkinnedMesh){Ne.setOptional(z,Y,"bindMatrix"),Ne.setOptional(z,Y,"bindMatrixInverse");const qe=Y.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),Ne.setValue(z,"boneTexture",qe.boneTexture,L))}Y.isBatchedMesh&&(Ne.setOptional(z,Y,"batchingTexture"),Ne.setValue(z,"batchingTexture",Y._matricesTexture,L),Ne.setOptional(z,Y,"batchingIdTexture"),Ne.setValue(z,"batchingIdTexture",Y._indirectTexture,L),Ne.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ne.setValue(z,"batchingColorTexture",Y._colorsTexture,L));const En=$.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&kt.update(Y,$,zn),(Un||Kt.receiveShadow!==Y.receiveShadow)&&(Kt.receiveShadow=Y.receiveShadow,Ne.setValue(z,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ln.envMap.value=Pt,Ln.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(Ln.envMapIntensity.value=X.environmentIntensity),Un&&(Ne.setValue(z,"toneMappingExposure",D.toneMappingExposure),Kt.needsLights&&Ku(Ln,dn),Et&&Q.fog===!0&&Ut.refreshFogUniforms(Ln,Et),Ut.refreshMaterialUniforms(Ln,Q,j,rt,g.state.transmissionRenderTarget[R.id]),Hu.upload(z,zi(Kt),Ln,L)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Hu.upload(z,zi(Kt),Ln,L),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ne.setValue(z,"center",Y.center),Ne.setValue(z,"modelViewMatrix",Y.modelViewMatrix),Ne.setValue(z,"normalMatrix",Y.normalMatrix),Ne.setValue(z,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const qe=Q.uniformsGroups;for(let xn=0,Or=qe.length;xn<Or;xn++){const Bn=qe[xn];k.update(Bn,zn),k.bind(Bn,zn)}}return zn}function Ku(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function al(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(R,X,$){qt.get(R.texture).__webglTexture=X,qt.get(R.depthTexture).__webglTexture=$;const Q=qt.get(R);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=$===void 0,Q.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const $=qt.get(R);$.__webglFramebuffer=X,$.__useDefaultFramebuffer=X===void 0};const ja=z.createFramebuffer();this.setRenderTarget=function(R,X=0,$=0){Z=R,H=X,B=$;let Q=!0,Y=null,Et=!1,Rt=!1;if(R){const Pt=qt.get(R);if(Pt.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1;else if(Pt.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Pt.__hasExternalTextures)L.rebindTextures(R,qt.get(R.texture).__webglTexture,qt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const jt=R.depthTexture;if(Pt.__boundDepthTexture!==jt){if(jt!==null&&qt.has(jt)&&(R.width!==jt.image.width||R.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const ee=R.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Rt=!0);const ne=qt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ne[X])?Y=ne[X][$]:Y=ne[X],Et=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?Y=qt.get(R).__webglMultisampledFramebuffer:Array.isArray(ne)?Y=ne[$]:Y=ne,I.copy(R.viewport),ut.copy(R.scissor),at=R.scissorTest}else I.copy(it).multiplyScalar(j).floor(),ut.copy(bt).multiplyScalar(j).floor(),at=Ct;if($!==0&&(Y=ja),Wt.bindFramebuffer(z.FRAMEBUFFER,Y)&&Q&&Wt.drawBuffers(R,Y),Wt.viewport(I),Wt.scissor(ut),Wt.setScissorTest(at),Et){const Pt=qt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Pt.__webglTexture,$)}else if(Rt){const Pt=qt.get(R.texture),ee=X;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Pt.__webglTexture,$,ee)}else if(R!==null&&$!==0){const Pt=qt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Pt.__webglTexture,$)}w=-1},this.readRenderTargetPixels=function(R,X,$,Q,Y,Et,Rt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=qt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Rt!==void 0&&(zt=zt[Rt]),zt){Wt.bindFramebuffer(z.FRAMEBUFFER,zt);try{const Pt=R.texture,ee=Pt.format,ne=Pt.type;if(!de.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-Q&&$>=0&&$<=R.height-Y&&z.readPixels(X,$,Q,Y,Zt.convert(ee),Zt.convert(ne),Et)}finally{const Pt=Z!==null?qt.get(Z).__webglFramebuffer:null;Wt.bindFramebuffer(z.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(R,X,$,Q,Y,Et,Rt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=qt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Rt!==void 0&&(zt=zt[Rt]),zt){const Pt=R.texture,ee=Pt.format,ne=Pt.type;if(!de.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-Q&&$>=0&&$<=R.height-Y){Wt.bindFramebuffer(z.FRAMEBUFFER,zt);const jt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,jt),z.bufferData(z.PIXEL_PACK_BUFFER,Et.byteLength,z.STREAM_READ),z.readPixels(X,$,Q,Y,Zt.convert(ee),Zt.convert(ne),0);const ve=Z!==null?qt.get(Z).__webglFramebuffer:null;Wt.bindFramebuffer(z.FRAMEBUFFER,ve);const xe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await aE(z,xe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,jt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Et),z.deleteBuffer(jt),z.deleteSync(xe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,$=0){R.isTexture!==!0&&(Sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);const Q=Math.pow(2,-$),Y=Math.floor(R.image.width*Q),Et=Math.floor(R.image.height*Q),Rt=X!==null?X.x:0,zt=X!==null?X.y:0;L.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,Rt,zt,Y,Et),Wt.unbindTexture()};const ks=z.createFramebuffer(),Bi=z.createFramebuffer();this.copyTextureToTexture=function(R,X,$=null,Q=null,Y=0,Et=null){R.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,R=arguments[1],X=arguments[2],Et=arguments[3]||0,$=null),Et===null&&(Y!==0?(Sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Y,Y=0):Et=0);let Rt,zt,Pt,ee,ne,jt,ve,xe,Ge;const be=R.isCompressedTexture?R.mipmaps[Et]:R.image;if($!==null)Rt=$.max.x-$.min.x,zt=$.max.y-$.min.y,Pt=$.isBox3?$.max.z-$.min.z:1,ee=$.min.x,ne=$.min.y,jt=$.isBox3?$.min.z:0;else{const En=Math.pow(2,-Y);Rt=Math.floor(be.width*En),zt=Math.floor(be.height*En),R.isDataArrayTexture?Pt=be.depth:R.isData3DTexture?Pt=Math.floor(be.depth*En):Pt=1,ee=0,ne=0,jt=0}Q!==null?(ve=Q.x,xe=Q.y,Ge=Q.z):(ve=0,xe=0,Ge=0);const ie=Zt.convert(X.format),Kt=Zt.convert(X.type);let on;X.isData3DTexture?(L.setTexture3D(X,0),on=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),on=z.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),on=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const Se=z.getParameter(z.UNPACK_ROW_LENGTH),zn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),fi=z.getParameter(z.UNPACK_SKIP_PIXELS),Un=z.getParameter(z.UNPACK_SKIP_ROWS),dn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,be.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,be.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ee),z.pixelStorei(z.UNPACK_SKIP_ROWS,ne),z.pixelStorei(z.UNPACK_SKIP_IMAGES,jt);const Ne=R.isDataArrayTexture||R.isData3DTexture,Ln=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const En=qt.get(R),qe=qt.get(X),xn=qt.get(En.__renderTarget),Or=qt.get(qe.__renderTarget);Wt.bindFramebuffer(z.READ_FRAMEBUFFER,xn.__webglFramebuffer),Wt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let Bn=0;Bn<Pt;Bn++)Ne&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qt.get(R).__webglTexture,Y,jt+Bn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qt.get(X).__webglTexture,Et,Ge+Bn)),z.blitFramebuffer(ee,ne,Rt,zt,ve,xe,Rt,zt,z.DEPTH_BUFFER_BIT,z.NEAREST);Wt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||qt.has(R)){const En=qt.get(R),qe=qt.get(X);Wt.bindFramebuffer(z.READ_FRAMEBUFFER,ks),Wt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Bi);for(let xn=0;xn<Pt;xn++)Ne?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,En.__webglTexture,Y,jt+xn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,En.__webglTexture,Y),Ln?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qe.__webglTexture,Et,Ge+xn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,qe.__webglTexture,Et),Y!==0?z.blitFramebuffer(ee,ne,Rt,zt,ve,xe,Rt,zt,z.COLOR_BUFFER_BIT,z.NEAREST):Ln?z.copyTexSubImage3D(on,Et,ve,xe,Ge+xn,ee,ne,Rt,zt):z.copyTexSubImage2D(on,Et,ve,xe,ee,ne,Rt,zt);Wt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ln?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(on,Et,ve,xe,Ge,Rt,zt,Pt,ie,Kt,be.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(on,Et,ve,xe,Ge,Rt,zt,Pt,ie,be.data):z.texSubImage3D(on,Et,ve,xe,Ge,Rt,zt,Pt,ie,Kt,be):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Et,ve,xe,Rt,zt,ie,Kt,be.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Et,ve,xe,be.width,be.height,ie,be.data):z.texSubImage2D(z.TEXTURE_2D,Et,ve,xe,Rt,zt,ie,Kt,be);z.pixelStorei(z.UNPACK_ROW_LENGTH,Se),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,zn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,fi),z.pixelStorei(z.UNPACK_SKIP_ROWS,Un),z.pixelStorei(z.UNPACK_SKIP_IMAGES,dn),Et===0&&X.generateMipmaps&&z.generateMipmap(on),Wt.unbindTexture()},this.copyTextureToTexture3D=function(R,X,$=null,Q=null,Y=0){return R.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Q=arguments[1]||null,R=arguments[2],X=arguments[3],Y=arguments[4]||0),Sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,$,Q,Y)},this.initRenderTarget=function(R){qt.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Wt.unbindTexture()},this.resetState=function(){H=0,B=0,Z=null,Wt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const Mv={type:"change"},kd={type:"start"},x0={type:"end"},Uu=new n0,Ev=new Ha,bR=Math.cos(70*nE.DEG2RAD),cn=new et,Gn=2*Math.PI,Be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zh=1e-6;class AR extends GE{constructor(t,i=null){super(t,i),this.state=Be.NONE,this.enabled=!0,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:As.ROTATE,MIDDLE:As.DOLLY,RIGHT:As.PAN},this.touches={ONE:Ts.ROTATE,TWO:Ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new et,this._lastQuaternion=new wr,this._lastTargetPosition=new et,this._quat=new wr().setFromUnitVectors(t.up,new et(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new K_,this._sphericalDelta=new K_,this._scale=1,this._panOffset=new et,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new et,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=CR.bind(this),this._onPointerDown=RR.bind(this),this._onPointerUp=wR.bind(this),this._onContextMenu=zR.bind(this),this._onMouseWheel=LR.bind(this),this._onKeyDown=NR.bind(this),this._onTouchStart=OR.bind(this),this._onTouchMove=PR.bind(this),this._onMouseDown=DR.bind(this),this._onMouseMove=UR.bind(this),this._interceptControlDown=BR.bind(this),this._interceptControlUp=FR.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mv),this.update(),this.state=Be.NONE}update(t=null){const i=this.object.position;cn.copy(i).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===Be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Gn:r>Math.PI&&(r-=Gn),l<-Math.PI?l+=Gn:l>Math.PI&&(l-=Gn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=f!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),i.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=cn.length();f=this._clampDistance(d*this._scale);const p=d-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),u=!!p}else if(this.object.isOrthographicCamera){const d=new et(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=p!==this.object.zoom;const m=new et(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),f=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Uu.origin.copy(this.object.position),Uu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uu.direction))<bR?this.object.lookAt(this.target):(Ev.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uu.intersectPlane(Ev,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>zh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zh||this._lastTargetPosition.distanceToSquared(this.target)>zh?(this.dispatchEvent(Mv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Gn/60*this.autoRotateSpeed*t:Gn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){cn.setFromMatrixColumn(i,0),cn.multiplyScalar(-t),this._panOffset.add(cn)}_panUp(t,i){this.screenSpacePanning===!0?cn.setFromMatrixColumn(i,1):(cn.setFromMatrixColumn(i,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(t),this._panOffset.add(cn)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;cn.copy(l).sub(this.target);let u=cn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/r.clientHeight,this.object.matrix),this._panUp(2*i*u/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,u=i-r.top,f=r.width,d=r.height;this._mouse.x=l/f*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(r*r+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),u=.5*(t.pageY+r.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ce,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function RR(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function CR(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function wR(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(x0),this.state=Be.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function DR(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case As.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Be.DOLLY;break;case As.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Be.ROTATE}break;case As.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Be.PAN}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(kd)}function UR(s){switch(this.state){case Be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function LR(s){this.enabled===!1||this.enableZoom===!1||this.state!==Be.NONE||(s.preventDefault(),this.dispatchEvent(kd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(x0))}function NR(s){this.enabled!==!1&&this._handleKeyDown(s)}function OR(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Be.TOUCH_ROTATE;break;case Ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Be.TOUCH_PAN;break;default:this.state=Be.NONE}break;case 2:switch(this.touches.TWO){case Ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Be.TOUCH_DOLLY_PAN;break;case Ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Be.TOUCH_DOLLY_ROTATE;break;default:this.state=Be.NONE}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(kd)}function PR(s){switch(this._trackPointer(s),this.state){case Be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Be.NONE}}function zR(s){this.enabled!==!1&&s.preventDefault()}function BR(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function FR(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const IR=()=>{const s=ft.useRef(null);return ft.useEffect(()=>{const t=new UE,i=new ci(75,window.innerWidth/window.innerHeight,.1,1e3),r=new TR({canvas:s.current});r.setSize(window.innerWidth,window.innerHeight);const l=new el(500,500),u=new Y_({color:8900331}),f=new yi(l,u);f.rotation.x=-Math.PI/2,t.add(f);const d=new Is(1,1,2),p=new Y_({color:16711680}),m=new yi(d,p);m.position.set(0,.5,0),t.add(m);const _=new IE(16777215,.5);t.add(_);const x=new FE(16777215,1);x.position.set(5,10,7.5),t.add(x);const v=new AR(i,r.domElement);v.enableDamping=!0,i.position.set(0,10,20),i.lookAt(0,0,0);const y=()=>{requestAnimationFrame(y),v.update(),r.render(t,i)};y();const E=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",E),()=>{window.removeEventListener("resize",E),r.dispose()}},[]),xt.jsx("canvas",{ref:s})},HR=["hearts","diamonds","clubs","spades"],GR=["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];function VR(){const s=[];for(let t of HR)for(let i of GR)s.push({value:i,suit:t});return s}function kR(){const[s,t]=ft.useState(VR()),[i,r]=ft.useState(null),l=()=>{t(f=>[...f].sort(()=>Math.random()-.5))},u=()=>{if(s.length>0){const f=[...s],d=f.pop();t(f),r(d)}else alert("No more cards in the deck!")};return xt.jsxs("div",{className:"cards-container",children:[xt.jsxs("div",{className:"buttons",children:[xt.jsx("button",{onClick:l,children:"Shuffle Deck"}),xt.jsx("button",{onClick:u,children:"Draw Card"})]}),xt.jsx("div",{id:"card-deck",children:s.map((f,d)=>xt.jsx("div",{className:"card",style:{backgroundImage:`url('/cards/${f.value}_of_${f.suit}.png')`}},d))}),i&&xt.jsxs("div",{id:"drawn-card",children:["You drew the ",i.value," of ",i.suit]})]})}function XR(){const s=Ya();return ft.useEffect(()=>{const t={"/":"Home - Jachen","/about":"About - Jachen","/projects":"Projects - Jachen","/contact":"Contact - Jachen","/resume":"Resume - Jachen","/trees":"Trees - Jachen","/sandbox":"Sandbox - Jachen","/cards":"Cards - Jachen"};document.title=t[s.pathname]||"Jachen"},[s]),xt.jsx("div",{className:"app-container",children:xt.jsx(cM,{children:xt.jsxs(Ey,{children:[xt.jsx(wi,{path:"/",element:xt.jsx(iM,{})}),xt.jsx(wi,{path:"/about",element:xt.jsx(aM,{})}),xt.jsx(wi,{path:"/projects",element:xt.jsx(rM,{})}),xt.jsx(wi,{path:"/contact",element:xt.jsx(sM,{})}),xt.jsx(wi,{path:"/resume",element:xt.jsx(fM,{})}),xt.jsx(wi,{path:"/trees",element:xt.jsx(dM,{})}),xt.jsx(wi,{path:"/sandbox",element:xt.jsx(IR,{})}),xt.jsx(wi,{path:"/cards",element:xt.jsx(kR,{})}),xt.jsx(wi,{path:"*",element:xt.jsx(hM,{})})]})})})}LS.createRoot(document.getElementById("root")).render(xt.jsx(ft.StrictMode,{children:xt.jsx(Yy,{children:xt.jsx(XR,{})})}));
