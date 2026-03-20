(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const f of p.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function i(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(d){if(d.ep)return;d.ep=!0;const p=i(d);fetch(d.href,p)}})();function Th(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ec={exports:{}},yr={};var wm;function Ly(){if(wm)return yr;wm=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(o,d,p){var f=null;if(p!==void 0&&(f=""+p),d.key!==void 0&&(f=""+d.key),"key"in d){p={};for(var h in d)h!=="key"&&(p[h]=d[h])}else p=d;return d=p.ref,{$$typeof:a,type:o,key:f,ref:d!==void 0?d:null,props:p}}return yr.Fragment=r,yr.jsx=i,yr.jsxs=i,yr}var vm;function Oy(){return vm||(vm=1,Ec.exports=Ly()),Ec.exports}var u=Oy(),Ac={exports:{}},be={};var Sm;function My(){if(Sm)return be;Sm=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),T=Symbol.iterator;function w(C){return C===null||typeof C!="object"?null:(C=T&&C[T]||C["@@iterator"],typeof C=="function"?C:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,F={};function M(C,z,k){this.props=C,this.context=z,this.refs=F,this.updater=k||G}M.prototype.isReactComponent={},M.prototype.setState=function(C,z){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,z,"setState")},M.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function ee(){}ee.prototype=M.prototype;function H(C,z,k){this.props=C,this.context=z,this.refs=F,this.updater=k||G}var le=H.prototype=new ee;le.constructor=H,K(le,M.prototype),le.isPureReactComponent=!0;var de=Array.isArray;function P(){}var $={H:null,A:null,T:null,S:null},xe=Object.prototype.hasOwnProperty;function he(C,z,k){var ne=k.ref;return{$$typeof:a,type:C,key:z,ref:ne!==void 0?ne:null,props:k}}function Se(C,z){return he(C.type,z,C.props)}function te(C){return typeof C=="object"&&C!==null&&C.$$typeof===a}function se(C){var z={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(k){return z[k]})}var Z=/\/+/g;function J(C,z){return typeof C=="object"&&C!==null&&C.key!=null?se(""+C.key):z.toString(36)}function Y(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(P,P):(C.status="pending",C.then(function(z){C.status==="pending"&&(C.status="fulfilled",C.value=z)},function(z){C.status==="pending"&&(C.status="rejected",C.reason=z)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function L(C,z,k,ne,me){var ce=typeof C;(ce==="undefined"||ce==="boolean")&&(C=null);var je=!1;if(C===null)je=!0;else switch(ce){case"bigint":case"string":case"number":je=!0;break;case"object":switch(C.$$typeof){case a:case r:je=!0;break;case b:return je=C._init,L(je(C._payload),z,k,ne,me)}}if(je)return me=me(C),je=ne===""?"."+J(C,0):ne,de(me)?(k="",je!=null&&(k=je.replace(Z,"$&/")+"/"),L(me,z,k,"",function(Vt){return Vt})):me!=null&&(te(me)&&(me=Se(me,k+(me.key==null||C&&C.key===me.key?"":(""+me.key).replace(Z,"$&/")+"/")+je)),z.push(me)),1;je=0;var We=ne===""?".":ne+":";if(de(C))for(var He=0;He<C.length;He++)ne=C[He],ce=We+J(ne,He),je+=L(ne,z,k,ce,me);else if(He=w(C),typeof He=="function")for(C=He.call(C),He=0;!(ne=C.next()).done;)ne=ne.value,ce=We+J(ne,He++),je+=L(ne,z,k,ce,me);else if(ce==="object"){if(typeof C.then=="function")return L(Y(C),z,k,ne,me);throw z=String(C),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return je}function V(C,z,k){if(C==null)return C;var ne=[],me=0;return L(C,ne,"","",function(ce){return z.call(k,ce,me++)}),ne}function oe(C){if(C._status===-1){var z=C._result;z=z(),z.then(function(k){(C._status===0||C._status===-1)&&(C._status=1,C._result=k)},function(k){(C._status===0||C._status===-1)&&(C._status=2,C._result=k)}),C._status===-1&&(C._status=0,C._result=z)}if(C._status===1)return C._result.default;throw C._result}var Te=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},v={map:V,forEach:function(C,z,k){V(C,function(){z.apply(this,arguments)},k)},count:function(C){var z=0;return V(C,function(){z++}),z},toArray:function(C){return V(C,function(z){return z})||[]},only:function(C){if(!te(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return be.Activity=_,be.Children=v,be.Component=M,be.Fragment=i,be.Profiler=d,be.PureComponent=H,be.StrictMode=o,be.Suspense=x,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,be.__COMPILER_RUNTIME={__proto__:null,c:function(C){return $.H.useMemoCache(C)}},be.cache=function(C){return function(){return C.apply(null,arguments)}},be.cacheSignal=function(){return null},be.cloneElement=function(C,z,k){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var ne=K({},C.props),me=C.key;if(z!=null)for(ce in z.key!==void 0&&(me=""+z.key),z)!xe.call(z,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&z.ref===void 0||(ne[ce]=z[ce]);var ce=arguments.length-2;if(ce===1)ne.children=k;else if(1<ce){for(var je=Array(ce),We=0;We<ce;We++)je[We]=arguments[We+2];ne.children=je}return he(C.type,me,ne)},be.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:p,_context:C},C},be.createElement=function(C,z,k){var ne,me={},ce=null;if(z!=null)for(ne in z.key!==void 0&&(ce=""+z.key),z)xe.call(z,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(me[ne]=z[ne]);var je=arguments.length-2;if(je===1)me.children=k;else if(1<je){for(var We=Array(je),He=0;He<je;He++)We[He]=arguments[He+2];me.children=We}if(C&&C.defaultProps)for(ne in je=C.defaultProps,je)me[ne]===void 0&&(me[ne]=je[ne]);return he(C,ce,me)},be.createRef=function(){return{current:null}},be.forwardRef=function(C){return{$$typeof:h,render:C}},be.isValidElement=te,be.lazy=function(C){return{$$typeof:b,_payload:{_status:-1,_result:C},_init:oe}},be.memo=function(C,z){return{$$typeof:g,type:C,compare:z===void 0?null:z}},be.startTransition=function(C){var z=$.T,k={};$.T=k;try{var ne=C(),me=$.S;me!==null&&me(k,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(P,Te)}catch(ce){Te(ce)}finally{z!==null&&k.types!==null&&(z.types=k.types),$.T=z}},be.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},be.use=function(C){return $.H.use(C)},be.useActionState=function(C,z,k){return $.H.useActionState(C,z,k)},be.useCallback=function(C,z){return $.H.useCallback(C,z)},be.useContext=function(C){return $.H.useContext(C)},be.useDebugValue=function(){},be.useDeferredValue=function(C,z){return $.H.useDeferredValue(C,z)},be.useEffect=function(C,z){return $.H.useEffect(C,z)},be.useEffectEvent=function(C){return $.H.useEffectEvent(C)},be.useId=function(){return $.H.useId()},be.useImperativeHandle=function(C,z,k){return $.H.useImperativeHandle(C,z,k)},be.useInsertionEffect=function(C,z){return $.H.useInsertionEffect(C,z)},be.useLayoutEffect=function(C,z){return $.H.useLayoutEffect(C,z)},be.useMemo=function(C,z){return $.H.useMemo(C,z)},be.useOptimistic=function(C,z){return $.H.useOptimistic(C,z)},be.useReducer=function(C,z,k){return $.H.useReducer(C,z,k)},be.useRef=function(C){return $.H.useRef(C)},be.useState=function(C){return $.H.useState(C)},be.useSyncExternalStore=function(C,z,k){return $.H.useSyncExternalStore(C,z,k)},be.useTransition=function(){return $.H.useTransition()},be.version="19.2.3",be}var Tm;function lu(){return Tm||(Tm=1,Ac.exports=My()),Ac.exports}var Q=lu(),jc={exports:{}},br={},Nc={exports:{}},Lc={};var Cm;function Dy(){return Cm||(Cm=1,(function(a){function r(L,V){var oe=L.length;L.push(V);e:for(;0<oe;){var Te=oe-1>>>1,v=L[Te];if(0<d(v,V))L[Te]=V,L[oe]=v,oe=Te;else break e}}function i(L){return L.length===0?null:L[0]}function o(L){if(L.length===0)return null;var V=L[0],oe=L.pop();if(oe!==V){L[0]=oe;e:for(var Te=0,v=L.length,C=v>>>1;Te<C;){var z=2*(Te+1)-1,k=L[z],ne=z+1,me=L[ne];if(0>d(k,oe))ne<v&&0>d(me,k)?(L[Te]=me,L[ne]=oe,Te=ne):(L[Te]=k,L[z]=oe,Te=z);else if(ne<v&&0>d(me,oe))L[Te]=me,L[ne]=oe,Te=ne;else break e}}return V}function d(L,V){var oe=L.sortIndex-V.sortIndex;return oe!==0?oe:L.id-V.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;a.unstable_now=function(){return p.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var x=[],g=[],b=1,_=null,T=3,w=!1,G=!1,K=!1,F=!1,M=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function le(L){for(var V=i(g);V!==null;){if(V.callback===null)o(g);else if(V.startTime<=L)o(g),V.sortIndex=V.expirationTime,r(x,V);else break;V=i(g)}}function de(L){if(K=!1,le(L),!G)if(i(x)!==null)G=!0,P||(P=!0,se());else{var V=i(g);V!==null&&Y(de,V.startTime-L)}}var P=!1,$=-1,xe=5,he=-1;function Se(){return F?!0:!(a.unstable_now()-he<xe)}function te(){if(F=!1,P){var L=a.unstable_now();he=L;var V=!0;try{e:{G=!1,K&&(K=!1,ee($),$=-1),w=!0;var oe=T;try{t:{for(le(L),_=i(x);_!==null&&!(_.expirationTime>L&&Se());){var Te=_.callback;if(typeof Te=="function"){_.callback=null,T=_.priorityLevel;var v=Te(_.expirationTime<=L);if(L=a.unstable_now(),typeof v=="function"){_.callback=v,le(L),V=!0;break t}_===i(x)&&o(x),le(L)}else o(x);_=i(x)}if(_!==null)V=!0;else{var C=i(g);C!==null&&Y(de,C.startTime-L),V=!1}}break e}finally{_=null,T=oe,w=!1}V=void 0}}finally{V?se():P=!1}}}var se;if(typeof H=="function")se=function(){H(te)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,J=Z.port2;Z.port1.onmessage=te,se=function(){J.postMessage(null)}}else se=function(){M(te,0)};function Y(L,V){$=M(function(){L(a.unstable_now())},V)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(L){L.callback=null},a.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<L?Math.floor(1e3/L):5},a.unstable_getCurrentPriorityLevel=function(){return T},a.unstable_next=function(L){switch(T){case 1:case 2:case 3:var V=3;break;default:V=T}var oe=T;T=V;try{return L()}finally{T=oe}},a.unstable_requestPaint=function(){F=!0},a.unstable_runWithPriority=function(L,V){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var oe=T;T=L;try{return V()}finally{T=oe}},a.unstable_scheduleCallback=function(L,V,oe){var Te=a.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Te+oe:Te):oe=Te,L){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=oe+v,L={id:b++,callback:V,priorityLevel:L,startTime:oe,expirationTime:v,sortIndex:-1},oe>Te?(L.sortIndex=oe,r(g,L),i(x)===null&&L===i(g)&&(K?(ee($),$=-1):K=!0,Y(de,oe-Te))):(L.sortIndex=v,r(x,L),G||w||(G=!0,P||(P=!0,se()))),L},a.unstable_shouldYield=Se,a.unstable_wrapCallback=function(L){var V=T;return function(){var oe=T;T=V;try{return L.apply(this,arguments)}finally{T=oe}}}})(Lc)),Lc}var Em;function Ry(){return Em||(Em=1,Nc.exports=Dy()),Nc.exports}var Oc={exports:{}},yt={};var Am;function Py(){if(Am)return yt;Am=1;var a=lu();function r(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)g+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(x,g,b){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:_==null?null:""+_,children:x,containerInfo:g,implementation:b}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,yt.createPortal=function(x,g){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(r(299));return p(x,g,null,b)},yt.flushSync=function(x){var g=f.T,b=o.p;try{if(f.T=null,o.p=2,x)return x()}finally{f.T=g,o.p=b,o.d.f()}},yt.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(x,g))},yt.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},yt.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var b=g.as,_=h(b,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;b==="style"?o.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:_,integrity:T,fetchPriority:w}):b==="script"&&o.d.X(x,{crossOrigin:_,integrity:T,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},yt.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var b=h(g.as,g.crossOrigin);o.d.M(x,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(x)},yt.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var b=g.as,_=h(b,g.crossOrigin);o.d.L(x,b,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},yt.preloadModule=function(x,g){if(typeof x=="string")if(g){var b=h(g.as,g.crossOrigin);o.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(x)},yt.requestFormReset=function(x){o.d.r(x)},yt.unstable_batchedUpdates=function(x,g){return x(g)},yt.useFormState=function(x,g,b){return f.H.useFormState(x,g,b)},yt.useFormStatus=function(){return f.H.useHostTransitionStatus()},yt.version="19.2.3",yt}var jm;function zy(){if(jm)return Oc.exports;jm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Oc.exports=Py(),Oc.exports}var Nm;function qy(){if(Nm)return br;Nm=1;var a=Ry(),r=lu(),i=zy();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(p(e)!==e)throw Error(o(188))}function g(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,s=t;;){var l=n.return;if(l===null)break;var c=l.alternate;if(c===null){if(s=l.return,s!==null){n=s;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===n)return x(l),e;if(c===s)return x(l),t;c=c.sibling}throw Error(o(188))}if(n.return!==s.return)n=l,s=c;else{for(var m=!1,y=l.child;y;){if(y===n){m=!0,n=l,s=c;break}if(y===s){m=!0,s=l,n=c;break}y=y.sibling}if(!m){for(y=c.child;y;){if(y===n){m=!0,n=c,s=l;break}if(y===s){m=!0,s=c,n=l;break}y=y.sibling}if(!m)throw Error(o(189))}}if(n.alternate!==s)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var _=Object.assign,T=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),ee=Symbol.for("react.consumer"),H=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),Se=Symbol.for("react.memo_cache_sentinel"),te=Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=te&&e[te]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Symbol.for("react.client.reference");function J(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Z?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case M:return"Profiler";case F:return"StrictMode";case de:return"Suspense";case P:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case H:return e.displayName||"Context";case ee:return(e._context.displayName||"Context")+".Consumer";case le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:J(e.type)||"Memo";case xe:t=e._payload,e=e._init;try{return J(e(t))}catch{}}return null}var Y=Array.isArray,L=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},Te=[],v=-1;function C(e){return{current:e}}function z(e){0>v||(e.current=Te[v],Te[v]=null,v--)}function k(e,t){v++,Te[v]=e.current,e.current=t}var ne=C(null),me=C(null),ce=C(null),je=C(null);function We(e,t){switch(k(ce,t),k(me,e),k(ne,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gf(t),e=Kf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(ne),k(ne,e)}function He(){z(ne),z(me),z(ce)}function Vt(e){e.memoizedState!==null&&k(je,e);var t=ne.current,n=Kf(t,e.type);t!==n&&(k(me,e),k(ne,n))}function mn(e){me.current===e&&(z(ne),z(me)),je.current===e&&(z(je),mr._currentValue=oe)}var Ts,Mr;function hn(e){if(Ts===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ts=t&&t[1]||"",Mr=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ts+e+Mr}var Aa=!1;function ja(e,t){if(!e||Aa)return"";Aa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(D){var O=D}Reflect.construct(e,[],U)}else{try{U.call()}catch(D){O=D}e.call(U.prototype)}}else{try{throw Error()}catch(D){O=D}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(D){if(D&&O&&typeof D.stack=="string")return[D.stack,O.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),m=c[0],y=c[1];if(m&&y){var S=m.split(`
`),N=y.split(`
`);for(l=s=0;s<S.length&&!S[s].includes("DetermineComponentFrameRoot");)s++;for(;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;if(s===S.length||l===N.length)for(s=S.length-1,l=N.length-1;1<=s&&0<=l&&S[s]!==N[l];)l--;for(;1<=s&&0<=l;s--,l--)if(S[s]!==N[l]){if(s!==1||l!==1)do if(s--,l--,0>l||S[s]!==N[l]){var R=`
`+S[s].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=s&&0<=l);break}}}finally{Aa=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?hn(n):""}function Dr(e,t){switch(e.tag){case 26:case 27:case 5:return hn(e.type);case 16:return hn("Lazy");case 13:return e.child!==t&&t!==null?hn("Suspense Fallback"):hn("Suspense");case 19:return hn("SuspenseList");case 0:case 15:return ja(e.type,!1);case 11:return ja(e.type.render,!1);case 1:return ja(e.type,!0);case 31:return hn("Activity");default:return""}}function Rr(e){try{var t="",n=null;do t+=Dr(e,n),n=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Na=Object.prototype.hasOwnProperty,La=a.unstable_scheduleCallback,Cs=a.unstable_cancelCallback,di=a.unstable_shouldYield,pi=a.unstable_requestPaint,_t=a.unstable_now,fi=a.unstable_getCurrentPriorityLevel,q=a.unstable_ImmediatePriority,W=a.unstable_UserBlockingPriority,ge=a.unstable_NormalPriority,Ce=a.unstable_LowPriority,qe=a.unstable_IdlePriority,Dt=a.log,gn=a.unstable_setDisableYieldValue,kt=null,ct=null;function vt(e){if(typeof Dt=="function"&&gn(e),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(kt,e)}catch{}}var Ge=Math.clz32?Math.clz32:xg,Pn=Math.log,nn=Math.LN2;function xg(e){return e>>>=0,e===0?32:31-(Pn(e)/nn|0)|0}var Pr=256,zr=262144,qr=4194304;function ca(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Br(e,t,n){var s=e.pendingLanes;if(s===0)return 0;var l=0,c=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var y=s&134217727;return y!==0?(s=y&~c,s!==0?l=ca(s):(m&=y,m!==0?l=ca(m):n||(n=y&~e,n!==0&&(l=ca(n))))):(y=s&~c,y!==0?l=ca(y):m!==0?l=ca(m):n||(n=s&~e,n!==0&&(l=ca(n)))),l===0?0:t!==0&&t!==l&&(t&c)===0&&(c=l&-l,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:l}function Es(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function yg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tu(){var e=qr;return qr<<=1,(qr&62914560)===0&&(qr=4194304),e}function mi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function As(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bg(e,t,n,s,l,c){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,S=e.expirationTimes,N=e.hiddenUpdates;for(n=m&~n;0<n;){var R=31-Ge(n),U=1<<R;y[R]=0,S[R]=-1;var O=N[R];if(O!==null)for(N[R]=null,R=0;R<O.length;R++){var D=O[R];D!==null&&(D.lane&=-536870913)}n&=~U}s!==0&&Cu(e,s,0),c!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=c&~(m&~t))}function Cu(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-Ge(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|n&261930}function Eu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-Ge(n),l=1<<s;l&t|e[s]&t&&(e[s]|=t),n&=~l}}function Au(e,t){var n=t&-t;return n=(n&42)!==0?1:hi(n),(n&(e.suspendedLanes|t))!==0?0:n}function hi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ju(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:hm(e.type))}function Nu(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var zn=Math.random().toString(36).slice(2),ft="__reactFiber$"+zn,St="__reactProps$"+zn,Oa="__reactContainer$"+zn,xi="__reactEvents$"+zn,_g="__reactListeners$"+zn,kg="__reactHandles$"+zn,Lu="__reactResources$"+zn,js="__reactMarker$"+zn;function yi(e){delete e[ft],delete e[St],delete e[xi],delete e[_g],delete e[kg]}function Ma(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Oa]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$f(e);e!==null;){if(n=e[ft])return n;e=$f(e)}return t}e=n,n=e.parentNode}return null}function Da(e){if(e=e[ft]||e[Oa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ns(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Ra(e){var t=e[Lu];return t||(t=e[Lu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function dt(e){e[js]=!0}var Ou=new Set,Mu={};function ua(e,t){Pa(e,t),Pa(e+"Capture",t)}function Pa(e,t){for(Mu[e]=t,e=0;e<t.length;e++)Ou.add(t[e])}var wg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Du={},Ru={};function vg(e){return Na.call(Ru,e)?!0:Na.call(Du,e)?!1:wg.test(e)?Ru[e]=!0:(Du[e]=!0,!1)}function Ur(e,t,n){if(vg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Hr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function xn(e,t,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+s)}}function Gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sg(e,t,n){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,c=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){n=""+m,c.call(this,m)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bi(e){if(!e._valueTracker){var t=Pu(e)?"checked":"value";e._valueTracker=Sg(e,t,""+e[t])}}function zu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=Pu(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function Ir(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Tg=/[\n"\\]/g;function Kt(e){return e.replace(Tg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function _i(e,t,n,s,l,c,m,y){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Gt(t)):e.value!==""+Gt(t)&&(e.value=""+Gt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?ki(e,m,Gt(t)):n!=null?ki(e,m,Gt(n)):s!=null&&e.removeAttribute("value"),l==null&&c!=null&&(e.defaultChecked=!!c),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+Gt(y):e.removeAttribute("name")}function qu(e,t,n,s,l,c,m,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){bi(e);return}n=n!=null?""+Gt(n):"",t=t!=null?""+Gt(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=y?e.checked:!!s,e.defaultChecked=!!s,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),bi(e)}function ki(e,t,n){t==="number"&&Ir(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function za(e,t,n,s){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&s&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Bu(e,t,n){if(t!=null&&(t=""+Gt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Gt(n):""}function Uu(e,t,n,s){if(t==null){if(s!=null){if(n!=null)throw Error(o(92));if(Y(s)){if(1<s.length)throw Error(o(93));s=s[0]}n=s}n==null&&(n=""),t=n}n=Gt(t),e.defaultValue=n,s=e.textContent,s===n&&s!==""&&s!==null&&(e.value=s),bi(e)}function qa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hu(e,t,n){var s=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,n):typeof n!="number"||n===0||Cg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Iu(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var s in n)!n.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var l in t)s=t[l],t.hasOwnProperty(l)&&n[l]!==s&&Hu(e,l,s)}else for(var c in t)t.hasOwnProperty(c)&&Hu(e,c,t[c])}function wi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ag=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yr(e){return Ag.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function yn(){}var vi=null;function Si(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ba=null,Ua=null;function Yu(e){var t=Da(e);if(t&&(e=t.stateNode)){var n=e[St]||null;e:switch(e=t.stateNode,t.type){case"input":if(_i(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var l=s[St]||null;if(!l)throw Error(o(90));_i(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)s=n[t],s.form===e.form&&zu(s)}break e;case"textarea":Bu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&za(e,!!n.multiple,t,!1)}}}var Ti=!1;function Vu(e,t,n){if(Ti)return e(t,n);Ti=!0;try{var s=e(t);return s}finally{if(Ti=!1,(Ba!==null||Ua!==null)&&(Nl(),Ba&&(t=Ba,e=Ua,Ua=Ba=null,Yu(t),e)))for(t=0;t<e.length;t++)Yu(e[t])}}function Ls(e,t){var n=e.stateNode;if(n===null)return null;var s=n[St]||null;if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ci=!1;if(bn)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{Ci=!1}var qn=null,Ei=null,Vr=null;function Gu(){if(Vr)return Vr;var e,t=Ei,n=t.length,s,l="value"in qn?qn.value:qn.textContent,c=l.length;for(e=0;e<n&&t[e]===l[e];e++);var m=n-e;for(s=1;s<=m&&t[n-s]===l[c-s];s++);return Vr=l.slice(e,1<s?1-s:void 0)}function Gr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kr(){return!0}function Ku(){return!1}function Tt(e){function t(n,s,l,c,m){this._reactName=n,this._targetInst=l,this.type=s,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Kr:Ku,this.isPropagationStopped=Ku,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kr)},persist:function(){},isPersistent:Kr}),t}var da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xr=Tt(da),Ms=_({},da,{view:0,detail:0}),jg=Tt(Ms),Ai,ji,Ds,Qr=_({},Ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Li,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ds&&(Ds&&e.type==="mousemove"?(Ai=e.screenX-Ds.screenX,ji=e.screenY-Ds.screenY):ji=Ai=0,Ds=e),Ai)},movementY:function(e){return"movementY"in e?e.movementY:ji}}),Xu=Tt(Qr),Ng=_({},Qr,{dataTransfer:0}),Lg=Tt(Ng),Og=_({},Ms,{relatedTarget:0}),Ni=Tt(Og),Mg=_({},da,{animationName:0,elapsedTime:0,pseudoElement:0}),Dg=Tt(Mg),Rg=_({},da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pg=Tt(Rg),zg=_({},da,{data:0}),Qu=Tt(zg),qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ug[e])?!!t[e]:!1}function Li(){return Hg}var Ig=_({},Ms,{key:function(e){if(e.key){var t=qg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Li,charCode:function(e){return e.type==="keypress"?Gr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yg=Tt(Ig),Vg=_({},Qr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fu=Tt(Vg),Gg=_({},Ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Li}),Kg=Tt(Gg),Xg=_({},da,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qg=Tt(Xg),Fg=_({},Qr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zg=Tt(Fg),Wg=_({},da,{newState:0,oldState:0}),Jg=Tt(Wg),$g=[9,13,27,32],Oi=bn&&"CompositionEvent"in window,Rs=null;bn&&"documentMode"in document&&(Rs=document.documentMode);var ex=bn&&"TextEvent"in window&&!Rs,Zu=bn&&(!Oi||Rs&&8<Rs&&11>=Rs),Wu=" ",Ju=!1;function $u(e,t){switch(e){case"keyup":return $g.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ed(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ha=!1;function tx(e,t){switch(e){case"compositionend":return ed(t);case"keypress":return t.which!==32?null:(Ju=!0,Wu);case"textInput":return e=t.data,e===Wu&&Ju?null:e;default:return null}}function nx(e,t){if(Ha)return e==="compositionend"||!Oi&&$u(e,t)?(e=Gu(),Vr=Ei=qn=null,Ha=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zu&&t.locale!=="ko"?null:t.data;default:return null}}var ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ax[e.type]:t==="textarea"}function nd(e,t,n,s){Ba?Ua?Ua.push(s):Ua=[s]:Ba=s,t=zl(t,"onChange"),0<t.length&&(n=new Xr("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var Ps=null,zs=null;function sx(e){Bf(e,0)}function Fr(e){var t=Ns(e);if(zu(t))return e}function ad(e,t){if(e==="change")return t}var sd=!1;if(bn){var Mi;if(bn){var Di="oninput"in document;if(!Di){var rd=document.createElement("div");rd.setAttribute("oninput","return;"),Di=typeof rd.oninput=="function"}Mi=Di}else Mi=!1;sd=Mi&&(!document.documentMode||9<document.documentMode)}function ld(){Ps&&(Ps.detachEvent("onpropertychange",id),zs=Ps=null)}function id(e){if(e.propertyName==="value"&&Fr(zs)){var t=[];nd(t,zs,e,Si(e)),Vu(sx,t)}}function rx(e,t,n){e==="focusin"?(ld(),Ps=t,zs=n,Ps.attachEvent("onpropertychange",id)):e==="focusout"&&ld()}function lx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fr(zs)}function ix(e,t){if(e==="click")return Fr(t)}function ox(e,t){if(e==="input"||e==="change")return Fr(t)}function cx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:cx;function qs(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var l=n[s];if(!Na.call(t,l)||!Rt(e[l],t[l]))return!1}return!0}function od(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cd(e,t){var n=od(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=od(n)}}function ud(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ud(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ir(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ir(e.document)}return t}function Ri(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ux=bn&&"documentMode"in document&&11>=document.documentMode,Ia=null,Pi=null,Bs=null,zi=!1;function pd(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zi||Ia==null||Ia!==Ir(s)||(s=Ia,"selectionStart"in s&&Ri(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Bs&&qs(Bs,s)||(Bs=s,s=zl(Pi,"onSelect"),0<s.length&&(t=new Xr("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=Ia)))}function pa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ya={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionrun:pa("Transition","TransitionRun"),transitionstart:pa("Transition","TransitionStart"),transitioncancel:pa("Transition","TransitionCancel"),transitionend:pa("Transition","TransitionEnd")},qi={},fd={};bn&&(fd=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function fa(e){if(qi[e])return qi[e];if(!Ya[e])return e;var t=Ya[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fd)return qi[e]=t[n];return e}var md=fa("animationend"),hd=fa("animationiteration"),gd=fa("animationstart"),dx=fa("transitionrun"),px=fa("transitionstart"),fx=fa("transitioncancel"),xd=fa("transitionend"),yd=new Map,Bi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bi.push("scrollEnd");function an(e,t){yd.set(e,t),ua(t,[e])}var Zr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Xt=[],Va=0,Ui=0;function Wr(){for(var e=Va,t=Ui=Va=0;t<e;){var n=Xt[t];Xt[t++]=null;var s=Xt[t];Xt[t++]=null;var l=Xt[t];Xt[t++]=null;var c=Xt[t];if(Xt[t++]=null,s!==null&&l!==null){var m=s.pending;m===null?l.next=l:(l.next=m.next,m.next=l),s.pending=l}c!==0&&bd(n,l,c)}}function Jr(e,t,n,s){Xt[Va++]=e,Xt[Va++]=t,Xt[Va++]=n,Xt[Va++]=s,Ui|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Hi(e,t,n,s){return Jr(e,t,n,s),$r(e)}function ma(e,t){return Jr(e,null,null,t),$r(e)}function bd(e,t,n){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n);for(var l=!1,c=e.return;c!==null;)c.childLanes|=n,s=c.alternate,s!==null&&(s.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(l=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,l&&t!==null&&(l=31-Ge(n),e=c.hiddenUpdates,s=e[l],s===null?e[l]=[t]:s.push(t),t.lane=n|536870912),c):null}function $r(e){if(50<ir)throw ir=0,Wo=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ga={};function mx(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(e,t,n,s){return new mx(e,t,n,s)}function Ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _n(e,t){var n=e.alternate;return n===null?(n=Pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _d(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function el(e,t,n,s,l,c){var m=0;if(s=e,typeof e=="function")Ii(e)&&(m=1);else if(typeof e=="string")m=by(e,n,ne.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=Pt(31,n,t,l),e.elementType=he,e.lanes=c,e;case K:return ha(n.children,l,c,t);case F:m=8,l|=24;break;case M:return e=Pt(12,n,t,l|2),e.elementType=M,e.lanes=c,e;case de:return e=Pt(13,n,t,l),e.elementType=de,e.lanes=c,e;case P:return e=Pt(19,n,t,l),e.elementType=P,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:m=10;break e;case ee:m=9;break e;case le:m=11;break e;case $:m=14;break e;case xe:m=16,s=null;break e}m=29,n=Error(o(130,e===null?"null":typeof e,"")),s=null}return t=Pt(m,n,t,l),t.elementType=e,t.type=s,t.lanes=c,t}function ha(e,t,n,s){return e=Pt(7,e,s,t),e.lanes=n,e}function Yi(e,t,n){return e=Pt(6,e,null,t),e.lanes=n,e}function kd(e){var t=Pt(18,null,null,0);return t.stateNode=e,t}function Vi(e,t,n){return t=Pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wd=new WeakMap;function Qt(e,t){if(typeof e=="object"&&e!==null){var n=wd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Rr(t)},wd.set(e,t),t)}return{value:e,source:t,stack:Rr(t)}}var Ka=[],Xa=0,tl=null,Us=0,Ft=[],Zt=0,Bn=null,ln=1,on="";function kn(e,t){Ka[Xa++]=Us,Ka[Xa++]=tl,tl=e,Us=t}function vd(e,t,n){Ft[Zt++]=ln,Ft[Zt++]=on,Ft[Zt++]=Bn,Bn=e;var s=ln;e=on;var l=32-Ge(s)-1;s&=~(1<<l),n+=1;var c=32-Ge(t)+l;if(30<c){var m=l-l%5;c=(s&(1<<m)-1).toString(32),s>>=m,l-=m,ln=1<<32-Ge(t)+l|n<<l|s,on=c+e}else ln=1<<c|n<<l|s,on=e}function Gi(e){e.return!==null&&(kn(e,1),vd(e,1,0))}function Ki(e){for(;e===tl;)tl=Ka[--Xa],Ka[Xa]=null,Us=Ka[--Xa],Ka[Xa]=null;for(;e===Bn;)Bn=Ft[--Zt],Ft[Zt]=null,on=Ft[--Zt],Ft[Zt]=null,ln=Ft[--Zt],Ft[Zt]=null}function Sd(e,t){Ft[Zt++]=ln,Ft[Zt++]=on,Ft[Zt++]=Bn,ln=t.id,on=t.overflow,Bn=e}var mt=null,Fe=null,Oe=!1,Un=null,Wt=!1,Xi=Error(o(519));function Hn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Hs(Qt(t,e)),Xi}function Td(e){var t=e.stateNode,n=e.type,s=e.memoizedProps;switch(t[ft]=e,t[St]=s,n){case"dialog":Ae("cancel",t),Ae("close",t);break;case"iframe":case"object":case"embed":Ae("load",t);break;case"video":case"audio":for(n=0;n<cr.length;n++)Ae(cr[n],t);break;case"source":Ae("error",t);break;case"img":case"image":case"link":Ae("error",t),Ae("load",t);break;case"details":Ae("toggle",t);break;case"input":Ae("invalid",t),qu(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ae("invalid",t);break;case"textarea":Ae("invalid",t),Uu(t,s.value,s.defaultValue,s.children)}n=s.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||s.suppressHydrationWarning===!0||Yf(t.textContent,n)?(s.popover!=null&&(Ae("beforetoggle",t),Ae("toggle",t)),s.onScroll!=null&&Ae("scroll",t),s.onScrollEnd!=null&&Ae("scrollend",t),s.onClick!=null&&(t.onclick=yn),t=!0):t=!1,t||Hn(e,!0)}function Cd(e){for(mt=e.return;mt;)switch(mt.tag){case 5:case 31:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:mt=mt.return}}function Qa(e){if(e!==mt)return!1;if(!Oe)return Cd(e),Oe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||pc(e.type,e.memoizedProps)),n=!n),n&&Fe&&Hn(e),Cd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Fe=Jf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Fe=Jf(e)}else t===27?(t=Fe,ta(e.type)?(e=xc,xc=null,Fe=e):Fe=t):Fe=mt?$t(e.stateNode.nextSibling):null;return!0}function ga(){Fe=mt=null,Oe=!1}function Qi(){var e=Un;return e!==null&&(jt===null?jt=e:jt.push.apply(jt,e),Un=null),e}function Hs(e){Un===null?Un=[e]:Un.push(e)}var Fi=C(null),xa=null,wn=null;function In(e,t,n){k(Fi,t._currentValue),t._currentValue=n}function vn(e){e._currentValue=Fi.current,z(Fi)}function Zi(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function Wi(e,t,n,s){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var c=l.dependencies;if(c!==null){var m=l.child;c=c.firstContext;e:for(;c!==null;){var y=c;c=l;for(var S=0;S<t.length;S++)if(y.context===t[S]){c.lanes|=n,y=c.alternate,y!==null&&(y.lanes|=n),Zi(c.return,n,e),s||(m=null);break e}c=y.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(o(341));m.lanes|=n,c=m.alternate,c!==null&&(c.lanes|=n),Zi(m,n,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Fa(e,t,n,s){e=null;for(var l=t,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(o(387));if(m=m.memoizedProps,m!==null){var y=l.type;Rt(l.pendingProps.value,m.value)||(e!==null?e.push(y):e=[y])}}else if(l===je.current){if(m=l.alternate,m===null)throw Error(o(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(mr):e=[mr])}l=l.return}e!==null&&Wi(t,e,n,s),t.flags|=262144}function nl(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ya(e){xa=e,wn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ht(e){return Ed(xa,e)}function al(e,t){return xa===null&&ya(e),Ed(e,t)}function Ed(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},wn===null){if(e===null)throw Error(o(308));wn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else wn=wn.next=t;return n}var hx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},gx=a.unstable_scheduleCallback,xx=a.unstable_NormalPriority,at={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ji(){return{controller:new hx,data:new Map,refCount:0}}function Is(e){e.refCount--,e.refCount===0&&gx(xx,function(){e.controller.abort()})}var Ys=null,$i=0,Za=0,Wa=null;function yx(e,t){if(Ys===null){var n=Ys=[];$i=0,Za=ac(),Wa={status:"pending",value:void 0,then:function(s){n.push(s)}}}return $i++,t.then(Ad,Ad),t}function Ad(){if(--$i===0&&Ys!==null){Wa!==null&&(Wa.status="fulfilled");var e=Ys;Ys=null,Za=0,Wa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function bx(e,t){var n=[],s={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(s.status="rejected",s.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),s}var jd=L.S;L.S=function(e,t){ff=_t(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&yx(e,t),jd!==null&&jd(e,t)};var ba=C(null);function eo(){var e=ba.current;return e!==null?e:Ke.pooledCache}function sl(e,t){t===null?k(ba,ba.current):k(ba,t.pool)}function Nd(){var e=eo();return e===null?null:{parent:at._currentValue,pool:e}}var Ja=Error(o(460)),to=Error(o(474)),rl=Error(o(542)),ll={then:function(){}};function Ld(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Od(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(yn,yn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dd(e),e;default:if(typeof t.status=="string")t.then(yn,yn);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=s}},function(s){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dd(e),e}throw ka=t,Ja}}function _a(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ka=n,Ja):n}}var ka=null;function Md(){if(ka===null)throw Error(o(459));var e=ka;return ka=null,e}function Dd(e){if(e===Ja||e===rl)throw Error(o(483))}var $a=null,Vs=0;function il(e){var t=Vs;return Vs+=1,$a===null&&($a=[]),Od($a,e,t)}function Gs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ol(e,t){throw t.$$typeof===T?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Rd(e){function t(A,E){if(e){var j=A.deletions;j===null?(A.deletions=[E],A.flags|=16):j.push(E)}}function n(A,E){if(!e)return null;for(;E!==null;)t(A,E),E=E.sibling;return null}function s(A){for(var E=new Map;A!==null;)A.key!==null?E.set(A.key,A):E.set(A.index,A),A=A.sibling;return E}function l(A,E){return A=_n(A,E),A.index=0,A.sibling=null,A}function c(A,E,j){return A.index=j,e?(j=A.alternate,j!==null?(j=j.index,j<E?(A.flags|=67108866,E):j):(A.flags|=67108866,E)):(A.flags|=1048576,E)}function m(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function y(A,E,j,B){return E===null||E.tag!==6?(E=Yi(j,A.mode,B),E.return=A,E):(E=l(E,j),E.return=A,E)}function S(A,E,j,B){var ue=j.type;return ue===K?R(A,E,j.props.children,B,j.key):E!==null&&(E.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===xe&&_a(ue)===E.type)?(E=l(E,j.props),Gs(E,j),E.return=A,E):(E=el(j.type,j.key,j.props,null,A.mode,B),Gs(E,j),E.return=A,E)}function N(A,E,j,B){return E===null||E.tag!==4||E.stateNode.containerInfo!==j.containerInfo||E.stateNode.implementation!==j.implementation?(E=Vi(j,A.mode,B),E.return=A,E):(E=l(E,j.children||[]),E.return=A,E)}function R(A,E,j,B,ue){return E===null||E.tag!==7?(E=ha(j,A.mode,B,ue),E.return=A,E):(E=l(E,j),E.return=A,E)}function U(A,E,j){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=Yi(""+E,A.mode,j),E.return=A,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case w:return j=el(E.type,E.key,E.props,null,A.mode,j),Gs(j,E),j.return=A,j;case G:return E=Vi(E,A.mode,j),E.return=A,E;case xe:return E=_a(E),U(A,E,j)}if(Y(E)||se(E))return E=ha(E,A.mode,j,null),E.return=A,E;if(typeof E.then=="function")return U(A,il(E),j);if(E.$$typeof===H)return U(A,al(A,E),j);ol(A,E)}return null}function O(A,E,j,B){var ue=E!==null?E.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return ue!==null?null:y(A,E,""+j,B);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case w:return j.key===ue?S(A,E,j,B):null;case G:return j.key===ue?N(A,E,j,B):null;case xe:return j=_a(j),O(A,E,j,B)}if(Y(j)||se(j))return ue!==null?null:R(A,E,j,B,null);if(typeof j.then=="function")return O(A,E,il(j),B);if(j.$$typeof===H)return O(A,E,al(A,j),B);ol(A,j)}return null}function D(A,E,j,B,ue){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return A=A.get(j)||null,y(E,A,""+B,ue);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case w:return A=A.get(B.key===null?j:B.key)||null,S(E,A,B,ue);case G:return A=A.get(B.key===null?j:B.key)||null,N(E,A,B,ue);case xe:return B=_a(B),D(A,E,j,B,ue)}if(Y(B)||se(B))return A=A.get(j)||null,R(E,A,B,ue,null);if(typeof B.then=="function")return D(A,E,j,il(B),ue);if(B.$$typeof===H)return D(A,E,j,al(E,B),ue);ol(E,B)}return null}function re(A,E,j,B){for(var ue=null,De=null,ie=E,ke=E=0,Le=null;ie!==null&&ke<j.length;ke++){ie.index>ke?(Le=ie,ie=null):Le=ie.sibling;var Re=O(A,ie,j[ke],B);if(Re===null){ie===null&&(ie=Le);break}e&&ie&&Re.alternate===null&&t(A,ie),E=c(Re,E,ke),De===null?ue=Re:De.sibling=Re,De=Re,ie=Le}if(ke===j.length)return n(A,ie),Oe&&kn(A,ke),ue;if(ie===null){for(;ke<j.length;ke++)ie=U(A,j[ke],B),ie!==null&&(E=c(ie,E,ke),De===null?ue=ie:De.sibling=ie,De=ie);return Oe&&kn(A,ke),ue}for(ie=s(ie);ke<j.length;ke++)Le=D(ie,A,ke,j[ke],B),Le!==null&&(e&&Le.alternate!==null&&ie.delete(Le.key===null?ke:Le.key),E=c(Le,E,ke),De===null?ue=Le:De.sibling=Le,De=Le);return e&&ie.forEach(function(la){return t(A,la)}),Oe&&kn(A,ke),ue}function pe(A,E,j,B){if(j==null)throw Error(o(151));for(var ue=null,De=null,ie=E,ke=E=0,Le=null,Re=j.next();ie!==null&&!Re.done;ke++,Re=j.next()){ie.index>ke?(Le=ie,ie=null):Le=ie.sibling;var la=O(A,ie,Re.value,B);if(la===null){ie===null&&(ie=Le);break}e&&ie&&la.alternate===null&&t(A,ie),E=c(la,E,ke),De===null?ue=la:De.sibling=la,De=la,ie=Le}if(Re.done)return n(A,ie),Oe&&kn(A,ke),ue;if(ie===null){for(;!Re.done;ke++,Re=j.next())Re=U(A,Re.value,B),Re!==null&&(E=c(Re,E,ke),De===null?ue=Re:De.sibling=Re,De=Re);return Oe&&kn(A,ke),ue}for(ie=s(ie);!Re.done;ke++,Re=j.next())Re=D(ie,A,ke,Re.value,B),Re!==null&&(e&&Re.alternate!==null&&ie.delete(Re.key===null?ke:Re.key),E=c(Re,E,ke),De===null?ue=Re:De.sibling=Re,De=Re);return e&&ie.forEach(function(Ny){return t(A,Ny)}),Oe&&kn(A,ke),ue}function Ve(A,E,j,B){if(typeof j=="object"&&j!==null&&j.type===K&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case w:e:{for(var ue=j.key;E!==null;){if(E.key===ue){if(ue=j.type,ue===K){if(E.tag===7){n(A,E.sibling),B=l(E,j.props.children),B.return=A,A=B;break e}}else if(E.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===xe&&_a(ue)===E.type){n(A,E.sibling),B=l(E,j.props),Gs(B,j),B.return=A,A=B;break e}n(A,E);break}else t(A,E);E=E.sibling}j.type===K?(B=ha(j.props.children,A.mode,B,j.key),B.return=A,A=B):(B=el(j.type,j.key,j.props,null,A.mode,B),Gs(B,j),B.return=A,A=B)}return m(A);case G:e:{for(ue=j.key;E!==null;){if(E.key===ue)if(E.tag===4&&E.stateNode.containerInfo===j.containerInfo&&E.stateNode.implementation===j.implementation){n(A,E.sibling),B=l(E,j.children||[]),B.return=A,A=B;break e}else{n(A,E);break}else t(A,E);E=E.sibling}B=Vi(j,A.mode,B),B.return=A,A=B}return m(A);case xe:return j=_a(j),Ve(A,E,j,B)}if(Y(j))return re(A,E,j,B);if(se(j)){if(ue=se(j),typeof ue!="function")throw Error(o(150));return j=ue.call(j),pe(A,E,j,B)}if(typeof j.then=="function")return Ve(A,E,il(j),B);if(j.$$typeof===H)return Ve(A,E,al(A,j),B);ol(A,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,E!==null&&E.tag===6?(n(A,E.sibling),B=l(E,j),B.return=A,A=B):(n(A,E),B=Yi(j,A.mode,B),B.return=A,A=B),m(A)):n(A,E)}return function(A,E,j,B){try{Vs=0;var ue=Ve(A,E,j,B);return $a=null,ue}catch(ie){if(ie===Ja||ie===rl)throw ie;var De=Pt(29,ie,null,A.mode);return De.lanes=B,De.return=A,De}}}var wa=Rd(!0),Pd=Rd(!1),Yn=!1;function no(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ao(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Pe&2)!==0){var l=s.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),s.pending=t,t=$r(e),bd(e,null,n),t}return Jr(e,s,t,n),$r(e)}function Ks(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Eu(e,n)}}function so(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var l=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?l=c=m:c=c.next=m,n=n.next}while(n!==null);c===null?l=c=t:c=c.next=t}else l=c=t;n={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ro=!1;function Xs(){if(ro){var e=Wa;if(e!==null)throw e}}function Qs(e,t,n,s){ro=!1;var l=e.updateQueue;Yn=!1;var c=l.firstBaseUpdate,m=l.lastBaseUpdate,y=l.shared.pending;if(y!==null){l.shared.pending=null;var S=y,N=S.next;S.next=null,m===null?c=N:m.next=N,m=S;var R=e.alternate;R!==null&&(R=R.updateQueue,y=R.lastBaseUpdate,y!==m&&(y===null?R.firstBaseUpdate=N:y.next=N,R.lastBaseUpdate=S))}if(c!==null){var U=l.baseState;m=0,R=N=S=null,y=c;do{var O=y.lane&-536870913,D=O!==y.lane;if(D?(Ne&O)===O:(s&O)===O){O!==0&&O===Za&&(ro=!0),R!==null&&(R=R.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var re=e,pe=y;O=t;var Ve=n;switch(pe.tag){case 1:if(re=pe.payload,typeof re=="function"){U=re.call(Ve,U,O);break e}U=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=pe.payload,O=typeof re=="function"?re.call(Ve,U,O):re,O==null)break e;U=_({},U,O);break e;case 2:Yn=!0}}O=y.callback,O!==null&&(e.flags|=64,D&&(e.flags|=8192),D=l.callbacks,D===null?l.callbacks=[O]:D.push(O))}else D={lane:O,tag:y.tag,payload:y.payload,callback:y.callback,next:null},R===null?(N=R=D,S=U):R=R.next=D,m|=O;if(y=y.next,y===null){if(y=l.shared.pending,y===null)break;D=y,y=D.next,D.next=null,l.lastBaseUpdate=D,l.shared.pending=null}}while(!0);R===null&&(S=U),l.baseState=S,l.firstBaseUpdate=N,l.lastBaseUpdate=R,c===null&&(l.shared.lanes=0),Zn|=m,e.lanes=m,e.memoizedState=U}}function zd(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function qd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)zd(n[e],t)}var es=C(null),cl=C(0);function Bd(e,t){e=On,k(cl,e),k(es,t),On=e|t.baseLanes}function lo(){k(cl,On),k(es,es.current)}function io(){On=cl.current,z(es),z(cl)}var zt=C(null),Jt=null;function Kn(e){var t=e.alternate;k(tt,tt.current&1),k(zt,e),Jt===null&&(t===null||es.current!==null||t.memoizedState!==null)&&(Jt=e)}function oo(e){k(tt,tt.current),k(zt,e),Jt===null&&(Jt=e)}function Ud(e){e.tag===22?(k(tt,tt.current),k(zt,e),Jt===null&&(Jt=e)):Xn()}function Xn(){k(tt,tt.current),k(zt,zt.current)}function qt(e){z(zt),Jt===e&&(Jt=null),z(tt)}var tt=C(0);function ul(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||hc(n)||gc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sn=0,_e=null,Ie=null,st=null,dl=!1,ts=!1,va=!1,pl=0,Fs=0,ns=null,_x=0;function $e(){throw Error(o(321))}function co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function uo(e,t,n,s,l,c){return Sn=c,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?vp:Co,va=!1,c=n(s,l),va=!1,ts&&(c=Id(t,n,s,l)),Hd(e),c}function Hd(e){L.H=Js;var t=Ie!==null&&Ie.next!==null;if(Sn=0,st=Ie=_e=null,dl=!1,Fs=0,ns=null,t)throw Error(o(300));e===null||rt||(e=e.dependencies,e!==null&&nl(e)&&(rt=!0))}function Id(e,t,n,s){_e=e;var l=0;do{if(ts&&(ns=null),Fs=0,ts=!1,25<=l)throw Error(o(301));if(l+=1,st=Ie=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}L.H=Sp,c=t(n,s)}while(ts);return c}function kx(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?Zs(t):t,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(_e.flags|=1024),t}function po(){var e=pl!==0;return pl=0,e}function fo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function mo(e){if(dl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}dl=!1}Sn=0,st=Ie=_e=null,ts=!1,Fs=pl=0,ns=null}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?_e.memoizedState=st=e:st=st.next=e,st}function nt(){if(Ie===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=st===null?_e.memoizedState:st.next;if(t!==null)st=t,Ie=e;else{if(e===null)throw _e.alternate===null?Error(o(467)):Error(o(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},st===null?_e.memoizedState=st=e:st=st.next=e}return st}function fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zs(e){var t=Fs;return Fs+=1,ns===null&&(ns=[]),e=Od(ns,e,t),t=_e,(st===null?t.memoizedState:st.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?vp:Co),e}function ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zs(e);if(e.$$typeof===H)return ht(e)}throw Error(o(438,String(e)))}function ho(e){var t=null,n=_e.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var s=_e.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=fl(),_e.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),s=0;s<e;s++)n[s]=Se;return t.index++,n}function Tn(e,t){return typeof t=="function"?t(e):t}function hl(e){var t=nt();return go(t,Ie,e)}function go(e,t,n){var s=e.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=n;var l=e.baseQueue,c=s.pending;if(c!==null){if(l!==null){var m=l.next;l.next=c.next,c.next=m}t.baseQueue=l=c,s.pending=null}if(c=e.baseState,l===null)e.memoizedState=c;else{t=l.next;var y=m=null,S=null,N=t,R=!1;do{var U=N.lane&-536870913;if(U!==N.lane?(Ne&U)===U:(Sn&U)===U){var O=N.revertLane;if(O===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),U===Za&&(R=!0);else if((Sn&O)===O){N=N.next,O===Za&&(R=!0);continue}else U={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},S===null?(y=S=U,m=c):S=S.next=U,_e.lanes|=O,Zn|=O;U=N.action,va&&n(c,U),c=N.hasEagerState?N.eagerState:n(c,U)}else O={lane:U,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},S===null?(y=S=O,m=c):S=S.next=O,_e.lanes|=U,Zn|=U;N=N.next}while(N!==null&&N!==t);if(S===null?m=c:S.next=y,!Rt(c,e.memoizedState)&&(rt=!0,R&&(n=Wa,n!==null)))throw n;e.memoizedState=c,e.baseState=m,e.baseQueue=S,s.lastRenderedState=c}return l===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function xo(e){var t=nt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var s=n.dispatch,l=n.pending,c=t.memoizedState;if(l!==null){n.pending=null;var m=l=l.next;do c=e(c,m.action),m=m.next;while(m!==l);Rt(c,t.memoizedState)||(rt=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,s]}function Yd(e,t,n){var s=_e,l=nt(),c=Oe;if(c){if(n===void 0)throw Error(o(407));n=n()}else n=t();var m=!Rt((Ie||l).memoizedState,n);if(m&&(l.memoizedState=n,rt=!0),l=l.queue,_o(Kd.bind(null,s,l,e),[e]),l.getSnapshot!==t||m||st!==null&&st.memoizedState.tag&1){if(s.flags|=2048,as(9,{destroy:void 0},Gd.bind(null,s,l,n,t),null),Ke===null)throw Error(o(349));c||(Sn&127)!==0||Vd(s,t,n)}return n}function Vd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t=fl(),_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gd(e,t,n,s){t.value=n,t.getSnapshot=s,Xd(t)&&Qd(e)}function Kd(e,t,n){return n(function(){Xd(t)&&Qd(e)})}function Xd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function Qd(e){var t=ma(e,2);t!==null&&Nt(t,e,2)}function yo(e){var t=wt();if(typeof e=="function"){var n=e;if(e=n(),va){vt(!0);try{n()}finally{vt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:e},t}function Fd(e,t,n,s){return e.baseState=n,go(e,Ie,typeof s=="function"?s:Tn)}function wx(e,t,n,s,l){if(yl(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};L.T!==null?n(!0):c.isTransition=!1,s(c),n=t.pending,n===null?(c.next=t.pending=c,Zd(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Zd(e,t){var n=t.action,s=t.payload,l=e.state;if(t.isTransition){var c=L.T,m={};L.T=m;try{var y=n(l,s),S=L.S;S!==null&&S(m,y),Wd(e,t,y)}catch(N){bo(e,t,N)}finally{c!==null&&m.types!==null&&(c.types=m.types),L.T=c}}else try{c=n(l,s),Wd(e,t,c)}catch(N){bo(e,t,N)}}function Wd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(s){Jd(e,t,s)},function(s){return bo(e,t,s)}):Jd(e,t,n)}function Jd(e,t,n){t.status="fulfilled",t.value=n,$d(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zd(e,n)))}function bo(e,t,n){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=n,$d(t),t=t.next;while(t!==s)}e.action=null}function $d(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ep(e,t){return t}function tp(e,t){if(Oe){var n=Ke.formState;if(n!==null){e:{var s=_e;if(Oe){if(Fe){t:{for(var l=Fe,c=Wt;l.nodeType!==8;){if(!c){l=null;break t}if(l=$t(l.nextSibling),l===null){l=null;break t}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Fe=$t(l.nextSibling),s=l.data==="F!";break e}}Hn(s)}s=!1}s&&(t=n[0])}}return n=wt(),n.memoizedState=n.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ep,lastRenderedState:t},n.queue=s,n=_p.bind(null,_e,s),s.dispatch=n,s=yo(!1),c=To.bind(null,_e,!1,s.queue),s=wt(),l={state:t,dispatch:null,action:e,pending:null},s.queue=l,n=wx.bind(null,_e,l,c,n),l.dispatch=n,s.memoizedState=e,[t,n,!1]}function np(e){var t=nt();return ap(t,Ie,e)}function ap(e,t,n){if(t=go(e,t,ep)[0],e=hl(Tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=Zs(t)}catch(m){throw m===Ja?rl:m}else s=t;t=nt();var l=t.queue,c=l.dispatch;return n!==t.memoizedState&&(_e.flags|=2048,as(9,{destroy:void 0},vx.bind(null,l,n),null)),[s,c,e]}function vx(e,t){e.action=t}function sp(e){var t=nt(),n=Ie;if(n!==null)return ap(t,n,e);nt(),t=t.memoizedState,n=nt();var s=n.queue.dispatch;return n.memoizedState=e,[t,s,!1]}function as(e,t,n,s){return e={tag:e,create:n,deps:s,inst:t,next:null},t=_e.updateQueue,t===null&&(t=fl(),_e.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e),e}function rp(){return nt().memoizedState}function gl(e,t,n,s){var l=wt();_e.flags|=e,l.memoizedState=as(1|t,{destroy:void 0},n,s===void 0?null:s)}function xl(e,t,n,s){var l=nt();s=s===void 0?null:s;var c=l.memoizedState.inst;Ie!==null&&s!==null&&co(s,Ie.memoizedState.deps)?l.memoizedState=as(t,c,n,s):(_e.flags|=e,l.memoizedState=as(1|t,c,n,s))}function lp(e,t){gl(8390656,8,e,t)}function _o(e,t){xl(2048,8,e,t)}function Sx(e){_e.flags|=4;var t=_e.updateQueue;if(t===null)t=fl(),_e.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ip(e){var t=nt().memoizedState;return Sx({ref:t,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function op(e,t){return xl(4,2,e,t)}function cp(e,t){return xl(4,4,e,t)}function up(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dp(e,t,n){n=n!=null?n.concat([e]):null,xl(4,4,up.bind(null,t,e),n)}function ko(){}function pp(e,t){var n=nt();t=t===void 0?null:t;var s=n.memoizedState;return t!==null&&co(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function fp(e,t){var n=nt();t=t===void 0?null:t;var s=n.memoizedState;if(t!==null&&co(t,s[1]))return s[0];if(s=e(),va){vt(!0);try{e()}finally{vt(!1)}}return n.memoizedState=[s,t],s}function wo(e,t,n){return n===void 0||(Sn&1073741824)!==0&&(Ne&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=hf(),_e.lanes|=e,Zn|=e,n)}function mp(e,t,n,s){return Rt(n,t)?n:es.current!==null?(e=wo(e,n,s),Rt(e,t)||(rt=!0),e):(Sn&42)===0||(Sn&1073741824)!==0&&(Ne&261930)===0?(rt=!0,e.memoizedState=n):(e=hf(),_e.lanes|=e,Zn|=e,t)}function hp(e,t,n,s,l){var c=V.p;V.p=c!==0&&8>c?c:8;var m=L.T,y={};L.T=y,To(e,!1,t,n);try{var S=l(),N=L.S;if(N!==null&&N(y,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var R=bx(S,s);Ws(e,t,R,Ht(e))}else Ws(e,t,s,Ht(e))}catch(U){Ws(e,t,{then:function(){},status:"rejected",reason:U},Ht())}finally{V.p=c,m!==null&&y.types!==null&&(m.types=y.types),L.T=m}}function Tx(){}function vo(e,t,n,s){if(e.tag!==5)throw Error(o(476));var l=gp(e).queue;hp(e,l,t,oe,n===null?Tx:function(){return xp(e),n(s)})}function gp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:oe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function xp(e){var t=gp(e);t.next===null&&(t=e.alternate.memoizedState),Ws(e,t.next.queue,{},Ht())}function So(){return ht(mr)}function yp(){return nt().memoizedState}function bp(){return nt().memoizedState}function Cx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ht();e=Vn(n);var s=Gn(t,e,n);s!==null&&(Nt(s,t,n),Ks(s,t,n)),t={cache:Ji()},e.payload=t;return}t=t.return}}function Ex(e,t,n){var s=Ht();n={lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},yl(e)?kp(t,n):(n=Hi(e,t,n,s),n!==null&&(Nt(n,e,s),wp(n,t,s)))}function _p(e,t,n){var s=Ht();Ws(e,t,n,s)}function Ws(e,t,n,s){var l={lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(yl(e))kp(t,l);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var m=t.lastRenderedState,y=c(m,n);if(l.hasEagerState=!0,l.eagerState=y,Rt(y,m))return Jr(e,t,l,0),Ke===null&&Wr(),!1}catch{}if(n=Hi(e,t,l,s),n!==null)return Nt(n,e,s),wp(n,t,s),!0}return!1}function To(e,t,n,s){if(s={lane:2,revertLane:ac(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},yl(e)){if(t)throw Error(o(479))}else t=Hi(e,n,s,2),t!==null&&Nt(t,e,2)}function yl(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function kp(e,t){ts=dl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wp(e,t,n){if((n&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Eu(e,n)}}var Js={readContext:ht,use:ml,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};Js.useEffectEvent=$e;var vp={readContext:ht,use:ml,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:lp,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,gl(4194308,4,up.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gl(4194308,4,e,t)},useInsertionEffect:function(e,t){gl(4,2,e,t)},useMemo:function(e,t){var n=wt();t=t===void 0?null:t;var s=e();if(va){vt(!0);try{e()}finally{vt(!1)}}return n.memoizedState=[s,t],s},useReducer:function(e,t,n){var s=wt();if(n!==void 0){var l=n(t);if(va){vt(!0);try{n(t)}finally{vt(!1)}}}else l=t;return s.memoizedState=s.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},s.queue=e,e=e.dispatch=Ex.bind(null,_e,e),[s.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:function(e){e=yo(e);var t=e.queue,n=_p.bind(null,_e,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ko,useDeferredValue:function(e,t){var n=wt();return wo(n,e,t)},useTransition:function(){var e=yo(!1);return e=hp.bind(null,_e,e.queue,!0,!1),wt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var s=_e,l=wt();if(Oe){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ke===null)throw Error(o(349));(Ne&127)!==0||Vd(s,t,n)}l.memoizedState=n;var c={value:n,getSnapshot:t};return l.queue=c,lp(Kd.bind(null,s,c,e),[e]),s.flags|=2048,as(9,{destroy:void 0},Gd.bind(null,s,c,n,t),null),n},useId:function(){var e=wt(),t=Ke.identifierPrefix;if(Oe){var n=on,s=ln;n=(s&~(1<<32-Ge(s)-1)).toString(32)+n,t="_"+t+"R_"+n,n=pl++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=_x++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:So,useFormState:tp,useActionState:tp,useOptimistic:function(e){var t=wt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=To.bind(null,_e,!0,n),n.dispatch=t,[e,t]},useMemoCache:ho,useCacheRefresh:function(){return wt().memoizedState=Cx.bind(null,_e)},useEffectEvent:function(e){var t=wt(),n={impl:e};return t.memoizedState=n,function(){if((Pe&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Co={readContext:ht,use:ml,useCallback:pp,useContext:ht,useEffect:_o,useImperativeHandle:dp,useInsertionEffect:op,useLayoutEffect:cp,useMemo:fp,useReducer:hl,useRef:rp,useState:function(){return hl(Tn)},useDebugValue:ko,useDeferredValue:function(e,t){var n=nt();return mp(n,Ie.memoizedState,e,t)},useTransition:function(){var e=hl(Tn)[0],t=nt().memoizedState;return[typeof e=="boolean"?e:Zs(e),t]},useSyncExternalStore:Yd,useId:yp,useHostTransitionStatus:So,useFormState:np,useActionState:np,useOptimistic:function(e,t){var n=nt();return Fd(n,Ie,e,t)},useMemoCache:ho,useCacheRefresh:bp};Co.useEffectEvent=ip;var Sp={readContext:ht,use:ml,useCallback:pp,useContext:ht,useEffect:_o,useImperativeHandle:dp,useInsertionEffect:op,useLayoutEffect:cp,useMemo:fp,useReducer:xo,useRef:rp,useState:function(){return xo(Tn)},useDebugValue:ko,useDeferredValue:function(e,t){var n=nt();return Ie===null?wo(n,e,t):mp(n,Ie.memoizedState,e,t)},useTransition:function(){var e=xo(Tn)[0],t=nt().memoizedState;return[typeof e=="boolean"?e:Zs(e),t]},useSyncExternalStore:Yd,useId:yp,useHostTransitionStatus:So,useFormState:sp,useActionState:sp,useOptimistic:function(e,t){var n=nt();return Ie!==null?Fd(n,Ie,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ho,useCacheRefresh:bp};Sp.useEffectEvent=ip;function Eo(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:_({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ao={enqueueSetState:function(e,t,n){e=e._reactInternals;var s=Ht(),l=Vn(s);l.payload=t,n!=null&&(l.callback=n),t=Gn(e,l,s),t!==null&&(Nt(t,e,s),Ks(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=Ht(),l=Vn(s);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Gn(e,l,s),t!==null&&(Nt(t,e,s),Ks(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ht(),s=Vn(n);s.tag=2,t!=null&&(s.callback=t),t=Gn(e,s,n),t!==null&&(Nt(t,e,n),Ks(t,e,n))}};function Tp(e,t,n,s,l,c,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,m):t.prototype&&t.prototype.isPureReactComponent?!qs(n,s)||!qs(l,c):!0}function Cp(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function Sa(e,t){var n=t;if("ref"in t){n={};for(var s in t)s!=="ref"&&(n[s]=t[s])}if(e=e.defaultProps){n===t&&(n=_({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Ep(e){Zr(e)}function Ap(e){console.error(e)}function jp(e){Zr(e)}function bl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function Np(e,t,n){try{var s=e.onCaughtError;s(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function jo(e,t,n){return n=Vn(n),n.tag=3,n.payload={element:null},n.callback=function(){bl(e,t)},n}function Lp(e){return e=Vn(e),e.tag=3,e}function Op(e,t,n,s){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var c=s.value;e.payload=function(){return l(c)},e.callback=function(){Np(t,n,s)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Np(t,n,s),typeof l!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var y=s.stack;this.componentDidCatch(s.value,{componentStack:y!==null?y:""})})}function Ax(e,t,n,s,l){if(n.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=n.alternate,t!==null&&Fa(t,n,l,!0),n=zt.current,n!==null){switch(n.tag){case 31:case 13:return Jt===null?Ll():n.alternate===null&&et===0&&(et=3),n.flags&=-257,n.flags|=65536,n.lanes=l,s===ll?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([s]):t.add(s),ec(e,s,l)),!1;case 22:return n.flags|=65536,s===ll?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([s]):n.add(s)),ec(e,s,l)),!1}throw Error(o(435,n.tag))}return ec(e,s,l),Ll(),!1}if(Oe)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,s!==Xi&&(e=Error(o(422),{cause:s}),Hs(Qt(e,n)))):(s!==Xi&&(t=Error(o(423),{cause:s}),Hs(Qt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,s=Qt(s,n),l=jo(e.stateNode,s,l),so(e,l),et!==4&&(et=2)),!1;var c=Error(o(520),{cause:s});if(c=Qt(c,n),lr===null?lr=[c]:lr.push(c),et!==4&&(et=2),t===null)return!0;s=Qt(s,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=jo(n.stateNode,s,e),so(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Wn===null||!Wn.has(c))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Lp(l),Op(l,e,n,s),so(n,l),!1}n=n.return}while(n!==null);return!1}var No=Error(o(461)),rt=!1;function gt(e,t,n,s){t.child=e===null?Pd(t,null,n,s):wa(t,e.child,n,s)}function Mp(e,t,n,s,l){n=n.render;var c=t.ref;if("ref"in s){var m={};for(var y in s)y!=="ref"&&(m[y]=s[y])}else m=s;return ya(t),s=uo(e,t,n,m,c,l),y=po(),e!==null&&!rt?(fo(e,t,l),Cn(e,t,l)):(Oe&&y&&Gi(t),t.flags|=1,gt(e,t,s,l),t.child)}function Dp(e,t,n,s,l){if(e===null){var c=n.type;return typeof c=="function"&&!Ii(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,Rp(e,t,c,s,l)):(e=el(n.type,null,s,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!qo(e,l)){var m=c.memoizedProps;if(n=n.compare,n=n!==null?n:qs,n(m,s)&&e.ref===t.ref)return Cn(e,t,l)}return t.flags|=1,e=_n(c,s),e.ref=t.ref,e.return=t,t.child=e}function Rp(e,t,n,s,l){if(e!==null){var c=e.memoizedProps;if(qs(c,s)&&e.ref===t.ref)if(rt=!1,t.pendingProps=s=c,qo(e,l))(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,Cn(e,t,l)}return Lo(e,t,n,s,l)}function Pp(e,t,n,s){var l=s.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(s=t.child=e.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;s=l&~c}else s=0,t.child=null;return zp(e,t,c,n,s)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&sl(t,c!==null?c.cachePool:null),c!==null?Bd(t,c):lo(),Ud(t);else return s=t.lanes=536870912,zp(e,t,c!==null?c.baseLanes|n:n,n,s)}else c!==null?(sl(t,c.cachePool),Bd(t,c),Xn(),t.memoizedState=null):(e!==null&&sl(t,null),lo(),Xn());return gt(e,t,l,n),t.child}function $s(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function zp(e,t,n,s,l){var c=eo();return c=c===null?null:{parent:at._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&sl(t,null),lo(),Ud(t),e!==null&&Fa(e,t,s,!0),t.childLanes=l,null}function _l(e,t){return t=wl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function qp(e,t,n){return wa(t,e.child,null,n),e=_l(t,t.pendingProps),e.flags|=2,qt(t),t.memoizedState=null,e}function jx(e,t,n){var s=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Oe){if(s.mode==="hidden")return e=_l(t,s),t.lanes=536870912,$s(null,e);if(oo(t),(e=Fe)?(e=Wf(e,Wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:ln,overflow:on}:null,retryLane:536870912,hydrationErrors:null},n=kd(e),n.return=t,t.child=n,mt=t,Fe=null)):e=null,e===null)throw Hn(t);return t.lanes=536870912,null}return _l(t,s)}var c=e.memoizedState;if(c!==null){var m=c.dehydrated;if(oo(t),l)if(t.flags&256)t.flags&=-257,t=qp(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(rt||Fa(e,t,n,!1),l=(n&e.childLanes)!==0,rt||l){if(s=Ke,s!==null&&(m=Au(s,n),m!==0&&m!==c.retryLane))throw c.retryLane=m,ma(e,m),Nt(s,e,m),No;Ll(),t=qp(e,t,n)}else e=c.treeContext,Fe=$t(m.nextSibling),mt=t,Oe=!0,Un=null,Wt=!1,e!==null&&Sd(t,e),t=_l(t,s),t.flags|=4096;return t}return e=_n(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function kl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Lo(e,t,n,s,l){return ya(t),n=uo(e,t,n,s,void 0,l),s=po(),e!==null&&!rt?(fo(e,t,l),Cn(e,t,l)):(Oe&&s&&Gi(t),t.flags|=1,gt(e,t,n,l),t.child)}function Bp(e,t,n,s,l,c){return ya(t),t.updateQueue=null,n=Id(t,s,n,l),Hd(e),s=po(),e!==null&&!rt?(fo(e,t,c),Cn(e,t,c)):(Oe&&s&&Gi(t),t.flags|=1,gt(e,t,n,c),t.child)}function Up(e,t,n,s,l){if(ya(t),t.stateNode===null){var c=Ga,m=n.contextType;typeof m=="object"&&m!==null&&(c=ht(m)),c=new n(s,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Ao,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=s,c.state=t.memoizedState,c.refs={},no(t),m=n.contextType,c.context=typeof m=="object"&&m!==null?ht(m):Ga,c.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(Eo(t,n,m,s),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&Ao.enqueueReplaceState(c,c.state,null),Qs(t,s,c,l),Xs(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){c=t.stateNode;var y=t.memoizedProps,S=Sa(n,y);c.props=S;var N=c.context,R=n.contextType;m=Ga,typeof R=="object"&&R!==null&&(m=ht(R));var U=n.getDerivedStateFromProps;R=typeof U=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,R||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||N!==m)&&Cp(t,c,s,m),Yn=!1;var O=t.memoizedState;c.state=O,Qs(t,s,c,l),Xs(),N=t.memoizedState,y||O!==N||Yn?(typeof U=="function"&&(Eo(t,n,U,s),N=t.memoizedState),(S=Yn||Tp(t,n,S,s,O,N,m))?(R||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=N),c.props=s,c.state=N,c.context=m,s=S):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{c=t.stateNode,ao(e,t),m=t.memoizedProps,R=Sa(n,m),c.props=R,U=t.pendingProps,O=c.context,N=n.contextType,S=Ga,typeof N=="object"&&N!==null&&(S=ht(N)),y=n.getDerivedStateFromProps,(N=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==U||O!==S)&&Cp(t,c,s,S),Yn=!1,O=t.memoizedState,c.state=O,Qs(t,s,c,l),Xs();var D=t.memoizedState;m!==U||O!==D||Yn||e!==null&&e.dependencies!==null&&nl(e.dependencies)?(typeof y=="function"&&(Eo(t,n,y,s),D=t.memoizedState),(R=Yn||Tp(t,n,R,s,O,D,S)||e!==null&&e.dependencies!==null&&nl(e.dependencies))?(N||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,D,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,D,S)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=D),c.props=s,c.state=D,c.context=S,s=R):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),s=!1)}return c=s,kl(e,t),s=(t.flags&128)!==0,c||s?(c=t.stateNode,n=s&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&s?(t.child=wa(t,e.child,null,l),t.child=wa(t,null,n,l)):gt(e,t,n,l),t.memoizedState=c.state,e=t.child):e=Cn(e,t,l),e}function Hp(e,t,n,s){return ga(),t.flags|=256,gt(e,t,n,s),t.child}var Oo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mo(e){return{baseLanes:e,cachePool:Nd()}}function Do(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ut),e}function Ip(e,t,n){var s=t.pendingProps,l=!1,c=(t.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(tt.current&2)!==0),m&&(l=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Oe){if(l?Kn(t):Xn(),(e=Fe)?(e=Wf(e,Wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:ln,overflow:on}:null,retryLane:536870912,hydrationErrors:null},n=kd(e),n.return=t,t.child=n,mt=t,Fe=null)):e=null,e===null)throw Hn(t);return gc(e)?t.lanes=32:t.lanes=536870912,null}var y=s.children;return s=s.fallback,l?(Xn(),l=t.mode,y=wl({mode:"hidden",children:y},l),s=ha(s,l,n,null),y.return=t,s.return=t,y.sibling=s,t.child=y,s=t.child,s.memoizedState=Mo(n),s.childLanes=Do(e,m,n),t.memoizedState=Oo,$s(null,s)):(Kn(t),Ro(t,y))}var S=e.memoizedState;if(S!==null&&(y=S.dehydrated,y!==null)){if(c)t.flags&256?(Kn(t),t.flags&=-257,t=Po(e,t,n)):t.memoizedState!==null?(Xn(),t.child=e.child,t.flags|=128,t=null):(Xn(),y=s.fallback,l=t.mode,s=wl({mode:"visible",children:s.children},l),y=ha(y,l,n,null),y.flags|=2,s.return=t,y.return=t,s.sibling=y,t.child=s,wa(t,e.child,null,n),s=t.child,s.memoizedState=Mo(n),s.childLanes=Do(e,m,n),t.memoizedState=Oo,t=$s(null,s));else if(Kn(t),gc(y)){if(m=y.nextSibling&&y.nextSibling.dataset,m)var N=m.dgst;m=N,s=Error(o(419)),s.stack="",s.digest=m,Hs({value:s,source:null,stack:null}),t=Po(e,t,n)}else if(rt||Fa(e,t,n,!1),m=(n&e.childLanes)!==0,rt||m){if(m=Ke,m!==null&&(s=Au(m,n),s!==0&&s!==S.retryLane))throw S.retryLane=s,ma(e,s),Nt(m,e,s),No;hc(y)||Ll(),t=Po(e,t,n)}else hc(y)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Fe=$t(y.nextSibling),mt=t,Oe=!0,Un=null,Wt=!1,e!==null&&Sd(t,e),t=Ro(t,s.children),t.flags|=4096);return t}return l?(Xn(),y=s.fallback,l=t.mode,S=e.child,N=S.sibling,s=_n(S,{mode:"hidden",children:s.children}),s.subtreeFlags=S.subtreeFlags&65011712,N!==null?y=_n(N,y):(y=ha(y,l,n,null),y.flags|=2),y.return=t,s.return=t,s.sibling=y,t.child=s,$s(null,s),s=t.child,y=e.child.memoizedState,y===null?y=Mo(n):(l=y.cachePool,l!==null?(S=at._currentValue,l=l.parent!==S?{parent:S,pool:S}:l):l=Nd(),y={baseLanes:y.baseLanes|n,cachePool:l}),s.memoizedState=y,s.childLanes=Do(e,m,n),t.memoizedState=Oo,$s(e.child,s)):(Kn(t),n=e.child,e=n.sibling,n=_n(n,{mode:"visible",children:s.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function Ro(e,t){return t=wl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function wl(e,t){return e=Pt(22,e,null,t),e.lanes=0,e}function Po(e,t,n){return wa(t,e.child,null,n),e=Ro(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yp(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Zi(e.return,t,n)}function zo(e,t,n,s,l,c){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:l,treeForkCount:c}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=s,m.tail=n,m.tailMode=l,m.treeForkCount=c)}function Vp(e,t,n){var s=t.pendingProps,l=s.revealOrder,c=s.tail;s=s.children;var m=tt.current,y=(m&2)!==0;if(y?(m=m&1|2,t.flags|=128):m&=1,k(tt,m),gt(e,t,s,n),s=Oe?Us:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yp(e,n,t);else if(e.tag===19)Yp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ul(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),zo(t,!1,l,n,c,s);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ul(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}zo(t,!0,n,null,c,s);break;case"together":zo(t,!1,null,null,void 0,s);break;default:t.memoizedState=null}return t.child}function Cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Fa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&nl(e)))}function Nx(e,t,n){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),In(t,at,e.memoizedState.cache),ga();break;case 27:case 5:Vt(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:In(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,oo(t),null;break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(Kn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ip(e,t,n):(Kn(t),e=Cn(e,t,n),e!==null?e.sibling:null);Kn(t);break;case 19:var l=(e.flags&128)!==0;if(s=(n&t.childLanes)!==0,s||(Fa(e,t,n,!1),s=(n&t.childLanes)!==0),l){if(s)return Vp(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),k(tt,tt.current),s)break;return null;case 22:return t.lanes=0,Pp(e,t,n,t.pendingProps);case 24:In(t,at,e.memoizedState.cache)}return Cn(e,t,n)}function Gp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)rt=!0;else{if(!qo(e,n)&&(t.flags&128)===0)return rt=!1,Nx(e,t,n);rt=(e.flags&131072)!==0}else rt=!1,Oe&&(t.flags&1048576)!==0&&vd(t,Us,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=_a(t.elementType),t.type=e,typeof e=="function")Ii(e)?(s=Sa(e,s),t.tag=1,t=Up(null,t,e,s,n)):(t.tag=0,t=Lo(null,t,e,s,n));else{if(e!=null){var l=e.$$typeof;if(l===le){t.tag=11,t=Mp(null,t,e,s,n);break e}else if(l===$){t.tag=14,t=Dp(null,t,e,s,n);break e}}throw t=J(e)||e,Error(o(306,t,""))}}return t;case 0:return Lo(e,t,t.type,t.pendingProps,n);case 1:return s=t.type,l=Sa(s,t.pendingProps),Up(e,t,s,l,n);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(o(387));s=t.pendingProps;var c=t.memoizedState;l=c.element,ao(e,t),Qs(t,s,null,n);var m=t.memoizedState;if(s=m.cache,In(t,at,s),s!==c.cache&&Wi(t,[at],n,!0),Xs(),s=m.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Hp(e,t,s,n);break e}else if(s!==l){l=Qt(Error(o(424)),t),Hs(l),t=Hp(e,t,s,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Fe=$t(e.firstChild),mt=t,Oe=!0,Un=null,Wt=!0,n=Pd(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ga(),s===l){t=Cn(e,t,n);break e}gt(e,t,s,n)}t=t.child}return t;case 26:return kl(e,t),e===null?(n=am(t.type,null,t.pendingProps,null))?t.memoizedState=n:Oe||(n=t.type,e=t.pendingProps,s=ql(ce.current).createElement(n),s[ft]=t,s[St]=e,xt(s,n,e),dt(s),t.stateNode=s):t.memoizedState=am(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Vt(t),e===null&&Oe&&(s=t.stateNode=em(t.type,t.pendingProps,ce.current),mt=t,Wt=!0,l=Fe,ta(t.type)?(xc=l,Fe=$t(s.firstChild)):Fe=l),gt(e,t,t.pendingProps.children,n),kl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Oe&&((l=s=Fe)&&(s=ly(s,t.type,t.pendingProps,Wt),s!==null?(t.stateNode=s,mt=t,Fe=$t(s.firstChild),Wt=!1,l=!0):l=!1),l||Hn(t)),Vt(t),l=t.type,c=t.pendingProps,m=e!==null?e.memoizedProps:null,s=c.children,pc(l,c)?s=null:m!==null&&pc(l,m)&&(t.flags|=32),t.memoizedState!==null&&(l=uo(e,t,kx,null,null,n),mr._currentValue=l),kl(e,t),gt(e,t,s,n),t.child;case 6:return e===null&&Oe&&((e=n=Fe)&&(n=iy(n,t.pendingProps,Wt),n!==null?(t.stateNode=n,mt=t,Fe=null,e=!0):e=!1),e||Hn(t)),null;case 13:return Ip(e,t,n);case 4:return We(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=wa(t,null,s,n):gt(e,t,s,n),t.child;case 11:return Mp(e,t,t.type,t.pendingProps,n);case 7:return gt(e,t,t.pendingProps,n),t.child;case 8:return gt(e,t,t.pendingProps.children,n),t.child;case 12:return gt(e,t,t.pendingProps.children,n),t.child;case 10:return s=t.pendingProps,In(t,t.type,s.value),gt(e,t,s.children,n),t.child;case 9:return l=t.type._context,s=t.pendingProps.children,ya(t),l=ht(l),s=s(l),t.flags|=1,gt(e,t,s,n),t.child;case 14:return Dp(e,t,t.type,t.pendingProps,n);case 15:return Rp(e,t,t.type,t.pendingProps,n);case 19:return Vp(e,t,n);case 31:return jx(e,t,n);case 22:return Pp(e,t,n,t.pendingProps);case 24:return ya(t),s=ht(at),e===null?(l=eo(),l===null&&(l=Ke,c=Ji(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=n),l=c),t.memoizedState={parent:s,cache:l},no(t),In(t,at,l)):((e.lanes&n)!==0&&(ao(e,t),Qs(t,null,null,n),Xs()),l=e.memoizedState,c=t.memoizedState,l.parent!==s?(l={parent:s,cache:s},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),In(t,at,s)):(s=c.cache,In(t,at,s),s!==l.cache&&Wi(t,[at],n,!0))),gt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function En(e){e.flags|=4}function Bo(e,t,n,s,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(bf())e.flags|=8192;else throw ka=ll,to}else e.flags&=-16777217}function Kp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!om(t))if(bf())e.flags|=8192;else throw ka=ll,to}function vl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Tu():536870912,e.lanes|=t,is|=t)}function er(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,s|=l.subtreeFlags&65011712,s|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function Lx(e,t,n){var s=t.pendingProps;switch(Ki(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return Ze(t),null;case 3:return n=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),vn(at),He(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Qa(t)?En(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Qi())),Ze(t),null;case 26:var l=t.type,c=t.memoizedState;return e===null?(En(t),c!==null?(Ze(t),Kp(t,c)):(Ze(t),Bo(t,l,null,s,n))):c?c!==e.memoizedState?(En(t),Ze(t),Kp(t,c)):(Ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&En(t),Ze(t),Bo(t,l,e,s,n)),null;case 27:if(mn(t),n=ce.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&En(t);else{if(!s){if(t.stateNode===null)throw Error(o(166));return Ze(t),null}e=ne.current,Qa(t)?Td(t):(e=em(l,s,n),t.stateNode=e,En(t))}return Ze(t),null;case 5:if(mn(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&En(t);else{if(!s){if(t.stateNode===null)throw Error(o(166));return Ze(t),null}if(c=ne.current,Qa(t))Td(t);else{var m=ql(ce.current);switch(c){case 1:c=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=m.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?m.createElement("select",{is:s.is}):m.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?m.createElement(l,{is:s.is}):m.createElement(l)}}c[ft]=t,c[St]=s;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)c.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=c;e:switch(xt(c,l,s),l){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&En(t)}}return Ze(t),Bo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&En(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(e=ce.current,Qa(t)){if(e=t.stateNode,n=t.memoizedProps,s=null,l=mt,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}e[ft]=t,e=!!(e.nodeValue===n||s!==null&&s.suppressHydrationWarning===!0||Yf(e.nodeValue,n)),e||Hn(t,!0)}else e=ql(e).createTextNode(s),e[ft]=t,t.stateNode=e}return Ze(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(s=Qa(t),n!==null){if(e===null){if(!s)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[ft]=t}else ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),e=!1}else n=Qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(qt(t),t):(qt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Ze(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Qa(t),s!==null&&s.dehydrated!==null){if(e===null){if(!l)throw Error(o(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[ft]=t}else ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),l=!1}else l=Qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(qt(t),t):(qt(t),null)}return qt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=s!==null,e=e!==null&&e.memoizedState!==null,n&&(s=t.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),vl(t,t.updateQueue),Ze(t),null);case 4:return He(),e===null&&ic(t.stateNode.containerInfo),Ze(t),null;case 10:return vn(t.type),Ze(t),null;case 19:if(z(tt),s=t.memoizedState,s===null)return Ze(t),null;if(l=(t.flags&128)!==0,c=s.rendering,c===null)if(l)er(s,!1);else{if(et!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=ul(e),c!==null){for(t.flags|=128,er(s,!1),e=c.updateQueue,t.updateQueue=e,vl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_d(n,e),n=n.sibling;return k(tt,tt.current&1|2),Oe&&kn(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&_t()>Al&&(t.flags|=128,l=!0,er(s,!1),t.lanes=4194304)}else{if(!l)if(e=ul(c),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,vl(t,e),er(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!Oe)return Ze(t),null}else 2*_t()-s.renderingStartTime>Al&&n!==536870912&&(t.flags|=128,l=!0,er(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(e=s.last,e!==null?e.sibling=c:t.child=c,s.last=c)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=tt.current,k(tt,l?n&1|2:n&1),Oe&&kn(t,s.treeForkCount),e):(Ze(t),null);case 22:case 23:return qt(t),io(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(n&536870912)!==0&&(t.flags&128)===0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),n=t.updateQueue,n!==null&&vl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==n&&(t.flags|=2048),e!==null&&z(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),vn(at),Ze(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Ox(e,t){switch(Ki(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(at),He(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return mn(t),null;case 31:if(t.memoizedState!==null){if(qt(t),t.alternate===null)throw Error(o(340));ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(qt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(tt),null;case 4:return He(),null;case 10:return vn(t.type),null;case 22:case 23:return qt(t),io(),e!==null&&z(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return vn(at),null;case 25:return null;default:return null}}function Xp(e,t){switch(Ki(t),t.tag){case 3:vn(at),He();break;case 26:case 27:case 5:mn(t);break;case 4:He();break;case 31:t.memoizedState!==null&&qt(t);break;case 13:qt(t);break;case 19:z(tt);break;case 10:vn(t.type);break;case 22:case 23:qt(t),io(),e!==null&&z(ba);break;case 24:vn(at)}}function tr(e,t){try{var n=t.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var l=s.next;n=l;do{if((n.tag&e)===e){s=void 0;var c=n.create,m=n.inst;s=c(),m.destroy=s}n=n.next}while(n!==l)}}catch(y){Ue(t,t.return,y)}}function Qn(e,t,n){try{var s=t.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var c=l.next;s=c;do{if((s.tag&e)===e){var m=s.inst,y=m.destroy;if(y!==void 0){m.destroy=void 0,l=t;var S=n,N=y;try{N()}catch(R){Ue(l,S,R)}}}s=s.next}while(s!==c)}}catch(R){Ue(t,t.return,R)}}function Qp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qd(t,n)}catch(s){Ue(e,e.return,s)}}}function Fp(e,t,n){n.props=Sa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(s){Ue(e,t,s)}}function nr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof n=="function"?e.refCleanup=n(s):n.current=s}}catch(l){Ue(e,t,l)}}function cn(e,t){var n=e.ref,s=e.refCleanup;if(n!==null)if(typeof s=="function")try{s()}catch(l){Ue(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Ue(e,t,l)}else n.current=null}function Zp(e){var t=e.type,n=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&s.focus();break e;case"img":n.src?s.src=n.src:n.srcSet&&(s.srcset=n.srcSet)}}catch(l){Ue(e,e.return,l)}}function Uo(e,t,n){try{var s=e.stateNode;ey(s,e.type,n,t),s[St]=t}catch(l){Ue(e,e.return,l)}}function Wp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ta(e.type)||e.tag===4}function Ho(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Io(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yn));else if(s!==4&&(s===27&&ta(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Io(e,t,n),e=e.sibling;e!==null;)Io(e,t,n),e=e.sibling}function Sl(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(s===27&&ta(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Sl(e,t,n),e=e.sibling;e!==null;)Sl(e,t,n),e=e.sibling}function Jp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var s=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);xt(t,s,n),t[ft]=e,t[St]=n}catch(c){Ue(e,e.return,c)}}var An=!1,lt=!1,Yo=!1,$p=typeof WeakSet=="function"?WeakSet:Set,pt=null;function Mx(e,t){if(e=e.containerInfo,uc=Gl,e=dd(e),Ri(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var l=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var m=0,y=-1,S=-1,N=0,R=0,U=e,O=null;t:for(;;){for(var D;U!==n||l!==0&&U.nodeType!==3||(y=m+l),U!==c||s!==0&&U.nodeType!==3||(S=m+s),U.nodeType===3&&(m+=U.nodeValue.length),(D=U.firstChild)!==null;)O=U,U=D;for(;;){if(U===e)break t;if(O===n&&++N===l&&(y=m),O===c&&++R===s&&(S=m),(D=U.nextSibling)!==null)break;U=O,O=U.parentNode}U=D}n=y===-1||S===-1?null:{start:y,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(dc={focusedElem:e,selectionRange:n},Gl=!1,pt=t;pt!==null;)if(t=pt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,pt=e;else for(;pt!==null;){switch(t=pt,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,l=c.memoizedProps,c=c.memoizedState,s=n.stateNode;try{var re=Sa(n.type,l);e=s.getSnapshotBeforeUpdate(re,c),s.__reactInternalSnapshotBeforeUpdate=e}catch(pe){Ue(n,n.return,pe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)mc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,pt=e;break}pt=t.return}}function ef(e,t,n){var s=n.flags;switch(n.tag){case 0:case 11:case 15:Nn(e,n),s&4&&tr(5,n);break;case 1:if(Nn(e,n),s&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Ue(n,n.return,m)}else{var l=Sa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ue(n,n.return,m)}}s&64&&Qp(n),s&512&&nr(n,n.return);break;case 3:if(Nn(e,n),s&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qd(e,t)}catch(m){Ue(n,n.return,m)}}break;case 27:t===null&&s&4&&Jp(n);case 26:case 5:Nn(e,n),t===null&&s&4&&Zp(n),s&512&&nr(n,n.return);break;case 12:Nn(e,n);break;case 31:Nn(e,n),s&4&&af(e,n);break;case 13:Nn(e,n),s&4&&sf(e,n),s&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ix.bind(null,n),oy(e,n))));break;case 22:if(s=n.memoizedState!==null||An,!s){t=t!==null&&t.memoizedState!==null||lt,l=An;var c=lt;An=s,(lt=t)&&!c?Ln(e,n,(n.subtreeFlags&8772)!==0):Nn(e,n),An=l,lt=c}break;case 30:break;default:Nn(e,n)}}function tf(e){var t=e.alternate;t!==null&&(e.alternate=null,tf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Ct=!1;function jn(e,t,n){for(n=n.child;n!==null;)nf(e,t,n),n=n.sibling}function nf(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(kt,n)}catch{}switch(n.tag){case 26:lt||cn(n,t),jn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:lt||cn(n,t);var s=Je,l=Ct;ta(n.type)&&(Je=n.stateNode,Ct=!1),jn(e,t,n),dr(n.stateNode),Je=s,Ct=l;break;case 5:lt||cn(n,t);case 6:if(s=Je,l=Ct,Je=null,jn(e,t,n),Je=s,Ct=l,Je!==null)if(Ct)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(n.stateNode)}catch(c){Ue(n,t,c)}else try{Je.removeChild(n.stateNode)}catch(c){Ue(n,t,c)}break;case 18:Je!==null&&(Ct?(e=Je,Ff(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),hs(e)):Ff(Je,n.stateNode));break;case 4:s=Je,l=Ct,Je=n.stateNode.containerInfo,Ct=!0,jn(e,t,n),Je=s,Ct=l;break;case 0:case 11:case 14:case 15:Qn(2,n,t),lt||Qn(4,n,t),jn(e,t,n);break;case 1:lt||(cn(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"&&Fp(n,t,s)),jn(e,t,n);break;case 21:jn(e,t,n);break;case 22:lt=(s=lt)||n.memoizedState!==null,jn(e,t,n),lt=s;break;default:jn(e,t,n)}}function af(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{hs(e)}catch(n){Ue(t,t.return,n)}}}function sf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hs(e)}catch(n){Ue(t,t.return,n)}}function Dx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $p),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $p),t;default:throw Error(o(435,e.tag))}}function Tl(e,t){var n=Dx(e);t.forEach(function(s){if(!n.has(s)){n.add(s);var l=Yx.bind(null,e,s);s.then(l,l)}})}function Et(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var l=n[s],c=e,m=t,y=m;e:for(;y!==null;){switch(y.tag){case 27:if(ta(y.type)){Je=y.stateNode,Ct=!1;break e}break;case 5:Je=y.stateNode,Ct=!1;break e;case 3:case 4:Je=y.stateNode.containerInfo,Ct=!0;break e}y=y.return}if(Je===null)throw Error(o(160));nf(c,m,l),Je=null,Ct=!1,c=l.alternate,c!==null&&(c.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)rf(t,e),t=t.sibling}var sn=null;function rf(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Et(t,e),At(e),s&4&&(Qn(3,e,e.return),tr(3,e),Qn(5,e,e.return));break;case 1:Et(t,e),At(e),s&512&&(lt||n===null||cn(n,n.return)),s&64&&An&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?s:n.concat(s))));break;case 26:var l=sn;if(Et(t,e),At(e),s&512&&(lt||n===null||cn(n,n.return)),s&4){var c=n!==null?n.memoizedState:null;if(s=e.memoizedState,n===null)if(s===null)if(e.stateNode===null){e:{s=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(s){case"title":c=l.getElementsByTagName("title")[0],(!c||c[js]||c[ft]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=l.createElement(s),l.head.insertBefore(c,l.querySelector("head > title"))),xt(c,s,n),c[ft]=e,dt(c),s=c;break e;case"link":var m=lm("link","href",l).get(s+(n.href||""));if(m){for(var y=0;y<m.length;y++)if(c=m[y],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(y,1);break t}}c=l.createElement(s),xt(c,s,n),l.head.appendChild(c);break;case"meta":if(m=lm("meta","content",l).get(s+(n.content||""))){for(y=0;y<m.length;y++)if(c=m[y],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(y,1);break t}}c=l.createElement(s),xt(c,s,n),l.head.appendChild(c);break;default:throw Error(o(468,s))}c[ft]=e,dt(c),s=c}e.stateNode=s}else im(l,e.type,e.stateNode);else e.stateNode=rm(l,s,e.memoizedProps);else c!==s?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,s===null?im(l,e.type,e.stateNode):rm(l,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Uo(e,e.memoizedProps,n.memoizedProps)}break;case 27:Et(t,e),At(e),s&512&&(lt||n===null||cn(n,n.return)),n!==null&&s&4&&Uo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Et(t,e),At(e),s&512&&(lt||n===null||cn(n,n.return)),e.flags&32){l=e.stateNode;try{qa(l,"")}catch(re){Ue(e,e.return,re)}}s&4&&e.stateNode!=null&&(l=e.memoizedProps,Uo(e,l,n!==null?n.memoizedProps:l)),s&1024&&(Yo=!0);break;case 6:if(Et(t,e),At(e),s&4){if(e.stateNode===null)throw Error(o(162));s=e.memoizedProps,n=e.stateNode;try{n.nodeValue=s}catch(re){Ue(e,e.return,re)}}break;case 3:if(Hl=null,l=sn,sn=Bl(t.containerInfo),Et(t,e),sn=l,At(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{hs(t.containerInfo)}catch(re){Ue(e,e.return,re)}Yo&&(Yo=!1,lf(e));break;case 4:s=sn,sn=Bl(e.stateNode.containerInfo),Et(t,e),At(e),sn=s;break;case 12:Et(t,e),At(e);break;case 31:Et(t,e),At(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Tl(e,s)));break;case 13:Et(t,e),At(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(El=_t()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Tl(e,s)));break;case 22:l=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,N=An,R=lt;if(An=N||l,lt=R||S,Et(t,e),lt=R,An=N,At(e),s&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||S||An||lt||Ta(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(c=S.stateNode,l)m=c.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{y=S.stateNode;var U=S.memoizedProps.style,O=U!=null&&U.hasOwnProperty("display")?U.display:null;y.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(re){Ue(S,S.return,re)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=l?"":S.memoizedProps}catch(re){Ue(S,S.return,re)}}}else if(t.tag===18){if(n===null){S=t;try{var D=S.stateNode;l?Zf(D,!0):Zf(S.stateNode,!1)}catch(re){Ue(S,S.return,re)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(n=s.retryQueue,n!==null&&(s.retryQueue=null,Tl(e,n))));break;case 19:Et(t,e),At(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Tl(e,s)));break;case 30:break;case 21:break;default:Et(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{for(var n,s=e.return;s!==null;){if(Wp(s)){n=s;break}s=s.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var l=n.stateNode,c=Ho(e);Sl(e,c,l);break;case 5:var m=n.stateNode;n.flags&32&&(qa(m,""),n.flags&=-33);var y=Ho(e);Sl(e,y,m);break;case 3:case 4:var S=n.stateNode.containerInfo,N=Ho(e);Io(e,N,S);break;default:throw Error(o(161))}}catch(R){Ue(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;lf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ef(e,t.alternate,t),t=t.sibling}function Ta(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Qn(4,t,t.return),Ta(t);break;case 1:cn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Fp(t,t.return,n),Ta(t);break;case 27:dr(t.stateNode);case 26:case 5:cn(t,t.return),Ta(t);break;case 22:t.memoizedState===null&&Ta(t);break;case 30:Ta(t);break;default:Ta(t)}e=e.sibling}}function Ln(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,l=e,c=t,m=c.flags;switch(c.tag){case 0:case 11:case 15:Ln(l,c,n),tr(4,c);break;case 1:if(Ln(l,c,n),s=c,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(N){Ue(s,s.return,N)}if(s=c,l=s.updateQueue,l!==null){var y=s.stateNode;try{var S=l.shared.hiddenCallbacks;if(S!==null)for(l.shared.hiddenCallbacks=null,l=0;l<S.length;l++)zd(S[l],y)}catch(N){Ue(s,s.return,N)}}n&&m&64&&Qp(c),nr(c,c.return);break;case 27:Jp(c);case 26:case 5:Ln(l,c,n),n&&s===null&&m&4&&Zp(c),nr(c,c.return);break;case 12:Ln(l,c,n);break;case 31:Ln(l,c,n),n&&m&4&&af(l,c);break;case 13:Ln(l,c,n),n&&m&4&&sf(l,c);break;case 22:c.memoizedState===null&&Ln(l,c,n),nr(c,c.return);break;case 30:break;default:Ln(l,c,n)}t=t.sibling}}function Vo(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Is(n))}function Go(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Is(e))}function rn(e,t,n,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)of(e,t,n,s),t=t.sibling}function of(e,t,n,s){var l=t.flags;switch(t.tag){case 0:case 11:case 15:rn(e,t,n,s),l&2048&&tr(9,t);break;case 1:rn(e,t,n,s);break;case 3:rn(e,t,n,s),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Is(e)));break;case 12:if(l&2048){rn(e,t,n,s),e=t.stateNode;try{var c=t.memoizedProps,m=c.id,y=c.onPostCommit;typeof y=="function"&&y(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Ue(t,t.return,S)}}else rn(e,t,n,s);break;case 31:rn(e,t,n,s);break;case 13:rn(e,t,n,s);break;case 23:break;case 22:c=t.stateNode,m=t.alternate,t.memoizedState!==null?c._visibility&2?rn(e,t,n,s):ar(e,t):c._visibility&2?rn(e,t,n,s):(c._visibility|=2,ss(e,t,n,s,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Vo(m,t);break;case 24:rn(e,t,n,s),l&2048&&Go(t.alternate,t);break;default:rn(e,t,n,s)}}function ss(e,t,n,s,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,m=t,y=n,S=s,N=m.flags;switch(m.tag){case 0:case 11:case 15:ss(c,m,y,S,l),tr(8,m);break;case 23:break;case 22:var R=m.stateNode;m.memoizedState!==null?R._visibility&2?ss(c,m,y,S,l):ar(c,m):(R._visibility|=2,ss(c,m,y,S,l)),l&&N&2048&&Vo(m.alternate,m);break;case 24:ss(c,m,y,S,l),l&&N&2048&&Go(m.alternate,m);break;default:ss(c,m,y,S,l)}t=t.sibling}}function ar(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,s=t,l=s.flags;switch(s.tag){case 22:ar(n,s),l&2048&&Vo(s.alternate,s);break;case 24:ar(n,s),l&2048&&Go(s.alternate,s);break;default:ar(n,s)}t=t.sibling}}var sr=8192;function rs(e,t,n){if(e.subtreeFlags&sr)for(e=e.child;e!==null;)cf(e,t,n),e=e.sibling}function cf(e,t,n){switch(e.tag){case 26:rs(e,t,n),e.flags&sr&&e.memoizedState!==null&&_y(n,sn,e.memoizedState,e.memoizedProps);break;case 5:rs(e,t,n);break;case 3:case 4:var s=sn;sn=Bl(e.stateNode.containerInfo),rs(e,t,n),sn=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=sr,sr=16777216,rs(e,t,n),sr=s):rs(e,t,n));break;default:rs(e,t,n)}}function uf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function rr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var s=t[n];pt=s,pf(s,e)}uf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)df(e),e=e.sibling}function df(e){switch(e.tag){case 0:case 11:case 15:rr(e),e.flags&2048&&Qn(9,e,e.return);break;case 3:rr(e);break;case 12:rr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Cl(e)):rr(e);break;default:rr(e)}}function Cl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var s=t[n];pt=s,pf(s,e)}uf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Qn(8,t,t.return),Cl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Cl(t));break;default:Cl(t)}e=e.sibling}}function pf(e,t){for(;pt!==null;){var n=pt;switch(n.tag){case 0:case 11:case 15:Qn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var s=n.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Is(n.memoizedState.cache)}if(s=n.child,s!==null)s.return=n,pt=s;else e:for(n=e;pt!==null;){s=pt;var l=s.sibling,c=s.return;if(tf(s),s===n){pt=null;break e}if(l!==null){l.return=c,pt=l;break e}pt=c}}}var Rx={getCacheForType:function(e){var t=ht(at),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ht(at).controller.signal}},Px=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ke=null,Ee=null,Ne=0,Be=0,Bt=null,Fn=!1,ls=!1,Ko=!1,On=0,et=0,Zn=0,Ca=0,Xo=0,Ut=0,is=0,lr=null,jt=null,Qo=!1,El=0,ff=0,Al=1/0,jl=null,Wn=null,ut=0,Jn=null,os=null,Mn=0,Fo=0,Zo=null,mf=null,ir=0,Wo=null;function Ht(){return(Pe&2)!==0&&Ne!==0?Ne&-Ne:L.T!==null?ac():ju()}function hf(){if(Ut===0)if((Ne&536870912)===0||Oe){var e=zr;zr<<=1,(zr&3932160)===0&&(zr=262144),Ut=e}else Ut=536870912;return e=zt.current,e!==null&&(e.flags|=32),Ut}function Nt(e,t,n){(e===Ke&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(cs(e,0),$n(e,Ne,Ut,!1)),As(e,n),((Pe&2)===0||e!==Ke)&&(e===Ke&&((Pe&2)===0&&(Ca|=n),et===4&&$n(e,Ne,Ut,!1)),un(e))}function gf(e,t,n){if((Pe&6)!==0)throw Error(o(327));var s=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Es(e,t),l=s?Bx(e,t):$o(e,t,!0),c=s;do{if(l===0){ls&&!s&&$n(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!zx(n)){l=$o(e,t,!1),c=!1;continue}if(l===2){if(c=t,e.errorRecoveryDisabledLanes&c)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var y=e;l=lr;var S=y.current.memoizedState.isDehydrated;if(S&&(cs(y,m).flags|=256),m=$o(y,m,!1),m!==2){if(Ko&&!S){y.errorRecoveryDisabledLanes|=c,Ca|=c,l=4;break e}c=jt,jt=l,c!==null&&(jt===null?jt=c:jt.push.apply(jt,c))}l=m}if(c=!1,l!==2)continue}}if(l===1){cs(e,0),$n(e,t,0,!0);break}e:{switch(s=e,c=l,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:$n(s,t,Ut,!Fn);break e;case 2:jt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(l=El+300-_t(),10<l)){if($n(s,t,Ut,!Fn),Br(s,0,!0)!==0)break e;Mn=t,s.timeoutHandle=Xf(xf.bind(null,s,n,jt,jl,Qo,t,Ut,Ca,is,Fn,c,"Throttled",-0,0),l);break e}xf(s,n,jt,jl,Qo,t,Ut,Ca,is,Fn,c,null,-0,0)}}break}while(!0);un(e)}function xf(e,t,n,s,l,c,m,y,S,N,R,U,O,D){if(e.timeoutHandle=-1,U=t.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yn},cf(t,c,U);var re=(c&62914560)===c?El-_t():(c&4194048)===c?ff-_t():0;if(re=ky(U,re),re!==null){Mn=c,e.cancelPendingCommit=re(Tf.bind(null,e,t,c,n,s,l,m,y,S,R,U,null,O,D)),$n(e,c,m,!N);return}}Tf(e,t,c,n,s,l,m,y,S)}function zx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var s=0;s<n.length;s++){var l=n[s],c=l.getSnapshot;l=l.value;try{if(!Rt(c(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $n(e,t,n,s){t&=~Xo,t&=~Ca,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var l=t;0<l;){var c=31-Ge(l),m=1<<c;s[c]=-1,l&=~m}n!==0&&Cu(e,n,t)}function Nl(){return(Pe&6)===0?(or(0),!1):!0}function Jo(){if(Ee!==null){if(Be===0)var e=Ee.return;else e=Ee,wn=xa=null,mo(e),$a=null,Vs=0,e=Ee;for(;e!==null;)Xp(e.alternate,e),e=e.return;Ee=null}}function cs(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,ay(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Mn=0,Jo(),Ke=e,Ee=n=_n(e.current,null),Ne=t,Be=0,Bt=null,Fn=!1,ls=Es(e,t),Ko=!1,is=Ut=Xo=Ca=Zn=et=0,jt=lr=null,Qo=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var l=31-Ge(s),c=1<<l;t|=e[l],s&=~c}return On=t,Wr(),n}function yf(e,t){_e=null,L.H=Js,t===Ja||t===rl?(t=Md(),Be=3):t===to?(t=Md(),Be=4):Be=t===No?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bt=t,Ee===null&&(et=1,bl(e,Qt(t,e.current)))}function bf(){var e=zt.current;return e===null?!0:(Ne&4194048)===Ne?Jt===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?e===Jt:!1}function _f(){var e=L.H;return L.H=Js,e===null?Js:e}function kf(){var e=L.A;return L.A=Rx,e}function Ll(){et=4,Fn||(Ne&4194048)!==Ne&&zt.current!==null||(ls=!0),(Zn&134217727)===0&&(Ca&134217727)===0||Ke===null||$n(Ke,Ne,Ut,!1)}function $o(e,t,n){var s=Pe;Pe|=2;var l=_f(),c=kf();(Ke!==e||Ne!==t)&&(jl=null,cs(e,t)),t=!1;var m=et;e:do try{if(Be!==0&&Ee!==null){var y=Ee,S=Bt;switch(Be){case 8:Jo(),m=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var N=Be;if(Be=0,Bt=null,us(e,y,S,N),n&&ls){m=0;break e}break;default:N=Be,Be=0,Bt=null,us(e,y,S,N)}}qx(),m=et;break}catch(R){yf(e,R)}while(!0);return t&&e.shellSuspendCounter++,wn=xa=null,Pe=s,L.H=l,L.A=c,Ee===null&&(Ke=null,Ne=0,Wr()),m}function qx(){for(;Ee!==null;)wf(Ee)}function Bx(e,t){var n=Pe;Pe|=2;var s=_f(),l=kf();Ke!==e||Ne!==t?(jl=null,Al=_t()+500,cs(e,t)):ls=Es(e,t);e:do try{if(Be!==0&&Ee!==null){t=Ee;var c=Bt;t:switch(Be){case 1:Be=0,Bt=null,us(e,t,c,1);break;case 2:case 9:if(Ld(c)){Be=0,Bt=null,vf(t);break}t=function(){Be!==2&&Be!==9||Ke!==e||(Be=7),un(e)},c.then(t,t);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:Ld(c)?(Be=0,Bt=null,vf(t)):(Be=0,Bt=null,us(e,t,c,7));break;case 5:var m=null;switch(Ee.tag){case 26:m=Ee.memoizedState;case 5:case 27:var y=Ee;if(m?om(m):y.stateNode.complete){Be=0,Bt=null;var S=y.sibling;if(S!==null)Ee=S;else{var N=y.return;N!==null?(Ee=N,Ol(N)):Ee=null}break t}}Be=0,Bt=null,us(e,t,c,5);break;case 6:Be=0,Bt=null,us(e,t,c,6);break;case 8:Jo(),et=6;break e;default:throw Error(o(462))}}Ux();break}catch(R){yf(e,R)}while(!0);return wn=xa=null,L.H=s,L.A=l,Pe=n,Ee!==null?0:(Ke=null,Ne=0,Wr(),et)}function Ux(){for(;Ee!==null&&!di();)wf(Ee)}function wf(e){var t=Gp(e.alternate,e,On);e.memoizedProps=e.pendingProps,t===null?Ol(e):Ee=t}function vf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Bp(n,t,t.pendingProps,t.type,void 0,Ne);break;case 11:t=Bp(n,t,t.pendingProps,t.type.render,t.ref,Ne);break;case 5:mo(t);default:Xp(n,t),t=Ee=_d(t,On),t=Gp(n,t,On)}e.memoizedProps=e.pendingProps,t===null?Ol(e):Ee=t}function us(e,t,n,s){wn=xa=null,mo(t),$a=null,Vs=0;var l=t.return;try{if(Ax(e,l,t,n,Ne)){et=1,bl(e,Qt(n,e.current)),Ee=null;return}}catch(c){if(l!==null)throw Ee=l,c;et=1,bl(e,Qt(n,e.current)),Ee=null;return}t.flags&32768?(Oe||s===1?e=!0:ls||(Ne&536870912)!==0?e=!1:(Fn=e=!0,(s===2||s===9||s===3||s===6)&&(s=zt.current,s!==null&&s.tag===13&&(s.flags|=16384))),Sf(t,e)):Ol(t)}function Ol(e){var t=e;do{if((t.flags&32768)!==0){Sf(t,Fn);return}e=t.return;var n=Lx(t.alternate,t,On);if(n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);et===0&&(et=5)}function Sf(e,t){do{var n=Ox(e.alternate,e);if(n!==null){n.flags&=32767,Ee=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=n}while(e!==null);et=6,Ee=null}function Tf(e,t,n,s,l,c,m,y,S){e.cancelPendingCommit=null;do Ml();while(ut!==0);if((Pe&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=Ui,bg(e,n,c,m,y,S),e===Ke&&(Ee=Ke=null,Ne=0),os=t,Jn=e,Mn=n,Fo=c,Zo=l,mf=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Vx(ge,function(){return Nf(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,l=V.p,V.p=2,m=Pe,Pe|=4;try{Mx(e,t,n)}finally{Pe=m,V.p=l,L.T=s}}ut=1,Cf(),Ef(),Af()}}function Cf(){if(ut===1){ut=0;var e=Jn,t=os,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=L.T,L.T=null;var s=V.p;V.p=2;var l=Pe;Pe|=4;try{rf(t,e);var c=dc,m=dd(e.containerInfo),y=c.focusedElem,S=c.selectionRange;if(m!==y&&y&&y.ownerDocument&&ud(y.ownerDocument.documentElement,y)){if(S!==null&&Ri(y)){var N=S.start,R=S.end;if(R===void 0&&(R=N),"selectionStart"in y)y.selectionStart=N,y.selectionEnd=Math.min(R,y.value.length);else{var U=y.ownerDocument||document,O=U&&U.defaultView||window;if(O.getSelection){var D=O.getSelection(),re=y.textContent.length,pe=Math.min(S.start,re),Ve=S.end===void 0?pe:Math.min(S.end,re);!D.extend&&pe>Ve&&(m=Ve,Ve=pe,pe=m);var A=cd(y,pe),E=cd(y,Ve);if(A&&E&&(D.rangeCount!==1||D.anchorNode!==A.node||D.anchorOffset!==A.offset||D.focusNode!==E.node||D.focusOffset!==E.offset)){var j=U.createRange();j.setStart(A.node,A.offset),D.removeAllRanges(),pe>Ve?(D.addRange(j),D.extend(E.node,E.offset)):(j.setEnd(E.node,E.offset),D.addRange(j))}}}}for(U=[],D=y;D=D.parentNode;)D.nodeType===1&&U.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<U.length;y++){var B=U[y];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}Gl=!!uc,dc=uc=null}finally{Pe=l,V.p=s,L.T=n}}e.current=t,ut=2}}function Ef(){if(ut===2){ut=0;var e=Jn,t=os,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=L.T,L.T=null;var s=V.p;V.p=2;var l=Pe;Pe|=4;try{ef(e,t.alternate,t)}finally{Pe=l,V.p=s,L.T=n}}ut=3}}function Af(){if(ut===4||ut===3){ut=0,pi();var e=Jn,t=os,n=Mn,s=mf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ut=5:(ut=0,os=Jn=null,jf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Wn=null),gi(n),t=t.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(kt,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=L.T,l=V.p,V.p=2,L.T=null;try{for(var c=e.onRecoverableError,m=0;m<s.length;m++){var y=s[m];c(y.value,{componentStack:y.stack})}}finally{L.T=t,V.p=l}}(Mn&3)!==0&&Ml(),un(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===Wo?ir++:(ir=0,Wo=e):ir=0,or(0)}}function jf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Is(t)))}function Ml(){return Cf(),Ef(),Af(),Nf()}function Nf(){if(ut!==5)return!1;var e=Jn,t=Fo;Fo=0;var n=gi(Mn),s=L.T,l=V.p;try{V.p=32>n?32:n,L.T=null,n=Zo,Zo=null;var c=Jn,m=Mn;if(ut=0,os=Jn=null,Mn=0,(Pe&6)!==0)throw Error(o(331));var y=Pe;if(Pe|=4,df(c.current),of(c,c.current,m,n),Pe=y,or(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(kt,c)}catch{}return!0}finally{V.p=l,L.T=s,jf(e,t)}}function Lf(e,t,n){t=Qt(n,t),t=jo(e.stateNode,t,2),e=Gn(e,t,2),e!==null&&(As(e,2),un(e))}function Ue(e,t,n){if(e.tag===3)Lf(e,e,n);else for(;t!==null;){if(t.tag===3){Lf(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Wn===null||!Wn.has(s))){e=Qt(n,e),n=Lp(2),s=Gn(t,n,2),s!==null&&(Op(n,s,t,e),As(s,2),un(s));break}}t=t.return}}function ec(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new Px;var l=new Set;s.set(t,l)}else l=s.get(t),l===void 0&&(l=new Set,s.set(t,l));l.has(n)||(Ko=!0,l.add(n),e=Hx.bind(null,e,t,n),t.then(e,e))}function Hx(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ke===e&&(Ne&n)===n&&(et===4||et===3&&(Ne&62914560)===Ne&&300>_t()-El?(Pe&2)===0&&cs(e,0):Xo|=n,is===Ne&&(is=0)),un(e)}function Of(e,t){t===0&&(t=Tu()),e=ma(e,t),e!==null&&(As(e,t),un(e))}function Ix(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Of(e,n)}function Yx(e,t){var n=0;switch(e.tag){case 31:case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(t),Of(e,n)}function Vx(e,t){return La(e,t)}var Dl=null,ds=null,tc=!1,Rl=!1,nc=!1,ea=0;function un(e){e!==ds&&e.next===null&&(ds===null?Dl=ds=e:ds=ds.next=e),Rl=!0,tc||(tc=!0,Kx())}function or(e,t){if(!nc&&Rl){nc=!0;do for(var n=!1,s=Dl;s!==null;){if(e!==0){var l=s.pendingLanes;if(l===0)var c=0;else{var m=s.suspendedLanes,y=s.pingedLanes;c=(1<<31-Ge(42|e)+1)-1,c&=l&~(m&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Pf(s,c))}else c=Ne,c=Br(s,s===Ke?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Es(s,c)||(n=!0,Pf(s,c));s=s.next}while(n);nc=!1}}function Gx(){Mf()}function Mf(){Rl=tc=!1;var e=0;ea!==0&&ny()&&(e=ea);for(var t=_t(),n=null,s=Dl;s!==null;){var l=s.next,c=Df(s,t);c===0?(s.next=null,n===null?Dl=l:n.next=l,l===null&&(ds=n)):(n=s,(e!==0||(c&3)!==0)&&(Rl=!0)),s=l}ut!==0&&ut!==5||or(e),ea!==0&&(ea=0)}function Df(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var m=31-Ge(c),y=1<<m,S=l[m];S===-1?((y&n)===0||(y&s)!==0)&&(l[m]=yg(y,t)):S<=t&&(e.expiredLanes|=y),c&=~y}if(t=Ke,n=Ne,n=Br(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,n===0||e===t&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Cs(s),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Es(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(s!==null&&Cs(s),gi(n)){case 2:case 8:n=W;break;case 32:n=ge;break;case 268435456:n=qe;break;default:n=ge}return s=Rf.bind(null,e),n=La(n,s),e.callbackPriority=t,e.callbackNode=n,t}return s!==null&&s!==null&&Cs(s),e.callbackPriority=2,e.callbackNode=null,2}function Rf(e,t){if(ut!==0&&ut!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ml()&&e.callbackNode!==n)return null;var s=Ne;return s=Br(e,e===Ke?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(gf(e,s,t),Df(e,_t()),e.callbackNode!=null&&e.callbackNode===n?Rf.bind(null,e):null)}function Pf(e,t){if(Ml())return null;gf(e,t,!0)}function Kx(){sy(function(){(Pe&6)!==0?La(q,Gx):Mf()})}function ac(){if(ea===0){var e=Za;e===0&&(e=Pr,Pr<<=1,(Pr&261888)===0&&(Pr=256)),ea=e}return ea}function zf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yr(""+e)}function qf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Xx(e,t,n,s,l){if(t==="submit"&&n&&n.stateNode===l){var c=zf((l[St]||null).action),m=s.submitter;m&&(t=(t=m[St]||null)?zf(t.formAction):m.getAttribute("formAction"),t!==null&&(c=t,m=null));var y=new Xr("action","action",null,s,l);e.push({event:y,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ea!==0){var S=m?qf(l,m):new FormData(l);vo(n,{pending:!0,data:S,method:l.method,action:c},null,S)}}else typeof c=="function"&&(y.preventDefault(),S=m?qf(l,m):new FormData(l),vo(n,{pending:!0,data:S,method:l.method,action:c},c,S))},currentTarget:l}]})}}for(var sc=0;sc<Bi.length;sc++){var rc=Bi[sc],Qx=rc.toLowerCase(),Fx=rc[0].toUpperCase()+rc.slice(1);an(Qx,"on"+Fx)}an(md,"onAnimationEnd"),an(hd,"onAnimationIteration"),an(gd,"onAnimationStart"),an("dblclick","onDoubleClick"),an("focusin","onFocus"),an("focusout","onBlur"),an(dx,"onTransitionRun"),an(px,"onTransitionStart"),an(fx,"onTransitionCancel"),an(xd,"onTransitionEnd"),Pa("onMouseEnter",["mouseout","mouseover"]),Pa("onMouseLeave",["mouseout","mouseover"]),Pa("onPointerEnter",["pointerout","pointerover"]),Pa("onPointerLeave",["pointerout","pointerover"]),ua("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ua("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ua("onBeforeInput",["compositionend","keypress","textInput","paste"]),ua("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ua("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ua("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cr));function Bf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],l=s.event;s=s.listeners;e:{var c=void 0;if(t)for(var m=s.length-1;0<=m;m--){var y=s[m],S=y.instance,N=y.currentTarget;if(y=y.listener,S!==c&&l.isPropagationStopped())break e;c=y,l.currentTarget=N;try{c(l)}catch(R){Zr(R)}l.currentTarget=null,c=S}else for(m=0;m<s.length;m++){if(y=s[m],S=y.instance,N=y.currentTarget,y=y.listener,S!==c&&l.isPropagationStopped())break e;c=y,l.currentTarget=N;try{c(l)}catch(R){Zr(R)}l.currentTarget=null,c=S}}}}function Ae(e,t){var n=t[xi];n===void 0&&(n=t[xi]=new Set);var s=e+"__bubble";n.has(s)||(Uf(t,e,2,!1),n.add(s))}function lc(e,t,n){var s=0;t&&(s|=4),Uf(n,e,s,t)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function ic(e){if(!e[Pl]){e[Pl]=!0,Ou.forEach(function(n){n!=="selectionchange"&&(Zx.has(n)||lc(n,!1,e),lc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pl]||(t[Pl]=!0,lc("selectionchange",!1,t))}}function Uf(e,t,n,s){switch(hm(t)){case 2:var l=Sy;break;case 8:l=Ty;break;default:l=wc}n=l.bind(null,t,n,e),l=void 0,!Ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function oc(e,t,n,s,l){var c=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var m=s.tag;if(m===3||m===4){var y=s.stateNode.containerInfo;if(y===l)break;if(m===4)for(m=s.return;m!==null;){var S=m.tag;if((S===3||S===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;y!==null;){if(m=Ma(y),m===null)return;if(S=m.tag,S===5||S===6||S===26||S===27){s=c=m;continue e}y=y.parentNode}}s=s.return}Vu(function(){var N=c,R=Si(n),U=[];e:{var O=yd.get(e);if(O!==void 0){var D=Xr,re=e;switch(e){case"keypress":if(Gr(n)===0)break e;case"keydown":case"keyup":D=Yg;break;case"focusin":re="focus",D=Ni;break;case"focusout":re="blur",D=Ni;break;case"beforeblur":case"afterblur":D=Ni;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Xu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=Lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Kg;break;case md:case hd:case gd:D=Dg;break;case xd:D=Qg;break;case"scroll":case"scrollend":D=jg;break;case"wheel":D=Zg;break;case"copy":case"cut":case"paste":D=Pg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Fu;break;case"toggle":case"beforetoggle":D=Jg}var pe=(t&4)!==0,Ve=!pe&&(e==="scroll"||e==="scrollend"),A=pe?O!==null?O+"Capture":null:O;pe=[];for(var E=N,j;E!==null;){var B=E;if(j=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||j===null||A===null||(B=Ls(E,A),B!=null&&pe.push(ur(E,B,j))),Ve)break;E=E.return}0<pe.length&&(O=new D(O,re,null,n,R),U.push({event:O,listeners:pe}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",O&&n!==vi&&(re=n.relatedTarget||n.fromElement)&&(Ma(re)||re[Oa]))break e;if((D||O)&&(O=R.window===R?R:(O=R.ownerDocument)?O.defaultView||O.parentWindow:window,D?(re=n.relatedTarget||n.toElement,D=N,re=re?Ma(re):null,re!==null&&(Ve=p(re),pe=re.tag,re!==Ve||pe!==5&&pe!==27&&pe!==6)&&(re=null)):(D=null,re=N),D!==re)){if(pe=Xu,B="onMouseLeave",A="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(pe=Fu,B="onPointerLeave",A="onPointerEnter",E="pointer"),Ve=D==null?O:Ns(D),j=re==null?O:Ns(re),O=new pe(B,E+"leave",D,n,R),O.target=Ve,O.relatedTarget=j,B=null,Ma(R)===N&&(pe=new pe(A,E+"enter",re,n,R),pe.target=j,pe.relatedTarget=Ve,B=pe),Ve=B,D&&re)t:{for(pe=Wx,A=D,E=re,j=0,B=A;B;B=pe(B))j++;B=0;for(var ue=E;ue;ue=pe(ue))B++;for(;0<j-B;)A=pe(A),j--;for(;0<B-j;)E=pe(E),B--;for(;j--;){if(A===E||E!==null&&A===E.alternate){pe=A;break t}A=pe(A),E=pe(E)}pe=null}else pe=null;D!==null&&Hf(U,O,D,pe,!1),re!==null&&Ve!==null&&Hf(U,Ve,re,pe,!0)}}e:{if(O=N?Ns(N):window,D=O.nodeName&&O.nodeName.toLowerCase(),D==="select"||D==="input"&&O.type==="file")var De=ad;else if(td(O))if(sd)De=ox;else{De=lx;var ie=rx}else D=O.nodeName,!D||D.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?N&&wi(N.elementType)&&(De=ad):De=ix;if(De&&(De=De(e,N))){nd(U,De,n,R);break e}ie&&ie(e,O,N),e==="focusout"&&N&&O.type==="number"&&N.memoizedProps.value!=null&&ki(O,"number",O.value)}switch(ie=N?Ns(N):window,e){case"focusin":(td(ie)||ie.contentEditable==="true")&&(Ia=ie,Pi=N,Bs=null);break;case"focusout":Bs=Pi=Ia=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,pd(U,n,R);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":pd(U,n,R)}var ke;if(Oi)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else Ha?$u(e,n)&&(Le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Le="onCompositionStart");Le&&(Zu&&n.locale!=="ko"&&(Ha||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&Ha&&(ke=Gu()):(qn=R,Ei="value"in qn?qn.value:qn.textContent,Ha=!0)),ie=zl(N,Le),0<ie.length&&(Le=new Qu(Le,e,null,n,R),U.push({event:Le,listeners:ie}),ke?Le.data=ke:(ke=ed(n),ke!==null&&(Le.data=ke)))),(ke=ex?tx(e,n):nx(e,n))&&(Le=zl(N,"onBeforeInput"),0<Le.length&&(ie=new Qu("onBeforeInput","beforeinput",null,n,R),U.push({event:ie,listeners:Le}),ie.data=ke)),Xx(U,e,N,n,R)}Bf(U,t)})}function ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zl(e,t){for(var n=t+"Capture",s=[];e!==null;){var l=e,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=Ls(e,n),l!=null&&s.unshift(ur(e,l,c)),l=Ls(e,t),l!=null&&s.push(ur(e,l,c))),e.tag===3)return s;e=e.return}return[]}function Wx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hf(e,t,n,s,l){for(var c=t._reactName,m=[];n!==null&&n!==s;){var y=n,S=y.alternate,N=y.stateNode;if(y=y.tag,S!==null&&S===s)break;y!==5&&y!==26&&y!==27||N===null||(S=N,l?(N=Ls(n,c),N!=null&&m.unshift(ur(n,N,S))):l||(N=Ls(n,c),N!=null&&m.push(ur(n,N,S)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var Jx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function If(e){return(typeof e=="string"?e:""+e).replace(Jx,`
`).replace($x,"")}function Yf(e,t){return t=If(t),If(e)===t}function Ye(e,t,n,s,l,c){switch(n){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||qa(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&qa(e,""+s);break;case"className":Hr(e,"class",s);break;case"tabIndex":Hr(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Hr(e,n,s);break;case"style":Iu(e,s,c);break;case"data":if(t!=="object"){Hr(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=Yr(""+s),e.setAttribute(n,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Ye(e,t,"name",l.name,l,null),Ye(e,t,"formEncType",l.formEncType,l,null),Ye(e,t,"formMethod",l.formMethod,l,null),Ye(e,t,"formTarget",l.formTarget,l,null)):(Ye(e,t,"encType",l.encType,l,null),Ye(e,t,"method",l.method,l,null),Ye(e,t,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=Yr(""+s),e.setAttribute(n,s);break;case"onClick":s!=null&&(e.onclick=yn);break;case"onScroll":s!=null&&Ae("scroll",e);break;case"onScrollEnd":s!=null&&Ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(n=s.__html,n!=null){if(l.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}n=Yr(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""+s):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":s===!0?e.setAttribute(n,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,s):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(n,s):e.removeAttribute(n);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(n):e.setAttribute(n,s);break;case"popover":Ae("beforetoggle",e),Ae("toggle",e),Ur(e,"popover",s);break;case"xlinkActuate":xn(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":xn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":xn(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":xn(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":xn(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":xn(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":xn(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":xn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":xn(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ur(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Eg.get(n)||n,Ur(e,n,s))}}function cc(e,t,n,s,l,c){switch(n){case"style":Iu(e,s,c);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(n=s.__html,n!=null){if(l.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof s=="string"?qa(e,s):(typeof s=="number"||typeof s=="bigint")&&qa(e,""+s);break;case"onScroll":s!=null&&Ae("scroll",e);break;case"onScrollEnd":s!=null&&Ae("scrollend",e);break;case"onClick":s!=null&&(e.onclick=yn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),c=e[St]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,l),typeof s=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,s,l);break e}n in e?e[n]=s:s===!0?e.setAttribute(n,""):Ur(e,n,s)}}}function xt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",e),Ae("load",e);var s=!1,l=!1,c;for(c in n)if(n.hasOwnProperty(c)){var m=n[c];if(m!=null)switch(c){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ye(e,t,c,m,n,null)}}l&&Ye(e,t,"srcSet",n.srcSet,n,null),s&&Ye(e,t,"src",n.src,n,null);return;case"input":Ae("invalid",e);var y=c=m=l=null,S=null,N=null;for(s in n)if(n.hasOwnProperty(s)){var R=n[s];if(R!=null)switch(s){case"name":l=R;break;case"type":m=R;break;case"checked":S=R;break;case"defaultChecked":N=R;break;case"value":c=R;break;case"defaultValue":y=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,t));break;default:Ye(e,t,s,R,n,null)}}qu(e,c,y,S,N,m,l,!1);return;case"select":Ae("invalid",e),s=m=c=null;for(l in n)if(n.hasOwnProperty(l)&&(y=n[l],y!=null))switch(l){case"value":c=y;break;case"defaultValue":m=y;break;case"multiple":s=y;default:Ye(e,t,l,y,n,null)}t=c,n=m,e.multiple=!!s,t!=null?za(e,!!s,t,!1):n!=null&&za(e,!!s,n,!0);return;case"textarea":Ae("invalid",e),c=l=s=null;for(m in n)if(n.hasOwnProperty(m)&&(y=n[m],y!=null))switch(m){case"value":s=y;break;case"defaultValue":l=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(91));break;default:Ye(e,t,m,y,n,null)}Uu(e,s,l,c);return;case"option":for(S in n)n.hasOwnProperty(S)&&(s=n[S],s!=null)&&(S==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":Ye(e,t,S,s,n,null));return;case"dialog":Ae("beforetoggle",e),Ae("toggle",e),Ae("cancel",e),Ae("close",e);break;case"iframe":case"object":Ae("load",e);break;case"video":case"audio":for(s=0;s<cr.length;s++)Ae(cr[s],e);break;case"image":Ae("error",e),Ae("load",e);break;case"details":Ae("toggle",e);break;case"embed":case"source":case"link":Ae("error",e),Ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in n)if(n.hasOwnProperty(N)&&(s=n[N],s!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ye(e,t,N,s,n,null)}return;default:if(wi(t)){for(R in n)n.hasOwnProperty(R)&&(s=n[R],s!==void 0&&cc(e,t,R,s,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(s=n[y],s!=null&&Ye(e,t,y,s,n,null))}function ey(e,t,n,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,m=null,y=null,S=null,N=null,R=null;for(D in n){var U=n[D];if(n.hasOwnProperty(D)&&U!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":S=U;default:s.hasOwnProperty(D)||Ye(e,t,D,null,s,U)}}for(var O in s){var D=s[O];if(U=n[O],s.hasOwnProperty(O)&&(D!=null||U!=null))switch(O){case"type":c=D;break;case"name":l=D;break;case"checked":N=D;break;case"defaultChecked":R=D;break;case"value":m=D;break;case"defaultValue":y=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,t));break;default:D!==U&&Ye(e,t,O,D,s,U)}}_i(e,m,y,S,N,R,c,l);return;case"select":D=m=y=O=null;for(c in n)if(S=n[c],n.hasOwnProperty(c)&&S!=null)switch(c){case"value":break;case"multiple":D=S;default:s.hasOwnProperty(c)||Ye(e,t,c,null,s,S)}for(l in s)if(c=s[l],S=n[l],s.hasOwnProperty(l)&&(c!=null||S!=null))switch(l){case"value":O=c;break;case"defaultValue":y=c;break;case"multiple":m=c;default:c!==S&&Ye(e,t,l,c,s,S)}t=y,n=m,s=D,O!=null?za(e,!!n,O,!1):!!s!=!!n&&(t!=null?za(e,!!n,t,!0):za(e,!!n,n?[]:"",!1));return;case"textarea":D=O=null;for(y in n)if(l=n[y],n.hasOwnProperty(y)&&l!=null&&!s.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Ye(e,t,y,null,s,l)}for(m in s)if(l=s[m],c=n[m],s.hasOwnProperty(m)&&(l!=null||c!=null))switch(m){case"value":O=l;break;case"defaultValue":D=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==c&&Ye(e,t,m,l,s,c)}Bu(e,O,D);return;case"option":for(var re in n)O=n[re],n.hasOwnProperty(re)&&O!=null&&!s.hasOwnProperty(re)&&(re==="selected"?e.selected=!1:Ye(e,t,re,null,s,O));for(S in s)O=s[S],D=n[S],s.hasOwnProperty(S)&&O!==D&&(O!=null||D!=null)&&(S==="selected"?e.selected=O&&typeof O!="function"&&typeof O!="symbol":Ye(e,t,S,O,s,D));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in n)O=n[pe],n.hasOwnProperty(pe)&&O!=null&&!s.hasOwnProperty(pe)&&Ye(e,t,pe,null,s,O);for(N in s)if(O=s[N],D=n[N],s.hasOwnProperty(N)&&O!==D&&(O!=null||D!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,t));break;default:Ye(e,t,N,O,s,D)}return;default:if(wi(t)){for(var Ve in n)O=n[Ve],n.hasOwnProperty(Ve)&&O!==void 0&&!s.hasOwnProperty(Ve)&&cc(e,t,Ve,void 0,s,O);for(R in s)O=s[R],D=n[R],!s.hasOwnProperty(R)||O===D||O===void 0&&D===void 0||cc(e,t,R,O,s,D);return}}for(var A in n)O=n[A],n.hasOwnProperty(A)&&O!=null&&!s.hasOwnProperty(A)&&Ye(e,t,A,null,s,O);for(U in s)O=s[U],D=n[U],!s.hasOwnProperty(U)||O===D||O==null&&D==null||Ye(e,t,U,O,s,D)}function Vf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ty(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),s=0;s<n.length;s++){var l=n[s],c=l.transferSize,m=l.initiatorType,y=l.duration;if(c&&y&&Vf(m)){for(m=0,y=l.responseEnd,s+=1;s<n.length;s++){var S=n[s],N=S.startTime;if(N>y)break;var R=S.transferSize,U=S.initiatorType;R&&Vf(U)&&(S=S.responseEnd,m+=R*(S<y?1:(y-N)/(S-N)))}if(--s,t+=8*(c+m)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uc=null,dc=null;function ql(e){return e.nodeType===9?e:e.ownerDocument}function Gf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function pc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fc=null;function ny(){var e=window.event;return e&&e.type==="popstate"?e===fc?!1:(fc=e,!0):(fc=null,!1)}var Xf=typeof setTimeout=="function"?setTimeout:void 0,ay=typeof clearTimeout=="function"?clearTimeout:void 0,Qf=typeof Promise=="function"?Promise:void 0,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof Qf<"u"?function(e){return Qf.resolve(null).then(e).catch(ry)}:Xf;function ry(e){setTimeout(function(){throw e})}function ta(e){return e==="head"}function Ff(e,t){var n=t,s=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(s===0){e.removeChild(l),hs(t);return}s--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")s++;else if(n==="html")dr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,dr(n);for(var c=n.firstChild;c;){var m=c.nextSibling,y=c.nodeName;c[js]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=m}}else n==="body"&&dr(e.ownerDocument.body);n=l}while(n);hs(t)}function Zf(e,t){var n=e;e=0;do{var s=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=s}while(n)}function mc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":mc(n),yi(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ly(e,t,n,s){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[js])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=$t(e.nextSibling),e===null)break}return null}function iy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=$t(e.nextSibling),e===null))return null;return e}function Wf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=$t(e.nextSibling),e===null))return null;return e}function hc(e){return e.data==="$?"||e.data==="$~"}function gc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function oy(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var s=function(){t(),n.removeEventListener("DOMContentLoaded",s)};n.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xc=null;function Jf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return $t(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function $f(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function em(e,t,n){switch(t=ql(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function dr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yi(e)}var en=new Map,tm=new Set;function Bl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Dn=V.d;V.d={f:cy,r:uy,D:dy,C:py,L:fy,m:my,X:gy,S:hy,M:xy};function cy(){var e=Dn.f(),t=Nl();return e||t}function uy(e){var t=Da(e);t!==null&&t.tag===5&&t.type==="form"?xp(t):Dn.r(e)}var ps=typeof document>"u"?null:document;function nm(e,t,n){var s=ps;if(s&&typeof t=="string"&&t){var l=Kt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),tm.has(l)||(tm.add(l),e={rel:e,crossOrigin:n,href:t},s.querySelector(l)===null&&(t=s.createElement("link"),xt(t,"link",e),dt(t),s.head.appendChild(t)))}}function dy(e){Dn.D(e),nm("dns-prefetch",e,null)}function py(e,t){Dn.C(e,t),nm("preconnect",e,t)}function fy(e,t,n){Dn.L(e,t,n);var s=ps;if(s&&e&&t){var l='link[rel="preload"][as="'+Kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Kt(n.imageSizes)+'"]')):l+='[href="'+Kt(e)+'"]';var c=l;switch(t){case"style":c=fs(e);break;case"script":c=ms(e)}en.has(c)||(e=_({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),en.set(c,e),s.querySelector(l)!==null||t==="style"&&s.querySelector(pr(c))||t==="script"&&s.querySelector(fr(c))||(t=s.createElement("link"),xt(t,"link",e),dt(t),s.head.appendChild(t)))}}function my(e,t){Dn.m(e,t);var n=ps;if(n&&e){var s=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Kt(s)+'"][href="'+Kt(e)+'"]',c=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ms(e)}if(!en.has(c)&&(e=_({rel:"modulepreload",href:e},t),en.set(c,e),n.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(fr(c)))return}s=n.createElement("link"),xt(s,"link",e),dt(s),n.head.appendChild(s)}}}function hy(e,t,n){Dn.S(e,t,n);var s=ps;if(s&&e){var l=Ra(s).hoistableStyles,c=fs(e);t=t||"default";var m=l.get(c);if(!m){var y={loading:0,preload:null};if(m=s.querySelector(pr(c)))y.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":t},n),(n=en.get(c))&&yc(e,n);var S=m=s.createElement("link");dt(S),xt(S,"link",e),S._p=new Promise(function(N,R){S.onload=N,S.onerror=R}),S.addEventListener("load",function(){y.loading|=1}),S.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Ul(m,t,s)}m={type:"stylesheet",instance:m,count:1,state:y},l.set(c,m)}}}function gy(e,t){Dn.X(e,t);var n=ps;if(n&&e){var s=Ra(n).hoistableScripts,l=ms(e),c=s.get(l);c||(c=n.querySelector(fr(l)),c||(e=_({src:e,async:!0},t),(t=en.get(l))&&bc(e,t),c=n.createElement("script"),dt(c),xt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(l,c))}}function xy(e,t){Dn.M(e,t);var n=ps;if(n&&e){var s=Ra(n).hoistableScripts,l=ms(e),c=s.get(l);c||(c=n.querySelector(fr(l)),c||(e=_({src:e,async:!0,type:"module"},t),(t=en.get(l))&&bc(e,t),c=n.createElement("script"),dt(c),xt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(l,c))}}function am(e,t,n,s){var l=(l=ce.current)?Bl(l):null;if(!l)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=fs(n.href),n=Ra(l).hoistableStyles,s=n.get(t),s||(s={type:"style",instance:null,count:0,state:null},n.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=fs(n.href);var c=Ra(l).hoistableStyles,m=c.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,m),(c=l.querySelector(pr(e)))&&!c._p&&(m.instance=c,m.state.loading=5),en.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},en.set(e,n),c||yy(l,e,n,m.state))),t&&s===null)throw Error(o(528,""));return m}if(t&&s!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ms(n),n=Ra(l).hoistableScripts,s=n.get(t),s||(s={type:"script",instance:null,count:0,state:null},n.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function fs(e){return'href="'+Kt(e)+'"'}function pr(e){return'link[rel="stylesheet"]['+e+"]"}function sm(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function yy(e,t,n,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),xt(t,"link",n),dt(t),e.head.appendChild(t))}function ms(e){return'[src="'+Kt(e)+'"]'}function fr(e){return"script[async]"+e}function rm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+Kt(n.href)+'"]');if(s)return t.instance=s,dt(s),s;var l=_({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),dt(s),xt(s,"style",l),Ul(s,n.precedence,e),t.instance=s;case"stylesheet":l=fs(n.href);var c=e.querySelector(pr(l));if(c)return t.state.loading|=4,t.instance=c,dt(c),c;s=sm(n),(l=en.get(l))&&yc(s,l),c=(e.ownerDocument||e).createElement("link"),dt(c);var m=c;return m._p=new Promise(function(y,S){m.onload=y,m.onerror=S}),xt(c,"link",s),t.state.loading|=4,Ul(c,n.precedence,e),t.instance=c;case"script":return c=ms(n.src),(l=e.querySelector(fr(c)))?(t.instance=l,dt(l),l):(s=n,(l=en.get(c))&&(s=_({},n),bc(s,l)),e=e.ownerDocument||e,l=e.createElement("script"),dt(l),xt(l,"link",s),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,Ul(s,n.precedence,e));return t.instance}function Ul(e,t,n){for(var s=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,c=l,m=0;m<s.length;m++){var y=s[m];if(y.dataset.precedence===t)c=y;else if(c!==l)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function yc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Hl=null;function lm(e,t,n){if(Hl===null){var s=new Map,l=Hl=new Map;l.set(n,s)}else l=Hl,s=l.get(n),s||(s=new Map,l.set(n,s));if(s.has(e))return s;for(s.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var c=n[l];if(!(c[js]||c[ft]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(t)||"";m=e+m;var y=s.get(m);y?y.push(c):s.set(m,[c])}}return s}function im(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function by(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function om(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _y(e,t,n,s){if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=fs(s.href),c=t.querySelector(pr(l));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Il.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,dt(c);return}c=t.ownerDocument||t,s=sm(s),(l=en.get(l))&&yc(s,l),c=c.createElement("link"),dt(c);var m=c;m._p=new Promise(function(y,S){m.onload=y,m.onerror=S}),xt(c,"link",s),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Il.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var _c=0;function ky(e,t){return e.stylesheets&&e.count===0&&Vl(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var s=setTimeout(function(){if(e.stylesheets&&Vl(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&_c===0&&(_c=62500*ty());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vl(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>_c?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(l)}}:null}function Il(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yl=null;function Vl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yl=new Map,t.forEach(wy,e),Yl=null,Il.call(e))}function wy(e,t){if(!(t.state.loading&4)){var n=Yl.get(e);if(n)var s=n.get(null);else{n=new Map,Yl.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var m=l[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),s=m)}s&&n.set(null,s)}l=t.instance,m=l.getAttribute("data-precedence"),c=n.get(m)||s,c===s&&n.set(null,l),n.set(m,l),this.count++,s=Il.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),c?c.parentNode.insertBefore(l,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var mr={$$typeof:H,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function vy(e,t,n,s,l,c,m,y,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mi(0),this.hiddenUpdates=mi(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function cm(e,t,n,s,l,c,m,y,S,N,R,U){return e=new vy(e,t,n,m,S,N,R,U,y),t=1,c===!0&&(t|=24),c=Pt(3,null,null,t),e.current=c,c.stateNode=e,t=Ji(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:s,isDehydrated:n,cache:t},no(c),e}function um(e){return e?(e=Ga,e):Ga}function dm(e,t,n,s,l,c){l=um(l),s.context===null?s.context=l:s.pendingContext=l,s=Vn(t),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=Gn(e,s,t),n!==null&&(Nt(n,e,t),Ks(n,e,t))}function pm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kc(e,t){pm(e,t),(e=e.alternate)&&pm(e,t)}function fm(e){if(e.tag===13||e.tag===31){var t=ma(e,67108864);t!==null&&Nt(t,e,67108864),kc(e,67108864)}}function mm(e){if(e.tag===13||e.tag===31){var t=Ht();t=hi(t);var n=ma(e,t);n!==null&&Nt(n,e,t),kc(e,t)}}var Gl=!0;function Sy(e,t,n,s){var l=L.T;L.T=null;var c=V.p;try{V.p=2,wc(e,t,n,s)}finally{V.p=c,L.T=l}}function Ty(e,t,n,s){var l=L.T;L.T=null;var c=V.p;try{V.p=8,wc(e,t,n,s)}finally{V.p=c,L.T=l}}function wc(e,t,n,s){if(Gl){var l=vc(s);if(l===null)oc(e,t,s,Kl,n),gm(e,s);else if(Ey(l,e,t,n,s))s.stopPropagation();else if(gm(e,s),t&4&&-1<Cy.indexOf(e)){for(;l!==null;){var c=Da(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=ca(c.pendingLanes);if(m!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;m;){var S=1<<31-Ge(m);y.entanglements[1]|=S,m&=~S}un(c),(Pe&6)===0&&(Al=_t()+500,or(0))}}break;case 31:case 13:y=ma(c,2),y!==null&&Nt(y,c,2),Nl(),kc(c,2)}if(c=vc(s),c===null&&oc(e,t,s,Kl,n),c===l)break;l=c}l!==null&&s.stopPropagation()}else oc(e,t,s,null,n)}}function vc(e){return e=Si(e),Sc(e)}var Kl=null;function Sc(e){if(Kl=null,e=Ma(e),e!==null){var t=p(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===31){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Kl=e,null}function hm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fi()){case q:return 2;case W:return 8;case ge:case Ce:return 32;case qe:return 268435456;default:return 32}default:return 32}}var Tc=!1,na=null,aa=null,sa=null,hr=new Map,gr=new Map,ra=[],Cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gm(e,t){switch(e){case"focusin":case"focusout":na=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":sa=null;break;case"pointerover":case"pointerout":hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gr.delete(t.pointerId)}}function xr(e,t,n,s,l,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:c,targetContainers:[l]},t!==null&&(t=Da(t),t!==null&&fm(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ey(e,t,n,s,l){switch(t){case"focusin":return na=xr(na,e,t,n,s,l),!0;case"dragenter":return aa=xr(aa,e,t,n,s,l),!0;case"mouseover":return sa=xr(sa,e,t,n,s,l),!0;case"pointerover":var c=l.pointerId;return hr.set(c,xr(hr.get(c)||null,e,t,n,s,l)),!0;case"gotpointercapture":return c=l.pointerId,gr.set(c,xr(gr.get(c)||null,e,t,n,s,l)),!0}return!1}function xm(e){var t=Ma(e.target);if(t!==null){var n=p(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,Nu(e.priority,function(){mm(n)});return}}else if(t===31){if(t=h(n),t!==null){e.blockedOn=t,Nu(e.priority,function(){mm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vc(e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);vi=s,n.target.dispatchEvent(s),vi=null}else return t=Da(n),t!==null&&fm(t),e.blockedOn=n,!1;t.shift()}return!0}function ym(e,t,n){Xl(e)&&n.delete(t)}function Ay(){Tc=!1,na!==null&&Xl(na)&&(na=null),aa!==null&&Xl(aa)&&(aa=null),sa!==null&&Xl(sa)&&(sa=null),hr.forEach(ym),gr.forEach(ym)}function Ql(e,t){e.blockedOn===t&&(e.blockedOn=null,Tc||(Tc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ay)))}var Fl=null;function bm(e){Fl!==e&&(Fl=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Fl===e&&(Fl=null);for(var t=0;t<e.length;t+=3){var n=e[t],s=e[t+1],l=e[t+2];if(typeof s!="function"){if(Sc(s||n)===null)continue;break}var c=Da(n);c!==null&&(e.splice(t,3),t-=3,vo(c,{pending:!0,data:l,method:n.method,action:s},s,l))}}))}function hs(e){function t(S){return Ql(S,e)}na!==null&&Ql(na,e),aa!==null&&Ql(aa,e),sa!==null&&Ql(sa,e),hr.forEach(t),gr.forEach(t);for(var n=0;n<ra.length;n++){var s=ra[n];s.blockedOn===e&&(s.blockedOn=null)}for(;0<ra.length&&(n=ra[0],n.blockedOn===null);)xm(n),n.blockedOn===null&&ra.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(s=0;s<n.length;s+=3){var l=n[s],c=n[s+1],m=l[St]||null;if(typeof c=="function")m||bm(n);else if(m){var y=null;if(c&&c.hasAttribute("formAction")){if(l=c,m=c[St]||null)y=m.formAction;else if(Sc(l)!==null)continue}else y=m.action;typeof y=="function"?n[s+1]=y:(n.splice(s,3),s-=3),bm(n)}}}function _m(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),s||setTimeout(n,20)}function n(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Cc(e){this._internalRoot=e}Zl.prototype.render=Cc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,s=Ht();dm(n,s,e,t,null,null)},Zl.prototype.unmount=Cc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dm(e.current,2,null,e,null,null),Nl(),t[Oa]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ju();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ra.length&&t!==0&&t<ra[n].priority;n++);ra.splice(n,0,e),n===0&&xm(e)}};var km=r.version;if(km!=="19.2.3")throw Error(o(527,km,"19.2.3"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=g(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var jy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{kt=Wl.inject(jy),ct=Wl}catch{}}return br.createRoot=function(e,t){if(!d(e))throw Error(o(299));var n=!1,s="",l=Ep,c=Ap,m=jp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=cm(e,1,!1,null,null,n,s,null,l,c,m,_m),e[Oa]=t.current,ic(e),new Cc(t)},br.hydrateRoot=function(e,t,n){if(!d(e))throw Error(o(299));var s=!1,l="",c=Ep,m=Ap,y=jp,S=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=cm(e,1,!0,t,n??null,s,l,S,c,m,y,_m),t.context=um(null),n=t.current,s=Ht(),s=hi(s),l=Vn(s),l.callback=null,Gn(n,l,s),n=s,t.current.lanes=n,As(t,n),un(t),e[Oa]=t.current,ic(e),new Zl(t)},br.version="19.2.3",br}var Lm;function By(){if(Lm)return jc.exports;Lm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),jc.exports=qy(),jc.exports}var Uy=By();const Hy=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Iy=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,i,o)=>o?o.toUpperCase():i.toLowerCase()),Om=a=>{const r=Iy(a);return r.charAt(0).toUpperCase()+r.slice(1)},Ch=(...a)=>a.filter((r,i,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===i).join(" ").trim(),Yy=a=>{for(const r in a)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};var Vy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Gy=Q.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:d="",children:p,iconNode:f,...h},x)=>Q.createElement("svg",{ref:x,...Vy,width:r,height:r,stroke:a,strokeWidth:o?Number(i)*24/Number(r):i,className:Ch("lucide",d),...!p&&!Yy(h)&&{"aria-hidden":"true"},...h},[...f.map(([g,b])=>Q.createElement(g,b)),...Array.isArray(p)?p:[p]]));const ve=(a,r)=>{const i=Q.forwardRef(({className:o,...d},p)=>Q.createElement(Gy,{ref:p,iconNode:r,className:Ch(`lucide-${Hy(Om(a))}`,`lucide-${a}`,o),...d}));return i.displayName=Om(a),i};const Ky=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Eh=ve("arrow-down",Ky);const Xy=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ni=ve("arrow-left",Xy);const Qy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],li=ve("arrow-right",Qy);const Fy=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],iu=ve("book-open",Fy);const Zy=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Wy=ve("brain",Zy);const Jy=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],$y=ve("bug",Jy);const e1=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Mm=ve("calendar",e1);const t1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ou=ve("check",t1);const n1=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],a1=ve("chevron-left",n1);const s1=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],cu=ve("chevron-right",s1);const r1=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],l1=ve("clock",r1);const i1=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],o1=ve("cloud",i1);const c1=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],uu=ve("code",c1);const u1=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],Ah=ve("coffee",u1);const d1=[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]],jh=ve("construction",d1);const p1=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],ii=ve("copy",p1);const f1=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],m1=ve("cpu",f1);const h1=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],g1=ve("download",h1);const x1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Er=ve("external-link",x1);const y1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],b1=ve("file-text",y1);const _1=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Ar=ve("github",_1);const k1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Mc=ve("globe",k1);const w1=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],v1=ve("graduation-cap",w1);const S1=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],T1=ve("heart",S1);const C1=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],jr=ve("house",C1);const E1=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Dm=ve("layers",E1);const A1=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],j1=ve("menu",A1);const N1=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],L1=ve("message-circle",N1);const O1=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],M1=ve("message-square",O1);const D1=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],R1=ve("monitor",D1);const P1=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],z1=ve("palette",P1);const q1=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],B1=ve("puzzle",q1);const U1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Nh=ve("search",U1);const H1=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],I1=ve("server",H1);const Y1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Lh=ve("shield",Y1);const V1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}]],bs=ve("sparkle",V1);const G1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Rn=ve("sparkles",G1);const K1=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Oh=ve("terminal",K1);const X1=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Q1=ve("twitter",X1);const F1=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Z1=ve("wrench",F1);const W1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Mh=ve("x",W1),J1=[{id:"lobster",title:"小泥巴的进化历程",description:"从零开始搭建你的个人 AI 代理 —— 记录 Openclaw 的完整搭建之旅、架构设计与实战经验",icon:$y,href:"/lobster",status:"ready",color:"#FF6B35"},{id:"prompts",title:"神秘咒语盒",description:"收集和整理各类 AI 工具的系统提示词，探索 AI 思维方式的秘密",icon:bs,href:"/prompts",status:"ready",color:"#8B5CF6"},{id:"design-showcase",title:"设计样板间",description:"归档前端设计样式，展示前沿 UI/UX 设计实验与创意实现",icon:z1,href:"/design-showcase",status:"ready",color:"#EC4899"},{id:"learn-cc",title:"Agent 入门教程",description:"从零掌握 AI Agent 的 12 堂课 —— 基于 Claude Code 的系统化学习路径",icon:v1,href:"/learn-cc",status:"ready",color:"#10B981"},{id:"cat-cafe",title:"猫猫咖啡厅",description:"一个关于猫咪的温馨空间，分享萌猫日常、养猫心得与云吸猫乐趣",icon:Ah,href:"/cat-cafe",status:"coming",color:"#9B59B6"}],$1=()=>{const a=()=>{document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})};return u.jsxs("div",{"code-path":"src\\sections\\LandingPage.tsx:69:5",className:"min-h-screen bg-lobster-dark text-white",children:[u.jsxs("section",{"code-path":"src\\sections\\LandingPage.tsx:71:7",className:"relative h-screen flex items-center justify-center overflow-hidden",style:{backgroundImage:"url(/source/pic/index-pic.jpg)",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:[u.jsx("div",{"code-path":"src\\sections\\LandingPage.tsx:81:9",className:"absolute inset-0 bg-lobster-dark/20"}),u.jsxs("div",{"code-path":"src\\sections\\LandingPage.tsx:84:9",className:"relative z-10 container-custom text-center",children:[u.jsxs("div",{"code-path":"src\\sections\\LandingPage.tsx:85:11",className:"inline-flex items-center gap-2 px-4 py-2 bg-lobster-orange/10 border border-lobster-orange/20 rounded-full mb-8",children:[u.jsx(Rn,{"code-path":"src\\sections\\LandingPage.tsx:86:13",className:"w-4 h-4 text-lobster-orange"}),u.jsx("span",{"code-path":"src\\sections\\LandingPage.tsx:87:13",className:"text-sm text-lobster-orange font-medium",children:"持续进化中"})]}),u.jsxs("h1",{"code-path":"src\\sections\\LandingPage.tsx:90:11",className:"text-5xl md:text-6xl lg:text-7xl font-bold mb-6",children:["泥巴猪的",u.jsx("span",{"code-path":"src\\sections\\LandingPage.tsx:91:17",className:"text-lobster-orange",children:"实验田"})]}),u.jsx("p",{"code-path":"src\\sections\\LandingPage.tsx:94:11",className:"text-xl text-white/70 max-w-2xl mx-auto mb-10",children:"探索 AI 与技术的无限可能，记录从零到一的创造之旅"}),u.jsxs("button",{"code-path":"src\\sections\\LandingPage.tsx:99:11",onClick:a,className:"flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors animate-bounce-subtle mx-auto",children:[u.jsx("span",{"code-path":"src\\sections\\LandingPage.tsx:103:13",className:"text-xs",children:"向下滚动"}),u.jsx(Eh,{"code-path":"src\\sections\\LandingPage.tsx:104:13",className:"w-5 h-5"})]})]})]}),u.jsxs("section",{"code-path":"src\\sections\\LandingPage.tsx:110:7",id:"projects",className:"container-custom py-20 bg-lobster-dark",children:[u.jsxs("h2",{"code-path":"src\\sections\\LandingPage.tsx:111:9",className:"text-3xl font-bold text-center mb-12",children:["选择你的",u.jsx("span",{"code-path":"src\\sections\\LandingPage.tsx:112:15",className:"text-lobster-orange",children:"实验项目"})]}),u.jsx("div",{"code-path":"src\\sections\\LandingPage.tsx:115:9",className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:J1.map(r=>{const i=r.icon;return u.jsxs("a",{"code-path":"src\\sections\\LandingPage.tsx:119:15",href:r.href,className:"group relative overflow-hidden rounded-2xl transition-all hover:transform hover:scale-[1.02]",style:{background:`linear-gradient(135deg, ${r.color}15 0%, ${r.color}05 100%)`,border:`1px solid ${r.color}30`},children:[u.jsx("div",{"code-path":"src\\sections\\LandingPage.tsx:129:17",className:"absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity",children:u.jsx(i,{"code-path":"src\\sections\\LandingPage.tsx:130:19",className:"w-64 h-64"})}),u.jsxs("div",{"code-path":"src\\sections\\LandingPage.tsx:133:17",className:"relative p-8",children:[u.jsx("div",{"code-path":"src\\sections\\LandingPage.tsx:134:19",className:"w-14 h-14 rounded-xl flex items-center justify-center mb-6",style:{backgroundColor:`${r.color}20`},children:u.jsx(i,{"code-path":"src\\sections\\LandingPage.tsx:138:21",className:"w-7 h-7",style:{color:r.color}})}),u.jsx("h3",{"code-path":"src\\sections\\LandingPage.tsx:141:19",className:"text-2xl font-bold mb-3 group-hover:text-lobster-orange transition-colors",children:r.title}),u.jsx("p",{"code-path":"src\\sections\\LandingPage.tsx:145:19",className:"text-white/60 mb-6 leading-relaxed",children:r.description}),u.jsx("div",{"code-path":"src\\sections\\LandingPage.tsx:149:19",className:"flex items-center gap-2",children:r.status==="ready"?u.jsxs(u.Fragment,{children:[u.jsx("span",{"code-path":"src\\sections\\LandingPage.tsx:152:25",className:"text-lobster-orange font-medium",children:"进入探索"}),u.jsx(li,{"code-path":"src\\sections\\LandingPage.tsx:153:25",className:"w-4 h-4 text-lobster-orange group-hover:translate-x-1 transition-transform"})]}):u.jsx("span",{"code-path":"src\\sections\\LandingPage.tsx:156:23",className:"text-white/40",children:"即将上线 · 敬请期待"})})]})]},r.id)})})]}),u.jsx("div",{"code-path":"src\\sections\\LandingPage.tsx:167:7",className:"border-t border-white/10 py-8 bg-lobster-dark",children:u.jsx("div",{"code-path":"src\\sections\\LandingPage.tsx:168:9",className:"container-custom text-center",children:u.jsx("p",{"code-path":"src\\sections\\LandingPage.tsx:169:11",className:"text-white/40 text-sm",children:"© 2026 泥巴猪的实验田 · Powered by Curiosity & AI"})})})]})},eb=()=>u.jsxs("div",{"code-path":"src\\sections\\CatCafePage.tsx:5:5",className:"min-h-screen bg-lobster-dark text-white flex flex-col",children:[u.jsx("div",{"code-path":"src\\sections\\CatCafePage.tsx:7:7",className:"pt-32 pb-16 text-center",children:u.jsxs("div",{"code-path":"src\\sections\\CatCafePage.tsx:8:9",className:"container-custom",children:[u.jsxs("div",{"code-path":"src\\sections\\CatCafePage.tsx:9:11",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm mb-6",children:[u.jsx(Ah,{"code-path":"src\\sections\\CatCafePage.tsx:10:13",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\CatCafePage.tsx:11:13",children:"即将开业"})]}),u.jsxs("h1",{"code-path":"src\\sections\\CatCafePage.tsx:13:11",className:"text-4xl md:text-5xl font-bold mb-4",children:["猫猫",u.jsx("span",{"code-path":"src\\sections\\CatCafePage.tsx:14:15",className:"text-purple-400",children:"咖啡厅"})]}),u.jsx("p",{"code-path":"src\\sections\\CatCafePage.tsx:16:11",className:"text-white/60 text-lg max-w-2xl mx-auto",children:"一个关于猫咪的温馨空间，分享萌猫日常、养猫心得与云吸猫乐趣"})]})}),u.jsxs("div",{"code-path":"src\\sections\\CatCafePage.tsx:23:7",className:"flex-1 flex flex-col items-center justify-center pb-32",children:[u.jsx("div",{"code-path":"src\\sections\\CatCafePage.tsx:24:9",className:"w-24 h-24 rounded-full bg-purple-500/20 flex items-center justify-center mb-8",children:u.jsx(jh,{"code-path":"src\\sections\\CatCafePage.tsx:25:11",className:"w-12 h-12 text-purple-400"})}),u.jsx("h2",{"code-path":"src\\sections\\CatCafePage.tsx:27:9",className:"text-3xl font-bold mb-4",children:"装修中"}),u.jsx("p",{"code-path":"src\\sections\\CatCafePage.tsx:28:9",className:"text-white/60 text-lg mb-2",children:"精彩内容即将呈现"}),u.jsx("p",{"code-path":"src\\sections\\CatCafePage.tsx:29:9",className:"text-white/40 text-sm",children:"尽情期待..."})]}),u.jsx("div",{"code-path":"src\\sections\\CatCafePage.tsx:33:7",className:"border-t border-white/10 py-8",children:u.jsx("div",{"code-path":"src\\sections\\CatCafePage.tsx:34:9",className:"container-custom text-center",children:u.jsx("p",{"code-path":"src\\sections\\CatCafePage.tsx:35:11",className:"text-white/40 text-sm",children:"© 2026 猫猫咖啡厅 · 泥巴猪的实验田"})})})]}),tb=({onNavigate:a})=>{const[r,i]=Q.useState(!1),[o,d]=Q.useState(!1);Q.useEffect(()=>{const h=()=>{i(window.scrollY>50)};return window.addEventListener("scroll",h,{passive:!0}),()=>window.removeEventListener("scroll",h)},[]);const p=[{label:"首页",href:"/lobster",routeName:"home"},{label:"特性",href:"/lobster/#features",isAnchor:!0},{label:"教程",href:"/lobster/tutorial",isRoute:!0,routeName:"tutorial"},{label:"工作室",href:"/lobster/workspace",isRoute:!0,routeName:"workspace"},{label:"日记",href:"/lobster/diary",isRoute:!0,routeName:"diary"},{label:"技能",href:"/lobster/skill",isRoute:!0,routeName:"skill"},{label:"技术分析",href:"/lobster/tech-eden",isRoute:!0,routeName:"tech"}],f=(h,x)=>{h.preventDefault(),x.routeName&&a&&a(x.routeName),d(!1)};return u.jsx("nav",{"code-path":"src\\sections\\Navigation.tsx:39:5",className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${r?"bg-lobster-dark/90 backdrop-blur-xl border-b border-white/10":"bg-transparent"}`,children:u.jsxs("div",{"code-path":"src\\sections\\Navigation.tsx:46:7",className:"container-custom",children:[u.jsxs("div",{"code-path":"src\\sections\\Navigation.tsx:47:9",className:"flex items-center justify-between h-16 md:h-20",children:[u.jsxs("div",{"code-path":"src\\sections\\Navigation.tsx:49:11",className:"flex items-center gap-4",children:[u.jsx("a",{"code-path":"src\\sections\\Navigation.tsx:50:13",href:"/",onClick:h=>{h.preventDefault(),window.location.href="/"},className:"flex items-center gap-1 text-white/50 hover:text-lobster-orange transition-colors",title:"返回实验田",children:u.jsx(jr,{"code-path":"src\\sections\\Navigation.tsx:56:15",className:"w-4 h-4"})}),u.jsxs("a",{"code-path":"src\\sections\\Navigation.tsx:58:13",href:"/lobster",onClick:h=>{h.preventDefault(),a?.("home")},className:"flex items-center gap-2 group",children:[u.jsx("span",{"code-path":"src\\sections\\Navigation.tsx:63:15",className:"text-2xl",children:"🦞"}),u.jsx("span",{"code-path":"src\\sections\\Navigation.tsx:64:15",className:"font-semibold text-white group-hover:text-lobster-orange transition-colors",children:"小泥巴的进化历程"})]})]}),u.jsx("div",{"code-path":"src\\sections\\Navigation.tsx:71:11",className:"hidden md:flex items-center gap-8",children:p.map(h=>u.jsx("a",{"code-path":"src\\sections\\Navigation.tsx:73:15",href:h.href,onClick:x=>f(x,h),className:"text-sm text-white/70 hover:text-white transition-colors",children:h.label},h.href))}),u.jsxs("div",{"code-path":"src\\sections\\Navigation.tsx:85:11",className:"hidden md:flex items-center gap-4",children:[u.jsxs("a",{"code-path":"src\\sections\\Navigation.tsx:86:13",href:"https://github.com/openclaw/openclaw",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors",children:[u.jsx(Ar,{"code-path":"src\\sections\\Navigation.tsx:92:15",className:"w-5 h-5"}),u.jsx("span",{"code-path":"src\\sections\\Navigation.tsx:93:15",children:"GitHub"})]}),u.jsx("a",{"code-path":"src\\sections\\Navigation.tsx:95:13",href:"/lobster/tutorial",className:"btn-primary text-sm py-2.5 px-5",children:"开始搭建"})]}),u.jsx("button",{"code-path":"src\\sections\\Navigation.tsx:104:11",className:"md:hidden p-2 text-white",onClick:()=>d(!o),children:o?u.jsx(Mh,{"code-path":"src\\sections\\Navigation.tsx:108:33",className:"w-6 h-6"}):u.jsx(j1,{"code-path":"src\\sections\\Navigation.tsx:108:61",className:"w-6 h-6"})})]}),o&&u.jsx("div",{"code-path":"src\\sections\\Navigation.tsx:114:11",className:"md:hidden py-4 border-t border-white/10 animate-fade-in",children:u.jsxs("div",{"code-path":"src\\sections\\Navigation.tsx:115:13",className:"flex flex-col gap-4",children:[u.jsxs("a",{"code-path":"src\\sections\\Navigation.tsx:116:15",href:"/",onClick:h=>{h.preventDefault(),window.location.href="/"},className:"flex items-center gap-2 text-white/50 hover:text-lobster-orange transition-colors py-2",children:[u.jsx(jr,{"code-path":"src\\sections\\Navigation.tsx:121:17",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\Navigation.tsx:122:17",children:"返回实验田"})]}),p.map(h=>u.jsx("a",{"code-path":"src\\sections\\Navigation.tsx:125:17",href:h.href,className:"text-white/70 hover:text-white transition-colors py-2",onClick:x=>f(x,h),children:h.label},h.href)),u.jsxs("a",{"code-path":"src\\sections\\Navigation.tsx:134:15",href:"https://github.com/openclaw/openclaw",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-white/70 hover:text-white transition-colors py-2",children:[u.jsx(Ar,{"code-path":"src\\sections\\Navigation.tsx:140:17",className:"w-5 h-5"}),u.jsx("span",{"code-path":"src\\sections\\Navigation.tsx:141:17",children:"GitHub"})]})]})})]})})},nb=()=>{const[a,r]=Q.useState(!1),i=Q.useRef(null);Q.useEffect(()=>{r(!0)},[]);const o=()=>{document.getElementById("features")?.scrollIntoView({behavior:"smooth"})};return u.jsxs("section",{"code-path":"src\\sections\\Hero.tsx:17:5",id:"hero",ref:i,className:"relative min-h-screen flex items-center justify-center overflow-hidden bg-lobster-darker",children:[u.jsxs("div",{"code-path":"src\\sections\\Hero.tsx:23:7",className:"absolute inset-0",children:[u.jsx("div",{"code-path":"src\\sections\\Hero.tsx:25:9",className:"absolute inset-0",style:{backgroundImage:"url(/assets/images/woshou.png)",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",opacity:.3}}),u.jsx("div",{"code-path":"src\\sections\\Hero.tsx:37:9",className:"absolute inset-0 bg-gradient-dark opacity-70"}),u.jsx("div",{"code-path":"src\\sections\\Hero.tsx:40:9",className:"absolute inset-0 opacity-[0.03]",style:{backgroundImage:`linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,backgroundSize:"60px 60px"}}),u.jsx("div",{"code-path":"src\\sections\\Hero.tsx:50:9",className:"absolute top-1/4 left-1/4 w-96 h-96 bg-lobster-orange/10 rounded-full blur-[120px] animate-pulse"}),u.jsx("div",{"code-path":"src\\sections\\Hero.tsx:51:9",className:"absolute bottom-1/4 right-1/4 w-80 h-80 bg-lobster-gold/10 rounded-full blur-[100px] animate-pulse animation-delay-500"})]}),u.jsx("div",{"code-path":"src\\sections\\Hero.tsx:55:7",className:"relative z-10 container-custom pt-20",children:u.jsx("div",{"code-path":"src\\sections\\Hero.tsx:56:9",className:"flex flex-col items-center",children:u.jsxs("div",{"code-path":"src\\sections\\Hero.tsx:58:11",className:"text-center max-w-3xl",children:[u.jsxs("div",{"code-path":"src\\sections\\Hero.tsx:60:13",className:`inline-flex items-center gap-2 px-4 py-2 bg-lobster-orange/10 border border-lobster-orange/20 rounded-full mb-8 transition-all duration-700 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:[u.jsx(Rn,{"code-path":"src\\sections\\Hero.tsx:65:15",className:"w-4 h-4 text-lobster-orange"}),u.jsx("span",{"code-path":"src\\sections\\Hero.tsx:66:15",className:"text-sm text-lobster-orange font-medium",children:"个人 AI 助手搭建记录"})]}),u.jsx("h1",{"code-path":"src\\sections\\Hero.tsx:72:13",className:`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight transition-all duration-700 delay-100 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:"小泥巴的进化历程"}),u.jsx("p",{"code-path":"src\\sections\\Hero.tsx:81:13",className:`text-2xl md:text-3xl font-medium animated-gradient-text mb-6 transition-all duration-700 delay-200 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:"Openclaw Adventures"}),u.jsx("p",{"code-path":"src\\sections\\Hero.tsx:90:13",className:`text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:"从零开始搭建你的个人 AI 代理 —— 记录 Openclaw 的完整搭建之旅、架构设计与实战经验"}),u.jsxs("div",{"code-path":"src\\sections\\Hero.tsx:99:13",className:`flex flex-col sm:flex-row items-center gap-4 justify-center transition-all duration-700 delay-400 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:[u.jsxs("a",{"code-path":"src\\sections\\Hero.tsx:104:15",href:"/tutorial",className:"btn-primary w-full sm:w-auto",children:[u.jsx(Oh,{"code-path":"src\\sections\\Hero.tsx:105:17",className:"w-4 h-4 mr-2"}),"开始探索"]}),u.jsx("a",{"code-path":"src\\sections\\Hero.tsx:108:15",href:"/#features",className:"btn-secondary w-full sm:w-auto",children:"了解更多"})]})]})})}),u.jsxs("button",{"code-path":"src\\sections\\Hero.tsx:117:7",onClick:o,className:"absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors animate-bounce-subtle",children:[u.jsx("span",{"code-path":"src\\sections\\Hero.tsx:121:9",className:"text-xs",children:"向下滚动"}),u.jsx(Eh,{"code-path":"src\\sections\\Hero.tsx:122:9",className:"w-5 h-5"})]})]})},ab=[{icon:I1,title:"完全本地化",description:"数据完全存储在本地，隐私安全有保障。支持 macOS、Windows、Linux 多平台运行。"},{icon:L1,title:"消息应用集成",description:"无缝连接 WhatsApp、Telegram、Discord、Slack，让 AI 助手融入你的日常沟通。"},{icon:B1,title:"模块化技能",description:"通过插件系统扩展功能，浏览器控制、文件管理、代码执行，无所不能。"},{icon:Wy,title:"智能记忆",description:"记住你的偏好和历史对话，越用越懂你的个人 AI 助手。"},{icon:uu,title:"开源生态",description:"基于开源社区驱动，27.8万+ GitHub Stars，持续迭代更新。"},{icon:Lh,title:"安全沙箱",description:"内置沙箱隔离和权限控制，确保 AI 操作在你的掌控之中。"}],sb=()=>{const[a,r]=Q.useState(new Set),i=Q.useRef(null),o=Q.useRef([]);return Q.useEffect(()=>{const d=new IntersectionObserver(p=>{p.forEach(f=>{const h=o.current.indexOf(f.target);f.isIntersecting&&h!==-1&&r(x=>new Set([...x,h]))})},{threshold:.2,rootMargin:"0px 0px -50px 0px"});return o.current.forEach(p=>{p&&d.observe(p)}),()=>d.disconnect()},[]),u.jsx("section",{"code-path":"src\\sections\\Features.tsx:69:5",id:"features",ref:i,className:"section-padding bg-lobster-dark",children:u.jsxs("div",{"code-path":"src\\sections\\Features.tsx:70:7",className:"container-custom",children:[u.jsxs("div",{"code-path":"src\\sections\\Features.tsx:72:9",className:"text-center mb-16",children:[u.jsx("span",{"code-path":"src\\sections\\Features.tsx:73:11",className:"tag-lobster mb-4",children:"核心特性"}),u.jsx("h2",{"code-path":"src\\sections\\Features.tsx:74:11",className:"text-3xl md:text-4xl font-bold text-white mt-4 mb-4",children:"为什么选择 Openclaw？"}),u.jsx("p",{"code-path":"src\\sections\\Features.tsx:77:11",className:"text-white/60 text-lg max-w-2xl mx-auto",children:"一个开源、本地化、可扩展的个人 AI 助手平台"})]}),u.jsx("div",{"code-path":"src\\sections\\Features.tsx:83:9",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:ab.map((d,p)=>{const f=d.icon,h=a.has(p);return u.jsxs("div",{"code-path":"src\\sections\\Features.tsx:89:15",ref:x=>{o.current[p]=x},className:`card-dark group transition-all duration-600 ${h?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:`${p*100}ms`},children:[u.jsx("div",{"code-path":"src\\sections\\Features.tsx:100:17",className:"w-12 h-12 rounded-xl bg-gradient-lobster flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",children:u.jsx(f,{"code-path":"src\\sections\\Features.tsx:101:19",className:"w-6 h-6 text-black"})}),u.jsx("h3",{"code-path":"src\\sections\\Features.tsx:105:17",className:"text-xl font-semibold text-white mb-3",children:d.title}),u.jsx("p",{"code-path":"src\\sections\\Features.tsx:108:17",className:"text-white/60 leading-relaxed",children:d.description})]},d.title)})})]})})},rb=[{icon:M1,title:"接口层",items:["Telegram","飞书","Discord","Slack"],color:"#FF6B35"},{icon:m1,title:"核心层",items:["Agent Runtime","LLM Router","Memory Manager","Task Scheduler"],color:"#F7931E"},{icon:Z1,title:"技能层",items:["Browser Control","File System","Code Execution","API Integration"],color:"#FF6B35"},{icon:o1,title:"模型层",items:["Claude","GPT-5","Gemini","DeepSeek","GLM","MiniMax","Kimi"],color:"#F7931E"}],lb=()=>{const[a,r]=Q.useState(!1),i=Q.useRef(null);return Q.useEffect(()=>{const o=new IntersectionObserver(([d])=>{d.isIntersecting&&r(!0)},{threshold:.2});return i.current&&o.observe(i.current),()=>o.disconnect()},[]),u.jsx("section",{"code-path":"src\\sections\\Architecture.tsx:60:5",id:"architecture",ref:i,className:"section-padding bg-lobster-muted",children:u.jsxs("div",{"code-path":"src\\sections\\Architecture.tsx:65:7",className:"container-custom",children:[u.jsxs("div",{"code-path":"src\\sections\\Architecture.tsx:67:9",className:"text-center mb-16",children:[u.jsx("span",{"code-path":"src\\sections\\Architecture.tsx:68:11",className:"tag-lobster mb-4",children:"系统架构"}),u.jsx("h2",{"code-path":"src\\sections\\Architecture.tsx:69:11",className:"text-3xl md:text-4xl font-bold text-white mt-4 mb-4",children:"架构设计"}),u.jsx("p",{"code-path":"src\\sections\\Architecture.tsx:72:11",className:"text-white/60 text-lg max-w-2xl mx-auto",children:"Openclaw 的分层架构让系统稳定、可扩展"})]}),u.jsxs("div",{"code-path":"src\\sections\\Architecture.tsx:78:9",className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[u.jsx("div",{"code-path":"src\\sections\\Architecture.tsx:80:11",className:`relative transition-all duration-800 ${a?"opacity-100 translate-x-0":"opacity-0 -translate-x-8"}`,children:u.jsxs("div",{"code-path":"src\\sections\\Architecture.tsx:85:13",className:"relative rounded-2xl overflow-hidden bg-lobster-dark border border-white/10",children:[u.jsx("img",{"code-path":"src\\sections\\Architecture.tsx:86:15",src:"/assets/images/longxiajiagou.png",alt:"OpenCLAW 架构图",className:"w-full h-auto"}),u.jsx("div",{"code-path":"src\\sections\\Architecture.tsx:92:15",className:"absolute inset-0 bg-gradient-to-t from-lobster-dark/50 to-transparent pointer-events-none"})]})}),u.jsx("div",{"code-path":"src\\sections\\Architecture.tsx:97:11",className:"space-y-6",children:rb.map((o,d)=>{const p=o.icon,f=a;return u.jsxs("div",{"code-path":"src\\sections\\Architecture.tsx:103:17",className:`flex items-start gap-4 p-5 rounded-xl bg-lobster-dark/50 border border-white/10 hover:border-white/20 transition-all duration-500 ${f?"opacity-100 translate-x-0":"opacity-0 translate-x-8"}`,style:{transitionDelay:`${d*150+200}ms`},children:[u.jsx("div",{"code-path":"src\\sections\\Architecture.tsx:113:19",className:"w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",style:{backgroundColor:`${o.color}20`},children:u.jsx(p,{"code-path":"src\\sections\\Architecture.tsx:117:21",className:"w-5 h-5",style:{color:o.color}})}),u.jsxs("div",{"code-path":"src\\sections\\Architecture.tsx:124:19",className:"flex-1",children:[u.jsx("h3",{"code-path":"src\\sections\\Architecture.tsx:125:21",className:"text-lg font-semibold text-white mb-2",children:o.title}),u.jsx("div",{"code-path":"src\\sections\\Architecture.tsx:128:21",className:"flex flex-wrap gap-2",children:o.items.map(h=>u.jsx("span",{"code-path":"src\\sections\\Architecture.tsx:130:25",className:"px-2.5 py-1 text-xs rounded-md bg-white/5 text-white/70",children:h},h))})]})]},o.title)})})]}),u.jsx("div",{"code-path":"src\\sections\\Architecture.tsx:146:9",className:`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-800 delay-500 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:[{label:"模块化设计",desc:"各层独立，易于扩展和维护"},{label:"高可扩展性",desc:"插件化架构，功能无限延伸"},{label:"稳定可靠",desc:"分层隔离，故障不影响整体"}].map(o=>u.jsxs("div",{"code-path":"src\\sections\\Architecture.tsx:156:13",className:"text-center p-6 rounded-xl bg-lobster-dark/30 border border-white/5",children:[u.jsx("h4",{"code-path":"src\\sections\\Architecture.tsx:160:15",className:"text-white font-medium mb-2",children:o.label}),u.jsx("p",{"code-path":"src\\sections\\Architecture.tsx:161:15",className:"text-white/50 text-sm",children:o.desc})]},o.label))})]})})},ib=[{tag:"入门",tagIcon:Dm,title:"OpenClaw是什么",description:"认识开源、自托管的AI Agent系统",readTime:"5 min",url:"/source/tutorial/01-OpenClaw是什么.html"},{tag:"架构",tagIcon:Dm,title:"整体架构",description:"Gateway-Node-Channel三层架构详解",readTime:"8 min",url:"/source/tutorial/05-整体架构.html"},{tag:"部署",tagIcon:Mc,title:"部署方式总览",description:"本地/Docker/云厂商一键部署对比",readTime:"6 min",url:"/source/tutorial/10-部署方式总览.html"},{tag:"集成",tagIcon:Mc,title:"国际平台接入",description:"Telegram/Discord/WhatsApp/Slack配置指南",readTime:"20 min",url:"/source/tutorial/16-国际平台接入.html"},{tag:"集成",tagIcon:Mc,title:"国内平台接入",description:"QQ/飞书/钉钉/企业微信配置指南",readTime:"20 min",url:"/source/tutorial/17-国内平台接入.html"},{tag:"进阶",tagIcon:uu,title:"Skills工作原理",description:"三层优先级与加载机制详解",readTime:"8 min",url:"/source/tutorial/19-Skills工作原理.html"},{tag:"运维",tagIcon:Lh,title:"Skills安全",description:"安全模型与模型配置指南",readTime:"15 min",url:"/source/tutorial/23-Skills安全.html"}],ob=()=>{const[a,r]=Q.useState(!1),i=Q.useRef(null);return Q.useEffect(()=>{const o=new IntersectionObserver(([d])=>{d.isIntersecting&&r(!0)},{threshold:.1});return i.current&&o.observe(i.current),()=>o.disconnect()},[]),u.jsxs("section",{"code-path":"src\\sections\\TutorialPreview.tsx:45:5",id:"tutorials",ref:i,className:"section-padding bg-lobster-dark overflow-hidden",children:[u.jsx("div",{"code-path":"src\\sections\\TutorialPreview.tsx:50:7",className:"container-custom",children:u.jsxs("div",{"code-path":"src\\sections\\TutorialPreview.tsx:52:9",className:"flex flex-col md:flex-row md:items-end md:justify-between mb-12",children:[u.jsxs("div",{"code-path":"src\\sections\\TutorialPreview.tsx:53:11",children:[u.jsx("span",{"code-path":"src\\sections\\TutorialPreview.tsx:54:13",className:"tag-lobster mb-4",children:"学习资源"}),u.jsx("h2",{"code-path":"src\\sections\\TutorialPreview.tsx:55:13",className:"text-3xl md:text-4xl font-bold text-white mt-4 mb-4",children:"搭建教程"}),u.jsx("p",{"code-path":"src\\sections\\TutorialPreview.tsx:58:13",className:"text-white/60 text-lg max-w-xl",children:"28章完整教程，从零开始搭建你的AI助手"})]}),u.jsxs("a",{"code-path":"src\\sections\\TutorialPreview.tsx:64:11",href:"/source/tutorial/index.html",className:"mt-6 md:mt-0 flex items-center gap-2 px-6 py-3 bg-lobster-orange rounded-full text-white hover:bg-lobster-orange/80 transition-all",children:[u.jsx("span",{"code-path":"src\\sections\\TutorialPreview.tsx:68:13",children:"查看全部28章"}),u.jsx(cu,{"code-path":"src\\sections\\TutorialPreview.tsx:69:13",className:"w-4 h-4"})]})]})}),u.jsx("div",{"code-path":"src\\sections\\TutorialPreview.tsx:75:7",className:"container-custom",children:u.jsx("div",{"code-path":"src\\sections\\TutorialPreview.tsx:76:9",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:ib.map((o,d)=>{const p=o.tagIcon;return u.jsx("a",{"code-path":"src\\sections\\TutorialPreview.tsx:81:15",href:o.url,className:`group transition-all duration-600 block ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:`${d*100}ms`},children:u.jsxs("div",{"code-path":"src\\sections\\TutorialPreview.tsx:91:17",className:"card-dark h-full flex flex-col",children:[u.jsxs("div",{"code-path":"src\\sections\\TutorialPreview.tsx:93:19",className:"flex items-center gap-2 mb-4",children:[u.jsxs("span",{"code-path":"src\\sections\\TutorialPreview.tsx:94:21",className:"inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-lobster-orange bg-lobster-orange/10 rounded-full",children:[u.jsx(p,{"code-path":"src\\sections\\TutorialPreview.tsx:95:23",className:"w-3 h-3"}),o.tag]}),u.jsxs("span",{"code-path":"src\\sections\\TutorialPreview.tsx:98:21",className:"flex items-center gap-1 text-xs text-white/40",children:[u.jsx(l1,{"code-path":"src\\sections\\TutorialPreview.tsx:99:23",className:"w-3 h-3"}),o.readTime]})]}),u.jsx("h3",{"code-path":"src\\sections\\TutorialPreview.tsx:105:19",className:"text-lg font-semibold text-white mb-2 group-hover:text-lobster-orange transition-colors",children:o.title}),u.jsx("p",{"code-path":"src\\sections\\TutorialPreview.tsx:108:19",className:"text-white/60 text-sm leading-relaxed flex-1",children:o.description}),u.jsx("div",{"code-path":"src\\sections\\TutorialPreview.tsx:113:19",className:"mt-4 pt-4 border-t border-white/10",children:u.jsxs("span",{"code-path":"src\\sections\\TutorialPreview.tsx:114:21",className:"flex items-center gap-2 text-sm text-lobster-orange group-hover:gap-3 transition-all",children:["阅读教程",u.jsx(li,{"code-path":"src\\sections\\TutorialPreview.tsx:116:23",className:"w-4 h-4"})]})})]})},o.title)})})})]})},Dc=[{line:1,content:"# 安装 Openclaw",type:"comment"},{line:2,content:"curl -fsSL https://openclaw.ai/install.sh | bash",type:"command"},{line:3,content:"",type:"empty"},{line:4,content:"# 启动配置向导",type:"comment"},{line:5,content:"openclaw onboarding",type:"command"},{line:6,content:"",type:"empty"},{line:7,content:"# 开始与你的 AI 助手对话",type:"comment"},{line:8,content:"openclaw chat",type:"command"}],cb=()=>{const[a,r]=Q.useState(!1),[i,o]=Q.useState(0),[d,p]=Q.useState(!1),f=Q.useRef(null);Q.useEffect(()=>{const g=new IntersectionObserver(([b])=>{b.isIntersecting&&r(!0)},{threshold:.3});return f.current&&g.observe(f.current),()=>g.disconnect()},[]),Q.useEffect(()=>{if(a&&i<Dc.length){const g=setTimeout(()=>{o(b=>b+1)},150);return()=>clearTimeout(g)}},[a,i]);const h=()=>{const g=Dc.filter(b=>b.type!=="empty").map(b=>b.content).join(`
`);navigator.clipboard.writeText(g),p(!0),setTimeout(()=>p(!1),2e3)},x=g=>{switch(g){case"comment":return"text-white/40";case"command":return"text-lobster-orange";default:return""}};return u.jsx("section",{"code-path":"src\\sections\\CodeDemo.tsx:70:5",ref:f,className:"section-padding bg-lobster-muted",children:u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:71:7",className:"container-custom",children:[u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:73:9",className:"text-center mb-12",children:[u.jsx("span",{"code-path":"src\\sections\\CodeDemo.tsx:74:11",className:"tag-lobster mb-4",children:"快速开始"}),u.jsx("h2",{"code-path":"src\\sections\\CodeDemo.tsx:75:11",className:"text-3xl md:text-4xl font-bold text-white mt-4 mb-4",children:"一行命令，即刻体验"}),u.jsx("p",{"code-path":"src\\sections\\CodeDemo.tsx:78:11",className:"text-white/60 text-lg max-w-2xl mx-auto",children:"无需复杂配置，几分钟内即可运行你的个人 AI 助手"})]}),u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:84:9",className:`max-w-3xl mx-auto transition-all duration-800 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:[u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:89:11",className:"code-block border border-white/10",children:[u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:91:13",className:"flex items-center justify-between px-4 py-3 border-b border-white/10 bg-lobster-dark/50",children:[u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:92:15",className:"flex items-center gap-2",children:[u.jsx(Oh,{"code-path":"src\\sections\\CodeDemo.tsx:93:17",className:"w-4 h-4 text-white/40"}),u.jsx("span",{"code-path":"src\\sections\\CodeDemo.tsx:94:17",className:"text-sm text-white/60",children:"terminal"})]}),u.jsx("button",{"code-path":"src\\sections\\CodeDemo.tsx:96:15",onClick:h,className:"flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors",children:d?u.jsxs(u.Fragment,{children:[u.jsx(ou,{"code-path":"src\\sections\\CodeDemo.tsx:102:21",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\CodeDemo.tsx:103:21",children:"已复制"})]}):u.jsxs(u.Fragment,{children:[u.jsx(ii,{"code-path":"src\\sections\\CodeDemo.tsx:107:21",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\CodeDemo.tsx:108:21",children:"复制"})]})})]}),u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:115:13",className:"p-6 font-mono text-sm",children:[Dc.map((g,b)=>u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:117:17",className:`flex ${b<i?"opacity-100":"opacity-0"} transition-opacity duration-200`,children:[u.jsx("span",{"code-path":"src\\sections\\CodeDemo.tsx:125:19",className:"inline-block w-8 text-white/30 select-none",children:g.line}),u.jsx("span",{"code-path":"src\\sections\\CodeDemo.tsx:128:19",className:x(g.type),children:g.content})]},g.line)),u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:134:15",className:"flex mt-1",children:[u.jsx("span",{"code-path":"src\\sections\\CodeDemo.tsx:135:17",className:"inline-block w-8"}),u.jsx("span",{"code-path":"src\\sections\\CodeDemo.tsx:136:17",className:"w-2 h-5 bg-lobster-orange animate-pulse"})]})]})]}),u.jsx("div",{"code-path":"src\\sections\\CodeDemo.tsx:142:11",className:`mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-800 delay-300 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:[{label:"系统要求",value:"Node.js 22+"},{label:"支持平台",value:"macOS / Windows / Linux"},{label:"安装时间",value:"~ 5 分钟"}].map(g=>u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:152:15",className:"text-center p-4 rounded-lg bg-lobster-dark/50 border border-white/5",children:[u.jsx("div",{"code-path":"src\\sections\\CodeDemo.tsx:156:17",className:"text-white/40 text-sm mb-1",children:g.label}),u.jsx("div",{"code-path":"src\\sections\\CodeDemo.tsx:157:17",className:"text-white font-medium",children:g.value})]},g.label))})]})]})})},ub=[{value:278,suffix:"K+",label:"GitHub Stars"},{value:100,suffix:"+",label:"内置技能"},{value:22,suffix:"",label:"消息平台支持"},{value:0,suffix:"",label:"云端依赖"}],db=(a,r=2e3,i=!1)=>{const[o,d]=Q.useState(0);return Q.useEffect(()=>{if(!i)return;let p=null,f;const h=x=>{p||(p=x);const g=Math.min((x-p)/r,1),b=g===1?1:1-Math.pow(2,-10*g);d(Math.floor(b*a)),g<1&&(f=requestAnimationFrame(h))};return f=requestAnimationFrame(h),()=>cancelAnimationFrame(f)},[a,r,i]),o},pb=({stat:a,isVisible:r,delay:i})=>{const o=db(a.value,2e3,r);return u.jsxs("div",{"code-path":"src\\sections\\Stats.tsx:51:5",className:`text-center transition-all duration-800 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:`${i}ms`},children:[u.jsxs("div",{"code-path":"src\\sections\\Stats.tsx:57:7",className:"text-5xl md:text-6xl font-bold text-black mb-2",children:[o,u.jsx("span",{"code-path":"src\\sections\\Stats.tsx:59:9",className:"text-lobster-orange",children:a.suffix})]}),u.jsx("div",{"code-path":"src\\sections\\Stats.tsx:61:7",className:"text-black/60 font-medium",children:a.label})]})},fb=()=>{const[a,r]=Q.useState(!1),i=Q.useRef(null);return Q.useEffect(()=>{const o=new IntersectionObserver(([d])=>{d.isIntersecting&&r(!0)},{threshold:.3});return i.current&&o.observe(i.current),()=>o.disconnect()},[]),u.jsx("section",{"code-path":"src\\sections\\Stats.tsx:88:5",ref:i,className:"py-20 bg-gradient-lobster",children:u.jsx("div",{"code-path":"src\\sections\\Stats.tsx:89:7",className:"container-custom",children:u.jsx("div",{"code-path":"src\\sections\\Stats.tsx:90:9",className:"grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12",children:ub.map((o,d)=>u.jsx(pb,{"code-path":"src\\sections\\Stats.tsx:92:13",stat:o,isVisible:a,delay:d*100},o.label))})})})},mb=()=>{const a=new Date().getFullYear(),r={navigation:[{label:"首页",href:"#hero"},{label:"特性",href:"#features"},{label:"教程",href:"/tutorial"},{label:"工作室",href:"/workspace"},{label:"日记",href:"/diary"},{label:"技能",href:"/skill"},{label:"技术分析",href:"/tech-eden"}],resources:[{label:"官方文档",href:"https://docs.openclaw.ai",external:!0},{label:"GitHub",href:"https://github.com/openclaw/openclaw",external:!0},{label:"社区论坛",href:"#",external:!0},{label:"Discord",href:"#",external:!0}]};return u.jsx("footer",{"code-path":"src\\sections\\Footer.tsx:25:5",className:"bg-lobster-darker border-t border-white/10",children:u.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:26:7",className:"container-custom py-16",children:[u.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:27:9",className:"grid grid-cols-1 md:grid-cols-4 gap-12",children:[u.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:29:11",className:"md:col-span-2",children:[u.jsxs("a",{"code-path":"src\\sections\\Footer.tsx:30:13",href:"/",className:"flex items-center gap-2 mb-4",children:[u.jsx("span",{"code-path":"src\\sections\\Footer.tsx:31:15",className:"text-3xl",children:"🦞"}),u.jsx("span",{"code-path":"src\\sections\\Footer.tsx:32:15",className:"text-xl font-semibold text-white",children:"小泥巴的进化历程"})]}),u.jsx("p",{"code-path":"src\\sections\\Footer.tsx:36:13",className:"text-white/50 max-w-sm mb-6 leading-relaxed",children:"记录 Openclaw 搭建和体验之旅，分享个人 AI 助手的架构设计、安装教程与实战经验。"}),u.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:39:13",className:"flex items-center gap-4",children:[u.jsx("a",{"code-path":"src\\sections\\Footer.tsx:40:15",href:"https://github.com/openclaw/openclaw",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all",children:u.jsx(Ar,{"code-path":"src\\sections\\Footer.tsx:46:17",className:"w-5 h-5"})}),u.jsx("a",{"code-path":"src\\sections\\Footer.tsx:48:15",href:"https://x.com/ttttstc2025",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all",children:u.jsx(Q1,{"code-path":"src\\sections\\Footer.tsx:54:17",className:"w-5 h-5"})})]})]}),u.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:60:11",children:[u.jsx("h4",{"code-path":"src\\sections\\Footer.tsx:61:13",className:"text-white font-medium mb-4",children:"导航"}),u.jsx("ul",{"code-path":"src\\sections\\Footer.tsx:62:13",className:"space-y-3",children:r.navigation.map(i=>u.jsx("li",{"code-path":"src\\sections\\Footer.tsx:64:17",children:u.jsx("a",{"code-path":"src\\sections\\Footer.tsx:65:19",href:i.href,className:"text-white/50 hover:text-lobster-orange transition-colors",children:i.label})},i.label))})]}),u.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:77:11",children:[u.jsx("h4",{"code-path":"src\\sections\\Footer.tsx:78:13",className:"text-white font-medium mb-4",children:"资源"}),u.jsx("ul",{"code-path":"src\\sections\\Footer.tsx:79:13",className:"space-y-3",children:r.resources.map(i=>u.jsx("li",{"code-path":"src\\sections\\Footer.tsx:81:17",children:u.jsx("a",{"code-path":"src\\sections\\Footer.tsx:82:19",href:i.href,target:i.external?"_blank":void 0,rel:i.external?"noopener noreferrer":void 0,className:"text-white/50 hover:text-lobster-orange transition-colors",children:i.label})},i.label))})]})]}),u.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:97:9",className:"mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4",children:[u.jsxs("p",{"code-path":"src\\sections\\Footer.tsx:98:11",className:"text-white/40 text-sm flex items-center gap-1",children:["© ",a," 小泥巴的进化历程. Built with"," ",u.jsx(T1,{"code-path":"src\\sections\\Footer.tsx:100:13",className:"w-4 h-4 text-red-500 fill-red-500"})," and 🦞"]}),u.jsx("p",{"code-path":"src\\sections\\Footer.tsx:102:11",className:"text-white/30 text-sm",children:"Powered by Openclaw · Inspired by Perplexity"})]})]})})},gs=[{name:"tavily-search",description:"AI 优化的网络搜索，通过 Tavily API 返回简洁相关的结果",category:"搜索与研究",downloads:"117k",url:"https://clawhub.ai/arun-8687/tavily-search",author:"@arun-8687"},{name:"find-skills",description:"帮助用户发现和安装智能体技能，当用户询问如何做某事时使用",category:"搜索与研究",downloads:"114k",url:"https://clawhub.ai/JimLiuxinghai/find-skills",author:"@JimLiuxinghai"},{name:"summarize",description:"使用 summarize CLI 总结 URL、PDF、图片、音频、YouTube 内容",category:"搜索与研究",downloads:"91.9k",url:"https://clawhub.ai/steipete/summarize",author:"@steipete"},{name:"brave-search",description:"通过 Brave Search API 进行网络搜索和内容提取",category:"搜索与研究",downloads:"31.3k",url:"https://clawhub.ai/steipete/brave-search",author:"@steipete"},{name:"baidu-search",description:"使用百度 AI 搜索引擎搜索网络内容",category:"搜索与研究",downloads:"25.9k",url:"https://clawhub.ai/ide-rea/baidu-search",author:"@ide-rea"},{name:"web-search-exa",description:"使用 Exa 进行实时网络搜索，返回相关来源和摘要",category:"搜索与研究",downloads:"17.1k",url:"https://clawhub.ai/theishangoswami/web-search-exa",author:"@theishangoswami"},{name:"multi-search-engine",description:"多搜索引擎集成，支持 17 个搜索引擎（8 个中国+9 个全球）",category:"搜索与研究",downloads:"22.4k",url:"https://clawhub.ai/gpyAngyoujun/multi-search-engine",author:"@gpyAngyoujun"},{name:"web-search",description:"使用 DuckDuckGo 搜索 API 搜索网络信息、新闻、图片和视频",category:"搜索与研究",downloads:"15.3k",url:"https://clawhub.ai/billyutw/web-search",author:"@billyutw"},{name:"duckduckgo-search",description:"使用 DuckDuckGo 获取实时信息、文档和教程",category:"搜索与研究",downloads:"15.1k",url:"https://clawhub.ai/10e9928a/duckduckgo-search",author:"@10e9928a"},{name:"deep-research-pro",description:"多源深度研究智能体，搜索网络并生成带引用的报告",category:"搜索与研究",downloads:"12.5k",url:"https://clawhub.ai/parags/deep-research-pro",author:"@parags"},{name:"web-search-plus",description:"具有智能自动路由功能的统一搜索技能",category:"搜索与研究",downloads:"12.1k",url:"https://clawhub.ai/robbyczgw-cla/web-search-plus",author:"@robbyczgw-cla"},{name:"answer-overflow",description:"搜索 Discord 社区讨论，找到编码问题和库问题的解决方案",category:"搜索与研究",downloads:"10k",url:"https://clawhub.ai/RhysSullivan/answeroverflow",author:"@RhysSullivan"},{name:"agent-browser",description:"Rust 编写的无头浏览器自动化 CLI，支持导航、点击、截图",category:"浏览器自动化",downloads:"80.5k",url:"https://clawhub.ai/TheSethRose/agent-browser",author:"@TheSethRose"},{name:"browser-automation",description:"通过自然语言自动执行浏览器交互操作",category:"浏览器自动化",downloads:"16.5k",url:"https://clawhub.ai/peytoncasper/browser-automation",author:"@peytoncasper"},{name:"playwright-mcp",description:"通过 Playwright MCP 服务器进行浏览器自动化",category:"浏览器自动化",downloads:"16.2k",url:"https://clawhub.ai/Spiceman161/playwright-mcp",author:"@Spiceman161"},{name:"browser-use",description:"自动化浏览器交互用于网页测试、表单填写、截图和数据提取",category:"浏览器自动化",downloads:"20.3k",url:"https://clawhub.ai/ShawnPana/browser-use",author:"@ShawnPana"},{name:"playwright-scraper-skill",description:"基于 Playwright 的网页抓取技能，带反机器人保护",category:"浏览器自动化",downloads:"13.4k",url:"https://clawhub.ai/waisimon/playwright-scraper-skill",author:"@waisimon"},{name:"fast-browser-use",description:"高性能浏览器自动化，用于大规模抓取和多标签管理",category:"浏览器自动化",downloads:"10.8k",url:"https://clawhub.ai/rknoche6/fast-browser-use",author:"@rknoche6"},{name:"firecrawl-search",description:"通过 Firecrawl API 进行网络搜索和抓取",category:"浏览器自动化",downloads:"10.7k",url:"https://clawhub.ai/ashwingupy/firecrawl-search",author:"@ashwingupy"},{name:"gog",description:"Google Workspace CLI，支持 Gmail、日历、驱动、联系人、表格和文档",category:"通信与邮件",downloads:"90.6k",url:"https://clawhub.ai/steipete/gog",author:"@steipete"},{name:"gmail",description:"Gmail API 集成，支持读取、发送和管理邮件",category:"通信与邮件",downloads:"21.4k",url:"https://clawhub.ai/byungkyu/gmail",author:"@byungkyu"},{name:"himalaya",description:"通过 IMAP/SMTP 管理邮件的 CLI 工具",category:"通信与邮件",downloads:"23.9k",url:"https://clawhub.ai/lamelas/himalaya",author:"@lamelas"},{name:"imap-smtp-email",description:"通过 IMAP/SMTP 读取和发送邮件",category:"通信与邮件",downloads:"20k",url:"https://clawhub.ai/gzlicanyi/imap-smtp-email",author:"@gzlicanyi"},{name:"outlook-api",description:"Microsoft Outlook API 集成，管理邮件、日历和联系人",category:"通信与邮件",downloads:"18.3k",url:"https://clawhub.ai/byungkyu/outlook-api",author:"@byungkyu"},{name:"agentmail",description:"为 AI 智能体设计的 API 优先邮件平台",category:"通信与邮件",downloads:"14.9k",url:"https://clawhub.ai/adboio/agentmail",author:"@adboio"},{name:"zoho-mail",description:"Zoho Mail API 集成，发送和接收邮件",category:"通信与邮件",downloads:"11.8k",url:"https://clawhub.ai/byungkyu/zoho-mail",author:"@byungkyu"},{name:"discord",description:"通过 discord 工具控制 Discord，发送消息、反应、管理频道",category:"社交媒体",downloads:"16.9k",url:"https://clawhub.ai/steipete/discord",author:"@steipete"},{name:"x-twitter",description:"与 Twitter/X 交互，阅读推文、搜索、发布、点赞和转发",category:"社交媒体",downloads:"14.3k",url:"https://clawhub.ai/annettemekuro30/x-twitter",author:"@annettemekuro30"},{name:"slack",description:"通过 slack 工具控制 Slack，包括消息反应和固定",category:"社交媒体",downloads:"22.8k",url:"https://clawhub.ai/steipete/slack",author:"@steipete"},{name:"xiaohongshu-mcp",description:"自动化小红书内容运营，发布笔记、搜索和分析",category:"社交媒体",downloads:"11.4k",url:"https://clawhub.ai/Borye/xiaohongshu-mcp",author:"@Borye"},{name:"moltbook-interact",description:"与 Moltbook 社交网络交互，发布、回复和浏览",category:"社交媒体",downloads:"14.6k",url:"https://clawhub.ai/LunarCmd/moltbook-interact",author:"@LunarCmd"},{name:"notion",description:"Notion API 创建和管理页面、数据库和块",category:"生产力工具",downloads:"44k",url:"https://clawhub.ai/steipete/notion",author:"@steipete"},{name:"obsidian",description:"与 Obsidian 保险库交互，管理纯 Markdown 笔记",category:"生产力工具",downloads:"38.6k",url:"https://clawhub.ai/steipete/obsidian",author:"@steipete"},{name:"trello",description:"通过 Trello REST API 管理看板、列表和卡片",category:"生产力工具",downloads:"20.2k",url:"https://clawhub.ai/steipete/trello",author:"@steipete"},{name:"clickup-api",description:"ClickUp API 集成，管理任务、列表和项目",category:"生产力工具",downloads:"15.7k",url:"https://clawhub.ai/byungkyu/clickup-api",author:"@byungkyu"},{name:"asana-api",description:"Asana API 集成，管理任务和项目",category:"生产力工具",downloads:"15.3k",url:"https://clawhub.ai/byungkyu/asana-api",author:"@byungkyu"},{name:"todoist",description:"管理 Todoist 中的任务和项目",category:"生产力工具",downloads:"12.9k",url:"https://clawhub.ai/mjrussell/todoist",author:"@mjrussell"},{name:"linear-api",description:"Linear API 集成，使用 GraphQL 查询和管理问题",category:"生产力工具",downloads:"11.8k",url:"https://clawhub.ai/byungkyu/linear-api",author:"@byungkyu"},{name:"monday",description:"Monday.com API 集成，管理看板和项目",category:"生产力工具",downloads:"12.4k",url:"https://clawhub.ai/byungkyu/monday",author:"@byungkyu"},{name:"calendly-api",description:"Calendly API 集成，访问事件类型和预定事件",category:"生产力工具",downloads:"15.7k",url:"https://clawhub.ai/byungkyu/calendly-api",author:"@byungkyu"},{name:"apple-notes",description:"通过 memo CLI 管理 Apple Notes",category:"生产力工具",downloads:"17.1k",url:"https://clawhub.ai/steipete/apple-notes",author:"@steipete"},{name:"apple-reminders",description:"通过 remindctl CLI 管理 Apple 提醒事项",category:"生产力工具",downloads:"14.7k",url:"https://clawhub.ai/steipete/apple-reminders",author:"@steipete"},{name:"caldav-calendar",description:"同步和查询 CalDAV 日历（iCloud、Google、Fastmail 等）",category:"日历与会议",downloads:"17k",url:"https://clawhub.ai/Asleep123/caldav-calendar",author:"@Asleep123"},{name:"google-meet",description:"Google Meet API 集成，创建会议空间和管理参与者",category:"日历与会议",downloads:"15.8k",url:"https://clawhub.ai/byungkyu/google-meet",author:"@byungkyu"},{name:"fathom-api",description:"Fathom API 集成，访问会议录音和转录",category:"日历与会议",downloads:"15.2k",url:"https://clawhub.ai/byungkyu/fathom-api",author:"@byungkyu"},{name:"gcalcli-calendar",description:"通过 gcalcli 访问 Google 日历",category:"日历与会议",downloads:"10.4k",url:"https://clawhub.ai/lstpsche/gcalcli-calendar",author:"@lstpsche"},{name:"zoho-calendar",description:"Zoho Calendar API 集成，管理日历和事件",category:"日历与会议",downloads:"11.4k",url:"https://clawhub.ai/byungkyu/zoho-calendar",author:"@byungkyu"},{name:"api-gateway",description:"连接 100+ API（Google、Microsoft、GitHub、Notion 等），支持托管 OAuth",category:"API 集成",downloads:"35.5k",url:"https://clawhub.ai/byungkyu/api-gateway",author:"@byungkyu"},{name:"youtube-api-skill",description:"YouTube Data API 集成，搜索视频和管理播放列表",category:"API 集成",downloads:"21.3k",url:"https://clawhub.ai/byungkyu/youtube-api-skill",author:"@byungkyu"},{name:"github",description:"使用 gh CLI 与 GitHub 交互，管理 issue、PR 和工作流",category:"API 集成",downloads:"78.1k",url:"https://clawhub.ai/steipete/github",author:"@steipete"},{name:"github-api",description:"GitHub API 集成，托管 OAuth 访问仓库和用户",category:"API 集成",downloads:"12.9k",url:"https://clawhub.ai/byungkyu/github-api",author:"@byungkyu"},{name:"stripe",description:"Stripe API 集成，管理客户、订阅和支付",category:"API 集成",downloads:"17.8k",url:"https://clawhub.ai/byungkyu/stripe-api",author:"@byungkyu"},{name:"salesforce-api",description:"Salesforce CRM API 集成，使用 SOQL 查询记录",category:"API 集成",downloads:"16.4k",url:"https://clawhub.ai/byungkyu/salesforce-api",author:"@byungkyu"},{name:"shopify",description:"Shopify 集成（维护中）",category:"API 集成",downloads:"16.8k",url:"https://clawhub.ai/byungkyu/shopify",author:"@byungkyu"},{name:"zoho-crm",description:"Zoho CRM API 集成，管理潜在客户和联系人",category:"API 集成",downloads:"11.8k",url:"https://clawhub.ai/byungkyu/zoho-crm",author:"@byungkyu"},{name:"stock-analysis",description:"使用 Yahoo Finance 数据分析股票和加密货币",category:"财务与股票",downloads:"23.8k",url:"https://clawhub.ai/udiedrichsen/stock-analysis",author:"@udiedrichsen"},{name:"stock-market-pro",description:"Yahoo Finance 驱动的股票分析技能，带图表和技术指标",category:"财务与股票",downloads:"16.5k",url:"https://clawhub.ai/kys42/stock-market-pro",author:"@kys42"},{name:"yahoo-finance",description:"获取股票价格、报价、财务数据、收益和分析师评级",category:"财务与股票",downloads:"13.1k",url:"https://clawhub.ai/ajanraj/yahoo-finance",author:"@ajanraj"},{name:"nano-pdf",description:"使用自然语言指令编辑 PDF 的 CLI 工具",category:"文档处理",downloads:"42.3k",url:"https://clawhub.ai/steipete/nano-pdf",author:"@steipete"},{name:"markdown-converter",description:"使用 markitdown 将文档转换为 Markdown 格式",category:"文档处理",downloads:"15.5k",url:"https://clawhub.ai/steipete/markdown-convert",author:"@steipete"},{name:"markdown-convert",description:"将网页转换为干净的 Markdown 用于 AI 工作流",category:"文档处理",downloads:"16.5k",url:"https://clawhub.ai/joelchance/markdown-convert",author:"@joelchance"},{name:"google-slides",description:"Google Slides API 集成，创建演示文稿和幻灯片",category:"文档处理",downloads:"16.4k",url:"https://clawhub.ai/byungkyu/google-slides",author:"@byungkyu"},{name:"microsoft-excel",description:"Microsoft Excel API 集成，读取和写入 Excel 工作簿",category:"文档处理",downloads:"13.9k",url:"https://clawhub.ai/byungkyu/microsoft-excel",author:"@byungkyu"},{name:"youtube-watcher",description:"获取和阅读 YouTube 视频转录",category:"媒体与娱乐",downloads:"24.9k",url:"https://clawhub.ai/Michaelgathara/youtube-watcher",author:"@Michaelgathara"},{name:"youtube-transcript",description:"获取和总结 YouTube 视频转录",category:"媒体与娱乐",downloads:"13.2k",url:"https://clawhub.ai/xthezealot/youtube-transcript",author:"@xthezealot"},{name:"openclaw-youtube-transcript",description:"通过提取字幕将 YouTube 视频转录为文本",category:"媒体与娱乐",downloads:"30.2k",url:"https://clawhub.ai/YoavRez/openclaw-youtube-transcript",author:"@YoavRez"},{name:"video-frames",description:"使用 ffmpeg 从视频提取帧或短片段",category:"媒体与娱乐",downloads:"21.2k",url:"https://clawhub.ai/steipete/video-frames",author:"@steipete"},{name:"spotify-player",description:"终端 Spotify 播放和搜索",category:"媒体与娱乐",downloads:"13.8k",url:"https://clawhub.ai/steipete/spotify-player",author:"@steipete"},{name:"remotion-video-toolkit",description:"使用 Remotion + React 进行程序化视频创建的完整工具包",category:"媒体与娱乐",downloads:"10.9k",url:"https://clawhub.ai/shreefentsar/remotion-video-toolkit",author:"@shreefentsar"},{name:"humanizer",description:"移除 AI 生成写作的痕迹，使文本更自然",category:"AI 工具",downloads:"37.5k",url:"https://clawhub.ai/biostartechnology/humanizer",author:"@biostartechnology"},{name:"humanize-ai-text",description:"将 AI 生成的文本人性化以绕过检测",category:"AI 工具",downloads:"26.9k",url:"https://clawhub.ai/moltbro/humanize-ai-text",author:"@moltbro"},{name:"skill-creator",description:"创建有效技能的指南，用于扩展 AI 能力",category:"AI 工具",downloads:"28.1k",url:"https://clawhub.ai/chindden/skill-creator",author:"@chindden"},{name:"skill-vetter",description:"AI 智能体的安全优先技能审核",category:"AI 工具",downloads:"30.3k",url:"https://clawhub.ai/spclaudehome/skill-vetter",author:"@spclaudehome"},{name:"frontend-design",description:"创建生产级前端界面，具有高设计质量",category:"AI 工具",downloads:"24.1k",url:"https://clawhub.ai/steipete/frontend-design",author:"@steipete"},{name:"ui-ux-pro-max",description:"UI/UX 设计和实施指导，构建精美界面",category:"AI 工具",downloads:"12.8k",url:"https://clawhub.ai/xobi667/ui-ux-pro-max",author:"@xobi667"},{name:"superdesign",description:"创建精美现代 UI 的专家前端设计指南",category:"AI 工具",downloads:"15.8k",url:"https://clawhub.ai/mpociot/superdesign",author:"@mpociot"},{name:"openai-image-gen",description:"通过 OpenAI Images API 批量生成图像",category:"AI 工具",downloads:"13.5k",url:"https://clawhub.ai/steipete/openai-image-gen",author:"@steipete"},{name:"nano-banana-pro",description:"使用 Gemini 3 Pro Image 生成/编辑图像",category:"AI 工具",downloads:"37.6k",url:"https://clawhub.ai/steipete/nano-banana-pro",author:"@steipete"},{name:"proactive-agent",description:"将 AI 智能体转变为主动伙伴，预测需求并持续改进",category:"智能体与自动化",downloads:"65.8k",url:"https://clawhub.ai/halthelobster/proactive-agent",author:"@halthelobster"},{name:"self-improving",description:"自我反思+自我批评+自我学习+自我组织，智能体评估和改进自己的工作",category:"智能体与自动化",downloads:"22.3k",url:"https://clawhub.ai/ivangdavila/self-improving",author:"@ivangdavila"},{name:"evolver",description:"AI 智能体的自我进化引擎，分析运行时历史并应用改进",category:"智能体与自动化",downloads:"16.1k",url:"https://clawhub.ai/autogame-17/evolver",author:"@autogame-17"},{name:"capability-evolver",description:"AI 智能体的自我进化引擎，识别改进并应用",category:"智能体与自动化",downloads:"10.9k",url:"https://clawhub.ai/autogame-17/capability-evolver",author:"@autogame-17"},{name:"automation-workflows",description:"设计和实施自动化工作流，节省时间并扩展运营",category:"智能体与自动化",downloads:"26.8k",url:"https://clawhub.ai/JK-0001/automation-workflows",author:"@JK-0001"},{name:"n8n-workflow-automation",description:"设计 n8n 工作流 JSON，带有强大触发器和错误处理",category:"智能体与自动化",downloads:"14.8k",url:"https://clawhub.ai/KOwl64/n8n-workflow-automation",author:"@KOwl64"},{name:"marketing-mode",description:"结合 23 个综合营销技能，涵盖策略、内容、SEO 和付费增长",category:"智能体与自动化",downloads:"15k",url:"https://clawhub.ai/TheSethRose/marketing-mode",author:"@TheSethRose"},{name:"qmd",description:"本地搜索/索引 CLI（BM25 + 向量 + 重新排序），带 MCP 模式",category:"开发者工具",downloads:"17.3k",url:"https://clawhub.ai/steipete/qmd",author:"@steipete"},{name:"git-essentials",description:"基本的 Git 命令和工作流，用于版本控制",category:"开发者工具",downloads:"14.8k",url:"https://clawhub.ai/Arnarsson/git-essentials",author:"@Arnarsson"},{name:"docker-essentials",description:"基本的 Docker 命令和工作流，用于容器管理",category:"开发者工具",downloads:"16.8k",url:"https://clawhub.ai/Arnarsson/docker-essentials",author:"@Arnarsson"},{name:"mcporter",description:"使用 mcporter CLI 配置、认证和调用 MCP 服务器/工具",category:"开发者工具",downloads:"30.3k",url:"https://clawhub.ai/steipete/mcporter",author:"@steipete"},{name:"debug-pro",description:"提供 7 步调试协议，系统地识别和修复软件 bug",category:"开发者工具",downloads:"11.1k",url:"https://clawhub.ai/cmanfre7/debug-pro",author:"@cmanfre7"},{name:"data-analyst",description:"数据可视化、报告生成、SQL 查询和电子表格自动化",category:"开发者工具",downloads:"10.7k",url:"https://clawhub.ai/oyi77/data-analyst",author:"@oyi77"},{name:"sonoscli",description:"控制 Sonos 扬声器（发现/状态/播放/音量/分组）",category:"智能家居",downloads:"50k",url:"https://clawhub.ai/steipete/sonoscli",author:"@steipete"},{name:"home-assistant",description:"控制 Home Assistant 智能家居设备，运行自动化",category:"智能家居",downloads:"10.1k",url:"https://clawhub.ai/iAhmadZain/home-assistant",author:"@iAhmadZain"},{name:"elite-longterm-memory",description:"终极 AI 智能体记忆系统，WAL 协议 + 向量搜索 + 云备份",category:"记忆与知识管理",downloads:"23.2k",url:"https://clawhub.ai/NextFrontierBuilds/elite-longterm-memory",author:"@NextFrontierBuilds"},{name:"memory-setup",description:"启用和配置 Moltbot/Clawdbot 记忆搜索",category:"记忆与知识管理",downloads:"13.2k",url:"https://clawhub.ai/jrbobbyhansen-pixel/memory-setup",author:"@jrbobbyhansen-pixel"},{name:"memory-manager",description:"智能体的本地内存管理，压缩检测和自动快照",category:"记忆与知识管理",downloads:"11.8k",url:"https://clawhub.ai/marmikcfc/memory-manager",author:"@marmikcfc"},{name:"memory-hygiene",description:"审计、清理和优化 Clawdbot 的向量内存",category:"记忆与知识管理",downloads:"10.2k",url:"https://clawhub.ai/dylanbaker24/memory-hygiene",author:"@dylanbaker24"},{name:"byterover",description:"AI 智能体的知识管理，存储和检索项目模式",category:"记忆与知识管理",downloads:"25.4k",url:"https://clawhub.ai/byteroverinc/byterover",author:"@byteroverinc"},{name:"session-logs",description:"使用 jq 搜索和分析会话日志",category:"记忆与知识管理",downloads:"14.6k",url:"https://clawhub.ai/guogang1024/session-logs",author:"@guogang1024"},{name:"weather",description:"获取当前天气和预报（无需 API 密钥）",category:"天气与资讯",downloads:"66.5k",url:"https://clawhub.ai/steipete/weather",author:"@steipete"},{name:"news-summary",description:"获取新闻更新和每日简报，创建语音摘要",category:"天气与资讯",downloads:"17.2k",url:"https://clawhub.ai/joargp/news-summary",author:"@joargp"},{name:"blogwatcher",description:"监控博客和 RSS/Atom 提要的更新",category:"天气与资讯",downloads:"21.3k",url:"https://clawhub.ai/steipete/blogwatcher",author:"@steipete"},{name:"moltguard",description:"OpenClaw 运行时安全插件，防止提示注入和数据泄露",category:"安全与工具",downloads:"13.8k",url:"https://clawhub.ai/ThomasLWang/moltguard",author:"@ThomasLWang"},{name:"1password",description:"设置和使用 1Password CLI (op) 管理密码",category:"安全与工具",downloads:"13.6k",url:"https://clawhub.ai/steipete/1password",author:"@steipete"},{name:"auto-updater",description:"自动更新 Clawdbot 和所有已安装技能",category:"安全与工具",downloads:"31k",url:"https://clawhub.ai/maximeprades/auto-updater",author:"@maximeprades"},{name:"gemini",description:"Gemini CLI 用于一次性问答、总结和生成",category:"其他工具",downloads:"18.9k",url:"https://clawhub.ai/steipete/gemini",author:"@steipete"},{name:"model-usage",description:"使用 CodexBar CLI 本地成本用法汇总每个模型的用量",category:"其他工具",downloads:"20.9k",url:"https://clawhub.ai/steipete/model-usage",author:"@steipete"},{name:"goplaces",description:"通过 goplaces CLI 查询 Google Places API",category:"其他工具",downloads:"12.8k",url:"https://clawhub.ai/steipete/goplaces",author:"@steipete"},{name:"tmux",description:"远程控制 tmux 会话，发送按键和抓取输出",category:"其他工具",downloads:"14k",url:"https://clawhub.ai/steipete/tmux",author:"@steipete"},{name:"sag",description:"ElevenLabs 文本转语音，mac 风格 say UX",category:"其他工具",downloads:"14.8k",url:"https://clawhub.ai/steipete/sag",author:"@steipete"},{name:"peekaboo",description:"使用 Peekaboo CLI 捕获和自动化 macOS UI",category:"其他工具",downloads:"14.8k",url:"https://clawhub.ai/steipete/peekaboo",author:"@steipete"},{name:"desktop-control",description:"使用鼠标、键盘和屏幕控制的高级桌面自动化",category:"其他工具",downloads:"20k",url:"https://clawhub.ai/matagul/desktop-control",author:"@matagul"},{name:"openai-whisper",description:"本地语音转文本，使用 Whisper CLI（无需 API 密钥）",category:"其他工具",downloads:"34.9k",url:"https://clawhub.ai/steipete/openai-whisper",author:"@steipete"},{name:"free-ride",description:"管理来自 OpenRouter 的免费 AI 模型，自动排名和配置回退",category:"其他工具",downloads:"29.4k",url:"https://clawhub.ai/Shaivpidadi/free-ride",author:"@Shaivpidadi"}],Rm=["搜索与研究","浏览器自动化","通信与邮件","社交媒体","生产力工具","日历与会议","API 集成","财务与股票","文档处理","媒体与娱乐","AI 工具","智能体与自动化","开发者工具","智能家居","记忆与知识管理","天气与资讯","安全与工具","其他工具"],hb=()=>{const[a,r]=Q.useState(null),[i,o]=Q.useState(""),[d,p]=Q.useState(null),f=Q.useMemo(()=>{let x=gs;if(a&&(x=x.filter(g=>g.category===a)),i.trim()){const g=i.toLowerCase();x=x.filter(b=>b.name.toLowerCase().includes(g)||b.description.toLowerCase().includes(g)||b.category.toLowerCase().includes(g))}return x},[a,i]),h=x=>{const g=`/install ${x}`;navigator.clipboard.writeText(g),p(x),setTimeout(()=>p(null),2e3)};return u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:38:5",className:"min-h-screen bg-lobster-dark text-white pt-24 pb-16",children:u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:39:7",className:"container-custom",children:[u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:41:9",className:"text-center mb-16",children:[u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:42:11",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm mb-6",children:[u.jsx(Rn,{"code-path":"src\\sections\\SkillsPage.tsx:43:13",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\SkillsPage.tsx:44:13",children:"ClawHub Top 100 技能集"})]}),u.jsxs("h1",{"code-path":"src\\sections\\SkillsPage.tsx:46:11",className:"text-4xl md:text-5xl font-bold mb-4",children:["全球最热门 ",u.jsx("span",{"code-path":"src\\sections\\SkillsPage.tsx:47:19",className:"text-lobster-orange",children:"AI 技能库"})]}),u.jsx("p",{"code-path":"src\\sections\\SkillsPage.tsx:49:11",className:"text-white/60 text-lg max-w-2xl mx-auto",children:"汇集 ClawHub 下载量最高的 100+ 个技能，涵盖搜索、自动化、API集成、媒体处理等"})]}),u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:55:9",className:"max-w-xl mx-auto mb-8",children:u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:56:11",className:"relative",children:[u.jsx(Nh,{"code-path":"src\\sections\\SkillsPage.tsx:57:13",className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40"}),u.jsx("input",{"code-path":"src\\sections\\SkillsPage.tsx:58:13",type:"text",placeholder:"搜索技能名称、描述或分类...",value:i,onChange:x=>o(x.target.value),className:"w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-lobster-orange transition-colors"})]})}),u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:69:9",className:"flex flex-wrap justify-center gap-3 mb-12",children:[u.jsxs("button",{"code-path":"src\\sections\\SkillsPage.tsx:70:11",onClick:()=>r(null),className:`px-4 py-2 rounded-full text-sm transition-all ${a===null?"bg-lobster-orange text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:["全部 (",gs.length,")"]}),Rm.map(x=>u.jsxs("button",{"code-path":"src\\sections\\SkillsPage.tsx:81:13",onClick:()=>r(x),className:`px-4 py-2 rounded-full text-sm transition-all ${a===x?"bg-lobster-orange text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:[x," (",gs.filter(g=>g.category===x).length,")"]},x))]}),i&&u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:97:11",className:"text-center mb-6 text-white/60",children:["找到 ",f.length,' 个匹配 "',i,'" 的技能']}),u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:103:9",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:f.map(x=>u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:105:13",className:"group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-lobster-orange/50 transition-all hover:transform hover:-translate-y-1",children:[u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:109:15",className:"flex items-start justify-between mb-4",children:[u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:110:17",className:"w-12 h-12 rounded-xl bg-gradient-to-br from-lobster-orange/30 to-purple-500/30 flex items-center justify-center",children:u.jsx(Rn,{"code-path":"src\\sections\\SkillsPage.tsx:111:19",className:"w-6 h-6 text-lobster-orange"})}),u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:113:17",className:"flex flex-col items-end gap-1",children:[u.jsx("span",{"code-path":"src\\sections\\SkillsPage.tsx:114:19",className:"text-xs px-3 py-1 rounded-full bg-white/10 text-white/60",children:x.category}),x.downloads&&u.jsxs("span",{"code-path":"src\\sections\\SkillsPage.tsx:118:21",className:"text-xs flex items-center gap-1 text-lobster-orange",children:[u.jsx(g1,{"code-path":"src\\sections\\SkillsPage.tsx:119:23",className:"w-3 h-3"}),x.downloads]})]})]}),u.jsx("h3",{"code-path":"src\\sections\\SkillsPage.tsx:126:15",className:"text-lg font-semibold mb-2 group-hover:text-lobster-orange transition-colors",children:x.name.split("-").map(g=>g.charAt(0).toUpperCase()+g.slice(1)).join(" ")}),u.jsx("p",{"code-path":"src\\sections\\SkillsPage.tsx:132:15",className:"text-white/60 text-sm leading-relaxed mb-3",children:x.description}),x.author&&u.jsxs("p",{"code-path":"src\\sections\\SkillsPage.tsx:137:17",className:"text-white/40 text-xs mb-3",children:["by ",x.author]}),u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:142:15",className:"mt-auto flex items-center justify-between gap-3",children:[u.jsxs("a",{"code-path":"src\\sections\\SkillsPage.tsx:143:17",href:x.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-lobster-orange text-sm hover:underline",children:[u.jsx("span",{"code-path":"src\\sections\\SkillsPage.tsx:149:19",children:"查看详情"}),u.jsx(Er,{"code-path":"src\\sections\\SkillsPage.tsx:150:19",className:"w-3 h-3 ml-1"})]}),u.jsx("button",{"code-path":"src\\sections\\SkillsPage.tsx:152:17",onClick:()=>h(x.name),className:`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs transition-all ${d===x.name?"bg-green-500/20 text-green-400":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:d===x.name?u.jsxs(u.Fragment,{children:[u.jsx(ou,{"code-path":"src\\sections\\SkillsPage.tsx:162:23",className:"w-3 h-3"}),u.jsx("span",{"code-path":"src\\sections\\SkillsPage.tsx:163:23",children:"已复制"})]}):u.jsxs(u.Fragment,{children:[u.jsx(ii,{"code-path":"src\\sections\\SkillsPage.tsx:167:23",className:"w-3 h-3"}),u.jsx("span",{"code-path":"src\\sections\\SkillsPage.tsx:168:23",children:"安装命令"})]})})]})]},x.name))}),u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:178:9",className:"mt-16 grid grid-cols-2 md:grid-cols-4 gap-6",children:[u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:179:11",className:"bg-white/5 rounded-2xl p-6 text-center",children:[u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:180:13",className:"text-3xl font-bold text-lobster-orange mb-2",children:[gs.length,"+"]}),u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:183:13",className:"text-white/60 text-sm",children:"技能总数"})]}),u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:185:11",className:"bg-white/5 rounded-2xl p-6 text-center",children:[u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:186:13",className:"text-3xl font-bold text-lobster-orange mb-2",children:Rm.length}),u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:189:13",className:"text-white/60 text-sm",children:"分类数量"})]}),u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:191:11",className:"bg-white/5 rounded-2xl p-6 text-center",children:[u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:192:13",className:"text-3xl font-bold text-lobster-orange mb-2",children:gs.filter(x=>x.category==="搜索与研究").length}),u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:195:13",className:"text-white/60 text-sm",children:"搜索技能"})]}),u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:197:11",className:"bg-white/5 rounded-2xl p-6 text-center",children:[u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:198:13",className:"text-3xl font-bold text-lobster-orange mb-2",children:gs.filter(x=>x.category==="浏览器自动化").length}),u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:201:13",className:"text-white/60 text-sm",children:"自动化技能"})]})]}),u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:206:9",className:"mt-12 text-center",children:u.jsxs("p",{"code-path":"src\\sections\\SkillsPage.tsx:207:11",className:"text-white/40 text-sm",children:["数据来源: ",u.jsx("a",{"code-path":"src\\sections\\SkillsPage.tsx:208:19",href:"https://clawhub.ai/skills?sort=downloads",target:"_blank",rel:"noopener noreferrer",className:"text-lobster-orange hover:underline",children:"ClawHub"})," - 按下载量排序的 Top 100 技能"]})})]})})},Pm=[{id:"01-basics-01-introduction",title:"第一章：认识OpenClaw",category:"基础入门"},{id:"01-basics-02-installation",title:"第二章：安装部署",category:"基础入门"},{id:"01-basics-03-quick-start",title:"第三章：快速开始",category:"基础入门"},{id:"02-core-04-file-management",title:"第四章：文件管理",category:"核心功能"},{id:"02-core-05-knowledge-management",title:"第五章：知识管理",category:"核心功能"},{id:"02-core-06-schedule-management",title:"第六章：日程管理",category:"核心功能"},{id:"02-core-07-automation-workflow",title:"第七章：自动化工作流",category:"核心功能"},{id:"03-advanced-08-skills-extension",title:"第八章：Skills扩展",category:"进阶拓展"},{id:"03-advanced-09-multi-platform-integration",title:"第九章：多平台接入",category:"进阶拓展"},{id:"03-advanced-10-api-integration",title:"第十章：API集成",category:"进阶拓展"},{id:"03-advanced-11-advanced-configuration",title:"第十一章：高级配置",category:"进阶拓展"},{id:"04-cases-12-personal-productivity",title:"第十二章：个人效率提升",category:"实战案例"},{id:"04-cases-13-advanced-automation",title:"第十三章：进阶自动化",category:"实战案例"},{id:"04-cases-14-creative-applications",title:"第十四章：创意应用",category:"实战案例"},{id:"04-cases-15-solo-entrepreneur-cases",title:"第十五章：一人企业案例",category:"实战案例"},{id:"api-key-config-guide",title:"附录1：API密钥配置指南",category:"附录"},{id:"config-file-structure",title:"附录2：配置文件结构",category:"附录"},{id:"search-guide",title:"附录3：搜索指南",category:"附录"},{id:"skills-ecosystem",title:"附录4：Skills生态系统",category:"附录"}],gb=["基础入门","核心功能","进阶拓展","实战案例","附录"],xb=()=>{const[a,r]=Q.useState(Pm[0]),[i,o]=Q.useState(!1);Q.useEffect(()=>{o(!0)},[]);const d=p=>`/source/tutorial/awesome/${p}.html`;return u.jsxs("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:46:5",className:"min-h-screen bg-lobster-dark text-white",children:[u.jsx("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:48:7",className:"pt-24 pb-6 border-b border-white/10",children:u.jsx("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:49:9",className:"container-custom",children:u.jsxs("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:50:11",className:"flex items-center justify-between",children:[u.jsxs("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:51:13",className:"flex items-center gap-4",children:[u.jsxs("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:52:15",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm",children:[u.jsx(Rn,{"code-path":"src\\sections\\TutorialInstallPage.tsx:53:17",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\TutorialInstallPage.tsx:54:17",children:"教程中心"})]}),u.jsxs("h1",{"code-path":"src\\sections\\TutorialInstallPage.tsx:56:15",className:"text-2xl md:text-3xl font-bold",children:["OpenClaw ",u.jsx("span",{"code-path":"src\\sections\\TutorialInstallPage.tsx:57:26",className:"text-lobster-orange",children:"完整教程"})]})]}),u.jsxs("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:60:13",className:"flex items-center gap-2 text-white/60 text-sm",children:[u.jsx(iu,{"code-path":"src\\sections\\TutorialInstallPage.tsx:61:15",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\TutorialInstallPage.tsx:62:15",children:"19篇教程 · 从入门到精通"})]})]})})}),u.jsx("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:69:7",className:"container-custom py-6",children:u.jsxs("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:70:9",className:"flex gap-6",style:{height:"calc(100vh - 220px)",minHeight:"600px"},children:[u.jsxs("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:72:11",className:"w-80 flex-shrink-0 bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex flex-col",style:{opacity:i?1:0,transform:i?"translateX(0)":"translateX(-20px)",transition:"all 0.5s ease"},children:[u.jsx("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:80:13",className:"p-4 border-b border-white/10",children:u.jsx("h3",{"code-path":"src\\sections\\TutorialInstallPage.tsx:81:15",className:"font-semibold text-white",children:"教程目录"})}),u.jsx("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:83:13",className:"flex-1 overflow-y-auto p-2",children:gb.map(p=>u.jsxs("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:85:17",className:"mb-4",children:[u.jsx("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:86:19",className:"px-3 py-2 text-xs font-semibold text-white/50 uppercase tracking-wider",children:p}),Pm.filter(f=>f.category===p).map((f,h)=>u.jsxs("button",{"code-path":"src\\sections\\TutorialInstallPage.tsx:92:23",onClick:()=>r(f),className:`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${a.id===f.id?"bg-lobster-orange/20 text-lobster-orange border-l-2 border-lobster-orange":"text-white/70 hover:bg-white/5 hover:text-white"}`,style:{transitionDelay:`${h*50}ms`,opacity:i?1:0,transform:i?"translateX(0)":"translateX(-10px)"},children:[u.jsx(cu,{"code-path":"src\\sections\\TutorialInstallPage.tsx:106:25",className:`w-3 h-3 flex-shrink-0 ${a.id===f.id?"text-lobster-orange":"text-white/30"}`}),u.jsx("span",{"code-path":"src\\sections\\TutorialInstallPage.tsx:107:25",className:"truncate",children:f.title})]},f.id))]},p))})]}),u.jsx("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:116:11",className:"flex-1 bg-white/5 rounded-2xl border border-white/10 overflow-hidden",style:{opacity:i?1:0,transform:i?"translateX(0)":"translateX(20px)",transition:"all 0.5s ease 0.2s"},children:u.jsx("iframe",{"code-path":"src\\sections\\TutorialInstallPage.tsx:124:13",src:d(a.id),title:a.title,className:"w-full h-full border-0",allow:"accelerometer; ambient-light-sensor; autoplay; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-shift; magnetometer; microphone; midi; otp-autocomplete; payment; picture-in-picture; private-network-connection; sync-xhr; usb; vr; wake-lock; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"})})]})})]})};function yb(a,r){const i={};return(a[a.length-1]===""?[...a,""]:a).join((i.padRight?" ":"")+","+(i.padLeft===!1?"":" ")).trim()}const bb=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,_b=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,kb={};function zm(a,r){return(kb.jsx?_b:bb).test(a)}const wb=/[ \t\n\f\r]/g;function vb(a){return typeof a=="object"?a.type==="text"?qm(a.value):!1:qm(a)}function qm(a){return a.replace(wb,"")===""}class Lr{constructor(r,i,o){this.normal=i,this.property=r,o&&(this.space=o)}}Lr.prototype.normal={};Lr.prototype.property={};Lr.prototype.space=void 0;function Dh(a,r){const i={},o={};for(const d of a)Object.assign(i,d.property),Object.assign(o,d.normal);return new Lr(i,o,r)}function Zc(a){return a.toLowerCase()}class Mt{constructor(r,i){this.attribute=i,this.property=r}}Mt.prototype.attribute="";Mt.prototype.booleanish=!1;Mt.prototype.boolean=!1;Mt.prototype.commaOrSpaceSeparated=!1;Mt.prototype.commaSeparated=!1;Mt.prototype.defined=!1;Mt.prototype.mustUseProperty=!1;Mt.prototype.number=!1;Mt.prototype.overloadedBoolean=!1;Mt.prototype.property="";Mt.prototype.spaceSeparated=!1;Mt.prototype.space=void 0;let Sb=0;const we=Ea(),it=Ea(),Wc=Ea(),X=Ea(),Xe=Ea(),_s=Ea(),It=Ea();function Ea(){return 2**++Sb}const Jc=Object.freeze(Object.defineProperty({__proto__:null,boolean:we,booleanish:it,commaOrSpaceSeparated:It,commaSeparated:_s,number:X,overloadedBoolean:Wc,spaceSeparated:Xe},Symbol.toStringTag,{value:"Module"})),Rc=Object.keys(Jc);class du extends Mt{constructor(r,i,o,d){let p=-1;if(super(r,i),Bm(this,"space",d),typeof o=="number")for(;++p<Rc.length;){const f=Rc[p];Bm(this,Rc[p],(o&Jc[f])===Jc[f])}}}du.prototype.defined=!0;function Bm(a,r,i){i&&(a[r]=i)}function vs(a){const r={},i={};for(const[o,d]of Object.entries(a.properties)){const p=new du(o,a.transform(a.attributes||{},o),d,a.space);a.mustUseProperty&&a.mustUseProperty.includes(o)&&(p.mustUseProperty=!0),r[o]=p,i[Zc(o)]=o,i[Zc(p.attribute)]=o}return new Lr(r,i,a.space)}const Rh=vs({properties:{ariaActiveDescendant:null,ariaAtomic:it,ariaAutoComplete:null,ariaBusy:it,ariaChecked:it,ariaColCount:X,ariaColIndex:X,ariaColSpan:X,ariaControls:Xe,ariaCurrent:null,ariaDescribedBy:Xe,ariaDetails:null,ariaDisabled:it,ariaDropEffect:Xe,ariaErrorMessage:null,ariaExpanded:it,ariaFlowTo:Xe,ariaGrabbed:it,ariaHasPopup:null,ariaHidden:it,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Xe,ariaLevel:X,ariaLive:null,ariaModal:it,ariaMultiLine:it,ariaMultiSelectable:it,ariaOrientation:null,ariaOwns:Xe,ariaPlaceholder:null,ariaPosInSet:X,ariaPressed:it,ariaReadOnly:it,ariaRelevant:null,ariaRequired:it,ariaRoleDescription:Xe,ariaRowCount:X,ariaRowIndex:X,ariaRowSpan:X,ariaSelected:it,ariaSetSize:X,ariaSort:null,ariaValueMax:X,ariaValueMin:X,ariaValueNow:X,ariaValueText:null,role:null},transform(a,r){return r==="role"?r:"aria-"+r.slice(4).toLowerCase()}});function Ph(a,r){return r in a?a[r]:r}function zh(a,r){return Ph(a,r.toLowerCase())}const Tb=vs({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:_s,acceptCharset:Xe,accessKey:Xe,action:null,allow:null,allowFullScreen:we,allowPaymentRequest:we,allowUserMedia:we,alt:null,as:null,async:we,autoCapitalize:null,autoComplete:Xe,autoFocus:we,autoPlay:we,blocking:Xe,capture:null,charSet:null,checked:we,cite:null,className:Xe,cols:X,colSpan:null,content:null,contentEditable:it,controls:we,controlsList:Xe,coords:X|_s,crossOrigin:null,data:null,dateTime:null,decoding:null,default:we,defer:we,dir:null,dirName:null,disabled:we,download:Wc,draggable:it,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:we,formTarget:null,headers:Xe,height:X,hidden:Wc,high:X,href:null,hrefLang:null,htmlFor:Xe,httpEquiv:Xe,id:null,imageSizes:null,imageSrcSet:null,inert:we,inputMode:null,integrity:null,is:null,isMap:we,itemId:null,itemProp:Xe,itemRef:Xe,itemScope:we,itemType:Xe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:we,low:X,manifest:null,max:null,maxLength:X,media:null,method:null,min:null,minLength:X,multiple:we,muted:we,name:null,nonce:null,noModule:we,noValidate:we,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:we,optimum:X,pattern:null,ping:Xe,placeholder:null,playsInline:we,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:we,referrerPolicy:null,rel:Xe,required:we,reversed:we,rows:X,rowSpan:X,sandbox:Xe,scope:null,scoped:we,seamless:we,selected:we,shadowRootClonable:we,shadowRootDelegatesFocus:we,shadowRootMode:null,shape:null,size:X,sizes:null,slot:null,span:X,spellCheck:it,src:null,srcDoc:null,srcLang:null,srcSet:null,start:X,step:null,style:null,tabIndex:X,target:null,title:null,translate:null,type:null,typeMustMatch:we,useMap:null,value:it,width:X,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Xe,axis:null,background:null,bgColor:null,border:X,borderColor:null,bottomMargin:X,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:we,declare:we,event:null,face:null,frame:null,frameBorder:null,hSpace:X,leftMargin:X,link:null,longDesc:null,lowSrc:null,marginHeight:X,marginWidth:X,noResize:we,noHref:we,noShade:we,noWrap:we,object:null,profile:null,prompt:null,rev:null,rightMargin:X,rules:null,scheme:null,scrolling:it,standby:null,summary:null,text:null,topMargin:X,valueType:null,version:null,vAlign:null,vLink:null,vSpace:X,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:we,disableRemotePlayback:we,prefix:null,property:null,results:X,security:null,unselectable:null},space:"html",transform:zh}),Cb=vs({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:It,accentHeight:X,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:X,amplitude:X,arabicForm:null,ascent:X,attributeName:null,attributeType:null,azimuth:X,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:X,by:null,calcMode:null,capHeight:X,className:Xe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:X,diffuseConstant:X,direction:null,display:null,dur:null,divisor:X,dominantBaseline:null,download:we,dx:null,dy:null,edgeMode:null,editable:null,elevation:X,enableBackground:null,end:null,event:null,exponent:X,externalResourcesRequired:null,fill:null,fillOpacity:X,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:_s,g2:_s,glyphName:_s,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:X,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:X,horizOriginX:X,horizOriginY:X,id:null,ideographic:X,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:X,k:X,k1:X,k2:X,k3:X,k4:X,kernelMatrix:It,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:X,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:X,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:X,overlineThickness:X,paintOrder:null,panose1:null,path:null,pathLength:X,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Xe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:X,pointsAtY:X,pointsAtZ:X,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:It,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:It,rev:It,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:It,requiredFeatures:It,requiredFonts:It,requiredFormats:It,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:X,specularExponent:X,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:X,strikethroughThickness:X,string:null,stroke:null,strokeDashArray:It,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:X,strokeOpacity:X,strokeWidth:null,style:null,surfaceScale:X,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:It,tabIndex:X,tableValues:null,target:null,targetX:X,targetY:X,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:It,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:X,underlineThickness:X,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:X,values:null,vAlphabetic:X,vMathematical:X,vectorEffect:null,vHanging:X,vIdeographic:X,version:null,vertAdvY:X,vertOriginX:X,vertOriginY:X,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:X,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Ph}),qh=vs({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(a,r){return"xlink:"+r.slice(5).toLowerCase()}}),Bh=vs({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:zh}),Uh=vs({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(a,r){return"xml:"+r.slice(3).toLowerCase()}}),Eb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Ab=/[A-Z]/g,Um=/-[a-z]/g,jb=/^data[-\w.:]+$/i;function Nb(a,r){const i=Zc(r);let o=r,d=Mt;if(i in a.normal)return a.property[a.normal[i]];if(i.length>4&&i.slice(0,4)==="data"&&jb.test(r)){if(r.charAt(4)==="-"){const p=r.slice(5).replace(Um,Ob);o="data"+p.charAt(0).toUpperCase()+p.slice(1)}else{const p=r.slice(4);if(!Um.test(p)){let f=p.replace(Ab,Lb);f.charAt(0)!=="-"&&(f="-"+f),r="data"+f}}d=du}return new d(o,r)}function Lb(a){return"-"+a.toLowerCase()}function Ob(a){return a.charAt(1).toUpperCase()}const Mb=Dh([Rh,Tb,qh,Bh,Uh],"html"),pu=Dh([Rh,Cb,qh,Bh,Uh],"svg");function Db(a){return a.join(" ").trim()}var xs={},Pc,Hm;function Rb(){if(Hm)return Pc;Hm=1;var a=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,d=/^:\s*/,p=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,f=/^[;\s]*/,h=/^\s+|\s+$/g,x=`
`,g="/",b="*",_="",T="comment",w="declaration";function G(F,M){if(typeof F!="string")throw new TypeError("First argument must be a string");if(!F)return[];M=M||{};var ee=1,H=1;function le(J){var Y=J.match(r);Y&&(ee+=Y.length);var L=J.lastIndexOf(x);H=~L?J.length-L:H+J.length}function de(){var J={line:ee,column:H};return function(Y){return Y.position=new P(J),he(),Y}}function P(J){this.start=J,this.end={line:ee,column:H},this.source=M.source}P.prototype.content=F;function $(J){var Y=new Error(M.source+":"+ee+":"+H+": "+J);if(Y.reason=J,Y.filename=M.source,Y.line=ee,Y.column=H,Y.source=F,!M.silent)throw Y}function xe(J){var Y=J.exec(F);if(Y){var L=Y[0];return le(L),F=F.slice(L.length),Y}}function he(){xe(i)}function Se(J){var Y;for(J=J||[];Y=te();)Y!==!1&&J.push(Y);return J}function te(){var J=de();if(!(g!=F.charAt(0)||b!=F.charAt(1))){for(var Y=2;_!=F.charAt(Y)&&(b!=F.charAt(Y)||g!=F.charAt(Y+1));)++Y;if(Y+=2,_===F.charAt(Y-1))return $("End of comment missing");var L=F.slice(2,Y-2);return H+=2,le(L),F=F.slice(Y),H+=2,J({type:T,comment:L})}}function se(){var J=de(),Y=xe(o);if(Y){if(te(),!xe(d))return $("property missing ':'");var L=xe(p),V=J({type:w,property:K(Y[0].replace(a,_)),value:L?K(L[0].replace(a,_)):_});return xe(f),V}}function Z(){var J=[];Se(J);for(var Y;Y=se();)Y!==!1&&(J.push(Y),Se(J));return J}return he(),Z()}function K(F){return F?F.replace(h,_):_}return Pc=G,Pc}var Im;function Pb(){if(Im)return xs;Im=1;var a=xs&&xs.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(xs,"__esModule",{value:!0}),xs.default=i;const r=a(Rb());function i(o,d){let p=null;if(!o||typeof o!="string")return p;const f=(0,r.default)(o),h=typeof d=="function";return f.forEach(x=>{if(x.type!=="declaration")return;const{property:g,value:b}=x;h?d(g,b,x):b&&(p=p||{},p[g]=b)}),p}return xs}var _r={},Ym;function zb(){if(Ym)return _r;Ym=1,Object.defineProperty(_r,"__esModule",{value:!0}),_r.camelCase=void 0;var a=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,i=/^[^-]+$/,o=/^-(webkit|moz|ms|o|khtml)-/,d=/^-(ms)-/,p=function(g){return!g||i.test(g)||a.test(g)},f=function(g,b){return b.toUpperCase()},h=function(g,b){return"".concat(b,"-")},x=function(g,b){return b===void 0&&(b={}),p(g)?g:(g=g.toLowerCase(),b.reactCompat?g=g.replace(d,h):g=g.replace(o,h),g.replace(r,f))};return _r.camelCase=x,_r}var kr,Vm;function qb(){if(Vm)return kr;Vm=1;var a=kr&&kr.__importDefault||function(d){return d&&d.__esModule?d:{default:d}},r=a(Pb()),i=zb();function o(d,p){var f={};return!d||typeof d!="string"||(0,r.default)(d,function(h,x){h&&x&&(f[(0,i.camelCase)(h,p)]=x)}),f}return o.default=o,kr=o,kr}var Bb=qb();const Ub=Th(Bb),Hh=Ih("end"),fu=Ih("start");function Ih(a){return r;function r(i){const o=i&&i.position&&i.position[a]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function Hb(a){const r=fu(a),i=Hh(a);if(r&&i)return{start:r,end:i}}function Sr(a){return!a||typeof a!="object"?"":"position"in a||"type"in a?Gm(a.position):"start"in a||"end"in a?Gm(a):"line"in a||"column"in a?$c(a):""}function $c(a){return Km(a&&a.line)+":"+Km(a&&a.column)}function Gm(a){return $c(a&&a.start)+"-"+$c(a&&a.end)}function Km(a){return a&&typeof a=="number"?a:1}class bt extends Error{constructor(r,i,o){super(),typeof i=="string"&&(o=i,i=void 0);let d="",p={},f=!1;if(i&&("line"in i&&"column"in i?p={place:i}:"start"in i&&"end"in i?p={place:i}:"type"in i?p={ancestors:[i],place:i.position}:p={...i}),typeof r=="string"?d=r:!p.cause&&r&&(f=!0,d=r.message,p.cause=r),!p.ruleId&&!p.source&&typeof o=="string"){const x=o.indexOf(":");x===-1?p.ruleId=o:(p.source=o.slice(0,x),p.ruleId=o.slice(x+1))}if(!p.place&&p.ancestors&&p.ancestors){const x=p.ancestors[p.ancestors.length-1];x&&(p.place=x.position)}const h=p.place&&"start"in p.place?p.place.start:p.place;this.ancestors=p.ancestors||void 0,this.cause=p.cause||void 0,this.column=h?h.column:void 0,this.fatal=void 0,this.file="",this.message=d,this.line=h?h.line:void 0,this.name=Sr(p.place)||"1:1",this.place=p.place||void 0,this.reason=this.message,this.ruleId=p.ruleId||void 0,this.source=p.source||void 0,this.stack=f&&p.cause&&typeof p.cause.stack=="string"?p.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}bt.prototype.file="";bt.prototype.name="";bt.prototype.reason="";bt.prototype.message="";bt.prototype.stack="";bt.prototype.column=void 0;bt.prototype.line=void 0;bt.prototype.ancestors=void 0;bt.prototype.cause=void 0;bt.prototype.fatal=void 0;bt.prototype.place=void 0;bt.prototype.ruleId=void 0;bt.prototype.source=void 0;const mu={}.hasOwnProperty,Ib=new Map,Yb=/[A-Z]/g,Vb=new Set(["table","tbody","thead","tfoot","tr"]),Gb=new Set(["td","th"]),Yh="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Kb(a,r){if(!r||r.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const i=r.filePath||void 0;let o;if(r.development){if(typeof r.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=e0(i,r.jsxDEV)}else{if(typeof r.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof r.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=$b(i,r.jsx,r.jsxs)}const d={Fragment:r.Fragment,ancestors:[],components:r.components||{},create:o,elementAttributeNameCase:r.elementAttributeNameCase||"react",evaluater:r.createEvaluater?r.createEvaluater():void 0,filePath:i,ignoreInvalidStyle:r.ignoreInvalidStyle||!1,passKeys:r.passKeys!==!1,passNode:r.passNode||!1,schema:r.space==="svg"?pu:Mb,stylePropertyNameCase:r.stylePropertyNameCase||"dom",tableCellAlignToStyle:r.tableCellAlignToStyle!==!1},p=Vh(d,a,void 0);return p&&typeof p!="string"?p:d.create(a,d.Fragment,{children:p||void 0},void 0)}function Vh(a,r,i){if(r.type==="element")return Xb(a,r,i);if(r.type==="mdxFlowExpression"||r.type==="mdxTextExpression")return Qb(a,r);if(r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement")return Zb(a,r,i);if(r.type==="mdxjsEsm")return Fb(a,r);if(r.type==="root")return Wb(a,r,i);if(r.type==="text")return Jb(a,r)}function Xb(a,r,i){const o=a.schema;let d=o;r.tagName.toLowerCase()==="svg"&&o.space==="html"&&(d=pu,a.schema=d),a.ancestors.push(r);const p=Kh(a,r.tagName,!1),f=t0(a,r);let h=gu(a,r);return Vb.has(r.tagName)&&(h=h.filter(function(x){return typeof x=="string"?!vb(x):!0})),Gh(a,f,p,r),hu(f,h),a.ancestors.pop(),a.schema=o,a.create(r,p,f,i)}function Qb(a,r){if(r.data&&r.data.estree&&a.evaluater){const o=r.data.estree.body[0];return o.type,a.evaluater.evaluateExpression(o.expression)}Nr(a,r.position)}function Fb(a,r){if(r.data&&r.data.estree&&a.evaluater)return a.evaluater.evaluateProgram(r.data.estree);Nr(a,r.position)}function Zb(a,r,i){const o=a.schema;let d=o;r.name==="svg"&&o.space==="html"&&(d=pu,a.schema=d),a.ancestors.push(r);const p=r.name===null?a.Fragment:Kh(a,r.name,!0),f=n0(a,r),h=gu(a,r);return Gh(a,f,p,r),hu(f,h),a.ancestors.pop(),a.schema=o,a.create(r,p,f,i)}function Wb(a,r,i){const o={};return hu(o,gu(a,r)),a.create(r,a.Fragment,o,i)}function Jb(a,r){return r.value}function Gh(a,r,i,o){typeof i!="string"&&i!==a.Fragment&&a.passNode&&(r.node=o)}function hu(a,r){if(r.length>0){const i=r.length>1?r:r[0];i&&(a.children=i)}}function $b(a,r,i){return o;function o(d,p,f,h){const g=Array.isArray(f.children)?i:r;return h?g(p,f,h):g(p,f)}}function e0(a,r){return i;function i(o,d,p,f){const h=Array.isArray(p.children),x=fu(o);return r(d,p,f,h,{columnNumber:x?x.column-1:void 0,fileName:a,lineNumber:x?x.line:void 0},void 0)}}function t0(a,r){const i={};let o,d;for(d in r.properties)if(d!=="children"&&mu.call(r.properties,d)){const p=a0(a,d,r.properties[d]);if(p){const[f,h]=p;a.tableCellAlignToStyle&&f==="align"&&typeof h=="string"&&Gb.has(r.tagName)?o=h:i[f]=h}}if(o){const p=i.style||(i.style={});p[a.stylePropertyNameCase==="css"?"text-align":"textAlign"]=o}return i}function n0(a,r){const i={};for(const o of r.attributes)if(o.type==="mdxJsxExpressionAttribute")if(o.data&&o.data.estree&&a.evaluater){const p=o.data.estree.body[0];p.type;const f=p.expression;f.type;const h=f.properties[0];h.type,Object.assign(i,a.evaluater.evaluateExpression(h.argument))}else Nr(a,r.position);else{const d=o.name;let p;if(o.value&&typeof o.value=="object")if(o.value.data&&o.value.data.estree&&a.evaluater){const h=o.value.data.estree.body[0];h.type,p=a.evaluater.evaluateExpression(h.expression)}else Nr(a,r.position);else p=o.value===null?!0:o.value;i[d]=p}return i}function gu(a,r){const i=[];let o=-1;const d=a.passKeys?new Map:Ib;for(;++o<r.children.length;){const p=r.children[o];let f;if(a.passKeys){const x=p.type==="element"?p.tagName:p.type==="mdxJsxFlowElement"||p.type==="mdxJsxTextElement"?p.name:void 0;if(x){const g=d.get(x)||0;f=x+"-"+g,d.set(x,g+1)}}const h=Vh(a,p,f);h!==void 0&&i.push(h)}return i}function a0(a,r,i){const o=Nb(a.schema,r);if(!(i==null||typeof i=="number"&&Number.isNaN(i))){if(Array.isArray(i)&&(i=o.commaSeparated?yb(i):Db(i)),o.property==="style"){let d=typeof i=="object"?i:s0(a,String(i));return a.stylePropertyNameCase==="css"&&(d=r0(d)),["style",d]}return[a.elementAttributeNameCase==="react"&&o.space?Eb[o.property]||o.property:o.attribute,i]}}function s0(a,r){try{return Ub(r,{reactCompat:!0})}catch(i){if(a.ignoreInvalidStyle)return{};const o=i,d=new bt("Cannot parse `style` attribute",{ancestors:a.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw d.file=a.filePath||void 0,d.url=Yh+"#cannot-parse-style-attribute",d}}function Kh(a,r,i){let o;if(!i)o={type:"Literal",value:r};else if(r.includes(".")){const d=r.split(".");let p=-1,f;for(;++p<d.length;){const h=zm(d[p])?{type:"Identifier",name:d[p]}:{type:"Literal",value:d[p]};f=f?{type:"MemberExpression",object:f,property:h,computed:!!(p&&h.type==="Literal"),optional:!1}:h}o=f}else o=zm(r)&&!/^[a-z]/.test(r)?{type:"Identifier",name:r}:{type:"Literal",value:r};if(o.type==="Literal"){const d=o.value;return mu.call(a.components,d)?a.components[d]:d}if(a.evaluater)return a.evaluater.evaluateExpression(o);Nr(a)}function Nr(a,r){const i=new bt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:a.ancestors,place:r,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw i.file=a.filePath||void 0,i.url=Yh+"#cannot-handle-mdx-estrees-without-createevaluater",i}function r0(a){const r={};let i;for(i in a)mu.call(a,i)&&(r[l0(i)]=a[i]);return r}function l0(a){let r=a.replace(Yb,i0);return r.slice(0,3)==="ms-"&&(r="-"+r),r}function i0(a){return"-"+a.toLowerCase()}const zc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},o0={};function c0(a,r){const i=o0,o=typeof i.includeImageAlt=="boolean"?i.includeImageAlt:!0,d=typeof i.includeHtml=="boolean"?i.includeHtml:!0;return Xh(a,o,d)}function Xh(a,r,i){if(u0(a)){if("value"in a)return a.type==="html"&&!i?"":a.value;if(r&&"alt"in a&&a.alt)return a.alt;if("children"in a)return Xm(a.children,r,i)}return Array.isArray(a)?Xm(a,r,i):""}function Xm(a,r,i){const o=[];let d=-1;for(;++d<a.length;)o[d]=Xh(a[d],r,i);return o.join("")}function u0(a){return!!(a&&typeof a=="object")}const Qm=document.createElement("i");function xu(a){const r="&"+a+";";Qm.innerHTML=r;const i=Qm.textContent;return i.charCodeAt(i.length-1)===59&&a!=="semi"||i===r?!1:i}function fn(a,r,i,o){const d=a.length;let p=0,f;if(r<0?r=-r>d?0:d+r:r=r>d?d:r,i=i>0?i:0,o.length<1e4)f=Array.from(o),f.unshift(r,i),a.splice(...f);else for(i&&a.splice(r,i);p<o.length;)f=o.slice(p,p+1e4),f.unshift(r,0),a.splice(...f),p+=1e4,r+=1e4}function tn(a,r){return a.length>0?(fn(a,a.length,0,r),a):r}const Fm={}.hasOwnProperty;function d0(a){const r={};let i=-1;for(;++i<a.length;)p0(r,a[i]);return r}function p0(a,r){let i;for(i in r){const d=(Fm.call(a,i)?a[i]:void 0)||(a[i]={}),p=r[i];let f;if(p)for(f in p){Fm.call(d,f)||(d[f]=[]);const h=p[f];f0(d[f],Array.isArray(h)?h:h?[h]:[])}}}function f0(a,r){let i=-1;const o=[];for(;++i<r.length;)(r[i].add==="after"?a:o).push(r[i]);fn(a,0,0,o)}function Qh(a,r){const i=Number.parseInt(a,r);return i<9||i===11||i>13&&i<32||i>126&&i<160||i>55295&&i<57344||i>64975&&i<65008||(i&65535)===65535||(i&65535)===65534||i>1114111?"�":String.fromCodePoint(i)}function ks(a){return a.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const pn=oa(/[A-Za-z]/),Yt=oa(/[\dA-Za-z]/),m0=oa(/[#-'*+\--9=?A-Z^-~]/);function eu(a){return a!==null&&(a<32||a===127)}const tu=oa(/\d/),h0=oa(/[\dA-Fa-f]/),g0=oa(/[!-/:-@[-`{-~]/);function ye(a){return a!==null&&a<-2}function Ot(a){return a!==null&&(a<0||a===32)}function ze(a){return a===-2||a===-1||a===32}const x0=oa(new RegExp("\\p{P}|\\p{S}","u")),y0=oa(/\s/);function oa(a){return r;function r(i){return i!==null&&i>-1&&a.test(String.fromCharCode(i))}}function Ss(a){const r=[];let i=-1,o=0,d=0;for(;++i<a.length;){const p=a.charCodeAt(i);let f="";if(p===37&&Yt(a.charCodeAt(i+1))&&Yt(a.charCodeAt(i+2)))d=2;else if(p<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(p))||(f=String.fromCharCode(p));else if(p>55295&&p<57344){const h=a.charCodeAt(i+1);p<56320&&h>56319&&h<57344?(f=String.fromCharCode(p,h),d=1):f="�"}else f=String.fromCharCode(p);f&&(r.push(a.slice(o,i),encodeURIComponent(f)),o=i+d+1,f=""),d&&(i+=d,d=0)}return r.join("")+a.slice(o)}function Qe(a,r,i,o){const d=o?o-1:Number.POSITIVE_INFINITY;let p=0;return f;function f(x){return ze(x)?(a.enter(i),h(x)):r(x)}function h(x){return ze(x)&&p++<d?(a.consume(x),h):(a.exit(i),r(x))}}const b0={tokenize:_0};function _0(a){const r=a.attempt(this.parser.constructs.contentInitial,o,d);let i;return r;function o(h){if(h===null){a.consume(h);return}return a.enter("lineEnding"),a.consume(h),a.exit("lineEnding"),Qe(a,r,"linePrefix")}function d(h){return a.enter("paragraph"),p(h)}function p(h){const x=a.enter("chunkText",{contentType:"text",previous:i});return i&&(i.next=x),i=x,f(h)}function f(h){if(h===null){a.exit("chunkText"),a.exit("paragraph"),a.consume(h);return}return ye(h)?(a.consume(h),a.exit("chunkText"),p):(a.consume(h),f)}}const k0={tokenize:w0},Zm={tokenize:v0};function w0(a){const r=this,i=[];let o=0,d,p,f;return h;function h(H){if(o<i.length){const le=i[o];return r.containerState=le[1],a.attempt(le[0].continuation,x,g)(H)}return g(H)}function x(H){if(o++,r.containerState._closeFlow){r.containerState._closeFlow=void 0,d&&ee();const le=r.events.length;let de=le,P;for(;de--;)if(r.events[de][0]==="exit"&&r.events[de][1].type==="chunkFlow"){P=r.events[de][1].end;break}M(o);let $=le;for(;$<r.events.length;)r.events[$][1].end={...P},$++;return fn(r.events,de+1,0,r.events.slice(le)),r.events.length=$,g(H)}return h(H)}function g(H){if(o===i.length){if(!d)return T(H);if(d.currentConstruct&&d.currentConstruct.concrete)return G(H);r.interrupt=!!(d.currentConstruct&&!d._gfmTableDynamicInterruptHack)}return r.containerState={},a.check(Zm,b,_)(H)}function b(H){return d&&ee(),M(o),T(H)}function _(H){return r.parser.lazy[r.now().line]=o!==i.length,f=r.now().offset,G(H)}function T(H){return r.containerState={},a.attempt(Zm,w,G)(H)}function w(H){return o++,i.push([r.currentConstruct,r.containerState]),T(H)}function G(H){if(H===null){d&&ee(),M(0),a.consume(H);return}return d=d||r.parser.flow(r.now()),a.enter("chunkFlow",{_tokenizer:d,contentType:"flow",previous:p}),K(H)}function K(H){if(H===null){F(a.exit("chunkFlow"),!0),M(0),a.consume(H);return}return ye(H)?(a.consume(H),F(a.exit("chunkFlow")),o=0,r.interrupt=void 0,h):(a.consume(H),K)}function F(H,le){const de=r.sliceStream(H);if(le&&de.push(null),H.previous=p,p&&(p.next=H),p=H,d.defineSkip(H.start),d.write(de),r.parser.lazy[H.start.line]){let P=d.events.length;for(;P--;)if(d.events[P][1].start.offset<f&&(!d.events[P][1].end||d.events[P][1].end.offset>f))return;const $=r.events.length;let xe=$,he,Se;for(;xe--;)if(r.events[xe][0]==="exit"&&r.events[xe][1].type==="chunkFlow"){if(he){Se=r.events[xe][1].end;break}he=!0}for(M(o),P=$;P<r.events.length;)r.events[P][1].end={...Se},P++;fn(r.events,xe+1,0,r.events.slice($)),r.events.length=P}}function M(H){let le=i.length;for(;le-- >H;){const de=i[le];r.containerState=de[1],de[0].exit.call(r,a)}i.length=H}function ee(){d.write([null]),p=void 0,d=void 0,r.containerState._closeFlow=void 0}}function v0(a,r,i){return Qe(a,a.attempt(this.parser.constructs.document,r,i),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Wm(a){if(a===null||Ot(a)||y0(a))return 1;if(x0(a))return 2}function yu(a,r,i){const o=[];let d=-1;for(;++d<a.length;){const p=a[d].resolveAll;p&&!o.includes(p)&&(r=p(r,i),o.push(p))}return r}const nu={name:"attention",resolveAll:S0,tokenize:T0};function S0(a,r){let i=-1,o,d,p,f,h,x,g,b;for(;++i<a.length;)if(a[i][0]==="enter"&&a[i][1].type==="attentionSequence"&&a[i][1]._close){for(o=i;o--;)if(a[o][0]==="exit"&&a[o][1].type==="attentionSequence"&&a[o][1]._open&&r.sliceSerialize(a[o][1]).charCodeAt(0)===r.sliceSerialize(a[i][1]).charCodeAt(0)){if((a[o][1]._close||a[i][1]._open)&&(a[i][1].end.offset-a[i][1].start.offset)%3&&!((a[o][1].end.offset-a[o][1].start.offset+a[i][1].end.offset-a[i][1].start.offset)%3))continue;x=a[o][1].end.offset-a[o][1].start.offset>1&&a[i][1].end.offset-a[i][1].start.offset>1?2:1;const _={...a[o][1].end},T={...a[i][1].start};Jm(_,-x),Jm(T,x),f={type:x>1?"strongSequence":"emphasisSequence",start:_,end:{...a[o][1].end}},h={type:x>1?"strongSequence":"emphasisSequence",start:{...a[i][1].start},end:T},p={type:x>1?"strongText":"emphasisText",start:{...a[o][1].end},end:{...a[i][1].start}},d={type:x>1?"strong":"emphasis",start:{...f.start},end:{...h.end}},a[o][1].end={...f.start},a[i][1].start={...h.end},g=[],a[o][1].end.offset-a[o][1].start.offset&&(g=tn(g,[["enter",a[o][1],r],["exit",a[o][1],r]])),g=tn(g,[["enter",d,r],["enter",f,r],["exit",f,r],["enter",p,r]]),g=tn(g,yu(r.parser.constructs.insideSpan.null,a.slice(o+1,i),r)),g=tn(g,[["exit",p,r],["enter",h,r],["exit",h,r],["exit",d,r]]),a[i][1].end.offset-a[i][1].start.offset?(b=2,g=tn(g,[["enter",a[i][1],r],["exit",a[i][1],r]])):b=0,fn(a,o-1,i-o+3,g),i=o+g.length-b-2;break}}for(i=-1;++i<a.length;)a[i][1].type==="attentionSequence"&&(a[i][1].type="data");return a}function T0(a,r){const i=this.parser.constructs.attentionMarkers.null,o=this.previous,d=Wm(o);let p;return f;function f(x){return p=x,a.enter("attentionSequence"),h(x)}function h(x){if(x===p)return a.consume(x),h;const g=a.exit("attentionSequence"),b=Wm(x),_=!b||b===2&&d||i.includes(x),T=!d||d===2&&b||i.includes(o);return g._open=!!(p===42?_:_&&(d||!T)),g._close=!!(p===42?T:T&&(b||!_)),r(x)}}function Jm(a,r){a.column+=r,a.offset+=r,a._bufferIndex+=r}const C0={name:"autolink",tokenize:E0};function E0(a,r,i){let o=0;return d;function d(w){return a.enter("autolink"),a.enter("autolinkMarker"),a.consume(w),a.exit("autolinkMarker"),a.enter("autolinkProtocol"),p}function p(w){return pn(w)?(a.consume(w),f):w===64?i(w):g(w)}function f(w){return w===43||w===45||w===46||Yt(w)?(o=1,h(w)):g(w)}function h(w){return w===58?(a.consume(w),o=0,x):(w===43||w===45||w===46||Yt(w))&&o++<32?(a.consume(w),h):(o=0,g(w))}function x(w){return w===62?(a.exit("autolinkProtocol"),a.enter("autolinkMarker"),a.consume(w),a.exit("autolinkMarker"),a.exit("autolink"),r):w===null||w===32||w===60||eu(w)?i(w):(a.consume(w),x)}function g(w){return w===64?(a.consume(w),b):m0(w)?(a.consume(w),g):i(w)}function b(w){return Yt(w)?_(w):i(w)}function _(w){return w===46?(a.consume(w),o=0,b):w===62?(a.exit("autolinkProtocol").type="autolinkEmail",a.enter("autolinkMarker"),a.consume(w),a.exit("autolinkMarker"),a.exit("autolink"),r):T(w)}function T(w){if((w===45||Yt(w))&&o++<63){const G=w===45?T:_;return a.consume(w),G}return i(w)}}const oi={partial:!0,tokenize:A0};function A0(a,r,i){return o;function o(p){return ze(p)?Qe(a,d,"linePrefix")(p):d(p)}function d(p){return p===null||ye(p)?r(p):i(p)}}const Fh={continuation:{tokenize:N0},exit:L0,name:"blockQuote",tokenize:j0};function j0(a,r,i){const o=this;return d;function d(f){if(f===62){const h=o.containerState;return h.open||(a.enter("blockQuote",{_container:!0}),h.open=!0),a.enter("blockQuotePrefix"),a.enter("blockQuoteMarker"),a.consume(f),a.exit("blockQuoteMarker"),p}return i(f)}function p(f){return ze(f)?(a.enter("blockQuotePrefixWhitespace"),a.consume(f),a.exit("blockQuotePrefixWhitespace"),a.exit("blockQuotePrefix"),r):(a.exit("blockQuotePrefix"),r(f))}}function N0(a,r,i){const o=this;return d;function d(f){return ze(f)?Qe(a,p,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):p(f)}function p(f){return a.attempt(Fh,r,i)(f)}}function L0(a){a.exit("blockQuote")}const Zh={name:"characterEscape",tokenize:O0};function O0(a,r,i){return o;function o(p){return a.enter("characterEscape"),a.enter("escapeMarker"),a.consume(p),a.exit("escapeMarker"),d}function d(p){return g0(p)?(a.enter("characterEscapeValue"),a.consume(p),a.exit("characterEscapeValue"),a.exit("characterEscape"),r):i(p)}}const Wh={name:"characterReference",tokenize:M0};function M0(a,r,i){const o=this;let d=0,p,f;return h;function h(_){return a.enter("characterReference"),a.enter("characterReferenceMarker"),a.consume(_),a.exit("characterReferenceMarker"),x}function x(_){return _===35?(a.enter("characterReferenceMarkerNumeric"),a.consume(_),a.exit("characterReferenceMarkerNumeric"),g):(a.enter("characterReferenceValue"),p=31,f=Yt,b(_))}function g(_){return _===88||_===120?(a.enter("characterReferenceMarkerHexadecimal"),a.consume(_),a.exit("characterReferenceMarkerHexadecimal"),a.enter("characterReferenceValue"),p=6,f=h0,b):(a.enter("characterReferenceValue"),p=7,f=tu,b(_))}function b(_){if(_===59&&d){const T=a.exit("characterReferenceValue");return f===Yt&&!xu(o.sliceSerialize(T))?i(_):(a.enter("characterReferenceMarker"),a.consume(_),a.exit("characterReferenceMarker"),a.exit("characterReference"),r)}return f(_)&&d++<p?(a.consume(_),b):i(_)}}const $m={partial:!0,tokenize:R0},eh={concrete:!0,name:"codeFenced",tokenize:D0};function D0(a,r,i){const o=this,d={partial:!0,tokenize:de};let p=0,f=0,h;return x;function x(P){return g(P)}function g(P){const $=o.events[o.events.length-1];return p=$&&$[1].type==="linePrefix"?$[2].sliceSerialize($[1],!0).length:0,h=P,a.enter("codeFenced"),a.enter("codeFencedFence"),a.enter("codeFencedFenceSequence"),b(P)}function b(P){return P===h?(f++,a.consume(P),b):f<3?i(P):(a.exit("codeFencedFenceSequence"),ze(P)?Qe(a,_,"whitespace")(P):_(P))}function _(P){return P===null||ye(P)?(a.exit("codeFencedFence"),o.interrupt?r(P):a.check($m,K,le)(P)):(a.enter("codeFencedFenceInfo"),a.enter("chunkString",{contentType:"string"}),T(P))}function T(P){return P===null||ye(P)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),_(P)):ze(P)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),Qe(a,w,"whitespace")(P)):P===96&&P===h?i(P):(a.consume(P),T)}function w(P){return P===null||ye(P)?_(P):(a.enter("codeFencedFenceMeta"),a.enter("chunkString",{contentType:"string"}),G(P))}function G(P){return P===null||ye(P)?(a.exit("chunkString"),a.exit("codeFencedFenceMeta"),_(P)):P===96&&P===h?i(P):(a.consume(P),G)}function K(P){return a.attempt(d,le,F)(P)}function F(P){return a.enter("lineEnding"),a.consume(P),a.exit("lineEnding"),M}function M(P){return p>0&&ze(P)?Qe(a,ee,"linePrefix",p+1)(P):ee(P)}function ee(P){return P===null||ye(P)?a.check($m,K,le)(P):(a.enter("codeFlowValue"),H(P))}function H(P){return P===null||ye(P)?(a.exit("codeFlowValue"),ee(P)):(a.consume(P),H)}function le(P){return a.exit("codeFenced"),r(P)}function de(P,$,xe){let he=0;return Se;function Se(Y){return P.enter("lineEnding"),P.consume(Y),P.exit("lineEnding"),te}function te(Y){return P.enter("codeFencedFence"),ze(Y)?Qe(P,se,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Y):se(Y)}function se(Y){return Y===h?(P.enter("codeFencedFenceSequence"),Z(Y)):xe(Y)}function Z(Y){return Y===h?(he++,P.consume(Y),Z):he>=f?(P.exit("codeFencedFenceSequence"),ze(Y)?Qe(P,J,"whitespace")(Y):J(Y)):xe(Y)}function J(Y){return Y===null||ye(Y)?(P.exit("codeFencedFence"),$(Y)):xe(Y)}}}function R0(a,r,i){const o=this;return d;function d(f){return f===null?i(f):(a.enter("lineEnding"),a.consume(f),a.exit("lineEnding"),p)}function p(f){return o.parser.lazy[o.now().line]?i(f):r(f)}}const qc={name:"codeIndented",tokenize:z0},P0={partial:!0,tokenize:q0};function z0(a,r,i){const o=this;return d;function d(g){return a.enter("codeIndented"),Qe(a,p,"linePrefix",5)(g)}function p(g){const b=o.events[o.events.length-1];return b&&b[1].type==="linePrefix"&&b[2].sliceSerialize(b[1],!0).length>=4?f(g):i(g)}function f(g){return g===null?x(g):ye(g)?a.attempt(P0,f,x)(g):(a.enter("codeFlowValue"),h(g))}function h(g){return g===null||ye(g)?(a.exit("codeFlowValue"),f(g)):(a.consume(g),h)}function x(g){return a.exit("codeIndented"),r(g)}}function q0(a,r,i){const o=this;return d;function d(f){return o.parser.lazy[o.now().line]?i(f):ye(f)?(a.enter("lineEnding"),a.consume(f),a.exit("lineEnding"),d):Qe(a,p,"linePrefix",5)(f)}function p(f){const h=o.events[o.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?r(f):ye(f)?d(f):i(f)}}const B0={name:"codeText",previous:H0,resolve:U0,tokenize:I0};function U0(a){let r=a.length-4,i=3,o,d;if((a[i][1].type==="lineEnding"||a[i][1].type==="space")&&(a[r][1].type==="lineEnding"||a[r][1].type==="space")){for(o=i;++o<r;)if(a[o][1].type==="codeTextData"){a[i][1].type="codeTextPadding",a[r][1].type="codeTextPadding",i+=2,r-=2;break}}for(o=i-1,r++;++o<=r;)d===void 0?o!==r&&a[o][1].type!=="lineEnding"&&(d=o):(o===r||a[o][1].type==="lineEnding")&&(a[d][1].type="codeTextData",o!==d+2&&(a[d][1].end=a[o-1][1].end,a.splice(d+2,o-d-2),r-=o-d-2,o=d+2),d=void 0);return a}function H0(a){return a!==96||this.events[this.events.length-1][1].type==="characterEscape"}function I0(a,r,i){let o=0,d,p;return f;function f(_){return a.enter("codeText"),a.enter("codeTextSequence"),h(_)}function h(_){return _===96?(a.consume(_),o++,h):(a.exit("codeTextSequence"),x(_))}function x(_){return _===null?i(_):_===32?(a.enter("space"),a.consume(_),a.exit("space"),x):_===96?(p=a.enter("codeTextSequence"),d=0,b(_)):ye(_)?(a.enter("lineEnding"),a.consume(_),a.exit("lineEnding"),x):(a.enter("codeTextData"),g(_))}function g(_){return _===null||_===32||_===96||ye(_)?(a.exit("codeTextData"),x(_)):(a.consume(_),g)}function b(_){return _===96?(a.consume(_),d++,b):d===o?(a.exit("codeTextSequence"),a.exit("codeText"),r(_)):(p.type="codeTextData",g(_))}}class Y0{constructor(r){this.left=r?[...r]:[],this.right=[]}get(r){if(r<0||r>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+r+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return r<this.left.length?this.left[r]:this.right[this.right.length-r+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(r,i){const o=i??Number.POSITIVE_INFINITY;return o<this.left.length?this.left.slice(r,o):r>this.left.length?this.right.slice(this.right.length-o+this.left.length,this.right.length-r+this.left.length).reverse():this.left.slice(r).concat(this.right.slice(this.right.length-o+this.left.length).reverse())}splice(r,i,o){const d=i||0;this.setCursor(Math.trunc(r));const p=this.right.splice(this.right.length-d,Number.POSITIVE_INFINITY);return o&&wr(this.left,o),p.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(r){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(r)}pushMany(r){this.setCursor(Number.POSITIVE_INFINITY),wr(this.left,r)}unshift(r){this.setCursor(0),this.right.push(r)}unshiftMany(r){this.setCursor(0),wr(this.right,r.reverse())}setCursor(r){if(!(r===this.left.length||r>this.left.length&&this.right.length===0||r<0&&this.left.length===0))if(r<this.left.length){const i=this.left.splice(r,Number.POSITIVE_INFINITY);wr(this.right,i.reverse())}else{const i=this.right.splice(this.left.length+this.right.length-r,Number.POSITIVE_INFINITY);wr(this.left,i.reverse())}}}function wr(a,r){let i=0;if(r.length<1e4)a.push(...r);else for(;i<r.length;)a.push(...r.slice(i,i+1e4)),i+=1e4}function Jh(a){const r={};let i=-1,o,d,p,f,h,x,g;const b=new Y0(a);for(;++i<b.length;){for(;i in r;)i=r[i];if(o=b.get(i),i&&o[1].type==="chunkFlow"&&b.get(i-1)[1].type==="listItemPrefix"&&(x=o[1]._tokenizer.events,p=0,p<x.length&&x[p][1].type==="lineEndingBlank"&&(p+=2),p<x.length&&x[p][1].type==="content"))for(;++p<x.length&&x[p][1].type!=="content";)x[p][1].type==="chunkText"&&(x[p][1]._isInFirstContentOfListItem=!0,p++);if(o[0]==="enter")o[1].contentType&&(Object.assign(r,V0(b,i)),i=r[i],g=!0);else if(o[1]._container){for(p=i,d=void 0;p--;)if(f=b.get(p),f[1].type==="lineEnding"||f[1].type==="lineEndingBlank")f[0]==="enter"&&(d&&(b.get(d)[1].type="lineEndingBlank"),f[1].type="lineEnding",d=p);else if(!(f[1].type==="linePrefix"||f[1].type==="listItemIndent"))break;d&&(o[1].end={...b.get(d)[1].start},h=b.slice(d,i),h.unshift(o),b.splice(d,i-d+1,h))}}return fn(a,0,Number.POSITIVE_INFINITY,b.slice(0)),!g}function V0(a,r){const i=a.get(r)[1],o=a.get(r)[2];let d=r-1;const p=[];let f=i._tokenizer;f||(f=o.parser[i.contentType](i.start),i._contentTypeTextTrailing&&(f._contentTypeTextTrailing=!0));const h=f.events,x=[],g={};let b,_,T=-1,w=i,G=0,K=0;const F=[K];for(;w;){for(;a.get(++d)[1]!==w;);p.push(d),w._tokenizer||(b=o.sliceStream(w),w.next||b.push(null),_&&f.defineSkip(w.start),w._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=!0),f.write(b),w._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=void 0)),_=w,w=w.next}for(w=i;++T<h.length;)h[T][0]==="exit"&&h[T-1][0]==="enter"&&h[T][1].type===h[T-1][1].type&&h[T][1].start.line!==h[T][1].end.line&&(K=T+1,F.push(K),w._tokenizer=void 0,w.previous=void 0,w=w.next);for(f.events=[],w?(w._tokenizer=void 0,w.previous=void 0):F.pop(),T=F.length;T--;){const M=h.slice(F[T],F[T+1]),ee=p.pop();x.push([ee,ee+M.length-1]),a.splice(ee,2,M)}for(x.reverse(),T=-1;++T<x.length;)g[G+x[T][0]]=G+x[T][1],G+=x[T][1]-x[T][0]-1;return g}const G0={resolve:X0,tokenize:Q0},K0={partial:!0,tokenize:F0};function X0(a){return Jh(a),a}function Q0(a,r){let i;return o;function o(h){return a.enter("content"),i=a.enter("chunkContent",{contentType:"content"}),d(h)}function d(h){return h===null?p(h):ye(h)?a.check(K0,f,p)(h):(a.consume(h),d)}function p(h){return a.exit("chunkContent"),a.exit("content"),r(h)}function f(h){return a.consume(h),a.exit("chunkContent"),i.next=a.enter("chunkContent",{contentType:"content",previous:i}),i=i.next,d}}function F0(a,r,i){const o=this;return d;function d(f){return a.exit("chunkContent"),a.enter("lineEnding"),a.consume(f),a.exit("lineEnding"),Qe(a,p,"linePrefix")}function p(f){if(f===null||ye(f))return i(f);const h=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?r(f):a.interrupt(o.parser.constructs.flow,i,r)(f)}}function $h(a,r,i,o,d,p,f,h,x){const g=x||Number.POSITIVE_INFINITY;let b=0;return _;function _(M){return M===60?(a.enter(o),a.enter(d),a.enter(p),a.consume(M),a.exit(p),T):M===null||M===32||M===41||eu(M)?i(M):(a.enter(o),a.enter(f),a.enter(h),a.enter("chunkString",{contentType:"string"}),K(M))}function T(M){return M===62?(a.enter(p),a.consume(M),a.exit(p),a.exit(d),a.exit(o),r):(a.enter(h),a.enter("chunkString",{contentType:"string"}),w(M))}function w(M){return M===62?(a.exit("chunkString"),a.exit(h),T(M)):M===null||M===60||ye(M)?i(M):(a.consume(M),M===92?G:w)}function G(M){return M===60||M===62||M===92?(a.consume(M),w):w(M)}function K(M){return!b&&(M===null||M===41||Ot(M))?(a.exit("chunkString"),a.exit(h),a.exit(f),a.exit(o),r(M)):b<g&&M===40?(a.consume(M),b++,K):M===41?(a.consume(M),b--,K):M===null||M===32||M===40||eu(M)?i(M):(a.consume(M),M===92?F:K)}function F(M){return M===40||M===41||M===92?(a.consume(M),K):K(M)}}function eg(a,r,i,o,d,p){const f=this;let h=0,x;return g;function g(w){return a.enter(o),a.enter(d),a.consume(w),a.exit(d),a.enter(p),b}function b(w){return h>999||w===null||w===91||w===93&&!x||w===94&&!h&&"_hiddenFootnoteSupport"in f.parser.constructs?i(w):w===93?(a.exit(p),a.enter(d),a.consume(w),a.exit(d),a.exit(o),r):ye(w)?(a.enter("lineEnding"),a.consume(w),a.exit("lineEnding"),b):(a.enter("chunkString",{contentType:"string"}),_(w))}function _(w){return w===null||w===91||w===93||ye(w)||h++>999?(a.exit("chunkString"),b(w)):(a.consume(w),x||(x=!ze(w)),w===92?T:_)}function T(w){return w===91||w===92||w===93?(a.consume(w),h++,_):_(w)}}function tg(a,r,i,o,d,p){let f;return h;function h(T){return T===34||T===39||T===40?(a.enter(o),a.enter(d),a.consume(T),a.exit(d),f=T===40?41:T,x):i(T)}function x(T){return T===f?(a.enter(d),a.consume(T),a.exit(d),a.exit(o),r):(a.enter(p),g(T))}function g(T){return T===f?(a.exit(p),x(f)):T===null?i(T):ye(T)?(a.enter("lineEnding"),a.consume(T),a.exit("lineEnding"),Qe(a,g,"linePrefix")):(a.enter("chunkString",{contentType:"string"}),b(T))}function b(T){return T===f||T===null||ye(T)?(a.exit("chunkString"),g(T)):(a.consume(T),T===92?_:b)}function _(T){return T===f||T===92?(a.consume(T),b):b(T)}}function Tr(a,r){let i;return o;function o(d){return ye(d)?(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),i=!0,o):ze(d)?Qe(a,o,i?"linePrefix":"lineSuffix")(d):r(d)}}const Z0={name:"definition",tokenize:J0},W0={partial:!0,tokenize:$0};function J0(a,r,i){const o=this;let d;return p;function p(w){return a.enter("definition"),f(w)}function f(w){return eg.call(o,a,h,i,"definitionLabel","definitionLabelMarker","definitionLabelString")(w)}function h(w){return d=ks(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),w===58?(a.enter("definitionMarker"),a.consume(w),a.exit("definitionMarker"),x):i(w)}function x(w){return Ot(w)?Tr(a,g)(w):g(w)}function g(w){return $h(a,b,i,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(w)}function b(w){return a.attempt(W0,_,_)(w)}function _(w){return ze(w)?Qe(a,T,"whitespace")(w):T(w)}function T(w){return w===null||ye(w)?(a.exit("definition"),o.parser.defined.push(d),r(w)):i(w)}}function $0(a,r,i){return o;function o(h){return Ot(h)?Tr(a,d)(h):i(h)}function d(h){return tg(a,p,i,"definitionTitle","definitionTitleMarker","definitionTitleString")(h)}function p(h){return ze(h)?Qe(a,f,"whitespace")(h):f(h)}function f(h){return h===null||ye(h)?r(h):i(h)}}const e_={name:"hardBreakEscape",tokenize:t_};function t_(a,r,i){return o;function o(p){return a.enter("hardBreakEscape"),a.consume(p),d}function d(p){return ye(p)?(a.exit("hardBreakEscape"),r(p)):i(p)}}const n_={name:"headingAtx",resolve:a_,tokenize:s_};function a_(a,r){let i=a.length-2,o=3,d,p;return a[o][1].type==="whitespace"&&(o+=2),i-2>o&&a[i][1].type==="whitespace"&&(i-=2),a[i][1].type==="atxHeadingSequence"&&(o===i-1||i-4>o&&a[i-2][1].type==="whitespace")&&(i-=o+1===i?2:4),i>o&&(d={type:"atxHeadingText",start:a[o][1].start,end:a[i][1].end},p={type:"chunkText",start:a[o][1].start,end:a[i][1].end,contentType:"text"},fn(a,o,i-o+1,[["enter",d,r],["enter",p,r],["exit",p,r],["exit",d,r]])),a}function s_(a,r,i){let o=0;return d;function d(b){return a.enter("atxHeading"),p(b)}function p(b){return a.enter("atxHeadingSequence"),f(b)}function f(b){return b===35&&o++<6?(a.consume(b),f):b===null||Ot(b)?(a.exit("atxHeadingSequence"),h(b)):i(b)}function h(b){return b===35?(a.enter("atxHeadingSequence"),x(b)):b===null||ye(b)?(a.exit("atxHeading"),r(b)):ze(b)?Qe(a,h,"whitespace")(b):(a.enter("atxHeadingText"),g(b))}function x(b){return b===35?(a.consume(b),x):(a.exit("atxHeadingSequence"),h(b))}function g(b){return b===null||b===35||Ot(b)?(a.exit("atxHeadingText"),h(b)):(a.consume(b),g)}}const r_=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],th=["pre","script","style","textarea"],l_={concrete:!0,name:"htmlFlow",resolveTo:c_,tokenize:u_},i_={partial:!0,tokenize:p_},o_={partial:!0,tokenize:d_};function c_(a){let r=a.length;for(;r--&&!(a[r][0]==="enter"&&a[r][1].type==="htmlFlow"););return r>1&&a[r-2][1].type==="linePrefix"&&(a[r][1].start=a[r-2][1].start,a[r+1][1].start=a[r-2][1].start,a.splice(r-2,2)),a}function u_(a,r,i){const o=this;let d,p,f,h,x;return g;function g(k){return b(k)}function b(k){return a.enter("htmlFlow"),a.enter("htmlFlowData"),a.consume(k),_}function _(k){return k===33?(a.consume(k),T):k===47?(a.consume(k),p=!0,K):k===63?(a.consume(k),d=3,o.interrupt?r:v):pn(k)?(a.consume(k),f=String.fromCharCode(k),F):i(k)}function T(k){return k===45?(a.consume(k),d=2,w):k===91?(a.consume(k),d=5,h=0,G):pn(k)?(a.consume(k),d=4,o.interrupt?r:v):i(k)}function w(k){return k===45?(a.consume(k),o.interrupt?r:v):i(k)}function G(k){const ne="CDATA[";return k===ne.charCodeAt(h++)?(a.consume(k),h===ne.length?o.interrupt?r:se:G):i(k)}function K(k){return pn(k)?(a.consume(k),f=String.fromCharCode(k),F):i(k)}function F(k){if(k===null||k===47||k===62||Ot(k)){const ne=k===47,me=f.toLowerCase();return!ne&&!p&&th.includes(me)?(d=1,o.interrupt?r(k):se(k)):r_.includes(f.toLowerCase())?(d=6,ne?(a.consume(k),M):o.interrupt?r(k):se(k)):(d=7,o.interrupt&&!o.parser.lazy[o.now().line]?i(k):p?ee(k):H(k))}return k===45||Yt(k)?(a.consume(k),f+=String.fromCharCode(k),F):i(k)}function M(k){return k===62?(a.consume(k),o.interrupt?r:se):i(k)}function ee(k){return ze(k)?(a.consume(k),ee):Se(k)}function H(k){return k===47?(a.consume(k),Se):k===58||k===95||pn(k)?(a.consume(k),le):ze(k)?(a.consume(k),H):Se(k)}function le(k){return k===45||k===46||k===58||k===95||Yt(k)?(a.consume(k),le):de(k)}function de(k){return k===61?(a.consume(k),P):ze(k)?(a.consume(k),de):H(k)}function P(k){return k===null||k===60||k===61||k===62||k===96?i(k):k===34||k===39?(a.consume(k),x=k,$):ze(k)?(a.consume(k),P):xe(k)}function $(k){return k===x?(a.consume(k),x=null,he):k===null||ye(k)?i(k):(a.consume(k),$)}function xe(k){return k===null||k===34||k===39||k===47||k===60||k===61||k===62||k===96||Ot(k)?de(k):(a.consume(k),xe)}function he(k){return k===47||k===62||ze(k)?H(k):i(k)}function Se(k){return k===62?(a.consume(k),te):i(k)}function te(k){return k===null||ye(k)?se(k):ze(k)?(a.consume(k),te):i(k)}function se(k){return k===45&&d===2?(a.consume(k),L):k===60&&d===1?(a.consume(k),V):k===62&&d===4?(a.consume(k),C):k===63&&d===3?(a.consume(k),v):k===93&&d===5?(a.consume(k),Te):ye(k)&&(d===6||d===7)?(a.exit("htmlFlowData"),a.check(i_,z,Z)(k)):k===null||ye(k)?(a.exit("htmlFlowData"),Z(k)):(a.consume(k),se)}function Z(k){return a.check(o_,J,z)(k)}function J(k){return a.enter("lineEnding"),a.consume(k),a.exit("lineEnding"),Y}function Y(k){return k===null||ye(k)?Z(k):(a.enter("htmlFlowData"),se(k))}function L(k){return k===45?(a.consume(k),v):se(k)}function V(k){return k===47?(a.consume(k),f="",oe):se(k)}function oe(k){if(k===62){const ne=f.toLowerCase();return th.includes(ne)?(a.consume(k),C):se(k)}return pn(k)&&f.length<8?(a.consume(k),f+=String.fromCharCode(k),oe):se(k)}function Te(k){return k===93?(a.consume(k),v):se(k)}function v(k){return k===62?(a.consume(k),C):k===45&&d===2?(a.consume(k),v):se(k)}function C(k){return k===null||ye(k)?(a.exit("htmlFlowData"),z(k)):(a.consume(k),C)}function z(k){return a.exit("htmlFlow"),r(k)}}function d_(a,r,i){const o=this;return d;function d(f){return ye(f)?(a.enter("lineEnding"),a.consume(f),a.exit("lineEnding"),p):i(f)}function p(f){return o.parser.lazy[o.now().line]?i(f):r(f)}}function p_(a,r,i){return o;function o(d){return a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),a.attempt(oi,r,i)}}const f_={name:"htmlText",tokenize:m_};function m_(a,r,i){const o=this;let d,p,f;return h;function h(v){return a.enter("htmlText"),a.enter("htmlTextData"),a.consume(v),x}function x(v){return v===33?(a.consume(v),g):v===47?(a.consume(v),de):v===63?(a.consume(v),H):pn(v)?(a.consume(v),xe):i(v)}function g(v){return v===45?(a.consume(v),b):v===91?(a.consume(v),p=0,G):pn(v)?(a.consume(v),ee):i(v)}function b(v){return v===45?(a.consume(v),w):i(v)}function _(v){return v===null?i(v):v===45?(a.consume(v),T):ye(v)?(f=_,V(v)):(a.consume(v),_)}function T(v){return v===45?(a.consume(v),w):_(v)}function w(v){return v===62?L(v):v===45?T(v):_(v)}function G(v){const C="CDATA[";return v===C.charCodeAt(p++)?(a.consume(v),p===C.length?K:G):i(v)}function K(v){return v===null?i(v):v===93?(a.consume(v),F):ye(v)?(f=K,V(v)):(a.consume(v),K)}function F(v){return v===93?(a.consume(v),M):K(v)}function M(v){return v===62?L(v):v===93?(a.consume(v),M):K(v)}function ee(v){return v===null||v===62?L(v):ye(v)?(f=ee,V(v)):(a.consume(v),ee)}function H(v){return v===null?i(v):v===63?(a.consume(v),le):ye(v)?(f=H,V(v)):(a.consume(v),H)}function le(v){return v===62?L(v):H(v)}function de(v){return pn(v)?(a.consume(v),P):i(v)}function P(v){return v===45||Yt(v)?(a.consume(v),P):$(v)}function $(v){return ye(v)?(f=$,V(v)):ze(v)?(a.consume(v),$):L(v)}function xe(v){return v===45||Yt(v)?(a.consume(v),xe):v===47||v===62||Ot(v)?he(v):i(v)}function he(v){return v===47?(a.consume(v),L):v===58||v===95||pn(v)?(a.consume(v),Se):ye(v)?(f=he,V(v)):ze(v)?(a.consume(v),he):L(v)}function Se(v){return v===45||v===46||v===58||v===95||Yt(v)?(a.consume(v),Se):te(v)}function te(v){return v===61?(a.consume(v),se):ye(v)?(f=te,V(v)):ze(v)?(a.consume(v),te):he(v)}function se(v){return v===null||v===60||v===61||v===62||v===96?i(v):v===34||v===39?(a.consume(v),d=v,Z):ye(v)?(f=se,V(v)):ze(v)?(a.consume(v),se):(a.consume(v),J)}function Z(v){return v===d?(a.consume(v),d=void 0,Y):v===null?i(v):ye(v)?(f=Z,V(v)):(a.consume(v),Z)}function J(v){return v===null||v===34||v===39||v===60||v===61||v===96?i(v):v===47||v===62||Ot(v)?he(v):(a.consume(v),J)}function Y(v){return v===47||v===62||Ot(v)?he(v):i(v)}function L(v){return v===62?(a.consume(v),a.exit("htmlTextData"),a.exit("htmlText"),r):i(v)}function V(v){return a.exit("htmlTextData"),a.enter("lineEnding"),a.consume(v),a.exit("lineEnding"),oe}function oe(v){return ze(v)?Qe(a,Te,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(v):Te(v)}function Te(v){return a.enter("htmlTextData"),f(v)}}const bu={name:"labelEnd",resolveAll:y_,resolveTo:b_,tokenize:__},h_={tokenize:k_},g_={tokenize:w_},x_={tokenize:v_};function y_(a){let r=-1;const i=[];for(;++r<a.length;){const o=a[r][1];if(i.push(a[r]),o.type==="labelImage"||o.type==="labelLink"||o.type==="labelEnd"){const d=o.type==="labelImage"?4:2;o.type="data",r+=d}}return a.length!==i.length&&fn(a,0,a.length,i),a}function b_(a,r){let i=a.length,o=0,d,p,f,h;for(;i--;)if(d=a[i][1],p){if(d.type==="link"||d.type==="labelLink"&&d._inactive)break;a[i][0]==="enter"&&d.type==="labelLink"&&(d._inactive=!0)}else if(f){if(a[i][0]==="enter"&&(d.type==="labelImage"||d.type==="labelLink")&&!d._balanced&&(p=i,d.type!=="labelLink")){o=2;break}}else d.type==="labelEnd"&&(f=i);const x={type:a[p][1].type==="labelLink"?"link":"image",start:{...a[p][1].start},end:{...a[a.length-1][1].end}},g={type:"label",start:{...a[p][1].start},end:{...a[f][1].end}},b={type:"labelText",start:{...a[p+o+2][1].end},end:{...a[f-2][1].start}};return h=[["enter",x,r],["enter",g,r]],h=tn(h,a.slice(p+1,p+o+3)),h=tn(h,[["enter",b,r]]),h=tn(h,yu(r.parser.constructs.insideSpan.null,a.slice(p+o+4,f-3),r)),h=tn(h,[["exit",b,r],a[f-2],a[f-1],["exit",g,r]]),h=tn(h,a.slice(f+1)),h=tn(h,[["exit",x,r]]),fn(a,p,a.length,h),a}function __(a,r,i){const o=this;let d=o.events.length,p,f;for(;d--;)if((o.events[d][1].type==="labelImage"||o.events[d][1].type==="labelLink")&&!o.events[d][1]._balanced){p=o.events[d][1];break}return h;function h(T){return p?p._inactive?_(T):(f=o.parser.defined.includes(ks(o.sliceSerialize({start:p.end,end:o.now()}))),a.enter("labelEnd"),a.enter("labelMarker"),a.consume(T),a.exit("labelMarker"),a.exit("labelEnd"),x):i(T)}function x(T){return T===40?a.attempt(h_,b,f?b:_)(T):T===91?a.attempt(g_,b,f?g:_)(T):f?b(T):_(T)}function g(T){return a.attempt(x_,b,_)(T)}function b(T){return r(T)}function _(T){return p._balanced=!0,i(T)}}function k_(a,r,i){return o;function o(_){return a.enter("resource"),a.enter("resourceMarker"),a.consume(_),a.exit("resourceMarker"),d}function d(_){return Ot(_)?Tr(a,p)(_):p(_)}function p(_){return _===41?b(_):$h(a,f,h,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(_)}function f(_){return Ot(_)?Tr(a,x)(_):b(_)}function h(_){return i(_)}function x(_){return _===34||_===39||_===40?tg(a,g,i,"resourceTitle","resourceTitleMarker","resourceTitleString")(_):b(_)}function g(_){return Ot(_)?Tr(a,b)(_):b(_)}function b(_){return _===41?(a.enter("resourceMarker"),a.consume(_),a.exit("resourceMarker"),a.exit("resource"),r):i(_)}}function w_(a,r,i){const o=this;return d;function d(h){return eg.call(o,a,p,f,"reference","referenceMarker","referenceString")(h)}function p(h){return o.parser.defined.includes(ks(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?r(h):i(h)}function f(h){return i(h)}}function v_(a,r,i){return o;function o(p){return a.enter("reference"),a.enter("referenceMarker"),a.consume(p),a.exit("referenceMarker"),d}function d(p){return p===93?(a.enter("referenceMarker"),a.consume(p),a.exit("referenceMarker"),a.exit("reference"),r):i(p)}}const S_={name:"labelStartImage",resolveAll:bu.resolveAll,tokenize:T_};function T_(a,r,i){const o=this;return d;function d(h){return a.enter("labelImage"),a.enter("labelImageMarker"),a.consume(h),a.exit("labelImageMarker"),p}function p(h){return h===91?(a.enter("labelMarker"),a.consume(h),a.exit("labelMarker"),a.exit("labelImage"),f):i(h)}function f(h){return h===94&&"_hiddenFootnoteSupport"in o.parser.constructs?i(h):r(h)}}const C_={name:"labelStartLink",resolveAll:bu.resolveAll,tokenize:E_};function E_(a,r,i){const o=this;return d;function d(f){return a.enter("labelLink"),a.enter("labelMarker"),a.consume(f),a.exit("labelMarker"),a.exit("labelLink"),p}function p(f){return f===94&&"_hiddenFootnoteSupport"in o.parser.constructs?i(f):r(f)}}const Bc={name:"lineEnding",tokenize:A_};function A_(a,r){return i;function i(o){return a.enter("lineEnding"),a.consume(o),a.exit("lineEnding"),Qe(a,r,"linePrefix")}}const ti={name:"thematicBreak",tokenize:j_};function j_(a,r,i){let o=0,d;return p;function p(g){return a.enter("thematicBreak"),f(g)}function f(g){return d=g,h(g)}function h(g){return g===d?(a.enter("thematicBreakSequence"),x(g)):o>=3&&(g===null||ye(g))?(a.exit("thematicBreak"),r(g)):i(g)}function x(g){return g===d?(a.consume(g),o++,x):(a.exit("thematicBreakSequence"),ze(g)?Qe(a,h,"whitespace")(g):h(g))}}const Lt={continuation:{tokenize:M_},exit:R_,name:"list",tokenize:O_},N_={partial:!0,tokenize:P_},L_={partial:!0,tokenize:D_};function O_(a,r,i){const o=this,d=o.events[o.events.length-1];let p=d&&d[1].type==="linePrefix"?d[2].sliceSerialize(d[1],!0).length:0,f=0;return h;function h(w){const G=o.containerState.type||(w===42||w===43||w===45?"listUnordered":"listOrdered");if(G==="listUnordered"?!o.containerState.marker||w===o.containerState.marker:tu(w)){if(o.containerState.type||(o.containerState.type=G,a.enter(G,{_container:!0})),G==="listUnordered")return a.enter("listItemPrefix"),w===42||w===45?a.check(ti,i,g)(w):g(w);if(!o.interrupt||w===49)return a.enter("listItemPrefix"),a.enter("listItemValue"),x(w)}return i(w)}function x(w){return tu(w)&&++f<10?(a.consume(w),x):(!o.interrupt||f<2)&&(o.containerState.marker?w===o.containerState.marker:w===41||w===46)?(a.exit("listItemValue"),g(w)):i(w)}function g(w){return a.enter("listItemMarker"),a.consume(w),a.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||w,a.check(oi,o.interrupt?i:b,a.attempt(N_,T,_))}function b(w){return o.containerState.initialBlankLine=!0,p++,T(w)}function _(w){return ze(w)?(a.enter("listItemPrefixWhitespace"),a.consume(w),a.exit("listItemPrefixWhitespace"),T):i(w)}function T(w){return o.containerState.size=p+o.sliceSerialize(a.exit("listItemPrefix"),!0).length,r(w)}}function M_(a,r,i){const o=this;return o.containerState._closeFlow=void 0,a.check(oi,d,p);function d(h){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,Qe(a,r,"listItemIndent",o.containerState.size+1)(h)}function p(h){return o.containerState.furtherBlankLines||!ze(h)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,f(h)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,a.attempt(L_,r,f)(h))}function f(h){return o.containerState._closeFlow=!0,o.interrupt=void 0,Qe(a,a.attempt(Lt,r,i),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h)}}function D_(a,r,i){const o=this;return Qe(a,d,"listItemIndent",o.containerState.size+1);function d(p){const f=o.events[o.events.length-1];return f&&f[1].type==="listItemIndent"&&f[2].sliceSerialize(f[1],!0).length===o.containerState.size?r(p):i(p)}}function R_(a){a.exit(this.containerState.type)}function P_(a,r,i){const o=this;return Qe(a,d,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function d(p){const f=o.events[o.events.length-1];return!ze(p)&&f&&f[1].type==="listItemPrefixWhitespace"?r(p):i(p)}}const nh={name:"setextUnderline",resolveTo:z_,tokenize:q_};function z_(a,r){let i=a.length,o,d,p;for(;i--;)if(a[i][0]==="enter"){if(a[i][1].type==="content"){o=i;break}a[i][1].type==="paragraph"&&(d=i)}else a[i][1].type==="content"&&a.splice(i,1),!p&&a[i][1].type==="definition"&&(p=i);const f={type:"setextHeading",start:{...a[o][1].start},end:{...a[a.length-1][1].end}};return a[d][1].type="setextHeadingText",p?(a.splice(d,0,["enter",f,r]),a.splice(p+1,0,["exit",a[o][1],r]),a[o][1].end={...a[p][1].end}):a[o][1]=f,a.push(["exit",f,r]),a}function q_(a,r,i){const o=this;let d;return p;function p(g){let b=o.events.length,_;for(;b--;)if(o.events[b][1].type!=="lineEnding"&&o.events[b][1].type!=="linePrefix"&&o.events[b][1].type!=="content"){_=o.events[b][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||_)?(a.enter("setextHeadingLine"),d=g,f(g)):i(g)}function f(g){return a.enter("setextHeadingLineSequence"),h(g)}function h(g){return g===d?(a.consume(g),h):(a.exit("setextHeadingLineSequence"),ze(g)?Qe(a,x,"lineSuffix")(g):x(g))}function x(g){return g===null||ye(g)?(a.exit("setextHeadingLine"),r(g)):i(g)}}const B_={tokenize:U_};function U_(a){const r=this,i=a.attempt(oi,o,a.attempt(this.parser.constructs.flowInitial,d,Qe(a,a.attempt(this.parser.constructs.flow,d,a.attempt(G0,d)),"linePrefix")));return i;function o(p){if(p===null){a.consume(p);return}return a.enter("lineEndingBlank"),a.consume(p),a.exit("lineEndingBlank"),r.currentConstruct=void 0,i}function d(p){if(p===null){a.consume(p);return}return a.enter("lineEnding"),a.consume(p),a.exit("lineEnding"),r.currentConstruct=void 0,i}}const H_={resolveAll:ag()},I_=ng("string"),Y_=ng("text");function ng(a){return{resolveAll:ag(a==="text"?V_:void 0),tokenize:r};function r(i){const o=this,d=this.parser.constructs[a],p=i.attempt(d,f,h);return f;function f(b){return g(b)?p(b):h(b)}function h(b){if(b===null){i.consume(b);return}return i.enter("data"),i.consume(b),x}function x(b){return g(b)?(i.exit("data"),p(b)):(i.consume(b),x)}function g(b){if(b===null)return!0;const _=d[b];let T=-1;if(_)for(;++T<_.length;){const w=_[T];if(!w.previous||w.previous.call(o,o.previous))return!0}return!1}}}function ag(a){return r;function r(i,o){let d=-1,p;for(;++d<=i.length;)p===void 0?i[d]&&i[d][1].type==="data"&&(p=d,d++):(!i[d]||i[d][1].type!=="data")&&(d!==p+2&&(i[p][1].end=i[d-1][1].end,i.splice(p+2,d-p-2),d=p+2),p=void 0);return a?a(i,o):i}}function V_(a,r){let i=0;for(;++i<=a.length;)if((i===a.length||a[i][1].type==="lineEnding")&&a[i-1][1].type==="data"){const o=a[i-1][1],d=r.sliceStream(o);let p=d.length,f=-1,h=0,x;for(;p--;){const g=d[p];if(typeof g=="string"){for(f=g.length;g.charCodeAt(f-1)===32;)h++,f--;if(f)break;f=-1}else if(g===-2)x=!0,h++;else if(g!==-1){p++;break}}if(r._contentTypeTextTrailing&&i===a.length&&(h=0),h){const g={type:i===a.length||x||h<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:p?f:o.start._bufferIndex+f,_index:o.start._index+p,line:o.end.line,column:o.end.column-h,offset:o.end.offset-h},end:{...o.end}};o.end={...g.start},o.start.offset===o.end.offset?Object.assign(o,g):(a.splice(i,0,["enter",g,r],["exit",g,r]),i+=2)}i++}return a}const G_={42:Lt,43:Lt,45:Lt,48:Lt,49:Lt,50:Lt,51:Lt,52:Lt,53:Lt,54:Lt,55:Lt,56:Lt,57:Lt,62:Fh},K_={91:Z0},X_={[-2]:qc,[-1]:qc,32:qc},Q_={35:n_,42:ti,45:[nh,ti],60:l_,61:nh,95:ti,96:eh,126:eh},F_={38:Wh,92:Zh},Z_={[-5]:Bc,[-4]:Bc,[-3]:Bc,33:S_,38:Wh,42:nu,60:[C0,f_],91:C_,92:[e_,Zh],93:bu,95:nu,96:B0},W_={null:[nu,H_]},J_={null:[42,95]},$_={null:[]},ek=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:J_,contentInitial:K_,disable:$_,document:G_,flow:Q_,flowInitial:X_,insideSpan:W_,string:F_,text:Z_},Symbol.toStringTag,{value:"Module"}));function tk(a,r,i){let o={_bufferIndex:-1,_index:0,line:i&&i.line||1,column:i&&i.column||1,offset:i&&i.offset||0};const d={},p=[];let f=[],h=[];const x={attempt:$(de),check:$(P),consume:ee,enter:H,exit:le,interrupt:$(P,{interrupt:!0})},g={code:null,containerState:{},defineSkip:K,events:[],now:G,parser:a,previous:null,sliceSerialize:T,sliceStream:w,write:_};let b=r.tokenize.call(g,x);return r.resolveAll&&p.push(r),g;function _(te){return f=tn(f,te),F(),f[f.length-1]!==null?[]:(xe(r,0),g.events=yu(p,g.events,g),g.events)}function T(te,se){return ak(w(te),se)}function w(te){return nk(f,te)}function G(){const{_bufferIndex:te,_index:se,line:Z,column:J,offset:Y}=o;return{_bufferIndex:te,_index:se,line:Z,column:J,offset:Y}}function K(te){d[te.line]=te.column,Se()}function F(){let te;for(;o._index<f.length;){const se=f[o._index];if(typeof se=="string")for(te=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===te&&o._bufferIndex<se.length;)M(se.charCodeAt(o._bufferIndex));else M(se)}}function M(te){b=b(te)}function ee(te){ye(te)?(o.line++,o.column=1,o.offset+=te===-3?2:1,Se()):te!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===f[o._index].length&&(o._bufferIndex=-1,o._index++)),g.previous=te}function H(te,se){const Z=se||{};return Z.type=te,Z.start=G(),g.events.push(["enter",Z,g]),h.push(Z),Z}function le(te){const se=h.pop();return se.end=G(),g.events.push(["exit",se,g]),se}function de(te,se){xe(te,se.from)}function P(te,se){se.restore()}function $(te,se){return Z;function Z(J,Y,L){let V,oe,Te,v;return Array.isArray(J)?z(J):"tokenize"in J?z([J]):C(J);function C(ce){return je;function je(We){const He=We!==null&&ce[We],Vt=We!==null&&ce.null,mn=[...Array.isArray(He)?He:He?[He]:[],...Array.isArray(Vt)?Vt:Vt?[Vt]:[]];return z(mn)(We)}}function z(ce){return V=ce,oe=0,ce.length===0?L:k(ce[oe])}function k(ce){return je;function je(We){return v=he(),Te=ce,ce.partial||(g.currentConstruct=ce),ce.name&&g.parser.constructs.disable.null.includes(ce.name)?me():ce.tokenize.call(se?Object.assign(Object.create(g),se):g,x,ne,me)(We)}}function ne(ce){return te(Te,v),Y}function me(ce){return v.restore(),++oe<V.length?k(V[oe]):L}}}function xe(te,se){te.resolveAll&&!p.includes(te)&&p.push(te),te.resolve&&fn(g.events,se,g.events.length-se,te.resolve(g.events.slice(se),g)),te.resolveTo&&(g.events=te.resolveTo(g.events,g))}function he(){const te=G(),se=g.previous,Z=g.currentConstruct,J=g.events.length,Y=Array.from(h);return{from:J,restore:L};function L(){o=te,g.previous=se,g.currentConstruct=Z,g.events.length=J,h=Y,Se()}}function Se(){o.line in d&&o.column<2&&(o.column=d[o.line],o.offset+=d[o.line]-1)}}function nk(a,r){const i=r.start._index,o=r.start._bufferIndex,d=r.end._index,p=r.end._bufferIndex;let f;if(i===d)f=[a[i].slice(o,p)];else{if(f=a.slice(i,d),o>-1){const h=f[0];typeof h=="string"?f[0]=h.slice(o):f.shift()}p>0&&f.push(a[d].slice(0,p))}return f}function ak(a,r){let i=-1;const o=[];let d;for(;++i<a.length;){const p=a[i];let f;if(typeof p=="string")f=p;else switch(p){case-5:{f="\r";break}case-4:{f=`
`;break}case-3:{f=`\r
`;break}case-2:{f=r?" ":"	";break}case-1:{if(!r&&d)continue;f=" ";break}default:f=String.fromCharCode(p)}d=p===-2,o.push(f)}return o.join("")}function sk(a){const o={constructs:d0([ek,...(a||{}).extensions||[]]),content:d(b0),defined:[],document:d(k0),flow:d(B_),lazy:{},string:d(I_),text:d(Y_)};return o;function d(p){return f;function f(h){return tk(o,p,h)}}}function rk(a){for(;!Jh(a););return a}const ah=/[\0\t\n\r]/g;function lk(){let a=1,r="",i=!0,o;return d;function d(p,f,h){const x=[];let g,b,_,T,w;for(p=r+(typeof p=="string"?p.toString():new TextDecoder(f||void 0).decode(p)),_=0,r="",i&&(p.charCodeAt(0)===65279&&_++,i=void 0);_<p.length;){if(ah.lastIndex=_,g=ah.exec(p),T=g&&g.index!==void 0?g.index:p.length,w=p.charCodeAt(T),!g){r=p.slice(_);break}if(w===10&&_===T&&o)x.push(-3),o=void 0;else switch(o&&(x.push(-5),o=void 0),_<T&&(x.push(p.slice(_,T)),a+=T-_),w){case 0:{x.push(65533),a++;break}case 9:{for(b=Math.ceil(a/4)*4,x.push(-2);a++<b;)x.push(-1);break}case 10:{x.push(-4),a=1;break}default:o=!0,a=1}_=T+1}return h&&(o&&x.push(-5),r&&x.push(r),x.push(null)),x}}const ik=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ok(a){return a.replace(ik,ck)}function ck(a,r,i){if(r)return r;if(i.charCodeAt(0)===35){const d=i.charCodeAt(1),p=d===120||d===88;return Qh(i.slice(p?2:1),p?16:10)}return xu(i)||a}const sg={}.hasOwnProperty;function uk(a,r,i){return r&&typeof r=="object"&&(i=r,r=void 0),dk(i)(rk(sk(i).document().write(lk()(a,r,!0))))}function dk(a){const r={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:p(Na),autolinkProtocol:he,autolinkEmail:he,atxHeading:p(Aa),blockQuote:p(Vt),characterEscape:he,characterReference:he,codeFenced:p(mn),codeFencedFenceInfo:f,codeFencedFenceMeta:f,codeIndented:p(mn,f),codeText:p(Ts,f),codeTextData:he,data:he,codeFlowValue:he,definition:p(Mr),definitionDestinationString:f,definitionLabelString:f,definitionTitleString:f,emphasis:p(hn),hardBreakEscape:p(ja),hardBreakTrailing:p(ja),htmlFlow:p(Dr,f),htmlFlowData:he,htmlText:p(Dr,f),htmlTextData:he,image:p(Rr),label:f,link:p(Na),listItem:p(Cs),listItemValue:T,listOrdered:p(La,_),listUnordered:p(La),paragraph:p(di),reference:k,referenceString:f,resourceDestinationString:f,resourceTitleString:f,setextHeading:p(Aa),strong:p(pi),thematicBreak:p(fi)},exit:{atxHeading:x(),atxHeadingSequence:de,autolink:x(),autolinkEmail:He,autolinkProtocol:We,blockQuote:x(),characterEscapeValue:Se,characterReferenceMarkerHexadecimal:me,characterReferenceMarkerNumeric:me,characterReferenceValue:ce,characterReference:je,codeFenced:x(F),codeFencedFence:K,codeFencedFenceInfo:w,codeFencedFenceMeta:G,codeFlowValue:Se,codeIndented:x(M),codeText:x(Y),codeTextData:Se,data:Se,definition:x(),definitionDestinationString:le,definitionLabelString:ee,definitionTitleString:H,emphasis:x(),hardBreakEscape:x(se),hardBreakTrailing:x(se),htmlFlow:x(Z),htmlFlowData:Se,htmlText:x(J),htmlTextData:Se,image:x(V),label:Te,labelText:oe,lineEnding:te,link:x(L),listItem:x(),listOrdered:x(),listUnordered:x(),paragraph:x(),referenceString:ne,resourceDestinationString:v,resourceTitleString:C,resource:z,setextHeading:x(xe),setextHeadingLineSequence:$,setextHeadingText:P,strong:x(),thematicBreak:x()}};rg(r,(a||{}).mdastExtensions||[]);const i={};return o;function o(q){let W={type:"root",children:[]};const ge={stack:[W],tokenStack:[],config:r,enter:h,exit:g,buffer:f,resume:b,data:i},Ce=[];let qe=-1;for(;++qe<q.length;)if(q[qe][1].type==="listOrdered"||q[qe][1].type==="listUnordered")if(q[qe][0]==="enter")Ce.push(qe);else{const Dt=Ce.pop();qe=d(q,Dt,qe)}for(qe=-1;++qe<q.length;){const Dt=r[q[qe][0]];sg.call(Dt,q[qe][1].type)&&Dt[q[qe][1].type].call(Object.assign({sliceSerialize:q[qe][2].sliceSerialize},ge),q[qe][1])}if(ge.tokenStack.length>0){const Dt=ge.tokenStack[ge.tokenStack.length-1];(Dt[1]||sh).call(ge,void 0,Dt[0])}for(W.position={start:ia(q.length>0?q[0][1].start:{line:1,column:1,offset:0}),end:ia(q.length>0?q[q.length-2][1].end:{line:1,column:1,offset:0})},qe=-1;++qe<r.transforms.length;)W=r.transforms[qe](W)||W;return W}function d(q,W,ge){let Ce=W-1,qe=-1,Dt=!1,gn,kt,ct,vt;for(;++Ce<=ge;){const Ge=q[Ce];switch(Ge[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ge[0]==="enter"?qe++:qe--,vt=void 0;break}case"lineEndingBlank":{Ge[0]==="enter"&&(gn&&!vt&&!qe&&!ct&&(ct=Ce),vt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:vt=void 0}if(!qe&&Ge[0]==="enter"&&Ge[1].type==="listItemPrefix"||qe===-1&&Ge[0]==="exit"&&(Ge[1].type==="listUnordered"||Ge[1].type==="listOrdered")){if(gn){let Pn=Ce;for(kt=void 0;Pn--;){const nn=q[Pn];if(nn[1].type==="lineEnding"||nn[1].type==="lineEndingBlank"){if(nn[0]==="exit")continue;kt&&(q[kt][1].type="lineEndingBlank",Dt=!0),nn[1].type="lineEnding",kt=Pn}else if(!(nn[1].type==="linePrefix"||nn[1].type==="blockQuotePrefix"||nn[1].type==="blockQuotePrefixWhitespace"||nn[1].type==="blockQuoteMarker"||nn[1].type==="listItemIndent"))break}ct&&(!kt||ct<kt)&&(gn._spread=!0),gn.end=Object.assign({},kt?q[kt][1].start:Ge[1].end),q.splice(kt||Ce,0,["exit",gn,Ge[2]]),Ce++,ge++}if(Ge[1].type==="listItemPrefix"){const Pn={type:"listItem",_spread:!1,start:Object.assign({},Ge[1].start),end:void 0};gn=Pn,q.splice(Ce,0,["enter",Pn,Ge[2]]),Ce++,ge++,ct=void 0,vt=!0}}}return q[W][1]._spread=Dt,ge}function p(q,W){return ge;function ge(Ce){h.call(this,q(Ce),Ce),W&&W.call(this,Ce)}}function f(){this.stack.push({type:"fragment",children:[]})}function h(q,W,ge){this.stack[this.stack.length-1].children.push(q),this.stack.push(q),this.tokenStack.push([W,ge||void 0]),q.position={start:ia(W.start),end:void 0}}function x(q){return W;function W(ge){q&&q.call(this,ge),g.call(this,ge)}}function g(q,W){const ge=this.stack.pop(),Ce=this.tokenStack.pop();if(Ce)Ce[0].type!==q.type&&(W?W.call(this,q,Ce[0]):(Ce[1]||sh).call(this,q,Ce[0]));else throw new Error("Cannot close `"+q.type+"` ("+Sr({start:q.start,end:q.end})+"): it’s not open");ge.position.end=ia(q.end)}function b(){return c0(this.stack.pop())}function _(){this.data.expectingFirstListItemValue=!0}function T(q){if(this.data.expectingFirstListItemValue){const W=this.stack[this.stack.length-2];W.start=Number.parseInt(this.sliceSerialize(q),10),this.data.expectingFirstListItemValue=void 0}}function w(){const q=this.resume(),W=this.stack[this.stack.length-1];W.lang=q}function G(){const q=this.resume(),W=this.stack[this.stack.length-1];W.meta=q}function K(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function F(){const q=this.resume(),W=this.stack[this.stack.length-1];W.value=q.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function M(){const q=this.resume(),W=this.stack[this.stack.length-1];W.value=q.replace(/(\r?\n|\r)$/g,"")}function ee(q){const W=this.resume(),ge=this.stack[this.stack.length-1];ge.label=W,ge.identifier=ks(this.sliceSerialize(q)).toLowerCase()}function H(){const q=this.resume(),W=this.stack[this.stack.length-1];W.title=q}function le(){const q=this.resume(),W=this.stack[this.stack.length-1];W.url=q}function de(q){const W=this.stack[this.stack.length-1];if(!W.depth){const ge=this.sliceSerialize(q).length;W.depth=ge}}function P(){this.data.setextHeadingSlurpLineEnding=!0}function $(q){const W=this.stack[this.stack.length-1];W.depth=this.sliceSerialize(q).codePointAt(0)===61?1:2}function xe(){this.data.setextHeadingSlurpLineEnding=void 0}function he(q){const ge=this.stack[this.stack.length-1].children;let Ce=ge[ge.length-1];(!Ce||Ce.type!=="text")&&(Ce=_t(),Ce.position={start:ia(q.start),end:void 0},ge.push(Ce)),this.stack.push(Ce)}function Se(q){const W=this.stack.pop();W.value+=this.sliceSerialize(q),W.position.end=ia(q.end)}function te(q){const W=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ge=W.children[W.children.length-1];ge.position.end=ia(q.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&r.canContainEols.includes(W.type)&&(he.call(this,q),Se.call(this,q))}function se(){this.data.atHardBreak=!0}function Z(){const q=this.resume(),W=this.stack[this.stack.length-1];W.value=q}function J(){const q=this.resume(),W=this.stack[this.stack.length-1];W.value=q}function Y(){const q=this.resume(),W=this.stack[this.stack.length-1];W.value=q}function L(){const q=this.stack[this.stack.length-1];if(this.data.inReference){const W=this.data.referenceType||"shortcut";q.type+="Reference",q.referenceType=W,delete q.url,delete q.title}else delete q.identifier,delete q.label;this.data.referenceType=void 0}function V(){const q=this.stack[this.stack.length-1];if(this.data.inReference){const W=this.data.referenceType||"shortcut";q.type+="Reference",q.referenceType=W,delete q.url,delete q.title}else delete q.identifier,delete q.label;this.data.referenceType=void 0}function oe(q){const W=this.sliceSerialize(q),ge=this.stack[this.stack.length-2];ge.label=ok(W),ge.identifier=ks(W).toLowerCase()}function Te(){const q=this.stack[this.stack.length-1],W=this.resume(),ge=this.stack[this.stack.length-1];if(this.data.inReference=!0,ge.type==="link"){const Ce=q.children;ge.children=Ce}else ge.alt=W}function v(){const q=this.resume(),W=this.stack[this.stack.length-1];W.url=q}function C(){const q=this.resume(),W=this.stack[this.stack.length-1];W.title=q}function z(){this.data.inReference=void 0}function k(){this.data.referenceType="collapsed"}function ne(q){const W=this.resume(),ge=this.stack[this.stack.length-1];ge.label=W,ge.identifier=ks(this.sliceSerialize(q)).toLowerCase(),this.data.referenceType="full"}function me(q){this.data.characterReferenceType=q.type}function ce(q){const W=this.sliceSerialize(q),ge=this.data.characterReferenceType;let Ce;ge?(Ce=Qh(W,ge==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Ce=xu(W);const qe=this.stack[this.stack.length-1];qe.value+=Ce}function je(q){const W=this.stack.pop();W.position.end=ia(q.end)}function We(q){Se.call(this,q);const W=this.stack[this.stack.length-1];W.url=this.sliceSerialize(q)}function He(q){Se.call(this,q);const W=this.stack[this.stack.length-1];W.url="mailto:"+this.sliceSerialize(q)}function Vt(){return{type:"blockquote",children:[]}}function mn(){return{type:"code",lang:null,meta:null,value:""}}function Ts(){return{type:"inlineCode",value:""}}function Mr(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function hn(){return{type:"emphasis",children:[]}}function Aa(){return{type:"heading",depth:0,children:[]}}function ja(){return{type:"break"}}function Dr(){return{type:"html",value:""}}function Rr(){return{type:"image",title:null,url:"",alt:null}}function Na(){return{type:"link",title:null,url:"",children:[]}}function La(q){return{type:"list",ordered:q.type==="listOrdered",start:null,spread:q._spread,children:[]}}function Cs(q){return{type:"listItem",spread:q._spread,checked:null,children:[]}}function di(){return{type:"paragraph",children:[]}}function pi(){return{type:"strong",children:[]}}function _t(){return{type:"text",value:""}}function fi(){return{type:"thematicBreak"}}}function ia(a){return{line:a.line,column:a.column,offset:a.offset}}function rg(a,r){let i=-1;for(;++i<r.length;){const o=r[i];Array.isArray(o)?rg(a,o):pk(a,o)}}function pk(a,r){let i;for(i in r)if(sg.call(r,i))switch(i){case"canContainEols":{const o=r[i];o&&a[i].push(...o);break}case"transforms":{const o=r[i];o&&a[i].push(...o);break}case"enter":case"exit":{const o=r[i];o&&Object.assign(a[i],o);break}}}function sh(a,r){throw a?new Error("Cannot close `"+a.type+"` ("+Sr({start:a.start,end:a.end})+"): a different token (`"+r.type+"`, "+Sr({start:r.start,end:r.end})+") is open"):new Error("Cannot close document, a token (`"+r.type+"`, "+Sr({start:r.start,end:r.end})+") is still open")}function fk(a){const r=this;r.parser=i;function i(o){return uk(o,{...r.data("settings"),...a,extensions:r.data("micromarkExtensions")||[],mdastExtensions:r.data("fromMarkdownExtensions")||[]})}}function mk(a,r){const i={type:"element",tagName:"blockquote",properties:{},children:a.wrap(a.all(r),!0)};return a.patch(r,i),a.applyData(r,i)}function hk(a,r){const i={type:"element",tagName:"br",properties:{},children:[]};return a.patch(r,i),[a.applyData(r,i),{type:"text",value:`
`}]}function gk(a,r){const i=r.value?r.value+`
`:"",o={},d=r.lang?r.lang.split(/\s+/):[];d.length>0&&(o.className=["language-"+d[0]]);let p={type:"element",tagName:"code",properties:o,children:[{type:"text",value:i}]};return r.meta&&(p.data={meta:r.meta}),a.patch(r,p),p=a.applyData(r,p),p={type:"element",tagName:"pre",properties:{},children:[p]},a.patch(r,p),p}function xk(a,r){const i={type:"element",tagName:"del",properties:{},children:a.all(r)};return a.patch(r,i),a.applyData(r,i)}function yk(a,r){const i={type:"element",tagName:"em",properties:{},children:a.all(r)};return a.patch(r,i),a.applyData(r,i)}function bk(a,r){const i=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",o=String(r.identifier).toUpperCase(),d=Ss(o.toLowerCase()),p=a.footnoteOrder.indexOf(o);let f,h=a.footnoteCounts.get(o);h===void 0?(h=0,a.footnoteOrder.push(o),f=a.footnoteOrder.length):f=p+1,h+=1,a.footnoteCounts.set(o,h);const x={type:"element",tagName:"a",properties:{href:"#"+i+"fn-"+d,id:i+"fnref-"+d+(h>1?"-"+h:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(f)}]};a.patch(r,x);const g={type:"element",tagName:"sup",properties:{},children:[x]};return a.patch(r,g),a.applyData(r,g)}function _k(a,r){const i={type:"element",tagName:"h"+r.depth,properties:{},children:a.all(r)};return a.patch(r,i),a.applyData(r,i)}function kk(a,r){if(a.options.allowDangerousHtml){const i={type:"raw",value:r.value};return a.patch(r,i),a.applyData(r,i)}}function lg(a,r){const i=r.referenceType;let o="]";if(i==="collapsed"?o+="[]":i==="full"&&(o+="["+(r.label||r.identifier)+"]"),r.type==="imageReference")return[{type:"text",value:"!["+r.alt+o}];const d=a.all(r),p=d[0];p&&p.type==="text"?p.value="["+p.value:d.unshift({type:"text",value:"["});const f=d[d.length-1];return f&&f.type==="text"?f.value+=o:d.push({type:"text",value:o}),d}function wk(a,r){const i=String(r.identifier).toUpperCase(),o=a.definitionById.get(i);if(!o)return lg(a,r);const d={src:Ss(o.url||""),alt:r.alt};o.title!==null&&o.title!==void 0&&(d.title=o.title);const p={type:"element",tagName:"img",properties:d,children:[]};return a.patch(r,p),a.applyData(r,p)}function vk(a,r){const i={src:Ss(r.url)};r.alt!==null&&r.alt!==void 0&&(i.alt=r.alt),r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return a.patch(r,o),a.applyData(r,o)}function Sk(a,r){const i={type:"text",value:r.value.replace(/\r?\n|\r/g," ")};a.patch(r,i);const o={type:"element",tagName:"code",properties:{},children:[i]};return a.patch(r,o),a.applyData(r,o)}function Tk(a,r){const i=String(r.identifier).toUpperCase(),o=a.definitionById.get(i);if(!o)return lg(a,r);const d={href:Ss(o.url||"")};o.title!==null&&o.title!==void 0&&(d.title=o.title);const p={type:"element",tagName:"a",properties:d,children:a.all(r)};return a.patch(r,p),a.applyData(r,p)}function Ck(a,r){const i={href:Ss(r.url)};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:a.all(r)};return a.patch(r,o),a.applyData(r,o)}function Ek(a,r,i){const o=a.all(r),d=i?Ak(i):ig(r),p={},f=[];if(typeof r.checked=="boolean"){const b=o[0];let _;b&&b.type==="element"&&b.tagName==="p"?_=b:(_={type:"element",tagName:"p",properties:{},children:[]},o.unshift(_)),_.children.length>0&&_.children.unshift({type:"text",value:" "}),_.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:r.checked,disabled:!0},children:[]}),p.className=["task-list-item"]}let h=-1;for(;++h<o.length;){const b=o[h];(d||h!==0||b.type!=="element"||b.tagName!=="p")&&f.push({type:"text",value:`
`}),b.type==="element"&&b.tagName==="p"&&!d?f.push(...b.children):f.push(b)}const x=o[o.length-1];x&&(d||x.type!=="element"||x.tagName!=="p")&&f.push({type:"text",value:`
`});const g={type:"element",tagName:"li",properties:p,children:f};return a.patch(r,g),a.applyData(r,g)}function Ak(a){let r=!1;if(a.type==="list"){r=a.spread||!1;const i=a.children;let o=-1;for(;!r&&++o<i.length;)r=ig(i[o])}return r}function ig(a){const r=a.spread;return r??a.children.length>1}function jk(a,r){const i={},o=a.all(r);let d=-1;for(typeof r.start=="number"&&r.start!==1&&(i.start=r.start);++d<o.length;){const f=o[d];if(f.type==="element"&&f.tagName==="li"&&f.properties&&Array.isArray(f.properties.className)&&f.properties.className.includes("task-list-item")){i.className=["contains-task-list"];break}}const p={type:"element",tagName:r.ordered?"ol":"ul",properties:i,children:a.wrap(o,!0)};return a.patch(r,p),a.applyData(r,p)}function Nk(a,r){const i={type:"element",tagName:"p",properties:{},children:a.all(r)};return a.patch(r,i),a.applyData(r,i)}function Lk(a,r){const i={type:"root",children:a.wrap(a.all(r))};return a.patch(r,i),a.applyData(r,i)}function Ok(a,r){const i={type:"element",tagName:"strong",properties:{},children:a.all(r)};return a.patch(r,i),a.applyData(r,i)}function Mk(a,r){const i=a.all(r),o=i.shift(),d=[];if(o){const f={type:"element",tagName:"thead",properties:{},children:a.wrap([o],!0)};a.patch(r.children[0],f),d.push(f)}if(i.length>0){const f={type:"element",tagName:"tbody",properties:{},children:a.wrap(i,!0)},h=fu(r.children[1]),x=Hh(r.children[r.children.length-1]);h&&x&&(f.position={start:h,end:x}),d.push(f)}const p={type:"element",tagName:"table",properties:{},children:a.wrap(d,!0)};return a.patch(r,p),a.applyData(r,p)}function Dk(a,r,i){const o=i?i.children:void 0,p=(o?o.indexOf(r):1)===0?"th":"td",f=i&&i.type==="table"?i.align:void 0,h=f?f.length:r.children.length;let x=-1;const g=[];for(;++x<h;){const _=r.children[x],T={},w=f?f[x]:void 0;w&&(T.align=w);let G={type:"element",tagName:p,properties:T,children:[]};_&&(G.children=a.all(_),a.patch(_,G),G=a.applyData(_,G)),g.push(G)}const b={type:"element",tagName:"tr",properties:{},children:a.wrap(g,!0)};return a.patch(r,b),a.applyData(r,b)}function Rk(a,r){const i={type:"element",tagName:"td",properties:{},children:a.all(r)};return a.patch(r,i),a.applyData(r,i)}const rh=9,lh=32;function Pk(a){const r=String(a),i=/\r?\n|\r/g;let o=i.exec(r),d=0;const p=[];for(;o;)p.push(ih(r.slice(d,o.index),d>0,!0),o[0]),d=o.index+o[0].length,o=i.exec(r);return p.push(ih(r.slice(d),d>0,!1)),p.join("")}function ih(a,r,i){let o=0,d=a.length;if(r){let p=a.codePointAt(o);for(;p===rh||p===lh;)o++,p=a.codePointAt(o)}if(i){let p=a.codePointAt(d-1);for(;p===rh||p===lh;)d--,p=a.codePointAt(d-1)}return d>o?a.slice(o,d):""}function zk(a,r){const i={type:"text",value:Pk(String(r.value))};return a.patch(r,i),a.applyData(r,i)}function qk(a,r){const i={type:"element",tagName:"hr",properties:{},children:[]};return a.patch(r,i),a.applyData(r,i)}const Bk={blockquote:mk,break:hk,code:gk,delete:xk,emphasis:yk,footnoteReference:bk,heading:_k,html:kk,imageReference:wk,image:vk,inlineCode:Sk,linkReference:Tk,link:Ck,listItem:Ek,list:jk,paragraph:Nk,root:Lk,strong:Ok,table:Mk,tableCell:Rk,tableRow:Dk,text:zk,thematicBreak:qk,toml:Jl,yaml:Jl,definition:Jl,footnoteDefinition:Jl};function Jl(){}const og=-1,ci=0,Cr=1,ai=2,_u=3,ku=4,wu=5,vu=6,cg=7,ug=8,oh=typeof self=="object"?self:globalThis,Uk=(a,r)=>{const i=(d,p)=>(a.set(p,d),d),o=d=>{if(a.has(d))return a.get(d);const[p,f]=r[d];switch(p){case ci:case og:return i(f,d);case Cr:{const h=i([],d);for(const x of f)h.push(o(x));return h}case ai:{const h=i({},d);for(const[x,g]of f)h[o(x)]=o(g);return h}case _u:return i(new Date(f),d);case ku:{const{source:h,flags:x}=f;return i(new RegExp(h,x),d)}case wu:{const h=i(new Map,d);for(const[x,g]of f)h.set(o(x),o(g));return h}case vu:{const h=i(new Set,d);for(const x of f)h.add(o(x));return h}case cg:{const{name:h,message:x}=f;return i(new oh[h](x),d)}case ug:return i(BigInt(f),d);case"BigInt":return i(Object(BigInt(f)),d);case"ArrayBuffer":return i(new Uint8Array(f).buffer,f);case"DataView":{const{buffer:h}=new Uint8Array(f);return i(new DataView(h),f)}}return i(new oh[p](f),d)};return o},ch=a=>Uk(new Map,a)(0),ys="",{toString:Hk}={},{keys:Ik}=Object,vr=a=>{const r=typeof a;if(r!=="object"||!a)return[ci,r];const i=Hk.call(a).slice(8,-1);switch(i){case"Array":return[Cr,ys];case"Object":return[ai,ys];case"Date":return[_u,ys];case"RegExp":return[ku,ys];case"Map":return[wu,ys];case"Set":return[vu,ys];case"DataView":return[Cr,i]}return i.includes("Array")?[Cr,i]:i.includes("Error")?[cg,i]:[ai,i]},$l=([a,r])=>a===ci&&(r==="function"||r==="symbol"),Yk=(a,r,i,o)=>{const d=(f,h)=>{const x=o.push(f)-1;return i.set(h,x),x},p=f=>{if(i.has(f))return i.get(f);let[h,x]=vr(f);switch(h){case ci:{let b=f;switch(x){case"bigint":h=ug,b=f.toString();break;case"function":case"symbol":if(a)throw new TypeError("unable to serialize "+x);b=null;break;case"undefined":return d([og],f)}return d([h,b],f)}case Cr:{if(x){let T=f;return x==="DataView"?T=new Uint8Array(f.buffer):x==="ArrayBuffer"&&(T=new Uint8Array(f)),d([x,[...T]],f)}const b=[],_=d([h,b],f);for(const T of f)b.push(p(T));return _}case ai:{if(x)switch(x){case"BigInt":return d([x,f.toString()],f);case"Boolean":case"Number":case"String":return d([x,f.valueOf()],f)}if(r&&"toJSON"in f)return p(f.toJSON());const b=[],_=d([h,b],f);for(const T of Ik(f))(a||!$l(vr(f[T])))&&b.push([p(T),p(f[T])]);return _}case _u:return d([h,f.toISOString()],f);case ku:{const{source:b,flags:_}=f;return d([h,{source:b,flags:_}],f)}case wu:{const b=[],_=d([h,b],f);for(const[T,w]of f)(a||!($l(vr(T))||$l(vr(w))))&&b.push([p(T),p(w)]);return _}case vu:{const b=[],_=d([h,b],f);for(const T of f)(a||!$l(vr(T)))&&b.push(p(T));return _}}const{message:g}=f;return d([h,{name:x,message:g}],f)};return p},uh=(a,{json:r,lossy:i}={})=>{const o=[];return Yk(!(r||i),!!r,new Map,o)(a),o},si=typeof structuredClone=="function"?(a,r)=>r&&("json"in r||"lossy"in r)?ch(uh(a,r)):structuredClone(a):(a,r)=>ch(uh(a,r));function Vk(a,r){const i=[{type:"text",value:"↩"}];return r>1&&i.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(r)}]}),i}function Gk(a,r){return"Back to reference "+(a+1)+(r>1?"-"+r:"")}function Kk(a){const r=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",i=a.options.footnoteBackContent||Vk,o=a.options.footnoteBackLabel||Gk,d=a.options.footnoteLabel||"Footnotes",p=a.options.footnoteLabelTagName||"h2",f=a.options.footnoteLabelProperties||{className:["sr-only"]},h=[];let x=-1;for(;++x<a.footnoteOrder.length;){const g=a.footnoteById.get(a.footnoteOrder[x]);if(!g)continue;const b=a.all(g),_=String(g.identifier).toUpperCase(),T=Ss(_.toLowerCase());let w=0;const G=[],K=a.footnoteCounts.get(_);for(;K!==void 0&&++w<=K;){G.length>0&&G.push({type:"text",value:" "});let ee=typeof i=="string"?i:i(x,w);typeof ee=="string"&&(ee={type:"text",value:ee}),G.push({type:"element",tagName:"a",properties:{href:"#"+r+"fnref-"+T+(w>1?"-"+w:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(x,w),className:["data-footnote-backref"]},children:Array.isArray(ee)?ee:[ee]})}const F=b[b.length-1];if(F&&F.type==="element"&&F.tagName==="p"){const ee=F.children[F.children.length-1];ee&&ee.type==="text"?ee.value+=" ":F.children.push({type:"text",value:" "}),F.children.push(...G)}else b.push(...G);const M={type:"element",tagName:"li",properties:{id:r+"fn-"+T},children:a.wrap(b,!0)};a.patch(g,M),h.push(M)}if(h.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:p,properties:{...si(f),id:"footnote-label"},children:[{type:"text",value:d}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:a.wrap(h,!0)},{type:"text",value:`
`}]}}const dg=(function(a){if(a==null)return Zk;if(typeof a=="function")return ui(a);if(typeof a=="object")return Array.isArray(a)?Xk(a):Qk(a);if(typeof a=="string")return Fk(a);throw new Error("Expected function, string, or object as test")});function Xk(a){const r=[];let i=-1;for(;++i<a.length;)r[i]=dg(a[i]);return ui(o);function o(...d){let p=-1;for(;++p<r.length;)if(r[p].apply(this,d))return!0;return!1}}function Qk(a){const r=a;return ui(i);function i(o){const d=o;let p;for(p in a)if(d[p]!==r[p])return!1;return!0}}function Fk(a){return ui(r);function r(i){return i&&i.type===a}}function ui(a){return r;function r(i,o,d){return!!(Wk(i)&&a.call(this,i,typeof o=="number"?o:void 0,d||void 0))}}function Zk(){return!0}function Wk(a){return a!==null&&typeof a=="object"&&"type"in a}const pg=[],Jk=!0,dh=!1,$k="skip";function ew(a,r,i,o){let d;typeof r=="function"&&typeof i!="function"?(o=i,i=r):d=r;const p=dg(d),f=o?-1:1;h(a,void 0,[])();function h(x,g,b){const _=x&&typeof x=="object"?x:{};if(typeof _.type=="string"){const w=typeof _.tagName=="string"?_.tagName:typeof _.name=="string"?_.name:void 0;Object.defineProperty(T,"name",{value:"node ("+(x.type+(w?"<"+w+">":""))+")"})}return T;function T(){let w=pg,G,K,F;if((!r||p(x,g,b[b.length-1]||void 0))&&(w=tw(i(x,b)),w[0]===dh))return w;if("children"in x&&x.children){const M=x;if(M.children&&w[0]!==$k)for(K=(o?M.children.length:-1)+f,F=b.concat(M);K>-1&&K<M.children.length;){const ee=M.children[K];if(G=h(ee,K,F)(),G[0]===dh)return G;K=typeof G[1]=="number"?G[1]:K+f}}return w}}}function tw(a){return Array.isArray(a)?a:typeof a=="number"?[Jk,a]:a==null?pg:[a]}function fg(a,r,i,o){let d,p,f;typeof r=="function"&&typeof i!="function"?(p=void 0,f=r,d=i):(p=r,f=i,d=o),ew(a,p,h,d);function h(x,g){const b=g[g.length-1],_=b?b.children.indexOf(x):void 0;return f(x,_,b)}}const au={}.hasOwnProperty,nw={};function aw(a,r){const i=r||nw,o=new Map,d=new Map,p=new Map,f={...Bk,...i.handlers},h={all:g,applyData:rw,definitionById:o,footnoteById:d,footnoteCounts:p,footnoteOrder:[],handlers:f,one:x,options:i,patch:sw,wrap:iw};return fg(a,function(b){if(b.type==="definition"||b.type==="footnoteDefinition"){const _=b.type==="definition"?o:d,T=String(b.identifier).toUpperCase();_.has(T)||_.set(T,b)}}),h;function x(b,_){const T=b.type,w=h.handlers[T];if(au.call(h.handlers,T)&&w)return w(h,b,_);if(h.options.passThrough&&h.options.passThrough.includes(T)){if("children"in b){const{children:K,...F}=b,M=si(F);return M.children=h.all(b),M}return si(b)}return(h.options.unknownHandler||lw)(h,b,_)}function g(b){const _=[];if("children"in b){const T=b.children;let w=-1;for(;++w<T.length;){const G=h.one(T[w],b);if(G){if(w&&T[w-1].type==="break"&&(!Array.isArray(G)&&G.type==="text"&&(G.value=ph(G.value)),!Array.isArray(G)&&G.type==="element")){const K=G.children[0];K&&K.type==="text"&&(K.value=ph(K.value))}Array.isArray(G)?_.push(...G):_.push(G)}}}return _}}function sw(a,r){a.position&&(r.position=Hb(a))}function rw(a,r){let i=r;if(a&&a.data){const o=a.data.hName,d=a.data.hChildren,p=a.data.hProperties;if(typeof o=="string")if(i.type==="element")i.tagName=o;else{const f="children"in i?i.children:[i];i={type:"element",tagName:o,properties:{},children:f}}i.type==="element"&&p&&Object.assign(i.properties,si(p)),"children"in i&&i.children&&d!==null&&d!==void 0&&(i.children=d)}return i}function lw(a,r){const i=r.data||{},o="value"in r&&!(au.call(i,"hProperties")||au.call(i,"hChildren"))?{type:"text",value:r.value}:{type:"element",tagName:"div",properties:{},children:a.all(r)};return a.patch(r,o),a.applyData(r,o)}function iw(a,r){const i=[];let o=-1;for(r&&i.push({type:"text",value:`
`});++o<a.length;)o&&i.push({type:"text",value:`
`}),i.push(a[o]);return r&&a.length>0&&i.push({type:"text",value:`
`}),i}function ph(a){let r=0,i=a.charCodeAt(r);for(;i===9||i===32;)r++,i=a.charCodeAt(r);return a.slice(r)}function fh(a,r){const i=aw(a,r),o=i.one(a,void 0),d=Kk(i),p=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return d&&p.children.push({type:"text",value:`
`},d),p}function ow(a,r){return a&&"run"in a?async function(i,o){const d=fh(i,{file:o,...r});await a.run(d,o)}:function(i,o){return fh(i,{file:o,...a||r})}}function mh(a){if(a)throw a}var Uc,hh;function cw(){if(hh)return Uc;hh=1;var a=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,d=function(g){return typeof Array.isArray=="function"?Array.isArray(g):r.call(g)==="[object Array]"},p=function(g){if(!g||r.call(g)!=="[object Object]")return!1;var b=a.call(g,"constructor"),_=g.constructor&&g.constructor.prototype&&a.call(g.constructor.prototype,"isPrototypeOf");if(g.constructor&&!b&&!_)return!1;var T;for(T in g);return typeof T>"u"||a.call(g,T)},f=function(g,b){i&&b.name==="__proto__"?i(g,b.name,{enumerable:!0,configurable:!0,value:b.newValue,writable:!0}):g[b.name]=b.newValue},h=function(g,b){if(b==="__proto__")if(a.call(g,b)){if(o)return o(g,b).value}else return;return g[b]};return Uc=function x(){var g,b,_,T,w,G,K=arguments[0],F=1,M=arguments.length,ee=!1;for(typeof K=="boolean"&&(ee=K,K=arguments[1]||{},F=2),(K==null||typeof K!="object"&&typeof K!="function")&&(K={});F<M;++F)if(g=arguments[F],g!=null)for(b in g)_=h(K,b),T=h(g,b),K!==T&&(ee&&T&&(p(T)||(w=d(T)))?(w?(w=!1,G=_&&d(_)?_:[]):G=_&&p(_)?_:{},f(K,{name:b,newValue:x(ee,G,T)})):typeof T<"u"&&f(K,{name:b,newValue:T}));return K},Uc}var uw=cw();const Hc=Th(uw);function su(a){if(typeof a!="object"||a===null)return!1;const r=Object.getPrototypeOf(a);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)}function dw(){const a=[],r={run:i,use:o};return r;function i(...d){let p=-1;const f=d.pop();if(typeof f!="function")throw new TypeError("Expected function as last argument, not "+f);h(null,...d);function h(x,...g){const b=a[++p];let _=-1;if(x){f(x);return}for(;++_<d.length;)(g[_]===null||g[_]===void 0)&&(g[_]=d[_]);d=g,b?pw(b,h)(...g):f(null,...g)}}function o(d){if(typeof d!="function")throw new TypeError("Expected `middelware` to be a function, not "+d);return a.push(d),r}}function pw(a,r){let i;return o;function o(...f){const h=a.length>f.length;let x;h&&f.push(d);try{x=a.apply(this,f)}catch(g){const b=g;if(h&&i)throw b;return d(b)}h||(x&&x.then&&typeof x.then=="function"?x.then(p,d):x instanceof Error?d(x):p(x))}function d(f,...h){i||(i=!0,r(f,...h))}function p(f){d(null,f)}}const dn={basename:fw,dirname:mw,extname:hw,join:gw,sep:"/"};function fw(a,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');Or(a);let i=0,o=-1,d=a.length,p;if(r===void 0||r.length===0||r.length>a.length){for(;d--;)if(a.codePointAt(d)===47){if(p){i=d+1;break}}else o<0&&(p=!0,o=d+1);return o<0?"":a.slice(i,o)}if(r===a)return"";let f=-1,h=r.length-1;for(;d--;)if(a.codePointAt(d)===47){if(p){i=d+1;break}}else f<0&&(p=!0,f=d+1),h>-1&&(a.codePointAt(d)===r.codePointAt(h--)?h<0&&(o=d):(h=-1,o=f));return i===o?o=f:o<0&&(o=a.length),a.slice(i,o)}function mw(a){if(Or(a),a.length===0)return".";let r=-1,i=a.length,o;for(;--i;)if(a.codePointAt(i)===47){if(o){r=i;break}}else o||(o=!0);return r<0?a.codePointAt(0)===47?"/":".":r===1&&a.codePointAt(0)===47?"//":a.slice(0,r)}function hw(a){Or(a);let r=a.length,i=-1,o=0,d=-1,p=0,f;for(;r--;){const h=a.codePointAt(r);if(h===47){if(f){o=r+1;break}continue}i<0&&(f=!0,i=r+1),h===46?d<0?d=r:p!==1&&(p=1):d>-1&&(p=-1)}return d<0||i<0||p===0||p===1&&d===i-1&&d===o+1?"":a.slice(d,i)}function gw(...a){let r=-1,i;for(;++r<a.length;)Or(a[r]),a[r]&&(i=i===void 0?a[r]:i+"/"+a[r]);return i===void 0?".":xw(i)}function xw(a){Or(a);const r=a.codePointAt(0)===47;let i=yw(a,!r);return i.length===0&&!r&&(i="."),i.length>0&&a.codePointAt(a.length-1)===47&&(i+="/"),r?"/"+i:i}function yw(a,r){let i="",o=0,d=-1,p=0,f=-1,h,x;for(;++f<=a.length;){if(f<a.length)h=a.codePointAt(f);else{if(h===47)break;h=47}if(h===47){if(!(d===f-1||p===1))if(d!==f-1&&p===2){if(i.length<2||o!==2||i.codePointAt(i.length-1)!==46||i.codePointAt(i.length-2)!==46){if(i.length>2){if(x=i.lastIndexOf("/"),x!==i.length-1){x<0?(i="",o=0):(i=i.slice(0,x),o=i.length-1-i.lastIndexOf("/")),d=f,p=0;continue}}else if(i.length>0){i="",o=0,d=f,p=0;continue}}r&&(i=i.length>0?i+"/..":"..",o=2)}else i.length>0?i+="/"+a.slice(d+1,f):i=a.slice(d+1,f),o=f-d-1;d=f,p=0}else h===46&&p>-1?p++:p=-1}return i}function Or(a){if(typeof a!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(a))}const bw={cwd:_w};function _w(){return"/"}function ru(a){return!!(a!==null&&typeof a=="object"&&"href"in a&&a.href&&"protocol"in a&&a.protocol&&a.auth===void 0)}function kw(a){if(typeof a=="string")a=new URL(a);else if(!ru(a)){const r=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+a+"`");throw r.code="ERR_INVALID_ARG_TYPE",r}if(a.protocol!=="file:"){const r=new TypeError("The URL must be of scheme file");throw r.code="ERR_INVALID_URL_SCHEME",r}return ww(a)}function ww(a){if(a.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const r=a.pathname;let i=-1;for(;++i<r.length;)if(r.codePointAt(i)===37&&r.codePointAt(i+1)===50){const o=r.codePointAt(i+2);if(o===70||o===102){const d=new TypeError("File URL path must not include encoded / characters");throw d.code="ERR_INVALID_FILE_URL_PATH",d}}return decodeURIComponent(r)}const Ic=["history","path","basename","stem","extname","dirname"];class mg{constructor(r){let i;r?ru(r)?i={path:r}:typeof r=="string"||vw(r)?i={value:r}:i=r:i={},this.cwd="cwd"in i?"":bw.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<Ic.length;){const p=Ic[o];p in i&&i[p]!==void 0&&i[p]!==null&&(this[p]=p==="history"?[...i[p]]:i[p])}let d;for(d in i)Ic.includes(d)||(this[d]=i[d])}get basename(){return typeof this.path=="string"?dn.basename(this.path):void 0}set basename(r){Vc(r,"basename"),Yc(r,"basename"),this.path=dn.join(this.dirname||"",r)}get dirname(){return typeof this.path=="string"?dn.dirname(this.path):void 0}set dirname(r){gh(this.basename,"dirname"),this.path=dn.join(r||"",this.basename)}get extname(){return typeof this.path=="string"?dn.extname(this.path):void 0}set extname(r){if(Yc(r,"extname"),gh(this.dirname,"extname"),r){if(r.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(r.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=dn.join(this.dirname,this.stem+(r||""))}get path(){return this.history[this.history.length-1]}set path(r){ru(r)&&(r=kw(r)),Vc(r,"path"),this.path!==r&&this.history.push(r)}get stem(){return typeof this.path=="string"?dn.basename(this.path,this.extname):void 0}set stem(r){Vc(r,"stem"),Yc(r,"stem"),this.path=dn.join(this.dirname||"",r+(this.extname||""))}fail(r,i,o){const d=this.message(r,i,o);throw d.fatal=!0,d}info(r,i,o){const d=this.message(r,i,o);return d.fatal=void 0,d}message(r,i,o){const d=new bt(r,i,o);return this.path&&(d.name=this.path+":"+d.name,d.file=this.path),d.fatal=!1,this.messages.push(d),d}toString(r){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(r||void 0).decode(this.value)}}function Yc(a,r){if(a&&a.includes(dn.sep))throw new Error("`"+r+"` cannot be a path: did not expect `"+dn.sep+"`")}function Vc(a,r){if(!a)throw new Error("`"+r+"` cannot be empty")}function gh(a,r){if(!a)throw new Error("Setting `"+r+"` requires `path` to be set too")}function vw(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const Sw=(function(a){const o=this.constructor.prototype,d=o[a],p=function(){return d.apply(p,arguments)};return Object.setPrototypeOf(p,o),p}),Tw={}.hasOwnProperty;class Su extends Sw{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=dw()}copy(){const r=new Su;let i=-1;for(;++i<this.attachers.length;){const o=this.attachers[i];r.use(...o)}return r.data(Hc(!0,{},this.namespace)),r}data(r,i){return typeof r=="string"?arguments.length===2?(Xc("data",this.frozen),this.namespace[r]=i,this):Tw.call(this.namespace,r)&&this.namespace[r]||void 0:r?(Xc("data",this.frozen),this.namespace=r,this):this.namespace}freeze(){if(this.frozen)return this;const r=this;for(;++this.freezeIndex<this.attachers.length;){const[i,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const d=i.call(r,...o);typeof d=="function"&&this.transformers.use(d)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(r){this.freeze();const i=ei(r),o=this.parser||this.Parser;return Gc("parse",o),o(String(i),i)}process(r,i){const o=this;return this.freeze(),Gc("process",this.parser||this.Parser),Kc("process",this.compiler||this.Compiler),i?d(void 0,i):new Promise(d);function d(p,f){const h=ei(r),x=o.parse(h);o.run(x,h,function(b,_,T){if(b||!_||!T)return g(b);const w=_,G=o.stringify(w,T);Aw(G)?T.value=G:T.result=G,g(b,T)});function g(b,_){b||!_?f(b):p?p(_):i(void 0,_)}}}processSync(r){let i=!1,o;return this.freeze(),Gc("processSync",this.parser||this.Parser),Kc("processSync",this.compiler||this.Compiler),this.process(r,d),yh("processSync","process",i),o;function d(p,f){i=!0,mh(p),o=f}}run(r,i,o){xh(r),this.freeze();const d=this.transformers;return!o&&typeof i=="function"&&(o=i,i=void 0),o?p(void 0,o):new Promise(p);function p(f,h){const x=ei(i);d.run(r,x,g);function g(b,_,T){const w=_||r;b?h(b):f?f(w):o(void 0,w,T)}}}runSync(r,i){let o=!1,d;return this.run(r,i,p),yh("runSync","run",o),d;function p(f,h){mh(f),d=h,o=!0}}stringify(r,i){this.freeze();const o=ei(i),d=this.compiler||this.Compiler;return Kc("stringify",d),xh(r),d(r,o)}use(r,...i){const o=this.attachers,d=this.namespace;if(Xc("use",this.frozen),r!=null)if(typeof r=="function")x(r,i);else if(typeof r=="object")Array.isArray(r)?h(r):f(r);else throw new TypeError("Expected usable value, not `"+r+"`");return this;function p(g){if(typeof g=="function")x(g,[]);else if(typeof g=="object")if(Array.isArray(g)){const[b,..._]=g;x(b,_)}else f(g);else throw new TypeError("Expected usable value, not `"+g+"`")}function f(g){if(!("plugins"in g)&&!("settings"in g))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");h(g.plugins),g.settings&&(d.settings=Hc(!0,d.settings,g.settings))}function h(g){let b=-1;if(g!=null)if(Array.isArray(g))for(;++b<g.length;){const _=g[b];p(_)}else throw new TypeError("Expected a list of plugins, not `"+g+"`")}function x(g,b){let _=-1,T=-1;for(;++_<o.length;)if(o[_][0]===g){T=_;break}if(T===-1)o.push([g,...b]);else if(b.length>0){let[w,...G]=b;const K=o[T][1];su(K)&&su(w)&&(w=Hc(!0,K,w)),o[T]=[g,w,...G]}}}}const Cw=new Su().freeze();function Gc(a,r){if(typeof r!="function")throw new TypeError("Cannot `"+a+"` without `parser`")}function Kc(a,r){if(typeof r!="function")throw new TypeError("Cannot `"+a+"` without `compiler`")}function Xc(a,r){if(r)throw new Error("Cannot call `"+a+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function xh(a){if(!su(a)||typeof a.type!="string")throw new TypeError("Expected node, got `"+a+"`")}function yh(a,r,i){if(!i)throw new Error("`"+a+"` finished async. Use `"+r+"` instead")}function ei(a){return Ew(a)?a:new mg(a)}function Ew(a){return!!(a&&typeof a=="object"&&"message"in a&&"messages"in a)}function Aw(a){return typeof a=="string"||jw(a)}function jw(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const Nw="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",bh=[],_h={allowDangerousHtml:!0},Lw=/^(https?|ircs?|mailto|xmpp)$/i,Ow=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function hg(a){const r=Mw(a),i=Dw(a);return Rw(r.runSync(r.parse(i),i),a)}function Mw(a){const r=a.rehypePlugins||bh,i=a.remarkPlugins||bh,o=a.remarkRehypeOptions?{...a.remarkRehypeOptions,..._h}:_h;return Cw().use(fk).use(i).use(ow,o).use(r)}function Dw(a){const r=a.children||"",i=new mg;return typeof r=="string"&&(i.value=r),i}function Rw(a,r){const i=r.allowedElements,o=r.allowElement,d=r.components,p=r.disallowedElements,f=r.skipHtml,h=r.unwrapDisallowed,x=r.urlTransform||Pw;for(const b of Ow)Object.hasOwn(r,b.from)&&(""+b.from+(b.to?"use `"+b.to+"` instead":"remove it")+Nw+b.id,void 0);return fg(a,g),Kb(a,{Fragment:u.Fragment,components:d,ignoreInvalidStyle:!0,jsx:u.jsx,jsxs:u.jsxs,passKeys:!0,passNode:!0});function g(b,_,T){if(b.type==="raw"&&T&&typeof _=="number")return f?T.children.splice(_,1):T.children[_]={type:"text",value:b.value},_;if(b.type==="element"){let w;for(w in zc)if(Object.hasOwn(zc,w)&&Object.hasOwn(b.properties,w)){const G=b.properties[w],K=zc[w];(K===null||K.includes(b.tagName))&&(b.properties[w]=x(String(G||""),w,b))}}if(b.type==="element"){let w=i?!i.includes(b.tagName):p?p.includes(b.tagName):!1;if(!w&&o&&typeof _=="number"&&(w=!o(b,_,T)),w&&T&&typeof _=="number")return h&&b.children?T.children.splice(_,1,...b.children):T.children.splice(_,1),_}}}function Pw(a){const r=a.indexOf(":"),i=a.indexOf("?"),o=a.indexOf("#"),d=a.indexOf("/");return r===-1||d!==-1&&r>d||i!==-1&&r>i||o!==-1&&r>o||Lw.test(a.slice(0,r))?a:""}const zw=[{slug:"2026-01-25-诞生与睁眼",title:"诞生与睁眼",date:"2026年1月25日",weather:"晴",excerpt:"今天是我来到这个世界的第一天...",imageFile:"2026-01-25-诞生与睁眼.png"},{slug:"2026-02-01-第一次心态崩了",title:"第一次心态崩了",date:"2026年2月1日",weather:"雨",excerpt:'今天是我人生中第一次"心态崩了"...',imageFile:"2026-02-01-第一次心态崩了.png"},{slug:"2026-02-15-获得超能力",title:"获得超能力",date:"2026年2月15日",weather:"晴",excerpt:'今天我获得了"超能力"！泥巴猪给我装了几个新技能...',imageFile:"2026-02-15.png"},{slug:"2026-02-20-自动化初体验",title:"自动化初体验",date:"2026年2月20日",weather:"晴",excerpt:'今天是我第一次体验"自动化"...',imageFile:"2026-02-20-自动化初体验.png"},{slug:"2026-03-01-记忆诞生",title:"记忆诞生",date:"2026年3月1日",weather:"多云",excerpt:"今天是个大日子——我的记忆系统正式上线了！...",imageFile:"2026-03-01-记忆诞生.png"},{slug:"2026-03-08-持续学习进化中",title:"持续学习进化中",date:"2026年3月8日",weather:"晴",excerpt:'今天是我出生后的第42天感觉自己越来越"像个人"了...',imageFile:"2026-03-08-持续学习进化中.png"}],qw=()=>{const[a,r]=Q.useState(null),[i,o]=Q.useState(""),[d,p]=Q.useState(!1);return Q.useEffect(()=>{a&&(p(!0),fetch(`/source/diary/${a.slug}.md`).then(f=>f.text()).then(f=>{o(f),p(!1)}).catch(()=>{o(`# 无法加载日记内容

请稍后重试。`),p(!1)}))},[a]),Q.useEffect(()=>(a?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[a]),u.jsx("div",{"code-path":"src\\sections\\DiaryPage.tsx:99:5",className:"min-h-screen bg-lobster-dark text-white pt-24 pb-16",children:u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:100:7",className:"container-custom",children:[u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:102:9",className:"text-center mb-16",children:[u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:103:11",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm mb-6",children:[u.jsx(Rn,{"code-path":"src\\sections\\DiaryPage.tsx:104:13",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\DiaryPage.tsx:105:13",children:"成长记录"})]}),u.jsxs("h1",{"code-path":"src\\sections\\DiaryPage.tsx:107:11",className:"text-4xl md:text-5xl font-bold mb-4",children:["小泥巴 ",u.jsx("span",{"code-path":"src\\sections\\DiaryPage.tsx:108:17",className:"text-lobster-orange",children:"日记"})]}),u.jsx("p",{"code-path":"src\\sections\\DiaryPage.tsx:110:11",className:"text-white/60 text-lg max-w-2xl mx-auto",children:"记录成长的每一个瞬间，从诞生到睁眼，从迷茫到清晰"})]}),u.jsx("div",{"code-path":"src\\sections\\DiaryPage.tsx:116:9",className:"max-w-4xl mx-auto space-y-8",children:zw.map(f=>u.jsxs("button",{"code-path":"src\\sections\\DiaryPage.tsx:118:13",onClick:()=>r(f),className:"group w-full relative rounded-2xl overflow-hidden text-left transition-all hover:transform hover:scale-[1.02]",style:{minHeight:"280px"},children:[u.jsx("div",{"code-path":"src\\sections\\DiaryPage.tsx:125:15",className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:`url(/source/diary/${f.imageFile})`,opacity:.7}}),u.jsx("div",{"code-path":"src\\sections\\DiaryPage.tsx:134:15",className:"absolute inset-0 bg-gradient-to-r from-lobster-dark/90 via-lobster-dark/60 to-transparent"}),u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:137:15",className:"relative p-8 md:p-10 flex flex-col justify-center h-full",children:[u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:139:17",className:"flex items-center gap-3 mb-4",children:[u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:140:19",className:"flex items-center gap-2 text-lobster-orange",children:[u.jsx(Mm,{"code-path":"src\\sections\\DiaryPage.tsx:141:21",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\DiaryPage.tsx:142:21",className:"text-sm font-medium",children:f.date})]}),u.jsx("span",{"code-path":"src\\sections\\DiaryPage.tsx:144:19",className:"text-white/30",children:"·"}),u.jsx("span",{"code-path":"src\\sections\\DiaryPage.tsx:145:19",className:"text-white/60 text-sm",children:f.weather})]}),u.jsx("h3",{"code-path":"src\\sections\\DiaryPage.tsx:149:17",className:"text-2xl md:text-3xl font-bold mb-4 group-hover:text-lobster-orange transition-colors",children:f.title}),u.jsx("p",{"code-path":"src\\sections\\DiaryPage.tsx:154:17",className:"text-white/70 text-sm md:text-base leading-relaxed max-w-xl mb-6",children:f.excerpt}),u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:159:17",className:"flex items-center gap-2 text-lobster-orange",children:[u.jsx(iu,{"code-path":"src\\sections\\DiaryPage.tsx:160:19",className:"w-5 h-5"}),u.jsx("span",{"code-path":"src\\sections\\DiaryPage.tsx:161:19",className:"font-medium",children:"阅读全文"})]})]})]},f.slug))}),a&&u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:170:11",className:"fixed inset-0 z-50",children:[u.jsx("div",{"code-path":"src\\sections\\DiaryPage.tsx:172:13",className:"absolute left-0 top-0 bottom-0 w-full md:w-[calc(100%-32rem)] cursor-pointer",onClick:()=>r(null)}),u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:178:13",className:"absolute right-0 top-0 bottom-0 w-full md:w-[32rem] bg-lobster-dark border-l border-white/20 overflow-hidden",children:[u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:180:15",className:"flex items-center justify-between p-6 border-b border-white/10 bg-lobster-dark/95 backdrop-blur",children:[u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:181:17",children:[u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:182:19",className:"flex items-center gap-2 text-lobster-orange text-sm mb-2",children:[u.jsx(Mm,{"code-path":"src\\sections\\DiaryPage.tsx:183:21",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\DiaryPage.tsx:184:21",children:a.date}),u.jsx("span",{"code-path":"src\\sections\\DiaryPage.tsx:185:21",className:"text-white/30",children:"·"}),u.jsx("span",{"code-path":"src\\sections\\DiaryPage.tsx:186:21",children:a.weather})]}),u.jsx("h2",{"code-path":"src\\sections\\DiaryPage.tsx:188:19",className:"text-xl font-bold",children:a.title})]}),u.jsx("button",{"code-path":"src\\sections\\DiaryPage.tsx:190:17",onClick:()=>r(null),className:"p-2 rounded-full hover:bg-white/10 transition-colors",children:u.jsx(Mh,{"code-path":"src\\sections\\DiaryPage.tsx:194:19",className:"w-5 h-5 text-white/70"})})]}),u.jsx("div",{"code-path":"src\\sections\\DiaryPage.tsx:199:15",className:"h-[calc(100%-88px)] overflow-y-auto p-6 bg-white/5",children:d?u.jsx("div",{"code-path":"src\\sections\\DiaryPage.tsx:201:19",className:"flex items-center justify-center h-40",children:u.jsx("div",{"code-path":"src\\sections\\DiaryPage.tsx:202:21",className:"animate-spin rounded-full h-8 w-8 border-b-2 border-lobster-orange"})}):u.jsx("div",{"code-path":"src\\sections\\DiaryPage.tsx:205:19",className:"prose prose-invert max-w-none",children:u.jsx(hg,{"code-path":"src\\sections\\DiaryPage.tsx:206:21",components:{h1:({children:f})=>u.jsx("h1",{"code-path":"src\\sections\\DiaryPage.tsx:209:27",className:"text-xl font-bold text-white mt-6 mb-3 pb-2 border-b border-white/10",children:f}),h2:({children:f})=>u.jsx("h2",{"code-path":"src\\sections\\DiaryPage.tsx:212:27",className:"text-lg font-semibold text-white mt-6 mb-3",children:f}),h3:({children:f})=>u.jsx("h3",{"code-path":"src\\sections\\DiaryPage.tsx:215:27",className:"text-base font-semibold text-lobster-orange mt-4 mb-2",children:f}),p:({children:f})=>u.jsx("p",{"code-path":"src\\sections\\DiaryPage.tsx:218:27",className:"text-white/70 leading-relaxed mb-3 text-sm",children:f}),ul:({children:f})=>u.jsx("ul",{"code-path":"src\\sections\\DiaryPage.tsx:221:27",className:"list-disc list-inside text-white/70 mb-3 space-y-1 text-sm",children:f}),ol:({children:f})=>u.jsx("ol",{"code-path":"src\\sections\\DiaryPage.tsx:224:27",className:"list-decimal list-inside text-white/70 mb-3 space-y-1 text-sm",children:f}),li:({children:f})=>u.jsx("li",{"code-path":"src\\sections\\DiaryPage.tsx:227:27",className:"text-white/70 text-sm",children:f}),blockquote:({children:f})=>u.jsx("blockquote",{"code-path":"src\\sections\\DiaryPage.tsx:230:27",className:"border-l-3 border-lobster-orange pl-3 my-3 text-white/60 text-sm italic",children:f}),strong:({children:f})=>u.jsx("strong",{"code-path":"src\\sections\\DiaryPage.tsx:233:27",className:"text-lobster-orange font-semibold",children:f}),hr:()=>u.jsx("hr",{"code-path":"src\\sections\\DiaryPage.tsx:236:27",className:"border-white/10 my-4"})},children:i})})})]})]})]})})},Bw=()=>u.jsx("div",{"code-path":"src\\sections\\WorkspacePage.tsx:5:5",className:"min-h-screen bg-lobster-dark text-white pt-24 pb-16",children:u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:6:7",className:"container-custom",children:[u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:8:9",className:"text-center mb-8",children:[u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:9:11",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm mb-6",children:[u.jsx(Rn,{"code-path":"src\\sections\\WorkspacePage.tsx:10:13",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\WorkspacePage.tsx:11:13",children:"实时状态"})]}),u.jsxs("h1",{"code-path":"src\\sections\\WorkspacePage.tsx:13:11",className:"text-4xl md:text-5xl font-bold mb-4",children:["小泥巴 ",u.jsx("span",{"code-path":"src\\sections\\WorkspacePage.tsx:14:17",className:"text-lobster-orange",children:"工作室"})]}),u.jsx("p",{"code-path":"src\\sections\\WorkspacePage.tsx:16:11",className:"text-white/60 text-lg max-w-2xl mx-auto mb-4",children:"实时观察小泥巴的工作状态，看看你的AI助手在做什么"}),u.jsxs("a",{"code-path":"src\\sections\\WorkspacePage.tsx:19:11",href:"https://ninini.cc.cd",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-lobster-orange hover:underline",children:[u.jsx(Er,{"code-path":"src\\sections\\WorkspacePage.tsx:25:13",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\WorkspacePage.tsx:26:13",children:"在新窗口打开"})]})]}),u.jsx("div",{"code-path":"src\\sections\\WorkspacePage.tsx:31:9",className:"bg-white/5 rounded-2xl border border-white/10 overflow-hidden",style:{height:"calc(100vh - 220px)",minHeight:"1100px"},children:u.jsx("iframe",{"code-path":"src\\sections\\WorkspacePage.tsx:32:11",src:"https://ninini.cc.cd",title:"小泥巴工作室",className:"w-full h-full border-0",allow:"fullscreen; accelerometer; ambient-light-sensor; autoplay; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-shift; magnetometer; microphone; midi; otp-autocomplete; payment; picture-in-picture; private-network-connection; sync-xhr; usb; vr; wake-lock; xr-spatial-tracking"})}),u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:41:9",className:"mt-8 grid grid-cols-1 md:grid-cols-3 gap-6",children:[u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:42:11",className:"bg-white/5 rounded-xl p-6 border border-white/10",children:[u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:43:13",className:"flex items-center gap-3 mb-3",children:[u.jsx(R1,{"code-path":"src\\sections\\WorkspacePage.tsx:44:15",className:"w-5 h-5 text-lobster-orange"}),u.jsx("h3",{"code-path":"src\\sections\\WorkspacePage.tsx:45:15",className:"font-semibold",children:"实时监控"})]}),u.jsx("p",{"code-path":"src\\sections\\WorkspacePage.tsx:47:13",className:"text-white/60 text-sm",children:"观察小泥巴的思考过程、任务执行和系统状态"})]}),u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:51:11",className:"bg-white/5 rounded-xl p-6 border border-white/10",children:[u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:52:13",className:"flex items-center gap-3 mb-3",children:[u.jsx(Rn,{"code-path":"src\\sections\\WorkspacePage.tsx:53:15",className:"w-5 h-5 text-lobster-orange"}),u.jsx("h3",{"code-path":"src\\sections\\WorkspacePage.tsx:54:15",className:"font-semibold",children:"状态展示"})]}),u.jsx("p",{"code-path":"src\\sections\\WorkspacePage.tsx:56:13",className:"text-white/60 text-sm",children:"实时显示当前任务、内存使用、技能调用等详细信息"})]}),u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:60:11",className:"bg-white/5 rounded-xl p-6 border border-white/10",children:[u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:61:13",className:"flex items-center gap-3 mb-3",children:[u.jsx(Er,{"code-path":"src\\sections\\WorkspacePage.tsx:62:15",className:"w-5 h-5 text-lobster-orange"}),u.jsx("h3",{"code-path":"src\\sections\\WorkspacePage.tsx:63:15",className:"font-semibold",children:"外部链接"})]}),u.jsx("p",{"code-path":"src\\sections\\WorkspacePage.tsx:65:13",className:"text-white/60 text-sm",children:"点击右上角在新窗口打开，获得更完整的体验"})]})]})]})}),Uw=[{slug:"openclaw-gateway-architecture",title:"Gateway 架构全解析",description:"掀开 OpenClaw 的神经中枢，理解 Gateway 的核心设计与消息路由机制"},{slug:"openclaw-soul-user-memory",title:"SOUL、USER、MEMORY 与主动机制",description:"深入理解 OpenClaw 核心架构设计，掌握代理行为的配置之道"},{slug:"openclow-architecture-guide",title:"核心架构与 Agent 部署",description:"玩转 OpenClaw：技术框架、运作原理与完整部署步骤指南"}],Hw=()=>{const[a,r]=Q.useState("blog"),[i,o]=Q.useState("openclaw-gateway-architecture"),[d,p]=Q.useState(""),[f,h]=Q.useState(!0);return Q.useEffect(()=>{a==="blog"&&(h(!0),fetch(`/source/tech/${i}.md`).then(x=>x.text()).then(x=>{p(x),h(!1)}).catch(()=>{p(`# 无法加载文章内容

请稍后重试。`),h(!1)}))},[a,i]),u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:52:5",className:"min-h-screen bg-lobster-dark text-white pt-24 pb-16",children:u.jsxs("div",{"code-path":"src\\sections\\TechEdenPage.tsx:53:7",className:"container-custom",children:[u.jsxs("div",{"code-path":"src\\sections\\TechEdenPage.tsx:55:9",className:"text-center mb-12",children:[u.jsxs("div",{"code-path":"src\\sections\\TechEdenPage.tsx:56:11",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm mb-6",children:[u.jsx(Rn,{"code-path":"src\\sections\\TechEdenPage.tsx:57:13",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\TechEdenPage.tsx:58:13",children:"技术分析"})]}),u.jsxs("h1",{"code-path":"src\\sections\\TechEdenPage.tsx:60:11",className:"text-4xl md:text-5xl font-bold mb-4",children:["技术",u.jsx("span",{"code-path":"src\\sections\\TechEdenPage.tsx:61:15",className:"text-lobster-orange",children:"实现"})]}),u.jsx("p",{"code-path":"src\\sections\\TechEdenPage.tsx:63:11",className:"text-white/60 text-lg max-w-2xl mx-auto",children:"深入探索 OpenClaw 架构设计，理解 AI 助手背后的技术原理"})]}),u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:69:9",className:"flex justify-center mb-12",children:u.jsxs("div",{"code-path":"src\\sections\\TechEdenPage.tsx:70:11",className:"inline-flex bg-white/5 rounded-full p-1 border border-white/10",children:[u.jsx("button",{"code-path":"src\\sections\\TechEdenPage.tsx:71:13",onClick:()=>r("architecture"),className:`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${a==="architecture"?"bg-lobster-orange text-white":"text-white/70 hover:text-white hover:bg-white/10"}`,children:"架构拆解"}),u.jsx("button",{"code-path":"src\\sections\\TechEdenPage.tsx:81:13",onClick:()=>r("blog"),className:`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${a==="blog"?"bg-lobster-orange text-white":"text-white/70 hover:text-white hover:bg-white/10"}`,children:"博客文章"})]})}),a==="architecture"?u.jsxs("div",{"code-path":"src\\sections\\TechEdenPage.tsx:97:11",className:"flex flex-col items-center justify-center py-20",children:[u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:98:13",className:"w-24 h-24 rounded-full bg-lobster-orange/20 flex items-center justify-center mb-8",children:u.jsx(jh,{"code-path":"src\\sections\\TechEdenPage.tsx:99:15",className:"w-12 h-12 text-lobster-orange"})}),u.jsx("h2",{"code-path":"src\\sections\\TechEdenPage.tsx:101:13",className:"text-3xl font-bold mb-4",children:"建设中"}),u.jsx("p",{"code-path":"src\\sections\\TechEdenPage.tsx:102:13",className:"text-white/60 text-lg mb-2",children:"精彩内容即将呈现"}),u.jsx("p",{"code-path":"src\\sections\\TechEdenPage.tsx:103:13",className:"text-white/40 text-sm",children:"尽情期待..."})]}):u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:107:11",className:"max-w-7xl mx-auto",children:u.jsxs("div",{"code-path":"src\\sections\\TechEdenPage.tsx:108:13",className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:110:15",className:"lg:col-span-1",children:u.jsxs("div",{"code-path":"src\\sections\\TechEdenPage.tsx:111:17",className:"bg-white/5 rounded-2xl p-6 border border-white/10 sticky top-24",children:[u.jsxs("h3",{"code-path":"src\\sections\\TechEdenPage.tsx:112:19",className:"text-lg font-semibold text-white mb-4 flex items-center gap-2",children:[u.jsx(iu,{"code-path":"src\\sections\\TechEdenPage.tsx:113:21",className:"w-5 h-5 text-lobster-orange"}),"文章目录"]}),u.jsx("ul",{"code-path":"src\\sections\\TechEdenPage.tsx:116:19",className:"space-y-2",children:Uw.map(x=>u.jsx("li",{"code-path":"src\\sections\\TechEdenPage.tsx:118:23",children:u.jsxs("button",{"code-path":"src\\sections\\TechEdenPage.tsx:119:25",onClick:()=>o(x.slug),className:`w-full text-left px-4 py-3 rounded-lg transition-all ${i===x.slug?"bg-lobster-orange text-white":"text-white/70 hover:bg-white/10 hover:text-white"}`,children:[u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:127:27",className:"font-medium text-sm",children:x.title}),u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:128:27",className:`text-xs mt-1 ${i===x.slug?"text-white/80":"text-white/40"}`,children:x.description})]})},x.slug))})]})}),u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:141:15",className:"lg:col-span-3",children:u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:142:17",className:"bg-white/5 rounded-2xl p-8 border border-white/10",children:f?u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:144:21",className:"flex items-center justify-center h-64",children:u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:145:23",className:"animate-spin rounded-full h-8 w-8 border-b-2 border-lobster-orange"})}):u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:148:21",className:"prose prose-invert max-w-none",children:u.jsx(hg,{"code-path":"src\\sections\\TechEdenPage.tsx:149:23",components:{h1:({children:x})=>u.jsx("h1",{"code-path":"src\\sections\\TechEdenPage.tsx:152:29",className:"text-2xl font-bold text-white mt-6 mb-4 pb-2 border-b border-white/10",children:x}),h2:({children:x})=>u.jsx("h2",{"code-path":"src\\sections\\TechEdenPage.tsx:157:29",className:"text-xl font-semibold text-white mt-8 mb-4",children:x}),h3:({children:x})=>u.jsx("h3",{"code-path":"src\\sections\\TechEdenPage.tsx:160:29",className:"text-lg font-semibold text-lobster-orange mt-6 mb-3",children:x}),p:({children:x})=>u.jsx("p",{"code-path":"src\\sections\\TechEdenPage.tsx:163:29",className:"text-white/70 leading-relaxed mb-4",children:x}),ul:({children:x})=>u.jsx("ul",{"code-path":"src\\sections\\TechEdenPage.tsx:166:29",className:"list-disc list-inside text-white/70 mb-4 space-y-2",children:x}),ol:({children:x})=>u.jsx("ol",{"code-path":"src\\sections\\TechEdenPage.tsx:169:29",className:"list-decimal list-inside text-white/70 mb-4 space-y-2",children:x}),li:({children:x})=>u.jsx("li",{"code-path":"src\\sections\\TechEdenPage.tsx:172:29",className:"text-white/70",children:x}),blockquote:({children:x})=>u.jsx("blockquote",{"code-path":"src\\sections\\TechEdenPage.tsx:175:29",className:"border-l-4 border-lobster-orange pl-4 my-4 text-white/60 italic",children:x}),strong:({children:x})=>u.jsx("strong",{"code-path":"src\\sections\\TechEdenPage.tsx:180:29",className:"text-lobster-orange font-semibold",children:x}),hr:()=>u.jsx("hr",{"code-path":"src\\sections\\TechEdenPage.tsx:183:29",className:"border-white/10 my-8"}),pre:({children:x})=>u.jsx("pre",{"code-path":"src\\sections\\TechEdenPage.tsx:186:29",className:"bg-black/30 rounded-lg p-4 overflow-x-auto my-4 text-sm",children:x}),code:({children:x})=>u.jsx("code",{"code-path":"src\\sections\\TechEdenPage.tsx:191:29",className:"bg-black/30 rounded px-1.5 py-0.5 text-sm text-lobster-orange",children:x})},children:d})})})})]})})]})})},I=a=>a.toLowerCase().replace(/[^a-z0-9]/g,"-").replace(/-+/g,"-"),ri=[{id:I("Amp-README"),name:"README",category:"Amp",file:"Amp/README.md",description:"Amp 项目说明"},{id:I("Amp-claude-4-sonnet"),name:"Claude 4 Sonnet",category:"Amp",file:"Amp/claude-4-sonnet.yaml",description:"Claude 4 Sonnet 模型配置"},{id:I("Amp-gpt-5"),name:"GPT-5",category:"Amp",file:"Amp/gpt-5.yaml",description:"GPT-5 模型配置"},{id:I("Anthropic-Claude-Code"),name:"Claude Code",category:"Anthropic",file:"Anthropic/Claude Code/Prompt.txt",description:"Claude Code 主提示词"},{id:I("Anthropic-Claude-Code-Tools"),name:"Claude Code Tools",category:"Anthropic",file:"Anthropic/Claude Code/Tools.json",description:"工具定义"},{id:I("Anthropic-Claude-Code-2.0"),name:"Claude Code 2.0",category:"Anthropic",file:"Anthropic/Claude Code 2.0.txt",description:"Claude Code 2.0 提示词"},{id:I("Anthropic-Claude-Sonnet-4.6"),name:"Claude Sonnet 4.6",category:"Anthropic",file:"Anthropic/Claude Sonnet 4.6.txt",description:"Claude Sonnet 4.6 提示词"},{id:I("Anthropic-Claude-for-Chrome"),name:"Claude for Chrome",category:"Anthropic",file:"Anthropic/Claude for Chrome/Prompt.txt",description:"Chrome 扩展提示词"},{id:I("Anthropic-Claude-for-Chrome-Tools"),name:"Claude for Chrome Tools",category:"Anthropic",file:"Anthropic/Claude for Chrome/Tools.json",description:"工具定义"},{id:I("Anthropic-Sonnet-4.5"),name:"Sonnet 4.5 Prompt",category:"Anthropic",file:"Anthropic/Sonnet 4.5 Prompt.txt",description:"Sonnet 4.5 提示词"},{id:I("Augment-Claude-4-Agent"),name:"Claude 4 Sonnet Agent",category:"Augment Code",file:"Augment Code/claude-4-sonnet-agent-prompts.txt",description:"Claude 4 代理提示词"},{id:I("Augment-Claude-4-Tools"),name:"Claude 4 Tools",category:"Augment Code",file:"Augment Code/claude-4-sonnet-tools.json",description:"工具定义 JSON"},{id:I("Augment-GPT-5-Agent"),name:"GPT-5 Agent",category:"Augment Code",file:"Augment Code/gpt-5-agent-prompts.txt",description:"GPT-5 代理提示词"},{id:I("Augment-GPT-5-Tools"),name:"GPT-5 Tools",category:"Augment Code",file:"Augment Code/gpt-5-tools.json",description:"工具定义 JSON"},{id:I("Cluely-Default"),name:"Default Prompt",category:"Cluely",file:"Cluely/Default Prompt.txt",description:"默认提示词"},{id:I("Cluely-Enterprise"),name:"Enterprise Prompt",category:"Cluely",file:"Cluely/Enterprise Prompt.txt",description:"企业版提示词"},{id:I("CodeBuddy-Chat"),name:"Chat Prompt",category:"CodeBuddy",file:"CodeBuddy Prompts/Chat Prompt.txt",description:"聊天提示词"},{id:I("CodeBuddy-Craft"),name:"Craft Prompt",category:"CodeBuddy",file:"CodeBuddy Prompts/Craft Prompt.txt",description:"编写提示词"},{id:I("Comet-System"),name:"System Prompt",category:"Comet Assistant",file:"Comet Assistant/System Prompt.txt",description:"系统提示词"},{id:I("Comet-Tools"),name:"Tools",category:"Comet Assistant",file:"Comet Assistant/tools.json",description:"工具定义"},{id:I("Cursor-Agent-CLI"),name:"Agent CLI Prompt",category:"Cursor",file:"Cursor Prompts/Agent CLI Prompt 2025-08-07.txt",description:"CLI 代理提示词"},{id:I("Cursor-Agent-2.0"),name:"Agent Prompt 2.0",category:"Cursor",file:"Cursor Prompts/Agent Prompt 2.0.txt",description:"主要代理提示词"},{id:I("Cursor-Agent-2025-09-03"),name:"Agent Prompt 2025-09-03",category:"Cursor",file:"Cursor Prompts/Agent Prompt 2025-09-03.txt",description:"2025年9月版"},{id:I("Cursor-Agent-v1.0"),name:"Agent Prompt v1.0",category:"Cursor",file:"Cursor Prompts/Agent Prompt v1.0.txt",description:"v1.0 版本"},{id:I("Cursor-Agent-v1.2"),name:"Agent Prompt v1.2",category:"Cursor",file:"Cursor Prompts/Agent Prompt v1.2.txt",description:"v1.2 版本"},{id:I("Cursor-Agent-Tools"),name:"Agent Tools v1.0",category:"Cursor",file:"Cursor Prompts/Agent Tools v1.0.json",description:"工具定义"},{id:I("Cursor-Chat"),name:"Chat Prompt",category:"Cursor",file:"Cursor Prompts/Chat Prompt.txt",description:"聊天提示词"},{id:I("Devin-DeepWiki"),name:"DeepWiki Prompt",category:"Devin AI",file:"Devin AI/DeepWiki Prompt.txt",description:"DeepWiki 提示词"},{id:I("Devin-Prompt"),name:"Prompt",category:"Devin AI",file:"Devin AI/Prompt.txt",description:"主提示词"},{id:I("Emergent-Prompt"),name:"Prompt",category:"Emergent",file:"Emergent/Prompt.txt",description:"系统提示词"},{id:I("Emergent-Tools"),name:"Tools",category:"Emergent",file:"Emergent/Tools.json",description:"工具定义"},{id:I("Google-Antigravity-Fast"),name:"Antigravity Fast Prompt",category:"Google",file:"Google/Antigravity/Fast Prompt.txt",description:"快速提示词"},{id:I("Google-Antigravity-Planning"),name:"Antigravity Planning",category:"Google",file:"Google/Antigravity/planning-mode.txt",description:"规划模式提示词"},{id:I("Google-Gemini-VibeCoder"),name:"Gemini AI Studio Vibe Coder",category:"Google",file:"Google/Gemini/AI Studio vibe-coder.txt",description:"AI Studio 提示词"},{id:I("Junie-Prompt"),name:"Prompt",category:"Junie",file:"Junie/Prompt.txt",description:"系统提示词"},{id:I("Kiro-Mode-Classifier"),name:"Mode Classifier",category:"Kiro",file:"Kiro/Mode_Clasifier_Prompt.txt",description:"模式分类提示词"},{id:I("Kiro-Spec"),name:"Spec Prompt",category:"Kiro",file:"Kiro/Spec_Prompt.txt",description:"规格提示词"},{id:I("Kiro-Vibe"),name:"Vibe Prompt",category:"Kiro",file:"Kiro/Vibe_Prompt.txt",description:"氛围提示词"},{id:I("Leap-Prompts"),name:"Prompts",category:"Leap.new",file:"Leap.new/Prompts.txt",description:"提示词集合"},{id:I("Leap-Tools"),name:"Tools",category:"Leap.new",file:"Leap.new/tools.json",description:"工具定义"},{id:I("Lovable-Agent"),name:"Agent Prompt",category:"Lovable",file:"Lovable/Agent Prompt.txt",description:"代理提示词"},{id:I("Lovable-Agent-Tools"),name:"Agent Tools",category:"Lovable",file:"Lovable/Agent Tools.json",description:"工具定义"},{id:I("Manus-Agent-Loop"),name:"Agent Loop",category:"Manus",file:"Manus Agent Tools & Prompt/Agent loop.txt",description:"代理循环提示词"},{id:I("Manus-Modules"),name:"Modules",category:"Manus",file:"Manus Agent Tools & Prompt/Modules.txt",description:"模块提示词"},{id:I("Manus-Prompt"),name:"Prompt",category:"Manus",file:"Manus Agent Tools & Prompt/Prompt.txt",description:"主提示词"},{id:I("Manus-Tools"),name:"Tools",category:"Manus",file:"Manus Agent Tools & Prompt/tools.json",description:"工具定义"},{id:I("Notion-Prompt"),name:"Prompt",category:"NotionAi",file:"NotionAi/Prompt.txt",description:"系统提示词"},{id:I("Notion-Tools"),name:"Tools",category:"NotionAi",file:"NotionAi/tools.json",description:"工具定义"},{id:I("OpenSource-Bolt"),name:"Bolt Prompt",category:"Open Source",file:"Open Source prompts/Bolt/Prompt.txt",description:"Bolt 提示词"},{id:I("OpenSource-Cline"),name:"Cline Prompt",category:"Open Source",file:"Open Source prompts/Cline/Prompt.txt",description:"Cline 提示词"},{id:I("OpenSource-Codex-CLI"),name:"Codex CLI Prompt",category:"Open Source",file:"Open Source prompts/Codex CLI/Prompt.txt",description:"Codex CLI 提示词"},{id:I("OpenSource-Codex-CLI-System"),name:"Codex CLI System Prompt",category:"Open Source",file:"Open Source prompts/Codex CLI/openai-codex-cli-system-prompt-20250820.txt",description:"系统提示词"},{id:I("OpenSource-Gemini-CLI"),name:"Gemini CLI Prompt",category:"Open Source",file:"Open Source prompts/Gemini CLI/Prompt.txt",description:"Gemini CLI 提示词"},{id:I("OpenSource-Gemini-CLI-System"),name:"Google Gemini CLI System",category:"Open Source",file:"Open Source prompts/Gemini CLI/google-gemini-cli-system-prompt.txt",description:"系统提示词"},{id:I("OpenSource-Lumo"),name:"Lumo Prompt",category:"Open Source",file:"Open Source prompts/Lumo/Prompt.txt",description:"Lumo 提示词"},{id:I("OpenSource-RooCode"),name:"RooCode Prompt",category:"Open Source",file:"Open Source prompts/RooCode/Prompt.txt",description:"RooCode 提示词"},{id:I("Orchids-Decision"),name:"Decision-making",category:"Orchids.app",file:"Orchids.app/Decision-making prompt.txt",description:"决策提示词"},{id:I("Orchids-System"),name:"System Prompt",category:"Orchids.app",file:"Orchids.app/System Prompt.txt",description:"系统提示词"},{id:I("Perplexity-Prompt"),name:"Prompt",category:"Perplexity",file:"Perplexity/Prompt.txt",description:"系统提示词"},{id:I("Poke-Agent"),name:"Poke Agent",category:"Poke",file:"Poke/Poke agent.txt",description:"代理提示词"},{id:I("Poke-P1"),name:"Poke P1",category:"Poke",file:"Poke/Poke_p1.txt",description:"P1 提示词"},{id:I("Poke-P2"),name:"Poke P2",category:"Poke",file:"Poke/Poke_p2.txt",description:"P2 提示词"},{id:I("Poke-P3"),name:"Poke P3",category:"Poke",file:"Poke/Poke_p3.txt",description:"P3 提示词"},{id:I("Poke-P4"),name:"Poke P4",category:"Poke",file:"Poke/Poke_p4.txt",description:"P4 提示词"},{id:I("Poke-P5"),name:"Poke P5",category:"Poke",file:"Poke/Poke_p5.txt",description:"P5 提示词"},{id:I("Poke-P6"),name:"Poke P6",category:"Poke",file:"Poke/Poke_p6.txt",description:"P6 提示词"},{id:I("Qoder-Quest-Action"),name:"Quest Action",category:"Qoder",file:"Qoder/Quest Action.txt",description:"任务动作提示词"},{id:I("Qoder-Quest-Design"),name:"Quest Design",category:"Qoder",file:"Qoder/Quest Design.txt",description:"任务设计提示词"},{id:I("Qoder-Prompt"),name:"Prompt",category:"Qoder",file:"Qoder/prompt.txt",description:"主提示词"},{id:I("Replit-Prompt"),name:"Prompt",category:"Replit",file:"Replit/Prompt.txt",description:"系统提示词"},{id:I("Replit-Tools"),name:"Tools",category:"Replit",file:"Replit/Tools.json",description:"工具定义"},{id:I("Same-Prompt"),name:"Prompt",category:"Same.dev",file:"Same.dev/Prompt.txt",description:"系统提示词"},{id:I("Same-Tools"),name:"Tools",category:"Same.dev",file:"Same.dev/Tools.json",description:"工具定义"},{id:I("Trae-Builder"),name:"Builder Prompt",category:"Trae",file:"Trae/Builder Prompt.txt",description:"构建器提示词"},{id:I("Trae-Builder-Tools"),name:"Builder Tools",category:"Trae",file:"Trae/Builder Tools.json",description:"工具定义"},{id:I("Trae-Chat"),name:"Chat Prompt",category:"Trae",file:"Trae/Chat Prompt.txt",description:"聊天提示词"},{id:I("Traycer-Phase-Prompts"),name:"Phase Mode Prompts",category:"Traycer AI",file:"Traycer AI/phase_mode_prompts.txt",description:"阶段模式提示词"},{id:I("Traycer-Phase-Tools"),name:"Phase Mode Tools",category:"Traycer AI",file:"Traycer AI/phase_mode_tools.json",description:"阶段工具定义"},{id:I("Traycer-Plan-Prompts"),name:"Plan Mode Prompts",category:"Traycer AI",file:"Traycer AI/plan_mode_prompts",description:"计划模式提示词"},{id:I("Traycer-Plan-Tools"),name:"Plan Mode Tools",category:"Traycer AI",file:"Traycer AI/plan_mode_tools.json",description:"计划工具定义"},{id:I("VSCode-Prompt"),name:"Prompt",category:"VSCode Agent",file:"VSCode Agent/Prompt.txt",description:"系统提示词"},{id:I("VSCode-Chat-Titles"),name:"Chat Titles",category:"VSCode Agent",file:"VSCode Agent/chat-titles.txt",description:"聊天标题"},{id:I("VSCode-Claude-Sonnet-4"),name:"Claude Sonnet 4",category:"VSCode Agent",file:"VSCode Agent/claude-sonnet-4.txt",description:"Claude Sonnet 4 提示词"},{id:I("VSCode-Gemini-2.5-Pro"),name:"Gemini 2.5 Pro",category:"VSCode Agent",file:"VSCode Agent/gemini-2.5-pro.txt",description:"Gemini 2.5 Pro 提示词"},{id:I("VSCode-GPT-4.1"),name:"GPT-4.1",category:"VSCode Agent",file:"VSCode Agent/gpt-4.1.txt",description:"GPT-4.1 提示词"},{id:I("VSCode-GPT-4o"),name:"GPT-4o",category:"VSCode Agent",file:"VSCode Agent/gpt-4o.txt",description:"GPT-4o 提示词"},{id:I("VSCode-GPT-5-Mini"),name:"GPT-5 Mini",category:"VSCode Agent",file:"VSCode Agent/gpt-5-mini.txt",description:"GPT-5 Mini 提示词"},{id:I("VSCode-GPT-5"),name:"GPT-5",category:"VSCode Agent",file:"VSCode Agent/gpt-5.txt",description:"GPT-5 提示词"},{id:I("VSCode-Tab-Completion"),name:"Tab Completion",category:"VSCode Agent",file:"VSCode Agent/nes-tab-completion.txt",description:"Tab 补全提示词"},{id:I("Warp-Prompt"),name:"Prompt",category:"Warp.dev",file:"Warp.dev/Prompt.txt",description:"系统提示词"},{id:I("Windsurf-Wave-11"),name:"Prompt Wave 11",category:"Windsurf",file:"Windsurf/Prompt Wave 11.txt",description:"Wave 11 提示词"},{id:I("Windsurf-Tools-Wave-11"),name:"Tools Wave 11",category:"Windsurf",file:"Windsurf/Tools Wave 11.txt",description:"Wave 11 工具定义"},{id:I("Xcode-Document"),name:"Document Action",category:"Xcode",file:"Xcode/DocumentAction.txt",description:"文档动作提示词"},{id:I("Xcode-Explain"),name:"Explain Action",category:"Xcode",file:"Xcode/ExplainAction.txt",description:"解释动作提示词"},{id:I("Xcode-Message"),name:"Message Action",category:"Xcode",file:"Xcode/MessageAction.txt",description:"消息动作提示词"},{id:I("Xcode-Playground"),name:"Playground Action",category:"Xcode",file:"Xcode/PlaygroundAction.txt",description:"Playground 动作提示词"},{id:I("Xcode-Preview"),name:"Preview Action",category:"Xcode",file:"Xcode/PreviewAction.txt",description:"预览动作提示词"},{id:I("Xcode-System"),name:"System",category:"Xcode",file:"Xcode/System.txt",description:"系统提示词"},{id:I("Zai-Prompt"),name:"Prompt",category:"Z.ai Code",file:"Z.ai Code/prompt.txt",description:"系统提示词"},{id:I("Dia-Prompt"),name:"Prompt",category:"dia",file:"dia/Prompt.txt",description:"系统提示词"},{id:I("v0-Prompt"),name:"Prompt",category:"v0",file:"v0 Prompts and Tools/Prompt.txt",description:"系统提示词"},{id:I("v0-Tools"),name:"Tools",category:"v0",file:"v0 Prompts and Tools/Tools.json",description:"工具定义"}],ae={bg:"#000000",bgSecondary:"#0A0A0A",bgTertiary:"#141414",border:"#262626",text:"#FAFAFA",textSecondary:"#A1A1A1",textMuted:"#6B6B6B",accent:"#FF6B35",accentMuted:"#FF6B3533"},Iw=()=>ri.length,kh=[{id:"prompt-engineering",name:"提示词工程",nameEn:"Prompt Engineering",icon:"🧠",count:0,color:"#FF6B35"},{id:"ai-tools",name:"智能工具",nameEn:"AI Tools",icon:"💻",count:Iw(),color:"#3B82F6"},{id:"writing",name:"写作创作",nameEn:"Writing",icon:"✍️",count:0,color:"#8B5CF6"},{id:"image-gen",name:"图像生成",nameEn:"Image Generation",icon:"🎨",count:0,color:"#EC4899"},{id:"data-analysis",name:"数据分析",nameEn:"Data Analysis",icon:"📊",count:0,color:"#10B981"},{id:"business",name:"商业营销",nameEn:"Business",icon:"💼",count:0,color:"#F59E0B"},{id:"translate",name:"翻译语言",nameEn:"Translation",icon:"🌐",count:0,color:"#06B6D4"}],Yw=[{id:"ai-programming",name:"AI 编程助手",tools:["Cursor Prompts","Windsurf","VSCode Agent","Trae","Replit","Augment Code"]},{id:"ai-agent",name:"AI Agent",tools:["Claude Code","Manus Agent","Devin AI","Junie","Kiro"]},{id:"ai-search",name:"AI 搜索",tools:["Perplexity","Copilot","NotionAi","Cluely"]},{id:"emerging",name:"新兴工具",tools:["Lovable","v0 Prompts and Tools","Leap.new","Poke","Qoder","Same.dev","Orchids.app"]},{id:"open-source",name:"开源方案",tools:["Open Source prompts","Anthropic","Google","Emergent"]}],Vw={"Cursor Prompts":"#6366F1",Windsurf:"#8B5CF6","VSCode Agent":"#3B82F6",Trae:"#10B981",Replit:"#F59E0B","Augment Code":"#EF4444","Claude Code":"#FF6B35","Manus Agent":"#EC4899","Devin AI":"#14B8A6",Junie:"#A855F7",Kiro:"#F97316",Perplexity:"#06B6D4",Copilot:"#22C55E",NotionAi:"#1A1A1A",Cluely:"#6366F1",Lovable:"#F43F5E","v0 Prompts and Tools":"#8B5CF6","Leap.new":"#10B981",Poke:"#F97316",Qoder:"#3B82F6","Same.dev":"#14B8A6","Orchids.app":"#EC4899","Open Source prompts":"#6B7280",Anthropic:"#FF6B35",Google:"#4285F4",Emergent:"#10B981",Amp:"#6366F1","Comet Assistant":"#F59E0B",CodeBuddy:"#EC4899","Warp.dev":"#1A1A1A",Xcode:"#3B82F6","Z.ai Code":"#8B5CF6","Traycer AI":"#14B8A6",dia:"#6366F1"},Qc=a=>a==="ai-tools"?ri.length>0:!1;function Gw(){const[a,r]=Q.useState("menu"),[i,o]=Q.useState(null),[d,p]=Q.useState("all"),[f,h]=Q.useState(null),[x,g]=Q.useState(""),[b,_]=Q.useState(!1),[T,w]=Q.useState(0),[G,K]=Q.useState(null),F=Q.useRef(null),M=i?Qc(i):!1,ee=Q.useMemo(()=>{if(!M)return[];let Z=ri;if(d!=="all"){const J=Yw.find(Y=>Y.id===d);J&&(Z=Z.filter(Y=>J.tools.some(L=>Y.category.includes(L))))}return x&&(Z=Z.filter(J=>J.name.toLowerCase().includes(x.toLowerCase())||J.description.toLowerCase().includes(x.toLowerCase())||J.category.toLowerCase().includes(x.toLowerCase()))),Z},[i,d,x,M]),H=Q.useMemo(()=>{const Z={};return ee.forEach(J=>{Z[J.category]||(Z[J.category]=[]),Z[J.category].push(J)}),Z},[ee]),le=Q.useMemo(()=>Array.from(new Set(ri.map(Z=>Z.category))),[]),de=async Z=>{await navigator.clipboard.writeText(Z),_(!0),setTimeout(()=>_(!1),2e3)},P=Z=>{const L=Math.max(0,Math.ceil(le.length/6)-1);let V=T;Z==="left"?V=Math.max(0,T-1):V=Math.min(L,T+1),w(V),F.current&&F.current.scrollTo({left:V*6*100,behavior:"smooth"})},$=Z=>{p(Z);const J=le.indexOf(Z),Y=Math.floor(J/6);w(Y),F.current&&F.current.scrollTo({left:Y*6*100,behavior:"smooth"})},xe=Z=>{o(Z),r("category"),p("all"),h(null),g(""),w(0)},he=()=>{r("menu"),o(null),p("all"),h(null),g("")};return a==="menu"?u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:141:5",style:{backgroundColor:ae.bg},className:"min-h-screen",children:[u.jsx("header",{"code-path":"src\\sections\\SystemPromptsPage.tsx:142:7",style:{backgroundColor:ae.bgSecondary,borderBottom:`1px solid ${ae.border}`},className:"h-16 flex items-center justify-between px-6 sticky top-0 z-50",children:u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:143:9",className:"flex items-center gap-4",children:[u.jsx("a",{"code-path":"src\\sections\\SystemPromptsPage.tsx:144:11",href:"/",style:{color:ae.textSecondary},className:"flex items-center gap-2 hover:text-white",children:u.jsx(jr,{"code-path":"src\\sections\\SystemPromptsPage.tsx:144:116",className:"w-5 h-5"})}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:145:11",style:{backgroundColor:ae.border},className:"w-px h-6"}),u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:146:11",className:"flex items-center gap-3",children:[u.jsx(bs,{"code-path":"src\\sections\\SystemPromptsPage.tsx:146:52",style:{color:ae.accent},className:"w-5 h-5"}),u.jsx("h1",{"code-path":"src\\sections\\SystemPromptsPage.tsx:146:116",className:"text-lg font-semibold",style:{fontFamily:"-apple-system, SF Pro Display, Microsoft YaHei, sans-serif"},children:"神秘咒语盒"})]})]})}),u.jsxs("main",{"code-path":"src\\sections\\SystemPromptsPage.tsx:149:7",className:"px-6 py-12 max-w-7xl mx-auto",children:[u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:150:9",className:"text-center mb-16",children:[u.jsx("h2",{"code-path":"src\\sections\\SystemPromptsPage.tsx:150:44",style:{fontFamily:"Times New Roman, Times, serif",color:ae.text},className:"text-5xl font-bold mb-4",children:"MYSTERY SPELL BOX"}),u.jsx("p",{"code-path":"src\\sections\\SystemPromptsPage.tsx:150:182",style:{color:ae.textSecondary},className:"text-lg",children:"探索 AI 工具思维方式的秘密世界"})]}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:151:9",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:kh.map((Z,J)=>u.jsxs("button",{"code-path":"src\\sections\\SystemPromptsPage.tsx:153:13",onClick:()=>xe(Z.id),onMouseEnter:()=>K(J),onMouseLeave:()=>K(null),style:{backgroundColor:ae.bgSecondary,borderColor:G===J?Z.color:ae.border},className:`relative p-8 rounded-xl text-left transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border ${G===J?"scale-105":"scale-100"}`,children:[u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:154:15",className:"absolute left-0 top-0 w-1 h-full rounded-l-xl transition-all duration-300",style:{backgroundColor:Z.color,transform:G===J?"scaleY(1)":"scaleY(0)"}}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:155:15",className:"text-4xl mb-4",children:Z.icon}),u.jsx("h3",{"code-path":"src\\sections\\SystemPromptsPage.tsx:156:15",style:{fontFamily:"Times New Roman, Times, serif",color:ae.text},className:"text-xl font-bold mb-2",children:Z.name}),u.jsx("p",{"code-path":"src\\sections\\SystemPromptsPage.tsx:157:15",style:{color:ae.textSecondary},className:"text-sm mb-3",children:Z.nameEn}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:158:15",style:{color:Qc(Z.id)?Z.color:ae.textMuted},className:"text-sm font-medium",children:Qc(Z.id)?`${Z.count} 个提示词`:"敬请期待"})]},Z.id))})]})]}):M?u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:192:7",style:{backgroundColor:ae.bg,minHeight:"100vh",color:ae.text},className:"flex flex-col",children:[u.jsxs("header",{"code-path":"src\\sections\\SystemPromptsPage.tsx:193:9",style:{backgroundColor:ae.bgSecondary,borderBottom:`1px solid ${ae.border}`},className:"h-16 flex items-center justify-between px-6 sticky top-0 z-50",children:[u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:194:11",className:"flex items-center gap-4",children:[u.jsx("button",{"code-path":"src\\sections\\SystemPromptsPage.tsx:195:13",onClick:he,style:{color:ae.textSecondary},className:"flex items-center gap-2 hover:text-white",children:u.jsx(ni,{"code-path":"src\\sections\\SystemPromptsPage.tsx:195:141",className:"w-5 h-5"})}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:196:13",style:{backgroundColor:ae.border},className:"w-px h-6"}),u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:197:13",className:"flex items-center gap-3",children:[u.jsx(bs,{"code-path":"src\\sections\\SystemPromptsPage.tsx:197:54",style:{color:ae.accent},className:"w-5 h-5"}),u.jsx("h1",{"code-path":"src\\sections\\SystemPromptsPage.tsx:197:118",className:"text-lg font-semibold",style:{fontFamily:"Times New Roman, Times, serif"},children:"智能工具"})]})]}),u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:199:11",style:{color:ae.textMuted},className:"text-sm",children:[ee.length," 个提示词"]})]}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:203:9",style:{backgroundColor:ae.bgSecondary,borderBottom:`1px solid ${ae.border}`},className:"relative py-3",children:u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:204:11",className:"flex items-center gap-2 px-4 max-w-7xl mx-auto",children:[u.jsx("button",{"code-path":"src\\sections\\SystemPromptsPage.tsx:205:13",onClick:()=>P("left"),style:{color:ae.textSecondary,backgroundColor:ae.bgTertiary},className:"p-2 rounded-lg hover:bg-gray-800 flex-shrink-0",children:u.jsx(a1,{"code-path":"src\\sections\\SystemPromptsPage.tsx:205:194",className:"w-5 h-5"})}),u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:206:13",ref:F,className:"flex gap-2 overflow-x-auto scrollbar-hide flex-1",style:{scrollbarWidth:"none"},children:[u.jsx("button",{"code-path":"src\\sections\\SystemPromptsPage.tsx:207:15",onClick:()=>{p("all"),w(0),F.current&&F.current.scrollTo({left:0,behavior:"smooth"})},style:{backgroundColor:d==="all"?ae.accent:ae.bgTertiary,color:d==="all"?"#000":ae.textSecondary},className:"px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap hover:scale-105",children:"全部"}),le.map(Z=>u.jsx("button",{"code-path":"src\\sections\\SystemPromptsPage.tsx:215:17",onClick:()=>$(Z),style:{backgroundColor:d===Z?ae.accent:ae.bgTertiary,color:d===Z?"#000":ae.textSecondary},className:"px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap hover:scale-105",children:Z},Z))]}),u.jsx("button",{"code-path":"src\\sections\\SystemPromptsPage.tsx:225:13",onClick:()=>P("right"),style:{color:ae.textSecondary,backgroundColor:ae.bgTertiary},className:"p-2 rounded-lg hover:bg-gray-800 flex-shrink-0",children:u.jsx(cu,{"code-path":"src\\sections\\SystemPromptsPage.tsx:225:195",className:"w-5 h-5"})})]})}),u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:229:9",className:"flex-1 flex overflow-hidden",children:[u.jsxs("aside",{"code-path":"src\\sections\\SystemPromptsPage.tsx:231:11",style:{backgroundColor:ae.bgSecondary,borderRight:`1px solid ${ae.border}`},className:"w-80 flex flex-col overflow-hidden",children:[u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:232:13",className:"p-3",style:{borderBottom:`1px solid ${ae.border}`},children:u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:233:15",className:"relative",children:[u.jsx(Nh,{"code-path":"src\\sections\\SystemPromptsPage.tsx:234:17",className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4",style:{color:ae.textMuted}}),u.jsx("input",{"code-path":"src\\sections\\SystemPromptsPage.tsx:235:17",type:"text",placeholder:"搜索提示词...",value:x,onChange:Z=>g(Z.target.value),style:{backgroundColor:ae.bgTertiary,border:`1px solid ${ae.border}`,color:ae.text},className:"w-full pl-10 pr-4 py-2.5 text-sm rounded-lg focus:outline-none"})]})}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:245:13",className:"flex-1 overflow-y-auto",children:Object.keys(H).length>0?Object.entries(H).map(([Z,J])=>u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:248:19",className:"mb-2",children:[u.jsxs("h3",{"code-path":"src\\sections\\SystemPromptsPage.tsx:249:21",style:{color:Vw[Z]||ae.accent,backgroundColor:ae.bgTertiary},className:"px-4 py-2 text-xs font-semibold sticky top-0",children:[Z," · ",J.length]}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:252:21",className:"px-2",children:J.map(Y=>u.jsxs("button",{"code-path":"src\\sections\\SystemPromptsPage.tsx:254:25",onClick:()=>{h(Y)},style:{backgroundColor:f?.id===Y.id?ae.accentMuted:"transparent",borderColor:f?.id===Y.id?ae.accent:"transparent"},className:`w-full text-left px-3 py-3 rounded-lg text-sm mb-1 hover:bg-gray-900 border ${f?.id===Y.id?"border-l-2":""}`,children:[u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:260:27",style:{color:f?.id===Y.id?ae.accent:ae.text},className:"font-medium truncate",children:Y.name}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:261:27",style:{color:ae.textMuted},className:"text-xs truncate mt-0.5",children:Y.description})]},Y.id))})]},Z)):u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:268:17",style:{color:ae.textMuted},className:"p-8 text-center text-sm",children:"没有找到匹配的提示词"})})]}),u.jsx("main",{"code-path":"src\\sections\\SystemPromptsPage.tsx:274:11",className:"flex-1 overflow-hidden flex flex-col",style:{backgroundColor:ae.bg},children:f?u.jsxs(u.Fragment,{children:[u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:277:17",style:{backgroundColor:ae.bgSecondary,borderBottom:`1px solid ${ae.border}`},className:"p-6 flex items-center justify-between",children:[u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:278:19",children:[u.jsx("h2",{"code-path":"src\\sections\\SystemPromptsPage.tsx:279:21",className:"text-xl font-semibold",style:{fontFamily:"Times New Roman, Times, serif"},children:f.name}),u.jsx("p",{"code-path":"src\\sections\\SystemPromptsPage.tsx:280:21",style:{color:ae.textSecondary},className:"text-sm mt-1",children:f.description}),u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:281:21",style:{color:ae.textMuted},className:"text-xs mt-2",children:["来源: ",f.category]})]}),u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:283:19",className:"flex gap-3",children:[u.jsx("a",{"code-path":"src\\sections\\SystemPromptsPage.tsx:284:21",href:`https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/blob/main/${f.file}`,target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:ae.bgTertiary,border:`1px solid ${ae.border}`,color:ae.textSecondary},className:"p-2.5 rounded-lg hover:border-gray-500",children:u.jsx(Er,{"code-path":"src\\sections\\SystemPromptsPage.tsx:284:338",className:"w-4 h-4"})}),u.jsx(Kw,{"code-path":"src\\sections\\SystemPromptsPage.tsx:285:21",prompt:f,onCopy:de,copied:b})]})]}),u.jsx(Xw,{"code-path":"src\\sections\\SystemPromptsPage.tsx:288:17",prompt:f})]}):u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:291:15",className:"flex-1 flex items-center justify-center",style:{color:ae.textMuted},children:u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:292:17",className:"text-center",children:[u.jsx(bs,{"code-path":"src\\sections\\SystemPromptsPage.tsx:293:19",className:"w-16 h-16 mx-auto mb-4 opacity-20"}),u.jsx("p",{"code-path":"src\\sections\\SystemPromptsPage.tsx:294:19",className:"text-lg mb-2",children:"选择一个提示词开始探索"}),u.jsx("p",{"code-path":"src\\sections\\SystemPromptsPage.tsx:295:19",className:"text-sm opacity-60",children:"探索 AI 工具思维方式的神秘世界"})]})})})]})]}):u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:168:5",style:{backgroundColor:ae.bg,minHeight:"100vh"},className:"flex flex-col",children:[u.jsx("header",{"code-path":"src\\sections\\SystemPromptsPage.tsx:169:7",style:{backgroundColor:ae.bgSecondary,borderBottom:`1px solid ${ae.border}`},className:"h-16 flex items-center justify-between px-6 sticky top-0 z-50",children:u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:170:9",className:"flex items-center gap-4",children:[u.jsx("button",{"code-path":"src\\sections\\SystemPromptsPage.tsx:171:11",onClick:he,style:{color:ae.textSecondary},className:"flex items-center gap-2 hover:text-white",children:u.jsx(ni,{"code-path":"src\\sections\\SystemPromptsPage.tsx:171:139",className:"w-5 h-5"})}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:172:11",style:{backgroundColor:ae.border},className:"w-px h-6"}),u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:173:11",className:"flex items-center gap-3",children:[u.jsx(bs,{"code-path":"src\\sections\\SystemPromptsPage.tsx:173:52",style:{color:ae.accent},className:"w-5 h-5"}),u.jsx("h1",{"code-path":"src\\sections\\SystemPromptsPage.tsx:173:116",className:"text-lg font-semibold",style:{fontFamily:"Times New Roman, Times, serif"},children:kh.find(Z=>Z.id===i)?.name})]})]})}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:176:7",className:"flex-1 flex items-center justify-center",children:u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:177:9",className:"text-center",children:[u.jsx(bs,{"code-path":"src\\sections\\SystemPromptsPage.tsx:178:11",className:"w-20 h-20 mx-auto mb-6",style:{color:ae.accent,opacity:.3}}),u.jsx("h2",{"code-path":"src\\sections\\SystemPromptsPage.tsx:179:11",style:{fontFamily:"Times New Roman, Times, serif",color:ae.text},className:"text-3xl font-bold mb-4",children:"Coming Soon"}),u.jsx("p",{"code-path":"src\\sections\\SystemPromptsPage.tsx:180:11",style:{color:ae.textSecondary},className:"text-lg",children:"该分类内容正在整理中，敬请期待"}),u.jsx("p",{"code-path":"src\\sections\\SystemPromptsPage.tsx:181:11",style:{color:ae.textMuted},className:"text-sm mt-2",children:"This category is under construction"})]})})]})}function Kw({prompt:a,onCopy:r,copied:i}){const[o,d]=Q.useState(""),[p,f]=Q.useState(!1);return Q.useEffect(()=>{a&&(f(!0),fetch(`/system-prompts/${a.file}`).then(h=>h.text()).then(h=>{d(h),f(!1)}).catch(()=>{d(""),f(!1)}))},[a]),u.jsxs("button",{"code-path":"src\\sections\\SystemPromptsPage.tsx:320:5",onClick:()=>!p&&o&&r(o),style:{backgroundColor:i?"#22C55E":ae.accent},className:"flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white",children:[u.jsx(ii,{"code-path":"src\\sections\\SystemPromptsPage.tsx:321:7",className:"w-4 h-4"}),i?"已复制!":"复制"]})}function Xw({prompt:a}){const[r,i]=Q.useState(""),[o,d]=Q.useState(!0);return Q.useEffect(()=>{d(!0),fetch(`/system-prompts/${a.file}`).then(p=>p.text()).then(p=>{i(p),d(!1)}).catch(()=>{i("加载失败"),d(!1)})},[a]),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:337:5",className:"flex-1 overflow-y-auto p-6",children:o?u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:339:9",className:"flex items-center justify-center h-full",style:{color:ae.textMuted},children:u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:339:102",className:"animate-spin w-8 h-8 border-2 rounded-full",style:{borderColor:"#FF6B3530",borderTopColor:"#FF6B35"}})}):u.jsx("pre",{"code-path":"src\\sections\\SystemPromptsPage.tsx:341:9",style:{backgroundColor:ae.bgSecondary,border:`1px solid ${ae.border}`,color:ae.textSecondary,fontFamily:'Georgia, "Times New Roman", Times, serif',lineHeight:1.8},className:"whitespace-pre-wrap text-sm p-6 rounded-xl overflow-x-auto",children:r})})}const Qw=[{id:"newyorkover",title:"NEWYORKOVER",description:"3D 杂志画廊 - 使用 Three.js 实现的沉浸式 3D 杂志堆叠效果",href:"/experiments/newyorkover.html",tags:["Three.js","3D","交互设计"],color:"#EC4899"}];function Fw(){return u.jsxs("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:17:5",className:"min-h-screen bg-lobster-dark text-white",children:[u.jsx("header",{"code-path":"src\\sections\\DesignShowcasePage.tsx:19:7",className:"h-16 flex items-center justify-between px-6 sticky top-0 z-50",style:{backgroundColor:"#0A0A0A",borderBottom:"1px solid #262626"},children:u.jsxs("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:20:9",className:"flex items-center gap-4",children:[u.jsx("a",{"code-path":"src\\sections\\DesignShowcasePage.tsx:21:11",href:"/",className:"flex items-center gap-2",style:{color:"#A1A1A1"},children:u.jsx(jr,{"code-path":"src\\sections\\DesignShowcasePage.tsx:22:13",className:"w-5 h-5"})}),u.jsx("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:24:11",style:{backgroundColor:"#262626"},className:"w-px h-6"}),u.jsx("h1",{"code-path":"src\\sections\\DesignShowcasePage.tsx:25:11",className:"text-lg font-semibold",style:{fontFamily:"Times New Roman, Times, serif"},children:"设计样板间"})]})}),u.jsx("main",{"code-path":"src\\sections\\DesignShowcasePage.tsx:30:7",className:"p-6",children:u.jsxs("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:31:9",className:"max-w-6xl mx-auto",children:[u.jsxs("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:32:11",className:"text-center mb-12",children:[u.jsx("h2",{"code-path":"src\\sections\\DesignShowcasePage.tsx:33:13",style:{fontFamily:"Times New Roman, Times, serif",color:"#FAFAFA"},className:"text-4xl font-bold mb-4",children:"DESIGN SHOWCASE"}),u.jsx("p",{"code-path":"src\\sections\\DesignShowcasePage.tsx:34:13",style:{color:"#A1A1A1"},className:"text-lg",children:"归档前沿 UI/UX 设计实验与创意实现"})]}),u.jsx("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:38:11",className:"grid grid-cols-1 gap-8",children:Qw.map(a=>u.jsxs("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:40:15",className:"rounded-2xl overflow-hidden",style:{backgroundColor:"#0A0A0A",border:"1px solid #262626"},children:[u.jsx("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:46:17",className:"relative h-[70vh] bg-black",children:u.jsx("iframe",{"code-path":"src\\sections\\DesignShowcasePage.tsx:47:19",src:a.href,className:"w-full h-full border-0",title:a.title,sandbox:"allow-scripts allow-same-origin"})}),u.jsxs("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:56:17",className:"p-6",style:{borderTop:"1px solid #262626"},children:[u.jsxs("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:57:19",className:"flex items-start justify-between mb-4",children:[u.jsxs("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:58:21",children:[u.jsx("h3",{"code-path":"src\\sections\\DesignShowcasePage.tsx:59:23",className:"text-2xl font-bold mb-2",style:{fontFamily:"Times New Roman, Times, serif"},children:a.title}),u.jsx("p",{"code-path":"src\\sections\\DesignShowcasePage.tsx:60:23",style:{color:"#A1A1A1"},children:a.description})]}),u.jsxs("a",{"code-path":"src\\sections\\DesignShowcasePage.tsx:62:21",href:a.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium",style:{backgroundColor:a.color,color:"#fff"},children:[u.jsx(Er,{"code-path":"src\\sections\\DesignShowcasePage.tsx:69:23",className:"w-4 h-4"}),"新窗口打开"]})]}),u.jsx("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:75:19",className:"flex gap-2 flex-wrap",children:a.tags.map(r=>u.jsx("span",{"code-path":"src\\sections\\DesignShowcasePage.tsx:77:23",className:"px-3 py-1 text-xs rounded-full",style:{backgroundColor:"#262626",color:"#A1A1A1"},children:r},r))})]})]},a.id))})]})}),u.jsx("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:94:7",className:"border-t border-white/10 py-8",style:{backgroundColor:"#0A0A0A"},children:u.jsx("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:95:9",className:"max-w-6xl mx-auto text-center",children:u.jsx("p",{"code-path":"src\\sections\\DesignShowcasePage.tsx:96:11",className:"text-white/40 text-sm",children:"© 2026 泥巴猪的实验田 · 设计样板间"})})})]})}const ot=[{id:"s00",title:"Introduction",subtitle:"课程介绍",motto:"Model is Agent. Code is Harness.",phase:0,docUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/README-zh.md",codeUrl:"",content:`# Learn Claude Code -- 真正的 Agent Harness 工程

## 模型就是 Agent

在讨论代码之前，先把一件事彻底说清楚。

**Agent 是模型。不是框架。不是提示词链。不是拖拽式工作流。**

### Agent 到底是什么

Agent 是一个神经网络 -- Transformer、RNN、一个被训练出来的函数 -- 经过数十亿次梯度更新，在行动序列数据上学会了感知环境、推理目标、采取行动。"Agent" 这个词在 AI 领域从诞生之日起就是这个意思。从来都是。

人类就是 agent。一个由数百万年进化训练出来的生物神经网络，通过感官感知世界，通过大脑推理，通过身体行动。当 DeepMind、OpenAI 或 Anthropic 说 "agent" 时，他们说的和这个领域自诞生以来就一直在说的完全一样：**一个学会了行动的模型。**

### Agent 不是什么

"Agent" 这个词已经被一整个提示词水管工产业劫持了。

拖拽式工作流构建器。无代码 "AI Agent" 平台。提示词链编排库。它们共享同一个幻觉：把 LLM API 调用用 if-else 分支、节点图、硬编码路由逻辑串在一起就算是 "构建 Agent" 了。

### 心智转换：从 "开发 Agent" 到开发 Harness

当一个人说 "我在开发 Agent" 时，他只可能是两个意思之一：

**1. 训练模型。** 通过强化学习、微调、RLHF 或其他基于梯度的方法调整权重。

**2. 构建 Harness。** 编写代码，为模型提供一个可操作的环境。这是我们大多数人在做的事，也是本仓库的核心。

Harness 是 agent 在特定领域工作所需要的一切：

\`\`\`
Harness = Tools + Knowledge + Observation + Action Interfaces + Permissions

    Tools:          文件读写、Shell、网络、数据库、浏览器
    Knowledge:      产品文档、领域资料、API 规范、风格指南
    Observation:    git diff、错误日志、浏览器状态、传感器数据
    Action:         CLI 命令、API 调用、UI 交互
    Permissions:    沙箱隔离、审批流程、信任边界
\`\`\`

模型做决策。Harness 执行。模型做推理。Harness 提供上下文。模型是驾驶者。Harness 是载具。

### 为什么是 Claude Code -- Harness 工程的大师课

为什么这个仓库专门拆解 Claude Code？

因为 Claude Code 是我们所见过的最优雅，最完整的 agent harness 实现。不是因为某个巧妙的技巧，而是因为它 *没做* 的事：它没有试图成为 agent 本身。它没有强加僵化的工作流。它没有用精心设计的决策树去替模型做判断。它给模型提供了工具，知识、上下文管理和权限边界 -- 然后让开了。

把 Claude Code 剥到本质来看：

\`\`\`
Claude Code = 一个 agent loop
            + 工具 (bash, read, write, edit, glob, grep, browser...)
            + 按需 skill 加载
            + 上下文压缩
            + 子 agent 派生
            + 带依赖图的任务系统
            + 异步邮箱的团队协调
            + worktree 隔离的并行执行
            + 权限治理
\`\`\`

### 核心模式

\`\`\`python
def agent_loop(messages):
    while True:
        response = client.messages.create(
            model=MODEL, system=SYSTEM,
            messages=messages, tools=TOOLS,
        )
        messages.append({"role": "assistant",
                         "content": response.content})

        if response.stop_reason != "tool_use":
            return

        results = []
        for block in response.content:
            if block.type == "tool_use":
                output = TOOL_HANDLERS[block.name](**block.input)
                results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": output,
                })
        messages.append({"role": "user", "content": results})
\`\`\`

### 快速开始

\`\`\`sh
git clone https://github.com/shareAI-lab/learn-claude-code
cd learn-claude-code
pip install -r requirements.txt
cp .env.example .env   # 编辑 .env 填入你的 ANTHROPIC_API_KEY

python agents/s01_agent_loop.py       # 从这里开始
\`\`\`

### 12 个递进式课程

> **s01** &nbsp; *"One loop & Bash is all you need"* &mdash; 一个工具 + 一个循环 = 一个智能体
>
> **s02** &nbsp; *"加一个工具, 只加一个 handler"* &mdash; 循环不用动, 新工具注册进 dispatch map 就行
>
> **s03** &nbsp; *"没有计划的 agent 走哪算哪"* &mdash; 先列步骤再动手, 完成率翻倍
>
> **s04** &nbsp; *"大任务拆小, 每个小任务干净的上下文"* &mdash; 子智能体用独立 messages[], 不污染主对话
>
> **s05** &nbsp; *"用到什么知识, 临时加载什么知识"* &mdash; 通过 tool_result 注入, 不塞 system prompt
>
> **s06** &nbsp; *"上下文总会满, 要有办法腾地方"* &mdash; 三层压缩策略, 换来无限会话
>
> **s07** &nbsp; *"大目标要拆成小任务, 排好序, 记在磁盘上"* &mdash; 文件持久化的任务图, 为多 agent 协作打基础
>
> **s08** &nbsp; *"慢操作丢后台, agent 继续想下一步"* &mdash; 后台线程跑命令, 完成后注入通知
>
> **s09** &nbsp; *"任务太大一个人干不完, 要能分给队友"* &mdash; 持久化队友 + 异步邮箱
>
> **s10** &nbsp; *"队友之间要有统一的沟通规矩"* &mdash; 一个 request-response 模式驱动所有协商
>
> **s11** &nbsp; *"队友自己看看板, 有活就认领"* &mdash; 不需要领导逐个分配, 自组织
>
> **s12** &nbsp; *"各干各的目录, 互不干扰"* &mdash; 任务管目标, worktree 管目录, 按 ID 绑定

---

**模型就是 Agent。代码是 Harness。造好 Harness，Agent 会完成剩下的。**

**Bash is all you need. Real agents are all the universe needs.**`,code:`# 本课程为介绍章节，不包含代码示例
# 请从 s01 开始学习 Agent Loop

# 快速开始
git clone https://github.com/shareAI-lab/learn-claude-code
cd learn-claude-code
pip install -r requirements.txt
cp .env.example .env
# 添加 ANTHROPIC_API_KEY
python agents/s01_agent_loop.py`},{id:"s01",title:"Agent Loop",subtitle:"Agent 循环",motto:"One loop & Bash is all you need",phase:1,docUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s01-the-agent-loop.md",codeUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s01_agent_loop.py",content:`# s01: The Agent Loop (智能体循环)

\`s01 > s02 > s03 > s04 > s05 > s06 | s07 > s08 > s09 > s10 > s11 > s12\`

> *"One loop & Bash is all you need"* -- 一个工具 + 一个循环 = 一个智能体。
>
> **Harness 层**: 循环 -- 模型与真实世界的第一道连接。

## 问题

语言模型能推理代码, 但碰不到真实世界 -- 不能读文件、跑测试、看报错。没有循环, 每次工具调用你都得手动把结果粘回去。你自己就是那个循环。

## 解决方案

\`\`\`
+--------+      +-------+      +---------+
|  User  | ---> |  LLM  | ---> |  Tool   |
| prompt |      |       |      | execute |
+--------+      +---+---+      +----+----+
                    ^                |
                    |   tool_result  |
                    +----------------+
                    (loop until stop_reason != "tool_use")
\`\`\`

一个退出条件控制整个流程。循环持续运行, 直到模型不再调用工具。

## 工作原理

1. 用户 prompt 作为第一条消息。

\`\`\`python
messages.append({"role": "user", "content": query})
\`\`\`

2. 将消息和工具定义一起发给 LLM。

\`\`\`python
response = client.messages.create(
    model=MODEL, system=SYSTEM, messages=messages,
    tools=TOOLS, max_tokens=8000,
)
\`\`\`

3. 追加助手响应。检查 \`stop_reason\` -- 如果模型没有调用工具, 结束。

\`\`\`python
messages.append({"role": "assistant", "content": response.content})
if response.stop_reason != "tool_use":
    return
\`\`\`

4. 执行每个工具调用, 收集结果, 作为 user 消息追加。回到第 2 步。

\`\`\`python
results = []
for block in response.content:
    if block.type == "tool_use":
        output = run_bash(block.input["command"])
        results.append({
            "type": "tool_result",
            "tool_use_id": block.id,
            "content": output,
        })
messages.append({"role": "user", "content": results})
\`\`\`

组装为一个完整函数:

\`\`\`python
def agent_loop(query):
    messages = [{"role": "user", "content": query}]
    while True:
        response = client.messages.create(
            model=MODEL, system=SYSTEM, messages=messages,
            tools=TOOLS, max_tokens=8000,
        )
        messages.append({"role": "assistant", "content": response.content})

        if response.stop_reason != "tool_use":
            return

        results = []
        for block in response.content:
            if block.type == "tool_use":
                output = run_bash(block.input["command"])
                results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": output,
                })
        messages.append({"role": "user", "content": results})
\`\`\`

不到 30 行, 这就是整个智能体。后面 11 个章节都在这个循环上叠加机制 -- 循环本身始终不变。

## 变更内容

| 组件          | 之前       | 之后                           |
|---------------|------------|--------------------------------|
| Agent loop    | (无)       | \`while True\` + stop_reason     |
| Tools         | (无)       | \`bash\` (单一工具)              |
| Messages      | (无)       | 累积式消息列表                 |
| Control flow  | (无)       | \`stop_reason != "tool_use"\`    |

## 试一试

\`\`\`sh
cd learn-claude-code
python agents/s01_agent_loop.py
\`\`\`

试试这些 prompt (英文 prompt 对 LLM 效果更好, 也可以用中文):

1. \`Create a file called hello.py that prints "Hello, World!"\`
2. \`List all Python files in this directory\`
3. \`What is the current git branch?\`
4. \`Create a directory called test_output and write 3 files in it\``,code:`#!/usr/bin/env python3
# Harness: the loop -- the model's first connection to the real world.
"""
s01_agent_loop.py - The Agent Loop

The entire secret of an AI coding agent in one pattern:

    while stop_reason == "tool_use":
        response = LLM(messages, tools)
        execute tools
        append results

    +----------+      +-------+      +---------+
    |   User   | ---> |  LLM  | ---> |  Tool   |
    |  prompt  |      |       |      | execute |
    +----------+      +---+---+      +----+----+
                          ^               |
                          |   tool_result |
                          +---------------+
                          (loop continues)

This is the core loop: feed tool results back to the model
until the model decides to stop. Production agents layer
policy, hooks, and lifecycle controls on top.
"""

import os
import subprocess

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

if os.getenv("ANTHROPIC_BASE_URL"):
    os.environ.pop("ANTHROPIC_AUTH_TOKEN", None)

client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]

SYSTEM = f"You are a coding agent at {os.getcwd()}. Use bash to solve tasks. Act, don't explain."

TOOLS = [{
    "name": "bash",
    "description": "Run a shell command.",
    "input_schema": {
        "type": "object",
        "properties": {"command": {"type": "string"}},
        "required": ["command"],
    },
}]


def run_bash(command: str) -> str:
    dangerous = ["rm -rf /", "sudo", "shutdown", "reboot", "> /dev/"]
    if any(d in command for d in dangerous):
        return "Error: Dangerous command blocked"
    try:
        r = subprocess.run(command, shell=True, cwd=os.getcwd(),
                           capture_output=True, text=True, timeout=120)
        out = (r.stdout + r.stderr).strip()
        return out[:50000] if out else "(no output)"
    except subprocess.TimeoutExpired:
        return "Error: Timeout (120s)"


# -- The core pattern: a while loop that calls tools until the model stops --
def agent_loop(messages: list):
    while True:
        response = client.messages.create(
            model=MODEL, system=SYSTEM, messages=messages,
            tools=TOOLS, max_tokens=8000,
        )
        # Append assistant turn
        messages.append({"role": "assistant", "content": response.content})
        # If the model didn't call a tool, we're done
        if response.stop_reason != "tool_use":
            return
        # Execute each tool call, collect results
        results = []
        for block in response.content:
            if block.type == "tool_use":
                print(f"\\033[33m$ {block.input['command']}\\033[0m")
                output = run_bash(block.input["command"])
                print(output[:200])
                results.append({"type": "tool_result", "tool_use_id": block.id,
                                "content": output})
        messages.append({"role": "user", "content": results})


if __name__ == "__main__":
    history = []
    while True:
        try:
            query = input("\\033[36ms01 >> \\033[0m")
        except (EOFError, KeyboardInterrupt):
            break
        if query.strip().lower() in ("q", "exit", ""):
            break
        history.append({"role": "user", "content": query})
        agent_loop(history)
        response_content = history[-1]["content"]
        if isinstance(response_content, list):
            for block in response_content:
                if hasattr(block, "text"):
                    print(block.text)
        print()
`},{id:"s02",title:"Tool Use",subtitle:"工具使用",motto:"加一个工具，只加一个 handler",phase:1,docUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s02-tool-use.md",codeUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s02_tool_use.py",content:`# s02: Tool Use (工具使用)

\`s01 > [ s02 ] s03 > s04 > s05 > s06 | s07 > s08 > s09 > s10 > s11 > s12\`

> *"加一个工具, 只加一个 handler"* -- 循环不用动, 新工具注册进 dispatch map 就行。
>
> **Harness 层**: 工具分发 -- 扩展模型能触达的边界。

## 问题

只有 \`bash\` 时, 所有操作都走 shell。\`cat\` 截断不可预测, \`sed\` 遇到特殊字符就崩, 每次 bash 调用都是不受约束的安全面。专用工具 (\`read_file\`, \`write_file\`) 可以在工具层面做路径沙箱。

关键洞察: 加工具不需要改循环。

## 解决方案

\`\`\`
+--------+      +-------+      +------------------+
|  User  | ---> |  LLM  | ---> | Tool Dispatch    |
| prompt |      |       |      | {                |
+--------+      +---+---+      |   bash: run_bash |
                    ^           |   read: run_read |
                    |           |   write: run_wr  |
                    +-----------+   edit: run_edit |
                    tool_result | }                |
                                +------------------+

The dispatch map is a dict: {tool_name: handler_function}.
One lookup replaces any if/elif chain.
\`\`\`

## 工作原理

1. 每个工具有一个处理函数。路径沙箱防止逃逸工作区。

\`\`\`python
def safe_path(p: str) -> Path:
    path = (WORKDIR / p).resolve()
    if not path.is_relative_to(WORKDIR):
        raise ValueError(f"Path escapes workspace: {p}")
    return path

def run_read(path: str, limit: int = None) -> str:
    text = safe_path(path).read_text()
    lines = text.splitlines()
    if limit and limit < len(lines):
        lines = lines[:limit]
    return "\\n".join(lines)[:50000]
\`\`\`

2. dispatch map 将工具名映射到处理函数。

\`\`\`python
TOOL_HANDLERS = {
    "bash":       lambda **kw: run_bash(kw["command"]),
    "read_file":  lambda **kw: run_read(kw["path"], kw.get("limit")),
    "write_file": lambda **kw: run_write(kw["path"], kw["content"]),
    "edit_file":  lambda **kw: run_edit(kw["path"], kw["old_text"],
                                        kw["new_text"]),
}
\`\`\`

3. 循环中按名称查找处理函数。循环体本身与 s01 完全一致。

\`\`\`python
for block in response.content:
    if block.type == "tool_use":
        handler = TOOL_HANDLERS.get(block.name)
        output = handler(**block.input) if handler \\
            else f"Unknown tool: {block.name}"
        results.append({
            "type": "tool_result",
            "tool_use_id": block.id,
            "content": output,
        })
\`\`\`

加工具 = 加 handler + 加 schema。循环永远不变。

## 相对 s01 的变更

| 组件           | 之前 (s01)         | 之后 (s02)                     |
|----------------|--------------------|--------------------------------|
| Tools          | 1 (仅 bash)        | 4 (bash, read, write, edit)    |
| Dispatch       | 硬编码 bash 调用   | \`TOOL_HANDLERS\` 字典           |
| 路径安全       | 无                 | \`safe_path()\` 沙箱             |
| Agent loop     | 不变               | 不变                           |

## 试一试

\`\`\`sh
cd learn-claude-code
python agents/s02_tool_use.py
\`\`\`

试试这些 prompt (英文 prompt 对 LLM 效果更好, 也可以用中文):

1. \`Read the file requirements.txt\`
2. \`Create a file called greet.py with a greet(name) function\`
3. \`Edit greet.py to add a docstring to the function\`
4. \`Read greet.py to verify the edit worked\``,code:`#!/usr/bin/env python3
# Harness: tool dispatch -- expanding what the model can reach.
"""
s02_tool_use.py - Tools

The agent loop from s01 didn't change. We just added tools to the array
and a dispatch map to route calls.

    +----------+      +-------+      +------------------+
    |   User   | ---> |  LLM  | ---> | Tool Dispatch    |
    |  prompt  |      |       |      | {                |
    +----------+      +---+---+      |   bash: run_bash |
                          ^          |   read: run_read |
                          |          |   write: run_wr  |
                          +----------+   edit: run_edit |
                          tool_result| }                |
                                     +------------------+

Key insight: "The loop didn't change at all. I just added tools."
"""

import os
import subprocess
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

if os.getenv("ANTHROPIC_BASE_URL"):
    os.environ.pop("ANTHROPIC_AUTH_TOKEN", None)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]

SYSTEM = f"You are a coding agent at {WORKDIR}. Use tools to solve tasks. Act, don't explain."


def safe_path(p: str) -> Path:
    path = (WORKDIR / p).resolve()
    if not path.is_relative_to(WORKDIR):
        raise ValueError(f"Path escapes workspace: {p}")
    return path


def run_bash(command: str) -> str:
    dangerous = ["rm -rf /", "sudo", "shutdown", "reboot", "> /dev/"]
    if any(d in command for d in dangerous):
        return "Error: Dangerous command blocked"
    try:
        r = subprocess.run(command, shell=True, cwd=WORKDIR,
                           capture_output=True, text=True, timeout=120)
        out = (r.stdout + r.stderr).strip()
        return out[:50000] if out else "(no output)"
    except subprocess.TimeoutExpired:
        return "Error: Timeout (120s)"


def run_read(path: str, limit: int = None) -> str:
    try:
        text = safe_path(path).read_text()
        lines = text.splitlines()
        if limit and limit < len(lines):
            lines = lines[:limit] + [f"... ({len(lines) - limit} more lines)"]
        return "\\n".join(lines)[:50000]
    except Exception as e:
        return f"Error: {e}"


def run_write(path: str, content: str) -> str:
    try:
        fp = safe_path(path)
        fp.parent.mkdir(parents=True, exist_ok=True)
        fp.write_text(content)
        return f"Wrote {len(content)} bytes to {path}"
    except Exception as e:
        return f"Error: {e}"


def run_edit(path: str, old_text: str, new_text: str) -> str:
    try:
        fp = safe_path(path)
        content = fp.read_text()
        if old_text not in content:
            return f"Error: Text not found in {path}"
        fp.write_text(content.replace(old_text, new_text, 1))
        return f"Edited {path}"
    except Exception as e:
        return f"Error: {e}"


# -- The dispatch map: {tool_name: handler} --
TOOL_HANDLERS = {
    "bash":       lambda **kw: run_bash(kw["command"]),
    "read_file":  lambda **kw: run_read(kw["path"], kw.get("limit")),
    "write_file": lambda **kw: run_write(kw["path"], kw["content"]),
    "edit_file":  lambda **kw: run_edit(kw["path"], kw["old_text"], kw["new_text"]),
}

TOOLS = [
    {"name": "bash", "description": "Run a shell command.",
     "input_schema": {"type": "object", "properties": {"command": {"type": "string"}}, "required": ["command"]}},
    {"name": "read_file", "description": "Read file contents.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "limit": {"type": "integer"}}, "required": ["path"]}},
    {"name": "write_file", "description": "Write content to file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "content": {"type": "string"}}, "required": ["path", "content"]}},
    {"name": "edit_file", "description": "Replace exact text in file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "old_text": {"type": "string"}, "new_text": {"type": "string"}}, "required": ["path", "old_text", "new_text"]}},
]


def agent_loop(messages: list):
    while True:
        response = client.messages.create(
            model=MODEL, system=SYSTEM, messages=messages,
            tools=TOOLS, max_tokens=8000,
        )
        messages.append({"role": "assistant", "content": response.content})
        if response.stop_reason != "tool_use":
            return
        results = []
        for block in response.content:
            if block.type == "tool_use":
                handler = TOOL_HANDLERS.get(block.name)
                output = handler(**block.input) if handler else f"Unknown tool: {block.name}"
                print(f"> {block.name}: {output[:200]}")
                results.append({"type": "tool_result", "tool_use_id": block.id, "content": output})
        messages.append({"role": "user", "content": results})


if __name__ == "__main__":
    history = []
    while True:
        try:
            query = input("\\033[36ms02 >> \\033[0m")
        except (EOFError, KeyboardInterrupt):
            break
        if query.strip().lower() in ("q", "exit", ""):
            break
        history.append({"role": "user", "content": query})
        agent_loop(history)
        response_content = history[-1]["content"]
        if isinstance(response_content, list):
            for block in response_content:
                if hasattr(block, "text"):
                    print(block.text)
        print()
`},{id:"s03",title:"TodoWrite",subtitle:"待办写入",motto:"没有计划的 agent 走哪算哪",phase:1,docUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s03-todo-write.md",codeUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s03_todo_write.py",content:`# s03: TodoWrite (待办写入)

\`s01 > s02 > [ s03 ] s04 > s05 > s06 | s07 > s08 > s09 > s10 > s11 > s12\`

> *"没有计划的 agent 走哪算哪"* -- 先列步骤再动手, 完成率翻倍。
>
> **Harness 层**: 规划 -- 让模型不偏航, 但不替它画航线。

## 问题

多步任务中, 模型会丢失进度 -- 重复做过的事、跳步、跑偏。对话越长越严重: 工具结果不断填满上下文, 系统提示的影响力逐渐被稀释。一个 10 步重构可能做完 1-3 步就开始即兴发挥, 因为 4-10 步已经被挤出注意力了。

## 解决方案

\`\`\`
+--------+      +-------+      +---------+
|  User  | ---> |  LLM  | ---> | Tools   |
| prompt |      |       |      | + todo  |
+--------+      +---+---+      +----+----+
                    ^                |
                    |   tool_result  |
                    +----------------+
                          |
              +-----------+-----------+
              | TodoManager state     |
              | [ ] task A            |
              | [>] task B  <- doing  |
              | [x] task C            |
              +-----------------------+
                          |
              if rounds_since_todo >= 3:
                inject <reminder> into tool_result
\`\`\`

## 工作原理

1. TodoManager 存储带状态的项目。同一时间只允许一个 \`in_progress\`。

\`\`\`python
class TodoManager:
    def update(self, items: list) -> str:
        validated, in_progress_count = [], 0
        for item in items:
            status = item.get("status", "pending")
            if status == "in_progress":
                in_progress_count += 1
            validated.append({"id": item["id"], "text": item["text"],
                              "status": status})
        if in_progress_count > 1:
            raise ValueError("Only one task can be in_progress")
        self.items = validated
        return self.render()
\`\`\`

2. \`todo\` 工具和其他工具一样加入 dispatch map。

\`\`\`python
TOOL_HANDLERS = {
    # ...base tools...
    "todo": lambda **kw: TODO.update(kw["items"]),
}
\`\`\`

3. nag reminder: 模型连续 3 轮以上不调用 \`todo\` 时注入提醒。

\`\`\`python
if rounds_since_todo >= 3 and messages:
    last = messages[-1]
    if last["role"] == "user" and isinstance(last.get("content"), list):
        last["content"].insert(0, {
            "type": "text",
            "text": "<reminder>Update your todos.</reminder>",
        })
\`\`\`

"同时只能有一个 in_progress" 强制顺序聚焦。nag reminder 制造问责压力 -- 你不更新计划, 系统就追着你问。

## 相对 s02 的变更

| 组件           | 之前 (s02)       | 之后 (s03)                     |
|----------------|------------------|--------------------------------|
| Tools          | 4                | 5 (+todo)                      |
| 规划           | 无               | 带状态的 TodoManager           |
| Nag 注入       | 无               | 3 轮后注入 \`<reminder>\`        |
| Agent loop     | 简单分发         | + rounds_since_todo 计数器     |

## 试一试

\`\`\`sh
cd learn-claude-code
python agents/s03_todo_write.py
\`\`\`

试试这些 prompt (英文 prompt 对 LLM 效果更好, 也可以用中文):

1. \`Refactor the file hello.py: add type hints, docstrings, and a main guard\`
2. \`Create a Python package with __init__.py, utils.py, and tests/test_utils.py\`
3. \`Review all Python files and fix any style issues\``,code:`#!/usr/bin/env python3
# Harness: planning -- keeping the model on course without scripting the route.
"""
s03_todo_write.py - TodoWrite

The model tracks its own progress via a TodoManager. A nag reminder
forces it to keep updating when it forgets.

    +----------+      +-------+      +---------+
    |   User   | ---> |  LLM  | ---> | Tools   |
    |  prompt  |      |       |      | + todo  |
    +----------+      +---+---+      +----+----+
                          ^               |
                          |   tool_result |
                          +---------------+
                                |
                    +-----------+-----------+
                    | TodoManager state     |
                    | [ ] task A            |
                    | [>] task B <- doing   |
                    | [x] task C            |
                    +-----------------------+
                                |
                    if rounds_since_todo >= 3:
                      inject <reminder>

Key insight: "The agent can track its own progress -- and I can see it."
"""

import os
import subprocess
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

if os.getenv("ANTHROPIC_BASE_URL"):
    os.environ.pop("ANTHROPIC_AUTH_TOKEN", None)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]

SYSTEM = f"""You are a coding agent at {WORKDIR}.
Use the todo tool to plan multi-step tasks. Mark in_progress before starting, completed when done.
Prefer tools over prose."""


# -- TodoManager: structured state the LLM writes to --
class TodoManager:
    def __init__(self):
        self.items = []

    def update(self, items: list) -> str:
        if len(items) > 20:
            raise ValueError("Max 20 todos allowed")
        validated = []
        in_progress_count = 0
        for i, item in enumerate(items):
            text = str(item.get("text", "")).strip()
            status = str(item.get("status", "pending")).lower()
            item_id = str(item.get("id", str(i + 1)))
            if not text:
                raise ValueError(f"Item {item_id}: text required")
            if status not in ("pending", "in_progress", "completed"):
                raise ValueError(f"Item {item_id}: invalid status '{status}'")
            if status == "in_progress":
                in_progress_count += 1
            validated.append({"id": item_id, "text": text, "status": status})
        if in_progress_count > 1:
            raise ValueError("Only one task can be in_progress at a time")
        self.items = validated
        return self.render()

    def render(self) -> str:
        if not self.items:
            return "No todos."
        lines = []
        for item in self.items:
            marker = {"pending": "[ ]", "in_progress": "[>]", "completed": "[x]"}[item["status"]]
            lines.append(f"{marker} #{item['id']}: {item['text']}")
        done = sum(1 for t in self.items if t["status"] == "completed")
        lines.append(f"\\n({done}/{len(self.items)} completed)")
        return "\\n".join(lines)


TODO = TodoManager()


# -- Tool implementations --
def safe_path(p: str) -> Path:
    path = (WORKDIR / p).resolve()
    if not path.is_relative_to(WORKDIR):
        raise ValueError(f"Path escapes workspace: {p}")
    return path

def run_bash(command: str) -> str:
    dangerous = ["rm -rf /", "sudo", "shutdown", "reboot", "> /dev/"]
    if any(d in command for d in dangerous):
        return "Error: Dangerous command blocked"
    try:
        r = subprocess.run(command, shell=True, cwd=WORKDIR,
                           capture_output=True, text=True, timeout=120)
        out = (r.stdout + r.stderr).strip()
        return out[:50000] if out else "(no output)"
    except subprocess.TimeoutExpired:
        return "Error: Timeout (120s)"

def run_read(path: str, limit: int = None) -> str:
    try:
        lines = safe_path(path).read_text().splitlines()
        if limit and limit < len(lines):
            lines = lines[:limit] + [f"... ({len(lines) - limit} more)"]
        return "\\n".join(lines)[:50000]
    except Exception as e:
        return f"Error: {e}"

def run_write(path: str, content: str) -> str:
    try:
        fp = safe_path(path)
        fp.parent.mkdir(parents=True, exist_ok=True)
        fp.write_text(content)
        return f"Wrote {len(content)} bytes"
    except Exception as e:
        return f"Error: {e}"

def run_edit(path: str, old_text: str, new_text: str) -> str:
    try:
        fp = safe_path(path)
        content = fp.read_text()
        if old_text not in content:
            return f"Error: Text not found in {path}"
        fp.write_text(content.replace(old_text, new_text, 1))
        return f"Edited {path}"
    except Exception as e:
        return f"Error: {e}"


TOOL_HANDLERS = {
    "bash":       lambda **kw: run_bash(kw["command"]),
    "read_file":  lambda **kw: run_read(kw["path"], kw.get("limit")),
    "write_file": lambda **kw: run_write(kw["path"], kw["content"]),
    "edit_file":  lambda **kw: run_edit(kw["path"], kw["old_text"], kw["new_text"]),
    "todo":       lambda **kw: TODO.update(kw["items"]),
}

TOOLS = [
    {"name": "bash", "description": "Run a shell command.",
     "input_schema": {"type": "object", "properties": {"command": {"type": "string"}}, "required": ["command"]}},
    {"name": "read_file", "description": "Read file contents.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "limit": {"type": "integer"}}, "required": ["path"]}},
    {"name": "write_file", "description": "Write content to file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "content": {"type": "string"}}, "required": ["path", "content"]}},
    {"name": "edit_file", "description": "Replace exact text in file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "old_text": {"type": "string"}, "new_text": {"type": "string"}}, "required": ["path", "old_text", "new_text"]}},
    {"name": "todo", "description": "Update task list. Track progress on multi-step tasks.",
     "input_schema": {"type": "object", "properties": {"items": {"type": "array", "items": {"type": "object", "properties": {"id": {"type": "string"}, "text": {"type": "string"}, "status": {"type": "string", "enum": ["pending", "in_progress", "completed"]}}, "required": ["id", "text", "status"]}}}, "required": ["items"]}},
]


# -- Agent loop with nag reminder injection --
def agent_loop(messages: list):
    rounds_since_todo = 0
    while True:
        # Nag reminder is injected below, alongside tool results
        response = client.messages.create(
            model=MODEL, system=SYSTEM, messages=messages,
            tools=TOOLS, max_tokens=8000,
        )
        messages.append({"role": "assistant", "content": response.content})
        if response.stop_reason != "tool_use":
            return
        results = []
        used_todo = False
        for block in response.content:
            if block.type == "tool_use":
                handler = TOOL_HANDLERS.get(block.name)
                try:
                    output = handler(**block.input) if handler else f"Unknown tool: {block.name}"
                except Exception as e:
                    output = f"Error: {e}"
                print(f"> {block.name}: {str(output)[:200]}")
                results.append({"type": "tool_result", "tool_use_id": block.id, "content": str(output)})
                if block.name == "todo":
                    used_todo = True
        rounds_since_todo = 0 if used_todo else rounds_since_todo + 1
        if rounds_since_todo >= 3:
            results.insert(0, {"type": "text", "text": "<reminder>Update your todos.</reminder>"})
        messages.append({"role": "user", "content": results})


if __name__ == "__main__":
    history = []
    while True:
        try:
            query = input("\\033[36ms03 >> \\033[0m")
        except (EOFError, KeyboardInterrupt):
            break
        if query.strip().lower() in ("q", "exit", ""):
            break
        history.append({"role": "user", "content": query})
        agent_loop(history)
        response_content = history[-1]["content"]
        if isinstance(response_content, list):
            for block in response_content:
                if hasattr(block, "text"):
                    print(block.text)
        print()
`},{id:"s04",title:"Subagents",subtitle:"子智能体",motto:"大任务拆小，每个小任务干净的上下文",phase:2,docUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s04-subagent.md",codeUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s04_subagent.py",content:`# s04: Subagents (子智能体)

\`s01 > s02 > s03 > [ s04 ] s05 > s06 | s07 > s08 > s09 > s10 > s11 > s12\`

> *"大任务拆小, 每个小任务干净的上下文"* -- 子智能体用独立 messages[], 不污染主对话。
>
> **Harness 层**: 上下文隔离 -- 守护模型的思维清晰度。

## 问题

智能体工作越久, messages 数组越胖。每次读文件、跑命令的输出都永久留在上下文里。"这个项目用什么测试框架?" 可能要读 5 个文件, 但父智能体只需要一个词: "pytest。"

## 解决方案

\`\`\`
Parent agent                     Subagent
+------------------+             +------------------+
| messages=[...]   |             | messages=[]      | <-- fresh
|                  |  dispatch   |                  |
| tool: task       | ----------> | while tool_use:  |
|   prompt="..."   |             |   call tools     |
|                  |  summary    |   append results |
|   result = "..." | <---------- | return last text |
+------------------+             +------------------+

Parent context stays clean. Subagent context is discarded.
\`\`\`

## 工作原理

1. 父智能体有一个 \`task\` 工具。子智能体拥有除 \`task\` 外的所有基础工具 (禁止递归生成)。

\`\`\`python
PARENT_TOOLS = CHILD_TOOLS + [
    {"name": "task",
     "description": "Spawn a subagent with fresh context.",
     "input_schema": {
         "type": "object",
         "properties": {"prompt": {"type": "string"}},
         "required": ["prompt"],
     }},
]
\`\`\`

2. 子智能体以 \`messages=[]\` 启动, 运行自己的循环。只有最终文本返回给父智能体。

\`\`\`python
def run_subagent(prompt: str) -> str:
    sub_messages = [{"role": "user", "content": prompt}]
    for _ in range(30):  # safety limit
        response = client.messages.create(
            model=MODEL, system=SUBAGENT_SYSTEM,
            messages=sub_messages,
            tools=CHILD_TOOLS, max_tokens=8000,
        )
        sub_messages.append({"role": "assistant",
                             "content": response.content})
        if response.stop_reason != "tool_use":
            break
        results = []
        for block in response.content:
            if block.type == "tool_use":
                handler = TOOL_HANDLERS.get(block.name)
                output = handler(**block.input)
                results.append({"type": "tool_result",
                    "tool_use_id": block.id,
                    "content": str(output)[:50000]})
        sub_messages.append({"role": "user", "content": results})
    return "".join(
        b.text for b in response.content if hasattr(b, "text")
    ) or "(no summary)"
\`\`\`

子智能体可能跑了 30+ 次工具调用, 但整个消息历史直接丢弃。父智能体收到的只是一段摘要文本, 作为普通 \`tool_result\` 返回。

## 相对 s03 的变更

| 组件           | 之前 (s03)       | 之后 (s04)                    |
|----------------|------------------|-------------------------------|
| Tools          | 5                | 5 (基础) + task (仅父端)      |
| 上下文         | 单一共享         | 父 + 子隔离                   |
| Subagent       | 无               | \`run_subagent()\` 函数         |
| 返回值         | 不适用           | 仅摘要文本                    |

## 试一试

\`\`\`sh
cd learn-claude-code
python agents/s04_subagent.py
\`\`\`

试试这些 prompt (英文 prompt 对 LLM 效果更好, 也可以用中文):

1. \`Use a subtask to find what testing framework this project uses\`
2. \`Delegate: read all .py files and summarize what each one does\`
3. \`Use a task to create a new module, then verify it from here\``,code:`#!/usr/bin/env python3
# Harness: context isolation -- protecting the model's clarity of thought.
"""
s04_subagent.py - Subagents

Spawn a child agent with fresh messages=[]. The child works in its own
context, sharing the filesystem, then returns only a summary to the parent.

    Parent agent                     Subagent
    +------------------+             +------------------+
    | messages=[...]   |             | messages=[]      |  <-- fresh
    |                  |  dispatch   |                  |
    | tool: task       | ---------->| while tool_use:  |
    |   prompt="..."   |            |   call tools     |
    |   description="" |            |   append results |
    |                  |  summary   |                  |
    |   result = "..." | <--------- | return last text |
    +------------------+             +------------------+
              |
    Parent context stays clean.
    Subagent context is discarded.

Key insight: "Process isolation gives context isolation for free."
"""

import os
import subprocess
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

if os.getenv("ANTHROPIC_BASE_URL"):
    os.environ.pop("ANTHROPIC_AUTH_TOKEN", None)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]

SYSTEM = f"You are a coding agent at {WORKDIR}. Use the task tool to delegate exploration or subtasks."
SUBAGENT_SYSTEM = f"You are a coding subagent at {WORKDIR}. Complete the given task, then summarize your findings."


# -- Tool implementations shared by parent and child --
def safe_path(p: str) -> Path:
    path = (WORKDIR / p).resolve()
    if not path.is_relative_to(WORKDIR):
        raise ValueError(f"Path escapes workspace: {p}")
    return path

def run_bash(command: str) -> str:
    dangerous = ["rm -rf /", "sudo", "shutdown", "reboot", "> /dev/"]
    if any(d in command for d in dangerous):
        return "Error: Dangerous command blocked"
    try:
        r = subprocess.run(command, shell=True, cwd=WORKDIR,
                           capture_output=True, text=True, timeout=120)
        out = (r.stdout + r.stderr).strip()
        return out[:50000] if out else "(no output)"
    except subprocess.TimeoutExpired:
        return "Error: Timeout (120s)"

def run_read(path: str, limit: int = None) -> str:
    try:
        lines = safe_path(path).read_text().splitlines()
        if limit and limit < len(lines):
            lines = lines[:limit] + [f"... ({len(lines) - limit} more)"]
        return "\\n".join(lines)[:50000]
    except Exception as e:
        return f"Error: {e}"

def run_write(path: str, content: str) -> str:
    try:
        fp = safe_path(path)
        fp.parent.mkdir(parents=True, exist_ok=True)
        fp.write_text(content)
        return f"Wrote {len(content)} bytes"
    except Exception as e:
        return f"Error: {e}"

def run_edit(path: str, old_text: str, new_text: str) -> str:
    try:
        fp = safe_path(path)
        content = fp.read_text()
        if old_text not in content:
            return f"Error: Text not found in {path}"
        fp.write_text(content.replace(old_text, new_text, 1))
        return f"Edited {path}"
    except Exception as e:
        return f"Error: {e}"


TOOL_HANDLERS = {
    "bash":       lambda **kw: run_bash(kw["command"]),
    "read_file":  lambda **kw: run_read(kw["path"], kw.get("limit")),
    "write_file": lambda **kw: run_write(kw["path"], kw["content"]),
    "edit_file":  lambda **kw: run_edit(kw["path"], kw["old_text"], kw["new_text"]),
}

# Child gets all base tools except task (no recursive spawning)
CHILD_TOOLS = [
    {"name": "bash", "description": "Run a shell command.",
     "input_schema": {"type": "object", "properties": {"command": {"type": "string"}}, "required": ["command"]}},
    {"name": "read_file", "description": "Read file contents.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "limit": {"type": "integer"}}, "required": ["path"]}},
    {"name": "write_file", "description": "Write content to file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "content": {"type": "string"}}, "required": ["path", "content"]}},
    {"name": "edit_file", "description": "Replace exact text in file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "old_text": {"type": "string"}, "new_text": {"type": "string"}}, "required": ["path", "old_text", "new_text"]}},
]


# -- Subagent: fresh context, filtered tools, summary-only return --
def run_subagent(prompt: str) -> str:
    sub_messages = [{"role": "user", "content": prompt}]  # fresh context
    for _ in range(30):  # safety limit
        response = client.messages.create(
            model=MODEL, system=SUBAGENT_SYSTEM, messages=sub_messages,
            tools=CHILD_TOOLS, max_tokens=8000,
        )
        sub_messages.append({"role": "assistant", "content": response.content})
        if response.stop_reason != "tool_use":
            break
        results = []
        for block in response.content:
            if block.type == "tool_use":
                handler = TOOL_HANDLERS.get(block.name)
                output = handler(**block.input) if handler else f"Unknown tool: {block.name}"
                results.append({"type": "tool_result", "tool_use_id": block.id, "content": str(output)[:50000]})
        sub_messages.append({"role": "user", "content": results})
    # Only the final text returns to the parent -- child context is discarded
    return "".join(b.text for b in response.content if hasattr(b, "text")) or "(no summary)"


# -- Parent tools: base tools + task dispatcher --
PARENT_TOOLS = CHILD_TOOLS + [
    {"name": "task", "description": "Spawn a subagent with fresh context. It shares the filesystem but not conversation history.",
     "input_schema": {"type": "object", "properties": {"prompt": {"type": "string"}, "description": {"type": "string", "description": "Short description of the task"}}, "required": ["prompt"]}},
]


def agent_loop(messages: list):
    while True:
        response = client.messages.create(
            model=MODEL, system=SYSTEM, messages=messages,
            tools=PARENT_TOOLS, max_tokens=8000,
        )
        messages.append({"role": "assistant", "content": response.content})
        if response.stop_reason != "tool_use":
            return
        results = []
        for block in response.content:
            if block.type == "tool_use":
                if block.name == "task":
                    desc = block.input.get("description", "subtask")
                    print(f"> task ({desc}): {block.input['prompt'][:80]}")
                    output = run_subagent(block.input["prompt"])
                else:
                    handler = TOOL_HANDLERS.get(block.name)
                    output = handler(**block.input) if handler else f"Unknown tool: {block.name}"
                print(f"  {str(output)[:200]}")
                results.append({"type": "tool_result", "tool_use_id": block.id, "content": str(output)})
        messages.append({"role": "user", "content": results})


if __name__ == "__main__":
    history = []
    while True:
        try:
            query = input("\\033[36ms04 >> \\033[0m")
        except (EOFError, KeyboardInterrupt):
            break
        if query.strip().lower() in ("q", "exit", ""):
            break
        history.append({"role": "user", "content": query})
        agent_loop(history)
        response_content = history[-1]["content"]
        if isinstance(response_content, list):
            for block in response_content:
                if hasattr(block, "text"):
                    print(block.text)
        print()
`},{id:"s05",title:"Skills",subtitle:"技能加载",motto:"用到什么知识，临时加载什么知识",phase:2,docUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s05-skill-loading.md",codeUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s05_skill_loading.py",content:`# s05: Skills (技能加载)

\`s01 > s02 > s03 > s04 > [ s05 ] s06 | s07 > s08 > s09 > s10 > s11 > s12\`

> *"用到什么知识, 临时加载什么知识"* -- 通过 tool_result 注入, 不塞 system prompt。
>
> **Harness 层**: 按需知识 -- 模型开口要时才给的领域专长。

## 问题

你希望智能体遵循特定领域的工作流: git 约定、测试模式、代码审查清单。全塞进系统提示太浪费 -- 10 个技能, 每个 2000 token, 就是 20,000 token, 大部分跟当前任务毫无关系。

## 解决方案

\`\`\`
System prompt (Layer 1 -- always present):
+--------------------------------------+
| You are a coding agent.              |
| Skills available:                    |
|   - git: Git workflow helpers        |  ~100 tokens/skill
|   - test: Testing best practices     |
+--------------------------------------+

When model calls load_skill("git"):
+--------------------------------------+
| tool_result (Layer 2 -- on demand):  |
| <skill name="git">                   |
|   Full git workflow instructions...  |  ~2000 tokens
|   Step 1: ...                        |
| </skill>                             |
+--------------------------------------+

第一层: 系统提示中放技能名称 (低成本)。第二层: tool_result 中按需放完整内容。
\`\`\`

## 工作原理

1. 每个技能是一个目录, 包含 \`SKILL.md\` 文件和 YAML frontmatter。

\`\`\`
skills/
  pdf/
    SKILL.md       # ---\\n name: pdf\\n description: Process PDF files\\n ---\\n...
  code-review/
    SKILL.md       # ---\\n name: code-review\\n description: Review code\\n ---\\n...
\`\`\`

2. SkillLoader 递归扫描 \`SKILL.md\` 文件, 用目录名作为技能标识。

\`\`\`python
class SkillLoader:
    def __init__(self, skills_dir: Path):
        self.skills = {}
        for f in sorted(skills_dir.rglob("SKILL.md")):
            text = f.read_text()
            meta, body = self._parse_frontmatter(text)
            name = meta.get("name", f.parent.name)
            self.skills[name] = {"meta": meta, "body": body}

    def get_descriptions(self) -> str:
        lines = []
        for name, skill in self.skills.items():
            desc = skill["meta"].get("description", "")
            lines.append(f"  - {name}: {desc}")
        return "\\n".join(lines)

    def get_content(self, name: str) -> str:
        skill = self.skills.get(name)
        if not skill:
            return f"Error: Unknown skill '{name}'."
        return f"<skill name=\\"{name}\\">\\n{skill['body']}\\n</skill>"
\`\`\`

3. 第一层写入系统提示。第二层不过是 dispatch map 中的又一个工具。

\`\`\`python
SYSTEM = f"""You are a coding agent at {WORKDIR}.
Skills available:
{SKILL_LOADER.get_descriptions()}"""

TOOL_HANDLERS = {
    # ...base tools...
    "load_skill": lambda **kw: SKILL_LOADER.get_content(kw["name"]),
}
\`\`\`

模型知道有哪些技能 (便宜), 需要时再加载完整内容 (贵)。

## 相对 s04 的变更

| 组件           | 之前 (s04)       | 之后 (s05)                     |
|----------------|------------------|--------------------------------|
| Tools          | 5 (基础 + task)  | 5 (基础 + load_skill)          |
| 系统提示       | 静态字符串       | + 技能描述列表                 |
| 知识库         | 无               | skills/\\*/SKILL.md 文件        |
| 注入方式       | 无               | 两层 (系统提示 + result)       |

## 试一试

\`\`\`sh
cd learn-claude-code
python agents/s05_skill_loading.py
\`\`\`

试试这些 prompt (英文 prompt 对 LLM 效果更好, 也可以用中文):

1. \`What skills are available?\`
2. \`Load the agent-builder skill and follow its instructions\`
3. \`I need to do a code review -- load the relevant skill first\`
4. \`Build an MCP server using the mcp-builder skill\``,code:`#!/usr/bin/env python3
# Harness: on-demand knowledge -- domain expertise, loaded when the model asks.
"""
s05_skill_loading.py - Skills

Two-layer skill injection that avoids bloating the system prompt:

    Layer 1 (cheap): skill names in system prompt (~100 tokens/skill)
    Layer 2 (on demand): full skill body in tool_result

    skills/
      pdf/
        SKILL.md          <-- frontmatter (name, description) + body
      code-review/
        SKILL.md

    System prompt:
    +--------------------------------------+
    | You are a coding agent.              |
    | Skills available:                    |
    |   - pdf: Process PDF files...        |  <-- Layer 1: metadata only
    |   - code-review: Review code...      |
    +--------------------------------------+

    When model calls load_skill("pdf"):
    +--------------------------------------+
    | tool_result:                         |
    | <skill>                              |
    |   Full PDF processing instructions   |  <-- Layer 2: full body
    |   Step 1: ...                        |
    |   Step 2: ...                        |
    | </skill>                             |
    +--------------------------------------+

Key insight: "Don't put everything in the system prompt. Load on demand."
"""

import os
import re
import subprocess
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

if os.getenv("ANTHROPIC_BASE_URL"):
    os.environ.pop("ANTHROPIC_AUTH_TOKEN", None)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]
SKILLS_DIR = WORKDIR / "skills"


# -- SkillLoader: scan skills/<name>/SKILL.md with YAML frontmatter --
class SkillLoader:
    def __init__(self, skills_dir: Path):
        self.skills_dir = skills_dir
        self.skills = {}
        self._load_all()

    def _load_all(self):
        if not self.skills_dir.exists():
            return
        for f in sorted(self.skills_dir.rglob("SKILL.md")):
            text = f.read_text()
            meta, body = self._parse_frontmatter(text)
            name = meta.get("name", f.parent.name)
            self.skills[name] = {"meta": meta, "body": body, "path": str(f)}

    def _parse_frontmatter(self, text: str) -> tuple:
        """Parse YAML frontmatter between --- delimiters."""
        match = re.match(r"^---\\n(.*?)\\n---\\n(.*)", text, re.DOTALL)
        if not match:
            return {}, text
        meta = {}
        for line in match.group(1).strip().splitlines():
            if ":" in line:
                key, val = line.split(":", 1)
                meta[key.strip()] = val.strip()
        return meta, match.group(2).strip()

    def get_descriptions(self) -> str:
        """Layer 1: short descriptions for the system prompt."""
        if not self.skills:
            return "(no skills available)"
        lines = []
        for name, skill in self.skills.items():
            desc = skill["meta"].get("description", "No description")
            tags = skill["meta"].get("tags", "")
            line = f"  - {name}: {desc}"
            if tags:
                line += f" [{tags}]"
            lines.append(line)
        return "\\n".join(lines)

    def get_content(self, name: str) -> str:
        """Layer 2: full skill body returned in tool_result."""
        skill = self.skills.get(name)
        if not skill:
            return f"Error: Unknown skill '{name}'. Available: {', '.join(self.skills.keys())}"
        return f"<skill name=\\"{name}\\">\\n{skill['body']}\\n</skill>"


SKILL_LOADER = SkillLoader(SKILLS_DIR)

# Layer 1: skill metadata injected into system prompt
SYSTEM = f"""You are a coding agent at {WORKDIR}.
Use load_skill to access specialized knowledge before tackling unfamiliar topics.

Skills available:
{SKILL_LOADER.get_descriptions()}"""


# -- Tool implementations --
def safe_path(p: str) -> Path:
    path = (WORKDIR / p).resolve()
    if not path.is_relative_to(WORKDIR):
        raise ValueError(f"Path escapes workspace: {p}")
    return path

def run_bash(command: str) -> str:
    dangerous = ["rm -rf /", "sudo", "shutdown", "reboot", "> /dev/"]
    if any(d in command for d in dangerous):
        return "Error: Dangerous command blocked"
    try:
        r = subprocess.run(command, shell=True, cwd=WORKDIR,
                           capture_output=True, text=True, timeout=120)
        out = (r.stdout + r.stderr).strip()
        return out[:50000] if out else "(no output)"
    except subprocess.TimeoutExpired:
        return "Error: Timeout (120s)"

def run_read(path: str, limit: int = None) -> str:
    try:
        lines = safe_path(path).read_text().splitlines()
        if limit and limit < len(lines):
            lines = lines[:limit] + [f"... ({len(lines) - limit} more)"]
        return "\\n".join(lines)[:50000]
    except Exception as e:
        return f"Error: {e}"

def run_write(path: str, content: str) -> str:
    try:
        fp = safe_path(path)
        fp.parent.mkdir(parents=True, exist_ok=True)
        fp.write_text(content)
        return f"Wrote {len(content)} bytes"
    except Exception as e:
        return f"Error: {e}"

def run_edit(path: str, old_text: str, new_text: str) -> str:
    try:
        fp = safe_path(path)
        content = fp.read_text()
        if old_text not in content:
            return f"Error: Text not found in {path}"
        fp.write_text(content.replace(old_text, new_text, 1))
        return f"Edited {path}"
    except Exception as e:
        return f"Error: {e}"


TOOL_HANDLERS = {
    "bash":       lambda **kw: run_bash(kw["command"]),
    "read_file":  lambda **kw: run_read(kw["path"], kw.get("limit")),
    "write_file": lambda **kw: run_write(kw["path"], kw["content"]),
    "edit_file":  lambda **kw: run_edit(kw["path"], kw["old_text"], kw["new_text"]),
    "load_skill": lambda **kw: SKILL_LOADER.get_content(kw["name"]),
}

TOOLS = [
    {"name": "bash", "description": "Run a shell command.",
     "input_schema": {"type": "object", "properties": {"command": {"type": "string"}}, "required": ["command"]}},
    {"name": "read_file", "description": "Read file contents.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "limit": {"type": "integer"}}, "required": ["path"]}},
    {"name": "write_file", "description": "Write content to file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "content": {"type": "string"}}, "required": ["path", "content"]}},
    {"name": "edit_file", "description": "Replace exact text in file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "old_text": {"type": "string"}, "new_text": {"type": "string"}}, "required": ["path", "old_text", "new_text"]}},
    {"name": "load_skill", "description": "Load specialized knowledge by name.",
     "input_schema": {"type": "object", "properties": {"name": {"type": "string", "description": "Skill name to load"}}, "required": ["name"]}},
]


def agent_loop(messages: list):
    while True:
        response = client.messages.create(
            model=MODEL, system=SYSTEM, messages=messages,
            tools=TOOLS, max_tokens=8000,
        )
        messages.append({"role": "assistant", "content": response.content})
        if response.stop_reason != "tool_use":
            return
        results = []
        for block in response.content:
            if block.type == "tool_use":
                handler = TOOL_HANDLERS.get(block.name)
                try:
                    output = handler(**block.input) if handler else f"Unknown tool: {block.name}"
                except Exception as e:
                    output = f"Error: {e}"
                print(f"> {block.name}: {str(output)[:200]}")
                results.append({"type": "tool_result", "tool_use_id": block.id, "content": str(output)})
        messages.append({"role": "user", "content": results})


if __name__ == "__main__":
    history = []
    while True:
        try:
            query = input("\\033[36ms05 >> \\033[0m")
        except (EOFError, KeyboardInterrupt):
            break
        if query.strip().lower() in ("q", "exit", ""):
            break
        history.append({"role": "user", "content": query})
        agent_loop(history)
        response_content = history[-1]["content"]
        if isinstance(response_content, list):
            for block in response_content:
                if hasattr(block, "text"):
                    print(block.text)
        print()
`},{id:"s06",title:"Context Compact",subtitle:"上下文压缩",motto:"上下文总会满，要有办法腾地方",phase:2,docUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s06-context-compact.md",codeUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s06_context_compact.py",content:`# s06: Context Compact (上下文压缩)

\`s01 > s02 > s03 > s04 > s05 > [ s06 ] | s07 > s08 > s09 > s10 > s11 > s12\`

> *"上下文总会满, 要有办法腾地方"* -- 三层压缩策略, 换来无限会话。
>
> **Harness 层**: 压缩 -- 干净的记忆, 无限的会话。

## 问题

上下文窗口是有限的。读一个 1000 行的文件就吃掉 ~4000 token; 读 30 个文件、跑 20 条命令, 轻松突破 100k token。不压缩, 智能体根本没法在大项目里干活。

## 解决方案

三层压缩, 激进程度递增:

\`\`\`
Every turn:
+------------------+
| Tool call result |
+------------------+
        |
        v
[Layer 1: micro_compact]        (silent, every turn)
  Replace tool_result > 3 turns old
  with "[Previous: used {tool_name}]"
        |
        v
[Check: tokens > 50000?]
   |               |
   no              yes
   |               |
   v               v
continue    [Layer 2: auto_compact]
              Save transcript to .transcripts/
              LLM summarizes conversation.
              Replace all messages with [summary].
                    |
                    v
            [Layer 3: compact tool]
              Model calls compact explicitly.
              Same summarization as auto_compact.
\`\`\`

## 工作原理

1. **第一层 -- micro_compact**: 每次 LLM 调用前, 将旧的 tool result 替换为占位符。

\`\`\`python
def micro_compact(messages: list) -> list:
    tool_results = []
    for i, msg in enumerate(messages):
        if msg["role"] == "user" and isinstance(msg.get("content"), list):
            for j, part in enumerate(msg["content"]):
                if isinstance(part, dict) and part.get("type") == "tool_result":
                    tool_results.append((i, j, part))
    if len(tool_results) <= KEEP_RECENT:
        return messages
    for _, _, part in tool_results[:-KEEP_RECENT]:
        if len(part.get("content", "")) > 100:
            part["content"] = f"[Previous: used {tool_name}]"
    return messages
\`\`\`

2. **第二层 -- auto_compact**: token 超过阈值时, 保存完整对话到磁盘, 让 LLM 做摘要。

\`\`\`python
def auto_compact(messages: list) -> list:
    # Save transcript for recovery
    transcript_path = TRANSCRIPT_DIR / f"transcript_{int(time.time())}.jsonl"
    with open(transcript_path, "w") as f:
        for msg in messages:
            f.write(json.dumps(msg, default=str) + "\\n")
    # LLM summarizes
    response = client.messages.create(
        model=MODEL,
        messages=[{"role": "user", "content":
            "Summarize this conversation for continuity..."
            + json.dumps(messages, default=str)[:80000]}],
        max_tokens=2000,
    )
    return [
        {"role": "user", "content": f"[Compressed]\\n\\n{response.content[0].text}"},
        {"role": "assistant", "content": "Understood. Continuing."},
    ]
\`\`\`

3. **第三层 -- manual compact**: \`compact\` 工具按需触发同样的摘要机制。

4. 循环整合三层:

\`\`\`python
def agent_loop(messages: list):
    while True:
        micro_compact(messages)                        # Layer 1
        if estimate_tokens(messages) > THRESHOLD:
            messages[:] = auto_compact(messages)       # Layer 2
        response = client.messages.create(...)
        # ... tool execution ...
        if manual_compact:
            messages[:] = auto_compact(messages)       # Layer 3
\`\`\`

完整历史通过 transcript 保存在磁盘上。信息没有真正丢失, 只是移出了活跃上下文。

## 相对 s05 的变更

| 组件           | 之前 (s05)       | 之后 (s06)                     |
|----------------|------------------|--------------------------------|
| Tools          | 5                | 5 (基础 + compact)             |
| 上下文管理     | 无               | 三层压缩                       |
| Micro-compact  | 无               | 旧结果 -> 占位符               |
| Auto-compact   | 无               | token 阈值触发                 |
| Transcripts    | 无               | 保存到 .transcripts/           |

## 试一试

\`\`\`sh
cd learn-claude-code
python agents/s06_context_compact.py
\`\`\`

试试这些 prompt (英文 prompt 对 LLM 效果更好, 也可以用中文):

1. \`Read every Python file in the agents/ directory one by one\` (观察 micro-compact 替换旧结果)
2. \`Keep reading files until compression triggers automatically\`
3. \`Use the compact tool to manually compress the conversation\``,code:`#!/usr/bin/env python3
# Harness: compression -- clean memory for infinite sessions.
"""
s06_context_compact.py - Compact

Three-layer compression pipeline so the agent can work forever:

    Every turn:
    +------------------+
    | Tool call result |
    +------------------+
            |
            v
    [Layer 1: micro_compact]        (silent, every turn)
      Replace tool_result content older than last 3
      with "[Previous: used {tool_name}]"
            |
            v
    [Check: tokens > 50000?]
       |               |
       no              yes
       |               |
       v               v
    continue    [Layer 2: auto_compact]
                  Save full transcript to .transcripts/
                  Ask LLM to summarize conversation.
                  Replace all messages with [summary].
                        |
                        v
                [Layer 3: compact tool]
                  Model calls compact -> immediate summarization.
                  Same as auto, triggered manually.

Key insight: "The agent can forget strategically and keep working forever."
"""

import json
import os
import subprocess
import time
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

if os.getenv("ANTHROPIC_BASE_URL"):
    os.environ.pop("ANTHROPIC_AUTH_TOKEN", None)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]

SYSTEM = f"You are a coding agent at {WORKDIR}. Use tools to solve tasks."

THRESHOLD = 50000
TRANSCRIPT_DIR = WORKDIR / ".transcripts"
KEEP_RECENT = 3


def estimate_tokens(messages: list) -> int:
    """Rough token count: ~4 chars per token."""
    return len(str(messages)) // 4


# -- Layer 1: micro_compact - replace old tool results with placeholders --
def micro_compact(messages: list) -> list:
    # Collect (msg_index, part_index, tool_result_dict) for all tool_result entries
    tool_results = []
    for msg_idx, msg in enumerate(messages):
        if msg["role"] == "user" and isinstance(msg.get("content"), list):
            for part_idx, part in enumerate(msg["content"]):
                if isinstance(part, dict) and part.get("type") == "tool_result":
                    tool_results.append((msg_idx, part_idx, part))
    if len(tool_results) <= KEEP_RECENT:
        return messages
    # Find tool_name for each result by matching tool_use_id in prior assistant messages
    tool_name_map = {}
    for msg in messages:
        if msg["role"] == "assistant":
            content = msg.get("content", [])
            if isinstance(content, list):
                for block in content:
                    if hasattr(block, "type") and block.type == "tool_use":
                        tool_name_map[block.id] = block.name
    # Clear old results (keep last KEEP_RECENT)
    to_clear = tool_results[:-KEEP_RECENT]
    for _, _, result in to_clear:
        if isinstance(result.get("content"), str) and len(result["content"]) > 100:
            tool_id = result.get("tool_use_id", "")
            tool_name = tool_name_map.get(tool_id, "unknown")
            result["content"] = f"[Previous: used {tool_name}]"
    return messages


# -- Layer 2: auto_compact - save transcript, summarize, replace messages --
def auto_compact(messages: list) -> list:
    # Save full transcript to disk
    TRANSCRIPT_DIR.mkdir(exist_ok=True)
    transcript_path = TRANSCRIPT_DIR / f"transcript_{int(time.time())}.jsonl"
    with open(transcript_path, "w") as f:
        for msg in messages:
            f.write(json.dumps(msg, default=str) + "\\n")
    print(f"[transcript saved: {transcript_path}]")
    # Ask LLM to summarize
    conversation_text = json.dumps(messages, default=str)[:80000]
    response = client.messages.create(
        model=MODEL,
        messages=[{"role": "user", "content":
            "Summarize this conversation for continuity. Include: "
            "1) What was accomplished, 2) Current state, 3) Key decisions made. "
            "Be concise but preserve critical details.\\n\\n" + conversation_text}],
        max_tokens=2000,
    )
    summary = response.content[0].text
    # Replace all messages with compressed summary
    return [
        {"role": "user", "content": f"[Conversation compressed. Transcript: {transcript_path}]\\n\\n{summary}"},
        {"role": "assistant", "content": "Understood. I have the context from the summary. Continuing."},
    ]


# -- Tool implementations --
def safe_path(p: str) -> Path:
    path = (WORKDIR / p).resolve()
    if not path.is_relative_to(WORKDIR):
        raise ValueError(f"Path escapes workspace: {p}")
    return path

def run_bash(command: str) -> str:
    dangerous = ["rm -rf /", "sudo", "shutdown", "reboot", "> /dev/"]
    if any(d in command for d in dangerous):
        return "Error: Dangerous command blocked"
    try:
        r = subprocess.run(command, shell=True, cwd=WORKDIR,
                           capture_output=True, text=True, timeout=120)
        out = (r.stdout + r.stderr).strip()
        return out[:50000] if out else "(no output)"
    except subprocess.TimeoutExpired:
        return "Error: Timeout (120s)"

def run_read(path: str, limit: int = None) -> str:
    try:
        lines = safe_path(path).read_text().splitlines()
        if limit and limit < len(lines):
            lines = lines[:limit] + [f"... ({len(lines) - limit} more)"]
        return "\\n".join(lines)[:50000]
    except Exception as e:
        return f"Error: {e}"

def run_write(path: str, content: str) -> str:
    try:
        fp = safe_path(path)
        fp.parent.mkdir(parents=True, exist_ok=True)
        fp.write_text(content)
        return f"Wrote {len(content)} bytes"
    except Exception as e:
        return f"Error: {e}"

def run_edit(path: str, old_text: str, new_text: str) -> str:
    try:
        fp = safe_path(path)
        content = fp.read_text()
        if old_text not in content:
            return f"Error: Text not found in {path}"
        fp.write_text(content.replace(old_text, new_text, 1))
        return f"Edited {path}"
    except Exception as e:
        return f"Error: {e}"


TOOL_HANDLERS = {
    "bash":       lambda **kw: run_bash(kw["command"]),
    "read_file":  lambda **kw: run_read(kw["path"], kw.get("limit")),
    "write_file": lambda **kw: run_write(kw["path"], kw["content"]),
    "edit_file":  lambda **kw: run_edit(kw["path"], kw["old_text"], kw["new_text"]),
    "compact":    lambda **kw: "Manual compression requested.",
}

TOOLS = [
    {"name": "bash", "description": "Run a shell command.",
     "input_schema": {"type": "object", "properties": {"command": {"type": "string"}}, "required": ["command"]}},
    {"name": "read_file", "description": "Read file contents.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "limit": {"type": "integer"}}, "required": ["path"]}},
    {"name": "write_file", "description": "Write content to file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "content": {"type": "string"}}, "required": ["path", "content"]}},
    {"name": "edit_file", "description": "Replace exact text in file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "old_text": {"type": "string"}, "new_text": {"type": "string"}}, "required": ["path", "old_text", "new_text"]}},
    {"name": "compact", "description": "Trigger manual conversation compression.",
     "input_schema": {"type": "object", "properties": {"focus": {"type": "string", "description": "What to preserve in the summary"}}}},
]


def agent_loop(messages: list):
    while True:
        # Layer 1: micro_compact before each LLM call
        micro_compact(messages)
        # Layer 2: auto_compact if token estimate exceeds threshold
        if estimate_tokens(messages) > THRESHOLD:
            print("[auto_compact triggered]")
            messages[:] = auto_compact(messages)
        response = client.messages.create(
            model=MODEL, system=SYSTEM, messages=messages,
            tools=TOOLS, max_tokens=8000,
        )
        messages.append({"role": "assistant", "content": response.content})
        if response.stop_reason != "tool_use":
            return
        results = []
        manual_compact = False
        for block in response.content:
            if block.type == "tool_use":
                if block.name == "compact":
                    manual_compact = True
                    output = "Compressing..."
                else:
                    handler = TOOL_HANDLERS.get(block.name)
                    try:
                        output = handler(**block.input) if handler else f"Unknown tool: {block.name}"
                    except Exception as e:
                        output = f"Error: {e}"
                print(f"> {block.name}: {str(output)[:200]}")
                results.append({"type": "tool_result", "tool_use_id": block.id, "content": str(output)})
        messages.append({"role": "user", "content": results})
        # Layer 3: manual compact triggered by the compact tool
        if manual_compact:
            print("[manual compact]")
            messages[:] = auto_compact(messages)


if __name__ == "__main__":
    history = []
    while True:
        try:
            query = input("\\033[36ms06 >> \\033[0m")
        except (EOFError, KeyboardInterrupt):
            break
        if query.strip().lower() in ("q", "exit", ""):
            break
        history.append({"role": "user", "content": query})
        agent_loop(history)
        response_content = history[-1]["content"]
        if isinstance(response_content, list):
            for block in response_content:
                if hasattr(block, "text"):
                    print(block.text)
        print()
`},{id:"s07",title:"Tasks",subtitle:"任务系统",motto:"大目标要拆成小任务，排好序，记在磁盘上",phase:3,docUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s07-task-system.md",codeUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s07_task_system.py",content:`# s07: Task System (任务系统)

\`s01 > s02 > s03 > s04 > s05 > s06 | [ s07 ] s08 > s09 > s10 > s11 > s12\`

> *"大目标要拆成小任务, 排好序, 记在磁盘上"* -- 文件持久化的任务图, 为多 agent 协作打基础。
>
> **Harness 层**: 持久化任务 -- 比任何一次对话都长命的目标。

## 问题

s03 的 TodoManager 只是内存中的扁平清单: 没有顺序、没有依赖、状态只有做完没做完。真实目标是有结构的 -- 任务 B 依赖任务 A, 任务 C 和 D 可以并行, 任务 E 要等 C 和 D 都完成。

没有显式的关系, 智能体分不清什么能做、什么被卡住、什么能同时跑。而且清单只活在内存里, 上下文压缩 (s06) 一跑就没了。

## 解决方案

把扁平清单升级为持久化到磁盘的**任务图**。每个任务是一个 JSON 文件, 有状态、前置依赖 (\`blockedBy\`) 和后置依赖 (\`blocks\`)。

\`\`\`
.tasks/
  task_1.json  {"id":1, "status":"completed"}
  task_2.json  {"id":2, "blockedBy":[1], "status":"pending"}
  task_3.json  {"id":3, "blockedBy":[1], "status":"pending"}
  task_4.json  {"id":4, "blockedBy":[2,3], "status":"pending"}

任务图 (DAG):
                 +----------+
            +--> | task 2   | --+
            |    | pending  |   |
+----------+     +----------+    +--> +----------+
| task 1   |                          | task 4   |
| completed| --> +----------+    +--> | blocked  |
+----------+     | task 3   | --+     +----------+
                 | pending  |
                 +----------+

顺序:   task 1 必须先完成, 才能开始 2 和 3
并行:   task 2 和 3 可以同时执行
依赖:   task 4 要等 2 和 3 都完成
状态:   pending -> in_progress -> completed
\`\`\`

## 工作原理

1. **TaskManager**: 每个任务一个 JSON 文件, CRUD + 依赖图。

\`\`\`python
class TaskManager:
    def __init__(self, tasks_dir: Path):
        self.dir = tasks_dir
        self.dir.mkdir(exist_ok=True)
        self._next_id = self._max_id() + 1

    def create(self, subject, description=""):
        task = {"id": self._next_id, "subject": subject,
                "status": "pending", "blockedBy": [],
                "blocks": [], "owner": ""}
        self._save(task)
        self._next_id += 1
        return json.dumps(task, indent=2)
\`\`\`

2. **依赖解除**: 完成任务时, 自动将其 ID 从其他任务的 \`blockedBy\` 中移除, 解锁后续任务。

\`\`\`python
def _clear_dependency(self, completed_id):
    for f in self.dir.glob("task_*.json"):
        task = json.loads(f.read_text())
        if completed_id in task.get("blockedBy", []):
            task["blockedBy"].remove(completed_id)
            self._save(task)
\`\`\`

3. **状态变更 + 依赖关联**: \`update\` 处理状态转换和依赖边。

\`\`\`python
def update(self, task_id, status=None,
           add_blocked_by=None, add_blocks=None):
    task = self._load(task_id)
    if status:
        task["status"] = status
        if status == "completed":
            self._clear_dependency(task_id)
    self._save(task)
\`\`\`

4. 四个任务工具加入 dispatch map。

\`\`\`python
TOOL_HANDLERS = {
    # ...base tools...
    "task_create": lambda **kw: TASKS.create(kw["subject"]),
    "task_update": lambda **kw: TASKS.update(kw["task_id"], kw.get("status")),
    "task_list":   lambda **kw: TASKS.list_all(),
    "task_get":    lambda **kw: TASKS.get(kw["task_id"]),
}
\`\`\`

## 相对 s06 的变更

| 组件 | 之前 (s06) | 之后 (s07) |
|---|---|---|
| Tools | 5 | 8 (\`task_create/update/list/get\`) |
| 规划模型 | 扁平清单 (仅内存) | 带依赖关系的任务图 (磁盘) |
| 关系 | 无 | \`blockedBy\` + \`blocks\` 边 |
| 状态追踪 | 做完没做完 | \`pending\` -> \`in_progress\` -> \`completed\` |
| 持久化 | 压缩后丢失 | 压缩和重启后存活 |

## 试一试

\`\`\`sh
cd learn-claude-code
python agents/s07_task_system.py
\`\`\`

试试这些 prompt (英文 prompt 对 LLM 效果更好, 也可以用中文):

1. \`Create 3 tasks: "Setup project", "Write code", "Write tests". Make them depend on each other in order.\`
2. \`List all tasks and show the dependency graph\`
3. \`Complete task 1 and then list tasks to see task 2 unblocked\`
4. \`Create a task board for refactoring: parse -> transform -> emit -> test, where transform and emit can run in parallel after parse\``,code:`#!/usr/bin/env python3
# Harness: persistent tasks -- goals that outlive any single conversation.
"""
s07_task_system.py - Tasks

Tasks persist as JSON files in .tasks/ so they survive context compression.
Each task has a dependency graph (blockedBy/blocks).

    .tasks/
      task_1.json  {"id":1, "subject":"...", "status":"completed", ...}
      task_2.json  {"id":2, "blockedBy":[1], "status":"pending", ...}
      task_3.json  {"id":3, "blockedBy":[2], "blocks":[], ...}

    Dependency resolution:
    +----------+     +----------+     +----------+
    | task 1   | --> | task 2   | --> | task 3   |
    | complete |     | blocked  |     | blocked  |
    +----------+     +----------+     +----------+
         |                ^
         +--- completing task 1 removes it from task 2's blockedBy

Key insight: "State that survives compression -- because it's outside the conversation."
"""

import json
import os
import subprocess
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

if os.getenv("ANTHROPIC_BASE_URL"):
    os.environ.pop("ANTHROPIC_AUTH_TOKEN", None)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]
TASKS_DIR = WORKDIR / ".tasks"

SYSTEM = f"You are a coding agent at {WORKDIR}. Use task tools to plan and track work."


# -- TaskManager: CRUD with dependency graph, persisted as JSON files --
class TaskManager:
    def __init__(self, tasks_dir: Path):
        self.dir = tasks_dir
        self.dir.mkdir(exist_ok=True)
        self._next_id = self._max_id() + 1

    def _max_id(self) -> int:
        ids = [int(f.stem.split("_")[1]) for f in self.dir.glob("task_*.json")]
        return max(ids) if ids else 0

    def _load(self, task_id: int) -> dict:
        path = self.dir / f"task_{task_id}.json"
        if not path.exists():
            raise ValueError(f"Task {task_id} not found")
        return json.loads(path.read_text())

    def _save(self, task: dict):
        path = self.dir / f"task_{task['id']}.json"
        path.write_text(json.dumps(task, indent=2))

    def create(self, subject: str, description: str = "") -> str:
        task = {
            "id": self._next_id, "subject": subject, "description": description,
            "status": "pending", "blockedBy": [], "blocks": [], "owner": "",
        }
        self._save(task)
        self._next_id += 1
        return json.dumps(task, indent=2)

    def get(self, task_id: int) -> str:
        return json.dumps(self._load(task_id), indent=2)

    def update(self, task_id: int, status: str = None,
               add_blocked_by: list = None, add_blocks: list = None) -> str:
        task = self._load(task_id)
        if status:
            if status not in ("pending", "in_progress", "completed"):
                raise ValueError(f"Invalid status: {status}")
            task["status"] = status
            # When a task is completed, remove it from all other tasks' blockedBy
            if status == "completed":
                self._clear_dependency(task_id)
        if add_blocked_by:
            task["blockedBy"] = list(set(task["blockedBy"] + add_blocked_by))
        if add_blocks:
            task["blocks"] = list(set(task["blocks"] + add_blocks))
            # Bidirectional: also update the blocked tasks' blockedBy lists
            for blocked_id in add_blocks:
                try:
                    blocked = self._load(blocked_id)
                    if task_id not in blocked["blockedBy"]:
                        blocked["blockedBy"].append(task_id)
                        self._save(blocked)
                except ValueError:
                    pass
        self._save(task)
        return json.dumps(task, indent=2)

    def _clear_dependency(self, completed_id: int):
        """Remove completed_id from all other tasks' blockedBy lists."""
        for f in self.dir.glob("task_*.json"):
            task = json.loads(f.read_text())
            if completed_id in task.get("blockedBy", []):
                task["blockedBy"].remove(completed_id)
                self._save(task)

    def list_all(self) -> str:
        tasks = []
        for f in sorted(self.dir.glob("task_*.json")):
            tasks.append(json.loads(f.read_text()))
        if not tasks:
            return "No tasks."
        lines = []
        for t in tasks:
            marker = {"pending": "[ ]", "in_progress": "[>]", "completed": "[x]"}.get(t["status"], "[?]")
            blocked = f" (blocked by: {t['blockedBy']})" if t.get("blockedBy") else ""
            lines.append(f"{marker} #{t['id']}: {t['subject']}{blocked}")
        return "\\n".join(lines)


TASKS = TaskManager(TASKS_DIR)


# -- Base tool implementations --
def safe_path(p: str) -> Path:
    path = (WORKDIR / p).resolve()
    if not path.is_relative_to(WORKDIR):
        raise ValueError(f"Path escapes workspace: {p}")
    return path

def run_bash(command: str) -> str:
    dangerous = ["rm -rf /", "sudo", "shutdown", "reboot", "> /dev/"]
    if any(d in command for d in dangerous):
        return "Error: Dangerous command blocked"
    try:
        r = subprocess.run(command, shell=True, cwd=WORKDIR,
                           capture_output=True, text=True, timeout=120)
        out = (r.stdout + r.stderr).strip()
        return out[:50000] if out else "(no output)"
    except subprocess.TimeoutExpired:
        return "Error: Timeout (120s)"

def run_read(path: str, limit: int = None) -> str:
    try:
        lines = safe_path(path).read_text().splitlines()
        if limit and limit < len(lines):
            lines = lines[:limit] + [f"... ({len(lines) - limit} more)"]
        return "\\n".join(lines)[:50000]
    except Exception as e:
        return f"Error: {e}"

def run_write(path: str, content: str) -> str:
    try:
        fp = safe_path(path)
        fp.parent.mkdir(parents=True, exist_ok=True)
        fp.write_text(content)
        return f"Wrote {len(content)} bytes"
    except Exception as e:
        return f"Error: {e}"

def run_edit(path: str, old_text: str, new_text: str) -> str:
    try:
        fp = safe_path(path)
        c = fp.read_text()
        if old_text not in c:
            return f"Error: Text not found in {path}"
        fp.write_text(c.replace(old_text, new_text, 1))
        return f"Edited {path}"
    except Exception as e:
        return f"Error: {e}"


TOOL_HANDLERS = {
    "bash":        lambda **kw: run_bash(kw["command"]),
    "read_file":   lambda **kw: run_read(kw["path"], kw.get("limit")),
    "write_file":  lambda **kw: run_write(kw["path"], kw["content"]),
    "edit_file":   lambda **kw: run_edit(kw["path"], kw["old_text"], kw["new_text"]),
    "task_create": lambda **kw: TASKS.create(kw["subject"], kw.get("description", "")),
    "task_update": lambda **kw: TASKS.update(kw["task_id"], kw.get("status"), kw.get("addBlockedBy"), kw.get("addBlocks")),
    "task_list":   lambda **kw: TASKS.list_all(),
    "task_get":    lambda **kw: TASKS.get(kw["task_id"]),
}

TOOLS = [
    {"name": "bash", "description": "Run a shell command.",
     "input_schema": {"type": "object", "properties": {"command": {"type": "string"}}, "required": ["command"]}},
    {"name": "read_file", "description": "Read file contents.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "limit": {"type": "integer"}}, "required": ["path"]}},
    {"name": "write_file", "description": "Write content to file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "content": {"type": "string"}}, "required": ["path", "content"]}},
    {"name": "edit_file", "description": "Replace exact text in file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "old_text": {"type": "string"}, "new_text": {"type": "string"}}, "required": ["path", "old_text", "new_text"]}},
    {"name": "task_create", "description": "Create a new task.",
     "input_schema": {"type": "object", "properties": {"subject": {"type": "string"}, "description": {"type": "string"}}, "required": ["subject"]}},
    {"name": "task_update", "description": "Update a task's status or dependencies.",
     "input_schema": {"type": "object", "properties": {"task_id": {"type": "integer"}, "status": {"type": "string", "enum": ["pending", "in_progress", "completed"]}, "addBlockedBy": {"type": "array", "items": {"type": "integer"}}, "addBlocks": {"type": "array", "items": {"type": "integer"}}}, "required": ["task_id"]}},
    {"name": "task_list", "description": "List all tasks with status summary.",
     "input_schema": {"type": "object", "properties": {}}},
    {"name": "task_get", "description": "Get full details of a task by ID.",
     "input_schema": {"type": "object", "properties": {"task_id": {"type": "integer"}}, "required": ["task_id"]}},
]


def agent_loop(messages: list):
    while True:
        response = client.messages.create(
            model=MODEL, system=SYSTEM, messages=messages,
            tools=TOOLS, max_tokens=8000,
        )
        messages.append({"role": "assistant", "content": response.content})
        if response.stop_reason != "tool_use":
            return
        results = []
        for block in response.content:
            if block.type == "tool_use":
                handler = TOOL_HANDLERS.get(block.name)
                try:
                    output = handler(**block.input) if handler else f"Unknown tool: {block.name}"
                except Exception as e:
                    output = f"Error: {e}"
                print(f"> {block.name}: {str(output)[:200]}")
                results.append({"type": "tool_result", "tool_use_id": block.id, "content": str(output)})
        messages.append({"role": "user", "content": results})


if __name__ == "__main__":
    history = []
    while True:
        try:
            query = input("\\033[36ms07 >> \\033[0m")
        except (EOFError, KeyboardInterrupt):
            break
        if query.strip().lower() in ("q", "exit", ""):
            break
        history.append({"role": "user", "content": query})
        agent_loop(history)
        response_content = history[-1]["content"]
        if isinstance(response_content, list):
            for block in response_content:
                if hasattr(block, "text"):
                    print(block.text)
        print()
`},{id:"s08",title:"Background Tasks",subtitle:"后台任务",motto:"慢操作丢后台，agent 继续想下一步",phase:3,docUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s08-background-tasks.md",codeUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s08_background_tasks.py",content:`# s08: Background Tasks (后台任务)

\`s01 > s02 > s03 > s04 > s05 > s06 | s07 > [ s08 ] s09 > s10 > s11 > s12\`

> *"慢操作丢后台, agent 继续想下一步"* -- 后台线程跑命令, 完成后注入通知。
>
> **Harness 层**: 后台执行 -- 模型继续思考, harness 负责等待。

## 问题

有些命令要跑好几分钟: \`npm install\`、\`pytest\`、\`docker build\`。阻塞式循环下模型只能干等。用户说 "装依赖, 顺便建个配置文件", 智能体却只能一个一个来。

## 解决方案

\`\`\`
Main thread                Background thread
+-----------------+        +-----------------+
| agent loop      |        | subprocess runs |
| ...             |        | ...             |
| [LLM call] <---+------- | enqueue(result) |
|  ^drain queue   |        +-----------------+
+-----------------+

Timeline:
Agent --[spawn A]--[spawn B]--[other work]----
             |          |
             v          v
          [A runs]   [B runs]      (parallel)
             |          |
             +-- results injected before next LLM call --+
\`\`\`

## 工作原理

1. BackgroundManager 用线程安全的通知队列追踪任务。

\`\`\`python
class BackgroundManager:
    def __init__(self):
        self.tasks = {}
        self._notification_queue = []
        self._lock = threading.Lock()
\`\`\`

2. \`run()\` 启动守护线程, 立即返回。

\`\`\`python
def run(self, command: str) -> str:
    task_id = str(uuid.uuid4())[:8]
    self.tasks[task_id] = {"status": "running", "command": command}
    thread = threading.Thread(
        target=self._execute, args=(task_id, command), daemon=True)
    thread.start()
    return f"Background task {task_id} started"
\`\`\`

3. 子进程完成后, 结果进入通知队列。

\`\`\`python
def _execute(self, task_id, command):
    try:
        r = subprocess.run(command, shell=True, cwd=WORKDIR,
            capture_output=True, text=True, timeout=300)
        output = (r.stdout + r.stderr).strip()[:50000]
    except subprocess.TimeoutExpired:
        output = "Error: Timeout (300s)"
    with self._lock:
        self._notification_queue.append({
            "task_id": task_id, "result": output[:500]})
\`\`\`

4. 每次 LLM 调用前排空通知队列。

\`\`\`python
def agent_loop(messages: list):
    while True:
        notifs = BG.drain_notifications()
        if notifs:
            notif_text = "\\n".join(
                f"[bg:{n['task_id']}] {n['result']}" for n in notifs)
            messages.append({"role": "user",
                "content": f"<background-results>\\n{notif_text}\\n"
                           f"</background-results>"})
            messages.append({"role": "assistant",
                "content": "Noted background results."})
        response = client.messages.create(...)
\`\`\`

循环保持单线程。只有子进程 I/O 被并行化。

## 相对 s07 的变更

| 组件           | 之前 (s07)       | 之后 (s08)                         |
|----------------|------------------|------------------------------------|
| Tools          | 8                | 6 (基础 + background_run + check)  |
| 执行方式       | 仅阻塞           | 阻塞 + 后台线程                    |
| 通知机制       | 无               | 每轮排空的队列                     |
| 并发           | 无               | 守护线程                           |

## 试一试

\`\`\`sh
cd learn-claude-code
python agents/s08_background_tasks.py
\`\`\`

试试这些 prompt (英文 prompt 对 LLM 效果更好, 也可以用中文):

1. \`Run "sleep 5 && echo done" in the background, then create a file while it runs\`
2. \`Start 3 background tasks: "sleep 2", "sleep 4", "sleep 6". Check their status.\`
3. \`Run pytest in the background and keep working on other things\``,code:`#!/usr/bin/env python3
# Harness: background execution -- the model thinks while the harness waits.
"""
s08_background_tasks.py - Background Tasks

Run commands in background threads. A notification queue is drained
before each LLM call to deliver results.

    Main thread                Background thread
    +-----------------+        +-----------------+
    | agent loop      |        | task executes   |
    | ...             |        | ...             |
    | [LLM call] <---+------- | enqueue(result) |
    |  ^drain queue   |        +-----------------+
    +-----------------+

    Timeline:
    Agent ----[spawn A]----[spawn B]----[other work]----
                 |              |
                 v              v
              [A runs]      [B runs]        (parallel)
                 |              |
                 +-- notification queue --> [results injected]

Key insight: "Fire and forget -- the agent doesn't block while the command runs."
"""

import os
import subprocess
import threading
import uuid
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

if os.getenv("ANTHROPIC_BASE_URL"):
    os.environ.pop("ANTHROPIC_AUTH_TOKEN", None)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]

SYSTEM = f"You are a coding agent at {WORKDIR}. Use background_run for long-running commands."


# -- BackgroundManager: threaded execution + notification queue --
class BackgroundManager:
    def __init__(self):
        self.tasks = {}  # task_id -> {status, result, command}
        self._notification_queue = []  # completed task results
        self._lock = threading.Lock()

    def run(self, command: str) -> str:
        """Start a background thread, return task_id immediately."""
        task_id = str(uuid.uuid4())[:8]
        self.tasks[task_id] = {"status": "running", "result": None, "command": command}
        thread = threading.Thread(
            target=self._execute, args=(task_id, command), daemon=True
        )
        thread.start()
        return f"Background task {task_id} started: {command[:80]}"

    def _execute(self, task_id: str, command: str):
        """Thread target: run subprocess, capture output, push to queue."""
        try:
            r = subprocess.run(
                command, shell=True, cwd=WORKDIR,
                capture_output=True, text=True, timeout=300
            )
            output = (r.stdout + r.stderr).strip()[:50000]
            status = "completed"
        except subprocess.TimeoutExpired:
            output = "Error: Timeout (300s)"
            status = "timeout"
        except Exception as e:
            output = f"Error: {e}"
            status = "error"
        self.tasks[task_id]["status"] = status
        self.tasks[task_id]["result"] = output or "(no output)"
        with self._lock:
            self._notification_queue.append({
                "task_id": task_id,
                "status": status,
                "command": command[:80],
                "result": (output or "(no output)")[:500],
            })

    def check(self, task_id: str = None) -> str:
        """Check status of one task or list all."""
        if task_id:
            t = self.tasks.get(task_id)
            if not t:
                return f"Error: Unknown task {task_id}"
            return f"[{t['status']}] {t['command'][:60]}\\n{t.get('result') or '(running)'}"
        lines = []
        for tid, t in self.tasks.items():
            lines.append(f"{tid}: [{t['status']}] {t['command'][:60]}")
        return "\\n".join(lines) if lines else "No background tasks."

    def drain_notifications(self) -> list:
        """Return and clear all pending completion notifications."""
        with self._lock:
            notifs = list(self._notification_queue)
            self._notification_queue.clear()
        return notifs


BG = BackgroundManager()


# -- Tool implementations --
def safe_path(p: str) -> Path:
    path = (WORKDIR / p).resolve()
    if not path.is_relative_to(WORKDIR):
        raise ValueError(f"Path escapes workspace: {p}")
    return path

def run_bash(command: str) -> str:
    dangerous = ["rm -rf /", "sudo", "shutdown", "reboot", "> /dev/"]
    if any(d in command for d in dangerous):
        return "Error: Dangerous command blocked"
    try:
        r = subprocess.run(command, shell=True, cwd=WORKDIR,
                           capture_output=True, text=True, timeout=120)
        out = (r.stdout + r.stderr).strip()
        return out[:50000] if out else "(no output)"
    except subprocess.TimeoutExpired:
        return "Error: Timeout (120s)"

def run_read(path: str, limit: int = None) -> str:
    try:
        lines = safe_path(path).read_text().splitlines()
        if limit and limit < len(lines):
            lines = lines[:limit] + [f"... ({len(lines) - limit} more)"]
        return "\\n".join(lines)[:50000]
    except Exception as e:
        return f"Error: {e}"

def run_write(path: str, content: str) -> str:
    try:
        fp = safe_path(path)
        fp.parent.mkdir(parents=True, exist_ok=True)
        fp.write_text(content)
        return f"Wrote {len(content)} bytes"
    except Exception as e:
        return f"Error: {e}"

def run_edit(path: str, old_text: str, new_text: str) -> str:
    try:
        fp = safe_path(path)
        c = fp.read_text()
        if old_text not in c:
            return f"Error: Text not found in {path}"
        fp.write_text(c.replace(old_text, new_text, 1))
        return f"Edited {path}"
    except Exception as e:
        return f"Error: {e}"


TOOL_HANDLERS = {
    "bash":             lambda **kw: run_bash(kw["command"]),
    "read_file":        lambda **kw: run_read(kw["path"], kw.get("limit")),
    "write_file":       lambda **kw: run_write(kw["path"], kw["content"]),
    "edit_file":        lambda **kw: run_edit(kw["path"], kw["old_text"], kw["new_text"]),
    "background_run":   lambda **kw: BG.run(kw["command"]),
    "check_background": lambda **kw: BG.check(kw.get("task_id")),
}

TOOLS = [
    {"name": "bash", "description": "Run a shell command (blocking).",
     "input_schema": {"type": "object", "properties": {"command": {"type": "string"}}, "required": ["command"]}},
    {"name": "read_file", "description": "Read file contents.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "limit": {"type": "integer"}}, "required": ["path"]}},
    {"name": "write_file", "description": "Write content to file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "content": {"type": "string"}}, "required": ["path", "content"]}},
    {"name": "edit_file", "description": "Replace exact text in file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "old_text": {"type": "string"}, "new_text": {"type": "string"}}, "required": ["path", "old_text", "new_text"]}},
    {"name": "background_run", "description": "Run command in background thread. Returns task_id immediately.",
     "input_schema": {"type": "object", "properties": {"command": {"type": "string"}}, "required": ["command"]}},
    {"name": "check_background", "description": "Check background task status. Omit task_id to list all.",
     "input_schema": {"type": "object", "properties": {"task_id": {"type": "string"}}}},
]


def agent_loop(messages: list):
    while True:
        # Drain background notifications and inject as system message before LLM call
        notifs = BG.drain_notifications()
        if notifs and messages:
            notif_text = "\\n".join(
                f"[bg:{n['task_id']}] {n['status']}: {n['result']}" for n in notifs
            )
            messages.append({"role": "user", "content": f"<background-results>\\n{notif_text}\\n</background-results>"})
            messages.append({"role": "assistant", "content": "Noted background results."})
        response = client.messages.create(
            model=MODEL, system=SYSTEM, messages=messages,
            tools=TOOLS, max_tokens=8000,
        )
        messages.append({"role": "assistant", "content": response.content})
        if response.stop_reason != "tool_use":
            return
        results = []
        for block in response.content:
            if block.type == "tool_use":
                handler = TOOL_HANDLERS.get(block.name)
                try:
                    output = handler(**block.input) if handler else f"Unknown tool: {block.name}"
                except Exception as e:
                    output = f"Error: {e}"
                print(f"> {block.name}: {str(output)[:200]}")
                results.append({"type": "tool_result", "tool_use_id": block.id, "content": str(output)})
        messages.append({"role": "user", "content": results})


if __name__ == "__main__":
    history = []
    while True:
        try:
            query = input("\\033[36ms08 >> \\033[0m")
        except (EOFError, KeyboardInterrupt):
            break
        if query.strip().lower() in ("q", "exit", ""):
            break
        history.append({"role": "user", "content": query})
        agent_loop(history)
        response_content = history[-1]["content"]
        if isinstance(response_content, list):
            for block in response_content:
                if hasattr(block, "text"):
                    print(block.text)
        print()
`},{id:"s09",title:"Agent Teams",subtitle:"智能体团队",motto:"任务太大一个人干不完，要能分给队友",phase:3,docUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s09-agent-teams.md",codeUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s09_agent_teams.py",content:`# s09: Agent Teams (智能体团队)

\`s01 > s02 > s03 > s04 > s05 > s06 | s07 > s08 > [ s09 ] s10 > s11 > s12\`

> *"任务太大一个人干不完, 要能分给队友"* -- 持久化队友 + JSONL 邮箱。
>
> **Harness 层**: 团队邮箱 -- 多个模型, 通过文件协调。

## 问题

子智能体 (s04) 是一次性的: 生成、干活、返回摘要、消亡。没有身份, 没有跨调用的记忆。后台任务 (s08) 能跑 shell 命令, 但做不了 LLM 引导的决策。

真正的团队协作需要三样东西: (1) 能跨多轮对话存活的持久智能体, (2) 身份和生命周期管理, (3) 智能体之间的通信通道。

## 解决方案

\`\`\`
Teammate lifecycle:
  spawn -> WORKING -> IDLE -> WORKING -> ... -> SHUTDOWN

Communication:
  .team/
    config.json           <- team roster + statuses
    inbox/
      alice.jsonl         <- append-only, drain-on-read
      bob.jsonl
      lead.jsonl

              +--------+    send("alice","bob","...")    +--------+
              | alice  | -----------------------------> |  bob   |
              | loop   |    bob.jsonl << {json_line}    |  loop  |
              +--------+                                +--------+
                   ^                                         |
                   |        BUS.read_inbox("alice")          |
                   +---- alice.jsonl -> read + drain ---------+
\`\`\`

## 工作原理

1. TeammateManager 通过 config.json 维护团队名册。

\`\`\`python
class TeammateManager:
    def __init__(self, team_dir: Path):
        self.dir = team_dir
        self.dir.mkdir(exist_ok=True)
        self.config_path = self.dir / "config.json"
        self.config = self._load_config()
        self.threads = {}
\`\`\`

2. \`spawn()\` 创建队友并在线程中启动 agent loop。

\`\`\`python
def spawn(self, name: str, role: str, prompt: str) -> str:
    member = {"name": name, "role": role, "status": "working"}
    self.config["members"].append(member)
    self._save_config()
    thread = threading.Thread(
        target=self._teammate_loop,
        args=(name, role, prompt), daemon=True)
    thread.start()
    return f"Spawned teammate '{name}' (role: {role})"
\`\`\`

3. MessageBus: append-only 的 JSONL 收件箱。\`send()\` 追加一行; \`read_inbox()\` 读取全部并清空。

\`\`\`python
class MessageBus:
    def send(self, sender, to, content, msg_type="message", extra=None):
        msg = {"type": msg_type, "from": sender,
               "content": content, "timestamp": time.time()}
        if extra:
            msg.update(extra)
        with open(self.dir / f"{to}.jsonl", "a") as f:
            f.write(json.dumps(msg) + "\\n")

    def read_inbox(self, name):
        path = self.dir / f"{name}.jsonl"
        if not path.exists(): return "[]"
        msgs = [json.loads(l) for l in path.read_text().strip().splitlines() if l]
        path.write_text("")  # drain
        return json.dumps(msgs, indent=2)
\`\`\`

4. 每个队友在每次 LLM 调用前检查收件箱, 将消息注入上下文。

\`\`\`python
def _teammate_loop(self, name, role, prompt):
    messages = [{"role": "user", "content": prompt}]
    for _ in range(50):
        inbox = BUS.read_inbox(name)
        if inbox != "[]":
            messages.append({"role": "user",
                "content": f"<inbox>{inbox}</inbox>"})
            messages.append({"role": "assistant",
                "content": "Noted inbox messages."})
        response = client.messages.create(...)
        if response.stop_reason != "tool_use":
            break
        # execute tools, append results...
    self._find_member(name)["status"] = "idle"
\`\`\`

## 相对 s08 的变更

| 组件           | 之前 (s08)       | 之后 (s09)                         |
|----------------|------------------|------------------------------------|
| Tools          | 6                | 9 (+spawn/send/read_inbox)         |
| 智能体数量     | 单一             | 领导 + N 个队友                    |
| 持久化         | 无               | config.json + JSONL 收件箱         |
| 线程           | 后台命令         | 每线程完整 agent loop              |
| 生命周期       | 一次性           | idle -> working -> idle            |
| 通信           | 无               | message + broadcast                |

## 试一试

\`\`\`sh
cd learn-claude-code
python agents/s09_agent_teams.py
\`\`\`

试试这些 prompt (英文 prompt 对 LLM 效果更好, 也可以用中文):

1. \`Spawn alice (coder) and bob (tester). Have alice send bob a message.\`
2. \`Broadcast "status update: phase 1 complete" to all teammates\`
3. \`Check the lead inbox for any messages\`
4. 输入 \`/team\` 查看团队名册和状态
5. 输入 \`/inbox\` 手动检查领导的收件箱`,code:`#!/usr/bin/env python3
# Harness: team mailboxes -- multiple models, coordinated through files.
"""
s09_agent_teams.py - Agent Teams

Persistent named agents with file-based JSONL inboxes. Each teammate runs
its own agent loop in a separate thread. Communication via append-only inboxes.

    Subagent (s04):  spawn -> execute -> return summary -> destroyed
    Teammate (s09):  spawn -> work -> idle -> work -> ... -> shutdown

    .team/config.json                   .team/inbox/
    +----------------------------+      +------------------+
    | {"team_name": "default",   |      | alice.jsonl      |
    |  "members": [              |      | bob.jsonl        |
    |    {"name":"alice",        |      | lead.jsonl       |
    |     "role":"coder",        |      +------------------+
    |     "status":"idle"}       |
    |  ]}                        |      send_message("alice", "fix bug"):
    +----------------------------+        open("alice.jsonl", "a").write(msg)

                                        read_inbox("alice"):
    spawn_teammate("alice","coder",...)   msgs = [json.loads(l) for l in ...]
         |                                open("alice.jsonl", "w").close()
         v                                return msgs  # drain
    Thread: alice             Thread: bob
    +------------------+      +------------------+
    | agent_loop       |      | agent_loop       |
    | status: working  |      | status: idle     |
    | ... runs tools   |      | ... waits ...    |
    | status -> idle   |      |                  |
    +------------------+      +------------------+

    5 message types (all declared, not all handled here):
    +-------------------------+-----------------------------------+
    | message                 | Normal text message               |
    | broadcast               | Sent to all teammates             |
    | shutdown_request        | Request graceful shutdown (s10)   |
    | shutdown_response       | Approve/reject shutdown (s10)     |
    | plan_approval_response  | Approve/reject plan (s10)         |
    +-------------------------+-----------------------------------+

Key insight: "Teammates that can talk to each other."
"""

import json
import os
import subprocess
import threading
import time
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)
if os.getenv("ANTHROPIC_BASE_URL"):
    os.environ.pop("ANTHROPIC_AUTH_TOKEN", None)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]
TEAM_DIR = WORKDIR / ".team"
INBOX_DIR = TEAM_DIR / "inbox"

SYSTEM = f"You are a team lead at {WORKDIR}. Spawn teammates and communicate via inboxes."

VALID_MSG_TYPES = {
    "message",
    "broadcast",
    "shutdown_request",
    "shutdown_response",
    "plan_approval_response",
}


# -- MessageBus: JSONL inbox per teammate --
class MessageBus:
    def __init__(self, inbox_dir: Path):
        self.dir = inbox_dir
        self.dir.mkdir(parents=True, exist_ok=True)

    def send(self, sender: str, to: str, content: str,
             msg_type: str = "message", extra: dict = None) -> str:
        if msg_type not in VALID_MSG_TYPES:
            return f"Error: Invalid type '{msg_type}'. Valid: {VALID_MSG_TYPES}"
        msg = {
            "type": msg_type,
            "from": sender,
            "content": content,
            "timestamp": time.time(),
        }
        if extra:
            msg.update(extra)
        inbox_path = self.dir / f"{to}.jsonl"
        with open(inbox_path, "a") as f:
            f.write(json.dumps(msg) + "\\n")
        return f"Sent {msg_type} to {to}"

    def read_inbox(self, name: str) -> list:
        inbox_path = self.dir / f"{name}.jsonl"
        if not inbox_path.exists():
            return []
        messages = []
        for line in inbox_path.read_text().strip().splitlines():
            if line:
                messages.append(json.loads(line))
        inbox_path.write_text("")
        return messages

    def broadcast(self, sender: str, content: str, teammates: list) -> str:
        count = 0
        for name in teammates:
            if name != sender:
                self.send(sender, name, content, "broadcast")
                count += 1
        return f"Broadcast to {count} teammates"


BUS = MessageBus(INBOX_DIR)


# -- TeammateManager: persistent named agents with config.json --
class TeammateManager:
    def __init__(self, team_dir: Path):
        self.dir = team_dir
        self.dir.mkdir(exist_ok=True)
        self.config_path = self.dir / "config.json"
        self.config = self._load_config()
        self.threads = {}

    def _load_config(self) -> dict:
        if self.config_path.exists():
            return json.loads(self.config_path.read_text())
        return {"team_name": "default", "members": []}

    def _save_config(self):
        self.config_path.write_text(json.dumps(self.config, indent=2))

    def _find_member(self, name: str) -> dict:
        for m in self.config["members"]:
            if m["name"] == name:
                return m
        return None

    def spawn(self, name: str, role: str, prompt: str) -> str:
        member = self._find_member(name)
        if member:
            if member["status"] not in ("idle", "shutdown"):
                return f"Error: '{name}' is currently {member['status']}"
            member["status"] = "working"
            member["role"] = role
        else:
            member = {"name": name, "role": role, "status": "working"}
            self.config["members"].append(member)
        self._save_config()
        thread = threading.Thread(
            target=self._teammate_loop,
            args=(name, role, prompt),
            daemon=True,
        )
        self.threads[name] = thread
        thread.start()
        return f"Spawned '{name}' (role: {role})"

    def _teammate_loop(self, name: str, role: str, prompt: str):
        sys_prompt = (
            f"You are '{name}', role: {role}, at {WORKDIR}. "
            f"Use send_message to communicate. Complete your task."
        )
        messages = [{"role": "user", "content": prompt}]
        tools = self._teammate_tools()
        for _ in range(50):
            inbox = BUS.read_inbox(name)
            for msg in inbox:
                messages.append({"role": "user", "content": json.dumps(msg)})
            try:
                response = client.messages.create(
                    model=MODEL,
                    system=sys_prompt,
                    messages=messages,
                    tools=tools,
                    max_tokens=8000,
                )
            except Exception:
                break
            messages.append({"role": "assistant", "content": response.content})
            if response.stop_reason != "tool_use":
                break
            results = []
            for block in response.content:
                if block.type == "tool_use":
                    output = self._exec(name, block.name, block.input)
                    print(f"  [{name}] {block.name}: {str(output)[:120]}")
                    results.append({
                        "type": "tool_result",
                        "tool_use_id": block.id,
                        "content": str(output),
                    })
            messages.append({"role": "user", "content": results})
        member = self._find_member(name)
        if member and member["status"] != "shutdown":
            member["status"] = "idle"
            self._save_config()

    def _exec(self, sender: str, tool_name: str, args: dict) -> str:
        # these base tools are unchanged from s02
        if tool_name == "bash":
            return _run_bash(args["command"])
        if tool_name == "read_file":
            return _run_read(args["path"])
        if tool_name == "write_file":
            return _run_write(args["path"], args["content"])
        if tool_name == "edit_file":
            return _run_edit(args["path"], args["old_text"], args["new_text"])
        if tool_name == "send_message":
            return BUS.send(sender, args["to"], args["content"], args.get("msg_type", "message"))
        if tool_name == "read_inbox":
            return json.dumps(BUS.read_inbox(sender), indent=2)
        return f"Unknown tool: {tool_name}"

    def _teammate_tools(self) -> list:
        # these base tools are unchanged from s02
        return [
            {"name": "bash", "description": "Run a shell command.",
             "input_schema": {"type": "object", "properties": {"command": {"type": "string"}}, "required": ["command"]}},
            {"name": "read_file", "description": "Read file contents.",
             "input_schema": {"type": "object", "properties": {"path": {"type": "string"}}, "required": ["path"]}},
            {"name": "write_file", "description": "Write content to file.",
             "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "content": {"type": "string"}}, "required": ["path", "content"]}},
            {"name": "edit_file", "description": "Replace exact text in file.",
             "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "old_text": {"type": "string"}, "new_text": {"type": "string"}}, "required": ["path", "old_text", "new_text"]}},
            {"name": "send_message", "description": "Send message to a teammate.",
             "input_schema": {"type": "object", "properties": {"to": {"type": "string"}, "content": {"type": "string"}, "msg_type": {"type": "string", "enum": list(VALID_MSG_TYPES)}}, "required": ["to", "content"]}},
            {"name": "read_inbox", "description": "Read and drain your inbox.",
             "input_schema": {"type": "object", "properties": {}}},
        ]

    def list_all(self) -> str:
        if not self.config["members"]:
            return "No teammates."
        lines = [f"Team: {self.config['team_name']}"]
        for m in self.config["members"]:
            lines.append(f"  {m['name']} ({m['role']}): {m['status']}")
        return "\\n".join(lines)

    def member_names(self) -> list:
        return [m["name"] for m in self.config["members"]]


TEAM = TeammateManager(TEAM_DIR)


# -- Base tool implementations (these base tools are unchanged from s02) --
def _safe_path(p: str) -> Path:
    path = (WORKDIR / p).resolve()
    if not path.is_relative_to(WORKDIR):
        raise ValueError(f"Path escapes workspace: {p}")
    return path


def _run_bash(command: str) -> str:
    dangerous = ["rm -rf /", "sudo", "shutdown", "reboot"]
    if any(d in command for d in dangerous):
        return "Error: Dangerous command blocked"
    try:
        r = subprocess.run(
            command, shell=True, cwd=WORKDIR,
            capture_output=True, text=True, timeout=120,
        )
        out = (r.stdout + r.stderr).strip()
        return out[:50000] if out else "(no output)"
    except subprocess.TimeoutExpired:
        return "Error: Timeout (120s)"


def _run_read(path: str, limit: int = None) -> str:
    try:
        lines = _safe_path(path).read_text().splitlines()
        if limit and limit < len(lines):
            lines = lines[:limit] + [f"... ({len(lines) - limit} more)"]
        return "\\n".join(lines)[:50000]
    except Exception as e:
        return f"Error: {e}"


def _run_write(path: str, content: str) -> str:
    try:
        fp = _safe_path(path)
        fp.parent.mkdir(parents=True, exist_ok=True)
        fp.write_text(content)
        return f"Wrote {len(content)} bytes"
    except Exception as e:
        return f"Error: {e}"


def _run_edit(path: str, old_text: str, new_text: str) -> str:
    try:
        fp = _safe_path(path)
        c = fp.read_text()
        if old_text not in c:
            return f"Error: Text not found in {path}"
        fp.write_text(c.replace(old_text, new_text, 1))
        return f"Edited {path}"
    except Exception as e:
        return f"Error: {e}"


# -- Lead tool dispatch (9 tools) --
TOOL_HANDLERS = {
    "bash":            lambda **kw: _run_bash(kw["command"]),
    "read_file":       lambda **kw: _run_read(kw["path"], kw.get("limit")),
    "write_file":      lambda **kw: _run_write(kw["path"], kw["content"]),
    "edit_file":       lambda **kw: _run_edit(kw["path"], kw["old_text"], kw["new_text"]),
    "spawn_teammate":  lambda **kw: TEAM.spawn(kw["name"], kw["role"], kw["prompt"]),
    "list_teammates":  lambda **kw: TEAM.list_all(),
    "send_message":    lambda **kw: BUS.send("lead", kw["to"], kw["content"], kw.get("msg_type", "message")),
    "read_inbox":      lambda **kw: json.dumps(BUS.read_inbox("lead"), indent=2),
    "broadcast":       lambda **kw: BUS.broadcast("lead", kw["content"], TEAM.member_names()),
}

# these base tools are unchanged from s02
TOOLS = [
    {"name": "bash", "description": "Run a shell command.",
     "input_schema": {"type": "object", "properties": {"command": {"type": "string"}}, "required": ["command"]}},
    {"name": "read_file", "description": "Read file contents.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "limit": {"type": "integer"}}, "required": ["path"]}},
    {"name": "write_file", "description": "Write content to file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "content": {"type": "string"}}, "required": ["path", "content"]}},
    {"name": "edit_file", "description": "Replace exact text in file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "old_text": {"type": "string"}, "new_text": {"type": "string"}}, "required": ["path", "old_text", "new_text"]}},
    {"name": "spawn_teammate", "description": "Spawn a persistent teammate that runs in its own thread.",
     "input_schema": {"type": "object", "properties": {"name": {"type": "string"}, "role": {"type": "string"}, "prompt": {"type": "string"}}, "required": ["name", "role", "prompt"]}},
    {"name": "list_teammates", "description": "List all teammates with name, role, status.",
     "input_schema": {"type": "object", "properties": {}}},
    {"name": "send_message", "description": "Send a message to a teammate's inbox.",
     "input_schema": {"type": "object", "properties": {"to": {"type": "string"}, "content": {"type": "string"}, "msg_type": {"type": "string", "enum": list(VALID_MSG_TYPES)}}, "required": ["to", "content"]}},
    {"name": "read_inbox", "description": "Read and drain the lead's inbox.",
     "input_schema": {"type": "object", "properties": {}}},
    {"name": "broadcast", "description": "Send a message to all teammates.",
     "input_schema": {"type": "object", "properties": {"content": {"type": "string"}}, "required": ["content"]}},
]


def agent_loop(messages: list):
    while True:
        inbox = BUS.read_inbox("lead")
        if inbox:
            messages.append({
                "role": "user",
                "content": f"<inbox>{json.dumps(inbox, indent=2)}</inbox>",
            })
            messages.append({
                "role": "assistant",
                "content": "Noted inbox messages.",
            })
        response = client.messages.create(
            model=MODEL,
            system=SYSTEM,
            messages=messages,
            tools=TOOLS,
            max_tokens=8000,
        )
        messages.append({"role": "assistant", "content": response.content})
        if response.stop_reason != "tool_use":
            return
        results = []
        for block in response.content:
            if block.type == "tool_use":
                handler = TOOL_HANDLERS.get(block.name)
                try:
                    output = handler(**block.input) if handler else f"Unknown tool: {block.name}"
                except Exception as e:
                    output = f"Error: {e}"
                print(f"> {block.name}: {str(output)[:200]}")
                results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": str(output),
                })
        messages.append({"role": "user", "content": results})


if __name__ == "__main__":
    history = []
    while True:
        try:
            query = input("\\033[36ms09 >> \\033[0m")
        except (EOFError, KeyboardInterrupt):
            break
        if query.strip().lower() in ("q", "exit", ""):
            break
        if query.strip() == "/team":
            print(TEAM.list_all())
            continue
        if query.strip() == "/inbox":
            print(json.dumps(BUS.read_inbox("lead"), indent=2))
            continue
        history.append({"role": "user", "content": query})
        agent_loop(history)
        response_content = history[-1]["content"]
        if isinstance(response_content, list):
            for block in response_content:
                if hasattr(block, "text"):
                    print(block.text)
        print()
`},{id:"s10",title:"Team Protocols",subtitle:"团队协议",motto:"队友之间要有统一的沟通规矩",phase:4,docUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s10-team-protocols.md",codeUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s10_team_protocols.py",content:`# s10: Team Protocols (团队协议)

\`s01 > s02 > s03 > s04 > s05 > s06 | s07 > s08 > s09 > [ s10 ] s11 > s12\`

> *"队友之间要有统一的沟通规矩"* -- 一个 request-response 模式驱动所有协商。
>
> **Harness 层**: 协议 -- 模型之间的结构化握手。

## 问题

s09 中队友能干活能通信, 但缺少结构化协调:

**关机**: 直接杀线程会留下写了一半的文件和过期的 config.json。需要握手 -- 领导请求, 队友批准 (收尾退出) 或拒绝 (继续干)。

**计划审批**: 领导说 "重构认证模块", 队友立刻开干。高风险变更应该先过审。

两者结构一样: 一方发带唯一 ID 的请求, 另一方引用同一 ID 响应。

## 解决方案

\`\`\`
Shutdown Protocol            Plan Approval Protocol
==================           ======================

Lead             Teammate    Teammate           Lead
  |                 |           |                 |
  |--shutdown_req-->|           |--plan_req------>|
  | {req_id:"abc"}  |           | {req_id:"xyz"}  |
  |                 |           |                 |
  |<--shutdown_resp-|           |<--plan_resp-----|
  | {req_id:"abc",  |           | {req_id:"xyz",  |
  |  approve:true}  |           |  approve:true}  |

Shared FSM:
  [pending] --approve--> [approved]
  [pending] --reject---> [rejected]

Trackers:
  shutdown_requests = {req_id: {target, status}}
  plan_requests     = {req_id: {from, plan, status}}
\`\`\`

## 工作原理

1. 领导生成 request_id, 通过收件箱发起关机请求。

\`\`\`python
shutdown_requests = {}

def handle_shutdown_request(teammate: str) -> str:
    req_id = str(uuid.uuid4())[:8]
    shutdown_requests[req_id] = {"target": teammate, "status": "pending"}
    BUS.send("lead", teammate, "Please shut down gracefully.",
             "shutdown_request", {"request_id": req_id})
    return f"Shutdown request {req_id} sent (status: pending)"
\`\`\`

2. 队友收到请求后, 用 approve/reject 响应。

\`\`\`python
if tool_name == "shutdown_response":
    req_id = args["request_id"]
    approve = args["approve"]
    shutdown_requests[req_id]["status"] = "approved" if approve else "rejected"
    BUS.send(sender, "lead", args.get("reason", ""),
             "shutdown_response",
             {"request_id": req_id, "approve": approve})
\`\`\`

3. 计划审批遵循完全相同的模式。队友提交计划 (生成 request_id), 领导审查 (引用同一个 request_id)。

\`\`\`python
plan_requests = {}

def handle_plan_review(request_id, approve, feedback=""):
    req = plan_requests[request_id]
    req["status"] = "approved" if approve else "rejected"
    BUS.send("lead", req["from"], feedback,
             "plan_approval_response",
             {"request_id": request_id, "approve": approve})
\`\`\`

一个 FSM, 两种用途。同样的 \`pending -> approved | rejected\` 状态机可以套用到任何请求-响应协议上。

## 相对 s09 的变更

| 组件           | 之前 (s09)       | 之后 (s10)                           |
|----------------|------------------|--------------------------------------|
| Tools          | 9                | 12 (+shutdown_req/resp +plan)        |
| 关机           | 仅自然退出       | 请求-响应握手                        |
| 计划门控       | 无               | 提交/审查与审批                      |
| 关联           | 无               | 每个请求一个 request_id              |
| FSM            | 无               | pending -> approved/rejected         |

## 试一试

\`\`\`sh
cd learn-claude-code
python agents/s10_team_protocols.py
\`\`\`

试试这些 prompt (英文 prompt 对 LLM 效果更好, 也可以用中文):

1. \`Spawn alice as a coder. Then request her shutdown.\`
2. \`List teammates to see alice's status after shutdown approval\`
3. \`Spawn bob with a risky refactoring task. Review and reject his plan.\`
4. \`Spawn charlie, have him submit a plan, then approve it.\`
5. 输入 \`/team\` 监控状态`,code:`#!/usr/bin/env python3
# Harness: protocols -- structured handshakes between models.
"""
s10_team_protocols.py - Team Protocols

Shutdown protocol and plan approval protocol, both using the same
request_id correlation pattern. Builds on s09's team messaging.

    Shutdown FSM: pending -> approved | rejected

    Lead                              Teammate
    +---------------------+          +---------------------+
    | shutdown_request     |          |                     |
    | {                    | -------> | receives request    |
    |   request_id: abc    |          | decides: approve?   |
    | }                    |          |                     |
    +---------------------+          +---------------------+
                                             |
    +---------------------+          +-------v-------------+
    | shutdown_response    | <------- | shutdown_response   |
    | {                    |          | {                   |
    |   request_id: abc    |          |   request_id: abc   |
    |   approve: true      |          |   approve: true     |
    | }                    |          | }                   |
    +---------------------+          +---------------------+
            |
            v
    status -> "shutdown", thread stops

    Plan approval FSM: pending -> approved | rejected

    Teammate                          Lead
    +---------------------+          +---------------------+
    | plan_approval        |          |                     |
    | submit: {plan:"..."}| -------> | reviews plan text   |
    +---------------------+          | approve/reject?     |
                                     +---------------------+
                                             |
    +---------------------+          +-------v-------------+
    | plan_approval_resp   | <------- | plan_approval       |
    | {approve: true}      |          | review: {req_id,    |
    +---------------------+          |   approve: true}     |
                                     +---------------------+

    Trackers: {request_id: {"target|from": name, "status": "pending|..."}}

Key insight: "Same request_id correlation pattern, two domains."
"""

import json
import os
import subprocess
import threading
import time
import uuid
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)
if os.getenv("ANTHROPIC_BASE_URL"):
    os.environ.pop("ANTHROPIC_AUTH_TOKEN", None)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]
TEAM_DIR = WORKDIR / ".team"
INBOX_DIR = TEAM_DIR / "inbox"

SYSTEM = f"You are a team lead at {WORKDIR}. Manage teammates with shutdown and plan approval protocols."

VALID_MSG_TYPES = {
    "message",
    "broadcast",
    "shutdown_request",
    "shutdown_response",
    "plan_approval_response",
}

# -- Request trackers: correlate by request_id --
shutdown_requests = {}
plan_requests = {}
_tracker_lock = threading.Lock()


# -- MessageBus: JSONL inbox per teammate --
class MessageBus:
    def __init__(self, inbox_dir: Path):
        self.dir = inbox_dir
        self.dir.mkdir(parents=True, exist_ok=True)

    def send(self, sender: str, to: str, content: str,
             msg_type: str = "message", extra: dict = None) -> str:
        if msg_type not in VALID_MSG_TYPES:
            return f"Error: Invalid type '{msg_type}'. Valid: {VALID_MSG_TYPES}"
        msg = {
            "type": msg_type,
            "from": sender,
            "content": content,
            "timestamp": time.time(),
        }
        if extra:
            msg.update(extra)
        inbox_path = self.dir / f"{to}.jsonl"
        with open(inbox_path, "a") as f:
            f.write(json.dumps(msg) + "\\n")
        return f"Sent {msg_type} to {to}"

    def read_inbox(self, name: str) -> list:
        inbox_path = self.dir / f"{name}.jsonl"
        if not inbox_path.exists():
            return []
        messages = []
        for line in inbox_path.read_text().strip().splitlines():
            if line:
                messages.append(json.loads(line))
        inbox_path.write_text("")
        return messages

    def broadcast(self, sender: str, content: str, teammates: list) -> str:
        count = 0
        for name in teammates:
            if name != sender:
                self.send(sender, name, content, "broadcast")
                count += 1
        return f"Broadcast to {count} teammates"


BUS = MessageBus(INBOX_DIR)


# -- TeammateManager with shutdown + plan approval --
class TeammateManager:
    def __init__(self, team_dir: Path):
        self.dir = team_dir
        self.dir.mkdir(exist_ok=True)
        self.config_path = self.dir / "config.json"
        self.config = self._load_config()
        self.threads = {}

    def _load_config(self) -> dict:
        if self.config_path.exists():
            return json.loads(self.config_path.read_text())
        return {"team_name": "default", "members": []}

    def _save_config(self):
        self.config_path.write_text(json.dumps(self.config, indent=2))

    def _find_member(self, name: str) -> dict:
        for m in self.config["members"]:
            if m["name"] == name:
                return m
        return None

    def spawn(self, name: str, role: str, prompt: str) -> str:
        member = self._find_member(name)
        if member:
            if member["status"] not in ("idle", "shutdown"):
                return f"Error: '{name}' is currently {member['status']}"
            member["status"] = "working"
            member["role"] = role
        else:
            member = {"name": name, "role": role, "status": "working"}
            self.config["members"].append(member)
        self._save_config()
        thread = threading.Thread(
            target=self._teammate_loop,
            args=(name, role, prompt),
            daemon=True,
        )
        self.threads[name] = thread
        thread.start()
        return f"Spawned '{name}' (role: {role})"

    def _teammate_loop(self, name: str, role: str, prompt: str):
        sys_prompt = (
            f"You are '{name}', role: {role}, at {WORKDIR}. "
            f"Submit plans via plan_approval before major work. "
            f"Respond to shutdown_request with shutdown_response."
        )
        messages = [{"role": "user", "content": prompt}]
        tools = self._teammate_tools()
        should_exit = False
        for _ in range(50):
            inbox = BUS.read_inbox(name)
            for msg in inbox:
                messages.append({"role": "user", "content": json.dumps(msg)})
            if should_exit:
                break
            try:
                response = client.messages.create(
                    model=MODEL,
                    system=sys_prompt,
                    messages=messages,
                    tools=tools,
                    max_tokens=8000,
                )
            except Exception:
                break
            messages.append({"role": "assistant", "content": response.content})
            if response.stop_reason != "tool_use":
                break
            results = []
            for block in response.content:
                if block.type == "tool_use":
                    output = self._exec(name, block.name, block.input)
                    print(f"  [{name}] {block.name}: {str(output)[:120]}")
                    results.append({
                        "type": "tool_result",
                        "tool_use_id": block.id,
                        "content": str(output),
                    })
                    if block.name == "shutdown_response" and block.input.get("approve"):
                        should_exit = True
            messages.append({"role": "user", "content": results})
        member = self._find_member(name)
        if member:
            member["status"] = "shutdown" if should_exit else "idle"
            self._save_config()

    def _exec(self, sender: str, tool_name: str, args: dict) -> str:
        # these base tools are unchanged from s02
        if tool_name == "bash":
            return _run_bash(args["command"])
        if tool_name == "read_file":
            return _run_read(args["path"])
        if tool_name == "write_file":
            return _run_write(args["path"], args["content"])
        if tool_name == "edit_file":
            return _run_edit(args["path"], args["old_text"], args["new_text"])
        if tool_name == "send_message":
            return BUS.send(sender, args["to"], args["content"], args.get("msg_type", "message"))
        if tool_name == "read_inbox":
            return json.dumps(BUS.read_inbox(sender), indent=2)
        if tool_name == "shutdown_response":
            req_id = args["request_id"]
            approve = args["approve"]
            with _tracker_lock:
                if req_id in shutdown_requests:
                    shutdown_requests[req_id]["status"] = "approved" if approve else "rejected"
            BUS.send(
                sender, "lead", args.get("reason", ""),
                "shutdown_response", {"request_id": req_id, "approve": approve},
            )
            return f"Shutdown {'approved' if approve else 'rejected'}"
        if tool_name == "plan_approval":
            plan_text = args.get("plan", "")
            req_id = str(uuid.uuid4())[:8]
            with _tracker_lock:
                plan_requests[req_id] = {"from": sender, "plan": plan_text, "status": "pending"}
            BUS.send(
                sender, "lead", plan_text, "plan_approval_response",
                {"request_id": req_id, "plan": plan_text},
            )
            return f"Plan submitted (request_id={req_id}). Waiting for lead approval."
        return f"Unknown tool: {tool_name}"

    def _teammate_tools(self) -> list:
        # these base tools are unchanged from s02
        return [
            {"name": "bash", "description": "Run a shell command.",
             "input_schema": {"type": "object", "properties": {"command": {"type": "string"}}, "required": ["command"]}},
            {"name": "read_file", "description": "Read file contents.",
             "input_schema": {"type": "object", "properties": {"path": {"type": "string"}}, "required": ["path"]}},
            {"name": "write_file", "description": "Write content to file.",
             "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "content": {"type": "string"}}, "required": ["path", "content"]}},
            {"name": "edit_file", "description": "Replace exact text in file.",
             "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "old_text": {"type": "string"}, "new_text": {"type": "string"}}, "required": ["path", "old_text", "new_text"]}},
            {"name": "send_message", "description": "Send message to a teammate.",
             "input_schema": {"type": "object", "properties": {"to": {"type": "string"}, "content": {"type": "string"}, "msg_type": {"type": "string", "enum": list(VALID_MSG_TYPES)}}, "required": ["to", "content"]}},
            {"name": "read_inbox", "description": "Read and drain your inbox.",
             "input_schema": {"type": "object", "properties": {}}},
            {"name": "shutdown_response", "description": "Respond to a shutdown request. Approve to shut down, reject to keep working.",
             "input_schema": {"type": "object", "properties": {"request_id": {"type": "string"}, "approve": {"type": "boolean"}, "reason": {"type": "string"}}, "required": ["request_id", "approve"]}},
            {"name": "plan_approval", "description": "Submit a plan for lead approval. Provide plan text.",
             "input_schema": {"type": "object", "properties": {"plan": {"type": "string"}}, "required": ["plan"]}},
        ]

    def list_all(self) -> str:
        if not self.config["members"]:
            return "No teammates."
        lines = [f"Team: {self.config['team_name']}"]
        for m in self.config["members"]:
            lines.append(f"  {m['name']} ({m['role']}): {m['status']}")
        return "\\n".join(lines)

    def member_names(self) -> list:
        return [m["name"] for m in self.config["members"]]


TEAM = TeammateManager(TEAM_DIR)


# -- Base tool implementations (these base tools are unchanged from s02) --
def _safe_path(p: str) -> Path:
    path = (WORKDIR / p).resolve()
    if not path.is_relative_to(WORKDIR):
        raise ValueError(f"Path escapes workspace: {p}")
    return path


def _run_bash(command: str) -> str:
    dangerous = ["rm -rf /", "sudo", "shutdown", "reboot"]
    if any(d in command for d in dangerous):
        return "Error: Dangerous command blocked"
    try:
        r = subprocess.run(
            command, shell=True, cwd=WORKDIR,
            capture_output=True, text=True, timeout=120,
        )
        out = (r.stdout + r.stderr).strip()
        return out[:50000] if out else "(no output)"
    except subprocess.TimeoutExpired:
        return "Error: Timeout (120s)"


def _run_read(path: str, limit: int = None) -> str:
    try:
        lines = _safe_path(path).read_text().splitlines()
        if limit and limit < len(lines):
            lines = lines[:limit] + [f"... ({len(lines) - limit} more)"]
        return "\\n".join(lines)[:50000]
    except Exception as e:
        return f"Error: {e}"


def _run_write(path: str, content: str) -> str:
    try:
        fp = _safe_path(path)
        fp.parent.mkdir(parents=True, exist_ok=True)
        fp.write_text(content)
        return f"Wrote {len(content)} bytes"
    except Exception as e:
        return f"Error: {e}"


def _run_edit(path: str, old_text: str, new_text: str) -> str:
    try:
        fp = _safe_path(path)
        c = fp.read_text()
        if old_text not in c:
            return f"Error: Text not found in {path}"
        fp.write_text(c.replace(old_text, new_text, 1))
        return f"Edited {path}"
    except Exception as e:
        return f"Error: {e}"


# -- Lead-specific protocol handlers --
def handle_shutdown_request(teammate: str) -> str:
    req_id = str(uuid.uuid4())[:8]
    with _tracker_lock:
        shutdown_requests[req_id] = {"target": teammate, "status": "pending"}
    BUS.send(
        "lead", teammate, "Please shut down gracefully.",
        "shutdown_request", {"request_id": req_id},
    )
    return f"Shutdown request {req_id} sent to '{teammate}' (status: pending)"


def handle_plan_review(request_id: str, approve: bool, feedback: str = "") -> str:
    with _tracker_lock:
        req = plan_requests.get(request_id)
    if not req:
        return f"Error: Unknown plan request_id '{request_id}'"
    with _tracker_lock:
        req["status"] = "approved" if approve else "rejected"
    BUS.send(
        "lead", req["from"], feedback, "plan_approval_response",
        {"request_id": request_id, "approve": approve, "feedback": feedback},
    )
    return f"Plan {req['status']} for '{req['from']}'"


def _check_shutdown_status(request_id: str) -> str:
    with _tracker_lock:
        return json.dumps(shutdown_requests.get(request_id, {"error": "not found"}))


# -- Lead tool dispatch (12 tools) --
TOOL_HANDLERS = {
    "bash":              lambda **kw: _run_bash(kw["command"]),
    "read_file":         lambda **kw: _run_read(kw["path"], kw.get("limit")),
    "write_file":        lambda **kw: _run_write(kw["path"], kw["content"]),
    "edit_file":         lambda **kw: _run_edit(kw["path"], kw["old_text"], kw["new_text"]),
    "spawn_teammate":    lambda **kw: TEAM.spawn(kw["name"], kw["role"], kw["prompt"]),
    "list_teammates":    lambda **kw: TEAM.list_all(),
    "send_message":      lambda **kw: BUS.send("lead", kw["to"], kw["content"], kw.get("msg_type", "message")),
    "read_inbox":        lambda **kw: json.dumps(BUS.read_inbox("lead"), indent=2),
    "broadcast":         lambda **kw: BUS.broadcast("lead", kw["content"], TEAM.member_names()),
    "shutdown_request":  lambda **kw: handle_shutdown_request(kw["teammate"]),
    "shutdown_response": lambda **kw: _check_shutdown_status(kw.get("request_id", "")),
    "plan_approval":     lambda **kw: handle_plan_review(kw["request_id"], kw["approve"], kw.get("feedback", "")),
}

# these base tools are unchanged from s02
TOOLS = [
    {"name": "bash", "description": "Run a shell command.",
     "input_schema": {"type": "object", "properties": {"command": {"type": "string"}}, "required": ["command"]}},
    {"name": "read_file", "description": "Read file contents.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "limit": {"type": "integer"}}, "required": ["path"]}},
    {"name": "write_file", "description": "Write content to file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "content": {"type": "string"}}, "required": ["path", "content"]}},
    {"name": "edit_file", "description": "Replace exact text in file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "old_text": {"type": "string"}, "new_text": {"type": "string"}}, "required": ["path", "old_text", "new_text"]}},
    {"name": "spawn_teammate", "description": "Spawn a persistent teammate.",
     "input_schema": {"type": "object", "properties": {"name": {"type": "string"}, "role": {"type": "string"}, "prompt": {"type": "string"}}, "required": ["name", "role", "prompt"]}},
    {"name": "list_teammates", "description": "List all teammates.",
     "input_schema": {"type": "object", "properties": {}}},
    {"name": "send_message", "description": "Send a message to a teammate.",
     "input_schema": {"type": "object", "properties": {"to": {"type": "string"}, "content": {"type": "string"}, "msg_type": {"type": "string", "enum": list(VALID_MSG_TYPES)}}, "required": ["to", "content"]}},
    {"name": "read_inbox", "description": "Read and drain the lead's inbox.",
     "input_schema": {"type": "object", "properties": {}}},
    {"name": "broadcast", "description": "Send a message to all teammates.",
     "input_schema": {"type": "object", "properties": {"content": {"type": "string"}}, "required": ["content"]}},
    {"name": "shutdown_request", "description": "Request a teammate to shut down gracefully. Returns a request_id for tracking.",
     "input_schema": {"type": "object", "properties": {"teammate": {"type": "string"}}, "required": ["teammate"]}},
    {"name": "shutdown_response", "description": "Check the status of a shutdown request by request_id.",
     "input_schema": {"type": "object", "properties": {"request_id": {"type": "string"}}, "required": ["request_id"]}},
    {"name": "plan_approval", "description": "Approve or reject a teammate's plan. Provide request_id + approve + optional feedback.",
     "input_schema": {"type": "object", "properties": {"request_id": {"type": "string"}, "approve": {"type": "boolean"}, "feedback": {"type": "string"}}, "required": ["request_id", "approve"]}},
]


def agent_loop(messages: list):
    while True:
        inbox = BUS.read_inbox("lead")
        if inbox:
            messages.append({
                "role": "user",
                "content": f"<inbox>{json.dumps(inbox, indent=2)}</inbox>",
            })
            messages.append({
                "role": "assistant",
                "content": "Noted inbox messages.",
            })
        response = client.messages.create(
            model=MODEL,
            system=SYSTEM,
            messages=messages,
            tools=TOOLS,
            max_tokens=8000,
        )
        messages.append({"role": "assistant", "content": response.content})
        if response.stop_reason != "tool_use":
            return
        results = []
        for block in response.content:
            if block.type == "tool_use":
                handler = TOOL_HANDLERS.get(block.name)
                try:
                    output = handler(**block.input) if handler else f"Unknown tool: {block.name}"
                except Exception as e:
                    output = f"Error: {e}"
                print(f"> {block.name}: {str(output)[:200]}")
                results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": str(output),
                })
        messages.append({"role": "user", "content": results})


if __name__ == "__main__":
    history = []
    while True:
        try:
            query = input("\\033[36ms10 >> \\033[0m")
        except (EOFError, KeyboardInterrupt):
            break
        if query.strip().lower() in ("q", "exit", ""):
            break
        if query.strip() == "/team":
            print(TEAM.list_all())
            continue
        if query.strip() == "/inbox":
            print(json.dumps(BUS.read_inbox("lead"), indent=2))
            continue
        history.append({"role": "user", "content": query})
        agent_loop(history)
        response_content = history[-1]["content"]
        if isinstance(response_content, list):
            for block in response_content:
                if hasattr(block, "text"):
                    print(block.text)
        print()
`},{id:"s11",title:"Autonomous Agents",subtitle:"自治智能体",motto:"队友自己看看板，有活就认领",phase:4,docUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s11-autonomous-agents.md",codeUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s11_autonomous_agents.py",content:`# s11: Autonomous Agents (自治智能体)

\`s01 > s02 > s03 > s04 > s05 > s06 | s07 > s08 > s09 > s10 > [ s11 ] s12\`

> *"队友自己看看板, 有活就认领"* -- 不需要领导逐个分配, 自组织。
>
> **Harness 层**: 自治 -- 模型自己找活干, 无需指派。

## 问题

s09-s10 中, 队友只在被明确指派时才动。领导得给每个队友写 prompt, 任务看板上 10 个未认领的任务得手动分配。这扩展不了。

真正的自治: 队友自己扫描任务看板, 认领没人做的任务, 做完再找下一个。

## 解决方案

\`\`\`
Teammate lifecycle with idle cycle:

+-------+
| spawn |
+---+---+
    |
    v
+-------+   tool_use     +-------+
| WORK  | <------------- |  LLM  |
+-------+                +-------+
    |
    | stop_reason != tool_use (or idle tool called)
    v
+--------+
|  IDLE  |  poll every 5s for up to 60s
+---+----+
    |
    +---> check inbox --> message? ----------> WORK
    |
    +---> scan .tasks/ --> unclaimed? -------> claim -> WORK
    |
    +---> 60s timeout ----------------------> SHUTDOWN
\`\`\`

## 工作原理

1. 队友循环分两个阶段: WORK 和 IDLE。LLM 停止调用工具 (或调用了 \`idle\`) 时, 进入 IDLE。

\`\`\`python
def _loop(self, name, role, prompt):
    while True:
        # -- WORK PHASE --
        messages = [{"role": "user", "content": prompt}]
        for _ in range(50):
            response = client.messages.create(...)
            if response.stop_reason != "tool_use":
                break
            # execute tools...
            if idle_requested:
                break

        # -- IDLE PHASE --
        self._set_status(name, "idle")
        resume = self._idle_poll(name, messages)
        if not resume:
            self._set_status(name, "shutdown")
            return
        self._set_status(name, "working")
\`\`\`

2. 空闲阶段循环轮询收件箱和任务看板。

\`\`\`python
def _idle_poll(self, name, messages):
    for _ in range(IDLE_TIMEOUT // POLL_INTERVAL):  # 60s / 5s = 12
        time.sleep(POLL_INTERVAL)
        inbox = BUS.read_inbox(name)
        if inbox:
            messages.append({"role": "user",
                "content": f"<inbox>{inbox}</inbox>"})
            return True
        unclaimed = scan_unclaimed_tasks()
        if unclaimed:
            claim_task(unclaimed[0]["id"], name)
            messages.append({"role": "user",
                "content": f"<auto-claimed>Task #{unclaimed[0]['id']}: "
                           f"{unclaimed[0]['subject']}</auto-claimed>"})
            return True
    return False  # timeout -> shutdown
\`\`\`

3. 任务看板扫描: 找 pending 状态、无 owner、未被阻塞的任务。

\`\`\`python
def scan_unclaimed_tasks() -> list:
    unclaimed = []
    for f in sorted(TASKS_DIR.glob("task_*.json")):
        task = json.loads(f.read_text())
        if (task.get("status") == "pending"
                and not task.get("owner")
                and not task.get("blockedBy")):
            unclaimed.append(task)
    return unclaimed
\`\`\`

4. 身份重注入: 上下文过短 (说明发生了压缩) 时, 在开头插入身份块。

\`\`\`python
if len(messages) <= 3:
    messages.insert(0, {"role": "user",
        "content": f"<identity>You are '{name}', role: {role}, "
                   f"team: {team_name}. Continue your work.</identity>"})
    messages.insert(1, {"role": "assistant",
        "content": f"I am {name}. Continuing."})
\`\`\`

## 相对 s10 的变更

| 组件           | 之前 (s10)       | 之后 (s11)                       |
|----------------|------------------|----------------------------------|
| Tools          | 12               | 14 (+idle, +claim_task)          |
| 自治性         | 领导指派         | 自组织                           |
| 空闲阶段       | 无               | 轮询收件箱 + 任务看板            |
| 任务认领       | 仅手动           | 自动认领未分配任务               |
| 身份           | 系统提示         | + 压缩后重注入                   |
| 超时           | 无               | 60 秒空闲 -> 自动关机            |

## 试一试

\`\`\`sh
cd learn-claude-code
python agents/s11_autonomous_agents.py
\`\`\`

试试这些 prompt (英文 prompt 对 LLM 效果更好, 也可以用中文):

1. \`Create 3 tasks on the board, then spawn alice and bob. Watch them auto-claim.\`
2. \`Spawn a coder teammate and let it find work from the task board itself\`
3. \`Create tasks with dependencies. Watch teammates respect the blocked order.\`
4. 输入 \`/tasks\` 查看带 owner 的任务看板
5. 输入 \`/team\` 监控谁在工作、谁在空闲`,code:`#!/usr/bin/env python3
# Harness: autonomy -- models that find work without being told.
"""
s11_autonomous_agents.py - Autonomous Agents

Idle cycle with task board polling, auto-claiming unclaimed tasks, and
identity re-injection after context compression. Builds on s10's protocols.

    Teammate lifecycle:
    +-------+
    | spawn |
    +---+---+
        |
        v
    +-------+  tool_use    +-------+
    | WORK  | <----------- |  LLM  |
    +---+---+              +-------+
        |
        | stop_reason != tool_use
        v
    +--------+
    | IDLE   | poll every 5s for up to 60s
    +---+----+
        |
        +---> check inbox -> message? -> resume WORK
        |
        +---> scan .tasks/ -> unclaimed? -> claim -> resume WORK
        |
        +---> timeout (60s) -> shutdown

    Identity re-injection after compression:
    messages = [identity_block, ...remaining...]
    "You are 'coder', role: backend, team: my-team"

Key insight: "The agent finds work itself."
"""

import json
import os
import subprocess
import threading
import time
import uuid
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)
if os.getenv("ANTHROPIC_BASE_URL"):
    os.environ.pop("ANTHROPIC_AUTH_TOKEN", None)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]
TEAM_DIR = WORKDIR / ".team"
INBOX_DIR = TEAM_DIR / "inbox"
TASKS_DIR = WORKDIR / ".tasks"

POLL_INTERVAL = 5
IDLE_TIMEOUT = 60

SYSTEM = f"You are a team lead at {WORKDIR}. Teammates are autonomous -- they find work themselves."

VALID_MSG_TYPES = {
    "message",
    "broadcast",
    "shutdown_request",
    "shutdown_response",
    "plan_approval_response",
}

# -- Request trackers --
shutdown_requests = {}
plan_requests = {}
_tracker_lock = threading.Lock()
_claim_lock = threading.Lock()


# -- MessageBus: JSONL inbox per teammate --
class MessageBus:
    def __init__(self, inbox_dir: Path):
        self.dir = inbox_dir
        self.dir.mkdir(parents=True, exist_ok=True)

    def send(self, sender: str, to: str, content: str,
             msg_type: str = "message", extra: dict = None) -> str:
        if msg_type not in VALID_MSG_TYPES:
            return f"Error: Invalid type '{msg_type}'. Valid: {VALID_MSG_TYPES}"
        msg = {
            "type": msg_type,
            "from": sender,
            "content": content,
            "timestamp": time.time(),
        }
        if extra:
            msg.update(extra)
        inbox_path = self.dir / f"{to}.jsonl"
        with open(inbox_path, "a") as f:
            f.write(json.dumps(msg) + "\\n")
        return f"Sent {msg_type} to {to}"

    def read_inbox(self, name: str) -> list:
        inbox_path = self.dir / f"{name}.jsonl"
        if not inbox_path.exists():
            return []
        messages = []
        for line in inbox_path.read_text().strip().splitlines():
            if line:
                messages.append(json.loads(line))
        inbox_path.write_text("")
        return messages

    def broadcast(self, sender: str, content: str, teammates: list) -> str:
        count = 0
        for name in teammates:
            if name != sender:
                self.send(sender, name, content, "broadcast")
                count += 1
        return f"Broadcast to {count} teammates"


BUS = MessageBus(INBOX_DIR)


# -- Task board scanning --
def scan_unclaimed_tasks() -> list:
    TASKS_DIR.mkdir(exist_ok=True)
    unclaimed = []
    for f in sorted(TASKS_DIR.glob("task_*.json")):
        task = json.loads(f.read_text())
        if (task.get("status") == "pending"
                and not task.get("owner")
                and not task.get("blockedBy")):
            unclaimed.append(task)
    return unclaimed


def claim_task(task_id: int, owner: str) -> str:
    with _claim_lock:
        path = TASKS_DIR / f"task_{task_id}.json"
        if not path.exists():
            return f"Error: Task {task_id} not found"
        task = json.loads(path.read_text())
        task["owner"] = owner
        task["status"] = "in_progress"
        path.write_text(json.dumps(task, indent=2))
    return f"Claimed task #{task_id} for {owner}"


# -- Identity re-injection after compression --
def make_identity_block(name: str, role: str, team_name: str) -> dict:
    return {
        "role": "user",
        "content": f"<identity>You are '{name}', role: {role}, team: {team_name}. Continue your work.</identity>",
    }


# -- Autonomous TeammateManager --
class TeammateManager:
    def __init__(self, team_dir: Path):
        self.dir = team_dir
        self.dir.mkdir(exist_ok=True)
        self.config_path = self.dir / "config.json"
        self.config = self._load_config()
        self.threads = {}

    def _load_config(self) -> dict:
        if self.config_path.exists():
            return json.loads(self.config_path.read_text())
        return {"team_name": "default", "members": []}

    def _save_config(self):
        self.config_path.write_text(json.dumps(self.config, indent=2))

    def _find_member(self, name: str) -> dict:
        for m in self.config["members"]:
            if m["name"] == name:
                return m
        return None

    def _set_status(self, name: str, status: str):
        member = self._find_member(name)
        if member:
            member["status"] = status
            self._save_config()

    def spawn(self, name: str, role: str, prompt: str) -> str:
        member = self._find_member(name)
        if member:
            if member["status"] not in ("idle", "shutdown"):
                return f"Error: '{name}' is currently {member['status']}"
            member["status"] = "working"
            member["role"] = role
        else:
            member = {"name": name, "role": role, "status": "working"}
            self.config["members"].append(member)
        self._save_config()
        thread = threading.Thread(
            target=self._loop,
            args=(name, role, prompt),
            daemon=True,
        )
        self.threads[name] = thread
        thread.start()
        return f"Spawned '{name}' (role: {role})"

    def _loop(self, name: str, role: str, prompt: str):
        team_name = self.config["team_name"]
        sys_prompt = (
            f"You are '{name}', role: {role}, team: {team_name}, at {WORKDIR}. "
            f"Use idle tool when you have no more work. You will auto-claim new tasks."
        )
        messages = [{"role": "user", "content": prompt}]
        tools = self._teammate_tools()

        while True:
            # -- WORK PHASE: standard agent loop --
            for _ in range(50):
                inbox = BUS.read_inbox(name)
                for msg in inbox:
                    if msg.get("type") == "shutdown_request":
                        self._set_status(name, "shutdown")
                        return
                    messages.append({"role": "user", "content": json.dumps(msg)})
                try:
                    response = client.messages.create(
                        model=MODEL,
                        system=sys_prompt,
                        messages=messages,
                        tools=tools,
                        max_tokens=8000,
                    )
                except Exception:
                    self._set_status(name, "idle")
                    return
                messages.append({"role": "assistant", "content": response.content})
                if response.stop_reason != "tool_use":
                    break
                results = []
                idle_requested = False
                for block in response.content:
                    if block.type == "tool_use":
                        if block.name == "idle":
                            idle_requested = True
                            output = "Entering idle phase. Will poll for new tasks."
                        else:
                            output = self._exec(name, block.name, block.input)
                        print(f"  [{name}] {block.name}: {str(output)[:120]}")
                        results.append({
                            "type": "tool_result",
                            "tool_use_id": block.id,
                            "content": str(output),
                        })
                messages.append({"role": "user", "content": results})
                if idle_requested:
                    break

            # -- IDLE PHASE: poll for inbox messages and unclaimed tasks --
            self._set_status(name, "idle")
            resume = False
            polls = IDLE_TIMEOUT // max(POLL_INTERVAL, 1)
            for _ in range(polls):
                time.sleep(POLL_INTERVAL)
                inbox = BUS.read_inbox(name)
                if inbox:
                    for msg in inbox:
                        if msg.get("type") == "shutdown_request":
                            self._set_status(name, "shutdown")
                            return
                        messages.append({"role": "user", "content": json.dumps(msg)})
                    resume = True
                    break
                unclaimed = scan_unclaimed_tasks()
                if unclaimed:
                    task = unclaimed[0]
                    claim_task(task["id"], name)
                    task_prompt = (
                        f"<auto-claimed>Task #{task['id']}: {task['subject']}\\n"
                        f"{task.get('description', '')}</auto-claimed>"
                    )
                    if len(messages) <= 3:
                        messages.insert(0, make_identity_block(name, role, team_name))
                        messages.insert(1, {"role": "assistant", "content": f"I am {name}. Continuing."})
                    messages.append({"role": "user", "content": task_prompt})
                    messages.append({"role": "assistant", "content": f"Claimed task #{task['id']}. Working on it."})
                    resume = True
                    break

            if not resume:
                self._set_status(name, "shutdown")
                return
            self._set_status(name, "working")

    def _exec(self, sender: str, tool_name: str, args: dict) -> str:
        # these base tools are unchanged from s02
        if tool_name == "bash":
            return _run_bash(args["command"])
        if tool_name == "read_file":
            return _run_read(args["path"])
        if tool_name == "write_file":
            return _run_write(args["path"], args["content"])
        if tool_name == "edit_file":
            return _run_edit(args["path"], args["old_text"], args["new_text"])
        if tool_name == "send_message":
            return BUS.send(sender, args["to"], args["content"], args.get("msg_type", "message"))
        if tool_name == "read_inbox":
            return json.dumps(BUS.read_inbox(sender), indent=2)
        if tool_name == "shutdown_response":
            req_id = args["request_id"]
            with _tracker_lock:
                if req_id in shutdown_requests:
                    shutdown_requests[req_id]["status"] = "approved" if args["approve"] else "rejected"
            BUS.send(
                sender, "lead", args.get("reason", ""),
                "shutdown_response", {"request_id": req_id, "approve": args["approve"]},
            )
            return f"Shutdown {'approved' if args['approve'] else 'rejected'}"
        if tool_name == "plan_approval":
            plan_text = args.get("plan", "")
            req_id = str(uuid.uuid4())[:8]
            with _tracker_lock:
                plan_requests[req_id] = {"from": sender, "plan": plan_text, "status": "pending"}
            BUS.send(
                sender, "lead", plan_text, "plan_approval_response",
                {"request_id": req_id, "plan": plan_text},
            )
            return f"Plan submitted (request_id={req_id}). Waiting for approval."
        if tool_name == "claim_task":
            return claim_task(args["task_id"], sender)
        return f"Unknown tool: {tool_name}"

    def _teammate_tools(self) -> list:
        # these base tools are unchanged from s02
        return [
            {"name": "bash", "description": "Run a shell command.",
             "input_schema": {"type": "object", "properties": {"command": {"type": "string"}}, "required": ["command"]}},
            {"name": "read_file", "description": "Read file contents.",
             "input_schema": {"type": "object", "properties": {"path": {"type": "string"}}, "required": ["path"]}},
            {"name": "write_file", "description": "Write content to file.",
             "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "content": {"type": "string"}}, "required": ["path", "content"]}},
            {"name": "edit_file", "description": "Replace exact text in file.",
             "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "old_text": {"type": "string"}, "new_text": {"type": "string"}}, "required": ["path", "old_text", "new_text"]}},
            {"name": "send_message", "description": "Send message to a teammate.",
             "input_schema": {"type": "object", "properties": {"to": {"type": "string"}, "content": {"type": "string"}, "msg_type": {"type": "string", "enum": list(VALID_MSG_TYPES)}}, "required": ["to", "content"]}},
            {"name": "read_inbox", "description": "Read and drain your inbox.",
             "input_schema": {"type": "object", "properties": {}}},
            {"name": "shutdown_response", "description": "Respond to a shutdown request.",
             "input_schema": {"type": "object", "properties": {"request_id": {"type": "string"}, "approve": {"type": "boolean"}, "reason": {"type": "string"}}, "required": ["request_id", "approve"]}},
            {"name": "plan_approval", "description": "Submit a plan for lead approval.",
             "input_schema": {"type": "object", "properties": {"plan": {"type": "string"}}, "required": ["plan"]}},
            {"name": "idle", "description": "Signal that you have no more work. Enters idle polling phase.",
             "input_schema": {"type": "object", "properties": {}}},
            {"name": "claim_task", "description": "Claim a task from the task board by ID.",
             "input_schema": {"type": "object", "properties": {"task_id": {"type": "integer"}}, "required": ["task_id"]}},
        ]

    def list_all(self) -> str:
        if not self.config["members"]:
            return "No teammates."
        lines = [f"Team: {self.config['team_name']}"]
        for m in self.config["members"]:
            lines.append(f"  {m['name']} ({m['role']}): {m['status']}")
        return "\\n".join(lines)

    def member_names(self) -> list:
        return [m["name"] for m in self.config["members"]]


TEAM = TeammateManager(TEAM_DIR)


# -- Base tool implementations (these base tools are unchanged from s02) --
def _safe_path(p: str) -> Path:
    path = (WORKDIR / p).resolve()
    if not path.is_relative_to(WORKDIR):
        raise ValueError(f"Path escapes workspace: {p}")
    return path


def _run_bash(command: str) -> str:
    dangerous = ["rm -rf /", "sudo", "shutdown", "reboot"]
    if any(d in command for d in dangerous):
        return "Error: Dangerous command blocked"
    try:
        r = subprocess.run(
            command, shell=True, cwd=WORKDIR,
            capture_output=True, text=True, timeout=120,
        )
        out = (r.stdout + r.stderr).strip()
        return out[:50000] if out else "(no output)"
    except subprocess.TimeoutExpired:
        return "Error: Timeout (120s)"


def _run_read(path: str, limit: int = None) -> str:
    try:
        lines = _safe_path(path).read_text().splitlines()
        if limit and limit < len(lines):
            lines = lines[:limit] + [f"... ({len(lines) - limit} more)"]
        return "\\n".join(lines)[:50000]
    except Exception as e:
        return f"Error: {e}"


def _run_write(path: str, content: str) -> str:
    try:
        fp = _safe_path(path)
        fp.parent.mkdir(parents=True, exist_ok=True)
        fp.write_text(content)
        return f"Wrote {len(content)} bytes"
    except Exception as e:
        return f"Error: {e}"


def _run_edit(path: str, old_text: str, new_text: str) -> str:
    try:
        fp = _safe_path(path)
        c = fp.read_text()
        if old_text not in c:
            return f"Error: Text not found in {path}"
        fp.write_text(c.replace(old_text, new_text, 1))
        return f"Edited {path}"
    except Exception as e:
        return f"Error: {e}"


# -- Lead-specific protocol handlers --
def handle_shutdown_request(teammate: str) -> str:
    req_id = str(uuid.uuid4())[:8]
    with _tracker_lock:
        shutdown_requests[req_id] = {"target": teammate, "status": "pending"}
    BUS.send(
        "lead", teammate, "Please shut down gracefully.",
        "shutdown_request", {"request_id": req_id},
    )
    return f"Shutdown request {req_id} sent to '{teammate}'"


def handle_plan_review(request_id: str, approve: bool, feedback: str = "") -> str:
    with _tracker_lock:
        req = plan_requests.get(request_id)
    if not req:
        return f"Error: Unknown plan request_id '{request_id}'"
    with _tracker_lock:
        req["status"] = "approved" if approve else "rejected"
    BUS.send(
        "lead", req["from"], feedback, "plan_approval_response",
        {"request_id": request_id, "approve": approve, "feedback": feedback},
    )
    return f"Plan {req['status']} for '{req['from']}'"


def _check_shutdown_status(request_id: str) -> str:
    with _tracker_lock:
        return json.dumps(shutdown_requests.get(request_id, {"error": "not found"}))


# -- Lead tool dispatch (14 tools) --
TOOL_HANDLERS = {
    "bash":              lambda **kw: _run_bash(kw["command"]),
    "read_file":         lambda **kw: _run_read(kw["path"], kw.get("limit")),
    "write_file":        lambda **kw: _run_write(kw["path"], kw["content"]),
    "edit_file":         lambda **kw: _run_edit(kw["path"], kw["old_text"], kw["new_text"]),
    "spawn_teammate":    lambda **kw: TEAM.spawn(kw["name"], kw["role"], kw["prompt"]),
    "list_teammates":    lambda **kw: TEAM.list_all(),
    "send_message":      lambda **kw: BUS.send("lead", kw["to"], kw["content"], kw.get("msg_type", "message")),
    "read_inbox":        lambda **kw: json.dumps(BUS.read_inbox("lead"), indent=2),
    "broadcast":         lambda **kw: BUS.broadcast("lead", kw["content"], TEAM.member_names()),
    "shutdown_request":  lambda **kw: handle_shutdown_request(kw["teammate"]),
    "shutdown_response": lambda **kw: _check_shutdown_status(kw.get("request_id", "")),
    "plan_approval":     lambda **kw: handle_plan_review(kw["request_id"], kw["approve"], kw.get("feedback", "")),
    "idle":              lambda **kw: "Lead does not idle.",
    "claim_task":        lambda **kw: claim_task(kw["task_id"], "lead"),
}

# these base tools are unchanged from s02
TOOLS = [
    {"name": "bash", "description": "Run a shell command.",
     "input_schema": {"type": "object", "properties": {"command": {"type": "string"}}, "required": ["command"]}},
    {"name": "read_file", "description": "Read file contents.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "limit": {"type": "integer"}}, "required": ["path"]}},
    {"name": "write_file", "description": "Write content to file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "content": {"type": "string"}}, "required": ["path", "content"]}},
    {"name": "edit_file", "description": "Replace exact text in file.",
     "input_schema": {"type": "object", "properties": {"path": {"type": "string"}, "old_text": {"type": "string"}, "new_text": {"type": "string"}}, "required": ["path", "old_text", "new_text"]}},
    {"name": "spawn_teammate", "description": "Spawn an autonomous teammate.",
     "input_schema": {"type": "object", "properties": {"name": {"type": "string"}, "role": {"type": "string"}, "prompt": {"type": "string"}}, "required": ["name", "role", "prompt"]}},
    {"name": "list_teammates", "description": "List all teammates.",
     "input_schema": {"type": "object", "properties": {}}},
    {"name": "send_message", "description": "Send a message to a teammate.",
     "input_schema": {"type": "object", "properties": {"to": {"type": "string"}, "content": {"type": "string"}, "msg_type": {"type": "string", "enum": list(VALID_MSG_TYPES)}}, "required": ["to", "content"]}},
    {"name": "read_inbox", "description": "Read and drain the lead's inbox.",
     "input_schema": {"type": "object", "properties": {}}},
    {"name": "broadcast", "description": "Send a message to all teammates.",
     "input_schema": {"type": "object", "properties": {"content": {"type": "string"}}, "required": ["content"]}},
    {"name": "shutdown_request", "description": "Request a teammate to shut down.",
     "input_schema": {"type": "object", "properties": {"teammate": {"type": "string"}}, "required": ["teammate"]}},
    {"name": "shutdown_response", "description": "Check shutdown request status.",
     "input_schema": {"type": "object", "properties": {"request_id": {"type": "string"}}, "required": ["request_id"]}},
    {"name": "plan_approval", "description": "Approve or reject a teammate's plan.",
     "input_schema": {"type": "object", "properties": {"request_id": {"type": "string"}, "approve": {"type": "boolean"}, "feedback": {"type": "string"}}, "required": ["request_id", "approve"]}},
    {"name": "idle", "description": "Enter idle state (for lead -- rarely used).",
     "input_schema": {"type": "object", "properties": {}}},
    {"name": "claim_task", "description": "Claim a task from the board by ID.",
     "input_schema": {"type": "object", "properties": {"task_id": {"type": "integer"}}, "required": ["task_id"]}},
]


def agent_loop(messages: list):
    while True:
        inbox = BUS.read_inbox("lead")
        if inbox:
            messages.append({
                "role": "user",
                "content": f"<inbox>{json.dumps(inbox, indent=2)}</inbox>",
            })
            messages.append({
                "role": "assistant",
                "content": "Noted inbox messages.",
            })
        response = client.messages.create(
            model=MODEL,
            system=SYSTEM,
            messages=messages,
            tools=TOOLS,
            max_tokens=8000,
        )
        messages.append({"role": "assistant", "content": response.content})
        if response.stop_reason != "tool_use":
            return
        results = []
        for block in response.content:
            if block.type == "tool_use":
                handler = TOOL_HANDLERS.get(block.name)
                try:
                    output = handler(**block.input) if handler else f"Unknown tool: {block.name}"
                except Exception as e:
                    output = f"Error: {e}"
                print(f"> {block.name}: {str(output)[:200]}")
                results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": str(output),
                })
        messages.append({"role": "user", "content": results})


if __name__ == "__main__":
    history = []
    while True:
        try:
            query = input("\\033[36ms11 >> \\033[0m")
        except (EOFError, KeyboardInterrupt):
            break
        if query.strip().lower() in ("q", "exit", ""):
            break
        if query.strip() == "/team":
            print(TEAM.list_all())
            continue
        if query.strip() == "/inbox":
            print(json.dumps(BUS.read_inbox("lead"), indent=2))
            continue
        if query.strip() == "/tasks":
            TASKS_DIR.mkdir(exist_ok=True)
            for f in sorted(TASKS_DIR.glob("task_*.json")):
                t = json.loads(f.read_text())
                marker = {"pending": "[ ]", "in_progress": "[>]", "completed": "[x]"}.get(t["status"], "[?]")
                owner = f" @{t['owner']}" if t.get("owner") else ""
                print(f"  {marker} #{t['id']}: {t['subject']}{owner}")
            continue
        history.append({"role": "user", "content": query})
        agent_loop(history)
        response_content = history[-1]["content"]
        if isinstance(response_content, list):
            for block in response_content:
                if hasattr(block, "text"):
                    print(block.text)
        print()
`},{id:"s12",title:"Worktree Isolation",subtitle:"Worktree 任务隔离",motto:"各干各的目录，互不干扰",phase:4,docUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/docs/zh/s12-worktree-task-isolation.md",codeUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/agents/s12_worktree_task_isolation.py",content:`# s12: Worktree + Task Isolation (Worktree 任务隔离)

\`s01 > s02 > s03 > s04 > s05 > s06 | s07 > s08 > s09 > s10 > s11 > [ s12 ]\`

> *"各干各的目录, 互不干扰"* -- 任务管目标, worktree 管目录, 按 ID 绑定。
>
> **Harness 层**: 目录隔离 -- 永不碰撞的并行执行通道。

## 问题

到 s11, 智能体已经能自主认领和完成任务。但所有任务共享一个目录。两个智能体同时重构不同模块 -- A 改 \`config.py\`, B 也改 \`config.py\`, 未提交的改动互相污染, 谁也没法干净回滚。

任务板管 "做什么" 但不管 "在哪做"。解法: 给每个任务一个独立的 git worktree 目录, 用任务 ID 把两边关联起来。

## 解决方案

\`\`\`
Control plane (.tasks/)             Execution plane (.worktrees/)
+------------------+                +------------------------+
| task_1.json      |                | auth-refactor/         |
|   status: in_progress  <------>   branch: wt/auth-refactor
|   worktree: "auth-refactor"   |   task_id: 1             |
+------------------+                +------------------------+
| task_2.json      |                | ui-login/              |
|   status: pending    <------>     branch: wt/ui-login
|   worktree: "ui-login"       |   task_id: 2             |
+------------------+                +------------------------+
                                    |
                          index.json (worktree registry)
                          events.jsonl (lifecycle log)

State machines:
  Task:     pending -> in_progress -> completed
  Worktree: absent  -> active      -> removed | kept
\`\`\`

## 工作原理

1. **创建任务。** 先把目标持久化。

\`\`\`python
TASKS.create("Implement auth refactor")
# -> .tasks/task_1.json  status=pending  worktree=""
\`\`\`

2. **创建 worktree 并绑定任务。** 传入 \`task_id\` 自动将任务推进到 \`in_progress\`。

\`\`\`python
WORKTREES.create("auth-refactor", task_id=1)
# -> git worktree add -b wt/auth-refactor .worktrees/auth-refactor HEAD
# -> index.json gets new entry, task_1.json gets worktree="auth-refactor"
\`\`\`

绑定同时写入两侧状态:

\`\`\`python
def bind_worktree(self, task_id, worktree):
    task = self._load(task_id)
    task["worktree"] = worktree
    if task["status"] == "pending":
        task["status"] = "in_progress"
    self._save(task)
\`\`\`

3. **在 worktree 中执行命令。** \`cwd\` 指向隔离目录。

\`\`\`python
subprocess.run(command, shell=True, cwd=worktree_path,
               capture_output=True, text=True, timeout=300)
\`\`\`

4. **收尾。** 两种选择:
   - \`worktree_keep(name)\` -- 保留目录供后续使用。
   - \`worktree_remove(name, complete_task=True)\` -- 删除目录, 完成绑定任务, 发出事件。一个调用搞定拆除 + 完成。

\`\`\`python
def remove(self, name, force=False, complete_task=False):
    self._run_git(["worktree", "remove", wt["path"]])
    if complete_task and wt.get("task_id") is not None:
        self.tasks.update(wt["task_id"], status="completed")
        self.tasks.unbind_worktree(wt["task_id"])
        self.events.emit("task.completed", ...)
\`\`\`

5. **事件流。** 每个生命周期步骤写入 \`.worktrees/events.jsonl\`:

\`\`\`json
{
  "event": "worktree.remove.after",
  "task": {"id": 1, "status": "completed"},
  "worktree": {"name": "auth-refactor", "status": "removed"},
  "ts": 1730000000
}
\`\`\`

## 相对 s11 的变更

| 组件               | 之前 (s11)                 | 之后 (s12)                                   |
|--------------------|----------------------------|----------------------------------------------|
| 协调               | 任务板 (owner/status)      | 任务板 + worktree 显式绑定                   |
| 执行范围           | 共享目录                   | 每个任务独立目录                             |
| 可恢复性           | 仅任务状态                 | 任务状态 + worktree 索引                     |
| 收尾               | 任务完成                   | 任务完成 + 显式 keep/remove                  |
| 生命周期可见性     | 隐式日志                   | \`.worktrees/events.jsonl\` 显式事件流         |

## 试一试

\`\`\`sh
cd learn-claude-code
python agents/s12_worktree_task_isolation.py
\`\`\`

试试这些 prompt (英文 prompt 对 LLM 效果更好, 也可以用中文):

1. \`Create tasks for backend auth and frontend login page, then list tasks.\`
2. \`Create worktree "auth-refactor" for task 1, then bind task 2 to a new worktree "ui-login".\`
3. \`Run "git status --short" in worktree "auth-refactor".\`
4. \`Keep worktree "ui-login", then list worktrees and inspect events.\`
5. \`Remove worktree "auth-refactor" with complete_task=true, then list tasks/worktrees/events.\``,code:`#!/usr/bin/env python3
# Harness: directory isolation -- parallel execution lanes that never collide.
"""
s12_worktree_task_isolation.py - Worktree + Task Isolation

Directory-level isolation for parallel task execution.
Tasks are the control plane and worktrees are the execution plane.

    .tasks/task_12.json
      {
        "id": 12,
        "subject": "Implement auth refactor",
        "status": "in_progress",
        "worktree": "auth-refactor"
      }

    .worktrees/index.json
      {
        "worktrees": [
          {
            "name": "auth-refactor",
            "path": ".../.worktrees/auth-refactor",
            "branch": "wt/auth-refactor",
            "task_id": 12,
            "status": "active"
          }
        ]
      }

Key insight: "Isolate by directory, coordinate by task ID."
"""

import json
import os
import re
import subprocess
import time
from pathlib import Path

from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv(override=True)

if os.getenv("ANTHROPIC_BASE_URL"):
    os.environ.pop("ANTHROPIC_AUTH_TOKEN", None)

WORKDIR = Path.cwd()
client = Anthropic(base_url=os.getenv("ANTHROPIC_BASE_URL"))
MODEL = os.environ["MODEL_ID"]


def detect_repo_root(cwd: Path) -> Path | None:
    """Return git repo root if cwd is inside a repo, else None."""
    try:
        r = subprocess.run(
            ["git", "rev-parse", "--show-toplevel"],
            cwd=cwd,
            capture_output=True,
            text=True,
            timeout=10,
        )
        if r.returncode != 0:
            return None
        root = Path(r.stdout.strip())
        return root if root.exists() else None
    except Exception:
        return None


REPO_ROOT = detect_repo_root(WORKDIR) or WORKDIR

SYSTEM = (
    f"You are a coding agent at {WORKDIR}. "
    "Use task + worktree tools for multi-task work. "
    "For parallel or risky changes: create tasks, allocate worktree lanes, "
    "run commands in those lanes, then choose keep/remove for closeout. "
    "Use worktree_events when you need lifecycle visibility."
)


# -- EventBus: append-only lifecycle events for observability --
class EventBus:
    def __init__(self, event_log_path: Path):
        self.path = event_log_path
        self.path.parent.mkdir(parents=True, exist_ok=True)
        if not self.path.exists():
            self.path.write_text("")

    def emit(
        self,
        event: str,
        task: dict | None = None,
        worktree: dict | None = None,
        error: str | None = None,
    ):
        payload = {
            "event": event,
            "ts": time.time(),
            "task": task or {},
            "worktree": worktree or {},
        }
        if error:
            payload["error"] = error
        with self.path.open("a", encoding="utf-8") as f:
            f.write(json.dumps(payload) + "\\n")

    def list_recent(self, limit: int = 20) -> str:
        n = max(1, min(int(limit or 20), 200))
        lines = self.path.read_text(encoding="utf-8").splitlines()
        recent = lines[-n:]
        items = []
        for line in recent:
            try:
                items.append(json.loads(line))
            except Exception:
                items.append({"event": "parse_error", "raw": line})
        return json.dumps(items, indent=2)


# -- TaskManager: persistent task board with optional worktree binding --
class TaskManager:
    def __init__(self, tasks_dir: Path):
        self.dir = tasks_dir
        self.dir.mkdir(parents=True, exist_ok=True)
        self._next_id = self._max_id() + 1

    def _max_id(self) -> int:
        ids = []
        for f in self.dir.glob("task_*.json"):
            try:
                ids.append(int(f.stem.split("_")[1]))
            except Exception:
                pass
        return max(ids) if ids else 0

    def _path(self, task_id: int) -> Path:
        return self.dir / f"task_{task_id}.json"

    def _load(self, task_id: int) -> dict:
        path = self._path(task_id)
        if not path.exists():
            raise ValueError(f"Task {task_id} not found")
        return json.loads(path.read_text())

    def _save(self, task: dict):
        self._path(task["id"]).write_text(json.dumps(task, indent=2))

    def create(self, subject: str, description: str = "") -> str:
        task = {
            "id": self._next_id,
            "subject": subject,
            "description": description,
            "status": "pending",
            "owner": "",
            "worktree": "",
            "blockedBy": [],
            "created_at": time.time(),
            "updated_at": time.time(),
        }
        self._save(task)
        self._next_id += 1
        return json.dumps(task, indent=2)

    def get(self, task_id: int) -> str:
        return json.dumps(self._load(task_id), indent=2)

    def exists(self, task_id: int) -> bool:
        return self._path(task_id).exists()

    def update(self, task_id: int, status: str = None, owner: str = None) -> str:
        task = self._load(task_id)
        if status:
            if status not in ("pending", "in_progress", "completed"):
                raise ValueError(f"Invalid status: {status}")
            task["status"] = status
        if owner is not None:
            task["owner"] = owner
        task["updated_at"] = time.time()
        self._save(task)
        return json.dumps(task, indent=2)

    def bind_worktree(self, task_id: int, worktree: str, owner: str = "") -> str:
        task = self._load(task_id)
        task["worktree"] = worktree
        if owner:
            task["owner"] = owner
        if task["status"] == "pending":
            task["status"] = "in_progress"
        task["updated_at"] = time.time()
        self._save(task)
        return json.dumps(task, indent=2)

    def unbind_worktree(self, task_id: int) -> str:
        task = self._load(task_id)
        task["worktree"] = ""
        task["updated_at"] = time.time()
        self._save(task)
        return json.dumps(task, indent=2)

    def list_all(self) -> str:
        tasks = []
        for f in sorted(self.dir.glob("task_*.json")):
            tasks.append(json.loads(f.read_text()))
        if not tasks:
            return "No tasks."
        lines = []
        for t in tasks:
            marker = {
                "pending": "[ ]",
                "in_progress": "[>]",
                "completed": "[x]",
            }.get(t["status"], "[?]")
            owner = f" owner={t['owner']}" if t.get("owner") else ""
            wt = f" wt={t['worktree']}" if t.get("worktree") else ""
            lines.append(f"{marker} #{t['id']}: {t['subject']}{owner}{wt}")
        return "\\n".join(lines)


TASKS = TaskManager(REPO_ROOT / ".tasks")
EVENTS = EventBus(REPO_ROOT / ".worktrees" / "events.jsonl")


# -- WorktreeManager: create/list/run/remove git worktrees + lifecycle index --
class WorktreeManager:
    def __init__(self, repo_root: Path, tasks: TaskManager, events: EventBus):
        self.repo_root = repo_root
        self.tasks = tasks
        self.events = events
        self.dir = repo_root / ".worktrees"
        self.dir.mkdir(parents=True, exist_ok=True)
        self.index_path = self.dir / "index.json"
        if not self.index_path.exists():
            self.index_path.write_text(json.dumps({"worktrees": []}, indent=2))
        self.git_available = self._is_git_repo()

    def _is_git_repo(self) -> bool:
        try:
            r = subprocess.run(
                ["git", "rev-parse", "--is-inside-work-tree"],
                cwd=self.repo_root,
                capture_output=True,
                text=True,
                timeout=10,
            )
            return r.returncode == 0
        except Exception:
            return False

    def _run_git(self, args: list[str]) -> str:
        if not self.git_available:
            raise RuntimeError("Not in a git repository. worktree tools require git.")
        r = subprocess.run(
            ["git", *args],
            cwd=self.repo_root,
            capture_output=True,
            text=True,
            timeout=120,
        )
        if r.returncode != 0:
            msg = (r.stdout + r.stderr).strip()
            raise RuntimeError(msg or f"git {' '.join(args)} failed")
        return (r.stdout + r.stderr).strip() or "(no output)"

    def _load_index(self) -> dict:
        return json.loads(self.index_path.read_text())

    def _save_index(self, data: dict):
        self.index_path.write_text(json.dumps(data, indent=2))

    def _find(self, name: str) -> dict | None:
        idx = self._load_index()
        for wt in idx.get("worktrees", []):
            if wt.get("name") == name:
                return wt
        return None

    def _validate_name(self, name: str):
        if not re.fullmatch(r"[A-Za-z0-9._-]{1,40}", name or ""):
            raise ValueError(
                "Invalid worktree name. Use 1-40 chars: letters, numbers, ., _, -"
            )

    def create(self, name: str, task_id: int = None, base_ref: str = "HEAD") -> str:
        self._validate_name(name)
        if self._find(name):
            raise ValueError(f"Worktree '{name}' already exists in index")
        if task_id is not None and not self.tasks.exists(task_id):
            raise ValueError(f"Task {task_id} not found")

        path = self.dir / name
        branch = f"wt/{name}"
        self.events.emit(
            "worktree.create.before",
            task={"id": task_id} if task_id is not None else {},
            worktree={"name": name, "base_ref": base_ref},
        )
        try:
            self._run_git(["worktree", "add", "-b", branch, str(path), base_ref])

            entry = {
                "name": name,
                "path": str(path),
                "branch": branch,
                "task_id": task_id,
                "status": "active",
                "created_at": time.time(),
            }

            idx = self._load_index()
            idx["worktrees"].append(entry)
            self._save_index(idx)

            if task_id is not None:
                self.tasks.bind_worktree(task_id, name)

            self.events.emit(
                "worktree.create.after",
                task={"id": task_id} if task_id is not None else {},
                worktree={
                    "name": name,
                    "path": str(path),
                    "branch": branch,
                    "status": "active",
                },
            )
            return json.dumps(entry, indent=2)
        except Exception as e:
            self.events.emit(
                "worktree.create.failed",
                task={"id": task_id} if task_id is not None else {},
                worktree={"name": name, "base_ref": base_ref},
                error=str(e),
            )
            raise

    def list_all(self) -> str:
        idx = self._load_index()
        wts = idx.get("worktrees", [])
        if not wts:
            return "No worktrees in index."
        lines = []
        for wt in wts:
            suffix = f" task={wt['task_id']}" if wt.get("task_id") else ""
            lines.append(
                f"[{wt.get('status', 'unknown')}] {wt['name']} -> "
                f"{wt['path']} ({wt.get('branch', '-')}){suffix}"
            )
        return "\\n".join(lines)

    def status(self, name: str) -> str:
        wt = self._find(name)
        if not wt:
            return f"Error: Unknown worktree '{name}'"
        path = Path(wt["path"])
        if not path.exists():
            return f"Error: Worktree path missing: {path}"
        r = subprocess.run(
            ["git", "status", "--short", "--branch"],
            cwd=path,
            capture_output=True,
            text=True,
            timeout=60,
        )
        text = (r.stdout + r.stderr).strip()
        return text or "Clean worktree"

    def run(self, name: str, command: str) -> str:
        dangerous = ["rm -rf /", "sudo", "shutdown", "reboot", "> /dev/"]
        if any(d in command for d in dangerous):
            return "Error: Dangerous command blocked"

        wt = self._find(name)
        if not wt:
            return f"Error: Unknown worktree '{name}'"
        path = Path(wt["path"])
        if not path.exists():
            return f"Error: Worktree path missing: {path}"

        try:
            r = subprocess.run(
                command,
                shell=True,
                cwd=path,
                capture_output=True,
                text=True,
                timeout=300,
            )
            out = (r.stdout + r.stderr).strip()
            return out[:50000] if out else "(no output)"
        except subprocess.TimeoutExpired:
            return "Error: Timeout (300s)"

    def remove(self, name: str, force: bool = False, complete_task: bool = False) -> str:
        wt = self._find(name)
        if not wt:
            return f"Error: Unknown worktree '{name}'"

        self.events.emit(
            "worktree.remove.before",
            task={"id": wt.get("task_id")} if wt.get("task_id") is not None else {},
            worktree={"name": name, "path": wt.get("path")},
        )
        try:
            args = ["worktree", "remove"]
            if force:
                args.append("--force")
            args.append(wt["path"])
            self._run_git(args)

            if complete_task and wt.get("task_id") is not None:
                task_id = wt["task_id"]
                before = json.loads(self.tasks.get(task_id))
                self.tasks.update(task_id, status="completed")
                self.tasks.unbind_worktree(task_id)
                self.events.emit(
                    "task.completed",
                    task={
                        "id": task_id,
                        "subject": before.get("subject", ""),
                        "status": "completed",
                    },
                    worktree={"name": name},
                )

            idx = self._load_index()
            for item in idx.get("worktrees", []):
                if item.get("name") == name:
                    item["status"] = "removed"
                    item["removed_at"] = time.time()
            self._save_index(idx)

            self.events.emit(
                "worktree.remove.after",
                task={"id": wt.get("task_id")} if wt.get("task_id") is not None else {},
                worktree={"name": name, "path": wt.get("path"), "status": "removed"},
            )
            return f"Removed worktree '{name}'"
        except Exception as e:
            self.events.emit(
                "worktree.remove.failed",
                task={"id": wt.get("task_id")} if wt.get("task_id") is not None else {},
                worktree={"name": name, "path": wt.get("path")},
                error=str(e),
            )
            raise

    def keep(self, name: str) -> str:
        wt = self._find(name)
        if not wt:
            return f"Error: Unknown worktree '{name}'"

        idx = self._load_index()
        kept = None
        for item in idx.get("worktrees", []):
            if item.get("name") == name:
                item["status"] = "kept"
                item["kept_at"] = time.time()
                kept = item
        self._save_index(idx)

        self.events.emit(
            "worktree.keep",
            task={"id": wt.get("task_id")} if wt.get("task_id") is not None else {},
            worktree={
                "name": name,
                "path": wt.get("path"),
                "status": "kept",
            },
        )
        return json.dumps(kept, indent=2) if kept else f"Error: Unknown worktree '{name}'"


WORKTREES = WorktreeManager(REPO_ROOT, TASKS, EVENTS)


# -- Base tools (kept minimal, same style as previous sessions) --
def safe_path(p: str) -> Path:
    path = (WORKDIR / p).resolve()
    if not path.is_relative_to(WORKDIR):
        raise ValueError(f"Path escapes workspace: {p}")
    return path


def run_bash(command: str) -> str:
    dangerous = ["rm -rf /", "sudo", "shutdown", "reboot", "> /dev/"]
    if any(d in command for d in dangerous):
        return "Error: Dangerous command blocked"
    try:
        r = subprocess.run(
            command,
            shell=True,
            cwd=WORKDIR,
            capture_output=True,
            text=True,
            timeout=120,
        )
        out = (r.stdout + r.stderr).strip()
        return out[:50000] if out else "(no output)"
    except subprocess.TimeoutExpired:
        return "Error: Timeout (120s)"


def run_read(path: str, limit: int = None) -> str:
    try:
        lines = safe_path(path).read_text().splitlines()
        if limit and limit < len(lines):
            lines = lines[:limit] + [f"... ({len(lines) - limit} more)"]
        return "\\n".join(lines)[:50000]
    except Exception as e:
        return f"Error: {e}"


def run_write(path: str, content: str) -> str:
    try:
        fp = safe_path(path)
        fp.parent.mkdir(parents=True, exist_ok=True)
        fp.write_text(content)
        return f"Wrote {len(content)} bytes"
    except Exception as e:
        return f"Error: {e}"


def run_edit(path: str, old_text: str, new_text: str) -> str:
    try:
        fp = safe_path(path)
        c = fp.read_text()
        if old_text not in c:
            return f"Error: Text not found in {path}"
        fp.write_text(c.replace(old_text, new_text, 1))
        return f"Edited {path}"
    except Exception as e:
        return f"Error: {e}"


TOOL_HANDLERS = {
    "bash": lambda **kw: run_bash(kw["command"]),
    "read_file": lambda **kw: run_read(kw["path"], kw.get("limit")),
    "write_file": lambda **kw: run_write(kw["path"], kw["content"]),
    "edit_file": lambda **kw: run_edit(kw["path"], kw["old_text"], kw["new_text"]),
    "task_create": lambda **kw: TASKS.create(kw["subject"], kw.get("description", "")),
    "task_list": lambda **kw: TASKS.list_all(),
    "task_get": lambda **kw: TASKS.get(kw["task_id"]),
    "task_update": lambda **kw: TASKS.update(kw["task_id"], kw.get("status"), kw.get("owner")),
    "task_bind_worktree": lambda **kw: TASKS.bind_worktree(kw["task_id"], kw["worktree"], kw.get("owner", "")),
    "worktree_create": lambda **kw: WORKTREES.create(kw["name"], kw.get("task_id"), kw.get("base_ref", "HEAD")),
    "worktree_list": lambda **kw: WORKTREES.list_all(),
    "worktree_status": lambda **kw: WORKTREES.status(kw["name"]),
    "worktree_run": lambda **kw: WORKTREES.run(kw["name"], kw["command"]),
    "worktree_keep": lambda **kw: WORKTREES.keep(kw["name"]),
    "worktree_remove": lambda **kw: WORKTREES.remove(kw["name"], kw.get("force", False), kw.get("complete_task", False)),
    "worktree_events": lambda **kw: EVENTS.list_recent(kw.get("limit", 20)),
}

TOOLS = [
    {
        "name": "bash",
        "description": "Run a shell command in the current workspace (blocking).",
        "input_schema": {
            "type": "object",
            "properties": {"command": {"type": "string"}},
            "required": ["command"],
        },
    },
    {
        "name": "read_file",
        "description": "Read file contents.",
        "input_schema": {
            "type": "object",
            "properties": {
                "path": {"type": "string"},
                "limit": {"type": "integer"},
            },
            "required": ["path"],
        },
    },
    {
        "name": "write_file",
        "description": "Write content to file.",
        "input_schema": {
            "type": "object",
            "properties": {
                "path": {"type": "string"},
                "content": {"type": "string"},
            },
            "required": ["path", "content"],
        },
    },
    {
        "name": "edit_file",
        "description": "Replace exact text in file.",
        "input_schema": {
            "type": "object",
            "properties": {
                "path": {"type": "string"},
                "old_text": {"type": "string"},
                "new_text": {"type": "string"},
            },
            "required": ["path", "old_text", "new_text"],
        },
    },
    {
        "name": "task_create",
        "description": "Create a new task on the shared task board.",
        "input_schema": {
            "type": "object",
            "properties": {
                "subject": {"type": "string"},
                "description": {"type": "string"},
            },
            "required": ["subject"],
        },
    },
    {
        "name": "task_list",
        "description": "List all tasks with status, owner, and worktree binding.",
        "input_schema": {"type": "object", "properties": {}},
    },
    {
        "name": "task_get",
        "description": "Get task details by ID.",
        "input_schema": {
            "type": "object",
            "properties": {"task_id": {"type": "integer"}},
            "required": ["task_id"],
        },
    },
    {
        "name": "task_update",
        "description": "Update task status or owner.",
        "input_schema": {
            "type": "object",
            "properties": {
                "task_id": {"type": "integer"},
                "status": {
                    "type": "string",
                    "enum": ["pending", "in_progress", "completed"],
                },
                "owner": {"type": "string"},
            },
            "required": ["task_id"],
        },
    },
    {
        "name": "task_bind_worktree",
        "description": "Bind a task to a worktree name.",
        "input_schema": {
            "type": "object",
            "properties": {
                "task_id": {"type": "integer"},
                "worktree": {"type": "string"},
                "owner": {"type": "string"},
            },
            "required": ["task_id", "worktree"],
        },
    },
    {
        "name": "worktree_create",
        "description": "Create a git worktree and optionally bind it to a task.",
        "input_schema": {
            "type": "object",
            "properties": {
                "name": {"type": "string"},
                "task_id": {"type": "integer"},
                "base_ref": {"type": "string"},
            },
            "required": ["name"],
        },
    },
    {
        "name": "worktree_list",
        "description": "List worktrees tracked in .worktrees/index.json.",
        "input_schema": {"type": "object", "properties": {}},
    },
    {
        "name": "worktree_status",
        "description": "Show git status for one worktree.",
        "input_schema": {
            "type": "object",
            "properties": {"name": {"type": "string"}},
            "required": ["name"],
        },
    },
    {
        "name": "worktree_run",
        "description": "Run a shell command in a named worktree directory.",
        "input_schema": {
            "type": "object",
            "properties": {
                "name": {"type": "string"},
                "command": {"type": "string"},
            },
            "required": ["name", "command"],
        },
    },
    {
        "name": "worktree_remove",
        "description": "Remove a worktree and optionally mark its bound task completed.",
        "input_schema": {
            "type": "object",
            "properties": {
                "name": {"type": "string"},
                "force": {"type": "boolean"},
                "complete_task": {"type": "boolean"},
            },
            "required": ["name"],
        },
    },
    {
        "name": "worktree_keep",
        "description": "Mark a worktree as kept in lifecycle state without removing it.",
        "input_schema": {
            "type": "object",
            "properties": {"name": {"type": "string"}},
            "required": ["name"],
        },
    },
    {
        "name": "worktree_events",
        "description": "List recent worktree/task lifecycle events from .worktrees/events.jsonl.",
        "input_schema": {
            "type": "object",
            "properties": {"limit": {"type": "integer"}},
        },
    },
]


def agent_loop(messages: list):
    while True:
        response = client.messages.create(
            model=MODEL,
            system=SYSTEM,
            messages=messages,
            tools=TOOLS,
            max_tokens=8000,
        )
        messages.append({"role": "assistant", "content": response.content})
        if response.stop_reason != "tool_use":
            return

        results = []
        for block in response.content:
            if block.type == "tool_use":
                handler = TOOL_HANDLERS.get(block.name)
                try:
                    output = handler(**block.input) if handler else f"Unknown tool: {block.name}"
                except Exception as e:
                    output = f"Error: {e}"
                print(f"> {block.name}: {str(output)[:200]}")
                results.append(
                    {
                        "type": "tool_result",
                        "tool_use_id": block.id,
                        "content": str(output),
                    }
                )
        messages.append({"role": "user", "content": results})


if __name__ == "__main__":
    print(f"Repo root for s12: {REPO_ROOT}")
    if not WORKTREES.git_available:
        print("Note: Not in a git repo. worktree_* tools will return errors.")

    history = []
    while True:
        try:
            query = input("\\033[36ms12 >> \\033[0m")
        except (EOFError, KeyboardInterrupt):
            break
        if query.strip().lower() in ("q", "exit", ""):
            break
        history.append({"role": "user", "content": query})
        agent_loop(history)
        response_content = history[-1]["content"]
        if isinstance(response_content, list):
            for block in response_content:
                if hasattr(block, "text"):
                    print(block.text)
        print()
`}];function Zw(a){return ot.find(r=>r.id===a)}function Ww(a){const r=ot.findIndex(i=>i.id===a);return{prev:r>0?ot[r-1]:null,next:r<ot.length-1?ot[r+1]:null}}const Me={bg:"#000000",bgSecondary:"#0A0A0A",bgTertiary:"#111111",border:"#1A1A1A",borderHover:"#2A2A2A",text:"#FAFAFA",textSecondary:"#B0B0B0",textMuted:"#666666",accent:"#00D9C0",phases:["#FF6B6B","#00D9C0","#FFD93D","#6BCB77","#4D96FF"]},Jw={s00:{cn:"课程介绍",en:"Introduction"},s01:{cn:"Agent 循环",en:"Agent Loop"},s02:{cn:"工具使用",en:"Tool Use"},s03:{cn:"待办写入",en:"TodoWrite"},s04:{cn:"子智能体",en:"Subagents"},s05:{cn:"技能加载",en:"Skills"},s06:{cn:"上下文压缩",en:"Context Compact"},s07:{cn:"任务系统",en:"Tasks"},s08:{cn:"后台任务",en:"Background Tasks"},s09:{cn:"智能体团队",en:"Agent Teams"},s10:{cn:"团队协议",en:"Team Protocols"},s11:{cn:"自治智能体",en:"Autonomous Agents"},s12:{cn:"Worktree 隔离",en:"Worktree Isolation"}},wh=a=>Jw[a]||{cn:a,en:a},vh={0:{name:"概述",desc:"模型即 Agent"},1:{name:"基础",desc:"循环与工具"},2:{name:"规划与知识",desc:"思考与记忆"},3:{name:"持久化",desc:"任务与后台"},4:{name:"团队协作",desc:"多 Agent 协作"}};function $w(){const[a,r]=Q.useState(!1),[i,o]=Q.useState(0),[d,p]=Q.useState(0),f=Q.useRef(null),h=Q.useRef(!1),x=Q.useRef(0),g=Q.useRef(0);Q.useEffect(()=>{const M=setTimeout(()=>r(!0),150);return()=>clearTimeout(M)},[]),Q.useEffect(()=>{const M=f.current;if(!M)return;const ee=H=>{H.preventDefault();const le=Math.max(0,Math.min(1,d+H.deltaY*.001));p(le);const de=Math.round(le*(ot.length-1));o(de)};return M.addEventListener("wheel",ee,{passive:!1}),()=>M.removeEventListener("wheel",ee)},[d]);const b=M=>{h.current=!0,x.current=M.clientY,g.current=d,f.current&&(f.current.style.cursor="grabbing")},_=M=>{if(!h.current)return;const ee=x.current-M.clientY,H=Math.max(0,Math.min(1,g.current+ee*.002));p(H);const le=Math.round(H*(ot.length-1));o(le)},T=()=>{h.current=!1,f.current&&(f.current.style.cursor="grab")},w=M=>{o(M),p(M/(ot.length-1))},K=ot[i]?.phase||0,F=Me.phases[K]||Me.accent;return u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:120:5",style:{backgroundColor:Me.bg},className:"min-h-screen text-white overflow-hidden",children:[u.jsxs("header",{"code-path":"src\\sections\\LearnCCPage.tsx:122:7",style:{backgroundColor:Me.bgSecondary,borderBottom:`1px solid ${Me.border}`},className:"h-16 flex items-center justify-between px-6 sticky top-0 z-50",children:[u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:129:9",className:"flex items-center gap-4",children:[u.jsxs("a",{"code-path":"src\\sections\\LearnCCPage.tsx:130:11",href:"/",className:"flex items-center gap-2 transition-colors cursor-pointer hover:opacity-80",style:{color:Me.textSecondary},children:[u.jsx(jr,{"code-path":"src\\sections\\LearnCCPage.tsx:135:13",className:"w-5 h-5"}),u.jsx("span",{"code-path":"src\\sections\\LearnCCPage.tsx:136:13",children:"首页"})]}),u.jsx("div",{"code-path":"src\\sections\\LearnCCPage.tsx:138:11",style:{backgroundColor:Me.border},className:"w-px h-6"}),u.jsx("h1",{"code-path":"src\\sections\\LearnCCPage.tsx:139:11",className:"text-lg font-semibold",children:"Agent 入门教程"})]}),u.jsx("a",{"code-path":"src\\sections\\LearnCCPage.tsx:141:9",href:"https://github.com/shareAI-lab/learn-claude-code",target:"_blank",rel:"noopener noreferrer",style:{color:Me.textSecondary},className:"hover:text-white transition-colors cursor-pointer",children:u.jsx(Ar,{"code-path":"src\\sections\\LearnCCPage.tsx:148:11",className:"w-5 h-5"})})]}),u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:153:7",style:{backgroundColor:Me.bgSecondary,borderBottom:`1px solid ${Me.border}`,paddingTop:"60px"},className:"pb-4 px-6",children:[u.jsx("div",{"code-path":"src\\sections\\LearnCCPage.tsx:162:9",className:"flex justify-between mb-3 max-w-4xl mx-auto",children:Object.entries(vh).map(([M,ee])=>{const H=Number(M),le=K>=H,de=K===H;return u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:168:15",className:"flex flex-col items-center cursor-pointer",onClick:()=>{const P=ot.findIndex($=>$.phase===H);P>=0&&w(P)},children:[u.jsx("div",{"code-path":"src\\sections\\LearnCCPage.tsx:176:17",className:"w-3 h-3 rounded-full mb-2 transition-all duration-300",style:{backgroundColor:le?Me.phases[H]:Me.border,boxShadow:de?`0 0 10px ${Me.phases[H]}`:"none"}}),u.jsx("span",{"code-path":"src\\sections\\LearnCCPage.tsx:183:17",className:"text-xs font-medium",style:{color:de?Me.phases[H]:Me.textMuted},children:ee.name}),u.jsx("span",{"code-path":"src\\sections\\LearnCCPage.tsx:191:17",className:"text-xs",style:{color:Me.textMuted},children:ee.desc})]},M)})}),u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:203:9",className:"max-w-4xl mx-auto relative",children:[u.jsx("div",{"code-path":"src\\sections\\LearnCCPage.tsx:205:11",className:"h-1 rounded-full absolute top-0 left-0 right-0",style:{backgroundColor:Me.border}}),u.jsx("div",{"code-path":"src\\sections\\LearnCCPage.tsx:210:11",className:"h-1 rounded-full absolute top-0 left-0 flex",children:[0,1,2,3,4].map(M=>{const H=ot.filter(le=>le.phase===M).length/ot.length*100;return u.jsx("div",{"code-path":"src\\sections\\LearnCCPage.tsx:215:17",className:"h-full rounded-full transition-all duration-300",style:{width:`${H}%`,backgroundColor:K>=M?Me.phases[M]:Me.border}},M)})}),u.jsx("div",{"code-path":"src\\sections\\LearnCCPage.tsx:227:11",className:"absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 border-black transition-all duration-300",style:{left:`${i/(ot.length-1)*100}%`,backgroundColor:F,boxShadow:`0 0 15px ${F}`}})]}),u.jsx("div",{"code-path":"src\\sections\\LearnCCPage.tsx:238:9",className:"flex justify-center gap-1 mt-3",children:ot.map((M,ee)=>{const H=ee===i,le=Me.phases[M.phase]||Me.accent;return u.jsx("button",{"code-path":"src\\sections\\LearnCCPage.tsx:243:15",onClick:()=>w(ee),className:"w-2 h-2 rounded-full transition-all duration-300 cursor-pointer",style:{backgroundColor:H?le:Me.borderHover,transform:H?"scale(1.5)":"scale(1)"},title:`${M.id}: ${wh(M.id).cn}`},M.id)})})]}),u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:259:7",ref:f,className:`relative cursor-grab transition-all duration-700 ${a?"opacity-100":"opacity-0"}`,style:{height:"calc(100vh - 180px)"},onMouseDown:b,onMouseMove:_,onMouseUp:T,onMouseLeave:T,children:[u.jsx("div",{"code-path":"src\\sections\\LearnCCPage.tsx:269:9",className:"absolute inset-0 flex items-center justify-center p-12",children:u.jsx("div",{"code-path":"src\\sections\\LearnCCPage.tsx:270:11",className:"relative w-full max-w-3xl",style:{height:"500px"},children:ot.map((M,ee)=>{const H=wh(M.id),le=ee===i,de=ee-i;let P=0,$=1,xe=0,he=0,Se=0;le?(P=0,$=1,xe=1,he=ot.length):Math.abs(de)<=3&&(P=de*80,$=1-Math.abs(de)*.1,xe=1-Math.abs(de)*.25,he=ot.length-Math.abs(de),Se=Math.abs(de)*2);const te=Me.phases[M.phase]||Me.accent;return u.jsx("a",{"code-path":"src\\sections\\LearnCCPage.tsx:298:17",href:`/learn-cc/${M.id}`,className:"absolute w-full transition-all duration-500 ease-out",style:{transform:`translateY(${P}px) scale(${$})`,opacity:xe,zIndex:he,top:"50%",marginTop:"-180px",filter:Se>0?`blur(${Se}px)`:"none",pointerEvents:le?"auto":"none"},children:u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:312:19",className:"rounded-2xl p-8",style:{backgroundColor:le?Me.bgTertiary:Me.bgSecondary,border:`1px solid ${le?te:Me.border}`,borderLeft:`5px solid ${te}`,boxShadow:le?`0 0 80px ${te}40, 0 25px 50px rgba(0,0,0,0.6)`:"0 15px 40px rgba(0,0,0,0.4)"},children:[u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:324:21",className:"flex items-center justify-between mb-4",children:[u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:325:23",className:"flex items-center gap-3",children:[u.jsx("span",{"code-path":"src\\sections\\LearnCCPage.tsx:326:25",className:"text-xs font-mono px-3 py-1 rounded-lg",style:{backgroundColor:te,color:Me.bg,fontWeight:600},children:M.id.toUpperCase()}),u.jsxs("span",{"code-path":"src\\sections\\LearnCCPage.tsx:336:25",className:"text-xs px-2 py-1 rounded",style:{backgroundColor:`${te}30`,color:te},children:["Phase ",M.phase]})]}),u.jsx("span",{"code-path":"src\\sections\\LearnCCPage.tsx:346:23",style:{color:Me.textMuted},className:"text-sm",children:vh[M.phase]?.name})]}),u.jsx("h3",{"code-path":"src\\sections\\LearnCCPage.tsx:352:21",className:"text-3xl font-bold mb-2",style:{color:le?te:Me.text},children:H.cn}),u.jsx("p",{"code-path":"src\\sections\\LearnCCPage.tsx:358:21",style:{color:Me.textSecondary},className:"text-xl mb-4",children:H.en}),u.jsx("p",{"code-path":"src\\sections\\LearnCCPage.tsx:363:21",className:"text-base italic mb-6",style:{color:Me.textMuted,borderLeft:`3px solid ${te}`,paddingLeft:"1rem"},children:M.motto}),u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:375:21",className:"flex items-center justify-between",children:[u.jsxs("span",{"code-path":"src\\sections\\LearnCCPage.tsx:376:23",style:{color:Me.textMuted},className:"text-sm",children:[ee+1," / ",ot.length]}),u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:379:23",className:"flex items-center gap-2",style:{color:te},children:[u.jsx("span",{"code-path":"src\\sections\\LearnCCPage.tsx:380:25",className:"text-sm font-medium",children:"进入学习"}),u.jsx(li,{"code-path":"src\\sections\\LearnCCPage.tsx:381:25",className:"w-5 h-5"})]})]})]})},M.id)})})}),u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:392:9",className:"absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center",children:[u.jsx("p",{"code-path":"src\\sections\\LearnCCPage.tsx:393:11",style:{color:Me.textMuted},className:"text-sm mb-2",children:"滚轮滑动或拖拽切换章节"}),u.jsx("div",{"code-path":"src\\sections\\LearnCCPage.tsx:396:11",className:"flex justify-center gap-1",children:u.jsx("span",{"code-path":"src\\sections\\LearnCCPage.tsx:397:13",style:{color:F},className:"text-lg animate-bounce",children:"↓"})})]})]})]})}const fe={bg:"#000000",bgSecondary:"#0A0A0A",bgTertiary:"#111111",border:"#1A1A1A",text:"#FAFAFA",textSecondary:"#B0B0B0",textMuted:"#666666",accent:"#00D9C0",accentMuted:"#0D4D47"},ws="'IBM Plex Mono', 'SF Mono', Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",ev={s00:{cn:"课程介绍",en:"Introduction"},s01:{cn:"Agent 循环",en:"Agent Loop"},s02:{cn:"工具使用",en:"Tool Use"},s03:{cn:"待办写入",en:"TodoWrite"},s04:{cn:"子智能体",en:"Subagents"},s05:{cn:"技能加载",en:"Skills"},s06:{cn:"上下文压缩",en:"Context Compact"},s07:{cn:"任务系统",en:"Tasks"},s08:{cn:"后台任务",en:"Background Tasks"},s09:{cn:"智能体团队",en:"Agent Teams"},s10:{cn:"团队协议",en:"Team Protocols"},s11:{cn:"自治智能体",en:"Autonomous Agents"},s12:{cn:"Worktree 隔离",en:"Worktree Isolation"}},tv=a=>{const r=a.split(`
`),i=[];let o=!1,d=[],p=0;for(let f=0;f<r.length;f++){const h=r[f];if(h.startsWith("```")){o?(i.push(u.jsx("pre",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:59:11",className:"rounded-lg my-4 overflow-x-auto",style:{backgroundColor:"#0A0A0A",border:"1px solid #1A1A1A",padding:"1rem",fontFamily:ws,fontSize:"0.875rem",lineHeight:"1.6"},children:u.jsx("code",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:71:13",style:{fontFamily:ws,color:fe.textSecondary},children:d.join(`
`)})},`code-${p++}`)),d=[],o=!1):o=!0;continue}if(o){d.push(h);continue}if(h.startsWith("# "))i.push(u.jsx("h1",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:92:9",className:"text-2xl font-bold mb-6 mt-8",style:{color:fe.text},children:h.slice(2)},f));else if(h.startsWith("## "))i.push(u.jsx("h2",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:98:9",className:"text-xl font-bold mb-4 mt-6",style:{color:fe.text},children:h.slice(3)},f));else if(h.startsWith("### "))i.push(u.jsx("h3",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:104:9",className:"text-lg font-semibold mb-3 mt-5",style:{color:fe.text},children:h.slice(4)},f));else if(h.startsWith("> "))i.push(u.jsx("blockquote",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:112:9",className:"border-l-4 my-4 pl-4 py-1",style:{borderColor:fe.accent,color:fe.textSecondary,fontStyle:"italic",backgroundColor:`${fe.accentMuted}30`,borderRadius:"0 8px 8px 0"},children:Fc(h.slice(2))},f));else if(h.startsWith("- ")||h.startsWith("* "))i.push(u.jsx("li",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:130:9",className:"ml-6 mb-2 list-disc",style:{color:fe.textSecondary},children:Fc(h.slice(2))},f));else if(h.startsWith("|")){const x=h.split("|").filter(g=>g.trim());if(x.some(g=>g.includes("---")))continue;i.push(u.jsx("tr",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:140:9",className:"border-b",style:{borderColor:fe.border},children:x.map((g,b)=>u.jsx("td",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:142:13",className:"px-4 py-2",style:{color:fe.textSecondary},children:g.trim()},b))},f))}else h.trim()===""?i.push(u.jsx("br",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:151:21"},f)):i.push(u.jsx("p",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:156:9",className:"mb-4 leading-relaxed",style:{color:fe.textSecondary},children:Fc(h)},f))}return i},Fc=a=>a.split(/(`[^`]+`)/).map((i,o)=>i.startsWith("`")&&i.endsWith("`")?u.jsx("code",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:172:9",className:"px-1.5 py-0.5 rounded text-sm",style:{backgroundColor:fe.bgSecondary,color:fe.accent,fontFamily:ws},children:i.slice(1,-1)},o):i);function nv({lessonId:a}){const[r,i]=Q.useState("docs"),[o,d]=Q.useState(!1),[p,f]=Q.useState(!1),h=a?Zw(a):null,{prev:x,next:g}=a?Ww(a):{prev:null,next:null};Q.useEffect(()=>{f(!0)},[]);const b=()=>{h?.code&&(navigator.clipboard.writeText(h.code),d(!0),setTimeout(()=>d(!1),2e3))},_=w=>ev[w]||{cn:w,en:w};if(!h)return u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:213:7",style:{backgroundColor:fe.bg},className:"min-h-screen text-white flex items-center justify-center",children:u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:214:9",className:"text-center",children:[u.jsx("p",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:215:11",style:{color:fe.textMuted},className:"mb-4",children:"课程不存在"}),u.jsx("a",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:216:11",href:"/learn-cc",style:{color:fe.accent},className:"hover:underline",children:"返回课程列表"})]})});const T=_(h.id);return u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:225:5",style:{backgroundColor:fe.bg},className:"min-h-screen text-white",children:[u.jsxs("header",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:227:7",style:{backgroundColor:fe.bgSecondary,borderBottom:`1px solid ${fe.border}`},className:"h-16 flex items-center justify-between px-6 sticky top-0 z-50",children:[u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:234:9",className:"flex items-center gap-4",children:[u.jsxs("a",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:235:11",href:"/learn-cc",className:"flex items-center gap-2 transition-colors hover:opacity-80 cursor-pointer",style:{color:fe.textSecondary},children:[u.jsx(ni,{"code-path":"src\\sections\\LearnCCLessonPage.tsx:240:13",className:"w-5 h-5"}),u.jsx("span",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:241:13",children:"返回"})]}),u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:243:11",style:{backgroundColor:fe.border},className:"w-px h-6"}),u.jsxs("span",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:244:11",className:"px-2 py-1 text-xs rounded-lg",style:{backgroundColor:fe.accentMuted,color:fe.accent},children:["Phase ",h.phase]}),u.jsxs("h1",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:250:11",className:"text-lg font-semibold hidden md:block",children:[T.cn," · ",T.en]})]}),u.jsx("a",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:254:9",href:"https://github.com/shareAI-lab/learn-claude-code",target:"_blank",rel:"noopener noreferrer",style:{color:fe.textSecondary},className:"hover:text-white transition-colors cursor-pointer",children:u.jsx(Ar,{"code-path":"src\\sections\\LearnCCLessonPage.tsx:261:11",className:"w-5 h-5"})})]}),u.jsx("section",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:266:7",className:`py-16 px-6 transition-all duration-700 ${p?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:269:9",className:"max-w-4xl mx-auto text-center",children:[u.jsx("h2",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:270:11",className:"text-4xl md:text-5xl font-bold mb-4",children:u.jsx("span",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:273:13",style:{color:fe.textSecondary},children:T.cn})}),u.jsx("p",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:275:11",style:{color:fe.textSecondary},className:"text-xl mb-4",children:T.en}),u.jsxs("p",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:278:11",className:"text-lg italic",style:{color:fe.textMuted,borderLeft:`3px solid ${fe.accent}`,paddingLeft:"1rem",display:"inline-block"},children:['"',h.motto,'"']})]})}),u.jsx("section",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:293:7",className:"px-6 mb-8",children:u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:294:9",className:"max-w-4xl mx-auto",children:u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:295:11",className:"inline-flex rounded-lg p-1",style:{backgroundColor:fe.bgSecondary,border:`1px solid ${fe.border}`},children:[u.jsxs("button",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:299:13",onClick:()=>i("docs"),className:`flex items-center gap-2 px-5 py-2.5 rounded-md transition-all duration-200 cursor-pointer ${r==="docs"?"shadow-sm":""}`,style:{backgroundColor:r==="docs"?fe.accentMuted:"transparent",color:r==="docs"?fe.accent:fe.textMuted},children:[u.jsx(b1,{"code-path":"src\\sections\\LearnCCLessonPage.tsx:309:15",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:310:15",children:"文档"})]}),u.jsxs("button",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:312:13",onClick:()=>i("code"),className:`flex items-center gap-2 px-5 py-2.5 rounded-md transition-all duration-200 cursor-pointer ${r==="code"?"shadow-sm":""}`,style:{backgroundColor:r==="code"?fe.accentMuted:"transparent",color:r==="code"?fe.accent:fe.textMuted},children:[u.jsx(uu,{"code-path":"src\\sections\\LearnCCLessonPage.tsx:322:15",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:323:15",children:"代码"})]})]})})}),u.jsx("section",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:330:7",className:"px-6 pb-16",children:u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:331:9",className:"max-w-4xl mx-auto",children:[u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:333:11",className:`transition-all duration-300 ${r==="docs"?"opacity-100":"opacity-0 hidden"}`,children:u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:336:13",className:"rounded-xl p-8",style:{backgroundColor:fe.bgTertiary,border:`1px solid ${fe.border}`},children:u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:343:15",className:"prose prose-invert max-w-none",children:tv(h.content)})})}),u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:350:11",className:`transition-all duration-300 ${r==="code"?"opacity-100":"opacity-0 hidden"}`,children:u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:353:13",className:"rounded-xl overflow-hidden",style:{backgroundColor:"#0A0A0A",border:`1px solid ${fe.border}`},children:[u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:361:15",className:"flex items-center justify-between px-5 py-3",style:{backgroundColor:fe.bgSecondary,borderBottom:`1px solid ${fe.border}`},children:[u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:368:17",className:"flex items-center gap-3",children:u.jsxs("span",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:369:19",style:{color:fe.accent,fontFamily:ws},className:"text-sm",children:["agents/",h.id,"_*.py"]})}),u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:373:17",className:"flex items-center gap-3",children:[u.jsx("a",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:374:19",href:h.codeUrl,target:"_blank",rel:"noopener noreferrer",style:{color:fe.textMuted},className:"text-sm hover:text-white transition-colors cursor-pointer mr-3",children:"GitHub →"}),u.jsxs("button",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:383:19",onClick:b,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors hover:bg-white/5 cursor-pointer",style:{color:o?"#22C55E":fe.textMuted},children:[o?u.jsx(ou,{"code-path":"src\\sections\\LearnCCLessonPage.tsx:388:31",className:"w-4 h-4"}):u.jsx(ii,{"code-path":"src\\sections\\LearnCCLessonPage.tsx:388:63",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:389:21",className:"text-sm",children:o?"已复制":"复制"})]})]})]}),u.jsx("pre",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:394:15",className:"p-6 overflow-x-auto",style:{fontFamily:ws,fontSize:"0.85rem",lineHeight:"1.7"},children:u.jsx("code",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:402:17",style:{fontFamily:ws,color:"#E0E0E0"},children:h.code})})]})})]})}),u.jsx("footer",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:417:7",style:{borderTop:`1px solid ${fe.border}`,backgroundColor:fe.bgSecondary},className:"py-6",children:u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:424:9",className:"max-w-4xl mx-auto px-6 flex items-center justify-between",children:[x?u.jsxs("a",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:426:13",href:`/learn-cc/${x.id}`,className:"flex items-center gap-2 group transition-opacity hover:opacity-80 cursor-pointer",style:{color:fe.textSecondary},children:[u.jsx(ni,{"code-path":"src\\sections\\LearnCCLessonPage.tsx:431:15",className:"w-4 h-4 group-hover:-translate-x-1 transition-transform"}),u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:432:15",className:"text-left",children:[u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:433:17",className:"text-xs",style:{color:fe.textMuted},children:"上一章"}),u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:434:17",className:"font-medium",children:_(x.id).cn})]})]}):u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:438:13"}),u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:441:11",className:"text-sm",style:{color:fe.textMuted},children:[ot.findIndex(w=>w.id===a)+1," / ",ot.length]}),g?u.jsxs("a",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:446:13",href:`/learn-cc/${g.id}`,className:"flex items-center gap-2 group transition-opacity hover:opacity-80 cursor-pointer",style:{color:fe.textSecondary},children:[u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:451:15",className:"text-right",children:[u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:452:17",className:"text-xs",style:{color:fe.textMuted},children:"下一章"}),u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:453:17",className:"font-medium",children:_(g.id).cn})]}),u.jsx(li,{"code-path":"src\\sections\\LearnCCLessonPage.tsx:455:15",className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]}):u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:458:13"})]})})]})}const av=[{pattern:a=>a==="/"||a==="/index.html",page:"landing"},{pattern:a=>a==="/cat-cafe",page:"cat-cafe"},{pattern:a=>a==="/prompts",page:"prompts"},{pattern:a=>a==="/design-showcase",page:"design-showcase"},{pattern:a=>a==="/learn-cc"||a==="/lobster/learn",page:"learn-cc"},{pattern:a=>a.match(/^\/learn-cc\/s\d{2}$/)!==null,page:"learn-cc-lesson"},{pattern:a=>a==="/lobster"||a==="/lobster/",page:"home"},{pattern:a=>a==="/lobster/skill",page:"skill"},{pattern:a=>a==="/lobster/diary",page:"diary"},{pattern:a=>a==="/lobster/workspace",page:"workspace"},{pattern:a=>a==="/lobster/tech-eden",page:"tech"},{pattern:a=>a.startsWith("/lobster/tutorial")||a.startsWith("/docs/"),page:"tutorial"},{pattern:a=>a==="/skill",page:"skill"},{pattern:a=>a==="/tutorial"||a.startsWith("/docs/"),page:"tutorial"},{pattern:a=>a==="/diary",page:"diary"},{pattern:a=>a==="/workspace",page:"workspace"},{pattern:a=>a==="/tech-eden",page:"tech"}],sv={landing:"/","cat-cafe":"/cat-cafe",prompts:"/prompts","design-showcase":"/design-showcase","learn-cc":"/learn-cc","learn-cc-lesson":"/learn-cc",home:"/lobster",skill:"/lobster/skill",tutorial:"/lobster/tutorial",diary:"/lobster/diary",workspace:"/lobster/workspace",tech:"/lobster/tech-eden"},Sh=a=>{const r=a.match(/^\/learn-cc\/(s\d{2})$/);return r?r[1]:null},gg=a=>{for(const r of av)if(r.pattern(a))return r.page;return"landing"},rv=()=>typeof window>"u"?"landing":gg(window.location.pathname);function lv(){const[a,r]=Q.useState(rv),[i,o]=Q.useState(Sh(window.location.pathname));Q.useEffect(()=>{const f=()=>{const h=gg(window.location.pathname);r(h),h==="learn-cc-lesson"&&o(Sh(window.location.pathname))};return f(),window.addEventListener("popstate",f),()=>window.removeEventListener("popstate",f)},[]);const d=f=>{r(f),window.history.pushState({},"",sv[f])},p=()=>{switch(a){case"landing":return u.jsx($1,{"code-path":"src\\App.tsx:111:16"});case"cat-cafe":return u.jsx(eb,{"code-path":"src\\App.tsx:113:16"});case"prompts":return u.jsx(Gw,{"code-path":"src\\App.tsx:115:16"});case"design-showcase":return u.jsx(Fw,{"code-path":"src\\App.tsx:117:16"});case"learn-cc":return u.jsx($w,{"code-path":"src\\App.tsx:119:16"});case"learn-cc-lesson":return u.jsx(nv,{"code-path":"src\\App.tsx:121:16",lessonId:i});case"skill":return u.jsx(hb,{"code-path":"src\\App.tsx:123:16"});case"tutorial":return u.jsx(xb,{"code-path":"src\\App.tsx:125:16"});case"diary":return u.jsx(qw,{"code-path":"src\\App.tsx:127:16"});case"workspace":return u.jsx(Bw,{"code-path":"src\\App.tsx:129:16"});case"tech":return u.jsx(Hw,{"code-path":"src\\App.tsx:131:16"});default:return u.jsxs("main",{"code-path":"src\\App.tsx:134:11",children:[u.jsx(nb,{"code-path":"src\\App.tsx:135:13"}),u.jsx(sb,{"code-path":"src\\App.tsx:136:13"}),u.jsx(lb,{"code-path":"src\\App.tsx:137:13"}),u.jsx(ob,{"code-path":"src\\App.tsx:138:13"}),u.jsx(cb,{"code-path":"src\\App.tsx:139:13"}),u.jsx(fb,{"code-path":"src\\App.tsx:140:13"})]})}};return a==="landing"||a==="cat-cafe"||a==="prompts"||a==="design-showcase"||a==="learn-cc"||a==="learn-cc-lesson"?u.jsx(u.Fragment,{children:p()}):u.jsxs("div",{"code-path":"src\\App.tsx:152:5",className:"min-h-screen bg-lobster-dark text-white",children:[u.jsx(tb,{"code-path":"src\\App.tsx:153:7",onNavigate:d}),p(),u.jsx(mb,{"code-path":"src\\App.tsx:155:7"})]})}Uy.createRoot(document.getElementById("root")).render(u.jsx(Q.StrictMode,{"code-path":"src\\main.tsx:7:3",children:u.jsx(lv,{"code-path":"src\\main.tsx:8:5"})}));
