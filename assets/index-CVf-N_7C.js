(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var vm={exports:{}},Tu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lT;function ZR(){if(lT)return Tu;lT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return Tu.Fragment=e,Tu.jsx=t,Tu.jsxs=t,Tu}var uT;function JR(){return uT||(uT=1,vm.exports=ZR()),vm.exports}var A=JR(),Em={exports:{}},Oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cT;function e1(){if(cT)return Oe;cT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function S(k){return k===null||typeof k!="object"?null:(k=T&&k[T]||k["@@iterator"],typeof k=="function"?k:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,F={};function V(k,ne,le){this.props=k,this.context=ne,this.refs=F,this.updater=le||N}V.prototype.isReactComponent={},V.prototype.setState=function(k,ne){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ne,"setState")},V.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function Y(){}Y.prototype=V.prototype;function ee(k,ne,le){this.props=k,this.context=ne,this.refs=F,this.updater=le||N}var Q=ee.prototype=new Y;Q.constructor=ee,I(Q,V.prototype),Q.isPureReactComponent=!0;var re=Array.isArray,se={H:null,A:null,T:null,S:null,V:null},fe=Object.prototype.hasOwnProperty;function D(k,ne,le,ie,he,Re){return le=Re.ref,{$$typeof:n,type:k,key:ne,ref:le!==void 0?le:null,props:Re}}function R(k,ne){return D(k.type,ne,void 0,void 0,void 0,k.props)}function x(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function P(k){var ne={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(le){return ne[le]})}var U=/\/+/g;function j(k,ne){return typeof k=="object"&&k!==null&&k.key!=null?P(""+k.key):ne.toString(36)}function b(){}function ve(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(b,b):(k.status="pending",k.then(function(ne){k.status==="pending"&&(k.status="fulfilled",k.value=ne)},function(ne){k.status==="pending"&&(k.status="rejected",k.reason=ne)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function ye(k,ne,le,ie,he){var Re=typeof k;(Re==="undefined"||Re==="boolean")&&(k=null);var ge=!1;if(k===null)ge=!0;else switch(Re){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(k.$$typeof){case n:case e:ge=!0;break;case y:return ge=k._init,ye(ge(k._payload),ne,le,ie,he)}}if(ge)return he=he(k),ge=ie===""?"."+j(k,0):ie,re(he)?(le="",ge!=null&&(le=ge.replace(U,"$&/")+"/"),ye(he,ne,le,"",function(pi){return pi})):he!=null&&(x(he)&&(he=R(he,le+(he.key==null||k&&k.key===he.key?"":(""+he.key).replace(U,"$&/")+"/")+ge)),ne.push(he)),1;ge=0;var lt=ie===""?".":ie+":";if(re(k))for(var tt=0;tt<k.length;tt++)ie=k[tt],Re=lt+j(ie,tt),ge+=ye(ie,ne,le,Re,he);else if(tt=S(k),typeof tt=="function")for(k=tt.call(k),tt=0;!(ie=k.next()).done;)ie=ie.value,Re=lt+j(ie,tt++),ge+=ye(ie,ne,le,Re,he);else if(Re==="object"){if(typeof k.then=="function")return ye(ve(k),ne,le,ie,he);throw ne=String(k),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ge}function K(k,ne,le){if(k==null)return k;var ie=[],he=0;return ye(k,ie,"","",function(Re){return ne.call(le,Re,he++)}),ie}function ae(k){if(k._status===-1){var ne=k._result;ne=ne(),ne.then(function(le){(k._status===0||k._status===-1)&&(k._status=1,k._result=le)},function(le){(k._status===0||k._status===-1)&&(k._status=2,k._result=le)}),k._status===-1&&(k._status=0,k._result=ne)}if(k._status===1)return k._result.default;throw k._result}var pe=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function Ue(){}return Oe.Children={map:K,forEach:function(k,ne,le){K(k,function(){ne.apply(this,arguments)},le)},count:function(k){var ne=0;return K(k,function(){ne++}),ne},toArray:function(k){return K(k,function(ne){return ne})||[]},only:function(k){if(!x(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Oe.Component=V,Oe.Fragment=t,Oe.Profiler=a,Oe.PureComponent=ee,Oe.StrictMode=s,Oe.Suspense=p,Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=se,Oe.__COMPILER_RUNTIME={__proto__:null,c:function(k){return se.H.useMemoCache(k)}},Oe.cache=function(k){return function(){return k.apply(null,arguments)}},Oe.cloneElement=function(k,ne,le){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var ie=I({},k.props),he=k.key,Re=void 0;if(ne!=null)for(ge in ne.ref!==void 0&&(Re=void 0),ne.key!==void 0&&(he=""+ne.key),ne)!fe.call(ne,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&ne.ref===void 0||(ie[ge]=ne[ge]);var ge=arguments.length-2;if(ge===1)ie.children=le;else if(1<ge){for(var lt=Array(ge),tt=0;tt<ge;tt++)lt[tt]=arguments[tt+2];ie.children=lt}return D(k.type,he,void 0,void 0,Re,ie)},Oe.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:l,_context:k},k},Oe.createElement=function(k,ne,le){var ie,he={},Re=null;if(ne!=null)for(ie in ne.key!==void 0&&(Re=""+ne.key),ne)fe.call(ne,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(he[ie]=ne[ie]);var ge=arguments.length-2;if(ge===1)he.children=le;else if(1<ge){for(var lt=Array(ge),tt=0;tt<ge;tt++)lt[tt]=arguments[tt+2];he.children=lt}if(k&&k.defaultProps)for(ie in ge=k.defaultProps,ge)he[ie]===void 0&&(he[ie]=ge[ie]);return D(k,Re,void 0,void 0,null,he)},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(k){return{$$typeof:d,render:k}},Oe.isValidElement=x,Oe.lazy=function(k){return{$$typeof:y,_payload:{_status:-1,_result:k},_init:ae}},Oe.memo=function(k,ne){return{$$typeof:g,type:k,compare:ne===void 0?null:ne}},Oe.startTransition=function(k){var ne=se.T,le={};se.T=le;try{var ie=k(),he=se.S;he!==null&&he(le,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(Ue,pe)}catch(Re){pe(Re)}finally{se.T=ne}},Oe.unstable_useCacheRefresh=function(){return se.H.useCacheRefresh()},Oe.use=function(k){return se.H.use(k)},Oe.useActionState=function(k,ne,le){return se.H.useActionState(k,ne,le)},Oe.useCallback=function(k,ne){return se.H.useCallback(k,ne)},Oe.useContext=function(k){return se.H.useContext(k)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(k,ne){return se.H.useDeferredValue(k,ne)},Oe.useEffect=function(k,ne,le){var ie=se.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(k,ne)},Oe.useId=function(){return se.H.useId()},Oe.useImperativeHandle=function(k,ne,le){return se.H.useImperativeHandle(k,ne,le)},Oe.useInsertionEffect=function(k,ne){return se.H.useInsertionEffect(k,ne)},Oe.useLayoutEffect=function(k,ne){return se.H.useLayoutEffect(k,ne)},Oe.useMemo=function(k,ne){return se.H.useMemo(k,ne)},Oe.useOptimistic=function(k,ne){return se.H.useOptimistic(k,ne)},Oe.useReducer=function(k,ne,le){return se.H.useReducer(k,ne,le)},Oe.useRef=function(k){return se.H.useRef(k)},Oe.useState=function(k){return se.H.useState(k)},Oe.useSyncExternalStore=function(k,ne,le){return se.H.useSyncExternalStore(k,ne,le)},Oe.useTransition=function(){return se.H.useTransition()},Oe.version="19.1.0",Oe}var hT;function Lg(){return hT||(hT=1,Em.exports=e1()),Em.exports}var M=Lg(),Tm={exports:{}},Su={},Sm={exports:{}},Am={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fT;function t1(){return fT||(fT=1,function(n){function e(K,ae){var pe=K.length;K.push(ae);e:for(;0<pe;){var Ue=pe-1>>>1,k=K[Ue];if(0<a(k,ae))K[Ue]=ae,K[pe]=k,pe=Ue;else break e}}function t(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var ae=K[0],pe=K.pop();if(pe!==ae){K[0]=pe;e:for(var Ue=0,k=K.length,ne=k>>>1;Ue<ne;){var le=2*(Ue+1)-1,ie=K[le],he=le+1,Re=K[he];if(0>a(ie,pe))he<k&&0>a(Re,ie)?(K[Ue]=Re,K[he]=pe,Ue=he):(K[Ue]=ie,K[le]=pe,Ue=le);else if(he<k&&0>a(Re,pe))K[Ue]=Re,K[he]=pe,Ue=he;else break e}}return ae}function a(K,ae){var pe=K.sortIndex-ae.sortIndex;return pe!==0?pe:K.id-ae.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],y=1,T=null,S=3,N=!1,I=!1,F=!1,V=!1,Y=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function re(K){for(var ae=t(g);ae!==null;){if(ae.callback===null)s(g);else if(ae.startTime<=K)s(g),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=t(g)}}function se(K){if(F=!1,re(K),!I)if(t(p)!==null)I=!0,fe||(fe=!0,j());else{var ae=t(g);ae!==null&&ye(se,ae.startTime-K)}}var fe=!1,D=-1,R=5,x=-1;function P(){return V?!0:!(n.unstable_now()-x<R)}function U(){if(V=!1,fe){var K=n.unstable_now();x=K;var ae=!0;try{e:{I=!1,F&&(F=!1,ee(D),D=-1),N=!0;var pe=S;try{t:{for(re(K),T=t(p);T!==null&&!(T.expirationTime>K&&P());){var Ue=T.callback;if(typeof Ue=="function"){T.callback=null,S=T.priorityLevel;var k=Ue(T.expirationTime<=K);if(K=n.unstable_now(),typeof k=="function"){T.callback=k,re(K),ae=!0;break t}T===t(p)&&s(p),re(K)}else s(p);T=t(p)}if(T!==null)ae=!0;else{var ne=t(g);ne!==null&&ye(se,ne.startTime-K),ae=!1}}break e}finally{T=null,S=pe,N=!1}ae=void 0}}finally{ae?j():fe=!1}}}var j;if(typeof Q=="function")j=function(){Q(U)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,ve=b.port2;b.port1.onmessage=U,j=function(){ve.postMessage(null)}}else j=function(){Y(U,0)};function ye(K,ae){D=Y(function(){K(n.unstable_now())},ae)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(K){K.callback=null},n.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<K?Math.floor(1e3/K):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(K){switch(S){case 1:case 2:case 3:var ae=3;break;default:ae=S}var pe=S;S=ae;try{return K()}finally{S=pe}},n.unstable_requestPaint=function(){V=!0},n.unstable_runWithPriority=function(K,ae){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var pe=S;S=K;try{return ae()}finally{S=pe}},n.unstable_scheduleCallback=function(K,ae,pe){var Ue=n.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?Ue+pe:Ue):pe=Ue,K){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=pe+k,K={id:y++,callback:ae,priorityLevel:K,startTime:pe,expirationTime:k,sortIndex:-1},pe>Ue?(K.sortIndex=pe,e(g,K),t(p)===null&&K===t(g)&&(F?(ee(D),D=-1):F=!0,ye(se,pe-Ue))):(K.sortIndex=k,e(p,K),I||N||(I=!0,fe||(fe=!0,j()))),K},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(K){var ae=S;return function(){var pe=S;S=ae;try{return K.apply(this,arguments)}finally{S=pe}}}}(Am)),Am}var dT;function n1(){return dT||(dT=1,Sm.exports=t1()),Sm.exports}var wm={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pT;function i1(){if(pT)return on;pT=1;var n=Lg();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:y}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,on.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,y)},on.flushSync=function(p){var g=c.T,y=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=y,s.d.f()}},on.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},on.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},on.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,N=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:S,fetchPriority:N}):y==="script"&&s.d.X(p,{crossOrigin:T,integrity:S,fetchPriority:N,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},on.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},on.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin);s.d.L(p,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},on.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},on.requestFormReset=function(p){s.d.r(p)},on.unstable_batchedUpdates=function(p,g){return p(g)},on.useFormState=function(p,g,y){return c.H.useFormState(p,g,y)},on.useFormStatus=function(){return c.H.useHostTransitionStatus()},on.version="19.1.0",on}var mT;function s1(){if(mT)return wm.exports;mT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),wm.exports=i1(),wm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gT;function r1(){if(gT)return Su;gT=1;var n=n1(),e=Lg(),t=s1();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),i;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,w=f.child;w;){if(w===o){E=!0,o=f,u=m;break}if(w===u){E=!0,u=f,o=m;break}w=w.sibling}if(!E){for(w=m.child;w;){if(w===o){E=!0,o=m,u=f;break}if(w===u){E=!0,u=m,o=f;break}w=w.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),ee=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),U=Symbol.iterator;function j(i){return i===null||typeof i!="object"?null:(i=U&&i[U]||i["@@iterator"],typeof i=="function"?i:null)}var b=Symbol.for("react.client.reference");function ve(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===b?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case I:return"Fragment";case V:return"Profiler";case F:return"StrictMode";case se:return"Suspense";case fe:return"SuspenseList";case x:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case N:return"Portal";case Q:return(i.displayName||"Context")+".Provider";case ee:return(i._context.displayName||"Context")+".Consumer";case re:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case D:return r=i.displayName||null,r!==null?r:ve(i.type)||"Memo";case R:r=i._payload,i=i._init;try{return ve(i(r))}catch{}}return null}var ye=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe={pending:!1,data:null,method:null,action:null},Ue=[],k=-1;function ne(i){return{current:i}}function le(i){0>k||(i.current=Ue[k],Ue[k]=null,k--)}function ie(i,r){k++,Ue[k]=i.current,i.current=r}var he=ne(null),Re=ne(null),ge=ne(null),lt=ne(null);function tt(i,r){switch(ie(ge,r),ie(Re,i),ie(he,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?LE(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=LE(r),i=VE(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}le(he),ie(he,i)}function pi(){le(he),le(Re),le(ge)}function Ps(i){i.memoizedState!==null&&ie(lt,i);var r=he.current,o=VE(r,i.type);r!==o&&(ie(Re,i),ie(he,o))}function Gi(i){Re.current===i&&(le(he),le(Re)),lt.current===i&&(le(lt),gu._currentValue=pe)}var xr=Object.prototype.hasOwnProperty,Or=n.unstable_scheduleCallback,Dr=n.unstable_cancelCallback,dl=n.unstable_shouldYield,bc=n.unstable_requestPaint,Un=n.unstable_now,vd=n.unstable_getCurrentPriorityLevel,pl=n.unstable_ImmediatePriority,La=n.unstable_UserBlockingPriority,kr=n.unstable_NormalPriority,Ed=n.unstable_LowPriority,Va=n.unstable_IdlePriority,ml=n.log,Rc=n.unstable_setDisableYieldValue,vt=null,Ze=null;function Rn(i){if(typeof ml=="function"&&Rc(i),Ze&&typeof Ze.setStrictMode=="function")try{Ze.setStrictMode(vt,i)}catch{}}var rn=Math.clz32?Math.clz32:Pr,Ic=Math.log,Td=Math.LN2;function Pr(i){return i>>>=0,i===0?32:31-(Ic(i)/Td|0)|0}var Mr=256,Lr=4194304;function ni(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Ua(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var f=0,m=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var w=u&134217727;return w!==0?(u=w&~m,u!==0?f=ni(u):(E&=w,E!==0?f=ni(E):o||(o=w&~i,o!==0&&(f=ni(o))))):(w=u&~m,w!==0?f=ni(w):E!==0?f=ni(E):o||(o=u&~i,o!==0&&(f=ni(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Vr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function gl(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _l(){var i=Mr;return Mr<<=1,(Mr&4194048)===0&&(Mr=256),i}function yl(){var i=Lr;return Lr<<=1,(Lr&62914560)===0&&(Lr=4194304),i}function Ki(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function $i(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function vl(i,r,o,u,f,m){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var w=i.entanglements,O=i.expirationTimes,q=i.hiddenUpdates;for(o=E&~o;0<o;){var X=31-rn(o),J=1<<X;w[X]=0,O[X]=-1;var G=q[X];if(G!==null)for(q[X]=null,X=0;X<G.length;X++){var $=G[X];$!==null&&($.lane&=-536870913)}o&=~J}u!==0&&mi(i,u,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(E&~r))}function mi(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-rn(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function El(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-rn(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function Ms(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function ja(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Ls(){var i=ae.p;return i!==0?i:(i=window.event,i===void 0?32:nT(i.type))}function Nc(i,r){var o=ae.p;try{return ae.p=i,r()}finally{ae.p=o}}var pt=Math.random().toString(36).slice(2),Pt="__reactFiber$"+pt,Nt="__reactProps$"+pt,jn="__reactContainer$"+pt,Tl="__reactEvents$"+pt,Sd="__reactListeners$"+pt,Vs="__reactHandles$"+pt,xc="__reactResources$"+pt,Ur="__reactMarker$"+pt;function Us(i){delete i[Pt],delete i[Nt],delete i[Tl],delete i[Sd],delete i[Vs]}function Yi(i){var r=i[Pt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[jn]||o[Pt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=zE(i);i!==null;){if(o=i[Pt])return o;i=zE(i)}return r}i=o,o=i.parentNode}return null}function gi(i){if(i=i[Pt]||i[jn]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function _i(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function gn(i){var r=i[xc];return r||(r=i[xc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function wt(i){i[Ur]=!0}var Sl=new Set,Ba={};function ii(i,r){Wi(i,r),Wi(i+"Capture",r)}function Wi(i,r){for(Ba[i]=r,i=0;i<r.length;i++)Sl.add(r[i])}var Oc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dc={},jr={};function kc(i){return xr.call(jr,i)?!0:xr.call(Dc,i)?!1:Oc.test(i)?jr[i]=!0:(Dc[i]=!0,!1)}function js(i,r,o){if(kc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function yi(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function Wt(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}var Br,Pc;function Qi(i){if(Br===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Br=r&&r[1]||"",Pc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Br+i+Pc}var za=!1;function Fa(i,r){if(!i||za)return"";za=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch($){var G=$}Reflect.construct(i,[],J)}else{try{J.call()}catch($){G=$}i.call(J.prototype)}}else{try{throw Error()}catch($){G=$}(J=i())&&typeof J.catch=="function"&&J.catch(function(){})}}catch($){if($&&G&&typeof $.stack=="string")return[$.stack,G.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],w=m[1];if(E&&w){var O=E.split(`
`),q=w.split(`
`);for(f=u=0;u<O.length&&!O[u].includes("DetermineComponentFrameRoot");)u++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(u===O.length||f===q.length)for(u=O.length-1,f=q.length-1;1<=u&&0<=f&&O[u]!==q[f];)f--;for(;1<=u&&0<=f;u--,f--)if(O[u]!==q[f]){if(u!==1||f!==1)do if(u--,f--,0>f||O[u]!==q[f]){var X=`
`+O[u].replace(" at new "," at ");return i.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",i.displayName)),X}while(1<=u&&0<=f);break}}}finally{za=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?Qi(o):""}function Al(i){switch(i.tag){case 26:case 27:case 5:return Qi(i.type);case 16:return Qi("Lazy");case 13:return Qi("Suspense");case 19:return Qi("SuspenseList");case 0:case 15:return Fa(i.type,!1);case 11:return Fa(i.type.render,!1);case 1:return Fa(i.type,!0);case 31:return Qi("Activity");default:return""}}function Ha(i){try{var r="";do r+=Al(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function _n(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function wl(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ad(i){var r=wl(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function qa(i){i._valueTracker||(i._valueTracker=Ad(i))}function Cl(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=wl(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function zr(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var wd=/[\n"\\]/g;function xt(i){return i.replace(wd,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function In(i,r,o,u,f,m,E,w){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+_n(r)):i.value!==""+_n(r)&&(i.value=""+_n(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?Bs(i,E,_n(r)):o!=null?Bs(i,E,_n(o)):u!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?i.name=""+_n(w):i.removeAttribute("name")}function Fr(i,r,o,u,f,m,E,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+_n(o):"",r=r!=null?""+_n(r):o,w||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=w?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function Bs(i,r,o){r==="number"&&zr(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function Xi(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+_n(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function nt(i,r,o){if(r!=null&&(r=""+_n(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+_n(o):""}function Hr(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(ye(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=_n(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function Bn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var qr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mc(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||qr.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function bl(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Mc(i,f,u)}else for(var m in r)r.hasOwnProperty(m)&&Mc(i,m,r[m])}function Rl(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ga(i){return bd.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var Zi=null;function zn(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ji=null,es=null;function Il(i){var r=gi(i);if(r&&(i=r.stateNode)){var o=i[Nt]||null;e:switch(i=r.stateNode,r.type){case"input":if(In(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+xt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[Nt]||null;if(!f)throw Error(s(90));In(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&Cl(u)}break e;case"textarea":nt(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Xi(i,!!o.multiple,r,!1)}}}var vi=!1;function Lc(i,r,o){if(vi)return i(r,o);vi=!0;try{var u=i(r);return u}finally{if(vi=!1,(Ji!==null||es!==null)&&(Nh(),Ji&&(r=Ji,i=es,es=Ji=null,Il(r),i)))for(r=0;r<i.length;r++)Il(i[r])}}function Gr(i,r){var o=i.stateNode;if(o===null)return null;var u=o[Nt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fn=!1;if(si)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){Fn=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{Fn=!1}var Ei=null,zs=null,ts=null;function Nl(){if(ts)return ts;var i,r=zs,o=r.length,u,f="value"in Ei?Ei.value:Ei.textContent,m=f.length;for(i=0;i<o&&r[i]===f[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return ts=f.slice(i,1<u?1-u:void 0)}function Ti(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Si(){return!0}function xl(){return!1}function zt(i){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var w in i)i.hasOwnProperty(w)&&(o=i[w],this[w]=o?o(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Si:xl,this.isPropagationStopped=xl,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),r}var Qe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ka=zt(Qe),$r=y({},Qe,{view:0,detail:0}),Vc=zt($r),$a,Ya,Ai,Yr=y({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ai&&(Ai&&i.type==="mousemove"?($a=i.screenX-Ai.screenX,Ya=i.screenY-Ai.screenY):Ya=$a=0,Ai=i),$a)},movementY:function(i){return"movementY"in i?i.movementY:Ya}}),Hn=zt(Yr),Uc=y({},Yr,{dataTransfer:0}),Rd=zt(Uc),Wr=y({},$r,{relatedTarget:0}),Wa=zt(Wr),Ol=y({},Qe,{animationName:0,elapsedTime:0,pseudoElement:0}),Qa=zt(Ol),jc=y({},Qe,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Xa=zt(jc),Id=y({},Qe,{data:0}),Dl=zt(Id),Qr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kl(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=zc[i])?!!r[i]:!1}function Xr(){return kl}var Fc=y({},$r,{key:function(i){if(i.key){var r=Qr[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Ti(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Bc[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xr,charCode:function(i){return i.type==="keypress"?Ti(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ti(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Za=zt(Fc),Hc=y({},Yr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pl=zt(Hc),ns=y({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xr}),qc=zt(ns),Gc=y({},Qe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kc=zt(Gc),$c=y({},Yr,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Ja=zt($c),yn=y({},Qe,{newState:0,oldState:0}),Yc=zt(yn),Wc=[9,13,27,32],wi=si&&"CompositionEvent"in window,h=null;si&&"documentMode"in document&&(h=document.documentMode);var _=si&&"TextEvent"in window&&!h,v=si&&(!wi||h&&8<h&&11>=h),C=" ",z=!1;function W(i,r){switch(i){case"keyup":return Wc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oe(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Be=!1;function Mt(i,r){switch(i){case"compositionend":return oe(r);case"keypress":return r.which!==32?null:(z=!0,C);case"textInput":return i=r.data,i===C&&z?null:i;default:return null}}function ze(i,r){if(Be)return i==="compositionend"||!wi&&W(i,r)?(i=Nl(),ts=zs=Ei=null,Be=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var Ft={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lt(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Ft[i.type]:r==="textarea"}function is(i,r,o,u){Ji?es?es.push(u):es=[u]:Ji=u,r=Mh(r,"onChange"),0<r.length&&(o=new Ka("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var Qt=null,Ci=null;function Ml(i){OE(i,0)}function Qc(i){var r=_i(i);if(Cl(r))return i}function Z_(i,r){if(i==="change")return r}var J_=!1;if(si){var Nd;if(si){var xd="oninput"in document;if(!xd){var ey=document.createElement("div");ey.setAttribute("oninput","return;"),xd=typeof ey.oninput=="function"}Nd=xd}else Nd=!1;J_=Nd&&(!document.documentMode||9<document.documentMode)}function ty(){Qt&&(Qt.detachEvent("onpropertychange",ny),Ci=Qt=null)}function ny(i){if(i.propertyName==="value"&&Qc(Ci)){var r=[];is(r,Ci,i,zn(i)),Lc(Ml,r)}}function Ib(i,r,o){i==="focusin"?(ty(),Qt=r,Ci=o,Qt.attachEvent("onpropertychange",ny)):i==="focusout"&&ty()}function Nb(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Qc(Ci)}function xb(i,r){if(i==="click")return Qc(r)}function Ob(i,r){if(i==="input"||i==="change")return Qc(r)}function Db(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Nn=typeof Object.is=="function"?Object.is:Db;function Ll(i,r){if(Nn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!xr.call(r,f)||!Nn(i[f],r[f]))return!1}return!0}function iy(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function sy(i,r){var o=iy(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=iy(o)}}function ry(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?ry(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function ay(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=zr(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=zr(i.document)}return r}function Od(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var kb=si&&"documentMode"in document&&11>=document.documentMode,eo=null,Dd=null,Vl=null,kd=!1;function oy(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;kd||eo==null||eo!==zr(u)||(u=eo,"selectionStart"in u&&Od(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Vl&&Ll(Vl,u)||(Vl=u,u=Mh(Dd,"onSelect"),0<u.length&&(r=new Ka("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=eo)))}function Zr(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var to={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionrun:Zr("Transition","TransitionRun"),transitionstart:Zr("Transition","TransitionStart"),transitioncancel:Zr("Transition","TransitionCancel"),transitionend:Zr("Transition","TransitionEnd")},Pd={},ly={};si&&(ly=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Jr(i){if(Pd[i])return Pd[i];if(!to[i])return i;var r=to[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in ly)return Pd[i]=r[o];return i}var uy=Jr("animationend"),cy=Jr("animationiteration"),hy=Jr("animationstart"),Pb=Jr("transitionrun"),Mb=Jr("transitionstart"),Lb=Jr("transitioncancel"),fy=Jr("transitionend"),dy=new Map,Md="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Md.push("scrollEnd");function ri(i,r){dy.set(i,r),ii(r,[i])}var py=new WeakMap;function qn(i,r){if(typeof i=="object"&&i!==null){var o=py.get(i);return o!==void 0?o:(r={value:i,source:r,stack:Ha(r)},py.set(i,r),r)}return{value:i,source:r,stack:Ha(r)}}var Gn=[],no=0,Ld=0;function Xc(){for(var i=no,r=Ld=no=0;r<i;){var o=Gn[r];Gn[r++]=null;var u=Gn[r];Gn[r++]=null;var f=Gn[r];Gn[r++]=null;var m=Gn[r];if(Gn[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&my(o,f,m)}}function Zc(i,r,o,u){Gn[no++]=i,Gn[no++]=r,Gn[no++]=o,Gn[no++]=u,Ld|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function Vd(i,r,o,u){return Zc(i,r,o,u),Jc(i)}function io(i,r){return Zc(i,null,null,r),Jc(i)}function my(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,f&&r!==null&&(f=31-rn(o),i=m.hiddenUpdates,u=i[f],u===null?i[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function Jc(i){if(50<lu)throw lu=0,Hp=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var so={};function Vb(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(i,r,o,u){return new Vb(i,r,o,u)}function Ud(i){return i=i.prototype,!(!i||!i.isReactComponent)}function ss(i,r){var o=i.alternate;return o===null?(o=xn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function gy(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function eh(i,r,o,u,f,m){var E=0;if(u=i,typeof i=="function")Ud(i)&&(E=1);else if(typeof i=="string")E=jR(i,o,he.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case x:return i=xn(31,o,r,f),i.elementType=x,i.lanes=m,i;case I:return ea(o.children,f,m,r);case F:E=8,f|=24;break;case V:return i=xn(12,o,r,f|2),i.elementType=V,i.lanes=m,i;case se:return i=xn(13,o,r,f),i.elementType=se,i.lanes=m,i;case fe:return i=xn(19,o,r,f),i.elementType=fe,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Y:case Q:E=10;break e;case ee:E=9;break e;case re:E=11;break e;case D:E=14;break e;case R:E=16,u=null;break e}E=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=xn(E,o,r,f),r.elementType=i,r.type=u,r.lanes=m,r}function ea(i,r,o,u){return i=xn(7,i,u,r),i.lanes=o,i}function jd(i,r,o){return i=xn(6,i,null,r),i.lanes=o,i}function Bd(i,r,o){return r=xn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var ro=[],ao=0,th=null,nh=0,Kn=[],$n=0,ta=null,rs=1,as="";function na(i,r){ro[ao++]=nh,ro[ao++]=th,th=i,nh=r}function _y(i,r,o){Kn[$n++]=rs,Kn[$n++]=as,Kn[$n++]=ta,ta=i;var u=rs;i=as;var f=32-rn(u)-1;u&=~(1<<f),o+=1;var m=32-rn(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,rs=1<<32-rn(r)+f|o<<f|u,as=m+i}else rs=1<<m|o<<f|u,as=i}function zd(i){i.return!==null&&(na(i,1),_y(i,1,0))}function Fd(i){for(;i===th;)th=ro[--ao],ro[ao]=null,nh=ro[--ao],ro[ao]=null;for(;i===ta;)ta=Kn[--$n],Kn[$n]=null,as=Kn[--$n],Kn[$n]=null,rs=Kn[--$n],Kn[$n]=null}var vn=null,Et=null,We=!1,ia=null,bi=!1,Hd=Error(s(519));function sa(i){var r=Error(s(418,""));throw Bl(qn(r,i)),Hd}function yy(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[Pt]=i,r[Nt]=u,o){case"dialog":Le("cancel",r),Le("close",r);break;case"iframe":case"object":case"embed":Le("load",r);break;case"video":case"audio":for(o=0;o<cu.length;o++)Le(cu[o],r);break;case"source":Le("error",r);break;case"img":case"image":case"link":Le("error",r),Le("load",r);break;case"details":Le("toggle",r);break;case"input":Le("invalid",r),Fr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),qa(r);break;case"select":Le("invalid",r);break;case"textarea":Le("invalid",r),Hr(r,u.value,u.defaultValue,u.children),qa(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||ME(r.textContent,o)?(u.popover!=null&&(Le("beforetoggle",r),Le("toggle",r)),u.onScroll!=null&&Le("scroll",r),u.onScrollEnd!=null&&Le("scrollend",r),u.onClick!=null&&(r.onclick=Lh),r=!0):r=!1,r||sa(i)}function vy(i){for(vn=i.return;vn;)switch(vn.tag){case 5:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:vn=vn.return}}function Ul(i){if(i!==vn)return!1;if(!We)return vy(i),We=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||rm(i.type,i.memoizedProps)),o=!o),o&&Et&&sa(i),vy(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){Et=oi(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}Et=null}}else r===27?(r=Et,ir(i.type)?(i=um,um=null,Et=i):Et=r):Et=vn?oi(i.stateNode.nextSibling):null;return!0}function jl(){Et=vn=null,We=!1}function Ey(){var i=ia;return i!==null&&(An===null?An=i:An.push.apply(An,i),ia=null),i}function Bl(i){ia===null?ia=[i]:ia.push(i)}var qd=ne(null),ra=null,os=null;function Fs(i,r,o){ie(qd,r._currentValue),r._currentValue=o}function ls(i){i._currentValue=qd.current,le(qd)}function Gd(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function Kd(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=f;for(var O=0;O<r.length;O++)if(w.context===r[O]){m.lanes|=o,w=m.alternate,w!==null&&(w.lanes|=o),Gd(m.return,o,i),u||(E=null);break e}m=w.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),Gd(E,o,i),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function zl(i,r,o,u){i=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var w=f.type;Nn(f.pendingProps.value,E.value)||(i!==null?i.push(w):i=[w])}}else if(f===lt.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(gu):i=[gu])}f=f.return}i!==null&&Kd(r,i,o,u),r.flags|=262144}function ih(i){for(i=i.firstContext;i!==null;){if(!Nn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function aa(i){ra=i,os=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function an(i){return Ty(ra,i)}function sh(i,r){return ra===null&&aa(i),Ty(i,r)}function Ty(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},os===null){if(i===null)throw Error(s(308));os=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else os=os.next=r;return o}var Ub=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},jb=n.unstable_scheduleCallback,Bb=n.unstable_NormalPriority,Vt={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $d(){return{controller:new Ub,data:new Map,refCount:0}}function Fl(i){i.refCount--,i.refCount===0&&jb(Bb,function(){i.controller.abort()})}var Hl=null,Yd=0,oo=0,lo=null;function zb(i,r){if(Hl===null){var o=Hl=[];Yd=0,oo=Qp(),lo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Yd++,r.then(Sy,Sy),r}function Sy(){if(--Yd===0&&Hl!==null){lo!==null&&(lo.status="fulfilled");var i=Hl;Hl=null,oo=0,lo=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function Fb(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Ay=K.S;K.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&zb(i,r),Ay!==null&&Ay(i,r)};var oa=ne(null);function Wd(){var i=oa.current;return i!==null?i:ut.pooledCache}function rh(i,r){r===null?ie(oa,oa.current):ie(oa,r.pool)}function wy(){var i=Wd();return i===null?null:{parent:Vt._currentValue,pool:i}}var ql=Error(s(460)),Cy=Error(s(474)),ah=Error(s(542)),Qd={then:function(){}};function by(i){return i=i.status,i==="fulfilled"||i==="rejected"}function oh(){}function Ry(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(oh,oh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Ny(i),i;default:if(typeof r.status=="string")r.then(oh,oh);else{if(i=ut,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Ny(i),i}throw Gl=r,ql}}var Gl=null;function Iy(){if(Gl===null)throw Error(s(459));var i=Gl;return Gl=null,i}function Ny(i){if(i===ql||i===ah)throw Error(s(483))}var Hs=!1;function Xd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zd(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function qs(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Gs(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(Je&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=Jc(i),my(i,null,o),r}return Zc(i,u,r,o),Jc(i)}function Kl(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,El(i,o)}}function Jd(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var ep=!1;function $l(){if(ep){var i=lo;if(i!==null)throw i}}function Yl(i,r,o,u){ep=!1;var f=i.updateQueue;Hs=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var O=w,q=O.next;O.next=null,E===null?m=q:E.next=q,E=O;var X=i.alternate;X!==null&&(X=X.updateQueue,w=X.lastBaseUpdate,w!==E&&(w===null?X.firstBaseUpdate=q:w.next=q,X.lastBaseUpdate=O))}if(m!==null){var J=f.baseState;E=0,X=q=O=null,w=m;do{var G=w.lane&-536870913,$=G!==w.lane;if($?(Fe&G)===G:(u&G)===G){G!==0&&G===oo&&(ep=!0),X!==null&&(X=X.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var be=i,Te=w;G=r;var rt=o;switch(Te.tag){case 1:if(be=Te.payload,typeof be=="function"){J=be.call(rt,J,G);break e}J=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=Te.payload,G=typeof be=="function"?be.call(rt,J,G):be,G==null)break e;J=y({},J,G);break e;case 2:Hs=!0}}G=w.callback,G!==null&&(i.flags|=64,$&&(i.flags|=8192),$=f.callbacks,$===null?f.callbacks=[G]:$.push(G))}else $={lane:G,tag:w.tag,payload:w.payload,callback:w.callback,next:null},X===null?(q=X=$,O=J):X=X.next=$,E|=G;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;$=w,w=$.next,$.next=null,f.lastBaseUpdate=$,f.shared.pending=null}}while(!0);X===null&&(O=J),f.baseState=O,f.firstBaseUpdate=q,f.lastBaseUpdate=X,m===null&&(f.shared.lanes=0),Js|=E,i.lanes=E,i.memoizedState=J}}function xy(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function Oy(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)xy(o[i],r)}var uo=ne(null),lh=ne(0);function Dy(i,r){i=ms,ie(lh,i),ie(uo,r),ms=i|r.baseLanes}function tp(){ie(lh,ms),ie(uo,uo.current)}function np(){ms=lh.current,le(uo),le(lh)}var Ks=0,De=null,it=null,Ot=null,uh=!1,co=!1,la=!1,ch=0,Wl=0,ho=null,Hb=0;function Ct(){throw Error(s(321))}function ip(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!Nn(i[o],r[o]))return!1;return!0}function sp(i,r,o,u,f,m){return Ks=m,De=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,K.H=i===null||i.memoizedState===null?mv:gv,la=!1,m=o(u,f),la=!1,co&&(m=Py(r,o,u,f)),ky(i),m}function ky(i){K.H=gh;var r=it!==null&&it.next!==null;if(Ks=0,Ot=it=De=null,uh=!1,Wl=0,ho=null,r)throw Error(s(300));i===null||Ht||(i=i.dependencies,i!==null&&ih(i)&&(Ht=!0))}function Py(i,r,o,u){De=i;var f=0;do{if(co&&(ho=null),Wl=0,co=!1,25<=f)throw Error(s(301));if(f+=1,Ot=it=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}K.H=Qb,m=r(o,u)}while(co);return m}function qb(){var i=K.H,r=i.useState()[0];return r=typeof r.then=="function"?Ql(r):r,i=i.useState()[0],(it!==null?it.memoizedState:null)!==i&&(De.flags|=1024),r}function rp(){var i=ch!==0;return ch=0,i}function ap(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function op(i){if(uh){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}uh=!1}Ks=0,Ot=it=De=null,co=!1,Wl=ch=0,ho=null}function Tn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?De.memoizedState=Ot=i:Ot=Ot.next=i,Ot}function Dt(){if(it===null){var i=De.alternate;i=i!==null?i.memoizedState:null}else i=it.next;var r=Ot===null?De.memoizedState:Ot.next;if(r!==null)Ot=r,it=i;else{if(i===null)throw De.alternate===null?Error(s(467)):Error(s(310));it=i,i={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},Ot===null?De.memoizedState=Ot=i:Ot=Ot.next=i}return Ot}function lp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ql(i){var r=Wl;return Wl+=1,ho===null&&(ho=[]),i=Ry(ho,i,r),r=De,(Ot===null?r.memoizedState:Ot.next)===null&&(r=r.alternate,K.H=r===null||r.memoizedState===null?mv:gv),i}function hh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Ql(i);if(i.$$typeof===Q)return an(i)}throw Error(s(438,String(i)))}function up(i){var r=null,o=De.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=De.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=lp(),De.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=P;return r.index++,o}function us(i,r){return typeof r=="function"?r(i):r}function fh(i){var r=Dt();return cp(r,it,i)}function cp(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{r=f.next;var w=E=null,O=null,q=r,X=!1;do{var J=q.lane&-536870913;if(J!==q.lane?(Fe&J)===J:(Ks&J)===J){var G=q.revertLane;if(G===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),J===oo&&(X=!0);else if((Ks&G)===G){q=q.next,G===oo&&(X=!0);continue}else J={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},O===null?(w=O=J,E=m):O=O.next=J,De.lanes|=G,Js|=G;J=q.action,la&&o(m,J),m=q.hasEagerState?q.eagerState:o(m,J)}else G={lane:J,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},O===null?(w=O=G,E=m):O=O.next=G,De.lanes|=J,Js|=J;q=q.next}while(q!==null&&q!==r);if(O===null?E=m:O.next=w,!Nn(m,i.memoizedState)&&(Ht=!0,X&&(o=lo,o!==null)))throw o;i.memoizedState=m,i.baseState=E,i.baseQueue=O,u.lastRenderedState=m}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function hp(i){var r=Dt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);Nn(m,r.memoizedState)||(Ht=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function My(i,r,o){var u=De,f=Dt(),m=We;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!Nn((it||f).memoizedState,o);E&&(f.memoizedState=o,Ht=!0),f=f.queue;var w=Uy.bind(null,u,f,i);if(Xl(2048,8,w,[i]),f.getSnapshot!==r||E||Ot!==null&&Ot.memoizedState.tag&1){if(u.flags|=2048,fo(9,dh(),Vy.bind(null,u,f,o,r),null),ut===null)throw Error(s(349));m||(Ks&124)!==0||Ly(u,r,o)}return o}function Ly(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=De.updateQueue,r===null?(r=lp(),De.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Vy(i,r,o,u){r.value=o,r.getSnapshot=u,jy(r)&&By(i)}function Uy(i,r,o){return o(function(){jy(r)&&By(i)})}function jy(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!Nn(i,o)}catch{return!0}}function By(i){var r=io(i,2);r!==null&&Mn(r,i,2)}function fp(i){var r=Tn();if(typeof i=="function"){var o=i;if(i=o(),la){Rn(!0);try{o()}finally{Rn(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:i},r}function zy(i,r,o,u){return i.baseState=o,cp(i,it,typeof u=="function"?u:us)}function Gb(i,r,o,u,f){if(mh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};K.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,Fy(r,m)):(m.next=o.next,r.pending=o.next=m)}}function Fy(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var m=K.T,E={};K.T=E;try{var w=o(f,u),O=K.S;O!==null&&O(E,w),Hy(i,r,w)}catch(q){dp(i,r,q)}finally{K.T=m}}else try{m=o(f,u),Hy(i,r,m)}catch(q){dp(i,r,q)}}function Hy(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){qy(i,r,u)},function(u){return dp(i,r,u)}):qy(i,r,o)}function qy(i,r,o){r.status="fulfilled",r.value=o,Gy(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,Fy(i,o)))}function dp(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Gy(r),r=r.next;while(r!==u)}i.action=null}function Gy(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function Ky(i,r){return r}function $y(i,r){if(We){var o=ut.formState;if(o!==null){e:{var u=De;if(We){if(Et){t:{for(var f=Et,m=bi;f.nodeType!==8;){if(!m){f=null;break t}if(f=oi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Et=oi(f.nextSibling),u=f.data==="F!";break e}}sa(u)}u=!1}u&&(r=o[0])}}return o=Tn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ky,lastRenderedState:r},o.queue=u,o=fv.bind(null,De,u),u.dispatch=o,u=fp(!1),m=yp.bind(null,De,!1,u.queue),u=Tn(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=Gb.bind(null,De,f,m,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function Yy(i){var r=Dt();return Wy(r,it,i)}function Wy(i,r,o){if(r=cp(i,r,Ky)[0],i=fh(us)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Ql(r)}catch(E){throw E===ql?ah:E}else u=r;r=Dt();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(De.flags|=2048,fo(9,dh(),Kb.bind(null,f,o),null)),[u,m,i]}function Kb(i,r){i.action=r}function Qy(i){var r=Dt(),o=it;if(o!==null)return Wy(r,o,i);Dt(),r=r.memoizedState,o=Dt();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function fo(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=De.updateQueue,r===null&&(r=lp(),De.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function dh(){return{destroy:void 0,resource:void 0}}function Xy(){return Dt().memoizedState}function ph(i,r,o,u){var f=Tn();u=u===void 0?null:u,De.flags|=i,f.memoizedState=fo(1|r,dh(),o,u)}function Xl(i,r,o,u){var f=Dt();u=u===void 0?null:u;var m=f.memoizedState.inst;it!==null&&u!==null&&ip(u,it.memoizedState.deps)?f.memoizedState=fo(r,m,o,u):(De.flags|=i,f.memoizedState=fo(1|r,m,o,u))}function Zy(i,r){ph(8390656,8,i,r)}function Jy(i,r){Xl(2048,8,i,r)}function ev(i,r){return Xl(4,2,i,r)}function tv(i,r){return Xl(4,4,i,r)}function nv(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function iv(i,r,o){o=o!=null?o.concat([i]):null,Xl(4,4,nv.bind(null,r,i),o)}function pp(){}function sv(i,r){var o=Dt();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&ip(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function rv(i,r){var o=Dt();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&ip(r,u[1]))return u[0];if(u=i(),la){Rn(!0);try{i()}finally{Rn(!1)}}return o.memoizedState=[u,r],u}function mp(i,r,o){return o===void 0||(Ks&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=lE(),De.lanes|=i,Js|=i,o)}function av(i,r,o,u){return Nn(o,r)?o:uo.current!==null?(i=mp(i,o,u),Nn(i,r)||(Ht=!0),i):(Ks&42)===0?(Ht=!0,i.memoizedState=o):(i=lE(),De.lanes|=i,Js|=i,r)}function ov(i,r,o,u,f){var m=ae.p;ae.p=m!==0&&8>m?m:8;var E=K.T,w={};K.T=w,yp(i,!1,r,o);try{var O=f(),q=K.S;if(q!==null&&q(w,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var X=Fb(O,u);Zl(i,r,X,Pn(i))}else Zl(i,r,u,Pn(i))}catch(J){Zl(i,r,{then:function(){},status:"rejected",reason:J},Pn())}finally{ae.p=m,K.T=E}}function $b(){}function gp(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=lv(i).queue;ov(i,f,r,pe,o===null?$b:function(){return uv(i),o(u)})}function lv(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:pe,baseState:pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:pe},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function uv(i){var r=lv(i).next.queue;Zl(i,r,{},Pn())}function _p(){return an(gu)}function cv(){return Dt().memoizedState}function hv(){return Dt().memoizedState}function Yb(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=Pn();i=qs(o);var u=Gs(r,i,o);u!==null&&(Mn(u,r,o),Kl(u,r,o)),r={cache:$d()},i.payload=r;return}r=r.return}}function Wb(i,r,o){var u=Pn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},mh(i)?dv(r,o):(o=Vd(i,r,o,u),o!==null&&(Mn(o,i,u),pv(o,r,u)))}function fv(i,r,o){var u=Pn();Zl(i,r,o,u)}function Zl(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(mh(i))dv(r,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,w=m(E,o);if(f.hasEagerState=!0,f.eagerState=w,Nn(w,E))return Zc(i,r,f,0),ut===null&&Xc(),!1}catch{}finally{}if(o=Vd(i,r,f,u),o!==null)return Mn(o,i,u),pv(o,r,u),!0}return!1}function yp(i,r,o,u){if(u={lane:2,revertLane:Qp(),action:u,hasEagerState:!1,eagerState:null,next:null},mh(i)){if(r)throw Error(s(479))}else r=Vd(i,o,u,2),r!==null&&Mn(r,i,2)}function mh(i){var r=i.alternate;return i===De||r!==null&&r===De}function dv(i,r){co=uh=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function pv(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,El(i,o)}}var gh={readContext:an,use:hh,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useLayoutEffect:Ct,useInsertionEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useSyncExternalStore:Ct,useId:Ct,useHostTransitionStatus:Ct,useFormState:Ct,useActionState:Ct,useOptimistic:Ct,useMemoCache:Ct,useCacheRefresh:Ct},mv={readContext:an,use:hh,useCallback:function(i,r){return Tn().memoizedState=[i,r===void 0?null:r],i},useContext:an,useEffect:Zy,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,ph(4194308,4,nv.bind(null,r,i),o)},useLayoutEffect:function(i,r){return ph(4194308,4,i,r)},useInsertionEffect:function(i,r){ph(4,2,i,r)},useMemo:function(i,r){var o=Tn();r=r===void 0?null:r;var u=i();if(la){Rn(!0);try{i()}finally{Rn(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=Tn();if(o!==void 0){var f=o(r);if(la){Rn(!0);try{o(r)}finally{Rn(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=Wb.bind(null,De,i),[u.memoizedState,i]},useRef:function(i){var r=Tn();return i={current:i},r.memoizedState=i},useState:function(i){i=fp(i);var r=i.queue,o=fv.bind(null,De,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:pp,useDeferredValue:function(i,r){var o=Tn();return mp(o,i,r)},useTransition:function(){var i=fp(!1);return i=ov.bind(null,De,i.queue,!0,!1),Tn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=De,f=Tn();if(We){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),ut===null)throw Error(s(349));(Fe&124)!==0||Ly(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,Zy(Uy.bind(null,u,m,i),[i]),u.flags|=2048,fo(9,dh(),Vy.bind(null,u,m,o,r),null),o},useId:function(){var i=Tn(),r=ut.identifierPrefix;if(We){var o=as,u=rs;o=(u&~(1<<32-rn(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=ch++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=Hb++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:_p,useFormState:$y,useActionState:$y,useOptimistic:function(i){var r=Tn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=yp.bind(null,De,!0,o),o.dispatch=r,[i,r]},useMemoCache:up,useCacheRefresh:function(){return Tn().memoizedState=Yb.bind(null,De)}},gv={readContext:an,use:hh,useCallback:sv,useContext:an,useEffect:Jy,useImperativeHandle:iv,useInsertionEffect:ev,useLayoutEffect:tv,useMemo:rv,useReducer:fh,useRef:Xy,useState:function(){return fh(us)},useDebugValue:pp,useDeferredValue:function(i,r){var o=Dt();return av(o,it.memoizedState,i,r)},useTransition:function(){var i=fh(us)[0],r=Dt().memoizedState;return[typeof i=="boolean"?i:Ql(i),r]},useSyncExternalStore:My,useId:cv,useHostTransitionStatus:_p,useFormState:Yy,useActionState:Yy,useOptimistic:function(i,r){var o=Dt();return zy(o,it,i,r)},useMemoCache:up,useCacheRefresh:hv},Qb={readContext:an,use:hh,useCallback:sv,useContext:an,useEffect:Jy,useImperativeHandle:iv,useInsertionEffect:ev,useLayoutEffect:tv,useMemo:rv,useReducer:hp,useRef:Xy,useState:function(){return hp(us)},useDebugValue:pp,useDeferredValue:function(i,r){var o=Dt();return it===null?mp(o,i,r):av(o,it.memoizedState,i,r)},useTransition:function(){var i=hp(us)[0],r=Dt().memoizedState;return[typeof i=="boolean"?i:Ql(i),r]},useSyncExternalStore:My,useId:cv,useHostTransitionStatus:_p,useFormState:Qy,useActionState:Qy,useOptimistic:function(i,r){var o=Dt();return it!==null?zy(o,it,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:up,useCacheRefresh:hv},po=null,Jl=0;function _h(i){var r=Jl;return Jl+=1,po===null&&(po=[]),Ry(po,i,r)}function eu(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function yh(i,r){throw r.$$typeof===T?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function _v(i){var r=i._init;return r(i._payload)}function yv(i){function r(B,L){if(i){var H=B.deletions;H===null?(B.deletions=[L],B.flags|=16):H.push(L)}}function o(B,L){if(!i)return null;for(;L!==null;)r(B,L),L=L.sibling;return null}function u(B){for(var L=new Map;B!==null;)B.key!==null?L.set(B.key,B):L.set(B.index,B),B=B.sibling;return L}function f(B,L){return B=ss(B,L),B.index=0,B.sibling=null,B}function m(B,L,H){return B.index=H,i?(H=B.alternate,H!==null?(H=H.index,H<L?(B.flags|=67108866,L):H):(B.flags|=67108866,L)):(B.flags|=1048576,L)}function E(B){return i&&B.alternate===null&&(B.flags|=67108866),B}function w(B,L,H,Z){return L===null||L.tag!==6?(L=jd(H,B.mode,Z),L.return=B,L):(L=f(L,H),L.return=B,L)}function O(B,L,H,Z){var me=H.type;return me===I?X(B,L,H.props.children,Z,H.key):L!==null&&(L.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===R&&_v(me)===L.type)?(L=f(L,H.props),eu(L,H),L.return=B,L):(L=eh(H.type,H.key,H.props,null,B.mode,Z),eu(L,H),L.return=B,L)}function q(B,L,H,Z){return L===null||L.tag!==4||L.stateNode.containerInfo!==H.containerInfo||L.stateNode.implementation!==H.implementation?(L=Bd(H,B.mode,Z),L.return=B,L):(L=f(L,H.children||[]),L.return=B,L)}function X(B,L,H,Z,me){return L===null||L.tag!==7?(L=ea(H,B.mode,Z,me),L.return=B,L):(L=f(L,H),L.return=B,L)}function J(B,L,H){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=jd(""+L,B.mode,H),L.return=B,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case S:return H=eh(L.type,L.key,L.props,null,B.mode,H),eu(H,L),H.return=B,H;case N:return L=Bd(L,B.mode,H),L.return=B,L;case R:var Z=L._init;return L=Z(L._payload),J(B,L,H)}if(ye(L)||j(L))return L=ea(L,B.mode,H,null),L.return=B,L;if(typeof L.then=="function")return J(B,_h(L),H);if(L.$$typeof===Q)return J(B,sh(B,L),H);yh(B,L)}return null}function G(B,L,H,Z){var me=L!==null?L.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return me!==null?null:w(B,L,""+H,Z);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case S:return H.key===me?O(B,L,H,Z):null;case N:return H.key===me?q(B,L,H,Z):null;case R:return me=H._init,H=me(H._payload),G(B,L,H,Z)}if(ye(H)||j(H))return me!==null?null:X(B,L,H,Z,null);if(typeof H.then=="function")return G(B,L,_h(H),Z);if(H.$$typeof===Q)return G(B,L,sh(B,H),Z);yh(B,H)}return null}function $(B,L,H,Z,me){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return B=B.get(H)||null,w(L,B,""+Z,me);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case S:return B=B.get(Z.key===null?H:Z.key)||null,O(L,B,Z,me);case N:return B=B.get(Z.key===null?H:Z.key)||null,q(L,B,Z,me);case R:var ke=Z._init;return Z=ke(Z._payload),$(B,L,H,Z,me)}if(ye(Z)||j(Z))return B=B.get(H)||null,X(L,B,Z,me,null);if(typeof Z.then=="function")return $(B,L,H,_h(Z),me);if(Z.$$typeof===Q)return $(B,L,H,sh(L,Z),me);yh(L,Z)}return null}function be(B,L,H,Z){for(var me=null,ke=null,_e=L,Se=L=0,Gt=null;_e!==null&&Se<H.length;Se++){_e.index>Se?(Gt=_e,_e=null):Gt=_e.sibling;var Ye=G(B,_e,H[Se],Z);if(Ye===null){_e===null&&(_e=Gt);break}i&&_e&&Ye.alternate===null&&r(B,_e),L=m(Ye,L,Se),ke===null?me=Ye:ke.sibling=Ye,ke=Ye,_e=Gt}if(Se===H.length)return o(B,_e),We&&na(B,Se),me;if(_e===null){for(;Se<H.length;Se++)_e=J(B,H[Se],Z),_e!==null&&(L=m(_e,L,Se),ke===null?me=_e:ke.sibling=_e,ke=_e);return We&&na(B,Se),me}for(_e=u(_e);Se<H.length;Se++)Gt=$(_e,B,Se,H[Se],Z),Gt!==null&&(i&&Gt.alternate!==null&&_e.delete(Gt.key===null?Se:Gt.key),L=m(Gt,L,Se),ke===null?me=Gt:ke.sibling=Gt,ke=Gt);return i&&_e.forEach(function(lr){return r(B,lr)}),We&&na(B,Se),me}function Te(B,L,H,Z){if(H==null)throw Error(s(151));for(var me=null,ke=null,_e=L,Se=L=0,Gt=null,Ye=H.next();_e!==null&&!Ye.done;Se++,Ye=H.next()){_e.index>Se?(Gt=_e,_e=null):Gt=_e.sibling;var lr=G(B,_e,Ye.value,Z);if(lr===null){_e===null&&(_e=Gt);break}i&&_e&&lr.alternate===null&&r(B,_e),L=m(lr,L,Se),ke===null?me=lr:ke.sibling=lr,ke=lr,_e=Gt}if(Ye.done)return o(B,_e),We&&na(B,Se),me;if(_e===null){for(;!Ye.done;Se++,Ye=H.next())Ye=J(B,Ye.value,Z),Ye!==null&&(L=m(Ye,L,Se),ke===null?me=Ye:ke.sibling=Ye,ke=Ye);return We&&na(B,Se),me}for(_e=u(_e);!Ye.done;Se++,Ye=H.next())Ye=$(_e,B,Se,Ye.value,Z),Ye!==null&&(i&&Ye.alternate!==null&&_e.delete(Ye.key===null?Se:Ye.key),L=m(Ye,L,Se),ke===null?me=Ye:ke.sibling=Ye,ke=Ye);return i&&_e.forEach(function(XR){return r(B,XR)}),We&&na(B,Se),me}function rt(B,L,H,Z){if(typeof H=="object"&&H!==null&&H.type===I&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case S:e:{for(var me=H.key;L!==null;){if(L.key===me){if(me=H.type,me===I){if(L.tag===7){o(B,L.sibling),Z=f(L,H.props.children),Z.return=B,B=Z;break e}}else if(L.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===R&&_v(me)===L.type){o(B,L.sibling),Z=f(L,H.props),eu(Z,H),Z.return=B,B=Z;break e}o(B,L);break}else r(B,L);L=L.sibling}H.type===I?(Z=ea(H.props.children,B.mode,Z,H.key),Z.return=B,B=Z):(Z=eh(H.type,H.key,H.props,null,B.mode,Z),eu(Z,H),Z.return=B,B=Z)}return E(B);case N:e:{for(me=H.key;L!==null;){if(L.key===me)if(L.tag===4&&L.stateNode.containerInfo===H.containerInfo&&L.stateNode.implementation===H.implementation){o(B,L.sibling),Z=f(L,H.children||[]),Z.return=B,B=Z;break e}else{o(B,L);break}else r(B,L);L=L.sibling}Z=Bd(H,B.mode,Z),Z.return=B,B=Z}return E(B);case R:return me=H._init,H=me(H._payload),rt(B,L,H,Z)}if(ye(H))return be(B,L,H,Z);if(j(H)){if(me=j(H),typeof me!="function")throw Error(s(150));return H=me.call(H),Te(B,L,H,Z)}if(typeof H.then=="function")return rt(B,L,_h(H),Z);if(H.$$typeof===Q)return rt(B,L,sh(B,H),Z);yh(B,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,L!==null&&L.tag===6?(o(B,L.sibling),Z=f(L,H),Z.return=B,B=Z):(o(B,L),Z=jd(H,B.mode,Z),Z.return=B,B=Z),E(B)):o(B,L)}return function(B,L,H,Z){try{Jl=0;var me=rt(B,L,H,Z);return po=null,me}catch(_e){if(_e===ql||_e===ah)throw _e;var ke=xn(29,_e,null,B.mode);return ke.lanes=Z,ke.return=B,ke}finally{}}}var mo=yv(!0),vv=yv(!1),Yn=ne(null),Ri=null;function $s(i){var r=i.alternate;ie(Ut,Ut.current&1),ie(Yn,i),Ri===null&&(r===null||uo.current!==null||r.memoizedState!==null)&&(Ri=i)}function Ev(i){if(i.tag===22){if(ie(Ut,Ut.current),ie(Yn,i),Ri===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(Ri=i)}}else Ys()}function Ys(){ie(Ut,Ut.current),ie(Yn,Yn.current)}function cs(i){le(Yn),Ri===i&&(Ri=null),le(Ut)}var Ut=ne(0);function vh(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||lm(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function vp(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:y({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Ep={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=Pn(),f=qs(u);f.payload=r,o!=null&&(f.callback=o),r=Gs(i,f,u),r!==null&&(Mn(r,i,u),Kl(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=Pn(),f=qs(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Gs(i,f,u),r!==null&&(Mn(r,i,u),Kl(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=Pn(),u=qs(o);u.tag=2,r!=null&&(u.callback=r),r=Gs(i,u,o),r!==null&&(Mn(r,i,o),Kl(r,i,o))}};function Tv(i,r,o,u,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!Ll(o,u)||!Ll(f,m):!0}function Sv(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&Ep.enqueueReplaceState(r,r.state,null)}function ua(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=y({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var Eh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function Av(i){Eh(i)}function wv(i){console.error(i)}function Cv(i){Eh(i)}function Th(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function bv(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Tp(i,r,o){return o=qs(o),o.tag=3,o.payload={element:null},o.callback=function(){Th(i,r)},o}function Rv(i){return i=qs(i),i.tag=3,i}function Iv(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;i.payload=function(){return f(m)},i.callback=function(){bv(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){bv(r,o,u),typeof f!="function"&&(er===null?er=new Set([this]):er.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function Xb(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&zl(r,o,f,!0),o=Yn.current,o!==null){switch(o.tag){case 13:return Ri===null?Gp():o.alternate===null&&Tt===0&&(Tt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Qd?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),$p(i,u,f)),!1;case 22:return o.flags|=65536,u===Qd?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),$p(i,u,f)),!1}throw Error(s(435,o.tag))}return $p(i,u,f),Gp(),!1}if(We)return r=Yn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Hd&&(i=Error(s(422),{cause:u}),Bl(qn(i,o)))):(u!==Hd&&(r=Error(s(423),{cause:u}),Bl(qn(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=qn(u,o),f=Tp(i.stateNode,u,f),Jd(i,f),Tt!==4&&(Tt=2)),!1;var m=Error(s(520),{cause:u});if(m=qn(m,o),ou===null?ou=[m]:ou.push(m),Tt!==4&&(Tt=2),r===null)return!0;u=qn(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=Tp(o.stateNode,u,i),Jd(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(er===null||!er.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=Rv(f),Iv(f,i,o,u),Jd(o,f),!1}o=o.return}while(o!==null);return!1}var Nv=Error(s(461)),Ht=!1;function Xt(i,r,o,u){r.child=i===null?vv(r,null,o,u):mo(r,i.child,o,u)}function xv(i,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var w in u)w!=="ref"&&(E[w]=u[w])}else E=u;return aa(r),u=sp(i,r,o,E,m,f),w=rp(),i!==null&&!Ht?(ap(i,r,f),hs(i,r,f)):(We&&w&&zd(r),r.flags|=1,Xt(i,r,u,f),r.child)}function Ov(i,r,o,u,f){if(i===null){var m=o.type;return typeof m=="function"&&!Ud(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,Dv(i,r,m,u,f)):(i=eh(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!Np(i,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:Ll,o(E,u)&&i.ref===r.ref)return hs(i,r,f)}return r.flags|=1,i=ss(m,u),i.ref=r.ref,i.return=r,r.child=i}function Dv(i,r,o,u,f){if(i!==null){var m=i.memoizedProps;if(Ll(m,u)&&i.ref===r.ref)if(Ht=!1,r.pendingProps=u=m,Np(i,f))(i.flags&131072)!==0&&(Ht=!0);else return r.lanes=i.lanes,hs(i,r,f)}return Sp(i,r,o,u,f)}function kv(i,r,o){var u=r.pendingProps,f=u.children,m=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,i!==null){for(f=r.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return Pv(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&rh(r,m!==null?m.cachePool:null),m!==null?Dy(r,m):tp(),Ev(r);else return r.lanes=r.childLanes=536870912,Pv(i,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(rh(r,m.cachePool),Dy(r,m),Ys(),r.memoizedState=null):(i!==null&&rh(r,null),tp(),Ys());return Xt(i,r,f,o),r.child}function Pv(i,r,o,u){var f=Wd();return f=f===null?null:{parent:Vt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&rh(r,null),tp(),Ev(r),i!==null&&zl(i,r,u,!0),null}function Sh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function Sp(i,r,o,u,f){return aa(r),o=sp(i,r,o,u,void 0,f),u=rp(),i!==null&&!Ht?(ap(i,r,f),hs(i,r,f)):(We&&u&&zd(r),r.flags|=1,Xt(i,r,o,f),r.child)}function Mv(i,r,o,u,f,m){return aa(r),r.updateQueue=null,o=Py(r,u,o,f),ky(i),u=rp(),i!==null&&!Ht?(ap(i,r,m),hs(i,r,m)):(We&&u&&zd(r),r.flags|=1,Xt(i,r,o,m),r.child)}function Lv(i,r,o,u,f){if(aa(r),r.stateNode===null){var m=so,E=o.contextType;typeof E=="object"&&E!==null&&(m=an(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ep,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},Xd(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?an(E):so,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(vp(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Ep.enqueueReplaceState(m,m.state,null),Yl(r,u,m,f),$l(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){m=r.stateNode;var w=r.memoizedProps,O=ua(o,w);m.props=O;var q=m.context,X=o.contextType;E=so,typeof X=="object"&&X!==null&&(E=an(X));var J=o.getDerivedStateFromProps;X=typeof J=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=r.pendingProps!==w,X||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||q!==E)&&Sv(r,m,u,E),Hs=!1;var G=r.memoizedState;m.state=G,Yl(r,u,m,f),$l(),q=r.memoizedState,w||G!==q||Hs?(typeof J=="function"&&(vp(r,o,J,u),q=r.memoizedState),(O=Hs||Tv(r,o,O,u,G,q,E))?(X||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=q),m.props=u,m.state=q,m.context=E,u=O):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,Zd(i,r),E=r.memoizedProps,X=ua(o,E),m.props=X,J=r.pendingProps,G=m.context,q=o.contextType,O=so,typeof q=="object"&&q!==null&&(O=an(q)),w=o.getDerivedStateFromProps,(q=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==J||G!==O)&&Sv(r,m,u,O),Hs=!1,G=r.memoizedState,m.state=G,Yl(r,u,m,f),$l();var $=r.memoizedState;E!==J||G!==$||Hs||i!==null&&i.dependencies!==null&&ih(i.dependencies)?(typeof w=="function"&&(vp(r,o,w,u),$=r.memoizedState),(X=Hs||Tv(r,o,X,u,G,$,O)||i!==null&&i.dependencies!==null&&ih(i.dependencies))?(q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,$,O),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,$,O)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&G===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&G===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=$),m.props=u,m.state=$,m.context=O,u=X):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&G===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&G===i.memoizedState||(r.flags|=1024),u=!1)}return m=u,Sh(i,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&u?(r.child=mo(r,i.child,null,f),r.child=mo(r,null,o,f)):Xt(i,r,o,f),r.memoizedState=m.state,i=r.child):i=hs(i,r,f),i}function Vv(i,r,o,u){return jl(),r.flags|=256,Xt(i,r,o,u),r.child}var Ap={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wp(i){return{baseLanes:i,cachePool:wy()}}function Cp(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=Wn),i}function Uv(i,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=i!==null&&i.memoizedState===null?!1:(Ut.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(We){if(f?$s(r):Ys(),We){var w=Et,O;if(O=w){e:{for(O=w,w=bi;O.nodeType!==8;){if(!w){w=null;break e}if(O=oi(O.nextSibling),O===null){w=null;break e}}w=O}w!==null?(r.memoizedState={dehydrated:w,treeContext:ta!==null?{id:rs,overflow:as}:null,retryLane:536870912,hydrationErrors:null},O=xn(18,null,null,0),O.stateNode=w,O.return=r,r.child=O,vn=r,Et=null,O=!0):O=!1}O||sa(r)}if(w=r.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return lm(w)?r.lanes=32:r.lanes=536870912,null;cs(r)}return w=u.children,u=u.fallback,f?(Ys(),f=r.mode,w=Ah({mode:"hidden",children:w},f),u=ea(u,f,o,null),w.return=r,u.return=r,w.sibling=u,r.child=w,f=r.child,f.memoizedState=wp(o),f.childLanes=Cp(i,E,o),r.memoizedState=Ap,u):($s(r),bp(r,w))}if(O=i.memoizedState,O!==null&&(w=O.dehydrated,w!==null)){if(m)r.flags&256?($s(r),r.flags&=-257,r=Rp(i,r,o)):r.memoizedState!==null?(Ys(),r.child=i.child,r.flags|=128,r=null):(Ys(),f=u.fallback,w=r.mode,u=Ah({mode:"visible",children:u.children},w),f=ea(f,w,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,mo(r,i.child,null,o),u=r.child,u.memoizedState=wp(o),u.childLanes=Cp(i,E,o),r.memoizedState=Ap,r=f);else if($s(r),lm(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var q=E.dgst;E=q,u=Error(s(419)),u.stack="",u.digest=E,Bl({value:u,source:null,stack:null}),r=Rp(i,r,o)}else if(Ht||zl(i,r,o,!1),E=(o&i.childLanes)!==0,Ht||E){if(E=ut,E!==null&&(u=o&-o,u=(u&42)!==0?1:Ms(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==O.retryLane))throw O.retryLane=u,io(i,u),Mn(E,i,u),Nv;w.data==="$?"||Gp(),r=Rp(i,r,o)}else w.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=O.treeContext,Et=oi(w.nextSibling),vn=r,We=!0,ia=null,bi=!1,i!==null&&(Kn[$n++]=rs,Kn[$n++]=as,Kn[$n++]=ta,rs=i.id,as=i.overflow,ta=r),r=bp(r,u.children),r.flags|=4096);return r}return f?(Ys(),f=u.fallback,w=r.mode,O=i.child,q=O.sibling,u=ss(O,{mode:"hidden",children:u.children}),u.subtreeFlags=O.subtreeFlags&65011712,q!==null?f=ss(q,f):(f=ea(f,w,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,w=i.child.memoizedState,w===null?w=wp(o):(O=w.cachePool,O!==null?(q=Vt._currentValue,O=O.parent!==q?{parent:q,pool:q}:O):O=wy(),w={baseLanes:w.baseLanes|o,cachePool:O}),f.memoizedState=w,f.childLanes=Cp(i,E,o),r.memoizedState=Ap,u):($s(r),o=i.child,i=o.sibling,o=ss(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function bp(i,r){return r=Ah({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Ah(i,r){return i=xn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function Rp(i,r,o){return mo(r,i.child,null,o),i=bp(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function jv(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),Gd(i.return,r,o)}function Ip(i,r,o,u,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function Bv(i,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(Xt(i,r,u.children,o),u=Ut.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&jv(i,o,r);else if(i.tag===19)jv(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(ie(Ut,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&vh(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),Ip(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&vh(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}Ip(r,!0,o,null,m);break;case"together":Ip(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function hs(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),Js|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(zl(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=ss(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=ss(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function Np(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&ih(i)))}function Zb(i,r,o){switch(r.tag){case 3:tt(r,r.stateNode.containerInfo),Fs(r,Vt,i.memoizedState.cache),jl();break;case 27:case 5:Ps(r);break;case 4:tt(r,r.stateNode.containerInfo);break;case 10:Fs(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?($s(r),r.flags|=128,null):(o&r.child.childLanes)!==0?Uv(i,r,o):($s(r),i=hs(i,r,o),i!==null?i.sibling:null);$s(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(zl(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return Bv(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ie(Ut,Ut.current),u)break;return null;case 22:case 23:return r.lanes=0,kv(i,r,o);case 24:Fs(r,Vt,i.memoizedState.cache)}return hs(i,r,o)}function zv(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)Ht=!0;else{if(!Np(i,o)&&(r.flags&128)===0)return Ht=!1,Zb(i,r,o);Ht=(i.flags&131072)!==0}else Ht=!1,We&&(r.flags&1048576)!==0&&_y(r,nh,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")Ud(u)?(i=ua(u,i),r.tag=1,r=Lv(null,r,u,i,o)):(r.tag=0,r=Sp(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===re){r.tag=11,r=xv(null,r,u,i,o);break e}else if(f===D){r.tag=14,r=Ov(null,r,u,i,o);break e}}throw r=ve(u)||u,Error(s(306,r,""))}}return r;case 0:return Sp(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=ua(u,r.pendingProps),Lv(i,r,u,f,o);case 3:e:{if(tt(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,Zd(i,r),Yl(r,u,null,o);var E=r.memoizedState;if(u=E.cache,Fs(r,Vt,u),u!==m.cache&&Kd(r,[Vt],o,!0),$l(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=Vv(i,r,u,o);break e}else if(u!==f){f=qn(Error(s(424)),r),Bl(f),r=Vv(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(Et=oi(i.firstChild),vn=r,We=!0,ia=null,bi=!0,o=vv(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(jl(),u===f){r=hs(i,r,o);break e}Xt(i,r,u,o)}r=r.child}return r;case 26:return Sh(i,r),i===null?(o=GE(r.type,null,r.pendingProps,null))?r.memoizedState=o:We||(o=r.type,i=r.pendingProps,u=Vh(ge.current).createElement(o),u[Pt]=r,u[Nt]=i,Jt(u,o,i),wt(u),r.stateNode=u):r.memoizedState=GE(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Ps(r),i===null&&We&&(u=r.stateNode=FE(r.type,r.pendingProps,ge.current),vn=r,bi=!0,f=Et,ir(r.type)?(um=f,Et=oi(u.firstChild)):Et=f),Xt(i,r,r.pendingProps.children,o),Sh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&We&&((f=u=Et)&&(u=bR(u,r.type,r.pendingProps,bi),u!==null?(r.stateNode=u,vn=r,Et=oi(u.firstChild),bi=!1,f=!0):f=!1),f||sa(r)),Ps(r),f=r.type,m=r.pendingProps,E=i!==null?i.memoizedProps:null,u=m.children,rm(f,m)?u=null:E!==null&&rm(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=sp(i,r,qb,null,null,o),gu._currentValue=f),Sh(i,r),Xt(i,r,u,o),r.child;case 6:return i===null&&We&&((i=o=Et)&&(o=RR(o,r.pendingProps,bi),o!==null?(r.stateNode=o,vn=r,Et=null,i=!0):i=!1),i||sa(r)),null;case 13:return Uv(i,r,o);case 4:return tt(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=mo(r,null,u,o):Xt(i,r,u,o),r.child;case 11:return xv(i,r,r.type,r.pendingProps,o);case 7:return Xt(i,r,r.pendingProps,o),r.child;case 8:return Xt(i,r,r.pendingProps.children,o),r.child;case 12:return Xt(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Fs(r,r.type,u.value),Xt(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,aa(r),f=an(f),u=u(f),r.flags|=1,Xt(i,r,u,o),r.child;case 14:return Ov(i,r,r.type,r.pendingProps,o);case 15:return Dv(i,r,r.type,r.pendingProps,o);case 19:return Bv(i,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},i===null?(o=Ah(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=ss(i.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return kv(i,r,o);case 24:return aa(r),u=an(Vt),i===null?(f=Wd(),f===null&&(f=ut,m=$d(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},Xd(r),Fs(r,Vt,f)):((i.lanes&o)!==0&&(Zd(i,r),Yl(r,null,null,o),$l()),f=i.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Fs(r,Vt,u)):(u=m.cache,Fs(r,Vt,u),u!==f.cache&&Kd(r,[Vt],o,!0))),Xt(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function fs(i){i.flags|=4}function Fv(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!QE(r)){if(r=Yn.current,r!==null&&((Fe&4194048)===Fe?Ri!==null:(Fe&62914560)!==Fe&&(Fe&536870912)===0||r!==Ri))throw Gl=Qd,Cy;i.flags|=8192}}function wh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?yl():536870912,i.lanes|=r,vo|=r)}function tu(i,r){if(!We)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function gt(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function Jb(i,r,o){var u=r.pendingProps;switch(Fd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(r),null;case 1:return gt(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),ls(Vt),pi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(Ul(r)?fs(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ey())),gt(r),null;case 26:return o=r.memoizedState,i===null?(fs(r),o!==null?(gt(r),Fv(r,o)):(gt(r),r.flags&=-16777217)):o?o!==i.memoizedState?(fs(r),gt(r),Fv(r,o)):(gt(r),r.flags&=-16777217):(i.memoizedProps!==u&&fs(r),gt(r),r.flags&=-16777217),null;case 27:Gi(r),o=ge.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&fs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return gt(r),null}i=he.current,Ul(r)?yy(r):(i=FE(f,u,o),r.stateNode=i,fs(r))}return gt(r),null;case 5:if(Gi(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&fs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return gt(r),null}if(i=he.current,Ul(r))yy(r);else{switch(f=Vh(ge.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[Pt]=r,i[Nt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(Jt(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&fs(r)}}return gt(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&fs(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=ge.current,Ul(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=vn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[Pt]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||ME(i.nodeValue,o)),i||sa(r)}else i=Vh(i).createTextNode(u),i[Pt]=r,r.stateNode=i}return gt(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=Ul(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Pt]=r}else jl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;gt(r),f=!1}else f=Ey(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(cs(r),r):(cs(r),null)}if(cs(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),wh(r,r.updateQueue),gt(r),null;case 4:return pi(),i===null&&em(r.stateNode.containerInfo),gt(r),null;case 10:return ls(r.type),gt(r),null;case 19:if(le(Ut),f=r.memoizedState,f===null)return gt(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)tu(f,!1);else{if(Tt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=vh(i),m!==null){for(r.flags|=128,tu(f,!1),i=m.updateQueue,r.updateQueue=i,wh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)gy(o,i),o=o.sibling;return ie(Ut,Ut.current&1|2),r.child}i=i.sibling}f.tail!==null&&Un()>Rh&&(r.flags|=128,u=!0,tu(f,!1),r.lanes=4194304)}else{if(!u)if(i=vh(m),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,wh(r,i),tu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!We)return gt(r),null}else 2*Un()-f.renderingStartTime>Rh&&o!==536870912&&(r.flags|=128,u=!0,tu(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(i=f.last,i!==null?i.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Un(),r.sibling=null,i=Ut.current,ie(Ut,u?i&1|2:i&1),r):(gt(r),null);case 22:case 23:return cs(r),np(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(gt(r),r.subtreeFlags&6&&(r.flags|=8192)):gt(r),o=r.updateQueue,o!==null&&wh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&le(oa),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),ls(Vt),gt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function eR(i,r){switch(Fd(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return ls(Vt),pi(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return Gi(r),null;case 13:if(cs(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));jl()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return le(Ut),null;case 4:return pi(),null;case 10:return ls(r.type),null;case 22:case 23:return cs(r),np(),i!==null&&le(oa),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return ls(Vt),null;case 25:return null;default:return null}}function Hv(i,r){switch(Fd(r),r.tag){case 3:ls(Vt),pi();break;case 26:case 27:case 5:Gi(r);break;case 4:pi();break;case 13:cs(r);break;case 19:le(Ut);break;case 10:ls(r.type);break;case 22:case 23:cs(r),np(),i!==null&&le(oa);break;case 24:ls(Vt)}}function nu(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(w){ot(r,r.return,w)}}function Ws(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&i)===i){var E=u.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,f=r;var O=o,q=w;try{q()}catch(X){ot(f,O,X)}}}u=u.next}while(u!==m)}}catch(X){ot(r,r.return,X)}}function qv(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{Oy(r,o)}catch(u){ot(i,i.return,u)}}}function Gv(i,r,o){o.props=ua(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){ot(i,r,u)}}function iu(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(f){ot(i,r,f)}}function Ii(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){ot(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){ot(i,r,f)}else o.current=null}function Kv(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){ot(i,i.return,f)}}function xp(i,r,o){try{var u=i.stateNode;TR(u,i.type,o,r),u[Nt]=r}catch(f){ot(i,i.return,f)}}function $v(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&ir(i.type)||i.tag===4}function Op(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||$v(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&ir(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Dp(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Lh));else if(u!==4&&(u===27&&ir(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(Dp(i,r,o),i=i.sibling;i!==null;)Dp(i,r,o),i=i.sibling}function Ch(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&ir(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(Ch(i,r,o),i=i.sibling;i!==null;)Ch(i,r,o),i=i.sibling}function Yv(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);Jt(r,u,o),r[Pt]=i,r[Nt]=o}catch(m){ot(i,i.return,m)}}var ds=!1,bt=!1,kp=!1,Wv=typeof WeakSet=="function"?WeakSet:Set,qt=null;function tR(i,r){if(i=i.containerInfo,im=Hh,i=ay(i),Od(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,w=-1,O=-1,q=0,X=0,J=i,G=null;t:for(;;){for(var $;J!==o||f!==0&&J.nodeType!==3||(w=E+f),J!==m||u!==0&&J.nodeType!==3||(O=E+u),J.nodeType===3&&(E+=J.nodeValue.length),($=J.firstChild)!==null;)G=J,J=$;for(;;){if(J===i)break t;if(G===o&&++q===f&&(w=E),G===m&&++X===u&&(O=E),($=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=$}o=w===-1||O===-1?null:{start:w,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(sm={focusedElem:i,selectionRange:o},Hh=!1,qt=r;qt!==null;)if(r=qt,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,qt=i;else for(;qt!==null;){switch(r=qt,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var be=ua(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(be,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(Te){ot(o,o.return,Te)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)om(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":om(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,qt=i;break}qt=r.return}}function Qv(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Qs(i,o),u&4&&nu(5,o);break;case 1:if(Qs(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){ot(o,o.return,E)}else{var f=ua(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){ot(o,o.return,E)}}u&64&&qv(o),u&512&&iu(o,o.return);break;case 3:if(Qs(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Oy(i,r)}catch(E){ot(o,o.return,E)}}break;case 27:r===null&&u&4&&Yv(o);case 26:case 5:Qs(i,o),r===null&&u&4&&Kv(o),u&512&&iu(o,o.return);break;case 12:Qs(i,o);break;case 13:Qs(i,o),u&4&&Jv(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=cR.bind(null,o),IR(i,o))));break;case 22:if(u=o.memoizedState!==null||ds,!u){r=r!==null&&r.memoizedState!==null||bt,f=ds;var m=bt;ds=u,(bt=r)&&!m?Xs(i,o,(o.subtreeFlags&8772)!==0):Qs(i,o),ds=f,bt=m}break;case 30:break;default:Qs(i,o)}}function Xv(i){var r=i.alternate;r!==null&&(i.alternate=null,Xv(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Us(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var mt=null,Sn=!1;function ps(i,r,o){for(o=o.child;o!==null;)Zv(i,r,o),o=o.sibling}function Zv(i,r,o){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(vt,o)}catch{}switch(o.tag){case 26:bt||Ii(o,r),ps(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:bt||Ii(o,r);var u=mt,f=Sn;ir(o.type)&&(mt=o.stateNode,Sn=!1),ps(i,r,o),fu(o.stateNode),mt=u,Sn=f;break;case 5:bt||Ii(o,r);case 6:if(u=mt,f=Sn,mt=null,ps(i,r,o),mt=u,Sn=f,mt!==null)if(Sn)try{(mt.nodeType===9?mt.body:mt.nodeName==="HTML"?mt.ownerDocument.body:mt).removeChild(o.stateNode)}catch(m){ot(o,r,m)}else try{mt.removeChild(o.stateNode)}catch(m){ot(o,r,m)}break;case 18:mt!==null&&(Sn?(i=mt,BE(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),Eu(i)):BE(mt,o.stateNode));break;case 4:u=mt,f=Sn,mt=o.stateNode.containerInfo,Sn=!0,ps(i,r,o),mt=u,Sn=f;break;case 0:case 11:case 14:case 15:bt||Ws(2,o,r),bt||Ws(4,o,r),ps(i,r,o);break;case 1:bt||(Ii(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&Gv(o,r,u)),ps(i,r,o);break;case 21:ps(i,r,o);break;case 22:bt=(u=bt)||o.memoizedState!==null,ps(i,r,o),bt=u;break;default:ps(i,r,o)}}function Jv(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Eu(i)}catch(o){ot(r,r.return,o)}}function nR(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new Wv),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new Wv),r;default:throw Error(s(435,i.tag))}}function Pp(i,r){var o=nR(i);r.forEach(function(u){var f=hR.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function On(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=i,E=r,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(ir(w.type)){mt=w.stateNode,Sn=!1;break e}break;case 5:mt=w.stateNode,Sn=!1;break e;case 3:case 4:mt=w.stateNode.containerInfo,Sn=!0;break e}w=w.return}if(mt===null)throw Error(s(160));Zv(m,E,f),mt=null,Sn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)eE(r,i),r=r.sibling}var ai=null;function eE(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:On(r,i),Dn(i),u&4&&(Ws(3,i,i.return),nu(3,i),Ws(5,i,i.return));break;case 1:On(r,i),Dn(i),u&512&&(bt||o===null||Ii(o,o.return)),u&64&&ds&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=ai;if(On(r,i),Dn(i),u&512&&(bt||o===null||Ii(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ur]||m[Pt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),Jt(m,u,o),m[Pt]=i,wt(m),u=m;break e;case"link":var E=YE("link","href",f).get(u+(o.href||""));if(E){for(var w=0;w<E.length;w++)if(m=E[w],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(w,1);break t}}m=f.createElement(u),Jt(m,u,o),f.head.appendChild(m);break;case"meta":if(E=YE("meta","content",f).get(u+(o.content||""))){for(w=0;w<E.length;w++)if(m=E[w],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(w,1);break t}}m=f.createElement(u),Jt(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[Pt]=i,wt(m),u=m}i.stateNode=u}else WE(f,i.type,i.stateNode);else i.stateNode=$E(f,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?WE(f,i.type,i.stateNode):$E(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&xp(i,i.memoizedProps,o.memoizedProps)}break;case 27:On(r,i),Dn(i),u&512&&(bt||o===null||Ii(o,o.return)),o!==null&&u&4&&xp(i,i.memoizedProps,o.memoizedProps);break;case 5:if(On(r,i),Dn(i),u&512&&(bt||o===null||Ii(o,o.return)),i.flags&32){f=i.stateNode;try{Bn(f,"")}catch($){ot(i,i.return,$)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,xp(i,f,o!==null?o.memoizedProps:f)),u&1024&&(kp=!0);break;case 6:if(On(r,i),Dn(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch($){ot(i,i.return,$)}}break;case 3:if(Bh=null,f=ai,ai=Uh(r.containerInfo),On(r,i),ai=f,Dn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Eu(r.containerInfo)}catch($){ot(i,i.return,$)}kp&&(kp=!1,tE(i));break;case 4:u=ai,ai=Uh(i.stateNode.containerInfo),On(r,i),Dn(i),ai=u;break;case 12:On(r,i),Dn(i);break;case 13:On(r,i),Dn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Bp=Un()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,Pp(i,u)));break;case 22:f=i.memoizedState!==null;var O=o!==null&&o.memoizedState!==null,q=ds,X=bt;if(ds=q||f,bt=X||O,On(r,i),bt=X,ds=q,Dn(i),u&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||O||ds||bt||ca(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){O=o=r;try{if(m=O.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=O.stateNode;var J=O.memoizedProps.style,G=J!=null&&J.hasOwnProperty("display")?J.display:null;w.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch($){ot(O,O.return,$)}}}else if(r.tag===6){if(o===null){O=r;try{O.stateNode.nodeValue=f?"":O.memoizedProps}catch($){ot(O,O.return,$)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Pp(i,o))));break;case 19:On(r,i),Dn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,Pp(i,u)));break;case 30:break;case 21:break;default:On(r,i),Dn(i)}}function Dn(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if($v(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=Op(i);Ch(i,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(Bn(E,""),o.flags&=-33);var w=Op(i);Ch(i,w,E);break;case 3:case 4:var O=o.stateNode.containerInfo,q=Op(i);Dp(i,q,O);break;default:throw Error(s(161))}}catch(X){ot(i,i.return,X)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function tE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;tE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function Qs(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Qv(i,r.alternate,r),r=r.sibling}function ca(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Ws(4,r,r.return),ca(r);break;case 1:Ii(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&Gv(r,r.return,o),ca(r);break;case 27:fu(r.stateNode);case 26:case 5:Ii(r,r.return),ca(r);break;case 22:r.memoizedState===null&&ca(r);break;case 30:ca(r);break;default:ca(r)}i=i.sibling}}function Xs(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:Xs(f,m,o),nu(4,m);break;case 1:if(Xs(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){ot(u,u.return,q)}if(u=m,f=u.updateQueue,f!==null){var w=u.stateNode;try{var O=f.shared.hiddenCallbacks;if(O!==null)for(f.shared.hiddenCallbacks=null,f=0;f<O.length;f++)xy(O[f],w)}catch(q){ot(u,u.return,q)}}o&&E&64&&qv(m),iu(m,m.return);break;case 27:Yv(m);case 26:case 5:Xs(f,m,o),o&&u===null&&E&4&&Kv(m),iu(m,m.return);break;case 12:Xs(f,m,o);break;case 13:Xs(f,m,o),o&&E&4&&Jv(f,m);break;case 22:m.memoizedState===null&&Xs(f,m,o),iu(m,m.return);break;case 30:break;default:Xs(f,m,o)}r=r.sibling}}function Mp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&Fl(o))}function Lp(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Fl(i))}function Ni(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)nE(i,r,o,u),r=r.sibling}function nE(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Ni(i,r,o,u),f&2048&&nu(9,r);break;case 1:Ni(i,r,o,u);break;case 3:Ni(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Fl(i)));break;case 12:if(f&2048){Ni(i,r,o,u),i=r.stateNode;try{var m=r.memoizedProps,E=m.id,w=m.onPostCommit;typeof w=="function"&&w(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(O){ot(r,r.return,O)}}else Ni(i,r,o,u);break;case 13:Ni(i,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Ni(i,r,o,u):su(i,r):m._visibility&2?Ni(i,r,o,u):(m._visibility|=2,go(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&Mp(E,r);break;case 24:Ni(i,r,o,u),f&2048&&Lp(r.alternate,r);break;default:Ni(i,r,o,u)}}function go(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,E=r,w=o,O=u,q=E.flags;switch(E.tag){case 0:case 11:case 15:go(m,E,w,O,f),nu(8,E);break;case 23:break;case 22:var X=E.stateNode;E.memoizedState!==null?X._visibility&2?go(m,E,w,O,f):su(m,E):(X._visibility|=2,go(m,E,w,O,f)),f&&q&2048&&Mp(E.alternate,E);break;case 24:go(m,E,w,O,f),f&&q&2048&&Lp(E.alternate,E);break;default:go(m,E,w,O,f)}r=r.sibling}}function su(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:su(o,u),f&2048&&Mp(u.alternate,u);break;case 24:su(o,u),f&2048&&Lp(u.alternate,u);break;default:su(o,u)}r=r.sibling}}var ru=8192;function _o(i){if(i.subtreeFlags&ru)for(i=i.child;i!==null;)iE(i),i=i.sibling}function iE(i){switch(i.tag){case 26:_o(i),i.flags&ru&&i.memoizedState!==null&&zR(ai,i.memoizedState,i.memoizedProps);break;case 5:_o(i);break;case 3:case 4:var r=ai;ai=Uh(i.stateNode.containerInfo),_o(i),ai=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=ru,ru=16777216,_o(i),ru=r):_o(i));break;default:_o(i)}}function sE(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function au(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];qt=u,aE(u,i)}sE(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)rE(i),i=i.sibling}function rE(i){switch(i.tag){case 0:case 11:case 15:au(i),i.flags&2048&&Ws(9,i,i.return);break;case 3:au(i);break;case 12:au(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,bh(i)):au(i);break;default:au(i)}}function bh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];qt=u,aE(u,i)}sE(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Ws(8,r,r.return),bh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,bh(r));break;default:bh(r)}i=i.sibling}}function aE(i,r){for(;qt!==null;){var o=qt;switch(o.tag){case 0:case 11:case 15:Ws(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Fl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,qt=u;else e:for(o=i;qt!==null;){u=qt;var f=u.sibling,m=u.return;if(Xv(u),u===o){qt=null;break e}if(f!==null){f.return=m,qt=f;break e}qt=m}}}var iR={getCacheForType:function(i){var r=an(Vt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},sR=typeof WeakMap=="function"?WeakMap:Map,Je=0,ut=null,Me=null,Fe=0,et=0,kn=null,Zs=!1,yo=!1,Vp=!1,ms=0,Tt=0,Js=0,ha=0,Up=0,Wn=0,vo=0,ou=null,An=null,jp=!1,Bp=0,Rh=1/0,Ih=null,er=null,Zt=0,tr=null,Eo=null,To=0,zp=0,Fp=null,oE=null,lu=0,Hp=null;function Pn(){if((Je&2)!==0&&Fe!==0)return Fe&-Fe;if(K.T!==null){var i=oo;return i!==0?i:Qp()}return Ls()}function lE(){Wn===0&&(Wn=(Fe&536870912)===0||We?_l():536870912);var i=Yn.current;return i!==null&&(i.flags|=32),Wn}function Mn(i,r,o){(i===ut&&(et===2||et===9)||i.cancelPendingCommit!==null)&&(So(i,0),nr(i,Fe,Wn,!1)),$i(i,o),((Je&2)===0||i!==ut)&&(i===ut&&((Je&2)===0&&(ha|=o),Tt===4&&nr(i,Fe,Wn,!1)),xi(i))}function uE(i,r,o){if((Je&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Vr(i,r),f=u?oR(i,r):Kp(i,r,!0),m=u;do{if(f===0){yo&&!u&&nr(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!rR(o)){f=Kp(i,r,!1),m=!1;continue}if(f===2){if(m=r,i.errorRecoveryDisabledLanes&m)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var w=i;f=ou;var O=w.current.memoizedState.isDehydrated;if(O&&(So(w,E).flags|=256),E=Kp(w,E,!1),E!==2){if(Vp&&!O){w.errorRecoveryDisabledLanes|=m,ha|=m,f=4;break e}m=An,An=f,m!==null&&(An===null?An=m:An.push.apply(An,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){So(i,0),nr(i,r,0,!0);break}e:{switch(u=i,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:nr(u,r,Wn,!Zs);break e;case 2:An=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=Bp+300-Un(),10<f)){if(nr(u,r,Wn,!Zs),Ua(u,0,!0)!==0)break e;u.timeoutHandle=UE(cE.bind(null,u,o,An,Ih,jp,r,Wn,ha,vo,Zs,m,2,-0,0),f);break e}cE(u,o,An,Ih,jp,r,Wn,ha,vo,Zs,m,0,-0,0)}}break}while(!0);xi(i)}function cE(i,r,o,u,f,m,E,w,O,q,X,J,G,$){if(i.timeoutHandle=-1,J=r.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(mu={stylesheets:null,count:0,unsuspend:BR},iE(r),J=FR(),J!==null)){i.cancelPendingCommit=J(_E.bind(null,i,r,m,o,u,f,E,w,O,X,1,G,$)),nr(i,m,E,!q);return}_E(i,r,m,o,u,f,E,w,O)}function rR(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Nn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function nr(i,r,o,u){r&=~Up,r&=~ha,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var m=31-rn(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&mi(i,o,r)}function Nh(){return(Je&6)===0?(uu(0),!1):!0}function qp(){if(Me!==null){if(et===0)var i=Me.return;else i=Me,os=ra=null,op(i),po=null,Jl=0,i=Me;for(;i!==null;)Hv(i.alternate,i),i=i.return;Me=null}}function So(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,AR(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),qp(),ut=i,Me=o=ss(i.current,null),Fe=r,et=0,kn=null,Zs=!1,yo=Vr(i,r),Vp=!1,vo=Wn=Up=ha=Js=Tt=0,An=ou=null,jp=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-rn(u),m=1<<f;r|=i[f],u&=~m}return ms=r,Xc(),o}function hE(i,r){De=null,K.H=gh,r===ql||r===ah?(r=Iy(),et=3):r===Cy?(r=Iy(),et=4):et=r===Nv?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,kn=r,Me===null&&(Tt=1,Th(i,qn(r,i.current)))}function fE(){var i=K.H;return K.H=gh,i===null?gh:i}function dE(){var i=K.A;return K.A=iR,i}function Gp(){Tt=4,Zs||(Fe&4194048)!==Fe&&Yn.current!==null||(yo=!0),(Js&134217727)===0&&(ha&134217727)===0||ut===null||nr(ut,Fe,Wn,!1)}function Kp(i,r,o){var u=Je;Je|=2;var f=fE(),m=dE();(ut!==i||Fe!==r)&&(Ih=null,So(i,r)),r=!1;var E=Tt;e:do try{if(et!==0&&Me!==null){var w=Me,O=kn;switch(et){case 8:qp(),E=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(r=!0);var q=et;if(et=0,kn=null,Ao(i,w,O,q),o&&yo){E=0;break e}break;default:q=et,et=0,kn=null,Ao(i,w,O,q)}}aR(),E=Tt;break}catch(X){hE(i,X)}while(!0);return r&&i.shellSuspendCounter++,os=ra=null,Je=u,K.H=f,K.A=m,Me===null&&(ut=null,Fe=0,Xc()),E}function aR(){for(;Me!==null;)pE(Me)}function oR(i,r){var o=Je;Je|=2;var u=fE(),f=dE();ut!==i||Fe!==r?(Ih=null,Rh=Un()+500,So(i,r)):yo=Vr(i,r);e:do try{if(et!==0&&Me!==null){r=Me;var m=kn;t:switch(et){case 1:et=0,kn=null,Ao(i,r,m,1);break;case 2:case 9:if(by(m)){et=0,kn=null,mE(r);break}r=function(){et!==2&&et!==9||ut!==i||(et=7),xi(i)},m.then(r,r);break e;case 3:et=7;break e;case 4:et=5;break e;case 7:by(m)?(et=0,kn=null,mE(r)):(et=0,kn=null,Ao(i,r,m,7));break;case 5:var E=null;switch(Me.tag){case 26:E=Me.memoizedState;case 5:case 27:var w=Me;if(!E||QE(E)){et=0,kn=null;var O=w.sibling;if(O!==null)Me=O;else{var q=w.return;q!==null?(Me=q,xh(q)):Me=null}break t}}et=0,kn=null,Ao(i,r,m,5);break;case 6:et=0,kn=null,Ao(i,r,m,6);break;case 8:qp(),Tt=6;break e;default:throw Error(s(462))}}lR();break}catch(X){hE(i,X)}while(!0);return os=ra=null,K.H=u,K.A=f,Je=o,Me!==null?0:(ut=null,Fe=0,Xc(),Tt)}function lR(){for(;Me!==null&&!dl();)pE(Me)}function pE(i){var r=zv(i.alternate,i,ms);i.memoizedProps=i.pendingProps,r===null?xh(i):Me=r}function mE(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=Mv(o,r,r.pendingProps,r.type,void 0,Fe);break;case 11:r=Mv(o,r,r.pendingProps,r.type.render,r.ref,Fe);break;case 5:op(r);default:Hv(o,r),r=Me=gy(r,ms),r=zv(o,r,ms)}i.memoizedProps=i.pendingProps,r===null?xh(i):Me=r}function Ao(i,r,o,u){os=ra=null,op(r),po=null,Jl=0;var f=r.return;try{if(Xb(i,f,r,o,Fe)){Tt=1,Th(i,qn(o,i.current)),Me=null;return}}catch(m){if(f!==null)throw Me=f,m;Tt=1,Th(i,qn(o,i.current)),Me=null;return}r.flags&32768?(We||u===1?i=!0:yo||(Fe&536870912)!==0?i=!1:(Zs=i=!0,(u===2||u===9||u===3||u===6)&&(u=Yn.current,u!==null&&u.tag===13&&(u.flags|=16384))),gE(r,i)):xh(r)}function xh(i){var r=i;do{if((r.flags&32768)!==0){gE(r,Zs);return}i=r.return;var o=Jb(r.alternate,r,ms);if(o!==null){Me=o;return}if(r=r.sibling,r!==null){Me=r;return}Me=r=i}while(r!==null);Tt===0&&(Tt=5)}function gE(i,r){do{var o=eR(i.alternate,i);if(o!==null){o.flags&=32767,Me=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){Me=i;return}Me=i=o}while(i!==null);Tt=6,Me=null}function _E(i,r,o,u,f,m,E,w,O){i.cancelPendingCommit=null;do Oh();while(Zt!==0);if((Je&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=Ld,vl(i,o,m,E,w,O),i===ut&&(Me=ut=null,Fe=0),Eo=r,tr=i,To=o,zp=m,Fp=f,oE=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,fR(kr,function(){return SE(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=K.T,K.T=null,f=ae.p,ae.p=2,E=Je,Je|=4;try{tR(i,r,o)}finally{Je=E,ae.p=f,K.T=u}}Zt=1,yE(),vE(),EE()}}function yE(){if(Zt===1){Zt=0;var i=tr,r=Eo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=K.T,K.T=null;var u=ae.p;ae.p=2;var f=Je;Je|=4;try{eE(r,i);var m=sm,E=ay(i.containerInfo),w=m.focusedElem,O=m.selectionRange;if(E!==w&&w&&w.ownerDocument&&ry(w.ownerDocument.documentElement,w)){if(O!==null&&Od(w)){var q=O.start,X=O.end;if(X===void 0&&(X=q),"selectionStart"in w)w.selectionStart=q,w.selectionEnd=Math.min(X,w.value.length);else{var J=w.ownerDocument||document,G=J&&J.defaultView||window;if(G.getSelection){var $=G.getSelection(),be=w.textContent.length,Te=Math.min(O.start,be),rt=O.end===void 0?Te:Math.min(O.end,be);!$.extend&&Te>rt&&(E=rt,rt=Te,Te=E);var B=sy(w,Te),L=sy(w,rt);if(B&&L&&($.rangeCount!==1||$.anchorNode!==B.node||$.anchorOffset!==B.offset||$.focusNode!==L.node||$.focusOffset!==L.offset)){var H=J.createRange();H.setStart(B.node,B.offset),$.removeAllRanges(),Te>rt?($.addRange(H),$.extend(L.node,L.offset)):(H.setEnd(L.node,L.offset),$.addRange(H))}}}}for(J=[],$=w;$=$.parentNode;)$.nodeType===1&&J.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<J.length;w++){var Z=J[w];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}Hh=!!im,sm=im=null}finally{Je=f,ae.p=u,K.T=o}}i.current=r,Zt=2}}function vE(){if(Zt===2){Zt=0;var i=tr,r=Eo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=K.T,K.T=null;var u=ae.p;ae.p=2;var f=Je;Je|=4;try{Qv(i,r.alternate,r)}finally{Je=f,ae.p=u,K.T=o}}Zt=3}}function EE(){if(Zt===4||Zt===3){Zt=0,bc();var i=tr,r=Eo,o=To,u=oE;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Zt=5:(Zt=0,Eo=tr=null,TE(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(er=null),ja(o),r=r.stateNode,Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(vt,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=K.T,f=ae.p,ae.p=2,K.T=null;try{for(var m=i.onRecoverableError,E=0;E<u.length;E++){var w=u[E];m(w.value,{componentStack:w.stack})}}finally{K.T=r,ae.p=f}}(To&3)!==0&&Oh(),xi(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===Hp?lu++:(lu=0,Hp=i):lu=0,uu(0)}}function TE(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,Fl(r)))}function Oh(i){return yE(),vE(),EE(),SE()}function SE(){if(Zt!==5)return!1;var i=tr,r=zp;zp=0;var o=ja(To),u=K.T,f=ae.p;try{ae.p=32>o?32:o,K.T=null,o=Fp,Fp=null;var m=tr,E=To;if(Zt=0,Eo=tr=null,To=0,(Je&6)!==0)throw Error(s(331));var w=Je;if(Je|=4,rE(m.current),nE(m,m.current,E,o),Je=w,uu(0,!1),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(vt,m)}catch{}return!0}finally{ae.p=f,K.T=u,TE(i,r)}}function AE(i,r,o){r=qn(o,r),r=Tp(i.stateNode,r,2),i=Gs(i,r,2),i!==null&&($i(i,2),xi(i))}function ot(i,r,o){if(i.tag===3)AE(i,i,o);else for(;r!==null;){if(r.tag===3){AE(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(er===null||!er.has(u))){i=qn(o,i),o=Rv(2),u=Gs(r,o,2),u!==null&&(Iv(o,u,r,i),$i(u,2),xi(u));break}}r=r.return}}function $p(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new sR;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(Vp=!0,f.add(o),i=uR.bind(null,i,r,o),r.then(i,i))}function uR(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,ut===i&&(Fe&o)===o&&(Tt===4||Tt===3&&(Fe&62914560)===Fe&&300>Un()-Bp?(Je&2)===0&&So(i,0):Up|=o,vo===Fe&&(vo=0)),xi(i)}function wE(i,r){r===0&&(r=yl()),i=io(i,r),i!==null&&($i(i,r),xi(i))}function cR(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),wE(i,o)}function hR(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),wE(i,o)}function fR(i,r){return Or(i,r)}var Dh=null,wo=null,Yp=!1,kh=!1,Wp=!1,fa=0;function xi(i){i!==wo&&i.next===null&&(wo===null?Dh=wo=i:wo=wo.next=i),kh=!0,Yp||(Yp=!0,pR())}function uu(i,r){if(!Wp&&kh){Wp=!0;do for(var o=!1,u=Dh;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,w=u.pingedLanes;m=(1<<31-rn(42|i)+1)-1,m&=f&~(E&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,IE(u,m))}else m=Fe,m=Ua(u,u===ut?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Vr(u,m)||(o=!0,IE(u,m));u=u.next}while(o);Wp=!1}}function dR(){CE()}function CE(){kh=Yp=!1;var i=0;fa!==0&&(SR()&&(i=fa),fa=0);for(var r=Un(),o=null,u=Dh;u!==null;){var f=u.next,m=bE(u,r);m===0?(u.next=null,o===null?Dh=f:o.next=f,f===null&&(wo=o)):(o=u,(i!==0||(m&3)!==0)&&(kh=!0)),u=f}uu(i)}function bE(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var E=31-rn(m),w=1<<E,O=f[E];O===-1?((w&o)===0||(w&u)!==0)&&(f[E]=gl(w,r)):O<=r&&(i.expiredLanes|=w),m&=~w}if(r=ut,o=Fe,o=Ua(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(et===2||et===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&Dr(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Vr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&Dr(u),ja(o)){case 2:case 8:o=La;break;case 32:o=kr;break;case 268435456:o=Va;break;default:o=kr}return u=RE.bind(null,i),o=Or(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&Dr(u),i.callbackPriority=2,i.callbackNode=null,2}function RE(i,r){if(Zt!==0&&Zt!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(Oh()&&i.callbackNode!==o)return null;var u=Fe;return u=Ua(i,i===ut?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(uE(i,u,r),bE(i,Un()),i.callbackNode!=null&&i.callbackNode===o?RE.bind(null,i):null)}function IE(i,r){if(Oh())return null;uE(i,r,!0)}function pR(){wR(function(){(Je&6)!==0?Or(pl,dR):CE()})}function Qp(){return fa===0&&(fa=_l()),fa}function NE(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Ga(""+i)}function xE(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function mR(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=NE((f[Nt]||null).action),E=u.submitter;E&&(r=(r=E[Nt]||null)?NE(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var w=new Ka("action","action",null,u,f);i.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(fa!==0){var O=E?xE(f,E):new FormData(f);gp(o,{pending:!0,data:O,method:f.method,action:m},null,O)}}else typeof m=="function"&&(w.preventDefault(),O=E?xE(f,E):new FormData(f),gp(o,{pending:!0,data:O,method:f.method,action:m},m,O))},currentTarget:f}]})}}for(var Xp=0;Xp<Md.length;Xp++){var Zp=Md[Xp],gR=Zp.toLowerCase(),_R=Zp[0].toUpperCase()+Zp.slice(1);ri(gR,"on"+_R)}ri(uy,"onAnimationEnd"),ri(cy,"onAnimationIteration"),ri(hy,"onAnimationStart"),ri("dblclick","onDoubleClick"),ri("focusin","onFocus"),ri("focusout","onBlur"),ri(Pb,"onTransitionRun"),ri(Mb,"onTransitionStart"),ri(Lb,"onTransitionCancel"),ri(fy,"onTransitionEnd"),Wi("onMouseEnter",["mouseout","mouseover"]),Wi("onMouseLeave",["mouseout","mouseover"]),Wi("onPointerEnter",["pointerout","pointerover"]),Wi("onPointerLeave",["pointerout","pointerover"]),ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ii("onBeforeInput",["compositionend","keypress","textInput","paste"]),ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cu));function OE(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var w=u[E],O=w.instance,q=w.currentTarget;if(w=w.listener,O!==m&&f.isPropagationStopped())break e;m=w,f.currentTarget=q;try{m(f)}catch(X){Eh(X)}f.currentTarget=null,m=O}else for(E=0;E<u.length;E++){if(w=u[E],O=w.instance,q=w.currentTarget,w=w.listener,O!==m&&f.isPropagationStopped())break e;m=w,f.currentTarget=q;try{m(f)}catch(X){Eh(X)}f.currentTarget=null,m=O}}}}function Le(i,r){var o=r[Tl];o===void 0&&(o=r[Tl]=new Set);var u=i+"__bubble";o.has(u)||(DE(r,i,2,!1),o.add(u))}function Jp(i,r,o){var u=0;r&&(u|=4),DE(o,i,u,r)}var Ph="_reactListening"+Math.random().toString(36).slice(2);function em(i){if(!i[Ph]){i[Ph]=!0,Sl.forEach(function(o){o!=="selectionchange"&&(yR.has(o)||Jp(o,!1,i),Jp(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Ph]||(r[Ph]=!0,Jp("selectionchange",!1,r))}}function DE(i,r,o,u){switch(nT(r)){case 2:var f=GR;break;case 8:f=KR;break;default:f=pm}o=f.bind(null,r,o,i),f=void 0,!Fn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function tm(i,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var w=u.stateNode.containerInfo;if(w===f)break;if(E===4)for(E=u.return;E!==null;){var O=E.tag;if((O===3||O===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;w!==null;){if(E=Yi(w),E===null)return;if(O=E.tag,O===5||O===6||O===26||O===27){u=m=E;continue e}w=w.parentNode}}u=u.return}Lc(function(){var q=m,X=zn(o),J=[];e:{var G=dy.get(i);if(G!==void 0){var $=Ka,be=i;switch(i){case"keypress":if(Ti(o)===0)break e;case"keydown":case"keyup":$=Za;break;case"focusin":be="focus",$=Wa;break;case"focusout":be="blur",$=Wa;break;case"beforeblur":case"afterblur":$=Wa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=Hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Rd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=qc;break;case uy:case cy:case hy:$=Qa;break;case fy:$=Kc;break;case"scroll":case"scrollend":$=Vc;break;case"wheel":$=Ja;break;case"copy":case"cut":case"paste":$=Xa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Pl;break;case"toggle":case"beforetoggle":$=Yc}var Te=(r&4)!==0,rt=!Te&&(i==="scroll"||i==="scrollend"),B=Te?G!==null?G+"Capture":null:G;Te=[];for(var L=q,H;L!==null;){var Z=L;if(H=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||H===null||B===null||(Z=Gr(L,B),Z!=null&&Te.push(hu(L,Z,H))),rt)break;L=L.return}0<Te.length&&(G=new $(G,be,null,o,X),J.push({event:G,listeners:Te}))}}if((r&7)===0){e:{if(G=i==="mouseover"||i==="pointerover",$=i==="mouseout"||i==="pointerout",G&&o!==Zi&&(be=o.relatedTarget||o.fromElement)&&(Yi(be)||be[jn]))break e;if(($||G)&&(G=X.window===X?X:(G=X.ownerDocument)?G.defaultView||G.parentWindow:window,$?(be=o.relatedTarget||o.toElement,$=q,be=be?Yi(be):null,be!==null&&(rt=l(be),Te=be.tag,be!==rt||Te!==5&&Te!==27&&Te!==6)&&(be=null)):($=null,be=q),$!==be)){if(Te=Hn,Z="onMouseLeave",B="onMouseEnter",L="mouse",(i==="pointerout"||i==="pointerover")&&(Te=Pl,Z="onPointerLeave",B="onPointerEnter",L="pointer"),rt=$==null?G:_i($),H=be==null?G:_i(be),G=new Te(Z,L+"leave",$,o,X),G.target=rt,G.relatedTarget=H,Z=null,Yi(X)===q&&(Te=new Te(B,L+"enter",be,o,X),Te.target=H,Te.relatedTarget=rt,Z=Te),rt=Z,$&&be)t:{for(Te=$,B=be,L=0,H=Te;H;H=Co(H))L++;for(H=0,Z=B;Z;Z=Co(Z))H++;for(;0<L-H;)Te=Co(Te),L--;for(;0<H-L;)B=Co(B),H--;for(;L--;){if(Te===B||B!==null&&Te===B.alternate)break t;Te=Co(Te),B=Co(B)}Te=null}else Te=null;$!==null&&kE(J,G,$,Te,!1),be!==null&&rt!==null&&kE(J,rt,be,Te,!0)}}e:{if(G=q?_i(q):window,$=G.nodeName&&G.nodeName.toLowerCase(),$==="select"||$==="input"&&G.type==="file")var me=Z_;else if(Lt(G))if(J_)me=Ob;else{me=Nb;var ke=Ib}else $=G.nodeName,!$||$.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?q&&Rl(q.elementType)&&(me=Z_):me=xb;if(me&&(me=me(i,q))){is(J,me,o,X);break e}ke&&ke(i,G,q),i==="focusout"&&q&&G.type==="number"&&q.memoizedProps.value!=null&&Bs(G,"number",G.value)}switch(ke=q?_i(q):window,i){case"focusin":(Lt(ke)||ke.contentEditable==="true")&&(eo=ke,Dd=q,Vl=null);break;case"focusout":Vl=Dd=eo=null;break;case"mousedown":kd=!0;break;case"contextmenu":case"mouseup":case"dragend":kd=!1,oy(J,o,X);break;case"selectionchange":if(kb)break;case"keydown":case"keyup":oy(J,o,X)}var _e;if(wi)e:{switch(i){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Be?W(i,o)&&(Se="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Se="onCompositionStart");Se&&(v&&o.locale!=="ko"&&(Be||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Be&&(_e=Nl()):(Ei=X,zs="value"in Ei?Ei.value:Ei.textContent,Be=!0)),ke=Mh(q,Se),0<ke.length&&(Se=new Dl(Se,i,null,o,X),J.push({event:Se,listeners:ke}),_e?Se.data=_e:(_e=oe(o),_e!==null&&(Se.data=_e)))),(_e=_?Mt(i,o):ze(i,o))&&(Se=Mh(q,"onBeforeInput"),0<Se.length&&(ke=new Dl("onBeforeInput","beforeinput",null,o,X),J.push({event:ke,listeners:Se}),ke.data=_e)),mR(J,i,q,o,X)}OE(J,r)})}function hu(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Mh(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Gr(i,o),f!=null&&u.unshift(hu(i,f,m)),f=Gr(i,r),f!=null&&u.push(hu(i,f,m))),i.tag===3)return u;i=i.return}return[]}function Co(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function kE(i,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var w=o,O=w.alternate,q=w.stateNode;if(w=w.tag,O!==null&&O===u)break;w!==5&&w!==26&&w!==27||q===null||(O=q,f?(q=Gr(o,m),q!=null&&E.unshift(hu(o,q,O))):f||(q=Gr(o,m),q!=null&&E.push(hu(o,q,O)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var vR=/\r\n?/g,ER=/\u0000|\uFFFD/g;function PE(i){return(typeof i=="string"?i:""+i).replace(vR,`
`).replace(ER,"")}function ME(i,r){return r=PE(r),PE(i)===r}function Lh(){}function st(i,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Bn(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Bn(i,""+u);break;case"className":yi(i,"class",u);break;case"tabIndex":yi(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":yi(i,o,u);break;case"style":bl(i,u,m);break;case"data":if(r!=="object"){yi(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=Ga(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&st(i,r,"name",f.name,f,null),st(i,r,"formEncType",f.formEncType,f,null),st(i,r,"formMethod",f.formMethod,f,null),st(i,r,"formTarget",f.formTarget,f,null)):(st(i,r,"encType",f.encType,f,null),st(i,r,"method",f.method,f,null),st(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=Ga(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Lh);break;case"onScroll":u!=null&&Le("scroll",i);break;case"onScrollEnd":u!=null&&Le("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=Ga(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":Le("beforetoggle",i),Le("toggle",i),js(i,"popover",u);break;case"xlinkActuate":Wt(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Wt(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Wt(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Wt(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Wt(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Wt(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Wt(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Wt(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Wt(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":js(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Cd.get(o)||o,js(i,o,u))}}function nm(i,r,o,u,f,m){switch(o){case"style":bl(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?Bn(i,u):(typeof u=="number"||typeof u=="bigint")&&Bn(i,""+u);break;case"onScroll":u!=null&&Le("scroll",i);break;case"onScrollEnd":u!=null&&Le("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Lh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ba.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=i[Nt]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):js(i,o,u)}}}function Jt(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Le("error",i),Le("load",i);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:st(i,r,m,E,o,null)}}f&&st(i,r,"srcSet",o.srcSet,o,null),u&&st(i,r,"src",o.src,o,null);return;case"input":Le("invalid",i);var w=m=E=f=null,O=null,q=null;for(u in o)if(o.hasOwnProperty(u)){var X=o[u];if(X!=null)switch(u){case"name":f=X;break;case"type":E=X;break;case"checked":O=X;break;case"defaultChecked":q=X;break;case"value":m=X;break;case"defaultValue":w=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,r));break;default:st(i,r,u,X,o,null)}}Fr(i,m,w,O,q,E,f,!1),qa(i);return;case"select":Le("invalid",i),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(w=o[f],w!=null))switch(f){case"value":m=w;break;case"defaultValue":E=w;break;case"multiple":u=w;default:st(i,r,f,w,o,null)}r=m,o=E,i.multiple=!!u,r!=null?Xi(i,!!u,r,!1):o!=null&&Xi(i,!!u,o,!0);return;case"textarea":Le("invalid",i),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(w=o[E],w!=null))switch(E){case"value":u=w;break;case"defaultValue":f=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:st(i,r,E,w,o,null)}Hr(i,u,f,m),qa(i);return;case"option":for(O in o)if(o.hasOwnProperty(O)&&(u=o[O],u!=null))switch(O){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:st(i,r,O,u,o,null)}return;case"dialog":Le("beforetoggle",i),Le("toggle",i),Le("cancel",i),Le("close",i);break;case"iframe":case"object":Le("load",i);break;case"video":case"audio":for(u=0;u<cu.length;u++)Le(cu[u],i);break;case"image":Le("error",i),Le("load",i);break;case"details":Le("toggle",i);break;case"embed":case"source":case"link":Le("error",i),Le("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in o)if(o.hasOwnProperty(q)&&(u=o[q],u!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:st(i,r,q,u,o,null)}return;default:if(Rl(r)){for(X in o)o.hasOwnProperty(X)&&(u=o[X],u!==void 0&&nm(i,r,X,u,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(u=o[w],u!=null&&st(i,r,w,u,o,null))}function TR(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,w=null,O=null,q=null,X=null;for($ in o){var J=o[$];if(o.hasOwnProperty($)&&J!=null)switch($){case"checked":break;case"value":break;case"defaultValue":O=J;default:u.hasOwnProperty($)||st(i,r,$,null,u,J)}}for(var G in u){var $=u[G];if(J=o[G],u.hasOwnProperty(G)&&($!=null||J!=null))switch(G){case"type":m=$;break;case"name":f=$;break;case"checked":q=$;break;case"defaultChecked":X=$;break;case"value":E=$;break;case"defaultValue":w=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,r));break;default:$!==J&&st(i,r,G,$,u,J)}}In(i,E,w,O,q,X,m,f);return;case"select":$=E=w=G=null;for(m in o)if(O=o[m],o.hasOwnProperty(m)&&O!=null)switch(m){case"value":break;case"multiple":$=O;default:u.hasOwnProperty(m)||st(i,r,m,null,u,O)}for(f in u)if(m=u[f],O=o[f],u.hasOwnProperty(f)&&(m!=null||O!=null))switch(f){case"value":G=m;break;case"defaultValue":w=m;break;case"multiple":E=m;default:m!==O&&st(i,r,f,m,u,O)}r=w,o=E,u=$,G!=null?Xi(i,!!o,G,!1):!!u!=!!o&&(r!=null?Xi(i,!!o,r,!0):Xi(i,!!o,o?[]:"",!1));return;case"textarea":$=G=null;for(w in o)if(f=o[w],o.hasOwnProperty(w)&&f!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:st(i,r,w,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":G=f;break;case"defaultValue":$=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&st(i,r,E,f,u,m)}nt(i,G,$);return;case"option":for(var be in o)if(G=o[be],o.hasOwnProperty(be)&&G!=null&&!u.hasOwnProperty(be))switch(be){case"selected":i.selected=!1;break;default:st(i,r,be,null,u,G)}for(O in u)if(G=u[O],$=o[O],u.hasOwnProperty(O)&&G!==$&&(G!=null||$!=null))switch(O){case"selected":i.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:st(i,r,O,G,u,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in o)G=o[Te],o.hasOwnProperty(Te)&&G!=null&&!u.hasOwnProperty(Te)&&st(i,r,Te,null,u,G);for(q in u)if(G=u[q],$=o[q],u.hasOwnProperty(q)&&G!==$&&(G!=null||$!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,r));break;default:st(i,r,q,G,u,$)}return;default:if(Rl(r)){for(var rt in o)G=o[rt],o.hasOwnProperty(rt)&&G!==void 0&&!u.hasOwnProperty(rt)&&nm(i,r,rt,void 0,u,G);for(X in u)G=u[X],$=o[X],!u.hasOwnProperty(X)||G===$||G===void 0&&$===void 0||nm(i,r,X,G,u,$);return}}for(var B in o)G=o[B],o.hasOwnProperty(B)&&G!=null&&!u.hasOwnProperty(B)&&st(i,r,B,null,u,G);for(J in u)G=u[J],$=o[J],!u.hasOwnProperty(J)||G===$||G==null&&$==null||st(i,r,J,G,u,$)}var im=null,sm=null;function Vh(i){return i.nodeType===9?i:i.ownerDocument}function LE(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function VE(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function rm(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var am=null;function SR(){var i=window.event;return i&&i.type==="popstate"?i===am?!1:(am=i,!0):(am=null,!1)}var UE=typeof setTimeout=="function"?setTimeout:void 0,AR=typeof clearTimeout=="function"?clearTimeout:void 0,jE=typeof Promise=="function"?Promise:void 0,wR=typeof queueMicrotask=="function"?queueMicrotask:typeof jE<"u"?function(i){return jE.resolve(null).then(i).catch(CR)}:UE;function CR(i){setTimeout(function(){throw i})}function ir(i){return i==="head"}function BE(i,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(i.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&fu(E.documentElement),o&2&&fu(E.body),o&4)for(o=E.head,fu(o),E=o.firstChild;E;){var w=E.nextSibling,O=E.nodeName;E[Ur]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=w}}if(f===0){i.removeChild(m),Eu(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Eu(r)}function om(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":om(o),Us(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function bR(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[Ur])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=oi(i.nextSibling),i===null)break}return null}function RR(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=oi(i.nextSibling),i===null))return null;return i}function lm(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function IR(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function oi(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var um=null;function zE(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function FE(i,r,o){switch(r=Vh(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function fu(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Us(i)}var Qn=new Map,HE=new Set;function Uh(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var gs=ae.d;ae.d={f:NR,r:xR,D:OR,C:DR,L:kR,m:PR,X:LR,S:MR,M:VR};function NR(){var i=gs.f(),r=Nh();return i||r}function xR(i){var r=gi(i);r!==null&&r.tag===5&&r.type==="form"?uv(r):gs.r(i)}var bo=typeof document>"u"?null:document;function qE(i,r,o){var u=bo;if(u&&typeof r=="string"&&r){var f=xt(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),HE.has(f)||(HE.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),Jt(r,"link",i),wt(r),u.head.appendChild(r)))}}function OR(i){gs.D(i),qE("dns-prefetch",i,null)}function DR(i,r){gs.C(i,r),qE("preconnect",i,r)}function kR(i,r,o){gs.L(i,r,o);var u=bo;if(u&&i&&r){var f='link[rel="preload"][as="'+xt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+xt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+xt(o.imageSizes)+'"]')):f+='[href="'+xt(i)+'"]';var m=f;switch(r){case"style":m=Ro(i);break;case"script":m=Io(i)}Qn.has(m)||(i=y({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),Qn.set(m,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(du(m))||r==="script"&&u.querySelector(pu(m))||(r=u.createElement("link"),Jt(r,"link",i),wt(r),u.head.appendChild(r)))}}function PR(i,r){gs.m(i,r);var o=bo;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+xt(u)+'"][href="'+xt(i)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Io(i)}if(!Qn.has(m)&&(i=y({rel:"modulepreload",href:i},r),Qn.set(m,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(pu(m)))return}u=o.createElement("link"),Jt(u,"link",i),wt(u),o.head.appendChild(u)}}}function MR(i,r,o){gs.S(i,r,o);var u=bo;if(u&&i){var f=gn(u).hoistableStyles,m=Ro(i);r=r||"default";var E=f.get(m);if(!E){var w={loading:0,preload:null};if(E=u.querySelector(du(m)))w.loading=5;else{i=y({rel:"stylesheet",href:i,"data-precedence":r},o),(o=Qn.get(m))&&cm(i,o);var O=E=u.createElement("link");wt(O),Jt(O,"link",i),O._p=new Promise(function(q,X){O.onload=q,O.onerror=X}),O.addEventListener("load",function(){w.loading|=1}),O.addEventListener("error",function(){w.loading|=2}),w.loading|=4,jh(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:w},f.set(m,E)}}}function LR(i,r){gs.X(i,r);var o=bo;if(o&&i){var u=gn(o).hoistableScripts,f=Io(i),m=u.get(f);m||(m=o.querySelector(pu(f)),m||(i=y({src:i,async:!0},r),(r=Qn.get(f))&&hm(i,r),m=o.createElement("script"),wt(m),Jt(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function VR(i,r){gs.M(i,r);var o=bo;if(o&&i){var u=gn(o).hoistableScripts,f=Io(i),m=u.get(f);m||(m=o.querySelector(pu(f)),m||(i=y({src:i,async:!0,type:"module"},r),(r=Qn.get(f))&&hm(i,r),m=o.createElement("script"),wt(m),Jt(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function GE(i,r,o,u){var f=(f=ge.current)?Uh(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Ro(o.href),o=gn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Ro(o.href);var m=gn(f).hoistableStyles,E=m.get(i);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,E),(m=f.querySelector(du(i)))&&!m._p&&(E.instance=m,E.state.loading=5),Qn.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Qn.set(i,o),m||UR(f,i,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Io(o),o=gn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function Ro(i){return'href="'+xt(i)+'"'}function du(i){return'link[rel="stylesheet"]['+i+"]"}function KE(i){return y({},i,{"data-precedence":i.precedence,precedence:null})}function UR(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),Jt(r,"link",o),wt(r),i.head.appendChild(r))}function Io(i){return'[src="'+xt(i)+'"]'}function pu(i){return"script[async]"+i}function $E(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+xt(o.href)+'"]');if(u)return r.instance=u,wt(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),wt(u),Jt(u,"style",f),jh(u,o.precedence,i),r.instance=u;case"stylesheet":f=Ro(o.href);var m=i.querySelector(du(f));if(m)return r.state.loading|=4,r.instance=m,wt(m),m;u=KE(o),(f=Qn.get(f))&&cm(u,f),m=(i.ownerDocument||i).createElement("link"),wt(m);var E=m;return E._p=new Promise(function(w,O){E.onload=w,E.onerror=O}),Jt(m,"link",u),r.state.loading|=4,jh(m,o.precedence,i),r.instance=m;case"script":return m=Io(o.src),(f=i.querySelector(pu(m)))?(r.instance=f,wt(f),f):(u=o,(f=Qn.get(m))&&(u=y({},o),hm(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),wt(f),Jt(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,jh(u,o.precedence,i));return r.instance}function jh(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var w=u[E];if(w.dataset.precedence===r)m=w;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function cm(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function hm(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var Bh=null;function YE(i,r,o){if(Bh===null){var u=new Map,f=Bh=new Map;f.set(o,u)}else f=Bh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[Ur]||m[Pt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=i+E;var w=u.get(E);w?w.push(m):u.set(E,[m])}}return u}function WE(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function jR(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function QE(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var mu=null;function BR(){}function zR(i,r,o){if(mu===null)throw Error(s(475));var u=mu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Ro(o.href),m=i.querySelector(du(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=zh.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=m,wt(m);return}m=i.ownerDocument||i,o=KE(o),(f=Qn.get(f))&&cm(o,f),m=m.createElement("link"),wt(m);var E=m;E._p=new Promise(function(w,O){E.onload=w,E.onerror=O}),Jt(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=zh.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function FR(){if(mu===null)throw Error(s(475));var i=mu;return i.stylesheets&&i.count===0&&fm(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&fm(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function zh(){if(this.count--,this.count===0){if(this.stylesheets)fm(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Fh=null;function fm(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Fh=new Map,r.forEach(HR,i),Fh=null,zh.call(i))}function HR(i,r){if(!(r.state.loading&4)){var o=Fh.get(i);if(o)var u=o.get(null);else{o=new Map,Fh.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=zh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var gu={$$typeof:Q,Provider:null,Consumer:null,_currentValue:pe,_currentValue2:pe,_threadCount:0};function qR(i,r,o,u,f,m,E,w){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.hiddenUpdates=Ki(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function XE(i,r,o,u,f,m,E,w,O,q,X,J){return i=new qR(i,r,o,E,w,O,q,J),r=1,m===!0&&(r|=24),m=xn(3,null,null,r),i.current=m,m.stateNode=i,r=$d(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},Xd(m),i}function ZE(i){return i?(i=so,i):so}function JE(i,r,o,u,f,m){f=ZE(f),u.context===null?u.context=f:u.pendingContext=f,u=qs(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=Gs(i,u,r),o!==null&&(Mn(o,i,r),Kl(o,i,r))}function eT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function dm(i,r){eT(i,r),(i=i.alternate)&&eT(i,r)}function tT(i){if(i.tag===13){var r=io(i,67108864);r!==null&&Mn(r,i,67108864),dm(i,67108864)}}var Hh=!0;function GR(i,r,o,u){var f=K.T;K.T=null;var m=ae.p;try{ae.p=2,pm(i,r,o,u)}finally{ae.p=m,K.T=f}}function KR(i,r,o,u){var f=K.T;K.T=null;var m=ae.p;try{ae.p=8,pm(i,r,o,u)}finally{ae.p=m,K.T=f}}function pm(i,r,o,u){if(Hh){var f=mm(u);if(f===null)tm(i,r,u,qh,o),iT(i,u);else if(YR(f,i,r,o,u))u.stopPropagation();else if(iT(i,u),r&4&&-1<$R.indexOf(i)){for(;f!==null;){var m=gi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=ni(m.pendingLanes);if(E!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var O=1<<31-rn(E);w.entanglements[1]|=O,E&=~O}xi(m),(Je&6)===0&&(Rh=Un()+500,uu(0))}}break;case 13:w=io(m,2),w!==null&&Mn(w,m,2),Nh(),dm(m,2)}if(m=mm(u),m===null&&tm(i,r,u,qh,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else tm(i,r,u,null,o)}}function mm(i){return i=zn(i),gm(i)}var qh=null;function gm(i){if(qh=null,i=Yi(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return qh=i,null}function nT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vd()){case pl:return 2;case La:return 8;case kr:case Ed:return 32;case Va:return 268435456;default:return 32}default:return 32}}var _m=!1,sr=null,rr=null,ar=null,_u=new Map,yu=new Map,or=[],$R="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function iT(i,r){switch(i){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":_u.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":yu.delete(r.pointerId)}}function vu(i,r,o,u,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=gi(r),r!==null&&tT(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function YR(i,r,o,u,f){switch(r){case"focusin":return sr=vu(sr,i,r,o,u,f),!0;case"dragenter":return rr=vu(rr,i,r,o,u,f),!0;case"mouseover":return ar=vu(ar,i,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return _u.set(m,vu(_u.get(m)||null,i,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,yu.set(m,vu(yu.get(m)||null,i,r,o,u,f)),!0}return!1}function sT(i){var r=Yi(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,Nc(i.priority,function(){if(o.tag===13){var u=Pn();u=Ms(u);var f=io(o,u);f!==null&&Mn(f,o,u),dm(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Gh(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=mm(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);Zi=u,o.target.dispatchEvent(u),Zi=null}else return r=gi(o),r!==null&&tT(r),i.blockedOn=o,!1;r.shift()}return!0}function rT(i,r,o){Gh(i)&&o.delete(r)}function WR(){_m=!1,sr!==null&&Gh(sr)&&(sr=null),rr!==null&&Gh(rr)&&(rr=null),ar!==null&&Gh(ar)&&(ar=null),_u.forEach(rT),yu.forEach(rT)}function Kh(i,r){i.blockedOn===r&&(i.blockedOn=null,_m||(_m=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,WR)))}var $h=null;function aT(i){$h!==i&&($h=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){$h===i&&($h=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if(gm(u||o)===null)continue;break}var m=gi(o);m!==null&&(i.splice(r,3),r-=3,gp(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Eu(i){function r(O){return Kh(O,i)}sr!==null&&Kh(sr,i),rr!==null&&Kh(rr,i),ar!==null&&Kh(ar,i),_u.forEach(r),yu.forEach(r);for(var o=0;o<or.length;o++){var u=or[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<or.length&&(o=or[0],o.blockedOn===null);)sT(o),o.blockedOn===null&&or.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Nt]||null;if(typeof m=="function")E||aT(o);else if(E){var w=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Nt]||null)w=E.formAction;else if(gm(f)!==null)continue}else w=E.action;typeof w=="function"?o[u+1]=w:(o.splice(u,3),u-=3),aT(o)}}}function ym(i){this._internalRoot=i}Yh.prototype.render=ym.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=Pn();JE(o,u,i,r,null,null)},Yh.prototype.unmount=ym.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;JE(i.current,2,null,i,null,null),Nh(),r[jn]=null}};function Yh(i){this._internalRoot=i}Yh.prototype.unstable_scheduleHydration=function(i){if(i){var r=Ls();i={blockedOn:null,target:i,priority:r};for(var o=0;o<or.length&&r!==0&&r<or[o].priority;o++);or.splice(o,0,i),o===0&&sT(i)}};var oT=e.version;if(oT!=="19.1.0")throw Error(s(527,oT,"19.1.0"));ae.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=p(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var QR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wh.isDisabled&&Wh.supportsFiber)try{vt=Wh.inject(QR),Ze=Wh}catch{}}return Su.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=Av,m=wv,E=Cv,w=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(w=r.unstable_transitionCallbacks)),r=XE(i,1,!1,null,null,o,u,f,m,E,w,null),i[jn]=r.current,em(i),new ym(r)},Su.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",m=Av,E=wv,w=Cv,O=null,q=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(O=o.unstable_transitionCallbacks),o.formState!==void 0&&(q=o.formState)),r=XE(i,1,!0,r,o??null,u,f,m,E,w,O,q),r.context=ZE(null),o=r.current,u=Pn(),u=Ms(u),f=qs(u),f.callback=null,Gs(o,f,u),o=u,r.current.lanes=o,$i(r,o),xi(r),i[jn]=r.current,em(i),new Yh(r)},Su.version="19.1.0",Su}var _T;function a1(){if(_T)return Tm.exports;_T=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Tm.exports=r1(),Tm.exports}var o1=a1();const l1="_navBarWrapper_efeiq_71",u1="_left_efeiq_105",c1="_title_efeiq_113",h1="_mid_efeiq_129",f1="_Links_efeiq_141",d1="_content_efeiq_159",p1="_ind_efeiq_171",m1="_indicator_efeiq_181",g1="_right_efeiq_209",_1="_authButts_efeiq_209",y1="_HamburgerButt_efeiq_209",v1="_sidebar_efeiq_287",E1="_hideSideBar_efeiq_297",T1="_indicated_efeiq_541",S1="_indication_efeiq_563",ct={navBarWrapper:l1,left:u1,title:c1,mid:h1,Links:f1,content:d1,ind:p1,indicator:m1,right:g1,authButts:_1,HamburgerButt:y1,sidebar:v1,hideSideBar:E1,indicated:T1,indication:S1};var Au={},yT;function A1(){if(yT)return Au;yT=1,Object.defineProperty(Au,"__esModule",{value:!0}),Au.parse=c,Au.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function c(S,N){const I=new l,F=S.length;if(F<2)return I;const V=(N==null?void 0:N.decode)||y;let Y=0;do{const ee=S.indexOf("=",Y);if(ee===-1)break;const Q=S.indexOf(";",Y),re=Q===-1?F:Q;if(ee>re){Y=S.lastIndexOf(";",ee-1)+1;continue}const se=d(S,Y,ee),fe=p(S,ee,se),D=S.slice(se,fe);if(I[D]===void 0){let R=d(S,ee+1,re),x=p(S,re,R);const P=V(S.slice(R,x));I[D]=P}Y=re+1}while(Y<F);return I}function d(S,N,I){do{const F=S.charCodeAt(N);if(F!==32&&F!==9)return N}while(++N<I);return I}function p(S,N,I){for(;N>I;){const F=S.charCodeAt(--N);if(F!==32&&F!==9)return N+1}return I}function g(S,N,I){const F=(I==null?void 0:I.encode)||encodeURIComponent;if(!n.test(S))throw new TypeError(`argument name is invalid: ${S}`);const V=F(N);if(!e.test(V))throw new TypeError(`argument val is invalid: ${N}`);let Y=S+"="+V;if(!I)return Y;if(I.maxAge!==void 0){if(!Number.isInteger(I.maxAge))throw new TypeError(`option maxAge is invalid: ${I.maxAge}`);Y+="; Max-Age="+I.maxAge}if(I.domain){if(!t.test(I.domain))throw new TypeError(`option domain is invalid: ${I.domain}`);Y+="; Domain="+I.domain}if(I.path){if(!s.test(I.path))throw new TypeError(`option path is invalid: ${I.path}`);Y+="; Path="+I.path}if(I.expires){if(!T(I.expires)||!Number.isFinite(I.expires.valueOf()))throw new TypeError(`option expires is invalid: ${I.expires}`);Y+="; Expires="+I.expires.toUTCString()}if(I.httpOnly&&(Y+="; HttpOnly"),I.secure&&(Y+="; Secure"),I.partitioned&&(Y+="; Partitioned"),I.priority)switch(typeof I.priority=="string"?I.priority.toLowerCase():void 0){case"low":Y+="; Priority=Low";break;case"medium":Y+="; Priority=Medium";break;case"high":Y+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${I.priority}`)}if(I.sameSite)switch(typeof I.sameSite=="string"?I.sameSite.toLowerCase():I.sameSite){case!0:case"strict":Y+="; SameSite=Strict";break;case"lax":Y+="; SameSite=Lax";break;case"none":Y+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${I.sameSite}`)}return Y}function y(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function T(S){return a.call(S)==="[object Date]"}return Au}A1();var vT="popstate";function w1(n={}){function e(s,a){let{pathname:l,search:c,hash:d}=s.location;return Ym("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:Qu(a)}return b1(e,t,null,n)}function _t(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Vi(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function C1(){return Math.random().toString(36).substring(2,10)}function ET(n,e){return{usr:n.state,key:n.key,idx:e}}function Ym(n,e,t=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?tl(e):e,state:t,key:e&&e.key||s||C1()}}function Qu({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function tl(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substring(s),n=n.substring(0,s)),n&&(e.pathname=n)}return e}function b1(n,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,d="POP",p=null,g=y();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function y(){return(c.state||{idx:null}).idx}function T(){d="POP";let V=y(),Y=V==null?null:V-g;g=V,p&&p({action:d,location:F.location,delta:Y})}function S(V,Y){d="PUSH";let ee=Ym(F.location,V,Y);g=y()+1;let Q=ET(ee,g),re=F.createHref(ee);try{c.pushState(Q,"",re)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;a.location.assign(re)}l&&p&&p({action:d,location:F.location,delta:1})}function N(V,Y){d="REPLACE";let ee=Ym(F.location,V,Y);g=y();let Q=ET(ee,g),re=F.createHref(ee);c.replaceState(Q,"",re),l&&p&&p({action:d,location:F.location,delta:0})}function I(V){return R1(V)}let F={get action(){return d},get location(){return n(a,c)},listen(V){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(vT,T),p=V,()=>{a.removeEventListener(vT,T),p=null}},createHref(V){return e(a,V)},createURL:I,encodeLocation(V){let Y=I(V);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:S,replace:N,go(V){return c.go(V)}};return F}function R1(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),_t(t,"No window.location.(origin|href) available to create URL");let s=typeof n=="string"?n:Qu(n);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function BS(n,e,t="/"){return I1(n,e,t,!1)}function I1(n,e,t,s){let a=typeof e=="string"?tl(e):e,l=Rs(a.pathname||"/",t);if(l==null)return null;let c=zS(n);N1(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let g=B1(l);d=U1(c[p],g,s)}return d}function zS(n,e=[],t=[],s=""){let a=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(_t(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let g=ws([s,p.relativePath]),y=t.concat(p);l.children&&l.children.length>0&&(_t(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),zS(l.children,e,y,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:L1(g,l.index),routesMeta:y})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let p of FS(l.path))a(l,c,p)}),e}function FS(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=FS(s.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function N1(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:V1(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var x1=/^:[\w-]+$/,O1=3,D1=2,k1=1,P1=10,M1=-2,TT=n=>n==="*";function L1(n,e){let t=n.split("/"),s=t.length;return t.some(TT)&&(s+=M1),e&&(s+=D1),t.filter(a=>!TT(a)).reduce((a,l)=>a+(x1.test(l)?O1:l===""?k1:P1),s)}function V1(n,e){return n.length===e.length&&n.slice(0,-1).every((s,a)=>s===e[a])?n[n.length-1]-e[e.length-1]:0}function U1(n,e,t=!1){let{routesMeta:s}=n,a={},l="/",c=[];for(let d=0;d<s.length;++d){let p=s[d],g=d===s.length-1,y=l==="/"?e:e.slice(l.length)||"/",T=yf({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},y),S=p.route;if(!T&&g&&t&&!s[s.length-1].route.index&&(T=yf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!T)return null;Object.assign(a,T.params),c.push({params:a,pathname:ws([l,T.pathname]),pathnameBase:q1(ws([l,T.pathnameBase])),route:S}),T.pathnameBase!=="/"&&(l=ws([l,T.pathnameBase]))}return c}function yf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=j1(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:s.reduce((g,{paramName:y,isOptional:T},S)=>{if(y==="*"){let I=d[S]||"";c=l.slice(0,l.length-I.length).replace(/(.)\/+$/,"$1")}const N=d[S];return T&&!N?g[y]=void 0:g[y]=(N||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:n}}function j1(n,e=!1,t=!0){Vi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(s.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function B1(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vi(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Rs(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}function z1(n,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof n=="string"?tl(n):n;return{pathname:t?t.startsWith("/")?t:F1(t,e):e,search:G1(s),hash:K1(a)}}function F1(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Cm(n,e,t,s){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function H1(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function HS(n){let e=H1(n);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function qS(n,e,t,s=!1){let a;typeof n=="string"?a=tl(n):(a={...n},_t(!a.pathname||!a.pathname.includes("?"),Cm("?","pathname","search",a)),_t(!a.pathname||!a.pathname.includes("#"),Cm("#","pathname","hash",a)),_t(!a.search||!a.search.includes("#"),Cm("#","search","hash",a)));let l=n===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!s&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),T-=1;a.pathname=S.join("/")}d=T>=0?e[T]:"/"}let p=z1(a,d),g=c&&c!=="/"&&c.endsWith("/"),y=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(g||y)&&(p.pathname+="/"),p}var ws=n=>n.join("/").replace(/\/\/+/g,"/"),q1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),G1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,K1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function $1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var GS=["POST","PUT","PATCH","DELETE"];new Set(GS);var Y1=["GET",...GS];new Set(Y1);var nl=M.createContext(null);nl.displayName="DataRouter";var $f=M.createContext(null);$f.displayName="DataRouterState";var KS=M.createContext({isTransitioning:!1});KS.displayName="ViewTransition";var W1=M.createContext(new Map);W1.displayName="Fetchers";var Q1=M.createContext(null);Q1.displayName="Await";var zi=M.createContext(null);zi.displayName="Navigation";var lc=M.createContext(null);lc.displayName="Location";var Ds=M.createContext({outlet:null,matches:[],isDataRoute:!1});Ds.displayName="Route";var Vg=M.createContext(null);Vg.displayName="RouteError";function X1(n,{relative:e}={}){_t(uc(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=M.useContext(zi),{hash:a,pathname:l,search:c}=cc(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:ws([t,l])),s.createHref({pathname:d,search:c,hash:a})}function uc(){return M.useContext(lc)!=null}function Na(){return _t(uc(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(lc).location}var $S="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function YS(n){M.useContext(zi).static||M.useLayoutEffect(n)}function Z1(){let{isDataRoute:n}=M.useContext(Ds);return n?hI():J1()}function J1(){_t(uc(),"useNavigate() may be used only in the context of a <Router> component.");let n=M.useContext(nl),{basename:e,navigator:t}=M.useContext(zi),{matches:s}=M.useContext(Ds),{pathname:a}=Na(),l=JSON.stringify(HS(s)),c=M.useRef(!1);return YS(()=>{c.current=!0}),M.useCallback((p,g={})=>{if(Vi(c.current,$S),!c.current)return;if(typeof p=="number"){t.go(p);return}let y=qS(p,JSON.parse(l),a,g.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:ws([e,y.pathname])),(g.replace?t.replace:t.push)(y,g.state,g)},[e,t,l,a,n])}M.createContext(null);function cc(n,{relative:e}={}){let{matches:t}=M.useContext(Ds),{pathname:s}=Na(),a=JSON.stringify(HS(t));return M.useMemo(()=>qS(n,JSON.parse(a),s,e==="path"),[n,a,s,e])}function eI(n,e){return WS(n,e)}function WS(n,e,t,s){var ee;_t(uc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:l}=M.useContext(zi),{matches:c}=M.useContext(Ds),d=c[c.length-1],p=d?d.params:{},g=d?d.pathname:"/",y=d?d.pathnameBase:"/",T=d&&d.route;{let Q=T&&T.path||"";QS(g,!T||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let S=Na(),N;if(e){let Q=typeof e=="string"?tl(e):e;_t(y==="/"||((ee=Q.pathname)==null?void 0:ee.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),N=Q}else N=S;let I=N.pathname||"/",F=I;if(y!=="/"){let Q=y.replace(/^\//,"").split("/");F="/"+I.replace(/^\//,"").split("/").slice(Q.length).join("/")}let V=!l&&t&&t.matches&&t.matches.length>0?t.matches:BS(n,{pathname:F});Vi(T||V!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),Vi(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=rI(V&&V.map(Q=>Object.assign({},Q,{params:Object.assign({},p,Q.params),pathname:ws([y,a.encodeLocation?a.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?y:ws([y,a.encodeLocation?a.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),c,t,s);return e&&Y?M.createElement(lc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},Y):Y}function tI(){let n=cI(),e=$1(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:l},"ErrorBoundary")," or"," ",M.createElement("code",{style:l},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),t?M.createElement("pre",{style:a},t):null,c)}var nI=M.createElement(tI,null),iI=class extends M.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?M.createElement(Ds.Provider,{value:this.props.routeContext},M.createElement(Vg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function sI({routeContext:n,match:e,children:t}){let s=M.useContext(nl);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),M.createElement(Ds.Provider,{value:n},t)}function rI(n,e=[],t=null,s=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,l=t==null?void 0:t.errors;if(l!=null){let p=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);_t(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,d=-1;if(t)for(let p=0;p<a.length;p++){let g=a[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:y,errors:T}=t,S=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!T||T[g.route.id]===void 0);if(g.route.lazy||S){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,g,y)=>{let T,S=!1,N=null,I=null;t&&(T=l&&g.route.id?l[g.route.id]:void 0,N=g.route.errorElement||nI,c&&(d<0&&y===0?(QS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,I=null):d===y&&(S=!0,I=g.route.hydrateFallbackElement||null)));let F=e.concat(a.slice(0,y+1)),V=()=>{let Y;return T?Y=N:S?Y=I:g.route.Component?Y=M.createElement(g.route.Component,null):g.route.element?Y=g.route.element:Y=p,M.createElement(sI,{match:g,routeContext:{outlet:p,matches:F,isDataRoute:t!=null},children:Y})};return t&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?M.createElement(iI,{location:t.location,revalidation:t.revalidation,component:N,error:T,children:V(),routeContext:{outlet:null,matches:F,isDataRoute:!0}}):V()},null)}function Ug(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function aI(n){let e=M.useContext(nl);return _t(e,Ug(n)),e}function oI(n){let e=M.useContext($f);return _t(e,Ug(n)),e}function lI(n){let e=M.useContext(Ds);return _t(e,Ug(n)),e}function jg(n){let e=lI(n),t=e.matches[e.matches.length-1];return _t(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function uI(){return jg("useRouteId")}function cI(){var s;let n=M.useContext(Vg),e=oI("useRouteError"),t=jg("useRouteError");return n!==void 0?n:(s=e.errors)==null?void 0:s[t]}function hI(){let{router:n}=aI("useNavigate"),e=jg("useNavigate"),t=M.useRef(!1);return YS(()=>{t.current=!0}),M.useCallback(async(a,l={})=>{Vi(t.current,$S),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...l}))},[n,e])}var ST={};function QS(n,e,t){!e&&!ST[n]&&(ST[n]=!0,Vi(!1,t))}M.memo(fI);function fI({routes:n,future:e,state:t}){return WS(n,void 0,t,e)}function XS(n){_t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dI({basename:n="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1}){_t(!uc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=M.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof t=="string"&&(t=tl(t));let{pathname:p="/",search:g="",hash:y="",state:T=null,key:S="default"}=t,N=M.useMemo(()=>{let I=Rs(p,c);return I==null?null:{location:{pathname:I,search:g,hash:y,state:T,key:S},navigationType:s}},[c,p,g,y,T,S,s]);return Vi(N!=null,`<Router basename="${c}"> is not able to match the URL "${p}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:M.createElement(zi.Provider,{value:d},M.createElement(lc.Provider,{children:e,value:N}))}function pI({children:n,location:e}){return eI(Wm(n),e)}function Wm(n,e=[]){let t=[];return M.Children.forEach(n,(s,a)=>{if(!M.isValidElement(s))return;let l=[...e,a];if(s.type===M.Fragment){t.push.apply(t,Wm(s.props.children,l));return}_t(s.type===XS,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_t(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Wm(s.props.children,l)),t.push(c)}),t}var of="get",lf="application/x-www-form-urlencoded";function Yf(n){return n!=null&&typeof n.tagName=="string"}function mI(n){return Yf(n)&&n.tagName.toLowerCase()==="button"}function gI(n){return Yf(n)&&n.tagName.toLowerCase()==="form"}function _I(n){return Yf(n)&&n.tagName.toLowerCase()==="input"}function yI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function vI(n,e){return n.button===0&&(!e||e==="_self")&&!yI(n)}var Qh=null;function EI(){if(Qh===null)try{new FormData(document.createElement("form"),0),Qh=!1}catch{Qh=!0}return Qh}var TI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function bm(n){return n!=null&&!TI.has(n)?(Vi(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lf}"`),null):n}function SI(n,e){let t,s,a,l,c;if(gI(n)){let d=n.getAttribute("action");s=d?Rs(d,e):null,t=n.getAttribute("method")||of,a=bm(n.getAttribute("enctype"))||lf,l=new FormData(n)}else if(mI(n)||_I(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(s=p?Rs(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||of,a=bm(n.getAttribute("formenctype"))||bm(d.getAttribute("enctype"))||lf,l=new FormData(d,n),!EI()){let{name:g,type:y,value:T}=n;if(y==="image"){let S=g?`${g}.`:"";l.append(`${S}x`,"0"),l.append(`${S}y`,"0")}else g&&l.append(g,T)}}else{if(Yf(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=of,s=null,a=lf,c=n}return l&&a==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:c}}function Bg(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function AI(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function wI(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function CI(n,e,t){let s=await Promise.all(n.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await AI(l,t);return c.links?c.links():[]}return[]}));return NI(s.flat(1).filter(wI).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function AT(n,e,t,s,a,l){let c=(p,g)=>t[g]?p.route.id!==t[g].route.id:!0,d=(p,g)=>{var y;return t[g].pathname!==p.pathname||((y=t[g].route.path)==null?void 0:y.endsWith("*"))&&t[g].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,g)=>c(p,g)||d(p,g)):l==="data"?e.filter((p,g)=>{var T;let y=s.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(c(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function bI(n,e,{includeHydrateFallback:t}={}){return RI(n.map(s=>{let a=e.routes[s.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function RI(n){return[...new Set(n)]}function II(n){let e={},t=Object.keys(n).sort();for(let s of t)e[s]=n[s];return e}function NI(n,e){let t=new Set;return new Set(e),n.reduce((s,a)=>{let l=JSON.stringify(II(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var xI=new Set([100,101,204,205]);function OI(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Rs(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function ZS(){let n=M.useContext(nl);return Bg(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function DI(){let n=M.useContext($f);return Bg(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var zg=M.createContext(void 0);zg.displayName="FrameworkContext";function JS(){let n=M.useContext(zg);return Bg(n,"You must render this element inside a <HydratedRouter> element"),n}function kI(n,e){let t=M.useContext(zg),[s,a]=M.useState(!1),[l,c]=M.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:y,onTouchStart:T}=e,S=M.useRef(null);M.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let F=Y=>{Y.forEach(ee=>{c(ee.isIntersecting)})},V=new IntersectionObserver(F,{threshold:.5});return S.current&&V.observe(S.current),()=>{V.disconnect()}}},[n]),M.useEffect(()=>{if(s){let F=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(F)}}},[s]);let N=()=>{a(!0)},I=()=>{a(!1),c(!1)};return t?n!=="intent"?[l,S,{}]:[l,S,{onFocus:wu(d,N),onBlur:wu(p,I),onMouseEnter:wu(g,N),onMouseLeave:wu(y,I),onTouchStart:wu(T,N)}]:[!1,S,{}]}function wu(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function PI({page:n,...e}){let{router:t}=ZS(),s=M.useMemo(()=>BS(t.routes,n,t.basename),[t.routes,n,t.basename]);return s?M.createElement(LI,{page:n,matches:s,...e}):null}function MI(n){let{manifest:e,routeModules:t}=JS(),[s,a]=M.useState([]);return M.useEffect(()=>{let l=!1;return CI(n,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[n,e,t]),s}function LI({page:n,matches:e,...t}){let s=Na(),{manifest:a,routeModules:l}=JS(),{basename:c}=ZS(),{loaderData:d,matches:p}=DI(),g=M.useMemo(()=>AT(n,e,p,a,s,"data"),[n,e,p,a,s]),y=M.useMemo(()=>AT(n,e,p,a,s,"assets"),[n,e,p,a,s]),T=M.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let I=new Set,F=!1;if(e.forEach(Y=>{var Q;let ee=a.routes[Y.route.id];!ee||!ee.hasLoader||(!g.some(re=>re.route.id===Y.route.id)&&Y.route.id in d&&((Q=l[Y.route.id])!=null&&Q.shouldRevalidate)||ee.hasClientLoader?F=!0:I.add(Y.route.id))}),I.size===0)return[];let V=OI(n,c);return F&&I.size>0&&V.searchParams.set("_routes",e.filter(Y=>I.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[V.pathname+V.search]},[c,d,s,a,g,e,n,l]),S=M.useMemo(()=>bI(y,a),[y,a]),N=MI(y);return M.createElement(M.Fragment,null,T.map(I=>M.createElement("link",{key:I,rel:"prefetch",as:"fetch",href:I,...t})),S.map(I=>M.createElement("link",{key:I,rel:"modulepreload",href:I,...t})),N.map(({key:I,link:F})=>M.createElement("link",{key:I,...F})))}function VI(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var eA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{eA&&(window.__reactRouterVersion="7.6.0")}catch{}function UI({basename:n,children:e,window:t}){let s=M.useRef();s.current==null&&(s.current=w1({window:t,v5Compat:!0}));let a=s.current,[l,c]=M.useState({action:a.action,location:a.location}),d=M.useCallback(p=>{M.startTransition(()=>c(p))},[c]);return M.useLayoutEffect(()=>a.listen(d),[a,d]),M.createElement(dI,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:a})}var tA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ga=M.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:c,state:d,target:p,to:g,preventScrollReset:y,viewTransition:T,...S},N){let{basename:I}=M.useContext(zi),F=typeof g=="string"&&tA.test(g),V,Y=!1;if(typeof g=="string"&&F&&(V=g,eA))try{let x=new URL(window.location.href),P=g.startsWith("//")?new URL(x.protocol+g):new URL(g),U=Rs(P.pathname,I);P.origin===x.origin&&U!=null?g=U+P.search+P.hash:Y=!0}catch{Vi(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ee=X1(g,{relative:a}),[Q,re,se]=kI(s,S),fe=FI(g,{replace:c,state:d,target:p,preventScrollReset:y,relative:a,viewTransition:T});function D(x){e&&e(x),x.defaultPrevented||fe(x)}let R=M.createElement("a",{...S,...se,href:V||ee,onClick:Y||l?e:D,ref:VI(N,re),target:p,"data-discover":!F&&t==="render"?"true":void 0});return Q&&!F?M.createElement(M.Fragment,null,R,M.createElement(PI,{page:ee})):R});ga.displayName="Link";var jI=M.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:d,children:p,...g},y){let T=cc(c,{relative:g.relative}),S=Na(),N=M.useContext($f),{navigator:I,basename:F}=M.useContext(zi),V=N!=null&&$I(T)&&d===!0,Y=I.encodeLocation?I.encodeLocation(T).pathname:T.pathname,ee=S.pathname,Q=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;t||(ee=ee.toLowerCase(),Q=Q?Q.toLowerCase():null,Y=Y.toLowerCase()),Q&&F&&(Q=Rs(Q,F)||Q);const re=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let se=ee===Y||!a&&ee.startsWith(Y)&&ee.charAt(re)==="/",fe=Q!=null&&(Q===Y||!a&&Q.startsWith(Y)&&Q.charAt(Y.length)==="/"),D={isActive:se,isPending:fe,isTransitioning:V},R=se?e:void 0,x;typeof s=="function"?x=s(D):x=[s,se?"active":null,fe?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(D):l;return M.createElement(ga,{...g,"aria-current":R,className:x,ref:y,style:P,to:c,viewTransition:d},typeof p=="function"?p(D):p)});jI.displayName="NavLink";var BI=M.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:c=of,action:d,onSubmit:p,relative:g,preventScrollReset:y,viewTransition:T,...S},N)=>{let I=GI(),F=KI(d,{relative:g}),V=c.toLowerCase()==="get"?"get":"post",Y=typeof d=="string"&&tA.test(d),ee=Q=>{if(p&&p(Q),Q.defaultPrevented)return;Q.preventDefault();let re=Q.nativeEvent.submitter,se=(re==null?void 0:re.getAttribute("formmethod"))||c;I(re||Q.currentTarget,{fetcherKey:e,method:se,navigate:t,replace:a,state:l,relative:g,preventScrollReset:y,viewTransition:T})};return M.createElement("form",{ref:N,method:V,action:F,onSubmit:s?p:ee,...S,"data-discover":!Y&&n==="render"?"true":void 0})});BI.displayName="Form";function zI(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nA(n){let e=M.useContext(nl);return _t(e,zI(n)),e}function FI(n,{target:e,replace:t,state:s,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=Z1(),p=Na(),g=cc(n,{relative:l});return M.useCallback(y=>{if(vI(y,e)){y.preventDefault();let T=t!==void 0?t:Qu(p)===Qu(g);d(n,{replace:T,state:s,preventScrollReset:a,relative:l,viewTransition:c})}},[p,d,g,t,s,e,n,a,l,c])}var HI=0,qI=()=>`__${String(++HI)}__`;function GI(){let{router:n}=nA("useSubmit"),{basename:e}=M.useContext(zi),t=uI();return M.useCallback(async(s,a={})=>{let{action:l,method:c,encType:d,formData:p,body:g}=SI(s,e);if(a.navigate===!1){let y=a.fetcherKey||qI();await n.fetch(y,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function KI(n,{relative:e}={}){let{basename:t}=M.useContext(zi),s=M.useContext(Ds);_t(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...cc(n||".",{relative:e})},c=Na();if(n==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(y=>y==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let y=d.toString();l.search=y?`?${y}`:""}}return(!n||n===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:ws([t,l.pathname])),Qu(l)}function $I(n,e={}){let t=M.useContext(KS);_t(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=nA("useViewTransitionState"),a=cc(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Rs(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=Rs(t.nextLocation.pathname,s)||t.nextLocation.pathname;return yf(a.pathname,c)!=null||yf(a.pathname,l)!=null}[...xI];const Ne=({className:n,content:e,func:t,submit:s,icon:a,change:l,element:c})=>A.jsxs("button",{className:`${n}`,onSubmit:d=>{s(d)},onClick:()=>{t()},children:[a,e,c]}),YI=()=>{const{pages:n,setPages:e,hideSideBar:t,setHideSideBar:s}=M.useContext(Ma);function a(l){e(c=>c.map((d,p)=>p==l?{...d,ind:!0}:{...d,ind:!1}))}return M.useEffect(()=>{console.log(t)},[t]),A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:ct.navBarWrapper,children:[A.jsxs("div",{className:ct.left,children:[A.jsx("img",{src:"./web-icon.png"}),A.jsx("h1",{className:ct.title,children:"Acad"})]}),A.jsx("div",{className:ct.mid,children:A.jsx("ul",{children:n==null?void 0:n.map((l,c)=>A.jsxs(ga,{to:l.path,className:l.ind?`${ct.ind} ${ct.Links}`:`${ct.notInd} ${ct.Links}`,onClick:()=>a(c),children:[A.jsxs("span",{className:ct.content,children:[l.icon,l.name]}),A.jsx("span",{className:ct.indicator})]},l.name))})}),A.jsxs("div",{className:ct.right,children:[A.jsx("button",{className:ct.authButts,children:A.jsx(ga,{to:"/Acad/SignIn",className:ct.Links,children:"Sign In"})}),A.jsx("button",{className:ct.authButts,children:A.jsx(ga,{to:"/Acad/SignUp",className:ct.Links,children:"Sign Up"})}),A.jsx("button",{className:ct.HamburgerButt,onClick:()=>{s(!1)},children:A.jsx("i",{className:"fa fa-list-ul"})})]})]}),A.jsx("div",{className:t==!1?ct.sidebar:ct.hideSideBar,children:A.jsxs("ul",{className:t==!1?ct.NavLinks:ct.hideNavLinks,children:[A.jsx(Ne,{className:ct.HamburgerButt,func:()=>{s(!t)},content:A.jsx("i",{className:"fa fa-list-ul"})}),n.map((l,c)=>A.jsxs(ga,{to:l.path,onClick:()=>{a(l)},className:l.ind?`${ct.Links} ${ct.indicated}`:`${ct.Links} ${ct.notIndicated}`,children:[l.icon,A.jsxs("span",{children:[l.name,A.jsx("span",{className:ct.indication})]})]},l.path))]})})]})},WI="_homeWrapper_1w0cv_15",QI="_left_1w0cv_31",XI="_wrapTop_1w0cv_49",ZI="_Links_1w0cv_97",JI="_wrapBottom_1w0cv_129",eN="_orange_1w0cv_159",tN="_purple_1w0cv_165",nN="_blue_1w0cv_171",iN="_right_1w0cv_181",_s={homeWrapper:WI,left:QI,wrapTop:XI,Links:ZI,wrapBottom:JI,orange:eN,purple:tN,blue:nN,right:iN},wT={},iA=()=>{const{pagination:n,setPages:e}=M.useContext(Ma);return M.useEffect(()=>{e(t=>t.map(s=>s.name==="Home"?{...s,ind:!0}:{...s}))},[]),A.jsx(A.Fragment,{children:A.jsxs("div",{className:_s.homeWrapper,children:[A.jsxs("div",{className:`${_s.left} ${wT.animateLeft}`,children:[A.jsxs("div",{className:_s.wrapTop,children:[A.jsx("h1",{children:"Welcome User!"}),A.jsx("p",{children:"Write, read and document your work and studies using the Acad Web App for free!"}),A.jsx(ga,{to:"/Acad/Tasks",className:_s.Links,children:A.jsx(Ne,{content:"Get Started",func:()=>{n(1)}})})]}),A.jsxs("div",{className:_s.wrapBottom,children:[A.jsx(Ne,{className:_s.orange}),A.jsx(Ne,{className:_s.purple}),A.jsx(Ne,{className:_s.blue})]})]}),A.jsx("div",{className:_s.right,children:A.jsx("img",{src:"./Home/Working.png",className:wT.animateImg})})]})})},sN="_bottomOptionsWrapper_9abog_1",rN="_left_9abog_71",aN="_uncheck_9abog_71",oN="_right_9abog_89",lN="_fullContent_9abog_143",Xn={bottomOptionsWrapper:sN,left:rN,uncheck:aN,right:oN,fullContent:lN},uN=()=>{const{handleSelectedTasks:n,selectedTask:e,selectTask:t,setSelectTask:s,unselectAll:a,tasks:l,searching:c,setUpdateTasks:d,filteredTasks:p,setFilteredTasks:g,handleMarking:y,selecting:T,setSelecting:S}=M.useContext(wc),N=()=>{let V=l,Y=p,ee=[],Q=[];if(c){Y=Y.map(re=>({...re,isChecked:!0}));for(let re=0;re<Y.length;re++)Y[re].isChecked&&Q.push({id:Y[re].id,index:re});n([...Q])}else{V=V.map(re=>({...re,isChecked:!0}));for(let re=0;re<V.length;re++)V[re].isChecked&&ee.push({id:V[re].id,index:re});n([...ee])}c?g([...Y]):d(re=>re.map(se=>({...se,isChecked:!0})))};function I(){let V=l,Y=p;for(let ee in Y)for(let Q in e)Y[ee].id===e[Q].id&&Y.splice(ee,1);for(let ee in l)for(let Q in e)V[ee].id===e[Q].id&&V.splice(ee,1);y(Y,[...V]),n(null)}const F=()=>{if(T==!0)return A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:Xn.left,children:[A.jsx(Ne,{element:A.jsx("span",{className:Xn.fullContent,children:"Select All"}),icon:A.jsx("i",{className:"fa fa-check"}),className:Xn.SelectAllButton,func:()=>{N()}}),A.jsx(Ne,{element:A.jsx("span",{className:Xn.fullContent,children:"Unselect"}),icon:A.jsx("i",{className:`fas fa fa-check ${Xn.uncheck}`}),className:Xn.UnselectAllButton,func:()=>{a()}})]}),A.jsxs("div",{className:Xn.right,children:[A.jsx(Ne,{icon:A.jsx("i",{className:"fa fa-trash"}),element:A.jsx("span",{className:Xn.fullContent,children:"Delete"}),func:()=>{t?I():console.log("No update")}}),A.jsx(Ne,{icon:A.jsx("i",{className:"fa fa-close"}),element:A.jsx("span",{className:Xn.fullContent,children:"Cancel"}),func:()=>{S(!1),a()}})]})]})};return A.jsx(A.Fragment,{children:A.jsx("div",{className:Xn.bottomOptionsWrapper,children:T?A.jsx(F,{}):A.jsx(Ne,{element:A.jsx("span",{className:Xn.fullContent,children:"Select"}),icon:A.jsx("i",{className:"fa fa-hand-o-up"}),className:Xn.SelectButton,func:()=>S(!0)})})})},cN=()=>A.jsx("div",{children:"EditTaskPrompt"}),hN="_sortTypeBar_1i2uf_1",fN="_hideSortTypeBar_1i2uf_1",dN="_sortTypeBarBox_1i2uf_27",pN="_notIndicated_1i2uf_63",mN="_indicated_1i2uf_73",Cu={sortTypeBar:hN,hideSortTypeBar:fN,sortTypeBarBox:dN,notIndicated:pN,indicated:mN},gN=()=>{const{sortingTypeBar:n,setSortingTypeBar:e,sortingTypes:t,setSortingTypes:s,unselectAll:a,setType:l}=M.useContext(wc);return A.jsx(A.Fragment,{children:A.jsx("div",{className:n?Cu.sortTypeBar:Cu.hideSortTypeBar,onClick:()=>{e(!1)},children:A.jsx("ul",{className:Cu.sortTypeBarBox,children:t==null?void 0:t.map((c,d)=>A.jsx("li",{className:c.ind?Cu.indicated:Cu.notIndicated,onClick:()=>{a(),l(c.type),s(p=>p.map(g=>p[d].type==g.type?{...g,ind:!0}:{...g,ind:!1}))},children:c.type},c.type))})})})},_N=()=>A.jsx("div",{children:"SortTaskPrompt"}),yN="_tasksContainer_gj5si_1",vN="_tasks_gj5si_1",EN="_Finished_gj5si_73",TN="_unchecked_gj5si_115",SN="_checked_gj5si_123",vs={tasksContainer:yN,tasks:vN,Finished:EN,unchecked:TN,checked:SN},ys=({task:n,i:e})=>{const{selecting:t}=M.useContext(Fg);return A.jsxs("label",{htmlFor:"task"+n.id,style:n.style!="default"?{...n.style}:null,className:n.type=="pending"?`${vs.Pending} ${n.cName.map(s=>JSON.parse(s)).join(" ")} ${vs.tasks}`:`${vs.Finished} ${n.cName.map(s=>JSON.parse(s)).join(" ")} ${vs.tasks}`,onDoubleClick:()=>{setEditing(!0),setOpenedTask({id:n.id,isOpened:!0})},children:[A.jsx("i",{style:t==!1?{display:"none"}:{display:"block"},className:`fa fa-check-square ${n.isChecked===!0?vs.checked:vs.unchecked}`}),A.jsx("input",{style:{display:"none"},type:"checkbox",id:"task"+n.id,onChange:()=>{t&&checkTask(n.id)}}),A.jsx("span",{children:n.task})]},n.id)},AN=()=>{const{searching:n,setSearching:e,tasks:t,setTasks:s,filteredTask:a,setFilteredTask:l,sorting:c,setSorting:d,type:p,selecting:g,setSelecting:y,taskCheckboxes:T,setTaskCheckboxes:S}=M.useContext(Fg);if(n&&a!=null)return A.jsx("div",{className:vs.tasksContainer,children:a.map((N,I)=>{if(N.type==="pending"&&p==="Pending")return A.jsx(ys,{task:N,i:I,selecting:g,chechTask:()=>checkTask()},N.id);if(N.type==="finished"&&p==="Finished")return A.jsx(ys,{task:N,i:I,selecting:g,chechTask:()=>checkTask()},N.id);if(p==="All Tasks")return A.jsx(ys,{task:N,i:I,selecting:g,chechTask:()=>checkTask()},N.id)})},"Task_Container");if(c&&!n){let N=T;for(let I in sortOptions)I==0&&sortOptions[I].state==!0?N=N.sort((F,V)=>V.dateCreated.time-F.dateCreated.time):I==1&&sortOptions[I].state==!0?N=N.sort((F,V)=>F.dateCreated.time-V.dateCreated.time):I==2&&sortOptions[I].state==!0?N=N.sort((F,V)=>F.task.localeCompare(V.task)):I==3&&sortOptions[I].state==!0&&(N=N.sort((F,V)=>V.task.localeCompare(F.task)));return A.jsx("div",{className:vs.tasksContainer,children:N.map((I,F)=>{if(I.type==="pending"&&p==="Pending")return A.jsx(ys,{task:I,i:F,selecting:g,chechTask:()=>checkTask()},I.id);if(I.type==="finished"&&p==="Finished")return A.jsx(ys,{task:I,i:F,selecting:g,chechTask:()=>checkTask()},I.id);if(p==="All Tasks")return A.jsx(ys,{task:I,i:F,selecting:g,chechTask:()=>checkTask()},I.id)})})}else if(!c&&!n)return A.jsx("div",{className:vs.tasksContainer,children:T==null?void 0:T.map((N,I)=>{if(N.type==="pending"&&p==="Pending")return A.jsx(ys,{task:N,i:I,selecting:g,chechTask:()=>checkTask()},N.id);if(N.type==="finished"&&p==="Finished")return A.jsx(ys,{task:N,i:I,selecting:g,chechTask:()=>checkTask()},N.id);if(p==="All Tasks")return A.jsx(ys,{task:N,i:I,selecting:g,chechTask:()=>checkTask()},N.id)})})},Fg=M.createContext(),wN=()=>{const{searching:n,setSearching:e,tasks:t,setTasks:s,filteredTask:a,setFilteredTask:l,sorting:c,setSorting:d,type:p,selecting:g,setSelecting:y}=M.useContext(wc),[T,S]=M.useState(t.length!=0?[...t]:[]),N={searching:n,setSearching:e,tasks:t,setTasks:s,filteredTask:a,setFilteredTask:l,sorting:c,setSorting:d,type:p,selecting:g,setSelecting:y,taskCheckboxes:T,setTaskCheckboxes:S};return M.useEffect(()=>{S([...t])},[t]),A.jsx(Fg.Provider,{value:N,children:A.jsx(AN,{})})},CN="_Prompt_Box_oyket_1",bN="_Close_Button_oyket_43",RN="_colorPicker_oyket_125",IN="_Hide_BG_Color_Prompt_oyket_157",NN="_Hide_Color_Prompt_oyket_159",xN="_Hide_Border_Color_Prompt_oyket_161",ON="_Hide_Font_Weight_Prompt_oyket_163",DN="_Hide_Italic_Prompt_oyket_165",kN="_BG_Color_Prompt_oyket_173",PN="_Color_Prompt_oyket_175",MN="_Border_Color_Prompt_oyket_177",LN="_Font_Weight_Prompt_oyket_179",VN="_Italic_Prompt_oyket_181",UN="_topOptionsWrapper_oyket_189",jN="_topOptionsBox_oyket_209",BN="_notWorking_oyket_347",Ee={Prompt_Box:CN,Close_Button:bN,colorPicker:RN,Hide_BG_Color_Prompt:IN,Hide_Color_Prompt:NN,Hide_Border_Color_Prompt:xN,Hide_Font_Weight_Prompt:ON,Hide_Italic_Prompt:DN,BG_Color_Prompt:kN,Color_Prompt:PN,Border_Color_Prompt:MN,Font_Weight_Prompt:LN,Italic_Prompt:VN,topOptionsWrapper:UN,topOptionsBox:jN,notWorking:BN},zN=()=>{var F;const{updateTask:n,selectedTasks:e,numberOfChanges:t,setNumberOfChanges:s}=M.useContext(wc),[a,l]=M.useState(!1),[c,d]=M.useState(!1),[p,g]=M.useState(!1),[y,T]=M.useState(!1),[S,N]=M.useState(!1),I=()=>A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:a?`${Ee.BG_Color_Prompt} ${Ee.Prompt_Box}`:`${Ee.Hide_BG_Color_Prompt} ${Ee.Prompt_Box}`,children:[A.jsx(Ne,{icon:A.jsx("i",{className:"fa fa-close"}),className:`${Ee.Close_Button}`,func:()=>{l(!1)}}),A.jsx("h1",{children:"Change BG Color"}),A.jsxs("label",{htmlFor:"colorPicker",className:Ee.colorPicker,children:[A.jsx("input",{type:"color",id:"colorPicker",onBlur:V=>{handleMark(!1,!1,V.target.value,!1,!1)}}),A.jsx("span",{children:"Choose BG Color"})]}),A.jsx(Ne,{content:"Default",func:()=>{handleMark(!1,!1,"#f09c2e",!1,!1)}})]}),A.jsxs("div",{className:c?`${Ee.Color_Prompt} ${Ee.Prompt_Box}`:`${Ee.Hide_Color_Prompt} ${Ee.Prompt_Box}`,children:[A.jsx("h1",{children:"Change Font Color"}),A.jsx(Ne,{icon:A.jsx("i",{className:"fa fa-close"}),className:`${Ee.Close_Button}`,func:()=>{d(!1)}}),A.jsxs("label",{htmlFor:"bgColorPicker",className:`${Ee.bgColorPicker} ${Ee.colorPicker}`,children:[A.jsx("input",{type:"color",id:"bgColorPicker",onBlur:V=>{handleMark(!1,V.target.value,!1,!1,!1)}}),A.jsx("span",{children:"Choose Font Color"})]}),A.jsx(Ne,{content:"Default",func:()=>{handleMark(!1,"white",!1,!1,!1)}})]}),A.jsxs("div",{className:p?`${Ee.Border_Color_Prompt} ${Ee.Prompt_Box}`:`${Ee.Hide_Border_Color_Prompt} ${Ee.Prompt_Box}`,children:[A.jsx("h1",{children:"Change Border Color"}),A.jsx(Ne,{icon:A.jsx("i",{className:"fa fa-close"}),className:`${Ee.Close_Button}`,func:()=>{g(!1)}}),A.jsxs("label",{htmlFor:"borderColorPicker",className:`${Ee.borderColorPicker} ${Ee.colorPicker}`,children:[A.jsx("input",{type:"color",id:"borderColorPicker",onBlur:V=>{handleMark(!1,!1,!1,!1,!1,V.target.value)}}),A.jsx("span",{children:"Choose Border Color"})]}),A.jsx(Ne,{content:"Default",func:()=>{handleMark(!1,!1,!1,!1,!1,"#d16c06")}})]}),A.jsxs("div",{className:y?`${Ee.Font_Weight_Prompt} ${Ee.Prompt_Box}`:`${Ee.Hide_Font_Weight_Prompt} ${Ee.Prompt_Box}`,children:[A.jsx("h1",{children:"Change Font Weight"}),A.jsx(Ne,{icon:A.jsx("i",{className:"fa fa-close"}),className:`${Ee.Close_Button}`,func:()=>{T(!1)}}),A.jsx(Ne,{content:"Normal",func:()=>{handleMark(!1,!1,!1,"Normal",!1,!1)}}),A.jsx(Ne,{content:"Bold",func:()=>{handleMark(!1,!1,!1,"Bold",!1,!1)}}),A.jsx(Ne,{content:"Bolder",func:()=>{handleMark(!1,!1,!1,"Bolder",!1,!1)}})]}),A.jsxs("div",{className:S?`${Ee.Italic_Prompt} ${Ee.Prompt_Box}`:`${Ee.Hide_Italic_Prompt} ${Ee.Prompt_Box}`,children:[A.jsx("h1",{children:"Change Italization"}),A.jsx(Ne,{icon:A.jsx("i",{className:"fa fa-close"}),className:`${Ee.Close_Button}`,func:()=>{N(!1)}}),A.jsx(Ne,{content:"Normal",func:()=>{handleMark(!1,!1,!1,!1,"Normal",!1)}}),A.jsx(Ne,{content:"Italic",func:()=>{handleMark(!1,!1,!1,!1,"Italic",!1)}})]})]});return A.jsx(A.Fragment,{children:A.jsxs("div",{className:Ee.topOptionsWrapper,children:[A.jsx(I,{}),A.jsxs("div",{className:Ee.topOptionsBox,children:[A.jsx(Ne,{icon:A.jsx("i",{className:"fa fa-save"}),content:"Save Changes",className:t==null?`${Ee.notWorking}`:null,func:()=>{t!=null&&saveToDataBase()}}),A.jsx(Ne,{icon:A.jsx("i",{className:"material-icons",children:"undo"}),content:"Undo",className:t==null||t==0?`${Ee.notWorking}`:null,func:()=>{t>0&&handleUndo()}}),A.jsx(Ne,{icon:A.jsx("i",{className:"material-icons",children:"redo"}),content:"Redo",className:t<((F=JSON.parse(localStorage.getItem("Changes")))==null?void 0:F.length)-1&&t!=null?null:`${Ee.notWorking}`,func:()=>{var V;t<((V=JSON.parse(localStorage.getItem("Changes")))==null?void 0:V.length)-1&&t!=null&&handleRedo()}}),A.jsx(Ne,{icon:A.jsx("i",{className:"fa fa-plus"}),content:A.jsx("span",{children:" Create New Task"}),className:e.length!=0?Ee.working:Ee.notWorking,func:()=>{setShowTaskPrompt(!0),setShowNavbar(!1)}}),A.jsx(Ne,{icon:A.jsx("i",{className:"fa fa-edit"}),content:A.jsx("span",{children:" Mark As Finished"}),className:e.length!=0?Ee.working:Ee.notWorking,func:()=>{handleMark("finished","white","#51af0f",!1,!1,"rgb(8, 97, 20)")}}),A.jsx(Ne,{icon:A.jsx("i",{className:"fa fa-edit"}),content:A.jsx("span",{children:" Mark As Pending"}),className:e.length!=0?Ee.working:Ee.notWorking,func:()=>{handleMark("pending","white","#f09c2e",!1,!1,"rgb(209, 108, 6)")}}),A.jsx(Ne,{icon:A.jsx("i",{className:"fa fa-sort"}),content:A.jsx("span",{children:" Sort"}),className:e.length!=0?Ee.working:Ee.notWorking,func:()=>{setShowSortPrompt(!0),setShowNavbar(!1)}}),A.jsx(Ne,{icon:A.jsx("i",{className:"material-icons",children:"format_color_fill"}),content:A.jsx("span",{children:" BG Color "}),className:e.length!=0?Ee.working:Ee.notWorking,func:()=>{l(!0),d(!1),g(!1),T(!1),N(!1)}}),A.jsx(Ne,{icon:A.jsx("i",{className:"material-icons",children:"format_color_text"}),content:A.jsx("span",{children:" Font Color"}),className:e.length!=0?Ee.working:Ee.notWorking,func:()=>{d(!0),l(!1),g(!1),T(!1,N(!1))}}),A.jsx(Ne,{icon:A.jsx("i",{className:"material-icons",children:"border_color"}),content:A.jsx("span",{children:" Border Color"}),className:e.length!=0?Ee.working:Ee.notWorking,func:()=>{g(!0),l(!1),d(!1),T(!1),N(!1)}}),A.jsx(Ne,{icon:A.jsx("i",{className:"fa fa-bold"}),content:" Bold",className:e.length!=0?Ee.working:Ee.notWorking,func:()=>{g(!1),l(!1),d(!1),T(!0),N(!1)}}),A.jsx(Ne,{icon:A.jsx("i",{className:"fa fa-italic"}),content:" Italic",className:e.length!=0?Ee.working:Ee.notWorking,func:()=>{g(!1),l(!1),d(!1),T(!1),N(!0)}})]})]})})},FN=()=>A.jsx("div",{children:"SaveChanges"}),HN="_tasksWrapper_8kb66_13",qN="_tasksEditor_8kb66_33",GN="_searchWrapper_8kb66_103",bu={tasksWrapper:HN,tasksEditor:qN,searchWrapper:GN},KN=()=>{};var CT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=function(n,e){if(!n)throw il(e)},il=function(n){return new Error("Firebase Database ("+sA.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},$N=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},Hg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,y=l>>2,T=(l&3)<<4|d>>4;let S=(d&15)<<2|g>>6,N=g&63;p||(N=64,c||(S=64)),s.push(t[y],t[T],t[S],t[N])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(rA(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):$N(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new YN;const S=l<<2|d>>4;if(s.push(S),g!==64){const N=d<<4&240|g>>2;if(s.push(N),T!==64){const I=g<<6&192|T;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class YN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aA=function(n){const e=rA(n);return Hg.encodeByteArray(e,!0)},vf=function(n){return aA(n).replace(/\./g,"")},Ef=function(n){try{return Hg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(n){return oA(void 0,n)}function oA(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!QN(t)||(n[t]=oA(n[t],e[t]));return n}function QN(n){return n!=="__proto__"}/**
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
 */function XN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ZN=()=>XN().__FIREBASE_DEFAULTS__,JN=()=>{if(typeof process>"u"||typeof CT>"u")return;const n=CT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ex=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ef(n[1]);return e&&JSON.parse(e)},Wf=()=>{try{return KN()||ZN()||JN()||ex()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lA=n=>{var e,t;return(t=(e=Wf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},uA=n=>{const e=lA(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},cA=()=>{var n;return(n=Wf())===null||n===void 0?void 0:n.config},hA=n=>{var e;return(e=Wf())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function sl(n){return n.endsWith(".cloudworkstations.dev")}async function Gg(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function fA(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[vf(JSON.stringify(t)),vf(JSON.stringify(c)),""].join(".")}const Bu={};function tx(){const n={prod:[],emulator:[]};for(const e of Object.keys(Bu))Bu[e]?n.emulator.push(e):n.prod.push(e);return n}function nx(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let bT=!1;function Kg(n,e){if(typeof window>"u"||typeof document>"u"||!sl(window.location.host)||Bu[n]===e||Bu[n]||bT)return;Bu[n]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",l=tx().prod.length>0;function c(){const S=document.getElementById(s);S&&S.remove()}function d(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,N){S.setAttribute("width","24"),S.setAttribute("id",N),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{bT=!0,c()},S}function y(S,N){S.setAttribute("id",N),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=nx(s),N=t("text"),I=document.getElementById(N)||document.createElement("span"),F=t("learnmore"),V=document.getElementById(F)||document.createElement("a"),Y=t("preprendIcon"),ee=document.getElementById(Y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const Q=S.element;d(Q),y(V,F);const re=g();p(ee,Y),Q.append(ee,I,V,re),document.body.appendChild(Q)}l?(I.innerText="Preview backend disconnected.",ee.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ee.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $g(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mn())}function ix(){var n;const e=(n=Wf())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rx(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function dA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ax(){const n=mn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ox(){return sA.NODE_ADMIN===!0}function lx(){return!ix()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ux(){try{return typeof indexedDB=="object"}catch{return!1}}function cx(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx="FirebaseError";class Fi extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=hx,Object.setPrototypeOf(this,Fi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hc.prototype.create)}}class hc{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?fx(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Fi(a,d,s)}}function fx(n,e){return n.replace(dx,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const dx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n){return JSON.parse(n)}function nn(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=Xu(Ef(l[0])||""),t=Xu(Ef(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},px=function(n){const e=pA(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},mx=function(n){const e=pA(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function qo(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Qm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tf(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function Sa(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(RT(l)&&RT(c)){if(!Sa(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function RT(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Pu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Mu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const S=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(S<<1|S>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,y;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),y=1518500249):(g=l^c^d,y=1859775393):T<60?(g=l&c|d&(l|c),y=2400959708):(g=l^c^d,y=3395469782);const S=(a<<5|a>>>27)+g+p+y+s[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=S}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function _x(n,e){const t=new yx(n,e);return t.subscribe.bind(t)}class yx{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");vx(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Rm),a.error===void 0&&(a.error=Rm),a.complete===void 0&&(a.complete=Rm);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vx(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Rm(){}function Ex(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,ce(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Qf=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Hi(n){return n&&n._delegate?n._delegate:n}class Is{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pa="[DEFAULT]";/**
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
 */class Sx{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new qg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wx(e))try{this.getOrInitializeService({instanceIdentifier:pa})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=pa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pa){return this.instances.has(e)}getOptions(e=pa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ax(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=pa){return this.component?this.component.multipleInstances?e:pa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ax(n){return n===pa?void 0:n}function wx(n){return n.instantiationMode==="EAGER"}/**
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
 */class Cx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Sx(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ve||(Ve={}));const bx={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},Rx=Ve.INFO,Ix={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},Nx=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=Ix[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xf{constructor(e){this.name=e,this._logLevel=Rx,this._logHandler=Nx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const xx=(n,e)=>e.some(t=>n instanceof t);let IT,NT;function Ox(){return IT||(IT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dx(){return NT||(NT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mA=new WeakMap,Xm=new WeakMap,gA=new WeakMap,Im=new WeakMap,Yg=new WeakMap;function kx(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(mr(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&mA.set(t,n)}).catch(()=>{}),Yg.set(e,n),e}function Px(n){if(Xm.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Xm.set(n,e)}let Zm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gA.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Mx(n){Zm=n(Zm)}function Lx(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Nm(this),e,...t);return gA.set(s,e.sort?e.sort():[e]),mr(s)}:Dx().includes(n)?function(...e){return n.apply(Nm(this),e),mr(mA.get(this))}:function(...e){return mr(n.apply(Nm(this),e))}}function Vx(n){return typeof n=="function"?Lx(n):(n instanceof IDBTransaction&&Px(n),xx(n,Ox())?new Proxy(n,Zm):n)}function mr(n){if(n instanceof IDBRequest)return kx(n);if(Im.has(n))return Im.get(n);const e=Vx(n);return e!==n&&(Im.set(n,e),Yg.set(e,n)),e}const Nm=n=>Yg.get(n);function Ux(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=mr(c);return s&&c.addEventListener("upgradeneeded",p=>{s(mr(c.result),p.oldVersion,p.newVersion,mr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const jx=["get","getKey","getAll","getAllKeys","count"],Bx=["put","add","delete","clear"],xm=new Map;function xT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xm.get(e))return xm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=Bx.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||jx.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return xm.set(e,l),l}Mx(n=>({...n,get:(e,t,s)=>xT(e,t)||n.get(e,t,s),has:(e,t)=>!!xT(e,t)||n.has(e,t)}));/**
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
 */class zx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Fx(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Fx(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jm="@firebase/app",OT="0.13.0";/**
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
 */const Ns=new Xf("@firebase/app"),Hx="@firebase/app-compat",qx="@firebase/analytics-compat",Gx="@firebase/analytics",Kx="@firebase/app-check-compat",$x="@firebase/app-check",Yx="@firebase/auth",Wx="@firebase/auth-compat",Qx="@firebase/database",Xx="@firebase/data-connect",Zx="@firebase/database-compat",Jx="@firebase/functions",eO="@firebase/functions-compat",tO="@firebase/installations",nO="@firebase/installations-compat",iO="@firebase/messaging",sO="@firebase/messaging-compat",rO="@firebase/performance",aO="@firebase/performance-compat",oO="@firebase/remote-config",lO="@firebase/remote-config-compat",uO="@firebase/storage",cO="@firebase/storage-compat",hO="@firebase/firestore",fO="@firebase/ai",dO="@firebase/firestore-compat",pO="firebase",mO="11.8.0";/**
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
 */const eg="[DEFAULT]",gO={[Jm]:"fire-core",[Hx]:"fire-core-compat",[Gx]:"fire-analytics",[qx]:"fire-analytics-compat",[$x]:"fire-app-check",[Kx]:"fire-app-check-compat",[Yx]:"fire-auth",[Wx]:"fire-auth-compat",[Qx]:"fire-rtdb",[Xx]:"fire-data-connect",[Zx]:"fire-rtdb-compat",[Jx]:"fire-fn",[eO]:"fire-fn-compat",[tO]:"fire-iid",[nO]:"fire-iid-compat",[iO]:"fire-fcm",[sO]:"fire-fcm-compat",[rO]:"fire-perf",[aO]:"fire-perf-compat",[oO]:"fire-rc",[lO]:"fire-rc-compat",[uO]:"fire-gcs",[cO]:"fire-gcs-compat",[hO]:"fire-fst",[dO]:"fire-fst-compat",[fO]:"fire-vertex","fire-js":"fire-js",[pO]:"fire-js-all"};/**
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
 */const Sf=new Map,_O=new Map,tg=new Map;function DT(n,e){try{n.container.addComponent(e)}catch(t){Ns.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Er(n){const e=n.name;if(tg.has(e))return Ns.debug(`There were multiple attempts to register component ${e}.`),!1;tg.set(e,n);for(const t of Sf.values())DT(t,n);for(const t of _O.values())DT(t,n);return!0}function Zf(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Cn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const yO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gr=new hc("app","Firebase",yO);/**
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
 */class vO{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ir=mO;function Wg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:eg,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw gr.create("bad-app-name",{appName:String(a)});if(t||(t=cA()),!t)throw gr.create("no-options");const l=Sf.get(a);if(l){if(Sa(t,l.options)&&Sa(s,l.config))return l;throw gr.create("duplicate-app",{appName:a})}const c=new Cx(a);for(const p of tg.values())c.addComponent(p);const d=new vO(t,s,c);return Sf.set(a,d),d}function Qg(n=eg){const e=Sf.get(n);if(!e&&n===eg&&cA())return Wg();if(!e)throw gr.create("no-app",{appName:n});return e}function Jn(n,e,t){var s;let a=(s=gO[n])!==null&&s!==void 0?s:n;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ns.warn(d.join(" "));return}Er(new Is(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const EO="firebase-heartbeat-database",TO=1,Zu="firebase-heartbeat-store";let Om=null;function _A(){return Om||(Om=Ux(EO,TO,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Zu)}catch(t){console.warn(t)}}}}).catch(n=>{throw gr.create("idb-open",{originalErrorMessage:n.message})})),Om}async function SO(n){try{const t=(await _A()).transaction(Zu),s=await t.objectStore(Zu).get(yA(n));return await t.done,s}catch(e){if(e instanceof Fi)Ns.warn(e.message);else{const t=gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ns.warn(t.message)}}}async function kT(n,e){try{const s=(await _A()).transaction(Zu,"readwrite");await s.objectStore(Zu).put(e,yA(n)),await s.done}catch(t){if(t instanceof Fi)Ns.warn(t.message);else{const s=gr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ns.warn(s.message)}}}function yA(n){return`${n.name}!${n.options.appId}`}/**
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
 */const AO=1024,wO=30;class CO{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new RO(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=PT();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>wO){const c=IO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ns.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=PT(),{heartbeatsToSend:s,unsentEntries:a}=bO(this._heartbeatsCache.heartbeats),l=vf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ns.warn(t),""}}}function PT(){return new Date().toISOString().substring(0,10)}function bO(n,e=AO){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),MT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),MT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class RO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ux()?cx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await SO(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return kT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return kT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function MT(n){return vf(JSON.stringify({version:2,heartbeats:n})).length}function IO(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function NO(n){Er(new Is("platform-logger",e=>new zx(e),"PRIVATE")),Er(new Is("heartbeat",e=>new CO(e),"PRIVATE")),Jn(Jm,OT,n),Jn(Jm,OT,"esm2017"),Jn("fire-js","")}NO("");var xO="firebase",OO="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jn(xO,OO,"app");var LT={};const VT="@firebase/database",UT="1.0.19";/**
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
 */let vA="";function DO(n){vA=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Xu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ks(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kO(e)}}catch{}return new PO},_a=EA("localStorage"),MO=EA("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new Xf("@firebase/database"),LO=function(){let n=1;return function(){return n++}}(),TA=function(n){const e=Tx(n),t=new gx;t.update(e);const s=t.digest();return Hg.encodeByteArray(s)},fc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=fc.apply(null,s):typeof s=="object"?e+=nn(s):e+=s,e+=" "}return e};let zu=null,jT=!0;const VO=function(n,e){ce(!0,"Can't turn on custom loggers persistently."),Vo.logLevel=Ve.VERBOSE,zu=Vo.log.bind(Vo)},hn=function(...n){if(jT===!0&&(jT=!1,zu===null&&MO.get("logging_enabled")===!0&&VO()),zu){const e=fc.apply(null,n);zu(e)}},dc=function(n){return function(...e){hn(n,...e)}},ng=function(...n){const e="FIREBASE INTERNAL ERROR: "+fc(...n);Vo.error(e)},Aa=function(...n){const e=`FIREBASE FATAL ERROR: ${fc(...n)}`;throw Vo.error(e),new Error(e)},Vn=function(...n){const e="FIREBASE WARNING: "+fc(...n);Vo.warn(e)},UO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},SA=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},jO=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Go="[MIN_NAME]",wa="[MAX_NAME]",al=function(n,e){if(n===e)return 0;if(n===Go||e===wa)return-1;if(e===Go||n===wa)return 1;{const t=BT(n),s=BT(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},BO=function(n,e){return n===e?0:n<e?-1:1},Ru=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+nn(e))},Xg=function(n){if(typeof n!="object"||n===null)return nn(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=nn(e[s]),t+=":",t+=Xg(n[e[s]]);return t+="}",t},AA=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function ei(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const wA=function(n){ce(!SA(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const y=g.join("");let T="";for(p=0;p<64;p+=8){let S=parseInt(y.substr(p,8),2).toString(16);S.length===1&&(S="0"+S),T=T+S}return T.toLowerCase()},zO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},FO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},HO=new RegExp("^-?(0*)\\d{1,10}$"),qO=-2147483648,GO=2147483647,BT=function(n){if(HO.test(n)){const e=Number(n);if(e>=qO&&e<=GO)return e}return null},pc=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Vn("Exception was thrown by user callback.",t),e},Math.floor(0))}},KO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class $O{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Cn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Vn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(hn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="5",CA="v",bA="s",RA="r",IA="f",NA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xA="ls",OA="p",ig="ac",DA="websocket",kA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_a.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_a.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function QO(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function PA(n,e,t){ce(typeof e=="string","typeof type must == string"),ce(typeof t=="object","typeof params must == object");let s;if(e===DA)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===kA)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);QO(n)&&(t.ns=n.namespace);const a=[];return ei(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(){this.counters_={}}incrementCounter(e,t=1){ks(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return WN(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm={},km={};function Jg(n){const e=n.toString();return Dm[e]||(Dm[e]=new XO),Dm[e]}function ZO(n,e){const t=n.toString();return km[t]||(km[t]=e()),km[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&pc(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT="start",eD="close",tD="pLPCommand",nD="pRTLPCB",MA="id",LA="pw",VA="ser",iD="cb",sD="seg",rD="ts",aD="d",oD="dframe",UA=1870,jA=30,lD=UA-jA,uD=25e3,cD=3e4;class Mo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=dc(e),this.stats_=Jg(t),this.urlFn=p=>(this.appCheckToken&&(p[ig]=this.appCheckToken),PA(t,kA,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new JO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cD)),jO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new e_((...l)=>{const[c,d,p,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===zT)this.id=d,this.password=p;else if(c===eD)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[zT]="t",s[VA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[iD]=this.scriptTagHolder.uniqueCallbackIdentifier),s[CA]=Zg,this.transportSessionId&&(s[bA]=this.transportSessionId),this.lastSessionId&&(s[xA]=this.lastSessionId),this.applicationId&&(s[OA]=this.applicationId),this.appCheckToken&&(s[ig]=this.appCheckToken),typeof location<"u"&&location.hostname&&NA.test(location.hostname)&&(s[RA]=IA);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Mo.forceAllow_=!0}static forceDisallow(){Mo.forceDisallow_=!0}static isAvailable(){return Mo.forceAllow_?!0:!Mo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zO()&&!FO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=nn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=aA(t),a=AA(s,lD);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[oD]="t",s[MA]=e,s[LA]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=nn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class e_{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=LO(),window[tD+this.uniqueCallbackIdentifier]=e,window[nD+this.uniqueCallbackIdentifier]=t,this.myIFrame=e_.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){hn("frame writing exception"),d.stack&&hn(d.stack),hn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||hn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[MA]=this.myID,e[LA]=this.myPW,e[VA]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jA+s.length<=UA;){const c=this.pendingSegs.shift();s=s+"&"+sD+a+"="+c.seg+"&"+rD+a+"="+c.ts+"&"+aD+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(uD)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{hn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=16384,fD=45e3;let Af=null;typeof MozWebSocket<"u"?Af=MozWebSocket:typeof WebSocket<"u"&&(Af=WebSocket);class li{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=dc(this.connId),this.stats_=Jg(t),this.connURL=li.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[CA]=Zg,typeof location<"u"&&location.hostname&&NA.test(location.hostname)&&(c[RA]=IA),t&&(c[bA]=t),s&&(c[xA]=s),a&&(c[ig]=a),l&&(c[OA]=l),PA(e,DA,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_a.set("previous_websocket_failure",!0);try{let s;ox(),this.mySock=new Af(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){li.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Af!==null&&!li.forceDisallow_}static previouslyFailed(){return _a.isInMemoryStorage||_a.get("previous_websocket_failure")===!0}markConnectionHealthy(){_a.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Xu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ce(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=nn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=AA(t,hD);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(fD))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}li.responsesRequiredToBeHealthy=2;li.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{static get ALL_TRANSPORTS(){return[Mo,li]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=li&&li.isAvailable();let s=t&&!li.previouslyFailed();if(e.webSocketOnly&&(t||Vn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[li];else{const a=this.transports_=[];for(const l of Ju.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Ju.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ju.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD=6e4,pD=5e3,mD=10*1024,gD=100*1024,Pm="t",FT="d",_D="s",HT="r",yD="e",qT="o",GT="a",KT="n",$T="p",vD="h";class ED{constructor(e,t,s,a,l,c,d,p,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=dc("c:"+this.id+":"),this.transportManager_=new Ju(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Fu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>mD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pm in e){const t=e[Pm];t===GT?this.upgradeIfSecondaryHealthy_():t===HT?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===qT&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ru("t",e),s=Ru("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$T,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:GT,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:KT,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ru("t",e),s=Ru("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ru(Pm,e);if(FT in e){const s=e[FT];if(t===vD){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===KT){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===_D?this.onConnectionShutdown_(s):t===HT?this.onReset_(s):t===yD?ng("Server Error: "+s):t===qT?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ng("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Zg!==s&&Vn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Fu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(dD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(pD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$T,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_a.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.allowedEvents_=e,this.listeners_={},ce(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){ce(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf extends zA{static getInstance(){return new wf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$g()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ce(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=32,WT=768;class dt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function at(){return new dt("")}function qe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Tr(n){return n.pieces_.length-n.pieceNum_}function ft(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new dt(n.pieces_,e)}function FA(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function TD(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function HA(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function qA(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new dt(e,0)}function Yt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof dt)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new dt(t,0)}function je(n){return n.pieceNum_>=n.pieces_.length}function Zn(n,e){const t=qe(n),s=qe(e);if(t===null)return e;if(t===s)return Zn(ft(n),ft(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function GA(n,e){if(Tr(n)!==Tr(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ui(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Tr(n)>Tr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class SD{constructor(e,t){this.errorPrefix_=t,this.parts_=HA(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Qf(this.parts_[s]);KA(this)}}function AD(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Qf(e),KA(n)}function wD(n){const e=n.parts_.pop();n.byteLength_-=Qf(e),n.parts_.length>0&&(n.byteLength_-=1)}function KA(n){if(n.byteLength_>WT)throw new Error(n.errorPrefix_+"has a key path longer than "+WT+" bytes ("+n.byteLength_+").");if(n.parts_.length>YT)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+YT+") or object contains a cycle "+ma(n))}function ma(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_ extends zA{static getInstance(){return new t_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return ce(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=1e3,CD=60*5*1e3,QT=30*1e3,bD=1.3,RD=3e4,ID="server_kill",XT=3;class Cs extends BA{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Cs.nextPersistentConnectionId_++,this.log_=dc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Iu,this.maxReconnectDelay_=CD,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");t_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&wf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(nn(l)),ce(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new qg,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),ce(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ce(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;Cs.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ks(e,"w")){const s=qo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Vn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||mx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=QT)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=px(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),ce(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nn(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ng("Unrecognized action received from server: "+nn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ce(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Iu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Iu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>RD&&(this.reconnectDelay_=Iu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bD)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Cs.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(T){ce(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,S]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?hn("getToken() completed but was canceled"):(hn("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=S&&S.token,d=new ED(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,N=>{Vn(N+" ("+this.repoInfo_.toString()+")"),this.interrupt(ID)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Vn(T),p())}}}interrupt(e){hn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){hn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qm(this.interruptReasons_)&&(this.reconnectDelay_=Iu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>Xg(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new dt(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){hn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=XT&&(this.reconnectDelay_=QT,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){hn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=XT&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+vA.replace(/\./g,"-")]=1,$g()?e["framework.cordova"]=1:dA()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=wf.getInstance().currentlyOnline();return Qm(this.interruptReasons_)&&e}}Cs.nextPersistentConnectionId_=0;Cs.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ge(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Ge(Go,e),a=new Ge(Go,t);return this.compare(s,a)!==0}minPost(){return Ge.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xh;class $A extends Jf{static get __EMPTY_NODE(){return Xh}static set __EMPTY_NODE(e){Xh=e}compare(e,t){return al(e.name,t.name)}isDefinedOn(e){throw il("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ge.MIN}maxPost(){return new Ge(wa,Xh)}makePost(e,t){return ce(typeof e=="string","KeyIndex indexValue must always be a string."),new Ge(e,Xh)}toString(){return".key"}}const Uo=new $A;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zh=class{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Ln=class Lu{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Lu.RED,this.left=a??ki.EMPTY_NODE,this.right=l??ki.EMPTY_NODE}copy(e,t,s,a,l){return new Lu(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return ki.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ki.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Lu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Lu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Ln.RED=!0;Ln.BLACK=!1;class ND{copy(e,t,s,a,l){return this}insert(e,t,s){return new Ln(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let ki=class uf{constructor(e,t=uf.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new uf(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ln.BLACK,null,null))}remove(e){return new uf(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ln.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Zh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Zh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Zh(this.root_,null,this.comparator_,!0,e)}};ki.EMPTY_NODE=new ND;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xD(n,e){return al(n.name,e.name)}function n_(n,e){return al(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sg;function OD(n){sg=n}const YA=function(n){return typeof n=="number"?"number:"+wA(n):"string:"+n},WA=function(n){if(n.isLeafNode()){const e=n.val();ce(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ks(e,".sv"),"Priority must be a string or number.")}else ce(n===sg||n.isEmpty(),"priority of unexpected type.");ce(n===sg||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ZT;class Kt{static set __childrenNodeConstructor(e){ZT=e}static get __childrenNodeConstructor(){return ZT}constructor(e,t=Kt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ce(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),WA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Kt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Kt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return je(e)?this:qe(e)===".priority"?this.priorityNode_:Kt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Kt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=qe(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(ce(s!==".priority"||Tr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Kt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+YA(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=wA(this.value_):e+=this.value_,this.lazyHash_=TA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Kt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Kt.__childrenNodeConstructor?-1:(ce(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Kt.VALUE_TYPE_ORDER.indexOf(t),l=Kt.VALUE_TYPE_ORDER.indexOf(s);return ce(a>=0,"Unknown leaf type: "+t),ce(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Kt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QA,XA;function DD(n){QA=n}function kD(n){XA=n}class PD extends Jf{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?al(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ge.MIN}maxPost(){return new Ge(wa,new Kt("[PRIORITY-POST]",XA))}makePost(e,t){const s=QA(e);return new Ge(t,new Kt("[PRIORITY-POST]",s))}toString(){return".priority"}}const pn=new PD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=Math.log(2);class LD{constructor(e){const t=l=>parseInt(Math.log(l)/MD,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Cf=function(n,e,t,s){n.sort(e);const a=function(p,g){const y=g-p;let T,S;if(y===0)return null;if(y===1)return T=n[p],S=t?t(T):T,new Ln(S,T.node,Ln.BLACK,null,null);{const N=parseInt(y/2,10)+p,I=a(p,N),F=a(N+1,g);return T=n[N],S=t?t(T):T,new Ln(S,T.node,Ln.BLACK,I,F)}},l=function(p){let g=null,y=null,T=n.length;const S=function(I,F){const V=T-I,Y=T;T-=I;const ee=a(V+1,Y),Q=n[V],re=t?t(Q):Q;N(new Ln(re,Q.node,F,null,ee))},N=function(I){g?(g.left=I,g=I):(y=I,g=I)};for(let I=0;I<p.count;++I){const F=p.nextBitIsOne(),V=Math.pow(2,p.count-(I+1));F?S(V,Ln.BLACK):(S(V,Ln.BLACK),S(V,Ln.RED))}return y},c=new LD(n.length),d=l(c);return new ki(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mm;const No={};class Ts{static get Default(){return ce(No&&pn,"ChildrenNode.ts has not been loaded"),Mm=Mm||new Ts({".priority":No},{".priority":pn}),Mm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=qo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ki?t:null}hasIndex(e){return ks(this.indexSet_,e.toString())}addIndex(e,t){ce(e!==Uo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Ge.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=Cf(s,e.getCompare()):d=No;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const y=Object.assign({},this.indexes_);return y[p]=d,new Ts(y,g)}addToIndexes(e,t){const s=Tf(this.indexes_,(a,l)=>{const c=qo(this.indexSet_,l);if(ce(c,"Missing index implementation for "+l),a===No)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(Ge.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),Cf(d,c.getCompare())}else return No;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new Ge(e.name,d))),p.insert(e,e.node)}});return new Ts(s,this.indexSet_)}removeFromIndexes(e,t){const s=Tf(this.indexes_,a=>{if(a===No)return a;{const l=t.get(e.name);return l?a.remove(new Ge(e.name,l)):a}});return new Ts(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nu;class Xe{static get EMPTY_NODE(){return Nu||(Nu=new Xe(new ki(n_),null,Ts.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&WA(this.priorityNode_),this.children_.isEmpty()&&ce(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Nu}updatePriority(e){return this.children_.isEmpty()?this:new Xe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Nu:t}}getChild(e){const t=qe(e);return t===null?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ce(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Ge(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Nu:this.priorityNode_;return new Xe(a,c,l)}}updateChild(e,t){const s=qe(e);if(s===null)return t;{ce(qe(e)!==".priority"||Tr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(ft(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(pn,(c,d)=>{t[c]=d.val(e),s++,l&&Xe.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+YA(this.getPriority().val())+":"),this.forEachChild(pn,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":TA(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Ge(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ge(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ge(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Ge.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Ge.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mc?-1:0}withIndex(e){if(e===Uo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Xe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Uo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(pn),a=t.getIterator(pn);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Uo?null:this.indexMap_.get(e.toString())}}Xe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class VD extends Xe{constructor(){super(new ki(n_),Xe.EMPTY_NODE,Ts.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Xe.EMPTY_NODE}isEmpty(){return!1}}const mc=new VD;Object.defineProperties(Ge,{MIN:{value:new Ge(Go,Xe.EMPTY_NODE)},MAX:{value:new Ge(wa,mc)}});$A.__EMPTY_NODE=Xe.EMPTY_NODE;Kt.__childrenNodeConstructor=Xe;OD(mc);kD(mc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD=!0;function fn(n,e=null){if(n===null)return Xe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ce(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Kt(t,fn(e))}if(!(n instanceof Array)&&UD){const t=[];let s=!1;if(ei(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=fn(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new Ge(c,p)))}}),t.length===0)return Xe.EMPTY_NODE;const l=Cf(t,xD,c=>c.name,n_);if(s){const c=Cf(t,pn.getCompare());return new Xe(l,fn(e),new Ts({".priority":c},{".priority":pn}))}else return new Xe(l,fn(e),Ts.Default)}else{let t=Xe.EMPTY_NODE;return ei(n,(s,a)=>{if(ks(n,s)&&s.substring(0,1)!=="."){const l=fn(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(fn(e))}}DD(fn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD extends Jf{constructor(e){super(),this.indexPath_=e,ce(!je(e)&&qe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?al(e.name,t.name):l}makePost(e,t){const s=fn(e),a=Xe.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ge(t,a)}maxPost(){const e=Xe.EMPTY_NODE.updateChild(this.indexPath_,mc);return new Ge(wa,e)}toString(){return HA(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD extends Jf{compare(e,t){const s=e.node.compareTo(t.node);return s===0?al(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ge.MIN}maxPost(){return Ge.MAX}makePost(e,t){const s=fn(e);return new Ge(t,s)}toString(){return".value"}}const zD=new BD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FD(n){return{type:"value",snapshotNode:n}}function HD(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function qD(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function JT(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function GD(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ce(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ce(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Go}hasEnd(){return this.endSet_}getIndexEndValue(){return ce(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ce(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ce(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pn}copy(){const e=new i_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function e0(n){const e={};if(n.isDefault())return e;let t;if(n.index_===pn?t="$priority":n.index_===zD?t="$value":n.index_===Uo?t="$key":(ce(n.index_ instanceof jD,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=nn(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=nn(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+nn(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=nn(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+nn(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function t0(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==pn&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf extends BA{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ce(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=dc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=bf.getListenId_(e,s),d={};this.listens_[c]=d;const p=e0(e._queryParams);this.restRequest_(l+".json",p,(g,y)=>{let T=y;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),qo(this.listens_,c)===d){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",a(S,null)}})}unlisten(e,t){const s=bf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=e0(e._queryParams),s=e._path.toString(),a=new qg;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+rl(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=Xu(d.responseText)}catch{Vn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&Vn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(){this.rootNode_=Xe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(){return{value:null,children:new Map}}function ZA(n,e,t){if(je(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=qe(e);n.children.has(s)||n.children.set(s,Rf());const a=n.children.get(s);e=ft(e),ZA(a,e,t)}}function rg(n,e,t){n.value!==null?t(e,n.value):$D(n,(s,a)=>{const l=new dt(e.toString()+"/"+s);rg(a,l,t)})}function $D(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ei(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=10*1e3,WD=30*1e3,QD=5*60*1e3;class XD{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new YD(e);const s=n0+(WD-n0)*Math.random();Fu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ei(e,(a,l)=>{l>0&&ks(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Fu(this.reportStats_.bind(this),Math.floor(Math.random()*2*QD))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pi||(Pi={}));function JA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ew(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tw(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Pi.ACK_USER_WRITE,this.source=JA()}operationForChild(e){if(je(this.path)){if(this.affectedTree.value!=null)return ce(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new dt(e));return new If(at(),t,this.revert)}}else return ce(qe(this.path)===e,"operationForChild called for unrelated child."),new If(ft(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Pi.OVERWRITE}operationForChild(e){return je(this.path)?new Ca(this.source,at(),this.snap.getImmediateChild(e)):new Ca(this.source,ft(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Pi.MERGE}operationForChild(e){if(je(this.path)){const t=this.children.subtree(new dt(e));return t.isEmpty()?null:t.value?new Ca(this.source,at(),t.value):new ec(this.source,at(),t)}else return ce(qe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ec(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(je(e))return this.isFullyInitialized()&&!this.filtered_;const t=qe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function ZD(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(GD(c.childName,c.snapshotNode))}),xu(n,a,"child_removed",e,s,t),xu(n,a,"child_added",e,s,t),xu(n,a,"child_moved",l,s,t),xu(n,a,"child_changed",e,s,t),xu(n,a,"value",e,s,t),a}function xu(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>ek(n,d,p)),c.forEach(d=>{const p=JD(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,n.query_))})})}function JD(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function ek(n,e,t){if(e.childName==null||t.childName==null)throw il("Should only compare child_ events.");const s=new Ge(e.childName,e.snapshotNode),a=new Ge(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(n,e){return{eventCache:n,serverCache:e}}function Hu(n,e,t,s){return nw(new s_(e,t,s),n.serverCache)}function iw(n,e,t,s){return nw(n.eventCache,new s_(e,t,s))}function ag(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ba(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lm;const tk=()=>(Lm||(Lm=new ki(BO)),Lm);class ht{static fromObject(e){let t=new ht(null);return ei(e,(s,a)=>{t=t.set(new dt(s),a)}),t}constructor(e,t=tk()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:at(),value:this.value};if(je(e))return null;{const s=qe(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(ft(e),t);return l!=null?{path:Yt(new dt(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(je(e))return this;{const t=qe(e),s=this.children.get(t);return s!==null?s.subtree(ft(e)):new ht(null)}}set(e,t){if(je(e))return new ht(t,this.children);{const s=qe(e),l=(this.children.get(s)||new ht(null)).set(ft(e),t),c=this.children.insert(s,l);return new ht(this.value,c)}}remove(e){if(je(e))return this.children.isEmpty()?new ht(null):new ht(null,this.children);{const t=qe(e),s=this.children.get(t);if(s){const a=s.remove(ft(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new ht(null):new ht(this.value,l)}else return this}}get(e){if(je(e))return this.value;{const t=qe(e),s=this.children.get(t);return s?s.get(ft(e)):null}}setTree(e,t){if(je(e))return t;{const s=qe(e),l=(this.children.get(s)||new ht(null)).setTree(ft(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new ht(this.value,c)}}fold(e){return this.fold_(at(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Yt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,at(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(je(e))return null;{const l=qe(e),c=this.children.get(l);return c?c.findOnPath_(ft(e),Yt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,at(),t)}foreachOnPath_(e,t,s){if(je(e))return this;{this.value&&s(t,this.value);const a=qe(e),l=this.children.get(a);return l?l.foreachOnPath_(ft(e),Yt(t,a),s):new ht(null)}}foreach(e){this.foreach_(at(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Yt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.writeTree_=e}static empty(){return new fi(new ht(null))}}function qu(n,e,t){if(je(e))return new fi(new ht(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=Zn(a,e);return l=l.updateChild(c,t),new fi(n.writeTree_.set(a,l))}else{const a=new ht(t),l=n.writeTree_.setTree(e,a);return new fi(l)}}}function i0(n,e,t){let s=n;return ei(t,(a,l)=>{s=qu(s,Yt(e,a),l)}),s}function s0(n,e){if(je(e))return fi.empty();{const t=n.writeTree_.setTree(e,new ht(null));return new fi(t)}}function og(n,e){return xa(n,e)!=null}function xa(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Zn(t.path,e)):null}function r0(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(pn,(s,a)=>{e.push(new Ge(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Ge(s,a.value))}),e}function _r(n,e){if(je(e))return n;{const t=xa(n,e);return t!=null?new fi(new ht(t)):new fi(n.writeTree_.subtree(e))}}function lg(n){return n.writeTree_.isEmpty()}function Ko(n,e){return sw(at(),n.writeTree_,e)}function sw(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(ce(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=sw(Yt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Yt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(n,e){return cw(e,n)}function nk(n,e,t,s,a){ce(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=qu(n.visibleWrites,e,t)),n.lastWriteId=s}function ik(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function sk(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ce(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&rk(d,s.path)?a=!1:ui(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return ak(n),!0;if(s.snap)n.visibleWrites=s0(n.visibleWrites,s.path);else{const d=s.children;ei(d,p=>{n.visibleWrites=s0(n.visibleWrites,Yt(s.path,p))})}return!0}else return!1}function rk(n,e){if(n.snap)return ui(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ui(Yt(n.path,t),e))return!0;return!1}function ak(n){n.visibleWrites=aw(n.allWrites,ok,at()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function ok(n){return n.visible}function aw(n,e,t){let s=fi.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)ui(t,c)?(d=Zn(t,c),s=qu(s,d,l.snap)):ui(c,t)&&(d=Zn(c,t),s=qu(s,at(),l.snap.getChild(d)));else if(l.children){if(ui(t,c))d=Zn(t,c),s=i0(s,d,l.children);else if(ui(c,t))if(d=Zn(c,t),je(d))s=i0(s,at(),l.children);else{const p=qo(l.children,qe(d));if(p){const g=p.getChild(ft(d));s=qu(s,at(),g)}}}else throw il("WriteRecord should have .snap or .children")}}return s}function ow(n,e,t,s,a){if(!s&&!a){const l=xa(n.visibleWrites,e);if(l!=null)return l;{const c=_r(n.visibleWrites,e);if(lg(c))return t;if(t==null&&!og(c,at()))return null;{const d=t||Xe.EMPTY_NODE;return Ko(c,d)}}}else{const l=_r(n.visibleWrites,e);if(!a&&lg(l))return t;if(!a&&t==null&&!og(l,at()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(ui(g.path,e)||ui(e,g.path))},d=aw(n.allWrites,c,e),p=t||Xe.EMPTY_NODE;return Ko(d,p)}}}function lk(n,e,t){let s=Xe.EMPTY_NODE;const a=xa(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(pn,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=_r(n.visibleWrites,e);return t.forEachChild(pn,(c,d)=>{const p=Ko(_r(l,new dt(c)),d);s=s.updateImmediateChild(c,p)}),r0(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=_r(n.visibleWrites,e);return r0(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function uk(n,e,t,s,a){ce(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Yt(e,t);if(og(n.visibleWrites,l))return null;{const c=_r(n.visibleWrites,l);return lg(c)?a.getChild(t):Ko(c,a.getChild(t))}}function ck(n,e,t,s){const a=Yt(e,t),l=xa(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=_r(n.visibleWrites,a);return Ko(c,s.getNode().getImmediateChild(t))}else return null}function hk(n,e){return xa(n.visibleWrites,e)}function fk(n,e,t,s,a,l,c){let d;const p=_r(n.visibleWrites,e),g=xa(p,at());if(g!=null)d=g;else if(t!=null)d=Ko(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],T=c.getCompare(),S=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let N=S.getNext();for(;N&&y.length<a;)T(N,s)!==0&&y.push(N),N=S.getNext();return y}else return[]}function dk(){return{visibleWrites:fi.empty(),allWrites:[],lastWriteId:-1}}function ug(n,e,t,s){return ow(n.writeTree,n.treePath,e,t,s)}function lw(n,e){return lk(n.writeTree,n.treePath,e)}function a0(n,e,t,s){return uk(n.writeTree,n.treePath,e,t,s)}function Nf(n,e){return hk(n.writeTree,Yt(n.treePath,e))}function pk(n,e,t,s,a,l){return fk(n.writeTree,n.treePath,e,t,s,a,l)}function r_(n,e,t){return ck(n.writeTree,n.treePath,e,t)}function uw(n,e){return cw(Yt(n.treePath,e),n.writeTree)}function cw(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;ce(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ce(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,JT(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,qD(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,HD(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,JT(s,e.snapshotNode,a.oldSnap));else throw il("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const hw=new gk;class a_{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new s_(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return r_(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ba(this.viewCache_),l=pk(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function _k(n,e){ce(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ce(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function yk(n,e,t,s,a){const l=new mk;let c,d;if(t.type===Pi.OVERWRITE){const g=t;g.source.fromUser?c=cg(n,e,g.path,g.snap,s,a,l):(ce(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!je(g.path),c=xf(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===Pi.MERGE){const g=t;g.source.fromUser?c=Ek(n,e,g.path,g.children,s,a,l):(ce(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=hg(n,e,g.path,g.children,s,a,d,l))}else if(t.type===Pi.ACK_USER_WRITE){const g=t;g.revert?c=Ak(n,e,g.path,s,a,l):c=Tk(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Pi.LISTEN_COMPLETE)c=Sk(n,e,t.path,s,l);else throw il("Unknown operation type: "+t.type);const p=l.getChanges();return vk(e,c,p),{viewCache:c,changes:p}}function vk(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=ag(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(FD(ag(e)))}}function fw(n,e,t,s,a,l){const c=e.eventCache;if(Nf(s,t)!=null)return e;{let d,p;if(je(t))if(ce(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=ba(e),y=g instanceof Xe?g:Xe.EMPTY_NODE,T=lw(s,y);d=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=ug(s,ba(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=qe(t);if(g===".priority"){ce(Tr(t)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const T=a0(s,t,y,p);T!=null?d=n.filter.updatePriority(y,T):d=c.getNode()}else{const y=ft(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const S=a0(s,t,c.getNode(),p);S!=null?T=c.getNode().getImmediateChild(g).updateChild(y,S):T=c.getNode().getImmediateChild(g)}else T=r_(s,g,e.serverCache);T!=null?d=n.filter.updateChild(c.getNode(),g,T,y,a,l):d=c.getNode()}}return Hu(e,d,c.isFullyInitialized()||je(t),n.filter.filtersNodes())}}function xf(n,e,t,s,a,l,c,d){const p=e.serverCache;let g;const y=c?n.filter:n.filter.getIndexedFilter();if(je(t))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const N=p.getNode().updateChild(t,s);g=y.updateFullNode(p.getNode(),N,null)}else{const N=qe(t);if(!p.isCompleteForPath(t)&&Tr(t)>1)return e;const I=ft(t),V=p.getNode().getImmediateChild(N).updateChild(I,s);N===".priority"?g=y.updatePriority(p.getNode(),V):g=y.updateChild(p.getNode(),N,V,I,hw,null)}const T=iw(e,g,p.isFullyInitialized()||je(t),y.filtersNodes()),S=new a_(a,T,l);return fw(n,T,t,a,S,d)}function cg(n,e,t,s,a,l,c){const d=e.eventCache;let p,g;const y=new a_(a,e,l);if(je(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=Hu(e,g,!0,n.filter.filtersNodes());else{const T=qe(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=Hu(e,g,d.isFullyInitialized(),d.isFiltered());else{const S=ft(t),N=d.getNode().getImmediateChild(T);let I;if(je(S))I=s;else{const F=y.getCompleteChild(T);F!=null?FA(S)===".priority"&&F.getChild(qA(S)).isEmpty()?I=F:I=F.updateChild(S,s):I=Xe.EMPTY_NODE}if(N.equals(I))p=e;else{const F=n.filter.updateChild(d.getNode(),T,I,S,y,c);p=Hu(e,F,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function o0(n,e){return n.eventCache.isCompleteForChild(e)}function Ek(n,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const y=Yt(t,p);o0(e,qe(y))&&(d=cg(n,d,y,g,a,l,c))}),s.foreach((p,g)=>{const y=Yt(t,p);o0(e,qe(y))||(d=cg(n,d,y,g,a,l,c))}),d}function l0(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function hg(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;je(t)?g=s:g=new ht(null).setTree(t,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((T,S)=>{if(y.hasChild(T)){const N=e.serverCache.getNode().getImmediateChild(T),I=l0(n,N,S);p=xf(n,p,new dt(T),I,a,l,c,d)}}),g.children.inorderTraversal((T,S)=>{const N=!e.serverCache.isCompleteForChild(T)&&S.value===null;if(!y.hasChild(T)&&!N){const I=e.serverCache.getNode().getImmediateChild(T),F=l0(n,I,S);p=xf(n,p,new dt(T),F,a,l,c,d)}}),p}function Tk(n,e,t,s,a,l,c){if(Nf(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(je(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return xf(n,e,t,p.getNode().getChild(t),a,l,d,c);if(je(t)){let g=new ht(null);return p.getNode().forEachChild(Uo,(y,T)=>{g=g.set(new dt(y),T)}),hg(n,e,t,g,a,l,d,c)}else return e}else{let g=new ht(null);return s.foreach((y,T)=>{const S=Yt(t,y);p.isCompleteForPath(S)&&(g=g.set(y,p.getNode().getChild(S)))}),hg(n,e,t,g,a,l,d,c)}}function Sk(n,e,t,s,a){const l=e.serverCache,c=iw(e,l.getNode(),l.isFullyInitialized()||je(t),l.isFiltered());return fw(n,c,t,s,hw,a)}function Ak(n,e,t,s,a,l){let c;if(Nf(s,t)!=null)return e;{const d=new a_(s,e,a),p=e.eventCache.getNode();let g;if(je(t)||qe(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=ug(s,ba(e));else{const T=e.serverCache.getNode();ce(T instanceof Xe,"serverChildren would be complete if leaf node"),y=lw(s,T)}y=y,g=n.filter.updateFullNode(p,y,l)}else{const y=qe(t);let T=r_(s,y,e.serverCache);T==null&&e.serverCache.isCompleteForChild(y)&&(T=p.getImmediateChild(y)),T!=null?g=n.filter.updateChild(p,y,T,ft(t),d,l):e.eventCache.getNode().hasChild(y)?g=n.filter.updateChild(p,y,Xe.EMPTY_NODE,ft(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=ug(s,ba(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||Nf(s,at())!=null,Hu(e,g,c,n.filter.filtersNodes())}}function wk(n,e){const t=ba(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!je(e)&&!t.getImmediateChild(qe(e)).isEmpty())?t.getChild(e):null}function u0(n,e,t,s){e.type===Pi.MERGE&&e.source.queryId!==null&&(ce(ba(n.viewCache_),"We should always have a full cache before handling merges"),ce(ag(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=yk(n.processor_,a,e,t,s);return _k(n.processor_,l.viewCache),ce(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,Ck(n,l.changes,l.viewCache.eventCache.getNode())}function Ck(n,e,t,s){const a=n.eventRegistrations_;return ZD(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let c0;function bk(n){ce(!c0,"__referenceConstructor has already been defined"),c0=n}function o_(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return ce(l!=null,"SyncTree gave us an op for an invalid query."),u0(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(u0(c,e,t,s));return l}}function l_(n,e){let t=null;for(const s of n.views.values())t=t||wk(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h0;function Rk(n){ce(!h0,"__referenceConstructor has already been defined"),h0=n}class f0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ht(null),this.pendingWriteTree_=dk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ik(n,e,t,s,a){return nk(n.pendingWriteTree_,e,t,s,a),a?td(n,new Ca(JA(),e,t)):[]}function Lo(n,e,t=!1){const s=ik(n.pendingWriteTree_,e);if(sk(n.pendingWriteTree_,e)){let l=new ht(null);return s.snap!=null?l=l.set(at(),!0):ei(s.children,c=>{l=l.set(new dt(c),!0)}),td(n,new If(s.path,l,t))}else return[]}function ed(n,e,t){return td(n,new Ca(ew(),e,t))}function Nk(n,e,t){const s=ht.fromObject(t);return td(n,new ec(ew(),e,s))}function xk(n,e,t,s){const a=gw(n,s);if(a!=null){const l=_w(a),c=l.path,d=l.queryId,p=Zn(c,e),g=new Ca(tw(d),p,t);return yw(n,c,g)}else return[]}function Ok(n,e,t,s){const a=gw(n,s);if(a){const l=_w(a),c=l.path,d=l.queryId,p=Zn(c,e),g=ht.fromObject(t),y=new ec(tw(d),p,g);return yw(n,c,y)}else return[]}function dw(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=Zn(c,e),g=l_(d,p);if(g)return g});return ow(a,e,l,t,!0)}function td(n,e){return pw(e,n.syncPointTree_,null,rw(n.pendingWriteTree_,at()))}function pw(n,e,t,s){if(je(n.path))return mw(n,e,t,s);{const a=e.get(at());t==null&&a!=null&&(t=l_(a,at()));let l=[];const c=qe(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,y=uw(s,c);l=l.concat(pw(d,p,g,y))}return a&&(l=l.concat(o_(a,n,s,t))),l}}function mw(n,e,t,s){const a=e.get(at());t==null&&a!=null&&(t=l_(a,at()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=uw(s,c),y=n.operationForChild(c);y&&(l=l.concat(mw(y,d,p,g)))}),a&&(l=l.concat(o_(a,n,s,t))),l}function gw(n,e){return n.tagToQueryMap.get(e)}function _w(n){const e=n.indexOf("$");return ce(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new dt(n.substr(0,e))}}function yw(n,e,t){const s=n.syncPointTree_.get(e);ce(s,"Missing sync point for query tag that we're tracking");const a=rw(n.pendingWriteTree_,e);return o_(s,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new u_(t)}node(){return this.node_}}class c_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Yt(this.path_,e);return new c_(this.syncTree_,t)}node(){return dw(this.syncTree_,this.path_)}}const Dk=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},d0=function(n,e,t){if(!n||typeof n!="object")return n;if(ce(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return kk(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Pk(n[".sv"],e);ce(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},kk=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ce(!1,"Unexpected server value: "+n)}},Pk=function(n,e,t){n.hasOwnProperty("increment")||ce(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&ce(!1,"Unexpected increment value: "+s);const a=e.node();if(ce(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},Mk=function(n,e,t,s){return h_(e,new c_(t,n),s)},Lk=function(n,e,t){return h_(n,new u_(e),t)};function h_(n,e,t){const s=n.getPriority().val(),a=d0(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=d0(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Kt(d,fn(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Kt(a))),c.forEachChild(pn,(d,p)=>{const g=h_(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function d_(n,e){let t=e instanceof dt?e:new dt(e),s=n,a=qe(t);for(;a!==null;){const l=qo(s.node.children,a)||{children:{},childCount:0};s=new f_(a,s,l),t=ft(t),a=qe(t)}return s}function ol(n){return n.node.value}function vw(n,e){n.node.value=e,fg(n)}function Ew(n){return n.node.childCount>0}function Vk(n){return ol(n)===void 0&&!Ew(n)}function nd(n,e){ei(n.node.children,(t,s)=>{e(new f_(t,n,s))})}function Tw(n,e,t,s){t&&e(n),nd(n,a=>{Tw(a,e,!0)})}function Uk(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function gc(n){return new dt(n.parent===null?n.name:gc(n.parent)+"/"+n.name)}function fg(n){n.parent!==null&&jk(n.parent,n.name,n)}function jk(n,e,t){const s=Vk(t),a=ks(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,fg(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,fg(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=/[\[\].#$\/\u0000-\u001F\u007F]/,zk=/[\[\].#$\u0000-\u001F\u007F]/,Vm=10*1024*1024,Sw=function(n){return typeof n=="string"&&n.length!==0&&!Bk.test(n)},Fk=function(n){return typeof n=="string"&&n.length!==0&&!zk.test(n)},Hk=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Fk(n)},Aw=function(n,e,t){const s=t instanceof dt?new SD(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ma(s));if(typeof e=="function")throw new Error(n+"contains a function "+ma(s)+" with contents = "+e.toString());if(SA(e))throw new Error(n+"contains "+e.toString()+" "+ma(s));if(typeof e=="string"&&e.length>Vm/3&&Qf(e)>Vm)throw new Error(n+"contains a string greater than "+Vm+" utf8 bytes "+ma(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(ei(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!Sw(c)))throw new Error(n+" contains an invalid key ("+c+") "+ma(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);AD(s,c),Aw(n,d,s),wD(s)}),a&&l)throw new Error(n+' contains ".value" child '+ma(s)+" in addition to actual children.")}},qk=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Sw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Hk(t))throw new Error(Ex(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Kk(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!GA(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function Oa(n,e,t){Kk(n,t),$k(n,s=>ui(s,e)||ui(e,s))}function $k(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(Yk(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Yk(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();zu&&hn("event: "+t.toString()),pc(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="repo_interrupt",Qk=25;class Xk{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Gk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Rf(),this.transactionQueueTree_=new f_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Zk(n,e,t){if(n.stats_=Jg(n.repoInfo_),n.forceRestClient_||KO())n.server_=new bf(n.repoInfo_,(s,a,l,c)=>{p0(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>m0(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nn(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Cs(n.repoInfo_,e,(s,a,l,c)=>{p0(n,s,a,l,c)},s=>{m0(n,s)},s=>{e2(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=ZO(n.repoInfo_,()=>new XD(n.stats_,n.server_)),n.infoData_=new KD,n.infoSyncTree_=new f0({startListening:(s,a,l,c)=>{let d=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(d=ed(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),p_(n,"connected",!1),n.serverSyncTree_=new f0({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);Oa(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function Jk(n){const t=n.infoData_.getNode(new dt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ww(n){return Dk({timestamp:Jk(n)})}function p0(n,e,t,s,a){n.dataUpdateCount++;const l=new dt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=Tf(t,g=>fn(g));c=Ok(n.serverSyncTree_,l,p,a)}else{const p=fn(t);c=xk(n.serverSyncTree_,l,p,a)}else if(s){const p=Tf(t,g=>fn(g));c=Nk(n.serverSyncTree_,l,p)}else{const p=fn(t);c=ed(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=g_(n,l)),Oa(n.eventQueue_,d,c)}function m0(n,e){p_(n,"connected",e),e===!1&&n2(n)}function e2(n,e){ei(e,(t,s)=>{p_(n,t,s)})}function p_(n,e,t){const s=new dt("/.info/"+e),a=fn(t);n.infoData_.updateSnapshot(s,a);const l=ed(n.infoSyncTree_,s,a);Oa(n.eventQueue_,s,l)}function t2(n){return n.nextWriteId_++}function n2(n){Cw(n,"onDisconnectEvents");const e=ww(n),t=Rf();rg(n.onDisconnect_,at(),(a,l)=>{const c=Mk(a,l,n.serverSyncTree_,e);ZA(t,a,c)});let s=[];rg(t,at(),(a,l)=>{s=s.concat(ed(n.serverSyncTree_,a,l));const c=a2(n,a);g_(n,c)}),n.onDisconnect_=Rf(),Oa(n.eventQueue_,at(),s)}function i2(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Wk)}function Cw(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),hn(t,...e)}function bw(n,e,t){return dw(n.serverSyncTree_,e,t)||Xe.EMPTY_NODE}function m_(n,e=n.transactionQueueTree_){if(e||id(n,e),ol(e)){const t=Iw(n,e);ce(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&s2(n,gc(e),t)}else Ew(e)&&nd(e,t=>{m_(n,t)})}function s2(n,e,t){const s=t.map(g=>g.currentWriteId),a=bw(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const y=t[g];ce(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const T=Zn(e,y.path);l=l.updateChild(T,y.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,g=>{Cw(n,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const T=[];for(let S=0;S<t.length;S++)t[S].status=2,y=y.concat(Lo(n.serverSyncTree_,t[S].currentWriteId)),t[S].onComplete&&T.push(()=>t[S].onComplete(null,!0,t[S].currentOutputSnapshotResolved)),t[S].unwatcher();id(n,d_(n.transactionQueueTree_,e)),m_(n,n.transactionQueueTree_),Oa(n.eventQueue_,e,y);for(let S=0;S<T.length;S++)pc(T[S])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Vn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}g_(n,e)}},c)}function g_(n,e){const t=Rw(n,e),s=gc(t),a=Iw(n,t);return r2(n,a,s),s}function r2(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=Zn(t,p.path);let y=!1,T;if(ce(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,T=p.abortReason,a=a.concat(Lo(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=Qk)y=!0,T="maxretry",a=a.concat(Lo(n.serverSyncTree_,p.currentWriteId,!0));else{const S=bw(n,p.path,c);p.currentInputSnapshot=S;const N=e[d].update(S.val());if(N!==void 0){Aw("transaction failed: Data returned ",N,p.path);let I=fn(N);typeof N=="object"&&N!=null&&ks(N,".priority")||(I=I.updatePriority(S.getPriority()));const V=p.currentWriteId,Y=ww(n),ee=Lk(I,S,Y);p.currentOutputSnapshotRaw=I,p.currentOutputSnapshotResolved=ee,p.currentWriteId=t2(n),c.splice(c.indexOf(V),1),a=a.concat(Ik(n.serverSyncTree_,p.path,ee,p.currentWriteId,p.applyLocally)),a=a.concat(Lo(n.serverSyncTree_,V,!0))}else y=!0,T="nodata",a=a.concat(Lo(n.serverSyncTree_,p.currentWriteId,!0))}Oa(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,function(S){setTimeout(S,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}id(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)pc(s[d]);m_(n,n.transactionQueueTree_)}function Rw(n,e){let t,s=n.transactionQueueTree_;for(t=qe(e);t!==null&&ol(s)===void 0;)s=d_(s,t),e=ft(e),t=qe(e);return s}function Iw(n,e){const t=[];return Nw(n,e,t),t.sort((s,a)=>s.order-a.order),t}function Nw(n,e,t){const s=ol(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);nd(e,a=>{Nw(n,a,t)})}function id(n,e){const t=ol(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,vw(e,t.length>0?t:void 0)}nd(e,s=>{id(n,s)})}function a2(n,e){const t=gc(Rw(n,e)),s=d_(n.transactionQueueTree_,e);return Uk(s,a=>{Um(n,a)}),Um(n,s),Tw(s,a=>{Um(n,a)}),t}function Um(n,e){const t=ol(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(ce(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(ce(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Lo(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?vw(e,void 0):t.length=l+1,Oa(n.eventQueue_,gc(e),a);for(let c=0;c<s.length;c++)pc(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function l2(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Vn(`Invalid query segment '${t}' in query '${n}'`)}return e}const g0=function(n,e){const t=u2(n),s=t.namespace;t.domain==="firebase.com"&&Aa(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Aa("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||UO();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new WO(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new dt(t.pathString)}},u2=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let y=n.indexOf("/");y===-1&&(y=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(y,T)),y<T&&(a=o2(n.substring(y,T)));const S=l2(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const N=e.slice(0,g);if(N.toLowerCase()==="localhost")t="localhost";else if(N.split(".").length<=2)t=N;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),t=e.substring(I+1),l=s}"ns"in S&&(l=S.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return je(this._path)?null:FA(this._path)}get ref(){return new ll(this._repo,this._path)}get _queryIdentifier(){const e=t0(this._queryParams),t=Xg(e);return t==="{}"?"default":t}get _queryObject(){return t0(this._queryParams)}isEqual(e){if(e=Hi(e),!(e instanceof __))return!1;const t=this._repo===e._repo,s=GA(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+TD(this._path)}}class ll extends __{constructor(e,t){super(e,t,new i_,!1)}get parent(){const e=qA(this._path);return e===null?null:new ll(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}bk(ll);Rk(ll);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2="FIREBASE_DATABASE_EMULATOR_HOST",dg={};let h2=!1;function f2(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Aa("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),hn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=g0(l,a),d=c.repoInfo,p;typeof process<"u"&&LT&&(p=LT[c2]),p?(l=`http://${p}?ns=${d.namespace}`,c=g0(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new YO(n.name,n.options,e);qk("Invalid Firebase Database URL",c),je(c.path)||Aa("Database URL must point to the root of a Firebase Database (not including a child path).");const y=p2(d,n,g,new $O(n,t));return new m2(y,n)}function d2(n,e){const t=dg[e];(!t||t[n.key]!==n)&&Aa(`Database ${e}(${n.repoInfo_}) has already been deleted.`),i2(n),delete t[n.key]}function p2(n,e,t,s){let a=dg[e.name];a||(a={},dg[e.name]=a);let l=a[n.toURLString()];return l&&Aa("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new Xk(n,h2,t,s),a[n.toURLString()]=l,l}class m2{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Zk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ll(this._repo,at())),this._rootInternal}_delete(){return this._rootInternal!==null&&(d2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Aa("Cannot call "+e+" on a deleted database.")}}/**
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
 */function g2(n){DO(Ir),Er(new Is("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return f2(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Jn(VT,UT,n),Jn(VT,UT,"esm2017")}Cs.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Cs.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};g2();function y_(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(n);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(n,s[a])&&(t[s[a]]=n[s[a]]);return t}function xw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _2=xw,Ow=new hc("auth","Firebase",xw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=new Xf("@firebase/auth");function y2(n,...e){Of.logLevel<=Ve.WARN&&Of.warn(`Auth (${Ir}): ${n}`,...e)}function cf(n,...e){Of.logLevel<=Ve.ERROR&&Of.error(`Auth (${Ir}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n,...e){throw E_(n,...e)}function di(n,...e){return E_(n,...e)}function v_(n,e,t){const s=Object.assign(Object.assign({},_2()),{[e]:t});return new hc("auth","Firebase",s).create(e,{appName:n.name})}function yr(n){return v_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function v2(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&ti(n,"argument-error"),v_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function E_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Ow.create(n,...e)}function Ce(n,e,...t){if(!n)throw E_(e,...t)}function Ss(n){const e="INTERNAL ASSERTION FAILED: "+n;throw cf(e),new Error(e)}function xs(n,e){n||Ss(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function E2(){return _0()==="http:"||_0()==="https:"}function _0(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E2()||rx()||"connection"in navigator)?navigator.onLine:!0}function S2(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t){this.shortDelay=e,this.longDelay=t,xs(t>e,"Short delay should be less than long delay!"),this.isMobile=$g()||dA()}get(){return T2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(n,e){xs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ss("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ss("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ss("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],C2=new _c(3e4,6e4);function Da(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Nr(n,e,t,s,a={}){return kw(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=rl(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:p},l);return sx()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&sl(n.emulatorConfig.host)&&(g.credentials="include"),Dw.fetch()(await Pw(n,n.config.apiHost,t,d),g)})}async function kw(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},A2),e);try{const a=new R2(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Jh(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jh(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Jh(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Jh(n,"user-disabled",c);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw v_(n,y,g);ti(n,y)}}catch(a){if(a instanceof Fi)throw a;ti(n,"network-request-failed",{message:String(a)})}}async function sd(n,e,t,s,a={}){const l=await Nr(n,e,t,s,a);return"mfaPendingCredential"in l&&ti(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Pw(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?T_(n.config,a):`${n.config.apiScheme}://${a}`;return w2.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function b2(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class R2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(di(this.auth,"network-request-failed")),C2.get())})}}function Jh(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=di(n,e,s);return a.customData._tokenResponse=t,a}function y0(n){return n!==void 0&&n.enterprise!==void 0}class I2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return b2(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function N2(n,e){return Nr(n,"GET","/v2/recaptchaConfig",Da(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x2(n,e){return Nr(n,"POST","/v1/accounts:delete",e)}async function Df(n,e){return Nr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function O2(n,e=!1){const t=Hi(n),s=await t.getIdToken(e),a=S_(s);Ce(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:s,authTime:Gu(jm(a.auth_time)),issuedAtTime:Gu(jm(a.iat)),expirationTime:Gu(jm(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function jm(n){return Number(n)*1e3}function S_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return cf("JWT malformed, contained fewer than 3 sections"),null;try{const a=Ef(t);return a?JSON.parse(a):(cf("Failed to decode base64 JWT payload"),null)}catch(a){return cf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function v0(n){const e=S_(n);return Ce(e,"internal-error"),Ce(typeof e.exp<"u","internal-error"),Ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tc(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Fi&&D2(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function D2({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gu(this.lastLoginAt),this.creationTime=Gu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function kf(n){var e;const t=n.auth,s=await n.getIdToken(),a=await tc(n,Df(t,{idToken:s}));Ce(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Mw(l.providerUserInfo):[],d=M2(n.providerData,c),p=n.isAnonymous,g=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),y=p?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new mg(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(n,T)}async function P2(n){const e=Hi(n);await kf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function M2(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function Mw(n){return n.map(e=>{var{providerId:t}=e,s=y_(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(n,e){const t=await kw(n,{},async()=>{const s=rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await Pw(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Dw.fetch()(c,{method:"POST",headers:d,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function V2(n,e){return Nr(n,"POST","/v2/accounts:revokeToken",Da(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ce(e.idToken,"internal-error"),Ce(typeof e.idToken<"u","internal-error"),Ce(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):v0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ce(e.length!==0,"internal-error");const t=v0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await L2(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new jo;return s&&(Ce(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Ce(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ce(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jo,this.toJSON())}_performRefresh(){return Ss("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(n,e){Ce(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ci{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=y_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new k2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new mg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await tc(this,this.stsTokenManager.getToken(this.auth,e));return Ce(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return O2(this,e)}reload(){return P2(this)}_assign(e){this!==e&&(Ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ci(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await kf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(yr(this.auth));const e=await this.getIdToken();return await tc(this,x2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,c,d,p,g,y;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,N=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,I=(c=t.photoURL)!==null&&c!==void 0?c:void 0,F=(d=t.tenantId)!==null&&d!==void 0?d:void 0,V=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,Y=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ee=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:Q,emailVerified:re,isAnonymous:se,providerData:fe,stsTokenManager:D}=t;Ce(Q&&D,e,"internal-error");const R=jo.fromJSON(this.name,D);Ce(typeof Q=="string",e,"internal-error"),ur(T,e.name),ur(S,e.name),Ce(typeof re=="boolean",e,"internal-error"),Ce(typeof se=="boolean",e,"internal-error"),ur(N,e.name),ur(I,e.name),ur(F,e.name),ur(V,e.name),ur(Y,e.name),ur(ee,e.name);const x=new ci({uid:Q,auth:e,email:S,emailVerified:re,displayName:T,isAnonymous:se,photoURL:I,phoneNumber:N,tenantId:F,stsTokenManager:R,createdAt:Y,lastLoginAt:ee});return fe&&Array.isArray(fe)&&(x.providerData=fe.map(P=>Object.assign({},P))),V&&(x._redirectEventId=V),x}static async _fromIdTokenResponse(e,t,s=!1){const a=new jo;a.updateFromServerResponse(t);const l=new ci({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await kf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ce(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?Mw(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new jo;d.updateFromIdToken(s);const p=new ci({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new mg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=new Map;function As(n){xs(n instanceof Function,"Expected a class definition");let e=E0.get(n);return e?(xs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,E0.set(n,e),e)}/**
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
 */class Lw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Lw.type="NONE";const T0=Lw;/**
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
 */function hf(n,e,t){return`firebase:${n}:${e}:${t}`}class Bo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=hf(this.userKey,a.apiKey,l),this.fullPersistenceKey=hf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Df(this.auth,{idToken:e}).catch(()=>{});return t?ci._fromGetAccountInfoResponse(this.auth,t,e):null}return ci._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Bo(As(T0),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||As(T0);const c=hf(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(c);if(y){let T;if(typeof y=="string"){const S=await Df(e,{idToken:y}).catch(()=>{});if(!S)break;T=await ci._fromGetAccountInfoResponse(e,S,y)}else T=ci._fromJSON(e,y);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Bo(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Bo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fw(e))return"Blackberry";if(Hw(e))return"Webos";if(Uw(e))return"Safari";if((e.includes("chrome/")||jw(e))&&!e.includes("edge/"))return"Chrome";if(zw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Vw(n=mn()){return/firefox\//i.test(n)}function Uw(n=mn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jw(n=mn()){return/crios\//i.test(n)}function Bw(n=mn()){return/iemobile/i.test(n)}function zw(n=mn()){return/android/i.test(n)}function Fw(n=mn()){return/blackberry/i.test(n)}function Hw(n=mn()){return/webos/i.test(n)}function A_(n=mn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function U2(n=mn()){var e;return A_(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function j2(){return ax()&&document.documentMode===10}function qw(n=mn()){return A_(n)||zw(n)||Hw(n)||Fw(n)||/windows phone/i.test(n)||Bw(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(n,e=[]){let t;switch(n){case"Browser":t=S0(mn());break;case"Worker":t=`${S0(mn())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ir}/${s}`}/**
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
 */class B2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function z2(n,e={}){return Nr(n,"GET","/v2/passwordPolicy",Da(n,e))}/**
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
 */const F2=6;class H2{constructor(e){var t,s,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:F2,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new A0(this),this.idTokenSubscription=new A0(this),this.beforeStateQueue=new B2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ow,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=As(t)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await Bo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Df(this,{idToken:e}),s=await ci._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Cn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await kf(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject(yr(this));const t=e?Hi(e):null;return t&&Ce(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject(yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(As(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await z2(this),t=new H2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new hc("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await V2(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&As(e)||this._popupRedirectResolver;Ce(t,this,"argument-error"),this.redirectPersistenceManager=await Bo.create(this,[As(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ce(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(Cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&y2(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ka(n){return Hi(n)}class A0{constructor(e){this.auth=e,this.observer=null,this.addObserver=_x(t=>this.observer=t)}get next(){return Ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function G2(n){rd=n}function Kw(n){return rd.loadJS(n)}function K2(){return rd.recaptchaEnterpriseScript}function $2(){return rd.gapiScript}function Y2(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class W2{constructor(){this.enterprise=new Q2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Q2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const X2="recaptcha-enterprise",$w="NO_RECAPTCHA";class Z2{constructor(e){this.type=X2,this.auth=ka(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{N2(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new I2(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;y0(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c($w)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new W2().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(d=>{if(!t&&y0(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=K2();p.length!==0&&(p+=d),Kw(p).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function w0(n,e,t,s=!1,a=!1){const l=new Z2(n);let c;if(a)c=$w;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function C0(n,e,t,s,a){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await w0(n,e,t,t==="getOobCode");return s(n,c)}else return s(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await w0(n,e,t,t==="getOobCode");return s(n,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J2(n,e){const t=Zf(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Sa(l,e??{}))return a;ti(a,"already-initialized")}return t.initialize({options:e})}function eP(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(As);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function tP(n,e,t){const s=ka(n);Ce(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=Yw(e),{host:c,port:d}=nP(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ce(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ce(Sa(g,s.config.emulator)&&Sa(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,sl(c)?(Gg(`${l}//${c}${p}`),Kg("Auth",!0)):iP()}function Yw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function nP(n){const e=Yw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:b0(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:b0(c)}}}function b0(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function iP(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ss("not implemented")}_getIdTokenResponse(e){return Ss("not implemented")}_linkToIdToken(e,t){return Ss("not implemented")}_getReauthenticationResolver(e){return Ss("not implemented")}}async function sP(n,e){return Nr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rP(n,e){return sd(n,"POST","/v1/accounts:signInWithPassword",Da(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aP(n,e){return sd(n,"POST","/v1/accounts:signInWithEmailLink",Da(n,e))}async function oP(n,e){return sd(n,"POST","/v1/accounts:signInWithEmailLink",Da(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends w_{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new nc(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new nc(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return C0(e,t,"signInWithPassword",rP);case"emailLink":return aP(e,{email:this._email,oobCode:this._password});default:ti(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return C0(e,s,"signUpPassword",sP);case"emailLink":return oP(e,{idToken:t,email:this._email,oobCode:this._password});default:ti(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(n,e){return sd(n,"POST","/v1/accounts:signInWithIdp",Da(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP="http://localhost";class Ra extends w_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ra(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ti("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=y_(t,["providerId","signInMethod"]);if(!s||!a)return null;const c=new Ra(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return zo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,zo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zo(e,t)}buildRequest(){const e={requestUri:lP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cP(n){const e=Pu(Mu(n)).link,t=e?Pu(Mu(e)).deep_link_id:null,s=Pu(Mu(n)).deep_link_id;return(s?Pu(Mu(s)).link:null)||s||t||e||n}class C_{constructor(e){var t,s,a,l,c,d;const p=Pu(Mu(e)),g=(t=p.apiKey)!==null&&t!==void 0?t:null,y=(s=p.oobCode)!==null&&s!==void 0?s:null,T=uP((a=p.mode)!==null&&a!==void 0?a:null);Ce(g&&y&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=y,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=cP(e);try{return new C_(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this.providerId=ul.PROVIDER_ID}static credential(e,t){return nc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=C_.parseLink(t);return Ce(s,"argument-error"),nc._fromEmailAndCode(e,s.code,s.tenantId)}}ul.PROVIDER_ID="password";ul.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ul.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yc extends b_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends yc{constructor(){super("facebook.com")}static credential(e){return Ra._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends yc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ra._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Es.credentialFromTaggedObject(e)}static credentialFromError(e){return Es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Es.credential(t,s)}catch{return null}}}Es.GOOGLE_SIGN_IN_METHOD="google.com";Es.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends yc{constructor(){super("github.com")}static credential(e){return Ra._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends yc{constructor(){super("twitter.com")}static credential(e,t){return Ra._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return fr.credential(t,s)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await ci._fromIdTokenResponse(e,s,a),c=R0(s);return new $o({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=R0(s);return new $o({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function R0(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf extends Fi{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Pf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Pf(e,t,s,a)}}function Ww(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Pf._fromErrorAndOperation(n,l,e,s):l})}async function hP(n,e,t=!1){const s=await tc(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return $o._forOperation(n,"link",s)}/**
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
 */async function fP(n,e,t=!1){const{auth:s}=n;if(Cn(s.app))return Promise.reject(yr(s));const a="reauthenticate";try{const l=await tc(n,Ww(s,a,e,n),t);Ce(l.idToken,s,"internal-error");const c=S_(l.idToken);Ce(c,s,"internal-error");const{sub:d}=c;return Ce(n.uid===d,s,"user-mismatch"),$o._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&ti(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw(n,e,t=!1){if(Cn(n.app))return Promise.reject(yr(n));const s="signIn",a=await Ww(n,s,e),l=await $o._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}async function dP(n,e){return Qw(ka(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pP(n){const e=ka(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function mP(n,e,t){return Cn(n.app)?Promise.reject(yr(n)):dP(Hi(n),ul.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&pP(n),s})}function gP(n,e,t,s){return Hi(n).onIdTokenChanged(e,t,s)}function _P(n,e,t){return Hi(n).beforeAuthStateChanged(e,t)}const Mf="__sak";/**
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
 */class Xw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mf,"1"),this.storage.removeItem(Mf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=1e3,vP=10;class Zw extends Xw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);j2()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,vP):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},yP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zw.type="LOCAL";const EP=Zw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw extends Xw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jw.type="SESSION";const eC=Jw;/**
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
 */function TP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ad{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new ad(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await TP(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ad.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class SP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=R_("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const S=T;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(S.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(){return window}function AP(n){Mi().location.href=n}/**
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
 */function tC(){return typeof Mi().WorkerGlobalScope<"u"&&typeof Mi().importScripts=="function"}async function wP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function bP(){return tC()?self:null}/**
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
 */const nC="firebaseLocalStorageDb",RP=1,Lf="firebaseLocalStorage",iC="fbase_key";class vc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function od(n,e){return n.transaction([Lf],e?"readwrite":"readonly").objectStore(Lf)}function IP(){const n=indexedDB.deleteDatabase(nC);return new vc(n).toPromise()}function gg(){const n=indexedDB.open(nC,RP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Lf,{keyPath:iC})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Lf)?e(s):(s.close(),await IP(),e(await gg()))})})}async function I0(n,e,t){const s=od(n,!0).put({[iC]:e,value:t});return new vc(s).toPromise()}async function NP(n,e){const t=od(n,!1).get(e),s=await new vc(t).toPromise();return s===void 0?null:s.value}function N0(n,e){const t=od(n,!0).delete(e);return new vc(t).toPromise()}const xP=800,OP=3;class sC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>OP)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ad._getInstance(bP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await wP(),!this.activeServiceWorker)return;this.sender=new SP(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gg();return await I0(e,Mf,"1"),await N0(e,Mf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>I0(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>NP(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>N0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=od(a,!1).getAll();return new vc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sC.type="LOCAL";const DP=sC;new _c(3e4,6e4);/**
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
 */function rC(n,e){return e?As(e):(Ce(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class I_ extends w_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function kP(n){return Qw(n.auth,new I_(n),n.bypassAuthState)}function PP(n){const{auth:e,user:t}=n;return Ce(t,e,"internal-error"),fP(t,new I_(n),n.bypassAuthState)}async function MP(n){const{auth:e,user:t}=n;return Ce(t,e,"internal-error"),hP(t,new I_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kP;case"linkViaPopup":case"linkViaRedirect":return MP;case"reauthViaPopup":case"reauthViaRedirect":return PP;default:ti(this.auth,"internal-error")}}resolve(e){xs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=new _c(2e3,1e4);async function VP(n,e,t){if(Cn(n.app))return Promise.reject(di(n,"operation-not-supported-in-this-environment"));const s=ka(n);v2(n,e,b_);const a=rC(s,t);return new ya(s,"signInViaPopup",e,a).executeNotNull()}class ya extends aC{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,ya.currentPopupAction&&ya.currentPopupAction.cancel(),ya.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ce(e,this.auth,"internal-error"),e}async onExecution(){xs(this.filter.length===1,"Popup operations only handle one event");const e=R_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(di(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(di(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ya.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(di(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LP.get())};e()}}ya.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP="pendingRedirect",ff=new Map;class jP extends aC{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ff.get(this.auth._key());if(!e){try{const s=await BP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ff.set(this.auth._key(),e)}return this.bypassAuthState||ff.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BP(n,e){const t=HP(e),s=FP(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function zP(n,e){ff.set(n._key(),e)}function FP(n){return As(n._redirectPersistence)}function HP(n){return hf(UP,n.config.apiKey,n.name)}async function qP(n,e,t=!1){if(Cn(n.app))return Promise.reject(yr(n));const s=ka(n),a=rC(s,e),c=await new jP(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=10*60*1e3;class KP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$P(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!oC(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(di(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GP&&this.cachedEventUids.clear(),this.cachedEventUids.has(x0(e))}saveEventToCache(e){this.cachedEventUids.add(x0(e)),this.lastProcessedEventTime=Date.now()}}function x0(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function oC({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $P(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oC(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YP(n,e={}){return Nr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QP=/^https?/;async function XP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await YP(n);for(const t of e)try{if(ZP(t))return}catch{}ti(n,"unauthorized-domain")}function ZP(n){const e=pg(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!QP.test(t))return!1;if(WP.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const JP=new _c(3e4,6e4);function O0(){const n=Mi().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function eM(n){return new Promise((e,t)=>{var s,a,l;function c(){O0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{O0(),t(di(n,"network-request-failed"))},timeout:JP.get()})}if(!((a=(s=Mi().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=Mi().gapi)===null||l===void 0)&&l.load)c();else{const d=Y2("iframefcb");return Mi()[d]=()=>{gapi.load?c():t(di(n,"network-request-failed"))},Kw(`${$2()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw df=null,e})}let df=null;function tM(n){return df=df||eM(n),df}/**
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
 */const nM=new _c(5e3,15e3),iM="__/auth/iframe",sM="emulator/auth/iframe",rM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oM(n){const e=n.config;Ce(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?T_(e,sM):`https://${n.config.authDomain}/${iM}`,s={apiKey:e.apiKey,appName:n.name,v:Ir},a=aM.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${rl(s).slice(1)}`}async function lM(n){const e=await tM(n),t=Mi().gapi;return Ce(t,n,"internal-error"),e.open({where:document.body,url:oM(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rM,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=di(n,"network-request-failed"),d=Mi().setTimeout(()=>{l(c)},nM.get());function p(){Mi().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const uM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cM=500,hM=600,fM="_blank",dM="http://localhost";class D0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pM(n,e,t,s=cM,a=hM){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p=Object.assign(Object.assign({},uM),{width:s.toString(),height:a.toString(),top:l,left:c}),g=mn().toLowerCase();t&&(d=jw(g)?fM:t),Vw(g)&&(e=e||dM,p.scrollbars="yes");const y=Object.entries(p).reduce((S,[N,I])=>`${S}${N}=${I},`,"");if(U2(g)&&d!=="_self")return mM(e||"",d),new D0(null);const T=window.open(e||"",d,y);Ce(T,n,"popup-blocked");try{T.focus()}catch{}return new D0(T)}function mM(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const gM="__/auth/handler",_M="emulator/auth/handler",yM=encodeURIComponent("fac");async function k0(n,e,t,s,a,l){Ce(n.config.authDomain,n,"auth-domain-config-required"),Ce(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Ir,eventId:a};if(e instanceof b_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Qm(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof yc){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),g=p?`#${yM}=${encodeURIComponent(p)}`:"";return`${vM(n)}?${rl(d).slice(1)}${g}`}function vM({config:n}){return n.emulator?T_(n,_M):`https://${n.authDomain}/${gM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="webStorageSupport";class EM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eC,this._completeRedirectFn=qP,this._overrideRedirectResult=zP}async _openPopup(e,t,s,a){var l;xs((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await k0(e,t,s,pg(),a);return pM(e,c,R_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await k0(e,t,s,pg(),a);return AP(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(xs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await lM(e),s=new KP(e);return t.register("authEvent",a=>(Ce(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bm,{type:Bm},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[Bm];c!==void 0&&t(!!c),ti(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=XP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qw()||Uw()||A_()}}const TM=EM;var P0="@firebase/auth",M0="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AM(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wM(n){Er(new Is("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Ce(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gw(n)},g=new q2(s,a,l,p);return eP(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Er(new Is("auth-internal",e=>{const t=ka(e.getProvider("auth").getImmediate());return(s=>new SM(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jn(P0,M0,AM(n)),Jn(P0,M0,"esm2017")}/**
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
 */const CM=5*60,bM=hA("authIdTokenMaxAge")||CM;let L0=null;const RM=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>bM)return;const a=t==null?void 0:t.token;L0!==a&&(L0=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function IM(n=Qg()){const e=Zf(n,"auth");if(e.isInitialized())return e.getImmediate();const t=J2(n,{popupRedirectResolver:TM,persistence:[DP,EP,eC]}),s=hA("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=RM(l.toString());_P(t,c,()=>c(t.currentUser)),gP(t,d=>c(d))}}const a=lA("auth");return a&&tP(t,`http://${a}`),t}function NM(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}G2({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=di("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",NM().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wM("Browser");var V0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vr,lC;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,R){function x(){}x.prototype=R.prototype,D.D=R.prototype,D.prototype=new x,D.prototype.constructor=D,D.C=function(P,U,j){for(var b=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)b[ve-2]=arguments[ve];return R.prototype[U].apply(P,b)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,R,x){x||(x=0);var P=Array(16);if(typeof R=="string")for(var U=0;16>U;++U)P[U]=R.charCodeAt(x++)|R.charCodeAt(x++)<<8|R.charCodeAt(x++)<<16|R.charCodeAt(x++)<<24;else for(U=0;16>U;++U)P[U]=R[x++]|R[x++]<<8|R[x++]<<16|R[x++]<<24;R=D.g[0],x=D.g[1],U=D.g[2];var j=D.g[3],b=R+(j^x&(U^j))+P[0]+3614090360&4294967295;R=x+(b<<7&4294967295|b>>>25),b=j+(U^R&(x^U))+P[1]+3905402710&4294967295,j=R+(b<<12&4294967295|b>>>20),b=U+(x^j&(R^x))+P[2]+606105819&4294967295,U=j+(b<<17&4294967295|b>>>15),b=x+(R^U&(j^R))+P[3]+3250441966&4294967295,x=U+(b<<22&4294967295|b>>>10),b=R+(j^x&(U^j))+P[4]+4118548399&4294967295,R=x+(b<<7&4294967295|b>>>25),b=j+(U^R&(x^U))+P[5]+1200080426&4294967295,j=R+(b<<12&4294967295|b>>>20),b=U+(x^j&(R^x))+P[6]+2821735955&4294967295,U=j+(b<<17&4294967295|b>>>15),b=x+(R^U&(j^R))+P[7]+4249261313&4294967295,x=U+(b<<22&4294967295|b>>>10),b=R+(j^x&(U^j))+P[8]+1770035416&4294967295,R=x+(b<<7&4294967295|b>>>25),b=j+(U^R&(x^U))+P[9]+2336552879&4294967295,j=R+(b<<12&4294967295|b>>>20),b=U+(x^j&(R^x))+P[10]+4294925233&4294967295,U=j+(b<<17&4294967295|b>>>15),b=x+(R^U&(j^R))+P[11]+2304563134&4294967295,x=U+(b<<22&4294967295|b>>>10),b=R+(j^x&(U^j))+P[12]+1804603682&4294967295,R=x+(b<<7&4294967295|b>>>25),b=j+(U^R&(x^U))+P[13]+4254626195&4294967295,j=R+(b<<12&4294967295|b>>>20),b=U+(x^j&(R^x))+P[14]+2792965006&4294967295,U=j+(b<<17&4294967295|b>>>15),b=x+(R^U&(j^R))+P[15]+1236535329&4294967295,x=U+(b<<22&4294967295|b>>>10),b=R+(U^j&(x^U))+P[1]+4129170786&4294967295,R=x+(b<<5&4294967295|b>>>27),b=j+(x^U&(R^x))+P[6]+3225465664&4294967295,j=R+(b<<9&4294967295|b>>>23),b=U+(R^x&(j^R))+P[11]+643717713&4294967295,U=j+(b<<14&4294967295|b>>>18),b=x+(j^R&(U^j))+P[0]+3921069994&4294967295,x=U+(b<<20&4294967295|b>>>12),b=R+(U^j&(x^U))+P[5]+3593408605&4294967295,R=x+(b<<5&4294967295|b>>>27),b=j+(x^U&(R^x))+P[10]+38016083&4294967295,j=R+(b<<9&4294967295|b>>>23),b=U+(R^x&(j^R))+P[15]+3634488961&4294967295,U=j+(b<<14&4294967295|b>>>18),b=x+(j^R&(U^j))+P[4]+3889429448&4294967295,x=U+(b<<20&4294967295|b>>>12),b=R+(U^j&(x^U))+P[9]+568446438&4294967295,R=x+(b<<5&4294967295|b>>>27),b=j+(x^U&(R^x))+P[14]+3275163606&4294967295,j=R+(b<<9&4294967295|b>>>23),b=U+(R^x&(j^R))+P[3]+4107603335&4294967295,U=j+(b<<14&4294967295|b>>>18),b=x+(j^R&(U^j))+P[8]+1163531501&4294967295,x=U+(b<<20&4294967295|b>>>12),b=R+(U^j&(x^U))+P[13]+2850285829&4294967295,R=x+(b<<5&4294967295|b>>>27),b=j+(x^U&(R^x))+P[2]+4243563512&4294967295,j=R+(b<<9&4294967295|b>>>23),b=U+(R^x&(j^R))+P[7]+1735328473&4294967295,U=j+(b<<14&4294967295|b>>>18),b=x+(j^R&(U^j))+P[12]+2368359562&4294967295,x=U+(b<<20&4294967295|b>>>12),b=R+(x^U^j)+P[5]+4294588738&4294967295,R=x+(b<<4&4294967295|b>>>28),b=j+(R^x^U)+P[8]+2272392833&4294967295,j=R+(b<<11&4294967295|b>>>21),b=U+(j^R^x)+P[11]+1839030562&4294967295,U=j+(b<<16&4294967295|b>>>16),b=x+(U^j^R)+P[14]+4259657740&4294967295,x=U+(b<<23&4294967295|b>>>9),b=R+(x^U^j)+P[1]+2763975236&4294967295,R=x+(b<<4&4294967295|b>>>28),b=j+(R^x^U)+P[4]+1272893353&4294967295,j=R+(b<<11&4294967295|b>>>21),b=U+(j^R^x)+P[7]+4139469664&4294967295,U=j+(b<<16&4294967295|b>>>16),b=x+(U^j^R)+P[10]+3200236656&4294967295,x=U+(b<<23&4294967295|b>>>9),b=R+(x^U^j)+P[13]+681279174&4294967295,R=x+(b<<4&4294967295|b>>>28),b=j+(R^x^U)+P[0]+3936430074&4294967295,j=R+(b<<11&4294967295|b>>>21),b=U+(j^R^x)+P[3]+3572445317&4294967295,U=j+(b<<16&4294967295|b>>>16),b=x+(U^j^R)+P[6]+76029189&4294967295,x=U+(b<<23&4294967295|b>>>9),b=R+(x^U^j)+P[9]+3654602809&4294967295,R=x+(b<<4&4294967295|b>>>28),b=j+(R^x^U)+P[12]+3873151461&4294967295,j=R+(b<<11&4294967295|b>>>21),b=U+(j^R^x)+P[15]+530742520&4294967295,U=j+(b<<16&4294967295|b>>>16),b=x+(U^j^R)+P[2]+3299628645&4294967295,x=U+(b<<23&4294967295|b>>>9),b=R+(U^(x|~j))+P[0]+4096336452&4294967295,R=x+(b<<6&4294967295|b>>>26),b=j+(x^(R|~U))+P[7]+1126891415&4294967295,j=R+(b<<10&4294967295|b>>>22),b=U+(R^(j|~x))+P[14]+2878612391&4294967295,U=j+(b<<15&4294967295|b>>>17),b=x+(j^(U|~R))+P[5]+4237533241&4294967295,x=U+(b<<21&4294967295|b>>>11),b=R+(U^(x|~j))+P[12]+1700485571&4294967295,R=x+(b<<6&4294967295|b>>>26),b=j+(x^(R|~U))+P[3]+2399980690&4294967295,j=R+(b<<10&4294967295|b>>>22),b=U+(R^(j|~x))+P[10]+4293915773&4294967295,U=j+(b<<15&4294967295|b>>>17),b=x+(j^(U|~R))+P[1]+2240044497&4294967295,x=U+(b<<21&4294967295|b>>>11),b=R+(U^(x|~j))+P[8]+1873313359&4294967295,R=x+(b<<6&4294967295|b>>>26),b=j+(x^(R|~U))+P[15]+4264355552&4294967295,j=R+(b<<10&4294967295|b>>>22),b=U+(R^(j|~x))+P[6]+2734768916&4294967295,U=j+(b<<15&4294967295|b>>>17),b=x+(j^(U|~R))+P[13]+1309151649&4294967295,x=U+(b<<21&4294967295|b>>>11),b=R+(U^(x|~j))+P[4]+4149444226&4294967295,R=x+(b<<6&4294967295|b>>>26),b=j+(x^(R|~U))+P[11]+3174756917&4294967295,j=R+(b<<10&4294967295|b>>>22),b=U+(R^(j|~x))+P[2]+718787259&4294967295,U=j+(b<<15&4294967295|b>>>17),b=x+(j^(U|~R))+P[9]+3951481745&4294967295,D.g[0]=D.g[0]+R&4294967295,D.g[1]=D.g[1]+(U+(b<<21&4294967295|b>>>11))&4294967295,D.g[2]=D.g[2]+U&4294967295,D.g[3]=D.g[3]+j&4294967295}s.prototype.u=function(D,R){R===void 0&&(R=D.length);for(var x=R-this.blockSize,P=this.B,U=this.h,j=0;j<R;){if(U==0)for(;j<=x;)a(this,D,j),j+=this.blockSize;if(typeof D=="string"){for(;j<R;)if(P[U++]=D.charCodeAt(j++),U==this.blockSize){a(this,P),U=0;break}}else for(;j<R;)if(P[U++]=D[j++],U==this.blockSize){a(this,P),U=0;break}}this.h=U,this.o+=R},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var R=1;R<D.length-8;++R)D[R]=0;var x=8*this.o;for(R=D.length-8;R<D.length;++R)D[R]=x&255,x/=256;for(this.u(D),D=Array(16),R=x=0;4>R;++R)for(var P=0;32>P;P+=8)D[x++]=this.g[R]>>>P&255;return D};function l(D,R){var x=d;return Object.prototype.hasOwnProperty.call(x,D)?x[D]:x[D]=R(D)}function c(D,R){this.h=R;for(var x=[],P=!0,U=D.length-1;0<=U;U--){var j=D[U]|0;P&&j==R||(x[U]=j,P=!1)}this.g=x}var d={};function p(D){return-128<=D&&128>D?l(D,function(R){return new c([R|0],0>R?-1:0)}):new c([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return T;if(0>D)return V(g(-D));for(var R=[],x=1,P=0;D>=x;P++)R[P]=D/x|0,x*=4294967296;return new c(R,0)}function y(D,R){if(D.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(D.charAt(0)=="-")return V(y(D.substring(1),R));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=g(Math.pow(R,8)),P=T,U=0;U<D.length;U+=8){var j=Math.min(8,D.length-U),b=parseInt(D.substring(U,U+j),R);8>j?(j=g(Math.pow(R,j)),P=P.j(j).add(g(b))):(P=P.j(x),P=P.add(g(b)))}return P}var T=p(0),S=p(1),N=p(16777216);n=c.prototype,n.m=function(){if(F(this))return-V(this).m();for(var D=0,R=1,x=0;x<this.g.length;x++){var P=this.i(x);D+=(0<=P?P:4294967296+P)*R,R*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(I(this))return"0";if(F(this))return"-"+V(this).toString(D);for(var R=g(Math.pow(D,6)),x=this,P="";;){var U=re(x,R).g;x=Y(x,U.j(R));var j=((0<x.g.length?x.g[0]:x.h)>>>0).toString(D);if(x=U,I(x))return j+P;for(;6>j.length;)j="0"+j;P=j+P}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function I(D){if(D.h!=0)return!1;for(var R=0;R<D.g.length;R++)if(D.g[R]!=0)return!1;return!0}function F(D){return D.h==-1}n.l=function(D){return D=Y(this,D),F(D)?-1:I(D)?0:1};function V(D){for(var R=D.g.length,x=[],P=0;P<R;P++)x[P]=~D.g[P];return new c(x,~D.h).add(S)}n.abs=function(){return F(this)?V(this):this},n.add=function(D){for(var R=Math.max(this.g.length,D.g.length),x=[],P=0,U=0;U<=R;U++){var j=P+(this.i(U)&65535)+(D.i(U)&65535),b=(j>>>16)+(this.i(U)>>>16)+(D.i(U)>>>16);P=b>>>16,j&=65535,b&=65535,x[U]=b<<16|j}return new c(x,x[x.length-1]&-2147483648?-1:0)};function Y(D,R){return D.add(V(R))}n.j=function(D){if(I(this)||I(D))return T;if(F(this))return F(D)?V(this).j(V(D)):V(V(this).j(D));if(F(D))return V(this.j(V(D)));if(0>this.l(N)&&0>D.l(N))return g(this.m()*D.m());for(var R=this.g.length+D.g.length,x=[],P=0;P<2*R;P++)x[P]=0;for(P=0;P<this.g.length;P++)for(var U=0;U<D.g.length;U++){var j=this.i(P)>>>16,b=this.i(P)&65535,ve=D.i(U)>>>16,ye=D.i(U)&65535;x[2*P+2*U]+=b*ye,ee(x,2*P+2*U),x[2*P+2*U+1]+=j*ye,ee(x,2*P+2*U+1),x[2*P+2*U+1]+=b*ve,ee(x,2*P+2*U+1),x[2*P+2*U+2]+=j*ve,ee(x,2*P+2*U+2)}for(P=0;P<R;P++)x[P]=x[2*P+1]<<16|x[2*P];for(P=R;P<2*R;P++)x[P]=0;return new c(x,0)};function ee(D,R){for(;(D[R]&65535)!=D[R];)D[R+1]+=D[R]>>>16,D[R]&=65535,R++}function Q(D,R){this.g=D,this.h=R}function re(D,R){if(I(R))throw Error("division by zero");if(I(D))return new Q(T,T);if(F(D))return R=re(V(D),R),new Q(V(R.g),V(R.h));if(F(R))return R=re(D,V(R)),new Q(V(R.g),R.h);if(30<D.g.length){if(F(D)||F(R))throw Error("slowDivide_ only works with positive integers.");for(var x=S,P=R;0>=P.l(D);)x=se(x),P=se(P);var U=fe(x,1),j=fe(P,1);for(P=fe(P,2),x=fe(x,2);!I(P);){var b=j.add(P);0>=b.l(D)&&(U=U.add(x),j=b),P=fe(P,1),x=fe(x,1)}return R=Y(D,U.j(R)),new Q(U,R)}for(U=T;0<=D.l(R);){for(x=Math.max(1,Math.floor(D.m()/R.m())),P=Math.ceil(Math.log(x)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),j=g(x),b=j.j(R);F(b)||0<b.l(D);)x-=P,j=g(x),b=j.j(R);I(j)&&(j=S),U=U.add(j),D=Y(D,b)}return new Q(U,D)}n.A=function(D){return re(this,D).h},n.and=function(D){for(var R=Math.max(this.g.length,D.g.length),x=[],P=0;P<R;P++)x[P]=this.i(P)&D.i(P);return new c(x,this.h&D.h)},n.or=function(D){for(var R=Math.max(this.g.length,D.g.length),x=[],P=0;P<R;P++)x[P]=this.i(P)|D.i(P);return new c(x,this.h|D.h)},n.xor=function(D){for(var R=Math.max(this.g.length,D.g.length),x=[],P=0;P<R;P++)x[P]=this.i(P)^D.i(P);return new c(x,this.h^D.h)};function se(D){for(var R=D.g.length+1,x=[],P=0;P<R;P++)x[P]=D.i(P)<<1|D.i(P-1)>>>31;return new c(x,D.h)}function fe(D,R){var x=R>>5;R%=32;for(var P=D.g.length-x,U=[],j=0;j<P;j++)U[j]=0<R?D.i(j+x)>>>R|D.i(j+x+1)<<32-R:D.i(j+x);return new c(U,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,lC=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,vr=c}).apply(typeof V0<"u"?V0:typeof self<"u"?self:typeof window<"u"?window:{});var ef=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uC,Vu,cC,pf,_g,hC,fC,dC;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof ef=="object"&&ef];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var C=0;C<h.length-1;C++){var z=h[C];if(!(z in v))break e;v=v[z]}h=h[h.length-1],C=v[h],_=_(C),_!=C&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,C=!1,z={next:function(){if(!C&&v<h.length){var W=v++;return{value:_(W,h[W]),done:!1}}return C=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,C),h.apply(_,z)}}return function(){return h.apply(_,arguments)}}function S(h,_,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,S.apply(null,arguments)}function N(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var C=v.slice();return C.push.apply(C,arguments),h.apply(this,C)}}function I(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(C,z,W){for(var oe=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)oe[Be-2]=arguments[Be];return _.prototype[z].apply(C,oe)}}function F(h){const _=h.length;if(0<_){const v=Array(_);for(let C=0;C<_;C++)v[C]=h[C];return v}return[]}function V(h,_){for(let v=1;v<arguments.length;v++){const C=arguments[v];if(p(C)){const z=h.length||0,W=C.length||0;h.length=z+W;for(let oe=0;oe<W;oe++)h[z+oe]=C[oe]}else h.push(C)}}class Y{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function ee(h){return/^[\s\xa0]*$/.test(h)}function Q(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function re(h){return re[" "](h),h}re[" "]=function(){};var se=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function fe(h,_,v){for(const C in h)_.call(v,h[C],C,h)}function D(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function R(h){const _={};for(const v in h)_[v]=h[v];return _}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(h,_){let v,C;for(let z=1;z<arguments.length;z++){C=arguments[z];for(v in C)h[v]=C[v];for(let W=0;W<x.length;W++)v=x[W],Object.prototype.hasOwnProperty.call(C,v)&&(h[v]=C[v])}}function U(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function j(h){d.setTimeout(()=>{throw h},0)}function b(){var h=Ue;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class ve{constructor(){this.h=this.g=null}add(_,v){const C=ye.get();C.set(_,v),this.h?this.h.next=C:this.g=C,this.h=C}}var ye=new Y(()=>new K,h=>h.reset());class K{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,pe=!1,Ue=new ve,k=()=>{const h=d.Promise.resolve(void 0);ae=()=>{h.then(ne)}};var ne=()=>{for(var h;h=b();){try{h.h.call(h.g)}catch(v){j(v)}var _=ye;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}pe=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var he=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h}();function Re(h,_){if(ie.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,C=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(se){e:{try{re(_.nodeName);var z=!0;break e}catch{}z=!1}z||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:ge[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Re.aa.h.call(this)}}I(Re,ie);var ge={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var lt="closure_listenable_"+(1e6*Math.random()|0),tt=0;function pi(h,_,v,C,z){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!C,this.ha=z,this.key=++tt,this.da=this.fa=!1}function Ps(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Gi(h){this.src=h,this.g={},this.h=0}Gi.prototype.add=function(h,_,v,C,z){var W=h.toString();h=this.g[W],h||(h=this.g[W]=[],this.h++);var oe=Or(h,_,C,z);return-1<oe?(_=h[oe],v||(_.fa=!1)):(_=new pi(_,this.src,W,!!C,z),_.fa=v,h.push(_)),_};function xr(h,_){var v=_.type;if(v in h.g){var C=h.g[v],z=Array.prototype.indexOf.call(C,_,void 0),W;(W=0<=z)&&Array.prototype.splice.call(C,z,1),W&&(Ps(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function Or(h,_,v,C){for(var z=0;z<h.length;++z){var W=h[z];if(!W.da&&W.listener==_&&W.capture==!!v&&W.ha==C)return z}return-1}var Dr="closure_lm_"+(1e6*Math.random()|0),dl={};function bc(h,_,v,C,z){if(Array.isArray(_)){for(var W=0;W<_.length;W++)bc(h,_[W],v,C,z);return null}return v=Rc(v),h&&h[lt]?h.K(_,v,g(C)?!!C.capture:!1,z):Un(h,_,v,!1,C,z)}function Un(h,_,v,C,z,W){if(!_)throw Error("Invalid event type");var oe=g(z)?!!z.capture:!!z,Be=Va(h);if(Be||(h[Dr]=Be=new Gi(h)),v=Be.add(_,v,C,oe,W),v.proxy)return v;if(C=vd(),v.proxy=C,C.src=h,C.listener=v,h.addEventListener)he||(z=oe),z===void 0&&(z=!1),h.addEventListener(_.toString(),C,z);else if(h.attachEvent)h.attachEvent(kr(_.toString()),C);else if(h.addListener&&h.removeListener)h.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return v}function vd(){function h(v){return _.call(h.src,h.listener,v)}const _=Ed;return h}function pl(h,_,v,C,z){if(Array.isArray(_))for(var W=0;W<_.length;W++)pl(h,_[W],v,C,z);else C=g(C)?!!C.capture:!!C,v=Rc(v),h&&h[lt]?(h=h.i,_=String(_).toString(),_ in h.g&&(W=h.g[_],v=Or(W,v,C,z),-1<v&&(Ps(W[v]),Array.prototype.splice.call(W,v,1),W.length==0&&(delete h.g[_],h.h--)))):h&&(h=Va(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Or(_,v,C,z)),(v=-1<h?_[h]:null)&&La(v))}function La(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[lt])xr(_.i,h);else{var v=h.type,C=h.proxy;_.removeEventListener?_.removeEventListener(v,C,h.capture):_.detachEvent?_.detachEvent(kr(v),C):_.addListener&&_.removeListener&&_.removeListener(C),(v=Va(_))?(xr(v,h),v.h==0&&(v.src=null,_[Dr]=null)):Ps(h)}}}function kr(h){return h in dl?dl[h]:dl[h]="on"+h}function Ed(h,_){if(h.da)h=!0;else{_=new Re(_,this);var v=h.listener,C=h.ha||h.src;h.fa&&La(h),h=v.call(C,_)}return h}function Va(h){return h=h[Dr],h instanceof Gi?h:null}var ml="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rc(h){return typeof h=="function"?h:(h[ml]||(h[ml]=function(_){return h.handleEvent(_)}),h[ml])}function vt(){le.call(this),this.i=new Gi(this),this.M=this,this.F=null}I(vt,le),vt.prototype[lt]=!0,vt.prototype.removeEventListener=function(h,_,v,C){pl(this,h,_,v,C)};function Ze(h,_){var v,C=h.F;if(C)for(v=[];C;C=C.F)v.push(C);if(h=h.M,C=_.type||_,typeof _=="string")_=new ie(_,h);else if(_ instanceof ie)_.target=_.target||h;else{var z=_;_=new ie(C,h),P(_,z)}if(z=!0,v)for(var W=v.length-1;0<=W;W--){var oe=_.g=v[W];z=Rn(oe,C,!0,_)&&z}if(oe=_.g=h,z=Rn(oe,C,!0,_)&&z,z=Rn(oe,C,!1,_)&&z,v)for(W=0;W<v.length;W++)oe=_.g=v[W],z=Rn(oe,C,!1,_)&&z}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],C=0;C<v.length;C++)Ps(v[C]);delete h.g[_],h.h--}}this.F=null},vt.prototype.K=function(h,_,v,C){return this.i.add(String(h),_,!1,v,C)},vt.prototype.L=function(h,_,v,C){return this.i.add(String(h),_,!0,v,C)};function Rn(h,_,v,C){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var z=!0,W=0;W<_.length;++W){var oe=_[W];if(oe&&!oe.da&&oe.capture==v){var Be=oe.listener,Mt=oe.ha||oe.src;oe.fa&&xr(h.i,oe),z=Be.call(Mt,C)!==!1&&z}}return z&&!C.defaultPrevented}function rn(h,_,v){if(typeof h=="function")v&&(h=S(h,v));else if(h&&typeof h.handleEvent=="function")h=S(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Ic(h){h.g=rn(()=>{h.g=null,h.i&&(h.i=!1,Ic(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Td extends le{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Ic(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pr(h){le.call(this),this.h=h,this.g={}}I(Pr,le);var Mr=[];function Lr(h){fe(h.g,function(_,v){this.g.hasOwnProperty(v)&&La(_)},h),h.g={}}Pr.prototype.N=function(){Pr.aa.N.call(this),Lr(this)},Pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ni=d.JSON.stringify,Ua=d.JSON.parse,Vr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function gl(){}gl.prototype.h=null;function _l(h){return h.h||(h.h=h.i())}function yl(){}var Ki={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $i(){ie.call(this,"d")}I($i,ie);function vl(){ie.call(this,"c")}I(vl,ie);var mi={},El=null;function Ms(){return El=El||new vt}mi.La="serverreachability";function ja(h){ie.call(this,mi.La,h)}I(ja,ie);function Ls(h){const _=Ms();Ze(_,new ja(_))}mi.STAT_EVENT="statevent";function Nc(h,_){ie.call(this,mi.STAT_EVENT,h),this.stat=_}I(Nc,ie);function pt(h){const _=Ms();Ze(_,new Nc(_,h))}mi.Ma="timingevent";function Pt(h,_){ie.call(this,mi.Ma,h),this.size=_}I(Pt,ie);function Nt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function jn(){this.g=!0}jn.prototype.xa=function(){this.g=!1};function Tl(h,_,v,C,z,W){h.info(function(){if(h.g)if(W)for(var oe="",Be=W.split("&"),Mt=0;Mt<Be.length;Mt++){var ze=Be[Mt].split("=");if(1<ze.length){var Ft=ze[0];ze=ze[1];var Lt=Ft.split("_");oe=2<=Lt.length&&Lt[1]=="type"?oe+(Ft+"="+ze+"&"):oe+(Ft+"=redacted&")}}else oe=null;else oe=W;return"XMLHTTP REQ ("+C+") [attempt "+z+"]: "+_+`
`+v+`
`+oe})}function Sd(h,_,v,C,z,W,oe){h.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+z+"]: "+_+`
`+v+`
`+W+" "+oe})}function Vs(h,_,v,C){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Ur(h,v)+(C?" "+C:"")})}function xc(h,_){h.info(function(){return"TIMEOUT: "+_})}jn.prototype.info=function(){};function Ur(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var C=v[h];if(!(2>C.length)){var z=C[1];if(Array.isArray(z)&&!(1>z.length)){var W=z[0];if(W!="noop"&&W!="stop"&&W!="close")for(var oe=1;oe<z.length;oe++)z[oe]=""}}}}return ni(v)}catch{return _}}var Us={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gi;function _i(){}I(_i,gl),_i.prototype.g=function(){return new XMLHttpRequest},_i.prototype.i=function(){return{}},gi=new _i;function gn(h,_,v,C){this.j=h,this.i=_,this.l=v,this.R=C||1,this.U=new Pr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wt}function wt(){this.i=null,this.g="",this.h=!1}var Sl={},Ba={};function ii(h,_,v){h.L=1,h.v=Hr(In(_)),h.m=v,h.P=!0,Wi(h,null)}function Wi(h,_){h.F=Date.now(),jr(h),h.A=In(h.v);var v=h.A,C=h.R;Array.isArray(C)||(C=[String(C)]),Il(v.i,"t",C),h.C=0,v=h.j.J,h.h=new wt,h.g=Kc(h.j,v?_:null,!h.m),0<h.O&&(h.M=new Td(S(h.Y,h,h.g),h.O)),_=h.U,v=h.g,C=h.ca;var z="readystatechange";Array.isArray(z)||(z&&(Mr[0]=z.toString()),z=Mr);for(var W=0;W<z.length;W++){var oe=bc(v,z[W],C||_.handleEvent,!1,_.h||_);if(!oe)break;_.g[oe.key]=oe}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Ls(),Tl(h.i,h.u,h.A,h.l,h.R,h.m)}gn.prototype.ca=function(h){h=h.target;const _=this.M;_&&Hn(h)==3?_.j():this.Y(h)},gn.prototype.Y=function(h){try{if(h==this.g)e:{const Lt=Hn(this.g);var _=this.g.Ba();const is=this.g.Z();if(!(3>Lt)&&(Lt!=3||this.g&&(this.h.h||this.g.oa()||Uc(this.g)))){this.J||Lt!=4||_==7||(_==8||0>=is?Ls(3):Ls(2)),js(this);var v=this.g.Z();this.X=v;t:if(Oc(this)){var C=Uc(this.g);h="";var z=C.length,W=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wt(this),yi(this);var oe="";break t}this.h.i=new d.TextDecoder}for(_=0;_<z;_++)this.h.h=!0,h+=this.h.i.decode(C[_],{stream:!(W&&_==z-1)});C.length=0,this.h.g+=h,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=v==200,Sd(this.i,this.u,this.A,this.l,this.R,Lt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,Mt=this.g;if((Be=Mt.g?Mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(Be)){var ze=Be;break t}}ze=null}if(v=ze)Vs(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Br(this,v);else{this.o=!1,this.s=3,pt(12),Wt(this),yi(this);break e}}if(this.P){v=!0;let Qt;for(;!this.J&&this.C<oe.length;)if(Qt=Dc(this,oe),Qt==Ba){Lt==4&&(this.s=4,pt(14),v=!1),Vs(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==Sl){this.s=4,pt(15),Vs(this.i,this.l,oe,"[Invalid Chunk]"),v=!1;break}else Vs(this.i,this.l,Qt,null),Br(this,Qt);if(Oc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Lt!=4||oe.length!=0||this.h.h||(this.s=1,pt(16),v=!1),this.o=this.o&&v,!v)Vs(this.i,this.l,oe,"[Invalid Chunked Response]"),Wt(this),yi(this);else if(0<oe.length&&!this.W){this.W=!0;var Ft=this.j;Ft.g==this&&Ft.ba&&!Ft.M&&(Ft.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),Xr(Ft),Ft.M=!0,pt(11))}}else Vs(this.i,this.l,oe,null),Br(this,oe);Lt==4&&Wt(this),this.o&&!this.J&&(Lt==4?Hc(this.j,this):(this.o=!1,jr(this)))}else Rd(this.g),v==400&&0<oe.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Wt(this),yi(this)}}}catch{}finally{}};function Oc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Dc(h,_){var v=h.C,C=_.indexOf(`
`,v);return C==-1?Ba:(v=Number(_.substring(v,C)),isNaN(v)?Sl:(C+=1,C+v>_.length?Ba:(_=_.slice(C,C+v),h.C=C+v,_)))}gn.prototype.cancel=function(){this.J=!0,Wt(this)};function jr(h){h.S=Date.now()+h.I,kc(h,h.I)}function kc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Nt(S(h.ba,h),_)}function js(h){h.B&&(d.clearTimeout(h.B),h.B=null)}gn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(xc(this.i,this.A),this.L!=2&&(Ls(),pt(17)),Wt(this),this.s=2,yi(this)):kc(this,this.S-h)};function yi(h){h.j.G==0||h.J||Hc(h.j,h)}function Wt(h){js(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Lr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Br(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||Al(v.h,h))){if(!h.K&&Al(v.h,h)&&v.G==3){try{var C=v.Da.g.parse(_)}catch{C=null}if(Array.isArray(C)&&C.length==3){var z=C;if(z[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)Za(v),Qa(v);else break e;kl(v),pt(18)}}else v.za=z[1],0<v.za-v.T&&37500>z[2]&&v.F&&v.v==0&&!v.C&&(v.C=Nt(S(v.Za,v),6e3));if(1>=Fa(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else ns(v,11)}else if((h.K||v.g==h)&&Za(v),!ee(_))for(z=v.Da.g.parse(_),_=0;_<z.length;_++){let ze=z[_];if(v.T=ze[0],ze=ze[1],v.G==2)if(ze[0]=="c"){v.K=ze[1],v.ia=ze[2];const Ft=ze[3];Ft!=null&&(v.la=Ft,v.j.info("VER="+v.la));const Lt=ze[4];Lt!=null&&(v.Aa=Lt,v.j.info("SVER="+v.Aa));const is=ze[5];is!=null&&typeof is=="number"&&0<is&&(C=1.5*is,v.L=C,v.j.info("backChannelRequestTimeoutMs_="+C)),C=v;const Qt=h.g;if(Qt){const Ci=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ci){var W=C.h;W.g||Ci.indexOf("spdy")==-1&&Ci.indexOf("quic")==-1&&Ci.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(Ha(W,W.h),W.h=null))}if(C.D){const Ml=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ml&&(C.ya=Ml,nt(C.I,C.D,Ml))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),C=v;var oe=h;if(C.qa=Gc(C,C.J?C.ia:null,C.W),oe.K){_n(C.h,oe);var Be=oe,Mt=C.L;Mt&&(Be.I=Mt),Be.B&&(js(Be),jr(Be)),C.g=oe}else zc(C);0<v.i.length&&Xa(v)}else ze[0]!="stop"&&ze[0]!="close"||ns(v,7);else v.G==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?ns(v,7):Ol(v):ze[0]!="noop"&&v.l&&v.l.ta(ze),v.v=0)}}Ls(4)}catch{}}var Pc=class{constructor(h,_){this.g=h,this.map=_}};function Qi(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function za(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Fa(h){return h.h?1:h.g?h.g.size:0}function Al(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Ha(h,_){h.g?h.g.add(_):h.h=_}function _n(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Qi.prototype.cancel=function(){if(this.i=wl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function wl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return F(h.i)}function Ad(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],v=h.length,C=0;C<v;C++)_.push(h[C]);return _}_=[],v=0;for(C in h)_[v++]=h[C];return _}function qa(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const C in h)_[v++]=C;return _}}}function Cl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=qa(h),C=Ad(h),z=C.length,W=0;W<z;W++)_.call(void 0,C[W],v&&v[W],h)}var zr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wd(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var C=h[v].indexOf("="),z=null;if(0<=C){var W=h[v].substring(0,C);z=h[v].substring(C+1)}else W=h[v];_(W,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function xt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof xt){this.h=h.h,Fr(this,h.j),this.o=h.o,this.g=h.g,Bs(this,h.s),this.l=h.l;var _=h.i,v=new Zi;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),Xi(this,v),this.m=h.m}else h&&(_=String(h).match(zr))?(this.h=!1,Fr(this,_[1]||"",!0),this.o=Bn(_[2]||""),this.g=Bn(_[3]||"",!0),Bs(this,_[4]),this.l=Bn(_[5]||"",!0),Xi(this,_[6]||"",!0),this.m=Bn(_[7]||"")):(this.h=!1,this.i=new Zi(null,this.h))}xt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(qr(_,bl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(qr(_,bl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(qr(v,v.charAt(0)=="/"?Cd:Rl,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",qr(v,Ga)),h.join("")};function In(h){return new xt(h)}function Fr(h,_,v){h.j=v?Bn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Bs(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Xi(h,_,v){_ instanceof Zi?(h.i=_,Lc(h.i,h.h)):(v||(_=qr(_,bd)),h.i=new Zi(_,h.h))}function nt(h,_,v){h.i.set(_,v)}function Hr(h){return nt(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Bn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function qr(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Mc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Mc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var bl=/[#\/\?@]/g,Rl=/[#\?:]/g,Cd=/[#\?]/g,bd=/[#\?@]/g,Ga=/#/g;function Zi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function zn(h){h.g||(h.g=new Map,h.h=0,h.i&&wd(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=Zi.prototype,n.add=function(h,_){zn(this),this.i=null,h=vi(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function Ji(h,_){zn(h),_=vi(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function es(h,_){return zn(h),_=vi(h,_),h.g.has(_)}n.forEach=function(h,_){zn(this),this.g.forEach(function(v,C){v.forEach(function(z){h.call(_,z,C,this)},this)},this)},n.na=function(){zn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let C=0;C<_.length;C++){const z=h[C];for(let W=0;W<z.length;W++)v.push(_[C])}return v},n.V=function(h){zn(this);let _=[];if(typeof h=="string")es(this,h)&&(_=_.concat(this.g.get(vi(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return zn(this),this.i=null,h=vi(this,h),es(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Il(h,_,v){Ji(h,_),0<v.length&&(h.i=null,h.g.set(vi(h,_),F(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var C=_[v];const W=encodeURIComponent(String(C)),oe=this.V(C);for(C=0;C<oe.length;C++){var z=W;oe[C]!==""&&(z+="="+encodeURIComponent(String(oe[C]))),h.push(z)}}return this.i=h.join("&")};function vi(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Lc(h,_){_&&!h.j&&(zn(h),h.i=null,h.g.forEach(function(v,C){var z=C.toLowerCase();C!=z&&(Ji(this,C),Il(this,z,v))},h)),h.j=_}function Gr(h,_){const v=new jn;if(d.Image){const C=new Image;C.onload=N(Fn,v,"TestLoadImage: loaded",!0,_,C),C.onerror=N(Fn,v,"TestLoadImage: error",!1,_,C),C.onabort=N(Fn,v,"TestLoadImage: abort",!1,_,C),C.ontimeout=N(Fn,v,"TestLoadImage: timeout",!1,_,C),d.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=h}else _(!1)}function si(h,_){const v=new jn,C=new AbortController,z=setTimeout(()=>{C.abort(),Fn(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:C.signal}).then(W=>{clearTimeout(z),W.ok?Fn(v,"TestPingServer: ok",!0,_):Fn(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(z),Fn(v,"TestPingServer: error",!1,_)})}function Fn(h,_,v,C,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),C(v)}catch{}}function Kr(){this.g=new Vr}function Ei(h,_,v){const C=v||"";try{Cl(h,function(z,W){let oe=z;g(z)&&(oe=ni(z)),_.push(C+W+"="+encodeURIComponent(oe))})}catch(z){throw _.push(C+"type="+encodeURIComponent("_badmap")),z}}function zs(h){this.l=h.Ub||null,this.j=h.eb||!1}I(zs,gl),zs.prototype.g=function(){return new ts(this.l,this.j)},zs.prototype.i=function(h){return function(){return h}}({});function ts(h,_){vt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(ts,vt),n=ts.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Si(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ti(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Si(this)),this.g&&(this.readyState=3,Si(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Nl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Ti(this):Si(this),this.readyState==3&&Nl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Ti(this))},n.Qa=function(h){this.g&&(this.response=h,Ti(this))},n.ga=function(){this.g&&Ti(this)};function Ti(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Si(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Si(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function xl(h){let _="";return fe(h,function(v,C){_+=C,_+=":",_+=v,_+=`\r
`}),_}function zt(h,_,v){e:{for(C in v){var C=!1;break e}C=!0}C||(v=xl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):nt(h,_,v))}function Qe(h){vt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Qe,vt);var Ka=/^https?$/i,$r=["POST","PUT"];n=Qe.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gi.g(),this.v=this.o?_l(this.o):_l(gi),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(W){Vc(this,W);return}if(h=v||"",v=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var z in C)v.set(z,C[z]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const W of C.keys())v.set(W,C.get(W));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(v.keys()).find(W=>W.toLowerCase()=="content-type"),z=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call($r,_,void 0))||C||z||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,oe]of v)this.g.setRequestHeader(W,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yr(this),this.u=!0,this.g.send(h),this.u=!1}catch(W){Vc(this,W)}};function Vc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,$a(h),Ai(h)}function $a(h){h.A||(h.A=!0,Ze(h,"complete"),Ze(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Ze(this,"complete"),Ze(this,"abort"),Ai(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ai(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ya(this):this.bb())},n.bb=function(){Ya(this)};function Ya(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Hn(h)!=4||h.Z()!=2)){if(h.u&&Hn(h)==4)rn(h.Ea,0,h);else if(Ze(h,"readystatechange"),Hn(h)==4){h.h=!1;try{const oe=h.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var C;if(C=oe===0){var z=String(h.D).match(zr)[1]||null;!z&&d.self&&d.self.location&&(z=d.self.location.protocol.slice(0,-1)),C=!Ka.test(z?z.toLowerCase():"")}v=C}if(v)Ze(h,"complete"),Ze(h,"success");else{h.m=6;try{var W=2<Hn(h)?h.g.statusText:""}catch{W=""}h.l=W+" ["+h.Z()+"]",$a(h)}}finally{Ai(h)}}}}function Ai(h,_){if(h.g){Yr(h);const v=h.g,C=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Ze(h,"ready");try{v.onreadystatechange=C}catch{}}}function Yr(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Hn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Ua(_)}};function Uc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Rd(h){const _={};h=(h.g&&2<=Hn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<h.length;C++){if(ee(h[C]))continue;var v=U(h[C]);const z=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const W=_[z]||[];_[z]=W,W.push(v)}D(_,function(C){return C.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wr(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function Wa(h){this.Aa=0,this.i=[],this.j=new jn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wr("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wr("baseRetryDelayMs",5e3,h),this.cb=Wr("retryDelaySeedMs",1e4,h),this.Wa=Wr("forwardChannelMaxRetries",2,h),this.wa=Wr("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Qi(h&&h.concurrentRequestLimit),this.Da=new Kr,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Wa.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,C){pt(0),this.W=h,this.H=_||{},v&&C!==void 0&&(this.H.OSID=v,this.H.OAID=C),this.F=this.X,this.I=Gc(this,null,this.W),Xa(this)};function Ol(h){if(jc(h),h.G==3){var _=h.U++,v=In(h.I);if(nt(v,"SID",h.K),nt(v,"RID",_),nt(v,"TYPE","terminate"),Qr(h,v),_=new gn(h,h.j,_),_.L=2,_.v=Hr(In(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=Kc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),jr(_)}qc(h)}function Qa(h){h.g&&(Xr(h),h.g.cancel(),h.g=null)}function jc(h){Qa(h),h.u&&(d.clearTimeout(h.u),h.u=null),Za(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Xa(h){if(!za(h.h)&&!h.s){h.s=!0;var _=h.Ga;ae||k(),pe||(ae(),pe=!0),Ue.add(_,h),h.B=0}}function Id(h,_){return Fa(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Nt(S(h.Ga,h,_),Pl(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const z=new gn(this,this.j,h);let W=this.o;if(this.S&&(W?(W=R(W),P(W,this.S)):W=this.S),this.m!==null||this.O||(z.H=W,W=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var C=this.i[v];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(_+=C,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=Bc(this,z,_),v=In(this.I),nt(v,"RID",h),nt(v,"CVER",22),this.D&&nt(v,"X-HTTP-Session-Id",this.D),Qr(this,v),W&&(this.O?_="headers="+encodeURIComponent(String(xl(W)))+"&"+_:this.m&&zt(v,this.m,W)),Ha(this.h,z),this.Ua&&nt(v,"TYPE","init"),this.P?(nt(v,"$req",_),nt(v,"SID","null"),z.T=!0,ii(z,v,null)):ii(z,v,_),this.G=2}}else this.G==3&&(h?Dl(this,h):this.i.length==0||za(this.h)||Dl(this))};function Dl(h,_){var v;_?v=_.l:v=h.U++;const C=In(h.I);nt(C,"SID",h.K),nt(C,"RID",v),nt(C,"AID",h.T),Qr(h,C),h.m&&h.o&&zt(C,h.m,h.o),v=new gn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Bc(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Ha(h.h,v),ii(v,C,_)}function Qr(h,_){h.H&&fe(h.H,function(v,C){nt(_,C,v)}),h.l&&Cl({},function(v,C){nt(_,C,v)})}function Bc(h,_,v){v=Math.min(h.i.length,v);var C=h.l?S(h.l.Na,h.l,h):null;e:{var z=h.i;let W=-1;for(;;){const oe=["count="+v];W==-1?0<v?(W=z[0].g,oe.push("ofs="+W)):W=0:oe.push("ofs="+W);let Be=!0;for(let Mt=0;Mt<v;Mt++){let ze=z[Mt].g;const Ft=z[Mt].map;if(ze-=W,0>ze)W=Math.max(0,z[Mt].g-100),Be=!1;else try{Ei(Ft,oe,"req"+ze+"_")}catch{C&&C(Ft)}}if(Be){C=oe.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,C}function zc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ae||k(),pe||(ae(),pe=!0),Ue.add(_,h),h.v=0}}function kl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Nt(S(h.Fa,h),Pl(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Fc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Nt(S(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),Qa(this),Fc(this))};function Xr(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Fc(h){h.g=new gn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=In(h.qa);nt(_,"RID","rpc"),nt(_,"SID",h.K),nt(_,"AID",h.T),nt(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&nt(_,"TO",h.ja),nt(_,"TYPE","xmlhttp"),Qr(h,_),h.m&&h.o&&zt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=Hr(In(_)),v.m=null,v.P=!0,Wi(v,h)}n.Za=function(){this.C!=null&&(this.C=null,Qa(this),kl(this),pt(19))};function Za(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Hc(h,_){var v=null;if(h.g==_){Za(h),Xr(h),h.g=null;var C=2}else if(Al(h.h,_))v=_.D,_n(h.h,_),C=1;else return;if(h.G!=0){if(_.o)if(C==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var z=h.B;C=Ms(),Ze(C,new Pt(C,v)),Xa(h)}else zc(h);else if(z=_.s,z==3||z==0&&0<_.X||!(C==1&&Id(h,_)||C==2&&kl(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),z){case 1:ns(h,5);break;case 4:ns(h,10);break;case 3:ns(h,6);break;default:ns(h,2)}}}function Pl(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function ns(h,_){if(h.j.info("Error code "+_),_==2){var v=S(h.fb,h),C=h.Xa;const z=!C;C=new xt(C||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Fr(C,"https"),Hr(C),z?Gr(C.toString(),v):si(C.toString(),v)}else pt(2);h.G=0,h.l&&h.l.sa(_),qc(h),jc(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function qc(h){if(h.G=0,h.ka=[],h.l){const _=wl(h.h);(_.length!=0||h.i.length!=0)&&(V(h.ka,_),V(h.ka,h.i),h.h.i.length=0,F(h.i),h.i.length=0),h.l.ra()}}function Gc(h,_,v){var C=v instanceof xt?In(v):new xt(v);if(C.g!="")_&&(C.g=_+"."+C.g),Bs(C,C.s);else{var z=d.location;C=z.protocol,_=_?_+"."+z.hostname:z.hostname,z=+z.port;var W=new xt(null);C&&Fr(W,C),_&&(W.g=_),z&&Bs(W,z),v&&(W.l=v),C=W}return v=h.D,_=h.ya,v&&_&&nt(C,v,_),nt(C,"VER",h.la),Qr(h,C),C}function Kc(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Qe(new zs({eb:v})):new Qe(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $c(){}n=$c.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ja(){}Ja.prototype.g=function(h,_){return new yn(h,_)};function yn(h,_){vt.call(this),this.g=new Wa(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!ee(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!ee(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new wi(this)}I(yn,vt),yn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yn.prototype.close=function(){Ol(this.g)},yn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=ni(h),h=v);_.i.push(new Pc(_.Ya++,h)),_.G==3&&Xa(_)},yn.prototype.N=function(){this.g.l=null,delete this.j,Ol(this.g),delete this.g,yn.aa.N.call(this)};function Yc(h){$i.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}I(Yc,$i);function Wc(){vl.call(this),this.status=1}I(Wc,vl);function wi(h){this.g=h}I(wi,$c),wi.prototype.ua=function(){Ze(this.g,"a")},wi.prototype.ta=function(h){Ze(this.g,new Yc(h))},wi.prototype.sa=function(h){Ze(this.g,new Wc)},wi.prototype.ra=function(){Ze(this.g,"b")},Ja.prototype.createWebChannel=Ja.prototype.g,yn.prototype.send=yn.prototype.o,yn.prototype.open=yn.prototype.m,yn.prototype.close=yn.prototype.close,dC=function(){return new Ja},fC=function(){return Ms()},hC=mi,_g={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Us.NO_ERROR=0,Us.TIMEOUT=8,Us.HTTP_ERROR=6,pf=Us,Yi.COMPLETE="complete",cC=Yi,yl.EventType=Ki,Ki.OPEN="a",Ki.CLOSE="b",Ki.ERROR="c",Ki.MESSAGE="d",vt.prototype.listen=vt.prototype.K,Vu=yl,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,uC=Qe}).apply(typeof ef<"u"?ef:typeof self<"u"?self:typeof window<"u"?window:{});const U0="@firebase/firestore",j0="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new Xf("@firebase/firestore");function Oo(){return Ia.logLevel}function de(n,...e){if(Ia.logLevel<=Ve.DEBUG){const t=e.map(N_);Ia.debug(`Firestore (${cl}): ${n}`,...t)}}function Os(n,...e){if(Ia.logLevel<=Ve.ERROR){const t=e.map(N_);Ia.error(`Firestore (${cl}): ${n}`,...t)}}function Yo(n,...e){if(Ia.logLevel<=Ve.WARN){const t=e.map(N_);Ia.warn(`Firestore (${cl}): ${n}`,...t)}}function N_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,pC(n,s,t)}function pC(n,e,t){let s=`FIRESTORE (${cl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Os(s),new Error(s)}function yt(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||pC(e,a,s)}function Ke(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ae extends Fi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(cn.UNAUTHENTICATED))}shutdown(){}}class OM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class DM{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){yt(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new Ea;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ea,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ea)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(yt(typeof s.accessToken=="string",31837,{l:s}),new mC(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return yt(e===null||typeof e=="string",2055,{h:e}),new cn(e)}}class kM{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class PM{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new kM(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class B0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MM{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){yt(this.o===void 0,3512);const s=l=>{l.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,de("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new B0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(yt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new B0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LM(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function gC(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=LM(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Pe(n,e){return n<e?-1:n>e?1:0}function yg(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),a=e.codePointAt(t);if(s!==a){if(s<128&&a<128)return Pe(s,a);{const l=gC(),c=VM(l.encode(z0(n,t)),l.encode(z0(e,t)));return c!==0?c:Pe(s,a)}}t+=s>65535?2:1}return Pe(n.length,e.length)}function z0(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function VM(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Pe(n[t],e[t]);return Pe(n.length,e.length)}function Wo(n,e,t){return n.length===e.length&&n.every((s,a)=>t(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=-62135596800,H0=1e6;class bn{static now(){return bn.fromMillis(Date.now())}static fromDate(e){return bn.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*H0);return new bn(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ae(ue.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ae(ue.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<F0)throw new Ae(ue.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ae(ue.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/H0}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-F0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new bn(0,0))}static max(){return new Ie(new bn(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="__name__";class Oi{constructor(e,t,s){t===void 0?t=0:t>e.length&&xe(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&xe(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Oi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Oi?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Oi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Pe(e.length,t.length)}static compareSegments(e,t){const s=Oi.isNumericId(e),a=Oi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Oi.extractNumericId(e).compare(Oi.extractNumericId(t)):yg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vr.fromString(e.substring(4,e.length-2))}}class At extends Oi{construct(e,t,s){return new At(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new Ae(ue.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new At(t)}static emptyPath(){return new At([])}}const UM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class En extends Oi{construct(e,t,s){return new En(e,t,s)}static isValidIdentifier(e){return UM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),En.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===q0}static keyField(){return new En([q0])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new Ae(ue.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new Ae(ue.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new Ae(ue.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new Ae(ue.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new En(t)}static emptyPath(){return new En([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.path=e}static fromPath(e){return new we(At.fromString(e))}static fromName(e){return new we(At.fromString(e).popFirst(5))}static empty(){return new we(At.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&At.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return At.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new we(new At(e.slice()))}}/**
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
 */const ic=-1;function jM(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=Ie.fromTimestamp(s===1e9?new bn(t+1,0):new bn(t,s));return new Sr(a,we.empty(),e)}function BM(n){return new Sr(n.readTime,n.key,ic)}class Sr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Sr(Ie.min(),we.empty(),ic)}static max(){return new Sr(Ie.max(),we.empty(),ic)}}function zM(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=we.comparator(n.documentKey,e.documentKey),t!==0?t:Pe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ld(n){if(n.code!==ue.FAILED_PRECONDITION||n.message!==FM)throw n;de("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&xe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new te((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof te?t:te.resolve(t)}catch(t){return te.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):te.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):te.reject(t)}static resolve(e){return new te((t,s)=>{t(e)})}static reject(e){return new te((t,s)=>{s(e)})}static waitFor(e){return new te((t,s)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},p=>s(p))}),c=!0,l===a&&t()})}static or(e){let t=te.resolve(!1);for(const s of e)t=t.next(a=>a?te.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,l)=>{s.push(t.call(this,a,l))}),this.waitFor(s)}static mapArray(e,t){return new te((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next(y=>{c[g]=y,++d,d===l&&s(c)},y=>a(y))}})}static doWhile(e,t){return new te((s,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):s()};l()})}}function qM(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function hl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ud{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}ud.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM=-1;function cd(n){return n==null}function vg(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC="";function KM(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=G0(e)),e=$M(n.get(t),e);return G0(e)}function $M(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case yC:t+="";break;default:t+=l}}return t}function G0(n){return n+yC+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ec(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function YM(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){this.comparator=e,this.root=t||tn.EMPTY}insert(e,t){return new It(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,tn.BLACK,null,null))}remove(e){return new It(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tf(this.root,e,this.comparator,!1)}getReverseIterator(){return new tf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tf(this.root,e,this.comparator,!0)}}class tf{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tn{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??tn.RED,this.left=a??tn.EMPTY,this.right=l??tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new tn(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return tn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return tn.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw xe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw xe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw xe(27949);return e+(this.isRed()?0:1)}}tn.EMPTY=null,tn.RED=!0,tn.BLACK=!1;tn.EMPTY=new class{constructor(){this.size=0}get key(){throw xe(57766)}get value(){throw xe(16141)}get color(){throw xe(16727)}get left(){throw xe(29726)}get right(){throw xe(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new tn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.comparator=e,this.data=new It(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $0(this.data.getIterator())}getIteratorFrom(e){return new $0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Bt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Bt(this.comparator);return t.data=e,t}}class $0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.fields=e,e.sort(En.comparator)}static empty(){return new dr([])}unionWith(e){let t=new Bt(En.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new dr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class vC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new vC("Invalid base64 string: "+l):l}}(e);return new sn(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new sn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sn.EMPTY_BYTE_STRING=new sn("");const WM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(n){if(yt(!!n,39018),typeof n=="string"){let e=0;const t=WM.exec(n);if(yt(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Rt(n.seconds),nanos:Rt(n.nanos)}}function Rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function wr(n){return typeof n=="string"?sn.fromBase64String(n):sn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC="server_timestamp",TC="__type__",SC="__previous_value__",AC="__local_write_time__";function x_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[TC])===null||t===void 0?void 0:t.stringValue)===EC}function hd(n){const e=n.mapValue.fields[SC];return x_(e)?hd(e):e}function sc(n){const e=Ar(n.mapValue.fields[AC].timestampValue);return new bn(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e,t,s,a,l,c,d,p,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y}}const Vf="(default)";class rc{constructor(e,t){this.projectId=e,this.database=t||Vf}static empty(){return new rc("","")}get isDefaultDatabase(){return this.database===Vf}isEqual(e){return e instanceof rc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM="__type__",ZM="__max__",nf={mapValue:{}},JM="__vector__",Eg="value";function Cr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?x_(n)?4:tL(n)?9007199254740991:eL(n)?10:11:xe(28295,{value:n})}function Ui(n,e){if(n===e)return!0;const t=Cr(n);if(t!==Cr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return sc(n).isEqual(sc(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Ar(a.timestampValue),d=Ar(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,l){return wr(a.bytesValue).isEqual(wr(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,l){return Rt(a.geoPointValue.latitude)===Rt(l.geoPointValue.latitude)&&Rt(a.geoPointValue.longitude)===Rt(l.geoPointValue.longitude)}(n,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return Rt(a.integerValue)===Rt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Rt(a.doubleValue),d=Rt(l.doubleValue);return c===d?vg(c)===vg(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Wo(n.arrayValue.values||[],e.arrayValue.values||[],Ui);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(K0(c)!==K0(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Ui(c[p],d[p])))return!1;return!0}(n,e);default:return xe(52216,{left:n})}}function ac(n,e){return(n.values||[]).find(t=>Ui(t,e))!==void 0}function Qo(n,e){if(n===e)return 0;const t=Cr(n),s=Cr(e);if(t!==s)return Pe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=Rt(l.integerValue||l.doubleValue),p=Rt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return Y0(n.timestampValue,e.timestampValue);case 4:return Y0(sc(n),sc(e));case 5:return yg(n.stringValue,e.stringValue);case 6:return function(l,c){const d=wr(l),p=wr(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=Pe(d[g],p[g]);if(y!==0)return y}return Pe(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Pe(Rt(l.latitude),Rt(c.latitude));return d!==0?d:Pe(Rt(l.longitude),Rt(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return W0(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,g,y;const T=l.fields||{},S=c.fields||{},N=(d=T[Eg])===null||d===void 0?void 0:d.arrayValue,I=(p=S[Eg])===null||p===void 0?void 0:p.arrayValue,F=Pe(((g=N==null?void 0:N.values)===null||g===void 0?void 0:g.length)||0,((y=I==null?void 0:I.values)===null||y===void 0?void 0:y.length)||0);return F!==0?F:W0(N,I)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===nf.mapValue&&c===nf.mapValue)return 0;if(l===nf.mapValue)return 1;if(c===nf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let T=0;T<p.length&&T<y.length;++T){const S=yg(p[T],y[T]);if(S!==0)return S;const N=Qo(d[p[T]],g[y[T]]);if(N!==0)return N}return Pe(p.length,y.length)}(n.mapValue,e.mapValue);default:throw xe(23264,{Pe:t})}}function Y0(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Pe(n,e);const t=Ar(n),s=Ar(e),a=Pe(t.seconds,s.seconds);return a!==0?a:Pe(t.nanos,s.nanos)}function W0(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=Qo(t[a],s[a]);if(l)return l}return Pe(t.length,s.length)}function Xo(n){return Tg(n)}function Tg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Ar(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return wr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return we.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Tg(l);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${Tg(t.fields[c])}`;return a+"}"}(n.mapValue):xe(61005,{value:n})}function mf(n){switch(Cr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hd(n);return e?16+mf(e):16;case 5:return 2*n.stringValue.length;case 6:return wr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,l)=>a+mf(l),0)}(n.arrayValue);case 10:case 11:return function(s){let a=0;return Ec(s.fields,(l,c)=>{a+=l.length+mf(c)}),a}(n.mapValue);default:throw xe(13486,{value:n})}}function Sg(n){return!!n&&"integerValue"in n}function O_(n){return!!n&&"arrayValue"in n}function Q0(n){return!!n&&"nullValue"in n}function X0(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function zm(n){return!!n&&"mapValue"in n}function eL(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[XM])===null||t===void 0?void 0:t.stringValue)===JM}function Ku(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ec(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ku(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ku(n.arrayValue.values[t]);return e}return Object.assign({},n)}function tL(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ZM}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.value=e}static empty(){return new Di({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!zm(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ku(t)}setAll(e){let t=En.emptyPath(),s={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=Ku(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());zm(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ui(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];zm(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Ec(t,(a,l)=>e[a]=l);for(const a of s)delete e[a]}clone(){return new Di(Ku(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new dn(e,0,Ie.min(),Ie.min(),Ie.min(),Di.empty(),0)}static newFoundDocument(e,t,s,a){return new dn(e,1,t,Ie.min(),s,a,0)}static newNoDocument(e,t){return new dn(e,2,t,Ie.min(),Ie.min(),Di.empty(),0)}static newUnknownDocument(e,t){return new dn(e,3,t,Ie.min(),Ie.min(),Di.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Di.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Di.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Uf{constructor(e,t){this.position=e,this.inclusive=t}}function Z0(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=we.comparator(we.fromName(c.referenceValue),t.key):s=Qo(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function J0(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ui(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class jf{constructor(e,t="asc"){this.field=e,this.dir=t}}function nL(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class wC{}class jt extends wC{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new sL(e,t,s):t==="array-contains"?new oL(e,s):t==="in"?new lL(e,s):t==="not-in"?new uL(e,s):t==="array-contains-any"?new cL(e,s):new jt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new rL(e,s):new aL(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Qo(t,this.value)):t!==null&&Cr(this.value)===Cr(t)&&this.matchesComparison(Qo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return xe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ji extends wC{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new ji(e,t)}matches(e){return CC(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function CC(n){return n.op==="and"}function bC(n){return iL(n)&&CC(n)}function iL(n){for(const e of n.filters)if(e instanceof ji)return!1;return!0}function Ag(n){if(n instanceof jt)return n.field.canonicalString()+n.op.toString()+Xo(n.value);if(bC(n))return n.filters.map(e=>Ag(e)).join(",");{const e=n.filters.map(t=>Ag(t)).join(",");return`${n.op}(${e})`}}function RC(n,e){return n instanceof jt?function(s,a){return a instanceof jt&&s.op===a.op&&s.field.isEqual(a.field)&&Ui(s.value,a.value)}(n,e):n instanceof ji?function(s,a){return a instanceof ji&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((l,c,d)=>l&&RC(c,a.filters[d]),!0):!1}(n,e):void xe(19439)}function IC(n){return n instanceof jt?function(t){return`${t.field.canonicalString()} ${t.op} ${Xo(t.value)}`}(n):n instanceof ji?function(t){return t.op.toString()+" {"+t.getFilters().map(IC).join(" ,")+"}"}(n):"Filter"}class sL extends jt{constructor(e,t,s){super(e,t,s),this.key=we.fromName(s.referenceValue)}matches(e){const t=we.comparator(e.key,this.key);return this.matchesComparison(t)}}class rL extends jt{constructor(e,t){super(e,"in",t),this.keys=NC("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class aL extends jt{constructor(e,t){super(e,"not-in",t),this.keys=NC("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function NC(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>we.fromName(s.referenceValue))}class oL extends jt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return O_(t)&&ac(t.arrayValue,this.value)}}class lL extends jt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ac(this.value.arrayValue,t)}}class uL extends jt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ac(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ac(this.value.arrayValue,t)}}class cL extends jt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!O_(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ac(this.value.arrayValue,s))}}/**
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
 */class hL{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Ie=null}}function eS(n,e=null,t=[],s=[],a=null,l=null,c=null){return new hL(n,e,t,s,a,l,c)}function D_(n){const e=Ke(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Ag(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),cd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Xo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Xo(s)).join(",")),e.Ie=t}return e.Ie}function k_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!nL(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!RC(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!J0(n.startAt,e.startAt)&&J0(n.endAt,e.endAt)}function wg(n){return we.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function fL(n,e,t,s,a,l,c,d){return new fd(n,e,t,s,a,l,c,d)}function P_(n){return new fd(n)}function tS(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function dL(n){return n.collectionGroup!==null}function $u(n){const e=Ke(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Bt(En.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new jf(l,s))}),t.has(En.keyField().canonicalString())||e.Ee.push(new jf(En.keyField(),s))}return e.Ee}function Li(n){const e=Ke(n);return e.de||(e.de=pL(e,$u(n))),e.de}function pL(n,e){if(n.limitType==="F")return eS(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new jf(a.field,l)});const t=n.endAt?new Uf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Uf(n.startAt.position,n.startAt.inclusive):null;return eS(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Cg(n,e,t){return new fd(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function dd(n,e){return k_(Li(n),Li(e))&&n.limitType===e.limitType}function xC(n){return`${D_(Li(n))}|lt:${n.limitType}`}function Do(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>IC(a)).join(", ")}]`),cd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>Xo(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>Xo(a)).join(",")),`Target(${s})`}(Li(n))}; limitType=${n.limitType})`}function pd(n,e){return e.isFoundDocument()&&function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):we.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(n,e)&&function(s,a){for(const l of $u(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(n,e)&&function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0}(n,e)&&function(s,a){return!(s.startAt&&!function(c,d,p){const g=Z0(c,d,p);return c.inclusive?g<=0:g<0}(s.startAt,$u(s),a)||s.endAt&&!function(c,d,p){const g=Z0(c,d,p);return c.inclusive?g>=0:g>0}(s.endAt,$u(s),a))}(n,e)}function mL(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function OC(n){return(e,t)=>{let s=!1;for(const a of $u(n)){const l=gL(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function gL(n,e,t){const s=n.field.isKeyField()?we.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?Qo(p,g):xe(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return xe(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Ec(this.inner,(t,s)=>{for(const[a,l]of s)e(a,l)})}isEmpty(){return YM(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _L=new It(we.comparator);function br(){return _L}const DC=new It(we.comparator);function Uu(...n){let e=DC;for(const t of n)e=e.insert(t.key,t);return e}function yL(n){let e=DC;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function va(){return Yu()}function kC(){return Yu()}function Yu(){return new Pa(n=>n.toString(),(n,e)=>n.isEqual(e))}const vL=new Bt(we.comparator);function $e(...n){let e=vL;for(const t of n)e=e.add(t);return e}const EL=new Bt(Pe);function TL(){return EL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SL(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vg(e)?"-0":e}}function AL(n){return{integerValue:""+n}}/**
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
 */class md{constructor(){this._=void 0}}function wL(n,e,t){return n instanceof bg?function(a,l){const c={fields:{[TC]:{stringValue:EC},[AC]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&x_(l)&&(l=hd(l)),l&&(c.fields[SC]=l),{mapValue:c}}(t,e):n instanceof Bf?PC(n,e):n instanceof zf?MC(n,e):function(a,l){const c=bL(a,l),d=nS(c)+nS(a.Re);return Sg(c)&&Sg(a.Re)?AL(d):SL(a.serializer,d)}(n,e)}function CL(n,e,t){return n instanceof Bf?PC(n,e):n instanceof zf?MC(n,e):t}function bL(n,e){return n instanceof Rg?function(s){return Sg(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class bg extends md{}class Bf extends md{constructor(e){super(),this.elements=e}}function PC(n,e){const t=LC(e);for(const s of n.elements)t.some(a=>Ui(a,s))||t.push(s);return{arrayValue:{values:t}}}class zf extends md{constructor(e){super(),this.elements=e}}function MC(n,e){let t=LC(e);for(const s of n.elements)t=t.filter(a=>!Ui(a,s));return{arrayValue:{values:t}}}class Rg extends md{constructor(e,t){super(),this.serializer=e,this.Re=t}}function nS(n){return Rt(n.integerValue||n.doubleValue)}function LC(n){return O_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function RL(n,e){return n.field.isEqual(e.field)&&function(s,a){return s instanceof Bf&&a instanceof Bf||s instanceof zf&&a instanceof zf?Wo(s.elements,a.elements,Ui):s instanceof Rg&&a instanceof Rg?Ui(s.Re,a.Re):s instanceof bg&&a instanceof bg}(n.transform,e.transform)}class Ta{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ta}static exists(e){return new Ta(void 0,e)}static updateTime(e){return new Ta(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class M_{}function VC(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new NL(n.key,Ta.none()):new L_(n.key,n.data,Ta.none());{const t=n.data,s=Di.empty();let a=new Bt(En.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new gd(n.key,s,new dr(a.toArray()),Ta.none())}}function IL(n,e,t){n instanceof L_?function(a,l,c){const d=a.value.clone(),p=sS(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof gd?function(a,l,c){if(!gf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=sS(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(UC(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Wu(n,e,t,s){return n instanceof L_?function(l,c,d,p){if(!gf(l.precondition,c))return d;const g=l.value.clone(),y=rS(l.fieldTransforms,p,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(n,e,t,s):n instanceof gd?function(l,c,d,p){if(!gf(l.precondition,c))return d;const g=rS(l.fieldTransforms,p,c),y=c.data;return y.setAll(UC(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,s):function(l,c,d){return gf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function iS(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Wo(s,a,(l,c)=>RL(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class L_ extends M_{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class gd extends M_{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function UC(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function sS(n,e,t){const s=new Map;yt(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,CL(c,d,t[a]))}return s}function rS(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,wL(l,c,e))}return s}class NL extends M_{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&IL(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Wu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Wu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=kC();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=VC(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Ie.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),$e())}isEqual(e){return this.batchId===e.batchId&&Wo(this.mutations,e.mutations,(t,s)=>iS(t,s))&&Wo(this.baseMutations,e.baseMutations,(t,s)=>iS(t,s))}}/**
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
 */class OL{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class DL{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kt,He;function jC(n){if(n===void 0)return Os("GRPC error has no .code"),ue.UNKNOWN;switch(n){case kt.OK:return ue.OK;case kt.CANCELLED:return ue.CANCELLED;case kt.UNKNOWN:return ue.UNKNOWN;case kt.DEADLINE_EXCEEDED:return ue.DEADLINE_EXCEEDED;case kt.RESOURCE_EXHAUSTED:return ue.RESOURCE_EXHAUSTED;case kt.INTERNAL:return ue.INTERNAL;case kt.UNAVAILABLE:return ue.UNAVAILABLE;case kt.UNAUTHENTICATED:return ue.UNAUTHENTICATED;case kt.INVALID_ARGUMENT:return ue.INVALID_ARGUMENT;case kt.NOT_FOUND:return ue.NOT_FOUND;case kt.ALREADY_EXISTS:return ue.ALREADY_EXISTS;case kt.PERMISSION_DENIED:return ue.PERMISSION_DENIED;case kt.FAILED_PRECONDITION:return ue.FAILED_PRECONDITION;case kt.ABORTED:return ue.ABORTED;case kt.OUT_OF_RANGE:return ue.OUT_OF_RANGE;case kt.UNIMPLEMENTED:return ue.UNIMPLEMENTED;case kt.DATA_LOSS:return ue.DATA_LOSS;default:return xe(39323,{code:n})}}(He=kt||(kt={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const kL=new vr([4294967295,4294967295],0);function aS(n){const e=gC().encode(n),t=new lC;return t.update(e),new Uint8Array(t.digest())}function oS(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new vr([t,s],0),new vr([a,l],0)]}class V_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ju(`Invalid padding: ${t}`);if(s<0)throw new ju(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ju(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ju(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=vr.fromNumber(this.pe)}we(e,t,s){let a=e.add(t.multiply(vr.fromNumber(s)));return a.compare(kL)===1&&(a=new vr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=aS(e),[s,a]=oS(t);for(let l=0;l<this.hashCount;l++){const c=this.we(s,a,l);if(!this.Se(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new V_(l,a,t);return s.forEach(d=>c.insert(d)),c}insert(e){if(this.pe===0)return;const t=aS(e),[s,a]=oS(t);for(let l=0;l<this.hashCount;l++){const c=this.we(s,a,l);this.be(c)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ju extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Tc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new _d(Ie.min(),a,new It(Pe),br(),$e())}}class Tc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Tc(s,t,$e(),$e(),$e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t,s,a){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=a}}class BC{constructor(e,t){this.targetId=e,this.Ce=t}}class zC{constructor(e,t,s=sn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class lS{constructor(){this.Fe=0,this.Me=uS(),this.xe=sn.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=$e(),t=$e(),s=$e();return this.Me.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:xe(38017,{changeType:l})}}),new Tc(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=uS()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,yt(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class PL{constructor(e){this.ze=e,this.je=new Map,this.He=br(),this.Je=sf(),this.Ye=sf(),this.Ze=new It(Pe)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:xe(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((s,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,s=e.Ce.count,a=this._t(t);if(a){const l=a.target;if(wg(l))if(s===0){const c=new we(l.path);this.tt(t,c,dn.newNoDocument(c,Ie.min()))}else yt(s===1,20013,{expectedCount:s});else{const c=this.ut(t);if(c!==s){const d=this.ct(e),p=d?this.lt(d,e,c):1;if(p!==0){this.st(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=wr(s).toUint8Array()}catch(p){if(p instanceof vC)return Yo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new V_(c,a,l)}catch(p){return Yo(p instanceof ju?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.pe===0?null:d}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let a=0;return s.forEach(l=>{const c=this.ze.Pt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.tt(t,l,null),a++)}),a}It(e){const t=new Map;this.je.forEach((l,c)=>{const d=this._t(c);if(d){if(l.current&&wg(d.target)){const p=new we(d.target.path);this.Et(p).has(c)||this.dt(c,p)||this.tt(c,p,dn.newNoDocument(p,e))}l.Le&&(t.set(c,l.qe()),l.Qe())}});let s=$e();this.Ye.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this._t(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(s=s.add(l))}),this.He.forEach((l,c)=>c.setReadTime(e));const a=new _d(e,t,this.Ze,this.He,s);return this.He=br(),this.Je=sf(),this.Ye=sf(),this.Ze=new It(Pe),a}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new lS,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Bt(Pe),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Bt(Pe),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||de("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new lS),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function sf(){return new It(we.comparator)}function uS(){return new It(we.comparator)}const ML={asc:"ASCENDING",desc:"DESCENDING"},LL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VL={and:"AND",or:"OR"};class UL{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ig(n,e){return n.useProto3Json||cd(e)?e:{value:e}}function jL(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BL(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Fo(n){return yt(!!n,49232),Ie.fromTimestamp(function(t){const s=Ar(t);return new bn(s.seconds,s.nanos)}(n))}function zL(n,e){return Ng(n,e).canonicalString()}function Ng(n,e){const t=function(a){return new At(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function FC(n){const e=At.fromString(n);return yt($C(e),10190,{key:e.toString()}),e}function Fm(n,e){const t=FC(e);if(t.get(1)!==n.databaseId.projectId)throw new Ae(ue.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Ae(ue.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new we(qC(t))}function HC(n,e){return zL(n.databaseId,e)}function FL(n){const e=FC(n);return e.length===4?At.emptyPath():qC(e)}function cS(n){return new At(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qC(n){return yt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function HL(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:xe(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,y){return g.useProto3Json?(yt(y===void 0||typeof y=="string",58123),sn.fromBase64String(y||"")):(yt(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),sn.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const y=g.code===void 0?ue.UNKNOWN:jC(g.code);return new Ae(y,g.message||"")}(c);t=new zC(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=Fm(n,s.document.name),l=Fo(s.document.updateTime),c=s.document.createTime?Fo(s.document.createTime):Ie.min(),d=new Di({mapValue:{fields:s.document.fields}}),p=dn.newFoundDocument(a,l,c,d),g=s.targetIds||[],y=s.removedTargetIds||[];t=new _f(g,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=Fm(n,s.document),l=s.readTime?Fo(s.readTime):Ie.min(),c=dn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new _f([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=Fm(n,s.document),l=s.removedTargetIds||[];t=new _f([],l,a,null)}else{if(!("filter"in e))return xe(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new DL(a,l),d=s.targetId;t=new BC(d,c)}}return t}function qL(n,e){return{documents:[HC(n,e.path)]}}function GL(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=HC(n,a);const l=function(g){if(g.length!==0)return KC(ji.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(y=>function(S){return{field:ko(S.field),direction:YL(S.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Ig(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{gt:t,parent:a}}function KL(n){let e=FL(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){yt(s===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=function(T){const S=GC(T);return S instanceof ji&&bC(S)?S.getFilters():[S]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(S=>function(I){return new jf(Po(I.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(S))}(t.orderBy));let d=null;t.limit&&(d=function(T){let S;return S=typeof T=="object"?T.value:T,cd(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(T){const S=!!T.before,N=T.values||[];return new Uf(N,S)}(t.startAt));let g=null;return t.endAt&&(g=function(T){const S=!T.before,N=T.values||[];return new Uf(N,S)}(t.endAt)),fL(e,a,c,l,d,"F",p,g)}function $L(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return xe(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function GC(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Po(t.unaryFilter.field);return jt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Po(t.unaryFilter.field);return jt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Po(t.unaryFilter.field);return jt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Po(t.unaryFilter.field);return jt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return xe(61313);default:return xe(60726)}}(n):n.fieldFilter!==void 0?function(t){return jt.create(Po(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return xe(58110);default:return xe(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ji.create(t.compositeFilter.filters.map(s=>GC(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return xe(1026)}}(t.compositeFilter.op))}(n):xe(30097,{filter:n})}function YL(n){return ML[n]}function WL(n){return LL[n]}function QL(n){return VL[n]}function ko(n){return{fieldPath:n.canonicalString()}}function Po(n){return En.fromServerFormat(n.fieldPath)}function KC(n){return n instanceof jt?function(t){if(t.op==="=="){if(X0(t.value))return{unaryFilter:{field:ko(t.field),op:"IS_NAN"}};if(Q0(t.value))return{unaryFilter:{field:ko(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(X0(t.value))return{unaryFilter:{field:ko(t.field),op:"IS_NOT_NAN"}};if(Q0(t.value))return{unaryFilter:{field:ko(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ko(t.field),op:WL(t.op),value:t.value}}}(n):n instanceof ji?function(t){const s=t.getFilters().map(a=>KC(a));return s.length===1?s[0]:{compositeFilter:{op:QL(t.op),filters:s}}}(n):xe(54877,{filter:n})}function $C(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t,s,a,l=Ie.min(),c=Ie.min(),d=sn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e){this.wt=e}}function ZL(n){const e=KL({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Cg(e,e.limit,"L"):e}/**
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
 */class JL{constructor(){this.Cn=new e4}addToCollectionParentIndex(e,t){return this.Cn.add(t),te.resolve()}getCollectionParents(e,t){return te.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return te.resolve()}deleteFieldIndex(e,t){return te.resolve()}deleteAllFieldIndexes(e){return te.resolve()}createTargetIndexes(e,t){return te.resolve()}getDocumentsMatchingTarget(e,t){return te.resolve(null)}getIndexType(e,t){return te.resolve(0)}getFieldIndexes(e,t){return te.resolve([])}getNextCollectionGroupToUpdate(e){return te.resolve(null)}getMinOffset(e,t){return te.resolve(Sr.min())}getMinOffsetFromCollectionGroup(e,t){return te.resolve(Sr.min())}updateCollectionGroup(e,t,s){return te.resolve()}updateIndexEntries(e,t){return te.resolve()}}class e4{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Bt(At.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Bt(At.comparator)).toArray()}}/**
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
 */const hS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},YC=41943040;class wn{static withCacheSize(e){return new wn(e,wn.DEFAULT_COLLECTION_PERCENTILE,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn.DEFAULT_COLLECTION_PERCENTILE=10,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wn.DEFAULT=new wn(YC,wn.DEFAULT_COLLECTION_PERCENTILE,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wn.DISABLED=new wn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Zo(0)}static lr(){return new Zo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS="LruGarbageCollector",t4=1048576;function dS([n,e],[t,s]){const a=Pe(n,t);return a===0?Pe(e,s):a}class n4{constructor(e){this.Er=e,this.buffer=new Bt(dS),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();dS(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class i4{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){de(fS,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){hl(t)?de(fS,"Ignoring IndexedDB error during garbage collection: ",t):await ld(t)}await this.mr(3e5)})}}class s4{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return te.resolve(ud.le);const s=new n4(t);return this.gr.forEachTarget(e,a=>s.Rr(a.sequenceNumber)).next(()=>this.gr.yr(e,a=>s.Rr(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.gr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(de("LruGarbageCollector","Garbage collection skipped; disabled"),te.resolve(hS)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(de("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hS):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let s,a,l,c,d,p,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(de("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(s=T,d=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(g=Date.now(),Oo()<=Ve.DEBUG&&de("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),te.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function r4(n,e){return new s4(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(){this.changes=new Pa(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?te.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class o4{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&Wu(s.mutation,a,dr.empty(),bn.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,$e()).next(()=>s))}getLocalViewOfDocuments(e,t,s=$e()){const a=va();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(l=>{let c=Uu();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const s=va();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,$e()))}populateOverlays(e,t,s){const a=[];return s.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,s,a){let l=br();const c=Yu(),d=function(){return Yu()}();return t.forEach((p,g)=>{const y=s.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof gd)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),Wu(y.mutation,g,y.mutation.getFieldMask(),bn.now())):c.set(g.key,dr.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,y)=>c.set(g,y)),t.forEach((g,y)=>{var T;return d.set(g,new o4(y,(T=c.get(g))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const s=Yu();let a=new It((c,d)=>c-d),l=$e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let y=s.get(p)||dr.empty();y=d.applyToLocalView(g,y),s.set(p,y);const T=(a.get(d.batchId)||$e()).add(p);a=a.insert(d.batchId,T)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,T=kC();y.forEach(S=>{if(!l.has(S)){const N=VC(t.get(S),s.get(S));N!==null&&T.set(S,N),l=l.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return te.waitFor(c)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(c){return we.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):dL(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):te.resolve(va());let d=ic,p=l;return c.next(g=>te.forEach(g,(y,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(y)?te.resolve():this.remoteDocumentCache.getEntry(e,y).next(S=>{p=p.insert(y,S)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,$e())).next(y=>({batchId:d,changes:yL(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new we(t)).next(s=>{let a=Uu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Uu();return this.indexManager.getCollectionParents(e,l).next(d=>te.forEach(d,p=>{const g=function(T,S){return new fd(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next(y=>{y.forEach((T,S)=>{c=c.insert(T,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a))).next(c=>{l.forEach((p,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,dn.newInvalidDocument(y)))});let d=Uu();return c.forEach((p,g)=>{const y=l.get(p);y!==void 0&&Wu(y.mutation,g,dr.empty(),bn.now()),pd(t,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return te.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Fo(a.createTime)}}(t)),te.resolve()}getNamedQuery(e,t){return te.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(a){return{name:a.name,query:ZL(a.bundledQuery),readTime:Fo(a.readTime)}}(t)),te.resolve()}}/**
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
 */class c4{constructor(){this.overlays=new It(we.comparator),this.Qr=new Map}getOverlay(e,t){return te.resolve(this.overlays.get(t))}getOverlays(e,t){const s=va();return te.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&s.set(a,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,l)=>{this.bt(e,t,l)}),te.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Qr.get(s);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Qr.delete(s)),te.resolve()}getOverlaysForCollection(e,t,s){const a=va(),l=t.length+1,c=new we(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return te.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new It((g,y)=>g-y);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let y=l.get(g.largestBatchId);y===null&&(y=va(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=va(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,y)=>d.set(g,y)),!(d.size()>=a)););return te.resolve(d)}bt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.Qr.get(a.largestBatchId).delete(s.key);this.Qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new OL(t,s));let l=this.Qr.get(t);l===void 0&&(l=$e(),this.Qr.set(t,l)),this.Qr.set(t,l.add(s.key))}}/**
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
 */class h4{constructor(){this.sessionToken=sn.EMPTY_BYTE_STRING}getSessionToken(e){return te.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,te.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(){this.$r=new Bt($t.Ur),this.Kr=new Bt($t.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const s=new $t(e,t);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.zr(new $t(e,t))}jr(e,t){e.forEach(s=>this.removeReference(s,t))}Hr(e){const t=new we(new At([])),s=new $t(t,e),a=new $t(t,e+1),l=[];return this.Kr.forEachInRange([s,a],c=>{this.zr(c),l.push(c.key)}),l}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new we(new At([])),s=new $t(t,e),a=new $t(t,e+1);let l=$e();return this.Kr.forEachInRange([s,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new $t(e,0),s=this.$r.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class $t{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return we.comparator(e.key,t.key)||Pe(e.Zr,t.Zr)}static Wr(e,t){return Pe(e.Zr,t.Zr)||we.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Bt($t.Ur)}checkEmpty(e){return te.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new xL(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Xr=this.Xr.add(new $t(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return te.resolve(c)}lookupMutationBatch(e,t){return te.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ti(s),l=a<0?0:a;return te.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return te.resolve(this.mutationQueue.length===0?GM:this.nr-1)}getAllMutationBatches(e){return te.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new $t(t,0),a=new $t(t,Number.POSITIVE_INFINITY),l=[];return this.Xr.forEachInRange([s,a],c=>{const d=this.ei(c.Zr);l.push(d)}),te.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Bt(Pe);return t.forEach(a=>{const l=new $t(a,0),c=new $t(a,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([l,c],d=>{s=s.add(d.Zr)})}),te.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;we.isDocumentKey(l)||(l=l.child(""));const c=new $t(new we(l),0);let d=new Bt(Pe);return this.Xr.forEachWhile(p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Zr)),!0)},c),te.resolve(this.ni(d))}ni(e){const t=[];return e.forEach(s=>{const a=this.ei(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){yt(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return te.forEach(t.mutations,a=>{const l=new $t(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Xr=s})}sr(e){}containsKey(e,t){const s=new $t(t,0),a=this.Xr.firstAfterOrEqual(s);return te.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,te.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4{constructor(e){this.ii=e,this.docs=function(){return new It(we.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ii(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return te.resolve(s?s.document.mutableCopy():dn.newInvalidDocument(t))}getEntries(e,t){let s=br();return t.forEach(a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():dn.newInvalidDocument(a))}),te.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=br();const c=t.path,d=new we(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||zM(BM(y),s)<=0||(a.has(y.key)||pd(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return te.resolve(l)}getAllFromCollectionGroup(e,t,s,a){xe(9500)}si(e,t){return te.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new p4(this)}getSize(e){return te.resolve(this.size)}}class p4 extends a4{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.Br.addEntry(e,a)):this.Br.removeEntry(s)}),te.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{constructor(e){this.persistence=e,this.oi=new Pa(t=>D_(t),k_),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this._i=0,this.ai=new U_,this.targetCount=0,this.ui=Zo.cr()}forEachTarget(e,t){return this.oi.forEach((s,a)=>t(a)),te.resolve()}getLastRemoteSnapshotVersion(e){return te.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return te.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),te.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this._i&&(this._i=t),te.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new Zo(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,te.resolve()}updateTargetData(e,t){return this.Tr(t),te.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,te.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.oi.forEach((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.oi.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),te.waitFor(l).next(()=>a)}getTargetCount(e){return te.resolve(this.targetCount)}getTargetData(e,t){const s=this.oi.get(t)||null;return te.resolve(s)}addMatchingKeys(e,t,s){return this.ai.Gr(t,s),te.resolve()}removeMatchingKeys(e,t,s){this.ai.jr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),te.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),te.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ai.Yr(t);return te.resolve(s)}containsKey(e,t){return te.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,t){this.ci={},this.overlays={},this.li=new ud(0),this.hi=!1,this.hi=!0,this.Pi=new h4,this.referenceDelegate=e(this),this.Ti=new m4(this),this.indexManager=new JL,this.remoteDocumentCache=function(a){return new d4(a)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new XL(t),this.Ei=new u4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new c4,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ci[e.toKey()];return s||(s=new f4(t,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,s){de("MemoryPersistence","Starting transaction:",e);const a=new g4(this.li.next());return this.referenceDelegate.di(),s(a).next(l=>this.referenceDelegate.Ai(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ri(e,t){return te.or(Object.values(this.ci).map(s=>()=>s.containsKey(e,t)))}}class g4 extends HM{constructor(e){super(),this.currentSequenceNumber=e}}class j_{constructor(e){this.persistence=e,this.Vi=new U_,this.mi=null}static fi(e){return new j_(e)}get gi(){if(this.mi)return this.mi;throw xe(60996)}addReference(e,t,s){return this.Vi.addReference(s,t),this.gi.delete(s.toString()),te.resolve()}removeReference(e,t,s){return this.Vi.removeReference(s,t),this.gi.add(s.toString()),te.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),te.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(a=>this.gi.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.gi.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return te.forEach(this.gi,s=>{const a=we.fromPath(s);return this.pi(e,a).next(l=>{l||t.removeEntry(a,Ie.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(s=>{s?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return te.or([()=>te.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Ff{constructor(e,t){this.persistence=e,this.yi=new Pa(s=>KM(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=r4(this,t)}static fi(e,t){return new Ff(e,t)}di(){}Ai(e){return te.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}Sr(e){let t=0;return this.yr(e,s=>{t++}).next(()=>t)}yr(e,t){return te.forEach(this.yi,(s,a)=>this.Dr(e,s,a).next(l=>l?te.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.si(e,c=>this.Dr(e,c,t).next(d=>{d||(s++,l.removeEntry(c,Ie.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),te.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),te.resolve()}removeReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),te.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),te.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=mf(e.data.value)),t}Dr(e,t,s){return te.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.yi.get(t);return te.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.ds=s,this.As=a}static Rs(e,t){let s=$e(),a=$e();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new B_(e,t.fromCache,s,a)}}/**
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
 */class _4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class y4{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return lx()?8:qM(mn())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ws(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.Ss(e,t,a,s).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new _4;return this.bs(e,t,c).next(d=>{if(l.result=d,this.fs)return this.Ds(e,t,c,d.size)})}).next(()=>l.result)}Ds(e,t,s,a){return s.documentReadCount<this.gs?(Oo()<=Ve.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",Do(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),te.resolve()):(Oo()<=Ve.DEBUG&&de("QueryEngine","Query:",Do(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ps*a?(Oo()<=Ve.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",Do(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Li(t))):te.resolve())}ws(e,t){if(tS(t))return te.resolve(null);let s=Li(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Cg(t,null,"F"),s=Li(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const c=$e(...l);return this.ys.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,s).next(p=>{const g=this.vs(t,d);return this.Cs(t,g,c,p.readTime)?this.ws(e,Cg(t,null,"F")):this.Fs(e,g,t,p)}))})))}Ss(e,t,s,a){return tS(t)||a.isEqual(Ie.min())?te.resolve(null):this.ys.getDocuments(e,s).next(l=>{const c=this.vs(t,l);return this.Cs(t,c,s,a)?te.resolve(null):(Oo()<=Ve.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Do(t)),this.Fs(e,c,t,jM(a,ic)).next(d=>d))})}vs(e,t){let s=new Bt(OC(e));return t.forEach((a,l)=>{pd(e,l)&&(s=s.add(l))}),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}bs(e,t,s){return Oo()<=Ve.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",Do(t)),this.ys.getDocumentsMatchingQuery(e,t,Sr.min(),s)}Fs(e,t,s,a){return this.ys.getDocumentsMatchingQuery(e,s,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="LocalStore",v4=3e8;class E4{constructor(e,t,s,a){this.persistence=e,this.Ms=t,this.serializer=a,this.xs=new It(Pe),this.Os=new Pa(l=>D_(l),k_),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new l4(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function T4(n,e,t,s){return new E4(n,e,t,s)}async function QC(n,e){const t=Ke(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(l=>(a=l,t.Ls(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const c=[],d=[];let p=$e();for(const g of a){c.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(s,p).next(g=>({ks:g,removedBatchIds:c,addedBatchIds:d}))})})}function XC(n){const e=Ke(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function S4(n,e){const t=Ke(n),s=e.snapshotVersion;let a=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Bs.newChangeBuffer({trackRemovals:!0});a=t.xs;const d=[];e.targetChanges.forEach((y,T)=>{const S=a.get(T);if(!S)return;d.push(t.Ti.removeMatchingKeys(l,y.removedDocuments,T).next(()=>t.Ti.addMatchingKeys(l,y.addedDocuments,T)));let N=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?N=N.withResumeToken(sn.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):y.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(y.resumeToken,s)),a=a.insert(T,N),function(F,V,Y){return F.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=v4?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(S,N,y)&&d.push(t.Ti.updateTargetData(l,N))});let p=br(),g=$e();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))}),d.push(A4(l,c,e.documentUpdates).next(y=>{p=y.qs,g=y.Qs})),!s.isEqual(Ie.min())){const y=t.Ti.getLastRemoteSnapshotVersion(l).next(T=>t.Ti.setTargetsMetadata(l,l.currentSequenceNumber,s));d.push(y)}return te.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(t.xs=a,l))}function A4(n,e,t){let s=$e(),a=$e();return t.forEach(l=>s=s.add(l)),e.getEntries(n,s).next(l=>{let c=br();return t.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):de(z_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{qs:c,Qs:a}})}function w4(n,e){const t=Ke(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.Ti.getTargetData(s,e).next(l=>l?(a=l,te.resolve(a)):t.Ti.allocateTargetId(s).next(c=>(a=new pr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Ti.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.xs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.xs=t.xs.insert(s.targetId,s),t.Os.set(e,s.targetId)),s})}async function xg(n,e,t){const s=Ke(n),a=s.xs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,c=>s.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!hl(c))throw c;de(z_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.xs=s.xs.remove(e),s.Os.delete(a.target)}function pS(n,e,t){const s=Ke(n);let a=Ie.min(),l=$e();return s.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,y){const T=Ke(p),S=T.Os.get(y);return S!==void 0?te.resolve(T.xs.get(S)):T.Ti.getTargetData(g,y)}(s,c,Li(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>s.Ms.getDocumentsMatchingQuery(c,e,t?a:Ie.min(),t?l:$e())).next(d=>(C4(s,mL(e),d),{documents:d,$s:l})))}function C4(n,e,t){let s=n.Ns.get(e)||Ie.min();t.forEach((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),n.Ns.set(e,s)}class mS{constructor(){this.activeTargetIds=TL()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class b4{constructor(){this.xo=new mS,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,s){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new mS,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class R4{No(e){}shutdown(){}}/**
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
 */const gS="ConnectivityMonitor";class _S{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){de(gS,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){de(gS,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let rf=null;function Og(){return rf===null?rf=function(){return 268435456+Math.round(2147483648*Math.random())}():rf++,"0x"+rf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="RestConnection",I4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class N4{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${s}/databases/${a}`,this.Go=this.databaseId.database===Vf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}zo(e,t,s,a,l){const c=Og(),d=this.jo(e,t.toUriEncodedString());de(Hm,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,a,l);const{host:g}=new URL(d),y=sl(g);return this.Jo(e,d,p,s,y).then(T=>(de(Hm,`Received RPC '${e}' ${c}: `,T),T),T=>{throw Yo(Hm,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T})}Yo(e,t,s,a,l,c){return this.zo(e,t,s,a,l)}Ho(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),s&&s.headers.forEach((a,l)=>e[l]=a)}jo(e,t){const s=I4[e];return`${this.Ko}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln="WebChannelConnection";class O4 extends N4{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=Og();return new Promise((d,p)=>{const g=new uC;g.setWithCredentials(!0),g.listenOnce(cC.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case pf.NO_ERROR:const T=g.getResponseJson();de(ln,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case pf.TIMEOUT:de(ln,`RPC '${e}' ${c} timed out`),p(new Ae(ue.DEADLINE_EXCEEDED,"Request time out"));break;case pf.HTTP_ERROR:const S=g.getStatus();if(de(ln,`RPC '${e}' ${c} failed with status:`,S,"response text:",g.getResponseText()),S>0){let N=g.getResponseJson();Array.isArray(N)&&(N=N[0]);const I=N==null?void 0:N.error;if(I&&I.status&&I.message){const F=function(Y){const ee=Y.toLowerCase().replace(/_/g,"-");return Object.values(ue).indexOf(ee)>=0?ee:ue.UNKNOWN}(I.status);p(new Ae(F,I.message))}else p(new Ae(ue.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new Ae(ue.UNAVAILABLE,"Connection failed."));break;default:xe(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{de(ln,`RPC '${e}' ${c} completed.`)}});const y=JSON.stringify(a);de(ln,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,s,15)})}T_(e,t,s){const a=Og(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=dC(),d=fC(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const y=l.join("");de(ln,`Creating RPC '${e}' stream ${a}: ${y}`,p);const T=c.createWebChannel(y,p);let S=!1,N=!1;const I=new x4({Zo:V=>{N?de(ln,`Not sending because RPC '${e}' stream ${a} is closed:`,V):(S||(de(ln,`Opening RPC '${e}' stream ${a} transport.`),T.open(),S=!0),de(ln,`RPC '${e}' stream ${a} sending:`,V),T.send(V))},Xo:()=>T.close()}),F=(V,Y,ee)=>{V.listen(Y,Q=>{try{ee(Q)}catch(re){setTimeout(()=>{throw re},0)}})};return F(T,Vu.EventType.OPEN,()=>{N||(de(ln,`RPC '${e}' stream ${a} transport opened.`),I.__())}),F(T,Vu.EventType.CLOSE,()=>{N||(N=!0,de(ln,`RPC '${e}' stream ${a} transport closed`),I.u_())}),F(T,Vu.EventType.ERROR,V=>{N||(N=!0,Yo(ln,`RPC '${e}' stream ${a} transport errored. Name:`,V.name,"Message:",V.message),I.u_(new Ae(ue.UNAVAILABLE,"The operation could not be completed")))}),F(T,Vu.EventType.MESSAGE,V=>{var Y;if(!N){const ee=V.data[0];yt(!!ee,16349);const Q=ee,re=(Q==null?void 0:Q.error)||((Y=Q[0])===null||Y===void 0?void 0:Y.error);if(re){de(ln,`RPC '${e}' stream ${a} received error:`,re);const se=re.status;let fe=function(x){const P=kt[x];if(P!==void 0)return jC(P)}(se),D=re.message;fe===void 0&&(fe=ue.INTERNAL,D="Unknown error status: "+se+" with message "+re.message),N=!0,I.u_(new Ae(fe,D)),T.close()}else de(ln,`RPC '${e}' stream ${a} received:`,ee),I.c_(ee)}}),F(d,hC.STAT_EVENT,V=>{V.stat===_g.PROXY?de(ln,`RPC '${e}' stream ${a} detected buffering proxy`):V.stat===_g.NOPROXY&&de(ln,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{I.a_()},0),I}}function qm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(n){return new UL(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,t,s=1e3,a=1.5,l=6e4){this.xi=e,this.timerId=t,this.I_=s,this.E_=a,this.d_=l,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),s=Math.max(0,Date.now()-this.V_),a=Math.max(0,t-s);a>0&&de("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,a,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS="PersistentStream";class D4{constructor(e,t,s,a,l,c,d,p){this.xi=e,this.y_=s,this.w_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new JC(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===ue.RESOURCE_EXHAUSTED?(Os(t.toString()),Os("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===ue.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.S_===t&&this.K_(s,a)},s=>{e(()=>{const a=new Ae(ue.UNKNOWN,"Fetching auth token failed: "+s.message);return this.W_(a)})})}K_(e,t){const s=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(a=>{s(()=>this.W_(a))}),this.stream.onMessage(a=>{s(()=>++this.v_==1?this.z_(a):this.onNext(a))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return de(yS,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(de(yS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class k4 extends D4{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=HL(this.serializer,e),s=function(l){if(!("targetChange"in l))return Ie.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?Fo(c.readTime):Ie.min()}(e);return this.listener.j_(t,s)}H_(e){const t={};t.database=cS(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=wg(p)?{documents:qL(l,p)}:{query:GL(l,p).gt},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=BL(l,c.resumeToken);const g=Ig(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ie.min())>0){d.readTime=jL(l,c.snapshotVersion.toTimestamp());const g=Ig(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const s=$L(this.serializer,e);s&&(t.labels=s),this.L_(t)}J_(e){const t={};t.database=cS(this.serializer),t.removeTarget=e,this.L_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{}class M4 extends P4{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.na=!1}ra(){if(this.na)throw new Ae(ue.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,s,a){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.zo(e,Ng(t,s),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ue.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new Ae(ue.UNKNOWN,l.toString())})}Yo(e,t,s,a,l){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Yo(e,Ng(t,s),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ue.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new Ae(ue.UNKNOWN,c.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class L4{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Os(t),this.oa=!1):de("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="RemoteStore";class V4{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=l,this.Ea.No(c=>{s.enqueueAndForget(async()=>{Ac(this)&&(de(Jo,"Restarting streams for network reachability change."),await async function(p){const g=Ke(p);g.Ta.add(4),await Sc(g),g.da.set("Unknown"),g.Ta.delete(4),await yd(g)}(this))})}),this.da=new L4(s,a)}}async function yd(n){if(Ac(n))for(const e of n.Ia)await e(!0)}async function Sc(n){for(const e of n.Ia)await e(!1)}function eb(n,e){const t=Ke(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),G_(t)?q_(t):fl(t).M_()&&H_(t,e))}function F_(n,e){const t=Ke(n),s=fl(t);t.Pa.delete(e),s.M_()&&tb(t,e),t.Pa.size===0&&(s.M_()?s.N_():Ac(t)&&t.da.set("Unknown"))}function H_(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fl(n).H_(e)}function tb(n,e){n.Aa.Ke(e),fl(n).J_(e)}function q_(n){n.Aa=new PL({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),fl(n).start(),n.da._a()}function G_(n){return Ac(n)&&!fl(n).F_()&&n.Pa.size>0}function Ac(n){return Ke(n).Ta.size===0}function nb(n){n.Aa=void 0}async function U4(n){n.da.set("Online")}async function j4(n){n.Pa.forEach((e,t)=>{H_(n,e)})}async function B4(n,e){nb(n),G_(n)?(n.da.ca(e),q_(n)):n.da.set("Unknown")}async function z4(n,e,t){if(n.da.set("Online"),e instanceof zC&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Pa.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Pa.delete(d),a.Aa.removeTarget(d))}(n,e)}catch(s){de(Jo,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await vS(n,s)}else if(e instanceof _f?n.Aa.Xe(e):e instanceof BC?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(Ie.min()))try{const s=await XC(n.localStore);t.compareTo(s)>=0&&await function(l,c){const d=l.Aa.It(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=l.Pa.get(g);y&&l.Pa.set(g,y.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const y=l.Pa.get(p);if(!y)return;l.Pa.set(p,y.withResumeToken(sn.EMPTY_BYTE_STRING,y.snapshotVersion)),tb(l,p);const T=new pr(y.target,p,g,y.sequenceNumber);H_(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(s){de(Jo,"Failed to raise snapshot:",s),await vS(n,s)}}async function vS(n,e,t){if(!hl(e))throw e;n.Ta.add(1),await Sc(n),n.da.set("Offline"),t||(t=()=>XC(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{de(Jo,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await yd(n)})}async function ES(n,e){const t=Ke(n);t.asyncQueue.verifyOperationInProgress(),de(Jo,"RemoteStore received new credentials");const s=Ac(t);t.Ta.add(3),await Sc(t),s&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await yd(t)}async function F4(n,e){const t=Ke(n);e?(t.Ta.delete(2),await yd(t)):e||(t.Ta.add(2),await Sc(t),t.da.set("Unknown"))}function fl(n){return n.Ra||(n.Ra=function(t,s,a){const l=Ke(t);return l.ra(),new k4(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{e_:U4.bind(null,n),n_:j4.bind(null,n),i_:B4.bind(null,n),j_:z4.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),G_(n)?q_(n):n.da.set("Unknown")):(await n.Ra.stop(),nb(n))})),n.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Ea,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new K_(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ae(ue.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ib(n,e){if(Os("AsyncQueue",`${e}: ${n}`),hl(n))return new Ae(ue.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{static emptySet(e){return new Ho(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||we.comparator(t.key,s.key):(t,s)=>we.comparator(t.key,s.key),this.keyedMap=Uu(),this.sortedSet=new It(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ho)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ho;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(){this.ma=new It(we.comparator)}track(e){const t=e.doc.key,s=this.ma.get(t);s?e.type!==0&&s.type===3?this.ma=this.ma.insert(t,e):e.type===3&&s.type!==1?this.ma=this.ma.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ma=this.ma.remove(t):e.type===1&&s.type===2?this.ma=this.ma.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):xe(63341,{Vt:e,fa:s}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,s)=>{e.push(s)}),e}}class el{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new el(e,t,Ho.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class q4{constructor(){this.queries=SS(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,s){const a=Ke(t),l=a.queries;a.queries=SS(),l.forEach((c,d)=>{for(const p of d.ya)p.onError(s)})})(this,new Ae(ue.ABORTED,"Firestore shutting down"))}}function SS(){return new Pa(n=>xC(n),dd)}async function G4(n,e){const t=Ke(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.wa()&&e.Sa()&&(s=2):(l=new H4,s=e.Sa()?0:1);try{switch(s){case 0:l.pa=await t.onListen(a,!0);break;case 1:l.pa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=ib(c,`Initialization of query '${Do(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.ya.push(e),e.Da(t.onlineState),l.pa&&e.va(l.pa)&&$_(t)}async function K4(n,e){const t=Ke(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.ya.indexOf(e);c>=0&&(l.ya.splice(c,1),l.ya.length===0?a=e.Sa()?0:1:!l.wa()&&e.Sa()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function $4(n,e){const t=Ke(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.ya)d.va(a)&&(s=!0);c.pa=a}}s&&$_(t)}function Y4(n,e,t){const s=Ke(n),a=s.queries.get(e);if(a)for(const l of a.ya)l.onError(t);s.queries.delete(e)}function $_(n){n.ba.forEach(e=>{e.next()})}var Dg,AS;(AS=Dg||(Dg={})).Ca="default",AS.Cache="cache";class W4{constructor(e,t,s){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=s||{}}va(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new el(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const s=t!=="Offline";return(!this.options.La||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=el.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==Dg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.key=e}}class rb{constructor(e){this.key=e}}class Q4{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=$e(),this.mutatedKeys=$e(),this.Ha=OC(e),this.Ja=new Ho(this.Ha)}get Ya(){return this.Ga}Za(e,t){const s=t?t.Xa:new TS,a=t?t.Ja:this.Ja;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,T)=>{const S=a.get(y),N=pd(this.query,T)?T:null,I=!!S&&this.mutatedKeys.has(S.key),F=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let V=!1;S&&N?S.data.isEqual(N.data)?I!==F&&(s.track({type:3,doc:N}),V=!0):this.eu(S,N)||(s.track({type:2,doc:N}),V=!0,(p&&this.Ha(N,p)>0||g&&this.Ha(N,g)<0)&&(d=!0)):!S&&N?(s.track({type:0,doc:N}),V=!0):S&&!N&&(s.track({type:1,doc:S}),V=!0,(p||g)&&(d=!0)),V&&(N?(c=c.add(N),l=F?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),s.track({type:1,doc:y})}return{Ja:c,Xa:s,Cs:d,mutatedKeys:l}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const c=e.Xa.ga();c.sort((y,T)=>function(N,I){const F=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return xe(20277,{Vt:V})}};return F(N)-F(I)}(y.type,T.type)||this.Ha(y.doc,T.doc)),this.tu(s),a=a!=null&&a;const d=t&&!a?this.nu():[],p=this.ja.size===0&&this.current&&!a?1:0,g=p!==this.za;return this.za=p,c.length!==0||g?{snapshot:new el(this.query,e.Ja,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),ru:d}:{ru:d}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new TS,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=$e(),this.Ja.forEach(s=>{this.iu(s.key)&&(this.ja=this.ja.add(s.key))});const t=[];return e.forEach(s=>{this.ja.has(s)||t.push(new rb(s))}),this.ja.forEach(s=>{e.has(s)||t.push(new sb(s))}),t}su(e){this.Ga=e.$s,this.ja=$e();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return el.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Y_="SyncEngine";class X4{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Z4{constructor(e){this.key=e,this._u=!1}}class J4{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.au={},this.uu=new Pa(d=>xC(d),dd),this.cu=new Map,this.lu=new Set,this.hu=new It(we.comparator),this.Pu=new Map,this.Tu=new U_,this.Iu={},this.Eu=new Map,this.du=Zo.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function eV(n,e,t=!0){const s=cb(n);let a;const l=s.uu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.ou()):a=await ab(s,e,t,!0),a}async function tV(n,e){const t=cb(n);await ab(t,e,!0,!1)}async function ab(n,e,t,s){const a=await w4(n.localStore,Li(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await nV(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&eb(n.remoteStore,a),d}async function nV(n,e,t,s,a){n.Ru=(T,S,N)=>async function(F,V,Y,ee){let Q=V.view.Za(Y);Q.Cs&&(Q=await pS(F.localStore,V.query,!1).then(({documents:D})=>V.view.Za(D,Q)));const re=ee&&ee.targetChanges.get(V.targetId),se=ee&&ee.targetMismatches.get(V.targetId)!=null,fe=V.view.applyChanges(Q,F.isPrimaryClient,re,se);return CS(F,V.targetId,fe.ru),fe.snapshot}(n,T,S,N);const l=await pS(n.localStore,e,!0),c=new Q4(e,l.$s),d=c.Za(l.documents),p=Tc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);CS(n,t,g.ru);const y=new X4(e,t,c);return n.uu.set(e,y),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),g.snapshot}async function iV(n,e,t){const s=Ke(n),a=s.uu.get(e),l=s.cu.get(a.targetId);if(l.length>1)return s.cu.set(a.targetId,l.filter(c=>!dd(c,e))),void s.uu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await xg(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&F_(s.remoteStore,a.targetId),kg(s,a.targetId)}).catch(ld)):(kg(s,a.targetId),await xg(s.localStore,a.targetId,!0))}async function sV(n,e){const t=Ke(n),s=t.uu.get(e),a=t.cu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),F_(t.remoteStore,s.targetId))}async function ob(n,e){const t=Ke(n);try{const s=await S4(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Pu.get(l);c&&(yt(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c._u=!0:a.modifiedDocuments.size>0?yt(c._u,14607):a.removedDocuments.size>0&&(yt(c._u,42227),c._u=!1))}),await ub(t,s,e)}catch(s){await ld(s)}}function wS(n,e,t){const s=Ke(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.uu.forEach((l,c)=>{const d=c.view.Da(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=Ke(c);p.onlineState=d;let g=!1;p.queries.forEach((y,T)=>{for(const S of T.ya)S.Da(d)&&(g=!0)}),g&&$_(p)}(s.eventManager,e),a.length&&s.au.j_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function rV(n,e,t){const s=Ke(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Pu.get(e),l=a&&a.key;if(l){let c=new It(we.comparator);c=c.insert(l,dn.newNoDocument(l,Ie.min()));const d=$e().add(l),p=new _d(Ie.min(),new Map,new It(Pe),c,d);await ob(s,p),s.hu=s.hu.remove(l),s.Pu.delete(e),W_(s)}else await xg(s.localStore,e,!1).then(()=>kg(s,e,t)).catch(ld)}function kg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.cu.get(e))n.uu.delete(s),t&&n.au.Vu(s,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(s=>{n.Tu.containsKey(s)||lb(n,s)})}function lb(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&(F_(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),W_(n))}function CS(n,e,t){for(const s of t)s instanceof sb?(n.Tu.addReference(s.key,e),aV(n,s)):s instanceof rb?(de(Y_,"Document no longer in limbo: "+s.key),n.Tu.removeReference(s.key,e),n.Tu.containsKey(s.key)||lb(n,s.key)):xe(19791,{mu:s})}function aV(n,e){const t=e.key,s=t.path.canonicalString();n.hu.get(t)||n.lu.has(s)||(de(Y_,"New document in limbo: "+t),n.lu.add(s),W_(n))}function W_(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new we(At.fromString(e)),s=n.du.next();n.Pu.set(s,new Z4(t)),n.hu=n.hu.insert(t,s),eb(n.remoteStore,new pr(Li(P_(t.path)),s,"TargetPurposeLimboResolution",ud.le))}}async function ub(n,e,t){const s=Ke(n),a=[],l=[],c=[];s.uu.isEmpty()||(s.uu.forEach((d,p)=>{c.push(s.Ru(p,e,t).then(g=>{var y;if((g||t)&&s.isPrimaryClient){const T=g?!g.fromCache:(y=t==null?void 0:t.targetChanges.get(p.targetId))===null||y===void 0?void 0:y.current;s.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(g){a.push(g);const T=B_.Rs(p.targetId,g);l.push(T)}}))}),await Promise.all(c),s.au.j_(a),await async function(p,g){const y=Ke(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>te.forEach(g,S=>te.forEach(S.ds,N=>y.persistence.referenceDelegate.addReference(T,S.targetId,N)).next(()=>te.forEach(S.As,N=>y.persistence.referenceDelegate.removeReference(T,S.targetId,N)))))}catch(T){if(!hl(T))throw T;de(z_,"Failed to update sequence numbers: "+T)}for(const T of g){const S=T.targetId;if(!T.fromCache){const N=y.xs.get(S),I=N.snapshotVersion,F=N.withLastLimboFreeSnapshotVersion(I);y.xs=y.xs.insert(S,F)}}}(s.localStore,l))}async function oV(n,e){const t=Ke(n);if(!t.currentUser.isEqual(e)){de(Y_,"User change. New user:",e.toKey());const s=await QC(t.localStore,e);t.currentUser=e,function(l,c){l.Eu.forEach(d=>{d.forEach(p=>{p.reject(new Ae(ue.CANCELLED,c))})}),l.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ub(t,s.ks)}}function lV(n,e){const t=Ke(n),s=t.Pu.get(e);if(s&&s._u)return $e().add(s.key);{let a=$e();const l=t.cu.get(e);if(!l)return a;for(const c of l){const d=t.uu.get(c);a=a.unionWith(d.view.Ya)}return a}}function cb(n){const e=Ke(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ob.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rV.bind(null,e),e.au.j_=$4.bind(null,e.eventManager),e.au.Vu=Y4.bind(null,e.eventManager),e}class Hf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ZC(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return T4(this.persistence,new y4,e.initialUser,this.serializer)}yu(e){return new WC(j_.fi,this.serializer)}pu(e){return new b4}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hf.provider={build:()=>new Hf};class uV extends Hf{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){yt(this.persistence.referenceDelegate instanceof Ff,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new i4(s,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?wn.withCacheSize(this.cacheSizeBytes):wn.DEFAULT;return new WC(s=>Ff.fi(s,t),this.serializer)}}class Pg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>wS(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=oV.bind(null,this.syncEngine),await F4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new q4}()}createDatastore(e){const t=ZC(e.databaseInfo.databaseId),s=function(l){return new O4(l)}(e.databaseInfo);return function(l,c,d,p){return new M4(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,l,c,d){return new V4(s,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>wS(this.syncEngine,t,0),function(){return _S.C()?new _S:new R4}())}createSyncEngine(e,t){return function(a,l,c,d,p,g,y){const T=new J4(a,l,c,d,p,g);return y&&(T.Au=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=Ke(a);de(Jo,"RemoteStore shutting down."),l.Ta.add(5),await Sc(l),l.Ea.shutdown(),l.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Pg.provider={build:()=>new Pg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cV{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Os("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="FirestoreClient";class hV{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=cn.UNAUTHENTICATED,this.clientId=_C.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async c=>{de(Rr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(s,c=>(de(Rr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ea;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ib(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Gm(n,e){n.asyncQueue.verifyOperationInProgress(),de(Rr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async a=>{s.isEqual(a)||(await QC(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function bS(n,e){n.asyncQueue.verifyOperationInProgress();const t=await fV(n);de(Rr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>ES(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,a)=>ES(e.remoteStore,a)),n._onlineComponents=e}async function fV(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){de(Rr,"Using user provided OfflineComponentProvider");try{await Gm(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===ue.FAILED_PRECONDITION||a.code===ue.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Yo("Error using user provided cache. Falling back to memory cache: "+t),await Gm(n,new Hf)}}else de(Rr,"Using default OfflineComponentProvider"),await Gm(n,new uV(void 0));return n._offlineComponents}async function dV(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(de(Rr,"Using user provided OnlineComponentProvider"),await bS(n,n._uninitializedComponentsProvider._online)):(de(Rr,"Using default OnlineComponentProvider"),await bS(n,new Pg))),n._onlineComponents}async function pV(n){const e=await dV(n),t=e.eventManager;return t.onListen=eV.bind(null,e.syncEngine),t.onUnlisten=iV.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=tV.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=sV.bind(null,e.syncEngine),t}function mV(n,e,t={}){const s=new Ea;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const y=new cV({next:S=>{y.Cu(),c.enqueueAndForget(()=>K4(l,T));const N=S.docs.has(d);!N&&S.fromCache?g.reject(new Ae(ue.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&S.fromCache&&p&&p.source==="server"?g.reject(new Ae(ue.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),T=new W4(P_(d.path),y,{includeMetadataChanges:!0,La:!0});return G4(l,T)}(await pV(n),n.asyncQueue,e,t,s)),s.promise}/**
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
 */function hb(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gV(n,e,t){if(!t)throw new Ae(ue.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function _V(n,e,t,s){if(e===!0&&s===!0)throw new Ae(ue.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function IS(n){if(!we.isDocumentKey(n))throw new Ae(ue.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function yV(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":xe(12329,{type:typeof n})}function Mg(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Ae(ue.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=yV(n);throw new Ae(ue.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="firestore.googleapis.com",NS=!0;class xS{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new Ae(ue.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fb,this.ssl=NS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:NS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=YC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<t4)throw new Ae(ue.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_V("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new Ae(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new Ae(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new Ae(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Q_{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ae(ue.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ae(ue.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new xM;switch(s.type){case"firstParty":return new PM(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Ae(ue.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=RS.get(t);s&&(de("ComponentProvider","Removing Datastore"),RS.delete(t),s.terminate())}(this),Promise.resolve()}}function vV(n,e,t,s={}){var a;n=Mg(n,Q_);const l=sl(e),c=n._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;l&&(Gg(`https://${p}`),Kg("Firestore",!0)),c.host!==fb&&c.host!==p&&Yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:s});if(!Sa(g,d)&&(n._setSettings(g),s.mockUserToken)){let y,T;if(typeof s.mockUserToken=="string")y=s.mockUserToken,T=cn.MOCK_USER;else{y=fA(s.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new Ae(ue.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new cn(S)}n._authCredentials=new OM(new mC(y,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new X_(this.firestore,e,this._query)}}class bs{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bs(this.firestore,e,this._key)}}class oc extends X_{constructor(e,t,s){super(e,t,P_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bs(this.firestore,null,new we(e))}withConverter(e){return new oc(this.firestore,e,this._path)}}function db(n,e,...t){if(n=Hi(n),arguments.length===1&&(e=_C.newId()),gV("doc","path",e),n instanceof Q_){const s=At.fromString(e,...t);return IS(s),new bs(n,null,new we(s))}{if(!(n instanceof bs||n instanceof oc))throw new Ae(ue.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(At.fromString(e,...t));return IS(s),new bs(n.firestore,n instanceof oc?n.converter:null,new we(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="AsyncQueue";class DS{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new JC(this,"async_queue_retry"),this.ec=()=>{const s=qm();s&&de(OS,"Visibility state changed to "+s.visibilityState),this.C_.p_()},this.tc=e;const t=qm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=qm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new Ea;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!hl(e))throw e;de(OS,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(s=>{throw this.Ju=s,this.Yu=!1,Os("INTERNAL UNHANDLED ERROR: ",kS(s)),s}).then(s=>(this.Yu=!1,s))));return this.tc=t,t}enqueueAfterDelay(e,t,s){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const a=K_.createAndSchedule(this,e,t,s,l=>this.oc(l));return this.Hu.push(a),a}nc(){this.Ju&&xe(47125,{_c:kS(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function kS(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class pb extends Q_{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new DS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new DS(e),this._firestoreClient=void 0,await e}}}function EV(n,e){const t=typeof n=="object"?n:Qg(),s=typeof n=="string"?n:Vf,a=Zf(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=uA("firestore");l&&vV(a,...l)}return a}function TV(n){if(n._terminated)throw new Ae(ue.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||SV(n),n._firestoreClient}function SV(n){var e,t,s;const a=n._freezeSettings(),l=function(d,p,g,y){return new QM(d,p,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,hb(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new hV(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qf(sn.fromBase64String(e))}catch(t){throw new Ae(ue.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qf(sn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Ae(ue.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new En(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ae(ue.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ae(ue.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
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
 */class wV{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0}(this._values,e._values)}}const CV=new RegExp("[~\\*/\\[\\]]");function bV(n,e,t){if(e.search(CV)>=0)throw PS(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new mb(...e.split("."))._internalPath}catch{throw PS(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function PS(n,e,t,s,a){let l=`Function ${e}() called with invalid data`;l+=". ";let c="";return new Ae(ue.INVALID_ARGUMENT,l+n+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new bs(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(_b("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class RV extends gb{data(){return super.data()}}function _b(n,e){return typeof e=="string"?bV(n,e):e instanceof mb?e._internalPath:e._delegate._internalPath}class IV{convertValue(e,t="none"){switch(Cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw xe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ec(e,(a,l)=>{s[a]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,a;const l=(a=(s=(t=e.fields)===null||t===void 0?void 0:t[Eg].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(c=>Rt(c.doubleValue));return new wV(l)}convertGeoPoint(e){return new AV(Rt(e.latitude),Rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=hd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(sc(e));default:return null}}convertTimestamp(e){const t=Ar(e);return new bn(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=At.fromString(e);yt($C(s),9688,{name:e});const a=new rc(s.get(1),s.get(3)),l=new we(s.popFirst(5));return a.isEqual(t)||Os(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NV{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yb extends gb{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xV(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(_b("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class xV extends yb{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(n){n=Mg(n,bs);const e=Mg(n.firestore,pb);return mV(TV(e),n._key).then(t=>DV(e,n,t))}class OV extends IV{constructor(e){super(),this.firestore=e}convertBytes(e){return new qf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new bs(this.firestore,null,t)}}function DV(n,e,t){const s=t.docs.get(e._key),a=new OV(n);return new yb(n,a,e._key,s,new NV(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){cl=a})(Ir),Er(new Is("firestore",(s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new pb(new DM(s.getProvider("auth-internal")),new MM(c,s.getProvider("app-check-internal")),function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new Ae(ue.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rc(g.options.projectId,y)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Jn(U0,j0,e),Jn(U0,j0,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="firebasestorage.googleapis.com",kV="storageBucket",PV=2*60*1e3,MV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends Fi{constructor(e,t,s=0){super(Km(e),`Firebase Storage: ${t} (${Km(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qi.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Km(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Bi;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Bi||(Bi={}));function Km(n){return"storage/"+n}function LV(){const n="An unknown error occurred, please check the error payload for server response.";return new qi(Bi.UNKNOWN,n)}function VV(){return new qi(Bi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function UV(){return new qi(Bi.CANCELED,"User canceled the upload/download.")}function jV(n){return new qi(Bi.INVALID_URL,"Invalid URL '"+n+"'.")}function BV(n){return new qi(Bi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function MS(n){return new qi(Bi.INVALID_ARGUMENT,n)}function Tb(){return new qi(Bi.APP_DELETED,"The Firebase app was deleted.")}function zV(n){return new qi(Bi.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=hi.makeFromUrl(e,t)}catch{return new hi(e,"")}if(s.path==="")return s;throw BV(e)}static makeFromUrl(e,t){let s=null;const a="([A-Za-z0-9.\\-_]+)";function l(re){re.path.charAt(re.path.length-1)==="/"&&(re.path_=re.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+a+c,"i"),p={bucket:1,path:3};function g(re){re.path_=decodeURIComponent(re.path)}const y="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",N=new RegExp(`^https?://${T}/${y}/b/${a}/o${S}`,"i"),I={bucket:1,path:3},F=t===Eb?"(?:storage.googleapis.com|storage.cloud.google.com)":t,V="([^?#]*)",Y=new RegExp(`^https?://${F}/${a}/${V}`,"i"),Q=[{regex:d,indices:p,postModify:l},{regex:N,indices:I,postModify:g},{regex:Y,indices:{bucket:1,path:2},postModify:g}];for(let re=0;re<Q.length;re++){const se=Q[re],fe=se.regex.exec(e);if(fe){const D=fe[se.indices.bucket];let R=fe[se.indices.path];R||(R=""),s=new hi(D,R),se.postModify(s);break}}if(s==null)throw jV(e);return s}}class FV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HV(n,e,t){let s=1,a=null,l=null,c=!1,d=0;function p(){return d===2}let g=!1;function y(...V){g||(g=!0,e.apply(null,V))}function T(V){a=setTimeout(()=>{a=null,n(N,p())},V)}function S(){l&&clearTimeout(l)}function N(V,...Y){if(g){S();return}if(V){S(),y.call(null,V,...Y);return}if(p()||c){S(),y.call(null,V,...Y);return}s<64&&(s*=2);let Q;d===1?(d=2,Q=0):Q=(s+Math.random())*1e3,T(Q)}let I=!1;function F(V){I||(I=!0,S(),!g&&(a!==null?(V||(d=2),clearTimeout(a),T(0)):V||(d=1)))}return T(0),l=setTimeout(()=>{c=!0,F(!0)},t),F}function qV(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GV(n){return n!==void 0}function LS(n,e,t,s){if(s<e)throw MS(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw MS(`Invalid value for '${n}'. Expected ${t} or less.`)}function KV(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const a=e(s)+"="+e(n[s]);t=t+a+"&"}return t=t.slice(0,-1),t}var Gf;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Gf||(Gf={}));/**
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
 */function $V(n,e){const t=n>=500&&n<600,a=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||a||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YV{constructor(e,t,s,a,l,c,d,p,g,y,T,S=!0,N=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=a,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=y,this.connectionFactory_=T,this.retry=S,this.isUsingEmulator=N,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,F)=>{this.resolve_=I,this.reject_=F,this.start_()})}start_(){const e=(s,a)=>{if(a){s(!1,new af(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===Gf.NO_ERROR,p=l.getStatus();if(!d||$V(p,this.additionalRetryCodes_)&&this.retry){const y=l.getErrorCode()===Gf.ABORT;s(!1,new af(!1,null,y));return}const g=this.successCodes_.indexOf(p)!==-1;s(!0,new af(g,l))})},t=(s,a)=>{const l=this.resolve_,c=this.reject_,d=a.connection;if(a.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());GV(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=LV();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(a.canceled){const p=this.appDelete_?Tb():UV();c(p)}else{const p=VV();c(p)}};this.canceled_?t(!1,new af(!1,null,!0)):this.backoffId_=HV(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class af{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function WV(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function QV(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function XV(n,e){e&&(n["X-Firebase-GMPID"]=e)}function ZV(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function JV(n,e,t,s,a,l,c=!0,d=!1){const p=KV(n.urlParams),g=n.url+p,y=Object.assign({},n.headers);return XV(y,e),WV(y,t),QV(y,l),ZV(y,s),new YV(g,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,a,c,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eU(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function tU(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Kf{constructor(e,t){this._service=e,t instanceof hi?this._location=t:this._location=hi.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Kf(e,t)}get root(){const e=new hi(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tU(this._location.path)}get storage(){return this._service}get parent(){const e=eU(this._location.path);if(e===null)return null;const t=new hi(this._location.bucket,e);return new Kf(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw zV(e)}}function VS(n,e){const t=e==null?void 0:e[kV];return t==null?null:hi.makeFromBucketSpec(t,n)}function nU(n,e,t,s={}){n.host=`${e}:${t}`;const a=sl(e);a&&(Gg(`https://${n.host}`),Kg("Storage",!0)),n._isUsingEmulator=!0,n._protocol=a?"https":"http";const{mockUserToken:l}=s;l&&(n._overrideAuthToken=typeof l=="string"?l:fA(l,n.app.options.projectId))}class iU{constructor(e,t,s,a,l,c=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=a,this._firebaseVersion=l,this._isUsingEmulator=c,this._bucket=null,this._host=Eb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=PV,this._maxUploadRetryTime=MV,this._requests=new Set,a!=null?this._bucket=hi.makeFromBucketSpec(a,this._host):this._bucket=VS(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=hi.makeFromBucketSpec(this._url,e):this._bucket=VS(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){LS("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){LS("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Kf(this,e)}_makeRequest(e,t,s,a,l=!0){if(this._deleted)return new FV(Tb());{const c=JV(e,this._appId,s,a,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[s,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,a).getPromise()}}const US="@firebase/storage",jS="0.13.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb="storage";function sU(n=Qg(),e){n=Hi(n);const s=Zf(n,Sb).getImmediate({identifier:e}),a=uA("storage");return a&&rU(s,...a),s}function rU(n,e,t,s={}){nU(n,e,t,s)}function aU(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),a=n.getProvider("app-check-internal");return new iU(t,s,a,e,Ir)}function oU(){Er(new Is(Sb,aU,"PUBLIC").setMultipleInstances(!0)),Jn(US,jS,""),Jn(US,jS,"esm2017")}oU();const lU={apiKey:"AIzaSyDWN5GCnrhUqKZlOt8Rxb0n748lhPf9B58",authDomain:"to-do-list-9cf11.firebaseapp.com",databaseURL:"https://to-do-list-9cf11-default-rtdb.firebaseio.com",projectId:"to-do-list-9cf11",storageBucket:"to-do-list-9cf11.firebasestorage.app",messagingSenderId:"44862500438",appId:"1:44862500438:web:ccb0f012d9c8e7cfe215f7",measurementId:"G-HB8NT8L1FD"},uU={apiKey:"AIzaSyC_SdildU9oD7BID8i4GdReOYM0_qlguN0",authDomain:"databased-react.firebaseapp.com",databaseURL:"https://databased-react-default-rtdb.firebaseio.com",projectId:"databased-react",storageBucket:"databased-react.appspot.com",messagingSenderId:"82890993147",appId:"1:82890993147:web:77b68d26108894eeeaef5e",measurementId:"G-Y0JTK4KL1P"},Ab=Wg(lU,"FIRST_APP"),wb=EV(Ab),Ou=IM(Ab),cU=Wg(uU,"SECOND_APP");sU(cU);const wc=M.createContext(),Cb=()=>{const{user:n,setHideNavBar:e,setHideSideBar:t,setPages:s}=M.useContext(Ma),[a,l]=M.useState(!1),[c,d]=M.useState(!1),[p,g]=M.useState(!1),[y,T]=M.useState(!1),[S,N]=M.useState(!1),[I,F]=M.useState(!1),[V,Y]=M.useState(!1),[ee,Q]=M.useState(!1),[re,se]=M.useState("Pending"),[fe,D]=M.useState(null),[R,x]=M.useState([]),[P,U]=M.useState(R.length!=0?[...R]:[]),[j,b]=M.useState([]),[ve,ye]=M.useState([]),[K,ae]=M.useState([]),[pe,Ue]=M.useState([{type:"Pending",ind:!0},{type:"Finished",ind:!1},{type:"All Tasks",ind:!1}]),k={writeTaskPrompt:a,setWriteTaskPrompt:l,editTaskPrompt:c,setEditTaskPrompt:d,sortTaskPrompt:p,setSortTaskPrompt:g,sortingTypeBar:y,setSortingTypeBar:T,type:re,setType:se,searching:S,setSearching:N,sorting:I,setSorting:F,selecting:V,setSelecting:Y,editing:ee,setEditing:Q,numberOfChanges:fe,setNumberOfChanges:D,tasks:R,setTasks:x,filteredTask:j,setFilteredTask:b,updatedTasks:P,setUpdatedTasks:U,selectedTasks:ve,setSelectedTasks:ye,changes:K,setChanges:ae,sortingTypes:pe,setSortingTypes:Ue,unselectAll:ne};function ne(){}return M.useEffect(()=>{s(ie=>ie.map(he=>he.name==="Tasks"?{...he,ind:!0}:{...he})),(async()=>{try{const ie=db(wb,"Users","Mav3CkHiEkOgsggTfW0q0pioWFL2");let Re=(await vb(ie)).data().tasks;x([...Re])}catch(ie){console.log(ie)}})()},[]),A.jsx(A.Fragment,{children:A.jsx(wc.Provider,{value:k,children:A.jsx("div",{className:bu.tasksWrapper,children:A.jsxs("div",{className:bu.tasksEditor,children:[A.jsxs("h2",{className:bu.titleWrapper,children:["Tasks",A.jsx("i",{className:"fa fa-bars",onClick:()=>{T(!y)}}),A.jsx(gN,{})]}),A.jsx(zN,{}),A.jsx("div",{className:bu.searchWrapper,children:A.jsxs("div",{children:[A.jsx("label",{htmlFor:"searchBar",children:A.jsx("i",{className:"fa fa-search"})}),A.jsx("input",{id:"search-bar",type:"text",placeholder:"Type Task..."}),A.jsx(Ne,{content:"Search",className:bu.Search_button,func:()=>{handleSearch(),handleIsSorting()}})]})}),A.jsx(uN,{}),A.jsx(wN,{}),A.jsx(cN,{}),A.jsx(_N,{})]})})})})},hU="_foldersWrapper_161kt_17",fU="_foldersNav_161kt_75",dU="_horizontalLine_161kt_93",pU="_right_161kt_121",mU="_foldersBottomNav_161kt_139",gU="_left_161kt_153",_U="_uncheck_161kt_153",yU="_foldersBox_161kt_199",vU="_folderPathWrapper_161kt_211",EU="_hideFolderInput_161kt_241",TU="_folderInput_161kt_249",SU="_close_161kt_249",AU="_folder_161kt_17",wU="_open_161kt_291",CU="_selected_161kt_355",bU="_fullContent_161kt_375",St={foldersWrapper:hU,foldersNav:fU,horizontalLine:dU,right:pU,foldersBottomNav:mU,left:gU,uncheck:_U,foldersBox:yU,folderPathWrapper:vU,hideFolderInput:EU,folderInput:TU,close:SU,folder:AU,open:wU,selected:CU,fullContent:bU},bb=()=>{const{setPages:n}=M.useContext(Ma),e=M.useRef(null),[t,s]=M.useState(null),[a,l]=M.useState(null),[c,d]=M.useState(!1),[p,g]=M.useState(!1),[y,T]=M.useState(!1),[S,N]=M.useState("Folders/"),[I,F]=M.useState([{name:"School Works",dateCreated:null,isSelected:!1,id:839259432,type:"folder",path:"Folders/"},{name:"Office Works",dateCreated:null,isSelected:!1,id:395732794,type:"folder",path:"Folders/"},{name:"Home Works",dateCreated:null,isSelected:!1,id:328584320,type:"folder",path:"Folders/"},{name:"Mga kakupalan",dateCreated:null,isSelected:!1,id:324325343,type:"folder",path:"Folders/School Works/"}]),[V,Y]=M.useState([]),[ee,Q]=M.useState([{name:"Folders",path:"Folders/"}]),[re,se]=M.useState([]);function fe(b){let ve=I,ye=[];for(let K in ve)b.id==ve[K].id&&(ve[K].isSelected=!ve[K].isSelected);for(let K in I)I[K].isSelected&&ye.push(I[K].id);console.log(),se([...ye]),F([...ve])}function D(b){F(K=>K.map(ae=>({...ae,isSelected:!!b})));let ve=I,ye=[];for(let K in ve)ve[K].isSelected=!!b,b&&ye.push(ve[K].id);se([...ye])}function R(b){console.log(S);const ve={name:b.target.value,dateCreated:null,isSelected:!1,id:Math.floor(Math.random()*1e6),type:"folder",path:S},ye=b.target.value;b.key=="Enter"&&(ye!=""?F(ae=>[ve,...ae]):T(!1),T(!1),b.target.value="")}function x(){let b=I;for(let ve in re)for(let ye in b)re[ve]==b[ye].id&&b.splice(ye,1);se([]),F([...b])}function P(b,ve){const ye=b.target.value,K=b.key;console.log(ve.name),K=="Enter"&&(ye!=""?F(ae=>ae.map(pe=>ve.name==pe.name?{...pe,name:ye}:{...pe})):l(null),s(null))}function U(b){let ve=[],ye=ee;for(let K in I)I[K].path==S&&ve.push(I[K]);for(let K in ee)if(ee[K].path==b.path){for(let ae=ee.length-1;ae!=K;ae--)ye.splice(ae,1);break}Q([...ye]),Y([...ve])}function j(b){b!=null&&b.name&&N(S+(b==null?void 0:b.name)+"/"),Q(ye=>[...ye,{name:b==null?void 0:b.name,path:(b==null?void 0:b.path)+(b==null?void 0:b.name)+"/"}]);let ve=[];for(let ye in I)I[ye].path==S&&ve.push(I[ye]);Y([...ve])}return M.useEffect(()=>{if(S!=""){let b=[];for(let ve in I)I[ve].path===S&&b.push(I[ve]);console.log(I),Y([...b])}},[S,I]),M.useEffect(()=>{n(b=>b.map(ve=>ve.name==="Folders"?{...ve,ind:!0}:{...ve}))},[]),A.jsx(A.Fragment,{children:A.jsxs("div",{className:St.foldersWrapper,children:[A.jsx(RU,{createFolder:R,setShowFolderInput:T}),p?A.jsx(IU,{selecting:p,setSelecting:g,handleSelectingAll:D,deleteSelectedFolder:x}):A.jsx("div",{className:St.foldersBottomNav,children:A.jsx("button",{onClick:()=>{g(!0)},children:"Select Folders"})}),A.jsxs("div",{className:St.foldersBox,children:[A.jsx("div",{className:St.folderPathWrapper,children:A.jsx("h3",{children:ee.map(b=>b.path=="Folders/"?A.jsx("span",{children:A.jsxs("span",{onClick:()=>{N(b.path),U(b)},children:[b.name," "]})},b.name+b.path):A.jsxs("span",{children:["/ ",A.jsxs("span",{onClick:()=>{N(b.path),U(b)},children:[b.name," "]})]},b.name+b.path))})}),A.jsxs("div",{className:y?St.folderInput:St.hideFolderInput,children:[A.jsx("i",{className:"fa fa-folder"}),A.jsx("input",{type:"text",ref:e,id:"folderInput",onBlur:()=>{T(!1),e.current.value=""},onKeyDown:b=>{R(b)}}),A.jsx("i",{className:`fa fa-close ${St.close}`,onClick:()=>{T(!1)}})]}),V==null?void 0:V.map((b,ve)=>A.jsxs("label",{htmlFor:t!=null?b.id:null,className:b.isSelected?`${St.selected} ${St.folder}`:`${St.folder}`,onDoubleClick:()=>{p||(s(b.name),l(b.id))},children:[A.jsx("input",{type:"checkbox",style:p?{display:"block"}:{display:"none"},checked:!!b.isSelected,onChange:()=>{p&&fe(b)}}),A.jsx("i",{className:"fa fa-folder"}),t!=null&&a==b.id?A.jsx("input",{id:b.id,type:"text",value:t,onKeyDown:ye=>{P(ye,b)},onBlur:()=>[s(null),l(null)],onChange:ye=>{s(ye.target.value)}}):A.jsx("span",{children:b.name}),A.jsx("button",{className:St.open,onClick:()=>{b.type==="folder"?j(b):d(!0)},children:"Open"})]},b.name))]})]})})},RU=({setShowFolderInput:n})=>A.jsxs("div",{className:St.foldersNav,children:[A.jsx("h1",{children:"Folders"}),A.jsx("div",{className:St.right,children:A.jsx("button",{onClick:()=>{n(!0)},children:A.jsx("label",{htmlFor:"folderInput",children:"Create"})})}),A.jsx("span",{className:St.horizontalLine})]}),IU=({deleteSelectedFolder:n,setSelecting:e,handleSelectingAll:t})=>A.jsxs("div",{className:St.foldersBottomNav,children:[A.jsxs("div",{className:St.left,children:[A.jsxs("button",{onClick:()=>{t(!0)},children:[A.jsx("i",{className:"fa fa-check"}),A.jsx("span",{className:St.fullContent,children:"Select All"})]}),A.jsxs("button",{onClick:()=>{t(!1)},children:[A.jsx("i",{className:`fa fa-check-square ${St.uncheck}`}),A.jsx("span",{className:St.fullContent,children:"Unselect All"})]})]}),A.jsxs("div",{className:St.right,children:[A.jsxs("button",{onClick:()=>{n()},children:[A.jsx("i",{className:"fa fa-trash"}),A.jsx("span",{className:St.fullContent,children:"Delete"})]}),A.jsxs("button",{onClick:()=>{e(!1),t(!1)},children:[A.jsx("i",{className:"fa fa-close"}),A.jsx("span",{className:St.fullContent,children:"Cancel"})]})]})]}),Rb=()=>A.jsx("div",{children:"Contacts"}),NU=()=>A.jsx("div",{children:"Dashboard"}),xU="_signUpWrapper_iqkbo_10",OU="_goToStartingPage_iqkbo_21",DU="_topArc_iqkbo_33",kU="_form_iqkbo_46",PU="_userNameCon_iqkbo_53",MU="_passwordCon_iqkbo_54",LU="_moreActions_iqkbo_61",VU="_signInButton_iqkbo_117",UU="_otherPlatformsWrapper_iqkbo_133",jU="_iconsWrapper_iqkbo_144",BU="_wrapper_iqkbo_150",en={signUpWrapper:xU,goToStartingPage:OU,topArc:DU,form:kU,userNameCon:PU,passwordCon:MU,moreActions:LU,signInButton:VU,otherPlatformsWrapper:UU,iconsWrapper:jU,wrapper:BU};function zU(){const{setPage:n,setUser:e,setShowSignInPrompt:t,setShowSignUpPrompt:s,setLoading:a,setContinueAs:l,getAccountInformation:c}=M.useContext(Ma),[d,p]=M.useState(!1),[g,y]=M.useState(),T=M.useRef(null),S=M.useRef(null),N=M.useRef(null),I=M.useRef(null),F=()=>{const se=N==null?void 0:N.current.value,fe=I==null?void 0:I.current.value,D=T.current,R=S.current;return{email:se,pass:fe,warning1:D,warning2:R}},V=()=>{const se=F();se.email&&(se.email=""),se.pass&&(se.pass=""),se.warning1.innerText="",se.warning2.innerText=""},Y=se=>{const fe=F();return(se==null?void 0:se.target.value)==""||fe.email==""?T.current.textContent="The input field is blank!":T.current.textContent="",!1},ee=se=>{const fe=F();return(se==null?void 0:se.target.value)==""||fe.pass==""?S.current.textContent="The input field is blank!":S.current.textContent="",!1},Q=async()=>{Y(),ee();{a(!0);try{await mP(Ou,N.current.value,I.current.value),V(),e(Ou.currentUser),t(!1),l(!0),c()}catch(se){console.log(se.code),se.code=="auth/invalid-email"&&(T.current.textContent="Invalid email/Email doesn't exist."),se.code=="auth/invalid-credential"&&(S.current.textContent="Password does not match."),se.code=="auth/network-request-failed"&&alert("Network Error, unable to sign in. Please try again.")}a(!1)}},re=async()=>{var fe;const se=new Es;a(!0);try{await VP(Ou,se),V(),e(Ou.currentUser);const D=db(wb,"Users",(fe=Ou.currentUser)==null?void 0:fe.uid);(await vb(D)).exists()?t(!1):s(!0),l(!0),c()}catch(D){console.log(D)}a(!1)};return A.jsx(A.Fragment,{children:A.jsxs("div",{className:en.signUpWrapper,children:[A.jsx(Ne,{func:()=>{t(!1),V(),n(1)},content:"X",className:en.goToStartingPage}),A.jsx("div",{className:en.topArc,children:"SIGN IN"}),A.jsxs("div",{className:en.form,children:[A.jsxs("div",{className:en.userNameCon,children:[A.jsx("h3",{children:"Username :"}),A.jsx("input",{className:"emailInput",ref:N,onInput:se=>{Y(se)}}),A.jsx("span",{ref:T})]}),A.jsxs("div",{className:en.passwordCon,children:[A.jsx("h3",{children:"Password :"}),A.jsx("input",{type:d?"text":"password",ref:I,onInput:se=>{ee(se)},className:en.Password}),A.jsx("span",{ref:S}),A.jsx("img",{src:d?"./password/visible.png":"./password/unsee.png",className:en.seePassword,onClick:()=>{p(!d)}})]}),A.jsxs("div",{className:en.moreActions,children:[A.jsx("span",{className:en.forgotPass,children:"Forgot Password"}),A.jsx("span",{className:en.createAcc,onClick:()=>{t(!1),s(!0)},children:"Doesn't Have An Account?"})]}),A.jsx(Ne,{className:en.signInButton,func:()=>{Q()},content:"SIGN IN"})]}),A.jsxs("div",{className:en.otherPlatformsWrapper,children:[A.jsxs("div",{className:en.iconsWrapper,children:[A.jsx("div",{className:en.wrapper,onClick:()=>{re()},children:A.jsx("img",{src:"./platforms/GG.png "})}),A.jsx("div",{className:en.wrapper,children:A.jsx("img",{src:"./platforms/facebook.png"})}),A.jsx("div",{className:en.wrapper,children:A.jsx("img",{src:"./platforms/Instagram.png"})})]}),A.jsx("h3",{children:"SIGN IN WITH DIFFERENT PLATFORMS"})]})]})})}const FU="_hide_1h5us_1",HU="_formOne_1h5us_4",da={hide:FU,formOne:HU},qU=()=>{const{indicated:n,show:e,showConfirm:t,setShowConfirm:s,setShow:a,passwordInput:l,confirmPasswordInput:c,emailInput:d,passWarning:p,confirmWarning:g,emailWarning:y}=M.useContext(Cc);return A.jsxs("div",{className:n==0?da.formOne:da.hide,children:[A.jsxs("div",{className:da.email,children:[A.jsx("h4",{children:"Email"}),A.jsx("input",{type:"text",ref:d}),A.jsx("span",{ref:y})]}),A.jsxs("div",{className:da.password,children:[A.jsx("h4",{children:"Password"}),A.jsx("input",{type:e?"text":"password",ref:l}),A.jsx("img",{src:e?"./password/visible.png":"./password/unsee.png",className:da.see_password,onClick:()=>{a(!e)}}),A.jsx("span",{ref:p})]}),A.jsxs("div",{className:da.confirm,children:[A.jsx("h4",{children:"Confirm Password"}),A.jsx("input",{type:t?"text":"password",ref:c}),A.jsx("img",{src:t?"./password/visible.png":"./password/unsee.png",className:da.see_confirm,onClick:()=>{s(!t)}}),A.jsx("span",{ref:g})]})]})},GU="_hide_p08ld_1",KU="_formTwo_p08ld_6",$U="_top_p08ld_16",YU="_notIndicated_p08ld_41",WU="_indicated_p08ld_46",Du={hide:GU,formTwo:KU,top:$U,notIndicated:YU,indicated:WU},QU=()=>{const{indicated:n,usageOptions:e,handleUsageOptions:t,usingAsInput:s}=M.useContext(Cc);return A.jsxs("div",{className:n==1?Du.formTwo:Du.hide,children:[A.jsx("h3",{children:"I am using the Web Application as?"}),A.jsx("div",{children:A.jsxs("div",{className:Du.top,children:[e.map((a,l)=>A.jsx(Ne,{content:a.content,className:a.isIndicated?Du.indicated:Du.notIndicated,func:()=>{t(l)}},a.content)),A.jsx("h3",{children:"What is your purpose?"}),A.jsx("textarea",{type:"text",placeholder:"Other reason...",ref:s})]})})]})},XU="_hide_a52m3_1",ZU="_formThree_a52m3_5",ku={hide:XU,formThree:ZU},JU=()=>{const{indicated:n,schoolInput:e,schoolWarning:t,grSecInput:s,grSecWarning:a,nickNameInput:l,nameWarning:c}=M.useContext(Cc);return A.jsxs("div",{className:n==2?ku.formThree:ku.hide,children:[A.jsxs("div",{className:ku.username,children:[A.jsx("h4",{children:"Name"}),A.jsx("input",{type:"text",ref:l}),A.jsx("span",{ref:c})]}),A.jsxs("div",{className:ku.password,children:[A.jsx("h4",{children:"School"}),A.jsx("input",{type:"text",ref:e}),A.jsx("span",{ref:t})]}),A.jsxs("div",{className:ku.confirm,children:[A.jsx("h4",{children:"Grade & Section"}),A.jsx("input",{type:"text",ref:s}),A.jsx("span",{ref:a})]})]})},e3="_hide_z324w_8",t3="_formFour_z324w_12",n3="_wrapper_z324w_43",i3="_IndicatedButt_z324w_63",s3="_notIndicatedButt_z324w_73",xo={hide:e3,formFour:t3,wrapper:n3,IndicatedButt:i3,notIndicatedButt:s3},r3=()=>{const{indicated:n,subjects:e,handleSubjects:t}=M.useContext(Cc);if(e!=null)return A.jsx("div",{className:n==3?xo.formFour:xo.hide,children:A.jsxs("div",{className:xo.wrapper,children:[A.jsx("h4",{children:"What is your favorite subject?"}),A.jsx("div",{className:xo.buttons,children:e.map((s,a)=>A.jsx(Ne,{func:()=>{t(a)},className:s.testClass==!0?xo.IndicatedButt:xo.notIndicatedButt,content:e[a].content},s+a.toString()))})]})})},a3="_signUpWrapper_rhwx8_12",o3="_forms_rhwx8_27",l3="_toBottom_rhwx8_38",u3="_bottom_rhwx8_57",c3="_buttons_rhwx8_63",h3="_indicator_rhwx8_85",f3="_indicated_rhwx8_99",d3="_notIndicated_rhwx8_103",p3="_goToStartingPage_rhwx8_130",un={signUpWrapper:a3,forms:o3,toBottom:l3,bottom:u3,buttons:c3,indicator:h3,indicated:f3,notIndicated:d3,goToStartingPage:p3},Cc=M.createContext(),m3=()=>{const{setShowSignInPrompt:n,showSignUpPrompt:e,setShowSignUpPrompt:t,setLoading:s,setContinueAs:a,setUser:l,setPage:c}=M.useContext(Ma),d=M.useRef(null),p=M.useRef(null),g=M.useRef(null),y=M.useRef(null),T=M.useRef(null),S=M.useRef(null),N=M.useRef(null),I=M.useRef(null),F=M.useRef(null),V=M.useRef(null),Y=M.useRef(null),ee=M.useRef(null),Q=M.useRef(null),[re,se]=M.useState(!1),[fe,D]=M.useState(!1),[R,x]=M.useState(0),[P,U]=M.useState([]),[j,b]=M.useState([]),[ve,ye]=M.useState([{content:"As a Student",isIndicated:!1},{content:"As a Teacher",isIndicated:!1},{content:"As a Employee",isIndicated:!1},{content:"I Am Just Using It.",isIndicated:!1}]),[K,ae]=M.useState([{content:"TLE",testClass:!1},{content:"Mathematics",testClass:!1},{content:"Science",testClass:!1},{content:"English",testClass:!1},{content:"Colloquium",testClass:!1},{content:"Filipino",testClass:!1},{content:"Mapeh",testClass:!1},{content:"AP",testClass:!1},{content:"ESP",testClass:!1}]),pe=async ie=>{},Ue=ie=>{let he=ve;for(let Re in he)if(Re==ie){he=he[ie].content;break}U(he),ye(Re=>Re.map((ge,lt)=>ie==lt?{...ge,isIndicated:!0}:{...ge,isIndicated:!1}))},k=ie=>{let he=K,Re=[];he=he.map((ge,lt)=>ie==lt?{...ge,testClass:ge.testClass!=!0}:{...ge});for(let ge in he)he[ge].testClass==!0&&Re.push(he[ge]);b([...Re]),ae(ge=>ge.map((lt,tt)=>ie==tt?{...lt,testClass:lt.testClass!=!0}:{...lt}))};function ne(){d.current.value="",p.current.value="",g.current.value="",y.current.value="",T.current.value="",S.current.value="",N.current.value="",I.current.value="",F.current.value="",V.current.value="",Y.current.value="",ee.current.value="",Q.current.value="",ae(ie=>ie.map(he=>({...he,testClass:!1}))),ye(ie=>ie.map(he=>({...he,isIndicated:!1}))),U(null),b([]),x(0)}const le={passwordInput:d,passWarning:p,emailInput:g,emailWarning:y,confirmPasswordInput:T,confirmWarning:S,nickNameInput:N,nameWarning:I,schoolInput:F,schoolWarning:V,grSecInput:Y,grSecWarning:ee,usingAsInput:Q,show:re,setShow:se,showConfirm:fe,setShowConfirm:D,indicated:R,setIndication:x,usage:P,setUsage:U,selectedSubjects:j,setSelectedSubjects:b,usageOptions:ve,setUsageOptions:ye,subjects:K,setSubjects:ae,handleUsageOptions:Ue,handleSubjects:k};return A.jsx(A.Fragment,{children:A.jsx(Cc.Provider,{value:le,children:A.jsxs("div",{className:un.signUpWrapper,children:[A.jsx(Ne,{func:()=>{t(!1),ne(),c(1)},content:"X",className:un.goToStartingPage}),A.jsxs("form",{onSubmit:ie=>{ie.preventDefault()},className:un.forms,children:[A.jsx("header",{children:"SIGN UP"}),A.jsxs("div",{className:un.toBottom,children:[A.jsx(qU,{}),A.jsx(QU,{}),A.jsx(JU,{}),A.jsx(r3,{}),A.jsxs("div",{className:un.bottom,children:[A.jsxs("div",{className:un.buttons,children:[A.jsx(Ne,{content:"BACK",func:()=>{pe()}}),A.jsx(Ne,{content:R==3||R==0?"SUBMIT":"NEXT",func:()=>{R==3||R==0,pe()}})]}),A.jsxs("div",{className:un.indicator,children:[A.jsx("div",{className:R==0?un.indicated:un.notIndicated}),A.jsx("div",{className:R==1?un.indicated:un.notIndicated}),A.jsx("div",{className:R==2?un.indicated:un.notIndicated}),A.jsx("div",{className:R==3?un.indicated:un.notIndicated})]}),A.jsxs("h4",{id:un.SignUp,onClick:()=>{n(!0),t(!1),ne()},children:[" ",A.jsx("a",{children:"Already Have an Account?"})," "]})]})]})]})]})})})},g3=()=>A.jsx("div",{children:"Loading"}),_3=()=>A.jsx("div",{children:"PageNotFound"}),$m=[{path:"/Acad/",element:A.jsx(iA,{})},{path:"/Acad/Tasks",element:A.jsx(Cb,{})},{path:"/Acad/Folders",element:A.jsx(bb,{})},{path:"/Acad/Contacts",element:A.jsx(Rb,{})},{path:"/Acad/Dashboard",element:A.jsx(NU,{})},{path:"/Acad/SignIn",element:A.jsx(zU,{})},{path:"/Acad/SignUp",element:A.jsx(m3,{})},{path:"*",element:A.jsx(_3,{})}],Ma=M.createContext();function y3(){const[n,e]=M.useState(!1),[t,s]=M.useState(!1),[a,l]=M.useState(!1),[c,d]=M.useState(!1),[p,g]=M.useState(!1),[y,T]=M.useState(!1),[S,N]=M.useState(!1),[I,F]=M.useState(),[V,Y]=M.useState([]),[ee,Q]=M.useState([{name:"Home",ind:!1,icon:A.jsx("span",{className:"material-icons",children:"home"}),page:A.jsx(iA,{}),path:"/Acad/"},{name:"Tasks",ind:!1,icon:A.jsx("span",{className:"fa fa-book"}),page:A.jsx(Cb,{}),path:"/Acad/Tasks"},{name:"Folders",ind:!1,icon:A.jsx("span",{className:"material-icons",children:"folder"}),page:A.jsx(bb,{}),path:"/Acad/Folders"},{name:"Contacts",ind:!1,icon:A.jsx("span",{className:"material-icons",children:"phone"}),page:A.jsx(Rb,{}),path:"/Acad/Contacts"}]),re={showSignUp:n,setShowSignUp:e,showLogin:t,setShowLogin:s,showMakeUserSignIn:a,setShowMakeUserSignIn:l,hideNavbar:c,setHideNavbar:d,hideSideBar:p,setHideSideBar:g,hideSaveChanges:y,setHideSaveChanges:T,loading:S,setLoading:N,user:I,setUser:F,userData:V,setUserData:Y,pages:ee,setPages:Q,pagination:fe=>{se(fe),console.log(fe)}};function se(fe){console.log(fe),Q((D,R)=>D.map((x,P)=>fe==P?{...x,ind:!0}:{...x,ind:!1}))}return A.jsx(A.Fragment,{children:A.jsx(Ma.Provider,{value:re,children:A.jsxs(UI,{children:[A.jsx(YI,{}),A.jsx(pI,{children:$m==null?void 0:$m.map(fe=>A.jsx(XS,{path:fe.path,element:fe.element},fe.path))}),A.jsx(g3,{}),A.jsx(FN,{})]})})})}o1.createRoot(document.getElementById("root")).render(A.jsx(M.StrictMode,{children:A.jsx(y3,{})}));
